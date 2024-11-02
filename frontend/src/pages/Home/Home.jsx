import { useRef, useState } from "react";
import useChatApi from "../../hooks/useChatApi";
import styles from "./Home.module.css";
import Chats from "../../components/Chats/Chats";

const Home = () => {
   const textRef = useRef();
   // TODO: Adicionar chat do tipo user ao se enviar uma pergunta
   // TODO: Adicionar chat do tipo fromBot ao se receber a resposta
   const chats = useRef([]);

   const { send, error, loading } = useChatApi("POST", (v) => {
      console.log(v);
      chats.current.push({ fromBot: true, text: v?.awnser });
   });

   return (
      <div className={styles.ct}>
         {/* Chats */}
         <Chats chats={chats.current} />

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
