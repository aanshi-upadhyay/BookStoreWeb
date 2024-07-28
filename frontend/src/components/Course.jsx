import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios"

export default function Course() {
  const  [book, setBook] = useState([])
  useEffect(() =>{
    const getBook = async()=>{
    try {
     
     const res =  await axios.get("http://localhost:6007/book");
      console.log(res.data);
      setBook(res.data);

    } catch (error) {
      console.log(error);
    }
  };
  getBook();
  },[]);
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className='mt-28 items-center justify-center item text-center'>
            <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
        <p className='mt-12'>
        Books are like portals to different worlds, perspectives, and ideas. They hold within them the power to educate, entertain, and inspire. Whether fiction or non-fiction, each book offers a unique experience, inviting readers to explore new thoughts, emotions, and cultures. They can ignite imagination, provoke introspection, and connect us with the wisdom of generations past. In a world of constant change, books remain a timeless source of knowledge and a refuge for the curious mind.
        </p>
        <Link to="/">
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>
        </div>
<div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
    {
  book.map((item) =>(
    <Cards key={item.id} item={item}/>
  ))
    }
</div>
        </div>
        </>
  )
}
