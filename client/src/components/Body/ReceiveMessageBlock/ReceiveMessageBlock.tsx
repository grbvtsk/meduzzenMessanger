
const ReceiveMessageBlock = ({element,handleDeleteMessage}) => {
    return (
        <div className="flex flex-col items-start group" key={element.id}>
            <p className="text-sm font-semibold text-gray-700">{element.sender_name}</p>
            <div
                className="flex items-center bg-blue-100 p-3 rounded-md shadow-sm max-w-xs relative">

                <button
                    onClick={() => handleDeleteMessage(element.id)}
                    className="text-gray-500 text-s px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300
                                                 transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100
                                                  absolute right-[-75px]"
                >
                    Delete
                </button>

                <p className="text-gray-800">{element.content}</p>
            </div>
        </div>
    );
};

export default ReceiveMessageBlock;
