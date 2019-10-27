import Route from '@ember/routing/route';

export default Route.extend({
  userRights: Ember.inject.service('user-rights'),
  model() {
    return {
      data: this.store.findAll('event'),
      canEdit: false
    }
  },
  afterModel(model) {
    let vm = this;
    vm.set('currentModel', model);

    let canEdit = vm.get('userRights').getRights();
    vm.set('currentModel.canEdit', canEdit);
  },
  actions: {
    goToLoginPage() {
      let vm = this;
      vm.get('userRights').resetRights();
      vm.get('controller').transitionToRoute('login');
    }
  },
});
