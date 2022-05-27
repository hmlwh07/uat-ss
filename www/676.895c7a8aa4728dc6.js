"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[676],{50676:(Ft,N,l)=>{l.r(N),l.d(N,{ReportByProductSalesChannelPremiumModule:()=>Pt});var D=l(69808),v=l(70655),h=l(93075),Z=l(15439),S=l(41018),t=l(5e3),P=l(40520),B=l(64313),R=l(94327),w=l(38313),O=l(92340),L=l(90089),q=l(83950),E=l(55410);const y=`${O.N.apiUrl}/premiumProductSaleChannel`,V=`${O.N.apiUrl}/officeHirearchy`,J=`${O.N.apiUrl}/agentByOffice`,F=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let U=(()=>{class a extends w.i{constructor(e,o,n,r){super(e,y),this.httpClient=e,this.authService=o,this.platform=n,this.attachmentDownloadService=r}getOfficeHirearchy(e,o){const r=new P.LE({fromObject:{parentId:e,typeCode:o}});return this.httpClient.get(V,{params:r})}getAgentOffice(e){const n=new P.LE({fromObject:{officeId:e}});return this.httpClient.get(J,{params:n})}getAllReportData(e){e.fromDate&&(e.fromDate=this.formatDateYYYY_MM_DD(e.fromDate)),e.toDate&&(e.toDate=this.formatDateYYYY_MM_DD(e.toDate));const o=new P.LE({fromObject:e});return this.httpClient.get(y,{params:o})}getAllAboutBRAM(e){return this.httpClient.get(y+"/"+e+"/asset")}formatDateYYYY_MM_DD(e){var o=new Date(e),n=""+(o.getMonth()+1),r=""+o.getDate(),c=o.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[c,n,r].join("-")}exportExcel(e){const o=e.title,n=e.searchValue,r=e.productsHeader,c=e.branchDataForExcel;let f=new B.Workbook,s=f.addWorksheet("Sheet1");s.views=[{state:"frozen",xSplit:2,ySplit:4,activeCell:"A1"}],s.mergeCells("A1","B2");let C=s.getCell("A1");C.value=o,C.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},C.alignment={vertical:"middle",horizontal:"left"},s.mergeCells("G1","G1");let T=s.getCell("G1");T.value="Reported Date: "+this.formatReportedDate(new Date),T.font={name:"Calibri",size:10,bold:!0},T.alignment={vertical:"middle",horizontal:"left"},s.mergeCells("G2","G2");let G=s.getCell("G2");if(G.value="Reported By: "+this.authService.currentUserValue.firstName+this.authService.currentUserValue.lastName,G.font={name:"Calibri",size:10,bold:!0},G.alignment={vertical:"middle",horizontal:"left"},n.length>0)for(var m=0;m<n.length;m++){let d=null,u=null;if(n[m].fromDate&&(d="F1",u="From Date: "+n[m].fromDate),n[m].toDate&&(d="F2",u="To Date: "+n[m].toDate),n[m].companyName&&(d="L1",u="Company: "+n[m].companyName),n[m].channelName&&(d="M1",u="Channel: "+n[m].channelName),n[m].regionName&&(d="N1",u="Region: "+n[m].regionName),n[m].clusterName&&(d="L2",u="Cluster: "+n[m].clusterName),n[m].branchName&&(d="M2",u="Branch: "+n[m].branchName),n[m].agentName&&(d="N2",u="Agent: "+n[m].agentName),null!=d&&null!=u){let p=s.getCell(d);p.value=u,p.font={name:"Calibri",size:10,bold:!0},p.alignment={vertical:"middle",horizontal:"left"}}}s.addRow([]);let Y=0;for(m=0;m<r.length;m++){let u=this.calculateStartPoint(Y);Y+=1;let p=s.getCell(u);p.value=r[m],p.font={name:"Calibri",size:12,bold:!0},p.alignment={vertical:"middle",horizontal:"center"}}c.forEach(d=>{let u=s.addRow(d),p=u.getCell(1);p&&(p.alignment={vertical:"middle",horizontal:"center"});let g=0;d.forEach(x=>{if(g++,2!=g&&3!=g&&4!=g&&5!=g){let _=u.getCell(g);_&&(_.alignment={vertical:"middle",horizontal:"right"})}if(1==g){let _=u.getCell(g);_&&(_.alignment={vertical:"middle",horizontal:"center"})}g>2&&(u.getCell(g).numFmt="#,##0.00_);(#,##0.00)")})}),s.columns.forEach(function(d,u){var p=0;d.eachCell({includeEmpty:!0},function(g){var x=g.value?g.value.toString().length:10;x>p&&(p=x)}),d.width=p<10?10:p}),s.getColumn(1).width=25,f.xlsx.writeBuffer().then(d=>{let u=new Blob([d],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});this.platform.is("android")||this.platform.is("ios")?this.attachmentDownloadService.mobileDownload(o+"_"+this.formatDateDDMMYYY(new Date)+".xlsx",u):R.saveAs(u,o+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateStartPoint(e){return F[e]+"4"}calculateEndPoint(e){return F[e]+"4"}calculateDataPoint(e){return F[e]+"5"}calculatePremiumDataPoint(e){return F[e]+"6"}formatDateDDMMYYY(e){var o=new Date(e),n=""+(o.getMonth()+1),r=""+o.getDate(),c=o.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[r,n,c].join("_")}mathRoundTo(e,o){const n=Math.pow(10,o);return(Math.round(e*n)/n).toLocaleString()}formatReportedDate(e){var o=new Date(e),n=""+(o.getMonth()+1),r=""+o.getDate(),c=o.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[r,n,c].join("/")}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(P.eN),t.LFG(L.e8),t.LFG(q.t4),t.LFG(E.Ys))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var b=l(65884),I=l(21223),M=l(64537);function H(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",29),t.TgZ(1,"div",15),t.TgZ(2,"label",16),t._uU(3,"Company"),t.qZA(),t.TgZ(4,"div",30),t.TgZ(5,"ng-select",32),t.NdJ("change",function(n){return t.CHM(e),t.oxw(2).changeOptions(n,"channel")}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw(2);t.xp6(5),t.Q6J("items",e.selectOptions.companies)}}function Q(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.YNc(1,H,6,1,"div",28),t.TgZ(2,"div",29),t.TgZ(3,"div",15),t.TgZ(4,"label",16),t._uU(5,"Channel"),t.qZA(),t.TgZ(6,"div",30),t.TgZ(7,"ng-select",31),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"region")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.fromDate&&""!=e.createFormGroup.value.toDate),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.channels.length)("items",e.selectOptions.channels)}}function j(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Region"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",33),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"cluster")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Cluster"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",34),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"branch")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.regions.length)("items",e.selectOptions.regions),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.cluster.length)("items",e.selectOptions.cluster)}}function z(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Branch"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",35),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"agent")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.branches.length)("items",e.selectOptions.branches)}}function k(a,i){1&a&&t._UZ(0,"br")}function X(a,i){1&a&&t._UZ(0,"br")}function W(a,i){1&a&&t._UZ(0,"br")}function K(a,i){1&a&&t._UZ(0,"br")}function $(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.hij("From Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.fromDate)," ")}}function tt(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.hij("To Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.toDate),"")}}function et(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Company: ",e.companyName," ")}}function ot(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Channel: ",e.channelName," ")}}function nt(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Region: ",e.regionName," ")}}function at(a,i){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,et,2,1,"span",38),t.YNc(2,ot,2,1,"span",38),t.YNc(3,nt,2,1,"span",38),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.channelId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.regionId)}}function rt(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Cluster: ",e.clusterName," ")}}function it(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Branch: ",e.branchName,"")}}function lt(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Agent: ",e.agentName," ")}}function st(a,i){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,rt,2,1,"span",38),t.YNc(2,it,2,1,"span",38),t.YNc(3,lt,2,1,"span",38),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.branchId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.agentId)}}function ct(a,i){if(1&a&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.Oqu(e.name)}}function mt(a,i){if(1&a&&(t.TgZ(0,"td",50),t._uU(1),t.ALo(2,"number"),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.totalPreminum||0,"1.2-2")," ")}}function ut(a,i){if(1&a&&(t.TgZ(0,"tr",44),t.TgZ(1,"td",45),t._uU(2),t.qZA(),t.TgZ(3,"td",48),t._uU(4),t.qZA(),t.YNc(5,mt,3,4,"td",49),t.qZA()),2&a){const e=i.$implicit,o=i.index,n=t.oxw(2);t.xp6(2),t.Oqu(e.no),t.xp6(2),t.Oqu(e.month),t.xp6(1),t.Q6J("ngForOf",n.dataList[o].productDataList)}}function ht(a,i){if(1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",36),t.TgZ(3,"div",37),t.YNc(4,k,1,0,"br",38),t.YNc(5,X,1,0,"br",38),t.TgZ(6,"h3",39),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",37),t.YNc(9,W,1,0,"br",38),t.YNc(10,K,1,0,"br",38),t.TgZ(11,"div",40),t.YNc(12,$,2,1,"span",38),t.YNc(13,tt,2,1,"span",38),t.qZA(),t.qZA(),t.TgZ(14,"div",41),t.YNc(15,at,4,3,"div",38),t.YNc(16,st,4,3,"div",38),t.qZA(),t.qZA(),t.TgZ(17,"div",42),t.TgZ(18,"table",43),t.TgZ(19,"tr",44),t.TgZ(20,"th",45),t._uU(21,"No."),t.qZA(),t.TgZ(22,"th"),t._uU(23,"Month"),t.qZA(),t.YNc(24,ct,2,1,"th",46),t.qZA(),t.YNc(25,ut,6,3,"tr",47),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.fromDate),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.toDate),t.xp6(2),t.Q6J("ngIf",""!=e.createFormGroup.value.companyId||""!=e.createFormGroup.value.channelId||""!=e.createFormGroup.value.regionId),t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.clusterId||""!=e.createFormGroup.value.branchId||""!=e.createFormGroup.value.agentId),t.xp6(8),t.Q6J("ngForOf",e.productsHeader),t.xp6(1),t.Q6J("ngForOf",e.dataList)}}function dt(a,i){1&a&&(t.TgZ(0,"div",51),t._uU(1," There is no data "),t.qZA())}let pt=(()=>{class a{constructor(e,o){this.cdf=e,this.exportService=o,this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.productValues=[],this.subHeader=[],this.dataExcel=[],this.branchDataForExcel=[],this.productsHeader=[],this.branchDataList=[],this.title="Product Sales Channel Premium",this.isData=!1}ngOnInit(){this.loadForm(),this.getOfficeHirearchy(),this.fromMinDate=null,this.fromMaxDate=null}getOfficeHirearchy(){return(0,v.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(e=>(0,v.mG)(this,void 0,void 0,function*(){e&&(this.selectOptions.companies=e)}))})}getAllReports(){return(0,v.mG)(this,void 0,void 0,function*(){this.createFormGroup.invalid?(0,S.w)(this.createFormGroup):(this.productsHeader=[],this.branchDataList=[],this.dataList=[],yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(e=>(0,v.mG)(this,void 0,void 0,function*(){if(e&&e.products.length>0){for(var o=0;o<e.products.length;o++)this.productsHeader.push({id:e.products[o].id,name:e.products[o].name});if(e.dataList.length>0){this.isData=!0,this.dataList=e.dataList;let c=0;for(o=0;o<this.dataList.length;o++){this.dataList[o].productDataList=[],c++,this.dataList[o].no=c;for(var n=0;n<this.productsHeader.length;n++)this.dataList[o].productDataList.push({id:this.productsHeader[n].id,totalPreminum:0});if(this.dataList[o].products)for(n=0;n<this.dataList[o].products.length;n++)for(var r=0;r<this.dataList[o].productDataList.length;r++)this.dataList[o].productDataList[r].id==this.dataList[o].products[n].id&&(this.dataList[o].productDataList[r].noOfPolicy=this.dataList[o].products[n].noOfPolicy,this.dataList[o].productDataList[r].totalPreminum=this.dataList[o].products[n].totalPreminum)}}else this.isData=!1}}))),this.cdf.detectChanges()})}generateReportExcel(){this.productValues=[],this.branchDataForExcel=[],this.productValues.push("No."),this.productValues.push("Month");for(var e=0;e<this.productsHeader.length;e++)this.productValues.push(this.productsHeader[e].name);for(e=0;e<this.dataList.length;e++){let s=[];s.push(e+1,this.dataList[e].month);for(var o=0;o<this.dataList[e].productDataList.length;o++)s.push(this.dataList[e].productDataList[o].totalPreminum||0);this.branchDataForExcel.push(s)}let n=null,r=null;this.createFormGroup.value.fromDate&&(n=this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)),this.createFormGroup.value.toDate&&(r=this.formatDateDDMMYYY(this.createFormGroup.value.toDate)),this.exportService.exportExcel({title:this.title+" Report",searchValue:[{fromDate:n},{toDate:r},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],productsHeader:this.productValues,branchDataForExcel:this.branchDataForExcel})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.productsHeader=[],this.branchDataList=[],this.dataList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.fromMinDate=null,this.fromMaxDate=null,this.cdf.detectChanges()}changeOptions(e,o){return(0,v.mG)(this,void 0,void 0,function*(){"company"==o&&(e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(n=>(0,v.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.channels=n)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==o&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"02").toPromise().then(n=>(0,v.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.channels=n)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==o&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.channelName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"03").toPromise().then(n=>(0,v.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.regions=n)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==o&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.regionName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"04").toPromise().then(n=>(0,v.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.cluster=n)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==o&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.clusterName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"05").toPromise().then(n=>(0,v.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.branches=n)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==o&&(this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),e?(this.branchName=e.name,yield this.exportService.getAgentOffice(e.id).toPromise().then(n=>(0,v.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.agents=n)}))):(this.branchName=null,this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"office"==o&&(e?this.agentName=e.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.getAllReports(),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new h.cw({fromDate:new h.NI("",[h.kI.required,h.kI.nullValidator]),toDate:new h.NI("",[h.kI.required,h.kI.nullValidator]),agentId:new h.NI(""),companyId:new h.NI(""),channelId:new h.NI(""),regionId:new h.NI(""),clusterId:new h.NI(""),branchId:new h.NI("")})}isControlValid(e){const o=this.createFormGroup.controls[e];return o.valid&&(o.dirty||o.touched)}isControlInvalid(e){const o=this.createFormGroup.controls[e];return o.invalid&&(o.dirty||o.touched)}controlHasError(e,o){const n=this.createFormGroup.controls[o];return n.hasError(e)&&(n.dirty||n.touched)}isControlTouched(e){const o=this.createFormGroup.controls[e];return o.dirty||o.touched}doValid(e){if("FromDate"==e){let r=Z(this.createFormGroup.controls.fromDate.value).format("YYYY-MM-DD"),c=Z(this.createFormGroup.controls.toDate.value).format("YYYY-MM-DD");if(c){let f=r.split("-"),s=c.split("-"),C=Number(s[0])-Number(f[0]);0!=C&&1!=C&&this.createFormGroup.controls.toDate.setValue(""),0==C&&(f[1]>s[1]&&this.createFormGroup.controls.toDate.setValue(""),f[1]==s[1]&&f[2]>s[2]&&this.createFormGroup.controls.toDate.setValue(""))}if(r){var o=new Date(r);o.setFullYear(o.getFullYear()+1),o.setDate(o.getDate()-1),this.fromMinDate=new Date(r),this.fromMaxDate=o}}if("ToDate"==e){let r=Z(this.createFormGroup.controls.fromDate.value).format("YYYY-MM-DD"),c=Z(this.createFormGroup.controls.toDate.value).format("YYYY-MM-DD");if(r){let f=r.split("-"),s=c.split("-"),C=Number(s[0])-Number(f[0]);0!=C&&1!=C&&this.createFormGroup.controls.fromDate.setValue(""),0==C&&(f[1]>s[1]&&this.createFormGroup.controls.toDate.setValue(""),f[1]==s[1]&&f[2]>s[2]&&this.createFormGroup.controls.toDate.setValue(""))}if(c){var n=new Date(c);n.setFullYear(n.getFullYear()-1),n.setDate(n.getDate()+1),this.fromMinDate=n,this.fromMaxDate=new Date(c)}}this.cdf.detectChanges()}clearDate(e){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==e&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==e&&this.createFormGroup.controls.toDate.setValue(""),this.isData=!1,this.productsHeader=[],this.dataList=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(e){var o=new Date(e),n=""+(o.getMonth()+1),r=""+o.getDate(),c=o.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[r,n,c].join("/")}mathRoundTo(e,o){const n=Math.pow(10,o);return(Math.round(e*n)/n).toLocaleString()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.sBO),t.Y36(U))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-report-by-product-sales-channel-premium"]],decls:46,vars:15,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool","search-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","regionId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","clusterId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","branchId",1,"ng-custom-select",3,"readonly","items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"date-display"],[1,"search-display"],[2,"width","100%","overflow-y","scroll","overflow-x","scroll","max-height","500px"],["border","1"],[2,"border-top","1px solid #000"],[2,"min-width","50px","max-width","50px"],[4,"ngFor","ngForOf"],["style","border-top: 1px solid #000;",4,"ngFor","ngForOf"],[1,"text-left"],["class","text-right",4,"ngFor","ngForOf"],[1,"text-right"],[2,"color","gray","text-align","center"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"By Product Sales Channel Premium"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return o.getAllReports()}),t._UZ(9,"span",8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return o.generateReportExcel()}),t.TgZ(11,"span",10),t._uU(12,"Generate"),t.qZA(),t.qZA(),t.TgZ(13,"button",7),t.NdJ("click",function(){return o.cancelReport()}),t.TgZ(14,"span",10),t._uU(15,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"form",12),t.TgZ(18,"div",13),t.TgZ(19,"div",14),t.TgZ(20,"div",15),t.TgZ(21,"label",16),t._uU(22,"From Date"),t.qZA(),t.TgZ(23,"div",17),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return o.doValid("FromDate")}),t.qZA(),t._UZ(25,"mat-datepicker-toggle",19),t._UZ(26,"mat-datepicker",20,21),t.qZA(),t.TgZ(28,"button",22),t.NdJ("click",function(){return o.clearDate("FromDate")}),t._uU(29,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",14),t.TgZ(31,"div",15),t.TgZ(32,"label",16),t._uU(33,"To Date"),t.qZA(),t.TgZ(34,"div",17),t.TgZ(35,"input",23),t.NdJ("dateChange",function(){return o.doValid("ToDate")}),t.qZA(),t._UZ(36,"mat-datepicker-toggle",19),t._UZ(37,"mat-datepicker",20,24),t.qZA(),t.TgZ(39,"button",22),t.NdJ("click",function(){return o.clearDate("ToDate")}),t._uU(40,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(41,Q,8,3,"div",25),t.YNc(42,j,13,4,"div",25),t.YNc(43,z,7,2,"div",25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(44,ht,26,11,"div",26),t.YNc(45,dt,2,0,"div",27)),2&e){const n=t.MAs(27),r=t.MAs(38);t.xp6(10),t.Q6J("disabled",!o.isData),t.xp6(7),t.Q6J("formGroup",o.createFormGroup),t.xp6(7),t.Q6J("min",o.fromMinDate)("max",o.fromMaxDate)("matDatepicker",n),t.xp6(1),t.Q6J("for",n),t.xp6(10),t.Q6J("min",o.fromMinDate)("max",o.fromMaxDate)("matDatepicker",r),t.xp6(1),t.Q6J("for",r),t.xp6(5),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",o.isData),t.xp6(1),t.Q6J("ngIf",!o.isData)}},directives:[h._Y,h.JL,h.sg,h.Fj,b.hl,h.JJ,h.u,b.nW,I.R9,b.Mq,D.O5,M.w9,D.sg],pipes:[D.JJ],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0px .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{min-width:160px;text-align:center;position:relative;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){min-width:50px}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.date-display[_ngcontent-%COMP%]{width:100%;overflow:hidden}.date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;min-width:135px;float:left;display:block}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#e3e3e3;transform:rotate(0);position:absolute;top:0;left:49%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:end;padding:0 5px 0 0}"]}),a})();var gt=l(96592),ft=l(50282),vt=l(69544),Ct=l(63272),_t=l(42115),A=l(19775),Dt=l(65981),xt=l(6517),Zt=l(88757);let Pt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[D.uU,{provide:A._A,useClass:xt.t7,deps:[A.Ad]},{provide:A.sG,useValue:Zt.Gs}],imports:[[D.ez,h.u5,M.A0,h.UX,vt.vi,ft.fA,Ct.M,_t.X,b.FA,A.XK,Dt.c,I.lN,gt.Bz.forChild([{path:"",component:pt}])]]}),a})()}}]);