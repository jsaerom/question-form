import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        answer: this.get('answer'),
        name: this.get('name'),
        timestamp: moment().format('LL h:mm:ss a'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
      this.set('answer', '');
      this.set('name', '');
    }
  }
});
