export interface MessageCardProps {
    profilePicUrl: string;
    username: string;
    lastMessage: string;
    lastMessageTime: string;
}

export interface ChatBoxProps {
    status: "online" | "offline";
}

export interface Message {
    key?: string;
    contents: {content: string, date?: string | number}[];
    owner: string;
    userUrl?: string;
}

export type UserInfo = {
    username: string;
    userUrl: string;
}
export type ChatContextValues = {
    chatMessages: Message[];
    setChatMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    userInfo: UserInfo;
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>
    loadInitialMessages: (userID:string) => void;
}