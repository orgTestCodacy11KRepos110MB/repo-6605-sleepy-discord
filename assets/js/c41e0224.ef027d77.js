"use strict";(self.webpackChunksleepy_discord_docs=self.webpackChunksleepy_discord_docs||[]).push([[7391],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(y,o(o({ref:t},s),{},{components:r})):n.createElement(y,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6658:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(3117),a=r(102),l=(r(7294),r(3905)),o=["components"],i={title:"SleepyDiscord::WebSocketMessage"},c=void 0,p={unversionedId:"reference/Classes/struct_sleepy_discord_1_1_web_socket_message",id:"reference/Classes/struct_sleepy_discord_1_1_web_socket_message",title:"SleepyDiscord::WebSocketMessage",description:"Public Types Documentation",source:"@site/docs/reference/Classes/struct_sleepy_discord_1_1_web_socket_message.md",sourceDirName:"reference/Classes",slug:"/reference/Classes/struct_sleepy_discord_1_1_web_socket_message",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_web_socket_message",tags:[],version:"current",frontMatter:{title:"SleepyDiscord::WebSocketMessage"},sidebar:"Reference",previous:{title:"SleepyDiscord::WebHookParams",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_web_hook_params"},next:{title:"SleepyDiscord::Webhook",permalink:"/sleepy-discord/docs/reference/Classes/struct_sleepy_discord_1_1_webhook"}},s=[{value:"Public Types Documentation",id:"public-types-documentation",children:[{value:"enum OPCode",id:"enum-opcode",children:[],level:3},{value:"using OPCodeType",id:"using-opcodetype",children:[],level:3}],level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",children:[{value:"variable opCode",id:"variable-opcode",children:[],level:3},{value:"variable payload",id:"variable-payload",children:[],level:3},{value:"variable lifetime",id:"variable-lifetime",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"public-types-documentation"},"Public Types Documentation"),(0,l.kt)("h3",{id:"enum-opcode"},"enum OPCode"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Enumerator"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"continuation"),(0,l.kt)("td",{parentName:"tr",align:null},"0x0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"0x1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"binary"),(0,l.kt)("td",{parentName:"tr",align:null},"0x2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"close"),(0,l.kt)("td",{parentName:"tr",align:null},"0x8"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ping"),(0,l.kt)("td",{parentName:"tr",align:null},"0x9"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pong"),(0,l.kt)("td",{parentName:"tr",align:null},"0xA"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"using-opcodetype"},"using OPCodeType"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"using SleepyDiscord::WebSocketMessage::OPCodeType =  OPCode;\n")),(0,l.kt)("h2",{id:"public-attributes-documentation"},"Public Attributes Documentation"),(0,l.kt)("h3",{id:"variable-opcode"},"variable opCode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"OPCodeType opCode = text;\n")),(0,l.kt)("h3",{id:"variable-payload"},"variable payload"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"const std::string & payload;\n")),(0,l.kt)("h3",{id:"variable-lifetime"},"variable lifetime"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"std::shared_ptr< void > lifetime;\n")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Updated on 26 January 2022 at 23:13:03 UTC"))}d.isMDXComponent=!0}}]);