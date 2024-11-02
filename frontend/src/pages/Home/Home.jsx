import { useRef } from "react";
import useChatApi from "../../hooks/useChatApi";
import styles from "./Home.module.css";
import Chats from "../../components/Chats/Chats";

const Home = () => {
   const textRef = useRef();

   const dummyChats = [
      {
         fromBot: false,
         text: "Esto es una pregunta del usuario",
      },
      {
         fromBot: true,
         text: "Esto es la respuesta de ChatPEC. Es Por el Clima, no Por El Culo.",
      },
      {
         fromBot: false,
         text: "Esto es una pregunta del usuario",
      },
      {
         fromBot: true,
         text: "Esto es la respuesta de ChatPEC. Es Por el Clima, no Por El Culo.",
      },
   ];

   const { send, error, loading } = useChatApi("POST", (v) => {
      console.log(v);
   });

   return (
      <div className={styles.ct}>
         {/* Chats */}
         <Chats chats={dummyChats} />

         {/* Input Field */}
         <div className={styles.inputField}>
            <h2>Pregúntame lo que quieras</h2>
            <form
               onSubmit={(e) => {
                  e.preventDefault();
                  send("api/chatbot?text=" + textRef?.current?.value);
               }}
            >
               <input ref={textRef} required type="text" placeholder="Escribe aquí..." />
               <button type="submit">Enviar</button>
            </form>
         </div>
      </div>
   );
};
export default Home;
