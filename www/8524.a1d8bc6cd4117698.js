"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8524,7975],{92118:(O,y,a)=>{a.d(y,{t7:()=>Z});var m=a(83668),r=a(44290),h=a(92070);const d=a.n(h)()||h,C=new m.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function(){return{useUtc:!1}}});function _(l,v){const e=Array(l);for(let s=0;s<l;s++)e[s]=v(s);return e}let Z=(()=>{class l extends r._A{constructor(e,s){super(),this._options=s,this.setLocale(e||d.locale())}setLocale(e){super.setLocale(e);let s=d.localeData(e);this._localeData={firstDayOfWeek:s.firstDayOfWeek(),longMonths:s.months(),shortMonths:s.monthsShort(),dates:_(31,A=>this.createDate(2017,0,A+1).format("D")),longDaysOfWeek:s.weekdays(),shortDaysOfWeek:s.weekdaysShort(),narrowDaysOfWeek:s.weekdaysMin()}}getYear(e){return this.clone(e).year()}getMonth(e){return this.clone(e).month()}getDate(e){return this.clone(e).date()}getDayOfWeek(e){return this.clone(e).day()}getMonthNames(e){return"long"==e?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(e){return"long"==e?this._localeData.longDaysOfWeek:"short"==e?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(e){return this.clone(e).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(e){return this.clone(e).daysInMonth()}clone(e){return e.clone().locale(this.locale)}createDate(e,s,A){const T=this._createMoment({year:e,month:s,date:A}).locale(this.locale);return T.isValid(),T}today(){return this._createMoment().locale(this.locale)}parse(e,s){return e&&"string"==typeof e?this._createMoment(e,s,this.locale):e?this._createMoment(e).locale(this.locale):null}format(e,s){return e=this.clone(e),this.isValid(e),e.format(s)}addCalendarYears(e,s){return this.clone(e).add({years:s})}addCalendarMonths(e,s){return this.clone(e).add({months:s})}addCalendarDays(e,s){return this.clone(e).add({days:s})}toIso8601(e){return this.clone(e).format()}deserialize(e){let s;if(e instanceof Date)s=this._createMoment(e).locale(this.locale);else if(this.isDateInstance(e))return this.clone(e);if("string"==typeof e){if(!e)return null;s=this._createMoment(e,d.ISO_8601).locale(this.locale)}return s&&this.isValid(s)?this._createMoment(s).locale(this.locale):super.deserialize(e)}isDateInstance(e){return d.isMoment(e)}isValid(e){return this.clone(e).isValid()}invalid(){return d.invalid()}_createMoment(e,s,A){const{strict:T,useUtc:I}=this._options||{};return I?d.utc(e,s,A,T):d(e,s,A,T)}}return l.\u0275fac=function(e){return new(e||l)(m.LFG(r.Ad,8),m.LFG(C,8))},l.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac}),l})()},47975:(O,y,a)=>{function m(h){try{JSON.parse(h)}catch(p){return!1}return!0}a.d(y,{c:()=>m,G:()=>r});const r={parse:{dateInput:"DD-MM-YYYY"},display:{dateInput:"DD-MM-YYYY",monthYearLabel:"MMMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}}},53489:(O,y,a)=>{a.d(y,{w:()=>r});var m=a(49133);function r(h){Object.keys(h.controls).forEach(p=>{const d=h.get(p);d instanceof m.NI?d.markAsTouched({onlySelf:!0}):d instanceof m.cw&&this.validateAllFields(d)})}},78524:(O,y,a)=>{a.r(y),a.d(y,{CurrencyExChangeModule:()=>U});var m=a(86019),r=a(49133),h=a(92118),p=a(44290),d=a(47975),C=a(90949),t=a(83668),_=a(54753),Z=a(53489),E=a(92070),f=a(26697),g=a(85378),c=a(78480);function l(u,M){if(1&u){const o=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){return t.CHM(o),t.oxw().modal.dismissAll()}),t._uU(1,"Close"),t.qZA()}}let v=(()=>{class u{constructor(o,n,i){this.masterDataService=o,this.modal=n,this.cdf=i,this.currencyType=[],this.isModal=!1,this.isEdit=!1,this.oldData={},this.formSubmit=new t.vpe}ngOnInit(){this.formGroup=new r.cw({type:new r.NI(this.oldData.type||"usd",[r.kI.required]),amount:new r.NI(this.oldData.amount||null,[r.kI.required]),date:new r.NI(this.oldData.date?E(this.oldData.date):null,[r.kI.required])})}ngAfterViewInit(){this.getType()}getType(){this.masterDataService.getDataByType("CURRENCY_TYPE").pipe((0,_.U)(o=>o.map(n=>n.codeId))).toPromise().then(o=>{o&&(this.currencyType=o,this.cdf.detectChanges())})}isControlValid(o,n){const i=this.formGroup.controls[o];return i.valid&&(i.dirty||i.touched)}isControlInvalid(o,n){const i=this.formGroup.controls[o];return i.invalid&&(i.dirty||i.touched)}controlHasError(o,n,i){const D=this.formGroup.controls[n];return D.hasError(o)&&(D.dirty||D.touched)}isControlTouched(o,n){const i=this.formGroup.controls[o];return i.dirty||i.touched}saveData(){if(this.formGroup.valid)if(this.isModal){let o=E(this.formGroup.value.date);this.formGroup.controls.date.setValue(o),console.log(this.formGroup.value),this.modal.dismissAll({data:Object.assign(Object.assign({},this.formGroup.value),{id:this.id}),cmd:"save"})}else this.formSubmit.emit(Object.assign({},this.formGroup.value));else(0,Z.w)(this.formGroup)}}return u.\u0275fac=function(o){return new(o||u)(t.Y36(f.D),t.Y36(g.FF),t.Y36(t.sBO))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-currency-add-form"]],inputs:{isModal:"isModal",isEdit:"isEdit"},outputs:{formSubmit:"formSubmit"},features:[t._Bn([{provide:p._A,useClass:h.t7,deps:[p.Ad]},{provide:p.sG,useValue:d.G}])],decls:29,vars:13,consts:[[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"card-body"],["action","#",1,"form","form-label-right",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"form-label"],[1,"input-group"],["matInput","","placeholder","Date","formControlName","date","readonly","",1,"form-control","form-control-sm","date-input",3,"matDatepicker"],["matSuffix","",2,"z-index","99999",3,"for"],["disabled","false",2,"z-index","99999"],["picker",""],["name","title","placeholder","Currency Type","autocomplete","off","formControlName","type",1,"form-control","form-control-sm"],["value","usd"],["type","number","name","amount","placeholder","Rate","autocomplete","off","formControlName","amount",1,"form-control","form-control-sm"],["type","button","class","btn btn-default",3,"click",4,"ngIf"],["type","submit",1,"btn","btn-primary","mx-2"],["type","button",1,"btn","btn-default",3,"click"]],template:function(o,n){if(1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h3",3),t._uU(4),t.qZA(),t.qZA(),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"form",5),t.NdJ("ngSubmit",function(){return n.saveData()}),t.TgZ(7,"div",6),t.TgZ(8,"label",7),t._uU(9,"Date"),t.qZA(),t.TgZ(10,"div",8),t._UZ(11,"input",9),t._UZ(12,"mat-datepicker-toggle",10),t._UZ(13,"mat-datepicker",11,12),t.qZA(),t.qZA(),t.TgZ(15,"div",6),t.TgZ(16,"label",7),t._uU(17,"Currency"),t.qZA(),t.TgZ(18,"select",13),t.TgZ(19,"option",14),t._uU(20,"USD"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",6),t.TgZ(22,"label",7),t._uU(23,"Rate"),t.qZA(),t._UZ(24,"input",15),t.qZA(),t.TgZ(25,"div",6),t.YNc(26,l,2,0,"button",16),t.TgZ(27,"button",17),t._uU(28,"Save"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const i=t.MAs(14);t.xp6(4),t.hij("",n.isEdit?"Edit":"Create"," Currency Exchange"),t.xp6(2),t.Q6J("formGroup",n.formGroup),t.xp6(5),t.Q6J("matDatepicker",i),t.xp6(1),t.Q6J("for",i),t.xp6(6),t.ekj("is-invalid",n.isControlInvalid("type"))("is-valid",n.isControlValid("type")),t.xp6(6),t.ekj("is-invalid",n.isControlInvalid("amount"))("is-valid",n.isControlValid("amount")),t.xp6(2),t.Q6J("ngIf",n.isModal)}},directives:[r._Y,r.JL,r.sg,r.Fj,c.hl,r.JJ,r.u,c.nW,c.Mq,r.EJ,r.YN,r.Kr,r.wV,m.O5],styles:[""]}),u})();var e=a(18510);const s=[{title:"Date",type:e.Y.FEILD,field:"date",isFromatDate:!0},{title:"Currency",type:e.Y.FEILD,field:"type",isUpper:!0},{title:"Rate",type:e.Y.FEILD,field:"amount"},{title:"Actions",type:e.Y.ACTION,field:"actions",btn:{edit:!0,delete:!0}}],A=["date","type","amount","actions"];var T=a(19113),I=a(60940);let Y=(()=>{class u{constructor(o,n,i,D){this.currencyService=o,this.cdf=n,this.modalCrl=i,this.alertService=D,this.currencyList=[],this.ELEMENT_COL=JSON.parse(JSON.stringify(s)),this.displayedColumns=JSON.parse(JSON.stringify(A))}ngOnInit(){this.loadForm(),this.getData()}loadForm(){this.exchangeForm=new r.cw({date:new r.NI(null),currency:new r.NI(null)})}getData(){this.currencyService.getList(this.exchangeForm.value).toPromise().then(o=>{o&&(this.currencyList=o,this.cdf.detectChanges(),this.matTable.reChangeData())})}addData(){const o=this.modalCrl.open(v,{size:"md",backdrop:!1});o.componentInstance.isModal=!0,o.result.then(()=>{},n=>{n&&"save"==n.cmd&&this.saveData(n.data)})}saveData(o){let n=o;console.log(n),this.currencyService.save(n).toPromise().then(i=>{i&&(this.getData(),this.alertService.activate("This record was created","Success Message"))})}updateData(o){console.log("UPDATE",o),this.currencyService.update(o.id,o).toPromise().then(n=>{n&&(this.getData(),this.alertService.activate("This record was updated","Success Message"))})}editData(o){const n=this.modalCrl.open(v,{size:"md",backdrop:!1});n.componentInstance.oldData=o,n.componentInstance.id=o.id,n.componentInstance.isModal=!0,n.componentInstance.isEdit=!0,n.result.then(()=>{},i=>{i&&"save"==i.cmd&&this.updateData(i.data)})}actionBtn(o){"edit"==o.cmd?this.editData(o.data):"delete"==o.cmd&&this.deleleData(o.data.id)}deleleData(o){this.currencyService.delete(o).toPromise().then(n=>{if(n){let i=this.currencyList.findIndex(D=>D.id==o);i>=0&&(this.currencyList.splice(i,1),this.matTable.reChangeData())}})}}return u.\u0275fac=function(o){return new(o||u)(t.Y36(T.d),t.Y36(t.sBO),t.Y36(g.FF),t.Y36(I.c))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-currency-exchange"]],viewQuery:function(o,n){if(1&o&&t.Gf(C.I,5),2&o){let i;t.iGM(i=t.CRH())&&(n.matTable=i.first)}},features:[t._Bn([{provide:p._A,useClass:h.t7,deps:[p.Ad]},{provide:p.sG,useValue:d.G}])],decls:38,vars:6,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom",2,"margin-bottom","15px"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","btn-circle",3,"click"],[1,"flaticon2-plus"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool"],[1,"card-body"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["name","title","placeholder","Currency Type","autocomplete","off","formControlName","currency",1,"form-control","form-control-sm"],["value","usd"],[1,"input-group"],["matInput","","formControlName","date","readonly","",1,"form-control","form-control-sm","date-input",3,"matDatepicker"],["matSuffix","",3,"for"],["disabled","false"],["picker",""],[1,"col-sm-12"],[1,"card","card-custom","px-10","py-3"],[3,"data","colum","displayedColumns","emitter"]],template:function(o,n){if(1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"Exchange Rate"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return n.addData()}),t._UZ(9,"span",8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return n.getData()}),t._UZ(11,"span",10),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",11),t.TgZ(13,"form",12),t.TgZ(14,"div",13),t.TgZ(15,"div",14),t.TgZ(16,"div",15),t.TgZ(17,"label",16),t._uU(18,"Currency"),t.qZA(),t.TgZ(19,"div",17),t.TgZ(20,"select",18),t.TgZ(21,"option",19),t._uU(22,"USD"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",14),t.TgZ(24,"div",15),t.TgZ(25,"label",16),t._uU(26,"Date"),t.qZA(),t.TgZ(27,"div",17),t.TgZ(28,"div",20),t._UZ(29,"input",21),t._UZ(30,"mat-datepicker-toggle",22),t._UZ(31,"mat-datepicker",23,24),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"div",0),t.TgZ(34,"div",25),t.TgZ(35,"div",26),t.TgZ(36,"div",11),t.TgZ(37,"app-material-table-view",27),t.NdJ("emitter",function(D){return n.actionBtn(D)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const i=t.MAs(32);t.xp6(13),t.Q6J("formGroup",n.exchangeForm),t.xp6(16),t.Q6J("matDatepicker",i),t.xp6(1),t.Q6J("for",i),t.xp6(7),t.Q6J("data",n.currencyList)("colum",n.ELEMENT_COL)("displayedColumns",n.displayedColumns)}},directives:[r._Y,r.JL,r.sg,r.EJ,r.JJ,r.u,r.YN,r.Kr,r.Fj,c.hl,c.nW,c.Mq,C.I],styles:[""]}),u})();var b=a(70933),L=a(29018),S=a(45598);let U=(()=>{class u{}return u.\u0275fac=function(o){return new(o||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[[m.ez,r.u5,r.UX,g.bz,g.IJ,c.FA,b.Q,S.fA,L.Bz.forChild([{path:"",component:Y}])]]}),u})()},19113:(O,y,a)=>{a.d(y,{d:()=>Z,E:()=>E});var m=a(18260),r=a(91691),h=a(92070),d=a(83668),C=a(44522);const t=`${m.N.apiUrl}/currency`,_=`${m.N.apiUrl}/currencyWithType`;let Z=(()=>{class f extends r.i{constructor(c){super(c,t),this.httpClient=c}getList(c={}){let l=t+"?";return c.date&&(l=l+"date="+h(c.date).format("YYYY-MM-DD")+"&"),c.currency&&(l=l+"currency="+c.currency+"&"),console.log(l),this.httpClient.get(l)}}return f.\u0275fac=function(c){return new(c||f)(d.LFG(C.eN))},f.\u0275prov=d.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})(),E=(()=>{class f extends r.i{constructor(c){super(c,_),this.httpClient=c}getByType(c){return this.httpClient.get(_+"/"+c)}}return f.\u0275fac=function(c){return new(c||f)(d.LFG(C.eN))},f.\u0275prov=d.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()}}]);