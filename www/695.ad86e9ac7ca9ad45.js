"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[695],{60695:(Dt,B,l)=>{l.r(B),l.d(B,{ReportDailySalesAnalysisByBranchModule:()=>Tt});var A=l(86019),f=l(64762),d=l(49133),I=l(92070),P=l(53489),t=l(83668),T=l(44522),L=l(11901),Y=l(62473),R=l(91691),C=l(18260),q=l(67198),w=l(71704),E=l(49875);const x=`${C.N.apiUrl}/report/dailySalesAnalysis`,b=`${C.N.apiUrl}/officeHirearchy`,U=`${C.N.apiUrl}/agentByOffice`,D=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let V=(()=>{class o extends R.i{constructor(e,a,n,i){super(e,x),this.httpClient=e,this.authService=a,this.platform=n,this.attachmentDownloadService=i}getOfficeHirearchy(e,a){const i=new T.LE({fromObject:{parentId:e,typeCode:a}});return this.httpClient.get(b,{params:i})}getAgentOffice(e){const n=new T.LE({fromObject:{officeId:e}});return this.httpClient.get(U,{params:n})}getAllReportData(e){e.fromDate&&(e.fromDate=this.formatDateYYYY_MM_DD(e.fromDate)),e.toDate&&(e.toDate=this.formatDateYYYY_MM_DD(e.toDate));const a=new T.LE({fromObject:e});return this.httpClient.get(x,{params:a})}getAllAboutBRAM(e){return this.httpClient.get(x+"/"+e+"/asset")}formatDateYYYY_MM_DD(e){var a=new Date(e),n=""+(a.getMonth()+1),i=""+a.getDate(),h=a.getFullYear();return n.length<2&&(n="0"+n),i.length<2&&(i="0"+i),[h,n,i].join("-")}exportExcel(e){const a=e.title,n=e.searchValue,i=e.productsHeader,h=e.data;let g=new L.Workbook,m=g.addWorksheet("Sheet1");m.views=[{state:"frozen",xSplit:0,ySplit:4,activeCell:"A1"}],m.mergeCells("A1","B2");let F=m.getCell("A1");F.value=a,F.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},F.alignment={vertical:"middle",horizontal:"left"},m.mergeCells("G1","G1");let O=m.getCell("G1");O.value="Reported Date: "+this.formatReportedDate(new Date),O.font={name:"Calibri",size:10,bold:!0},O.alignment={vertical:"middle",horizontal:"left"},m.mergeCells("G2","G2");let G=m.getCell("G2");if(G.value="Reported By: "+this.authService.currentUserValue.firstName+this.authService.currentUserValue.lastName,G.font={name:"Calibri",size:10,bold:!0},G.alignment={vertical:"middle",horizontal:"left"},n.length>0)for(var s=0;s<n.length;s++){let p=null,u=null;if(n[s].fromDate&&(p="F1",u="From Date: "+n[s].fromDate),n[s].toDate&&(p="F2",u="To Date: "+n[s].toDate),n[s].companyName&&(p="L1",u="Company: "+n[s].companyName),n[s].channelName&&(p="M1",u="Channel: "+n[s].channelName),n[s].regionName&&(p="N1",u="Region: "+n[s].regionName),n[s].clusterName&&(p="L2",u="Cluster: "+n[s].clusterName),n[s].branchName&&(p="M2",u="Branch: "+n[s].branchName),n[s].agentName&&(p="N2",u="Agent: "+n[s].agentName),null!=p&&null!=u){let c=m.getCell(p);c.value=u,c.font={name:"Calibri",size:10,bold:!0},c.alignment={vertical:"middle",horizontal:"left"}}}m.addRow([]);let S=0;for(s=0;s<i.length;s++){let u=this.calculateStartPoint(S);S+=1;let c=m.getCell(u);c.value=i[s],c.font={name:"Calibri",size:12,bold:!0},c.alignment={vertical:"middle",horizontal:"center"}}h.forEach(p=>{let u=m.addRow(p),c=0;p.forEach(v=>{c++;let y=u.getCell(c);1==c||2==c||3==c?y&&(y.alignment={vertical:"middle",horizontal:"left"}):y.alignment={vertical:"middle",horizontal:"right"},c>3&&(y.numFmt="#,##0.00_);(#,##0.00)")})}),m.columns.forEach(function(p,u){var c=0;p.eachCell({includeEmpty:!0},function(v){var y=v.value?v.value.toString().length:10;y>c&&(c=y)}),p.width=c<10?10:c}),m.getColumn(1).width=25,g.xlsx.writeBuffer().then(p=>{let u=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});this.platform.is("android")||this.platform.is("ios")?this.attachmentDownloadService.mobileDownload(a+"_"+this.formatDateDDMMYYY(new Date)+".xlsx",u):Y.saveAs(u,a+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateStartPoint(e){return D[e]+"4"}calculateEndPoint(e){return D[e]+"4"}calculateDataPoint(e){return D[e]+"5"}calculatePremiumDataPoint(e){return D[e]+"6"}formatDateDDMMYYY(e){var a=new Date(e),n=""+(a.getMonth()+1),i=""+a.getDate(),h=a.getFullYear();return n.length<2&&(n="0"+n),i.length<2&&(i="0"+i),[i,n,h].join("_")}mathRoundTo(e,a){const n=Math.pow(10,a);return(Math.round(e*n)/n).toLocaleString()}formatReportedDate(e){var a=new Date(e),n=""+(a.getMonth()+1),i=""+a.getDate(),h=a.getFullYear();return n.length<2&&(n="0"+n),i.length<2&&(i="0"+i),[i,n,h].join("/")}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(T.eN),t.LFG(q.e8),t.LFG(w.t4),t.LFG(E.Ys))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var _=l(78480),N=l(86031),M=l(57842);function J(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",29),t.TgZ(1,"div",15),t.TgZ(2,"label",16),t._uU(3,"Company"),t.qZA(),t.TgZ(4,"div",30),t.TgZ(5,"ng-select",32),t.NdJ("change",function(n){return t.CHM(e),t.oxw(2).changeOptions(n,"channel")}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw(2);t.xp6(5),t.Q6J("items",e.selectOptions.companies)}}function Q(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",13),t.YNc(1,J,6,1,"div",28),t.TgZ(2,"div",29),t.TgZ(3,"div",15),t.TgZ(4,"label",16),t._uU(5,"Channel"),t.qZA(),t.TgZ(6,"div",30),t.TgZ(7,"ng-select",31),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"region")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.fromDate&&""!=e.createFormGroup.value.toDate),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.channels.length)("items",e.selectOptions.channels)}}function H(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Region"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",33),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"cluster")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Cluster"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",34),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"branch")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.regions.length)("items",e.selectOptions.regions),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.cluster.length)("items",e.selectOptions.cluster)}}function k(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Branch"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",35),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"agent")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Agent Name"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",36),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"office")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.branches.length)("items",e.selectOptions.branches),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.agents.length)("items",e.selectOptions.agents)}}function z(o,r){1&o&&t._UZ(0,"br")}function X(o,r){1&o&&t._UZ(0,"br")}function W(o,r){1&o&&t._UZ(0,"br")}function K(o,r){1&o&&t._UZ(0,"br")}function $(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij("From Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.fromDate)," ")}}function j(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij("To Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.toDate),"")}}function tt(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Company: ",e.companyName," ")}}function et(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Channel: ",e.channelName," ")}}function at(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Region: ",e.regionName," ")}}function nt(o,r){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,tt,2,1,"span",39),t.YNc(2,et,2,1,"span",39),t.YNc(3,at,2,1,"span",39),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.channelId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.regionId)}}function ot(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Cluster: ",e.clusterName," ")}}function it(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Branch: ",e.branchName,"")}}function lt(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Agent: ",e.agentName," ")}}function rt(o,r){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,ot,2,1,"span",39),t.YNc(2,it,2,1,"span",39),t.YNc(3,lt,2,1,"span",39),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.branchId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.agentId)}}function st(o,r){if(1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"td",46),t._uU(2),t.qZA(),t.TgZ(3,"td",46),t._uU(4),t.qZA(),t.TgZ(5,"td",46),t._uU(6),t.qZA(),t.TgZ(7,"td",47),t._uU(8),t.ALo(9,"number"),t.qZA(),t.TgZ(10,"td",47),t._uU(11),t.ALo(12,"number"),t.qZA(),t.TgZ(13,"td",47),t._uU(14),t.ALo(15,"number"),t.qZA(),t.TgZ(16,"td",47),t._uU(17),t.ALo(18,"number"),t.qZA(),t.TgZ(19,"td",47),t._uU(20),t.ALo(21,"number"),t.qZA(),t.qZA()),2&o){const e=r.$implicit;t.xp6(2),t.Oqu(e.agentName),t.xp6(2),t.Oqu(e.branchName),t.xp6(2),t.Oqu(e.activityName),t.xp6(2),t.Oqu(t.xi3(9,8,e.dailyActualAgainstTarge||0,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(12,11,e.dailyConversionToProspect||0,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(15,14,e.dailyConversionToPreviousStage||0,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(18,17,e.dailyExpectedTargetConversion||0,"1.2-2")),t.xp6(3),t.hij("",t.xi3(21,20,e.dailyExpectedTargetConversionToProspects||0,"1.2-2")," ")}}function ct(o,r){if(1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",37),t.TgZ(3,"div",38),t.YNc(4,z,1,0,"br",39),t.YNc(5,X,1,0,"br",39),t.TgZ(6,"h3",40),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",38),t.YNc(9,W,1,0,"br",39),t.YNc(10,K,1,0,"br",39),t.TgZ(11,"div",41),t.YNc(12,$,2,1,"span",39),t.YNc(13,j,2,1,"span",39),t.qZA(),t.qZA(),t.TgZ(14,"div",42),t.YNc(15,nt,4,3,"div",39),t.YNc(16,rt,4,3,"div",39),t.qZA(),t.qZA(),t.TgZ(17,"div",43),t.TgZ(18,"table",44),t.TgZ(19,"tr"),t.TgZ(20,"th"),t._uU(21,"Agent Name"),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Branch Name"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Activities"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Daily Actual against Target"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Daily Conversion to Prospect"),t.qZA(),t.TgZ(30,"th"),t._uU(31,"Daily Conversion to Previous Stage"),t.qZA(),t.TgZ(32,"th"),t._uU(33,"Daily Expected Target Conversion"),t.qZA(),t.TgZ(34,"th"),t._uU(35,"Daily Expected Target Conversion to Prospects"),t.qZA(),t.qZA(),t.YNc(36,st,22,23,"tr",45),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.fromDate),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.toDate),t.xp6(2),t.Q6J("ngIf",""!=e.createFormGroup.value.companyId||""!=e.createFormGroup.value.channelId||""!=e.createFormGroup.value.regionId),t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.clusterId||""!=e.createFormGroup.value.branchId||""!=e.createFormGroup.value.agentId),t.xp6(20),t.Q6J("ngForOf",e.displayList)}}function dt(o,r){1&o&&(t.TgZ(0,"div",48),t._uU(1," There is no data "),t.qZA())}let pt=(()=>{class o{constructor(e,a){this.cdf=e,this.exportService=a,this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.productValues=[],this.subHeader=[],this.dataExcel=[],this.isData=!1,this.displayList=[],this.title="Daily Sales Analysis Report"}ngOnInit(){this.loadForm(),this.getOfficeHirearchy(),this.fromMinDate=null,this.fromMaxDate=null}getOfficeHirearchy(){return(0,f.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(e=>(0,f.mG)(this,void 0,void 0,function*(){e&&(this.selectOptions.companies=e)}))})}getAllReports(){return(0,f.mG)(this,void 0,void 0,function*(){this.displayList=[];let e=[{activityName:"Daily Lead"},{activityName:"Appointments (Phone)"},{activityName:"Appointments (Face to Face)"},{activityName:"Appointments (Online)"},{activityName:"Needs (LPP & BRAM complete)"},{activityName:"Solutions"},{activityName:"Sales"},{activityName:"Referrals"}];this.createFormGroup.invalid?(0,P.w)(this.createFormGroup):yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(a=>(0,f.mG)(this,void 0,void 0,function*(){if(a.dailydataList.length>0){this.isData=!0;for(var n=0;n<a.dailydataList.length;n++)for(var i=0;i<e.length;i++){let h={agentName:a.dailydataList[n].agentName,branchName:a.dailydataList[n].branchName,activityName:e[i].activityName,dailyActualAgainstTarge:this.dailyActualAgainstTarge(e[i].activityName,a.dailydataList[n]),dailyConversionToProspect:this.dailyConversionToProspect(e[i].activityName,a.dailydataList[n]),dailyConversionToPreviousStage:this.dailyConversionToPreviousStage(e[i].activityName,a.dailydataList[n]),dailyExpectedTargetConversion:this.dailyExpectedTargetConversion(e[i].activityName,a.dailydataList[n]),dailyExpectedTargetConversionToProspects:this.dailyExpectedTargetConversionToProspects(e[i].activityName,a.dailydataList[n])};this.displayList.push(h)}}else this.isData=!1})),this.cdf.detectChanges()})}dailyActualAgainstTarge(e,a){let n=0;return"Daily Lead"==e&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyActualTotalLead,a.dailyTargetTotalLead)),"Appointments (Phone)"==e&&0!=a.dailyTargetTotalAppointmentPhone&&(n=this.calculateDivision(a.dailyActualTotalAppointmentPhone,a.dailyTargetTotalAppointmentPhone)),"Appointments (Face to Face)"==e&&0!=a.dailyTargetTotalAppointmentFaceToFace&&(n=this.calculateDivision(a.dailyActualTotalAppointmentFaceToFace,a.dailyTargetTotalAppointmentFaceToFace)),"Appointments (Online)"==e&&0!=a.dailyTargetTotalAppointmentOnline&&(n=this.calculateDivision(a.dailyActualTotalAppointmentOnline,a.dailyTargetTotalAppointmentOnline)),"Needs (LPP & BRAM complete)"==e&&0!=a.dailyTargetTotalNeeds&&(n=this.calculateDivision(a.dailyActualTotalNeeds,a.dailyTargetTotalNeeds)),"Solutions"==e&&0!=a.dailyTargetSolutions&&(n=this.calculateDivision(a.dailyActualTotalSolutions,a.dailyTargetSolutions)),"Sales"==e&&0!=a.dailyTargetSales&&(n=this.calculateDivision(a.dailyActualTotalSales,a.dailyTargetSales)),"Referrals"==e&&(n=0),n}dailyConversionToProspect(e,a){let n=0;return"Daily Lead"==e&&(n=0),"Appointments (Phone)"==e&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalAppointmentPhone,a.dailyActualTotalLead)),"Appointments (Face to Face)"==e&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalAppointmentFaceToFace,a.dailyActualTotalLead)),"Appointments (Online)"==e&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalAppointmentOnline,a.dailyActualTotalLead)),"Needs (LPP & BRAM complete)"==e&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalNeeds,a.dailyActualTotalLead)),"Solutions"==e&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalSolutions,a.dailyActualTotalLead)),"Sales"==e&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalSales,a.dailyActualTotalLead)),"Referrals"==e&&(n=0),n}dailyConversionToPreviousStage(e,a){let n=0;return"Daily Lead"==e&&(n=0),"Appointments (Phone)"==e&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalAppointmentPhone,a.dailyActualTotalLead)),"Appointments (Face to Face)"==e&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalAppointmentFaceToFace,a.dailyActualTotalLead)),"Appointments (Online)"==e&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalAppointmentOnline,a.dailyActualTotalLead)),"Needs (LPP & BRAM complete)"==e&&0!=a.dailyActualTotalAppointmentOnline&&(n=this.calculateDivision(a.dailyActualTotalNeeds,a.dailyActualTotalAppointmentOnline)),"Solutions"==e&&0!=a.dailyActualTotalNeeds&&(n=this.calculateDivision(a.dailyActualTotalSolutions,a.dailyActualTotalNeeds)),"Sales"==e&&0!=a.dailyActualTotalSolutions&&(n=this.calculateDivision(a.dailyActualTotalSales,a.dailyActualTotalSolutions)),"Referrals"==e&&(n=0),n}dailyExpectedTargetConversion(e,a){let n=0;return"Daily Lead"==e&&(n=0),"Appointments (Phone)"==e&&0!=a.dailyTargetTotalAppointment&&(n=this.calculateDivision(a.dailyTargetTotalAppointmentPhone,a.dailyTargetTotalLead)),"Appointments (Face to Face)"==e&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyTargetTotalAppointmentFaceToFace,a.dailyTargetTotalLead)),"Appointments (Online)"==e&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyTargetTotalAppointmentOnline,a.dailyTargetTotalLead)),"Needs (LPP & BRAM complete)"==e&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyTargetTotalNeeds,a.dailyTargetTotalLead)),"Solutions"==e&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyTargetSolutions,a.dailyTargetTotalLead)),"Sales"==e&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyTargetSales,a.dailyTargetTotalLead)),"Referrals"==e&&(n=0),n}dailyExpectedTargetConversionToProspects(e,a){let n=0;return"Daily Lead"==e&&(n=0),"Appointments (Phone)"==e&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyTargetTotalAppointmentPhone,a.dailyTargetTotalLead)),"Appointments (Face to Face)"==e&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyTargetTotalAppointmentFaceToFace,a.dailyTargetTotalLead)),"Appointments (Online)"==e&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyActualTotalAppointmentOnline,a.dailyTargetTotalLead)),"Needs (LPP & BRAM complete)"==e&&0!=a.dailyActualTotalAppointmentOnline&&(n=this.calculateDivision(a.dailyTargetTotalNeeds,a.dailyActualTotalAppointmentOnline)),"Solutions"==e&&0!=a.dailyTargetTotalNeeds&&(n=this.calculateDivision(a.dailyTargetSolutions,a.dailyTargetTotalNeeds)),"Sales"==e&&0!=a.dailyTargetSolutions&&(n=this.calculateDivision(a.dailyTargetSales,a.dailyTargetSolutions)),"Referrals"==e&&(n=0),n}calculateDivision(e,a){let n;return n=0!=a?e/a:0,n}generateReportExcel(){this.dataExcel=[],this.productValues=["Agent Name","Branch Name","Activities","Daily Actual against Target","Daily Conversion to Prospect","Daily Conversion to Previous Stage","Daily Expected Target Conversion","Daily Expected Target Conversion to Prospects"];for(var e=0;e<this.displayList.length;e++)this.dataExcel.push([this.displayList[e].agentName,this.displayList[e].branchName,this.displayList[e].activityName,this.displayList[e].dailyActualAgainstTarge||0,this.displayList[e].dailyConversionToProspect||0,this.displayList[e].dailyConversionToPreviousStage||0,this.displayList[e].dailyExpectedTargetConversion||0,this.displayList[e].dailyExpectedTargetConversionToProspects||0]);let a=null,n=null;this.createFormGroup.value.fromDate&&(a=this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)),this.createFormGroup.value.fromDate&&(n=this.formatDateDDMMYYY(this.createFormGroup.value.toDate)),this.exportService.exportExcel({title:this.title,searchValue:[{fromDate:a},{toDate:n},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],productsHeader:this.productValues,data:this.dataExcel})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.displayList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.fromMinDate=null,this.fromMaxDate=null,this.cdf.detectChanges()}changeOptions(e,a){return(0,f.mG)(this,void 0,void 0,function*(){"company"==a&&(e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.channels=n)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==a&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"02").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.channels=n)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==a&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.channelName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"03").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.regions=n)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==a&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.regionName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"04").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.cluster=n)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==a&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.clusterName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"05").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.branches=n)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==a&&(this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),e?(this.branchName=e.name,yield this.exportService.getAgentOffice(e.id).toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.agents=n)}))):(this.branchName=null,this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"office"==a&&(e?this.agentName=e.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new d.cw({fromDate:new d.NI("",[d.kI.required,d.kI.nullValidator]),toDate:new d.NI("",[d.kI.required,d.kI.nullValidator]),agentId:new d.NI(""),companyId:new d.NI(""),channelId:new d.NI(""),regionId:new d.NI(""),clusterId:new d.NI(""),branchId:new d.NI("")})}isControlValid(e){const a=this.createFormGroup.controls[e];return a.valid&&(a.dirty||a.touched)}isControlInvalid(e){const a=this.createFormGroup.controls[e];return a.invalid&&(a.dirty||a.touched)}controlHasError(e,a){const n=this.createFormGroup.controls[a];return n.hasError(e)&&(n.dirty||n.touched)}isControlTouched(e){const a=this.createFormGroup.controls[e];return a.dirty||a.touched}doValid(e){if("FromDate"==e){if(this.createFormGroup.controls.fromDate.value){let g=I(this.createFormGroup.controls.fromDate.value).add(0,"years");this.toMaxDate={year:parseInt(g.format("YYYY")),month:parseInt(g.format("M")),day:parseInt(g.format("D"))},this.createFormGroup.controls.fromDate.setValue(g.format("YYYY-MM-DD"))}var a=new Date(this.createFormGroup.value.fromDate);a.setFullYear(a.getFullYear()+1),a.setDate(a.getDate()-1),this.fromMinDate=this.createFormGroup.value.fromDate,this.fromMaxDate=a;let h=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=h&&1!=h&&this.createFormGroup.controls.toDate.setValue("")}if("ToDate"==e){if(this.createFormGroup.controls.toDate.value){let g=I(this.createFormGroup.controls.toDate.value).add(0,"years");this.toMaxDate={year:parseInt(g.format("YYYY")),month:parseInt(g.format("M")),day:parseInt(g.format("D"))},this.createFormGroup.controls.toDate.setValue(g.format("YYYY-MM-DD"))}var n=new Date(this.createFormGroup.value.toDate);n.setFullYear(n.getFullYear()-1),n.setDate(n.getDate()+1),this.fromMinDate=n,this.createFormGroup.value.toDate||(this.fromMaxDate=this.createFormGroup.value.toDate);let h=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=h&&1!=h&&this.createFormGroup.controls.fromDate.setValue(""),1==h&&(new Date(this.createFormGroup.value.toDate).getMonth()>new Date(this.createFormGroup.value.fromDate).getMonth()&&this.createFormGroup.controls.fromDate.setValue(""),new Date(this.createFormGroup.value.toDate).getMonth()==new Date(this.createFormGroup.value.fromDate).getMonth()&&new Date(this.createFormGroup.value.toDate).getDate()>=new Date(this.createFormGroup.value.fromDate).getDate()&&this.createFormGroup.controls.fromDate.setValue(""))}this.cdf.detectChanges()}clearDate(e){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==e&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==e&&this.createFormGroup.controls.toDate.setValue(""),this.isData=!1,this.productList=[],this.reports=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(e){var a=new Date(e),n=""+(a.getMonth()+1),i=""+a.getDate(),h=a.getFullYear();return n.length<2&&(n="0"+n),i.length<2&&(i="0"+i),[i,n,h].join("/")}mathRoundTo(e,a){const n=Math.pow(10,a);return(Math.round(e*n)/n).toLocaleString()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.sBO),t.Y36(V))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-report-daily-sales-analysis-by-branch"]],decls:46,vars:15,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","regionId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","clusterId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","branchId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","agentName","bindValue","agentId","formControlName","agentId",1,"ng-custom-select",3,"readonly","items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"date-display"],[1,"search-display"],[2,"width","100%","overflow-y","scroll","overflow-x","scroll","max-height","500px"],["border","1"],[4,"ngFor","ngForOf"],[1,"text-left"],[1,"text-right"],[2,"color","gray","text-align","center"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"Daily Sales Analysis by Branch"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return a.getAllReports()}),t._UZ(9,"span",8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return a.generateReportExcel()}),t.TgZ(11,"span",10),t._uU(12,"Generate"),t.qZA(),t.qZA(),t.TgZ(13,"button",7),t.NdJ("click",function(){return a.cancelReport()}),t.TgZ(14,"span",10),t._uU(15,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"form",12),t.TgZ(18,"div",13),t.TgZ(19,"div",14),t.TgZ(20,"div",15),t.TgZ(21,"label",16),t._uU(22,"From Date"),t.qZA(),t.TgZ(23,"div",17),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return a.doValid("FromDate")}),t.qZA(),t._UZ(25,"mat-datepicker-toggle",19),t._UZ(26,"mat-datepicker",20,21),t.qZA(),t.TgZ(28,"button",22),t.NdJ("click",function(){return a.clearDate("FromDate")}),t._uU(29,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",14),t.TgZ(31,"div",15),t.TgZ(32,"label",16),t._uU(33,"To Date"),t.qZA(),t.TgZ(34,"div",17),t.TgZ(35,"input",23),t.NdJ("dateChange",function(){return a.doValid("ToDate")}),t.qZA(),t._UZ(36,"mat-datepicker-toggle",19),t._UZ(37,"mat-datepicker",20,24),t.qZA(),t.TgZ(39,"button",22),t.NdJ("click",function(){return a.clearDate("ToDate")}),t._uU(40,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(41,Q,8,3,"div",25),t.YNc(42,H,13,4,"div",25),t.YNc(43,k,13,4,"div",25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(44,ct,37,10,"div",26),t.YNc(45,dt,2,0,"div",27)),2&e){const n=t.MAs(27),i=t.MAs(38);t.xp6(10),t.Q6J("disabled",!a.isData),t.xp6(7),t.Q6J("formGroup",a.createFormGroup),t.xp6(7),t.Q6J("min",a.fromMinDate)("max",a.fromMaxDate)("matDatepicker",n),t.xp6(1),t.Q6J("for",n),t.xp6(10),t.Q6J("min",a.fromMinDate)("max",a.fromMaxDate)("matDatepicker",i),t.xp6(1),t.Q6J("for",i),t.xp6(5),t.Q6J("ngIf",""!=a.createFormGroup.value.fromDate&&""!=a.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=a.createFormGroup.value.fromDate&&""!=a.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=a.createFormGroup.value.fromDate&&""!=a.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",a.isData),t.xp6(1),t.Q6J("ngIf",!a.isData)}},directives:[d._Y,d.JL,d.sg,d.Fj,_.hl,d.JJ,d.u,_.nW,N.R9,_.Mq,A.O5,M.w9,A.sg],pipes:[A.JJ],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0 .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border-collapse:unset}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;position:relative;border-collapse:unset}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.date-display[_ngcontent-%COMP%]{width:100%;overflow:hidden}.date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;min-width:135px;float:left;display:block}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#000;transform:rotate(0);position:absolute;top:0;left:49%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:end;padding:0 5px 0 0}"]}),o})();var ut=l(29018),ht=l(45598),mt=l(87626),gt=l(85378),ft=l(75396),Z=l(44290),yt=l(57730),vt=l(92118),At=l(47975);let Tt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[A.uU,{provide:Z._A,useClass:vt.t7,deps:[Z.Ad]},{provide:Z.sG,useValue:At.Gs}],imports:[[A.ez,d.u5,M.A0,d.UX,mt.vi,ht.fA,gt.M,ft.X,_.FA,Z.XK,yt.c,N.lN,ut.Bz.forChild([{path:"",component:pt}])]]}),o})()}}]);