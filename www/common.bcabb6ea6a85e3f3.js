"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{73620:(y,_,t)=>{t.r(_),t.d(_,{startFocusVisible:()=>p});const a="ion-focused",i=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],p=m=>{let v=[],r=!0;const o=m?m.shadowRoot:document,n=m||document.body,s=d=>{v.forEach(u=>u.classList.remove(a)),d.forEach(u=>u.classList.add(a)),v=d},e=()=>{r=!1,s([])},l=d=>{r=i.includes(d.key),r||s([])},D=d=>{if(r&&d.composedPath){const u=d.composedPath().filter(g=>!!g.classList&&g.classList.contains("ion-focusable"));s(u)}},f=()=>{o.activeElement===n&&s([])};return o.addEventListener("keydown",l),o.addEventListener("focusin",D),o.addEventListener("focusout",f),o.addEventListener("touchstart",e),o.addEventListener("mousedown",e),{destroy:()=>{o.removeEventListener("keydown",l),o.removeEventListener("focusin",D),o.removeEventListener("focusout",f),o.removeEventListener("touchstart",e),o.removeEventListener("mousedown",e)},setFocus:s}}},78107:(y,_,t)=>{t.d(_,{a:()=>a,b:()=>o,c:()=>h,d:()=>m,e:()=>n,f:()=>r,g:()=>v,h:()=>p,i:()=>i});const a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>"},25011:(y,_,t)=>{t.d(_,{s:()=>v});var a=t(86019),h=t(75396),i=t(83668);const p=["chart"];let m=(()=>{class r{constructor(){this.chartOptions={series:[{name:"Inflation",data:[2.3,3.1,4,10.1,4,3.6,3.2,2.3,1.4,.8,.5,.2]}],chart:{height:350,type:"bar"},plotOptions:{bar:{dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(n){return n+"%"},offsetY:-20,style:{fontSize:"12px",colors:["#304758"]}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],position:"top",labels:{offsetY:-18},axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0,offsetY:-35}},fill:{type:"gradient",gradient:{shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[50,0,100,100]}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(n){return n+"%"}}},title:{text:"Monthly Inflation in Argentina, 2002",floating:!0,offsetY:320,align:"center",style:{color:"#444"}}}}}return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=i.Xpm({type:r,selectors:[["app-column-chart"]],viewQuery:function(n,s){if(1&n&&i.Gf(p,5),2&n){let e;i.iGM(e=i.CRH())&&(s.chart=e.first)}},decls:2,vars:8,consts:[["id","chart"],[3,"series","chart","dataLabels","plotOptions","yaxis","xaxis","fill","title"]],template:function(n,s){1&n&&(i.TgZ(0,"div",0),i._UZ(1,"apx-chart",1),i.qZA()),2&n&&(i.xp6(1),i.Q6J("series",s.chartOptions.series)("chart",s.chartOptions.chart)("dataLabels",s.chartOptions.dataLabels)("plotOptions",s.chartOptions.plotOptions)("yaxis",s.chartOptions.yaxis)("xaxis",s.chartOptions.xaxis)("fill",s.chartOptions.fill)("title",s.chartOptions.title))},directives:[h.x],styles:["#chart[_ngcontent-%COMP%]{max-width:650px;margin:35px auto}"]}),r})(),v=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=i.oAB({type:r,bootstrap:[m]}),r.\u0275inj=i.cJS({providers:[],imports:[[a.ez,h.X]]}),r})()},95976:(y,_,t)=>{t.d(_,{e:()=>o});var a=t(92070),i=t(18260),p=t(91691),m=t(83668),v=t(44522);const r=`${i.N.apiUrl}/activity`;let o=(()=>{class n extends p.i{constructor(e){super(e,r),this.httpClient=e}getActivityList(e={}){let l=r+"?isTeam=true&";return e.type&&(l=l+"type="+e.type+"&"),e.title&&(l=l+"title="+e.title+"&"),e.status&&(l=l+"status="+e.status+"&"),e.startDate&&(l=l+"startDate="+a(e.startDate).format("YYYY-MM-DD")+"&"),e.endDate&&(l=l+"endDate="+a(e.endDate).format("YYYY-MM-DD")+"&"),this.httpClient.get(l)}}return n.\u0275fac=function(e){return new(e||n)(m.LFG(v.eN))},n.\u0275prov=m.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},75512:(y,_,t)=>{t.r(_),t.d(_,{DashboardModule:()=>u,DashboardShareModule:()=>d});var a=t(86019),h=t(29018),i=t(57354),p=t(18510);const m=[{title:"Group Name",type:p.Y.FEILD,field:"pageName"},{title:"Simple Data",type:p.Y.FEILD,field:"simpleTest"},{title:"Actions",type:p.Y.ACTION,field:"actions",btn:{edit:!0,delete:!0}}],v=["pageName","simpleTest","actions"];var r=t(90949),o=t(83668),n=t(41323),s=t(85378),e=t(60940);let l=(()=>{class g{constructor(c,E,M,C,O){this.router=c,this.uiService=E,this.modalService=M,this.cdRef=C,this.alertService=O,this.forms=[],this.form={id:"",name:""},this.ELEMENT_COL=m,this.displayedColumns=v,this.unsubscribe=[],this.ELEMENT_DATA=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"},{position:11,name:"Sodium",weight:22.9897,symbol:"Na"},{position:12,name:"Magnesium",weight:24.305,symbol:"Mg"},{position:13,name:"Aluminum",weight:26.9815,symbol:"Al"},{position:14,name:"Silicon",weight:28.0855,symbol:"Si"},{position:15,name:"Phosphorus",weight:30.9738,symbol:"P"},{position:16,name:"Sulfur",weight:32.065,symbol:"S"},{position:17,name:"Chlorine",weight:35.453,symbol:"Cl"},{position:18,name:"Argon",weight:39.948,symbol:"Ar"},{position:19,name:"Potassium",weight:39.0983,symbol:"K"},{position:20,name:"Calcium",weight:40.078,symbol:"Ca"}]}ngOnInit(){this.getList()}getList(){this.uiService.getByType().toPromise().then(c=>{c&&(this.forms=c.forms,this.cdRef.detectChanges(),this.matTable.reChangeData())})}ngOnDestroy(){this.unsubscribe.forEach(c=>c.unsubscribe())}delete(c,E){this.alertService.activate("Are you sure want to delete?","Warning Message").then(M=>{M&&this.uiService.delete(E).toPromise().then(C=>{C&&this.alertService.activate("This record was deleted","Success Message").then(O=>{}),this.forms.splice(c,1),this.cdRef.detectChanges(),this.matTable.reChangeData()})})}edit(c,E={}){const M=this.modalService.open(i.h,{size:"md",backdrop:!1});M.componentInstance.oldData=E,M.componentInstance.id=E.dyProductID,M.componentInstance.name=JSON.parse(JSON.stringify(E)).pageName,M.result.then(()=>{},C=>{C&&("save"==C.type?this.submit(C.data):"edit"==C.type&&(this.forms[c]=C.data,this.cdRef.detectChanges(),this.matTable.reChangeData()))})}actionBtn(c){let E=this.forms.findIndex(M=>M.dyProductID==c.data.dyProductID);"edit"==c.cmd?this.editLayout(c.data):"delete"==c.cmd?this.delete(E,c.data.dyProductID):"view"==c.cmd&&this.editLayout(c.data)}editLayout(c){this.uiService.selectedForm=c,this.router.navigateByUrl("/config-layout")}viewLayout(c){this.uiService.selectedForm=c,this.router.navigateByUrl("/product-form")}submit(c){let E={pageName:c.pageName,config:JSON.stringify({}),simpleTest:"nothing here",type:"Form"};this.uiService.save(E).toPromise().then(M=>{M&&(this.uiService.selectedForm=M,this.router.navigateByUrl("/config-layout"))})}}return g.\u0275fac=function(c){return new(c||g)(o.Y36(h.F0),o.Y36(n.q),o.Y36(s.FF),o.Y36(o.sBO),o.Y36(e.c))},g.\u0275cmp=o.Xpm({type:g,selectors:[["app-dashboard"]],viewQuery:function(c,E){if(1&c&&o.Gf(r.I,5),2&c){let M;o.iGM(M=o.CRH())&&(E.matTable=M.first)}},decls:12,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","btn-circle",3,"click"],[1,"flaticon2-plus"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","emitter"]],template:function(c,E){1&c&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"div",4),o.TgZ(5,"h3",5),o._uU(6,"Page Groups List"),o.qZA(),o.qZA(),o.TgZ(7,"div",6),o.TgZ(8,"button",7),o.NdJ("click",function(){return E.edit(-1)}),o._UZ(9,"span",8),o.qZA(),o.qZA(),o.qZA(),o.TgZ(10,"div",9),o.TgZ(11,"app-material-table-view",10),o.NdJ("emitter",function(C){return E.actionBtn(C)}),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&c&&(o.xp6(11),o.Q6J("data",E.forms)("colum",E.ELEMENT_COL)("displayedColumns",E.displayedColumns))},directives:[r.I],styles:[""]}),g})();var D=t(49133),f=t(87626),P=t(45598);let d=(()=>{class g{}return g.\u0275fac=function(c){return new(c||g)},g.\u0275mod=o.oAB({type:g}),g.\u0275inj=o.cJS({imports:[[a.ez,f.vi,D.u5,D.UX,P.fA]]}),g})(),u=(()=>{class g{}return g.\u0275fac=function(c){return new(c||g)},g.\u0275mod=o.oAB({type:g}),g.\u0275inj=o.cJS({imports:[[a.ez,f.vi,D.u5,D.UX,P.fA,d,h.Bz.forChild([{path:"",component:l}])]]}),g})()},57354:(y,_,t)=>{t.d(_,{h:()=>v});var a=t(83668),h=t(85378),i=t(41323),p=t(60940),m=t(49133);let v=(()=>{class r{constructor(n,s,e){this.modal=n,this.uiService=s,this.alertService=e,this.oldData={},this.subscriptions=[]}ngOnInit(){}save(){let n=Object.assign(Object.assign({},this.oldData),{pageName:this.name});this.id?this.uiService.updateNoID(n).toPromise().then(s=>{s&&this.modal.dismiss({data:n,type:"edit"})}):this.modal.dismiss({data:n,type:"save"})}ngOnDestroy(){this.subscriptions.forEach(n=>n.unsubscribe())}deleteEditModal(){this.alertService.activate("Are you sure want to delete?","Warning Message").then(n=>{n&&this.modal.dismiss({type:"delete"})})}}return r.\u0275fac=function(n){return new(n||r)(a.Y36(h.Kz),a.Y36(i.q),a.Y36(p.c))},r.\u0275cmp=a.Xpm({type:r,selectors:[["app-edit-modal"]],decls:14,vars:3,consts:[[1,"modal-content"],[1,"modal-header"],["id","example-modal-sizes-title-lg",1,"modal-title","h4","left-border-image"],[1,"overlay","overlay-block","cursor-default","modal-body"],[1,"form-group"],["type","text","name","name","placeholder","",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"modal-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","submit",1,"btn","btn-primary","btn-elevate",3,"disabled","click"]],template:function(n,s){1&n&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a._uU(3),a.qZA(),a.qZA(),a.TgZ(4,"div",3),a.TgZ(5,"div",4),a.TgZ(6,"label"),a._uU(7,"Group Name"),a.qZA(),a.TgZ(8,"input",5),a.NdJ("ngModelChange",function(l){return s.name=l}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(9,"div",6),a.TgZ(10,"button",7),a.NdJ("click",function(){return s.modal.dismiss()}),a._uU(11,"Cancel"),a.qZA(),a.TgZ(12,"button",8),a.NdJ("click",function(){return s.save()}),a._uU(13,"Save"),a.qZA(),a.qZA(),a.qZA()),2&n&&(a.xp6(3),a.hij(" ",s.id?"Edit":"Create"," Group Name "),a.xp6(5),a.Q6J("ngModel",s.name),a.xp6(4),a.Q6J("disabled",!s.name))},directives:[m.Fj,m.JJ,m.On],styles:[""]}),r})()},58695:(y,_,t)=>{t.d(_,{xT:()=>i});let i=(()=>{class p{}return p.GRAND_DISCOUNT=0,p.HIGH_DISCOUNT=0,p})()},95849:(y,_,t)=>{t.d(_,{i:()=>v});var a=t(91691),h=t(18260),i=t(83668),p=t(44522);const m=`${h.N.apiUrl}/fna`;let v=(()=>{class r extends a.i{constructor(n){super(n,m),this.httpClient=n}getAll(){return this.httpClient.get(m)}getFNAAllByLeaId(n){return this.httpClient.get(m+"/"+n)}}return r.\u0275fac=function(n){return new(n||r)(i.LFG(p.eN))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},26106:(y,_,t)=>{t.d(_,{P:()=>r});var a=t(64762),h=t(13902),i=t(83668),p=t(85378),m=t(28210),v=t(67198);let r=(()=>{class o{constructor(s,e,l){this.modal=s,this.fnaService=e,this.authService=l,this.user=new h.T,this.leadId="",this.customer=null,this.conductedBy=null}ngOnInit(){this.user=this.authService.currentUserValue}close(){this.modal.dismiss(null)}chooseFNA(s){return(0,a.mG)(this,void 0,void 0,function*(){let e;this.customer&&(e={leadId:this.leadId,customerId:this.customer.customerId,customerName:this.customer.customerName,fnaType:s,grandDiscount:0,highDiscount:0,id:0,conductedBy:this.conductedBy,createdAt:this.formatDateDDMMYYY(new Date),createdBy:this.user.id,createdByName:this.user.username,updatedAt:new Date,fnaId:null,type:this.customer.customerType,pageStatus:"create",products:[""]}),console.log("reqBody",e),yield this.fnaService.saveFNA(e).toPromise().then(l=>{l&&(console.log("chooseFNA",l),e.fnaId=l)}),this.modal.dismiss(e)})}formatDateDDMMYYY(s){var e=new Date(s),l=""+(e.getMonth()+1),D=""+e.getDate(),f=e.getFullYear();return l.length<2&&(l="0"+l),D.length<2&&(D="0"+D),[D,l,f].join("/")}}return o.\u0275fac=function(s){return new(s||o)(i.Y36(p.Kz),i.Y36(m.T),i.Y36(v.e8))},o.\u0275cmp=i.Xpm({type:o,selectors:[["app-fna-type"]],decls:17,vars:0,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"form"],[1,"col-12",3,"click"],[1,"btn-group",2,"width","100%","display","block","margin","24px 0"],["type","button",1,"btn",2,"max-width","120px","background","#005f99","color","#fff","float","right","margin-right","24px",3,"click"]],template:function(s,e){1&s&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i.TgZ(4,"div",4),i.TgZ(5,"h3",5),i._uU(6,"FNA Type"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(7,"div",6),i.TgZ(8,"div",7),i.NdJ("click",function(){return e.chooseFNA("LPP")}),i.TgZ(9,"label"),i._uU(10,"Create LPP"),i.qZA(),i.qZA(),i.TgZ(11,"div",7),i.NdJ("click",function(){return e.chooseFNA("BRAM")}),i.TgZ(12,"label"),i._uU(13,"Create BRAM"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(14,"div",8),i.TgZ(15,"button",9),i.NdJ("click",function(){return e.close()}),i._uU(16,"Close"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA())},styles:[".form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]{padding:10px 40px;cursor:pointer}.form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer}.form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]:first-child{border-bottom:1px solid #dad9d9}"]}),o})()},57311:(y,_,t)=>{t.d(_,{Z:()=>r});var a=t(92070),i=t(18260),p=t(83668),m=t(44522);const v=`${i.N.apiUrl}/lead`;let r=(()=>{class o{constructor(s){this.httpClient=s}getLeadList(s={}){let e=v+"?";return s.campaignName&&(e=e+"campaignName="+s.campaignName+"&"),s.existingCustomerId&&(e=e+"existingCustomerId="+s.existingCustomerId+"&"),s.leadId&&(e=e+"leadId="+s.leadId+"&"),s.contactName&&(e=e+"contactName="+s.contactName+"&"),s.startDate&&(e=e+"startDate="+a(s.startDate).format("YYYY-MM-DD")+"&"),s.endDate&&(e=e+"endDate="+a(s.endDate).format("YYYY-MM-DD")+"&"),s.productId&&(e=e+"productId="+s.productId+"&"),s.sourceCode&&(e=e+"sourceCode="+s.sourceCode+"&"),s.statusCode&&(e=e+"statusCode="+s.statusCode+"&"),console.log(e),this.httpClient.get(e)}}return o.\u0275fac=function(s){return new(s||o)(p.LFG(m.eN))},o.\u0275prov=p.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},46045:(y,_,t)=>{t.d(_,{d:()=>o});var a=t(92070),i=t(18260),p=t(91691),m=t(83668),v=t(44522);const r=`${i.N.apiUrl}/policy`;let o=(()=>{class n extends p.i{constructor(e){super(e,r),this.httpClient=e}getPolicyList(e={}){let l=r+"?";return l=l+"isTeam="+!!e.isTeam+"&",e.startDate&&(l=l+"startDate="+a(e.startDate).format("YYYY-MM-DD")+"&"),e.endDate&&(l=l+"endDate="+a(e.endDate).format("YYYY-MM-DD")+"&"),this.httpClient.get(l)}updateAttachment(e,l){return this.httpClient.put(r+"/attachment",{attachmentId:l+"",policyNo:e})}}return n.\u0275fac=function(e){return new(e||n)(m.LFG(v.eN))},n.\u0275prov=m.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},552:(y,_,t)=>{t.d(_,{Q:()=>e});var a=t(82997),h=t(85724),i=t(18260),p=t(91691),m=t(54753),r=t(83668),o=t(44522),n=t(26697);const s=`${i.N.apiUrl}/pagedata`;let e=(()=>{class l extends p.i{constructor(f,P){super(f,s),this.httpClient=f,this.masterData=P}getDetail(f,P,d,u=!1,g=[],A=!1){return this.httpClient.get(s+"/"+f+"/"+P+"/"+d).pipe((0,h.z)(c=>u?function(l,D,f,P=!1){return Array.isArray(D)&&D.length>0?(0,a.of)(D).pipe((0,m.U)(d=>{let u=[];return d.map(A=>{let c=A.data.filter(E=>(E.value+"").startsWith("T-")||(E.value+"").startsWith("TA-"));if(c.length>0){let E=c.map(M=>{let C=f.find(O=>O.name==M.column);if(C.masterData)return{codeId:M.value,codeType:C.masterData,langCd:"EN"}});u.push(...E)}}),{result:d,masterPost:u}}),(0,h.z)(d=>d.masterPost.length>0?l.getMasterValue({codeBookRequest:d.masterPost}).pipe((0,m.U)(g=>d.result.map(A=>(A.data=A.data.flatMap(c=>{if((c.value+"").startsWith("T-")||(c.value+"").startsWith("TA-")){let E=f.find(C=>C.name==c.column),M=g.findIndex(C=>C.codeId==c.value&&E.masterData==C.codeType);if(M>=0){if(P)return[c,{column:c.column+"Value",value:g[M].codeName}];c.value=g[M].codeName}}return c}),A)))):(0,a.of)(d.result))):(0,a.of)(D)}(this.masterData,c,g,A):(0,a.of)(c)))}deleteData(f,P,d){return this.httpClient.delete(s+"/"+f+"/"+P+"/"+d)}updatePremimun(f){return this.httpClient.put(s+"/resource",f)}}return l.\u0275fac=function(f){return new(f||l)(r.LFG(o.eN),r.LFG(n.D))},l.\u0275prov=r.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},80842:(y,_,t)=>{t.d(_,{G:()=>o});var a=t(92070),i=t(18260),p=t(91691),m=t(83668),v=t(44522);const r=`${i.N.apiUrl}/quotation`;let o=(()=>{class n extends p.i{constructor(e){super(e,r),this.httpClient=e}getQuoList(e={}){let l=r+"?";return l=l+"isTeam="+!!e.isTeam+"&",e.startDate&&(l=l+"startDate="+a(e.startDate).format("YYYY-MM-DD")+"&"),e.endDate&&(l=l+"endDate="+a(e.endDate).format("YYYY-MM-DD")+"&"),this.httpClient.get(l)}}return n.\u0275fac=function(e){return new(e||n)(m.LFG(v.eN))},n.\u0275prov=m.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},61596:(y,_,t)=>{t.d(_,{s:()=>D});var a=t(18260),h=t(91691),i=t(83668),p=t(44522);const m=`${a.N.apiUrl}/dashboard/agent`,v=`${a.N.apiUrl}/dashboard/lead-activity/count`,r=`${a.N.apiUrl}/dashboard/resent-operation`,o=`${a.N.apiUrl}/dashboard/today-campaign`,n=`${a.N.apiUrl}/dashboard/follow-up`,s=`${a.N.apiUrl}/dashboard/backlog`,e=`${a.N.apiUrl}/dashboard/assign-lead`,l=`${a.N.apiUrl}/dashboard/sale-active-agent`;let D=(()=>{class f extends h.i{constructor(d){super(d,m),this.httpClient=d}getList(d={}){let u=m+"?";return d.empId&&(u=u+"empId="+d.empId+"&"),this.httpClient.get(u)}getLeadList(d={}){let u=v+"?";return d.empId&&(u=u+"empId="+d.empId+"&"),this.httpClient.get(u)}getRecentList(d={}){let u=r+"?";return d.empId&&(u=u+"empId="+d.empId+"&"),this.httpClient.get(u)}getCampaignList(d={}){let u=o+"?";return d.empId&&(u=u+"empId="+d.empId+"&"),this.httpClient.get(u)}getBacklogList(d={}){let u=s+"?";return d.empId&&(u=u+"empId="+d.empId+"&"),this.httpClient.get(u)}getLeadAssignList(d={}){let u=e+"?";return d.empId&&(u=u+"empId="+d.empId+"&"),this.httpClient.get(u)}getFollowupList(d={}){let u=n+"?";return d.empId&&(u=u+"empId="+d.empId+"&"),this.httpClient.get(u)}getAgentList(d={}){let u=l+"?";return d.empId&&(u=u+"empId="+d.empId+"&"),this.httpClient.get(u)}}return f.\u0275fac=function(d){return new(d||f)(i.LFG(p.eN))},f.\u0275prov=i.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},18410:(y,_,t)=>{t.d(_,{J:()=>s});var a=t(86019),h=t(49133),i=t(85378),p=t(55167),m=t(45598),v=t(75396),r=t(57842),o=t(99765),n=t(83668);let s=(()=>{class e{}return e.\u0275fac=function(D){return new(D||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[a.ez,h.u5,m.fA,h.UX,i.bz,p.Fk,i.M,v.X,r.A0,o.Ud]]}),e})()},93931:(y,_,t)=>{t.d(_,{q:()=>v});var a=t(18260),h=t(91691),i=t(83668),p=t(44522);const m=`${a.N.apiUrl}/health/payment-schedule`;let v=(()=>{class r extends h.i{constructor(n){super(n,m),this.httpClient=n}deleteMany(n){return this.httpClient.delete(m+"/resource/"+n)}getMany(n){return this.httpClient.get(m+"/resource/"+n)}saveAll(n){return this.httpClient.post(m+"s",n)}}return r.\u0275fac=function(n){return new(n||r)(i.LFG(p.eN))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},75291:(y,_,t)=>{t.d(_,{e:()=>v});var a=t(18260),h=t(91691),i=t(83668),p=t(44522);const m=`${a.N.apiUrl}/health/product-detail`;let v=(()=>{class r extends h.i{constructor(n){super(n,m),this.httpClient=n}getOne(n){return this.httpClient.get(m+"/resource/"+n)}}return r.\u0275fac=function(n){return new(n||r)(i.LFG(p.eN))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);