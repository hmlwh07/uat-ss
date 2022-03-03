"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8524,7975],{92118:(E,g,r)=>{r.d(g,{t7:()=>Y});var m=r(83668),a=r(44290),p=r(92070);const d=r.n(p)()||p,v=new m.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function(){return{useUtc:!1}}});function _(l,M){const e=Array(l);for(let s=0;s<l;s++)e[s]=M(s);return e}let Y=(()=>{class l extends a._A{constructor(e,s){super(),this._options=s,this.setLocale(e||d.locale())}setLocale(e){super.setLocale(e);let s=d.localeData(e);this._localeData={firstDayOfWeek:s.firstDayOfWeek(),longMonths:s.months(),shortMonths:s.monthsShort(),dates:_(31,C=>this.createDate(2017,0,C+1).format("D")),longDaysOfWeek:s.weekdays(),shortDaysOfWeek:s.weekdaysShort(),narrowDaysOfWeek:s.weekdaysMin()}}getYear(e){return this.clone(e).year()}getMonth(e){return this.clone(e).month()}getDate(e){return this.clone(e).date()}getDayOfWeek(e){return this.clone(e).day()}getMonthNames(e){return"long"==e?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(e){return"long"==e?this._localeData.longDaysOfWeek:"short"==e?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(e){return this.clone(e).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(e){return this.clone(e).daysInMonth()}clone(e){return e.clone().locale(this.locale)}createDate(e,s,C){const T=this._createMoment({year:e,month:s,date:C}).locale(this.locale);return T.isValid(),T}today(){return this._createMoment().locale(this.locale)}parse(e,s){return e&&"string"==typeof e?this._createMoment(e,s,this.locale):e?this._createMoment(e).locale(this.locale):null}format(e,s){return e=this.clone(e),this.isValid(e),e.format(s)}addCalendarYears(e,s){return this.clone(e).add({years:s})}addCalendarMonths(e,s){return this.clone(e).add({months:s})}addCalendarDays(e,s){return this.clone(e).add({days:s})}toIso8601(e){return this.clone(e).format()}deserialize(e){let s;if(e instanceof Date)s=this._createMoment(e).locale(this.locale);else if(this.isDateInstance(e))return this.clone(e);if("string"==typeof e){if(!e)return null;s=this._createMoment(e,d.ISO_8601).locale(this.locale)}return s&&this.isValid(s)?this._createMoment(s).locale(this.locale):super.deserialize(e)}isDateInstance(e){return d.isMoment(e)}isValid(e){return this.clone(e).isValid()}invalid(){return d.invalid()}_createMoment(e,s,C){const{strict:T,useUtc:I}=this._options||{};return I?d.utc(e,s,C,T):d(e,s,C,T)}}return l.\u0275fac=function(e){return new(e||l)(m.LFG(a.Ad,8),m.LFG(v,8))},l.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac}),l})()},47975:(E,g,r)=>{function m(d){try{JSON.parse(d)}catch(v){return!1}return!0}r.d(g,{cU:()=>m,Gs:()=>a,Ny:()=>h});const a={parse:{dateInput:"DD-MM-YYYY"},display:{dateInput:"DD-MM-YYYY",monthYearLabel:"MMMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}},h={parse:{dateInput:"MM-YYYY"},display:{dateInput:"MM-YYYY",monthYearLabel:"MM-YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MM-YYYY"}}},53489:(E,g,r)=>{r.d(g,{w:()=>a});var m=r(49133);function a(p){Object.keys(p.controls).forEach(h=>{const d=p.get(h);d instanceof m.NI?d.markAsTouched({onlySelf:!0}):d instanceof m.cw&&this.validateAllFields(d)})}},78524:(E,g,r)=>{r.r(g),r.d(g,{CurrencyExChangeModule:()=>N});var m=r(86019),a=r(49133),p=r(92118),h=r(44290),d=r(47975),v=r(90949),t=r(83668),_=r(54753),Y=r(53489),Z=r(92070),f=r(26697),y=r(85378),c=r(78480);function l(u,D){if(1&u){const n=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){return t.CHM(n),t.oxw().modal.dismissAll()}),t._uU(1,"Close"),t.qZA()}}let M=(()=>{class u{constructor(n,o,i){this.masterDataService=n,this.modal=o,this.cdf=i,this.currencyType=[],this.isModal=!1,this.isEdit=!1,this.oldData={},this.formSubmit=new t.vpe}ngOnInit(){this.formGroup=new a.cw({type:new a.NI(this.oldData.type||"usd",[a.kI.required]),amount:new a.NI(this.oldData.amount||null,[a.kI.required]),date:new a.NI(this.oldData.date?Z(this.oldData.date):null,[a.kI.required])})}ngAfterViewInit(){this.getType()}getType(){this.masterDataService.getDataByType("CURRENCY_TYPE").pipe((0,_.U)(n=>n.map(o=>o.codeId))).toPromise().then(n=>{n&&(this.currencyType=n,this.cdf.detectChanges())})}isControlValid(n,o){const i=this.formGroup.controls[n];return i.valid&&(i.dirty||i.touched)}isControlInvalid(n,o){const i=this.formGroup.controls[n];return i.invalid&&(i.dirty||i.touched)}controlHasError(n,o,i){const A=this.formGroup.controls[o];return A.hasError(n)&&(A.dirty||A.touched)}isControlTouched(n,o){const i=this.formGroup.controls[n];return i.dirty||i.touched}saveData(){if(this.formGroup.valid)if(this.isModal){let n=Z(this.formGroup.value.date);this.formGroup.controls.date.setValue(n),console.log(this.formGroup.value),this.modal.dismissAll({data:Object.assign(Object.assign({},this.formGroup.value),{id:this.id}),cmd:"save"})}else this.formSubmit.emit(Object.assign({},this.formGroup.value));else(0,Y.w)(this.formGroup)}}return u.\u0275fac=function(n){return new(n||u)(t.Y36(f.D),t.Y36(y.FF),t.Y36(t.sBO))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-currency-add-form"]],inputs:{isModal:"isModal",isEdit:"isEdit"},outputs:{formSubmit:"formSubmit"},features:[t._Bn([{provide:h._A,useClass:p.t7,deps:[h.Ad]},{provide:h.sG,useValue:d.Gs}])],decls:29,vars:13,consts:[[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-body"],["action","#",1,"form","form-label-right",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"form-label"],[1,"input-group"],["matInput","","placeholder","Date","formControlName","date","readonly","",1,"form-control","form-control-sm","date-input",3,"matDatepicker"],["matSuffix","",2,"z-index","99999",3,"for"],["disabled","false",2,"z-index","99999"],["picker",""],["name","title","placeholder","Currency Type","autocomplete","off","formControlName","type",1,"form-control","form-control-sm"],["value","usd"],["type","number","name","amount","placeholder","Rate","autocomplete","off","formControlName","amount",1,"form-control","form-control-sm"],["type","button","class","btn btn-default",3,"click",4,"ngIf"],["type","submit",1,"btn","btn-primary","mx-2"],["type","button",1,"btn","btn-default",3,"click"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h3",3),t._uU(4),t.qZA(),t.qZA(),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"form",5),t.NdJ("ngSubmit",function(){return o.saveData()}),t.TgZ(7,"div",6),t.TgZ(8,"label",7),t._uU(9,"Date"),t.qZA(),t.TgZ(10,"div",8),t._UZ(11,"input",9),t._UZ(12,"mat-datepicker-toggle",10),t._UZ(13,"mat-datepicker",11,12),t.qZA(),t.qZA(),t.TgZ(15,"div",6),t.TgZ(16,"label",7),t._uU(17,"Currency"),t.qZA(),t.TgZ(18,"select",13),t.TgZ(19,"option",14),t._uU(20,"USD"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",6),t.TgZ(22,"label",7),t._uU(23,"Rate"),t.qZA(),t._UZ(24,"input",15),t.qZA(),t.TgZ(25,"div",6),t.YNc(26,l,2,0,"button",16),t.TgZ(27,"button",17),t._uU(28,"Save"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.MAs(14);t.xp6(4),t.hij("",o.isEdit?"Edit":"Create"," Currency Exchange"),t.xp6(2),t.Q6J("formGroup",o.formGroup),t.xp6(5),t.Q6J("matDatepicker",i),t.xp6(1),t.Q6J("for",i),t.xp6(6),t.ekj("is-invalid",o.isControlInvalid("type"))("is-valid",o.isControlValid("type")),t.xp6(6),t.ekj("is-invalid",o.isControlInvalid("amount"))("is-valid",o.isControlValid("amount")),t.xp6(2),t.Q6J("ngIf",o.isModal)}},directives:[a._Y,a.JL,a.sg,a.Fj,c.hl,a.JJ,a.u,c.nW,c.Mq,a.EJ,a.YN,a.Kr,a.wV,m.O5],styles:[""]}),u})();var e=r(18510);const s=[{title:"Date",type:e.Y.FEILD,field:"date",isFromatDate:!0},{title:"Currency",type:e.Y.FEILD,field:"type",isUpper:!0},{title:"Rate",type:e.Y.FEILD,field:"amount"},{title:"Actions",type:e.Y.ACTION,field:"actions",btn:{edit:!0,delete:!0}}],C=["date","type","amount","actions"];var T=r(19113),I=r(60940);let O=(()=>{class u{constructor(n,o,i,A){this.currencyService=n,this.cdf=o,this.modalCrl=i,this.alertService=A,this.currencyList=[],this.ELEMENT_COL=JSON.parse(JSON.stringify(s)),this.displayedColumns=JSON.parse(JSON.stringify(C))}ngOnInit(){this.loadForm()}ngAfterViewInit(){this.getData()}loadForm(){this.exchangeForm=new a.cw({date:new a.NI(null),currency:new a.NI("usd")})}cancel(){this.exchangeForm.reset(),this.getData()}getData(){this.currencyService.getList(this.exchangeForm.value).toPromise().then(n=>{n&&(this.currencyList=n,this.cdf.detectChanges(),this.matTable.reChangeData())})}addData(){const n=this.modalCrl.open(M,{size:"md",backdrop:!1});n.componentInstance.isModal=!0,n.result.then(()=>{},o=>{o&&"save"==o.cmd&&this.saveData(o.data)})}saveData(n){let o=n;console.log(o),this.currencyService.save(o).toPromise().then(i=>{i&&(this.getData(),this.alertService.activate("This record was created","Success Message"))})}updateData(n){console.log("UPDATE",n),this.currencyService.update(n.id,n).toPromise().then(o=>{o&&(this.getData(),this.alertService.activate("This record was updated","Success Message"))})}editData(n){const o=this.modalCrl.open(M,{size:"md",backdrop:!1});o.componentInstance.oldData=n,o.componentInstance.id=n.id,o.componentInstance.isModal=!0,o.componentInstance.isEdit=!0,o.result.then(()=>{},i=>{i&&"save"==i.cmd&&this.updateData(i.data)})}actionBtn(n){"edit"==n.cmd?this.editData(n.data):"delete"==n.cmd&&this.deleleData(n.data.id)}deleleData(n){this.currencyService.delete(n).toPromise().then(o=>{if(o){let i=this.currencyList.findIndex(A=>A.id==n);i>=0&&(this.currencyList.splice(i,1),this.matTable.reChangeData(),this.alertService.activate("This record was deleted","Success Message"))}})}}return u.\u0275fac=function(n){return new(n||u)(t.Y36(T.d),t.Y36(t.sBO),t.Y36(y.FF),t.Y36(I.c))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-currency-exchange"]],viewQuery:function(n,o){if(1&n&&t.Gf(v.I,5),2&n){let i;t.iGM(i=t.CRH())&&(o.matTable=i.first)}},features:[t._Bn([{provide:h._A,useClass:p.t7,deps:[h.Ad]},{provide:h.sG,useValue:d.Gs}])],decls:41,vars:6,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom",2,"margin-bottom","15px"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","btn-circle",3,"click"],[1,"flaticon2-plus"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool"],[1,""],[1,"card-body"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["name","title","placeholder","Currency Type","autocomplete","off","formControlName","currency",1,"form-control","form-control-sm"],["value","usd"],[1,"input-group"],["matInput","","formControlName","date","readonly","",1,"form-control","form-control-sm","date-input",3,"matDatepicker"],["matSuffix","",3,"for"],["disabled","false"],["picker",""],[1,"col-sm-12"],[1,"card","card-custom","px-10","py-3"],[3,"data","colum","displayedColumns","emitter"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"Exchange Rate"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return o.addData()}),t._UZ(9,"span",8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return o.getData()}),t._UZ(11,"span",10),t.qZA(),t.TgZ(12,"button",9),t.NdJ("click",function(){return o.cancel()}),t.TgZ(13,"span",11),t._uU(14,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",12),t.TgZ(16,"form",13),t.TgZ(17,"div",14),t.TgZ(18,"div",15),t.TgZ(19,"div",16),t.TgZ(20,"label",17),t._uU(21,"Currency"),t.qZA(),t.TgZ(22,"div",18),t.TgZ(23,"select",19),t.TgZ(24,"option",20),t._uU(25,"USD"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",15),t.TgZ(27,"div",16),t.TgZ(28,"label",17),t._uU(29,"Date"),t.qZA(),t.TgZ(30,"div",18),t.TgZ(31,"div",21),t._UZ(32,"input",22),t._UZ(33,"mat-datepicker-toggle",23),t._UZ(34,"mat-datepicker",24,25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(36,"div",0),t.TgZ(37,"div",26),t.TgZ(38,"div",27),t.TgZ(39,"div",12),t.TgZ(40,"app-material-table-view",28),t.NdJ("emitter",function(A){return o.actionBtn(A)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const i=t.MAs(35);t.xp6(16),t.Q6J("formGroup",o.exchangeForm),t.xp6(16),t.Q6J("matDatepicker",i),t.xp6(1),t.Q6J("for",i),t.xp6(7),t.Q6J("data",o.currencyList)("colum",o.ELEMENT_COL)("displayedColumns",o.displayedColumns)}},directives:[a._Y,a.JL,a.sg,a.EJ,a.JJ,a.u,a.YN,a.Kr,a.Fj,c.hl,c.nW,c.Mq,v.I],styles:[""]}),u})();var b=r(70933),L=r(29018),S=r(45598);let N=(()=>{class u{}return u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[[m.ez,a.u5,a.UX,y.bz,y.IJ,c.FA,b.Q,S.fA,L.Bz.forChild([{path:"",component:O}])]]}),u})()},19113:(E,g,r)=>{r.d(g,{d:()=>Y,E:()=>Z});var m=r(18260),a=r(91691),p=r(92070),d=r(83668),v=r(44522);const t=`${m.N.apiUrl}/currency`,_=`${m.N.apiUrl}/currencyWithType`;let Y=(()=>{class f extends a.i{constructor(c){super(c,t),this.httpClient=c}getList(c={}){let l=_+"/usd?";return c.date&&(l=l+"date="+p(c.date).format("YYYY-MM-DD")+"&"),console.log(l),this.httpClient.get(l)}}return f.\u0275fac=function(c){return new(c||f)(d.LFG(v.eN))},f.\u0275prov=d.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})(),Z=(()=>{class f extends a.i{constructor(c){super(c,_),this.httpClient=c}getByType(c){return this.httpClient.get(_+"/"+c)}}return f.\u0275fac=function(c){return new(c||f)(d.LFG(v.eN))},f.\u0275prov=d.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()}}]);