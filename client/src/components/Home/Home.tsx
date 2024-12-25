import {useNavigate} from "react-router-dom";
import {useState} from "react";


const Home = ({socket})=>{

    const navigate = useNavigate()
    const [user,setUser] = useState<string>('')
    return(
        <form>
            <h2>Enter to chat</h2>
            <label htmlFor="user" ></label>
            <input type="text"
                   id="user"
                   value={user}
                   onChange={(e)=> setUser(e.target.value)}
            />
        </form>
    )
}
export default Home
