'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var newSchema = new Schema({

	name: String

});

var Category = mongoose.model('Category', newSchema);

module.exports = Category;

