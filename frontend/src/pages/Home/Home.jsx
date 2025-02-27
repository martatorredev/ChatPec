import { useEffect, useRef, useState } from "react";
import useChatApi from "../../hooks/useChatApi";
import styles from "./Home.module.css";
import Chats from "../../components/Chats/Chats";

const Home = () => {
   const textRef = useRef();
   const [chats, setChats] = useState([]);

   const { send, error, loading } = useChatApi("POST", (v) => {
      chats.push({ fromBot: true, text: v?.awnser?.awnser, links: v?.awnser?.links, title: v?.awnser?.title });
   });

   //  In case there's a error while getting the response
   useEffect(() => {
      if (error) {
         console.log(error);
         chats.push({ fromBot: true, text: error, error: true });
      }
   }, [error]);

   return (
      <div className={styles.ct}>
         {/* Chats */}
         <Chats loading={loading} chats={chats} />

         {/* Reset Button */}
         {chats.length > 0 && (
            <button
               onClick={() => {
                  setChats([]);
               }}
               className={styles.resetBtn}
            >
               Restaurar la conversación
            </button>
         )}

         {/* Input Field */}
         <div className={styles.inputField}>
            <h2>Pregúntame lo que quieras</h2>
            <form
               onSubmit={(e) => {
                  e.preventDefault();
                  chats.push({ fromBot: false, text: textRef?.current?.value });
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
