"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[812],{197:function(n,t,e){e.d(t,{E3:function(){return p},Hx:function(){return x},Mc:function(){return l},Tg:function(){return o},uV:function(){return h}});var r=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org";var i="9b8f0c4ec164e6dabb7e1c13a0a2a1d6";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},146:function(n,t,e){e.d(t,{Z:function(){return l}});var r,a,c=e(689),u=e(168),i=e(444),o=e(87),s=i.ZP.ul(r||(r=(0,u.Z)(["\n  margin-top: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),p=(0,i.ZP)(o.rU)(a||(a=(0,u.Z)(["\n  font-size: 16px;\n  padding-left: 10px;\n  color: black;\n  &:hover {\n    color: orange;\n  }\n"]))),f=e(184),l=function(n){var t=n.movies,e=(0,c.TH)();return(0,f.jsx)(s,{children:t.map((function(n){var t=n.id,r=n.title;return(0,f.jsx)("li",{children:(0,f.jsx)(p,{to:"/movies/".concat(t),state:{from:e},children:r})},t)}))})}},812:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r,a=e(861),c=e(439),u=e(757),i=e.n(u),o=e(791),s=e(197),p=e(168),f=e(444).ZP.h1(r||(r=(0,p.Z)(["\n  font-size: 30px;\n"]))),l=e(146),d=e(184),h=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1];return(0,o.useEffect)((function(){function n(){return(n=(0,a.Z)(i().mark((function n(){var t,e,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Tg)();case 2:t=n.sent,e=t.results,a=e.map((function(n){return{id:n.id,title:n.title}})),r(a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f,{children:"Trending today"}),0!==e.length&&(0,d.jsx)(l.Z,{movies:e})]})}}}]);
//# sourceMappingURL=812.12a0634f.chunk.js.map