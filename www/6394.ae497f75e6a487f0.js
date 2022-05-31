"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6394],{55410:(J,_,s)=>{s.d(_,{Ys:()=>M,ou:()=>N,p3:()=>G});var i=s(70655),h=s(92340),A=s(38313),t=s(47423),g=(()=>{return(r=g||(g={})).Documents="DOCUMENTS",r.Data="DATA",r.Library="LIBRARY",r.Cache="CACHE",r.External="EXTERNAL",r.ExternalStorage="EXTERNAL_STORAGE",g;var r})();const T=(0,t.fo)("Filesystem",{web:()=>s.e(6364).then(s.bind(s,96364)).then(r=>new r.FilesystemWeb)}),I=(0,t.fo)("BlobWriter");function q(r){const m=new Uint8Array(r);let n="",c=0;for(;!(c>=m.byteLength);)n+=String.fromCharCode(m[c]),c+=1;return window.btoa(n)}function U(r,m,n){if(0===n.size)return Promise.resolve();const c=393216,u=n.slice(0,c);return new window.Response(u).arrayBuffer().then(function(d){return T.appendFile({directory:r,path:m,data:q(d)})}).then(function(){return U(r,m,n.slice(c))})}function b({path:r,directory:m,blob:n,recursive:c}){return T.writeFile({directory:m,path:r,recursive:c,data:""}).then(function({uri:u}){return U(m,r,n).then(function(){return u})})}const P=Object.freeze(function E(r){const{path:m,directory:n,blob:c,recursive:u,on_fallback:a}=r;return"ios"!==t.dV.platform&&"android"!==t.dV.platform?b(r):Promise.all([I.get_config(),T.getUri({path:m,directory:n})]).then(function([e,o]){const{base_url:l,auth_token:p}=e,Z=o.uri.replace("file://","");return Promise.all([fetch(l+Z+(u?"?recursive=true":""),{headers:{authorization:p},method:"put",body:c}),Promise.resolve(o)])}).then(function([d,e]){if(204!==d.status)throw new Error("Bad HTTP status: "+d.status);return e.uri}).catch(function(e){return void 0!==a&&a(e),b(r)})});var f=s(5e3),C=s(40520),w=s(94320),F=s(16164),S=s(43632),R=s(25492),x=s(96115);const O=`${h.N.apiUrl}/attachment-uploader`;let G=(()=>{class r extends A.i{constructor(n){super(n,O),this.httpClient=n}}return r.\u0275fac=function(n){return new(n||r)(f.LFG(C.eN))},r.\u0275prov=f.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const v=`${h.N.apiUrl}/attachment-downloader`,L=`${h.N.apiUrl}/attachment-downloader/tcs`;let M=(()=>{class r extends A.i{constructor(n,c,u,a,d,e){super(n,v),this.httpClient=n,this.file=c,this.loadingService=u,this.toastService=a,this.alertService=d,this.translate=e}getFile(n){return this.httpClient.get(L+n,{responseType:"blob"})}get(n,c){return this.httpClient.get(L+n,{params:c})}mobileTCSDownload(n,c){return(0,i.mG)(this,void 0,void 0,function*(){URL.createObjectURL(c),this.file.checkDir(this.file.externalRootDirectory,"kbzms_downloads").then(a=>{this.createFile(n,c)}).catch(a=>{this.file.createDir(this.file.externalRootDirectory,"kbzms_downloads",!1).then(d=>{this.createFile(n,c)}).catch(d=>(0,i.mG)(this,void 0,void 0,function*(){console.log(d),yield this.loadingService.deactivate();let e=this.translate.transform("ERROR.file_error");this.alertService.activate(e,"Download File")}))})})}downloadTCSFile(n,c){var u=document.createElement("a");u.href=URL.createObjectURL(n),u.download=c,u.click();let a=this.translate.transform("ERROR.download_success");this.alertService.activate(a,"Download File"),u.remove()}getDownload(n,c){this.httpClient.get(v+"/"+n,{responseType:"blob"}).toPromise().then(u=>{u&&(t.dV.isNativePlatform()?this.mobileDownload(c,u):this.downloadFile(u,c))})}downloadFile(n,c){var u=document.createElement("a");u.href=URL.createObjectURL(n),u.download=c,u.click(),u.remove()}mobileDownload(n,c){return(0,i.mG)(this,void 0,void 0,function*(){try{yield T.mkdir({path:"kbzsale_downloads",directory:g.Documents,recursive:!1}),this.createFile(n,c)}catch(u){this.createFile(n,c)}})}createFile(n,c){return(0,i.mG)(this,void 0,void 0,function*(){try{yield P({path:"kbzsale_downloads/"+n,directory:g.Documents,blob:c}),yield this.loadingService.deactivate(),this.alertService.activate('"Download File',"Success Message")}catch(u){yield this.loadingService.deactivate(),this.alertService.activate('"Download Fail',"Error Message")}})}}return r.\u0275fac=function(n){return new(n||r)(f.LFG(C.eN),f.LFG(w.$),f.LFG(F.b),f.LFG(S.T),f.LFG(R.c),f.LFG(x.K))},r.\u0275prov=f.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();const D=`${h.N.apiUrl}/attachment-ref`;let N=(()=>{class r extends A.i{constructor(n){super(n,D),this.httpClient=n}getAttachmentListRef(n,c){return this.httpClient.get(D+"?refDocNo="+n+"&refDocType="+c)}}return r.\u0275fac=function(n){return new(n||r)(f.LFG(C.eN))},r.\u0275prov=f.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},55213:(J,_,s)=>{function i(){const h=new FileReader;return h.__zone_symbol__originalInstance||h}s.d(_,{y:()=>i})},76394:(J,_,s)=>{s.d(_,{P:()=>u});var i=s(93075),h=s(92340),A=s(55213),t=s(5e3),g=s(63272),k=s(78680),B=s(55410),V=s(16164),T=s(25492),I=s(84095),q=s(69808),U=s(64537),b=s(98807);const E=["selectedFile1"],P=["selectedFile2"],f=["selectedFile3"];function C(a,d){1&a&&(t.TgZ(0,"div",5),t.TgZ(1,"div",49),t.TgZ(2,"div",7),t.TgZ(3,"label",8),t._uU(4,"Rule Days"),t.qZA(),t._UZ(5,"input",50),t.qZA(),t.qZA(),t.qZA())}function w(a,d){if(1&a&&t._UZ(0,"img",51),2&a){const e=t.oxw();t.Q6J("src",e.Default_DOWNLOAD_URL+"/"+e.formGroup.value.icon,t.LSH)}}function F(a,d){1&a&&(t.ynx(0),t._UZ(1,"i",52),t.TgZ(2,"label"),t._uU(3,"Icon"),t.qZA(),t.BQk())}function S(a,d){if(1&a&&t._UZ(0,"img",51),2&a){const e=t.oxw();t.Q6J("src",e.Default_DOWNLOAD_URL+"/"+e.formGroup.value.smallIcon,t.LSH)}}function R(a,d){1&a&&(t.ynx(0),t._UZ(1,"i",52),t.TgZ(2,"label"),t._uU(3,"Small Icon"),t.qZA(),t.BQk())}function x(a,d){if(1&a&&t._UZ(0,"img",51),2&a){const e=t.oxw();t.Q6J("src",e.Default_DOWNLOAD_URL+"/"+e.formGroup.value.coverIcon,t.LSH)}}function O(a,d){1&a&&(t.ynx(0),t._UZ(1,"i",52),t.TgZ(2,"label"),t._uU(3,"Cover Icon"),t.qZA(),t.BQk())}let G=(()=>{class a{constructor(e,o,l,p,Z,Y,y){this.fb=e,this.modal=o,this.productService=l,this.fileUpload=p,this.loading=Z,this.alertService=Y,this.cdf=y,this.prodId="",this.prodName="",this.lump=!1,this.annually=!1,this.subscriptions=[],this.oldData={},this.Default_DOWNLOAD_URL=`${h.N.apiUrl}/attachment-downloader`,this.statusCdOption=[{code:"01",value:"Draft"},{code:"02",value:"Active"}]}ngOnInit(){this.loadForm()}loadForm(){this.formGroup=this.fb.group({productName:[this.oldData.name||null,i.kI.compose([i.kI.required,i.kI.nullValidator])],productCode:[this.oldData.code||null,i.kI.compose([i.kI.required,i.kI.nullValidator])],coverName:[this.oldData.coverName||null,i.kI.compose([i.kI.required,i.kI.nullValidator])],type:[this.oldData.type||"GENERAL",i.kI.compose([i.kI.required,i.kI.nullValidator])],stamDuty:[this.oldData.stamDuty||!1,i.kI.compose([i.kI.required,i.kI.nullValidator])],isAllowBackDate:[this.oldData.isAllowBackDate||null,i.kI.compose([i.kI.required,i.kI.nullValidator])],showInList:[this.oldData.showInList||null,i.kI.compose([i.kI.required,i.kI.nullValidator])],allowDays:[this.oldData.allowDays||null],ruleDate:[this.oldData.quotationDay||null,i.kI.compose([i.kI.required,i.kI.nullValidator])],ruleType:[this.oldData.quotationRule||null,i.kI.compose([i.kI.required,i.kI.nullValidator])],policyDay:[this.oldData.policyDay||null,i.kI.compose([i.kI.required,i.kI.nullValidator])],policyRule:[this.oldData.policyRule||null,i.kI.compose([i.kI.required,i.kI.nullValidator])],statusCd:[this.oldData.statusCd||"02",i.kI.compose([i.kI.required,i.kI.nullValidator])],paymentFrequency:[this.oldData.paymentFrequencyType?this.oldData.paymentFrequencyType.split(","):null],icon:[this.oldData.icon?this.oldData.icon:null],smallIcon:[this.oldData.smallIcon?this.oldData.smallIcon:null],coverIcon:[this.oldData.coverIcon?this.oldData.coverIcon:null]})}save(){if(this.formGroup.valid){let e=this.formGroup.value;this.productService.save({name:e.productName,code:e.productCode,coverName:e.coverName,type:e.type,quotationDay:e.ruleDate,quotationRule:e.ruleType,policyDay:e.policyDay,policyRule:e.policyRule,paymentFrequencyType:"",application:!1,quotation:!1,isAllowBackDate:e.isAllowBackDate,showInList:e.showInList,allowDays:e.isAllowDays,stamDuty:e.stamDuty,statusCd:e.statusCd}).toPromise().then(l=>{l&&this.modal.dismiss({data:this.formGroup.value,type:"save"})})}}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}isControlValid(e){const o=this.formGroup.controls[e];return o.valid&&(o.dirty||o.touched)}isControlInvalid(e){const o=this.formGroup.controls[e];return o.invalid&&(o.dirty||o.touched)}controlHasError(e,o){const l=this.formGroup.controls[o];return l.hasError(e)&&(l.dirty||l.touched)}isControlTouched(e){const o=this.formGroup.controls[e];return o.dirty||o.touched}changePayment(e){let l=this.formGroup.value.paymentFrequency||[];if(this[e])l.push(e);else{let p=l.findIndex(Z=>Z==e);l.splice(p,1)}this.formGroup.controls.paymentFrequency.setValue(l)}openFile(e){"cover"==e?this.selectedFileEl3.nativeElement.click():"small"==e?this.selectedFileEl2.nativeElement.click():this.selectedFileEl1.nativeElement.click()}handleUpload(e,o){if(e){const l=e.target.files[0],p=(0,A.y)();p.readAsDataURL(l),p.onload=()=>{if(p.result){let Y={fileStr:p.result.toString().split(",")[1],fileName:l.name,fileType:l.type,fileSize:l.size,contentType:l.type,fileExtension:l.name.split(".").pop()};this.loading.activate(),this.fileUpload.save(Y).toPromise().then(y=>{y&&("cover"==o?this.formGroup.controls.coverIcon.setValue(y):"small"==o?this.formGroup.controls.smallIcon.setValue(y):this.formGroup.controls.icon.setValue(y)),this.cdf.detectChanges(),this.loading.deactivate()}).catch(y=>{this.loading.deactivate()})}}}}deleteEditModal(){this.alertService.activate("Are you sure want to delete?","Warning Message").then(e=>{e&&this.modal.dismiss({type:"delete"})})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(i.qu),t.Y36(g.Kz),t.Y36(k.f),t.Y36(B.p3),t.Y36(V.b),t.Y36(T.c),t.Y36(t.sBO))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-products-modal"]],viewQuery:function(e,o){if(1&e&&(t.Gf(E,5),t.Gf(P,5),t.Gf(f,5)),2&e){let l;t.iGM(l=t.CRH())&&(o.selectedFileEl1=l.first),t.iGM(l=t.CRH())&&(o.selectedFileEl2=l.first),t.iGM(l=t.CRH())&&(o.selectedFileEl3=l.first)}},decls:160,vars:78,consts:[[1,"modal-content"],[1,"modal-header"],["id","example-modal-sizes-title-lg",1,"modal-title","h4","left-border-image"],[1,"overlay","overlay-block","cursor-default","modal-body"],["action","#",1,"form","form-label-right",3,"formGroup"],[1,"row"],[1,"col-12"],[1,"form-group"],[1,"form-label"],["type","text","name","productName","autocomplete","off","formControlName","productName",1,"form-control","form-control-sm",3,"placeholder"],["type","text","name","productCode","autocomplete","off","formControlName","productCode",1,"form-control","form-control-sm",3,"placeholder"],["type","text","name","coverName","placeholder","Cover Name","autocomplete","off","formControlName","coverName",1,"form-control","form-control-sm"],["name","type","placeholder","Product code","autocomplete","off","formControlName","type",1,"form-control","form-control-sm"],["value","GENERAL"],["value","LIFE"],[1,"col-sm-6"],[1,"example-margin","form-label"],["formControlName","isAllowBackDate"],["value","no",1,"example-margin"],["value","yes",1,"example-margin"],[1,"form-group","row"],[1,"col-md-6","col-form-label","text-md-right"],[1,"col-md-6","col-xl-4"],[1,"switch","switch-icon"],["type","checkbox","name","stamDuty","formControlName","stamDuty"],["formControlName","showInList"],["class","row",4,"ngIf"],[1,"col-sm-4"],["type","number","name","ruleDate","placeholder","Dates","autocomplete","off","formControlName","ruleDate",1,"form-control","form-control-sm"],[1,"feedback"],["name","ruleType","formControlName","ruleType",1,"form-control","form-control-sm"],["value",""],["value","DAY"],["value","MONTH"],["type","text","name","ruleDate","autocomplete","off","value","after creation dates","readonly","",1,"form-control","form-control-sm"],["type","number","name","policyDay","placeholder","Dates","autocomplete","off","formControlName","policyDay",1,"form-control","form-control-sm"],["name","policyRule","formControlName","policyRule",1,"form-control","form-control-sm"],["bindLabel","value","bindValue","code","formControlName","statusCd",1,"ng-custom-select",3,"items"],[1,"upload-icon-group"],[1,"upload-icon",3,"click"],["alt","",3,"src",4,"ngIf"],[4,"ngIf"],["type","file",2,"display","none",3,"change"],["selectedFile1",""],["selectedFile2",""],["selectedFile3",""],[1,"modal-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","submit",1,"btn","btn-primary","btn-elevate",3,"disabled","click"],[1,"col-sm-12"],["type","number","name","allowDays","placeholder","Days","autocomplete","off","formControlName","allowDays",1,"form-control","form-control-sm"],["alt","",3,"src"],[1,"flaticon-upload-1","icon-lg"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3),t.qZA(),t.qZA(),t.TgZ(4,"div",3),t.TgZ(5,"form",4),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t.TgZ(8,"div",7),t.TgZ(9,"label",8),t._uU(10),t.ALo(11,"translate"),t.qZA(),t._UZ(12,"input",9),t.ALo(13,"translate"),t.qZA(),t.TgZ(14,"div",7),t.TgZ(15,"label",8),t._uU(16),t.ALo(17,"translate"),t.qZA(),t._UZ(18,"input",10),t.ALo(19,"translate"),t.qZA(),t.TgZ(20,"div",7),t.TgZ(21,"label",8),t._uU(22,"Cover Name"),t.qZA(),t._UZ(23,"input",11),t.qZA(),t.TgZ(24,"div",7),t.TgZ(25,"label",8),t._uU(26,"Product Type"),t.qZA(),t.TgZ(27,"select",12),t.TgZ(28,"option",13),t._uU(29,"General Insurance"),t.qZA(),t.TgZ(30,"option",14),t._uU(31,"Life Insurance"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(32,"div",5),t.TgZ(33,"div",15),t.TgZ(34,"div",7),t.TgZ(35,"label",16),t._uU(36),t.ALo(37,"translate"),t.qZA(),t.TgZ(38,"mat-radio-group",17),t.TgZ(39,"mat-radio-button",18),t._uU(40,"No"),t.qZA(),t.TgZ(41,"mat-radio-button",19),t._uU(42,"Yes"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"div",15),t.TgZ(44,"div",20),t.TgZ(45,"label",21),t._uU(46,"Stamp Duty"),t.qZA(),t.TgZ(47,"div",22),t.TgZ(48,"span",23),t.TgZ(49,"label"),t._UZ(50,"input",24),t._UZ(51,"span"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(52,"div",5),t.TgZ(53,"div",15),t.TgZ(54,"div",7),t.TgZ(55,"label",16),t._uU(56),t.ALo(57,"translate"),t.qZA(),t.TgZ(58,"mat-radio-group",25),t.TgZ(59,"mat-radio-button",18),t._uU(60,"No"),t.qZA(),t.TgZ(61,"mat-radio-button",19),t._uU(62,"Yes"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(63,C,6,0,"div",26),t.TgZ(64,"div",5),t.TgZ(65,"div",27),t.TgZ(66,"div",7),t.TgZ(67,"label",8),t._uU(68),t.ALo(69,"translate"),t.qZA(),t._UZ(70,"input",28),t.TgZ(71,"div",29),t._uU(72,"Enter Rule"),t.TgZ(73,"b"),t._uU(74," Period"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(75,"div",27),t.TgZ(76,"div",7),t.TgZ(77,"label",8),t._uU(78,"Period Type"),t.qZA(),t.TgZ(79,"select",30),t.TgZ(80,"option",31),t._uU(81,"Please Select"),t.qZA(),t.TgZ(82,"option",32),t._uU(83,"Days"),t.qZA(),t.TgZ(84,"option",33),t._uU(85,"Months"),t.qZA(),t.qZA(),t.TgZ(86,"div",29),t._uU(87,"Select Rule "),t.TgZ(88,"b"),t._uU(89,"Period Type"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(90,"div",27),t.TgZ(91,"div",7),t.TgZ(92,"label",8),t._uU(93," \xa0"),t.qZA(),t._UZ(94,"input",34),t.qZA(),t.qZA(),t.qZA(),t.TgZ(95,"div",5),t.TgZ(96,"div",27),t.TgZ(97,"div",7),t.TgZ(98,"label",8),t._uU(99),t.ALo(100,"translate"),t.qZA(),t._UZ(101,"input",35),t.TgZ(102,"div",29),t._uU(103,"Enter Rule"),t.TgZ(104,"b"),t._uU(105," Period"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(106,"div",27),t.TgZ(107,"div",7),t.TgZ(108,"label",8),t._uU(109,"Period Type"),t.qZA(),t.TgZ(110,"select",36),t.TgZ(111,"option",31),t._uU(112,"Please Select"),t.qZA(),t.TgZ(113,"option",32),t._uU(114,"Days"),t.qZA(),t.TgZ(115,"option",33),t._uU(116,"Months"),t.qZA(),t.qZA(),t.TgZ(117,"div",29),t._uU(118,"Select Rule "),t.TgZ(119,"b"),t._uU(120,"Period Type"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(121,"div",27),t.TgZ(122,"div",7),t.TgZ(123,"label",8),t._uU(124," \xa0"),t.qZA(),t._UZ(125,"input",34),t.qZA(),t.qZA(),t.qZA(),t.TgZ(126,"div",5),t.TgZ(127,"div",15),t.TgZ(128,"div",7),t.TgZ(129,"label",8),t._uU(130,"Product Status"),t.qZA(),t._UZ(131,"ng-select",37),t.qZA(),t.qZA(),t.qZA(),t.TgZ(132,"div",5),t.TgZ(133,"div",6),t.TgZ(134,"div",7),t.TgZ(135,"label",8),t._uU(136,"Upload Product Icon"),t.qZA(),t.TgZ(137,"div",38),t.TgZ(138,"div",39),t.NdJ("click",function(){return o.openFile("icon")}),t.YNc(139,w,1,1,"img",40),t.YNc(140,F,4,0,"ng-container",41),t.TgZ(141,"input",42,43),t.NdJ("change",function(p){return o.handleUpload(p,"icon")}),t.qZA(),t.qZA(),t.TgZ(143,"div",39),t.NdJ("click",function(){return o.openFile("small")}),t.YNc(144,S,1,1,"img",40),t.YNc(145,R,4,0,"ng-container",41),t.TgZ(146,"input",42,44),t.NdJ("change",function(p){return o.handleUpload(p,"small")}),t.qZA(),t.qZA(),t.TgZ(148,"div",39),t.NdJ("click",function(){return o.openFile("cover")}),t.YNc(149,x,1,1,"img",40),t.YNc(150,O,4,0,"ng-container",41),t.TgZ(151,"input",42,45),t.NdJ("change",function(p){return o.handleUpload(p,"cover")}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(153,"div",46),t.TgZ(154,"button",47),t.NdJ("click",function(){return o.modal.dismiss()}),t._uU(155),t.ALo(156,"translate"),t.qZA(),t.TgZ(157,"button",48),t.NdJ("click",function(){return o.save()}),t._uU(158),t.ALo(159,"translate"),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.AsE(" ",o.prodId?"Edit":"Create a new product"," ",o.prodName," "),t.xp6(2),t.Q6J("formGroup",o.formGroup),t.xp6(5),t.Oqu(t.lcZ(11,58,"TABLE.Product Name")),t.xp6(2),t.ekj("is-invalid",o.isControlInvalid("productName"))("is-valid",o.isControlValid("productName")),t.s9C("placeholder",t.lcZ(13,60,"TABLE.Product Name")),t.xp6(4),t.Oqu(t.lcZ(17,62,"TABLE.Product Code")),t.xp6(2),t.ekj("is-invalid",o.isControlInvalid("productCode"))("is-valid",o.isControlValid("productCode")),t.s9C("placeholder",t.lcZ(19,64,"TABLE.Product Code")),t.xp6(5),t.ekj("is-invalid",o.isControlInvalid("coverName"))("is-valid",o.isControlValid("coverName")),t.xp6(4),t.ekj("is-invalid",o.isControlInvalid("type"))("is-valid",o.isControlValid("type")),t.xp6(9),t.Oqu(t.lcZ(37,66,"TABLE.Allow Back Date")),t.xp6(20),t.Oqu(t.lcZ(57,68,"TABLE.Show In List")),t.xp6(7),t.Q6J("ngIf","yes"==o.formGroup.value.isAllowBackDate),t.xp6(5),t.Oqu(t.lcZ(69,70,"TABLE.Quotation Auto Lapse Rule")),t.xp6(2),t.ekj("is-invalid",o.isControlInvalid("ruleDate"))("is-valid",o.isControlValid("ruleDate")),t.xp6(9),t.ekj("is-invalid",o.isControlInvalid("ruleType"))("is-valid",o.isControlValid("ruleType")),t.xp6(20),t.Oqu(t.lcZ(100,72,"TABLE.Application Auto Lapse Rule")),t.xp6(2),t.ekj("is-invalid",o.isControlInvalid("policyDay"))("is-valid",o.isControlValid("policyDay")),t.xp6(9),t.ekj("is-invalid",o.isControlInvalid("policyRule"))("is-valid",o.isControlValid("policyRule")),t.xp6(21),t.ekj("is-invalid",o.isControlInvalid("statusCd"))("is-valid",o.isControlValid("statusCd")),t.Q6J("items",o.statusCdOption),t.xp6(8),t.Q6J("ngIf",o.formGroup.value.icon),t.xp6(1),t.Q6J("ngIf",!o.formGroup.value.icon),t.xp6(4),t.Q6J("ngIf",o.formGroup.value.smallIcon),t.xp6(1),t.Q6J("ngIf",!o.formGroup.value.smallIcon),t.xp6(4),t.Q6J("ngIf",o.formGroup.value.coverIcon),t.xp6(1),t.Q6J("ngIf",!o.formGroup.value.coverIcon),t.xp6(5),t.Oqu(t.lcZ(156,74,"FORM.btn_cancel")),t.xp6(2),t.Q6J("disabled",o.formGroup.invalid),t.xp6(1),t.Oqu(t.lcZ(159,76,"FORM.btn_save")))},directives:[i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,i.EJ,i.YN,i.Kr,I.VQ,I.U0,i.Wl,q.O5,i.wV,U.w9],pipes:[b.X],styles:[".upload-icon-group[_ngcontent-%COMP%]{display:flex;gap:10px}.upload-icon[_ngcontent-%COMP%]{display:flex;align-items:center;width:100px;height:100px;border:1px dashed #333;flex-direction:column;justify-content:center;gap:5px;border-radius:10px;overflow:hidden}.upload-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px}"]}),a})();var v=s(34436);const L=[{title:"Small Icon",type:v.Y.FEILD,field:"smallIcon",isImg:!0},{title:"Product Name",type:v.Y.FEILD,field:"name"},{title:"Product Code",type:v.Y.FEILD,field:"code"},{title:"Type",type:v.Y.FEILD,field:"type",isTitle:!0},{title:"Allow Back Date",type:v.Y.FEILD,field:"isAllowBackDate",isAllowBackDate:!0},{title:"Quotation Auto Lapse Rule",type:v.Y.FEILD,field:"quotationDay",isQuotationDay:!0},{title:"Application Auto Lapse Rule",type:v.Y.FEILD,field:"policyDay",isPolicyDay:!0},{title:"Status",type:v.Y.FEILD,field:"statusCd",isProdStatus:!0},{title:"Actions",type:v.Y.ACTION,field:"actions",btn:{edit:!0}}],M=["smallIcon","name","code","type","isAllowBackDate","quotationDay","policyDay","statusCd","actions"];var D=s(93230),N=s(17606),r=s(96592);function m(a,d){if(1&a){const e=t.EpF();t.TgZ(0,"div",9),t.TgZ(1,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().createOrEdit()}),t._UZ(2,"span",11),t.qZA(),t.qZA()}}function n(a,d){if(1&a){const e=t.EpF();t.ynx(0),t.TgZ(1,"app-material-table-view",12),t.NdJ("emitter",function(l){return t.CHM(e),t.oxw().actionBtn(l)}),t.qZA(),t.BQk()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("selectable","page"!=e.type)("data",e.products)("colum",e.ELEMENT_COL)("displayedColumns",e.displayedColumns)}}function c(a,d){if(1&a){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",13),t.TgZ(2,"button",14),t.NdJ("click",function(){return t.CHM(e),t.oxw().closeModal()}),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"button",15),t.NdJ("click",function(){return t.CHM(e),t.oxw().nextProd()}),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.qZA(),t.BQk()}if(2&a){const e=t.oxw();t.xp6(3),t.Oqu(t.lcZ(4,3,"FORM.btn_cancel")),t.xp6(2),t.Q6J("disabled",!e.selected.id),t.xp6(1),t.Oqu(t.lcZ(7,5,"FORM.btn_next"))}}let u=(()=>{class a{constructor(e,o,l,p,Z){this.modalService=e,this.itemService=o,this.router=l,this.cdRef=p,this.menuService=Z,this.isShowList="all",this.type="page",this.products=[],this.ELEMENT_COL=JSON.parse(JSON.stringify(L)),this.displayedColumns=JSON.parse(JSON.stringify(M)),this.unsubscribe=[],this.show=!1,this.prodAccess=N.w}ngOnInit(){"page"!=this.type&&(this.ELEMENT_COL.splice(8,1),this.displayedColumns.splice(8,1)),this.show=!0,this.getProducts()}checkPremission(){this.menuService.dataAccess.subscribe(e=>{e&&(this.prodAccess=e.product_definition,this.prodAccess.edit&&(this.ELEMENT_COL[8].btn.edit=!1))})}ngOnDestroy(){this.unsubscribe.forEach(e=>e.unsubscribe())}editLayout(e){this.itemService.findOne(e.id).toPromise().then(o=>{o&&(this.itemService.createingProd=o,this.itemService.type=e.application?"application":"quotation",this.router.navigateByUrl("/product-form"))})}get selected(){let e;return this.matTable&&(e=this.matTable.selection.selected[0]),e||{id:0}}createOrEdit(e,o){const l=this.modalService.open(G,{size:"xl",backdrop:!1});l.componentInstance.prodId=o,l.componentInstance.oldData=e||{},l.result.then(()=>{},p=>{p&&"save"==p.type&&(this.getProducts(),this.cdRef.detectChanges())})}closeModal(){this.modalService.dismissAll()}nextProd(){this.selected.id&&this.itemService.findOne(this.selected.id).toPromise().then(e=>{e&&this.modalService.dismissAll({data:e,type:"save"})})}getProducts(){this.itemService.getAll(this.isShowList).toPromise().then(e=>{e&&(this.products=e,this.cdRef.detectChanges(),this.matTable.reChangeData())})}viewDetail(e){this.itemService.selectedProd=e,this.itemService.viewType="view",this.router.navigateByUrl("/product/products-config/detail")}getFreq(e){let o="",l=e.split(", ");for(const p of l)"lump"==p?o=o.length>2?o+", Lump Sum":"Lump Sum":"annually"==p&&(o=o.length>2?o+", Semi Annually":"Semi Annually");return o}actionBtn(e){"edit"==e.cmd?this.viewDetail(e.data):"view"==e.cmd&&this.editLayout(e.data)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(g.FF),t.Y36(k.f),t.Y36(r.F0),t.Y36(t.sBO),t.Y36(N.q))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-products"]],viewQuery:function(e,o){if(1&e&&t.Gf(D.I,5),2&e){let l;t.iGM(l=t.CRH())&&(o.matTable=l.first)}},inputs:{isShowList:"isShowList"},decls:11,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"card","card-custom"],[1,"card-header"],[1,"card-title"],[1,"card-label","left-border-image"],["class","card-toolbar",4,"ngIf"],[1,"card-body","customer-card-body"],[4,"ngIf"],[1,"card-toolbar"],["type","button",1,"btn","btn-primary","btn-circle",3,"click"],[1,"flaticon2-plus"],[3,"selectable","data","colum","displayedColumns","emitter"],[1,"card-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["type","button",1,"btn","btn-primary","btn-elevate",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"h3",5),t._uU(6,"List of Products"),t.qZA(),t.qZA(),t.YNc(7,m,3,0,"div",6),t.qZA(),t.TgZ(8,"div",7),t.YNc(9,n,2,4,"ng-container",8),t.qZA(),t.YNc(10,c,8,7,"ng-container",8),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(7),t.Q6J("ngIf","page"==o.type),t.xp6(2),t.Q6J("ngIf",o.show),t.xp6(1),t.Q6J("ngIf","page"!=o.type))},directives:[q.O5,D.I],pipes:[b.X],styles:[""]}),a})()}}]);