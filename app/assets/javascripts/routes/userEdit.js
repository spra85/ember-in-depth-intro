App.UserEditRoute = App.UserCreateAndEditRoute.extend({
  model: function() {
    return this.modelFor("user");
  }
});