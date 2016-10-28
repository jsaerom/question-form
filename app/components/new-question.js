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
        title: this.get('title'),
        author: this.get('author'),
        details: this.get('details'),
        timestamp: moment().format('LL h:mm:ss a'),
      };
      this.sendAction('saveQuestion', params);
      this.set('addQuestion', false);
      this.set('question', '');
      this.set('author', '');
      this.set('details', '');
    }
  }
});
