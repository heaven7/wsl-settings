SimpleSchema.extendOptions({
  private: Match.Optional(Boolean),
  public: Match.Optional(Boolean),
  profile: Match.Optional(Boolean),
  hidden: Match.Optional(Boolean),
  shareable: Match.Optional(Boolean),
  watchable: Match.Optional(Boolean),
  editable: Match.Optional(Boolean),
  editableBy: Match.Optional([String]),
  publishedTo: Match.Optional([String]),
  required: Match.Optional(Boolean),
  template: Match.Optional(String)
});