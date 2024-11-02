import styles from "./Chats.module.css";

const Chats = ({ chats = [] }) => {
   return (
      <div className={styles.chatsCt}>
         {chats.map((v, k) => (
            <div key={k} className={`${styles.chatCard} ${v?.fromBot && styles.fromBot}`}>
               <p>{v?.text}</p>
            </div>
         ))}
      </div>
   );
};
export default Chats;
