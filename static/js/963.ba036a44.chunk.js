"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[963],{970:function(n,e,r){r.d(e,{Fg:function(){return h},HC:function(){return f},W2:function(){return p},aV:function(){return d},qm:function(){return v}});var t,o,i,c,a,s=r(168),l=r(444),u=r(87),p=l.ZP.div(t||(t=(0,s.Z)(["\n  padding: 20px;\n"]))),d=l.ZP.ul(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),f=l.ZP.li(i||(i=(0,s.Z)(["\n  font-size: 18px;\n  transition: color 250ms linear;\n  &:hover {\n    color: #0070ba;\n  }\n"]))),h=(0,l.ZP)(u.OL)(c||(c=(0,s.Z)(['\n  display: inline-flex;\n  align-items: center;\n  gap:10px;\n  color: black;\n  text-decoration: none;\n  transition: color 250ms linear;\n  &:hover,\n  &.active {\n    color: #0070ba;\n  }\n  &::before{\n    content: "";\n    width: 6px;\n    height: 6px;\n    background-color: currentColor;\n  }\n'],['\n  display: inline-flex;\n  align-items: center;\n  gap:10px;\n  color: black;\n  text-decoration: none;\n  transition: color 250ms linear;\n  &:hover,\n  &.active {\n    color: #0070ba;\n  }\n  &::before{\n    content: "\\";\n    width: 6px;\n    height: 6px;\n    background-color: currentColor;\n  }\n']))),v=l.ZP.div(a||(a=(0,s.Z)(["\n  box-shadow: 0 2px 4px #8e8e8e;\n  padding: 20px;\n"])))},963:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var t,o=r(861),i=r(439),c=r(757),a=r.n(c),s=r(791),l=r(689),u=r(48),p=r(970),d=r(168),f=r(444),h=r(87),v=["title","titleId"];function x(){return x=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},x.apply(this,arguments)}function g(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function m(n,e){var r=n.title,o=n.titleId,i=g(n,v);return s.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:e,"aria-labelledby":o},i),r?s.createElement("title",{id:o},r):null,t||(t=s.createElement("polygon",{points:"12.718 4.707 11.305 3.292 2.585 12 11.305 20.707 12.718 19.292 6.417 13 20 13 20 11 6.416 11 12.718 4.707"})))}var b,w,j,Z,y,k=s.forwardRef(m),_=(r.p,f.ZP.div(b||(b=(0,d.Z)(["\n  display: flex;\n  align-items: start;\n  margin-top: 10px;\n"])))),O=f.ZP.div(w||(w=(0,d.Z)(["\n  padding: 0 20px;\n"]))),P=f.ZP.ul(j||(j=(0,d.Z)(["\n  display: flex;\n  gap: 20px;\n  padding-left: 0;\n"]))),E=(0,f.ZP)(h.rU)(Z||(Z=(0,d.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: 1px solid #8e8e8e;\n  padding: 5px 10px;\n  border-radius: 10px;\n  background-color: #f0f0f0;\n  color: #000;\n  text-decoration: none;\n  transition: color 250ms linear, background-color 250ms linear,\n    border-color 250ms linear;\n  &:hover {\n    background-color: #0070ba;\n    color: #fff;\n    border-color: #0070ba;\n  }\n"]))),C=(0,f.ZP)(k)(y||(y=(0,d.Z)(["\nfill: currentColor;\n  }\n"]))),H=r(184),S=function(){var n,e,r=(0,l.TH)(),t=(0,s.useRef)(null!==(n=null===(e=r.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),c=(0,l.UO)().movieId,d=(0,s.useState)(null),f=(0,i.Z)(d,2),h=f[0],v=f[1];return(0,s.useEffect)((function(){(0,o.Z)(a().mark((function n(){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.Y5)(c);case 3:e=n.sent,r=e.data,v(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}),[c]),(0,H.jsx)(H.Fragment,{children:h&&(0,H.jsxs)("div",{children:[(0,H.jsxs)(p.qm,{children:[(0,H.jsxs)(E,{to:t.current,children:[(0,H.jsx)(C,{width:"20",height:"20"}),"Go back"]}),(0,H.jsxs)(_,{children:[(0,H.jsx)("img",{src:h.poster_path?"https://image.tmdb.org/t/p/original".concat(h.poster_path):"https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-14.jpg",alt:h.title,width:"300"}),(0,H.jsxs)(O,{children:[(0,H.jsxs)("h1",{children:[h.title,"(",h.release_date.slice(0,4),")"]}),(0,H.jsxs)("p",{children:["User Score ",Math.round(10*h.vote_average),"%"]}),(0,H.jsx)("h2",{children:"Overview"}),(0,H.jsx)("p",{children:h.overview}),(0,H.jsx)("h3",{children:"Genres"}),(0,H.jsx)(P,{children:h.genres.map((function(n){return(0,H.jsx)("li",{children:n.name},n.id)}))})]})]})]}),(0,H.jsxs)(p.qm,{children:[(0,H.jsx)("h3",{children:"Additional information"}),(0,H.jsxs)(p.aV,{children:[(0,H.jsx)(p.HC,{children:(0,H.jsx)(p.Fg,{to:"/movies/".concat(c,"/cast"),children:"Cast"})}),(0,H.jsx)(p.HC,{children:(0,H.jsx)(p.Fg,{to:"/movies/".concat(c,"/reviews"),children:"Reviews"})})]})]}),(0,H.jsx)(s.Suspense,{fallback:(0,H.jsx)(p.W2,{children:(0,H.jsx)("div",{children:"Loading..."})}),children:(0,H.jsx)(l.j3,{})})]})})}},48:function(n,e,r){r.d(e,{Hx:function(){return u},WK:function(){return p},Y5:function(){return s},wr:function(){return a},xc:function(){return l}});var t=r(861),o=r(757),i=r.n(o),c=r(243),a=function(){var n=(0,t.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=40e15dc62f9875135cfe2bf57a204366");case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error(n.t0.message);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=40e15dc62f9875135cfe2bf57a204366"));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error(n.t0.message);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=40e15dc62f9875135cfe2bf57a204366"));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error(n.t0.message);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=40e15dc62f9875135cfe2bf57a204366"));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error(n.t0.message);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=40e15dc62f9875135cfe2bf57a204366"));case 3:return n.abrupt("return",n.sent);case 6:throw n.prev=6,n.t0=n.catch(0),new Error(n.t0.message);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=963.ba036a44.chunk.js.map