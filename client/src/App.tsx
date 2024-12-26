import socketIO from 'socket.io-client'
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login"
import ChatPage from "./components/Chat";
import Register from "./components/Register";

const socket = socketIO.connect('http://localhost:5000')


function App() {

  return (
    <div>
        <Routes>
            <Route path='/' element={<Login socket={socket}/>}/>
            <Route path='/register' element={<Register socket={socket}/>}/>

            <Route path='/chat' element={<ChatPage socket={socket}/>}/>
        </Routes>
    </div>
  )
}

export default App
