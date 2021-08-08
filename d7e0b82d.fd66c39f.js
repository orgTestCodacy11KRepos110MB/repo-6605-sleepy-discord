(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{331:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return s}));var r=n(3),c=n(7),i=(n(0),n(383)),o={title:"SleepyDiscord::ActivityTimestampTypeHelper"},p={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_activity_timestamp_type_helper",id:"reference/Classes/struct_sleepy_discord_1_1_activity_timestamp_type_helper",isDocsHomePage:!1,title:"SleepyDiscord::ActivityTimestampTypeHelper",description:"More...",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_activity_timestamp_type_helper.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_activity_timestamp_type_helper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_activity_timestamp_type_helper",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::ActivityTimestamp",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_activity_timestamp"},next:{title:"SleepyDiscord::AllowMentionsParseHelper",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_allow_mentions_parse_helper"}},a=[{value:"Detailed Description",id:"detailed-description",children:[]},{value:"Public Types Documentation",id:"public-types-documentation",children:[{value:"using TypeHelper",id:"using-typehelper",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function toType",id:"function-totype",children:[]},{value:"function empty",id:"function-empty",children:[]},{value:"function fromType",id:"function-fromtype",children:[]},{value:"function isType",id:"function-istype",children:[]}]}],l={toc:a};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null," ",Object(i.b)("a",{parentName:"p",href:"#detailed-description"},"More...")),Object(i.b)("h2",{id:"detailed-description"},"Detailed Description"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"template <class Type >\nstruct SleepyDiscord::ActivityTimestampTypeHelper;\n")),Object(i.b)("h2",{id:"public-types-documentation"},"Public Types Documentation"),Object(i.b)("h3",{id:"using-typehelper"},"using TypeHelper"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"using SleepyDiscord::ActivityTimestampTypeHelper< Type >::TypeHelper =  json::PrimitiveTypeHelper<Type>;\n")),Object(i.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(i.b)("h3",{id:"function-totype"},"function toType"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"static inline Type toType(\n    const json::Value & value\n)\n")),Object(i.b)("h3",{id:"function-empty"},"function empty"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"static inline bool empty(\n    const Type & value\n)\n")),Object(i.b)("h3",{id:"function-fromtype"},"function fromType"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"static inline json::Value fromType(\n    const Type & value,\n    json::Value::AllocatorType & allocator\n)\n")),Object(i.b)("h3",{id:"function-istype"},"function isType"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"static inline bool isType(\n    const json::Value & value\n)\n")),Object(i.b)("hr",null),Object(i.b)("p",null,"Updated on  8 August 2021 at 21:14:25 UTC"))}s.isMDXComponent=!0},383:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),s=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},y=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=s(n),y=r,m=u["".concat(o,".").concat(y)]||u[y]||d[y]||i;return n?c.a.createElement(m,p(p({ref:t},l),{},{components:n})):c.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);