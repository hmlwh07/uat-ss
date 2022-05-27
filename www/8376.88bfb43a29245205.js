"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8376,7975],{92118:(A,M,a)=>{a.d(M,{t7:()=>c});var o=a(83668),_=a(44290),d=a(92070);const r=a.n(d)()||d,D=new o.OlP("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function(){return{useUtc:!1}}});function m(n,s){const t=Array(n);for(let e=0;e<n;e++)t[e]=s(e);return t}let c=(()=>{class n extends _._A{constructor(t,e){super(),this._options=e,this.setLocale(t||r.locale())}setLocale(t){super.setLocale(t);let e=r.localeData(t);this._localeData={firstDayOfWeek:e.firstDayOfWeek(),longMonths:e.months(),shortMonths:e.monthsShort(),dates:m(31,h=>this.createDate(2017,0,h+1).format("D")),longDaysOfWeek:e.weekdays(),shortDaysOfWeek:e.weekdaysShort(),narrowDaysOfWeek:e.weekdaysMin()}}getYear(t){return this.clone(t).year()}getMonth(t){return this.clone(t).month()}getDate(t){return this.clone(t).date()}getDayOfWeek(t){return this.clone(t).day()}getMonthNames(t){return"long"==t?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(t){return"long"==t?this._localeData.longDaysOfWeek:"short"==t?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(t){return this.clone(t).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(t){return this.clone(t).daysInMonth()}clone(t){return t.clone().locale(this.locale)}createDate(t,e,h){const Y=this._createMoment({year:t,month:e,date:h}).locale(this.locale);return Y.isValid(),Y}today(){return this._createMoment().locale(this.locale)}parse(t,e){return t&&"string"==typeof t?this._createMoment(t,e,this.locale):t?this._createMoment(t).locale(this.locale):null}format(t,e){return t=this.clone(t),this.isValid(t),t.format(e)}addCalendarYears(t,e){return this.clone(t).add({years:e})}addCalendarMonths(t,e){return this.clone(t).add({months:e})}addCalendarDays(t,e){return this.clone(t).add({days:e})}toIso8601(t){return this.clone(t).format()}deserialize(t){let e;if(t instanceof Date)e=this._createMoment(t).locale(this.locale);else if(this.isDateInstance(t))return this.clone(t);if("string"==typeof t){if(!t)return null;e=this._createMoment(t,r.ISO_8601).locale(this.locale)}return e&&this.isValid(e)?this._createMoment(e).locale(this.locale):super.deserialize(t)}isDateInstance(t){return r.isMoment(t)}isValid(t){return this.clone(t).isValid()}invalid(){return r.invalid()}_createMoment(t,e,h){const{strict:Y,useUtc:g}=this._options||{};return g?r.utc(t,e,h,Y):r(t,e,h,Y)}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(_.Ad,8),o.LFG(D,8))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac}),n})()},47975:(A,M,a)=>{function o(r){try{JSON.parse(r)}catch(D){return!1}return!0}a.d(M,{cU:()=>o,Gs:()=>_,Ny:()=>i});const _={parse:{dateInput:"DD-MM-YYYY"},display:{dateInput:"DD-MM-YYYY",monthYearLabel:"MMMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}},i={parse:{dateInput:"MM-YYYY"},display:{dateInput:"MM-YYYY",monthYearLabel:"MM-YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MM-YYYY"}}},9291:(A,M,a)=>{a.r(M),a.d(M,{CustomerDetailModule:()=>n});var o=a(86019),_=a(49133),d=a(78480),i=a(57730),r=a(55167),D=a(4205),u=a(85993),m=a(57842),c=a(87626),E=a(45598),O=a(68424),l=a(23457),f=a(83668);let n=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=f.oAB({type:s}),s.\u0275inj=f.cJS({imports:[[o.ez,_.u5,u.bz,_.UX,c.vi,E.fA,u.M,r.Fk,m.A0,d.FA,i.c,l.d,D.Bz.forChild([{path:"",component:O.h}])]]}),s})()},23457:(A,M,a)=>{a.d(M,{d:()=>O});var o=a(86019),_=a(49133),d=a(87626),i=a(45598),r=a(57842),D=a(78480),u=a(57730),m=a(55167),c=a(63699),E=a(83668);let O=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=E.oAB({type:l}),l.\u0275inj=E.cJS({imports:[[o.ez,_.u5,_.UX,d.vi,i.fA,r.A0,r.A0,D.FA,m.Fk,u.c,c.j]]}),l})()}}]);