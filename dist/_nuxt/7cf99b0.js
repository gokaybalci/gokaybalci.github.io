(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{698:function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var c=o(19),n=o(2),r=[{id:"expenses",type:0},{id:"incomes",type:1}];function l(){var t=Object(c.e)().$store,e=Object(n.computed)((function(){var e=t.getters["stat/statCurrentPeriod"];return"details"===t.state.ui.activeTabStat?0===e.total:"incomes"===t.state.ui.activeTabStat?0===e.incomes.total:"expenses"===t.state.ui.activeTabStat?0===e.expenses.total:void 0}));return{moneyTypes:r,isEmptyStat:e}}},716:function(t,e,o){"use strict";o.d(e,"a",(function(){return d}));var c=o(2),n=o(19),r=o(85),l=Object(c.ref)(!1);function d(){var t=Object(n.e)().$store,e=Object(r.a)().filterPeriodNameAllReplacedToYear;return{isShowDataLabels:l,toogleChartsView:function(){t.commit("chart/toogleChartPeriodView",{periodName:e.value}),t.dispatch("ui/saveUiView")},showDataLabels:function(){l.value=!0},hideDataLabels:function(){l.value=!1}}}},717:function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var c=o(2),n=o(19),r=Object(c.reactive)({show:{incomes:!0,expenses:!0}});function l(){var t=Object(n.e)().$store,e=Object(c.computed)((function(){return t.state.ui.activeTabStat}));function o(t,e){r.show[t]=e}return{chartState:r,toogleChart:function(t){r.show[t]=!r.show[t]},onWatch:function(){Object(c.watch)(e,(function(){switch(e.value){case"incomes":o("incomes",!0),o("expenses",!1);break;case"expenses":o("incomes",!1),o("expenses",!0);break;case"details":o("incomes",!0),o("expenses",!0)}}))}}}},745:function(t,e,o){var content=o(787);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("07205f07",content,!0,{sourceMap:!1})},786:function(t,e,o){"use strict";o(745)},787:function(t,e,o){var c=o(22)((function(i){return i[1]}));c.push([t.i,'html[data-v-c15c7b74]{--font-secondary:"Unica One","Roboto Condensed",sans-serif;--font-roboto:"Roboto",sans-serif}h1[data-v-c15c7b74],h2[data-v-c15c7b74],h3[data-v-c15c7b74]{margin:0;color:var(--c-font-2);font-size:18px;font-weight:600;font-family:"Nunito","Roboto",sans-serif}.bar[data-v-c15c7b74]{color:var(--c-font-3)}.bar[data-v-c15c7b74],.bar__btn[data-v-c15c7b74]{background:var(--c-bg-4)}.bar__btn[data-v-c15c7b74]{color:$}.bar__btn[data-v-c15c7b74]:active:not(._active),.isNotTouchDevice .bar__btn[data-v-c15c7b74]:hover:not(._active){background:var(--c-bg-6)}.periodItem[data-v-c15c7b74]{cursor:pointer;width:34px;padding:6px;color:var(--c-font-5);font-size:18px}.isNotTouchDevice .periodItem[data-v-c15c7b74]:hover,.periodItem[data-v-c15c7b74]:active{background:var(--c-bg-5)}.periodItem._active[data-v-c15c7b74]{color:var(--c-font-3)}',""]),c.locals={},t.exports=c},852:function(t,e,o){"use strict";o.r(e);var c=o(2),n=o(19),r=o(716),l=o(85),d=o(698),v=o(147),h=o(717),f=Object(c.defineComponent)({setup:function(){var t=Object(n.e)().$store,e=Object(h.a)(),o=e.chartState,f=e.toogleChart,m=Object(c.computed)((function(){return t.state.ui.activeTabStat})),w=Object(v.a)(),C=w.ui,_=w.setUI;var x=Object(d.a)().isEmptyStat,j=Object(c.computed)((function(){return t.state.chart.periods})),O=Object(l.a)().filterPeriodNameAllReplacedToYear,S=Object(r.a)(),k=S.isShowDataLabels,y=S.toogleChartsView;return{chartState:o,toogleChart:f,activeTabStat:m,toogleView:function(t){_({name:t,value:!C[t]})},periods:j,filterPeriodNameAllReplacedToYear:O,ui:C,isEmptyStat:x,isShowDataLabels:k,toogleChartsView:y}}}),m=(o(786),o(5)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex justify-between -mt-1 py-2 px-3"},[o("div",{staticClass:"bar overflow-hidden flex rounded"},[o("div",{staticClass:"periodItem",class:{_active:t.ui.showPieChart},on:{click:function(e){return t.toogleView("showPieChart")}}},[o("div",{staticClass:"mdi mdi-chart-pie"})]),o("div",{staticClass:"periodItem",class:{_active:t.ui.showCatsVerticalChart},on:{click:function(e){return t.toogleView("showCatsVerticalChart")}}},[o("div",{staticClass:"mdi mdi-poll"})]),o("div",{staticClass:"periodItem",class:{_active:t.ui.showRoundCats},on:{click:function(e){return t.toogleView("showRoundCats")}}},[o("div",{staticClass:"mdi mdi-chart-bubble"})]),o("div",{staticClass:"periodItem",class:{_active:t.ui.showCatsHorizontalList},on:{click:function(e){return t.toogleView("showCatsHorizontalList")}}},[o("div",{staticClass:"mdi mdi-chart-timeline"})])]),t.isEmptyStat?t._e():o("div",{staticClass:"bar overflow-hidden flex ml-2 rounded"},[o("div",{staticClass:"periodItem",class:{_active:t.chartState.show.incomes},on:{click:function(e){return t.toogleChart("incomes")}}},[o("div",{staticClass:"mdi mdi-arrow-down-thin-circle-outline"})]),o("div",{staticClass:"periodItem",class:{_active:t.chartState.show.expenses},on:{click:function(e){return t.toogleChart("expenses")}}},[o("div",{staticClass:"mdi mdi-arrow-up-thin-circle-outline"})]),o("div",{staticClass:"periodItem",on:{click:t.toogleChartsView}},[t.periods[t.filterPeriodNameAllReplacedToYear].grouped?o("div",{staticClass:"mdi mdi-chart-line"}):o("div",{staticClass:"mdi mdi-chart-bar"})]),o("div",{staticClass:"periodItem",on:{click:function(e){t.isShowDataLabels=!t.isShowDataLabels}}},[o("div",{staticClass:"mdi mdi-subtitles-outline"})])])])}),[],!1,null,"c15c7b74",null);e.default=component.exports}}]);