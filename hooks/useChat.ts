import { useContext } from "react";
import ChatContext from "@/contexts/ChatProvider";
import { ChatContextValues } from "@/types"

const useChat = () => {
    if(ChatContext === null) throw new Error("Chat context is null!");

    return useContext<ChatContextValues>(ChatContext);
}

export default useChat;