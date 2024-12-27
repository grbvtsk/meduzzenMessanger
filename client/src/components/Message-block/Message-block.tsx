import {useState} from "react";
import axios from "axios";


const MessageBlock = ({recipientUser,loadMessages}) => {

    const [message,setMessage] = useState<String>('')

    const handleSend = async (e)=>{
        e.preventDefault()
        const token = localStorage.getItem('token') || '';
        if(message.trim() && localStorage.getItem('user')){
            await axios.post(
                'http://localhost:5000/api/messages',
                {
                    sender_name: localStorage.getItem('user'),
                    content: message,
                    recipient_name: recipientUser,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': token,
                    },
                }
            );
        }
        setMessage('')
        loadMessages();
    }

    return (
        <div className="bg-gray-200 p-2 shadow-md w-full">
            {recipientUser &&
                <form className="flex items-center space-x-2" onSubmit={handleSend}>
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Send
                </button>
            </form>
            }
        </div>
    );
};

export default MessageBlock;
