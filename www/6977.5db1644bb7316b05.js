"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6977],{6977:(Gt,I,c)=>{c.r(I),c.d(I,{ReportDetailByBankBranchModule:()=>It});var Z=c(86019),_=c(64762),d=c(49133),B=c(92070),R=c(53489),t=c(83668),C=c(44522),P=c(11901),w=c(62473),k=c(91691),b=c(18260),U=c(67198),J=c(71704),E=c(49875);const G=`${b.N.apiUrl}/reportByBankBranch`,V=`${b.N.apiUrl}/officeHirearchy`,Q=`${b.N.apiUrl}/agentByOffice`,y=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let S=(()=>{class o extends k.i{constructor(e,n,a,r){super(e,G),this.httpClient=e,this.authService=n,this.platform=a,this.attachmentDownloadService=r}getOfficeHirearchy(e,n){const r=new C.LE({fromObject:{parentId:e,typeCode:n}});return this.httpClient.get(V,{params:r})}getAgentOffice(e){const a=new C.LE({fromObject:{officeId:e}});return this.httpClient.get(Q,{params:a})}getAllReportData(e){e.fromDate&&(e.fromDate=this.formatDateYYYY_MM_DD(e.fromDate)),e.toDate&&(e.toDate=this.formatDateYYYY_MM_DD(e.toDate));const n=new C.LE({fromObject:e});return this.httpClient.get(G,{params:n})}exportExcel(e){const n=e.title,a=e.products,r=e.subHeader,l=e.searchValue,v=e.data;let f=new P.Workbook,s=f.addWorksheet("Sheet1");s.views=[{state:"frozen",xSplit:6,ySplit:5,activeCell:"A1"}],s.mergeCells("A1","C2");let F=s.getCell("A1");F.value=n,F.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},F.alignment={vertical:"middle",horizontal:"left"},s.mergeCells("G1","G1");let O=s.getCell("G1");O.value="Reported Date: "+this.formatReportedDate(new Date),O.font={name:"Calibri",size:10,bold:!0},O.alignment={vertical:"middle",horizontal:"left"},s.mergeCells("G2","G2");let N=s.getCell("G2");if(N.value="Reported By: "+this.authService.currentUserValue.firstName+this.authService.currentUserValue.lastName,N.font={name:"Calibri",size:10,bold:!0},N.alignment={vertical:"middle",horizontal:"left"},l.length>0)for(var h=0;h<l.length;h++){let m=null,p=null;if(l[h].fromDate&&(m="F1",p="From Date: "+l[h].fromDate),l[h].toDate&&(m="F2",p="To Date: "+l[h].toDate),l[h].companyName&&(m="L1",p="Company: "+l[h].companyName),l[h].channelName&&(m="M1",p="Channel: "+l[h].channelName),l[h].regionName&&(m="N1",p="Region: "+l[h].regionName),l[h].clusterName&&(m="L2",p="Cluster: "+l[h].clusterName),l[h].branchName&&(m="M2",p="Branch: "+l[h].branchName),l[h].agentName&&(m="N2",p="Agent: "+l[h].agentName),null!=m&&null!=p){let g=s.getCell(m);g.value=p,g.font={name:"Calibri",size:10,bold:!0},g.alignment={vertical:"middle",horizontal:"left"}}}s.addRow([]),s.mergeCells("A4:F4");let q=6,L=7;for(h=0;h<a.length;h++){let p=this.calculateStartPoint(q);q+=2;let g=this.calculateEndPoint(L);L+=2,s.mergeCells(p+":"+g);let u=s.getCell(p);u.value=a[h],u.font={name:"Calibri",size:12,bold:!0},u.alignment={vertical:"middle",horizontal:"center"}}for(h=0;h<r.length;h++){let p=this.calculateDataPoint(h);s.mergeCells(p+":"+p);let g=s.getCell(p);g.value=r[h],g.font={name:"Calibri",size:12,bold:!0},g.alignment={vertical:"middle",horizontal:"center"}}v.forEach(m=>{let p=s.addRow(m),g=p.getCell(1);g&&(g.alignment={vertical:"middle",horizontal:"center"});let u=0;m.forEach(x=>{if(u++,2!=u&&3!=u&&4!=u&&5!=u){let D=p.getCell(u);D&&(D.alignment={vertical:"middle",horizontal:"right"})}if(1==u){let D=p.getCell(u);D&&(D.alignment={vertical:"middle",horizontal:"center"})}u>6&&(p.getCell(u).numFmt="#,##0.00_);(#,##0.00)")})}),s.columns.forEach(function(m,p){var g=0;m.eachCell({includeEmpty:!0},function(u){var x=u.value?u.value.toString().length:10;x>g&&(g=x)}),m.width=g<10?10:g}),s.getColumn(1).width=5,s.getColumn(2).width=20,s.getColumn(3).width=15,s.getColumn(4).width=15,s.getColumn(5).width=20,f.xlsx.writeBuffer().then(m=>{let p=new Blob([m],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});this.platform.is("android")||this.platform.is("ios")?this.attachmentDownloadService.mobileDownload(n+"_"+this.formatDateDDMMYYY(new Date)+".xlsx",p):w.saveAs(p,n+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateStartPoint(e){return y[e]+"4"}calculateEndPoint(e){return y[e]+"4"}calculateDataPoint(e){return y[e]+"5"}formatDateDDMMYYY(e){var n=new Date(e),a=""+(n.getMonth()+1),r=""+n.getDate(),l=n.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[r,a,l].join("_")}mathRoundTo(e,n){const a=Math.pow(10,n);return(Math.round(e*a)/a).toLocaleString()}formatDateYYYY_MM_DD(e){var n=new Date(e),a=""+(n.getMonth()+1),r=""+n.getDate(),l=n.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[l,a,r].join("-")}formatReportedDate(e){var n=new Date(e),a=""+(n.getMonth()+1),r=""+n.getDate(),l=n.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[r,a,l].join("/")}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(C.eN),t.LFG(U.e8),t.LFG(J.t4),t.LFG(E.Ys))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var A=c(78480),M=c(86031),Y=c(57842);function H(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",29),t.TgZ(1,"div",15),t.TgZ(2,"label",16),t._uU(3,"Company"),t.qZA(),t.TgZ(4,"div",30),t.TgZ(5,"ng-select",32),t.NdJ("change",function(a){return t.CHM(e),t.oxw(2).changeOptions(a,"channel")}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw(2);t.xp6(5),t.Q6J("items",e.selectOptions.companies)}}function z(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",13),t.YNc(1,H,6,1,"div",28),t.TgZ(2,"div",29),t.TgZ(3,"div",15),t.TgZ(4,"label",16),t._uU(5,"Channel"),t.qZA(),t.TgZ(6,"div",30),t.TgZ(7,"ng-select",31),t.NdJ("change",function(a){return t.CHM(e),t.oxw().changeOptions(a,"region")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.fromDate&&""!=e.createFormGroup.value.toDate),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.channels.length)("items",e.selectOptions.channels)}}function j(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Region"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",33),t.NdJ("change",function(a){return t.CHM(e),t.oxw().changeOptions(a,"cluster")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Cluster"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",34),t.NdJ("change",function(a){return t.CHM(e),t.oxw().changeOptions(a,"branch")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.regions.length)("items",e.selectOptions.regions),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.cluster.length)("items",e.selectOptions.cluster)}}function X(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Branch"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",35),t.NdJ("change",function(a){return t.CHM(e),t.oxw().changeOptions(a,"agent")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Agent Name"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",36),t.NdJ("change",function(a){return t.CHM(e),t.oxw().changeOptions(a,"office")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.branches.length)("items",e.selectOptions.branches),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.agents.length)("items",e.selectOptions.agents)}}function W(o,i){1&o&&t._UZ(0,"br")}function $(o,i){1&o&&t._UZ(0,"br")}function K(o,i){1&o&&t._UZ(0,"br")}function tt(o,i){1&o&&t._UZ(0,"br")}function et(o,i){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij("From Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.fromDate)," ")}}function nt(o,i){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij("To Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.toDate),"")}}function at(o,i){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Company: ",e.companyName," ")}}function ot(o,i){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Channel: ",e.channelName," ")}}function rt(o,i){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Region: ",e.regionName," ")}}function it(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,at,2,1,"span",39),t.YNc(2,ot,2,1,"span",39),t.YNc(3,rt,2,1,"span",39),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.channelId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.regionId)}}function lt(o,i){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Cluster: ",e.clusterName," ")}}function st(o,i){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Branch: ",e.branchName,"")}}function ct(o,i){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Agent: ",e.agentName," ")}}function pt(o,i){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,lt,2,1,"span",39),t.YNc(2,st,2,1,"span",39),t.YNc(3,ct,2,1,"span",39),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.branchId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.agentId)}}function ht(o,i){if(1&o&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Oqu(e.name)}}function dt(o,i){if(1&o&&(t.TgZ(0,"tr",49),t._UZ(1,"th",50),t.YNc(2,ht,2,1,"th",48),t.qZA()),2&o){const e=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",e.productList)}}function ut(o,i){1&o&&(t.TgZ(0,"th",51),t.TgZ(1,"span"),t._uU(2,"No of Policies "),t._UZ(3,"div",52),t.qZA(),t.TgZ(4,"span"),t._uU(5,"Premium"),t.qZA(),t.qZA())}function mt(o,i){if(1&o&&(t.TgZ(0,"span",59),t._uU(1),t.ALo(2,"number"),t._UZ(3,"div",52),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij("",t.xi3(2,1,e.noOfPolicy,"1.2-2")," ")}}function gt(o,i){if(1&o&&(t.TgZ(0,"span",60),t._uU(1),t.ALo(2,"number"),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.totalPreminum,"1.2-2"))}}function ft(o,i){1&o&&(t.TgZ(0,"span",59),t._uU(1," 0.00 "),t._UZ(2,"div",52),t.qZA())}function _t(o,i){1&o&&(t.TgZ(0,"span",60),t._uU(1,"0.00"),t.qZA())}function vt(o,i){if(1&o&&(t.TgZ(0,"td",55),t.YNc(1,mt,4,4,"span",56),t.YNc(2,gt,3,4,"span",57),t.YNc(3,ft,3,0,"span",58),t.YNc(4,_t,2,0,"span",57),t.qZA()),2&o){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",e.noOfPolicy),t.xp6(1),t.Q6J("ngIf",e.totalPreminum),t.xp6(1),t.Q6J("ngIf",!e.noOfPolicy),t.xp6(1),t.Q6J("ngIf",!e.totalPreminum)}}function Dt(o,i){if(1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",53),t._uU(4),t.qZA(),t.TgZ(5,"td",53),t._uU(6),t.qZA(),t.TgZ(7,"td",53),t._uU(8),t.qZA(),t.TgZ(9,"td",53),t._uU(10),t.qZA(),t.TgZ(11,"td",53),t._uU(12),t.qZA(),t.YNc(13,vt,5,4,"td",54),t.qZA()),2&o){const e=i.$implicit,n=i.index,a=t.oxw(2);t.xp6(2),t.Oqu(e.no),t.xp6(2),t.Oqu(e.cluster),t.xp6(2),t.Oqu(e.channel),t.xp6(2),t.Oqu(e.branch),t.xp6(2),t.Oqu(e.agentName),t.xp6(2),t.Oqu(e.agentNo),t.xp6(1),t.Q6J("ngForOf",a.dataList[n].productDataList)}}function Zt(o,i){if(1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",37),t.TgZ(3,"div",38),t.YNc(4,W,1,0,"br",39),t.YNc(5,$,1,0,"br",39),t.TgZ(6,"h3",40),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",38),t.YNc(9,K,1,0,"br",39),t.YNc(10,tt,1,0,"br",39),t.TgZ(11,"div",41),t.YNc(12,et,2,1,"span",39),t.YNc(13,nt,2,1,"span",39),t.qZA(),t.qZA(),t.TgZ(14,"div",42),t.YNc(15,it,4,3,"div",39),t.YNc(16,pt,4,3,"div",39),t.qZA(),t.qZA(),t.TgZ(17,"div",43),t.TgZ(18,"table",44),t.YNc(19,dt,3,1,"tr",45),t.TgZ(20,"tr"),t.TgZ(21,"th",46),t._uU(22,"No"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Branch"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"Channel"),t.qZA(),t.TgZ(27,"th"),t._uU(28,"Bank Branch"),t.qZA(),t.TgZ(29,"th"),t._uU(30,"Agent Name"),t.qZA(),t.TgZ(31,"th"),t._uU(32,"Agent No."),t.qZA(),t.YNc(33,ut,6,0,"th",47),t.qZA(),t.YNc(34,Dt,14,7,"tr",48),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.fromDate),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.toDate),t.xp6(2),t.Q6J("ngIf",""!=e.createFormGroup.value.companyId||""!=e.createFormGroup.value.channelId||""!=e.createFormGroup.value.regionId),t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.clusterId||""!=e.createFormGroup.value.branchId||""!=e.createFormGroup.value.agentId),t.xp6(3),t.Q6J("ngIf",e.productList.length>0),t.xp6(14),t.Q6J("ngForOf",e.productList),t.xp6(1),t.Q6J("ngForOf",e.dataList)}}function xt(o,i){1&o&&(t.TgZ(0,"div",61),t._uU(1," There is no data "),t.qZA())}let Bt=(()=>{class o{constructor(e,n){this.cdf=e,this.exportService=n,this.title="Branch details production report",this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.displayList=[{particular:[],policies:[],premium:[]}],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.particularForExcel=[],this.policiesForExcel=[],this.premiumForExcel=[],this.isData=!1,this.productValues=[],this.subHeader=[],this.dataList=[],this.dataExcel=[]}ngOnInit(){this.loadForm(),this.getOfficeHirearchy(),this.fromMinDate=null,this.fromMaxDate=null}getOfficeHirearchy(){return(0,_.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(e=>(0,_.mG)(this,void 0,void 0,function*(){e&&(this.selectOptions.companies=e)}))})}getAllReports(){return(0,_.mG)(this,void 0,void 0,function*(){this.productList=[],this.dataList=[],this.createFormGroup.invalid?(0,R.w)(this.createFormGroup):yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(e=>(0,_.mG)(this,void 0,void 0,function*(){if(e){if(e.products.length>0)for(var n=0;n<e.products.length;n++)this.productList.push(e.products[n]);if(e.dataList.length>0){this.isData=!0,this.dataList=e.dataList;let l=0;for(n=0;n<this.dataList.length;n++){this.dataList[n].productDataList=[],l++,this.dataList[n].no=l;for(var a=0;a<this.productList.length;a++)this.dataList[n].productDataList.push({id:this.productList[a].id,noOfPolicy:0,totalPreminum:0});if(this.dataList[n].products.length>0)for(a=0;a<this.dataList[n].products.length;a++)for(var r=0;r<this.dataList[n].productDataList.length;r++)this.dataList[n].productDataList[r].id==this.dataList[n].products[a].id&&(this.dataList[n].productDataList[r].noOfPolicy=this.dataList[n].products[a].noOfPolicy,this.dataList[n].productDataList[r].totalPreminum=this.dataList[n].products[a].totalPreminum)}}else this.isData=!1}})),this.cdf.detectChanges()})}generateReportExcel(){this.productValues=[],this.subHeader=[],this.dataExcel=[];for(var e=0;e<this.productList.length;e++)this.productValues.push(this.productList[e].name);for(this.subHeader=["No.","Branch","Channel","Bank Branch","Agent Name","Agent No."],e=0;e<this.productList.length;e++)this.subHeader.push("No of Policies"),this.subHeader.push("Premium");for(e=0;e<this.dataList.length;e++){let f=[];f.push(e+1,this.dataList[e].cluster,this.dataList[e].channel,this.dataList[e].branch,this.dataList[e].agentName,this.dataList[e].agentNo);for(var n=0;n<this.dataList[e].productDataList.length;n++)f.push(this.dataList[e].productDataList[n].noOfPolicy||0,this.dataList[e].productDataList[n].totalPreminum||0);this.dataExcel.push(f)}let a=null,r=null;this.createFormGroup.value.fromDate&&(a=this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)),this.createFormGroup.value.fromDate&&(r=this.formatDateDDMMYYY(this.createFormGroup.value.toDate)),this.exportService.exportExcel({title:this.title,searchValue:[{fromDate:a},{toDate:r},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],products:this.productValues,subHeader:this.subHeader,data:this.dataExcel})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.productList=[],this.dataList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.fromMinDate=null,this.fromMaxDate=null,this.cdf.detectChanges()}changeOptions(e,n){return(0,_.mG)(this,void 0,void 0,function*(){"company"==n&&(e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(a=>(0,_.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.channels=a)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==n&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"02").toPromise().then(a=>(0,_.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.channels=a)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==n&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.channelName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"03").toPromise().then(a=>(0,_.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.regions=a)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==n&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.regionName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"04").toPromise().then(a=>(0,_.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.cluster=a)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==n&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.clusterName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"05").toPromise().then(a=>(0,_.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.branches=a)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==n&&(this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),e?(this.branchName=e.name,yield this.exportService.getAgentOffice(e.id).toPromise().then(a=>(0,_.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.agents=a)}))):(this.branchName=null,this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"office"==n&&(e?this.agentName=e.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.getAllReports(),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new d.cw({fromDate:new d.NI("",[d.kI.required,d.kI.nullValidator]),toDate:new d.NI("",[d.kI.required,d.kI.nullValidator]),agentId:new d.NI(""),companyId:new d.NI(""),channelId:new d.NI(""),regionId:new d.NI(""),clusterId:new d.NI(""),branchId:new d.NI("")})}isControlValid(e){const n=this.createFormGroup.controls[e];return n.valid&&(n.dirty||n.touched)}isControlInvalid(e){const n=this.createFormGroup.controls[e];return n.invalid&&(n.dirty||n.touched)}controlHasError(e,n){const a=this.createFormGroup.controls[n];return a.hasError(e)&&(a.dirty||a.touched)}isControlTouched(e){const n=this.createFormGroup.controls[e];return n.dirty||n.touched}doValid(e){if("FromDate"==e){let r=B(this.createFormGroup.controls.fromDate.value).format("YYYY-MM-DD"),l=B(this.createFormGroup.controls.toDate.value).format("YYYY-MM-DD");if(l){let v=r.split("-"),f=l.split("-"),s=Number(f[0])-Number(v[0]);0!=s&&1!=s&&this.createFormGroup.controls.toDate.setValue(""),0==s&&(v[1]>f[1]&&this.createFormGroup.controls.toDate.setValue(""),v[1]==f[1]&&v[2]>f[2]&&this.createFormGroup.controls.toDate.setValue(""))}if(r){var n=new Date(r);n.setFullYear(n.getFullYear()+1),n.setDate(n.getDate()-1),this.fromMinDate=new Date(r),this.fromMaxDate=n}}if("ToDate"==e){let r=B(this.createFormGroup.controls.fromDate.value).format("YYYY-MM-DD"),l=B(this.createFormGroup.controls.toDate.value).format("YYYY-MM-DD");if(r){let v=r.split("-"),f=l.split("-"),s=Number(f[0])-Number(v[0]);0!=s&&1!=s&&this.createFormGroup.controls.fromDate.setValue(""),0==s&&(v[1]>f[1]&&this.createFormGroup.controls.toDate.setValue(""),v[1]==f[1]&&v[2]>f[2]&&this.createFormGroup.controls.toDate.setValue(""))}if(l){var a=new Date(l);a.setFullYear(a.getFullYear()-1),a.setDate(a.getDate()+1),this.fromMinDate=a,this.fromMaxDate=new Date(l)}}this.cdf.detectChanges()}clearDate(e){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==e&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==e&&this.createFormGroup.controls.toDate.setValue(""),this.isData=!1,this.dataList=[],this.productList=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(e){var n=new Date(e),a=""+(n.getMonth()+1),r=""+n.getDate(),l=n.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[r,a,l].join("/")}mathRoundTo(e,n){const a=Math.pow(10,n);return(Math.round(e*a)/a).toLocaleString()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.sBO),t.Y36(S))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-report-detail-by-bank-branch"]],decls:46,vars:16,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool","search-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","regionId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","clusterId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","branchId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","agentName","bindValue","agentId","formControlName","agentId",1,"ng-custom-select",3,"readonly","items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"date-display"],[1,"search-display"],[2,"width","100%","overflow-y","scroll","overflow-x","scroll","max-height","500px"],["border","1"],["style","border-top: 1px solid #000;",4,"ngIf"],[2,"min-width","50px"],["style","min-width: 160px;",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[2,"border-top","1px solid #000"],["colspan","6"],[2,"min-width","160px"],[1,"right-border-transform"],[1,"text-left"],["class","text-right",4,"ngFor","ngForOf"],[1,"text-right"],["style","text-align: end;  padding: 0 5px 0 0;",4,"ngIf"],["style","text-align: end;",4,"ngIf"],["style","text-align: end; padding: 0 5px 0 0;",4,"ngIf"],[2,"text-align","end","padding","0 5px 0 0"],[2,"text-align","end"],[2,"color","gray","text-align","center"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return n.getAllReports()}),t._UZ(9,"span",8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return n.generateReportExcel()}),t.TgZ(11,"span",10),t._uU(12,"Generate"),t.qZA(),t.qZA(),t.TgZ(13,"button",7),t.NdJ("click",function(){return n.cancelReport()}),t.TgZ(14,"span",10),t._uU(15,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"form",12),t.TgZ(18,"div",13),t.TgZ(19,"div",14),t.TgZ(20,"div",15),t.TgZ(21,"label",16),t._uU(22,"From Date"),t.qZA(),t.TgZ(23,"div",17),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return n.doValid("FromDate")}),t.qZA(),t._UZ(25,"mat-datepicker-toggle",19),t._UZ(26,"mat-datepicker",20,21),t.qZA(),t.TgZ(28,"button",22),t.NdJ("click",function(){return n.clearDate("FromDate")}),t._uU(29,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",14),t.TgZ(31,"div",15),t.TgZ(32,"label",16),t._uU(33,"To Date"),t.qZA(),t.TgZ(34,"div",17),t.TgZ(35,"input",23),t.NdJ("dateChange",function(){return n.doValid("ToDate")}),t.qZA(),t._UZ(36,"mat-datepicker-toggle",19),t._UZ(37,"mat-datepicker",20,24),t.qZA(),t.TgZ(39,"button",22),t.NdJ("click",function(){return n.clearDate("ToDate")}),t._uU(40,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(41,z,8,3,"div",25),t.YNc(42,j,13,4,"div",25),t.YNc(43,X,13,4,"div",25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(44,Zt,35,12,"div",26),t.YNc(45,xt,2,0,"div",27)),2&e){const a=t.MAs(27),r=t.MAs(38);t.xp6(6),t.hij("",n.title,"\u200b"),t.xp6(4),t.Q6J("disabled",!n.isData),t.xp6(7),t.Q6J("formGroup",n.createFormGroup),t.xp6(7),t.Q6J("min",n.fromMinDate)("max",n.fromMaxDate)("matDatepicker",a),t.xp6(1),t.Q6J("for",a),t.xp6(10),t.Q6J("min",n.fromMinDate)("max",n.fromMaxDate)("matDatepicker",r),t.xp6(1),t.Q6J("for",r),t.xp6(5),t.Q6J("ngIf",""!=n.createFormGroup.value.fromDate&&""!=n.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=n.createFormGroup.value.fromDate&&""!=n.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=n.createFormGroup.value.fromDate&&""!=n.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",n.isData),t.xp6(1),t.Q6J("ngIf",!n.isData)}},directives:[d._Y,d.JL,d.sg,d.Fj,A.hl,d.JJ,d.u,A.nW,M.R9,A.Mq,Z.O5,Y.w9,Z.sg],pipes:[Z.JJ],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0 .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;position:relative;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.date-display[_ngcontent-%COMP%]{width:100%;overflow:hidden}.date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;min-width:135px;float:left;display:block}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#e3e3e3;transform:rotate(0);position:absolute;top:0;left:49%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:end;padding:0 5px 0 0}"]}),o})();var Ct=c(4205),At=c(45598),Tt=c(87626),bt=c(85993),yt=c(75396),T=c(44290),Ft=c(57730),Ot=c(92118),Nt=c(47975);let It=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[Z.uU,{provide:T._A,useClass:Ot.t7,deps:[T.Ad]},{provide:T.sG,useValue:Nt.Gs}],imports:[[Z.ez,d.u5,Y.A0,d.UX,Tt.vi,At.fA,bt.M,yt.X,A.FA,T.XK,Ft.c,M.lN,Ct.Bz.forChild([{path:"",component:Bt}])]]}),o})()}}]);