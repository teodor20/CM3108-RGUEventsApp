import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
    userRights: inject('user-rights'),
    model(params) {
        return {
            "task-name": null,
            "task-owner": null,
            "task-status": null,
            "canEdit": this.userRights.getRights(),
            "event-id": params.event_id
        };
    },
    actions: {
        saveTask() {
            let vm = this;
            vm.store.createRecord("task", {
                "id": Math.random() * 1000000,
                "name": vm.controller["task-name"],
                "event-id": vm.model["event-id"],
                "task-owner": vm.controller["task-owner"],
                "task-status": vm.controller["task-status"]
            })
            this.controller.transitionToRoute('eventprofile');
        },
        goToLoginPage() {
            let vm = this;
            vm.get('userRights').resetRights();
            vm.get('controller').transitionToRoute('login');
        }
    }
});