const EditInput = ({editedContent,setEditedContent}) => {
    return (
        <input
            type="text"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="w-full p-2 border rounded-md"
        />
    );
};

export default EditInput;
