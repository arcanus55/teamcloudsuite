(function(t){function e(e){for(var s,i,c=e[0],l=e[1],o=e[2],u=0,h=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,c=1;c<a.length;c++){var l=a[c];0!==r[l]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";a("85ec")},"1c92":function(t,e,a){"use strict";var s=a("ecde"),r=a("ae4e"),n=a("2877"),i=a("6544"),c=a.n(i),l=a("b0af"),o=a("62ad"),d=a("0fd9"),u=Object(n["a"])(r["default"],s["a"],s["b"],!1,null,null,null);e["default"]=u.exports,c()(u,{VCard:l["a"],VCol:o["a"],VRow:d["a"]})},4162:function(t,e,a){"use strict";a("f6e4")},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id="4678"},"49e6":function(t,e,a){},"58d2":function(t,e,a){"use strict";a("dfd6")},"85ec":function(t,e,a){},a52d:function(t,e,a){t.exports=a.p+"img/btn_google_signin_dark.56f00e35.png"},ae4e:function(t,e,a){"use strict";var s=a("ee3a"),r=a.n(s);e["default"]=r.a},cd49:function(t,e,a){"use strict";a.r(e);var s,r,n,i,c=a("2b0e"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-system-bar",{attrs:{app:""}},[a("v-spacer"),this.$vuetify.theme.dark?a("v-icon",{on:{click:t.toggleTheme}},[t._v("mdi-brightness-4")]):t._e(),this.$vuetify.theme.dark?t._e():a("v-icon",{on:{click:t.toggleTheme}},[t._v("mdi-brightness-5")]),a("v-icon",{on:{click:t.toggleDrawer}},[t._v("mdi-arrow-left-right-bold")])],1),a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-sheet",{staticClass:"pa-4",attrs:{color:"primary"}},[a("v-card-title",{staticClass:"lgo-text text-center justify-center font-weight-light",on:{click:t.goHome}},[t._v("Email "),a("span",{staticClass:"font-weight-bold px-1"},[t._v(" Reply ")]),t._v(" Time")])],1),a("v-divider"),a("v-list",[a("v-list-item",{attrs:{disabled:"FREE"!==t.stateApp.current},on:{click:function(e){return t.doActionClick("premiumupgrade")}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-hand-pointing-up")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Premium Upgrade")])],1)],1),t.isSignedIn?a("v-list-item",{on:{click:function(e){return t.doActionClick("signout")}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-logout")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Sign Out")])],1)],1):t._e()],1)],1),a("v-main",[a(t.activePage,{tag:"component",attrs:{"is-signed-in":t.isSignedIn},on:{"ev-signin":function(e){return t.doActionClick("signin")},"premium-upgrade-action":t.doActionClick}}),t.isSignedIn?a("v-container",{staticClass:"py-8 px-6",attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("date-range",{attrs:{stateRange:t.stateRange},on:{"state-range-set-current":t.doActionClick}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-title",{staticClass:"text-center justify-left"},[t._v("Email Summary")]),[a("v-data-table",{staticClass:"elevation-1 overflow-y-auto",attrs:{dense:"",headers:t.aMsgsSummaryHeaders,items:t.aMsgsSummary,"single-expand":t.tablSingleExpand,expanded:t.tablExpanded,"item-key":"id","show-expand":"","max-height":"calc(90vh - 520px)"},on:{"update:expanded":function(e){t.tablExpanded=e}},scopedSlots:t._u([{key:"expanded-item",fn:function(e){var s=e.headers,r=e.item;return[a("td",{attrs:{colspan:s.length}},[t._v(" "+t._s(r.MessageID)+" ")])]}}],null,!1,846316532)})]],2)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-title",{staticClass:"text-center justify-left"},[t._v("Email Visualizations")]),a("v-tabs",{attrs:{"background-color":"transparent",grow:""},model:{value:t.tabState,callback:function(e){t.tabState=e},expression:"tabState"}},t._l(t.tabItems,(function(e){return a("v-tab",{key:e,on:{click:function(a){return t.tabContent(e)}}},[t._v(" "+t._s(e)+" ")])})),1),a("v-tabs-items",{model:{value:t.tabState,callback:function(e){t.tabState=e},expression:"tabState"}},t._l(t.tabItems,(function(e){return a("v-tab-item",{key:e},[a("v-card",{attrs:{flat:""}},[a("v-card-text"),a("v-row",[a("v-col",{attrs:{cols:"6"}},["Daily Breakdown"==t.tabCurrent?a("daily-breakdown-bar",{attrs:{chartdata:t.datacollection}}):t._e()],1),a("v-col",{attrs:{cols:"6"}},["Daily Breakdown"==t.tabCurrent?a("hourly-breakdown-heatmap",{attrs:{chartdata:t.datacollection}}):t._e()],1)],1)],1)],1)})),1)],1)],1)],1)],1):t._e()],1)],1)},o=[],d=a("15fd"),u=a.n(d),h=a("1fca"),v=a("bc3a"),m=a.n(v),f=a("2106"),g=a.n(f),p={extends:h["a"],props:["chartdata","options"],mounted(){this.renderChart(this.chartdata,this.options)}},b=p,j=a("2877"),y=Object(j["a"])(b,s,r,!1,null,null,null),C=y.exports,w={extends:h["b"],props:["chartdata","options"],mounted(){this.renderChart(this.chartdata,this.options)}},k=w,_=Object(j["a"])(k,n,i,!1,null,null,null),x=_.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isSignedIn?t._e():s("v-container",{staticClass:"pa-0",attrs:{fluid:"","fill-height":""}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"80%"}},[s("br"),s("h2",{staticClass:"text-h2 text-center mb-5"},[t._v(" Try Team Cloud Suite for Free! ")]),s("p",{staticClass:"lgn-cta__sub text-center"},[t._v(" Free account includes nearly all premium features. No credit card required. ")]),s("p",{staticClass:"lgn-cta__sub text-center"},[t._v(" Start your Free account now. After that, enjoy Team Cloud Suite free (forever!). ")]),s("br")])],1)],1),s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"text-center"},[s("div",{staticClass:"my-2"},[s("button",{staticClass:"btn-signin",on:{click:this.signin}},[s("img",{attrs:{src:a("a52d")}})])])])])],1)],1)},z=[],V={props:["isSignedIn"],methods:{signin:function(){this.$emit("ev-signin")}}},S=V,P=(a("d777"),a("6544")),L=a.n(P),A=a("b0af"),R=a("62ad"),T=a("a523"),F=a("0fd9"),E=Object(j["a"])(S,M,z,!1,null,"68cf8b98",null),D=E.exports;L()(E,{VCard:A["a"],VCol:R["a"],VContainer:T["a"],VRow:F["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isSignedIn?t._e():a("v-progress-linear",{attrs:{indeterminate:"",color:"deep-orange"}})],1)},B=[],U={props:["isSignedIn"]},$=U,O=a("8e36"),H=Object(j["a"])($,I,B,!1,null,null,null),Y=H.exports;L()(H,{VProgressLinear:O["a"]});var W=a("1c92"),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-overlay",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"96%",color:"tertiary"}},[a("br"),a("h2",{staticClass:"text-h2 text-center mb-5"},[t._v(" Let's make you a Premium user! ")]),a("v-spacer"),a("v-btn",{attrs:{color:"secondary",dark:"",fab:"",small:"",top:"",right:"",absolute:""},on:{click:function(e){return t.doPremiumUpgradeAction("premium-upgrade-close")}}},[a("v-icon",[t._v("mdi-close")])],1),a("p",{staticClass:"text-h6 font-weight-light text-center mb-5"},[t._v(" Start enjoying the benefits of a Premium user now for just $"+t._s(t.premPlan[t.premPlan.current][0])+"/month billed "+t._s(t.premPlan.current.toLowerCase())+". You can cancel anytime. ")]),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"ma-1",attrs:{cols:"6"}},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({staticStyle:{width:"100%"},attrs:{color:"Yearly"===t.premPlan.current?"primary":"white",outlined:"Yearly"!==t.premPlan.current,rounded:"","x-large":""},on:{click:t.togglePlan}},"v-btn",r,!1),s),[t._v("$11 a Month"),a("br"),t._v(" Billed Yearly")])]}}])},[a("span",[t._v("Save 20%")])])],1),a("v-col",{staticClass:"ma-1",attrs:{cols:"6"}},[a("v-btn",{staticStyle:{width:"100%"},attrs:{color:"Monthly"===t.premPlan.current?"primary":"white",outlined:"Monthly"!==t.premPlan.current,rounded:"","x-large":""},on:{click:t.togglePlan}},[t._v("$14 a Month"),a("br"),t._v(" Billed Monthly")])],1)],1)],1),a("v-col",{attrs:{cols:"6"}},[a("ul",{staticClass:"text-h6 font-weight-light"},[a("li",[t._v("Real-time Alerts")]),a("li",[t._v("Create Custom Reports")]),a("li",[t._v("Export data to CSV / PDF")]),a("li",[t._v("Advanced data filtering")]),a("li",[t._v("Custom Business Hours")]),a("li",[t._v("Remove automated messages")])])])],1),a("br"),a("v-divider",{staticClass:"mx-4"}),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"mr-2 ml-2",attrs:{color:"secondary",rounded:"",elevation:"2"},on:{click:function(e){t.doPremiumUpgradeAction("pay-card-"+t.premPlan.current.toLowerCase())}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-credit-card-outline")]),t._v(" Pay $"+t._s(t.premPlan[t.premPlan.current][1])+"/"+t._s(t.premPlan.current)+" with Card ")],1),a("v-btn",{staticClass:"mr-2 ml-2",attrs:{color:"secondary",rounded:"",elevation:"2"},on:{click:function(e){t.doPremiumUpgradeAction("pay-paypal-"+t.premPlan.current.toLowerCase())}}},[a("span",{staticStyle:{color:"#009CDE"}},[t._v("Pay")]),a("span",{staticStyle:{color:"#003087"}},[t._v("Pal")])]),a("v-spacer"),a("v-btn",{attrs:{icon:"",outlined:""},on:{click:function(e){t.toggleText=!t.toggleText}}},[a("v-icon",[t._v(t._s(t.toggleText?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),a("v-divider",{staticClass:"mx-6"}),a("div",{staticClass:"text-center  mt-2 mb-2"},[a("svg",{attrs:{width:"23px",height:"18px",viewBox:"0 0 70 54",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("defs"),a("g",{attrs:{id:"Paywall",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("g",{attrs:{id:"Desktop---Basic---Paywall---Custom-report",transform:"translate(-875.000000, -660.000000)",fill:"#FFFFFF","fill-rule":"nonzero"}},[a("path",{attrs:{d:"M941.176711,678.705 L939.653711,678.705 L939.723711,673.844 L939.723711,669.769 C939.779711,669.508 939.677711,668.535 939.677711,667.893 C939.692711,666.551 939.244711,664.439 937.265711,662.781 C935.299711,661.13 932.042711,660 926.665711,660 L926.611711,660 L926.532711,660.008 C926.458711,660.018 923.789711,660.28 920.987711,661.525 C918.234711,662.728 915.075711,665.187 915.075711,669.466 L914.897711,678.705 L913.385711,678.705 C911.277711,678.705 909.562711,680.414 909.562711,682.516 L909.562711,707.262 C909.562711,709.363 911.277711,711.073 913.385711,711.073 L941.176711,711.073 C943.284711,711.073 944.999711,709.363 944.999711,707.262 L944.999711,682.517 C944.999711,680.415 943.284711,678.705 941.176711,678.705 Z M927.105711,703.946 C925.131711,703.946 923.525711,702.346 923.525711,700.372 C923.525711,698.4 925.130711,696.805 927.105711,696.805 C929.084711,696.805 930.686711,698.4 930.686711,700.372 C930.686711,702.347 929.083711,703.946 927.105711,703.946 Z M937.070711,669.494 L937.070711,675.282 L937.036711,678.706 L917.485711,678.706 L917.663711,669.497 C917.663711,666.615 919.655711,664.985 922.048711,663.872 C923.221711,663.348 924.430711,663.014 925.331711,662.825 C926.064711,662.662 926.570711,662.594 926.737711,662.577 C931.727711,662.584 934.315711,663.651 935.596711,664.746 C936.880711,665.838 937.082711,667.026 937.095711,667.894 C937.094711,668.46 937.045711,669.49 937.070711,669.494 Z M922.784711,668.766 C922.468711,668.766 922.150711,668.795 921.838711,668.853 L919.636711,669.26 C919.631711,669.339 919.623711,669.419 919.623711,669.497 L919.499711,676.016 L928.461711,676.016 L927.902711,673.008 C927.445711,670.55 925.293711,668.766 922.784711,668.766 Z M906.865711,682.517 C906.865711,679.319 909.193711,676.652 912.248711,676.114 L912.352711,670.742 L879.254711,676.86 C876.434711,677.381 874.564711,680.093 875.087711,682.905 L880.079711,709.758 C880.535711,712.216 882.687711,714 885.196711,714 C885.512711,714 885.830711,713.971 886.142711,713.913 L907.477711,709.97 C907.094711,709.143 906.866711,708.232 906.866711,707.263 L906.866711,700.89 L881.089711,705.677 L880.046711,700.1 L878.956711,694.238 L906.865711,689.058 L906.865711,682.517 Z M882.726711,690.818 L881.087711,681.995 L894.196711,679.571 L895.835711,688.396 L882.726711,690.818 Z M884.231711,684.149 L884.888711,687.683 L892.693711,686.241 L892.036711,682.706 L884.231711,684.149 Z",id:"secure-payment"}})])])]),t._v("   "),a("span",{staticClass:"body- font-weight-light"},[t._v("100% Secure")]),t._v("     "),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"39",height:"12",viewBox:"0 0 39 12"}},[a("path",{attrs:{fill:"#FFFFFF","fill-rule":"nonzero",d:"M.04.1h4.916c.662.025 1.196.236 1.38.944l1.07 5.138C6.356 3.494 3.825 1.258 0 .332L.04.1zm5.948 11.717l-2.84-9.693C5.19 3.429 6.929 5.5 7.54 6.942l.331 1.197L10.976.211h3.359L9.343 11.815l-3.355.002zm10.816.009h-3.17L15.616.199h3.171l-1.983 11.627zM22.32 12c-1.42-.015-2.79-.296-3.532-.62l.446-2.603.409.185c1.04.434 1.715.61 2.985.61.91 0 1.886-.356 1.895-1.135.006-.509-.408-.872-1.643-1.443-1.203-.556-2.796-1.488-2.777-3.158C20.12 1.576 22.328 0 25.462 0c1.227 0 2.212.253 2.84.488l-.429 2.52-.286-.134a5.852 5.852 0 0 0-2.372-.445c-1.241 0-1.817.517-1.817 1-.006.544.672.903 1.78 1.442 1.83.83 2.675 1.836 2.664 3.159-.025 2.412-2.188 3.97-5.522 3.97zm13.738-.17s-.29-1.336-.385-1.742l-4.06-.005c-.124.314-.667 1.748-.667 1.748h-3.329l4.707-10.655c.334-.757.901-.965 1.661-.965h2.45L39 11.83h-2.942zM34.422 4.35l-.214-1.002c-.161.437-.44 1.14-.421 1.11l-1.263 3.25h2.633l-.735-3.358z"}})]),t._v("     "),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"83",height:"15",viewBox:"0 0 83 15"}},[a("g",{attrs:{fill:"none","fill-rule":"nonzero"}},[a("path",{attrs:{fill:"#FFFFFF",d:"M35.725 9.831V6.778c0-1.152-.735-1.928-1.917-1.938a1.887 1.887 0 0 0-1.712.867 1.79 1.79 0 0 0-1.61-.867 1.612 1.612 0 0 0-1.425.725v-.611H28v4.877h1.07V7.13c0-.847.469-1.295 1.194-1.295.724 0 1.06.458 1.06 1.285V9.83h1.065V7.13c0-.847.488-1.295 1.193-1.295.704 0 1.07.458 1.07 1.285V9.83h1.073zm15.843-4.873h-1.732V3.48h-1.07v1.478h-.99v.969h.99v2.22c0 1.132.437 1.806 1.69 1.806.469.002.928-.129 1.326-.376l-.306-.908c-.284.17-.607.264-.938.275-.53 0-.704-.326-.704-.815V5.927h1.732l.002-.969zm9.044-.122a1.437 1.437 0 0 0-1.284.714v-.592h-1.05v4.873h1.06V7.099c0-.814.346-1.253 1.04-1.253.227-.004.453.038.664.122l.325-1a2.266 2.266 0 0 0-.755-.132zm-13.673.509a3.644 3.644 0 0 0-1.989-.509c-1.233 0-2.035.592-2.035 1.56 0 .795.59 1.284 1.681 1.436l.499.071c.58.082.857.235.857.51 0 .376-.387.592-1.112.592a2.598 2.598 0 0 1-1.628-.51l-.482.825a3.516 3.516 0 0 0 2.11.633c1.407 0 2.223-.663 2.223-1.59 0-.856-.643-1.304-1.701-1.457l-.5-.071c-.457-.061-.826-.153-.826-.479 0-.356.346-.57.929-.57a3.141 3.141 0 0 1 1.518.418l.456-.86zm28.4-.509a1.437 1.437 0 0 0-1.284.714v-.592h-1.05v4.873h1.06V7.099c0-.814.346-1.253 1.04-1.253.228-.004.453.038.664.122l.326-1a2.266 2.266 0 0 0-.755-.132zM61.684 7.395c0 1.477 1.03 2.558 2.6 2.558a2.553 2.553 0 0 0 1.752-.582l-.509-.857c-.366.28-.813.433-1.274.438-.847 0-1.468-.623-1.468-1.56 0-.936.623-1.548 1.468-1.559.46.005.908.159 1.274.438l.509-.857a2.553 2.553 0 0 0-1.753-.582c-1.57 0-2.6 1.08-2.6 2.559v.004zm9.93 0V4.952h-1.061v.592a1.848 1.848 0 0 0-1.539-.714c-1.366 0-2.443 1.07-2.443 2.558 0 1.488 1.071 2.56 2.443 2.56a1.848 1.848 0 0 0 1.539-.715v.59h1.06V7.395zm-3.945 0c0-.857.56-1.56 1.477-1.56.878 0 1.468.674 1.468 1.56 0 .885-.59 1.559-1.468 1.559-.918 0-1.477-.705-1.477-1.56zM54.872 4.836c-1.425 0-2.427 1.04-2.427 2.559 0 1.549 1.04 2.558 2.498 2.558a2.962 2.962 0 0 0 1.999-.684l-.519-.785a2.323 2.323 0 0 1-1.425.508c-.684 0-1.305-.315-1.457-1.192h3.619c.01-.133.02-.265.02-.407 0-1.519-.948-2.559-2.314-2.559l.006.002zm-.02.949c.683 0 1.121.427 1.233 1.182H53.56c.112-.704.54-1.182 1.295-1.182h-.003zm26.594 1.61V3h-1.06v2.548a1.848 1.848 0 0 0-1.539-.714c-1.366 0-2.443 1.07-2.443 2.559 0 1.487 1.071 2.558 2.443 2.558a1.848 1.848 0 0 0 1.539-.714v.59h1.06V7.395zm1.24 1.986a.311.311 0 0 1 .29.43.313.313 0 0 1-.29.189.316.316 0 0 1-.293-.19.31.31 0 0 1 .297-.43l-.004.001zm0 .55a.23.23 0 0 0 .17-.07.242.242 0 0 0-.076-.392.234.234 0 0 0-.094-.019.242.242 0 0 0-.173.411.242.242 0 0 0 .177.07h-.004zm.018-.387a.13.13 0 0 1 .086.024c.02.017.032.042.03.068a.077.077 0 0 1-.024.059.114.114 0 0 1-.067.028l.094.108h-.074l-.087-.108h-.029v.108h-.06v-.285l.131-.002zm-.07.053v.077h.07a.07.07 0 0 0 .04 0 .033.033 0 0 0 .013-.028.033.033 0 0 0-.014-.029.07.07 0 0 0-.039 0l-.07-.02zm-5.128-2.202c0-.857.56-1.56 1.477-1.56.878 0 1.468.674 1.468 1.56 0 .885-.59 1.559-1.468 1.559-.918 0-1.477-.705-1.477-1.56zm-35.806 0V4.952h-1.061v.592a1.848 1.848 0 0 0-1.533-.708c-1.366 0-2.443 1.07-2.443 2.559 0 1.488 1.071 2.558 2.443 2.558a1.848 1.848 0 0 0 1.54-.714v.59h1.06L41.7 7.395zm-3.945 0c0-.857.56-1.56 1.477-1.56.878 0 1.468.674 1.468 1.56 0 .885-.59 1.559-1.468 1.559-.918 0-1.477-.702-1.477-1.56z"}}),a("path",{attrs:{fill:"#B5CAA0",d:"M8.839 1.759h6.407v11.475H8.839z"}}),a("path",{attrs:{fill:"#FFFFFF",d:"M9.246 7.5a7.276 7.276 0 0 1 2.797-5.736 7.34 7.34 0 0 0-9.904.786 7.28 7.28 0 0 0 0 9.902 7.34 7.34 0 0 0 9.904.787A7.276 7.276 0 0 1 9.246 7.5z"}}),a("path",{attrs:{fill:"#B5BEC9",d:"M23.89 7.5c0 2.794-1.6 5.343-4.122 6.563a7.342 7.342 0 0 1-7.725-.827A7.288 7.288 0 0 0 14.84 7.5a7.288 7.288 0 0 0-2.797-5.738 7.342 7.342 0 0 1 7.726-.826A7.295 7.295 0 0 1 23.89 7.5z"}}),a("path",{attrs:{fill:"#F79E1B",d:"M23.186 12.107v-.309h.096v-.06h-.238v.063h.096v.308l.046-.002zm.47 0v-.373h-.063l-.085.266-.086-.266h-.075v.373h.043v-.28l.08.243h.054l.08-.242v.281l.052-.002z"}})])]),t._v("     "),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"18",viewBox:"0 0 48 18"}},[a("g",{attrs:{fill:"#FFFFFF","fill-rule":"nonzero"}},[a("path",{attrs:{d:"M34.554 2.56l-.881 2.139h1.771zM4.105 2.56l-.871 2.139h1.749zM24.32 2.863c-.152-.086-.386-.097-.608-.097h-1.58v1.191h1.559c.247 0 .455-.004.634-.11.165-.087.264-.276.264-.51 0-.23-.103-.396-.269-.474zM29.816 12.093c-.156-.093-.386-.097-.612-.097h-1.58v1.205h1.559c.25 0 .463-.008.636-.109.166-.102.265-.285.265-.516-.003-.231-.102-.397-.268-.483zM23.571 11.994h-1.672v1.367h1.656c.493 0 .8-.244.8-.707-.001-.472-.32-.66-.784-.66z"}}),a("path",{attrs:{d:"M47.262 12.8l-.028-.026a.887.887 0 0 0 .405-.744v-1.143a.886.886 0 0 0-.887-.887h-2.57c-.801 0-1.405.236-1.845.592a.875.875 0 0 0-.826-.592h-2.57c-.707 0-1.264.175-1.688.463A.872.872 0 0 0 36.49 10h-4.28a.88.88 0 0 0-.783.488c-.061-.043-.106-.093-.17-.131-.621-.332-1.281-.357-1.961-.357h-2.963a.879.879 0 0 0-.783.492c-.451-.293-1.082-.492-1.979-.492h-4.098c-.247 0-.482.1-.651.282l-.971 1.047-.932-1.035a.869.869 0 0 0-.659-.295h-5.158a.886.886 0 0 0-.886.887v5.367c0 .491.397.887.886.887h5.081a.883.883 0 0 0 .65-.285l.979-1.059.929 1.045c.168.19.41.297.663.297h2.493a.886.886 0 0 0 .887-.885v-.916h.713c.867 0 1.494-.178 1.95-.449v1.365c0 .489.397.885.887.885h1.289a.886.886 0 0 0 .887-.885v-1.076h.483c.118 0 .201.004.261.008.004.096.004.211.002.287v.781c0 .489.399.885.887.885h1.287a.844.844 0 0 0 .392-.1c.12.059.249.1.391.1h4.281a.877.877 0 0 0 .385-.096.867.867 0 0 0 .385.096h2.498c.795 0 1.443-.195 1.928-.539a.883.883 0 0 0 .814.539h2.498c1.817 0 2.9-.965 2.9-2.58 0-.748-.202-1.305-.64-1.758zm-23.764 1.65h-1.6v1.801h-2.493l-1.58-1.776-1.642 1.776h-5.081v-5.368h5.158l1.58 1.76 1.632-1.76h4.098c1.017 0 2.162.285 2.162 1.771 0 1.489-1.112 1.799-2.234 1.796zm7.093-.691c.284.104.517.293.625.451.183.262.207.506.213.979v1.064h-1.287v-.672c0-.322.031-.801-.209-1.051-.184-.191-.469-.236-.939-.236h-1.37v1.959h-1.289v-5.367h2.963c.648 0 1.12.027 1.543.252.404.244.659.58.659 1.191 0 .858-.573 1.295-.909 1.43zm5.901-1.764h-3.004v.977h2.93v1.096h-2.93v1.066l3.004.006v1.113h-4.28v-5.367h4.28v1.109zm3.271 4.252h-2.498v-1.153h2.487c.242 0 .415-.03.523-.133a.477.477 0 0 0 .15-.351.453.453 0 0 0-.156-.354c-.1-.082-.232-.119-.457-.119-1.198-.039-2.701.037-2.701-1.66 0-.781.488-1.598 1.834-1.598h2.57v1.142h-2.353c-.235 0-.386.01-.514.098-.141.088-.194.217-.194.387 0 .203.119.338.28.4.137.047.281.061.5.061l.689.02c.695.019 1.174.139 1.463.432.252.259.385.587.385 1.138 0 1.157-.719 1.696-2.008 1.69zm5.241 0h-2.498v-1.153h2.488c.242 0 .415-.03.522-.133a.477.477 0 0 0 .15-.351.453.453 0 0 0-.156-.354c-.099-.082-.231-.119-.457-.119-1.199-.039-2.701.037-2.701-1.66 0-.781.488-1.598 1.834-1.598h2.57v1.142h-2.352c-.236 0-.388.01-.515.098-.141.088-.193.217-.193.387 0 .203.12.338.279.4.138.047.281.061.5.061l.689.02c.696.019 1.176.139 1.465.432.25.259.385.587.385 1.138 0 1.157-.721 1.696-2.01 1.69zM43.236.762h-1.313a.886.886 0 0 0-.887.886v.554l-.609-1.011a.89.89 0 0 0-.758-.428h-1.955a.886.886 0 0 0-.886.886v.753L36.357 1.3a.885.885 0 0 0-.813-.537h-1.922a.878.878 0 0 0-.529.176.88.88 0 0 0-.531-.176h-1.239c-1.054 0-1.834.255-2.408.753a.875.875 0 0 0-.859-.753h-1.31a.883.883 0 0 0-.789.499c-.055-.04-.097-.088-.159-.124C25.196.79 24.563.763 23.8.763h-2.95a.867.867 0 0 0-.445.137.855.855 0 0 0-.444-.137h-4.284a.862.862 0 0 0-.478.159.868.868 0 0 0-.478-.159h-2.138a.885.885 0 0 0-.814.541L11.007 3.1l-.839-1.822a.89.89 0 0 0-.805-.515H7.269a.886.886 0 0 0-.886.886v.771l-.481-1.122a.887.887 0 0 0-.815-.536H3.183a.888.888 0 0 0-.815.537L.072 6.666a.887.887 0 0 0 .814 1.235H2.28a.886.886 0 0 0 .816-.546l.271-.652h1.486l.267.648c.136.332.46.549.82.549h2.609c.49 0 .886-.397.886-.886v-.021l.168.381c.142.32.46.527.81.527l1.127.002a.884.884 0 0 0 .81-.528l.17-.38v.022c0 .489.396.885.886.885h1.315c.18 0 .337-.068.478-.159a.87.87 0 0 0 .478.159h4.284a.855.855 0 0 0 .444-.137.864.864 0 0 0 .445.137h1.284c.49 0 .886-.397.886-.886V5.95h.49c.111 0 .19.003.249.007.006.091.004.199.004.271l-.002.118.005.677a.888.888 0 0 0 .887.879h1.294a.865.865 0 0 0 .397-.107.872.872 0 0 0 .401.107h1.31c.43 0 .77-.31.853-.714.727.611 1.751.714 2.321.714h1.503c.358 0 .682-.22.817-.555l.261-.643h1.478l.271.652a.886.886 0 0 0 .818.545h2.61c.49 0 .886-.397.886-.886v-.847l.787 1.305a.889.889 0 0 0 .76.428h1.816c.49 0 .886-.397.886-.886V1.648a.887.887 0 0 0-.886-.886zM14.72 7.014h-1.315L13.4 2.811l-1.86 4.203h-1.127L8.55 2.807v4.207H5.939l-.493-1.197h-2.67l-.498 1.197H.884l2.297-5.367h1.904l2.183 5.082V1.647h2.094l1.679 3.641 1.541-3.641h2.138v5.367zm5.24-4.249h-3.002v.967h2.931v1.1h-2.931v1.072h3.002v1.11h-4.284V1.647h4.284v1.118zm5.137 1.759c.281.108.521.296.635.452.182.267.213.505.213.984v1.053h-1.294l-.006-.677c0-.322.031-.786-.202-1.045-.187-.188-.473-.229-.935-.229h-1.375v1.952h-1.285V1.648h2.95c.656 0 1.139.017 1.553.257.406.24.649.59.649 1.189 0 .855-.571 1.298-.903 1.43zm2.959 2.49h-1.31V1.647h1.31v5.367zm15.18 0h-1.817l-2.433-4.028v4.028h-2.61l-.5-1.197H33.21l-.482 1.197h-1.502c-.623 0-1.41-.138-1.856-.593-.454-.456-.688-1.074-.688-2.049 0-.796.141-1.524.687-2.1.413-.428 1.062-.625 1.948-.625h1.239v1.15h-1.215c-.467 0-.732.069-.986.318-.219.226-.368.653-.368 1.216 0 .574.114.988.354 1.259.199.213.559.277.894.277h.575l1.812-4.22h1.922l2.17 5.076V1.647h1.955l2.254 3.738V1.647h1.313v5.367zm-11.448-3.33l-.557 1.299c-.123 0-.206-.014-.252-.026-.043-.08-.102-.257-.102-.625 0-.372.09-.565.102-.582.037-.036.068-.067.369-.067l.44.001z"}}),a("path",{attrs:{d:"M18.651 13.578l1.97 2.188v-4.303zM15.597 11.996h-3.214v.975h2.815v1.096h-2.815v1.068h3.152L17 13.558z"}})])])]),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.toggleText,expression:"toggleText"}]},[a("v-divider"),a("v-card-text",[a("p",{staticClass:"subtitle-2 font-weight-medium mb-2"},[t._v("Email Reply Time Premium is priced at $14 per month with a monthly payment. Save 20% each month by switching to a yearly payment!")]),a("p",{staticClass:"subtitle-2 font-weight-medium mb-2"},[t._v("Your subscription will be renewed every month unless you cancel first. There is no commitment. Please get in touch with us if you find Premium isn’t for you.")])])],1)])],1)],1)],1)],1)},G=[],Z={props:["isSignedIn"],data:()=>({premPlan:{current:"Yearly",Monthly:[14,14],Yearly:[11,132]},toggleText:!1}),methods:{doPremiumUpgradeAction(t){this.$emit("premium-upgrade-action",t)},togglePlan(){"Monthly"===this.premPlan.current?this.premPlan.current="Yearly":this.premPlan.current="Monthly"}}},N=Z,J=(a("4162"),a("8336")),K=a("99d9"),X=a("ce7e"),Q=a("0789"),tt=a("132d"),et=a("a797"),at=a("2fa4"),st=a("3a2f"),rt=Object(j["a"])(N,q,G,!1,null,"63ee27aa",null),nt=rt.exports;L()(rt,{VBtn:J["a"],VCard:A["a"],VCardActions:K["a"],VCardText:K["b"],VCol:R["a"],VDivider:X["a"],VExpandTransition:Q["a"],VIcon:tt["a"],VOverlay:et["a"],VRow:F["a"],VSpacer:at["a"],VTooltip:st["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("v-btn",{staticClass:"mr-2 ml-2",attrs:{color:"Monthly"===t.stateRange.current?"alternative":"secondary",rounded:"",dark:""},on:{click:function(e){return t.setCurrent("Monthly")}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-calendar-month-outline")]),t._v(" Monthly ")],1),a("v-btn",{staticClass:"mr-2 ml-2",attrs:{color:"Weekly"===t.stateRange.current?"alternative":"secondary",rounded:"",dark:""},on:{click:function(e){return t.setCurrent("Weekly")}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-calendar-range")]),t._v(" Weekly ")],1),a("v-btn",{staticClass:"mr-2 ml-2",attrs:{color:"Custom"===t.stateRange.current?"alternative":"secondary",rounded:"",dark:""},on:{click:function(e){return t.setCurrent("Custom")}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-pencil")]),t._v(" Custom Dates ")],1)],1)},ct=[],lt={props:["stateRange"],methods:{setCurrent(t){this.$emit("state-range-set-current",t)}}},ot=lt,dt=Object(j["a"])(ot,it,ct,!1,null,null,null),ut=dt.exports;L()(dt,{VBtn:J["a"],VIcon:tt["a"]}),console.table(h["c"]);let ht=(t="tacocat")=>t.split("").reverse().join("");c["a"].use(u.a,{apiKey:ht("wySB8UJSJTTR2d_k_uN_KWLdDtsYZutUDySazIA"),clientId:ht("moc.tnetnocresuelgoog.sppa.2n5jn3qn53b76h5sqc92ae7v02qjpep3-277572845182"),discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"],scope:"https://www.googleapis.com/auth/gmail.readonly"}),c["a"].use(g.a,m.a);var vt={components:{Signin:D,Wait:Y,PremiumUpsell:W["default"],PremiumUpgrade:nt,DailyBreakdownBar:C,HourlyBreakdownHeatmap:x,DateRange:ut},data:()=>({isSignedIn:!1,activePage:"Signin",stateApp:{current:"FREE",state:["FREE","PREMIUMUPSELL","PREMIUMUPGRADE","PAYCARD","PAYPAL","PREMIUM"]},oAuthToken:"",stateRange:{current:"Monthly",Monthly:[1625097600,1627775999],Weekly:[1628433720,1628952120],Custom:[1234,1234]},aMsgsRange:[],aMsgsSummary:[],drawer:!0,tablExpanded:[],tablSingleExpand:!1,aMsgsSummaryHeaders:[{width:"200px",value:"From",text:"From",sortable:!0},{width:"240px",value:"Date",text:"Date"},{width:"240px",value:"To",text:"To"},{width:"400px",value:"Subject",text:"Subject"}],tabState:null,tabItems:["Daily Breakdown","Hourly Breakdown","Ave Response Time","Senders"],tabCurrent:"Daily Breakdown",brandColors:["#BF8722","#F5771D","#DD4326","#F51D5C","#D91CEB"],datacollection:{labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],datasets:[{label:"Sent",data:[15,22,26,16,7,0,0],borderColor:"#F5771D",backgroundColor:"#F5771D"},{label:"Recieved",data:[18,20,22,24,9,1,2],borderColor:"#DD4326",backgroundColor:"#DD4326"}]}}),watch:{isSignedIn:function(t){t?this.doActionClick("fetchinit"):this.doActionClick("signout")},stateApp:{deep:!0,handler(t){"PREMIUMUPGRADE"===t.current&&(this.activePage="PremiumUpgrade"),"FREE"===t.current&&(this.activePage=null)}}},methods:{tabContent(t){this.tabCurrent=t},goHome(){},signin(){this.$gapi.login().then(({currentUser:t,hasGrantedScopes:e})=>{console.log("currentUser, hasGrantedScopes",t,e)})},signout(){this.$gapi.logout()},toggleDrawer(){this.drawer=!this.drawer},toggleTheme(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,document.body.dataset.prefScheme=this.$vuetify.theme.dark?"dark":"light"},getAuthAccessToken(){let t=this.$gapi.clientProvider.client;var e=t.authInstance.currentUser.get();this.oAuthToken=e.getAuthResponse().access_token},fetchGmailMessages(t){let e=this,a=this.stateRange[this.stateRange.current],s="https://gmail.googleapis.com/gmail/v1/users/me/messages?q=in: after:"+a[0]+" before:"+ +a[1];t&&(s=s+"&pageToken="+t),m.a.get(s,{headers:{Authorization:"Bearer "+this.oAuthToken}}).then((function(t){let a=t.data;e.aMsgsRange=e.aMsgsRange.concat(a.messages),a.nextPageToken?e.fetchGmailMessages(a.nextPageToken):e.aMsgsRange.forEach(t=>{let a=e.aMsgsSummary.filter((function(e){return e.id===t.id}));a.length||e.fetchMailDetails(t.id,e.oAuthToken)})}))},fetchMailDetails(t,e){let a=this,s=new XMLHttpRequest;s.open("GET","https://gmail.googleapis.com/gmail/v1/users/me/messages/"+t,!0),s.setRequestHeader("Authorization","Bearer "+this.oAuthToken),s.send(),s.onload=function(){let e=JSON.parse(this.response),s=e.payload.headers;a.aMsgsSummary.push({id:t,MessageID:a.extractVal(s,"Message-ID"),DeliveredTo:a.extractVal(s,"Delivered-To"),Date:a.extractVal(s,"Date"),From:a.extractVal(s,"From"),To:a.extractVal(s,"To"),Subject:a.extractVal(s,"Subject")})}},extractVal(t,e){let a=t.filter(t=>t.name===e);return a[0]&&a[0].value?a[0].value:""},doActionClick(t){switch(console.table(t),t){case"signin":this.signin(),this.activePage="Wait";break;case"clearmsg":this.aMsgsRange=[],this.aMsgsSummary=[];break;case"fetchinit":this.doActionClick("clearmsg"),this.getAuthAccessToken(),this.fetchGmailMessages();break;case"signout":this.signout(),this.activePage="Signin",this.oAuthToken="",this.doActionClick("clearmsg");break;case"premiumupsell":"PREMIUM"!==this.stateApp.current&&this.$set(this.stateApp,"current","PREMIUMUPSELL");break;case"premiumupgrade":"PREMIUM"!==this.stateApp.current&&this.$set(this.stateApp,"current","PREMIUMUPGRADE");break;case"Monthly":this.stateRange.current=t,this.doActionClick("fetchinit");break;case"Weekly":this.stateRange.current=t,this.doActionClick("fetchinit");break;case"Custom":this.stateRange.current=t,this.doActionClick("fetchinit");break;case"premium-upgrade-close":this.$set(this.stateApp,"current","FREE");break}}},mounted(){console.log("======================="),console.log(this.stateRange[this.stateRange.current])},created(){this.$gapi.listenUserSignIn(t=>{this.isSignedIn=t})}},mt=vt,ft=(a("034f"),a("58d2"),a("7496")),gt=a("8fea"),pt=a("8860"),bt=a("da13"),jt=a("5d23"),yt=a("34c3"),Ct=a("f6c4"),wt=a("f774"),kt=a("8dd9"),_t=a("afd9"),xt=a("71a3"),Mt=a("c671"),zt=a("fe57"),Vt=a("aac8"),St=Object(j["a"])(mt,l,o,!1,null,"4bf6ae97",null),Pt=St.exports;L()(St,{VApp:ft["a"],VCard:A["a"],VCardText:K["b"],VCardTitle:K["c"],VCol:R["a"],VContainer:T["a"],VDataTable:gt["a"],VDivider:X["a"],VIcon:tt["a"],VList:pt["a"],VListItem:bt["a"],VListItemContent:jt["a"],VListItemIcon:yt["a"],VListItemTitle:jt["b"],VMain:Ct["a"],VNavigationDrawer:wt["a"],VRow:F["a"],VSheet:kt["a"],VSpacer:at["a"],VSystemBar:_t["a"],VTab:xt["a"],VTabItem:Mt["a"],VTabs:zt["a"],VTabsItems:Vt["a"]});var Lt=a("8c4f");c["a"].use(Lt["a"]);var At=[],Rt=new Lt["a"]({mode:"history",base:"",routes:At}),Tt=Rt,Ft=a("2f62");c["a"].use(Ft["a"]);var Et=new Ft["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Dt=a("f309");c["a"].use(Dt["a"]);var It=new Dt["a"]({theme:{dark:!1,themes:{dark:{primary:"#F05E1C",secondary:"#B5CAA0",tertiary:"#D19826",alternative:"#C46243"},light:{primary:"#F05E1C",secondary:"#B5CAA0",tertiary:"#D19826",alternative:"#C46243"}}}});c["a"].config.productionTip=!1,new c["a"]({router:Tt,store:Et,vuetify:It,render:function(t){return t(Pt)}}).$mount("#app")},d777:function(t,e,a){"use strict";a("49e6")},dfd6:function(t,e,a){},ecde:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return r}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"80%"}},[a("br"),a("h2",{staticClass:"text-h2 text-center mb-5"},[t._v(" Would you like to create a Custom Report? ")]),a("p",{staticClass:"lgn-cta__sub text-center"},[t._v(" Start enjoying the benefits of a Pro user now for just $15/month billed yearly. You can cancel anytime. ")]),a("ul",[a("li",{staticClass:"lgn-cta__sub text-center"},[t._v("Create Custom Reports")]),a("li",{staticClass:"lgn-cta__sub text-center"},[t._v("Real-time Alerts")]),a("li",{staticClass:"lgn-cta__sub text-center"},[t._v("Export data to CSV")]),a("li",{staticClass:"lgn-cta__sub text-center"},[t._v("2 years of email history")]),a("li",{staticClass:"lgn-cta__sub text-center"},[t._v("Advanced data filtering")]),a("li",{staticClass:"lgn-cta__sub text-center"},[t._v("Remove automated messages")]),a("li",{staticClass:"lgn-cta__sub text-center"},[t._v("Business Hours")]),a("li",{staticClass:"lgn-cta__sub text-center"},[t._v("Team and individual performance reports")])]),a("br")])],1)],1)],1)},r=[]},ee3a:function(t,e){},f6e4:function(t,e,a){}});
//# sourceMappingURL=app.935f0840.js.map