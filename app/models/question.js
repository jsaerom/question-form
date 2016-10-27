import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr('string'),
  author: DS.attr('string'),
  details: DS.attr('string'),
  timestamp: DS.attr('date')
});
