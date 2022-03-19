importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
// importScripts('localforage/dist/localforage.js');
// import * as localForage from "localforage";
importScripts("https://cdnjs.cloudflare.com/ajax/libs/localforage/1.9.0/localforage.min.js");
firebase.initializeApp({
  apiKey: "AIzaSyA83H8v2hiBokOT3lk_YfktW20GRPp-UqM",
  authDomain: "digitalfe-uat.firebaseapp.com",
  projectId: "digitalfe-uat",
  storageBucket: "digitalfe-uat.appspot.com",
  messagingSenderId: "210382068330",
  appId: "1:210382068330:web:930c7c1ac9570df92bc813",
  measurementId: "G-E16237EJL2"
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
  localforage.getItem('notiCount_210382068330').then(async (res) => {
    let count = res ? parseInt(res) : 0
    count += 1
    await localforage.setItem('notiCount_210382068330', count + '')
  })
  // localforage.setItem('notiCount', '1').then(async () => {
  //   const value = await localforage.getItem('notiCount');
  //   console.log(value);
  // })
  // let notiCount = parseInt(localStorage.getItem("NOTI_KBZ")) + 1
  // window.localStorage.setItem("NOTI_KBZ", notiCount + "")
});