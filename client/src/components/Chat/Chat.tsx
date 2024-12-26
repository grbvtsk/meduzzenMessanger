import Sidebar from "../Sidebar";
import Body from "../Body";
import MessageBlock from "../Message-block";
import {useEffect, useState} from "react";


const ChatPage = ({ socket }) => {
    const [messages,setMessages] = useState([])

    useEffect(() => {
        socket.on('response',(data)=> setMessages([...messages,data]))
    }, [socket,messages]);

    return (
        <div className="flex h-screen bg-gray-100">

            <Sidebar />

            <main className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto">
                    <Body messages={messages} />
                </div>

                <MessageBlock socket={socket} />
            </main>
        </div>
    );
};

export default ChatPage
