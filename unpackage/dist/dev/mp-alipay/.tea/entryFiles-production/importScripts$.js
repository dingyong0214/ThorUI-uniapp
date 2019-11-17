if(!self.Map || !self.Set) {
    importScripts('https://gw.alipayobjects.com/as/g/appx_release/deps/1.0.0/es6-set-map.js');
     }
     importScripts(`https://appx/af-appx.worker.min.js`);

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}
