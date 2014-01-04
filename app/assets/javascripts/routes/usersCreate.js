App.UsersCreateRoute = App.UserCreateAndEditRoute.extend({
  model: function() {
    return Ember.Object.create({});
  },

  renderTemplate: function() {
    this.render("user.edit", {
      controller: "usersCreate"
    });
  }
});