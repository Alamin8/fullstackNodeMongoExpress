const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {

  register: async (req, res) => {
    try {
      const {stuff_id, name, email, mobile, password } = req.body;

      const user = await Users.findOne({ stuff_id });
      if (user) {
        return res.status(400).json({ msg: "The stuff id already exists." });
      }
      if (password.length < 6) {
        return res
          .status(400)
          .json({ msg: "Password is at least 6 characters long." });
      }

      //Password Encryption
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new Users({
        stuff_id,
        name,
        email,
        mobile,
        password: passwordHash,
      });
      //save mongodb
      await newUser.save();

      //create json webtoken for authentication
      const accesstoken = createAccessToken({ id: newUser._id });
      const refreshtoken = createRefreshToken({ id: newUser._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/user/refresh_token",
        maxAge: 7*24*60*60*1000 // 7 days
      });

      res.json({ accesstoken });
      res.json({ msg: "Register Success!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const {stuff_id, email, password } = req.body;

      const user = await Users.findOne({stuff_id, email});
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Incorrect password." });

      // if login success, create access token and refresh token
      const accesstoken = createAccessToken({ id: user._id });
      const refreshtoken = createRefreshToken({ id: user._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/user/refresh_token",
        maxAge: 7*24*60*60*1000 // 7 days
      });

      res.json({ accesstoken });
    res.json({ msg: "Login Success!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
      res.json({ msg: "Logged out" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  refreshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token)
        return res.status(400).json({ msg: "Please Login or Register" });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err)
          return res.status(400).json({ msg: "Please Login or Register" });

        const accesstoken = createAccessToken({ id: user.id });

        res.json({ user, accesstoken });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getUser: async (req, res) => {
    try {
      console.log("hello");
      const user = await Users.findById(req.user.id).select('-password') //select means thats not come from database
      console.log("Hello2");
      if(!user) return res.status(500).json({ msg: "User does not exist." });

      res.json(user)
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAllUser: async (req, res) => {
    try {
      const user = await Users.find().select('-password') //select means thats not come from database
      if(!user) return res.status(500).json({ msg: "User does not exist." });

      res.json(user)
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  // addCart: async (req, res)=>{
  //   try{
  //     const user = await Users.findById(req.user.id)
  //      if(!user)  return res.status(400).json({msg: "User does not exist."})

  //      await Users.findOneAndUpdate({_id:req.user.id},{
  //        cart:req.body.cart
  //      })

  //      return res.json({msg: "Added to cart"})
  //   }catch(err){
  //     return res.status(500).json({ msg: err.message });
  //   }
  // },
//   history: async( req, res)=>{
//     try {
//       const history = await Payments.find({user_id: req.user.id})

//       res.json(history)
//     } catch (err) {
//       return res.status(500).json({ msg: err.message });
//     }
//   }

};



//it's a function, and use it any place just like callback function
const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECTET, { expiresIn: "11m" });
};


const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};


module.exports = userCtrl;





