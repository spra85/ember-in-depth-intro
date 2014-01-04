App.User = DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  bio: DS.attr(),
  avatarUrl: DS.attr(),
  creationDate: DS.attr()
});