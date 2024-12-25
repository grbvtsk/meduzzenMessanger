import socketIO from 'socket.io-client'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home"
import ChatPage from "./components/Chat";

const socket = socketIO.connect('http://localhost:5000')


function App() {

  return (
    <div>
        <Routes>
            <Route path='/' element={<Home socket={socket}/>}/>
            <Route path='/chat' element={<ChatPage socket={socket}/>}/>
        </Routes>
    </div>
  )
}

export default App
