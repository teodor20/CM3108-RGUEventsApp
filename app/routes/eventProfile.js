import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
  userRights: inject('user-rights'),
  model() {
    return {
      data: this.store.findAll('task'),
      canEdit: this.userRights.getRights(),
      users:{
        data: null,
        columns: [
          {
            "template": "custom/checkbox",
            "useFilter": false,
            "mayBeHidden": false,
            "disableFiltering": true
          },
          {
            "propertyName": "title",
            "title": "Name:",
            "disableFiltering": true
          },
        ]
      }
    };
  },
  afterModel(model) {
      let vm = this;
      vm.set('currentModel', model);

      let eventRecord = vm.store.peekRecord('event', 'hackaton-2019');
      let eventPeople = eventRecord.get("users");
      vm.set("currentModel.users.data", eventPeople);

      let canEdit = vm.get('userRights').getRights();
      vm.set('currentModel.canEdit', canEdit);
  },
  actions: {
    goToLoginPage() {
      let vm = this;
      vm.get('userRights').resetRights();
      this.controller.transitionToRoute('login');
    },
    editTask(task_id) {
      this.controller.transitionToRoute(`/edittask/${task_id}`);
    },
    onSkillsTableDataChanged(settings) {
      let vm = this;
      let selectedItem = settings.selectedItems.get('firstObject');
      vm.set('currentModel.selectedSkill', selectedItem);
    },
    createTask(event_id) {
      this.controller.transitionToRoute(`/createtask/${event_id}`);
    }
  }
});
