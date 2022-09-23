// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//LOCAL
// export const environment = {
//   production: false,
//   appVersion: 'v717demo1',
//   USERDATA_KEY: 'authf649fc9a5f55',
//   isMockEnabled: false,
//   apiUrl: 'http://10.243.0.113:8090/api/v1', 
//   firebaseConfig: {
//     apiKey: "AIzaSyA83H8v2hiBokOT3lk_YfktW20GRPp-UqM",
//     authDomain: "digitalfe-uat.firebaseapp.com",
//     projectId: "digitalfe-uat",
//     storageBucket: "digitalfe-uat.appspot.com",
//     messagingSenderId: "210382068330",
//     appId: "1:210382068330:web:930c7c1ac9570df92bc813",
//     measurementId: "G-E16237EJL2",
//     serverKey: "AAAAMPu_mmo:APA91bEaAJFOiw2fiyMjR2bSVq4102vApYMwtupFltwO-6n-R4EawL92q27OQyWHl9eSOpNjfb0q-BaZA6V1xWAMGojYfzCtRB-ZfxIHSbYZinMA3HV2fNgqWXtAKoZkV5cuJe0KhQdB"
//   }
// };



//Testing
export const environment = {
  production: false,
  appVersion: 'v717demo1',
  USERDATA_KEY: 'authf649fc9a5f55',
  isMockEnabled: false,
  secureKey:'Blu3$t0ne',
  apiUrl: 'http://104.248.152.205:8083/sale/api/v1', 
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

//UAT
// export const environment = {
//   production: false,
//   appVersion: 'v717demo1',
//   USERDATA_KEY: 'authf649fc9a5f55',
//   isMockEnabled: false,
//   // apiUrl: 'http://54.251.196.83:8083/sale/api/v1',
//   // apiUrl: 'http://104.248.152.205:8083/sale/api/v1',
//    apiUrl: 'https://producersalesuat.kbzms.com/sale/api/v1',
//   firebaseConfig: {
//     apiKey: "AIzaSyA83H8v2hiBokOT3lk_YfktW20GRPp-UqM",
//     authDomain: "digitalfe-uat.firebaseapp.com",
//     projectId: "digitalfe-uat",
//     storageBucket: "digitalfe-uat.appspot.com",
//     messagingSenderId: "210382068330",
//     appId: "1:210382068330:web:930c7c1ac9570df92bc813",
//     measurementId: "G-E16237EJL2",
//     serverKey: "AAAAMPu_mmo:APA91bEaAJFOiw2fiyMjR2bSVq4102vApYMwtupFltwO-6n-R4EawL92q27OQyWHl9eSOpNjfb0q-BaZA6V1xWAMGojYfzCtRB-ZfxIHSbYZinMA3HV2fNgqWXtAKoZkV5cuJe0KhQdB"
//   }

// };

//Pre-Production
// export const environment = {
//   production: false,
//   appVersion: 'v717demo1',
//   USERDATA_KEY: 'authf649fc9a5f55',
//   isMockEnabled: false,
//   apiUrl: 'http://54.179.23.36:8083/sale/api/v1',
//   firebaseConfig: {
//     apiKey: "AIzaSyCCfS97dyHL4eg1kTRMccxpEPzc3EIjQBE",
//     authDomain: "kbzms-preprod.firebaseapp.com",
//     projectId: "kbzms-preprod",
//     storageBucket: "kbzms-preprod.appspot.com",
//     messagingSenderId: "905070136071",
//     appId: "1:905070136071:web:008fb57112495ea676d3a2",
//     measurementId: "G-BCJWF0DB5W",
//     serverKey: "AAAA0rpiSwc:APA91bFsb-tjVv3tzEIn0pHkYtTe1vHknAV979MoIczFYymm1qYBmX32p-AWvuS03ZgRSfF4h0MBbQlDzTnxEitGR7o5vpmUMmZIe-qhCZVbToNaBsq7VWTjxB0JqEKLFKeDikgSfnVo"
//   }
// };


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