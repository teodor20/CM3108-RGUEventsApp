import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    "name": DS.attr(),
    "event-id": DS.attr(),
    "task-owner": DS.attr(),
    "task-status": DS.attr()
});
