import React from 'react'
import lotus from '../../assets/lotus.png'
import BodyImage_1 from '../../assets/BodyImage_1.jpg'
import MakeupBrush from '../../assets/MakeupBrush.png'
import HairComb from '../../assets/HairComb.png'
import NailCare from '../../assets/NailCare.png'
import Cosmetology from '../../assets/Cosmetology.png'

function Home() {
  return (
    <div className='w-full'>

      {/* title name */}
      <div className='w-full h-auto'>
        <div className='flex flex-wrap justify-center relative'>
          <img src={lotus} alt="" className='md:w-[32vw] md:h-[60vh] opacity-25' />
          <p style={{fontFamily: "Great Vibes"}} className='text-center text-red-900 text-9xl absolute top-30 font-bold'>Glam Books</p>
        </div>
      </div>

      {/* body image */}
      <div>
        <img src={BodyImage_1} alt="" className='w-full md:h-[90vh]' />
      </div>

      {/* Elegance */}
      <div className='w-full flex justify-center md:my-20 my-10 text-center'>
        <div className='w-[80vw]'>
          <p className='text-6xl italic text-red-900 font-semibold font-serif text-center'>Elegance comes from being as beautiful inside as outside</p>
          <p className='text-[20px] font-semibold my-5 text-gray-600 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repudiandae
            itaque architecto at, sint praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, blanditiis?</p>
        </div>
      </div>

      {/* skin care boxes */}
      <div className='md:flex space-x-3 p-5 space-y-6'>

        <div className='relative'>
          <img
            className='md:w-[40vw] md:h-[40vh]'
            src="https://media.istockphoto.com/id/2167711128/photo/model-applying-shimmering-highlighter-on-cheekbone-with-makeup-brush.webp?a=1&b=1&s=612x612&w=0&k=20&c=5k_yi-Z662Vy5u006bkn11ymo6avMAp160ouP293A_U=" alt="" />
          
          <div className='flex absolute bottom-1 space-x-3 p-2 items-center justify-center'>
            <div className='w-[50px] h-[50px] bg-white flex items-center justify-center'>
              <img className='w-[30px] h-[30px] text-red-900'
                src={MakeupBrush} alt="" />
            </div>
            <p className='text-white font-bold'>Make up</p>
          </div>
        </div>

        <div className='relative'>
          <img
            className='md:w-[40vw] md:h-[40vh]'
            src="https://images.unsplash.com/photo-1583743599150-3b6048ecf084?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhhaXIlMjBzdHlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />

          <div className='flex absolute bottom-1 space-x-3 p-2 items-center justify-center'>
            <div className='w-[50px] h-[50px] bg-white flex items-center justify-center'>
              <img className='w-[30px] h-[30px] text-red-900'
                src={HairComb} alt="" />
            </div>
            <p className='text-white font-bold'>Hair style</p>
          </div>
        </div>

        <div className='relative'>
          <img
            className='md:w-[40vw] md:h-[40vh]'
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpbCUyMGNhcmV8ZW58MHx8MHx8fDA%3D" alt="" />

          <div className='flex absolute bottom-1 space-x-3 p-2 items-center justify-center'>
            <div className='w-[50px] h-[50px] bg-white flex items-center justify-center'>
              <img className='w-[30px] h-[30px] text-red-900'
                src={NailCare} alt="" />
            </div>
            <p className='text-white font-bold'>Nail care</p>
          </div>
        </div>

        <div className='relative'>
          <img
            className='md:w-[40vw] md:h-[40vh]'
            src="https://plus.unsplash.com/premium_photo-1661573269488-01fdb0bea3aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29zbWV0b2xvZ3l8ZW58MHx8MHx8fDA%3D" alt="" />

          <div className='flex absolute bottom-1 space-x-3 p-2 items-center justify-center'>
            <div className='w-[50px] h-[50px] bg-white flex items-center justify-center'>
              <img className='w-[30px] h-[30px]'
                src={Cosmetology} alt="" />
            </div>
            <p className='font-bold text-white'>Cosmetology</p>
          </div>
        </div>
        
      </div>

      {/* Treatments and Prices */}
      <div className='w-full md:flex md:my-15'>
          <div className='md:w-1/2 h-auto flex justify-center'>
            <img className=''
              src="https://images.unsplash.com/photo-1571686120863-e4f954a93fe3?q=80&w=469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className='md:w-1/2 flex justify-center items-center'>
            <div className='justify-center items-center'>
                <p className='text-red-900 text-5xl font-bold font-serif italic text-center md:p-4 p-7'>Treatments and Prices</p>
                <p className='font-serif text-gray-700 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur!</p>
                <div className='flex justify-center'>
                  <div className='space-y-5 font-serif my-10'>
                    <p>Nail care.......................................................from <span className='text-red-900'>$25</span></p>
                    <p>Hair Styling....................................................from <span className='text-red-900'>$30</span></p>
                    <p>Make up.........................................................from <span className='text-red-900'>$50</span></p>
                    <p>Cosmetology.....................................................from <span className='text-red-900'>$30</span></p>
                    <p>SPA procedures..................................................from <span className='text-red-900'>$80</span></p>
                    <span className='text-red-900 underline cursor-pointer'>View all</span>
                  </div>
                </div>
            </div>
          </div>
      </div>

      {/* Testimonials */}
      <div className='w-full py-6 md:flex justify-center'>
        <div className='w-full md:h-[45vh] bg-red-100'>
          <p className='text-red-900 text-5xl font-semibold text-center font-serif py-5'>Testimonials</p>
          <p className='text-center text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, 
            doloremque. Deleniti ipsam nostrum similique rerum autem voluptatem numquam dicta nisi.
          </p>

          <div className='flex justify-center py-10'>
            <div className='w-1/2 h-auto bg-white space-y-3 p-7'>
              <div className='ml-20'>
                <img className='w-[70px] h-[70px] rounded-full'
                  src="https://media.istockphoto.com/id/1285358279/photo/portrait-of-gorgeous-young-woman-joy-and-happiness-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=WAyN12ktQAAo5cxpiZV7WykiAyM5pCnumGA5uZsUKmQ=" alt="" />
              </div>

              <div className='ml-2 flex space-x-5 justify-between'>
                  <div className='w-[250px]'>
                    <img className='w-[100px] h-[100px] rounded-full'
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                  </div>
                  <div className='md:w-[40vw]'>
                    <p className='text-xl text-red-900 font-semibold font-serif'>Caroline Forbe <span className='text-gray-600 font-bold ml-4 text-[15px]'>Happy Client</span></p>
                    <p className='font-serif'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa mollitia adipisci, cumque error eveniet ad. Assumenda perferendis unde voluptatem laudantium?</p>
                  </div>
              </div>

              <div className='ml-20'>
                <img className='w-[70px] h-[70px] rounded-full'
                  src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=0ez7MLSYsOlKDghpVAUDMVf_gT5B_DfKmRNKqElOLUA=" alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* shop */}
      <div className='md:mt-60'>
        <p className='text-red-900 text-6xl font-bold italic font-serif text-center p-4'>Our Shop</p>
        <p className=' text-gray-700 font-semibold text-center text-[20px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore!</p>
        
        <div className='md:flex  md:my-10 justify-center p-7'>

          <div className=''>
            <img className='md:w-[40vw] md:h-[40vh] '
            src="https://imgs.search.brave.com/5eqrAuFy8aW4UTL-ZZ31kw0OiZz2WC-RTfyKNJCBD3U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFVMzdFV1c2akwu/anBn" alt="" />
            <div className='text-center md:my-2'>
              <p className='text-[20px] font-bold font-serif'>Face toner</p>
              <p className='text-gray-600 font-semibold'>$20 / 75ml</p>
              <div className='flex justify-center my-2'>
                <p className='w-[50px] h-[30px] text-white bg-red-900 rounded-[2px] font-bold'>75 ml</p>
              </div>
            </div>
          </div>

          <div className=''>
            <img className='md:w-[40vw] md:h-[40vh] '
            src="https://imgs.search.brave.com/IechnQWwXGCYDjy0KAPfKWhkwi6_TExmoY4t3ZLo3D8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFTNW9UbnVjMkwu/anBn" alt="" />
             <div className='text-center md:my-2 '>
              <p className='text-[20px] font-bold font-serif'>Night cream</p>
              <p className='text-gray-600 font-semibold'>$30 / 50ml</p>
              <div className='flex justify-center my-2'>
                <p className='w-[50px] h-[30px] text-white bg-red-900 rounded-[2px] font-bold'>50 ml</p>
              </div>
            </div>
          </div>

          <div className=''>
            <img className='md:w-[40vw] md:h-[40vh] '
            src="https://imgs.search.brave.com/tZChc63eQ8MAcWramMFAMMmSSs_AsGaphZGXiYLGfek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/XzY4ODQ2OS1NTEI4/MjI5MjgwOTc2Ml8w/MjIwMjUtRS1iYXNl/LWxpcXVpZGEtc3Vl/bGVuLW1ha2V1cC1i/LWJlYXV0eS1mb3Nj/by0zNS1tbC53ZWJw" alt="" />
             <div className='text-center md:my-2'>
              <p className='text-[20px] font-bold font-serif'>Makeup base</p>
              <p className='text-gray-600 font-semibold'>$25 / 75ml</p>
              <div className='flex justify-center my-2'>
                <p className='w-[50px] h-[30px] text-white bg-red-900 rounded-[2px] font-bold'>75 ml</p>
              </div>
            </div>
          </div>

          <div className=''>
            <img className='md:w-[40vw] md:h-[40vh] '
             src="https://imgs.search.brave.com/QPixC7-tEhNxM5Bpcq5CPRO3A4c3k5qSdou4dhH9B04/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxVStuWFNtLUJM/LmpwZw" alt="" />
             <div className='text-center md:my-2 '>
              <p className='text-[20px] font-bold font-serif'>Makeup brush</p>
              <p className='text-gray-600 font-semibold'>$40</p>
    
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
export default Home
