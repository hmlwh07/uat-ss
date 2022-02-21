"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8214],{88214:(vt,O,c)=>{c.r(O),c.d(O,{ReportByBranchSummaryAiModule:()=>ft});var x=c(86019),f=c(64762),h=c(49133),M=c(53489),t=c(83668),y=c(44522),P=c(11901),S=c(62473),q=c(91691),C=c(18260);const T=`${C.N.apiUrl}/branchSummaryIA`,R=`${C.N.apiUrl}/officeHirearchy`,Y=`${C.N.apiUrl}/agentByOffice`,_=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let w=(()=>{class n extends q.i{constructor(e){super(e,T),this.httpClient=e}getOfficeHirearchy(e,r){const a=new y.LE({fromObject:{parentId:e,typeCode:r}});return this.httpClient.get(R,{params:a})}getAgentOffice(e){const o=new y.LE({fromObject:{officeId:e}});return this.httpClient.get(Y,{params:o})}getAllReportData(e){e.fromDate&&(e.fromDate=this.formatDateYYYY_MM_DD(e.fromDate)),e.toDate&&(e.toDate=this.formatDateYYYY_MM_DD(e.toDate));const r=new y.LE({fromObject:e});return this.httpClient.get(T,{params:r})}getAllAboutBRAM(e){return this.httpClient.get(T+"/"+e+"/asset")}formatDateYYYY_MM_DD(e){var r=new Date(e),o=""+(r.getMonth()+1),a=""+r.getDate(),g=r.getFullYear();return o.length<2&&(o="0"+o),a.length<2&&(a="0"+a),[g,o,a].join("-")}exportExcel(e){const r=e.title,o=e.searchValue,a=e.reportsForExcelHeader,g=e.reportsForExcel,u=e.totalValue;let N=new P.Workbook,v=N.addWorksheet("Sheet1");v.views=[{state:"frozen",xSplit:0,ySplit:4,activeCell:"A1"}],v.mergeCells("A1","B2");let F=v.getCell("A1");if(F.value=r,F.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},F.alignment={vertical:"middle",horizontal:"left"},o.length>0)for(var l=0;l<o.length;l++){let p=null,s=null;if(o[l].fromDate&&(p="F1",s="From Date: "+o[l].fromDate),o[l].toDate&&(p="F2",s="To Date: "+o[l].toDate),o[l].companyName&&(p="L1",s="Company: "+o[l].companyName),o[l].channelName&&(p="M1",s="Channel: "+o[l].channelName),o[l].regionName&&(p="N1",s="Region: "+o[l].regionName),o[l].clusterName&&(p="L2",s="Cluster: "+o[l].clusterName),o[l].branchName&&(p="M2",s="Branch: "+o[l].branchName),o[l].agentName&&(p="N2",s="Agent: "+o[l].agentName),null!=p&&null!=s){let m=v.getCell(p);m.value=s,m.font={name:"Calibri",size:10,bold:!0},m.alignment={vertical:"middle",horizontal:"left"}}}v.addRow([]);let B=0;for(l=0;l<a.length;l++){let s=this.calculateStartPoint(B);B+=1;let m=v.getCell(s);m.value=a[l],m.font={name:"Calibri",size:12,bold:!0},m.alignment={vertical:"middle",horizontal:"center"}}g.forEach(p=>{let s=v.addRow(p),m=s.getCell(1);m&&(m.alignment={vertical:"middle",horizontal:"center"});let d=0;p.forEach(A=>{if(d++,2!=d&&3!=d&&4!=d&&5!=d){let Z=s.getCell(d);Z&&(Z.alignment={vertical:"middle",horizontal:"right"})}if(1==d){let Z=s.getCell(d);Z&&(Z.alignment={vertical:"middle",horizontal:"center"})}})});let G=0;for(l=0;l<u.length;l++){let s=this.calculateTotalPoint(G,g.length);console.log("startTotalIndex =====> ",s),G+=1;let m=v.getCell(s);m.value=u[l],m.font={name:"Calibri",size:12,bold:!0},m.alignment={vertical:"middle",horizontal:"right"}}v.columns.forEach(function(p,s){var m=0;p.eachCell({includeEmpty:!0},function(d){var A=d.value?d.value.toString().length:10;A>m&&(m=A)}),p.width=m<10?10:m}),v.getColumn(1).width=10,N.xlsx.writeBuffer().then(p=>{let s=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});S.saveAs(s,r+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateTotalPoint(e,r){let o=Number(r)+5;return _[e]+o.toString()}calculateStartPoint(e){return _[e]+"4"}calculateEndPoint(e){return _[e]+"4"}calculateDataPoint(e){return _[e]+"6"}calculatePremiumDataPoint(e){return _[e]+"7"}formatDateDDMMYYY(e){var r=new Date(e),o=""+(r.getMonth()+1),a=""+r.getDate(),g=r.getFullYear();return o.length<2&&(o="0"+o),a.length<2&&(a="0"+a),[a,o,g].join("_")}mathRoundTo(e,r){const o=Math.pow(10,r);return(Math.round(e*o)/o).toLocaleString()}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(y.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var D=c(78480),b=c(86031),I=c(57842);function E(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",29),t.TgZ(1,"div",15),t.TgZ(2,"label",16),t._uU(3,"Company"),t.qZA(),t.TgZ(4,"div",30),t.TgZ(5,"ng-select",32),t.NdJ("change",function(o){return t.CHM(e),t.oxw(2).changeOptions(o,"channel")}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(5),t.Q6J("items",e.selectOptions.companies)}}function U(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",13),t.YNc(1,E,6,1,"div",28),t.TgZ(2,"div",29),t.TgZ(3,"div",15),t.TgZ(4,"label",16),t._uU(5,"Channel"),t.qZA(),t.TgZ(6,"div",30),t.TgZ(7,"ng-select",31),t.NdJ("change",function(o){return t.CHM(e),t.oxw().changeOptions(o,"region")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.fromDate&&""!=e.createFormGroup.value.toDate),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.channels.length)("items",e.selectOptions.channels)}}function J(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Region"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",33),t.NdJ("change",function(o){return t.CHM(e),t.oxw().changeOptions(o,"cluster")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Cluster"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",34),t.NdJ("change",function(o){return t.CHM(e),t.oxw().changeOptions(o,"branch")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.regions.length)("items",e.selectOptions.regions),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.cluster.length)("items",e.selectOptions.cluster)}}function V(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Branch"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",35),t.NdJ("change",function(o){return t.CHM(e),t.oxw().changeOptions(o,"agent")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.branches.length)("items",e.selectOptions.branches)}}function Q(n,i){1&n&&t._UZ(0,"br")}function L(n,i){1&n&&t._UZ(0,"br")}function H(n,i){1&n&&t._UZ(0,"br")}function k(n,i){1&n&&t._UZ(0,"br")}function j(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij("From Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.fromDate)," ")}}function z(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij("To Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.toDate),"")}}function X(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Company: ",e.companyName," ")}}function W(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Channel: ",e.channelName," ")}}function K(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Region: ",e.regionName," ")}}function $(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,X,2,1,"span",38),t.YNc(2,W,2,1,"span",38),t.YNc(3,K,2,1,"span",38),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.channelId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.regionId)}}function tt(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Cluster: ",e.clusterName," ")}}function et(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Branch: ",e.branchName,"")}}function ot(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Agent: ",e.agentName," ")}}function rt(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,tt,2,1,"span",38),t.YNc(2,et,2,1,"span",38),t.YNc(3,ot,2,1,"span",38),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.branchId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.agentId)}}function nt(n,i){if(1&n&&(t.TgZ(0,"tr",44),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.qZA()),2&n){const e=i.$implicit;t.xp6(2),t.Oqu(e.srNo),t.xp6(2),t.Oqu(e.cluster),t.xp6(2),t.Oqu(e.activeAgents),t.xp6(2),t.Oqu(e.noOfPolicy),t.xp6(2),t.Oqu(e.totalPreminum)}}function at(n,i){if(1&n&&(t.TgZ(0,"tr",44),t._UZ(1,"td"),t.TgZ(2,"td"),t._uU(3,"Total"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.qZA()),2&n){const e=i.$implicit;t.xp6(5),t.Oqu(e.totalActiveAgents),t.xp6(2),t.Oqu(e.totalNoOfPolicy),t.xp6(2),t.Oqu(e.totalPreminum)}}function it(n,i){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",36),t.TgZ(3,"div",37),t.YNc(4,Q,1,0,"br",38),t.YNc(5,L,1,0,"br",38),t.TgZ(6,"h3",39),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",37),t.YNc(9,H,1,0,"br",38),t.YNc(10,k,1,0,"br",38),t.TgZ(11,"div"),t.YNc(12,j,2,1,"span",38),t._uU(13," \xa0 \xa0 \xa0 \xa0 \xa0 "),t.YNc(14,z,2,1,"span",38),t.qZA(),t.qZA(),t.TgZ(15,"div",40),t.YNc(16,$,4,3,"div",38),t.YNc(17,rt,4,3,"div",38),t.qZA(),t.qZA(),t.TgZ(18,"div",41),t.TgZ(19,"table",42),t.TgZ(20,"tr"),t.TgZ(21,"th"),t._uU(22,"Sr. No."),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Branch"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"#Active Agents"),t.qZA(),t.TgZ(27,"th"),t._uU(28,"#No of Ploicies"),t.qZA(),t.TgZ(29,"th"),t._uU(30,"#Premium"),t.qZA(),t.qZA(),t.YNc(31,nt,11,5,"tr",43),t.YNc(32,at,10,3,"tr",43),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.fromDate),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.toDate),t.xp6(2),t.Q6J("ngIf",""!=e.createFormGroup.value.companyId||""!=e.createFormGroup.value.channelId||""!=e.createFormGroup.value.regionId),t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.clusterId||""!=e.createFormGroup.value.branchId||""!=e.createFormGroup.value.agentId),t.xp6(14),t.Q6J("ngForOf",e.reports),t.xp6(1),t.Q6J("ngForOf",e.totalDataList)}}function lt(n,i){1&n&&(t.TgZ(0,"div",45),t._uU(1," There is no data "),t.qZA())}let st=(()=>{class n{constructor(e,r){this.cdf=e,this.exportService=r,this.title="By Branch Summary IA",this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[{id:1,companyName:"Company 1"},{id:2,companyName:"Company 2"}],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.reportsForExcel=[],this.isData=!1,this.totalDataList=[]}ngOnInit(){this.loadForm(),this.getOfficeHirearchy()}getOfficeHirearchy(){return(0,f.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(e=>(0,f.mG)(this,void 0,void 0,function*(){e&&(this.selectOptions.companies=e)}))})}getAllReports(){return(0,f.mG)(this,void 0,void 0,function*(){let e=0,r=0,o=0;if(this.totalDataList=[],this.createFormGroup.invalid)(0,M.w)(this.createFormGroup);else{this.reports=[];let a=0;yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(g=>(0,f.mG)(this,void 0,void 0,function*(){if(g.length>0){this.isData=!0,this.reports=g;for(var u=0;u<this.reports.length;u++)a++,this.reports[u].srNo=a,e+=this.reports[u].activeAgents,r+=this.reports[u].noOfPolicy,o+=this.reports[u].totalPreminum,a==this.reports.length&&this.totalDataList.push({totalActiveAgents:this.mathRoundTo(e,2),totalNoOfPolicy:this.mathRoundTo(r,2),totalPreminum:this.mathRoundTo(o,2)});for(u=0;u<this.reports.length;u++)this.reports[u].activeAgents=this.mathRoundTo(this.reports[u].activeAgents,2),this.reports[u].noOfPolicy=this.mathRoundTo(this.reports[u].noOfPolicy,2),this.reports[u].totalPreminum=this.mathRoundTo(this.reports[u].totalPreminum,2)}else this.isData=!1}))}console.log("reports",this.reports),this.cdf.detectChanges()})}generateReportExcel(){this.reportsForExcel=[];let e=[];console.log("generateReportExcel",this.reports);let r=0;for(var o=0;o<this.reports.length;o++)r+=1,this.reportsForExcel.push([r,this.reports[o].cluster,this.reports[o].activeAgents,this.reports[o].noOfPolicy,this.reports[o].totalPreminum]);for(o=0;o<this.totalDataList.length;o++)e.push(null),e.push("Total"),e.push(this.totalDataList[o].totalActiveAgents),e.push(this.totalDataList[o].totalNoOfPolicy),e.push(this.totalDataList[o].totalPreminum);let a="",g="";this.createFormGroup.value.fromDate&&(a=this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)),this.createFormGroup.value.toDate&&(g=this.formatDateDDMMYYY(this.createFormGroup.value.toDate)),this.exportService.exportExcel({title:this.title+" Report",searchValue:[{fromDate:a},{toDate:g},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],reportsForExcelHeader:["Sr. No.","Branch","#Active Agents","#No of Ploicies","#Premium"],reportsForExcel:this.reportsForExcel,totalValue:e})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.totalDataList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.cdf.detectChanges()}changeOptions(e,r){return(0,f.mG)(this,void 0,void 0,function*(){"company"==r&&(e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(o=>(0,f.mG)(this,void 0,void 0,function*(){console.log("officeHirearchy",o),o&&(this.selectOptions.channels=o)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==r&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"02").toPromise().then(o=>(0,f.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.channels=o)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==r&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.channelName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"03").toPromise().then(o=>(0,f.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.regions=o)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==r&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.regionName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"04").toPromise().then(o=>(0,f.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.cluster=o)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==r&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.clusterName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"05").toPromise().then(o=>(0,f.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.branches=o)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==r&&(e?(this.branchName=e.name,yield this.exportService.getAgentOffice(11).toPromise().then(o=>(0,f.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.agents=o)}))):(this.branchName=null,this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),console.log("type",r),console.log("ev",e),"office"==r&&(e?this.agentName=e.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new h.cw({fromDate:new h.NI("",[h.kI.required,h.kI.nullValidator]),toDate:new h.NI("",[h.kI.required,h.kI.nullValidator]),agentId:new h.NI(""),companyId:new h.NI(""),channelId:new h.NI(""),regionId:new h.NI(""),clusterId:new h.NI(""),branchId:new h.NI("")})}isControlValid(e){const r=this.createFormGroup.controls[e];return r.valid&&(r.dirty||r.touched)}isControlInvalid(e){const r=this.createFormGroup.controls[e];return r.invalid&&(r.dirty||r.touched)}controlHasError(e,r){const o=this.createFormGroup.controls[r];return o.hasError(e)&&(o.dirty||o.touched)}isControlTouched(e){const r=this.createFormGroup.controls[e];return r.dirty||r.touched}doValid(e){if(console.log("doValid",e),"FromDate"==e){this.fromMinDate=new Date(this.createFormGroup.value.fromDate),this.fromMaxDate=new Date((new Date).setFullYear(new Date(this.fromMinDate).getFullYear()+1));let r=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=r&&1!=r&&this.createFormGroup.controls.toDate.setValue("")}if("ToDate"==e){this.fromMaxDate=new Date(this.createFormGroup.value.toDate),this.fromMinDate=new Date((new Date).setFullYear(new Date(this.fromMaxDate).getFullYear()-1));let r=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=r&&1!=r&&this.createFormGroup.controls.fromDate.setValue("")}this.cdf.detectChanges()}clearDate(e){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==e&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==e&&this.createFormGroup.controls.toDate.setValue(""),this.isData=!1,this.reports=[],this.totalDataList=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(e){var r=new Date(e),o=""+(r.getMonth()+1),a=""+r.getDate(),g=r.getFullYear();return o.length<2&&(o="0"+o),a.length<2&&(a="0"+a),[a,o,g].join("/")}mathRoundTo(e,r){const o=Math.pow(10,r);return(Math.round(e*o)/o).toLocaleString()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(w))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-report-by-branch-summary-ai"]],decls:46,vars:15,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","regionId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","clusterId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","branchId",1,"ng-custom-select",3,"readonly","items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"search-display"],[2,"width","100%","overflow-y","hidden","overflow-x","scroll"],["border","1"],["class","data",4,"ngFor","ngForOf"],[1,"data"],[2,"color","gray","text-align","center"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"By Branch Summary IA"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return r.getAllReports()}),t._UZ(9,"span",8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return r.generateReportExcel()}),t.TgZ(11,"span",10),t._uU(12,"Generate"),t.qZA(),t.qZA(),t.TgZ(13,"button",7),t.NdJ("click",function(){return r.cancelReport()}),t.TgZ(14,"span",10),t._uU(15,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"form",12),t.TgZ(18,"div",13),t.TgZ(19,"div",14),t.TgZ(20,"div",15),t.TgZ(21,"label",16),t._uU(22,"From Date"),t.qZA(),t.TgZ(23,"div",17),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return r.doValid("FromDate")}),t.qZA(),t._UZ(25,"mat-datepicker-toggle",19),t._UZ(26,"mat-datepicker",20,21),t.qZA(),t.TgZ(28,"button",22),t.NdJ("click",function(){return r.clearDate("FromDate")}),t._uU(29,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",14),t.TgZ(31,"div",15),t.TgZ(32,"label",16),t._uU(33,"To Date"),t.qZA(),t.TgZ(34,"div",17),t.TgZ(35,"input",23),t.NdJ("dateChange",function(){return r.doValid("ToDate")}),t.qZA(),t._UZ(36,"mat-datepicker-toggle",19),t._UZ(37,"mat-datepicker",20,24),t.qZA(),t.TgZ(39,"button",22),t.NdJ("click",function(){return r.clearDate("ToDate")}),t._uU(40,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(41,U,8,3,"div",25),t.YNc(42,J,13,4,"div",25),t.YNc(43,V,7,2,"div",25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(44,it,33,11,"div",26),t.YNc(45,lt,2,0,"div",27)),2&e){const o=t.MAs(27),a=t.MAs(38);t.xp6(10),t.Q6J("disabled",0==r.reports.length),t.xp6(7),t.Q6J("formGroup",r.createFormGroup),t.xp6(7),t.Q6J("min",r.fromMinDate)("max",r.fromMaxDate)("matDatepicker",o),t.xp6(1),t.Q6J("for",o),t.xp6(10),t.Q6J("min",r.fromMinDate)("max",r.fromMaxDate)("matDatepicker",a),t.xp6(1),t.Q6J("for",a),t.xp6(5),t.Q6J("ngIf",""!=r.createFormGroup.value.fromDate&&""!=r.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=r.createFormGroup.value.fromDate&&""!=r.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=r.createFormGroup.value.fromDate&&""!=r.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",r.reports.length>0),t.xp6(1),t.Q6J("ngIf",0==r.reports.length)}},directives:[h._Y,h.JL,h.sg,h.Fj,D.hl,h.JJ,h.u,D.nW,b.R9,D.Mq,x.O5,I.w9,x.sg],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0 .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border-collapse:unset}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;position:relative;border-collapse:unset}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#000;transform:rotate(0);position:absolute;top:0;left:49%}.data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){text-align:left}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}"]}),n})();var ct=c(87626),mt=c(45598),ht=c(29018),ut=c(85378),pt=c(75396),dt=c(44290),gt=c(57730);let ft=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[x.ez,h.u5,I.A0,h.UX,ct.vi,mt.fA,ut.M,pt.X,D.FA,dt.XK,gt.c,b.lN,ht.Bz.forChild([{path:"",component:st}])]]}),n})()}}]);