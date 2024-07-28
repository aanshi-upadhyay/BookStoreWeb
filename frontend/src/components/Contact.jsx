import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

export default function Contact() {
    const location= useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = async(data) =>{
        const userInfo = {
          fullname:data.fullname,
          email:data.email,
          password:data.password,
    
        }
        await axios.post("http://localhost:6007/user/submit", userInfo)
          .then((res)=>{
            console.log(res.data)
            if(res.data){
              toast.success("Submitted successfully");
              navigate(from, {replace: true});
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }).catch((err)=>{
            if(err.response){
            console.log(err)
            toast.error("Error: " + err.response.data.message);
            }
          })
        };



  return (
<>
<div className="flex h-screen items-center justify-center">
    <div className=" w-[600px]">
        <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h1 className="font-bold text-lg">Contact Us</h1>
    <div className="mt-4 space-y-2"> 
    <span>Name</span>
    <br />
    <input type="text"  placeholder="Enter your name" className="w-80 px-3 py-1  border rounded-md outline-none"
    {...register("name", { required: true })}/>
    <br />
    {errors.name && (<span className=" text-sm text-red-500">This field is required</span>)}
    
   </div>
    {/*email*/}
   <div className="mt-4 space-y-2"> 
    <span>Email</span>
    <br />
    <input type="Email" placeholder="Email address" className=" w-80 px-3 py-1 border rounded-md outline-none"
    {...register("email", { required: true })}/>
     <br />
        {errors.email && (<span className=" text-sm text-red-500">This field is required</span>)}
    
   </div>
   {/*Message*/}
   <div className="mt-4 space-y-2"> 
    <span>Message</span> 
    <br />


    <input class="placeholder:text-slate-400 border rounded-md pl-2 pb-8 px-3 py-1 focus:outline-none w-80" placeholder="Type your message" 
    {...register("Message", { required: true })}/><br />
    {errors.Message && (<span className=" text-sm text-red-500">This field is required</span>)}
  </div>
  
  {/*button*/}
  <div className="flex relative ml:-50px mt-4">
    <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
        Submit
    </button>
    <button
     className="underline text-blue-500 cursor-pointer"
    onClick={() =>
    document.getElementById("my_modal_3").showModal()}></button>
 </div>
 </form>
 </div>
 </div>
 </div></>
  )
}
