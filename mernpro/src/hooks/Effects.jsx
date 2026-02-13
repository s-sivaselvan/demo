import React, { useEffect, useState } from 'react'

const Effects = () => {
    const [count,setCount]=useState(0)
    const [users,setUsers]=useState([])
    // useEffect(()=>{
    //     console.log("From UseEffect")
    //     return()=>{
    //         console.log("CleanUp Function")
    //     }
    // },[])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => { return response.json(); })
  .then((data) =>setUsers(data))
    })
  return (
    <div>Effects
    <h3>Count:{count}</h3>
    <button onClick={()=>setCount(count+1)}>Click</button>
    <ul>
        {users.map((user)=>(
            <li>Name:{user.name}   Email:{user.email}<br/></li>
        ))}
    </ul>
    </div>
  )
}

export default Effects