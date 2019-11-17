import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  staffid: DS.attr(),
  firstname: DS.attr(),
  lastname: DS.attr(),
  username: DS.attr(),
  password: DS.attr(),
  position: DS.attr(),
  role: DS.attr(),
  gender: DS.attr(),
  email: DS.attr(),
  mobile: DS.attr(),
  skills: DS.attr(),
  events: DS.attr()
});
