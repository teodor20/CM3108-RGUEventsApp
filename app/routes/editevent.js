import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
    userRights: inject('user-rights'),
    model(params) {
        let event_data = {};
        this.store.findAll('event').then(function(result) {
            event_data = result.find(e => e.id === params.event_id);
        });
        return {
            canEdit: this.userRights.getRights(),
            event_id: event_data.id,
            event_title: event_data.title,
            event_city: event_data.city,
            event_image: event_data.image, 
            event_bedrooms: event_data.bedrooms,
            event_description: event_data.description
        };
    },

    afterModel(model) {
        let vm = this;
        vm.set('currentModel', model);
    },

    actions: {
        updateEvent() {
            let vm = this;
            let event_id = vm.controller.get("event_id");
            let old_event = this.store.getReference("events", event_id);
            this.store.deleteRecord(old_event);
            this.store.createRecord("event", {
                title: vm.controller.get("event_title"),
                owner: vm.controller.get("event_owner"),
                city: vm.controller.get("event_city"),
                image: vm.controller.get("event_image"),
                bedrooms: vm.controller.get("event_bedrooms"),
                description: vm.controller.get("event_description")
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