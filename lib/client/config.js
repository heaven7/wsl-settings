Meteor.subscribe('settings');

/*******************
 * Packages Setup
 ******************/

Session.set("Mongol", {
    'collections': ['Meteor.roles', 'Tasks', 'TaskCategories', 'Projects', 'Items', 'Memberships', 'Settings', 'Images'],
    'display': true,
    'opacity_normal': ".7",
    'opacity_expand': ".9",
    'disable_warning': 'false'
});