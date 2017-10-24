const MainController = function(){
    const main_view = (req,res) => res.render('../views/main');
    
    return{
        mainView : (req,res) => main_view(req,res)
    }
};

module.exports = new MainController;