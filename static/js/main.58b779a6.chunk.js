(this.webpackJsonptti_project=this.webpackJsonptti_project||[]).push([[0],{67:function(e,t,n){},69:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(8),s=n.n(a),i=(n(67),n(17)),o=n.n(i),u=n(28),l=n(21),j=(n.p,n(69),n.p,n.p,n(129)),p=n(130),d=n(56),b=n.n(d),h=n(57),f=n.n(h),x=(n(70),"https://5f5550607e45.ngrok.io/api/");function O(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(x+"geturls/"+t+"/");case 3:return n=e.sent,console.log(n),e.next=7,n.json();case 7:return r=e.sent,c=r.data,e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}var g=n(10);var m=function(){var e=Object(r.useState)(!0),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(l.a)(a,2),i=s[0],d=s[1],h=Object(r.useState)(-1),x=Object(l.a)(h,2),v=x[0],m=x[1],y=Object(r.useState)(!1),k=Object(l.a)(y,2),S=k[0],w=k[1],C=Object(r.useState)(void 0),I=Object(l.a)(C,2),N=I[0],A=I[1],L=Object(r.useState)("Input your instructions here!"),M=Object(l.a)(L,2),P=M[0],B=M[1];function E(){return(E=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return c(!0),e.abrupt("return");case 3:if(""==i||"Loading..."==P){e.next=14;break}return B("Loading..."),e.next=7,O(i);case 7:t=e.sent,B("Input your instructions here!"),A(t),console.log(t),c(!1),e.next=15;break;case 14:alert("Please enter a non-empty set of instructions.");case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(){w(!0)}function T(){w(!1)}var _=function(e,t){var n;return(n=String(e.text).split(" ")).forEach((function(e,t){n[t]=e.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ")})),(n=n.filter((function(e){return""!==e}))).map((function(e,t){return""!==N[t]?Object(g.jsx)("span",{id:"span",onMouseEnter:function(){return m(t)},onMouseOver:F,onMouseLeave:T,onClick:function(){return alert(e)},children:e}):Object(g.jsx)("span",{id:"spanNoHighlight",children:e})}))};return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsx)("h3",{children:"Engineers Without Borders \u2013 Cornell University"}),Object(g.jsx)("h4",{children:"A Text-to-Image Project by Daisy Shu and Sean Yu"}),Object(g.jsx)("h4",{children:"April 2021"})]}),Object(g.jsxs)("div",{className:"App-body",children:[n?Object(g.jsx)("div",{id:"textfield",children:Object(g.jsx)(j.a,{className:"textfield",placeholder:P,multiline:!0,rows:25,rowsMax:1e3,fullWidth:!0,value:i,onChange:function(e){return d(e.target.value)}})}):Object(g.jsxs)("div",{id:"textSpans",children:[Object(g.jsx)(_,{text:i,handleClick:function(e){console.log(e)}}),Object(g.jsx)("img",{src:void 0!==N?N[v]:null,style:{display:S?"inline":"none"}})]}),Object(g.jsx)("div",{id:"savebutton",children:Object(g.jsx)(p.a,{className:"savebutton",variant:"contained",color:"primary",size:"medium",startIcon:n?Object(g.jsx)(b.a,{}):Object(g.jsx)(f.a,{}),onClick:function(){return E.apply(this,arguments)},children:n?"Process":"Back"})})]})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(m,{})}),document.getElementById("root")),y()}},[[96,1,2]]]);
//# sourceMappingURL=main.58b779a6.chunk.js.map