"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6151],{15346:(Z,u,t)=>{t.d(u,{X:()=>a});var c=t(83668),r=t(59832);let a=(()=>{class i{constructor(l){this._languageService=l}transform(l){if(l){let p=this._languageService.getSelectedLanguage(),d=l.split(".");if(2==d.length)try{return this._languageService.langs[p][d[0]][d[1]]}catch(m){return"Can't Translate Data"}}return l}}return i.\u0275fac=function(l){return new(l||i)(c.Y36(r.K,16))},i.\u0275pipe=c.Yjl({name:"translate",type:i,pure:!1}),i})()},56151:(Z,u,t)=>{t.r(u),t.d(u,{SettingPageModule:()=>v});var c=t(86019),r=t(49133),a=t(71704),i=t(4205),e=t(83668),l=t(59832),p=t(15346);const m=[{path:"",component:(()=>{class n{constructor(g,s,h){this.navCtrl=g,this.langService=s,this.cdf=h,this.languageData="en"}ngOnInit(){this.languageData=this.langService.getSelectedLanguage()}changeLang(){this.langService.setLanguage(this.languageData),this.cdf.detectChanges()}}return n.\u0275fac=function(g){return new(g||n)(e.Y36(a.SH),e.Y36(l.K),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-setting"]],decls:19,vars:10,consts:[[1,"screen-padding","pt-l"],[1,"mb-n"],["size","12"],[1,"card-label","left-border-image"],[3,"ngModel","ngModelChange","ionChange"],[1,"mt-l"],["size","12",2,"display","flex","align-items","center"],["value","mm"],[1,"setting-label"],["value","en"]],template:function(g,s){1&g&&(e.TgZ(0,"div",0),e.TgZ(1,"ion-row",1),e.TgZ(2,"ion-col",2),e.TgZ(3,"h3",3),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"ion-radio-group",4),e.NdJ("ngModelChange",function(P){return s.languageData=P})("ionChange",function(){return s.changeLang()}),e.TgZ(7,"ion-row",5),e.TgZ(8,"ion-col",6),e._UZ(9,"ion-radio",7),e.TgZ(10,"ion-label",8),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"ion-row",5),e.TgZ(14,"ion-col",6),e._UZ(15,"ion-radio",9),e.TgZ(16,"ion-label",8),e._uU(17),e.ALo(18,"translate"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&g&&(e.xp6(4),e.Oqu(e.lcZ(5,4,"FORM.change")),e.xp6(2),e.Q6J("ngModel",s.languageData),e.xp6(5),e.Oqu(e.lcZ(12,6,"FORM.mm")),e.xp6(6),e.Oqu(e.lcZ(18,8,"FORM.en")))},directives:[a.Nd,a.wI,a.se,a.QI,r.JJ,r.On,a.B7,a.U5,a.Q$],pipes:[p.X],styles:[".setting-label[_ngcontent-%COMP%]{display:inline-block;margin-left:10px}"]}),n})()}];let f=(()=>{class n{}return n.\u0275fac=function(g){return new(g||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[i.Bz.forChild(m)],i.Bz]}),n})();var S=t(63699);let v=(()=>{class n{}return n.\u0275fac=function(g){return new(g||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.ez,r.u5,a.Pc,S.j,f]]}),n})()}}]);