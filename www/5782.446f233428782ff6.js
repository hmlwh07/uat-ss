"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5782,8757],{6517:(M,A,m)=>{m.d(A,{t7:()=>v});var t=m(5e3),l=m(19775),f=m(15439);const _=m.n(f)()||f,T=new t.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function D(){return{useUtc:!1}}});function g(r,d){const o=Array(r);for(let c=0;c<r;c++)o[c]=d(c);return o}let v=(()=>{class r extends l._A{constructor(o,c){super(),this._options=c,this.setLocale(o||_.locale())}setLocale(o){super.setLocale(o);let c=_.localeData(o);this._localeData={firstDayOfWeek:c.firstDayOfWeek(),longMonths:c.months(),shortMonths:c.monthsShort(),dates:g(31,u=>this.createDate(2017,0,u+1).format("D")),longDaysOfWeek:c.weekdays(),shortDaysOfWeek:c.weekdaysShort(),narrowDaysOfWeek:c.weekdaysMin()}}getYear(o){return this.clone(o).year()}getMonth(o){return this.clone(o).month()}getDate(o){return this.clone(o).date()}getDayOfWeek(o){return this.clone(o).day()}getMonthNames(o){return"long"==o?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(o){return"long"==o?this._localeData.longDaysOfWeek:"short"==o?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(o){return this.clone(o).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(o){return this.clone(o).daysInMonth()}clone(o){return o.clone().locale(this.locale)}createDate(o,c,u){const h=this._createMoment({year:o,month:c,date:u}).locale(this.locale);return h.isValid(),h}today(){return this._createMoment().locale(this.locale)}parse(o,c){return o&&"string"==typeof o?this._createMoment(o,c,this.locale):o?this._createMoment(o).locale(this.locale):null}format(o,c){return o=this.clone(o),this.isValid(o),o.format(c)}addCalendarYears(o,c){return this.clone(o).add({years:c})}addCalendarMonths(o,c){return this.clone(o).add({months:c})}addCalendarDays(o,c){return this.clone(o).add({days:c})}toIso8601(o){return this.clone(o).format()}deserialize(o){let c;if(o instanceof Date)c=this._createMoment(o).locale(this.locale);else if(this.isDateInstance(o))return this.clone(o);if("string"==typeof o){if(!o)return null;c=this._createMoment(o,_.ISO_8601).locale(this.locale)}return c&&this.isValid(c)?this._createMoment(c).locale(this.locale):super.deserialize(o)}isDateInstance(o){return _.isMoment(o)}isValid(o){return this.clone(o).isValid()}invalid(){return _.invalid()}_createMoment(o,c,u){const{strict:h,useUtc:y}=this._options||{};return y?_.utc(o,c,u,h):_(o,c,u,h)}}return r.\u0275fac=function(o){return new(o||r)(t.LFG(l.Ad,8),t.LFG(T,8))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac}),r})()},88757:(M,A,m)=>{function t(_){try{JSON.parse(_)}catch(T){return!1}return!0}m.d(A,{Gs:()=>l,Ny:()=>Z,cU:()=>t});const l={parse:{dateInput:"DD-MM-YYYY"},display:{dateInput:"DD-MM-YYYY",monthYearLabel:"MMMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}},Z={parse:{dateInput:"MM-YYYY"},display:{dateInput:"MM-YYYY",monthYearLabel:"MM-YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MM-YYYY"}}},60834:(M,A,m)=>{m.d(A,{o:()=>qt});var t=m(5e3),l=m(69808),f=m(14538);function Z(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){const p=t.CHM(n).$implicit;return t.oxw(2).clickMenuItem(p)}),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.qZA()}if(2&e){const n=i.$implicit;t.xp6(2),t.hij(" ",n,"")}}function _(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"div",21),t.NdJ("click",function(){const p=t.CHM(n).$implicit;return t.oxw(2).pageBtnClicked(p)}),t.TgZ(2,"span",22),t._uU(3),t.qZA(),t.qZA(),t.qZA()}if(2&e){const n=i.$implicit,a=t.oxw(2);t.xp6(1),t.Q6J("ngClass",a.selectedPageBtn==n?"pager_primary_btn_selected mr_15":"pager_primary_btn mr_15"),t.xp6(2),t.Oqu(n)}}function T(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t.TgZ(3,"div",4),t.TgZ(4,"div",5),t.TgZ(5,"span"),t._uU(6,"Items per page:"),t.qZA(),t.TgZ(7,"button",6),t.TgZ(8,"div",7),t._uU(9),t._UZ(10,"img",8),t.qZA(),t.qZA(),t.TgZ(11,"mat-menu",null,9),t.YNc(13,Z,3,1,"button",10),t.qZA(),t.qZA(),t.TgZ(14,"div",11),t.TgZ(15,"span"),t._uU(16),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"div",3),t.TgZ(18,"div",12),t.TgZ(19,"div",13),t.NdJ("click",function(){return t.CHM(n),t.oxw().pageFirst()}),t._UZ(20,"img",14),t.qZA(),t.TgZ(21,"div",13),t.NdJ("click",function(){return t.CHM(n),t.oxw().pageDecresed()}),t._UZ(22,"img",15),t.qZA(),t.YNc(23,_,4,2,"div",16),t.TgZ(24,"div",13),t.NdJ("click",function(){return t.CHM(n),t.oxw().pageIncreased()}),t._UZ(25,"img",17),t.qZA(),t.TgZ(26,"div",18),t.NdJ("click",function(){return t.CHM(n),t.oxw().pageLast()}),t._UZ(27,"img",19),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const n=t.MAs(12),a=t.oxw();t.xp6(7),t.Q6J("matMenuTriggerFor",n),t.xp6(2),t.Oqu(a.selectedPageSize),t.xp6(4),t.Q6J("ngForOf",a.pageSizeArray),t.xp6(3),t.lnq("",a.started," \u2013 ",a.endPageIndex," of ",a.sourceData.length,""),t.xp6(7),t.Q6J("ngForOf",a.viewPageButtonArray)}}let D=(()=>{class e{constructor(n){this.cdf=n,this.activePage=new t.vpe,this.sourceData=[],this.displayBtnCount=3,this.pageSizeArray=[5,10,15],this.selectedPageSize=5,this.viewPageButtonArray=[],this.responseData=[]}ngOnInit(){this.sourceData.length>0&&this.prepareBtnArray()}prepareBtnArray(){this.no_of_pages=this.sourceData.length%this.selectedPageSize==0?Math.floor(this.sourceData.length/this.selectedPageSize):Math.floor(this.sourceData.length/this.selectedPageSize)+1,this.selectedPageBtn=this.startPageIndex=1,this.showingListCnt(),this.setPageBtnArray()}showingListCnt(){let n=this.selectedPageBtn*this.selectedPageSize;this.started=n-this.selectedPageSize+1,this.endPageIndex=n>this.sourceData.length?this.sourceData.length:n}ngAfterViewInit(){this.cdf.detectChanges()}ngOnDestroy(){this.activePage.unsubscribe()}clickMenuItem(n){this.selectedPageSize=n,this.prepareBtnArray()}pageBtnClicked(n){this.selectedPageBtn=n,this.calPageBtn()}pageIncreased(){this.selectedPageBtn=this.selectedPageBtn==this.no_of_pages?this.no_of_pages:this.selectedPageBtn+1,this.calPageBtn()}pageDecresed(){this.selectedPageBtn=1==this.selectedPageBtn?1:this.selectedPageBtn-1,this.calPageBtn()}pageFirst(){this.selectedPageBtn=1,this.calPageBtn()}pageLast(){this.selectedPageBtn=this.no_of_pages,this.calPageBtn()}setPageBtnArray(){this.viewPageButtonArray=[];for(let n=0;n<this.displayBtnCount;n++)this.startPageIndex+n<=this.no_of_pages&&this.viewPageButtonArray.push(this.startPageIndex+n);this.cdf.detectChanges(),this.activePage.emit({activePage:this.selectedPageBtn,pageSize:this.selectedPageSize})}calPageBtn(){this.startPageIndex=1==this.selectedPageBtn?this.selectedPageBtn:this.selectedPageBtn-1,this.showingListCnt(),this.setPageBtnArray()}calDataRows(n,a){this.responseData=[];let s=a<n+this.selectedPageSize-1?a-n+1:this.selectedPageSize;for(let p=0;p<s;p++)n+p<=a&&this.responseData.push(this.sourceData[n+p])}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-pager"]],inputs:{sourceData:"sourceData",formType:"formType"},outputs:{activePage:"activePage"},decls:1,vars:1,consts:[["class","pager",4,"ngIf"],[1,"pager"],[1,"row"],[1,"col-md-6","col-sm-6","col-xs-12"],[1,"pager_btn_wrapper","mt_5","mb_10","right"],[1,"pager_atom"],["mat-button","",1,"menu_bg",3,"matMenuTriggerFor"],[1,"pager_btn_wrapper","ml_15"],["src","./assets/images/down_arrow-01.svg","alt","",1,"ml_30"],["menu","matMenu"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],[1,"pager_atom","ml_15"],[1,"pager_btn_wrapper","right"],[1,"mr_15",3,"click"],["src","./../../../../assets/images/chevron-double-left.svg","alt","",1,"pager_icon"],["src","./assets/images/arrow-left.svg","alt","",1,"pager_icon"],[4,"ngFor","ngForOf"],["src","./assets/images/arrow-right.svg","alt","",1,"pager_icon"],[3,"click"],["src","./assets/images/chevron-double-right.svg","alt","",1,"pager_icon"],["mat-menu-item","",3,"click"],[3,"ngClass","click"],[1,"pager_display"]],template:function(n,a){1&n&&t.YNc(0,T,28,7,"div",0),2&n&&t.Q6J("ngIf",a.sourceData.length>0)},directives:[l.O5,f.p6,f.VK,l.sg,f.OP,l.mk],styles:[".pager[_ngcontent-%COMP%]{width:100%;padding-top:15px}.pager_atom[_ngcontent-%COMP%]{margin:6px 15px 0 0}.pager_atom_btn[_ngcontent-%COMP%]{margin-right:15px}.right[_ngcontent-%COMP%]{float:right}.pager_btn_wrapper[_ngcontent-%COMP%]{display:flex}.mr_15[_ngcontent-%COMP%]{margin-right:15px}.mt_5[_ngcontent-%COMP%]{margin-top:5px}.common_btn[_ngcontent-%COMP%], .pager_primary_btn_selected[_ngcontent-%COMP%], .pager_primary_btn[_ngcontent-%COMP%]{border-radius:50%;width:45px;height:45px;align-items:center;justify-content:center;text-align:center;vertical-align:middle;padding:12px;cursor:pointer}.pager_primary_btn[_ngcontent-%COMP%]{background-color:#005f99;color:#fff}.pager_primary_btn_selected[_ngcontent-%COMP%]{background-color:#00acea;color:#fff}.pager_icon[_ngcontent-%COMP%]{width:32px!important;cursor:pointer;margin-top:4px}.ml_15[_ngcontent-%COMP%]{margin-left:15px}.ml_30[_ngcontent-%COMP%]{margin-left:30px}.menu_bg[_ngcontent-%COMP%]{background-color:inherit}.mb_10[_ngcontent-%COMP%]{margin-bottom:10px}"],changeDetection:0}),e})();var g=(()=>{return(e=g||(g={})).EDIT="edit",e.DELETE="delete",e.VIEW="view",g;var e})();function v(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",7),t.TgZ(1,"div",8),t._UZ(2,"img",9),t.TgZ(3,"label"),t._uU(4),t.qZA(),t.qZA(),t.TgZ(5,"div",2),t.TgZ(6,"section",10),t.TgZ(7,"div",11),t.TgZ(8,"img",12),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return s.actionBtn(s.itemData,s.eventType.EDIT)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const n=t.oxw();t.xp6(4),t.hij(" ",n.itemData.activityNo," ")}}function x(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",n.itemData.activityTitle,"")}}function I(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" Assign to: ",n.itemData.assignName," ")}}function C(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",t.xi3(2,1,n.itemData.dueDate,"dd/MM/YYYY")," ")}}function Y(e,i){1&e&&(t.TgZ(0,"label",13),t._uU(1," Open "),t.qZA())}function r(e,i){1&e&&(t.TgZ(0,"label",14),t._uU(1," Complete "),t.qZA())}function d(e,i){1&e&&(t.TgZ(0,"label",15),t._uU(1," Cancel "),t.qZA())}let o=(()=>{class e{constructor(){this.itemData={},this.btnEvent=new t.vpe,this.eventType=g}ngOnInit(){}actionBtn(n,a){this.btnEvent.emit({cmd:a,data:n})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-activity-item"]],inputs:{itemData:"itemData"},outputs:{btnEvent:"btnEvent"},decls:15,vars:8,consts:[["class","data-header",4,"ngIf"],[1,"data-content","row"],[1,"col-4"],[4,"ngIf"],["style","color: #FF8100 !important; ",4,"ngIf"],["style","color: #005EAA !important; ",4,"ngIf"],["style","color: #00ACEA !important;",4,"ngIf"],[1,"data-header"],[1,"col-8"],["src","./assets/images/activity/activity-list-01.svg","alt","activity"],[1,"icon-group"],[1,"actions"],["src","../../../assets/images/edit-01.svg","alt","edit",3,"click"],[2,"color","#FF8100 !important"],[2,"color","#005EAA !important"],[2,"color","#00ACEA !important"]],template:function(n,a){1&n&&(t.YNc(0,v,9,1,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.YNc(3,x,2,1,"label",3),t.YNc(4,I,2,1,"label",3),t.qZA(),t.TgZ(5,"div",2),t.YNc(6,C,3,4,"label",3),t.YNc(7,Y,2,0,"label",4),t.YNc(8,r,2,0,"label",5),t.YNc(9,d,2,0,"label",6),t.qZA(),t.TgZ(10,"div",2),t.TgZ(11,"label"),t._uU(12," Activity Type: "),t.TgZ(13,"span"),t._uU(14),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.Q6J("ngIf",a.itemData),t.xp6(3),t.Q6J("ngIf",a.itemData.activityTitle),t.xp6(1),t.Q6J("ngIf",a.itemData.assignName),t.xp6(2),t.Q6J("ngIf",a.itemData.dueDate),t.xp6(1),t.Q6J("ngIf","01"==a.itemData.status),t.xp6(1),t.Q6J("ngIf","02"==a.itemData.status),t.xp6(1),t.Q6J("ngIf","03"==a.itemData.status),t.xp6(5),t.Oqu(a.itemData.activityType))},directives:[l.O5],pipes:[l.uU],styles:[""]}),e})();function c(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",14),t.TgZ(1,"img",17),t.NdJ("click",function(){t.CHM(n);const s=t.oxw(2);return s.actionBtn(s.itemData,s.eventType.EDIT)}),t.qZA(),t.qZA()}}function u(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",10),t.TgZ(1,"div",11),t._UZ(2,"img",12),t.TgZ(3,"label"),t._uU(4),t.qZA(),t.qZA(),t.TgZ(5,"div",2),t.TgZ(6,"section",13),t.TgZ(7,"div",14),t.TgZ(8,"img",15),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return s.actionBtn(s.itemData,s.eventType.VIEW)}),t.qZA(),t.qZA(),t.YNc(9,c,2,0,"div",16),t.qZA(),t.qZA(),t.qZA()}if(2&e){const n=t.oxw();t.xp6(2),t.Q6J("src",n.itemData.productImage,t.LSH),t.xp6(2),t.hij(" ",n.itemData.id," "),t.xp6(5),t.Q6J("ngIf","in_progress"==n.itemData.status||"In_progress"==n.itemData.status||("submitted"==n.itemData.status||"Submitted"==n.itemData.status)&&"fail"==n.itemData.apiStatus)}}function h(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.lnq(" ",n.itemData.agentFirstName," ",n.itemData.agentMiddleName," ",n.itemData.agentLastName,"")}}function y(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",n.itemData.productName," ")}}function P(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",n.itemData.submittedCode," ")}}function w(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij("Inception Date : ",t.xi3(2,1,n.itemData.policyInceptionDate,"dd/MM/YYYY")," ")}}function E(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij("Expiry Date : ",t.xi3(2,1,n.itemData.policyExpireDate,"dd/MM/YYYY")," ")}}function O(e,i){1&e&&(t.TgZ(0,"label",18),t._uU(1," In Progress "),t.qZA())}function L(e,i){1&e&&(t.TgZ(0,"label",19),t._uU(1," Cancel "),t.qZA())}function N(e,i){1&e&&(t.TgZ(0,"label",20),t._uU(1," Submitted "),t.qZA())}function U(e,i){1&e&&(t.TgZ(0,"label",20),t._uU(1," Approved "),t.qZA())}function F(e,i){1&e&&(t.TgZ(0,"label",21),t._uU(1," Fail "),t.qZA())}function J(e,i){1&e&&(t.TgZ(0,"label",22),t._uU(1," Success "),t.qZA())}function Q(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,n.itemData.apiStatus))}}function k(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1,"SI : "),t.TgZ(2,"span"),t._uU(3),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(3),t.Oqu(n.itemData.sumInsureView||0)}}let B=(()=>{class e{constructor(){this.itemData={},this.btnEvent=new t.vpe,this.eventType=g}ngOnInit(){}actionBtn(n,a){this.btnEvent.emit({cmd:a,data:n})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-application-item"]],inputs:{itemData:"itemData"},outputs:{btnEvent:"btnEvent"},decls:22,vars:15,consts:[["class","data-header",4,"ngIf"],[1,"data-content","row"],[1,"col-4"],[4,"ngIf"],["style","color: #FF8100 !important;",4,"ngIf"],["style","color: #00ACEA !important;",4,"ngIf"],["style","color: #005EAA !important;",4,"ngIf"],["style","color: #DD5E5E !important;",4,"ngIf"],["style","color: #FFD300 !important;",4,"ngIf"],[1,"col-4",2,"padding","10px 0"],[1,"data-header"],[1,"col-8"],["alt","",3,"src"],[1,"icon-group"],[1,"actions"],["src","../../../assets/images/view-01.svg","alt","view",3,"click"],["class","actions",4,"ngIf"],["src","../../../assets/images/edit-01.svg","alt","edit",3,"click"],[2,"color","#FF8100 !important"],[2,"color","#00ACEA !important"],[2,"color","#005EAA !important"],[2,"color","#DD5E5E !important"],[2,"color","#FFD300 !important"]],template:function(n,a){1&n&&(t.YNc(0,u,10,3,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.YNc(3,h,2,3,"label",3),t.YNc(4,y,2,1,"label",3),t.YNc(5,P,2,1,"label",3),t.qZA(),t.TgZ(6,"div",2),t.YNc(7,w,3,4,"label",3),t.YNc(8,E,3,4,"label",3),t.YNc(9,O,2,0,"label",4),t.YNc(10,L,2,0,"label",5),t.YNc(11,N,2,0,"label",6),t.YNc(12,U,2,0,"label",6),t.YNc(13,F,2,0,"label",7),t.YNc(14,J,2,0,"label",8),t.qZA(),t.TgZ(15,"div",9),t.TgZ(16,"label"),t._uU(17," Premium : "),t.TgZ(18,"span"),t._uU(19),t.qZA(),t.qZA(),t.YNc(20,Q,3,3,"label",3),t.YNc(21,k,4,1,"label",3),t.qZA(),t.qZA()),2&n&&(t.Q6J("ngIf",a.itemData),t.xp6(3),t.Q6J("ngIf",a.itemData.agentFirstName),t.xp6(1),t.Q6J("ngIf",a.itemData.productName),t.xp6(1),t.Q6J("ngIf",a.itemData.submittedCode),t.xp6(2),t.Q6J("ngIf",a.itemData.policyInceptionDate),t.xp6(1),t.Q6J("ngIf",a.itemData.policyExpireDate),t.xp6(1),t.Q6J("ngIf","in_progress"==a.itemData.status||"In_progress"==a.itemData.status),t.xp6(1),t.Q6J("ngIf","cancel"==a.itemData.status||"Cancel"==a.itemData.status),t.xp6(1),t.Q6J("ngIf","submitted"==a.itemData.status||"Submitted"==a.itemData.status),t.xp6(1),t.Q6J("ngIf","approved"==a.itemData.status||"Approved"==a.itemData.status),t.xp6(1),t.Q6J("ngIf","fail"==a.itemData.status||"Fail"==a.itemData.status),t.xp6(1),t.Q6J("ngIf","success"==a.itemData.status||"Success"==a.itemData.status),t.xp6(5),t.Oqu(a.itemData.premiumView),t.xp6(1),t.Q6J("ngIf",a.itemData.apiStatus),t.xp6(1),t.Q6J("ngIf","PLMO01"==a.itemData.productCode||"PLMO02"==a.itemData.productCode||"CLFR01"==a.itemData.productCode||"PLPA01"==a.itemData.productCode))},directives:[l.O5],pipes:[l.uU,l.rS],styles:[""]}),e})();function S(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",6),t.TgZ(1,"div",7),t._UZ(2,"img",8),t.TgZ(3,"label"),t._uU(4),t.qZA(),t.qZA(),t.TgZ(5,"div",2),t.TgZ(6,"section",9),t.TgZ(7,"div",10),t.TgZ(8,"img",11),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return s.actionBtn(s.itemData,s.eventType.EDIT)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const n=t.oxw();t.xp6(4),t.hij(" ",n.itemData.partyCode," ")}}function j(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",n.itemData.name,"")}}function z(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",n.itemData.fatherName," ")}}function W(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",n.itemData.identityNumber," ")}}function R(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",t.xi3(2,1,n.itemData.dateOfBirth,"dd/MM/YYYY")," ")}}function H(e,i){1&e&&(t.TgZ(0,"label",12),t._uU(1," Active "),t.qZA())}function V(e,i){1&e&&(t.TgZ(0,"label",13),t._uU(1," InActive "),t.qZA())}let $=(()=>{class e{constructor(){this.itemData={},this.btnEvent=new t.vpe,this.eventType=g}ngOnInit(){}actionBtn(n,a){this.btnEvent.emit({cmd:a,data:n})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-customer-item"]],inputs:{itemData:"itemData"},outputs:{btnEvent:"btnEvent"},decls:15,vars:8,consts:[["class","data-header",4,"ngIf"],[1,"data-content","row"],[1,"col-4"],[4,"ngIf"],["style","color: #FF8100 !important;",4,"ngIf"],["style","color: #005EAA !important;",4,"ngIf"],[1,"data-header"],[1,"col-8"],["src","../../../assets/images/customer/custoner_list.svg","alt","customer"],[1,"icon-group"],[1,"actions"],["src","../../../assets/images/edit-01.svg","alt","edit",3,"click"],[2,"color","#FF8100 !important"],[2,"color","#005EAA !important"]],template:function(n,a){1&n&&(t.YNc(0,S,9,1,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.YNc(3,j,2,1,"label",3),t.YNc(4,z,2,1,"label",3),t.YNc(5,W,2,1,"label",3),t.qZA(),t.TgZ(6,"div",2),t.YNc(7,R,3,4,"label",3),t.YNc(8,H,2,0,"label",4),t.YNc(9,V,2,0,"label",5),t.qZA(),t.TgZ(10,"div",2),t.TgZ(11,"label"),t._uU(12," ID Type: "),t.TgZ(13,"span"),t._uU(14),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.Q6J("ngIf",a.itemData),t.xp6(3),t.Q6J("ngIf",a.itemData.name),t.xp6(1),t.Q6J("ngIf",a.itemData.fatherName),t.xp6(1),t.Q6J("ngIf",a.itemData.identityNumber),t.xp6(2),t.Q6J("ngIf",a.itemData.dateOfBirth),t.xp6(1),t.Q6J("ngIf","A"==a.itemData.statusCode),t.xp6(1),t.Q6J("ngIf","A"!=a.itemData.statusCode),t.xp6(5),t.Oqu(a.itemData.identityType))},directives:[l.O5],pipes:[l.uU],styles:[""]}),e})();var X=m(98807);function G(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",8),t.TgZ(1,"div",9),t._UZ(2,"img",10),t.TgZ(3,"label"),t._uU(4),t.qZA(),t.qZA(),t.TgZ(5,"div",2),t.TgZ(6,"section",11),t.TgZ(7,"div",12),t.TgZ(8,"img",13),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return s.actionBtn(s.itemData,s.eventType.VIEW)}),t.qZA(),t.qZA(),t.TgZ(9,"div",12),t.TgZ(10,"img",14),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return s.actionBtn(s.itemData,s.eventType.EDIT)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const n=t.oxw();t.xp6(4),t.hij(" ",n.itemData.leadId," ")}}function K(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",n.itemData.contactName,"")}}function tt(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij("",n.itemData.productName," ")}}function et(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.AsE("",n.itemData.email,", ",n.itemData.phoneNo,"")}}function nt(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",t.xi3(2,1,n.itemData.openedDate,"dd/MM/YYYY")," ")}}function at(e,i){1&e&&(t.TgZ(0,"label",15),t._uU(1," Open "),t.qZA())}function it(e,i){1&e&&(t.TgZ(0,"label",16),t._uU(1," Assigned "),t.qZA())}function ot(e,i){1&e&&(t.TgZ(0,"label",15),t._uU(1," Follow Up "),t.qZA())}function st(e,i){1&e&&(t.TgZ(0,"label",17),t._uU(1," Reject "),t.qZA())}function ct(e,i){1&e&&(t.TgZ(0,"label",18),t._uU(1," Win "),t.qZA())}function lt(e,i){1&e&&(t.TgZ(0,"label",17),t._uU(1," Lost "),t.qZA())}function rt(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"translate"),t.TgZ(3,"span"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,2,"FORM.expiredDate")," : "),t.xp6(3),t.Oqu(t.xi3(5,4,n.itemData.expirationDate,"dd/MM/YYYY"))}}function mt(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"img",16),t.NdJ("click",function(){t.CHM(n);const s=t.oxw(2);return s.actionBtn(s.itemData,s.eventType.EDIT)}),t.qZA(),t.qZA()}}function _t(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",9),t.TgZ(1,"div",10),t._UZ(2,"img",11),t.TgZ(3,"label"),t._uU(4),t.qZA(),t.qZA(),t.TgZ(5,"div",2),t.TgZ(6,"section",12),t.TgZ(7,"div",13),t.TgZ(8,"img",14),t.NdJ("click",function(){t.CHM(n);const s=t.oxw();return s.actionBtn(s.itemData,s.eventType.VIEW)}),t.qZA(),t.qZA(),t.YNc(9,mt,2,0,"div",15),t.qZA(),t.qZA(),t.qZA()}if(2&e){const n=t.oxw();t.xp6(2),t.Q6J("src",n.itemData.productImage,t.LSH),t.xp6(2),t.hij(" ",n.itemData.id," "),t.xp6(5),t.Q6J("ngIf","in_progress"==n.itemData.status||"In_progress"==n.itemData.status)}}function gt(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.AsE(" ",n.itemData.agentFirstName," ",n.itemData.agentLastName,"")}}function dt(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij(" ",n.itemData.productName," ")}}function ut(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij("Inception Date : ",t.xi3(2,1,n.itemData.createdAt,"dd/MM/YYYY")," ")}}function ft(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.hij("Expiry Date : ",t.xi3(2,1,n.itemData.expiryAt,"dd/MM/YYYY")," ")}}function ht(e,i){1&e&&(t.TgZ(0,"label",17),t._uU(1," In Progress "),t.qZA())}function At(e,i){1&e&&(t.TgZ(0,"label",18),t._uU(1," Cancel "),t.qZA())}function Zt(e,i){1&e&&(t.TgZ(0,"label",19),t._uU(1," Submitted "),t.qZA())}function Tt(e,i){1&e&&(t.TgZ(0,"label",19),t._uU(1," Approved "),t.qZA())}function Dt(e,i){1&e&&(t.TgZ(0,"label",20),t._uU(1," Fail "),t.qZA())}function vt(e,i){1&e&&(t.TgZ(0,"label",21),t._uU(1," Success "),t.qZA())}function bt(e,i){if(1&e&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,n.itemData.apiStatus))}}const xt={lead:(()=>{class e{constructor(){this.itemData={},this.btnEvent=new t.vpe,this.eventType=g}ngOnInit(){}actionBtn(n,a){this.btnEvent.emit({cmd:a,data:n})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-lead-item"]],inputs:{itemData:"itemData"},outputs:{btnEvent:"btnEvent"},decls:21,vars:16,consts:[["class","data-header",4,"ngIf"],[1,"data-content","row"],[1,"col-4"],[4,"ngIf"],["style","color: #FF8100 !important;",4,"ngIf"],["style","color: #005EAA !important;",4,"ngIf"],["style","color: #DD5E5E !important;",4,"ngIf"],["style","color: #00ACEA !important;",4,"ngIf"],[1,"data-header"],[1,"col-8"],["src","../../../assets/images/activity/activity-list-01.svg","alt","activity"],[1,"icon-group"],[1,"actions"],["src","../../../assets/images/view-01.svg","alt","View",3,"click"],["src","../../../assets/images/edit-01.svg","alt","edit",3,"click"],[2,"color","#FF8100 !important"],[2,"color","#005EAA !important"],[2,"color","#DD5E5E !important"],[2,"color","#00ACEA !important"]],template:function(n,a){1&n&&(t.YNc(0,G,11,1,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.YNc(3,K,2,1,"label",3),t.YNc(4,tt,2,1,"label",3),t.YNc(5,et,2,2,"label",3),t.qZA(),t.TgZ(6,"div",2),t.YNc(7,nt,3,4,"label",3),t.YNc(8,at,2,0,"label",4),t.YNc(9,it,2,0,"label",5),t.YNc(10,ot,2,0,"label",4),t.YNc(11,st,2,0,"label",6),t.YNc(12,ct,2,0,"label",7),t.YNc(13,lt,2,0,"label",6),t.qZA(),t.TgZ(14,"div",2),t.TgZ(15,"label"),t._uU(16),t.ALo(17,"translate"),t.TgZ(18,"span"),t._uU(19),t.qZA(),t.qZA(),t.YNc(20,rt,6,7,"label",3),t.qZA(),t.qZA()),2&n&&(t.Q6J("ngIf",a.itemData),t.xp6(3),t.Q6J("ngIf",a.itemData.contactName),t.xp6(1),t.Q6J("ngIf",a.itemData.productName),t.xp6(1),t.Q6J("ngIf",a.itemData.email),t.xp6(2),t.Q6J("ngIf",a.itemData.openedDate),t.xp6(1),t.Q6J("ngIf","01"==a.itemData.statusCode),t.xp6(1),t.Q6J("ngIf","02"==a.itemData.statusCode),t.xp6(1),t.Q6J("ngIf","03"==a.itemData.statusCode),t.xp6(1),t.Q6J("ngIf","04"==a.itemData.statusCode),t.xp6(1),t.Q6J("ngIf","05"==a.itemData.statusCode),t.xp6(1),t.Q6J("ngIf","06"==a.itemData.statusCode),t.xp6(3),t.hij(" ",t.lcZ(17,14,"FORM.score")," : "),t.xp6(3),t.Oqu(a.itemData.score),t.xp6(1),t.Q6J("ngIf",a.itemData.expirationDate))},directives:[l.O5],pipes:[X.X,l.uU],styles:[""]}),e})(),policy:B,quotat:(()=>{class e{constructor(){this.btnEvent=new t.vpe,this.eventType=g}ngOnInit(){console.log("itemData",this.itemData)}actionBtn(n,a){this.btnEvent.emit({cmd:a,data:n})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-quotation-item"]],inputs:{itemData:"itemData"},outputs:{btnEvent:"btnEvent"},decls:25,vars:17,consts:[["class","data-header",4,"ngIf"],[1,"data-content","row"],[1,"col-4"],[4,"ngIf"],["style","color: #FF8100 !important;",4,"ngIf"],["style","color: #00ACEA !important;",4,"ngIf"],["style","color: #005EAA !important;",4,"ngIf"],["style","color: #DD5E5E !important;",4,"ngIf"],["style","color: #FFD300 !important;",4,"ngIf"],[1,"data-header"],[1,"col-8"],["alt","",3,"src"],[1,"icon-group"],[1,"actions"],["src","./assets/images/view-01.svg","alt","view",3,"click"],["class","actions",4,"ngIf"],["src","./assets/images/edit-01.svg","alt","edit",3,"click"],[2,"color","#FF8100 !important"],[2,"color","#00ACEA !important"],[2,"color","#005EAA !important"],[2,"color","#DD5E5E !important"],[2,"color","#FFD300 !important"]],template:function(n,a){1&n&&(t.YNc(0,_t,10,3,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.YNc(3,gt,2,2,"label",3),t.YNc(4,dt,2,1,"label",3),t.qZA(),t.TgZ(5,"div",2),t.YNc(6,ut,3,4,"label",3),t.YNc(7,ft,3,4,"label",3),t.YNc(8,ht,2,0,"label",4),t.YNc(9,At,2,0,"label",5),t.YNc(10,Zt,2,0,"label",6),t.YNc(11,Tt,2,0,"label",6),t.YNc(12,Dt,2,0,"label",7),t.YNc(13,vt,2,0,"label",8),t.qZA(),t.TgZ(14,"div",2),t.TgZ(15,"label"),t._uU(16," Premium : "),t.TgZ(17,"span"),t._uU(18),t.qZA(),t.qZA(),t.YNc(19,bt,3,3,"label",3),t.TgZ(20,"label"),t._uU(21,"SI : "),t.TgZ(22,"span"),t._uU(23),t.ALo(24,"number"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.Q6J("ngIf",a.itemData),t.xp6(3),t.Q6J("ngIf",a.itemData.agentFirstName),t.xp6(1),t.Q6J("ngIf",a.itemData.productName),t.xp6(2),t.Q6J("ngIf",a.itemData.createdAt),t.xp6(1),t.Q6J("ngIf",a.itemData.expiryAt),t.xp6(1),t.Q6J("ngIf","in_progress"==a.itemData.status||"In_progress"==a.itemData.status),t.xp6(1),t.Q6J("ngIf","cancel"==a.itemData.status||"Cancel"==a.itemData.status),t.xp6(1),t.Q6J("ngIf","submitted"==a.itemData.status||"Submitted"==a.itemData.status),t.xp6(1),t.Q6J("ngIf","approved"==a.itemData.status||"Approved"==a.itemData.status),t.xp6(1),t.Q6J("ngIf","fail"==a.itemData.status||"Fail"==a.itemData.status),t.xp6(1),t.Q6J("ngIf","success"==a.itemData.status||"Success"==a.itemData.status),t.xp6(5),t.Oqu(a.itemData.premiumView),t.xp6(1),t.Q6J("ngIf",a.itemData.apiStatus),t.xp6(4),t.Oqu(t.xi3(24,14,a.itemData.siView||0,"1.2-2")))},directives:[l.O5],pipes:[l.JJ,l.uU,l.rS],styles:[""]}),e})(),customer:$,activity:o};let It=(()=>{class e{constructor(n,a){this.resolver=n,this.container=a,this.itemData={},this.btnEvent=new t.vpe,this.unsub=[]}ngOnDestroy(){this.unsub.forEach(n=>n.unsubscribe())}ngOnInit(){const n=this.resolver.resolveComponentFactory(xt[this.viewType]);this.component=this.container.createComponent(n),this.component.instance.itemData=this.itemData,this.unsub[0]=this.component.instance.btnEvent.subscribe(a=>{this.clickedEvent(a)})}clickedEvent(n){this.btnEvent.emit(n)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t._Vd),t.Y36(t.s_b))},e.\u0275dir=t.lG2({type:e,selectors:[["","listDirective",""]],inputs:{viewType:"viewType",itemData:"itemData"},outputs:{btnEvent:"btnEvent"}}),e})(),Ct=(()=>{class e{transform(n,a,s){if(!n||!a||s)return n;{let p=n;return p=p.sort((b,q)=>b[s]>q[s]?1:b[s]<q[s]?-1:0),p}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"dataSort",type:e,pure:!0}),e})();function yt(e,i){if(1&e){const n=t.EpF();t.ynx(0),t.ynx(1,2),t.NdJ("btnEvent",function(s){return t.CHM(n),t.oxw().actionTrigger(s)}),t.BQk(),t.BQk()}if(2&e){const n=i.$implicit,a=t.oxw();t.xp6(1),t.Q6J("viewType",a.type)("itemData",n)}}function Mt(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"app-pager",5),t.NdJ("activePage",function(s){return t.CHM(n),t.oxw(2).reponseFromPager(s)}),t.qZA()}if(2&e){const n=t.oxw(2);t.Q6J("sourceData",n.dataList)("formType",n.type)}}function Yt(e,i){if(1&e&&(t.TgZ(0,"div",3),t.YNc(1,Mt,1,2,"app-pager",4),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.dataList.length>0)}}let qt=(()=>{class e{constructor(n){this.cdf=n,this.responseListings=new t.vpe,this.dataList=[],this.order="asc",this.btnEvent=new t.vpe,this.selectedPageSize=5,this.selectedPageBtn=1,this.start=0,this.end=5}ngOnInit(){this.listingargs={direction:this.order,col:this.colField}}ngAfterViewInit(){this.cdf.detectChanges()}detchChange(){this.listpager&&this.listpager.prepareBtnArray(),this.cdf.detectChanges()}reponseFromPager(n){this.selectedPageBtn=n.activePage,this.selectedPageSize=n.pageSize,this.start=(this.selectedPageBtn-1)*this.selectedPageSize,this.end=this.selectedPageBtn*this.selectedPageSize-1<this.dataList.length?this.selectedPageBtn*this.selectedPageSize:this.dataList.length}reponseFromAtom(n){}actionTrigger(n){this.btnEvent.emit(n)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(t.sBO))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-common-list-2"]],viewQuery:function(n,a){if(1&n&&t.Gf(D,5),2&n){let s;t.iGM(s=t.CRH())&&(a.listpager=s.first)}},inputs:{dataList:["data","dataList"],type:"type",colField:"colField",order:"order"},outputs:{responseListings:"responseListings",btnEvent:"btnEvent"},decls:4,vars:10,consts:[[4,"ngFor","ngForOf"],["class","example-preview",4,"ngIf"],["listDirective","",3,"viewType","itemData","btnEvent"],[1,"example-preview"],[3,"sourceData","formType","activePage",4,"ngIf"],[3,"sourceData","formType","activePage"]],template:function(n,a){1&n&&(t.YNc(0,yt,2,2,"ng-container",0),t.ALo(1,"slice"),t.ALo(2,"dataSort"),t.YNc(3,Yt,2,1,"div",1)),2&n&&(t.Q6J("ngForOf",t.Dn7(1,2,t.Dn7(2,6,a.dataList,a.order,a.colField),a.start,a.end)),t.xp6(3),t.Q6J("ngIf",a.dataList.length>0))},directives:[l.sg,l.O5,It,D],pipes:[l.OU,Ct],styles:[".pager[_ngcontent-%COMP%]{width:100%;padding-top:15px}.pager_atom[_ngcontent-%COMP%]{margin-right:15px;margin-top:10px;float:left}.pager_atom_btn[_ngcontent-%COMP%]{margin-right:15px}.right[_ngcontent-%COMP%]{float:right;margin-bottom:15px}.pager_btn_wrapper[_ngcontent-%COMP%]{display:flex}.mr_15[_ngcontent-%COMP%]{margin-right:15px}.mt_10[_ngcontent-%COMP%]{margin-top:10px}.common_btn[_ngcontent-%COMP%], .pager_primary_btn_selected[_ngcontent-%COMP%], .pager_primary_btn[_ngcontent-%COMP%]{border-radius:50%;width:40px;height:40px;align-items:center;justify-content:center;padding:10px 0 0 15px;cursor:pointer}.pager_primary_btn[_ngcontent-%COMP%]{background-color:#005f99;color:#fff}.pager_primary_btn_selected[_ngcontent-%COMP%]{background-color:#ff8100;color:#fff}.pager_icon[_ngcontent-%COMP%]{width:24px}.ml-30[_ngcontent-%COMP%]{margin-left:5px}"],changeDetection:0}),e})()}}]);