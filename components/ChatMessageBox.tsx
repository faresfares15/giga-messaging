'use client'

import { Message } from "@/types"
import Image from "next/image";

export default function ChatMessageBox({contents, owner, userUrl} : Message) {

    const globalUserId = "Me"; //user id from global auth state

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
                                <div className="w-12 h-12 rounded-xl bg-gray-400" ></div>
                            }
                            
                            <p className={`m-0 px-4 py-4 w-fit h-full max-w-xs table-cell align-middle break-words whitespace-normal rounded-lg font-inter text-sm font-normal ${owner === globalUserId ? "bg-primary-purple text-white" : "bg-[#F1F1F1] text-black"}`} >{message.content}</p>
                        </div>

                    )
                })
            }
        </div>
    )
}