const app = require("./app");
require('dotenv').config();
const db = require("./config/db.config");



const PORT = process.env.PORT || 3000;


db.authenticate()
  .then(() => {
    console.log("Conexión a la base de datos exitosa");
  })
  .catch((err) => {
    console.error("No se pudo conectar a la base de datos:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
