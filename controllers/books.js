'use strict';

var Book = require('../models/book.js');
var Category = require('../models/category.js');

module.exports = function (router) {


    router.get('/', function (req, res) {

    	Book.find(function(err, books) {

    		if(err) throw err;

    		//limit the text of the descritions
    		books.forEach(function(book) {

    			book.truncText = book.truncText(50);
    		})

    		res.render('index', {books: books});


    	})
        
        
    });
	
	 router.get('/details/:id', function (req, res) {

	 	Book.findById(req.params.id,function(err, book) {

	 		if(err) throw err;

	 		res.render('books/details', {book: book});

	 	})
            
    });

};