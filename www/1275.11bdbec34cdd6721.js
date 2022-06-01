"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1275],{11918:(y,p,i)=>{i.d(p,{b:()=>b});var t=i(83668),l=i(49133),u=i(90949),_=i(62311),c=i(44290),v=i(92118),g=i(47975),d=i(49065),f=i(4205),a=i(99457),T=i(85993),E=i(15470),Z=i(85472),n=i(57842),A=i(86019),L=i(15346);function O(r,m){if(1&r){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"app-material-table-view",29),t.NdJ("emitter",function(s){return t.CHM(e),t.oxw(2).actionBtn(s)})("rowselect",function(s){return t.CHM(e),t.oxw(2).rowSelected(s)}),t.qZA(),t.qZA()}if(2&r){const e=t.oxw(2);t.xp6(1),t.Q6J("data",e.customerList)("colum",e.ELEMENT_COL)("displayedColumns",e.displayedColumns)("selectable",e.isPopup)}}function h(r,m){if(1&r){const e=t.EpF();t.TgZ(0,"app-common-list-2",31,32),t.NdJ("btnEvent",function(s){return t.CHM(e),t.oxw(3).actionBtn(s)}),t.qZA()}if(2&r){const e=t.oxw(3);t.Q6J("data",e.customerList)("type","customer")}}function D(r,m){if(1&r&&t.YNc(0,h,2,2,"app-common-list-2",30),2&r){const e=t.oxw(2);t.Q6J("ngIf",e.customerList.length>0)}}function M(r,m){if(1&r){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",33),t.TgZ(2,"button",34),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).closeModal()}),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"button",35),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).nextProd()}),t._uU(6,"Next"),t.qZA(),t.qZA(),t.BQk()}if(2&r){const e=t.oxw(2);t.xp6(3),t.Oqu(t.lcZ(4,2,"FORM.cancel")),t.xp6(2),t.Q6J("disabled",!e.selected.customerId)}}function I(r,m){if(1&r&&(t.TgZ(0,"div",25),t.YNc(1,O,2,4,"div",26),t.YNc(2,D,1,1,"ng-template",null,27,t.W1O),t.TgZ(4,"div",0),t.TgZ(5,"div",1),t.YNc(6,M,7,4,"ng-container",28),t.qZA(),t.qZA(),t.qZA()),2&r){const e=t.MAs(3),o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.isPopup)("ngIfElse",e),t.xp6(5),t.Q6J("ngIf",o.isPopup&&!o.isDynamic)}}let b=(()=>{class r{constructor(e,o,s,C){this.router=e,this.cdf=o,this.customerListService=s,this.modalService=C,this.ELEMENT_COL=JSON.parse(JSON.stringify(_.Ks)),this.displayedColumns=JSON.parse(JSON.stringify(_.Q1)),this.customerList=[],this.statusOption=_.qb,this.identityTypeOption=_.Mf,this.selectedUser=new t.vpe,this.isPopup=!1,this.party=!0,this.isDynamic=!1,this.isCustom=!1,this.show=!1,this.loadForm()}ngOnInit(){this.isPopup&&(this.ELEMENT_COL.splice(9,1),this.displayedColumns.splice(9,1)),console.log(this.isCustom),this.show=!0}ngAfterViewInit(){this.getList()}loadForm(){this.customerForm=new l.cw({name:new l.NI(null),identityType:new l.NI(null),identityNumber:new l.NI(null),statusCode:new l.NI(null),partyCode:new l.NI(null),startDate:new l.NI(null),endDate:new l.NI(null)})}navigateToDetail(e,o,s){this.router.navigate(["/customer/customer-detail"],{queryParams:{pageStatus:e,pageId:o,pageSecondaryId:s,page:"Customer"}})}getList(){this.customerListService.getCustomerList(this.customerForm.value,this.party,!(!this.isPopup||this.isDynamic),this.isCustom).toPromise().then(o=>{o&&(this.customerList=o,this.cdf.detectChanges(),this.commonList&&this.commonList.detchChange(),this.matTable&&this.matTable.reChangeData())})}get selected(){let e;return this.matTable&&(e=this.matTable.selection.selected[0]),e||{customerId:0}}rowSelected(e){this.selectedUser.emit(e)}cancel(){this.customerForm.reset(),this.getList()}actionBtn(e){"edit"==e.cmd&&this.navigateToDetail("edit",e.data.customerId,e.data.individualId)}isControlValid(e){const o=this.customerForm.controls[e];return o.valid&&(o.dirty||o.touched)}isControlInvalid(e){const o=this.customerForm.controls[e];return o.invalid&&(o.dirty||o.touched)}controlHasError(e,o){const s=this.customerForm.controls[o];return s.hasError(e)&&(s.dirty||s.touched)}isControlTouched(e){const o=this.customerForm.controls[e];return o.dirty||o.touched}nextProd(){this.selected.customerId&&this.modalService.dismissAll({data:this.selected,type:"save"})}closeModal(){this.modalService.dismissAll()}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(f.F0),t.Y36(t.sBO),t.Y36(a.c),t.Y36(T.FF))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-customer-list"]],viewQuery:function(e,o){if(1&e&&(t.Gf(d.o,5),t.Gf(u.I,5)),2&e){let s;t.iGM(s=t.CRH())&&(o.commonList=s.first),t.iGM(s=t.CRH())&&(o.matTable=s.first)}},inputs:{isPopup:"isPopup",party:"party",isDynamic:"isDynamic",isCustom:"isCustom"},outputs:{selectedUser:"selectedUser"},features:[t._Bn([{provide:c._A,useClass:v.t7,deps:[c.Ad]},{provide:c.sG,useValue:g.Gs}])],decls:60,vars:51,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],[1,"flaticon2-magnifier-tool","search-tool",3,"click"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],["remove-host","",3,"formInput","colClass"],[1,"col-md-6"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["type","text","name","name","autocomplete","off","formControlName","name",1,"form-control","form-control-sm"],["type","text","name","partyCode","autocomplete","off","formControlName","partyCode",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","identityType",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["type","text","name","identityNumber","autocomplete","off","formControlName","identityNumber",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","statusCode",1,"ng-custom-select","ng-custom-select-sm",3,"items"],[1,"card","card-custom","gutter-b","data"],["class","card-body customer-card-body",4,"ngIf"],[1,"card-body","customer-card-body"],[4,"ngIf","ngIfElse"],["no_popup",""],[4,"ngIf"],[3,"data","colum","displayedColumns","selectable","emitter","rowselect"],["class","data-list",3,"data","type","btnEvent",4,"ngIf"],[1,"data-list",3,"data","type","btnEvent"],["commonList",""],[1,"card-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","button",1,"btn","btn-primary","btn-elevate",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.qZA(),t.TgZ(8,"div",6),t.TgZ(9,"span",7),t.NdJ("click",function(){return o.getList()}),t.qZA(),t.TgZ(10,"button",8),t.NdJ("click",function(){return o.cancel()}),t.TgZ(11,"span",9),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",10),t.TgZ(15,"form",11),t.TgZ(16,"div",12),t._UZ(17,"app-start-end-date",13),t.qZA(),t.TgZ(18,"div",12),t.TgZ(19,"div",14),t.TgZ(20,"div",15),t.TgZ(21,"label",16),t._uU(22),t.ALo(23,"translate"),t.qZA(),t.TgZ(24,"div",17),t._UZ(25,"input",18),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",14),t.TgZ(27,"div",15),t.TgZ(28,"label",16),t._uU(29),t.ALo(30,"translate"),t.qZA(),t.TgZ(31,"div",17),t._UZ(32,"input",19),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"div",12),t.TgZ(34,"div",14),t.TgZ(35,"div",15),t.TgZ(36,"label",16),t._uU(37),t.ALo(38,"translate"),t.qZA(),t.TgZ(39,"div",17),t._UZ(40,"ng-select",20),t.qZA(),t.qZA(),t.qZA(),t.TgZ(41,"div",14),t.TgZ(42,"div",15),t.TgZ(43,"label",16),t._uU(44),t.ALo(45,"translate"),t.qZA(),t.TgZ(46,"div",17),t._UZ(47,"input",21),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(48,"div",0),t.TgZ(49,"div",14),t.TgZ(50,"div",15),t.TgZ(51,"label",16),t._uU(52),t.ALo(53,"translate"),t.qZA(),t.TgZ(54,"div",17),t._UZ(55,"ng-select",22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(56,"div",0),t.TgZ(57,"div",1),t.TgZ(58,"div",23),t.YNc(59,I,7,3,"div",24),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.ekj("remove-p",o.isPopup),t.xp6(4),t.Oqu(t.lcZ(7,37,"FORM.customer_list")),t.xp6(6),t.Oqu(t.lcZ(13,39,"FORM.btn_cancel")),t.xp6(3),t.Q6J("formGroup",o.customerForm),t.xp6(2),t.Q6J("formInput",o.customerForm)("colClass","col-md-6"),t.xp6(5),t.Oqu(t.lcZ(23,41,"FORM.name")),t.xp6(3),t.ekj("is-invalid",o.isControlInvalid("name"))("is-valid",o.isControlValid("name")),t.xp6(4),t.Oqu(t.lcZ(30,43,"FORM.party_code")),t.xp6(3),t.ekj("is-invalid",o.isControlInvalid("partyCode"))("is-valid",o.isControlValid("partyCode")),t.xp6(5),t.Oqu(t.lcZ(38,45,"FORM.id_type")),t.xp6(3),t.ekj("is-invalid",o.isControlInvalid("identityType"))("is-valid",o.isControlValid("identityType")),t.Q6J("items",o.identityTypeOption),t.xp6(4),t.Oqu(t.lcZ(45,47,"FORM.id_no")),t.xp6(3),t.ekj("is-invalid",o.isControlInvalid("identityNumber"))("is-valid",o.isControlValid("identityNumber")),t.xp6(5),t.Oqu(t.lcZ(53,49,"FORM.status")),t.xp6(3),t.ekj("is-invalid",o.isControlInvalid("statusCode"))("is-valid",o.isControlValid("statusCode")),t.Q6J("items",o.statusOption),t.xp6(3),t.ekj("remove-p",o.isPopup),t.xp6(1),t.Q6J("ngIf",o.show))},directives:[l._Y,l.JL,l.sg,E.Q,Z.Z,l.Fj,l.JJ,l.u,n.w9,A.O5,u.I,d.o],pipes:[L.X],styles:[".remove-p[_ngcontent-%COMP%]{margin-bottom:0}.col-form-label[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.form-group.row[_ngcontent-%COMP%]{align-items:center}.draggable[_ngcontent-%COMP%]{color:#fff;border-radius:50%;touch-action:none;-webkit-user-select:none;user-select:none;position:absolute;z-index:999}"]}),r})()},62311:(y,p,i)=>{i.d(p,{Ks:()=>l,Q1:()=>u,qb:()=>_,Mf:()=>c});var t=i(18510);const l=[{title:"First Name",type:t.Y.FEILD,field:"firstName"},{title:"Middle Name",type:t.Y.FEILD,field:"middleName"},{title:"Last Name",type:t.Y.FEILD,field:"lastName"},{title:"Party Code",type:t.Y.FEILD,field:"partyCode"},{title:"ID Type",type:t.Y.FEILD,field:"identityType"},{title:"ID No.",type:t.Y.FEILD,field:"identityNumber"},{title:"Date of Birth",type:t.Y.FEILD,field:"dateOfBirth",isFromatDate:!0},{title:"Father Name",type:t.Y.FEILD,field:"fatherName"},{title:"Status",type:t.Y.FEILD,field:"statusCode",isCustomerStatus:!0},{title:"Actions",type:t.Y.ACTION,field:"actions",btn:{edit:!0}}],u=["firstName","middleName","lastName","partyCode","identityType","identityNumber","dateOfBirth","fatherName","statusCode","actions"],_=[{code:"A",value:"Active"},{code:"I",value:"Inactive"}],c=[{code:"NRC",value:"NRC"},{code:"FRC",value:"FRC"},{code:"PASSPORT",value:"Passport"},{code:"OTHERS",value:"Others"}]},99457:(y,p,i)=>{i.d(p,{c:()=>g});var t=i(92070),u=i(18260),_=i(83668),c=i(44522);const v=`${u.N.apiUrl}/customer`;let g=(()=>{class d{constructor(a){this.httpClient=a}getCustomerList(a={},T,E,Z){let n=v+"?";return a.name&&(n=n+"name="+a.name+"&"),a.partyCode&&(n=n+"partyCode="+a.partyCode+"&"),a.startDate&&(n=n+"startDate="+t(a.startDate).format("YYYY-MM-DD")+"&"),a.endDate&&(n=n+"endDate="+t(a.endDate).format("YYYY-MM-DD")+"&"),a.statusCode&&(n=n+"statusCode="+a.statusCode+"&"),a.identityType&&(n=n+"identityType="+a.identityType+"&"),a.identityNumber&&(n=n+"identityNumber="+a.identityNumber+"&"),Z?n+="statusCode=A":n=n+"isPartyCode="+T,this.httpClient.get(n)}}return d.\u0275fac=function(a){return new(a||d)(_.LFG(c.eN))},d.\u0275prov=_.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);