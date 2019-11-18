import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  description: DS.attr(),
  users: DS.attr()
});
