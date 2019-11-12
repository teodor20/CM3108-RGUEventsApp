import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
    userRights: inject('user-rights'),
    model(params) {
        let task_data = {};
        this.store.findAll('task').then(function(result) {
            task_data = result.find(t => t.id === params.task_id);
        });

        console.log(JSON.stringify(task_data));

        return {
            canEdit: this.userRights.getRights(),

            //Note: accessing data by using arrays because objects in JavaScript
            //can be used as arrays.
            task_id: task_data["id"],
            task_name: task_data["name"],
            task_event_id: task_data["event-id"],
            task_owner: task_data["task-owner"],
            task_status: task_data["task-status"]
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
            let vm = this;
            let task_id = vm.controller.get("task-id");
            let old_event = this.store.getReference("task", task_id);
            this.store.deleteRecord(old_event);
            this.store.createRecord("task", {
                "name": vm.controller.get("task-name"),
                "event-id": vm.controller.get("event-id"),
                "task-owner": vm.controller.get("task-owner"),
                "task-status": vm.controller.get("task-status")
            });
            this.controller.transitionToRoute('eventprofile')
        },
        goToLoginPage() {
            let vm = this;
            vm.get('userRights').resetRights();
            vm.get('controller').transitionToRoute('login');
        }
    }
});