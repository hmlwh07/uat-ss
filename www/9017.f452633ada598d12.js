"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9017],{99765:(B,I,c)=>{c.d(I,{g1:()=>V,Ud:()=>U});var o=c(83668),v=c(49133),y=c(86019),g=(()=>{return(r=g||(g={}))[r.FINANCIAL=0]="FINANCIAL",r[r.NATURAL=1]="NATURAL",g;var r})();let A=new o.OlP("currency.mask.config");class N{constructor(t){this.htmlInputElement=t}setCursorAt(t){if(this.htmlInputElement.setSelectionRange)this.htmlInputElement.focus(),this.htmlInputElement.setSelectionRange(t,t);else if(this.htmlInputElement.createTextRange){let e=this.htmlInputElement.createTextRange();e.collapse(!0),e.moveEnd("character",t),e.moveStart("character",t),e.select()}}updateValueAndCursor(t,e,s){this.rawValue=t,this.setCursorAt(s-=e-t.length)}get canInputMoreNumbers(){let e=!(this.rawValue.replace(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g,"").length>=this.htmlInputElement.maxLength&&this.htmlInputElement.maxLength>=0),s=this.inputSelection.selectionStart,n=this.inputSelection.selectionEnd,i=!(s==n||!this.htmlInputElement.value.substring(s,n).match(/[^0-9\u0660-\u0669\u06F0-\u06F9]/)),a="0"==this.htmlInputElement.value.substring(0,1);return e||i||a}get inputSelection(){let t=0,e=0;if("number"==typeof this.htmlInputElement.selectionStart&&"number"==typeof this.htmlInputElement.selectionEnd)t=this.htmlInputElement.selectionStart,e=this.htmlInputElement.selectionEnd;else{let s=document.selection.createRange();if(s&&s.parentElement()==this.htmlInputElement){let n=this.htmlInputElement.value.length,i=this.htmlInputElement.value.replace(/\r\n/g,"\n"),a=this.htmlInputElement.createTextRange();a.moveToBookmark(s.getBookmark());let l=this.htmlInputElement.createTextRange();l.collapse(!1),a.compareEndPoints("StartToEnd",l)>-1?t=e=n:(t=-a.moveStart("character",-n),t+=i.slice(0,t).split("\n").length-1,a.compareEndPoints("EndToEnd",l)>-1?e=n:(e=-a.moveEnd("character",-n),e+=i.slice(0,e).split("\n").length-1))}}return{selectionStart:t,selectionEnd:e}}get rawValue(){return this.htmlInputElement&&this.htmlInputElement.value}set rawValue(t){this._storedRawValue=t,this.htmlInputElement&&(this.htmlInputElement.value=t)}get storedRawValue(){return this._storedRawValue||""}}class O{constructor(t,e){this.htmlInputElement=t,this.options=e,this.SINGLE_DIGIT_REGEX=new RegExp(/^[0-9\u0660-\u0669\u06F0-\u06F9]$/),this.ONLY_NUMBERS_REGEX=new RegExp(/[^0-9\u0660-\u0669\u06F0-\u06F9]/g),this.PER_AR_NUMBER=new Map,this.inputManager=new N(t),this.initialize()}initialize(){this.PER_AR_NUMBER.set("\u06f0","0"),this.PER_AR_NUMBER.set("\u06f1","1"),this.PER_AR_NUMBER.set("\u06f2","2"),this.PER_AR_NUMBER.set("\u06f3","3"),this.PER_AR_NUMBER.set("\u06f4","4"),this.PER_AR_NUMBER.set("\u06f5","5"),this.PER_AR_NUMBER.set("\u06f6","6"),this.PER_AR_NUMBER.set("\u06f7","7"),this.PER_AR_NUMBER.set("\u06f8","8"),this.PER_AR_NUMBER.set("\u06f9","9"),this.PER_AR_NUMBER.set("\u0660","0"),this.PER_AR_NUMBER.set("\u0661","1"),this.PER_AR_NUMBER.set("\u0662","2"),this.PER_AR_NUMBER.set("\u0663","3"),this.PER_AR_NUMBER.set("\u0664","4"),this.PER_AR_NUMBER.set("\u0665","5"),this.PER_AR_NUMBER.set("\u0666","6"),this.PER_AR_NUMBER.set("\u0667","7"),this.PER_AR_NUMBER.set("\u0668","8"),this.PER_AR_NUMBER.set("\u0669","9")}addNumber(t){const{decimal:e,precision:s,inputMode:n}=this.options;let i=String.fromCharCode(t);const a=i===this.options.decimal;if(this.rawValue){let l=this.inputSelection.selectionStart,u=this.inputSelection.selectionEnd;const f=this.rawValue.substring(0,l);let h=this.rawValue.substring(u,this.rawValue.length);const d=-1!==f.indexOf(e);n===g.NATURAL&&d&&l===u&&(h=h.substring(1));const _=f+i+h;let m=l+1;if(!a&&i!==this.options.thousands||i!==h[0]){if(!this.SINGLE_DIGIT_REGEX.test(i))return}else m++;this.rawValue=_,this.updateFieldValue(m)}else{let l;this.rawValue=this.applyMask(!1,i),n===g.NATURAL&&s>0&&(l=this.rawValue.indexOf(e),a&&l++),this.updateFieldValue(l)}}applyMask(t,e,s=!1){let{allowNegative:n,decimal:i,precision:a,prefix:l,suffix:u,thousands:f,min:h,max:d,inputMode:_}=this.options,m=(e=t?new Number(e).toFixed(a):e).replace(this.ONLY_NUMBERS_REGEX,"");if(!m&&e!==i)return"";_===g.NATURAL&&!t&&!s&&(m=(e=this.padOrTrimPrecision(e)).replace(this.ONLY_NUMBERS_REGEX,""));let p=m.slice(0,m.length-a).replace(/^\u0660*/g,"").replace(/^\u06F0*/g,"").replace(/^0*/g,"");""==p&&(p="0");let S=parseInt(p);p=p.replace(/\B(?=([0-9\u0660-\u0669\u06F0-\u06F9]{3})+(?![0-9\u0660-\u0669\u06F0-\u06F9]))/g,f),f&&p.startsWith(f)&&(p=p.substring(1));let C=p,R=m.slice(m.length-a),w=parseInt(R)||0,D=e.indexOf("-")>-1;d=this.isNullOrUndefined(d)||this.isNullOrUndefined(h)?d:Math.max(d,h);let M=S+w/Number("1".padEnd(a+1,"0"));return M=D?-M:M,!this.isNullOrUndefined(d)&&M>d?this.applyMask(!0,d+""):!this.isNullOrUndefined(h)&&M<h?this.applyMask(!0,h+""):(a>0&&(C+="0"==C&&R.length<a?i+"0".repeat(a-1)+R:i+R),(D&&n&&0!=M?"-":"")+l+C+u)}padOrTrimPrecision(t){let{decimal:e,precision:s}=this.options,n=t.lastIndexOf(e);-1===n&&(n=t.length,t+=e);let i=t.substring(n).replace(this.ONLY_NUMBERS_REGEX,"");const a=i.length;if(a<s)for(let l=a;l<s;l++)i+="0";else a>s&&(i=i.substring(0,i.length+s-a));return t.substring(0,n)+e+i}clearMask(t){if(this.isNullable()&&""===t)return null;let e=(t||"0").replace(this.options.prefix,"").replace(this.options.suffix,"");return this.options.thousands&&(e=e.replace(new RegExp("\\"+this.options.thousands,"g"),"")),this.options.decimal&&(e=e.replace(this.options.decimal,".")),this.PER_AR_NUMBER.forEach((s,n)=>{const i=new RegExp(n,"g");e=e.replace(i,s)}),parseFloat(e)}changeToNegative(){this.options.allowNegative&&""!=this.rawValue&&"-"!=this.rawValue.charAt(0)&&0!=this.value&&(this.rawValue=this.applyMask(!1,"-"+this.rawValue))}changeToPositive(){this.rawValue=this.applyMask(!1,this.rawValue.replace("-",""))}removeNumber(t){let{decimal:e,thousands:s,prefix:n,suffix:i,inputMode:a}=this.options;if(this.isNullable()&&0==this.value)return void(this.rawValue=null);let l=this.inputSelection.selectionEnd,u=this.inputSelection.selectionStart;const f=this.rawValue.length-i.length;if(l=Math.min(f,Math.max(l,n.length)),u=Math.min(f,Math.max(u,n.length)),u===l&&this.inputSelection.selectionStart!==this.inputSelection.selectionEnd)return void this.updateFieldValue(u);let h=this.rawValue.indexOf(e);-1===h&&(h=this.rawValue.length);let d=0,_="";const m=h<l,p=h+1===l;if(l===u)if(8==t){if(u<=n.length)return;u--,this.rawValue.substr(u,1).match(/\d/)||u--,a===g.NATURAL&&m&&(d=-1,p&&this.value<10&&this.value>-10&&(_+="0"))}else if(46==t||63272==t){if(u===f)return;l++,this.rawValue.substr(u,1).match(/\d/)||(u++,l++)}if(a===g.NATURAL&&u>h){const R=l-u;for(let w=0;w<R;w++)_+="0"}let S=this.rawValue.length-l;this.rawValue=this.rawValue.substring(0,u)+_+this.rawValue.substring(l),this.rawValue.substr(n.length,1)===s&&(this.rawValue=this.rawValue.substring(0,n.length)+this.rawValue.substring(n.length+1),S=Math.min(S,this.rawValue.length-n.length)),this.updateFieldValue(this.rawValue.length-S+d,!0)}updateFieldValue(t,e=!1){let s=this.applyMask(!1,this.rawValue||"",e);t=null==t?this.rawValue.length:t,t=Math.max(this.options.prefix.length,Math.min(t,this.rawValue.length-this.options.suffix.length)),this.inputManager.updateValueAndCursor(s,this.rawValue.length,t)}updateOptions(t){let e=this.value;this.options=t,this.value=e}prefixLength(){return this.options.prefix.length}suffixLength(){return this.options.suffix.length}isNullable(){return this.options.nullable}get canInputMoreNumbers(){return this.inputManager.canInputMoreNumbers}get inputSelection(){return this.inputManager.inputSelection}get rawValue(){return this.inputManager.rawValue}set rawValue(t){this.inputManager.rawValue=t}get storedRawValue(){return this.inputManager.storedRawValue}get value(){return this.clearMask(this.rawValue)}set value(t){this.rawValue=this.applyMask(!0,""+t)}isNullOrUndefined(t){return null==t}}class E{constructor(t,e){this.inputService=new O(t,e)}handleCut(t){setTimeout(()=>{this.inputService.updateFieldValue(),this.setValue(this.inputService.value),this.onModelChange(this.inputService.value)},0)}handleInput(t){let e=this.inputService.inputSelection.selectionStart,s=this.inputService.rawValue.charCodeAt(e-1),n=this.inputService.rawValue.length,i=this.inputService.storedRawValue.length;if(1!=Math.abs(n-i))return this.inputService.updateFieldValue(e),void this.onModelChange(this.inputService.value);this.inputService.rawValue=this.inputService.storedRawValue,n<i&&this.timer(()=>{this.inputService.updateFieldValue(e+1),this.inputService.removeNumber(8),this.onModelChange(this.inputService.value)},0),n>i&&(this.inputService.updateFieldValue(e-1),this.handleKeypressImpl(s))}handleKeydown(t){let e=t.which||t.charCode||t.keyCode;(8==e||46==e||63272==e)&&(t.preventDefault(),this.inputService.inputSelection.selectionStart<=this.inputService.prefixLength()&&this.inputService.inputSelection.selectionEnd>=this.inputService.rawValue.length-this.inputService.suffixLength()?this.clearValue():(this.inputService.removeNumber(e),this.onModelChange(this.inputService.value)))}clearValue(){this.setValue(this.inputService.isNullable()?null:0),this.onModelChange(this.inputService.value)}handleKeypress(t){let e=t.which||t.charCode||t.keyCode;t.preventDefault(),(97!==e||!t.ctrlKey)&&this.handleKeypressImpl(e)}handleKeypressImpl(t){switch(t){case void 0:case 9:case 13:return;case 43:this.inputService.changeToPositive();break;case 45:this.inputService.changeToNegative();break;default:this.inputService.canInputMoreNumbers&&(Math.abs(this.inputService.inputSelection.selectionEnd-this.inputService.inputSelection.selectionStart)==this.inputService.rawValue.length&&this.setValue(null),this.inputService.addNumber(t))}this.onModelChange(this.inputService.value)}handlePaste(t){setTimeout(()=>{this.inputService.updateFieldValue(),this.setValue(this.inputService.value),this.onModelChange(this.inputService.value)},1)}updateOptions(t){this.inputService.updateOptions(t)}getOnModelChange(){return this.onModelChange}setOnModelChange(t){this.onModelChange=t}getOnModelTouched(){return this.onModelTouched}setOnModelTouched(t){this.onModelTouched=t}setValue(t){this.inputService.value=t}timer(t,e){setTimeout(t,e)}}const P={provide:v.JU,useExisting:(0,o.Gpc)(()=>V),multi:!0};let V=(()=>{class r{constructor(e,s,n){this.currencyMaskConfig=e,this.elementRef=s,this.keyValueDiffers=n,this.options={},this.optionsTemplate={align:"right",allowNegative:!0,allowZero:!0,decimal:".",precision:2,prefix:"$ ",suffix:"",thousands:",",nullable:!1,inputMode:g.FINANCIAL},e&&(this.optionsTemplate=e),this.keyValueDiffer=n.find({}).create()}ngAfterViewInit(){this.elementRef.nativeElement.style.textAlign=this.options&&this.options.align?this.options.align:this.optionsTemplate.align}ngDoCheck(){this.keyValueDiffer.diff(this.options)&&(this.elementRef.nativeElement.style.textAlign=this.options.align?this.options.align:this.optionsTemplate.align,this.inputHandler.updateOptions(Object.assign({},this.optionsTemplate,this.options)))}ngOnInit(){this.inputHandler=new E(this.elementRef.nativeElement,Object.assign({},this.optionsTemplate,this.options))}handleBlur(e){this.inputHandler.getOnModelTouched().apply(e)}handleCut(e){this.isChromeAndroid()||!this.isReadOnly()&&this.inputHandler.handleCut(e)}handleInput(e){this.isChromeAndroid()&&!this.isReadOnly()&&this.inputHandler.handleInput(e)}handleKeydown(e){this.isChromeAndroid()||!this.isReadOnly()&&this.inputHandler.handleKeydown(e)}handleKeypress(e){this.isChromeAndroid()||!this.isReadOnly()&&this.inputHandler.handleKeypress(e)}handlePaste(e){this.isChromeAndroid()||!this.isReadOnly()&&this.inputHandler.handlePaste(e)}handleDrop(e){this.isChromeAndroid()||e.preventDefault()}isChromeAndroid(){return/chrome/i.test(navigator.userAgent)&&/android/i.test(navigator.userAgent)}isReadOnly(){return this.elementRef.nativeElement.hasAttribute("readonly")}registerOnChange(e){this.inputHandler.setOnModelChange(e)}registerOnTouched(e){this.inputHandler.setOnModelTouched(e)}setDisabledState(e){this.elementRef.nativeElement.disabled=e}writeValue(e){this.inputHandler.setValue(e)}}return r.\u0275fac=function(e){return new(e||r)(o.Y36(A,8),o.Y36(o.SBq),o.Y36(o.aQg))},r.\u0275dir=o.lG2({type:r,selectors:[["","currencyMask",""]],hostBindings:function(e,s){1&e&&o.NdJ("blur",function(i){return s.handleBlur(i)})("cut",function(i){return s.handleCut(i)})("input",function(i){return s.handleInput(i)})("keydown",function(i){return s.handleKeydown(i)})("keypress",function(i){return s.handleKeypress(i)})("paste",function(i){return s.handlePaste(i)})("drop",function(i){return s.handleDrop(i)})},inputs:{options:"options"},features:[o._Bn([P])]}),r})(),U=(()=>{class r{static forRoot(e){return{ngModule:r,providers:[{provide:A,useValue:e}]}}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[y.ez,v.u5]]}),r})()},90860:(B,I,c)=>{c.d(I,{m:()=>O});var o=c(86019),v=c(49133),y=c(87626),g=c(45598),A=c(57842),N=c(83668);let O=(()=>{class E{}return E.\u0275fac=function(V){return new(V||E)},E.\u0275mod=N.oAB({type:E}),E.\u0275inj=N.cJS({imports:[[o.ez,v.u5,v.UX,y.vi,g.fA,A.A0]]}),E})()}}]);