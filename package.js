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
    api.addFiles('wsl-settings.js');
});
