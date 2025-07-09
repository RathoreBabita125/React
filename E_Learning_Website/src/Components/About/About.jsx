import Left_Image from './assets/Left_Image.jpg'
import Courses from './Courses'

function About() {
    return (
        <div>
            <div className='w-full h-auto'>
                <div className='w-full md:flex flex-wrap justify-around md:my-10 items-center m-auto'>
                    <div className='md:w-[35vw] h-auto mt-15'>
                        <img
                            className=''
                            src={Left_Image} alt="image" 
                        />
                    </div>
                    <div className='md:w-[55vw] h-auto my-4'>
                        <h1 className='text-6xl font-bold text-center my-10'>React development is carried out by passionate developers</h1>
                        <p className='my-10 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit expedita, qui asperiores architecto,
                            aperiam iure suscipit fugit voluptate eaque porro incidunt temporibus in doloribus numquam iusto.
                            Numquam, quia tempora. Nihil. Lorem ipsum dolor sit amet consectetur adipisicing elit. A illum expedita eligendi
                            , asperiores modi beatae.
                        </p>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque architecto nihil est ab, molestiae sapiente!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, nulla. Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className='text-5xl font-bold text-center my-10'>Build Your Foundation</h1>
                </div>

                {/* Courses code */}
                <div className='w-full md:flex flex-wrap md:my-4 my-30 md:justify-around space-y-25 '>
                    <Courses/>
                    <Courses/>
                    <Courses/>
                </div>

            </div>

        </div>
    )
}

export default About
