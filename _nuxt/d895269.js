(window.webpackJsonp=window.webpackJsonp||[]).push([[15,4,5],{281:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("8d203db0",content,!0,{sourceMap:!1})},283:function(t,e,n){var content=n(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("c09d40a4",content,!0,{sourceMap:!1})},284:function(t,e,n){"use strict";e.decode=e.parse=n(285),e.encode=e.stringify=n(286)},285:function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,c){e=e||"&",n=n||"=";var l={};if("string"!=typeof t||0===t.length)return l;var m=/\+/g;t=t.split(e);var d=1e3;c&&"number"==typeof c.maxKeys&&(d=c.maxKeys);var f=t.length;d>0&&f>d&&(f=d);for(var i=0;i<f;++i){var _,v,h,x,y=t[i].replace(m,"%20"),w=y.indexOf(n);w>=0?(_=y.substr(0,w),v=y.substr(w+1)):(_=y,v=""),h=decodeURIComponent(_),x=decodeURIComponent(v),r(l,h)?o(l[h])?l[h].push(x):l[h]=[l[h],x]:l[h]=x}return l};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},286:function(t,e,n){"use strict";var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,l){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"==typeof t?map(c(t),(function(c){var l=encodeURIComponent(r(c))+n;return o(t[c])?map(t[c],(function(t){return l+encodeURIComponent(r(t))})).join(e):l+encodeURIComponent(r(t[c]))})).join(e):l?encodeURIComponent(r(l))+n+encodeURIComponent(r(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function map(t,e){if(t.map)return t.map(e);for(var n=[],i=0;i<t.length;i++)n.push(e(t[i],i));return n}var c=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},287:function(t,e,n){"use strict";n(281)},288:function(t,e,n){var r=n(25)(!1);r.push([t.i,'.bottom .container[data-v-465889b4]{display:flex;justify-content:center}.bottom__get-notified[data-v-465889b4]{display:block;margin-bottom:var(--spacing-6);color:var(--white);text-align:center}.bottom__state[data-v-465889b4]{margin:var(--spacing-7) auto}.bottom__state__success[data-v-465889b4]{color:var(--gray-600)}.bottom__state__error[data-v-465889b4]{color:#ff4c52}.bottom__form[data-v-465889b4]{margin:var(--spacing-7) auto;max-width:$max-width[ "7" ];width:100%}.bottom__form__input[data-v-465889b4]{display:flex;position:relative;align-items:center;justify-content:center}.bottom__form__input__button[data-v-465889b4]{position:absolute;right:0;width:4rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:none;border:none;padding:var(--spacing-5);border-radius:$border-radius-3;cursor:pointer;outline:none}.bottom__form__input__button:focus .bottom__form__input__icon[data-v-465889b4],.bottom__form__input__button:hover .bottom__form__input__icon[data-v-465889b4]{fill:var(--white);transform:scale(1.05)}.bottom__form__input__icon[data-v-465889b4]{display:block;height:2rem;fill:var(--gray-600);transition:fill .15s ease-out,transform .15s ease-out}.bottom__form__input__input[data-v-465889b4]{--border-opacity:1;border-color:#fff1f1;border-color:rgba(255,241,241,var(--border-opacity));border-width:1px;padding:.75rem;margin-top:.5rem;margin-bottom:.5rem;outline:none;transition:color .15s ease-out,background .15s ease-out}.bottom__form__input__input[data-v-465889b4]::-moz-placeholder{color:var(--gray-600);-moz-transition:color .15s ease-out;transition:color .15s ease-out}.bottom__form__input__input[data-v-465889b4]:-ms-input-placeholder{color:var(--gray-600);-ms-transition:color .15s ease-out;transition:color .15s ease-out}.bottom__form__input__input[data-v-465889b4]::placeholder{color:var(--gray-600);transition:color .15s ease-out}.bottom__footnote[data-v-465889b4]{color:var(--gray-600);text-align:center;margin-top:var(--spacing-5)}@media screen and (max-width:576px){.bottom__form__input__icon[data-v-465889b4]{height:1.5rem}}',""]),t.exports=r},289:function(t,e,n){"use strict";n.r(e);n(41),n(33),n(40),n(57),n(34),n(58);var r=n(23),o=(n(14),n(284)),c=n.n(o);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{email:null,state:"default",url:"https://app.mailerlite.com/webforms/submit/y2i9q3",formData:{callback:"jQuery183003200065485233239_1594158714190","ml-submit":"1",ajax:"1",guid:"6ca22b31-4124-e926-cf4f-272ff9f44ec3",_:"1594856022563"}}},mounted:function(){var t=this;this.$nextTick((function(){t.$refs.email.focus()}))},methods:{actionSubmitEmail:function(){var t=this,e={method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:c.a.stringify(m({"fields[email]":this.email},this.formData))};fetch(this.url,e).then((function(){t.state="success"})).catch((function(){t.state="error"}))}}},f=(n(287),n(9)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    fixed\n    top-0\n    left-0\n    right-0\n    bottom-0\n    flex\n    items-center\n    justify-center\n    bg-theme\n    z-40\n  "},[n("div",{staticClass:"fixed top-0 left-0 m-6 uppercase cursor-pointer hover:text-red",on:{click:function(e){return t.$emit("close")}}},[t._v("\n    Close\n  ")]),t._v(" "),n("div",{staticClass:"tm-section-container section-container bottom"},[n("div",{staticClass:"container"},[n("transition",{attrs:{name:"fade",mode:"out-in"}},["success"===t.state?n("div",{key:"success",staticClass:"bottom__state tm-rf0 tm-lh-copy"},[n("div",{staticClass:"bottom__get-notified"},[t._v("Almost there…")]),t._v(" "),n("div",{staticClass:"bottom__state__success"},[t._v("\n            Check your inbox and confirm your email address\n          ")])]):"error"===t.state?n("div",{key:"error",staticClass:"bottom__state tm-rf0 tm-lh-copy"},[n("div",{staticClass:"bottom__get-notified"},[t._v("Something went wrong")]),t._v(" "),n("div",{staticClass:"bottom__state__error"},[t._v("\n            Uh oh! Refresh the page and try again.\n          ")])]):n("div",{key:"default",staticClass:"bottom__form"},[n("label",{staticClass:"bottom__get-notified tm-rf1 tm-bold tm-lh-copy",attrs:{for:"field-email"}},[t._v("\n            Get Cosmos updates\n          ")]),t._v(" "),n("form",{attrs:{action:t.url,method:"POST",target:"_blank",rel:"noreferrer noopener"},on:{submit:function(e){return e.preventDefault(),t.actionSubmitEmail.apply(null,arguments)}}},[n("div",{staticClass:"bottom__form__input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],ref:"email",staticClass:"\n                  bottom__form__input__input\n                  w-64\n                  bg-theme\n                  text-theme\n                  border-theme\n                ",attrs:{id:"field-email",name:"fields[email]",type:"email",placeholder:"Your email",required:"required"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("button",{staticClass:"text-theme border border-theme p-3 border-l-0",attrs:{type:"submit"}},[t._v("\n                OK\n              ")])])]),t._v(" "),n("p",{staticClass:"bottom__footnote tm-measure tm-rf-1 tm-lh-copy"},[t._v("\n            Zero spam.\n            "),n("a",{attrs:{href:"https://cosmos.network/privacy"}},[t._v("Privacy policy")])])])])],1)])])}),[],!1,null,"465889b4",null);e.default=component.exports},290:function(t,e,n){t.exports=n.p+"img/illu-3.918b617.svg"},291:function(t,e,n){"use strict";n(283)},292:function(t,e,n){var r=n(25)(!1);r.push([t.i,".box-tall[data-v-625b9efe]{height:180px}.speech-bubble[data-v-625b9efe]:not(:first-child){margin-left:-1px}.box-link[data-v-625b9efe]{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}#app .arrow[data-v-625b9efe]{filter:invert(1)}#app .container[data-v-625b9efe]:after{border-color:#fff1f1 transparent transparent #fff1f1}#app .container[data-v-625b9efe]:before,#app.darkmode .container[data-v-625b9efe]:after{border-color:#323232 transparent transparent #323232}#app.darkmode .container[data-v-625b9efe]:before{border-color:#fff1f1 transparent transparent #fff1f1}",""]),t.exports=r},296:function(t,e,n){"use strict";n.r(e);var r={components:{NewsletterForm:n(289).default},props:{content:{type:Object,required:!0}},data:function(){return{showForm:!1}},computed:{isNarrow:function(){return window.innerWidth<768}}},o=(n(291),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-auto max-w-7xl"},[n("div",{staticClass:"\n      flex flex-col\n      md:flex-row\n      justify-center\n      mx-auto\n      max-w-7xl\n      px-8\n      md:px-12\n    "},[t._l(t.content.community,(function(e,r){return n("div",{key:r,staticClass:"w-full md:w-1/3 speech-bubble",class:{"pt-16 md:pt-16":1===r,"pt-16 md:pt-32":2===r}},[n("div",{staticClass:"container border border-gray box-tall"},[n("a",{staticClass:"relative flex w-full justify-between",attrs:{href:e.link,target:"_blank"}},[n("div",{staticClass:"p-6"},[n("div",{staticClass:"uppercase leading-tight mb-8 text-xl"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),n("div",[t._v(t._s(e.subtitle))])]),t._v(" "),n("div",[n("span",{staticClass:"\n                box-link\n                w-16\n                h-16\n                flex\n                justify-center\n                items-center\n                bg-contrast\n              "},[n("Arrow")],1)])])])])})),t._v(" "),n("div",{staticClass:"w-full md:w-1/3 speech-bubble pt-16 md:pt-32"},[n("div",{staticClass:"container border border-gray box-tall relative cursor-pointer"},[n("div",{staticClass:"p-6 hover:text-red",on:{click:function(e){t.showForm=!0}}},[n("div",{staticClass:"uppercase leading-tight mb-8 text-xl"},[t._v("\n            Ecosystem Updates\n          ")]),t._v(" "),n("div",[t._v("Sign up to the newsletter")])]),t._v(" "),n("div",{staticClass:"absolute top-0 right-0"},[n("span",{staticClass:"\n              box-link\n              w-16\n              h-16\n              flex\n              justify-center\n              items-center\n              bg-contrast\n            "},[n("Arrow")],1)])])])],2),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.showForm?n("NewsletterForm",{on:{close:function(e){t.showForm=!1}}}):t._e()],1)],1)}),[],!1,null,"625b9efe",null);e.default=component.exports},308:function(t,e,n){t.exports=n.p+"img/IBCgraphic.bcf7563.png"},331:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("h1",{staticClass:"mb-16 heading mb:mb-32"},[n("div",{staticClass:"leading-normal md:leading-tight"}),t._v(" "),n("div",{staticClass:"flex flex-col my-16 md:flex-row"}),t._v(" "),n("div",{staticClass:"inline-block leading-normal text-gradient md:leading-tight"},[t._v("\n            Inter‑Blockchain"),n("br"),t._v("\n            Communication Protocol\n          ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative max-w-6xl px-8 mx-auto mt-16 md:px-12"},[r("div",{staticClass:"flex flex-col my-16 md:flex-row"}),t._v(" "),r("h1",{staticClass:"mb-16 heading mb:mb-32"},[r("div",{staticClass:"inline-block leading-normal text-gradient"},[t._v("\n        Fungible Token Packet Lifecycle\n      ")])]),t._v(" "),r("img",{staticClass:"w-full",attrs:{src:n(308)}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"relative max-w-6xl px-8 py-24 mx-auto md:px-12"},[e("img",{staticClass:"w-full",attrs:{src:n(290)}})])}],o=n(7),c=(n(39),{components:{Join:n(296).default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("index/banner").fetch();case 3:return r=e.sent,e.next=6,n("index/intro").fetch();case 6:return o=e.sent,e.next=9,n("community/content").fetch();case 9:return c=e.sent,e.next=12,n("news").only(["title","description","link"]).limit(4).sortBy("date","desc").fetch();case 12:return l=e.sent,e.abrupt("return",{banner:r,page:o,news:l,community:c});case 14:case"end":return e.stop()}}),e)})))()}}),l=n(9),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("div",{staticClass:"relative max-w-6xl px-4 mx-auto md:px-12"},[n("Logo",{staticClass:"w-full md:my-12 md:w-auto"}),t._v(" "),t._m(0),t._v(" "),n("nuxt-content",{staticClass:"max-w-2xl leading-relaxed text-md md:text-xl",attrs:{document:t.page}})],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"relative max-w-6xl mx-auto"},[n("Join",{attrs:{content:t.community}})],1)])}),r,!1,null,null,null);e.default=component.exports}}]);