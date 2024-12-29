
export interface SaveCancelButtonsProps {
    saveEdit: () => void;
    setIsEditing: (value: boolean) => void;
    setEditedContent: (value: string) => void;
    element: {
        content: string;
    };
}
