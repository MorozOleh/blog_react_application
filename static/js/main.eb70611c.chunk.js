(this["webpackJsonpblog-react-aplictation"]=this["webpackJsonpblog-react-aplictation"]||[]).push([[0],{65:function(t,e,n){},91:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(19),a=n.n(c),o=n(36),s=n(23),i=n(20),u=n(51),p=n(52),l=n(40),d="posts/GET",b={fetchedPosts:[]},f=Object(i.combineReducers)({postReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(l.a)(Object(l.a)({},t),{},{fetchedPosts:e.payload});default:return t}}}),j=Object(i.createStore)(f,Object(u.composeWithDevTools)(Object(i.applyMiddleware)(p.a))),h=(n(65),n(112)),O=n(117),x=n(53),v=n.n(x),m=n(116),y=n(114),g=n(115),w=n(16),k=n.n(w),N=n(22),S=n(32),B=n.n(S),E="https://bloggy-api.herokuapp.com/posts",I=function(){var t=Object(N.a)(k.a.mark((function t(){var e,n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.get(E);case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=function(){return I()},R=function(){var t=Object(N.a)(k.a.mark((function t(e){var n,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.delete("".concat(E,"/").concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=function(t){return R(t)};var J=n(7),T=Object(h.a)((function(t){return{root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12},item:{listStyle:"none"},button:{margin:t.spacing(1)}}}));function W(t){var e=t.title,n=t.body,r=t.id,c=Object(s.b)(),a=T();return Object(J.jsx)("li",{className:a.item,children:Object(J.jsx)(O.a,{className:a.root,variant:"outlined",children:Object(J.jsxs)(y.a,{children:[Object(J.jsx)(g.a,{className:a.title,color:"textSecondary",gutterBottom:!0,children:e}),Object(J.jsx)(g.a,{className:a.pos,color:"textSecondary",children:n}),Object(J.jsx)(m.a,{variant:"contained",color:"secondary",className:a.button,startIcon:Object(J.jsx)(v.a,{}),onClick:function(){return c(function(t){return function(){var e=Object(N.a)(k.a.mark((function e(n){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:return e.next=4,P();case 4:r=e.sent,n({type:d,payload:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(r))},children:"Delete"})]})})})}var z=function(){var t=Object(s.b)(),e=Object(s.c)((function(t){return t.postReducer.fetchedPosts}));return console.log(e),Object(r.useEffect)((function(){return t(function(){var t=Object(N.a)(k.a.mark((function t(e){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:n=t.sent,e({type:d,payload:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[]),Object(J.jsx)("ul",{children:e.map((function(t){return Object(J.jsx)(W,{title:t.title,body:t.body,id:t.id},t.id)}))})},C=n(4);var G=function(){return Object(J.jsx)(C.a,{exact:!0,path:"/:postId?",component:z})};a.a.render(Object(J.jsx)(s.a,{store:j,children:Object(J.jsx)(o.a,{children:Object(J.jsx)(G,{})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.eb70611c.chunk.js.map