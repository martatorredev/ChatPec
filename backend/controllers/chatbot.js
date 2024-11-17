let leven;
leven = import("leven").then((v) => (leven = v.default));
const data = require("./data.js");

const chatbotController = (req, res, next) => {
   const randomindex = Math.floor(Math.random() * data.length);
   res.json({ awnser: data[randomindex] });
};
module.exports = chatbotController;
