(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{323:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return a})),n.d(r,"toc",(function(){return d})),n.d(r,"default",(function(){return u}));var t=n(3),c=n(7),i=(n(0),n(383)),o={title:"SleepyDiscord::EmbedProvider"},a={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_embed_provider",id:"reference/Classes/struct_sleepy_discord_1_1_embed_provider",isDocsHomePage:!1,title:"SleepyDiscord::EmbedProvider",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_embed_provider.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_embed_provider",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_embed_provider",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::EmbedImage",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_embed_image"},next:{title:"SleepyDiscord::EmbedThumbnail",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_embed_thumbnail"}},d=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function EmbedProvider",id:"function-embedprovider",children:[]},{value:"function EmbedProvider",id:"function-embedprovider-1",children:[]},{value:"function EmbedProvider",id:"function-embedprovider-2",children:[]},{value:"function empty",id:"function-empty",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable name",id:"variable-name",children:[]},{value:"variable url",id:"variable-url",children:[]}]}],l={toc:d};function u(e){var r=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Inherits from ",Object(i.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),Object(i.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(i.b)("h3",{id:"function-embedprovider"},"function EmbedProvider"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedProvider() =default\n")),Object(i.b)("h3",{id:"function-embedprovider-1"},"function EmbedProvider"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedProvider(\n    const json::Value & json\n)\n")),Object(i.b)("h3",{id:"function-embedprovider-2"},"function EmbedProvider"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"EmbedProvider(\n    const nonstd::string_view & json\n)\n")),Object(i.b)("h3",{id:"function-empty"},"function empty"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"inline bool empty() const\n")),Object(i.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD \n)\n')),Object(i.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(i.b)("h3",{id:"variable-name"},"variable name"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"std::string name;\n")),Object(i.b)("h3",{id:"variable-url"},"variable url"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"std::string url;\n")),Object(i.b)("hr",null),Object(i.b)("p",null,"Updated on  8 August 2021 at 21:14:25 UTC"))}u.isMDXComponent=!0},383:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return m}));var t=n(0),c=n.n(t);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,c=function(e,r){if(null==e)return{};var n,t,c={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(c[n]=e[n]);return c}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),u=function(e){var r=c.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=u(e.components);return c.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},b=c.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=u(n),b=t,m=s["".concat(o,".").concat(b)]||s[b]||p[b]||i;return n?c.a.createElement(m,a(a({ref:r},l),{},{components:n})):c.a.createElement(m,a({ref:r},l))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=b;var a={};for(var d in r)hasOwnProperty.call(r,d)&&(a[d]=r[d]);a.originalType=e,a.mdxType="string"==typeof e?e:t,o[1]=a;for(var l=2;l<i;l++)o[l]=n[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);