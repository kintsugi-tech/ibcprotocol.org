(window.webpackJsonp=window.webpackJsonp||[]).push([[11,10],{273:function(t,e,r){var content=r(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("0764daec",content,!0,{sourceMap:!1})},274:function(t,e,r){"use strict";var n=r(10),l=r(2),c=r(100),o=r(16),f=r(13),d=r(189),m=r(99),v=r(188),x=r(3),_=r(74).f,h=r(31).f,N=r(15).f,w=r(275),I=r(190).trim,C="Number",E=l.Number,y=E.prototype,A=function(t){var e=v(t,"number");return"bigint"==typeof e?e:T(e)},T=function(t){var e,r,n,l,c,o,f,code,d=v(t,"number");if(m(d))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(43===(e=(d=I(d)).charCodeAt(0))||45===e){if(88===(r=d.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+d}for(o=(c=d.slice(2)).length,f=0;f<o;f++)if((code=c.charCodeAt(f))<48||code>l)return NaN;return parseInt(c,n)}return+d};if(c(C,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var k,O=function(t){var e=arguments.length<1?0:E(A(t)),r=this;return r instanceof O&&x((function(){w(r)}))?d(Object(e),r,O):e},S=n?_(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;S.length>F;F++)f(E,k=S[F])&&!f(O,k)&&N(O,k,h(E,k));O.prototype=y,y.constructor=O,o(l,C,O)}},275:function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},276:function(t,e,r){"use strict";r(273)},277:function(t,e,r){var n=r(29)(!1);n.push([t.i,".title-line[data-v-69eeb4df]{width:90px;height:1px}",""]),t.exports=n},279:function(t,e,r){"use strict";r.r(e);r(274);var n={props:{index:{type:Number,default:0}},computed:{classes:function(){return this.$props.index%4==0||this.$props.index%4==3?"bg-gradientRed":(this.$props.index,"bg-gradientPurple")}}},l=(r(276),r(12)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"title-line mb-4",class:t.classes})}),[],!1,null,"69eeb4df",null);e.default=component.exports},323:function(t,e,r){"use strict";r.r(e);var n=r(7),l=(r(38),{components:{TitleLine:r(279).default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("implementations/applications").fetch();case 3:return n=e.sent,e.abrupt("return",{page:n});case 5:case"end":return e.stop()}}),e)})))()}}),c=r(12),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"max-w-6xl mx-auto px-4 md:px-8"},[r("div",{staticClass:"flex flex-col my-16 md:flex-row"}),t._v(" "),r("div",{staticClass:"-mt-16 md:-mt-32"},[r("h3",{staticClass:"heading-sm mb-6"},[t._v("IBC Applications")]),t._v(" "),r("div",{staticClass:"flex flex-col my-5 md:flex-row"}),t._v(" "),r("div",{staticClass:"flex flex-wrap"},t._l(t.page.public,(function(e,n){return r("div",{key:e.slug,staticClass:"w-full md:w-1/2 pr-0 md:pr-16 mb-12 md:mb-0",class:{"opacity-25":null===e.value}},[r("Title-Line",{attrs:{index:n}}),t._v(" "),r("a",{staticClass:"relative flex w-full justify-between",attrs:{href:e.link,target:"_blank"}},[r("h2",{staticClass:"text-lg md:text-2xl mb-3"},[t._v(t._s(e.title))])]),t._v(" "),e.description?r("p",[t._v(t._s(e.description))]):t._e(),t._v(" "),r("br"),t._v(" "),r("br")],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);