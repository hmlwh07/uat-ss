"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4426],{98807:(T,h,l)=>{l.d(h,{X:()=>y});var s=l(5e3),f=l(96115);let y=(()=>{class v{constructor(r){this._languageService=r}transform(r){if(r){let _=this._languageService.getSelectedLanguage(),p=r.split(".");if(p.length>=2)try{return this._languageService.langs[_][p[0]][p[1]]||p[1]}catch(C){return r}}return r}}return v.\u0275fac=function(r){return new(r||v)(s.Y36(f.K,16))},v.\u0275pipe=s.Yjl({name:"translate",type:v,pure:!1}),v})()},64426:(T,h,l)=>{l.r(h),l.d(h,{MyCalendarModule:()=>V});var s=l(69808),f=l(93075),y=l(69544),v=l(50282),m=l(96592),r=l(63272),_=l(64537),p=l(93499),C=l(62641),d=l(80492),x=l(77579),e=l(5e3);function D(a,c){if(1&a&&(e.TgZ(0,"div",6),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.qZA()),2&a){const t=e.oxw();e.xp6(2),e.hij("",t.data.length," ")}}function Z(a,c){if(1&a){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",8),e.TgZ(2,"div",9),e.NdJ("click",function(){const o=e.CHM(t).$implicit;return e.oxw(2).navigateToDetail("edit",o.meta)}),e.TgZ(3,"div",10),e.TgZ(4,"div",11),e._UZ(5,"img",12),e.TgZ(6,"span",13),e._uU(7),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.BQk()}if(2&a){const t=c.$implicit;e.xp6(3),e.Q6J("ngClass",t.type),e.xp6(2),e.Q6J("src",t.icon,e.LSH),e.xp6(2),e.hij("",t.title," ")}}function M(a,c){if(1&a&&(e.TgZ(0,"div"),e.YNc(1,Z,8,3,"ng-container",7),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.data)}}function O(a,c){1&a&&(e.TgZ(0,"div"),e.ynx(1),e.TgZ(2,"div",14),e.TgZ(3,"div",15),e.TgZ(4,"label"),e._uU(5,"There is no activity today "),e.qZA(),e.qZA(),e.qZA(),e.BQk(),e.qZA())}let A=(()=>{class a{constructor(t,n){this.router=t,this.modalCrl=n,this.data=[],this.day=new Date}ngOnInit(){}navigateToDetail(t,n){this.modalCrl.dismissAll(),this.router.navigate(["/activity/activity-management-detail"],{queryParams:{pageStatus:t,pageId:n}})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(m.F0),e.Y36(r.FF))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-event-list"]],inputs:{data:"data",day:"day"},decls:9,vars:7,consts:[[1,"modal-content"],[1,"modal-header"],["class","cal-day-badge",4,"ngIf"],["id","example-modal-sizes-title-lg",1,"modal-title","h5","text-right","text-bold"],[1,"modal-body","event-modal-body"],[4,"ngIf"],[1,"cal-day-badge"],[4,"ngFor","ngForOf"],[1,"row",2,"padding","5px 10px"],[1,"col",3,"click"],[1,"card","card-custom",3,"ngClass"],[1,"event-list"],["alt","","srcset","",1,"prod-icon",3,"src"],[1,"event-label"],[1,"row",2,"margin","10px 0px"],[1,"col"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.YNc(2,D,3,1,"div",2),e.TgZ(3,"div",3),e._uU(4),e.ALo(5,"date"),e.qZA(),e.qZA(),e.TgZ(6,"div",4),e.YNc(7,M,2,1,"div",5),e.YNc(8,O,6,0,"div",5),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngIf",n.data.length>0),e.xp6(2),e.hij(" ",e.xi3(5,4,n.day,"EE d")," "),e.xp6(3),e.Q6J("ngIf",n.data.length>0),e.xp6(1),e.Q6J("ngIf",0==n.data.length))},directives:[s.O5,s.sg,s.mk],pipes:[s.uU],styles:[".Open[_ngcontent-%COMP%]{background-color:#addef5;color:#000}.Face[_ngcontent-%COMP%]{background-color:#e5f6fd;color:#000;border-left:7px solid #00acea}.Online[_ngcontent-%COMP%]{background-color:#fff1e4;color:#000;border-left:7px solid #fe8100}.Phone[_ngcontent-%COMP%]{background-color:#e5eef7;color:#000;border-left:7px solid #015eab}.icon[_ngcontent-%COMP%]{font-size:1.5rem;position:absolute;left:15px;top:50%;transform:translateY(-50%)}.prod-icon[_ngcontent-%COMP%]{width:1.5rem;position:absolute;left:15px;top:50%;transform:translateY(-50%)}.event-list[_ngcontent-%COMP%]{height:1.5rem}.event-label[_ngcontent-%COMP%]{position:absolute;left:20%;top:50%;transform:translateY(-50%)}.card.card-custom[_ngcontent-%COMP%], .card[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%]{box-shadow:none;border-radius:5px;border-collapse:collapse}.event-modal-body[_ngcontent-%COMP%]{padding:0;max-height:400px;overflow:auto}.cal-day-badge[_ngcontent-%COMP%]{background-color:#1e90ff;color:#fff;display:inline-block;min-width:10px;padding:3px 7px;font-size:14px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:middle;border-radius:10px}.ver-center[_ngcontent-%COMP%]{top:50%;transform:translateY(-50%)}"]}),a})();var b=l(96115),P=l(16164),E=l(93841),F=l(98807);const I=["modalContent"];function Y(a,c){if(1&a){const t=e.EpF();e.TgZ(0,"mwl-calendar-month-view",15),e.NdJ("dayClicked",function(i){return e.CHM(t),e.oxw().dayClicked(i.day)})("eventClicked",function(i){return e.CHM(t),e.oxw().handleEvent("Clicked",i.event)})("eventTimesChanged",function(i){return e.CHM(t),e.oxw().eventTimesChanged(i)}),e.qZA()}if(2&a){const t=e.oxw(),n=e.MAs(22);e.Q6J("cellTemplate",n)("events",t.events)("viewDate",t.viewDate)("refresh",t.refresh)("activeDayIsOpen",t.activeDayIsOpen)}}function J(a,c){if(1&a&&(e.TgZ(0,"span",20),e._uU(1),e.qZA()),2&a){const t=e.oxw().day;e.xp6(1),e.Oqu(t.badgeTotal)}}const L=function(a){return{backgroundColor:a}};function S(a,c){if(1&a&&e._UZ(0,"div",23),2&a){const t=c.$implicit,n=e.oxw(3);e.Q6J("ngStyle",e.VKq(1,L,n.getColor(t)))}}function Q(a,c){if(1&a&&(e.TgZ(0,"span",20),e._uU(1),e.qZA()),2&a){const t=e.oxw(2).day;e.xp6(1),e.hij(" + ",t.events.length-20," ")}}function q(a,c){if(1&a&&(e.TgZ(0,"div",21),e.YNc(1,S,1,3,"div",22),e.ALo(2,"slice"),e.YNc(3,Q,2,1,"span",17),e.qZA()),2&a){const t=e.oxw(),n=t.day,i=t.trackByEventId,o=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.Dn7(2,3,n.events,0,o.showAll?void 0:20))("ngForTrackBy",i),e.xp6(2),e.Q6J("ngIf",n.events.length>20)}}function N(a,c){if(1&a&&(e.TgZ(0,"div",16),e.YNc(1,J,2,1,"span",17),e.TgZ(2,"span",18),e._uU(3),e.ALo(4,"calendarDate"),e.qZA(),e.qZA(),e.YNc(5,q,4,7,"div",19)),2&a){const t=c.day,n=c.locale;e.xp6(1),e.Q6J("ngIf",t.badgeTotal>0),e.xp6(2),e.Oqu(e.Dn7(4,3,t.date,"monthViewDayNumber",n)),e.xp6(2),e.Q6J("ngIf",t.events.length>0)}}const u_Face={primary:"#00acea",secondary:"#00acea"},u_Online={primary:"#fe8100",secondary:"#fe8100"},u_Phone={primary:"#015eab",secondary:"#015eab"};let U=(()=>{class a{constructor(t,n,i,o,g,w,z){this.lang=t,this.cdf=n,this.loadingService=i,this.modal=o,this.activityService=g,this.router=w,this.modalCrl=z,this.view=d.wr.Month,this.calendarView=d.wr,this.viewDate=new Date,this.showAll=!1,this.actions=[{label:'<i class="fas fa-fw fa-pencil-alt"></i>',a11yLabel:"Edit",onClick:({event:R})=>{this.handleEvent("Edited",R)}}],this.refresh=new x.x,this.eventNumber=0,this.activityList=[],this.EventData=[],this.events=[],this.activeDayIsOpen=!1,this.language="en"}ngOnInit(){}ngAfterViewInit(){this.getActivity()}getActivity(){this.activityService.getActivityList({status:"Open"}).subscribe(n=>{n&&(this.loadingService.activate(),this.activityList=n,this.EventData=this.activityList.map(i=>{let o,g;return"Face to Face"==i.activityType?(o=u_Face,g="./assets/images/group_chat_color-01.svg"):"Online"==i.activityType?(o=u_Online,g="./assets/images/world_color-01.svg"):"Phone Call"==i.activityType&&(o=u_Phone,g="./assets/images/phone_color-01.svg"),{start:new Date(i.planDate),end:new Date(i.planDate),title:i.activityTitle,type:i.activityType,color:o,icon:g,meta:i.activityNo,actions:this.actions}}),this.EventData.sort((i,o)=>i.type>o.type?1:-1),this.events=this.EventData,this.eventNumber=this.events.length,this.refresh.next(),this.loadingService.deactivate())})}dayClicked({date:t,events:n}){(0,p.Z)(t,this.viewDate)&&(this.activeDayIsOpen=((0,C.Z)(this.viewDate,t),!1),this.viewDate=t);const i=this.modalCrl.open(A,{size:"sm",backdrop:!0,centered:!0,scrollable:!0});i.componentInstance.isModal=!0,i.componentInstance.data=n,i.componentInstance.day=t,i.result.then(()=>{},o=>{})}eventTimesChanged({event:t,newStart:n,newEnd:i}){this.events=this.events.map(o=>o===t?Object.assign(Object.assign({},t),{start:n,end:i}):o),this.handleEvent("Dropped or resized",t)}handleEvent(t,n){this.navigateToDetail("edit",n.meta)}navigateToDetail(t,n){this.router.navigate(["/activity/activity-management-detail"],{queryParams:{pageStatus:t,pageId:n}})}addEvent(t){this.navigateToDetail("create",null)}deleteEvent(t){this.events=this.events.filter(n=>n!==t)}setView(t){this.view=t}closeOpenMonthViewDay(){this.activeDayIsOpen=!1}getColor(t){var n;return null===(n=t.color)||void 0===n?void 0:n.primary}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(b.K),e.Y36(e.sBO),e.Y36(P.b),e.Y36(r.FF),e.Y36(E.e),e.Y36(m.F0),e.Y36(r.FF))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-mycalendar"]],viewQuery:function(t,n){if(1&t&&e.Gf(I,7),2&t){let i;e.iGM(i=e.CRH())&&(n.modalContent=i.first)}},decls:23,vars:15,consts:[[1,"row"],[1,"col-6"],[1,"col-md-6","text-left"],[1,"col-6",2,"align-items","center","justify-content","flex-end"],[1,"row","cal"],["mwlCalendarPreviousView","",2,"margin-right","5px",3,"view","viewDate","viewDateChange"],[1,"flaticon2-back","icon"],["mwlCalendarToday","",3,"viewDate","viewDateChange"],[2,"font-size","1rem"],["mwlCalendarNextView","",2,"margin-left","5px",3,"view","viewDate","viewDateChange"],[1,"flaticon2-next","icon"],[1,"col-12"],[3,"ngSwitch"],[3,"cellTemplate","events","viewDate","refresh","activeDayIsOpen","dayClicked","eventClicked","eventTimesChanged",4,"ngSwitchCase"],["customCellTemplate",""],[3,"cellTemplate","events","viewDate","refresh","activeDayIsOpen","dayClicked","eventClicked","eventTimesChanged"],[1,"cal-cell-top"],["class","cal-day-badge",4,"ngIf"],[1,"cal-day-number"],["class","cal-events",4,"ngIf"],[1,"cal-day-badge"],[1,"cal-events"],["class","cal-event",3,"ngStyle",4,"ngFor","ngForOf","ngForTrackBy"],[1,"cal-event",3,"ngStyle"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h4"),e._uU(4),e.ALo(5,"calendarDate"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",3),e.TgZ(7,"div",4),e.TgZ(8,"div",5),e.NdJ("viewDateChange",function(o){return n.viewDate=o})("viewDateChange",function(){return n.closeOpenMonthViewDay()}),e._UZ(9,"span",6),e.qZA(),e.TgZ(10,"div",7),e.NdJ("viewDateChange",function(o){return n.viewDate=o}),e.TgZ(11,"label",8),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.qZA(),e.TgZ(14,"div",9),e.NdJ("viewDateChange",function(o){return n.viewDate=o})("viewDateChange",function(){return n.closeOpenMonthViewDay()}),e._UZ(15,"span",10),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(16,"br"),e.TgZ(17,"div",0),e.TgZ(18,"div",11),e.TgZ(19,"div",12),e.YNc(20,Y,1,5,"mwl-calendar-month-view",13),e.qZA(),e.YNc(21,N,6,7,"ng-template",null,14,e.W1O),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Oqu(e.Dn7(5,9,n.viewDate,n.view+"ViewTitle","en")),e.xp6(4),e.Q6J("view",n.view)("viewDate",n.viewDate),e.xp6(2),e.Q6J("viewDate",n.viewDate),e.xp6(2),e.Oqu(e.lcZ(13,13,"CARD.today")),e.xp6(2),e.Q6J("view",n.view)("viewDate",n.viewDate),e.xp6(5),e.Q6J("ngSwitch",n.view),e.xp6(1),e.Q6J("ngSwitchCase",n.calendarView.Month))},directives:[d.YX,d.nA,d.MG,s.RF,s.n9,d.GH,s.O5,s.sg,s.PC],pipes:[d.vk,F.X,s.OU],styles:[".cal-month-view[_ngcontent-%COMP%]   .cal-open-day-events[_ngcontent-%COMP%]{padding:10px 15px;overflow:auto!important;max-height:120px!important;line-height:30px!important}.cal-month-view[_ngcontent-%COMP%]   .cal-open-day-events[_ngcontent-%COMP%]{color:#000!important;background-color:#e7dede!important;box-shadow:inset 0 0 15px #ece6e6d2!important}.cal[_ngcontent-%COMP%]{justify-content:end;margin-right:10px}","h3[_ngcontent-%COMP%]{margin:0 0 10px}pre[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:15px}"],changeDetection:0}),a})();var k=l(51465),j=l(10164),B=l(7181);let V=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[s.ez,f.u5,f.UX,y.vi,v.fA,r.M,B.j,_.A0,m.Bz.forChild([{path:"",component:U}]),k.JT.forRoot(),d._8.forRoot({provide:d._A,useFactory:j.x})]]}),a})()}}]);