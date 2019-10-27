import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    goToLoginPage() {
      this.get('controller').transitionToRoute('login');
    }
  }
});
