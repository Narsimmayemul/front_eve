import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Home = () => {
    const [data, setData] = useState([]);
    const url = 'https://dull-blue-wildebeest-gear.cyclic.app/';


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
            console.log('error from react get       fun    ' + error);
        }
    }

    useEffect(() => {
        getData();
    }, [])
  return (
    <div>
      {
        data?.map((e)=>(
        <div style={{border:'1px solid red'}} key={e._id}>
            <h3>{e.title}</h3>
            <h3>{e.body}</h3>
            <h3>{e.category}</h3>
            <h3>{e.date}</h3>
            <button>Update</button>
            <button>Delete</button>
        </div>
))}:<div>
    <h2>You Need To Login</h2>
</div>
    </div>
  )
}

export default Home


// import React, {useState, useEffect} from "react"

// const Blog = () => {

//     const [blogs, setBlogs] = useState([])

//     useEffect(() => {
//         getBlogs()
//     }, [])

//     const getBlogs = () => {
//         const token = localStorage.getItem("mernapptoken")
//         fetch("http://localhost:7500/blogs", {
//             method : "GET",
//             headers : {
//                 "Authorization" : Bearer ${token}
//             },
//         })
//         .then((res) => res.json())
//         .then((res) => {
//             setBlogs(res.blogs)
//         })
//         .catch((err) => console.log(err))
//     }
//     return (
//         <div>
//             <h1>Blogs...</h1>
//             {blogs && blogs.map((blog) => {
//                 return <h3 key = {blog._id}>{blog.title}</h3>
//                 //return <blog blog={blog} key={blog._id}/>
//             })}
//         </div>
//     )
// }

// export {Blog}