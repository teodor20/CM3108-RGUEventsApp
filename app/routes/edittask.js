import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
    userRights: inject('user-rights'),
    model(params) {
        let task_data = {};

        //Find the task with task id.
        this.store.peekRecord('task', params.task_id);

        return {
            canEdit: this.userRights.getRights(),

            //Note: accessing data by using arrays because objects in JavaScript
            //can be used as arrays.
            task_id: params.task_id,
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
            let old_event = this.store.peekRecord("task", vm.model.task_id);
            this.store.deleteRecord(old_event);
            this.store.createRecord("task", {
                "name": vm.controller["task-name"],
                "event-id": vm.model["event-id"],
                "id": vm.model.task_id,
                "task-owner": vm.controller["task-owner"],
                "task-status": vm.controller["task-status"]
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