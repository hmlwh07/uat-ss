"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4217],{34217:(at,f,l)=>{l.r(f),l.d(f,{AuthModule:()=>st});var a=l(86019),i=l(49133),_=l(44522),g=l(4205),t=l(83668);let C=(()=>{class n{constructor(){this.today=new Date}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth"]],decls:5,vars:0,consts:[["id","kt_login_wrapper",1,"d-flex","flex-column","flex-root","h-100"],["id","kt_login",1,"login","login-1","login-signin-on","d-flex","flex-column","flex-lg-row","flex-column-fluid","bg-white",2,"background-color","#005eaa !important","background-size","cover","background-position","bottom"],[1,"login-content","flex-row-fluid","d-flex","flex-column","justify-content-center","position-relative","overflow-hidden","p-7","mx-auto"],[1,"d-flex","flex-column-fluid","flex-center"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"router-outlet"),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[g.lC],styles:[".login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%]   .aside-img[_ngcontent-%COMP%]{min-height:450px}.login.login-1[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%], .login.login-1[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%], .login.login-1[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%]{display:none}.login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%]{display:none}.login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%]{display:block}.login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%]{display:none}.login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%]{display:block}.login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%]{display:none}.login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%]{display:none}.login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%]{display:none}.login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%]{display:none}.login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%]{display:block}.login-content[_ngcontent-%COMP%]{width:100%;max-width:500px}@media (min-width: 1000px){.login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%]{width:100%;max-width:700px}.login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]{width:100%;max-width:500px}.login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}}@media (min-width: 1000px) and (max-width: 1399.98px){.login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%]{width:100%;max-width:450px}}@media (max-width: 999.98px){.login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:400px}}@media (max-width: 575.98px){.login.login-1[_ngcontent-%COMP%]   .aside-img[_ngcontent-%COMP%]{min-height:300px!important;background-size:400px}.login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:100%}}[_nghost-%COMP%]{height:100%}"]}),n})();var d=l(96047),u=l(22338);function w(n,r){1&n&&(t.ynx(0),t.TgZ(1,"div",21),t.TgZ(2,"div",22),t._uU(3,"The login details are incorrect"),t.qZA(),t.qZA(),t.BQk())}function Z(n,r){1&n&&(t.ynx(0),t._UZ(1,"span",23),t.BQk())}function x(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"div",24),t.TgZ(2,"div",25),t._uU(3),t.qZA(),t.qZA(),t.BQk()),2&n){const e=t.oxw().message;t.xp6(3),t.hij(" ",e," ")}}function v(n,r){if(1&n&&t.YNc(0,x,4,1,"ng-container",9),2&n){const e=r.control;t.Q6J("ngIf",e.hasError(r.validation)&&(e.dirty||e.touched))}}const h=function(n){return{"is-invalid":n}};let b=(()=>{class n{constructor(e,o,s,c){this.fb=e,this.authService=o,this.route=s,this.router=c,this.defaultAuth={email:"",password:""},this.unsubscribe=[],this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/"],{replaceUrl:!0})}ngOnInit(){this.initForm(),this.returnUrl=this.route.snapshot.queryParams["returnUrl".toString()]||"/"}get f(){return this.loginForm.controls}initForm(){this.loginForm=this.fb.group({email:[this.defaultAuth.email,i.kI.compose([i.kI.required,i.kI.minLength(3),i.kI.maxLength(320)])],password:[this.defaultAuth.password,i.kI.compose([i.kI.required,i.kI.minLength(3),i.kI.maxLength(100)])]})}submit(){this.hasError=!1;const e=this.authService.login(this.f.email.value,this.f.password.value).pipe((0,d.P)()).subscribe(o=>{o?this.router.navigate([this.returnUrl],{replaceUrl:!0}):this.hasError=!0});this.unsubscribe.push(e)}ngOnDestroy(){this.unsubscribe.forEach(e=>e.unsubscribe())}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(u.e),t.Y36(g.gz),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:34,vars:11,consts:[[1,"row"],[1,"col-sm-6","text-center"],["src","assets/ms-logo.png",2,"width","150px"],["src","assets/life-logo.png",2,"width","150px"],[1,"col-12","pt-5","pb-5"],[1,"font-weight-bolder","text-white","text-center",2,"font-size","1.1rem"],[1,"card","card-custom-orange",2,"width","100%"],[1,"card-body"],["novalidate","novalidate","id","kt_login_signin_form",1,"form",3,"formGroup","ngSubmit"],[4,"ngIf"],[1,"form-group"],[1,"input-icons"],[1,"flaticon-avatar"],["placeholder","User ID","type","text","name","username","formControlName","email","autocomplete","off",1,"input-field","form-control","h-3","py-7","px-11","rounded-lg",3,"ngClass"],[1,"flaticon-lock"],["placeholder","Password","type","password","name","password","autocomplete","off","formControlName","password",1,"input-field","form-control","h-3","py-7","px-6","rounded-lg",3,"ngClass"],[1,"font-weight-bolder","text-center"],["routerLink","/auth/forgot-password",1,"text-new","text-center","font-weight-bolder","text-hover-new"],[1,"pb-lg-10","pb-10"],["type","submit","id","kt_login_signin_submit",1,"btn","btn-new","text-white","font-weight-bolder","font-size-h6","px-8","py-4","my-3","mr-3",2,"width","100%"],["formError",""],[1,"mb-10","alert","alert-custom","alert-light-danger","alert-dismissible"],[1,"alert-text"],[1,"spinner","spinner-primary","ml-5"],[1,"fv-plugins-message-container"],[1,"fv-help-block"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"img",2),t._UZ(3,"br"),t.qZA(),t.TgZ(4,"div",1),t._UZ(5,"img",3),t._UZ(6,"br"),t.qZA(),t.TgZ(7,"div",4),t.TgZ(8,"h5",5),t._uU(9," Welcome to KBZ MS and Life Insurance Sales Portal "),t.qZA(),t.qZA(),t.TgZ(10,"div",6),t.TgZ(11,"div",7),t.TgZ(12,"form",8),t.NdJ("ngSubmit",function(){return o.submit()}),t.YNc(13,w,4,0,"ng-container",9),t.TgZ(14,"div",10),t.TgZ(15,"div",11),t._UZ(16,"i",12),t._UZ(17,"input",13),t.qZA(),t.qZA(),t.TgZ(18,"div",10),t.TgZ(19,"div",11),t._UZ(20,"i",14),t._UZ(21,"input",15),t.qZA(),t.qZA(),t.TgZ(22,"div",16),t.TgZ(23,"a",17),t._uU(24," Forgot Password ? "),t.qZA(),t.qZA(),t.TgZ(25,"div",18),t.TgZ(26,"button",19),t._uU(27," SIGN IN "),t.qZA(),t.YNc(28,Z,2,0,"ng-container",9),t.ALo(29,"async"),t.qZA(),t.TgZ(30,"h5",5),t._uU(31," Welcome to KBZ MS and Life Insurance Sales Portal "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(32,v,1,1,"ng-template",null,20,t.W1O)),2&e&&(t.xp6(12),t.Q6J("formGroup",o.loginForm),t.xp6(1),t.Q6J("ngIf",o.hasError),t.xp6(4),t.Q6J("ngClass",t.VKq(7,h,o.loginForm.controls.email.invalid)),t.xp6(4),t.Q6J("ngClass",t.VKq(9,h,o.loginForm.controls.password.invalid)),t.xp6(7),t.Q6J("ngIf",t.lcZ(29,5,o.isLoading$)))},directives:[i._Y,i.JL,i.sg,a.O5,i.Fj,i.JJ,i.u,a.mk,g.yS],pipes:[a.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}.logo-text[_ngcontent-%COMP%]{margin-top:10px;font-size:30px;color:#fff;font-weight:bold;line-height:20px;display:block;letter-spacing:1px}.logo-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:15px;letter-spacing:0px}.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;font-size:2.5rem;padding:0 7px}.input-icons[_ngcontent-%COMP%]{width:100%}.icon[_ngcontent-%COMP%]{min-width:50px}.card-body[_ngcontent-%COMP%]{padding:30px 15px}.input-field[_ngcontent-%COMP%]{width:100%;padding:20px;text-align:center}[_ngcontent-%COMP%]::-webkit-input-placeholder{text-align:center}[_ngcontent-%COMP%]:-moz-placeholder{text-align:center}[_ngcontent-%COMP%]::-moz-placeholder{text-align:center}[_ngcontent-%COMP%]:-ms-input-placeholder{text-align:center}"]}),n})();class P{static MatchPassword(r){if(r.get("password").value===r.get("cPassword").value)return null;r.get("cPassword").setErrors({ConfirmPassword:!0})}}var T=l(13902);function O(n,r){1&n&&(t.ynx(0),t.TgZ(1,"div",21),t.TgZ(2,"div",22),t._uU(3,"The registration details are incorrect"),t.qZA(),t.qZA(),t.BQk())}function y(n,r){1&n&&(t.ynx(0),t.TgZ(1,"div",23),t.TgZ(2,"div",24),t._uU(3," 'Passsword' and 'Confirm Password' didn't match. "),t.qZA(),t.qZA(),t.BQk())}function q(n,r){1&n&&(t.ynx(0),t._UZ(1,"span",25),t.BQk())}function k(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"div",23),t.TgZ(2,"div",24),t._uU(3),t.qZA(),t.qZA(),t.BQk()),2&n){const e=t.oxw().message;t.xp6(3),t.hij(" ",e," ")}}function A(n,r){if(1&n&&t.YNc(0,k,4,1,"ng-container",5),2&n){const e=r.control;t.Q6J("ngIf",e.hasError(r.validation)&&(e.dirty||e.touched))}}const p=function(n){return{"is-invalid":n}},M=function(n){return{validation:"required",message:"Fullname is required",control:n}},F=function(n){return{validation:"minlength",message:"Fullname should have at least 3 symbols",control:n}},U=function(n){return{validation:"maxLength",message:"Fullname should have maximum 100 symbols",control:n}},I=function(n){return{validation:"required",message:"Email is required",control:n}},J=function(n){return{validation:"email",message:"Email is invalid",control:n}},L=function(n){return{validation:"minlength",message:"Email should have at least 3 symbols",control:n}},S=function(n){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:n}},Q=function(n){return{validation:"required",message:"Password is required",control:n}},N=function(n){return{validation:"minlength",message:"Password should have at least 3 symbols",control:n}},E=function(n){return{validation:"maxLength",message:"Password should have maximum 100 symbols",control:n}},z=function(n){return{validation:"required",message:"Confirm Password is required",control:n}},V=function(n){return{validation:"minlength",message:"Confirm Password should have at least 3 symbols",control:n}},K=function(n){return{validation:"maxLength",message:"Confirm Password should have maximum 100 symbols",control:n}};let Y=(()=>{class n{constructor(e,o,s){this.fb=e,this.authService=o,this.router=s,this.unsubscribe=[],this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){this.initForm()}get f(){return this.registrationForm.controls}initForm(){this.registrationForm=this.fb.group({fullname:["",i.kI.compose([i.kI.required,i.kI.minLength(3),i.kI.maxLength(100)])],email:["qwe@qwe.qwe",i.kI.compose([i.kI.required,i.kI.email,i.kI.minLength(3),i.kI.maxLength(320)])],password:["",i.kI.compose([i.kI.required,i.kI.minLength(3),i.kI.maxLength(100)])],cPassword:["",i.kI.compose([i.kI.required,i.kI.minLength(3),i.kI.maxLength(100)])],agree:[!1,i.kI.compose([i.kI.required])]},{validator:P.MatchPassword})}submit(){this.hasError=!1;const e={};Object.keys(this.f).forEach(c=>{e[c]=this.f[c].value});const o=new T.T;o.setUser(e);const s=this.authService.registration(o).pipe((0,d.P)()).subscribe(c=>{c?this.router.navigate(["/"]):this.hasError=!0});this.unsubscribe.push(s)}ngOnDestroy(){this.unsubscribe.forEach(e=>e.unsubscribe())}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(u.e),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-registration"]],decls:55,vars:71,consts:[[1,"login-form","login-signup"],["novalidate","novalidate","id","kt_login_signup_form",1,"form",3,"formGroup","ngSubmit"],[1,"pb-13","pt-lg-0","pt-5"],[1,"font-weight-bolder","text-dark","font-size-h4","font-size-h1-lg"],[1,"text-muted","font-weight-bold","font-size-h4"],[4,"ngIf"],[1,"form-group"],[1,"font-size-h6","font-weight-bolder","text-dark"],["type","text","name","fullname","formControlName","fullname","placeholder","Fullname","autocomplete","off",1,"form-control","form-control-sm","h-auto","py-7","px-6","rounded-lg","font-size-h6",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","email","placeholder","Email","name","email","formControlName","email","autocomplete","off",1,"form-control","form-control-sm","h-auto","py-7","px-6","rounded-lg","font-size-h6",3,"ngClass"],[1,"font-size-h6","font-weight-bolder","text-dark","pt-5"],["type","password","placeholder","Password","name","password","formControlName","password","autocomplete","off",1,"form-control","form-control-sm","h-auto","py-7","px-6","rounded-lg","font-size-h6",3,"ngClass"],["type","password","placeholder","Confirm password","name","cPassword","autocomplete","off","formControlName","cPassword",1,"form-control","form-control-sm","h-auto","py-7","px-6","rounded-lg","font-size-h6",3,"ngClass"],[1,"checkbox","mb-0"],["type","checkbox","formControlName","agree","name","agree"],["href","https://keenthemes.com/metronic/?page=faq","target","_blank"],[1,"form-group","d-flex","flex-wrap","pb-lg-0","pb-3"],["type","submit","id","kt_login_signup_submit",1,"btn","btn-primary","font-weight-bolder","font-size-h6","px-8","py-4","my-3","mr-4",3,"disabled"],["routerLink","/auth/login","type","button","id","kt_login_signup_cancel",1,"btn","btn-light-primary","font-weight-bolder","font-size-h6","px-8","py-4","my-3"],["formError",""],[1,"mb-10","alert","alert-custom","alert-light-danger","alert-dismissible"],[1,"alert-text"],[1,"fv-plugins-message-container"],[1,"fv-help-block"],[1,"spinner","spinner-primary","ml-5"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(2,"div",2),t.TgZ(3,"h3",3),t._uU(4," Sign Up "),t.qZA(),t.TgZ(5,"p",4),t._uU(6," Enter your details to create your account "),t.qZA(),t.qZA(),t.YNc(7,O,4,0,"ng-container",5),t.TgZ(8,"div",6),t.TgZ(9,"label",7),t._uU(10,"Fullname"),t.qZA(),t._UZ(11,"input",8),t.GkF(12,9),t.GkF(13,9),t.GkF(14,9),t.qZA(),t.TgZ(15,"div",6),t.TgZ(16,"label",7),t._uU(17,"Email"),t.qZA(),t._UZ(18,"input",10),t.GkF(19,9),t.GkF(20,9),t.GkF(21,9),t.GkF(22,9),t.qZA(),t.TgZ(23,"div",6),t.TgZ(24,"label",11),t._uU(25,"Password"),t.qZA(),t._UZ(26,"input",12),t.GkF(27,9),t.GkF(28,9),t.GkF(29,9),t.qZA(),t.TgZ(30,"div",6),t.TgZ(31,"label",11),t._uU(32,"Confirm Password"),t.qZA(),t._UZ(33,"input",13),t.GkF(34,9),t.GkF(35,9),t.GkF(36,9),t.YNc(37,y,4,0,"ng-container",5),t.qZA(),t.TgZ(38,"div",6),t.TgZ(39,"label",14),t._UZ(40,"input",15),t._uU(41,"\xa0I Agree the\xa0"),t.TgZ(42,"a",16),t._uU(43,"terms and conditions"),t.qZA(),t._uU(44,".\xa0 "),t._UZ(45,"span"),t.qZA(),t.qZA(),t.TgZ(46,"div",17),t.TgZ(47,"button",18),t._uU(48," Submit "),t.qZA(),t.TgZ(49,"a",19),t._uU(50," Cancel "),t.qZA(),t.YNc(51,q,2,0,"ng-container",5),t.ALo(52,"async"),t.qZA(),t.qZA(),t.qZA(),t.YNc(53,A,1,1,"ng-template",null,20,t.W1O)),2&e){const s=t.MAs(54);t.xp6(1),t.Q6J("formGroup",o.registrationForm),t.xp6(6),t.Q6J("ngIf",o.hasError),t.xp6(4),t.Q6J("ngClass",t.VKq(37,p,o.registrationForm.controls.fullname.invalid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(39,M,o.registrationForm.controls.fullname)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(41,F,o.registrationForm.controls.fullname)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(43,U,o.registrationForm.controls.fullname)),t.xp6(4),t.Q6J("ngClass",t.VKq(45,p,o.registrationForm.controls.email.invalid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(47,I,o.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(49,J,o.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(51,L,o.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(53,S,o.registrationForm.controls.email)),t.xp6(4),t.Q6J("ngClass",t.VKq(55,p,o.registrationForm.controls.password.invalid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(57,Q,o.registrationForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(59,N,o.registrationForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(61,E,o.registrationForm.controls.password)),t.xp6(4),t.Q6J("ngClass",t.VKq(63,p,o.registrationForm.controls.cPassword.invalid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(65,z,o.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(67,V,o.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(69,K,o.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngIf",o.registrationForm.controls.cPassword.errors&&o.registrationForm.controls.cPassword.errors.ConfirmPassword),t.xp6(10),t.Q6J("disabled",o.registrationForm.invalid||!o.registrationForm.controls.agree.value),t.xp6(4),t.Q6J("ngIf",t.lcZ(52,35,o.isLoading$))}},directives:[i._Y,i.JL,i.sg,a.O5,i.Fj,i.JJ,i.u,a.mk,a.tP,i.Wl,g.yS],pipes:[a.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),n})();function G(n,r){1&n&&(t.ynx(0),t.TgZ(1,"div",13),t.TgZ(2,"div",14),t._uU(3,"The email detail is incorrect"),t.qZA(),t.qZA(),t.BQk())}function B(n,r){1&n&&(t.ynx(0),t._UZ(1,"span",15),t.BQk())}function R(n,r){1&n&&(t.ynx(0),t.TgZ(1,"div",16),t.TgZ(2,"div",17),t.TgZ(3,"div",18),t.TgZ(4,"h3",19),t._uU(5,"Email is correct!"),t.qZA(),t.TgZ(6,"p",20),t._uU(7," Message with 'recovery' instruction"),t._UZ(8,"br"),t._uU(9," has been sent"),t._UZ(10,"br"),t.qZA(),t.TgZ(11,"a",21),t._uU(12," Ok, got it! "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk())}function j(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"div",22),t.TgZ(2,"div",23),t._uU(3),t.qZA(),t.qZA(),t.BQk()),2&n){const e=t.oxw().message;t.xp6(3),t.hij(" ",e," ")}}function $(n,r){if(1&n&&t.YNc(0,j,4,1,"ng-container",5),2&n){const e=r.control;t.Q6J("ngIf",e.hasError(r.validation)&&(e.dirty||e.touched))}}const W=function(n){return{display:n}},X=function(n){return{"is-invalid":n}},D=function(n){return{validation:"required",message:"Email is required",control:n}},H=function(n){return{validation:"email",message:"Email is invalid",control:n}},tt=function(n){return{validation:"minLength",message:"Email should have at least 3 symbols",control:n}},nt=function(n){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:n}};var m=(()=>{return(n=m||(m={}))[n.NotSubmitted=0]="NotSubmitted",n[n.HasError=1]="HasError",n[n.NoError=2]="NoError",m;var n})();const it=[{path:"",component:C,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:b,data:{returnUrl:window.location.pathname}},{path:"registration",component:Y},{path:"forgot-password",component:(()=>{class n{constructor(e,o){this.fb=e,this.authService=o,this.errorState=m.NotSubmitted,this.errorStates=m,this.unsubscribe=[],this.isLoading$=this.authService.isLoading$}ngOnInit(){this.initForm()}get f(){return this.forgotPasswordForm.controls}initForm(){this.forgotPasswordForm=this.fb.group({email:["admin@demo.com",i.kI.compose([i.kI.required,i.kI.email,i.kI.minLength(3),i.kI.maxLength(320)])]})}submit(){this.errorState=m.NotSubmitted;const e=this.authService.forgotPassword(this.f.email.value).pipe((0,d.P)()).subscribe(o=>{this.errorState=o?m.NoError:m.HasError});this.unsubscribe.push(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(u.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-forgot-password"]],decls:25,vars:28,consts:[[1,"login-form","login-forgot"],["novalidate","novalidate","id","kt_login_forgot_form",1,"form","fv-plugins-bootstrap","fv-plugins-framework",3,"formGroup","ngStyle","ngSubmit"],[1,"pb-13","pt-lg-0","pt-5"],[1,"font-weight-bolder","text-dark","font-size-h4","font-size-h1-lg"],[1,"text-muted","font-weight-bold","font-size-h4"],[4,"ngIf"],[1,"form-group","fv-plugins-icon-container","has-danger"],["type","email","formControlName","email","placeholder","Email","name","email","autocomplete","off",1,"form-control","form-control-sm","h-auto","py-7","px-6","rounded-lg","font-size-h6",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"form-group","d-flex","flex-wrap","pb-lg-0"],["type","submit","id","kt_login_forgot_submit",1,"btn","btn-primary","font-weight-bolder","font-size-h6","px-8","py-4","my-3","mr-4"],["routerLink","/auth/login","id","kt_login_forgot_cancel",1,"btn","btn-light-primary","font-weight-bolder","font-size-h6","px-8","py-4","my-3"],["formError",""],[1,"mb-10","alert","alert-custom","alert-light-danger","alert-dismissible"],[1,"alert-text"],[1,"spinner","spinner-primary","ml-5"],[1,"card","card-custom","bgi-no-repeat","gutter-b",2,"height","175px","background-color","#4ab58e","background-position","calc(100% + 1rem) bottom","background-size","25% auto","background-image","url(assets/media/svg/humans/custom-1.svg)"],[1,"card-body","d-flex","align-items-center"],[1,"py-2"],[1,"text-white","font-weight-bolder","mb-3"],[1,"text-white","font-size-lg"],["routerLink","/auth/login",1,"swal2-confirm","btn","font-weight-bold","btn-light-primary"],[1,"fv-plugins-message-container"],[1,"fv-help-block"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(2,"div",2),t.TgZ(3,"h3",3),t._uU(4," Forgotten Password ? "),t.qZA(),t.TgZ(5,"p",4),t._uU(6," Enter your email to reset your password "),t.qZA(),t.qZA(),t.YNc(7,G,4,0,"ng-container",5),t.TgZ(8,"div",6),t._UZ(9,"input",7),t.GkF(10,8),t.GkF(11,8),t.GkF(12,8),t.GkF(13,8),t.qZA(),t.TgZ(14,"div",9),t.TgZ(15,"button",10),t._uU(16," Submit "),t.qZA(),t.TgZ(17,"a",11),t._uU(18," Cancel "),t.qZA(),t.YNc(19,B,2,0,"ng-container",5),t.ALo(20,"async"),t.qZA(),t._UZ(21,"div"),t.qZA(),t.YNc(22,R,13,0,"ng-container",5),t.qZA(),t.YNc(23,$,1,1,"ng-template",null,12,t.W1O)),2&e){const s=t.MAs(24);t.xp6(1),t.Q6J("formGroup",o.forgotPasswordForm)("ngStyle",t.VKq(16,W,o.errorState===o.errorStates.NoError?"none":"block")),t.xp6(6),t.Q6J("ngIf",o.errorState===o.errorStates.HasError),t.xp6(2),t.Q6J("ngClass",t.VKq(18,X,o.forgotPasswordForm.controls.email.invalid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(20,D,o.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(22,H,o.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(24,tt,o.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(26,nt,o.forgotPasswordForm.controls.email)),t.xp6(6),t.Q6J("ngIf",t.lcZ(20,14,o.isLoading$)),t.xp6(3),t.Q6J("ngIf",o.errorState===o.errorStates.NoError)}},directives:[i._Y,i.JL,i.sg,a.PC,a.O5,i.Fj,i.JJ,i.u,a.mk,a.tP,g.yS],pipes:[a.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),n})()},{path:"logout",component:(()=>{class n{constructor(e){this.authService=e,this.authService.logout()}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-logout"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"logout works!"),t.qZA())},styles:[""]}),n})()},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login",pathMatch:"full"}]}];let rt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(it)],g.Bz]}),n})(),st=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[a.ez,rt,i.u5,i.UX,_.JF]]}),n})()}}]);