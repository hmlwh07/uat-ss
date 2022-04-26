"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{73620:(y,_,t)=>{t.r(_),t.d(_,{startFocusVisible:()=>p});const o="ion-focused",i=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],p=u=>{let g=[],r=!0;const e=u?u.shadowRoot:document,n=u||document.body,s=c=>{g.forEach(m=>m.classList.remove(o)),c.forEach(m=>m.classList.add(o)),g=c},a=()=>{r=!1,s([])},l=c=>{r=i.includes(c.key),r||s([])},h=c=>{if(r&&c.composedPath){const m=c.composedPath().filter(D=>!!D.classList&&D.classList.contains("ion-focusable"));s(m)}},f=()=>{e.activeElement===n&&s([])};return e.addEventListener("keydown",l),e.addEventListener("focusin",h),e.addEventListener("focusout",f),e.addEventListener("touchstart",a),e.addEventListener("mousedown",a),{destroy:()=>{e.removeEventListener("keydown",l),e.removeEventListener("focusin",h),e.removeEventListener("focusout",f),e.removeEventListener("touchstart",a),e.removeEventListener("mousedown",a)},setFocus:s}}},78107:(y,_,t)=>{t.d(_,{a:()=>o,b:()=>e,c:()=>v,d:()=>u,e:()=>n,f:()=>r,g:()=>g,h:()=>p,i:()=>i});const o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>"},25011:(y,_,t)=>{t.d(_,{s:()=>g});var o=t(86019),v=t(75396),i=t(83668);const p=["chart"];let u=(()=>{class r{constructor(){this.chartOptions={series:[{name:"Inflation",data:[2.3,3.1,4,10.1,4,3.6,3.2,2.3,1.4,.8,.5,.2]}],chart:{height:350,type:"bar"},plotOptions:{bar:{dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(n){return n+"%"},offsetY:-20,style:{fontSize:"12px",colors:["#304758"]}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],position:"top",labels:{offsetY:-18},axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0,offsetY:-35}},fill:{type:"gradient",gradient:{shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[50,0,100,100]}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(n){return n+"%"}}},title:{text:"Monthly Inflation in Argentina, 2002",floating:!0,offsetY:320,align:"center",style:{color:"#444"}}}}}return r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=i.Xpm({type:r,selectors:[["app-column-chart"]],viewQuery:function(n,s){if(1&n&&i.Gf(p,5),2&n){let a;i.iGM(a=i.CRH())&&(s.chart=a.first)}},decls:2,vars:8,consts:[["id","chart"],[3,"series","chart","dataLabels","plotOptions","yaxis","xaxis","fill","title"]],template:function(n,s){1&n&&(i.TgZ(0,"div",0),i._UZ(1,"apx-chart",1),i.qZA()),2&n&&(i.xp6(1),i.Q6J("series",s.chartOptions.series)("chart",s.chartOptions.chart)("dataLabels",s.chartOptions.dataLabels)("plotOptions",s.chartOptions.plotOptions)("yaxis",s.chartOptions.yaxis)("xaxis",s.chartOptions.xaxis)("fill",s.chartOptions.fill)("title",s.chartOptions.title))},directives:[v.x],styles:["#chart[_ngcontent-%COMP%]{max-width:650px;margin:35px auto}"]}),r})(),g=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=i.oAB({type:r,bootstrap:[u]}),r.\u0275inj=i.cJS({providers:[],imports:[[o.ez,v.X]]}),r})()},95976:(y,_,t)=>{t.d(_,{e:()=>e});var o=t(92070),i=t(18260),p=t(91691),u=t(83668),g=t(44522);const r=`${i.N.apiUrl}/activity`;let e=(()=>{class n extends p.i{constructor(a){super(a,r),this.httpClient=a}getActivityList(a={}){let l=r+"?isTeam=true&";return a.type&&(l=l+"type="+a.type+"&"),a.title&&(l=l+"title="+a.title+"&"),a.status&&(l=l+"status="+a.status+"&"),a.startDate&&(l=l+"startDate="+o(a.startDate).format("YYYY-MM-DD")+"&"),a.endDate&&(l=l+"endDate="+o(a.endDate).format("YYYY-MM-DD")+"&"),this.httpClient.get(l)}}return n.\u0275fac=function(a){return new(a||n)(u.LFG(g.eN))},n.\u0275prov=u.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},75512:(y,_,t)=>{t.r(_),t.d(_,{DashboardModule:()=>m,DashboardShareModule:()=>c});var o=t(86019),v=t(4205),i=t(57354),p=t(18510);const u=[{title:"Group Name",type:p.Y.FEILD,field:"pageName"},{title:"Simple Data",type:p.Y.FEILD,field:"simpleTest"},{title:"Actions",type:p.Y.ACTION,field:"actions",btn:{edit:!0,delete:!0}}],g=["pageName","simpleTest","actions"];var r=t(90949),e=t(83668),n=t(41323),s=t(85993),a=t(60940);let l=(()=>{class D{constructor(d,E,M,C,O){this.router=d,this.uiService=E,this.modalService=M,this.cdRef=C,this.alertService=O,this.forms=[],this.form={id:"",name:""},this.ELEMENT_COL=u,this.displayedColumns=g,this.unsubscribe=[],this.ELEMENT_DATA=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"},{position:11,name:"Sodium",weight:22.9897,symbol:"Na"},{position:12,name:"Magnesium",weight:24.305,symbol:"Mg"},{position:13,name:"Aluminum",weight:26.9815,symbol:"Al"},{position:14,name:"Silicon",weight:28.0855,symbol:"Si"},{position:15,name:"Phosphorus",weight:30.9738,symbol:"P"},{position:16,name:"Sulfur",weight:32.065,symbol:"S"},{position:17,name:"Chlorine",weight:35.453,symbol:"Cl"},{position:18,name:"Argon",weight:39.948,symbol:"Ar"},{position:19,name:"Potassium",weight:39.0983,symbol:"K"},{position:20,name:"Calcium",weight:40.078,symbol:"Ca"}]}ngOnInit(){this.getList()}getList(){this.uiService.getByType().toPromise().then(d=>{d&&(this.forms=d.forms,this.cdRef.detectChanges(),this.matTable.reChangeData())})}ngOnDestroy(){this.unsubscribe.forEach(d=>d.unsubscribe())}delete(d,E){this.alertService.activate("Are you sure want to delete?","Warning Message").then(M=>{M&&this.uiService.delete(E).toPromise().then(C=>{C&&this.alertService.activate("This record was deleted","Success Message").then(O=>{}),this.forms.splice(d,1),this.cdRef.detectChanges(),this.matTable.reChangeData()})})}edit(d,E={}){const M=this.modalService.open(i.h,{size:"md",backdrop:!1});M.componentInstance.oldData=E,M.componentInstance.id=E.dyProductID,M.componentInstance.name=JSON.parse(JSON.stringify(E)).pageName,M.result.then(()=>{},C=>{C&&("save"==C.type?this.submit(C.data):"edit"==C.type&&(this.forms[d]=C.data,this.cdRef.detectChanges(),this.matTable.reChangeData()))})}actionBtn(d){let E=this.forms.findIndex(M=>M.dyProductID==d.data.dyProductID);"edit"==d.cmd?this.editLayout(d.data):"delete"==d.cmd?this.delete(E,d.data.dyProductID):"view"==d.cmd&&this.editLayout(d.data)}editLayout(d){this.uiService.selectedForm=d,this.router.navigateByUrl("/config-layout")}viewLayout(d){this.uiService.selectedForm=d,this.router.navigateByUrl("/product-form")}submit(d){let E={pageName:d.pageName,config:JSON.stringify({}),simpleTest:"nothing here",type:"Form"};this.uiService.save(E).toPromise().then(M=>{M&&(this.uiService.selectedForm=M,this.router.navigateByUrl("/config-layout"))})}}return D.\u0275fac=function(d){return new(d||D)(e.Y36(v.F0),e.Y36(n.q),e.Y36(s.FF),e.Y36(e.sBO),e.Y36(a.c))},D.\u0275cmp=e.Xpm({type:D,selectors:[["app-dashboard"]],viewQuery:function(d,E){if(1&d&&e.Gf(r.I,5),2&d){let M;e.iGM(M=e.CRH())&&(E.matTable=M.first)}},decls:12,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","btn-circle",3,"click"],[1,"flaticon2-plus"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","emitter"]],template:function(d,E){1&d&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"h3",5),e._uU(6,"Page Groups List"),e.qZA(),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"button",7),e.NdJ("click",function(){return E.edit(-1)}),e._UZ(9,"span",8),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"div",9),e.TgZ(11,"app-material-table-view",10),e.NdJ("emitter",function(C){return E.actionBtn(C)}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&d&&(e.xp6(11),e.Q6J("data",E.forms)("colum",E.ELEMENT_COL)("displayedColumns",E.displayedColumns))},directives:[r.I],styles:[""]}),D})();var h=t(49133),f=t(87626),A=t(45598);let c=(()=>{class D{}return D.\u0275fac=function(d){return new(d||D)},D.\u0275mod=e.oAB({type:D}),D.\u0275inj=e.cJS({imports:[[o.ez,f.vi,h.u5,h.UX,A.fA]]}),D})(),m=(()=>{class D{}return D.\u0275fac=function(d){return new(d||D)},D.\u0275mod=e.oAB({type:D}),D.\u0275inj=e.cJS({imports:[[o.ez,f.vi,h.u5,h.UX,A.fA,c,v.Bz.forChild([{path:"",component:l}])]]}),D})()},57354:(y,_,t)=>{t.d(_,{h:()=>g});var o=t(83668),v=t(85993),i=t(41323),p=t(60940),u=t(49133);let g=(()=>{class r{constructor(n,s,a){this.modal=n,this.uiService=s,this.alertService=a,this.oldData={},this.subscriptions=[]}ngOnInit(){}save(){let n=Object.assign(Object.assign({},this.oldData),{pageName:this.name});this.id?this.uiService.updateNoID(n).toPromise().then(s=>{s&&this.modal.dismiss({data:n,type:"edit"})}):this.modal.dismiss({data:n,type:"save"})}ngOnDestroy(){this.subscriptions.forEach(n=>n.unsubscribe())}deleteEditModal(){this.alertService.activate("Are you sure want to delete?","Warning Message").then(n=>{n&&this.modal.dismiss({type:"delete"})})}}return r.\u0275fac=function(n){return new(n||r)(o.Y36(v.Kz),o.Y36(i.q),o.Y36(p.c))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-edit-modal"]],decls:14,vars:3,consts:[[1,"modal-content"],[1,"modal-header"],["id","example-modal-sizes-title-lg",1,"modal-title","h4","left-border-image"],[1,"overlay","overlay-block","cursor-default","modal-body"],[1,"form-group"],["type","text","name","name","placeholder","",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"modal-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","submit",1,"btn","btn-primary","btn-elevate",3,"disabled","click"]],template:function(n,s){1&n&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o._uU(3),o.qZA(),o.qZA(),o.TgZ(4,"div",3),o.TgZ(5,"div",4),o.TgZ(6,"label"),o._uU(7,"Group Name"),o.qZA(),o.TgZ(8,"input",5),o.NdJ("ngModelChange",function(l){return s.name=l}),o.qZA(),o.qZA(),o.qZA(),o.TgZ(9,"div",6),o.TgZ(10,"button",7),o.NdJ("click",function(){return s.modal.dismiss()}),o._uU(11,"Cancel"),o.qZA(),o.TgZ(12,"button",8),o.NdJ("click",function(){return s.save()}),o._uU(13,"Save"),o.qZA(),o.qZA(),o.qZA()),2&n&&(o.xp6(3),o.hij(" ",s.id?"Edit":"Create"," Group Name "),o.xp6(5),o.Q6J("ngModel",s.name),o.xp6(4),o.Q6J("disabled",!s.name))},directives:[u.Fj,u.JJ,u.On],styles:[""]}),r})()},58695:(y,_,t)=>{t.d(_,{xT:()=>i});let i=(()=>{class p{}return p.GRAND_DISCOUNT=0,p.HIGH_DISCOUNT=0,p})()},95849:(y,_,t)=>{t.d(_,{i:()=>g});var o=t(91691),v=t(18260),i=t(83668),p=t(44522);const u=`${v.N.apiUrl}/fna`;let g=(()=>{class r extends o.i{constructor(n){super(n,u),this.httpClient=n}getAll(){return this.httpClient.get(u)}getFNAAllByLeaId(n){return this.httpClient.get(u+"/"+n)}}return r.\u0275fac=function(n){return new(n||r)(i.LFG(p.eN))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},26106:(y,_,t)=>{t.d(_,{P:()=>r});var o=t(64762),v=t(13902),i=t(83668),p=t(85993),u=t(28210),g=t(67198);let r=(()=>{class e{constructor(s,a,l){this.modal=s,this.fnaService=a,this.authService=l,this.user=new v.T,this.leadId="",this.customer=null,this.conductedBy=null}ngOnInit(){this.user=this.authService.currentUserValue}close(){this.modal.dismiss(null)}chooseFNA(s){return(0,o.mG)(this,void 0,void 0,function*(){let a;this.customer&&(a={leadId:this.leadId,customerId:this.customer.customerId,customerName:this.customer.customerName,fnaType:s,grandDiscount:0,highDiscount:0,id:0,conductedBy:this.conductedBy,createdAt:this.formatDateDDMMYYY(new Date),createdBy:this.user.id,createdByName:this.user.username,updatedAt:new Date,fnaId:null,type:this.customer.customerType,pageStatus:"create",products:[""]}),yield this.fnaService.saveFNA(a).toPromise().then(l=>{l&&(a.fnaId=l)}),this.modal.dismiss(a)})}formatDateDDMMYYY(s){var a=new Date(s),l=""+(a.getMonth()+1),h=""+a.getDate(),f=a.getFullYear();return l.length<2&&(l="0"+l),h.length<2&&(h="0"+h),[h,l,f].join("/")}}return e.\u0275fac=function(s){return new(s||e)(i.Y36(p.Kz),i.Y36(u.T),i.Y36(g.e8))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-fna-type"]],decls:17,vars:0,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"form"],[1,"col-12",3,"click"],[1,"btn-group",2,"width","100%","display","block","margin","24px 0"],["type","button",1,"btn",2,"max-width","120px","background","#005f99","color","#fff","float","right","margin-right","24px",3,"click"]],template:function(s,a){1&s&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"div",3),i.TgZ(4,"div",4),i.TgZ(5,"h3",5),i._uU(6,"FNA Type"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(7,"div",6),i.TgZ(8,"div",7),i.NdJ("click",function(){return a.chooseFNA("LPP")}),i.TgZ(9,"label"),i._uU(10,"Create LPP"),i.qZA(),i.qZA(),i.TgZ(11,"div",7),i.NdJ("click",function(){return a.chooseFNA("BRAM")}),i.TgZ(12,"label"),i._uU(13,"Create BRAM"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(14,"div",8),i.TgZ(15,"button",9),i.NdJ("click",function(){return a.close()}),i._uU(16,"Close"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA())},styles:[".form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]{padding:10px 40px;cursor:pointer}.form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer}.form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]:first-child{border-bottom:1px solid #dad9d9}"]}),e})()},57311:(y,_,t)=>{t.d(_,{Z:()=>r});var o=t(92070),i=t(18260),p=t(83668),u=t(44522);const g=`${i.N.apiUrl}/lead`;let r=(()=>{class e{constructor(s){this.httpClient=s}getLeadList(s={}){let a=g+"?";return s.campaignName&&(a=a+"campaignName="+s.campaignName+"&"),s.existingCustomerId&&(a=a+"existingCustomerId="+s.existingCustomerId+"&"),s.leadId&&(a=a+"leadId="+s.leadId+"&"),s.contactName&&(a=a+"contactName="+s.contactName+"&"),s.startDate&&(a=a+"startDate="+o(s.startDate).format("YYYY-MM-DD")+"&"),s.endDate&&(a=a+"endDate="+o(s.endDate).format("YYYY-MM-DD")+"&"),s.productId&&(a=a+"productId="+s.productId+"&"),s.sourceCode&&(a=a+"sourceCode="+s.sourceCode+"&"),s.statusCode&&(a=a+"statusCode="+s.statusCode+"&"),this.httpClient.get(a)}}return e.\u0275fac=function(s){return new(s||e)(p.LFG(u.eN))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},552:(y,_,t)=>{t.d(_,{Q:()=>a});var o=t(82997),v=t(85724),i=t(18260),p=t(91691),u=t(54753),r=t(83668),e=t(44522),n=t(26697);const s=`${i.N.apiUrl}/pagedata`;let a=(()=>{class l extends p.i{constructor(f,A){super(f,s),this.httpClient=f,this.masterData=A}getDetail(f,A,c,m=!1,D=[],P=!1){return this.httpClient.get(s+"/"+f+"/"+A+"/"+c).pipe((0,v.z)(d=>m?function(l,h,f,A=!1){return Array.isArray(h)&&h.length>0?(0,o.of)(h).pipe((0,u.U)(c=>{let m=[];return c.map(P=>{let d=P.data.filter(E=>(E.value+"").startsWith("T-")||(E.value+"").startsWith("TA-")||(E.value+"").startsWith("TU-"));if(d.length>0){let E=d.map(M=>{let C=f.find(O=>O.name==M.column);if(C.masterData)return{codeId:M.value,codeType:C.masterData,langCd:"EN"}});m.push(...E)}}),{result:c,masterPost:m}}),(0,v.z)(c=>c.masterPost.length>0?l.getMasterValue({codeBookRequest:c.masterPost}).pipe((0,u.U)(D=>c.result.map(P=>(P.data=P.data.flatMap(d=>{if((d.value+"").startsWith("T-")||(d.value+"").startsWith("TA-")){let E=f.find(C=>C.name==d.column),M=D.findIndex(C=>C.codeId==d.value&&E.masterData==C.codeType);if(M>=0){if(A)return[d,{column:d.column+"Value",value:D[M].codeName}];d.value=D[M].codeName,d.valueCode=D[M].codeId}}return d}),P)))):(0,o.of)(c.result))):(0,o.of)(h)}(this.masterData,d,D,P):(0,o.of)(d)))}deleteData(f,A,c){return this.httpClient.delete(s+"/"+f+"/"+A+"/"+c)}updatePremimun(f){return this.httpClient.put(s+"/resource",f)}}return l.\u0275fac=function(f){return new(f||l)(r.LFG(e.eN),r.LFG(n.D))},l.\u0275prov=r.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},80842:(y,_,t)=>{t.d(_,{G:()=>e});var o=t(92070),i=t(18260),p=t(91691),u=t(83668),g=t(44522);const r=`${i.N.apiUrl}/quotation`;let e=(()=>{class n extends p.i{constructor(a){super(a,r),this.httpClient=a}getQuoList(a={}){let l=r+"?";return l=l+"isTeam="+!!a.isTeam+"&",a.startDate&&(l=l+"startDate="+o(a.startDate).format("YYYY-MM-DD")+"&"),a.endDate&&(l=l+"endDate="+o(a.endDate).format("YYYY-MM-DD")+"&"),this.httpClient.get(l)}}return n.\u0275fac=function(a){return new(a||n)(u.LFG(g.eN))},n.\u0275prov=u.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},52902:(y,_,t)=>{t.d(_,{R:()=>g});var o=t(18260),v=t(91691),i=t(83668),p=t(44522);const u=`${o.N.apiUrl}/renewal-policy`;let g=(()=>{class r extends v.i{constructor(n){super(n,u),this.httpClient=n}getRenewList(n={}){return this.findAll()}confirmRenew(n){return this.httpClient.put(u+"/confirm/"+n,{})}}return r.\u0275fac=function(n){return new(n||r)(i.LFG(p.eN))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},61596:(y,_,t)=>{t.d(_,{s:()=>h});var o=t(18260),v=t(91691),i=t(83668),p=t(44522);const u=`${o.N.apiUrl}/dashboard/agent`,g=`${o.N.apiUrl}/dashboard/lead-activity/count`,r=`${o.N.apiUrl}/dashboard/resent-operation`,e=`${o.N.apiUrl}/dashboard/today-campaign`,n=`${o.N.apiUrl}/dashboard/follow-up`,s=`${o.N.apiUrl}/dashboard/backlog`,a=`${o.N.apiUrl}/dashboard/assign-lead`,l=`${o.N.apiUrl}/dashboard/sale-active-agent`;let h=(()=>{class f extends v.i{constructor(c){super(c,u),this.httpClient=c}getList(c={}){let m=u+"?";return c.empId&&(m=m+"empId="+c.empId+"&"),this.httpClient.get(m)}getLeadList(c={}){let m=g+"?";return c.empId&&(m=m+"empId="+c.empId+"&"),this.httpClient.get(m)}getRecentList(c={}){let m=r+"?";return c.empId&&(m=m+"empId="+c.empId+"&"),this.httpClient.get(m)}getCampaignList(c={}){let m=e+"?";return c.empId&&(m=m+"empId="+c.empId+"&"),this.httpClient.get(m)}getBacklogList(c={}){let m=s+"?";return c.empId&&(m=m+"empId="+c.empId+"&"),this.httpClient.get(m)}getLeadAssignList(c={}){let m=a+"?";return c.empId&&(m=m+"empId="+c.empId+"&"),this.httpClient.get(m)}getFollowupList(c={}){let m=n+"?";return c.empId&&(m=m+"empId="+c.empId+"&"),this.httpClient.get(m)}getAgentList(c={}){let m=l+"?";return c.empId&&(m=m+"empId="+c.empId+"&"),this.httpClient.get(m)}}return f.\u0275fac=function(c){return new(c||f)(i.LFG(p.eN))},f.\u0275prov=i.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},18410:(y,_,t)=>{t.d(_,{J:()=>l});var o=t(86019),v=t(49133),i=t(85993),p=t(55167),u=t(45598),g=t(75396),r=t(57842),e=t(99765),n=t(13468),s=t(78480),a=t(83668);let l=(()=>{class h{}return h.\u0275fac=function(A){return new(A||h)},h.\u0275mod=a.oAB({type:h}),h.\u0275inj=a.cJS({imports:[[o.ez,v.u5,u.fA,v.UX,i.bz,p.Fk,s.FA,i.M,n.rP,g.X,r.A0,e.Ud]]}),h})()},37780:(y,_,t)=>{t.d(_,{G:()=>g});var o=t(18260),v=t(91691),i=t(83668),p=t(44522);const u=`${o.N.apiUrl}/travel-risk`;let g=(()=>{class r extends v.i{constructor(n){super(n,u),this.httpClient=n}deleteMany(n){return this.httpClient.delete(u+"/resource/"+n)}getMany(n){return this.httpClient.get(u+"/resource/"+n)}}return r.\u0275fac=function(n){return new(n||r)(i.LFG(p.eN))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);