import React from 'react'
import lotus from '../../assets/lotus.png'

function Footer() {
  return (
    <div className='w-full bg-red-100'>
        <div className='flex justify-center relative'>
            <img className='md:w-[32vw] md:h-[60vh] opacity-20 'src={lotus} />

            <div className='w-1/3 absolute text-center space-y-2 top-20'>
                <div className='flex justify-center'>
                 <img src={lotus} className='w-[40px] h-[40px]'/>
                </div>
                <p style={{fontFamily: "Great Vibes"}} className='text-2xl text-red-950 italic font-serif font-semibold'>Glam Books</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Iure cum quod accusantium. Lorem ipsum, dolor sit amet consectetur 
                    adipisicing elit. Ipsam, soluta.
                </p>
                <div className='space-x-4'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-square-x-twitter"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-telegram"></i>               
                </div>
            </div>
            
        </div>

        <p className='text-gray-600 text-center p-5'>@Copyright 2025, Beauty Salon</p>

      
    </div>
  )
}

export default Footer
