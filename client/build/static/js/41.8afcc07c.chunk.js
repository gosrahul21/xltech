(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[41],{902:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),c=a(13),o=a(22),s=a(36),i=a(0),l=a.n(i),u=a(39),m=a(37),p=a(21);t.default=function(e){var t=e.history,a=Object(i.useState)(""),n=Object(s.a)(a,2),f=n[0],b=n[1],h=Object(p.c)((function(e){return Object(o.a)({},e)})).user;Object(i.useEffect)((function(){h&&h.token&&t.push("/")}),[h,t]);var d=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={url:"http://localhost:3000/register/complete",handleCodeInApp:!0},e.next=4,u.a.sendSignInLinkToEmail(f,a);case 4:m.b.success("Email is sent to ".concat(f,". Click the link to complete your registration.")),window.localStorage.setItem("emailForRegistration",f),b("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"container p-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 offset-md-3"},l.a.createElement("h4",null,"Register"),l.a.createElement("form",{onSubmit:d},l.a.createElement("input",{type:"email",className:"form-control",value:f,onChange:function(e){return b(e.target.value)},placeholder:"Your email",autoFocus:!0}),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",className:"btn btn-raised"},"Register")))))}}}]);
//# sourceMappingURL=41.8afcc07c.chunk.js.map