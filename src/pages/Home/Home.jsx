import styles from "./Home.module.css";

const Home = () => {
   return (
      <div className={styles.ct}>
         {/* Chats */}
         <div className={styles.chatCt}></div>

         {/* Input Field */}
         <div className={styles.inputField}>
            <h2>Pregúntame lo que quieras</h2>
            <form>
               <input type="text" placeholder="Escribe aquí..." />
               <button type="submit">Enviar</button>
            </form>
         </div>
      </div>
   ); 
};
export default Home;
