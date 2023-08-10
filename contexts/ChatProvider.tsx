import { Message } from '@/types';
import React, { createContext, useState } from 'react'
import { ChatContextValues, UserInfo } from "@/types"
import initialMessages from '@/data/initialMessage';
import users from '@/data/users';


const ChatContext = createContext<ChatContextValues>({
    chatMessages: [],
    setChatMessages: ()=>{},
    loadInitialMessages: (userID:string)=>[],
    userInfo: {username: "", userUrl: ""},
    setUserInfo: ()=>{}
});

export const ChatProvider = ({children} : {children: React.ReactNode} ) => {

    const [userInfo, setUserInfo] = useState<UserInfo>({username: "", userUrl: ""})

    const [chatMessages, setChatMessages] = useState<Message[]>([])

    const loadInitialMessages = (userID:string): void => {
        //function to be triggered when a chat is selected from the panel
        console.log(`Loading messages for user ${userID}`);
        
        // Change this to a database call to fetch the latest messages
        switch(userID){
            case "Elmer Laverty": setChatMessages(initialMessages["Elmer Laverty"] ); setUserInfo(users["Elmer Laverty"]);  return;
            case "Florencio Dorrance": setChatMessages(initialMessages["Florencio Dorrance"]); setUserInfo(users["Florencio Dorrance"]); return;
            default: setChatMessages(initialMessages["Florencio Dorrance"]); setUserInfo(users[userID]); return;
        }
    }

    return (
        <ChatContext.Provider value={{chatMessages, setChatMessages, userInfo, setUserInfo, loadInitialMessages}}>
            {children}
        </ChatContext.Provider>
    )
}


export default ChatContext