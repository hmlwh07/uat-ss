"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5693],{55410:(k,Z,r)=>{r.d(Z,{Ys:()=>J,ou:()=>R,p3:()=>z});var d=r(70655),f=r(92340),c=r(38313),u=r(47423),m=(()=>{return(s=m||(m={})).Documents="DOCUMENTS",s.Data="DATA",s.Library="LIBRARY",s.Cache="CACHE",s.External="EXTERNAL",s.ExternalStorage="EXTERNAL_STORAGE",m;var s})();const v=(0,u.fo)("Filesystem",{web:()=>r.e(6364).then(r.bind(r,96364)).then(s=>new s.FilesystemWeb)}),C=(0,u.fo)("BlobWriter");function w(s){const l=new Uint8Array(s);let e="",o=0;for(;!(o>=l.byteLength);)e+=String.fromCharCode(l[o]),o+=1;return window.btoa(e)}function A(s,l,e){if(0===e.size)return Promise.resolve();const o=393216,n=e.slice(0,o);return new window.Response(n).arrayBuffer().then(function(a){return v.appendFile({directory:s,path:l,data:w(a)})}).then(function(){return A(s,l,e.slice(o))})}function b({path:s,directory:l,blob:e,recursive:o}){return v.writeFile({directory:l,path:s,recursive:o,data:""}).then(function({uri:n}){return A(l,s,e).then(function(){return n})})}const y=Object.freeze(function L(s){const{path:l,directory:e,blob:o,recursive:n,on_fallback:i}=s;return"ios"!==u.dV.platform&&"android"!==u.dV.platform?b(s):Promise.all([C.get_config(),v.getUri({path:l,directory:e})]).then(function([g,_]){const{base_url:I,auth_token:H}=g,N=_.uri.replace("file://","");return Promise.all([fetch(I+N+(n?"?recursive=true":""),{headers:{authorization:H},method:"put",body:o}),Promise.resolve(_)])}).then(function([a,g]){if(204!==a.status)throw new Error("Bad HTTP status: "+a.status);return g.uri}).catch(function(g){return void 0!==i&&i(g),b(s)})});var h=r(5e3),O=r(40520),q=r(94320),D=r(16164),U=r(43632),S=r(25492),F=r(96115);const p=`${f.N.apiUrl}/attachment-uploader`;let z=(()=>{class s extends c.i{constructor(e){super(e,p),this.httpClient=e}}return s.\u0275fac=function(e){return new(e||s)(h.LFG(O.eN))},s.\u0275prov=h.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();const M=`${f.N.apiUrl}/attachment-downloader`,x=`${f.N.apiUrl}`;let J=(()=>{class s extends c.i{constructor(e,o,n,i,a,g){super(e,M),this.httpClient=e,this.file=o,this.loadingService=n,this.toastService=i,this.alertService=a,this.translate=g}getFile(e){return this.httpClient.get(x+e,{responseType:"blob"})}get(e,o){return this.httpClient.get(x+e,{params:o})}mobileTCSDownload(e,o){return(0,d.mG)(this,void 0,void 0,function*(){URL.createObjectURL(o),this.file.checkDir(this.file.externalRootDirectory,"kbzms_downloads").then(i=>{this.createFile(e,o)}).catch(i=>{this.file.createDir(this.file.externalRootDirectory,"kbzms_downloads",!1).then(a=>{this.createFile(e,o)}).catch(a=>(0,d.mG)(this,void 0,void 0,function*(){console.log(a),yield this.loadingService.deactivate();let g=this.translate.transform("ERROR.file_error");this.alertService.activate(g,"Download File")}))})})}downloadTCSFile(e,o){var n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=o,n.click();let i=this.translate.transform("ERROR.download_success");this.alertService.activate(i,"Download File"),n.remove()}getDownload(e,o){this.httpClient.get(M+"/"+e,{responseType:"blob"}).toPromise().then(n=>{n&&(u.dV.isNativePlatform()?this.mobileDownload(o,n):this.downloadFile(n,o))})}downloadFile(e,o){var n=document.createElement("a");n.href=URL.createObjectURL(e),n.download=o,n.click(),n.remove()}mobileDownload(e,o){return(0,d.mG)(this,void 0,void 0,function*(){try{yield v.mkdir({path:"kbzsale_downloads",directory:m.Documents,recursive:!1}),this.createFile(e,o)}catch(n){this.createFile(e,o)}})}createFile(e,o){return(0,d.mG)(this,void 0,void 0,function*(){try{yield y({path:"kbzsale_downloads/"+e,directory:m.Documents,blob:o}),yield this.loadingService.deactivate(),this.alertService.activate('"Download File',"Success Message")}catch(n){yield this.loadingService.deactivate(),this.alertService.activate('"Download Fail',"Error Message")}})}}return s.\u0275fac=function(e){return new(e||s)(h.LFG(O.eN),h.LFG(q.$),h.LFG(D.b),h.LFG(U.T),h.LFG(S.c),h.LFG(F.K))},s.\u0275prov=h.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();const T=`${f.N.apiUrl}/attachment-ref`;let R=(()=>{class s extends c.i{constructor(e){super(e,T),this.httpClient=e}getAttachmentListRef(e,o){return this.httpClient.get(T+"?refDocNo="+e+"&refDocType="+o)}}return s.\u0275fac=function(e){return new(e||s)(h.LFG(O.eN))},s.\u0275prov=h.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},45693:(k,Z,r)=>{r.r(Z),r.d(Z,{DashboardKbzMsLpPageModule:()=>l});var d=r(69808),f=r(93075),c=r(83950),u=r(96592),m=r(70655),K=r(92340),P=r(26388),t=r(5e3),v=r(86298),C=r(59257),w=r(55410),A=r(98807);const b=["chart"];function L(e,o){if(1&e&&t._UZ(0,"img",29),2&e){const n=t.oxw();t.Q6J("src",n.DEFAULT_DOWNLOAD_URL+(null==n.data||null==n.data.agentInfo?null:n.data.agentInfo.attId),t.LSH)}}function y(e,o){1&e&&t._UZ(0,"img",30)}function h(e,o){if(1&e&&(t.TgZ(0,"ion-item",31),t.TgZ(1,"ion-thumbnail",32),t._UZ(2,"img",33),t.qZA(),t.TgZ(3,"ion-text"),t._uU(4),t.qZA(),t.TgZ(5,"ion-text",34),t._uU(6),t.ALo(7,"number"),t.qZA(),t.qZA()),2&e){const n=o.$implicit,i=t.oxw();t.xp6(2),t.Q6J("src",i.DEFAULT_DOWNLOAD_URL+n.productSmallIcon,t.LSH),t.xp6(2),t.Oqu(n.productName),t.xp6(2),t.hij("",t.xi3(7,3,n.premium||0,"1.2-2")," MMK")}}function O(e,o){if(1&e&&(t.TgZ(0,"ion-row"),t.TgZ(1,"ion-col"),t._uU(2),t.qZA(),t.TgZ(3,"ion-col"),t._uU(4),t.qZA(),t.TgZ(5,"ion-col"),t._uU(6),t.ALo(7,"titlecase"),t.qZA(),t.qZA()),2&e){const n=o.$implicit;t.xp6(2),t.Oqu(n.productName),t.xp6(2),t.Oqu(n.customerName),t.xp6(2),t.Oqu("in_progress"==n.status?"In Progress":t.lcZ(7,3,n.status))}}function q(e,o){if(1&e&&(t.TgZ(0,"ion-row"),t.TgZ(1,"ion-col"),t._uU(2),t.qZA(),t.TgZ(3,"ion-col"),t._uU(4),t.qZA(),t.TgZ(5,"ion-col"),t._uU(6),t.ALo(7,"titlecase"),t.qZA(),t.qZA()),2&e){const n=o.$implicit;t.xp6(2),t.Oqu(n.productName),t.xp6(2),t.Oqu(n.customerName),t.xp6(2),t.Oqu("in_progress"==n.status?"In Progress":t.lcZ(7,3,n.status))}}function D(e,o){if(1&e&&(t.TgZ(0,"ion-row"),t.TgZ(1,"ion-col"),t._uU(2),t.qZA(),t.TgZ(3,"ion-col"),t._uU(4),t.qZA(),t.qZA()),2&e){const n=o.$implicit;t.xp6(2),t.Oqu(n.campaignName),t.xp6(2),t.Oqu(n.status)}}function U(e,o){if(1&e&&(t.TgZ(0,"ion-item",31),t.TgZ(1,"ion-thumbnail",32),t._UZ(2,"img",33),t.qZA(),t.TgZ(3,"ion-text",35),t.TgZ(4,"ion-text",36),t._uU(5),t.qZA(),t.TgZ(6,"ion-text",37),t._uU(7),t.qZA(),t.TgZ(8,"ion-text",38),t._uU(9),t.ALo(10,"date"),t.qZA(),t.qZA(),t.qZA()),2&e){const n=o.$implicit,i=t.oxw();t.xp6(2),t.Q6J("src",i.getImageURL(n.activityType),t.LSH),t.xp6(3),t.Oqu(n.title),t.xp6(2),t.Oqu(n.customerName),t.xp6(2),t.hij("Due ",t.xi3(10,4,n.dueDate,"mediumDate"),"")}}function S(e,o){if(1&e&&(t.TgZ(0,"ion-item",31),t.TgZ(1,"ion-thumbnail",32),t._UZ(2,"img",33),t.qZA(),t.TgZ(3,"ion-text",35),t.TgZ(4,"ion-text",36),t._uU(5),t.qZA(),t.TgZ(6,"ion-text",37),t._uU(7),t.qZA(),t.TgZ(8,"ion-text",38),t._uU(9),t.ALo(10,"date"),t.qZA(),t.qZA(),t.qZA()),2&e){const n=o.$implicit,i=t.oxw();t.xp6(2),t.Q6J("src",i.getImageURL(n.activityType),t.LSH),t.xp6(3),t.Oqu(n.title),t.xp6(2),t.Oqu(n.customerName),t.xp6(2),t.hij("Due ",t.xi3(10,4,n.dueDate,"mediumDate"),"")}}function F(e,o){if(1&e&&(t.TgZ(0,"ion-item",31),t.TgZ(1,"ion-avatar",32),t._UZ(2,"img",39),t.qZA(),t.TgZ(3,"ion-text",40),t._uU(4),t.qZA(),t.TgZ(5,"ion-text",41),t._uU(6),t.ALo(7,"date"),t.qZA(),t.qZA()),2&e){const n=o.$implicit;t.xp6(4),t.hij(" ",n.contactName,""),t.xp6(2),t.hij("Assigned on ",t.xi3(7,2,n.openDate,"shortDate")," ")}}const p=function(e){return{height:e}},z=function(e){return{"padding-bottom":e}},M=function(e,o){return{width:e,height:o}},x=function(e){return{padding:e}},T=[{path:"",component:(()=>{class e{constructor(n,i,a,g,_,I,H,N,Q,Y){this.platform=n,this.cdf=i,this.ngzone=a,this.route=g,this.auth=_,this.dashboardService=I,this.router=H,this.AttachmentUploadService=N,this.alertCtrl=Q,this.DashboardAttachmentService=Y,this.recentObj={quotations:[],policies:[]},this.campaign=[],this.campaignArray=[],this.followup=[],this.followUpArray=[],this.assignlead=[],this.assignLeadArray=[],this.backlog=[],this.backlogArray=[],this.unsub={},this.months=["JAN","FEB","Mar","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],this.DEFAULT_DOWNLOAD_URL=`${K.N.apiUrl}/attachment-downloader/`,this.currentMonthIndex=(new Date).getUTCMonth(),this.icons=[{activityType:"Face to Face",image:"./assets/images/group_chat_color-01.svg"},{activityType:"Online",image:"./assets/images/world_color-01.svg"},{activityType:"Phone Call",image:"./assets/images/phone_color-01.svg"}],this.route.queryParams.subscribe(E=>(0,m.mG)(this,void 0,void 0,function*(){E.empId?(this.id=JSON.parse(E.empId),this.loadForm()):(this.id=this.auth.currentUserValue.id,this.loadForm())}))}ngOnInit(){this.getList(),this.getRecentList(),this.getCampaignList(),this.getFollowupList(),this.getBacklogList(),this.getLeadAssignList(),this.radioW=this.platform.width(),this.radioH=this.platform.height(),this.calculateMainContentHeight(this.radioW,this.radioH)}getImageURL(n){let i=this.icons.findIndex(a=>a.activityType==n);return this.icons[i].image}loadForm(){this.actForm=new f.cw({empId:new f.NI(this.id)})}getList(){this.ngzone.run(n=>{this.dashboardService.getList(this.actForm.value).toPromise().then(i=>{i&&(this.data=i,this.setChartOptions(),this.cdf.detectChanges())})})}getRecentList(){this.ngzone.run(n=>{this.dashboardService.getRecentList(this.actForm.value).toPromise().then(i=>{i&&(this.recentObj=i,console.log("recentObj",this.recentObj),this.cdf.detectChanges())})})}getCampaignList(){this.ngzone.run(n=>{this.dashboardService.getCampaignList(this.actForm.value).toPromise().then(i=>{i&&(this.campaign=i,this.campaign.map(a=>{this.campaignArray.push(a)}),this.cdf.detectChanges())})})}getBacklogList(){this.ngzone.run(n=>{this.dashboardService.getBacklogList(this.actForm.value).toPromise().then(i=>{i&&(this.backlog=i,this.backlog.map(a=>{this.backlogArray.push(a)}),this.cdf.detectChanges())})})}getLeadAssignList(){this.ngzone.run(n=>{this.dashboardService.getLeadAssignList(this.actForm.value).toPromise().then(i=>{i&&(this.assignlead=i,this.assignlead.map(a=>{this.assignLeadArray.push(a)}),this.cdf.detectChanges())})})}getFollowupList(){this.ngzone.run(n=>{this.dashboardService.getFollowupList(this.actForm.value).toPromise().then(i=>{i&&(this.followup=i,this.followup.map(a=>{this.followUpArray.push(a)}),this.cdf.detectChanges())})})}ngOnDestroy(){}goToSaleQuotation(){this.router.navigate(["/sales/quotation/list"])}goToSalePolicies(){this.router.navigate(["/sales/application/list"])}goToCalendar(){this.router.navigate(["/mycalendar"])}goToLeadList(){this.router.navigate(["/lead/lead-list"])}setChartOptions(){this.chartOptions={series:[{name:"",data:[this.data.converted,this.data.assigned]}],chart:{toolbar:{show:!1},height:150,type:"bar",events:{click:function(n,i,a){}}},colors:["#008FFB","#00E396","#FEB019","#FF4560","#775DD0","#546E7A","#26a69a","#D10CE8"],plotOptions:{bar:{columnWidth:"20%",distributed:!0}},dataLabels:{enabled:!1},legend:{show:!1},grid:{show:!1},xaxis:{categories:[["Converted",this.data.converted],["Assigned",this.data.assigned]],labels:{style:{colors:["#008FFB","#00E396","#FEB019","#FF4560","#775DD0","#546E7A","#26a69a","#D10CE8"],fontSize:"12px"}}}}}onResize(n){this.radioW=n.target.innerWidth,this.radioH=n.target.innerHeight,this.calculateMainContentHeight(this.radioW,this.radioH)}calculateMainContentHeight(n,i){let a=0;this.chartH=0,n<1e3?(a=i-193.8,this.profileHpx=a/2-15+"px",this.salesH=a/3,this.salesHpx=this.salesH-25+"px",this.chartH=a/3,this.chartHpx=this.chartH-49+"px",this.profileImgW="120px",this.productImageWidth="35px",this.profilePadding="7px",this.productPadding="7px 0"):n<=1e3||n<1200?(a=i-203,this.profileHpx=a/2-20+"px",this.salesH=a/3,this.salesHpx=this.salesH-40+"px",this.chartH=a/3,this.chartHpx=this.chartH-60+"px",this.profileImgW="120px",this.productImageWidth="35px",this.profilePadding="7px",this.productPadding="7px 0"):(a=i-203.8,this.profileHpx=a/2-20+"px",this.salesH=a/3,this.salesHpx=this.salesH-30+"px",this.chartH=a/3,this.chartHpx=this.chartH-55+"px",this.profileImgW="120px",this.productImageWidth="35px",this.profilePadding="7px",this.productPadding="7px 0"),this.mainContentHeight=a,this.mainContentHeightPx=a+"px"}changeSource(n){n.target.src="./assets/images/user_profile-01.svg"}presentActionSheet(){return(0,m.mG)(this,void 0,void 0,function*(){yield(yield this.alertCtrl.create({cssClass:"custom-modal",buttons:[{icon:"images",text:"Choose picture from gallery",handler:()=>{this.getPictures(P.oK.Photos),console.log("Open Gallery")}},{icon:"close",text:"Close",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]})).present()})}getPictures(n){return(0,m.mG)(this,void 0,void 0,function*(){const i=yield P.V1.getPhoto({quality:100,width:400,allowEditing:!0,resultType:P.dk.Base64,source:n}).catch(a=>{});i&&this.uploadImage(i)})}uploadImage(n){return(0,m.mG)(this,void 0,void 0,function*(){n.size=(n.base64String.length-814)/1.37,n.fileName=Date.now()+this.data.agentInfo.empId,this.AttachmentUploadService.save({fileStr:n.base64String,fileName:n.fileName,fileType:"image/"+n.format,fileSize:n.size,contentType:"image/"+n.format,fileExtension:n.format}).toPromise().then(a=>{a&&this.DashboardAttachmentService.save({attId:a,empId:this.data.agentInfo.empId}).toPromise().then(_=>{_&&(this.data.agentInfo.attId=_,this.cdf.detectChanges())})})})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(c.t4),t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(u.gz),t.Y36(v.e),t.Y36(C.s),t.Y36(u.F0),t.Y36(w.p3),t.Y36(c.BX),t.Y36(C.T))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard-kbz-ms-lp"]],viewQuery:function(n,i){if(1&n&&t.Gf(b,5),2&n){let a;t.iGM(a=t.CRH())&&(i.chart=a.first)}},decls:121,vars:130,consts:[[1,"dashboard-main",3,"ngStyle","resize"],[3,"ngStyle"],[2,"margin","0 0 10px 0"],[1,"profile",3,"ngStyle"],[1,"img-content",3,"ngStyle"],["style","width: 100%; height: 100%;","alt","profile",3,"src",4,"ngIf"],["src","./assets/temp-img/user_profile.png","alt","profile",4,"ngIf"],["name","camera",1,"text-left","icon-style",3,"click"],[1,"title-color"],[1,"premium",3,"ngStyle"],[1,"premuim-color"],[1,"product"],[1,"row"],[1,"col-sm-6"],[2,"margin-left","50%"],["lines","full",4,"ngFor","ngForOf"],[1,"sales-performance",3,"ngStyle"],[1,"date"],[3,"click"],[4,"ngFor","ngForOf"],[2,"width","100%"],[1,"chart",3,"ngStyle"],[1,"sub-chart"],[1,"row",2,"margin","0"],[1,"col-5","sub-title"],[1,"col-5"],["name","chevron-down-outline"],[1,"col-2","underline","pointer","link",3,"click"],[1,"col-10","sub-title"],["alt","profile",2,"width","100%","height","100%",3,"src"],["src","./assets/temp-img/user_profile.png","alt","profile"],["lines","full"],["slot","start"],["alt","","srcset","",1,"prod-icon",3,"src"],[2,"font-weight","600"],[2,"margin","0","width","100%"],[2,"margin","0","font-weight","600","width","100%","display","block"],[2,"margin","0","float","left"],[2,"margin","0"],["src","./assets/images/dashboard-user.png","alt","",1,"user-icon"],[2,"margin","0","margin","0","font-weight","600"],[2,"margin","0","margin","0"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.NdJ("resize",function(g){return i.onResize(g)},!1,t.Jf7),t.TgZ(1,"section",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.YNc(5,L,1,1,"img",5),t.YNc(6,y,1,0,"img",6),t.qZA(),t.TgZ(7,"ion-icon",7),t.NdJ("click",function(){return i.presentActionSheet()}),t.qZA(),t.TgZ(8,"ion-label",8),t._uU(9),t.qZA(),t.TgZ(10,"ion-label"),t._uU(11),t.qZA(),t.qZA(),t.TgZ(12,"div",9),t.TgZ(13,"ion-label",10),t._uU(14),t.ALo(15,"translate"),t.qZA(),t.TgZ(16,"ion-label"),t._uU(17),t.ALo(18,"number"),t.TgZ(19,"span"),t.TgZ(20,"small"),t._uU(21,"MMK"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"div",11),t.TgZ(23,"div",12),t.TgZ(24,"div",13),t.TgZ(25,"h2"),t._uU(26),t.ALo(27,"translate"),t.qZA(),t.qZA(),t.TgZ(28,"div",13),t.TgZ(29,"h2",14),t._uU(30),t.ALo(31,"translate"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"ion-list",1),t.YNc(33,h,8,6,"ion-item",15),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"section",16),t.TgZ(35,"h2",8),t._uU(36),t.ALo(37,"translate"),t.qZA(),t.TgZ(38,"div"),t.TgZ(39,"div",17),t.TgZ(40,"div"),t._uU(41),t.ALo(42,"translate"),t.qZA(),t.TgZ(43,"div"),t.TgZ(44,"a",18),t.NdJ("click",function(){return i.goToSaleQuotation()}),t._uU(45),t.ALo(46,"translate"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(47,"ion-list",1),t.YNc(48,O,8,5,"ion-row",19),t.ALo(49,"slice"),t.qZA(),t.qZA(),t.TgZ(50,"div"),t.TgZ(51,"div",17),t.TgZ(52,"div"),t._uU(53),t.ALo(54,"translate"),t.qZA(),t.TgZ(55,"div"),t.TgZ(56,"a",18),t.NdJ("click",function(){return i.goToSalePolicies()}),t._uU(57),t.ALo(58,"translate"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(59,"ion-list",1),t.YNc(60,q,8,5,"ion-row",19),t.ALo(61,"slice"),t.qZA(),t.qZA(),t.TgZ(62,"div"),t.TgZ(63,"div",17),t.TgZ(64,"div",20),t._uU(65,"Campaign for Today"),t.qZA(),t._UZ(66,"div"),t.qZA(),t.TgZ(67,"ion-list",1),t.YNc(68,D,5,2,"ion-row",19),t.ALo(69,"slice"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(70,"section",21),t.TgZ(71,"div",22),t.TgZ(72,"h2",8),t._uU(73),t.ALo(74,"translate"),t.qZA(),t.TgZ(75,"div",23),t.TgZ(76,"div",24),t._uU(77),t.ALo(78,"translate"),t.qZA(),t.TgZ(79,"div",25),t._uU(80),t.ALo(81,"translate"),t._UZ(82,"ion-icon",26),t.qZA(),t.TgZ(83,"div",27),t.NdJ("click",function(){return i.goToCalendar()}),t.TgZ(84,"a"),t._uU(85),t.ALo(86,"translate"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(87,"ion-list",1),t.YNc(88,U,11,7,"ion-item",15),t.ALo(89,"slice"),t.qZA(),t.qZA(),t.TgZ(90,"div",22),t.TgZ(91,"h2",8),t._uU(92,"Overdue Activities"),t.qZA(),t.TgZ(93,"div",23),t.TgZ(94,"div",24),t._uU(95),t.ALo(96,"translate"),t.qZA(),t.TgZ(97,"div",25),t._uU(98),t.ALo(99,"translate"),t._UZ(100,"ion-icon",26),t.qZA(),t.TgZ(101,"div",27),t.NdJ("click",function(){return i.goToCalendar()}),t.TgZ(102,"a"),t._uU(103),t.ALo(104,"translate"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(105,"ion-list",1),t.YNc(106,S,11,7,"ion-item",15),t.ALo(107,"slice"),t.qZA(),t.qZA(),t.TgZ(108,"div",22),t.TgZ(109,"h2",8),t._uU(110,"Opportunities"),t.qZA(),t.TgZ(111,"div",23),t.TgZ(112,"div",28),t._uU(113,"Opportunities Assigned"),t.qZA(),t.TgZ(114,"div",27),t.NdJ("click",function(){return i.goToLeadList()}),t.TgZ(115,"a"),t._uU(116),t.ALo(117,"translate"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(118,"ion-list",1),t.YNc(119,F,8,5,"ion-item",15),t.ALo(120,"slice"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.Q6J("ngStyle",t.VKq(101,p,i.mainContentHeightPx)),t.xp6(1),t.Q6J("ngStyle",t.VKq(103,p,i.mainContentHeightPx)),t.xp6(2),t.Q6J("ngStyle",t.VKq(105,z,i.profilePadding)),t.xp6(1),t.Q6J("ngStyle",t.WLB(107,M,i.profileImgW,i.profileImgW)),t.xp6(1),t.Q6J("ngIf",null!=(null==i.data||null==i.data.agentInfo?null:i.data.agentInfo.attId)),t.xp6(1),t.Q6J("ngIf",null==(null==i.data||null==i.data.agentInfo?null:i.data.agentInfo.attId)),t.xp6(3),t.Oqu(null==i.data||null==i.data.agentInfo?null:i.data.agentInfo.employeeName),t.xp6(2),t.Oqu(null==i.data?null:i.data.role),t.xp6(1),t.Q6J("ngStyle",t.VKq(110,x,i.productPadding)),t.xp6(2),t.Oqu(t.lcZ(15,42,"CARD.premium")),t.xp6(3),t.hij("",t.xi3(18,44,(null==i.data||null==i.data.agentInfo?null:i.data.agentInfo.totalPremium)||0,"1.2-2")," "),t.xp6(9),t.Oqu(t.lcZ(27,47,"CARD.products")),t.xp6(4),t.Oqu(t.lcZ(31,49,"CARD.premium")),t.xp6(2),t.Q6J("ngStyle",t.VKq(112,p,i.profileHpx)),t.xp6(1),t.Q6J("ngForOf",null==i.data?null:i.data.yearlyProductPremium),t.xp6(1),t.Q6J("ngStyle",t.VKq(114,p,i.mainContentHeightPx)),t.xp6(2),t.Oqu(t.lcZ(37,51,"CARD.recent_operations")),t.xp6(5),t.Oqu(t.lcZ(42,53,"CARD.quotes")),t.xp6(4),t.Oqu(t.lcZ(46,55,"CARD.all")),t.xp6(2),t.Q6J("ngStyle",t.VKq(116,p,i.salesHpx)),t.xp6(1),t.Q6J("ngForOf",t.Dn7(49,57,null==i.recentObj?null:i.recentObj.quotations,0,3)),t.xp6(5),t.Oqu(t.lcZ(54,61,"CARD.policies")),t.xp6(4),t.Oqu(t.lcZ(58,63,"CARD.all")),t.xp6(2),t.Q6J("ngStyle",t.VKq(118,p,i.salesHpx)),t.xp6(1),t.Q6J("ngForOf",t.Dn7(61,65,null==i.recentObj?null:i.recentObj.policies,0,3)),t.xp6(7),t.Q6J("ngStyle",t.VKq(120,p,i.salesHpx)),t.xp6(1),t.Q6J("ngForOf",t.Dn7(69,69,i.campaignArray,0,3)),t.xp6(2),t.Q6J("ngStyle",t.VKq(122,p,i.mainContentHeightPx)),t.xp6(3),t.Oqu(t.lcZ(74,73,"CARD.things_to_followup")),t.xp6(4),t.Oqu(t.lcZ(78,75,"CARD.calendar")),t.xp6(3),t.hij("",t.lcZ(81,77,"CARD.today")," "),t.xp6(5),t.Oqu(t.lcZ(86,79,"CARD.all")),t.xp6(2),t.Q6J("ngStyle",t.VKq(124,p,i.chartHpx)),t.xp6(1),t.Q6J("ngForOf",t.Dn7(89,81,i.followUpArray,0,3)),t.xp6(7),t.Oqu(t.lcZ(96,85,"CARD.backlog")),t.xp6(3),t.hij("",t.lcZ(99,87,"CARD.today")," "),t.xp6(5),t.Oqu(t.lcZ(104,89,"CARD.all")),t.xp6(2),t.Q6J("ngStyle",t.VKq(126,p,i.chartHpx)),t.xp6(1),t.Q6J("ngForOf",t.Dn7(107,91,i.backlogArray,0,2)),t.xp6(10),t.Oqu(t.lcZ(117,95,"CARD.all")),t.xp6(2),t.Q6J("ngStyle",t.VKq(128,p,i.chartHpx)),t.xp6(1),t.Q6J("ngForOf",t.Dn7(120,97,i.assignLeadArray,0,3)))},directives:[d.PC,d.O5,c.gu,c.Q$,c.q_,d.sg,c.Ie,c.Bs,c.yW,c.Nd,c.wI,c.BJ],pipes:[A.X,d.JJ,d.OU,d.rS,d.uU],styles:["div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:33.3333333333%;float:left;display:block;padding:0 15px;overflow-y:scroll;overflow-x:hidden;-ms-overflow-style:none;scrollbar-width:none}div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.dashboard-main[_ngcontent-%COMP%], .profile[_ngcontent-%COMP%]{border-bottom:1px solid #e3e3e3}.profile[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]{max-width:124px;max-height:124px;min-width:100px;min-height:100px;background:#b9fded;border-radius:50%;margin:0 auto 4%}.profile[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{text-align:center;display:block;line-height:20px;font-weight:600}.profile[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:last-child{color:#404040}.premium[_ngcontent-%COMP%]{border-bottom:1px solid #e3e3e3}.premium[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{text-align:center;display:block;line-height:20px;font-weight:600}.premium[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#404040}.premium[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:last-child{color:#404040}.title-color[_ngcontent-%COMP%]{color:#005eaa;font-weight:700;font-size:1rem}.premuim-color[_ngcontent-%COMP%]{color:#005eaa}.product[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1rem!important;color:#404040;width:100%;font-weight:600}.product[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{width:100%;position:relative;overflow-y:scroll;overflow-x:hidden;-ms-overflow-style:none;scrollbar-width:none}.product[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{padding:0;--min-height: 15px;position:relative}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{width:100%!important;height:100%!important;max-width:25px!important;margin-right:0;position:relative;left:-15px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:100%!important;height:100%!important;max-width:25px!important;margin-right:0;position:relative;left:-15px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{max-width:40px!important}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{width:50%;font-size:.79rem;padding:0;color:#404040}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]:last-child{text-align:right;position:absolute;right:0}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-child{border-bottom:none;--border-width: 0 0 0px 0}.sales-performance[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{width:100%;overflow:hidden}.sales-performance[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:30%;float:left;font-size:1rem;font-weight:600;padding:0!important}.sales-performance[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;color:#005eaa;float:right;font-weight:400}.sales-performance[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){width:25%;padding:0 6px;text-align:center}.sales-performance[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{width:25%;float:right;border-right:none!important}.sales-performance[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{width:100%;position:relative;overflow-y:scroll;overflow-x:hidden;-ms-overflow-style:none;scrollbar-width:none}.sales-performance[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.sales-performance[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{border-bottom:1px solid #e3e3e3}.sales-performance[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{font-size:.79rem;padding-left:0;color:#404040}.sales-performance[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:nth-child(2){text-align:center}.sales-performance[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:last-child{text-align:right}.chart[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.chart[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:14px;position:relative;top:3px}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]{border-bottom:1px solid #e3e3e3;padding:10px 0 0}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]{width:100%;overflow:hidden;padding:10px 10%}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:45%;float:left;background:#ff8100;border-radius:10px;padding:10px 0}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.79rem;color:#fff;margin:0;text-align:center}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{float:right;background:#005eaa}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;padding-left:0;color:#404040}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{cursor:pointer;color:#005eaa;float:right;font-weight:400;padding:0;text-align:right}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]:first-child{padding-top:0}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]:last-child{border-bottom:none!important}.chart[_ngcontent-%COMP%]   .branch[_ngcontent-%COMP%]{width:100%;overflow:hidden}.chart[_ngcontent-%COMP%]   .branch[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:50%;float:left;font-size:.79rem}.chart[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{width:100%;position:relative;overflow-y:scroll;overflow-x:hidden;-ms-overflow-style:none;scrollbar-width:none}.chart[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.chart[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{position:unset!important;text-align:left!important;margin:0 0 0 30px}.chart[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}@media (min-width: 280px) and (max-width: 620px){section[_ngcontent-%COMP%]{width:100%!important;padding:0!important;margin:10px!important}}@media screen and (max-width: 600px){.icon-style[_ngcontent-%COMP%]{left:55%;position:relative;font-size:30px;top:-42px}}@media screen and (min-width: 600px){.icon-style[_ngcontent-%COMP%]{left:55%;position:relative;font-size:30px;top:-42px}}"]}),e})()}];let R=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.Bz.forChild(T)],u.Bz]}),e})();var s=r(7181);let l=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.ez,f.u5,c.Pc,s.j,R]]}),e})()}}]);