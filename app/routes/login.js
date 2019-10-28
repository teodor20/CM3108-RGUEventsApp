import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
  userRights: inject('user-rights'),
  model() {
    return {
      data: []
    }
  },
  afterModel(model) {
    let vm = this;
    vm.set('currentModel', model);
    let data = vm.store.findAll('user');
    vm.set('currentModel.data', data);
  },
  actions: {
    redirect() {
      this.transitionTo('login');
    },
    goToEventsPage() {
      let vm = this;
      let username = vm.get('controller').get('username');
      let password = vm.get('controller').get('password');
      let userList = vm.get('currentModel.data');
      let validUser = false;
      let isAdmin = false;
      let currentUser = null;

      userList.forEach(function (user) {
        if (user['username'] === username && user['password'] === password) {
          validUser = true;
          currentUser = user;

          if (user['role'] === 'admin') {
            isAdmin = true;
          }
        }
      });

      if (validUser) {
        vm.get('userRights').saveRights(isAdmin);
        vm.get('userRights').saveUser(currentUser);
        vm.get('controller').transitionToRoute('events');
      }
      else {
        alert("Invalid username/password!");
      }
    }
  }
});
