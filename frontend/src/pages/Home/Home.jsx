import { useRef } from "react";
import useChatApi from "../../hooks/useChatApi";
import styles from "./Home.module.css";

// TODO: Receber o texto no servidor

const Home = () => {
   const textRef = useRef();
   const { send, error, loading } = useChatApi("POST", (v) => {
      console.log(v);
   });

   return (
      <div className={styles.ct}>
         {/* Chats */}
         <div className={styles.chatCt}></div>

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
