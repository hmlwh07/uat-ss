"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7747],{77747:(N,d,l)=>{l.r(d),l.d(d,{MyCalendarModule:()=>J});var r=l(86019),p=l(49133),h=l(87626),g=l(45598),m=l(29018),y=l(85378),f=l(57842),w=l(69215),C=l(21864),s=l(91307),u=l(50273),e=l(83668),_=l(95976);const D=["modalContent"];function T(a,c){if(1&a){const t=e.EpF();e.TgZ(0,"mwl-calendar-month-view",13),e.NdJ("dayClicked",function(i){return e.CHM(t),e.oxw().dayClicked(i.day)})("eventClicked",function(i){return e.CHM(t),e.oxw().handleEvent("Clicked",i.event)})("eventTimesChanged",function(i){return e.CHM(t),e.oxw().eventTimesChanged(i)}),e.qZA()}if(2&a){const t=e.oxw(),n=e.MAs(21);e.Q6J("cellTemplate",n)("events",t.events)("viewDate",t.viewDate)("refresh",t.refresh)("activeDayIsOpen",t.activeDayIsOpen)}}function M(a,c){if(1&a&&(e.TgZ(0,"span",18),e._uU(1),e.qZA()),2&a){const t=e.oxw().day;e.xp6(1),e.Oqu(t.badgeTotal)}}const Z=function(a){return{backgroundColor:a}};function x(a,c){if(1&a&&e._UZ(0,"div",21),2&a){const t=c.$implicit,n=e.oxw(3);e.Q6J("ngStyle",e.VKq(1,Z,n.getColor(t)))}}function A(a,c){if(1&a&&(e.TgZ(0,"span",18),e._uU(1),e.qZA()),2&a){const t=e.oxw(2).day;e.xp6(1),e.hij(" + ",t.events.length-20," ")}}function O(a,c){if(1&a&&(e.TgZ(0,"div",19),e.YNc(1,x,1,3,"div",20),e.ALo(2,"slice"),e.YNc(3,A,2,1,"span",15),e.qZA()),2&a){const t=e.oxw(),n=t.day,i=t.trackByEventId,o=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.Dn7(2,3,n.events,0,o.showAll?void 0:20))("ngForTrackBy",i),e.xp6(2),e.Q6J("ngIf",n.events.length>20)}}function F(a,c){if(1&a&&(e.TgZ(0,"div",14),e.YNc(1,M,2,1,"span",15),e.TgZ(2,"span",16),e._uU(3),e.ALo(4,"calendarDate"),e.qZA(),e.qZA(),e.YNc(5,O,4,7,"div",17)),2&a){const t=c.day,n=c.locale;e.xp6(1),e.Q6J("ngIf",t.badgeTotal>0),e.xp6(2),e.Oqu(e.Dn7(4,3,t.date,"monthViewDayNumber",n)),e.xp6(2),e.Q6J("ngIf",t.events.length>0)}}const v_Face={primary:"#3880ff",secondary:"#3880ff"},v_Online={primary:"#ffc409",secondary:"#ffc409"},v_Phone={primary:"#2dd36f",secondary:"#2dd36f"};let b=(()=>{class a{constructor(t,n,i){this.modal=t,this.activityService=n,this.router=i,this.view=s.wr.Month,this.calendarView=s.wr,this.viewDate=new Date,this.showAll=!1,this.actions=[{label:'<i class="fas fa-fw fa-pencil-alt"></i>',a11yLabel:"Edit",onClick:({event:o})=>{this.handleEvent("Edited",o)}}],this.refresh=new u.x,this.eventNumber=0,this.activityList=[],this.EventData=[],this.events=[],this.activeDayIsOpen=!1}ngOnInit(){}ngAfterViewInit(){this.getActivity()}getActivity(){this.activityService.getActivityList({status:"Open"}).subscribe(n=>{n&&(console.log("RES",n),this.activityList=n,this.EventData=this.activityList.map(i=>{let o;return"Face to Face"==i.activityType?o=v_Face:"Online"==i.activityType?o=v_Online:"Phone Call"==i.activityType&&(o=v_Phone),{start:new Date(i.planDate),end:new Date(i.planDate),title:i.activityTitle+"( "+i.activityType+" )",color:o,meta:i.activityNo,actions:this.actions}}),console.log(" this.EventData",this.EventData),this.events=this.EventData,this.eventNumber=this.events.length,this.refresh.next())})}dayClicked({date:t,events:n}){(0,w.Z)(t,this.viewDate)&&(this.activeDayIsOpen=!((0,C.Z)(this.viewDate,t)&&!0===this.activeDayIsOpen||0===n.length),this.viewDate=t)}eventTimesChanged({event:t,newStart:n,newEnd:i}){this.events=this.events.map(o=>o===t?Object.assign(Object.assign({},t),{start:n,end:i}):o),this.handleEvent("Dropped or resized",t)}handleEvent(t,n){this.navigateToDetail("edit",n.meta)}navigateToDetail(t,n){this.router.navigate(["/activity/activity-management-detail"],{queryParams:{pageStatus:t,pageId:n}})}addEvent(t){this.navigateToDetail("create",null)}deleteEvent(t){this.events=this.events.filter(n=>n!==t)}setView(t){this.view=t}closeOpenMonthViewDay(){this.activeDayIsOpen=!1}getColor(t){var n;return null===(n=t.color)||void 0===n?void 0:n.primary}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(y.FF),e.Y36(_.e),e.Y36(m.F0))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-mycalendar"]],viewQuery:function(t,n){if(1&t&&e.Gf(D,7),2&t){let i;e.iGM(i=e.CRH())&&(n.modalContent=i.first)}},decls:22,vars:12,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-body","px-3","py-3"],[1,"col-md-4"],[1,"btn-group"],["mwlCalendarPreviousView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],["mwlCalendarToday","",1,"btn","btn-secondary",3,"viewDate","viewDateChange"],["mwlCalendarNextView","",1,"btn","btn-primary",3,"view","viewDate","viewDateChange"],[1,"col-md-4","text-center"],[3,"ngSwitch"],[3,"cellTemplate","events","viewDate","refresh","activeDayIsOpen","dayClicked","eventClicked","eventTimesChanged",4,"ngSwitchCase"],["customCellTemplate",""],[3,"cellTemplate","events","viewDate","refresh","activeDayIsOpen","dayClicked","eventClicked","eventTimesChanged"],[1,"cal-cell-top"],["class","cal-day-badge",4,"ngIf"],[1,"cal-day-number"],["class","cal-events",4,"ngIf"],[1,"cal-day-badge"],[1,"cal-events"],["class","cal-event",3,"ngStyle",4,"ngFor","ngForOf","ngForTrackBy"],[1,"cal-event",3,"ngStyle"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",0),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e.TgZ(7,"div",6),e.NdJ("viewDateChange",function(o){return n.viewDate=o})("viewDateChange",function(){return n.closeOpenMonthViewDay()}),e._uU(8," Previous "),e.qZA(),e.TgZ(9,"div",7),e.NdJ("viewDateChange",function(o){return n.viewDate=o}),e._uU(10," Today "),e.qZA(),e.TgZ(11,"div",8),e.NdJ("viewDateChange",function(o){return n.viewDate=o})("viewDateChange",function(){return n.closeOpenMonthViewDay()}),e._uU(12," Next "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",9),e.TgZ(14,"h3"),e._uU(15),e.ALo(16,"calendarDate"),e.qZA(),e.qZA(),e.qZA(),e._UZ(17,"br"),e.TgZ(18,"div",10),e.YNc(19,T,1,5,"mwl-calendar-month-view",11),e.qZA(),e.YNc(20,F,6,7,"ng-template",null,12,e.W1O),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(7),e.Q6J("view",n.view)("viewDate",n.viewDate),e.xp6(2),e.Q6J("viewDate",n.viewDate),e.xp6(2),e.Q6J("view",n.view)("viewDate",n.viewDate),e.xp6(4),e.Oqu(e.Dn7(16,8,n.viewDate,n.view+"ViewTitle","en")),e.xp6(3),e.Q6J("ngSwitch",n.view),e.xp6(1),e.Q6J("ngSwitchCase",n.calendarView.Month))},directives:[s.YX,s.nA,s.MG,r.RF,r.n9,s.GH,r.O5,r.sg,r.PC],pipes:[s.vk,r.OU],styles:[".cal-month-view[_ngcontent-%COMP%]   .cal-open-day-events[_ngcontent-%COMP%]{padding:10px 15px;overflow:auto!important;max-height:120px!important;line-height:30px!important}.cal-month-view[_ngcontent-%COMP%]   .cal-open-day-events[_ngcontent-%COMP%]{color:#000!important;background-color:#e7dede!important;box-shadow:inset 0 0 15px #ece6e6d2!important}","h3[_ngcontent-%COMP%]{margin:0 0 10px}pre[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:15px}"],changeDetection:0}),a})();var E=l(31145),I=l(92424);let J=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[r.ez,p.u5,p.UX,h.vi,g.fA,y.M,f.A0,m.Bz.forChild([{path:"",component:b}]),E.JT.forRoot(),s._8.forRoot({provide:s._A,useFactory:I.x})]]}),a})()}}]);