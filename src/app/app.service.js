angular
  .module('app')
  .service('ContactService', function () {
    var list = [];

    this.getList = function () {
      return list;
    };

    this.setList = function (value) {
      list = value;
    };

    this.push = function (contact) {
      list.push(contact);
    };
  });