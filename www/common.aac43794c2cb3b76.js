"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{73620:(y,v,t)=>{t.r(v),t.d(v,{startFocusVisible:()=>_});const o="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],_=u=>{let D=[],r=!0;const e=u?u.shadowRoot:document,i=u||document.body,s=c=>{D.forEach(m=>m.classList.remove(o)),c.forEach(m=>m.classList.add(o)),D=c},n=()=>{r=!1,s([])},l=c=>{r=a.includes(c.key),r||s([])},g=c=>{if(r&&c.composedPath){const m=c.composedPath().filter(h=>!!h.classList&&h.classList.contains("ion-focusable"));s(m)}},p=()=>{e.activeElement===i&&s([])};return e.addEventListener("keydown",l),e.addEventListener("focusin",g),e.addEventListener("focusout",p),e.addEventListener("touchstart",n),e.addEventListener("mousedown",n),{destroy:()=>{e.removeEventListener("keydown",l),e.removeEventListener("focusin",g),e.removeEventListener("focusout",p),e.removeEventListener("touchstart",n),e.removeEventListener("mousedown",n)},setFocus:s}}},78107:(y,v,t)=>{t.d(v,{a:()=>o,b:()=>e,c:()=>f,d:()=>u,e:()=>i,f:()=>r,g:()=>D,h:()=>_,i:()=>a});const o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>"},95976:(y,v,t)=>{t.d(v,{e:()=>e});var o=t(92070),a=t(18260),_=t(91691),u=t(83668),D=t(44522);const r=`${a.N.apiUrl}/activity`;let e=(()=>{class i extends _.i{constructor(n){super(n,r),this.httpClient=n}getActivityList(n={}){let l=r+"?isTeam=true&";return n.type&&(l=l+"type="+n.type+"&"),n.title&&(l=l+"title="+n.title+"&"),n.status&&(l=l+"status="+n.status+"&"),n.startDate&&(l=l+"startDate="+o(n.startDate).format("YYYY-MM-DD")+"&"),n.endDate&&(l=l+"endDate="+o(n.endDate).format("YYYY-MM-DD")+"&"),this.httpClient.get(l)}}return i.\u0275fac=function(n){return new(n||i)(u.LFG(D.eN))},i.\u0275prov=u.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},75199:(y,v,t)=>{t.d(v,{s:()=>g});var o=t(18260),f=t(91691),a=t(83668),_=t(44522);const u=`${o.N.apiUrl}/dashboard/agent`,D=`${o.N.apiUrl}/dashboard/lead-activity/count`,r=`${o.N.apiUrl}/dashboard/resent-operation`,e=`${o.N.apiUrl}/dashboard/today-campaign`,i=`${o.N.apiUrl}/dashboard/follow-up`,s=`${o.N.apiUrl}/dashboard/backlog`,n=`${o.N.apiUrl}/dashboard/assign-lead`,l=`${o.N.apiUrl}/dashboard/sale-active-agent`;let g=(()=>{class p extends f.i{constructor(c){super(c,u),this.httpClient=c}getList(c={}){let m=u+"?";return c.empId&&(m=m+"empId="+c.empId+"&"),this.httpClient.get(m)}getLeadList(c={}){let m=D+"?";return c.empId&&(m=m+"empId="+c.empId+"&"),this.httpClient.get(m)}getRecentList(c={}){let m=r+"?";return c.empId&&(m=m+"empId="+c.empId+"&"),this.httpClient.get(m)}getCampaignList(c={}){let m=e+"?";return c.empId&&(m=m+"empId="+c.empId+"&"),this.httpClient.get(m)}getBacklogList(c={}){let m=s+"?";return c.empId&&(m=m+"empId="+c.empId+"&"),this.httpClient.get(m)}getLeadAssignList(c={}){let m=n+"?";return c.empId&&(m=m+"empId="+c.empId+"&"),this.httpClient.get(m)}getFollowupList(c={}){let m=i+"?";return c.empId&&(m=m+"empId="+c.empId+"&"),this.httpClient.get(m)}getAgentList(c={}){let m=l+"?";return c.empId&&(m=m+"empId="+c.empId+"&"),this.httpClient.get(m)}}return p.\u0275fac=function(c){return new(c||p)(a.LFG(_.eN))},p.\u0275prov=a.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},75512:(y,v,t)=>{t.r(v),t.d(v,{DashboardModule:()=>m,DashboardShareModule:()=>c});var o=t(86019),f=t(4205),a=t(57354),_=t(18510);const u=[{title:"Group Name",type:_.Y.FEILD,field:"pageName"},{title:"Simple Data",type:_.Y.FEILD,field:"simpleTest"},{title:"Actions",type:_.Y.ACTION,field:"actions",btn:{edit:!0,delete:!0}}],D=["pageName","simpleTest","actions"];var r=t(90949),e=t(83668),i=t(41323),s=t(85993),n=t(60940);let l=(()=>{class h{constructor(d,E,M,A,O){this.router=d,this.uiService=E,this.modalService=M,this.cdRef=A,this.alertService=O,this.forms=[],this.form={id:"",name:""},this.ELEMENT_COL=u,this.displayedColumns=D,this.unsubscribe=[],this.ELEMENT_DATA=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"},{position:11,name:"Sodium",weight:22.9897,symbol:"Na"},{position:12,name:"Magnesium",weight:24.305,symbol:"Mg"},{position:13,name:"Aluminum",weight:26.9815,symbol:"Al"},{position:14,name:"Silicon",weight:28.0855,symbol:"Si"},{position:15,name:"Phosphorus",weight:30.9738,symbol:"P"},{position:16,name:"Sulfur",weight:32.065,symbol:"S"},{position:17,name:"Chlorine",weight:35.453,symbol:"Cl"},{position:18,name:"Argon",weight:39.948,symbol:"Ar"},{position:19,name:"Potassium",weight:39.0983,symbol:"K"},{position:20,name:"Calcium",weight:40.078,symbol:"Ca"}]}ngOnInit(){this.getList()}getList(){this.uiService.getByType().toPromise().then(d=>{d&&(this.forms=d.forms,this.cdRef.detectChanges(),this.matTable.reChangeData())})}ngOnDestroy(){this.unsubscribe.forEach(d=>d.unsubscribe())}delete(d,E){this.alertService.activate("Are you sure want to delete?","Warning Message").then(M=>{M&&this.uiService.delete(E).toPromise().then(A=>{A&&this.alertService.activate("This record was deleted","Success Message").then(O=>{}),this.forms.splice(d,1),this.cdRef.detectChanges(),this.matTable.reChangeData()})})}edit(d,E={}){const M=this.modalService.open(a.h,{size:"md",backdrop:!1});M.componentInstance.oldData=E,M.componentInstance.id=E.dyProductID,M.componentInstance.name=JSON.parse(JSON.stringify(E)).pageName,M.result.then(()=>{},A=>{A&&("save"==A.type?this.submit(A.data):"edit"==A.type&&(this.forms[d]=A.data,this.cdRef.detectChanges(),this.matTable.reChangeData()))})}actionBtn(d){let E=this.forms.findIndex(M=>M.dyProductID==d.data.dyProductID);"edit"==d.cmd?this.editLayout(d.data):"delete"==d.cmd?this.delete(E,d.data.dyProductID):"view"==d.cmd&&this.editLayout(d.data)}editLayout(d){this.uiService.selectedForm=d,this.router.navigateByUrl("/config-layout")}viewLayout(d){this.uiService.selectedForm=d,this.router.navigateByUrl("/product-form")}submit(d){let E={pageName:d.pageName,config:JSON.stringify({}),simpleTest:"nothing here",type:"Form"};this.uiService.save(E).toPromise().then(M=>{M&&(this.uiService.selectedForm=M,this.router.navigateByUrl("/config-layout"))})}}return h.\u0275fac=function(d){return new(d||h)(e.Y36(f.F0),e.Y36(i.q),e.Y36(s.FF),e.Y36(e.sBO),e.Y36(n.c))},h.\u0275cmp=e.Xpm({type:h,selectors:[["app-dashboard"]],viewQuery:function(d,E){if(1&d&&e.Gf(r.I,5),2&d){let M;e.iGM(M=e.CRH())&&(E.matTable=M.first)}},decls:12,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","btn-circle",3,"click"],[1,"flaticon2-plus"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","emitter"]],template:function(d,E){1&d&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"h3",5),e._uU(6,"Page Groups List"),e.qZA(),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"button",7),e.NdJ("click",function(){return E.edit(-1)}),e._UZ(9,"span",8),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"div",9),e.TgZ(11,"app-material-table-view",10),e.NdJ("emitter",function(A){return E.actionBtn(A)}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&d&&(e.xp6(11),e.Q6J("data",E.forms)("colum",E.ELEMENT_COL)("displayedColumns",E.displayedColumns))},directives:[r.I],styles:[""]}),h})();var g=t(49133),p=t(87626),P=t(45598);let c=(()=>{class h{}return h.\u0275fac=function(d){return new(d||h)},h.\u0275mod=e.oAB({type:h}),h.\u0275inj=e.cJS({imports:[[o.ez,p.vi,g.u5,g.UX,P.fA]]}),h})(),m=(()=>{class h{}return h.\u0275fac=function(d){return new(d||h)},h.\u0275mod=e.oAB({type:h}),h.\u0275inj=e.cJS({imports:[[o.ez,p.vi,g.u5,g.UX,P.fA,c,f.Bz.forChild([{path:"",component:l}])]]}),h})()},57354:(y,v,t)=>{t.d(v,{h:()=>D});var o=t(83668),f=t(85993),a=t(41323),_=t(60940),u=t(49133);let D=(()=>{class r{constructor(i,s,n){this.modal=i,this.uiService=s,this.alertService=n,this.oldData={},this.subscriptions=[]}ngOnInit(){}save(){let i=Object.assign(Object.assign({},this.oldData),{pageName:this.name});this.id?this.uiService.updateNoID(i).toPromise().then(s=>{s&&this.modal.dismiss({data:i,type:"edit"})}):this.modal.dismiss({data:i,type:"save"})}ngOnDestroy(){this.subscriptions.forEach(i=>i.unsubscribe())}deleteEditModal(){this.alertService.activate("Are you sure want to delete?","Warning Message").then(i=>{i&&this.modal.dismiss({type:"delete"})})}}return r.\u0275fac=function(i){return new(i||r)(o.Y36(f.Kz),o.Y36(a.q),o.Y36(_.c))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-edit-modal"]],decls:14,vars:3,consts:[[1,"modal-content"],[1,"modal-header"],["id","example-modal-sizes-title-lg",1,"modal-title","h4","left-border-image"],[1,"overlay","overlay-block","cursor-default","modal-body"],[1,"form-group"],["type","text","name","name","placeholder","",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"modal-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","submit",1,"btn","btn-primary","btn-elevate",3,"disabled","click"]],template:function(i,s){1&i&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o._uU(3),o.qZA(),o.qZA(),o.TgZ(4,"div",3),o.TgZ(5,"div",4),o.TgZ(6,"label"),o._uU(7,"Group Name"),o.qZA(),o.TgZ(8,"input",5),o.NdJ("ngModelChange",function(l){return s.name=l}),o.qZA(),o.qZA(),o.qZA(),o.TgZ(9,"div",6),o.TgZ(10,"button",7),o.NdJ("click",function(){return s.modal.dismiss()}),o._uU(11,"Cancel"),o.qZA(),o.TgZ(12,"button",8),o.NdJ("click",function(){return s.save()}),o._uU(13,"Save"),o.qZA(),o.qZA(),o.qZA()),2&i&&(o.xp6(3),o.hij(" ",s.id?"Edit":"Create"," Group Name "),o.xp6(5),o.Q6J("ngModel",s.name),o.xp6(4),o.Q6J("disabled",!s.name))},directives:[u.Fj,u.JJ,u.On],styles:[""]}),r})()},58695:(y,v,t)=>{t.d(v,{xT:()=>a});let a=(()=>{class _{}return _.GRAND_DISCOUNT=0,_.HIGH_DISCOUNT=0,_})()},95849:(y,v,t)=>{t.d(v,{i:()=>D});var o=t(91691),f=t(18260),a=t(83668),_=t(44522);const u=`${f.N.apiUrl}/fna`;let D=(()=>{class r extends o.i{constructor(i){super(i,u),this.httpClient=i}getAll(){return this.httpClient.get(u)}getFNAAllByLeaId(i){return this.httpClient.get(u+"/"+i)}}return r.\u0275fac=function(i){return new(i||r)(a.LFG(_.eN))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},26106:(y,v,t)=>{t.d(v,{P:()=>r});var o=t(64762),f=t(13902),a=t(83668),_=t(85993),u=t(28210),D=t(67198);let r=(()=>{class e{constructor(s,n,l){this.modal=s,this.fnaService=n,this.authService=l,this.user=new f.T,this.leadId="",this.customer=null,this.conductedBy=null}ngOnInit(){this.user=this.authService.currentUserValue}close(){this.modal.dismiss(null)}chooseFNA(s){return(0,o.mG)(this,void 0,void 0,function*(){let n;this.customer&&(n={leadId:this.leadId,customerId:this.customer.customerId,customerName:this.customer.customerName,fnaType:s,grandDiscount:0,highDiscount:0,id:0,conductedBy:this.conductedBy,createdAt:this.formatDateDDMMYYY(new Date),createdBy:this.user.id,createdByName:this.user.username,updatedAt:new Date,fnaId:null,type:this.customer.customerType,pageStatus:"create",products:[""]}),yield this.fnaService.saveFNA(n).toPromise().then(l=>{l&&(n.fnaId=l)}),this.modal.dismiss(n)})}formatDateDDMMYYY(s){var n=new Date(s),l=""+(n.getMonth()+1),g=""+n.getDate(),p=n.getFullYear();return l.length<2&&(l="0"+l),g.length<2&&(g="0"+g),[g,l,p].join("/")}}return e.\u0275fac=function(s){return new(s||e)(a.Y36(_.Kz),a.Y36(u.T),a.Y36(D.e8))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-fna-type"]],decls:17,vars:0,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"form"],[1,"col-12",3,"click"],[1,"btn-group",2,"width","100%","display","block","margin","24px 0"],["type","button",1,"btn",2,"max-width","120px","background","#005f99","color","#fff","float","right","margin-right","24px",3,"click"]],template:function(s,n){1&s&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a.TgZ(4,"div",4),a.TgZ(5,"h3",5),a._uU(6,"FNA Type"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(7,"div",6),a.TgZ(8,"div",7),a.NdJ("click",function(){return n.chooseFNA("LPP")}),a.TgZ(9,"label"),a._uU(10,"Create LPP"),a.qZA(),a.qZA(),a.TgZ(11,"div",7),a.NdJ("click",function(){return n.chooseFNA("BRAM")}),a.TgZ(12,"label"),a._uU(13,"Create BRAM"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(14,"div",8),a.TgZ(15,"button",9),a.NdJ("click",function(){return n.close()}),a._uU(16,"Close"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA())},styles:[".form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]{padding:10px 40px;cursor:pointer}.form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer}.form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]:first-child{border-bottom:1px solid #dad9d9}"]}),e})()},57311:(y,v,t)=>{t.d(v,{Z:()=>r});var o=t(92070),a=t(18260),_=t(83668),u=t(44522);const D=`${a.N.apiUrl}/lead`;let r=(()=>{class e{constructor(s){this.httpClient=s}getLeadList(s={}){let n=D+"?";return s.campaignName&&(n=n+"campaignName="+s.campaignName+"&"),s.existingCustomerId&&(n=n+"existingCustomerId="+s.existingCustomerId+"&"),s.leadId&&(n=n+"leadId="+s.leadId+"&"),s.contactName&&(n=n+"contactName="+s.contactName+"&"),s.startDate&&(n=n+"startDate="+o(s.startDate).format("YYYY-MM-DD")+"&"),s.endDate&&(n=n+"endDate="+o(s.endDate).format("YYYY-MM-DD")+"&"),s.productId&&(n=n+"productId="+s.productId+"&"),s.sourceCode&&(n=n+"sourceCode="+s.sourceCode+"&"),s.statusCode&&(n=n+"statusCode="+s.statusCode+"&"),this.httpClient.get(n)}}return e.\u0275fac=function(s){return new(s||e)(_.LFG(u.eN))},e.\u0275prov=_.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},552:(y,v,t)=>{t.d(v,{Q:()=>n});var o=t(82997),f=t(85724),a=t(18260),_=t(91691),u=t(54753),r=t(83668),e=t(44522),i=t(26697);const s=`${a.N.apiUrl}/pagedata`;let n=(()=>{class l extends _.i{constructor(p,P){super(p,s),this.httpClient=p,this.masterData=P}getDetail(p,P,c,m=!1,h=[],C=!1){return this.httpClient.get(s+"/"+p+"/"+P+"/"+c).pipe((0,f.z)(d=>m?function(l,g,p,P=!1){return Array.isArray(g)&&g.length>0?(0,o.of)(g).pipe((0,u.U)(c=>{let m=[];return c.map(C=>{let d=C.data.filter(E=>(E.value+"").startsWith("T-")||(E.value+"").startsWith("TA-")||(E.value+"").startsWith("TU-"));if(d.length>0){let E=d.map(M=>{let A=p.find(O=>O.name==M.column);if(A.masterData)return{codeId:M.value,codeType:A.masterData,langCd:"EN"}});m.push(...E)}}),{result:c,masterPost:m}}),(0,f.z)(c=>c.masterPost.length>0?l.getMasterValue({codeBookRequest:c.masterPost}).pipe((0,u.U)(h=>c.result.map(C=>(C.data=C.data.flatMap(d=>{if((d.value+"").startsWith("T-")||(d.value+"").startsWith("TA-")){let E=p.find(A=>A.name==d.column),M=h.findIndex(A=>A.codeId==d.value&&E.masterData==A.codeType);if(M>=0){if(P)return[d,{column:d.column+"Value",value:h[M].codeName}];d.value=h[M].codeName,d.valueCode=h[M].codeId}}return d}),C)))):(0,o.of)(c.result))):(0,o.of)(g)}(this.masterData,d,h,C):(0,o.of)(d)))}deleteData(p,P,c){return this.httpClient.delete(s+"/"+p+"/"+P+"/"+c)}updatePremimun(p){return this.httpClient.put(s+"/resource",p)}}return l.\u0275fac=function(p){return new(p||l)(r.LFG(e.eN),r.LFG(i.D))},l.\u0275prov=r.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},80842:(y,v,t)=>{t.d(v,{G:()=>e});var o=t(92070),a=t(18260),_=t(91691),u=t(83668),D=t(44522);const r=`${a.N.apiUrl}/quotation`;let e=(()=>{class i extends _.i{constructor(n){super(n,r),this.httpClient=n}getQuoList(n={}){let l=r+"?";return l=l+"isTeam="+!!n.isTeam+"&",n.startDate&&(l=l+"startDate="+o(n.startDate).format("YYYY-MM-DD")+"&"),n.endDate&&(l=l+"endDate="+o(n.endDate).format("YYYY-MM-DD")+"&"),this.httpClient.get(l)}}return i.\u0275fac=function(n){return new(n||i)(u.LFG(D.eN))},i.\u0275prov=u.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},52902:(y,v,t)=>{t.d(v,{R:()=>D});var o=t(18260),f=t(91691),a=t(83668),_=t(44522);const u=`${o.N.apiUrl}/renewal-policy`;let D=(()=>{class r extends f.i{constructor(i){super(i,u),this.httpClient=i}getRenewList(i={}){return this.findAll()}confirmRenew(i){return this.httpClient.put(u+"/confirm/"+i,{})}}return r.\u0275fac=function(i){return new(i||r)(a.LFG(_.eN))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},18410:(y,v,t)=>{t.d(v,{J:()=>l});var o=t(86019),f=t(49133),a=t(85993),_=t(55167),u=t(45598),D=t(75396),r=t(57842),e=t(99765),i=t(13468),s=t(78480),n=t(83668);let l=(()=>{class g{}return g.\u0275fac=function(P){return new(P||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[o.ez,f.u5,u.fA,f.UX,a.bz,_.Fk,s.FA,a.M,i.rP,D.X,r.A0,e.Ud]]}),g})()},37780:(y,v,t)=>{t.d(v,{G:()=>D});var o=t(18260),f=t(91691),a=t(83668),_=t(44522);const u=`${o.N.apiUrl}/travel-risk`;let D=(()=>{class r extends f.i{constructor(i){super(i,u),this.httpClient=i}deleteMany(i){return this.httpClient.delete(u+"/resource/"+i)}getMany(i){return this.httpClient.get(u+"/resource/"+i)}}return r.\u0275fac=function(i){return new(i||r)(a.LFG(_.eN))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);