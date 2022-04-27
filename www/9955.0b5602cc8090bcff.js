"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9955],{99955:(Pt,T,l)=>{l.r(T),l.d(T,{ReportByProductSalesChannelPoliciesModule:()=>Ft});var D=l(86019),v=l(64762),h=l(49133),I=l(92070),B=l(53489),t=l(83668),x=l(44522),S=l(11901),w=l(62473),R=l(91691),b=l(18260),L=l(67198),q=l(71704),E=l(49875);const y=`${b.N.apiUrl}/policyProductSaleChannel`,J=`${b.N.apiUrl}/officeHirearchy`,V=`${b.N.apiUrl}/agentByOffice`,Z=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let U=(()=>{class n extends R.i{constructor(e,o,a,r){super(e,y),this.httpClient=e,this.authService=o,this.platform=a,this.attachmentDownloadService=r}getOfficeHirearchy(e,o){const r=new x.LE({fromObject:{parentId:e,typeCode:o}});return this.httpClient.get(J,{params:r})}getAgentOffice(e){const a=new x.LE({fromObject:{officeId:e}});return this.httpClient.get(V,{params:a})}getAllReportData(e){e.fromDate&&(e.fromDate=this.formatDateYYYY_MM_DD(e.fromDate)),e.toDate&&(e.toDate=this.formatDateYYYY_MM_DD(e.toDate));const o=new x.LE({fromObject:e});return this.httpClient.get(y,{params:o})}getAllAboutBRAM(e){return this.httpClient.get(y+"/"+e+"/asset")}formatDateYYYY_MM_DD(e){var o=new Date(e),a=""+(o.getMonth()+1),r=""+o.getDate(),u=o.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[u,a,r].join("-")}exportExcel(e){const o=e.title,a=e.searchValue,r=e.productsHeader,u=e.branchDataForExcel;let f=new S.Workbook,m=f.addWorksheet("Sheet1");m.views=[{state:"frozen",xSplit:2,ySplit:4,activeCell:"A1"}],m.mergeCells("A1","B2");let G=m.getCell("A1");G.value=o,G.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},G.alignment={vertical:"middle",horizontal:"left"},m.mergeCells("G1","G1");let O=m.getCell("G1");O.value="Reported Date: "+this.formatReportedDate(new Date),O.font={name:"Calibri",size:10,bold:!0},O.alignment={vertical:"middle",horizontal:"left"},m.mergeCells("G2","G2");let A=m.getCell("G2");if(A.value="Reported By: "+this.authService.currentUserValue.firstName+this.authService.currentUserValue.lastName,A.font={name:"Calibri",size:10,bold:!0},A.alignment={vertical:"middle",horizontal:"left"},a.length>0)for(var c=0;c<a.length;c++){let d=null,s=null;if(a[c].fromDate&&(d="F1",s="From Date: "+a[c].fromDate),a[c].toDate&&(d="F2",s="To Date: "+a[c].toDate),a[c].companyName&&(d="L1",s="Company: "+a[c].companyName),a[c].channelName&&(d="M1",s="Channel: "+a[c].channelName),a[c].regionName&&(d="N1",s="Region: "+a[c].regionName),a[c].clusterName&&(d="L2",s="Cluster: "+a[c].clusterName),a[c].branchName&&(d="M2",s="Branch: "+a[c].branchName),a[c].agentName&&(d="N2",s="Agent: "+a[c].agentName),null!=d&&null!=s){let p=m.getCell(d);p.value=s,p.font={name:"Calibri",size:10,bold:!0},p.alignment={vertical:"middle",horizontal:"left"}}}m.addRow([]);let Y=0;for(c=0;c<r.length;c++){let s=this.calculateStartPoint(Y);Y+=1;let p=m.getCell(s);p.value=r[c],p.font={name:"Calibri",size:12,bold:!0},p.alignment={vertical:"middle",horizontal:"center"}}u.forEach(d=>{let s=m.addRow(d),p=s.getCell(1);p&&(p.alignment={vertical:"middle",horizontal:"center"});let g=0;d.forEach(_=>{if(g++,2!=g&&3!=g&&4!=g&&5!=g){let C=s.getCell(g);C&&(C.alignment={vertical:"middle",horizontal:"right"})}if(1==g){let C=s.getCell(g);C&&(C.alignment={vertical:"middle",horizontal:"center"})}g>2&&(s.getCell(g).numFmt="#,##0.00_);(#,##0.00)")})}),m.columns.forEach(function(d,s){var p=0;d.eachCell({includeEmpty:!0},function(g){var _=g.value?g.value.toString().length:10;_>p&&(p=_)}),d.width=p<10?10:p}),m.getColumn(1).width=25,f.xlsx.writeBuffer().then(d=>{let s=new Blob([d],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});this.platform.is("android")||this.platform.is("ios")?this.attachmentDownloadService.mobileDownload(o+"_"+this.formatDateDDMMYYY(new Date)+".xlsx",s):w.saveAs(s,o+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateStartPoint(e){return Z[e]+"4"}calculateEndPoint(e){return Z[e]+"4"}calculateDataPoint(e){return Z[e]+"5"}calculatePremiumDataPoint(e){return Z[e]+"6"}formatDateDDMMYYY(e){var o=new Date(e),a=""+(o.getMonth()+1),r=""+o.getDate(),u=o.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[r,a,u].join("_")}mathRoundTo(e,o){const a=Math.pow(10,o);return(Math.round(e*a)/a).toLocaleString()}formatReportedDate(e){var o=new Date(e),a=""+(o.getMonth()+1),r=""+o.getDate(),u=o.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[r,a,u].join("/")}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(x.eN),t.LFG(L.e8),t.LFG(q.t4),t.LFG(E.Ys))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var F=l(78480),M=l(86031),N=l(57842);function H(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",29),t.TgZ(1,"div",15),t.TgZ(2,"label",16),t._uU(3,"Company"),t.qZA(),t.TgZ(4,"div",30),t.TgZ(5,"ng-select",32),t.NdJ("change",function(a){return t.CHM(e),t.oxw(2).changeOptions(a,"channel")}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(5),t.Q6J("items",e.selectOptions.companies)}}function Q(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",13),t.YNc(1,H,6,1,"div",28),t.TgZ(2,"div",29),t.TgZ(3,"div",15),t.TgZ(4,"label",16),t._uU(5,"Channel"),t.qZA(),t.TgZ(6,"div",30),t.TgZ(7,"ng-select",31),t.NdJ("change",function(a){return t.CHM(e),t.oxw().changeOptions(a,"region")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.fromDate&&""!=e.createFormGroup.value.toDate),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.channels.length)("items",e.selectOptions.channels)}}function j(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Region"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",33),t.NdJ("change",function(a){return t.CHM(e),t.oxw().changeOptions(a,"cluster")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Cluster"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",34),t.NdJ("change",function(a){return t.CHM(e),t.oxw().changeOptions(a,"branch")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.regions.length)("items",e.selectOptions.regions),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.cluster.length)("items",e.selectOptions.cluster)}}function z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Branch"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",35),t.NdJ("change",function(a){return t.CHM(e),t.oxw().changeOptions(a,"agent")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.branches.length)("items",e.selectOptions.branches)}}function k(n,i){1&n&&t._UZ(0,"br")}function X(n,i){1&n&&t._UZ(0,"br")}function W(n,i){1&n&&t._UZ(0,"br")}function K(n,i){1&n&&t._UZ(0,"br")}function $(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij("From Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.fromDate)," ")}}function tt(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij("To Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.toDate),"")}}function et(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Company: ",e.companyName," ")}}function ot(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Channel: ",e.channelName," ")}}function at(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Region: ",e.regionName," ")}}function nt(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,et,2,1,"span",38),t.YNc(2,ot,2,1,"span",38),t.YNc(3,at,2,1,"span",38),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.channelId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.regionId)}}function rt(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Cluster: ",e.clusterName," ")}}function it(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Branch: ",e.branchName,"")}}function lt(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Agent: ",e.agentName," ")}}function st(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,rt,2,1,"span",38),t.YNc(2,it,2,1,"span",38),t.YNc(3,lt,2,1,"span",38),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.branchId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.agentId)}}function ct(n,i){if(1&n&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Oqu(e.name)}}function ht(n,i){if(1&n&&(t.TgZ(0,"td",50),t._uU(1),t.ALo(2,"number"),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.noOfPolicy||0,"1.2-2")," ")}}function ut(n,i){if(1&n&&(t.TgZ(0,"tr",44),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",48),t._uU(4),t.qZA(),t.YNc(5,ht,3,4,"td",49),t.qZA()),2&n){const e=i.$implicit,o=i.index,a=t.oxw(2);t.xp6(2),t.Oqu(e.no),t.xp6(2),t.Oqu(e.month),t.xp6(1),t.Q6J("ngForOf",a.dataList[o].productDataList)}}function dt(n,i){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",36),t.TgZ(3,"div",37),t.YNc(4,k,1,0,"br",38),t.YNc(5,X,1,0,"br",38),t.TgZ(6,"h3",39),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",37),t.YNc(9,W,1,0,"br",38),t.YNc(10,K,1,0,"br",38),t.TgZ(11,"div",40),t.YNc(12,$,2,1,"span",38),t.YNc(13,tt,2,1,"span",38),t.qZA(),t.qZA(),t.TgZ(14,"div",41),t.YNc(15,nt,4,3,"div",38),t.YNc(16,st,4,3,"div",38),t.qZA(),t.qZA(),t.TgZ(17,"div",42),t.TgZ(18,"table",43),t.TgZ(19,"tr",44),t.TgZ(20,"th",45),t._uU(21,"No."),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Month"),t.qZA(),t.YNc(24,ct,2,1,"th",46),t.qZA(),t.YNc(25,ut,6,3,"tr",47),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.fromDate),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.toDate),t.xp6(2),t.Q6J("ngIf",""!=e.createFormGroup.value.companyId||""!=e.createFormGroup.value.channelId||""!=e.createFormGroup.value.regionId),t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.clusterId||""!=e.createFormGroup.value.branchId||""!=e.createFormGroup.value.agentId),t.xp6(8),t.Q6J("ngForOf",e.productsHeader),t.xp6(1),t.Q6J("ngForOf",e.dataList)}}function pt(n,i){1&n&&(t.TgZ(0,"div",51),t._uU(1," There is no data "),t.qZA())}let mt=(()=>{class n{constructor(e,o){this.cdf=e,this.exportService=o,this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.productValues=[],this.subHeader=[],this.dataExcel=[],this.productsHeader=[],this.branchDataList=[],this.isData=!1,this.branchDataForExcel=[],this.title="Monthly Product Sales by Channel"}ngOnInit(){this.loadForm(),this.getOfficeHirearchy(),this.fromMinDate=null,this.fromMaxDate=null}getOfficeHirearchy(){return(0,v.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(e=>(0,v.mG)(this,void 0,void 0,function*(){e&&(this.selectOptions.companies=e)}))})}getAllReports(){return(0,v.mG)(this,void 0,void 0,function*(){this.createFormGroup.invalid?(0,B.w)(this.createFormGroup):(this.productsHeader=[],this.branchDataList=[],this.dataList=[],yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(e=>(0,v.mG)(this,void 0,void 0,function*(){if(e){if(e.products.length>0)for(var o=0;o<e.products.length;o++)this.productsHeader.push({id:e.products[o].id,name:e.products[o].name});if(e.dataList.length>0){this.isData=!0,this.dataList=e.dataList;let u=0;for(o=0;o<this.dataList.length;o++){this.dataList[o].productDataList=[],u++,this.dataList[o].no=u;for(var a=0;a<this.productsHeader.length;a++)this.dataList[o].productDataList.push({id:this.productsHeader[a].id,noOfPolicy:0});if(this.dataList[o].products)for(a=0;a<this.dataList[o].products.length;a++)for(var r=0;r<this.dataList[o].productDataList.length;r++)this.dataList[o].productDataList[r].id==this.dataList[o].products[a].id&&(this.dataList[o].productDataList[r].noOfPolicy=this.dataList[o].products[a].noOfPolicy,this.dataList[o].productDataList[r].totalPreminum=this.dataList[o].products[a].totalPreminum)}}else this.isData=!1}}))),this.cdf.detectChanges()})}generateReportExcel(){this.productValues=[],this.branchDataForExcel=[],this.productValues.push("No."),this.productValues.push("Month");for(var e=0;e<this.productsHeader.length;e++)this.productValues.push(this.productsHeader[e].name);for(e=0;e<this.dataList.length;e++){let m=[];m.push(e+1,this.dataList[e].month);for(var o=0;o<this.dataList[e].productDataList.length;o++)m.push(this.dataList[e].productDataList[o].noOfPolicy||0);this.branchDataForExcel.push(m)}let a=null,r=null;this.createFormGroup.value.fromDate&&(a=this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)),this.createFormGroup.value.toDate&&(r=this.formatDateDDMMYYY(this.createFormGroup.value.toDate)),this.exportService.exportExcel({title:this.title+" Report",searchValue:[{fromDate:a},{toDate:r},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],productsHeader:this.productValues,branchDataForExcel:this.branchDataForExcel})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.productsHeader=[],this.branchDataList=[],this.dataList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.fromMinDate=null,this.fromMaxDate=null,this.cdf.detectChanges()}changeOptions(e,o){return(0,v.mG)(this,void 0,void 0,function*(){"company"==o&&(e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.channels=a)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==o&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"02").toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.channels=a)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==o&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.channelName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"03").toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.regions=a)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==o&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.regionName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"04").toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.cluster=a)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==o&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.clusterName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"05").toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.branches=a)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==o&&(this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),e?(this.branchName=e.name,yield this.exportService.getAgentOffice(e.id).toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.agents=a)}))):(this.branchName=null,this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"office"==o&&(e?this.agentName=e.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new h.cw({fromDate:new h.NI("",[h.kI.required,h.kI.nullValidator]),toDate:new h.NI("",[h.kI.required,h.kI.nullValidator]),agentId:new h.NI(""),companyId:new h.NI(""),channelId:new h.NI(""),regionId:new h.NI(""),clusterId:new h.NI(""),branchId:new h.NI("")})}isControlValid(e){const o=this.createFormGroup.controls[e];return o.valid&&(o.dirty||o.touched)}isControlInvalid(e){const o=this.createFormGroup.controls[e];return o.invalid&&(o.dirty||o.touched)}controlHasError(e,o){const a=this.createFormGroup.controls[o];return a.hasError(e)&&(a.dirty||a.touched)}isControlTouched(e){const o=this.createFormGroup.controls[e];return o.dirty||o.touched}doValid(e){if("FromDate"==e){if(this.createFormGroup.controls.fromDate.value){let f=I(this.createFormGroup.controls.fromDate.value).add(0,"years");this.toMaxDate={year:parseInt(f.format("YYYY")),month:parseInt(f.format("M")),day:parseInt(f.format("D"))},this.createFormGroup.controls.fromDate.setValue(f.format("YYYY-MM-DD"))}var o=new Date(this.createFormGroup.value.fromDate);o.setFullYear(o.getFullYear()+1),o.setDate(o.getDate()-1),this.fromMinDate=this.createFormGroup.value.fromDate,this.fromMaxDate=o;let u=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=u&&1!=u&&this.createFormGroup.controls.toDate.setValue("")}if("ToDate"==e){if(this.createFormGroup.controls.toDate.value){let f=I(this.createFormGroup.controls.toDate.value).add(0,"years");this.toMaxDate={year:parseInt(f.format("YYYY")),month:parseInt(f.format("M")),day:parseInt(f.format("D"))},this.createFormGroup.controls.toDate.setValue(f.format("YYYY-MM-DD"))}var a=new Date(this.createFormGroup.value.toDate);a.setFullYear(a.getFullYear()-1),a.setDate(a.getDate()+1),this.fromMinDate=a,this.createFormGroup.value.toDate||(this.fromMaxDate=this.createFormGroup.value.toDate);let u=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=u&&1!=u&&this.createFormGroup.controls.fromDate.setValue(""),1==u&&(new Date(this.createFormGroup.value.toDate).getMonth()>new Date(this.createFormGroup.value.fromDate).getMonth()&&this.createFormGroup.controls.fromDate.setValue(""),new Date(this.createFormGroup.value.toDate).getMonth()==new Date(this.createFormGroup.value.fromDate).getMonth()&&new Date(this.createFormGroup.value.toDate).getDate()>=new Date(this.createFormGroup.value.fromDate).getDate()&&this.createFormGroup.controls.fromDate.setValue(""))}this.cdf.detectChanges()}clearDate(e){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==e&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==e&&this.createFormGroup.controls.toDate.setValue(""),this.isData=!1,this.productsHeader=[],this.dataList=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(e){var o=new Date(e),a=""+(o.getMonth()+1),r=""+o.getDate(),u=o.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[r,a,u].join("/")}mathRoundTo(e,o){const a=Math.pow(10,o);return(Math.round(e*a)/a).toLocaleString()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(U))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-report-by-product-sales-channel-policies"]],decls:46,vars:16,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool","search-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","regionId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","clusterId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","branchId",1,"ng-custom-select",3,"readonly","items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"date-display"],[1,"search-display"],[2,"width","100%","overflow-y","scroll","overflow-x","scroll","max-height","500px"],["border","1"],[2,"border-top","1px solid #000"],[2,"min-width","50px"],[4,"ngFor","ngForOf"],["style","border-top: 1px solid #000;",4,"ngFor","ngForOf"],[1,"text-left"],["class","text-right",4,"ngFor","ngForOf"],[1,"text-right"],[2,"color","gray","text-align","center"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return o.getAllReports()}),t._UZ(9,"span",8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return o.generateReportExcel()}),t.TgZ(11,"span",10),t._uU(12,"Generate"),t.qZA(),t.qZA(),t.TgZ(13,"button",7),t.NdJ("click",function(){return o.cancelReport()}),t.TgZ(14,"span",10),t._uU(15,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"form",12),t.TgZ(18,"div",13),t.TgZ(19,"div",14),t.TgZ(20,"div",15),t.TgZ(21,"label",16),t._uU(22,"From Date"),t.qZA(),t.TgZ(23,"div",17),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return o.doValid("FromDate")}),t.qZA(),t._UZ(25,"mat-datepicker-toggle",19),t._UZ(26,"mat-datepicker",20,21),t.qZA(),t.TgZ(28,"button",22),t.NdJ("click",function(){return o.clearDate("FromDate")}),t._uU(29,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",14),t.TgZ(31,"div",15),t.TgZ(32,"label",16),t._uU(33,"To Date"),t.qZA(),t.TgZ(34,"div",17),t.TgZ(35,"input",23),t.NdJ("dateChange",function(){return o.doValid("ToDate")}),t.qZA(),t._UZ(36,"mat-datepicker-toggle",19),t._UZ(37,"mat-datepicker",20,24),t.qZA(),t.TgZ(39,"button",22),t.NdJ("click",function(){return o.clearDate("ToDate")}),t._uU(40,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(41,Q,8,3,"div",25),t.YNc(42,j,13,4,"div",25),t.YNc(43,z,7,2,"div",25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(44,dt,26,11,"div",26),t.YNc(45,pt,2,0,"div",27)),2&e){const a=t.MAs(27),r=t.MAs(38);t.xp6(6),t.Oqu(o.title),t.xp6(4),t.Q6J("disabled",!o.isData),t.xp6(7),t.Q6J("formGroup",o.createFormGroup),t.xp6(7),t.Q6J("min",o.fromMinDate)("max",o.fromMaxDate)("matDatepicker",a),t.xp6(1),t.Q6J("for",a),t.xp6(10),t.Q6J("min",o.fromMinDate)("max",o.fromMaxDate)("matDatepicker",r),t.xp6(1),t.Q6J("for",r),t.xp6(5),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",o.isData),t.xp6(1),t.Q6J("ngIf",!o.isData)}},directives:[h._Y,h.JL,h.sg,h.Fj,F.hl,h.JJ,h.u,F.nW,M.R9,F.Mq,D.O5,N.w9,D.sg],pipes:[D.JJ],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0 .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{min-width:110px;text-align:center;position:relative;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){min-width:50px}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.date-display[_ngcontent-%COMP%]{width:100%;overflow:hidden}.date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;min-width:135px;float:left;display:block}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#e3e3e3;transform:rotate(0);position:absolute;top:0;left:49%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:end;padding:0 5px 0 0}"]}),n})();var gt=l(87626),ft=l(45598),vt=l(29018),Ct=l(24872),Dt=l(75396),P=l(44290),_t=l(57730),xt=l(92118),Zt=l(47975);let Ft=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[D.uU,{provide:P._A,useClass:xt.t7,deps:[P.Ad]},{provide:P.sG,useValue:Zt.Gs}],imports:[[D.ez,h.u5,N.A0,h.UX,gt.vi,ft.fA,Ct.M,Dt.X,F.FA,P.XK,_t.c,M.lN,vt.Bz.forChild([{path:"",component:mt}])]]}),n})()}}]);