_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"3DfF":function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a("q1tI"),r=a.n(n),i=a("IFAr"),o=a("Y6Li"),l=a("45lk"),s=(a("qDg5"),a("BMrR")),c=a("kPKH"),u=a("bJ4p"),m=r.a.createElement;function d(e){e.activeHeaderCollapse;return m("div",{className:"header-function-menu-one"},m(l.a,null,m("div",{className:"function-menu-wrapper"},m(s.a,{gutter:30},m(c.a,{xs:{span:24,order:1},md:{span:16,order:2},lg:18},m(u.a,null))))))}var p=r.a.memo(d),b=r.a.createElement;function f(e){var t=e.activeHeaderCollapse;return b(r.a.Fragment,null,b(i.a,null),b(o.a,null),b(p,{activeHeaderCollapse:t}))}},"S/uq":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("OS56"),o=a.n(i),l=(a("45lk"),r.a.createElement);function s(e){var t=e.style;return l("div",{className:"partner-one",style:t},l("div",{className:"partner-one-wrapper"},l(o.a,{arrows:!1,infinite:!0,speed:500,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:3}}]},Array.from(Array(8),(function(e,t){return l("div",{key:t,className:"slider-item"},l("a",{href:"#"},l("img",{src:""+"/assets/images/sections/partners/".concat(t+1,".png"),alt:"Partner logo"})))})))))}t.a=r.a.memo(s)},Zuxe:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("TSYQ"),o=a.n(i),l=a("2/Rp"),s=a("/MKj"),c=a("yyPw"),u=a("9MPT"),m=a("N0nX"),d=r.a.createElement,p={categories:[{name:"C\xe2u chuy\u1ec7n OC",value:"story"},{name:"Khuy\u1ebfn m\xe3i",value:"sale"},{name:"Blog",value:"blog"},{name:"\u0110\u0103ng k\xfd \u0111\u1ea1i l\xfd",value:"register"}],tags:[{name:"T\u1ea5t c\u1ea3",value:""},{name:"story",value:"story"},{name:"sale",value:"sale"},{name:"blog",value:"blog"}]},b=function(e){var t=e.children,a=e.title,n=e.className;return d("div",{className:"blog-sidebar-section ".concat(o()(n))},d("div",{className:"blog-sidebar-section__header"},d("h5",null,a)),d("div",{className:"blog-sidebar-section__content"},t))};function f(e){var t=e.recentPostsData,a=Object(s.b)(),n=Object(s.c)((function(e){return e.blogFilterReducer})),r=n.category,i=n.tag,f=function(e,t){e.preventDefault(),a(function(e){return{type:c.b.SET_CATEGORY,category:e}}(t))},v=function(e){a(function(e){return{type:c.b.SET_TAG,tag:e}}(e))};return d("div",{className:"blog-sidebar"},d(b,{className:"-categories",title:"Danh m\u1ee5c"},d("ul",null,d("li",{className:o()({active:""===r})},d("a",{onClick:function(e){return f(e,"")},href:"#"},"Trang ch\u1ee7")),p.categories.map((function(e,t){return d("li",{className:o()({active:r===e.value}),key:t},d("a",{onClick:function(t){return f(t,e.value)},href:"#"},e.name))})))),d(b,{className:"-recent-post",title:"B\xe0i vi\u1ebft g\u1ea7n \u0111\xe2y"},d(u.a,{data:t,renderData:function(e){return e.map((function(e,t){return d(m.a,{key:t,type:"tiny",data:e})}))}})),d(b,{className:"-tags",title:"Popular tags"},p.tags.map((function(e,t){return d(l.a,{className:o()({active:i===e.value}),onClick:function(){return v(e.value)},key:t},e.name)}))))}t.a=r.a.memo(f)},"apj+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("nOHt"),o=a("bE4q"),l=a("BMrR"),s=a("kPKH"),c=a("/MKj"),u=a("F0Hh"),m=a("kckt"),d=a("45lk"),p=a("Zuxe"),b=a("1GRj"),f=a("2/Rp"),v=a("TniP"),g=a("Vl3Y"),y=a("5rEg"),h=a("kLkQ"),N=r.a.createElement;function _(e){var t=e.data;return N("div",{className:"post-detail-comment__item"},N("div",{className:"post-detail-comment__item-avatar"},N(b.a,{width:"80",height:"80",src:""+t.user.avatar,alt:"User avatar image",placeholder:!0})),N("div",{className:"post-detail-comment__item-content"},N("h5",null,Object(h.b)(t.commentDate)),N("h3",null,t.user.name),N("p",null,t.comment),N("div",{className:"post-detail-comment__item-content__button"},N(f.a,null,"Like"),N(f.a,null,"Reply")),N("div",{className:"post-detail-comment__item-content__reply"},t.reply&&t.reply.map((function(e){return N(_,{data:e})})))))}function E(e){var t=e.data;return N("div",{className:"post-detail-comment"},N("div",{className:"post-detail-comment__list"},N("h3",{className:"post-detail-comment__title"},"4 Comments"),t.map((function(e){return N(_,{data:e})}))),N("div",{className:"post-detail-comment__new"},N("h3",{className:"post-detail-comment__title"},"Leave a comment"),N(g.a,{layout:"vertical",name:"basic",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)},onFinishFailed:function(e){console.log("Failed:",e)}},N(g.a.Item,{name:"name",rules:[{required:!0,message:"Please input your name!"}]},N(y.a,{placeholder:"Name"})),N(g.a.Item,{name:"email",rules:[{required:!0,message:"Please input your email!"}]},N(y.a,{placeholder:"Email"})),N(g.a.Item,{name:"website"},N(y.a,{placeholder:"Website"})),N(g.a.Item,{name:"message"},N(y.a.TextArea,{placeholder:"Message"})),N(g.a.Item,null,N(f.a,{type:"primary",shape:"round",htmlType:"submit"},"Send message")))))}var C=r.a.memo(E),O=r.a.createElement;function x(e){var t=e.data;return O("div",{className:"post-detail-content"},O("div",{className:"post-detail-content__main"},O("h1",{className:"post-detail-title"},t.title," "),O(b.a,{className:"post-detail-image",width:"100%",title:t.title,src:"/assets/images/blog/blog-detail/1.png",alt:"Post detail image",placeholder:!0}),O("p",{className:"post-detail-paragraph"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in."),O("h3",{className:"post-detail-subtitle"},"You Can Buy For Less Than A College Degree"),O("p",{className:"post-detail-paragraph"},"Degree Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."),O(b.a,{className:"post-detail-image",width:"100%",title:"The Personality Trait That Makes People Happier",src:"/assets/images/blog/blog-detail/2.png",alt:"Post detail image",placeholder:!0}),O("p",{className:"post-detail-paragraph"},"Aboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"),O("p",{className:"post-detail-paragraph"},"Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conslaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve niam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in datat non proident, sunt in. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volupt atem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis dicta sunt explicabo.")),O("div",{className:"post-detail-content__footer"},O("div",{className:"post-detail-content__footer-tags"},t.tag.map((function(e,t){return O(f.a,{key:t},e)}))),O("div",{className:"post-detail-content__footer-share"},O("span",null,"Share:"),O(v.a,null))),O(C,{data:t.comments}))}var P=r.a.memo(x),q=a("9MPT"),w=a("S/uq"),j=r.a.createElement;function k(){var e=Object(c.b)(),t=Object(i.useRouter)().query.slug,a=Object(c.c)((function(e){return e.blogReducer})),r=a.postDetail,b=a.recentPosts;return Object(n.useEffect)((function(){e(Object(u.a)(t)),e(Object(u.c)({limit:4}))}),[]),j(m.a,{title:"Post detail"},j(d.a,null,j(o.a,{separator:">"},j(o.a.Item,null,j("i",{className:"fas fa-home"}),"Home"),j(o.a.Item,null,"Blog"),j(o.a.Item,null,"Blog grid with sidebar")),j("div",{className:"blog-detail"},j(l.a,{gutter:30},j(s.a,{xs:24,lg:6},j(p.a,{recentPostsData:b})),j(s.a,{xs:24,lg:18},j(q.a,{data:r,renderData:function(e){return j(P,{data:e[0]})}})))),j(w.a,null)))}t.default=r.a.memo(k)},axyi:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/post/[slug]",function(){return a("apj+")}])},bE4q:function(e,t,a){"use strict";var n=a("pVnL"),r=a.n(n),i=a("lSNA"),o=a.n(i),l=a("RIqP"),s=a.n(l),c=a("q1tI"),u=a("TSYQ"),m=a.n(u),d=a("Zm9Q"),p=a("HQEm"),b=a.n(p),f=a("eDIo"),v=a("fEPi"),g=a.n(v),y=a("J4zp"),h=a.n(y),N=a("cCPh"),_=a.n(N),E=a("2/Rp"),C=a("H84U"),O=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},x=E.a.Group,P=function(e){var t=c.useContext(C.b),a=t.getPopupContainer,n=t.getPrefixCls,i=t.direction,o=e.prefixCls,l=e.type,s=e.disabled,u=e.onClick,d=e.htmlType,p=e.children,b=e.className,f=e.overlay,v=e.trigger,g=e.align,y=e.visible,N=e.onVisibleChange,P=e.placement,q=e.getPopupContainer,w=e.href,j=e.icon,k=void 0===j?c.createElement(_.a,null):j,T=e.title,D=e.buttonsRender,I=O(e,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender"]),S=n("dropdown-button",o),A={align:g,overlay:f,disabled:s,trigger:s?[]:v,onVisibleChange:N,getPopupContainer:q||a};"visible"in e&&(A.visible=y),A.placement="placement"in e?P:"rtl"===i?"bottomLeft":"bottomRight";var B=D([c.createElement(E.a,{type:l,disabled:s,onClick:u,htmlType:d,href:w,title:T},p),c.createElement(E.a,{type:l,icon:k})]),M=h()(B,2),L=M[0],F=M[1];return c.createElement(x,r()({},I,{className:m()(S,b)}),L,c.createElement(R,A,F))};P.__ANT_BUTTON=!0,P.defaultProps={type:"default",buttonsRender:function(e){return e}};var q=P,w=a("uaoM"),j=a("CWQg"),k=a("0n0R"),T=(Object(j.a)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight"),function(e){var t,a=c.useContext(C.b),n=a.getPopupContainer,i=a.getPrefixCls,l=a.direction,s=e.arrow,u=e.prefixCls,d=e.children,p=e.trigger,b=e.disabled,v=e.getPopupContainer,y=e.overlayClassName,h=i("dropdown",u),N=c.Children.only(d),_=Object(k.a)(N,{className:m()("".concat(h,"-trigger"),o()({},"".concat(h,"-rtl"),"rtl"===l),N.props.className),disabled:b}),E=m()(y,o()({},"".concat(h,"-rtl"),"rtl"===l)),O=b?[]:p;return O&&-1!==O.indexOf("contextMenu")&&(t=!0),c.createElement(f.a,r()({arrow:s,alignPoint:t},e,{overlayClassName:E,prefixCls:h,getPopupContainer:v||n,transitionName:function(){var t=e.placement,a=void 0===t?"":t,n=e.transitionName;return void 0!==n?n:a.indexOf("top")>=0?"slide-down":"slide-up"}(),trigger:O,overlay:function(){return function(t){var a,n=e.overlay;a="function"===typeof n?n():n;var r=(a=c.Children.only("string"===typeof a?c.createElement("span",null,a):a)).props;Object(w.a)(!r.mode||"vertical"===r.mode,"Dropdown",'mode="'.concat(r.mode,"\" is not supported for Dropdown's Menu."));var i=r.selectable,o=void 0!==i&&i,l=r.focusable,s=void 0===l||l,u=c.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},c.createElement(g.a,{className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"===typeof a.type?a:Object(k.a)(a,{mode:"vertical",selectable:o,focusable:s,expandIcon:u})}(h)},placement:function(){var t=e.placement;return void 0!==t?t:"rtl"===l?"bottomRight":"bottomLeft"}()}),_)});T.Button=q,T.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};var R=T,D=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},I=function(e){var t,a,n=e.prefixCls,i=e.separator,o=void 0===i?"/":i,l=e.children,s=e.overlay,u=e.dropdownProps,m=D(e,["prefixCls","separator","children","overlay","dropdownProps"]),d=(0,c.useContext(C.b).getPrefixCls)("breadcrumb",n);return t="href"in m?c.createElement("a",r()({className:"".concat(d,"-link")},m),l):c.createElement("span",r()({className:"".concat(d,"-link")},m),l),a=t,t=s?c.createElement(R,r()({overlay:s,placement:"bottomCenter"},u),c.createElement("span",{className:"".concat(d,"-overlay-link")},a,c.createElement(b.a,null))):a,l?c.createElement("span",null,t,o&&""!==o&&c.createElement("span",{className:"".concat(d,"-separator")},o)):null};I.__ANT_BREADCRUMB_ITEM=!0;var S=I,A=function(e){var t=e.children,a=(0,c.useContext(C.b).getPrefixCls)("breadcrumb");return c.createElement("span",{className:"".concat(a,"-separator")},t||"/")};A.__ANT_BREADCRUMB_SEPARATOR=!0;var B=A,M=a("BvKs"),L=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function F(e,t,a,n){var r=a.indexOf(e)===a.length-1,i=function(e,t){if(!e.breadcrumbName)return null;var a=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),(function(e,a){return t[a]||e}))}(e,t);return r?c.createElement("span",null,i):c.createElement("a",{href:"#/".concat(n.join("/"))},i)}var U=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(a){e=e.replace(":".concat(a),t[a])})),e},H=function(e){var t,a=e.prefixCls,n=e.separator,i=void 0===n?"/":n,l=e.style,u=e.className,p=e.routes,b=e.children,f=e.itemRender,v=void 0===f?F:f,g=e.params,y=void 0===g?{}:g,h=L(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),N=c.useContext(C.b),_=N.getPrefixCls,E=N.direction,O=_("breadcrumb",a);if(p&&p.length>0){var x=[];t=p.map((function(e){var t,a=U(e.path,y);return a&&x.push(a),e.children&&e.children.length&&(t=c.createElement(M.a,null,e.children.map((function(e){return c.createElement(M.a.Item,{key:e.path||e.breadcrumbName},v(e,y,p,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0,n=s()(e),r=U(t,a);return r&&n.push(r),n}(x,e.path,y)))})))),c.createElement(S,{overlay:t,separator:i,key:a||e.breadcrumbName},v(e,y,p,x))}))}else b&&(t=Object(d.a)(b).map((function(e,t){return e?(Object(w.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(k.a)(e,{separator:i,key:t})):e})));var P=m()(O,o()({},"".concat(O,"-rtl"),"rtl"===E),u);return c.createElement("div",r()({className:P,style:l},h),t)};H.Item=S,H.Separator=B;var K=H;t.a=K},kckt:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("8Kt/"),o=a.n(i),l=a("3LgI"),s=a("3DfF"),c=a("Dq34"),u=a("E9In"),m=r.a.createElement,d=Object(u.a)(s.a);function p(e){var t=e.title,a=e.children,n=e.headerClass,i=e.footerClass;return m(r.a.Fragment,null,m(o.a,null,m("title",null,t)),m(d,{className:n}),a,m(c.a,{className:i}),m(l.a,null))}t.a=r.a.memo(p)}},[["axyi",1,2,5,0,4,3,6,7,8,9,14]]]);