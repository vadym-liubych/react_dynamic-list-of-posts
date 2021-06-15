(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),r=n.n(o),s=n(1),l=(n(11),n(12),n(13),"https://mate-api.herokuapp.com");var u=function(e){var t=e.userId,n=e.selectedPostId,o=Object(a.useState)([]),r=Object(s.a)(o,2),u=r[0],i=r[1],m=Object(a.useState)(0),p=Object(s.a)(m,2),f=p[0],d=p[1];Object(a.useEffect)((function(){(function(e){var t=0===+e?"".concat(l,"/posts/"):"".concat(l,"/posts?userId=").concat(e);return fetch(t).then((function(e){return e.json()})).then((function(e){return e.data}))})(t).then((function(e){i(e)}))}),[t]);var b=function(){n(!1,0),d(0)};return c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},u.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostsList__item"},c.a.createElement("div",null,c.a.createElement("b",null,"[User #".concat(e.userId,"]:")),e.title),f!==e.id?c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return t=e.id,n(!0,t),void d(t);var t}},"Open"):c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:b},"Close"))}))))},i=(n(14),n(2)),m=n.n(i),p=n(5);var f=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l,"/comments/").concat(t),{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.postId,n=Object(a.useState)(""),o=Object(s.a)(n,2),r=o[0],u=o[1],i=Object(a.useState)(""),m=Object(s.a)(i,2),p=m[0],f=m[1],d=Object(a.useState)(""),b=Object(s.a)(d,2),E=b[0],h=b[1],v=function(e,t){t(e.target.value)};return c.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){var n;e.preventDefault(),n={postId:t,name:r,email:p,body:E},fetch("".concat(l,"/comments/"),{method:"POST",body:JSON.stringify(n)}).then((function(e){return e.json()})),u(""),f(""),h("")},method:"POST"},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:r,onChange:function(e){return v(e,u)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",alue:p,onChange:function(e){return v(e,f)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:E,onChange:function(e){return v(e,h)}})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))},b=(n(16),function(e){var t=e.postId,n=Object(a.useState)(""),o=Object(s.a)(n,2),r=o[0],u=o[1],i=Object(a.useState)([]),m=Object(s.a)(i,2),p=m[0],b=m[1],E=Object(a.useState)(!0),h=Object(s.a)(E,2),v=h[0],_=h[1];Object(a.useEffect)((function(){(function(e){return fetch("".concat(l,"/posts/").concat(e)).then((function(e){return e.json()})).then((function(e){return e.data}))})(t).then((function(e){return u(e)}))}),[t]),Object(a.useEffect)((function(){(function(e){return fetch("".concat(l,"/comments/")).then((function(e){return e.json()})).then((function(t){return t.data.filter((function(t){return t.postId===e}))}))})(t).then((function(e){return b(e)}))}),[t,p]);return c.a.createElement("div",{className:"PostDetails"},c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,r.title)),c.a.createElement("section",{className:"PostDetails__comments"},c.a.createElement("button",{type:"button",className:"button",onClick:function(){_(!v)}},v?"Hide ".concat(p.length," comments"):"Show ".concat(p.length," comments")),v&&c.a.createElement("ul",{className:"PostDetails__list"},p.map((function(e){return c.a.createElement("li",{className:"PostDetails__list-item",key:e.id},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return f(e.id)}},"X"),c.a.createElement("p",null,e.body))})))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(d,{postId:t}))))}),E=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(!1),l=Object(s.a)(r,2),i=l[0],m=l[1],p=Object(a.useState)(0),f=Object(s.a)(p,2),d=f[0],E=f[1];return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector",value:d,onChange:function(e){return function(e){var t=e.target.value;E(t)}(e)}},c.a.createElement("option",{value:"0"},"All users"),c.a.createElement("option",{value:"1"},"Leanne Graham"),c.a.createElement("option",{value:"2"},"Ervin Howell"),c.a.createElement("option",{value:"3"},"Clementine Bauch"),c.a.createElement("option",{value:"4"},"Patricia Lebsack"),c.a.createElement("option",{value:"5"},"Chelsey Dietrich"),c.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),c.a.createElement("option",{value:"7"},"Kurtis Weissnat"),c.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),c.a.createElement("option",{value:"9"},"Glenna Reichert"),c.a.createElement("option",{value:"10"},"Leanne Graham")))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(u,{userId:d,selectedPostId:function(e,t){m(e),o(t)}})),i&&c.a.createElement("div",{className:"App__content"},c.a.createElement(b,{postId:n}))))};r.a.render(c.a.createElement(E,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.ae97b661.chunk.js.map