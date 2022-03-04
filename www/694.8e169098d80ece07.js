"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[694],{694:(Bt,I,s)=>{s.r(I),s.d(I,{ReportChannelSummaryByBankBranchModule:()=>_t});var y=s(86019),g=s(64762),h=s(49133),A=s(92070),Y=s(53489),t=s(83668),C=s(44522),P=s(11901),L=s(62473),S=s(91691),B=s(18260),R=s(67198),w=s(71704),E=s(49875);const G=`${B.N.apiUrl}/channelSummaryReport`,k=`${B.N.apiUrl}/officeHirearchy`,J=`${B.N.apiUrl}/agentByOffice`,D=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let U=(()=>{class o extends S.i{constructor(e,n,a,r){super(e,G),this.httpClient=e,this.authService=n,this.platform=a,this.attachmentDownloadService=r}getOfficeHirearchy(e,n){const r=new C.LE({fromObject:{parentId:e,typeCode:n}});return this.httpClient.get(k,{params:r})}getAgentOffice(e){const a=new C.LE({fromObject:{officeId:e}});return this.httpClient.get(J,{params:a})}getAllReportData(e){e.fromDate&&(e.fromDate=this.formatDateYYYY_MM_DD(e.fromDate)),e.toDate&&(e.toDate=this.formatDateYYYY_MM_DD(e.toDate));const n=new C.LE({fromObject:e});return this.httpClient.get(G,{params:n})}getAllAboutBRAM(e){return this.httpClient.get(G+"/"+e+"/asset")}formatDateYYYY_MM_DD(e){var n=new Date(e),a=""+(n.getMonth()+1),r=""+n.getDate(),p=n.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[p,a,r].join("-")}exportExcel(e){const n=e.title,a=e.searchValue,r=e.particularForExcel,p=e.policiesForExcel,f=e.premiumForExcel;let M=new P.Workbook,d=M.addWorksheet("Sheet1");d.views=[{state:"frozen",xSplit:1,ySplit:0,activeCell:"A1"}],d.mergeCells("A1","B2");let O=d.getCell("A1");O.value=n,O.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},O.alignment={vertical:"middle",horizontal:"left"},d.mergeCells("G1","G1");let b=d.getCell("G1");b.value="Reported Date: "+this.formatReportedDate(new Date),b.font={name:"Calibri",size:10,bold:!0},b.alignment={vertical:"middle",horizontal:"left"},d.mergeCells("G2","G2");let Z=d.getCell("G2");if(Z.value="Reported By: "+this.authService.currentUserValue.firstName+this.authService.currentUserValue.lastName,Z.font={name:"Calibri",size:10,bold:!0},Z.alignment={vertical:"middle",horizontal:"left"},a.length>0)for(var i=0;i<a.length;i++){let u=null,m=null;if(a[i].fromDate&&(u="F1",m="From Date: "+a[i].fromDate),a[i].toDate&&(u="F2",m="To Date: "+a[i].toDate),a[i].companyName&&(u="L1",m="Company: "+a[i].companyName),a[i].channelName&&(u="M1",m="Channel: "+a[i].channelName),a[i].regionName&&(u="N1",m="Region: "+a[i].regionName),a[i].clusterName&&(u="L2",m="Cluster: "+a[i].clusterName),a[i].branchName&&(u="M2",m="Branch: "+a[i].branchName),a[i].agentName&&(u="N2",m="Agent: "+a[i].agentName),null!=u&&null!=m){let c=d.getCell(u);c.value=m,c.font={name:"Calibri",size:10,bold:!0},c.alignment={vertical:"middle",horizontal:"left"}}}d.addRow([]);let T=0;for(i=0;i<r.length;i++){let m=this.calculateStartPoint(T);T+=1;let c=d.getCell(m);c.value=r[i],c.font={name:"Calibri",size:12,bold:!0},c.alignment={vertical:"middle",horizontal:"center"}}for(i=0;i<p.length;i++){let m=this.calculateDataPoint(i),c=d.getCell(m);c.value=p[i],c.font={name:"Calibri",size:12,bold:!1},c.alignment={vertical:"middle",horizontal:"center"},0==i?c.alignment={vertical:"middle",horizontal:"left"}:c.numFmt="#,##0.00_);(#,##0.00)"}for(i=0;i<f.length;i++){let m=this.calculatePremiumDataPoint(i),c=d.getCell(m);c.value=f[i],c.font={name:"Calibri",size:12,bold:!1},c.alignment={vertical:"middle",horizontal:"center"},0==i?c.alignment={vertical:"middle",horizontal:"left"}:c.numFmt="#,##0.00_);(#,##0.00)"}d.columns.forEach(function(u,m){var c=0;u.eachCell({includeEmpty:!0},function(v){var _=v.value?v.value.toString().length:10;_>c&&(c=_)}),u.width=c<10?10:c}),d.getColumn(1).width=25,M.xlsx.writeBuffer().then(u=>{let m=new Blob([u],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});this.platform.is("android")||this.platform.is("ios")?this.attachmentDownloadService.mobileDownload(n+"_"+this.formatDateDDMMYYY(new Date)+".xlsx",m):L.saveAs(m,n+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateStartPoint(e){return D[e]+"4"}calculateEndPoint(e){return D[e]+"4"}calculateDataPoint(e){return D[e]+"5"}calculatePremiumDataPoint(e){return D[e]+"6"}formatDateDDMMYYY(e){var n=new Date(e),a=""+(n.getMonth()+1),r=""+n.getDate(),p=n.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[r,a,p].join("_")}mathRoundTo(e,n){const a=Math.pow(10,n);return(Math.round(e*a)/a).toLocaleString()}formatReportedDate(e){var n=new Date(e),a=""+(n.getMonth()+1),r=""+n.getDate(),p=n.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[r,a,p].join("/")}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(C.eN),t.LFG(R.e8),t.LFG(w.t4),t.LFG(E.Ys))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var F=s(78480),N=s(86031);function V(o,l){1&o&&t._UZ(0,"br")}function q(o,l){1&o&&t._UZ(0,"br")}function Q(o,l){1&o&&t._UZ(0,"br")}function H(o,l){1&o&&t._UZ(0,"br")}function j(o,l){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij("From Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.fromDate)," ")}}function z(o,l){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij("To Date: ",e.formatDateDDMMYYY(e.createFormGroup.value.toDate),"")}}function X(o,l){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Company: ",e.companyName," ")}}function W(o,l){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Channel: ",e.channelName," ")}}function $(o,l){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Region: ",e.regionName," ")}}function K(o,l){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,X,2,1,"span",29),t.YNc(2,W,2,1,"span",29),t.YNc(3,$,2,1,"span",29),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.channelId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.regionId)}}function tt(o,l){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Cluster: ",e.clusterName," ")}}function et(o,l){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Branch: ",e.branchName,"")}}function at(o,l){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.hij("Agent: ",e.agentName," ")}}function nt(o,l){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,tt,2,1,"span",29),t.YNc(2,et,2,1,"span",29),t.YNc(3,at,2,1,"span",29),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.branchId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.agentId)}}function ot(o,l){if(1&o&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&o){const e=l.$implicit;t.xp6(1),t.hij("",e.channel," ")}}function rt(o,l){if(1&o&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.noOfPolicy||0)}}function it(o,l){if(1&o&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.noOfPolicy||0,"1.2-2"))}}function lt(o,l){if(1&o&&(t.TgZ(0,"td",38),t.YNc(1,rt,2,1,"label",29),t.YNc(2,it,3,4,"label",29),t.qZA()),2&o){const e=l.index;t.xp6(1),t.Q6J("ngIf",0==e),t.xp6(1),t.Q6J("ngIf",0!=e)}}function st(o,l){if(1&o&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.totalPreminum||0)}}function ct(o,l){if(1&o&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.totalPreminum||0,"1.2-2"))}}function mt(o,l){if(1&o&&(t.TgZ(0,"td",38),t.YNc(1,st,2,1,"label",29),t.YNc(2,ct,3,4,"label",29),t.qZA()),2&o){const e=l.index;t.xp6(1),t.Q6J("ngIf",0==e),t.xp6(1),t.Q6J("ngIf",0!=e)}}function ht(o,l){if(1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",27),t.TgZ(3,"div",28),t.YNc(4,V,1,0,"br",29),t.YNc(5,q,1,0,"br",29),t.TgZ(6,"h3",30),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",28),t.YNc(9,Q,1,0,"br",29),t.YNc(10,H,1,0,"br",29),t.TgZ(11,"div",31),t.YNc(12,j,2,1,"span",29),t.YNc(13,z,2,1,"span",29),t.qZA(),t.qZA(),t.TgZ(14,"div",32),t.YNc(15,K,4,3,"div",29),t.YNc(16,nt,4,3,"div",29),t.qZA(),t.qZA(),t.TgZ(17,"div",33),t.TgZ(18,"table",34),t.TgZ(19,"tr"),t.YNc(20,ot,2,1,"th",35),t.qZA(),t.TgZ(21,"tr",36),t.YNc(22,lt,3,2,"td",37),t.qZA(),t.TgZ(23,"tr",36),t.YNc(24,mt,3,2,"td",37),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.fromDate),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.toDate),t.xp6(2),t.Q6J("ngIf",""!=e.createFormGroup.value.companyId||""!=e.createFormGroup.value.channelId||""!=e.createFormGroup.value.regionId),t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.clusterId||""!=e.createFormGroup.value.branchId||""!=e.createFormGroup.value.agentId),t.xp6(4),t.Q6J("ngForOf",e.displayList[0].particular),t.xp6(2),t.Q6J("ngForOf",e.displayList[0].policies),t.xp6(2),t.Q6J("ngForOf",e.displayList[0].premium)}}function pt(o,l){1&o&&(t.TgZ(0,"div",39),t._uU(1," There is no data "),t.qZA())}let ut=(()=>{class o{constructor(e,n){this.cdf=e,this.exportService=n,this.title="Channel Summary Report",this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.displayList=[{particular:[],policies:[],premium:[]}],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.particularForExcel=[],this.policiesForExcel=[],this.premiumForExcel=[],this.isHasData=!1}ngOnInit(){this.loadForm()}getOfficeHirearchy(){return(0,g.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(e=>(0,g.mG)(this,void 0,void 0,function*(){e&&(this.selectOptions.companies=e)}))})}getAllReports(){return(0,g.mG)(this,void 0,void 0,function*(){this.createFormGroup.invalid?(0,Y.w)(this.createFormGroup):(this.displayList[0].particular=[],this.displayList[0].policies=[],this.displayList[0].premium=[],yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(e=>(0,g.mG)(this,void 0,void 0,function*(){if(e){if(this.reports=e,this.displayList[0].particular.push({id:null,channel:"Particular"}),e.channels){e.channels=[...new Map(e.channels.map(r=>[r.id,r])).values()];for(var n=0;n<e.channels.length;n++)null!=e.channels[n].channel&&this.displayList[0].particular.push({id:e.channels[n].id,channel:e.channels[n].channel});this.displayList[0].particular.push({id:"total",channel:"Total"})}if(e.dataList.length>0){this.isHasData=!0;for(var a=0;a<this.displayList[0].particular.length;a++)this.displayList[0].policies.push({id:this.displayList[0].particular[a].id,noOfPolicy:0}),1==a&&(this.displayList[0].policies[0].id=null,this.displayList[0].policies[0].noOfPolicy="No. of Policies");for(a=0;a<this.displayList[0].particular.length;a++)this.displayList[0].premium.push({id:this.displayList[0].particular[a].id,totalPreminum:0}),1==a&&(this.displayList[0].premium[0].id=null,this.displayList[0].premium[0].totalPreminum="Premuim");for(n=0;n<e.dataList.length;n++){for(a=0;a<this.displayList[0].policies.length-1;a++)e.dataList[n].id==this.displayList[0].policies[a].id&&(this.displayList[0].policies[a].noOfPolicy+=e.dataList[n].noOfPolicy,this.displayList[0].policies[this.displayList[0].policies.length-1].noOfPolicy+=e.dataList[n].noOfPolicy);for(a=0;a<this.displayList[0].premium.length-1;a++)e.dataList[n].id==this.displayList[0].premium[a].id&&(this.displayList[0].premium[a].totalPreminum+=e.dataList[n].totalPreminum,this.displayList[0].premium[this.displayList[0].premium.length-1].totalPreminum+=e.dataList[n].totalPreminum)}for(a=0;a<this.displayList[0].policies.length;a++)a>0&&(this.displayList[0].policies[a].noOfPolicy=this.displayList[0].policies[a].noOfPolicy);for(a=0;a<this.displayList[0].premium.length;a++)a>0&&(this.displayList[0].premium[a].totalPreminum=this.displayList[0].premium[a].totalPreminum)}else this.isHasData=!1}}))),this.cdf.detectChanges()})}generateReportExcel(){this.particularForExcel=[],this.policiesForExcel=[],this.premiumForExcel=[];for(var e=0;e<this.displayList[0].particular.length;e++)this.particularForExcel.push(this.displayList[0].particular[e].channel);for(e=0;e<this.displayList[0].policies.length;e++)this.policiesForExcel.push(this.displayList[0].policies[e].noOfPolicy||0);for(e=0;e<this.displayList[0].premium.length;e++)this.premiumForExcel.push(this.displayList[0].premium[e].totalPreminum||0);let n="",a="";this.createFormGroup.value.fromDate&&(n=this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)),this.createFormGroup.value.toDate&&(a=this.formatDateDDMMYYY(this.createFormGroup.value.toDate)),this.exportService.exportExcel({title:this.title,searchValue:[{fromDate:n},{toDate:a},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],particularForExcel:this.particularForExcel,policiesForExcel:this.policiesForExcel,premiumForExcel:this.premiumForExcel})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.displayList[0].particular=[],this.displayList[0].policies=[],this.displayList[0].premium=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.fromMinDate=null,this.fromMaxDate=null,this.cdf.detectChanges()}changeOptions(e,n){return(0,g.mG)(this,void 0,void 0,function*(){"company"==n&&(e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(a=>(0,g.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.channels=a)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==n&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"02").toPromise().then(a=>(0,g.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.channels=a)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==n&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.channelName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"03").toPromise().then(a=>(0,g.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.regions=a)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==n&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.regionName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"04").toPromise().then(a=>(0,g.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.cluster=a)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==n&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.clusterName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"05").toPromise().then(a=>(0,g.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.branches=a)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==n&&(this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),e?(this.branchName=e.name,yield this.exportService.getAgentOffice(e.id).toPromise().then(a=>(0,g.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.agents=a)}))):(this.branchName=null,this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"office"==n&&(e?this.agentName=e.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new h.cw({fromDate:new h.NI("",[h.kI.required,h.kI.nullValidator]),toDate:new h.NI("",[h.kI.required,h.kI.nullValidator]),agentId:new h.NI(""),companyId:new h.NI(""),channelId:new h.NI(""),regionId:new h.NI(""),clusterId:new h.NI(""),branchId:new h.NI("")})}isControlValid(e){const n=this.createFormGroup.controls[e];return n.valid&&(n.dirty||n.touched)}isControlInvalid(e){const n=this.createFormGroup.controls[e];return n.invalid&&(n.dirty||n.touched)}controlHasError(e,n){const a=this.createFormGroup.controls[n];return a.hasError(e)&&(a.dirty||a.touched)}isControlTouched(e){const n=this.createFormGroup.controls[e];return n.dirty||n.touched}doValid(e){if("FromDate"==e){if(this.createFormGroup.controls.fromDate.value){let f=A(this.createFormGroup.controls.fromDate.value).add(0,"years");this.toMaxDate={year:parseInt(f.format("YYYY")),month:parseInt(f.format("M")),day:parseInt(f.format("D"))},this.createFormGroup.controls.fromDate.setValue(f.format("YYYY-MM-DD"))}var n=new Date(this.createFormGroup.value.fromDate);n.setFullYear(n.getFullYear()+1),n.setDate(n.getDate()-1),this.fromMinDate=this.createFormGroup.value.fromDate,this.fromMaxDate=n;let p=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=p&&1!=p&&this.createFormGroup.controls.toDate.setValue("")}if("ToDate"==e){if(this.createFormGroup.controls.toDate.value){let f=A(this.createFormGroup.controls.toDate.value).add(0,"years");this.toMaxDate={year:parseInt(f.format("YYYY")),month:parseInt(f.format("M")),day:parseInt(f.format("D"))},this.createFormGroup.controls.toDate.setValue(f.format("YYYY-MM-DD"))}var a=new Date(this.createFormGroup.value.toDate);a.setFullYear(a.getFullYear()-1),a.setDate(a.getDate()+1),this.fromMinDate=a,this.createFormGroup.value.toDate||(this.fromMaxDate=this.createFormGroup.value.toDate);let p=new Date(this.createFormGroup.value.toDate).getFullYear()-new Date(this.createFormGroup.value.fromDate).getFullYear();0!=p&&1!=p&&this.createFormGroup.controls.fromDate.setValue(""),1==p&&(new Date(this.createFormGroup.value.toDate).getMonth()>new Date(this.createFormGroup.value.fromDate).getMonth()&&this.createFormGroup.controls.fromDate.setValue(""),new Date(this.createFormGroup.value.toDate).getMonth()==new Date(this.createFormGroup.value.fromDate).getMonth()&&new Date(this.createFormGroup.value.toDate).getDate()>=new Date(this.createFormGroup.value.fromDate).getDate()&&this.createFormGroup.controls.fromDate.setValue(""))}this.cdf.detectChanges()}clearDate(e){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==e&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==e&&this.createFormGroup.controls.toDate.setValue(""),this.isHasData=!1,this.displayList[0].particular=[],this.displayList[0].policies=[],this.displayList[0].premium=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(e){var n=new Date(e),a=""+(n.getMonth()+1),r=""+n.getDate(),p=n.getFullYear();return a.length<2&&(a="0"+a),r.length<2&&(r="0"+r),[r,a,p].join("/")}mathRoundTo(e,n){const a=Math.pow(10,n);return(Math.round(e*a)/a).toLocaleString()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.sBO),t.Y36(U))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-report-channel-summary-by-bank-branch"]],decls:43,vars:13,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"date-display"],[1,"search-display"],[2,"width","100%","overflow-y","scroll","overflow-x","scroll","max-height","500px"],["border","1"],[4,"ngFor","ngForOf"],[1,"data"],["class","text-right",4,"ngFor","ngForOf"],[1,"text-right"],[2,"color","gray","text-align","center"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return n.getAllReports()}),t._UZ(9,"span",8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return n.generateReportExcel()}),t.TgZ(11,"span",10),t._uU(12,"Generate"),t.qZA(),t.qZA(),t.TgZ(13,"button",7),t.NdJ("click",function(){return n.cancelReport()}),t.TgZ(14,"span",10),t._uU(15,"Cancel"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"div",11),t.TgZ(17,"form",12),t.TgZ(18,"div",13),t.TgZ(19,"div",14),t.TgZ(20,"div",15),t.TgZ(21,"label",16),t._uU(22,"From Date"),t.qZA(),t.TgZ(23,"div",17),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return n.doValid("FromDate")}),t.qZA(),t._UZ(25,"mat-datepicker-toggle",19),t._UZ(26,"mat-datepicker",20,21),t.qZA(),t.TgZ(28,"button",22),t.NdJ("click",function(){return n.clearDate("FromDate")}),t._uU(29,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",14),t.TgZ(31,"div",15),t.TgZ(32,"label",16),t._uU(33,"To Date"),t.qZA(),t.TgZ(34,"div",17),t.TgZ(35,"input",23),t.NdJ("dateChange",function(){return n.doValid("ToDate")}),t.qZA(),t._UZ(36,"mat-datepicker-toggle",19),t._UZ(37,"mat-datepicker",20,24),t.qZA(),t.TgZ(39,"button",22),t.NdJ("click",function(){return n.clearDate("ToDate")}),t._uU(40,"Clear"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(41,ht,25,12,"div",25),t.YNc(42,pt,2,0,"div",26)),2&e){const a=t.MAs(27),r=t.MAs(38);t.xp6(6),t.Oqu(n.title),t.xp6(4),t.Q6J("disabled",!n.isHasData),t.xp6(7),t.Q6J("formGroup",n.createFormGroup),t.xp6(7),t.Q6J("min",n.fromMinDate)("max",n.fromMaxDate)("matDatepicker",a),t.xp6(1),t.Q6J("for",a),t.xp6(10),t.Q6J("min",n.fromMinDate)("max",n.fromMaxDate)("matDatepicker",r),t.xp6(1),t.Q6J("for",r),t.xp6(5),t.Q6J("ngIf",n.isHasData),t.xp6(1),t.Q6J("ngIf",!n.isHasData)}},directives:[h._Y,h.JL,h.sg,h.Fj,F.hl,h.JJ,h.u,F.nW,N.R9,F.Mq,y.O5,y.sg],pipes:[y.JJ],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0 .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border-collapse:unset}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;position:relative;border-collapse:unset}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.date-display[_ngcontent-%COMP%]{width:100%;overflow:hidden}.date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;min-width:135px;float:left;display:block}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#000;transform:rotate(0);position:absolute;top:0;left:49%}.data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){text-align:left!important}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:end;padding:0 5px 0 0}"]}),o})();var dt=s(29018),ft=s(45598),gt=s(87626),vt=s(57842),yt=s(85378),Ct=s(75396),x=s(44290),Dt=s(57730),Ft=s(92118),xt=s(47975);let _t=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[y.uU,{provide:x._A,useClass:Ft.t7,deps:[x.Ad]},{provide:x.sG,useValue:xt.Gs}],imports:[[y.ez,h.u5,vt.A0,h.UX,gt.vi,ft.fA,yt.M,Ct.X,F.FA,x.XK,Dt.c,N.lN,dt.Bz.forChild([{path:"",component:ut}])]]}),o})()}}]);