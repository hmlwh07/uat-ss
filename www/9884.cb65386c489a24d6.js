"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9884],{39884:(Mt,F,l)=>{l.r(F),l.d(F,{ReportByAgentMonthlyModule:()=>Ct});var A=l(86019),f=l(64762),h=l(49133),b=l(92070),L=l(53489),t=l(83668),Z=l(44522),Y=l(11901),B=l(62473),R=l(91691),M=l(18260),q=l(67198);const T=`${M.N.apiUrl}/summaryReportByBranchForMonthly`,w=`${M.N.apiUrl}/officeHirearchy`,V=`${M.N.apiUrl}/agentByOffice`,x=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let P=(()=>{class a extends R.i{constructor(e,o){super(e,T),this.httpClient=e,this.authService=o}getOfficeHirearchy(e,o){const r=new Z.LE({fromObject:{parentId:e,typeCode:o}});return this.httpClient.get(w,{params:r})}getAgentOffice(e){const n=new Z.LE({fromObject:{officeId:e}});return this.httpClient.get(V,{params:n})}getAllReportData(e){e.fromDate&&(e.fromDate=this.formatDateYYYY_MM_DD(e.fromDate)),e.toDate&&(e.toDate=this.formatDateYYYY_MM_DD(e.toDate));const o=new Z.LE({fromObject:e});return this.httpClient.get(T,{params:o})}getAllAboutBRAM(e){return this.httpClient.get(T+"/"+e+"/asset")}formatDateYYYY_MM_DD(e){var o=new Date(e),n=""+(o.getMonth()+1),r=""+o.getDate(),m=o.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[m,n,r].join("-")}exportExcel(e){const o=e.title,n=e.searchValue,r=e.products,m=e.data;let u=new Y.Workbook,g=u.addWorksheet("Sheet1");g.views=[{state:"frozen",xSplit:4,ySplit:4,activeCell:"A1"}],g.mergeCells("A1","B2");let y=g.getCell("A1");y.value=o,y.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},y.alignment={vertical:"middle",horizontal:"left"},g.mergeCells("G2","G2");let N=g.getCell("G2");if(N.value="Reported By: "+this.authService.currentUserValue.username,N.font={name:"Calibri",size:10,bold:!0},N.alignment={vertical:"middle",horizontal:"left"},n.length>0)for(var s=0;s<n.length;s++){let p=null,d=null;if(n[s].fromDate&&(p="F1",d="From Date: "+n[s].fromDate),n[s].toDate&&(p="F2",d="To Date: "+n[s].toDate),n[s].companyName&&(p="L1",d="Company: "+n[s].companyName),n[s].channelName&&(p="M1",d="Channel: "+n[s].channelName),n[s].regionName&&(p="N1",d="Region: "+n[s].regionName),n[s].clusterName&&(p="L2",d="Cluster: "+n[s].clusterName),n[s].branchName&&(p="M2",d="Branch: "+n[s].branchName),n[s].agentName&&(p="N2",d="Agent: "+n[s].agentName),null!=p&&null!=d){let c=g.getCell(p);c.value=d,c.font={name:"Calibri",size:10,bold:!0},c.alignment={vertical:"middle",horizontal:"left"}}}g.addRow([]);let G=0;for(s=0;s<r.length;s++){let d=this.calculateStartPoint(G);G+=1;let c=g.getCell(d);c.value=r[s],c.font={name:"Calibri",size:12,bold:!0},c.alignment={vertical:"middle",horizontal:"center"}}m.forEach(p=>{let d=g.addRow(p),c=0;p.forEach(v=>{c++;let _=d.getCell(c);1==c||2==c||3==c?_&&(_.alignment={vertical:"middle",horizontal:"left"}):_.alignment={vertical:"middle",horizontal:"right"},c>3&&(_.numFmt="#,##0.00_);(#,##0.00)")})}),g.columns.forEach(function(p,d){var c=0;p.eachCell({includeEmpty:!0},function(v){var _=v.value?v.value.toString().length:10;_>c&&(c=_)}),p.width=c<10?10:c}),g.getColumn(1).width=25,u.xlsx.writeBuffer().then(p=>{let d=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});B.saveAs(d,o+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateStartPoint(e){return x[e]+"4"}calculateEndPoint(e){return x[e]+"4"}calculateDataPoint(e){return x[e]+"5"}calculatePremiumDataPoint(e){return x[e]+"6"}formatDateDDMMYYY(e){var o=new Date(e),n=""+(o.getMonth()+1),r=""+o.getDate(),m=o.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[r,n,m].join("_")}mathRoundTo(e,o){const n=Math.pow(10,o);return(Math.round(e*n)/n).toLocaleString()}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(Z.eN),t.LFG(q.e8))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var D=l(78480),I=l(86031),O=l(57842);function J(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",29),t.TgZ(1,"div",15),t.TgZ(2,"label",16),t._uU(3,"Company"),t.qZA(),t.TgZ(4,"div",30),t.TgZ(5,"ng-select",32),t.NdJ("change",function(n){return t.CHM(e),t.oxw(2).changeOptions(n,"channel")}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw(2);t.xp6(5),t.Q6J("items",e.selectOptions.companies)}}function E(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.YNc(1,J,6,1,"div",28),t.TgZ(2,"div",29),t.TgZ(3,"div",15),t.TgZ(4,"label",16),t._uU(5,"Channel"),t.qZA(),t.TgZ(6,"div",30),t.TgZ(7,"ng-select",31),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"region")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.fromDate&&""!=e.createFormGroup.value.toDate),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.channels.length)("items",e.selectOptions.channels)}}function U(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Region"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",33),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"cluster")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Cluster"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",34),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"branch")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.regions.length)("items",e.selectOptions.regions),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.cluster.length)("items",e.selectOptions.cluster)}}function Q(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Branch"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",35),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"agent")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Agent Name"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",36),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"office")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.branches.length)("items",e.selectOptions.branches),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.agents.length)("items",e.selectOptions.agents)}}function S(a,i){1&a&&t._UZ(0,"br")}function H(a,i){1&a&&t._UZ(0,"br")}function k(a,i){1&a&&t._UZ(0,"br")}function j(a,i){1&a&&t._UZ(0,"br")}function z(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.hij("From Month/Year: ",e.formatDateDDMMYYY(e.createFormGroup.value.fromDate)," ")}}function W(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.hij("To Month/Year: ",e.formatDateDDMMYYY(e.createFormGroup.value.toDate),"")}}function X(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Company: ",e.companyName," ")}}function $(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Channel: ",e.channelName," ")}}function K(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Region: ",e.regionName," ")}}function tt(a,i){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,X,2,1,"span",39),t.YNc(2,$,2,1,"span",39),t.YNc(3,K,2,1,"span",39),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.channelId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.regionId)}}function et(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Cluster: ",e.clusterName," ")}}function ot(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Branch: ",e.branchName,"")}}function nt(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Agent: ",e.agentName," ")}}function at(a,i){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,et,2,1,"span",39),t.YNc(2,ot,2,1,"span",39),t.YNc(3,nt,2,1,"span",39),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.branchId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.agentId)}}function rt(a,i){if(1&a&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.Oqu(e.headerMonthName)}}function it(a,i){if(1&a&&(t.TgZ(0,"tr",47),t.TgZ(1,"th"),t._uU(2,"Agent Name"),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Branch Name"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Activities"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Target"),t.qZA(),t.YNc(9,rt,2,1,"th",46),t.qZA()),2&a){const e=t.oxw(2);t.xp6(9),t.Q6J("ngForOf",e.productList)}}function lt(a,i){if(1&a&&(t.TgZ(0,"td",51),t._uU(1),t.ALo(2,"number"),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.totalTargetValue||0,"1.2-2"))}}function st(a,i){1&a&&(t.TgZ(0,"td",51),t._uU(1,"0.00"),t.qZA())}function ct(a,i){if(1&a&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.monthlyValue||0,"1.2-2"))}}function ht(a,i){1&a&&(t.TgZ(0,"label"),t._uU(1,"0.00"),t.qZA())}function pt(a,i){if(1&a&&(t.TgZ(0,"td",51),t.YNc(1,ct,3,4,"label",39),t.YNc(2,ht,2,0,"label",39),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",e.monthlyValue),t.xp6(1),t.Q6J("ngIf",!e.monthlyValue)}}function dt(a,i){if(1&a&&(t.TgZ(0,"tr"),t.TgZ(1,"td",48),t._uU(2),t.qZA(),t.TgZ(3,"td",48),t._uU(4),t.qZA(),t.TgZ(5,"td",48),t._uU(6),t.qZA(),t.YNc(7,lt,3,4,"td",49),t.YNc(8,st,2,0,"td",49),t.YNc(9,pt,3,2,"td",50),t.qZA()),2&a){const e=i.$implicit,o=i.index,n=t.oxw(2);t.xp6(2),t.Oqu(e.agentName),t.xp6(2),t.Oqu(e.branchName),t.xp6(2),t.Oqu(e.activitiesName),t.xp6(1),t.Q6J("ngIf",e.totalTargetValue),t.xp6(1),t.Q6J("ngIf",!e.totalTargetValue),t.xp6(1),t.Q6J("ngForOf",n.dataList[o].productDataList)}}function mt(a,i){if(1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",37),t.TgZ(3,"div",38),t.YNc(4,S,1,0,"br",39),t.YNc(5,H,1,0,"br",39),t.TgZ(6,"h3",40),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",38),t.YNc(9,k,1,0,"br",39),t.YNc(10,j,1,0,"br",39),t.TgZ(11,"div",41),t.YNc(12,z,2,1,"span",39),t.YNc(13,W,2,1,"span",39),t.qZA(),t.qZA(),t.TgZ(14,"div",42),t.YNc(15,tt,4,3,"div",39),t.YNc(16,at,4,3,"div",39),t.qZA(),t.qZA(),t.TgZ(17,"div",43),t.TgZ(18,"table",44),t.YNc(19,it,10,1,"tr",45),t.YNc(20,dt,10,6,"tr",46),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.fromDate),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.toDate),t.xp6(2),t.Q6J("ngIf",""!=e.createFormGroup.value.companyId||""!=e.createFormGroup.value.channelId||""!=e.createFormGroup.value.regionId),t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.clusterId||""!=e.createFormGroup.value.branchId||""!=e.createFormGroup.value.agentId),t.xp6(3),t.Q6J("ngIf",e.productList.length>0),t.xp6(1),t.Q6J("ngForOf",e.dataList)}}function ut(a,i){1&a&&(t.TgZ(0,"div",52),t._uU(1," There is no data "),t.qZA())}let gt=(()=>{class a{constructor(e,o){this.cdf=e,this.exportService=o,this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.productValues=[],this.subHeader=[],this.dataExcel=[],this.isData=!1,this.productsHeader=[],this.dataList=[],this.title="Monthly Activity Report"}ngOnInit(){this.loadForm(),this.getOfficeHirearchy()}getOfficeHirearchy(){return(0,f.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(e=>(0,f.mG)(this,void 0,void 0,function*(){e&&(this.selectOptions.companies=e)}))})}getAllReports(){return(0,f.mG)(this,void 0,void 0,function*(){this.productList=[],this.dataList=[],this.createFormGroup.invalid?(0,L.w)(this.createFormGroup):yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(e=>(0,f.mG)(this,void 0,void 0,function*(){if(e){if(e.headerColumnList.length>0)for(var o=0;o<e.headerColumnList.length;o++)this.productList.push(e.headerColumnList[o]);if(e.dataList.length>0)for(this.isData=!0,e.dataList.sort((m,u)=>m.agentName<u.agentName?-1:m.agentName>u.agentName?1:0),this.dataList=e.dataList,o=0;o<this.dataList.length;o++){let u=[];for(var n=0;n<this.productList.length;n++)u.push(this.productList[n]);if(this.dataList[o].productDataList=u,this.dataList[o].dynamicList)for(n=0;n<this.dataList[o].dynamicList.length;n++){let y=0;for(var r=0;r<this.dataList[o].productDataList.length;r++)this.dataList[o].productDataList[r].headerMonthName==this.dataList[o].dynamicList[n].headerMonthName&&(this.dataList[o].productDataList[r].headerDateName=this.dataList[o].dynamicList[n].headerDateName,this.dataList[o].productDataList[r].headerDate=this.dataList[o].dynamicList[n].headerDate,this.dataList[o].productDataList[r].headerWeekName=this.dataList[o].dynamicList[n].headerWeekName,this.dataList[o].productDataList[r].headerWeekRange=this.dataList[o].dynamicList[n].headerWeekRange,this.dataList[o].productDataList[r].headerMonthName=this.dataList[o].dynamicList[n].headerMonthName,this.dataList[o].productDataList[r].dailyValue=Number(this.dataList[o].dynamicList[n].dailyValue),this.dataList[o].productDataList[r].weeklyValue=Number(this.dataList[o].dynamicList[n].weeklyValue),this.dataList[o].productDataList[r].monthlyValue=Number(this.dataList[o].dynamicList[n].monthlyValue),y+=Number(this.dataList[o].dynamicList[n].targetValue));this.dataList[o].totalTargetValue=y}}else this.isData=!1}})),this.cdf.detectChanges()})}generateReportExcel(){this.productValues=[],this.dataExcel=[],this.productValues=["Agent Name","Branch Name","Activities Name","Target"];for(var e=0;e<this.productList.length;e++)this.productValues.push(this.productList[e].headerMonthName);for(e=0;e<this.dataList.length;e++){let g=[];g.push(this.dataList[e].agentName,this.dataList[e].branchName,this.dataList[e].activitiesName,this.dataList[e].totalTargetValue||0);for(var o=0;o<this.dataList[e].productDataList.length;o++)g.push(this.dataList[e].productDataList[o].monthlyValue||0);this.dataExcel.push(g)}let n=null,r=null;this.createFormGroup.value.fromDate&&(n=this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)),this.createFormGroup.value.fromDate&&(r=this.formatDateDDMMYYY(this.createFormGroup.value.toDate)),this.exportService.exportExcel({title:this.title,searchValue:[{fromDate:n},{toDate:r},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],products:this.productValues,data:this.dataExcel})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.productList=[],this.dataList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.fromMinDate=null,this.fromMaxDate=null,this.cdf.detectChanges()}changeOptions(e,o){return(0,f.mG)(this,void 0,void 0,function*(){"company"==o&&(e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.channels=n)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==o&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"02").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.channels=n)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==o&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.channelName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"03").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.regions=n)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==o&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.regionName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"04").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.cluster=n)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==o&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.clusterName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"05").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.branches=n)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==o&&(e?(this.branchName=e.name,yield this.exportService.getAgentOffice(e.id).toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.agents=n)}))):(this.branchName=null,this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"office"==o&&(e?this.agentName=e.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new h.cw({fromDate:new h.NI("",[h.kI.required,h.kI.nullValidator]),toDate:new h.NI("",[h.kI.required,h.kI.nullValidator]),agentId:new h.NI(""),companyId:new h.NI(""),channelId:new h.NI(""),regionId:new h.NI(""),clusterId:new h.NI(""),branchId:new h.NI("")})}isControlValid(e){const o=this.createFormGroup.controls[e];return o.valid&&(o.dirty||o.touched)}isControlInvalid(e){const o=this.createFormGroup.controls[e];return o.invalid&&(o.dirty||o.touched)}controlHasError(e,o){const n=this.createFormGroup.controls[o];return n.hasError(e)&&(n.dirty||n.touched)}isControlTouched(e){const o=this.createFormGroup.controls[e];return o.dirty||o.touched}doValid(e){if("FromDate"==e){if(this.createFormGroup.controls.fromDate.value){let u=b(this.createFormGroup.controls.fromDate.value).add(0,"years");this.toMaxDate={year:parseInt(u.format("YYYY")),month:parseInt(u.format("M")),day:parseInt(u.format("D"))},this.createFormGroup.controls.fromDate.setValue(u.format("YYYY-MM-DD"))}var o=new Date(this.createFormGroup.value.fromDate);o.setFullYear(o.getFullYear()+1),o.setDate(o.getDate()-1),this.fromMinDate=this.createFormGroup.value.fromDate,this.fromMaxDate=o;let m=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=m&&1!=m&&this.createFormGroup.controls.toDate.setValue("")}if("ToDate"==e){if(this.createFormGroup.controls.toDate.value){let u=b(this.createFormGroup.controls.toDate.value).add(0,"years");this.toMaxDate={year:parseInt(u.format("YYYY")),month:parseInt(u.format("M")),day:parseInt(u.format("D"))},this.createFormGroup.controls.toDate.setValue(u.format("YYYY-MM-DD"))}var n=new Date(this.createFormGroup.value.toDate);n.setFullYear(n.getFullYear()-1),n.setDate(n.getDate()+1),this.fromMinDate=n,this.fromMaxDate=this.createFormGroup.value.toDate;let m=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=m&&1!=m&&this.createFormGroup.controls.fromDate.setValue("")}this.cdf.detectChanges()}clearDate(e){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==e&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==e&&this.createFormGroup.controls.toDate.setValue(""),this.isData=!1,this.productList=[],this.dataList=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(e){var o=new Date(e),n=""+(o.getMonth()+1),r=""+o.getDate(),m=o.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[r,n,m].join("/")}mathRoundTo(e,o){const n=Math.pow(10,o);return(Math.round(e*n)/n).toLocaleString()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.sBO),t.Y36(P))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-report-by-agent-monthly"]],decls:46,vars:15,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","regionId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","clusterId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","branchId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","agentName","bindValue","agentId","formControlName","agentId",1,"ng-custom-select",3,"readonly","items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"date-display"],[1,"search-display"],[2,"width","100%","overflow-y","scroll","overflow-x","scroll","max-height","500px"],["border","1"],["style","border-top: 1px solid #000;",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"border-top","1px solid #000"],[1,"text-left"],["class","text-right",4,"ngIf"],["class","text-right",4,"ngFor","ngForOf"],[1,"text-right"],[2,"color","gray","text-align","center"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"By Agent Monthly"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return o.getAllReports()}),t._UZ(9,"span",8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return o.generateReportExcel()}),t.TgZ(11,"span",10),t._uU(12,"Generate"),t.qZA(),t.qZA(),t.TgZ(13,"button",7),t.NdJ("click",function(){return o.cancelReport()}),t.TgZ(14,"span",10),t._uU(15,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"form",12),t.TgZ(18,"div",13),t.TgZ(19,"div",14),t.TgZ(20,"div",15),t.TgZ(21,"label",16),t._uU(22,"From Month/Year"),t.qZA(),t.TgZ(23,"div",17),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return o.doValid("FromDate")}),t.qZA(),t._UZ(25,"mat-datepicker-toggle",19),t._UZ(26,"mat-datepicker",20,21),t.qZA(),t.TgZ(28,"button",22),t.NdJ("click",function(){return o.clearDate("FromDate")}),t._uU(29,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",14),t.TgZ(31,"div",15),t.TgZ(32,"label",16),t._uU(33,"To Month/Year"),t.qZA(),t.TgZ(34,"div",17),t.TgZ(35,"input",23),t.NdJ("dateChange",function(){return o.doValid("ToDate")}),t.qZA(),t._UZ(36,"mat-datepicker-toggle",19),t._UZ(37,"mat-datepicker",20,24),t.qZA(),t.TgZ(39,"button",22),t.NdJ("click",function(){return o.clearDate("ToDate")}),t._uU(40,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(41,E,8,3,"div",25),t.YNc(42,U,13,4,"div",25),t.YNc(43,Q,13,4,"div",25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(44,mt,21,11,"div",26),t.YNc(45,ut,2,0,"div",27)),2&e){const n=t.MAs(27),r=t.MAs(38);t.xp6(10),t.Q6J("disabled",!o.isData),t.xp6(7),t.Q6J("formGroup",o.createFormGroup),t.xp6(7),t.Q6J("min",o.fromMinDate)("max",o.fromMaxDate)("matDatepicker",n),t.xp6(1),t.Q6J("for",n),t.xp6(10),t.Q6J("min",o.fromMinDate)("max",o.fromMaxDate)("matDatepicker",r),t.xp6(1),t.Q6J("for",r),t.xp6(5),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",o.isData),t.xp6(1),t.Q6J("ngIf",!o.isData)}},directives:[h._Y,h.JL,h.sg,h.Fj,D.hl,h.JJ,h.u,D.nW,I.R9,D.Mq,A.O5,O.w9,A.sg],pipes:[A.JJ],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0 .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border-collapse:unset}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;position:relative;border-collapse:unset}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.date-display[_ngcontent-%COMP%]{width:100%;overflow:hidden}.date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;min-width:135px;float:left;display:block}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#000;transform:rotate(0);position:absolute;top:0;left:49%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:end;padding:0 5px 0 0}"]}),a})();var ft=l(87626),_t=l(45598),vt=l(29018),yt=l(85378),At=l(75396),C=l(44290),Zt=l(57730),xt=l(92118),Dt=l(47975);let Ct=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[A.uU,{provide:C._A,useClass:xt.t7,deps:[C.Ad]},{provide:C.sG,useValue:Dt.G}],imports:[[A.ez,h.u5,O.A0,h.UX,ft.vi,_t.fA,yt.M,At.X,D.FA,C.XK,Zt.c,I.lN,vt.Bz.forChild([{path:"",component:gt}])]]}),a})()}}]);