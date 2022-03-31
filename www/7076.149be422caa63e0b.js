"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7076],{27738:(C,d,o)=>{o.d(d,{v:()=>y});var a=o(18260),r=o(91691),p=o(83668),v=o(44522);const h=`${a.N.apiUrl}/customer`;let y=(()=>{class s extends r.i{constructor(m){super(m,h),this.httpClient=m}}return s.\u0275fac=function(m){return new(m||s)(p.LFG(v.eN))},s.\u0275prov=p.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},76175:(C,d,o)=>{o.d(d,{j:()=>r,k:()=>p});var a=o(18510);const r=[{title:"Application ID",type:a.Y.FEILD,field:"id"},{title:"Product Name",type:a.Y.FEILD,field:"productName"},{title:"Product Code",type:a.Y.FEILD,field:"productCode"},{title:"Quotation ID",type:a.Y.FEILD,field:"quotationId"},{title:"Agent Name",type:a.Y.FEILD,field:"agentFirstName"},{title:"Premium",type:a.Y.FEILD,field:"premium",amtFormat:!0},{title:"Status",type:a.Y.FEILD,field:"status",isStatus:!0},{title:"Submission Status",type:a.Y.FEILD,field:"apiStatus",isStatus:!0},{title:"Date",type:a.Y.FEILD,field:"createdAt",isDate:!0},{title:"Actions",type:a.Y.ACTION,field:"actions",btn:{view:!0,edit:!0}}],p=["id","productName","productCode","agentFirstName","premium","status","apiStatus","createdAt","actions"]},47076:(C,d,o)=>{o.r(d),o.d(d,{PolicyModule:()=>U});var a=o(86019),r=o(49133),p=o(92070),v=o(28100),h=o(82997),y=o(72835),s=o(37632),u=o(90949),m=o(37025),D=o(9939),P=o(76175),t=o(83668),T=o(85993),A=o(35618),f=o(4205),S=o(46045),I=o(27738),L=o(15470),E=o(85472),M=o(15346);const Z=function(n){return{activated:n}};let O=(()=>{class n{constructor(e,i,c,g,J,B,w){this.modalService=e,this.prodctService=i,this.router=c,this.policyService=g,this.cdRef=J,this.customerService=B,this.menuService=w,this.quoList=[],this.isTeam=!1,this.policyAccess=s.w,this.ELEMENT_COL=JSON.parse(JSON.stringify(P.j)),this.displayedColumns=P.k,this.loadForm()}ngOnInit(){this.checkPremission(),this.getPolicyList()}loadForm(){let e=new Date,i=new Date(e.setMonth(e.getMonth()-1)),c=new Date(e.setMonth(e.getMonth()+1));this.policyForm=new r.cw({startDate:new r.NI(i),endDate:new r.NI(c),isTeam:new r.NI(this.isTeam)})}ngOnDestroy(){}cancel(){}changeView(e){this.isTeam="team"==e,this.policyForm.controls.isTeam.setValue(this.isTeam),this.cdRef.detectChanges(),this.getPolicyList()}checkPremission(){this.menuService.dataAccess.subscribe(e=>{e&&(this.policyAccess=e.application,this.policyAccess.edit||(this.ELEMENT_COL[8].btn.edit=!1))})}createOrEdit(){const e=this.modalService.open(D.P,{size:"xl",backdrop:!1});e.componentInstance.type="modal",e.result.then(()=>{},i=>{i&&"save"==i.type&&this.chooseCustomer(i)})}chooseCustomer(e){const i=this.modalService.open(m.b,{size:"xl",backdrop:!1});i.componentInstance.isPopup=!0,i.result.then(()=>{},c=>{c&&"save"==c.type&&(this.prodctService.creatingCustomer=c.data,this.prodctService.createingProd=e.data,this.prodctService.editData=null,this.prodctService.referenceID=null,this.prodctService.viewType="policy",this.prodctService.type="policy",this.router.navigateByUrl("/product-form"))})}getPolicyList(){this.policyService.getPolicyList(this.policyForm.getRawValue()).toPromise().then(e=>{e&&(console.log(e),this.quoList=e,this.cdRef.detectChanges(),this.matTable.reChangeData())})}editLayout(e){(0,v.D)([this.prodctService.findOne(e.productId),this.customerService.findOne(e.customerId||1).pipe((0,y.K)(i=>(0,h.of)(void 0)))]).toPromise().then(i=>{i[0]&&(this.prodctService.createingProd=i[0],this.prodctService.creatingCustomer=i[1],this.prodctService.type="policy",this.prodctService.viewType="policy",this.prodctService.editData=e,this.prodctService.referenceID=e.quotationId,this.prodctService.creatingLeadId=e.leadId,this.router.navigateByUrl("/product-form"))})}FormatedDate(e){return p(e,"YYYYMMDD").format("MM/DD/YYYY")}actionBtn(e){"view"==e.cmd?this.goViewDetail(e.data):"edit"==e.cmd&&this.editLayout(e.data)}goViewDetail(e){this.prodctService.findOne(e.productId).toPromise().then(i=>{i&&(this.prodctService.createingProd=i,this.prodctService.previewType="policy",this.prodctService.editData=e,this.router.navigateByUrl("/resourse-detail"))})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T.FF),t.Y36(A.f),t.Y36(f.F0),t.Y36(S.d),t.Y36(t.sBO),t.Y36(I.v),t.Y36(s.q))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-policy"]],viewQuery:function(e,i){if(1&e&&t.Gf(u.I,5),2&e){let c;t.iGM(c=t.CRH())&&(i.matTable=c.first)}},decls:30,vars:24,consts:[[1,"row"],[1,"col-12","text-right","pb-5"],[1,"btn","btn-light-dark","new-btn-dark-gray","mr-2","btn-round",3,"ngClass","click"],[1,"btn","btn-light-dark","new-btn-dark-gray","btn-round",3,"ngClass","click"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],[1,"flaticon2-magnifier-tool","search-tool",3,"click"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],["remove-host","",3,"formInput","colClass"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","emitter"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t.NdJ("click",function(){return i.changeView("myview")}),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"button",3),t.NdJ("click",function(){return i.changeView("team")}),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.qZA(),t.TgZ(8,"div",4),t.TgZ(9,"div",5),t.TgZ(10,"div",6),t.TgZ(11,"div",7),t.TgZ(12,"h3",8),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.qZA(),t.TgZ(15,"div",9),t.TgZ(16,"span",10),t.NdJ("click",function(){return i.getPolicyList()}),t.qZA(),t.TgZ(17,"button",11),t.NdJ("click",function(){return i.cancel()}),t.TgZ(18,"span",12),t._uU(19),t.ALo(20,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",13),t.TgZ(22,"form",14),t.TgZ(23,"div",15),t._UZ(24,"app-start-end-date",16),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"div",0),t.TgZ(26,"div",4),t.TgZ(27,"div",5),t.TgZ(28,"div",17),t.TgZ(29,"app-material-table-view",18),t.NdJ("emitter",function(g){return i.actionBtn(g)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngClass",t.VKq(20,Z,!i.isTeam)),t.xp6(1),t.Oqu(t.lcZ(4,12,"FORM.my_view")),t.xp6(2),t.Q6J("ngClass",t.VKq(22,Z,i.isTeam)),t.xp6(1),t.Oqu(t.lcZ(7,14,"FORM.team_veiw")),t.xp6(7),t.Oqu(t.lcZ(14,16,"FORM.application_list")),t.xp6(6),t.Oqu(t.lcZ(20,18,"FORM.btn_cancel")),t.xp6(3),t.Q6J("formGroup",i.policyForm),t.xp6(2),t.Q6J("formInput",i.policyForm)("colClass","col-md-6"),t.xp6(5),t.Q6J("data",i.quoList)("colum",i.ELEMENT_COL)("displayedColumns",i.displayedColumns))},directives:[a.mk,r._Y,r.JL,r.sg,L.Q,E.Z,u.I],pipes:[M.X],styles:[".activated[_ngcontent-%COMP%]{background-color:#ff8100!important;color:#fff!important}"]}),n})();var F=o(87626),Y=o(96152),b=o(45598);let N=(()=>{class n{ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-policy-page"]],decls:1,vars:0,template:function(e,i){1&e&&t._UZ(0,"router-outlet")},directives:[f.lC],encapsulation:2}),n})();var R=o(63699);let U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[a.ez,F.vi,r.u5,r.UX,T.bz,Y.ProductsModule,R.j,b.fA,f.Bz.forChild([{path:"application",component:N,children:[{path:"list",component:O}]}])]]}),n})()}}]);