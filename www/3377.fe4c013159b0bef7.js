"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3377],{91691:(p,d,a)=>{a.d(d,{i:()=>u});var o=a(82997);class u{constructor(n,r){this.httpClient=n,this.baseUri=r}save(n){try{return this.httpClient.post(this.baseUri,n)}catch(r){return(0,o.of)(null)}}delete(n){try{return this.httpClient.delete(this.baseUri+"/"+n)}catch(r){return(0,o.of)(null)}}update(n,r){try{return this.httpClient.put(this.baseUri+"/"+n,r)}catch(v){return(0,o.of)(null)}}updateNoID(n){try{return this.httpClient.put(this.baseUri,n)}catch(r){return(0,o.of)(null)}}findOne(n){try{return this.httpClient.get(this.baseUri+"/"+n)}catch(r){return(0,o.of)(null)}}findAll(){try{return this.httpClient.get(this.baseUri)}catch(n){return(0,o.of)(null)}}findAllWithQuery(n=""){try{return this.httpClient.get(this.baseUri+"?"+n)}catch(r){return(0,o.of)(null)}}}},63703:(p,d,a)=>{a.d(d,{n:()=>u,t:()=>l});var o=a(18510);const u=[{title:"Activity No.",type:o.Y.FEILD,field:"activityNo"},{title:"Activity Type",type:o.Y.FEILD,field:"activityType"},{title:"Activity Title",type:o.Y.FEILD,field:"activityTitle"},{title:"Related To",type:o.Y.FEILD,field:"relatedTo"},{title:"Assigned To",type:o.Y.FEILD,field:"assignName"},{title:"Due Date",type:o.Y.FEILD,field:"dueDate",isFromatDate:!0},{title:"Status",type:o.Y.FEILD,field:"status",isActivityStatus:!0},{title:"Customer",type:o.Y.FEILD,field:"customerName"},{title:"Actions",type:o.Y.ACTION,field:"actions",btn:{edit:!0}}],l=["activityNo","activityType","activityTitle","relatedTo","assignName","dueDate","status","customerName","actions"]},98111:(p,d,a)=>{a.r(d),a.d(d,{ActivityManagementListModule:()=>T});var o=a(86019),u=a(29018),l=a(49133),n=a(90949),r=a(18510),v=a(63703),t=a(83668),h=a(95976),g=a(57842);let f=(()=>{class s{constructor(i,e,c,y){this.fb=i,this.router=e,this.activityService=c,this.cdf=y,this.ELEMENT_COL=v.n,this.displayedColumns=v.t,this.activityList=[],this.activityStatus=r.f,this.activityType=["Face to Face","Online","Phone Call"],this.activityTypeOption=[{code:"",value:"All"},{code:"Face to Face",value:"Face to Face"},{code:"Online",value:"Online"},{code:"Phone Call",value:"Phone Call"}],this.statusOption=[{code:"",value:"All"},{code:"Open",value:"Open"},{code:"Complete",value:"Complete"},{code:"Cancel",value:"Cancel"}],this.loadForm()}ngOnInit(){}ngAfterViewInit(){this.getList()}loadForm(){this.actForm=new l.cw({type:new l.NI(""),title:new l.NI(null),status:new l.NI("")})}getList(){this.activityService.getActivityList(this.actForm.value).toPromise().then(i=>{i&&(this.activityList=i,this.cdf.detectChanges(),this.matTable.reChangeData())})}actionBtn(i){"edit"==i.cmd&&this.navigateToDetail("edit",i.data.activityNo)}isControlValid(i){const e=this.actForm.controls[i];return e.valid&&(e.dirty||e.touched)}isControlInvalid(i){const e=this.actForm.controls[i];return e.invalid&&(e.dirty||e.touched)}controlHasError(i,e){const c=this.actForm.controls[e];return c.hasError(i)&&(c.dirty||c.touched)}isControlTouched(i){const e=this.actForm.controls[i];return e.dirty||e.touched}navigateToDetail(i,e){this.router.navigate(["/activity/activity-management-detail"],{queryParams:{pageStatus:i,pageId:e}})}}return s.\u0275fac=function(i){return new(i||s)(t.Y36(l.qu),t.Y36(u.F0),t.Y36(h.e),t.Y36(t.sBO))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-activity-management-list"]],viewQuery:function(i,e){if(1&i&&t.Gf(n.I,5),2&i){let c;t.iGM(c=t.CRH())&&(e.matTable=c.first)}},decls:36,vars:18,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","75px",3,"click"],[1,"flaticon2-magnifier-tool"],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-md-4"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["bindLabel","value","bindValue","code","formControlName","type",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["type","text","name","title","autocomplete","off","formControlName","title",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","status",1,"ng-custom-select","ng-custom-select-sm",3,"items"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","emitter"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"Activity Management List"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return e.getList()}),t._UZ(9,"span",8),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",9),t.TgZ(11,"form",10),t.TgZ(12,"div",11),t.TgZ(13,"div",12),t.TgZ(14,"div",13),t.TgZ(15,"label",14),t._uU(16,"Activity Type"),t.qZA(),t.TgZ(17,"div",15),t._UZ(18,"ng-select",16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",12),t.TgZ(20,"div",13),t.TgZ(21,"label",14),t._uU(22,"Activity Title"),t.qZA(),t.TgZ(23,"div",15),t._UZ(24,"input",17),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"div",12),t.TgZ(26,"div",13),t.TgZ(27,"label",14),t._uU(28,"Status"),t.qZA(),t.TgZ(29,"div",15),t._UZ(30,"ng-select",18),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(31,"div",0),t.TgZ(32,"div",1),t.TgZ(33,"div",2),t.TgZ(34,"div",19),t.TgZ(35,"app-material-table-view",20),t.NdJ("emitter",function(y){return e.actionBtn(y)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(11),t.Q6J("formGroup",e.actForm),t.xp6(7),t.ekj("is-invalid",e.isControlInvalid("type"))("is-valid",e.isControlValid("type")),t.Q6J("items",e.activityTypeOption),t.xp6(6),t.ekj("is-invalid",e.isControlInvalid("title"))("is-valid",e.isControlValid("title")),t.xp6(6),t.ekj("is-invalid",e.isControlInvalid("status"))("is-valid",e.isControlValid("status")),t.Q6J("items",e.statusOption),t.xp6(5),t.Q6J("data",e.activityList)("colum",e.ELEMENT_COL)("displayedColumns",e.displayedColumns))},directives:[l._Y,l.JL,l.sg,g.w9,l.JJ,l.u,l.Fj,n.I],styles:[".col-form-label[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.form-group.row[_ngcontent-%COMP%]{align-items:center}"]}),s})();var A=a(87626),Z=a(45598);let T=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[o.ez,l.u5,l.UX,A.vi,Z.fA,g.A0,u.Bz.forChild([{path:"",component:f}])]]}),s})()}}]);