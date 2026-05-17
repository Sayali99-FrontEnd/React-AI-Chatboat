import { useState} from "react";
import styles from "./App.module.css";
import {Chat} from "./components/Chat/Chat"
import { Controls } from "./components/Controls/Contols";

function App() {
  
  const [ messages, setMessages] = useState(MESSAGES)

  return (
    <div className={styles.App}>
     <header className={styles.Header}>
     <img className = {styles.Logo} src ="/chat-bot.png"/>
     <h2 className={styles.Title}>React AI Chatbot</h2>
     </header>
     <div className={styles.ChatContainer}>
        <Chat messages = {messages} />
     </div>
        <Controls />
    </div>
  )
}

const MESSAGES = [
  {
    role: "user",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dicta ducimus, incidunt, asperiores modi fugit facere nemo similique atque quo culpa? Nihil tenetur quod quas odio veritatis quasi, in vel?"
  },
  {
    role: "assistant",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dicta ducimus, incidunt, asperiores modi fugit facere nemo similique atque quo culpa? Nihil tenetur quod quas odio veritatis quasi, in vel?"
  },
  {
    role: "user",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dicta ducimus, incidunt, asperiores modi fugit facere nemo similique atque quo culpa? Nihil tenetur quod quas odio veritatis quasi, in vel?"
  },
  {
    role: "assistant",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dicta ducimus, incidunt, asperiores modi fugit facere nemo similique atque quo culpa? Nihil tenetur quod quas odio veritatis quasi, in vel?"
  },
  {
    role: "user",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dicta ducimus, incidunt, asperiores modi fugit facere nemo similique atque quo culpa? Nihil tenetur quod quas odio veritatis quasi, in vel?"
  },
  {
    role: "assistant",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dicta ducimus, incidunt, asperiores modi fugit facere nemo similique atque quo culpa? Nihil tenetur quod quas odio veritatis quasi, in vel?"
  },  {
    role: "user",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dicta ducimus, incidunt, asperiores modi fugit facere nemo similique atque quo culpa? Nihil tenetur quod quas odio veritatis quasi, in vel?"
  },
  {
    role: "assistant",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dicta ducimus, incidunt, asperiores modi fugit facere nemo similique atque quo culpa? Nihil tenetur quod quas odio veritatis quasi, in vel?"
  }
]


export default App
