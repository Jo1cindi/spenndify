import React from 'react'
import { IoAddCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';



const AddTransactionButton = () => {
  const navigate  = useNavigate()
  
  const navigation = () =>{
    navigate("/AddTransaction")
  }
  return (
    <div className="addfile"><IoAddCircleSharp className="addBtn" onClick={navigation}/></div>
  )
}

export default AddTransactionButton