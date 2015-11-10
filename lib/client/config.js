// Meteor.subscribe('settings');

/*******************
 * Packages Setup
 ******************/

Session.set("Mongol", {
    'collections': ['Tasks', 'TaskCategories', 'Projects', 'Items', 'Memberships'],
    'display': true,
    'opacity_normal': ".7",
    'opacity_expand': ".9",
    'disable_warning': 'false'
});