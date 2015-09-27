// app/models/recette.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var recetteSchema = mongoose.Schema({

    nom			: String,
	duree		: Int,
	prix		: Int,
	description	: String,
	logo 		: String,
	images		: [String],
	ingredients	: [String],
	etapes		: [String]
	
});


// create the model for recette and expose it to our app
module.exports = mongoose.model('Recette', recetteSchema);
