import React, {useState} from "react"

const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [department, setDepartment] = useState("")
    const [phone_number, setPhone_number] = useState("")


    const onSubmit = () => {
        const payload = JSON.stringify({name, email, password , department , phone_number})
        
        fetch("https://dull-blue-wildebeest-gear.cyclic.app/register", {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : payload
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    return (
        <div>
            <h1>Signup</h1>
            <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" placeholder="phone_number" onChange={(e) => setDepartment(e.target.value)}/>
            <input type="text" placeholder="department" onChange={(e) => setPhone_number(e.target.value)}/>
            <button onClick={onSubmit}>Signup</button>
        </div>
    )
}

export {Signup}


//     name:{type:String , required:true},
//     email:{type:String , required:true},
//     password:{type:String , required:true},
//     phone_number:{type:String , required:true},
//     department:{type:String , required:true}