"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1152],{15346:(x,p,o)=>{o.d(p,{X:()=>g});var s=o(83668),m=o(59832);let g=(()=>{class l{constructor(t){this._languageService=t}transform(t){if(t){let Z=this._languageService.getSelectedLanguage(),h=t.split(".");if(2==h.length)try{return this._languageService.langs[Z][h[0]][h[1]]}catch(f){return"Can't Translate Data"}}return t}}return l.\u0275fac=function(t){return new(t||l)(s.Y36(m.K,16))},l.\u0275pipe=s.Yjl({name:"translate",type:l,pure:!1}),l})()},71152:(x,p,o)=>{o.r(p),o.d(p,{SeniorLpDashboardModule:()=>I});var s=o(86019),m=o(64762),g=o(49133),l=o(54753),u=o(18260),t=o(83668),Z=o(22338),h=o(61596),f=o(4205),A=o(75396),v=o(15346);const b=["chartAgent"],_=["chartLead"];function T(a,i){if(1&a&&(t.TgZ(0,"div",38),t.TgZ(1,"div",39),t._UZ(2,"img",40),t._uU(3),t.qZA(),t.TgZ(4,"div",41),t._uU(5),t.ALo(6,"number"),t.ALo(7,"translate"),t.qZA(),t.qZA()),2&a){const n=t.oxw().$implicit,e=t.oxw(2);t.xp6(2),t.Q6J("src",e.DEFAULT_DOWNLOAD_URL+n.productSmallIcon,t.LSH),t.xp6(1),t.hij(" ",n.productName," "),t.xp6(2),t.AsE("",t.xi3(6,4,n.premium,"1.0-2")," ",t.lcZ(7,7,"FORM.mmk"),"")}}function C(a,i){if(1&a&&(t.ynx(0),t.YNc(1,T,8,9,"div",37),t.BQk()),2&a){const n=i.$implicit;t.xp6(1),t.Q6J("ngIf",n.premium>0)}}function y(a,i){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,C,2,1,"ng-container",36),t.qZA()),2&a){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",null==n.data?null:n.data.yearlyProductPremium)}}function M(a,i){if(1&a){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",43),t.NdJ("click",function(){const d=t.CHM(n).$implicit;return t.oxw(2).goToLPManager(d)}),t.TgZ(2,"div",3),t.TgZ(3,"div"),t._UZ(4,"img",44),t.qZA(),t.TgZ(5,"div",45),t.TgZ(6,"div"),t.TgZ(7,"span"),t._uU(8),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"div",46),t.TgZ(10,"span"),t._uU(11),t.ALo(12,"number"),t.ALo(13,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.BQk()}if(2&a){const n=i.$implicit;t.xp6(8),t.Oqu(n.name),t.xp6(3),t.AsE("",t.xi3(12,3,n.premium,"1.0-2")," ",t.lcZ(13,6,"FORM.mmk"),"")}}function L(a,i){if(1&a&&(t.TgZ(0,"div",42),t.YNc(1,M,14,8,"ng-container",36),t.qZA()),2&a){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",null==n.data?null:n.data.subAgentMonthlySale)}}function q(a,i){if(1&a&&(t.TgZ(0,"div",47),t._UZ(1,"apx-chart",48),t.qZA()),2&a){const n=t.oxw();t.xp6(1),t.Q6J("series",null==n.chartOptions?null:n.chartOptions.series)("chart",null==n.chartOptions?null:n.chartOptions.chart)("dataLabels",null==n.chartOptions?null:n.chartOptions.dataLabels)("plotOptions",null==n.chartOptions?null:n.chartOptions.plotOptions)("yaxis",null==n.chartOptions?null:n.chartOptions.yaxis)("xaxis",null==n.chartOptions?null:n.chartOptions.xaxis)("legend",null==n.chartOptions?null:n.chartOptions.legend)("colors",null==n.chartOptions?null:n.chartOptions.colors)("grid",null==n.chartOptions?null:n.chartOptions.grid)}}function P(a,i){if(1&a&&(t.TgZ(0,"div",49),t._UZ(1,"apx-chart",50),t.qZA()),2&a){const n=t.oxw();t.xp6(1),t.Q6J("series",n.chartOptionsAgent.series)("chart",n.chartOptionsAgent.chart)("xaxis",n.chartOptionsAgent.xaxis)("yaxis",n.chartOptionsAgent.yaxis)("title",n.chartOptionsAgent.title)("legend",n.chartOptionsAgent.legend)("dataLabels",n.chartOptionsAgent.dataLabels)("markers",n.chartOptionsAgent.markers)}}let w=(()=>{class a{constructor(n,e,r,d,c){this.cdf=n,this.auth=e,this.dashboardService=r,this.router=d,this.ngzone=c,this.leadObj={},this.todayActiveAgent=0,this.agentLineChartCategories=[],this.agentLineChartDatas=[],this.currentMonthIndex=(new Date).getUTCMonth(),this.currentYear=(new Date).getUTCFullYear(),this.months=["JAN","FEB","Mar","APR","MAY","JUL","AUG","SEP","OCT","NOV","DEC"],this.DEFAULT_DOWNLOAD_URL=`${u.N.apiUrl}/attachment-downloader/`,this.unsub=this.auth.currentUserSubject.subscribe(O=>{O&&(this.authObj=O)}),this.loadForm()}ngOnInit(){return(0,m.mG)(this,void 0,void 0,function*(){this.getList(),this.getLeadList(),this.getAgentList()})}loadForm(){this.actForm=new g.cw({empId:new g.NI(this.authObj.id)})}getList(){this.ngzone.run(n=>{this.dashboardService.getList(this.actForm.value).toPromise().then(e=>{e&&(this.data=e,this.setChartOptions("agent"),this.cdf.detectChanges())})})}getLeadList(){this.dashboardService.getLeadList(this.actForm.value).toPromise().then(n=>{n&&(this.leadObj=n,this.setChartOptions("lead"),this.cdf.detectChanges())})}getAgentList(){this.ngzone.run(n=>{this.dashboardService.getAgentList(this.actForm.value).pipe((0,l.U)(e=>{let r=[],d=[];return e.weeklyActiveAgents.map(c=>{r.push(c.weekNo),d.push(parseInt(c.noOfActiveAgent))}),Object.assign(Object.assign({},e),{data:d,weeks:r})})).toPromise().then(e=>{e&&(this.agentLineChart=e,this.todayActiveAgent=e.todayNoOfActiveAgent,this.agentLineChartCategories=e.weeks,this.agentLineChartDatas=e.data,this.setChartOptions("agent"))})})}ngOnDestroy(){this.unsub.unsubscribe()}goToLPManager(n){this.router.navigate(["/dashboard/lp-manager-dashboard"],{queryParams:{empId:n.empId}})}goToSalePolicies(){this.router.navigate(["/sale/application/list"])}goToActivities(){this.router.navigate(["activity/activity-management-list"])}setChartOptions(n){let e="lead"==n?"chartOptions":"chartOptionsAgent",r=Math.max(...this.agentLineChartDatas);this[e]="lead"==n?{series:[{name:"",data:["lead"==n?this.leadObj.leadWinCount:this.data.converted,"lead"==n?this.leadObj.leadAssignCount:this.data.assigned]}],chart:{toolbar:{show:!1},height:160,type:"bar",events:{click:function(d,c){}}},colors:["#008FFB","#00E396","#FEB019","#FF4560","#775DD0","#546E7A","#26a69a","#D10CE8"],plotOptions:{bar:{columnWidth:"20%",distributed:!0}},dataLabels:{enabled:!1},legend:{show:!1},grid:{show:!0},yaxis:{tickAmount:5,min:0,max:"lead"==n?this.leadObj.leadAssignCount:this.data.assigned,labels:{style:{fontSize:"1rem",fontFamily:"Roboto"}}},xaxis:{categories:[["Converted","lead"==n?this.leadObj.leadWinCount:this.data.converted],["Assigned","lead"==n?this.leadObj.leadAssignCount:this.data.assigned]],labels:{style:{colors:["#008FFB","#00E396","#FEB019","#FF4560","#775DD0","#546E7A","#26a69a","#D10CE8"],fontSize:"12px"}}}}:{series:[{name:"",data:this.agentLineChartDatas,color:"#005f99"}],stroke:{curve:"smooth"},chart:{height:160,type:"line",toolbar:{show:!1}},title:{text:"",offsetX:0,offsetY:10,floating:!1,style:{fontSize:"1.1rem",fontFamily:"Roboto"}},xaxis:{type:"category",categories:this.agentLineChartCategories,labels:{style:{fontSize:"1rem",fontFamily:"Roboto"}}},yaxis:{min:0,max:r>10?r:10,tickAmount:5,labels:{style:{fontSize:"1rem",fontFamily:"Roboto"}}},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},dataLabels:{enabled:!1,textAnchor:"middle",offsetX:-10,offsetY:-5,enabledOnSeries:[0]},markers:{size:[5,0,0]}},this.cdf.detectChanges()}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(t.sBO),t.Y36(Z.e),t.Y36(h.s),t.Y36(f.F0),t.Y36(t.R0b))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-senior-lp-dashboard"]],viewQuery:function(n,e){if(1&n&&(t.Gf(b,5),t.Gf(_,5)),2&n){let r;t.iGM(r=t.CRH())&&(e.chartAgent=r.first),t.iGM(r=t.CRH())&&(e.chartLead=r.first)}},decls:103,vars:47,consts:[[1,"row"],[1,"col-lg-6","col-md-6","col-sm-12","col-xs-12"],[1,"card","card-custom","my-card","gutter-b"],[1,"flex",2,"align-items","center"],[1,"my-center"],["src","./assets/images/user_profile-01.svg","alt","",1,"user-image"],[1,"name-card"],[1,"card-label","primary-color",2,"padding","0px","margin","0px"],[1,"text-dark","text-bold"],[1,"card","my-card","card-custom","my-card","gutter-b"],[1,"row","my-row","my-border-bottom"],[1,"col-12","my-p-10"],[1,"card-label","primary-color"],[1,"col-12"],[1,"text-amt"],[1,"row","my-row","fixed-height"],[1,"col-12","my-pt-15"],[4,"ngIf"],[1,"card","card-custom","gutter-b"],[1,"my-card-fixed-height"],[1,"row","my-row"],[1,"col-6","my-p-10"],[1,"col-6","my-p-10","text-right","cursor",3,"click"],[1,"primary-color"],["class","width-100",4,"ngIf"],[1,"w-100"],[1,"col-4"],[1,"card","card-custom","my-card","my-block"],[1,"text-bold"],[1,"font-18"],["id","chartLead",4,"ngIf"],["id","chartAgent",4,"ngIf"],[1,"row","my-row",2,"height","100%","align-items","center"],[1,"col-12","flex",2,"justify-content","center"],[1,"box-1","card-box"],[1,"box-2","card-box"],[4,"ngFor","ngForOf"],["class","row my-row my-p-15 my-border-bottom","style","align-items: center;",4,"ngIf"],[1,"row","my-row","my-p-15","my-border-bottom",2,"align-items","center"],[1,"col-6"],["alt","","srcset","",1,"prod-icon",3,"src"],[1,"col-6","text-right","text-bold"],[1,"width-100"],[1,"my-profile-card","my-border-bottom",3,"click"],["src","./assets/images/user_profile-01.svg","alt","",1,"user-icon"],[1,"pl-5"],[1,"text-right","text-bold",2,"margin-left","auto"],["id","chartLead"],[3,"series","chart","dataLabels","plotOptions","yaxis","xaxis","legend","colors","grid"],["id","chartAgent"],[3,"series","chart","xaxis","yaxis","title","legend","dataLabels","markers"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t._UZ(5,"img",5),t.qZA(),t.TgZ(6,"div",6),t.TgZ(7,"h6",7),t._uU(8),t.qZA(),t.TgZ(9,"label",8),t._uU(10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",9),t.TgZ(12,"div",10),t.TgZ(13,"div",11),t.TgZ(14,"h6",12),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.qZA(),t.TgZ(17,"div",13),t.TgZ(18,"label",14),t._uU(19),t.ALo(20,"number"),t.TgZ(21,"span"),t.TgZ(22,"small"),t._uU(23),t.ALo(24,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"div",15),t.TgZ(26,"div",16),t.TgZ(27,"h6",12),t._uU(28),t.ALo(29,"translate"),t.qZA(),t.qZA(),t.TgZ(30,"div",13),t.YNc(31,y,2,1,"div",17),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"div",1),t.TgZ(33,"div",18),t.TgZ(34,"div",19),t.TgZ(35,"div",20),t.TgZ(36,"div",21),t.TgZ(37,"h6",12),t._uU(38),t.ALo(39,"translate"),t.qZA(),t.qZA(),t.TgZ(40,"div",22),t.NdJ("click",function(){return e.goToSalePolicies()}),t._uU(41),t.ALo(42,"translate"),t.qZA(),t.qZA(),t.TgZ(43,"div",20),t.TgZ(44,"div",13),t.TgZ(45,"span",23),t.TgZ(46,"span"),t._uU(47),t.qZA(),t._uU(48),t.qZA(),t.qZA(),t.qZA(),t.YNc(49,L,2,1,"div",24),t.qZA(),t.qZA(),t.qZA(),t._UZ(50,"div",25),t.TgZ(51,"div",26),t.TgZ(52,"div",27),t.TgZ(53,"div",20),t.TgZ(54,"div",11),t.TgZ(55,"h6",12),t._uU(56),t.ALo(57,"translate"),t.qZA(),t.qZA(),t.TgZ(58,"div",13),t.TgZ(59,"span",28),t._uU(60),t.qZA(),t.qZA(),t.TgZ(61,"div",13),t.TgZ(62,"span",29),t._uU(63),t.qZA(),t.qZA(),t.qZA(),t.YNc(64,q,2,9,"div",30),t.qZA(),t.qZA(),t.TgZ(65,"div",26),t.TgZ(66,"div",27),t.TgZ(67,"div",20),t.TgZ(68,"div",11),t.TgZ(69,"h6",12),t._uU(70),t.ALo(71,"translate"),t.qZA(),t.qZA(),t.TgZ(72,"div",13),t.TgZ(73,"span",29),t._uU(74),t.qZA(),t.qZA(),t.qZA(),t.YNc(75,P,2,8,"div",31),t.qZA(),t.qZA(),t.TgZ(76,"div",26),t.TgZ(77,"div",27),t.TgZ(78,"div",20),t.TgZ(79,"div",11),t.TgZ(80,"h6",12),t._uU(81),t.ALo(82,"translate"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(83,"div",32),t.TgZ(84,"div",33),t.TgZ(85,"div",34),t.TgZ(86,"div",4),t.TgZ(87,"span"),t._uU(88),t.ALo(89,"translate"),t.qZA(),t.qZA(),t._UZ(90,"br"),t.TgZ(91,"div",4),t.TgZ(92,"h5"),t._uU(93),t.qZA(),t.qZA(),t.qZA(),t.TgZ(94,"div",35),t.TgZ(95,"div",4),t.TgZ(96,"span"),t._uU(97),t.ALo(98,"translate"),t.qZA(),t.qZA(),t._UZ(99,"br"),t.TgZ(100,"div",4),t.TgZ(101,"h5"),t._uU(102),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(8),t.hij("",null==e.data||null==e.data.agentInfo?null:e.data.agentInfo.employeeName," "),t.xp6(2),t.Oqu(null==e.data?null:e.data.role),t.xp6(5),t.Oqu(t.lcZ(16,24,"FORM.premium")),t.xp6(4),t.hij(" ",t.xi3(20,26,null==e.data||null==e.data.agentInfo?null:e.data.agentInfo.totalPremium,"1.0-2")," "),t.xp6(4),t.Oqu(t.lcZ(24,29,"FORM.mmk")),t.xp6(5),t.Oqu(t.lcZ(29,31,"FORM.products")),t.xp6(3),t.Q6J("ngIf",e.data&&e.data.yearlyTotalPremium.length>0),t.xp6(7),t.Oqu(t.lcZ(39,33,"FORM.sale_performance")),t.xp6(3),t.hij(" ",t.lcZ(42,35,"FORM.view_all")," "),t.xp6(6),t.Oqu(e.months[e.currentMonthIndex]),t.xp6(1),t.hij(" | Y ",e.currentYear," "),t.xp6(1),t.Q6J("ngIf",e.data&&e.data.subAgentMonthlySale.length>0),t.xp6(7),t.Oqu(t.lcZ(57,37,"FORM.lead_conversion")),t.xp6(4),t.Oqu(null==e.data||null==e.data.agentInfo?null:e.data.agentInfo.branchName),t.xp6(3),t.hij("",null==e.leadObj?null:e.leadObj.leadWinRate," %"),t.xp6(1),t.Q6J("ngIf",e.chartOptions),t.xp6(6),t.Oqu(t.lcZ(71,39,"FORM.active_agent_today")),t.xp6(4),t.Oqu(e.todayActiveAgent),t.xp6(1),t.Q6J("ngIf",e.chartOptionsAgent),t.xp6(6),t.hij("",t.lcZ(82,41,"FORM.things_to_follow_up")," "),t.xp6(7),t.Oqu(t.lcZ(89,43,"FORM.activity")),t.xp6(5),t.Oqu(e.leadObj.taskToday),t.xp6(4),t.Oqu(t.lcZ(98,45,"FORM.lead_today")),t.xp6(5),t.Oqu(e.leadObj.leadToday))},directives:[s.O5,s.sg,A.x],pipes:[v.X,s.JJ],styles:[".top-box[_ngcontent-%COMP%]{color:#b5b5c3;margin-left:50px}.top-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000}.my-center[_ngcontent-%COMP%]{text-align:center}.user-image[_ngcontent-%COMP%]{width:60px;margin-left:15px}.user-icon[_ngcontent-%COMP%]{width:24px}.icon-image[_ngcontent-%COMP%]{width:20px}.font-24[_ngcontent-%COMP%]{font-size:24px!important}.font-18[_ngcontent-%COMP%]{font-size:18px!important}.font-14[_ngcontent-%COMP%]{font-size:14px!important}.underline[_ngcontent-%COMP%]{text-decoration:underline}.bold[_ngcontent-%COMP%]{font-weight:600}.flex[_ngcontent-%COMP%]{display:flex}.my-border-left[_ngcontent-%COMP%]{border-left:1px solid #7e8299}.my-card-title[_ngcontent-%COMP%]{justify-content:center;width:100%}.width-100[_ngcontent-%COMP%]{width:100%}.float-right[_ngcontent-%COMP%]{float:right}.text-right[_ngcontent-%COMP%]{text-align:right}.my-p-15[_ngcontent-%COMP%]{padding:15px 15px 15px 0}.name-card[_ngcontent-%COMP%]{padding:15px}.my-pt-15[_ngcontent-%COMP%]{padding-top:15px}.my-profile-card[_ngcontent-%COMP%]{padding:8px 8px 8px 15px;cursor:pointer}.my-border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid #dad9d9}.my-border-none[_ngcontent-%COMP%]{border:none}.my-row[_ngcontent-%COMP%]{margin-left:0!important;margin-right:0!important}.my-mt-5[_ngcontent-%COMP%]{margin-top:5px}.my-p-10[_ngcontent-%COMP%]{padding:15px 15px 0}.my-box[_ngcontent-%COMP%], .box-3[_ngcontent-%COMP%], .box-2[_ngcontent-%COMP%], .box-1[_ngcontent-%COMP%]{width:150px;height:150px;color:#fff;padding:8px;border-radius:8px}.box-1[_ngcontent-%COMP%]{margin-right:8px;background-color:#00acea}.box-2[_ngcontent-%COMP%]{background-color:#015eab}.box-3[_ngcontent-%COMP%]{background-color:#6868fa}.container[_ngcontent-%COMP%]{width:100%;min-height:200px}.fist-panel-container[_ngcontent-%COMP%]{width:100%;height:50%}.my-card[_ngcontent-%COMP%]{overflow:hidden;background-color:#fff!important;border:1px solid lightgrey!important}.fixed-height[_ngcontent-%COMP%], .my-card-fixed-height[_ngcontent-%COMP%]{max-height:400px;overflow-y:auto;overflow-x:hidden}.my-card-fixed-height[_ngcontent-%COMP%]{background-color:#fff!important;max-height:625px}.prod-icon[_ngcontent-%COMP%]{width:24px;margin-right:10px}.primary-color[_ngcontent-%COMP%]{color:#005f99!important}.card-50[_ngcontent-%COMP%]{height:230px}#chart[_ngcontent-%COMP%]{max-width:650px;margin:35px auto}.cursor[_ngcontent-%COMP%]{cursor:pointer}.red[_ngcontent-%COMP%]{color:red!important}.my-block[_ngcontent-%COMP%]{height:250px}.card-label[_ngcontent-%COMP%]{font-weight:bold;color:#005f99!important}#chartAgent[_ngcontent-%COMP%]{position:absolute;bottom:-10px;width:100%}"]}),a})();var U=o(85993),F=o(70933),D=o(18410),S=o(25011),j=o(63699);let I=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[s.uU,s.JJ],imports:[[s.ez,g.u5,g.UX,U.bz,F.Q,D.J,S.s,A.X,j.j,f.Bz.forChild([{path:"",component:w}])]]}),a})()}}]);