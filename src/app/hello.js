angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (ContactFactory) {
      var vm = this;

      var id = 0;
      vm.hero = 'New Content';
      vm.heroList = 'List a Content';
      vm.form = {
        name: '',
        telphone: '',
        email: ''
      };
      vm.add = add;
      vm.edit = edit;
      vm.list = [];

      (function onInit() {
        return vm.list = ContactFactory.list();
      })();

      function add(contact) {
        if (!contact) {
          alert('You must need a valid contact');
          return;
        }

        if (contact.id) {
          clean();
          return ContactFactory.edit(contact);
        }
        contact.id = id = id + 1;

        ContactFactory.add(contact);

        clean();

      };

      function edit(contact, indexList) {
        if (!contact) {
          alert('You must need a valid contact');
          return;
        }
        vm.form.name = contact.name;
        vm.form.telephone = contact.telephone;
        vm.form.email = contact.email;
        vm.form.id = contact.id;
      };

      function clean() {
        vm.form = {
          id : 0,
          name: '',
          telephone: '',
          email: ''
        };
      }
    }
  });
