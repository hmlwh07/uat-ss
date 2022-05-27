"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7076],{27738:(g,d,o)=>{o.d(d,{v:()=>h});var s=o(18260),c=o(91691),m=o(83668),u=o(44522);const v=`${s.N.apiUrl}/customer`;let h=(()=>{class l extends c.i{constructor(p){super(p,v),this.httpClient=p}}return l.\u0275fac=function(p){return new(p||l)(m.LFG(u.eN))},l.\u0275prov=m.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},76175:(g,d,o)=>{o.d(d,{j:()=>c,k:()=>m});var s=o(18510);const c=[{title:"Application ID",type:s.Y.FEILD,field:"id"},{title:"Product Name",type:s.Y.FEILD,field:"productName"},{title:"Product Code",type:s.Y.FEILD,field:"productCode"},{title:"Quotation ID",type:s.Y.FEILD,field:"quotationId"},{title:"Agent Name",type:s.Y.FEILD,field:"agentFirstName"},{title:"Premium",type:s.Y.FEILD,field:"premium",amtFormat:!0},{title:"Status",type:s.Y.FEILD,field:"status",isStatus:!0},{title:"Submission Status",type:s.Y.FEILD,field:"apiStatus",isStatus:!0},{title:"Date",type:s.Y.FEILD,field:"createdAt",isDate:!0},{title:"Actions",type:s.Y.ACTION,field:"actions",btn:{view:!0,edit:!0,editOnState:!0}}],m=["id","productName","productCode","agentFirstName","premium","status","apiStatus","createdAt","actions"]},47076:(g,d,o)=>{o.r(d),o.d(d,{PolicyModule:()=>W});var s=o(86019),c=o(49133),m=o(92118),u=o(44290),v=o(74464),h=o(92070),l=o(28100),f=o(82997),p=o(72835),A=o(47975),S=o(18260),P=o(37632),I=o(90949),O=o(11918),E=o(9939),C=o(49065),D=o(76175),t=o(83668),T=o(85993),M=o(35618),y=o(4205),F=o(46045),Y=o(27738),N=o(15470),R=o(85472),U=o(15346);function b(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"app-common-list-2",19,20),t.NdJ("btnEvent",function(a){return t.CHM(e),t.oxw().actionBtn(a)}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("data",e.quoList)("type","policy")}}const L=function(n){return{activated:n}};let J=(()=>{class n{constructor(e,i,a,Z,z,j,w){this.modalService=e,this.prodctService=i,this.router=a,this.policyService=Z,this.cdRef=z,this.customerService=j,this.menuService=w,this.quoList=[],this.isTeam=!1,this.policyAccess=P.w,this.Default_DOWNLOAD_URL=`${S.N.apiUrl}/attachment-downloader`,this.ELEMENT_COL=JSON.parse(JSON.stringify(D.j)),this.displayedColumns=D.k,this.loadForm()}ngOnInit(){this.checkPremission(),this.getPolicyList()}loadForm(){let e=new Date,i=new Date(e.setMonth(e.getMonth()-1)),a=new Date(e.setMonth(e.getMonth()+1));this.policyForm=new c.cw({startDate:new c.NI(i),endDate:new c.NI(a),isTeam:new c.NI(this.isTeam)})}ngOnDestroy(){}cancel(){}changeView(e){this.isTeam="team"==e,this.policyForm.controls.isTeam.setValue(this.isTeam),this.cdRef.detectChanges(),this.getPolicyList()}checkPremission(){this.menuService.dataAccess.subscribe(e=>{e&&(this.policyAccess=e.application,this.policyAccess.edit||(this.ELEMENT_COL[8].btn.edit=!1))})}createOrEdit(){const e=this.modalService.open(E.P,{size:"xl",backdrop:!1});e.componentInstance.type="modal",e.result.then(()=>{},i=>{i&&"save"==i.type&&this.chooseCustomer(i)})}chooseCustomer(e){const i=this.modalService.open(O.b,{size:"xl",backdrop:!1});i.componentInstance.isPopup=!0,i.result.then(()=>{},a=>{a&&"save"==a.type&&(this.prodctService.creatingCustomer=a.data,this.prodctService.createingProd=e.data,this.prodctService.editData=null,this.prodctService.referenceID=null,this.prodctService.viewType="policy",this.prodctService.type="policy",this.router.navigateByUrl("/product-form"))})}getPolicyList(){this.policyService.getPolicyList(this.policyForm.getRawValue()).toPromise().then(e=>{if(e){this.quoList=e;for(var i=0;i<this.quoList.length;i++)this.quoList[i].icon&&(this.quoList[i].productImage=this.Default_DOWNLOAD_URL+"/"+this.quoList[i].icon);this.cdRef.detectChanges(),this.commonList&&this.commonList.detchChange()}})}editLayout(e){(0,l.D)([this.prodctService.findOne(e.productId),this.customerService.findOne(e.customerId||1).pipe((0,p.K)(i=>(0,f.of)(void 0)))]).toPromise().then(i=>{i[0]&&(this.prodctService.createingProd=i[0],this.prodctService.creatingCustomer=i[1],this.prodctService.type="policy",this.prodctService.viewType="policy",this.prodctService.editData=e,this.prodctService.referenceID=e.quotationId,this.prodctService.creatingLeadId=e.leadId,this.router.navigateByUrl("/product-form"))})}FormatedDate(e){return h(e,"YYYYMMDD").format("MM/DD/YYYY")}actionBtn(e){"view"==e.cmd?this.goViewDetail(e.data):"edit"==e.cmd&&this.editLayout(e.data)}goViewDetail(e){this.prodctService.findOne(e.productId).toPromise().then(i=>{i&&(this.prodctService.createingProd=i,this.prodctService.previewType="policy",this.prodctService.editData=e,this.router.navigateByUrl("/resourse-detail"))})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(T.FF),t.Y36(M.f),t.Y36(y.F0),t.Y36(F.d),t.Y36(t.sBO),t.Y36(Y.v),t.Y36(P.q))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-policy"]],viewQuery:function(e,i){if(1&e&&(t.Gf(I.I,5),t.Gf(C.o,5)),2&e){let a;t.iGM(a=t.CRH())&&(i.matTable=a.first),t.iGM(a=t.CRH())&&(i.commonList=a.first)}},features:[t._Bn([{provide:v._A,useClass:m.t7,deps:[u.Ad]},{provide:u.sG,useValue:A.Gs}])],decls:30,vars:22,consts:[[1,"row"],[1,"col-12","text-right","pb-5"],[1,"btn","btn-light-dark","new-btn-dark-gray","mr-2","btn-round",3,"ngClass","click"],[1,"btn","btn-light-dark","new-btn-dark-gray","btn-round",3,"ngClass","click"],[1,"col-12"],[1,"card","card-custom","gutter-b","data"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],[1,"flaticon2-magnifier-tool","search-tool",3,"click"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],["remove-host","",3,"formInput","colClass"],[1,"card-body","customer-card-body"],["class","data-list",3,"data","type","btnEvent",4,"ngIf"],[1,"data-list",3,"data","type","btnEvent"],["commonList",""]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"button",2),t.NdJ("click",function(){return i.changeView("myview")}),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"button",3),t.NdJ("click",function(){return i.changeView("team")}),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.qZA(),t.TgZ(8,"div",4),t.TgZ(9,"div",5),t.TgZ(10,"div",6),t.TgZ(11,"div",7),t.TgZ(12,"h3",8),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.qZA(),t.TgZ(15,"div",9),t.TgZ(16,"span",10),t.NdJ("click",function(){return i.getPolicyList()}),t.qZA(),t.TgZ(17,"button",11),t.NdJ("click",function(){return i.cancel()}),t.TgZ(18,"span",12),t._uU(19),t.ALo(20,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",13),t.TgZ(22,"form",14),t.TgZ(23,"div",15),t._UZ(24,"app-start-end-date",16),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"div",0),t.TgZ(26,"div",4),t.TgZ(27,"div",5),t.TgZ(28,"div",17),t.YNc(29,b,2,2,"app-common-list-2",18),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngClass",t.VKq(18,L,!i.isTeam)),t.xp6(1),t.Oqu(t.lcZ(4,10,"FORM.my_view")),t.xp6(2),t.Q6J("ngClass",t.VKq(20,L,i.isTeam)),t.xp6(1),t.Oqu(t.lcZ(7,12,"FORM.team_veiw")),t.xp6(7),t.Oqu(t.lcZ(14,14,"FORM.application_list")),t.xp6(6),t.Oqu(t.lcZ(20,16,"FORM.btn_cancel")),t.xp6(3),t.Q6J("formGroup",i.policyForm),t.xp6(2),t.Q6J("formInput",i.policyForm)("colClass","col-md-6"),t.xp6(5),t.Q6J("ngIf",i.quoList.length>0))},directives:[s.mk,c._Y,c.JL,c.sg,N.Q,R.Z,s.O5,C.o],pipes:[U.X],styles:[".activated[_ngcontent-%COMP%]{background-color:#ff8100!important;color:#fff!important}"]}),n})();var B=o(87626),x=o(96152),Q=o(45598);let V=(()=>{class n{ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-policy-page"]],decls:1,vars:0,template:function(e,i){1&e&&t._UZ(0,"router-outlet")},directives:[y.lC],encapsulation:2}),n})();var G=o(63699),K=o(92275);let W=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.ez,B.vi,c.u5,c.UX,T.bz,x.ProductsModule,G.j,Q.fA,K.W,y.Bz.forChild([{path:"application",component:V,children:[{path:"list",component:J}]}])]]}),n})()}}]);