'use strict'; 
var request = require('superagent');
//import ActionCreators from '../actions/action-creators';

var PRODUCTS_URI = 'http://localhost:3131/api/products';

module.exports = {
    getAllProducts: function (callback) {
        request.get(PRODUCTS_URI)
            .end((err, res) => {
                console.log('receivePages');
                console.log(res);
                callback(null, res);
            });
    }
};