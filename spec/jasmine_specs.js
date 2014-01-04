describe("App.User", function() {
  it("displays the user info", function() {
    visit("/users");
    click("a:contains('John David')");
    andThen(function(){
      expect(find("address:contains('john@david.com')").length).toEqual(1);
    });
  });

  it("visits a user's page", function() {
    visit("/users/1");
    andThen(function(){
      expect(find("address:contains('bob@sponge.com')").length).toEqual(1);
    });
  });
});