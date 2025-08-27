"use client"
import React, { useState } from 'react'

const index = () => {
    
    const[contactInfo, setContactInfo] = useState({name : "", email: "" , message: ""})
    const changehandler = (data) => {
        setContactInfo({...contactInfo, [data.target.name] : data.target.value})
    }
    const handleSubmit = (data) => {
        data.preventDefault();
        console.log(contactInfo)
        
        setContactInfo({
            name:"",
            email:"",
            message:""
        })
    }

  return (
    <div className='min-h-screen text-center p-10 mx-auto bg-slate-200'>
      <h1 className='text-center text-4xl'>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='name' value={contactInfo.name} onChange={changehandler}/>
        <input type='email' name='email' placeholder='email' value={contactInfo.email} onChange={changehandler} />
        <input type='textarea' name='message' placeholder='message' value={contactInfo.message} onChange={changehandler}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default index
