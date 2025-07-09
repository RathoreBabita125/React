import React from 'react'
import PersonImage from '../assets/PersonImage.png'

function Home() {
  return (
    <div>
      <div className='w-full md:flex '>
          <div className='md:w-[65vw] flex flex-wrap md:my-30 my-20 '>           
            <div className='text-2xl' >
              <p className='md:text-7xl text-6xl font-extrabold text-cyan-950 text-center dark:text-white'>THE INDUSTRY REQUIRES ADVANCED SKILLS.</p>
              <p className='text-4xl font-bold text-cyan-800 my-4 text-center dark:text-blue-300'>GET IT THE SMARTER WAY.</p>
              <p className='text-3xl text-amber-800 font-semibold text-center dark:text-amber-200'>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet.</p>
            </div>          
          </div>
          <div className='md:w-[35vw] md:my-30'>                        
              <img 
                className=''
                src={PersonImage}
              />              
          </div>
        </div>
       
        <div className='w-full justify-center '>
          <p className='text-cyan-950 text-4xl text-center font-extrabold dark:text-white'>PURE HARDWORK, NO SHORTCUTS</p>
          <div className='w-50 bg-orange-800 h-1 rounded-xl items-center m-auto my-4'></div>
        </div>

        <div className='w-full h-auto columns-3 md:my-10 flex flex-wrap items-center justify-center md:gap-40 text-center'>
          <div className='w-50 h-50'>
            <img className='w-30 h-30 items-center m-auto'
              src="https://imgs.search.brave.com/kjPvdecDeqlKJu_MfdhnG_-FVE6z5F_01XS7yDjV15w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTYv/Mzg5Lzk4MS9zbWFs/bC9lZHVjYXRpb24t/ZXhwZW5zZXMtYW5k/LXNjaG9sYXJzaGlw/LWZyZWUtcG5nLnBu/Zw" alt="" />
              <p className='text-xl text-cyan-950 font-extrabold dark:text-white'>6000+</p>
              <p className='text-xl text-cyan-800 font-bold dark:text-amber-200'>Different Courses</p>
          </div>
          <div className='w-50 h-50 items-center justify-center'>
            <img className='w-30 h-30 items-center m-auto'
              src="https://imgs.search.brave.com/054lJx-k2oEhuXfSzUy_7nS2XnnIPsJ_mTjqPsaXdsQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzExLzgzNy9zbWFs/bC8zZC1ncmFkdWF0/aW9uLWNhcC13aXRo/LWRpcGxvbWEtYW5k/LXBpbGUtb2YtYm9v/a3MtcG5nLnBuZw" alt="" />
              <p className='text-xl text-cyan-950 font-extrabold dark:text-white'>70,000+</p>
              <p className='text-xl text-cyan-800 font-bold dark:text-amber-200'>Student Enrolled</p>
          </div>
          <div className='w-50 h-50 items-center justify-center'>
            <img className='w-30 h-30 items-center m-auto'
              src="https://imgs.search.brave.com/tO6zW9V-GNXjnaRSyP_77smMPLluzdDgPOC2NaoWiyY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXN1Y2Nlc3NmdWwt/Ym9va2luZy1pY29u/LWRvd25sb2FkLWlu/LXN2Zy1wbmctZ2lm/LWZpbGUtZm9ybWF0/cy0tc3VjY2Vzcy1k/b25lLXRpY2tldC1v/bmxpbmUtY2luZW1h/LXBhY2stZW50ZXJ0/YWlubWVudC1pY29u/cy0xNDg5NDExLnBu/Zz9mPXdlYnAmdz0x/Mjg" alt="" />
              <p className='text-xl text-cyan-950 font-extrabold dark:text-white'>10,000+</p>
              <p className='text-xl text-cyan-800 font-bold dark:text-amber-200'>Successful Transition</p>
          </div>
        </div>
        
        <div className='w-full justify-center'>
          <p className='text-cyan-950 text-4xl text-center font-extrabold dark:text-white'>OUR PRODUCTS</p>
          <div className='w-50 bg-orange-800 h-1 rounded-xl items-center m-auto my-4'></div>
        </div>

         <div className='w-full h-auto columns-5 md:my-10 flex flex-wrap items-center justify-center md:gap-10 text-center'>
          <div className='w-50 h-50'>
            <img className='w-15 h-15 items-center m-auto'
              src="https://imgs.search.brave.com/R8JKCQeAC93ektIRfGkODiM0DAIeNRAhJdyb_xLrsds/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvb25saW5l/LXJlc3VtZS1pbGx1/c3RyYXRpb24tZG93/bmxvYWQtaW4tc3Zn/LXBuZy1naWYtZmls/ZS1mb3JtYXRzLS1q/b2ItYXBwbGljYXRp/b24tcG9ydGFsLWFw/cGx5LWN2LWZpbmQt/cmVzb3VyY2UtbW9i/aWxlLWFwcGxpY2F0/aW9ucy1wYWNrLWRl/c2lnbi1kZXZlbG9w/bWVudC1pbGx1c3Ry/YXRpb25zLTYxNTk3/MTgucG5n" alt="" />
              <p className='text-xl text-cyan-950 font-extrabold dark:text-white'>Job Portal</p>
              <p className='text-cyan-800 font-bold dark:text-amber-200'>Lorem ipsum dolor sit amet consectetur adipisicing. Lorem, ipsum.</p>
          </div>
          <div className='w-50 h-50 items-center justify-center'>
            <img className='w-15 h-15 items-center m-auto'
              src="https://imgs.search.brave.com/3ayEOOo65Mpf7FY_29N_TUjT9TcSFeYohGLq5CdPXtk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZHVkTk1qOTVW/L3cvNDAwL2gvNDAw/L3RoZW1lL2Rhcmsv/aWNvbi5qcGVnP2M9/MWJ4aWQ2NE11cDdh/Y3pld1NBWU1YJnQ9/MTc0MTYwMjM4NDky/MQ" alt="" />
              <p className='text-xl text-cyan-950 font-extrabold dark:text-white'>Skills Lab</p>
              <p className='text-cyan-800 font-bold dark:text-amber-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='w-50 h-50 items-center justify-center'>
            <img className='w-15 h-15 items-center m-auto'
              src="https://imgs.search.brave.com/ih_VWat3PXpspx_c-1Wlsbg-n5CoTZ0_51paSCQY3F4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMTUxNzUvMTUx/NzU2OTAucG5n" alt="" />
              <p className='text-xl text-cyan-950 font-extrabold dark:text-white'>Experience Portal</p>
              <p className='text-cyan-800 font-bold dark:text-amber-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, id?</p>
          </div>
          <div className='w-50 h-50 items-center justify-center'>
            <img className='w-15 h-15 items-center m-auto'
              src="https://imgs.search.brave.com/ClpvgzZDyWvnwEQLh_yGWurzTmIOuXEdHcwoD6dqHtA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvOTUyMy85NTIz/Nzg1LnBuZw" alt="" />
              <p className='text-xl text-cyan-950 font-extrabold dark:text-white'>Affiliate</p>
              <p className='text-cyan-800 font-bold dark:text-amber-200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, sunt.</p>
          </div>
          <div className='w-50 h-50 items-center justify-center'>
            <img className='w-15 h-15 items-center m-auto'
              src="https://imgs.search.brave.com/up_CCWvq5ud1bNdocibufYK2cezutt0_ThxqIDE2_Hg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvYWZmaWxp/YXRlLW1hcmtldGlu/Zy1pbGx1c3RyYXRp/b24tZG93bmxvYWQt/aW4tc3ZnLXBuZy1n/aWYtZmlsZS1mb3Jt/YXRzLS1hbmFseXRp/Y3MtbG9nby1yZWZl/cnJhbC1wcm9ncmFt/LWpvaW5pbmctYm9u/dXMtcmVmZXItYS1m/cmllbmQtcGFjay1w/ZW9wbGUtaWxsdXN0/cmF0aW9ucy00Mzkx/MjU2LnBuZz9mPXdl/YnA" alt="" />
              <p className='text-xl text-cyan-950 font-extrabold dark:text-white'>Hall of Fame</p>
              <p className='text-cyan-800 font-bold dark:text-amber-200'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam!</p>
          </div>
        </div>
    </div>
  )
}

export default Home
