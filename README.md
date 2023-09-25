# Board Game Toolbox Plugin Template

Altered from [vite's react-ts template](https://stackblitz.com/edit/vitejs-vite-orp9e9?file=index.html&terminal=dev)

## Main Changes

### Add required files

Add `manifest.json` and `icon.png` in the root dir.

### Use relative path in `index.html`

`board-game-toolbox` use `react-native-webview` to load plugins, according to its file lookup logic, links in `index.html` should be relative path like `./xxx` instead of `/xxx`.
