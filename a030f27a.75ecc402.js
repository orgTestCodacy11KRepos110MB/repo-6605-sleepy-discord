(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{254:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),c=t(7),a=(t(0),t(383)),i={title:"SleepyDiscord::SelectMenu::Option"},o={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_select_menu_1_1_option",id:"reference/Classes/struct_sleepy_discord_1_1_select_menu_1_1_option",isDocsHomePage:!1,title:"SleepyDiscord::SelectMenu::Option",description:"Inherits from SleepyDiscord::DiscordObject",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_select_menu_1_1_option.md",slug:"/reference/Classes/struct_sleepy_discord_1_1_select_menu_1_1_option",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_select_menu_1_1_option",version:"current",sidebar:"Reference",previous:{title:"SleepyDiscord::SelectMenu",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_select_menu"},next:{title:"SleepyDiscord::SendMessageParams",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_send_message_params"}},l=[{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"function Option",id:"function-option",children:[]},{value:"function ~Option",id:"function-option-1",children:[]},{value:"function Option",id:"function-option-2",children:[]},{value:"function Option",id:"function-option-3",children:[]},{value:"function std::make_tuple",id:"function-stdmake_tuple",children:[]}]},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable label",id:"variable-label",children:[]},{value:"variable value",id:"variable-value",children:[]},{value:"variable description",id:"variable-description",children:[]},{value:"variable emoji",id:"variable-emoji",children:[]},{value:"variable isDefault",id:"variable-isdefault",children:[]}]}],s={toc:l};function u(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Inherits from ",Object(a.b)("a",{parentName:"p",href:"/docs/reference/Classes/class_sleepy_discord_1_1_discord_object"},"SleepyDiscord::DiscordObject")),Object(a.b)("h2",{id:"public-functions-documentation"},"Public Functions Documentation"),Object(a.b)("h3",{id:"function-option"},"function Option"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"Option() =default\n")),Object(a.b)("h3",{id:"function-option-1"},"function ~Option"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"~Option() =default\n")),Object(a.b)("h3",{id:"function-option-2"},"function Option"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"Option(\n    const json::Value & rawJSON\n)\n")),Object(a.b)("h3",{id:"function-option-3"},"function Option"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"Option(\n    const nonstd::string_view & json\n)\n")),Object(a.b)("h3",{id:"function-stdmake_tuple"},"function std::make_tuple"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'JSONStructStart std::make_tuple(\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair &::, "", ::REQUIRIED_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD ,\n    json::pair &::, "", ::OPTIONAL_FIELD \n)\n')),Object(a.b)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),Object(a.b)("h3",{id:"variable-label"},"variable label"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"std::string label;\n")),Object(a.b)("h3",{id:"variable-value"},"variable value"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"std::string value;\n")),Object(a.b)("h3",{id:"variable-description"},"variable description"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"std::string description;\n")),Object(a.b)("h3",{id:"variable-emoji"},"variable emoji"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"Emoji emoji;\n")),Object(a.b)("h3",{id:"variable-isdefault"},"variable isDefault"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"bool isDefault = false;\n")),Object(a.b)("hr",null),Object(a.b)("p",null,"Updated on  8 August 2021 at 21:14:25 UTC"))}u.isMDXComponent=!0},383:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),c=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=c.a.createContext({}),u=function(e){var n=c.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return c.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},d=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return t?c.a.createElement(f,o(o({ref:n},s),{},{components:t})):c.a.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<a;s++)i[s]=t[s];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);