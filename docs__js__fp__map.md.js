(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[54],{Tps0:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),r=a("dEAq"),c=a("H1Ra"),i=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"map"},l.a.createElement(r["AnchorLink"],{to:"#map","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"map"),l.a.createElement("h2",{id:"\u57fa\u7840"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7528\u6cd5",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"array.map(function(currentValue[, index[, arr]])[, thisValue])")))),l.a.createElement("li",null,"\u529f\u80fd",l.a.createElement("ul",null,l.a.createElement("li",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u6570\u7ec4\uff0c\u5176\u7ed3\u679c\u662f\u8be5\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u90fd\u8c03\u7528\u4e00\u6b21\u63d0\u4f9b\u7684\u51fd\u6570\u540e\u7684\u8fd4\u56de\u503c"))),l.a.createElement("li",null,"\u8fd4\u56de\u503c",l.a.createElement("ul",null,l.a.createElement("li",null,"\u4e00\u4e2a\u7531\u539f\u6570\u7ec4\u6bcf\u4e2a\u5143\u7d20\u6267\u884c\u56de\u8c03\u51fd\u6570\u7684\u7ed3\u679c\u7ec4\u6210\u7684\u65b0\u6570\u7ec4")))),l.a.createElement("h2",{id:"\u6b65\u9aa4"},l.a.createElement(r["AnchorLink"],{to:"#\u6b65\u9aa4","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6b65\u9aa4"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u5224\u65ad\u8f93\u5165\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u7c7b\u578b\u662f\u5426\u662f\u51fd\u6570"),l.a.createElement("li",null,"\u83b7\u53d6\u9700\u8981\u5904\u7406\u7684\u6570\u7ec4\u5185\u5bb9"),l.a.createElement("li",null,"\u5bf9\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5143\u7d20\u8fdb\u884c\u5904\u7406\uff0c\u5e76\u8fd4\u56de\u7ed3\u679c\uff08\u6ce8\u610f\u6539\u53d8 this \u6307\u5411\uff09")),l.a.createElement("h2",{id:"\u5b9e\u73b0"},l.a.createElement(r["AnchorLink"],{to:"#\u5b9e\u73b0","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0"),l.a.createElement(c["a"],{code:"Array.prototype.myMap = function(fn) {\n  // \u5224\u65ad\u8f93\u5165\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4e0d\u662f\u51fd\u6570\n  if (typeof fn !== 'function') {\n    throw new TypeError(fn + ' is not a function')\n  }\n  \n  // \u83b7\u53d6\u9700\u8981\u5904\u7406\u7684\u6570\u7ec4\u5185\u5bb9\n  const arr = this;\n  const len = arr.length;\n  // \u65b0\u5efa\u4e00\u4e2a\u7a7a\u6570\u7ec4\u7528\u4e8e\u88c5\u8f7d\u65b0\u7684\u5185\u5bb9\n  const temp = new Array(len);\n  \n  // \u5bf9\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u503c\u8fdb\u884c\u5904\u7406\n  for (let i = 0; i < len; i++) {\n    // \u83b7\u53d6\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u6539\u53d8this\u6307\u5411\n    let result = fn.call(arguments[1], arr[i], i, arr);\n    temp[i] = result;\n  }\n  \n  // \u8fd4\u56de\u65b0\u7684\u7ed3\u679c\n  returm temp;\n}",lang:"js"})))}));n["default"]=e=>{var n=l.a.useContext(r["context"]),a=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:a})}}}]);