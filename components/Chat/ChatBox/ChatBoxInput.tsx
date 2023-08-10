import React, { useRef, FormEvent } from 'react'
import { AttachSquare, Send2 } from 'iconsax-react'
import { Message } from '@/types';

type Props = {
    setChatMessages: React.Dispatch< React.SetStateAction<Message[]> >;
}

const ChatBoxInput:React.FC<Props> = ({setChatMessages}) => {

    const globalUserId = "Me";

    const chatTextInput = useRef<HTMLInputElement>(null);
    const chatAttachmentsInput = useRef<HTMLInputElement>(null);

    const sendMessage = (e: FormEvent) => {
        e.preventDefault();
        
        if(chatTextInput.current === null) throw new Error("Page didn't load correctly: Text input is not loaded");

        const textMessage = chatTextInput.current.value;
        chatTextInput.current.value = "";

        setChatMessages(previousMessages => {
            const lastMessage = previousMessages[previousMessages.length -1];

            const newMessage:Message = {
                owner: globalUserId,
                userUrl: "",
                contents: [{content: textMessage, date: Date.now()}]
            }

            if(lastMessage.owner === globalUserId){
                return previousMessages.map((message, index) => index === previousMessages.length -1 
                    ? {
                        owner: message.owner,
                        userUrl: message.userUrl,
                        contents: [...message.contents, {content: textMessage, date: Date.now()}]
                    }
                    : message 
                )
                
            }else{
                return [...previousMessages, newMessage]
            }
        })
        
    }

    return (
        <form onSubmit={sendMessage} className="w-full h-20 p-8 flex justify-between items-center gap-4" >
            <label htmlFor="attachments" className="cursor-pointer">
                <AttachSquare className="w-8 h-8 text-black"/>
                <input ref={chatAttachmentsInput} type="file" accept="image/png, image/jpeg" name="attachments" id="attachments" className="hidden" />
            </label>
            <input ref={chatTextInput} type="text" name="message" id="message" placeholder="Send a message..." className="w-full px-5 py-3 rounded-xl border-2 border-solid border-[#E2E8F0] bg-white"/>
            <Send2 variant="Bold" className="w-8 h-8 text-primary-purple cursor-pointer"/>
        </form>
    )
}

export default ChatBoxInput;