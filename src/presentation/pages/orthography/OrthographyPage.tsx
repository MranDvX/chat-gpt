import { GPTMessage, MyMessage } from "../../components"

export const OrthographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GPTMessage text="Pásame tu texto a traducir" />
          <MyMessage text="Hello" />
        </div>
      </div>
    </div>
  )
}
