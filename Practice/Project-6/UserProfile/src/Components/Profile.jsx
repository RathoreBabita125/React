import { useContext } from "react"
import UserContext from "../Context/UserContext"

function Profile() {
    
    const {user}=useContext(UserContext)

    if(user!=null)  return <div>Welcome Back !!! {user.username}</div>
        
    else return <div>Please Enter Your Username & Password </div>

}

export default Profile
