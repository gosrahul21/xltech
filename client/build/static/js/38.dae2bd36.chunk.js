(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[38],{222:function(e,a,t){"use strict";var n=t(0),r=t.n(n),s=t(28);a.a=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav flex-column"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/user/history",className:"nav-link"},"History")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/user/password",className:"nav-link"},"Password")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/user/wishlist",className:"nav-link"},"Wishlist"))))}},908:function(e,a,t){"use strict";t.r(a);var n=t(5),r=t.n(n),s=t(13),c=t(36),l=t(0),i=t.n(l),m=t(222),u=t(39),o=t(37);a.default=function(){var e=Object(l.useState)(""),a=Object(c.a)(e,2),t=a[0],n=a[1],d=Object(l.useState)(!1),p=Object(c.a)(d,2),v=p[0],E=p[1],b=function(){var e=Object(s.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),E(!0),e.next=4,u.a.currentUser.updatePassword(t).then((function(){E(!1),n(""),o.b.success("Password updated")})).catch((function(e){E(!1),o.b.error(e.message)}));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-2"},i.a.createElement(m.a,null)),i.a.createElement("div",{className:"col"},v?i.a.createElement("h4",{className:"text-danger"},"Loading.."):i.a.createElement("h4",null,"Password Update"),i.a.createElement("form",{onSubmit:b},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Your Password"),i.a.createElement("input",{type:"password",onChange:function(e){return n(e.target.value)},className:"form-control",placeholder:"Enter new password",disabled:v,value:t}),i.a.createElement("button",{className:"btn btn-primary",disabled:!t||t.length<6||v},"Submit"))))))}}}]);
//# sourceMappingURL=38.dae2bd36.chunk.js.map