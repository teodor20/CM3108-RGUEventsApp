import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
    userRights: inject('user-rights'),
    model() {
        return {
            canEdit: false,
            selectedEvent: null,
        };
    },
    afterModel(model) {
        let vm = this;
        vm.set('currentModel', model);
        let canEdit = vm.get('userRights').getRights();
        vm.set('currentModel.canEdit', canEdit);
    },
    actions: {
        updateTask() {
            //TODO
            //this.store.findRecord
        },
        goToLoginPage() {
            let vm = this;
            vm.get('userRights').resetRights();
            vm.get('controller').transitionToRoute('login');
        }
    }
});