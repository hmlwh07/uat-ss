"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[949],{90949:(h,d,l)=>{l.d(d,{I:()=>Dt});var t=l(83668),s=l(18510),r=l(92027),c=l(12386),f=l(87577),m=l(92070),T=l(45351);let u=(()=>{class n{constructor(e,i,o){this.matPag=e,this.vr=i,this.ren=o,this._currentPage=1,this._pageGapTxt="...",this.directiveLoaded=!1,this._buttons=[],this._showTotalPages=3}get showTotalPages(){return this._showTotalPages}buildPageNumbers(e,i){let o=!1,_=!1,x=e,w=this.matPag.pageIndex,b=w-this._showTotalPages/2,v=w+this._showTotalPages/2;for(let g=0;g<x;g+=1)g<this._showTotalPages&&w<this._showTotalPages&&g>b||g>=b&&g<=v?this.ren.insertBefore(i,this.createPage(g,this.matPag.pageIndex),null):(g<b&&!_&&(this.ren.insertBefore(i,this.createPage(this._pageGapTxt,this.matPag.pageIndex),null),_=!0),g>v&&!o&&(this.ren.insertBefore(i,this.createPage(this._pageGapTxt,this.matPag.pageIndex),null),o=!0))}createPage(e,i){const o=this.ren.createElement("mat-button");this.ren.addClass(o,"mat-icon-button");const _=isNaN(e)?this._pageGapTxt:+(e+1),x=this.ren.createText(_+"");switch(this.ren.addClass(o,"mat-custom-page"),e){case i:this.ren.setAttribute(o,"disabled","disabled");break;case this._pageGapTxt:this.ren.setAttribute(o,"disabled","disabled"),this.ren.addClass(o,"cus-disabled");break;default:this.ren.listen(o,"click",()=>{this._currentPage=e,this.switchPage(e)})}return this.ren.appendChild(o,x),o}initPageRange(){const e=this.vr.element.nativeElement.querySelector(".mat-paginator-range-actions");this.vr.element.nativeElement.querySelector("div.mat-paginator-range-actions div.btn_custom-paging-container")&&this.ren.removeChild(e,this.vr.element.nativeElement.querySelector("div.mat-paginator-range-actions div.btn_custom-paging-container"));const i=this.ren.createElement("div"),o=this.vr.element.nativeElement.childNodes[0].childNodes[0].childNodes[2].childNodes[5];this.ren.addClass(i,"btn_custom-paging-container"),this.ren.insertBefore(e,i,o);const _=this.vr.element.nativeElement.querySelector("div.mat-paginator-range-actions div.btn_custom-paging-container");_.innerHtml="";const w=this.matPag.getNumberOfPages()>0?this.matPag.getNumberOfPages():this._dumPageTotal;this.buildPageNumbers(w,_)}switchPage(e){this.matPag.pageIndex=e,this.matPag._changePageSize(this.matPag.pageSize)}ngAfterViewInit(){}ngDoCheck(){this.directiveLoaded&&this.initPageRange()}viewInit(e){this._dumPageTotal=e,this.initPageRange(),setTimeout(()=>{this.directiveLoaded=!0},500)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.NW,11),t.Y36(t.s_b),t.Y36(t.Qsj))},n.\u0275dir=t.lG2({type:n,selectors:[["","style-paginator",""]],inputs:{showTotalPages:"showTotalPages"}}),n})();var C=l(1402),y=l(18260),p=l(86019),A=l(64762),M=l(60940);function S(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",8),t.NdJ("click",function(){return t.CHM(e),t.oxw().onActionConfirm()}),t._uU(1," Confirm "),t.qZA()}}function N(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",9),t.NdJ("click",function(){return t.CHM(e),t.oxw().onActionView()}),t._UZ(1,"span",10),t.qZA()}}function Q(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",9),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).onActionEdit()}),t._UZ(1,"span",11),t.qZA()}}function I(n,a){if(1&n&&(t.ynx(0),t.YNc(1,Q,2,0,"a",2),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.viewBtn.edit&&("in_progress"==e.data.status||"fail"==e.data.apiStatus))}}function B(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",9),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).onActionEdit()}),t._UZ(1,"span",11),t.qZA()}}function Z(n,a){if(1&n&&t.YNc(0,B,2,0,"a",2),2&n){const e=t.oxw();t.Q6J("ngIf",e.viewBtn.edit)}}function D(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",12),t.NdJ("click",function(){return t.CHM(e),t.oxw().onActionDelete()}),t._UZ(1,"span",13),t.qZA()}}function P(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",14),t.NdJ("click",function(){return t.CHM(e),t.oxw().onActionDownload()}),t._UZ(1,"span",15),t.qZA()}}function Y(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",16),t.NdJ("click",function(){return t.CHM(e),t.oxw().onActionRerun()}),t._UZ(1,"span",17),t.qZA()}}let k=(()=>{class n{constructor(e){this.alertService=e,this.emitter=new t.vpe,this.data={},this.viewBtn={}}ngOnInit(){console.log("ISDOWNLOAD",this.data)}onActionEdit(){this.emitter.emit({cmd:"edit",data:this.data})}onActionView(){this.emitter.emit({cmd:"view",data:this.data})}ngOnDestroy(){this.emitter.unsubscribe()}onActionDelete(){this.emitter.emit({cmd:"delete",data:this.data})}onActionDownload(){null!=this.data.documentName?this.emitter.emit({cmd:"download",data:this.data}):this.alertService.activate("There is no document to download","Warning").then(e=>(0,A.mG)(this,void 0,void 0,function*(){}))}onActionRerun(){this.emitter.emit({cmd:"rerun",data:this.data})}onActionConfirm(){this.emitter.emit({cmd:"confirm",data:this.data})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(M.c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-action-button"]],inputs:{data:"data",viewBtn:"viewBtn"},outputs:{emitter:"emitter"},decls:9,vars:7,consts:[[2,"white-space","nowrap","text-align","center"],["title","Confirm Form Page","class","btn btn-primary btn-cus btn-sm mx-1",3,"click",4,"ngIf"],["title","Edit Form Page","class","btn btn-primary btn-cus btn-sm mx-1",3,"click",4,"ngIf"],[4,"ngIf","ngIfElse"],["editBtn",""],["title","Edit Form Page","class","btn btn-danger btn-hover-danger btn-sm mx-1",3,"click",4,"ngIf"],["title","Downlaod Form Page","class","btn btn-primary btn-hover-primary btn-sm mx-1",3,"click",4,"ngIf"],["title","Rerun","class","btn btn-primary btn-hover-primary btn-sm mx-1",3,"click",4,"ngIf"],["title","Confirm Form Page",1,"btn","btn-primary","btn-cus","btn-sm","mx-1",3,"click"],["title","Edit Form Page",1,"btn","btn-primary","btn-cus","btn-sm","mx-1",3,"click"],[1,"flaticon-eye"],[1,"flaticon-edit"],["title","Edit Form Page",1,"btn","btn-danger","btn-hover-danger","btn-sm","mx-1",3,"click"],[1,"flaticon-delete"],["title","Downlaod Form Page",1,"btn","btn-primary","btn-hover-primary","btn-sm","mx-1",3,"click"],[1,"flaticon-download"],["title","Rerun",1,"btn","btn-primary","btn-hover-primary","btn-sm","mx-1",3,"click"],[1,"flaticon-refresh"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,S,2,0,"a",1),t.YNc(2,N,2,0,"a",2),t.YNc(3,I,2,1,"ng-container",3),t.YNc(4,Z,1,1,"ng-template",null,4,t.W1O),t.YNc(6,D,2,0,"a",5),t.YNc(7,P,2,0,"a",6),t.YNc(8,Y,2,0,"a",7),t.qZA()),2&e){const o=t.MAs(5);t.xp6(1),t.Q6J("ngIf",i.viewBtn.confirm&&"CONFIRM"!=i.data.status),t.xp6(1),t.Q6J("ngIf",i.viewBtn.view),t.xp6(1),t.Q6J("ngIf",i.viewBtn.editOnState)("ngIfElse",o),t.xp6(3),t.Q6J("ngIf",i.viewBtn.delete),t.xp6(1),t.Q6J("ngIf",i.viewBtn.download),t.xp6(1),t.Q6J("ngIf",i.viewBtn.rerun)}},directives:[p.O5],styles:[""]}),n})();var V=l(15346);function J(n,a){if(1&n&&(t.TgZ(0,"th",16),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,"TABLE."+e.title)," ")}}function $(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"img",18),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("src",o.Default_DOWNLOAD_URL+"/"+e[i.field],t.LSH)}}function F(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"number"),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e[i.field]>0?t.xi3(2,1,e[i.field],"1.2-2"):"0"," ")}}function O(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e[i.field]," ")}}function U(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"titlecase"),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e[i.field]?t.lcZ(2,1,e[i.field]+""):""," ")}}function E(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"uppercase"),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e[i.field]?t.lcZ(2,1,e[i.field]+""):""," ")}}function R(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.hij(" ",o.FormatedDate(e[i.field])," ")}}function L(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"date"),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e[i.field],"dd/MM/yyyy")," ")}}function q(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"date"),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e[i.field],"dd/MM/yyyy - hh:mm")," ")}}function H(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.Gre("label label-custom-round label-inline label-",o.activityStatusColor[e[i.field]],""),t.xp6(1),t.Oqu(o.activityStatus[e[i.field]])}}function j(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.Gre("label label-custom-round label-inline label-",o.leadStatusColor[e[i.field]],""),t.xp6(1),t.Oqu(o.leadStatus[e[i.field]])}}function G(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.Gre("label label-custom-round label-inline label-",o.renewStatusColor[e[i.field]],""),t.xp6(1),t.Oqu(o.renewStatus[e[i.field]])}}function W(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.Gre("label label-custom-round label-inline label-",o.customerStatusColor[e[i.field]],""),t.xp6(1),t.Oqu(o.customerStatus[e[i.field]])}}function z(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.Gre("label label-custom-round label-inline label-",o.prodStatusColor[e[i.field]],""),t.xp6(1),t.Oqu(o.prodStatus[e[i.field]])}}function X(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"lowercase"),t.BQk()),2&n){const e=t.oxw(2).$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.AsE("",e[i.field]," ",t.lcZ(2,2,e.quotationRule+"s")," after creation dates")}}function K(n,a){if(1&n&&(t.ynx(0),t.YNc(1,X,3,4,"ng-container",9),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngIf",e[i.field])}}function tt(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"lowercase"),t.BQk()),2&n){const e=t.oxw(2).$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.AsE("",e[i.field]," ",t.lcZ(2,2,e.policyRule+"s")," after creation dates")}}function et(n,a){if(1&n&&(t.ynx(0),t.YNc(1,tt,3,4,"ng-container",9),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngIf",e[i.field])}}function nt(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"titlecase"),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.hij(" ","30days"==e[i.field]?"30 days":t.lcZ(2,1,e[i.field])," ")}}function it(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.hij(" ",o.getFreq(e[i.field])," ")}}function at(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.ALo(3,"titlecase"),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.Gre("label label-custom-round label-inline label-",o.statusColor[e[i.field]],""),t.xp6(1),t.hij(" ","in_progress"==e[i.field]?"In Progress":t.lcZ(3,4,e[i.field]),"")}}function ot(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.ALo(3,"titlecase"),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.Gre("label label-custom-round label-inline label-",o.statusColor[e[i.field]],""),t.xp6(1),t.hij(" ","draft_application"==e[i.field]?"Draft Application":t.lcZ(3,4,e[i.field]),"")}}function ct(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.AsE(" ",i.prefix?i.prefix:"","","CRM"==e[i.field]?"Management Portal":e[i.field]," ")}}const lt=function(n){return{"text-align":n}};function _t(n,a){if(1&n&&(t.TgZ(0,"td",17),t.YNc(1,$,2,1,"ng-container",9),t.YNc(2,F,3,4,"ng-container",9),t.YNc(3,O,2,1,"ng-container",9),t.YNc(4,U,3,3,"ng-container",9),t.YNc(5,E,3,3,"ng-container",9),t.YNc(6,R,2,1,"ng-container",9),t.YNc(7,L,3,4,"ng-container",9),t.YNc(8,q,3,4,"ng-container",9),t.YNc(9,H,3,4,"ng-container",9),t.YNc(10,j,3,4,"ng-container",9),t.YNc(11,G,3,4,"ng-container",9),t.YNc(12,W,3,4,"ng-container",9),t.YNc(13,z,3,4,"ng-container",9),t.YNc(14,K,2,1,"ng-container",9),t.YNc(15,et,2,1,"ng-container",9),t.YNc(16,nt,3,3,"ng-container",9),t.YNc(17,it,2,1,"ng-container",9),t.YNc(18,at,4,6,"ng-container",9),t.YNc(19,ot,4,6,"ng-container",9),t.YNc(20,ct,2,2,"ng-container",9),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.Q6J("ngStyle",t.VKq(21,lt,e.amtFormat?"right":"left")),t.xp6(1),t.Q6J("ngIf",e.isImg),t.xp6(1),t.Q6J("ngIf",e.amtFormat),t.xp6(1),t.Q6J("ngIf",e.isAttachment),t.xp6(1),t.Q6J("ngIf",e.isTitle),t.xp6(1),t.Q6J("ngIf",e.isUpper),t.xp6(1),t.Q6J("ngIf",e.isDate),t.xp6(1),t.Q6J("ngIf",e.isFromatDate),t.xp6(1),t.Q6J("ngIf",e.isDateTime),t.xp6(1),t.Q6J("ngIf",e.isActivityStatus),t.xp6(1),t.Q6J("ngIf",e.isLeadStatus),t.xp6(1),t.Q6J("ngIf",e.isRenewStatus),t.xp6(1),t.Q6J("ngIf",e.isCustomerStatus),t.xp6(1),t.Q6J("ngIf",e.isProdStatus),t.xp6(1),t.Q6J("ngIf",e.isQuotationDay),t.xp6(1),t.Q6J("ngIf",e.isPolicyDay),t.xp6(1),t.Q6J("ngIf",e.isAllowBackDate),t.xp6(1),t.Q6J("ngIf",e.isPaymentFrequencyType),t.xp6(1),t.Q6J("ngIf",e.isStatus),t.xp6(1),t.Q6J("ngIf",e.isApiStatus),t.xp6(1),t.Q6J("ngIf",!(e.isDate||e.isTitle||e.amtFormat||e.isFromatDate||e.isDateTime||e.isActivityStatus||e.isQuotationDay||e.isAllowBackDate||e.isPaymentFrequencyType||e.isUpper||e.isStatus||e.isApiStatus||e.isProdStatus||e.isImg||e.isCustomerStatus||e.isLeadStatus||e.isRenewStatus))}}function rt(n,a){if(1&n&&(t.TgZ(0,"td",20),t._uU(1),t.ALo(2,"number"),t.qZA()),2&n){const e=t.oxw(3).$implicit,i=t.oxw(2);t.xp6(1),t.Oqu(t.xi3(2,1,i.totalAmount[e.field]||"","1.2-2"))}}function st(n,a){1&n&&(t.ynx(0),t.YNc(1,rt,3,4,"td",19),t.BQk())}function mt(n,a){1&n&&(t.TgZ(0,"label"),t._uU(1,"Total"),t.qZA())}function pt(n,a){if(1&n&&(t.TgZ(0,"td",22),t.YNc(1,mt,2,0,"label",9),t.qZA()),2&n){const e=t.oxw(3).index;t.xp6(1),t.Q6J("ngIf",0==e)}}function gt(n,a){1&n&&t.YNc(0,pt,2,1,"td",21)}function dt(n,a){if(1&n&&(t.ynx(0),t.YNc(1,J,3,3,"th",13),t.YNc(2,_t,21,23,"td",14),t.YNc(3,st,2,0,"ng-container",7),t.YNc(4,gt,1,0,"ng-template",null,15,t.W1O),t.BQk()),2&n){const e=t.MAs(5),i=t.oxw().$implicit,o=t.oxw(2);t.xp6(3),t.Q6J("ngIf",o.calField.includes(i.field)&&o.calTotal)("ngIfElse",e)}}function ut(n,a){if(1&n&&(t.TgZ(0,"th",25),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,"TABLE."+e.title)," ")}}function ft(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"app-action-button",29),t.NdJ("emitter",function(o){return t.CHM(e),t.oxw(5).actionBtn(o)}),t.qZA()}if(2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.Q6J("data",e)("viewBtn",i.btn)}}function xt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"span",30),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit;return t.oxw(4).createPolicyBtn(o)}),t._uU(1),t.ALo(2,"titlecase"),t.qZA()}if(2&n){const e=t.oxw(3).$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,e.field))}}function wt(n,a){if(1&n&&(t.TgZ(0,"td",26),t.YNc(1,ft,1,2,"app-action-button",27),t.YNc(2,xt,3,3,"span",28),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngIf","action"==e.type),t.xp6(1),t.Q6J("ngIf","text"==e.type)}}function ht(n,a){1&n&&t._UZ(0,"td",32)}function Tt(n,a){1&n&&(t.ynx(0),t.YNc(1,ht,1,0,"td",31),t.BQk())}function bt(n,a){if(1&n&&(t.YNc(0,ut,3,3,"th",23),t.YNc(1,wt,3,2,"td",24),t.YNc(2,Tt,2,0,"ng-container",9)),2&n){const e=t.oxw(3);t.xp6(2),t.Q6J("ngIf",e.calTotal)}}function Ct(n,a){if(1&n&&(t.ynx(0),t.ynx(1,11),t.YNc(2,dt,6,2,"ng-container",7),t.YNc(3,bt,3,1,"ng-template",null,12,t.W1O),t.BQk(),t.BQk()),2&n){const e=a.$implicit,i=t.MAs(4);t.xp6(1),t.s9C("matColumnDef",e.field),t.xp6(1),t.Q6J("ngIf","field"==e.type)("ngIfElse",i)}}function vt(n,a){1&n&&t._UZ(0,"tr",33)}const yt=function(n,a){return{hovered:n,highlighted:a}};function At(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tr",35),t.NdJ("click",function(){const _=t.CHM(e).$implicit;return t.oxw(3).selectRow(_)})("mouseover",function(){return t.CHM(e).$implicit.hovered=!0})("mouseout",function(){return t.CHM(e).$implicit.hovered=!1}),t.qZA()}if(2&n){const e=a.$implicit,i=t.oxw(3);t.Q6J("ngClass",t.WLB(1,yt,e.hovered,i.selection.isSelected(e)))}}function Mt(n,a){if(1&n&&(t.ynx(0),t.YNc(1,At,1,4,"tr",34),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns)}}function St(n,a){1&n&&t._UZ(0,"tr",37)}function Nt(n,a){if(1&n&&t.YNc(0,St,1,0,"tr",36),2&n){const e=t.oxw(2);t.Q6J("matRowDefColumns",e.displayedColumns)}}function Qt(n,a){1&n&&t._UZ(0,"tr",39)}function It(n,a){if(1&n&&(t.ynx(0),t.YNc(1,Qt,1,0,"tr",38),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("matFooterRowDef",e.displayedColumns)}}function Bt(n,a){if(1&n&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t.TgZ(2,"table",4),t.YNc(3,Ct,5,3,"ng-container",5),t.YNc(4,vt,1,0,"tr",6),t.YNc(5,Mt,2,1,"ng-container",7),t.YNc(6,Nt,1,1,"ng-template",null,8,t.W1O),t.YNc(8,It,2,1,"ng-container",9),t.qZA(),t.qZA(),t._UZ(9,"mat-paginator",10),t.qZA()),2&n){const e=t.MAs(7),i=t.oxw();t.xp6(2),t.Q6J("dataSource",i.dataSource),t.xp6(1),t.Q6J("ngForOf",i.colum),t.xp6(1),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("ngIf",i.selectable)("ngIfElse",e),t.xp6(3),t.Q6J("ngIf",i.calTotal),t.xp6(1),t.Q6J("pageSizeOptions",i.pageSizeOptions)}}function Zt(n,a){1&n&&(t.TgZ(0,"div",40),t.TgZ(1,"span",41),t._uU(2,"There is no data"),t.qZA(),t.qZA())}let Dt=(()=>{class n{constructor(e){this.cdf=e,this.emitter=new t.vpe,this.dataSource=new c.by([]),this.displayedColumns=[],this.data=[],this.colum=[],this.pageSizeOptions=[5,10,20],this.selectable=!1,this.rowSelected=new t.vpe,this.Default_DOWNLOAD_URL=`${y.N.apiUrl}/attachment-downloader`,this.totalAmount={},this.calTotal=!1,this.calField=[],this.activityStatusColor={"01":"secondary","02":"primary","03":"danger"},this.prodStatus=C.eM,this.prodStatusColor={"01":"secondary","02":"primary"},this.statusColor={in_progress:"secondary",complete:"primary",approved:"primary",cancel:"danger",submitted:"success",success:"success",sending:"info",fail:"danger",draft_application:"secondary","draft application":"secondary"},this.customerStatusColor={A:"secondary",I:"danger"},this.customerStatus={A:"Active",I:"Inactive"},this.leadStatus={"01":"Open","02":"Assigned","03":"Folllow Up","04":"Reject","05":"Win","06":"Lost"},this.leadStatusColor={"01":"default","04":"default","05":"success","03":"secondary","02":"primary","06":"danger"},this.renewStatus={DRAFT:"Draft",ACTIVE:"Active",CONFIRM:"Confirmed"},this.renewStatusColor={DRAFT:"primary",ACTIVE:"success",CONFIRM:"secondary"},this.selection=new T.Ov(!1,[]),this.activityStatus=s.f}ngOnInit(){}ngAfterViewInit(){this.cdf.detectChanges()}reChangeData(){this.dataSource=new c.by(this.data),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort;let e=Math.ceil(this.data.length/5);this.calTotal&&this.calTotalData(),this.customPaginator&&this.customPaginator.viewInit(e)}ngOnDestroy(){this.emitter.unsubscribe()}actionBtn(e){this.emitter.emit(e)}FormatedDate(e){return m(e,"YYYYMMDD").format("DD/MM/YYYY")}getFreq(e){let i="",o=e.split(", ");for(const _ of o)"lump"==_?i=i.length>2?i+", Lump Sum":"Lump Sum":"annually"==_&&(i=i.length>2?i+", Semi Annually":"Semi Annually");return i}createPolicyBtn(e){this.emitter.emit({cmd:"create",data:e})}getStatusColor(e){}selectRow(e){this.selection.toggle(e),this.selection.isSelected(e)?this.rowSelected.emit(e):this.rowSelected.emit(null)}calTotalData(){this.totalAmount=[],this.data.forEach(e=>{this.calField.map(i=>{e[i]&&(this.totalAmount[i]=this.totalAmount[i]?this.totalAmount[i]+parseFloat(e[i].toString().split(",").join("")):parseFloat(e[i].toString().split(",").join("")))})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-material-table-view"]],viewQuery:function(e,i){if(1&e&&(t.Gf(r.NW,5),t.Gf(u,5),t.Gf(f.YE,5)),2&e){let o;t.iGM(o=t.CRH())&&(i.paginator=o.first),t.iGM(o=t.CRH())&&(i.customPaginator=o.first),t.iGM(o=t.CRH())&&(i.sort=o.first)}},inputs:{displayedColumns:"displayedColumns",data:"data",colum:"colum",pageSizeOptions:"pageSizeOptions",selectable:"selectable",calTotal:"calTotal",calField:"calField"},outputs:{emitter:"emitter",rowSelected:"rowselect"},decls:2,vars:2,consts:[["class","example-preview",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"example-preview"],[1,"example-container","table-responsive","angular-bootstrap-table"],["mat-table","","matSort","",1,"table","table-head-custom","table-vertical-center",2,"margin-bottom","0px",3,"dataSource"],[4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],[4,"ngIf","ngIfElse"],["noSelectTable",""],[4,"ngIf"],["style-paginator","","showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],[3,"matColumnDef"],["actTemp",""],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",3,"ngStyle",4,"matCellDef"],["footer",""],["mat-header-cell","","mat-sort-header",""],["mat-cell","",3,"ngStyle"],["alt","","srcset","",1,"table-img",3,"src"],["mat-footer-cell","","style","padding: 0 10px;",4,"matFooterCellDef"],["mat-footer-cell","",2,"padding","0 10px"],["mat-footer-cell","","style","padding-left: 10px;",4,"matFooterCellDef"],["mat-footer-cell","",2,"padding-left","10px"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],[3,"data","viewBtn","emitter",4,"ngIf"],["class","text-primary","style","text-decoration: underline;white-space: nowrap;cursor: pointer;",3,"click",4,"ngIf"],[3,"data","viewBtn","emitter"],[1,"text-primary",2,"text-decoration","underline","white-space","nowrap","cursor","pointer",3,"click"],["mat-footer-cell","",4,"matFooterCellDef"],["mat-footer-cell",""],["mat-header-row",""],["mat-row","",3,"ngClass","click","mouseover","mouseout",4,"matRowDef","matRowDefColumns"],["mat-row","",3,"ngClass","click","mouseover","mouseout"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-row",""],["mat-footer-row","",4,"matFooterRowDef"],["mat-footer-row",""],[1,"text-center"],[2,"color","gray"]],template:function(e,i){1&e&&(t.YNc(0,Bt,10,7,"div",0),t.YNc(1,Zt,3,0,"div",1)),2&e&&(t.Q6J("ngIf",i.data.length>0),t.xp6(1),t.Q6J("ngIf",0==i.data.length))},directives:[p.O5,c.BZ,f.YE,p.sg,c.as,r.NW,u,c.w1,c.fO,c.Dz,c.ge,f.nU,c.ev,p.PC,c.mD,c.yh,k,c.XQ,c.nj,c.Gk,p.mk,c.Ke,c.Q2],pipes:[V.X,p.JJ,p.rS,p.gd,p.uU,p.i8],styles:[".mat-paginator-container[_ngcontent-%COMP%]{justify-content:space-between}.label.label-custom-round[_ngcontent-%COMP%]{line-height:20px;white-space:nowrap;border-radius:10px;min-width:80px;color:#fff}.table-img[_ngcontent-%COMP%]{max-width:50px;max-height:50px}.label-default[_ngcontent-%COMP%]{color:#000!important}.act-btn-box[_ngcontent-%COMP%]{background-color:#005f99;border-color:#005f99;color:#fff!important;text-decoration:none;padding:.35rem .75rem;font-size:.925rem;line-height:1.35;border-radius:.42rem}"],changeDetection:0}),n})()},18510:(h,d,l)=>{l.d(d,{Y:()=>t,f:()=>s});var t=(()=>{return(r=t||(t={})).FEILD="field",r.TEXT="text",r.RENEW="renew",r.ACTION="action",t;var r})();const s={"01":"Open","02":"Complete","03":"Cancel"}},15346:(h,d,l)=>{l.d(d,{X:()=>r});var t=l(83668),s=l(59832);let r=(()=>{class c{constructor(m){this._languageService=m}transform(m){if(m){let T=this._languageService.getSelectedLanguage(),u=m.split(".");if(u.length>=2)try{return this._languageService.langs[T][u[0]][u[1]]||u[1]}catch(C){return m}}return m}}return c.\u0275fac=function(m){return new(m||c)(t.Y36(s.K,16))},c.\u0275pipe=t.Yjl({name:"translate",type:c,pure:!1}),c})()},1402:(h,d,l)=>{l.d(d,{it:()=>s,eM:()=>r});var s=(()=>{return(c=s||(s={})).DYN="dyn",c.STATIC="static",s;var c})();const r={"01":"Draft","02":"Active"}}}]);