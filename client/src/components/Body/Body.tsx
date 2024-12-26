import {useNavigate} from "react-router-dom";


const Body = ({messages}) => {

    const navigate = useNavigate()

    const handleLeave = () =>{
        // localStorage.removeItem("user")
        navigate('/')
    }

    return (
        <div className="flex flex-col h-screen">
            <header className="sticky top-0 bg-gray-200 p-4 shadow-md z-10">
                <div className="flex justify-between items-center">
                    <div className="flex-1"></div>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    onClick={handleLeave}>
                        Exit chat
                    </button>
                </div>
            </header>

            <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
                <div className="space-y-4">

                    {messages.map(element=>
                        element.name === localStorage.getItem('user') ? (
                            <div className="flex flex-col items-end" key={element.id}>
                                <p className="text-sm font-semibold text-gray-700">You</p>
                                <div className="bg-green-100 p-3 rounded-md shadow-sm max-w-xs">
                                    <p className="text-gray-800">{element.text}</p>
                                </div>
                            </div>
                        ): (
                            <div className="flex flex-col items-start" key={element.id}>
                                <p className="text-sm font-semibold text-gray-700">{element.name}</p>
                                <div className="bg-blue-100 p-3 rounded-md shadow-sm max-w-xs">
                                    <p className="text-gray-800">{element.text}</p>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};


export default Body;
