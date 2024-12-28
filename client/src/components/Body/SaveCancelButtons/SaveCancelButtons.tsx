
const SaveCancelButtons = ({saveEdit,setIsEditing,setEditedContent,element}) => {
    return (
        <div>
            <div className="flex space-x-2 mt-2">
                <button
                    onClick={saveEdit}
                    className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-all"
                >
                    Save
                </button>
                <button
                    onClick={() => {
                        setIsEditing(false);
                        setEditedContent(element.content);
                    }}
                    className="bg-gray-500 text-white px-3 py-1 rounded-lg hover:bg-gray-600 transition-all"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default SaveCancelButtons;
