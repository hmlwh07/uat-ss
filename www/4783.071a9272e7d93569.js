"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4783],{11918:(Z,u,s)=>{s.d(u,{b:()=>y});var t=s(83668),n=s(49133),m=s(90949),_=s(62311),d=s(85993),p=s(21177),c=s(44290),g=s(92118),a=s(47975),l=s(4205),C=s(99457),E=s(86019),O=s(15470),A=s(85472),M=s(57842),f=s(15346);function h(r,v){if(1&r){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){return t.CHM(e),t.oxw().navigateToDetail("create")}),t._UZ(1,"span",26),t.qZA()}}function L(r,v){if(1&r){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",30),t.TgZ(2,"button",31),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).closeModal()}),t._uU(3,"Cancel"),t.qZA(),t.TgZ(4,"button",32),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).nextProd()}),t._uU(5,"Next"),t.qZA(),t.qZA(),t.BQk()}if(2&r){const e=t.oxw(2);t.xp6(4),t.Q6J("disabled",!e.selected.customerId)}}function P(r,v){if(1&r){const e=t.EpF();t.TgZ(0,"div",27),t.TgZ(1,"app-material-table-view",28),t.NdJ("emitter",function(i){return t.CHM(e),t.oxw().actionBtn(i)})("rowselect",function(i){return t.CHM(e),t.oxw().rowSelected(i)}),t.qZA(),t.YNc(2,L,6,1,"ng-container",29),t.qZA()}if(2&r){const e=t.oxw();t.xp6(1),t.Q6J("data",e.customerList)("colum",e.ELEMENT_COL)("displayedColumns",e.displayedColumns)("selectable",e.isPopup),t.xp6(1),t.Q6J("ngIf",e.isPopup&&!e.isDynamic)}}let y=(()=>{class r{constructor(e,o,i,T){this.router=e,this.cdf=o,this.customerListService=i,this.modalService=T,this.ELEMENT_COL=JSON.parse(JSON.stringify(_.Ks)),this.displayedColumns=JSON.parse(JSON.stringify(_.Q1)),this.customerList=[],this.statusOption=_.qb,this.identityTypeOption=_.Mf,this.selectedUser=new t.vpe,this.isPopup=!1,this.party=!0,this.isDynamic=!1,this.show=!1,this.loadForm()}ngOnInit(){this.isPopup&&(this.ELEMENT_COL.splice(9,1),this.displayedColumns.splice(9,1)),this.show=!0}ngAfterViewInit(){this.getList()}loadForm(){this.customerForm=new n.cw({name:new n.NI(null),identityType:new n.NI(null),identityNumber:new n.NI(null),statusCode:new n.NI(null),partyCode:new n.NI(null),startDate:new n.NI(null),endDate:new n.NI(null)})}navigateToDetail(e,o,i){this.router.navigate(["/customer/customer-detail"],{queryParams:{pageStatus:e,pageId:o,pageSecondaryId:i}})}getList(){this.customerListService.getCustomerList(this.customerForm.value,this.party,!(!this.isPopup||this.isDynamic)).toPromise().then(o=>{o&&(this.customerList=o,console.log("customerList",this.customerList),this.cdf.detectChanges(),this.matTable&&this.matTable.reChangeData())})}get selected(){let e;return this.matTable&&(e=this.matTable.selection.selected[0]),e||{customerId:0}}rowSelected(e){this.selectedUser.emit(e)}cancel(){this.customerForm.reset(),this.getList()}actionBtn(e){"edit"==e.cmd&&this.navigateToDetail("edit",e.data.customerId,e.data.individualId)}isControlValid(e){const o=this.customerForm.controls[e];return o.valid&&(o.dirty||o.touched)}isControlInvalid(e){const o=this.customerForm.controls[e];return o.invalid&&(o.dirty||o.touched)}controlHasError(e,o){const i=this.customerForm.controls[o];return i.hasError(e)&&(i.dirty||i.touched)}isControlTouched(e){const o=this.customerForm.controls[e];return o.dirty||o.touched}nextProd(){this.selected.customerId&&this.modalService.dismissAll({data:this.selected,type:"save"})}closeModal(){this.modalService.dismissAll()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(l.F0),t.Y36(t.sBO),t.Y36(C.c),t.Y36(d.FF))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-customer-list"]],viewQuery:function(e,o){if(1&e&&t.Gf(m.I,5),2&e){let i;t.iGM(i=t.CRH())&&(o.matTable=i.first)}},inputs:{isPopup:"isPopup",party:"party",isDynamic:"isDynamic"},outputs:{selectedUser:"selectedUser"},features:[t._Bn([{provide:d.DO,useClass:p.Wv},{provide:d.NG,useClass:p.ke},{provide:c._A,useClass:g.t7,deps:[c.Ad]},{provide:c.sG,useValue:a.Gs}])],decls:61,vars:52,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button","class","btn btn-primary btn-circle","style","margin-right: 1rem;\n                    ",3,"click",4,"ngIf"],[1,"flaticon2-magnifier-tool","search-tool",3,"click"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],["remove-host","",3,"formInput","colClass"],[1,"col-md-6"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["type","text","name","name","autocomplete","off","formControlName","name",1,"form-control","form-control-sm"],["type","text","name","partyCode","autocomplete","off","formControlName","partyCode",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","identityType",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["type","text","name","identityNumber","autocomplete","off","formControlName","identityNumber",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","statusCode",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["class","card-body customer-card-body",4,"ngIf"],["type","button",1,"btn","btn-primary","btn-circle",2,"margin-right","1rem",3,"click"],[1,"flaticon2-plus"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","selectable","emitter","rowselect"],[4,"ngIf"],[1,"card-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","button",1,"btn","btn-primary","btn-elevate",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.qZA(),t.TgZ(8,"div",6),t.YNc(9,h,2,0,"button",7),t.TgZ(10,"span",8),t.NdJ("click",function(){return o.getList()}),t.qZA(),t.TgZ(11,"button",9),t.NdJ("click",function(){return o.cancel()}),t.TgZ(12,"span",10),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",11),t.TgZ(16,"form",12),t.TgZ(17,"div",13),t._UZ(18,"app-start-end-date",14),t.qZA(),t.TgZ(19,"div",13),t.TgZ(20,"div",15),t.TgZ(21,"div",16),t.TgZ(22,"label",17),t._uU(23),t.ALo(24,"translate"),t.qZA(),t.TgZ(25,"div",18),t._UZ(26,"input",19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"div",15),t.TgZ(28,"div",16),t.TgZ(29,"label",17),t._uU(30),t.ALo(31,"translate"),t.qZA(),t.TgZ(32,"div",18),t._UZ(33,"input",20),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"div",13),t.TgZ(35,"div",15),t.TgZ(36,"div",16),t.TgZ(37,"label",17),t._uU(38),t.ALo(39,"translate"),t.qZA(),t.TgZ(40,"div",18),t._UZ(41,"ng-select",21),t.qZA(),t.qZA(),t.qZA(),t.TgZ(42,"div",15),t.TgZ(43,"div",16),t.TgZ(44,"label",17),t._uU(45),t.ALo(46,"translate"),t.qZA(),t.TgZ(47,"div",18),t._UZ(48,"input",22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(49,"div",0),t.TgZ(50,"div",15),t.TgZ(51,"div",16),t.TgZ(52,"label",17),t._uU(53),t.ALo(54,"translate"),t.qZA(),t.TgZ(55,"div",18),t._UZ(56,"ng-select",23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(57,"div",0),t.TgZ(58,"div",1),t.TgZ(59,"div",2),t.YNc(60,P,3,5,"div",24),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.ekj("remove-p",o.isPopup),t.xp6(4),t.Oqu(t.lcZ(7,38,"FORM.customer_list")),t.xp6(3),t.Q6J("ngIf",!o.isPopup),t.xp6(4),t.Oqu(t.lcZ(14,40,"FORM.btn_cancel")),t.xp6(3),t.Q6J("formGroup",o.customerForm),t.xp6(2),t.Q6J("formInput",o.customerForm)("colClass","col-md-6"),t.xp6(5),t.Oqu(t.lcZ(24,42,"FORM.name")),t.xp6(3),t.ekj("is-invalid",o.isControlInvalid("name"))("is-valid",o.isControlValid("name")),t.xp6(4),t.Oqu(t.lcZ(31,44,"FORM.party_code")),t.xp6(3),t.ekj("is-invalid",o.isControlInvalid("partyCode"))("is-valid",o.isControlValid("partyCode")),t.xp6(5),t.Oqu(t.lcZ(39,46,"FORM.id_type")),t.xp6(3),t.ekj("is-invalid",o.isControlInvalid("identityType"))("is-valid",o.isControlValid("identityType")),t.Q6J("items",o.identityTypeOption),t.xp6(4),t.Oqu(t.lcZ(46,48,"FORM.id_no")),t.xp6(3),t.ekj("is-invalid",o.isControlInvalid("identityNumber"))("is-valid",o.isControlValid("identityNumber")),t.xp6(5),t.Oqu(t.lcZ(54,50,"FORM.status")),t.xp6(3),t.ekj("is-invalid",o.isControlInvalid("statusCode"))("is-valid",o.isControlValid("statusCode")),t.Q6J("items",o.statusOption),t.xp6(3),t.ekj("remove-p",o.isPopup),t.xp6(1),t.Q6J("ngIf",o.show))},directives:[E.O5,n._Y,n.JL,n.sg,O.Q,A.Z,n.Fj,n.JJ,n.u,M.w9,m.I],pipes:[f.X],styles:[".remove-p[_ngcontent-%COMP%]{margin-bottom:0}.col-form-label[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.form-group.row[_ngcontent-%COMP%]{align-items:center}.draggable[_ngcontent-%COMP%]{color:#fff;border-radius:50%;touch-action:none;-webkit-user-select:none;user-select:none;position:absolute;z-index:999}"]}),r})()},64783:(Z,u,s)=>{s.r(u),s.d(u,{CustomerListModule:()=>a});var t=s(86019),n=s(4205),m=s(49133),_=s(87626),d=s(45598),p=s(11918),c=s(90860),g=s(83668);let a=(()=>{class l{}return l.\u0275fac=function(E){return new(E||l)},l.\u0275mod=g.oAB({type:l}),l.\u0275inj=g.cJS({imports:[[t.ez,m.u5,m.UX,_.vi,d.fA,c.m,n.Bz.forChild([{path:"",component:p.b}])]]}),l})()},90860:(Z,u,s)=>{s.d(u,{m:()=>g});var t=s(86019),n=s(49133),m=s(87626),_=s(45598),d=s(57842),p=s(63699),c=s(83668);let g=(()=>{class a{}return a.\u0275fac=function(C){return new(C||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({imports:[[t.ez,n.u5,n.UX,m.vi,_.fA,d.A0,p.j]]}),a})()}}]);