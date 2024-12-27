import Sidebar from "../Sidebar";
import Body from "../Body";
import MessageBlock from "../Message-block";
import {useEffect, useState} from "react";
import axios from "axios";


const ChatPage = () => {
    const [messages,setMessages] = useState([])
    const [recipientUser,setRecipientUser] = useState('')


    const loadMessages = async () => {
        const token = localStorage.getItem('token') || '';
            const response = await axios.get('http://localhost:5000/api/messages', {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token,
                },
            });
            setMessages(response.data);
    };

    useEffect(() => {
        loadMessages()
    }, []);

    return (
        <div className="flex h-screen bg-gray-100 ">

            <Sidebar setRecipientUser={setRecipientUser}/>

            <main className="flex-1 flex flex-col ">
                <div className="flex-1 overflow-y-auto">
                    <Body messages={messages} recipientUser={recipientUser} loadMessages={loadMessages} />
                </div>

                <MessageBlock recipientUser={recipientUser} loadMessages={loadMessages}/>
            </main>
        </div>
    );
};

export default ChatPage
