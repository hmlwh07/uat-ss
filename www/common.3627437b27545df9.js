"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{73620:(M,_,t)=>{t.r(_),t.d(_,{startFocusVisible:()=>m});const a="ion-focused",n=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],m=d=>{let p=[],i=!0;const e=d?d.shadowRoot:document,o=d||document.body,s=l=>{p.forEach(g=>g.classList.remove(a)),l.forEach(g=>g.classList.add(a)),p=l},r=()=>{i=!1,s([])},f=l=>{i=n.includes(l.key),i||s([])},D=l=>{if(i&&l.composedPath){const g=l.composedPath().filter(C=>!!C.classList&&C.classList.contains("ion-focusable"));s(g)}},y=()=>{e.activeElement===o&&s([])};return e.addEventListener("keydown",f),e.addEventListener("focusin",D),e.addEventListener("focusout",y),e.addEventListener("touchstart",r),e.addEventListener("mousedown",r),{destroy:()=>{e.removeEventListener("keydown",f),e.removeEventListener("focusin",D),e.removeEventListener("focusout",y),e.removeEventListener("touchstart",r),e.removeEventListener("mousedown",r)},setFocus:s}}},78107:(M,_,t)=>{t.d(_,{a:()=>a,b:()=>e,c:()=>h,d:()=>d,e:()=>o,f:()=>i,g:()=>p,h:()=>m,i:()=>n});const a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>"},25011:(M,_,t)=>{t.d(_,{s:()=>p});var a=t(86019),h=t(75396),n=t(83668);const m=["chart"];let d=(()=>{class i{constructor(){this.chartOptions={series:[{name:"Inflation",data:[2.3,3.1,4,10.1,4,3.6,3.2,2.3,1.4,.8,.5,.2]}],chart:{height:350,type:"bar"},plotOptions:{bar:{dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(o){return o+"%"},offsetY:-20,style:{fontSize:"12px",colors:["#304758"]}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],position:"top",labels:{offsetY:-18},axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0,offsetY:-35}},fill:{type:"gradient",gradient:{shade:"light",type:"horizontal",shadeIntensity:.25,gradientToColors:void 0,inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[50,0,100,100]}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(o){return o+"%"}}},title:{text:"Monthly Inflation in Argentina, 2002",floating:!0,offsetY:320,align:"center",style:{color:"#444"}}}}}return i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-column-chart"]],viewQuery:function(o,s){if(1&o&&n.Gf(m,5),2&o){let r;n.iGM(r=n.CRH())&&(s.chart=r.first)}},decls:2,vars:8,consts:[["id","chart"],[3,"series","chart","dataLabels","plotOptions","yaxis","xaxis","fill","title"]],template:function(o,s){1&o&&(n.TgZ(0,"div",0),n._UZ(1,"apx-chart",1),n.qZA()),2&o&&(n.xp6(1),n.Q6J("series",s.chartOptions.series)("chart",s.chartOptions.chart)("dataLabels",s.chartOptions.dataLabels)("plotOptions",s.chartOptions.plotOptions)("yaxis",s.chartOptions.yaxis)("xaxis",s.chartOptions.xaxis)("fill",s.chartOptions.fill)("title",s.chartOptions.title))},directives:[h.x],styles:["#chart[_ngcontent-%COMP%]{max-width:650px;margin:35px auto}"]}),i})(),p=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=n.oAB({type:i,bootstrap:[d]}),i.\u0275inj=n.cJS({providers:[],imports:[[a.ez,h.X]]}),i})()},95976:(M,_,t)=>{t.d(_,{e:()=>p});var a=t(18260),h=t(91691),n=t(83668),m=t(44522);const d=`${a.N.apiUrl}/activity`;let p=(()=>{class i extends h.i{constructor(o){super(o,d),this.httpClient=o}getActivityList(o={}){let s=d+"?isTeam=true&";return o.type&&(s=s+"type="+o.type+"&"),o.title&&(s=s+"title="+o.title+"&"),o.status&&(s=s+"status="+o.status),this.httpClient.get(s)}}return i.\u0275fac=function(o){return new(o||i)(n.LFG(m.eN))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},75512:(M,_,t)=>{t.r(_),t.d(_,{DashboardModule:()=>l,DashboardShareModule:()=>u});var a=t(86019),h=t(29018),n=t(57354),m=t(18510);const d=[{title:"Group Name",type:m.Y.FEILD,field:"pageName"},{title:"Simple Data",type:m.Y.FEILD,field:"simpleTest"},{title:"Actions",type:m.Y.ACTION,field:"actions",btn:{edit:!0,delete:!0}}],p=["pageName","simpleTest","actions"];var i=t(90949),e=t(83668),o=t(41323),s=t(85378);let r=(()=>{class g{constructor(c,v,E,A){this.router=c,this.uiService=v,this.modalService=E,this.cdRef=A,this.forms=[],this.form={id:"",name:""},this.ELEMENT_COL=d,this.displayedColumns=p,this.unsubscribe=[],this.ELEMENT_DATA=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"},{position:11,name:"Sodium",weight:22.9897,symbol:"Na"},{position:12,name:"Magnesium",weight:24.305,symbol:"Mg"},{position:13,name:"Aluminum",weight:26.9815,symbol:"Al"},{position:14,name:"Silicon",weight:28.0855,symbol:"Si"},{position:15,name:"Phosphorus",weight:30.9738,symbol:"P"},{position:16,name:"Sulfur",weight:32.065,symbol:"S"},{position:17,name:"Chlorine",weight:35.453,symbol:"Cl"},{position:18,name:"Argon",weight:39.948,symbol:"Ar"},{position:19,name:"Potassium",weight:39.0983,symbol:"K"},{position:20,name:"Calcium",weight:40.078,symbol:"Ca"}]}ngOnInit(){this.getList()}getList(){this.uiService.getByType().toPromise().then(c=>{c&&(this.forms=c.forms,this.cdRef.detectChanges(),this.matTable.reChangeData())})}ngOnDestroy(){this.unsubscribe.forEach(c=>c.unsubscribe())}delete(c,v){this.uiService.delete(v).toPromise().then(E=>{E&&this.forms.splice(c,1),this.cdRef.detectChanges(),this.matTable.reChangeData()})}edit(c,v={}){const E=this.modalService.open(n.h,{size:"md",backdrop:!1});E.componentInstance.oldData=v,E.componentInstance.id=v.dyProductID,E.componentInstance.name=JSON.parse(JSON.stringify(v)).pageName,E.result.then(()=>{},A=>{A&&("save"==A.type?this.submit(A.data):"edit"==A.type&&(this.forms[c]=A.data,this.cdRef.detectChanges(),this.matTable.reChangeData()))})}actionBtn(c){let v=this.forms.findIndex(E=>E.dyProductID==c.data.dyProductID);"edit"==c.cmd?this.editLayout(c.data):"delete"==c.cmd?this.delete(v,c.data.dyProductID):"view"==c.cmd&&this.editLayout(c.data)}editLayout(c){this.uiService.selectedForm=c,this.router.navigateByUrl("/config-layout")}viewLayout(c){this.uiService.selectedForm=c,this.router.navigateByUrl("/product-form")}submit(c){let v={pageName:c.pageName,config:JSON.stringify({}),simpleTest:"nothing here",type:"Form"};this.uiService.save(v).toPromise().then(E=>{E&&(this.uiService.selectedForm=E,this.router.navigateByUrl("/config-layout"))})}}return g.\u0275fac=function(c){return new(c||g)(e.Y36(h.F0),e.Y36(o.q),e.Y36(s.FF),e.Y36(e.sBO))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-dashboard"]],viewQuery:function(c,v){if(1&c&&e.Gf(i.I,5),2&c){let E;e.iGM(E=e.CRH())&&(v.matTable=E.first)}},decls:12,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","btn-circle",3,"click"],[1,"flaticon2-plus"],[1,"card-body","customer-card-body"],[3,"data","colum","displayedColumns","emitter"]],template:function(c,v){1&c&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"h3",5),e._uU(6,"Page Groups List"),e.qZA(),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"button",7),e.NdJ("click",function(){return v.edit(-1)}),e._UZ(9,"span",8),e.qZA(),e.qZA(),e.qZA(),e.TgZ(10,"div",9),e.TgZ(11,"app-material-table-view",10),e.NdJ("emitter",function(A){return v.actionBtn(A)}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&c&&(e.xp6(11),e.Q6J("data",v.forms)("colum",v.ELEMENT_COL)("displayedColumns",v.displayedColumns))},directives:[i.I],styles:[""]}),g})();var f=t(49133),D=t(87626),y=t(45598);let u=(()=>{class g{}return g.\u0275fac=function(c){return new(c||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[[a.ez,D.vi,f.u5,f.UX,y.fA]]}),g})(),l=(()=>{class g{}return g.\u0275fac=function(c){return new(c||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[[a.ez,D.vi,f.u5,f.UX,y.fA,u,h.Bz.forChild([{path:"",component:r}])]]}),g})()},57354:(M,_,t)=>{t.d(_,{h:()=>d});var a=t(83668),h=t(85378),n=t(41323),m=t(49133);let d=(()=>{class p{constructor(e,o){this.modal=e,this.uiService=o,this.oldData={},this.subscriptions=[]}ngOnInit(){}save(){let e=Object.assign(Object.assign({},this.oldData),{pageName:this.name});this.id?this.uiService.updateNoID(e).toPromise().then(o=>{o&&this.modal.dismiss({data:e,type:"edit"})}):this.modal.dismiss({data:e,type:"save"})}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}}return p.\u0275fac=function(e){return new(e||p)(a.Y36(h.Kz),a.Y36(n.q))},p.\u0275cmp=a.Xpm({type:p,selectors:[["app-edit-modal"]],decls:14,vars:3,consts:[[1,"modal-content"],[1,"modal-header"],["id","example-modal-sizes-title-lg",1,"modal-title","h4","left-border-image"],[1,"overlay","overlay-block","cursor-default","modal-body"],[1,"form-group"],["type","text","name","name","placeholder","",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"modal-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","submit",1,"btn","btn-primary","btn-elevate",3,"disabled","click"]],template:function(e,o){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a._uU(3),a.qZA(),a.qZA(),a.TgZ(4,"div",3),a.TgZ(5,"div",4),a.TgZ(6,"label"),a._uU(7,"Group Name"),a.qZA(),a.TgZ(8,"input",5),a.NdJ("ngModelChange",function(r){return o.name=r}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(9,"div",6),a.TgZ(10,"button",7),a.NdJ("click",function(){return o.modal.dismiss()}),a._uU(11,"Cancel"),a.qZA(),a.TgZ(12,"button",8),a.NdJ("click",function(){return o.save()}),a._uU(13,"Save"),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(3),a.hij(" ",o.id?"Edit":"Create"," Group Name "),a.xp6(5),a.Q6J("ngModel",o.name),a.xp6(4),a.Q6J("disabled",!o.name))},directives:[m.Fj,m.JJ,m.On],styles:[""]}),p})()},58695:(M,_,t)=>{t.d(_,{xT:()=>n});let n=(()=>{class m{}return m.GRAND_DISCOUNT=0,m.HIGH_DISCOUNT=0,m})()},95849:(M,_,t)=>{t.d(_,{i:()=>p});var a=t(91691),h=t(18260),n=t(83668),m=t(44522);const d=`${h.N.apiUrl}/fna`;let p=(()=>{class i extends a.i{constructor(o){super(o,d),this.httpClient=o}getAll(){return this.httpClient.get(d)}getFNAAllByLeaId(o){return this.httpClient.get(d+"/"+o)}}return i.\u0275fac=function(o){return new(o||i)(n.LFG(m.eN))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},26106:(M,_,t)=>{t.d(_,{P:()=>i});var a=t(64762),h=t(13902),n=t(83668),m=t(85378),d=t(28210),p=t(67198);let i=(()=>{class e{constructor(s,r,f){this.modal=s,this.fnaService=r,this.authService=f,this.user=new h.T,this.leadId="",this.customer=null,this.conductedBy=null}ngOnInit(){this.user=this.authService.currentUserValue}close(){this.modal.dismiss(null)}chooseFNA(s){return(0,a.mG)(this,void 0,void 0,function*(){let r;this.customer&&(r={leadId:this.leadId,customerId:this.customer.customerId,customerName:this.customer.customerName,fnaType:s,grandDiscount:0,highDiscount:0,id:0,conductedBy:this.conductedBy,createdAt:new Date,createdBy:this.user.id,createdByName:this.user.username,updatedAt:new Date,fnaId:null,type:this.customer.customerType,pageStatus:"create",products:[""]}),console.log("reqBody",r),yield this.fnaService.saveFNA(r).toPromise().then(f=>{f&&(r.fnaId=f)}),this.modal.dismiss(r)})}}return e.\u0275fac=function(s){return new(s||e)(n.Y36(m.Kz),n.Y36(d.T),n.Y36(p.e8))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-fna-type"]],decls:17,vars:0,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"form"],[1,"col-12",3,"click"],[1,"btn-group",2,"width","100%","display","block","margin","24px 0"],["type","button",1,"btn",2,"max-width","120px","background","#005f99","color","#fff","float","right","margin-right","24px",3,"click"]],template:function(s,r){1&s&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"div",3),n.TgZ(4,"div",4),n.TgZ(5,"h3",5),n._uU(6,"FNA Type"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(7,"div",6),n.TgZ(8,"div",7),n.NdJ("click",function(){return r.chooseFNA("LPP")}),n.TgZ(9,"label"),n._uU(10,"Create LPP"),n.qZA(),n.qZA(),n.TgZ(11,"div",7),n.NdJ("click",function(){return r.chooseFNA("BRAM")}),n.TgZ(12,"label"),n._uU(13,"Create BRAM"),n.qZA(),n.qZA(),n.qZA(),n.TgZ(14,"div",8),n.TgZ(15,"button",9),n.NdJ("click",function(){return r.close()}),n._uU(16,"Close"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA())},styles:[".form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]{padding:10px 40px;cursor:pointer}.form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{cursor:pointer}.form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]:first-child{border-bottom:1px solid #dad9d9}"]}),e})()},57311:(M,_,t)=>{t.d(_,{Z:()=>i});var a=t(92070),n=t(18260),m=t(83668),d=t(44522);const p=`${n.N.apiUrl}/lead`;let i=(()=>{class e{constructor(s){this.httpClient=s}getLeadList(s={}){let r=p+"?";return s.campaignName&&(r=r+"campaignName="+s.campaignName+"&"),s.existingCustomerId&&(r=r+"existingCustomerId="+s.existingCustomerId+"&"),s.leadId&&(r=r+"leadId="+s.leadId+"&"),s.contactName&&(r=r+"contactName="+s.contactName+"&"),s.openDateStr&&(r=r+"openDateStr="+a(s.openDateStr).format("YYYY-MM-DD")+"&"),s.productId&&(r=r+"productId="+s.productId+"&"),s.sourceCode&&(r=r+"sourceCode="+s.sourceCode+"&"),s.statusCode&&(r=r+"statusCode="+s.statusCode+"&"),console.log(r),this.httpClient.get(r)}}return e.\u0275fac=function(s){return new(s||e)(m.LFG(d.eN))},e.\u0275prov=m.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},46045:(M,_,t)=>{t.d(_,{d:()=>p});var a=t(18260),h=t(91691),n=t(83668),m=t(44522);const d=`${a.N.apiUrl}/policy`;let p=(()=>{class i extends h.i{constructor(o){super(o,d),this.httpClient=o}updateAttachment(o,s){return this.httpClient.put(d+"/attachment",{attachmentId:s+"",policyNo:o})}}return i.\u0275fac=function(o){return new(o||i)(n.LFG(m.eN))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},552:(M,_,t)=>{t.d(_,{Q:()=>r});var a=t(82997),h=t(85724),n=t(18260),m=t(91691),d=t(54753),i=t(83668),e=t(44522),o=t(26697);const s=`${n.N.apiUrl}/pagedata`;let r=(()=>{class f extends m.i{constructor(y,u){super(y,s),this.httpClient=y,this.masterData=u}getDetail(y,u,l,g=!1,C=[],c=!1){return this.httpClient.get(s+"/"+y+"/"+u+"/"+l).pipe((0,h.z)(v=>g?function(f,D,y,u=!1){return Array.isArray(D)&&D.length>0?(0,a.of)(D).pipe((0,d.U)(l=>{let g=[];return l.map(c=>{let v=c.data.filter(E=>(E.value+"").startsWith("T-")||(E.value+"").startsWith("TA-"));if(v.length>0){let E=v.map(A=>{let P=y.find(O=>O.name==A.column);if(P.masterData)return{codeId:A.value,codeType:P.masterData,langCd:"EN"}});g.push(...E)}}),{result:l,masterPost:g}}),(0,h.z)(l=>l.masterPost.length>0?f.getMasterValue({codeBookRequest:l.masterPost}).pipe((0,d.U)(C=>l.result.map(c=>(c.data=c.data.flatMap(v=>{if((v.value+"").startsWith("T-")||(v.value+"").startsWith("TA-")){let E=y.find(P=>P.name==v.column),A=C.findIndex(P=>P.codeId==v.value&&E.masterData==P.codeType);if(A>=0){if(u)return[v,{column:v.column+"Value",value:C[A].codeName}];v.value=C[A].codeName}}return v}),c)))):(0,a.of)(l.result))):(0,a.of)(D)}(this.masterData,v,C,c):(0,a.of)(v)))}deleteData(y,u,l){return this.httpClient.delete(s+"/"+y+"/"+u+"/"+l)}updatePremimun(y){return this.httpClient.put(s+"/resource",y)}}return f.\u0275fac=function(y){return new(y||f)(i.LFG(e.eN),i.LFG(o.D))},f.\u0275prov=i.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},80842:(M,_,t)=>{t.d(_,{G:()=>p});var a=t(18260),h=t(91691),n=t(83668),m=t(44522);const d=`${a.N.apiUrl}/quotation`;let p=(()=>{class i extends h.i{constructor(o){super(o,d),this.httpClient=o}}return i.\u0275fac=function(o){return new(o||i)(n.LFG(m.eN))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},61596:(M,_,t)=>{t.d(_,{s:()=>f});var a=t(18260),h=t(91691),n=t(83668),m=t(44522);const d=`${a.N.apiUrl}/dashboard/agent`,p=`${a.N.apiUrl}/dashboard/lead-activity/count`,i=`${a.N.apiUrl}/dashboard/resent-operation`,e=`${a.N.apiUrl}/dashboard/today-campaign`,o=`${a.N.apiUrl}/dashboard/follow-up`,s=`${a.N.apiUrl}/dashboard/backlog`,r=`${a.N.apiUrl}/dashboard/assign-lead`;let f=(()=>{class D extends h.i{constructor(u){super(u,d),this.httpClient=u}getList(u={}){let l=d+"?";return u.empId&&(l=l+"empId="+u.empId+"&"),this.httpClient.get(l)}getLeadList(u={}){let l=p+"?";return u.empId&&(l=l+"empId="+u.empId+"&"),this.httpClient.get(l)}getRecentList(u={}){let l=i+"?";return u.empId&&(l=l+"empId="+u.empId+"&"),this.httpClient.get(l)}getCampaignList(u={}){let l=e+"?";return u.empId&&(l=l+"empId="+u.empId+"&"),this.httpClient.get(l)}getBacklogList(u={}){let l=s+"?";return u.empId&&(l=l+"empId="+u.empId+"&"),this.httpClient.get(l)}getLeadAssignList(u={}){let l=r+"?";return u.empId&&(l=l+"empId="+u.empId+"&"),this.httpClient.get(l)}getFollowupList(u={}){let l=o+"?";return u.empId&&(l=l+"empId="+u.empId+"&"),this.httpClient.get(l)}}return D.\u0275fac=function(u){return new(u||D)(n.LFG(m.eN))},D.\u0275prov=n.Yz7({token:D,factory:D.\u0275fac,providedIn:"root"}),D})()},18410:(M,_,t)=>{t.d(_,{J:()=>s});var a=t(86019),h=t(49133),n=t(85378),m=t(55167),d=t(45598),p=t(75396),i=t(57842),e=t(99765),o=t(83668);let s=(()=>{class r{}return r.\u0275fac=function(D){return new(D||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[a.ez,h.u5,d.fA,h.UX,n.bz,m.Fk,n.M,p.X,i.A0,e.Ud]]}),r})()},93931:(M,_,t)=>{t.d(_,{q:()=>p});var a=t(18260),h=t(91691),n=t(83668),m=t(44522);const d=`${a.N.apiUrl}/health/payment-schedule`;let p=(()=>{class i extends h.i{constructor(o){super(o,d),this.httpClient=o}deleteMany(o){return this.httpClient.delete(d+"/resource/"+o)}getMany(o){return this.httpClient.get(d+"/resource/"+o)}saveAll(o){return this.httpClient.post(d+"s",o)}}return i.\u0275fac=function(o){return new(o||i)(n.LFG(m.eN))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},75291:(M,_,t)=>{t.d(_,{e:()=>p});var a=t(18260),h=t(91691),n=t(83668),m=t(44522);const d=`${a.N.apiUrl}/health/product-detail`;let p=(()=>{class i extends h.i{constructor(o){super(o,d),this.httpClient=o}getOne(o){return this.httpClient.get(d+"/resource/"+o)}}return i.\u0275fac=function(o){return new(o||i)(n.LFG(m.eN))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}]);