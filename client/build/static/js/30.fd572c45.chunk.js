(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[30],{140:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"e",(function(){return m})),a.d(t,"f",(function(){return l})),a.d(t,"a",(function(){return p})),a.d(t,"d",(function(){return f}));var n=a(5),r=a.n(n),c=a(13),s=a(18),u=a.n(s),o=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("".concat("https://ecommerce-server19.herokuapp.com/api","/categories"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("".concat("https://ecommerce-server19.herokuapp.com/api","/category/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.delete("".concat("https://ecommerce-server19.herokuapp.com/api","/category/").concat(t),{headers:{authtoken:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.put("".concat("https://ecommerce-server19.herokuapp.com/api","/category/").concat(t),a,{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat("https://ecommerce-server19.herokuapp.com/api","/category"),t,{headers:{authtoken:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("".concat("https://ecommerce-server19.herokuapp.com/api","/category/subs/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},142:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(28);t.a=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav flex-column"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/admin/dashboard",className:"nav-link"},"Dashboard")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/admin/product",className:"nav-link"},"Product")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/admin/products",className:"nav-link"},"Products")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/admin/createBrand",className:"nav-link"},"Add Brand")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/admin/category",className:"nav-link"},"Category")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/admin/sub",className:"nav-link"},"Sub Category")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/admin/coupon",className:"nav-link"},"Coupon")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/user/password",className:"nav-link"},"Password"))))}},200:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.handleSubmit,a=e.name,n=e.setName;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return n(e.target.value)},value:a,autoFocus:!0,required:!0}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-outline-primary"},"Save")))}},911:function(e,t,a){"use strict";a.r(t);var n=a(36),r=a(22),c=a(0),s=a.n(c),u=a(142),o=a(37),i=a(21),m=a(140),l=a(200);t.default=function(e){var t=e.history,a=e.match,p=Object(i.c)((function(e){return Object(r.a)({},e)})).user,f=Object(c.useState)(""),d=Object(n.a)(f,2),v=d[0],b=d[1],h=Object(c.useState)(!1),E=Object(n.a)(h,2),N=E[0],k=E[1];Object(c.useEffect)((function(){g()}),[]);var g=function(){return Object(m.c)(a.params.slug).then((function(e){return b(e.data.name)}))};return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-2"},s.a.createElement(u.a,null)),s.a.createElement("div",{className:"col"},N?s.a.createElement("h4",{className:"text-danger"},"Loading.."):s.a.createElement("h4",null,"Update category"),s.a.createElement(l.a,{handleSubmit:function(e){e.preventDefault(),k(!0),Object(m.f)(a.params.slug,{name:v},p.token).then((function(e){k(!1),b(""),o.b.success('"'.concat(e.data.name,'" is updated')),t.push("/admin/category")})).catch((function(e){console.log(e),k(!1),400===e.response.status&&o.b.error(e.response.data)}))},name:v,setName:b}),s.a.createElement("hr",null))))}}}]);
//# sourceMappingURL=30.fd572c45.chunk.js.map