(function(e){function t(t){for(var a,c,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)c=i[l],r[c]&&f.push(r[c][0]),r[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"38c8":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"GAMaps",function(){return z}),n.d(a,"install",function(){return K});n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticStyle:{position:"fixed","z-index":"300",width:"100%",padding:"12px 0",background:"#fff"}},[e._v("\n    lnglat:"+e._s(e.map.center)+"\n    zoom:"+e._s(e.map.zoom)+"\n  ")]),n("g-a-map",{attrs:{center:e.map.center,zoom:e.map.zoom},on:{click:e.map_click,zoom_change:e.zoom_change,right_click:e.right_click,drag:e.drag}}),n("div",{staticClass:"box"},[n("div",{staticClass:"but",on:{click:e.checkMap}},[e._v("\n      切换"+e._s("amap"===e.mapType?"谷歌":"高德")+"地图\n    ")]),n("div",{staticClass:"but",on:{click:e.change_center}},[e._v("\n      移动地图\n    ")]),n("div",{staticClass:"but",on:{click:function(t){e.map.zoom+=1}}},[e._v("\n      放大地图\n    ")]),n("div",{staticClass:"but",on:{click:function(t){e.map.zoom-=1}}},[e._v("\n      缩小地图\n    ")])])],1)},c=[],i=n("cebc"),u=(n("a481"),n("7f7f"),n("96cf"),n("3b8d")),s=n("d225"),p=n("b0b4"),l=n("bd86"),f=n("795b"),m=n.n(f),g=function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=null,a=function(e){var t=window.document.createElement("script");return t.type="text/javascript",t.async=!0,t.defer=!0,t.src="".concat(e.protocol,"://").concat(e.amap_host_and_path,"?v=").concat(e.amap_v,"&key=").concat(e.amap_key),window.document.head.appendChild(t),new m.a(function(e){var a=function(){console.log("amap 地图加载完成"),n=window.AMap,e(n)};t.addEventListener("load",a,!1)})},!n){e.next=6;break}return e.abrupt("return",n);case 6:return e.next=8,a(t);case 8:return n=e.sent,e.abrupt("return",n);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),d=g,h=function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=null,a=function(e){var t=window.document.createElement("script");return t.type="text/javascript",t.async=!0,t.defer=!0,t.src="".concat(e.protocol,"://").concat(e.google_host_and_path,"/api/js?key=").concat(e.google_key),window.document.head.appendChild(t),new m.a(function(e){var a=function(){console.log("google 地图加载完成"),n=window.google.maps,e(n)};t.addEventListener("load",a,!1)})},!n){e.next=6;break}return e.abrupt("return",n);case 6:return e.next=8,a(t);case 8:return n=e.sent,e.abrupt("return",n);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),_=h,v={amap_key:"60d44e12edf51161877baac278110500",google_key:"AIzaSyDJW4jsPlNKgv6jFm3B5Edp5ywgdqLWdmc",google_host_and_path:"maps.googleapis.com/maps",amap_host_and_path:"webapi.amap.com/maps",amap_v:"1.4.1",plugin:[],protocol:"http",map_type:"amap"},w={name:{amap:"Map",google:"Map"},attribute:{zoom:{amap:"zoom",google:"zoom"},center:{amap:"center",google:"center"}},set:{setCenter:{amap:"setCenter",google:"panTo"}},on:{zoom_change:{amap:"zoomchange",google:"zoom_changed"},move_end:{amap:"moveend",google:"idle"},drag:{amap:"dragging",google:"drag"},right_click:{amap:"rightclick",google:"rightclick"}}},b={get_map:function(e,t){return new m.a(function(n){var a=null,r=function r(){z&&z["$".concat(e)]?(a&&clearTimeout(a),t?n(z["$".concat(e)][t]):e&&n(z["$".concat(e)])):a=setTimeout(r,500)};r()})},add_listener:function(e,t,n){var a=z.config.map_type,r=e.$component;if(!r)throw Error(r);if(!t)throw Error(t);if(!n)throw Error(n);e.on[t]?e.on[t](n):"amap"===a?r.on(t,n):"google"===a&&r.addListener(t,n)}};function y(e,t){return k.apply(this,arguments)}function k(){return k=Object(u["a"])(regeneratorRuntime.mark(function e(t,n){var a,r,o,c,i,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=z.config.map_type,r=w.set,o=w.on,c={on:{}},e.next=6,b.get_map(a);case 6:return i=e.sent,e.next=9,new z.LngLat(n.center);case 9:return n.center=e.sent,s=c.$component=new i[w.name[a]](t,n),c.setCenter=function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n,o,c,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.lng,o=t.lat,n&&o){e.next=3;break}throw new Error(n,o);case 3:return c=s[r.setCenter[a]],e.next=6,new z.LngLat({lng:n,lat:o});case 6:i=e.sent,c&&s[r.setCenter[a]](i);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),c.addListener=function(e,t){o[e]&&(e=o[e][a]),b.add_listener(c,e,t)},c.on.click=function(e){"amap"===a?s.on("click",function(t){e({type:"click",lnglat:{lng:t.lnglat.lng,lat:t.lnglat.lat}})}):"google"===a&&s.addListener("click",function(t){e({type:"click",lnglat:{lng:t.latLng.lng(),lat:t.latLng.lat()}})})},e.abrupt("return",c);case 15:case"end":return e.stop()}},e)})),k.apply(this,arguments)}var x={name:{amap:"LngLat",google:"LatLng"},attribute:{zoom:{amap:"zoom",google:"zoom"},center:{amap:"center",google:"center"}}};function j(e){return O.apply(this,arguments)}function O(){return O=Object(u["a"])(regeneratorRuntime.mark(function e(t){var n,a,r,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.lng,a=t.lat,r=z.config.map_type,n&&a){e.next=4;break}throw new Error(n,a);case 4:return e.next=6,b.get_map(r,x.name[r]);case 6:return o=e.sent,c=null,c="amap"===r?new o(n,a):new o({lng:n,lat:a}),e.abrupt("return",c);case 10:case"end":return e.stop()}},e)})),O.apply(this,arguments)}var $=function(){function e(t){var n=this;Object(s["a"])(this,e),Object(l["a"])(this,"Map",function(e,t){return new y(e,t)}),Object(l["a"])(this,"LngLat",function(e,t){return new j(e,t)}),Object(l["a"])(this,"on",function(e,t){var a=n.event[e];if(a){for(var r=n.event[e].length,o=0;o<r;o++)if(t==a[o])return;n.event[e].push(t)}}),Object(l["a"])(this,"event",{change_map_type:[],complete:[]}),Object(l["a"])(this,"set_map_type",function(e){n.config.map_type&&(n.config.map_type=e),n.event.change_map_type.map(function(t){t(e)})}),Object(l["a"])(this,"get_map_type",function(){return n.config.map_type}),this.config=t,this._load(t)}return Object(p["a"])(e,[{key:"_load",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.config.amap_key){e.next=4;break}return e.next=3,d(this.config);case 3:this.$amap=e.sent;case 4:if(!this.config.google_key){e.next=8;break}return e.next=7,_(this.config);case 7:this.$google=e.sent;case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}]),Object(p["a"])(e,[{key:"remove",value:function(e,t){var n=this.event[e];if(n)for(var a=this.event[e].length,r=0;r<a;r++)if(n[r]===t)return void n.replace(r,1)}}]),e}(),z=null,M=function(e){var t=null;return z||(t?void 0:(t=!0,z=new $(Object(i["a"])({},v,e)),z))},L={components:{},computed:{},data:function(){return{map:{center:{lng:103.86338,lat:30.68973},zoom:16},state:!0,mapType:"amap"}},methods:{checkMap:function(){"google"===z.config.map_type?z.set_map_type("amap"):z.set_map_type("google")},map_click:function(e){console.log(e)},zoom_change:function(e){console.log(e)},move_end:function(e){console.log(e)},right_click:function(e){console.log(e)},drag:function(e){console.log(e)},change_center:function(){var e=this.map.center;this.map.center={lng:e.lng-.002,lat:e.lat}}},mounted:function(){this.state=!1}},C=L,R=(n("034f"),n("2877")),E=Object(R["a"])(C,o,c,!1,null,null,null),A=E.exports,G=(n("38c8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"GA_Map_container"},[e.map_state?n("div",{ref:"GA_Map",staticClass:"GA_Map"}):e._e(),e._t("default")],2)}),T=[],P=(n("ac6a"),n("f3c3")),S=n.n(P),F={methods:{_set_props_watch:function(){var e=this,t=this.$GA_Map_Component;if(t){this._bundleFun=[];var n=this.$props,a=function(n){if("opts"===n);else if(t["set".concat(S()(n))]){var a=e.$watch(n,function(e){t["set".concat(S()(n))](e)});e._bundleFun.push(a)}else if(t.$component["set".concat(S()(n))]){var r=e.$watch(n,function(e){t.$component["set".concat(S()(n))](e)});e._bundleFun.push(r)}};for(var r in n)a(r)}},_remove_props_watch:function(){this._bundleFun&&this._bundleFun.forEach(function(e){e()})},_set_listeners_watch:function(){var e=this.$GA_Map_Component;if(e){var t=this.$listeners;if(t)for(var n in t)e.addListener(n,t[n])}}}},J={name:"GAMap",mixins:[F],props:{center:{},zoom:{},opts:{}},data:function(){return{$GA_Map_Component:null,map_state:!0,children_state:!1}},methods:{create:function(){var e=this;this.map_state=!1,this.children_state=!1,this.$nextTick(function(){e.map_state=!0,e.$nextTick(Object(u["a"])(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=Object(i["a"])({},e.$props,e.$props.opts),delete n.opts,t.next=4,new z.Map(e.$refs.GA_Map,n);case 4:e.$GA_Map_Component=t.sent,e.children_state=!0,e._set_listeners_watch&&e._set_listeners_watch(),e._remove_props_watch&&e._remove_props_watch(),e._set_props_watch&&e._set_props_watch();case 9:case"end":return t.stop()}},t)})))})}},mounted:function(){var e=this;this.create(),z.on("change_map_type",function(){e.create()})}},V=J,W=Object(R["a"])(V,G,T,!1,null,null,null),q=W.exports;q.install=function(e){return e.component(q.name,q)};var B=q,D=n("081a");r["a"].use(D["a"]);new D["a"]({routes:[{path:"*",redirect:"/"}]});var I=[B],K=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};z||M(t),I.map(function(t){e.component(t.name,t)})};"undefined"!==typeof window&&window.Vue&&K(window.Vue),r["a"].config.productionTip=!1,r["a"].use(a),new r["a"]({render:function(e){return e(A)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.46658d84.js.map