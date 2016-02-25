// Follow steps from the walkthrough guide to create ProductService
(function () {
    'use strict';

    var ProductService = function ($http) {
        this.$http = $http;
    };

    ProductService.prototype = {
        getProducts: function () {
            return this.$http.get('data/products-featured.json')
                .then(function (resp) { return resp.data; });
        },
        find: function () {
            return this.$http.get('data/products-search.json')
                .then(function (resp) { return resp.data; });
        },
    };

    ProductService.$inject = ['$http'];
    angular.module('auction').service('ProductService', ProductService);

}());
