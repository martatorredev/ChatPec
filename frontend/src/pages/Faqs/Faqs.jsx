import styles from "./Faqs.module.css";
import Faq from "./Faq";

const tempFaqs = [
   {
      question: "¿Por qué existe ChatPEC?",
      awnser:
         "Desde el lanzamiento de ChatGPT y otras plataformas de inteligencia artificial generativa, estas herramientas se han vuelto tremendamente comunes en nuestro día a día. Preguntar cosas a los chatbots de inteligencia artificial se ha convertido en una rutina, en una broma recurrente. Es prácticamente un meme. Sin embargo, pocas veces nos planteamos el coste ecológico de semejante tecnología. ChatPEC nace para divulgar sobre este tema, utilizando el formato chatbot para explicar el impacto medioambiental de la inteligencia artificial generativa a través de mensajes sencillos en clave de humor.",
   },
   {
      question: "¿Toda la Inteligencia Artificial es mala?",
      awnser:
         "No. Por eso nos gusta hablar de Inteligencia Artificial generativa. Esa es la tecnología que está detrás de servicios como chatGPT, Midjourney, LlaMA, Stable Diffusion, DALL-E… y muchos más. Son estas tecnologías (y los modelos empresariales que hay detrás), las que tienen un alto impacto medioambiental en varios frentes: consumo de agua, energía y emisiones. Sin embargo, no todas las Inteligencias Artificiales tienen estos problemas. Los investigadores en modelización de cambio climático emplean IA para mejorar las proyecciones de los modelos, hay algoritmos que pueden ayudar en el diagnóstico médico por imagen… hay muchos ejemplos de Ias con un impacto más que positivo. Precisamente porque en Agata Communications nos dedicamos a contar la ciencia, nos preocupamos por hacerlo de manera responsable. Y eso implica contar lo positivo y lo negativo.",
   },
   {
      question: "¿Cuál es el coste energético de la inteligencia artificial generativa?",
      awnser:
         "Es complicado estimar el coste energético exacto de la inteligencia artificial generativa. Cada plataforma es un mundo y, además, los algoritmos (y las empresas que los operan) son extremadamente opacos. Sin embargo, varios estudios científicos han evaluado el coste energético de diferentes aplicaciones de esta tecnología - por ejemplo, clasificar listas, redactar textos y generar imágenes- y las cifras varían entre 0,002 y 2,907 kilovatios-hora, según la complejidad de la tarea. Se estima que las búsquedas con inteligencia artificial generativa consumen 10 veces más energía que una búsqueda normal en Google. Aunque, como actualmente este buscador sugiere resultados con IA por defecto, recomendamos usar alternativas más sostenibles como DuckDuckGo.",
   },
   {
      question: "¿Qué tiene que ver la inteligencia artificial generativa con el consumo de agua?",
      awnser:
         "La inteligencia artificial generativa funciona en centros de datos, ordenadores gigantes distribuidos por todo el mundo y conectados gracias a internet. Con el crecimiento de las herramientas de IA generativa, prácticamente omnipresentes en la actualidad, los servidores de todo el mundo están echando humo, literalmente, y necesitan agua para refrigerar sus componentes. Se calcula que en 2027 la inteligencia artificial consumirá hasta 6.600 millones de metros cúbicos de agua. En las unidades internacionales de volumen, esto son aproximadamente 2 millones de piscinas olímpicas o, en otras palabras, un 140% del consumo urbano anual en España.",
   },
   {
      question: "¿Y también emite CO₂ la inteligencia artificial generativa? ",
      awnser:
         "En general, las emisiones de CO₂ son bastante complicadas de calcular, porque dependen en gran medida del tipo de energía que utilicen los servidores, del tamaño del modelo de inteligencia artificial, de la eficiencia de los algoritmos y del número de búsquedas y operaciones, entre otras muchas cosas. Se calcula que tan solo el entrenamiento de GPT-3 emitió unas 550 toneladas equivalentes de CO₂ – más o menos como viajar en avión de Nueva York a San Francisco más de mil veces. No todo son malas noticias. Hay investigadores que plantean desarrollar modelos de IA generativa más eficientes que, además, funcionen en servidores alimentados únicamente con energía limpia, lo que podría reducir entre 30 y 40 veces su impacto climático.",
   },
   {
      question: "¿Dónde puedo seguir leyendo?",
      awnser:
         "Todas las respuestas de ChatPEC recomiendan artículos relacionados, con más información sobre el impacto medioambiental de la inteligencia artificial. Aquí dejamos una selección, con artículos tanto en inglés como en castellano. ",
      details: [
         { text: "J Vincent. “How much electricity does AI consume?” The Verge, 16/02/2024.", link: "http://tiny.cc/z5l3yz" },
         {
            text: "M O’Brien, H Fingerhut. “Artificial intelligence technology behind ChatGPT was built in Iowa — with a lot of water”. Associated Press, 09/09/2023.",
            link: "http://tiny.cc/46m3yz",
         },
         {
            text: "K Saenko. “Is generative AI bad for the environment? A computer scientist explains the carbon footprint of ChatGPT and its cousins”. The Conversation, 23/05/2023.",
            link: "http://tiny.cc/h3m3yz",
         },
         {
            text: "K Hao. “Training a single AI model can emit as much carbon as five cars in their lifetimes”. MIT Technology Review, 06/06/2019.",
            link: "http://tiny.cc/fqu5001",
         },
         {
            text: "D. Gelles. “La IA y su voraz consumo de energía atentan contra los objetivos climáticos.” The New York Times en Español, 19/07/2024.",
            link: "http://tiny.cc/nqu5001",
         },
         { text: "“La IA acelera la crisis climática.” Deutsche Welle, 26/09/2024.", link: "http://tiny.cc/yqu5001" },
         { text: "M. Gonzalo. “El impacto climático de la IA y su huella ecológica.” Newtral, 06/09/2023.", link: "https://bit.ly/4gTFa0F" },
         {
            text: "“Las emisiones de Google aumentan casi un 50% en cinco años por el uso de la inteligencia artificial.” Climática, 03/07/2024.",
            link: "https://bit.ly/3DYaLQc",
         },
      ],
   },
];

const Faqs = () => {
   return (
      <div id={styles.ct}>
         <h2>Consulte nuestras preguntas más frecuentes</h2>

         <div id={styles.faqsCt}>
            {tempFaqs.map((v, k) => (
               <Faq question={v.question} awnser={v.awnser} key={k} details={v?.details} />
            ))}
         </div>
      </div>
   );
};
export default Faqs;
