const framework = require('express');
const cookiesParser = require('cookie-parser');
const app = framework();
const port = 8081;

app.use(cookiesParser());

app.get('/',(req,res)=>{
    console.log('Cookies', req.cookies);
    res.send('Hi cookie');
})

app.listen(port);

