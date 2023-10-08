# Board Game Toolbox Plugin Template

Plugin template for board-game-toolbox.

Altered from [vite's react-ts template](https://stackblitz.com/edit/vitejs-vite-orp9e9?file=index.html&terminal=dev).

## Quick Start

### Upload Plugin

Uploading plugin is just as publishing a npm package.

After publishing, you can load `https://registry.npmjs.org/${your-project-name}` to see the metadata.

### Downloading Plugin

The `board-game-toolbox` always use the latest version package.

For example, `dist.tarball` in `https://registry.npmjs.org/@board-game-toolbox/plugin-template/latest` will be downloaded for this template plugin.

## Main Changes

### Add required files

Add `manifest.json` and `icon.png` in the root dir.

### Use relative path in `index.html`

`board-game-toolbox` use `react-native-webview` to load plugins, according to its file lookup logic, links in `index.html` should be relative path like `./xxx` instead of `/xxx`.
