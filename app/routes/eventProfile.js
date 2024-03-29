import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
  userRights: inject('user-rights'),
  model() {
    return {
      data: this.store.findAll('task'),
      canEdit: this.userRights.getRights()
    };
  },
  afterModel(model) {
      let vm = this;
      vm.set('currentModel', model);
  },
  actions: {
    goToLoginPage() {
      this.controller.transitionToRoute('login');
    },
    editTask(task_id) {
      this.controller.transitionToRoute(`/edittask/${task_id}`);
    },
    createTask(event_id) {
      this.controller.transitionToRoute(`/createtask/${event_id}`);
    }
  }
});
