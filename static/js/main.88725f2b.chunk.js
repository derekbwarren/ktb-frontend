(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,a,t){e.exports=t(146)},119:function(e,a,t){},146:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(13),i=t.n(o),l=t(27),c=t(48),s=(t(119),t(60)),m=t(61),d=t(67),u=t(62),p=t(51),g=t(68),f=t(19),b=(n.Component,t(12)),h=t(38),x=t(17),y=t(148),v=t(5),w=t(209),E=t(207),O=t(203),j=t(204),k=t(45),C=t(205),N=t(34),S=t(35),L=t(182),T=t(183),B=t(184),R=t(185),W=t(187),z=t(211),P=t(190),D=t(150),A=t(191),F=t(192),I=t(30),M=t(186),G=t(189),q=t(4),U=t(178),V=t(180),H=t(181),K=[{text:"Home",icon:r.a.createElement(U.a,null),link:"/",display:!1},{text:"All Managers",icon:r.a.createElement(V.a,null),link:"/managers",display:!0},{text:"Add New Manager",icon:r.a.createElement(H.a,null),link:"/managers/new",display:!0}];function J(){var e=Object(N.a)(["\n  &&& {\n    text-decoration: none;\n    color: ",";\n    &.app-bar {\n      visibility: ",";\n    }\n  }\n"]);return J=function(){return e},e}function _(){var e=Object(N.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Exo:500i&display=swap');\n  &&& {\n    font-family: 'Exo', sans-serif;\n    text-shadow: 1px 2px 4px rgba(0,0,0,0.2);\n    padding-right: 4px;\n    color: '#000';\n\n    &.menu {\n      margin-left: 32px;\n    }\n  }\n"]);return _=function(){return e},e}var X=Object(y.a)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),boxShadow:"0 2px 4px 0 rgba(0,0,0,0.2)"},appBarShift:{marginLeft:280,width:"calc(100% - ".concat(280,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},visibility:{visibility:"hidden"},drawer:{width:280,flexShrink:0,whiteSpace:"nowrap",backgroundColor:"#303030"},drawerOpen:{width:280,backgroundColor:"#1389e4",backgroundImage:"url(/assets/images/crystals_bg.png)",backgroundSize:"contain",backgroundPosition:"bottom",backgroundRepeat:"no-repeat",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(b.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1,backgroundColor:"#1389e4"},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(h.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},loginButton:{color:"rgba(0, 0, 0, 0.87)"},list:{backgroundColor:"#1389e4",color:"#fff"}}}),Y=Object(S.a)(k.a).attrs({variant:"h5"})(_()),$=Object(S.a)(c.b)(J(),function(e){return e.open?"#fff":"#000"},function(e){return e.open?"hidden":"visible"}),Q=function(e){var a,t,o=e.children,i=e.history,l=e.location,c=new URLSearchParams(l).get("pathname"),s=X(),m=(Object(I.a)(),Object(n.useState)(!0)),d=Object(x.a)(m,2),u=d[0],p=d[1],g=function(){p(!u)};return r.a.createElement("div",{className:s.root},r.a.createElement(L.a,null),r.a.createElement(T.a,{color:"secondary",position:"fixed",className:Object(q.a)(s.appBar,Object(b.a)({},s.appBarShift,u)),style:{backgroundSize:"cover",backgroundColor:"#fff"}},r.a.createElement(B.a,null,r.a.createElement(R.a,{color:"inherit","aria-label":"open drawer",onClick:g,edge:"start",className:Object(q.a)(s.menuButton,Object(b.a)({},s.visibility,u))},r.a.createElement(M.a,null)),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",margin:"0 56px"}},r.a.createElement($,{to:"/",open:u,className:"app-bar"},r.a.createElement(Y,null,"KnowThyBoss")),r.a.createElement(W.a,{color:"inherit",className:s.loginButton},"Login")))),r.a.createElement(z.a,{variant:"permanent",className:Object(q.a)(s.drawer,(a={},Object(b.a)(a,s.drawerOpen,u),Object(b.a)(a,s.drawerClose,!u),a)),classes:{paper:Object(q.a)((t={},Object(b.a)(t,s.drawerOpen,u),Object(b.a)(t,s.drawerClose,!u),t))},open:u},r.a.createElement("div",{className:s.toolbar,style:{backgroundColor:"#1f7acc",paddingBottom:"32px"}},r.a.createElement(R.a,{onClick:g,style:{color:"#fff"}},u?r.a.createElement(G.a,null):r.a.createElement(M.a,null))),r.a.createElement("div",{style:{textAlign:"center",backgroundColor:"#1389e4"}},r.a.createElement(Y,{style:{backgroundColor:"#1389e4",padding:"16px 0",width:"210px",margin:"-32px auto 0 auto",color:"white",borderRadius:"4px",visibility:u?"":"hidden"}},r.a.createElement($,{to:"/",open:u},"KnowThyBoss"))),r.a.createElement(P.a,{className:s.list},K.map(function(e){return e.display&&r.a.createElement(D.a,{button:!0,key:e.text,selected:c===e.link,onClick:function(){return i.push(e.link)}},r.a.createElement(A.a,{style:{color:"#fff"}},e.icon),r.a.createElement(F.a,{primary:e.text}))}))),r.a.createElement("main",{className:s.content},r.a.createElement("div",{className:s.toolbar}),o))};Q.defaultProps={history:null,location:null};Object(f.g)(Q);var Z=t(103),ee=(t(131),t(85),r.a.createContext(null),t(55));t(142);ee.initializeApp({apiKey:"AIzaSyDDEJHz0SGa2dJT_0-w2mAvkyJiPi8lHfc",authDomain:"ktb-frontend.firebaseapp.com",databaseURL:"https://ktb-frontend.firebaseio.com",projectId:"ktb-frontend",storageBucket:"ktb-frontend.appspot.com",messagingSenderId:"263143703784"});var ae=new ee.auth.GoogleAuthProvider,te=ee.auth(),ne=ee,re=t(193),oe=t(100),ie=t(195),le=t(208);function ce(){var e=Object(N.a)(["\n  &&& {\n    text-decoration: none;\n    color: ",";\n    &.app-bar {\n      /* visibility: ","; */\n    }\n  }\n"]);return ce=function(){return e},e}function se(){var e=Object(N.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Exo:300i,500i,400i&display=swap');\n  &&& {\n    font-family: 'Exo', sans-serif;\n    text-shadow: 1px 2px 4px rgba(0,0,0,0.2);\n    padding-right: 4px;\n    color: '#000';\n\n    &.menu {\n      margin-left: 32px;\n    }\n  }\n"]);return se=function(){return e},e}var me="".concat("/ktb-frontend/","assets/images/defaultPerson2.png"),de=Object(y.a)(function(e){var a,t;return{root:{display:"flex"},drawer:(a={},Object(b.a)(a,e.breakpoints.up("sm"),{width:280,flexShrink:0}),Object(b.a)(a,"backgroundColor","#1389e4"),a),appBar:(t={marginLeft:280},Object(b.a)(t,e.breakpoints.up("sm"),{width:"calc(100% - ".concat(280,"px)")}),Object(b.a)(t,"boxShadow","0 2px 4px 0 rgba(0,0,0,0.1)"),t),menuButton:Object(b.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),loginButton:{marginRight:e.spacing(2)},toolbar:e.mixins.toolbar,drawerPaper:{width:280,backgroundColor:"#1389e4",backgroundImage:"url(".concat("/ktb-frontend/","assets/images/bg5.png)"),backgroundSize:"cover",backgroundPosition:"center bottom",backgroundRepeat:"no-repeat"},content:{flexGrow:1,padding:e.spacing(3)},title:{flexGrow:1},itemText:{"& span":{fontWeight:500}}}}),ue=Object(S.a)(k.a).attrs({variant:"h5"})(se()),pe=Object(S.a)(c.b)(ce(),function(e){return e.open?"#fff":"#000"},function(e){return e.open?"hidden":"visible"}),ge=function(e){var a=e.children,t=e.history,n=e.location,o=e.handleLoginToggle,i=e.handleLogout,l=e.user,c=Object(Z.a)(e,["children","history","location","handleLoginToggle","handleLogout","user"]),s=null!==l,m=new URLSearchParams(n).get("pathname"),d=c.container,u=de(),p=Object(I.a)(),g=r.a.useState(!1),f=Object(x.a)(g,2),b=f[0],h=f[1],y=r.a.useState(null),v=Object(x.a)(y,2),w=v[0],E=v[1],O=Boolean(w);K.find(function(e){return"Add New Manager"===e.text}).display=s;var j=function(){h(!b)},C=r.a.createElement("div",null,r.a.createElement("div",{className:u.toolbar}),r.a.createElement("div",{style:{textAlign:"center",backgroundColor:"#1389e4",width:"210px",borderRadius:"4px",margin:"0 auto"}},r.a.createElement(ue,{style:{backgroundColor:"#1389e4",fontWeight:500,padding:"16px 0",margin:"-32px auto 24px auto",color:"white",borderRadius:"4px"}},r.a.createElement(pe,{to:"/",open:!0},"KnowThyBoss"))),r.a.createElement(P.a,null,K.map(function(e){return e.display&&r.a.createElement(D.a,{button:!0,key:e.text,selected:m===e.link,onClick:function(){t.push(e.link),b&&j()}},r.a.createElement(A.a,{style:{color:"#fff"}},e.icon),r.a.createElement(F.a,{className:u.itemText,style:{color:"#fff"},primary:e.text}))})));return r.a.createElement("div",{className:u.root},r.a.createElement(L.a,null),r.a.createElement(T.a,{position:"fixed",className:u.appBar},r.a.createElement(B.a,{style:{backgroundColor:"#fff"}},r.a.createElement(R.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:j,className:u.menuButton},r.a.createElement(M.a,{color:"primary"})),r.a.createElement(k.a,{variant:"h6",noWrap:!0,className:u.title,style:{visibility:"hidden"}},"KnowThyBoss"),!s&&r.a.createElement(W.a,{color:"primary",style:{color:"rgb(32, 122, 204)"},onClick:o},"Login"),s&&r.a.createElement("div",null,l.displayName&&r.a.createElement("span",null,l.displayName),r.a.createElement(R.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){E(e.currentTarget)},color:"primary",style:{color:"rgb(32, 122, 204)"}},r.a.createElement(re.a,{src:l.photoURL?l.photoURL:me})),r.a.createElement(oe.a,{id:"menu-appbar",anchorEl:w,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:O,onClose:function(){E(null)}},r.a.createElement(ie.a,{onClick:i},"Logout"))))),r.a.createElement("nav",{className:u.drawer,"aria-label":"mailbox folders"},r.a.createElement(le.a,{smUp:!0,implementation:"css"},r.a.createElement(z.a,{container:d,variant:"temporary",anchor:"rtl"===p.direction?"right":"left",open:b,onClose:j,classes:{paper:u.drawerPaper},ModalProps:{keepMounted:!0}},C)),r.a.createElement(le.a,{xsDown:!0,implementation:"css"},r.a.createElement(z.a,{classes:{paper:u.drawerPaper},variant:"permanent",open:!0},C))),r.a.createElement("main",{className:u.content},r.a.createElement("div",{className:u.toolbar}),a))};ge.defaultProps={history:null,location:null,handleLoginToggle:null,user:null};var fe=Object(f.g)(ge),be=t(97),he=t(197);function xe(){var e=Object(N.a)(["\n  font-weight: bold;\n"]);return xe=function(){return e},e}function ye(){var e=Object(N.a)(["\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.3;\n"]);return ye=function(){return e},e}var ve=S.a.div(ye()),we=S.a.div(xe()),Ee=function(e){var a=Object(be.a)({},e);return r.a.createElement(ve,a,r.a.createElement("div",null,"Rating is calculated using the"," ",r.a.createElement(we,null,r.a.createElement(he.a,{href:"https://www.netpromoter.com/know/",target:"_blank",rel:"noopener noreferrer"},"Net Promoter Score (NPS)"))," ","framework. NPS uses the answer to a key question, using a 0-10 scale: How likely is it that you would recommend this manager to a friend or colleague?"))},Oe=t(66),je=t(196),ke=t(198),Ce=t(199),Ne=t(200),Se=t(201),Le=t(210),Te=t(202),Be=function(e){var a=null;return e>=0&&e<=6?a="detractors":e>=7&&e<=8?a="passives":e>=9&&e<=10&&(a="promoters"),a},Re={nps:0,respondents:0,detractors:0,passives:0,promoters:0,raters:[]},We=function(e,a,t){if(-1===e&&null==a)a=Re;else{var n=Be(e);a||(a=Re),null!=n&&(a[n]++,a.respondents++),a.nps=Math.round((a.promoters-a.detractors)/a.respondents*100),a.raters.push(t)}return a},ze=Object(y.a)(function(e){return{labels:{display:"flex",flexDirection:"row",justifyContent:"space-between"},slider:{paddingTop:"48px",color:"rgb(32, 122, 204)",marginBottom:0},secondaryText:{fontSize:"14px"},actions:{marginTop:"24px",padding:"16px 24px"},submit:{backgroundColor:"rgb(32, 122, 204)"}}}),Pe=Object(Oe.a)(Array(11).keys()).map(function(e){return{value:e,label:"".concat(e)}}),De=function(e){var a=e.handleClose,t=e.open,o=e.data,i=e.user,l=ze(),c=Object(I.a)(),s=Object(je.a)(c.breakpoints.down("sm")),m=(o.id,o.firstName),d=o.lastName,u=o.company,p=o.level,g=o.organization,f=o.nps,b=Object(n.useState)(o),h=Object(x.a)(b,2),y=(h[0],h[1],Object(n.useState)(f)),v=Object(x.a)(y,2),w=(v[0],v[1],Object(n.useState)("")),E=Object(x.a)(w,2),O=E[0],j=E[1];return r.a.createElement(ke.a,{fullScreen:s,open:t,onClose:a,"aria-labelledby":"responsive-dialog-title"},r.a.createElement(Ce.a,{id:"responsive-dialog-title"},m," ",d,r.a.createElement(k.a,{className:l.secondaryText,color:"textSecondary"},u," ","\u2014"," ",p,", ",g)),r.a.createElement(Ne.a,null,r.a.createElement(Se.a,null,"How likely is it that you would recommend this manager to a friend or colleague?"),r.a.createElement(Le.a,{className:l.slider,defaultValue:5,getAriaValueText:function(e){return"".concat(e)},"aria-labelledby":"discrete-slider",valueLabelDisplay:"on",onChangeCommitted:function(e,a){j(a)},step:1,marks:Pe,min:0,max:10}),r.a.createElement("div",{className:l.labels},r.a.createElement("span",null,"Very Unlikely"),r.a.createElement("span",null,"Very Likely"))),r.a.createElement(Te.a,{className:l.actions},r.a.createElement(W.a,{onClick:a,color:"default"},"Cancel"),r.a.createElement(W.a,{className:l.submit,onClick:function(){!function(){if(i){var e=ne.firestore().collection("managers").doc(o.id);o.nps=We(O,o.nps,i.uid),e.set(o).then(function(e){}).catch(function(e){console.log(e)})}}(),a()},variant:"contained",color:"primary",autoFocus:!0},"Submit")))};De.defaultProps={data:{}};var Ae=De,Fe=t(98),Ie=Object(y.a)(function(e){return{labels:{display:"flex",flexDirection:"row",justifyContent:"space-between"},dialog:{minWidth:"500px"},secondaryText:{fontSize:"14px"},actions:{padding:"16px 24px 24px 24px"},submit:{backgroundColor:"rgb(32, 122, 204)"},actionContainer:{display:"flex",flexDirection:"column",width:"100%"},title:{textAlign:"center",paddingTop:"24px"}}}),Me=function(e){var a=e.handleClose,t=e.open,n=e.handleGoogleLogin,o=Ie(),i=Object(I.a)(),l=Object(je.a)(i.breakpoints.down("sm"));return r.a.createElement(ke.a,{fullScreen:l,open:t,onClose:a,"aria-labelledby":"responsive-dialog-title",maxWidth:"xs",fullWidth:!0},r.a.createElement(Ce.a,{id:"responsive-dialog-title",className:o.title},"Login to Your Account"),r.a.createElement(Te.a,{className:o.actions},r.a.createElement("div",{className:o.actionContainer},r.a.createElement(Fe.GoogleLoginButton,{onClick:n,style:{fontSize:"16px",margin:"16px 5px"}}))))};Me.defaultProps={};var Ge=Me;Object(y.a)(function(e){return{container:Object(b.a)({display:"flex",flexDirection:"column",flexWrap:"wrap",marginLeft:"4em",marginRight:"4em"},e.breakpoints.down("sm"),{marginLeft:"0",marginRight:"0"}),textField:Object(b.a)({marginTop:"0",marginBottom:"24px",marginLeft:"4em",marginRight:e.spacing(1),width:260},e.breakpoints.down("sm"),{marginLeft:"0"}),card:{display:"flex",marginBottom:"16px"},details:Object(b.a)({display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"flex-start"}),content:Object(b.a)({flex:"1 0 auto"},e.breakpoints.down("sm"),{padding:"16px 16px 0 16px"}),cover:{width:151},rating:Object(b.a)({display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},e.breakpoints.down("sm"),{}),ratingContainer:Object(b.a)({display:"flex",flexDirection:"column"},e.breakpoints.down("sm"),{}),playIcon:{height:38,width:38},worldClass:{color:"green"},excellent:{color:"lightgreen"},good:{color:"blue"},bad:{color:"red"},default:{color:"inherit"}}}),Object(v.a)(function(e){return{tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[1],fontSize:11}}})(w.a);var qe=t(206);var Ue=Object(y.a)(function(e){var a;return{container:Object(b.a)({display:"flex",flexWrap:"wrap",marginLeft:"4em",marginRight:"4em"},e.breakpoints.down("sm"),{marginLeft:"0",marginRight:"0"}),textField:Object(b.a)({marginTop:"0",marginBottom:"24px",marginLeft:"4em",marginRight:e.spacing(1),width:260},e.breakpoints.down("sm"),{marginLeft:"0"}),card:{minWidth:275,maxWidth:275,margin:"0 16px 16px 0",display:"flex",flexDirection:"column",justifyContent:"space-between"},cardContent:{display:"flex",flexDirection:"column",justifyContent:"space-between",flexGrow:1},title:{fontSize:14},pos:{marginBottom:12},details:Object(b.a)({display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"flex-start"}),content:Object(b.a)({flex:"1 0 auto"},e.breakpoints.down("sm"),{padding:"16px 16px 0 16px"}),cover:{width:151},rating:Object(b.a)({display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},e.breakpoints.down("sm"),{}),ratingContainer:(a={display:"flex",flexDirection:"column",width:"max-content"},Object(b.a)(a,e.breakpoints.down("sm"),{}),Object(b.a)(a,"&:hover",{cursor:"default"}),a),worldClass:{color:"green"},excellent:{color:"lightgreen"},good:{color:"blue"},bad:{color:"red"},default:{color:"inherit"}}}),Ve=Object(v.a)(function(e){return{tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[1],fontSize:11}}})(w.a),He=function(e){var a=e.user,t=Ue(),o=function(){var e=Object(n.useState)([]),a=Object(x.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)(function(){var e=ne.firestore().collection("managers").onSnapshot(function(e){var a=e.docs.map(function(e){return Object(h.a)({id:e.id},e.data())});r(a)});return function(){return e()}},[]),t}(),i=Object(n.useState)(""),l=Object(x.a)(i,2),c=l[0],s=l[1],m=Object(n.useState)(!1),d=Object(x.a)(m,2),u=d[0],p=d[1],g=Object(n.useState)({}),f=Object(x.a)(g,2),b=f[0],y=f[1];return r.a.createElement(n.Fragment,null,r.a.createElement(E.a,{id:"filter-managers",label:"Filter Managers",type:"search",className:t.textField,value:c,onChange:function(e){s(e.target.value)}}),r.a.createElement("div",{className:t.container},o.map(function(e){var n,o=e.id,i=e.firstName,l=e.lastName,c=e.company,s=e.level,m=e.organization,d=e.nps;return r.a.createElement(O.a,{className:t.card,key:"".concat(l,"-").concat(o)},r.a.createElement(j.a,{className:t.cardContent},r.a.createElement("div",null,r.a.createElement(k.a,{className:t.title,color:"textSecondary",gutterBottom:!0},c),r.a.createElement(k.a,{variant:"h5",component:"h2"},i," ",l),r.a.createElement("div",{className:t.pos},r.a.createElement(k.a,{color:"textSecondary"},s," ","\u2014"," ",m))),r.a.createElement(Ve,{TransitionComponent:C.a,title:r.a.createElement(Ee,null),placement:"top",interactive:!0},r.a.createElement("div",{className:t.ratingContainer},r.a.createElement(k.a,{component:"h5",variant:"h5",className:t[(n=d.nps,n>75?"worldClass":n>50?"excellent":n>0?"good":n<0?"bad":"default")]},d.nps),r.a.createElement(k.a,{variant:"subtitle1",color:"textSecondary"},"Rating")))),!(a&&function(e,a){return!!(e.nps&&e.nps.raters&&e.nps.raters.includes(a.uid))}(e,a))&&r.a.createElement(qe.a,null,r.a.createElement(W.a,{size:"small",onClick:function(){y(e),p(!0)}},"Rate Manager")))})),r.a.createElement(Ae,{open:u,handleClose:function(){p(!1)},data:b,user:a}))},Ke=Object(y.a)(function(e){return{container:Object(b.a)({display:"flex",flexWrap:"wrap",width:"60%",margin:"0 auto",justifyContent:"center"},e.breakpoints.down("sm"),{width:"100%"}),fieldContainer:{marginTop:"16px",marginBottom:"16px"},fieldFlex:Object(b.a)({display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column"}),firstName:Object(b.a)({margin:"16px 8px 8px 8px",width:"50%"},e.breakpoints.down("sm"),{width:"auto",margin:"16px 8px 8px 8px"}),lastName:Object(b.a)({margin:"16px 8px 8px 8px",width:"50%"},e.breakpoints.down("sm"),{width:"auto",margin:8}),textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},dense:{marginTop:19},menu:{width:200},margin:{margin:e.spacing(1)},slider:{paddingTop:"48px",color:"rgb(32, 122, 204)",marginBottom:0},lastField:{margin:"8px 8px 16px 8px"}}}),Je={firstName:"",lastName:"",company:"",level:"",organization:"",rating:-1,nps:{}},_e=function(e){var a=e.user,t=Ke(),o=r.a.useState(Je),i=Object(x.a)(o,2),l=i[0],c=i[1],s=Object(n.useState)(!1),m=Object(x.a)(s,2),d=m[0],u=m[1],p=Object(Oe.a)(Array(11).keys()).reverse().map(function(e){return{value:e,label:"".concat(e)}}),g=function(e){return function(a){var t=a.target.value;c(Object(h.a)({},l,Object(b.a)({},e,t)))}};return r.a.createElement("div",null,r.a.createElement(k.a,{className:t.margin,variant:"h5",style:{textAlign:"center"}},"Add New Manager"),r.a.createElement("form",{className:t.container,noValidate:!1,autoComplete:"off",onSubmit:function(e){e.preventDefault(),l.nps=We(l.rating,null,a.uid),ne.firestore().collection("managers").add(l).then(function(){c(Je),u(!0),setTimeout(function(){u(!1)},3e3)})}},d&&r.a.createElement("span",{className:t.fieldFlex},"Successfully Added!"),r.a.createElement("div",{className:t.fieldFlex},r.a.createElement(E.a,{id:"manager-first-name",label:"First Name",className:t.firstName,fullWidth:!0,margin:"normal",onChange:g("firstName"),value:l.firstName,variant:"outlined",helperText:"Required",required:!0}),r.a.createElement(E.a,{id:"manager-last-name",label:"Last Name",className:t.lastName,fullWidth:!0,margin:"normal",onChange:g("lastName"),value:l.lastName,variant:"outlined",helperText:"Required",required:!0})),r.a.createElement(E.a,{id:"manager-company",select:!0,fullWidth:!0,label:"Select a Company",className:t.textField,value:l.company,onChange:g("company"),SelectProps:{MenuProps:{className:t.menu}},margin:"normal",style:{margin:8},variant:"outlined",helperText:"Required",required:!0},r.a.createElement(ie.a,{value:"Capital One"},"Capital One")),r.a.createElement(E.a,{id:"manager-level",label:"Level",style:{margin:8},fullWidth:!0,margin:"normal",onChange:g("level"),value:l.level,variant:"outlined",helperText:"Required",required:!0}),r.a.createElement(E.a,{id:"manager-organization",label:"Line of Business",style:{margin:8},fullWidth:!0,margin:"normal",onChange:g("organization"),value:l.organization,variant:"outlined",helperText:"Required",required:!0}),r.a.createElement(k.a,{variant:"subtitle1",style:{margin:"16px 8px"}},"How likely is it that you would recommend this manager to a friend or colleague?"),r.a.createElement(E.a,{id:"manager-rating",select:!0,fullWidth:!0,label:"Manger Rating",className:t.textField,value:l.rating,onChange:g("rating"),SelectProps:{MenuProps:{className:t.menu}},margin:"normal",style:{margin:"8px 8px 16px 8px"},variant:"outlined",helperText:"Optional",required:!1},p.map(function(e){return r.a.createElement(ie.a,{value:e.value,key:e.label},e.label,"10"===e.label?r.a.createElement(n.Fragment,null," ","\u2014 Very Likely"):null,"0"===e.label?r.a.createElement(n.Fragment,null," ","\u2014 Very Unlikely"):null)})),r.a.createElement(W.a,{variant:"contained",size:"large",color:"primary",className:t.margin,style:{margin:8,width:"100%"},type:"submit"},"Submit")))};t(143).config();var Xe=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).state={loginOpen:!1,user:null},t.handleLoginToggle=t.handleLoginToggle.bind(Object(p.a)(t)),t.handleLoginWithGoogle=t.handleLoginWithGoogle.bind(Object(p.a)(t)),t.handleLogout=t.handleLogout.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;te.onAuthStateChanged(function(a){a&&e.setState({user:a})})}},{key:"handleLoginToggle",value:function(){var e=this.state.loginOpen;this.setState({loginOpen:!e})}},{key:"handleLoginWithGoogle",value:function(){var e=this;te.signInWithPopup(ae).then(function(a){var t=a.user;e.setState({user:t,loginOpen:!1})})}},{key:"handleLogout",value:function(){var e=this;te.signOut().then(function(){e.setState({user:null})})}},{key:"handleChange",value:function(e){}},{key:"render",value:function(){var e=this,a=this.props.location,t=this.state.loginOpen;return r.a.createElement(n.Fragment,null,r.a.createElement(fe,Object.assign({},this.props,this.state,{handleLoginToggle:this.handleLoginToggle,handleLogout:this.handleLogout}),r.a.createElement(f.d,{location:a},r.a.createElement(f.b,{exact:!0,path:"/",render:function(){return r.a.createElement(f.a,{push:!0,to:"/managers"})}}),r.a.createElement(f.b,{exact:!0,path:"/managers",render:function(a){return r.a.createElement(He,Object.assign({},a,e.state))}}),r.a.createElement(f.b,{exact:!0,path:"/managers/new",render:function(a){return r.a.createElement(_e,Object.assign({},a,e.state))}}))),r.a.createElement(Ge,{open:t,handleClose:this.handleLoginToggle,handleGoogleLogin:this.handleLoginWithGoogle}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ye=Object(l.a)();document.title="Know Thy Boss";i.a.render(r.a.createElement(c.a,{history:Ye,basename:"/ktb-frontend/"},r.a.createElement(Xe,{history:Ye})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[114,1,2]]]);
//# sourceMappingURL=main.88725f2b.chunk.js.map