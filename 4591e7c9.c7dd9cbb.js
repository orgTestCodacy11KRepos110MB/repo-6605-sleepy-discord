(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{161:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),s=(t(0),t(383)),i={title:"include/sleepy_discord/channel.h"},l={unversionedId:"reference/Files/channel_8h",id:"reference/Files/channel_8h",isDocsHomePage:!1,title:"include/sleepy_discord/channel.h",description:"Namespaces",source:"@site/docs/reference/Files/channel_8h.md",slug:"/reference/Files/channel_8h",permalink:"/sleepy-discord/docs/reference/Files/channel_8h",version:"current",sidebar:"Reference",previous:{title:"sleepy_discord/channel.cpp",permalink:"/sleepy-discord/docs/reference/Files/channel_8cpp"},next:{title:"sleepy_discord/client.cpp",permalink:"/sleepy-discord/docs/reference/Files/client_8cpp"}},o=[{value:"Namespaces",id:"namespaces",children:[]},{value:"Classes",id:"classes",children:[]},{value:"Source code",id:"source-code",children:[]}],c={toc:o};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"namespaces"},"Namespaces"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null},"Name"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},Object(s.b)("a",{parentName:"strong",href:"/docs/reference/Namespaces/namespace_sleepy_discord"},"SleepyDiscord")))))),Object(s.b)("h2",{id:"classes"},"Classes"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",{parentName:"tr",align:null}),Object(s.b)("th",{parentName:"tr",align:null},"Name"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"struct"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},Object(s.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_overwrite"},"SleepyDiscord::Overwrite")))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"struct"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},Object(s.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_get_default_3_01_overwrite_1_1_type_01_4"},"SleepyDiscord::GetDefault< Overwrite::Type >")))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"struct"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},Object(s.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_channel"},"SleepyDiscord::Channel")))),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",{parentName:"tr",align:null},"struct"),Object(s.b)("td",{parentName:"tr",align:null},Object(s.b)("strong",{parentName:"td"},Object(s.b)("a",{parentName:"strong",href:"/docs/reference/Classes/struct_sleepy_discord_1_1_get_default_3_01_channel_1_1_channel_type_01_4"},"SleepyDiscord::GetDefault< Channel::ChannelType >")))))),Object(s.b)("h2",{id:"source-code"},"Source code"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},'#pragma once\n#include <string>\n#include "user.h"\n#include "permissions.h"\n#include "snowflake.h"\n\nnamespace SleepyDiscord {\n    struct Overwrite : IdentifiableDiscordObject<Overwrite> {\n        Overwrite() = default;\n        //Overwrite(const std::string * rawJson);\n        Overwrite(const json::Value & rawJSON);\n        Overwrite(const nonstd::string_view & rawJSON);\n        //Overwrite(const json::Values values);\n        ~Overwrite() {}\n        enum class Type : int {\n            TYPE_NONE = -400,\n            role = 0,\n            member = 1\n        };\n        Type type;\n        Permission allow = Permission::NONE;\n        Permission deny = Permission::NONE;\n\n        //const static std::initializer_list<const char*const> fields;\n        JSONStructStart\n            std::make_tuple(\n                json::pair                      (&Overwrite::ID   , "id"   , json::REQUIRIED_FIELD),\n                json::pair<json::EnumTypeHelper>(&Overwrite::type , "type" , json::REQUIRIED_FIELD),\n                json::pair<UInt64StrTypeHelper >(&Overwrite::allow, "allow", json::REQUIRIED_FIELD),\n                json::pair<UInt64StrTypeHelper >(&Overwrite::deny , "deny" , json::REQUIRIED_FIELD)\n            );\n        JSONStructEnd\n    };\n\n    template<>\n    struct GetDefault<Overwrite::Type> {\n        static inline const Overwrite::Type get() {\n            return Overwrite::Type::TYPE_NONE;\n        }\n    };\n\n    //forward declearion\n    struct Server;\n    struct Message;\n\n    struct Channel : IdentifiableDiscordObject<Channel> {\n    public:\n        Channel() = default;\n        //Channel(const std::string * rawJson);\n        Channel(const json::Value & rawJSON);\n        Channel(const nonstd::string_view & rawJSON);\n        //Channel(const json::Values values);\n        ~Channel();\n        \n        enum ChannelType {\n            CHANNEL_TYPE_NONE = -1,\n            SERVER_TEXT       = 0,\n            DM                = 1,\n            SERVER_VOICE      = 2,\n            GROUP_DM          = 3,\n            SERVER_CATEGORY   = 4,\n            GUILD_NEWS        = 5,\n            GUILD_STORE       = 6,\n            GUILD_STAGE_VOICE = 13\n        } type = CHANNEL_TYPE_NONE;\n        Snowflake<Server>      serverID;             //optional,                  used in server       channels\n        int                    position = 0;         //optional,                  used in server       channels\n        std::vector<Overwrite> permissionOverwrites; //optional,                  used in server       channels\n        std::string            name;                 //optional,              not used in           DM channels\n        std::string            topic;                //optional and nullable,     used in server  text channels\n        bool                   isNSFW = false;       //optional,                  used in server       channels\n        Snowflake<Message>     lastMessageID;        //optional,                  used in         text channels\n        int                    bitrate = 0;          //optional,                  used in        voice channels\n        int                    userLimit = 0;        //optional,                  used in        voice channels\n        std::vector<User>      recipients;           //optional,                  used in all       DM channels\n        std::string            icon;                 //optional and nullable,     used in group     DM channels\n        Snowflake<User>        ownerID;              //optional,                  used in group     DM channels\n        //Snowflake<>          applicationID;        //??????????????????????     used in group     DM channels\n        Snowflake<Channel>     parentID;             //optional and nullable,     used in server       channels\n        std::string            lastPinTimestamp;     //optional,                  used in         text channels\n\n        JSONStructStart\n            std::make_tuple(\n                json::pair                           (&Channel::ID                   , "id"                   , json::REQUIRIED_FIELD        ),\n                json::pair<json::EnumTypeHelper     >(&Channel::type                 , "type"                 , json::REQUIRIED_FIELD        ),\n                json::pair                           (&Channel::serverID             , "guild_id"             , json::OPTIONAL_FIELD         ),\n                json::pair                           (&Channel::position             , "position"             , json::OPTIONAL_FIELD         ),\n                json::pair<json::ContainerTypeHelper>(&Channel::permissionOverwrites , "permission_overwrites", json::OPTIONAL_FIELD         ),\n                json::pair                           (&Channel::name                 , "name"                 , json::OPTIONAL_FIELD         ),\n                json::pair                           (&Channel::topic                , "topic"                , json::OPTIONAL_NULLABLE_FIELD),\n                json::pair                           (&Channel::isNSFW               , "nsfw"                 , json::OPTIONAL_FIELD         ),\n                json::pair                           (&Channel::lastMessageID        , "last_message_id"      , json::OPTIONAL_NULLABLE_FIELD),\n                json::pair                           (&Channel::bitrate              , "bitrate"              , json::OPTIONAL_FIELD         ),\n                json::pair                           (&Channel::userLimit            , "user_limit"           , json::OPTIONAL_FIELD         ),\n                json::pair<json::ContainerTypeHelper>(&Channel::recipients           , "recipients"           , json::OPTIONAL_FIELD         ),\n                json::pair                           (&Channel::icon                 , "icon"                 , json::OPTIONAL_NULLABLE_FIELD),\n                json::pair                           (&Channel::ownerID              , "owner_id"             , json::OPTIONAL_FIELD         ),\n                json::pair                           (&Channel::parentID             , "parent_id"            , json::OPTIONAL_NULLABLE_FIELD),\n                json::pair                           (&Channel::lastPinTimestamp     , "last_pin_timestamp"   , json::OPTIONAL_FIELD         )\n            );\n        JSONStructEnd\n    };\n\n    template<>\n    struct GetDefault<Channel::ChannelType> {\n        static inline const Channel::ChannelType get() {\n            return Channel::ChannelType::CHANNEL_TYPE_NONE;\n        }\n    };\n}\n')),Object(s.b)("hr",null),Object(s.b)("p",null,"Updated on  8 August 2021 at 21:14:25 UTC"))}p.isMDXComponent=!0},383:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return O}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),b=r,O=d["".concat(i,".").concat(b)]||d[b]||u[b]||s;return t?a.a.createElement(O,l(l({ref:n},c),{},{components:t})):a.a.createElement(O,l({ref:n},c))}));function O(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=b;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);