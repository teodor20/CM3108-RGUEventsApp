import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('events');
  this.route('about');
  this.route('users');
  this.route('profile');
  this.route('eventProfile');
  this.route('login');
});

export default Router;
