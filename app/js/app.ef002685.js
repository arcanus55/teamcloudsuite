(function(e){function t(t){for(var r,n,i=t[0],l=t[1],c=t[2],u=0,m=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},o={app:0},s=[];function n(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"28d69a70"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=n(e);var c=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",c.name="ChunkLoadError",c.type=r,c.request=s,a[1](c)}o[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"9b19":function(e,t,a){e.exports=a.p+"img/logo.63a7d78d.svg"},cd49:function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-system-bar",{attrs:{app:""}},[a("v-spacer"),a("v-icon",[e._v("mdi-square")]),a("v-icon",{on:{click:e.toggleTheme}},[e._v("mdi-circle")]),a("v-icon",{on:{click:e.toggleDrawer}},[e._v("mdi-triangle")])],1),a("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-sheet",{staticClass:"pa-4",attrs:{color:"grey lighten-4"}},[a("v-avatar",{staticClass:"mb-4",attrs:{color:"orange",size:"64"},on:{click:e.login}}),a("div",{staticClass:"red--text",on:{click:e.fetchGmailMessages}},[e._v("wolf@emailcloudsuite.com")])],1),a("v-divider"),a("v-list",e._l(e.links,(function(t){var r=t[0],o=t[1];return a("v-list-item",{key:r,attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(r))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(o))])],1)],1)})),1)],1),a("v-main",[a("v-container",{staticClass:"py-8 px-6",attrs:{fluid:""}},[a("v-row",e._l(e.cards,(function(t){return a("v-col",{key:t,attrs:{cols:"6"}},[a("v-card",[[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.aEmailSummaryHeaders,items:e.aEmailSummary,"single-expand":!0,expanded:e.expanded,"item-key":"name","show-expand":""},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[e._v(e._s(t))]),a("v-spacer")],1)]},proxy:!0},{key:"expanded-item",fn:function(t){var r=t.headers,o=t.item;return[a("td",{attrs:{colspan:r.length}},[e._v(" More info about "+e._s(o.name)+" ")])]}}],null,!0)})]],2)],1)})),1)],1)],1)],1)},s=[],n=a("15fd"),i=a.n(n);let l=(e="tacocat")=>e.split("").reverse().join("");r["a"].use(i.a,{apiKey:l("wySB8UJSJTTR2d_k_uN_KWLdDtsYZutUDySazIA"),clientId:l("moc.tnetnocresuelgoog.sppa.2n5jn3qn53b76h5sqc92ae7v02qjpep3-277572845182"),discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],scope:"https://www.googleapis.com/auth/gmail.readonly"});var c={data:()=>({cards:["Email Summary","Email Visualisation"],drawer:!0,links:[["mdi-inbox-arrow-down","Inbox"],["mdi-send","Send"],["mdi-delete","Trash"],["mdi-alert-octagon","Spam"]],aEmailSummaryHeaders:[{value:"From",text:"From",sortable:!0},{value:"DeliveredTo",text:"Recipient"},{value:"Date",text:"Date"},{value:"To",text:"To"},{value:"Subject",text:"Subject"}],aEmailSummary:[{MessageID:"qq",DeliveredTo:"qq",Date:"qq",From:"qq",To:"qq",Subject:"qq"}]}),methods:{login(){this.$gapi.login().then(({currentUser:e,hasGrantedScopes:t})=>{console.log("currentUser, hasGrantedScopes"),console.log({currentUser:e,hasGrantedScopes:t})})},toggleDrawer(){this.drawer=!this.drawer},toggleTheme(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark},fetchGmailMessages(){let e=this,t=this.$gapi.clientProvider.client;var a=t.authInstance.currentUser.get(),r=a.getAuthResponse().access_token;console.log(r);var o=new XMLHttpRequest,s="me";o.open("GET","https://gmail.googleapis.com/gmail/v1/users/"+s+"/messages"),o.setRequestHeader("Authorization","Bearer "+r),o.send(),o.onload=function(){var t=JSON.parse(this.response);for(let a in t.messages)e.fetchMailDetails(t.messages[a].id,s,r)}},fetchMailDetails(e,t,a){let r=this,o=new XMLHttpRequest;o.open("GET","https://gmail.googleapis.com/gmail/v1/users/"+t+"/messages/"+e,!0),o.setRequestHeader("Authorization","Bearer "+a),o.send(),o.onload=function(){let e=JSON.parse(this.response),t=e.payload.headers;console.warn(e),window.qqq=t,r.aEmailSummary.push({MessageID:t.filter(e=>"Message-ID"===e.name)[0].value,DeliveredTo:t.filter(e=>"Delivered-To"===e.name)[0].value,Date:t.filter(e=>"Date"===e.name)[0].value,From:t.filter(e=>"From"===e.name)[0].value,To:t.filter(e=>"To"===e.name)[0].value,Subject:t.filter(e=>"Subject"===e.name)[0].value})}}}},u=c,d=a("2877"),m=a("6544"),p=a.n(m),f=a("7496"),v=a("8212"),h=a("b0af"),g=a("62ad"),y=a("a523"),b=a("8fea"),w=a("ce7e"),x=a("132d"),_=a("8860"),j=a("da13"),k=a("5d23"),S=a("34c3"),C=a("f6c4"),V=a("f774"),D=a("0fd9"),q=a("8dd9"),T=a("2fa4"),E=a("afd9"),M=a("71d9"),O=a("2a7f"),I=Object(d["a"])(u,o,s,!1,null,null,null),L=I.exports;p()(I,{VApp:f["a"],VAvatar:v["a"],VCard:h["a"],VCol:g["a"],VContainer:y["a"],VDataTable:b["a"],VDivider:w["a"],VIcon:x["a"],VList:_["a"],VListItem:j["a"],VListItemContent:k["a"],VListItemIcon:S["a"],VListItemTitle:k["b"],VMain:C["a"],VNavigationDrawer:V["a"],VRow:D["a"],VSheet:q["a"],VSpacer:T["a"],VSystemBar:E["a"],VToolbar:M["a"],VToolbarTitle:O["a"]});var A=a("8c4f"),H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("hello-world")},P=[],R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v(" Welcome to Vuetify ")]),r("p",{staticClass:"subheading font-weight-regular"},[e._v(" For help and collaboration with other Vuetify developers, "),r("br"),e._v("please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[e._v("Discord Community")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" What's next? ")]),r("v-row",{attrs:{justify:"center"}},e._l(e.whatsNext,(function(t,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(" "+e._s(t.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" Important Links ")]),r("v-row",{attrs:{justify:"center"}},e._l(e.importantLinks,(function(t,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(" "+e._s(t.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" Ecosystem ")]),r("v-row",{attrs:{justify:"center"}},e._l(e.ecosystem,(function(t,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(" "+e._s(t.text)+" ")])})),0)],1)],1)],1)},$=[],F=r["a"].extend({name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}}),G=F,J=a("adda"),N=Object(d["a"])(G,R,$,!1,null,null,null),U=N.exports;p()(N,{VCol:g["a"],VContainer:y["a"],VImg:J["a"],VRow:D["a"]});var W=r["a"].extend({name:"Home",components:{HelloWorld:U}}),z=W,B=Object(d["a"])(z,H,P,!1,null,null,null),K=B.exports;r["a"].use(A["a"]);var X=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Q=new A["a"]({mode:"history",base:"",routes:X}),Y=Q,Z=a("2f62");r["a"].use(Z["a"]);var ee=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),te=a("f309");r["a"].use(te["a"]);var ae=new te["a"]({theme:{dark:!0,themes:{dark:{primary:"#DD4326",secondary:"#edba08"},light:{primary:"#DD4326",secondary:"#edba08"}}}});r["a"].config.productionTip=!1,new r["a"]({router:Y,store:ee,vuetify:ae,render:function(e){return e(L)}}).$mount("#app")}});
//# sourceMappingURL=app.ef002685.js.map