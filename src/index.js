const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const pool = require("./vehicle");

app.get("/vehicle", async(req,res) => {
    try{
        const data = await pool.query("SELECT * FROM vehicle");
        res.json(data.rows);
    }
    catch(e){
        console.error(e.message);
    }
});

app.listen(9999);