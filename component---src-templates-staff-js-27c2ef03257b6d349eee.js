(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{149:function(e,n,t){"use strict";t.r(n);t(153);var r=t(0),a=t.n(r),u=t(159),i=t(157),o=t(156),c=t(173),l=t.n(c),s=function(e){var n=e.number,t=e.question,r=e.answer;return a.a.createElement("div",{className:l.a.question_wrapper},a.a.createElement("h2",{className:l.a.question},a.a.createElement("span",null,"Q"+n),t),a.a.createElement("p",null,r))},f=t(152);n.default=function(e){var n=e.pageContext,t=(n.path,n.name),r=n.job,c=n.image,m=n.profile,p=n.question,E=n.answer;return a.a.createElement(o.a,null,a.a.createElement(i.a,{title:"PROFILE"}),a.a.createElement("div",{className:l.a.profile},a.a.createElement("div",{className:l.a.image},a.a.createElement(u.a,{filename:c})),a.a.createElement("div",{className:l.a.info},a.a.createElement("h2",null,t),a.a.createElement("h4",null,r),a.a.createElement("p",null,m))),a.a.createElement(i.a,{title:"INTERVIEW"}),a.a.createElement(s,{number:1,question:p[0],answer:E[0]}),a.a.createElement(s,{number:2,question:p[1],answer:E[1]}),a.a.createElement(s,{number:3,question:p[2],answer:E[2]}),a.a.createElement(f.a,{to:"interview",className:l.a.back},a.a.createElement("div",null,a.a.createElement("h3",null,"スタッフインタビュー一覧に戻る"))))}},153:function(e,n,t){var r=t(25).f,a=Function.prototype,u=/^\s*function ([^ (]*)/;"name"in a||t(18)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(u)[1]}catch(e){return""}}})},158:function(e,n,t){"use strict";t(162)("link",function(e){return function(n){return e(this,"a","href",n)}})},161:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var u=typeof r;if("string"===u||"number"===u)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===u)for(var o in r)t.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},162:function(e,n,t){var r=t(11),a=t(19),u=t(20),i=/"/g,o=function(e,n,t,r){var a=String(u(e)),o="<"+n;return""!==t&&(o+=" "+t+'="'+String(r).replace(i,"&quot;")+'"'),o+">"+a+"</"+n+">"};e.exports=function(e,n){var t={};t[e]=n(o),r(r.P+r.F*a(function(){var n=""[e]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",t)}},163:function(e,n){n.endianness=function(){return"LE"},n.hostname=function(){return"undefined"!=typeof location?location.hostname:""},n.loadavg=function(){return[]},n.uptime=function(){return 0},n.freemem=function(){return Number.MAX_VALUE},n.totalmem=function(){return Number.MAX_VALUE},n.cpus=function(){return[]},n.type=function(){return"Browser"},n.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},n.networkInterfaces=n.getNetworkInterfaces=function(){return{}},n.arch=function(){return"javascript"},n.platform=function(){return"browser"},n.tmpdir=n.tmpDir=function(){return"/tmp"},n.EOL="\n",n.homedir=function(){return"/"}}}]);
//# sourceMappingURL=component---src-templates-staff-js-27c2ef03257b6d349eee.js.map