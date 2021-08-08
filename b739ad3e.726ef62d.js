(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{284:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(3),c=n(7),a=(n(0),n(383)),i={title:"SleepyDiscord::PresenceUpdate"},s={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_presence_update",id:"reference/Classes/struct_sleepy_discord_1_1_presence_update",isDocsHomePage:!1,title:"SleepyDiscord::PresenceUpdate",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_presence_update.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_presence_update",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_presence_update",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::Part",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_part"},next:{title:"SleepyDiscord::RateLimiter",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_rate_limiter"}},o=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function PresenceUpdate",id:"function-presenceupdate",children:[]},{value:"function ~PresenceUpdate",id:"function-presenceupdate-1",children:[]},{value:"function PresenceUpdate",id:"function-presenceupdate-2",children:[]},{value:"function PresenceUpdate",id:"function-presenceupdate-3",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable user",id:"variable-user",children:[]},{value:"variable serverID",id:"variable-serverid",children:[]},{value:"variable status",id:"variable-status",children:[]},{value:"variable activities",id:"variable-activities",children:[]}]}],p={toc:o};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Inherits from ",Object(a.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),Object(a.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(a.b)("h3",{id:"function-presenceupdate"},"function PresenceUpdate"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"PresenceUpdate() =default\n")),Object(a.b)("h3",{id:"function-presenceupdate-1"},"function ~PresenceUpdate"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"~PresenceUpdate() =default\n")),Object(a.b)("h3",{id:"function-presenceupdate-2"},"function PresenceUpdate"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"PresenceUpdate(\n    const json::Value & json\n)\n")),Object(a.b)("h3",{id:"function-presenceupdate-3"},"function PresenceUpdate"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"PresenceUpdate(\n    const nonstd::string_view & json\n)\n")),Object(a.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair< json::ContainerTypeHelper > &::, "", ::REQUIRIED_FIELD \n)\n')),Object(a.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(a.b)("h3",{id:"variable-user"},"variable user"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"User user;\n")),Object(a.b)("h3",{id:"variable-serverid"},"variable serverID"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"Snowflake< Server > serverID;\n")),Object(a.b)("h3",{id:"variable-status"},"variable status"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"std::string status;\n")),Object(a.b)("h3",{id:"variable-activities"},"variable activities"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"std::vector< Activity > activities;\n")),Object(a.b)("hr",null),Object(a.b)("p",null,"Updated on  8 August 2021 at 21:14:25 UTC"))}u.isMDXComponent=!0},383:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),u=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return n?c.a.createElement(f,s(s({ref:t},p),{},{components:n})):c.a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);