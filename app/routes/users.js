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
          "propertyName": "staffid",
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
      vm.get('controller').transitionToRoute('login');
    },
    onDocumentDataChanged(settings) {
      let vm = this;
      let selectedItem = settings.selectedItems.get('firstObject');
      vm.set('currentModel.selectedItem', selectedItem);
    },
    addUser() {
      let vm = this;
      let lastUserId = vm.get('currentModel.data.lastObject.id');
      let newId = (Number(lastUserId) + 1).toString();
      vm.get('controller').transitionToRoute('createuser', newId);
    },
    editUser() {
      let vm = this;
      let selectedItem = vm.get('currentModel.selectedItem');
      let userId = selectedItem.get('id');
      vm.get('controller').transitionToRoute('edituser', userId);
    },
    deleteUser() {
      //DOES NOT WORK
      let vm = this;
      let selectedItem = vm.get('currentModel.selectedItem');
      let userId = selectedItem.get('id');
      //let record = vm.store.peekRecord('user', userId);
      vm.store.findRecord('user', userId).then(function (record) {
        data.removeObject(record);
        record.deleteRecord();
      })
      let data = vm.get('currentModel.data').toArray();
      vm.set('currentModel.data', data);
    }
  }
});
