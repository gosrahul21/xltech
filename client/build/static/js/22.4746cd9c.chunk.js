(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[22],{169:function(e,t,n){"use strict";n.d(t,"k",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return i})),n.d(t,"j",(function(){return p})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return d})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return E})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return v}));var r=n(5),a=n.n(r),c=n(13),o=n(18),u=n.n(o),l=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat("https://ecommerce-server19.herokuapp.com/api","/user/cart"),{cart:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("".concat("https://ecommerce-server19.herokuapp.com/api","/user/cart"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.delete("".concat("https://ecommerce-server19.herokuapp.com/api","/user/cart"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat("https://ecommerce-server19.herokuapp.com/api","/user/address"),{address:n},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat("https://ecommerce-server19.herokuapp.com/api","/user/cart/coupon"),{coupon:n},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat("https://ecommerce-server19.herokuapp.com/api","/user/order"),{stripeResponse:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("".concat("https://ecommerce-server19.herokuapp.com/api","/user/orders"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("".concat("https://ecommerce-server19.herokuapp.com/api","/user/wishlist"),{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.put("".concat("https://ecommerce-server19.herokuapp.com/api","/user/wishlist/").concat(t),{},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat("https://ecommerce-server19.herokuapp.com/api","/user/wishlist"),{productId:t},{headers:{authtoken:n}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("".concat("https://ecommerce-server19.herokuapp.com/api","/user/cash-order"),{couponApplied:r,COD:n},{headers:{authtoken:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},222:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(28);t.a=function(){return a.a.createElement("nav",null,a.a.createElement("ul",{className:"nav flex-column"},a.a.createElement("li",{className:"nav-item"},a.a.createElement(c.b,{to:"/user/history",className:"nav-link"},"History")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(c.b,{to:"/user/password",className:"nav-link"},"Password")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(c.b,{to:"/user/wishlist",className:"nav-link"},"Wishlist"))))}},310:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.order,n=e.showStatus,r=void 0===n||n;return a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("span",null,"Order Id: ",t.paymentIntent.id)," / ",a.a.createElement("span",null,"Amount:"," / ",(t.paymentIntent.amount/=100).toLocaleString("en-US",{style:"currency",currency:"USD"}))," / ",a.a.createElement("span",null,"Currency: ",t.paymentIntent.currency.toUpperCase())," / ",a.a.createElement("span",null,"Method: ",t.paymentIntent.payment_method_types[0])," / ",a.a.createElement("span",null,"Payment: ",t.paymentIntent.status.toUpperCase())," / ",a.a.createElement("span",null,"Orderd on:"," / ",new Date(1e3*t.paymentIntent.created).toLocaleString())," / ",a.a.createElement("br",null),r&&a.a.createElement("span",{className:"badge bg-primary text-white"},"STATUS: ",t.orderStatus)))}},522:function(e,t){},524:function(e,t){},570:function(e,t){},571:function(e,t){},926:function(e,t,n){"use strict";n.r(t);var r=n(22),a=n(36),c=n(0),o=n.n(c),u=n(222),l=n(169),s=n(21),i=n(488),p=n(489),m=n(310),d=n(223),f=n(720),h=d.StyleSheet.create({body:{paddingTop:35,paddingBottom:65,paddingHorizontal:35},title:{fontSize:24,textAlign:"center",color:"blue"},author:{fontSize:12,textAlign:"center",marginBottom:40},subtitle:{fontSize:18,margin:12},text:{margin:12,fontSize:14,textAlign:"justify"},image:{marginVertical:15,marginHorizontal:100},header:{fontSize:12,marginBottom:20,textAlign:"center",color:"grey"},footer:{padding:"100px",fontSize:12,marginBottom:20,textAlign:"center",color:"grey"},pageNumber:{position:"absolute",fontSize:12,bottom:30,left:0,right:0,textAlign:"center",color:"grey"}}),E=function(e){var t=e.order;return o.a.createElement(d.Document,null,o.a.createElement(d.Page,{style:h.body},o.a.createElement(d.Text,{style:h.header,fixed:!0},(new Date).toLocaleString()),o.a.createElement(d.Text,{style:h.title},"Order Invoice"),o.a.createElement(d.Text,{style:h.author},"Ecommerce"),o.a.createElement(d.Text,{style:h.subtitle},"Order Summary"),o.a.createElement(f.Table,null,o.a.createElement(f.TableHeader,null,o.a.createElement(f.TableCell,null,"Title"),o.a.createElement(f.TableCell,null,"Price"),o.a.createElement(f.TableCell,null,"Quantity"),o.a.createElement(f.TableCell,null,"Brand"),o.a.createElement(f.TableCell,null,"Color"))),o.a.createElement(f.Table,{data:t.products},o.a.createElement(f.TableBody,null,o.a.createElement(f.DataTableCell,{getContent:function(e){return e.product.title}}),o.a.createElement(f.DataTableCell,{getContent:function(e){return"$".concat(e.product.price)}}),o.a.createElement(f.DataTableCell,{getContent:function(e){return e.count}}),o.a.createElement(f.DataTableCell,{getContent:function(e){return e.product.brand}}),o.a.createElement(f.DataTableCell,{getContent:function(e){return e.product.color}}))),o.a.createElement(d.Text,{style:h.text},o.a.createElement(d.Text,null,"Date: ","               ",new Date(1e3*t.paymentIntent.created).toLocaleString()),"\n",o.a.createElement(d.Text,null,"Order Id: ","         ",t.paymentIntent.id),"\n",o.a.createElement(d.Text,null,"Order Status: ","  ",t.orderStatus),"\n",o.a.createElement(d.Text,null,"Total Paid: ","       ",t.paymentIntent.amount)),o.a.createElement(d.Text,{style:h.footer}," ~ Thank you for shopping with us ~ ")))};t.default=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],f=t[1],h=Object(s.c)((function(e){return Object(r.a)({},e)})).user;Object(c.useEffect)((function(){b()}),[]);var b=function(){return Object(l.g)(h.token).then((function(e){console.log(JSON.stringify(e.data,null,4)),f(e.data)}))};return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-2"},o.a.createElement(u.a,null)),o.a.createElement("div",{className:"col text-center"},o.a.createElement("h4",null,n.length>0?"User purchase orders":"No purchase orders"),n.reverse().map((function(e,t){return o.a.createElement("div",{key:t,className:"m-5 p-3 card"},o.a.createElement(m.a,{order:e}),function(e){return o.a.createElement("table",{className:"table table-bordered"},o.a.createElement("thead",{className:"thead-light"},o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"Title"),o.a.createElement("th",{scope:"col"},"Price"),o.a.createElement("th",{scope:"col"},"Brand"),o.a.createElement("th",{scope:"col"},"Color"),o.a.createElement("th",{scope:"col"},"Count"),o.a.createElement("th",{scope:"col"},"Shipping"))),o.a.createElement("tbody",null,e.products.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,o.a.createElement("b",null,e.product.title)),o.a.createElement("td",null,e.product.price),o.a.createElement("td",null,e.product.brand),o.a.createElement("td",null,e.color),o.a.createElement("td",null,e.count),o.a.createElement("td",null,"Yes"===e.product.shipping?o.a.createElement(i.a,{style:{color:"green"}}):o.a.createElement(p.a,{style:{color:"red"}})))}))))}(e),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},function(e){return o.a.createElement(d.PDFDownloadLink,{document:o.a.createElement(E,{order:e}),fileName:"invoice.pdf",className:"btn btn-sm btn-block btn-outline-primary"},"Download Invoice")}(e))))})))))}}}]);
//# sourceMappingURL=22.4746cd9c.chunk.js.map