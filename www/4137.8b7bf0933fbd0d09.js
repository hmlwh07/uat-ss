"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4137],{98807:(C,u,o)=>{o.d(u,{X:()=>r});var h=o(5e3),p=o(96115);let r=(()=>{class l{constructor(g){this._languageService=g}transform(g){if(g){let f=this._languageService.getSelectedLanguage(),t=g.split(".");if(t.length>=2)try{return this._languageService.langs[f][t[0]][t[1]]||t[1]}catch(M){return g}}return g}}return l.\u0275fac=function(g){return new(g||l)(h.Y36(p.K,16))},l.\u0275pipe=h.Yjl({name:"translate",type:l,pure:!1}),l})()},74137:(C,u,o)=>{o.r(u),o.d(u,{DashboardKbzMsManagerPageModule:()=>F});var h=o(69808),p=o(93075),r=o(83950),l=o(96592),m=o(70655),g=o(54004),f=o(92340),t=o(5e3),M=o(86298),b=o(59257),_=o(42115),x=o(98807);const A=["chartAgent"],v=["chartLead"];function Z(a,s){if(1&a&&t._UZ(0,"img",25),2&a){const n=t.oxw();t.Q6J("src",n.DEFAULT_DOWNLOAD_URL+"/"+(null==n.data||null==n.data.agentInfo?null:n.data.agentInfo.attId),t.LSH)}}function y(a,s){1&a&&t._UZ(0,"img",26)}function T(a,s){if(1&a&&(t.TgZ(0,"ion-item",27),t.TgZ(1,"ion-thumbnail",28),t._UZ(2,"img",29),t.qZA(),t.TgZ(3,"ion-text"),t._uU(4),t.qZA(),t.TgZ(5,"ion-text"),t._uU(6),t.ALo(7,"number"),t.qZA(),t.qZA()),2&a){const n=s.$implicit,e=t.oxw();t.xp6(2),t.Q6J("src",e.DEFAULT_DOWNLOAD_URL+n.productSmallIcon,t.LSH),t.xp6(2),t.Oqu(n.productName),t.xp6(2),t.hij("",t.xi3(7,3,n.premium,"1.2-2")," MMK")}}function w(a,s){if(1&a){const n=t.EpF();t.TgZ(0,"ion-item",31),t.NdJ("click",function(){const c=t.CHM(n).$implicit;return t.oxw(2).goToLPDashboard(c)}),t.TgZ(1,"ion-avatar",28),t.TgZ(2,"img",32),t.NdJ("error",function(i){return t.CHM(n),t.oxw(2).changeSource(i)}),t.qZA(),t.qZA(),t.TgZ(3,"ion-text"),t.TgZ(4,"ion-label",33),t._uU(5),t.qZA(),t.TgZ(6,"ion-label",33),t._uU(7),t.ALo(8,"number"),t.qZA(),t.qZA(),t.qZA()}if(2&a){const n=s.$implicit;t.xp6(5),t.Oqu(n.name),t.xp6(2),t.hij("",t.xi3(8,2,n.premium,"1.2-2")," MMK")}}const d=function(a){return{height:a}};function q(a,s){if(1&a&&(t.TgZ(0,"ion-list",1),t.YNc(1,w,9,5,"ion-item",30),t.qZA()),2&a){const n=t.oxw();t.Q6J("ngStyle",t.VKq(2,d,n.salesHpx)),t.xp6(1),t.Q6J("ngForOf",null==n.data?null:n.data.subAgentMonthlySale)}}function D(a,s){if(1&a&&(t.TgZ(0,"div",34),t._UZ(1,"apx-chart",35),t.qZA()),2&a){const n=t.oxw();t.xp6(1),t.Q6J("series",null==n.chartOptions?null:n.chartOptions.series)("chart",null==n.chartOptions?null:n.chartOptions.chart)("dataLabels",null==n.chartOptions?null:n.chartOptions.dataLabels)("plotOptions",null==n.chartOptions?null:n.chartOptions.plotOptions)("yaxis",null==n.chartOptions?null:n.chartOptions.yaxis)("xaxis",null==n.chartOptions?null:n.chartOptions.xaxis)("legend",null==n.chartOptions?null:n.chartOptions.legend)("colors",null==n.chartOptions?null:n.chartOptions.colors)("grid",null==n.chartOptions?null:n.chartOptions.grid)}}function L(a,s){if(1&a&&(t.TgZ(0,"div",36),t._UZ(1,"apx-chart",37),t.qZA()),2&a){const n=t.oxw();t.xp6(1),t.Q6J("series",n.chartOptionsAgent.series)("chart",n.chartOptionsAgent.chart)("xaxis",n.chartOptionsAgent.xaxis)("yaxis",n.chartOptionsAgent.yaxis)("title",n.chartOptionsAgent.title)("legend",n.chartOptionsAgent.legend)("dataLabels",n.chartOptionsAgent.dataLabels)("markers",n.chartOptionsAgent.markers)}}const H=function(a){return{"padding-bottom":a}},S=function(a,s){return{width:a,height:s}},z=function(a){return{padding:a}},I=[{path:"",component:(()=>{class a{constructor(n,e,i,c,O,J){this.platform=n,this.cdf=e,this.route=i,this.auth=c,this.dashboardService=O,this.router=J,this.agentLineChartCategories=[],this.agentLineChartDatas=[],this.leadObj={},this.currentMonthIndex=(new Date).getUTCMonth(),this.currentYear=(new Date).getUTCFullYear(),this.months=["JAN","FEB","Mar","APR","MAY","JUL","AUG","SEP","OCT","NOV","DEC"],this.todayActiveAgent=0,this.DEFAULT_DOWNLOAD_URL=`${f.N.apiUrl}/attachment-downloader`,this.route.queryParams.subscribe(P=>(0,m.mG)(this,void 0,void 0,function*(){P.empId?(this.id=JSON.parse(P.empId),this.loadForm()):(this.id=this.auth.currentUserValue.id,this.loadForm())}))}ngOnInit(){return(0,m.mG)(this,void 0,void 0,function*(){this.getList(),this.getLeadList(),this.getAgentList(),this.radioW=this.platform.width(),this.radioH=this.platform.height(),this.calculateMainContentHeight(this.radioW,this.radioH)})}loadForm(){this.actForm=new p.cw({empId:new p.NI(this.id)})}getList(){this.dashboardService.getList(this.actForm.value).toPromise().then(n=>{n&&(this.data=n,this.setChartOptions("agent"),this.cdf.detectChanges())})}getLeadList(){this.dashboardService.getLeadList(this.actForm.value).toPromise().then(n=>{n&&(this.leadObj=n,this.todayActiveAgent=n.todayActiveAgent,this.setChartOptions("lead"),this.cdf.detectChanges())})}getAgentList(){this.dashboardService.getAgentList(this.actForm.value).pipe((0,g.U)(n=>{let e=[],i=[];return n.weeklyActiveAgents.map(c=>{e.push(c.weekNo),i.push(parseInt(c.noOfActiveAgent))}),Object.assign(Object.assign({},n),{data:i,weeks:e})})).toPromise().then(n=>{console.log(n),n&&(this.agentLineChart=n,this.todayActiveAgent=n.todayNoOfActiveAgent,this.agentLineChartCategories=n.weeks,this.agentLineChartDatas=n.data,Math.max(...this.agentLineChartDatas),this.setChartOptions("agent"),this.cdf.detectChanges())})}ngOnDestroy(){}goToLPDashboard(n){this.router.navigate(["/dashboard/lp-dashboard"],{queryParams:{empId:n.empId}})}goToSalePolicies(){this.router.navigate(["/sales/application/list"])}goToActivities(){this.router.navigate(["activity/activity-management-list"])}setChartOptions(n){let e="lead"==n?"chartOptions":"chartOptionsAgent",i=Math.max(...this.agentLineChartDatas);this[e]="lead"==n?{series:[{name:"",data:["lead"==n?this.leadObj.leadWinCount:this.data.converted,"lead"==n?this.leadObj.leadAssignCount:this.data.assigned]}],chart:{toolbar:{show:!1},height:this.chartH-20,type:"bar",events:{click:function(c,O){}}},colors:["#008FFB","#00E396","#FEB019","#FF4560","#775DD0","#546E7A","#26a69a","#D10CE8"],yaxis:{tickAmount:5,min:0,max:"lead"==n?this.leadObj.leadAssignCount||10:this.data.assigned||10,labels:{style:{fontSize:"0.79rem",fontFamily:"Roboto"}}},plotOptions:{bar:{columnWidth:"20%",distributed:!0}},dataLabels:{enabled:!1},legend:{show:!1},grid:{show:!0},xaxis:{categories:[["Converted","lead"==n?this.leadObj.leadWinCount:this.data.converted],["Assigned","lead"==n?this.leadObj.leadAssignCount:this.data.assigned]],labels:{style:{colors:["#008FFB","#00E396","#FEB019","#FF4560","#775DD0","#546E7A","#26a69a","#D10CE8"],fontSize:"12px"}}}}:{series:[{name:"",data:this.agentLineChartDatas,color:"#005f99"}],chart:{height:this.chartH-20,type:"line",toolbar:{show:!1}},title:{text:"",offsetX:0,offsetY:10,floating:!1,style:{fontSize:"0.79rem",fontFamily:"Roboto"}},xaxis:{type:"category",categories:this.agentLineChartCategories,labels:{style:{fontSize:"0.79rem",fontFamily:"Roboto"}}},yaxis:{min:0,max:i>10?i:10,tickAmount:5,labels:{show:!1,style:{fontSize:"0.79rem",fontFamily:"Roboto"}}},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},dataLabels:{enabled:!1,textAnchor:"middle",offsetX:-10,offsetY:-5,enabledOnSeries:[0]},markers:{size:[5,0,0]}}}onResize(n){this.radioW=n.target.innerWidth,this.radioH=n.target.innerHeight,this.calculateMainContentHeight(this.radioW,this.radioH)}calculateMainContentHeight(n,e){let i=0;this.chartH=0,n<1e3?(i=e-193.8,this.profileHpx=i/2-15+"px",this.salesHpx=i-40+"px",this.chartH=i/3,this.thingsHpx=this.chartH-40+"px",this.chartHpx=this.chartH+20+"px",this.profileImgW="120px",this.profilePadding="7px",this.productPadding="7px 0"):n<=1e3||n<1200?(i=e-203,this.profileHpx=i/2-20+"px",this.salesHpx=i-50+"px",this.chartH=i/3,this.thingsHpx=this.chartH-40+"px",this.chartHpx=this.chartH+20+"px",this.profileImgW="120px",this.profilePadding="5px",this.productPadding="5px 0"):(i=e-203.8,this.profileHpx=i/2-20+"px",this.salesHpx=i-50+"px",this.chartH=i/3,this.thingsHpx=this.chartH-40+"px",this.chartHpx=this.chartH+20+"px",this.profileImgW="120px",this.profilePadding="5px",this.productPadding="5px 0"),this.mainContentHeight=i,this.mainContentHeightPx=i+"px"}changeSource(n){n.target.src="./assets/images/user_profile-01.svg"}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(r.t4),t.Y36(t.sBO),t.Y36(l.gz),t.Y36(M.e),t.Y36(b.s),t.Y36(l.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-dashboard-kbz-ms-manager"]],viewQuery:function(n,e){if(1&n&&(t.Gf(A,5),t.Gf(v,5)),2&n){let i;t.iGM(i=t.CRH())&&(e.chartAgent=i.first),t.iGM(i=t.CRH())&&(e.chartLead=i.first)}},decls:70,vars:68,consts:[[1,"dashboard-main",3,"ngStyle","resize"],[3,"ngStyle"],[2,"margin","0 0 10px 0"],[1,"profile",3,"ngStyle"],[1,"img-content",3,"ngStyle"],["style","width: 100%; height: 100%;","alt","profile",3,"src",4,"ngIf"],["src","./assets/temp-img/manager.jpeg","alt","profile",4,"ngIf"],[1,"title-color"],[1,"premium",3,"ngStyle"],[1,"premuim-color"],[1,"product"],["lines","full",4,"ngFor","ngForOf"],[1,"sales-performance",3,"ngStyle"],[1,"date"],[2,"width","50%"],[3,"click"],[3,"ngStyle",4,"ngIf"],[1,"chart",3,"ngStyle"],[1,"sub-chart",3,"ngStyle"],[1,"branch"],[2,"font-weight","600"],["id","inflation",4,"ngIf"],[2,"font-weight","bold"],["id","chart","style","position: relative;\n      top: -15px;",4,"ngIf"],[1,"today"],["alt","profile",2,"width","100%","height","100%",3,"src"],["src","./assets/temp-img/manager.jpeg","alt","profile"],["lines","full"],["slot","start"],["alt","","srcset","",1,"prod-icon",3,"src"],["lines","full",3,"click",4,"ngFor","ngForOf"],["lines","full",3,"click"],["src","./assets/images/user_profile-01.svg","alt","",1,"user-icon",3,"error"],[1,"ion-text-wrap"],["id","inflation"],[3,"series","chart","dataLabels","plotOptions","yaxis","xaxis","legend","colors","grid"],["id","chart",2,"position","relative","top","-15px"],[3,"series","chart","xaxis","yaxis","title","legend","dataLabels","markers"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.NdJ("resize",function(c){return e.onResize(c)},!1,t.Jf7),t.TgZ(1,"section",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.YNc(5,Z,1,1,"img",5),t.YNc(6,y,1,0,"img",6),t.qZA(),t.TgZ(7,"ion-label",7),t._uU(8),t.qZA(),t.TgZ(9,"ion-label"),t._uU(10),t.qZA(),t.qZA(),t.TgZ(11,"div",8),t.TgZ(12,"ion-label",9),t._uU(13),t.ALo(14,"translate"),t.qZA(),t.TgZ(15,"ion-label"),t._uU(16),t.ALo(17,"number"),t.TgZ(18,"span"),t.TgZ(19,"small"),t._uU(20,"MMK"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"div",10),t.TgZ(22,"h2"),t._uU(23),t.ALo(24,"translate"),t.qZA(),t.TgZ(25,"ion-list",1),t.YNc(26,T,8,6,"ion-item",11),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"section",12),t.TgZ(28,"h2",7),t._uU(29),t.ALo(30,"translate"),t.qZA(),t.TgZ(31,"div",13),t.TgZ(32,"div",14),t._uU(33),t.qZA(),t.TgZ(34,"div"),t.TgZ(35,"a",15),t.NdJ("click",function(){return e.goToSalePolicies()}),t._uU(36),t.ALo(37,"translate"),t.qZA(),t.qZA(),t.qZA(),t.YNc(38,q,2,4,"ion-list",16),t.qZA(),t.TgZ(39,"section",17),t.TgZ(40,"div",18),t.TgZ(41,"h2",7),t._uU(42,"Opportunity Conversion"),t.qZA(),t.TgZ(43,"div",19),t.TgZ(44,"div"),t._uU(45),t.qZA(),t.TgZ(46,"div",20),t._uU(47),t.qZA(),t.qZA(),t.YNc(48,D,2,9,"div",21),t.qZA(),t.TgZ(49,"div",18),t.TgZ(50,"h2",7),t._uU(51,"Active Agents Today"),t.qZA(),t.TgZ(52,"div",22),t._uU(53),t.qZA(),t.YNc(54,L,2,8,"div",23),t.qZA(),t.TgZ(55,"div",18),t.TgZ(56,"h2",7),t._uU(57),t.ALo(58,"translate"),t.qZA(),t.TgZ(59,"div",24),t.TgZ(60,"div"),t.TgZ(61,"p"),t._uU(62,"TASK TODAY"),t.qZA(),t.TgZ(63,"p"),t._uU(64),t.qZA(),t.qZA(),t.TgZ(65,"div"),t.TgZ(66,"p"),t._uU(67,"OPPORTUNITY TODAY"),t.qZA(),t.TgZ(68,"p"),t._uU(69),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.Q6J("ngStyle",t.VKq(45,d,e.mainContentHeightPx)),t.xp6(1),t.Q6J("ngStyle",t.VKq(47,d,e.mainContentHeightPx)),t.xp6(2),t.Q6J("ngStyle",t.VKq(49,H,e.profilePadding)),t.xp6(1),t.Q6J("ngStyle",t.WLB(51,S,e.profileImgW,e.profileImgW)),t.xp6(1),t.Q6J("ngIf",null==e.data||null==e.data.agentInfo?null:e.data.agentInfo.attId),t.xp6(1),t.Q6J("ngIf",!(null!=e.data&&null!=e.data.agentInfo&&e.data.agentInfo.attId)),t.xp6(2),t.Oqu(null==e.data||null==e.data.agentInfo?null:e.data.agentInfo.employeeName),t.xp6(2),t.Oqu(null==e.data?null:e.data.role),t.xp6(1),t.Q6J("ngStyle",t.VKq(54,z,e.productPadding)),t.xp6(2),t.Oqu(t.lcZ(14,32,"CARD.premium")),t.xp6(3),t.hij("",t.xi3(17,34,null==e.data||null==e.data.agentInfo?null:e.data.agentInfo.totalPremium,"1.2-2")," "),t.xp6(7),t.Oqu(t.lcZ(24,37,"CARD.products")),t.xp6(2),t.Q6J("ngStyle",t.VKq(56,d,e.profileHpx)),t.xp6(1),t.Q6J("ngForOf",null==e.data?null:e.data.yearlyProductPremium),t.xp6(1),t.Q6J("ngStyle",t.VKq(58,d,e.mainContentHeightPx)),t.xp6(2),t.Oqu(t.lcZ(30,39,"CARD.sales_performances")),t.xp6(4),t.AsE("",e.months[e.currentMonthIndex]," | Y",e.currentYear,""),t.xp6(3),t.Oqu(t.lcZ(37,41,"CARD.all")),t.xp6(2),t.Q6J("ngIf",e.data&&e.data.subAgentMonthlySale.length>0),t.xp6(1),t.Q6J("ngStyle",t.VKq(60,d,e.mainContentHeightPx)),t.xp6(1),t.Q6J("ngStyle",t.VKq(62,d,e.chartHpx)),t.xp6(5),t.Oqu(null==e.data||null==e.data.agentInfo?null:e.data.agentInfo.branchName),t.xp6(2),t.hij("",null==e.leadObj?null:e.leadObj.leadWinRate," %"),t.xp6(1),t.Q6J("ngIf",e.chartOptions),t.xp6(1),t.Q6J("ngStyle",t.VKq(64,d,e.chartHpx)),t.xp6(4),t.Oqu(e.todayActiveAgent),t.xp6(1),t.Q6J("ngIf",e.chartOptionsAgent),t.xp6(1),t.Q6J("ngStyle",t.VKq(66,d,e.thingsHpx)),t.xp6(2),t.Oqu(t.lcZ(58,43,"CARD.things_to_followup")),t.xp6(7),t.Oqu(e.leadObj.taskToday),t.xp6(5),t.Oqu(e.leadObj.leadToday))},directives:[h.PC,h.O5,r.Q$,r.q_,h.sg,r.Ie,r.Bs,r.yW,r.BJ,_.x],pipes:[x.X,h.JJ],styles:["div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{width:33.3333333333%;float:left;display:block;padding:0 15px;overflow-y:scroll;overflow-x:hidden;-ms-overflow-style:none;scrollbar-width:none}div[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.dashboard-main[_ngcontent-%COMP%], .profile[_ngcontent-%COMP%]{border-bottom:1px solid #e3e3e3}.profile[_ngcontent-%COMP%]   .img-content[_ngcontent-%COMP%]{max-width:124px;max-height:124px;min-width:100px;min-height:100px;background:#b9fded;border-radius:50%;margin:0 auto 4%}.profile[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{text-align:center;display:block;line-height:20px;font-weight:600}.profile[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:last-child{color:#404040}.premium[_ngcontent-%COMP%]{border-bottom:1px solid #e3e3e3}.premium[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{text-align:center;display:block;line-height:20px;font-weight:600}.premium[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#404040}.premium[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]:last-child{color:#404040}.title-color[_ngcontent-%COMP%]{color:#005eaa;font-weight:700;font-size:1rem}.premuim-color[_ngcontent-%COMP%]{color:#005eaa}.product[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1rem!important;color:#404040;width:100%;font-weight:600}.product[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{width:100%;position:relative;overflow-y:scroll;overflow-x:hidden;-ms-overflow-style:none;scrollbar-width:none}.product[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{padding:0;position:relative}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:100%!important;height:100%!important;max-width:25px!important;margin-right:0;position:relative;left:-15px}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{max-width:40px!important}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{width:50%;font-size:.79rem;padding:0;color:#404040}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]:last-child{text-align:right;position:absolute;right:0;font-weight:600}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]:last-child   ion-label[_ngcontent-%COMP%]:first-child{font-weight:100}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-child{border-bottom:none;--border-width: 0 0 0px 0}.sales-performance[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{width:100%;overflow:hidden}.sales-performance[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:15%;float:left;font-size:.79rem;border-right:1px solid #404040;color:#404040}.sales-performance[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;color:#005eaa}.sales-performance[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){width:25%;padding:0 6px;text-align:center}.sales-performance[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{width:25%;float:right;border-right:none!important;text-align:right}.sales-performance[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{width:100%;position:relative;overflow-y:scroll;overflow-x:hidden;-ms-overflow-style:none;scrollbar-width:none}.sales-performance[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.sales-performance[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{text-align:left!important;position:unset!important;width:100%;font-weight:none!important;color:#404040}.chart[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]{border-bottom:1px solid #e3e3e3;padding:10px 0 0}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]{width:100%;overflow:hidden;padding:5% 10%}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:45%;float:left;background:#ff8100;border-radius:10px;padding:10px 0}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.79rem;color:#fff;margin:0;text-align:center}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]   .today[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{float:right;background:#005eaa}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]:first-child{padding-top:0}.chart[_ngcontent-%COMP%]   .sub-chart[_ngcontent-%COMP%]:last-child{border-bottom:none!important}.chart[_ngcontent-%COMP%]   .branch[_ngcontent-%COMP%]{width:100%;overflow:hidden}.chart[_ngcontent-%COMP%]   .branch[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:50%;float:left;font-size:.79rem;color:#404040}@media (min-width: 280px) and (max-width: 620px){section[_ngcontent-%COMP%]{width:100%!important;padding:0!important;margin:10px!important}}"]}),a})()}];let U=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[l.Bz.forChild(I)],l.Bz]}),a})();var K=o(7181);let F=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[h.ez,p.u5,r.Pc,_.X,K.j,U]]}),a})()}}]);