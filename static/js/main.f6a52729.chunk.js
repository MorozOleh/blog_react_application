(this["webpackJsonpblog-react-aplictation"]=this["webpackJsonpblog-react-aplictation"]||[]).push([[0],{119:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(11),c=n.n(a),o=n(28),s=n(18),i=n(29),u=n(77),l=n(19),d="posts/GET",p="posts/GET_COMMENTS",b="comment/GET_POST_COMMENTS",j="post/GET_POST",f="modal/SHOW_MODAL",m="modal/HIDE_MODAL",h={fetchedPosts:[]},O={hidden:!1},x={fetchedComments:[]},v=Object(i.combineReducers)({postsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{fetchedPosts:t.payload});case j:return Object(l.a)(Object(l.a)({},e),{},{fetchedPosts:e.fetchedPosts.filter((function(e){return e.id===t.payload}))});default:return e}},modalReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{hidden:!0};case m:return{hidden:!1};default:return e}},commentsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(l.a)(Object(l.a)({},e),{},{fetchedComments:t.payload});case b:return Object(l.a)(Object(l.a)({},e),{},{fetchedComments:e.fetchedComments.filter((function(e){return e.postId===t.payload}))});default:return e}}}),y=n(78),g=Object(i.createStore)(v,Object(u.composeWithDevTools)(Object(i.applyMiddleware)(y.a))),w=(n(96),n(13)),k=n(154),S=n(8),C=n.n(S),N=n(15),I=n(22),T=n.n(I),R="https://bloggy-api.herokuapp.com/posts",E=function(){var e=Object(N.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get(R);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){return E()},_=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",T.a.delete("".concat(R,"/").concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(e){return _(e)},M=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",T.a.delete("".concat("https://bloggy-api.herokuapp.com/comments","/").concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){return M(e)},F=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",T.a.post(R,Object(l.a)({},t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(e){return F(e)},A=function(){var e=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",T.a.post("https://bloggy-api.herokuapp.com/comments",Object(l.a)({},t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(e){return A(e)},G=function(){var e=Object(N.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://bloggy-api.herokuapp.com/comments");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){return G()};function U(){return function(){var e=Object(N.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:n=e.sent,t({type:d,payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function H(){return{type:f}}var J=n(163),V=n(60),q=n(162),K=n(79),Q=n.n(K),X=n(123),Y=n(3),Z=Object(k.a)((function(e){return{root:{background:"white",padding:50,borderRadius:15,"& .MuiTextField-root":{margin:e.spacing(1),width:500}},button:{display:"flex",margin:"0 auto"}}}));function $(){var e=Object(w.g)(),t=new URLSearchParams(e.search).get("_embed"),n=Object(w.h)(),a=Object(s.b)(),c=Object(r.useState)(""),o=Object(V.a)(c,2),i=o[0],u=o[1],l=Object(r.useState)(""),p=Object(V.a)(l,2),b=p[0],j=p[1],f=Z(),h=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"title":u(r);break;case"body":j(r);break;default:return}};return Object(Y.jsxs)("form",{className:f.root,noValidate:!0,autoComplete:"off",onSubmit:function(e){var r,c;(e.preventDefault(),a({type:m}),j(""),t)?a((r={postId:+n.postId,body:b},function(){var e=Object(N.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(r);case 2:return e.next=4,W();case 4:n=e.sent,t({type:d,payload:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):(a((c={title:i,body:b},function(){var e=Object(N.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(c);case 2:return e.next=4,P();case 4:n=e.sent,t({type:d,payload:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),u(""))},children:[!t&&Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("div",{children:Object(Y.jsx)(q.a,{label:"Type your title",id:"filled-size-normal",value:i,name:"title",variant:"filled",onChange:h})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(q.a,{label:"Type here",id:"filled-size-normal",value:b,name:"body",variant:"filled",onChange:h})})]}),t&&Object(Y.jsx)("div",{children:Object(Y.jsx)(q.a,{label:"Type comment",id:"filled-size-normal",value:b,name:"body",variant:"filled",onChange:h})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(X.a,{className:f.button,variant:"contained",color:"primary",size:"large",type:"submit",startIcon:Object(Y.jsx)(Q.a,{}),children:"Save"})})]})}var ee=Object(k.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function te(){var e=ee(),t=Object(s.c)((function(e){return e.modalReducer.hidden}));return Object(Y.jsx)("div",{children:Object(Y.jsx)(J.a,{className:e.backdrop,open:t,children:Object(Y.jsx)($,{})})})}var ne=n(161),re=n(158),ae=n(55),ce=n.n(ae),oe=n(159),se=n(160),ie=Object(k.a)((function(e){return{root:{minWidth:275},wrapper:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing(1)}},title:{fontSize:14},pos:{marginBottom:12},item:{listStyle:"none"},button:{margin:e.spacing(1)}}}));function ue(){var e=ie(),t=Object(w.f)(),n=Object(s.b)(),a=Object(w.h)();Object(r.useEffect)((function(){return n((e=+a.postId,{type:b,payload:e}));var e}),[]);var c=Object(s.c)((function(e){return e.commentsReducer.fetchedComments}));return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("ul",{children:c.map((function(t){return Object(Y.jsx)("li",{className:e.item,children:Object(Y.jsx)(re.a,{className:e.root,variant:"outlined",children:Object(Y.jsxs)(oe.a,{children:[Object(Y.jsx)(se.a,{className:e.pos,color:"textSecondary",children:t.body}),Object(Y.jsx)(X.a,{variant:"contained",color:"secondary",className:e.button,startIcon:Object(Y.jsx)(ce.a,{}),onClick:function(){return n(function(e){var t=e.id,n=e.postId;return function(){var e=Object(N.a)(C.a.mark((function e(r){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:return e.next=4,W();case 4:a=e.sent,r({type:p,payload:a}),r({type:b,payload:n});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({id:t.id,postId:+a.postId}))},children:"Delete"})]})})},t.id)}))}),Object(Y.jsx)("div",{className:e.wrapper,children:Object(Y.jsxs)(ne.a,{size:"large",color:"primary","aria-label":"large outlined primary button group",children:[Object(Y.jsx)(X.a,{onClick:function(){return n(H())},children:"Add new comment"}),Object(Y.jsx)(X.a,{onClick:function(){t.push("/"),n(U())},children:"Main page"})]})}),Object(Y.jsx)(te,{})]})}var le=Object(k.a)((function(e){return{root:{minWidth:275},title:{fontSize:14},pos:{marginBottom:12},item:{listStyle:"none"},button:{margin:e.spacing(1)}}}));function de(e){var t=e.title,n=e.body,r=e.id,a=Object(w.g)(),c=new URLSearchParams(a.search).get("_embed"),i=Object(s.b)(),u=le();return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("li",{className:u.item,children:Object(Y.jsx)(re.a,{className:u.root,variant:"outlined",children:Object(Y.jsxs)(oe.a,{children:[Object(Y.jsx)(se.a,{className:u.title,color:"textSecondary",gutterBottom:!0,children:t}),Object(Y.jsx)(se.a,{className:u.pos,color:"textSecondary",children:n}),Object(Y.jsx)(X.a,{variant:"contained",color:"secondary",className:u.button,startIcon:Object(Y.jsx)(ce.a,{}),onClick:function(){return i(function(e){return function(){var t=Object(N.a)(C.a.mark((function t(n){var r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(e);case 2:return t.next=4,P();case 4:r=t.sent,n({type:d,payload:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(r))},children:"Delete"}),Object(Y.jsx)(o.b,{to:"/".concat(r,"?_embed=comments"),onClick:function(){i(function(e){return{type:j,payload:e}}(r))},children:"Comments"})]})})}),c&&Object(Y.jsx)(ue,{})]})}var pe=Object(k.a)({button:{margin:"20px auto 0",display:"block"},list:{margin:0}});var be=function(){var e=Object(s.b)(),t=pe(),n=Object(s.c)((function(e){return e.postsReducer.fetchedPosts})),a=Object(w.g)(),c=new URLSearchParams(a.search).get("_embed");return Object(r.useEffect)((function(){e(U()),e(function(){var e=Object(N.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:n=e.sent,t({type:p,payload:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),console.log("posts"),Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("ul",{className:t.list,children:n.map((function(e){return Object(Y.jsx)(de,{title:e.title,body:e.body,id:e.id},e.id)}))}),!c&&Object(Y.jsx)(X.a,{variant:"contained",className:t.button,color:"secondary",onClick:function(){return e(H())},children:"Add new post"}),Object(Y.jsx)(te,{})]})};var je=function(){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(w.b,{exact:!0,path:"/:postId?",component:be}),Object(Y.jsx)(w.a,{exact:!0,to:"/"})]})};c.a.render(Object(Y.jsx)(s.a,{store:g,children:Object(Y.jsx)(o.a,{children:Object(Y.jsx)(je,{})})}),document.getElementById("root"))},96:function(e,t,n){}},[[119,1,2]]]);
//# sourceMappingURL=main.f6a52729.chunk.js.map