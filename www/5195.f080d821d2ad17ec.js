"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5195],{25195:(E,m,n)=>{n.r(m),n.d(m,{RenewManagementListModule:()=>M});var p=n(86019),d=n(4205),y=n(64762),r=n(49133),u=n(90949),s=n(18510);const f=[{title:"Policy Number",type:s.Y.FEILD,field:"policyNumber"},{title:"Product Code",type:s.Y.FEILD,field:"productCode"},{title:"Agent Name",type:s.Y.FEILD,field:"agentName"},{title:"Premium",type:s.Y.FEILD,field:"premium",amtFormat:!0},{title:"Currency",type:s.Y.FEILD,field:"currency"},{title:"Policy Inception Date",type:s.Y.FEILD,field:"policyInceptionDate"},{title:"Policy Expiry Date",type:s.Y.FEILD,field:"policyExpiryDate"},{title:"Status",type:s.Y.FEILD,field:"status",isRenewStatus:!0},{title:"Actions",type:s.Y.ACTION,field:"actions",btn:{confirm:!0,view:!0,download:!0}}],g=["policyNumber","productCode","agentName","premium","currency","policyInceptionDate","policyExpiryDate","status","actions"];var e=n(83668),h=n(52902),v=n(60940);let w=(()=>{class a{constructor(t,i,o,c,F){this.fb=t,this.router=i,this.cdf=o,this.renewService=c,this.alertService=F,this.ELEMENT_COL=f,this.displayedColumns=g,this.renewList=[],this.activityStatus=s.f,this.loadForm()}ngOnInit(){}ngAfterViewInit(){this.getList()}cancel(){}loadForm(){this.actForm=new r.cw({type:new r.NI(""),title:new r.NI(null),status:new r.NI(""),startDate:new r.NI(null),endDate:new r.NI(null)})}getList(){this.renewService.getRenewList(this.actForm.value).toPromise().then(t=>{t&&(this.renewList=t,this.cdf.detectChanges(),this.matTable.reChangeData())})}actionBtn(t){"edit"==t.cmd||"view"==t.cmd?this.navigateToDetail(t.data):"confirm"==t.cmd&&this.confirmRenew(t.data)}isControlValid(t){const i=this.actForm.controls[t];return i.valid&&(i.dirty||i.touched)}isControlInvalid(t){const i=this.actForm.controls[t];return i.invalid&&(i.dirty||i.touched)}controlHasError(t,i){const o=this.actForm.controls[i];return o.hasError(t)&&(o.dirty||o.touched)}isControlTouched(t){const i=this.actForm.controls[t];return i.dirty||i.touched}navigateToDetail(t){this.router.navigate(["sale/renew-policy/detail"],{queryParams:{data:JSON.stringify(t)}})}confirmRenew(t){"confirm"!=t.status&&this.alertService.activate("Are you sure want to confirm?","Warning Message").then(i=>(0,y.mG)(this,void 0,void 0,function*(){i&&this.renewService.confirmRenew(t.policyNumber).toPromise().then(o=>{o&&(console.log(o),this.alertService.activate("This record was updated","Success Message"),this.navigateToDetail(o))})}))}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(r.qu),e.Y36(d.F0),e.Y36(e.sBO),e.Y36(h.R),e.Y36(v.c))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-renew-management-list"]],viewQuery:function(t,i){if(1&t&&e.Gf(u.I,5),2&t){let o;e.iGM(o=e.CRH())&&(i.matTable=o.first)}},decls:5,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","emitter"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"app-material-table-view",4),e.NdJ("emitter",function(c){return i.actionBtn(c)}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("data",i.renewList)("colum",i.ELEMENT_COL)("displayedColumns",i.displayedColumns))},directives:[u.I],styles:[".col-form-label[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.form-group.row[_ngcontent-%COMP%]{align-items:center}"]}),a})();var C=n(87626),L=n(45598),D=n(57842),I=n(63699);let M=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[p.ez,r.u5,r.UX,C.vi,L.fA,D.A0,I.j,d.Bz.forChild([{path:"",component:w}])]]}),a})()}}]);