// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //Configuración de FB en el proyecto.
  firebase: {
    apiKey: "AIzaSyDl8qwZFy0VAVz8o5IjiYLw6GN2gOoaJc0",
    authDomain: "angularfb-16b9a.firebaseapp.com",
    databaseURL: "https://angularfb-16b9a.firebaseio.com",
    projectId: "angularfb-16b9a",
    storageBucket: "angularfb-16b9a.appspot.com",
    messagingSenderId: "530727095696",
    appId: "1:530727095696:web:d0332d3b8780bbef95f715",
    measurementId: "G-TJSCX1ND73"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
