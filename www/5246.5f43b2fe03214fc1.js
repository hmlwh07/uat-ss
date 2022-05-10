"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5246],{75246:(Bt,I,c)=>{c.r(I),c.d(I,{ReportByAgentYearlyModule:()=>Lt});var y=c(86019),v=c(64762),m=c(49133),x=c(92070),q=c(53489),t=c(83668),C=c(44522),R=c(11901),w=c(62473),U=c(91691),N=c(18260),J=c(67198),E=c(71704),V=c(49875);const G=`${N.N.apiUrl}/reportByAgentYearly`,Q=`${N.N.apiUrl}/officeHirearchy`,S=`${N.N.apiUrl}/agentByOffice`,Y=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let H=(()=>{class n extends U.i{constructor(e,o,a,r){super(e,G),this.httpClient=e,this.authService=o,this.platform=a,this.attachmentDownloadService=r}getOfficeHirearchy(e,o){const r=new C.LE({fromObject:{parentId:e,typeCode:o}});return this.httpClient.get(Q,{params:r})}getAgentOffice(e){const a=new C.LE({fromObject:{officeId:e}});return this.httpClient.get(S,{params:a})}getAllReportData(e){e.fromDate&&(e.fromDate=this.formatDateYYYY_MM_DD(e.fromDate)),e.toDate&&(e.toDate=this.formatDateYYYY_MM_DD(e.toDate));const o=new C.LE({fromObject:e});return this.httpClient.get(G,{params:o})}exportExcel(e){const o=e.title,a=e.products,r=e.subHeader,l=e.searchValue,_=e.data;let f=new R.Workbook,s=f.addWorksheet("Sheet1");s.views=[{state:"frozen",xSplit:5,ySplit:5,activeCell:"A1"}],s.mergeCells("A1","C2");let A=s.getCell("A1");A.value=o,A.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},A.alignment={vertical:"middle",horizontal:"left"},s.mergeCells("G1","G1");let F=s.getCell("G1");F.value="Reported Date: "+this.formatReportedDate(new Date),F.font={name:"Calibri",size:10,bold:!0},F.alignment={vertical:"middle",horizontal:"left"},s.mergeCells("G2","G2");let O=s.getCell("G2");if(O.value="Reported By: "+this.authService.currentUserValue.firstName+this.authService.currentUserValue.lastName,O.font={name:"Calibri",size:10,bold:!0},O.alignment={vertical:"middle",horizontal:"left"},l.length>0)for(var p=0;p<l.length;p++){let h=null,d=null;if(l[p].fromDate&&(h="F1",d="From Month/Year: "+l[p].fromDate),l[p].toDate&&(h="F2",d="To Month/Year: "+l[p].toDate),l[p].companyName&&(h="L1",d="Company: "+l[p].companyName),l[p].channelName&&(h="M1",d="Channel: "+l[p].channelName),l[p].regionName&&(h="N1",d="Region: "+l[p].regionName),l[p].clusterName&&(h="L2",d="Cluster: "+l[p].clusterName),l[p].branchName&&(h="M2",d="Branch: "+l[p].branchName),l[p].agentName&&(h="N2",d="Agent: "+l[p].agentName),null!=h&&null!=d){let u=s.getCell(h);u.value=d,u.font={name:"Calibri",size:10,bold:!0},u.alignment={vertical:"middle",horizontal:"left"}}}s.addRow([]),s.mergeCells("A4:E4");let L=5,B=6;for(p=0;p<a.length;p++){let d=this.calculateStartPoint(L);L+=2;let u=this.calculateEndPoint(B);B+=2,s.mergeCells(d+":"+u);let g=s.getCell(d);g.value=a[p],g.font={name:"Calibri",size:12,bold:!0},g.alignment={vertical:"middle",horizontal:"center"}}for(p=0;p<r.length;p++){let d=this.calculateDataPoint(p);s.mergeCells(d+":"+d);let u=s.getCell(d);u.value=r[p],u.font={name:"Calibri",size:12,bold:!0},u.alignment={vertical:"middle",horizontal:"center"}}_.forEach(h=>{let d=s.addRow(h),u=d.getCell(1);u&&(u.alignment={vertical:"middle",horizontal:"center"});let g=0;h.forEach(Z=>{if(g++,2!=g&&3!=g&&4!=g&&5!=g){let b=d.getCell(g);b&&(b.alignment={vertical:"middle",horizontal:"right"})}g>5&&(d.getCell(g).numFmt="#,##0.00_);(#,##0.00)")})}),s.columns.forEach(function(h,d){var u=0;h.eachCell({includeEmpty:!0},function(g){var Z=g.value?g.value.toString().length:10;Z>u&&(u=Z)}),h.width=u<10?10:u}),s.getColumn(1).width=5,s.getColumn(2).width=20,s.getColumn(3).width=15,s.getColumn(4).width=15,s.getColumn(5).width=20,f.xlsx.writeBuffer().then(h=>{let d=new Blob([h],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});this.platform.is("android")||this.platform.is("ios")?this.attachmentDownloadService.mobileDownload(o+"_"+this.formatDateDDMMYYY(new Date)+".xlsx",d):w.saveAs(d,o+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateStartPoint(e){return Y[e]+"4"}calculateEndPoint(e){return Y[e]+"4"}calculateDataPoint(e){return Y[e]+"5"}formatDateDDMMYYY(e){var o=new Date(e),a=""+(o.getMonth()+1),r=""+o.getDate(),l=o.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[r,a,l].join("_")}mathRoundTo(e,o){const a=Math.pow(10,o);return(Math.round(e*a)/a).toLocaleString()}formatDateYYYY_MM_DD(e){var o=new Date(e),a=""+(o.getMonth()+1),r=""+o.getDate(),l=o.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[l,a,r].join("-")}formatReportedDate(e){var o=new Date(e),a=""+(o.getMonth()+1),r=""+o.getDate(),l=o.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[r,a,l].join("/")}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(C.eN),t.LFG(J.e8),t.LFG(E.t4),t.LFG(V.Ys))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var D=c(78480),M=c(86031),P=c(57842);function j(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",29),t.TgZ(1,"div",15),t.TgZ(2,"label",16),t._uU(3,"Company"),t.qZA(),t.TgZ(4,"div",30),t.TgZ(5,"ng-select",32),t.NdJ("change",function(a){return t.CHM(e),t.oxw(2).changeOptions(a,"channel")}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(5),t.Q6J("items",e.selectOptions.companies)}}function z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",13),t.YNc(1,j,6,1,"div",28),t.TgZ(2,"div",29),t.TgZ(3,"div",15),t.TgZ(4,"label",16),t._uU(5,"Channel"),t.qZA(),t.TgZ(6,"div",30),t.TgZ(7,"ng-select",31),t.NdJ("change",function(a){return t.CHM(e),t.oxw().changeOptions(a,"region")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.fromDate&&""!=e.createFormGroup.value.toDate),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.channels.length)("items",e.selectOptions.channels)}}function k(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Region"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",33),t.NdJ("change",function(a){return t.CHM(e),t.oxw().changeOptions(a,"cluster")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Cluster"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",34),t.NdJ("change",function(a){return t.CHM(e),t.oxw().changeOptions(a,"branch")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.regions.length)("items",e.selectOptions.regions),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.cluster.length)("items",e.selectOptions.cluster)}}function X(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Branch"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",35),t.NdJ("change",function(a){return t.CHM(e),t.oxw().changeOptions(a,"agent")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Agent Name"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",36),t.NdJ("change",function(a){return t.CHM(e),t.oxw().changeOptions(a,"office")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.branches.length)("items",e.selectOptions.branches),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.agents.length)("items",e.selectOptions.agents)}}function $(n,i){1&n&&t._UZ(0,"br")}function W(n,i){1&n&&t._UZ(0,"br")}function K(n,i){1&n&&t._UZ(0,"br")}function tt(n,i){1&n&&t._UZ(0,"br")}function et(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij("From Month/Year: ",t.xi3(2,1,e.createFormGroup.value.fromDate,"MM/yyyy")," ")}}function ot(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"date"),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij("To Month/Year: ",t.xi3(2,1,e.createFormGroup.value.toDate,"MM/yyyy"),"")}}function nt(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Company: ",e.companyName," ")}}function at(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Channel: ",e.channelName," ")}}function rt(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Region: ",e.regionName," ")}}function it(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,nt,2,1,"span",39),t.YNc(2,at,2,1,"span",39),t.YNc(3,rt,2,1,"span",39),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.channelId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.regionId)}}function lt(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Cluster: ",e.clusterName," ")}}function st(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Branch: ",e.branchName,"")}}function ct(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Agent: ",e.agentName," ")}}function pt(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,lt,2,1,"span",39),t.YNc(2,st,2,1,"span",39),t.YNc(3,ct,2,1,"span",39),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.branchId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.agentId)}}function dt(n,i){if(1&n&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Oqu(e.reportMonth)}}function mt(n,i){if(1&n&&(t.TgZ(0,"tr",51),t._UZ(1,"th",52),t.YNc(2,dt,2,1,"th",50),t._UZ(3,"th",53),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",e.productList)}}function ht(n,i){1&n&&(t.TgZ(0,"th",54),t.TgZ(1,"span"),t._uU(2,"No of Policies "),t._UZ(3,"div",55),t.qZA(),t.TgZ(4,"span"),t._uU(5,"Premium"),t.qZA(),t.qZA())}function ut(n,i){if(1&n&&(t.TgZ(0,"span",63),t._uU(1),t.ALo(2,"number"),t._UZ(3,"div",55),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij("",t.xi3(2,1,e.noOfPolicies||0,"1.2-2")," ")}}function gt(n,i){if(1&n&&(t.TgZ(0,"span",64),t._uU(1),t.ALo(2,"number"),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.totalPremium||0,"1.2-2"))}}function ft(n,i){1&n&&(t.TgZ(0,"span",63),t._uU(1," 0.00 "),t._UZ(2,"div",55),t.qZA())}function _t(n,i){1&n&&(t.TgZ(0,"span",64),t._uU(1,"0.00"),t.qZA())}function vt(n,i){if(1&n&&(t.TgZ(0,"td",59),t.YNc(1,ut,4,4,"span",60),t.YNc(2,gt,3,4,"span",61),t.YNc(3,ft,3,0,"span",62),t.YNc(4,_t,2,0,"span",61),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",e.noOfPolicies),t.xp6(1),t.Q6J("ngIf",e.totalPremium),t.xp6(1),t.Q6J("ngIf",!e.noOfPolicies),t.xp6(1),t.Q6J("ngIf",!e.totalPremium)}}function yt(n,i){if(1&n&&(t.TgZ(0,"td",59),t._uU(1),t.ALo(2,"number"),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij("",t.xi3(2,1,e.totalPolicies||0,"1.2-2")," ")}}function At(n,i){1&n&&(t.TgZ(0,"td",59),t._uU(1,"0.0"),t.qZA())}function Zt(n,i){if(1&n&&(t.TgZ(0,"td",59),t._uU(1),t.ALo(2,"number"),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij("",t.xi3(2,1,e.totalPremium||0,"1.2-2")," ")}}function xt(n,i){1&n&&(t.TgZ(0,"td",59),t._uU(1,"0.0"),t.qZA())}function Ct(n,i){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",56),t._uU(4),t.qZA(),t.TgZ(5,"td",56),t._uU(6),t.qZA(),t.TgZ(7,"td",56),t._uU(8),t.qZA(),t.TgZ(9,"td",56),t._uU(10),t.qZA(),t.YNc(11,vt,5,4,"td",57),t.YNc(12,yt,3,4,"td",58),t.YNc(13,At,2,0,"td",58),t.YNc(14,Zt,3,4,"td",58),t.YNc(15,xt,2,0,"td",58),t.qZA()),2&n){const e=i.$implicit,o=i.index,a=t.oxw(2);t.xp6(2),t.Oqu(e.no),t.xp6(2),t.Oqu(e.cluster),t.xp6(2),t.Oqu(e.channel),t.xp6(2),t.Oqu(e.agentName),t.xp6(2),t.Oqu(e.agentNo),t.xp6(1),t.Q6J("ngForOf",a.dataList[o].productDataList),t.xp6(1),t.Q6J("ngIf",e.totalPolicies),t.xp6(1),t.Q6J("ngIf",!e.totalPolicies),t.xp6(1),t.Q6J("ngIf",e.totalPremium),t.xp6(1),t.Q6J("ngIf",!e.totalPremium)}}function Dt(n,i){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",37),t.TgZ(3,"div",38),t.YNc(4,$,1,0,"br",39),t.YNc(5,W,1,0,"br",39),t.TgZ(6,"h3",40),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",38),t.YNc(9,K,1,0,"br",39),t.YNc(10,tt,1,0,"br",39),t.TgZ(11,"div",41),t.YNc(12,et,3,4,"span",39),t.YNc(13,ot,3,4,"span",39),t.qZA(),t.qZA(),t.TgZ(14,"div",42),t.YNc(15,it,4,3,"div",39),t.YNc(16,pt,4,3,"div",39),t.qZA(),t.qZA(),t.TgZ(17,"div",43),t.TgZ(18,"table",44),t.YNc(19,mt,4,1,"tr",45),t.TgZ(20,"tr"),t.TgZ(21,"th",46),t._uU(22,"No"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Branch"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"Channel"),t.qZA(),t.TgZ(27,"th"),t._uU(28,"Agent Name"),t.qZA(),t.TgZ(29,"th"),t._uU(30,"Agent No."),t.qZA(),t.YNc(31,ht,6,0,"th",47),t.TgZ(32,"th",48),t._uU(33,"Total No. of Policies"),t.qZA(),t.TgZ(34,"th",49),t._uU(35,"Total Premium"),t.qZA(),t.qZA(),t.YNc(36,Ct,16,10,"tr",50),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.fromDate),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.toDate),t.xp6(2),t.Q6J("ngIf",""!=e.createFormGroup.value.companyId||""!=e.createFormGroup.value.channelId||""!=e.createFormGroup.value.regionId),t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.clusterId||""!=e.createFormGroup.value.branchId||""!=e.createFormGroup.value.agentId),t.xp6(3),t.Q6J("ngIf",e.productList.length>0),t.xp6(12),t.Q6J("ngForOf",e.productList),t.xp6(5),t.Q6J("ngForOf",e.dataList)}}function Tt(n,i){1&n&&(t.TgZ(0,"div",65),t._uU(1," There is no data "),t.qZA())}let bt=(()=>{class n{constructor(e,o,a){this.cdf=e,this.datePipe=o,this.exportService=a,this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.productValues=[],this.subHeader=[],this.dataExcel=[],this.isData=!1,this.dataList=[],this.totalDataList=[],this.title="Individual production summary"}ngOnInit(){this.loadForm(),this.getOfficeHirearchy(),this.fromMinDate=null,this.fromMaxDate=null}getOfficeHirearchy(){return(0,v.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(e=>(0,v.mG)(this,void 0,void 0,function*(){e&&(this.selectOptions.companies=e)}))})}getAllReports(){return(0,v.mG)(this,void 0,void 0,function*(){this.productList=[],this.dataList=[],this.createFormGroup.invalid?(0,q.w)(this.createFormGroup):yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(e=>(0,v.mG)(this,void 0,void 0,function*(){if(e){if(e.headerColumnList.length>0)for(var o=0;o<e.headerColumnList.length;o++)this.productList.push(e.headerColumnList[o]);if(e.dataList.length>0){this.isData=!0,this.dataList=e.dataList;let l=0;for(o=0;o<this.dataList.length;o++){this.dataList[o].totalPolicies=0,this.dataList[o].totalPremium=0;let f=0,s=0,A=[];for(var a=0;a<this.productList.length;a++)A.push({reportMonth:this.productList[a].reportMonth,noOfPolicies:0,totalPremium:0});if(l++,this.dataList[o].no=l,this.dataList[o].productDataList=A,this.dataList[o].dynamicList){for(a=0;a<this.dataList[o].dynamicList.length;a++)for(var r=0;r<this.dataList[o].productDataList.length;r++)this.dataList[o].productDataList[r].reportMonth==this.dataList[o].dynamicList[a].reportMonth&&(this.dataList[o].productDataList[r].noOfPolicies=this.dataList[o].dynamicList[a].noOfPolicies,this.dataList[o].productDataList[r].totalPremium=this.dataList[o].dynamicList[a].totalPremium,f+=this.dataList[o].dynamicList[a].noOfPolicies,s+=this.dataList[o].dynamicList[a].totalPremium);this.dataList[o].totalPolicies=f,this.dataList[o].totalPremium=s}}}else this.isData=!1}})),this.cdf.detectChanges()})}generateReportExcel(){this.productValues=[],this.subHeader=[],this.dataExcel=[];for(var e=0;e<this.productList.length;e++)this.productValues.push(this.productList[e].reportMonth);for(this.subHeader=["No.","Branch","Channel","Agent Name","Agent No."],e=0;e<this.productList.length;e++)this.subHeader.push("No of Policies"),this.subHeader.push("Premium");this.subHeader.push("Total No. of Policies"),this.subHeader.push("Total Premium");let o=0;for(e=0;e<this.dataList.length;e++){let s=[];o++,s.push(o,this.dataList[e].cluster,this.dataList[e].channel,this.dataList[e].agentName,this.dataList[e].agentNo);for(var a=0;a<this.dataList[e].productDataList.length;a++)s.push(this.dataList[e].productDataList[a].noOfPolicies,this.dataList[e].productDataList[a].totalPremium||0);s.push(this.dataList[e].totalPolicies||0,this.dataList[e].totalPremium||0),this.dataExcel.push(s)}let r=null,l=null;this.createFormGroup.value.fromDate&&(r=this.datePipe.transform(this.createFormGroup.value.fromDate,"MM/yyyy")),this.createFormGroup.value.fromDate&&(l=this.datePipe.transform(this.createFormGroup.value.toDate,"MM/yyyy")),this.exportService.exportExcel({title:this.title,searchValue:[{fromDate:r},{toDate:l},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],products:this.productValues,subHeader:this.subHeader,data:this.dataExcel})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.productList=[],this.dataList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.fromMinDate=null,this.fromMaxDate=null,this.cdf.detectChanges()}changeOptions(e,o){return(0,v.mG)(this,void 0,void 0,function*(){"company"==o&&(e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.channels=a)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==o&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"02").toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.channels=a)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==o&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.channelName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"03").toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.regions=a)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==o&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.regionName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"04").toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.cluster=a)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==o&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.clusterName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"05").toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.branches=a)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==o&&(this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),e?(this.branchName=e.name,yield this.exportService.getAgentOffice(e.id).toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.agents=a)}))):(this.branchName=null,this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"office"==o&&(e?this.agentName=e.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.getAllReports(),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new m.cw({fromDate:new m.NI("",[m.kI.required,m.kI.nullValidator]),toDate:new m.NI("",[m.kI.required,m.kI.nullValidator]),agentId:new m.NI(""),companyId:new m.NI(""),channelId:new m.NI(""),regionId:new m.NI(""),clusterId:new m.NI(""),branchId:new m.NI("")})}isControlValid(e){const o=this.createFormGroup.controls[e];return o.valid&&(o.dirty||o.touched)}isControlInvalid(e){const o=this.createFormGroup.controls[e];return o.invalid&&(o.dirty||o.touched)}controlHasError(e,o){const a=this.createFormGroup.controls[o];return a.hasError(e)&&(a.dirty||a.touched)}isControlTouched(e){const o=this.createFormGroup.controls[e];return o.dirty||o.touched}doValid(e){if("FromDate"==e){let r=x(this.createFormGroup.controls.fromDate.value).format("YYYY-MM-DD"),l=x(this.createFormGroup.controls.toDate.value).format("YYYY-MM-DD");if(l){let _=r.split("-"),f=l.split("-"),s=Number(f[0])-Number(_[0]);0!=s&&1!=s&&this.createFormGroup.controls.toDate.setValue(""),0==s&&(_[1]>f[1]&&this.createFormGroup.controls.toDate.setValue(""),_[1]==f[1]&&_[2]>f[2]&&this.createFormGroup.controls.toDate.setValue(""))}if(r){var o=new Date(r);o.setFullYear(o.getFullYear()+1),o.setDate(o.getDate()-1),this.fromMinDate=new Date(r),this.fromMaxDate=o}}if("ToDate"==e){let r=x(this.createFormGroup.controls.fromDate.value).format("YYYY-MM-DD"),l=x(this.createFormGroup.controls.toDate.value).format("YYYY-MM-DD");if(r){let _=r.split("-"),f=l.split("-"),s=Number(f[0])-Number(_[0]);0!=s&&1!=s&&this.createFormGroup.controls.fromDate.setValue(""),0==s&&(_[1]>f[1]&&this.createFormGroup.controls.toDate.setValue(""),_[1]==f[1]&&_[2]>f[2]&&this.createFormGroup.controls.toDate.setValue(""))}if(l){var a=new Date(l);a.setFullYear(a.getFullYear()-1),a.setDate(a.getDate()+1),this.fromMinDate=a,this.fromMaxDate=new Date(l)}}this.cdf.detectChanges()}clearDate(e){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==e&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==e&&this.createFormGroup.controls.toDate.setValue(""),this.isData=!1,this.productList=[],this.dataList=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(e){var o=new Date(e),a=""+(o.getMonth()+1),r=""+o.getDate(),l=o.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[r,a,l].join("/")}mathRoundTo(e,o){const a=Math.pow(10,o);return(Math.round(e*a)/a).toLocaleString()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(y.uU),t.Y36(H))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-report-by-agent-yearly"]],decls:46,vars:16,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool","search-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","regionId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","clusterId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","branchId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","agentName","bindValue","agentId","formControlName","agentId",1,"ng-custom-select",3,"readonly","items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"date-display"],[1,"search-display"],[2,"width","100%","overflow-y","scroll","overflow-x","scroll","max-height","500px"],["border","1"],["style","border-top: 1px solid #000;",4,"ngIf"],[2,"min-width","50px"],["style","min-width: 160px;",4,"ngFor","ngForOf"],[2,"min-width","115px"],[2,"min-width","100px"],[4,"ngFor","ngForOf"],[2,"border-top","1px solid #000"],["colspan","5"],["colspan","2"],[2,"min-width","160px"],[1,"right-border-transform"],[1,"text-left"],["class","text-right",4,"ngFor","ngForOf"],["class","text-right",4,"ngIf"],[1,"text-right"],["style","text-align: end;  padding: 0 5px 0 0;",4,"ngIf"],["style","text-align: end;",4,"ngIf"],["style","text-align: end; padding: 0 5px 0 0;",4,"ngIf"],[2,"text-align","end","padding","0 5px 0 0"],[2,"text-align","end"],[2,"color","gray","text-align","center"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return o.getAllReports()}),t._UZ(9,"span",8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return o.generateReportExcel()}),t.TgZ(11,"span",10),t._uU(12,"Generate"),t.qZA(),t.qZA(),t.TgZ(13,"button",7),t.NdJ("click",function(){return o.cancelReport()}),t.TgZ(14,"span",10),t._uU(15,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"form",12),t.TgZ(18,"div",13),t.TgZ(19,"div",14),t.TgZ(20,"div",15),t.TgZ(21,"label",16),t._uU(22,"From Month/Year"),t.qZA(),t.TgZ(23,"div",17),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return o.doValid("FromDate")}),t.qZA(),t._UZ(25,"mat-datepicker-toggle",19),t._UZ(26,"mat-datepicker",20,21),t.qZA(),t.TgZ(28,"button",22),t.NdJ("click",function(){return o.clearDate("FromDate")}),t._uU(29,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",14),t.TgZ(31,"div",15),t.TgZ(32,"label",16),t._uU(33,"To Month/Year"),t.qZA(),t.TgZ(34,"div",17),t.TgZ(35,"input",23),t.NdJ("dateChange",function(){return o.doValid("ToDate")}),t.qZA(),t._UZ(36,"mat-datepicker-toggle",19),t._UZ(37,"mat-datepicker",20,24),t.qZA(),t.TgZ(39,"button",22),t.NdJ("click",function(){return o.clearDate("ToDate")}),t._uU(40,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(41,z,8,3,"div",25),t.YNc(42,k,13,4,"div",25),t.YNc(43,X,13,4,"div",25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(44,Dt,37,12,"div",26),t.YNc(45,Tt,2,0,"div",27)),2&e){const a=t.MAs(27),r=t.MAs(38);t.xp6(6),t.Oqu(o.title),t.xp6(4),t.Q6J("disabled",!o.isData),t.xp6(7),t.Q6J("formGroup",o.createFormGroup),t.xp6(7),t.Q6J("min",o.fromMinDate)("max",o.fromMaxDate)("matDatepicker",a),t.xp6(1),t.Q6J("for",a),t.xp6(10),t.Q6J("min",o.fromMinDate)("max",o.fromMaxDate)("matDatepicker",r),t.xp6(1),t.Q6J("for",r),t.xp6(5),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",o.isData),t.xp6(1),t.Q6J("ngIf",!o.isData)}},directives:[m._Y,m.JL,m.sg,m.Fj,D.hl,m.JJ,m.u,D.nW,M.R9,D.Mq,y.O5,P.w9,y.sg],pipes:[y.uU,y.JJ],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0 .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;position:relative;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.date-display[_ngcontent-%COMP%]{width:100%;overflow:hidden}.date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;min-width:135px;float:left;display:block}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#e3e3e3;transform:rotate(0);position:absolute;top:0;left:49%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:end;padding:0 5px 0 0}"]}),n})();var Nt=c(87626),Yt=c(45598),Ft=c(4205),Ot=c(85993),It=c(75396),T=c(44290),Gt=c(57730),Mt=c(92118),Pt=c(47975);let Lt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[y.uU,{provide:T._A,useClass:Mt.t7,deps:[T.Ad]},{provide:T.sG,useValue:Pt.Ny}],imports:[[y.ez,m.u5,P.A0,m.UX,Nt.vi,Yt.fA,Ot.M,It.X,D.FA,T.XK,Gt.c,M.lN,Ft.Bz.forChild([{path:"",component:bt}])]]}),n})()}}]);