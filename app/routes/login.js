import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    redirect() {
      this.transitionTo('login');
    },
    goToEventsPage() {
      this.transitionToRoute('events');
    }
  }
});
