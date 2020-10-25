(function(t){function e(e){for(var o,s,a=e[0],u=e[1],c=e[2],d=0,f=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"09ab":function(t,e,n){var o={"./1.ogg":"e985","./2.ogg":"c5e7","./3.ogg":"3135","./4.ogg":"edf5"};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=r,t.exports=i,i.id="09ab"},3135:function(t,e,n){t.exports=n.p+"media/3.7d29331d.ogg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main",{staticClass:"game"},[n("div",{staticClass:"container"},[n("div",{staticClass:"game-inner"},[n("h1",{staticClass:"game__title"},[t._v("Simon Says")]),n("div",{staticClass:"game"},[n("div",{staticClass:"circle"},t._l(t.buttons,(function(e){return n("button",{key:e.id,class:["button","circle__button",{"circle__button--active":e.active}],attrs:{value:e.id},on:{click:function(n){return t.buttonClickHandler(e.id)}}})})),0),n("aside",{staticClass:"controls"},[n("h2",{staticClass:"controls__title"},[t._v("Раунд: "+t._s(t.rounds))]),n("button",{staticClass:"button controls__button",on:{click:t.start}},[t._v(" Start ")]),t.lastRound?n("h3",[t._v(" Вы проиграли после "+t._s(t.lastRound)+" раунда ")]):t._e(),n("h2",{staticClass:"controls__title"},[t._v("Уровень сложности:")]),n("div",{staticClass:"controls__radio-group"},t._l(t.options,(function(e,o){return n("label",{key:e.id,staticClass:"controls__label",attrs:{for:"input-"+e.id}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedOption,expression:"selectedOption"}],staticClass:"controls__radio",attrs:{id:"input-"+e.id,type:"radio"},domProps:{value:o,checked:t._q(t.selectedOption,o)},on:{change:function(e){t.selectedOption=o}}}),t._v(" "+t._s(e.label)+" ")])})),0)])])])])])])},r=[],s=(n("a623"),n("7db0"),n("a15b"),n("d81d"),n("fb6a"),n("2909")),a={name:"App",data:function(){return{rounds:1,lastRound:null,options:[{id:1,delay:1.5,label:"Легкий"},{id:2,delay:1,label:"Средний"},{id:3,delay:.4,label:"Сложный"}],selectedOption:0,buttons:[{id:1,active:!1},{id:2,active:!1},{id:3,active:!1},{id:4,active:!1}],game:[],user:[]}},computed:{delay:function(){return this.options[this.selectedOption].delay},userString:function(){return this.user.join("").slice(0,this.user.length)},gameString:function(){return this.game.join("").slice(0,this.user.length)},gameEnd:function(){return this.userString!==this.gameString},correctSequence:function(){var t=[this.userString===this.gameString,this.user.length===this.game.length,0!==this.user.length,0!==this.game.length];return t.every((function(t){return t}))}},methods:{buttonClickHandler:function(t){this.user.push(t),this.showButtonWithDelay(t),this.playSound(t)},playSound:function(t){var e=new Audio(n("09ab")("./".concat(t,".ogg")));e.play()},clear:function(){this.rounds=1,this.lastRound=null,this.user=[],this.game=[]},start:function(){this.clear(),this.add(),this.showSequence()},add:function(){var t=Math.floor(4*Math.random())+1;this.game.push(t)},toggleButton:function(t,e){var n=this.buttons.find((function(e){return e.id===t}));n.active=e},showButtonWithDelay:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;this.toggleButton(t,!0),setTimeout((function(){e.toggleButton(t,!1)}),n)},showSequence:function(){var t=this,e=Object(s["a"])(this.game),n=1e3*this.delay;e.map((function(e,o){setTimeout((function(){t.showButtonWithDelay(e),t.playSound(e)}),n*o)}))}},watch:{gameEnd:function(t){t&&(this.lastRound=this.rounds)},correctSequence:function(t){var e=this;t&&(this.add(),this.user=[],this.rounds+=1,setTimeout((function(){e.showSequence()}),1e3))}}},u=a,c=(n("5c0b"),n("2877")),l=Object(c["a"])(u,i,r,!1,null,null,null),d=l.exports;o["a"].config.productionTip=!1,o["a"].config.devtools=!0,new o["a"]({render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("9c0c"),i=n.n(o);i.a},"9c0c":function(t,e,n){},c5e7:function(t,e,n){t.exports=n.p+"media/2.63d780a9.ogg"},e985:function(t,e,n){t.exports=n.p+"media/1.76fd3fb8.ogg"},edf5:function(t,e,n){t.exports=n.p+"media/4.ab928396.ogg"}});
//# sourceMappingURL=app.8b5af37d.js.map