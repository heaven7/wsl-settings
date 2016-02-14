Meteor.startup(function() {
    process.env.MAIL_URL = process.env.MAIL_URL ? process.env.MAIL_URL : Meteor.settings.mail_url

    // Accounts
    if(Package['Accounts']) {
	    Accounts.emailTemplates.from = Meteor.settings.noreply
	    Accounts.emailTemplates.sitename = Meteor.settings.app_name
    }
})