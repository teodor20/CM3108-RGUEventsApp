import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
  userRights: inject('user-rights'),
  model(params) {
    let user_id = params.user_id;
    return {
      id: user_id,
      firstname: null,
      lastname: null,
      gender: null,
      email: null,
      mobile: null,
      position: null,
      staffId: null,
      role: null,
      username: null,
      password: null,
    }
  },
  afterModel(model) {
    let vm = this;
    vm.set('currentModel', model);
    let userId = vm.get('currentModel.id');
    let userRecord = vm.store.peekRecord('user', userId);

    vm.set('currentModel.userRecord', userRecord);

    let firstname = userRecord.get('firstname');
    let lastname = userRecord.get('lastname');
    let gender = userRecord.get('gender');
    let email = userRecord.get('email');
    let mobile = userRecord.get('mobile');
    let position = userRecord.get('position');
    let staffId = userRecord.get('staffid');
    let role = userRecord.get('role');
    let username = userRecord.get('username');
    let password = userRecord.get('password');

    vm.set('currentModel.firstname', firstname);
    vm.set('currentModel.lastname', lastname);
    vm.set('currentModel.gender');
    vm.set('currentModel.email', email);
    vm.set('currentModel.mobile', mobile);
    vm.set('currentModel.position', position);
    vm.set('currentModel.id', staffId);
    vm.set('currentModel.role', role);
    vm.set('currentModel.username', username);
    vm.set('currentModel.password', password);
    vm.set('currentModel.confirmPassword', password);
  },
  actions: {
    goToLoginPage() {
      let vm = this;
      vm.get('userRights').resetRights();
      vm.get('controller').transitionToRoute('login');
    },
    cancel() {
      this.get('controller').transitionToRoute('users');
    },
    saveUser() {
      let vm = this;
      let record = vm.get('currentModel.userRecord');

      let firstname = vm.get('currentModel.firstname');
      let lastname = vm.get('currentModel.lastname');
      //let gender = vm.get('currentModel.gender');
      let email = vm.get('currentModel.email');
      let mobile = vm.get('currentModel.mobile');
      let position = vm.get('currentModel.position');
      let staffId = vm.get('currentModel.id');
      //let role = vm.get('currentModel.role');
      let username = vm.get('currentModel.username');
      let password = vm.get('currentModel.password');
      let confirmPassword = vm.get('currentModel.confirmPassword');

      if (!password) {
        alert("Password cannot be empty");
      }
      else if (password == confirmPassword) {
        record.set('staffid', staffId);
        record.set('firstname', firstname);
        record.set('lastname', lastname);
        record.set('username', username);
        record.set('password', password);
        record.set('position', position);
        record.set('email', email);
        record.set('mobile', mobile);

        vm.get('controller').transitionToRoute('users');

      }
      else {
        alert("Passwords do not match.");
      }
    }
  }
});
