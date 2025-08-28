"use client"
import React, { useState } from 'react'

const ContactPage = () => {
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
    <div className="min-h-screen text-center p-10 mx-auto bg-slate-200 flex flex-col justify-start items-center">
      <h1 className="text-center text-4xl font-bold text-gray-800">CONTACT FORM</h1>
      <form onSubmit={handleSubmit}  className="w-full max-w-4xl py-8 px-6 bg-white m-5 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center gap-5">
        <input  className="flex-1 border rounded-md py-3 px-12 border-gray-300 " type='text' name='name' placeholder='name' value={contactInfo.name} onChange={changehandler}/>
        <input  className="flex-1 border rounded-md py-3 px-12 border-gray-300 " type='email' name='email' placeholder='email' value={contactInfo.email} onChange={changehandler} />
        <input  className="flex-1 border rounded-md py-3 px-12 border-gray-300 " type='textarea' name='message' placeholder='message' value={contactInfo.message} onChange={changehandler}/>
        <button className="w-full md:w-1/3 bg-blue-500 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition" type='submit'>submit</button>
      </form>
    </div>
  )
}

export default ContactPage
