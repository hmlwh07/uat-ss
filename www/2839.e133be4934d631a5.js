"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2839],{12839:(De,O,r)=>{r.r(O),r.d(O,{ReportWeeklySalesAnalysisByBranchModule:()=>Ae});var v=r(86019),f=r(64762),p=r(49133),G=r(92070),M=r(53489),e=r(83668),A=r(44522),S=r(11901),P=r(62473),L=r(91691),w=r(18260),Y=r(67198),R=r(71704),q=r(49875);const k=`${w.N.apiUrl}/report/weeklySalesAnalysis`,E=`${w.N.apiUrl}/officeHirearchy`,W=`${w.N.apiUrl}/agentByOffice`,D=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let b=(()=>{class o extends L.i{constructor(t,a,n,l){super(t,k),this.httpClient=t,this.authService=a,this.platform=n,this.attachmentDownloadService=l}getOfficeHirearchy(t,a){const l=new A.LE({fromObject:{parentId:t,typeCode:a}});return this.httpClient.get(E,{params:l})}getAgentOffice(t){const n=new A.LE({fromObject:{officeId:t}});return this.httpClient.get(W,{params:n})}getAllReportData(t){t.fromDate&&(t.fromDate=this.formatDateYYYY_MM_DD(t.fromDate)),t.toDate&&(t.toDate=this.formatDateYYYY_MM_DD(t.toDate));const a=new A.LE({fromObject:t});return this.httpClient.get(k,{params:a})}getAllAboutBRAM(t){return this.httpClient.get(k+"/"+t+"/asset")}formatDateYYYY_MM_DD(t){var a=new Date(t),n=""+(a.getMonth()+1),l=""+a.getDate(),m=a.getFullYear();return n.length<2&&(n="0"+n),l.length<2&&(l="0"+l),[m,n,l].join("-")}exportExcel(t){const a=t.title,n=t.searchValue,l=t.productsHeader,m=t.data;let g=new S.Workbook,d=g.addWorksheet("Sheet1");d.views=[{state:"frozen",xSplit:0,ySplit:4,activeCell:"A1"}],d.mergeCells("A1","B2");let C=d.getCell("A1");C.value=a,C.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},C.alignment={vertical:"middle",horizontal:"left"},d.mergeCells("G1","G1");let x=d.getCell("G1");x.value="Reported Date: "+this.formatReportedDate(new Date),x.font={name:"Calibri",size:10,bold:!0},x.alignment={vertical:"middle",horizontal:"left"},d.mergeCells("G2","G2");let F=d.getCell("G2");if(F.value="Reported By: "+this.authService.currentUserValue.firstName+this.authService.currentUserValue.lastName,F.font={name:"Calibri",size:10,bold:!0},F.alignment={vertical:"middle",horizontal:"left"},n.length>0)for(var s=0;s<n.length;s++){let u=null,h=null;if(n[s].fromDate&&(u="F1",h="From Date: "+n[s].fromDate),n[s].toDate&&(u="F2",h="To Date: "+n[s].toDate),n[s].companyName&&(u="L1",h="Company: "+n[s].companyName),n[s].channelName&&(u="M1",h="Channel: "+n[s].channelName),n[s].regionName&&(u="N1",h="Region: "+n[s].regionName),n[s].clusterName&&(u="L2",h="Cluster: "+n[s].clusterName),n[s].branchName&&(u="M2",h="Branch: "+n[s].branchName),n[s].agentName&&(u="N2",h="Agent: "+n[s].agentName),null!=u&&null!=h){let c=d.getCell(u);c.value=h,c.font={name:"Calibri",size:10,bold:!0},c.alignment={vertical:"middle",horizontal:"left"}}}d.addRow([]);let N=0;for(s=0;s<l.length;s++){let h=this.calculateStartPoint(N);N+=1;let c=d.getCell(h);c.value=l[s],c.font={name:"Calibri",size:12,bold:!0},c.alignment={vertical:"middle",horizontal:"center"}}m.forEach(u=>{let h=d.addRow(u),c=0;u.forEach(T=>{c++;let y=h.getCell(c);1==c||2==c||3==c?y&&(y.alignment={vertical:"middle",horizontal:"left"}):y.alignment={vertical:"middle",horizontal:"right"},c>3&&(y.numFmt="#,##0.00_);(#,##0.00)")})}),d.columns.forEach(function(u,h){var c=0;u.eachCell({includeEmpty:!0},function(T){var y=T.value?T.value.toString().length:10;y>c&&(c=y)}),u.width=c<10?10:c}),d.getColumn(1).width=25,g.xlsx.writeBuffer().then(u=>{let h=new Blob([u],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});this.platform.is("android")||this.platform.is("ios")?this.attachmentDownloadService.mobileDownload(a+"_"+this.formatDateDDMMYYY(new Date)+".xlsx",h):P.saveAs(h,a+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateStartPoint(t){return D[t]+"4"}calculateEndPoint(t){return D[t]+"4"}calculateDataPoint(t){return D[t]+"5"}calculatePremiumDataPoint(t){return D[t]+"6"}formatDateDDMMYYY(t){var a=new Date(t),n=""+(a.getMonth()+1),l=""+a.getDate(),m=a.getFullYear();return n.length<2&&(n="0"+n),l.length<2&&(l="0"+l),[l,n,m].join("_")}mathRoundTo(t,a){const n=Math.pow(10,a);return(Math.round(t*n)/n).toLocaleString()}formatReportedDate(t){var a=new Date(t),n=""+(a.getMonth()+1),l=""+a.getDate(),m=a.getFullYear();return n.length<2&&(n="0"+n),l.length<2&&(l="0"+l),[l,n,m].join("/")}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(A.eN),e.LFG(Y.e8),e.LFG(R.t4),e.LFG(q.Ys))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var _=r(78480),B=r(86031),I=r(57842);function U(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",29),e.TgZ(1,"div",15),e.TgZ(2,"label",16),e._uU(3,"Company"),e.qZA(),e.TgZ(4,"div",30),e.TgZ(5,"ng-select",32),e.NdJ("change",function(n){return e.CHM(t),e.oxw(2).changeOptions(n,"channel")}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=e.oxw(2);e.xp6(5),e.Q6J("items",t.selectOptions.companies)}}function V(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",13),e.YNc(1,U,6,1,"div",28),e.TgZ(2,"div",29),e.TgZ(3,"div",15),e.TgZ(4,"label",16),e._uU(5,"Channel"),e.qZA(),e.TgZ(6,"div",30),e.TgZ(7,"ng-select",31),e.NdJ("change",function(n){return e.CHM(t),e.oxw().changeOptions(n,"region")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",""!=t.createFormGroup.value.fromDate&&""!=t.createFormGroup.value.toDate),e.xp6(6),e.Q6J("readonly",0==t.selectOptions.channels.length)("items",t.selectOptions.channels)}}function J(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",13),e.TgZ(1,"div",29),e.TgZ(2,"div",15),e.TgZ(3,"label",16),e._uU(4,"Region"),e.qZA(),e.TgZ(5,"div",30),e.TgZ(6,"ng-select",33),e.NdJ("change",function(n){return e.CHM(t),e.oxw().changeOptions(n,"cluster")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div",29),e.TgZ(8,"div",15),e.TgZ(9,"label",16),e._uU(10,"Cluster"),e.qZA(),e.TgZ(11,"div",30),e.TgZ(12,"ng-select",34),e.NdJ("change",function(n){return e.CHM(t),e.oxw().changeOptions(n,"branch")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=e.oxw();e.xp6(6),e.Q6J("readonly",0==t.selectOptions.regions.length)("items",t.selectOptions.regions),e.xp6(6),e.Q6J("readonly",0==t.selectOptions.cluster.length)("items",t.selectOptions.cluster)}}function Q(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",13),e.TgZ(1,"div",29),e.TgZ(2,"div",15),e.TgZ(3,"label",16),e._uU(4,"Branch"),e.qZA(),e.TgZ(5,"div",30),e.TgZ(6,"ng-select",35),e.NdJ("change",function(n){return e.CHM(t),e.oxw().changeOptions(n,"agent")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div",29),e.TgZ(8,"div",15),e.TgZ(9,"label",16),e._uU(10,"Agent Name"),e.qZA(),e.TgZ(11,"div",30),e.TgZ(12,"ng-select",36),e.NdJ("change",function(n){return e.CHM(t),e.oxw().changeOptions(n,"office")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=e.oxw();e.xp6(6),e.Q6J("readonly",0==t.selectOptions.branches.length)("items",t.selectOptions.branches),e.xp6(6),e.Q6J("readonly",0==t.selectOptions.agents.length)("items",t.selectOptions.agents)}}function H(o,i){1&o&&e._UZ(0,"br")}function z(o,i){1&o&&e._UZ(0,"br")}function X(o,i){1&o&&e._UZ(0,"br")}function K(o,i){1&o&&e._UZ(0,"br")}function $(o,i){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.hij("From Date: ",t.formatDateDDMMYYY(t.createFormGroup.value.fromDate)," ")}}function j(o,i){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.hij("To Date: ",t.formatDateDDMMYYY(t.createFormGroup.value.toDate),"")}}function ee(o,i){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.hij("Company: ",t.companyName," ")}}function te(o,i){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.hij("Channel: ",t.channelName," ")}}function ae(o,i){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.hij("Region: ",t.regionName," ")}}function ne(o,i){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,ee,2,1,"span",39),e.YNc(2,te,2,1,"span",39),e.YNc(3,ae,2,1,"span",39),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.companyId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.channelId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.regionId)}}function oe(o,i){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.hij("Cluster: ",t.clusterName," ")}}function le(o,i){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.hij("Branch: ",t.branchName,"")}}function re(o,i){if(1&o&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.hij("Agent: ",t.agentName," ")}}function ie(o,i){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,oe,2,1,"span",39),e.YNc(2,le,2,1,"span",39),e.YNc(3,re,2,1,"span",39),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.clusterId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.branchId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.agentId)}}function se(o,i){if(1&o&&(e.TgZ(0,"tr"),e.TgZ(1,"td",46),e._uU(2),e.qZA(),e.TgZ(3,"td",46),e._uU(4),e.qZA(),e.TgZ(5,"td",46),e._uU(6),e.qZA(),e.TgZ(7,"td",47),e._uU(8),e.ALo(9,"number"),e.qZA(),e.TgZ(10,"td",47),e._uU(11),e.ALo(12,"number"),e.qZA(),e.TgZ(13,"td",47),e._uU(14),e.ALo(15,"number"),e.qZA(),e.TgZ(16,"td",47),e._uU(17),e.ALo(18,"number"),e.qZA(),e.TgZ(19,"td",47),e._uU(20),e.ALo(21,"number"),e.qZA(),e.qZA()),2&o){const t=i.$implicit;e.xp6(2),e.Oqu(t.agentName),e.xp6(2),e.Oqu(t.branchName),e.xp6(2),e.Oqu(t.activityName),e.xp6(2),e.Oqu(e.xi3(9,8,t.weekActualAgainstTarge||0,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(12,11,t.weekConversionToProspect||0,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(15,14,t.weekConversionToPreviousStage||0,"1.2-2")),e.xp6(3),e.Oqu(e.xi3(18,17,t.weekExpectedTargetConversion||0,"1.2-2")),e.xp6(3),e.hij("",e.xi3(21,20,t.weekExpectedTargetConversionToProspects||0,"1.2-2")," ")}}function ce(o,i){if(1&o&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",37),e.TgZ(3,"div",38),e.YNc(4,H,1,0,"br",39),e.YNc(5,z,1,0,"br",39),e.TgZ(6,"h3",40),e._uU(7),e.qZA(),e.qZA(),e.TgZ(8,"div",38),e.YNc(9,X,1,0,"br",39),e.YNc(10,K,1,0,"br",39),e.TgZ(11,"div",41),e.YNc(12,$,2,1,"span",39),e.YNc(13,j,2,1,"span",39),e.qZA(),e.qZA(),e.TgZ(14,"div",42),e.YNc(15,ne,4,3,"div",39),e.YNc(16,ie,4,3,"div",39),e.qZA(),e.qZA(),e.TgZ(17,"div",43),e.TgZ(18,"table",44),e.TgZ(19,"tr"),e.TgZ(20,"th"),e._uU(21,"Agent Name"),e.qZA(),e.TgZ(22,"th"),e._uU(23,"Branch Name"),e.qZA(),e.TgZ(24,"th"),e._uU(25,"Activities"),e.qZA(),e.TgZ(26,"th"),e._uU(27,"Week Actual against Target"),e.qZA(),e.TgZ(28,"th"),e._uU(29,"Week Conversion to Prospect"),e.qZA(),e.TgZ(30,"th"),e._uU(31,"Week Conversion to Previous Stage"),e.qZA(),e.TgZ(32,"th"),e._uU(33,"Week Expected Target Conversion"),e.qZA(),e.TgZ(34,"th"),e._uU(35,"Week Expected Target Conversion to Prospects"),e.qZA(),e.qZA(),e.YNc(36,se,22,23,"tr",45),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&o){const t=e.oxw();e.xp6(4),e.Q6J("ngIf",t.createFormGroup.value.companyId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.clusterId),e.xp6(2),e.Oqu(t.title),e.xp6(2),e.Q6J("ngIf",t.createFormGroup.value.companyId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.clusterId),e.xp6(2),e.Q6J("ngIf",t.createFormGroup.value.fromDate),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.toDate),e.xp6(2),e.Q6J("ngIf",""!=t.createFormGroup.value.companyId||""!=t.createFormGroup.value.channelId||""!=t.createFormGroup.value.regionId),e.xp6(1),e.Q6J("ngIf",""!=t.createFormGroup.value.clusterId||""!=t.createFormGroup.value.branchId||""!=t.createFormGroup.value.agentId),e.xp6(20),e.Q6J("ngForOf",t.displayList)}}function pe(o,i){1&o&&(e.TgZ(0,"div",48),e._uU(1," There is no data "),e.qZA())}let ue=(()=>{class o{constructor(t,a){this.cdf=t,this.exportService=a,this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.productValues=[],this.subHeader=[],this.dataExcel=[],this.isData=!1,this.displayList=[],this.title="Weekly Sales Analysis Report"}ngOnInit(){this.loadForm(),this.getOfficeHirearchy(),this.fromMinDate=null,this.fromMaxDate=null}getOfficeHirearchy(){return(0,f.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(t=>(0,f.mG)(this,void 0,void 0,function*(){t&&(this.selectOptions.companies=t)}))})}getAllReports(){return(0,f.mG)(this,void 0,void 0,function*(){this.displayList=[];let t=[{activityName:"Daily Lead"},{activityName:"Appointments (Phone)"},{activityName:"Appointments (Face to Face)"},{activityName:"Appointments (Online)"},{activityName:"Needs (LPP & BRAM complete)"},{activityName:"Solutions"},{activityName:"Sales"},{activityName:"Referrals"}];this.createFormGroup.invalid?(0,M.w)(this.createFormGroup):yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(a=>(0,f.mG)(this,void 0,void 0,function*(){if(a.weeklydataList.length>0){this.isData=!0;for(var n=0;n<a.weeklydataList.length;n++)for(var l=0;l<t.length;l++){let m={agentName:a.weeklydataList[n].agentName,branchName:a.weeklydataList[n].branchName,activityName:t[l].activityName,weekActualAgainstTarge:this.weekActualAgainstTarge(t[l].activityName,a.weeklydataList[n]),weekConversionToProspect:this.weekConversionToProspect(t[l].activityName,a.weeklydataList[n]),weekConversionToPreviousStage:this.weekConversionToPreviousStage(t[l].activityName,a.weeklydataList[n]),weekExpectedTargetConversion:this.weekExpectedTargetConversion(t[l].activityName,a.weeklydataList[n]),weekExpectedTargetConversionToProspects:this.weekExpectedTargetConversionToProspects(t[l].activityName,a.weeklydataList[n])};this.displayList.push(m)}}else this.isData=!1})),this.cdf.detectChanges()})}weekActualAgainstTarge(t,a){let n=0;return"Daily Lead"==t&&0!=a.weeklyTargetTotalLead&&(n=this.calculateDivision(a.weeklyActualTotalLead,a.weeklyTargetTotalLead)),"Appointments (Phone)"==t&&0!=a.weeklyTargetTotalAppointmentPhone&&(n=this.calculateDivision(a.weeklyActualTotalAppointmentPhone,a.weeklyTargetTotalAppointmentPhone)),"Appointments (Face to Face)"==t&&0!=a.weeklyTargetTotalAppointmentFaceToFace&&(n=this.calculateDivision(a.weeklyActualTotalAppointmentFaceToFace,a.weeklyTargetTotalAppointmentFaceToFace)),"Appointments (Online)"==t&&0!=a.weeklyTargetTotalAppointmentOnline&&(n=this.calculateDivision(a.weeklyActualTotalAppointmentOnline,a.weeklyTargetTotalAppointmentOnline)),"Needs (LPP & BRAM complete)"==t&&0!=a.weeklyTargetTotalNeeds&&(n=this.calculateDivision(a.weeklyActualTotalNeeds,a.weeklyTargetTotalNeeds)),"Solutions"==t&&0!=a.weeklyTargetSolutions&&(n=this.calculateDivision(a.weeklyActualTotalSolutions,a.weeklyTargetSolutions)),"Sales"==t&&0!=a.weeklyTargetSolutions&&(n=this.calculateDivision(a.weeklyActualTotalSales,a.weeklyTargetSolutions)),"Referrals"==t&&(n=0),n}weekConversionToProspect(t,a){let n=0;return"Daily Lead"==t&&(n=0),"Appointments (Phone)"==t&&0!=a.weeklyActualTotalLead&&(n=this.calculateDivision(a.weeklyActualTotalAppointmentPhone,a.weeklyActualTotalLead)),"Appointments (Face to Face)"==t&&0!=a.weeklyActualTotalLead&&(n=this.calculateDivision(a.weeklyActualTotalAppointmentFaceToFace,a.weeklyActualTotalLead)),"Appointments (Online)"==t&&0!=a.weeklyActualTotalLead&&(n=this.calculateDivision(a.weeklyActualTotalAppointmentOnline,a.weeklyActualTotalLead)),"Needs (LPP & BRAM complete)"==t&&0!=a.weeklyActualTotalLead&&(n=this.calculateDivision(a.weeklyActualTotalNeeds,a.weeklyActualTotalLead)),"Solutions"==t&&0!=a.weeklyActualTotalLead&&(n=this.calculateDivision(a.weeklyActualTotalSolutions,a.weeklyActualTotalLead)),"Sales"==t&&0!=a.weeklyActualTotalLead&&(n=this.calculateDivision(a.weeklyActualTotalSales,a.weeklyActualTotalLead)),"Referrals"==t&&(n=0),n}weekConversionToPreviousStage(t,a){let n=0;return"Daily Lead"==t&&(n=0),"Appointments (Phone)"==t&&0!=a.weeklyActualTotalLead&&(n=this.calculateDivision(a.weeklyActualTotalAppointmentPhone,a.weeklyActualTotalLead)),"Appointments (Face to Face)"==t&&0!=a.weeklyActualTotalLead&&(n=this.calculateDivision(a.weeklyActualTotalAppointmentFaceToFace,a.weeklyActualTotalLead)),"Appointments (Online)"==t&&0!=a.weeklyActualTotalLead&&(n=this.calculateDivision(a.weeklyActualTotalAppointmentOnline,a.weeklyActualTotalLead)),"Needs (LPP & BRAM complete)"==t&&(n=this.calculateDivision(a.weeklyActualTotalNeeds,a.weeklyActualTotalAppointmentFaceToFace+a.weeklyActualTotalAppointmentOnline+a.weeklyActualTotalAppointmentPhone)),"Solutions"==t&&0!=a.weeklyActualTotalNeeds&&(n=this.calculateDivision(a.weeklyActualTotalSolutions,a.weeklyActualTotalNeeds)),"Sales"==t&&0!=a.weeklyActualTotalSolutions&&(n=this.calculateDivision(a.weeklyActualTotalSales,a.weeklyActualTotalSolutions)),"Referrals"==t&&(n=0),n}weekExpectedTargetConversion(t,a){let n=0;return"Daily Lead"==t&&(n=0),"Appointments (Phone)"==t&&0!=a.weeklyTargetTotalLead&&(n=this.calculateDivision(a.weeklyTargetTotalAppointmentPhone,a.weeklyTargetTotalLead)),"Appointments (Face to Face)"==t&&0!=a.weeklyTargetTotalLead&&(n=this.calculateDivision(a.weeklyTargetTotalAppointmentFaceToFace,a.weeklyTargetTotalLead)),"Appointments (Online)"==t&&0!=a.weeklyTargetTotalLead&&(n=this.calculateDivision(a.weeklyTargetTotalAppointmentOnline,a.weeklyTargetTotalLead)),"Needs (LPP & BRAM complete)"==t&&0!=a.weeklyTargetTotalLead&&(n=this.calculateDivision(a.weeklyTargetTotalNeeds,a.weeklyTargetTotalLead)),"Solutions"==t&&0!=a.weeklyTargetTotalLead&&(n=this.calculateDivision(a.weeklyTargetSolutions,a.weeklyTargetTotalLead)),"Sales"==t&&0!=a.weeklyTargetTotalLead&&(n=this.calculateDivision(a.weeklyTargetSales,a.weeklyTargetTotalLead)),"Referrals"==t&&(n=0),n}weekExpectedTargetConversionToProspects(t,a){let n=0;return"Daily Lead"==t&&(n=0),"Appointments (Phone)"==t&&0!=a.weeklyTargetTotalLead&&(n=this.calculateDivision(a.weeklyTargetTotalAppointmentOnline,a.weeklyTargetTotalLead)),"Appointments (Face to Face)"==t&&0!=a.weeklyTargetTotalLead&&(n=this.calculateDivision(a.weeklyTargetTotalAppointmentFaceToFace,a.weeklyTargetTotalLead)),"Appointments (Online)"==t&&0!=a.weeklyTargetTotalLead&&(n=this.calculateDivision(a.weeklyActualTotalAppointmentOnline,a.weeklyTargetTotalLead)),"Needs (LPP & BRAM complete)"==t&&(n=this.calculateDivision(a.weeklyTargetTotalNeeds,a.weeklyTargetTotalAppointmentFaceToFace+a.weeklyTargetTotalAppointmentOnline+a.weeklyTargetTotalAppointmentPhone)),"Solutions"==t&&0!=a.weeklyTargetTotalNeeds&&(n=this.calculateDivision(a.weeklyTargetSolutions,a.weeklyTargetTotalNeeds)),"Sales"==t&&0!=a.weeklyTargetSolutions&&(n=this.calculateDivision(a.weeklyTargetSales,a.weeklyTargetSolutions)),"Referrals"==t&&(n=0),n}calculateDivision(t,a){let n;return n=0!=a?t/a:0,n}generateReportExcel(){this.dataExcel=[],this.productValues=["Agent Name","Branch Name","Activities","Week Actual against Target","Week Conversion to Prospect","Week Conversion to Previous Stage","Week Expected Target Conversion","Week Expected Target Conversion to Prospects"];for(var t=0;t<this.displayList.length;t++)this.dataExcel.push([this.displayList[t].agentName,this.displayList[t].branchName,this.displayList[t].activityName,this.displayList[t].weekActualAgainstTarge||0,this.displayList[t].weekConversionToProspect||0,this.displayList[t].weekConversionToPreviousStage||0,this.displayList[t].weekExpectedTargetConversion||0,this.displayList[t].monthExpectedTargetConversionToProspects||0]);let a=null,n=null;this.createFormGroup.value.fromDate&&(a=this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)),this.createFormGroup.value.fromDate&&(n=this.formatDateDDMMYYY(this.createFormGroup.value.toDate)),this.exportService.exportExcel({title:this.title,searchValue:[{fromDate:a},{toDate:n},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],productsHeader:this.productValues,data:this.dataExcel})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.displayList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.fromMinDate=null,this.fromMaxDate=null,this.cdf.detectChanges()}changeOptions(t,a){return(0,f.mG)(this,void 0,void 0,function*(){"company"==a&&(t?(this.companyName=t.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.channels=n)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==a&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),t?(this.companyName=t.name,yield this.exportService.getOfficeHirearchy(t.id,"02").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.channels=n)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==a&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),t?(this.channelName=t.name,yield this.exportService.getOfficeHirearchy(t.id,"03").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.regions=n)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==a&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),t?(this.regionName=t.name,yield this.exportService.getOfficeHirearchy(t.id,"04").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.cluster=n)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==a&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),t?(this.clusterName=t.name,yield this.exportService.getOfficeHirearchy(t.id,"05").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.branches=n)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==a&&(this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),t?(this.branchName=t.name,yield this.exportService.getAgentOffice(t.id).toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.agents=n)}))):(this.branchName=null,this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"office"==a&&(t?this.agentName=t.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new p.cw({fromDate:new p.NI("",[p.kI.required,p.kI.nullValidator]),toDate:new p.NI("",[p.kI.required,p.kI.nullValidator]),agentId:new p.NI(""),companyId:new p.NI(""),channelId:new p.NI(""),regionId:new p.NI(""),clusterId:new p.NI(""),branchId:new p.NI("")})}isControlValid(t){const a=this.createFormGroup.controls[t];return a.valid&&(a.dirty||a.touched)}isControlInvalid(t){const a=this.createFormGroup.controls[t];return a.invalid&&(a.dirty||a.touched)}controlHasError(t,a){const n=this.createFormGroup.controls[a];return n.hasError(t)&&(n.dirty||n.touched)}isControlTouched(t){const a=this.createFormGroup.controls[t];return a.dirty||a.touched}doValid(t){if("FromDate"==t){if(this.createFormGroup.controls.fromDate.value){let g=G(this.createFormGroup.controls.fromDate.value).add(0,"years");this.toMaxDate={year:parseInt(g.format("YYYY")),month:parseInt(g.format("M")),day:parseInt(g.format("D"))},this.createFormGroup.controls.fromDate.setValue(g.format("YYYY-MM-DD"))}var a=new Date(this.createFormGroup.value.fromDate);a.setFullYear(a.getFullYear()+1),a.setDate(a.getDate()-1),this.fromMinDate=this.createFormGroup.value.fromDate,this.fromMaxDate=a;let m=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=m&&1!=m&&this.createFormGroup.controls.toDate.setValue("")}if("ToDate"==t){if(this.createFormGroup.controls.toDate.value){let g=G(this.createFormGroup.controls.toDate.value).add(0,"years");this.toMaxDate={year:parseInt(g.format("YYYY")),month:parseInt(g.format("M")),day:parseInt(g.format("D"))},this.createFormGroup.controls.toDate.setValue(g.format("YYYY-MM-DD"))}var n=new Date(this.createFormGroup.value.toDate);n.setFullYear(n.getFullYear()-1),n.setDate(n.getDate()+1),this.fromMinDate=n,this.createFormGroup.value.toDate||(this.fromMaxDate=this.createFormGroup.value.toDate);let m=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=m&&1!=m&&this.createFormGroup.controls.fromDate.setValue(""),1==m&&(new Date(this.createFormGroup.value.toDate).getMonth()>new Date(this.createFormGroup.value.fromDate).getMonth()&&this.createFormGroup.controls.fromDate.setValue(""),new Date(this.createFormGroup.value.toDate).getMonth()==new Date(this.createFormGroup.value.fromDate).getMonth()&&new Date(this.createFormGroup.value.toDate).getDate()>=new Date(this.createFormGroup.value.fromDate).getDate()&&this.createFormGroup.controls.fromDate.setValue(""))}this.cdf.detectChanges()}clearDate(t){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==t&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==t&&this.createFormGroup.controls.toDate.setValue(""),this.displayList=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(t){var a=new Date(t),n=""+(a.getMonth()+1),l=""+a.getDate(),m=a.getFullYear();return n.length<2&&(n="0"+n),l.length<2&&(l="0"+l),[l,n,m].join("/")}mathRoundTo(t,a){const n=Math.pow(10,a);return(Math.round(t*n)/n).toLocaleString()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.sBO),e.Y36(b))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-report-weekly-sales-analysis-by-branch"]],decls:46,vars:15,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool","search-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","regionId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","clusterId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","branchId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","agentName","bindValue","agentId","formControlName","agentId",1,"ng-custom-select",3,"readonly","items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"date-display"],[1,"search-display"],[2,"width","100%","overflow-y","scroll","overflow-x","scroll","max-height","500px"],["border","1"],[4,"ngFor","ngForOf"],[1,"text-left"],[1,"text-right"],[2,"color","gray","text-align","center"]],template:function(t,a){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"h3",5),e._uU(6,"Weekly Sales Analysis by Branch"),e.qZA(),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"button",7),e.NdJ("click",function(){return a.getAllReports()}),e._UZ(9,"span",8),e.qZA(),e.TgZ(10,"button",9),e.NdJ("click",function(){return a.generateReportExcel()}),e.TgZ(11,"span",10),e._uU(12,"Generate"),e.qZA(),e.qZA(),e.TgZ(13,"button",7),e.NdJ("click",function(){return a.cancelReport()}),e.TgZ(14,"span",10),e._uU(15,"Cancel"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div",11),e.TgZ(17,"form",12),e.TgZ(18,"div",13),e.TgZ(19,"div",14),e.TgZ(20,"div",15),e.TgZ(21,"label",16),e._uU(22,"From Date"),e.qZA(),e.TgZ(23,"div",17),e.TgZ(24,"input",18),e.NdJ("dateChange",function(){return a.doValid("FromDate")}),e.qZA(),e._UZ(25,"mat-datepicker-toggle",19),e._UZ(26,"mat-datepicker",20,21),e.qZA(),e.TgZ(28,"button",22),e.NdJ("click",function(){return a.clearDate("FromDate")}),e._uU(29,"Clear"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(30,"div",14),e.TgZ(31,"div",15),e.TgZ(32,"label",16),e._uU(33,"To Date"),e.qZA(),e.TgZ(34,"div",17),e.TgZ(35,"input",23),e.NdJ("dateChange",function(){return a.doValid("ToDate")}),e.qZA(),e._UZ(36,"mat-datepicker-toggle",19),e._UZ(37,"mat-datepicker",20,24),e.qZA(),e.TgZ(39,"button",22),e.NdJ("click",function(){return a.clearDate("ToDate")}),e._uU(40,"Clear"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(41,V,8,3,"div",25),e.YNc(42,J,13,4,"div",25),e.YNc(43,Q,13,4,"div",25),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(44,ce,37,10,"div",26),e.YNc(45,pe,2,0,"div",27)),2&t){const n=e.MAs(27),l=e.MAs(38);e.xp6(10),e.Q6J("disabled",!a.isData),e.xp6(7),e.Q6J("formGroup",a.createFormGroup),e.xp6(7),e.Q6J("min",a.fromMinDate)("max",a.fromMaxDate)("matDatepicker",n),e.xp6(1),e.Q6J("for",n),e.xp6(10),e.Q6J("min",a.fromMinDate)("max",a.fromMaxDate)("matDatepicker",l),e.xp6(1),e.Q6J("for",l),e.xp6(5),e.Q6J("ngIf",""!=a.createFormGroup.value.fromDate&&""!=a.createFormGroup.value.toDate),e.xp6(1),e.Q6J("ngIf",""!=a.createFormGroup.value.fromDate&&""!=a.createFormGroup.value.toDate),e.xp6(1),e.Q6J("ngIf",""!=a.createFormGroup.value.fromDate&&""!=a.createFormGroup.value.toDate),e.xp6(1),e.Q6J("ngIf",a.isData),e.xp6(1),e.Q6J("ngIf",!a.isData)}},directives:[p._Y,p.JL,p.sg,p.Fj,_.hl,p.JJ,p.u,_.nW,B.R9,_.Mq,v.O5,I.w9,v.sg],pipes:[v.JJ],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0 .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;position:relative;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.date-display[_ngcontent-%COMP%]{width:100%;overflow:hidden}.date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;min-width:135px;float:left;display:block}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#e3e3e3;transform:rotate(0);position:absolute;top:0;left:49%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:end;padding:0 5px 0 0}"]}),o})();var he=r(29018),me=r(45598),de=r(87626),ge=r(85378),fe=r(75396),Z=r(44290),ye=r(57730),Te=r(92118),ve=r(47975);let Ae=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[v.uU,{provide:Z._A,useClass:Te.t7,deps:[Z.Ad]},{provide:Z.sG,useValue:ve.Gs}],imports:[[v.ez,p.u5,I.A0,p.UX,de.vi,me.fA,ge.M,fe.X,_.FA,Z.XK,ye.c,B.lN,he.Bz.forChild([{path:"",component:ue}])]]}),o})()}}]);