"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9472],{17268:(v,h,e)=>{e.d(h,{k:()=>S});var t=e(83668),d=e(92070),f=e(82997),p=e(28100),_=e(83067),o=e(54753),y=e(85724),r=e(47975),P=e(11766),l=e(6920),D=e(23449),T=e(60940),O=e(35618),I=e(27673),A=e(65937),R=e(67198),M=e(86019);function L(u,E){if(1&u&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",8),t._uU(6),t.ALo(7,"number"),t.qZA(),t.TgZ(8,"td",8),t._uU(9),t.ALo(10,"number"),t.qZA(),t.TgZ(11,"td",8),t._uU(12),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"td",8),t._uU(15),t.ALo(16,"number"),t.qZA(),t.qZA()),2&u){const a=E.$implicit;t.xp6(2),t.Oqu(a.endOfPolicyYear),t.xp6(2),t.Oqu(a.age),t.xp6(2),t.Oqu(t.lcZ(7,6,a.premiumPaid)||"-"),t.xp6(3),t.Oqu(t.lcZ(10,8,a.deathBenefit)),t.xp6(3),t.Oqu(t.lcZ(13,10,a.surrenderValue)||"-"),t.xp6(3),t.Oqu(t.lcZ(16,12,a.maturityBenefit)||"-")}}function C(u,E){if(1&u&&(t.TgZ(0,"tbody"),t.YNc(1,L,17,14,"tr",7),t.qZA()),2&u){const a=t.oxw();t.xp6(1),t.Q6J("ngForOf",a.showDatas)}}function b(u,E){if(1&u&&(t.ynx(0),t._UZ(1,"app-education-life-grip",9),t.BQk()),2&u){const a=t.oxw();t.xp6(1),t.Q6J("parentData",a.showDatas)}}let S=(()=>{class u{constructor(a,i,c,n,s,g,U,Z,F){this.globalFun=a,this.alertService=i,this.prodService=c,this.eduPreService=n,this.eduSurrService=s,this.eduPayment=g,this.cdf=U,this.auth=Z,this.numberPipe=F,this.actionEvent=new t.vpe,this.premimuRate={"9opt":5,"11opt":7,"14opt":10},this.frequency={monthly:1,quarterly:4,semi_annually:6,annually:12},this.lists=[],this.premiumRate=[],this.surrendRate=[],this.showDatas=[]}ngOnInit(){this.parentData=this.getParnet(),this.parentData2=this.getParnet(!0),this.parentData||this.parentData2?this.getRateValue().pipe((0,_.w)(a=>{if(!a[0]||!a[1])throw a;return(0,f.of)({premium:a[0],surrend:a[1]})})).toPromise().then(a=>{a&&(this.premiumRate=a.premium,this.surrendRate=a.surrend,this.createListData())}).catch(a=>{console.log(a)}):this.alertService.activate("This page cann't to show because there is no education life product detail data. Please add education life product detail in rodcut configuration","Warning")}createListData(){this.getcalculateData(),this.showDatas=[];let a="001"==this.plan?1:2;this.lists.forEach((i,c)=>{let n={resourceId:this.resourcesId,endOfPolicyYear:i,age:this.currentAge+c,benefitPlan:this.plan,premiumPaid:this.premimuRateNum>=i?this.calculatePre(this.currentAge+c,i):0,deathBenefit:this.sumInsured*a,surrenderValue:this.calculateSur(i),maturityBenefit:.9*this.calculateSur(i)};this.showDatas.push(n),c+1==this.lists.length&&this.cdf.detectChanges()})}getcalculateData(){let i=this.globalFun.paPolicyValidationResult.value.validationValue;this.premimuRateNum=this.premimuRate[i+"opt"],this.policyTermCode=this.parentData.policy_term,this.sumInsured=this.parentData.sum_insured,this.plan=this.parentData.insured_plan;let c=this.parentData2.date_of_birth;return this.currentAge=Math.ceil(d().diff(c,"years",!0)),this.frequencyValue=this.frequency[this.parentData.payment_frequency],this.lists=Array.from({length:i},(s,g)=>g+1),!0}getParnet(a){if((0,r.cU)(this.product.config)){let i=JSON.parse(this.product.config),n={};return n=("quotation"!=this.prodService.type?i.application||[]:i.quotation||[]).find(a?s=>"life_insured_el"==s.tableName:s=>"el_detail"==s.tableName),n&&this.globalFun.tempFormData[n.tableName+n.id]||null}return null}calculatePre(a,i){let c=15.5,n=this.premiumRate.find(g=>g.age==a);n&&(c=n.rate);let s=c/1e3*this.sumInsured;if(1==i){console.log(this.frequencyValue);let g=this.globalFun.calculateDecimal(s*this.frequencyValue)+1500;this.premiumAmt=this.numberPipe.transform(g)+" MMK / "+this.parentData.payment_frequency,this.globalFun.paPremiumResult.next(this.premiumAmt)}return this.globalFun.calculateDecimal(12*s)*i}calculateSur(a){let i=10,c=this.surrendRate.find(n=>n.year==a);return c?(i=c.rate,i/100*this.sumInsured):0}getRateValue(){return(0,p.D)([this.getPRate(),this.getSurRate()]).pipe((0,o.U)(a=>a))}getPRate(){return this.eduPreService.getMany(this.parentData.insured_plan,this.parentData.policy_term)}getSurRate(){return this.eduSurrService.getMany(this.parentData.policy_term)}nextPage(){this.showDatas.length>0&&this.eduPayment.deleteMany(this.resourcesId).pipe((0,y.z)(a=>{let i={request:this.showDatas,resourceDataDTO:{agentId:this.auth.currentUserValue.id||1,customerId:this.prodService.creatingCustomer.customerId||1,policyNumber:null,premium:(Number(this.premiumAmt.split(" ")[0].split(",").join(""))||0)+"",premiumView:this.premiumAmt,productId:this.product.id,quotationId:this.prodService.referenceID,type:this.prodService.type},resourceId:this.resourcesId};return this.eduPayment.saveMany(i)})).toPromise().then(a=>{a&&(this.globalFun.tempFormData[l.S_]=this.showDatas,this.actionEvent.emit({type:P.V.NEXT}))})}backPage(){this.actionEvent.emit({type:P.V.PREV})}}return u.\u0275fac=function(a){return new(a||u)(t.Y36(D.Q),t.Y36(T.c),t.Y36(O.f),t.Y36(I.H),t.Y36(I.D),t.Y36(A.D),t.Y36(t.sBO),t.Y36(R.e8),t.Y36(M.JJ))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-education-life"]],inputs:{product:"product",editData:"editData",resourcesId:"resourcesId"},outputs:{actionEvent:"actionEvent"},decls:25,vars:2,consts:[[1,"table","table-bordered"],[4,"ngIf"],[1,"mb-5"],[1,"row","mt-3"],[1,"col-sm-6","mx-auto"],[1,"btn","btn-block","btn-secondary",3,"click"],[1,"btn","btn-block","btn-primary",3,"click"],[4,"ngFor","ngForOf"],[2,"text-align","right"],[3,"parentData"]],template:function(a,i){1&a&&(t.TgZ(0,"table",0),t.TgZ(1,"thead"),t.TgZ(2,"tr"),t.TgZ(3,"th"),t._uU(4,"End of Policy Year"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Age"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Premium Paid"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Death/PTD Benefit"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Surrender Value"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Maturity Benefit"),t.qZA(),t.qZA(),t.qZA(),t.YNc(15,C,2,1,"tbody",1),t.qZA(),t._UZ(16,"hr",2),t.YNc(17,b,2,1,"ng-container",1),t.TgZ(18,"div",3),t.TgZ(19,"div",4),t.TgZ(20,"button",5),t.NdJ("click",function(){return i.backPage()}),t._uU(21," Previous "),t.qZA(),t.qZA(),t.TgZ(22,"div",4),t.TgZ(23,"button",6),t.NdJ("click",function(){return i.nextPage()}),t._uU(24," Save & Next "),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(15),t.Q6J("ngIf",i.premiumRate.length>0&&i.surrendRate.length>0),t.xp6(2),t.Q6J("ngIf",i.showDatas.length>0))},styles:[""]}),u})()},27673:(v,h,e)=>{e.d(h,{H:()=>_,D:()=>y});var t=e(18260),d=e(91691),m=e(83668),f=e(44522);const p=`${t.N.apiUrl}/education-premium-rates`;let _=(()=>{class r extends d.i{constructor(l){super(l,p),this.httpClient=l}getMany(l,D){return this.httpClient.get(p+"?benefitPlan="+l+"&policyTerm="+D)}}return r.\u0275fac=function(l){return new(l||r)(m.LFG(f.eN))},r.\u0275prov=m.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const o=`${t.N.apiUrl}/education-surrender-values`;let y=(()=>{class r extends d.i{constructor(l){super(l,o),this.httpClient=l}getMany(l){return this.httpClient.get(o+"?policyTerm="+l)}}return r.\u0275fac=function(l){return new(l||r)(m.LFG(f.eN))},r.\u0275prov=m.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},65937:(v,h,e)=>{e.d(h,{D:()=>_});var t=e(18260),d=e(91691),m=e(83668),f=e(44522);const p=`${t.N.apiUrl}/education/life-benefit`;let _=(()=>{class o extends d.i{constructor(r){super(r,p),this.httpClient=r}deleteMany(r){return this.httpClient.delete(p+"/resource/"+r)}getMany(r){return this.httpClient.get(p+"/resource/"+r)}saveMany(r){return this.httpClient.post(p+"s",r)}}return o.\u0275fac=function(r){return new(r||o)(m.LFG(f.eN))},o.\u0275prov=m.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},11766:(v,h,e)=>{e.d(h,{V:()=>t});var t=(()=>{return(d=t||(t={})).NEXT="next",d.PREV="prev",t;var d})()},6920:(v,h,e)=>{e.d(h,{p:()=>d,Hu:()=>f,T$:()=>p,nm:()=>_,S_:()=>l,Ft:()=>T,rf:()=>A});var t=e(1402);const d=[{id:"addon_1634010770155",type:t.it.STATIC,pageTitle:"AddOn",showLabel:"AddOn",pageType:"form",tableName:"addon",pageIcon:"fa-briefcase"},{id:"coverage_1634010995936",type:t.it.STATIC,pageTitle:"Coverage",showLabel:"Coverage",pageType:"form",tableName:"coverage",pageIcon:"fa-clipboard-check"},{id:"static_1634018514043",type:t.it.STATIC,pageTitle:"Product Detail",showLabel:"Motor Product Detail",pageType:"form",tableName:"static",pageIcon:"fa-briefcase"},{id:"static_1635747288508",type:t.it.STATIC,pageTitle:"Product Detail",showLabel:"Motor Product Detail (Application)",pageType:"form",tableName:"static",pageIcon:"fa-briefcase"},{id:"static_1635218894755",type:t.it.STATIC,pageTitle:"Payment Schedules",showLabel:"Payment Schedules",pageType:"form",tableName:"static",pageIcon:"fa-briefcase"},{id:"static_1635309151504",type:t.it.STATIC,pageTitle:"Education Life Benefit",showLabel:"Education Life Benefit",pageType:"form",tableName:"static",pageIcon:"fa-briefcase"},{id:"static_1641364737069",type:t.it.STATIC,pageTitle:"Product Detail",showLabel:"Fire Product Detail",pageType:"form",tableName:"static",pageIcon:"fa-briefcase"},{id:"static_1643116155828",type:t.it.STATIC,pageTitle:"Risk Detail",showLabel:"Fire Risk Detail",pageType:"form",tableName:"static",pageIcon:"fa-briefcase"},{id:"static_1644896661652",type:t.it.STATIC,pageTitle:"Benefit Illustration",showLabel:"Endowment Benefit Illustration",pageType:"form",tableName:"static",pageIcon:"fa-briefcase"},{id:"static_1648784270432",type:t.it.STATIC,pageTitle:"Optional Coverages",showLabel:"Motor Addons",pageType:"form",tableName:"static",pageIcon:"fa-briefcase"},{id:"static_1648784270356",type:t.it.STATIC,pageTitle:"Tavel Risk",showLabel:"Tavel Risk",pageType:"form",tableName:"static",pageIcon:"fa-briefcase"}],f="static_1634018514043",p="static_1641364737069",_="static_1643116155828",l="static_1635309151504",T="static_1644896661652",A="static_1648784270356"},59472:(v,h,e)=>{e.d(h,{Q:()=>a});var t=e(86019),d=e(49133),m=e(85993),f=e(55167),p=e(45598),_=e(17268),o=e(83668),y=e(11766),r=e(6920),P=e(60940),l=e(23449),D=e(75396);const T=["chart"];let O=(()=>{class i{constructor(n,s){this.alertService=n,this.globalFun=s,this.actionEvent=new o.vpe,this.showDatas=[],this.chartOptions={series:[{name:"Premium Amount",data:[],color:"#005f99"}],chart:{height:450,type:"line",toolbar:{show:!1}},title:{text:"Basic Benefit Illustration",offsetX:0,offsetY:10,floating:!1,style:{fontSize:"1.1rem",fontFamily:"Roboto"}},xaxis:{type:"category",categories:["0","1 year","2 years","3 years","4 years","5 years","6 years","7 years","8 years","9 years","10 years","11 years","12 years","13 years","14 years"],labels:{style:{fontSize:"1rem",fontFamily:"Roboto"}}},yaxis:{min:0,max:5e6,tickAmount:5,labels:{style:{fontSize:"1rem",fontFamily:"Roboto"}}},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},dataLabels:{enabled:!0,textAnchor:"middle",offsetX:-10,offsetY:-5,enabledOnSeries:[0]},markers:{size:[5,0,0]}}}ngOnInit(){if(this.parentData){let n=this.parentData.map(s=>s.premiumPaid&&s.premiumPaid>0?s.premiumPaid:null);n.unshift(null),this.parentData.length>0&&"002"==this.parentData[0].benefitPlan&&(this.chartOptions.title.text="Double Benefit Illustration",this.chartOptions.yaxis.max=1e7,this.chartOptions.series[1]={data:[],name:"Goal"},this.chartOptions.series[2]={data:[],name:"2X Goal"},this.chartOptions.series[1].data=[5e6,5e6,5e6,5e6,5e6,5e6,5e6,5e6,5e6,5e6,5e6,5e6,5e6,5e6,5e6],this.chartOptions.series[2].data=[1e7,1e7,1e7,1e7,1e7,1e7,1e7,1e7,1e7,1e7,1e7,1e7,1e7,1e7,1e7]),this.chartOptions.series[0].data=n}else this.alertService.activate("This page cann't to show because there is no education life product detail data. Please add education life product detail in rodcut configuration","Warning")}getParnet(){return this.globalFun.tempFormData[r.S_]}nextPage(){this.actionEvent.emit({type:y.V.NEXT})}backPage(){this.actionEvent.emit({type:y.V.PREV})}}return i.\u0275fac=function(n){return new(n||i)(o.Y36(P.c),o.Y36(l.Q))},i.\u0275cmp=o.Xpm({type:i,selectors:[["app-education-life-grip"]],viewQuery:function(n,s){if(1&n&&o.Gf(T,5),2&n){let g;o.iGM(g=o.CRH())&&(s.chart=g.first)}},inputs:{product:"product",editData:"editData",resourcesId:"resourcesId",parentData:"parentData"},outputs:{actionEvent:"actionEvent"},decls:1,vars:8,consts:[[3,"series","chart","xaxis","yaxis","title","legend","dataLabels","markers"]],template:function(n,s){1&n&&o._UZ(0,"apx-chart",0),2&n&&o.Q6J("series",s.chartOptions.series)("chart",s.chartOptions.chart)("xaxis",s.chartOptions.xaxis)("yaxis",s.chartOptions.yaxis)("title",s.chartOptions.title)("legend",s.chartOptions.legend)("dataLabels",s.chartOptions.dataLabels)("markers",s.chartOptions.markers)},directives:[D.x],styles:[""]}),i})();var I=e(44290),A=e(78480),R=e(57730),M=e(86031),L=e(57842),C=e(13468),b=e(99765),S=e(87626),u=e(70933),E=e(68039);let a=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[[t.ez,d.u5,p.fA,d.UX,m.bz,f.Fk,m.M,L.A0,C.rP,D.X,S.vi,A.FA,I.XK,R.c,M.lN,b.Ud,u.Q,E.Tx]]}),i})();o.B6R(_.k,[t.O5,t.sg,O],[t.JJ])}}]);