const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "crud",
});

app.get("/", (req, res) => {
    const sql = "SELECT * FROM tasklists";
    db.query(sql, (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
});

app.post('/add', (req, res) => {
    const sql = "INSERT INTO tasklists (`task`) VALUES(?)";
    const values = [
        req.body.task,
    ]
    db.query(sql, values, (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})

app.put('/edit/:id', (req, res) => {
    const sql = "UPDATE tasklists SET `task` = ? WHERE `id` = ?";
    const { task } = req.body;
    const id = req.params.id;
    db.query(sql, [task, id], (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.json(data);
    });
});

app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM tasklists  WHERE `id` = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return res.status(500).json({ error: err.message });
        return res.json(data);
    });
});


app.listen(8081,() =>{
    console.log("listening");
})