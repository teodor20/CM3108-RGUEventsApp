import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
    userRights: inject('user-rights'),
    model(params) {
        let task_data = {};
        this.store.findAll('event').then(function(result) {
            task_data = result.find(e => e.id === params.task_id);
        });
        return {
            canEdit: this.userRights.getRights(),
            task_id: task_data.id,
            task_name: task_data.title,
            task_event_id: task_data.event_id,
            task_owner: task_data.city,
            task_status: task_data.image
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
            let task_id = vm.controller.get("task_id");
            let old_event = this.store.getReference("task", task_id);
            this.store.deleteRecord(old_event);
            this.store.createRecord("task", {
                name: vm.controller.get("task_name"),
                event_id: vm.controller.get("event_id"),
                task_owner: vm.controller.get("task_owner"),
                task_status: vm.controller.get("task_status")
            });
            this.controller.transitionToRoute('events')
        },
        goToLoginPage() {
            let vm = this;
            vm.get('userRights').resetRights();
            vm.get('controller').transitionToRoute('login');
        }
    }
});