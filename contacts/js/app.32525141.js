(function(t){function e(e){for(var a,c,o=e[0],l=e[1],r=e[2],u=0,f=[];u<o.length;u++)c=o[u],i[c]&&f.push(i[c][0]),i[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,r||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},s=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/contacts/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var r=0;r<o.length;r++)e(o[r]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"19e7":function(t,e,n){"use strict";var a=n("a065"),i=n.n(a);i.a},"1dea":function(t,e,n){},"21bb":function(t,e,n){"use strict";var a=n("4b75"),i=n.n(a);i.a},"32ec":function(t,e,n){},"4b75":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"#app"}},[n("div",{staticClass:"container"},[n("router-view"),t._m(0)],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"copyright"},[t._v("\n      Куренков Владислав. Ссылка на "),n("a",{attrs:{href:"https://github.com/WotIzLove/contacts"}},[t._v("GitHub")]),t._v(".\n    ")])}],c=(n("5c0b"),n("2877")),o={},l=Object(c["a"])(o,i,s,!1,null,null,null),r=l.exports,d=n("8c4f"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"header"},[n("h1",{staticClass:"title"},[t._v("Книга контактов")]),n("button",{staticClass:"btn btnPrimary",on:{click:function(e){t.modal=!0}}},[n("i",{staticClass:"btn__icon fa fa-plus",attrs:{"aria-hidden":"true"}}),n("span",{staticClass:"btn__txt"},[t._v(" Добавить контакт")])])]),n("div",{staticClass:"main"},[n("div",{staticClass:"length"},[t.contactList.length?n("h2",{staticClass:"length__title"},[t._v("\n        Найдено "+t._s(t._f("declension")(t.contactList.length))+"\n      ")]):n("h3",{staticClass:"length__title_empty"},[t._v("\n        Контактов не найдено\n      ")])]),n("hr"),n("div",{staticClass:"contacts"},t._l(t.contactList,function(t){return n("ContactItem",{key:t.id,attrs:{contact:t}})}),1)]),n("NewContact",{directives:[{name:"show",rawName:"v-show",value:t.modal,expression:"modal"}],on:{close:function(e){t.modal=!1}}})],1)},f=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[n("router-link",{staticClass:"contact__link",attrs:{to:/contact/+t.contact.id}},[n("div"),n("div",{staticClass:"contact__info"},[n("div",{staticClass:"contact__header"},[n("i",{staticClass:"contact__item contact__item_icon fa fa-user",attrs:{"aria-hidden":"true"}}),n("div",[t._v(t._s(t.contact.fields[0].value))])]),t._l(t.contact.fields,function(e){return n("div",{key:e.id,staticClass:"contact__item"},[n("span",{staticClass:"contact__label"},[t._v(t._s(e.label)+": ")]),n("span",{staticClass:"contact__value"},[t._v(t._s(e.value))])])})],2)]),n("i",{staticClass:"contact__trash fa fa-trash",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.handleDeleteContact(t.contact)}}})],1)},h=[],v=(n("96cf"),n("3b8d")),p={props:{contact:{type:Object,required:!0}},data:function(){return{contactList:this.$store.getters.getContactList}},methods:{handleDeleteContact:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,confirm("Вы действительно хотите удалить этот контакт?","Инфомация будет безвозвратно утеряна");case 2:if(!t.sent){t.next=4;break}this.deleteContact(e);case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),deleteContact:function(t){var e=this.contactList.indexOf(t);this.$store.commit("deleteContact",e)}}},b=p,C=(n("19e7"),Object(c["a"])(b,m,h,!1,null,"d5267156",null)),g=C.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal__wrapper",on:{click:function(e){return t.$emit("close")}}},[n("div",{staticClass:"modal__content",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"modal__header"},[n("span",{staticClass:"modal__title"}),n("span",{staticClass:"button-close",on:{click:function(e){return t.$emit("close")}}},[t._v("×")])]),n("div",{staticClass:"modal__body"},[n("div",{staticClass:"modal__label"},[t._v("Имя")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"modal__input",domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("div",{staticClass:"modal__label"},[t._v("Телефон")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"modal__input",domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),n("div",{staticClass:"modal__label"},[t._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"modal__input",domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("button",{staticClass:"modal__button btn btnPrimary",on:{click:t.addNewContact}},[t._v("\n            Добавить\n          ")])])])])])},y=[],x=(n("7f7f"),{data:function(){return{name:"",phone:"",email:""}},mounted:function(){var t=this;document.body.addEventListener("keyup",function(e){27===e.keyCode&&t.$emit("close")})},computed:{contactList:function(){return this.contactList=this.$store.getters.getContactList}},methods:{addNewContact:function(){this.$store.dispatch("addNewContact",{name:this.name,phone:this.phone,email:this.email}),this.$emit("close"),this.name="",this.phone="",this.email=""}}}),k=x,I=(n("7a97"),Object(c["a"])(k,w,y,!1,null,"44e04f64",null)),F=I.exports,$={components:{ContactItem:g,NewContact:F},data:function(){return{contactList:null,modal:!1}},created:function(){this.contactList=this.$store.getters.getContactList},filters:{declension:function(t){var e=Math.abs(t)%100,n=t%10;return 0==t?"Без пересадок":e>4&&e<20?t+" контактов":n>1&&n<5?t+" контакта":t+" контакт"}}},E=$,L=(n("21bb"),Object(c["a"])(E,u,f,!1,null,null,null)),O=L.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[t._m(0),n("div",{staticClass:"contact"},[n("div",{staticClass:"header"},[n("div",{staticClass:"header__name"},[n("i",{staticClass:"header__user fa fa-user",attrs:{"aria-hidden":"true"}}),n("span",{staticClass:"header__title title"},[t._v(" "+t._s(t.contact.id))])]),n("div",{staticClass:"options"},[n("button",{staticClass:"options__button options__button_undo",attrs:{disabled:!(this.historyIndex>0)},on:{click:t.undo}},[n("i",{staticClass:"fa fa-undo",attrs:{"aria-hidden":"true"}})]),n("button",{staticClass:"options__button options__button_redo",attrs:{disabled:!(this.historyIndex<this.contactHistory.length-1)},on:{click:t.redo}},[n("i",{staticClass:"fa fa-undo"})])])]),n("div",{staticClass:"fields"},t._l(t.contact.fields,function(t){return n("Field",{key:t.id,attrs:{field:t}})}),1),n("hr"),n("NewField"),n("div",{staticClass:"back"},[n("router-link",{staticClass:"back__link",attrs:{to:"/"}},[n("span",{staticClass:"back__txt"},[t._v("Назад")])])],1)],1)])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top"},[n("h1",{staticClass:"title title_main"},[t._v("Страница контакта")])])}],N=n("f499"),P=n.n(N),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal__wrapper",on:{click:t.handleCancelEdit}},[n("div",{staticClass:"modal__content",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"modal__header"},[n("span",{staticClass:"modal__title"}),n("span",{staticClass:"button-close",on:{click:t.handleCancelEdit}},[t._v("×")])]),n("div",{staticClass:"modal__body"},[n("div",{staticClass:"modal__label"},[t._v("Имя поля")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.field.label,expression:"field.label",modifiers:{trim:!0}}],staticClass:"modal__input",domProps:{value:t.field.label},on:{input:function(e){e.target.composing||t.$set(t.field,"label",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("div",{staticClass:"modal__label"},[t._v("Значение поля")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.field.value,expression:"field.value",modifiers:{trim:!0}}],staticClass:"modal__input",domProps:{value:t.field.value},on:{input:function(e){e.target.composing||t.$set(t.field,"value",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("button",{staticClass:"modal__button btn btnPrimary",on:{click:function(e){return t.$emit("close")}}},[t._v("\n          Изменить\n        ")])])])])])},H=[],R=(n("9955"),n("2ef0"),{props:{field:{type:Object,required:!0}},data:function(){return{startLabel:null,startValue:null,formFieldsModified:!1,formFieldsInitialState:{}}},created:function(){this.setFormFieldsInitialState()},mounted:function(){var t=this;document.body.addEventListener("keyup",function(e){27===e.keyCode&&t.$emit("close")})},methods:{handleCancelEdit:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,confirm("Вы действительно хотите закрыть редактирование?","Все несохранённые изменения будут утеряны.");case 2:if(!t.sent){t.next=4;break}this.cancelEdit();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),cancelEdit:function(){this.$emit("close"),this.resetContact()},setFormFieldsInitialState:function(){this.formFieldsInitialState=_.cloneDeep(this.field),this.formFieldsModified=!1},resetContact:function(){this.field.label=this.formFieldsInitialState.label,this.field.value=this.formFieldsInitialState.value}}}),D=R,q=(n("ca11"),Object(c["a"])(D,M,H,!1,null,"c90a9746",null)),z=q.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field"},[n("div",{staticClass:"field__values"},[n("span",{staticClass:"field__label"},[t._v(t._s(t.field.label)+": ")]),n("span",{staticClass:"field__value"},[t._v(t._s(t.field.value))])]),n("div",{staticClass:"field__icons"},[n("i",{staticClass:"field__icon contact__icon_edit fa fa-pencil",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.handleEditField(t.field.id)}}}),n("i",{staticClass:"field__icon field__icon_del fa fa-trash",attrs:{"aria-hidden":"true"},on:{click:function(e){return t.handleDeleteField(t.field.id)}}})]),t.modal?n("Edit",{attrs:{field:t.fieldActive},on:{close:function(e){t.modal=!1}}}):t._e()],1)},J=[],T=(n("20d6"),{components:{Edit:z},props:{field:{type:Object,required:!0}},data:function(){return{contact:null,contactId:null,modal:!1,fieldActive:{}}},mounted:function(){this.contactId=this.$route.params.id,this.contactId?this.contact=this.$store.getters.getContact(this.contactId):alert("Контакт не найден")},methods:{getField:function(t){var e=this.contact.fields,n=e.findIndex(function(e){return e.id===t});return e[n]},handleEditField:function(t){this.modal=!0,this.fieldActive=this.getField(t)},handleDeleteField:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,confirm("Вы действительно хотите удалить это поле?");case 2:if(!t.sent){t.next=4;break}this.$store.commit("removeField",{contactId:this.contact.id,fieldId:e});case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}}),V=T,U=(n("72a2"),Object(c["a"])(V,A,J,!1,null,"24e79eab",null)),G=U.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newField,expression:"newField"}],staticClass:"new__input",attrs:{placeholder:"Имя:Значение"},domProps:{value:t.newField},on:{input:function(e){e.target.composing||(t.newField=e.target.value)}}}),n("button",{staticClass:"new__btn btn btnPrimary btn_contact",on:{click:function(e){return t.addField(t.newField)}}},[n("span",{staticClass:"new__txt"},[t._v(" Добавить поле")])])])},B=[],K=(n("6b54"),n("06db"),n("28a5"),{data:function(){return{contactId:"",contact:{},newField:""}},mounted:function(){var t=this;this.contactId=this.$route.params.id,this.contactId?this.contact=this.$store.getters.getContact(this.contactId):alert("Контакт не найден"),document.body.addEventListener("keyup",function(e){13===e.keyCode&&t.addField(t.newField)})},methods:{addField:function(t){var e=t.toString().split(":")[0],n=t.toString().split(":")[1];this.$store.dispatch("addNewField",{contactId:this.contact.id,newLabel:e,newValue:n}),this.newField=""}}}),Q=K,X=(n("a410"),Object(c["a"])(Q,W,B,!1,null,"3bd8c22f",null)),Y=X.exports,Z={components:{Edit:z,Field:G,NewField:Y},data:function(){return{contactId:"",contact:{},contactHistory:[],historyIndex:0,watching:!0}},mounted:function(){this.contactId=this.$route.params.id,this.contactId?this.contact=this.$store.getters.getContact(this.contactId):alert("Контакт не найден")},methods:{undo:function(){this.watching=!1,this.historyIndex>0&&(this.historyIndex-=1,this.contact=this.contactHistory[this.historyIndex])},redo:function(){this.watching=!1,this.historyIndex<this.contactHistory.length-1&&(this.historyIndex+=1,this.contact=this.contactHistory[this.historyIndex])}},watch:{contact:{handler:function(t){this.watching?(this.contactHistory.push(JSON.parse(P()(t))),this.historyIndex=this.contactHistory.length-1):this.watching=!0},deep:!0}}},tt=Z,et=(n("9f44"),Object(c["a"])(tt,j,S,!1,null,"5b813859",null)),nt=et.exports;a["a"].use(d["a"]);var at=new d["a"]({routes:[{path:"/",name:"home",component:O},{path:"/contact/:id",name:"contact",component:nt}]}),it=n("2f62"),st=n("0a0d"),ct=n.n(st),ot=(n("7514"),{state:{contactList:[{id:1,fields:[{id:1,label:"Имя",value:"Гринев Арсений"},{id:2,label:"Телефон",value:"7(68)215-10-81"},{id:3,label:"Email",value:"fdddda546o@kocoks.com"}]},{id:2,fields:[{id:1,label:"Имя",value:"Мартынский Августин"},{id:2,label:"Телефон",value:"7(88)221-96-53"},{id:3,label:"Email",value:"pali@lanorthface.com"}]},{id:3,fields:[{id:1,label:"Имя",value:"Лесков Андрей"},{id:2,label:"Телефон",value:"7(428)219-07-72"},{id:3,label:"Email",value:"aelwoodb@limez.wtf"}]},{id:4,fields:[{id:1,label:"Имя",value:"Венюков Руслан"},{id:2,label:"Телефон",value:"7(988)443-42-23"},{id:3,label:"Email",value:"5imad.souf.5@limez.wtf"}]}]},mutations:{setContact:function(t,e){t.contactList=e},addContact:function(t,e){t.contactList.push(e)},deleteContact:function(t,e){t.contactList.splice(e,1)},addField:function(t,e){var n=t.contactList.find(function(t){return t.id==e.contactId}),a=n.fields;a.push(e.newField)},removeField:function(t,e){var n=t.contactList.find(function(t){return t.id==e.contactId}),a=n.fields,i=a.findIndex(function(t){return t.id===e.fieldId});a.splice(i,1)}},actions:{addNewContact:function(t,e){var n=function(){return ct()().toString(36)+Math.random().toString(36).substr(2)},a={id:n(),fields:[{id:1,label:"Имя",value:e.name},{id:2,label:"Телефон",value:e.phone},{id:3,label:"Email",value:e.email}]};t.commit("addContact",a)},addNewField:function(t,e){var n=function(){return ct()().toString(36)+Math.random().toString(36).substr(2)},a={id:n(),label:e.newLabel,value:e.newValue};t.commit("addField",{contactId:e.contactId,newField:a})}},getters:{getContactList:function(t){return t.contactList},getContact:function(t){return function(e){return t.contactList.find(function(t){return t.id==e})}}}});a["a"].use(it["a"]);var lt=new it["a"].Store({modules:{contacts:ot}});n("c1c3");a["a"].config.productionTip=!1,new a["a"]({router:at,store:lt,render:function(t){return t(r)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("b19e"),i=n.n(a);i.a},"6a5c":function(t,e,n){},"72a2":function(t,e,n){"use strict";var a=n("6a5c"),i=n.n(a);i.a},"752d":function(t,e,n){},"7a97":function(t,e,n){"use strict";var a=n("9068"),i=n.n(a);i.a},9068:function(t,e,n){},"9f44":function(t,e,n){"use strict";var a=n("1dea"),i=n.n(a);i.a},a065:function(t,e,n){},a410:function(t,e,n){"use strict";var a=n("32ec"),i=n.n(a);i.a},b19e:function(t,e,n){},c1c3:function(t,e,n){},ca11:function(t,e,n){"use strict";var a=n("752d"),i=n.n(a);i.a}});