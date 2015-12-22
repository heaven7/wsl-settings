/**
 * Settings schema
 * @type {SimpleSchema} Schemas.Settings
 */

Schemas.Settings = new SimpleSchema([Schemas.Base, {

  title: {
      type: String,
      optional: true
  },

  defaultValue: {
      type: String,
      optional: true
  },

  validFrom: {
    type: Date,
    optional: true
  },

  validTo: {
    type: Date,
    optional: true
  },

  public: {
    type: Boolean,
    optional: true
  },

  watchable: {
    type: Boolean,
    optional: true
  },

  shareable: {
    type: Boolean,
    optional: true
  },

  commentable: {
    type: Boolean,
    optional: true
  }

}]);

/**
 * Attach schema
 */

Meteor.startup(function() {
    Schemas.Settings.i18n("schemas.settings");
    Settings.attachSchema(Schemas.Settings);
});
