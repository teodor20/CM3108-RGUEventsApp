import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    name: DS.attr(),
    event_id: DS.attr(),
    task_owner: DS.attr(),
    task_status: DS.attr()
});
