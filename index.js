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


  // => COMPONENTES
  app.post("/createComponente", upload.array("foto"), (req, res) => {
    const {teste} = req.body
    const {} = req.body
    const {} = req.body
    const {} = req.body
    const {} = req.body
    const {} = req.body
    const {} = req.body
    const {} = req.body
    const {} = req.body
    const {} = req.body

    let SQL = `INSERT INTO tb_Componentes VALUES('${teste}',  )`

    sql.query(SQL, (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    });

  })

  app.get("/getComponente", upload.array("foto"), (req, res) => {

    let SQL = "SELECT * FROM tb_Componentes by cd_Componente asc"

    sql.query(SQL, (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    });
  })

  app.delete("/deleteComponente/:PN", (req, res) => {
  const {PN} = req.body

  let SQL = `DELETE from tb_Componentes WHERE cd_PN = ${PN}`

  })




app.listen(port, () => {
  console.log('Servidor iniciado em http://localhost:3000');
});
