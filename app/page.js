"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc , setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault() 
    setmaintask([...maintask, {title, desc }]);
    settitle("")
    setdesc("")
  }
  const deleteHandler =(i)=>{
    let copytask =[...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }

  let rederTask = <h2>No task Available</h2>

 if(maintask.length>0){
  rederTask = maintask.map((t,i)=>{
    return(
      <li key={i} className='flex items-center justify-between mb-8'>
      <div className= 'w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <p className='text-xl font-medium'>{t.desc}</p>
      </div>
      <button
      onClick={
        ()=>{
          deleteHandler(i)
        }
        }
      className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
    </li>
    ) 
  })
 }
  return (
    <>
    <h1 className='bg-black text-center text-white text-4xl font-bold' >Adi's Todo list</h1>
    <form onSubmit={submitHandler}>
      <input type="text" className='text-2xl border-zinc-800
      border-4 m-8 px-4 py-2'
      placeholder="enter task here"
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />  
    <input type="text" className=' text-2xl border-zinc-800
      border-4 mx-8 my-4 px-4 py-2'
      placeholder="enter description here"
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
    />
    <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5'>
    Add task  
    </button>    
    </form>
    <hr />
    <div className='p-8 bg-slate-200'>
     <ul>
      {rederTask}
     </ul>
    </div>
    </>
  )
}

export default page