"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{65207:(P,f,n)=>{n.d(f,{c:()=>u});var i=n(80432),v=n(45712),r=n(79502);const u=(d,c)=>{let e,t;const o=(l,g,h)=>{if("undefined"==typeof document)return;const E=document.elementFromPoint(l,g);E&&c(E)?E!==e&&(s(),a(E,h)):s()},a=(l,g)=>{e=l,t||(t=e);const h=e;(0,i.c)(()=>h.classList.add("ion-activated")),g()},s=(l=!1)=>{if(!e)return;const g=e;(0,i.c)(()=>g.classList.remove("ion-activated")),l&&t!==e&&e.click(),e=void 0};return(0,r.createGesture)({el:d,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>o(l.currentX,l.currentY,v.a),onMove:l=>o(l.currentX,l.currentY,v.b),onEnd:()=>{s(!0),(0,v.h)(),t=void 0}})}},69766:(P,f,n)=>{n.d(f,{g:()=>i});const i=(c,e,t,o,a)=>r(c[1],e[1],t[1],o[1],a).map(s=>v(c[0],e[0],t[0],o[0],s)),v=(c,e,t,o,a)=>a*(3*e*Math.pow(a-1,2)+a*(-3*t*a+3*t+o*a))-c*Math.pow(a-1,3),r=(c,e,t,o,a)=>d((o-=a)-3*(t-=a)+3*(e-=a)-(c-=a),3*t-6*e+3*c,3*e-3*c,c).filter(l=>l>=0&&l<=1),d=(c,e,t,o)=>{if(0===c)return((c,e,t)=>{const o=e*e-4*c*t;return o<0?[]:[(-e+Math.sqrt(o))/(2*c),(-e-Math.sqrt(o))/(2*c)]})(e,t,o);const a=(3*(t/=c)-(e/=c)*e)/3,s=(2*e*e*e-9*e*t+27*(o/=c))/27;if(0===a)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-a),-Math.sqrt(-a)];const l=Math.pow(s/2,2)+Math.pow(a/3,3);if(0===l)return[Math.pow(s/2,.5)-e/3];if(l>0)return[Math.pow(-s/2+Math.sqrt(l),1/3)-Math.pow(s/2+Math.sqrt(l),1/3)-e/3];const g=Math.sqrt(Math.pow(-a/3,3)),h=Math.acos(-s/(2*Math.sqrt(Math.pow(-a/3,3)))),E=2*Math.pow(g,1/3);return[E*Math.cos(h/3)-e/3,E*Math.cos((h+2*Math.PI)/3)-e/3,E*Math.cos((h+4*Math.PI)/3)-e/3]}},29318:(P,f,n)=>{n.d(f,{i:()=>i});const i=v=>v&&""!==v.dir?"rtl"===v.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},53610:(P,f,n)=>{n.r(f),n.d(f,{startFocusVisible:()=>u});const i="ion-focused",r=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],u=d=>{let c=[],e=!0;const t=d?d.shadowRoot:document,o=d||document.body,a=_=>{c.forEach(p=>p.classList.remove(i)),_.forEach(p=>p.classList.add(i)),c=_},s=()=>{e=!1,a([])},l=_=>{e=r.includes(_.key),e||a([])},g=_=>{if(e&&_.composedPath){const p=_.composedPath().filter(y=>!!y.classList&&y.classList.contains("ion-focusable"));a(p)}},h=()=>{t.activeElement===o&&a([])};return t.addEventListener("keydown",l),t.addEventListener("focusin",g),t.addEventListener("focusout",h),t.addEventListener("touchstart",s),t.addEventListener("mousedown",s),{destroy:()=>{t.removeEventListener("keydown",l),t.removeEventListener("focusin",g),t.removeEventListener("focusout",h),t.removeEventListener("touchstart",s),t.removeEventListener("mousedown",s)},setFocus:a}}},19861:(P,f,n)=>{n.d(f,{C:()=>d,a:()=>r,d:()=>u});var i=n(8239),v=n(37127);const r=function(){var c=(0,i.Z)(function*(e,t,o,a,s,l){var g;if(e)return e.attachViewToDom(t,o,s,a);if(!(l||"string"==typeof o||o instanceof HTMLElement))throw new Error("framework delegate is missing");const h="string"==typeof o?null===(g=t.ownerDocument)||void 0===g?void 0:g.createElement(o):o;return a&&a.forEach(E=>h.classList.add(E)),s&&Object.assign(h,s),t.appendChild(h),yield new Promise(E=>(0,v.c)(h,E)),h});return function(t,o,a,s,l,g){return c.apply(this,arguments)}}(),u=(c,e)=>{if(e){if(c)return c.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},d=()=>{let c,e;return{attachViewToDom:function(){var a=(0,i.Z)(function*(s,l,g={},h=[]){var E,_;if(c=s,l){const y="string"==typeof l?null===(E=c.ownerDocument)||void 0===E?void 0:E.createElement(l):l;h.forEach(m=>y.classList.add(m)),Object.assign(y,g),c.appendChild(y),yield new Promise(m=>(0,v.c)(y,m))}else if(c.children.length>0){const y=null===(_=c.ownerDocument)||void 0===_?void 0:_.createElement("div");h.forEach(m=>y.classList.add(m)),y.append(...c.children),c.appendChild(y)}const p=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),c.parentNode.insertBefore(e,c),p.appendChild(c),c});return function(l,g){return a.apply(this,arguments)}}(),removeViewFromDom:()=>(c&&e&&(e.parentNode.insertBefore(c,e),e.remove()),Promise.resolve())}}},45712:(P,f,n)=>{n.d(f,{a:()=>r,b:()=>u,c:()=>v,d:()=>c,h:()=>d});const i={getEngine(){var e;const t=window;return t.TapticEngine||(null===(e=t.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const o=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:o})},notification(e){const t=this.getEngine();if(!t)return;const o=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:o})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},v=()=>{i.selection()},r=()=>{i.selectionStart()},u=()=>{i.selectionChanged()},d=()=>{i.selectionEnd()},c=e=>{i.impact(e)}},2700:(P,f,n)=>{n.d(f,{a:()=>a,b:()=>g,f:()=>s,g:()=>o,p:()=>h,s:()=>l});var i=n(8239),v=n(37127),r=n(33688);const d="ion-content",c=".ion-content-scroll-host",e=`${d}, ${c}`,t=E=>E&&"ION-CONTENT"===E.tagName,o=function(){var E=(0,i.Z)(function*(_){return t(_)?(yield new Promise(p=>(0,v.c)(_,p)),_.getScrollElement()):_});return function(p){return E.apply(this,arguments)}}(),a=E=>E.querySelector(c)||E.querySelector(e),s=E=>E.closest(e),l=(E,_)=>t(E)?E.scrollToTop(_):Promise.resolve(E.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),g=(E,_,p,y)=>t(E)?E.scrollByPoint(_,p,y):Promise.resolve(E.scrollBy({top:p,left:_,behavior:y>0?"smooth":"auto"})),h=E=>(0,r.a)(E,d)},33688:(P,f,n)=>{n.d(f,{a:()=>r,b:()=>v,p:()=>i});const i=u=>console.warn(`[Ionic Warning]: ${u}`),v=(u,...d)=>console.error(`[Ionic Error]: ${u}`,...d),r=(u,...d)=>console.error(`<${u.tagName.toLowerCase()}> must be used inside ${d.join(" or ")}.`)},80230:(P,f,n)=>{n.d(f,{s:()=>i});const i=t=>{try{if(t instanceof class{constructor(o){this.value=o}})return t.value;if(!u()||"string"!=typeof t||""===t)return t;const o=document.createDocumentFragment(),a=document.createElement("div");o.appendChild(a),a.innerHTML=t,c.forEach(h=>{const E=o.querySelectorAll(h);for(let _=E.length-1;_>=0;_--){const p=E[_];p.parentNode?p.parentNode.removeChild(p):o.removeChild(p);const y=r(p);for(let m=0;m<y.length;m++)v(y[m])}});const s=r(o);for(let h=0;h<s.length;h++)v(s[h]);const l=document.createElement("div");l.appendChild(o);const g=l.querySelector("div");return null!==g?g.innerHTML:l.innerHTML}catch(o){return console.error(o),""}},v=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let a=t.attributes.length-1;a>=0;a--){const s=t.attributes.item(a),l=s.name;if(!d.includes(l.toLowerCase())){t.removeAttribute(l);continue}const g=s.value;null!=g&&g.toLowerCase().includes("javascript:")&&t.removeAttribute(l)}const o=r(t);for(let a=0;a<o.length;a++)v(o[a])},r=t=>null!=t.children?t.children:t.childNodes,u=()=>{var t;const o=window,a=null===(t=null==o?void 0:o.Ionic)||void 0===t?void 0:t.config;return!a||(a.get?a.get("sanitizerEnabled",!0):!0===a.sanitizerEnabled||void 0===a.sanitizerEnabled)},d=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},1890:(P,f,n)=>{n.d(f,{a:()=>i,b:()=>s,c:()=>c,d:()=>l,e:()=>m,f:()=>r,g:()=>v,h:()=>p,i:()=>e,j:()=>o,k:()=>g,l:()=>t,m:()=>d,n:()=>u,o:()=>a,p:()=>h,q:()=>E,r:()=>_,s:()=>y});const i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},94717:(P,f,n)=>{n.r(f),n.d(f,{KEYBOARD_DID_CLOSE:()=>v,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>y,keyboardDidClose:()=>h,keyboardDidOpen:()=>l,keyboardDidResize:()=>g,resetKeyboardAssist:()=>e,setKeyboardClose:()=>s,setKeyboardOpen:()=>a,startKeyboardAssist:()=>t,trackViewportChanges:()=>p});const i="ionKeyboardDidShow",v="ionKeyboardDidHide";let u={},d={},c=!1;const e=()=>{u={},d={},c=!1},t=m=>{o(m),m.visualViewport&&(d=y(m.visualViewport),m.visualViewport.onresize=()=>{p(m),l()||g(m)?a(m):h(m)&&s(m)})},o=m=>{m.addEventListener("keyboardDidShow",M=>a(m,M)),m.addEventListener("keyboardDidHide",()=>s(m))},a=(m,M)=>{E(m,M),c=!0},s=m=>{_(m),c=!1},l=()=>!c&&u.width===d.width&&(u.height-d.height)*d.scale>150,g=m=>c&&!h(m),h=m=>c&&d.height===m.innerHeight,E=(m,M)=>{const C=new CustomEvent(i,{detail:{keyboardHeight:M?M.keyboardHeight:m.innerHeight-d.height}});m.dispatchEvent(C)},_=m=>{const M=new CustomEvent(v);m.dispatchEvent(M)},p=m=>{u=Object.assign({},d),d=y(m.visualViewport)},y=m=>({width:Math.round(m.width),height:Math.round(m.height),offsetTop:m.offsetTop,offsetLeft:m.offsetLeft,pageTop:m.pageTop,pageLeft:m.pageLeft,scale:m.scale})},58653:(P,f,n)=>{n.d(f,{S:()=>v});const v={bubbles:{dur:1e3,circles:9,fn:(r,u,d)=>{const c=r*u/d-r+"ms",e=2*Math.PI*u/d;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":c}}}},circles:{dur:1e3,circles:8,fn:(r,u,d)=>{const c=u/d,e=r*c-r+"ms",t=2*Math.PI*c;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(r,u)=>({r:6,style:{left:9-9*u+"px","animation-delay":-110*u+"ms"}})},lines:{dur:1e3,lines:8,fn:(r,u,d)=>({y1:14,y2:26,style:{transform:`rotate(${360/d*u+(u<d/2?180:-180)}deg)`,"animation-delay":r*u/d-r+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(r,u,d)=>({y1:12,y2:20,style:{transform:`rotate(${360/d*u+(u<d/2?180:-180)}deg)`,"animation-delay":r*u/d-r+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(r,u,d)=>({y1:17,y2:29,style:{transform:`rotate(${30*u+(u<6?180:-180)}deg)`,"animation-delay":r*u/d-r+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(r,u,d)=>({y1:12,y2:20,style:{transform:`rotate(${30*u+(u<6?180:-180)}deg)`,"animation-delay":r*u/d-r+"ms"}})}}},76560:(P,f,n)=>{n.r(f),n.d(f,{createSwipeBackGesture:()=>d});var i=n(37127),v=n(29318),r=n(79502);n(52119);const d=(c,e,t,o,a)=>{const s=c.ownerDocument.defaultView,l=(0,v.i)(c),h=m=>l?-m.deltaX:m.deltaX;return(0,r.createGesture)({el:c,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:m=>(m=>{const{startX:D}=m;return l?D>=s.innerWidth-50:D<=50})(m)&&e(),onStart:t,onMove:m=>{const D=h(m)/s.innerWidth;o(D)},onEnd:m=>{const M=h(m),D=s.innerWidth,C=M/D,O=(m=>l?-m.velocityX:m.velocityX)(m),A=O>=0&&(O>.2||M>D/2),L=(A?1-C:C)*D;let I=0;if(L>5){const w=L/Math.abs(O);I=Math.min(w,540)}a(A,C<=0?.01:(0,i.k)(0,C,.9999),I)}})}},72400:(P,f,n)=>{n.d(f,{c:()=>r,g:()=>d,h:()=>v,o:()=>e});var i=n(8239);const v=(t,o)=>null!==o.closest(t),r=(t,o)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},o):o,d=t=>{const o={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(a=>null!=a).map(a=>a.trim()).filter(a=>""!==a):[])(t).forEach(a=>o[a]=!0),o},c=/^[a-z][a-z0-9+\-.]*:/,e=function(){var t=(0,i.Z)(function*(o,a,s,l){if(null!=o&&"#"!==o[0]&&!c.test(o)){const g=document.querySelector("ion-router");if(g)return null!=a&&a.preventDefault(),g.push(o,s,l)}return!1});return function(a,s,l,g){return t.apply(this,arguments)}}()},15346:(P,f,n)=>{n.d(f,{X:()=>r});var i=n(83668),v=n(59832);let r=(()=>{class u{constructor(c){this._languageService=c}transform(c){if(c){let e=this._languageService.getSelectedLanguage(),t=c.split(".");if(t.length>=2)try{return this._languageService.langs[e][t[0]][t[1]]||t[1]}catch(o){return t[1]}}return c}}return u.\u0275fac=function(c){return new(c||u)(i.Y36(v.K,16))},u.\u0275pipe=i.Yjl({name:"translate",type:u,pure:!1}),u})()},95976:(P,f,n)=>{n.d(f,{e:()=>t});var i=n(92070),r=n(18260),u=n(91691),d=n(83668),c=n(44522);const e=`${r.N.apiUrl}/activity`;let t=(()=>{class o extends u.i{constructor(s){super(s,e),this.httpClient=s}getActivityList(s={}){let l=e+"?isTeam=true&";return s.type&&(l=l+"type="+s.type+"&"),s.title&&(l=l+"title="+s.title+"&"),s.status&&(l=l+"status="+s.status+"&"),s.startDate&&(l=l+"startDate="+i(s.startDate).format("YYYY-MM-DD")+"&"),s.endDate&&(l=l+"endDate="+i(s.endDate).format("YYYY-MM-DD")+"&"),this.httpClient.get(l)}}return o.\u0275fac=function(s){return new(s||o)(d.LFG(c.eN))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},75199:(P,f,n)=>{n.d(f,{s:()=>g});var i=n(18260),v=n(91691),r=n(83668),u=n(44522);const d=`${i.N.apiUrl}/dashboard/agent`,c=`${i.N.apiUrl}/dashboard/lead-activity/count`,e=`${i.N.apiUrl}/dashboard/resent-operation`,t=`${i.N.apiUrl}/dashboard/today-campaign`,o=`${i.N.apiUrl}/dashboard/follow-up`,a=`${i.N.apiUrl}/dashboard/backlog`,s=`${i.N.apiUrl}/dashboard/assign-lead`,l=`${i.N.apiUrl}/dashboard/sale-active-agent`;let g=(()=>{class h extends v.i{constructor(_){super(_,d),this.httpClient=_}getList(_={}){let p=d+"?";return _.empId&&(p=p+"empId="+_.empId+"&"),this.httpClient.get(p)}getLeadList(_={}){let p=c+"?";return _.empId&&(p=p+"empId="+_.empId+"&"),this.httpClient.get(p)}getRecentList(_={}){let p=e+"?";return _.empId&&(p=p+"empId="+_.empId+"&"),this.httpClient.get(p)}getCampaignList(_={}){let p=t+"?";return _.empId&&(p=p+"empId="+_.empId+"&"),this.httpClient.get(p)}getBacklogList(_={}){let p=a+"?";return _.empId&&(p=p+"empId="+_.empId+"&"),this.httpClient.get(p)}getLeadAssignList(_={}){let p=s+"?";return _.empId&&(p=p+"empId="+_.empId+"&"),this.httpClient.get(p)}getFollowupList(_={}){let p=o+"?";return _.empId&&(p=p+"empId="+_.empId+"&"),this.httpClient.get(p)}getAgentList(_={}){let p=l+"?";return _.empId&&(p=p+"empId="+_.empId+"&"),this.httpClient.get(p)}}return h.\u0275fac=function(_){return new(_||h)(r.LFG(u.eN))},h.\u0275prov=r.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},75512:(P,f,n)=>{n.r(f),n.d(f,{DashboardModule:()=>y,DashboardShareModule:()=>p});var i=n(86019),v=n(4205),r=n(57354),u=n(18510);const d=[{title:"Group Name",type:u.Y.FEILD,field:"pageName"},{title:"Simple Data",type:u.Y.FEILD,field:"simpleTest"},{title:"Actions",type:u.Y.ACTION,field:"actions",btn:{edit:!0,delete:!0}}],c=["pageName","simpleTest","actions"];var e=n(90949),t=n(83668),o=n(41323),a=n(85993),s=n(60940);let l=(()=>{class m{constructor(D,C,O,T,A){this.router=D,this.uiService=C,this.modalService=O,this.cdRef=T,this.alertService=A,this.forms=[],this.form={id:"",name:""},this.ELEMENT_COL=d,this.displayedColumns=c,this.unsubscribe=[],this.ELEMENT_DATA=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"},{position:11,name:"Sodium",weight:22.9897,symbol:"Na"},{position:12,name:"Magnesium",weight:24.305,symbol:"Mg"},{position:13,name:"Aluminum",weight:26.9815,symbol:"Al"},{position:14,name:"Silicon",weight:28.0855,symbol:"Si"},{position:15,name:"Phosphorus",weight:30.9738,symbol:"P"},{position:16,name:"Sulfur",weight:32.065,symbol:"S"},{position:17,name:"Chlorine",weight:35.453,symbol:"Cl"},{position:18,name:"Argon",weight:39.948,symbol:"Ar"},{position:19,name:"Potassium",weight:39.0983,symbol:"K"},{position:20,name:"Calcium",weight:40.078,symbol:"Ca"}]}ngOnInit(){this.getList()}getList(){this.uiService.getByType().toPromise().then(D=>{D&&(this.forms=D.forms,this.cdRef.detectChanges(),this.matTable.reChangeData())})}ngOnDestroy(){this.unsubscribe.forEach(D=>D.unsubscribe())}delete(D,C){this.alertService.activate("Are you sure want to delete?","Warning Message").then(O=>{O&&this.uiService.delete(C).toPromise().then(T=>{T&&this.alertService.activate("This record was deleted","Success Message").then(A=>{}),this.forms.splice(D,1),this.cdRef.detectChanges(),this.matTable.reChangeData()})})}edit(D,C={}){const O=this.modalService.open(r.h,{size:"md",backdrop:!1});O.componentInstance.oldData=C,O.componentInstance.id=C.dyProductID,O.componentInstance.name=JSON.parse(JSON.stringify(C)).pageName,O.result.then(()=>{},T=>{T&&("save"==T.type?this.submit(T.data):"edit"==T.type&&(this.forms[D]=T.data,this.cdRef.detectChanges(),this.matTable.reChangeData()))})}actionBtn(D){let C=this.forms.findIndex(O=>O.dyProductID==D.data.dyProductID);"edit"==D.cmd?this.editLayout(D.data):"delete"==D.cmd?this.delete(C,D.data.dyProductID):"view"==D.cmd&&this.editLayout(D.data)}editLayout(D){this.uiService.selectedForm=D,this.router.navigateByUrl("/config-layout")}viewLayout(D){this.uiService.selectedForm=D,this.router.navigateByUrl("/product-form")}submit(D){let C={pageName:D.pageName,config:JSON.stringify({}),simpleTest:"nothing here",type:"Form"};this.uiService.save(C).toPromise().then(O=>{O&&(this.uiService.selectedForm=O,this.router.navigateByUrl("/config-layout"))})}}return m.\u0275fac=function(D){return new(D||m)(t.Y36(v.F0),t.Y36(o.q),t.Y36(a.FF),t.Y36(t.sBO),t.Y36(s.c))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-dashboard"]],viewQuery:function(D,C){if(1&D&&t.Gf(e.I,5),2&D){let O;t.iGM(O=t.CRH())&&(C.matTable=O.first)}},decls:12,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","btn-circle",3,"click"],[1,"flaticon2-plus"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","emitter"]],template:function(D,C){1&D&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"Page Groups List"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return C.edit(-1)}),t._UZ(9,"span",8),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",9),t.TgZ(11,"app-material-table-view",10),t.NdJ("emitter",function(T){return C.actionBtn(T)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&D&&(t.xp6(11),t.Q6J("data",C.forms)("colum",C.ELEMENT_COL)("displayedColumns",C.displayedColumns))},directives:[e.I],styles:[""]}),m})();var g=n(49133),h=n(87626),E=n(45598),_=n(63699);let p=(()=>{class m{}return m.\u0275fac=function(D){return new(D||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[[i.ez,h.vi,g.u5,g.UX,E.fA,_.j]]}),m})(),y=(()=>{class m{}return m.\u0275fac=function(D){return new(D||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[[i.ez,h.vi,g.u5,g.UX,E.fA,p,_.j,v.Bz.forChild([{path:"",component:l}])]]}),m})()},57354:(P,f,n)=>{n.d(f,{h:()=>e});var i=n(83668),v=n(85993),r=n(41323),u=n(60940),d=n(49133),c=n(15346);let e=(()=>{class t{constructor(a,s,l){this.modal=a,this.uiService=s,this.alertService=l,this.oldData={},this.subscriptions=[]}ngOnInit(){}save(){let a=Object.assign(Object.assign({},this.oldData),{pageName:this.name});this.id?this.uiService.updateNoID(a).toPromise().then(s=>{s&&this.modal.dismiss({data:a,type:"edit"})}):this.modal.dismiss({data:a,type:"save"})}ngOnDestroy(){this.subscriptions.forEach(a=>a.unsubscribe())}deleteEditModal(){this.alertService.activate("Are you sure want to delete?","Warning Message").then(a=>{a&&this.modal.dismiss({type:"delete"})})}}return t.\u0275fac=function(a){return new(a||t)(i.Y36(v.Kz),i.Y36(r.q),i.Y36(u.c))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-edit-modal"]],decls:16,vars:9,consts:[[1,"modal-content"],[1,"modal-header"],["id","example-modal-sizes-title-lg",1,"modal-title","h4","left-border-image"],[1,"overlay","overlay-block","cursor-default","modal-body"],[1,"form-group"],["type","text","name","name","placeholder","",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"modal-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","submit",1,"btn","btn-primary","btn-elevate",3,"disabled","click"]],template:function(a,s){1&a&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i._uU(3),i.qZA(),i.qZA(),i.TgZ(4,"div",3),i.TgZ(5,"div",4),i.TgZ(6,"label"),i._uU(7,"Group Name"),i.qZA(),i.TgZ(8,"input",5),i.NdJ("ngModelChange",function(g){return s.name=g}),i.qZA(),i.qZA(),i.qZA(),i.TgZ(9,"div",6),i.TgZ(10,"button",7),i.NdJ("click",function(){return s.modal.dismiss()}),i._uU(11),i.ALo(12,"translate"),i.qZA(),i.TgZ(13,"button",8),i.NdJ("click",function(){return s.save()}),i._uU(14),i.ALo(15,"translate"),i.qZA(),i.qZA(),i.qZA()),2&a&&(i.xp6(3),i.hij(" ",s.id?"Edit":"Create"," Group Name "),i.xp6(5),i.Q6J("ngModel",s.name),i.xp6(3),i.Oqu(i.lcZ(12,5,"FORM.btn_cancel")),i.xp6(2),i.Q6J("disabled",!s.name),i.xp6(1),i.Oqu(i.lcZ(15,7,"FORM.btn_save")))},directives:[d.Fj,d.JJ,d.On],pipes:[c.X],styles:[""]}),t})()},58695:(P,f,n)=>{n.d(f,{xT:()=>r});let r=(()=>{class u{}return u.GRAND_DISCOUNT=0,u.HIGH_DISCOUNT=0,u})()},95849:(P,f,n)=>{n.d(f,{i:()=>c});var i=n(91691),v=n(18260),r=n(83668),u=n(44522);const d=`${v.N.apiUrl}/fna`;let c=(()=>{class e extends i.i{constructor(o){super(o,d),this.httpClient=o}getAll(){return this.httpClient.get(d)}getFNAAllByLeaId(o){return this.httpClient.get(d+"/"+o)}}return e.\u0275fac=function(o){return new(o||e)(r.LFG(u.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},26106:(P,f,n)=>{n.d(f,{P:()=>t});var i=n(64762),v=n(13902),r=n(83668),u=n(85993),d=n(28210),c=n(67198),e=n(15346);let t=(()=>{class o{constructor(s,l,g){this.modal=s,this.fnaService=l,this.authService=g,this.user=new v.T,this.leadId="",this.customer=null,this.conductedBy=null}ngOnInit(){this.user=this.authService.currentUserValue}close(){this.modal.dismiss(null)}chooseFNA(s){return(0,i.mG)(this,void 0,void 0,function*(){let l;this.customer&&(l={leadId:this.leadId,customerId:this.customer.customerId,customerName:this.customer.customerName,fnaType:s,grandDiscount:0,highDiscount:0,id:0,conductedBy:this.conductedBy,createdAt:this.formatDateDDMMYYY(new Date),createdBy:this.user.id,createdByName:this.user.username,updatedAt:new Date,fnaId:null,type:this.customer.customerType,pageStatus:"create",products:[""]}),yield this.fnaService.saveFNA(l).toPromise().then(g=>{g&&(l.fnaId=g)}),this.modal.dismiss(l)})}formatDateDDMMYYY(s){var l=new Date(s),g=""+(l.getMonth()+1),h=""+l.getDate(),E=l.getFullYear();return g.length<2&&(g="0"+g),h.length<2&&(h="0"+h),[h,g,E].join("/")}}return o.\u0275fac=function(s){return new(s||o)(r.Y36(u.Kz),r.Y36(d.T),r.Y36(c.e8))},o.\u0275cmp=r.Xpm({type:o,selectors:[["app-fna-type"]],decls:19,vars:6,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"form"],[1,"col-12",3,"click"],[1,"btn-group",2,"width","100%","display","block","margin","24px 0"],["type","button",1,"btn",2,"max-width","120px","background","#005f99","color","#fff","float","right","margin-right","24px",3,"click"]],template:function(s,l){1&s&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"div",3),r.TgZ(4,"div",4),r.TgZ(5,"h3",5),r._uU(6,"FNA Type"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(7,"div",6),r.TgZ(8,"div",7),r.NdJ("click",function(){return l.chooseFNA("LPP")}),r.TgZ(9,"label"),r._uU(10),r.ALo(11,"translate"),r.qZA(),r.qZA(),r.TgZ(12,"div",7),r.NdJ("click",function(){return l.chooseFNA("BPM")}),r.TgZ(13,"label"),r._uU(14),r.ALo(15,"translate"),r.qZA(),r.qZA(),r.qZA(),r.TgZ(16,"div",8),r.TgZ(17,"button",9),r.NdJ("click",function(){return l.close()}),r._uU(18,"Close"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&s&&(r.xp6(10),r.hij("",r.lcZ(11,2,"FORM.create_lpp")," "),r.xp6(4),r.Oqu(r.lcZ(15,4,"FORM.create_bpm")))},pipes:[e.X],styles:[".form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]{padding:10px 40px;cursor:pointer}.form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer}.form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]:first-child{border-bottom:1px solid #dad9d9}"]}),o})()},57311:(P,f,n)=>{n.d(f,{Z:()=>e});var i=n(92070),r=n(18260),u=n(83668),d=n(44522);const c=`${r.N.apiUrl}/lead`;let e=(()=>{class t{constructor(a){this.httpClient=a}getLeadList(a={}){let s=c+"?";return a.campaignName&&(s=s+"campaignName="+a.campaignName+"&"),a.existingCustomerId&&(s=s+"existingCustomerId="+a.existingCustomerId+"&"),a.leadId&&(s=s+"leadId="+a.leadId+"&"),a.contactName&&(s=s+"contactName="+a.contactName+"&"),a.startDate&&(s=s+"startDate="+i(a.startDate).format("YYYY-MM-DD")+"&"),a.endDate&&(s=s+"endDate="+i(a.endDate).format("YYYY-MM-DD")+"&"),a.productId&&(s=s+"productId="+a.productId+"&"),a.sourceCode&&(s=s+"sourceCode="+a.sourceCode+"&"),a.statusCode&&(s=s+"statusCode="+a.statusCode+"&"),this.httpClient.get(s)}}return t.\u0275fac=function(a){return new(a||t)(u.LFG(d.eN))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},46045:(P,f,n)=>{n.d(f,{d:()=>t});var i=n(92070),r=n(18260),u=n(91691),d=n(83668),c=n(44522);const e=`${r.N.apiUrl}/policy`;let t=(()=>{class o extends u.i{constructor(s){super(s,e),this.httpClient=s}getPolicyList(s={}){let l=e+"?";return l=l+"isTeam="+!!s.isTeam+"&",s.startDate&&(l=l+"startDate="+i(s.startDate).format("YYYY-MM-DD")+"&"),s.endDate&&(l=l+"endDate="+i(s.endDate).format("YYYY-MM-DD")+"&"),this.httpClient.get(l)}updateAttachment(s,l){return this.httpClient.put(e+"/attachment",{attachmentId:l+"",policyNo:s})}submitPolicy(s){return this.httpClient.put(e+"/status/submit/"+s,{})}}return o.\u0275fac=function(s){return new(s||o)(d.LFG(c.eN))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},552:(P,f,n)=>{n.d(f,{Q:()=>s});var i=n(82997),v=n(85724),r=n(18260),u=n(91691),d=n(54753),e=n(83668),t=n(44522),o=n(26697);const a=`${r.N.apiUrl}/pagedata`;let s=(()=>{class l extends u.i{constructor(h,E){super(h,a),this.httpClient=h,this.masterData=E}getDetail(h,E,_,p=!1,y=[],m=!1){return this.httpClient.get(a+"/"+h+"/"+E+"/"+_).pipe((0,v.z)(M=>p?function(l,g,h,E=!1){return Array.isArray(g)&&g.length>0?(0,i.of)(g).pipe((0,d.U)(_=>{let p=[];return _.map(m=>{let M=m.data.filter(D=>(D.value+"").startsWith("T-")||(D.value+"").startsWith("TA-")||(D.value+"").startsWith("TU-"));if(M.length>0){let D=M.map(C=>{let O=h.find(T=>T.name==C.column);if(O.masterData)return{codeId:C.value,codeType:O.masterData,langCd:"EN"}});p.push(...D)}}),{result:_,masterPost:p}}),(0,v.z)(_=>_.masterPost.length>0?l.getMasterValue({codeBookRequest:_.masterPost}).pipe((0,d.U)(y=>_.result.map(m=>(m.data=m.data.flatMap(M=>{if((M.value+"").startsWith("T-")||(M.value+"").startsWith("TA-")||(M.value+"").startsWith("TU-")){let D=h.find(O=>O.name==M.column),C=y.findIndex(O=>O.codeId==M.value&&D.masterData==O.codeType);if(C>=0){if(E)return[M,{column:M.column+"Value",value:y[C].codeName}];M.value=y[C].codeName,M.valueCode=y[C].codeId}}return M}),m)))):(0,i.of)(_.result))):(0,i.of)(g)}(this.masterData,M,y,m):(0,i.of)(M)))}deleteData(h,E,_){return this.httpClient.delete(a+"/"+h+"/"+E+"/"+_)}updatePremimun(h){return this.httpClient.put(a+"/resource",h)}}return l.\u0275fac=function(h){return new(h||l)(e.LFG(t.eN),e.LFG(o.D))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},35618:(P,f,n)=>{n.d(f,{f:()=>c});var i=n(18260),v=n(91691),r=n(83668),u=n(44522);const d=`${i.N.apiUrl}/product`;let c=(()=>{class e extends v.i{constructor(o){super(o,d),this.httpClient=o,this.referenceID=null,this.creatingLeadId="0",this.referenceStatus=null}getAll(o){return this.httpClient.get(d+"-view?showInList="+o)}}return e.\u0275fac=function(o){return new(o||e)(r.LFG(u.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},80842:(P,f,n)=>{n.d(f,{G:()=>t});var i=n(92070),r=n(18260),u=n(91691),d=n(83668),c=n(44522);const e=`${r.N.apiUrl}/quotation`;let t=(()=>{class o extends u.i{constructor(s){super(s,e),this.httpClient=s}getQuoList(s={}){let l=e+"?";return l=l+"isTeam="+!!s.isTeam+"&",s.startDate&&(l=l+"startDate="+i(s.startDate).format("YYYY-MM-DD")+"&"),s.endDate&&(l=l+"endDate="+i(s.endDate).format("YYYY-MM-DD")+"&"),this.httpClient.get(l)}}return o.\u0275fac=function(s){return new(s||o)(d.LFG(c.eN))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},52902:(P,f,n)=>{n.d(f,{R:()=>c});var i=n(18260),v=n(91691),r=n(83668),u=n(44522);const d=`${i.N.apiUrl}/renewal-policy`;let c=(()=>{class e extends v.i{constructor(o){super(o,d),this.httpClient=o}getRenewList(o={}){return this.httpClient.post(d+"/search?",o)}confirmRenew(o){return this.httpClient.put(d+"/confirm/"+o,{})}}return e.\u0275fac=function(o){return new(o||e)(r.LFG(u.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},18410:(P,f,n)=>{n.d(f,{J:()=>g});var i=n(86019),v=n(49133),r=n(85993),u=n(55167),d=n(45598),c=n(26025),e=n(57842),t=n(99765),o=n(13468),a=n(78480),s=n(63699),l=n(83668);let g=(()=>{class h{}return h.\u0275fac=function(_){return new(_||h)},h.\u0275mod=l.oAB({type:h}),h.\u0275inj=l.cJS({imports:[[i.ez,v.u5,d.fA,v.UX,r.bz,u.Fk,a.FA,r.M,o.rP,c.X,e.A0,t.Ud,s.j]]}),h})()},37780:(P,f,n)=>{n.d(f,{G:()=>c});var i=n(18260),v=n(91691),r=n(83668),u=n(44522);const d=`${i.N.apiUrl}/travel-risk`;let c=(()=>{class e extends v.i{constructor(o){super(o,d),this.httpClient=o}deleteMany(o){return this.httpClient.delete(d+"/resource/"+o)}getMany(o){return this.httpClient.get(d+"/resource/"+o)}}return e.\u0275fac=function(o){return new(o||e)(r.LFG(u.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);