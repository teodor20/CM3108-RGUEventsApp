import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  staffno: DS.attr(),
  firstname: DS.attr(),
  lastname: DS.attr(),
  username: DS.attr(),
  password: DS.attr(),
  position: DS.attr(),
  role: DS.attr(),
});
