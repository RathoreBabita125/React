import React from 'react'

function Card({username, buttonName}) { // passing parameter ===destructure
    return (
        <div>

            <div className="max-w-xs p-6 rounded-md shadow-md bg-black mt-2">
                <img
                    src="https://imgs.search.brave.com/iFxmXh8gjKBRWh8dfqjH2MQpI5Pi8HGKojPf6Cot6pI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3do/b3doYXR3ZWFyL3Bv/c3RzLzI5MDAyNi9i/ZXN0LWhvdW5kc3Rv/b3RoLWphY2tldHMt/MjkwMDI2LTE2MDUw/MzYzMTMyMjUtbWFp/bi5qcGc"
                    alt=""
                    className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
                />
                <div className="mt-6 mb-2">
                    <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                        Title
                    </span>
                    <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
                </div>
                <p className="text-gray-300">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
                    amet
                </p>
                <button>{buttonName}</button>
            </div>

        </div>
    )
}

export default Card
