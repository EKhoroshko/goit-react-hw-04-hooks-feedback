(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={list:"Statistics_list__3XDRr",item:"Statistics_item__1T2e8",wrapper:"Statistics_wrapper__1i7ok"}},,,,,function(e,t,a){e.exports={block:"FeedbackOptions_block__PArfE",button:"FeedbackOptions_button__10tza"}},function(e,t,a){e.exports={container:"Section_container__gieb7",title:"Section_title__cDGI0"}},,function(e,t,a){e.exports={title:"Notification_title__3UxYN"}},function(e,t,a){e.exports={container:"Feedback_container__1L7OI"}},,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(8),r=a.n(s),i=(a(15),a(16),a(4)),o=a(6),l=a.n(o),b=a(0);var j=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(b.jsx)("div",{className:l.a.block,children:t.map((function(e){return Object(b.jsx)("button",{className:l.a.button,type:"button",onClick:function(){a(e)},children:e},e)}))})},u=a(7),d=a.n(u);var p=function(e){var t=e.title,a=e.children;return Object(b.jsxs)("section",{className:d.a.container,children:[Object(b.jsx)("h2",{className:d.a.title,children:t}),a]})},m=a(3),O=a.n(m),h=a(1),x=a.n(h);function f(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,s=e.procent;return Object(b.jsxs)("ul",{className:x.a.list,children:[Object(b.jsxs)("li",{className:x.a.item,children:["Good: ",Object(b.jsx)("span",{className:x.a.wrapper,children:t})]}),Object(b.jsxs)("li",{className:x.a.item,children:["Neutral: ",Object(b.jsx)("span",{className:x.a.wrapper,children:a})]}),Object(b.jsxs)("li",{className:x.a.item,children:["Bad: ",Object(b.jsx)("span",{className:x.a.wrapper,children:n})]}),Object(b.jsxs)("li",{className:x.a.item,children:["Total: ",Object(b.jsx)("span",{className:x.a.wrapper,children:c})]}),Object(b.jsxs)("li",{className:x.a.item,children:["Positive feedback: ",Object(b.jsxs)("span",{className:x.a.wrapper,children:[s," %"]})," "]})]})}f.prototype={good:O.a.number,neutral:O.a.number,bad:O.a.number,total:O.a.number,procent:O.a.number};var _=f,N=a(9),k=a.n(N);var v=function(e){var t=e.message;return Object(b.jsx)("h2",{className:k.a.title,children:t})},g=a(10),w=a.n(g);var S=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(0),r=Object(i.a)(s,2),o=r[0],l=r[1],u=Object(n.useState)(0),d=Object(i.a)(u,2),m=d[0],O=d[1],h=function(){return a+o+m||0},x=h(),f=Math.floor(100*a/h())||0;return Object(b.jsxs)("div",{className:w.a.container,children:[Object(b.jsx)(p,{title:"\u0422\u0443\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432\u0430\u0448 \u043e\u0442\u0437\u044b\u0432 ",children:Object(b.jsx)(j,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":c((function(e){return e+1}));break;case"neutral":l((function(e){return e+1}));break;case"bad":O((function(e){return e+1}));break;default:return}}})}),Object(b.jsx)(p,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",children:0===x?Object(b.jsx)(v,{message:"No feedback given"}):Object(b.jsx)(_,{good:a,neutral:o,bad:m,total:x,procent:f})})]})};var F=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(S,{})})};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.907f04f9.chunk.js.map