(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),s=(n(0),n(383)),i={title:"sleepy_discord/zlib_compression.cpp"},a={unversionedId:"reference/Files/zlib__compression_8cpp",id:"reference/Files/zlib__compression_8cpp",isDocsHomePage:!1,title:"sleepy_discord/zlib_compression.cpp",description:"Source code",source:"@site/docs/reference/Files/zlib__compression_8cpp.md",slug:"/reference/Files/zlib__compression_8cpp",permalink:"/sleepy-discord/docs/reference/Files/zlib__compression_8cpp",version:"current",sidebar:"Reference",previous:{title:"include/sleepy_discord/websocketpp_websocket.h",permalink:"/sleepy-discord/docs/reference/Files/websocketpp__websocket_8h"},next:{title:"include/sleepy_discord/zlib_compression.h",permalink:"/sleepy-discord/docs/reference/Files/zlib__compression_8h"}},c=[{value:"Source code",id:"source-code",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"source-code"},"Source code"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-cpp"},'#if defined(EXISTENT_ZLIB) || defined(EXISTENT_ZLIB_NG)\n#include "zlib_compression.h"\n\nnamespace SleepyDiscord {\n    ZLibCompression::ZLibCompression() {\n        stream = ZLib::Stream{};\n        memset(&stream, 0, sizeof(stream));\n        statusCode = ZLib::inflateInitStream(&stream);\n        if (statusCode != Z_OK) {\n            ZLib::inflateEndStream(&stream);\n        }\n        if (output.empty()) //since are using back(), we need at least one buffer in the output\n            output.emplace_back(); //make a new output buffer\n    }\n\n    void ZLibCompression::uncompress(const std::string& compressed) {\n        std::lock_guard<std::mutex> lock(mutex);\n\n        stream.next_in = (ZLib::ConstByte*)(compressed.c_str());\n        stream.avail_in = static_cast<uint32_t>(compressed.length());\n\n        statusCode = Z_BUF_ERROR;\n        do {\n            Output::Buffer& buffer = output.back();\n            Output::Data& data = buffer.first;\n            std::size_t& size = buffer.second;\n\n            stream.next_out = reinterpret_cast<ZLib::Btye*>(data.data() + size);\n            stream.avail_out = static_cast<uint32_t>(data.size() - size);\n\n            statusCode = ZLib::inflateStream(&stream, Z_SYNC_FLUSH);\n\n            auto oldSize = size;\n            size = data.size() - stream.avail_out;\n            auto deltaSize = size - oldSize;\n\n            if (statusCode == Z_STREAM_END) {\n                statusCode = ZLib::inflateResetStream(&stream);\n            }\n            else if (deltaSize == 0) { //if did anything\n                if (stream.avail_out == 0)\n                    output.emplace_back(); //needs more memory\n                else //notthing left to do for now\n                    break;\n            }\n        } while (statusCode == Z_OK || statusCode == Z_BUF_ERROR);\n    }\n\n    void ZLibCompression::getOutput(std::string& uncompressedOut) {\n        std::lock_guard<std::mutex> lock(mutex);\n        if (output.empty())\n            return;\n        std::size_t totalSize = 0;\n        {\n            const Output::Buffer& lastBuffer = output.back();\n            const auto lastBufferSize = lastBuffer.second;\n            totalSize += lastBufferSize;\n            totalSize += (output.size() - 1) * Output::chunkSize; //add size of full chucks\n        }\n\n        uncompressedOut.reserve(totalSize); //allocate memory for string\n        for (Output::Buffer& buffer : output) {\n            Output::Data& data = buffer.first;\n            const std::size_t size = buffer.second;\n\n            uncompressedOut.append(data.data(), size);\n        }\n\n        //reset output for next getOutput\n        //since as long as we are connected to Discord, Discord will send us at least a\n        //heartbeat ack. So, it might be better to keep the first buffer allocated in memory\n        //to avoid doing another memory allocation.\n        output.resize(1);\n        output.back().second = 0;\n    }\n}\n#endif\n')),Object(s.b)("hr",null),Object(s.b)("p",null,"Updated on  8 August 2021 at 21:14:25 UTC"))}p.isMDXComponent=!0},383:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,m=l["".concat(i,".").concat(f)]||l[f]||d[f]||s;return n?o.a.createElement(m,a(a({ref:t},u),{},{components:n})):o.a.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);