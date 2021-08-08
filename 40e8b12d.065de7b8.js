(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{157:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),c=(t(0),t(383)),s={title:"SleepyDiscord::ServerMembersRequest"},i={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_server_members_request",id:"reference/Classes/struct_sleepy_discord_1_1_server_members_request",isDocsHomePage:!1,title:"SleepyDiscord::ServerMembersRequest",description:"Public Functions Documentation",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_server_members_request.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_server_members_request",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_server_members_request",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::ServerMembersChunk",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_server_members_chunk"},next:{title:"SleepyDiscord::ServerWidget",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_server_widget"}},l=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function ServerMembersRequest",id:"function-servermembersrequest",children:[]},{value:"function ServerMembersRequest",id:"function-servermembersrequest-1",children:[]},{value:"function ServerMembersRequest",id:"function-servermembersrequest-2",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable serverID",id:"variable-serverid",children:[]},{value:"variable query",id:"variable-query",children:[]},{value:"variable limit",id:"variable-limit",children:[]},{value:"variable presence",id:"variable-presence",children:[]},{value:"variable userIDs",id:"variable-userids",children:[]},{value:"variable nonce",id:"variable-nonce",children:[]}]}],o={toc:l};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(c.b)("h3",{id:"function-servermembersrequest"},"function ServerMembersRequest"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"ServerMembersRequest() =default\n")),Object(c.b)("h3",{id:"function-servermembersrequest-1"},"function ServerMembersRequest"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"ServerMembersRequest(\n    const json::Value & json\n)\n")),Object(c.b)("h3",{id:"function-servermembersrequest-2"},"function ServerMembersRequest"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"ServerMembersRequest(\n    const nonstd::string_view & json\n)\n")),Object(c.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair< json::OptionalTypeHelper > &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair< json::ContainerTypeHelper > &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD \n)\n')),Object(c.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(c.b)("h3",{id:"variable-serverid"},"variable serverID"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"Snowflake< Server > serverID;\n")),Object(c.b)("h3",{id:"variable-query"},"variable query"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"tl::optional< std::string > query;\n")),Object(c.b)("h3",{id:"variable-limit"},"variable limit"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"int limit = 0;\n")),Object(c.b)("h3",{id:"variable-presence"},"variable presence"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"bool presence = false;\n")),Object(c.b)("h3",{id:"variable-userids"},"variable userIDs"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::vector< Snowflake< User > > userIDs;\n")),Object(c.b)("h3",{id:"variable-nonce"},"variable nonce"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-cpp"},"std::string nonce;\n")),Object(c.b)("hr",null),Object(c.b)("p",null,"Updated on  8 August 2021 at 21:14:25 UTC"))}u.isMDXComponent=!0},383:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),u=function(e){var r=a.a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},b=function(e){var r=u(e.components);return a.a.createElement(o.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),b=u(t),d=n,m=b["".concat(s,".").concat(d)]||b[d]||p[d]||c;return t?a.a.createElement(m,i(i({ref:r},o),{},{components:t})):a.a.createElement(m,i({ref:r},o))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,s=new Array(c);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var o=2;o<c;o++)s[o]=t[o];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);