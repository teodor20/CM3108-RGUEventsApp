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
  this.route('createevent');
  this.route('editevent', {path: '/editevent/:event_id'});
  this.route('createtask', {path: '/createtask/:event_id'});
  this.route('edittask', {path: '/createtask/:task_id'});
  this.route('profile');
  this.route('eventprofile');
  this.route('login');
  this.route('createuser', {path: '/edituser/:new_id'});
  this.route('edituser', {path: '/edituser/:user_id'});
});

export default Router;
