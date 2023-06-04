const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "***",
  database: "***",
});

app.get("/home", (req, res) => {
  db.query("SELECT * FROM ITEMS", (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/bid", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;
  const bid = req.body.bid;

  db.query(
    "UPDATE ITEMS SET HIGHESTBIDDER=?,BIDDERRMAIL=?,BID=? WHERE ID=?",
    [name, email, bid, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

app.post("/new", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const title = req.body.title;
  const desc = req.body.desc;
  const photo = req.body.photo;

  db.query(
    "INSERT INTO ITEMS(TITLE,DESCRIPTION,USERID,PHOTO,SELLER,BID) VALUES (?,?,?,?,?,0)",
    [title, desc, id, photo, name],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

app.post("/delete", (req, res) => {
  const itemid = req.body.id1;
  const userid = req.body.id2;

  db.query(
    "DELETE FROM ITEMS WHERE USERID = ? AND ID=?",
    [userid, itemid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(itemid);
      }
    }
  );
});
app.listen(3002, () => {
  console.log("SERVER IS RUNNING ON PORT 3002");
});
