(function(t){function e(e){for(var i,c,a=e[0],o=e[1],l=e[2],f=0,d=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,a=1;a<s.length;a++){var o=s[a];0!==r[o]&&(i=!1)}i&&(n.splice(e--,1),t=c(c.s=s[0]))}return t}var i={},r={app:0},n=[];function c(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=i,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(s,i,function(e){return t[e]}.bind(null,i));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/aviasales/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=o;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("85ec"),r=s.n(i);r.a},1569:function(t,e,s){t.exports=s.p+"img/checkbox.ebdd84bf.svg"},"1d1e":function(t,e,s){"use strict";var i=s("3d6c"),r=s.n(i);r.a},"2f14":function(t,e,s){"use strict";var i=s("6781"),r=s.n(i);r.a},"30c7":function(t,e,s){},"33e0":function(t,e,s){"use strict";var i=s("30c7"),r=s.n(i);r.a},"365f":function(t,e,s){},"3d6c":function(t,e,s){},"42a4":function(t,e,s){},"47dc":function(t,e,s){"use strict";var i=s("365f"),r=s.n(i);r.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),r=s("2f62"),n=s("bc3a"),c=s.n(n),a=s("a7fe"),o=s.n(a),l=(s("99af"),s("4de4"),s("c975"),s("d81d"),s("a9e3"),s("f2ef")),u={actions:{getSearchId:function(t){return c.a.get("https://front-test.beta.aviasales.ru/search").then((function(e){var s=e.data.searchId;return t.commit("updateSearchId",s),s})).catch((function(t){return console.log(t)}))},getTicketList:function(t,e){c.a.get("https://front-test.beta.aviasales.ru/tickets?searchId=".concat(e)).then((function(e){var s=e.data;return t.commit("updateTicketList",s),s})).catch((function(t){return console.log(t)}))},changeSort:function(t,e){t.commit("updateSelectSort",e)},sortTickets:function(t,e){var s=e.ticketList,i=[];i="duration"==e.key?l["a"].sortBy(s,(function(t){return Number(t.segments[0][e.key])})).filter((function(t){if(-1!==e.stops.indexOf(t.segments[0].stops.length)||-1!==e.stops.indexOf(t.segments[1].stops.length))return!0})):l["a"].sortBy(s,(function(t){return Number(t[e.key])})).filter((function(t){if(-1!==e.stops.indexOf(t.segments[0].stops.length)||-1!==e.stops.indexOf(t.segments[1].stops.length))return!0})),"desc"===e.dir&&(i=i.reverse()),t.commit("updateSorted",i)}},mutations:{updateSearchId:function(t,e){t.searchId=e},updateTicketList:function(t,e){t.ticketList=e},updateSelectSort:function(t,e){t.selectSort=e},updateSorted:function(t,e){t.sorted=e}},state:{searchId:null,ticketList:[],selectSort:"",sortRules:[{key:"price:asc",title:"Самый дешёвый",active:!1},{key:"duration:asc",title:"Самый быстрый",active:!1}],filters:{all:{id:"all",sectionText:"Все",status:!0,stops:[0,1,2,3]},sections:[{id:"without-stops",sectionText:"Без пересадок",status:!1,stops:0},{id:"one-stop",sectionText:"1 пересадка",status:!1,stops:1},{id:"two-stop",sectionText:"2 пересадки",status:!1,stops:2},{id:"three-stop",sectionText:"3 пересадки",status:!1,stops:3}]},sorted:[]},getters:{searchId:function(t){return t.searchId},ticketList:function(t){return t.ticketList},sortRules:function(t){return t.sortRules},selectSort:function(t){return t.selectSort},filters:function(t){return t.filters},sectionsWithAll:function(t){return[t.filters.all].concat(t.filters.sections)},stops:function(t,e){return e.sectionsWithAll.filter((function(t){return t.status})).map((function(t){return t.stops}))},sorted:function(t){return t.sorted}}};i["a"].use(r["a"]),i["a"].use(o.a,c.a);var f=new r["a"].Store({modules:{ticket:u}}),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"#app"}},[s("Header"),s("div",{staticClass:"content"},[s("TicketFilter"),s("div",{staticClass:"main-content"},[s("TicketTabs"),s("TicketList")],1)],1)],1)},p=[],h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header"},[i("img",{staticClass:"header__logo",attrs:{src:s("cf05")}})])}],v=(s("2f14"),s("2877")),g={},m=Object(v["a"])(g,h,_,!1,null,"73cc6da4",null),k=m.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tabs"},t._l(t.sortRules,(function(e){return s("div",{key:e.key,staticClass:"tab",class:{tab_active:e.active},on:{click:function(s){return t.setActive(e)}}},[s("p",{staticClass:"tab__text",class:{tab__text_active:e.active}},[t._v(t._s(e.title))])])})),0)},y=[],x=(s("4160"),s("45fc"),s("d3b7"),s("ac1f"),s("25f0"),s("1276"),s("159b"),{computed:{sortRules:function(){return this.$store.getters.sortRules},ticketList:function(){return this.$store.getters.ticketList},sortKey:function(){return this.$store.getters.selectSort.toString().split(":")[0]},sortDir:function(){return this.$store.getters.selectSort.toString().split(":")[1]},stops:function(){return this.$store.getters.stops}},methods:{setActive:function(t){var e=this;this.sortRules.forEach((function(t){t.active=!1}));var s=t.key;t.active=!0,this.$store.dispatch("changeSort",s).then((function(){var t=JSON.parse(JSON.stringify(e.stops)),s=function(t){return t.some((function(t){return Array.isArray(t)}))};s(t)&&(t=t[0]),e.$store.dispatch("sortTickets",{ticketList:e.ticketList.tickets,dir:e.sortDir,key:e.sortKey,stops:t})}))}}}),T=x,C=(s("1d1e"),Object(v["a"])(T,b,y,!1,null,"00ada59e",null)),$=C.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tickets"},[t.loading?s("Loader"):t._l(t.sorted,(function(t,e){return s("Ticket",{key:e,attrs:{ticket:t,index:e}})}))],2)},O=[],L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ticket"},[s("div",{staticClass:"ticket__header"},[s("div",{staticClass:"ticket__price"},[s("span",[t._v(t._s(t._f("format")(t.ticket.price)))]),s("span",[t._v("Р")])]),s("img",{attrs:{src:"http://pics.avs.io/99/36/"+t.ticket.carrier+".png"}})]),s("div",{staticClass:"ticket__segments"},t._l(t.segments,(function(e,i){return s("div",{key:i,staticClass:"ticket__segment"},[s("div",{staticClass:"ticket__info"},[s("div",{staticClass:"ticket__subtitle"},[t._v(t._s(e.origin)+" - "+t._s(e.destination))]),s("div",{staticClass:"ticket__text"},[t._v(t._s(t.setTime(e.date))+" - "+t._s(t.arrivalTime(e.date,e.duration)))])]),s("div",{staticClass:"ticket__info"},[s("div",{staticClass:"ticket__subtitle"},[t._v("В пути")]),s("div",{staticClass:"ticket__text"},[t._v(t._s(t.durationTime(e.duration)))])]),s("div",{staticClass:"ticket__info"},[s("div",{staticClass:"ticket__subtitle"},[t._v(t._s(t._f("declension")(e.stops.length)))]),t._l(e.stops,(function(i,r){return s("span",{key:r,staticClass:"ticket__text"},[t._v(t._s(i)+t._s(r<e.stops.length-1?", ":""))])}))],2)])})),0)])},w=[],j=(s("a15b"),s("b65f"),s("5319"),{props:{ticket:{type:Object,required:!1}},computed:{segments:function(){return this.ticket.segments}},filters:{declension:function(t){var e=Math.abs(t)%100,s=t%10;return 0==t?"Без пересадок":e>10&&e<20?t+" пересадок":s>1&&s<5?t+" пересадки":1==s?t+" пересадка":t+" пересадок"},format:function(t){return t+="",t=new Array(4-t.length%3).join("U")+t,t.replace(/([0-9U]{3})/g,"$1 ").replace(/U/g,"")}},methods:{durationTime:function(t){var e=Math.trunc(t/60),s=t%60;return e+"ч "+s+"м"},setTime:function(t){var e=new Date(t),s=e.getUTCHours(),i=e.getUTCMinutes();return s<10&&(s="0"+s),i<10&&(i="0"+i),s+":"+i},arrivalTime:function(t,e){var s=new Date(t),i=s.setMinutes(s.getUTCMinutes()+e);return this.setTime(i)}}}),A=j,E=(s("ad36"),Object(v["a"])(A,L,w,!1,null,"653318da",null)),I=E.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lds-ring"},[s("div"),s("div"),s("div"),s("div")])}],N=(s("74ae"),{}),D=Object(v["a"])(N,M,P,!1,null,null,null),R=D.exports,J={data:function(){return{loading:!0}},components:{Ticket:I,Loader:R},computed:{searchId:function(){return this.$store.getters.searchId},ticketList:function(){return this.$store.getters.ticketList},sorted:function(){return 0!=this.$store.getters.sorted.length?this.$store.getters.sorted:this.ticketList.tickets}},mounted:function(){var t=this;this.$store.dispatch("getSearchId").then((function(e){t.$store.dispatch("getTicketList",e).then(t.loading=!1)})).catch((function(t){return console.log(t)}))}},U=J,K=(s("33e0"),Object(v["a"])(U,S,O,!1,null,"210cfef5",null)),B=K.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"filter"},[t._m(0),i("div",{staticClass:"filter__items"},[i("div",{staticClass:"filter__item",class:{filter__item_active:t.filters.all.status}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filters.all.status,expression:"filters.all.status"}],staticClass:"filter__checkbox",attrs:{type:"checkbox",id:t.filters.all.id},domProps:{checked:Array.isArray(t.filters.all.status)?t._i(t.filters.all.status,null)>-1:t.filters.all.status},on:{change:[function(e){var s=t.filters.all.status,i=e.target,r=!!i.checked;if(Array.isArray(s)){var n=null,c=t._i(s,n);i.checked?c<0&&t.$set(t.filters.all,"status",s.concat([n])):c>-1&&t.$set(t.filters.all,"status",s.slice(0,c).concat(s.slice(c+1)))}else t.$set(t.filters.all,"status",r)},t.resetSort]}}),t.filters.all.status?i("img",{staticClass:"filter__image",attrs:{src:s("8c53")}}):i("img",{staticClass:"filter__image filter__image_active",attrs:{src:s("1569")}}),i("label",{staticClass:"filter__label",attrs:{for:t.filters.all.id}},[t._v(t._s(t.filters.all.sectionText))])]),t._l(t.filters.sections,(function(e){return i("div",{key:e.id,staticClass:"filter__item",class:{filter__item_active:e.status}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.status,expression:"section.status"}],staticClass:"filter__checkbox",attrs:{type:"checkbox",id:e.id},domProps:{checked:Array.isArray(e.status)?t._i(e.status,null)>-1:e.status},on:{change:[function(s){var i=e.status,r=s.target,n=!!r.checked;if(Array.isArray(i)){var c=null,a=t._i(i,c);r.checked?a<0&&t.$set(e,"status",i.concat([c])):a>-1&&t.$set(e,"status",i.slice(0,a).concat(i.slice(a+1)))}else t.$set(e,"status",n)},t.sortTicketByStops]}}),e.status?i("img",{staticClass:"filter__image",attrs:{src:s("8c53")}}):i("img",{staticClass:"filter__image filter__image_active",attrs:{src:s("1569")}}),i("label",{staticClass:"filter__label",attrs:{for:e.id}},[t._v(t._s(e.sectionText))])])}))],2)])},H=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"filter__title"},[s("p",[t._v("Количество пересадок")])])}],F=(s("a623"),{computed:{ticketList:function(){return this.$store.getters.ticketList},sortKey:function(){return this.$store.getters.selectSort.toString().split(":")[0]},sortDir:function(){return this.$store.getters.selectSort.toString().split(":")[1]},filters:function(){return this.$store.getters.filters},sectionsWithAll:function(){return this.$store.getters.sectionsWithAll},stops:function(){return this.$store.getters.stops}},watch:{"filters.all.status":function(t){t&&this.filters.sections.forEach((function(t){return t.status=!1}))},"filters.sections":{deep:!0,handler:function(t){t.every((function(t){return t.status}))?this.filters.all.status=!0:t.some((function(t){return t.status}))&&(this.filters.all.status=!1)}}},methods:{resetSort:function(){var t=JSON.parse(JSON.stringify(this.stops[0]));this.$store.dispatch("sortTickets",{ticketList:this.ticketList.tickets,dir:this.sortDir,key:this.sortKey,stops:t})},sortTicketByStops:function(){this.$store.dispatch("sortTickets",{ticketList:this.ticketList.tickets,dir:this.sortDir,key:this.sortKey,stops:this.stops})}}}),q=F,z=(s("47dc"),Object(v["a"])(q,W,H,!1,null,"66c3f7ac",null)),G=z.exports,Q={name:"App",components:{Header:k,TicketList:B,TicketTabs:$,TicketFilter:G}},V=Q,X=(s("034f"),Object(v["a"])(V,d,p,!1,null,null,null)),Y=X.exports;i["a"].use(l["b"]),i["a"].config.productionTip=!1,new i["a"]({store:f,render:function(t){return t(Y)}}).$mount("#app")},6781:function(t,e,s){},"74ae":function(t,e,s){"use strict";var i=s("b4ad"),r=s.n(i);r.a},"85ec":function(t,e,s){},"8c53":function(t,e,s){t.exports=s.p+"img/checkbox-active.fc4db7ee.svg"},ad36:function(t,e,s){"use strict";var i=s("42a4"),r=s.n(i);r.a},b4ad:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.c61be7a6.png"}});