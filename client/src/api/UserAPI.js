import { useEffect, useState } from 'react';
import axios from 'axios'

const UserAPI = (token) => {
    const [isLogged, setIsLogged]=useState(false)
    const [isAdmin, setIsAdmin]=useState(false)
    const [callback, setCallback]=useState(false)
    const [loginUser, setLoginUser]=useState([])

    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                console.log("hello")
                try {
                    const res = await axios.get('/user/infor', {
                        headers: {Authorization: token}
                    })
                    // console.log(res.data);
                    setLoginUser(res.data)
                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)

                } catch (err) {
                    alert(err.response)
                }
            }

            getUser()
            
        }
    },[token])
    // console.log(loginUser._id)
    return {
        isLogged:[isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        callback: [callback, setCallback],
        loginUser:[loginUser, setLoginUser]
    }
};

export default UserAPI;