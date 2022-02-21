"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2685],{12685:(ye,x,m)=>{m.r(x),m.d(x,{ReportKeyDriverModule:()=>Te});var A=m(86019),v=m(64762),f=m(49133),E=m(53489),e=m(83668),D=m(44522),J=m(11901),K=m(62473),V=m(91691),b=m(18260);const N=`${b.N.apiUrl}/report/keyDriver`,L=`${b.N.apiUrl}/officeHirearchy`,k=`${b.N.apiUrl}/agentByOffice`,T=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let Q=(()=>{class a extends V.i{constructor(t){super(t,N),this.httpClient=t}getOfficeHirearchy(t,o){const u=new D.LE({fromObject:{parentId:t,typeCode:o}});return this.httpClient.get(L,{params:u})}getAgentOffice(t){const i=new D.LE({fromObject:{officeId:t}});return this.httpClient.get(k,{params:i})}getAllReportData(t){t.fromDate&&(t.fromDate=this.formatDateYYYY_MM_DD(t.fromDate)),t.toDate&&(t.toDate=this.formatDateYYYY_MM_DD(t.toDate));const o=new D.LE({fromObject:t});return this.httpClient.get(N,{params:o})}exportExcel(t){const o=t.title,i=t.products,h=t.searchValue,p=t.data,I=t.totalNewBusinessCase,w=t.totalPremium,P=t.roundTotalProductDistribution,G=t.roundTotalAverageCaseSize,q=t.manPower,_=t.activeManPower,M=t.activeRatio,z=t.productivity,R=t.anpCaseSize,Y=t.monthlyCaseSize,B=t.channelProductivity;let S=new J.Workbook,c=S.addWorksheet("Sheet1");c.views=[{state:"frozen",xSplit:0,ySplit:4,activeCell:"A1"}],c.mergeCells("A1","C2");let y=c.getCell("A1");if(y.value=o,y.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},y.alignment={vertical:"middle",horizontal:"left"},console.log("searchValue",h),h.length>0)for(var g=0;g<h.length;g++){let r=null,n=null;if(h[g].fromDate&&(r="F1",n="From Date: "+h[g].fromDate),h[g].toDate&&(r="F2",n="To Date: "+h[g].toDate),h[g].companyName&&(r="L1",n="Company: "+h[g].companyName),h[g].channelName&&(r="M1",n="Channel: "+h[g].channelName),h[g].regionName&&(r="N1",n="Region: "+h[g].regionName),h[g].clusterName&&(r="L2",n="Cluster: "+h[g].clusterName),h[g].branchName&&(r="M2",n="Branch: "+h[g].branchName),h[g].agentName&&(r="N2",n="Agent: "+h[g].agentName),null!=r&&null!=n){let s=c.getCell(r);s.value=n,s.font={name:"Calibri",size:10,bold:!0},s.alignment={vertical:"middle",horizontal:"left"}}}c.addRow([]);let U=0;for(g=0;g<i.length;g++){let n=this.calculateStartPoint(U);U+=1,c.mergeCells(n+":"+n);let s=c.getCell(n);s.value=i[g],s.font={name:"Calibri",size:12,bold:!0},s.alignment={vertical:"middle",horizontal:"center"}}if(p.forEach(r=>{let n=c.addRow(r),s=0;r.forEach(l=>{s++;let C=n.getCell(s);1==s?C&&(C.alignment={vertical:"middle",horizontal:"left"}):C.alignment={vertical:"middle",horizontal:"right"}})}),I){let n=c.getCell("A"+(p.length+5));n.value="Total",n.font={name:"Calibri",size:10,bold:!0},n.alignment={vertical:"middle",horizontal:"left"};let l=c.getCell("B"+(p.length+5));l.value=I,l.font={name:"Calibri",size:10,bold:!0},l.alignment={vertical:"middle",horizontal:"right"}}if(w){let n=c.getCell("C"+(p.length+5));n.value=w,n.font={name:"Calibri",size:10,bold:!0},n.alignment={vertical:"middle",horizontal:"right"}}if(P){let n=c.getCell("D"+(p.length+5));n.value=P,n.font={name:"Calibri",size:10,bold:!0},n.alignment={vertical:"middle",horizontal:"right"}}if(G){let n=c.getCell("E"+(p.length+5));n.value=G,n.font={name:"Calibri",size:10,bold:!0},n.alignment={vertical:"middle",horizontal:"right"}}if(q){let n=c.getCell("A"+(p.length+6));n.value="Manpower",n.font={name:"Calibri",size:10,bold:!1},n.alignment={vertical:"middle",horizontal:"left"};let l=c.getCell("B"+(p.length+6));l.value=q,l.font={name:"Calibri",size:10,bold:!1},l.alignment={vertical:"middle",horizontal:"right"}}if(_){let n=c.getCell("A"+(p.length+7));n.value="Active Manpower",n.font={name:"Calibri",size:10,bold:!1},n.alignment={vertical:"middle",horizontal:"left"};let l=c.getCell("B"+(p.length+7));l.value=_,l.font={name:"Calibri",size:10,bold:!1},l.alignment={vertical:"middle",horizontal:"right"}}if(_){let n=c.getCell("A"+(p.length+7));n.value="Active Manpower",n.font={name:"Calibri",size:10,bold:!1},n.alignment={vertical:"middle",horizontal:"left"};let l=c.getCell("B"+(p.length+7));l.value=_,l.font={name:"Calibri",size:10,bold:!1},l.alignment={vertical:"middle",horizontal:"right"}}if(M){let n=c.getCell("A"+(p.length+8));n.value="Active ratio",n.font={name:"Calibri",size:10,bold:!1},n.alignment={vertical:"middle",horizontal:"left"};let l=c.getCell("B"+(p.length+8));l.value=M,l.font={name:"Calibri",size:10,bold:!1},l.alignment={vertical:"middle",horizontal:"right"}}if(z){let n=c.getCell("A"+(p.length+9));n.value="Productivity",n.font={name:"Calibri",size:10,bold:!1},n.alignment={vertical:"middle",horizontal:"left"};let l=c.getCell("B"+(p.length+9));l.value=z,l.font={name:"Calibri",size:10,bold:!1},l.alignment={vertical:"middle",horizontal:"right"}}if(B){let n=c.getCell("A"+(p.length+10));n.value="Channel Productivity",n.font={name:"Calibri",size:10,bold:!1},n.alignment={vertical:"middle",horizontal:"left"};let l=c.getCell("B"+(p.length+10));l.value=B,l.font={name:"Calibri",size:10,bold:!1},l.alignment={vertical:"middle",horizontal:"right"}}if(R){let n=c.getCell("A"+(p.length+11));n.value="ANP Case Size",n.font={name:"Calibri",size:10,bold:!1},n.alignment={vertical:"middle",horizontal:"left"};let l=c.getCell("B"+(p.length+11));l.value=R,l.font={name:"Calibri",size:10,bold:!1},l.alignment={vertical:"middle",horizontal:"right"}}if(Y){let n=c.getCell("A"+(p.length+12));n.value="Monthly Case Size",n.font={name:"Calibri",size:10,bold:!1},n.alignment={vertical:"middle",horizontal:"left"};let l=c.getCell("B"+(p.length+12));l.value=Y,l.font={name:"Calibri",size:10,bold:!1},l.alignment={vertical:"middle",horizontal:"right"}}c.columns.forEach(function(r,n){var s=0;r.eachCell({includeEmpty:!0},function(l){var C=l.value?l.value.toString().length:10;C>s&&(s=C)}),r.width=s<10?10:s}),S.xlsx.writeBuffer().then(r=>{let n=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});K.saveAs(n,o+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateStartPoint(t){return T[t]+"4"}calculateEndPoint(t){return T[t]+"4"}calculateDataPoint(t){return T[t]+"5"}formatDateDDMMYYY(t){var o=new Date(t),i=""+(o.getMonth()+1),u=""+o.getDate(),h=o.getFullYear();return i.length<2&&(i="0"+i),u.length<2&&(u="0"+u),[u,i,h].join("_")}mathRoundTo(t,o){const i=Math.pow(10,o);return(Math.round(t*i)/i).toLocaleString()}formatDateYYYY_MM_DD(t){var o=new Date(t),i=""+(o.getMonth()+1),u=""+o.getDate(),h=o.getFullYear();return i.length<2&&(i="0"+i),u.length<2&&(u="0"+u),[h,i,u].join("-")}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(D.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var Z=m(78480),F=m(86031),O=m(57842);function H(a,d){if(1&a){const t=e.EpF();e.TgZ(0,"div",29),e.TgZ(1,"div",15),e.TgZ(2,"label",16),e._uU(3,"Company"),e.qZA(),e.TgZ(4,"div",30),e.TgZ(5,"ng-select",32),e.NdJ("change",function(i){return e.CHM(t),e.oxw(2).changeOptions(i,"channel")}),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&a){const t=e.oxw(2);e.xp6(5),e.Q6J("items",t.selectOptions.companies)}}function j(a,d){if(1&a){const t=e.EpF();e.TgZ(0,"div",13),e.YNc(1,H,6,1,"div",28),e.TgZ(2,"div",29),e.TgZ(3,"div",15),e.TgZ(4,"label",16),e._uU(5,"Channel"),e.qZA(),e.TgZ(6,"div",30),e.TgZ(7,"ng-select",31),e.NdJ("change",function(i){return e.CHM(t),e.oxw().changeOptions(i,"region")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",""!=t.createFormGroup.value.fromDate&&""!=t.createFormGroup.value.toDate),e.xp6(6),e.Q6J("readonly",0==t.selectOptions.channels.length)("items",t.selectOptions.channels)}}function X(a,d){if(1&a){const t=e.EpF();e.TgZ(0,"div",13),e.TgZ(1,"div",29),e.TgZ(2,"div",15),e.TgZ(3,"label",16),e._uU(4,"Region"),e.qZA(),e.TgZ(5,"div",30),e.TgZ(6,"ng-select",33),e.NdJ("change",function(i){return e.CHM(t),e.oxw().changeOptions(i,"cluster")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div",29),e.TgZ(8,"div",15),e.TgZ(9,"label",16),e._uU(10,"Cluster"),e.qZA(),e.TgZ(11,"div",30),e.TgZ(12,"ng-select",34),e.NdJ("change",function(i){return e.CHM(t),e.oxw().changeOptions(i,"branch")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&a){const t=e.oxw();e.xp6(6),e.Q6J("readonly",0==t.selectOptions.regions.length)("items",t.selectOptions.regions),e.xp6(6),e.Q6J("readonly",0==t.selectOptions.cluster.length)("items",t.selectOptions.cluster)}}function W(a,d){if(1&a){const t=e.EpF();e.TgZ(0,"div",13),e.TgZ(1,"div",29),e.TgZ(2,"div",15),e.TgZ(3,"label",16),e._uU(4,"Branch"),e.qZA(),e.TgZ(5,"div",30),e.TgZ(6,"ng-select",35),e.NdJ("change",function(i){return e.CHM(t),e.oxw().changeOptions(i,"agent")}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&a){const t=e.oxw();e.xp6(6),e.Q6J("readonly",0==t.selectOptions.branches.length)("items",t.selectOptions.branches)}}function $(a,d){1&a&&e._UZ(0,"br")}function ee(a,d){1&a&&e._UZ(0,"br")}function te(a,d){1&a&&e._UZ(0,"br")}function oe(a,d){1&a&&e._UZ(0,"br")}function ie(a,d){if(1&a&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&a){const t=e.oxw(2);e.xp6(1),e.hij("From Date: ",t.formatDateDDMMYYY(t.createFormGroup.value.fromDate)," ")}}function ae(a,d){if(1&a&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&a){const t=e.oxw(2);e.xp6(1),e.hij("To Date: ",t.formatDateDDMMYYY(t.createFormGroup.value.toDate),"")}}function ne(a,d){if(1&a&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&a){const t=e.oxw(3);e.xp6(1),e.hij("Company: ",t.companyName," ")}}function re(a,d){if(1&a&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&a){const t=e.oxw(3);e.xp6(1),e.hij("Channel: ",t.channelName," ")}}function le(a,d){if(1&a&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&a){const t=e.oxw(3);e.xp6(1),e.hij("Region: ",t.regionName," ")}}function se(a,d){if(1&a&&(e.TgZ(0,"div"),e.YNc(1,ne,2,1,"span",38),e.YNc(2,re,2,1,"span",38),e.YNc(3,le,2,1,"span",38),e.qZA()),2&a){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.companyId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.channelId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.regionId)}}function ce(a,d){if(1&a&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&a){const t=e.oxw(3);e.xp6(1),e.hij("Cluster: ",t.clusterName," ")}}function ue(a,d){if(1&a&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&a){const t=e.oxw(3);e.xp6(1),e.hij("Branch: ",t.branchName,"")}}function de(a,d){if(1&a&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&a){const t=e.oxw(3);e.xp6(1),e.hij("Agent: ",t.agentName," ")}}function he(a,d){if(1&a&&(e.TgZ(0,"div"),e.YNc(1,ce,2,1,"span",38),e.YNc(2,ue,2,1,"span",38),e.YNc(3,de,2,1,"span",38),e.qZA()),2&a){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.clusterId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.branchId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.agentId)}}function me(a,d){if(1&a&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.qZA()),2&a){const t=d.$implicit;e.xp6(2),e.Oqu(t.product),e.xp6(2),e.Oqu(t.newBusinessCase),e.xp6(2),e.Oqu(t.newBusinessPremium),e.xp6(2),e.Oqu(t.productDistribution),e.xp6(2),e.Oqu(t.averageCaseSize)}}function pe(a,d){if(1&a&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",36),e.TgZ(3,"div",37),e.YNc(4,$,1,0,"br",38),e.YNc(5,ee,1,0,"br",38),e.TgZ(6,"h3",39),e._uU(7),e.qZA(),e.qZA(),e.TgZ(8,"div",37),e.YNc(9,te,1,0,"br",38),e.YNc(10,oe,1,0,"br",38),e.TgZ(11,"div"),e.YNc(12,ie,2,1,"span",38),e._uU(13," \xa0 \xa0 \xa0 \xa0 \xa0 "),e.YNc(14,ae,2,1,"span",38),e.qZA(),e.qZA(),e.TgZ(15,"div",40),e.YNc(16,se,4,3,"div",38),e.YNc(17,he,4,3,"div",38),e.qZA(),e.qZA(),e.TgZ(18,"div",41),e.TgZ(19,"table",42),e.TgZ(20,"tr"),e.TgZ(21,"th"),e._uU(22,"Product"),e.qZA(),e.TgZ(23,"th"),e._uU(24,"New Business Case"),e.qZA(),e.TgZ(25,"th"),e._uU(26,"New Business Premium"),e.qZA(),e.TgZ(27,"th"),e._uU(28,"Product Distribution"),e.qZA(),e.TgZ(29,"th"),e._uU(30,"Average Case Size"),e.qZA(),e.qZA(),e.YNc(31,me,11,5,"tr",43),e.TgZ(32,"tr"),e.TgZ(33,"td"),e._uU(34,"Total"),e.qZA(),e.TgZ(35,"td"),e._uU(36),e.qZA(),e.TgZ(37,"td"),e._uU(38),e.qZA(),e.TgZ(39,"td"),e._uU(40),e.qZA(),e.TgZ(41,"td"),e._uU(42),e.qZA(),e.qZA(),e.TgZ(43,"tr"),e.TgZ(44,"td"),e._uU(45,"Manpower"),e.qZA(),e.TgZ(46,"td",44),e._uU(47),e.qZA(),e.qZA(),e.TgZ(48,"tr"),e.TgZ(49,"td"),e._uU(50,"Active Manpower"),e.qZA(),e.TgZ(51,"td",44),e._uU(52),e.qZA(),e.qZA(),e.TgZ(53,"tr"),e.TgZ(54,"td"),e._uU(55,"Active ratio"),e.qZA(),e.TgZ(56,"td",44),e._uU(57),e.qZA(),e.qZA(),e.TgZ(58,"tr"),e.TgZ(59,"td"),e._uU(60,"Productivity"),e.qZA(),e.TgZ(61,"td",44),e._uU(62),e.qZA(),e.qZA(),e.TgZ(63,"tr"),e.TgZ(64,"td"),e._uU(65,"Channel Productivity"),e.qZA(),e.TgZ(66,"td",44),e._uU(67),e.qZA(),e.qZA(),e.TgZ(68,"tr"),e.TgZ(69,"td"),e._uU(70,"ANP Case Size"),e.qZA(),e.TgZ(71,"td",44),e._uU(72),e.qZA(),e.qZA(),e.TgZ(73,"tr"),e.TgZ(74,"td"),e._uU(75,"Monthly Case Size"),e.qZA(),e.TgZ(76,"td",44),e._uU(77),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&a){const t=e.oxw();e.xp6(4),e.Q6J("ngIf",t.createFormGroup.value.companyId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.clusterId),e.xp6(2),e.Oqu(t.title),e.xp6(2),e.Q6J("ngIf",t.createFormGroup.value.companyId),e.xp6(1),e.Q6J("ngIf",t.createFormGroup.value.clusterId),e.xp6(2),e.Q6J("ngIf",t.createFormGroup.value.fromDate),e.xp6(2),e.Q6J("ngIf",t.createFormGroup.value.toDate),e.xp6(2),e.Q6J("ngIf",""!=t.createFormGroup.value.companyId||""!=t.createFormGroup.value.channelId||""!=t.createFormGroup.value.regionId),e.xp6(1),e.Q6J("ngIf",""!=t.createFormGroup.value.clusterId||""!=t.createFormGroup.value.branchId||""!=t.createFormGroup.value.agentId),e.xp6(14),e.Q6J("ngForOf",t.displayDataList),e.xp6(5),e.Oqu(t.totalNewBusinessCase),e.xp6(2),e.Oqu(t.totalPremium),e.xp6(2),e.Oqu(t.roundTotalProductDistribution),e.xp6(2),e.Oqu(t.roundTotalAverageCaseSize),e.xp6(5),e.Oqu(t.keyDriver.manPower),e.xp6(5),e.Oqu(t.keyDriver.activeManPower),e.xp6(5),e.Oqu(t.activeRatio),e.xp6(5),e.Oqu(t.productivity),e.xp6(5),e.Oqu(t.channelProductivity),e.xp6(5),e.Oqu(t.anpCaseSize),e.xp6(5),e.Oqu(t.monthlyCaseSize)}}function ge(a,d){1&a&&(e.TgZ(0,"div",45),e._uU(1," There is no data "),e.qZA())}let fe=(()=>{class a{constructor(t,o){this.cdf=t,this.exportService=o,this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.productValues=[],this.subHeader=[],this.dataExcel=[],this.isData=!1,this.displayDataList=[],this.totalAverageCaseSize=0,this.totalProductDistribution=0,this.totalNewBusinessCase=0,this.totalPremium=0,this.title="Key Driver Report"}ngOnInit(){this.loadForm(),this.getOfficeHirearchy()}getOfficeHirearchy(){return(0,v.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(t=>(0,v.mG)(this,void 0,void 0,function*(){t&&(this.selectOptions.companies=t)}))})}getAllReports(){return(0,v.mG)(this,void 0,void 0,function*(){this.totalNewBusinessCase=0,this.totalPremium=0,this.totalProductDistribution=0,this.totalAverageCaseSize=0,this.createFormGroup.invalid?(0,E.w)(this.createFormGroup):yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(t=>(0,v.mG)(this,void 0,void 0,function*(){if(console.log("keyDriver",t),t.datum)if(this.keyDriver=t.datum,t.datum.productsList.length>0){this.isData=!0;for(var o=0;o<t.datum.productsList.length;o++)this.totalNewBusinessCase+=t.datum.productsList[o].pcount,this.totalPremium+=t.datum.productsList[o].premium;for(o=0;o<t.datum.productsList.length;o++){let u={product:t.datum.productsList[o].pcode,newBusinessCase:t.datum.productsList[o].pcount,newBusinessPremium:t.datum.productsList[o].premium,productDistribution:this.productDistribution(t.datum.productsList[o].pcount,this.totalNewBusinessCase),averageCaseSize:this.averageCaseSize(t.datum.productsList[o].premium,t.datum.productsList[o].pcount)};this.displayDataList.push(u)}this.roundTotalProductDistribution=this.mathRoundTo(this.totalProductDistribution,2),this.roundTotalProductDistribution=this.mathRoundTo(this.totalProductDistribution,2),this.roundTotalAverageCaseSize=this.mathRoundTo(this.totalAverageCaseSize,2),this.keyDriver.manPower&&(this.activeRatio=this.mathRoundTo(this.keyDriver.activeManPower/this.keyDriver.manPower,2)),this.keyDriver.activeManPower&&(this.productivity=this.mathRoundTo(this.totalNewBusinessCase/this.keyDriver.activeManPower,2)),this.keyDriver.manPower&&(this.channelProductivity=this.mathRoundTo(this.totalNewBusinessCase/this.keyDriver.manPower,2)),0!=this.totalNewBusinessCase&&(this.anpCaseSize=this.mathRoundTo(this.totalPremium/this.totalNewBusinessCase,2)),0!=this.totalNewBusinessCase&&(this.monthlyCaseSize=this.mathRoundTo(this.totalPremium/12/this.totalNewBusinessCase,2))}else this.isData=!1})),this.cdf.detectChanges()})}productDistribution(t,o){let i;return i=0!=o?this.mathRoundTo(100*t/o,2):0,this.totalProductDistribution+=Number(i),i}averageCaseSize(t,o){let i;return i=0!=o?this.mathRoundTo(t/o,2):0,this.totalAverageCaseSize+=Number(i),i}calculateDivision(t,o){let i;return i=0!=o?this.mathRoundTo(t/o,2):0,i}generateReportExcel(){this.dataExcel=[],this.productValues=["Product","New Business Case","New Business Premium\t","Product Distribution","Average Case Size"];for(var t=0;t<this.displayDataList.length;t++)this.dataExcel.push([this.displayDataList[t].product,this.displayDataList[t].newBusinessCase,this.displayDataList[t].newBusinessPremium,this.displayDataList[t].productDistribution,this.displayDataList[t].averageCaseSize]);let o=null,i=null;this.createFormGroup.value.fromDate&&(o=this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)),this.createFormGroup.value.fromDate&&(i=this.formatDateDDMMYYY(this.createFormGroup.value.toDate)),this.exportService.exportExcel({title:this.title,searchValue:[{fromDate:o},{toDate:i},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],products:this.productValues,subHeader:this.subHeader,data:this.dataExcel,totalNewBusinessCase:this.totalNewBusinessCase,totalPremium:this.totalPremium,roundTotalProductDistribution:this.roundTotalProductDistribution,roundTotalAverageCaseSize:this.roundTotalAverageCaseSize,manPower:this.keyDriver.manPower,activeManPower:this.keyDriver.activeManPower,activeRatio:this.activeRatio,productivity:this.productivity,channelProductivity:this.channelProductivity,anpCaseSize:this.anpCaseSize,monthlyCaseSize:this.monthlyCaseSize})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.totalNewBusinessCase=0,this.totalPremium=0,this.totalProductDistribution=0,this.totalAverageCaseSize=0,this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.cdf.detectChanges()}changeOptions(t,o){return(0,v.mG)(this,void 0,void 0,function*(){"company"==o&&(t?(this.companyName=t.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(i=>(0,v.mG)(this,void 0,void 0,function*(){console.log("officeHirearchy",i),i&&(this.selectOptions.channels=i)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==o&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),t?(this.companyName=t.name,yield this.exportService.getOfficeHirearchy(t.id,"02").toPromise().then(i=>(0,v.mG)(this,void 0,void 0,function*(){i&&(this.selectOptions.channels=i)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==o&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),t?(this.channelName=t.name,yield this.exportService.getOfficeHirearchy(t.id,"03").toPromise().then(i=>(0,v.mG)(this,void 0,void 0,function*(){i&&(this.selectOptions.regions=i)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==o&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),t?(this.regionName=t.name,yield this.exportService.getOfficeHirearchy(t.id,"04").toPromise().then(i=>(0,v.mG)(this,void 0,void 0,function*(){i&&(this.selectOptions.cluster=i)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==o&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),t?(this.clusterName=t.name,yield this.exportService.getOfficeHirearchy(t.id,"05").toPromise().then(i=>(0,v.mG)(this,void 0,void 0,function*(){i&&(this.selectOptions.branches=i)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==o&&(t?(this.branchName=t.name,yield this.exportService.getAgentOffice(11).toPromise().then(i=>(0,v.mG)(this,void 0,void 0,function*(){i&&(this.selectOptions.agents=i)}))):(this.branchName=null,this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),console.log("type",o),console.log("ev",t),"office"==o&&(t?this.agentName=t.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new f.cw({fromDate:new f.NI("",[f.kI.required,f.kI.nullValidator]),toDate:new f.NI("",[f.kI.required,f.kI.nullValidator]),agentId:new f.NI(""),companyId:new f.NI(""),channelId:new f.NI(""),regionId:new f.NI(""),clusterId:new f.NI(""),branchId:new f.NI("")})}isControlValid(t){const o=this.createFormGroup.controls[t];return o.valid&&(o.dirty||o.touched)}isControlInvalid(t){const o=this.createFormGroup.controls[t];return o.invalid&&(o.dirty||o.touched)}controlHasError(t,o){const i=this.createFormGroup.controls[o];return i.hasError(t)&&(i.dirty||i.touched)}isControlTouched(t){const o=this.createFormGroup.controls[t];return o.dirty||o.touched}doValid(t){if(console.log("doValid",t),"FromDate"==t){this.fromMinDate=new Date(this.createFormGroup.value.fromDate),this.fromMaxDate=new Date((new Date).setFullYear(new Date(this.fromMinDate).getFullYear()+1));let o=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=o&&1!=o&&this.createFormGroup.controls.toDate.setValue("")}if("ToDate"==t){this.fromMaxDate=new Date(this.createFormGroup.value.toDate),this.fromMinDate=new Date((new Date).setFullYear(new Date(this.fromMaxDate).getFullYear()-1));let o=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=o&&1!=o&&this.createFormGroup.controls.fromDate.setValue("")}this.cdf.detectChanges()}clearDate(t){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==t&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==t&&this.createFormGroup.controls.toDate.setValue(""),this.displayDataList=[],this.totalNewBusinessCase=0,this.totalPremium=0,this.totalProductDistribution=0,this.totalAverageCaseSize=0,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(t){var o=new Date(t),i=""+(o.getMonth()+1),u=""+o.getDate(),h=o.getFullYear();return i.length<2&&(i="0"+i),u.length<2&&(u="0"+u),[u,i,h].join("/")}mathRoundTo(t,o){const i=Math.pow(10,o);return(Math.round(t*i)/i).toLocaleString()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(e.sBO),e.Y36(Q))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-report-key-driver"]],decls:46,vars:15,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","regionId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","clusterId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","branchId",1,"ng-custom-select",3,"readonly","items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"search-display"],[2,"width","100%","overflow-y","hidden","overflow-x","scroll"],["border","1"],[4,"ngFor","ngForOf"],["colspan","4"],[2,"color","gray","text-align","center"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"h3",5),e._uU(6,"Key Driver Report"),e.qZA(),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"button",7),e.NdJ("click",function(){return o.getAllReports()}),e._UZ(9,"span",8),e.qZA(),e.TgZ(10,"button",9),e.NdJ("click",function(){return o.generateReportExcel()}),e.TgZ(11,"span",10),e._uU(12,"Generate"),e.qZA(),e.qZA(),e.TgZ(13,"button",7),e.NdJ("click",function(){return o.cancelReport()}),e.TgZ(14,"span",10),e._uU(15,"Cancel"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(16,"div",11),e.TgZ(17,"form",12),e.TgZ(18,"div",13),e.TgZ(19,"div",14),e.TgZ(20,"div",15),e.TgZ(21,"label",16),e._uU(22,"From Date"),e.qZA(),e.TgZ(23,"div",17),e.TgZ(24,"input",18),e.NdJ("dateChange",function(){return o.doValid("FromDate")}),e.qZA(),e._UZ(25,"mat-datepicker-toggle",19),e._UZ(26,"mat-datepicker",20,21),e.qZA(),e.TgZ(28,"button",22),e.NdJ("click",function(){return o.clearDate("FromDate")}),e._uU(29,"Clear"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(30,"div",14),e.TgZ(31,"div",15),e.TgZ(32,"label",16),e._uU(33,"To Date"),e.qZA(),e.TgZ(34,"div",17),e.TgZ(35,"input",23),e.NdJ("dateChange",function(){return o.doValid("ToDate")}),e.qZA(),e._UZ(36,"mat-datepicker-toggle",19),e._UZ(37,"mat-datepicker",20,24),e.qZA(),e.TgZ(39,"button",22),e.NdJ("click",function(){return o.clearDate("ToDate")}),e._uU(40,"Clear"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(41,j,8,3,"div",25),e.YNc(42,X,13,4,"div",25),e.YNc(43,W,7,2,"div",25),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.YNc(44,pe,78,21,"div",26),e.YNc(45,ge,2,0,"div",27)),2&t){const i=e.MAs(27),u=e.MAs(38);e.xp6(10),e.Q6J("disabled",!o.isData),e.xp6(7),e.Q6J("formGroup",o.createFormGroup),e.xp6(7),e.Q6J("min",o.fromMinDate)("max",o.fromMaxDate)("matDatepicker",i),e.xp6(1),e.Q6J("for",i),e.xp6(10),e.Q6J("min",o.fromMinDate)("max",o.fromMaxDate)("matDatepicker",u),e.xp6(1),e.Q6J("for",u),e.xp6(5),e.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),e.xp6(1),e.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),e.xp6(1),e.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),e.xp6(1),e.Q6J("ngIf",o.isData),e.xp6(1),e.Q6J("ngIf",!o.isData)}},directives:[f._Y,f.JL,f.sg,f.Fj,Z.hl,f.JJ,f.u,Z.nW,F.R9,Z.Mq,A.O5,O.w9,A.sg],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0 .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border-collapse:unset}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;position:relative;border-collapse:unset}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#000;transform:rotate(0);position:absolute;top:0;left:49%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}"]}),a})();var ve=m(29018),Ce=m(45598),De=m(87626),Ze=m(85378),_e=m(75396),Ae=m(44290),be=m(57730);let Te=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[A.ez,f.u5,O.A0,f.UX,De.vi,Ce.fA,Ze.M,_e.X,Z.FA,Ae.XK,be.c,F.lN,ve.Bz.forChild([{path:"",component:fe}])]]}),a})()}}]);