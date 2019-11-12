import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
    userRights: inject('user-rights'),
    model(params) {
        return {
            "canEdit": this.userRights.getRights(),
            "event-id": params.event_id
        };
    },
    actions: {
        saveTask() {
            let vm = this;
            vm.store.createRecord("task", {
                "name": vm.controller.get("task-name"),
                "event-id": vm.controller.get("event-id"),
                "task-owner": vm.controller.get("task-owner"),
                "task-status": vm.controller.get("task-status")
            })
        },
        goToLoginPage() {
            let vm = this;
            vm.get('userRights').resetRights();
            vm.get('controller').transitionToRoute('login');
        }
    }
});