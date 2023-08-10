export interface MessageCardProps {
    profilePicUrl: string;
    username: string;
    lastMessage: string;
    lastMessageTime: string;
}

export interface ChatBoxProps {
    initialMessages: Message[];
    status: "online" | "offline";
    username: string;
    userUrl: string;
}

export interface Message {
    key?: string;
    contents: {content: string, date?: string | number}[];
    owner: string;
    userUrl: string;
}