if (Meteor.isServer) {
  Meteor.startup(function() {
    ServiceConfiguration.configurations.update(
      { service: "facebook" },
      { $set: {
        appId: Meteor.settings.facebook.appId,
        secret: Meteor.settings.facebook.secret
      }
      },
      { upsert: true }
    );
  });

  Accounts.onCreateUser(function(options, user) {
    if (user.services.facebook) {
      if (options.profile) {
        options.profile.picture = "http://graph.facebook.com/" +
        user.services.facebook.id + "/picture/?type=large";
        user.profile = options.profile;
      }
    }
    Meteor.defer(function() {
      if (user.services.facebook &&
          user.services.facebook.id === "10205617161449131") {
        Roles.addUsersToRoles(user._id, "admin");
      }
    });
    return user;
  });
}
