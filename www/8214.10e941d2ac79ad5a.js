"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8214],{88214:(Ct,b,s)=>{s.r(b),s.d(b,{ReportByBranchSummaryAiModule:()=>Zt});var D=s(86019),v=s(64762),p=s(49133),N=s(92070),w=s(53489),t=s(83668),x=s(44522),R=s(11901),q=s(62473),E=s(91691),F=s(18260),U=s(67198),V=s(71704),J=s(49875);const G=`${F.N.apiUrl}/branchSummaryIA`,L=`${F.N.apiUrl}/officeHirearchy`,Q=`${F.N.apiUrl}/agentByOffice`,_=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let H=(()=>{class a extends E.i{constructor(e,r,o,n){super(e,G),this.httpClient=e,this.authService=r,this.platform=o,this.attachmentDownloadService=n}getOfficeHirearchy(e,r){const n=new x.LE({fromObject:{parentId:e,typeCode:r}});return this.httpClient.get(L,{params:n})}getAgentOffice(e){const o=new x.LE({fromObject:{officeId:e}});return this.httpClient.get(Q,{params:o})}getAllReportData(e){e.fromDate&&(e.fromDate=this.formatDateYYYY_MM_DD(e.fromDate)),e.toDate&&(e.toDate=this.formatDateYYYY_MM_DD(e.toDate));const r=new x.LE({fromObject:e});return this.httpClient.get(G,{params:r})}getAllAboutBRAM(e){return this.httpClient.get(G+"/"+e+"/asset")}formatDateYYYY_MM_DD(e){var r=new Date(e),o=""+(r.getMonth()+1),n=""+r.getDate(),u=r.getFullYear();return o.length<2&&(o="0"+o),n.length<2&&(n="0"+n),[u,o,n].join("-")}exportExcel(e){const r=e.title,o=e.searchValue,n=e.reportsForExcelHeader,u=e.reportsForExcel,i=e.totalValue;let Y=new R.Workbook,f=Y.addWorksheet("Sheet1");f.views=[{state:"frozen",xSplit:0,ySplit:4,activeCell:"A1"}],f.mergeCells("A1","B2");let O=f.getCell("A1");O.value=r,O.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},O.alignment={vertical:"middle",horizontal:"left"},f.mergeCells("G1","G1");let T=f.getCell("G1");T.value="Reported Date: "+this.formatReportedDate(new Date),T.font={name:"Calibri",size:10,bold:!0},T.alignment={vertical:"middle",horizontal:"left"},f.mergeCells("G2","G2");let I=f.getCell("G2");if(I.value="Reported By: "+this.authService.currentUserValue.firstName+this.authService.currentUserValue.lastName,I.font={name:"Calibri",size:10,bold:!0},I.alignment={vertical:"middle",horizontal:"left"},o.length>0)for(var c=0;c<o.length;c++){let d=null,m=null;if(o[c].fromDate&&(d="F1",m="From Date: "+o[c].fromDate),o[c].toDate&&(d="F2",m="To Date: "+o[c].toDate),o[c].companyName&&(d="L1",m="Company: "+o[c].companyName),o[c].channelName&&(d="M1",m="Channel: "+o[c].channelName),o[c].regionName&&(d="N1",m="Region: "+o[c].regionName),o[c].clusterName&&(d="L2",m="Cluster: "+o[c].clusterName),o[c].branchName&&(d="M2",m="Branch: "+o[c].branchName),o[c].agentName&&(d="N2",m="Agent: "+o[c].agentName),null!=d&&null!=m){let h=f.getCell(d);h.value=m,h.font={name:"Calibri",size:10,bold:!0},h.alignment={vertical:"middle",horizontal:"left"}}}f.addRow([]);let P=0;for(c=0;c<n.length;c++){let m=this.calculateStartPoint(P);P+=1;let h=f.getCell(m);h.value=n[c],h.font={name:"Calibri",size:12,bold:!0},h.alignment={vertical:"middle",horizontal:"center"}}u.forEach(d=>{let m=f.addRow(d),h=m.getCell(1);h&&(h.alignment={vertical:"middle",horizontal:"center"});let g=0;d.forEach(y=>{if(g++,2!=g&&3!=g&&4!=g&&5!=g){let A=m.getCell(g);A&&(A.alignment={vertical:"middle",horizontal:"right"})}if(1==g){let A=m.getCell(g);A&&(A.alignment={vertical:"middle",horizontal:"center"})}g>2&&(m.getCell(g).numFmt="#,##0.00_);(#,##0.00)")})});let S=0;for(c=0;c<i.length;c++){let m=this.calculateTotalPoint(S,u.length);S+=1;let h=f.getCell(m);h.value=i[c],h.font={name:"Calibri",size:12,bold:!0},h.alignment={vertical:"middle",horizontal:"right"},c>1&&(h.numFmt="#,##0.00_);(#,##0.00)")}f.columns.forEach(function(d,m){var h=0;d.eachCell({includeEmpty:!0},function(g){var y=g.value?g.value.toString().length:10;y>h&&(h=y)}),d.width=h<10?10:h}),f.getColumn(1).width=10,Y.xlsx.writeBuffer().then(d=>{let m=new Blob([d],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});this.platform.is("android")||this.platform.is("ios")?this.attachmentDownloadService.mobileDownload(r+"_"+this.formatDateDDMMYYY(new Date)+".xlsx",m):q.saveAs(m,r+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateTotalPoint(e,r){let o=Number(r)+5;return _[e]+o.toString()}calculateStartPoint(e){return _[e]+"4"}calculateEndPoint(e){return _[e]+"4"}calculateDataPoint(e){return _[e]+"6"}calculatePremiumDataPoint(e){return _[e]+"7"}formatDateDDMMYYY(e){var r=new Date(e),o=""+(r.getMonth()+1),n=""+r.getDate(),u=r.getFullYear();return o.length<2&&(o="0"+o),n.length<2&&(n="0"+n),[n,o,u].join("_")}mathRoundTo(e,r){const o=Math.pow(10,r);return(Math.round(e*o)/o).toLocaleString()}formatReportedDate(e){var r=new Date(e),o=""+(r.getMonth()+1),n=""+r.getDate(),u=r.getFullYear();return o.length<2&&(o="0"+o),n.length<2&&(n="0"+n),[n,o,u].join("/")}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(x.eN),t.LFG(U.e8),t.LFG(V.t4),t.LFG(J.Ys))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var Z=s(78480),B=s(86031),M=s(57842);function j(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"div",29),t.TgZ(1,"div",15),t.TgZ(2,"label",16),t._uU(3,"Company"),t.qZA(),t.TgZ(4,"div",30),t.TgZ(5,"ng-select",32),t.NdJ("change",function(o){return t.CHM(e),t.oxw(2).changeOptions(o,"channel")}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw(2);t.xp6(5),t.Q6J("items",e.selectOptions.companies)}}function z(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.YNc(1,j,6,1,"div",28),t.TgZ(2,"div",29),t.TgZ(3,"div",15),t.TgZ(4,"label",16),t._uU(5,"Channel"),t.qZA(),t.TgZ(6,"div",30),t.TgZ(7,"ng-select",31),t.NdJ("change",function(o){return t.CHM(e),t.oxw().changeOptions(o,"region")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.fromDate&&""!=e.createFormGroup.value.toDate),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.channels.length)("items",e.selectOptions.channels)}}function k(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Region"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",33),t.NdJ("change",function(o){return t.CHM(e),t.oxw().changeOptions(o,"cluster")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Cluster"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",34),t.NdJ("change",function(o){return t.CHM(e),t.oxw().changeOptions(o,"branch")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.regions.length)("items",e.selectOptions.regions),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.cluster.length)("items",e.selectOptions.cluster)}}function X(a,l){1&a&&t._UZ(0,"br")}function W(a,l){1&a&&t._UZ(0,"br")}function K(a,l){1&a&&t._UZ(0,"br")}function $(a,l){1&a&&t._UZ(0,"br")}function tt(a,l){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.hij("From Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.fromDate)," ")}}function et(a,l){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.hij("To Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.toDate),"")}}function ot(a,l){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Company: ",e.companyName," ")}}function rt(a,l){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Channel: ",e.channelName," ")}}function at(a,l){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Region: ",e.regionName," ")}}function nt(a,l){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,ot,2,1,"span",37),t.YNc(2,rt,2,1,"span",37),t.YNc(3,at,2,1,"span",37),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.channelId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.regionId)}}function it(a,l){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Cluster: ",e.clusterName," ")}}function lt(a,l){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Branch: ",e.branchName,"")}}function st(a,l){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Agent: ",e.agentName," ")}}function ct(a,l){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,it,2,1,"span",37),t.YNc(2,lt,2,1,"span",37),t.YNc(3,st,2,1,"span",37),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.branchId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.agentId)}}function mt(a,l){if(1&a&&(t.TgZ(0,"tr",45),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",46),t._uU(4),t.qZA(),t.TgZ(5,"td",47),t._uU(6),t.ALo(7,"number"),t.qZA(),t.TgZ(8,"td",47),t._uU(9),t.ALo(10,"number"),t.qZA(),t.TgZ(11,"td",47),t._uU(12),t.ALo(13,"number"),t.qZA(),t.qZA()),2&a){const e=l.$implicit;t.xp6(2),t.Oqu(e.srNo),t.xp6(2),t.Oqu(e.cluster),t.xp6(2),t.Oqu(t.xi3(7,5,e.activeAgents||0,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(10,8,e.noOfPolicy||0,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(13,11,e.totalPreminum||0,"1.2-2"))}}function ut(a,l){if(1&a&&(t.TgZ(0,"tr",45),t._UZ(1,"td"),t.TgZ(2,"td"),t._uU(3,"Total"),t.qZA(),t.TgZ(4,"td",47),t._uU(5),t.ALo(6,"number"),t.qZA(),t.TgZ(7,"td",47),t._uU(8),t.ALo(9,"number"),t.qZA(),t.TgZ(10,"td",47),t._uU(11),t.ALo(12,"number"),t.qZA(),t.qZA()),2&a){const e=l.$implicit;t.xp6(5),t.Oqu(t.xi3(6,3,e.totalActiveAgents||0,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(9,6,e.totalNoOfPolicy||0,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(12,9,e.totalPreminum||0,"1.2-2"))}}function ht(a,l){if(1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",35),t.TgZ(3,"div",36),t.YNc(4,X,1,0,"br",37),t.YNc(5,W,1,0,"br",37),t.TgZ(6,"h3",38),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",36),t.YNc(9,K,1,0,"br",37),t.YNc(10,$,1,0,"br",37),t.TgZ(11,"div",39),t.YNc(12,tt,2,1,"span",37),t.YNc(13,et,2,1,"span",37),t.qZA(),t.qZA(),t.TgZ(14,"div",40),t.YNc(15,nt,4,3,"div",37),t.YNc(16,ct,4,3,"div",37),t.qZA(),t.qZA(),t.TgZ(17,"div",41),t.TgZ(18,"table",42),t.TgZ(19,"tr"),t.TgZ(20,"th",43),t._uU(21,"Sr. No."),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Branch"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"#Active Agents"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"#No of Policies"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"#Premium"),t.qZA(),t.qZA(),t.YNc(30,mt,14,14,"tr",44),t.YNc(31,ut,13,12,"tr",44),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.fromDate),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.toDate),t.xp6(2),t.Q6J("ngIf",""!=e.createFormGroup.value.companyId||""!=e.createFormGroup.value.channelId||""!=e.createFormGroup.value.regionId),t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.clusterId||""!=e.createFormGroup.value.branchId||""!=e.createFormGroup.value.agentId),t.xp6(14),t.Q6J("ngForOf",e.reports),t.xp6(1),t.Q6J("ngForOf",e.totalDataList)}}function pt(a,l){1&a&&(t.TgZ(0,"div",48),t._uU(1," There is no data "),t.qZA())}let dt=(()=>{class a{constructor(e,r){this.cdf=e,this.exportService=r,this.title="By Branch Summary IA",this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[{id:1,companyName:"Company 1"},{id:2,companyName:"Company 2"}],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.reportsForExcel=[],this.isData=!1,this.totalDataList=[]}ngOnInit(){this.loadForm(),this.getOfficeHirearchy(),this.fromMinDate=null,this.fromMaxDate=null}getOfficeHirearchy(){return(0,v.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(e=>(0,v.mG)(this,void 0,void 0,function*(){e&&(this.selectOptions.companies=e)}))})}getAllReports(){return(0,v.mG)(this,void 0,void 0,function*(){let e=0,r=0,o=0;if(this.totalDataList=[],this.createFormGroup.invalid)(0,w.w)(this.createFormGroup);else{this.reports=[];let n=0;yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(u=>(0,v.mG)(this,void 0,void 0,function*(){if(u.length>0){this.isData=!0,this.reports=u;for(var i=0;i<this.reports.length;i++)n++,this.reports[i].srNo=n,e+=this.reports[i].activeAgents,r+=this.reports[i].noOfPolicy,o+=this.reports[i].totalPreminum,n==this.reports.length&&this.totalDataList.push({totalActiveAgents:e,totalNoOfPolicy:r,totalPreminum:o});for(i=0;i<this.reports.length;i++)this.reports[i].activeAgents=this.reports[i].activeAgents,this.reports[i].noOfPolicy=this.reports[i].noOfPolicy,this.reports[i].totalPreminum=this.reports[i].totalPreminum}else this.isData=!1}))}this.cdf.detectChanges()})}generateReportExcel(){this.reportsForExcel=[];let e=[],r=0;for(var o=0;o<this.reports.length;o++)r+=1,this.reportsForExcel.push([r,this.reports[o].cluster,this.reports[o].activeAgents,this.reports[o].noOfPolicy||0,this.reports[o].totalPreminum||0]);for(o=0;o<this.totalDataList.length;o++)e.push(null),e.push("Total"),e.push(this.totalDataList[o].totalActiveAgents||0),e.push(this.totalDataList[o].totalNoOfPolicy||0),e.push(this.totalDataList[o].totalPreminum||0);let n="",u="";this.createFormGroup.value.fromDate&&(n=this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)),this.createFormGroup.value.toDate&&(u=this.formatDateDDMMYYY(this.createFormGroup.value.toDate)),this.exportService.exportExcel({title:this.title+" Report",searchValue:[{fromDate:n},{toDate:u},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],reportsForExcelHeader:["Sr. No.","Branch","#Active Agents","#No of Policies","#Premium"],reportsForExcel:this.reportsForExcel,totalValue:e})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.totalDataList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.fromMinDate=null,this.fromMaxDate=null,this.cdf.detectChanges()}changeOptions(e,r){return(0,v.mG)(this,void 0,void 0,function*(){"company"==r&&(e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(o=>(0,v.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.channels=o)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==r&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"02").toPromise().then(o=>(0,v.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.channels=o)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==r&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.channelName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"03").toPromise().then(o=>(0,v.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.regions=o)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==r&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.regionName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"04").toPromise().then(o=>(0,v.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.cluster=o)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==r&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.clusterName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"05").toPromise().then(o=>(0,v.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.branches=o)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==r&&(this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),e?(this.branchName=e.name,yield this.exportService.getAgentOffice(e.id).toPromise().then(o=>(0,v.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.agents=o)}))):(this.branchName=null,this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"office"==r&&(e?this.agentName=e.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new p.cw({fromDate:new p.NI("",[p.kI.required,p.kI.nullValidator]),toDate:new p.NI("",[p.kI.required,p.kI.nullValidator]),agentId:new p.NI(""),companyId:new p.NI(""),channelId:new p.NI(""),regionId:new p.NI(""),clusterId:new p.NI(""),branchId:new p.NI("")})}isControlValid(e){const r=this.createFormGroup.controls[e];return r.valid&&(r.dirty||r.touched)}isControlInvalid(e){const r=this.createFormGroup.controls[e];return r.invalid&&(r.dirty||r.touched)}controlHasError(e,r){const o=this.createFormGroup.controls[r];return o.hasError(e)&&(o.dirty||o.touched)}isControlTouched(e){const r=this.createFormGroup.controls[e];return r.dirty||r.touched}doValid(e){if("FromDate"==e){if(this.createFormGroup.controls.fromDate.value){let i=N(this.createFormGroup.controls.fromDate.value).add(0,"years");this.toMaxDate={year:parseInt(i.format("YYYY")),month:parseInt(i.format("M")),day:parseInt(i.format("D"))},this.createFormGroup.controls.fromDate.setValue(i.format("YYYY-MM-DD"))}var r=new Date(this.createFormGroup.value.fromDate);r.setFullYear(r.getFullYear()+1),r.setDate(r.getDate()-1),this.fromMinDate=this.createFormGroup.value.fromDate,this.fromMaxDate=r;let u=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=u&&1!=u&&this.createFormGroup.controls.toDate.setValue("")}if("ToDate"==e){if(this.createFormGroup.controls.toDate.value){let i=N(this.createFormGroup.controls.toDate.value).add(0,"years");this.toMaxDate={year:parseInt(i.format("YYYY")),month:parseInt(i.format("M")),day:parseInt(i.format("D"))},this.createFormGroup.controls.toDate.setValue(i.format("YYYY-MM-DD"))}var o=new Date(this.createFormGroup.value.toDate);o.setFullYear(o.getFullYear()-1),o.setDate(o.getDate()+1),this.fromMinDate=o,this.createFormGroup.value.toDate||(this.fromMaxDate=this.createFormGroup.value.toDate);let u=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=u&&1!=u&&this.createFormGroup.controls.fromDate.setValue(""),1==u&&(new Date(this.createFormGroup.value.toDate).getMonth()>new Date(this.createFormGroup.value.fromDate).getMonth()&&this.createFormGroup.controls.fromDate.setValue(""),new Date(this.createFormGroup.value.toDate).getMonth()==new Date(this.createFormGroup.value.fromDate).getMonth()&&new Date(this.createFormGroup.value.toDate).getDate()>=new Date(this.createFormGroup.value.fromDate).getDate()&&this.createFormGroup.controls.fromDate.setValue(""))}this.cdf.detectChanges()}clearDate(e){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==e&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==e&&this.createFormGroup.controls.toDate.setValue(""),this.isData=!1,this.reports=[],this.totalDataList=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(e){var r=new Date(e),o=""+(r.getMonth()+1),n=""+r.getDate(),u=r.getFullYear();return o.length<2&&(o="0"+o),n.length<2&&(n="0"+n),[n,o,u].join("/")}mathRoundTo(e,r){const o=Math.pow(10,r);return(Math.round(e*o)/o).toLocaleString()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.sBO),t.Y36(H))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-report-by-branch-summary-ai"]],decls:45,vars:14,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool","search-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","regionId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","clusterId",1,"ng-custom-select",3,"readonly","items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"date-display"],[1,"search-display"],[2,"width","100%","overflow-y","scroll","overflow-x","scroll","max-height","500px"],["border","1"],[2,"min-width","50px"],["class","data",4,"ngFor","ngForOf"],[1,"data"],[1,"text-left"],[1,"text-right"],[2,"color","gray","text-align","center"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"By Branch Summary IA"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return r.getAllReports()}),t._UZ(9,"span",8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return r.generateReportExcel()}),t.TgZ(11,"span",10),t._uU(12,"Generate"),t.qZA(),t.qZA(),t.TgZ(13,"button",7),t.NdJ("click",function(){return r.cancelReport()}),t.TgZ(14,"span",10),t._uU(15,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"form",12),t.TgZ(18,"div",13),t.TgZ(19,"div",14),t.TgZ(20,"div",15),t.TgZ(21,"label",16),t._uU(22,"From Date"),t.qZA(),t.TgZ(23,"div",17),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return r.doValid("FromDate")}),t.qZA(),t._UZ(25,"mat-datepicker-toggle",19),t._UZ(26,"mat-datepicker",20,21),t.qZA(),t.TgZ(28,"button",22),t.NdJ("click",function(){return r.clearDate("FromDate")}),t._uU(29,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",14),t.TgZ(31,"div",15),t.TgZ(32,"label",16),t._uU(33,"To Date"),t.qZA(),t.TgZ(34,"div",17),t.TgZ(35,"input",23),t.NdJ("dateChange",function(){return r.doValid("ToDate")}),t.qZA(),t._UZ(36,"mat-datepicker-toggle",19),t._UZ(37,"mat-datepicker",20,24),t.qZA(),t.TgZ(39,"button",22),t.NdJ("click",function(){return r.clearDate("ToDate")}),t._uU(40,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(41,z,8,3,"div",25),t.YNc(42,k,13,4,"div",25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(43,ht,32,11,"div",26),t.YNc(44,pt,2,0,"div",27)),2&e){const o=t.MAs(27),n=t.MAs(38);t.xp6(10),t.Q6J("disabled",0==r.reports.length),t.xp6(7),t.Q6J("formGroup",r.createFormGroup),t.xp6(7),t.Q6J("min",r.fromMinDate)("max",r.fromMaxDate)("matDatepicker",o),t.xp6(1),t.Q6J("for",o),t.xp6(10),t.Q6J("min",r.fromMinDate)("max",r.fromMaxDate)("matDatepicker",n),t.xp6(1),t.Q6J("for",n),t.xp6(5),t.Q6J("ngIf",""!=r.createFormGroup.value.fromDate&&""!=r.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=r.createFormGroup.value.fromDate&&""!=r.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",r.reports.length>0),t.xp6(1),t.Q6J("ngIf",0==r.reports.length)}},directives:[p._Y,p.JL,p.sg,p.Fj,Z.hl,p.JJ,p.u,Z.nW,B.R9,Z.Mq,D.O5,M.w9,D.sg],pipes:[D.JJ],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0 .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;position:relative;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.date-display[_ngcontent-%COMP%]{width:100%;overflow:hidden}.date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;min-width:135px;float:left;display:block}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#e3e3e3;transform:rotate(0);position:absolute;top:0;left:49%}.data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){text-align:left}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:end;padding:0 5px 0 0}"]}),a})();var gt=s(87626),ft=s(45598),vt=s(4205),At=s(85993),Dt=s(75396),C=s(44290),_t=s(57730),yt=s(92118),xt=s(47975);let Zt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[D.uU,{provide:C._A,useClass:yt.t7,deps:[C.Ad]},{provide:C.sG,useValue:xt.Gs}],imports:[[D.ez,p.u5,M.A0,p.UX,gt.vi,ft.fA,At.M,Dt.X,Z.FA,C.XK,_t.c,B.lN,vt.Bz.forChild([{path:"",component:dt}])]]}),a})()}}]);