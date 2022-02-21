"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[695],{60695:(he,x,r)=>{r.r(x),r.d(x,{ReportDailySalesAnalysisByBranchModule:()=>ue});var D=r(86019),h=r(64762),c=r(49133),I=r(53489),e=r(83668),A=r(44522),G=r(11901),S=r(62473),P=r(91691),_=r(18260);const Z=`${_.N.apiUrl}/report/dailySalesAnalysis`,M=`${_.N.apiUrl}/officeHirearchy`,L=`${_.N.apiUrl}/agentByOffice`,T=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let q=(()=>{class i extends P.i{constructor(t){super(t,Z),this.httpClient=t}getOfficeHirearchy(t,a){const o=new A.LE({fromObject:{parentId:t,typeCode:a}});return this.httpClient.get(M,{params:o})}getAgentOffice(t){const n=new A.LE({fromObject:{officeId:t}});return this.httpClient.get(L,{params:n})}getAllReportData(t){t.fromDate&&(t.fromDate=this.formatDateYYYY_MM_DD(t.fromDate)),t.toDate&&(t.toDate=this.formatDateYYYY_MM_DD(t.toDate));const a=new A.LE({fromObject:t});return this.httpClient.get(Z,{params:a})}getAllAboutBRAM(t){return this.httpClient.get(Z+"/"+t+"/asset")}formatDateYYYY_MM_DD(t){var a=new Date(t),n=""+(a.getMonth()+1),o=""+a.getDate(),m=a.getFullYear();return n.length<2&&(n="0"+n),o.length<2&&(o="0"+o),[m,n,o].join("-")}exportExcel(t){const a=t.title,n=t.searchValue,o=t.productsHeader,m=t.data;let B=new G.Workbook,g=B.addWorksheet("Sheet1");g.views=[{state:"frozen",xSplit:0,ySplit:4,activeCell:"A1"}],g.mergeCells("A1","B2");let C=g.getCell("A1");if(C.value=a,C.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},C.alignment={vertical:"middle",horizontal:"left"},n.length>0)for(var s=0;s<n.length;s++){let p=null,u=null;if(n[s].fromDate&&(p="F1",u="From Date: "+n[s].fromDate),n[s].toDate&&(p="F2",u="To Date: "+n[s].toDate),n[s].companyName&&(p="L1",u="Company: "+n[s].companyName),n[s].channelName&&(p="M1",u="Channel: "+n[s].channelName),n[s].regionName&&(p="N1",u="Region: "+n[s].regionName),n[s].clusterName&&(p="L2",u="Cluster: "+n[s].clusterName),n[s].branchName&&(p="M2",u="Branch: "+n[s].branchName),n[s].agentName&&(p="N2",u="Agent: "+n[s].agentName),null!=p&&null!=u){let d=g.getCell(p);d.value=u,d.font={name:"Calibri",size:10,bold:!0},d.alignment={vertical:"middle",horizontal:"left"}}}g.addRow([]);let N=0;for(s=0;s<o.length;s++){let u=this.calculateStartPoint(N);N+=1;let d=g.getCell(u);d.value=o[s],d.font={name:"Calibri",size:12,bold:!0},d.alignment={vertical:"middle",horizontal:"center"}}m.forEach(p=>{let u=g.addRow(p),d=0;p.forEach(y=>{d++;let f=u.getCell(d);1==d||2==d||3==d?f&&(f.alignment={vertical:"middle",horizontal:"left"}):f.alignment={vertical:"middle",horizontal:"right"}})}),g.columns.forEach(function(p,u){var d=0;p.eachCell({includeEmpty:!0},function(y){var f=y.value?y.value.toString().length:10;f>d&&(d=f)}),p.width=d<10?10:d}),g.getColumn(1).width=25,B.xlsx.writeBuffer().then(p=>{let u=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});S.saveAs(u,a+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateStartPoint(t){return T[t]+"4"}calculateEndPoint(t){return T[t]+"4"}calculateDataPoint(t){return T[t]+"5"}calculatePremiumDataPoint(t){return T[t]+"6"}formatDateDDMMYYY(t){var a=new Date(t),n=""+(a.getMonth()+1),o=""+a.getDate(),m=a.getFullYear();return n.length<2&&(n="0"+n),o.length<2&&(o="0"+o),[o,n,m].join("_")}mathRoundTo(t,a){const n=Math.pow(10,a);return(Math.round(t*n)/n).toLocaleString()}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(A.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var v=r(78480),F=r(86031),O=r(57842);function R(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",29),e.TgZ(1,"div",15),e.TgZ(2,"label",16),e._uU(3,"Company"),e.qZA(),e.TgZ(4,"div",30),e.TgZ(5,"ng-select",32),e.NdJ("change",function(n){return e.CHM(t),e.oxw(2).changeOptions(n,"channel")}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=e.oxw(2);e.xp6(5),e.Q6J("items",t.selectOptions.companies)}}function Y(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",13),e.YNc(1,R,6,1,"div",28),e.TgZ(2,"div",29),e.TgZ(3,"div",15),e.TgZ(4,"label",16),e._uU(5,"Channel"),e.qZA(),e.TgZ(6,"div",30),e.TgZ(7,"ng-select",31),e.NdJ("change",function(n){return e.CHM(t),e.oxw().changeOptions(n,"region")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",""!=t.createFormGroup.value.fromDate&&""!=t.createFormGroup.value.toDate),e.xp6(6),e.Q6J("readonly",0==t.selectOptions.channels.length)("items",t.selectOptions.channels)}}function w(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",13),e.TgZ(1,"div",29),e.TgZ(2,"div",15),e.TgZ(3,"label",16),e._uU(4,"Region"),e.qZA(),e.TgZ(5,"div",30),e.TgZ(6,"ng-select",33),e.NdJ("change",function(n){return e.CHM(t),e.oxw().changeOptions(n,"cluster")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div",29),e.TgZ(8,"div",15),e.TgZ(9,"label",16),e._uU(10,"Cluster"),e.qZA(),e.TgZ(11,"div",30),e.TgZ(12,"ng-select",34),e.NdJ("change",function(n){return e.CHM(t),e.oxw().changeOptions(n,"branch")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=e.oxw();e.xp6(6),e.Q6J("readonly",0==t.selectOptions.regions.length)("items",t.selectOptions.regions),e.xp6(6),e.Q6J("readonly",0==t.selectOptions.cluster.length)("items",t.selectOptions.cluster)}}function E(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"div",13),e.TgZ(1,"div",29),e.TgZ(2,"div",15),e.TgZ(3,"label",16),e._uU(4,"Branch"),e.qZA(),e.TgZ(5,"div",30),e.TgZ(6,"ng-select",35),e.NdJ("change",function(n){return e.CHM(t),e.oxw().changeOptions(n,"agent")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div",29),e.TgZ(8,"div",15),e.TgZ(9,"label",16),e._uU(10,"Agent Name"),e.qZA(),e.TgZ(11,"div",30),e.TgZ(12,"ng-select",36),e.NdJ("change",function(n){return e.CHM(t),e.oxw().changeOptions(n,"office")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=e.oxw();e.xp6(6),e.Q6J("readonly",0==t.selectOptions.branches.length)("items",t.selectOptions.branches),e.xp6(6),e.Q6J("readonly",0==t.selectOptions.agents.length)("items",t.selectOptions.agents)}}function U(i,l){1&i&&e._UZ(0,"br")}function b(i,l){1&i&&e._UZ(0,"br")}function J(i,l){1&i&&e._UZ(0,"br")}function V(i,l){1&i&&e._UZ(0,"br")}function Q(i,l){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.hij("From Date: ",t.formatDateDDMMYYY(t.createFormGroup.value.fromDate)," ")}}function H(i,l){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.hij("To Date: ",t.formatDateDDMMYYY(t.createFormGroup.value.toDate),"")}}function k(i,l){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.hij("Company: ",t.companyName," ")}}function z(i,l){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.hij("Channel: ",t.channelName," ")}}function X(i,l){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.hij("Region: ",t.regionName," ")}}function W(i,l){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,k,2,1,"span",39),e.YNc(2,z,2,1,"span",39),e.YNc(3,X,2,1,"span",39),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.companyId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.channelId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.regionId)}}function K(i,l){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.hij("Cluster: ",t.clusterName," ")}}function $(i,l){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.hij("Branch: ",t.branchName,"")}}function j(i,l){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.hij("Agent: ",t.agentName," ")}}function ee(i,l){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,K,2,1,"span",39),e.YNc(2,$,2,1,"span",39),e.YNc(3,j,2,1,"span",39),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.clusterId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.branchId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.agentId)}}function te(i,l){if(1&i&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.qZA()),2&i){const t=l.$implicit;e.xp6(2),e.Oqu(t.agentName),e.xp6(2),e.Oqu(t.branchName),e.xp6(2),e.Oqu(t.activityName),e.xp6(2),e.Oqu(t.dailyActualAgainstTarge),e.xp6(2),e.Oqu(t.dailyConversionToProspect),e.xp6(2),e.Oqu(t.dailyConversionToPreviousStage),e.xp6(2),e.Oqu(t.dailyExpectedTargetConversion),e.xp6(2),e.Oqu(t.dailyExpectedTargetConversionToProspects)}}function ae(i,l){if(1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",37),e.TgZ(3,"div",38),e.YNc(4,U,1,0,"br",39),e.YNc(5,b,1,0,"br",39),e.TgZ(6,"h3",40),e._uU(7),e.qZA(),e.qZA(),e.TgZ(8,"div",38),e.YNc(9,J,1,0,"br",39),e.YNc(10,V,1,0,"br",39),e.TgZ(11,"div"),e.YNc(12,Q,2,1,"span",39),e._uU(13," \xa0 \xa0 \xa0 \xa0 \xa0 "),e.YNc(14,H,2,1,"span",39),e.qZA(),e.qZA(),e.TgZ(15,"div",41),e.YNc(16,W,4,3,"div",39),e.YNc(17,ee,4,3,"div",39),e.qZA(),e.qZA(),e.TgZ(18,"div",42),e.TgZ(19,"table",43),e.TgZ(20,"tr"),e.TgZ(21,"th"),e._uU(22,"Agent Name"),e.qZA(),e.TgZ(23,"th"),e._uU(24,"Branch Name"),e.qZA(),e.TgZ(25,"th"),e._uU(26,"Activities"),e.qZA(),e.TgZ(27,"th"),e._uU(28,"Daily Actual against Target"),e.qZA(),e.TgZ(29,"th"),e._uU(30,"Daily Conversion to Prospect"),e.qZA(),e.TgZ(31,"th"),e._uU(32,"Daily Conversion to Previous Stage"),e.qZA(),e.TgZ(33,"th"),e._uU(34,"Daily Expected Target Conversion"),e.qZA(),e.TgZ(35,"th"),e._uU(36,"Daily Expected Target Conversion to Prospects"),e.qZA(),e.qZA(),e.YNc(37,te,17,8,"tr",44),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngIf",t.createFormGroup.value.companyId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.clusterId),e.xp6(2),e.Oqu(t.title),e.xp6(2),e.Q6J("ngIf",t.createFormGroup.value.companyId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.clusterId),e.xp6(2),e.Q6J("ngIf",t.createFormGroup.value.fromDate),e.xp6(2),e.Q6J("ngIf",t.createFormGroup.value.toDate),e.xp6(2),e.Q6J("ngIf",""!=t.createFormGroup.value.companyId||""!=t.createFormGroup.value.channelId||""!=t.createFormGroup.value.regionId),e.xp6(1),e.Q6J("ngIf",""!=t.createFormGroup.value.clusterId||""!=t.createFormGroup.value.branchId||""!=t.createFormGroup.value.agentId),e.xp6(20),e.Q6J("ngForOf",t.displayList)}}function ne(i,l){1&i&&(e.TgZ(0,"div",45),e._uU(1," There is no data "),e.qZA())}let ie=(()=>{class i{constructor(t,a){this.cdf=t,this.exportService=a,this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.productValues=[],this.subHeader=[],this.dataExcel=[],this.isData=!1,this.displayList=[],this.title="Daily Sales Analysis Report"}ngOnInit(){this.loadForm(),this.getOfficeHirearchy()}getOfficeHirearchy(){return(0,h.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(t=>(0,h.mG)(this,void 0,void 0,function*(){t&&(this.selectOptions.companies=t)}))})}getAllReports(){return(0,h.mG)(this,void 0,void 0,function*(){this.displayList=[];let t=[{activityName:"Daily Lead"},{activityName:"Appointments (Phone)"},{activityName:"Appointments (Face to Face)"},{activityName:"Appointments (Online)"},{activityName:"Needs (LPP & BRAM complete)"},{activityName:"Solutions"},{activityName:"Sales"},{activityName:"Referrals"}];this.createFormGroup.invalid?(0,I.w)(this.createFormGroup):yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(a=>(0,h.mG)(this,void 0,void 0,function*(){if(console.log("dailySalesAnalysis",a),a.dailydataList.length>0){this.isData=!0;for(var n=0;n<a.dailydataList.length;n++)for(var o=0;o<t.length;o++){let m={agentName:a.dailydataList[n].agentName,branchName:a.dailydataList[n].branchName,activityName:t[o].activityName,dailyActualAgainstTarge:this.dailyActualAgainstTarge(t[o].activityName,a.dailydataList[n]),dailyConversionToProspect:this.dailyConversionToProspect(t[o].activityName,a.dailydataList[n]),dailyConversionToPreviousStage:this.dailyConversionToPreviousStage(t[o].activityName,a.dailydataList[n]),dailyExpectedTargetConversion:this.dailyExpectedTargetConversion(t[o].activityName,a.dailydataList[n]),dailyExpectedTargetConversionToProspects:this.dailyExpectedTargetConversionToProspects(t[o].activityName,a.dailydataList[n])};this.displayList.push(m)}}else this.isData=!1})),this.cdf.detectChanges()})}dailyActualAgainstTarge(t,a){let n=0;return"Daily Lead"==t&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyActualTotalLead,a.dailyTargetTotalLead)),"Appointments (Phone)"==t&&0!=a.dailyTargetTotalAppointmentPhone&&(n=this.calculateDivision(a.dailyActualTotalAppointmentPhone,a.dailyTargetTotalAppointmentPhone)),"Appointments (Face to Face)"==t&&0!=a.dailyTargetTotalAppointmentFaceToFace&&(n=this.calculateDivision(a.dailyActualTotalAppointmentFaceToFace,a.dailyTargetTotalAppointmentFaceToFace)),"Appointments (Online)"==t&&0!=a.dailyTargetTotalAppointmentOnline&&(n=this.calculateDivision(a.dailyActualTotalAppointmentOnline,a.dailyTargetTotalAppointmentOnline)),"Needs (LPP & BRAM complete)"==t&&0!=a.dailyTargetTotalNeeds&&(n=this.calculateDivision(a.dailyActualTotalNeeds,a.dailyTargetTotalNeeds)),"Solutions"==t&&0!=a.dailyTargetSolutions&&(n=this.calculateDivision(a.dailyActualTotalSolutions,a.dailyTargetSolutions)),"Sales"==t&&0!=a.dailyTargetSales&&(n=this.calculateDivision(a.dailyActualTotalSales,a.dailyTargetSales)),"Referrals"==t&&(n=0),n}dailyConversionToProspect(t,a){let n=0;return"Daily Lead"==t&&(n=0),"Appointments (Phone)"==t&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalAppointmentPhone,a.dailyActualTotalLead)),"Appointments (Face to Face)"==t&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalAppointmentFaceToFace,a.dailyActualTotalLead)),"Appointments (Online)"==t&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalAppointmentOnline,a.dailyActualTotalLead)),"Needs (LPP & BRAM complete)"==t&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalNeeds,a.dailyActualTotalLead)),"Solutions"==t&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalSolutions,a.dailyActualTotalLead)),"Sales"==t&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalSales,a.dailyActualTotalLead)),"Referrals"==t&&(n=0),n}dailyConversionToPreviousStage(t,a){let n=0;return"Daily Lead"==t&&(n=0),"Appointments (Phone)"==t&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalAppointmentPhone,a.dailyActualTotalLead)),"Appointments (Face to Face)"==t&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalAppointmentFaceToFace,a.dailyActualTotalLead)),"Appointments (Online)"==t&&0!=a.dailyActualTotalLead&&(n=this.calculateDivision(a.dailyActualTotalAppointmentOnline,a.dailyActualTotalLead)),"Needs (LPP & BRAM complete)"==t&&0!=a.dailyActualTotalAppointmentOnline&&(n=this.calculateDivision(a.dailyActualTotalNeeds,a.dailyActualTotalAppointmentOnline)),"Solutions"==t&&0!=a.dailyActualTotalNeeds&&(n=this.calculateDivision(a.dailyActualTotalSolutions,a.dailyActualTotalNeeds)),"Sales"==t&&0!=a.dailyActualTotalSolutions&&(n=this.calculateDivision(a.dailyActualTotalSales,a.dailyActualTotalSolutions)),"Referrals"==t&&(n=0),n}dailyExpectedTargetConversion(t,a){let n=0;return"Daily Lead"==t&&(n=0),"Appointments (Phone)"==t&&0!=a.dailyTargetTotalAppointment&&(n=this.calculateDivision(a.dailyTargetTotalAppointmentPhone,a.dailyTargetTotalLead)),"Appointments (Face to Face)"==t&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyTargetTotalAppointmentFaceToFace,a.dailyTargetTotalLead)),"Appointments (Online)"==t&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyTargetTotalAppointmentOnline,a.dailyTargetTotalLead)),"Needs (LPP & BRAM complete)"==t&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyTargetTotalNeeds,a.dailyTargetTotalLead)),"Solutions"==t&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyTargetSolutions,a.dailyTargetTotalLead)),"Sales"==t&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyTargetSales,a.dailyTargetTotalLead)),"Referrals"==t&&(n=0),n}dailyExpectedTargetConversionToProspects(t,a){let n=0;return"Daily Lead"==t&&(n=0),"Appointments (Phone)"==t&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyTargetTotalAppointmentPhone,a.dailyTargetTotalLead)),"Appointments (Face to Face)"==t&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyTargetTotalAppointmentFaceToFace,a.dailyTargetTotalLead)),"Appointments (Online)"==t&&0!=a.dailyTargetTotalLead&&(n=this.calculateDivision(a.dailyActualTotalAppointmentOnline,a.dailyTargetTotalLead)),"Needs (LPP & BRAM complete)"==t&&0!=a.dailyActualTotalAppointmentOnline&&(n=this.calculateDivision(a.dailyTargetTotalNeeds,a.dailyActualTotalAppointmentOnline)),"Solutions"==t&&0!=a.dailyTargetTotalNeeds&&(n=this.calculateDivision(a.dailyTargetSolutions,a.dailyTargetTotalNeeds)),"Sales"==t&&0!=a.dailyTargetSolutions&&(n=this.calculateDivision(a.dailyTargetSales,a.dailyTargetSolutions)),"Referrals"==t&&(n=0),n}calculateDivision(t,a){let n;return n=0!=a?this.mathRoundTo(t/a,2):0,n}generateReportExcel(){this.dataExcel=[],console.log("generateReportExcel ",this.reports),this.productValues=["Agent Name","Branch Name","Activities","Daily Actual against Target","Daily Conversion to Prospect","Daily Conversion to Previous Stage","Daily Expected Target Conversion","Daily Expected Target Conversion to Prospects"];for(var t=0;t<this.displayList.length;t++)this.dataExcel.push([this.displayList[t].agentName,this.displayList[t].branchName,this.displayList[t].activityName,this.displayList[t].dailyActualAgainstTarge,this.displayList[t].dailyConversionToProspect,this.displayList[t].dailyConversionToPreviousStage,this.displayList[t].dailyExpectedTargetConversion,this.displayList[t].dailyExpectedTargetConversionToProspects]);let a=null,n=null;this.createFormGroup.value.fromDate&&(a=this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)),this.createFormGroup.value.fromDate&&(n=this.formatDateDDMMYYY(this.createFormGroup.value.toDate)),this.exportService.exportExcel({title:this.title,searchValue:[{fromDate:a},{toDate:n},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],productsHeader:this.productValues,data:this.dataExcel})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.displayList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.cdf.detectChanges()}changeOptions(t,a){return(0,h.mG)(this,void 0,void 0,function*(){"company"==a&&(t?(this.companyName=t.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(n=>(0,h.mG)(this,void 0,void 0,function*(){console.log("officeHirearchy",n),n&&(this.selectOptions.channels=n)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==a&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),t?(this.companyName=t.name,yield this.exportService.getOfficeHirearchy(t.id,"02").toPromise().then(n=>(0,h.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.channels=n)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==a&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),t?(this.channelName=t.name,yield this.exportService.getOfficeHirearchy(t.id,"03").toPromise().then(n=>(0,h.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.regions=n)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==a&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),t?(this.regionName=t.name,yield this.exportService.getOfficeHirearchy(t.id,"04").toPromise().then(n=>(0,h.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.cluster=n)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==a&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),t?(this.clusterName=t.name,yield this.exportService.getOfficeHirearchy(t.id,"05").toPromise().then(n=>(0,h.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.branches=n)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==a&&(t?(this.branchName=t.name,yield this.exportService.getAgentOffice(11).toPromise().then(n=>(0,h.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.agents=n)}))):(this.branchName=null,this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),console.log("type",a),console.log("ev",t),"office"==a&&(t?this.agentName=t.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new c.cw({fromDate:new c.NI("",[c.kI.required,c.kI.nullValidator]),toDate:new c.NI("",[c.kI.required,c.kI.nullValidator]),agentId:new c.NI(""),companyId:new c.NI(""),channelId:new c.NI(""),regionId:new c.NI(""),clusterId:new c.NI(""),branchId:new c.NI("")})}isControlValid(t){const a=this.createFormGroup.controls[t];return a.valid&&(a.dirty||a.touched)}isControlInvalid(t){const a=this.createFormGroup.controls[t];return a.invalid&&(a.dirty||a.touched)}controlHasError(t,a){const n=this.createFormGroup.controls[a];return n.hasError(t)&&(n.dirty||n.touched)}isControlTouched(t){const a=this.createFormGroup.controls[t];return a.dirty||a.touched}doValid(t){if(console.log("doValid",t),"FromDate"==t){this.fromMinDate=new Date(this.createFormGroup.value.fromDate),this.fromMaxDate=new Date((new Date).setFullYear(new Date(this.fromMinDate).getFullYear()+1));let a=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=a&&1!=a&&this.createFormGroup.controls.toDate.setValue("")}if("ToDate"==t){this.fromMaxDate=new Date(this.createFormGroup.value.toDate),this.fromMinDate=new Date((new Date).setFullYear(new Date(this.fromMaxDate).getFullYear()-1));let a=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=a&&1!=a&&this.createFormGroup.controls.fromDate.setValue("")}this.cdf.detectChanges()}clearDate(t){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==t&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==t&&this.createFormGroup.controls.toDate.setValue(""),this.isData=!1,this.productList=[],this.reports=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(t){var a=new Date(t),n=""+(a.getMonth()+1),o=""+a.getDate(),m=a.getFullYear();return n.length<2&&(n="0"+n),o.length<2&&(o="0"+o),[o,n,m].join("/")}mathRoundTo(t,a){const n=Math.pow(10,a);return(Math.round(t*n)/n).toLocaleString()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.sBO),e.Y36(q))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-report-daily-sales-analysis-by-branch"]],decls:46,vars:15,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","regionId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","clusterId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","branchId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","agentName","bindValue","agentId","formControlName","agentId",1,"ng-custom-select",3,"readonly","items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"search-display"],[2,"width","100%","overflow-y","hidden","overflow-x","scroll"],["border","1"],[4,"ngFor","ngForOf"],[2,"color","gray","text-align","center"]],template:function(t,a){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"h3",5),e._uU(6,"Daily Sales Analysis by Branch"),e.qZA(),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"button",7),e.NdJ("click",function(){return a.getAllReports()}),e._UZ(9,"span",8),e.qZA(),e.TgZ(10,"button",9),e.NdJ("click",function(){return a.generateReportExcel()}),e.TgZ(11,"span",10),e._uU(12,"Generate"),e.qZA(),e.qZA(),e.TgZ(13,"button",7),e.NdJ("click",function(){return a.cancelReport()}),e.TgZ(14,"span",10),e._uU(15,"Cancel"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div",11),e.TgZ(17,"form",12),e.TgZ(18,"div",13),e.TgZ(19,"div",14),e.TgZ(20,"div",15),e.TgZ(21,"label",16),e._uU(22,"From Date"),e.qZA(),e.TgZ(23,"div",17),e.TgZ(24,"input",18),e.NdJ("dateChange",function(){return a.doValid("FromDate")}),e.qZA(),e._UZ(25,"mat-datepicker-toggle",19),e._UZ(26,"mat-datepicker",20,21),e.qZA(),e.TgZ(28,"button",22),e.NdJ("click",function(){return a.clearDate("FromDate")}),e._uU(29,"Clear"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(30,"div",14),e.TgZ(31,"div",15),e.TgZ(32,"label",16),e._uU(33,"To Date"),e.qZA(),e.TgZ(34,"div",17),e.TgZ(35,"input",23),e.NdJ("dateChange",function(){return a.doValid("ToDate")}),e.qZA(),e._UZ(36,"mat-datepicker-toggle",19),e._UZ(37,"mat-datepicker",20,24),e.qZA(),e.TgZ(39,"button",22),e.NdJ("click",function(){return a.clearDate("ToDate")}),e._uU(40,"Clear"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(41,Y,8,3,"div",25),e.YNc(42,w,13,4,"div",25),e.YNc(43,E,13,4,"div",25),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(44,ae,38,10,"div",26),e.YNc(45,ne,2,0,"div",27)),2&t){const n=e.MAs(27),o=e.MAs(38);e.xp6(10),e.Q6J("disabled",!a.isData),e.xp6(7),e.Q6J("formGroup",a.createFormGroup),e.xp6(7),e.Q6J("min",a.fromMinDate)("max",a.fromMaxDate)("matDatepicker",n),e.xp6(1),e.Q6J("for",n),e.xp6(10),e.Q6J("min",a.fromMinDate)("max",a.fromMaxDate)("matDatepicker",o),e.xp6(1),e.Q6J("for",o),e.xp6(5),e.Q6J("ngIf",""!=a.createFormGroup.value.fromDate&&""!=a.createFormGroup.value.toDate),e.xp6(1),e.Q6J("ngIf",""!=a.createFormGroup.value.fromDate&&""!=a.createFormGroup.value.toDate),e.xp6(1),e.Q6J("ngIf",""!=a.createFormGroup.value.fromDate&&""!=a.createFormGroup.value.toDate),e.xp6(1),e.Q6J("ngIf",a.isData),e.xp6(1),e.Q6J("ngIf",!a.isData)}},directives:[c._Y,c.JL,c.sg,c.Fj,v.hl,c.JJ,c.u,v.nW,F.R9,v.Mq,D.O5,O.w9,D.sg],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0 .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border-collapse:unset}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;position:relative;border-collapse:unset}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#000;transform:rotate(0);position:absolute;top:0;left:49%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}"]}),i})();var oe=r(29018),le=r(45598),re=r(87626),se=r(85378),ce=r(75396),de=r(44290),pe=r(57730);let ue=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[D.ez,c.u5,O.A0,c.UX,re.vi,le.fA,se.M,ce.X,v.FA,de.XK,pe.c,F.lN,oe.Bz.forChild([{path:"",component:ie}])]]}),i})()}}]);