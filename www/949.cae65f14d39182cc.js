"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[949],{90949:(w,g,l)=>{l.d(g,{I:()=>Nt});var t=l(83668),p=l(18510),r=l(92027),c=l(12386),f=l(87577),b=l(92070),C=l(45351);let h=(()=>{class n{constructor(e,i,o){this.matPag=e,this.vr=i,this.ren=o,this._currentPage=1,this._pageGapTxt="...",this.directiveLoaded=!1,this._buttons=[],this._showTotalPages=3}get showTotalPages(){return this._showTotalPages}buildPageNumbers(e,i){let o=!1,_=!1,d=e,u=this.matPag.pageIndex,x=u-this._showTotalPages/2,T=u+this._showTotalPages/2;for(let m=0;m<d;m+=1)m<this._showTotalPages&&u<this._showTotalPages&&m>x||m>=x&&m<=T?this.ren.insertBefore(i,this.createPage(m,this.matPag.pageIndex),null):(m<x&&!_&&(this.ren.insertBefore(i,this.createPage(this._pageGapTxt,this.matPag.pageIndex),null),_=!0),m>T&&!o&&(this.ren.insertBefore(i,this.createPage(this._pageGapTxt,this.matPag.pageIndex),null),o=!0))}createPage(e,i){const o=this.ren.createElement("mat-button");this.ren.addClass(o,"mat-icon-button");const _=isNaN(e)?this._pageGapTxt:+(e+1),d=this.ren.createText(_+"");switch(this.ren.addClass(o,"mat-custom-page"),e){case i:this.ren.setAttribute(o,"disabled","disabled");break;case this._pageGapTxt:this.ren.setAttribute(o,"disabled","disabled"),this.ren.addClass(o,"cus-disabled");break;default:this.ren.listen(o,"click",()=>{this._currentPage=e,this.switchPage(e)})}return this.ren.appendChild(o,d),o}initPageRange(){const e=this.vr.element.nativeElement.querySelector(".mat-paginator-range-actions");this.vr.element.nativeElement.querySelector("div.mat-paginator-range-actions div.btn_custom-paging-container")&&this.ren.removeChild(e,this.vr.element.nativeElement.querySelector("div.mat-paginator-range-actions div.btn_custom-paging-container"));const i=this.ren.createElement("div"),o=this.vr.element.nativeElement.childNodes[0].childNodes[0].childNodes[2].childNodes[5];this.ren.addClass(i,"btn_custom-paging-container"),this.ren.insertBefore(e,i,o);const _=this.vr.element.nativeElement.querySelector("div.mat-paginator-range-actions div.btn_custom-paging-container");_.innerHtml="";const u=this.matPag.getNumberOfPages()>0?this.matPag.getNumberOfPages():this._dumPageTotal;this.buildPageNumbers(u,_)}switchPage(e){this.matPag.pageIndex=e,this.matPag._changePageSize(this.matPag.pageSize)}ngAfterViewInit(){}ngDoCheck(){this.directiveLoaded&&this.initPageRange()}viewInit(e){this._dumPageTotal=e,this.initPageRange(),setTimeout(()=>{this.directiveLoaded=!0},500)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.NW,11),t.Y36(t.s_b),t.Y36(t.Qsj))},n.\u0275dir=t.lG2({type:n,selectors:[["","style-paginator",""]],inputs:{showTotalPages:"showTotalPages"}}),n})();var v=l(1402),y=l(18260),s=l(86019);function A(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",7),t.NdJ("click",function(){return t.CHM(e),t.oxw().onActionConfirm()}),t._uU(1," Confirm "),t.qZA()}}function M(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",8),t.NdJ("click",function(){return t.CHM(e),t.oxw().onActionView()}),t._UZ(1,"span",9),t.qZA()}}function N(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",8),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).onActionEdit()}),t._UZ(1,"span",10),t.qZA()}}function S(n,a){if(1&n&&(t.ynx(0),t.YNc(1,N,2,0,"a",2),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.viewBtn.edit&&("in_progress"==e.data.status||"fail"==e.data.apiStatus))}}function Q(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",8),t.NdJ("click",function(){return t.CHM(e),t.oxw(2).onActionEdit()}),t._UZ(1,"span",10),t.qZA()}}function I(n,a){if(1&n&&t.YNc(0,Q,2,0,"a",2),2&n){const e=t.oxw();t.Q6J("ngIf",e.viewBtn.edit)}}function B(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",11),t.NdJ("click",function(){return t.CHM(e),t.oxw().onActionDelete()}),t._UZ(1,"span",12),t.qZA()}}function Z(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",13),t.NdJ("click",function(){return t.CHM(e),t.oxw().onActionDownload()}),t._UZ(1,"span",14),t.qZA()}}let Y=(()=>{class n{constructor(){this.emitter=new t.vpe,this.data={},this.viewBtn={}}ngOnInit(){}onActionEdit(){this.emitter.emit({cmd:"edit",data:this.data})}onActionView(){this.emitter.emit({cmd:"view",data:this.data})}ngOnDestroy(){this.emitter.unsubscribe()}onActionDelete(){this.emitter.emit({cmd:"delete",data:this.data})}onActionDownload(){this.emitter.emit({cmd:"download",data:this.data})}onActionConfirm(){this.emitter.emit({cmd:"confirm",data:this.data})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-action-button"]],inputs:{data:"data",viewBtn:"viewBtn"},outputs:{emitter:"emitter"},decls:8,vars:6,consts:[[2,"white-space","nowrap","text-align","right"],["title","Confirm Form Page","class","btn btn-primary btn-cus btn-sm mx-1",3,"click",4,"ngIf"],["title","Edit Form Page","class","btn btn-primary btn-cus btn-sm mx-1",3,"click",4,"ngIf"],[4,"ngIf","ngIfElse"],["editBtn",""],["title","Edit Form Page","class","btn btn-danger btn-hover-danger btn-sm mx-1",3,"click",4,"ngIf"],["title","Downlaod Form Page","class","btn btn-primary btn-hover-primary btn-sm mx-1",3,"click",4,"ngIf"],["title","Confirm Form Page",1,"btn","btn-primary","btn-cus","btn-sm","mx-1",3,"click"],["title","Edit Form Page",1,"btn","btn-primary","btn-cus","btn-sm","mx-1",3,"click"],[1,"flaticon-eye"],[1,"flaticon-edit"],["title","Edit Form Page",1,"btn","btn-danger","btn-hover-danger","btn-sm","mx-1",3,"click"],[1,"flaticon-delete"],["title","Downlaod Form Page",1,"btn","btn-primary","btn-hover-primary","btn-sm","mx-1",3,"click"],[1,"flaticon-download"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,A,2,0,"a",1),t.YNc(2,M,2,0,"a",2),t.YNc(3,S,2,1,"ng-container",3),t.YNc(4,I,1,1,"ng-template",null,4,t.W1O),t.YNc(6,B,2,0,"a",5),t.YNc(7,Z,2,0,"a",6),t.qZA()),2&e){const o=t.MAs(5);t.xp6(1),t.Q6J("ngIf",i.viewBtn.confirm&&"CONFIRM"!=i.data.status),t.xp6(1),t.Q6J("ngIf",i.viewBtn.view),t.xp6(1),t.Q6J("ngIf",i.viewBtn.editOnState)("ngIfElse",o),t.xp6(3),t.Q6J("ngIf",i.viewBtn.delete),t.xp6(1),t.Q6J("ngIf",i.viewBtn.download)}},directives:[s.O5],styles:[""]}),n})();function P(n,a){if(1&n&&(t.TgZ(0,"th",16),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e.title," ")}}function D(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"img",18),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("src",o.Default_DOWNLOAD_URL+"/"+e[i.field],t.LSH)}}function k(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"number"),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e[i.field]>0?t.xi3(2,1,e[i.field],"1.2-2"):"0"," ")}}function V(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e[i.field]," ")}}function J(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"titlecase"),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e[i.field]?t.lcZ(2,1,e[i.field]+""):""," ")}}function $(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"uppercase"),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e[i.field]?t.lcZ(2,1,e[i.field]+""):""," ")}}function F(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.hij(" ",o.FormatedDate(e[i.field])," ")}}function O(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"date"),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e[i.field],"dd/MM/yyyy")," ")}}function U(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.Gre("label label-custom-round label-inline label-",o.activityStatusColor[e[i.field]],""),t.xp6(1),t.Oqu(o.activityStatus[e[i.field]])}}function E(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.Gre("label label-custom-round label-inline label-",o.leadStatusColor[e[i.field]],""),t.xp6(1),t.Oqu(o.leadStatus[e[i.field]])}}function R(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.Gre("label label-custom-round label-inline label-",o.renewStatusColor[e[i.field]],""),t.xp6(1),t.Oqu(o.renewStatus[e[i.field]])}}function q(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.Gre("label label-custom-round label-inline label-",o.customerStatusColor[e[i.field]],""),t.xp6(1),t.Oqu(o.customerStatus[e[i.field]])}}function L(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.Gre("label label-custom-round label-inline label-",o.prodStatusColor[e[i.field]],""),t.xp6(1),t.Oqu(o.prodStatus[e[i.field]])}}function H(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"lowercase"),t.BQk()),2&n){const e=t.oxw(2).$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.AsE("",e[i.field]," ",t.lcZ(2,2,e.quotationRule+"s")," after creation dates")}}function G(n,a){if(1&n&&(t.ynx(0),t.YNc(1,H,3,4,"ng-container",9),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngIf",e[i.field])}}function j(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"lowercase"),t.BQk()),2&n){const e=t.oxw(2).$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.AsE("",e[i.field]," ",t.lcZ(2,2,e.policyRule+"s")," after creation dates")}}function z(n,a){if(1&n&&(t.ynx(0),t.YNc(1,j,3,4,"ng-container",9),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngIf",e[i.field])}}function W(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.ALo(2,"titlecase"),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.hij(" ","30days"==e[i.field]?"30 days":t.lcZ(2,1,e[i.field])," ")}}function X(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.hij(" ",o.getFreq(e[i.field])," ")}}function K(n,a){if(1&n&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.ALo(3,"titlecase"),t.qZA(),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,o=t.oxw(2);t.xp6(1),t.Gre("label label-custom-round label-inline label-",o.statusColor[e[i.field]],""),t.xp6(1),t.hij(" ","in_progress"==e[i.field]?"In Progress":t.lcZ(3,4,e[i.field]),"")}}function tt(n,a){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.xp6(1),t.AsE(" ",i.prefix?i.prefix:"","",e[i.field]," ")}}const et=function(n){return{"text-align":n}};function nt(n,a){if(1&n&&(t.TgZ(0,"td",17),t.YNc(1,D,2,1,"ng-container",9),t.YNc(2,k,3,4,"ng-container",9),t.YNc(3,V,2,1,"ng-container",9),t.YNc(4,J,3,3,"ng-container",9),t.YNc(5,$,3,3,"ng-container",9),t.YNc(6,F,2,1,"ng-container",9),t.YNc(7,O,3,4,"ng-container",9),t.YNc(8,U,3,4,"ng-container",9),t.YNc(9,E,3,4,"ng-container",9),t.YNc(10,R,3,4,"ng-container",9),t.YNc(11,q,3,4,"ng-container",9),t.YNc(12,L,3,4,"ng-container",9),t.YNc(13,G,2,1,"ng-container",9),t.YNc(14,z,2,1,"ng-container",9),t.YNc(15,W,3,3,"ng-container",9),t.YNc(16,X,2,1,"ng-container",9),t.YNc(17,K,4,6,"ng-container",9),t.YNc(18,tt,2,2,"ng-container",9),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.Q6J("ngStyle",t.VKq(19,et,e.amtFormat?"right":"left")),t.xp6(1),t.Q6J("ngIf",e.isImg),t.xp6(1),t.Q6J("ngIf",e.amtFormat),t.xp6(1),t.Q6J("ngIf",e.isAttachment),t.xp6(1),t.Q6J("ngIf",e.isTitle),t.xp6(1),t.Q6J("ngIf",e.isUpper),t.xp6(1),t.Q6J("ngIf",e.isDate),t.xp6(1),t.Q6J("ngIf",e.isFromatDate),t.xp6(1),t.Q6J("ngIf",e.isActivityStatus),t.xp6(1),t.Q6J("ngIf",e.isLeadStatus),t.xp6(1),t.Q6J("ngIf",e.isRenewStatus),t.xp6(1),t.Q6J("ngIf",e.isCustomerStatus),t.xp6(1),t.Q6J("ngIf",e.isProdStatus),t.xp6(1),t.Q6J("ngIf",e.isQuotationDay),t.xp6(1),t.Q6J("ngIf",e.isPolicyDay),t.xp6(1),t.Q6J("ngIf",e.isAllowBackDate),t.xp6(1),t.Q6J("ngIf",e.isPaymentFrequencyType),t.xp6(1),t.Q6J("ngIf",e.isStatus),t.xp6(1),t.Q6J("ngIf",!(e.isDate||e.isTitle||e.amtFormat||e.isFromatDate||e.isActivityStatus||e.isQuotationDay||e.isAllowBackDate||e.isPaymentFrequencyType||e.isUpper||e.isStatus||e.isProdStatus||e.isImg||e.isCustomerStatus||e.isLeadStatus||e.isRenewStatus))}}function it(n,a){if(1&n&&(t.TgZ(0,"td",20),t._uU(1),t.ALo(2,"number"),t.qZA()),2&n){const e=t.oxw(3).$implicit,i=t.oxw(2);t.xp6(1),t.Oqu(t.xi3(2,1,i.totalAmount[e.field]||"","1.2-2"))}}function at(n,a){1&n&&(t.ynx(0),t.YNc(1,it,3,4,"td",19),t.BQk())}function ot(n,a){1&n&&(t.TgZ(0,"label"),t._uU(1,"Total"),t.qZA())}function ct(n,a){if(1&n&&(t.TgZ(0,"td",22),t.YNc(1,ot,2,0,"label",9),t.qZA()),2&n){const e=t.oxw(3).index;t.xp6(1),t.Q6J("ngIf",0==e)}}function _t(n,a){1&n&&t.YNc(0,ct,2,1,"td",21)}function lt(n,a){if(1&n&&(t.ynx(0),t.YNc(1,P,2,1,"th",13),t.YNc(2,nt,19,21,"td",14),t.YNc(3,at,2,0,"ng-container",7),t.YNc(4,_t,1,0,"ng-template",null,15,t.W1O),t.BQk()),2&n){const e=t.MAs(5),i=t.oxw().$implicit,o=t.oxw(2);t.xp6(3),t.Q6J("ngIf",o.calField.includes(i.field)&&o.calTotal)("ngIfElse",e)}}function rt(n,a){if(1&n&&(t.TgZ(0,"th",25),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.title)," ")}}function st(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"app-action-button",29),t.NdJ("emitter",function(o){return t.CHM(e),t.oxw(5).actionBtn(o)}),t.qZA()}if(2&n){const e=t.oxw().$implicit,i=t.oxw(2).$implicit;t.Q6J("data",e)("viewBtn",i.btn)}}function mt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"span",30),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit;return t.oxw(4).createPolicyBtn(o)}),t._uU(1),t.ALo(2,"titlecase"),t.qZA()}if(2&n){const e=t.oxw(3).$implicit;t.xp6(1),t.Oqu(t.lcZ(2,1,e.field))}}function pt(n,a){if(1&n&&(t.TgZ(0,"td",26),t.YNc(1,st,1,2,"app-action-button",27),t.YNc(2,mt,3,3,"span",28),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngIf","action"==e.type),t.xp6(1),t.Q6J("ngIf","text"==e.type)}}function gt(n,a){1&n&&t._UZ(0,"td",32)}function dt(n,a){1&n&&(t.ynx(0),t.YNc(1,gt,1,0,"td",31),t.BQk())}function ut(n,a){if(1&n&&(t.YNc(0,rt,3,3,"th",23),t.YNc(1,pt,3,2,"td",24),t.YNc(2,dt,2,0,"ng-container",9)),2&n){const e=t.oxw(3);t.xp6(2),t.Q6J("ngIf",e.calTotal)}}function ft(n,a){if(1&n&&(t.ynx(0),t.ynx(1,11),t.YNc(2,lt,6,2,"ng-container",7),t.YNc(3,ut,3,1,"ng-template",null,12,t.W1O),t.BQk(),t.BQk()),2&n){const e=a.$implicit,i=t.MAs(4);t.xp6(1),t.s9C("matColumnDef",e.field),t.xp6(1),t.Q6J("ngIf","field"==e.type)("ngIfElse",i)}}function xt(n,a){1&n&&t._UZ(0,"tr",33)}const wt=function(n,a){return{hovered:n,highlighted:a}};function ht(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tr",35),t.NdJ("click",function(){const _=t.CHM(e).$implicit;return t.oxw(3).selectRow(_)})("mouseover",function(){return t.CHM(e).$implicit.hovered=!0})("mouseout",function(){return t.CHM(e).$implicit.hovered=!1}),t.qZA()}if(2&n){const e=a.$implicit,i=t.oxw(3);t.Q6J("ngClass",t.WLB(1,wt,e.hovered,i.selection.isSelected(e)))}}function Tt(n,a){if(1&n&&(t.ynx(0),t.YNc(1,ht,1,4,"tr",34),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns)}}function bt(n,a){1&n&&t._UZ(0,"tr",37)}function Ct(n,a){if(1&n&&t.YNc(0,bt,1,0,"tr",36),2&n){const e=t.oxw(2);t.Q6J("matRowDefColumns",e.displayedColumns)}}function vt(n,a){1&n&&t._UZ(0,"tr",39)}function yt(n,a){if(1&n&&(t.ynx(0),t.YNc(1,vt,1,0,"tr",38),t.BQk()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("matFooterRowDef",e.displayedColumns)}}function At(n,a){if(1&n&&(t.TgZ(0,"div",2),t.TgZ(1,"div",3),t.TgZ(2,"table",4),t.YNc(3,ft,5,3,"ng-container",5),t.YNc(4,xt,1,0,"tr",6),t.YNc(5,Tt,2,1,"ng-container",7),t.YNc(6,Ct,1,1,"ng-template",null,8,t.W1O),t.YNc(8,yt,2,1,"ng-container",9),t.qZA(),t.qZA(),t._UZ(9,"mat-paginator",10),t.qZA()),2&n){const e=t.MAs(7),i=t.oxw();t.xp6(2),t.Q6J("dataSource",i.dataSource),t.xp6(1),t.Q6J("ngForOf",i.colum),t.xp6(1),t.Q6J("matHeaderRowDef",i.displayedColumns),t.xp6(1),t.Q6J("ngIf",i.selectable)("ngIfElse",e),t.xp6(3),t.Q6J("ngIf",i.calTotal),t.xp6(1),t.Q6J("pageSizeOptions",i.pageSizeOptions)}}function Mt(n,a){1&n&&(t.TgZ(0,"div",40),t.TgZ(1,"span",41),t._uU(2,"There is no data"),t.qZA(),t.qZA())}let Nt=(()=>{class n{constructor(e){this.cdf=e,this.emitter=new t.vpe,this.dataSource=new c.by([]),this.displayedColumns=[],this.data=[],this.colum=[],this.pageSizeOptions=[5,10,20],this.selectable=!1,this.rowSelected=new t.vpe,this.Default_DOWNLOAD_URL=`${y.N.apiUrl}/attachment-downloader`,this.totalAmount={},this.calTotal=!1,this.calField=[],this.activityStatusColor={"01":"secondary","02":"primary","03":"danger"},this.prodStatus=v.eM,this.prodStatusColor={"01":"secondary","02":"primary"},this.statusColor={in_progress:"secondary",complete:"primary",approved:"primary",cancel:"danger",submitted:"success",success:"success",sending:"info",fail:"danger"},this.customerStatusColor={A:"secondary",I:"danger"},this.customerStatus={A:"Active",I:"Inactive"},this.leadStatus={"01":"Open","02":"Assigned","03":"Folllow Up","04":"Reject","05":"Win","06":"Lost"},this.leadStatusColor={"01":"default","04":"default","05":"success","03":"secondary","02":"primary","06":"danger"},this.renewStatus={DRAFT:"Draft",ACTIVE:"Active",CONFIRM:"Confirmed"},this.renewStatusColor={DRAFT:"primary",ACTIVE:"success",CONFIRM:"secondary"},this.selection=new C.Ov(!1,[]),this.activityStatus=p.f}ngOnInit(){}ngAfterViewInit(){this.cdf.detectChanges()}reChangeData(){this.dataSource=new c.by(this.data),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort;let e=Math.ceil(this.data.length/5);this.calTotal&&this.calTotalData(),this.customPaginator&&this.customPaginator.viewInit(e)}ngOnDestroy(){this.emitter.unsubscribe()}actionBtn(e){this.emitter.emit(e)}FormatedDate(e){return b(e,"YYYYMMDD").format("DD/MM/YYYY")}getFreq(e){let i="",o=e.split(", ");for(const _ of o)"lump"==_?i=i.length>2?i+", Lump Sum":"Lump Sum":"annually"==_&&(i=i.length>2?i+", Semi Annually":"Semi Annually");return i}createPolicyBtn(e){this.emitter.emit({cmd:"create",data:e})}getStatusColor(e){}selectRow(e){this.selection.toggle(e),this.selection.isSelected(e)?this.rowSelected.emit(e):this.rowSelected.emit(null)}calTotalData(){this.totalAmount=[],this.data.forEach(e=>{this.calField.map(i=>{e[i]&&(this.totalAmount[i]=this.totalAmount[i]?this.totalAmount[i]+parseFloat(e[i].toString().split(",").join("")):parseFloat(e[i].toString().split(",").join("")))})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-material-table-view"]],viewQuery:function(e,i){if(1&e&&(t.Gf(r.NW,5),t.Gf(h,5),t.Gf(f.YE,5)),2&e){let o;t.iGM(o=t.CRH())&&(i.paginator=o.first),t.iGM(o=t.CRH())&&(i.customPaginator=o.first),t.iGM(o=t.CRH())&&(i.sort=o.first)}},inputs:{displayedColumns:"displayedColumns",data:"data",colum:"colum",pageSizeOptions:"pageSizeOptions",selectable:"selectable",calTotal:"calTotal",calField:"calField"},outputs:{emitter:"emitter",rowSelected:"rowselect"},decls:2,vars:2,consts:[["class","example-preview",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"example-preview"],[1,"example-container","table-responsive","angular-bootstrap-table"],["mat-table","","matSort","",1,"table","table-head-custom","table-vertical-center",2,"margin-bottom","0px",3,"dataSource"],[4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],[4,"ngIf","ngIfElse"],["noSelectTable",""],[4,"ngIf"],["style-paginator","","showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],[3,"matColumnDef"],["actTemp",""],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",3,"ngStyle",4,"matCellDef"],["footer",""],["mat-header-cell","","mat-sort-header",""],["mat-cell","",3,"ngStyle"],["alt","","srcset","",1,"table-img",3,"src"],["mat-footer-cell","","style","padding: 0 10px;",4,"matFooterCellDef"],["mat-footer-cell","",2,"padding","0 10px"],["mat-footer-cell","","style","padding-left: 10px;",4,"matFooterCellDef"],["mat-footer-cell","",2,"padding-left","10px"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],[3,"data","viewBtn","emitter",4,"ngIf"],["class","text-primary","style","text-decoration: underline;white-space: nowrap;cursor: pointer;",3,"click",4,"ngIf"],[3,"data","viewBtn","emitter"],[1,"text-primary",2,"text-decoration","underline","white-space","nowrap","cursor","pointer",3,"click"],["mat-footer-cell","",4,"matFooterCellDef"],["mat-footer-cell",""],["mat-header-row",""],["mat-row","",3,"ngClass","click","mouseover","mouseout",4,"matRowDef","matRowDefColumns"],["mat-row","",3,"ngClass","click","mouseover","mouseout"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-row",""],["mat-footer-row","",4,"matFooterRowDef"],["mat-footer-row",""],[1,"text-center"],[2,"color","gray"]],template:function(e,i){1&e&&(t.YNc(0,At,10,7,"div",0),t.YNc(1,Mt,3,0,"div",1)),2&e&&(t.Q6J("ngIf",i.data.length>0),t.xp6(1),t.Q6J("ngIf",0==i.data.length))},directives:[s.O5,c.BZ,f.YE,s.sg,c.as,r.NW,h,c.w1,c.fO,c.Dz,c.ge,f.nU,c.ev,s.PC,c.mD,c.yh,Y,c.XQ,c.nj,c.Gk,s.mk,c.Ke,c.Q2],pipes:[s.JJ,s.rS,s.gd,s.uU,s.i8],styles:[".mat-paginator-container[_ngcontent-%COMP%]{justify-content:space-between}.label.label-custom-round[_ngcontent-%COMP%]{line-height:20px;white-space:nowrap;border-radius:10px;width:80px;color:#fff}.table-img[_ngcontent-%COMP%]{max-width:50px;max-height:50px}.label-default[_ngcontent-%COMP%]{color:#000!important}.act-btn-box[_ngcontent-%COMP%]{background-color:#005f99;border-color:#005f99;color:#fff!important;text-decoration:none;padding:.35rem .75rem;font-size:.925rem;line-height:1.35;border-radius:.42rem}"],changeDetection:0}),n})()},18510:(w,g,l)=>{l.d(g,{Y:()=>t,f:()=>p});var t=(()=>{return(r=t||(t={})).FEILD="field",r.TEXT="text",r.RENEW="renew",r.ACTION="action",t;var r})();const p={"01":"Open","02":"Complete","03":"Cancel"}},1402:(w,g,l)=>{l.d(g,{it:()=>p,eM:()=>r});var p=(()=>{return(c=p||(p={})).DYN="dyn",c.STATIC="static",p;var c})();const r={"01":"Draft","02":"Active"}}}]);