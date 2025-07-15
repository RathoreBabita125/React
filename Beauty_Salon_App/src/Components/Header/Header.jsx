import React from 'react'
import lotus from '../../assets/lotus.png'

function Header() {
  return (
    <div className=' flex flex-wrap justify-between items-center p-3'>
        <div className='space-x-5 text-xl'>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
        </div>
        <div className='justify-between'>
            <ul className='md:flex flex-wrap hidden space-x-5 items-center font-semibold'>
                <li>Home</li>
                <li>Services</li>
                <img src={lotus} alt="img" className='w-[45px] h-[35px]'/>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            
        </div>
        <div className='space-x-5 text-xl'>
            {/* <i class="fa-solid fa-suitcase"></i> */}
            <i class="fa-solid fa-cart-plus"></i>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      
    </div>
  )
}

export default Header
