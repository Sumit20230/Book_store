import React from 'react';
import { useState,useEffect } from 'react';
import BackButton from '../components/Backbutton';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';



const Createbook = () => {
const [name,setName]=useState("");
const [author,setAuthor]=useState("");
const [year,setYear]=useState(0);
const [loading,setloading]=useState(false);
const navigate=useNavigate();
const data={name,author,year};
const handlebook=()=>{
  const data={name,author,year};
  setloading(true);
  axios.post(`http://localhost:3000/books/`,data).then(()=>{
    setloading(false);
    navigate("/");

  }).catch((e)=>{
    setloading(false);
    console.log(e);
  })
}
  return (
    <div className='p-4'>
    <BackButton/>
      <h1 className='text-3xl my-4'>CreateBook</h1>
      {
        loading?<Spinner/>:' '
      }
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-{600px} p-4 mx-auto'>
      <div className='my-4'>
      <label className='text-xl mr-4 text-gray-500'>
      Name
      </label>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)  } className='border-2 border gray-500 px-4 px-2 w-full'></input>
      </div>
      
      </div>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-{600px} p-4 mx-auto'>
      <div className='my-4'>
      <label className='text-xl mr-4 text-gray-500'>
      Author
      </label>
      <input type='text' value={author} onChange={(e)=>setAuthor(e.target.value)  } className='border-2 border gray-500 px-4 px-2 w-full'></input>
      </div>
      
      </div>
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-{600px} p-4 mx-auto'>
      <div className='my-4'>
      <label className='text-xl mr-4 text-gray-500'>
      Year
      </label>
      <input type='text' value={year} onChange={(e)=>setYear(e.target.value)  } className='border-2 border gray-500 px-4 px-2 w-full'></input>
      </div>
      
      </div>
      <button className='center' onClick={handlebook}>submit</button>
    </div>
  )
}

export default Createbook
