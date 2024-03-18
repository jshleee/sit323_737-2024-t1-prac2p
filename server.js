const express = require('express');
const app = express();
const port = 3000;

//define a route to serve the index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

//start server
app.listen(port, () => {
    console.log(`listening : http://localhost:${port}`);
});
