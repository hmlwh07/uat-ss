"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9955],{99955:(Ht,M,s)=>{s.r(M),s.d(M,{ReportByProductSalesChannelPoliciesModule:()=>Qt});var Z=s(86019),P=s(64762),h=s(49133),A=s(92070),q=s(53489),t=s(83668),y=s(44522),w=s(11901),U=s(62473),J=s(91691),T=s(18260),V=s(67198),E=s(71704),Q=s(49875);const N=`${T.N.apiUrl}/policyProductSaleChannel`,H=`${T.N.apiUrl}/officeHirearchy`,z=`${T.N.apiUrl}/agentByOffice`,j=`${T.N.apiUrl}/product-view`,x=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let k=(()=>{class a extends J.i{constructor(e,o,n,i){super(e,N),this.httpClient=e,this.authService=o,this.platform=n,this.attachmentDownloadService=i}getOfficeHirearchy(e,o){const i=new y.LE({fromObject:{parentId:e,typeCode:o}});return this.httpClient.get(H,{params:i})}getAllProducts(){return this.httpClient.get(j)}getAgentOffice(e){const n=new y.LE({fromObject:{officeId:e}});return this.httpClient.get(z,{params:n})}getAllReportData(e){e.fromDate&&(e.fromDate=this.formatDateYYYY_MM_DD(e.fromDate)),e.toDate&&(e.toDate=this.formatDateYYYY_MM_DD(e.toDate));const o=new y.LE({fromObject:e});return this.httpClient.get(N,{params:o})}getAllAboutBRAM(e){return this.httpClient.get(N+"/"+e+"/asset")}formatDateYYYY_MM_DD(e){var o=new Date(e),n=""+(o.getMonth()+1),i=""+o.getDate(),d=o.getFullYear();return n.length<2&&(n="0"+n),i.length<2&&(i="0"+i),[d,n,i].join("-")}exportExcel(e){const o=e.title,n=e.searchValue,i=e.productsHeader,d=e.branchDataForExcel,v=e.header,_=e.totalList;let g=new w.Workbook,f=g.addWorksheet("Sheet1");f.views=[{state:"frozen",xSplit:2,ySplit:5,activeCell:"A1"}],f.mergeCells("A1","B2");let I=f.getCell("A1");I.value=o,I.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},I.alignment={vertical:"middle",horizontal:"left"},f.mergeCells("G1","G1");let F=f.getCell("G1");F.value="Reported Date: "+this.formatReportedDate(new Date),F.font={name:"Calibri",size:10,bold:!0},F.alignment={vertical:"middle",horizontal:"left"},f.mergeCells("G2","G2");let G=f.getCell("G2");if(G.value="Reported By: "+this.authService.currentUserValue.firstName+this.authService.currentUserValue.lastName,G.font={name:"Calibri",size:10,bold:!0},G.alignment={vertical:"middle",horizontal:"left"},n.length>0)for(var l=0;l<n.length;l++){let p=null,c=null;if(n[l].productName&&(p="K1",c="Product: "+n[l].productName),n[l].fromDate&&(p="F1",c="From Date: "+n[l].fromDate),n[l].toDate&&(p="F2",c="To Date: "+n[l].toDate),n[l].companyName&&(p="L1",c="Company: "+n[l].companyName),n[l].channelName&&(p="M1",c="Channel: "+n[l].channelName),n[l].regionName&&(p="K2",c="Region: "+n[l].regionName),n[l].clusterName&&(p="L2",c="Cluster: "+n[l].clusterName),n[l].branchName&&(p="M2",c="Branch: "+n[l].branchName),n[l].agentName&&(p="N2",c="Agent: "+n[l].agentName),null!=p&&null!=c){let m=f.getCell(p);m.value=c,m.font={name:"Calibri",size:10,bold:!0},m.alignment={vertical:"middle",horizontal:"left"}}}f.addRow([]),f.mergeCells("A4:B4");let B=2,Y=3;for(l=0;l<v.length;l++){let c=this.calculateStartPoint(B);B+=2;let m=this.calculateEndPoint(Y);Y+=2,f.mergeCells(c+":"+m);let u=f.getCell(c);u.value=v[l],u.font={name:"Calibri",size:12,bold:!0},u.alignment={vertical:"middle",horizontal:"center"}}let R=0;for(l=0;l<i.length;l++){let c=this.calculateSubHeaderPoint(R);R+=1;let m=f.getCell(c);m.value=i[l],m.font={name:"Calibri",size:12,bold:!0},m.alignment={vertical:"middle",horizontal:"center"}}if(d.forEach(p=>{let c=f.addRow(p),m=c.getCell(1);m&&(m.alignment={vertical:"middle",horizontal:"center"});let u=0;p.forEach(D=>{if(u++,2!=u&&3!=u&&4!=u&&5!=u){let C=c.getCell(u);C&&(C.alignment={vertical:"middle",horizontal:"right"})}if(1==u){let C=c.getCell(u);C&&(C.alignment={vertical:"middle",horizontal:"center"})}u>2&&(c.getCell(u).numFmt="#,##0.00_);(#,##0.00)")})}),d.length>0){let p=0;for(l=0;l<_.length;l++){let m=this.calculateFooterTotalPoint(p,d.length+6);p+=1;let u=f.getCell(m);u.value=_[l],u.font={name:"Calibri",size:12,bold:!0},u.alignment={vertical:"middle",horizontal:"right"},u.numFmt="#,##0.00_);(#,##0.00)"}}f.columns.forEach(function(p,c){var m=0;p.eachCell({includeEmpty:!0},function(u){var D=u.value?u.value.toString().length:10;D>m&&(m=D)}),p.width=m<10?10:m}),f.getColumn(1).width=25,g.xlsx.writeBuffer().then(p=>{let c=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});this.platform.is("android")||this.platform.is("ios")?this.attachmentDownloadService.mobileDownload(o+"_"+this.formatDateDDMMYYY(new Date)+".xlsx",c):U.saveAs(c,o+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateStartPoint(e){return x[e]+"4"}calculateEndPoint(e){return x[e]+"4"}calculateSubHeaderPoint(e){return x[e]+"5"}calculateFooterTotalPoint(e,o){return x[e]+o}calculateDataPoint(e){return x[e]+"5"}calculatePremiumDataPoint(e){return x[e]+"6"}formatDateDDMMYYY(e){var o=new Date(e),n=""+(o.getMonth()+1),i=""+o.getDate(),d=o.getFullYear();return n.length<2&&(n="0"+n),i.length<2&&(i="0"+i),[i,n,d].join("_")}mathRoundTo(e,o){const n=Math.pow(10,o);return(Math.round(e*n)/n).toLocaleString()}formatReportedDate(e){var o=new Date(e),n=""+(o.getMonth()+1),i=""+o.getDate(),d=o.getFullYear();return n.length<2&&(n="0"+n),i.length<2&&(i="0"+i),[i,n,d].join("/")}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(y.eN),t.LFG(V.e8),t.LFG(E.t4),t.LFG(Q.Ys))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var O=s(78480),L=s(86031),S=s(57842);function $(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"div",28),t.TgZ(1,"div",15),t.TgZ(2,"label",16),t._uU(3,"Company"),t.qZA(),t.TgZ(4,"div",29),t.TgZ(5,"ng-select",31),t.NdJ("change",function(n){return t.CHM(e),t.oxw(2).changeOptions(n,"channel")}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw(2);t.xp6(5),t.Q6J("items",e.selectOptions.companies)}}function X(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.YNc(1,$,6,1,"div",27),t.TgZ(2,"div",28),t.TgZ(3,"div",15),t.TgZ(4,"label",16),t._uU(5,"Channel"),t.qZA(),t.TgZ(6,"div",29),t.TgZ(7,"ng-select",30),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"region")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.fromDate&&""!=e.createFormGroup.value.toDate),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.channels.length)("items",e.selectOptions.channels)}}function K(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",28),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Region"),t.qZA(),t.TgZ(5,"div",29),t.TgZ(6,"ng-select",32),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"cluster")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",28),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Cluster"),t.qZA(),t.TgZ(11,"div",29),t.TgZ(12,"ng-select",33),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"branch")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.regions.length)("items",e.selectOptions.regions),t.xp6(6),t.Q6J("readonly",0==e.selectOptions.cluster.length)("items",e.selectOptions.cluster)}}function W(a,r){if(1&a){const e=t.EpF();t.TgZ(0,"div",13),t.TgZ(1,"div",28),t.TgZ(2,"div",15),t.TgZ(3,"label",16),t._uU(4,"Branch"),t.qZA(),t.TgZ(5,"div",29),t.TgZ(6,"ng-select",34),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeOptions(n,"agent")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",28),t.TgZ(8,"div",15),t.TgZ(9,"label",16),t._uU(10,"Product"),t.qZA(),t.TgZ(11,"div",29),t.TgZ(12,"ng-select",35),t.NdJ("change",function(n){return t.CHM(e),t.oxw().changeProductOptions(n)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&a){const e=t.oxw();t.xp6(6),t.Q6J("readonly",0==e.selectOptions.branches.length)("items",e.selectOptions.branches),t.xp6(6),t.Q6J("readonly",0==e.productList.length)("items",e.productList)}}function tt(a,r){1&a&&t._UZ(0,"br")}function et(a,r){1&a&&t._UZ(0,"br")}function ot(a,r){1&a&&t._UZ(0,"br")}function nt(a,r){1&a&&t._UZ(0,"br")}function at(a,r){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.hij("From Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.fromDate)," ")}}function it(a,r){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.hij("To Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.toDate),"")}}function rt(a,r){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Product: ",e.productName," ")}}function lt(a,r){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Company: ",e.companyName," ")}}function st(a,r){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Channel: ",e.channelName," ")}}function ct(a,r){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,rt,2,1,"span",38),t.YNc(2,lt,2,1,"span",38),t.YNc(3,st,2,1,"span",38),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.productName),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.channelId)}}function dt(a,r){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Region: ",e.regionName," ")}}function ut(a,r){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Cluster: ",e.clusterName," ")}}function pt(a,r){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Branch: ",e.branchName,"")}}function ht(a,r){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,dt,2,1,"span",38),t.YNc(2,ut,2,1,"span",38),t.YNc(3,pt,2,1,"span",38),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.regionId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.branchId)}}function mt(a,r){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(3);t.xp6(1),t.hij("Agent: ",e.agentName," ")}}function gt(a,r){if(1&a&&(t.TgZ(0,"div"),t.YNc(1,mt,2,1,"span",38),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.agentId)}}function ft(a,r){if(1&a&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&a){const e=r.$implicit;t.xp6(1),t.Oqu(e.name)}}function _t(a,r){if(1&a&&(t.TgZ(0,"tr",45),t._UZ(1,"th",54),t.YNc(2,ft,2,1,"th",55),t._UZ(3,"th"),t._UZ(4,"th"),t.qZA()),2&a){const e=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",e.productsHeader)}}function vt(a,r){1&a&&(t.TgZ(0,"th",56),t.TgZ(1,"span"),t._uU(2,"No of Policies "),t._UZ(3,"div",57),t.qZA(),t.TgZ(4,"span"),t._uU(5,"Premium"),t.qZA(),t.qZA())}function Pt(a,r){if(1&a&&(t.TgZ(0,"span",64),t._uU(1),t.ALo(2,"number"),t._UZ(3,"div",57),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.hij("",t.xi3(2,1,e.noOfPolicy||0,"1.2-2")," ")}}function Ct(a,r){1&a&&(t.TgZ(0,"span",64),t._uU(1," 0.00 "),t._UZ(2,"div",57),t.qZA())}function xt(a,r){if(1&a&&(t.TgZ(0,"span",52),t._uU(1),t.ALo(2,"number"),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.totalPreminum||0,"1.2-2"))}}function Zt(a,r){1&a&&(t.TgZ(0,"span",52),t._uU(1,"0.00"),t.qZA())}function Dt(a,r){if(1&a&&(t.TgZ(0,"td",60),t.YNc(1,Pt,4,4,"span",61),t.YNc(2,Ct,3,0,"span",62),t.YNc(3,xt,3,4,"span",63),t.YNc(4,Zt,2,0,"span",63),t.qZA()),2&a){const e=r.$implicit;t.xp6(1),t.Q6J("ngIf",e.noOfPolicy),t.xp6(1),t.Q6J("ngIf",!e.noOfPolicy),t.xp6(1),t.Q6J("ngIf",e.totalPreminum),t.xp6(1),t.Q6J("ngIf",!e.totalPreminum)}}function At(a,r){if(1&a&&(t.TgZ(0,"td",60),t._uU(1),t.ALo(2,"number"),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.hij("",t.xi3(2,1,e.totalPolicies||0,"1.2-2")," ")}}function yt(a,r){1&a&&(t.TgZ(0,"td",60),t._uU(1,"0.00"),t.qZA())}function Tt(a,r){if(1&a&&(t.TgZ(0,"td",60),t._uU(1),t.ALo(2,"number"),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.hij("",t.xi3(2,1,e.totalPremium||0,"1.2-2")," ")}}function Ot(a,r){1&a&&(t.TgZ(0,"td",60),t._uU(1,"0.00"),t.qZA())}function bt(a,r){if(1&a&&(t.TgZ(0,"tr",45),t.TgZ(1,"td",46),t._uU(2),t.qZA(),t.TgZ(3,"td",58),t._uU(4),t.qZA(),t.YNc(5,Dt,5,4,"td",51),t.YNc(6,At,3,4,"td",59),t.YNc(7,yt,2,0,"td",59),t.YNc(8,Tt,3,4,"td",59),t.YNc(9,Ot,2,0,"td",59),t.qZA()),2&a){const e=r.$implicit,o=r.index,n=t.oxw(2);t.xp6(2),t.Oqu(e.no),t.xp6(2),t.Oqu(e.month),t.xp6(1),t.Q6J("ngForOf",n.dataList[o].productDataList),t.xp6(1),t.Q6J("ngIf",e.totalPolicies),t.xp6(1),t.Q6J("ngIf",!e.totalPolicies),t.xp6(1),t.Q6J("ngIf",e.totalPremium),t.xp6(1),t.Q6J("ngIf",!e.totalPremium)}}function Ft(a,r){if(1&a&&(t.TgZ(0,"span",64),t._uU(1),t.ALo(2,"number"),t._UZ(3,"div",57),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.hij("",t.xi3(2,1,e.noOfPolicy||0,"1.2-2")," ")}}function Nt(a,r){1&a&&(t.TgZ(0,"span",64),t._uU(1," 0.00 "),t._UZ(2,"div",57),t.qZA())}function It(a,r){if(1&a&&(t.TgZ(0,"span",52),t._uU(1),t.ALo(2,"number"),t.qZA()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.totalPreminum||0,"1.2-2"))}}function Gt(a,r){1&a&&(t.TgZ(0,"span",52),t._uU(1,"0.00"),t.qZA())}function Mt(a,r){if(1&a&&(t.TgZ(0,"td",60),t.YNc(1,Ft,4,4,"span",61),t.YNc(2,Nt,3,0,"span",62),t.YNc(3,It,3,4,"span",63),t.YNc(4,Gt,2,0,"span",63),t.qZA()),2&a){const e=r.$implicit;t.xp6(1),t.Q6J("ngIf",e.noOfPolicy),t.xp6(1),t.Q6J("ngIf",!e.noOfPolicy),t.xp6(1),t.Q6J("ngIf",e.totalPreminum),t.xp6(1),t.Q6J("ngIf",!e.totalPreminum)}}function Lt(a,r){1&a&&(t.TgZ(0,"div",65),t._uU(1," There is no data "),t.qZA())}function St(a,r){if(1&a&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",36),t.TgZ(3,"div",37),t.YNc(4,tt,1,0,"br",38),t.YNc(5,et,1,0,"br",38),t.TgZ(6,"h3",39),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",37),t.YNc(9,ot,1,0,"br",38),t.YNc(10,nt,1,0,"br",38),t.TgZ(11,"div",40),t.YNc(12,at,2,1,"span",38),t.YNc(13,it,2,1,"span",38),t.qZA(),t.qZA(),t.TgZ(14,"div",41),t.YNc(15,ct,4,3,"div",38),t.YNc(16,ht,4,3,"div",38),t.YNc(17,gt,2,1,"div",38),t.qZA(),t.TgZ(18,"div",42),t.TgZ(19,"table",43),t.YNc(20,_t,5,1,"tr",44),t.TgZ(21,"tr",45),t.TgZ(22,"th",46),t._uU(23,"No."),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Month"),t.qZA(),t.YNc(26,vt,6,0,"th",47),t.TgZ(27,"th",48),t._uU(28,"Total No. of Policies"),t.qZA(),t.TgZ(29,"th",49),t._uU(30,"Total Premium"),t.qZA(),t.qZA(),t.YNc(31,bt,10,7,"tr",50),t.TgZ(32,"tr"),t._UZ(33,"td"),t.TgZ(34,"td"),t._uU(35,"Total"),t.qZA(),t.YNc(36,Mt,5,4,"td",51),t.TgZ(37,"td",52),t._uU(38),t.ALo(39,"number"),t.qZA(),t.TgZ(40,"td",52),t._uU(41),t.ALo(42,"number"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(43,Lt,2,0,"div",53),t.qZA()),2&a){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.fromDate),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.toDate),t.xp6(2),t.Q6J("ngIf",""!=e.createFormGroup.value.companyId||""!=e.createFormGroup.value.channelId||""!=e.productName),t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.regionId||""!=e.createFormGroup.value.clusterId||""!=e.createFormGroup.value.branchId||""!=e.createFormGroup.value.agentId),t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.agentId),t.xp6(3),t.Q6J("ngIf",e.productsHeader.length>0),t.xp6(6),t.Q6J("ngForOf",e.productsHeader),t.xp6(5),t.Q6J("ngForOf",e.dataList),t.xp6(5),t.Q6J("ngForOf",e.totalDataList),t.xp6(2),t.Oqu(t.xi3(39,17,e.noOfPolicyByProduct,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(42,20,e.totalPreminumByProduct,"1.2-2")),t.xp6(2),t.Q6J("ngIf",!e.isData)}}let Bt=(()=>{class a{constructor(e,o){this.cdf=e,this.exportService=o,this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.productValues=[],this.subHeader=[],this.dataExcel=[],this.productsHeader=[],this.branchDataList=[],this.isData=!1,this.branchDataForExcel=[],this.title="Monthly Product Sales by Channel",this.dataList=[],this.totalDataList=[],this.header=[],this.productName="All"}ngOnInit(){this.loadForm(),this.getOfficeHirearchy(),this.getAllProducts(),this.fromMinDate=null,this.fromMaxDate=null}getOfficeHirearchy(){return(0,P.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(e=>(0,P.mG)(this,void 0,void 0,function*(){e&&(this.selectOptions.companies=e)}))})}getAllProducts(){return(0,P.mG)(this,void 0,void 0,function*(){yield this.exportService.getAllProducts().toPromise().then(e=>(0,P.mG)(this,void 0,void 0,function*(){e&&(e.push({statusCd:"02",statusValue:"Active",name:"All",code:"All"}),this.productList=e,this.productList=this.productList.filter(o=>"02"===o.statusCd&&"Active"===o.statusValue).reverse())}))})}getAllReports(){return(0,P.mG)(this,void 0,void 0,function*(){this.createFormGroup.invalid?(0,q.w)(this.createFormGroup):(this.productsHeader=[],this.branchDataList=[],this.dataList=[],this.createFormGroup.value.productCodes||(this.createFormGroup.value.productCodes="All"),yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(e=>(0,P.mG)(this,void 0,void 0,function*(){if(e){if(e.products.length>0)for(var o=0;o<e.products.length;o++)this.productsHeader.push({id:e.products[o].id,name:e.products[o].name,noOfPolicy:0,totalPreminum:0});if(e.dataList.length>0){this.isData=!0,this.dataList=e.dataList;let d=0;for(o=0;o<this.dataList.length;o++){this.dataList[o].totalPolicies=0,this.dataList[o].totalPremium=0;let _=0,g=0;this.dataList[o].productDataList=[],d++,this.dataList[o].no=d;for(var n=0;n<this.productsHeader.length;n++)this.dataList[o].productDataList.push({id:this.productsHeader[n].id,noOfPolicy:0,totalPreminum:0});if(this.dataList[o].products){for(n=0;n<this.dataList[o].products.length;n++)for(var i=0;i<this.dataList[o].productDataList.length;i++)this.dataList[o].productDataList[i].id==this.dataList[o].products[n].id&&(this.dataList[o].productDataList[i].noOfPolicy=this.dataList[o].products[n].noOfPolicy,this.dataList[o].productDataList[i].totalPreminum=this.dataList[o].products[n].totalPreminum,_+=this.dataList[o].products[n].noOfPolicy,g+=this.dataList[o].products[n].totalPreminum);if(this.dataList[o].totalPolicies=_,this.dataList[o].totalPremium=g,d==this.dataList.length){for(this.totalDataList=JSON.parse(JSON.stringify(this.productsHeader)),this.noOfPolicyByProduct=0,this.totalPreminumByProduct=0,o=0;o<this.dataList.length;o++){for(n=0;n<this.dataList[o].products.length;n++)for(i=0;i<this.totalDataList.length;i++)this.totalDataList[i].id==this.dataList[o].products[n].id&&(this.totalDataList[i].noOfPolicy+=this.dataList[o].products[n].noOfPolicy,this.totalDataList[i].totalPreminum+=this.dataList[o].products[n].totalPreminum);this.noOfPolicyByProduct+=this.dataList[o].totalPolicies,this.totalPreminumByProduct+=this.dataList[o].totalPremium}for(i=0;i<this.totalDataList.length;i++)this.totalDataList[i].noOfPolicy=this.totalDataList[i].noOfPolicy,this.totalDataList[i].totalPreminum=this.totalDataList[i].totalPreminum}}}}else this.isData=!1}}))),this.cdf.detectChanges()})}generateReportExcel(){this.productValues=[],this.branchDataForExcel=[],this.header=[];for(var e=0;e<this.productsHeader.length;e++)this.header.push(this.productsHeader[e].name);for(this.productValues.push("No."),this.productValues.push("Month"),e=0;e<this.productsHeader.length;e++)this.productValues.push("No of Policies","Premium");for(this.productValues.push("Total No. of Policies"),this.productValues.push("Total Premium"),e=0;e<this.dataList.length;e++){let g=[];g.push(e+1,this.dataList[e].month);for(var o=0;o<this.dataList[e].productDataList.length;o++)g.push(this.dataList[e].productDataList[o].noOfPolicy||0,this.dataList[e].productDataList[o].totalPreminum||0);g.push(this.dataList[e].totalPolicies||0,this.dataList[e].totalPremium||0),this.branchDataForExcel.push(g)}let n=[];for(n.push(""),n.push("Total"),e=0;e<this.totalDataList.length;e++)n.push(this.totalDataList[e].noOfPolicy,this.totalDataList[e].totalPreminum);n.push(this.noOfPolicyByProduct),n.push(this.totalPreminumByProduct);let i=null,d=null;this.createFormGroup.value.fromDate&&(i=this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)),this.createFormGroup.value.toDate&&(d=this.formatDateDDMMYYY(this.createFormGroup.value.toDate)),this.exportService.exportExcel({title:this.title+" Report",searchValue:[{fromDate:i},{toDate:d},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName},{productName:this.productName}],productsHeader:this.productValues,branchDataForExcel:this.branchDataForExcel,header:this.header,totalList:n})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.productsHeader=[],this.branchDataList=[],this.dataList=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.fromMinDate=null,this.fromMaxDate=null,this.cdf.detectChanges()}changeOptions(e,o){return(0,P.mG)(this,void 0,void 0,function*(){"company"==o&&(e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(n=>(0,P.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.channels=n)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==o&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"02").toPromise().then(n=>(0,P.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.channels=n)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==o&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.channelName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"03").toPromise().then(n=>(0,P.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.regions=n)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==o&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.regionName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"04").toPromise().then(n=>(0,P.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.cluster=n)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==o&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.clusterName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"05").toPromise().then(n=>(0,P.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.branches=n)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==o&&(this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),e?(this.branchName=e.name,yield this.exportService.getAgentOffice(e.id).toPromise().then(n=>(0,P.mG)(this,void 0,void 0,function*(){n&&(this.selectOptions.agents=n)}))):(this.branchName=null,this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"office"==o&&(e?this.agentName=e.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.getAllReports(),this.cdf.detectChanges()})}changeProductOptions(e){e.name&&(this.productName=e.name),this.getAllReports(),this.cdf.detectChanges()}loadForm(){this.createFormGroup=new h.cw({fromDate:new h.NI("",[h.kI.required,h.kI.nullValidator]),toDate:new h.NI("",[h.kI.required,h.kI.nullValidator]),agentId:new h.NI(""),companyId:new h.NI(""),channelId:new h.NI(""),regionId:new h.NI(""),clusterId:new h.NI(""),branchId:new h.NI(""),productCodes:new h.NI("All")})}isControlValid(e){const o=this.createFormGroup.controls[e];return o.valid&&(o.dirty||o.touched)}isControlInvalid(e){const o=this.createFormGroup.controls[e];return o.invalid&&(o.dirty||o.touched)}controlHasError(e,o){const n=this.createFormGroup.controls[o];return n.hasError(e)&&(n.dirty||n.touched)}isControlTouched(e){const o=this.createFormGroup.controls[e];return o.dirty||o.touched}doValid(e){if("FromDate"==e){let i=A(this.createFormGroup.controls.fromDate.value).format("YYYY-MM-DD"),d=A(this.createFormGroup.controls.toDate.value).format("YYYY-MM-DD");if(d){let v=i.split("-"),_=d.split("-"),g=Number(_[0])-Number(v[0]);0!=g&&1!=g&&this.createFormGroup.controls.toDate.setValue(""),0==g&&(v[1]>_[1]&&this.createFormGroup.controls.toDate.setValue(""),v[1]==_[1]&&v[2]>_[2]&&this.createFormGroup.controls.toDate.setValue(""))}if(i){var o=new Date(i);o.setFullYear(o.getFullYear()+1),o.setDate(o.getDate()-1),this.fromMinDate=new Date(i),this.fromMaxDate=o}}if("ToDate"==e){let i=A(this.createFormGroup.controls.fromDate.value).format("YYYY-MM-DD"),d=A(this.createFormGroup.controls.toDate.value).format("YYYY-MM-DD");if(i){let v=i.split("-"),_=d.split("-"),g=Number(_[0])-Number(v[0]);0!=g&&1!=g&&this.createFormGroup.controls.fromDate.setValue(""),0==g&&(v[1]>_[1]&&this.createFormGroup.controls.toDate.setValue(""),v[1]==_[1]&&v[2]>_[2]&&this.createFormGroup.controls.toDate.setValue(""))}if(d){var n=new Date(d);n.setFullYear(n.getFullYear()-1),n.setDate(n.getDate()+1),this.fromMinDate=n,this.fromMaxDate=new Date(d)}}this.cdf.detectChanges()}clearDate(e){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==e&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==e&&this.createFormGroup.controls.toDate.setValue(""),this.isData=!1,this.productsHeader=[],this.dataList=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(e){var o=new Date(e),n=""+(o.getMonth()+1),i=""+o.getDate(),d=o.getFullYear();return n.length<2&&(n="0"+n),i.length<2&&(i="0"+i),[i,n,d].join("/")}mathRoundTo(e,o){const n=Math.pow(10,o);return(Math.round(e*n)/n).toLocaleString()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.sBO),t.Y36(k))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-report-by-product-sales-channel-policies"]],decls:45,vars:15,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool","search-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","regionId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","clusterId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","branchId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","code","formControlName","productCodes",1,"ng-custom-select",3,"readonly","items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"date-display"],[1,"search-display"],[2,"width","100%","overflow-y","scroll","overflow-x","scroll","max-height","500px"],["border","1"],["style","border-top: 1px solid #000;",4,"ngIf"],[2,"border-top","1px solid #000"],[2,"min-width","50px","max-width","50px"],["style","min-width: 170px;",4,"ngFor","ngForOf"],[2,"min-width","115px"],[2,"min-width","100px"],["style","border-top: 1px solid #000;",4,"ngFor","ngForOf"],["class","text-right",4,"ngFor","ngForOf"],[2,"text-align","end"],["style","color: gray; text-align: center;",4,"ngIf"],["colspan","2"],[4,"ngFor","ngForOf"],[2,"min-width","170px"],[1,"right-border-transform"],[1,"text-left"],["class","text-right",4,"ngIf"],[1,"text-right"],["style","text-align: end;  padding: 0 5px 0 0;",4,"ngIf"],["style","text-align: end; padding: 0 5px 0 0;",4,"ngIf"],["style","text-align: end;",4,"ngIf"],[2,"text-align","end","padding","0 5px 0 0"],[2,"color","gray","text-align","center"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return o.getAllReports()}),t._UZ(9,"span",8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return o.generateReportExcel()}),t.TgZ(11,"span",10),t._uU(12,"Generate"),t.qZA(),t.qZA(),t.TgZ(13,"button",7),t.NdJ("click",function(){return o.cancelReport()}),t.TgZ(14,"span",10),t._uU(15,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"form",12),t.TgZ(18,"div",13),t.TgZ(19,"div",14),t.TgZ(20,"div",15),t.TgZ(21,"label",16),t._uU(22,"From Date"),t.qZA(),t.TgZ(23,"div",17),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return o.doValid("FromDate")}),t.qZA(),t._UZ(25,"mat-datepicker-toggle",19),t._UZ(26,"mat-datepicker",20,21),t.qZA(),t.TgZ(28,"button",22),t.NdJ("click",function(){return o.clearDate("FromDate")}),t._uU(29,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",14),t.TgZ(31,"div",15),t.TgZ(32,"label",16),t._uU(33,"To Date"),t.qZA(),t.TgZ(34,"div",17),t.TgZ(35,"input",23),t.NdJ("dateChange",function(){return o.doValid("ToDate")}),t.qZA(),t._UZ(36,"mat-datepicker-toggle",19),t._UZ(37,"mat-datepicker",20,24),t.qZA(),t.TgZ(39,"button",22),t.NdJ("click",function(){return o.clearDate("ToDate")}),t._uU(40,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(41,X,8,3,"div",25),t.YNc(42,K,13,4,"div",25),t.YNc(43,W,13,4,"div",25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(44,St,44,23,"div",26)),2&e){const n=t.MAs(27),i=t.MAs(38);t.xp6(6),t.Oqu(o.title),t.xp6(4),t.Q6J("disabled",!o.isData),t.xp6(7),t.Q6J("formGroup",o.createFormGroup),t.xp6(7),t.Q6J("min",o.fromMinDate)("max",o.fromMaxDate)("matDatepicker",n),t.xp6(1),t.Q6J("for",n),t.xp6(10),t.Q6J("min",o.fromMinDate)("max",o.fromMaxDate)("matDatepicker",i),t.xp6(1),t.Q6J("for",i),t.xp6(5),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",""!=o.createFormGroup.value.fromDate&&""!=o.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",o.isData)}},directives:[h._Y,h.JL,h.sg,h.Fj,O.hl,h.JJ,h.u,O.nW,L.R9,O.Mq,Z.O5,S.w9,Z.sg],pipes:[Z.JJ],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0 .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{min-width:160px;text-align:center;position:relative;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){min-width:50px}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.date-display[_ngcontent-%COMP%]{width:100%;overflow:hidden}.date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;min-width:135px;float:left;display:block}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#e3e3e3;transform:rotate(0);position:absolute;top:0;left:49%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:end;padding:0 5px 0 0}"]}),a})();var Yt=s(87626),Rt=s(45598),qt=s(4205),wt=s(85993),Ut=s(75396),b=s(44290),Jt=s(57730),Vt=s(92118),Et=s(47975);let Qt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[Z.uU,{provide:b._A,useClass:Vt.t7,deps:[b.Ad]},{provide:b.sG,useValue:Et.Gs}],imports:[[Z.ez,h.u5,S.A0,h.UX,Yt.vi,Rt.fA,wt.M,Ut.X,O.FA,b.XK,Jt.c,L.lN,qt.Bz.forChild([{path:"",component:Bt}])]]}),a})()}}]);