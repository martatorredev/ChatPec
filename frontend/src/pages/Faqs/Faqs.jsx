import styles from "./Faqs.module.css";

const tempFaqs = [
   { question: "", awnser: "" },
   { question: "", awnser: "" },
   { question: "", awnser: "" },
   { question: "", awnser: "" },
   { question: "", awnser: "" },
   { question: "", awnser: "" },
];

const Faqs = () => {
   return (
      <div id={styles.ct}>
         <h2>Consulte nuestras preguntas más frecuentes</h2>

         <div id={styles.accordionCt}></div>
      </div>
   );
};
export default Faqs;
