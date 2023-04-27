const express = require('express');
const app = express();
const port = 3001
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
const upload = multer({
  dest: path.join(__dirname, "fileStorage"),
  storage: multer.diskStorage({
    destination: path.join(__dirname, "fileStorage"),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);
        const fileName = `${hash.toString("hex")}-${file.originalname}`;
        cb(null, fileName);
      });
    },
  }),
  fileFilter: (req, file, cb) => {
    const pernition = ["image/pdf"];
    if (pernition.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
}); 
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
  app.post("/createComponente",upload.array("foto"), (req, res) => {
    const {PN} = req.body
    const {Nome} = req.body
    const {Descricao} = req.body
    const {Modelo} = req.body
    const {Fabricante} = req.body
    const {Preco} = req.body
    const {Dimensao} = req.body
    const {TipoDeDesenho} = req.body
    const {LPP} = req.body
    const {NumPad} = req.body

    let SQL = `INSERT INTO tb_Componentes VALUES('${PN}', '${Nome}', '${Descricao}', '${Modelo}', '${Fabricante}', ${Preco}, '${Dimensao}', '${TipoDeDesenho}', '${LPP}', '${NumPad}', http://localhost:3001/fileStorage/${req.files[0].filename} )`

    sql.query(SQL, (err, result) => { 
      if (err) res.send(err);
      else res.send("OK");
    });

  })

  app.get("/getComponente", (req, res) => {

    let SQL = "SELECT * FROM tb_Componentes order by cd_Componente asc"

    sql.query(SQL, (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    });
  })

  app.delete("/deleteComponente/:PN", (req, res) => {
  const {PN} = req.body

  let SQL = `DELETE from tb_Componentes WHERE cd_PN = ${PN}`

  sql.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });

  })




app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
