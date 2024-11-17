import { useEffect, useRef } from "react";
import useChatApi from "../../hooks/useChatApi";
import styles from "./Home.module.css";
import Chats from "../../components/Chats/Chats";

const Home = () => {
   const textRef = useRef();
   const chats = useRef([]);

   const { send, error, loading } = useChatApi("POST", (v) => {
      chats.current.push({ fromBot: true, text: v?.awnser?.awnser, links: v?.awnser?.links });
   });

   //  In case there's a error while getting the response
   useEffect(() => {
      if (error) {
         console.log(error);
         chats.current.push({ fromBot: true, text: error, error: true });
      }
   }, [error]);

   // TODO: Add button to clear chat history

   return (
      <div className={styles.ct}>
         {/* Chats */}
         <Chats loading={loading} chats={chats.current} />

         {/* Input Field */}
         <div className={styles.inputField}>
            <h2>Pregúntame lo que quieras</h2>
            <form
               onSubmit={(e) => {
                  e.preventDefault();
                  chats.current.push({ fromBot: false, text: textRef?.current?.value });
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
