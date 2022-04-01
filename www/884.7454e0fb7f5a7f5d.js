"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[884],{80884:(Ot,I,l)=>{l.r(I),l.d(I,{ReportByProductBranchPremiumModule:()=>yt});var x=l(86019),v=l(64762),h=l(49133),N=l(92070),w=l(53489),t=l(83668),P=l(44522),R=l(11901),q=l(62473),J=l(91691),O=l(18260),E=l(67198),V=l(71704),U=l(49875);const A=`${O.N.apiUrl}/premiumProductBranch`,S=`${O.N.apiUrl}/officeHirearchy`,Q=`${O.N.apiUrl}/agentByOffice`,C=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let H=(()=>{class a extends J.i{constructor(e,o,r,n){super(e,A),this.httpClient=e,this.authService=o,this.platform=r,this.attachmentDownloadService=n}getOfficeHirearchy(e,o){const n=new P.LE({fromObject:{parentId:e,typeCode:o}});return this.httpClient.get(S,{params:n})}getAgentOffice(e){const r=new P.LE({fromObject:{officeId:e}});return this.httpClient.get(Q,{params:r})}getAllReportData(e){e.fromDate&&(e.fromDate=this.formatDateYYYY_MM_DD(e.fromDate)),e.toDate&&(e.toDate=this.formatDateYYYY_MM_DD(e.toDate));const o=new P.LE({fromObject:e});return this.httpClient.get(A,{params:o})}getAllAboutBRAM(e){return this.httpClient.get(A+"/"+e+"/asset")}formatDateYYYY_MM_DD(e){var o=new Date(e),r=""+(o.getMonth()+1),n=""+o.getDate(),u=o.getFullYear();return r.length<2&&(r="0"+r),n.length<2&&(n="0"+n),[u,r,n].join("-")}exportExcel(e){const o=e.title,r=e.searchValue,n=e.productsHeader,u=e.branchDataForExcel,f=e.totalValue;let D=new R.Workbook,p=D.addWorksheet("Sheet1");p.views=[{state:"frozen",xSplit:2,ySplit:4,activeCell:"A1"}],p.mergeCells("A1","B2");let G=p.getCell("A1");G.value=o,G.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},G.alignment={vertical:"middle",horizontal:"left"},p.mergeCells("G1","G1");let y=p.getCell("G1");y.value="Reported Date: "+this.formatReportedDate(new Date),y.font={name:"Calibri",size:10,bold:!0},y.alignment={vertical:"middle",horizontal:"left"},p.mergeCells("G2","G2");let T=p.getCell("G2");if(T.value="Reported By: "+this.authService.currentUserValue.firstName+this.authService.currentUserValue.lastName,T.font={name:"Calibri",size:10,bold:!0},T.alignment={vertical:"middle",horizontal:"left"},r.length>0)for(var s=0;s<r.length;s++){let d=null,c=null;if(r[s].fromDate&&(d="F1",c="From Date: "+r[s].fromDate),r[s].toDate&&(d="F2",c="To Date: "+r[s].toDate),r[s].companyName&&(d="L1",c="Company: "+r[s].companyName),r[s].channelName&&(d="M1",c="Channel: "+r[s].channelName),r[s].regionName&&(d="N1",c="Region: "+r[s].regionName),r[s].clusterName&&(d="L2",c="Cluster: "+r[s].clusterName),r[s].branchName&&(d="M2",c="Branch: "+r[s].branchName),r[s].agentName&&(d="N2",c="Agent: "+r[s].agentName),null!=d&&null!=c){let m=p.getCell(d);m.value=c,m.font={name:"Calibri",size:10,bold:!0},m.alignment={vertical:"middle",horizontal:"left"}}}p.addRow([]);let L=0;for(s=0;s<n.length;s++){let c=this.calculateStartPoint(L);L+=1;let m=p.getCell(c);m.value=n[s],m.font={name:"Calibri",size:12,bold:!0},m.alignment={vertical:"middle",horizontal:"center"}}u.forEach(d=>{let c=p.addRow(d),m=c.getCell(1);m&&(m.alignment={vertical:"middle",horizontal:"center"});let g=0;d.forEach(Z=>{if(g++,2!=g&&3!=g&&4!=g&&5!=g){let _=c.getCell(g);_&&(_.alignment={vertical:"middle",horizontal:"right"})}if(1==g){let _=c.getCell(g);_&&(_.alignment={vertical:"middle",horizontal:"center"})}g>2&&(c.getCell(g).numFmt="#,##0.00_);(#,##0.00)")})});let B=0;for(s=0;s<f.length;s++){let c=this.calculateTotalPoint(B,u.length);B+=1;let m=p.getCell(c);m.value=f[s],m.font={name:"Calibri",size:12,bold:!0},m.alignment={vertical:"middle",horizontal:"right"},B>2&&(m.numFmt="#,##0.00_);(#,##0.00)")}p.columns.forEach(function(d,c){var m=0;d.eachCell({includeEmpty:!0},function(g){var Z=g.value?g.value.toString().length:10;Z>m&&(m=Z)}),d.width=m<10?10:m}),p.getColumn(1).width=25,D.xlsx.writeBuffer().then(d=>{let c=new Blob([d],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});this.platform.is("android")||this.platform.is("ios")?this.attachmentDownloadService.mobileDownload(o+"_"+this.formatDateDDMMYYY(new Date)+".xlsx",c):q.saveAs(c,o+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateStartPoint(e){return C[e]+"4"}calculateEndPoint(e){return C[e]+"4"}calculateDataPoint(e){return C[e]+"5"}calculatePremiumDataPoint(e){return C[e]+"6"}calculateTotalPoint(e,o){let r=Number(o)+5;return C[e]+r.toString()}formatDateDDMMYYY(e){var o=new Date(e),r=""+(o.getMonth()+1),n=""+o.getDate(),u=o.getFullYear();return r.length<2&&(r="0"+r),n.length<2&&(n="0"+n),[n,r,u].join("_")}mathRoundTo(e,o){const r=Math.pow(10,o);return(Math.round(e*r)/r).toLocaleString()}formatReportedDate(e){var o=new Date(e),r=""+(o.getMonth()+1),n=""+o.getDate(),u=o.getFullYear();return r.length<2&&(r="0"+r),n.length<2&&(n="0"+n),[n,r,u].join("/")}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(P.eN),t.LFG(E.e8),t.LFG(V.t4),t.LFG(U.Ys))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var F=l(78480),M=l(86031),Y=l(57842);function j(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",29),t.TgZ(1,"div",15),t.TgZ(2,"label",16),t._uU(3,"Company"),t.qZA(),t.TgZ(4,"div",30),t.TgZ(5,"ng-select",32),t.NdJ("change",function(r){return t.CHM(e),t.oxw(2).changeOptions(r,"channel")}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw(2);t.xp6(5),t.Q6J("items",e.selectOptions.companies)}}function z(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.YNc(1,j,6,1,"div",28),t.TgZ(2,"div",29),t.TgZ(3,"div",15),t.TgZ(4,"label",16),t._uU(5,"Channel"),t.qZA(),t.TgZ(6,"div",30),t.TgZ(7,"ng-select",31),t.NdJ("change",function(r){return t.CHM(e),t.oxw().changeOptions(r,"region")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.fromDate&&""!=e.createFormGroup.value.toDate),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.channels.length)("items",e.selectOptions.channels)}}function k(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Region"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",33),t.NdJ("change",function(r){return t.CHM(e),t.oxw().changeOptions(r,"cluster")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Cluster"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",34),t.NdJ("change",function(r){return t.CHM(e),t.oxw().changeOptions(r,"branch")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.regions.length)("items",e.selectOptions.regions),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.cluster.length)("items",e.selectOptions.cluster)}}function X(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Branch"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",35),t.NdJ("change",function(r){return t.CHM(e),t.oxw().changeOptions(r,"agent")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.branches.length)("items",e.selectOptions.branches)}}function W(a,i){1&a&&t._UZ(0,"br")}function K(a,i){1&a&&t._UZ(0,"br")}function $(a,i){1&a&&t._UZ(0,"br")}function tt(a,i){1&a&&t._UZ(0,"br")}function et(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.hij("From Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.fromDate)," ")}}function ot(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.hij("To Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.toDate),"")}}function rt(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Company: ",e.companyName," ")}}function at(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Channel: ",e.channelName," ")}}function nt(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Region: ",e.regionName," ")}}function it(a,i){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,rt,2,1,"span",38),t.YNc(2,at,2,1,"span",38),t.YNc(3,nt,2,1,"span",38),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.channelId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.regionId)}}function lt(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Cluster: ",e.clusterName," ")}}function st(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Branch: ",e.branchName,"")}}function ct(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Agent: ",e.agentName," ")}}function ut(a,i){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,lt,2,1,"span",38),t.YNc(2,st,2,1,"span",38),t.YNc(3,ct,2,1,"span",38),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.branchId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.agentId)}}function mt(a,i){if(1&a&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.Oqu(e.name)}}function ht(a,i){if(1&a&&(t.TgZ(0,"td",50),t._uU(1),t.ALo(2,"number"),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.totalPreminum||0,"1.2-2")," ")}}function dt(a,i){if(1&a&&(t.TgZ(0,"tr",44),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",49),t._uU(4),t.qZA(),t.YNc(5,ht,3,4,"td",48),t.qZA()),2&a){const e=i.$implicit,o=i.index,r=t.oxw(2);t.xp6(2),t.Oqu(e.no),t.xp6(2),t.Oqu(e.cluster),t.xp6(1),t.Q6J("ngForOf",r.dataList[o].productDataList)}}function pt(a,i){if(1&a&&(t.TgZ(0,"td",50),t._uU(1),t.ALo(2,"number"),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.totalPreminum||0,"1.2-2")," ")}}function gt(a,i){if(1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",36),t.TgZ(3,"div",37),t.YNc(4,W,1,0,"br",38),t.YNc(5,K,1,0,"br",38),t.TgZ(6,"h3",39),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",37),t.YNc(9,$,1,0,"br",38),t.YNc(10,tt,1,0,"br",38),t.TgZ(11,"div",40),t.YNc(12,et,2,1,"span",38),t.YNc(13,ot,2,1,"span",38),t.qZA(),t.qZA(),t.TgZ(14,"div",41),t.YNc(15,it,4,3,"div",38),t.YNc(16,ut,4,3,"div",38),t.qZA(),t.qZA(),t.TgZ(17,"div",42),t.TgZ(18,"table",43),t.TgZ(19,"tr",44),t.TgZ(20,"th",45),t._uU(21,"No."),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Branch"),t.qZA(),t.YNc(24,mt,2,1,"th",46),t.qZA(),t.YNc(25,dt,6,3,"tr",47),t.TgZ(26,"tr",44),t._UZ(27,"td"),t.TgZ(28,"td"),t._uU(29,"Total"),t.qZA(),t.YNc(30,pt,3,4,"td",48),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.fromDate),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.toDate),t.xp6(2),t.Q6J("ngIf",""!=e.createFormGroup.value.companyId||""!=e.createFormGroup.value.channelId||""!=e.createFormGroup.value.regionId),t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.clusterId||""!=e.createFormGroup.value.branchId||""!=e.createFormGroup.value.agentId),t.xp6(8),t.Q6J("ngForOf",e.productsHeader),t.xp6(1),t.Q6J("ngForOf",e.dataList),t.xp6(5),t.Q6J("ngForOf",e.totalDataList)}}function ft(a,i){1&a&&(t.TgZ(0,"div",51),t._uU(1," There is no data "),t.qZA())}let vt=(()=>{class a{constructor(e,o){this.cdf=e,this.exportService=o,this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.productValues=[],this.subHeader=[],this.dataExcel=[],this.isData=!1,this.title="By Product Branch - Premium",this.dataList=[],this.totalDataList=[]}ngOnInit(){this.loadForm(),this.getOfficeHirearchy(),this.fromMinDate=null,this.fromMaxDate=null}getOfficeHirearchy(){return(0,v.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(e=>(0,v.mG)(this,void 0,void 0,function*(){e&&(this.selectOptions.companies=e)}))})}getAllReports(){return(0,v.mG)(this,void 0,void 0,function*(){this.createFormGroup.invalid?(0,w.w)(this.createFormGroup):(this.productsHeader=[],this.branchDataList=[],this.dataList=[],this.totalDataList=[],yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(e=>(0,v.mG)(this,void 0,void 0,function*(){if(e){if(e.products.length>0)for(var o=0;o<e.products.length;o++)this.productsHeader.push({id:e.products[o].id,name:e.products[o].name});if(e.dataList.length>0){this.isData=!0,this.dataList=e.dataList;let u=0;for(o=0;o<this.dataList.length;o++){let D=[];for(var r=0;r<this.productsHeader.length;r++)D.push({id:this.productsHeader[r].id,noOfPolicy:0,totalPreminum:0});if(u+=1,this.dataList[o].no=u,this.dataList[o].productDataList=JSON.parse(JSON.stringify(D)),this.dataList[o].totalDataList=JSON.parse(JSON.stringify(D)),this.dataList[o].products)for(r=0;r<this.dataList[o].products.length;r++)for(var n=0;n<this.dataList[o].productDataList.length;n++)this.dataList[o].productDataList[n].id==this.dataList[o].products[r].id&&(this.dataList[o].productDataList[n].noOfPolicy=this.dataList[o].products[r].noOfPolicy,this.dataList[o].productDataList[n].totalPreminum=this.dataList[o].products[r].totalPreminum);if(u==this.dataList.length){for(this.totalDataList=JSON.parse(JSON.stringify(D)),o=0;o<this.dataList.length;o++)for(r=0;r<this.dataList[o].products.length;r++)for(n=0;n<this.totalDataList.length;n++)this.totalDataList[n].id==this.dataList[o].products[r].id&&(this.totalDataList[n].totalPreminum+=Number(this.dataList[o].products[r].totalPreminum));for(n=0;n<this.totalDataList.length;n++)this.totalDataList[n].totalPreminum=this.totalDataList[n].totalPreminum}}}else this.isData=!1}}))),this.cdf.detectChanges()})}generateReportExcel(){this.productValues=[],this.branchDataForExcel=[];let e=[];this.productValues.push("No."),this.productValues.push("Branch");for(var o=0;o<this.productsHeader.length;o++)this.productValues.push(this.productsHeader[o].name);for(o=0;o<this.dataList.length;o++){let p=[];p.push(o+1,this.dataList[o].cluster);for(var r=0;r<this.dataList[o].productDataList.length;r++)p.push(this.dataList[o].productDataList[r].totalPreminum||0);this.branchDataForExcel.push(p)}for(e.push(""),e.push("Total"),o=0;o<this.totalDataList.length;o++)e.push(this.totalDataList[o].totalPreminum||0);let n=null,u=null;this.createFormGroup.value.fromDate&&(n=this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)),this.createFormGroup.value.toDate&&(u=this.formatDateDDMMYYY(this.createFormGroup.value.toDate)),this.exportService.exportExcel({title:this.title+" Report",searchValue:[{fromDate:n},{toDate:u},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],productsHeader:this.productValues,branchDataForExcel:this.branchDataForExcel,totalValue:e})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.productsHeader=[],this.branchDataList=[],this.dataList=[],this.totalDataList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.fromMinDate=null,this.fromMaxDate=null,this.cdf.detectChanges()}changeOptions(e,o){return(0,v.mG)(this,void 0,void 0,function*(){"company"==o&&(e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(r=>(0,v.mG)(this,void 0,void 0,function*(){r&&(this.selectOptions.channels=r)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==o&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"02").toPromise().then(r=>(0,v.mG)(this,void 0,void 0,function*(){r&&(this.selectOptions.channels=r)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==o&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.channelName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"03").toPromise().then(r=>(0,v.mG)(this,void 0,void 0,function*(){r&&(this.selectOptions.regions=r)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==o&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.regionName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"04").toPromise().then(r=>(0,v.mG)(this,void 0,void 0,function*(){r&&(this.selectOptions.cluster=r)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==o&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.clusterName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"05").toPromise().then(r=>(0,v.mG)(this,void 0,void 0,function*(){r&&(this.selectOptions.branches=r)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==o&&(this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),e?(this.branchName=e.name,yield this.exportService.getAgentOffice(e.id).toPromise().then(r=>(0,v.mG)(this,void 0,void 0,function*(){r&&(this.selectOptions.agents=r)}))):(this.branchName=null,this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"office"==o&&(e?this.agentName=e.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new h.cw({fromDate:new h.NI("",[h.kI.required,h.kI.nullValidator]),toDate:new h.NI("",[h.kI.required,h.kI.nullValidator]),agentId:new h.NI(""),companyId:new h.NI(""),channelId:new h.NI(""),regionId:new h.NI(""),clusterId:new h.NI(""),branchId:new h.NI("")})}isControlValid(e){const o=this.createFormGroup.controls[e];return o.valid&&(o.dirty||o.touched)}isControlInvalid(e){const o=this.createFormGroup.controls[e];return o.invalid&&(o.dirty||o.touched)}controlHasError(e,o){const r=this.createFormGroup.controls[o];return r.hasError(e)&&(r.dirty||r.touched)}isControlTouched(e){const o=this.createFormGroup.controls[e];return o.dirty||o.touched}doValid(e){if("FromDate"==e){if(this.createFormGroup.controls.fromDate.value){let f=N(this.createFormGroup.controls.fromDate.value).add(0,"years");this.toMaxDate={year:parseInt(f.format("YYYY")),month:parseInt(f.format("M")),day:parseInt(f.format("D"))},this.createFormGroup.controls.fromDate.setValue(f.format("YYYY-MM-DD"))}var o=new Date(this.createFormGroup.value.fromDate);o.setFullYear(o.getFullYear()+1),o.setDate(o.getDate()-1),this.fromMinDate=this.createFormGroup.value.fromDate,this.fromMaxDate=o;let u=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=u&&1!=u&&this.createFormGroup.controls.toDate.setValue("")}if("ToDate"==e){if(this.createFormGroup.controls.toDate.value){let f=N(this.createFormGroup.controls.toDate.value).add(0,"years");this.toMaxDate={year:parseInt(f.format("YYYY")),month:parseInt(f.format("M")),day:parseInt(f.format("D"))},this.createFormGroup.controls.toDate.setValue(f.format("YYYY-MM-DD"))}var r=new Date(this.createFormGroup.value.toDate);r.setFullYear(r.getFullYear()-1),r.setDate(r.getDate()+1),this.fromMinDate=r,this.createFormGroup.value.toDate||(this.fromMaxDate=this.createFormGroup.value.toDate);let u=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=u&&1!=u&&this.createFormGroup.controls.fromDate.setValue(""),1==u&&(new Date(this.createFormGroup.value.toDate).getMonth()>new Date(this.createFormGroup.value.fromDate).getMonth()&&this.createFormGroup.controls.fromDate.setValue(""),new Date(this.createFormGroup.value.toDate).getMonth()==new Date(this.createFormGroup.value.fromDate).getMonth()&&new Date(this.createFormGroup.value.toDate).getDate()>=new Date(this.createFormGroup.value.fromDate).getDate()&&this.createFormGroup.controls.fromDate.setValue(""))}this.cdf.detectChanges()}clearDate(e){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==e&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==e&&this.createFormGroup.controls.toDate.setValue(""),this.isData=!1,this.productsHeader=[],this.dataList=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(e){var o=new Date(e),r=""+(o.getMonth()+1),n=""+o.getDate(),u=o.getFullYear();return r.length<2&&(r="0"+r),n.length<2&&(n="0"+n),[n,r,u].join("/")}mathRoundTo(e,o){const r=Math.pow(10,o);return(Math.round(e*r)/r).toLocaleString()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.sBO),t.Y36(H))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-report-by-product-branch-premium"]],decls:46,vars:15,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool","search-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","regionId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","clusterId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","branchId",1,"ng-custom-select",3,"readonly","items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"date-display"],[1,"search-display"],[2,"width","100%","overflow-y","scroll","overflow-x","scroll","max-height","500px"],["border","1"],[2,"border-top","1px solid #000"],[2,"min-width","50px"],[4,"ngFor","ngForOf"],["style","border-top: 1px solid #000;",4,"ngFor","ngForOf"],["class","text-right",4,"ngFor","ngForOf"],[1,"text-left"],[1,"text-right"],[2,"color","gray","text-align","center"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"By Product Branch Premium"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return o.getAllReports()}),t._UZ(9,"span",8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return o.generateReportExcel()}),t.TgZ(11,"span",10),t._uU(12,"Generate"),t.qZA(),t.qZA(),t.TgZ(13,"button",7),t.NdJ("click",function(){return o.cancelReport()}),t.TgZ(14,"span",10),t._uU(15,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"form",12),t.TgZ(18,"div",13),t.TgZ(19,"div",14),t.TgZ(20,"div",15),t.TgZ(21,"label",16),t._uU(22,"From Date"),t.qZA(),t.TgZ(23,"div",17),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return o.doValid("FromDate")}),t.qZA(),t._UZ(25,"mat-datepicker-toggle",19),t._UZ(26,"mat-datepicker",20,21),t.qZA(),t.TgZ(28,"button",22),t.NdJ("click",function(){return o.clearDate("FromDate")}),t._uU(29,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",14),t.TgZ(31,"div",15),t.TgZ(32,"label",16),t._uU(33,"To Date"),t.qZA(),t.TgZ(34,"div",17),t.TgZ(35,"input",23),t.NdJ("dateChange",function(){return o.doValid("ToDate")}),t.qZA(),t._UZ(36,"mat-datepicker-toggle",19),t._UZ(37,"mat-datepicker",20,24),t.qZA(),t.TgZ(39,"button",22),t.NdJ("click",function(){return o.clearDate("ToDate")}),t._uU(40,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(41,z,8,3,"div",25),t.YNc(42,k,13,4,"div",25),t.YNc(43,X,7,2,"div",25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(44,gt,31,12,"div",26),t.YNc(45,ft,2,0,"div",27)),2&e){const r=t.MAs(27),n=t.MAs(38);t.xp6(10),t.Q6J("disabled",!o.isData),t.xp6(7),t.Q6J("formGroup",o.createFormGroup),t.xp6(7),t.Q6J("min",o.fromMinDate)("max",o.fromMaxDate)("matDatepicker",r),t.xp6(1),t.Q6J("for",r),t.xp6(10),t.Q6J("min",o.fromMinDate)("max",o.fromMaxDate)("matDatepicker",n),t.xp6(1),t.Q6J("for",n),t.xp6(5),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",o.isData),t.xp6(1),t.Q6J("ngIf",!o.isData)}},directives:[h._Y,h.JL,h.sg,h.Fj,F.hl,h.JJ,h.u,F.nW,M.R9,F.Mq,x.O5,Y.w9,x.sg],pipes:[x.JJ],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0 .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{min-width:110px;text-align:center;position:relative;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){min-width:50px}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.date-display[_ngcontent-%COMP%]{width:100%;overflow:hidden}.date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;min-width:135px;float:left;display:block}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#e3e3e3;transform:rotate(0);position:absolute;top:0;left:49%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:end;padding:0 5px 0 0}"]}),a})();var Dt=l(87626),_t=l(45598),xt=l(29018),Ct=l(85378),Zt=l(75396),b=l(44290),Pt=l(57730),Ft=l(92118),bt=l(47975);let yt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[x.uU,{provide:b._A,useClass:Ft.t7,deps:[b.Ad]},{provide:b.sG,useValue:bt.Gs}],imports:[[x.ez,h.u5,Y.A0,h.UX,Dt.vi,_t.fA,Ct.M,Zt.X,F.FA,b.XK,Pt.c,M.lN,xt.Bz.forChild([{path:"",component:vt}])]]}),a})()}}]);