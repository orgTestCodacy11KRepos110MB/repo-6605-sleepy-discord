(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{338:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"metadata",(function(){return i})),r.d(n,"toc",(function(){return o})),r.d(n,"default",(function(){return u}));var t=r(3),c=r(7),a=(r(0),r(383)),s={title:"SleepyDiscord::MessageReference"},i={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_message_reference",id:"reference/Classes/struct_sleepy_discord_1_1_message_reference",isDocsHomePage:!1,title:"SleepyDiscord::MessageReference",description:"Public Functions Documentation",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_message_reference.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_message_reference",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_message_reference",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::MessageParams",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_message_params"},next:{title:"SleepyDiscord::MessageRevisions",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_message_revisions"}},o=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function MessageReference",id:"function-messagereference",children:[]},{value:"function ~MessageReference",id:"function-messagereference-1",children:[]},{value:"function MessageReference",id:"function-messagereference-2",children:[]},{value:"function MessageReference",id:"function-messagereference-3",children:[]},{value:"function MessageReference",id:"function-messagereference-4",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]},{value:"function empty",id:"function-empty",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable messageID",id:"variable-messageid",children:[]},{value:"variable channelID",id:"variable-channelid",children:[]},{value:"variable serverID",id:"variable-serverid",children:[]}]}],l={toc:o};function u(e){var n=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(a.b)("h3",{id:"function-messagereference"},"function MessageReference"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"MessageReference() =default\n")),Object(a.b)("h3",{id:"function-messagereference-1"},"function ~MessageReference"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"~MessageReference() =default\n")),Object(a.b)("h3",{id:"function-messagereference-2"},"function MessageReference"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"MessageReference(\n    const json::Value & json\n)\n")),Object(a.b)("h3",{id:"function-messagereference-3"},"function MessageReference"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"MessageReference(\n    const nonstd::string_view & json\n)\n")),Object(a.b)("h3",{id:"function-messagereference-4"},"function MessageReference"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"inline MessageReference(\n    const Message & message\n)\n")),Object(a.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD \n)\n')),Object(a.b)("h3",{id:"function-empty"},"function empty"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"inline const JSONStructEnd bool empty() const\n")),Object(a.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(a.b)("h3",{id:"variable-messageid"},"variable messageID"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"Snowflake< Message > messageID;\n")),Object(a.b)("h3",{id:"variable-channelid"},"variable channelID"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"Snowflake< Channel > channelID;\n")),Object(a.b)("h3",{id:"variable-serverid"},"variable serverID"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"Snowflake< Server > serverID;\n")),Object(a.b)("hr",null),Object(a.b)("p",null,"Updated on  8 August 2021 at 21:14:25 UTC"))}u.isMDXComponent=!0},383:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return f}));var t=r(0),c=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,c=function(e,n){if(null==e)return{};var r,t,c={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(c[r]=e[r]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),u=function(e){var n=c.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return c.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},b=c.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(r),b=t,f=p["".concat(s,".").concat(b)]||p[b]||d[b]||a;return r?c.a.createElement(f,i(i({ref:n},l),{},{components:r})):c.a.createElement(f,i({ref:n},l))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,s=new Array(a);s[0]=b;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return c.a.createElement.apply(null,s)}return c.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);