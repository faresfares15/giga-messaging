'use client'
import ChatBox from "@/components/Chat/ChatBox";
import MessagesPanel from "@/components/MessagesPanel";
import { useState } from 'react'
import { Message } from "@/types"

export default function Page() {
    const initialMessages: Message[] = [
        {
            owner: "Florencio Dorrance",
            userUrl: "/assets/placeholderIcons/FlorencioDorrance.png",
            contents: [{content: "omg, this is amazing"}, {content: "perfect! ✅"}, {content: "Wow, this is really epic"},],
        },
        {
            owner: "Me",
            userUrl: '',
            contents: [{content: "How are you?"}],
        },
        {
            owner: "Florencio Dorrance",
            userUrl: "/assets/placeholderIcons/FlorencioDorrance.png",
            contents: [{content: "just ideas for next time"}, {content: "I'll be there in 2 mins ⏰"},],
        },
        {
            owner: "Me",
            userUrl: '',
            contents: [{content: "woohoooo"}, {content: "Haha oh man"}, {content: "Haha that's terrifying 😂"},],
        },
        {
            owner: "Florencio Dorrance",
            userUrl: "/assets/placeholderIcons/FlorencioDorrance.png",
            contents: [{content: "aww"}, {content: "omg, this is amazing"}, {content: "woohoooo 🔥"},],
        },
    ]

    const [chatMessages, setChatMessages] = useState<Message[]>(initialMessages);

    const loadInitialMessages = ():Message[] => {
        //function to be triggered when a chat is selected from the panel
        return [{owner: '', userUrl: '', contents: [{content: ''}]}]
    }
    
    return (
        <div className="w-full h-screen max-h-screen flex justify-start" >
            <MessagesPanel loadInitialMessages={loadInitialMessages}/>
            <ChatBox username="Florencio Dorrance" status="online" userUrl="/assets/placeholderIcons/FlorencioDorrance.png" initialMessages={initialMessages}/>
        </div>
    );
}