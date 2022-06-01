"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8524,7975],{92118:(O,D,o)=>{o.d(D,{t7:()=>E});var p=o(83668),i=o(44290),h=o(92070);const d=o.n(h)()||h,M=new p.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function(){return{useUtc:!1}}});function Z(r,g){const n=Array(r);for(let c=0;c<r;c++)n[c]=g(c);return n}let E=(()=>{class r extends i._A{constructor(n,c){super(),this._options=c,this.setLocale(n||d.locale())}setLocale(n){super.setLocale(n);let c=d.localeData(n);this._localeData={firstDayOfWeek:c.firstDayOfWeek(),longMonths:c.months(),shortMonths:c.monthsShort(),dates:Z(31,A=>this.createDate(2017,0,A+1).format("D")),longDaysOfWeek:c.weekdays(),shortDaysOfWeek:c.weekdaysShort(),narrowDaysOfWeek:c.weekdaysMin()}}getYear(n){return this.clone(n).year()}getMonth(n){return this.clone(n).month()}getDate(n){return this.clone(n).date()}getDayOfWeek(n){return this.clone(n).day()}getMonthNames(n){return"long"==n?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(n){return"long"==n?this._localeData.longDaysOfWeek:"short"==n?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(n){return this.clone(n).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(n){return this.clone(n).daysInMonth()}clone(n){return n.clone().locale(this.locale)}createDate(n,c,A){const C=this._createMoment({year:n,month:c,date:A}).locale(this.locale);return C.isValid(),C}today(){return this._createMoment().locale(this.locale)}parse(n,c){return n&&"string"==typeof n?this._createMoment(n,c,this.locale):n?this._createMoment(n).locale(this.locale):null}format(n,c){return n=this.clone(n),this.isValid(n),n.format(c)}addCalendarYears(n,c){return this.clone(n).add({years:c})}addCalendarMonths(n,c){return this.clone(n).add({months:c})}addCalendarDays(n,c){return this.clone(n).add({days:c})}toIso8601(n){return this.clone(n).format()}deserialize(n){let c;if(n instanceof Date)c=this._createMoment(n).locale(this.locale);else if(this.isDateInstance(n))return this.clone(n);if("string"==typeof n){if(!n)return null;c=this._createMoment(n,d.ISO_8601).locale(this.locale)}return c&&this.isValid(c)?this._createMoment(c).locale(this.locale):super.deserialize(n)}isDateInstance(n){return d.isMoment(n)}isValid(n){return this.clone(n).isValid()}invalid(){return d.invalid()}_createMoment(n,c,A){const{strict:C,useUtc:I}=this._options||{};return I?d.utc(n,c,A,C):d(n,c,A,C)}}return r.\u0275fac=function(n){return new(n||r)(p.LFG(i.Ad,8),p.LFG(M,8))},r.\u0275prov=p.Yz7({token:r,factory:r.\u0275fac}),r})()},85472:(O,D,o)=>{o.d(D,{Z:()=>i});var p=o(83668);let i=(()=>{class h{constructor(d){this.el=d}ngOnInit(){for(var d=this.el.nativeElement,M=d.parentElement;d.firstChild;)M.insertBefore(d.firstChild,d);M.removeChild(d)}}return h.\u0275fac=function(d){return new(d||h)(p.Y36(p.SBq))},h.\u0275dir=p.lG2({type:h,selectors:[["","remove-host",""]]}),h})()},15470:(O,D,o)=>{o.d(D,{Q:()=>_});var p=o(92118),i=o(44290),h=o(47975),e=o(83668),d=o(86019),M=o(49133),t=o(78480),Z=o(15346);function E(f,u){if(1&f){const r=e.EpF();e.TgZ(0,"div",2),e.TgZ(1,"div",3),e.TgZ(2,"label",4),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e._UZ(7,"input",7),e._UZ(8,"mat-datepicker-toggle",8),e._UZ(9,"mat-datepicker",9,10),e.TgZ(11,"span",11),e.NdJ("click",function(){return e.CHM(r),e.oxw().clearDate("startDate")}),e.TgZ(12,"span",12),e._uU(13,"\xd7"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&f){const r=e.MAs(10),g=e.oxw();e.Q6J("ngClass",g.colClass)("formGroup",g.formInput),e.xp6(3),e.Oqu(e.lcZ(4,5,"FORM.start_date")),e.xp6(4),e.Q6J("matDatepicker",r),e.xp6(1),e.Q6J("for",r)}}function T(f,u){if(1&f){const r=e.EpF();e.TgZ(0,"div",13),e.TgZ(1,"div",3),e.TgZ(2,"label",4),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e._UZ(7,"input",14),e._UZ(8,"mat-datepicker-toggle",8),e._UZ(9,"mat-datepicker",9,15),e.TgZ(11,"span",11),e.NdJ("click",function(){return e.CHM(r),e.oxw().clearDate("endDate")}),e.TgZ(12,"span",12),e._uU(13,"\xd7"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&f){const r=e.MAs(10),g=e.oxw();e.Q6J("ngClass",g.colClass)("formGroup",g.formInput),e.xp6(3),e.Oqu(e.lcZ(4,5,"FORM.end_date")),e.xp6(4),e.Q6J("matDatepicker",r),e.xp6(1),e.Q6J("for",r)}}let _=(()=>{class f{constructor(){}ngOnInit(){this.getoneMonth()}clearDate(r){this.formInput.controls[r].setValue(null)}getoneMonth(){let r=new Date,g=new Date(r.setMonth(r.getMonth()-1)),n=new Date(r.setMonth(r.getMonth()+1));this.formInput.controls.startDate.setValue(g.toISOString()),this.formInput.controls.endDate.setValue(n.toISOString())}}return f.\u0275fac=function(r){return new(r||f)},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-start-end-date"]],inputs:{formInput:"formInput",colClass:"colClass"},features:[e._Bn([{provide:i._A,useClass:p.t7,deps:[i.Ad]},{provide:i.sG,useValue:h.Gs}])],decls:2,vars:2,consts:[["ng","",3,"ngClass","formGroup",4,"ngIf"],[3,"ngClass","formGroup",4,"ngIf"],["ng","",3,"ngClass","formGroup"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],[1,"input-group"],["matInput","","formControlName","startDate","readonly","",1,"form-control-sm","date-input",3,"matDatepicker"],["matSuffix","",3,"for"],["disabled","false"],["startDate",""],["title","Clear all",1,"ng-clear-wrapper",3,"click"],["aria-hidden","true",1,"ng-clear"],[3,"ngClass","formGroup"],["matInput","","formControlName","endDate","readonly","",1,"form-control-sm","date-input",3,"matDatepicker"],["endDate",""]],template:function(r,g){1&r&&(e.YNc(0,E,14,7,"div",0),e.YNc(1,T,14,7,"div",1)),2&r&&(e.Q6J("ngIf",g.formInput),e.xp6(1),e.Q6J("ngIf",g.formInput))},directives:[d.O5,d.mk,M.JL,M.sg,M.Fj,t.hl,M.JJ,M.u,t.nW,t.Mq],pipes:[Z.X],styles:[".input-group[_ngcontent-%COMP%]   .form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #E4E6EF;padding:0 .75rem;width:100%}.input-group[_ngcontent-%COMP%]   .mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;right:5px;top:-2px}.remove-p[_ngcontent-%COMP%]{margin-bottom:0}.col-form-label[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.form-group.row[_ngcontent-%COMP%]{align-items:center}.ng-clear-wrapper[_ngcontent-%COMP%]   .ng-clear[_ngcontent-%COMP%]{cursor:pointer;position:absolute;right:3rem;top:.3rem;font-size:1.2rem;color:#999}.ng-clear-wrapper[_ngcontent-%COMP%]   .ng-clear[_ngcontent-%COMP%]:hover{color:#d0021b}"]}),f})()},47975:(O,D,o)=>{function p(d){try{JSON.parse(d)}catch(M){return!1}return!0}o.d(D,{cU:()=>p,Gs:()=>i,Ny:()=>e});const i={parse:{dateInput:"DD-MM-YYYY"},display:{dateInput:"DD-MM-YYYY",monthYearLabel:"MMMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}},e={parse:{dateInput:"MM-YYYY"},display:{dateInput:"MM-YYYY",monthYearLabel:"MM-YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MM-YYYY"}}},53489:(O,D,o)=>{o.d(D,{w:()=>i});var p=o(49133);function i(h){Object.keys(h.controls).forEach(e=>{const d=h.get(e);d instanceof p.NI?d.markAsTouched({onlySelf:!0}):d instanceof p.cw&&this.validateAllFields(d)})}},78524:(O,D,o)=>{o.r(D),o.d(D,{CurrencyExChangeModule:()=>W});var p=o(86019),i=o(49133),h=o(92118),e=o(44290),d=o(47975),M=o(90949),t=o(83668),Z=o(54753),E=o(53489),T=o(92070),_=o(26697),f=o(85993),u=o(78480),r=o(15346);function g(m,y){1&m&&(t.TgZ(0,"div",17),t.TgZ(1,"h3",18),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.qZA()),2&m&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"FORM.edit_currency_exchange")))}function n(m,y){1&m&&(t.TgZ(0,"div",17),t.TgZ(1,"h3",18),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.qZA()),2&m&&(t.xp6(2),t.Oqu(t.lcZ(3,1,"FORM.create_currency_exchange")))}function c(m,y){if(1&m){const a=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){return t.CHM(a),t.oxw().modal.dismissAll()}),t._uU(1),t.ALo(2,"translate"),t.qZA()}2&m&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"FORM.btn_close")))}let A=(()=>{class m{constructor(a,s,l){this.masterDataService=a,this.modal=s,this.cdf=l,this.currencyType=[],this.isModal=!1,this.isEdit=!1,this.oldData={},this.formSubmit=new t.vpe}ngOnInit(){this.formGroup=new i.cw({type:new i.NI(this.oldData.type||"usd",[i.kI.required]),amount:new i.NI(this.oldData.amount||null,[i.kI.required]),date:new i.NI(this.oldData.date?T(this.oldData.date):null,[i.kI.required])})}ngAfterViewInit(){this.getType()}getType(){this.masterDataService.getDataByType("CURRENCY_TYPE").pipe((0,Z.U)(a=>a.map(s=>s.codeId))).toPromise().then(a=>{a&&(this.currencyType=a,this.cdf.detectChanges())})}isControlValid(a,s){const l=this.formGroup.controls[a];return l.valid&&(l.dirty||l.touched)}isControlInvalid(a,s){const l=this.formGroup.controls[a];return l.invalid&&(l.dirty||l.touched)}controlHasError(a,s,l){const v=this.formGroup.controls[s];return v.hasError(a)&&(v.dirty||v.touched)}isControlTouched(a,s){const l=this.formGroup.controls[a];return l.dirty||l.touched}saveData(){if(this.formGroup.valid)if(this.isModal){let a=this.convertDateFormatDDMMYYY(this.formGroup.value.date);console.log("date",a),this.formGroup.controls.date.setValue(a),this.modal.dismissAll({data:Object.assign(Object.assign({},this.formGroup.value),{id:this.id}),cmd:"save"})}else this.formSubmit.emit(Object.assign({},this.formGroup.value));else(0,E.w)(this.formGroup)}convertDateFormatDDMMYYY(a){var s=new Date(a),l=String(s.getDate()).padStart(2,"0"),v=String(s.getMonth()+1).padStart(2,"0");return s.getFullYear()+"-"+v+"-"+l}}return m.\u0275fac=function(a){return new(a||m)(t.Y36(_.D),t.Y36(f.FF),t.Y36(t.sBO))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-currency-add-form"]],inputs:{isModal:"isModal",isEdit:"isEdit"},outputs:{formSubmit:"formSubmit"},features:[t._Bn([{provide:e._A,useClass:h.t7,deps:[e.Ad]},{provide:e.sG,useValue:d.Gs}])],decls:32,vars:26,consts:[[1,"card","card-custom","gutter-b"],[1,"card-header"],["class","card-title",4,"ngIf"],[1,"card-body"],["action","#",1,"form","form-label-right",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"form-label"],[1,"input-group"],["matInput","","placeholder","Date","formControlName","date","readonly","",1,"form-control","form-control-sm","date-input",3,"matDatepicker"],["matSuffix","",2,"z-index","99999",3,"for"],["disabled","false",2,"z-index","99999"],["picker",""],["name","title","placeholder","Currency Type","autocomplete","off","formControlName","type",1,"form-control","form-control-sm"],["value","usd"],["type","number","name","amount","placeholder","Rate","autocomplete","off","formControlName","amount",1,"form-control","form-control-sm"],["type","button","class","btn btn-default",3,"click",4,"ngIf"],["type","submit",1,"btn","btn-primary","mx-2"],[1,"card-title"],[1,"card-label"],["type","button",1,"btn","btn-default",3,"click"]],template:function(a,s){if(1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,g,4,3,"div",2),t.YNc(3,n,4,3,"div",2),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"form",4),t.NdJ("ngSubmit",function(){return s.saveData()}),t.TgZ(6,"div",5),t.TgZ(7,"label",6),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"div",7),t._UZ(11,"input",8),t._UZ(12,"mat-datepicker-toggle",9),t._UZ(13,"mat-datepicker",10,11),t.qZA(),t.qZA(),t.TgZ(15,"div",5),t.TgZ(16,"label",6),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.TgZ(19,"select",12),t.TgZ(20,"option",13),t._uU(21,"USD"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"div",5),t.TgZ(23,"label",6),t._uU(24),t.ALo(25,"translate"),t.qZA(),t._UZ(26,"input",14),t.qZA(),t.TgZ(27,"div",5),t.YNc(28,c,3,3,"button",15),t.TgZ(29,"button",16),t._uU(30),t.ALo(31,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a){const l=t.MAs(14);t.xp6(2),t.Q6J("ngIf",s.isEdit),t.xp6(1),t.Q6J("ngIf",!s.isEdit),t.xp6(2),t.Q6J("formGroup",s.formGroup),t.xp6(3),t.Oqu(t.lcZ(9,18,"FORM.date")),t.xp6(3),t.Q6J("matDatepicker",l),t.xp6(1),t.Q6J("for",l),t.xp6(5),t.Oqu(t.lcZ(18,20,"FORM.currency")),t.xp6(2),t.ekj("is-invalid",s.isControlInvalid("type"))("is-valid",s.isControlValid("type")),t.xp6(5),t.Oqu(t.lcZ(25,22,"FORM.rate")),t.xp6(2),t.ekj("is-invalid",s.isControlInvalid("amount"))("is-valid",s.isControlValid("amount")),t.xp6(2),t.Q6J("ngIf",s.isModal),t.xp6(2),t.Oqu(t.lcZ(31,24,"FORM.btn_save"))}},directives:[p.O5,i._Y,i.JL,i.sg,i.Fj,u.hl,i.JJ,i.u,u.nW,u.Mq,i.EJ,i.YN,i.Kr,i.wV],pipes:[r.X],styles:[""]}),m})();var C=o(18510);const I=[{title:"Date",type:C.Y.FEILD,field:"date",isFromatDate:!0},{title:"Currency",type:C.Y.FEILD,field:"type",isUpper:!0},{title:"Rate",type:C.Y.FEILD,field:"amount"},{title:"Actions",type:C.Y.ACTION,field:"actions",btn:{edit:!0,delete:!0}}],L=["date","type","amount","actions"];var x=o(19113),S=o(60940),F=o(15470),P=o(85472);let b=(()=>{class m{constructor(a,s,l,v){this.currencyService=a,this.cdf=s,this.modalCrl=l,this.alertService=v,this.currencyList=[],this.ELEMENT_COL=JSON.parse(JSON.stringify(I)),this.displayedColumns=JSON.parse(JSON.stringify(L))}ngOnInit(){this.loadForm()}ngAfterViewInit(){this.getData()}loadForm(){this.exchangeForm=new i.cw({startDate:new i.NI(null),endDate:new i.NI(null),currency:new i.NI("usd")})}cancel(){this.exchangeForm.reset(),this.getData()}getData(){this.currencyService.getList(this.exchangeForm.value).toPromise().then(a=>{a&&(this.currencyList=a,this.cdf.detectChanges(),this.matTable.reChangeData())})}addData(){const a=this.modalCrl.open(A,{size:"md",backdrop:!1});a.componentInstance.isModal=!0,a.result.then(()=>{},s=>{s&&"save"==s.cmd&&this.saveData(s.data)})}saveData(a){this.currencyService.save(a).toPromise().then(l=>{l&&(this.getData(),this.alertService.activate("This record was created","Success Message"))})}updateData(a){this.currencyService.update(a.id,a).toPromise().then(s=>{s&&(this.getData(),this.alertService.activate("This record was updated","Success Message"))})}editData(a){const s=this.modalCrl.open(A,{size:"md",backdrop:!1});s.componentInstance.oldData=a,s.componentInstance.id=a.id,s.componentInstance.isModal=!0,s.componentInstance.isEdit=!0,s.result.then(()=>{},l=>{l&&"save"==l.cmd&&this.updateData(l.data)})}actionBtn(a){"edit"==a.cmd?this.editData(a.data):"delete"==a.cmd&&this.deleleData(a.data.id)}deleleData(a){this.alertService.activate("Are you sure want to delete?","Warning Message").then(s=>{s&&this.currencyService.delete(a).toPromise().then(l=>{if(l){let v=this.currencyList.findIndex(Y=>Y.id==a);v>=0&&(this.currencyList.splice(v,1),this.matTable.reChangeData(),this.alertService.activate("This record was deleted","Success Message").then(Y=>{}))}})})}}return m.\u0275fac=function(a){return new(a||m)(t.Y36(x.d),t.Y36(t.sBO),t.Y36(f.FF),t.Y36(S.c))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-currency-exchange"]],viewQuery:function(a,s){if(1&a&&t.Gf(M.I,5),2&a){let l;t.iGM(l=t.CRH())&&(s.matTable=l.first)}},features:[t._Bn([{provide:e._A,useClass:h.t7,deps:[e.Ad]},{provide:e.sG,useValue:d.Gs}])],decls:34,vars:15,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom",2,"margin-bottom","15px"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","btn-circle",2,"margin-right","1rem",3,"click"],[1,"flaticon2-plus"],[1,"flaticon2-magnifier-tool","search-tool",3,"click"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,""],[1,"card-body"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],["remove-host","",3,"formInput","colClass"],[1,"col-sm-4"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["name","title","placeholder","Currency Type","autocomplete","off","formControlName","currency",1,"form-control","form-control-sm"],["value","usd"],[1,"col-sm-12"],[1,"card","card-custom","gutter-b"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","emitter"]],template:function(a,s){1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.qZA(),t.TgZ(8,"div",6),t.TgZ(9,"button",7),t.NdJ("click",function(){return s.addData()}),t._UZ(10,"span",8),t.qZA(),t.TgZ(11,"span",9),t.NdJ("click",function(){return s.getData()}),t.qZA(),t.TgZ(12,"button",10),t.NdJ("click",function(){return s.cancel()}),t.TgZ(13,"span",11),t._uU(14),t.ALo(15,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",12),t.TgZ(17,"form",13),t.TgZ(18,"div",14),t._UZ(19,"app-start-end-date",15),t.TgZ(20,"div",16),t.TgZ(21,"div",17),t.TgZ(22,"label",18),t._uU(23),t.ALo(24,"translate"),t.qZA(),t.TgZ(25,"div",19),t.TgZ(26,"select",20),t.TgZ(27,"option",21),t._uU(28,"USD"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"div",0),t.TgZ(30,"div",22),t.TgZ(31,"div",23),t.TgZ(32,"div",24),t.TgZ(33,"app-material-table-view",25),t.NdJ("emitter",function(v){return s.actionBtn(v)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(6),t.Oqu(t.lcZ(7,9,"FORM.exchange_rate")),t.xp6(8),t.Oqu(t.lcZ(15,11,"FORM.btn_cancel")),t.xp6(3),t.Q6J("formGroup",s.exchangeForm),t.xp6(2),t.Q6J("formInput",s.exchangeForm)("colClass","col-sm-4"),t.xp6(4),t.Oqu(t.lcZ(24,13,"FORM.currency")),t.xp6(10),t.Q6J("data",s.currencyList)("colum",s.ELEMENT_COL)("displayedColumns",s.displayedColumns))},directives:[i._Y,i.JL,i.sg,F.Q,P.Z,i.EJ,i.JJ,i.u,i.YN,i.Kr,M.I],pipes:[r.X],styles:[""]}),m})();var U=o(70933),R=o(4205),N=o(45598),J=o(63699);let W=(()=>{class m{}return m.\u0275fac=function(a){return new(a||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[[p.ez,i.u5,i.UX,f.bz,f.IJ,u.FA,U.Q,N.fA,J.j,R.Bz.forChild([{path:"",component:b}])]]}),m})()},19113:(O,D,o)=>{o.d(D,{d:()=>E,E:()=>T});var p=o(18260),i=o(91691),h=o(92070),d=o(83668),M=o(44522);const t=`${p.N.apiUrl}/currency`,Z=`${p.N.apiUrl}/currencyWithType`;let E=(()=>{class _ extends i.i{constructor(u){super(u,t),this.httpClient=u}getList(u={}){let r=t+"?type=usd&";return u.startDate&&(r=r+"startDate="+h(u.startDate).format("YYYY-MM-DD")+"&"),u.endDate&&(r=r+"endDate="+h(u.endDate).format("YYYY-MM-DD")+"&"),this.httpClient.get(r)}}return _.\u0275fac=function(u){return new(u||_)(d.LFG(M.eN))},_.\u0275prov=d.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})(),T=(()=>{class _ extends i.i{constructor(u){super(u,Z),this.httpClient=u}getByType(u){return this.httpClient.get(Z+"/"+u)}}return _.\u0275fac=function(u){return new(u||_)(d.LFG(M.eN))},_.\u0275prov=d.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()}}]);