import Route from '@ember/routing/route';
import { inject } from "@ember/service";

export default Route.extend({
    userRights: inject('user-rights'),
    model() {
        return {
            canEdit: this.userRights.getRights(),
            user: this.userRights.getUser()
        };
    },
    actions: {
        storeEvent() {
            let vm = this;
            this.store.createRecord("event", {
                title: vm.controller.get("event-title"),
                owner: `${vm.get('userRights').firstname} ${vm.get('userRights').lastname}`,
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
            vm.controller.transitionToRoute('login');
        }
    }
});