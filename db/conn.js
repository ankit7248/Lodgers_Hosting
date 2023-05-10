const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Lodgers:root@ankit.yvp13zf.mongodb.net/Lodgers-api",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then(() => {
        console.log("connection is successfully");

    }).catch((e) => {
        console.log(e);
    })