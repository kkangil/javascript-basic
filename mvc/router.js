const Router = (app) => {
    
    const Login = require('./controllers/Login');
    app.get('/login',(req,res)=> Login.login(req,res));
    app.post('/signin',(req,res) => Login.signin(req,res));
    
    const Main = require('./controllers/Main');
    app.get('/main',(req,res)=> Main.mainView(req,res));
    
};

module.exports = Router;