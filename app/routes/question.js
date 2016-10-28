import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    delete(params){
      if(confirm('Do you really want to delete this question?')){
        params.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});
