Package.describe({
  name: 'heaven7:wsl-settings',
  version: '0.0.1',
  summary: 'Settings package',
  git: 'https://github.com/heaven7/wsl-settings.git',
  documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');

    api.use(['heaven7:wsl-core@0.0.1'], both);
    api.imply(['heaven7:wsl-core']);

    api.addFiles([
        'lib/both/settings.js',
        'lib/both/schemas.js',
        'lib/both/config.js',
        'lib/both/router.js'
    ], both);

    api.addFiles([
        'lib/client/templates.html',
        'lib/client/templates.js',
        'lib/client/config.js'
    ], 'client');

    api.addFiles([
        'lib/server/publish.js'
    ], 'server');

    api.export('Settings', both);
});
