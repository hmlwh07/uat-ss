"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4446],{74446:(U,u,s)=>{s.r(u),s.d(u,{DashboardKbzMsManagerPageModule:()=>z});var c=s(86019),h=s(49133),g=s(71704),d=s(4205),m=s(64762),M=s(54753),_=s(18260),t=s(83668),P=s(22338),C=s(75199),f=s(75396);const b=["chartAgent"],x=["chartLead"];function A(i,o){if(1&i&&(t.TgZ(0,"ion-item",23),t.TgZ(1,"ion-thumbnail",24),t._UZ(2,"img",25),t._uU(3,' srcset=""> '),t.qZA(),t.TgZ(4,"ion-text"),t._uU(5),t.qZA(),t.TgZ(6,"ion-text"),t._uU(7),t.ALo(8,"number"),t.qZA(),t.qZA()),2&i){const n=o.$implicit,e=t.oxw();t.xp6(2),t.Q6J("src",e.DEFAULT_DOWNLOAD_URL+n.productSmallIcon,t.LSH),t.xp6(3),t.Oqu(n.productName),t.xp6(2),t.hij("",t.xi3(8,3,n.premium,"1.2-2")," MMK")}}function Z(i,o){if(1&i){const n=t.EpF();t.TgZ(0,"ion-item",27),t.NdJ("click",function(){const r=t.CHM(n).$implicit;return t.oxw(2).goToLPDashboard(r)}),t.TgZ(1,"ion-avatar",24),t.TgZ(2,"img",28),t.NdJ("error",function(a){return t.CHM(n),t.oxw(2).changeSource(a)}),t.qZA(),t.qZA(),t.TgZ(3,"ion-text"),t.TgZ(4,"ion-label",29),t._uU(5),t.qZA(),t.TgZ(6,"ion-label",29),t._uU(7),t.ALo(8,"number"),t.qZA(),t.qZA(),t.qZA()}if(2&i){const n=o.$implicit;t.xp6(5),t.Oqu(n.name),t.xp6(2),t.hij("",t.xi3(8,2,n.premium,"1.2-2")," MMK")}}const l=function(i){return{height:i}};function v(i,o){if(1&i&&(t.TgZ(0,"ion-list",1),t.YNc(1,Z,9,5,"ion-item",26),t.qZA()),2&i){const n=t.oxw();t.Q6J("ngStyle",t.VKq(2,l,n.salesHpx)),t.xp6(1),t.Q6J("ngForOf",null==n.data?null:n.data.subAgentMonthlySale)}}function y(i,o){if(1&i&&(t.TgZ(0,"div",30),t._UZ(1,"apx-chart",31),t.qZA()),2&i){const n=t.oxw();t.xp6(1),t.Q6J("series",null==n.chartOptions?null:n.chartOptions.series)("chart",null==n.chartOptions?null:n.chartOptions.chart)("dataLabels",null==n.chartOptions?null:n.chartOptions.dataLabels)("plotOptions",null==n.chartOptions?null:n.chartOptions.plotOptions)("yaxis",null==n.chartOptions?null:n.chartOptions.yaxis)("xaxis",null==n.chartOptions?null:n.chartOptions.xaxis)("legend",null==n.chartOptions?null:n.chartOptions.legend)("colors",null==n.chartOptions?null:n.chartOptions.colors)("grid",null==n.chartOptions?null:n.chartOptions.grid)}}function T(i,o){if(1&i&&(t.TgZ(0,"div",32),t._UZ(1,"apx-chart",33),t.qZA()),2&i){const n=t.oxw();t.xp6(1),t.Q6J("series",n.chartOptionsAgent.series)("chart",n.chartOptionsAgent.chart)("xaxis",n.chartOptionsAgent.xaxis)("yaxis",n.chartOptionsAgent.yaxis)("title",n.chartOptionsAgent.title)("legend",n.chartOptionsAgent.legend)("dataLabels",n.chartOptionsAgent.dataLabels)("markers",n.chartOptionsAgent.markers)}}const w=function(i){return{"padding-bottom":i}},q=function(i,o){return{width:i,height:o}},H=function(i){return{padding:i}},D=[{path:"",component:(()=>{class i{constructor(n,e,a,r,p,S){this.platform=n,this.cdf=e,this.route=a,this.auth=r,this.dashboardService=p,this.router=S,this.agentLineChartCategories=[],this.agentLineChartDatas=[],this.leadObj={},this.currentMonthIndex=(new Date).getUTCMonth(),this.currentYear=(new Date).getUTCFullYear(),this.months=["JAN","FEB","Mar","APR","MAY","JUL","AUG","SEP","OCT","NOV","DEC"],this.todayActiveAgent=0,this.DEFAULT_DOWNLOAD_URL=`${_.N.apiUrl}/attachment-downloader/`,this.route.queryParams.subscribe(O=>(0,m.mG)(this,void 0,void 0,function*(){O.empId?(this.id=JSON.parse(O.empId),this.loadForm()):(this.id=this.auth.currentUserValue.id,this.loadForm())}))}ngOnInit(){return(0,m.mG)(this,void 0,void 0,function*(){this.getList(),this.getLeadList(),this.getAgentList(),this.radioW=this.platform.width(),this.radioH=this.platform.height(),this.calculateMainContentHeight(this.radioW,this.radioH)})}loadForm(){this.actForm=new h.cw({empId:new h.NI(this.id)})}getList(){this.dashboardService.getList(this.actForm.value).toPromise().then(n=>{n&&(this.data=n,this.setChartOptions("agent"),this.cdf.detectChanges())})}getLeadList(){this.dashboardService.getLeadList(this.actForm.value).toPromise().then(n=>{n&&(this.leadObj=n,this.setChartOptions("lead"),this.cdf.detectChanges())})}getAgentList(){this.dashboardService.getAgentList(this.actForm.value).pipe((0,M.U)(n=>{let e=[],a=[];return n.weeklyActiveAgents.map(r=>{e.push(r.weekNo),a.push(parseInt(r.noOfActiveAgent))}),Object.assign(Object.assign({},n),{data:a,weeks:e})})).toPromise().then(n=>{console.log(n),n&&(this.agentLineChart=n,this.todayActiveAgent=n.todayNoOfActiveAgent,this.agentLineChartCategories=n.weeks,this.agentLineChartDatas=n.data,Math.max(...this.agentLineChartDatas),this.setChartOptions("agent"),this.cdf.detectChanges())})}ngOnDestroy(){}goToLPDashboard(n){this.router.navigate(["/dashboard/lp-dashboard"],{queryParams:{empId:n.empId}})}goToSalePolicies(){this.router.navigate(["/sale/application/list"])}goToActivities(){this.router.navigate(["activity/activity-management-list"])}setChartOptions(n){let e="lead"==n?"chartOptions":"chartOptionsAgent",a=Math.max(...this.agentLineChartDatas);this[e]="lead"==n?{series:[{name:"",data:["lead"==n?this.leadObj.leadWinCount:this.data.converted,"lead"==n?this.leadObj.leadAssignCount:this.data.assigned]}],chart:{toolbar:{show:!1},height:this.chartH-20,type:"bar",events:{click:function(r,p){}}},colors:["#008FFB","#00E396","#FEB019","#FF4560","#775DD0","#546E7A","#26a69a","#D10CE8"],yaxis:{tickAmount:5,min:0,max:"lead"==n?this.leadObj.leadAssignCount||10:this.data.assigned||10,labels:{style:{fontSize:"0.79rem",fontFamily:"Roboto"}}},plotOptions:{bar:{columnWidth:"20%",distributed:!0}},dataLabels:{enabled:!1},legend:{show:!1},grid:{show:!0},xaxis:{categories:[["Converted","lead"==n?this.leadObj.leadWinCount:this.data.converted],["Assigned","lead"==n?this.leadObj.leadAssignCount:this.data.assigned]],labels:{style:{colors:["#008FFB","#00E396","#FEB019","#FF4560","#775DD0","#546E7A","#26a69a","#D10CE8"],fontSize:"12px"}}}}:{series:[{name:"",data:this.agentLineChartDatas,color:"#005f99"}],chart:{height:this.chartH-20,type:"line",toolbar:{show:!1}},title:{text:"",offsetX:0,offsetY:10,floating:!1,style:{fontSize:"0.79rem",fontFamily:"Roboto"}},xaxis:{type:"category",categories:this.agentLineChartCategories,labels:{style:{fontSize:"0.79rem",fontFamily:"Roboto"}}},yaxis:{min:0,max:a>10?a:10,tickAmount:5,labels:{show:!1,style:{fontSize:"0.79rem",fontFamily:"Roboto"}}},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},dataLabels:{enabled:!1,textAnchor:"middle",offsetX:-10,offsetY:-5,enabledOnSeries:[0]},markers:{size:[5,0,0]}}}onResize(n){this.radioW=n.target.innerWidth,this.radioH=n.target.innerHeight,this.calculateMainContentHeight(this.radioW,this.radioH)}calculateMainContentHeight(n,e){let a=0;this.chartH=0,n<1e3?(a=e-193.8,this.profileHpx=a/2-15+"px",this.salesHpx=a-40+"px",this.chartH=a/3,this.thingsHpx=this.chartH-40+"px",this.chartHpx=this.chartH+20+"px",this.profileImgW="120px",this.profilePadding="7px",this.productPadding="7px 0"):n<=1e3||n<1200?(a=e-203,this.profileHpx=a/2-20+"px",this.salesHpx=a-50+"px",this.chartH=a/3,this.thingsHpx=this.chartH-40+"px",this.chartHpx=this.chartH+20+"px",this.profileImgW="120px",this.profilePadding="5px",this.productPadding="5px 0"):(a=e-203.8,this.profileHpx=a/2-20+"px",this.salesHpx=a-50+"px",this.chartH=a/3,this.thingsHpx=this.chartH-40+"px",this.chartHpx=this.chartH+20+"px",this.profileImgW="120px",this.profilePadding="5px",this.productPadding="5px 0"),this.mainContentHeight=a,this.mainContentHeightPx=a+"px"}changeSource(n){n.target.src="./assets/images/user_profile-01.svg"}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(g.t4),t.Y36(t.sBO),t.Y36(d.gz),t.Y36(P.e),t.Y36(C.s),t.Y36(d.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-dashboard-kbz-ms-manager"]],viewQuery:function(n,e){if(1&n&&(t.Gf(b,5),t.Gf(x,5)),2&n){let a;t.iGM(a=t.CRH())&&(e.chartAgent=a.first),t.iGM(a=t.CRH())&&(e.chartLead=a.first)}},decls:66,vars:51,consts:[[1,"dashboard-main",3,"ngStyle","resize"],[3,"ngStyle"],[2,"margin","0 0 10px 0"],[1,"profile",3,"ngStyle"],[1,"img-content",3,"ngStyle"],["src","../../../assets/images/dashboard-usr.svg","alt","profile"],[1,"title-color"],[1,"premium",3,"ngStyle"],[1,"premuim-color"],[1,"product"],["lines","full",4,"ngFor","ngForOf"],[1,"sales-performance",3,"ngStyle"],[1,"date"],[3,"click"],[3,"ngStyle",4,"ngIf"],[1,"chart",3,"ngStyle"],[1,"sub-chart",3,"ngStyle"],[1,"branch"],[2,"font-weight","600"],["id","inflation",4,"ngIf"],[2,"font-weight","bold"],["id","chart","style","position: relative;\n      top: -15px;",4,"ngIf"],[1,"today"],["lines","full"],["slot","start"],["alt","","srcset","",1,"prod-icon",3,"src"],["lines","full",3,"click",4,"ngFor","ngForOf"],["lines","full",3,"click"],["src","./assets/images/user_profile-01.svg","alt","",1,"user-icon",3,"error"],[1,"ion-text-wrap"],["id","inflation"],[3,"series","chart","dataLabels","plotOptions","yaxis","xaxis","legend","colors","grid"],["id","chart",2,"position","relative","top","-15px"],[3,"series","chart","xaxis","yaxis","title","legend","dataLabels","markers"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.NdJ("resize",function(r){return e.onResize(r)},!1,t.Jf7),t.TgZ(1,"section",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.TgZ(6,"ion-label",6),t._uU(7),t.qZA(),t.TgZ(8,"ion-label"),t._uU(9),t.qZA(),t.qZA(),t.TgZ(10,"div",7),t.TgZ(11,"ion-label",8),t._uU(12,"Premium"),t.qZA(),t.TgZ(13,"ion-label"),t._uU(14),t.ALo(15,"number"),t.TgZ(16,"span"),t.TgZ(17,"small"),t._uU(18,"MMK"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",9),t.TgZ(20,"h2"),t._uU(21,"Products"),t.qZA(),t.TgZ(22,"ion-list",1),t.YNc(23,A,9,6,"ion-item",10),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"section",11),t.TgZ(25,"h2",6),t._uU(26,"Sales Performances"),t.qZA(),t.TgZ(27,"div",12),t.TgZ(28,"div"),t._uU(29),t.qZA(),t.TgZ(30,"div"),t._uU(31),t.qZA(),t.TgZ(32,"div"),t.TgZ(33,"a",13),t.NdJ("click",function(){return e.goToSalePolicies()}),t._uU(34,"All"),t.qZA(),t.qZA(),t.qZA(),t.YNc(35,v,2,4,"ion-list",14),t.qZA(),t.TgZ(36,"section",15),t.TgZ(37,"div",16),t.TgZ(38,"h2",6),t._uU(39,"Lead Conversion"),t.qZA(),t.TgZ(40,"div",17),t.TgZ(41,"div"),t._uU(42),t.qZA(),t.TgZ(43,"div",18),t._uU(44),t.qZA(),t.qZA(),t.YNc(45,y,2,9,"div",19),t.qZA(),t.TgZ(46,"div",16),t.TgZ(47,"h2",6),t._uU(48,"Active Agents Today"),t.qZA(),t.TgZ(49,"div",20),t._uU(50),t.qZA(),t.YNc(51,T,2,8,"div",21),t.qZA(),t.TgZ(52,"div",16),t.TgZ(53,"h2",6),t._uU(54,"Things To Follow Up Today"),t.qZA(),t.TgZ(55,"div",22),t.TgZ(56,"div"),t.TgZ(57,"p"),t._uU(58,"TASK TODAY"),t.qZA(),t.TgZ(59,"p"),t._uU(60),t.qZA(),t.qZA(),t.TgZ(61,"div"),t.TgZ(62,"p"),t._uU(63,"LEAD TODAY"),t.qZA(),t.TgZ(64,"p"),t._uU(65),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.Q6J("ngStyle",t.VKq(28,l,e.mainContentHeightPx)),t.xp6(1),t.Q6J("ngStyle",t.VKq(30,l,e.mainContentHeightPx)),t.xp6(2),t.Q6J("ngStyle",t.VKq(32,w,e.profilePadding)),t.xp6(1),t.Q6J("ngStyle",t.WLB(34,q,e.profileImgW,e.profileImgW)),t.xp6(3),t.Oqu(null==e.data||null==e.data.agentInfo?null:e.data.agentInfo.employeeName),t.xp6(2),t.Oqu(null==e.data?null:e.data.role),t.xp6(1),t.Q6J("ngStyle",t.VKq(37,H,e.productPadding)),t.xp6(4),t.hij("",t.xi3(15,25,null==e.data||null==e.data.agentInfo?null:e.data.agentInfo.totalPremium,"1.2-2")," "),t.xp6(8),t.Q6J("ngStyle",t.VKq(39,l,e.profileHpx)),t.xp6(1),t.Q6J("ngForOf",null==e.data?null:e.data.yearlyProductPremium),t.xp6(1),t.Q6J("ngStyle",t.VKq(41,l,e.mainContentHeightPx)),t.xp6(5),t.Oqu(e.months[e.currentMonthIndex]),t.xp6(2),t.hij("Y",e.currentYear,""),t.xp6(4),t.Q6J("ngIf",e.data&&e.data.subAgentMonthlySale.length>0),t.xp6(1),t.Q6J("ngStyle",t.VKq(43,l,e.mainContentHeightPx)),t.xp6(1),t.Q6J("ngStyle",t.VKq(45,l,e.chartHpx)),t.xp6(5),t.Oqu(null==e.data||null==e.data.agentInfo?null:e.data.agentInfo.branchName),t.xp6(2),t.hij("",null==e.leadObj?null:e.leadObj.leadWinRate," %"),t.xp6(1),t.Q6J("ngIf",e.chartOptions),t.xp6(1),t.Q6J("ngStyle",t.VKq(47,l,e.chartHpx)),t.xp6(4),t.Oqu(e.todayActiveAgent),t.xp6(1),t.Q6J("ngIf",e.chartOptionsAgent),t.xp6(1),t.Q6J("ngStyle",t.VKq(49,l,e.thingsHpx)),t.xp6(8),t.Oqu(e.leadObj.taskToday),t.xp6(5),t.Oqu(e.leadObj.leadToday))},directives:[c.PC,g.Q$,g.q_,c.sg,c.O5,g.Ie,g.Bs,g.yW,g.BJ,f.x],pipes:[c.JJ],styles:["div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:33.3333333333%;float:left;display:block;padding:0 15px;overflow-y:scroll;overflow-x:hidden;-ms-overflow-style:none;scrollbar-width:none}div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.dashboard-main[_ngcontent-%COMP%]{border-bottom:1px solid #e3e3e3}.profile[_ngcontent-%COMP%]{border-bottom:1px solid #e3e3e3}.profile[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]{max-width:124px;max-height:124px;min-width:100px;min-height:100px;background:#b9fded;border-radius:50%;margin:0 auto 4%}.profile[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{text-align:center;display:block;line-height:20px;font-weight:600}.profile[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:last-child{color:#404040}.premium[_ngcontent-%COMP%]{border-bottom:1px solid #e3e3e3}.premium[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{text-align:center;display:block;line-height:20px;font-weight:600}.premium[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#404040}.premium[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:last-child{color:#404040}.title-color[_ngcontent-%COMP%]{color:#005eaa;font-weight:bold;font-size:1rem}.premuim-color[_ngcontent-%COMP%]{color:#005eaa}.product[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1rem!important;color:#404040;width:100%;font-weight:600}.product[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{width:100%;position:relative;overflow-y:scroll;overflow-x:hidden;-ms-overflow-style:none;scrollbar-width:none}.product[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{padding:0;position:relative}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:100%!important;height:100%!important;max-width:25px!important;margin-right:0;position:relative;left:-15px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{max-width:40px!important}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{width:50%;font-size:.79rem;padding:0;color:#404040}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]:last-child{text-align:right;position:absolute;right:0;font-weight:600}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]:last-child   ion-label[_ngcontent-%COMP%]:first-child{font-weight:100}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-child{border-bottom:none;--border-width: 0 0 0px 0}.sales-performance[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(1), .sales-performance[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(2){border-right:1px solid #404040}.sales-performance[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{width:100%;overflow:hidden}.sales-performance[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:15%;float:left;font-size:.79rem;border-right:1px solid #404040;color:#404040}.sales-performance[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;color:#005eaa}.sales-performance[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){width:25%;padding:0 6px;text-align:center}.sales-performance[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{width:25%;float:right;border-right:none!important;text-align:right}.sales-performance[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{width:100%;position:relative;overflow-y:scroll;overflow-x:hidden;-ms-overflow-style:none;scrollbar-width:none}.sales-performance[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.sales-performance[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{text-align:left!important;position:unset!important;width:100%;font-weight:none!important;color:#404040}.chart[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]{border-bottom:1px solid #e3e3e3;padding:10px 0 0}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]{width:100%;overflow:hidden;padding:5% 10%}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:45%;float:left;background:#ff8100;border-radius:10px;padding:10px 0}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.79rem;color:#fff;margin:0;text-align:center}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{float:right;background:#005eaa}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]:first-child{padding-top:0}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]:last-child{border-bottom:none!important}.chart[_ngcontent-%COMP%]   .branch[_ngcontent-%COMP%]{width:100%;overflow:hidden}.chart[_ngcontent-%COMP%]   .branch[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:50%;float:left;font-size:.79rem;color:#404040}@media (min-width: 280px) and (max-width: 620px){section[_ngcontent-%COMP%]{width:100%!important;padding:0!important;margin:10px!important}}"]}),i})()}];let L=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[d.Bz.forChild(D)],d.Bz]}),i})(),z=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.ez,h.u5,g.Pc,f.X,L]]}),i})()}}]);