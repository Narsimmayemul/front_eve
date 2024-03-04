import React, {useState} from "react"
import { Navigate } from "react-router-dom"


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const onSubmit = () => {
        const payload = JSON.stringify({email, password})
        
        fetch("https://dull-blue-wildebeest-gear.cyclic.app/login", {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : payload
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            const token = res.token;
            localStorage.setItem("mernapptoken", token)
            
        })
        .catch((err) => console.log(err))
    }
    return (
        <div>
            <h1>Login</h1>
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={onSubmit}>Login</button>
        </div>
    )
}

export {Login}