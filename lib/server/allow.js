Settings.allow({
    insert: function(userId, doc) {
        //console.log('settings allow', doc.owners.indexOf(userId));
        if (doc.owners.indexOf(userId) > -1) {
            return true;
        }
    },
    update: function(userId, doc, fields, modifier) {
        if (doc.owners.indexOf(userId) > -1) {
            return true;
        }
    },
    remove: function(userId, doc) {
        if (doc.owners.indexOf(userId) > -1) {
            return true;
        }
    }
});