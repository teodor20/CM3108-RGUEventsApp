import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
  userRights: inject('user-rights'),
  model() {
    return {
      data: this.store.findAll('event'),
      canEdit: this.userRights.getRights()
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
    },

    goToEventProfile() {
      this.controller.transitionToRoute('eventprofile');
    },

    addEvent() {
      this.controller.transitionToRoute('createevent');
    },

    editEvent(event_id) {
      this.controller.transitionToRoute(`/editevent/${event_id}`);
    }
  },
});
