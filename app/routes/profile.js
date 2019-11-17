import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
  userRights: inject('user-rights'),
  model() {
    return {
      user: this.userRights.getUser(),
      firstname: null,
      lastname: null,
      gender: null,
      email: null,
      mobile: null,
      position: null,
      staffId: null,
      role: null,
      username: null,
      skills: null,
      events: null
    }
  },
  afterModel(model) {
    let vm = this;
    vm.set('currentModel', model);

    let user = vm.get('currentModel.user');

    let firstname = user.get('firstname');
    let lastname = user.get('lastname');
    let gender = user.get('gender');
    let email = user.get('email');
    let mobile = user.get('mobile');
    let position = user.get('position');
    let staffId = user.get('staffid');
    let role = user.get('role');
    let username = user.get('username');
    let skills = user.get('skills');
    let events = user.get('events');

    vm.set('currentModel.firstname', firstname);
    vm.set('currentModel.lastname', lastname);
    vm.set('currentModel.gender', gender);
    vm.set('currentModel.email', email);
    vm.set('currentModel.mobile', mobile);
    vm.set('currentModel.position', position);
    vm.set('currentModel.id', staffId);
    vm.set('currentModel.role', role);
    vm.set('currentModel.username', username);
    vm.set('currentModel.skills', skills);
    vm.set('currentModel.events', events);
  },
  actions: {
    goToLoginPage() {
      let vm = this;
      vm.get('userRights').resetRights();
      this.get('controller').transitionToRoute('login');
    },
    editUser() {
      let vm = this;
      let userId = vm.get('currentModel.user.id');
      vm.get('controller').transitionToRoute('edituser', userId);
    },
  }
});
