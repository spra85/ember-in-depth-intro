App.UsersCreateController = Ember.ObjectController.extend({
  needs: ['user'],

  actions: {
    save: function() {
      var user = this.get("model");
      user.set("creationDate", new Date());

      var newUser = this.store.createRecord("user", user);
      newUser.save();

      this.transitionToRoute("user", newUser);
    }
  }
});