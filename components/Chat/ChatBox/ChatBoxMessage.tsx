'use client'

import useChat from "@/hooks/useChat";
import { Message } from "@/types"
import Image from "next/image";

export default function Message({contents, owner} : Message) {

    const globalUserId = "Me"; //user id from global auth state

    const {userInfo: {userUrl}} = useChat();

    return (
        <div className="w-full flex flex-col justify-between gap-4" >
            {
                contents.map((message, index) => {

                    return (
                        <div key={message.content+index} className={`w-fit max-w-xs flex items-start ${owner === globalUserId ? "self-end flex-row-reverse" : "self-start flex-row"} gap-4`}>
                            {index === 0
                            ? 
                                <Image src={userUrl} alt={owner} width={48} height={48} /> 
                            : 
                                // placeholder to fill the image space
                                <div className="w-12 h-12 rounded-xl bg-transparent" ></div>
                            }
                            
                            <p className={`m-0 px-4 py-4 w-fit h-full max-w-xs table-cell align-middle break-words whitespace-normal rounded-lg font-inter text-sm font-normal ${owner === globalUserId ? "bg-primary-purple text-white" : "bg-[#F1F1F1] text-black"}`} >{message.content}</p>
                        </div>

                    )
                })
            }
        </div>
    )
}