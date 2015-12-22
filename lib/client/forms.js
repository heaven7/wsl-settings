Template.settingsForm.onCreated(function() {
    this.doc = new ReactiveVar();
    this.docType = new ReactiveVar();
});

Template.settingsForm.onRendered(function() {
    this.doc.set(this.data.doc);
    this.docType.set(this.data.docType);
});

Template.settingsForm.helpers({
    doc: function() {
        return Template.instance().doc.get();
    },
    docType: function() {
        return Template.instance().docType.get();
    },
    settings: function() {
        var setting = Settings.findOne({doc: Template.instance().doc.get(), docType: Template.instance().docType.get()});
        return setting;
    }
});