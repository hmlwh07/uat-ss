"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1379],{11918:(E,C,n)=>{n.d(C,{b:()=>P});var t=n(83668),r=n(49133),v=n(90949),m=n(62311),d=n(85378),g=n(21177),u=n(44290),T=n(92118),_=n(47975),Z=n(29018),a=n(99457),l=n(86019),f=n(15470),A=n(85472),b=n(57842);function y(s,c){if(1&s){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){return t.CHM(e),t.oxw().navigateToDetail("create")}),t._UZ(1,"span",26),t.qZA()}}function h(s,c){if(1&s){const e=t.EpF();t.TgZ(0,"div",27),t.TgZ(1,"app-material-table-view",28),t.NdJ("emitter",function(i){return t.CHM(e),t.oxw(2).actionBtn(i)})("rowselect",function(i){return t.CHM(e),t.oxw(2).rowSelected(i)}),t.qZA(),t.qZA()}if(2&s){const e=t.oxw(2);t.xp6(1),t.Q6J("data",e.customerList)("colum",e.ELEMENT_COL)("displayedColumns",e.displayedColumns)("selectable",e.isPopup)}}function L(s,c){if(1&s){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",31),t.TgZ(2,"button",32),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).closeModal()}),t._uU(3,"Cancel"),t.qZA(),t.TgZ(4,"button",33),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).nextProd()}),t._uU(5,"Next"),t.qZA(),t.qZA(),t.BQk()}if(2&s){const e=t.oxw(2);t.xp6(4),t.Q6J("disabled",!e.selected.customerId)}}function M(s,c){if(1&s){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",31),t.TgZ(2,"button",32),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).closeModal()}),t._uU(3,"Cancel"),t.qZA(),t.TgZ(4,"button",33),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).nextProd()}),t._uU(5,"Next"),t.qZA(),t.qZA(),t.BQk()}if(2&s){const e=t.oxw(2);t.xp6(4),t.Q6J("disabled",!e.selected.customerId)}}function D(s,c){if(1&s){const e=t.EpF();t.TgZ(0,"div",27),t.TgZ(1,"app-material-table-view",28),t.NdJ("emitter",function(i){return t.CHM(e),t.oxw().actionBtn(i)})("rowselect",function(i){return t.CHM(e),t.oxw().rowSelected(i)}),t.qZA(),t.TgZ(2,"div",0),t.TgZ(3,"div",1),t.TgZ(4,"div",29),t.YNc(5,h,2,4,"div",24),t.YNc(6,L,6,1,"ng-container",30),t.qZA(),t.YNc(7,M,6,1,"ng-container",30),t.qZA(),t.qZA(),t.qZA()}if(2&s){const e=t.oxw();t.xp6(1),t.Q6J("data",e.customerList)("colum",e.ELEMENT_COL)("displayedColumns",e.displayedColumns)("selectable",e.isPopup),t.xp6(3),t.ekj("remove-p",e.isPopup),t.xp6(1),t.Q6J("ngIf",e.show),t.xp6(1),t.Q6J("ngIf",e.isPopup&&!e.isDynamic),t.xp6(1),t.Q6J("ngIf",e.isPopup&&!e.isDynamic)}}let P=(()=>{class s{constructor(e,o,i,p){this.router=e,this.cdf=o,this.customerListService=i,this.modalService=p,this.ELEMENT_COL=JSON.parse(JSON.stringify(m.Ks)),this.displayedColumns=JSON.parse(JSON.stringify(m.Q1)),this.customerList=[],this.statusOption=m.qb,this.identityTypeOption=m.Mf,this.selectedUser=new t.vpe,this.isPopup=!1,this.party=!0,this.isDynamic=!1,this.show=!1,this.loadForm()}ngOnInit(){this.isPopup&&(this.ELEMENT_COL.splice(9,1),this.displayedColumns.splice(9,1)),this.show=!0}ngAfterViewInit(){this.getList()}loadForm(){this.customerForm=new r.cw({name:new r.NI(null),identityType:new r.NI(null),identityNumber:new r.NI(null),statusCode:new r.NI(null),partyCode:new r.NI(null),startDate:new r.NI(null),endDate:new r.NI(null)})}navigateToDetail(e,o,i){this.router.navigate(["/customer/customer-detail"],{queryParams:{pageStatus:e,pageId:o,pageSecondaryId:i}})}getList(){this.customerListService.getCustomerList(this.customerForm.value,this.party,!(!this.isPopup||this.isDynamic)).toPromise().then(o=>{o&&(this.customerList=o,console.log("customerList",this.customerList),this.cdf.detectChanges(),this.matTable&&this.matTable.reChangeData())})}get selected(){let e;return this.matTable&&(e=this.matTable.selection.selected[0]),e||{customerId:0}}rowSelected(e){this.selectedUser.emit(e)}cancel(){this.customerForm.reset(),this.getList()}actionBtn(e){"edit"==e.cmd&&this.navigateToDetail("edit",e.data.customerId,e.data.individualId)}isControlValid(e){const o=this.customerForm.controls[e];return o.valid&&(o.dirty||o.touched)}isControlInvalid(e){const o=this.customerForm.controls[e];return o.invalid&&(o.dirty||o.touched)}controlHasError(e,o){const i=this.customerForm.controls[o];return i.hasError(e)&&(i.dirty||i.touched)}isControlTouched(e){const o=this.customerForm.controls[e];return o.dirty||o.touched}nextProd(){this.selected.customerId&&this.modalService.dismissAll({data:this.selected,type:"save"})}closeModal(){this.modalService.dismissAll()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(Z.F0),t.Y36(t.sBO),t.Y36(a.c),t.Y36(d.FF))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-customer-list"]],viewQuery:function(e,o){if(1&e&&t.Gf(v.I,5),2&e){let i;t.iGM(i=t.CRH())&&(o.matTable=i.first)}},inputs:{isPopup:"isPopup",party:"party",isDynamic:"isDynamic"},outputs:{selectedUser:"selectedUser"},features:[t._Bn([{provide:d.DO,useClass:g.Wv},{provide:d.NG,useClass:g.ke},{provide:u._A,useClass:T.t7,deps:[u.Ad]},{provide:u.sG,useValue:_.Gs}])],decls:54,vars:31,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button","class","btn btn-primary btn-circle","style","margin-right: 1rem;\n                    ",3,"click",4,"ngIf"],[1,"flaticon2-magnifier-tool","search-tool",3,"click"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],["remove-host","",3,"formInput","colClass"],[1,"col-md-6"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["type","text","name","name","autocomplete","off","formControlName","name",1,"form-control","form-control-sm"],["type","text","name","partyCode","autocomplete","off","formControlName","partyCode",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","identityType",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["type","text","name","identityNumber","autocomplete","off","formControlName","identityNumber",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","statusCode",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["class","card-body customer-card-body",4,"ngIf"],["type","button",1,"btn","btn-primary","btn-circle",2,"margin-right","1rem",3,"click"],[1,"flaticon2-plus"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","selectable","emitter","rowselect"],[1,"card","card-custom","gutter-b","data"],[4,"ngIf"],[1,"card-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","button",1,"btn","btn-primary","btn-elevate",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"Customer List"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.YNc(8,y,2,0,"button",7),t.TgZ(9,"span",8),t.NdJ("click",function(){return o.getList()}),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return o.cancel()}),t.TgZ(11,"span",10),t._uU(12,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",11),t.TgZ(14,"form",12),t.TgZ(15,"div",13),t._UZ(16,"app-start-end-date",14),t.qZA(),t.TgZ(17,"div",13),t.TgZ(18,"div",15),t.TgZ(19,"div",16),t.TgZ(20,"label",17),t._uU(21,"Name"),t.qZA(),t.TgZ(22,"div",18),t._UZ(23,"input",19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"div",15),t.TgZ(25,"div",16),t.TgZ(26,"label",17),t._uU(27,"Party Code"),t.qZA(),t.TgZ(28,"div",18),t._UZ(29,"input",20),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",13),t.TgZ(31,"div",15),t.TgZ(32,"div",16),t.TgZ(33,"label",17),t._uU(34,"ID Type"),t.qZA(),t.TgZ(35,"div",18),t._UZ(36,"ng-select",21),t.qZA(),t.qZA(),t.qZA(),t.TgZ(37,"div",15),t.TgZ(38,"div",16),t.TgZ(39,"label",17),t._uU(40,"ID No."),t.qZA(),t.TgZ(41,"div",18),t._UZ(42,"input",22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"div",0),t.TgZ(44,"div",15),t.TgZ(45,"div",16),t.TgZ(46,"label",17),t._uU(47,"Status"),t.qZA(),t.TgZ(48,"div",18),t._UZ(49,"ng-select",23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(50,"div",0),t.TgZ(51,"div",1),t.TgZ(52,"div",2),t.YNc(53,D,8,9,"div",24),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.ekj("remove-p",o.isPopup),t.xp6(6),t.Q6J("ngIf",!o.isPopup),t.xp6(6),t.Q6J("formGroup",o.customerForm),t.xp6(2),t.Q6J("formInput",o.customerForm)("colClass","col-md-6"),t.xp6(7),t.ekj("is-invalid",o.isControlInvalid("name"))("is-valid",o.isControlValid("name")),t.xp6(6),t.ekj("is-invalid",o.isControlInvalid("partyCode"))("is-valid",o.isControlValid("partyCode")),t.xp6(7),t.ekj("is-invalid",o.isControlInvalid("identityType"))("is-valid",o.isControlValid("identityType")),t.Q6J("items",o.identityTypeOption),t.xp6(6),t.ekj("is-invalid",o.isControlInvalid("identityNumber"))("is-valid",o.isControlValid("identityNumber")),t.xp6(7),t.ekj("is-invalid",o.isControlInvalid("statusCode"))("is-valid",o.isControlValid("statusCode")),t.Q6J("items",o.statusOption),t.xp6(3),t.ekj("remove-p",o.isPopup),t.xp6(1),t.Q6J("ngIf",o.show))},directives:[l.O5,r._Y,r.JL,r.sg,f.Q,A.Z,r.Fj,r.JJ,r.u,b.w9,v.I],styles:[".remove-p[_ngcontent-%COMP%]{margin-bottom:0}.col-form-label[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.form-group.row[_ngcontent-%COMP%]{align-items:center}.draggable[_ngcontent-%COMP%]{color:#fff;border-radius:50%;touch-action:none;-webkit-user-select:none;user-select:none;position:absolute;z-index:999}"]}),s})()},80842:(E,C,n)=>{n.d(C,{G:()=>T});var t=n(92070),v=n(18260),m=n(91691),d=n(83668),g=n(44522);const u=`${v.N.apiUrl}/quotation`;let T=(()=>{class _ extends m.i{constructor(a){super(a,u),this.httpClient=a}getQuoList(a={}){let l=u+"?";return l=l+"isTeam="+!!a.isTeam+"&",a.startDate&&(l=l+"startDate="+t(a.startDate).format("YYYY-MM-DD")+"&"),a.endDate&&(l=l+"endDate="+t(a.endDate).format("YYYY-MM-DD")+"&"),this.httpClient.get(l)}}return _.\u0275fac=function(a){return new(a||_)(d.LFG(g.eN))},_.\u0275prov=d.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()}}]);