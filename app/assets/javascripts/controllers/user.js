App.UserController = Ember.ObjectController.extend({
  deleteMode: false,

  actions: {

    edit: function() {
      return this.transitionToRoute("user.edit");
    },

    delete: function() {
      this.set("deleteMode", true);
    },

    confirmDelete: function() {
      var user = this.get("model");
      user.deleteRecord();
      user.save();

      this.transitionToRoute("users");
      this.set("deleteMode", false);
    },

    cancelDelete: function() {
      this.set("deleteMode", false);

    }
  }
});