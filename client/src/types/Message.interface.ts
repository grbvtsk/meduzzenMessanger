import {File} from "./File.interface.ts";
export interface Message {
    id: string;
    sender_name: string;
    content: string;
    recipient_name: string;
    created_at: string;
    files: File[];
}
