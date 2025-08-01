import { useState } from 'react'
import useTheme from '../../Context/ThemeContext'
import { NavLink, Link } from 'react-router-dom'

function NavBar() {

    const { themeMode, lightMode, darkMode } = useTheme()
    const [menuOpen, setMenuOpen]=useState(false)

    const OnclickHandler = () => {
        if (themeMode === 'light') {
            darkMode()
        }
        else {
            lightMode()
        }
    }

    const toggleMenu=()=>{
        setMenuOpen(!menuOpen)
    }

    return (

        <div className='w-full fixed top-0 left-0 z-10 bg-cyan-950 flex flex-wrap justify-between text-white items-center p-3' >

            <div>
                <h1 className='mx-2 text-3xl font-bold cursor-pointer'>BR Skills</h1>
            </div>
            <div>
                <ul className='md:flex hidden space-x-10 cursor-pointer '>

                    <li>
                        <NavLink to="/" className="hover:hover:text-cyan-600">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="hover:text-cyan-600">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="hover:text-cyan-600">Contact</NavLink>
                    </li>
                    
                </ul>
            </div>
            <div className='flex justify-center gap-4'>
                <div className='items-center m-auto'>
                    <img
                        onClick={OnclickHandler}
                        className=' w-12 h-12 cursor-pointer'

                        src={themeMode === 'dark'
                            ? 'https://imgs.search.brave.com/2fswLZ6G9LKhqOn0DsNjhp8GYzB-1munW4HQ-UbkqHI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMTM2NjEvMTM2/NjEwNjAucG5n'
                            : 'https://imgs.search.brave.com/99K1etd7pnS40llkSpWYX6Xr5ocb9ELpQeQqQ8Nr10Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMTI2NTcvMTI2/NTcyMTMucG5n'
                        }
                        alt="Toggle Theme"
                    />
                </div>

                <div className='items-center m-auto hidden md:block'>
                    <NavLink to="/signup">
                        <button className='w-[140px] h-[37px] mx-2 bg-cyan-700 text-white p-[3px] rounded-[4px] cursor-pointer hover:bg-cyan-800'>Login / Signup</button>
                    </NavLink>
                </div>

                <div className='md:hidden'>
                    <Link
                        onClick={toggleMenu}
                        className='text-5xl '
                        href="#">&#8801;</Link>
                </div>
            </div>

            {menuOpen && (
                <div className='md:hidden bg-cyan-950 px-4 pb-2 space-y-2'>
                    <NavLink to="/" onClick={toggleMenu} className="block py-2 hover:text-cyan-400">Home</NavLink>
                    <NavLink to="/about" onClick={toggleMenu} className="block py-2 hover:text-cyan-400">About</NavLink>
                    <NavLink to="/contact" onClick={toggleMenu} className="block py-2 hover:text-cyan-400">Contact</NavLink>
                    <button className='w-full mt-2 bg-cyan-700 px-3 py-1 rounded-md'>Login / Signup</button>
                </div>
            )}

        </div>
    )
}

export default NavBar
