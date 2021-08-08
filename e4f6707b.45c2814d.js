(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{344:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),c=n(7),i=(n(0),n(383)),a={title:"SleepyDiscord::EmbedThumbnail"},l={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_embed_thumbnail",id:"reference/Classes/struct_sleepy_discord_1_1_embed_thumbnail",isDocsHomePage:!1,title:"SleepyDiscord::EmbedThumbnail",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_embed_thumbnail.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_embed_thumbnail",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_embed_thumbnail",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::EmbedProvider",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_embed_provider"},next:{title:"SleepyDiscord::EmbedVideo",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_embed_video"}},o=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function EmbedThumbnail",id:"function-embedthumbnail",children:[]},{value:"function EmbedThumbnail",id:"function-embedthumbnail-1",children:[]},{value:"function EmbedThumbnail",id:"function-embedthumbnail-2",children:[]},{value:"function empty",id:"function-empty",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable url",id:"variable-url",children:[]},{value:"variable proxyUrl",id:"variable-proxyurl",children:[]},{value:"variable height",id:"variable-height",children:[]},{value:"variable width",id:"variable-width",children:[]}]}],u={toc:o};function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Inherits from ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),Object(i.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(i.b)("h3",{id:"function-embedthumbnail"},"function EmbedThumbnail"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedThumbnail() =default\n")),Object(i.b)("h3",{id:"function-embedthumbnail-1"},"function EmbedThumbnail"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedThumbnail(\n    const json::Value & json\n)\n")),Object(i.b)("h3",{id:"function-embedthumbnail-2"},"function EmbedThumbnail"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedThumbnail(\n    const nonstd::string_view & json\n)\n")),Object(i.b)("h3",{id:"function-empty"},"function empty"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline bool empty() const\n")),Object(i.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD \n)\n')),Object(i.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(i.b)("h3",{id:"variable-url"},"variable url"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"std::string url;\n")),Object(i.b)("h3",{id:"variable-proxyurl"},"variable proxyUrl"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"std::string proxyUrl;\n")),Object(i.b)("h3",{id:"variable-height"},"variable height"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"int64_t height = 0;\n")),Object(i.b)("h3",{id:"variable-width"},"variable width"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"int64_t width = 0;\n")),Object(i.b)("hr",null),Object(i.b)("p",null,"Updated on  8 August 2021 at 21:14:25 UTC"))}b.isMDXComponent=!0},383:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=c.a.createContext({}),b=function(e){var t=c.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=b(n),p=r,m=s["".concat(a,".").concat(p)]||s[p]||d[p]||i;return n?c.a.createElement(m,l(l({ref:t},u),{},{components:n})):c.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);