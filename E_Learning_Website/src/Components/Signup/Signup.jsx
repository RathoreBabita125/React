import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='w-full h-screen flex flex-wrap justify-center items-center mt-10'>
            <div className='w-[35vw] text-cyan-950 dark:text-white p-7' >
                <p className='text-center text-3xl font-bold'>Sign Up</p>

                <div className='space-y-3 w-full mt-5'>

                    <div className='flex flex-wrap border border-gray-400 rounded-[4px] items-center justify-between p-[5px]'>
                        <input className='outline-none font-semibold' type="email" placeholder='Email' />
                        <i class="fa-solid fa-envelope"></i>
                    </div>

                    <div className='flex flex-wrap border border-gray-400 rounded-[4px] items-center justify-between p-[5px]'>
                        <input className='outline-none font-semibold' type="password" placeholder='Create Password' />
                        <i class="fa-solid fa-lock"></i>
                    </div>

                    <div className='flex flex-wrap border border-gray-400 rounded-[4px] items-center justify-between p-[5px]'>
                        <input className='outline-none font-semibold' type="password" placeholder='Confirm Password' />
                        <i class="fa-solid fa-lock"></i>
                    </div>

                    <button className='w-full rounded-[4px] py-1 bg-cyan-950 text-white cursor-pointer' type='submit'>Sign Up</button>
                    <br />
                    <p className='text-center'>Already have an account? <Link className='text-gray-700 dark:text-gray-500 font-semibold underline'>Login</Link></p>
                    <br />
                    <div className='md:flex justify-center items-center space-x-3'>
                        <p className='md:w-[40vh] h-[1px] bg-gray-700'></p>
                        <p>Or</p>
                        <p className='md:w-[40vh] h-[1px] bg-gray-700'></p>
                    </div>
                    <br />

                    <div className='flex border border-gray-400 rounded-[4px] items-center justify-between p-[5px] bg-gray-400 dark:bg-gray-700'>
                        <i class="fa-brands fa-google cursor-pointer"></i>
                        <button className='text-center w-full cursor-pointer' type="submit">Sign in with Google</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Signup
