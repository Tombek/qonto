import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('http://private-5d708-interviewfront.apiary-mock.com/transactions');
  }
});
