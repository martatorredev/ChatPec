const express = require("express");
const cors = require("cors");
const util = require("util");

const app = express();

//  Allowing any domain to comunicate with the server
app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   res.header("Access-Control-Allow-Methods", "*");
   next();
});

app.post("/api/chatbot", (req, res, next) => {
   const { text } = req.query;
   console.log(text);
   res.status(200).json({ message: "Você enviou um texto para mim" });
});

app.listen(3000, () => {
   console.log("Inicializando o servidor");
});
