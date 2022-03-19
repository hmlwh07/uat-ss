"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8403],{88403:(K,L,a)=>{a.r(L),a.d(L,{LeadListModule:()=>z});var d=a(86019),t=a(83668),s=a(49133),Z=a(90949),r=a(18510);const _=[{title:"Lead ID",type:r.Y.FEILD,field:"leadId"},{title:"Lead Name",type:r.Y.FEILD,field:"contactName"},{title:"Product",type:r.Y.FEILD,field:"productName"},{title:"Existing Customer",type:r.Y.FEILD,field:"existingCustomerName"},{title:"Source",type:r.Y.FEILD,field:"sourceValue"},{title:"Open Date",type:r.Y.FEILD,field:"openedDate",isFromatDate:!0},{title:"Campaign Name",type:r.Y.FEILD,field:"campaignName"},{title:"Status",type:r.Y.FEILD,field:"statusCode",isLeadStatus:!0},{title:"Actions",type:r.Y.ACTION,field:"actions",btn:{edit:!0}}],A=["leadId","contactName","productName","existingCustomerName","sourceValue","openedDate","campaignName","statusCode","actions"];var m=a(44290),I=a(92118),N=a(47975),x=a(37025),u=a(54753),y=a(28100),p=a(72835),g=a(82997),F=a(18260),C=a(4205),O=a(57311),E=a(26697),b=a(35618),v=a(85993),D=a(15470),U=a(85472),f=a(57842);function S(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"div",21),t.TgZ(1,"div",22),t.TgZ(2,"h3",23),t._uU(3,"Lead List"),t.qZA(),t.qZA(),t.TgZ(4,"div",24),t.TgZ(5,"span",25),t.NdJ("click",function(){return t.CHM(e),t.oxw().getList()}),t.qZA(),t.TgZ(6,"button",26),t.NdJ("click",function(){return t.CHM(e),t.oxw().cancel()}),t.TgZ(7,"span",27),t._uU(8,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}}function w(i,l){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"app-material-table-view",31),t.NdJ("emitter",function(n){return t.CHM(e),t.oxw(2).actionBtn(n)})("rowselect",function(n){return t.CHM(e),t.oxw(2).rowSelected(n)}),t.qZA(),t.BQk()}if(2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("data",e.LeadList)("colum",e.ELEMENT_COL)("displayedColumns",e.displayedColumns)("selectable",e.isPopup)}}function J(i,l){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"img",39),t.NdJ("error",function(n){return t.CHM(e),t.oxw(4).updateURL(n)}),t.qZA(),t.BQk()}if(2&i){const e=t.oxw().$implicit,o=t.oxw(3);t.xp6(1),t.Q6J("src",o.DEFAULT_DOWNLOAD_URL+e.smallIcon,t.LSH)}}function M(i,l){1&i&&t._UZ(0,"img",40)}function q(i,l){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",33),t.TgZ(2,"div",34),t.YNc(3,J,2,1,"ng-container",29),t.YNc(4,M,1,0,"ng-template",null,35,t.W1O),t.TgZ(6,"label"),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",36),t.TgZ(9,"a",37),t.NdJ("click",function(){return t.CHM(e),t.oxw(3).onActionEdit()}),t._UZ(10,"span",38),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&i){const e=l.$implicit,o=t.MAs(5);t.xp6(3),t.Q6J("ngIf",e.smallIcon)("ngIfElse",o),t.xp6(4),t.Oqu(e.productName)}}function V(i,l){if(1&i&&t.YNc(0,q,11,3,"ng-container",32),2&i){const e=t.oxw(2);t.Q6J("ngForOf",e.LeadList)}}function Y(i,l){if(1&i&&(t.TgZ(0,"div",28),t.YNc(1,w,2,4,"ng-container",29),t.YNc(2,V,1,1,"ng-template",null,30,t.W1O),t.qZA()),2&i){const e=t.MAs(3),o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.isTableView)("ngIfElse",e)}}let P=(()=>{class i{constructor(e,o,n,c,W,k){this.router=e,this.cdf=o,this.LeadListService=n,this.masterDataService=c,this.productService=W,this.modalService=k,this.ELEMENT_COL=JSON.parse(JSON.stringify(_)),this.displayedColumns=JSON.parse(JSON.stringify(A)),this.LeadList=[],this.isTableView=!0,this.selectedUser=new t.vpe,this.isPopup=!1,this.show=!1,this.statusOption=[],this.sourceOption=[],this.productOption=[],this.DEFAULT_DOWNLOAD_URL=`${F.N.apiUrl}/attachment-downloader/`,this.loadForm()}ngOnInit(){this.show=!0}ngAfterViewInit(){this.getMaster(),this.getList()}getMaster(){(0,y.D)([this.getStatus(),this.getSource(),this.getProduct()]).toPromise().then(e=>{e&&(this.statusOption=e[0],this.sourceOption=e[1],this.productOption=e[2],this.cdf.detectChanges())})}loadForm(){this.LeadForm=new s.cw({campaignName:new s.NI(null),existingCustomerId:new s.NI(null),existingCustomerName:new s.NI({value:null,disabled:!0}),contactName:new s.NI(null),leadId:new s.NI(null),startDate:new s.NI(null),endDate:new s.NI(null),productId:new s.NI(null),sourceCode:new s.NI(null),statusCode:new s.NI(null)})}navigateToDetail(e,o,n){this.router.navigate(["/lead/lead-detail"],{queryParams:{pageStatus:e,pageId:o,pageSecondaryId:n,leadId:o}})}getStatus(){return this.masterDataService.getDataByType("LEAD_STATUS").pipe((0,u.U)(e=>this.getFormatOpt(e)),(0,p.K)(e=>(0,g.of)([])))}updateURL(e){e&&(e.target.src="assets/icon/general_product.svg")}getSource(){return this.masterDataService.getDataByType("LEAD_SOURCE").pipe((0,u.U)(e=>this.getFormatOpt(e)),(0,p.K)(e=>(0,g.of)([])))}getProduct(){return this.productService.getAll().pipe((0,u.U)(e=>this.getFormatOpt(e)),(0,p.K)(e=>(0,g.of)([])))}getList(){console.log(this.LeadForm.getRawValue()),this.LeadListService.getLeadList(this.LeadForm.getRawValue()).toPromise().then(e=>{e&&(console.log("RES",e),this.LeadList=e,this.cdf.detectChanges(),this.matTable&&this.matTable.reChangeData())})}getFormatOpt(e){return e.map(o=>({code:o.codeId||o.id,value:o.codeName||o.codeValue||o.name}))}get selected(){let e;return this.matTable&&(e=this.matTable.selection.selected[0]),e||{id:0}}rowSelected(e){this.selectedUser.emit(e)}cancel(){this.LeadForm.reset(),this.getList()}actionBtn(e){"edit"==e.cmd&&this.navigateToDetail("edit",e.data.leadId,e.data.individualId),"view"==e.cmd&&this.navigateToDetail("view",e.data.leadId,e.data.individualId)}onActionEdit(){}viewExistingCustomer(){let e;e=this.modalService.open(x.b,{size:"xl",backdrop:!1}),e.componentInstance.isPopup=!0,e.result.then(()=>{},o=>{if(o&&"save"==o.type){let n=o.data;console.log("onDidDismiss =====> ",n),this.LeadForm.controls.existingCustomerId.setValue(n.customerId),this.LeadForm.controls.existingCustomerName.setValue(n.name)}})}isControlValid(e){const o=this.LeadForm.controls[e];return o.valid&&(o.dirty||o.touched)}isControlInvalid(e){const o=this.LeadForm.controls[e];return o.invalid&&(o.dirty||o.touched)}controlHasError(e,o){const n=this.LeadForm.controls[o];return n.hasError(e)&&(n.dirty||n.touched)}isControlTouched(e){const o=this.LeadForm.controls[e];return o.dirty||o.touched}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(C.F0),t.Y36(t.sBO),t.Y36(O.Z),t.Y36(E.D),t.Y36(b.f),t.Y36(v.FF))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-lead-list"]],viewQuery:function(e,o){if(1&e&&t.Gf(Z.I,5),2&e){let n;t.iGM(n=t.CRH())&&(o.matTable=n.first)}},inputs:{isPopup:"isPopup"},outputs:{selectedUser:"selectedUser"},features:[t._Bn([{provide:m._A,useClass:I.t7,deps:[m.Ad]},{provide:m.sG,useValue:N.Gs}])],decls:54,vars:36,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],["class","card-header",4,"ngIf"],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],["remove-host","",3,"formInput","colClass"],[1,"col-xl-4","col-sm-6"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["type","text","name","leadId","autocomplete","off","formControlName","leadId",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","productId",1,"ng-custom-select",3,"items"],["bindLabel","value","bindValue","code","formControlName","sourceCode",1,"ng-custom-select",3,"items"],["type","text","name","contactName","autocomplete","off","formControlName","contactName",1,"form-control","form-control-sm"],[1,"col-sm-8",3,"click"],["type","text","name","existingCustomerName","autocomplete","off","formControlName","existingCustomerName","readonly","",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","statusCode",1,"ng-custom-select",3,"items"],["type","text","name","campaignName","autocomplete","off","formControlName","campaignName",1,"form-control","form-control-sm"],["class","card-body customer-card-body",4,"ngIf"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],[1,"flaticon2-magnifier-tool","search-tool",3,"click"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,""],[1,"card-body","customer-card-body"],[4,"ngIf","ngIfElse"],["cardView",""],[3,"data","colum","displayedColumns","selectable","emitter","rowselect"],[4,"ngFor","ngForOf"],[1,"data-title"],[1,"header-text"],["defaultImg",""],[1,"header-action"],["title","Edit Form Page",1,"btn","btn-primary","btn-cus","btn-sm",3,"click"],[1,"flaticon-edit"],["alt","",1,"prod-logo",3,"src","error"],["src","assets/icon/general_product.svg",1,"prod-logo"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.YNc(3,S,9,0,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"form",5),t.TgZ(6,"div",6),t._UZ(7,"app-start-end-date",7),t.TgZ(8,"div",8),t.TgZ(9,"div",9),t.TgZ(10,"label",10),t._uU(11,"Lead ID"),t.qZA(),t.TgZ(12,"div",11),t._UZ(13,"input",12),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",8),t.TgZ(15,"div",9),t.TgZ(16,"label",10),t._uU(17,"Product"),t.qZA(),t.TgZ(18,"div",11),t._UZ(19,"ng-select",13),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",8),t.TgZ(21,"div",9),t.TgZ(22,"label",10),t._uU(23,"Source"),t.qZA(),t.TgZ(24,"div",11),t._UZ(25,"ng-select",14),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",8),t.TgZ(27,"div",9),t.TgZ(28,"label",10),t._uU(29,"Lead Name"),t.qZA(),t.TgZ(30,"div",11),t._UZ(31,"input",15),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"div",8),t.TgZ(33,"div",9),t.TgZ(34,"label",10),t._uU(35,"Existing Customer"),t.qZA(),t.TgZ(36,"div",16),t.NdJ("click",function(){return o.viewExistingCustomer()}),t._UZ(37,"input",17),t.qZA(),t.qZA(),t.qZA(),t.TgZ(38,"div",8),t.TgZ(39,"div",9),t.TgZ(40,"label",10),t._uU(41,"Status"),t.qZA(),t.TgZ(42,"div",11),t._UZ(43,"ng-select",18),t.qZA(),t.qZA(),t.qZA(),t.TgZ(44,"div",8),t.TgZ(45,"div",9),t.TgZ(46,"label",10),t._uU(47,"Campaign Name "),t.qZA(),t.TgZ(48,"div",11),t._UZ(49,"input",19),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(50,"div",0),t.TgZ(51,"div",1),t.TgZ(52,"div",2),t.YNc(53,Y,4,2,"div",20),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngIf",!o.isPopup),t.xp6(2),t.Q6J("formGroup",o.LeadForm),t.xp6(2),t.Q6J("formInput",o.LeadForm)("colClass","col-xl-4 col-sm-6"),t.xp6(6),t.ekj("is-invalid",o.isControlInvalid("leadId"))("is-valid",o.isControlValid("leadId")),t.xp6(6),t.ekj("is-invalid",o.isControlInvalid("productId"))("is-valid",o.isControlValid("productId")),t.Q6J("items",o.productOption),t.xp6(6),t.ekj("is-invalid",o.isControlInvalid("sourceCode"))("is-valid",o.isControlValid("sourceCode")),t.Q6J("items",o.sourceOption),t.xp6(6),t.ekj("is-invalid",o.isControlInvalid("contactName"))("is-valid",o.isControlValid("contactName")),t.xp6(6),t.ekj("is-invalid",o.isControlInvalid("existingCustomerName"))("is-valid",o.isControlValid("existingCustomerName")),t.xp6(6),t.ekj("is-invalid",o.isControlInvalid("statusCode"))("is-valid",o.isControlValid("statusCode")),t.Q6J("items",o.statusOption),t.xp6(6),t.ekj("is-invalid",o.isControlInvalid("campaignName"))("is-valid",o.isControlValid("campaignName")),t.xp6(4),t.Q6J("ngIf",o.show))},directives:[d.O5,s._Y,s.JL,s.sg,D.Q,U.Z,s.Fj,s.JJ,s.u,f.w9,Z.I,d.sg],styles:[".input-group[_ngcontent-%COMP%]   .form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #E4E6EF;padding:0 .75rem;width:100%}.input-group[_ngcontent-%COMP%]   .mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;right:5px;top:-2px}.remove-p[_ngcontent-%COMP%]{margin-bottom:0}.col-form-label[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.form-group.row[_ngcontent-%COMP%]{align-items:center}"]}),i})();var h=a(87626),T=a(45598),Q=a(55167),B=a(78480),j=a(57730),R=a(59472),H=a(90860);let G=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[d.ez,s.u5,s.UX,h.vi,T.fA,Q.Fk,B.FA,j.c,v.bz,R.Q,f.A0,H.m]]}),i})(),z=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[d.ez,s.u5,s.UX,h.vi,T.fA,v.M,G,f.A0,C.Bz.forChild([{path:"",component:P}])]]}),i})()}}]);