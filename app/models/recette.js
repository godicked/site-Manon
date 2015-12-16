// app/models/recette.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var recetteSchema = mongoose.Schema({

    id          : String,
    nom			: String,
    nbPersonne  : Int,
    tmpRepos    : Int,
    tmpCuisson  : Int,
	tmpTotal	: Int,
    niveau      : Int,
    materiel    : [String],
	imagePaysage: String,
    description : String,
	vignettes	: [String],
	ingredients	: [String],
	recette		: String
	
});


// create the model for recette and expose it to our app
module.exports = mongoose.model('Recette', recetteSchema);
