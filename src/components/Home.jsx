import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
    const [_id, set_ID] = useState(0);
   const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

   const [title1, setTitle1] = useState("");
    const [body1, setBody1] = useState("");
const [category1, setCategory1] = useState("");
    const [date1, setDate1] = useState("");
    
    const url = 'https://dull-blue-wildebeest-gear.cyclic.app/';

    const handle_login=()=>{
        
    }

    const handle_signup=()=>{

    }
    


const handle_Update=(e)=>{
    const data = e;
    console.log(data)
set_ID(e._id)
setTitle(e.title)
setBody(e.body)
setCategory(e.category)
setDate(e.date)
}    

const Update_Fun=async ()=>{
    try {
        await axios.put(url +"/products/"+_id, {
            title:      title,
            body:       body,
            category:   category,
            date:       date,
        });
        setTitle("");
        setBody("");
        setCategory("");
        setDate("");
        getData();
    } catch (error) {
        console.log('this error from update fun   ' + error);
    }
}

const ADD_Fun= async()=>{
try {
    await axios.post(`https://dull-blue-wildebeest-gear.cyclic.app/products/create` , {
            title:      title1,
            body:       body1,
            category:   category1,
            date:       date1,
    });
    console.log('data posted')
        setTitle1("");
        setBody1("");
        setCategory1("");
        setDate1("");
        getData();
} catch (error) {
    console.log('this error from react post fun   ' + error);
}
}

const handle_Delete= async(od)=>{
    try {
        await axios.delete(`${url}/products/${od}`);
        getData();
    } catch (error) {
        console.log('this error from react delete fun   ' + error);
    }
}


    const getData = async() => {
        try {
            const token = localStorage.getItem("mernapptoken");
            console.log(token)
            
            const dataf = await fetch(url, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            });
            if (!dataf.ok) {
                throw new Error("Failed to fetch data from server");
            }
            let res;
            try {
                res = await dataf.json();
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }            
                setData(res);
            
            console.log(res)
        } catch (error) {
            console.log('error from react get fun     ' + error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

  return (
    <>
        <h1>Data Only Visible After Login</h1>
        <button style={{border:'none' , background:"white"}} onClick={handle_login} >For Login Visit "/login"</button>
        <button style={{border:'none' , background:"white"}} onClick={handle_signup}>For SignUp Visit "/signup"</button>
    <div style={{display:'flex' , justifyContent:'center' , gap:"15px" , marginTop:'50px'}}>
      {
        data?.map((e)=>(
        <div style={{border:'1px solid red' , padding:"10px"}} key={e._id}>
            <h3>{e.title}</h3>
            <h3>{e.body}</h3>
            <h3>{e.category}</h3>
            <h3>{e.date}</h3>
            
            <button onClick={()=>handle_Update(e)} >Update</button>
            <button onClick={()=>handle_Delete(e._id)}>Delete</button>
        </div>
))}

    </div>
            <div>
                <input type="text" placeholder='Title'   value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder='Body'   value={body} onChange={(e) => setBody(e.target.value)} />
                <input type="text" placeholder='Category'   value={category} onChange={(e) => setCategory(e.target.value)} />
                <input type="text" placeholder='date'   value={date} onChange={(e) => setDate(e.target.value)} />
                <button  onClick={Update_Fun}>Update</button>
            </div>

            <div>
                <input type="text" placeholder='Title'   value={title1} onChange={(e) =>       setTitle1(e.target.value)} />
                <input type="text" placeholder='Body'   value={body1} onChange={(e) =>         setBody1(e.target.value)} />
                <input type="text" placeholder='Category'   value={category1} onChange={(e) => setCategory1(e.target.value)} />
                <input type="text" placeholder='date'   value={date1} onChange={(e) =>         setDate1(e.target.value)} />
                <button  onClick={ADD_Fun}>Add</button>
            </div>

            
    </>
  )
}

export default Home
