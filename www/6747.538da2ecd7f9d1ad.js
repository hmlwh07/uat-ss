"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6747],{27738:(C,u,o)=>{o.d(u,{v:()=>m});var a=o(18260),p=o(91691),l=o(83668),v=o(44522);const h=`${a.N.apiUrl}/customer`;let m=(()=>{class s extends p.i{constructor(d){super(d,h),this.httpClient=d}}return s.\u0275fac=function(d){return new(d||s)(l.LFG(v.eN))},s.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},17318:(C,u,o)=>{o.d(u,{J:()=>p,L:()=>l});var a=o(18510);const p=[{title:"Quotation ID",type:a.Y.FEILD,field:"id"},{title:"Product Name",type:a.Y.FEILD,field:"productName"},{title:"Product Code",type:a.Y.FEILD,field:"productCode"},{title:"Agent Name",type:a.Y.FEILD,field:"agentFirstName"},{title:"Premium",type:a.Y.FEILD,field:"premium",amtFormat:!0},{title:"Status",type:a.Y.FEILD,field:"status",isStatus:!0},{title:"Date",type:a.Y.FEILD,field:"createdAt",isDate:!0},{title:"Application",type:a.Y.TEXT,field:"create application",isDate:!0},{title:"Actions",type:a.Y.ACTION,field:"actions",btn:{view:!0,edit:!0}}],l=["id","productName","productCode","agentFirstName","premium","status","createdAt","create application","actions"]},6747:(C,u,o)=>{o.r(u),o.d(u,{QuotationsModule:()=>O});var a=o(86019),p=o(92070),l=o(28100),v=o(82997),h=o(72835),m=o(90949),s=o(37025),f=o(9939),d=o(17318),t=o(83668),D=o(85378),E=o(35618),y=o(29018),T=o(80842),I=o(27738);let P=(()=>{class r{constructor(e,i,n,g,Q,F){this.modalService=e,this.prodctService=i,this.router=n,this.quoService=g,this.cdRef=Q,this.customerService=F,this.quoList=[],this.ELEMENT_COL=d.J,this.displayedColumns=d.L}ngOnInit(){this.getQuoList()}ngOnDestroy(){}createOrEdit(){const e=this.modalService.open(f.P,{size:"xl",backdrop:!1});e.componentInstance.type="modal",e.result.then(()=>{},i=>{i&&"save"==i.type&&this.chooseCustomer(i)})}chooseCustomer(e){const i=this.modalService.open(s.b,{size:"xl",backdrop:!1});i.componentInstance.isPopup=!0,i.result.then(()=>{},n=>{n&&"save"==n.type&&(this.prodctService.createingProd=e.data,this.prodctService.creatingCustomer=n.data,this.prodctService.viewType="quotation",this.prodctService.editData=null,this.prodctService.referenceID=null,this.prodctService.type="quotation",this.router.navigateByUrl("/product-form"))})}getQuoList(){this.quoService.findAll().toPromise().then(e=>{e&&(this.quoList=e,this.cdRef.detectChanges(),this.matTable.reChangeData())})}editLayout(e){(0,l.D)([this.prodctService.findOne(e.productId),this.customerService.findOne(e.customerId||1).pipe((0,h.K)(i=>(0,v.of)(void 0)))]).toPromise().then(i=>{i&&(this.prodctService.createingProd=i[0],this.prodctService.creatingCustomer=i[1],this.prodctService.type="quotation",this.prodctService.viewType="quotation",this.prodctService.editData=e,this.prodctService.referenceID=null,this.prodctService.creatingLeadId=e.leadId,this.router.navigateByUrl("/product-form"))})}FormatedDate(e){return p(e,"YYYYMMDD").format("MM/DD/YYYY")}actionBtn(e){"view"==e.cmd?this.goViewDetail(e.data):"edit"==e.cmd?this.editLayout(e.data):"create"==e.cmd&&this.createPolicy(e.data)}goViewDetail(e){this.prodctService.findOne(e.productId).toPromise().then(i=>{i&&(this.prodctService.createingProd=i,this.prodctService.editData=e,this.prodctService.previewType="quotation",this.router.navigateByUrl("/resourse-detail"))})}createPolicy(e){this.prodctService.findOne(e.productId).toPromise().then(i=>{i&&(this.prodctService.createingProdRef=i,this.prodctService.viewType="policy",this.prodctService.type="policy",this.prodctService.referenceID=e.id,this.prodctService.editData=null,this.router.navigateByUrl("/product-form"))})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(D.FF),t.Y36(E.f),t.Y36(y.F0),t.Y36(T.G),t.Y36(t.sBO),t.Y36(I.v))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-quotations"]],viewQuery:function(e,i){if(1&e&&t.Gf(m.I,5),2&e){let n;t.iGM(n=t.CRH())&&(i.matTable=n.first)}},decls:15,vars:3,consts:[[1,"row"],[1,"col-12","text-right","pb-5"],[1,"btn","btn-warning","mr-2","btn-round"],[1,"btn","btn-light-dark","new-btn-dark-gray","btn-round"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","emitter"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t._uU(3,"My View"),t.qZA(),t.TgZ(4,"button",3),t._uU(5,"Team View"),t.qZA(),t.qZA(),t.TgZ(6,"div",4),t.TgZ(7,"div",5),t.TgZ(8,"div",6),t.TgZ(9,"div",7),t.TgZ(10,"h3",8),t._uU(11,"Quotation List"),t.qZA(),t.qZA(),t._UZ(12,"div",9),t.qZA(),t.TgZ(13,"div",10),t.TgZ(14,"app-material-table-view",11),t.NdJ("emitter",function(g){return i.actionBtn(g)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(14),t.Q6J("data",i.quoList)("colum",i.ELEMENT_COL)("displayedColumns",i.displayedColumns))},directives:[m.I],styles:[""]}),r})(),L=(()=>{class r{ngOnInit(){}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-quotation-page"]],decls:1,vars:0,template:function(e,i){1&e&&t._UZ(0,"router-outlet")},directives:[y.lC],encapsulation:2}),r})();var A=o(87626),S=o(49133),M=o(96152),Y=o(45598),Z=o(90860);let O=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[a.ez,A.vi,S.u5,S.UX,D.bz,Y.fA,y.Bz.forChild([{path:"quotation",component:L,children:[{path:"list",component:P}]}]),M.ProductsModule,Z.m]]}),r})()}}]);