"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5195],{25195:(T,m,i)=>{i.r(m),i.d(m,{RenewManagementListModule:()=>F});var g=i(86019),d=i(4205),a=i(49133),u=i(90949),r=i(18510);const f=[{title:"Policy Number",type:r.Y.FEILD,field:"policyNumber"},{title:"Product Code",type:r.Y.FEILD,field:"productCode"},{title:"Agent Name",type:r.Y.FEILD,field:"agentName"},{title:"Premium",type:r.Y.FEILD,field:"premium",amtFormat:!0},{title:"Currency",type:r.Y.FEILD,field:"currency"},{title:"Status",type:r.Y.FEILD,field:"status",isRenewStatus:!0},{title:"Actions",type:r.Y.ACTION,field:"actions",btn:{confirm:!0,view:!0,download:!0}}],h=["policyNumber","productCode","agentName","premium","currency","status","actions"];var e=i(83668),p=i(52902),v=i(60940);let y=(()=>{class o{constructor(t,n,s,c,R){this.fb=t,this.router=n,this.cdf=s,this.renewService=c,this.alertService=R,this.ELEMENT_COL=f,this.displayedColumns=h,this.renewList=[],this.activityStatus=r.f,this.loadForm()}ngOnInit(){}ngAfterViewInit(){this.getList()}cancel(){}loadForm(){this.actForm=new a.cw({type:new a.NI(""),title:new a.NI(null),status:new a.NI(""),startDate:new a.NI(null),endDate:new a.NI(null)})}getList(){this.renewService.getRenewList(this.actForm.value).toPromise().then(t=>{t&&(this.renewList=t,this.cdf.detectChanges(),this.matTable.reChangeData())})}actionBtn(t){"edit"==t.cmd||"view"==t.cmd?this.navigateToDetail(t.data):"confirm"==t.cmd&&this.confirmRenew(t.data)}isControlValid(t){const n=this.actForm.controls[t];return n.valid&&(n.dirty||n.touched)}isControlInvalid(t){const n=this.actForm.controls[t];return n.invalid&&(n.dirty||n.touched)}controlHasError(t,n){const s=this.actForm.controls[n];return s.hasError(t)&&(s.dirty||s.touched)}isControlTouched(t){const n=this.actForm.controls[t];return n.dirty||n.touched}navigateToDetail(t){this.router.navigate(["sale/renew-policy/detail"],{queryParams:{data:JSON.stringify(t)}})}confirmRenew(t){"confirm"!=t.status&&this.renewService.confirmRenew(t.policyNumber).toPromise().then(n=>{n&&(console.log(n),this.alertService.activate("This record was updated","Success Message"),this.navigateToDetail(n))})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(a.qu),e.Y36(d.F0),e.Y36(e.sBO),e.Y36(p.R),e.Y36(v.c))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-renew-management-list"]],viewQuery:function(t,n){if(1&t&&e.Gf(u.I,5),2&t){let s;e.iGM(s=e.CRH())&&(n.matTable=s.first)}},decls:5,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","emitter"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"app-material-table-view",4),e.NdJ("emitter",function(c){return n.actionBtn(c)}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("data",n.renewList)("colum",n.ELEMENT_COL)("displayedColumns",n.displayedColumns))},directives:[u.I],styles:[".col-form-label[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}.form-group.row[_ngcontent-%COMP%]{align-items:center}"]}),o})();var w=i(87626),C=i(45598),L=i(57842),M=i(63699);let F=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.ez,a.u5,a.UX,w.vi,C.fA,L.A0,M.j,d.Bz.forChild([{path:"",component:y}])]]}),o})()}}]);