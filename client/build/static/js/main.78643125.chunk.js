(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{132:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t(32),s=t.n(n),r=(t(95),t(53)),i=t(11),l=t(26),o=t(30),j=t(13),d=t(49),m=t(1),b=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(o.a,{collapseOnSelect:!0,expand:"lg",className:"home-nav",children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(l.LinkContainer,{to:"/",children:Object(m.jsx)(o.a.Brand,{id:"main-logo",children:Object(m.jsx)("i",{className:"fas fa-map-marked"})})}),Object(m.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsx)(o.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end",children:Object(m.jsxs)(j.a,{className:"me-auto",children:[Object(m.jsx)(l.LinkContainer,{to:"/register",children:Object(m.jsx)(j.a.Link,{children:"register"})}),Object(m.jsx)(l.LinkContainer,{to:"/login",children:Object(m.jsx)(j.a.Link,{href:"#pricing",children:"login"})})]})})]})})})},u=t(88),h=t(43),p=t.n(h),O=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"home",children:[Object(m.jsx)("div",{className:"parrax",children:Object(m.jsx)(u.Parallax,{bgImage:"https://res.cloudinary.com/dlj1sbbtb/image/upload/v1627590070/useLocal-app-data/Front-End/Homepage/outdoor-dining-1846137_1920_nkg8py.jpg",strength:500,children:Object(m.jsx)("div",{style:{height:1e3},children:Object(m.jsx)("div",{className:"main-header",children:"useLocal"})})})}),Object(m.jsx)("section",{className:"slogan",children:Object(m.jsx)("h2",{children:"all the places for the people by the people."})}),Object(m.jsxs)("div",{className:"second-hero",children:[Object(m.jsx)("img",{id:"",src:"https://res.cloudinary.com/dlj1sbbtb/image/upload/c_mfit,h_100,q_50,w_1000/v1627080361/useLocal-app-data/Front-End/Homepage/brick-wall-1834784_o2z4v0.jpg",alt:"bakery"}),Object(m.jsx)(p.a,{right:!0,children:Object(m.jsxs)("div",{className:"second-hero-text",children:[Object(m.jsx)("h5",{id:"hero-title",children:"find hundreds of hiden gems in your local area"}),Object(m.jsx)("hr",{})]})})]}),Object(m.jsxs)("div",{className:"second-hero",children:[Object(m.jsx)(p.a,{left:!0,children:Object(m.jsxs)("div",{className:"second-hero-text",children:[Object(m.jsx)("h5",{id:"hero-title",children:"share your experiences on our social platform"}),Object(m.jsx)("hr",{})]})}),Object(m.jsx)("img",{src:"https://res.cloudinary.com/dlj1sbbtb/image/upload/c_mfit,q_49,w_1000/v1627048654/useLocal-app-data/Front-End/Homepage/search-4700433_yjzp64.jpg",alt:"people at town"})]})]}),Object(m.jsx)(b,{})]})},x=t(3),g=t(12),f=t.n(g),v=t(23),N=t(7),y=t(24),w=t.n(y),C=t(68),k=t(10),S=t(22),_=t.p+"static/media/load-red.c02004e4.svg",F=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CLOUDINARY_URL,L=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CLOUDINARY_UPLOAD_PRESET,T=function(e){var a=e.handleImageUrl,t=e.value,n=e.labelName,s=e.nameOf,r=Object(c.useState)(!1),i=Object(N.a)(r,2),l=i[0],o=i[1],j=function(){var e=Object(v.a)(f.a.mark((function e(t){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),(c=new FormData).append("file",t.target.files[0]),c.append("upload_preset",L),e.next=6,w.a.post(F,c);case 6:n=e.sent,a(n.data.url);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"upload-wrapper",children:[Object(m.jsxs)("label",{className:"frm-label",htmlFor:s,children:[" ",n]}),l&&!t?Object(m.jsx)("img",{className:"load-symbol",src:_}):"",t?Object(m.jsx)("i",{className:"fas fa-check-circle"}):"",Object(m.jsx)("input",{type:"file",id:"file",name:s,placeholder:"choose image",onChange:j,className:"image-upload"})]})})},I=function(){return window.localStorage.getItem("token")},E=t(28),P=function(e){var a=e.show,t=e.handleClose,n=Object(i.k)(),s=Object(c.useState)({name:"",image1:"",image2:"",image3:"",price_rage:"",description:"",location_type:"",address:"",city:"",state:"",country:"",postal_code:""}),r=Object(N.a)(s,2),l=r[0],o=r[1],j=function(e){var a=Object(x.a)(Object(x.a)({},l),{},Object(k.a)({},e.target.name,e.target.value));o(a)},d=function(){var e=Object(v.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,w.a.post("/api/maps/",l,{headers:{Authorization:"Bearer ".concat(I())}});case 4:E.b.success("your location has been succesfully added!"),n.push("/maps"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}();return console.log(l),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(E.a,{position:"top-center",autoClose:2e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,draggable:!0}),Object(m.jsxs)(S.a,{show:a,onHide:t,keyboard:!1,size:"lg",children:[Object(m.jsx)(S.a.Header,{children:Object(m.jsx)(S.a.Title,{children:"add a new location"})}),Object(m.jsx)(S.a.Body,{children:Object(m.jsxs)("form",{onSubmit:d,className:"add-location-frm",children:[Object(m.jsxs)("div",{className:"add-loc-frm-group",children:[Object(m.jsx)("label",{children:"name"}),Object(m.jsx)("input",{type:"text",placeholder:"enter location name",name:"name",onChange:j,value:l.name,required:!0})]}),Object(m.jsxs)("div",{className:"add-loc-frm-group",children:[Object(m.jsx)(T,{value:l.image1,name:"image1",handleImageUrl:function(e){o(Object(x.a)(Object(x.a)({},l),{},{image1:e}))},nameOf:"image1",labelName:"add a pic"}),Object(m.jsx)(T,{value:l.image2,name:"image2",handleImageUrl:function(e){o(Object(x.a)(Object(x.a)({},l),{},{image2:e}))},nameOf:"image2",labelName:"add another pic"}),Object(m.jsx)(T,{value:l.image3,name:"image3",handleImageUrl:function(e){o(Object(x.a)(Object(x.a)({},l),{},{image3:e}))},nameOf:"image3",labelName:"and another one..."})]}),Object(m.jsxs)("div",{className:"add-loc-frm-group",children:[Object(m.jsx)("label",{children:"select price category"}),Object(m.jsxs)("select",{name:"price_rage",onChange:j,value:l.person,children:[Object(m.jsx)("option",{value:"0",children:"choose option"}),Object(m.jsx)("option",{value:"1",children:"\xa3"}),Object(m.jsx)("option",{value:"2",children:"\xa3\xa3"}),Object(m.jsx)("option",{value:"3",children:"\xa3\xa3\xa3"}),Object(m.jsx)("option",{value:"4",children:"\xa3\xa3\xa3\xa3"})]})]}),Object(m.jsxs)("div",{className:"add-loc-frm-group",children:[Object(m.jsx)("label",{children:"location type"}),Object(m.jsxs)("select",{name:"location_type",onChange:j,value:l.location_type,children:[Object(m.jsx)("option",{value:"0",children:"choose option"}),Object(m.jsx)("option",{value:"food",children:"food"}),Object(m.jsx)("option",{value:"landmarks",children:"landmarks"}),Object(m.jsx)("option",{value:"bars",children:"bars"})]})]}),Object(m.jsxs)("div",{className:"add-loc-frm-group",children:[Object(m.jsx)("label",{children:"add description"}),Object(m.jsx)("textarea",{type:"textarea",placeholder:"description here",name:"description",onChange:j,value:l.description,required:!0})]}),Object(m.jsxs)("div",{className:"add-loc-frm-group",children:[Object(m.jsx)("label",{children:"addres"}),Object(m.jsx)("input",{type:"text",placeholder:"enter address",name:"address",onChange:j,value:l.address,required:!0})]}),Object(m.jsxs)("div",{className:"add-loc-frm-group",children:[Object(m.jsx)("label",{children:"city"}),Object(m.jsx)("input",{type:"text",placeholder:"enter city",name:"city",onChange:j,value:l.city,required:!0})]}),Object(m.jsxs)("div",{className:"add-loc-frm-group",children:[Object(m.jsx)("label",{children:"state"}),Object(m.jsx)("input",{type:"text",placeholder:"enter state if required",name:"state",onChange:j,value:l.state})]}),Object(m.jsxs)("div",{className:"add-loc-frm-group",children:[Object(m.jsx)("label",{children:"country"}),Object(m.jsx)("input",{type:"text",placeholder:"enter country",name:"country",onChange:j,value:l.country})]}),Object(m.jsxs)("div",{className:"add-loc-frm-group",children:[Object(m.jsx)("label",{children:"postcode"}),Object(m.jsx)("input",{type:"text",placeholder:"enter postcode",name:"postal_code",onChange:j,value:l.postal_code,required:!0})]}),Object(m.jsx)("button",{children:"submit"})]})})]})]})},R=t(46),q=t(16),D=t.n(q),H=function(e){var a=e.show,t=e.handleClose,c=e.handleFilteredChange;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(S.a,{show:a,onHide:t,className:"filter-modal",children:[Object(m.jsx)(S.a.Header,{children:Object(m.jsx)(S.a.Title,{children:"filter"})}),Object(m.jsx)(D.a,{collapse:!0,children:Object(m.jsx)(S.a.Body,{children:Object(m.jsxs)(R.a.Select,{"aria-label":"Default select example",onChange:c,children:[Object(m.jsx)("option",{value:"all",children:"all"}),Object(m.jsx)("option",{value:"food",children:"food"}),Object(m.jsx)("option",{value:"bars",children:"bars"}),Object(m.jsx)("option",{value:"landmarks",children:"landmarks"})]})})})]})})},A=function(e){var a=e.showPosition,t=e.handleFilteredChange,n=Object(c.useState)(!1),s=Object(N.a)(n,2),r=s[0],i=s[1],b=function(){return i(!1)},u=Object(c.useState)(!1),h=Object(N.a)(u,2),p=h[0],O=h[1],x=function(){return O(!1)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(P,{show:r,onHide:b,handleClose:b}),Object(m.jsx)(H,{show:p,onHide:x,handleClose:x,handleFilteredChange:t}),Object(m.jsx)(o.a,{collapseOnSelect:!0,expand:"lg",className:"app-nav",children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(j.a.Link,{onClick:a,className:"right-icons",children:Object(m.jsx)("i",{className:"fas fa-location-arrow"})}),Object(m.jsx)(j.a.Link,{className:"right-icons",onClick:function(){console.log("modal filter"),O(!0)},children:Object(m.jsx)("i",{className:"fas fa-filter"})}),Object(m.jsx)(j.a.Link,{className:"right-icons",onClick:function(){console.log("add location"),i(!0)},children:Object(m.jsx)("i",{className:"fas fa-plus"})}),Object(m.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsx)(o.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end",children:Object(m.jsxs)(j.a,{className:"me-auto",children:[Object(m.jsx)(l.LinkContainer,{to:"/feed",className:"left-icons",children:Object(m.jsx)(j.a.Link,{children:"feed"})}),Object(m.jsx)(l.LinkContainer,{to:"/favourites",className:"left-icons",children:Object(m.jsx)(j.a.Link,{children:"favourites"})}),Object(m.jsx)(l.LinkContainer,{to:"/profile",className:"left-icons",children:Object(m.jsx)(j.a.Link,{children:"profile"})}),Object(m.jsx)(l.LinkContainer,{to:"/",className:"left-icons",children:Object(m.jsx)(j.a.Link,{onClick:function(){window.localStorage.removeItem("token")},children:"logout"})})]})})]})})]})},B=t(45),U=t(52),z=t(59);var W=function(e,a){var t=Object(c.useState)((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):a}catch(c){return console.log(c),a}})),n=Object(N.a)(t,2),s=n[0],r=n[1];return[s,function(a){try{var t=a instanceof Function?a(s):a;r(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(c){console.log(c)}}]},J=function(e){var a=e.id,t=e.name,n=e.image1,s=e.image2,r=e.image3,i=e.description,l=e.owner,o=e.comments,j=e.address,d=e.city,b=e.country,u=e.postCode,h=e.price,p=e.type,O=e.lgShow,g=e.setLgShow,y=Object(c.useState)(!1),C=Object(N.a)(y,2),_=C[0],F=C[1],L=Object(c.useState)(!1),T=Object(N.a)(L,2),P=T[0],q=T[1],H=Object(c.useState)({text:"",rating:0,location:a}),A=Object(N.a)(H,2),J=A[0],K=A[1],V=W("items",[]),Y=Object(N.a)(V,2),G=Y[0],Q=Y[1],M=Object(c.useState)(o),X=Object(N.a)(M,2),Z=X[0],$=X[1];console.log("current",Z);var ee=function(){var e=Object(v.a)(f.a.mark((function e(t){var c,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w.a.post("/api/comments/",J,{headers:{Authorization:"Bearer ".concat(I())}});case 4:c=e.sent,n=c.data,console.log(n),$([].concat(Object(B.a)(Z),[n])),K({text:"",rating:0,location:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(a){return e.apply(this,arguments)}}(),ae=function(e){var a=[].concat(Object(B.a)(G),[e]);Q(a),E.b.success("This location is now saved to your favourites."),q(!P)},te=function(e){var a=e.target.id;JSON.parse(localStorage.getItem("items"));ae(a)};return console.log("the main comments",Z),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(E.a,{position:"top-center",autoClose:2e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,draggable:!0}),Object(m.jsxs)(S.a,{size:"md",show:O,onHide:function(){return g(!1)},"aria-labelledby":"example-modal-sizes-title-lg",className:"info-modal",children:[Object(m.jsx)(S.a.Header,{children:Object(m.jsxs)(S.a.Title,{id:"example-modal-sizes-title-lg",children:[Object(m.jsxs)("div",{className:"modal-info-header",children:[t,P?Object(m.jsx)("i",{id:a,onClick:te,className:"fas fa-heart"}):Object(m.jsx)("i",{id:a,onClick:te,className:"far fa-heart"})]}),Object(m.jsxs)("div",{className:"main-ratings",children:[Object(m.jsx)(U.a,{emptySymbol:"far fa-star",fullSymbol:"fas fa-star",readonly:!0,className:"rating-header",initialRating:function(){var e=o.reduce((function(e,a){return e+parseInt(a.rating)/5}),0);return Math.ceil(e)}()}),Object(m.jsx)("p",{className:"price-header",children:function(){for(var e=[],a=0;a<h;++a)e.push(Object(m.jsx)("i",{children:"\xa3"}));return e}()})]})]})}),Object(m.jsxs)(S.a.Body,{children:[Object(m.jsx)("div",{className:"short-info",children:Object(m.jsx)("span",{className:"loc-type",children:p})}),Object(m.jsx)("hr",{}),Object(m.jsxs)("h5",{className:"modal-address","aria-controls":"example-collapse-text",onClick:function(){return F(!_)},"aria-expanded":_,children:["address",_?Object(m.jsx)("i",{className:"fas fa-chevron-circle-up"}):Object(m.jsx)("i",{className:"fas fa-chevron-circle-down"})]}),Object(m.jsx)(z.a,{in:_,children:Object(m.jsx)("div",{className:"main-address-modal",children:Object(m.jsxs)("p",{children:[j,Object(m.jsx)("br",{}),d,Object(m.jsx)("br",{}),u,Object(m.jsx)("br",{}),b]})})}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"modal-description",children:[Object(m.jsx)("p",{children:i}),Object(m.jsxs)("span",{children:[Object(m.jsx)("strong",{children:"posted by"})," @",l.username]})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"modal-gallery",children:[Object(m.jsx)("img",{src:n,alt:""}),Object(m.jsx)("img",{src:s,alt:""}),Object(m.jsx)("img",{src:r,alt:""})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"comments",children:[Object(m.jsx)("h5",{children:"comments"}),Z.map((function(e){return Object(m.jsx)(D.a,{collapse:!0,children:Object(m.jsx)("div",{className:"comment",children:Object(m.jsxs)("div",{className:"comm-text",children:[Object(m.jsx)(U.a,{emptySymbol:"far fa-star",fullSymbol:"fas fa-star",initialRating:e.rating,className:"comment-rating",readonly:!0}),Object(m.jsx)("p",{className:"main-text",children:e.text}),Object(m.jsxs)("p",{className:"poster",children:[" ",Object(m.jsx)("strong",{children:"posted by"})," @",e.owner.username]})]})})},e.created_at)})),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"add-comment",children:[Object(m.jsx)("h5",{children:"add a comment.."}),Object(m.jsx)("div",{className:"form-comment",children:Object(m.jsxs)(R.a,{onSubmit:ee,children:[Object(m.jsx)(R.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:Object(m.jsx)(U.a,{emptySymbol:"far fa-star",fullSymbol:"fas fa-star",initialRating:J.rating,className:"form-comment-rating",onChange:function(e){var a=e,t=Object(x.a)(Object(x.a)({},J),{},{rating:a});K(t)},name:"rating"})}),Object(m.jsx)(R.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:Object(m.jsx)(R.a.Control,{className:"main-comment-text",as:"textarea",rows:3,name:"text",value:J.text,onChange:function(e){var a=Object(x.a)(Object(x.a)({},J),{},Object(k.a)({},e.target.name,e.target.value));K(a)},placeholder:"add your comment here..."})}),Object(m.jsx)("button",{className:"submit-comment",children:"submit"})]})})]})]})]})]},a)]})},K=function(){var e=Object(c.useState)([]),a=Object(N.a)(e,2),t=a[0],n=a[1],s=function(){var e=Object(c.useState)({}),a=Object(N.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)(null),r=Object(N.a)(s,2),i=r[0],l=r[1],o=function(e){var a=e.coords;n({latitude:a.latitude,longitude:a.longitude})},j=function(e){l(e.message)};return Object(c.useEffect)((function(){var e=navigator.geolocation;if(e){var a=e.watchPosition(o,j);return function(){return e.clearWatch(a)}}l("Geolocation is not supported")}),[]),Object(x.a)(Object(x.a)({},t),{},{error:i})}(),r=s.latitude,i=s.longitude,l=s.error,o=Object(c.useState)([]),j=Object(N.a)(o,2),d=j[0],b=j[1],u=Object(c.useState)(!1),h=Object(N.a)(u,2),p=h[0],O=h[1],g=Object(c.useState)([]),y=Object(N.a)(g,2),k=y[0],S=y[1],_=Object(c.useState)({latitude:51.46251,longitude:-.13249,zoom:12,bearing:0,pitch:0}),F=Object(N.a)(_,2),L=F[0],T=F[1];Object(c.useEffect)((function(){(function(){var e=Object(v.a)(f.a.mark((function e(){var a,t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("/api/maps/");case 3:a=e.sent,t=a.data,n(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var I=function(e){var a=parseInt(e.target.id);console.log("userInput",a),console.log("locations",t[0]);var c=t.filter((function(e){return e.id===a}));S(c),O(!0)};return console.log("locations",t),Object(m.jsxs)(m.Fragment,{children:[k.map((function(e){return Object(m.jsx)(J,{id:e.id,name:e.name,image1:e.image1,image2:e.image2,image3:e.image3,description:e.description,type:e.location_type,address:e.address,city:e.city,country:e.country,price:e.price_rage,postCode:e.postal_code,owner:e.owner,comments:e.comments,lgShow:p,setLgShow:O,priceTag:e.price_rage},e.id)})),Object(m.jsx)(C.c,Object(x.a)(Object(x.a)({},L),{},{width:"100vw",height:"100vh",mapStyle:"mapbox://styles/mapbox/outdoors-v11",onViewportChange:function(e){return T(e)},mapboxApiAccessToken:"pk.eyJ1IjoiYXJqdW5kb2VsIiwiYSI6ImNrcWh2dmdqNzJoenQyb3F0dW0yZWxrbnYifQ.UK1B_huaJtR_5VRPt8F_sw",children:(d.length>0?d:t).map((function(e){return Object(m.jsx)(C.b,{longitude:parseFloat(e.longitude),latitude:parseFloat(e.latitude),children:Object(m.jsx)("span",{className:"mark-icon",children:Object(m.jsx)("i",{id:e.id,onClick:I,className:"fas fa-map-pin"})})},e.id)}))})),Object(m.jsx)(A,{showPosition:function(){console.log("latitude",r),console.log("long",i),console.log(l),T(Object(x.a)(Object(x.a)({},L),{},{latitude:r,longitude:i,zoom:15,transitionInterpolator:new C.a({speed:2}),transitionDuration:"auto"}))},handleFilteredChange:function(e){if(console.log("filtered change",e.target.value),"all"===e.target.value)b(t);else{var a=t.filter((function(a){return a.location_type===e.target.value}));b(a)}}})]})},V=function(){var e=Object(i.k)(),a=Object(c.useState)({username:"",email:"",first_name:"",last_name:"",profile_image:"",password:"",password_confirmation:""}),t=Object(N.a)(a,2),n=t[0],s=t[1],r=function(e){var a=Object(x.a)(Object(x.a)({},n),{},Object(k.a)({},e.target.name,e.target.value));s(a)},l=function(){var a=Object(v.a)(f.a.mark((function a(t){return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,w.a.post("/api/auth/register/",n);case 4:console.log(n),e.push("/login"),E.b.success("Registration Success"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b,{}),Object(m.jsx)(E.a,{position:"top-center",autoClose:2e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,draggable:!0}),Object(m.jsx)("div",{className:"register-wrap",children:Object(m.jsxs)("form",{onSubmit:l,className:"register-form",children:[Object(m.jsx)(D.a,{top:!0,children:Object(m.jsxs)("div",{className:"form-group-register",children:[Object(m.jsx)("label",{className:"frm-label",htmlFor:"email",children:"username"}),Object(m.jsx)("input",{className:"main-input",type:"text",name:"username",placeholder:"enter username",value:n.username,onChange:r,required:!0})]})}),Object(m.jsx)(D.a,{bottom:!0,children:Object(m.jsxs)("div",{className:"form-group-register",children:[Object(m.jsx)("label",{className:"frm-label",htmlFor:"email",children:"email"}),Object(m.jsx)("input",{className:"main-input",type:"email",name:"email",placeholder:"enter email",value:n.email,onChange:r,required:!0})]})}),Object(m.jsxs)("div",{className:"row-register",children:[Object(m.jsx)(D.a,{left:!0,children:Object(m.jsxs)("div",{className:"form-group-register",children:[Object(m.jsx)("label",{className:"frm-label",htmlFor:"first_name",children:"first name"}),Object(m.jsx)("input",{className:"main-input",type:"text",name:"first_name",placeholder:"enter first name",value:n.first_name,onChange:r,required:!0})]})}),Object(m.jsx)(D.a,{right:!0,children:Object(m.jsxs)("div",{className:"form-group-register",children:[Object(m.jsx)("label",{className:"frm-label",htmlFor:"last_name",children:"last name"}),Object(m.jsx)("input",{className:"main-input",type:"text",name:"last_name",placeholder:"enter last name",value:n.last_name,onChange:r,required:!0})]})})]}),Object(m.jsx)(D.a,{top:!0,children:Object(m.jsxs)("div",{className:"form-group-register",children:[Object(m.jsx)("label",{className:"frm-label",htmlFor:"password",children:"password"}),Object(m.jsx)("input",{className:"main-input",type:"password",name:"password",placeholder:"enter password",value:n.password,onChange:r,required:!0})]})}),Object(m.jsx)(D.a,{bottom:!0,children:Object(m.jsxs)("div",{className:"form-group-register",children:[Object(m.jsx)("label",{className:"frm-label",htmlFor:"password_confirmation",children:"password confirmation"}),Object(m.jsx)("input",{className:"main-input",type:"password",name:"password_confirmation",placeholder:"confirm password",value:n.password_confirmation,onChange:r,required:!0})]})}),Object(m.jsx)(D.a,{top:!0,children:Object(m.jsx)("div",{className:"form-group-register",children:Object(m.jsx)(T,{value:n.profile_image,name:"profile_image",handleImageUrl:function(e){s(Object(x.a)(Object(x.a)({},n),{},{profile_image:e}))},labelName:"choose profile pic"})})}),Object(m.jsx)(D.a,{bottom:!0,children:Object(m.jsx)("button",{children:"submit"})})]})})]})},Y=(t(131),function(){var e=Object(i.k)(),a=Object(c.useState)({email:"",password:""}),t=Object(N.a)(a,2),n=t[0],s=t[1],r=function(e){var a=Object(x.a)(Object(x.a)({},n),{},Object(k.a)({},e.target.name,e.target.value));s(a)},l=function(){var a=Object(v.a)(f.a.mark((function a(t){var c,s;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.prev=1,a.next=4,w.a.post("/api/auth/login/",n);case 4:c=a.sent,s=c.data,console.log("data",s),console.log(n),r=s.token,window.localStorage.setItem("token",r),console.log("TOKEN",r),e.push("/maps"),E.b.success("".concat(s.message)),a.next=17;break;case 13:a.prev=13,a.t0=a.catch(1),E.b.warning("oops something went wrong!"),console.log(a.t0);case 17:case"end":return a.stop()}var r}),a,null,[[1,13]])})));return function(e){return a.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b,{}),Object(m.jsx)(E.a,{position:"top-center",autoClose:2e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,draggable:!0}),Object(m.jsx)("div",{className:"login-wrap",children:Object(m.jsxs)("form",{onSubmit:l,className:"register-form",children:[Object(m.jsx)(D.a,{top:!0,children:Object(m.jsxs)("div",{className:"form-group-register",children:[Object(m.jsx)("label",{className:"frm-label",htmlFor:"email",children:"email"}),Object(m.jsx)("input",{className:"main-input",type:"email",name:"email",placeholder:"enter email",value:n.email,onChange:r,required:!0})]})}),Object(m.jsx)(D.a,{bottom:!0,children:Object(m.jsxs)("div",{className:"form-group-register",children:[Object(m.jsx)("label",{className:"frm-label",htmlFor:"password",children:"password"}),Object(m.jsx)("input",{className:"main-input",type:"password",name:"password",placeholder:"enter password",value:n.password,onChange:r,required:!0})]})}),Object(m.jsx)(D.a,{top:!0,children:Object(m.jsx)("button",{children:"submit"})})]})})]})}),G=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Profile"})})},Q=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(o.a,{collapseOnSelect:!0,expand:"lg",className:"app-nav",children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(l.LinkContainer,{to:"/maps",children:Object(m.jsx)(j.a.Link,{className:"right-icons",children:Object(m.jsx)("i",{className:"fas fa-map-marked"})})}),Object(m.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsx)(o.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end",children:Object(m.jsxs)(j.a,{className:"me-auto",children:[Object(m.jsx)(l.LinkContainer,{to:"/feed",className:"left-icons",children:Object(m.jsx)(j.a.Link,{children:"feed"})}),Object(m.jsx)(l.LinkContainer,{to:"/profile",className:"left-icons",children:Object(m.jsx)(j.a.Link,{children:"profile"})}),Object(m.jsx)(l.LinkContainer,{to:"/",className:"left-icons",children:Object(m.jsx)(j.a.Link,{children:"logout"})})]})})]})})})},M=function(){var e=Object(c.useState)([]),a=Object(N.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)(!1),r=Object(N.a)(s,2),i=r[0],l=r[1];Object(c.useEffect)((function(){(function(){var e=Object(v.a)(f.a.mark((function e(){var a,t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("/api/maps");case 3:a=e.sent,t=a.data,c=t.filter((function(e){return JSON.parse(localStorage.getItem("items")).map((function(e){return parseInt(e)})).includes(parseFloat(e.id))})),n(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]);console.log(function(){var e=t.filter((function(e){return e.comments.length>0}));console.log(e);var a=e.map((function(e){return e.comments}));console.log(a);var c=a.reduce((function(e,a){return e+a.rating/5}),0);console.log("average -> ",c)}());var o=function(){l(!i)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Q,{}),Object(m.jsxs)("div",{className:"favourites-wrapper",children:[Object(m.jsx)(p.a,{top:!0,children:Object(m.jsx)("h1",{children:"your favourites..."})}),t.map((function(e){return Object(m.jsx)(p.a,{top:!0,children:Object(m.jsxs)("div",{className:"favourites-single",children:[Object(m.jsxs)("div",{className:"fav-header",children:[Object(m.jsx)("h3",{children:e.name}),i?Object(m.jsx)("i",{id:e.id,onClick:o,className:"far fa-heart"}):Object(m.jsx)("i",{id:e.id,onClick:o,className:"fas fa-heart"})]}),Object(m.jsx)("div",{className:"fav-short-text",children:Object(m.jsx)(U.a,{emptySymbol:"far fa-star",fullSymbol:"fas fa-star",readonly:!0,className:"rating-header",initialRating:3})}),Object(m.jsx)("div",{className:"fav-descript",children:Object(m.jsx)("p",{children:e.description})})]})},e.id)}))]})]})},X=function(){return Object(m.jsx)(r.BrowserRouter,{children:Object(m.jsxs)(i.g,{children:[Object(m.jsx)(i.d,{component:M,path:"/favourites"}),Object(m.jsx)(i.d,{component:G,path:"/profile"}),Object(m.jsx)(i.d,{component:Y,path:"/login"}),Object(m.jsx)(i.d,{component:V,path:"/register"}),Object(m.jsx)(i.d,{component:K,path:"/maps"}),Object(m.jsx)(i.d,{component:O,path:"/"})]})})};s.a.render(Object(m.jsx)(X,{}),document.getElementById("root"))},95:function(e,a,t){}},[[132,1,2]]]);
//# sourceMappingURL=main.78643125.chunk.js.map