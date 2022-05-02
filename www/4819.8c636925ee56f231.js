"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4819],{64819:(y,u,a)=>{a.r(u),a.d(u,{FnaListModule:()=>M});var r=a(86019),f=a(4205),v=a(49133),g=a(87626),A=a(45598),d=a(64762),h=a(90949),L=a(26106),p=a(63871),t=a(83668),C=a(28210),F=a(95849),m=a(67198),T=a(85993),O=a(60940);let b=(()=>{class s{constructor(i,e,n,o,c,S,D){this.cdf=i,this.router=e,this.fnaService=n,this.fnaListService=o,this.authService=c,this.modalService=S,this.alertService=D,this.ELEMENT_COL=p.q,this.displayedColumns=p.I,this.fnaList=[],this.user={},this.isActive=!1}ngOnInit(){this.user=this.authService.currentUserValue,this.getAllFNA()}actionBtn(i){return(0,d.mG)(this,void 0,void 0,function*(){this.fnaService.fnaUpdateProducts=[],"edit"==i.cmd?(this.indexObj=i.data,this.createOrEdit("edit",i.data.id)):(this.indexObj=null,yield this.delete(i.data.id))})}displayFNAType(){const i=this.modalService.open(L.P,{size:"xl",backdrop:!1});i.componentInstance.type="modal",i.result.then(()=>{},e=>{e&&("BRAM"==e.fnaType&&this.router.navigate(["/fna/fna-bram"],{queryParams:{passValue:JSON.stringify({res:e})}}),"LPP"==e.fnaType&&this.router.navigate(["/fna/fna-detail"],{queryParams:{passValue:JSON.stringify(e)}}))})}createOrEdit(i,e){return(0,d.mG)(this,void 0,void 0,function*(){let n;this.indexObj&&(n={conductedBy:this.indexObj.conductedBy,createdAt:this.indexObj.createdAt,createdBy:this.indexObj.createdBy,customerId:this.indexObj.customerId,updatedAt:this.indexObj.updatedAt,fnaId:e,type:"type",pageStatus:i}),this.router.navigate("BRAM"==this.indexObj.fnaType?["/fna/fna-bram"]:["/fna/fna-detail"],{queryParams:{passValue:JSON.stringify(n)}})})}getAllFNA(){return(0,d.mG)(this,void 0,void 0,function*(){yield this.fnaListService.findAll().toPromise().then(i=>{if(this.fnaList=[],i){this.fnaList=i;for(var e=0;e<this.fnaList.length;e++)this.fnaList[e].createdAt=this.convertDateFormatMMDDYYY(this.fnaList[e].createdAt),this.fnaList[e].conductedBy=this.user.username;this.cdf.detectChanges(),this.matTable.reChangeData()}})})}delete(i){return(0,d.mG)(this,void 0,void 0,function*(){this.alertService.activate("Are you sure want to delete?","Warning Message").then(e=>(0,d.mG)(this,void 0,void 0,function*(){e&&(yield this.fnaListService.delete(i).toPromise().then(n=>(0,d.mG)(this,void 0,void 0,function*(){this.fnaList=this.fnaList.filter(o=>o.id!==i),this.cdf.detectChanges(),this.matTable.reChangeData(),this.alertService.activate("This record was deleted","Success Message").then(o=>{})})))}))})}convertDateFormatMMDDYYY(i){var e=new Date(i),n=String(e.getDate()).padStart(2,"0");return String(e.getMonth()+1).padStart(2,"0")+"/"+n+"/"+e.getFullYear()}convertDateFormatDDMMYYY(i){var e=new Date(i);return String(e.getDate()).padStart(2,"0")+"/"+String(e.getMonth()+1).padStart(2,"0")+"/"+e.getFullYear()}toggle(){this.isActive=!this.isActive}}return s.\u0275fac=function(i){return new(i||s)(t.Y36(t.sBO),t.Y36(f.F0),t.Y36(C.T),t.Y36(F.i),t.Y36(m.e8),t.Y36(T.FF),t.Y36(O.c))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-fna-list"]],viewQuery:function(i,e){if(1&i&&t.Gf(h.I,5),2&i){let n;t.iGM(n=t.CRH())&&(e.matTable=n.first)}},decls:12,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar",2,"position","relative"],["type","button",1,"btn","btn-primary","btn-circle",3,"click"],[1,"flaticon2-plus"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","emitter"]],template:function(i,e){1&i&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"FNA List"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return e.displayFNAType()}),t._UZ(9,"span",8),t.qZA(),t.qZA(),t.qZA(),t.TgZ(10,"div",9),t.TgZ(11,"app-material-table-view",10),t.NdJ("emitter",function(o){return e.actionBtn(o)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&i&&(t.xp6(11),t.Q6J("data",e.fnaList)("colum",e.ELEMENT_COL)("displayedColumns",e.displayedColumns))},directives:[h.I],styles:[".popover[_ngcontent-%COMP%]{background-color:#fff;pointer-events:none;opacity:0;position:absolute;transition:all .5s ease 0s;margin:55px 0 0 -40px;width:100px;border-radius:0;padding:6px}.popover[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{line-height:24px;cursor:pointer}.popover[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer}.active[_ngcontent-%COMP%]{opacity:1;pointer-events:auto}"]}),s})(),M=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[m.e8],imports:[[r.ez,v.u5,v.UX,g.vi,A.fA,f.Bz.forChild([{path:"",component:b}])]]}),s})()},63871:(y,u,a)=>{a.d(u,{q:()=>f,I:()=>v});var r=a(18510);const f=[{title:"Date",type:r.Y.FEILD,field:"createdAt"},{title:"FNA Type",type:r.Y.FEILD,field:"fnaType"},{title:"Conducted By",type:r.Y.FEILD,field:"conductedBy"},{title:"Actions",type:r.Y.ACTION,field:"actions",btn:{edit:!0,delete:!0}}],v=["createdAt","fnaType","conductedBy","actions"]}}]);