_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"3DfF":function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t("q1tI"),r=t.n(n),l=t("IFAr"),s=t("Y6Li"),o=t("45lk"),c=(t("qDg5"),t("BMrR")),i=t("kPKH"),u=t("bJ4p"),m=r.a.createElement;function d(e){e.activeHeaderCollapse;return m("div",{className:"header-function-menu-one"},m(o.a,null,m("div",{className:"function-menu-wrapper"},m(c.a,{gutter:30},m(i.a,{xs:{span:24,order:1},md:{span:16,order:2},lg:18},m(u.a,null))))))}var f=r.a.memo(d),p=r.a.createElement;function g(e){var a=e.activeHeaderCollapse;return p(r.a.Fragment,null,p(l.a,null),p(s.a,null),p(f,{activeHeaderCollapse:a}))}},"6Pwv":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/blog-grid-2-column",function(){return t("sAaj")}])},"S/uq":function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("OS56"),s=t.n(l),o=(t("45lk"),r.a.createElement);function c(e){var a=e.style;return o("div",{className:"partner-one",style:a},o("div",{className:"partner-one-wrapper"},o(s.a,{arrows:!1,infinite:!0,speed:500,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:992,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:3}}]},Array.from(Array(8),(function(e,a){return o("div",{key:a,className:"slider-item"},o("a",{href:"#"},o("img",{src:""+"/assets/images/sections/partners/".concat(a+1,".png"),alt:"Partner logo"})))})))))}a.a=r.a.memo(c)},kckt:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("8Kt/"),s=t.n(l),o=t("3LgI"),c=t("3DfF"),i=t("Dq34"),u=t("E9In"),m=r.a.createElement,d=Object(u.a)(c.a);function f(e){var a=e.title,t=e.children,n=e.headerClass,l=e.footerClass;return m(r.a.Fragment,null,m(s.a,null,m("title",null,a)),m(d,{className:n}),t,m(i.a,{className:l}),m(o.a,null))}a.a=r.a.memo(f)},sAaj:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),l=t("bE4q"),s=t("BMrR"),o=t("kPKH"),c=t("NUBc"),i=t("/MKj"),u=t("F0Hh"),m=t("kckt"),d=t("45lk"),f=t("N0nX"),p=t("9MPT"),g=t("S/uq"),v=r.a.createElement;function b(){var e=Object(i.b)(),a=Object(n.useState)(1),t=a[0],r=a[1],b=Object(i.c)((function(e){return e.blogReducer})),w=b.allPosts;b.recentPosts;Object(n.useEffect)((function(){e(Object(u.b)({limit:4,page:t})),e(Object(u.c)({limit:4}))}),[t]);var N=function(e){r(e)};return v(m.a,{title:"Blog grid 2 column"},v(d.a,null,v(l.a,{separator:">"},v(l.a.Item,null,v("i",{className:"fas fa-home"}),"Home"),v(l.a.Item,null,"Blog"),v(l.a.Item,null,"Blog grid 2 column")),v(p.a,{data:w,renderData:function(e){return v("div",{className:"blog"},v("div",{className:"blog-content"},v(s.a,{gutter:30},e.map((function(e){return v(o.a,{xs:24,md:12},v(f.a,{data:e}))})))),v(c.a,{onChange:N,defaultCurrent:t,pageSize:4,total:w.count}))}}),v(g.a,null)))}a.default=r.a.memo(b)}},[["6Pwv",1,2,5,0,4,3,6,7,8,9,14,15]]]);