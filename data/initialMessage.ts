import { Message } from "@/types"

const initialMessagesFlorencio: Message[] = [
    {
        owner: "Florencio Dorrance",
        userUrl: "/assets/placeholderIcons/FlorencioDorrance.png",
        contents: [{content: "omg, this is amazing"}, {content: "perfect! ✅"}, {content: "Wow, this is really epic"},],
    },
    {
        owner: "Me",
        userUrl: '',
        contents: [{content: "How are you?"}],
    },
    {
        owner: "Florencio Dorrance",
        userUrl: "/assets/placeholderIcons/FlorencioDorrance.png",
        contents: [{content: "just ideas for next time"}, {content: "I'll be there in 2 mins ⏰"},],
    },
    {
        owner: "Me",
        userUrl: '',
        contents: [{content: "woohoooo"}, {content: "Haha oh man"}, {content: "Haha that's terrifying 😂"},],
    },
    {
        owner: "Florencio Dorrance",
        userUrl: "/assets/placeholderIcons/FlorencioDorrance.png",
        contents: [{content: "aww"}, {content: "omg, this is amazing"}, {content: "woohoooo 🔥"},],
    },
]

const initialMessagesElmer: Message[] = [
    {
        owner: "Elmer Laverty",
        userUrl: "/assets/placeholderIcons/ElmerLaverty.png",
        contents: [{content: "omg, this is really amazing"}, {content: "perfect! ✅"}, {content: "Wow, this is really epic"},],
    },
    {
        owner: "Me",
        userUrl: '',
        contents: [{content: "How are you doing?"}],
    },
    {
        owner: "Elmer Laverty",
        userUrl: "/assets/placeholderIcons/ElmerLaverty.png",
        contents: [{content: "Just chilling. I'm going to the train station"}, {content: "I'll be there in 2 mins ⏰"},],
    },
    {
        owner: "Me",
        userUrl: '',
        contents: [{content: "Great!"}, {content: "When will you arrive?"}, {content: "Looking forward into it"},],
    },
    {
        owner: "Elmer Laverty",
        userUrl: "/assets/placeholderIcons/ElmerLaverty.png",
        contents: [{content: "Well"}, {content: "Maybe in 3 hours"}, {content: "Thank you 🔥"},],
    },
]

const initialMessages:{"Elmer Laverty":Message[], "Florencio Dorrance":Message[]} = {
    "Florencio Dorrance" : initialMessagesFlorencio,
    "Elmer Laverty": initialMessagesElmer,
}
export default initialMessages;