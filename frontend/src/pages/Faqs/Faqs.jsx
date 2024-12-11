import { useState } from "react";
import styles from "./Faqs.module.css";
import Faq from "./Faq";

const tempFaqs = [
   {
      question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      awnser:
         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quam cumque quia asperiores quibusdam ab reprehenderit quae, perferendis, fuga unde officiis quas ducimus debitis molestiae amet labore dignissimos eos exercitationem.",
   },
   {
      question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      awnser:
         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quam cumque quia asperiores quibusdam ab reprehenderit quae, perferendis, fuga unde officiis quas ducimus debitis molestiae amet labore dignissimos eos exercitationem.",
   },
   {
      question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      awnser:
         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quam cumque quia asperiores quibusdam ab reprehenderit quae, perferendis, fuga unde officiis quas ducimus debitis molestiae amet labore dignissimos eos exercitationem.",
   },
   {
      question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      awnser:
         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quam cumque quia asperiores quibusdam ab reprehenderit quae, perferendis, fuga unde officiis quas ducimus debitis molestiae amet labore dignissimos eos exercitationem.",
   },
   {
      question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      awnser:
         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quam cumque quia asperiores quibusdam ab reprehenderit quae, perferendis, fuga unde officiis quas ducimus debitis molestiae amet labore dignissimos eos exercitationem.",
   },
   {
      question: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      awnser:
         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum quam cumque quia asperiores quibusdam ab reprehenderit quae, perferendis, fuga unde officiis quas ducimus debitis molestiae amet labore dignissimos eos exercitationem.",
   },
];

const Faqs = () => {
   return (
      <div id={styles.ct}>
         <h2>Consulte nuestras preguntas más frecuentes</h2>

         <div id={styles.faqsCt}>
            {tempFaqs.map((v, k) => (
               <Faq question={v.question} awnser={v.awnser} key={k} />
            ))}
         </div>
      </div>
   );
};
export default Faqs;
