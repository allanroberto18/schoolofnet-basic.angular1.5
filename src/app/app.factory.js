angular
  .module('app')
  .factory('ContactFactory', function (ContactService) {
    var factory = {};

    factory.add = add;
    factory.list = list;
    factory.edit = edit;

    function list() {
      return ContactService.getList();
    }

    function add(contact) {
      ContactService.push(contact);
    };

    function edit(contact) {
      var list = ContactService.getList();
      var index = null;
      var contactOld = list.filter(function (el, pos) {
        index = pos;
        return el.id == contact.id;
      });
      if (index != null) {
        return list.splice(index, 1, contact);
      }
    };

    return factory;
  });