"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8332],{88332:(I,l,t)=>{t.r(l),t.d(l,{QrModule:()=>g});var s=t(69808),d=t(96592),a=t(93075),u=t(69544),v=t(63272),p=t(41889),m=t(4128),f=t(70262),h=t(39646),n=t(5e3),y=t(78680),S=t(53638);let Q=(()=>{class o{constructor(r,i,e,C){this.activatedRoute=r,this.prodctService=i,this.router=e,this.policyService=C}ngOnInit(){this.activatedRoute.queryParams.subscribe(r=>{this.goViewDetail(r.productId,r.resourceId)})}goViewDetail(r,i){(0,m.D)([this.prodctService.findOne(r),this.policyService.findOne(i).pipe((0,f.K)(e=>(0,h.of)(void 0)))]).toPromise().then(e=>{e[0]&&e[1]&&(this.prodctService.createingProd=e[0],this.prodctService.previewType="policy",this.prodctService.editData=e[1],this.router.navigateByUrl("/resourse-detail"))})}}return o.\u0275fac=function(r){return new(r||o)(n.Y36(d.gz),n.Y36(y.f),n.Y36(d.F0),n.Y36(S.d))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-qr-source-link"]],decls:0,vars:0,template:function(r,i){},styles:[""]}),o})(),g=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({providers:[s.uU,s.JJ],imports:[[s.ez,u.vi,a.u5,a.UX,v.bz,p.Q,d.Bz.forChild([{path:"",component:Q}])]]}),o})()}}]);