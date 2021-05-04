export default function Conversation(props) {

  const conversationHistory = props.chatLog.map((message) => {
    return <div class="message-body">{message}</div>})

  return (
    <div class="conversation-body">
    {conversationHistory}
    </div>
  )
}