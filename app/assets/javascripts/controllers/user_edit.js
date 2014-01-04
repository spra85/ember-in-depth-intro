App.UserEditController = Ember.ObjectController.extend({
  needs: ['user'],

  actions: {
    save: function() {
      var user = this.get("model");

      user.save();
      this.transitionToRoute("user", user);
    }
  }
});
