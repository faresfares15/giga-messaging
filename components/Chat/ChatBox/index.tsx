'use client'
import { ChatBoxProps, Message } from "@/types"
import React, { useState, useEffect, useRef } from 'react'
import ChatBoxHeader from "./ChatBoxHeader";
import ChatMessageBox from "./ChatBoxMessage"
import ChatBoxInput from "./ChatBoxInput"

const ChatBox:React.FC<ChatBoxProps> = ({username, userUrl, status, initialMessages}) => {

    //setting dump values for props

    const [chatMessages, setChatMessages] = useState<Message[]>(initialMessages);
    const chatBoxMessagesContainer = useRef<HTMLDivElement>(null);
    
    // scroll to bottom when messages are appended
    useEffect(()=>{
        if(chatBoxMessagesContainer.current){
            chatBoxMessagesContainer.current.scroll({ top: chatBoxMessagesContainer.current.scrollHeight, behavior: 'smooth' });
        }

    }, [chatMessages])

    useEffect(()=>{
        const timeoutID = setTimeout(()=>{
            setChatMessages(previousMessages => 

                previousMessages.map((message, index) => index === previousMessages.length -1 
                    ? {
                        owner: "Florencio Dorrance", 
                        userUrl: "/assets/placeholderIcons/FlorencioDorrance.png",
                        contents: [...message.contents, {content: "This is a random new message", date: Date.now()}]
                    }
                    : message)
            )
        }, 2000)

        return () => {
            clearTimeout(timeoutID);
        }
    }, [])
    
    
    return (
        <div className="w-full h-full flex flex-col justify-between font-inter bg-white">
            
            <ChatBoxHeader username={username} userUrl={userUrl} status={status} />

            <div ref={chatBoxMessagesContainer} className="h-[83%] px-8 py-4 flex flex-col gap-8 overflow-y-scroll" >
                {
                    chatMessages.map((message, index) => (
                        <ChatMessageBox key={username+index} contents={message.contents} owner={message.owner} userUrl={userUrl} />
                    ))
                } 
            </div>

            <ChatBoxInput setChatMessages={setChatMessages}/>
        </div>
    )
    
}

export default ChatBox;