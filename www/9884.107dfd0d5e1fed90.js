"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9884],{39884:(bt,T,l)=>{l.r(T),l.d(T,{ReportByAgentMonthlyModule:()=>Nt});var _=l(86019),f=l(64762),h=l(49133),G=l(92070),Y=l(53489),t=l(83668),A=l(44522),B=l(11901),R=l(62473),w=l(91691),C=l(18260),q=l(67198),P=l(71704),V=l(49875);const M=`${C.N.apiUrl}/summaryReportByBranchForMonthly`,J=`${C.N.apiUrl}/officeHirearchy`,E=`${C.N.apiUrl}/agentByOffice`,D=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let U=(()=>{class a extends w.i{constructor(e,n,o,r){super(e,M),this.httpClient=e,this.authService=n,this.platform=o,this.attachmentDownloadService=r}getOfficeHirearchy(e,n){const r=new A.LE({fromObject:{parentId:e,typeCode:n}});return this.httpClient.get(J,{params:r})}getAgentOffice(e){const o=new A.LE({fromObject:{officeId:e}});return this.httpClient.get(E,{params:o})}getAllReportData(e){e.fromDate&&(e.fromDate=this.formatDateYYYY_MM_DD(e.fromDate)),e.toDate&&(e.toDate=this.formatDateYYYY_MM_DD(e.toDate));const n=new A.LE({fromObject:e});return this.httpClient.get(M,{params:n})}getAllAboutBRAM(e){return this.httpClient.get(M+"/"+e+"/asset")}formatDateYYYY_MM_DD(e){var n=new Date(e),o=""+(n.getMonth()+1),r=""+n.getDate(),p=n.getFullYear();return o.length<2&&(o="0"+o),r.length<2&&(r="0"+r),[p,o,r].join("-")}exportExcel(e){const n=e.title,o=e.searchValue,r=e.products,p=e.data;let u=new B.Workbook,g=u.addWorksheet("Sheet1");g.views=[{state:"frozen",xSplit:4,ySplit:4,activeCell:"A1"}],g.mergeCells("A1","B2");let F=g.getCell("A1");F.value=n,F.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},F.alignment={vertical:"middle",horizontal:"left"},g.mergeCells("G1","G1");let N=g.getCell("G1");N.value="Reported Date: "+this.formatReportedDate(new Date),N.font={name:"Calibri",size:10,bold:!0},N.alignment={vertical:"middle",horizontal:"left"},g.mergeCells("G2","G2");let b=g.getCell("G2");if(b.value="Reported By: "+this.authService.currentUserValue.firstName+this.authService.currentUserValue.lastName,b.font={name:"Calibri",size:10,bold:!0},b.alignment={vertical:"middle",horizontal:"left"},o.length>0)for(var s=0;s<o.length;s++){let m=null,d=null;if(o[s].fromDate&&(m="F1",d="From Month/Year: "+o[s].fromDate),o[s].toDate&&(m="F2",d="To Month/Year: "+o[s].toDate),o[s].companyName&&(m="L1",d="Company: "+o[s].companyName),o[s].channelName&&(m="M1",d="Channel: "+o[s].channelName),o[s].regionName&&(m="N1",d="Region: "+o[s].regionName),o[s].clusterName&&(m="L2",d="Cluster: "+o[s].clusterName),o[s].branchName&&(m="M2",d="Branch: "+o[s].branchName),o[s].agentName&&(m="N2",d="Agent: "+o[s].agentName),null!=m&&null!=d){let c=g.getCell(m);c.value=d,c.font={name:"Calibri",size:10,bold:!0},c.alignment={vertical:"middle",horizontal:"left"}}}g.addRow([]);let L=0;for(s=0;s<r.length;s++){let d=this.calculateStartPoint(L);L+=1;let c=g.getCell(d);c.value=r[s],c.font={name:"Calibri",size:12,bold:!0},c.alignment={vertical:"middle",horizontal:"center"}}p.forEach(m=>{let d=g.addRow(m),c=0;m.forEach(y=>{c++;let v=d.getCell(c);1==c||2==c||3==c?v&&(v.alignment={vertical:"middle",horizontal:"left"}):v.alignment={vertical:"middle",horizontal:"right"},c>3&&(v.numFmt="#,##0.00_);(#,##0.00)")})}),g.columns.forEach(function(m,d){var c=0;m.eachCell({includeEmpty:!0},function(y){var v=y.value?y.value.toString().length:10;v>c&&(c=v)}),m.width=c<10?10:c}),g.getColumn(1).width=25,u.xlsx.writeBuffer().then(m=>{let d=new Blob([m],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});this.platform.is("android")||this.platform.is("ios")?this.attachmentDownloadService.mobileDownload(n+"_"+this.formatDateDDMMYYY(new Date)+".xlsx",d):R.saveAs(d,n+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateStartPoint(e){return D[e]+"4"}calculateEndPoint(e){return D[e]+"4"}calculateDataPoint(e){return D[e]+"5"}calculatePremiumDataPoint(e){return D[e]+"6"}formatDateDDMMYYY(e){var n=new Date(e),o=""+(n.getMonth()+1),r=""+n.getDate(),p=n.getFullYear();return o.length<2&&(o="0"+o),r.length<2&&(r="0"+r),[r,o,p].join("_")}mathRoundTo(e,n){const o=Math.pow(10,n);return(Math.round(e*o)/o).toLocaleString()}formatReportedDate(e){var n=new Date(e),o=""+(n.getMonth()+1),r=""+n.getDate(),p=n.getFullYear();return o.length<2&&(o="0"+o),r.length<2&&(r="0"+r),[r,o,p].join("/")}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(A.eN),t.LFG(q.e8),t.LFG(P.t4),t.LFG(V.Ys))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var x=l(78480),I=l(86031),O=l(57842);function Q(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",29),t.TgZ(1,"div",15),t.TgZ(2,"label",16),t._uU(3,"Company"),t.qZA(),t.TgZ(4,"div",30),t.TgZ(5,"ng-select",32),t.NdJ("change",function(o){return t.CHM(e),t.oxw(2).changeOptions(o,"channel")}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw(2);t.xp6(5),t.Q6J("items",e.selectOptions.companies)}}function S(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.YNc(1,Q,6,1,"div",28),t.TgZ(2,"div",29),t.TgZ(3,"div",15),t.TgZ(4,"label",16),t._uU(5,"Channel"),t.qZA(),t.TgZ(6,"div",30),t.TgZ(7,"ng-select",31),t.NdJ("change",function(o){return t.CHM(e),t.oxw().changeOptions(o,"region")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.fromDate&&""!=e.createFormGroup.value.toDate),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.channels.length)("items",e.selectOptions.channels)}}function H(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Region"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",33),t.NdJ("change",function(o){return t.CHM(e),t.oxw().changeOptions(o,"cluster")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Cluster"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",34),t.NdJ("change",function(o){return t.CHM(e),t.oxw().changeOptions(o,"branch")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.regions.length)("items",e.selectOptions.regions),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.cluster.length)("items",e.selectOptions.cluster)}}function z(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Branch"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",35),t.NdJ("change",function(o){return t.CHM(e),t.oxw().changeOptions(o,"agent")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Agent Name"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",36),t.NdJ("change",function(o){return t.CHM(e),t.oxw().changeOptions(o,"office")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.branches.length)("items",e.selectOptions.branches),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.agents.length)("items",e.selectOptions.agents)}}function j(a,i){1&a&&t._UZ(0,"br")}function k(a,i){1&a&&t._UZ(0,"br")}function W(a,i){1&a&&t._UZ(0,"br")}function X(a,i){1&a&&t._UZ(0,"br")}function $(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.hij("From Month/Year: ",t.xi3(2,1,e.createFormGroup.value.fromDate,"MM/yyyy")," ")}}function K(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.hij("To Month/Year: ",t.xi3(2,1,e.createFormGroup.value.toDate,"MM/yyyy"),"")}}function tt(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Company: ",e.companyName," ")}}function et(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Channel: ",e.channelName," ")}}function ot(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Region: ",e.regionName," ")}}function nt(a,i){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,tt,2,1,"span",39),t.YNc(2,et,2,1,"span",39),t.YNc(3,ot,2,1,"span",39),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.channelId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.regionId)}}function at(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Cluster: ",e.clusterName," ")}}function rt(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Branch: ",e.branchName,"")}}function it(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Agent: ",e.agentName," ")}}function lt(a,i){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,at,2,1,"span",39),t.YNc(2,rt,2,1,"span",39),t.YNc(3,it,2,1,"span",39),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.branchId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.agentId)}}function st(a,i){if(1&a&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.Oqu(e.headerMonthName)}}function ct(a,i){if(1&a&&(t.TgZ(0,"tr",47),t.TgZ(1,"th"),t._uU(2,"Agent Name"),t.qZA(),t.TgZ(3,"th"),t._uU(4,"Branch Name"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Activities"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Target"),t.qZA(),t.YNc(9,st,2,1,"th",46),t.qZA()),2&a){const e=t.oxw(2);t.xp6(9),t.Q6J("ngForOf",e.productList)}}function ht(a,i){if(1&a&&(t.TgZ(0,"td",51),t._uU(1),t.ALo(2,"number"),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.target||0,"1.2-2"))}}function pt(a,i){1&a&&(t.TgZ(0,"td",51),t._uU(1,"0.00"),t.qZA())}function mt(a,i){if(1&a&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.monthlyValue||0,"1.2-2"))}}function dt(a,i){1&a&&(t.TgZ(0,"label"),t._uU(1,"0.00"),t.qZA())}function ut(a,i){if(1&a&&(t.TgZ(0,"td",51),t.YNc(1,mt,3,4,"label",39),t.YNc(2,dt,2,0,"label",39),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",e.monthlyValue),t.xp6(1),t.Q6J("ngIf",!e.monthlyValue)}}function gt(a,i){if(1&a&&(t.TgZ(0,"tr"),t.TgZ(1,"td",48),t._uU(2),t.qZA(),t.TgZ(3,"td",48),t._uU(4),t.qZA(),t.TgZ(5,"td",48),t._uU(6),t.qZA(),t.YNc(7,ht,3,4,"td",49),t.YNc(8,pt,2,0,"td",49),t.YNc(9,ut,3,2,"td",50),t.qZA()),2&a){const e=i.$implicit,n=i.index,o=t.oxw(2);t.xp6(2),t.Oqu(e.agentName),t.xp6(2),t.Oqu(e.branchName),t.xp6(2),t.Oqu(e.activitiesName),t.xp6(1),t.Q6J("ngIf",e.target),t.xp6(1),t.Q6J("ngIf",!e.target),t.xp6(1),t.Q6J("ngForOf",o.dataList[n].productDataList)}}function ft(a,i){if(1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",37),t.TgZ(3,"div",38),t.YNc(4,j,1,0,"br",39),t.YNc(5,k,1,0,"br",39),t.TgZ(6,"h3",40),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",38),t.YNc(9,W,1,0,"br",39),t.YNc(10,X,1,0,"br",39),t.TgZ(11,"div",41),t.YNc(12,$,3,4,"span",39),t.YNc(13,K,3,4,"span",39),t.qZA(),t.qZA(),t.TgZ(14,"div",42),t.YNc(15,nt,4,3,"div",39),t.YNc(16,lt,4,3,"div",39),t.qZA(),t.qZA(),t.TgZ(17,"div",43),t.TgZ(18,"table",44),t.YNc(19,ct,10,1,"tr",45),t.YNc(20,gt,10,6,"tr",46),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.fromDate),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.toDate),t.xp6(2),t.Q6J("ngIf",""!=e.createFormGroup.value.companyId||""!=e.createFormGroup.value.channelId||""!=e.createFormGroup.value.regionId),t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.clusterId||""!=e.createFormGroup.value.branchId||""!=e.createFormGroup.value.agentId),t.xp6(3),t.Q6J("ngIf",e.productList.length>0),t.xp6(1),t.Q6J("ngForOf",e.dataList)}}function vt(a,i){1&a&&(t.TgZ(0,"div",52),t._uU(1," There is no data "),t.qZA())}let _t=(()=>{class a{constructor(e,n,o){this.cdf=e,this.datePipe=n,this.exportService=o,this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.productValues=[],this.subHeader=[],this.dataExcel=[],this.isData=!1,this.productsHeader=[],this.dataList=[],this.title="Monthly Activity Report"}ngOnInit(){this.loadForm(),this.getOfficeHirearchy(),this.fromMinDate=null,this.fromMaxDate=null}getOfficeHirearchy(){return(0,f.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(e=>(0,f.mG)(this,void 0,void 0,function*(){e&&(this.selectOptions.companies=e)}))})}getAllReports(){return(0,f.mG)(this,void 0,void 0,function*(){this.productList=[],this.dataList=[],this.createFormGroup.invalid?(0,Y.w)(this.createFormGroup):yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(e=>(0,f.mG)(this,void 0,void 0,function*(){if(e){if(e.headerColumnList.length>0)for(var n=0;n<e.headerColumnList.length;n++)this.productList.push(e.headerColumnList[n]);if(e.dataList.length>0)for(this.isData=!0,e.dataList.sort((p,u)=>p.agentName<u.agentName?-1:p.agentName>u.agentName?1:0),this.dataList=e.dataList,n=0;n<this.dataList.length;n++){let u=[];for(var o=0;o<this.productList.length;o++)this.productList[o].monthlyValue=0,u.push(this.productList[o]);if(this.dataList[n].productDataList=JSON.parse(JSON.stringify(u)),this.dataList[n].dynamicList)for(o=0;o<this.dataList[n].dynamicList.length;o++)for(var r=0;r<this.dataList[n].productDataList.length;r++)this.dataList[n].productDataList[r].headerMonthName==this.dataList[n].dynamicList[o].headerMonthName&&(this.dataList[n].productDataList[r].headerDateName=this.dataList[n].dynamicList[o].headerDateName,this.dataList[n].productDataList[r].headerDate=this.dataList[n].dynamicList[o].headerDate,this.dataList[n].productDataList[r].headerWeekName=this.dataList[n].dynamicList[o].headerWeekName,this.dataList[n].productDataList[r].headerWeekRange=this.dataList[n].dynamicList[o].headerWeekRange,this.dataList[n].productDataList[r].headerMonthName=this.dataList[n].dynamicList[o].headerMonthName,this.dataList[n].productDataList[r].dailyValue=Number(this.dataList[n].dynamicList[o].dailyValue),this.dataList[n].productDataList[r].weeklyValue=Number(this.dataList[n].dynamicList[o].weeklyValue),this.dataList[n].productDataList[r].monthlyValue=Number(this.dataList[n].dynamicList[o].monthlyValue))}else this.isData=!1}})),this.cdf.detectChanges()})}generateReportExcel(){this.productValues=[],this.dataExcel=[],this.productValues=["Agent Name","Branch Name","Activities Name","Target"];for(var e=0;e<this.productList.length;e++)this.productValues.push(this.productList[e].headerMonthName);for(e=0;e<this.dataList.length;e++){let g=[];g.push(this.dataList[e].agentName,this.dataList[e].branchName,this.dataList[e].activitiesName,this.dataList[e].target||0);for(var n=0;n<this.dataList[e].productDataList.length;n++)g.push(this.dataList[e].productDataList[n].monthlyValue||0);this.dataExcel.push(g)}let o=null,r=null;this.createFormGroup.value.fromDate&&(o=this.datePipe.transform(this.createFormGroup.value.fromDate,"MM/yyyy")),this.createFormGroup.value.fromDate&&(r=this.datePipe.transform(this.createFormGroup.value.toDate,"MM/yyyy")),this.exportService.exportExcel({title:this.title,searchValue:[{fromDate:o},{toDate:r},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],products:this.productValues,data:this.dataExcel})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.productList=[],this.dataList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.fromMinDate=null,this.fromMaxDate=null,this.cdf.detectChanges()}changeOptions(e,n){return(0,f.mG)(this,void 0,void 0,function*(){"company"==n&&(e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(o=>(0,f.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.channels=o)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==n&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"02").toPromise().then(o=>(0,f.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.channels=o)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==n&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.channelName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"03").toPromise().then(o=>(0,f.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.regions=o)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==n&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.regionName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"04").toPromise().then(o=>(0,f.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.cluster=o)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==n&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.clusterName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"05").toPromise().then(o=>(0,f.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.branches=o)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==n&&(this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),e?(this.branchName=e.name,yield this.exportService.getAgentOffice(e.id).toPromise().then(o=>(0,f.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.agents=o)}))):(this.branchName=null,this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"office"==n&&(e?this.agentName=e.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new h.cw({fromDate:new h.NI("",[h.kI.required,h.kI.nullValidator]),toDate:new h.NI("",[h.kI.required,h.kI.nullValidator]),agentId:new h.NI(""),companyId:new h.NI(""),channelId:new h.NI(""),regionId:new h.NI(""),clusterId:new h.NI(""),branchId:new h.NI("")})}isControlValid(e){const n=this.createFormGroup.controls[e];return n.valid&&(n.dirty||n.touched)}isControlInvalid(e){const n=this.createFormGroup.controls[e];return n.invalid&&(n.dirty||n.touched)}controlHasError(e,n){const o=this.createFormGroup.controls[n];return o.hasError(e)&&(o.dirty||o.touched)}isControlTouched(e){const n=this.createFormGroup.controls[e];return n.dirty||n.touched}doValid(e){if("FromDate"==e){if(this.createFormGroup.controls.fromDate.value){let u=G(this.createFormGroup.controls.fromDate.value).add(0,"years");this.toMaxDate={year:parseInt(u.format("YYYY")),month:parseInt(u.format("M")),day:parseInt(u.format("D"))},this.createFormGroup.controls.fromDate.setValue(u.format("YYYY-MM-DD"))}var n=new Date(this.createFormGroup.value.fromDate);n.setFullYear(n.getFullYear()+1),n.setDate(n.getDate()-1),this.fromMinDate=this.createFormGroup.value.fromDate,this.fromMaxDate=n;let p=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=p&&1!=p&&this.createFormGroup.controls.toDate.setValue("")}if("ToDate"==e){if(this.createFormGroup.controls.toDate.value){let u=G(this.createFormGroup.controls.toDate.value).add(0,"years");this.toMaxDate={year:parseInt(u.format("YYYY")),month:parseInt(u.format("M")),day:parseInt(u.format("D"))},this.createFormGroup.controls.toDate.setValue(u.format("YYYY-MM-DD"))}var o=new Date(this.createFormGroup.value.toDate);o.setFullYear(o.getFullYear()-1),o.setDate(o.getDate()+1),this.fromMinDate=o,this.createFormGroup.value.toDate||(this.fromMaxDate=this.createFormGroup.value.toDate);let p=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=p&&1!=p&&this.createFormGroup.controls.fromDate.setValue(""),1==p&&(new Date(this.createFormGroup.value.toDate).getMonth()>new Date(this.createFormGroup.value.fromDate).getMonth()&&this.createFormGroup.controls.fromDate.setValue(""),new Date(this.createFormGroup.value.toDate).getMonth()==new Date(this.createFormGroup.value.fromDate).getMonth()&&new Date(this.createFormGroup.value.toDate).getDate()>=new Date(this.createFormGroup.value.fromDate).getDate()&&this.createFormGroup.controls.fromDate.setValue(""))}this.cdf.detectChanges()}clearDate(e){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==e&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==e&&this.createFormGroup.controls.toDate.setValue(""),this.isData=!1,this.productList=[],this.dataList=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(e){var n=new Date(e),o=""+(n.getMonth()+1),r=""+n.getDate(),p=n.getFullYear();return o.length<2&&(o="0"+o),r.length<2&&(r="0"+r),[r,o,p].join("/")}mathRoundTo(e,n){const o=Math.pow(10,n);return(Math.round(e*o)/o).toLocaleString()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.sBO),t.Y36(_.uU),t.Y36(U))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-report-by-agent-monthly"]],decls:46,vars:15,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool","search-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","regionId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","clusterId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","branchId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","agentName","bindValue","agentId","formControlName","agentId",1,"ng-custom-select",3,"readonly","items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"date-display"],[1,"search-display"],[2,"width","100%","overflow-y","scroll","overflow-x","scroll","max-height","500px"],["border","1"],["style","border-top: 1px solid #000;",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"border-top","1px solid #000"],[1,"text-left"],["class","text-right",4,"ngIf"],["class","text-right",4,"ngFor","ngForOf"],[1,"text-right"],[2,"color","gray","text-align","center"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"By Agent Monthly"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return n.getAllReports()}),t._UZ(9,"span",8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return n.generateReportExcel()}),t.TgZ(11,"span",10),t._uU(12,"Generate"),t.qZA(),t.qZA(),t.TgZ(13,"button",7),t.NdJ("click",function(){return n.cancelReport()}),t.TgZ(14,"span",10),t._uU(15,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"form",12),t.TgZ(18,"div",13),t.TgZ(19,"div",14),t.TgZ(20,"div",15),t.TgZ(21,"label",16),t._uU(22,"From Month/Year"),t.qZA(),t.TgZ(23,"div",17),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return n.doValid("FromDate")}),t.qZA(),t._UZ(25,"mat-datepicker-toggle",19),t._UZ(26,"mat-datepicker",20,21),t.qZA(),t.TgZ(28,"button",22),t.NdJ("click",function(){return n.clearDate("FromDate")}),t._uU(29,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",14),t.TgZ(31,"div",15),t.TgZ(32,"label",16),t._uU(33,"To Month/Year"),t.qZA(),t.TgZ(34,"div",17),t.TgZ(35,"input",23),t.NdJ("dateChange",function(){return n.doValid("ToDate")}),t.qZA(),t._UZ(36,"mat-datepicker-toggle",19),t._UZ(37,"mat-datepicker",20,24),t.qZA(),t.TgZ(39,"button",22),t.NdJ("click",function(){return n.clearDate("ToDate")}),t._uU(40,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(41,S,8,3,"div",25),t.YNc(42,H,13,4,"div",25),t.YNc(43,z,13,4,"div",25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(44,ft,21,11,"div",26),t.YNc(45,vt,2,0,"div",27)),2&e){const o=t.MAs(27),r=t.MAs(38);t.xp6(10),t.Q6J("disabled",!n.isData),t.xp6(7),t.Q6J("formGroup",n.createFormGroup),t.xp6(7),t.Q6J("min",n.fromMinDate)("max",n.fromMaxDate)("matDatepicker",o),t.xp6(1),t.Q6J("for",o),t.xp6(10),t.Q6J("min",n.fromMinDate)("max",n.fromMaxDate)("matDatepicker",r),t.xp6(1),t.Q6J("for",r),t.xp6(5),t.Q6J("ngIf",""!=n.createFormGroup.value.fromDate&&""!=n.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=n.createFormGroup.value.fromDate&&""!=n.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=n.createFormGroup.value.fromDate&&""!=n.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",n.isData),t.xp6(1),t.Q6J("ngIf",!n.isData)}},directives:[h._Y,h.JL,h.sg,h.Fj,x.hl,h.JJ,h.u,x.nW,I.R9,x.Mq,_.O5,O.w9,_.sg],pipes:[_.uU,_.JJ],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0 .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border:1px solid #E3E3E3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;position:relative;border:1px solid #E3E3E3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.date-display[_ngcontent-%COMP%]{width:100%;overflow:hidden}.date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;min-width:135px;float:left;display:block}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#e3e3e3;transform:rotate(0);position:absolute;top:0;left:49%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:end;padding:0 5px 0 0}.card[_ngcontent-%COMP%]{overflow:visible!important}"]}),a})();var yt=l(87626),At=l(45598),Dt=l(29018),xt=l(85378),Zt=l(75396),Z=l(44290),Ct=l(57730),Mt=l(92118),Ft=l(47975);let Nt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[_.uU,{provide:Z._A,useClass:Mt.t7,deps:[Z.Ad]},{provide:Z.sG,useValue:Ft.Ny}],imports:[[_.ez,h.u5,O.A0,h.UX,yt.vi,At.fA,xt.M,Zt.X,x.FA,Z.XK,Ct.c,I.lN,Dt.Bz.forChild([{path:"",component:_t}])]]}),a})()}}]);