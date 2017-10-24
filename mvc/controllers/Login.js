const LoginController = function(){
    const modelData = require('../models/Login_Model');
    const viewData = { title : 'Login System'};
    
    const login = (req,res) => res.render('../views/login',viewData);
    const signin = (req,res) => {
        let username = req.body.username;
        let userpass = req.body.userpass;
        
        let check = modelData.list.filter((value)=>{
            return username === value.username && userpass === value.userpass
        });
        
        if(check.length > 0){
            res.redirect('/main');
        }else{
            res.redirect('/login');
        }
    }
    
    return { 
        login : (req,res) => login(req,res),
        signin : (req,res) => signin(req,res)
    }
};

module.exports = new LoginController;
