(this.webpackJsonpelastic_front=this.webpackJsonpelastic_front||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(28),i=n.n(s),r=(n(47),n(39)),j=(n(48),n(87)),l=n(94),d=n(89),h=n(90),o=n(91),u=n(92),b=n(93),O=n(18),f=n.n(O),x=n(29),p=n(3),g=Object(j.a)({inp:{paddingLeft:"10px"}});var m=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],s=g();return Object(c.useEffect)((function(){f.a.get("/search").then((function(e){a(e.data)}))}),[]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(l.a,{className:"find",onChange:function(e){f.a.get("/search?value="+e.target.value).then((function(e){a(e.data)}))},placeholder:"Input value",classes:{root:s.inp}}),Object(p.jsxs)(d.a,{style:{width:700,margin:"15px auto"},children:[Object(p.jsx)(h.a,{children:Object(p.jsxs)(o.a,{children:[Object(p.jsx)(u.a,{children:"#"}),Object(p.jsx)(u.a,{children:"Firstname"}),Object(p.jsx)(u.a,{children:"Lastname"}),Object(p.jsx)(u.a,{children:"Email"}),Object(p.jsx)(u.a,{children:"Birthday"})]})}),Object(p.jsx)(b.a,{children:0!==n.length&&n.map((function(e,t){return Object(p.jsxs)(o.a,{children:[Object(p.jsx)(u.a,{children:t+1}),Object(p.jsx)(u.a,{children:e._source.firstname}),Object(p.jsx)(u.a,{children:e._source.lastname}),Object(p.jsx)(u.a,{children:e._source.email}),Object(p.jsx)(u.a,{children:x(e._source.day_of_birth).format("DD.MM.YYYY")})]},"key_"+(t+1))}))})]})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root")),_()}},[[73,1,2]]]);
//# sourceMappingURL=main.e57caa1e.chunk.js.map