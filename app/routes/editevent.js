import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
    userRights: inject('user-rights'),
    model() {
        return {
            data: this.store.findAll('event'),
            canEdit: false,
            event_id: null
        };
    },
    afterModel(model) {
        let vm = this;
        vm.set('currentModel', model);
        vm.set('currentModel.canEdit', vm.get('userRights').getRights());
    },
    actions: {
        goToEditPage() {
            let vm = this;
            vm.set("currentModel.event_id", vm.get('controller').get('event_id'));
        },

        goToLoginPage() {
            let vm = this;
            vm.get('userRights').resetRights();
            vm.get('controller').transitionToRoute('login');
        }
    }
});