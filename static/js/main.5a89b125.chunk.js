(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,a,t){e.exports=t(123)},108:function(e,a,t){},123:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(10),o=t.n(i),l=t(24),c=t(42),s=(t(108),t(50)),m=t(51),d=t(59),p=t(53),u=t(52),g=t(60),f=t(15),b=(n.Component,t(21)),h=t(9),x=t(125),y=t(4),w=t(186),v=t(184),E=t(180),O=t(181),C=t(39),j=t(182),k=t(30),N=t(54),S=t(31),L=t(159),T=t(160),z=t(161),B=t(162),D=t(164),R=t(188),P=t(167),W=t(127),F=t(168),M=t(169),A=t(27),q=t(163),I=t(166),V=t(3),G=t(155),K=t(157),U=t(158),H=[{text:"Home",icon:r.a.createElement(G.a,null),link:"/",display:!1},{text:"All Managers",icon:r.a.createElement(K.a,null),link:"/managers",display:!0},{text:"Add New Manager",icon:r.a.createElement(U.a,null),link:"/managers/new",display:!0}];function J(){var e=Object(k.a)(["\n  &&& {\n    text-decoration: none;\n    color: ",";\n    &.app-bar {\n      visibility: ",";\n    }\n  }\n"]);return J=function(){return e},e}function _(){var e=Object(k.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Exo:500i&display=swap');\n  &&& {\n    font-family: 'Exo', sans-serif;\n    text-shadow: 1px 2px 4px rgba(0,0,0,0.2);\n    padding-right: 4px;\n    color: '#000';\n\n    &.menu {\n      margin-left: 32px;\n    }\n  }\n"]);return _=function(){return e},e}var X=Object(x.a)(function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),boxShadow:"0 2px 4px 0 rgba(0,0,0,0.2)"},appBarShift:{marginLeft:280,width:"calc(100% - ".concat(280,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},visibility:{visibility:"hidden"},drawer:{width:280,flexShrink:0,whiteSpace:"nowrap",backgroundColor:"#303030"},drawerOpen:{width:280,backgroundColor:"#1389e4",backgroundImage:"url(/assets/images/crystals_bg.png)",backgroundSize:"contain",backgroundPosition:"bottom",backgroundRepeat:"no-repeat",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(h.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1,backgroundColor:"#1389e4"},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(N.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},loginButton:{color:"rgba(0, 0, 0, 0.87)"},list:{backgroundColor:"#1389e4",color:"#fff"}}}),Y=Object(S.a)(C.a).attrs({variant:"h5"})(_()),$=Object(S.a)(c.b)(J(),function(e){return e.open?"#fff":"#000"},function(e){return e.open?"hidden":"visible"}),Q=function(e){var a,t,i=e.children,o=e.history,l=e.location,c=new URLSearchParams(l).get("pathname"),s=X(),m=(Object(A.a)(),Object(n.useState)(!0)),d=Object(b.a)(m,2),p=d[0],u=d[1],g=function(){u(!p)};return r.a.createElement("div",{className:s.root},r.a.createElement(L.a,null),r.a.createElement(T.a,{color:"secondary",position:"fixed",className:Object(V.a)(s.appBar,Object(h.a)({},s.appBarShift,p)),style:{backgroundSize:"cover",backgroundColor:"#fff"}},r.a.createElement(z.a,null,r.a.createElement(B.a,{color:"inherit","aria-label":"open drawer",onClick:g,edge:"start",className:Object(V.a)(s.menuButton,Object(h.a)({},s.visibility,p))},r.a.createElement(q.a,null)),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%",margin:"0 56px"}},r.a.createElement($,{to:"/",open:p,className:"app-bar"},r.a.createElement(Y,null,"KnowThyBoss")),r.a.createElement(D.a,{color:"inherit",className:s.loginButton},"Login")))),r.a.createElement(R.a,{variant:"permanent",className:Object(V.a)(s.drawer,(a={},Object(h.a)(a,s.drawerOpen,p),Object(h.a)(a,s.drawerClose,!p),a)),classes:{paper:Object(V.a)((t={},Object(h.a)(t,s.drawerOpen,p),Object(h.a)(t,s.drawerClose,!p),t))},open:p},r.a.createElement("div",{className:s.toolbar,style:{backgroundColor:"#1f7acc",paddingBottom:"32px"}},r.a.createElement(B.a,{onClick:g,style:{color:"#fff"}},p?r.a.createElement(I.a,null):r.a.createElement(q.a,null))),r.a.createElement("div",{style:{textAlign:"center",backgroundColor:"#1389e4"}},r.a.createElement(Y,{style:{backgroundColor:"#1389e4",padding:"16px 0",width:"210px",margin:"-32px auto 0 auto",color:"white",borderRadius:"4px",visibility:p?"":"hidden"}},r.a.createElement($,{to:"/",open:p},"KnowThyBoss"))),r.a.createElement(P.a,{className:s.list},H.map(function(e){return e.display&&r.a.createElement(W.a,{button:!0,key:e.text,selected:c===e.link,onClick:function(){return o.push(e.link)}},r.a.createElement(F.a,{style:{color:"#fff"}},e.icon),r.a.createElement(M.a,{primary:e.text}))}))),r.a.createElement("main",{className:s.content},r.a.createElement("div",{className:s.toolbar}),i))};Q.defaultProps={history:null,location:null};Object(f.g)(Q);var Z=t(92),ee=t(170),ae=t(89),te=t(172),ne=t(185);function re(){var e=Object(k.a)(["\n  &&& {\n    text-decoration: none;\n    color: ",";\n    &.app-bar {\n      /* visibility: ","; */\n    }\n  }\n"]);return re=function(){return e},e}function ie(){var e=Object(k.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Exo:300i,500i,400i&display=swap');\n  &&& {\n    font-family: 'Exo', sans-serif;\n    text-shadow: 1px 2px 4px rgba(0,0,0,0.2);\n    padding-right: 4px;\n    color: '#000';\n\n    &.menu {\n      margin-left: 32px;\n    }\n  }\n"]);return ie=function(){return e},e}var oe="".concat("/ktb-frontend/","assets/images/defaultPerson2.png"),le=Object(x.a)(function(e){var a,t;return{root:{display:"flex"},drawer:(a={},Object(h.a)(a,e.breakpoints.up("sm"),{width:280,flexShrink:0}),Object(h.a)(a,"backgroundColor","#1389e4"),a),appBar:(t={marginLeft:280},Object(h.a)(t,e.breakpoints.up("sm"),{width:"calc(100% - ".concat(280,"px)")}),Object(h.a)(t,"boxShadow","0 2px 4px 0 rgba(0,0,0,0.1)"),t),menuButton:Object(h.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),loginButton:{marginRight:e.spacing(2)},toolbar:e.mixins.toolbar,drawerPaper:{width:280,backgroundColor:"#1389e4",backgroundImage:"url(".concat("/ktb-frontend/","assets/images/bg5.png)"),backgroundSize:"cover",backgroundPosition:"center bottom",backgroundRepeat:"no-repeat"},content:{flexGrow:1,padding:e.spacing(3)},title:{flexGrow:1},itemText:{"& span":{fontWeight:500}}}}),ce=Object(S.a)(C.a).attrs({variant:"h5"})(ie()),se=Object(S.a)(c.b)(re(),function(e){return e.open?"#fff":"#000"},function(e){return e.open?"hidden":"visible"}),me=function(e){var a=e.children,t=e.history,n=e.location,i=e.handleLoginToggle,o=e.user,l=Object(Z.a)(e,["children","history","location","handleLoginToggle","user"]),c=null!==o,s=new URLSearchParams(n).get("pathname"),m=l.container,d=le(),p=Object(A.a)(),u=r.a.useState(!1),g=Object(b.a)(u,2),f=g[0],h=g[1],x=r.a.useState(null),y=Object(b.a)(x,2),w=y[0],v=y[1],E=Boolean(w);H.find(function(e){return"Add New Manager"===e.text}).display=c;var O=function(){h(!f)},j=function(){v(null)},k=r.a.createElement("div",null,r.a.createElement("div",{className:d.toolbar}),r.a.createElement("div",{style:{textAlign:"center",backgroundColor:"#1389e4",width:"210px",borderRadius:"4px",margin:"0 auto"}},r.a.createElement(ce,{style:{backgroundColor:"#1389e4",fontWeight:500,padding:"16px 0",margin:"-32px auto 24px auto",color:"white",borderRadius:"4px"}},r.a.createElement(se,{to:"/",open:!0},"KnowThyBoss"))),r.a.createElement(P.a,null,H.map(function(e){return e.display&&r.a.createElement(W.a,{button:!0,key:e.text,selected:s===e.link,onClick:function(){t.push(e.link),f&&O()}},r.a.createElement(F.a,{style:{color:"#fff"}},e.icon),r.a.createElement(M.a,{className:d.itemText,style:{color:"#fff"},primary:e.text}))})));return r.a.createElement("div",{className:d.root},r.a.createElement(L.a,null),r.a.createElement(T.a,{position:"fixed",className:d.appBar},r.a.createElement(z.a,{style:{backgroundColor:"#fff"}},r.a.createElement(B.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:O,className:d.menuButton},r.a.createElement(q.a,{color:"primary"})),r.a.createElement(C.a,{variant:"h6",noWrap:!0,className:d.title,style:{visibility:"hidden"}},"KnowThyBoss"),!c&&r.a.createElement(D.a,{color:"primary",style:{color:"rgb(32, 122, 204)"},onClick:i},"Login"),c&&r.a.createElement("div",null,r.a.createElement(B.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){v(e.currentTarget)},color:"primary",style:{color:"rgb(32, 122, 204)"}},r.a.createElement(ee.a,{src:o.avatar?o.avatar:oe})),r.a.createElement(ae.a,{id:"menu-appbar",anchorEl:w,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:E,onClose:j},r.a.createElement(te.a,{onClick:j},"Logout"))))),r.a.createElement("nav",{className:d.drawer,"aria-label":"mailbox folders"},r.a.createElement(ne.a,{smUp:!0,implementation:"css"},r.a.createElement(R.a,{container:m,variant:"temporary",anchor:"rtl"===p.direction?"right":"left",open:f,onClose:O,classes:{paper:d.drawerPaper},ModalProps:{keepMounted:!0}},k)),r.a.createElement(ne.a,{xsDown:!0,implementation:"css"},r.a.createElement(R.a,{classes:{paper:d.drawerPaper},variant:"permanent",open:!0},k))),r.a.createElement("main",{className:d.content},r.a.createElement("div",{className:d.toolbar}),a))};me.defaultProps={history:null,location:null,handleLoginToggle:null,user:null};var de=Object(f.g)(me),pe=t(87),ue=t(174);function ge(){var e=Object(k.a)(["\n  font-weight: bold;\n"]);return ge=function(){return e},e}function fe(){var e=Object(k.a)(["\n  padding: 8px 16px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.3;\n"]);return fe=function(){return e},e}var be=S.a.div(fe()),he=S.a.div(ge()),xe=function(e){var a=Object(pe.a)({},e);return r.a.createElement(be,a,r.a.createElement("div",null,"Rating is calculated using the"," ",r.a.createElement(he,null,r.a.createElement(ue.a,{href:"https://www.netpromoter.com/know/",target:"_blank",rel:"noopener noreferrer"},"Net Promoter Score (NPS)"))," ","framework. NPS uses the answer to a key question, using a 0-10 scale: How likely is it that you would recommend this manager to a friend or colleague?"))},ye=t(58),we=t(173),ve=t(175),Ee=t(176),Oe=t(177),Ce=t(178),je=t(187),ke=t(179),Ne=Object(x.a)(function(e){return{labels:{display:"flex",flexDirection:"row",justifyContent:"space-between"},slider:{paddingTop:"48px",color:"rgb(32, 122, 204)",marginBottom:0},secondaryText:{fontSize:"14px"},actions:{marginTop:"24px",padding:"16px 24px"},submit:{backgroundColor:"rgb(32, 122, 204)"}}}),Se=Object(ye.a)(Array(11).keys()).map(function(e){return{value:e,label:"".concat(e)}}),Le=function(e){var a=e.handleClose,t=e.open,n=e.data,i=Ne(),o=Object(A.a)(),l=Object(we.a)(o.breakpoints.down("sm")),c=(n.id,n.firstName),s=n.lastName,m=n.company,d=n.level,p=n.organization;return r.a.createElement(ve.a,{fullScreen:l,open:t,onClose:a,"aria-labelledby":"responsive-dialog-title"},r.a.createElement(Ee.a,{id:"responsive-dialog-title"},c," ",s,r.a.createElement(C.a,{className:i.secondaryText,color:"textSecondary"},m," ","\u2014"," ",d,", ",p)),r.a.createElement(Oe.a,null,r.a.createElement(Ce.a,null,"How likely is it that you would recommend this manager to a friend or colleague?"),r.a.createElement(je.a,{className:i.slider,defaultValue:5,getAriaValueText:function(e){return"".concat(e)},"aria-labelledby":"discrete-slider",valueLabelDisplay:"on",step:1,marks:Se,min:0,max:10}),r.a.createElement("div",{className:i.labels},r.a.createElement("span",null,"Very Unlikely"),r.a.createElement("span",null,"Very Likely"))),r.a.createElement(ke.a,{className:i.actions},r.a.createElement(D.a,{onClick:a,color:"default"},"Cancel"),r.a.createElement(D.a,{className:i.submit,onClick:a,variant:"contained",color:"primary",autoFocus:!0},"Submit")))};Le.defaultProps={data:{}};var Te=Le,ze=t(69),Be=Object(x.a)(function(e){return{labels:{display:"flex",flexDirection:"row",justifyContent:"space-between"},dialog:{minWidth:"500px"},secondaryText:{fontSize:"14px"},actions:{padding:"16px 24px 24px 24px"},submit:{backgroundColor:"rgb(32, 122, 204)"},actionContainer:{display:"flex",flexDirection:"column",width:"100%"},title:{textAlign:"center",paddingTop:"24px"}}}),De=function(e){var a=e.handleClose,t=e.open,n=Be(),i=Object(A.a)(),o=Object(we.a)(i.breakpoints.down("sm"));return r.a.createElement(ve.a,{fullScreen:o,open:t,onClose:a,"aria-labelledby":"responsive-dialog-title",maxWidth:"xs",fullWidth:!0},r.a.createElement(Ee.a,{id:"responsive-dialog-title",className:n.title},"Login to Your Account"),r.a.createElement(ke.a,{className:n.actions},r.a.createElement("div",{className:n.actionContainer},r.a.createElement(ze.GoogleLoginButton,{style:{fontSize:"16px",margin:"16px 5px"}}),r.a.createElement(ze.GithubLoginButton,{style:{fontSize:"16px"}}))))};De.defaultProps={};var Re=De,Pe=[{id:1,firstName:"Stan",lastName:"Lee",company:"Capital One",level:"Senior Director",organization:"Card",rating:32},{id:2,firstName:"Stan Stan Stan Stan",lastName:"Lee Lee",company:"Capital One",level:"Director",organization:"Card",rating:54},{id:3,firstName:"Stan",lastName:"Lee",company:"Capital One",level:"Director",organization:"Card",rating:88},{id:4,firstName:"Stan",lastName:"Lee",company:"Capital One",level:"Director",organization:"Card",rating:-10},{id:5,firstName:"Stan",lastName:"Lee",company:"Capital One",level:"Director",organization:"Card",rating:-10},{id:6,firstName:"Stan",lastName:"Lee",company:"Capital One",level:"Director",organization:"Card",rating:-10},{id:7,firstName:"Stan",lastName:"Lee",company:"Capital One",level:"Principal Associate",organization:"Card",rating:-10},{id:8,firstName:"Stan",lastName:"Lee",company:"Capital One",level:"Director",organization:"Card",rating:-10},{id:9,firstName:"Stan",lastName:"Lee",company:"Capital One",level:"Director",organization:"Card",rating:-10},{id:10,firstName:"Stan",lastName:"Lee",company:"Capital One",level:"Director",organization:"Card",rating:-10},{id:11,firstName:"Stan",lastName:"Lee",company:"Capital One",level:"Manager",organization:"Card",rating:-10},{id:12,firstName:"Stan",lastName:"Lee",company:"Capital One",level:"Director",organization:"Card",rating:-10},{id:13,firstName:"Stan",lastName:"Lee",company:"Capital One",level:"Director",organization:"Card",rating:-10},{id:14,firstName:"Stan",lastName:"Lee",company:"Capital One",level:"Senior Manager",organization:"Card",rating:-10}],We=(Object(x.a)(function(e){return{container:Object(h.a)({display:"flex",flexDirection:"column",flexWrap:"wrap",marginLeft:"4em",marginRight:"4em"},e.breakpoints.down("sm"),{marginLeft:"0",marginRight:"0"}),textField:Object(h.a)({marginTop:"0",marginBottom:"24px",marginLeft:"4em",marginRight:e.spacing(1),width:260},e.breakpoints.down("sm"),{marginLeft:"0"}),card:{display:"flex",marginBottom:"16px"},details:Object(h.a)({display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"flex-start"}),content:Object(h.a)({flex:"1 0 auto"},e.breakpoints.down("sm"),{padding:"16px 16px 0 16px"}),cover:{width:151},rating:Object(h.a)({display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},e.breakpoints.down("sm"),{}),ratingContainer:Object(h.a)({display:"flex",flexDirection:"column"},e.breakpoints.down("sm"),{}),playIcon:{height:38,width:38},worldClass:{color:"green"},excellent:{color:"lightgreen"},good:{color:"blue"},bad:{color:"red"},default:{color:"inherit"}}}),Object(y.a)(function(e){return{tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[1],fontSize:11}}})(w.a),t(183)),Fe=Object(x.a)(function(e){var a;return{container:Object(h.a)({display:"flex",flexWrap:"wrap",marginLeft:"4em",marginRight:"4em"},e.breakpoints.down("sm"),{marginLeft:"0",marginRight:"0"}),textField:Object(h.a)({marginTop:"0",marginBottom:"24px",marginLeft:"4em",marginRight:e.spacing(1),width:260},e.breakpoints.down("sm"),{marginLeft:"0"}),card:{minWidth:275,maxWidth:275,margin:"0 16px 16px 0",display:"flex",flexDirection:"column",justifyContent:"space-between"},cardContent:{display:"flex",flexDirection:"column",justifyContent:"space-between",flexGrow:1},title:{fontSize:14},pos:{marginBottom:12},details:Object(h.a)({display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"flex-start"}),content:Object(h.a)({flex:"1 0 auto"},e.breakpoints.down("sm"),{padding:"16px 16px 0 16px"}),cover:{width:151},rating:Object(h.a)({display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},e.breakpoints.down("sm"),{}),ratingContainer:(a={display:"flex",flexDirection:"column",width:"max-content"},Object(h.a)(a,e.breakpoints.down("sm"),{}),Object(h.a)(a,"&:hover",{cursor:"default"}),a),worldClass:{color:"green"},excellent:{color:"lightgreen"},good:{color:"blue"},bad:{color:"red"},default:{color:"inherit"}}}),Me=Object(y.a)(function(e){return{tooltip:{backgroundColor:e.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:e.shadows[1],fontSize:11}}})(w.a),Ae=function(){var e=Fe(),a=Object(n.useState)([]),t=Object(b.a)(a,2),i=t[0],o=t[1],l=Object(n.useState)(""),c=Object(b.a)(l,2),s=c[0],m=c[1],d=Object(n.useState)(!1),p=Object(b.a)(d,2),u=p[0],g=p[1],f=Object(n.useState)({}),h=Object(b.a)(f,2),x=h[0],y=h[1];Object(n.useEffect)(function(){o(Pe)},[]);var w=function(e){return e>75?"worldClass":e>50?"excellent":e>0?"good":e<0?"bad":"default"};return r.a.createElement(n.Fragment,null,r.a.createElement(v.a,{id:"filter-managers",label:"Filter Managers",type:"search",className:e.textField,value:s,onChange:function(e){m(e.target.value),o(i.filter(function(e){return e.firstName.includes(s)||e.lastName.includes(s)}))}}),r.a.createElement("div",{className:e.container},i.map(function(a){var t=a.id,n=a.firstName,i=a.lastName,o=a.company,l=a.level,c=a.organization,s=a.rating;return r.a.createElement(E.a,{className:e.card,key:"".concat(i,"-").concat(t)},r.a.createElement(O.a,{className:e.cardContent},r.a.createElement("div",null,r.a.createElement(C.a,{className:e.title,color:"textSecondary",gutterBottom:!0},o),r.a.createElement(C.a,{variant:"h5",component:"h2"},n," ",i),r.a.createElement("div",{className:e.pos},r.a.createElement(C.a,{color:"textSecondary"},l," ","\u2014"," ",c))),r.a.createElement(Me,{TransitionComponent:j.a,title:r.a.createElement(xe,null),placement:"top",interactive:!0},r.a.createElement("div",{className:e.ratingContainer},r.a.createElement(C.a,{component:"h5",variant:"h5",className:e[w(s)]},s),r.a.createElement(C.a,{variant:"subtitle1",color:"textSecondary"},"Rating")))),r.a.createElement(We.a,null,r.a.createElement(D.a,{size:"small",onClick:function(){y(a),g(!0)}},"Rate Manager")))})),r.a.createElement(Te,{open:u,handleClose:function(){g(!1)},data:x}))},qe=Object(x.a)(function(e){return{container:Object(h.a)({display:"flex",flexWrap:"wrap",width:"60%",margin:"0 auto",justifyContent:"center"},e.breakpoints.down("sm"),{width:"100%"}),fieldContainer:{marginTop:"16px",marginBottom:"16px"},fieldFlex:Object(h.a)({display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column"}),firstName:Object(h.a)({margin:"16px 8px 8px 8px",width:"50%"},e.breakpoints.down("sm"),{width:"auto",margin:"16px 8px 8px 8px"}),lastName:Object(h.a)({margin:"16px 8px 8px 8px",width:"50%"},e.breakpoints.down("sm"),{width:"auto",margin:8}),textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},dense:{marginTop:19},menu:{width:200},margin:{margin:e.spacing(1)},slider:{paddingTop:"48px",color:"rgb(32, 122, 204)",marginBottom:0},lastField:{margin:"8px 8px 16px 8px"}}}),Ie=Object(ye.a)(Array(11).keys()).reverse().map(function(e){return{value:e,label:"".concat(e)}}),Ve=function(){var e=qe(),a=r.a.useState({firstName:"",lastName:"",company:"",level:"",organization:"",rating:""}),t=Object(b.a)(a,2),i=t[0],o=t[1],l=function(e){return function(a){var t=a.target.value;o(Object(N.a)({},i,Object(h.a)({},e,t)))}};return r.a.createElement("div",null,r.a.createElement(C.a,{className:e.margin,variant:"h5",style:{textAlign:"center"}},"Add New Manager"),r.a.createElement("form",{className:e.container,noValidate:!1,autoComplete:"off",onSubmit:function(e){e.preventDefault(),console.log("submit with values",i)}},r.a.createElement("div",{className:e.fieldFlex},r.a.createElement(v.a,{id:"manager-first-name",label:"First Name",className:e.firstName,fullWidth:!0,margin:"normal",onChange:l("firstName"),value:i.firstName,variant:"outlined",helperText:"Required",required:!0}),r.a.createElement(v.a,{id:"manager-last-name",label:"Last Name",className:e.lastName,fullWidth:!0,margin:"normal",onChange:l("lastName"),value:i.lastName,variant:"outlined",helperText:"Required",required:!0})),r.a.createElement(v.a,{id:"manager-company",select:!0,fullWidth:!0,label:"Select a Company",className:e.textField,value:i.company,onChange:l("company"),SelectProps:{MenuProps:{className:e.menu}},margin:"normal",style:{margin:8},variant:"outlined",helperText:"Required",required:!0},r.a.createElement(te.a,{value:"Capital One"},"Capital One")),r.a.createElement(v.a,{id:"manager-level",label:"Level",style:{margin:8},fullWidth:!0,margin:"normal",onChange:l("level"),value:i.level,variant:"outlined",helperText:"Required",required:!0}),r.a.createElement(v.a,{id:"manager-organization",label:"Line of Business",style:{margin:8},fullWidth:!0,margin:"normal",onChange:l("organization"),value:i.organization,variant:"outlined",helperText:"Required",required:!0}),r.a.createElement(C.a,{variant:"subtitle1",style:{margin:"16px 8px"}},"How likely is it that you would recommend this manager to a friend or colleague?"),r.a.createElement(v.a,{id:"manager-rating",select:!0,fullWidth:!0,label:"Manger Rating",className:e.textField,value:i.rating,onChange:l("rating"),SelectProps:{MenuProps:{className:e.menu}},margin:"normal",style:{margin:"8px 8px 16px 8px"},variant:"outlined",helperText:"Optional",required:!1},Ie.map(function(e){return r.a.createElement(te.a,{value:e.value,key:e.label},e.label,"10"===e.label?r.a.createElement(n.Fragment,null," ","\u2014 Very Likely"):null,"0"===e.label?r.a.createElement(n.Fragment,null," ","\u2014 Very Unlikely"):null)})),r.a.createElement(D.a,{variant:"contained",size:"large",color:"primary",className:e.margin,style:{margin:8,width:"100%"},type:"submit"},"Submit")))};t(120).config();var Ge=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).state={loginOpen:!1,user:null},t.handleLoginToggle=t.handleLoginToggle.bind(Object(u.a)(t)),t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"handleLoginToggle",value:function(){var e=this.state.loginOpen;this.setState({loginOpen:!e})}},{key:"render",value:function(){var e=this.props.location,a=this.state.loginOpen;return r.a.createElement(n.Fragment,null,r.a.createElement(de,Object.assign({},this.props,this.state,{handleLoginToggle:this.handleLoginToggle}),r.a.createElement(f.d,{location:e},r.a.createElement(f.b,{exact:!0,path:"/",render:function(){return r.a.createElement(f.a,{push:!0,to:"/managers"})}}),r.a.createElement(f.b,{exact:!0,path:"/managers",render:function(e){return r.a.createElement(Ae,e)}}),r.a.createElement(f.b,{exact:!0,path:"/managers/new",render:function(e){return r.a.createElement(Ve,e)}}))),r.a.createElement(Re,{open:a,handleClose:this.handleLoginToggle}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ke=Object(l.a)();document.title="KnowThyBoss";o.a.render(r.a.createElement(c.a,{history:Ke,basename:"/ktb-frontend/"},r.a.createElement(Ge,{history:Ke})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[103,1,2]]]);
//# sourceMappingURL=main.5a89b125.chunk.js.map