import React from 'react'

function Courses() {
    return (
        <div>
             <div className='w-full flex-wrap items-center m-auto my-4'>
              <div className='md:w-[20vw] w-[60vw] md:h-[60vh] h-[37vh] border-2 relative items-center m-auto'>
                <div className='md:w-[20vw] w-[60vw] md:h-[60vh] h-[37vh] bg-cyan-950 duration-500 hover:bg-cyan-800 '>
                  <div className='md:w-[20vw] w-[60vw] md:h-[60vh] h-[37vh] bg-cyan-800 duration-500 hover:bg-cyan-900 absolute left-5 top-5'>
                    <div className='md:w-[20vw] w-[60vw] md:h-[60vh] h-auto bg-cyan-700 hover:bg-cyan-950 hover:text-white absolute left-5 top-5'>
                        <h1 className='font-bold text-2xl text-center my-5'>
                              <p>DSA</p>
                              <p>to</p>
                              <p>Development</p>
                        </h1>
                        <p className='my-2 text-center'>600k+ interested students</p>
                        <p className='text-center'>DSA to Development: A Complete Guide</p>
                        <p className='my-4 text-[15px] text-center font-bold'>Beginner to Advance</p>

                        <div className='w-[20vw] h-auto text-center items-center mb-auto'>
                          <button className='w-28 h-auto rounded-2xl bg-gray-900 text-white md:my-2 mx-18 cursor-pointer hover:bg-cyan-700 mb-4'>Explore Now</button>
                        </div>
                    </div>
                  </div>
                </div>      
              </div>
            </div>
        </div>
    )
}

export default Courses
