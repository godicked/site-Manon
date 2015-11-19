// app/routes.js
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE ===========================
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });
    
    app.get('/recette', function(req, res) {
        res.render('recette.ejs');
    });
	
	app.get('/admin', function(req, res){
		res.render('admin.ejs');
	});

    
};
