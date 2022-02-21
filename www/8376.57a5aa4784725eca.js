"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8376,7975],{92118:(g,i,a)=>{a.d(i,{t7:()=>h});var r=a(83668),s=a(44290),M=a(92070);const l=a.n(M)()||M,c=new r.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function(){return{useUtc:!1}}});function f(n,o){const t=Array(n);for(let e=0;e<n;e++)t[e]=o(e);return t}let h=(()=>{class n extends s._A{constructor(t,e){super(),this._options=e,this.setLocale(t||l.locale())}setLocale(t){super.setLocale(t);let e=l.localeData(t);this._localeData={firstDayOfWeek:e.firstDayOfWeek(),longMonths:e.months(),shortMonths:e.monthsShort(),dates:f(31,_=>this.createDate(2017,0,_+1).format("D")),longDaysOfWeek:e.weekdays(),shortDaysOfWeek:e.weekdaysShort(),narrowDaysOfWeek:e.weekdaysMin()}}getYear(t){return this.clone(t).year()}getMonth(t){return this.clone(t).month()}getDate(t){return this.clone(t).date()}getDayOfWeek(t){return this.clone(t).day()}getMonthNames(t){return"long"==t?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(t){return"long"==t?this._localeData.longDaysOfWeek:"short"==t?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(t){return this.clone(t).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(t){return this.clone(t).daysInMonth()}clone(t){return t.clone().locale(this.locale)}createDate(t,e,_){const d=this._createMoment({year:t,month:e,date:_}).locale(this.locale);return d.isValid(),d}today(){return this._createMoment().locale(this.locale)}parse(t,e){return t&&"string"==typeof t?this._createMoment(t,e,this.locale):t?this._createMoment(t).locale(this.locale):null}format(t,e){return t=this.clone(t),this.isValid(t),t.format(e)}addCalendarYears(t,e){return this.clone(t).add({years:e})}addCalendarMonths(t,e){return this.clone(t).add({months:e})}addCalendarDays(t,e){return this.clone(t).add({days:e})}toIso8601(t){return this.clone(t).format()}deserialize(t){let e;if(t instanceof Date)e=this._createMoment(t).locale(this.locale);else if(this.isDateInstance(t))return this.clone(t);if("string"==typeof t){if(!t)return null;e=this._createMoment(t,l.ISO_8601).locale(this.locale)}return e&&this.isValid(e)?this._createMoment(e).locale(this.locale):super.deserialize(t)}isDateInstance(t){return l.isMoment(t)}isValid(t){return this.clone(t).isValid()}invalid(){return l.invalid()}_createMoment(t,e,_){const{strict:d,useUtc:y}=this._options||{};return y?l.utc(t,e,_,d):l(t,e,_,d)}}return n.\u0275fac=function(t){return new(t||n)(r.LFG(s.Ad,8),r.LFG(c,8))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac}),n})()},47975:(g,i,a)=>{function r(M){try{JSON.parse(M)}catch(D){return!1}return!0}a.d(i,{c:()=>r,G:()=>s});const s={parse:{dateInput:"DD-MM-YYYY"},display:{dateInput:"DD-MM-YYYY",monthYearLabel:"MMMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}}},9291:(g,i,a)=>{a.r(i),a.d(i,{CustomerDetailModule:()=>n});var r=a(86019),s=a(49133),M=a(78480),D=a(57730),l=a(55167),c=a(29018),u=a(85378),f=a(57842),h=a(87626),m=a(45598),E=a(68424),O=a(23457),A=a(83668);let n=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=A.oAB({type:o}),o.\u0275inj=A.cJS({imports:[[r.ez,s.u5,u.bz,s.UX,h.vi,m.fA,u.M,l.Fk,f.A0,M.FA,D.c,O.d,c.Bz.forChild([{path:"",component:E.h}])]]}),o})()}}]);