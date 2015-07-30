/**
 * Settings schema
 * @type {SimpleSchema} Schemas.Settings
 */

Schemas.Settings = new SimpleSchema({

  validFrom: {
    type: Date,
    optional: true
  },

  validTo: {
    type: Date,
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

});

Settings.attachSchema(Schemas.Base);
Settings.attachSchema(Schemas.Settings);
