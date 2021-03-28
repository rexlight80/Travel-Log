const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const middlewares = require("./middlewares.js");
const path = require('path');
const mongoose = require("mongoose")

require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true


});
const port = process.env.PORT || 1337

const logs = require("./api/logs")
const app = express();



app.use(morgan('common'))
app.use(cors());
app.use(express.json());


app.use("/api/logs", logs);




// app.use(middlewares.notFound);

// app.use(middlewares.erroHandler);

if (process.env.NODE_ENV === 'production') {
    
    app.use(express.static(path.join(__dirname +'/client/build/')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    });
}


app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
});