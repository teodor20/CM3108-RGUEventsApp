import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
    userRights: inject('user-rights'),
    model(params) {
        let event_data = {};

        //Get the event data for the event that has the specified event id.
        this.store.findAll('event').then(function(result) {
            event_data = result.find(e => e.id === params.event_id);
        });

        return {
            "canEdit": this.userRights.getRights(),
            "event-id": event_data.id,
            "event-title": event_data.title,
            "event-city": event_data.city,
            "event-image": event_data.image, 
            "event-bedrooms": event_data.bedrooms,
            "event-description": event_data.description
        };
    },

    afterModel(model) {
        let vm = this;
        vm.set('currentModel', model);
    },

    actions: {
        updateEvent() {
            let vm = this;
            let event_id = vm.controller.get("event-id");
            let old_event = this.store.getReference("events", event_id);
            this.store.deleteRecord(old_event);
            this.store.createRecord("event", {
                title: vm.controller.get("event-title"),
                owner: vm.controller.get("event-owner"),
                city: vm.controller.get("event-city"),
                image: vm.controller.get("event-image"),
                bedrooms: vm.controller.get("event-bedrooms"),
                description: vm.controller.get("event-description")
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