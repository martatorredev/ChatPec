let leven;
leven = import("leven").then((v) => (leven = v.default));

const data = [
   {
      question: "¿Cómo puedo restablecer mi contraseña?",
      awnser: "Para restablecer su contraseña, vaya a la página de inicio de sesión y haga clic en “Olvidé mi contraseña”",
   },
   { question: "¿Qué métodos de pago aceptan?", awnser: "Aceptamos tarjetas de crédito, débito, PayPal y PIX" },
   {
      question: "¿Cómo puedo ponerme en contacto con el servicio de asistencia?",
      awnser:
         "Puede ponerse en contacto con el servicio de asistencia por correo electrónico en suporte@empresa.com o a través de nuestro chat en el sitio web.",
   },
   { question: "¿Cuál es el plazo de entrega?", awnser: "El plazo de entrega varía de 3 a 5 días laborables, dependiendo de su región." },
   {
      question: "¿Cómo puedo cancelar mi pedido?",
      awnser: "Para cancelar tu pedido, accede a tu cuenta y ve a la sección “Mis pedidos”, donde encontrarás la opción de cancelación.",
   },
];

function findAwnser(userQuestion) {
   let bestMatch = { awnser: null, distance: Infinity };

   data.forEach((item) => {
      //    Smaller the distance, higher the matching
      const distance = leven(userQuestion, item.question);
      console.log(distance);
      if (distance < bestMatch.distance) {
         bestMatch = { awnser: item.awnser, distance };
      }
   });
   console.log(bestMatch.awnser);
   //   Defines limit distance to accept the question
   if (bestMatch.distance < 5) {
      return bestMatch.awnser;
   } else {
      return "No respondo a ese tipo de preguntas";
   }
}

const chatbotController = (req, res, next) => {
   const { text } = req.query;
   const awnser = findAwnser(text);
   if (awnser) {
      res.json({ awnser });
   }
};

module.exports = chatbotController;
