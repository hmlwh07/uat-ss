"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4149],{90860:(U,y,s)=>{s.d(y,{m:()=>x});var A=s(86019),f=s(49133),d=s(87626),F=s(45598),G=s(57842),t=s(83668);let x=(()=>{class D{}return D.\u0275fac=function(N){return new(N||D)},D.\u0275mod=t.oAB({type:D}),D.\u0275inj=t.cJS({imports:[[A.ez,f.u5,f.UX,d.vi,F.fA,G.A0]]}),D})()},4149:(U,y,s)=>{s.r(y),s.d(y,{ReportDetailByAgentModule:()=>Bt});var A=s(86019),f=s(64762),d=s(49133),F=s(92070),G=s(53489),t=s(83668),x=s(44522),D=s(11901),b=s(62473),N=s(91691),M=s(18260),J=s(67198),V=s(71704),Q=s(49875);const P=`${M.N.apiUrl}/reportByAgentAll`,S=`${M.N.apiUrl}/officeHirearchy`,H=`${M.N.apiUrl}/agentByOffice`,Y=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let z=(()=>{class a extends N.i{constructor(e,o,n,r){super(e,P),this.httpClient=e,this.authService=o,this.platform=n,this.attachmentDownloadService=r}getOfficeHirearchy(e,o){const r=new x.LE({fromObject:{parentId:e,typeCode:o}});return this.httpClient.get(S,{params:r})}getAgentOffice(e){const n=new x.LE({fromObject:{officeId:e}});return this.httpClient.get(H,{params:n})}getAllReportData(e){e.fromDate&&(e.fromDate=this.formatDateYYYY_MM_DD(e.fromDate)),e.toDate&&(e.toDate=this.formatDateYYYY_MM_DD(e.toDate));const o=new x.LE({fromObject:e});return this.httpClient.get(P,{params:o})}exportExcel(e){const o=e.title,n=e.products,r=e.subHeader,l=e.searchValue,_=e.data;let v=new D.Workbook,u=v.addWorksheet("Sheet1");u.views=[{state:"frozen",xSplit:5,ySplit:5,activeCell:"A1"}],u.mergeCells("A1","E2");let B=u.getCell("A1");B.value=o,B.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},B.alignment={vertical:"middle",horizontal:"left"},u.mergeCells("G1","G1");let I=u.getCell("G1");I.value="Reported Date: "+this.formatReportedDate(new Date),I.font={name:"Calibri",size:10,bold:!0},I.alignment={vertical:"middle",horizontal:"left"},u.mergeCells("G2","G2");let L=u.getCell("G2");if(L.value="Reported By: "+this.authService.currentUserValue.username,L.font={name:"Calibri",size:10,bold:!0},L.alignment={vertical:"middle",horizontal:"left"},l.length>0)for(var p=0;p<l.length;p++){let h=null,c=null;if(l[p].fromDate&&(h="F1",c="From Date: "+l[p].fromDate),l[p].toDate&&(h="F2",c="To Date: "+l[p].toDate),l[p].companyName&&(h="L1",c="Company: "+l[p].companyName),l[p].channelName&&(h="M1",c="Channel: "+l[p].channelName),l[p].regionName&&(h="N1",c="Region: "+l[p].regionName),l[p].clusterName&&(h="L2",c="Cluster: "+l[p].clusterName),l[p].branchName&&(h="M2",c="Branch: "+l[p].branchName),l[p].agentName&&(h="N2",c="Agent: "+l[p].agentName),null!=h&&null!=c){let g=u.getCell(h);g.value=c,g.font={name:"Calibri",size:10,bold:!0},g.alignment={vertical:"middle",horizontal:"left"}}}u.addRow([]),u.mergeCells("A4:E4");let E=5,q=6;for(p=0;p<n.length;p++){let c=this.calculateStartPoint(E);E+=2;let g=this.calculateEndPoint(q);q+=2,u.mergeCells(c+":"+g);let m=u.getCell(c);m.value=n[p],m.font={name:"Calibri",size:12,bold:!0},m.alignment={vertical:"middle",horizontal:"center"}}for(p=0;p<r.length;p++){let c=this.calculateDataPoint(p);u.mergeCells(c+":"+c);let g=u.getCell(c);g.value=r[p],g.font={name:"Calibri",size:12,bold:!0},g.alignment={vertical:"middle",horizontal:"center"}}_.forEach(h=>{let c=u.addRow(h),g=c.getCell(1);g&&(g.alignment={vertical:"middle",horizontal:"center"});let m=0;h.forEach(C=>{if(m++,2!=m&&3!=m&&4!=m&&5!=m){let Z=c.getCell(m);Z&&(Z.alignment={vertical:"middle",horizontal:"right"})}if(1==m){let Z=c.getCell(m);Z&&(Z.alignment={vertical:"middle",horizontal:"center"})}m>5&&(c.getCell(m).numFmt="#,##0.00_);(#,##0.00)")})}),u.columns.forEach(function(h,c){var g=0;h.eachCell({includeEmpty:!0},function(m){var C=m.value?m.value.toString().length:10;C>g&&(g=C)}),h.width=g<10?10:g}),u.getColumn(1).width=5,u.getColumn(2).width=20,u.getColumn(3).width=15,u.getColumn(4).width=15,u.getColumn(5).width=20,v.xlsx.writeBuffer().then(h=>{let c=new Blob([h],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});this.platform.is("android")||this.platform.is("ios")?this.attachmentDownloadService.mobileDownload(o+"_"+this.formatDateDDMMYYY(new Date)+".xlsx",c):b.saveAs(c,o+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateStartPoint(e){return Y[e]+"4"}calculateEndPoint(e){return Y[e]+"4"}calculateDataPoint(e){return Y[e]+"5"}formatDateDDMMYYY(e){var o=new Date(e),n=""+(o.getMonth()+1),r=""+o.getDate(),l=o.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[r,n,l].join("_")}formatReportedDate(e){var o=new Date(e),n=""+(o.getMonth()+1),r=""+o.getDate(),l=o.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[r,n,l].join("/")}mathRoundTo(e,o){const n=Math.pow(10,o);return(Math.round(e*n)/n).toLocaleString()}formatDateYYYY_MM_DD(e){var o=new Date(e),n=""+(o.getMonth()+1),r=""+o.getDate(),l=o.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[l,n,r].join("-")}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(x.eN),t.LFG(J.e8),t.LFG(V.t4),t.LFG(Q.Ys))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var T=s(78480),R=s(86031),w=s(57842);const j=["TABLE"];function W(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",29),t.TgZ(1,"div",15),t.TgZ(2,"label",16),t._uU(3,"Company"),t.qZA(),t.TgZ(4,"div",30),t.TgZ(5,"ng-select",32),t.NdJ("change",function(n){return t.CHM(e),t.oxw(2).changeOptions(n,"channel")}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw(2);t.xp6(5),t.Q6J("items",e.selectOptions.companies)}}function K(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.YNc(1,W,6,1,"div",28),t.TgZ(2,"div",29),t.TgZ(3,"div",15),t.TgZ(4,"label",16),t._uU(5,"Channel"),t.qZA(),t.TgZ(6,"div",30),t.TgZ(7,"ng-select",31),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"region")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.fromDate&&""!=e.createFormGroup.value.toDate),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.channels.length)("items",e.selectOptions.channels)}}function k(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Region"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",33),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"cluster")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Cluster"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",34),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"branch")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.regions.length)("items",e.selectOptions.regions),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.cluster.length)("items",e.selectOptions.cluster)}}function X(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",29),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Branch"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",35),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"agent")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",29),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Agent Name"),t.qZA(),t.TgZ(11,"div",30),t.TgZ(12,"ng-select",36),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"office")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.branches.length)("items",e.selectOptions.branches),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.agents.length)("items",e.selectOptions.agents)}}function $(a,i){1&a&&t._UZ(0,"br")}function tt(a,i){1&a&&t._UZ(0,"br")}function et(a,i){1&a&&t._UZ(0,"br")}function ot(a,i){1&a&&t._UZ(0,"br")}function nt(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.hij("From Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.fromDate)," ")}}function at(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.hij("To Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.toDate),"")}}function rt(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Company: ",e.companyName," ")}}function it(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Channel: ",e.channelName," ")}}function lt(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Region: ",e.regionName," ")}}function st(a,i){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,rt,2,1,"span",39),t.YNc(2,it,2,1,"span",39),t.YNc(3,lt,2,1,"span",39),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.channelId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.regionId)}}function ct(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Cluster: ",e.clusterName," ")}}function pt(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Branch: ",e.branchName,"")}}function dt(a,i){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Agent: ",e.agentName," ")}}function ut(a,i){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,ct,2,1,"span",39),t.YNc(2,pt,2,1,"span",39),t.YNc(3,dt,2,1,"span",39),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.branchId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.agentId)}}function mt(a,i){if(1&a&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.Oqu(e.name)}}function ht(a,i){if(1&a&&(t.TgZ(0,"tr",49),t._UZ(1,"th",50),t.YNc(2,mt,2,1,"th",48),t.qZA()),2&a){const e=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",e.productList)}}function gt(a,i){1&a&&(t.TgZ(0,"th",51),t.TgZ(1,"span"),t._uU(2,"No of Policies "),t._UZ(3,"div",52),t.qZA(),t.TgZ(4,"span"),t._uU(5,"Premium"),t.qZA(),t.qZA())}function ft(a,i){if(1&a&&(t.TgZ(0,"span",59),t._uU(1),t.ALo(2,"number"),t._UZ(3,"div",52),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.hij("",t.xi3(2,1,e.noOfPolicy,"1.2-2")," ")}}function _t(a,i){if(1&a&&(t.TgZ(0,"span",60),t._uU(1),t.ALo(2,"number"),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.totalPreminum,"1.2-2"))}}function vt(a,i){1&a&&(t.TgZ(0,"span",59),t._uU(1," 0.00 "),t._UZ(2,"div",52),t.qZA())}function Dt(a,i){1&a&&(t.TgZ(0,"span",60),t._uU(1,"0.00"),t.qZA())}function At(a,i){if(1&a&&(t.TgZ(0,"td",55),t.YNc(1,ft,4,4,"span",56),t.YNc(2,_t,3,4,"span",57),t.YNc(3,vt,3,0,"span",58),t.YNc(4,Dt,2,0,"span",57),t.qZA()),2&a){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",e.noOfPolicy),t.xp6(1),t.Q6J("ngIf",e.totalPreminum),t.xp6(1),t.Q6J("ngIf",!e.noOfPolicy),t.xp6(1),t.Q6J("ngIf",!e.totalPreminum)}}function Zt(a,i){if(1&a&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",53),t._uU(4),t.qZA(),t.TgZ(5,"td",53),t._uU(6),t.qZA(),t.TgZ(7,"td",53),t._uU(8),t.qZA(),t.TgZ(9,"td",53),t._uU(10),t.qZA(),t.YNc(11,At,5,4,"td",54),t.qZA()),2&a){const e=i.$implicit,o=i.index,n=t.oxw(2);t.xp6(2),t.Oqu(e.no),t.xp6(2),t.Oqu(e.cluster),t.xp6(2),t.Oqu(e.channel),t.xp6(2),t.Oqu(e.agentName),t.xp6(2),t.Oqu(e.agentNo),t.xp6(1),t.Q6J("ngForOf",n.dataList[o].productDataList)}}function xt(a,i){if(1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",37),t.TgZ(3,"div",38),t.YNc(4,$,1,0,"br",39),t.YNc(5,tt,1,0,"br",39),t.TgZ(6,"h3",40),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",38),t.YNc(9,et,1,0,"br",39),t.YNc(10,ot,1,0,"br",39),t.TgZ(11,"div",41),t.YNc(12,nt,2,1,"span",39),t.YNc(13,at,2,1,"span",39),t.qZA(),t.qZA(),t.TgZ(14,"div",42),t.YNc(15,st,4,3,"div",39),t.YNc(16,ut,4,3,"div",39),t.qZA(),t.qZA(),t.TgZ(17,"div",43),t.TgZ(18,"table",44),t.YNc(19,ht,3,1,"tr",45),t.TgZ(20,"tr"),t.TgZ(21,"th",46),t._uU(22,"No"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Branch"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"Channel"),t.qZA(),t.TgZ(27,"th"),t._uU(28,"Agent Name"),t.qZA(),t.TgZ(29,"th"),t._uU(30,"Agent No."),t.qZA(),t.YNc(31,gt,6,0,"th",47),t.qZA(),t.YNc(32,Zt,12,6,"tr",48),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.fromDate),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.toDate),t.xp6(2),t.Q6J("ngIf",""!=e.createFormGroup.value.companyId||""!=e.createFormGroup.value.channelId||""!=e.createFormGroup.value.regionId),t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.clusterId||""!=e.createFormGroup.value.branchId||""!=e.createFormGroup.value.agentId),t.xp6(3),t.Q6J("ngIf",e.productList.length>0),t.xp6(12),t.Q6J("ngForOf",e.productList),t.xp6(1),t.Q6J("ngForOf",e.dataList)}}function Ct(a,i){1&a&&(t.TgZ(0,"div",61),t._uU(1," There is no data "),t.qZA())}let yt=(()=>{class a{constructor(e,o){this.cdf=e,this.exportService=o,this.title="Agent Sales Report",this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.productValues=[],this.subHeader=[],this.dataExcel=[],this.isData=!1,this.dataList=[],this.totalDataList=[]}ngOnInit(){this.loadForm(),this.getOfficeHirearchy(),this.fromMinDate=null,this.fromMaxDate=null}getOfficeHirearchy(){return(0,f.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(e=>(0,f.mG)(this,void 0,void 0,function*(){e&&(this.selectOptions.companies=e)}))})}getAllReports(){return(0,f.mG)(this,void 0,void 0,function*(){this.productList=[],this.dataList=[],this.totalDataList=[],this.createFormGroup.invalid?(0,G.w)(this.createFormGroup):yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(e=>(0,f.mG)(this,void 0,void 0,function*(){if(e){if(e.products.length>0)for(var o=0;o<e.products.length;o++)this.productList.push(e.products[o]);if(e.dataList.length>0){this.isData=!0,this.dataList=e.dataList;let l=0;for(o=0;o<this.dataList.length;o++){let v=[];for(var n=0;n<this.productList.length;n++)v.push({id:this.productList[n].id,noOfPolicy:0,totalPreminum:0});if(l++,this.dataList[o].no=l,this.dataList[o].productDataList=v,this.dataList[o].products.length>0)for(n=0;n<this.dataList[o].products.length;n++)for(var r=0;r<this.dataList[o].productDataList.length;r++)this.dataList[o].productDataList[r].id==this.dataList[o].products[n].id&&(this.dataList[o].productDataList[r].noOfPolicy=this.dataList[o].products[n].noOfPolicy,this.dataList[o].productDataList[r].totalPreminum=this.dataList[o].products[n].totalPreminum);if(l==this.dataList.length)for(this.totalDataList=JSON.parse(JSON.stringify(v)),o=0;o<this.dataList.length;o++)for(n=0;n<this.dataList[o].products.length;n++)for(r=0;r<this.totalDataList.length;r++)this.totalDataList[r].id==this.dataList[o].products[n].id&&(this.totalDataList[r].noOfPolicy+=this.dataList[o].products[n].noOfPolicy)}}else this.isData=!1}})),this.cdf.detectChanges()})}generateReportExcel(){this.productValues=[],this.subHeader=[],this.dataExcel=[];for(var e=0;e<this.productList.length;e++)this.productValues.push(this.productList[e].name);for(this.subHeader=["No.","Branch","Channel","Agent Name","Agent No."],e=0;e<this.productList.length;e++)this.subHeader.push("No of Policies"),this.subHeader.push("Premium");for(e=0;e<this.dataList.length;e++){let v=[];v.push(e+1,this.dataList[e].cluster,this.dataList[e].channel,this.dataList[e].agentName,this.dataList[e].agentNo);for(var o=0;o<this.dataList[e].productDataList.length;o++)v.push(this.dataList[e].productDataList[o].noOfPolicy||0,this.dataList[e].productDataList[o].totalPreminum||0);this.dataExcel.push(v)}let n=null,r=null;this.createFormGroup.value.fromDate&&(n=this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)),this.createFormGroup.value.fromDate&&(r=this.formatDateDDMMYYY(this.createFormGroup.value.toDate)),this.exportService.exportExcel({title:this.title,searchValue:[{fromDate:n},{toDate:r},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],products:this.productValues,subHeader:this.subHeader,data:this.dataExcel})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.productList=[],this.dataList=[],this.totalDataList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.fromMinDate=null,this.fromMaxDate=null,this.cdf.detectChanges()}changeOptions(e,o){return(0,f.mG)(this,void 0,void 0,function*(){"company"==o&&(e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.channels=n)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==o&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"02").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.channels=n)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==o&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.channelName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"03").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.regions=n)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==o&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.regionName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"04").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.cluster=n)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==o&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.clusterName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"05").toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.branches=n)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==o&&(this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),e?(this.branchName=e.name,yield this.exportService.getAgentOffice(e.id).toPromise().then(n=>(0,f.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.agents=n)}))):(this.branchName=null,this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"office"==o&&(e?this.agentName=e.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new d.cw({fromDate:new d.NI("",[d.kI.required,d.kI.nullValidator]),toDate:new d.NI("",[d.kI.required,d.kI.nullValidator]),agentId:new d.NI(""),companyId:new d.NI(""),channelId:new d.NI(""),regionId:new d.NI(""),clusterId:new d.NI(""),branchId:new d.NI("")})}isControlValid(e){const o=this.createFormGroup.controls[e];return o.valid&&(o.dirty||o.touched)}isControlInvalid(e){const o=this.createFormGroup.controls[e];return o.invalid&&(o.dirty||o.touched)}controlHasError(e,o){const n=this.createFormGroup.controls[o];return n.hasError(e)&&(n.dirty||n.touched)}isControlTouched(e){const o=this.createFormGroup.controls[e];return o.dirty||o.touched}doValid(e){if("FromDate"==e){if(this.createFormGroup.controls.fromDate.value){let _=F(this.createFormGroup.controls.fromDate.value).add(0,"years");this.toMaxDate={year:parseInt(_.format("YYYY")),month:parseInt(_.format("M")),day:parseInt(_.format("D"))},this.createFormGroup.controls.fromDate.setValue(_.format("YYYY-MM-DD"))}var o=new Date(this.createFormGroup.value.fromDate);o.setFullYear(o.getFullYear()+1),o.setDate(o.getDate()-1),this.fromMinDate=this.createFormGroup.value.fromDate,this.fromMaxDate=o;let l=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=l&&1!=l&&this.createFormGroup.controls.toDate.setValue("")}if("ToDate"==e){if(this.createFormGroup.controls.toDate.value){let _=F(this.createFormGroup.controls.toDate.value).add(0,"years");this.toMaxDate={year:parseInt(_.format("YYYY")),month:parseInt(_.format("M")),day:parseInt(_.format("D"))},this.createFormGroup.controls.toDate.setValue(_.format("YYYY-MM-DD"))}var n=new Date(this.createFormGroup.value.toDate);n.setFullYear(n.getFullYear()-1),n.setDate(n.getDate()+1),this.fromMinDate=n,this.createFormGroup.value.toDate||(this.fromMaxDate=this.createFormGroup.value.toDate);let l=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=l&&1!=l&&this.createFormGroup.controls.fromDate.setValue(""),1==l&&(new Date(this.createFormGroup.value.toDate).getMonth()>new Date(this.createFormGroup.value.fromDate).getMonth()&&this.createFormGroup.controls.fromDate.setValue(""),new Date(this.createFormGroup.value.toDate).getMonth()==new Date(this.createFormGroup.value.fromDate).getMonth()&&new Date(this.createFormGroup.value.toDate).getDate()>=new Date(this.createFormGroup.value.fromDate).getDate()&&this.createFormGroup.controls.fromDate.setValue(""))}this.cdf.detectChanges()}clearDate(e){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==e&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==e&&this.createFormGroup.controls.toDate.setValue(""),this.isData=!1,this.productList=[],this.dataList=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(e){var o=new Date(e),n=""+(o.getMonth()+1),r=""+o.getDate(),l=o.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[r,n,l].join("/")}mathRoundTo(e,o){const n=Math.pow(10,o);return(Math.round(e*n)/n).toLocaleString()}generateExcelFile(){}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.sBO),t.Y36(z))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-report-detail-by-agent"]],viewQuery:function(e,o){if(1&e&&t.Gf(j,5),2&e){let n;t.iGM(n=t.CRH())&&(o.TABLE=n.first)}},decls:46,vars:15,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","regionId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","clusterId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","branchId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","agentName","bindValue","agentId","formControlName","agentId",1,"ng-custom-select",3,"readonly","items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"date-display"],[1,"search-display"],[2,"width","100%","overflow-y","scroll","overflow-x","scroll","max-height","500px"],["border","1"],["style","border-top: 1px solid #000;",4,"ngIf"],[2,"min-width","50px"],["style","min-width: 160px;",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[2,"border-top","1px solid #000"],["colspan","5"],[2,"min-width","160px"],[1,"right-border-transform"],[1,"text-left"],["class","text-right",4,"ngFor","ngForOf"],[1,"text-right"],["style","text-align: end; padding: 0 5px 0 0;",4,"ngIf"],["style","text-align: end;",4,"ngIf"],["style","text-align: end;padding: 0 5px 0 0;",4,"ngIf"],[2,"text-align","end","padding","0 5px 0 0"],[2,"text-align","end"],[2,"color","gray","text-align","center"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"Detail Report by Agent"),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return o.getAllReports()}),t._UZ(9,"span",8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return o.generateReportExcel()}),t.TgZ(11,"span",10),t._uU(12,"Generate"),t.qZA(),t.qZA(),t.TgZ(13,"button",7),t.NdJ("click",function(){return o.cancelReport()}),t.TgZ(14,"span",10),t._uU(15,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"form",12),t.TgZ(18,"div",13),t.TgZ(19,"div",14),t.TgZ(20,"div",15),t.TgZ(21,"label",16),t._uU(22,"From Date"),t.qZA(),t.TgZ(23,"div",17),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return o.doValid("FromDate")}),t.qZA(),t._UZ(25,"mat-datepicker-toggle",19),t._UZ(26,"mat-datepicker",20,21),t.qZA(),t.TgZ(28,"button",22),t.NdJ("click",function(){return o.clearDate("FromDate")}),t._uU(29,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",14),t.TgZ(31,"div",15),t.TgZ(32,"label",16),t._uU(33,"To Date"),t.qZA(),t.TgZ(34,"div",17),t.TgZ(35,"input",23),t.NdJ("dateChange",function(){return o.doValid("ToDate")}),t.qZA(),t._UZ(36,"mat-datepicker-toggle",19),t._UZ(37,"mat-datepicker",20,24),t.qZA(),t.TgZ(39,"button",22),t.NdJ("click",function(){return o.clearDate("ToDate")}),t._uU(40,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(41,K,8,3,"div",25),t.YNc(42,k,13,4,"div",25),t.YNc(43,X,13,4,"div",25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(44,xt,33,12,"div",26),t.YNc(45,Ct,2,0,"div",27)),2&e){const n=t.MAs(27),r=t.MAs(38);t.xp6(10),t.Q6J("disabled",!o.isData),t.xp6(7),t.Q6J("formGroup",o.createFormGroup),t.xp6(7),t.Q6J("min",o.fromMinDate)("max",o.fromMaxDate)("matDatepicker",n),t.xp6(1),t.Q6J("for",n),t.xp6(10),t.Q6J("min",o.fromMinDate)("max",o.fromMaxDate)("matDatepicker",r),t.xp6(1),t.Q6J("for",r),t.xp6(5),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",o.isData),t.xp6(1),t.Q6J("ngIf",!o.isData)}},directives:[d._Y,d.JL,d.sg,d.Fj,T.hl,d.JJ,d.u,T.nW,R.R9,T.Mq,A.O5,w.w9,A.sg],pipes:[A.JJ],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0 .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border-collapse:unset}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;position:relative;border-collapse:unset}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.date-display[_ngcontent-%COMP%]{width:100%;overflow:hidden}.date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;min-width:135px;float:left;display:block}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#000;transform:rotate(0);position:absolute;top:0;left:49%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:end;padding:0 5px 0 0}"]}),a})();var Ft=s(29018),Tt=s(87626),Ot=s(45598),It=s(90860),Gt=s(85378),bt=s(75396),O=s(44290),Nt=s(57730),Mt=s(92118),Yt=s(47975);let Bt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[A.uU,{provide:O._A,useClass:Mt.t7,deps:[O.Ad]},{provide:O.sG,useValue:Yt.Gs}],imports:[[A.ez,d.u5,w.A0,d.UX,Tt.vi,Ot.fA,It.m,Gt.M,bt.X,T.FA,O.XK,Nt.c,R.lN,Ft.Bz.forChild([{path:"",component:yt}])]]}),a})()}}]);