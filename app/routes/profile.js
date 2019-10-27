import Route from '@ember/routing/route';

export default Route.extend({
  userRights: Ember.inject.service('user-rights'),
  actions: {
    goToLoginPage() {
      let vm = this;
      vm.get('userRights').resetRights();
      this.get('controller').transitionToRoute('login');
    }
  }
});
