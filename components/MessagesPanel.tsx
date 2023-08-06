'use client'
import Image from "next/image";
import SearchMessages from "./SearchMessages";
import MessagesList from "@/components/MessagesList";
import { motion } from "framer-motion";

export default function MessagesPanel() {
    return (
        // outer container
        <div className="w-[21.8125rem] flex flex-col items-center border-r-[0.0625rem]">
            <div className="flex w-full p-6 items-center justify-between border-b-[0.0625rem]">
                <div className="flex items-center gap-[0.625rem]">
                    <div className="flex items-center gap-[0.375rem]">
                        <p className="text-xl font-semibold">
                            Messages
                        </p>
                            <Image
                                src="assets/icons/downArrow.svg"
                                alt="Down Array"
                                width={16}
                                height={16}
                            />
                    </div>
                    <div className="flex px-2 py-[0.125rem] flex-col items-start gap-[0.625rem] rounded-3xl bg-[#EDF2F7]">
                        <p className="font-semibold text-sm">12</p>
                    </div>
                </div>
                <motion.div
                    whileHover={{ scale: 1.2 }} // Scale up on hover
                >
                <Image
                src="assets/icons/addChat.svg"
                alt="Add Chat"
                width={40}
                height={40}
                />
                </motion.div>
            </div>
            <div className="flex flex-col items-start self-stretch">
            {/*  Global List  */}
                <SearchMessages />
                <MessagesList />
            </div>
        </div>
    );
}