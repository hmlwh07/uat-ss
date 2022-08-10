importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
// importScripts('localforage/dist/localforage.js');
// import * as localForage from "localforage";
importScripts("https://cdnjs.cloudflare.com/ajax/libs/localforage/1.9.0/localforage.min.js");
firebase.initializeApp({
  apiKey: "AIzaSyCCfS97dyHL4eg1kTRMccxpEPzc3EIjQBE",
    authDomain: "kbzms-preprod.firebaseapp.com",
    projectId: "kbzms-preprod",
    storageBucket: "kbzms-preprod.appspot.com",
    messagingSenderId: "905070136071",
    appId: "1:905070136071:web:008fb57112495ea676d3a2",
    measurementId: "G-BCJWF0DB5W",
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
  localforage.getItem('notiCount_E16237EJL2').then(async (res) => {
    let count = res ? parseInt(res) : 0
    count += 1
    await localforage.setItem('notiCount_E16237EJL2', count + '')
  })
  // localforage.setItem('notiCount', '1').then(async () => {
  //   const value = await localforage.getItem('notiCount');
  //   console.log(value);
  // })
  // let notiCount = parseInt(localStorage.getItem("NOTI_KBZ")) + 1
  // window.localStorage.setItem("NOTI_KBZ", notiCount + "")
});