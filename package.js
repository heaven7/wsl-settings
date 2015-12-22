Package.describe({
  name: 'heaven7:wsl-settings',
  version: '0.0.2',
  summary: 'Settings package',
  git: 'https://github.com/heaven7/wsl-settings.git',
  documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
    api.versionsFrom('1.2');

    api.use(['heaven7:wsl-core@0.0.2'], both);
    api.imply(['heaven7:wsl-core']);

    api.addFiles([
        'lib/both/settings.js',
        'lib/both/schemas.js',
        'lib/both/config.js',
        'lib/both/router.js'
    ], both);

    api.addFiles([
        'lib/client/forms.html',
        'lib/client/forms.js',
        'lib/client/templates.html',
        'lib/client/templates.js',
        'lib/client/config.js',
        'lib/client/hooks.js'
    ], 'client');

    api.addFiles([
        'lib/server/startup.js',
        'lib/server/publish.js',
        'lib/server/allow.js'
    ], 'server');

    api.export('Settings', both);
});
