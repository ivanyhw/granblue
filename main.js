'use strict';

import electron from 'electron';

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

let createWindow = () => {

    mainWindow = new BrowserWindow({
        'width': 750,
        'height': 568
    });
    
    let session = mainWindow.webContents.session;
    
    // set iphone UA
    session.webRequest.onBeforeSendHeaders(function(details, callback) {
        details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X; en-us) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53';
        callback({cancel: false, requestHeaders: details.requestHeaders});
    });
    
    //set Proxy
    
    /*
    session.setProxy({
        //proxyRules: 'socks5://127.0.0.1:1080'
        proxyRules: 'http=127.0.0.1:6152;https=127.0.0.1:6152'
    }, () => {
        mainWindow.loadURL('file://' + __dirname + '/index.html');
    });
    */
   
    //mainWindow.loadURL('file://' + __dirname + '/index2.html');
    
    mainWindow.setResizable(false);
    mainWindow.loadURL('http://localhost:3000');

    mainWindow.webContents.openDevTools();

};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});