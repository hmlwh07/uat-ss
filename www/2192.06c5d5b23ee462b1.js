"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2192],{92192:(ut,ae,f)=>{f.r(ae);var a=f(8239),Q=f(36293),J=f(41177),b=f(64763),l=f(24213),ce=(f(8094),f(51572));const Y="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",z="FCM_MSG";var h=(()=>{return(e=h||(h={}))[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",h;var e})(),y=(()=>{return(e=y||(y={})).PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked",y;var e})();function p(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function fe(e){const n=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(n),o=new Uint8Array(i.length);for(let r=0;r<i.length;++r)o[r]=i.charCodeAt(r);return o}const _="fcm_token_details_db",X="fcm_token_object_Store";function he(e){return w.apply(this,arguments)}function w(){return w=(0,a.Z)(function*(e){if("databases"in indexedDB&&!(yield indexedDB.databases()).map(r=>r.name).includes(_))return null;let t=null;return(yield(0,l.X3)(_,5,function(){var i=(0,a.Z)(function*(o,r,c,d){var q;if(r<2||!o.objectStoreNames.contains(X))return;const se=d.objectStore(X),m=yield se.index("fcmSenderId").get(e);if(yield se.clear(),m)if(2===r){const s=m;if(!s.auth||!s.p256dh||!s.endpoint)return;t={token:s.fcmToken,createTime:null!==(q=s.createTime)&&void 0!==q?q:Date.now(),subscriptionOptions:{auth:s.auth,p256dh:s.p256dh,endpoint:s.endpoint,swScope:s.swScope,vapidKey:"string"==typeof s.vapidKey?s.vapidKey:p(s.vapidKey)}}}else if(3===r){const s=m;t={token:s.fcmToken,createTime:s.createTime,subscriptionOptions:{auth:p(s.auth),p256dh:p(s.p256dh),endpoint:s.endpoint,swScope:s.swScope,vapidKey:p(s.vapidKey)}}}else if(4===r){const s=m;t={token:s.fcmToken,createTime:s.createTime,subscriptionOptions:{auth:p(s.auth),p256dh:p(s.p256dh),endpoint:s.endpoint,swScope:s.swScope,vapidKey:p(s.vapidKey)}}}});return function(o,r,c,d){return i.apply(this,arguments)}}())).close(),yield(0,l.Lj)(_),yield(0,l.Lj)("fcm_vapid_details_db"),yield(0,l.Lj)("undefined"),ye(t)?t:null}),w.apply(this,arguments)}function ye(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}const g="firebase-messaging-store";let v=null;function k(){return v||(v=(0,l.X3)("firebase-messaging-database",1,(e,t)=>{0===t&&e.createObjectStore(g)})),v}function S(e){return T.apply(this,arguments)}function T(){return(T=(0,a.Z)(function*(e){const t=M(e),i=yield(yield k()).transaction(g).objectStore(g).get(t);if(i)return i;{const o=yield he(e.appConfig.senderId);if(o)return yield I(e,o),o}})).apply(this,arguments)}function I(e,t){return E.apply(this,arguments)}function E(){return(E=(0,a.Z)(function*(e,t){const n=M(e),o=(yield k()).transaction(g,"readwrite");return yield o.objectStore(g).put(t,n),yield o.complete,t})).apply(this,arguments)}function _e(e){return A.apply(this,arguments)}function A(){return(A=(0,a.Z)(function*(e){const t=M(e),i=(yield k()).transaction(g,"readwrite");yield i.objectStore(g).delete(t),yield i.complete})).apply(this,arguments)}function M({appConfig:e}){return e.appId}const u=new l.LL("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});function ve(e,t){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(function*(e,t){const n=yield N(e),i=te(t),o={method:"POST",headers:n,body:JSON.stringify(i)};let r;try{r=yield(yield fetch(C(e.appConfig),o)).json()}catch(c){throw u.create("token-subscribe-failed",{errorInfo:c})}if(r.error)throw u.create("token-subscribe-failed",{errorInfo:r.error.message});if(!r.token)throw u.create("token-subscribe-no-token");return r.token})).apply(this,arguments)}function ke(e,t){return O.apply(this,arguments)}function O(){return(O=(0,a.Z)(function*(e,t){const n=yield N(e),i=te(t.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(i)};let r;try{r=yield(yield fetch(`${C(e.appConfig)}/${t.token}`,o)).json()}catch(c){throw u.create("token-update-failed",{errorInfo:c})}if(r.error)throw u.create("token-update-failed",{errorInfo:r.error.message});if(!r.token)throw u.create("token-update-no-token");return r.token})).apply(this,arguments)}function ee(e,t){return D.apply(this,arguments)}function D(){return(D=(0,a.Z)(function*(e,t){const i={method:"DELETE",headers:yield N(e)};try{const r=yield(yield fetch(`${C(e.appConfig)}/${t}`,i)).json();if(r.error)throw u.create("token-unsubscribe-failed",{errorInfo:r.error.message})}catch(o){throw u.create("token-unsubscribe-failed",{errorInfo:o})}})).apply(this,arguments)}function C({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}function N(e){return P.apply(this,arguments)}function P(){return(P=(0,a.Z)(function*({appConfig:e,installations:t}){const n=yield t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})})).apply(this,arguments)}function te({p256dh:e,auth:t,endpoint:n,vapidKey:i}){const o={web:{endpoint:n,auth:t,p256dh:e}};return i!==Y&&(o.web.applicationPubKey=i),o}const Se=6048e5;function Te(e){return L.apply(this,arguments)}function L(){return(L=(0,a.Z)(function*(e){const t=yield Ee(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:p(t.getKey("auth")),p256dh:p(t.getKey("p256dh"))},i=yield S(e.firebaseDependencies);if(i){if(Ae(i.subscriptionOptions,n))return Date.now()>=i.createTime+Se?Ie(e,{token:i.token,createTime:Date.now(),subscriptionOptions:n}):i.token;try{yield ee(e.firebaseDependencies,i.token)}catch(o){console.warn(o)}return ne(e.firebaseDependencies,n)}return ne(e.firebaseDependencies,n)})).apply(this,arguments)}function K(e){return j.apply(this,arguments)}function j(){return(j=(0,a.Z)(function*(e){const t=yield S(e.firebaseDependencies);t&&(yield ee(e.firebaseDependencies,t.token),yield _e(e.firebaseDependencies));const n=yield e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()})).apply(this,arguments)}function Ie(e,t){return B.apply(this,arguments)}function B(){return(B=(0,a.Z)(function*(e,t){try{const n=yield ke(e.firebaseDependencies,t),i=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return yield I(e.firebaseDependencies,i),n}catch(n){throw yield K(e),n}})).apply(this,arguments)}function ne(e,t){return R.apply(this,arguments)}function R(){return(R=(0,a.Z)(function*(e,t){const i={token:yield ve(e,t),createTime:Date.now(),subscriptionOptions:t};return yield I(e,i),i.token})).apply(this,arguments)}function Ee(e,t){return F.apply(this,arguments)}function F(){return(F=(0,a.Z)(function*(e,t){return(yield e.pushManager.getSubscription())||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:fe(t)})})).apply(this,arguments)}function Ae(e,t){return t.vapidKey===e.vapidKey&&t.endpoint===e.endpoint&&t.auth===e.auth&&t.p256dh===e.p256dh}function Me(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const i=t.notification.body;i&&(e.notification.body=i);const o=t.notification.image;o&&(e.notification.image=o)}(t,e),function(e,t){!t.data||(e.data=t.data)}(t,e),function(e,t){if(!t.fcmOptions)return;e.fcmOptions={};const n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);const i=t.fcmOptions.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}(t,e),t}function Ne(e){return new Promise(t=>{setTimeout(t,e)})}function Pe(e,t){return Z.apply(this,arguments)}function Z(){return(Z=(0,a.Z)(function*(e,t){const n=Le(t,yield e.firebaseDependencies.installations.getId());Ke(e,n)})).apply(this,arguments)}function Le(e,t){var n,i;const o={};return e.from&&(o.project_number=e.from),e.fcmMessageId&&(o.message_id=e.fcmMessageId),o.instance_id=t,o.message_type=e.notification?h.DISPLAY_NOTIFICATION.toString():h.DATA_MESSAGE.toString(),o.sdk_platform=3..toString(),o.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),e.collapse_key&&(o.collapse_key=e.collapse_key),o.event=1..toString(),(null===(n=e.fcmOptions)||void 0===n?void 0:n.analytics_label)&&(o.analytics_label=null===(i=e.fcmOptions)||void 0===i?void 0:i.analytics_label),o}function Ke(e,t){const n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify(t),e.logEvents.push(n)}function ie(e,t){const n=[];for(let i=0;i<e.length;i++)n.push(e.charAt(i)),i<t.length&&n.push(t.charAt(i));return n.join("")}function W(){return(W=(0,a.Z)(function*(e,t){var n,i;const{newSubscription:o}=e;if(!o)return void(yield K(t));const r=yield S(t.firebaseDependencies);yield K(t),t.vapidKey=null!==(i=null===(n=null==r?void 0:r.subscriptionOptions)||void 0===n?void 0:n.vapidKey)&&void 0!==i?i:Y,yield Te(t)})).apply(this,arguments)}function U(){return(U=(0,a.Z)(function*(e,t){const n=Ze(e);if(!n)return;t.deliveryMetricsExportedToBigQueryEnabled&&(yield Pe(t,n));const i=yield oe();if(Ue(i))return Ge(i,n);if(n.notification&&(yield He(Fe(n))),t&&t.onBackgroundMessageHandler){const o=Me(n);"function"==typeof t.onBackgroundMessageHandler?yield t.onBackgroundMessageHandler(o):t.onBackgroundMessageHandler.next(o)}})).apply(this,arguments)}function G(){return(G=(0,a.Z)(function*(e){var t,n;const i=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n[z];if(!i)return;if(e.action)return;e.stopImmediatePropagation(),e.notification.close();const o=$e(i);if(!o)return;const r=new URL(o,self.location.href),c=new URL(self.location.origin);if(r.host!==c.host)return;let d=yield We(r);return d?d=yield d.focus():(d=yield self.clients.openWindow(o),yield Ne(3e3)),d?(i.messageType=y.NOTIFICATION_CLICKED,i.isFirebaseMessaging=!0,d.postMessage(i)):void 0})).apply(this,arguments)}function Fe(e){const t=Object.assign({},e.notification);return t.data={[z]:e},t}function Ze({data:e}){if(!e)return null;try{return e.json()}catch(t){return null}}function We(e){return H.apply(this,arguments)}function H(){return(H=(0,a.Z)(function*(e){const t=yield oe();for(const n of t){const i=new URL(n.url,self.location.href);if(e.host===i.host)return n}return null})).apply(this,arguments)}function Ue(e){return e.some(t=>"visible"===t.visibilityState&&!t.url.startsWith("chrome-extension://"))}function Ge(e,t){t.isFirebaseMessaging=!0,t.messageType=y.PUSH_RECEIVED;for(const n of e)n.postMessage(t)}function oe(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function He(e){var t;const{actions:n}=e,{maxActions:i}=Notification;return n&&i&&n.length>i&&console.warn(`This browser only supports ${i} actions. The remaining actions will not be displayed.`),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}function $e(e){var t,n,i;return(null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(i=e.notification)||void 0===i?void 0:i.click_action)||(function(e){return"object"==typeof e&&!!e&&"google.c.a.c_id"in e}(e.data)?self.location.origin:null)}function $(e){return u.create("missing-app-config-values",{valueName:e})}ie("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),ie("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");class qe{constructor(t,n,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=function(e){if(!e||!e.options)throw $("App Configuration Object");if(!e.name)throw $("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const i of t)if(!n[i])throw $(i);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}(t);this.firebaseDependencies={app:t,appConfig:o,installations:n,analyticsProvider:i}}_delete(){return Promise.resolve()}}(0,ce._registerComponent)(new J.wA("messaging-sw",e=>{const t=new qe(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",n=>{n.waitUntil(function(e,t){return U.apply(this,arguments)}(n,t))}),self.addEventListener("pushsubscriptionchange",n=>{n.waitUntil(function(e,t){return W.apply(this,arguments)}(n,t))}),self.addEventListener("notificationclick",n=>{n.waitUntil(function(e){return G.apply(this,arguments)}(n))}),t},"PUBLIC"));class re{constructor(t,n){this.app=t,this._delegate=n,this.app=t,this._delegate=n}getToken(t){var n=this;return(0,a.Z)(function*(){return(0,b.LP)(n._delegate,t)})()}deleteToken(){var t=this;return(0,a.Z)(function*(){return(0,b.pQ)(t._delegate)})()}onMessage(t){return(0,b.ps)(this._delegate,t)}onBackgroundMessage(t){return function(e,t){return function(e,t){if(void 0!==self.document)throw u.create("only-available-in-sw");return e.onBackgroundMessageHandler=t,()=>{e.onBackgroundMessageHandler=null}}(e=(0,l.m9)(e),t)}(this._delegate,t)}}const at={isSupported:function(){return self&&"ServiceWorkerGlobalScope"in self?(0,l.hl)()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"undefined"!=typeof window&&(0,l.hl)()&&(0,l.zI)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}};Q.Z.INTERNAL.registerComponent(new J.wA("messaging-compat",e=>self&&"ServiceWorkerGlobalScope"in self?new re(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging-sw").getImmediate()):new re(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging").getImmediate()),"PUBLIC").setServiceProps(at)),Q.Z.registerVersion("@firebase/messaging-compat","0.1.12")}}]);