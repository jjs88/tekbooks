'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var newSchema = new Schema({

	title: String,
	category: String,
	description: String,
	author: String,
	publisher: String,
	price: String,
	cover: String
});



var Book = mongoose.model('Book', newSchema);

//add methods for the Book Model
Book.prototype.truncText = function(length) {

	return this.description.substring(0, length);
}


module.exports = Book;