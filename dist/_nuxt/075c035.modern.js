(window.webpackJsonp=window.webpackJsonp||[]).push([[9,63],{597:function(t,e,o){var content=o(600);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("2becab96",content,!0,{sourceMap:!1})},599:function(t,e,o){"use strict";o(597)},600:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,'html[data-v-63c4ed39]{--font-secondary:"Unica One","Roboto Condensed",sans-serif;--font-roboto:"Roboto",sans-serif}h1[data-v-63c4ed39],h2[data-v-63c4ed39],h3[data-v-63c4ed39]{margin:0;color:var(--c-font-2);font-size:18px;font-weight:600;font-family:"Nunito","Roboto",sans-serif}.handler[data-v-63c4ed39]{z-index:2;position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:100%;height:16px}.handler[data-v-63c4ed39]:after{content:"";display:block;width:32px;height:4px;background:var(--c-bg-8);border-radius:4px}.content[data-v-63c4ed39]{overflow:hidden;display:grid;padding-top:16px;background:var(--c-bg-3);border-radius:20px 20px 0 0}@media (min-width:600px){.content[data-v-63c4ed39]{border-radius:16px}}.content._withHeader[data-v-63c4ed39]{grid-template-rows:minmax(-webkit-min-content,auto) minmax(50px,-webkit-min-content);grid-template-rows:minmax(min-content,auto) minmax(50px,min-content)}.header[data-v-63c4ed39]{position:relative;display:flex;align-items:center;justify-content:center;padding:4px 16px 20px;color:var(--c-font-3);font-size:22px;font-weight:700;letter-spacing:1px;font-family:"Nunito","Roboto",sans-serif}.light .header[data-v-63c4ed39]{color:var(--c-font-4)}',""]),n.locals={},t.exports=n},602:function(t,e,o){"use strict";o.r(e);var n=o(2),c=Object(n.defineComponent)({setup(){var t=Object(n.ref)("100%");return Object(n.onMounted)((()=>{t.value="".concat(document.documentElement.clientHeight,"px")})),{documentHeight:t}}}),r=(o(599),o(5)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Portal",{attrs:{to:"modal"}},[o("BaseBottomSheet",{attrs:{show:""},on:{closed:function(e){return t.$emit("closed")}},scopedSlots:t._u([{key:"handler",fn:function(t){var e=t.close;return[o("div",{staticClass:"handler"}),o("BaseBottomSheetClose",{on:{onClick:e}})]}},{key:"default",fn:function(e){var n=e.close;return[o("div",{staticClass:"content",class:{_withHeader:t.$slots.header},style:{maxHeight:t.documentHeight}},[t.$slots.header?o("div",{staticClass:"header"},[t._t("header")],2):t._e(),t._t("default",null,{close:n})],2)]}}],null,!0)})],1)}),[],!1,null,"63c4ed39",null);e.default=component.exports;installComponents(component,{BaseBottomSheetClose:o(101).default,BaseBottomSheet:o(337).default})},681:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"title":"New version available","text":"Reload the app to use new futures.","button":"Wow, great!"},"ru":{"title":"Доступа новая версия","text":"Перезагрузи приложение, чтобы использовать все новые фишки.","button":"Оки, Ура!"}}'),delete t.options._Ctor}},715:function(t,e,o){var content=o(788);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("6ead423a",content,!0,{sourceMap:!1})},787:function(t,e,o){"use strict";o(715)},788:function(t,e,o){var n=o(15)((function(i){return i[1]}));n.push([t.i,'html[data-v-7bb883bc]{--font-secondary:"Unica One","Roboto Condensed",sans-serif;--font-roboto:"Roboto",sans-serif}h1[data-v-7bb883bc],h2[data-v-7bb883bc],h3[data-v-7bb883bc]{margin:0;color:var(--c-font-2);font-size:18px;font-weight:600}.header[data-v-7bb883bc],h1[data-v-7bb883bc],h2[data-v-7bb883bc],h3[data-v-7bb883bc]{font-family:"Nunito","Roboto",sans-serif}.header[data-v-7bb883bc]{padding-bottom:10px;color:var(--c-font-3);font-size:22px;font-weight:700}.light .header[data-v-7bb883bc]{color:var(--c-font-4)}.emo[data-v-7bb883bc]{padding-top:20px;padding-bottom:26px;font-size:86px}',""]),n.locals={},t.exports=n},789:function(t,e,o){"use strict";var n=o(681),c=o.n(n);e.default=c.a},860:function(t,e,o){"use strict";o.r(e);var n=o(2),c=o(81),r={name:"AppUpdateAppModal",setup:()=>({emo:Object(n.computed)((()=>Object(c.a)(c.c)))})},d=(o(787),o(5)),l=o(789),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("TrnFormModal",{on:{closed:function(e){return t.$emit("onClose")}},scopedSlots:t._u([{key:"default",fn:function(e){e.close;return[o("div",{staticClass:"py-5 text-center lg:py-8"},[o("div",{staticClass:"emo"},[t._v(t._s(t.emo))]),o("div",{staticClass:"header"},[t._v(t._s(t.$t("title")))]),o("div",{staticClass:"pb-10"},[t._v(t._s(t.$t("text")))]),o("SharedButton",{attrs:{className:"_blue2 _text-center _maxWidth",title:t.$t("button")},on:{onClick:function(e){return t.$emit("onClose")}}})],1)]}}])})}),[],!1,null,"7bb883bc",null);"function"==typeof l.default&&Object(l.default)(component);e.default=component.exports;installComponents(component,{SharedButton:o(225).default,TrnFormModal:o(602).default})}}]);