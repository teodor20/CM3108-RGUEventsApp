import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
    userRights: inject('user-rights'),
    model() {
        return {
            canEdit: this.userRights.getRights()
            
        };
    },
    actions: {
        saveTask() {
            let vm = this;
            vm.store.createRecord("task", {
                name: vm.controller.get("task_name"),
                event_id: vm.controller.get("event_id"),
                task_owner: vm.controller.get("task_owner"),
                task_status: vm.controller.get("task_status")
            })
        },
        goToLoginPage() {
            let vm = this;
            vm.get('userRights').resetRights();
            vm.get('controller').transitionToRoute('login');
        }
    }
});