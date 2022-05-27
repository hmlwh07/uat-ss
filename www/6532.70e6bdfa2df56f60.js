"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6532],{62311:(T,u,s)=>{s.d(u,{Ks:()=>C,Q1:()=>l,qb:()=>p,Mf:()=>f});var c=s(18510);const C=[{title:"First Name",type:c.Y.FEILD,field:"firstName"},{title:"Middle Name",type:c.Y.FEILD,field:"middleName"},{title:"Last Name",type:c.Y.FEILD,field:"lastName"},{title:"Party Code",type:c.Y.FEILD,field:"partyCode"},{title:"ID Type",type:c.Y.FEILD,field:"identityType"},{title:"ID No.",type:c.Y.FEILD,field:"identityNumber"},{title:"Date of Birth",type:c.Y.FEILD,field:"dateOfBirth",isFromatDate:!0},{title:"Father Name",type:c.Y.FEILD,field:"fatherName"},{title:"Status",type:c.Y.FEILD,field:"statusCode",isCustomerStatus:!0},{title:"Actions",type:c.Y.ACTION,field:"actions",btn:{edit:!0}}],l=["firstName","middleName","lastName","partyCode","identityType","identityNumber","dateOfBirth","fatherName","statusCode","actions"],p=[{code:"A",value:"Active"},{code:"I",value:"Inactive"}],f=[{code:"NRC",value:"NRC"},{code:"FRC",value:"FRC"},{code:"PASSPORT",value:"Passport"},{code:"OTHERS",value:"Others"}]},99457:(T,u,s)=>{s.d(u,{c:()=>v});var c=s(92070),l=s(18260),p=s(83668),f=s(44522);const t=`${l.N.apiUrl}/customer`;let v=(()=>{class d{constructor(n){this.httpClient=n}getCustomerList(n={},Z,h,_){let r=t+"?";return n.name&&(r=r+"name="+n.name+"&"),n.partyCode&&(r=r+"partyCode="+n.partyCode+"&"),n.startDate&&(r=r+"startDate="+c(n.startDate).format("YYYY-MM-DD")+"&"),n.endDate&&(r=r+"endDate="+c(n.endDate).format("YYYY-MM-DD")+"&"),n.statusCode&&(r=r+"statusCode="+n.statusCode+"&"),n.identityType&&(r=r+"identityType="+n.identityType+"&"),n.identityNumber&&(r=r+"identityNumber="+n.identityNumber+"&"),_?r+="statusCode=A":r=r+"isPartyCode="+Z,this.httpClient.get(r)}}return d.\u0275fac=function(n){return new(n||d)(p.LFG(f.eN))},d.\u0275prov=p.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},6532:(T,u,s)=>{s.r(u),s.d(u,{ProspectCustomerListModule:()=>S});var c=s(86019),C=s(4205),l=s(49133),p=s(87626),f=s(45598),t=s(83668),v=s(62311),d=s(85993),g=s(21177),n=s(44290),Z=s(92118),h=s(47975),_=s(90949),r=s(99457),b=s(15470),A=s(85472),L=s(57842),N=s(49065),P=s(15346);function I(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){return t.CHM(e),t.oxw().navigateToDetail("create")}),t._UZ(1,"span",27),t.qZA()}}function E(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"app-material-table-view",31),t.NdJ("emitter",function(a){return t.CHM(e),t.oxw(2).actionBtn(a)})("rowselect",function(a){return t.CHM(e),t.oxw(2).rowSelected(a)}),t.qZA(),t.qZA()}if(2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("data",e.customerList)("colum",e.ELEMENT_COL)("displayedColumns",e.displayedColumns)("selectable",e.isPopup)}}function D(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"app-common-list-2",33,34),t.NdJ("btnEvent",function(a){return t.CHM(e),t.oxw(3).actionBtn(a)}),t.qZA()}if(2&i){const e=t.oxw(3);t.Q6J("data",e.customerList)("type","customer")}}function O(i,m){if(1&i&&t.YNc(0,D,2,2,"app-common-list-2",32),2&i){const e=t.oxw(2);t.Q6J("ngIf",e.customerList.length>0)}}function M(i,m){if(1&i&&(t.TgZ(0,"div",28),t.YNc(1,E,2,4,"div",29),t.YNc(2,O,1,1,"ng-template",null,30,t.W1O),t.qZA()),2&i){const e=t.MAs(3),o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.isPopup)("ngIfElse",e)}}function F(i,m){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",35),t.TgZ(2,"button",36),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeModal()}),t._uU(3,"Cancel"),t.qZA(),t.TgZ(4,"button",37),t.NdJ("click",function(){return t.CHM(e),t.oxw().nextProd()}),t._uU(5,"Next"),t.qZA(),t.qZA(),t.BQk()}if(2&i){const e=t.oxw();t.xp6(4),t.Q6J("disabled",!e.selected.customerId)}}let x=(()=>{class i{constructor(e,o,a,y){this.router=e,this.cdf=o,this.customerListService=a,this.modalService=y,this.ELEMENT_COL=JSON.parse(JSON.stringify(v.Ks)),this.displayedColumns=JSON.parse(JSON.stringify(v.Q1)),this.customerList=[],this.statusOption=v.qb,this.identityTypeOption=v.Mf,this.selectedUser=new t.vpe,this.isPopup=!1,this.party=!1,this.isDynamic=!1,this.show=!1,this.loadForm()}ngOnInit(){this.isPopup&&(this.ELEMENT_COL.splice(9,1),this.displayedColumns.splice(9,1)),this.ELEMENT_COL.splice(3,1),this.displayedColumns.splice(3,1),this.show=!0}ngAfterViewInit(){this.getList()}loadForm(){this.customerForm=new l.cw({name:new l.NI(null),identityType:new l.NI(null),identityNumber:new l.NI(null),statusCode:new l.NI(null),partyCode:new l.NI(null),startDate:new l.NI(null),endDate:new l.NI(null)})}navigateToDetail(e,o,a){this.router.navigate(["/customer/customer-detail"],{queryParams:{pageStatus:e,pageId:o,pageSecondaryId:a}})}getList(){this.customerListService.getCustomerList(this.customerForm.value,this.party,!(!this.isPopup||this.isDynamic)).toPromise().then(o=>{o&&(this.customerList=o,this.cdf.detectChanges(),this.matTable&&this.matTable.reChangeData())})}get selected(){let e;return this.matTable&&(e=this.matTable.selection.selected[0]),e||{customerId:0}}rowSelected(e){this.selectedUser.emit(e)}cancel(){this.customerForm.reset(),this.getList()}actionBtn(e){"edit"==e.cmd&&this.navigateToDetail("edit",e.data.customerId,e.data.individualId)}isControlValid(e){const o=this.customerForm.controls[e];return o.valid&&(o.dirty||o.touched)}isControlInvalid(e){const o=this.customerForm.controls[e];return o.invalid&&(o.dirty||o.touched)}controlHasError(e,o){const a=this.customerForm.controls[o];return a.hasError(e)&&(a.dirty||a.touched)}isControlTouched(e){const o=this.customerForm.controls[e];return o.dirty||o.touched}nextProd(){this.selected.customerId&&this.modalService.dismissAll({data:this.selected,type:"save"})}closeModal(){this.modalService.dismissAll()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(C.F0),t.Y36(t.sBO),t.Y36(r.c),t.Y36(d.FF))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-prospect-customer-list"]],viewQuery:function(e,o){if(1&e&&t.Gf(_.I,5),2&e){let a;t.iGM(a=t.CRH())&&(o.matTable=a.first)}},inputs:{isPopup:"isPopup",party:"party",isDynamic:"isDynamic"},outputs:{selectedUser:"selectedUser"},features:[t._Bn([{provide:d.DO,useClass:g.Wv},{provide:d.NG,useClass:g.ke},{provide:n._A,useClass:Z.t7,deps:[n.Ad]},{provide:n.sG,useValue:h.Gs}])],decls:52,vars:40,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button","class","btn btn-primary btn-circle","style","margin-right: 1rem;\n                    ",3,"click",4,"ngIf"],[1,"flaticon2-magnifier-tool","search-tool",3,"click"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],["remove-host","",3,"formInput","colClass"],[1,"col-md-6"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["type","text","name","name","autocomplete","off","formControlName","name",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","statusCode",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["bindLabel","value","bindValue","code","formControlName","identityType",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["type","text","name","identityNumber","autocomplete","off","formControlName","identityNumber",1,"form-control","form-control-sm"],[1,"card","card-custom","gutter-b","data"],["class","card-body customer-card-body",4,"ngIf"],[4,"ngIf"],["type","button",1,"btn","btn-primary","btn-circle",2,"margin-right","1rem",3,"click"],[1,"flaticon2-plus"],[1,"card-body","customer-card-body"],[4,"ngIf","ngIfElse"],["no_popup",""],[3,"data","colum","displayedColumns","selectable","emitter","rowselect"],["class","data-list",3,"data","type","btnEvent",4,"ngIf"],[1,"data-list",3,"data","type","btnEvent"],["commonList",""],[1,"card-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","button",1,"btn","btn-primary","btn-elevate",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"Prospect Customer List"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.YNc(8,I,2,0,"button",7),t.TgZ(9,"span",8),t.NdJ("click",function(){return o.getList()}),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return o.cancel()}),t.TgZ(11,"span",10),t._uU(12,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",11),t.TgZ(14,"form",12),t.TgZ(15,"div",13),t._UZ(16,"app-start-end-date",14),t.qZA(),t.TgZ(17,"div",13),t.TgZ(18,"div",15),t.TgZ(19,"div",16),t.TgZ(20,"label",17),t._uU(21),t.ALo(22,"translate"),t.qZA(),t.TgZ(23,"div",18),t._UZ(24,"input",19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"div",15),t.TgZ(26,"div",16),t.TgZ(27,"label",17),t._uU(28),t.ALo(29,"translate"),t.qZA(),t.TgZ(30,"div",18),t._UZ(31,"ng-select",20),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"div",13),t.TgZ(33,"div",15),t.TgZ(34,"div",16),t.TgZ(35,"label",17),t._uU(36),t.ALo(37,"translate"),t.qZA(),t.TgZ(38,"div",18),t._UZ(39,"ng-select",21),t.qZA(),t.qZA(),t.qZA(),t.TgZ(40,"div",15),t.TgZ(41,"div",16),t.TgZ(42,"label",17),t._uU(43),t.ALo(44,"translate"),t.qZA(),t.TgZ(45,"div",18),t._UZ(46,"input",22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(47,"div",0),t.TgZ(48,"div",1),t.TgZ(49,"div",23),t.YNc(50,M,4,2,"div",24),t.YNc(51,F,6,1,"ng-container",25),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.ekj("remove-p",o.isPopup),t.xp6(6),t.Q6J("ngIf",!o.isPopup),t.xp6(6),t.Q6J("formGroup",o.customerForm),t.xp6(2),t.Q6J("formInput",o.customerForm)("colClass","col-md-6"),t.xp6(5),t.Oqu(t.lcZ(22,32,"FORM.name")),t.xp6(3),t.ekj("is-invalid",o.isControlInvalid("name"))("is-valid",o.isControlValid("name")),t.xp6(4),t.Oqu(t.lcZ(29,34,"FORM.status")),t.xp6(3),t.ekj("is-invalid",o.isControlInvalid("statusCode"))("is-valid",o.isControlValid("statusCode")),t.Q6J("items",o.statusOption),t.xp6(5),t.Oqu(t.lcZ(37,36,"FORM.id_type")),t.xp6(3),t.ekj("is-invalid",o.isControlInvalid("identityType"))("is-valid",o.isControlValid("identityType")),t.Q6J("items",o.identityTypeOption),t.xp6(4),t.Oqu(t.lcZ(44,38,"FORM.id_no")),t.xp6(3),t.ekj("is-invalid",o.isControlInvalid("identityNumber"))("is-valid",o.isControlValid("identityNumber")),t.xp6(3),t.ekj("remove-p",o.isPopup),t.xp6(1),t.Q6J("ngIf",o.show),t.xp6(1),t.Q6J("ngIf",o.isPopup&&!o.isDynamic))},directives:[c.O5,l._Y,l.JL,l.sg,b.Q,A.Z,l.Fj,l.JJ,l.u,L.w9,_.I,N.o],pipes:[P.X],styles:[".remove-p[_ngcontent-%COMP%]{margin-bottom:0}.col-form-label[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.form-group.row[_ngcontent-%COMP%]{align-items:center}.draggable[_ngcontent-%COMP%]{color:#fff;border-radius:50%;touch-action:none;-webkit-user-select:none;user-select:none;position:absolute;z-index:999}"]}),i})();var Y=s(92275),U=s(12747),J=s(63699);let S=(()=>{class i{constructor(e){(0,U.r)(e,"ProspectCustomerListModule")}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(i,12))},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.ez,l.u5,l.UX,p.vi,L.A0,f.fA,J.j,Y.W,C.Bz.forChild([{path:"",component:x}])]]}),i})()}}]);