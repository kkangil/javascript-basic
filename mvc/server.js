const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('views',__dirname+'/views');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(express.static('public'));

const router = require('./router')(app);

app.listen(3000,(req,res)=>console.log('Server is started'));