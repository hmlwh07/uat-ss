"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6747],{27738:(C,d,o)=>{o.d(d,{v:()=>m});var a=o(18260),p=o(91691),u=o(83668),v=o(44522);const h=`${a.N.apiUrl}/customer`;let m=(()=>{class s extends p.i{constructor(l){super(l,h),this.httpClient=l}}return s.\u0275fac=function(l){return new(l||s)(u.LFG(v.eN))},s.\u0275prov=u.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},17318:(C,d,o)=>{o.d(d,{J:()=>p,L:()=>u});var a=o(18510);const p=[{title:"Quotation ID",type:a.Y.FEILD,field:"id"},{title:"Product Name",type:a.Y.FEILD,field:"productName"},{title:"Product Code",type:a.Y.FEILD,field:"productCode"},{title:"Agent Name",type:a.Y.FEILD,field:"agentFirstName"},{title:"Premium",type:a.Y.FEILD,field:"premium",amtFormat:!0},{title:"Status",type:a.Y.FEILD,field:"status",isStatus:!0},{title:"Date",type:a.Y.FEILD,field:"createdAt",isDate:!0},{title:"Application",type:a.Y.TEXT,field:"create application",isDate:!0},{title:"Actions",type:a.Y.ACTION,field:"actions",btn:{view:!0,edit:!0}}],u=["id","productName","productCode","agentFirstName","premium","status","createdAt","create application","actions"]},6747:(C,d,o)=>{o.r(d),o.d(d,{QuotationsModule:()=>Q});var a=o(86019),p=o(92070),u=o(28100),v=o(82997),h=o(72835),m=o(37632),s=o(90949),f=o(37025),l=o(9939),S=o(17318),e=o(83668),D=o(85378),T=o(35618),y=o(29018),A=o(80842),L=o(27738);let P=(()=>{class r{constructor(t,i,n,g,F,N,U){this.modalService=t,this.prodctService=i,this.router=n,this.quoService=g,this.cdRef=F,this.customerService=N,this.menuService=U,this.quoList=[],this.quoAccess=m.w,this.policyAccess=m.w,this.ELEMENT_COL=JSON.parse(JSON.stringify(S.J)),this.displayedColumns=JSON.parse(JSON.stringify(S.L))}ngOnInit(){this.checkPremission(),this.getQuoList()}checkPremission(){this.menuService.dataAccess.subscribe(t=>{t&&(this.quoAccess=t.quotation,this.policyAccess=t.application,this.quoAccess.edit||(this.ELEMENT_COL[8].btn.edit=!1),this.policyAccess.create||(this.ELEMENT_COL.splice(7,1),this.displayedColumns.splice(7,1)))})}ngOnDestroy(){}createOrEdit(){const t=this.modalService.open(l.P,{size:"xl",backdrop:!1});t.componentInstance.type="modal",t.result.then(()=>{},i=>{i&&"save"==i.type&&this.chooseCustomer(i)})}chooseCustomer(t){const i=this.modalService.open(f.b,{size:"xl",backdrop:!1});i.componentInstance.isPopup=!0,i.result.then(()=>{},n=>{n&&"save"==n.type&&(this.prodctService.createingProd=t.data,this.prodctService.creatingCustomer=n.data,this.prodctService.viewType="quotation",this.prodctService.editData=null,this.prodctService.referenceID=null,this.prodctService.type="quotation",this.router.navigateByUrl("/product-form"))})}getQuoList(){this.quoService.findAll().toPromise().then(t=>{t&&(this.quoList=t,this.cdRef.detectChanges(),this.matTable.reChangeData())})}editLayout(t){(0,u.D)([this.prodctService.findOne(t.productId),this.customerService.findOne(t.customerId||1).pipe((0,h.K)(i=>(0,v.of)(void 0)))]).toPromise().then(i=>{i&&(this.prodctService.createingProd=i[0],this.prodctService.creatingCustomer=i[1],this.prodctService.type="quotation",this.prodctService.viewType="quotation",this.prodctService.editData=t,this.prodctService.referenceID=null,this.prodctService.creatingLeadId=t.leadId,this.router.navigateByUrl("/product-form"))})}FormatedDate(t){return p(t,"YYYYMMDD").format("MM/DD/YYYY")}actionBtn(t){"view"==t.cmd?this.goViewDetail(t.data):"edit"==t.cmd?this.editLayout(t.data):"create"==t.cmd&&this.createPolicy(t.data)}goViewDetail(t){this.prodctService.findOne(t.productId).toPromise().then(i=>{i&&(this.prodctService.createingProd=i,this.prodctService.editData=t,this.prodctService.previewType="quotation",this.router.navigateByUrl("/resourse-detail"))})}createPolicy(t){this.prodctService.findOne(t.productId).toPromise().then(i=>{i&&(this.prodctService.createingProdRef=i,this.prodctService.viewType="policy",this.prodctService.type="policy",this.prodctService.referenceID=t.id,this.prodctService.editData=null,this.router.navigateByUrl("/product-form"))})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(D.FF),e.Y36(T.f),e.Y36(y.F0),e.Y36(A.G),e.Y36(e.sBO),e.Y36(L.v),e.Y36(m.q))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-quotations"]],viewQuery:function(t,i){if(1&t&&e.Gf(s.I,5),2&t){let n;e.iGM(n=e.CRH())&&(i.matTable=n.first)}},decls:15,vars:3,consts:[[1,"row"],[1,"col-12","text-right","pb-5"],[1,"btn","btn-warning","mr-2","btn-round"],[1,"btn","btn-light-dark","new-btn-dark-gray","btn-round"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","emitter"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"button",2),e._uU(3,"My View"),e.qZA(),e.TgZ(4,"button",3),e._uU(5,"Team View"),e.qZA(),e.qZA(),e.TgZ(6,"div",4),e.TgZ(7,"div",5),e.TgZ(8,"div",6),e.TgZ(9,"div",7),e.TgZ(10,"h3",8),e._uU(11,"Quotation List"),e.qZA(),e.qZA(),e._UZ(12,"div",9),e.qZA(),e.TgZ(13,"div",10),e.TgZ(14,"app-material-table-view",11),e.NdJ("emitter",function(g){return i.actionBtn(g)}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(14),e.Q6J("data",i.quoList)("colum",i.ELEMENT_COL)("displayedColumns",i.displayedColumns))},directives:[s.I],styles:[""]}),r})(),I=(()=>{class r{ngOnInit(){}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-quotation-page"]],decls:1,vars:0,template:function(t,i){1&t&&e._UZ(0,"router-outlet")},directives:[y.lC],encapsulation:2}),r})();var O=o(87626),E=o(49133),M=o(96152),Y=o(45598),Z=o(90860);let Q=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[a.ez,O.vi,E.u5,E.UX,D.bz,Y.fA,y.Bz.forChild([{path:"quotation",component:I,children:[{path:"list",component:P}]}]),M.ProductsModule,Z.m]]}),r})()}}]);