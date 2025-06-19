import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data=useLoaderData()

    // const [data, setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/RathoreBabita125')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)           
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl text-bold '>
        Github Repository:{data.public_repos}
        <img className='width-200 h-60'
        src="https://imgs.search.brave.com/JcP4C_1Z1PwFX-uCyzj49nrf9PaNfISoeMLeQrRd8M8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY3V0/ZS1hbmltZS1wcm9m/aWxlLXBpY3R1cmVz/LWRsNTdhMWRsY2Zt/bGJ3cHguanBn" alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader=async()=>{
    const response= await fetch('https://api.github.com/users/RathoreBabita125')
    return response.json()

}
