"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{67160:(O,D,n)=>{n.d(D,{c:()=>u});var r=n(32361),E=n(87683),a=n(33139);const u=(d,c)=>{let e,t;const o=(l,h,p)=>{if("undefined"==typeof document)return;const f=document.elementFromPoint(l,h);f&&c(f)?f!==e&&(s(),i(f,p)):s()},i=(l,h)=>{e=l,t||(t=e);const p=e;(0,r.c)(()=>p.classList.add("ion-activated")),h()},s=(l=!1)=>{if(!e)return;const h=e;(0,r.c)(()=>h.classList.remove("ion-activated")),l&&t!==e&&e.click(),e=void 0};return(0,a.createGesture)({el:d,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>o(l.currentX,l.currentY,E.a),onMove:l=>o(l.currentX,l.currentY,E.b),onEnd:()=>{s(!0),(0,E.h)(),t=void 0}})}},88685:(O,D,n)=>{n.d(D,{g:()=>r});const r=(c,e,t,o,i)=>a(c[1],e[1],t[1],o[1],i).map(s=>E(c[0],e[0],t[0],o[0],s)),E=(c,e,t,o,i)=>i*(3*e*Math.pow(i-1,2)+i*(-3*t*i+3*t+o*i))-c*Math.pow(i-1,3),a=(c,e,t,o,i)=>d((o-=i)-3*(t-=i)+3*(e-=i)-(c-=i),3*t-6*e+3*c,3*e-3*c,c).filter(l=>l>=0&&l<=1),d=(c,e,t,o)=>{if(0===c)return((c,e,t)=>{const o=e*e-4*c*t;return o<0?[]:[(-e+Math.sqrt(o))/(2*c),(-e-Math.sqrt(o))/(2*c)]})(e,t,o);const i=(3*(t/=c)-(e/=c)*e)/3,s=(2*e*e*e-9*e*t+27*(o/=c))/27;if(0===i)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-i),-Math.sqrt(-i)];const l=Math.pow(s/2,2)+Math.pow(i/3,3);if(0===l)return[Math.pow(s/2,.5)-e/3];if(l>0)return[Math.pow(-s/2+Math.sqrt(l),1/3)-Math.pow(s/2+Math.sqrt(l),1/3)-e/3];const h=Math.sqrt(Math.pow(-i/3,3)),p=Math.acos(-s/(2*Math.sqrt(Math.pow(-i/3,3)))),f=2*Math.pow(h,1/3);return[f*Math.cos(p/3)-e/3,f*Math.cos((p+2*Math.PI)/3)-e/3,f*Math.cos((p+4*Math.PI)/3)-e/3]}},75062:(O,D,n)=>{n.d(D,{i:()=>r});const r=E=>E&&""!==E.dir?"rtl"===E.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},11112:(O,D,n)=>{n.r(D),n.d(D,{startFocusVisible:()=>u});const r="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],u=d=>{let c=[],e=!0;const t=d?d.shadowRoot:document,o=d||document.body,i=_=>{c.forEach(g=>g.classList.remove(r)),_.forEach(g=>g.classList.add(r)),c=_},s=()=>{e=!1,i([])},l=_=>{e=a.includes(_.key),e||i([])},h=_=>{if(e&&_.composedPath){const g=_.composedPath().filter(M=>!!M.classList&&M.classList.contains("ion-focusable"));i(g)}},p=()=>{t.activeElement===o&&i([])};return t.addEventListener("keydown",l),t.addEventListener("focusin",h),t.addEventListener("focusout",p),t.addEventListener("touchstart",s),t.addEventListener("mousedown",s),{destroy:()=>{t.removeEventListener("keydown",l),t.removeEventListener("focusin",h),t.removeEventListener("focusout",p),t.removeEventListener("touchstart",s),t.removeEventListener("mousedown",s)},setFocus:i}}},34118:(O,D,n)=>{n.d(D,{C:()=>d,a:()=>a,d:()=>u});var r=n(49671),E=n(41643);const a=function(){var c=(0,r.Z)(function*(e,t,o,i,s,l){var h;if(e)return e.attachViewToDom(t,o,s,i);if(!(l||"string"==typeof o||o instanceof HTMLElement))throw new Error("framework delegate is missing");const p="string"==typeof o?null===(h=t.ownerDocument)||void 0===h?void 0:h.createElement(o):o;return i&&i.forEach(f=>p.classList.add(f)),s&&Object.assign(p,s),t.appendChild(p),yield new Promise(f=>(0,E.c)(p,f)),p});return function(t,o,i,s,l,h){return c.apply(this,arguments)}}(),u=(c,e)=>{if(e){if(c)return c.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},d=()=>{let c,e;return{attachViewToDom:function(){var i=(0,r.Z)(function*(s,l,h={},p=[]){var f,_;if(c=s,l){const M="string"==typeof l?null===(f=c.ownerDocument)||void 0===f?void 0:f.createElement(l):l;p.forEach(m=>M.classList.add(m)),Object.assign(M,h),c.appendChild(M),yield new Promise(m=>(0,E.c)(M,m))}else if(c.children.length>0){const M=null===(_=c.ownerDocument)||void 0===_?void 0:_.createElement("div");p.forEach(m=>M.classList.add(m)),M.append(...c.children),c.appendChild(M)}const g=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),c.parentNode.insertBefore(e,c),g.appendChild(c),c});return function(l,h){return i.apply(this,arguments)}}(),removeViewFromDom:()=>(c&&e&&(e.parentNode.insertBefore(c,e),e.remove()),Promise.resolve())}}},87683:(O,D,n)=>{n.d(D,{a:()=>a,b:()=>u,c:()=>E,d:()=>c,h:()=>d});const r={getEngine(){var e;const t=window;return t.TapticEngine||(null===(e=t.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const o=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:o})},notification(e){const t=this.getEngine();if(!t)return;const o=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:o})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},E=()=>{r.selection()},a=()=>{r.selectionStart()},u=()=>{r.selectionChanged()},d=()=>{r.selectionEnd()},c=e=>{r.impact(e)}},91473:(O,D,n)=>{n.d(D,{a:()=>i,b:()=>h,f:()=>s,g:()=>o,p:()=>p,s:()=>l});var r=n(49671),E=n(41643),a=n(77208);const d="ion-content",c=".ion-content-scroll-host",e=`${d}, ${c}`,t=f=>f&&"ION-CONTENT"===f.tagName,o=function(){var f=(0,r.Z)(function*(_){return t(_)?(yield new Promise(g=>(0,E.c)(_,g)),_.getScrollElement()):_});return function(g){return f.apply(this,arguments)}}(),i=f=>f.querySelector(c)||f.querySelector(e),s=f=>f.closest(e),l=(f,_)=>t(f)?f.scrollToTop(_):Promise.resolve(f.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),h=(f,_,g,M)=>t(f)?f.scrollByPoint(_,g,M):Promise.resolve(f.scrollBy({top:g,left:_,behavior:M>0?"smooth":"auto"})),p=f=>(0,a.a)(f,d)},77208:(O,D,n)=>{n.d(D,{a:()=>a,b:()=>E,p:()=>r});const r=u=>console.warn(`[Ionic Warning]: ${u}`),E=(u,...d)=>console.error(`[Ionic Error]: ${u}`,...d),a=(u,...d)=>console.error(`<${u.tagName.toLowerCase()}> must be used inside ${d.join(" or ")}.`)},28439:(O,D,n)=>{n.d(D,{s:()=>r});const r=t=>{try{if(t instanceof class e{constructor(o){this.value=o}})return t.value;if(!u()||"string"!=typeof t||""===t)return t;const o=document.createDocumentFragment(),i=document.createElement("div");o.appendChild(i),i.innerHTML=t,c.forEach(p=>{const f=o.querySelectorAll(p);for(let _=f.length-1;_>=0;_--){const g=f[_];g.parentNode?g.parentNode.removeChild(g):o.removeChild(g);const M=a(g);for(let m=0;m<M.length;m++)E(M[m])}});const s=a(o);for(let p=0;p<s.length;p++)E(s[p]);const l=document.createElement("div");l.appendChild(o);const h=l.querySelector("div");return null!==h?h.innerHTML:l.innerHTML}catch(o){return console.error(o),""}},E=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let i=t.attributes.length-1;i>=0;i--){const s=t.attributes.item(i),l=s.name;if(!d.includes(l.toLowerCase())){t.removeAttribute(l);continue}const h=s.value;null!=h&&h.toLowerCase().includes("javascript:")&&t.removeAttribute(l)}const o=a(t);for(let i=0;i<o.length;i++)E(o[i])},a=t=>null!=t.children?t.children:t.childNodes,u=()=>{var t;const o=window,i=null===(t=null==o?void 0:o.Ionic)||void 0===t?void 0:t.config;return!i||(i.get?i.get("sanitizerEnabled",!0):!0===i.sanitizerEnabled||void 0===i.sanitizerEnabled)},d=["class","id","href","src","name","slot"],c=["script","style","iframe","meta","link","object","embed"]},48117:(O,D,n)=>{n.d(D,{a:()=>r,b:()=>s,c:()=>c,d:()=>l,e:()=>m,f:()=>a,g:()=>E,h:()=>g,i:()=>e,j:()=>o,k:()=>h,l:()=>t,m:()=>d,n:()=>u,o:()=>i,p:()=>p,q:()=>f,r:()=>_,s:()=>M});const r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},51316:(O,D,n)=>{n.r(D),n.d(D,{KEYBOARD_DID_CLOSE:()=>E,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>M,keyboardDidClose:()=>p,keyboardDidOpen:()=>l,keyboardDidResize:()=>h,resetKeyboardAssist:()=>e,setKeyboardClose:()=>s,setKeyboardOpen:()=>i,startKeyboardAssist:()=>t,trackViewportChanges:()=>g});const r="ionKeyboardDidShow",E="ionKeyboardDidHide";let u={},d={},c=!1;const e=()=>{u={},d={},c=!1},t=m=>{o(m),m.visualViewport&&(d=M(m.visualViewport),m.visualViewport.onresize=()=>{g(m),l()||h(m)?i(m):p(m)&&s(m)})},o=m=>{m.addEventListener("keyboardDidShow",v=>i(m,v)),m.addEventListener("keyboardDidHide",()=>s(m))},i=(m,v)=>{f(m,v),c=!0},s=m=>{_(m),c=!1},l=()=>!c&&u.width===d.width&&(u.height-d.height)*d.scale>150,h=m=>c&&!p(m),p=m=>c&&d.height===m.innerHeight,f=(m,v)=>{const C=new CustomEvent(r,{detail:{keyboardHeight:v?v.keyboardHeight:m.innerHeight-d.height}});m.dispatchEvent(C)},_=m=>{const v=new CustomEvent(E);m.dispatchEvent(v)},g=m=>{u=Object.assign({},d),d=M(m.visualViewport)},M=m=>({width:Math.round(m.width),height:Math.round(m.height),offsetTop:m.offsetTop,offsetLeft:m.offsetLeft,pageTop:m.pageTop,pageLeft:m.pageLeft,scale:m.scale})},17741:(O,D,n)=>{n.d(D,{S:()=>E});const E={bubbles:{dur:1e3,circles:9,fn:(a,u,d)=>{const c=a*u/d-a+"ms",e=2*Math.PI*u/d;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":c}}}},circles:{dur:1e3,circles:8,fn:(a,u,d)=>{const c=u/d,e=a*c-a+"ms",t=2*Math.PI*c;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,u)=>({r:6,style:{left:9-9*u+"px","animation-delay":-110*u+"ms"}})},lines:{dur:1e3,lines:8,fn:(a,u,d)=>({y1:14,y2:26,style:{transform:`rotate(${360/d*u+(u<d/2?180:-180)}deg)`,"animation-delay":a*u/d-a+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(a,u,d)=>({y1:12,y2:20,style:{transform:`rotate(${360/d*u+(u<d/2?180:-180)}deg)`,"animation-delay":a*u/d-a+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(a,u,d)=>({y1:17,y2:29,style:{transform:`rotate(${30*u+(u<6?180:-180)}deg)`,"animation-delay":a*u/d-a+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(a,u,d)=>({y1:12,y2:20,style:{transform:`rotate(${30*u+(u<6?180:-180)}deg)`,"animation-delay":a*u/d-a+"ms"}})}}},15713:(O,D,n)=>{n.r(D),n.d(D,{createSwipeBackGesture:()=>d});var r=n(41643),E=n(75062),a=n(33139);n(43509);const d=(c,e,t,o,i)=>{const s=c.ownerDocument.defaultView,l=(0,E.i)(c),p=m=>l?-m.deltaX:m.deltaX;return(0,a.createGesture)({el:c,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:m=>(m=>{const{startX:y}=m;return l?y>=s.innerWidth-50:y<=50})(m)&&e(),onStart:t,onMove:m=>{const y=p(m)/s.innerWidth;o(y)},onEnd:m=>{const v=p(m),y=s.innerWidth,C=v/y,T=(m=>l?-m.velocityX:m.velocityX)(m),P=T>=0&&(T>.2||v>y/2),L=(P?1-C:C)*y;let I=0;if(L>5){const w=L/Math.abs(T);I=Math.min(w,540)}i(P,C<=0?.01:(0,r.k)(0,C,.9999),I)}})}},92854:(O,D,n)=>{n.d(D,{c:()=>a,g:()=>d,h:()=>E,o:()=>e});var r=n(49671);const E=(t,o)=>null!==o.closest(t),a=(t,o)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},o):o,d=t=>{const o={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(i=>null!=i).map(i=>i.trim()).filter(i=>""!==i):[])(t).forEach(i=>o[i]=!0),o},c=/^[a-z][a-z0-9+\-.]*:/,e=function(){var t=(0,r.Z)(function*(o,i,s,l){if(null!=o&&"#"!==o[0]&&!c.test(o)){const h=document.querySelector("ion-router");if(h)return null!=i&&i.preventDefault(),h.push(o,s,l)}return!1});return function(i,s,l,h){return t.apply(this,arguments)}}()},93841:(O,D,n)=>{n.d(D,{e:()=>t});var r=n(15439),a=n(92340),u=n(38313),d=n(5e3),c=n(40520);const e=`${a.N.apiUrl}/activity`;let t=(()=>{class o extends u.i{constructor(s){super(s,e),this.httpClient=s}getActivityList(s={}){let l=e+"?isTeam=true&";return s.type&&(l=l+"type="+s.type+"&"),s.title&&(l=l+"title="+s.title+"&"),s.status&&(l=l+"status="+s.status+"&"),s.startDate&&(l=l+"startDate="+r(s.startDate).format("YYYY-MM-DD")+"&"),s.endDate&&(l=l+"endDate="+r(s.endDate).format("YYYY-MM-DD")+"&"),this.httpClient.get(l)}}return o.\u0275fac=function(s){return new(s||o)(d.LFG(c.eN))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},59257:(O,D,n)=>{n.d(D,{s:()=>h});var r=n(92340),E=n(38313),a=n(5e3),u=n(40520);const d=`${r.N.apiUrl}/dashboard/agent`,c=`${r.N.apiUrl}/dashboard/lead-activity/count`,e=`${r.N.apiUrl}/dashboard/resent-operation`,t=`${r.N.apiUrl}/dashboard/today-campaign`,o=`${r.N.apiUrl}/dashboard/follow-up`,i=`${r.N.apiUrl}/dashboard/backlog`,s=`${r.N.apiUrl}/dashboard/assign-lead`,l=`${r.N.apiUrl}/dashboard/sale-active-agent`;let h=(()=>{class p extends E.i{constructor(_){super(_,d),this.httpClient=_}getList(_={}){let g=d+"?";return _.empId&&(g=g+"empId="+_.empId+"&"),this.httpClient.get(g)}getLeadList(_={}){let g=c+"?";return _.empId&&(g=g+"empId="+_.empId+"&"),this.httpClient.get(g)}getRecentList(_={}){let g=e+"?";return _.empId&&(g=g+"empId="+_.empId+"&"),this.httpClient.get(g)}getCampaignList(_={}){let g=t+"?";return _.empId&&(g=g+"empId="+_.empId+"&"),this.httpClient.get(g)}getBacklogList(_={}){let g=i+"?";return _.empId&&(g=g+"empId="+_.empId+"&"),this.httpClient.get(g)}getLeadAssignList(_={}){let g=s+"?";return _.empId&&(g=g+"empId="+_.empId+"&"),this.httpClient.get(g)}getFollowupList(_={}){let g=o+"?";return _.empId&&(g=g+"empId="+_.empId+"&"),this.httpClient.get(g)}getAgentList(_={}){let g=l+"?";return _.empId&&(g=g+"empId="+_.empId+"&"),this.httpClient.get(g)}}return p.\u0275fac=function(_){return new(_||p)(a.LFG(u.eN))},p.\u0275prov=a.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},99156:(O,D,n)=>{n.r(D),n.d(D,{DashboardModule:()=>g,DashboardShareModule:()=>_});var r=n(69808),E=n(96592),a=n(50585),u=n(34436);const d=[{title:"Group Name",type:u.Y.FEILD,field:"pageName"},{title:"Simple Data",type:u.Y.FEILD,field:"simpleTest"},{title:"Actions",type:u.Y.ACTION,field:"actions",btn:{edit:!0,delete:!0}}],c=["pageName","simpleTest","actions"];var e=n(93230),t=n(5e3),o=n(78007),i=n(63272),s=n(25492);let l=(()=>{class M{constructor(v,y,C,T,A){this.router=v,this.uiService=y,this.modalService=C,this.cdRef=T,this.alertService=A,this.forms=[],this.form={id:"",name:""},this.ELEMENT_COL=d,this.displayedColumns=c,this.unsubscribe=[],this.ELEMENT_DATA=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"},{position:11,name:"Sodium",weight:22.9897,symbol:"Na"},{position:12,name:"Magnesium",weight:24.305,symbol:"Mg"},{position:13,name:"Aluminum",weight:26.9815,symbol:"Al"},{position:14,name:"Silicon",weight:28.0855,symbol:"Si"},{position:15,name:"Phosphorus",weight:30.9738,symbol:"P"},{position:16,name:"Sulfur",weight:32.065,symbol:"S"},{position:17,name:"Chlorine",weight:35.453,symbol:"Cl"},{position:18,name:"Argon",weight:39.948,symbol:"Ar"},{position:19,name:"Potassium",weight:39.0983,symbol:"K"},{position:20,name:"Calcium",weight:40.078,symbol:"Ca"}]}ngOnInit(){this.getList()}getList(){this.uiService.getByType().toPromise().then(v=>{v&&(this.forms=v.forms,this.cdRef.detectChanges(),this.matTable.reChangeData())})}ngOnDestroy(){this.unsubscribe.forEach(v=>v.unsubscribe())}delete(v,y){this.alertService.activate("Are you sure want to delete?","Warning Message").then(C=>{C&&this.uiService.delete(y).toPromise().then(T=>{T&&this.alertService.activate("This record was deleted","Success Message").then(A=>{}),this.forms.splice(v,1),this.cdRef.detectChanges(),this.matTable.reChangeData()})})}edit(v,y={}){const C=this.modalService.open(a.h,{size:"md",backdrop:!1});C.componentInstance.oldData=y,C.componentInstance.id=y.dyProductID,C.componentInstance.name=JSON.parse(JSON.stringify(y)).pageName,C.result.then(()=>{},T=>{T&&("save"==T.type?this.submit(T.data):"edit"==T.type&&(this.forms[v]=T.data,this.cdRef.detectChanges(),this.matTable.reChangeData()))})}actionBtn(v){let y=this.forms.findIndex(C=>C.dyProductID==v.data.dyProductID);"edit"==v.cmd?this.editLayout(v.data):"delete"==v.cmd?this.delete(y,v.data.dyProductID):"view"==v.cmd&&this.editLayout(v.data)}editLayout(v){this.uiService.selectedForm=v,this.router.navigateByUrl("/config-layout")}viewLayout(v){this.uiService.selectedForm=v,this.router.navigateByUrl("/product-form")}submit(v){let y={pageName:v.pageName,config:JSON.stringify({}),simpleTest:"nothing here",type:"Form"};this.uiService.save(y).toPromise().then(C=>{C&&(this.uiService.selectedForm=C,this.router.navigateByUrl("/config-layout"))})}}return M.\u0275fac=function(v){return new(v||M)(t.Y36(E.F0),t.Y36(o.q),t.Y36(i.FF),t.Y36(t.sBO),t.Y36(s.c))},M.\u0275cmp=t.Xpm({type:M,selectors:[["app-dashboard"]],viewQuery:function(v,y){if(1&v&&t.Gf(e.I,5),2&v){let C;t.iGM(C=t.CRH())&&(y.matTable=C.first)}},decls:12,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","btn-circle",3,"click"],[1,"flaticon2-plus"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","emitter"]],template:function(v,y){1&v&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"Page Groups List"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return y.edit(-1)}),t._UZ(9,"span",8),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",9),t.TgZ(11,"app-material-table-view",10),t.NdJ("emitter",function(T){return y.actionBtn(T)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&v&&(t.xp6(11),t.Q6J("data",y.forms)("colum",y.ELEMENT_COL)("displayedColumns",y.displayedColumns))},directives:[e.I],styles:[""]}),M})();var h=n(93075),p=n(69544),f=n(50282);let _=(()=>{class M{}return M.\u0275fac=function(v){return new(v||M)},M.\u0275mod=t.oAB({type:M}),M.\u0275inj=t.cJS({imports:[[r.ez,p.vi,h.u5,h.UX,f.fA]]}),M})(),g=(()=>{class M{}return M.\u0275fac=function(v){return new(v||M)},M.\u0275mod=t.oAB({type:M}),M.\u0275inj=t.cJS({imports:[[r.ez,p.vi,h.u5,h.UX,f.fA,_,E.Bz.forChild([{path:"",component:l}])]]}),M})()},50585:(O,D,n)=>{n.d(D,{h:()=>c});var r=n(5e3),E=n(63272),a=n(78007),u=n(25492),d=n(93075);let c=(()=>{class e{constructor(o,i,s){this.modal=o,this.uiService=i,this.alertService=s,this.oldData={},this.subscriptions=[]}ngOnInit(){}save(){let o=Object.assign(Object.assign({},this.oldData),{pageName:this.name});this.id?this.uiService.updateNoID(o).toPromise().then(i=>{i&&this.modal.dismiss({data:o,type:"edit"})}):this.modal.dismiss({data:o,type:"save"})}ngOnDestroy(){this.subscriptions.forEach(o=>o.unsubscribe())}deleteEditModal(){this.alertService.activate("Are you sure want to delete?","Warning Message").then(o=>{o&&this.modal.dismiss({type:"delete"})})}}return e.\u0275fac=function(o){return new(o||e)(r.Y36(E.Kz),r.Y36(a.q),r.Y36(u.c))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-edit-modal"]],decls:14,vars:3,consts:[[1,"modal-content"],[1,"modal-header"],["id","example-modal-sizes-title-lg",1,"modal-title","h4","left-border-image"],[1,"overlay","overlay-block","cursor-default","modal-body"],[1,"form-group"],["type","text","name","name","placeholder","",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"modal-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","submit",1,"btn","btn-primary","btn-elevate",3,"disabled","click"]],template:function(o,i){1&o&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r._uU(3),r.qZA(),r.qZA(),r.TgZ(4,"div",3),r.TgZ(5,"div",4),r.TgZ(6,"label"),r._uU(7,"Group Name"),r.qZA(),r.TgZ(8,"input",5),r.NdJ("ngModelChange",function(l){return i.name=l}),r.qZA(),r.qZA(),r.qZA(),r.TgZ(9,"div",6),r.TgZ(10,"button",7),r.NdJ("click",function(){return i.modal.dismiss()}),r._uU(11,"Cancel"),r.qZA(),r.TgZ(12,"button",8),r.NdJ("click",function(){return i.save()}),r._uU(13,"Save"),r.qZA(),r.qZA(),r.qZA()),2&o&&(r.xp6(3),r.hij(" ",i.id?"Edit":"Create"," Group Name "),r.xp6(5),r.Q6J("ngModel",i.name),r.xp6(4),r.Q6J("disabled",!i.name))},directives:[d.Fj,d.JJ,d.On],styles:[""]}),e})()},41318:(O,D,n)=>{n.d(D,{xT:()=>a});let a=(()=>{class u{}return u.GRAND_DISCOUNT=0,u.HIGH_DISCOUNT=0,u})()},19219:(O,D,n)=>{n.d(D,{i:()=>c});var r=n(38313),E=n(92340),a=n(5e3),u=n(40520);const d=`${E.N.apiUrl}/fna`;let c=(()=>{class e extends r.i{constructor(o){super(o,d),this.httpClient=o}getAll(){return this.httpClient.get(d)}getFNAAllByLeaId(o){return this.httpClient.get(d+"/"+o)}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(u.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},76285:(O,D,n)=>{n.d(D,{P:()=>t});var r=n(70655),E=n(77092),a=n(5e3),u=n(63272),d=n(32972),c=n(90089),e=n(98807);let t=(()=>{class o{constructor(s,l,h){this.modal=s,this.fnaService=l,this.authService=h,this.user=new E.T,this.leadId="",this.customer=null,this.conductedBy=null}ngOnInit(){this.user=this.authService.currentUserValue}close(){this.modal.dismiss(null)}chooseFNA(s){return(0,r.mG)(this,void 0,void 0,function*(){let l;this.customer&&(l={leadId:this.leadId,customerId:this.customer.customerId,customerName:this.customer.customerName,fnaType:s,grandDiscount:0,highDiscount:0,id:0,conductedBy:this.conductedBy,createdAt:this.formatDateDDMMYYY(new Date),createdBy:this.user.id,createdByName:this.user.username,updatedAt:new Date,fnaId:null,type:this.customer.customerType,pageStatus:"create",products:[""]}),yield this.fnaService.saveFNA(l).toPromise().then(h=>{h&&(l.fnaId=h)}),this.modal.dismiss(l)})}formatDateDDMMYYY(s){var l=new Date(s),h=""+(l.getMonth()+1),p=""+l.getDate(),f=l.getFullYear();return h.length<2&&(h="0"+h),p.length<2&&(p="0"+p),[p,h,f].join("/")}}return o.\u0275fac=function(s){return new(s||o)(a.Y36(u.Kz),a.Y36(d.T),a.Y36(c.e8))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-fna-type"]],decls:19,vars:6,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"form"],[1,"col-12",3,"click"],[1,"btn-group",2,"width","100%","display","block","margin","24px 0"],["type","button",1,"btn",2,"max-width","120px","background","#005f99","color","#fff","float","right","margin-right","24px",3,"click"]],template:function(s,l){1&s&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a.TgZ(4,"div",4),a.TgZ(5,"h3",5),a._uU(6,"FNA Type"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(7,"div",6),a.TgZ(8,"div",7),a.NdJ("click",function(){return l.chooseFNA("LPP")}),a.TgZ(9,"label"),a._uU(10),a.ALo(11,"translate"),a.qZA(),a.qZA(),a.TgZ(12,"div",7),a.NdJ("click",function(){return l.chooseFNA("BPM")}),a.TgZ(13,"label"),a._uU(14),a.ALo(15,"translate"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(16,"div",8),a.TgZ(17,"button",9),a.NdJ("click",function(){return l.close()}),a._uU(18,"Close"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&s&&(a.xp6(10),a.hij("",a.lcZ(11,2,"FORM.create_lpp")," "),a.xp6(4),a.Oqu(a.lcZ(15,4,"FORM.create_bpm")))},pipes:[e.X],styles:[".form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]{padding:10px 40px;cursor:pointer}.form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer}.form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]:first-child{border-bottom:1px solid #dad9d9}"]}),o})()},55849:(O,D,n)=>{n.d(D,{Z:()=>e});var r=n(15439),a=n(92340),u=n(5e3),d=n(40520);const c=`${a.N.apiUrl}/lead`;let e=(()=>{class t{constructor(i){this.httpClient=i}getLeadList(i={}){let s=c+"?";return i.campaignName&&(s=s+"campaignName="+i.campaignName+"&"),i.existingCustomerId&&(s=s+"existingCustomerId="+i.existingCustomerId+"&"),i.leadId&&(s=s+"leadId="+i.leadId+"&"),i.contactName&&(s=s+"contactName="+i.contactName+"&"),i.startDate&&(s=s+"startDate="+r(i.startDate).format("YYYY-MM-DD")+"&"),i.endDate&&(s=s+"endDate="+r(i.endDate).format("YYYY-MM-DD")+"&"),i.productId&&(s=s+"productId="+i.productId+"&"),i.sourceCode&&(s=s+"sourceCode="+i.sourceCode+"&"),i.statusCode&&(s=s+"statusCode="+i.statusCode+"&"),this.httpClient.get(s)}}return t.\u0275fac=function(i){return new(i||t)(u.LFG(d.eN))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},32022:(O,D,n)=>{n.d(D,{Q:()=>s});var r=n(39646),E=n(95577),a=n(92340),u=n(38313),d=n(54004),e=n(5e3),t=n(40520),o=n(27670);const i=`${a.N.apiUrl}/pagedata`;let s=(()=>{class l extends u.i{constructor(p,f){super(p,i),this.httpClient=p,this.masterData=f}getDetail(p,f,_,g=!1,M=[],m=!1){return this.httpClient.get(i+"/"+p+"/"+f+"/"+_).pipe((0,E.z)(v=>g?function c(l,h,p,f=!1){return Array.isArray(h)&&h.length>0?(0,r.of)(h).pipe((0,d.U)(_=>{let g=[];return _.map(m=>{let v=m.data.filter(y=>(y.value+"").startsWith("T-")||(y.value+"").startsWith("TA-")||(y.value+"").startsWith("TU-"));if(v.length>0){let y=v.map(C=>{let T=p.find(A=>A.name==C.column);if(T.masterData)return{codeId:C.value,codeType:T.masterData,langCd:"EN"}});g.push(...y)}}),{result:_,masterPost:g}}),(0,E.z)(_=>_.masterPost.length>0?l.getMasterValue({codeBookRequest:_.masterPost}).pipe((0,d.U)(M=>_.result.map(m=>(m.data=m.data.flatMap(v=>{if((v.value+"").startsWith("T-")||(v.value+"").startsWith("TA-")||(v.value+"").startsWith("TU-")){let y=p.find(T=>T.name==v.column),C=M.findIndex(T=>T.codeId==v.value&&y.masterData==T.codeType);if(C>=0){if(f)return[v,{column:v.column+"Value",value:M[C].codeName}];v.value=M[C].codeName,v.valueCode=M[C].codeId}}return v}),m)))):(0,r.of)(_.result))):(0,r.of)(h)}(this.masterData,v,M,m):(0,r.of)(v)))}deleteData(p,f,_){return this.httpClient.delete(i+"/"+p+"/"+f+"/"+_)}updatePremimun(p){return this.httpClient.put(i+"/resource",p)}}return l.\u0275fac=function(p){return new(p||l)(e.LFG(t.eN),e.LFG(o.D))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},75943:(O,D,n)=>{n.d(D,{G:()=>t});var r=n(15439),a=n(92340),u=n(38313),d=n(5e3),c=n(40520);const e=`${a.N.apiUrl}/quotation`;let t=(()=>{class o extends u.i{constructor(s){super(s,e),this.httpClient=s}getQuoList(s={}){let l=e+"?";return l=l+"isTeam="+!!s.isTeam+"&",s.startDate&&(l=l+"startDate="+r(s.startDate).format("YYYY-MM-DD")+"&"),s.endDate&&(l=l+"endDate="+r(s.endDate).format("YYYY-MM-DD")+"&"),this.httpClient.get(l)}}return o.\u0275fac=function(s){return new(s||o)(d.LFG(c.eN))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},84161:(O,D,n)=>{n.d(D,{R:()=>c});var r=n(92340),E=n(38313),a=n(5e3),u=n(40520);const d=`${r.N.apiUrl}/renewal-policy`;let c=(()=>{class e extends E.i{constructor(o){super(o,d),this.httpClient=o}getRenewList(o={}){return this.findAll()}confirmRenew(o){return this.httpClient.put(d+"/confirm/"+o,{})}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(u.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},72363:(O,D,n)=>{n.d(D,{J:()=>l});var r=n(69808),E=n(93075),a=n(63272),u=n(84095),d=n(50282),c=n(42115),e=n(64537),t=n(8202),o=n(98558),i=n(65884),s=n(5e3);let l=(()=>{class h{}return h.\u0275fac=function(f){return new(f||h)},h.\u0275mod=s.oAB({type:h}),h.\u0275inj=s.cJS({imports:[[r.ez,E.u5,d.fA,E.UX,a.bz,u.Fk,i.FA,a.M,o.rP,c.X,e.A0,t.Ud]]}),h})()},59241:(O,D,n)=>{n.d(D,{G:()=>c});var r=n(92340),E=n(38313),a=n(5e3),u=n(40520);const d=`${r.N.apiUrl}/travel-risk`;let c=(()=>{class e extends E.i{constructor(o){super(o,d),this.httpClient=o}deleteMany(o){return this.httpClient.delete(d+"/resource/"+o)}getMany(o){return this.httpClient.get(d+"/resource/"+o)}}return e.\u0275fac=function(o){return new(o||e)(a.LFG(u.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);