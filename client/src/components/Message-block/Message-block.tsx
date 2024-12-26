import {useState} from "react";


const MessageBlock = ({socket}) => {

    const [message,setMessage] = useState<String>('')

    const handleSend = (e)=>{
        e.preventDefault()
        if(message.trim() && localStorage.getItem('user')){
            socket.emit('message',{
                text:message,
                name:localStorage.getItem('user'),
                id:`${socket.id}-${Math.random()}`,
                socketID: socket.id
            })
        }
        setMessage('')
    }

    return (
        <div className="bg-gray-200 p-2 shadow-md w-full">
            <form className="flex items-center space-x-2"
            onSubmit={handleSend}>
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default MessageBlock;
