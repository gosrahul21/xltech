(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[33],{347:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(7);function r(e,t){if(null==e)return{};var n,r,u=Object(c.a)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}},348:function(e,t,n){"use strict";var c=n(36),r=n(0),u=n.n(r),a=n(3);t.a=function(){var e=Object(r.useState)(5),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.f)();return Object(r.useEffect)((function(){var e=setInterval((function(){o((function(e){return--e}))}),1e3);return 0===n&&i.push("/"),function(){return clearInterval(e)}}),[n,i]),u.a.createElement("div",{className:"container p-5 text-center"},u.a.createElement("p",null,"Redirecting you in ",n," seconds"))}},907:function(e,t,n){"use strict";n.r(t);var c=n(36),r=n(22),u=n(347),a=n(0),o=n.n(a),i=n(3),l=n(21),s=n(348),f=n(41);t.default=function(e){e.children;var t=Object(u.a)(e,["children"]),n=Object(l.c)((function(e){return Object(r.a)({},e)})).user,b=Object(a.useState)(!1),O=Object(c.a)(b,2),j=O[0],p=O[1];return Object(a.useEffect)((function(){n&&n.token&&Object(f.b)(n.token).then((function(e){console.log("CURRENT ADMIN RES",e),p(!0)})).catch((function(e){console.log("ADMIN ROUTE ERR",e),p(!1)}))}),[n]),j?o.a.createElement(i.a,t):o.a.createElement(s.a,null)}}}]);
//# sourceMappingURL=33.606ac27c.chunk.js.map