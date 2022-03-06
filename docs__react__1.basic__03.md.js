(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[93],{"Z/ga":function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),r=a.n(t),l=a("dEAq"),c=a("H1Ra"),i=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u8bf7\u8bf4\u4e00\u4e0b\u4f60\u5bf9-virtual-dom\u7684\u7406\u89e3"},r.a.createElement(l["AnchorLink"],{to:"#\u8bf7\u8bf4\u4e00\u4e0b\u4f60\u5bf9-virtual-dom\u7684\u7406\u89e3","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u8bf7\u8bf4\u4e00\u4e0b\u4f60\u5bf9 Virtual DOM\u7684\u7406\u89e3\uff1f"),r.a.createElement("h2",{id:"\u521b\u5efa\u9879\u76ee"},r.a.createElement(l["AnchorLink"],{to:"#\u521b\u5efa\u9879\u76ee","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u521b\u5efa\u9879\u76ee"),r.a.createElement("h3",{id:"\u5b89\u88c5"},r.a.createElement(l["AnchorLink"],{to:"#\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5"),r.a.createElement(c["a"],{code:"npm install @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/preset-env  @babel/preset-react  babel-loader html-webpack-plugin webpack webpack-cli  webpack-dev-server --save-dev",lang:"shell"}),r.a.createElement(c["a"],{code:"npm install react@experimental react-dom@experimental --save",lang:"shell"}),r.a.createElement("h3",{id:"webpackconfigjs"},r.a.createElement(l["AnchorLink"],{to:"#webpackconfigjs","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"webpack.config.js"),r.a.createElement(c["a"],{code:"const path = require('path');\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nmodule.exports = {\n  mode: 'development',\n  devtool: 'source-map',\n  entry: './src/index.js',\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: '[name].js',\n    publicPath: '/'\n  },\n  module: {\n    rules: [\n      {\n        test: /\\.js?$/,\n        use: {\n          loader: 'babel-loader',\n          options: {\n            presets: [[\"@babel/preset-env\"], '@babel/preset-react'],\n            plugins: [\n              ['@babel/plugin-proposal-decorators', { legacy: true }],\n              ['@babel/plugin-proposal-class-properties', { loose: true }],\n            ],\n          },\n        },\n        exclude:/node_modules/\n      }\n    ]\n  },\n  plugins: [\n    new HtmlWebpackPlugin({ template: './public/index.html' })\n  ]\n};",lang:"js"}),r.a.createElement("h3",{id:"packagejson"},r.a.createElement(l["AnchorLink"],{to:"#packagejson","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"package.json"),r.a.createElement(c["a"],{code:'{\n  "scripts": {\n   "start": "webpack serve"\n  },\n}',lang:"json"}),r.a.createElement("h2",{id:"\u5b9e\u73b0\u865a\u62dfdom"},r.a.createElement(l["AnchorLink"],{to:"#\u5b9e\u73b0\u865a\u62dfdom","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0\u865a\u62dfDOM"),r.a.createElement("h3",{id:"srcindexjs"},r.a.createElement(l["AnchorLink"],{to:"#srcindexjs","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"src\\index.js"),r.a.createElement(c["a"],{code:'import React from \'./react\';\nlet virtualDOM = (\n  <div id="A1" key="A1">\n    <div id="B1" key="B1">B1</div>\n    <div id="B2" key="B2">B2</div>\n  </div>\n)\nconsole.log(virtualDOM);',lang:"js"}),r.a.createElement("h3",{id:"srcreactjs"},r.a.createElement(l["AnchorLink"],{to:"#srcreactjs","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"src\\react.js"),r.a.createElement(c["a"],{code:"import { React } from 'react'\n\nconst React = {\n  createElement,\n}\n\nexport default React;",lang:"js"}),r.a.createElement("h3",{id:"srcreactsymbolsjs"},r.a.createElement(l["AnchorLink"],{to:"#srcreactsymbolsjs","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"src\\ReactSymbols.js"),r.a.createElement(c["a"],{code:"const symbolFor = Symbol.for;\nexport let  REACT_ELEMENT_TYPE = symbolFor('react.element');",lang:"js"}),r.a.createElement("h3",{id:"srcreactelementjs"},r.a.createElement(l["AnchorLink"],{to:"#srcreactelementjs","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"src\\ReactElement.js"),r.a.createElement(c["a"],{code:"import { REACT_ELEMENT_TYPE } from './ReactSymbols';\nconst RESERVED_PROPS = {\n    key: true,\n    ref: true,\n    _store: true,\n    __self: true,\n    __source: true,\n};\nexport function createElement(type, config, children) {\n    const props = {};\n    let key = null;\n    if (config != null) {\n        key = config.key;\n    }\n    for (let propName in config) {\n        if (!RESERVED_PROPS.hasOwnProperty(propName)) {\n            props[propName] = config[propName];\n        }\n    }\n    const childrenLength = arguments.length - 2;\n    if (childrenLength === 1) {\n      props.children = children;\n    } else if (childrenLength > 1) {\n      const childArray = Array(childrenLength);\n      for (let i = 0; i < childrenLength; i++) {\n        childArray[i] = arguments[i + 2];\n      }\n      props.children = childArray;\n    }\n\n    const element = {\n        $$typeof: REACT_ELEMENT_TYPE,\n        type,\n        key,\n        props\n    };\n    return element;\n}",lang:"js"}),r.a.createElement("h2",{id:"\u4f18\u7f3a\u70b9"},r.a.createElement(l["AnchorLink"],{to:"#\u4f18\u7f3a\u70b9","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4f18\u7f3a\u70b9"),r.a.createElement("h3",{id:"\u4f18\u70b9"},r.a.createElement(l["AnchorLink"],{to:"#\u4f18\u70b9","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4f18\u70b9"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5904\u7406\u4e86\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u907f\u514d\u7528\u6237\u64cd\u4f5c\u771f\u5b9eDOM\uff0c\u90a3\u4e48\u53c8\u9ebb\u70e6\u53c8\u5bb9\u6613\u51fa\u9519"),r.a.createElement("li",null,"\u5185\u5bb9\u7ecf\u8fc7\u4e86XSS\u5904\u7406\uff0c\u53ef\u4ee5\u9632\u8303XSS\u653b\u51fb"),r.a.createElement("li",null,"\u5bb9\u6613\u5b9e\u73b0\u8de8\u5e73\u53f0\u5f00\u53d1Android\u3001iOS\u3001VR\u5e94\u7528"),r.a.createElement("li",null,"\u66f4\u65b0\u7684\u65f6\u5019\u53ef\u4ee5\u5b9e\u73b0\u5dee\u5f02\u5316\u66f4\u65b0\uff0c\u51cf\u5c11\u66f4\u65b0DOM\u7684\u64cd\u4f5c")),r.a.createElement("h3",{id:"\u7f3a\u70b9"},r.a.createElement(l["AnchorLink"],{to:"#\u7f3a\u70b9","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u7f3a\u70b9"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u865a\u62dfDOM\u9700\u8981\u6d88\u8017\u989d\u5916\u7684\u5185\u5b58"),r.a.createElement("li",null,"\u9996\u6b21\u6e32\u67d3\u5176\u5b9e\u5e76\u4e0d\u4e00\u5b9a\u4f1a\u66f4\u5feb"))))}));n["default"]=e=>{var n=r.a.useContext(l["context"]),a=n.demos;return r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(i,{demos:a})}}}]);