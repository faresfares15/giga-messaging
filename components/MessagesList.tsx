import {messagesCardsPlaceholders} from "@/placeholders";
import MessageCard from "@/components/MessageCard";

export default function MessagesList() {
    return (
        <div className="flex flex-col px-4 items-start gap-2 self-stretch h-screen overflow-y-auto">
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