(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{"0Tbp":function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),l=n.n(t),c=n("dEAq"),r=n("H1Ra"),i=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u5f02\u6b65\u65b9\u6848"},l.a.createElement(c["AnchorLink"],{to:"#\u5f02\u6b65\u65b9\u6848","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5f02\u6b65\u65b9\u6848"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"Promise\u5bf9\u8c61\u662fJS\u7684\u5f02\u6b65\u64cd\u4f5c\u89e3\u51b3\u65b9\u6848\uff0c\u4e3a\u5f02\u6b65\u64cd\u4f5c\u63d0\u4f9b\u7edf\u4e00\u63a5\u53e3\u3002\u5b83\u8d77\u5230\u4ee3\u7406\u4f5c\u7528(proxy)\uff0c\u5145\u5f53\u5f02\u6b65\u64cd\u4f5c\u4e0e\u56de\u8c03\u51fd\u6570\u4e4b\u95f4\u7684\u4e2d\u4ecb\uff0c\u4f7f\u5f97\u5f02\u6b65\u64cd\u4f5c\u5177\u5907\u540c\u6b65\u64cd\u4f5c\u7684\u63a5\u53e3\u3002Promise\u53ef\u4ee5\u8ba9\u5f02\u6b65\u64cd\u4f5c\u5199\u8d77\u6765\uff0c\u5c31\u50cf\u5728\u5199\u540c\u6b65\u64cd\u4f5c\u7684\u6d41\u7a0b\uff0c\u800c\u4e0d\u5fc5\u4e00\u5c42\u5c42\u5730\u5d4c\u5957\u56de\u8c03\u51fd\u6570\u3002"),l.a.createElement("p",null,"Promise\u89e3\u51b3\u4e86callback\u56de\u8c03\u5730\u72f1\u7684\u95ee\u9898\uff0casync\u3001await\u662f\u5f02\u6b65\u7684\u7ec8\u7ea7\u89e3\u51b3\u65b9\u6848\u3002")),l.a.createElement("h2",{id:"\u56de\u8c03\u51fd\u6570-callback"},l.a.createElement(c["AnchorLink"],{to:"#\u56de\u8c03\u51fd\u6570-callback","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u56de\u8c03\u51fd\u6570 callback"),l.a.createElement(r["a"],{code:"setTimeout(() => {\n  // callback \u51fd\u6570\u4f53\n}, 1000)",lang:"js"}),l.a.createElement("p",null,l.a.createElement("code",null,"\u7f3a\u70b9\uff1a"),"\u56de\u8c03\u5730\u72f1\uff0c\u4e0d\u7528try catch\u6355\u83b7\u9519\u8bef\uff0c\u4e0d\u80fdreturn"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u56de\u8c03\u5730\u72f1\u7684\u6839\u672c\u95ee\u9898\u5728\u4e8e\uff1a",l.a.createElement("ul",null,l.a.createElement("li",null,"\u7f3a\u4e4f\u987a\u5e8f\u6027\uff1a\u56de\u8c03\u5730\u72f1\u5bfc\u81f4\u7684\u8c03\u8bd5\u56f0\u96be\uff0c\u548c\u5927\u8111\u7684\u601d\u7ef4\u65b9\u5f0f\u4e0d\u7b26\u5408"),l.a.createElement("li",null,"\u5d4c\u5957\u51fd\u6570\u5b58\u5728\u8026\u5408\u6027\uff0c\u4e00\u65e6\u6709\u6240\u6539\u52a8\uff0c\u5c31\u4f1a\u7275\u4e00\u53d1\u800c\u52a8\u5168\u8eab"),l.a.createElement("li",null,"\u5d4c\u5957\u51fd\u6570\u8fc7\u591a\u7684\u8bdd\uff0c\u5f88\u96be\u5904\u7406\u9519\u8bef")))),l.a.createElement(r["a"],{code:'ajax("xxx1",()=>{\n    //callback\u51fd\u6570\u4f53\n    ajax("xxx2",()=>{\n        //callback\u51fd\u6570\u4f53\n        ajax("xxx3",()=>{\n            //call\u51fd\u6570\u4f53\n        })\n    })\n})',lang:"js"}),l.a.createElement("p",null,l.a.createElement("code",null,"\u4f18\u70b9\uff1a"),"\u89e3\u51b3\u4e86\u540c\u6b65\u7684\u95ee\u9898---\u53ea\u8981\u6709\u4e00\u4e2a\u4efb\u52a1\u8017\u65f6\u5f88\u957f\uff0c\u540e\u9762\u7684\u4efb\u52a1\u90fd\u5fc5\u987b\u6392\u961f\u7b49\u7740\uff0c\u4f1a\u62d6\u5ef6\u6574\u4e2a\u7a0b\u5e8f\u7684\u6267\u884c"),l.a.createElement("h2",{id:"promise"},l.a.createElement(c["AnchorLink"],{to:"#promise","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Promise"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"Promise\u5c31\u662f\u4e3a\u4e86\u89e3\u51b3callback\u7684\u95ee\u9898\u800c\u4ea7\u751f\u7684\u3002Promise\u5b9e\u73b0\u4e86\u94fe\u5f0f\u8c03\u7528\uff0c\u4e5f\u5c31\u662f\u8bf4\u6bcf\u6b21then\u540e\u8fd4\u56de\u7684\u90fd\u662f\u4e00\u4e2a\u5168\u65b0\u7684Promise\uff0c\u5982\u679c\u6211\u4eec\u5728then\u7684return\uff0creturn\u7684\u7ed3\u679c\u4f1a\u88abPromise.resolve()\u5305\u88c5")),l.a.createElement("p",null,l.a.createElement("code",null,"\u4f18\u70b9\uff1a"),"\u89e3\u51b3\u4e86\u56de\u8c03\u5730\u72f1\u7684\u95ee\u9898"),l.a.createElement(r["a"],{code:"ajax('xxx1').then(res=>{\n    //\u64cd\u4f5c\n    return ajax('xxx2')\n}).then(res=>{\n    //\u64cd\u4f5c\n    return ajax('xxx3')\n}).then(res=>{\n    //\u64cd\u4f5c\n})",lang:"unknown"}),l.a.createElement("p",null,l.a.createElement("code",null,"\u7f3a\u70b9\uff1a"),"\u65e0\u6cd5\u53d6\u6d88Promise\uff0c\u9519\u8bef\u9700\u8981\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u6765\u6355\u83b7"),l.a.createElement("h2",{id:"generator"},l.a.createElement(c["AnchorLink"],{to:"#generator","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Generator"),l.a.createElement("p",null,l.a.createElement("code",null,"\u7279\u70b9\uff1a"),"\u53ef\u4ee5\u63a7\u5236\u51fd\u6570\u7684\u6267\u884c\uff0c\u53ef\u4ee5\u914d\u5408co\u51fd\u6570\u5e93\u4f7f\u7528"),l.a.createElement(r["a"],{code:"function *fetch(){\n    yield ajax('xxx1',()=>{})\n    yield ajax('xxx2',()=>{})\n    yield ajax('xxx3',()=>{})\n}\nlet it=fetch()\nlet result1=it.next()\nlet result2=it.next()\nlet result3=it.next()",lang:"js"}),l.a.createElement("h2",{id:"asyncawait"},l.a.createElement(c["AnchorLink"],{to:"#asyncawait","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Async/Await"),l.a.createElement("p",null,l.a.createElement("code",null,"\u4f18\u70b9\uff1a"),"\u4ee3\u7801\u6e05\u6670\uff0c\u4e0d\u7528\u50cfPromise\u5199\u4e00\u5806then\u94fe\uff0c\u5904\u7406\u4e86\u56de\u8c03\u5730\u72f1\u7684\u95ee\u9898"),l.a.createElement("p",null,l.a.createElement("code",null,"\u7f3a\u70b9\uff1a"),"await\u5c06\u5f02\u6b65\u4ee3\u7801\u6539\u9020\u6210\u540c\u6b65\u4ee3\u7801\uff0c\u5982\u679c\u591a\u4e2a\u5f02\u6b65\u64cd\u4f5c\u6ca1\u6709\u4f9d\u8d56\u6027\u800c\u4f7f\u7528await\u4f1a\u5bfc\u81f4\u6027\u80fd\u4e0a\u7684\u964d\u4f4e\u3002"),l.a.createElement(r["a"],{code:"async function test(){\n    //\u4ee5\u4e0b\u4ee3\u7801\u6ca1\u6709\u4f9d\u8d56\u6027\u7684\u8bdd\uff0c\u5b8c\u5168\u53ef\u4ee5\u4f7f\u7528Promise.all\u7684\u65b9\u5f0f\n    //\u5982\u679c\u6709\u4f9d\u8d56\u6027\u7684\u8bdd\uff0c\u5176\u5b9e\u5c31\u662f\u89e3\u51b3\u56de\u8c03\u5730\u72f1\u7684\u4f8b\u5b50\u4e86\n    await fetch('xxx1')\n    await fetch('xxx2')\n    await fetch('xxx3')\n}",lang:"unknown"}),l.a.createElement("h2",{id:"\u9762\u8bd5\u9898"},l.a.createElement(c["AnchorLink"],{to:"#\u9762\u8bd5\u9898","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u9762\u8bd5\u9898"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u624b\u5199\u4e00\u4e2aPromise"),l.a.createElement("li",null,"\u5b9e\u73b0Generator"),l.a.createElement("li",null,"\u5b9e\u73b0Async/Await"),l.a.createElement("li",null,"Promise\u6709\u6ca1\u6709\u89e3\u51b3\u5f02\u6b65\u7684\u95ee\u9898"))))}));a["default"]=e=>{var a=l.a.useContext(c["context"]),n=a.demos;return l.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:n})}}}]);