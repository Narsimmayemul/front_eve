import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Home = () => {
    const [data, setData] = useState([]);
    const url = 'https://dull-blue-wildebeest-gear.cyclic.app/'


    const getData = async() => {
        try {
            const dataf = await fetch(url);
            const res = await dataf.json();
            setData(res);
        } catch (error) {
            console.log('error from react get fun' + error);
        }
    }


//     name:{type:String , required:true},
//     email:{type:String , required:true},
//     password:{type:String , required:true},
//     phone_number:{type:String , required:true},
//     department:{type:String , required:true}
// })


// const Products_Schema = mongoose.Schema({
//     title:{type:String , required:true},
//     body:{type:String , required:true},
//     category:{type:String , required:true , enum:["parking", "covid", "maintenance"]},
//     date:{type:String , required:true}

    useEffect(() => {
        getData();
    }, [])
  return (
    
    <div>
      {data?.map((e)=>{
        <div key={e._id}>
            <h3>{e.title}</h3>
            <h3>{e.body}</h3>
            <h3>{e.category}</h3>
            <h3>{e.date}</h3>
        </div>
})}
    </div>
  )
}

export default Home
