_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"3DfF":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),r=a.n(n),i=a("IFAr"),o=a("Y6Li");a("45lk"),a("qDg5"),a("BMrR"),a("kPKH"),a("bJ4p"),r.a.createElement;var l=r.a.createElement;function s(e){e.activeHeaderCollapse;return l(r.a.Fragment,null,l(i.a,null),l(o.a,null))}},"S/uq":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("OS56"),o=a.n(i),l=(a("45lk"),r.a.createElement);function s(e){var t=e.style;return l("div",{className:"partner-one",style:t},l("div",{className:"partner-one-wrapper"},l(o.a,{arrows:!1,infinite:!0,speed:500,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:3}}]},Array.from(Array(8),(function(e,t){return l("div",{key:t,className:"slider-item"},l("a",{href:"#"},l("img",{src:""+"/assets/images/sections/partners/".concat(t+1,".png"),alt:"Partner logo"})))})))))}t.a=r.a.memo(s)},Zuxe:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("TSYQ"),o=a.n(i),l=a("2/Rp"),s=a("/MKj"),c=a("yyPw"),u=a("9MPT"),m=a("N0nX"),p=r.a.createElement,d={categories:[{name:"Healthy",value:"healthy"},{name:"Nutrition Meal",value:"nutrition-meal"},{name:"Organic Planting",value:"organic-planting"},{name:"Recipes",value:"recipes"}],tags:[{name:"All tag",value:""},{name:"fresh",value:"fresh"},{name:"vegetable",value:"vegetable"},{name:"meat",value:"meat"}]},b=function(e){var t=e.children,a=e.title,n=e.className;return p("div",{className:"blog-sidebar-section ".concat(o()(n))},p("div",{className:"blog-sidebar-section__header"},p("h5",null,a)),p("div",{className:"blog-sidebar-section__content"},t))};function f(e){var t=e.recentPostsData,a=Object(s.b)(),n=Object(s.c)((function(e){return e.blogFilterReducer})),r=n.category,i=n.tag,f=function(e,t){e.preventDefault(),a(function(e){return{type:c.b.SET_CATEGORY,category:e}}(t))},g=function(e){a(function(e){return{type:c.b.SET_TAG,tag:e}}(e))};return p("div",{className:"blog-sidebar"},p(b,{className:"-categories",title:"Categories"},p("ul",null,p("li",{className:o()({active:""===r})},p("a",{onClick:function(e){return f(e,"")},href:"#"},"All departments")),d.categories.map((function(e,t){return p("li",{className:o()({active:r===e.value}),key:t},p("a",{onClick:function(t){return f(t,e.value)},href:"#"},e.name))})))),p(b,{className:"-recent-post",title:"Recent posts"},p(u.a,{data:t,renderData:function(e){return e.map((function(e,t){return p(m.a,{key:t,type:"tiny",data:e})}))}})),p(b,{className:"-tags",title:"Popular tags"},d.tags.map((function(e,t){return p(l.a,{className:o()({active:i===e.value}),onClick:function(){return g(e.value)},key:t},e.name)}))))}t.a=r.a.memo(f)},"apj+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("nOHt"),o=a("bE4q"),l=a("BMrR"),s=a("kPKH"),c=a("/MKj"),u=a("F0Hh"),m=a("kckt"),p=a("45lk"),d=a("Zuxe"),b=a("1GRj"),f=a("2/Rp"),g=a("TniP"),v=a("Vl3Y"),h=a("5rEg"),y=a("kLkQ"),N=r.a.createElement;function _(e){var t=e.data;return N("div",{className:"post-detail-comment__item"},N("div",{className:"post-detail-comment__item-avatar"},N(b.a,{width:"80",height:"80",src:""+t.user.avatar,alt:"User avatar image",placeholder:!0})),N("div",{className:"post-detail-comment__item-content"},N("h5",null,Object(y.b)(t.commentDate)),N("h3",null,t.user.name),N("p",null,t.comment),N("div",{className:"post-detail-comment__item-content__button"},N(f.a,null,"Like"),N(f.a,null,"Reply")),N("div",{className:"post-detail-comment__item-content__reply"},t.reply&&t.reply.map((function(e){return N(_,{data:e})})))))}function E(e){var t=e.data;return N("div",{className:"post-detail-comment"},N("div",{className:"post-detail-comment__list"},N("h3",{className:"post-detail-comment__title"},"4 Comments"),t.map((function(e){return N(_,{data:e})}))),N("div",{className:"post-detail-comment__new"},N("h3",{className:"post-detail-comment__title"},"Leave a comment"),N(v.a,{layout:"vertical",name:"basic",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)}},N(v.a.Item,{name:"name",rules:[{required:!0,message:"Please input your name!"}]},N(h.a,{placeholder:"Name"})),N(v.a.Item,{name:"email",rules:[{required:!0,message:"Please input your email!"}]},N(h.a,{placeholder:"Email"})),N(v.a.Item,{name:"website"},N(h.a,{placeholder:"Website"})),N(v.a.Item,{name:"message"},N(h.a.TextArea,{placeholder:"Message"})),N(v.a.Item,null,N(f.a,{type:"primary",shape:"round",htmlType:"submit"},"Send message")))))}var O=r.a.memo(E),x=r.a.createElement;function C(e){var t=e.data;return x("div",{className:"post-detail-content"},x("div",{className:"post-detail-content__main"},x("h1",{className:"post-detail-title"},t.title," "),x(b.a,{className:"post-detail-image",width:"100%",title:t.title,src:"/assets/images/blog/blog-detail/1.png",alt:"Post detail image",placeholder:!0}),x("p",{className:"post-detail-paragraph"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in."),x("h3",{className:"post-detail-subtitle"},"You Can Buy For Less Than A College Degree"),x("p",{className:"post-detail-paragraph"},"Degree Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."),x(b.a,{className:"post-detail-image",width:"100%",title:"The Personality Trait That Makes People Happier",src:"/assets/images/blog/blog-detail/2.png",alt:"Post detail image",placeholder:!0}),x("p",{className:"post-detail-paragraph"},"Aboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"),x("p",{className:"post-detail-paragraph"},"Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conslaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in datat non proident, sunt in. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volupt atem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis dicta sunt explicabo.")),x("div",{className:"post-detail-content__footer"},x("div",{className:"post-detail-content__footer-tags"},t.tag.map((function(e,t){return x(f.a,{key:t},e)}))),x("div",{className:"post-detail-content__footer-share"},x("span",null,"Share:"),x(g.a,null))),x(O,{data:t.comments}))}var P=r.a.memo(C),q=a("9MPT"),w=a("S/uq"),j=r.a.createElement;function R(){var e=Object(c.b)(),t=Object(i.useRouter)().query.slug,a=Object(c.c)((function(e){return e.blogReducer})),r=a.postDetail,b=a.recentPosts;return Object(n.useEffect)((function(){e(Object(u.a)(t)),e(Object(u.c)({limit:4}))}),[]),j(m.a,{title:"Post detail"},j(p.a,null,j(o.a,{separator:">"},j(o.a.Item,null,j("i",{className:"fas fa-home"}),"Home"),j(o.a.Item,null,"Blog"),j(o.a.Item,null,"Blog grid with sidebar")),j("div",{className:"blog-detail"},j(l.a,{gutter:30},j(s.a,{xs:24,lg:6},j(d.a,{recentPostsData:b})),j(s.a,{xs:24,lg:18},j(q.a,{data:r,renderData:function(e){return j(P,{data:e[0]})}})))),j(w.a,null)))}t.default=r.a.memo(R)},axyi:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/post/[slug]",function(){return a("apj+")}])},bE4q:function(e,t,a){"use strict";var n=a("pVnL"),r=a.n(n),i=a("lSNA"),o=a.n(i),l=a("RIqP"),s=a.n(l),c=a("q1tI"),u=a("TSYQ"),m=a.n(u),p=a("Zm9Q"),d=a("HQEm"),b=a.n(d),f=a("eDIo"),g=a("fEPi"),v=a.n(g),h=a("J4zp"),y=a.n(h),N=a("cCPh"),_=a.n(N),E=a("2/Rp"),O=a("H84U"),x=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},C=E.a.Group,P=function(e){var t=c.useContext(O.b),a=t.getPopupContainer,n=t.getPrefixCls,i=t.direction,o=e.prefixCls,l=e.type,s=e.disabled,u=e.onClick,p=e.htmlType,d=e.children,b=e.className,f=e.overlay,g=e.trigger,v=e.align,h=e.visible,N=e.onVisibleChange,P=e.placement,q=e.getPopupContainer,w=e.href,j=e.icon,R=void 0===j?c.createElement(_.a,null):j,k=e.title,D=e.buttonsRender,I=x(e,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender"]),S=n("dropdown-button",o),A={align:v,overlay:f,disabled:s,trigger:s?[]:g,onVisibleChange:N,getPopupContainer:q||a};"visible"in e&&(A.visible=h),A.placement="placement"in e?P:"rtl"===i?"bottomLeft":"bottomRight";var B=D([c.createElement(E.a,{type:l,disabled:s,onClick:u,htmlType:p,href:w,title:k},d),c.createElement(E.a,{type:l,icon:R})]),M=y()(B,2),L=M[0],F=M[1];return c.createElement(C,r()({},I,{className:m()(S,b)}),L,c.createElement(T,A,F))};P.__ANT_BUTTON=!0,P.defaultProps={type:"default",buttonsRender:function(e){return e}};var q=P,w=a("uaoM"),j=a("CWQg"),R=a("0n0R"),k=(Object(j.a)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight"),function(e){var t,a=c.useContext(O.b),n=a.getPopupContainer,i=a.getPrefixCls,l=a.direction,s=e.arrow,u=e.prefixCls,p=e.children,d=e.trigger,b=e.disabled,g=e.getPopupContainer,h=e.overlayClassName,y=i("dropdown",u),N=c.Children.only(p),_=Object(R.a)(N,{className:m()("".concat(y,"-trigger"),o()({},"".concat(y,"-rtl"),"rtl"===l),N.props.className),disabled:b}),E=m()(h,o()({},"".concat(y,"-rtl"),"rtl"===l)),x=b?[]:d;return x&&-1!==x.indexOf("contextMenu")&&(t=!0),c.createElement(f.a,r()({arrow:s,alignPoint:t},e,{overlayClassName:E,prefixCls:y,getPopupContainer:g||n,transitionName:function(){var t=e.placement,a=void 0===t?"":t,n=e.transitionName;return void 0!==n?n:a.indexOf("top")>=0?"slide-down":"slide-up"}(),trigger:x,overlay:function(){return function(t){var a,n=e.overlay;a="function"===typeof n?n():n;var r=(a=c.Children.only("string"===typeof a?c.createElement("span",null,a):a)).props;Object(w.a)(!r.mode||"vertical"===r.mode,"Dropdown",'mode="'.concat(r.mode,"\" is not supported for Dropdown's Menu."));var i=r.selectable,o=void 0!==i&&i,l=r.focusable,s=void 0===l||l,u=c.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},c.createElement(v.a,{className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"===typeof a.type?a:Object(R.a)(a,{mode:"vertical",selectable:o,focusable:s,expandIcon:u})}(y)},placement:function(){var t=e.placement;return void 0!==t?t:"rtl"===l?"bottomRight":"bottomLeft"}()}),_)});k.Button=q,k.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};var T=k,D=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},I=function(e){var t,a,n=e.prefixCls,i=e.separator,o=void 0===i?"/":i,l=e.children,s=e.overlay,u=e.dropdownProps,m=D(e,["prefixCls","separator","children","overlay","dropdownProps"]),p=(0,c.useContext(O.b).getPrefixCls)("breadcrumb",n);return t="href"in m?c.createElement("a",r()({className:"".concat(p,"-link")},m),l):c.createElement("span",r()({className:"".concat(p,"-link")},m),l),a=t,t=s?c.createElement(T,r()({overlay:s,placement:"bottomCenter"},u),c.createElement("span",{className:"".concat(p,"-overlay-link")},a,c.createElement(b.a,null))):a,l?c.createElement("span",null,t,o&&""!==o&&c.createElement("span",{className:"".concat(p,"-separator")},o)):null};I.__ANT_BREADCRUMB_ITEM=!0;var S=I,A=function(e){var t=e.children,a=(0,c.useContext(O.b).getPrefixCls)("breadcrumb");return c.createElement("span",{className:"".concat(a,"-separator")},t||"/")};A.__ANT_BREADCRUMB_SEPARATOR=!0;var B=A,M=a("BvKs"),L=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function F(e,t,a,n){var r=a.indexOf(e)===a.length-1,i=function(e,t){if(!e.breadcrumbName)return null;var a=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),(function(e,a){return t[a]||e}))}(e,t);return r?c.createElement("span",null,i):c.createElement("a",{href:"#/".concat(n.join("/"))},i)}var U=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(a){e=e.replace(":".concat(a),t[a])})),e},H=function(e){var t,a=e.prefixCls,n=e.separator,i=void 0===n?"/":n,l=e.style,u=e.className,d=e.routes,b=e.children,f=e.itemRender,g=void 0===f?F:f,v=e.params,h=void 0===v?{}:v,y=L(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),N=c.useContext(O.b),_=N.getPrefixCls,E=N.direction,x=_("breadcrumb",a);if(d&&d.length>0){var C=[];t=d.map((function(e){var t,a=U(e.path,h);return a&&C.push(a),e.children&&e.children.length&&(t=c.createElement(M.a,null,e.children.map((function(e){return c.createElement(M.a.Item,{key:e.path||e.breadcrumbName},g(e,h,d,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0,n=s()(e),r=U(t,a);return r&&n.push(r),n}(C,e.path,h)))})))),c.createElement(S,{overlay:t,separator:i,key:a||e.breadcrumbName},g(e,h,d,C))}))}else b&&(t=Object(p.a)(b).map((function(e,t){return e?(Object(w.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(R.a)(e,{separator:i,key:t})):e})));var P=m()(x,o()({},"".concat(x,"-rtl"),"rtl"===E),u);return c.createElement("div",r()({className:P,style:l},y),t)};H.Item=S,H.Separator=B;var K=H;t.a=K},kckt:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("8Kt/"),o=a.n(i),l=a("3LgI"),s=a("3DfF"),c=a("Dq34"),u=a("E9In"),m=r.a.createElement,p=Object(u.a)(s.a);function d(e){var t=e.title,a=e.children,n=e.headerClass,i=e.footerClass;return m(r.a.Fragment,null,m(o.a,null,m("title",null,t)),m(p,{className:n}),a,m(c.a,{className:i}),m(l.a,null))}t.a=r.a.memo(d)}},[["axyi",1,2,5,0,4,3,6,7,8,9,14]]]);