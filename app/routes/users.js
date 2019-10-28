import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
  userRights: inject('user-rights'),
  model() {
    return {
      canEdit: false,
      selectedItem: null,
      columns: [
        {
          "template": "custom/checkbox",
          "useFilter": false,
          "mayBeHidden": false
        },
        {
          "propertyName": "staffno",
          "title": "ID"
        },
        {
          "propertyName": "firstname",
          "title": "First Name"
        },
        {
          "propertyName": "lastname",
          "title": "Last Name"
        },
        {
          "propertyName": "position",
          "title": "Position"
        }
      ],
      data: []
    }
  },
  afterModel(model) {
    let vm = this;
    vm.set('currentModel', model);

    let data = vm.store.findAll('user');
    let canEdit = vm.get('userRights').getRights();

    vm.set('currentModel.data', data);
    vm.set('currentModel.canEdit', canEdit);
  },
  actions: {
    goToLoginPage() {
      let vm = this;
      vm.get('userRights').resetRights();
      this.get('controller').transitionToRoute('login');
    },
    onDocumentDataChanged(settings) {
      let vm = this;
      let selectedItem = settings.selectedItems.get('firstObject');
      vm.set('currentModel.selectedItem', selectedItem);
    }
  }
});
