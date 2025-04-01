import React from 'react'

export default function RegisterPage() {
  return (
    <div>
       <div className='flex items-center justify-center h-[90vh]'>
        <form className='w-11/12 md:w-6/12 lg:w-4/12 border border-gray-200 p-8 space-y-4'>
        <p className="text-3xl font-bold flex justify-center  ">Register</p>

            <div className='flex flex-col'>
                <label htmlFor="email-address">Email Address</label>
                <input id='email-address' type="email"placeholder='Enter your mail address' className='border border-gray-300 px-2 py-1 outline-0'/>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="user-password">Password</label>
                <input id='user-password' type="password"placeholder='Type password' className='border border-gray-300 px-2 py-1 outline-0'/>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="user-password"> Confirm Password</label>
                <input id='user-password' type="password"placeholder='Confirm password' className='border border-gray-300 px-2 py-1 outline-0'/>
            </div>

           <div className='flex justify-end'>
           <button className='bg-blue-500 px-8 py-1.5 text-white hover:bg-pink-500 duration-500 cursor-pointer rounded-xl'>Register</button>
           </div>
        </form>


    
    </div>
    </div>
  )
}
