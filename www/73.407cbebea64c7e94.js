"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[73,7975],{47975:(b,u,a)=>{function l(t){try{JSON.parse(t)}catch(_){return!1}return!0}a.d(u,{cU:()=>l,Gs:()=>i,Ny:()=>g});const i={parse:{dateInput:"DD-MM-YYYY"},display:{dateInput:"DD-MM-YYYY",monthYearLabel:"MMMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}},g={parse:{dateInput:"MM-YYYY"},display:{dateInput:"MM-YYYY",monthYearLabel:"MM-YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MM-YYYY"}}},34217:(b,u,a)=>{a.r(u),a.d(u,{AuthModule:()=>dt});var l=a(86019),i=a(49133),h=a(44522),g=a(4205),t=a(83668);let _=(()=>{class n{constructor(){this.today=new Date}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth"]],decls:5,vars:0,consts:[["id","kt_login_wrapper",1,"d-flex","flex-column","flex-root","h-100"],["id","kt_login",1,"login","login-1","login-signin-on","d-flex","flex-column","flex-lg-row","flex-column-fluid","bg-white",2,"background-color","#005eaa !important","background-size","cover","background-position","bottom"],[1,"login-content","flex-row-fluid","d-flex","flex-column","justify-content-center","position-relative","overflow-hidden","p-7","mx-auto"],[1,"d-flex","flex-column-fluid","flex-center"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"router-outlet"),t.qZA(),t.qZA(),t.qZA(),t.qZA())},directives:[g.lC],styles:["[_ngcontent-%COMP%]:root{--primary-color: #fff;--primary-text-color: #000;--secondary-color: #fff;--secondary-text-color: #ccc;--new-primary-color: #005eaa3b;--new-success-color: #e0ffff82;--new-info-color: #00acea2b;--new-warning-color: #ffd50031;--new-fail-color: #ff00000f}.login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%]   .aside-img[_ngcontent-%COMP%]{min-height:450px}.login.login-1[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%], .login.login-1[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%], .login.login-1[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%]{display:none}.login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%]{display:none}.login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%]{display:block}.login.login-1.login-signin-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%]{display:none}.login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%]{display:block}.login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%]{display:none}.login.login-1.login-signup-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%]{display:none}.login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-signup[_ngcontent-%COMP%]{display:none}.login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-signin[_ngcontent-%COMP%]{display:none}.login.login-1.login-forgot-on[_ngcontent-%COMP%]   .login-forgot[_ngcontent-%COMP%]{display:block}.login-content[_ngcontent-%COMP%]{width:100%;max-width:500px}@media (min-width: 1000px){.login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%]{width:100%;max-width:700px}.login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]{width:100%;max-width:500px}.login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}}@media (min-width: 1000px) and (max-width: 1399.98px){.login.login-1[_ngcontent-%COMP%]   .login-aside[_ngcontent-%COMP%]{width:100%;max-width:450px}}@media (max-width: 999.98px){.login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:400px}}@media (max-width: 575.98px){.login.login-1[_ngcontent-%COMP%]   .aside-img[_ngcontent-%COMP%]{min-height:300px!important;background-size:400px}.login.login-1[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:100%}}[_nghost-%COMP%]{height:100%}"]}),n})();var C=a(85724),w=a(82997),f=a(96047),p=a(22338),x=a(59832),Z=a(37632),T=a(23449),O=a(15346);function P(n,r){1&n&&(t.ynx(0),t.TgZ(1,"div",21),t.TgZ(2,"div",22),t._uU(3,"The login details are incorrect"),t.qZA(),t.qZA(),t.BQk())}function y(n,r){1&n&&(t.ynx(0),t._UZ(1,"span",23),t.BQk())}function M(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"div",24),t.TgZ(2,"div",25),t._uU(3),t.qZA(),t.qZA(),t.BQk()),2&n){const e=t.oxw().message;t.xp6(3),t.hij(" ",e," ")}}function A(n,r){if(1&n&&t.YNc(0,M,4,1,"ng-container",9),2&n){const e=r.control;t.Q6J("ngIf",e.hasError(r.validation)&&(e.dirty||e.touched))}}const v=function(n){return{"is-invalid":n}};let q=(()=>{class n{constructor(e,o,s,c,ft,ht,_t){this.fb=e,this.authService=o,this.route=s,this.router=c,this.translate=ft,this.menuDataService=ht,this.globalService=_t,this.defaultAuth={email:"",password:""},this.unsubscribe=[],this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/"],{replaceUrl:!0})}ngOnInit(){this.initForm(),this.unsubscribe[0]=this.route.queryParams.subscribe(e=>{this.returnUrl=e.redirectTo})}get f(){return this.loginForm.controls}initForm(){this.loginForm=this.fb.group({email:[this.defaultAuth.email,i.kI.compose([i.kI.required,i.kI.minLength(3),i.kI.maxLength(320)])],password:[this.defaultAuth.password,i.kI.compose([i.kI.required,i.kI.minLength(3),i.kI.maxLength(100)])]})}submit(){this.hasError=!1;const e=this.authService.login(this.f.email.value,this.f.password.value).pipe((0,f.P)(),(0,C.z)(o=>this.menuDataService.getMenusData().pipe((0,C.z)(s=>(console.log("DATAMENU",s[0].page),this.firstPage=s[0].page,(0,w.of)(o)))))).subscribe(o=>{o?this.router.navigateByUrl(this.firstPage,{replaceUrl:!0}):this.hasError=!0});this.unsubscribe.push(e)}ngOnDestroy(){this.unsubscribe.forEach(e=>e.unsubscribe())}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(p.e),t.Y36(g.gz),t.Y36(g.F0),t.Y36(x.K),t.Y36(Z.q),t.Y36(T.Q))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:35,vars:20,consts:[[1,"row"],[1,"col-sm-6","text-center"],["src","assets/ms-logo.png",2,"width","150px"],["src","assets/life-logo.png",2,"width","150px"],[1,"col-12","pt-5","pb-5"],[1,"font-weight-bolder","text-white","text-center",2,"font-size","1.1rem"],[1,"card","card-custom-orange",2,"width","100%"],[1,"card-body"],["novalidate","novalidate","id","kt_login_signin_form",1,"form",3,"formGroup","ngSubmit"],[4,"ngIf"],[1,"form-group"],[1,"input-icons"],[1,"flaticon-avatar"],["placeholder","User ID","type","text","name","username","formControlName","email","autocomplete","off",1,"input-field","form-control","h-3","py-7","px-11","rounded-lg",3,"ngClass"],[1,"flaticon-lock"],["placeholder","Password","type","password","name","password","autocomplete","off","formControlName","password",1,"input-field","form-control","h-3","py-7","px-6","rounded-lg",3,"ngClass"],[1,"font-weight-bolder","text-center"],["routerLink","/auth/forgot-password",1,"text-new","text-center","font-weight-bolder","text-hover-new"],[1,"pb-lg-10","pb-10"],["type","submit","id","kt_login_signin_submit",1,"btn","btn-new","text-white","font-weight-bolder","font-size-h6","px-8","py-4","my-3","mr-3",2,"width","100%"],["formError",""],[1,"mb-10","alert","alert-custom","alert-light-danger","alert-dismissible"],[1,"alert-text"],[1,"spinner","spinner-primary","ml-5"],[1,"fv-plugins-message-container"],[1,"fv-help-block"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t._UZ(2,"img",2),t._UZ(3,"br"),t.qZA(),t.TgZ(4,"div",1),t._UZ(5,"img",3),t._UZ(6,"br"),t.qZA(),t.TgZ(7,"div",4),t.TgZ(8,"h5",5),t._uU(9),t.ALo(10,"translate"),t.qZA(),t.qZA(),t.TgZ(11,"div",6),t.TgZ(12,"div",7),t.TgZ(13,"form",8),t.NdJ("ngSubmit",function(){return o.submit()}),t.YNc(14,P,4,0,"ng-container",9),t.TgZ(15,"div",10),t.TgZ(16,"div",11),t._UZ(17,"i",12),t._UZ(18,"input",13),t.qZA(),t.qZA(),t.TgZ(19,"div",10),t.TgZ(20,"div",11),t._UZ(21,"i",14),t._UZ(22,"input",15),t.qZA(),t.qZA(),t.TgZ(23,"div",16),t.TgZ(24,"a",17),t._uU(25),t.ALo(26,"translate"),t.qZA(),t.qZA(),t.TgZ(27,"div",18),t.TgZ(28,"button",19),t._uU(29),t.ALo(30,"translate"),t.qZA(),t.YNc(31,y,2,0,"ng-container",9),t.ALo(32,"async"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(33,A,1,1,"ng-template",null,20,t.W1O)),2&e&&(t.xp6(9),t.hij(" ",t.lcZ(10,8,"CARD.welcometxt")," "),t.xp6(4),t.Q6J("formGroup",o.loginForm),t.xp6(1),t.Q6J("ngIf",o.hasError),t.xp6(4),t.Q6J("ngClass",t.VKq(16,v,o.loginForm.controls.email.invalid)),t.xp6(4),t.Q6J("ngClass",t.VKq(18,v,o.loginForm.controls.password.invalid)),t.xp6(3),t.hij(" ",t.lcZ(26,10,"CARD.forgettxt")," "),t.xp6(4),t.hij(" ",t.lcZ(30,12,"CARD.signin")," "),t.xp6(2),t.Q6J("ngIf",t.lcZ(32,14,o.isLoading$)))},directives:[i._Y,i.JL,i.sg,l.O5,i.Fj,i.JJ,i.u,l.mk,g.yS],pipes:[O.X,l.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}.logo-text[_ngcontent-%COMP%]{margin-top:10px;font-size:30px;color:#fff;font-weight:bold;line-height:20px;display:block;letter-spacing:1px}.logo-text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:15px;letter-spacing:0px}.input-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;font-size:2.5rem;padding:0 7px}.input-icons[_ngcontent-%COMP%]{width:100%}.icon[_ngcontent-%COMP%]{min-width:50px}.card-body[_ngcontent-%COMP%]{padding:30px 15px}.input-field[_ngcontent-%COMP%]{width:100%;padding:20px;text-align:center}[_ngcontent-%COMP%]::-webkit-input-placeholder{text-align:center}[_ngcontent-%COMP%]:-moz-placeholder{text-align:center}[_ngcontent-%COMP%]::-moz-placeholder{text-align:center}[_ngcontent-%COMP%]:-ms-input-placeholder{text-align:center}.btn.btn-new[_ngcontent-%COMP%]{background-color:#005f99}"]}),n})();class k{static MatchPassword(r){if(r.get("password").value===r.get("cPassword").value)return null;r.get("cPassword").setErrors({ConfirmPassword:!0})}}var F=a(13902);function Y(n,r){1&n&&(t.ynx(0),t.TgZ(1,"div",21),t.TgZ(2,"div",22),t._uU(3,"The registration details are incorrect"),t.qZA(),t.qZA(),t.BQk())}function L(n,r){1&n&&(t.ynx(0),t.TgZ(1,"div",23),t.TgZ(2,"div",24),t._uU(3," 'Passsword' and 'Confirm Password' didn't match. "),t.qZA(),t.qZA(),t.BQk())}function U(n,r){1&n&&(t.ynx(0),t._UZ(1,"span",25),t.BQk())}function I(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"div",23),t.TgZ(2,"div",24),t._uU(3),t.qZA(),t.qZA(),t.BQk()),2&n){const e=t.oxw().message;t.xp6(3),t.hij(" ",e," ")}}function J(n,r){if(1&n&&t.YNc(0,I,4,1,"ng-container",5),2&n){const e=r.control;t.Q6J("ngIf",e.hasError(r.validation)&&(e.dirty||e.touched))}}const d=function(n){return{"is-invalid":n}},S=function(n){return{validation:"required",message:"Fullname is required",control:n}},Q=function(n){return{validation:"minlength",message:"Fullname should have at least 3 symbols",control:n}},E=function(n){return{validation:"maxLength",message:"Fullname should have maximum 100 symbols",control:n}},N=function(n){return{validation:"required",message:"Email is required",control:n}},z=function(n){return{validation:"email",message:"Email is invalid",control:n}},V=function(n){return{validation:"minlength",message:"Email should have at least 3 symbols",control:n}},K=function(n){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:n}},G=function(n){return{validation:"required",message:"Password is required",control:n}},R=function(n){return{validation:"minlength",message:"Password should have at least 3 symbols",control:n}},B=function(n){return{validation:"maxLength",message:"Password should have maximum 100 symbols",control:n}},D=function(n){return{validation:"required",message:"Confirm Password is required",control:n}},j=function(n){return{validation:"minlength",message:"Confirm Password should have at least 3 symbols",control:n}},$=function(n){return{validation:"maxLength",message:"Confirm Password should have maximum 100 symbols",control:n}};let X=(()=>{class n{constructor(e,o,s){this.fb=e,this.authService=o,this.router=s,this.unsubscribe=[],this.isLoading$=this.authService.isLoading$,this.authService.currentUserValue&&this.router.navigate(["/"])}ngOnInit(){this.initForm()}get f(){return this.registrationForm.controls}initForm(){this.registrationForm=this.fb.group({fullname:["",i.kI.compose([i.kI.required,i.kI.minLength(3),i.kI.maxLength(100)])],email:["qwe@qwe.qwe",i.kI.compose([i.kI.required,i.kI.email,i.kI.minLength(3),i.kI.maxLength(320)])],password:["",i.kI.compose([i.kI.required,i.kI.minLength(3),i.kI.maxLength(100)])],cPassword:["",i.kI.compose([i.kI.required,i.kI.minLength(3),i.kI.maxLength(100)])],agree:[!1,i.kI.compose([i.kI.required])]},{validator:k.MatchPassword})}submit(){this.hasError=!1;const e={};Object.keys(this.f).forEach(c=>{e[c]=this.f[c].value});const o=new F.T;o.setUser(e);const s=this.authService.registration(o).pipe((0,f.P)()).subscribe(c=>{c?this.router.navigate(["/"]):this.hasError=!0});this.unsubscribe.push(s)}ngOnDestroy(){this.unsubscribe.forEach(e=>e.unsubscribe())}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(p.e),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-registration"]],decls:55,vars:71,consts:[[1,"login-form","login-signup"],["novalidate","novalidate","id","kt_login_signup_form",1,"form",3,"formGroup","ngSubmit"],[1,"pb-13","pt-lg-0","pt-5"],[1,"font-weight-bolder","text-dark","font-size-h4","font-size-h1-lg"],[1,"text-muted","font-weight-bold","font-size-h4"],[4,"ngIf"],[1,"form-group"],[1,"font-size-h6","font-weight-bolder","text-dark"],["type","text","name","fullname","formControlName","fullname","placeholder","Fullname","autocomplete","off",1,"form-control","form-control-sm","h-auto","py-7","px-6","rounded-lg","font-size-h6",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","email","placeholder","Email","name","email","formControlName","email","autocomplete","off",1,"form-control","form-control-sm","h-auto","py-7","px-6","rounded-lg","font-size-h6",3,"ngClass"],[1,"font-size-h6","font-weight-bolder","text-dark","pt-5"],["type","password","placeholder","Password","name","password","formControlName","password","autocomplete","off",1,"form-control","form-control-sm","h-auto","py-7","px-6","rounded-lg","font-size-h6",3,"ngClass"],["type","password","placeholder","Confirm password","name","cPassword","autocomplete","off","formControlName","cPassword",1,"form-control","form-control-sm","h-auto","py-7","px-6","rounded-lg","font-size-h6",3,"ngClass"],[1,"checkbox","mb-0"],["type","checkbox","formControlName","agree","name","agree"],["href","https://keenthemes.com/metronic/?page=faq","target","_blank"],[1,"form-group","d-flex","flex-wrap","pb-lg-0","pb-3"],["type","submit","id","kt_login_signup_submit",1,"btn","btn-primary","font-weight-bolder","font-size-h6","px-8","py-4","my-3","mr-4",3,"disabled"],["routerLink","/auth/login","type","button","id","kt_login_signup_cancel",1,"btn","btn-light-primary","font-weight-bolder","font-size-h6","px-8","py-4","my-3"],["formError",""],[1,"mb-10","alert","alert-custom","alert-light-danger","alert-dismissible"],[1,"alert-text"],[1,"fv-plugins-message-container"],[1,"fv-help-block"],[1,"spinner","spinner-primary","ml-5"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(2,"div",2),t.TgZ(3,"h3",3),t._uU(4," Sign Up "),t.qZA(),t.TgZ(5,"p",4),t._uU(6," Enter your details to create your account "),t.qZA(),t.qZA(),t.YNc(7,Y,4,0,"ng-container",5),t.TgZ(8,"div",6),t.TgZ(9,"label",7),t._uU(10,"Fullname"),t.qZA(),t._UZ(11,"input",8),t.GkF(12,9),t.GkF(13,9),t.GkF(14,9),t.qZA(),t.TgZ(15,"div",6),t.TgZ(16,"label",7),t._uU(17,"Email"),t.qZA(),t._UZ(18,"input",10),t.GkF(19,9),t.GkF(20,9),t.GkF(21,9),t.GkF(22,9),t.qZA(),t.TgZ(23,"div",6),t.TgZ(24,"label",11),t._uU(25,"Password"),t.qZA(),t._UZ(26,"input",12),t.GkF(27,9),t.GkF(28,9),t.GkF(29,9),t.qZA(),t.TgZ(30,"div",6),t.TgZ(31,"label",11),t._uU(32,"Confirm Password"),t.qZA(),t._UZ(33,"input",13),t.GkF(34,9),t.GkF(35,9),t.GkF(36,9),t.YNc(37,L,4,0,"ng-container",5),t.qZA(),t.TgZ(38,"div",6),t.TgZ(39,"label",14),t._UZ(40,"input",15),t._uU(41,"\xa0I Agree the\xa0"),t.TgZ(42,"a",16),t._uU(43,"terms and conditions"),t.qZA(),t._uU(44,".\xa0 "),t._UZ(45,"span"),t.qZA(),t.qZA(),t.TgZ(46,"div",17),t.TgZ(47,"button",18),t._uU(48," Submit "),t.qZA(),t.TgZ(49,"a",19),t._uU(50," Cancel "),t.qZA(),t.YNc(51,U,2,0,"ng-container",5),t.ALo(52,"async"),t.qZA(),t.qZA(),t.qZA(),t.YNc(53,J,1,1,"ng-template",null,20,t.W1O)),2&e){const s=t.MAs(54);t.xp6(1),t.Q6J("formGroup",o.registrationForm),t.xp6(6),t.Q6J("ngIf",o.hasError),t.xp6(4),t.Q6J("ngClass",t.VKq(37,d,o.registrationForm.controls.fullname.invalid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(39,S,o.registrationForm.controls.fullname)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(41,Q,o.registrationForm.controls.fullname)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(43,E,o.registrationForm.controls.fullname)),t.xp6(4),t.Q6J("ngClass",t.VKq(45,d,o.registrationForm.controls.email.invalid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(47,N,o.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(49,z,o.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(51,V,o.registrationForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(53,K,o.registrationForm.controls.email)),t.xp6(4),t.Q6J("ngClass",t.VKq(55,d,o.registrationForm.controls.password.invalid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(57,G,o.registrationForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(59,R,o.registrationForm.controls.password)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(61,B,o.registrationForm.controls.password)),t.xp6(4),t.Q6J("ngClass",t.VKq(63,d,o.registrationForm.controls.cPassword.invalid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(65,D,o.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(67,j,o.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(69,$,o.registrationForm.controls.cPassword)),t.xp6(1),t.Q6J("ngIf",o.registrationForm.controls.cPassword.errors&&o.registrationForm.controls.cPassword.errors.ConfirmPassword),t.xp6(10),t.Q6J("disabled",o.registrationForm.invalid||!o.registrationForm.controls.agree.value),t.xp6(4),t.Q6J("ngIf",t.lcZ(52,35,o.isLoading$))}},directives:[i._Y,i.JL,i.sg,l.O5,i.Fj,i.JJ,i.u,l.mk,l.tP,i.Wl,g.yS],pipes:[l.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),n})();function H(n,r){1&n&&(t.ynx(0),t.TgZ(1,"div",13),t.TgZ(2,"div",14),t._uU(3,"The email detail is incorrect"),t.qZA(),t.qZA(),t.BQk())}function W(n,r){1&n&&(t.ynx(0),t._UZ(1,"span",15),t.BQk())}function tt(n,r){1&n&&(t.ynx(0),t.TgZ(1,"div",16),t.TgZ(2,"div",17),t.TgZ(3,"div",18),t.TgZ(4,"h3",19),t._uU(5,"Email is correct!"),t.qZA(),t.TgZ(6,"p",20),t._uU(7," Message with 'recovery' instruction"),t._UZ(8,"br"),t._uU(9," has been sent"),t._UZ(10,"br"),t.qZA(),t.TgZ(11,"a",21),t._uU(12," Ok, got it! "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk())}function nt(n,r){if(1&n&&(t.ynx(0),t.TgZ(1,"div",22),t.TgZ(2,"div",23),t._uU(3),t.qZA(),t.qZA(),t.BQk()),2&n){const e=t.oxw().message;t.xp6(3),t.hij(" ",e," ")}}function ot(n,r){if(1&n&&t.YNc(0,nt,4,1,"ng-container",5),2&n){const e=r.control;t.Q6J("ngIf",e.hasError(r.validation)&&(e.dirty||e.touched))}}const et=function(n){return{display:n}},it=function(n){return{"is-invalid":n}},rt=function(n){return{validation:"required",message:"Email is required",control:n}},st=function(n){return{validation:"email",message:"Email is invalid",control:n}},at=function(n){return{validation:"minLength",message:"Email should have at least 3 symbols",control:n}},lt=function(n){return{validation:"maxLength",message:"Email should have maximum 360 symbols",control:n}};var m=(()=>{return(n=m||(m={}))[n.NotSubmitted=0]="NotSubmitted",n[n.HasError=1]="HasError",n[n.NoError=2]="NoError",m;var n})();const ct=[{path:"",component:_,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:q,data:{returnUrl:window.location.pathname}},{path:"registration",component:X},{path:"forgot-password",component:(()=>{class n{constructor(e,o){this.fb=e,this.authService=o,this.errorState=m.NotSubmitted,this.errorStates=m,this.unsubscribe=[],this.isLoading$=this.authService.isLoading$}ngOnInit(){this.initForm()}get f(){return this.forgotPasswordForm.controls}initForm(){this.forgotPasswordForm=this.fb.group({email:["admin@demo.com",i.kI.compose([i.kI.required,i.kI.email,i.kI.minLength(3),i.kI.maxLength(320)])]})}submit(){this.errorState=m.NotSubmitted;const e=this.authService.forgotPassword(this.f.email.value).pipe((0,f.P)()).subscribe(o=>{this.errorState=o?m.NoError:m.HasError});this.unsubscribe.push(e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(p.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-forgot-password"]],decls:25,vars:28,consts:[[1,"login-form","login-forgot"],["novalidate","novalidate","id","kt_login_forgot_form",1,"form","fv-plugins-bootstrap","fv-plugins-framework",3,"formGroup","ngStyle","ngSubmit"],[1,"pb-13","pt-lg-0","pt-5"],[1,"font-weight-bolder","text-dark","font-size-h4","font-size-h1-lg"],[1,"text-muted","font-weight-bold","font-size-h4"],[4,"ngIf"],[1,"form-group","fv-plugins-icon-container","has-danger"],["type","email","formControlName","email","placeholder","Email","name","email","autocomplete","off",1,"form-control","form-control-sm","h-auto","py-7","px-6","rounded-lg","font-size-h6",3,"ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"form-group","d-flex","flex-wrap","pb-lg-0"],["type","submit","id","kt_login_forgot_submit",1,"btn","btn-primary","font-weight-bolder","font-size-h6","px-8","py-4","my-3","mr-4"],["routerLink","/auth/login","id","kt_login_forgot_cancel",1,"btn","btn-light-primary","font-weight-bolder","font-size-h6","px-8","py-4","my-3"],["formError",""],[1,"mb-10","alert","alert-custom","alert-light-danger","alert-dismissible"],[1,"alert-text"],[1,"spinner","spinner-primary","ml-5"],[1,"card","card-custom","bgi-no-repeat","gutter-b",2,"height","175px","background-color","#4ab58e","background-position","calc(100% + 1rem) bottom","background-size","25% auto","background-image","url(assets/media/svg/humans/custom-1.svg)"],[1,"card-body","d-flex","align-items-center"],[1,"py-2"],[1,"text-white","font-weight-bolder","mb-3"],[1,"text-white","font-size-lg"],["routerLink","/auth/login",1,"swal2-confirm","btn","font-weight-bold","btn-light-primary"],[1,"fv-plugins-message-container"],[1,"fv-help-block"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"form",1),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(2,"div",2),t.TgZ(3,"h3",3),t._uU(4," Forgotten Password ? "),t.qZA(),t.TgZ(5,"p",4),t._uU(6," Enter your email to reset your password "),t.qZA(),t.qZA(),t.YNc(7,H,4,0,"ng-container",5),t.TgZ(8,"div",6),t._UZ(9,"input",7),t.GkF(10,8),t.GkF(11,8),t.GkF(12,8),t.GkF(13,8),t.qZA(),t.TgZ(14,"div",9),t.TgZ(15,"button",10),t._uU(16," Submit "),t.qZA(),t.TgZ(17,"a",11),t._uU(18," Cancel "),t.qZA(),t.YNc(19,W,2,0,"ng-container",5),t.ALo(20,"async"),t.qZA(),t._UZ(21,"div"),t.qZA(),t.YNc(22,tt,13,0,"ng-container",5),t.qZA(),t.YNc(23,ot,1,1,"ng-template",null,12,t.W1O)),2&e){const s=t.MAs(24);t.xp6(1),t.Q6J("formGroup",o.forgotPasswordForm)("ngStyle",t.VKq(16,et,o.errorState===o.errorStates.NoError?"none":"block")),t.xp6(6),t.Q6J("ngIf",o.errorState===o.errorStates.HasError),t.xp6(2),t.Q6J("ngClass",t.VKq(18,it,o.forgotPasswordForm.controls.email.invalid)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(20,rt,o.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(22,st,o.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(24,at,o.forgotPasswordForm.controls.email)),t.xp6(1),t.Q6J("ngTemplateOutlet",s)("ngTemplateOutletContext",t.VKq(26,lt,o.forgotPasswordForm.controls.email)),t.xp6(6),t.Q6J("ngIf",t.lcZ(20,14,o.isLoading$)),t.xp6(3),t.Q6J("ngIf",o.errorState===o.errorStates.NoError)}},directives:[i._Y,i.JL,i.sg,l.PC,l.O5,i.Fj,i.JJ,i.u,l.mk,l.tP,g.yS],pipes:[l.Ov],styles:["[_nghost-%COMP%]{width:100%}@media (min-width: 992px){[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%;max-width:450px}[_nghost-%COMP%]   .login-form[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{width:100%}}"]}),n})()},{path:"logout",component:(()=>{class n{constructor(e){this.authService=e,this.authService.logout()}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-logout"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"logout works!"),t.qZA())},styles:[""]}),n})()},{path:"",redirectTo:"login",pathMatch:"full"},{path:"**",redirectTo:"login",pathMatch:"full"}]}];let ut=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(ct)],g.Bz]}),n})();var pt=a(63699);let dt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,ut,i.u5,pt.j,i.UX,h.JF]]}),n})()}}]);