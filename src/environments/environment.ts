// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appVersion: 'v717demo1',
  USERDATA_KEY: 'authf649fc9a5f55',
  isMockEnabled: false,
  // apiUrl: 'http://54.251.196.83:8083/sale/api/v1',
  apiUrl: 'http://104.248.152.205:8083/sale/api/v1',
  //  apiUrl: 'https://producersalesuat.kbzms.com/sale/api/v1',
  firebaseConfig: {
    apiKey: "AIzaSyA83H8v2hiBokOT3lk_YfktW20GRPp-UqM",
    authDomain: "digitalfe-uat.firebaseapp.com",
    projectId: "digitalfe-uat",
    storageBucket: "digitalfe-uat.appspot.com",
    messagingSenderId: "210382068330",
    appId: "1:210382068330:web:930c7c1ac9570df92bc813",
    measurementId: "G-E16237EJL2",
    serverKey: "AAAAMPu_mmo:APA91bEaAJFOiw2fiyMjR2bSVq4102vApYMwtupFltwO-6n-R4EawL92q27OQyWHl9eSOpNjfb0q-BaZA6V1xWAMGojYfzCtRB-ZfxIHSbYZinMA3HV2fNgqWXtAKoZkV5cuJe0KhQdB"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 * LD-20220303-0004691
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//cd dist
//jar -cvf bss-kbzms-sale-portal.war *