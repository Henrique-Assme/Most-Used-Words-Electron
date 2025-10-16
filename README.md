# Most Used Words (Electron)

Electron + Vue desktop app that parses `.srt` subtitle files and lists the most frequently used words in the script. Useful to explore vocabulary, analyse subtitles, or for quick linguistic insights.

## Features
- Batch-select `.srt` subtitle files to analyse in one go.
- Counts and orders the most frequent words found in the subtitles.
- Renderer built with Vue 3 + Vuetify for a responsive, desktop-friendly UI.
- Sample subtitle files (`subtitles_the_100/`) ready for experiments.

## Requirements
- Node.js 16 LTS or 18 LTS (Electron 13 and `@achrinza/node-ipc` do not support Node ≥ 20).  
  Use [`nvm`](https://github.com/nvm-sh/nvm) (Linux/macOS) or [`nvm-windows`](https://github.com/coreybutler/nvm-windows) to switch versions easily.
- npm (comes with Node) or Yarn.
- For Linux desktop builds, install system packages required by Electron Builder (e.g. `libgtk-3-dev`, `libnss3`, `libasound2` and friends—see the [Electron Builder docs](https://www.electron.build/multi-platform-build#linux) for distro-specific commands).

## Getting Started
```bash
git clone https://github.com/<seu-usuario>/Most-Used-Words-Electron.git
cd Most-Used-Words-Electron
npm install
```

### Run in Development
```bash
npm run electron:serve
```

- **Windows:** execute via PowerShell/Git Bash with Node 16/18.  
- **Linux:** same command; if you are on WSL, make sure WSLg is enabled or export `DISPLAY` to an X server before launching so the Electron window can appear.  
- The Vue dev server remains on `http://localhost:8080`; Electron auto-reloads when source files change.

## Build Desktop Packages
```bash
npm run electron:build
```
Electron Builder generates installers under `dist_electron/`.  
- Run this command on the target OS to produce native artifacts (Windows `.exe`, Linux `.AppImage`/`.deb`, macOS `.dmg`).  
- For cross-platform builds from Linux, install Wine/Mono to create Windows installers or use Docker images like `electronuserland/builder`.

## Troubleshooting
- **`@achrinza/node-ipc` EBADENGINE:** switch to Node 16 or 18 and reinstall dependencies (`rm -rf node_modules package-lock.json && npm install`).  
- **GUI does not launch on Linux/WSL:** ensure a display server is available (WSLg, XQuartz, VcXsrv, etc.) and that `DISPLAY`/`WAYLAND_DISPLAY` environment variables are set.
