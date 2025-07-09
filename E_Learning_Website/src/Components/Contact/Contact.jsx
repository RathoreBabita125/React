import React from 'react'

function Contact() {
  return (
    <div>
      
          <div className='w-full h-auto'>
              <div className='md:w-[95vw] w-full md:flex flex-wrap md:my-15 my-30 text-center items-center m-auto rounded-xl'>
               
                <div className='md:w-[45vw] w-full h-auto text-center mt-20'>
                  <h1 className='text-6xl font-bold '>Get in Touch:</h1>
                  <p className='text-2xl font-bold my-5'>Fill in the blank to start a conservation</p>
                  
                  <div className='md:mx-30 mx-10 flex gap-4 my-4 items-center m-auto '>
                    <i class="fa-solid fa-location-dot text-[25px]"></i>
                    <div className='text-xl font-bold'>
                      <p>Pinahat Postal (283123)</p>
                      <p> Agra, Uttar Pradesh, India</p>
                    </div>
                  </div>

                  <div className='md:mx-30 mx-10 flex gap-4 my-4 items-center m-auto '>
                    <i class="fa-solid fa-phone-volume text-[25px]"></i>
                    <div className='text-xl font-bold'>
                      <p>+91-9876543210</p>            
                    </div>
                  </div>

                  <div className='md:mx-30 mx-10 flex gap-4 items-center m-auto '>
                    <i class="fa-solid fa-envelope-open-text text-[25px]"></i>
                    <div className='text-xl font-bold'>
                      <p>support@br.com </p>
                      <p> techsupport@br.com</p>               
                    </div>
                  </div>

                </div>

                <div className='md:w-[35vw] w-full h-auto'>
                  <div className='space-y-4  mt-30'>
                      <input 
                        className='border-1 rounded-[4px]'
                        type="text" value=""
                        placeholder='Full Name' 
                      />
                      <br />
                      <input 
                        className='border-1 rounded-[4px]'
                        type="email" value=""
                        placeholder='Email Address' 
                      />
                      <br />
                      <input 
                        className='border-1 rounded-[4px]'
                        type="text" value=""
                        placeholder='Phone Number' 
                      />
                      <br />
                      <button 
                        className='bg-cyan-800 font-bold text-[15px] w-25 h-8 my-2 rounded-xl cursor-pointer'
                        type="submit">Submit</button>
                  </div>
                </div>

              </div>
          </div>
    </div>
  )
}

export default Contact
