(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[136],{SRrc:function(e,n,a){"use strict";a.r(n);var l=a("q1tI"),t=a.n(l),r=a("dEAq"),s=a("H1Ra"),c=t.a.memo((e=>{e.demos;return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u5982\u4f55\u5bf9bundle\u4f53\u79ef\u8fdb\u884c\u76d1\u63a7\u548c\u5206\u6790"},t.a.createElement(r["AnchorLink"],{to:"#\u5982\u4f55\u5bf9bundle\u4f53\u79ef\u8fdb\u884c\u76d1\u63a7\u548c\u5206\u6790","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4f55\u5bf9bundle\u4f53\u79ef\u8fdb\u884c\u76d1\u63a7\u548c\u5206\u6790\uff1f"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u662f\u4e00\u4e2awebpack\u7684\u63d2\u4ef6\uff0c\u9700\u8981\u914d\u5408webpack\u548cwebpack-cli\u4e00\u8d77\u4f7f\u7528\u3002\u8fd9\u4e2a\u63d2\u4ef6\u7684\u529f\u80fd\u662f\u751f\u6210\u4ee3\u7801\u5206\u6790\u62a5\u544a\uff0c\u5e2e\u52a9\u63d0\u5347\u4ee3\u7801\u8d28\u91cf\u548c\u7f51\u7ad9\u6027\u80fd")),t.a.createElement("h2",{id:"1-\u5b89\u88c5"},t.a.createElement(r["AnchorLink"],{to:"#1-\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"1 \u5b89\u88c5"),t.a.createElement(s["a"],{code:"cnpm i webpack-bundle-analyzer -D\nconst {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')\nmodule.exports={\n  plugins: [\n    new BundleAnalyzerPlugin()  // \u4f7f\u7528\u9ed8\u8ba4\u914d\u7f6e\n    // \u9ed8\u8ba4\u914d\u7f6e\u7684\u5177\u4f53\u914d\u7f6e\u9879\n    // new BundleAnalyzerPlugin({\n    //   analyzerMode: 'server',\n    //   analyzerHost: '127.0.0.1',\n    //   analyzerPort: '8888',\n    //   reportFilename: 'report.html',\n    //   defaultSizes: 'parsed',\n    //   openAnalyzer: true,\n    //   generateStatsFile: false,\n    //   statsFilename: 'stats.json',\n    //   statsOptions: null,\n    //   excludeAssets: null,\n    //   logLevel: info\n    // })\n  ]\n}\n{\n \"scripts\": {\n    \"dev\": \"webpack --config webpack.dev.js --progress\"\n  }\n}",lang:"js"}),t.a.createElement("h2",{id:"2-\u5148\u751f\u6210\u6587\u4ef6\u518d\u5206\u6790"},t.a.createElement(r["AnchorLink"],{to:"#2-\u5148\u751f\u6210\u6587\u4ef6\u518d\u5206\u6790","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"2 \u5148\u751f\u6210\u6587\u4ef6\u518d\u5206\u6790"),t.a.createElement("p",null,"webpack.config.js"),t.a.createElement(s["a"],{code:'const {BundleAnalyzerPlugin} = require(\'webpack-bundle-analyzer\')\nmodule.exports={\n  plugins: [\n    new BundleAnalyzerPlugin({\n      analyzerMode: \'disabled\', // \u4e0d\u542f\u52a8\u5c55\u793a\u6253\u5305\u62a5\u544a\u7684http\u670d\u52a1\u5668\n      generateStatsFile: true, // \u662f\u5426\u751f\u6210stats.json\u6587\u4ef6\n    }),\n  ]\n}\n{\n "scripts": {\n    "generateAnalyzFile": "webpack --profile --json > stats.json", // \u751f\u6210\u5206\u6790\u6587\u4ef6\n    "analyz": "webpack-bundle-analyzer --port 8888 ./dist/stats.json" // \u542f\u52a8\u5c55\u793a\u6253\u5305\u62a5\u544a\u7684http\u670d\u52a1\u5668\n  }\n}\nnpm run generateAnalyzFile\nnpm run analyz',lang:"js"})))}));n["default"]=e=>{var n=t.a.useContext(r["context"]),a=n.demos;return t.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),t.a.createElement(c,{demos:a})}}}]);