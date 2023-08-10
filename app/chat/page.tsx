'use client'
import ChatBox from "@/components/Chat/ChatBox";
import MessagesPanel from "@/components/MessagesPanel";
import { ChatProvider } from "@/contexts/ChatProvider";

export default function Page() {
    
    return (
        <ChatProvider>
            <div className="w-full h-screen max-h-screen flex justify-start" >
                <MessagesPanel/>
                <ChatBox status="online"/>
            </div>
        </ChatProvider>
    );
}