const express = require('express');
const app = express();
const port = 3000
const sql = require("mssql");
const config = {
    user: "sa",
    password: "123456",
    server: "localhost",
    port: 1433,
    database: "sai",
    options: {
      trustedconnection: true,
      enableArithPort: true,
      instancename: "",
      trustServerCertificate: true,
    },
};




sql
  .connect(config)
  .then(console.log("Conectado ao banco sai"))
  .catch((err) => console.log(err));








app.listen(port, () => {
  console.log('Servidor iniciado em http://localhost:3000');
});
