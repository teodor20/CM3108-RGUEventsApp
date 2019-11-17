import Route from '@ember/routing/route';
import { inject } from "@ember/service";
import Ember from 'ember';

export default Route.extend({
  userRights: inject('user-rights'),
  model(params) {
    let user_id = params.user_id;
    return {
      id: user_id,
      firstname: null,
      lastname: null,
      gender: null,
      email: null,
      mobile: null,
      position: null,
      staffId: null,
      role: null,
      username: null,
      password: null,
      canEdit: this.userRights.getRights(),
      skills: {
        data:Ember.A(),
        columns: [
          {
            "template": "custom/checkbox",
            "useFilter": false,
            "mayBeHidden": false,
            "disableFiltering": true
          },
          {
            "propertyName": "title",
            "title": "Skill",
            "disableFiltering": true
          },
        ]
      },
      events: {
        data:Ember.A(),
        columns: [
          {
            "template": "custom/checkbox",
            "useFilter": false,
            "mayBeHidden": false,
            "disableFiltering": true,
            "disabled": this.canEdit
          },
          {
            "propertyName": "title",
            "title": "Event",
            "disableFiltering": true
          },
        ]
      },
      newSkill: null,
      newEvent: null
    }
  },
  afterModel(model) {
    let vm = this;
    vm.set('currentModel', model);
    let userId = vm.get('currentModel.id');
    let userRecord = vm.store.peekRecord('user', userId);

    vm.set('currentModel.userRecord', userRecord);

    let firstname = userRecord.get('firstname');
    let lastname = userRecord.get('lastname');
    let gender = userRecord.get('gender');
    let email = userRecord.get('email');
    let mobile = userRecord.get('mobile');
    let position = userRecord.get('position');
    let staffId = userRecord.get('staffid');
    let role = userRecord.get('role');
    let username = userRecord.get('username');
    let password = userRecord.get('password');

    vm.set('currentModel.firstname', firstname);
    vm.set('currentModel.lastname', lastname);
    vm.set('currentModel.gender');
    vm.set('currentModel.email', email);
    vm.set('currentModel.mobile', mobile);
    vm.set('currentModel.position', position);
    vm.set('currentModel.id', staffId);
    vm.set('currentModel.role', role);
    vm.set('currentModel.username', username);
    vm.set('currentModel.password', password);
    vm.set('currentModel.confirmPassword', password);

    let skills = userRecord.get('skills');
    let events = userRecord.get('events');
    vm.set('currentModel.skills.data', skills);
    vm.set('currentModel.events.data', events);

  },
  actions: {
    goToLoginPage() {
      let vm = this;
      vm.get('userRights').resetRights();
      vm.get('controller').transitionToRoute('login');
    },
    cancel() {
      this.get('controller').transitionToRoute('users');
    },
    saveUser() {
      let vm = this;
      let record = vm.get('currentModel.userRecord');

      let firstname = vm.get('currentModel.firstname');
      let lastname = vm.get('currentModel.lastname');
      //let gender = vm.get('currentModel.gender');
      let email = vm.get('currentModel.email');
      let mobile = vm.get('currentModel.mobile');
      let position = vm.get('currentModel.position');
      let staffId = vm.get('currentModel.id');
      //let role = vm.get('currentModel.role');
      let username = vm.get('currentModel.username');
      let password = vm.get('currentModel.password');
      let confirmPassword = vm.get('currentModel.confirmPassword');
      let skills = vm.get('currentModel.skills.data');
      let events = vm.get('currentModel.events.data');

      if (!password) {
        alert("Password cannot be empty");
      }
      else if (password == confirmPassword) {
        record.set('staffid', staffId);
        record.set('firstname', firstname);
        record.set('lastname', lastname);
        record.set('username', username);
        record.set('password', password);
        record.set('position', position);
        record.set('email', email);
        record.set('mobile', mobile);
        record.set('skills', skills);
        record.set('events', events);

        vm.get('controller').transitionToRoute('users');

      }
      else {
        alert("Passwords do not match.");
      }
    },
    onSkillsTableDataChanged(settings) {
      let vm = this;
      let selectedItem = settings.selectedItems.get('firstObject');
      vm.set('currentModel.selectedSkill', selectedItem);
    },
    onEventsTableDataChanged(settings) {
      let vm = this;
      let selectedItem = settings.selectedItems.get('firstObject');
      vm.set('currentModel.selectedEvent', selectedItem);
    },
    addSkill() {
      let vm = this;
      let newSkill = vm.get('currentModel.newSkill')
      let record = vm.get('currentModel.userRecord');
      let skills = vm.get('currentModel.skills.data');
      skills.pushObject({title: newSkill});
      record.set('skills', skills);

      vm.set('currentModel.skills.data', skills);
    },
    deleteSkill() {
      let vm = this;
      let selectedSkill = vm.get('currentModel.selectedSkill');
      let record = vm.get('currentModel.userRecord');
      let skills = vm.get('currentModel.skills.data');
      skills.removeObject(selectedSkill);
      record.set('skills', skills);
      vm.set('currentModel.skills.data', skills);
    },
    addEvent() {
      let vm = this;
      let newEvent = vm.get('currentModel.newEvent')
      let record = vm.get('currentModel.userRecord');
      let events = vm.get('currentModel.events.data');
      events.pushObject({title: newEvent});
      record.set('events', events);
      vm.set('currentModel.events.data', events);
    },
    deleteEvent() {
      let vm = this;
      let selectedEvent = vm.get('currentModel.selectedEvent');
      let record = vm.get('currentModel.userRecord');
      let events = vm.get('currentModel.events.data');
      events.removeObject(selectedEvent);
      record.set('events', events);
      vm.set('currentModel.events.data', events);
    }
  }
});
