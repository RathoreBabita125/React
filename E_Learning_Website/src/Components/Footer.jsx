import React from 'react'

function Footer() {
  return (
    <div>
        <div className='bg-cyan-950 flex flex-wrap text-white justify-around text-[18px] text-center'>
          <div className='my-10'>
            <p>Contacts</p>
            <div className='w-25 bg-orange-800 h-[2px] rounded-xl items-center m-auto'></div>
            <img 
              className='w-20 h-20 items-center m-auto'
              src="https://imgs.search.brave.com/ZV5toXlqMHo0Ql842ZxcrCcUQCuXbr8LXu_cNKM_1cs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTUv/ODYyLzI4Ni9zbWFs/bC8zZC1iZWF1dGlm/dWwtYmFkZ2UtY2hl/Y2tsaXN0LXZlcmlm/aWVkLWFjaGlldmVt/ZW50LXBuZy5wbmc" alt="" />
              <p>Email: </p>
              <p>support@br.com</p>
              <p>techsupport@br.com</p>
          </div>
          <div className='my-10'>
            <p>PW Skills</p>
            <div className='w-25 bg-orange-800 h-[2px] rounded-xl items-center m-auto'></div>
            <ul className='text-[15px] my-2'>
              <li>About Us</li>
              <li>FAQS</li>
              <li>Privacy Policy</li>
            </ul>

          </div>
          <div className='my-10'>
            <p>Products</p>
            <div className='w-25 bg-orange-800 h-[2px] rounded-xl items-center m-auto '></div>
            <ul className='text-[15px] my-2'>
              <li>Skills Lab</li>
              <li>Job Portal</li>
              <li>Experience Portal</li>
              <li>Affiliate</li>
              <li>Hall of Fame</li>
            </ul>

          </div>
          <div className='my-10'>
            <p>Links</p>
            <div className='w-25 bg-orange-800 h-[2px] rounded-xl items-center m-auto'></div>
            <ul className='text-[15px] my-2'>
              <li>Discord</li>
              <li>Youtube</li>
              <li>Career Portal</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer
