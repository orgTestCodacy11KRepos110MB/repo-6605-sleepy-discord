(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{159:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),s=t(7),a=(t(0),t(383)),c={title:"include/sleepy_discord/cpr_session.h"},o={unversionedId:"reference/Files/cpr__session_8h",id:"reference/Files/cpr__session_8h",isDocsHomePage:!1,title:"include/sleepy_discord/cpr_session.h",description:"Namespaces",source:"@site/docs/reference/Files/cpr__session_8h.md",slug:"/reference/Files/cpr__session_8h",permalink:"/sleepy-discord/docs/reference/Files/cpr__session_8h",version:"current",sidebar:"Reference",previous:{title:"sleepy_discord/cpr_session.cpp",permalink:"/sleepy-discord/docs/reference/Files/cpr__session_8cpp"},next:{title:"include/sleepy_discord/custom_connection.h",permalink:"/sleepy-discord/docs/reference/Files/custom__connection_8h"}},i=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Types",id:"types",children:[]},{value:"Types Documentation",id:"types-documentation",children:[{value:"typedef Session",id:"typedef-session",children:[]}]},{value:"Source code",id:"source-code",children:[]}],l={toc:i};function p(e){var n=e.components,t=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"namespaces"},"Namespaces"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Name"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",{parentName:"td"},Object(a.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(a.b)("h2",{id:"classes"},"Classes"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null}),Object(a.b)("th",{parentName:"tr",align:null},"Name"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"class"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",{parentName:"td"},Object(a.b)("a",{parentName:"strong",href:"/docs/reference/Classes/class_sleepy_discord_1_1_c_p_r_session"},"SleepyDiscord::CPRSession")))))),Object(a.b)("h2",{id:"types"},"Types"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null}),Object(a.b)("th",{parentName:"tr",align:null},"Name"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"typedef CPRSession"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("strong",{parentName:"td"},Object(a.b)("a",{parentName:"strong",href:"/docs/reference/Files/cpr__session_8h#typedef-session"},"Session")))))),Object(a.b)("h2",{id:"types-documentation"},"Types Documentation"),Object(a.b)("h3",{id:"typedef-session"},"typedef Session"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"typedef CustomSession SleepyDiscord::Session;\n")),Object(a.b)("h2",{id:"source-code"},"Source code"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n\n#if defined(SLEEPY_DISCORD_CMAKE)\n    #if defined(EXISTENT_CPR)\n        #include <cpr/cpr.h>\n    #else\n        #define NONEXISTENT_CPR\n    #endif\n#else\n    #include <cpr/cpr.h>\n#endif\n\n#ifndef NONEXISTENT_CPR\n#include "http.h"\n\nnamespace SleepyDiscord {\n    class CPRSession : public GenericSession {\n    public:\n        inline void setUrl(const std::string& url) {\n            session.SetUrl(cpr::Url{ url });\n        }\n        inline void setBody(const std::string* jsonParameters) {\n            session.SetBody(cpr::Body{ *jsonParameters });\n        }\n        void setHeader(const std::vector<HeaderPair>& header);\n        void setMultipart(const std::vector<Part>& parts);\n        void setResponseCallback(const ResponseCallback& callback) {\n            responseCallback = callback;\n        }\n        Response request(RequestMethod method);\n    private:\n        Response perform(RequestMethod method);\n        cpr::Session session;\n        //muiltpart is needs to be here when uploading images,\n        //so that it\'s not deallocated when making the request\n        cpr::Multipart muiltpart = {};\n        ResponseCallback responseCallback;\n    };\n\n    typedef CPRSession Session;\n}\n\n#endif\n')),Object(a.b)("hr",null),Object(a.b)("p",null,"Updated on  8 August 2021 at 21:14:25 UTC"))}p.isMDXComponent=!0},383:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),s=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=s.a.createContext({}),p=function(e){var n=s.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return s.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return s.a.createElement(s.a.Fragment,{},n)}},u=s.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,m=d["".concat(c,".").concat(u)]||d[u]||b[u]||a;return t?s.a.createElement(m,o(o({ref:n},l),{},{components:t})):s.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<a;l++)c[l]=t[l];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);