"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7076],{27738:(E,_,o)=>{o.d(_,{v:()=>C});var t=o(18260),a=o(91691),p=o(83668),v=o(44522);const y=`${t.N.apiUrl}/customer`;let C=(()=>{class u extends a.i{constructor(g){super(g,y),this.httpClient=g}}return u.\u0275fac=function(g){return new(g||u)(p.LFG(v.eN))},u.\u0275prov=p.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},11918:(E,_,o)=>{o.d(_,{b:()=>N});var t=o(83668),a=o(49133),p=o(90949),v=o(62311),y=o(85993),C=o(21177),u=o(44290),Z=o(92118),g=o(47975),L=o(4205),P=o(99457),e=o(86019),O=o(15470),b=o(85472),T=o(57842),D=o(15346);function M(d,h){if(1&d){const i=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){return t.CHM(i),t.oxw().navigateToDetail("create")}),t._UZ(1,"span",26),t.qZA()}}function I(d,h){if(1&d){const i=t.EpF();t.ynx(0),t.TgZ(1,"div",30),t.TgZ(2,"button",31),t.NdJ("click",function(){return t.CHM(i),t.oxw(2).closeModal()}),t._uU(3,"Cancel"),t.qZA(),t.TgZ(4,"button",32),t.NdJ("click",function(){return t.CHM(i),t.oxw(2).nextProd()}),t._uU(5,"Next"),t.qZA(),t.qZA(),t.BQk()}if(2&d){const i=t.oxw(2);t.xp6(4),t.Q6J("disabled",!i.selected.customerId)}}function F(d,h){if(1&d){const i=t.EpF();t.TgZ(0,"div",27),t.TgZ(1,"app-material-table-view",28),t.NdJ("emitter",function(l){return t.CHM(i),t.oxw().actionBtn(l)})("rowselect",function(l){return t.CHM(i),t.oxw().rowSelected(l)}),t.qZA(),t.YNc(2,I,6,1,"ng-container",29),t.qZA()}if(2&d){const i=t.oxw();t.xp6(1),t.Q6J("data",i.customerList)("colum",i.ELEMENT_COL)("displayedColumns",i.displayedColumns)("selectable",i.isPopup),t.xp6(1),t.Q6J("ngIf",i.isPopup&&!i.isDynamic)}}let N=(()=>{class d{constructor(i,n,l,A){this.router=i,this.cdf=n,this.customerListService=l,this.modalService=A,this.ELEMENT_COL=JSON.parse(JSON.stringify(v.Ks)),this.displayedColumns=JSON.parse(JSON.stringify(v.Q1)),this.customerList=[],this.statusOption=v.qb,this.identityTypeOption=v.Mf,this.selectedUser=new t.vpe,this.isPopup=!1,this.party=!0,this.isDynamic=!1,this.show=!1,this.loadForm()}ngOnInit(){this.isPopup&&(this.ELEMENT_COL.splice(9,1),this.displayedColumns.splice(9,1)),this.show=!0}ngAfterViewInit(){this.getList()}loadForm(){this.customerForm=new a.cw({name:new a.NI(null),identityType:new a.NI(null),identityNumber:new a.NI(null),statusCode:new a.NI(null),partyCode:new a.NI(null),startDate:new a.NI(null),endDate:new a.NI(null)})}navigateToDetail(i,n,l){this.router.navigate(["/customer/customer-detail"],{queryParams:{pageStatus:i,pageId:n,pageSecondaryId:l}})}getList(){this.customerListService.getCustomerList(this.customerForm.value,this.party,!(!this.isPopup||this.isDynamic)).toPromise().then(n=>{n&&(this.customerList=n,this.cdf.detectChanges(),this.matTable&&this.matTable.reChangeData())})}get selected(){let i;return this.matTable&&(i=this.matTable.selection.selected[0]),i||{customerId:0}}rowSelected(i){this.selectedUser.emit(i)}cancel(){this.customerForm.reset(),this.getList()}actionBtn(i){"edit"==i.cmd&&this.navigateToDetail("edit",i.data.customerId,i.data.individualId)}isControlValid(i){const n=this.customerForm.controls[i];return n.valid&&(n.dirty||n.touched)}isControlInvalid(i){const n=this.customerForm.controls[i];return n.invalid&&(n.dirty||n.touched)}controlHasError(i,n){const l=this.customerForm.controls[n];return l.hasError(i)&&(l.dirty||l.touched)}isControlTouched(i){const n=this.customerForm.controls[i];return n.dirty||n.touched}nextProd(){this.selected.customerId&&this.modalService.dismissAll({data:this.selected,type:"save"})}closeModal(){this.modalService.dismissAll()}}return d.\u0275fac=function(i){return new(i||d)(t.Y36(L.F0),t.Y36(t.sBO),t.Y36(P.c),t.Y36(y.FF))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-customer-list"]],viewQuery:function(i,n){if(1&i&&t.Gf(p.I,5),2&i){let l;t.iGM(l=t.CRH())&&(n.matTable=l.first)}},inputs:{isPopup:"isPopup",party:"party",isDynamic:"isDynamic"},outputs:{selectedUser:"selectedUser"},features:[t._Bn([{provide:y.DO,useClass:C.Wv},{provide:y.NG,useClass:C.ke},{provide:u._A,useClass:Z.t7,deps:[u.Ad]},{provide:u.sG,useValue:g.Gs}])],decls:61,vars:52,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button","class","btn btn-primary btn-circle","style","margin-right: 1rem;\n                    ",3,"click",4,"ngIf"],[1,"flaticon2-magnifier-tool","search-tool",3,"click"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],["remove-host","",3,"formInput","colClass"],[1,"col-md-6"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["type","text","name","name","autocomplete","off","formControlName","name",1,"form-control","form-control-sm"],["type","text","name","partyCode","autocomplete","off","formControlName","partyCode",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","identityType",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["type","text","name","identityNumber","autocomplete","off","formControlName","identityNumber",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","statusCode",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["class","card-body customer-card-body",4,"ngIf"],["type","button",1,"btn","btn-primary","btn-circle",2,"margin-right","1rem",3,"click"],[1,"flaticon2-plus"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","selectable","emitter","rowselect"],[4,"ngIf"],[1,"card-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","button",1,"btn","btn-primary","btn-elevate",3,"disabled","click"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.qZA(),t.TgZ(8,"div",6),t.YNc(9,M,2,0,"button",7),t.TgZ(10,"span",8),t.NdJ("click",function(){return n.getList()}),t.qZA(),t.TgZ(11,"button",9),t.NdJ("click",function(){return n.cancel()}),t.TgZ(12,"span",10),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",11),t.TgZ(16,"form",12),t.TgZ(17,"div",13),t._UZ(18,"app-start-end-date",14),t.qZA(),t.TgZ(19,"div",13),t.TgZ(20,"div",15),t.TgZ(21,"div",16),t.TgZ(22,"label",17),t._uU(23),t.ALo(24,"translate"),t.qZA(),t.TgZ(25,"div",18),t._UZ(26,"input",19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"div",15),t.TgZ(28,"div",16),t.TgZ(29,"label",17),t._uU(30),t.ALo(31,"translate"),t.qZA(),t.TgZ(32,"div",18),t._UZ(33,"input",20),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"div",13),t.TgZ(35,"div",15),t.TgZ(36,"div",16),t.TgZ(37,"label",17),t._uU(38),t.ALo(39,"translate"),t.qZA(),t.TgZ(40,"div",18),t._UZ(41,"ng-select",21),t.qZA(),t.qZA(),t.qZA(),t.TgZ(42,"div",15),t.TgZ(43,"div",16),t.TgZ(44,"label",17),t._uU(45),t.ALo(46,"translate"),t.qZA(),t.TgZ(47,"div",18),t._UZ(48,"input",22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(49,"div",0),t.TgZ(50,"div",15),t.TgZ(51,"div",16),t.TgZ(52,"label",17),t._uU(53),t.ALo(54,"translate"),t.qZA(),t.TgZ(55,"div",18),t._UZ(56,"ng-select",23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(57,"div",0),t.TgZ(58,"div",1),t.TgZ(59,"div",2),t.YNc(60,F,3,5,"div",24),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(2),t.ekj("remove-p",n.isPopup),t.xp6(4),t.Oqu(t.lcZ(7,38,"FORM.customer_list")),t.xp6(3),t.Q6J("ngIf",!n.isPopup),t.xp6(4),t.Oqu(t.lcZ(14,40,"FORM.btn_cancel")),t.xp6(3),t.Q6J("formGroup",n.customerForm),t.xp6(2),t.Q6J("formInput",n.customerForm)("colClass","col-md-6"),t.xp6(5),t.Oqu(t.lcZ(24,42,"FORM.name")),t.xp6(3),t.ekj("is-invalid",n.isControlInvalid("name"))("is-valid",n.isControlValid("name")),t.xp6(4),t.Oqu(t.lcZ(31,44,"FORM.party_code")),t.xp6(3),t.ekj("is-invalid",n.isControlInvalid("partyCode"))("is-valid",n.isControlValid("partyCode")),t.xp6(5),t.Oqu(t.lcZ(39,46,"FORM.id_type")),t.xp6(3),t.ekj("is-invalid",n.isControlInvalid("identityType"))("is-valid",n.isControlValid("identityType")),t.Q6J("items",n.identityTypeOption),t.xp6(4),t.Oqu(t.lcZ(46,48,"FORM.id_no")),t.xp6(3),t.ekj("is-invalid",n.isControlInvalid("identityNumber"))("is-valid",n.isControlValid("identityNumber")),t.xp6(5),t.Oqu(t.lcZ(54,50,"FORM.status")),t.xp6(3),t.ekj("is-invalid",n.isControlInvalid("statusCode"))("is-valid",n.isControlValid("statusCode")),t.Q6J("items",n.statusOption),t.xp6(3),t.ekj("remove-p",n.isPopup),t.xp6(1),t.Q6J("ngIf",n.show))},directives:[e.O5,a._Y,a.JL,a.sg,O.Q,b.Z,a.Fj,a.JJ,a.u,T.w9,p.I],pipes:[D.X],styles:[".remove-p[_ngcontent-%COMP%]{margin-bottom:0}.col-form-label[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.form-group.row[_ngcontent-%COMP%]{align-items:center}.draggable[_ngcontent-%COMP%]{color:#fff;border-radius:50%;touch-action:none;-webkit-user-select:none;user-select:none;position:absolute;z-index:999}"]}),d})()},76175:(E,_,o)=>{o.d(_,{j:()=>a,k:()=>p});var t=o(18510);const a=[{title:"Application ID",type:t.Y.FEILD,field:"id"},{title:"Product Name",type:t.Y.FEILD,field:"productName"},{title:"Product Code",type:t.Y.FEILD,field:"productCode"},{title:"Quotation ID",type:t.Y.FEILD,field:"quotationId"},{title:"Agent Name",type:t.Y.FEILD,field:"agentFirstName"},{title:"Premium",type:t.Y.FEILD,field:"premium",amtFormat:!0},{title:"Status",type:t.Y.FEILD,field:"status",isStatus:!0},{title:"Submission Status",type:t.Y.FEILD,field:"apiStatus",isStatus:!0},{title:"Date",type:t.Y.FEILD,field:"createdAt",isDate:!0},{title:"Actions",type:t.Y.ACTION,field:"actions",btn:{view:!0,edit:!0}}],p=["id","productName","productCode","agentFirstName","premium","status","apiStatus","createdAt","actions"]},47076:(E,_,o)=>{o.r(_),o.d(_,{PolicyModule:()=>R});var t=o(86019),a=o(49133),p=o(92070),v=o(28100),y=o(82997),C=o(72835),u=o(37632),Z=o(90949),g=o(11918),L=o(9939),P=o(76175),e=o(83668),O=o(85993),b=o(35618),T=o(4205),D=o(46045),M=o(27738),I=o(15470),F=o(85472),N=o(15346);const d=function(c){return{activated:c}};let h=(()=>{class c{constructor(s,r,m,S,q,x,J){this.modalService=s,this.prodctService=r,this.router=m,this.policyService=S,this.cdRef=q,this.customerService=x,this.menuService=J,this.quoList=[],this.isTeam=!1,this.policyAccess=u.w,this.ELEMENT_COL=JSON.parse(JSON.stringify(P.j)),this.displayedColumns=P.k,this.loadForm()}ngOnInit(){this.checkPremission(),this.getPolicyList()}loadForm(){let s=new Date,r=new Date(s.setMonth(s.getMonth()-1)),m=new Date(s.setMonth(s.getMonth()+1));this.policyForm=new a.cw({startDate:new a.NI(r),endDate:new a.NI(m),isTeam:new a.NI(this.isTeam)})}ngOnDestroy(){}cancel(){}changeView(s){this.isTeam="team"==s,this.policyForm.controls.isTeam.setValue(this.isTeam),this.cdRef.detectChanges(),this.getPolicyList()}checkPremission(){this.menuService.dataAccess.subscribe(s=>{s&&(this.policyAccess=s.application,this.policyAccess.edit||(this.ELEMENT_COL[8].btn.edit=!1))})}createOrEdit(){const s=this.modalService.open(L.P,{size:"xl",backdrop:!1});s.componentInstance.type="modal",s.result.then(()=>{},r=>{r&&"save"==r.type&&this.chooseCustomer(r)})}chooseCustomer(s){const r=this.modalService.open(g.b,{size:"xl",backdrop:!1});r.componentInstance.isPopup=!0,r.result.then(()=>{},m=>{m&&"save"==m.type&&(this.prodctService.creatingCustomer=m.data,this.prodctService.createingProd=s.data,this.prodctService.editData=null,this.prodctService.referenceID=null,this.prodctService.viewType="policy",this.prodctService.type="policy",this.router.navigateByUrl("/product-form"))})}getPolicyList(){this.policyService.getPolicyList(this.policyForm.getRawValue()).toPromise().then(s=>{s&&(this.quoList=s,this.cdRef.detectChanges(),this.matTable.reChangeData())})}editLayout(s){(0,v.D)([this.prodctService.findOne(s.productId),this.customerService.findOne(s.customerId||1).pipe((0,C.K)(r=>(0,y.of)(void 0)))]).toPromise().then(r=>{r[0]&&(this.prodctService.createingProd=r[0],this.prodctService.creatingCustomer=r[1],this.prodctService.type="policy",this.prodctService.viewType="policy",this.prodctService.editData=s,this.prodctService.referenceID=s.quotationId,this.prodctService.creatingLeadId=s.leadId,this.router.navigateByUrl("/product-form"))})}FormatedDate(s){return p(s,"YYYYMMDD").format("MM/DD/YYYY")}actionBtn(s){"view"==s.cmd?this.goViewDetail(s.data):"edit"==s.cmd&&this.editLayout(s.data)}goViewDetail(s){this.prodctService.findOne(s.productId).toPromise().then(r=>{r&&(this.prodctService.createingProd=r,this.prodctService.previewType="policy",this.prodctService.editData=s,this.router.navigateByUrl("/resourse-detail"))})}}return c.\u0275fac=function(s){return new(s||c)(e.Y36(O.FF),e.Y36(b.f),e.Y36(T.F0),e.Y36(D.d),e.Y36(e.sBO),e.Y36(M.v),e.Y36(u.q))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-policy"]],viewQuery:function(s,r){if(1&s&&e.Gf(Z.I,5),2&s){let m;e.iGM(m=e.CRH())&&(r.matTable=m.first)}},decls:30,vars:24,consts:[[1,"row"],[1,"col-12","text-right","pb-5"],[1,"btn","btn-light-dark","new-btn-dark-gray","mr-2","btn-round",3,"ngClass","click"],[1,"btn","btn-light-dark","new-btn-dark-gray","btn-round",3,"ngClass","click"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],[1,"flaticon2-magnifier-tool","search-tool",3,"click"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],["remove-host","",3,"formInput","colClass"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","emitter"]],template:function(s,r){1&s&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return r.changeView("myview")}),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"button",3),e.NdJ("click",function(){return r.changeView("team")}),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.qZA(),e.TgZ(8,"div",4),e.TgZ(9,"div",5),e.TgZ(10,"div",6),e.TgZ(11,"div",7),e.TgZ(12,"h3",8),e._uU(13),e.ALo(14,"translate"),e.qZA(),e.qZA(),e.TgZ(15,"div",9),e.TgZ(16,"span",10),e.NdJ("click",function(){return r.getPolicyList()}),e.qZA(),e.TgZ(17,"button",11),e.NdJ("click",function(){return r.cancel()}),e.TgZ(18,"span",12),e._uU(19),e.ALo(20,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"div",13),e.TgZ(22,"form",14),e.TgZ(23,"div",15),e._UZ(24,"app-start-end-date",16),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(25,"div",0),e.TgZ(26,"div",4),e.TgZ(27,"div",5),e.TgZ(28,"div",17),e.TgZ(29,"app-material-table-view",18),e.NdJ("emitter",function(S){return r.actionBtn(S)}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&s&&(e.xp6(2),e.Q6J("ngClass",e.VKq(20,d,!r.isTeam)),e.xp6(1),e.Oqu(e.lcZ(4,12,"FORM.my_view")),e.xp6(2),e.Q6J("ngClass",e.VKq(22,d,r.isTeam)),e.xp6(1),e.Oqu(e.lcZ(7,14,"FORM.team_veiw")),e.xp6(7),e.Oqu(e.lcZ(14,16,"FORM.application_list")),e.xp6(6),e.Oqu(e.lcZ(20,18,"FORM.btn_cancel")),e.xp6(3),e.Q6J("formGroup",r.policyForm),e.xp6(2),e.Q6J("formInput",r.policyForm)("colClass","col-md-6"),e.xp6(5),e.Q6J("data",r.quoList)("colum",r.ELEMENT_COL)("displayedColumns",r.displayedColumns))},directives:[t.mk,a._Y,a.JL,a.sg,I.Q,F.Z,Z.I],pipes:[N.X],styles:[".activated[_ngcontent-%COMP%]{background-color:#ff8100!important;color:#fff!important}"]}),c})();var i=o(87626),n=o(96152),l=o(45598);let A=(()=>{class c{ngOnInit(){}}return c.\u0275fac=function(s){return new(s||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-policy-page"]],decls:1,vars:0,template:function(s,r){1&s&&e._UZ(0,"router-outlet")},directives:[T.lC],encapsulation:2}),c})();var U=o(63699);let R=(()=>{class c{}return c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[[t.ez,i.vi,a.u5,a.UX,O.bz,n.ProductsModule,U.j,l.fA,T.Bz.forChild([{path:"application",component:A,children:[{path:"list",component:h}]}])]]}),c})()}}]);