import {app, BrowserWindow, ipcMain} from "electron";

function createWindow() {
    const win = new BrowserWindow({
        autoHideMenuBar: false,
        resizable: false,
        fullscreen: true,
        closable: true,
        titleBarOverlay: true,
        webPreferences: {
            devTools: true,
        }
    });
    win.loadFile('dist/index.html');
}

export function QuitApp() {
    app.quit();
}

app.whenReady().then( () => {
    createWindow();
});

ipcMain.on('Exit', () => app.quit());