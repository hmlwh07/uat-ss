"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9472],{17268:(v,h,a)=>{a.d(h,{k:()=>S});var t=a(83668),u=a(92070),f=a(82997),d=a(28100),_=a(83067),s=a(54753),g=a(85724),n=a(47975),y=a(11766),c=a(6920),E=a(23449),T=a(60940),I=a(35618),A=a(27673),O=a(65937),M=a(67198),R=a(86019);function L(r,m){if(1&r&&(t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",8),t._uU(6),t.ALo(7,"number"),t.qZA(),t.TgZ(8,"td",8),t._uU(9),t.ALo(10,"number"),t.qZA(),t.TgZ(11,"td",8),t._uU(12),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"td",8),t._uU(15),t.ALo(16,"number"),t.qZA(),t.qZA()),2&r){const e=m.$implicit;t.xp6(2),t.Oqu(e.endOfPolicyYear),t.xp6(2),t.Oqu(e.age),t.xp6(2),t.Oqu(t.lcZ(7,6,e.premiumPaid)||"-"),t.xp6(3),t.Oqu(t.lcZ(10,8,e.deathBenefit)),t.xp6(3),t.Oqu(t.lcZ(13,10,e.surrenderValue)||"-"),t.xp6(3),t.Oqu(t.lcZ(16,12,e.maturityBenefit)||"-")}}function C(r,m){if(1&r&&(t.TgZ(0,"tbody"),t.YNc(1,L,17,14,"tr",7),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.showDatas)}}function b(r,m){if(1&r&&(t.ynx(0),t._UZ(1,"app-education-life-grip",9),t.BQk()),2&r){const e=t.oxw();t.xp6(1),t.Q6J("parentData",e.showDatas)}}let S=(()=>{class r{constructor(e,i,o,l,P,D,U,Z,F){this.globalFun=e,this.alertService=i,this.prodService=o,this.eduPreService=l,this.eduSurrService=P,this.eduPayment=D,this.cdf=U,this.auth=Z,this.numberPipe=F,this.actionEvent=new t.vpe,this.premimuRate={"9opt":5,"11opt":7,"14opt":10},this.frequency={monthly:1,quarterly:4,semi_annually:6,annually:12},this.lists=[],this.premiumRate=[],this.surrendRate=[],this.showDatas=[]}ngOnInit(){this.parentData=this.getParnet(),this.parentData2=this.getParnet(!0),this.parentData||this.parentData2?this.getRateValue().pipe((0,_.w)(e=>{if(!e[0]||!e[1])throw e;return(0,f.of)({premium:e[0],surrend:e[1]})})).toPromise().then(e=>{e&&(this.premiumRate=e.premium,this.surrendRate=e.surrend,this.createListData())}).catch(e=>{console.log(e)}):this.alertService.activate("This page cann't to show because there is no education life product detail data. Please add education life product detail in rodcut configuration","Warning")}createListData(){this.getcalculateData(),this.showDatas=[];let e="001"==this.plan?1:2;this.lists.forEach((i,o)=>{let l={resourceId:this.resourcesId,endOfPolicyYear:i,age:this.currentAge+o,benefitPlan:this.plan,premiumPaid:this.premimuRateNum>=i?this.calculatePre(this.currentAge+o,i):0,deathBenefit:this.sumInsured*e,surrenderValue:this.calculateSur(i),maturityBenefit:.9*this.calculateSur(i)};this.showDatas.push(l),o+1==this.lists.length&&this.cdf.detectChanges()})}getcalculateData(){let i=this.globalFun.paPolicyValidationResult.value.validationValue;this.premimuRateNum=this.premimuRate[i+"opt"],this.policyTermCode=this.parentData.policy_term,this.sumInsured=this.parentData.sum_insured,this.plan=this.parentData.insured_plan;let o=this.parentData2.date_of_birth;return this.currentAge=Math.ceil(u().diff(o,"years",!0)),this.frequencyValue=this.frequency[this.parentData.payment_frequency],this.lists=Array.from({length:i},(P,D)=>D+1),!0}getParnet(e){if((0,n.cU)(this.product.config)){let i=JSON.parse(this.product.config),l={};return l=("quotation"!=this.prodService.type?i.application||[]:i.quotation||[]).find(e?P=>"life_insured_el"==P.tableName:P=>"el_detail"==P.tableName),l&&this.globalFun.tempFormData[l.tableName+l.id]||null}return null}calculatePre(e,i){let o=15.5,l=this.premiumRate.find(D=>D.age==e);l&&(o=l.rate);let P=o/1e3*this.sumInsured;if(1==i){console.log(this.frequencyValue);let D=this.globalFun.calculateDecimal(P*this.frequencyValue)+1500;this.premiumAmt=this.numberPipe.transform(D)+" MMK / "+this.parentData.payment_frequency,this.globalFun.paPremiumResult.next(this.premiumAmt)}return this.globalFun.calculateDecimal(12*P)*i}calculateSur(e){let i=10,o=this.surrendRate.find(l=>l.year==e);return o?(i=o.rate,i/100*this.sumInsured):0}getRateValue(){return(0,d.D)([this.getPRate(),this.getSurRate()]).pipe((0,s.U)(e=>e))}getPRate(){return this.eduPreService.getMany(this.parentData.insured_plan,this.parentData.policy_term)}getSurRate(){return this.eduSurrService.getMany(this.parentData.policy_term)}nextPage(){this.showDatas.length>0&&this.eduPayment.deleteMany(this.resourcesId).pipe((0,g.z)(e=>{let i={request:this.showDatas,resourceDataDTO:{agentId:this.auth.currentUserValue.id||1,customerId:this.prodService.creatingCustomer.customerId||1,policyNumber:null,premium:(Number(this.premiumAmt.split(" ")[0].split(",").join(""))||0)+"",premiumView:this.premiumAmt,productId:this.product.id,quotationId:this.prodService.referenceID,type:this.prodService.type},resourceId:this.resourcesId};return this.eduPayment.saveMany(i)})).toPromise().then(e=>{e&&(this.globalFun.tempFormData[c.S_]=this.showDatas,this.actionEvent.emit({type:y.V.NEXT}))})}backPage(){this.actionEvent.emit({type:y.V.PREV})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(E.Q),t.Y36(T.c),t.Y36(I.f),t.Y36(A.H),t.Y36(A.D),t.Y36(O.D),t.Y36(t.sBO),t.Y36(M.e8),t.Y36(R.JJ))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-education-life"]],inputs:{product:"product",editData:"editData",resourcesId:"resourcesId"},outputs:{actionEvent:"actionEvent"},decls:25,vars:2,consts:[[1,"table","table-bordered"],[4,"ngIf"],[1,"mb-5"],[1,"row","mt-3"],[1,"col-sm-6","mx-auto"],[1,"btn","btn-block","btn-secondary",3,"click"],[1,"btn","btn-block","btn-primary",3,"click"],[4,"ngFor","ngForOf"],[2,"text-align","right"],[3,"parentData"]],template:function(e,i){1&e&&(t.TgZ(0,"table",0),t.TgZ(1,"thead"),t.TgZ(2,"tr"),t.TgZ(3,"th"),t._uU(4,"End of Policy Year"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Age"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Premium Paid"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Death/PTD Benefit"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Surrender Value"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Maturity Benefit"),t.qZA(),t.qZA(),t.qZA(),t.YNc(15,C,2,1,"tbody",1),t.qZA(),t._UZ(16,"hr",2),t.YNc(17,b,2,1,"ng-container",1),t.TgZ(18,"div",3),t.TgZ(19,"div",4),t.TgZ(20,"button",5),t.NdJ("click",function(){return i.backPage()}),t._uU(21," Previous "),t.qZA(),t.qZA(),t.TgZ(22,"div",4),t.TgZ(23,"button",6),t.NdJ("click",function(){return i.nextPage()}),t._uU(24," Save & Next "),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(15),t.Q6J("ngIf",i.premiumRate.length>0&&i.surrendRate.length>0),t.xp6(2),t.Q6J("ngIf",i.showDatas.length>0))},styles:[""]}),r})()},27673:(v,h,a)=>{a.d(h,{H:()=>_,D:()=>g});var t=a(18260),u=a(91691),p=a(83668),f=a(44522);const d=`${t.N.apiUrl}/education-premium-rates`;let _=(()=>{class n extends u.i{constructor(c){super(c,d),this.httpClient=c}getMany(c,E){return this.httpClient.get(d+"?benefitPlan="+c+"&policyTerm="+E)}}return n.\u0275fac=function(c){return new(c||n)(p.LFG(f.eN))},n.\u0275prov=p.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const s=`${t.N.apiUrl}/education-surrender-values`;let g=(()=>{class n extends u.i{constructor(c){super(c,s),this.httpClient=c}getMany(c){return this.httpClient.get(s+"?policyTerm="+c)}}return n.\u0275fac=function(c){return new(c||n)(p.LFG(f.eN))},n.\u0275prov=p.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},65937:(v,h,a)=>{a.d(h,{D:()=>_});var t=a(18260),u=a(91691),p=a(83668),f=a(44522);const d=`${t.N.apiUrl}/education/life-benefit`;let _=(()=>{class s extends u.i{constructor(n){super(n,d),this.httpClient=n}deleteMany(n){return this.httpClient.delete(d+"/resource/"+n)}getMany(n){return this.httpClient.get(d+"/resource/"+n)}saveMany(n){return this.httpClient.post(d+"s",n)}}return s.\u0275fac=function(n){return new(n||s)(p.LFG(f.eN))},s.\u0275prov=p.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},11766:(v,h,a)=>{a.d(h,{V:()=>t});var t=(()=>{return(u=t||(t={})).NEXT="next",u.PREV="prev",t;var u})()},6920:(v,h,a)=>{a.d(h,{p:()=>u,Hu:()=>f,T$:()=>d,nm:()=>_,S_:()=>c,Ft:()=>T});var t=a(1402);const u=[{id:"addon_1634010770155",type:t.it.STATIC,pageTitle:"AddOn",showLabel:"AddOn",pageType:"form",tableName:"addon",pageIcon:"fa-briefcase"},{id:"coverage_1634010995936",type:t.it.STATIC,pageTitle:"Coverage",showLabel:"Coverage",pageType:"form",tableName:"coverage",pageIcon:"fa-clipboard-check"},{id:"static_1634018514043",type:t.it.STATIC,pageTitle:"Product Detail",showLabel:"Motor Product Detail",pageType:"form",tableName:"static",pageIcon:"fa-briefcase"},{id:"static_1635747288508",type:t.it.STATIC,pageTitle:"Product Detail",showLabel:"Motor Product Detail (Application)",pageType:"form",tableName:"static",pageIcon:"fa-briefcase"},{id:"static_1635218894755",type:t.it.STATIC,pageTitle:"Payment Schedules",showLabel:"Payment Schedules",pageType:"form",tableName:"static",pageIcon:"fa-briefcase"},{id:"static_1635309151504",type:t.it.STATIC,pageTitle:"Education Life Benefit",showLabel:"Education Life Benefit",pageType:"form",tableName:"static",pageIcon:"fa-briefcase"},{id:"static_1641364737069",type:t.it.STATIC,pageTitle:"Product Detail",showLabel:"Fire Product Detail",pageType:"form",tableName:"static",pageIcon:"fa-briefcase"},{id:"static_1643116155828",type:t.it.STATIC,pageTitle:"Risk Detail",showLabel:"Fire Risk Detail",pageType:"form",tableName:"static",pageIcon:"fa-briefcase"},{id:"static_1644896661652",type:t.it.STATIC,pageTitle:"Benefit Illustration",showLabel:"Endowment Benefit Illustration",pageType:"form",tableName:"static",pageIcon:"fa-briefcase"}],f="static_1634018514043",d="static_1641364737069",_="static_1643116155828",c="static_1635309151504",T="static_1644896661652"},59472:(v,h,a)=>{a.d(h,{Q:()=>S});var t=a(86019),u=a(49133),p=a(85993),f=a(55167),d=a(45598),_=a(17268),s=a(83668),g=a(11766),n=a(6920),y=a(60940),c=a(23449),E=a(75396);const T=["chart"];let I=(()=>{class r{constructor(e,i){this.alertService=e,this.globalFun=i,this.actionEvent=new s.vpe,this.showDatas=[],this.chartOptions={series:[{name:"Premium Amount",data:[],color:"#005f99"}],chart:{height:450,type:"line",toolbar:{show:!1}},title:{text:"Basic Benefit Illustration",offsetX:0,offsetY:10,floating:!1,style:{fontSize:"1.1rem",fontFamily:"Roboto"}},xaxis:{type:"category",categories:["0","1 year","2 years","3 years","4 years","5 years","6 years","7 years","8 years","9 years","10 years","11 years","12 years","13 years","14 years"],labels:{style:{fontSize:"1rem",fontFamily:"Roboto"}}},yaxis:{min:0,max:5e6,tickAmount:5,labels:{style:{fontSize:"1rem",fontFamily:"Roboto"}}},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},dataLabels:{enabled:!0,textAnchor:"middle",offsetX:-10,offsetY:-5,enabledOnSeries:[0]},markers:{size:[5,0,0]}}}ngOnInit(){if(this.parentData){let e=this.parentData.map(i=>i.premiumPaid&&i.premiumPaid>0?i.premiumPaid:null);e.unshift(null),this.parentData.length>0&&"002"==this.parentData[0].benefitPlan&&(this.chartOptions.title.text="Double Benefit Illustration",this.chartOptions.yaxis.max=1e7,this.chartOptions.series[1]={data:[],name:"Goal"},this.chartOptions.series[2]={data:[],name:"2X Goal"},this.chartOptions.series[1].data=[5e6,5e6,5e6,5e6,5e6,5e6,5e6,5e6,5e6,5e6,5e6,5e6,5e6,5e6,5e6],this.chartOptions.series[2].data=[1e7,1e7,1e7,1e7,1e7,1e7,1e7,1e7,1e7,1e7,1e7,1e7,1e7,1e7,1e7]),this.chartOptions.series[0].data=e}else this.alertService.activate("This page cann't to show because there is no education life product detail data. Please add education life product detail in rodcut configuration","Warning")}getParnet(){return this.globalFun.tempFormData[n.S_]}nextPage(){this.actionEvent.emit({type:g.V.NEXT})}backPage(){this.actionEvent.emit({type:g.V.PREV})}}return r.\u0275fac=function(e){return new(e||r)(s.Y36(y.c),s.Y36(c.Q))},r.\u0275cmp=s.Xpm({type:r,selectors:[["app-education-life-grip"]],viewQuery:function(e,i){if(1&e&&s.Gf(T,5),2&e){let o;s.iGM(o=s.CRH())&&(i.chart=o.first)}},inputs:{product:"product",editData:"editData",resourcesId:"resourcesId",parentData:"parentData"},outputs:{actionEvent:"actionEvent"},decls:1,vars:8,consts:[[3,"series","chart","xaxis","yaxis","title","legend","dataLabels","markers"]],template:function(e,i){1&e&&s._UZ(0,"apx-chart",0),2&e&&s.Q6J("series",i.chartOptions.series)("chart",i.chartOptions.chart)("xaxis",i.chartOptions.xaxis)("yaxis",i.chartOptions.yaxis)("title",i.chartOptions.title)("legend",i.chartOptions.legend)("dataLabels",i.chartOptions.dataLabels)("markers",i.chartOptions.markers)},directives:[E.x],styles:[""]}),r})();var A=a(44290),O=a(78480),M=a(57730),R=a(86031),L=a(57842),C=a(13468),b=a(99765);let S=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({imports:[[t.ez,u.u5,d.fA,u.UX,p.bz,f.Fk,p.M,L.A0,C.rP,E.X,O.FA,A.XK,M.c,R.lN,b.Ud]]}),r})();s.B6R(_.k,[t.O5,t.sg,I],[t.JJ])}}]);