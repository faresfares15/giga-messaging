import Image from "next/image";
import { Call } from 'iconsax-react'
import React from "react";

type Props = {
    username: string;
    userUrl: string;
    status: "online" | "offline"
}

const ChatBoxHeader:React.FC<Props> = ({username, userUrl, status}) => {

    const statuses = {
        "online" : "bg-[#68D391]",
        "offline": "bg-[#DDD]"
    }

    const startCall = () => {

    }

    return (
        <div className="h-[8%] px-8 py-2 flex justify-between border-b" >
            <div className="w-fit grid grid-rows-2 grid-cols-[max-content_max-content] gap-x-4" >
                <Image src={userUrl} alt="Florencio Dorrance" width={48} height={48} className="row-span-2 rounded-lg cursor-pointer" />
                <p className="cursor-pointer font-semibold" >{username}</p>
                <p className="flex justify-start items-center" ><span className={`inline-block w-4 h-4 mr-2 rounded-full ${statuses[status]}`}></span>{status}</p>
            </div>

            <button type='button' onClick={startCall} className="w-fit h-fit self-center px-4 py-2 flex gap-2 items-center rounded-lg text-primary-purple bg-primary-purple bg-opacity-10">
                <Call variant="Bold" className="w-6 h-6 inline-block"/>
                <span className="inline-block text-base font-semibold">Call</span>
            </button>
        </div>
    )
}

export default ChatBoxHeader