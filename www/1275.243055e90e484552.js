"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1275],{11918:(T,p,i)=>{i.d(p,{b:()=>N});var t=i(83668),a=i(49133),u=i(90949),m=i(62311),c=i(24872),_=i(21177),C=i(44290),r=i(92118),g=i(47975),f=i(49065),l=i(29018),y=i(99457),Z=i(86019),E=i(15470),b=i(85472),L=i(57842);function h(s,d){if(1&s){const e=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){return t.CHM(e),t.oxw().navigateToDetail("create")}),t._UZ(1,"span",27),t.qZA()}}function A(s,d){if(1&s){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"app-material-table-view",32),t.NdJ("emitter",function(n){return t.CHM(e),t.oxw(2).actionBtn(n)})("rowselect",function(n){return t.CHM(e),t.oxw(2).rowSelected(n)}),t.qZA(),t.qZA()}if(2&s){const e=t.oxw(2);t.xp6(1),t.Q6J("data",e.customerList)("colum",e.ELEMENT_COL)("displayedColumns",e.displayedColumns)("selectable",e.isPopup)}}function I(s,d){if(1&s){const e=t.EpF();t.TgZ(0,"app-common-list-2",34,35),t.NdJ("btnEvent",function(n){return t.CHM(e),t.oxw(3).actionBtn(n)}),t.qZA()}if(2&s){const e=t.oxw(3);t.Q6J("data",e.customerList)("type","customer")}}function D(s,d){if(1&s&&t.YNc(0,I,2,2,"app-common-list-2",33),2&s){const e=t.oxw(2);t.Q6J("ngIf",e.customerList.length>0)}}function O(s,d){if(1&s){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",36),t.TgZ(2,"button",37),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).closeModal()}),t._uU(3,"Cancel"),t.qZA(),t.TgZ(4,"button",38),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).nextProd()}),t._uU(5,"Next"),t.qZA(),t.qZA(),t.BQk()}if(2&s){const e=t.oxw(2);t.xp6(4),t.Q6J("disabled",!e.selected.customerId)}}function P(s,d){if(1&s&&(t.TgZ(0,"div",28),t.YNc(1,A,2,4,"div",29),t.YNc(2,D,1,1,"ng-template",null,30,t.W1O),t.TgZ(4,"div",0),t.TgZ(5,"div",1),t.YNc(6,O,6,1,"ng-container",31),t.qZA(),t.qZA(),t.qZA()),2&s){const e=t.MAs(3),o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.isPopup)("ngIfElse",e),t.xp6(5),t.Q6J("ngIf",o.isPopup&&!o.isDynamic)}}let N=(()=>{class s{constructor(e,o,n,v){this.router=e,this.cdf=o,this.customerListService=n,this.modalService=v,this.ELEMENT_COL=JSON.parse(JSON.stringify(m.Ks)),this.displayedColumns=JSON.parse(JSON.stringify(m.Q1)),this.customerList=[],this.statusOption=m.qb,this.identityTypeOption=m.Mf,this.selectedUser=new t.vpe,this.isPopup=!1,this.party=!0,this.isDynamic=!1,this.show=!1,this.loadForm()}ngOnInit(){this.isPopup&&(this.ELEMENT_COL.splice(9,1),this.displayedColumns.splice(9,1)),this.show=!0}ngAfterViewInit(){this.getList()}loadForm(){this.customerForm=new a.cw({name:new a.NI(null),identityType:new a.NI(null),identityNumber:new a.NI(null),statusCode:new a.NI(null),partyCode:new a.NI(null),startDate:new a.NI(null),endDate:new a.NI(null)})}navigateToDetail(e,o,n){this.router.navigate(["/customer/customer-detail"],{queryParams:{pageStatus:e,pageId:o,pageSecondaryId:n}})}getList(){this.customerListService.getCustomerList(this.customerForm.value,this.party,!(!this.isPopup||this.isDynamic)).toPromise().then(o=>{o&&(this.customerList=o,console.log("customerList",this.customerList),this.cdf.detectChanges(),this.commonList&&this.commonList.detchChange(),this.matTable&&this.matTable.reChangeData())})}get selected(){let e;return this.matTable&&(e=this.matTable.selection.selected[0]),e||{customerId:0}}rowSelected(e){this.selectedUser.emit(e)}cancel(){this.customerForm.reset(),this.getList()}actionBtn(e){"edit"==e.cmd&&this.navigateToDetail("edit",e.data.customerId,e.data.individualId)}isControlValid(e){const o=this.customerForm.controls[e];return o.valid&&(o.dirty||o.touched)}isControlInvalid(e){const o=this.customerForm.controls[e];return o.invalid&&(o.dirty||o.touched)}controlHasError(e,o){const n=this.customerForm.controls[o];return n.hasError(e)&&(n.dirty||n.touched)}isControlTouched(e){const o=this.customerForm.controls[e];return o.dirty||o.touched}nextProd(){this.selected.customerId&&this.modalService.dismissAll({data:this.selected,type:"save"})}closeModal(){this.modalService.dismissAll()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(l.F0),t.Y36(t.sBO),t.Y36(y.c),t.Y36(c.FF))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-customer-list"]],viewQuery:function(e,o){if(1&e&&(t.Gf(f.o,5),t.Gf(u.I,5)),2&e){let n;t.iGM(n=t.CRH())&&(o.commonList=n.first),t.iGM(n=t.CRH())&&(o.matTable=n.first)}},inputs:{isPopup:"isPopup",party:"party",isDynamic:"isDynamic"},outputs:{selectedUser:"selectedUser"},features:[t._Bn([{provide:c.DO,useClass:_.Wv},{provide:c.NG,useClass:_.ke},{provide:C._A,useClass:r.t7,deps:[C.Ad]},{provide:C.sG,useValue:g.Gs}])],decls:54,vars:31,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button","class","btn btn-primary btn-circle","style","margin-right: 1rem;\n                    ",3,"click",4,"ngIf"],[1,"flaticon2-magnifier-tool","search-tool",3,"click"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],["remove-host","",3,"formInput","colClass"],[1,"col-md-6"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["type","text","name","name","autocomplete","off","formControlName","name",1,"form-control","form-control-sm"],["type","text","name","partyCode","autocomplete","off","formControlName","partyCode",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","identityType",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["type","text","name","identityNumber","autocomplete","off","formControlName","identityNumber",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","statusCode",1,"ng-custom-select","ng-custom-select-sm",3,"items"],[1,"card","card-custom","gutter-b","data"],["class","card-body customer-card-body",4,"ngIf"],["type","button",1,"btn","btn-primary","btn-circle",2,"margin-right","1rem",3,"click"],[1,"flaticon2-plus"],[1,"card-body","customer-card-body"],[4,"ngIf","ngIfElse"],["no_popup",""],[4,"ngIf"],[3,"data","colum","displayedColumns","selectable","emitter","rowselect"],["class","data-list",3,"data","type","btnEvent",4,"ngIf"],[1,"data-list",3,"data","type","btnEvent"],["commonList",""],[1,"card-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","button",1,"btn","btn-primary","btn-elevate",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"Customer List"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.YNc(8,h,2,0,"button",7),t.TgZ(9,"span",8),t.NdJ("click",function(){return o.getList()}),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return o.cancel()}),t.TgZ(11,"span",10),t._uU(12,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",11),t.TgZ(14,"form",12),t.TgZ(15,"div",13),t._UZ(16,"app-start-end-date",14),t.qZA(),t.TgZ(17,"div",13),t.TgZ(18,"div",15),t.TgZ(19,"div",16),t.TgZ(20,"label",17),t._uU(21,"Name"),t.qZA(),t.TgZ(22,"div",18),t._UZ(23,"input",19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"div",15),t.TgZ(25,"div",16),t.TgZ(26,"label",17),t._uU(27,"Party Code"),t.qZA(),t.TgZ(28,"div",18),t._UZ(29,"input",20),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",13),t.TgZ(31,"div",15),t.TgZ(32,"div",16),t.TgZ(33,"label",17),t._uU(34,"ID Type"),t.qZA(),t.TgZ(35,"div",18),t._UZ(36,"ng-select",21),t.qZA(),t.qZA(),t.qZA(),t.TgZ(37,"div",15),t.TgZ(38,"div",16),t.TgZ(39,"label",17),t._uU(40,"ID No."),t.qZA(),t.TgZ(41,"div",18),t._UZ(42,"input",22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"div",0),t.TgZ(44,"div",15),t.TgZ(45,"div",16),t.TgZ(46,"label",17),t._uU(47,"Status"),t.qZA(),t.TgZ(48,"div",18),t._UZ(49,"ng-select",23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(50,"div",0),t.TgZ(51,"div",1),t.TgZ(52,"div",24),t.YNc(53,P,7,3,"div",25),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.ekj("remove-p",o.isPopup),t.xp6(6),t.Q6J("ngIf",!o.isPopup),t.xp6(6),t.Q6J("formGroup",o.customerForm),t.xp6(2),t.Q6J("formInput",o.customerForm)("colClass","col-md-6"),t.xp6(7),t.ekj("is-invalid",o.isControlInvalid("name"))("is-valid",o.isControlValid("name")),t.xp6(6),t.ekj("is-invalid",o.isControlInvalid("partyCode"))("is-valid",o.isControlValid("partyCode")),t.xp6(7),t.ekj("is-invalid",o.isControlInvalid("identityType"))("is-valid",o.isControlValid("identityType")),t.Q6J("items",o.identityTypeOption),t.xp6(6),t.ekj("is-invalid",o.isControlInvalid("identityNumber"))("is-valid",o.isControlValid("identityNumber")),t.xp6(7),t.ekj("is-invalid",o.isControlInvalid("statusCode"))("is-valid",o.isControlValid("statusCode")),t.Q6J("items",o.statusOption),t.xp6(3),t.ekj("remove-p",o.isPopup),t.xp6(1),t.Q6J("ngIf",o.show))},directives:[Z.O5,a._Y,a.JL,a.sg,E.Q,b.Z,a.Fj,a.JJ,a.u,L.w9,u.I,f.o],styles:[".remove-p[_ngcontent-%COMP%]{margin-bottom:0}.col-form-label[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.form-group.row[_ngcontent-%COMP%]{align-items:center}.draggable[_ngcontent-%COMP%]{color:#fff;border-radius:50%;touch-action:none;-webkit-user-select:none;user-select:none;position:absolute;z-index:999}"]}),s})()},62311:(T,p,i)=>{i.d(p,{Ks:()=>a,Q1:()=>u,qb:()=>m,Mf:()=>c});var t=i(18510);const a=[{title:"First Name",type:t.Y.FEILD,field:"firstName"},{title:"Middle Name",type:t.Y.FEILD,field:"middleName"},{title:"Last Name",type:t.Y.FEILD,field:"lastName"},{title:"Party Code",type:t.Y.FEILD,field:"partyCode"},{title:"ID Type",type:t.Y.FEILD,field:"identityType"},{title:"ID No.",type:t.Y.FEILD,field:"identityNumber"},{title:"Date of Birth",type:t.Y.FEILD,field:"dateOfBirth",isFromatDate:!0},{title:"Father Name",type:t.Y.FEILD,field:"fatherName"},{title:"Status",type:t.Y.FEILD,field:"statusCode",isCustomerStatus:!0},{title:"Actions",type:t.Y.ACTION,field:"actions",btn:{edit:!0}}],u=["firstName","middleName","lastName","partyCode","identityType","identityNumber","dateOfBirth","fatherName","statusCode","actions"],m=[{code:"A",value:"Active"},{code:"I",value:"Inactive"}],c=[{code:"NRC",value:"NRC"},{code:"FRC",value:"FRC"},{code:"PASSPORT",value:"Passport"},{code:"OTHERS",value:"Others"}]},99457:(T,p,i)=>{i.d(p,{c:()=>c});var t=i(18260),a=i(83668),u=i(44522);const m=`${t.N.apiUrl}/customer`;let c=(()=>{class _{constructor(r){this.httpClient=r}getCustomerList(r={},g,f){let l=m+"?";return r.name&&(l=l+"name="+r.name+"&"),r.partyCode&&(l=l+"partyCode="+r.partyCode+"&"),r.startDate&&(l=l+"startDate="+r.startDate+"&"),r.endDate&&(l=l+"endDate="+r.endDate+"&"),r.statusCode&&(l=l+"statusCode="+r.statusCode+"&"),r.identityType&&(l=l+"identityType="+r.identityType+"&"),r.identityNumber&&(l=l+"identityNumber="+r.identityNumber+"&"),l=l+"isPartyCode="+g,this.httpClient.get(l)}}return _.\u0275fac=function(r){return new(r||_)(a.LFG(u.eN))},_.\u0275prov=a.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()}}]);