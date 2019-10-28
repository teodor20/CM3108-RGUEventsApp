import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
  userRights: inject('user-rights'),
  actions: {
    goToLoginPage() {
      let vm = this;
      vm.get('userRights').resetRights();
      this.get('controller').transitionToRoute('login');
    }
  }
});
