"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6532],{62311:(Z,u,i)=>{i.d(u,{Ks:()=>C,Q1:()=>a,qb:()=>p,Mf:()=>f});var c=i(18510);const C=[{title:"First Name",type:c.Y.FEILD,field:"firstName"},{title:"Middle Name",type:c.Y.FEILD,field:"middleName"},{title:"Last Name",type:c.Y.FEILD,field:"lastName"},{title:"Party Code",type:c.Y.FEILD,field:"partyCode"},{title:"ID Type",type:c.Y.FEILD,field:"identityType"},{title:"ID No.",type:c.Y.FEILD,field:"identityNumber"},{title:"Date of Birth",type:c.Y.FEILD,field:"dateOfBirth",isFromatDate:!0},{title:"Father Name",type:c.Y.FEILD,field:"fatherName"},{title:"Status",type:c.Y.FEILD,field:"statusCode",isCustomerStatus:!0},{title:"Actions",type:c.Y.ACTION,field:"actions",btn:{edit:!0}}],a=["firstName","middleName","lastName","partyCode","identityType","identityNumber","dateOfBirth","fatherName","statusCode","actions"],p=[{code:"A",value:"Active"},{code:"I",value:"Inactive"}],f=[{code:"NRC",value:"NRC"},{code:"FRC",value:"FRC"},{code:"PASSPORT",value:"Passport"},{code:"OTHERS",value:"Others"}]},99457:(Z,u,i)=>{i.d(u,{c:()=>v});var c=i(92070),a=i(18260),p=i(83668),f=i(44522);const t=`${a.N.apiUrl}/customer`;let v=(()=>{class d{constructor(n){this.httpClient=n}getCustomerList(n={},y,T){let l=t+"?";return n.name&&(l=l+"name="+n.name+"&"),n.partyCode&&(l=l+"partyCode="+n.partyCode+"&"),n.startDate&&(l=l+"startDate="+c(n.startDate).format("YYYY-MM-DD")+"&"),n.endDate&&(l=l+"endDate="+c(n.endDate).format("YYYY-MM-DD")+"&"),n.statusCode&&(l=l+"statusCode="+n.statusCode+"&"),n.identityType&&(l=l+"identityType="+n.identityType+"&"),n.identityNumber&&(l=l+"identityNumber="+n.identityNumber+"&"),T&&(l=l+"isPartyCode="+y),this.httpClient.get(l)}}return d.\u0275fac=function(n){return new(n||d)(p.LFG(f.eN))},d.\u0275prov=p.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},6532:(Z,u,i)=>{i.r(u),i.d(u,{ProspectCustomerListModule:()=>U});var c=i(86019),C=i(4205),a=i(49133),p=i(87626),f=i(45598),t=i(83668),v=i(62311),d=i(85993),_=i(21177),n=i(44290),y=i(92118),T=i(47975),l=i(90949),L=i(99457),b=i(15470),N=i(85472),h=i(57842),A=i(49065);function I(s,m){if(1&s){const e=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){return t.CHM(e),t.oxw().navigateToDetail("create")}),t._UZ(1,"span",27),t.qZA()}}function P(s,m){if(1&s){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"app-material-table-view",31),t.NdJ("emitter",function(r){return t.CHM(e),t.oxw(2).actionBtn(r)})("rowselect",function(r){return t.CHM(e),t.oxw(2).rowSelected(r)}),t.qZA(),t.qZA()}if(2&s){const e=t.oxw(2);t.xp6(1),t.Q6J("data",e.customerList)("colum",e.ELEMENT_COL)("displayedColumns",e.displayedColumns)("selectable",e.isPopup)}}function E(s,m){if(1&s){const e=t.EpF();t.TgZ(0,"app-common-list-2",33,34),t.NdJ("btnEvent",function(r){return t.CHM(e),t.oxw(3).actionBtn(r)}),t.qZA()}if(2&s){const e=t.oxw(3);t.Q6J("data",e.customerList)("type","customer")}}function D(s,m){if(1&s&&t.YNc(0,E,2,2,"app-common-list-2",32),2&s){const e=t.oxw(2);t.Q6J("ngIf",e.customerList.length>0)}}function M(s,m){if(1&s&&(t.TgZ(0,"div",28),t.YNc(1,P,2,4,"div",29),t.YNc(2,D,1,1,"ng-template",null,30,t.W1O),t.qZA()),2&s){const e=t.MAs(3),o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.isPopup)("ngIfElse",e)}}function O(s,m){if(1&s){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",35),t.TgZ(2,"button",36),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeModal()}),t._uU(3,"Cancel"),t.qZA(),t.TgZ(4,"button",37),t.NdJ("click",function(){return t.CHM(e),t.oxw().nextProd()}),t._uU(5,"Next"),t.qZA(),t.qZA(),t.BQk()}if(2&s){const e=t.oxw();t.xp6(4),t.Q6J("disabled",!e.selected.customerId)}}let F=(()=>{class s{constructor(e,o,r,g){this.router=e,this.cdf=o,this.customerListService=r,this.modalService=g,this.ELEMENT_COL=JSON.parse(JSON.stringify(v.Ks)),this.displayedColumns=JSON.parse(JSON.stringify(v.Q1)),this.customerList=[],this.statusOption=v.qb,this.identityTypeOption=v.Mf,this.selectedUser=new t.vpe,this.isPopup=!1,this.party=!1,this.isDynamic=!1,this.show=!1,this.loadForm()}ngOnInit(){this.isPopup&&(this.ELEMENT_COL.splice(9,1),this.displayedColumns.splice(9,1)),this.ELEMENT_COL.splice(3,1),this.displayedColumns.splice(3,1),this.show=!0}ngAfterViewInit(){this.getList()}loadForm(){this.customerForm=new a.cw({name:new a.NI(null),identityType:new a.NI(null),identityNumber:new a.NI(null),statusCode:new a.NI(null),partyCode:new a.NI(null),startDate:new a.NI(null),endDate:new a.NI(null)})}navigateToDetail(e,o,r){this.router.navigate(["/customer/customer-detail"],{queryParams:{pageStatus:e,pageId:o,pageSecondaryId:r}})}getList(){this.customerListService.getCustomerList(this.customerForm.value,this.party,!(!this.isPopup||this.isDynamic)).toPromise().then(o=>{o&&(this.customerList=o,this.cdf.detectChanges(),this.matTable&&this.matTable.reChangeData())})}get selected(){let e;return this.matTable&&(e=this.matTable.selection.selected[0]),e||{customerId:0}}rowSelected(e){this.selectedUser.emit(e)}cancel(){this.customerForm.reset(),this.getList()}actionBtn(e){"edit"==e.cmd&&this.navigateToDetail("edit",e.data.customerId,e.data.individualId)}isControlValid(e){const o=this.customerForm.controls[e];return o.valid&&(o.dirty||o.touched)}isControlInvalid(e){const o=this.customerForm.controls[e];return o.invalid&&(o.dirty||o.touched)}controlHasError(e,o){const r=this.customerForm.controls[o];return r.hasError(e)&&(r.dirty||r.touched)}isControlTouched(e){const o=this.customerForm.controls[e];return o.dirty||o.touched}nextProd(){this.selected.customerId&&this.modalService.dismissAll({data:this.selected,type:"save"})}closeModal(){this.modalService.dismissAll()}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(C.F0),t.Y36(t.sBO),t.Y36(L.c),t.Y36(d.FF))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-prospect-customer-list"]],viewQuery:function(e,o){if(1&e&&t.Gf(l.I,5),2&e){let r;t.iGM(r=t.CRH())&&(o.matTable=r.first)}},inputs:{isPopup:"isPopup",party:"party",isDynamic:"isDynamic"},outputs:{selectedUser:"selectedUser"},features:[t._Bn([{provide:d.DO,useClass:_.Wv},{provide:d.NG,useClass:_.ke},{provide:n._A,useClass:y.t7,deps:[n.Ad]},{provide:n.sG,useValue:T.Gs}])],decls:48,vars:28,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button","class","btn btn-primary btn-circle","style","margin-right: 1rem;\n                    ",3,"click",4,"ngIf"],[1,"flaticon2-magnifier-tool","search-tool",3,"click"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],["remove-host","",3,"formInput","colClass"],[1,"col-md-6"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["type","text","name","name","autocomplete","off","formControlName","name",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","statusCode",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["bindLabel","value","bindValue","code","formControlName","identityType",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["type","text","name","identityNumber","autocomplete","off","formControlName","identityNumber",1,"form-control","form-control-sm"],[1,"card","card-custom","gutter-b","data"],["class","card-body customer-card-body",4,"ngIf"],[4,"ngIf"],["type","button",1,"btn","btn-primary","btn-circle",2,"margin-right","1rem",3,"click"],[1,"flaticon2-plus"],[1,"card-body","customer-card-body"],[4,"ngIf","ngIfElse"],["no_popup",""],[3,"data","colum","displayedColumns","selectable","emitter","rowselect"],["class","data-list",3,"data","type","btnEvent",4,"ngIf"],[1,"data-list",3,"data","type","btnEvent"],["commonList",""],[1,"card-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","button",1,"btn","btn-primary","btn-elevate",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"Prospect Customer List"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.YNc(8,I,2,0,"button",7),t.TgZ(9,"span",8),t.NdJ("click",function(){return o.getList()}),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return o.cancel()}),t.TgZ(11,"span",10),t._uU(12,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div",11),t.TgZ(14,"form",12),t.TgZ(15,"div",13),t._UZ(16,"app-start-end-date",14),t.qZA(),t.TgZ(17,"div",13),t.TgZ(18,"div",15),t.TgZ(19,"div",16),t.TgZ(20,"label",17),t._uU(21,"Name"),t.qZA(),t.TgZ(22,"div",18),t._UZ(23,"input",19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"div",15),t.TgZ(25,"div",16),t.TgZ(26,"label",17),t._uU(27,"Status"),t.qZA(),t.TgZ(28,"div",18),t._UZ(29,"ng-select",20),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",13),t.TgZ(31,"div",15),t.TgZ(32,"div",16),t.TgZ(33,"label",17),t._uU(34,"ID Type"),t.qZA(),t.TgZ(35,"div",18),t._UZ(36,"ng-select",21),t.qZA(),t.qZA(),t.qZA(),t.TgZ(37,"div",15),t.TgZ(38,"div",16),t.TgZ(39,"label",17),t._uU(40,"ID No."),t.qZA(),t.TgZ(41,"div",18),t._UZ(42,"input",22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"div",0),t.TgZ(44,"div",1),t.TgZ(45,"div",23),t.YNc(46,M,4,2,"div",24),t.YNc(47,O,6,1,"ng-container",25),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.ekj("remove-p",o.isPopup),t.xp6(6),t.Q6J("ngIf",!o.isPopup),t.xp6(6),t.Q6J("formGroup",o.customerForm),t.xp6(2),t.Q6J("formInput",o.customerForm)("colClass","col-md-6"),t.xp6(7),t.ekj("is-invalid",o.isControlInvalid("name"))("is-valid",o.isControlValid("name")),t.xp6(6),t.ekj("is-invalid",o.isControlInvalid("statusCode"))("is-valid",o.isControlValid("statusCode")),t.Q6J("items",o.statusOption),t.xp6(7),t.ekj("is-invalid",o.isControlInvalid("identityType"))("is-valid",o.isControlValid("identityType")),t.Q6J("items",o.identityTypeOption),t.xp6(6),t.ekj("is-invalid",o.isControlInvalid("identityNumber"))("is-valid",o.isControlValid("identityNumber")),t.xp6(3),t.ekj("remove-p",o.isPopup),t.xp6(1),t.Q6J("ngIf",o.show),t.xp6(1),t.Q6J("ngIf",o.isPopup&&!o.isDynamic))},directives:[c.O5,a._Y,a.JL,a.sg,b.Q,N.Z,a.Fj,a.JJ,a.u,h.w9,l.I,A.o],styles:[".remove-p[_ngcontent-%COMP%]{margin-bottom:0}.col-form-label[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.form-group.row[_ngcontent-%COMP%]{align-items:center}.draggable[_ngcontent-%COMP%]{color:#fff;border-radius:50%;touch-action:none;-webkit-user-select:none;user-select:none;position:absolute;z-index:999}"]}),s})();var x=i(92275),Y=i(12747);let U=(()=>{class s{constructor(e){(0,Y.r)(e,"ProspectCustomerListModule")}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(s,12))},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[c.ez,a.u5,a.UX,p.vi,h.A0,f.fA,x.W,C.Bz.forChild([{path:"",component:F}])]]}),s})()}}]);