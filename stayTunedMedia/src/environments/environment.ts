// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseconfig: {
    apiKey: "AIzaSyBz4hFX5gd0tTcgmhiP0vOGF-hm8pxM6GU",
    authDomain: "stay-tuned-media.firebaseapp.com",
    databaseURL: "https://stay-tuned-media.firebaseio.com",
    projectId: "stay-tuned-media",
    storageBucket: "stay-tuned-media.appspot.com",
    messagingSenderId: "732588943161"
  }
};
