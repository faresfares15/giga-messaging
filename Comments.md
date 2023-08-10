- Components for the Chat page should be in a Chat folder.
- "placeholders" folder should be renamed "data" folder.
- Discuss whether to choose String or Number as type for messages' dates
- Discuss the values of the "onwer" property in the Message type (user id? username?)
- Choose a better name for the "userUrl" prop, something to mean the remote mate. The current user's data is fetched from the global auth state.
- How to handle the key prop for map() when declaring types
- Find a way to replace "push()" in "sendMessage()" callback, to keep state change functional
- Check why component is not re-rendering after setting the state in the event callback
- Look for how to use the ContextAPI in Next and declare a chat context that contains both the chat messages state and the related methods.
- Look for how to give the grid cell a fit-content width, for the status grid
- Find a ready component for the message text input
- Check the array typing problem when using the destruction operator "..." (e.g [Message, Message] is not assignable to type [Message])
- Change the layout form for the users in the messages list to a Grid layout instead of Flex (note: the time's position is supposed to be consistent => far right)
- Change the chat input from "text" to "text area"
- Move the "Send" button inside the text input, and add an emojis button
- Apply gradients to messages boxes, instead of uni-color backgrounds


FUTURE FEATURES:
- "Seen"
- Number of unseen messages as a notification (e.g "5 new messages")
- Show sent times of messages
- "${user} is typing..."
- Side panel on the right side to show chat details and settings