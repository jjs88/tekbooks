'use strict';

var Book = require('../models/book.js');
var Category = require('../models/category.js');
var flash = require('connect-flash');

module.exports = function (router) {


    router.get('/', function (req, res) {
        
		 res.render('manage/index');
        
    });
	
    
    //BOOKS
    router.get('/books', function (req, res) {

        Book.find(function(err, books) {

            res.render('manage/books/index', {books:books});

        });
    
        
    });


    router.get('/books/add', function (req, res) {

        Category.find(function(err, categories) {

            if(err) throw err;

            res.render('manage/books/add',{categories: categories});

        })
    
    
    });


    router.get('/books/edit/:id', function (req, res) {

        //explicitely set _id otherwise it grabs the first book from DB
        Book.findOne({_id:req.params.id}, function(err, book) {

            Category.find(function(err, categories) {

                res.render('manage/books/edit', {book: book, categories: categories});

            });            
        });    
    });


    router.post('/books/edit/:id', function (req, res) {

        var title = req.body.title.trim();
        var author = req.body.author.trim();
        var publisher = req.body.publisher.trim();
        var price = req.body.price.trim();
        var category = req.body.category.trim();
        var description = req.body.description.trim();
        var cover = req.body.cover.trim();

        
         Book.update({_id: req.params.id},{

            title: title,
            author: author,
            publisher: publisher,
            price: price,
            category: category,
            description: description,
            cover: cover
        }, function(err) {

            if(err) {
                console.log(err);
            }

            console.log("WORKS");
            req.flash('success', 'book updated');
            res.redirect('/manage/books');
        });          
    });
    
    //add a book
    router.post('/books/add', function (req, res) {
        
         //check for validation
        if(title == '' || price == '') {
            req.flash('error', "Please fill out required fields");
            res.location('/manage/books/add');
            res.redirect('manage/books/add');
        }

        var title = req.body.title.trim();
        var author = req.body.author.trim();
        var publisher = req.body.publisher.trim();
        var price = req.body.price.trim();
        var category = req.body.category.trim();
        var description = req.body.description.trim();
        var cover = req.body.cover.trim();


        var newBook = new Book({
            title: title,
            author: author,
            publisher: publisher,
            price: price,
            category: category,
            description: description,
            cover: cover
        });


        newBook.save(function(err, book) {

            if(err) throw err;

            req.flash('success', "book added");
            res.redirect('/manage/books');
        })
        
    
    });

      router.delete('/books/delete/:id', function(req, res) {

        console.log("works");

        Book.remove({_id: req.params.id}, function(err) {
            if(err) {
                console.log(err);
            };

            req.flash('success', 'book deleted');
            res.redirect('/manage/books');
        })
    })

    
       

        //CATEGORIES
       router.get('/categories', function (req, res) {

            Category.find(function(err, categories) {

            res.render('manage/categories/index', {categories: categories});

            })
               
        });

    
       router.post('/categories/edit/:id', function (req, res) {


            console.log("wWORKS!");
            var name = req.body.name;

            if(name == '') throw err;

            Category.update({_id: req.params.id}, {

                name: name
            },function(err) {

                if(err) {
                    console.log(err);
                }

                req.flash('success', 'edit complete');
                res.redirect('/manage/categories');
            })

             
    });  


       router.get('/categories/edit/:id', function (req, res) {

            // console.log(req.params.id);

            Category.findOne({_id: req.params.id}, function(err, category) {
                
                res.render('manage/categories/edit', {category: category});
            })


             
    });  

    
        router.delete('/categories/delete/:id', function(req, res) {

            Category.remove({_id: req.params.id}, function(err) {
                if(err) {
                    console.log(err);
                };

                req.flash('success', 'category deleted');
                res.redirect('/manage/categories');
            })
        })


        

       router.get('/categories/add', function (req, res) {


            res.render('manage/categories/add');

    
    
    });


      router.post('/categories/add', function (req, res) {


        var name = req.body.name.trim();

        if(name == "" || undefined) {

            console.log("No Name added!")
            req.flash('No name added', 'Please add name');

            res.redirect('/manage/categories/add');

        }

        var newCategory = new Category({

            name:name
        })

        newCategory.save(function(err, category) {

            if(err) throw err;

            console.log(category);

            req.flash('category saved');
            res.redirect('/manage/categories');
        })

    
    
    });






}





