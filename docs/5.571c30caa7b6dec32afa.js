(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{MCm6:function(t,e,o){"use strict";o.r(e),o.d(e,"AppointmentReportModule",(function(){return C}));var c=o("ofXK"),n=o("tyNb"),i=o("JIr8"),l=o("EY2u"),r=o("fXoL"),d=o("lJxs"),s=o("yTb8"),b=o("tk/3");let a=(()=>{class t extends s.a{constructor(t){super(),this.httpClient=t,this.apiUrl="api/appointment-reports"}get(){return this.httpClient.get(this.apiUrl).pipe(Object(d.a)(t=>t.data),Object(i.a)(this.handleError))}}return t.\u0275fac=function(e){return new(e||t)(r.Wb(b.b))},t.\u0275prov=r.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function p(t,e,o,c){return new(o||(o=Promise))((function(n,i){function l(t){try{d(c.next(t))}catch(e){i(e)}}function r(t){try{d(c.throw(t))}catch(e){i(e)}}function d(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(l,r)}d((c=c.apply(t,e||[])).next())}))}class u{constructor(){this.Verified=0,this.Scheduled=0,this.Rescheduled=0,this.NotVerified=0,this.Cancelled=0,this.NotQualified=0,this.RepCancelled=0,this.DoctorCancelled=0,this.Confirmed=0,this.Completed=0,this.Interested=0,this.NotInterested=0,this.Producing=0,this.MetricsAmount=0}}let m=(()=>{class t{constructor(){this.model=new u}ngOnInit(){return p(this,void 0,void 0,(function*(){this.model=yield this.calculateMetricsAsync()}))}calculateMetricsAsync(){return p(this,void 0,void 0,(function*(){const t=new u;return new Promise(e=>{var o,c,n,i,l,r,d,s,b,a,p,u,m,h,g,f,C,S,R,A,v,w,M,B,O,P;t.Verified=null!==(c=null===(o=this.input)||void 0===o?void 0:o.filter(t=>"Verified"===t.Status).length)&&void 0!==c?c:0,t.Scheduled=null!==(i=null===(n=this.input)||void 0===n?void 0:n.filter(t=>"Scheduled"===t.Status).length)&&void 0!==i?i:0,t.Rescheduled=null!==(r=null===(l=this.input)||void 0===l?void 0:l.filter(t=>"Rescheduled"===t.Status).length)&&void 0!==r?r:0,t.NotVerified=null!==(s=null===(d=this.input)||void 0===d?void 0:d.filter(t=>"Not Verified"===t.Status).length)&&void 0!==s?s:0,t.Cancelled=null!==(a=null===(b=this.input)||void 0===b?void 0:b.filter(t=>"Cancelled"===t.Status).length)&&void 0!==a?a:0,t.NotQualified=null!==(u=null===(p=this.input)||void 0===p?void 0:p.filter(t=>"Not Qualified"===t.Status).length)&&void 0!==u?u:0,t.RepCancelled=null!==(h=null===(m=this.input)||void 0===m?void 0:m.filter(t=>"Rep Cancelled"===t.Status).length)&&void 0!==h?h:0,t.DoctorCancelled=null!==(f=null===(g=this.input)||void 0===g?void 0:g.filter(t=>"Doctor Cancelled"===t.Status).length)&&void 0!==f?f:0,t.Confirmed=null!==(S=null===(C=this.input)||void 0===C?void 0:C.filter(t=>"Confirmed"===t.Status).length)&&void 0!==S?S:0,t.Completed=null!==(A=null===(R=this.input)||void 0===R?void 0:R.filter(t=>"Completed"===t.Status).length)&&void 0!==A?A:0,t.Interested=null!==(w=null===(v=this.input)||void 0===v?void 0:v.filter(t=>"Interested"===t.Status).length)&&void 0!==w?w:0,t.NotInterested=null!==(B=null===(M=this.input)||void 0===M?void 0:M.filter(t=>"Not Interested"===t.Status).length)&&void 0!==B?B:0,t.Producing=null!==(P=null===(O=this.input)||void 0===O?void 0:O.filter(t=>"Producing"===t.Status).length)&&void 0!==P?P:0;let _=0;Object.values(t).forEach(t=>_+=t),t.MetricsAmount=_,e(t)})}))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Hb({type:t,selectors:[["app-appointment-summary"]],inputs:{input:"input"},decls:101,vars:66,consts:[["cellspacing","0","cellpadding","0",1,"waffle"],["id","tr-metrics"],[1,"metrics-color-1"],[1,"metrics-color-2"],[1,"metrics-color-3"],[1,"metrics-color-5"],[1,"metrics-color-4"],[1,"metrics-color-6"],[1,"metrics-color-7"],[1,"metrics-color-8"],["id","tr-summaries"],["id","tr-percents"]],template:function(t,e){1&t&&(r.Sb(0,"table",0),r.Sb(1,"thead"),r.Sb(2,"tr",1),r.Ob(3,"th",2),r.Sb(4,"th",3),r.Ac(5,"Scheduled"),r.Rb(),r.Sb(6,"th",4),r.Ac(7,"Rescheduled"),r.Rb(),r.Sb(8,"th",5),r.Ac(9,"Verified"),r.Rb(),r.Sb(10,"th",6),r.Ac(11,"Not Verified"),r.Rb(),r.Sb(12,"th",6),r.Ac(13,"Cancelled"),r.Rb(),r.Sb(14,"th",6),r.Ac(15,"Not Qualified"),r.Rb(),r.Sb(16,"th",6),r.Ac(17,"Rep Cancelled"),r.Rb(),r.Sb(18,"th",6),r.Ac(19,"Doctor Cancelled"),r.Rb(),r.Sb(20,"th",3),r.Ac(21,"Confirmed"),r.Rb(),r.Sb(22,"th",5),r.Ac(23,"Completed"),r.Rb(),r.Sb(24,"th",7),r.Ac(25,"Interested"),r.Rb(),r.Sb(26,"th",8),r.Ac(27,"Not Interested"),r.Rb(),r.Sb(28,"th",9),r.Ac(29,"Producing"),r.Rb(),r.Rb(),r.Rb(),r.Sb(30,"tbody"),r.Sb(31,"tr",10),r.Sb(32,"td",2),r.Ac(33),r.Rb(),r.Sb(34,"td",3),r.Ac(35),r.Rb(),r.Sb(36,"td",4),r.Ac(37),r.Rb(),r.Sb(38,"td",5),r.Ac(39),r.Rb(),r.Sb(40,"td",6),r.Ac(41),r.Rb(),r.Sb(42,"td",6),r.Ac(43),r.Rb(),r.Sb(44,"td",6),r.Ac(45),r.Rb(),r.Sb(46,"td",6),r.Ac(47),r.Rb(),r.Sb(48,"td",6),r.Ac(49),r.Rb(),r.Sb(50,"td",3),r.Ac(51),r.Rb(),r.Sb(52,"td",5),r.Ac(53),r.Rb(),r.Sb(54,"td",7),r.Ac(55),r.Rb(),r.Sb(56,"td",8),r.Ac(57),r.Rb(),r.Sb(58,"td",9),r.Ac(59),r.Rb(),r.Rb(),r.Sb(60,"tr",11),r.Ob(61,"td"),r.Sb(62,"td"),r.Ac(63),r.ec(64,"percent"),r.Rb(),r.Sb(65,"td"),r.Ac(66),r.ec(67,"percent"),r.Rb(),r.Sb(68,"td"),r.Ac(69),r.ec(70,"percent"),r.Rb(),r.Sb(71,"td"),r.Ac(72),r.ec(73,"percent"),r.Rb(),r.Sb(74,"td"),r.Ac(75),r.ec(76,"percent"),r.Rb(),r.Sb(77,"td"),r.Ac(78),r.ec(79,"percent"),r.Rb(),r.Sb(80,"td"),r.Ac(81),r.ec(82,"percent"),r.Rb(),r.Sb(83,"td"),r.Ac(84),r.ec(85,"percent"),r.Rb(),r.Sb(86,"td"),r.Ac(87),r.ec(88,"percent"),r.Rb(),r.Sb(89,"td"),r.Ac(90),r.ec(91,"percent"),r.Rb(),r.Sb(92,"td"),r.Ac(93),r.ec(94,"percent"),r.Rb(),r.Sb(95,"td"),r.Ac(96),r.ec(97,"percent"),r.Rb(),r.Sb(98,"td"),r.Ac(99),r.ec(100,"percent"),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&t&&(r.Cb(33),r.Bc(e.model.MetricsAmount),r.Cb(2),r.Bc(e.model.Scheduled),r.Cb(2),r.Bc(e.model.Rescheduled),r.Cb(2),r.Bc(e.model.Verified),r.Cb(2),r.Bc(e.model.NotVerified),r.Cb(2),r.Bc(e.model.Cancelled),r.Cb(2),r.Bc(e.model.NotQualified),r.Cb(2),r.Bc(e.model.RepCancelled),r.Cb(2),r.Bc(e.model.DoctorCancelled),r.Cb(2),r.Bc(e.model.Confirmed),r.Cb(2),r.Bc(e.model.Completed),r.Cb(2),r.Bc(e.model.Interested),r.Cb(2),r.Bc(e.model.NotInterested),r.Cb(2),r.Bc(e.model.Producing),r.Cb(4),r.Bc(r.gc(64,27,e.model.Scheduled/e.model.MetricsAmount,"2.2")),r.Cb(3),r.Bc(r.gc(67,30,e.model.Rescheduled/e.model.MetricsAmount,"2.2")),r.Cb(3),r.Bc(r.gc(70,33,e.model.Verified/e.model.MetricsAmount,"2.2")),r.Cb(3),r.Bc(r.gc(73,36,e.model.NotVerified/e.model.MetricsAmount,"2.2")),r.Cb(3),r.Bc(r.gc(76,39,e.model.Cancelled/e.model.MetricsAmount,"2.2")),r.Cb(3),r.Bc(r.gc(79,42,e.model.NotQualified/e.model.MetricsAmount,"2.2")),r.Cb(3),r.Bc(r.gc(82,45,e.model.RepCancelled/e.model.MetricsAmount,"2.2")),r.Cb(3),r.Bc(r.gc(85,48,e.model.DoctorCancelled/e.model.MetricsAmount,"2.2")),r.Cb(3),r.Bc(r.gc(88,51,e.model.Confirmed/e.model.MetricsAmount,"2.2")),r.Cb(3),r.Bc(r.gc(91,54,e.model.Completed/e.model.MetricsAmount,"2.2")),r.Cb(3),r.Bc(r.gc(94,57,e.model.Interested/e.model.MetricsAmount,"2.2")),r.Cb(3),r.Bc(r.gc(97,60,e.model.NotInterested/e.model.MetricsAmount,"2.2")),r.Cb(3),r.Bc(r.gc(100,63,e.model.Producing/e.model.MetricsAmount,"2.2")))},pipes:[c.p],styles:["@import url(https://docs.google.com/static/spreadsheets2/client/css/261116016-waffle_k_ltr.css);@import url(https://fonts.googleapis.com/css?family=Inconsolata:400,700);@import url(https://www.gstatic.com/og/_/ss/k=og.qtm.14WmFzvDkUg.L.W.O/m=qdid,qcwid/excm=qaaw,qadd,qaid,qein,qhaw,qhbr,qhch,qhga,qhid,qhin,qhpr/d=1/ed=1/ct=zgms/rs=AA2YrTsUdR6phhwi9aJhFbis7FI6IAjmMg);@import url(https://docs.google.com/static/spreadsheets2/client/css/375735656-codemirror_css_ltr.css);.metrics-color-1[_ngcontent-%COMP%]{background-color:#efefef!important}.metrics-color-2[_ngcontent-%COMP%]{background-color:#fff2cc!important}.metrics-color-3[_ngcontent-%COMP%]{background-color:#fce5cd!important}.metrics-color-4[_ngcontent-%COMP%]{background-color:#f4cccc!important}.metrics-color-5[_ngcontent-%COMP%]{background-color:#d9ead3!important}.metrics-color-6[_ngcontent-%COMP%]{background-color:#b6d7a8!important}.metrics-color-7[_ngcontent-%COMP%]{background-color:#ea9999!important}.metrics-color-8[_ngcontent-%COMP%]{background-color:#93c47d!important}.grid-container[_ngcontent-%COMP%]{height:100%;width:100%;overflow:auto}div.scrollable[_ngcontent-%COMP%]{width:calc(100vw - .1fr);overflow-x:visible;overflow-y:visible}th[_ngcontent-%COMP%]{width:129px!important;border-bottom:1px solid transparent;border-right:1px solid transparent;text-align:center;font-family:Arial!important;font-size:10pt!important;vertical-align:middle;white-space:nowrap;direction:ltr;padding:0 3px}tr[_ngcontent-%COMP%]{height:33px!important;background-color:#fff;color:#000!important}td[_ngcontent-%COMP%]{background-color:initial!important;vertical-align:middle!important;text-align:center!important;border-bottom:1px solid transparent;border-right:1px solid transparent;font-family:Arial;font-size:10pt}#tr-percents[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-weight:700}"]}),t})();function h(t,e){if(1&t&&(r.Sb(0,"tr"),r.Sb(1,"td"),r.Ac(2),r.Rb(),r.Sb(3,"td"),r.Ac(4),r.Rb(),r.Sb(5,"td"),r.Ac(6),r.Rb(),r.Sb(7,"td"),r.Ac(8),r.Rb(),r.Sb(9,"td"),r.Ac(10),r.Rb(),r.Sb(11,"td"),r.Ac(12),r.Rb(),r.Sb(13,"td"),r.Ac(14),r.Rb(),r.Sb(15,"td"),r.Ac(16),r.Rb(),r.Sb(17,"td"),r.Ac(18),r.Rb(),r.Sb(19,"td"),r.Ac(20),r.Rb(),r.Sb(21,"td"),r.Ac(22),r.Rb(),r.Sb(23,"td"),r.Ac(24),r.Rb(),r.Sb(25,"td"),r.Ac(26),r.Rb(),r.Sb(27,"td"),r.Ac(28),r.Rb(),r.Sb(29,"td",9),r.Ac(30),r.Rb(),r.Rb()),2&t){const t=e.$implicit,o=r.dc();r.wc("background-color",o.rowColor(t)),r.Cb(2),r.Bc(null==t?null:t.Status),r.Cb(2),r.Bc(null==t?null:t.MonthSet),r.Cb(2),r.Bc(null==t?null:t.Date),r.Cb(2),r.Bc(null==t?null:t.Doctor),r.Cb(2),r.Bc(null==t?null:t.Rep),r.Cb(2),r.Bc(null==t?null:t.City),r.Cb(2),r.Bc(null==t?null:t.State),r.Cb(2),r.Bc(null==t?null:t.Phone),r.Cb(2),r.Bc(null==t?null:t.Lab),r.Cb(2),r.Bc(null==t?null:t.LunchDate),r.Cb(2),r.Bc(null==t?null:t.MonthScheduled),r.Cb(2),r.Bc(null==t?null:t.POC),r.Cb(2),r.Bc(null==t?null:t.Setter),r.Cb(2),r.Bc(null==t?null:t.ConfirmationCallDate),r.Cb(2),r.Bc(null==t?null:t.Notes)}}const g=[{path:"",component:(()=>{class t{constructor(t){this.appointmentReportService=t,this.appointmentReport$=this.appointmentReportService.get().pipe(Object(i.a)(t=>(console.log(t),l.a)))}rowColor(t){switch(t.Status){case"Interested":return"#b6d7a8";case"Confirmed":return"#fff2cc";case"Not Interested":return"#ea9999";case"Rep Cancelled":default:return"white"}}}return t.\u0275fac=function(e){return new(e||t)(r.Nb(a))},t.\u0275cmp=r.Hb({type:t,selectors:[["app-appointment-report"]],decls:41,vars:6,consts:[[1,"scrollable"],["dir","ltr",1,"ritz","grid-container"],[3,"input"],["cellspacing","0","cellpadding","0",1,"waffle"],[2,"height","40px"],["id","th-doctor"],["id","th-note"],["id","td-freezebar"],[3,"background-color",4,"ngFor","ngForOf"],["id","td-note"]],template:function(t,e){1&t&&(r.Sb(0,"div",0),r.Sb(1,"div",1),r.Ob(2,"app-appointment-summary",2),r.ec(3,"async"),r.Sb(4,"table",3),r.Sb(5,"thead"),r.Sb(6,"tr",4),r.Sb(7,"th"),r.Ac(8,"Status"),r.Rb(),r.Sb(9,"th"),r.Ac(10,"Month Set"),r.Rb(),r.Sb(11,"th"),r.Ac(12,"Date"),r.Rb(),r.Sb(13,"th",5),r.Ac(14,"Doctor"),r.Rb(),r.Sb(15,"th"),r.Ac(16,"Rep"),r.Rb(),r.Sb(17,"th"),r.Ac(18,"City"),r.Rb(),r.Sb(19,"th"),r.Ac(20,"State"),r.Rb(),r.Sb(21,"th"),r.Ac(22,"Phone"),r.Rb(),r.Sb(23,"th"),r.Ac(24,"Lab"),r.Rb(),r.Sb(25,"th"),r.Ac(26,"Lunch Date"),r.Rb(),r.Sb(27,"th"),r.Ac(28,"Month Scheduled"),r.Rb(),r.Sb(29,"th"),r.Ac(30,"POC"),r.Rb(),r.Sb(31,"th"),r.Ac(32,"Setter"),r.Rb(),r.Sb(33,"th"),r.Ac(34,"Confirmation Call Date"),r.Rb(),r.Sb(35,"th",6),r.Ac(36,"Notes"),r.Rb(),r.Rb(),r.Rb(),r.Sb(37,"tbody"),r.Ob(38,"tr",7),r.zc(39,h,31,17,"tr",8),r.ec(40,"async"),r.Rb(),r.Rb(),r.Rb(),r.Rb()),2&t&&(r.Cb(2),r.jc("input",r.fc(3,2,e.appointmentReport$)),r.Cb(37),r.jc("ngForOf",r.fc(40,4,e.appointmentReport$)))},directives:[m,c.j],pipes:[c.b],styles:["@import url(https://docs.google.com/static/spreadsheets2/client/css/261116016-waffle_k_ltr.css);@import url(https://fonts.googleapis.com/css?family=Inconsolata:400,700);@import url(https://www.gstatic.com/og/_/ss/k=og.qtm.14WmFzvDkUg.L.W.O/m=qdid,qcwid/excm=qaaw,qadd,qaid,qein,qhaw,qhbr,qhch,qhga,qhid,qhin,qhpr/d=1/ed=1/ct=zgms/rs=AA2YrTsUdR6phhwi9aJhFbis7FI6IAjmMg);@import url(https://docs.google.com/static/spreadsheets2/client/css/375735656-codemirror_css_ltr.css);.grid-container[_ngcontent-%COMP%]{height:100%;width:100%;overflow:auto}div.scrollable[_ngcontent-%COMP%]{width:calc(100vw - .1fr);height:calc(100vh - 238px);overflow-x:visible;overflow-y:visible}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0}th[_ngcontent-%COMP%]{width:135px!important;border-bottom:1px solid transparent;border-right:1px solid transparent;background-color:#b7e1cd!important;text-align:center;color:#f9f9f9!important;font-family:Arial!important;font-size:10pt!important;vertical-align:middle;white-space:nowrap;direction:ltr;padding:0 3px}tr[_ngcontent-%COMP%]{height:33px!important;background-color:#fff;color:#000!important}td[_ngcontent-%COMP%]{background-color:initial!important;vertical-align:middle!important;text-align:center!important}#th-doctor[_ngcontent-%COMP%]{color:#000!important}#td-note[_ngcontent-%COMP%]{white-space:pre-wrap!important;text-align:left!important}#th-note[_ngcontent-%COMP%]{width:500px!important;direction:ltr!important}#td-freezebar[_ngcontent-%COMP%]{height:6px!important}"]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(e){return new(e||t)},imports:[[n.e.forChild(g)],n.e]}),t})(),C=(()=>{class t{}return t.\u0275mod=r.Lb({type:t}),t.\u0275inj=r.Kb({factory:function(e){return new(e||t)},imports:[[c.c,f]]}),t})()}}]);