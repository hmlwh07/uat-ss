"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4783],{11918:(E,C,n)=>{n.d(C,{b:()=>D});var t=n(83668),s=n(49133),m=n(90949),l=n(62311),d=n(85378),u=n(21177),p=n(44290),a=n(92118),v=n(47975),_=n(29018),T=n(99457),Z=n(86019),f=n(15470),A=n(85472),M=n(57842);function h(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){return t.CHM(e),t.oxw().navigateToDetail("create")}),t._UZ(1,"span",26),t.qZA()}}function L(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",27),t.TgZ(1,"app-material-table-view",28),t.NdJ("emitter",function(i){return t.CHM(e),t.oxw(2).actionBtn(i)})("rowselect",function(i){return t.CHM(e),t.oxw(2).rowSelected(i)}),t.qZA(),t.qZA()}if(2&r){const e=t.oxw(2);t.xp6(1),t.Q6J("data",e.customerList)("colum",e.ELEMENT_COL)("displayedColumns",e.displayedColumns)("selectable",e.isPopup)}}function P(r,c){if(1&r){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",31),t.TgZ(2,"button",32),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).closeModal()}),t._uU(3,"Cancel"),t.qZA(),t.TgZ(4,"button",33),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).nextProd()}),t._uU(5,"Next"),t.qZA(),t.qZA(),t.BQk()}if(2&r){const e=t.oxw(2);t.xp6(4),t.Q6J("disabled",!e.selected.customerId)}}function y(r,c){if(1&r){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",31),t.TgZ(2,"button",32),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).closeModal()}),t._uU(3,"Cancel"),t.qZA(),t.TgZ(4,"button",33),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).nextProd()}),t._uU(5,"Next"),t.qZA(),t.qZA(),t.BQk()}if(2&r){const e=t.oxw(2);t.xp6(4),t.Q6J("disabled",!e.selected.customerId)}}function O(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",27),t.TgZ(1,"app-material-table-view",28),t.NdJ("emitter",function(i){return t.CHM(e),t.oxw().actionBtn(i)})("rowselect",function(i){return t.CHM(e),t.oxw().rowSelected(i)}),t.qZA(),t.TgZ(2,"div",0),t.TgZ(3,"div",1),t.TgZ(4,"div",29),t.YNc(5,L,2,4,"div",24),t.YNc(6,P,6,1,"ng-container",30),t.qZA(),t.YNc(7,y,6,1,"ng-container",30),t.qZA(),t.qZA(),t.qZA()}if(2&r){const e=t.oxw();t.xp6(1),t.Q6J("data",e.customerList)("colum",e.ELEMENT_COL)("displayedColumns",e.displayedColumns)("selectable",e.isPopup),t.xp6(3),t.ekj("remove-p",e.isPopup),t.xp6(1),t.Q6J("ngIf",e.show),t.xp6(1),t.Q6J("ngIf",e.isPopup&&!e.isDynamic),t.xp6(1),t.Q6J("ngIf",e.isPopup&&!e.isDynamic)}}let D=(()=>{class r{constructor(e,o,i,g){this.router=e,this.cdf=o,this.customerListService=i,this.modalService=g,this.ELEMENT_COL=JSON.parse(JSON.stringify(l.Ks)),this.displayedColumns=JSON.parse(JSON.stringify(l.Q1)),this.customerList=[],this.statusOption=l.qb,this.identityTypeOption=l.Mf,this.selectedUser=new t.vpe,this.isPopup=!1,this.party=!0,this.isDynamic=!1,this.show=!1,this.loadForm()}ngOnInit(){this.isPopup&&(this.ELEMENT_COL.splice(9,1),this.displayedColumns.splice(9,1)),this.show=!0}ngAfterViewInit(){this.getList()}loadForm(){this.customerForm=new s.cw({name:new s.NI(null),identityType:new s.NI(null),identityNumber:new s.NI(null),statusCode:new s.NI(null),partyCode:new s.NI(null),startDate:new s.NI(null),endDate:new s.NI(null)})}navigateToDetail(e,o,i){this.router.navigate(["/customer/customer-detail"],{queryParams:{pageStatus:e,pageId:o,pageSecondaryId:i}})}getList(){this.customerListService.getCustomerList(this.customerForm.value,this.party,!(!this.isPopup||this.isDynamic)).toPromise().then(o=>{o&&(this.customerList=o,console.log("customerList",this.customerList),this.cdf.detectChanges(),this.matTable&&this.matTable.reChangeData())})}get selected(){let e;return this.matTable&&(e=this.matTable.selection.selected[0]),e||{customerId:0}}rowSelected(e){this.selectedUser.emit(e)}cancel(){this.customerForm.reset(),this.getList()}actionBtn(e){"edit"==e.cmd&&this.navigateToDetail("edit",e.data.customerId,e.data.individualId)}isControlValid(e){const o=this.customerForm.controls[e];return o.valid&&(o.dirty||o.touched)}isControlInvalid(e){const o=this.customerForm.controls[e];return o.invalid&&(o.dirty||o.touched)}controlHasError(e,o){const i=this.customerForm.controls[o];return i.hasError(e)&&(i.dirty||i.touched)}isControlTouched(e){const o=this.customerForm.controls[e];return o.dirty||o.touched}nextProd(){this.selected.customerId&&this.modalService.dismissAll({data:this.selected,type:"save"})}closeModal(){this.modalService.dismissAll()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(_.F0),t.Y36(t.sBO),t.Y36(T.c),t.Y36(d.FF))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-customer-list"]],viewQuery:function(e,o){if(1&e&&t.Gf(m.I,5),2&e){let i;t.iGM(i=t.CRH())&&(o.matTable=i.first)}},inputs:{isPopup:"isPopup",party:"party",isDynamic:"isDynamic"},outputs:{selectedUser:"selectedUser"},features:[t._Bn([{provide:d.DO,useClass:u.Wv},{provide:d.NG,useClass:u.ke},{provide:p._A,useClass:a.t7,deps:[p.Ad]},{provide:p.sG,useValue:v.Gs}])],decls:54,vars:31,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button","class","btn btn-primary btn-circle","style","margin-right: 1rem;\n                    ",3,"click",4,"ngIf"],[1,"flaticon2-magnifier-tool","search-tool",3,"click"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],["remove-host","",3,"formInput","colClass"],[1,"col-md-6"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["type","text","name","name","autocomplete","off","formControlName","name",1,"form-control","form-control-sm"],["type","text","name","partyCode","autocomplete","off","formControlName","partyCode",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","identityType",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["type","text","name","identityNumber","autocomplete","off","formControlName","identityNumber",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","statusCode",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["class","card-body customer-card-body",4,"ngIf"],["type","button",1,"btn","btn-primary","btn-circle",2,"margin-right","1rem",3,"click"],[1,"flaticon2-plus"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","selectable","emitter","rowselect"],[1,"card","card-custom","gutter-b","data"],[4,"ngIf"],[1,"card-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","button",1,"btn","btn-primary","btn-elevate",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"Customer List"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.YNc(8,h,2,0,"button",7),t.TgZ(9,"span",8),t.NdJ("click",function(){return o.getList()}),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return o.cancel()}),t.TgZ(11,"span",10),t._uU(12,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",11),t.TgZ(14,"form",12),t.TgZ(15,"div",13),t._UZ(16,"app-start-end-date",14),t.qZA(),t.TgZ(17,"div",13),t.TgZ(18,"div",15),t.TgZ(19,"div",16),t.TgZ(20,"label",17),t._uU(21,"Name"),t.qZA(),t.TgZ(22,"div",18),t._UZ(23,"input",19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"div",15),t.TgZ(25,"div",16),t.TgZ(26,"label",17),t._uU(27,"Party Code"),t.qZA(),t.TgZ(28,"div",18),t._UZ(29,"input",20),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",13),t.TgZ(31,"div",15),t.TgZ(32,"div",16),t.TgZ(33,"label",17),t._uU(34,"ID Type"),t.qZA(),t.TgZ(35,"div",18),t._UZ(36,"ng-select",21),t.qZA(),t.qZA(),t.qZA(),t.TgZ(37,"div",15),t.TgZ(38,"div",16),t.TgZ(39,"label",17),t._uU(40,"ID No."),t.qZA(),t.TgZ(41,"div",18),t._UZ(42,"input",22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"div",0),t.TgZ(44,"div",15),t.TgZ(45,"div",16),t.TgZ(46,"label",17),t._uU(47,"Status"),t.qZA(),t.TgZ(48,"div",18),t._UZ(49,"ng-select",23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(50,"div",0),t.TgZ(51,"div",1),t.TgZ(52,"div",2),t.YNc(53,O,8,9,"div",24),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.ekj("remove-p",o.isPopup),t.xp6(6),t.Q6J("ngIf",!o.isPopup),t.xp6(6),t.Q6J("formGroup",o.customerForm),t.xp6(2),t.Q6J("formInput",o.customerForm)("colClass","col-md-6"),t.xp6(7),t.ekj("is-invalid",o.isControlInvalid("name"))("is-valid",o.isControlValid("name")),t.xp6(6),t.ekj("is-invalid",o.isControlInvalid("partyCode"))("is-valid",o.isControlValid("partyCode")),t.xp6(7),t.ekj("is-invalid",o.isControlInvalid("identityType"))("is-valid",o.isControlValid("identityType")),t.Q6J("items",o.identityTypeOption),t.xp6(6),t.ekj("is-invalid",o.isControlInvalid("identityNumber"))("is-valid",o.isControlValid("identityNumber")),t.xp6(7),t.ekj("is-invalid",o.isControlInvalid("statusCode"))("is-valid",o.isControlValid("statusCode")),t.Q6J("items",o.statusOption),t.xp6(3),t.ekj("remove-p",o.isPopup),t.xp6(1),t.Q6J("ngIf",o.show))},directives:[Z.O5,s._Y,s.JL,s.sg,f.Q,A.Z,s.Fj,s.JJ,s.u,M.w9,m.I],styles:[".remove-p[_ngcontent-%COMP%]{margin-bottom:0}.col-form-label[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.form-group.row[_ngcontent-%COMP%]{align-items:center}.draggable[_ngcontent-%COMP%]{color:#fff;border-radius:50%;touch-action:none;-webkit-user-select:none;user-select:none;position:absolute;z-index:999}"]}),r})()},64783:(E,C,n)=>{n.r(C),n.d(C,{CustomerListModule:()=>v});var t=n(86019),s=n(29018),m=n(49133),l=n(87626),d=n(45598),u=n(11918),p=n(90860),a=n(83668);let v=(()=>{class _{}return _.\u0275fac=function(Z){return new(Z||_)},_.\u0275mod=a.oAB({type:_}),_.\u0275inj=a.cJS({imports:[[t.ez,m.u5,m.UX,l.vi,d.fA,p.m,s.Bz.forChild([{path:"",component:u.b}])]]}),_})()},90860:(E,C,n)=>{n.d(C,{m:()=>p});var t=n(86019),s=n(49133),m=n(87626),l=n(45598),d=n(57842),u=n(83668);let p=(()=>{class a{}return a.\u0275fac=function(_){return new(_||a)},a.\u0275mod=u.oAB({type:a}),a.\u0275inj=u.cJS({imports:[[t.ez,s.u5,s.UX,m.vi,l.fA,d.A0]]}),a})()}}]);