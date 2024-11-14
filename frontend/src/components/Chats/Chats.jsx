import styles from "./Chats.module.css";
import logo from "../../assets/Logo.svg";

// TODO: Return warning in case of error 500

const Chats = ({ chats = [], loading }) => {
   return (
      <div className={styles.chatsCt}>
         {chats.map((v, k) => (
            <div key={k} className={`${styles.chatCard} ${v?.error && styles.error} ${v?.fromBot && styles.fromBot}`}>
               <p>{v?.text}</p>
            </div>
         ))}
         {loading && (
            <div className={`${styles.chatCard} ${styles.fromBot}`}>
               <img className={styles.loading} src={logo} alt="Loading illustration" />
            </div>
         )}
      </div>
   );
};
export default Chats;
