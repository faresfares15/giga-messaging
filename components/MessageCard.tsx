"use client";
import useChat from "@/hooks/useChat";
import { MessageCardProps } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";

const MessageCard:React.FC<MessageCardProps> = ({
  profilePicUrl,
  username,
  lastMessage,
  lastMessageTime,
}) => {

  const { loadInitialMessages } = useChat();

  return (
    <motion.div
      className="flex p-3 items-start gap-4 cursor-pointer self-stretch hover:bg-[#615EF0]/[.06] rounded-xl"
      whileHover={{ scale: 1.02 }}
      onClick={() => loadInitialMessages(username)}
    >
      <Image
        className="rounded-xl"
        src={profilePicUrl}
        alt={username}
        width={48}
        height={48}
      />
      <div className="flex flex-col items-start justify-center self-stretch">
        <div className="flex items-start gap-3 self-stretch">
          <p className="text-sm font-semibold flex-1">{username}</p>
          <p className="text-sm font-semibold opacity-30">{lastMessageTime}</p>
        </div>
        <p className="text-sm font-semibold text-gray-400 self-stretch">
          {lastMessage}
        </p>
      </div>
    </motion.div>
  );
}

export default MessageCard;