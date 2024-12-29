import {Message} from "../Message.interface.ts";

export interface BodyProps {
    messages: Message[];
    recipientUser: string;
    loadMessages: () => void;
}
