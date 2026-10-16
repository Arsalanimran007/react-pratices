import React, { useEffect, useState } from 'react'
import { api } from "../axiosInstance.js";

const AxiosIns = () => {
  const [users,setUsers]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(false)

  useEffect(()=>{
    const fetchUsers= async ()=>{ 
     try {
       const response= await api.get('/users');
      setUsers(response.data)
     } catch (error) {
setError(error.message)
     }finally{
      setLoading(false);
     }
   
    }
      fetchUsers()
  },[])

  if(loading) return <p>loading....</p>
  if(error) return <p>Error: {error}....</p>
  
  return (
    <div>
      <ul>{
        users.map((user)=>{
          return <li key={user.id}>{user.name}</li>
        })
        }</ul>
    </div>
  )
}

export default AxiosIns