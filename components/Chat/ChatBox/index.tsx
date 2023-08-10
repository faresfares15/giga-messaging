'use client'
import { ChatBoxProps, Message } from "@/types"
import React, { useState, useEffect, useRef } from 'react'
import ChatBoxHeader from "./ChatBoxHeader";
import ChatMessageBox from "./ChatBoxMessage"
import ChatBoxInput from "./ChatBoxInput"

const ChatBox:React.FC<ChatBoxProps> = ({username, userUrl, status, initialMessages}) => {

    //setting dump values for props

    const [chatMessages, setChatMessages] = useState<Message[]>(initialMessages);
    const chatMessageBoxBottom = useRef<HTMLDivElement>(null);
    
    //add js code to scroll to bottom when messages are appended
    useEffect(()=>{
        chatMessageBoxBottom.current?.scrollIntoView({behavior: 'smooth'})
    }, [chatMessages])

    useEffect(()=>{
        const timeoutID = setTimeout(()=>{
            setChatMessages(previousMessages => 

                previousMessages.map((message, index) => index === previousMessages.length -1 
                    ? {
                        owner: message.owner,
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

            <div className="h-full px-8 py-4 flex flex-col gap-8 overflow-y-scroll" >
                {
                    chatMessages.map((message, index) => (
                        <ChatMessageBox key={username+index} contents={message.contents} owner={message.owner} userUrl={userUrl} />
                    ))
                }
                <div ref={chatMessageBoxBottom}></div>
            </div>

            <ChatBoxInput setChatMessages={setChatMessages}/>
        </div>
    )
    
}

export default ChatBox;