import UserContext from '../Context/UserContext'
import { useState } from 'react'
import { useContext } from 'react'

function Login() {

    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')

    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username, password})

    }

  return (
    <>
        <div style={{fontSize:18, backgroundColor:'gray', padding:20, borderRadius:20 }}>
            <div>
                <label >Username: </label>
                <input 
                    type="text" 
                    placeholder='username'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />
            </div>
            <br />
            <div>
                <label>Password: </label>      
                <input 
                    type="password" 
                    placeholder='password' 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <br />
            <button 
                type="submit"
                onClick={handleSubmit}
                >Submit</button>
        </div>
    </>
  )
}

export default Login
