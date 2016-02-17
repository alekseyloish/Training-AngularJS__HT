// Follow steps from the walkthrough guide to create SearchController
(function () {
    'use_strict';

    var SearchController = function (productService) {
        var _this = this;

        _this.products = [];

        productService.find()
            .then(function (data) { _this.products = data; });
    };

    SearchController.$inject = ['ProductService'];
    angular.module('auction').controller('SearchController', SearchController);

}());
