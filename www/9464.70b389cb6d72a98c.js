"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9464],{9464:(Ge,I,d)=>{d.r(I),d.d(I,{ReportByAgentWeeklyModule:()=>Te});var D=d(86019),v=d(64762),p=d(49133),O=d(92070),R=d(53489),e=d(83668),Z=d(44522),k=d(11901),w=d(62473),q=d(91691),F=d(18260),W=d(67198);const M=`${F.N.apiUrl}/summaryReportByBranchForWeekly`,J=`${F.N.apiUrl}/officeHirearchy`,P=`${F.N.apiUrl}/agentByOffice`,N=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let V=(()=>{class n extends q.i{constructor(t,a){super(t,M),this.httpClient=t,this.authService=a}getOfficeHirearchy(t,a){const r=new Z.LE({fromObject:{parentId:t,typeCode:a}});return this.httpClient.get(J,{params:r})}getAgentOffice(t){const o=new Z.LE({fromObject:{officeId:t}});return this.httpClient.get(P,{params:o})}getAllReportData(t){t.fromDate&&(t.fromDate=this.formatDateYYYY_MM_DD(t.fromDate)),t.toDate&&(t.toDate=this.formatDateYYYY_MM_DD(t.toDate));const a=new Z.LE({fromObject:t});return this.httpClient.get(M,{params:a})}exportExcel(t){const a=t.title,o=t.products,r=t.subHeader,l=t.searchValue,g=t.data;let y=new k.Workbook,f=y.addWorksheet("Sheet1");f.views=[{state:"frozen",xSplit:4,ySplit:5,activeCell:"A1"}],f.mergeCells("A1","B2");let b=f.getCell("A1");b.value=a,b.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},b.alignment={vertical:"middle",horizontal:"left"},f.mergeCells("G1","G1");let T=f.getCell("G1");T.value="Reported Date: "+this.formatReportedDate(new Date),T.font={name:"Calibri",size:10,bold:!0},T.alignment={vertical:"middle",horizontal:"left"},f.mergeCells("G2","G2");let G=f.getCell("G2");if(G.value="Reported By: "+this.authService.currentUserValue.username,G.font={name:"Calibri",size:10,bold:!0},G.alignment={vertical:"middle",horizontal:"left"},l.length>0)for(var c=0;c<l.length;c++){let m=null,s=null;if(l[c].fromDate&&(m="F1",s="From Date: "+l[c].fromDate),l[c].toDate&&(m="F2",s="To Date: "+l[c].toDate),l[c].companyName&&(m="L1",s="Company: "+l[c].companyName),l[c].channelName&&(m="M1",s="Channel: "+l[c].channelName),l[c].regionName&&(m="N1",s="Region: "+l[c].regionName),l[c].clusterName&&(m="L2",s="Cluster: "+l[c].clusterName),l[c].branchName&&(m="M2",s="Branch: "+l[c].branchName),l[c].agentName&&(m="N2",s="Agent: "+l[c].agentName),null!=m&&null!=s){let h=f.getCell(m);h.value=s,h.font={name:"Calibri",size:10,bold:!0},h.alignment={vertical:"middle",horizontal:"left"}}}f.addRow([]),f.mergeCells("A4:D4");let B=4;for(c=0;c<o.length;c++){let s=this.calculateStartPoint(B);B+=1,f.mergeCells(s+":"+s);let h=f.getCell(s);h.value=o[c],h.font={name:"Calibri",size:12,bold:!0},h.alignment={vertical:"middle",horizontal:"center"}}for(c=0;c<r.length;c++){let s=this.calculateDataPoint(c);f.mergeCells(s+":"+s);let h=f.getCell(s);h.value=r[c],h.font={name:"Calibri",size:12,bold:!0},h.alignment={vertical:"middle",horizontal:"center"}}g.forEach(m=>{let s=f.addRow(m),h=s.getCell(1);h&&(h.alignment={vertical:"middle",horizontal:"left"});let u=0;m.forEach(A=>{if(u++,2!=u&&3!=u&&4!=u&&5!=u){let _=s.getCell(u);_&&(_.alignment={vertical:"middle",horizontal:"right"})}if(1==u||2==u||3==u){let _=s.getCell(u);_&&(_.alignment={vertical:"middle",horizontal:"left"})}u>3&&(s.getCell(u).numFmt="#,##0.00_);(#,##0.00)")})}),f.columns.forEach(function(m,s){var h=0;m.eachCell({includeEmpty:!0},function(u){var A=u.value?u.value.toString().length:10;A>h&&(h=A)}),m.width=h<10?10:h}),y.xlsx.writeBuffer().then(m=>{let s=new Blob([m],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});w.saveAs(s,a+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateStartPoint(t){return N[t]+"4"}calculateEndPoint(t){return N[t]+"4"}calculateDataPoint(t){return N[t]+"5"}formatDateDDMMYYY(t){var a=new Date(t),o=""+(a.getMonth()+1),r=""+a.getDate(),l=a.getFullYear();return o.length<2&&(o="0"+o),r.length<2&&(r="0"+r),[r,o,l].join("_")}mathRoundTo(t,a){const o=Math.pow(10,a);return(Math.round(t*o)/o).toLocaleString()}formatDateYYYY_MM_DD(t){var a=new Date(t),o=""+(a.getMonth()+1),r=""+a.getDate(),l=a.getFullYear();return o.length<2&&(o="0"+o),r.length<2&&(r="0"+r),[l,o,r].join("-")}formatReportedDate(t){var a=new Date(t),o=""+(a.getMonth()+1),r=""+a.getDate(),l=a.getFullYear();return o.length<2&&(o="0"+o),r.length<2&&(r="0"+r),[r,o,l].join("/")}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(Z.eN),e.LFG(W.e8))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var x=d(78480),L=d(86031),Y=d(57842);function U(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",29),e.TgZ(1,"div",15),e.TgZ(2,"label",16),e._uU(3,"Company"),e.qZA(),e.TgZ(4,"div",30),e.TgZ(5,"ng-select",32),e.NdJ("change",function(o){return e.CHM(t),e.oxw(2).changeOptions(o,"channel")}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw(2);e.xp6(5),e.Q6J("items",t.selectOptions.companies)}}function E(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",13),e.YNc(1,U,6,1,"div",28),e.TgZ(2,"div",29),e.TgZ(3,"div",15),e.TgZ(4,"label",16),e._uU(5,"Channel"),e.qZA(),e.TgZ(6,"div",30),e.TgZ(7,"ng-select",31),e.NdJ("change",function(o){return e.CHM(t),e.oxw().changeOptions(o,"region")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",""!=t.createFormGroup.value.fromDate&&""!=t.createFormGroup.value.toDate),e.xp6(6),e.Q6J("readonly",0==t.selectOptions.channels.length)("items",t.selectOptions.channels)}}function Q(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",13),e.TgZ(1,"div",29),e.TgZ(2,"div",15),e.TgZ(3,"label",16),e._uU(4,"Region"),e.qZA(),e.TgZ(5,"div",30),e.TgZ(6,"ng-select",33),e.NdJ("change",function(o){return e.CHM(t),e.oxw().changeOptions(o,"cluster")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div",29),e.TgZ(8,"div",15),e.TgZ(9,"label",16),e._uU(10,"Cluster"),e.qZA(),e.TgZ(11,"div",30),e.TgZ(12,"ng-select",34),e.NdJ("change",function(o){return e.CHM(t),e.oxw().changeOptions(o,"branch")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(6),e.Q6J("readonly",0==t.selectOptions.regions.length)("items",t.selectOptions.regions),e.xp6(6),e.Q6J("readonly",0==t.selectOptions.cluster.length)("items",t.selectOptions.cluster)}}function S(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",13),e.TgZ(1,"div",29),e.TgZ(2,"div",15),e.TgZ(3,"label",16),e._uU(4,"Branch"),e.qZA(),e.TgZ(5,"div",30),e.TgZ(6,"ng-select",35),e.NdJ("change",function(o){return e.CHM(t),e.oxw().changeOptions(o,"agent")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div",29),e.TgZ(8,"div",15),e.TgZ(9,"label",16),e._uU(10,"Agent Name"),e.qZA(),e.TgZ(11,"div",30),e.TgZ(12,"ng-select",36),e.NdJ("change",function(o){return e.CHM(t),e.oxw().changeOptions(o,"office")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(6),e.Q6J("readonly",0==t.selectOptions.branches.length)("items",t.selectOptions.branches),e.xp6(6),e.Q6J("readonly",0==t.selectOptions.agents.length)("items",t.selectOptions.agents)}}function H(n,i){1&n&&e._UZ(0,"br")}function z(n,i){1&n&&e._UZ(0,"br")}function j(n,i){1&n&&e._UZ(0,"br")}function X(n,i){1&n&&e._UZ(0,"br")}function $(n,i){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij("From Date: ",t.formatDateDDMMYYY(t.createFormGroup.value.fromDate)," ")}}function K(n,i){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij("To Date: ",t.formatDateDDMMYYY(t.createFormGroup.value.toDate),"")}}function ee(n,i){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.hij("Company: ",t.companyName," ")}}function te(n,i){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.hij("Channel: ",t.channelName," ")}}function ae(n,i){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.hij("Region: ",t.regionName," ")}}function oe(n,i){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,ee,2,1,"span",39),e.YNc(2,te,2,1,"span",39),e.YNc(3,ae,2,1,"span",39),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.companyId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.channelId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.regionId)}}function ne(n,i){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.hij("Cluster: ",t.clusterName," ")}}function re(n,i){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.hij("Branch: ",t.branchName,"")}}function ie(n,i){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw(3);e.xp6(1),e.hij("Agent: ",t.agentName," ")}}function le(n,i){if(1&n&&(e.TgZ(0,"div"),e.YNc(1,ne,2,1,"span",39),e.YNc(2,re,2,1,"span",39),e.YNc(3,ie,2,1,"span",39),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.clusterId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.branchId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.agentId)}}function se(n,i){if(1&n&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Oqu(t.headerWeekRange)}}function ce(n,i){if(1&n&&(e.TgZ(0,"tr",47),e._UZ(1,"th",48),e.YNc(2,se,2,1,"th",46),e.qZA()),2&n){const t=e.oxw(2);e.xp6(2),e.Q6J("ngForOf",t.productList)}}function de(n,i){if(1&n&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Oqu(t.headerWeekName)}}function he(n,i){if(1&n&&(e.TgZ(0,"td",52),e._uU(1),e.ALo(2,"number"),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(e.xi3(2,1,t.target||0,"1.2-2"))}}function pe(n,i){1&n&&(e.TgZ(0,"td",52),e._uU(1,"0.00"),e.qZA())}function me(n,i){if(1&n&&(e.TgZ(0,"label"),e._uU(1),e.ALo(2,"number"),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.weeklyValue||0,"1.2-2"),"")}}function ue(n,i){1&n&&(e.TgZ(0,"label"),e._uU(1,"0.00"),e.qZA())}function ge(n,i){if(1&n&&(e.TgZ(0,"td",52),e.YNc(1,me,3,4,"label",39),e.YNc(2,ue,2,0,"label",39),e.qZA()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("ngIf",t.weeklyValue),e.xp6(1),e.Q6J("ngIf",!t.weeklyValue)}}function fe(n,i){if(1&n&&(e.TgZ(0,"tr"),e.TgZ(1,"td",49),e._uU(2),e.qZA(),e.TgZ(3,"td",49),e._uU(4),e.qZA(),e.TgZ(5,"td",49),e._uU(6),e.qZA(),e.YNc(7,he,3,4,"td",50),e.YNc(8,pe,2,0,"td",50),e.YNc(9,ge,3,2,"td",51),e.qZA()),2&n){const t=i.$implicit,a=i.index,o=e.oxw(2);e.xp6(2),e.Oqu(t.agentName),e.xp6(2),e.Oqu(t.branchName),e.xp6(2),e.Oqu(t.activitiesName),e.xp6(1),e.Q6J("ngIf",t.target),e.xp6(1),e.Q6J("ngIf",!t.target),e.xp6(1),e.Q6J("ngForOf",o.dataList[a].productDataList)}}function ve(n,i){if(1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",37),e.TgZ(3,"div",38),e.YNc(4,H,1,0,"br",39),e.YNc(5,z,1,0,"br",39),e.TgZ(6,"h3",40),e._uU(7),e.qZA(),e.qZA(),e.TgZ(8,"div",38),e.YNc(9,j,1,0,"br",39),e.YNc(10,X,1,0,"br",39),e.TgZ(11,"div",41),e.YNc(12,$,2,1,"span",39),e.YNc(13,K,2,1,"span",39),e.qZA(),e.qZA(),e.TgZ(14,"div",42),e.YNc(15,oe,4,3,"div",39),e.YNc(16,le,4,3,"div",39),e.qZA(),e.qZA(),e.TgZ(17,"div",43),e.TgZ(18,"table",44),e.YNc(19,ce,3,1,"tr",45),e.TgZ(20,"tr"),e.TgZ(21,"th"),e._uU(22,"Agent Name"),e.qZA(),e.TgZ(23,"th"),e._uU(24,"Branch Name"),e.qZA(),e.TgZ(25,"th"),e._uU(26,"Activities Name"),e.qZA(),e.TgZ(27,"th"),e._uU(28,"Target"),e.qZA(),e.YNc(29,de,2,1,"th",46),e.qZA(),e.YNc(30,fe,10,6,"tr",46),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(4),e.Q6J("ngIf",t.createFormGroup.value.companyId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.clusterId),e.xp6(2),e.Oqu(t.title),e.xp6(2),e.Q6J("ngIf",t.createFormGroup.value.companyId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.clusterId),e.xp6(2),e.Q6J("ngIf",t.createFormGroup.value.fromDate),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.toDate),e.xp6(2),e.Q6J("ngIf",""!=t.createFormGroup.value.companyId||""!=t.createFormGroup.value.channelId||""!=t.createFormGroup.value.regionId),e.xp6(1),e.Q6J("ngIf",""!=t.createFormGroup.value.clusterId||""!=t.createFormGroup.value.branchId||""!=t.createFormGroup.value.agentId),e.xp6(3),e.Q6J("ngIf",t.productList.length>0),e.xp6(10),e.Q6J("ngForOf",t.productList),e.xp6(1),e.Q6J("ngForOf",t.dataList)}}function _e(n,i){1&n&&(e.TgZ(0,"div",53),e._uU(1," There is no data "),e.qZA())}let ye=(()=>{class n{constructor(t,a){this.cdf=t,this.exportService=a,this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.productValues=[],this.subHeader=[],this.dataExcel=[],this.isData=!1,this.productsHeader=[],this.branchDataList=[],this.dataList=[],this.branchDataForExcel=[],this.title="Weekly Activity Report",this.productsSubHeader=[]}ngOnInit(){this.loadForm(),this.getOfficeHirearchy(),this.fromMinDate=null,this.fromMaxDate=null}getOfficeHirearchy(){return(0,v.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(t=>(0,v.mG)(this,void 0,void 0,function*(){t&&(this.selectOptions.companies=t)}))})}getAllReports(){return(0,v.mG)(this,void 0,void 0,function*(){this.productList=[],this.dataList=[],this.createFormGroup.invalid?(0,R.w)(this.createFormGroup):yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(t=>(0,v.mG)(this,void 0,void 0,function*(){if(t){if(t.headerColumnList.length>0)for(var a=0;a<t.headerColumnList.length;a++)this.productList.push(t.headerColumnList[a]);if(t.dataList.length>0)for(this.isData=!0,t.dataList.sort((l,g)=>l.agentName<g.agentName?-1:l.agentName>g.agentName?1:0),this.dataList=t.dataList,a=0;a<this.dataList.length;a++){let g=[];for(var o=0;o<this.productList.length;o++)g.push({headerWeekName:this.productList[o].headerWeekName,headerWeekRange:this.productList[o].headerWeekRange,headerMonthName:this.productList[o].headerMonthName,headerDate:this.productList[o].headerDate,headerDateName:this.productList[o].headerDateName});if(this.dataList[a].productDataList=JSON.parse(JSON.stringify(g)),this.dataList[a].dynamicList)for(o=0;o<this.dataList[a].dynamicList.length;o++)for(var r=0;r<this.dataList[a].productDataList.length;r++)this.dataList[a].productDataList[r].headerWeekName==this.dataList[a].dynamicList[o].headerWeekName&&(this.dataList[a].productDataList[r].headerDateName=this.dataList[a].dynamicList[o].headerDateName,this.dataList[a].productDataList[r].headerDate=this.dataList[a].dynamicList[o].headerDate,this.dataList[a].productDataList[r].headerWeekName=this.dataList[a].dynamicList[o].headerWeekName,this.dataList[a].productDataList[r].headerWeekRange=this.dataList[a].dynamicList[o].headerWeekRange,this.dataList[a].productDataList[r].headerMonthName=this.dataList[a].dynamicList[o].headerMonthName,this.dataList[a].productDataList[r].dailyValue=Number(this.dataList[a].dynamicList[o].dailyValue),this.dataList[a].productDataList[r].weeklyValue=Number(this.dataList[a].dynamicList[o].weeklyValue),this.dataList[a].productDataList[r].monthlyValue=Number(this.dataList[a].dynamicList[o].monthlyValue))}else this.isData=!1}})),this.cdf.detectChanges()})}generateReportExcel(){this.productValues=[],this.subHeader=[],this.dataExcel=[];for(var t=0;t<this.productList.length;t++)this.productValues.push(this.productList[t].headerWeekRange);for(this.subHeader=["Agent Name","Branch Name","Activities Name","Target"],t=0;t<this.productList.length;t++)this.subHeader.push(this.productList[t].headerWeekName);for(t=0;t<this.dataList.length;t++){let y=[];y.push(this.dataList[t].agentName,this.dataList[t].branchName,this.dataList[t].activitiesName,this.dataList[t].target||0);for(var a=0;a<this.dataList[t].productDataList.length;a++)y.push(this.dataList[t].productDataList[a].weeklyValue||0);this.dataExcel.push(y)}let o=null,r=null;this.createFormGroup.value.fromDate&&(o=this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)),this.createFormGroup.value.fromDate&&(r=this.formatDateDDMMYYY(this.createFormGroup.value.toDate)),this.exportService.exportExcel({title:this.title,searchValue:[{fromDate:o},{toDate:r},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],products:this.productValues,subHeader:this.subHeader,data:this.dataExcel})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.productList=[],this.dataList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.fromMinDate=null,this.fromMaxDate=null,this.cdf.detectChanges()}changeOptions(t,a){return(0,v.mG)(this,void 0,void 0,function*(){"company"==a&&(t?(this.companyName=t.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(o=>(0,v.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.channels=o)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==a&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),t?(this.companyName=t.name,yield this.exportService.getOfficeHirearchy(t.id,"02").toPromise().then(o=>(0,v.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.channels=o)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==a&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),t?(this.channelName=t.name,yield this.exportService.getOfficeHirearchy(t.id,"03").toPromise().then(o=>(0,v.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.regions=o)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==a&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),t?(this.regionName=t.name,yield this.exportService.getOfficeHirearchy(t.id,"04").toPromise().then(o=>(0,v.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.cluster=o)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==a&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),t?(this.clusterName=t.name,yield this.exportService.getOfficeHirearchy(t.id,"05").toPromise().then(o=>(0,v.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.branches=o)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==a&&(this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),t?(this.branchName=t.name,yield this.exportService.getAgentOffice(t.id).toPromise().then(o=>(0,v.mG)(this,void 0,void 0,function*(){o&&(this.selectOptions.agents=o)}))):(this.branchName=null,this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"office"==a&&(t?this.agentName=t.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new p.cw({fromDate:new p.NI("",[p.kI.required,p.kI.nullValidator]),toDate:new p.NI("",[p.kI.required,p.kI.nullValidator]),agentId:new p.NI(""),companyId:new p.NI(""),channelId:new p.NI(""),regionId:new p.NI(""),clusterId:new p.NI(""),branchId:new p.NI("")})}isControlValid(t){const a=this.createFormGroup.controls[t];return a.valid&&(a.dirty||a.touched)}isControlInvalid(t){const a=this.createFormGroup.controls[t];return a.invalid&&(a.dirty||a.touched)}controlHasError(t,a){const o=this.createFormGroup.controls[a];return o.hasError(t)&&(o.dirty||o.touched)}isControlTouched(t){const a=this.createFormGroup.controls[t];return a.dirty||a.touched}doValid(t){if("FromDate"==t){if(this.createFormGroup.controls.fromDate.value){let g=O(this.createFormGroup.controls.fromDate.value).add(0,"years");this.toMaxDate={year:parseInt(g.format("YYYY")),month:parseInt(g.format("M")),day:parseInt(g.format("D"))},this.createFormGroup.controls.fromDate.setValue(g.format("YYYY-MM-DD"))}var a=new Date(this.createFormGroup.value.fromDate);a.setFullYear(a.getFullYear()+1),a.setDate(a.getDate()-1),this.fromMinDate=this.createFormGroup.value.fromDate,this.fromMaxDate=a;let l=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=l&&1!=l&&this.createFormGroup.controls.toDate.setValue("")}if("ToDate"==t){if(this.createFormGroup.controls.toDate.value){let g=O(this.createFormGroup.controls.toDate.value).add(0,"years");this.toMaxDate={year:parseInt(g.format("YYYY")),month:parseInt(g.format("M")),day:parseInt(g.format("D"))},this.createFormGroup.controls.toDate.setValue(g.format("YYYY-MM-DD"))}var o=new Date(this.createFormGroup.value.toDate);o.setFullYear(o.getFullYear()-1),o.setDate(o.getDate()+1),this.fromMinDate=o,this.createFormGroup.value.toDate||(this.fromMaxDate=this.createFormGroup.value.toDate);let l=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=l&&1!=l&&this.createFormGroup.controls.fromDate.setValue(""),1==l&&(new Date(this.createFormGroup.value.toDate).getMonth()>new Date(this.createFormGroup.value.fromDate).getMonth()&&this.createFormGroup.controls.fromDate.setValue(""),new Date(this.createFormGroup.value.toDate).getMonth()==new Date(this.createFormGroup.value.fromDate).getMonth()&&new Date(this.createFormGroup.value.toDate).getDate()>=new Date(this.createFormGroup.value.fromDate).getDate()&&this.createFormGroup.controls.fromDate.setValue(""))}this.cdf.detectChanges()}clearDate(t){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==t&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==t&&this.createFormGroup.controls.toDate.setValue(""),this.isData=!1,this.productList=[],this.dataList=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(t){var a=new Date(t),o=""+(a.getMonth()+1),r=""+a.getDate(),l=a.getFullYear();return o.length<2&&(o="0"+o),r.length<2&&(r="0"+r),[r,o,l].join("/")}mathRoundTo(t,a){const o=Math.pow(10,a);return(Math.round(t*o)/o).toLocaleString()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(V))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-report-by-agent-weekly"]],decls:46,vars:15,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","regionId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","clusterId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","branchId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","agentName","bindValue","agentId","formControlName","agentId",1,"ng-custom-select",3,"readonly","items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"date-display"],[1,"search-display"],[2,"width","100%","overflow-y","scroll","overflow-x","scroll","max-height","500px"],["border","1"],["style","border-top: 1px solid #000;",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"border-top","1px solid #000"],["colspan","4"],[1,"text-left"],["class","text-right",4,"ngIf"],["class","text-right",4,"ngFor","ngForOf"],[1,"text-right"],[2,"color","gray","text-align","center"]],template:function(t,a){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"h3",5),e._uU(6,"By Agent Weekly"),e.qZA(),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"button",7),e.NdJ("click",function(){return a.getAllReports()}),e._UZ(9,"span",8),e.qZA(),e.TgZ(10,"button",9),e.NdJ("click",function(){return a.generateReportExcel()}),e.TgZ(11,"span",10),e._uU(12,"Generate"),e.qZA(),e.qZA(),e.TgZ(13,"button",7),e.NdJ("click",function(){return a.cancelReport()}),e.TgZ(14,"span",10),e._uU(15,"Cancel"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div",11),e.TgZ(17,"form",12),e.TgZ(18,"div",13),e.TgZ(19,"div",14),e.TgZ(20,"div",15),e.TgZ(21,"label",16),e._uU(22,"From Date"),e.qZA(),e.TgZ(23,"div",17),e.TgZ(24,"input",18),e.NdJ("dateChange",function(){return a.doValid("FromDate")}),e.qZA(),e._UZ(25,"mat-datepicker-toggle",19),e._UZ(26,"mat-datepicker",20,21),e.qZA(),e.TgZ(28,"button",22),e.NdJ("click",function(){return a.clearDate("FromDate")}),e._uU(29,"Clear"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(30,"div",14),e.TgZ(31,"div",15),e.TgZ(32,"label",16),e._uU(33,"To Date"),e.qZA(),e.TgZ(34,"div",17),e.TgZ(35,"input",23),e.NdJ("dateChange",function(){return a.doValid("ToDate")}),e.qZA(),e._UZ(36,"mat-datepicker-toggle",19),e._UZ(37,"mat-datepicker",20,24),e.qZA(),e.TgZ(39,"button",22),e.NdJ("click",function(){return a.clearDate("ToDate")}),e._uU(40,"Clear"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(41,E,8,3,"div",25),e.YNc(42,Q,13,4,"div",25),e.YNc(43,S,13,4,"div",25),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(44,ve,31,12,"div",26),e.YNc(45,_e,2,0,"div",27)),2&t){const o=e.MAs(27),r=e.MAs(38);e.xp6(10),e.Q6J("disabled",!a.isData),e.xp6(7),e.Q6J("formGroup",a.createFormGroup),e.xp6(7),e.Q6J("min",a.fromMinDate)("max",a.fromMaxDate)("matDatepicker",o),e.xp6(1),e.Q6J("for",o),e.xp6(10),e.Q6J("min",a.fromMinDate)("max",a.fromMaxDate)("matDatepicker",r),e.xp6(1),e.Q6J("for",r),e.xp6(5),e.Q6J("ngIf",""!=a.createFormGroup.value.fromDate&&""!=a.createFormGroup.value.toDate),e.xp6(1),e.Q6J("ngIf",""!=a.createFormGroup.value.fromDate&&""!=a.createFormGroup.value.toDate),e.xp6(1),e.Q6J("ngIf",""!=a.createFormGroup.value.fromDate&&""!=a.createFormGroup.value.toDate),e.xp6(1),e.Q6J("ngIf",a.isData),e.xp6(1),e.Q6J("ngIf",!a.isData)}},directives:[p._Y,p.JL,p.sg,p.Fj,x.hl,p.JJ,p.u,x.nW,L.R9,x.Mq,D.O5,Y.w9,D.sg],pipes:[D.JJ],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0 .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border-collapse:unset}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;position:relative;border-collapse:unset}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.date-display[_ngcontent-%COMP%]{width:100%;overflow:hidden}.date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;min-width:135px;float:left;display:block}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#000;transform:rotate(0);position:absolute;top:0;left:49%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:end;padding:0 5px 0 0}"]}),n})();var De=d(87626),Ae=d(45598),Ze=d(29018),xe=d(85378),Ce=d(75396),C=d(44290),Fe=d(57730),Ne=d(92118),be=d(47975);let Te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[D.uU,{provide:C._A,useClass:Ne.t7,deps:[C.Ad]},{provide:C.sG,useValue:be.G}],imports:[[D.ez,p.u5,Y.A0,p.UX,De.vi,Ae.fA,xe.M,Ce.X,x.FA,C.XK,Fe.c,L.lN,Ze.Bz.forChild([{path:"",component:ye}])]]}),n})()}}]);