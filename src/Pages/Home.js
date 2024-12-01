import React from 'react'
import Widgets from './Widgets/Widgets'
import Sidebar from './Sidebar/sidebar'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();
  const user={
    displayname:"bithead",
    email:"bithead@gmail.com"
  }
  const handleout=async ()=>{
    try{
      navigate("/login");

    }
    catch(error){
      console.log(error.message);
    }
  }
  return (
    <div className='app'>
      <Sidebar handleout={handleout} user={user}/>
      <Outlet/>
      <Widgets />
    </div>
  )
}

export default Home