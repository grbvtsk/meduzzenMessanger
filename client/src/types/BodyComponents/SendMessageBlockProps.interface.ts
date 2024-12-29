import {Message} from "../Message.interface.ts";

export interface SendMessageBlockProps {
    element: Message;
    loadMessages: () => void;
}
