export default function Conversation(props) {

  const conversationHistory = props.chatLog.map((message) => {
   return <div>{message}</div>})

  return (
    <div>
    {conversationHistory}
    </div>
  )
}