"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{67160:(A,E,n)=>{n.d(E,{c:()=>m});var a=n(32361),f=n(87683),r=n(33139);const m=(u,c)=>{let e,t;const o=(l,g,p)=>{if("undefined"==typeof document)return;const v=document.elementFromPoint(l,g);v&&c(v)?v!==e&&(i(),s(v,p)):i()},s=(l,g)=>{e=l,t||(t=e);const p=e;(0,a.c)(()=>p.classList.add("ion-activated")),g()},i=(l=!1)=>{if(!e)return;const g=e;(0,a.c)(()=>g.classList.remove("ion-activated")),l&&t!==e&&e.click(),e=void 0};return(0,r.createGesture)({el:u,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>o(l.currentX,l.currentY,f.a),onMove:l=>o(l.currentX,l.currentY,f.b),onEnd:()=>{i(!0),(0,f.h)(),t=void 0}})}},88685:(A,E,n)=>{n.d(E,{g:()=>a});const a=(c,e,t,o,s)=>r(c[1],e[1],t[1],o[1],s).map(i=>f(c[0],e[0],t[0],o[0],i)),f=(c,e,t,o,s)=>s*(3*e*Math.pow(s-1,2)+s*(-3*t*s+3*t+o*s))-c*Math.pow(s-1,3),r=(c,e,t,o,s)=>u((o-=s)-3*(t-=s)+3*(e-=s)-(c-=s),3*t-6*e+3*c,3*e-3*c,c).filter(l=>l>=0&&l<=1),u=(c,e,t,o)=>{if(0===c)return((c,e,t)=>{const o=e*e-4*c*t;return o<0?[]:[(-e+Math.sqrt(o))/(2*c),(-e-Math.sqrt(o))/(2*c)]})(e,t,o);const s=(3*(t/=c)-(e/=c)*e)/3,i=(2*e*e*e-9*e*t+27*(o/=c))/27;if(0===s)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-s),-Math.sqrt(-s)];const l=Math.pow(i/2,2)+Math.pow(s/3,3);if(0===l)return[Math.pow(i/2,.5)-e/3];if(l>0)return[Math.pow(-i/2+Math.sqrt(l),1/3)-Math.pow(i/2+Math.sqrt(l),1/3)-e/3];const g=Math.sqrt(Math.pow(-s/3,3)),p=Math.acos(-i/(2*Math.sqrt(Math.pow(-s/3,3)))),v=2*Math.pow(g,1/3);return[v*Math.cos(p/3)-e/3,v*Math.cos((p+2*Math.PI)/3)-e/3,v*Math.cos((p+4*Math.PI)/3)-e/3]}},75062:(A,E,n)=>{n.d(E,{i:()=>a});const a=f=>f&&""!==f.dir?"rtl"===f.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},11112:(A,E,n)=>{n.r(E),n.d(E,{startFocusVisible:()=>m});const a="ion-focused",r=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],m=u=>{let c=[],e=!0;const t=u?u.shadowRoot:document,o=u||document.body,s=_=>{c.forEach(h=>h.classList.remove(a)),_.forEach(h=>h.classList.add(a)),c=_},i=()=>{e=!1,s([])},l=_=>{e=r.includes(_.key),e||s([])},g=_=>{if(e&&_.composedPath){const h=_.composedPath().filter(y=>!!y.classList&&y.classList.contains("ion-focusable"));s(h)}},p=()=>{t.activeElement===o&&s([])};return t.addEventListener("keydown",l),t.addEventListener("focusin",g),t.addEventListener("focusout",p),t.addEventListener("touchstart",i),t.addEventListener("mousedown",i),{destroy:()=>{t.removeEventListener("keydown",l),t.removeEventListener("focusin",g),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",i),t.removeEventListener("mousedown",i)},setFocus:s}}},34118:(A,E,n)=>{n.d(E,{C:()=>u,a:()=>r,d:()=>m});var a=n(49671),f=n(41643);const r=function(){var c=(0,a.Z)(function*(e,t,o,s,i,l){var g;if(e)return e.attachViewToDom(t,o,i,s);if(!(l||"string"==typeof o||o instanceof HTMLElement))throw new Error("framework delegate is missing");const p="string"==typeof o?null===(g=t.ownerDocument)||void 0===g?void 0:g.createElement(o):o;return s&&s.forEach(v=>p.classList.add(v)),i&&Object.assign(p,i),t.appendChild(p),yield new Promise(v=>(0,f.c)(p,v)),p});return function(t,o,s,i,l,g){return c.apply(this,arguments)}}(),m=(c,e)=>{if(e){if(c)return c.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},u=()=>{let c,e;return{attachViewToDom:function(){var s=(0,a.Z)(function*(i,l,g={},p=[]){var v,_;if(c=i,l){const y="string"==typeof l?null===(v=c.ownerDocument)||void 0===v?void 0:v.createElement(l):l;p.forEach(d=>y.classList.add(d)),Object.assign(y,g),c.appendChild(y),yield new Promise(d=>(0,f.c)(y,d))}else if(c.children.length>0){const y=null===(_=c.ownerDocument)||void 0===_?void 0:_.createElement("div");p.forEach(d=>y.classList.add(d)),y.append(...c.children),c.appendChild(y)}const h=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),c.parentNode.insertBefore(e,c),h.appendChild(c),c});return function(l,g){return s.apply(this,arguments)}}(),removeViewFromDom:()=>(c&&e&&(e.parentNode.insertBefore(c,e),e.remove()),Promise.resolve())}}},87683:(A,E,n)=>{n.d(E,{a:()=>r,b:()=>m,c:()=>f,d:()=>c,h:()=>u});const a={getEngine(){var e;const t=window;return t.TapticEngine||(null===(e=t.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const o=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:o})},notification(e){const t=this.getEngine();if(!t)return;const o=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:o})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},f=()=>{a.selection()},r=()=>{a.selectionStart()},m=()=>{a.selectionChanged()},u=()=>{a.selectionEnd()},c=e=>{a.impact(e)}},91473:(A,E,n)=>{n.d(E,{a:()=>s,b:()=>g,f:()=>i,g:()=>o,p:()=>p,s:()=>l});var a=n(49671),f=n(41643),r=n(77208);const u="ion-content",c=".ion-content-scroll-host",e=`${u}, ${c}`,t=v=>v&&"ION-CONTENT"===v.tagName,o=function(){var v=(0,a.Z)(function*(_){return t(_)?(yield new Promise(h=>(0,f.c)(_,h)),_.getScrollElement()):_});return function(h){return v.apply(this,arguments)}}(),s=v=>v.querySelector(c)||v.querySelector(e),i=v=>v.closest(e),l=(v,_)=>t(v)?v.scrollToTop(_):Promise.resolve(v.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),g=(v,_,h,y)=>t(v)?v.scrollByPoint(_,h,y):Promise.resolve(v.scrollBy({top:h,left:_,behavior:y>0?"smooth":"auto"})),p=v=>(0,r.a)(v,u)},77208:(A,E,n)=>{n.d(E,{a:()=>r,b:()=>f,p:()=>a});const a=m=>console.warn(`[Ionic Warning]: ${m}`),f=(m,...u)=>console.error(`[Ionic Error]: ${m}`,...u),r=(m,...u)=>console.error(`<${m.tagName.toLowerCase()}> must be used inside ${u.join(" or ")}.`)},28439:(A,E,n)=>{n.d(E,{s:()=>a});const a=t=>{try{if(t instanceof class e{constructor(o){this.value=o}})return t.value;if(!m()||"string"!=typeof t||""===t)return t;const o=document.createDocumentFragment(),s=document.createElement("div");o.appendChild(s),s.innerHTML=t,c.forEach(p=>{const v=o.querySelectorAll(p);for(let _=v.length-1;_>=0;_--){const h=v[_];h.parentNode?h.parentNode.removeChild(h):o.removeChild(h);const y=r(h);for(let d=0;d<y.length;d++)f(y[d])}});const i=r(o);for(let p=0;p<i.length;p++)f(i[p]);const l=document.createElement("div");l.appendChild(o);const g=l.querySelector("div");return null!==g?g.innerHTML:l.innerHTML}catch(o){return console.error(o),""}},f=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let s=t.attributes.length-1;s>=0;s--){const i=t.attributes.item(s),l=i.name;if(!u.includes(l.toLowerCase())){t.removeAttribute(l);continue}const g=i.value;null!=g&&g.toLowerCase().includes("javascript:")&&t.removeAttribute(l)}const o=r(t);for(let s=0;s<o.length;s++)f(o[s])},r=t=>null!=t.children?t.children:t.childNodes,m=()=>{var t;const o=window,s=null===(t=null==o?void 0:o.Ionic)||void 0===t?void 0:t.config;return!s||(s.get?s.get("sanitizerEnabled",!0):!0===s.sanitizerEnabled||void 0===s.sanitizerEnabled)},u=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},48117:(A,E,n)=>{n.d(E,{a:()=>a,b:()=>i,c:()=>c,d:()=>l,e:()=>d,f:()=>r,g:()=>f,h:()=>h,i:()=>e,j:()=>o,k:()=>g,l:()=>t,m:()=>u,n:()=>m,o:()=>s,p:()=>p,q:()=>v,r:()=>_,s:()=>y});const a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},51316:(A,E,n)=>{n.r(E),n.d(E,{KEYBOARD_DID_CLOSE:()=>f,KEYBOARD_DID_OPEN:()=>a,copyVisualViewport:()=>y,keyboardDidClose:()=>p,keyboardDidOpen:()=>l,keyboardDidResize:()=>g,resetKeyboardAssist:()=>e,setKeyboardClose:()=>i,setKeyboardOpen:()=>s,startKeyboardAssist:()=>t,trackViewportChanges:()=>h});const a="ionKeyboardDidShow",f="ionKeyboardDidHide";let m={},u={},c=!1;const e=()=>{m={},u={},c=!1},t=d=>{o(d),d.visualViewport&&(u=y(d.visualViewport),d.visualViewport.onresize=()=>{h(d),l()||g(d)?s(d):p(d)&&i(d)})},o=d=>{d.addEventListener("keyboardDidShow",M=>s(d,M)),d.addEventListener("keyboardDidHide",()=>i(d))},s=(d,M)=>{v(d,M),c=!0},i=d=>{_(d),c=!1},l=()=>!c&&m.width===u.width&&(m.height-u.height)*u.scale>150,g=d=>c&&!p(d),p=d=>c&&u.height===d.innerHeight,v=(d,M)=>{const C=new CustomEvent(a,{detail:{keyboardHeight:M?M.keyboardHeight:d.innerHeight-u.height}});d.dispatchEvent(C)},_=d=>{const M=new CustomEvent(f);d.dispatchEvent(M)},h=d=>{m=Object.assign({},u),u=y(d.visualViewport)},y=d=>({width:Math.round(d.width),height:Math.round(d.height),offsetTop:d.offsetTop,offsetLeft:d.offsetLeft,pageTop:d.pageTop,pageLeft:d.pageLeft,scale:d.scale})},17741:(A,E,n)=>{n.d(E,{S:()=>f});const f={bubbles:{dur:1e3,circles:9,fn:(r,m,u)=>{const c=r*m/u-r+"ms",e=2*Math.PI*m/u;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":c}}}},circles:{dur:1e3,circles:8,fn:(r,m,u)=>{const c=m/u,e=r*c-r+"ms",t=2*Math.PI*c;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(r,m)=>({r:6,style:{left:9-9*m+"px","animation-delay":-110*m+"ms"}})},lines:{dur:1e3,lines:8,fn:(r,m,u)=>({y1:14,y2:26,style:{transform:`rotate(${360/u*m+(m<u/2?180:-180)}deg)`,"animation-delay":r*m/u-r+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(r,m,u)=>({y1:12,y2:20,style:{transform:`rotate(${360/u*m+(m<u/2?180:-180)}deg)`,"animation-delay":r*m/u-r+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(r,m,u)=>({y1:17,y2:29,style:{transform:`rotate(${30*m+(m<6?180:-180)}deg)`,"animation-delay":r*m/u-r+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(r,m,u)=>({y1:12,y2:20,style:{transform:`rotate(${30*m+(m<6?180:-180)}deg)`,"animation-delay":r*m/u-r+"ms"}})}}},15713:(A,E,n)=>{n.r(E),n.d(E,{createSwipeBackGesture:()=>u});var a=n(41643),f=n(75062),r=n(33139);n(43509);const u=(c,e,t,o,s)=>{const i=c.ownerDocument.defaultView,l=(0,f.i)(c),p=d=>l?-d.deltaX:d.deltaX;return(0,r.createGesture)({el:c,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:d=>(d=>{const{startX:D}=d;return l?D>=i.innerWidth-50:D<=50})(d)&&e(),onStart:t,onMove:d=>{const D=p(d)/i.innerWidth;o(D)},onEnd:d=>{const M=p(d),D=i.innerWidth,C=M/D,O=(d=>l?-d.velocityX:d.velocityX)(d),P=O>=0&&(O>.2||M>D/2),L=(P?1-C:C)*D;let I=0;if(L>5){const w=L/Math.abs(O);I=Math.min(w,540)}s(P,C<=0?.01:(0,a.k)(0,C,.9999),I)}})}},92854:(A,E,n)=>{n.d(E,{c:()=>r,g:()=>u,h:()=>f,o:()=>e});var a=n(49671);const f=(t,o)=>null!==o.closest(t),r=(t,o)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},o):o,u=t=>{const o={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(s=>null!=s).map(s=>s.trim()).filter(s=>""!==s):[])(t).forEach(s=>o[s]=!0),o},c=/^[a-z][a-z0-9+\-.]*:/,e=function(){var t=(0,a.Z)(function*(o,s,i,l){if(null!=o&&"#"!==o[0]&&!c.test(o)){const g=document.querySelector("ion-router");if(g)return null!=s&&s.preventDefault(),g.push(o,i,l)}return!1});return function(s,i,l,g){return t.apply(this,arguments)}}()},93841:(A,E,n)=>{n.d(E,{e:()=>t});var a=n(15439),r=n(92340),m=n(38313),u=n(5e3),c=n(40520);const e=`${r.N.apiUrl}/activity`;let t=(()=>{class o extends m.i{constructor(i){super(i,e),this.httpClient=i}getActivityList(i={}){let l=e+"?isTeam=true&";return i.type&&(l=l+"type="+i.type+"&"),i.title&&(l=l+"title="+i.title+"&"),i.status&&(l=l+"status="+i.status+"&"),i.startDate&&(l=l+"startDate="+a(i.startDate).format("YYYY-MM-DD")+"&"),i.endDate&&(l=l+"endDate="+a(i.endDate).format("YYYY-MM-DD")+"&"),this.httpClient.get(l)}}return o.\u0275fac=function(i){return new(i||o)(u.LFG(c.eN))},o.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},59257:(A,E,n)=>{n.d(E,{s:()=>g});var a=n(92340),f=n(38313),r=n(5e3),m=n(40520);const u=`${a.N.apiUrl}/dashboard/agent`,c=`${a.N.apiUrl}/dashboard/lead-activity/count`,e=`${a.N.apiUrl}/dashboard/resent-operation`,t=`${a.N.apiUrl}/dashboard/today-campaign`,o=`${a.N.apiUrl}/dashboard/follow-up`,s=`${a.N.apiUrl}/dashboard/backlog`,i=`${a.N.apiUrl}/dashboard/assign-lead`,l=`${a.N.apiUrl}/dashboard/sale-active-agent`;let g=(()=>{class p extends f.i{constructor(_){super(_,u),this.httpClient=_}getList(_={}){let h=u+"?";return _.empId&&(h=h+"empId="+_.empId+"&"),this.httpClient.get(h)}getLeadList(_={}){let h=c+"?";return _.empId&&(h=h+"empId="+_.empId+"&"),this.httpClient.get(h)}getRecentList(_={}){let h=e+"?";return _.empId&&(h=h+"empId="+_.empId+"&"),this.httpClient.get(h)}getCampaignList(_={}){let h=t+"?";return _.empId&&(h=h+"empId="+_.empId+"&"),this.httpClient.get(h)}getBacklogList(_={}){let h=s+"?";return _.empId&&(h=h+"empId="+_.empId+"&"),this.httpClient.get(h)}getLeadAssignList(_={}){let h=i+"?";return _.empId&&(h=h+"empId="+_.empId+"&"),this.httpClient.get(h)}getFollowupList(_={}){let h=o+"?";return _.empId&&(h=h+"empId="+_.empId+"&"),this.httpClient.get(h)}getAgentList(_={}){let h=l+"?";return _.empId&&(h=h+"empId="+_.empId+"&"),this.httpClient.get(h)}}return p.\u0275fac=function(_){return new(_||p)(r.LFG(m.eN))},p.\u0275prov=r.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},99156:(A,E,n)=>{n.r(E),n.d(E,{DashboardModule:()=>y,DashboardShareModule:()=>h});var a=n(69808),f=n(96592),r=n(50585),m=n(34436);const u=[{title:"Group Name",type:m.Y.FEILD,field:"pageName"},{title:"Simple Data",type:m.Y.FEILD,field:"simpleTest"},{title:"Actions",type:m.Y.ACTION,field:"actions",btn:{edit:!0,delete:!0}}],c=["pageName","simpleTest","actions"];var e=n(93230),t=n(5e3),o=n(78007),s=n(63272),i=n(25492);let l=(()=>{class d{constructor(D,C,O,T,P){this.router=D,this.uiService=C,this.modalService=O,this.cdRef=T,this.alertService=P,this.forms=[],this.form={id:"",name:""},this.ELEMENT_COL=u,this.displayedColumns=c,this.unsubscribe=[],this.ELEMENT_DATA=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"},{position:11,name:"Sodium",weight:22.9897,symbol:"Na"},{position:12,name:"Magnesium",weight:24.305,symbol:"Mg"},{position:13,name:"Aluminum",weight:26.9815,symbol:"Al"},{position:14,name:"Silicon",weight:28.0855,symbol:"Si"},{position:15,name:"Phosphorus",weight:30.9738,symbol:"P"},{position:16,name:"Sulfur",weight:32.065,symbol:"S"},{position:17,name:"Chlorine",weight:35.453,symbol:"Cl"},{position:18,name:"Argon",weight:39.948,symbol:"Ar"},{position:19,name:"Potassium",weight:39.0983,symbol:"K"},{position:20,name:"Calcium",weight:40.078,symbol:"Ca"}]}ngOnInit(){this.getList()}getList(){this.uiService.getByType().toPromise().then(D=>{D&&(this.forms=D.forms,this.cdRef.detectChanges(),this.matTable.reChangeData())})}ngOnDestroy(){this.unsubscribe.forEach(D=>D.unsubscribe())}delete(D,C){this.alertService.activate("Are you sure want to delete?","Warning Message").then(O=>{O&&this.uiService.delete(C).toPromise().then(T=>{T&&this.alertService.activate("This record was deleted","Success Message").then(P=>{}),this.forms.splice(D,1),this.cdRef.detectChanges(),this.matTable.reChangeData()})})}edit(D,C={}){const O=this.modalService.open(r.h,{size:"md",backdrop:!1});O.componentInstance.oldData=C,O.componentInstance.id=C.dyProductID,O.componentInstance.name=JSON.parse(JSON.stringify(C)).pageName,O.result.then(()=>{},T=>{T&&("save"==T.type?this.submit(T.data):"edit"==T.type&&(this.forms[D]=T.data,this.cdRef.detectChanges(),this.matTable.reChangeData()))})}actionBtn(D){let C=this.forms.findIndex(O=>O.dyProductID==D.data.dyProductID);"edit"==D.cmd?this.editLayout(D.data):"delete"==D.cmd?this.delete(C,D.data.dyProductID):"view"==D.cmd&&this.editLayout(D.data)}editLayout(D){this.uiService.selectedForm=D,this.router.navigateByUrl("/config-layout")}viewLayout(D){this.uiService.selectedForm=D,this.router.navigateByUrl("/product-form")}submit(D){let C={pageName:D.pageName,config:JSON.stringify({}),simpleTest:"nothing here",type:"Form"};this.uiService.save(C).toPromise().then(O=>{O&&(this.uiService.selectedForm=O,this.router.navigateByUrl("/config-layout"))})}}return d.\u0275fac=function(D){return new(D||d)(t.Y36(f.F0),t.Y36(o.q),t.Y36(s.FF),t.Y36(t.sBO),t.Y36(i.c))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-dashboard"]],viewQuery:function(D,C){if(1&D&&t.Gf(e.I,5),2&D){let O;t.iGM(O=t.CRH())&&(C.matTable=O.first)}},decls:12,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","btn-circle",3,"click"],[1,"flaticon2-plus"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","emitter"]],template:function(D,C){1&D&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"Page Groups List"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return C.edit(-1)}),t._UZ(9,"span",8),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",9),t.TgZ(11,"app-material-table-view",10),t.NdJ("emitter",function(T){return C.actionBtn(T)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&D&&(t.xp6(11),t.Q6J("data",C.forms)("colum",C.ELEMENT_COL)("displayedColumns",C.displayedColumns))},directives:[e.I],styles:[""]}),d})();var g=n(93075),p=n(69544),v=n(50282),_=n(7181);let h=(()=>{class d{}return d.\u0275fac=function(D){return new(D||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[[a.ez,p.vi,g.u5,g.UX,v.fA,_.j]]}),d})(),y=(()=>{class d{}return d.\u0275fac=function(D){return new(D||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[[a.ez,p.vi,g.u5,g.UX,v.fA,h,_.j,f.Bz.forChild([{path:"",component:l}])]]}),d})()},50585:(A,E,n)=>{n.d(E,{h:()=>e});var a=n(5e3),f=n(63272),r=n(78007),m=n(25492),u=n(93075),c=n(98807);let e=(()=>{class t{constructor(s,i,l){this.modal=s,this.uiService=i,this.alertService=l,this.oldData={},this.subscriptions=[]}ngOnInit(){}save(){let s=Object.assign(Object.assign({},this.oldData),{pageName:this.name});this.id?this.uiService.updateNoID(s).toPromise().then(i=>{i&&this.modal.dismiss({data:s,type:"edit"})}):this.modal.dismiss({data:s,type:"save"})}ngOnDestroy(){this.subscriptions.forEach(s=>s.unsubscribe())}deleteEditModal(){this.alertService.activate("Are you sure want to delete?","Warning Message").then(s=>{s&&this.modal.dismiss({type:"delete"})})}}return t.\u0275fac=function(s){return new(s||t)(a.Y36(f.Kz),a.Y36(r.q),a.Y36(m.c))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-edit-modal"]],decls:16,vars:9,consts:[[1,"modal-content"],[1,"modal-header"],["id","example-modal-sizes-title-lg",1,"modal-title","h4","left-border-image"],[1,"overlay","overlay-block","cursor-default","modal-body"],[1,"form-group"],["type","text","name","name","placeholder","",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"modal-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","submit",1,"btn","btn-primary","btn-elevate",3,"disabled","click"]],template:function(s,i){1&s&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a._uU(3),a.qZA(),a.qZA(),a.TgZ(4,"div",3),a.TgZ(5,"div",4),a.TgZ(6,"label"),a._uU(7,"Group Name"),a.qZA(),a.TgZ(8,"input",5),a.NdJ("ngModelChange",function(g){return i.name=g}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(9,"div",6),a.TgZ(10,"button",7),a.NdJ("click",function(){return i.modal.dismiss()}),a._uU(11),a.ALo(12,"translate"),a.qZA(),a.TgZ(13,"button",8),a.NdJ("click",function(){return i.save()}),a._uU(14),a.ALo(15,"translate"),a.qZA(),a.qZA(),a.qZA()),2&s&&(a.xp6(3),a.hij(" ",i.id?"Edit":"Create"," Group Name "),a.xp6(5),a.Q6J("ngModel",i.name),a.xp6(3),a.Oqu(a.lcZ(12,5,"FORM.btn_cancel")),a.xp6(2),a.Q6J("disabled",!i.name),a.xp6(1),a.Oqu(a.lcZ(15,7,"FORM.btn_save")))},directives:[u.Fj,u.JJ,u.On],pipes:[c.X],styles:[""]}),t})()},41318:(A,E,n)=>{n.d(E,{xT:()=>r});let r=(()=>{class m{}return m.GRAND_DISCOUNT=0,m.HIGH_DISCOUNT=0,m})()},19219:(A,E,n)=>{n.d(E,{i:()=>c});var a=n(38313),f=n(92340),r=n(5e3),m=n(40520);const u=`${f.N.apiUrl}/fna`;let c=(()=>{class e extends a.i{constructor(o){super(o,u),this.httpClient=o}getAll(){return this.httpClient.get(u)}getFNAAllByLeaId(o){return this.httpClient.get(u+"/"+o)}}return e.\u0275fac=function(o){return new(o||e)(r.LFG(m.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},76285:(A,E,n)=>{n.d(E,{P:()=>t});var a=n(70655),f=n(77092),r=n(5e3),m=n(63272),u=n(32972),c=n(90089),e=n(98807);let t=(()=>{class o{constructor(i,l,g){this.modal=i,this.fnaService=l,this.authService=g,this.user=new f.T,this.leadId="",this.customer=null,this.conductedBy=null}ngOnInit(){this.user=this.authService.currentUserValue}close(){this.modal.dismiss(null)}chooseFNA(i){return(0,a.mG)(this,void 0,void 0,function*(){let l;this.customer&&(l={leadId:this.leadId,customerId:this.customer.customerId,customerName:this.customer.customerName,fnaType:i,grandDiscount:0,highDiscount:0,id:0,conductedBy:this.conductedBy,createdAt:this.formatDateDDMMYYY(new Date),createdBy:this.user.id,createdByName:this.user.username,updatedAt:new Date,fnaId:null,type:this.customer.customerType,pageStatus:"create",products:[""]}),yield this.fnaService.saveFNA(l).toPromise().then(g=>{g&&(l.fnaId=g)}),this.modal.dismiss(l)})}formatDateDDMMYYY(i){var l=new Date(i),g=""+(l.getMonth()+1),p=""+l.getDate(),v=l.getFullYear();return g.length<2&&(g="0"+g),p.length<2&&(p="0"+p),[p,g,v].join("/")}}return o.\u0275fac=function(i){return new(i||o)(r.Y36(m.Kz),r.Y36(u.T),r.Y36(c.e8))},o.\u0275cmp=r.Xpm({type:o,selectors:[["app-fna-type"]],decls:19,vars:6,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"form"],[1,"col-12",3,"click"],[1,"btn-group",2,"width","100%","display","block","margin","24px 0"],["type","button",1,"btn",2,"max-width","120px","background","#005f99","color","#fff","float","right","margin-right","24px",3,"click"]],template:function(i,l){1&i&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"div",3),r.TgZ(4,"div",4),r.TgZ(5,"h3",5),r._uU(6,"FNA Type"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(7,"div",6),r.TgZ(8,"div",7),r.NdJ("click",function(){return l.chooseFNA("LPP")}),r.TgZ(9,"label"),r._uU(10),r.ALo(11,"translate"),r.qZA(),r.qZA(),r.TgZ(12,"div",7),r.NdJ("click",function(){return l.chooseFNA("BPM")}),r.TgZ(13,"label"),r._uU(14),r.ALo(15,"translate"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(16,"div",8),r.TgZ(17,"button",9),r.NdJ("click",function(){return l.close()}),r._uU(18,"Close"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&i&&(r.xp6(10),r.hij("",r.lcZ(11,2,"FORM.create_lpp")," "),r.xp6(4),r.Oqu(r.lcZ(15,4,"FORM.create_bpm")))},pipes:[e.X],styles:[".form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]{padding:10px 40px;cursor:pointer}.form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer}.form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]:first-child{border-bottom:1px solid #dad9d9}"]}),o})()},55849:(A,E,n)=>{n.d(E,{Z:()=>e});var a=n(15439),r=n(92340),m=n(5e3),u=n(40520);const c=`${r.N.apiUrl}/lead`;let e=(()=>{class t{constructor(s){this.httpClient=s}getLeadList(s={}){let i=c+"?";return s.campaignName&&(i=i+"campaignName="+s.campaignName+"&"),s.existingCustomerId&&(i=i+"existingCustomerId="+s.existingCustomerId+"&"),s.leadId&&(i=i+"leadId="+s.leadId+"&"),s.contactName&&(i=i+"contactName="+s.contactName+"&"),s.startDate&&(i=i+"startDate="+a(s.startDate).format("YYYY-MM-DD")+"&"),s.endDate&&(i=i+"endDate="+a(s.endDate).format("YYYY-MM-DD")+"&"),s.productId&&(i=i+"productId="+s.productId+"&"),s.sourceCode&&(i=i+"sourceCode="+s.sourceCode+"&"),s.statusCode&&(i=i+"statusCode="+s.statusCode+"&"),this.httpClient.get(i)}}return t.\u0275fac=function(s){return new(s||t)(m.LFG(u.eN))},t.\u0275prov=m.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},32022:(A,E,n)=>{n.d(E,{Q:()=>i});var a=n(39646),f=n(95577),r=n(92340),m=n(38313),u=n(54004),e=n(5e3),t=n(40520),o=n(27670);const s=`${r.N.apiUrl}/pagedata`;let i=(()=>{class l extends m.i{constructor(p,v){super(p,s),this.httpClient=p,this.masterData=v}getDetail(p,v,_,h=!1,y=[],d=!1){return this.httpClient.get(s+"/"+p+"/"+v+"/"+_).pipe((0,f.z)(M=>h?function c(l,g,p,v=!1){return Array.isArray(g)&&g.length>0?(0,a.of)(g).pipe((0,u.U)(_=>{let h=[];return _.map(d=>{let M=d.data.filter(D=>(D.value+"").startsWith("T-")||(D.value+"").startsWith("TA-")||(D.value+"").startsWith("TU-"));if(M.length>0){let D=M.map(C=>{let O=p.find(T=>T.name==C.column);if(O.masterData)return{codeId:C.value,codeType:O.masterData,langCd:"EN"}});h.push(...D)}}),{result:_,masterPost:h}}),(0,f.z)(_=>_.masterPost.length>0?l.getMasterValue({codeBookRequest:_.masterPost}).pipe((0,u.U)(y=>_.result.map(d=>(d.data=d.data.flatMap(M=>{if((M.value+"").startsWith("T-")||(M.value+"").startsWith("TA-")||(M.value+"").startsWith("TU-")){let D=p.find(O=>O.name==M.column),C=y.findIndex(O=>O.codeId==M.value&&D.masterData==O.codeType);if(C>=0){if(v)return[M,{column:M.column+"Value",value:y[C].codeName}];M.value=y[C].codeName,M.valueCode=y[C].codeId}}return M}),d)))):(0,a.of)(_.result))):(0,a.of)(g)}(this.masterData,M,y,d):(0,a.of)(M)))}deleteData(p,v,_){return this.httpClient.delete(s+"/"+p+"/"+v+"/"+_)}updatePremimun(p){return this.httpClient.put(s+"/resource",p)}}return l.\u0275fac=function(p){return new(p||l)(e.LFG(t.eN),e.LFG(o.D))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},75943:(A,E,n)=>{n.d(E,{G:()=>t});var a=n(15439),r=n(92340),m=n(38313),u=n(5e3),c=n(40520);const e=`${r.N.apiUrl}/quotation`;let t=(()=>{class o extends m.i{constructor(i){super(i,e),this.httpClient=i}getQuoList(i={}){let l=e+"?";return l=l+"isTeam="+!!i.isTeam+"&",i.startDate&&(l=l+"startDate="+a(i.startDate).format("YYYY-MM-DD")+"&"),i.endDate&&(l=l+"endDate="+a(i.endDate).format("YYYY-MM-DD")+"&"),this.httpClient.get(l)}}return o.\u0275fac=function(i){return new(i||o)(u.LFG(c.eN))},o.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},84161:(A,E,n)=>{n.d(E,{R:()=>c});var a=n(92340),f=n(38313),r=n(5e3),m=n(40520);const u=`${a.N.apiUrl}/renewal-policy`;let c=(()=>{class e extends f.i{constructor(o){super(o,u),this.httpClient=o}getRenewList(o={}){return this.findAll()}confirmRenew(o){return this.httpClient.put(u+"/confirm/"+o,{})}}return e.\u0275fac=function(o){return new(o||e)(r.LFG(m.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},72363:(A,E,n)=>{n.d(E,{J:()=>l});var a=n(69808),f=n(93075),r=n(63272),m=n(84095),u=n(50282),c=n(42115),e=n(64537),t=n(8202),o=n(98558),s=n(65884),i=n(5e3);let l=(()=>{class g{}return g.\u0275fac=function(v){return new(v||g)},g.\u0275mod=i.oAB({type:g}),g.\u0275inj=i.cJS({imports:[[a.ez,f.u5,u.fA,f.UX,r.bz,m.Fk,s.FA,r.M,o.rP,c.X,e.A0,t.Ud]]}),g})()},59241:(A,E,n)=>{n.d(E,{G:()=>c});var a=n(92340),f=n(38313),r=n(5e3),m=n(40520);const u=`${a.N.apiUrl}/travel-risk`;let c=(()=>{class e extends f.i{constructor(o){super(o,u),this.httpClient=o}deleteMany(o){return this.httpClient.delete(u+"/resource/"+o)}getMany(o){return this.httpClient.get(u+"/resource/"+o)}}return e.\u0275fac=function(o){return new(o||e)(r.LFG(m.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);