import React from 'react'
import { Link } from 'react-router-dom'
const Intropage = () => {
  return (
    <div className='h-screen flex justify-center items-center flex-col gap-4 bg-gradient-to-t from-slate-400 to-purple-600'>
        <h1 className='font-medium text-2xl'>Welcome😊</h1>
        <p className='font-medium text-md'>Click the below button</p>
        <Link to={'/slider'} className='bg-red-500 p-2 rounded-full hover:opacity-60 transition-opacity duration-500 px-6'>Click</Link>
    </div>
  )
}

export default Intropage