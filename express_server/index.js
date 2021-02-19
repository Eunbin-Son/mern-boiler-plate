const express = require("express");
const app = express();

const port = 5001;

app.listen(port, ()=> {
    console.log(`express_server is now running at port ${port}`);
});