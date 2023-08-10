'use clinet'
import {messagesCardsPlaceholders} from "@/placeholders";
import MessageCard from "@/components/MessageCard";

export default function MessagesList() {

    return (
        <div className="h-[90%] flex flex-col px-4 items-start gap-2 self-stretch overflow-y-scroll">
            {messagesCardsPlaceholders.map((placeholder, index) => (
                <MessageCard
                key={index} 
                profilePicUrl={placeholder.profilePicUrl}
                username={placeholder.username}
                lastMessage={placeholder.lastMessage}
                lastMessageTime={placeholder.lastMessageTime}
                />
            ))}
        </div>
    );
}