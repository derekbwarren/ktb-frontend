(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(9),o=t.n(i),l=t(22),c=t(12),s=(t(98),t(47)),m=t(48),d=t(56),p=t(49),u=t(57),g=(n.Component,t(29)),f=t(10),b=t(112),h=t(5),x=t(169),w=t(165),v=t(161),y=t(162),E=t(44),O=t(163),j=t(30),k=t(50),N=t(52),C=t(31),S=t(148),B=t(149),R=t(150),L=t(151),z=t(153),P=t(168),D=t(156),T=t(113),q=t(157),F=t(158),W=t(25),I=t(152),M=t(155),A=t(3),K=t(143),G=t(146),U=t(147),_=[{text:"Home",icon:r.a.createElement(K.a,null),link:"/",display:!1},{text:"All Managers",icon:r.a.createElement(G.a,null),link:"/managers",display:!0},{text:"Add New Manager",icon:r.a.createElement(U.a,null),link:"/managers/new",display:!0}];function H(){var e=Object(j.a)(["\n  &&& {\n    text-decoration: none;\n    color: ",";\n    &.app-bar {\n      visibility: ",";\n    }\n  }\n"]);return H=function(){return e},e}function J(){var e=Object(j.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Exo:500i&display=swap');\n  &&& {\n    font-family: 'Exo', sans-serif;\n    text-shadow: 1px 2px 4px rgba(0,0,0,0.2);\n    padding-right: 4px;\n    color: '#000';\n\n    &.menu {\n      margin-left: 32px;\n    }\n  }\n"]);return J=function(){return e},e}var V=Object(b.a)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),boxShadow:"0 2px 4px 0 rgba(0,0,0,0.2)"},appBarShift:{marginLeft:280,width:"calc(100% - ".concat(280,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},visibility:{visibility:"hidden"},drawer:{width:280,flexShrink:0,whiteSpace:"nowrap",backgroundColor:"#303030"},drawerOpen:{width:280,backgroundColor:"#1389e4",backgroundImage:"url(/assets/images/crystals_bg.png)",backgroundSize:"contain",backgroundPosition:"bottom",backgroundRepeat:"no-repeat",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(f.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1,backgroundColor:"#1389e4"},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(k.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},loginButton:{color:"rgba(0, 0, 0, 0.87)"},list:{backgroundColor:"#1389e4",color:"#fff"}}}),X=Object(C.a)(E.a).attrs({variant:"h5"})(J()),$=Object(C.a)(N.a)(H(),function(e){return e.open?"#fff":"#000"},function(e){return e.open?"hidden":"visible"}),Q=function(e){var a,t,i=e.children,o=e.history,l=e.location,c=new URLSearchParams(l).get("pathname"),s=V(),m=(Object(W.a)(),Object(n.useState)(!0)),d=Object(g.a)(m,2),p=d[0],u=d[1],b=function(){u(!p)};return r.a.createElement("div",{className:s.root},r.a.createElement(S.a,null),r.a.createElement(B.a,{color:"secondary",position:"fixed",className:Object(A.a)(s.appBar,Object(f.a)({},s.appBarShift,p)),style:{backgroundSize:"cover",backgroundColor:"#fff"}},r.a.createElement(R.a,null,r.a.createElement(L.a,{color:"inherit","aria-label":"open drawer",onClick:b,edge:"start",className:Object(A.a)(s.menuButton,Object(f.a)({},s.visibility,p))},r.a.createElement(I.a,null)),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",margin:"0 56px"}},r.a.createElement($,{to:"/",open:p,className:"app-bar"},r.a.createElement(X,null,"KnowThyBoss")),r.a.createElement(z.a,{color:"inherit",className:s.loginButton},"Login")))),r.a.createElement(P.a,{variant:"permanent",className:Object(A.a)(s.drawer,(a={},Object(f.a)(a,s.drawerOpen,p),Object(f.a)(a,s.drawerClose,!p),a)),classes:{paper:Object(A.a)((t={},Object(f.a)(t,s.drawerOpen,p),Object(f.a)(t,s.drawerClose,!p),t))},open:p},r.a.createElement("div",{className:s.toolbar,style:{backgroundColor:"#1f7acc",paddingBottom:"32px"}},r.a.createElement(L.a,{onClick:b,style:{color:"#fff"}},p?r.a.createElement(M.a,null):r.a.createElement(I.a,null))),r.a.createElement("div",{style:{textAlign:"center",backgroundColor:"#1389e4"}},r.a.createElement(X,{style:{backgroundColor:"#1389e4",padding:"16px 0",width:"210px",margin:"-32px auto 0 auto",color:"white",borderRadius:"4px",visibility:p?"":"hidden"}},r.a.createElement($,{to:"/",open:p},"KnowThyBoss"))),r.a.createElement(D.a,{className:s.list},_.map(function(e){return e.display&&r.a.createElement(T.a,{button:!0,key:e.text,selected:c===e.link,onClick:function(){return o.push(e.link)}},r.a.createElement(q.a,{style:{color:"#fff"}},e.icon),r.a.createElement(F.a,{primary:e.text}))}))),r.a.createElement("main",{className:s.content},r.a.createElement("div",{className:s.toolbar}),i))};Q.defaultProps={history:null,location:null};Object(c.g)(Q);var Y=t(83),Z=t(167);function ee(){var e=Object(j.a)(["\n  &&& {\n    text-decoration: none;\n    color: ",";\n    &.app-bar {\n      /* visibility: ","; */\n    }\n  }\n"]);return ee=function(){return e},e}function ae(){var e=Object(j.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Exo:500i&display=swap');\n  &&& {\n    font-family: 'Exo', sans-serif;\n    text-shadow: 1px 2px 4px rgba(0,0,0,0.2);\n    padding-right: 4px;\n    color: '#000';\n\n    &.menu {\n      margin-left: 32px;\n    }\n  }\n"]);return ae=function(){return e},e}var te=Object(b.a)(function(e){var a,t;return{root:{display:"flex"},drawer:(a={},Object(f.a)(a,e.breakpoints.up("sm"),{width:280,flexShrink:0}),Object(f.a)(a,"backgroundColor","#1389e4"),a),appBar:(t={marginLeft:280},Object(f.a)(t,e.breakpoints.up("sm"),{width:"calc(100% - ".concat(280,"px)")}),Object(f.a)(t,"boxShadow","0 2px 4px 0 rgba(0,0,0,0.1)"),t),menuButton:Object(f.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),loginButton:{marginRight:e.spacing(2)},toolbar:e.mixins.toolbar,drawerPaper:{width:280,backgroundColor:"#1389e4",backgroundImage:"url(/assets/images/crystals_bg.png)",backgroundSize:"contain",backgroundPosition:"bottom",backgroundRepeat:"no-repeat"},content:{flexGrow:1,padding:e.spacing(3)},title:{flexGrow:1}}}),ne=Object(C.a)(E.a).attrs({variant:"h5"})(ae()),re=Object(C.a)(N.a)(ee(),function(e){return e.open?"#fff":"#000"},function(e){return e.open?"hidden":"visible"}),ie=function(e){var a=e.children,t=e.history,n=e.location,i=Object(Y.a)(e,["children","history","location"]),o=new URLSearchParams(n).get("pathname"),l=i.container,c=te(),s=Object(W.a)(),m=r.a.useState(!1),d=Object(g.a)(m,2),p=d[0],u=d[1],f=function(){u(!p)},b=r.a.createElement("div",null,r.a.createElement("div",{className:c.toolbar,style:{backgroundColor:"#207acc"}}),r.a.createElement("div",{style:{textAlign:"center",backgroundColor:"#1389e4",width:"210px",borderRadius:"4px",margin:"0 auto"}},r.a.createElement(ne,{style:{backgroundColor:"#1389e4",padding:"16px 0",margin:"-32px auto 0 auto",color:"white",borderRadius:"4px"}},r.a.createElement(re,{to:"/",open:!0},"KnowThyBoss"))),r.a.createElement(D.a,null,_.map(function(e){return e.display&&r.a.createElement(T.a,{button:!0,key:e.text,selected:o===e.link,onClick:function(){t.push(e.link),p&&f()}},r.a.createElement(q.a,{style:{color:"#fff"}},e.icon),r.a.createElement(F.a,{style:{color:"#fff"},primary:e.text}))})));return r.a.createElement("div",{className:c.root},r.a.createElement(S.a,null),r.a.createElement(B.a,{position:"fixed",className:c.appBar},r.a.createElement(R.a,{style:{backgroundColor:"#fff"}},r.a.createElement(L.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:f,className:c.menuButton},r.a.createElement(I.a,{color:"primary"})),r.a.createElement(E.a,{variant:"h6",noWrap:!0,className:c.title,style:{visibility:"hidden"}},"Responsive drawer"),r.a.createElement(z.a,{color:"primary"},"Login"))),r.a.createElement("nav",{className:c.drawer,"aria-label":"mailbox folders"},r.a.createElement(Z.a,{smUp:!0,implementation:"css"},r.a.createElement(P.a,{container:l,variant:"temporary",anchor:"rtl"===s.direction?"right":"left",open:p,onClose:f,classes:{paper:c.drawerPaper},ModalProps:{keepMounted:!0}},b)),r.a.createElement(Z.a,{xsDown:!0,implementation:"css"},r.a.createElement(P.a,{classes:{paper:c.drawerPaper},variant:"permanent",open:!0},b))),r.a.createElement("main",{className:c.content},r.a.createElement("div",{className:c.toolbar}),a))};ie.defaultProps={history:null,location:null};var oe=Object(c.g)(ie),le=t(79),ce=t(159);function se(){var e=Object(j.a)(["\n  font-weight: bold;\n"]);return se=function(){return e},e}function me(){var e=Object(j.a)(["\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.3;\n"]);return me=function(){return e},e}var de=C.a.div(me()),pe=C.a.div(se()),ue=function(e){var a=Object(le.a)({},e);return r.a.createElement(de,a,r.a.createElement("div",null,"Rating is calculated using the"," ",r.a.createElement(pe,null,r.a.createElement(ce.a,{href:"https://www.netpromoter.com/know/",target:"_blank",rel:"noopener noreferrer"},"Net Promoter Score (NPS)"))," ","framework. NPS uses the answer to a key question, using a 0-10 scale: How likely is it that you would recommend this manager to a friend or colleague?"))},ge=[{id:1,firstName:"Stan",lastName:"Lee",company:"Capital One",level:"Senior Director",organization:"Card",rating:32},{id:2,firstName:"Stan",lastName:"Lee",company:"Capital One",level:"Director",organization:"Card",rating:54},{id:3,firstName:"Stan",lastName:"Lee",company:"Capital One",level:"Director",organization:"Card",rating:88},{id:4,firstName:"Stan",lastName:"Lee",company:"Capital One",level:"Director",organization:"Card",rating:-10}],fe=Object(b.a)(function(e){return{container:Object(f.a)({display:"flex",flexDirection:"column",flexWrap:"wrap",marginLeft:"4em",marginRight:"4em"},e.breakpoints.down("sm"),{marginLeft:"0",marginRight:"0"}),textField:Object(f.a)({marginTop:"0",marginBottom:"24px",marginLeft:"4em",marginRight:e.spacing(1),width:260},e.breakpoints.down("sm"),{marginLeft:"0"}),card:{display:"flex",marginBottom:"16px"},details:Object(f.a)({display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"flex-start"}),content:Object(f.a)({flex:"1 0 auto"},e.breakpoints.down("sm"),{padding:"16px 16px 0 16px"}),cover:{width:151},rating:Object(f.a)({display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},e.breakpoints.down("sm"),{}),ratingContainer:Object(f.a)({display:"flex",flexDirection:"column"},e.breakpoints.down("sm"),{}),playIcon:{height:38,width:38},worldClass:{color:"green"},excellent:{color:"lightgreen"},good:{color:"blue"},bad:{color:"red"},default:{color:"inherit"}}}),be=Object(h.a)(function(e){return{tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[1],fontSize:11}}})(x.a),he=function(){var e=fe(),a=Object(n.useState)([]),t=Object(g.a)(a,2),i=t[0],o=t[1],l=Object(n.useState)(""),c=Object(g.a)(l,2),s=c[0],m=c[1];Object(n.useEffect)(function(){o(ge)},[]);var d=function(e){return e>75?"worldClass":e>50?"excellent":e>0?"good":e<0?"bad":"default"};return r.a.createElement(n.Fragment,null,r.a.createElement(w.a,{id:"filter-managers",label:"Filter Managers",type:"search",className:e.textField,value:s,onChange:function(e){m(e.target.value),o(i.filter(function(e){return e.firstName.includes(s)||e.lastName.includes(s)}))}}),r.a.createElement("div",{className:e.container},i.map(function(a){var t=a.id,n=a.firstName,i=a.lastName,o=a.company,l=a.level,c=a.organization,s=a.rating;return r.a.createElement(v.a,{className:e.card,key:"".concat(i,"-").concat(t)},r.a.createElement("div",{className:e.details},r.a.createElement(y.a,{className:e.content},r.a.createElement(E.a,{component:"h5",variant:"h5"},n," ",i),r.a.createElement(E.a,{variant:"subtitle1",color:"textSecondary"},o," ","\u2014"," ",l,", ",c)),r.a.createElement(y.a,null,r.a.createElement(be,{TransitionComponent:O.a,title:r.a.createElement(ue,null),placement:"left",interactive:!0},r.a.createElement("div",{className:e.ratingContainer},r.a.createElement(E.a,{component:"h5",variant:"h5",className:e[d(s)]},s),r.a.createElement(E.a,{variant:"subtitle1",color:"textSecondary"},"Rating"))))))})))},xe=t(164),we=Object(b.a)(function(e){return{container:Object(f.a)({display:"flex",flexWrap:"wrap",width:"60%",margin:"0 auto",justifyContent:"center"},e.breakpoints.down("sm"),{width:"100%"}),fieldContainer:{marginTop:"16px",marginBottom:"16px"},fieldFlex:Object(f.a)({display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column"}),firstName:Object(f.a)({margin:"16px 8px 8px 8px",width:"50%"},e.breakpoints.down("sm"),{width:"auto",margin:"16px 8px 8px 8px"}),lastName:Object(f.a)({margin:"16px 8px 8px 8px",width:"50%"},e.breakpoints.down("sm"),{width:"auto",margin:8}),textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},dense:{marginTop:19},menu:{width:200},margin:{margin:e.spacing(1)}}}),ve=function(){var e=we(),a=r.a.useState({firstName:"",lastName:"",company:"",level:"",organization:""}),t=Object(g.a)(a,2),n=t[0],i=t[1],o=function(e){return function(a){var t=a.target.value;i(Object(k.a)({},n,Object(f.a)({},e,t)))}};return r.a.createElement("div",null,r.a.createElement(E.a,{className:e.margin,variant:"h5",style:{textAlign:"center"}},"Add New Manager"),r.a.createElement("form",{className:e.container,noValidate:!1,autoComplete:"off",onSubmit:function(e){e.preventDefault(),console.log("submit with values",n)}},r.a.createElement("div",{className:e.fieldFlex},r.a.createElement(w.a,{id:"manager-first-name",label:"First Name",className:e.firstName,fullWidth:!0,margin:"normal",onChange:o("firstName"),value:n.firstName,variant:"outlined",helperText:"Required",required:!0}),r.a.createElement(w.a,{id:"manager-last-name",label:"Last Name",className:e.lastName,fullWidth:!0,margin:"normal",onChange:o("lastName"),value:n.lastName,variant:"outlined",helperText:"Required",required:!0})),r.a.createElement(w.a,{id:"manager-company",select:!0,fullWidth:!0,label:"Select a Company",className:e.textField,value:n.company,onChange:o("company"),SelectProps:{MenuProps:{className:e.menu}},margin:"normal",style:{margin:8},variant:"outlined",helperText:"Required",required:!0},r.a.createElement(xe.a,{value:"Capital One"},"Capital One")),r.a.createElement(w.a,{id:"manager-level",label:"Level",style:{margin:8},fullWidth:!0,margin:"normal",onChange:o("level"),value:n.level,variant:"outlined",helperText:"Required",required:!0}),r.a.createElement(w.a,{id:"manager-organization",label:"Line of Business",style:{margin:"8px 8px 16px 8px"},fullWidth:!0,margin:"normal",onChange:o("organization"),value:n.organization,variant:"outlined",helperText:"Required",required:!0}),r.a.createElement(z.a,{variant:"contained",size:"large",color:"primary",className:e.margin,style:{margin:8,width:"100%"},type:"submit"},"Submit")))},ye=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(oe,this.props,r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/",render:function(){return r.a.createElement(c.a,{push:!0,to:"/managers"})}}),r.a.createElement(c.b,{exact:!0,path:"/managers",render:function(e){return r.a.createElement(he,e)}}),r.a.createElement(c.b,{exact:!0,path:"/managers/new",render:function(e){return r.a.createElement(ve,e)}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=Object(l.a)();document.title="KnowThyBoss",o.a.render(r.a.createElement(c.c,{history:Ee},r.a.createElement(ye,{history:Ee})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},93:function(e,a,t){e.exports=t(111)},98:function(e,a,t){}},[[93,1,2]]]);
//# sourceMappingURL=main.77f93d6e.chunk.js.map