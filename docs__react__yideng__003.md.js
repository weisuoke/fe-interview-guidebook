(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[106],{lben:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),r=t("dEAq"),u=n.a.memo((e=>{e.demos;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"redux-saga-\u548c-mobx-\u7684\u6bd4\u8f83"},n.a.createElement(r["AnchorLink"],{to:"#redux-saga-\u548c-mobx-\u7684\u6bd4\u8f83","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"redux-saga \u548c mobx \u7684\u6bd4\u8f83"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u4ec0\u4e48\u662f redux-sage \u548c mobx",n.a.createElement("ul",null,n.a.createElement("li",null,"redux-sage \u662f redux \u7684\u4e00\u4e2a\u5f02\u6b65\u5904\u7406\u7684\u4e2d\u95f4\u4ef6\u3002"),n.a.createElement("li",null,"mobx \u662f\u6570\u636e\u7ba1\u7406\u5e93\uff0c\u548c redux \u4e00\u6837\u3002"))),n.a.createElement("li",null,"\u8bbe\u8ba1\u601d\u60f3",n.a.createElement("ul",null,n.a.createElement("li",null,"redux-sage \u5c5e\u4e8e flux \u4f53\u7cfb\uff0c \u51fd\u6570\u5f0f\u7f16\u7a0b\u601d\u60f3\u3002"),n.a.createElement("li",null,"mobx \u4e0d\u5c5e\u4e8e flux \u4f53\u7cfb\uff0c\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u548c\u54cd\u5e94\u5f0f\u7f16\u7a0b\u3002"))),n.a.createElement("li",null,"\u4e3b\u8981\u7279\u70b9",n.a.createElement("ul",null,n.a.createElement("li",null,"redux-sage \u56e0\u4e3a\u662f\u4e2d\u95f4\u4ef6\uff0c\u66f4\u5173\u6ce8\u5f02\u6b65\u5904\u7406\u7684\uff0c\u901a\u8fc7 Generator \u51fd\u6570\u6765\u5c06\u5f02\u6b65\u53d8\u4e3a\u540c\u6b65\uff0c\u4f7f\u4ee3\u7801\u53ef\u8bfb\u6027\u9ad8\uff0c\u7ed3\u6784\u6e05\u6670\u3002action \u4e5f\u4e0d\u662f action creator \u800c\u662f pure action\uff0c"),n.a.createElement("li",null,"\u5728 Generator \u51fd\u6570\u4e2d\u901a\u8fc7 call \u6216\u8005 put \u65b9\u6cd5\u76f4\u63a5\u58f0\u660e\u5f0f\u8c03\u7528\uff0c\u5e76\u81ea\u5e26\u4e00\u4e9b\u65b9\u6cd5\uff0c\u5982 takeEvery\uff0ctakeLast\uff0crace\u7b49\uff0c\u63a7\u5236\u591a\u4e2a\u5f02\u6b65\u64cd\u4f5c\uff0c\u8ba9\u591a\u4e2a\u5f02\u6b65\u66f4\u7b80\u5355\u3002"),n.a.createElement("li",null,"mobx \u662f\u66f4\u7b80\u5355\u66f4\u65b9\u4fbf\u66f4\u7075\u6d3b\u7684\u5904\u7406\u6570\u636e\u3002 Store \u662f\u5305\u542b\u4e86 state \u548c action\u3002state \u5305\u88c5\u6210\u4e00\u4e2a\u53ef\u88ab\u89c2\u5bdf\u7684\u5bf9\u8c61\uff0c action \u53ef\u4ee5\u76f4\u63a5\u4fee\u6539 state\uff0c\u4e4b\u540e\u901a\u8fc7 Computed values \u5c06\u4f9d\u8d56 state \u7684\u8ba1\u7b97\u5c5e\u6027\u66f4\u65b0 \uff0c\u4e4b\u540e\u89e6\u53d1 Reactions \u54cd\u5e94\u4f9d\u8d56 state \u7684\u53d8\u66f4\uff0c\u8f93\u51fa\u76f8\u5e94\u7684\u526f\u4f5c\u7528 \uff0c\u4f46\u4e0d\u751f\u6210\u65b0\u7684 state\u3002"))),n.a.createElement("li",null,"\u6570\u636e\u53ef\u53d8\u6027",n.a.createElement("ul",null,n.a.createElement("li",null,"redux-sage \u5f3a\u8c03 state \u4e0d\u53ef\u53d8\uff0c\u4e0d\u80fd\u76f4\u63a5\u64cd\u4f5c state\uff0c\u901a\u8fc7 action \u548c reducer \u5728\u539f\u6765\u7684 state \u7684\u57fa\u7840\u4e0a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 state \u8fbe\u5230\u6539\u53d8 state \u7684\u76ee\u7684\u3002"),n.a.createElement("li",null,"mobx \u76f4\u63a5\u5728\u65b9\u6cd5\u4e2d\u66f4\u6539 state\uff0c\u540c\u65f6\u6240\u6709\u4f7f\u7528\u7684 state \u90fd\u53d1\u751f\u53d8\u5316\uff0c\u4e0d\u751f\u6210\u65b0\u7684 state\u3002"))),n.a.createElement("li",null,"\u5199\u6cd5\u96be\u6613\u5ea6",n.a.createElement("ul",null,n.a.createElement("li",null,"redux-sage \u6bd4 redux \u5728 action \u548c reducer \u4e0a\u8981\u7b80\u5355\u4e00\u4e9b\u3002\u9700\u8981\u7528 dispatch \u89e6\u53d1 state \u7684\u6539\u53d8\uff0c\u9700\u8981 mapStateToProps \u8ba2\u9605 state\u3002"),n.a.createElement("li",null,"mobx \u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u4e0d\u7528 action \u548c reducer\uff0c\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\u9700\u8981\u5728 action \u4e2d\u4fee\u6539 state\uff0c\u5e76\u4e14\u81ea\u52a8\u89e6\u53d1\u76f8\u5173\u4f9d\u8d56\u7684\u66f4\u65b0\u3002"))),n.a.createElement("li",null,"\u4f7f\u7528\u573a\u666f",n.a.createElement("ul",null,n.a.createElement("li",null,"redux-sage \u5f88\u597d\u7684\u89e3\u51b3\u4e86 redux \u5173\u4e8e\u5f02\u6b65\u5904\u7406\u65f6\u7684\u590d\u6742\u5ea6\u548c\u4ee3\u7801\u5197\u4f59\u7684\u95ee\u9898\uff0c\u6570\u636e\u6d41\u5411\u6bd4\u8f83\u597d\u8ffd\u8e2a\u3002\u4f46\u662f redux \u7684\u5b66\u4e60\u6210\u672c\u6bd4 \u8f83\u9ad8\uff0c\u4ee3\u7801\u6bd4\u8f83\u5197\u4f59\uff0c\u4e0d\u662f\u7279\u522b\u9700\u8981\u72b6\u6001\u7ba1\u7406\uff0c\u6700\u597d\u7528\u522b\u7684\u65b9\u5f0f\u4ee3\u66ff\u3002"),n.a.createElement("li",null,"mobx \u5b66\u4e60\u6210\u672c\u4f4e\uff0c\u80fd\u5feb\u901f\u4e0a\u624b\uff0c\u4ee3\u7801\u6bd4\u8f83\u7b80\u6d01\u3002\u4f46\u662f\u53ef\u80fd\u56e0\u4e3a\u4ee3\u7801\u7f16\u5199\u7684\u539f\u56e0\u548c\u6570\u636e\u66f4\u65b0\u65f6\u76f8\u5bf9\u9ed1\u76d2\uff0c\u5bfc\u81f4\u6570\u636e\u6d41\u5411\u4e0d\u5229\u4e8e\u8ffd\u8e2a\u3002"))))))}));a["default"]=e=>{var a=n.a.useContext(r["context"]),t=a.demos;return n.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(u,{demos:t})}}}]);