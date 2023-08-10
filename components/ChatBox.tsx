'use client'
import { ChatBoxProps, Message } from "@/types"
import ChatMessageBox from "./ChatMessageBox"
import { useState, useEffect, useRef } from 'react'
import Image from "next/image";
import { AttachSquare, Call, Send2 } from 'iconsax-react'

export default function ChatBox({username, userUrl, status, initialMessages} : ChatBoxProps) {

    const globalUserId = "Me"; //user id from global auth state

    const statuses = {
        "online": '#fff',
        "offline": '#DDD'
    }

    const otherStatuses = {
        "online" : "bg-[#68D391]",
        "offline": "bg-[#DDD]"
    }

    //setting dump values for props
    username = "Florencio Dorrance"
    status = "online"
    userUrl = "/assets/placeholderIcons/FlorencioDorrance.png";

    const [chatMessages, setChatMessages] = useState<[Message]>(initialMessages);
    const chatTextInput = useRef(null);
    const chetAttachmentsInput = useRef(null);
    const chatMessageBoxBottom = useRef(null);

    const getStatusColor = (status: "online" | "offline"):string => {
        return  `bg-[${statuses[status]}]`
    }

    const startCall = () => {

    }

    const sendMessage = (e) => {
        e.preventDefault();
        
        const textMessage = chatTextInput.current.value;

        setChatMessages( previousMessages => {
            let updatedMessages = previousMessages;

            const lastMessage = previousMessages[previousMessages.length -1];
            
            console.log("lastMessage: " ,lastMessage);
            

            if(lastMessage.owner === globalUserId){
                updatedMessages[updatedMessages.length -1].contents = [...lastMessage.contents, {content: textMessage, date: Date.now()}]
            }else{
                updatedMessages = [...previousMessages, { owner: globalUserId, contents: [{content: textMessage, date: Date.now()}]} ]
                
                // const newMessage:Message = {
                //     owner: globalUserId,
                //     contents: [{content: textMessage, date: Date.now()}],
                // }
                // updatedMessages = [...previousMessages, newMessage ]
            }

            console.log('updates last message: ', updatedMessages[updatedMessages.length -1]);
  
            return updatedMessages;
        })
        
    }
    
    //add js code to scroll to bottom when messages are appended
    useEffect(()=>{
        chatMessageBoxBottom.current?.scrollIntoView({behavior: 'smooth'})
    }, [chatMessages])
    
    return (
        <div className="bg-red-300 w-full h-full flex flex-col justify-between font-inter">
            <div className="h-20 px-8 pt-2 flex justify-between bg-green-200" >
                <div className="w-fit grid grid-rows-2 grid-cols-[max-content_max-content] gap-x-4" >
                    <Image src={userUrl} alt="Florencio Dorrance" width={48} height={48} className="row-span-2 rounded-lg cursor-pointer" />
                    <p className="cursor-pointer font-semibold" >{username}</p>
                    <p className="flex justify-start items-center" ><span className={`inline-block w-4 h-4 mr-2 rounded-full ${otherStatuses[status]}`}></span>{status}</p>
                </div>

                <button type='button' onClick={startCall} className="w-fit">
                    <Call variant="Bold" className="w-8 h-8 text-primary-purple"/>
                    Call
                </button>
            </div>

            <div className="h-full px-8 py-4 flex flex-col gap-8 overflow-y-scroll bg-blue-300" >
                {
                    chatMessages.map((message, index) => (
                        <ChatMessageBox key={username+index} contents={message.contents} owner={message.owner} userUrl={userUrl} />
                    ))
                }
                <div ref={chatMessageBoxBottom}></div>
            </div>

            <form onSubmit={sendMessage} className="w-full h-20 p-8 bg-yellow-300 flex justify-between items-center gap-4" >
                <label htmlFor="attachments" className="cursor-pointer">
                    <AttachSquare className="w-8 h-8 text-black"/>
                    <input ref={chetAttachmentsInput} type="file" accept="image/png, image/jpeg" name="attachments" id="attachments" className="hidden" />
                </label>
                <input ref={chatTextInput} type="text" name="message" id="message" placeholder="Send a message..." className="w-full px-5 py-3 rounded-xl border-2 border-solid border-[#E2E8F0] bg-white"/>
                <Send2 variant="Bold" className="w-8 h-8 text-primary-purple"/>
            </form>
        </div>
    )
}