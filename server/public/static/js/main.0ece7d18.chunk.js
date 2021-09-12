(this.webpackJsonpecom=this.webpackJsonpecom||[]).push([[0],{177:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(14),o=a.n(s),i=(a(177),a(9)),l=a(67),u=function(e){var t=Object(r.useState)(null),a=Object(i.a)(t,2),n=a[0],c=a[1],s=Object(r.useState)(!0),o=Object(i.a)(s,2),l=o[0],u=o[1],j=Object(r.useState)(null),d=Object(i.a)(j,2),b=d[0],h=d[1];return Object(r.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("Could not fetch the data for that resource");return e.json()})).then((function(e){c(e),u(!1),h(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(h(e.message),u(!1))})),function(){return t.abort()}}),[e]),{data:n,isPending:l,error:b}},j=a(281),d=a(16),b=a(260),h=a(262),p=a(264),m=a(263),O=a(105),f=a(2),g=function(e){var t=e.products;return Object(f.jsx)("div",{className:"product-list",children:t.map((function(e){return Object(f.jsx)(b.a,{className:"product-preview",children:Object(f.jsx)(d.b,{to:"/products/".concat(e._id),children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(m.a,{style:{height:140},image:e.images[0],title:e.name}),Object(f.jsxs)(p.a,{children:[Object(f.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(f.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",children:e.description}),Object(f.jsxs)("p",{style:{marginTop:"1em",fontSize:20},children:["  ",Object(f.jsxs)("b",{children:[" \u09f3 ",e.price]}),"  "]})]})]})})},e._id)}))})},x=a(149),v=a(285),y=a(156),w=a.n(y),S=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],c=u("/data/products/"+a),s=c.data,o=c.isPending,d=c.error,b=Object(r.useState)(null),h=Object(i.a)(b,2),p=h[0],m=h[1],O=Object(r.useState)([]),y=Object(i.a)(O,2),S=y[0],C=y[1],N=Object(r.useState)(null),k=Object(i.a)(N,2),T=k[0],P=k[1],I=Object(r.useState)(!1),E=Object(i.a)(I,2),L=E[0],D=E[1],W=Object(r.useState)(!0),z=Object(i.a)(W,2),J=z[0],q=z[1],A=Object(r.useState)(""),R=Object(i.a)(A,2),F=R[0],B=R[1];Object(r.useEffect)((function(){if(s&&(0===s.productList.length?D(!0):D(!1),m(s.productList),C(s.categories),J)){for(var e=Array(s.categories.length),t=0;t<e.length;t++)e[t]=!1;P(e)}}),[s,J]);var V=function(e){console.log(e);var t={keywords:e},a="";e.length>0&&(a="?"+new URLSearchParams(t).toString()),n(a),q(!1)};return Object(f.jsxs)("div",{className:"home",children:[Object(f.jsx)("div",{className:"search-bar",children:Object(f.jsx)(j.a,{onChange:function(e){!function(e){var t=[];T.forEach((function(e,a){e&&t.push(S[a])})),e&&t.push.apply(t,Object(l.a)(e.trim().toLowerCase().split(" "))),V(t)}(e.target.value),B(e.target.value)},value:F,color:"secondary",id:"filled-basic",label:"search products",variant:"filled"})}),S&&Object(f.jsx)("div",{style:{margin:"4% auto 4% auto",width:"50%",display:"flex",flexWrap:"wrap",justifyContent:"center"},children:S.map((function(e,t){return Object(f.jsx)(x.a,{style:{marginLeft:"1%",marginRight:"1%"},label:Object(f.jsx)("span",{style:{color:"white"},children:e}),onClick:function(){var e=Object(l.a)(T);e[t]=!e[t];var a=[];e.forEach((function(e,t){e&&a.push(S[t])})),!0===F.trim()&&a.push.apply(a,Object(l.a)(F.split(" "))),V(a),P(e)},avatar:T[t]?Object(f.jsx)(v.a,{style:{backgroundColor:"white"},children:Object(f.jsx)(w.a,{style:{color:"white"}})}):null,variant:"default",clickable:!0,color:"secondary"})}))}),d&&Object(f.jsx)("div",{children:d}),o&&Object(f.jsx)("div",{children:"Loading..."}),L&&Object(f.jsx)("div",{children:"No Matches found. Try something different."}),p&&Object(f.jsx)(g,{products:p,categories:s.categories})]})},C=a(15),N=a(30),k=a.n(N),T=a(48),P=a(102),I=a.n(P),E=a(103),L=a.n(E),D=a(157),W=a.n(D),z=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(""),s=Object(i.a)(c,2),o=s[0],l=s[1],u=Object(r.useState)(""),j=Object(i.a)(u,2),d=j[0],b=j[1],h=Object(r.useState)([]),p=Object(i.a)(h,2),m=p[0],O=p[1],g=Object(r.useState)(!1),x=Object(i.a)(g,2),v=x[0],y=x[1],w=(Object(C.f)(),Object(r.useState)([])),S=Object(i.a)(w,2),N=S[0],P=S[1],E=Object(r.useState)([]),D=Object(i.a)(E,2),z=D[0],J=D[1],q=Object(r.useRef)(null),A=function(){var e=Object(T.a)(k.a.mark((function e(t){var a,n,r,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=t.target.files,n=[],r=[],c=0;c<a.length;c++)n.push(a[c]),r.push(URL.createObjectURL(a[c])),console.log(URL.createObjectURL(a[c]));P(n),J(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"create",children:[Object(f.jsx)("h2",{children:"Add a New Product"}),z&&Object(f.jsx)(L.a,{children:z.map((function(e,t){return Object(f.jsx)(I.a,{onClick:function(){return console.log("onClick")},src:e,aspectRatio:16/9},t)}))}),Object(f.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=new FormData;t.append("name",a),t.append("price",d),t.append("categories",m),t.append("description",o),N.forEach((function(e){t.append("images",e)})),console.log(t),v||(y(!0),fetch("/data/products/create",{method:"POST",body:t}).then((function(e){return e.json().then((function(t){return{data:t,status:e.status}})).then((function(e){y(!1),console.log(e,e.data)}))})))}(e)},children:[Object(f.jsxs)("div",{className:"create-input",children:[Object(f.jsx)("label",{for:"myfile",children:"Select Images"}),Object(f.jsx)("input",{multiple:!0,type:"file",id:"myfile",name:"myfile",onChange:A}),Object(f.jsx)("label",{children:"Name:"}),Object(f.jsx)("input",{type:"text",required:!0,value:a,onChange:function(e){return n(e.target.value)}}),Object(f.jsx)("label",{children:"Price in Tk"}),Object(f.jsx)("input",{type:"number",required:!0,value:d,onChange:function(e){e.target.valueAsNumber>=0&&b(e.target.valueAsNumber)}}),Object(f.jsx)("label",{children:"Description"}),Object(f.jsx)("textarea",{value:o,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(f.jsx)("label",{style:{marginTop:"5%"},children:"Categories"}),Object(f.jsx)(W.a,{style:{width:"100%",marginTop:"5%",marginBottom:"10%"},ref:q,value:m,newChipKeyCodes:[32],onAdd:function(e){m.push(e),O(m),console.log(m)},onDelete:function(e,t){m.splice(t,1),O(m),q.current.focus()}}),!v&&Object(f.jsx)("button",{children:" Add Product"}),v&&Object(f.jsx)("button",{children:" Adding Product"})]})]})},J=a(234),q=a(273),A=a(286),R=a(272),F=a(270),B=a(271),V=a(269),M=a(158),H=a.n(M),_=function(e){var t=e.open,a=e.handleClose;return Object(f.jsxs)(A.a,{open:t,onClose:a,"aria-labelledby":"form-dialog-title",children:[Object(f.jsx)(V.a,{id:"form-dialog-title",children:"Subscribe"}),Object(f.jsxs)(F.a,{children:[Object(f.jsx)(H.a,{count:5,onChange:function(e){console.log(e)},size:48,isHalf:!0,emptyIcon:Object(f.jsx)("i",{className:"far fa-star"}),halfIcon:Object(f.jsx)("i",{className:"fa fa-star-half-alt"}),fullIcon:Object(f.jsx)("i",{className:"fa fa-star"}),activeColor:"#ffd700"}),Object(f.jsx)(B.a,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),Object(f.jsx)(j.a,{autoFocus:!0,margin:"normal",id:"comment",label:"Your comment",type:"text",fullWidth:!0})]}),Object(f.jsxs)(R.a,{children:[Object(f.jsx)(J.a,{onClick:a,color:"primary",children:"Cancel"}),Object(f.jsx)(J.a,{onClick:a,color:"primary",children:"Subscribe"})]})]})},U=function(e){var t=e.handleCartLength,a=Object(C.h)().id,n=u("/data/products/"+a),c=n.data,s=n.error,o=n.isPending,l=Object(C.g)(),j=Object(r.useState)(1),d=Object(i.a)(j,2),b=d[0],h=d[1],p=Object(r.useState)(null),m=Object(i.a)(p,2),O=m[0],g=m[1],x=Object(C.f)(),v=u("/user"),y=v.data,w=v.error,S=v.isPending;Object(r.useEffect)((function(){console.log(y),g(y)}),[y]);var N=function(e){var t=-1;return e.forEach((function(e,a){JSON.stringify(e)===JSON.stringify(c)&&(t=a)})),t},P=function(){var e=Object(T.a)(k.a.mark((function e(){var a,n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O?(a=JSON.parse(sessionStorage.getItem("cart")),n=JSON.parse(sessionStorage.getItem("count")),console.log(a,n),a?(r=N(a),console.log(r),-1!==r?n[r]=parseInt(n[r])+b:(a.push(c),n.push(b),sessionStorage.setItem("cart",JSON.stringify(a))),sessionStorage.setItem("count",JSON.stringify(n))):(a=[c],n=[b],sessionStorage.setItem("cart",JSON.stringify(a)),sessionStorage.setItem("count",JSON.stringify(n))),t(a.length)):(localStorage.setItem("location",l.pathname),x.push("/login"),x.go());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){e?b++:b>1&&b--,h(b)},D=Object(r.useState)(!1),W=Object(i.a)(D,2),z=W[0],A=W[1];return Object(f.jsxs)("div",{className:"product-details",children:[(o||S)&&Object(f.jsx)("div",{children:" Loading "}),(s||w)&&Object(f.jsx)("div",{children:s}),c&&Object(f.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:[Object(f.jsx)("div",{style:{flexGrow:1},children:Object(f.jsx)(L.a,{children:c.images.map((function(e,t){return Object(f.jsx)(I.a,{onClick:function(){return console.log("onClick")},src:e,aspectRatio:4/3},t)}))})}),Object(f.jsxs)("div",{style:{flexGrow:1},children:[Object(f.jsx)("h2",{children:c.name}),Object(f.jsxs)("div",{className:"add-cart",children:[Object(f.jsxs)(q.a,{style:{margin:"2%"},size:"small","aria-label":"small outlined button group",children:[Object(f.jsx)(J.a,{onClick:function(){return E(!1)},children:"-"}),Object(f.jsx)(J.a,{style:{backgroundColor:"white",color:"black"},disabled:!0,children:b}),Object(f.jsx)(J.a,{onClick:function(){return E(!0)},children:"+"})]}),Object(f.jsx)("button",{style:{margin:"2%"},onClick:P,children:" Add to cart"})]}),Object(f.jsxs)("p",{style:{fontSize:"150%"},children:[" ",Object(f.jsxs)("b",{children:["  \u09f3 ",c.price,"  "]})]}),Object(f.jsx)("p",{style:{marginTop:"1em"},children:c.description})]})]}),Object(f.jsx)("div",{style:{margin:"0 auto"},children:Object(f.jsx)("button",{onClick:function(){A(!0)},size:"small",children:"Add Comment"})}),Object(f.jsx)(_,{open:z,handleClose:function(){A(!1)}})]})},Y=a(284),G=function(e){var t=e.handleCartLength,a=Object(r.useState)(JSON.parse(sessionStorage.getItem("cart"))),n=Object(i.a)(a,2),c=n[0],s=n[1],o=Object(r.useState)(JSON.parse(sessionStorage.getItem("count"))),h=Object(i.a)(o,2),O=h[0],g=h[1],x=Object(r.useState)(0),v=Object(i.a)(x,2),y=v[0],w=v[1],S=u("/user"),N=S.data,k=(S.error,S.pending,Object(r.useState)(null)),T=Object(i.a)(k,2),P=(T[0],T[1]),I=Object(r.useState)(""),E=Object(i.a)(I,2),L=E[0],D=E[1],W=Object(r.useState)(""),z=Object(i.a)(W,2),A=z[0],R=z[1],F=Object(r.useState)(!1),B=Object(i.a)(F,2),V=B[0],M=B[1],H=Object(C.f)(),_=Object(r.useState)({message:"",bool:!1}),U=Object(i.a)(_,2),G=U[0],K=U[1];Object(r.useEffect)((function(){if(null!=c){var e=0;c.forEach((function(t,a){e+=parseFloat(t.price)*O[a]})),w(e)}}),[O,c]),Object(r.useEffect)((function(){N&&(P(N),D(N.address),R(N.phone))}),[N]);var Q=function(e,a){if(console.log("long ago, ",c),e)O[a]++;else if(O[a]>0&&(O[a]--,0===O[a])){if(1===c.length)return s(null),g(null),sessionStorage.removeItem("cart"),sessionStorage.removeItem("count"),void t(0);console.log("before, ",c),O.splice(a,1),console.log("after, ",c.splice(a,1))}g(Object(l.a)(O)),sessionStorage.setItem("cart",JSON.stringify(c)),sessionStorage.setItem("count",JSON.stringify(O))};return Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",width:"70%",margin:"0 auto"},children:[!c&&Object(f.jsxs)("div",{className:"not-found",children:[Object(f.jsx)("h2",{children:"Sorry no item was added"}),Object(f.jsx)(d.b,{to:"/",children:"Back to the homepage..."})]}),c&&Object(f.jsxs)("div",{children:[c.map((function(e,t){return Object(f.jsxs)(b.a,{style:{display:"flex",flexDirection:"row",marginTop:"2%"},children:[Object(f.jsx)(m.a,{style:{width:140},image:e.images[0],title:e.name}),Object(f.jsxs)(p.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",width:"100%"},children:[Object(f.jsxs)("p",{style:{fontSize:20},children:["  ",Object(f.jsxs)("b",{children:[" ",e.name]}),"  "]}),Object(f.jsx)("div",{className:"add-cart",children:Object(f.jsxs)(q.a,{style:{margin:"2%"},size:"small","aria-label":"small outlined button group",children:[Object(f.jsx)(J.a,{onClick:function(){return Q(!0,t)},children:"+"}),Object(f.jsx)(J.a,{disabled:!0,children:O[t]}),Object(f.jsx)(J.a,{onClick:function(){return Q(!1,t)},children:"-"})]})}),Object(f.jsxs)("p",{style:{fontSize:20},children:["  ",Object(f.jsxs)("b",{children:[" \u09f3 ",parseFloat(e.price)*O[t]]}),"  "]})]})]},e._id)})),Object(f.jsxs)(b.a,{style:{marginTop:"2%"},children:[Object(f.jsxs)(p.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(f.jsx)("p",{style:{fontSize:20},children:"Total "}),Object(f.jsxs)("p",{style:{fontSize:20},children:[" ",Object(f.jsxs)("b",{children:[" \u09f3 ",y]}),"  "]})]}),Object(f.jsxs)(p.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(f.jsx)("p",{style:{fontSize:20},children:"Delivery Charge "}),Object(f.jsxs)("p",{style:{fontSize:20},children:["  ",Object(f.jsx)("b",{children:" \u09f3 12"}),"  "]})]}),Object(f.jsxs)(p.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(f.jsx)("p",{style:{fontSize:20},children:"Net Price "}),Object(f.jsxs)("p",{style:{fontSize:20},children:["  ",Object(f.jsxs)("b",{children:[" \u09f3 ",y+12]}),"  "]})]})]}),N&&Object(f.jsx)(b.a,{style:{marginTop:"2%"},children:Object(f.jsxs)(p.a,{children:[Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"4%",marginBottom:"2%"},children:[Object(f.jsx)("p",{style:{fontSize:20},children:"Deliver to "}),Object(f.jsxs)("p",{style:{fontSize:20},children:[" ",Object(f.jsx)("b",{children:N.username}),"  "]})]}),Object(f.jsx)(j.a,{variant:"outlined",margin:"normal",value:A,required:!0,fullWidth:!0,name:"phone",label:"Phone",id:"phone",type:"tel",onChange:function(e){R(e.target.value)}}),Object(f.jsx)(j.a,{multiline:!0,variant:"outlined",margin:"normal",value:L,required:!0,fullWidth:!0,name:"address",label:"Address",id:"address",onChange:function(e){D(e.target.value)}}),Object(f.jsx)("button",{style:{marginTop:"3%"},class:"button-class",onClick:function(e){e.preventDefault();var t={user:N._id,username:N.username,address:L,phone:A,cart:c,counts:O};V||(M(!0),fetch("/data/place-order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.ok?(K("Order placed successfully",!0),sessionStorage.clear("cart"),sessionStorage.clear("count"),H.push("/"),H.go()):(alert("Your order could not be placed"),K("Sorry, couldn't place order, please check network",!0)),e.json()})).then((function(e){M(!1)})))},children:V?"Placing order":"Confirm and Place Order"})]})})]}),Object(f.jsx)(Y.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:G.bool,autoHideDuration:6e3,onClose:function(e,t){"clickaway"!==t&&K({message:"",bool:!1})},message:Object(f.jsx)("div",{style:{color:"white"},children:G.message})})]})},K=function(){return Object(f.jsxs)("div",{className:"not-found",children:[Object(f.jsx)("h2",{children:"Sorry "}),Object(f.jsx)(d.b,{to:"/",children:"Back to the homepage..."})]})},Q=a(276),X=a(277),Z=a(282),$=a(274),ee=a(278),te=a(40),ae=a.n(te),ne=a(141),re=a(275),ce=function(){return Object(f.jsxs)(O.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(f.jsx)($.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})},se=Object(ne.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}})),oe=function(){var e=se(),t=Object(r.useState)(!1),a=Object(i.a)(t,2),n=a[0],c=a[1],s=Object(r.useState)(""),o=Object(i.a)(s,2),l=o[0],u=o[1],d=Object(r.useState)({email:"",password:"",remember:!1}),b=Object(i.a)(d,2),h=b[0],p=b[1],m=Object(C.f)();return Object(f.jsx)("div",{className:"sign-in-page",children:Object(f.jsxs)(re.a,{component:"main",maxWidth:"xs",children:[Object(f.jsx)(Q.a,{}),Object(f.jsxs)("div",{className:e.paper,children:[Object(f.jsx)(v.a,{className:e.avatar,children:Object(f.jsx)(ae.a,{})}),Object(f.jsx)(O.a,{component:"h1",variant:"h5",children:"login"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then((function(e){return e.json().then((function(t){return{data:t,status:e.status}})).then((function(e){if(e.data.user){var t=localStorage.getItem("location");t?(localStorage.removeItem("location"),m.replace(t),m.go()):(m.push("/"),m.go())}u(e.data),c(!1)}))}))},className:e.form,noValidate:!0,children:[Object(f.jsx)(j.a,{error:l.email||!1,helperText:l.email,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){h.email=e.target.value,p(h)}}),Object(f.jsx)(j.a,{error:l.password||!1,helperText:l.password,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){h.password=e.target.value,p(h)}}),Object(f.jsx)(X.a,{control:Object(f.jsx)(Z.a,{value:"remember",color:"primary",onChange:function(e){h.remember=e.target.checked,p(h)}}),label:"Remember me"}),Object(f.jsxs)("button",{children:[" ",n?"logging in...":"login"]}),Object(f.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",marginTop:"0.5em"},children:[Object(f.jsx)($.a,{href:"/forgotPassword",variant:"body2",children:"Forgot password?"}),Object(f.jsx)($.a,{href:"/signup",variant:"body2",children:"Don't have an account? Register!"})]})]})]}),Object(f.jsx)(ee.a,{mt:8,children:Object(f.jsx)(ce,{})})]})})},ie=Object(ne.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}})),le=function(){var e=ie(),t=Object(r.useState)(!1),a=Object(i.a)(t,2),n=a[0],c=a[1],s=Object(r.useState)(""),o=Object(i.a)(s,2),l=o[0],u=o[1],d=Object(r.useState)({email:"",password:"",username:"",phone:"",address:""}),b=Object(i.a)(d,2),h=b[0],p=b[1],m=Object(C.f)();return Object(f.jsx)("div",{className:"sign-in-page",children:Object(f.jsxs)(re.a,{component:"main",maxWidth:"xs",children:[Object(f.jsx)(Q.a,{}),Object(f.jsxs)("div",{className:e.paper,children:[Object(f.jsx)(v.a,{className:e.avatar,children:Object(f.jsx)(ae.a,{})}),Object(f.jsx)(O.a,{component:"h1",variant:"h5",children:"sign up"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then((function(e){return e.json().then((function(t){return{data:t,status:e.status}})).then((function(e){if(e.data.user){var t=localStorage.getItem("location");t?(console.log(t),localStorage.removeItem("location"),m.push(t),m.go()):(m.push("/"),m.go())}u(e.data),c(!1)}))}))},className:e.form,noValidate:!0,children:[Object(f.jsx)(j.a,{error:l.email||!1,helperText:l.email,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){h.email=e.target.value,p(h)}}),Object(f.jsx)(j.a,{error:l.password||!1,helperText:l.password,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){h.password=e.target.value,p(h)}}),Object(f.jsx)(j.a,{error:l.username||!1,helperText:l.username,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"username",name:"username",autoComplete:"username",onChange:function(e){h.username=e.target.value,p(h)}}),Object(f.jsx)(j.a,{error:l.phone||!1,helperText:l.phone,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"phone",label:"Phone",name:"phone",autoComplete:"phone",onChange:function(e){h.phone=e.target.value,p(h)}}),Object(f.jsx)(j.a,{error:l.address||!1,helperText:l.address,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,multiline:!0,id:"address",label:"Address",name:"address",autoComplete:"address",onChange:function(e){h.address=e.target.value,p(h)}}),Object(f.jsxs)("button",{children:[" ",n?"sigining up...":"sign up"]})]})]}),Object(f.jsx)(ee.a,{mt:8,children:Object(f.jsx)(ce,{})})]})})},ue=["title","titleId"];function je(){return(je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function de(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function be(e,t){var a=e.title,c=e.titleId,s=de(e,ue);return r.createElement("svg",je({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",ref:t,"aria-labelledby":c},s),a?r.createElement("title",{id:c},a):null,n||(n=r.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})))}var he,pe=r.forwardRef(be),me=(a.p,["title","titleId"]);function Oe(){return(Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function ge(e,t){var a=e.title,n=e.titleId,c=fe(e,me);return r.createElement("svg",Oe({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",ref:t,"aria-labelledby":n},c),a?r.createElement("title",{id:n},a):null,he||(he=r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})))}var xe,ve=r.forwardRef(ge),ye=(a.p,["title","titleId"]);function we(){return(we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Se(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function Ce(e,t){var a=e.title,n=e.titleId,c=Se(e,ye);return r.createElement("svg",we({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",ref:t,"aria-labelledby":n},c),a?r.createElement("title",{id:n},a):null,xe||(xe=r.createElement("path",{fillRule:"evenodd",d:"M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z",clipRule:"evenodd"})))}var Ne=r.forwardRef(Ce),ke=(a.p,a(225),function(e){var t=e.cartLength,a=Object(r.useState)(!1),n=Object(i.a)(a,2),c=n[0],s=n[1],o=function(){return s(!1)},l=Object(r.useState)(null),j=Object(i.a)(l,2),b=j[0],h=j[1],p=u("http://localhost:3000/user"),m=p.data;p.error,p.isPending;return Object(r.useEffect)((function(){h(m)}),[m]),Object(r.useEffect)((function(){console.log(t)}),[t]),Object(f.jsxs)("div",{className:"header ",children:[Object(f.jsxs)("div",{className:"logo-nav",children:[Object(f.jsx)("div",{className:"logo-container",children:Object(f.jsx)("a",{href:"#",children:Object(f.jsx)(Ne,{className:"logo"})})}),Object(f.jsx)("h1",{children:"The Dojo Blog"})]}),Object(f.jsxs)("ul",{className:c?"nav-options active":"nav-options",children:[Object(f.jsx)("li",{className:"option",onClick:o,children:Object(f.jsx)(d.b,{to:"/",children:"Home"})}),Object(f.jsx)("li",{className:"option",onClick:o,children:Object(f.jsx)(d.b,{to:"/create",children:" New Blog"})}),b&&Object(f.jsx)("li",{className:"option",onClick:o,children:Object(f.jsxs)(d.b,{to:"/update-user",children:[" ","Welcome, "+b.username+"!"," "]})}),b&&Object(f.jsx)("li",{className:"option",onClick:o,children:Object(f.jsx)("a",{href:"/logout",children:"  Log out "})}),!b&&Object(f.jsx)("li",{className:"option",onClick:o,children:Object(f.jsx)(d.b,{to:"/login",children:"  Login "})}),Object(f.jsx)("li",{className:"option mobile-option sign-up",onClick:o,children:Object(f.jsx)(d.b,{style:{color:"white"},to:"/signup",children:"Signup"})})]}),Object(f.jsxs)("ul",{className:"signin-up",children:[!b&&Object(f.jsx)("li",{className:"option mobile-option",onClick:o,children:Object(f.jsx)(d.b,{to:"/login",children:"  Login "})}),Object(f.jsx)("li",{children:Object(f.jsx)(d.b,{to:"/signup",className:"signup-btn",children:"Signup"})})]}),Object(f.jsx)("div",{className:"mobile-menu",onClick:function(){return s(!c)},children:c?Object(f.jsx)(pe,{className:"menu-icon"}):Object(f.jsx)(ve,{className:"menu-icon"})})]})}),Te=a(279),Pe=a(159),Ie=a.n(Pe),Ee=a(280),Le=a(160),De=Object(ne.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}})),We=function(){var e=De(),t=Object(r.useState)(!1),a=Object(i.a)(t,2),n=a[0],c=a[1],s=Object(r.useState)(""),o=Object(i.a)(s,2),l=o[0],d=o[1],b=u("/user"),h=b.data,p=b.error,m=b.userPending,g=Object(r.useState)({_id:"",email:"",password:"",username:"",phone:"",address:""}),x=Object(i.a)(g,2),y=x[0],w=x[1],S=Object(r.useState)(!1),C=Object(i.a)(S,2),N=C[0],k=C[1],T=function(e,t){var a=Object(Le.a)({},y);a[e]=t,w(a)};Object(r.useEffect)((function(){h&&w(h),console.log(h)}),[h]);return Object(f.jsxs)("div",{children:[p&&Object(f.jsx)("div",{children:p}),m&&Object(f.jsx)("div",{children:"Loading..."}),h&&Object(f.jsx)("div",{className:"sign-in-page",children:Object(f.jsxs)(re.a,{component:"main",maxWidth:"xs",children:[Object(f.jsx)(Q.a,{}),Object(f.jsxs)("div",{className:e.paper,children:[Object(f.jsx)(v.a,{className:e.avatar,children:Object(f.jsx)(ae.a,{})}),Object(f.jsx)(O.a,{component:"h1",variant:"h5",children:"update account"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0),fetch("/update-user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)}).then((function(e){return e.json().then((function(t){return{data:t,status:e.status}})).then((function(e){e.data.user&&k(!0),d(e.data),c(!1)}))}))},className:e.form,noValidate:!0,children:[Object(f.jsx)(j.a,{error:l.email||!1,helperText:l.email,value:y.email,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){T("email",e.target.value)}}),Object(f.jsx)(j.a,{error:l.password||!1,helperText:l.password,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){T("password",e.target.value)}}),Object(f.jsx)(j.a,{error:l.username||!1,helperText:l.username,value:y.username,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"username",name:"username",autoComplete:"username",onChange:function(e){T("username",e.target.value)}}),Object(f.jsx)(j.a,{error:l.phone||!1,helperText:l.phone,value:y.phone,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"phone",label:"Phone",name:"phone",autoComplete:"phone",onChange:function(e){T("phone",e.target.value)}}),Object(f.jsx)(j.a,{error:l.address||!1,helperText:l.address,value:y.address,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,multiline:!0,id:"address",label:"Address",name:"address",autoComplete:"address",onChange:function(e){T("address",e.target.value)}}),Object(f.jsxs)("button",{children:[" ",n?"updating...":"update"]})]})]}),Object(f.jsx)(ee.a,{mt:8,children:Object(f.jsx)(ce,{})}),Object(f.jsx)(Y.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:N,autoHideDuration:6e3,onClose:function(e,t){"clickaway"!==t&&k(!1)},message:Object(f.jsx)("div",{style:{color:"white"},children:"account updated successfully"})})]})})]})},ze=Object(ne.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}})),Je=function(){var e=ze(),t=Object(r.useState)(!1),a=Object(i.a)(t,2),n=a[0],c=a[1],s=Object(r.useState)(""),o=Object(i.a)(s,2),l=o[0],u=o[1],d=Object(r.useState)({email:""}),b=Object(i.a)(d,2),h=b[0],p=b[1],m=Object(C.f)(),g=Object(r.useState)({message:"",bool:!1}),x=Object(i.a)(g,2),y=x[0],w=x[1];return Object(f.jsxs)("div",{className:"sign-in-page",children:[Object(f.jsxs)(re.a,{component:"main",maxWidth:"xs",children:[Object(f.jsx)(Q.a,{}),Object(f.jsxs)("div",{className:e.paper,children:[Object(f.jsx)(v.a,{className:e.avatar,children:Object(f.jsx)(ae.a,{})}),Object(f.jsx)(O.a,{component:"h1",variant:"h5",children:"please provide an email"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0),fetch("/forgot-password/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)}).then((function(e){return e.json().then((function(t){return{data:t,status:e.status}})).then(function(){var e=Object(T.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),"success"!==t.data.msg){e.next=9;break}return w({message:"Please check email for the reset link",bool:!0}),e.next=5,new Promise((function(e){return setTimeout(e,2e3)}));case 5:m.push("/"),m.go(),e.next=10;break;case 9:w({message:"Error! Could not send email",bool:!0});case 10:u(t.data),c(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))},className:e.form,noValidate:!0,children:[Object(f.jsx)(j.a,{error:l.email||!1,helperText:l.email,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){h.email=e.target.value,p(h)}}),Object(f.jsxs)("button",{children:[" ",n?"sending...":"send"]})]})]}),Object(f.jsx)(ee.a,{mt:8,children:Object(f.jsx)(ce,{})})]}),Object(f.jsx)(Y.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:y.bool,autoHideDuration:6e3,onClose:function(e,t){"clickaway"!==t&&w({message:"",bool:!1})},message:Object(f.jsx)("div",{style:{color:"white"},children:y.message})})]})},qe=Object(ne.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)}}})),Ae=function(){var e=qe(),t=Object(C.h)(),a=t.email,n=t.otp,c=Object(r.useState)(!1),s=Object(i.a)(c,2),o=s[0],l=s[1],u=Object(r.useState)(""),d=Object(i.a)(u,2),b=d[0],h=d[1],p=Object(r.useState)({email:a,otp:n,password:"",confirmPassword:""}),m=Object(i.a)(p,2),g=m[0],x=m[1],y=Object(C.f)(),w=Object(r.useState)({message:"",bool:!1}),S=Object(i.a)(w,2),N=S[0],P=S[1];return Object(f.jsxs)("div",{className:"sign-in-page",children:[Object(f.jsxs)(re.a,{component:"main",maxWidth:"xs",children:[Object(f.jsx)(Q.a,{}),Object(f.jsxs)("div",{className:e.paper,children:[Object(f.jsx)(v.a,{className:e.avatar,children:Object(f.jsx)(ae.a,{})}),Object(f.jsx)(O.a,{component:"h1",variant:"h5",children:"reset password"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(!0),fetch("/reset-password/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}).then((function(e){return e.json().then((function(t){return{data:t,status:e.status}})).then(function(){var e=Object(T.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),"success"!==t.data.msg){e.next=9;break}return P({message:"password reset successful",bool:!0}),e.next=5,new Promise((function(e){return setTimeout(e,2e3)}));case 5:y.push("/"),y.go(),e.next=10;break;case 9:0===t.data.code?h(t.data.msg):P({message:t.data.msg,bool:!0});case 10:h(t.data),l(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))},className:e.form,noValidate:!0,children:[Object(f.jsx)(j.a,{error:b.password||!1,helperText:b.password,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){g.password=e.target.value,x(g)}}),Object(f.jsx)(j.a,{error:b.password||!1,helperText:b.password,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Confirm password",type:"password",id:"confirmPassword",autoComplete:"current-password",onChange:function(e){g.confirmPassword=e.target.value,x(g)}}),Object(f.jsxs)("button",{children:[" ",o?"sending...":"send"]})]})]}),Object(f.jsx)(ee.a,{mt:8,children:Object(f.jsx)(ce,{})})]}),Object(f.jsx)(Y.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:N.bool,autoHideDuration:6e3,onClose:function(e,t){"clickaway"!==t&&P({message:"",bool:!1})},message:Object(f.jsx)("div",{style:{color:"white"},children:N.message})})]})},Re=function(){var e=JSON.parse(sessionStorage.getItem("cart")),t=Object(r.useState)(e?e.length:0),a=Object(i.a)(t,2),n=a[0],c=a[1],s=function(e){c(e)};return Object(r.useEffect)((function(){}),[n]),Object(f.jsx)(d.a,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)(ke,{cartLength:n}),"   ",Object(f.jsx)(Te.a,{style:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed",backgroundColor:"#ffff"},"aria-label":"add",children:Object(f.jsx)(Ee.a,{anchorOrigin:{vertical:"top",horizontal:"right"},badgeContent:n,color:"secondary",children:Object(f.jsx)(Ie.a,{onClick:function(){var e=document.createElement("a");e.href="/checkout",e.target="_self",e.click()}})})}),Object(f.jsx)("div",{className:"content",children:Object(f.jsxs)(C.c,{children:[Object(f.jsx)(C.a,{exact:!0,path:"/",children:Object(f.jsx)(S,{})}),Object(f.jsx)(C.a,{path:"/create",children:Object(f.jsx)(z,{})}),Object(f.jsx)(C.a,{path:"/products/:id",children:Object(f.jsx)(U,{handleCartLength:s})}),Object(f.jsx)(C.a,{path:"/login",children:Object(f.jsx)(oe,{})}),Object(f.jsx)(C.a,{path:"/signup",children:Object(f.jsx)(le,{})}),Object(f.jsx)(C.a,{path:"/update-user",children:Object(f.jsx)(We,{})}),Object(f.jsx)(C.a,{path:"/checkout",children:Object(f.jsx)(G,{handleCartLength:s})}),Object(f.jsx)(C.a,{path:"/forgotPassword",children:Object(f.jsx)(Je,{})}),Object(f.jsx)(C.a,{path:"/resetPassword/:email/:otp",children:Object(f.jsx)(Ae,{})}),Object(f.jsx)(C.a,{to:"*",children:Object(f.jsx)(K,{})})]})})]})})},Fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,287)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(Re,{})}),document.getElementById("root")),Fe()}},[[226,1,2]]]);
//# sourceMappingURL=main.0ece7d18.chunk.js.map