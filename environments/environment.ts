// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const firebaseConfig ={//paso#1 traer conexion de firebase
  apiKey: "AIzaSyCkilod4T_DjebnzRVRpKcgzbGBfEjfnf4",
  authDomain: "evento-24d71.firebaseapp.com",
  databaseURL: "https://evento-24d71.firebaseio.com",
  projectId: "evento-24d71",
  storageBucket: "evento-24d71.appspot.com",
  messagingSenderId: "599752895005",
  appId: "1:599752895005:web:7f59c08f40a241ab5af4f4"
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
