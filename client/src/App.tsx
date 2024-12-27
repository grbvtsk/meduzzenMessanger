// import socketIO from 'socket.io-client'
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login"
import ChatPage from "./components/Chat";
import Register from "./components/Register";



function App() {

  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

            <Route path='/chat' element={<ChatPage/>}/>
        </Routes>
    </div>
  )
}

export default App
