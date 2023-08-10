'use client'
import ChatBox from "@/components/ChatBox";
import MessagesPanel from "@/components/MessagesPanel";
import { useState } from 'react'
import { Message } from "@/types"

export default function Page() {
    const initialMessages: Message[] = [
        {
            owner: "Florencio Dorrance",
            contents: [{content: "omg, this is amazing"}, {content: "perfect! ✅"}, {content: "Wow, this is really epic"},],
        },
        {
            owner: "Me",
            contents: [{content: "How are you?"}],
        },
        {
            owner: "Florencio Dorrance",
            contents: [{content: "just ideas for next time"}, {content: "I'll be there in 2 mins ⏰"},],
        },
        {
            owner: "Me",
            contents: [{content: "woohoooo"}, {content: "Haha oh man"}, {content: "Haha that's terrifying 😂"},],
        },
        {
            owner: "Florencio Dorrance",
            contents: [{content: "aww"}, {content: "omg, this is amazing"}, {content: "woohoooo 🔥"},],
        },
    ]

    const [chatMessages, setChatMessages] = useState<Message[]>(initialMessages);

    const loadInitialMessages = ():Message[] => {
        //function to be triggered when a chat is selected from the panel
        return [{owner: '', contents: [{content: ''}]}]
    }
    return (
        <div className="w-full h-screen max-h-screen flex justify-start" >
            <MessagesPanel loadInitialMessages={loadInitialMessages}/>
            <ChatBox initialMessages={initialMessages}/>
        </div>
    );
}