"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8111],{63703:(g,d,a)=>{a.d(d,{n:()=>r,t:()=>o});var l=a(18510);const r=[{title:"Activity No.",type:l.Y.FEILD,field:"activityNo"},{title:"Activity Type",type:l.Y.FEILD,field:"activityType"},{title:"Activity Title",type:l.Y.FEILD,field:"activityTitle"},{title:"Related To",type:l.Y.FEILD,field:"relatedTo"},{title:"Assigned To",type:l.Y.FEILD,field:"assignName"},{title:"Due Date",type:l.Y.FEILD,field:"dueDate",isFromatDate:!0},{title:"Status",type:l.Y.FEILD,field:"status",isActivityStatus:!0},{title:"Customer",type:l.Y.FEILD,field:"customerName"},{title:"Actions",type:l.Y.ACTION,field:"actions",btn:{edit:!0}}],o=["activityNo","activityType","activityTitle","relatedTo","assignName","dueDate","status","customerName","actions"]},98111:(g,d,a)=>{a.r(d),a.d(d,{ActivityManagementListModule:()=>Y});var l=a(86019),r=a(4205),o=a(49133),y=a(92118),m=a(44290),Z=a(74464),A=a(47975),f=a(90949),T=a(18510),v=a(63703),t=a(83668),h=a(95976),C=a(15470),L=a(85472),u=a(57842),F=a(49065),M=a(15346);function I(n,c){if(1&n){const i=t.EpF();t.TgZ(0,"app-common-list-2",24,25),t.NdJ("btnEvent",function(s){return t.CHM(i),t.oxw().actionBtn(s)}),t.qZA()}if(2&n){const i=t.oxw();t.Q6J("data",i.activityList)("type","activity")}}let O=(()=>{class n{constructor(i,e,s,p){this.fb=i,this.router=e,this.activityService=s,this.cdf=p,this.ELEMENT_COL=v.n,this.displayedColumns=v.t,this.activityList=[],this.activityStatus=T.f,this.activityType=["Face to Face","Online","Phone Call"],this.activityTypeOption=[{code:"",value:"All"},{code:"Face to Face",value:"Face to Face"},{code:"Online",value:"Online"},{code:"Phone Call",value:"Phone Call"}],this.statusOption=[{code:"",value:"All"},{code:"Open",value:"Open"},{code:"Complete",value:"Complete"},{code:"Cancel",value:"Cancel"}],this.loadForm()}ngOnInit(){}ngAfterViewInit(){this.getList()}cancel(){}loadForm(){this.actForm=new o.cw({type:new o.NI(""),title:new o.NI(null),status:new o.NI(""),startDate:new o.NI(null),endDate:new o.NI(null)})}getList(){this.activityService.getActivityList(this.actForm.value).toPromise().then(i=>{i&&(console.log("getActivityList",i),this.activityList=i,this.cdf.detectChanges())})}actionBtn(i){"edit"==i.cmd&&this.navigateToDetail("edit",i.data.activityNo)}isControlValid(i){const e=this.actForm.controls[i];return e.valid&&(e.dirty||e.touched)}isControlInvalid(i){const e=this.actForm.controls[i];return e.invalid&&(e.dirty||e.touched)}controlHasError(i,e){const s=this.actForm.controls[e];return s.hasError(i)&&(s.dirty||s.touched)}isControlTouched(i){const e=this.actForm.controls[i];return e.dirty||e.touched}navigateToDetail(i,e){this.router.navigate(["/activity/activity-management-detail"],{queryParams:{pageStatus:i,pageId:e}})}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(o.qu),t.Y36(r.F0),t.Y36(h.e),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-activity-management-list"]],viewQuery:function(i,e){if(1&i&&t.Gf(f.I,5),2&i){let s;t.iGM(s=t.CRH())&&(e.matTable=s.first)}},features:[t._Bn([{provide:Z._A,useClass:y.t7,deps:[m.Ad]},{provide:m.sG,useValue:A.Gs}])],decls:44,vars:30,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],[1,"flaticon2-magnifier-tool","search-tool",3,"click"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],["remove-host","",3,"formInput","colClass"],[1,"col-md-4"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["bindLabel","value","bindValue","code","formControlName","status",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["bindLabel","value","bindValue","code","formControlName","type",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["type","text","name","title","autocomplete","off","formControlName","title",1,"form-control","form-control-sm"],[1,"card","card-custom","gutter-b","data"],[1,"card-body","customer-card-body"],["class","data-list",3,"data","type","btnEvent",4,"ngIf"],[1,"data-list",3,"data","type","btnEvent"],["commonList",""]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.qZA(),t.TgZ(8,"div",6),t.TgZ(9,"span",7),t.NdJ("click",function(){return e.getList()}),t.qZA(),t.TgZ(10,"button",8),t.NdJ("click",function(){return e.cancel()}),t.TgZ(11,"span",9),t._uU(12,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",10),t.TgZ(14,"form",11),t.TgZ(15,"div",12),t._UZ(16,"app-start-end-date",13),t.TgZ(17,"div",14),t.TgZ(18,"div",15),t.TgZ(19,"label",16),t._uU(20),t.ALo(21,"translate"),t.qZA(),t.TgZ(22,"div",17),t._UZ(23,"ng-select",18),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"div",12),t.TgZ(25,"div",14),t.TgZ(26,"div",15),t.TgZ(27,"label",16),t._uU(28),t.ALo(29,"translate"),t.qZA(),t.TgZ(30,"div",17),t._UZ(31,"ng-select",19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"div",14),t.TgZ(33,"div",15),t.TgZ(34,"label",16),t._uU(35),t.ALo(36,"translate"),t.qZA(),t.TgZ(37,"div",17),t._UZ(38,"input",20),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(39,"div",0),t.TgZ(40,"div",1),t.TgZ(41,"div",21),t.TgZ(42,"div",22),t.YNc(43,I,2,2,"app-common-list-2",23),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(6),t.Oqu(t.lcZ(7,22,"FORM.act_list")),t.xp6(8),t.Q6J("formGroup",e.actForm),t.xp6(2),t.Q6J("formInput",e.actForm)("colClass","col-md-4"),t.xp6(4),t.Oqu(t.lcZ(21,24,"FORM.status")),t.xp6(3),t.ekj("is-invalid",e.isControlInvalid("status"))("is-valid",e.isControlValid("status")),t.Q6J("items",e.statusOption),t.xp6(5),t.Oqu(t.lcZ(29,26,"FORM.act_type")),t.xp6(3),t.ekj("is-invalid",e.isControlInvalid("type"))("is-valid",e.isControlValid("type")),t.Q6J("items",e.activityTypeOption),t.xp6(4),t.Oqu(t.lcZ(36,28,"FORM.act_title")),t.xp6(3),t.ekj("is-invalid",e.isControlInvalid("title"))("is-valid",e.isControlValid("title")),t.xp6(5),t.Q6J("ngIf",e.activityList.length>0))},directives:[o._Y,o.JL,o.sg,C.Q,L.Z,u.w9,o.JJ,o.u,o.Fj,l.O5,F.o],pipes:[M.X],styles:[".col-form-label[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.form-group.row[_ngcontent-%COMP%]{align-items:center}"]}),n})();var N=a(87626),E=a(45598),D=a(63699),b=a(92275);let Y=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,o.u5,o.UX,N.vi,E.fA,b.W,u.A0,D.j,r.Bz.forChild([{path:"",component:O}])]]}),n})()}}]);