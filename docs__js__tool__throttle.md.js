(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[71],{PGrr:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("dEAq"),i=n("H1Ra"),o=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u8282\u6d41\u51fd\u6570"},l.a.createElement(r["AnchorLink"],{to:"#\u8282\u6d41\u51fd\u6570","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8282\u6d41\u51fd\u6570"),l.a.createElement("h1",{id:"throttle\u6a21\u62df\u5b9e\u73b0"},l.a.createElement(r["AnchorLink"],{to:"#throttle\u6a21\u62df\u5b9e\u73b0","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"throttle\u6a21\u62df\u5b9e\u73b0"),l.a.createElement("h2",{id:"\u524d\u8a00"},l.a.createElement(r["AnchorLink"],{to:"#\u524d\u8a00","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement(r["Link"],{to:"https://www.weisuoke.com/fe2020/js-implement/throttle.html#%E5%89%8D%E8%A8%80"}),"\u524d\u8a00"),l.a.createElement("p",null,"\u5728",l.a.createElement(r["Link"],{to:"https://github.com/mqyqingfeng/Blog/issues/22"},"\u300aJavaScript\u4e13\u9898\u4e4b\u8ddf\u7740underscore\u5b66\u9632\u6296\u300b"),"\u4e2d\uff0c\u6211\u4eec\u4e86\u89e3\u4e86\u4e3a\u4ec0\u4e48\u8981\u9650\u5236\u4e8b\u4ef6\u7684\u9891\u7e41\u89e6\u53d1\uff0c\u4ee5\u53ca\u5982\u4f55\u505a\u9650\u5236\uff1a"),l.a.createElement("ol",null,l.a.createElement("li",null,"debounce \u9632\u6296"),l.a.createElement("li",null,"throttle \u8282\u6d41")),l.a.createElement("p",null,"\u4eca\u5929\u91cd\u70b9\u8bb2\u8bb2\u8282\u6d41\u7684\u5b9e\u73b0\u3002"),l.a.createElement("h2",{id:"\u8282\u6d41"},l.a.createElement(r["AnchorLink"],{to:"#\u8282\u6d41","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u8282\u6d41"),l.a.createElement("p",null,"\u8282\u6d41\u7684\u539f\u7406\u5f88\u7b80\u5355\uff1a"),l.a.createElement("p",null,"\u5982\u679c\u4f60\u6301\u7eed\u89e6\u53d1\u4e8b\u4ef6\uff0c\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\uff0c\u53ea\u6267\u884c\u4e00\u6b21\u4e8b\u4ef6\u3002"),l.a.createElement("p",null,"\u6839\u636e\u9996\u6b21\u662f\u5426\u6267\u884c\u4ee5\u53ca\u7ed3\u675f\u540e\u662f\u5426\u6267\u884c\uff0c\u6548\u679c\u6709\u6240\u4e0d\u540c\uff0c\u5b9e\u73b0\u7684\u65b9\u5f0f\u4e5f\u6709\u6240\u4e0d\u540c\u3002 \u6211\u4eec\u7528 leading \u4ee3\u8868\u9996\u6b21\u662f\u5426\u6267\u884c\uff0ctrailing \u4ee3\u8868\u7ed3\u675f\u540e\u662f\u5426\u518d\u6267\u884c\u4e00\u6b21\u3002"),l.a.createElement("p",null,"\u5173\u4e8e\u8282\u6d41\u7684\u5b9e\u73b0\uff0c\u6709\u4e24\u79cd\u4e3b\u6d41\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u4e00\u79cd\u662f\u4f7f\u7528\u65f6\u95f4\u6233\uff0c\u4e00\u79cd\u662f\u8bbe\u7f6e\u5b9a\u65f6\u5668\u3002"),l.a.createElement("h2",{id:"\u4f7f\u7528\u65f6\u95f4\u6233"},l.a.createElement(r["AnchorLink"],{to:"#\u4f7f\u7528\u65f6\u95f4\u6233","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528\u65f6\u95f4\u6233"),l.a.createElement("p",null,"\u8ba9\u6211\u4eec\u6765\u770b\u7b2c\u4e00\u79cd\u65b9\u6cd5\uff1a\u4f7f\u7528\u65f6\u95f4\u6233\uff0c\u5f53\u89e6\u53d1\u4e8b\u4ef6\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53d6\u51fa\u5f53\u524d\u7684\u65f6\u95f4\u6233\uff0c\u7136\u540e\u51cf\u53bb\u4e4b\u524d\u7684\u65f6\u95f4\u6233(\u6700\u4e00\u5f00\u59cb\u503c\u8bbe\u4e3a 0 )\uff0c\u5982\u679c\u5927\u4e8e\u8bbe\u7f6e\u7684\u65f6\u95f4\u5468\u671f\uff0c\u5c31\u6267\u884c\u51fd\u6570\uff0c\u7136\u540e\u66f4\u65b0\u65f6\u95f4\u6233\u4e3a\u5f53\u524d\u7684\u65f6\u95f4\u6233\uff0c\u5982\u679c\u5c0f\u4e8e\uff0c\u5c31\u4e0d\u6267\u884c\u3002"),l.a.createElement("p",null,"\u770b\u4e86\u8fd9\u4e2a\u8868\u8ff0\uff0c\u662f\u4e0d\u662f\u611f\u89c9\u5df2\u7ecf\u53ef\u4ee5\u5199\u51fa\u4ee3\u7801\u4e86\u2026\u2026 \u8ba9\u6211\u4eec\u6765\u5199\u7b2c\u4e00\u7248\u7684\u4ee3\u7801\uff1a"),l.a.createElement(i["a"],{code:"// \u7b2c\u4e00\u7248\nfunction throttle(func, wait) {\n    var context, args;\n    var previous = 0;\n\n    return function() {\n        var now = +new Date();\n        context = this;\n        args = arguments;\n        if (now - previous > wait) {\n            func.apply(context, args);\n            previous = now;\n        }\n    }\n}",lang:"javascript"}),l.a.createElement("p",null,"\u4f8b\u5b50\u4f9d\u7136\u662f\u7528\u8bb2 debounce \u4e2d\u7684\u4f8b\u5b50\uff0c\u5982\u679c\u4f60\u8981\u4f7f\u7528\uff1a"),l.a.createElement(i["a"],{code:"container.onmousemove = throttle(getUserAction, 1000);",lang:"text"}),l.a.createElement("p",null,"\u6548\u679c\u6f14\u793a\u5982\u4e0b\uff1a"),l.a.createElement("p",null,l.a.createElement(r["Link"],{to:"https://github.com/mqyqingfeng/Blog/raw/master/Images/throttle/throttle1.gif"},l.a.createElement("img",{src:"https://github.com/mqyqingfeng/Blog/raw/master/Images/throttle/throttle1.gif",alt:"\u4f7f\u7528\u65f6\u95f4\u6233"}))),l.a.createElement("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff1a\u5f53\u9f20\u6807\u79fb\u5165\u7684\u65f6\u5019\uff0c\u4e8b\u4ef6\u7acb\u523b\u6267\u884c\uff0c\u6bcf\u8fc7 1s \u4f1a\u6267\u884c\u4e00\u6b21\uff0c\u5982\u679c\u5728 4.2s \u505c\u6b62\u89e6\u53d1\uff0c\u4ee5\u540e\u4e0d\u4f1a\u518d\u6267\u884c\u4e8b\u4ef6\u3002"),l.a.createElement("h2",{id:"\u4f7f\u7528\u5b9a\u65f6\u5668"},l.a.createElement(r["AnchorLink"],{to:"#\u4f7f\u7528\u5b9a\u65f6\u5668","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528\u5b9a\u65f6\u5668"),l.a.createElement("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u8bb2\u8bb2\u7b2c\u4e8c\u79cd\u5b9e\u73b0\u65b9\u5f0f\uff0c\u4f7f\u7528\u5b9a\u65f6\u5668\u3002"),l.a.createElement("p",null,"\u5f53\u89e6\u53d1\u4e8b\u4ef6\u7684\u65f6\u5019\uff0c\u6211\u4eec\u8bbe\u7f6e\u4e00\u4e2a\u5b9a\u65f6\u5668\uff0c\u518d\u89e6\u53d1\u4e8b\u4ef6\u7684\u65f6\u5019\uff0c\u5982\u679c\u5b9a\u65f6\u5668\u5b58\u5728\uff0c\u5c31\u4e0d\u6267\u884c\uff0c\u76f4\u5230\u5b9a\u65f6\u5668\u6267\u884c\uff0c\u7136\u540e\u6267\u884c\u51fd\u6570\uff0c\u6e05\u7a7a\u5b9a\u65f6\u5668\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u8bbe\u7f6e\u4e0b\u4e2a\u5b9a\u65f6\u5668\u3002"),l.a.createElement(i["a"],{code:"// \u7b2c\u4e8c\u7248\nfunction throttle(func, wait) {\n    var timeout;\n    var previous = 0;\n\n    return function() {\n        context = this;\n        args = arguments;\n        if (!timeout) {\n            timeout = setTimeout(function(){\n                timeout = null;\n                func.apply(context, args)\n            }, wait)\n        }\n\n    }\n}",lang:"javascript"}),l.a.createElement("p",null,"\u4e3a\u4e86\u8ba9\u6548\u679c\u66f4\u52a0\u660e\u663e\uff0c\u6211\u4eec\u8bbe\u7f6e wait \u7684\u65f6\u95f4\u4e3a 3s\uff0c\u6548\u679c\u6f14\u793a\u5982\u4e0b\uff1a"),l.a.createElement("p",null,l.a.createElement(r["Link"],{to:"https://github.com/mqyqingfeng/Blog/raw/master/Images/throttle/throttle2.gif"},l.a.createElement("img",{src:"https://github.com/mqyqingfeng/Blog/raw/master/Images/throttle/throttle2.gif",alt:"\u4f7f\u7528\u5b9a\u65f6\u5668"}))),l.a.createElement("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff1a\u5f53\u9f20\u6807\u79fb\u5165\u7684\u65f6\u5019\uff0c\u4e8b\u4ef6\u4e0d\u4f1a\u7acb\u523b\u6267\u884c\uff0c\u6643\u4e86 3s \u540e\u7ec8\u4e8e\u6267\u884c\u4e86\u4e00\u6b21\uff0c\u6b64\u540e\u6bcf 3s \u6267\u884c\u4e00\u6b21\uff0c\u5f53\u6570\u5b57\u663e\u793a\u4e3a 3 \u7684\u65f6\u5019\uff0c\u7acb\u523b\u79fb\u51fa\u9f20\u6807\uff0c\u76f8\u5f53\u4e8e\u5927\u7ea6 9.2s \u7684\u65f6\u5019\u505c\u6b62\u89e6\u53d1\uff0c\u4f46\u662f\u4f9d\u7136\u4f1a\u5728\u7b2c 12s \u7684\u65f6\u5019\u6267\u884c\u4e00\u6b21\u4e8b\u4ef6\u3002"),l.a.createElement("p",null,"\u6240\u4ee5\u6bd4\u8f83\u4e24\u4e2a\u65b9\u6cd5\uff1a"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u7b2c\u4e00\u79cd\u4e8b\u4ef6\u4f1a\u7acb\u523b\u6267\u884c\uff0c\u7b2c\u4e8c\u79cd\u4e8b\u4ef6\u4f1a\u5728 n \u79d2\u540e\u7b2c\u4e00\u6b21\u6267\u884c"),l.a.createElement("li",null,"\u7b2c\u4e00\u79cd\u4e8b\u4ef6\u505c\u6b62\u89e6\u53d1\u540e\u6ca1\u6709\u529e\u6cd5\u518d\u6267\u884c\u4e8b\u4ef6\uff0c\u7b2c\u4e8c\u79cd\u4e8b\u4ef6\u505c\u6b62\u89e6\u53d1\u540e\u4f9d\u7136\u4f1a\u518d\u6267\u884c\u4e00\u6b21\u4e8b\u4ef6")),l.a.createElement("h2",{id:"\u53cc\u5251\u5408\u74a7"},l.a.createElement(r["AnchorLink"],{to:"#\u53cc\u5251\u5408\u74a7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53cc\u5251\u5408\u74a7"),l.a.createElement("p",null,"\u90a3\u6211\u4eec\u60f3\u8981\u4e00\u4e2a\u4ec0\u4e48\u6837\u7684\u5462\uff1f"),l.a.createElement("p",null,"\u6709\u4eba\u5c31\u8bf4\u4e86\uff1a\u6211\u60f3\u8981\u4e00\u4e2a\u6709\u5934\u6709\u5c3e\u7684\uff01\u5c31\u662f\u9f20\u6807\u79fb\u5165\u80fd\u7acb\u523b\u6267\u884c\uff0c\u505c\u6b62\u89e6\u53d1\u7684\u65f6\u5019\u8fd8\u80fd\u518d\u6267\u884c\u4e00\u6b21\uff01"),l.a.createElement("p",null,"\u6240\u4ee5\u6211\u4eec\u7efc\u5408\u4e24\u8005\u7684\u4f18\u52bf\uff0c\u7136\u540e\u53cc\u5251\u5408\u74a7\uff0c\u5199\u4e00\u7248\u4ee3\u7801\uff1a"),l.a.createElement(i["a"],{code:"// \u7b2c\u4e09\u7248\nfunction throttle(func, wait) {\n    var timeout, context, args, result;\n    var previous = 0;\n\n    var later = function() {\n        previous = +new Date();\n        timeout = null;\n        func.apply(context, args)\n    };\n\n    var throttled = function() {\n        var now = +new Date();\n        //\u4e0b\u6b21\u89e6\u53d1 func \u5269\u4f59\u7684\u65f6\u95f4\n        var remaining = wait - (now - previous);\n        context = this;\n        args = arguments;\n         // \u5982\u679c\u6ca1\u6709\u5269\u4f59\u7684\u65f6\u95f4\u4e86\u6216\u8005\u4f60\u6539\u4e86\u7cfb\u7edf\u65f6\u95f4\n        if (remaining <= 0 || remaining > wait) {\n            if (timeout) {\n                clearTimeout(timeout);\n                timeout = null;\n            }\n            previous = now;\n            func.apply(context, args);\n        } else if (!timeout) {\n            timeout = setTimeout(later, remaining);\n        }\n    };\n    return throttled;\n}",lang:"javascript"}),l.a.createElement("p",null,"\u6548\u679c\u6f14\u793a\u5982\u4e0b\uff1a"),l.a.createElement("p",null,l.a.createElement(r["Link"],{to:"https://github.com/mqyqingfeng/Blog/raw/master/Images/throttle/throttle3.gif"},l.a.createElement("img",{src:"https://github.com/mqyqingfeng/Blog/raw/master/Images/throttle/throttle3.gif",alt:"throttle3"}))),l.a.createElement("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff1a\u9f20\u6807\u79fb\u5165\uff0c\u4e8b\u4ef6\u7acb\u523b\u6267\u884c\uff0c\u6643\u4e86 3s\uff0c\u4e8b\u4ef6\u518d\u4e00\u6b21\u6267\u884c\uff0c\u5f53\u6570\u5b57\u53d8\u6210 3 \u7684\u65f6\u5019\uff0c\u4e5f\u5c31\u662f 6s \u540e\uff0c\u6211\u4eec\u7acb\u523b\u79fb\u51fa\u9f20\u6807\uff0c\u505c\u6b62\u89e6\u53d1\u4e8b\u4ef6\uff0c9s \u7684\u65f6\u5019\uff0c\u4f9d\u7136\u4f1a\u518d\u6267\u884c\u4e00\u6b21\u4e8b\u4ef6\u3002"),l.a.createElement("h2",{id:"\u4f18\u5316"},l.a.createElement(r["AnchorLink"],{to:"#\u4f18\u5316","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4f18\u5316"),l.a.createElement("p",null,"\u4f46\u662f\u6211\u6709\u65f6\u4e5f\u5e0c\u671b\u65e0\u5934\u6709\u5c3e\uff0c\u6216\u8005\u6709\u5934\u65e0\u5c3e\uff0c\u8fd9\u4e2a\u548b\u529e\uff1f"),l.a.createElement("p",null,"\u90a3\u6211\u4eec\u8bbe\u7f6e\u4e2a options \u4f5c\u4e3a\u7b2c\u4e09\u4e2a\u53c2\u6570\uff0c\u7136\u540e\u6839\u636e\u4f20\u7684\u503c\u5224\u65ad\u5230\u5e95\u54ea\u79cd\u6548\u679c\uff0c\u6211\u4eec\u7ea6\u5b9a:"),l.a.createElement("p",null,"leading\uff1afalse \u8868\u793a\u7981\u7528\u7b2c\u4e00\u6b21\u6267\u884c trailing: false \u8868\u793a\u7981\u7528\u505c\u6b62\u89e6\u53d1\u7684\u56de\u8c03"),l.a.createElement("p",null,"\u6211\u4eec\u6765\u6539\u4e00\u4e0b\u4ee3\u7801\uff1a"),l.a.createElement(i["a"],{code:"// \u7b2c\u56db\u7248\nfunction throttle(func, wait, options) {\n    var timeout, context, args, result;\n    var previous = 0;\n    if (!options) options = {};\n\n    var later = function() {\n        previous = options.leading === false ? 0 : new Date().getTime();\n        timeout = null;\n        func.apply(context, args);\n        if (!timeout) context = args = null;\n    };\n\n    var throttled = function() {\n        var now = new Date().getTime();\n        if (!previous && options.leading === false) previous = now;\n        var remaining = wait - (now - previous);\n        context = this;\n        args = arguments;\n        if (remaining <= 0 || remaining > wait) {\n            if (timeout) {\n                clearTimeout(timeout);\n                timeout = null;\n            }\n            previous = now;\n            func.apply(context, args);\n            if (!timeout) context = args = null;\n        } else if (!timeout && options.trailing !== false) {\n            timeout = setTimeout(later, remaining);\n        }\n    };\n    return throttled;\n}",lang:"javascript"}),l.a.createElement("h2",{id:"\u53d6\u6d88"},l.a.createElement(r["AnchorLink"],{to:"#\u53d6\u6d88","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53d6\u6d88"),l.a.createElement("p",null,"\u5728 debounce \u7684\u5b9e\u73b0\u4e2d\uff0c\u6211\u4eec\u52a0\u4e86\u4e00\u4e2a cancel \u65b9\u6cd5\uff0cthrottle \u6211\u4eec\u4e5f\u52a0\u4e2a cancel \u65b9\u6cd5\uff1a"),l.a.createElement(i["a"],{code:"// \u7b2c\u4e94\u7248 \u975e\u5b8c\u6574\u4ee3\u7801\uff0c\u5b8c\u6574\u4ee3\u7801\u8bf7\u67e5\u770b\u6700\u540e\u7684\u6f14\u793a\u4ee3\u7801\u94fe\u63a5\n...\nthrottled.cancel = function() {\n    clearTimeout(timeout);\n    previous = 0;\n    timeout = null;\n}\n...",lang:"javascript"}),l.a.createElement("h2",{id:"\u6ce8\u610f"},l.a.createElement(r["AnchorLink"],{to:"#\u6ce8\u610f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6ce8\u610f"),l.a.createElement("p",null,"\u6211\u4eec\u8981\u6ce8\u610f underscore \u7684\u5b9e\u73b0\u4e2d\u6709\u8fd9\u6837\u4e00\u4e2a\u95ee\u9898\uff1a"),l.a.createElement("p",null,"\u90a3\u5c31\u662f ",l.a.createElement("code",null,"leading\uff1afalse")," \u548c ",l.a.createElement("code",null,"trailing: false")," \u4e0d\u80fd\u540c\u65f6\u8bbe\u7f6e\u3002"),l.a.createElement("p",null,"\u5982\u679c\u540c\u65f6\u8bbe\u7f6e\u7684\u8bdd\uff0c\u6bd4\u5982\u5f53\u4f60\u5c06\u9f20\u6807\u79fb\u51fa\u7684\u65f6\u5019\uff0c\u56e0\u4e3a trailing \u8bbe\u7f6e\u4e3a false\uff0c\u505c\u6b62\u89e6\u53d1\u7684\u65f6\u5019\u4e0d\u4f1a\u8bbe\u7f6e\u5b9a\u65f6\u5668\uff0c\u6240\u4ee5\u53ea\u8981\u518d\u8fc7\u4e86\u8bbe\u7f6e\u7684\u65f6\u95f4\uff0c\u518d\u79fb\u5165\u7684\u8bdd\uff0c\u5c31\u4f1a\u7acb\u523b\u6267\u884c\uff0c\u5c31\u8fdd\u53cd\u4e86 leading: false\uff0cbug \u5c31\u51fa\u6765\u4e86\uff0c\u6240\u4ee5\uff0c\u8fd9\u4e2a throttle \u53ea\u6709\u4e09\u79cd\u7528\u6cd5\uff1a"),l.a.createElement(i["a"],{code:"container.onmousemove = throttle(getUserAction, 1000);\ncontainer.onmousemove = throttle(getUserAction, 1000, {\n    leading: false\n});\ncontainer.onmousemove = throttle(getUserAction, 1000, {\n    trailing: false\n});",lang:"javascript"}),l.a.createElement("p",null,"\u81f3\u6b64\u6211\u4eec\u5df2\u7ecf\u5b8c\u6574\u5b9e\u73b0\u4e86\u4e00\u4e2a underscore \u4e2d\u7684 throttle \u51fd\u6570\uff0c\u606d\u559c\uff0c\u6492\u82b1\uff01"),l.a.createElement("p",null,l.a.createElement(r["Link"],{to:"https://github.com/mqyqingfeng/Blog/issues/26"},"\u539f\u6587\u5730\u5740"))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:n})}}}]);