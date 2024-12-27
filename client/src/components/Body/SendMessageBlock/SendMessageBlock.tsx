
const SendMessageBlock = ({element,handleDeleteMessage,handleEditMessage}) => {

    return (
        <div className="flex flex-col items-end group">
            <p className="text-sm font-semibold text-gray-700">You</p>
            <div
                className="flex items-center bg-green-100 p-3 rounded-md shadow-sm max-w-xs relative">
                <button
                    onClick={() => handleDeleteMessage(element.id)}
                    className="text-gray-500 text-s px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300
                                                 transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100
                                                  absolute left-[-75px]"
                >
                    Delete
                </button>
                <button
                    onClick={() => handleEditMessage(element.id)}
                    className="text-gray-500 text-s px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300
                                                 transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100
                                                  absolute left-[-130px]"
                >
                    Edit
                </button>
                <p className="text-gray-800">{element.content}</p>
            </div>
        </div>
    );
};

export default SendMessageBlock;
