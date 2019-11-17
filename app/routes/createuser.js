import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
  actions: {
    goToLoginPage() {
      let vm = this;
      vm.get('userRights').resetRights();
      vm.get('controller').transitionToRoute('login');
    },
    saveUser() {
      let vm = this;
      let firstname = vm.get('controller').get('firstname');
      let lastname = vm.get('controller').get('lastname');
      let gender = vm.get('controller').get('gender');
      let email = vm.get('controller').get('email');
      let mobile = vm.get('controller').get('mobile');
      let position = vm.get('controller').get('position');
      let staffId = vm.get('controller').get('id');
      let role = vm.get('controller').get('role');
      let username = vm.get('controller').get('username');
      let password = vm.get('controller').get('password');
      let confirmPassword = vm.get('controller').get('confirmPassword');

      if (!password) {
        alert("Password cannot be empty");
      }
      else if (password == confirmPassword) {
        vm.store.createRecord('user', {
          staffno: staffId,
          firstname: firstname,
          lastname: lastname,
          username: username,
          password: password,
          position: position,
          role: "Admin",
          gender: "Male",
          email: email,
          mobile: mobile
        });

        vm.reseltFields();
        vm.get('controller').transitionToRoute('users');

      }
      else {
        alert("Passwords do not match.");
      }
    },
    cancel() {
      this.get('controller').transitionToRoute('users');
    }
  },
  reseltFields() {
    let vm = this;
    vm.get('controller').set('firstname', "");
    vm.get('controller').set('lastname', "");
    vm.get('controller').set('email', "");
    vm.get('controller').set('mobile', "");
    vm.get('controller').set('position', "");
    vm.get('controller').set('id', "");
    vm.get('controller').set('role', "");
    vm.get('controller').set('username', "");
    vm.get('controller').set('password', "");
    vm.get('controller').set('confirmPassword', "");
  }
});
