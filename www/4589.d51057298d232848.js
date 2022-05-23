"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4589,7975],{92118:(Z,h,s)=>{s.d(h,{t7:()=>A});var m=s(83668),c=s(44290),M=s(92070);const d=s.n(M)()||M,p=new m.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function(){return{useUtc:!1}}});function D(r,f){const o=Array(r);for(let l=0;l<r;l++)o[l]=f(l);return o}let A=(()=>{class r extends c._A{constructor(o,l){super(),this._options=l,this.setLocale(o||d.locale())}setLocale(o){super.setLocale(o);let l=d.localeData(o);this._localeData={firstDayOfWeek:l.firstDayOfWeek(),longMonths:l.months(),shortMonths:l.monthsShort(),dates:D(31,v=>this.createDate(2017,0,v+1).format("D")),longDaysOfWeek:l.weekdays(),shortDaysOfWeek:l.weekdaysShort(),narrowDaysOfWeek:l.weekdaysMin()}}getYear(o){return this.clone(o).year()}getMonth(o){return this.clone(o).month()}getDate(o){return this.clone(o).date()}getDayOfWeek(o){return this.clone(o).day()}getMonthNames(o){return"long"==o?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(o){return"long"==o?this._localeData.longDaysOfWeek:"short"==o?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(o){return this.clone(o).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(o){return this.clone(o).daysInMonth()}clone(o){return o.clone().locale(this.locale)}createDate(o,l,v){const T=this._createMoment({year:o,month:l,date:v}).locale(this.locale);return T.isValid(),T}today(){return this._createMoment().locale(this.locale)}parse(o,l){return o&&"string"==typeof o?this._createMoment(o,l,this.locale):o?this._createMoment(o).locale(this.locale):null}format(o,l){return o=this.clone(o),this.isValid(o),o.format(l)}addCalendarYears(o,l){return this.clone(o).add({years:l})}addCalendarMonths(o,l){return this.clone(o).add({months:l})}addCalendarDays(o,l){return this.clone(o).add({days:l})}toIso8601(o){return this.clone(o).format()}deserialize(o){let l;if(o instanceof Date)l=this._createMoment(o).locale(this.locale);else if(this.isDateInstance(o))return this.clone(o);if("string"==typeof o){if(!o)return null;l=this._createMoment(o,d.ISO_8601).locale(this.locale)}return l&&this.isValid(l)?this._createMoment(l).locale(this.locale):super.deserialize(o)}isDateInstance(o){return d.isMoment(o)}isValid(o){return this.clone(o).isValid()}invalid(){return d.invalid()}_createMoment(o,l,v){const{strict:T,useUtc:E}=this._options||{};return E?d.utc(o,l,v,T):d(o,l,v,T)}}return r.\u0275fac=function(o){return new(o||r)(m.LFG(c.Ad,8),m.LFG(p,8))},r.\u0275prov=m.Yz7({token:r,factory:r.\u0275fac}),r})()},85472:(Z,h,s)=>{s.d(h,{Z:()=>c});var m=s(83668);let c=(()=>{class M{constructor(d){this.el=d}ngOnInit(){for(var d=this.el.nativeElement,p=d.parentElement;d.firstChild;)p.insertBefore(d.firstChild,d);p.removeChild(d)}}return M.\u0275fac=function(d){return new(d||M)(m.Y36(m.SBq))},M.\u0275dir=m.lG2({type:M,selectors:[["","remove-host",""]]}),M})()},15470:(Z,h,s)=>{s.d(h,{Q:()=>C});var m=s(92118),c=s(44290),M=s(47975),e=s(83668),d=s(86019),p=s(49133),t=s(78480),D=s(15346);function A(g,R){if(1&g){const r=e.EpF();e.TgZ(0,"div",2),e.TgZ(1,"div",3),e.TgZ(2,"label",4),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e._UZ(7,"input",7),e._UZ(8,"mat-datepicker-toggle",8),e._UZ(9,"mat-datepicker",9,10),e.TgZ(11,"span",11),e.NdJ("click",function(){return e.CHM(r),e.oxw().clearDate("startDate")}),e.TgZ(12,"span",12),e._uU(13,"\xd7"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&g){const r=e.MAs(10),f=e.oxw();e.Q6J("ngClass",f.colClass)("formGroup",f.formInput),e.xp6(3),e.Oqu(e.lcZ(4,5,"FORM.start_date")),e.xp6(4),e.Q6J("matDatepicker",r),e.xp6(1),e.Q6J("for",r)}}function y(g,R){if(1&g){const r=e.EpF();e.TgZ(0,"div",13),e.TgZ(1,"div",3),e.TgZ(2,"label",4),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e._UZ(7,"input",14),e._UZ(8,"mat-datepicker-toggle",8),e._UZ(9,"mat-datepicker",9,15),e.TgZ(11,"span",11),e.NdJ("click",function(){return e.CHM(r),e.oxw().clearDate("endDate")}),e.TgZ(12,"span",12),e._uU(13,"\xd7"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&g){const r=e.MAs(10),f=e.oxw();e.Q6J("ngClass",f.colClass)("formGroup",f.formInput),e.xp6(3),e.Oqu(e.lcZ(4,5,"FORM.end_date")),e.xp6(4),e.Q6J("matDatepicker",r),e.xp6(1),e.Q6J("for",r)}}let C=(()=>{class g{constructor(){}ngOnInit(){this.getoneMonth()}clearDate(r){this.formInput.controls[r].setValue(null)}getoneMonth(){let r=new Date,f=new Date(r.setMonth(r.getMonth()-1)),o=new Date(r.setMonth(r.getMonth()+1));this.formInput.controls.startDate.setValue(f.toISOString()),this.formInput.controls.endDate.setValue(o.toISOString())}}return g.\u0275fac=function(r){return new(r||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-start-end-date"]],inputs:{formInput:"formInput",colClass:"colClass"},features:[e._Bn([{provide:c._A,useClass:m.t7,deps:[c.Ad]},{provide:c.sG,useValue:M.Gs}])],decls:2,vars:2,consts:[["ng","",3,"ngClass","formGroup",4,"ngIf"],[3,"ngClass","formGroup",4,"ngIf"],["ng","",3,"ngClass","formGroup"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],[1,"input-group"],["matInput","","formControlName","startDate","readonly","",1,"form-control-sm","date-input",3,"matDatepicker"],["matSuffix","",3,"for"],["disabled","false"],["startDate",""],["title","Clear all",1,"ng-clear-wrapper",3,"click"],["aria-hidden","true",1,"ng-clear"],[3,"ngClass","formGroup"],["matInput","","formControlName","endDate","readonly","",1,"form-control-sm","date-input",3,"matDatepicker"],["endDate",""]],template:function(r,f){1&r&&(e.YNc(0,A,14,7,"div",0),e.YNc(1,y,14,7,"div",1)),2&r&&(e.Q6J("ngIf",f.formInput),e.xp6(1),e.Q6J("ngIf",f.formInput))},directives:[d.O5,d.mk,p.JL,p.sg,p.Fj,t.hl,p.JJ,p.u,t.nW,t.Mq],pipes:[D.X],styles:[".input-group[_ngcontent-%COMP%]   .form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #E4E6EF;padding:0 .75rem;width:100%}.input-group[_ngcontent-%COMP%]   .mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;right:5px;top:-2px}.remove-p[_ngcontent-%COMP%]{margin-bottom:0}.col-form-label[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.form-group.row[_ngcontent-%COMP%]{align-items:center}.ng-clear-wrapper[_ngcontent-%COMP%]   .ng-clear[_ngcontent-%COMP%]{cursor:pointer;position:absolute;right:3rem;top:.3rem;font-size:1.2rem;color:#999}.ng-clear-wrapper[_ngcontent-%COMP%]   .ng-clear[_ngcontent-%COMP%]:hover{color:#d0021b}"]}),g})()},47975:(Z,h,s)=>{function m(d){try{JSON.parse(d)}catch(p){return!1}return!0}s.d(h,{cU:()=>m,Gs:()=>c,Ny:()=>e});const c={parse:{dateInput:"DD-MM-YYYY"},display:{dateInput:"DD-MM-YYYY",monthYearLabel:"MMMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}},e={parse:{dateInput:"MM-YYYY"},display:{dateInput:"MM-YYYY",monthYearLabel:"MM-YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MM-YYYY"}}},15346:(Z,h,s)=>{s.d(h,{X:()=>M});var m=s(83668),c=s(59832);let M=(()=>{class e{constructor(p){this._languageService=p}transform(p){if(p){let t=this._languageService.getSelectedLanguage(),D=p.split(".");if(2==D.length)try{return this._languageService.langs[t][D[0]][D[1]]}catch(A){return"Can't Translate Data"}}return p}}return e.\u0275fac=function(p){return new(p||e)(m.Y36(c.K,16))},e.\u0275pipe=m.Yjl({name:"translate",type:e,pure:!1}),e})()},94589:(Z,h,s)=>{s.r(h),s.d(h,{ReRerunJobPageModule:()=>W});var m=s(86019),c=s(49133),M=s(71704),e=s(4205),d=s(64762),p=s(90949),t=s(83668),D=s(85993);function A(i,_){if(1&i&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&i){const n=_.$implicit;t.xp6(1),t.Oqu(n)}}function y(i,_){if(1&i){const n=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){return t.CHM(n),t.oxw().reRun()}),t._uU(1,"Re-Run"),t.qZA()}}let C=(()=>{class i{constructor(n){this.ngModal=n}ngOnInit(){this.data.errorDescription=(this.data.logMsg+"").split(",")}closeModal(){this.ngModal.dismiss()}reRun(){this.ngModal.dismiss({type:"rerun"})}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(D.Kz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-error-details"]],inputs:{data:"data"},decls:31,vars:5,consts:[[1,"modal-content"],[1,"modal-header"],["id","example-modal-sizes-title-lg",1,"modal-title","h4","left-border-image"],[1,"overlay","overlay-block","cursor-default","modal-body"],[1,"row",2,"align-items","center"],[1,"col-sm-12"],[1,"form-group","row"],[1,"col-sm-4","col-form-label","text-bold"],[1,"col-sm-8"],[1,"error-list"],[4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","button","class","btn btn-primary btn-elevate mr-2",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary","btn-elevate","mr-2",3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t.TgZ(8,"label",7),t._uU(9,"Job Type -"),t.qZA(),t.TgZ(10,"div",8),t._uU(11),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(12,"div",4),t.TgZ(13,"div",5),t.TgZ(14,"div",6),t.TgZ(15,"label",7),t._uU(16,"Job Name -"),t.qZA(),t.TgZ(17,"div",8),t._uU(18),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",4),t.TgZ(20,"div",5),t.TgZ(21,"div",6),t.TgZ(22,"label",7),t._uU(23,"Description -"),t.qZA(),t.TgZ(24,"div",8),t.TgZ(25,"ul",9),t.YNc(26,A,2,1,"li",10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"div",11),t.TgZ(28,"button",12),t.NdJ("click",function(){return a.closeModal()}),t._uU(29,"Close"),t.qZA(),t.YNc(30,y,2,0,"button",13),t.qZA(),t.qZA()),2&n&&(t.xp6(3),t.hij(" ",a.data.jobType," "),t.xp6(8),t.hij(" ",a.data.jobType," "),t.xp6(7),t.hij(" ",a.data.jobName," "),t.xp6(8),t.Q6J("ngForOf",a.data.errorDescription),t.xp6(4),t.Q6J("ngIf","FAIL"==a.data.status))},directives:[m.sg,m.O5],styles:[".form-group.row[_ngcontent-%COMP%]{align-items:flex-start}.error-list[_ngcontent-%COMP%]{padding:0}"]}),i})();var g=s(18510);const R=[{title:"Job Type",type:g.Y.FEILD,field:"jobType"},{title:"Job Name",type:g.Y.FEILD,field:"jobName"},{title:"Date",type:g.Y.FEILD,field:"runDate",isFromatDate:!0},{title:"status",type:g.Y.FEILD,field:"status",isTitle:!0},{title:"Actions",type:g.Y.ACTION,field:"actions",btn:{view:!0,rerun:!0}}],r=["jobType","jobName","runDate","status","actions"],f=[{title:"Job Type",type:g.Y.FEILD,field:"jobType"},{title:"Job Name",type:g.Y.FEILD,field:"jobName"},{title:"Date",type:g.Y.FEILD,field:"runDate",isFromatDate:!0},{title:"Status",type:g.Y.FEILD,field:"status",isTitle:!0},{title:"Actions",type:g.Y.ACTION,field:"actions",btn:{view:!0,rerun:!0}}],o=["jobType","jobName","runDate","status","actions"];var l=s(92070),v=s(18260),T=s(44522);const E=`${v.N.apiUrl}/scheduler-log/`,O=`${v.N.apiUrl}/scheduler/status/run`,I=`${v.N.apiUrl}/scheduler/renewal/run`,P=`${v.N.apiUrl}/scheduler/crm/customer/run`;let L=(()=>{class i{constructor(n){this.httpClient=n}getReRunListByType(n={}){let a=E,u={endDate:"",startDate:"",jobName:"",jobType:"",status:""};return n.startDate&&(u.startDate=l(n.startDate).format("YYYY-MM-DD")),n.endDate&&(u.endDate=l(n.endDate).format("YYYY-MM-DD")),n.name&&(u.jobName=n.name),n.typeCode&&(u.jobType=n.typeCode),n.status&&(u.status=n.status),this.httpClient.post(a,u)}reRunRenewal(){return this.httpClient.post(I,{})}reRunPolicyStatus(n){let a=l(n).format("YYYY-MM-DD");return this.httpClient.post(O+"?date="+a,{})}reRunCRM(n){let a=l(n).format("YYYY-MM-DD");return this.httpClient.post(P+"?date="+a,{})}}return i.\u0275fac=function(n){return new(n||i)(t.LFG(T.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var S=s(60940),N=s(15470),J=s(85472),Y=s(57842),U=s(15346);function F(i,_){if(1&i){const n=t.EpF();t.TgZ(0,"div",26),t.TgZ(1,"button",8),t.NdJ("click",function(){return t.CHM(n),t.oxw().reRunRenewal()}),t.TgZ(2,"span",9),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.qZA(),t.qZA()}2&i&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"CARD.renewalRerun")))}const w=[{path:"",component:(()=>{class i{constructor(n,a,u,b){this.reRunService=n,this.modalService=a,this.cdf=u,this.alertService=b,this.typeOption=[{code:"",value:"All"},{code:"CRM",value:"Management Portal"},{code:"SALE",value:"Sale Portal"}],this.nameOption=[{code:"",value:"All"},{code:"RunTCSAPIByScheduler",value:"Management Portal"},{code:"Renewal Policy",value:"Renewal Policy"},{code:"Update Policy Status",value:"Update Policy Status"}],this.statusOption=[{code:"",value:"All"},{code:"FAIL",value:"Fail"},{code:"SUCCESS",value:"Success"}],this.listFromCRM=[],this.listFromSale=[],this.isCRM=!1,this.ELEMENT_COL=JSON.parse(JSON.stringify(R)),this.displayedColumns=JSON.parse(JSON.stringify(r)),this.ELEMENT_COL_SALE=JSON.parse(JSON.stringify(f)),this.displayedColumnsSale=JSON.parse(JSON.stringify(o))}ngOnInit(){this.loadForm()}ngAfterViewInit(){this.getList()}loadForm(){this.reRunForm=new c.cw({startDate:new c.NI(null),endDate:new c.NI(null),typeCode:new c.NI(""),name:new c.NI(""),status:new c.NI("")})}getList(){this.reRunService.getReRunListByType(this.reRunForm.value).toPromise().then(n=>{n&&(console.log("res",n),this.listFromCRM=n,this.cdf.detectChanges(),this.matTableCRM.reChangeData(),this.isCRM="CRM"==this.reRunForm.controls.typeCode.value)})}actionBtn(n){if(console.log(n),"view"==n.cmd&&this.viewErrorDetail(n.data),"rerun"==n.cmd){if("FAIL"!=n.data.status)return this.alertService.activate("This job was already successful!","Warining Message"),!1;this.alertService.activate("Are you sure want to re-run?","Warining Message").then(a=>(0,d.mG)(this,void 0,void 0,function*(){a&&("CRM"==n.data.jobType?this.reRunCRM(n.data):"Renewal Policy"==n.data.jobName?this.reRunRenewal():this.reRunPolicyStatus(n.data))}))}}reRunRenewal(){this.reRunService.reRunRenewal().toPromise().then(n=>{console.log(n),n&&(this.alertService.activate("This job was re-run successful","Success Message"),this.getList())})}reRunPolicyStatus(n){this.reRunService.reRunPolicyStatus(n.runDate).toPromise().then(a=>{a&&(this.alertService.activate("This job was re-run successful","Success Message"),this.getList())})}reRunCRM(n){this.reRunService.reRunCRM(n.runDate).toPromise().then(a=>{a&&(this.alertService.activate("This job was re-run successful","Success Message"),this.getList())})}viewErrorDetail(n){let a;a=this.modalService.open(C,{size:"lg",backdrop:!0,centered:!0,scrollable:!0}),a.componentInstance.data=n,a.result.then(()=>{},u=>{if(u){if("FAIL"!=n.status)return this.alertService.activate("This job was already successful!","Warining Message"),!1;this.alertService.activate("Are you sure want to re-run?","Alert Message").then(b=>(0,d.mG)(this,void 0,void 0,function*(){b&&("CRM"==n.jobType?this.reRunCRM(n):"Renewal Policy"==n.jobName?this.reRunRenewal():this.reRunPolicyStatus(n))}))}})}isControlValid(n){const a=this.reRunForm.controls[n];return a.valid&&(a.dirty||a.touched)}isControlInvalid(n){const a=this.reRunForm.controls[n];return a.invalid&&(a.dirty||a.touched)}controlHasError(n,a){const u=this.reRunForm.controls[a];return u.hasError(n)&&(u.dirty||u.touched)}isControlTouched(n){const a=this.reRunForm.controls[n];return a.dirty||a.touched}cancel(){this.reRunForm.reset(),this.getList()}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(L),t.Y36(D.FF),t.Y36(t.sBO),t.Y36(S.c))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-re-rerun-job"]],viewQuery:function(n,a){if(1&n&&(t.Gf(p.I,5),t.Gf(p.I,5)),2&n){let u;t.iGM(u=t.CRH())&&(a.matTableCRM=u.first),t.iGM(u=t.CRH())&&(a.matTableSale=u.first)}},decls:45,vars:34,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],[1,"flaticon2-magnifier-tool","search-tool",3,"click"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],["remove-host","",3,"formInput","colClass"],[1,"col-xl-4","col-sm-6"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["bindLabel","value","bindValue","code","formControlName","typeCode",1,"ng-custom-select",3,"items","clearable"],["bindLabel","value","bindValue","code","formControlName","name",1,"ng-custom-select",3,"items","clearable"],["bindLabel","value","bindValue","code","formControlName","status",1,"ng-custom-select",3,"items","clearable"],[1,"card","card-custom","gutter-b","data"],[1,"card-body","customer-card-body"],["style","float:right ; margin-top:15px",4,"ngIf"],[3,"data","colum","displayedColumns","emitter"],["matTableCRM",""],[2,"float","right","margin-top","15px"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.qZA(),t.TgZ(8,"div",6),t.TgZ(9,"span",7),t.NdJ("click",function(){return a.getList()}),t.qZA(),t.TgZ(10,"button",8),t.NdJ("click",function(){return a.cancel()}),t.TgZ(11,"span",9),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",10),t.TgZ(15,"form",11),t.TgZ(16,"div",12),t._UZ(17,"app-start-end-date",13),t.TgZ(18,"div",14),t.TgZ(19,"div",15),t.TgZ(20,"label",16),t._uU(21),t.ALo(22,"translate"),t.qZA(),t.TgZ(23,"div",17),t._UZ(24,"ng-select",18),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"div",12),t.TgZ(26,"div",14),t.TgZ(27,"div",15),t.TgZ(28,"label",16),t._uU(29,"Name"),t.qZA(),t.TgZ(30,"div",17),t._UZ(31,"ng-select",19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"div",14),t.TgZ(33,"div",15),t.TgZ(34,"label",16),t._uU(35,"Status"),t.qZA(),t.TgZ(36,"div",17),t._UZ(37,"ng-select",20),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(38,"div",0),t.TgZ(39,"div",1),t.TgZ(40,"div",21),t.TgZ(41,"div",22),t.YNc(42,F,5,3,"div",23),t.TgZ(43,"app-material-table-view",24,25),t.NdJ("emitter",function(b){return a.actionBtn(b)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(6),t.hij(" ",t.lcZ(7,28,"FORM.rerun_list"),""),t.xp6(6),t.Oqu(t.lcZ(13,30,"CARD.cancel")),t.xp6(3),t.Q6J("formGroup",a.reRunForm),t.xp6(2),t.Q6J("formInput",a.reRunForm)("colClass","col-xl-4 col-sm-6"),t.xp6(4),t.Oqu(t.lcZ(22,32,"FORM.type")),t.xp6(3),t.ekj("is-invalid",a.isControlInvalid("typeCode"))("is-valid",a.isControlValid("typeCode")),t.Q6J("items",a.typeOption)("clearable",!1),t.xp6(7),t.ekj("is-invalid",a.isControlInvalid("name"))("is-valid",a.isControlValid("name")),t.Q6J("items",a.nameOption)("clearable",!1),t.xp6(6),t.ekj("is-invalid",a.isControlInvalid("status"))("is-valid",a.isControlValid("status")),t.Q6J("items",a.statusOption)("clearable",!1),t.xp6(5),t.Q6J("ngIf",!a.isCRM&&a.listFromSale.length>0),t.xp6(1),t.Q6J("data",a.listFromCRM)("colum",a.ELEMENT_COL)("displayedColumns",a.displayedColumns))},directives:[c._Y,c.JL,c.sg,N.Q,J.Z,Y.w9,c.JJ,c.u,m.O5,p.I],pipes:[U.X],styles:[""]}),i})()}];let q=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[e.Bz.forChild(w)],e.Bz]}),i})();var j=s(45598),x=s(63699);let W=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[],imports:[[m.ez,c.u5,M.Pc,c.UX,Y.A0,j.fA,x.j,q]]}),i})()}}]);