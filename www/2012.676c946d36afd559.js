"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2012],{15346:(T,g,l)=>{l.d(g,{X:()=>f});var p=l(83668),r=l(59832);let f=(()=>{class u{constructor(d){this._languageService=d}transform(d){if(d){let _=this._languageService.getSelectedLanguage(),t=d.split(".");if(t.length>=2)try{return this._languageService.langs[_][t[0]][t[1]]||t[1]}catch(h){return d}}return d}}return u.\u0275fac=function(d){return new(d||u)(p.Y36(r.K,16))},u.\u0275pipe=p.Yjl({name:"translate",type:u,pure:!1}),u})()},12012:(T,g,l)=>{l.r(g),l.d(g,{ResetPasswordModule:()=>Y});var p=l(86019),r=l(49133),f=l(85993),u=l(70933),v=l(4205),d=l(45598),_=l(78480),t=l(83668),h=l(18260),m=l(91691),w=l(44522);const A=`${h.N.apiUrl}/reset/password`,x=`${h.N.apiUrl}/otp`,b=`${h.N.apiUrl}/verify/otp`,I=`${h.N.apiUrl}/verify/password`;let P=(()=>{class n extends m.i{constructor(e){super(e,I),this.httpClient=e}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),Z=(()=>{class n extends m.i{constructor(e){super(e,A),this.httpClient=e}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),C=(()=>{class n extends m.i{constructor(e){super(e,x),this.httpClient=e}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),F=(()=>{class n extends m.i{constructor(e){super(e,b),this.httpClient=e}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(w.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const k=["otpInputElement"];function q(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",2),t.TgZ(1,"label"),t.TgZ(2,"input",3,4),t.NdJ("focus",function(){const i=t.CHM(e).index;return t.oxw().handleFocus(i)})("keyup",function(o){const c=t.CHM(e).index;return t.oxw().handleKeyup(o.key,c)})("keyup.arrowLeft",function(){const i=t.CHM(e).index;return t.oxw().handleLeftArrow(i)})("keyup.arrowRight",function(){const i=t.CHM(e).index;return t.oxw().handleRightArrow(i)})("keydown.backspace",function(){const i=t.CHM(e).index;return t.oxw().handleKeydown(i)}),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=a.$implicit,s=a.index,o=t.oxw();t.Q6J("ngClass",null==o.config.classList?null:o.config.classList.inputBox),t.xp6(1),t.uIk("aria-label",o.getAriaLabelByIndex(s)),t.xp6(1),t.Q6J("id","ngx-otp-input-"+s)("formControl",e)("ngxOtpPattern",o.pattern)("type",o.config.isPasswordInput?"password":"text")("ngClass",o.classList[s])}}let M=(()=>{class n{constructor(){this.ngxOtpArray=new r.Oe([]),this.focusedInputHasValue=!1,this.lastFocus=0,this.defaultAriaLabel="One time password input",this.ariaLabels=[],this.classList=[],this.disable=!1,this.otpChange=new t.vpe,this.fill=new t.vpe}get ngxOtpArrayControls(){return this.ngxOtpArray.controls}set status(e){this.ngxOtpStatus=e,this.setInputClasses()}onPaste(e){e.preventDefault(),this.setValue(e.clipboardData.getData("text"))}ngOnInit(){this.setUpOtpForm(),this.setUpAriaLabels(),this.setInputClasses(),this.otpFormChangeListener(),this.handleDisable(this.disable),void 0===this.config.autoblur&&(this.config.autoblur=!0)}ngAfterViewInit(){(this.config.numericInputMode||!this.config.pattern)&&this.otpInputElements.map(e=>{e.nativeElement.setAttribute("inputmode","numeric"),e.nativeElement.setAttribute("pattern","[0-9]*")}),this.config.autofocus&&this.setFocus(0)}ngOnChanges(e){e.hasOwnProperty("disable")&&this.handleDisable(this.disable)}ngOnDestroy(){this.ngxOtpArray$.unsubscribe()}getAriaLabelByIndex(e){return this.ariaLabels[e]?this.ariaLabels[e]:this.defaultAriaLabel}handleFocus(e){this.lastFocus=e,this.getInputElementByIndex(e).select()}handleKeyup(e,s){this.pattern.test(e)&&"Backspace"!==e?(this.getFormControlByIndex(s).setValue(e),this.stepForward(s)):"Backspace"===e&&this.stepBackward(s),this.setInputClasses()}handleKeydown(e){this.focusedInputHasValue=!!this.getFormControlByIndex(e).value}handleLeftArrow(e){e>0&&this.setFocus(e-1)}handleRightArrow(e){e<this.config.otpLength-1&&this.setFocus(e+1)}clear(){this.ngxOtpArray.reset(),this.setInputClasses()}setUpOtpForm(){for(let e=0;e<this.config.otpLength;e++)this.ngxOtpArray.push(new r.NI(null,[r.kI.required]));this.pattern=this.config.pattern||/^\d+$/}setUpAriaLabels(){this.config.ariaLabels&&(this.ariaLabels=Array.isArray(this.config.ariaLabels)?this.config.ariaLabels:new Array(this.config.otpLength).fill(this.config.ariaLabels))}setInputClasses(){var e,s;const o=[],i=this.config.classList;for(let c=0;c<this.config.otpLength;c++){const O=this.isInputFilled(c)&&(null===(e=this.config.classList)||void 0===e?void 0:e.inputFilled)||"",V=this.disable?(null===(s=this.config.classList)||void 0===s?void 0:s.inputDisabled)||"ngx-otp-input-disabled":"";let y="";"success"===this.ngxOtpStatus?y=this.config.classList.inputSuccess:"error"===this.ngxOtpStatus&&(y=this.config.classList.inputError),o[c]=[(null==i?void 0:i.input)||"",O,V,y]}this.classList=o}setValue(e){if(this.pattern.test(e)){let s=0;e.split("").slice(0,this.config.otpLength).map((o,i)=>{this.getFormControlByIndex(i).setValue(o),s=i}),this.setInputClasses(),this.setFocusAfterValueSet(s)}}handleDisable(e){var s,o;e?null===(s=this.ngxOtpArray)||void 0===s||s.disable():null===(o=this.ngxOtpArray)||void 0===o||o.enable(),this.setInputClasses()}stepForward(e){this.ngxOtpArray.valid&&this.config.autoblur?this.removeFocus(e):e<this.config.otpLength-1&&this.setFocus(e+1)}stepBackward(e){!this.focusedInputHasValue&&e>0&&this.setFocus(e-1)}setFocusAfterValueSet(e){e<this.config.otpLength-1?this.setFocus(e+1):this.removeFocus(this.lastFocus)}setFocus(e){this.getInputElementByIndex(e).focus()}removeFocus(e){this.getInputElementByIndex(e).blur()}isInputFilled(e){var s;return null===(s=this.getFormControlByIndex(e))||void 0===s?void 0:s.valid}getInputElementByIndex(e){return this.otpInputElements.toArray()[e].nativeElement}getFormControlByIndex(e){return this.ngxOtpArray.controls[e]}otpFormChangeListener(){this.ngxOtpArray$=this.ngxOtpArray.valueChanges.subscribe(e=>{this.otpChange.emit(e),this.ngxOtpArray.valid&&this.fill.emit(e.join(""))})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["ngx-otp-input"]],viewQuery:function(e,s){if(1&e&&t.Gf(k,5),2&e){let o;t.iGM(o=t.CRH())&&(s.otpInputElements=o)}},hostBindings:function(e,s){1&e&&t.NdJ("paste",function(i){return s.onPaste(i)})},inputs:{disable:"disable",status:"status",config:"config"},outputs:{otpChange:"otpChange",fill:"fill"},features:[t.TTD],decls:2,vars:2,consts:[[1,"ngx-otp-input-container",3,"ngClass"],["class","ngx-otp-input-box",3,"ngClass",4,"ngFor","ngForOf"],[1,"ngx-otp-input-box",3,"ngClass"],["maxlength","1","autocomplete","off","autocapitalize","off","spellcheck","false",1,"ngx-otp-input",3,"id","formControl","ngxOtpPattern","type","ngClass","focus","keyup","keyup.arrowLeft","keyup.arrowRight","keydown.backspace"],["otpInputElement",""]],template:function(e,s){1&e&&(t.TgZ(0,"form",0),t.YNc(1,q,4,7,"div",1),t.qZA()),2&e&&(t.Q6J("ngClass",null==s.config.classList?null:s.config.classList.container),t.xp6(1),t.Q6J("ngForOf",s.ngxOtpArrayControls))},directives:function(){return[r._Y,r.JL,r.F,p.mk,p.sg,r.Fj,r.nD,r.JJ,r.oH,L]},styles:[".ngx-otp-input-container[_ngcontent-%COMP%]{display:flex}.ngx-otp-input-box[_ngcontent-%COMP%]{margin:0 5px}.ngx-otp-input-box[_ngcontent-%COMP%]:first-child{margin-left:0}.ngx-otp-input-box[_ngcontent-%COMP%]:last-child{margin-right:0}.ngx-otp-input[_ngcontent-%COMP%]{width:35px;height:35px;text-align:center;font-size:1.25rem;border:1px solid #212121;border-radius:4px;outline:0}.ngx-otp-input-disabled[_ngcontent-%COMP%]{opacity:.3}"],changeDetection:0}),n})(),L=(()=>{class n{constructor(){this.allowedKeys=["Backspace","ArrowLeft","ArrowRight","Escape","Tab"]}onKeyDown(e){this.allowedKeys.includes(e.key)||"a"===e.key&&!0===e.ctrlKey||"c"===e.key&&!0===e.ctrlKey||"v"===e.key&&!0===e.ctrlKey||"x"===e.key&&!0===e.ctrlKey||"a"===e.key&&!0===e.metaKey||"c"===e.key&&!0===e.metaKey||"v"===e.key&&!0===e.metaKey||"x"===e.key&&!0===e.metaKey||this.pattern.test(e.key)||e.preventDefault()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=t.lG2({type:n,selectors:[["","ngxOtpPattern",""]],hostBindings:function(e,s){1&e&&t.NdJ("keydown",function(i){return s.onKeyDown(i)})},inputs:{pattern:["ngxOtpPattern","pattern"]}}),n})(),N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[r.UX,r.u5,p.ez]]}),n})();function R(n,a){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij("Request a new OTP in ",e.counter," seconds.")}}function S(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"span",16),t.NdJ("click",function(){return t.CHM(e),t.oxw().doRequest()}),t._uU(1,"Request a new OTP."),t.qZA()}}let J=(()=>{class n{constructor(e,s,o,i,c){this.OTPService=e,this.modal=s,this.resetPasswordService=o,this.VerifyOTPService=i,this.verifyPasswordService=c,this.otpInputConfig={otpLength:6,autofocus:!0,classList:{inputBox:"my-super-box-class",input:"my-super-class",inputFilled:"my-super-filled-class",inputDisabled:"my-super-disable-class",inputSuccess:"my-super-success-class",inputError:"my-super-error-class"}},this.verifyToken="",this.verifyOTPToken="",this.requestStatus=!1,this.counter=60,this.otpInput=!1,this.isSubmitted=!1}ngOnInit(){this.doRequest()}doRequest(){this.otpInput=!0,this.requestOtp(),this.requestStatus=!this.requestStatus,this.counter=60,1==this.requestStatus&&(this.interval=setInterval(()=>{this.counter=this.counter-1,0===this.counter&&(clearInterval(this.interval),this.requestStatus=!1)},1e3))}requestOtp(){this.OTPService.findAll().toPromise().then(e=>{e.status&&(this.verifyToken=e.token)})}verifyOTP(){this.isSubmitted=!0;let e=this.optCode.join("");this.VerifyOTPService.save({otp:e,token:this.verifyToken}).toPromise().then(i=>{i.status&&(this.isSubmitted=!1,this.verifyOTPToken=i.token,this.resetPassword())})}resetPassword(){this.resetPasswordService.save({passwordRequest:this.data,token:this.verifyOTPToken}).toPromise().then(s=>{s.status&&this.modal.dismiss(s.status)})}cancel(){this.modal.dismiss()}handeOtpChange(e){this.optCode=e}handleFillEvent(e){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(C),t.Y36(f.Kz),t.Y36(Z),t.Y36(F),t.Y36(P))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-otp-modal"]],inputs:{data:"data"},decls:26,vars:4,consts:[[1,"modal-content"],[1,"modal-header"],["id","example-modal-sizes-title-lg",1,"modal-title","h4","left-border-image"],[1,"overlay","overlay-block","cursor-default","modal-body"],[1,"row",2,"text-align","center"],[1,"col-sm"],[1,"col-sm-12","col-form-label","text-bold"],[1,"col-sm",2,"justify-content","center","display","flex"],[3,"config","otpChange","fill"],["ngOtpInput",""],[4,"ngIf"],["style","color: #2C66FF;",3,"click",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-primary","btn-sm","btn-elevate","mr-2",3,"disabled","click"],[1,""],["type","button",1,"btn","btn-light","btn-sm","btn-elevate",3,"click"],[2,"color","#2C66FF",3,"click"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3," Reset Password Verification "),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"label",6),t._uU(8,"Key in the One-Time Password generated on your phone."),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",4),t.TgZ(10,"div",7),t.TgZ(11,"ngx-otp-input",8,9),t.NdJ("otpChange",function(i){return s.handeOtpChange(i)})("fill",function(i){return s.handleFillEvent(i)}),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",4),t.TgZ(14,"div",5),t.TgZ(15,"p"),t._uU(16,"Don't get your OTP? "),t.YNc(17,R,2,1,"span",10),t.YNc(18,S,2,0,"span",11),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",12),t.TgZ(20,"button",13),t.NdJ("click",function(){return s.verifyOTP()}),t.TgZ(21,"span",14),t._uU(22,"Submit"),t.qZA(),t.qZA(),t.TgZ(23,"button",15),t.NdJ("click",function(){return s.cancel()}),t.TgZ(24,"span",14),t._uU(25,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(11),t.Q6J("config",s.otpInputConfig),t.xp6(6),t.Q6J("ngIf",s.requestStatus),t.xp6(1),t.Q6J("ngIf",!s.requestStatus),t.xp6(2),t.Q6J("disabled",s.isSubmitted))},directives:[M,p.O5],styles:[""]}),n})();var D=l(15346);function E(n,a){1&n&&(t.TgZ(0,"div"),t.TgZ(1,"label",26),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"ERROR.not_match")))}let U=(()=>{class n{constructor(e,s,o,i){this.modal=e,this.resetPasswordService=s,this.OTPService=o,this.verifyPasswordService=i,this.isMatch=!1,this.submited=!1}ngOnInit(){this.loadForm()}loadForm(){this.resetForm=new r.cw({oldPassword:new r.NI(null,[r.kI.required]),newPassword:new r.NI(null,[r.kI.required,r.kI.minLength(5)]),confirmNewPassword:new r.NI(null,[r.kI.required,r.kI.minLength(5)])})}requestAuth(){console.log(this.resetForm.valid),this.resetForm.valid&&this.isMatch&&this.verifyPasswordService.save(this.resetForm.value).toPromise().then(e=>{if(e){let s;s=this.modal.open(J,{size:"lg",backdrop:!1}),s.componentInstance.data=this.resetForm.value,s.result.then(()=>{},o=>{o&&this.resetForm.reset()})}})}cancel(){this.resetForm.reset()}isControlValid(e){const s=this.resetForm.controls[e];return s.valid&&(s.dirty||s.touched)}isControlInvalid(e){const s=this.resetForm.controls[e];return s.invalid&&(s.dirty||s.touched)}controlHasError(e,s){const o=this.resetForm.controls[s];return o.hasError(e)&&(o.dirty||o.touched)}isControlTouched(e){const s=this.resetForm.controls[e];return s.dirty||s.touched}confirmPassword(){if(null!=this.resetForm.value.newPassword&&null!=this.resetForm.value.confirmNewPassword){const s=this.resetForm.value.newPassword,o=this.resetForm.value.confirmNewPassword;return!(!this.submited||s===o)}if(this.submited)return this.resetForm.controls.confirmNewPassword.invalid}iscomfirmPassword(e,s){const i=this.resetForm.controls[s];return this.resetForm.controls[e].value==i.value?(this.isMatch=!0,i.hasError("Match")&&(i.dirty||i.touched)):(this.isMatch=!1,i.hasError("Not Match")&&(i.dirty||i.touched))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.FF),t.Y36(Z),t.Y36(C),t.Y36(P))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-reset-password"]],decls:64,vars:69,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom",2,"margin-bottom","15px"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-body"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center","justify-content","center"],[1,"col-sm-12"],[1,"form-group","row","inner-addon","left-addon"],[1,"col-sm-4","col-form-label"],[1,"col-sm-5"],[1,"input-group","col-12","mx-auto"],["name","password","id","password-field","name","oldPassword","autocomplete","off","formControlName","oldPassword",1,"pwd-control","form-control","form-control-sm",3,"type","placeholder"],["alt","show",1,"fas","fa-eye","eye-show",3,"click"],["alt","hide",1,"fas","fa-eye-slash","eye-hide",3,"click"],["name","password","id","password-field","name","newPassword","autocomplete","off","formControlName","newPassword",1,"pwd-control","form-control","form-control-sm",3,"type","placeholder"],["name","password","id","password-field","name","comfirmPassword","autocomplete","off","formControlName","confirmNewPassword",1,"pwd-control","form-control","form-control-sm",3,"type","placeholder"],[4,"ngIf"],[1,"col-sm-8"],[1,"row",2,"align-items","center","margin-top","15px"],["type","button",1,"btn","btn-sm","btn-primary","ml-2",2,"width","100%",3,"disabled","click"],[1,""],[1,"col-sm-3"],["type","button",1,"btn","btn-sm","btn-secondary","ml-2",2,"width","100%",3,"click"],[1,"error","col-12"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(8,"div",6),t.TgZ(9,"form",7),t.TgZ(10,"div",8),t.TgZ(11,"div",9),t.TgZ(12,"div",10),t.TgZ(13,"label",11),t._uU(14),t.ALo(15,"translate"),t.qZA(),t.TgZ(16,"div",12),t.TgZ(17,"div",13),t._UZ(18,"input",14),t.ALo(19,"translate"),t.TgZ(20,"i",15),t.NdJ("click",function(){return s.showoldPassword=!s.showoldPassword}),t.qZA(),t.TgZ(21,"i",16),t.NdJ("click",function(){return s.showoldPassword=!s.showoldPassword}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"div",8),t.TgZ(23,"div",9),t.TgZ(24,"div",10),t.TgZ(25,"label",11),t._uU(26),t.ALo(27,"translate"),t.qZA(),t.TgZ(28,"div",12),t.TgZ(29,"div",13),t._UZ(30,"input",17),t.ALo(31,"translate"),t.TgZ(32,"i",15),t.NdJ("click",function(){return s.shownewPassword=!s.shownewPassword}),t.qZA(),t.TgZ(33,"i",16),t.NdJ("click",function(){return s.shownewPassword=!s.shownewPassword}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"div",8),t.TgZ(35,"div",9),t.TgZ(36,"div",10),t.TgZ(37,"label",11),t._uU(38),t.ALo(39,"translate"),t.qZA(),t.TgZ(40,"div",12),t.TgZ(41,"div",13),t._UZ(42,"input",18),t.ALo(43,"translate"),t.TgZ(44,"i",15),t.NdJ("click",function(){return s.showcomfirmPassword=!s.showcomfirmPassword}),t.qZA(),t.TgZ(45,"i",16),t.NdJ("click",function(){return s.showcomfirmPassword=!s.showcomfirmPassword}),t.qZA(),t.YNc(46,E,4,3,"div",19),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(47,"div",8),t.TgZ(48,"div",9),t.TgZ(49,"div",10),t._UZ(50,"label",11),t.TgZ(51,"div",20),t.TgZ(52,"div",1),t.TgZ(53,"div",21),t.TgZ(54,"div",12),t.TgZ(55,"button",22),t.NdJ("click",function(){return s.requestAuth()}),t.TgZ(56,"span",23),t._uU(57),t.ALo(58,"translate"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(59,"div",24),t.TgZ(60,"button",25),t.NdJ("click",function(){return s.cancel()}),t.TgZ(61,"span",23),t._uU(62),t.ALo(63,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(6),t.Oqu(t.lcZ(7,51,"FORM.reset_password")),t.xp6(3),t.Q6J("formGroup",s.resetForm),t.xp6(5),t.Oqu(t.lcZ(15,53,"FORM.old_password")),t.xp6(4),t.ekj("is-invalid",s.confirmPassword())("is-invalid",s.iscomfirmPassword("newPassword","confirmNewPassword"))("is-invalid",s.isControlInvalid("oldPassword"))("is-valid",s.isControlValid("oldPassword")),t.s9C("placeholder",t.lcZ(19,55,"FORM.old_password")),t.Q6J("type",s.showoldPassword?"text":"password"),t.xp6(2),t.ekj("hide",s.showoldPassword),t.xp6(1),t.ekj("hide",!s.showoldPassword),t.xp6(5),t.Oqu(t.lcZ(27,57,"FORM.new_password")),t.xp6(4),t.ekj("is-invalid",s.confirmPassword())("is-invalid",s.iscomfirmPassword("newPassword","confirmNewPassword"))("is-invalid",s.isControlInvalid("newPassword"))("is-valid",s.isControlValid("newPassword")),t.s9C("placeholder",t.lcZ(31,59,"FORM.new_password")),t.Q6J("type",s.shownewPassword?"text":"password"),t.xp6(2),t.ekj("hide",s.shownewPassword),t.xp6(1),t.ekj("hide",!s.shownewPassword),t.xp6(5),t.Oqu(t.lcZ(39,61,"FORM.comirm_password")),t.xp6(4),t.ekj("is-invalid",s.confirmPassword())("is-invalid",s.iscomfirmPassword("newPassword","confirmNewPassword"))("is-invalid",s.isControlInvalid("confirmNewPassword"))("is-valid",s.isControlValid("confirmNewPassword")),t.s9C("placeholder",t.lcZ(43,63,"FORM.comfirm_password")),t.Q6J("type",s.showcomfirmPassword?"text":"password"),t.xp6(2),t.ekj("hide",s.showcomfirmPassword),t.xp6(1),t.ekj("hide",!s.showcomfirmPassword),t.xp6(1),t.Q6J("ngIf",!s.isMatch),t.xp6(9),t.Q6J("disabled",!s.isMatch||s.resetForm.invalid),t.xp6(2),t.Oqu(t.lcZ(58,65,"FORM.requset_auth")),t.xp6(5),t.Oqu(t.lcZ(63,67,"FORM.btn_cancel")))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,p.O5],pipes:[D.X],styles:[".error[_ngcontent-%COMP%]{color:red}.hide[_ngcontent-%COMP%]{display:none}.inner-addon[_ngcontent-%COMP%]{position:relative}.input-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{line-height:0;font-size:.9rem}.inner-addon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{position:absolute;padding:16px 17px;z-index:100;cursor:pointer}.left-addon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{left:0px}.right-addon[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%]{right:0px}.left-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:30px}.right-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-right:30px}"]}),n})();var B=l(63699);let Y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.ez,r.u5,r.UX,f.bz,f.IJ,_.FA,B.j,u.Q,N,d.fA,v.Bz.forChild([{path:"",component:U}])]]}),n})()}}]);