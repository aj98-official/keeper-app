(this["webpackJsonpkeeper-part-3-starting"]=this["webpackJsonpkeeper-part-3-starting"]||[]).push([[0],{42:function(e,t,n){e.exports=n(54)},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=n(38),o=n(21),i=n(34),m=n.n(i);var E=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"  ",r.a.createElement(m.a,null)," Keeper"))};var f=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \u24d2 ",e))},p=n(36),s=n.n(p);var v=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(){return e.click(e.id)}},r.a.createElement(s.a,null)))},b=n(25),k=n(32),d=n(37),h=n.n(d),j=n(71),O=n(72);var g=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(o.a)(t,2),c=n[0],l=n[1];function u(e){var t=e.target.name,n=e.target.value;l((function(e){return Object(k.a)(Object(k.a)({},e),{},Object(b.a)({},t,n))}))}var i=Object(a.useState)(!0),m=Object(o.a)(i,2),E=m[0],f=m[1];return r.a.createElement("div",null,r.a.createElement("form",{className:"create-note"},!E&&r.a.createElement("input",{onChange:u,name:"title",placeholder:"Title",value:c.title}),r.a.createElement("textarea",{onClick:function(){f(!1)},onChange:u,name:"content",placeholder:"Take a note...",rows:E?1:3,value:c.content}),r.a.createElement(O.a,{in:!E},r.a.createElement(j.a,{onClick:function(t){e.click(c),l({title:"",content:""}),t.preventDefault()}},r.a.createElement(h.a,null)))))};var C=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];function l(e){c((function(t){return t.filter((function(t,n){return n!==e}))}))}return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(g,{click:function(e){c((function(t){return[].concat(Object(u.a)(t),[e])}))}}),n.map((function(e,t){return r.a.createElement(v,{key:t,click:l,title:e.title,content:e.content,id:t})})),r.a.createElement(f,null))};l.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.4ecc74e2.chunk.js.map