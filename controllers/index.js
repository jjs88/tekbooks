'use strict';

var IndexModel = require('../models/index');
var Book = require('../models/book.js');


module.exports = function (router) {

    var model = new IndexModel();

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


    router.get('/about', function(req, res) {

        
    })

};
