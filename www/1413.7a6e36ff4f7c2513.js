"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1413],{81413:(bt,M,s)=>{s.r(M),s.d(M,{ReportChannelSummaryByBankBranchModule:()=>At});var C=s(69808),v=s(70655),p=s(93075),x=s(15439),Y=s(41018),t=s(5e3),_=s(40520),P=s(64313),R=s(94327),S=s(38313),O=s(92340),E=s(90089),w=s(83950),k=s(55410);const A=`${O.N.apiUrl}/channelSummaryReport`,q=`${O.N.apiUrl}/officeHirearchy`,J=`${O.N.apiUrl}/agentByOffice`,D=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","Z"];let V=(()=>{class o extends S.i{constructor(e,n,a,i){super(e,A),this.httpClient=e,this.authService=n,this.platform=a,this.attachmentDownloadService=i}getOfficeHirearchy(e,n){const i=new _.LE({fromObject:{parentId:e,typeCode:n}});return this.httpClient.get(q,{params:i})}getAgentOffice(e){const a=new _.LE({fromObject:{officeId:e}});return this.httpClient.get(J,{params:a})}getAllReportData(e){e.fromDate&&(e.fromDate=this.formatDateYYYY_MM_DD(e.fromDate)),e.toDate&&(e.toDate=this.formatDateYYYY_MM_DD(e.toDate));const n=new _.LE({fromObject:e});return this.httpClient.get(A,{params:n})}getAllAboutBRAM(e){return this.httpClient.get(A+"/"+e+"/asset")}formatDateYYYY_MM_DD(e){var n=new Date(e),a=""+(n.getMonth()+1),i=""+n.getDate(),u=n.getFullYear();return a.length<2&&(a="0"+a),i.length<2&&(i="0"+i),[u,a,i].join("-")}exportExcel(e){const n=e.title,a=e.searchValue,i=e.particularForExcel,u=e.policiesForExcel,f=e.premiumForExcel;let g=new P.Workbook,m=g.addWorksheet("Sheet1");m.views=[{state:"frozen",xSplit:1,ySplit:0,activeCell:"A1"}],m.mergeCells("A1","B2");let b=m.getCell("A1");b.value=n,b.font={name:"Calibri",size:12,underline:"single",bold:!0,color:{argb:"0085A3"}},b.alignment={vertical:"middle",horizontal:"left"},m.mergeCells("G1","G1");let G=m.getCell("G1");G.value="Reported Date: "+this.formatReportedDate(new Date),G.font={name:"Calibri",size:10,bold:!0},G.alignment={vertical:"middle",horizontal:"left"},m.mergeCells("G2","G2");let I=m.getCell("G2");if(I.value="Reported By: "+this.authService.currentUserValue.firstName+this.authService.currentUserValue.lastName,I.font={name:"Calibri",size:10,bold:!0},I.alignment={vertical:"middle",horizontal:"left"},a.length>0)for(var l=0;l<a.length;l++){let d=null,h=null;if(a[l].fromDate&&(d="F1",h="From Date: "+a[l].fromDate),a[l].toDate&&(d="F2",h="To Date: "+a[l].toDate),a[l].companyName&&(d="L1",h="Company: "+a[l].companyName),a[l].channelName&&(d="M1",h="Channel: "+a[l].channelName),a[l].regionName&&(d="N1",h="Region: "+a[l].regionName),a[l].clusterName&&(d="L2",h="Cluster: "+a[l].clusterName),a[l].branchName&&(d="M2",h="Branch: "+a[l].branchName),a[l].agentName&&(d="N2",h="Agent: "+a[l].agentName),null!=d&&null!=h){let c=m.getCell(d);c.value=h,c.font={name:"Calibri",size:10,bold:!0},c.alignment={vertical:"middle",horizontal:"left"}}}m.addRow([]);let L=0;for(l=0;l<i.length;l++){let h=this.calculateStartPoint(L);L+=1;let c=m.getCell(h);c.value=i[l],c.font={name:"Calibri",size:12,bold:!0},c.alignment={vertical:"middle",horizontal:"center"}}for(l=0;l<u.length;l++){let h=this.calculateDataPoint(l),c=m.getCell(h);c.value=u[l],c.font={name:"Calibri",size:12,bold:!1},c.alignment={vertical:"middle",horizontal:"center"},0==l?c.alignment={vertical:"middle",horizontal:"left"}:(c.numFmt="#,##0.00_);(#,##0.00)",c.alignment={vertical:"middle",horizontal:"right"})}for(l=0;l<f.length;l++){let h=this.calculatePremiumDataPoint(l),c=m.getCell(h);c.value=f[l],c.font={name:"Calibri",size:12,bold:!1},c.alignment={vertical:"middle",horizontal:"center"},0==l?c.alignment={vertical:"middle",horizontal:"left"}:(c.numFmt="#,##0.00_);(#,##0.00)",c.alignment={vertical:"middle",horizontal:"right"})}m.columns.forEach(function(d,h){var c=0;d.eachCell({includeEmpty:!0},function(y){var Z=y.value?y.value.toString().length:10;Z>c&&(c=Z)}),d.width=c<10?10:c}),m.getColumn(1).width=25,g.xlsx.writeBuffer().then(d=>{let h=new Blob([d],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=utf-8"});this.platform.is("android")||this.platform.is("ios")?this.attachmentDownloadService.mobileDownload(n+"_"+this.formatDateDDMMYYY(new Date)+".xlsx",h):R.saveAs(h,n+"_"+this.formatDateDDMMYYY(new Date)+".xlsx")})}calculateStartPoint(e){return D[e]+"4"}calculateEndPoint(e){return D[e]+"4"}calculateDataPoint(e){return D[e]+"5"}calculatePremiumDataPoint(e){return D[e]+"6"}formatDateDDMMYYY(e){var n=new Date(e),a=""+(n.getMonth()+1),i=""+n.getDate(),u=n.getFullYear();return a.length<2&&(a="0"+a),i.length<2&&(i="0"+i),[i,a,u].join("_")}mathRoundTo(e,n){const a=Math.pow(10,n);return(Math.round(e*a)/a).toLocaleString()}formatReportedDate(e){var n=new Date(e),a=""+(n.getMonth()+1),i=""+n.getDate(),u=n.getFullYear();return a.length<2&&(a="0"+a),i.length<2&&(i="0"+i),[i,a,u].join("/")}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(_.eN),t.LFG(E.e8),t.LFG(w.t4),t.LFG(k.Ys))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var F=s(65884),N=s(21223),T=s(64537),U=s(98807);function Q(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",29),t.TgZ(1,"div",15),t.TgZ(2,"label",16),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"div",30),t.TgZ(6,"ng-select",32),t.NdJ("change",function(a){return t.CHM(e),t.oxw(2).changeOptions(a,"channel")}),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw(2);t.xp6(3),t.Oqu(t.lcZ(4,2,"FORM.company")),t.xp6(3),t.Q6J("items",e.selectOptions.companies)}}function H(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",13),t.YNc(1,Q,7,4,"div",28),t.TgZ(2,"div",29),t.TgZ(3,"div",15),t.TgZ(4,"label",16),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"div",30),t.TgZ(8,"ng-select",31),t.NdJ("change",function(a){return t.CHM(e),t.oxw().changeOptions(a,"region")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.fromDate&&""!=e.createFormGroup.value.toDate),t.xp6(4),t.Oqu(t.lcZ(6,4,"FORM.channel")),t.xp6(3),t.Q6J("readonly",0==e.selectOptions.channels.length)("items",e.selectOptions.channels)}}function z(o,r){1&o&&t._UZ(0,"br")}function j(o,r){1&o&&t._UZ(0,"br")}function X(o,r){1&o&&t._UZ(0,"br")}function W(o,r){1&o&&t._UZ(0,"br")}function $(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.AsE("",t.lcZ(2,2,"FORM.from_date"),": ",e.formatDateDDMMYYY(e.createFormGroup.value.fromDate)," ")}}function K(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.AsE("",t.lcZ(2,2,"FORM.to_date"),": ",e.formatDateDDMMYYY(e.createFormGroup.value.toDate),"")}}function tt(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.AsE("",t.lcZ(2,2,"FORM.company"),": ",e.companyName," ")}}function et(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.AsE("",t.lcZ(2,2,"FORM.channel"),": ",e.channelName," ")}}function at(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.AsE("",t.lcZ(2,2,"FORM.region"),": ",e.regionName," ")}}function nt(o,r){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,tt,3,4,"span",35),t.YNc(2,et,3,4,"span",35),t.YNc(3,at,3,4,"span",35),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.channelId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.regionId)}}function ot(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.AsE("",t.lcZ(2,2,"FORM.cluster"),": ",e.clusterName," ")}}function it(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.AsE("",t.lcZ(2,2,"FORM.branch"),": ",e.branchName,"")}}function rt(o,r){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&o){const e=t.oxw(3);t.xp6(1),t.AsE("",t.lcZ(2,2,"FORM.agent_name"),": ",e.agentName," ")}}function lt(o,r){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,ot,3,4,"span",35),t.YNc(2,it,3,4,"span",35),t.YNc(3,rt,3,4,"span",35),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.branchId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.agentId)}}function st(o,r){if(1&o&&(t.TgZ(0,"th"),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.hij("",e.channel," ")}}function ct(o,r){if(1&o&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.noOfPolicy||0)}}function mt(o,r){if(1&o&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.noOfPolicy||0,"1.2-2"))}}function pt(o,r){if(1&o&&(t.TgZ(0,"td",44),t.YNc(1,ct,2,1,"label",35),t.YNc(2,mt,3,4,"label",35),t.qZA()),2&o){const e=r.index;t.xp6(1),t.Q6J("ngIf",0==e),t.xp6(1),t.Q6J("ngIf",0!=e)}}function ht(o,r){if(1&o&&(t.TgZ(0,"label"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.totalPreminum||0)}}function ut(o,r){if(1&o&&(t.TgZ(0,"label"),t._uU(1),t.ALo(2,"number"),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(t.xi3(2,1,e.totalPreminum||0,"1.2-2"))}}function dt(o,r){if(1&o&&(t.TgZ(0,"td",44),t.YNc(1,ht,2,1,"label",35),t.YNc(2,ut,3,4,"label",35),t.qZA()),2&o){const e=r.index;t.xp6(1),t.Q6J("ngIf",0==e),t.xp6(1),t.Q6J("ngIf",0!=e)}}function ft(o,r){if(1&o&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",33),t.TgZ(3,"div",34),t.YNc(4,z,1,0,"br",35),t.YNc(5,j,1,0,"br",35),t.TgZ(6,"h3",36),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",34),t.YNc(9,X,1,0,"br",35),t.YNc(10,W,1,0,"br",35),t.TgZ(11,"div",37),t.YNc(12,$,3,4,"span",35),t.YNc(13,K,3,4,"span",35),t.qZA(),t.qZA(),t.TgZ(14,"div",38),t.YNc(15,nt,4,3,"div",35),t.YNc(16,lt,4,3,"div",35),t.qZA(),t.qZA(),t.TgZ(17,"div",39),t.TgZ(18,"table",40),t.TgZ(19,"tr"),t.YNc(20,st,2,1,"th",41),t.qZA(),t.TgZ(21,"tr",42),t.YNc(22,pt,3,2,"td",43),t.qZA(),t.TgZ(23,"tr",42),t.YNc(24,dt,3,2,"td",43),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.companyId),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.clusterId),t.xp6(2),t.Q6J("ngIf",e.createFormGroup.value.fromDate),t.xp6(1),t.Q6J("ngIf",e.createFormGroup.value.toDate),t.xp6(2),t.Q6J("ngIf",""!=e.createFormGroup.value.companyId||""!=e.createFormGroup.value.channelId||""!=e.createFormGroup.value.regionId),t.xp6(1),t.Q6J("ngIf",""!=e.createFormGroup.value.clusterId||""!=e.createFormGroup.value.branchId||""!=e.createFormGroup.value.agentId),t.xp6(4),t.Q6J("ngForOf",e.displayList[0].particular),t.xp6(2),t.Q6J("ngForOf",e.displayList[0].policies),t.xp6(2),t.Q6J("ngForOf",e.displayList[0].premium)}}function gt(o,r){1&o&&(t.TgZ(0,"div",45),t._uU(1," There is no data "),t.qZA())}let vt=(()=>{class o{constructor(e,n){this.cdf=e,this.exportService=n,this.title="Production Summary - by channel",this.fromMinDate=null,this.fromMaxDate=null,this.selectOptions={companies:[],channels:[],regions:[],cluster:[],branches:[],agents:[]},this.reports=[],this.products=[],this.policies=[],this.productList=[],this.displayList=[{particular:[],policies:[],premium:[]}],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.particularForExcel=[],this.policiesForExcel=[],this.premiumForExcel=[],this.isHasData=!1}ngOnInit(){this.loadForm(),this.getOfficeHirearchy()}getOfficeHirearchy(){return(0,v.mG)(this,void 0,void 0,function*(){yield this.exportService.getOfficeHirearchy("","01").toPromise().then(e=>(0,v.mG)(this,void 0,void 0,function*(){e&&(this.selectOptions.companies=e)}))})}getAllReports(){return(0,v.mG)(this,void 0,void 0,function*(){this.createFormGroup.invalid?(0,Y.w)(this.createFormGroup):(this.displayList[0].particular=[],this.displayList[0].policies=[],this.displayList[0].premium=[],yield this.exportService.getAllReportData(this.createFormGroup.value).toPromise().then(e=>(0,v.mG)(this,void 0,void 0,function*(){if(e){if(this.reports=e,this.displayList[0].particular.push({id:null,channel:"Particular"}),e.channels){e.channels=[...new Map(e.channels.map(i=>[i.id,i])).values()];for(var n=0;n<e.channels.length;n++)null!=e.channels[n].channel&&this.displayList[0].particular.push({id:e.channels[n].id,channel:e.channels[n].channel});this.displayList[0].particular.push({id:"total",channel:"Total"})}if(e.dataList.length>0){this.isHasData=!0;for(var a=0;a<this.displayList[0].particular.length;a++)this.displayList[0].policies.push({id:this.displayList[0].particular[a].id,noOfPolicy:0}),1==a&&(this.displayList[0].policies[0].id=null,this.displayList[0].policies[0].noOfPolicy="No. of Policies");for(a=0;a<this.displayList[0].particular.length;a++)this.displayList[0].premium.push({id:this.displayList[0].particular[a].id,totalPreminum:0}),1==a&&(this.displayList[0].premium[0].id=null,this.displayList[0].premium[0].totalPreminum="Premuim");for(n=0;n<e.dataList.length;n++){for(a=0;a<this.displayList[0].policies.length-1;a++)e.dataList[n].id==this.displayList[0].policies[a].id&&(this.displayList[0].policies[a].noOfPolicy+=e.dataList[n].noOfPolicy,this.displayList[0].policies[this.displayList[0].policies.length-1].noOfPolicy+=e.dataList[n].noOfPolicy);for(a=0;a<this.displayList[0].premium.length-1;a++)e.dataList[n].id==this.displayList[0].premium[a].id&&(this.displayList[0].premium[a].totalPreminum+=e.dataList[n].totalPreminum,this.displayList[0].premium[this.displayList[0].premium.length-1].totalPreminum+=e.dataList[n].totalPreminum)}for(a=0;a<this.displayList[0].policies.length;a++)a>0&&(this.displayList[0].policies[a].noOfPolicy=this.displayList[0].policies[a].noOfPolicy);for(a=0;a<this.displayList[0].premium.length;a++)a>0&&(this.displayList[0].premium[a].totalPreminum=this.displayList[0].premium[a].totalPreminum)}else this.isHasData=!1}}))),this.cdf.detectChanges()})}generateReportExcel(){this.particularForExcel=[],this.policiesForExcel=[],this.premiumForExcel=[];for(var e=0;e<this.displayList[0].particular.length;e++)this.particularForExcel.push(this.displayList[0].particular[e].channel);for(e=0;e<this.displayList[0].policies.length;e++)this.policiesForExcel.push(this.displayList[0].policies[e].noOfPolicy||0);for(e=0;e<this.displayList[0].premium.length;e++)this.premiumForExcel.push(this.displayList[0].premium[e].totalPreminum||0);let n="",a="";this.createFormGroup.value.fromDate&&(n=this.formatDateDDMMYYY(this.createFormGroup.value.fromDate)),this.createFormGroup.value.toDate&&(a=this.formatDateDDMMYYY(this.createFormGroup.value.toDate)),this.exportService.exportExcel({title:this.title,searchValue:[{fromDate:n},{toDate:a},{agentName:this.agentName},{companyName:this.companyName},{channelName:this.channelName},{regionName:this.regionName},{clusterName:this.clusterName},{branchName:this.branchName}],particularForExcel:this.particularForExcel,policiesForExcel:this.policiesForExcel,premiumForExcel:this.premiumForExcel})}cancelReport(){this.createFormGroup.reset(),this.loadForm(),this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.displayList[0].particular=[],this.displayList[0].policies=[],this.displayList[0].premium=[],this.agentName=null,this.companyName=null,this.channelName=null,this.regionName=null,this.clusterName=null,this.branchName=null,this.agentName=null,this.isData=!1,this.fromMinDate=null,this.fromMaxDate=null,this.cdf.detectChanges()}changeOptions(e,n){return(0,v.mG)(this,void 0,void 0,function*(){"company"==n&&(e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy("","01").toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.channels=a)}))):(this.companyName=null,this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")),this.selectOptions.channels=[...this.selectOptions.channels],this.selectOptions.regions=[...this.selectOptions.regions],this.selectOptions.cluster=[...this.selectOptions.cluster],this.selectOptions.branches=[...this.selectOptions.branches]),"channel"==n&&(this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.companyName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"02").toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.channels=a)}))):(this.companyName=null,this.createFormGroup.value.companyId="",this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"region"==n&&(this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.channelName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"03").toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.regions=a)}))):(this.channelName=null,this.createFormGroup.value.channelId="",this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"cluster"==n&&(this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.regionName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"04").toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.cluster=a)}))):(this.regionName=null,this.createFormGroup.value.regionId="",this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"branch"==n&&(this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue(""),e?(this.clusterName=e.name,yield this.exportService.getOfficeHirearchy(e.id,"05").toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.branches=a)}))):(this.clusterName=null,this.createFormGroup.value.clusterId="",this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"agent"==n&&(this.selectOptions.agents=[],this.createFormGroup.controls.agentId.setValue(""),e?(this.branchName=e.name,yield this.exportService.getAgentOffice(e.id).toPromise().then(a=>(0,v.mG)(this,void 0,void 0,function*(){a&&(this.selectOptions.agents=a)}))):(this.branchName=null,this.createFormGroup.value.branchId="",this.createFormGroup.value.agentId="")),"office"==n&&(e?this.agentName=e.agentName:(this.agentName=null,this.createFormGroup.value.agentId="")),this.getAllReports(),this.cdf.detectChanges()})}loadForm(){this.createFormGroup=new p.cw({fromDate:new p.NI("",[p.kI.required,p.kI.nullValidator]),toDate:new p.NI("",[p.kI.required,p.kI.nullValidator]),agentId:new p.NI(""),companyId:new p.NI(""),channelId:new p.NI(""),regionId:new p.NI(""),clusterId:new p.NI(""),branchId:new p.NI("")})}isControlValid(e){const n=this.createFormGroup.controls[e];return n.valid&&(n.dirty||n.touched)}isControlInvalid(e){const n=this.createFormGroup.controls[e];return n.invalid&&(n.dirty||n.touched)}controlHasError(e,n){const a=this.createFormGroup.controls[n];return a.hasError(e)&&(a.dirty||a.touched)}isControlTouched(e){const n=this.createFormGroup.controls[e];return n.dirty||n.touched}doValid(e){if("FromDate"==e){let i=x(this.createFormGroup.controls.fromDate.value).format("YYYY-MM-DD"),u=x(this.createFormGroup.controls.toDate.value).format("YYYY-MM-DD");if(u){let f=i.split("-"),g=u.split("-"),m=Number(g[0])-Number(f[0]);0!=m&&1!=m&&this.createFormGroup.controls.toDate.setValue(""),0==m&&(f[1]>g[1]&&this.createFormGroup.controls.toDate.setValue(""),f[1]==g[1]&&f[2]>g[2]&&this.createFormGroup.controls.toDate.setValue(""))}if(i){var n=new Date(i);n.setFullYear(n.getFullYear()+1),n.setDate(n.getDate()-1),this.fromMinDate=new Date(i),this.fromMaxDate=n}}if("ToDate"==e){let i=x(this.createFormGroup.controls.fromDate.value).format("YYYY-MM-DD"),u=x(this.createFormGroup.controls.toDate.value).format("YYYY-MM-DD");if(i){let f=i.split("-"),g=u.split("-"),m=Number(g[0])-Number(f[0]);0!=m&&1!=m&&this.createFormGroup.controls.fromDate.setValue(""),0==m&&(f[1]>g[1]&&this.createFormGroup.controls.toDate.setValue(""),f[1]==g[1]&&f[2]>g[2]&&this.createFormGroup.controls.toDate.setValue(""))}if(u){var a=new Date(u);a.setFullYear(a.getFullYear()-1),a.setDate(a.getDate()+1),this.fromMinDate=a,this.fromMaxDate=new Date(u)}}this.cdf.detectChanges()}clearDate(e){this.fromMinDate=null,this.fromMaxDate=null,"FromDate"==e&&this.createFormGroup.controls.fromDate.setValue(""),"ToDate"==e&&this.createFormGroup.controls.toDate.setValue(""),this.isHasData=!1,this.displayList[0].particular=[],this.displayList[0].policies=[],this.displayList[0].premium=[],this.selectOptions.channels=[],this.selectOptions.regions=[],this.selectOptions.cluster=[],this.selectOptions.branches=[],this.selectOptions.agents=[],this.createFormGroup.controls.companyId.setValue(""),this.createFormGroup.controls.channelId.setValue(""),this.createFormGroup.controls.regionId.setValue(""),this.createFormGroup.controls.clusterId.setValue(""),this.createFormGroup.controls.branchId.setValue(""),this.createFormGroup.controls.agentId.setValue("")}formatDateDDMMYYY(e){var n=new Date(e),a=""+(n.getMonth()+1),i=""+n.getDate(),u=n.getFullYear();return a.length<2&&(a="0"+a),i.length<2&&(i="0"+i),[i,a,u].join("/")}mathRoundTo(e,n){const a=Math.pow(10,n);return(Math.round(e*a)/a).toLocaleString()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.sBO),t.Y36(V))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-report-channel-summary-by-bank-branch"]],decls:50,vars:32,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"click"],[1,"flaticon2-magnifier-tool","search-tool"],["type","button",1,"btn","btn-primary","ml-2",2,"min-width","50px",3,"disabled","click"],[1,""],[1,"card-body","px-10","py-3"],["action","#",1,"form",3,"formGroup"],[1,"row",2,"align-items","center"],[1,"col-sm-6","from-date"],[1,"form-group","row"],[1,"col-sm-4","col-form-label"],[1,"col-sm-6","input-date"],["type","text","readonly","","formControlName","fromDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["matSuffix","",3,"for"],["disabled","false"],["picker1",""],["type","button",1,"btn","btn-primary","btn-elevate","mx-2",2,"margin","0 !important",3,"click"],["type","text","readonly","","formControlName","toDate","autocomplete","off",1,"form-control","form-control-sm",3,"min","max","matDatepicker","dateChange"],["picker",""],["class","row","style","align-items: center;",4,"ngIf"],["class","row",4,"ngIf"],["style","color: gray; text-align: center;",4,"ngIf"],["class","col-sm-6",4,"ngIf"],[1,"col-sm-6"],[1,"col-sm-8"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","channelId",1,"ng-custom-select",3,"readonly","items","change"],["placeholder","Please Select","bindLabel","name","bindValue","id","formControlName","companyId",1,"ng-custom-select",3,"items","change"],[2,"width","100%","overflow","hidden","position","relative"],[2,"width","30%","float","left","position","relative"],[4,"ngIf"],[1,"card-label","left-border-image",2,"font-size","1.15rem"],[1,"date-display"],[1,"search-display"],[2,"width","100%","overflow-y","scroll","overflow-x","scroll","max-height","500px"],["border","1"],[4,"ngFor","ngForOf"],[1,"data"],["class","text-right",4,"ngFor","ngForOf"],[1,"text-right"],[2,"color","gray","text-align","center"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6),t.qZA(),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return n.getAllReports()}),t._UZ(9,"span",8),t.qZA(),t.TgZ(10,"button",9),t.NdJ("click",function(){return n.generateReportExcel()}),t.TgZ(11,"span",10),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.qZA(),t.TgZ(14,"button",7),t.NdJ("click",function(){return n.cancelReport()}),t.TgZ(15,"span",10),t._uU(16),t.ALo(17,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"div",11),t.TgZ(19,"form",12),t.TgZ(20,"div",13),t.TgZ(21,"div",14),t.TgZ(22,"div",15),t.TgZ(23,"label",16),t._uU(24),t.ALo(25,"translate"),t.qZA(),t.TgZ(26,"div",17),t.TgZ(27,"input",18),t.NdJ("dateChange",function(){return n.doValid("FromDate")}),t.qZA(),t._UZ(28,"mat-datepicker-toggle",19),t._UZ(29,"mat-datepicker",20,21),t.qZA(),t.TgZ(31,"button",22),t.NdJ("click",function(){return n.clearDate("FromDate")}),t._uU(32),t.ALo(33,"translate"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"div",14),t.TgZ(35,"div",15),t.TgZ(36,"label",16),t._uU(37),t.ALo(38,"translate"),t.qZA(),t.TgZ(39,"div",17),t.TgZ(40,"input",23),t.NdJ("dateChange",function(){return n.doValid("ToDate")}),t.qZA(),t._UZ(41,"mat-datepicker-toggle",19),t._UZ(42,"mat-datepicker",20,24),t.qZA(),t.TgZ(44,"button",22),t.NdJ("click",function(){return n.clearDate("ToDate")}),t._uU(45),t.ALo(46,"translate"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(47,H,9,6,"div",25),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(48,ft,25,12,"div",26),t.YNc(49,gt,2,0,"div",27)),2&e){const a=t.MAs(30),i=t.MAs(43);t.xp6(6),t.Oqu(n.title),t.xp6(4),t.Q6J("disabled",!n.isHasData),t.xp6(2),t.Oqu(t.lcZ(13,20,"FORM.generate")),t.xp6(4),t.Oqu(t.lcZ(17,22,"FORM.btn_cancel")),t.xp6(3),t.Q6J("formGroup",n.createFormGroup),t.xp6(5),t.Oqu(t.lcZ(25,24,"FORM.from_date")),t.xp6(3),t.Q6J("min",n.fromMinDate)("max",n.fromMaxDate)("matDatepicker",a),t.xp6(1),t.Q6J("for",a),t.xp6(4),t.Oqu(t.lcZ(33,26,"FORM.clear")),t.xp6(5),t.Oqu(t.lcZ(38,28,"FORM.to_date")),t.xp6(3),t.Q6J("min",n.fromMinDate)("max",n.fromMaxDate)("matDatepicker",i),t.xp6(1),t.Q6J("for",i),t.xp6(4),t.Oqu(t.lcZ(46,30,"FORM.clear")),t.xp6(2),t.Q6J("ngIf",""!=n.createFormGroup.value.fromDate&&""!=n.createFormGroup.value.toDate),t.xp6(1),t.Q6J("ngIf",n.isHasData),t.xp6(1),t.Q6J("ngIf",!n.isHasData)}},directives:[p._Y,p.JL,p.sg,p.Fj,F.hl,p.JJ,p.u,F.nW,N.R9,F.Mq,C.O5,T.w9,C.sg],pipes:[U.X,C.JJ],styles:[".form-control-sm[_ngcontent-%COMP%]{background-color:#fff;background-clip:padding-box;border:1px solid #e4e6ef;padding:0px .75rem}.mat-datepicker-toggle[_ngcontent-%COMP%]{position:absolute;top:0px;right:8px}table[_ngcontent-%COMP%]{overflow:hidden;width:100%;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{width:100%;overflow:hidden}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{min-width:160px;text-align:center;position:relative;border:1px solid #e3e3e3;border-collapse:collapse}table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;display:block;float:left;text-align:center}.search-display[_ngcontent-%COMP%]{width:40%;float:left}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;overflow:hidden}.search-display[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:33%;display:inline-block;float:left}.date-display[_ngcontent-%COMP%]{width:100%;overflow:hidden}.date-display[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;min-width:135px;float:left;display:block}.right-border-transform[_ngcontent-%COMP%]{width:1px;height:100%;background-color:#e3e3e3;transform:rotate(0);position:absolute;top:0;left:49%}.data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){text-align:left!important}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute;right:0;width:auto;color:#fff;background-color:#005f99;border-color:#005f99;height:35px;padding:0 10px}@media screen and (min-width: 320px) and (max-width: 571px){.from-date[_ngcontent-%COMP%]{position:relative}.from-date[_ngcontent-%COMP%]   .input-date[_ngcontent-%COMP%]{width:85%}.from-date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{top:23px}}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:end;padding:0 5px 0 0}"]}),o})();var yt=s(96592),Ct=s(50282),xt=s(69544),_t=s(63272),Dt=s(42115),B=s(19775),Ft=s(65981),Bt=s(6517),Zt=s(88757),Ot=s(7181);let At=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[C.uU,{provide:B._A,useClass:Bt.t7,deps:[B.Ad]},{provide:B.sG,useValue:Zt.Gs}],imports:[[C.ez,p.u5,T.A0,p.UX,xt.vi,Ct.fA,_t.M,Dt.X,F.FA,B.XK,Ft.c,N.lN,Ot.j,yt.Bz.forChild([{path:"",component:vt}])]]}),o})()}}]);