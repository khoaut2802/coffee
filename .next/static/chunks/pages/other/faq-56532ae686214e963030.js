_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[37],{"3DfF":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),a=n.n(r),o=n("IFAr"),i=n("Y6Li");n("45lk"),n("qDg5"),n("BMrR"),n("kPKH"),n("bJ4p"),a.a.createElement;var l=a.a.createElement;function c(e){e.activeHeaderCollapse;return l(a.a.Fragment,null,l(o.a,null),l(i.a,null))}},EGVc:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/other/faq",function(){return n("ptXK")}])},"S/uq":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("OS56"),i=n.n(o),l=(n("45lk"),a.a.createElement);function c(e){var t=e.style;return l("div",{className:"partner-one",style:t},l("div",{className:"partner-one-wrapper"},l(i.a,{arrows:!1,infinite:!0,speed:500,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:3}}]},Array.from(Array(8),(function(e,t){return l("div",{key:t,className:"slider-item"},l("a",{href:"#"},l("img",{src:""+"/assets/images/sections/partners/".concat(t+1,".png"),alt:"Partner logo"})))})))))}t.a=a.a.memo(c)},bE4q:function(e,t,n){"use strict";var r=n("pVnL"),a=n.n(r),o=n("lSNA"),i=n.n(o),l=n("RIqP"),c=n.n(l),s=n("q1tI"),u=n("TSYQ"),m=n.n(u),p=n("Zm9Q"),d=n("HQEm"),f=n.n(d),b=n("eDIo"),v=n("fEPi"),y=n.n(v),g=n("J4zp"),E=n.n(g),h=n("cCPh"),N=n.n(h),C=n("2/Rp"),O=n("H84U"),x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},P=C.a.Group,R=function(e){var t=s.useContext(O.b),n=t.getPopupContainer,r=t.getPrefixCls,o=t.direction,i=e.prefixCls,l=e.type,c=e.disabled,u=e.onClick,p=e.htmlType,d=e.children,f=e.className,b=e.overlay,v=e.trigger,y=e.align,g=e.visible,h=e.onVisibleChange,R=e.placement,w=e.getPopupContainer,_=e.href,I=e.icon,T=void 0===I?s.createElement(N.a,null):I,A=e.title,k=e.buttonsRender,S=x(e,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender"]),j=r("dropdown-button",i),B={align:y,overlay:b,disabled:c,trigger:c?[]:v,onVisibleChange:h,getPopupContainer:w||n};"visible"in e&&(B.visible=g),B.placement="placement"in e?R:"rtl"===o?"bottomLeft":"bottomRight";var D=k([s.createElement(C.a,{type:l,disabled:c,onClick:u,htmlType:p,href:_,title:A},d),s.createElement(C.a,{type:l,icon:T})]),L=E()(D,2),M=L[0],H=L[1];return s.createElement(P,a()({},S,{className:m()(j,f)}),M,s.createElement(q,B,H))};R.__ANT_BUTTON=!0,R.defaultProps={type:"default",buttonsRender:function(e){return e}};var w=R,_=n("uaoM"),I=n("CWQg"),T=n("0n0R"),A=(Object(I.a)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight"),function(e){var t,n=s.useContext(O.b),r=n.getPopupContainer,o=n.getPrefixCls,l=n.direction,c=e.arrow,u=e.prefixCls,p=e.children,d=e.trigger,f=e.disabled,v=e.getPopupContainer,g=e.overlayClassName,E=o("dropdown",u),h=s.Children.only(p),N=Object(T.a)(h,{className:m()("".concat(E,"-trigger"),i()({},"".concat(E,"-rtl"),"rtl"===l),h.props.className),disabled:f}),C=m()(g,i()({},"".concat(E,"-rtl"),"rtl"===l)),x=f?[]:d;return x&&-1!==x.indexOf("contextMenu")&&(t=!0),s.createElement(b.a,a()({arrow:c,alignPoint:t},e,{overlayClassName:C,prefixCls:E,getPopupContainer:v||r,transitionName:function(){var t=e.placement,n=void 0===t?"":t,r=e.transitionName;return void 0!==r?r:n.indexOf("top")>=0?"slide-down":"slide-up"}(),trigger:x,overlay:function(){return function(t){var n,r=e.overlay;n="function"===typeof r?r():r;var a=(n=s.Children.only("string"===typeof n?s.createElement("span",null,n):n)).props;Object(_.a)(!a.mode||"vertical"===a.mode,"Dropdown",'mode="'.concat(a.mode,"\" is not supported for Dropdown's Menu."));var o=a.selectable,i=void 0!==o&&o,l=a.focusable,c=void 0===l||l,u=s.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},s.createElement(y.a,{className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"===typeof n.type?n:Object(T.a)(n,{mode:"vertical",selectable:i,focusable:c,expandIcon:u})}(E)},placement:function(){var t=e.placement;return void 0!==t?t:"rtl"===l?"bottomRight":"bottomLeft"}()}),N)});A.Button=w,A.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};var q=A,k=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},S=function(e){var t,n,r=e.prefixCls,o=e.separator,i=void 0===o?"/":o,l=e.children,c=e.overlay,u=e.dropdownProps,m=k(e,["prefixCls","separator","children","overlay","dropdownProps"]),p=(0,s.useContext(O.b).getPrefixCls)("breadcrumb",r);return t="href"in m?s.createElement("a",a()({className:"".concat(p,"-link")},m),l):s.createElement("span",a()({className:"".concat(p,"-link")},m),l),n=t,t=c?s.createElement(q,a()({overlay:c,placement:"bottomCenter"},u),s.createElement("span",{className:"".concat(p,"-overlay-link")},n,s.createElement(f.a,null))):n,l?s.createElement("span",null,t,i&&""!==i&&s.createElement("span",{className:"".concat(p,"-separator")},i)):null};S.__ANT_BREADCRUMB_ITEM=!0;var j=S,B=function(e){var t=e.children,n=(0,s.useContext(O.b).getPrefixCls)("breadcrumb");return s.createElement("span",{className:"".concat(n,"-separator")},t||"/")};B.__ANT_BREADCRUMB_SEPARATOR=!0;var D=B,L=n("BvKs"),M=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function H(e,t,n,r){var a=n.indexOf(e)===n.length-1,o=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),(function(e,n){return t[n]||e}))}(e,t);return a?s.createElement("span",null,o):s.createElement("a",{href:"#/".concat(r.join("/"))},o)}var U=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(n){e=e.replace(":".concat(n),t[n])})),e},F=function(e){var t,n=e.prefixCls,r=e.separator,o=void 0===r?"/":r,l=e.style,u=e.className,d=e.routes,f=e.children,b=e.itemRender,v=void 0===b?H:b,y=e.params,g=void 0===y?{}:y,E=M(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),h=s.useContext(O.b),N=h.getPrefixCls,C=h.direction,x=N("breadcrumb",n);if(d&&d.length>0){var P=[];t=d.map((function(e){var t,n=U(e.path,g);return n&&P.push(n),e.children&&e.children.length&&(t=s.createElement(L.a,null,e.children.map((function(e){return s.createElement(L.a.Item,{key:e.path||e.breadcrumbName},v(e,g,d,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=c()(e),a=U(t,n);return a&&r.push(a),r}(P,e.path,g)))})))),s.createElement(j,{overlay:t,separator:o,key:n||e.breadcrumbName},v(e,g,d,P))}))}else f&&(t=Object(p.a)(f).map((function(e,t){return e?(Object(_.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(T.a)(e,{separator:o,key:t})):e})));var R=m()(x,i()({},"".concat(x,"-rtl"),"rtl"===C),u);return s.createElement("div",a()({className:R,style:l},E),t)};F.Item=j,F.Separator=D;var K=F;t.a=K},kckt:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("8Kt/"),i=n.n(o),l=n("3LgI"),c=n("3DfF"),s=n("Dq34"),u=n("E9In"),m=a.a.createElement,p=Object(u.a)(c.a);function d(e){var t=e.title,n=e.children,r=e.headerClass,o=e.footerClass;return m(a.a.Fragment,null,m(i.a,null,m("title",null,t)),m(p,{className:r}),n,m(s.a,{className:o}),m(l.a,null))}t.a=a.a.memo(d)},ptXK:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("q1tI"),a=n.n(r),o=n("gK9i"),i=n("bE4q"),l=n("kckt"),c=n("45lk"),s=n("S/uq"),u=n("usMm"),m=a.a.createElement;function p(){var e=o.a.Panel;return m(l.a,{title:"FAQ"},m(c.a,null,m(i.a,{separator:">"},m(i.a.Item,null,m("i",{className:"fas fa-home"}),"Home"),m(i.a.Item,null,"FAQ")),m("div",{className:"faq"},m(o.a,{accordion:!0,defaultActiveKey:[1],ghost:!0},u.map((function(t,n){return m(e,{header:t.title,key:n+1},m("p",null,t.content))})))),m(s.a,null)))}},usMm:function(e){e.exports=JSON.parse('[{"title":"IS THERE ANYTHING I SHOULD BRING?","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{"title":"WHERE CAN I FIND MARKET RESEARCH REPORTS?","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{"title":"WHERE CAN I FIND THE WALL STREET JOURNAL ?","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}]')}},[["EGVc",1,2,5,0,4,3,6,7,8]]]);