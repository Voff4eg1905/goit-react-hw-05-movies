"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{197:function(n,t,e){e.d(t,{E3:function(){return p},Hx:function(){return v},Mc:function(){return d},Tg:function(){return o},uV:function(){return l}});var r=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org";var i="9b8f0c4ec164e6dabb7e1c13a0a2a1d6";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/3/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a,c,u,i,o=e(861),s=e(439),p=e(757),f=e.n(p),d=e(791),h=e(689),l=e(197),x=e(168),v=e(444),m=v.ZP.section(r||(r=(0,x.Z)(["\n  max-width: 1200px;\n  padding: 20px 0;\n  margin: 0 auto;\n"]))),Z=v.ZP.ul(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),y=v.ZP.li(c||(c=(0,x.Z)(["\n  list-style: none;\n  padding: 12px 8px;\n  border: 1px solid black;\n  border-radius: 5px;\n"]))),w=(v.ZP.div(u||(u=(0,x.Z)(["\n  padding: 20px 12px;\n  text-align: center;\n"]))),v.ZP.h3(i||(i=(0,x.Z)(["\n  margin-bottom: 12px;\n"])))),k=e(184),g=function(){var n=(0,h.UO)().movieID,t=(0,d.useState)([]),e=(0,s.Z)(t,2),r=e[0],a=e[1];return(0,d.useEffect)((function(){function t(){return t=(0,o.Z)(f().mark((function n(t){var e,r,c;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.Hx)(t);case 2:e=n.sent,r=e.results,console.log(t),c=r.map((function(n){return{id:n.id,author:n.author,content:n.content}})),a(c);case 7:case"end":return n.stop()}}),n)}))),t.apply(this,arguments)}!function(n){t.apply(this,arguments)}(n)}),[n]),(0,k.jsx)(m,{children:0!==r.length?(0,k.jsx)(Z,{children:r.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,k.jsxs)(y,{children:[(0,k.jsxs)(w,{children:["Author: ",e]}),(0,k.jsx)("p",{children:r})]},t)}))}):(0,k.jsx)("p",{children:"We don't have any reviews on this movie."})})}}}]);
//# sourceMappingURL=387.8d2e64d3.chunk.js.map