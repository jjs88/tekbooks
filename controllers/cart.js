'use strict';
var Book = require('../models/book.js');



module.exports = function(router) {


	router.get('/', function(req, res) {

		//get cart from the session
		var cart = req.session.cart;
		var displayCart = {items: [], total: 0};
		var total = 0;

		//get the total
		for(var item in cart) {
			displayCart.items.push(cart[item]);
			total += (cart[item].qty * cart[item].price);
		}

		displayCart.total = total;

		//render the cart
		res.render('cart/index', {cart: displayCart});
	})




	router.post('/:id', function(req, res) {

		req.session.cart = req.session.cart || {};
		var cart = req.session.cart;

		Book.findOne({_id: req.params.id}, function(err, book) {

			if(err) throw err;

			//if cart already exists, just add 1 to the quantity
			if(cart[req.params.id]) {
				cart[req.params.id].qty++;
			} else {

				//create new cart object and set it to 1
				cart[req.params.id] = {
					item: book._id,
					title: book.title,
					price: book.price,
					qty: 1
				}
			}

			res.redirect('/cart');
		})

	})

	router.get('/remove', function(req, res) {

		//reset the cart to nothing
		req.session.cart = {};

		res.redirect('/cart');
	})










}