const express = require("express");
const cors = require("cors");
const chatbotController = require("./controllers/chatbot");

const app = express();

//  Allowing any domain to comunicate with the server
app.use(cors());

app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   res.header("Access-Control-Allow-Methods", "*");
   next();
});

app.post("/api/chatbot", chatbotController);

app.listen(3000, () => {
   console.log("Inicializando o servidor");
});
