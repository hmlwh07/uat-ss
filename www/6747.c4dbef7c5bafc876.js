"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6747],{27738:(L,_,i)=>{i.d(_,{v:()=>Z});var t=i(18260),a=i(91691),p=i(83668),v=i(44522);const g=`${t.N.apiUrl}/customer`;let Z=(()=>{class m extends a.i{constructor(h){super(h,g),this.httpClient=h}}return m.\u0275fac=function(h){return new(h||m)(p.LFG(v.eN))},m.\u0275prov=p.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},11918:(L,_,i)=>{i.d(_,{b:()=>q});var t=i(83668),a=i(49133),p=i(90949),v=i(62311),g=i(85993),Z=i(21177),m=i(44290),T=i(92118),h=i(47975),D=i(4205),O=i(99457),e=i(86019),E=i(15470),b=i(85472),y=i(57842),M=i(15346);function I(d,f){if(1&d){const n=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(){return t.CHM(n),t.oxw().navigateToDetail("create")}),t._UZ(1,"span",26),t.qZA()}}function P(d,f){if(1&d){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",30),t.TgZ(2,"button",31),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).closeModal()}),t._uU(3,"Cancel"),t.qZA(),t.TgZ(4,"button",32),t.NdJ("click",function(){return t.CHM(n),t.oxw(2).nextProd()}),t._uU(5,"Next"),t.qZA(),t.qZA(),t.BQk()}if(2&d){const n=t.oxw(2);t.xp6(4),t.Q6J("disabled",!n.selected.customerId)}}function S(d,f){if(1&d){const n=t.EpF();t.TgZ(0,"div",27),t.TgZ(1,"app-material-table-view",28),t.NdJ("emitter",function(c){return t.CHM(n),t.oxw().actionBtn(c)})("rowselect",function(c){return t.CHM(n),t.oxw().rowSelected(c)}),t.qZA(),t.YNc(2,P,6,1,"ng-container",29),t.qZA()}if(2&d){const n=t.oxw();t.xp6(1),t.Q6J("data",n.customerList)("colum",n.ELEMENT_COL)("displayedColumns",n.displayedColumns)("selectable",n.isPopup),t.xp6(1),t.Q6J("ngIf",n.isPopup&&!n.isDynamic)}}let q=(()=>{class d{constructor(n,s,c,A){this.router=n,this.cdf=s,this.customerListService=c,this.modalService=A,this.ELEMENT_COL=JSON.parse(JSON.stringify(v.Ks)),this.displayedColumns=JSON.parse(JSON.stringify(v.Q1)),this.customerList=[],this.statusOption=v.qb,this.identityTypeOption=v.Mf,this.selectedUser=new t.vpe,this.isPopup=!1,this.party=!0,this.isDynamic=!1,this.show=!1,this.loadForm()}ngOnInit(){this.isPopup&&(this.ELEMENT_COL.splice(9,1),this.displayedColumns.splice(9,1)),this.show=!0}ngAfterViewInit(){this.getList()}loadForm(){this.customerForm=new a.cw({name:new a.NI(null),identityType:new a.NI(null),identityNumber:new a.NI(null),statusCode:new a.NI(null),partyCode:new a.NI(null),startDate:new a.NI(null),endDate:new a.NI(null)})}navigateToDetail(n,s,c){this.router.navigate(["/customer/customer-detail"],{queryParams:{pageStatus:n,pageId:s,pageSecondaryId:c}})}getList(){this.customerListService.getCustomerList(this.customerForm.value,this.party,!(!this.isPopup||this.isDynamic)).toPromise().then(s=>{s&&(this.customerList=s,console.log("customerList",this.customerList),this.cdf.detectChanges(),this.matTable&&this.matTable.reChangeData())})}get selected(){let n;return this.matTable&&(n=this.matTable.selection.selected[0]),n||{customerId:0}}rowSelected(n){this.selectedUser.emit(n)}cancel(){this.customerForm.reset(),this.getList()}actionBtn(n){"edit"==n.cmd&&this.navigateToDetail("edit",n.data.customerId,n.data.individualId)}isControlValid(n){const s=this.customerForm.controls[n];return s.valid&&(s.dirty||s.touched)}isControlInvalid(n){const s=this.customerForm.controls[n];return s.invalid&&(s.dirty||s.touched)}controlHasError(n,s){const c=this.customerForm.controls[s];return c.hasError(n)&&(c.dirty||c.touched)}isControlTouched(n){const s=this.customerForm.controls[n];return s.dirty||s.touched}nextProd(){this.selected.customerId&&this.modalService.dismissAll({data:this.selected,type:"save"})}closeModal(){this.modalService.dismissAll()}}return d.\u0275fac=function(n){return new(n||d)(t.Y36(D.F0),t.Y36(t.sBO),t.Y36(O.c),t.Y36(g.FF))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-customer-list"]],viewQuery:function(n,s){if(1&n&&t.Gf(p.I,5),2&n){let c;t.iGM(c=t.CRH())&&(s.matTable=c.first)}},inputs:{isPopup:"isPopup",party:"party",isDynamic:"isDynamic"},outputs:{selectedUser:"selectedUser"},features:[t._Bn([{provide:g.DO,useClass:Z.Wv},{provide:g.NG,useClass:Z.ke},{provide:m._A,useClass:T.t7,deps:[m.Ad]},{provide:m.sG,useValue:h.Gs}])],decls:61,vars:52,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button","class","btn btn-primary btn-circle","style","margin-right: 1rem;\n                    ",3,"click",4,"ngIf"],[1,"flaticon2-magnifier-tool","search-tool",3,"click"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],["remove-host","",3,"formInput","colClass"],[1,"col-md-6"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-8"],["type","text","name","name","autocomplete","off","formControlName","name",1,"form-control","form-control-sm"],["type","text","name","partyCode","autocomplete","off","formControlName","partyCode",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","identityType",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["type","text","name","identityNumber","autocomplete","off","formControlName","identityNumber",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","statusCode",1,"ng-custom-select","ng-custom-select-sm",3,"items"],["class","card-body customer-card-body",4,"ngIf"],["type","button",1,"btn","btn-primary","btn-circle",2,"margin-right","1rem",3,"click"],[1,"flaticon2-plus"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","selectable","emitter","rowselect"],[4,"ngIf"],[1,"card-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","button",1,"btn","btn-primary","btn-elevate",3,"disabled","click"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.qZA(),t.TgZ(8,"div",6),t.YNc(9,I,2,0,"button",7),t.TgZ(10,"span",8),t.NdJ("click",function(){return s.getList()}),t.qZA(),t.TgZ(11,"button",9),t.NdJ("click",function(){return s.cancel()}),t.TgZ(12,"span",10),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",11),t.TgZ(16,"form",12),t.TgZ(17,"div",13),t._UZ(18,"app-start-end-date",14),t.qZA(),t.TgZ(19,"div",13),t.TgZ(20,"div",15),t.TgZ(21,"div",16),t.TgZ(22,"label",17),t._uU(23),t.ALo(24,"translate"),t.qZA(),t.TgZ(25,"div",18),t._UZ(26,"input",19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"div",15),t.TgZ(28,"div",16),t.TgZ(29,"label",17),t._uU(30),t.ALo(31,"translate"),t.qZA(),t.TgZ(32,"div",18),t._UZ(33,"input",20),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"div",13),t.TgZ(35,"div",15),t.TgZ(36,"div",16),t.TgZ(37,"label",17),t._uU(38),t.ALo(39,"translate"),t.qZA(),t.TgZ(40,"div",18),t._UZ(41,"ng-select",21),t.qZA(),t.qZA(),t.qZA(),t.TgZ(42,"div",15),t.TgZ(43,"div",16),t.TgZ(44,"label",17),t._uU(45),t.ALo(46,"translate"),t.qZA(),t.TgZ(47,"div",18),t._UZ(48,"input",22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(49,"div",0),t.TgZ(50,"div",15),t.TgZ(51,"div",16),t.TgZ(52,"label",17),t._uU(53),t.ALo(54,"translate"),t.qZA(),t.TgZ(55,"div",18),t._UZ(56,"ng-select",23),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(57,"div",0),t.TgZ(58,"div",1),t.TgZ(59,"div",2),t.YNc(60,S,3,5,"div",24),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(2),t.ekj("remove-p",s.isPopup),t.xp6(4),t.Oqu(t.lcZ(7,38,"FORM.customer_list")),t.xp6(3),t.Q6J("ngIf",!s.isPopup),t.xp6(4),t.Oqu(t.lcZ(14,40,"FORM.btn_cancel")),t.xp6(3),t.Q6J("formGroup",s.customerForm),t.xp6(2),t.Q6J("formInput",s.customerForm)("colClass","col-md-6"),t.xp6(5),t.Oqu(t.lcZ(24,42,"FORM.name")),t.xp6(3),t.ekj("is-invalid",s.isControlInvalid("name"))("is-valid",s.isControlValid("name")),t.xp6(4),t.Oqu(t.lcZ(31,44,"FORM.party_code")),t.xp6(3),t.ekj("is-invalid",s.isControlInvalid("partyCode"))("is-valid",s.isControlValid("partyCode")),t.xp6(5),t.Oqu(t.lcZ(39,46,"FORM.id_type")),t.xp6(3),t.ekj("is-invalid",s.isControlInvalid("identityType"))("is-valid",s.isControlValid("identityType")),t.Q6J("items",s.identityTypeOption),t.xp6(4),t.Oqu(t.lcZ(46,48,"FORM.id_no")),t.xp6(3),t.ekj("is-invalid",s.isControlInvalid("identityNumber"))("is-valid",s.isControlValid("identityNumber")),t.xp6(5),t.Oqu(t.lcZ(54,50,"FORM.status")),t.xp6(3),t.ekj("is-invalid",s.isControlInvalid("statusCode"))("is-valid",s.isControlValid("statusCode")),t.Q6J("items",s.statusOption),t.xp6(3),t.ekj("remove-p",s.isPopup),t.xp6(1),t.Q6J("ngIf",s.show))},directives:[e.O5,a._Y,a.JL,a.sg,E.Q,b.Z,a.Fj,a.JJ,a.u,y.w9,p.I],pipes:[M.X],styles:[".remove-p[_ngcontent-%COMP%]{margin-bottom:0}.col-form-label[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.form-group.row[_ngcontent-%COMP%]{align-items:center}.draggable[_ngcontent-%COMP%]{color:#fff;border-radius:50%;touch-action:none;-webkit-user-select:none;user-select:none;position:absolute;z-index:999}"]}),d})()},17318:(L,_,i)=>{i.d(_,{J:()=>a,L:()=>p});var t=i(18510);const a=[{title:"Quotation ID",type:t.Y.FEILD,field:"id"},{title:"Product Name",type:t.Y.FEILD,field:"productName"},{title:"Product Code",type:t.Y.FEILD,field:"productCode"},{title:"Agent Name",type:t.Y.FEILD,field:"agentFirstName"},{title:"Premium",type:t.Y.FEILD,field:"premium",amtFormat:!0},{title:"Status",type:t.Y.FEILD,field:"status",isStatus:!0},{title:"Date",type:t.Y.FEILD,field:"createdAt",isDate:!0},{title:"Application",type:t.Y.TEXT,field:"create application",isDate:!0},{title:"Actions",type:t.Y.ACTION,field:"actions",btn:{view:!0,edit:!0}}],p=["id","productName","productCode","agentFirstName","premium","status","createdAt","create application","actions"]},6747:(L,_,i)=>{i.r(_),i.d(_,{QuotationsModule:()=>Q});var t=i(86019),a=i(49133),p=i(92070),v=i(28100),g=i(82997),Z=i(72835),m=i(37632),T=i(90949),h=i(11918),D=i(9939),O=i(17318),e=i(83668),E=i(85993),b=i(35618),y=i(4205),M=i(80842),I=i(27738),P=i(15470),S=i(85472),q=i(15346);const d=function(l){return{activated:l}};let f=(()=>{class l{constructor(o,r,u,N,R,J,x){this.modalService=o,this.prodctService=r,this.router=u,this.quoService=N,this.cdRef=R,this.customerService=J,this.menuService=x,this.quoList=[],this.quoAccess=m.w,this.policyAccess=m.w,this.isTeam=!1,this.ELEMENT_COL=JSON.parse(JSON.stringify(O.J)),this.displayedColumns=JSON.parse(JSON.stringify(O.L)),this.loadForm()}ngOnInit(){this.checkPremission(),this.getQuoList()}loadForm(){let o=new Date,r=new Date(o.setMonth(o.getMonth()-1)),u=new Date(o.setMonth(o.getMonth()+1));this.quotationForm=new a.cw({startDate:new a.NI(r),endDate:new a.NI(u),isTeam:new a.NI(this.isTeam)})}checkPremission(){this.menuService.dataAccess.subscribe(o=>{o&&(this.quoAccess=o.quotation,this.policyAccess=o.application,this.quoAccess.edit||(this.ELEMENT_COL[8].btn.edit=!1),this.policyAccess.create||(this.ELEMENT_COL.splice(7,1),this.displayedColumns.splice(7,1)))})}ngOnDestroy(){}cancel(){}changeView(o){this.isTeam="team"==o,this.quotationForm.controls.isTeam.setValue(this.isTeam),this.cdRef.detectChanges(),this.getQuoList()}createOrEdit(){const o=this.modalService.open(D.P,{size:"xl",backdrop:!1});o.componentInstance.type="modal",o.result.then(()=>{},r=>{r&&"save"==r.type&&this.chooseCustomer(r)})}chooseCustomer(o){const r=this.modalService.open(h.b,{size:"xl",backdrop:!1});r.componentInstance.isPopup=!0,r.result.then(()=>{},u=>{u&&"save"==u.type&&(this.prodctService.createingProd=o.data,this.prodctService.creatingCustomer=u.data,this.prodctService.viewType="quotation",this.prodctService.editData=null,this.prodctService.referenceID=null,this.prodctService.type="quotation",this.router.navigateByUrl("/product-form"))})}getQuoList(){this.quoService.getQuoList(this.quotationForm.getRawValue()).toPromise().then(o=>{o&&(this.quoList=o,this.cdRef.detectChanges(),this.matTable.reChangeData())})}editLayout(o){(0,v.D)([this.prodctService.findOne(o.productId),this.customerService.findOne(o.customerId||1).pipe((0,Z.K)(r=>(0,g.of)(void 0)))]).toPromise().then(r=>{r&&(this.prodctService.createingProd=r[0],this.prodctService.creatingCustomer=r[1],this.prodctService.type="quotation",this.prodctService.viewType="quotation",this.prodctService.editData=o,this.prodctService.referenceID=null,this.prodctService.creatingLeadId=o.leadId,this.router.navigateByUrl("/product-form"))})}FormatedDate(o){return p(o,"YYYYMMDD").format("MM/DD/YYYY")}actionBtn(o){"view"==o.cmd?this.goViewDetail(o.data):"edit"==o.cmd?this.editLayout(o.data):"create"==o.cmd&&this.createPolicy(o.data)}goViewDetail(o){this.prodctService.findOne(o.productId).toPromise().then(r=>{r&&(this.prodctService.createingProd=r,this.prodctService.editData=o,this.prodctService.previewType="quotation",this.router.navigateByUrl("/resourse-detail"))})}createPolicy(o){(0,v.D)([this.prodctService.findOne(o.productId),this.customerService.findOne(o.customerId||1).pipe((0,Z.K)(r=>(0,g.of)(void 0)))]).toPromise().then(r=>{r&&(this.prodctService.createingProdRef=r[0],this.prodctService.creatingCustomer=r[1],this.prodctService.viewType="policy",this.prodctService.type="policy",this.prodctService.referenceID=o.id,this.prodctService.editData=null,this.prodctService.creatingLeadId=o.leadId,this.router.navigateByUrl("/product-form"))})}}return l.\u0275fac=function(o){return new(o||l)(e.Y36(E.FF),e.Y36(b.f),e.Y36(y.F0),e.Y36(M.G),e.Y36(e.sBO),e.Y36(I.v),e.Y36(m.q))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-quotations"]],viewQuery:function(o,r){if(1&o&&e.Gf(T.I,5),2&o){let u;e.iGM(u=e.CRH())&&(r.matTable=u.first)}},decls:30,vars:24,consts:[[1,"row"],[1,"col-12","text-right","pb-5"],[1,"btn","btn-light-dark","new-btn-dark-gray","mr-2","btn-round",3,"ngClass","click"],[1,"btn","btn-light-dark","new-btn-dark-gray","btn-round",3,"ngClass","click"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],[1,"flaticon2-magnifier-tool","search-tool",3,"click"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],["remove-host","",3,"formInput","colClass"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","emitter"]],template:function(o,r){1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return r.changeView("myview")}),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"button",3),e.NdJ("click",function(){return r.changeView("team")}),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.qZA(),e.TgZ(8,"div",4),e.TgZ(9,"div",5),e.TgZ(10,"div",6),e.TgZ(11,"div",7),e.TgZ(12,"h3",8),e._uU(13),e.ALo(14,"translate"),e.qZA(),e.qZA(),e.TgZ(15,"div",9),e.TgZ(16,"span",10),e.NdJ("click",function(){return r.getQuoList()}),e.qZA(),e.TgZ(17,"button",11),e.NdJ("click",function(){return r.cancel()}),e.TgZ(18,"span",12),e._uU(19),e.ALo(20,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(21,"div",13),e.TgZ(22,"form",14),e.TgZ(23,"div",15),e._UZ(24,"app-start-end-date",16),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(25,"div",0),e.TgZ(26,"div",4),e.TgZ(27,"div",5),e.TgZ(28,"div",17),e.TgZ(29,"app-material-table-view",18),e.NdJ("emitter",function(N){return r.actionBtn(N)}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o&&(e.xp6(2),e.Q6J("ngClass",e.VKq(20,d,!r.isTeam)),e.xp6(1),e.Oqu(e.lcZ(4,12,"FORM.my_view")),e.xp6(2),e.Q6J("ngClass",e.VKq(22,d,r.isTeam)),e.xp6(1),e.Oqu(e.lcZ(7,14,"FORM.team_veiw")),e.xp6(7),e.Oqu(e.lcZ(14,16,"FORM.quotation_list")),e.xp6(6),e.Oqu(e.lcZ(20,18,"FORM.btn_cancel")),e.xp6(3),e.Q6J("formGroup",r.quotationForm),e.xp6(2),e.Q6J("formInput",r.quotationForm)("colClass","col-md-6"),e.xp6(5),e.Q6J("data",r.quoList)("colum",r.ELEMENT_COL)("displayedColumns",r.displayedColumns))},directives:[t.mk,a._Y,a.JL,a.sg,P.Q,S.Z,T.I],pipes:[q.X],styles:[".activated[_ngcontent-%COMP%]{background-color:#ff8100!important;color:#fff!important}"]}),l})(),n=(()=>{class l{ngOnInit(){}}return l.\u0275fac=function(o){return new(o||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-quotation-page"]],decls:1,vars:0,template:function(o,r){1&o&&e._UZ(0,"router-outlet")},directives:[y.lC],encapsulation:2}),l})();var s=i(87626),c=i(96152),A=i(45598),F=i(90860),U=i(63699);let Q=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[t.ez,s.vi,a.u5,a.UX,E.bz,A.fA,U.j,y.Bz.forChild([{path:"quotation",component:n,children:[{path:"list",component:f}]}]),c.ProductsModule,F.m]]}),l})()}}]);