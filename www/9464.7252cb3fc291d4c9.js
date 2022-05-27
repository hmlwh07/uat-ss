"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9464],{9464:(Gt,G,c)=>{c.r(G),c.d(G,{ReportByAgentWeeklyModule:()=>It});var A=c(86019),_=c(64762),m=c(49133),Z=c(92070),R=c(53489),t=c(83668),x=c(44522),k=c(11901),w=c(62473),q=c(91691),b=c(18260),W=c(67198),V=c(71704),J=c(49875);const L=`${b.N.apiUrl}/summaryReportByBranchForWeekly`,P=`${b.N.apiUrl}/officeHirearchy`,U=`${b.N.apiUrl}/agentByOffice`,T=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let E=(()=>{class n extends q.i{constructor(e,a,o,r){super(e,L),this.httpClient=e,this.authService=a,this.platform=o,this.attachmentDownloadService=r}getOfficeHirearchy(e,a){const r=new x.LE({fromObject:{parentId:e,typeCode:a}});return this.httpClient.get(P,{params:r})}getAgentOffice(e){const o=new x.LE({fromObject:{officeId:e}});return this.httpClient.get(U,{params:o})}getAllReportData(e){e.fromDate&&(e.fromDate=this.formatDateYYYY_MM_DD(e.fromDate)),e.toDate&&(e.toDate=this.formatDateYYYY_MM_DD(e.toDate));const a=new x.LE({fromObject:e});return this.httpClient.get(L,{params:a})}exportExcel(e){const a=e.title,o=e.products,r=e.subHeader,l=e.searchValue,f=e.data;let v=new k.Workbook,p=v.addWorksheet("Sheet1");p.views=[{state:"frozen",xSplit:4,ySplit:5,activeCell:"A1"}],p.mergeCells("A1","B2");let F=p.getCell("A1");F.value=a,F.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},F.alignment={vertical:"middle",horizontal:"left"},p.mergeCells("G1","G1");let O=p.getCell("G1");O.value="Reported Date: "+this.formatReportedDate(new Date),O.font={name:"Calibri",size:10,bold:!0},O.alignment={vertical:"middle",horizontal:"left"},p.mergeCells("G2","G2");let I=p.getCell("G2");if(I.value="Reported By: "+this.authService.currentUserValue.firstName+this.authService.currentUserValue.lastName,I.font={name:"Calibri",size:10,bold:!0},I.alignment={vertical:"middle",horizontal:"left"},l.length>0)for(var d=0;d<l.length;d++){let u=null,s=null;if(l[d].fromDate&&(u="F1",s="From Date: "+l[d].fromDate),l[d].toDate&&(u="F2",s="To Date: "+l[d].toDate),l[d].companyName&&(u="L1",s="Company: "+l[d].companyName),l[d].channelName&&(u="M1",s="Channel: "+l[d].channelName),l[d].regionName&&(u="N1",s="Region: "+l[d].regionName),l[d].clusterName&&(u="L2",s="Cluster: "+l[d].clusterName),l[d].branchName&&(u="M2",s="Branch: "+l[d].branchName),l[d].agentName&&(u="N2",s="Agent: "+l[d].agentName),null!=u&&null!=s){let h=p.getCell(u);h.value=s,h.font={name:"Calibri",size:10,bold:!0},h.alignment={vertical:"middle",horizontal:"left"}}}p.addRow([]),p.mergeCells("A4:D4");let B=4;for(d=0;d<o.length;d++){let s=this.calculateStartPoint(B);B+=1,p.mergeCells(s+":"+s);let h=p.getCell(s);h.value=o[d],h.font={name:"Calibri",size:12,bold:!0},h.alignment={vertical:"middle",horizontal:"center"}}for(d=0;d<r.length;d++){let s=this.calculateDataPoint(d);p.mergeCells(s+":"+s);let h=p.getCell(s);h.value=r[d],h.font={name:"Calibri",size:12,bold:!0},h.alignment={vertical:"middle",horizontal:"center"}}f.forEach(u=>{let s=p.addRow(u),h=s.getCell(1);h&&(h.alignment={vertical:"middle",horizontal:"left"});let g=0;u.forEach(D=>{if(g++,2!=g&&3!=g&&4!=g&&5!=g){let y=s.getCell(g);y&&(y.alignment={vertical:"middle",horizontal:"right"})}if(1==g||2==g||3==g){let y=s.getCell(g);y&&(y.alignment={vertical:"middle",horizontal:"left"})}g>3&&(s.getCell(g).numFmt="#,##0.00_);(#,##0.00)")})}),p.columns.forEach(function(u,s){var h=0;u.eachCell({includeEmpty:!0},function(g){var D=g.value?g.value.toString().length:10;D>h&&(h=D)}),u.width=h<10?10:h}),v.xlsx.writeBuffer().then(u=>{let s=new Blob([u],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});this.platform.is("android")||this.platform.is("ios")?this.attachmentDownloadService.mobileDownload(a+"_"+this.formatDateDDMMYYY(new Date)+".xlsx",s):w.saveAs(s,a+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateStartPoint(e){return T[e]+"4"}calculateEndPoint(e){return T[e]+"4"}calculateDataPoint(e){return T[e]+"5"}formatDateDDMMYYY(e){var a=new Date(e),o=""+(a.getMonth()+1),r=""+a.getDate(),l=a.getFullYear();return o.length<2&&(o="0"+o),r.length<2&&(r="0"+r),[r,o,l].join("_")}mathRoundTo(e,a){const o=Math.pow(10,a);return(Math.round(e*o)/o).toLocaleString()}formatDateYYYY_MM_DD(e){var a=new Date(e),o=""+(a.getMonth()+1),r=""+a.getDate(),l=a.getFullYear();return o.length<2&&(o="0"+o),r.length<2&&(r="0"+r),[l,o,r].join("-")}formatReportedDate(e){var a=new Date(e),o=""+(a.getMonth()+1),r=""+a.getDate(),l=a.getFullYear();return o.length<2&&(o="0"+o),r.length<2&&(r="0"+r),[r,o,l].join("/")}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(x.eN),t.LFG(W.e8),t.LFG(V.t4),t.LFG(J.Ys))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var C=c(78480),M=c(86031),Y=c(57842);function S(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",29),t.TgZ(1,"div",15),t.TgZ(2,"label",16),t._uU(3,"Company"),t.qZA(),t.TgZ(4,"div",30),t.TgZ(5,"ng-select",32),t.NdJ("change",function(o){return t.CHM(e),t.oxw(2).changeOptions(o,"channel")}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(5),t.Q6J("items",e.selectOptions.companies)}}function Q(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",13),t.YNc(1,S,6,1,"div",28),t.TgZ(2,"div",29),t.TgZ(3,"div",15),t.TgZ(4,"label",16),t._uU(5,"Channel"),t.qZA(),t.TgZ(6,"div",30),t.TgZ(7,"ng-select",31),t.NdJ("change",function(o){return t.CHM(e),t.oxw().changeOptions(o,"region")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.fromDate&&""!=e.createFormGroup.value.toDate),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.channels.length)("items",e.selectOptions.channels)}}function H(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Region"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",33),t.NdJ("change",function(o){return t.CHM(e),t.oxw().changeOptions(o,"cluster")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Cluster"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",34),t.NdJ("change",function(o){return t.CHM(e),t.oxw().changeOptions(o,"branch")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.regions.length)("items",e.selectOptions.regions),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.cluster.length)("items",e.selectOptions.cluster)}}function z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Branch"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",35),t.NdJ("change",function(o){return t.CHM(e),t.oxw().changeOptions(o,"agent")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Agent Name"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",36),t.NdJ("change",function(o){return t.CHM(e),t.oxw().changeOptions(o,"office")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.branches.length)("items",e.selectOptions.branches),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.agents.length)("items",e.selectOptions.agents)}}function j(n,i){1&n&&t._UZ(0,"br")}function X(n,i){1&n&&t._UZ(0,"br")}function $(n,i){1&n&&t._UZ(0,"br")}function K(n,i){1&n&&t._UZ(0,"br")}function tt(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij("From Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.fromDate)," ")}}function et(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij("To Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.toDate),"")}}function at(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Company: ",e.companyName," ")}}function ot(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Channel: ",e.channelName," ")}}function nt(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Region: ",e.regionName," ")}}function rt(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,at,2,1,"span",39),t.YNc(2,ot,2,1,"span",39),t.YNc(3,nt,2,1,"span",39),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.channelId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.regionId)}}function it(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Cluster: ",e.clusterName," ")}}function lt(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Branch: ",e.branchName,"")}}function st(n,i){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(3);t.xp6(1),t.hij("Agent: ",e.agentName," ")}}function ct(n,i){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,it,2,1,"span",39),t.YNc(2,lt,2,1,"span",39),t.YNc(3,st,2,1,"span",39),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.branchId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.agentId)}}function dt(n,i){if(1&n&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Oqu(e.headerWeekRange)}}function pt(n,i){if(1&n&&(t.TgZ(0,"tr",47),t._UZ(1,"th",48),t.YNc(2,dt,2,1,"th",46),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",e.productList)}}function ht(n,i){if(1&n&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Oqu(e.headerWeekName)}}function mt(n,i){if(1&n&&(t.TgZ(0,"td",52),t._uU(1),t.ALo(2,"number"),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.target||0,"1.2-2"))}}function ut(n,i){1&n&&(t.TgZ(0,"td",52),t._uU(1,"0.00"),t.qZA())}function gt(n,i){if(1&n&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.weeklyValue||0,"1.2-2"),"")}}function ft(n,i){1&n&&(t.TgZ(0,"label"),t._uU(1,"0.00"),t.qZA())}function vt(n,i){if(1&n&&(t.TgZ(0,"td",52),t.YNc(1,gt,3,4,"label",39),t.YNc(2,ft,2,0,"label",39),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",e.weeklyValue),t.xp6(1),t.Q6J("ngIf",!e.weeklyValue)}}function _t(n,i){if(1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"td",49),t._uU(2),t.qZA(),t.TgZ(3,"td",49),t._uU(4),t.qZA(),t.TgZ(5,"td",49),t._uU(6),t.qZA(),t.YNc(7,mt,3,4,"td",50),t.YNc(8,ut,2,0,"td",50),t.YNc(9,vt,3,2,"td",51),t.qZA()),2&n){const e=i.$implicit,a=i.index,o=t.oxw(2);t.xp6(2),t.Oqu(e.agentName),t.xp6(2),t.Oqu(e.branchName),t.xp6(2),t.Oqu(e.activitiesName),t.xp6(1),t.Q6J("ngIf",e.target),t.xp6(1),t.Q6J("ngIf",!e.target),t.xp6(1),t.Q6J("ngForOf",o.dataList[a].productDataList)}}function yt(n,i){if(1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",37),t.TgZ(3,"div",38),t.YNc(4,j,1,0,"br",39),t.YNc(5,X,1,0,"br",39),t.TgZ(6,"h3",40),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",38),t.YNc(9,$,1,0,"br",39),t.YNc(10,K,1,0,"br",39),t.TgZ(11,"div",41),t.YNc(12,tt,2,1,"span",39),t.YNc(13,et,2,1,"span",39),t.qZA(),t.qZA(),t.TgZ(14,"div",42),t.YNc(15,rt,4,3,"div",39),t.YNc(16,ct,4,3,"div",39),t.qZA(),t.qZA(),t.TgZ(17,"div",43),t.TgZ(18,"table",44),t.YNc(19,pt,3,1,"tr",45),t.TgZ(20,"tr"),t.TgZ(21,"th"),t._uU(22,"Agent Name"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Branch Name"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"Activities Name"),t.qZA(),t.TgZ(27,"th"),t._uU(28,"Target"),t.qZA(),t.YNc(29,ht,2,1,"th",46),t.qZA(),t.YNc(30,_t,10,6,"tr",46),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.fromDate),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.toDate),t.xp6(2),t.Q6J("ngIf",""!=e.createFormGroup.value.companyId||""!=e.createFormGroup.value.channelId||""!=e.createFormGroup.value.regionId),t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.clusterId||""!=e.createFormGroup.value.branchId||""!=e.createFormGroup.value.agentId),t.xp6(3),t.Q6J("ngIf",e.productList.length>0),t.xp6(10),t.Q6J("ngForOf",e.productList),t.xp6(1),t.Q6J("ngForOf",e.dataList)}}function At(n,i){1&n&&(t.TgZ(0,"div",53),t._uU(1," There is no data "),t.qZA())}let Dt=(()=>{class n{constructor(e,a){this.cdf=e,this.exportService=a,this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.productValues=[],this.subHeader=[],this.dataExcel=[],this.isData=!1,this.productsHeader=[],this.branchDataList=[],this.dataList=[],this.branchDataForExcel=[],this.title="Individual details activity report - weekly",this.productsSubHeader=[]}ngOnInit(){this.loadForm(),this.getOfficeHirearchy(),this.fromMinDate=null,this.fromMaxDate=null}getOfficeHirearchy(){return(0,_.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(e=>(0,_.mG)(this,void 0,void 0,function*(){e&&(this.selectOptions.companies=e)}))})}getAllReports(){return(0,_.mG)(this,void 0,void 0,function*(){this.productList=[],this.dataList=[],this.createFormGroup.invalid?(0,R.w)(this.createFormGroup):yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(e=>(0,_.mG)(this,void 0,void 0,function*(){if(e){if(e.headerColumnList.length>0)for(var a=0;a<e.headerColumnList.length;a++)this.productList.push(e.headerColumnList[a]);if(e.dataList.length>0)for(this.isData=!0,e.dataList.sort((l,f)=>l.agentName<f.agentName?-1:l.agentName>f.agentName?1:0),this.dataList=e.dataList,a=0;a<this.dataList.length;a++){let f=[];for(var o=0;o<this.productList.length;o++)f.push({headerWeekName:this.productList[o].headerWeekName,headerWeekRange:this.productList[o].headerWeekRange,headerMonthName:this.productList[o].headerMonthName,headerDate:this.productList[o].headerDate,headerDateName:this.productList[o].headerDateName});if(this.dataList[a].productDataList=JSON.parse(JSON.stringify(f)),this.dataList[a].dynamicList)for(o=0;o<this.dataList[a].dynamicList.length;o++)for(var r=0;r<this.dataList[a].productDataList.length;r++)this.dataList[a].productDataList[r].headerWeekName==this.dataList[a].dynamicList[o].headerWeekName&&(this.dataList[a].productDataList[r].headerDateName=this.dataList[a].dynamicList[o].headerDateName,this.dataList[a].productDataList[r].headerDate=this.dataList[a].dynamicList[o].headerDate,this.dataList[a].productDataList[r].headerWeekName=this.dataList[a].dynamicList[o].headerWeekName,this.dataList[a].productDataList[r].headerWeekRange=this.dataList[a].dynamicList[o].headerWeekRange,this.dataList[a].productDataList[r].headerMonthName=this.dataList[a].dynamicList[o].headerMonthName,this.dataList[a].productDataList[r].dailyValue=Number(this.dataList[a].dynamicList[o].dailyValue),this.dataList[a].productDataList[r].weeklyValue=Number(this.dataList[a].dynamicList[o].weeklyValue),this.dataList[a].productDataList[r].monthlyValue=Number(this.dataList[a].dynamicList[o].monthlyValue))}else this.isData=!1}})),this.cdf.detectChanges()})}generateReportExcel(){this.productValues=[],this.subHeader=[],this.dataExcel=[];for(var e=0;e<this.productList.length;e++)this.productValues.push(this.productList[e].headerWeekRange);for(this.subHeader=["Agent Name","Branch Name","Activities Name","Target"],e=0;e<this.productList.length;e++)this.subHeader.push(this.productList[e].headerWeekName);for(e=0;e<this.dataList.length;e++){let v=[];v.push(this.dataList[e].agentName,this.dataList[e].branchName,this.dataList[e].activitiesName,this.dataList[e].target||0);for(var a=0;a<this.dataList[e].productDataList.length;a++)v.push(this.dataList[e].productDataList[a].weeklyValue||0);this.dataExcel.push(v)}let o=null,r=null;this.createFormGroup.value.fromDate&&(o=this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)),this.createFormGroup.value.fromDate&&(r=this.formatDateDDMMYYY(this.createFormGroup.value.toDate)),this.exportService.exportExcel({title:this.title,searchValue:[{fromDate:o},{toDate:r},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],products:this.productValues,subHeader:this.subHeader,data:this.dataExcel})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.productList=[],this.dataList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.fromMinDate=null,this.fromMaxDate=null,this.cdf.detectChanges()}changeOptions(e,a){return(0,_.mG)(this,void 0,void 0,function*(){"company"==a&&(e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(o=>(0,_.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.channels=o)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==a&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"02").toPromise().then(o=>(0,_.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.channels=o)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==a&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.channelName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"03").toPromise().then(o=>(0,_.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.regions=o)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==a&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.regionName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"04").toPromise().then(o=>(0,_.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.cluster=o)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==a&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.clusterName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"05").toPromise().then(o=>(0,_.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.branches=o)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==a&&(this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),e?(this.branchName=e.name,yield this.exportService.getAgentOffice(e.id).toPromise().then(o=>(0,_.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.agents=o)}))):(this.branchName=null,this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"office"==a&&(e?this.agentName=e.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.getAllReports(),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new m.cw({fromDate:new m.NI("",[m.kI.required,m.kI.nullValidator]),toDate:new m.NI("",[m.kI.required,m.kI.nullValidator]),agentId:new m.NI(""),companyId:new m.NI(""),channelId:new m.NI(""),regionId:new m.NI(""),clusterId:new m.NI(""),branchId:new m.NI("")})}isControlValid(e){const a=this.createFormGroup.controls[e];return a.valid&&(a.dirty||a.touched)}isControlInvalid(e){const a=this.createFormGroup.controls[e];return a.invalid&&(a.dirty||a.touched)}controlHasError(e,a){const o=this.createFormGroup.controls[a];return o.hasError(e)&&(o.dirty||o.touched)}isControlTouched(e){const a=this.createFormGroup.controls[e];return a.dirty||a.touched}doValid(e){if("FromDate"==e){let r=Z(this.createFormGroup.controls.fromDate.value).format("YYYY-MM-DD"),l=Z(this.createFormGroup.controls.toDate.value).format("YYYY-MM-DD");if(l){let f=r.split("-"),v=l.split("-"),p=Number(v[0])-Number(f[0]);0!=p&&1!=p&&this.createFormGroup.controls.toDate.setValue(""),0==p&&(f[1]>v[1]&&this.createFormGroup.controls.toDate.setValue(""),f[1]==v[1]&&f[2]>v[2]&&this.createFormGroup.controls.toDate.setValue(""))}if(r){var a=new Date(r);a.setFullYear(a.getFullYear()+1),a.setDate(a.getDate()-1),this.fromMinDate=new Date(r),this.fromMaxDate=a}}if("ToDate"==e){let r=Z(this.createFormGroup.controls.fromDate.value).format("YYYY-MM-DD"),l=Z(this.createFormGroup.controls.toDate.value).format("YYYY-MM-DD");if(r){let f=r.split("-"),v=l.split("-"),p=Number(v[0])-Number(f[0]);0!=p&&1!=p&&this.createFormGroup.controls.fromDate.setValue(""),0==p&&(f[1]>v[1]&&this.createFormGroup.controls.toDate.setValue(""),f[1]==v[1]&&f[2]>v[2]&&this.createFormGroup.controls.toDate.setValue(""))}if(l){var o=new Date(l);o.setFullYear(o.getFullYear()-1),o.setDate(o.getDate()+1),this.fromMinDate=o,this.fromMaxDate=new Date(l)}}this.cdf.detectChanges()}clearDate(e){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==e&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==e&&this.createFormGroup.controls.toDate.setValue(""),this.isData=!1,this.productList=[],this.dataList=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(e){var a=new Date(e),o=""+(a.getMonth()+1),r=""+a.getDate(),l=a.getFullYear();return o.length<2&&(o="0"+o),r.length<2&&(r="0"+r),[r,o,l].join("/")}mathRoundTo(e,a){const o=Math.pow(10,a);return(Math.round(e*o)/o).toLocaleString()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(E))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-report-by-agent-weekly"]],decls:46,vars:16,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool","search-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","regionId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","clusterId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","branchId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","agentName","bindValue","agentId","formControlName","agentId",1,"ng-custom-select",3,"readonly","items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"date-display"],[1,"search-display"],[2,"width","100%","overflow-y","scroll","overflow-x","scroll","max-height","500px"],["border","1"],["style","border-top: 1px solid #000;",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"border-top","1px solid #000"],["colspan","4"],[1,"text-left"],["class","text-right",4,"ngIf"],["class","text-right",4,"ngFor","ngForOf"],[1,"text-right"],[2,"color","gray","text-align","center"]],template:function(e,a){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return a.getAllReports()}),t._UZ(9,"span",8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return a.generateReportExcel()}),t.TgZ(11,"span",10),t._uU(12,"Generate"),t.qZA(),t.qZA(),t.TgZ(13,"button",7),t.NdJ("click",function(){return a.cancelReport()}),t.TgZ(14,"span",10),t._uU(15,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"form",12),t.TgZ(18,"div",13),t.TgZ(19,"div",14),t.TgZ(20,"div",15),t.TgZ(21,"label",16),t._uU(22,"From Date"),t.qZA(),t.TgZ(23,"div",17),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return a.doValid("FromDate")}),t.qZA(),t._UZ(25,"mat-datepicker-toggle",19),t._UZ(26,"mat-datepicker",20,21),t.qZA(),t.TgZ(28,"button",22),t.NdJ("click",function(){return a.clearDate("FromDate")}),t._uU(29,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",14),t.TgZ(31,"div",15),t.TgZ(32,"label",16),t._uU(33,"To Date"),t.qZA(),t.TgZ(34,"div",17),t.TgZ(35,"input",23),t.NdJ("dateChange",function(){return a.doValid("ToDate")}),t.qZA(),t._UZ(36,"mat-datepicker-toggle",19),t._UZ(37,"mat-datepicker",20,24),t.qZA(),t.TgZ(39,"button",22),t.NdJ("click",function(){return a.clearDate("ToDate")}),t._uU(40,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(41,Q,8,3,"div",25),t.YNc(42,H,13,4,"div",25),t.YNc(43,z,13,4,"div",25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(44,yt,31,12,"div",26),t.YNc(45,At,2,0,"div",27)),2&e){const o=t.MAs(27),r=t.MAs(38);t.xp6(6),t.Oqu(a.title),t.xp6(4),t.Q6J("disabled",!a.isData),t.xp6(7),t.Q6J("formGroup",a.createFormGroup),t.xp6(7),t.Q6J("min",a.fromMinDate)("max",a.fromMaxDate)("matDatepicker",o),t.xp6(1),t.Q6J("for",o),t.xp6(10),t.Q6J("min",a.fromMinDate)("max",a.fromMaxDate)("matDatepicker",r),t.xp6(1),t.Q6J("for",r),t.xp6(5),t.Q6J("ngIf",""!=a.createFormGroup.value.fromDate&&""!=a.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=a.createFormGroup.value.fromDate&&""!=a.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=a.createFormGroup.value.fromDate&&""!=a.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",a.isData),t.xp6(1),t.Q6J("ngIf",!a.isData)}},directives:[m._Y,m.JL,m.sg,m.Fj,C.hl,m.JJ,m.u,C.nW,M.R9,C.Mq,A.O5,Y.w9,A.sg],pipes:[A.JJ],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0 .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{min-width:160px;text-align:center;position:relative;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.date-display[_ngcontent-%COMP%]{width:100%;overflow:hidden}.date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;min-width:135px;float:left;display:block}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#e3e3e3;transform:rotate(0);position:absolute;top:0;left:49%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:end;padding:0 5px 0 0}"]}),n})();var Zt=c(87626),xt=c(45598),Ct=c(4205),Nt=c(85993),bt=c(75396),N=c(44290),Tt=c(57730),Ft=c(92118),Ot=c(47975);let It=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[A.uU,{provide:N._A,useClass:Ft.t7,deps:[N.Ad]},{provide:N.sG,useValue:Ot.Gs}],imports:[[A.ez,m.u5,Y.A0,m.UX,Zt.vi,xt.fA,Nt.M,bt.X,C.FA,N.XK,Tt.c,M.lN,Ct.Bz.forChild([{path:"",component:Dt}])]]}),n})()}}]);