const express = require('express');
const app = express();
const port = 8080;
app.listen(port, () => {
console.log('listening for request on port 8080');
});
app.get('/', (req, res) => {
    console.log('request made / ');
    res.send ("/");
});

app.use((req, res) => {
    console.log('request made /404 ');
    res.send("404").statusCode(404);
});

app.get('/health-check',(req,res)=> {
    console.log('Health pass');
    res.send ("Health check passed");
});
app.get('/bad-health',(req,res)=> {
    console.log('bad Health');
    res.status(500).send('Health check did not pass');
});