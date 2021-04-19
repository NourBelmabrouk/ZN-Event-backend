const express = require('express');
const app=express();
const  cors=require("cors");
const bodyParser=require("body-parser");

app.use(express.json());



const  db =require("./models");
const Role = db.role;
const jwt=require('jsonwebtoken');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

db.sequelize.sync().then(() => {
    app.listen(9000,()=> {
        console.log("server running on port 9000");
        initial();
    });

})
function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "client"
    });

    Role.create({
        id: 3,
        name: "prestatire"
    });


    Role.create({
        id: 4,
        name: "admin"
    });
}