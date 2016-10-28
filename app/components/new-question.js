import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addQuestion: false,
  actions: {
    displayForm(){
      this.set('addQuestion', true);
    },
    save(){
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        details: this.get('details'),
        timestamp: moment().format('LL')
      };
      this.sendAction('saveQuestion', params);
      this.set('question', '');
      this.set('author', '');
      this.set('details', '');
    }
  }
});
