const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');

const app = express();

massive(process.env.CONNECTION_STRING)
    .then((dbInstance)=>{
        app.set('db', dbInstance)
        console.log('connect to db')
    })

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5004;

app.post('/api/login', (req, res)=>{
    const db  = app.get('db');
    db.user_table.findOne({email: req.body.email})
        .then((user)=>{
            res.send(user);
        })
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})