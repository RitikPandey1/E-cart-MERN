(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,a,t){e.exports=t.p+"static/media/loader2.99b2a16f.gif"},127:function(e,a,t){e.exports=t(157)},156:function(e,a,t){},157:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),l=t.n(c),i=t(22),o=t(13),s=t(11),m=t(73),u=t(203),p=t(213),d=t(199),g=t(158),E=t(200),f=t(201),b=t(198),x=t(202),h=t(62),y=t.n(h),v=t(63),O=t.n(v),N=t(64),j=t.n(N),w=t(65),C=t.n(w),S=t(58),k=t.n(S),I=t(101),P=t.n(I),T=t(102),A=t.n(T),R=[{title:"Mobiles",path:"/products/category/mobiles",icon:r.a.createElement(k.a,null)},{title:"Laptops",path:"/products/category/laptops",icon:r.a.createElement(y.a,null)},{title:"Headsets",path:"/products/category/headsets",icon:r.a.createElement(O.a,null)},{title:"Speakers",path:"/products/category/speakers",icon:r.a.createElement(j.a,null)}],D=[{title:"Order",path:"/order",icon:r.a.createElement(P.a,null)},{title:"Cart",path:"/user/cart",icon:r.a.createElement(C.a,null)},{title:"Your Account",path:"/your-account",icon:r.a.createElement(A.a,null)}],_=t(197),B=Object(_.a)((function(e){var a,t,n;return{drawer:{width:"250px"},header:(a={display:"flex",flexDirection:"column"},Object(s.a)(a,e.breakpoints.up("sm"),{flexDirection:"row",alignItems:"center"}),Object(s.a)(a,"justifyContent","space-between"),Object(s.a)(a,"alignItems","flex-start"),Object(s.a)(a,"backgroundColor","#fff"),Object(s.a)(a,"color","#4E5DAA"),Object(s.a)(a,"padding","10px"),a),themeColor:{color:"#4E5DAA"},sidenav:(t={},Object(s.a)(t,e.breakpoints.up("md"),{display:"none"}),Object(s.a)(t,"display","inline"),t),topnav:(n={},Object(s.a)(n,e.breakpoints.up("md"),{display:"flex",justifyContent:"center",alignItems:"center"}),Object(s.a)(n,"display","none"),Object(s.a)(n,"& button",{marginRight:"10px"}),n),center:{display:"flex",alignItems:"center",justifyContent:"center",padding:"0 15px"},icon:{color:"#4E5DAA",fontSize:"20px",fontFamily:"Roboto Slab",fontWeight:800},searchBox:{display:"flex",justifyContent:"center",padding:"5px 0",width:"100%"},srearchField:{width:"100%"},srcbtn:{marginLeft:"-10px",backgroundColor:"#3f51b5"}}}),{index:1}),U=function(e){var a=e.anchor,t=e.toggleDrawer,n=B(),c=Object(o.g)(),l=function(){return r.a.createElement("div",{onClick:t("left",!1),className:n.drawer},r.a.createElement(b.a,null),r.a.createElement(d.a,null,R.map((function(e,a){var t=e.icon,n=e.title,l=e.path;return r.a.createElement(g.a,{button:!0,key:a,onClick:function(){return c.push(l)}},r.a.createElement(E.a,null,t),r.a.createElement(f.a,{primary:n}))}))),r.a.createElement(b.a,null),r.a.createElement(d.a,null,D.map((function(e,a){var t=e.icon,n=e.title,l=e.path;return r.a.createElement(g.a,{button:!0,key:a,onClick:function(){return c.push(l)}},r.a.createElement(E.a,null,t),r.a.createElement(f.a,{primary:n}))}))))};return r.a.createElement(p.a,{anchor:"left",open:a.left,onClose:t("left",!1)},r.a.createElement(x.a,null),r.a.createElement(l,null))},L=t(206),q=t(204),z=t(205),F=t(211),G=t(116),M=t(207),H=t(208),Q=t(105),Y=t.n(Q),V=t(107),W=t.n(V),Z=t(81),J=t.n(Z),$=t(19);var K=Object($.b)((function(e){return{noOfItems:e.cart.noOfItems}}))((function(e){var a=e.noOfItems,t=Object(n.useState)({left:!1}),c=Object(m.a)(t,2),l=c[0],i=c[1],p=r.a.useState(null),d=Object(m.a)(p,2),g=d[0],b=d[1],x=r.a.useState(null),h=Object(m.a)(x,2),y=h[0],v=h[1],O=Object(o.g)(),N=B(),j=function(e,a){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&i(Object(s.a)({},e,a))}};return r.a.createElement(u.a,{className:N.header,position:"static"},r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{item:!0,xs:12,md:2},r.a.createElement("div",{className:N.sidenav},r.a.createElement(z.a,{onClick:j("left",!0)},r.a.createElement(Y.a,{className:N.themeColor})),r.a.createElement(U,{anchor:l,toggleDrawer:j})),r.a.createElement(L.a,{className:N.icon,onClick:function(){return O.push("/")}},"ECART")),r.a.createElement(q.a,{item:!0,xs:12,md:6,className:N.center},r.a.createElement("div",{className:N.searchBox},r.a.createElement(F.a,{className:N.srearchField,label:"Search Product",variant:"outlined",size:"small"}),r.a.createElement(L.a,{className:N.srcbtn,variant:"contained",color:"primary",size:"small"},r.a.createElement(W.a,null)))),r.a.createElement(q.a,{item:!0,md:4,className:N.topnav},r.a.createElement(L.a,{className:N.themeColor,onClick:function(e){b(e.currentTarget)},disableElevation:!0},"Category ",r.a.createElement(J.a,{className:N.themeColor})),r.a.createElement(G.a,{id:"simple-menu",anchorEl:g,keepMounted:!0,open:Boolean(g),onClose:function(){b(null)}},R.map((function(e,a){return r.a.createElement(M.a,{key:a,onClick:function(){v(null),O.push(e.path)}},r.a.createElement(E.a,null,e.icon),r.a.createElement(f.a,{primary:e.title}))}))),r.a.createElement(L.a,{className:N.themeColor,onClick:function(e){v(e.currentTarget)},disableElevation:!0},"option ",r.a.createElement(J.a,{className:N.themeColor})),r.a.createElement(G.a,{id:"simple-menu",anchorEl:y,keepMounted:!0,open:Boolean(y),onClose:function(){v(null)}},D.map((function(e,a){return"Cart"===e.title?null:r.a.createElement(M.a,{key:a,onClick:function(){v(null),O.push(e.path)}},r.a.createElement(E.a,null,e.icon),r.a.createElement(f.a,{primary:e.title}))}))),r.a.createElement(z.a,{color:"primary",onClick:function(){O.push("/user/cart")}},r.a.createElement(H.a,{badgeContent:a,color:"primary"}," ",r.a.createElement(C.a,null)," ")," "))))})),X=t(110),ee=t.n(X),ae=t(82),te=t.n(ae),ne=t(108),re=t(39),ce=t(42),le=t.n(ce),ie=t(74),oe=t(84),se=t(215),me=t(109),ue=t.n(me),pe=function(){return r.a.createElement("div",{style:{display:"flex",marginRight:"auto",marginLeft:"auto"}},r.a.createElement("img",{src:ue.a,alt:"Loading...",style:{width:"150px",margin:" 40px auto",display:"block"}}))},de=function(e){var a=e.children;return r.a.createElement("div",null,r.a.createElement(x.a,null),r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{item:!0,xs:1,sm:2}),r.a.createElement(q.a,{item:!0,xs:10,sm:8},a),r.a.createElement(q.a,{item:!0,xs:1,sm:2})),r.a.createElement(x.a,null))},ge=Object(_.a)((function(e){return{box:{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px",height:"130px"},productName:{fontSize:"18px"},productPrice:{fontSize:"20px"},card:{height:"100%",border:"0.5px solid #ecf0f1",padding:"10px"},flexBox1:{alignItems:"center",border:"1px solid #eee",boxShadow:"0 10px 6px -6px #d4d4d4",margin:"20px 0",borderRadius:"5px",backgroundColor:"#fff"},box2:{padding:"10px",display:"flex",flexDirection:"column",alignItems:"flex-start"},grid:{margin:"10px 0 10px 0"},mainHeading:{color:"#7f8c8d",fontSize:"18px"}}})),Ee=Object($.b)((function(e){var a=e.getProducts;return{loading:a.loading,category:a.category,products:a.products}}))((function(e){var a=e.history,t=e.loading,c=e.category,l=e.products,i=e.dispatch,s=ge(),m=Object(o.h)().name;return Object(n.useEffect)((function(){i(function(e){return function(a){a({type:"LOADING_PRODUCTS"}),le.a.get("/api/v1/ecartproducts/category/".concat(e)).then((function(t){a({type:"GET_PRODUCTS",payload:{products:Object(re.a)(t.data.data),category:e}})}))}}(m))}),[m]),r.a.createElement(de,null,r.a.createElement("div",{style:{overflow:"hidden"}},t?r.a.createElement(pe,null):r.a.createElement(r.a.Fragment,null," ",r.a.createElement(ie.a,{variant:"h4",className:s.mainHeading},"Category / ",c.toUpperCase()),l.map((function(e,t){return r.a.createElement(q.a,{container:!0,key:t,className:s.flexBox1},r.a.createElement(q.a,{item:!0,xs:12,sm:4,className:s.box},r.a.createElement("img",{src:"/api/v1/ecartproducts/product_image/".concat(e._id,"/").concat(e.images[0]),alt:"product",style:{maxWidth:"100%",height:"100%"}})),r.a.createElement(q.a,{item:!0,xs:12,sm:8,className:s.box2},r.a.createElement(oe.a,{onClick:function(){return a.push("/product/".concat(e._id))}},r.a.createElement(ie.a,{className:s.productName}," ",e.name)),e.averageRating&&r.a.createElement(se.a,{size:"small",style:{backgroundColor:"#27ae60",color:"#fff"},label:e.averageRating,icon:r.a.createElement(ee.a,{style:{color:"#fff"}})}),r.a.createElement(ie.a,{className:s.productPrice},"\u20b9",e.price.toLocaleString())))})))))})),fe=t(159),be=Object(_.a)({main:{backgroundColor:"#fff",padding:"20px"},button:{margin:"10px auto 10px auto"},buttonArea:{display:"flex"},imageBox:{display:"flex",justifyContent:"center",alignItems:"center"},avatar:{backgroundColor:"green"},review:{display:"flex",flexDirection:"column",padding:"10px",justifyContent:"flex-start",marginTop:"5px"},paper:{padding:"15px"}},{index:1}),xe=function(e){var a=e.product,t=e.classes;return a?r.a.createElement(r.a.Fragment,null," ",r.a.createElement(q.a,{item:!0},r.a.createElement(x.a,null),r.a.createElement(ie.a,{variant:"h5"},a.name)," ",r.a.createElement(x.a,null)),r.a.createElement(q.a,{item:!0,className:t.imageBox},r.a.createElement("img",{src:"/api/v1/ecartproducts/product_image/".concat(a._id,"/").concat(a.images[1]),alt:"product",style:{maxWidth:"100%"}})),r.a.createElement(q.a,{item:!0},r.a.createElement(x.a,null)," ",r.a.createElement(ie.a,{variant:"h4"}," ","\u20b9 ",a.price.toLocaleString()," ")),r.a.createElement(q.a,{item:!0},r.a.createElement(x.a,null),r.a.createElement(x.a,null,r.a.createElement(ie.a,{variant:"h6"},a.description)),r.a.createElement(x.a,null))," "):null},he=t(214),ye=function(e){var a=e.rating;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,{variant:"h4"},"Rating : ",a," "),r.a.createElement(he.a,{name:"half-rating",defaultValue:a,precision:.1,size:"large",readOnly:!0})):r.a.createElement(ie.a,{variant:"h4"},"Rating: Not Available")},ve=t(216),Oe=function(e){var a=e.productReviews,t=e.classes;return a.length?a.map((function(e,a){return r.a.createElement("div",{className:t.review,key:a},r.a.createElement(ve.a,{className:t.avatar}," ",e.user.name[0]," "),r.a.createElement(ie.a,{variant:"subtitle1"},e.user.name),r.a.createElement(ie.a,{variant:"caption"}," ",e.review," "),r.a.createElement(he.a,{name:"half-rating",defaultValue:e.rating,precision:.5,size:"small",readOnly:!0}),r.a.createElement(b.a,null))})):r.a.createElement(ie.a,{variant:"subtitle1"},"Not Available")};var Ne=Object($.b)()((function(e){var a=e.classes,t=e.product,n=e.dispatch;return r.a.createElement(L.a,{variant:"contained",color:"primary",size:"large",className:a.button,onClick:function(){return n(function(e){return function(a){a({type:"ADD_ITEM",payload:e})}}(t))}},"Add To Cart")})),je=Object($.b)((function(e){var a=e.getProduct;return{product:a.product,reviews:a.reviews,loading:a.loading}}))((function(e){e.history,e.location;var a=e.loading,t=e.product,c=e.reviews,l=e.dispatch,i=be(),s=Object(o.h)().id;return Object(n.useEffect)((function(){l(function(e){return function(){var a=Object(ne.a)(te.a.mark((function a(t){var n,r;return te.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:"LOADING_PRODUCT"}),a.next=3,le.a.get("/api/v1/ecartproducts/product/".concat(e));case 3:return n=a.sent,a.next=6,le.a.get("/api/v1/ecartproducts/product/".concat(e,"/reviews"));case 6:r=a.sent,t({type:"GET_PRODUCT",payload:{product:n.data.data,reviews:Object(re.a)(r.data.data)}});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(s))}),[s]),r.a.createElement(de,null,a?r.a.createElement(pe,null):r.a.createElement(q.a,{container:!0,direction:"column",className:i.main},r.a.createElement(xe,{product:t,classes:i}),r.a.createElement(q.a,{container:!0,item:!0},r.a.createElement(q.a,{item:!0,xs:12,sm:6,className:i.buttonArea}),r.a.createElement(q.a,{item:!0,xs:12,sm:6,className:i.buttonArea},r.a.createElement(Ne,{classes:i,product:t}))),r.a.createElement(q.a,{item:!0},r.a.createElement(x.a,null),r.a.createElement(ye,{rating:t.averageRating})),r.a.createElement(q.a,{item:!0},r.a.createElement(x.a,null),r.a.createElement(fe.a,{className:i.paper},r.a.createElement(ie.a,{variant:"h4"},"Reviews"),r.a.createElement(Oe,{productReviews:c,classes:i})))))})),we=t(14),Ce=t(72),Se=t(117),ke=t(209),Ie=function(e){var a=e.text,t=Object(Se.a)(e,["text"]);return r.a.createElement(L.a,Object.assign({},t,{variation:"contained",color:"primary",disabled:!0}),r.a.createElement(ke.a,{size:15,style:{marginRight:"5px"}}),a)},Pe=Object(_.a)((function(e){var a;return{form:(a={display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},Object(s.a)(a,e.breakpoints.up("md"),{width:"60%"}),Object(s.a)(a,"margin","auto"),Object(s.a)(a,"borderRadius","20px"),Object(s.a)(a,"padding","10px 0"),Object(s.a)(a,"backgroundColor","#fff"),Object(s.a)(a,"boxShadow","0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"),a),input:{margin:"20px 0"},subBnt:{margin:"10px 0"}}}),{index:1});var Te=Object($.b)((function(e){var a=e.auth;return{isAuth:a.isAuth,loading:a.loading}}))((function(e){var a=e.dispatch,t=e.loading,n=e.isAuth,c=e.location,l=Pe(),s=(c.state||{from:{pathname:"/"}}).from,m=Object(Ce.a)({initialValues:{email:"",password:""},validate:function(e){var a={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Email is Required",e.password||(a.password="Password is Required"),a},onSubmit:function(e){var t;a((t=e,function(e){e({type:"LOADING_USER"}),le()({method:"POST",url:"/api/v1/ecartUsers/login",data:Object(we.a)({},t)}).then((function(a){e({type:"USER_AUTH",payload:a.data.data})}))}))}}),u=m.errors,p=m.touched,d=m.handleSubmit,g=m.getFieldProps;return n?r.a.createElement(o.a,{to:s}):r.a.createElement(de,null,r.a.createElement("form",{className:l.form,onSubmit:d},r.a.createElement("h3",null,"Login to ECART"),r.a.createElement(F.a,Object.assign({className:l.input,id:"email",type:"email",variant:"outlined",label:"Email"},g("email"),{error:p.email&&u.email&&!0,helperText:p.email&&u.email})),r.a.createElement(F.a,Object.assign({className:l.input,id:"password",variant:"outlined",label:"Password",type:"password"},g("password"),{error:p.password&&u.password&&!0,helperText:p.password&&u.password})),t?r.a.createElement(Ie,{text:"login"}):r.a.createElement(L.a,{type:"submit",className:l.subBnt,variant:"contained",color:"primary"},"Login"),r.a.createElement("p",null,"Create new account ",r.a.createElement(i.b,{to:"/user/signin"},"Sign in"))))}));var Ae=Object($.b)((function(e){var a=e.auth;return{isAuth:a.isAuth,loading:a.loading}}))((function(e){var a=e.dispatch,t=e.loading,n=e.isAuth,c=e.location,l=Pe(),s=(c.state||{from:{pathname:"/"}}).from,m=Object(Ce.a)({initialValues:{name:"",email:"",password:"",confirmPassword:""},validate:function(e){var a={};return e.name||(a.name="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",e.password?e.password.length<8&&(a.password="Password length must be 8 or more"):a.password="Required",e.confirmPassword?e.confirmPassword!==e.password&&(a.confirmPassword="Password not matched"):a.confirmPassword="Required",a},onSubmit:function(e){var t;a((t=e,function(e){e({type:"LOADING_USER"}),le()({method:"POST",url:"/api/v1/ecartUsers/signup",data:Object(we.a)({},t)}).then((function(a){e({type:"USER_AUTH",payload:a.data.data})}))}))}}),u=m.errors,p=m.touched,d=m.handleSubmit,g=m.getFieldProps,E=function(e,a){return a?p[e]&&u[e]:p[e]&&u[e]&&!0};return n?r.a.createElement(o.a,{to:s}):r.a.createElement(de,null,r.a.createElement("form",{className:l.form,onSubmit:d},r.a.createElement("h3",null,"Create your account in ECART"),r.a.createElement(F.a,Object.assign({className:l.input,id:"name",type:"text",variant:"outlined",label:"Name"},g("name"),{error:E("name"),helperText:E("name",!0)})),r.a.createElement(F.a,Object.assign({className:l.input,id:"email",type:"email",variant:"outlined",label:"Email"},g("email"),{error:E("email"),helperText:E("email",!0)})),r.a.createElement(F.a,Object.assign({className:l.input,id:"password",variant:"outlined",label:"Password",type:"password"},g("password"),{error:E("password"),helperText:E("password",!0)})),r.a.createElement(F.a,Object.assign({className:l.input,id:"confirmPassword",variant:"outlined",label:"ConfirmPassword",type:"password"},g("confirmPassword"),{error:E("confirmPassword"),helperText:E("confirmPassword",!0)})),t?r.a.createElement(Ie,{text:"signin"}):r.a.createElement(L.a,{type:"submit",className:l.subBnt,variant:"contained",color:"primary"},"sign in"),r.a.createElement("p",null,"Already have an account ? ",r.a.createElement(i.b,{to:"/user/login"},"login"))))})),Re=Object(_.a)((function(e){return{root:{padding:"12px",margin:"0 10px"},items:{backgroundColor:"#fff",padding:"15px",border:"1px solid #e2e8ea"},imgBox:{display:"flex",justifyContent:"center",height:"130px",padding:"10px"},info:{padding:"10px"},cartProduct:{border:"1px solid #ecf0f1",boxShadow:"0px 5px 10px rgba(0, 0, 0, 0.15)",marginTop:"15px"},name:{fontSize:"18px",marginTop:"10px"},price:{fontSize:"20px",marginTop:"10px"},qtyBtn:{minWidth:"5px",padding:"5px 10px"},qty:{display:"flex",alignItems:"center","& p":{marginRight:"10px"}},prdQty:{display:"inline",width:"30px",textAlign:"center"},cartOptn:{display:"flex",justifyContent:"space-between",marginTop:"15px"},priceDtl:{margin:"15px 0"},priceItems:{display:"flex",justifyContent:"center"},orderBtn:{marginTop:"15px"},main:{display:"inline-flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%",height:"100vh","& h6":{marginBottom:"15px"}},emptyCart:{display:"flex",width:"300px",height:"200px",border:"1px solid #ecf0f1"}}}),{index:1}),De=t(210),_e=t(113),Be=t.n(_e);var Ue=Object($.b)((function(e){var a=e.cart;return{products:a.products,noOfItems:a.noOfItems,totalPrice:a.totalPrice}}))((function(e){var a=e.products,t=e.noOfItems,n=e.totalPrice,c=e.dispatch,l=Re(),i=function(){return r.a.createElement(De.a,{className:l.main},r.a.createElement(ie.a,{variant:"h6"},"Your Cart is Empty !"),r.a.createElement("div",{className:l.emptyCart},r.a.createElement("img",{src:"../resources/emptyCart.png",alt:"empty",style:{width:"100%",height:"100%"}})))};return 0===t?r.a.createElement(i,null):r.a.createElement("div",{className:l.root},r.a.createElement(x.a,null),r.a.createElement(q.a,{container:!0,spacing:3},r.a.createElement(q.a,{item:!0,xs:12,md:8},r.a.createElement("div",{className:l.items},r.a.createElement("h2",null,"My cart (",t,")"),a.map((function(e){return r.a.createElement(q.a,{container:!0,className:l.cartProduct},r.a.createElement(q.a,{item:!0,xs:12,sm:4,className:l.imgBox},r.a.createElement("img",{src:"/api/v1/ecartproducts/product_image/".concat(e._id,"/").concat(e.images[0]),alt:"product",style:{maxWidth:"100%",height:"100%"}})),r.a.createElement(q.a,{item:!0,xs:12,sm:8,className:l.info},r.a.createElement(ie.a,{className:l.name},e.name),r.a.createElement(ie.a,{className:l.price},"\u20b9",e.totalPrice.toLocaleString()),r.a.createElement("div",{className:l.cartOptn},r.a.createElement("div",{className:l.qty},r.a.createElement("p",null,"QTY "),r.a.createElement(L.a,{variant:"contained",color:"primary",className:l.qtyBtn,onClick:function(){return c((a=e._id,function(e){e({type:"DEC_QTY",payload:a})}));var a}},"-"),r.a.createElement("div",{className:l.prdQty},e.qty),r.a.createElement(L.a,{variant:"contained",color:"primary",className:l.qtyBtn,onClick:function(){return c((a=e._id,function(e){e({type:"INC_QTY",payload:a})}));var a}},"+")),r.a.createElement(z.a,{color:"primary",onClick:function(){return c((a=e._id,function(e){e({type:"REMOVE_ITEM",payload:a})}));var a}},r.a.createElement(Be.a,null)))))})))),r.a.createElement(q.a,{item:!0,xs:12,md:4},r.a.createElement("div",{className:l.items}," ",r.a.createElement(ie.a,{variant:"h5"},"Price details "),r.a.createElement("hr",null),r.a.createElement(q.a,{container:!0,spacing:3,className:l.priceDtl},r.a.createElement(q.a,{item:!0,xs:6,className:l.priceItems},r.a.createElement(ie.a,{variant:"subtitle1"},"Price (",t," ",t>1?"items":"item",")"," ")),r.a.createElement(q.a,{item:!0,xs:6,className:l.priceItems},r.a.createElement(ie.a,{variant:"subtitle1"}," ","\u20b9",n.toLocaleString()," ")),r.a.createElement(q.a,{item:!0,xs:6,className:l.priceItems},r.a.createElement(ie.a,{variant:"subtitle1"}," Delivery Charges ")),r.a.createElement(q.a,{item:!0,xs:6,className:l.priceItems},r.a.createElement(ie.a,{variant:"subtitle1"},"Free")),r.a.createElement(q.a,{item:!0,xs:6,className:l.priceItems},r.a.createElement(ie.a,{variant:"h6"},"Total Amount ")),r.a.createElement(q.a,{item:!0,xs:6,className:l.priceItems},r.a.createElement(ie.a,{variant:"h6"}," ","\u20b9",n.toLocaleString()," ")),r.a.createElement(q.a,{item:!0,xs:12,className:l.priceItems},r.a.createElement(L.a,{variant:"contained",color:"primary",className:l.orderBtn},"Place Order")))))))})),Le=Object(_.a)((function(e){return{infoSection:{marginTop:"50px"},info:{display:"flex",justifyContent:"center",alignItems:"center"},infoBox:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",backgroundColor:"#fff",padding:"20px 40px",boxShadow:" 0px 6px 15px rgba(0, 0, 0, 0.25)",borderRadius:"15px",color:"#001893"},midSection:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"50px",backgroundColor:"#fff",padding:"20px "},badge:{background:"linear-gradient(180deg, rgba(243, 156, 18, 0.6) 0%, #F39C12 100%)",color:"#fff",boxShadow:"0px 6px 10px rgba(0, 0, 0, 0.25)",padding:"15px 40px",borderRadius:"50px",fontSize:"22px"},shopCategory:{margin:"50px 0"},category:{display:"flex",justifyContent:"center",alignItems:"center"},shopIcon:{color:"#FAA720",fontSize:"50px"},shopCatg:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px 0",textDecoration:"none",color:"black",backgroundColor:"#fff","&:hover":{boxShadow:"0px 6px 10px rgba(0, 0, 0, 0.25)"}}}}),{index:1});var qe=[{path:"/",component:function(){var e=Le();return r.a.createElement(q.a,{container:!0},r.a.createElement(q.a,{item:!0,xs:12},r.a.createElement("img",{src:"./resources/background.svg",style:{width:"100%",height:"100%"}})),r.a.createElement(q.a,{container:!0,item:!0,xs:12,spacing:3,className:e.infoSection},r.a.createElement(q.a,{item:!0,xs:12,sm:4,className:e.info},r.a.createElement("div",{className:e.infoBox},r.a.createElement("img",{src:"./resources/countries.svg",style:{width:"100%",height:"100%"}}),r.a.createElement(ie.a,{variant:"subtitle1"},"countries"),r.a.createElement(ie.a,{variant:"subtitle1"},"12 +"))),r.a.createElement(q.a,{item:!0,xs:12,sm:4,className:e.info},r.a.createElement("div",{className:e.infoBox},r.a.createElement("img",{src:"./resources/customers.svg",style:{width:"100%",height:"100%"}}),r.a.createElement(ie.a,{variant:"subtitle1"},"customers"),r.a.createElement(ie.a,{variant:"subtitle1"},"15000 +"))),r.a.createElement(q.a,{item:!0,xs:12,sm:4,className:e.info},r.a.createElement("div",{className:e.infoBox},r.a.createElement("img",{src:"./resources/stores.svg",style:{width:"100%",height:"100%"}}),r.a.createElement(ie.a,{variant:"subtitle1"},"stores"),r.a.createElement(ie.a,{variant:"subtitle1"},"250 +")))),r.a.createElement(q.a,{item:!0,xs:12,className:e.midSection},r.a.createElement("div",{className:e.badge},"Shop By Category")),r.a.createElement(q.a,{container:!0,item:!0,xs:12,spacing:3,className:e.shopCategory},r.a.createElement(q.a,{item:!0,xs:6,sm:3}," ",r.a.createElement(i.b,{to:"/products/category/mobiles",className:e.shopCatg},r.a.createElement(k.a,{className:e.shopIcon}),r.a.createElement(ie.a,{variant:"subtitle2"}," Mobiles"))),r.a.createElement(q.a,{item:!0,xs:6,sm:3},r.a.createElement(i.b,{to:"/products/category/laptops",className:e.shopCatg},r.a.createElement(y.a,{className:e.shopIcon}),r.a.createElement(ie.a,{variant:"subtitle2"},"Laptops"))),r.a.createElement(q.a,{item:!0,xs:6,sm:3},r.a.createElement(i.b,{to:"/products/category/headsets",className:e.shopCatg}," ",r.a.createElement(O.a,{className:e.shopIcon}),r.a.createElement(ie.a,{variant:"subtitle2"},"Headsets"))),r.a.createElement(q.a,{item:!0,xs:6,sm:3},r.a.createElement(i.b,{to:"/products/category/speakers",className:e.shopCatg},r.a.createElement(j.a,{className:e.shopIcon}),r.a.createElement(ie.a,{variant:"subtitle2"},"Speakers")))))},public:!0,exact:!0},{path:"/products/category/:name",component:Ee,public:!0},{path:"/product/:id",component:je,public:!0},{path:"/user/login",component:Te,public:!0},{path:"/user/signin",component:Ae,public:!0},{path:"/user/cart",component:Ue,public:!0}],ze=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(K,null),r.a.createElement(o.d,null,qe.map((function(e,a){return r.a.createElement(o.b,{exact:e.exact,key:a,path:e.path,component:e.component})})))))},Fe=t(36),Ge=t(114),Me=t(115),He={products:[],totalproducts:0,loading:!0,category:""};var Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_PRODUCTS":return Object(we.a)({},e,{products:a.payload.products,totalproducts:a.payload.products.length,category:a.payload.category,loading:!1});case"LOADING_PRODUCTS":return Object(we.a)({},e,{loading:!0});default:return e}},Ye={product:{},loading:!0,reviews:[]};var Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_PRODUCT":return Object(we.a)({},e,{product:a.payload.product,reviews:a.payload.reviews,loading:!1});case"LOADING_PRODUCT":return Object(we.a)({},e,{loading:!0});default:return e}},We=t(83),Ze=t.n(We),Je=function(){return Ze.a.get("jwt")},$e={user:null,isAuth:!!Je(),token:Je(),authError:null,loading:!1};var Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_AUTH":return Object(we.a)({},e,{token:Je(),isAuth:!0,loading:!1});case"LOADING_USER":return Object(we.a)({},e,{loading:!0});case"AUTH_ERROR":return Object(we.a)({},e,{authError:a.payload,loading:!1});case"LOGOUT_USER":return Ze.a.remove("jwt"),Object(we.a)({},e,{token:null,isAuth:!1});default:return e}},Xe=function(){var e=JSON.parse(localStorage.getItem("cartPrd"));return e||[]},ea={products:Xe(),noOfItems:Xe().length,totalPrice:aa(Xe())};function aa(e){return e.map((function(e){return e.totalPrice})).reduce((function(e,a){return e+a}),0)}var ta=function(e){return localStorage.setItem("cartPrd",JSON.stringify(e))},na=function(e,a){var t=a.find((function(a){return a._id===e}));return a.indexOf(t)},ra=function(e,a,t){var n=a.map((function(a){if(e===a._id){var n="inc"===t?a.qty+1:a.qty>1?a.qty-1:a.qty,r=a.price*n;return Object(we.a)({},a,{qty:n,totalPrice:r})}return a}));return ta(n),n};var ca=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ea,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_ITEM":var t=[].concat(Object(re.a)(e.products),[Object(we.a)({},a.payload,{qty:1,totalPrice:a.payload.price})]);return ta(t),Object(we.a)({},e,{products:t,noOfItems:t.length,totalPrice:aa(t)});case"REMOVE_ITEM":var n=Object(re.a)(e.products),r=na(a.payload,n);return n.splice(r,1),ta(n),Object(we.a)({},e,{products:n,noOfItems:n.length,totalPrice:aa(n)});case"INC_QTY":var c=Object(re.a)(e.products),l=ra(a.payload,c,"inc");return Object(we.a)({},e,{products:l,totalPrice:aa(l)});case"DEC_QTY":var i=Object(re.a)(e.products),o=ra(a.payload,i,"dec");return Object(we.a)({},e,{products:o,totalPrice:aa(o)});default:return e}},la=Object(Fe.combineReducers)({getProducts:Qe,getProduct:Ve,auth:Ke,cart:ca}),ia=[Ge.a],oa=Object(Fe.createStore)(la,Object(Me.composeWithDevTools)(Fe.applyMiddleware.apply(void 0,ia)));t(156);l.a.render(r.a.createElement($.a,{store:oa},r.a.createElement(ze,null)," "),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.3ed309ad.chunk.js.map