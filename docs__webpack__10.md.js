(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[137],{J39W:function(e,n,a){"use strict";a.r(n);var l=a("q1tI"),t=a.n(l),r=a("dEAq"),c=a("H1Ra"),o=a("dMo/"),i=t.a.memo((e=>{e.demos;return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u5982\u4f55\u63d0\u9ad8webpack\u7684\u6784\u5efa\u901f\u5ea6"},t.a.createElement(r["AnchorLink"],{to:"#\u5982\u4f55\u63d0\u9ad8webpack\u7684\u6784\u5efa\u901f\u5ea6","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4f55\u63d0\u9ad8webpack\u7684\u6784\u5efa\u901f\u5ea6?"),t.a.createElement("h2",{id:"1-\u8d39\u65f6\u5206\u6790"},t.a.createElement(r["AnchorLink"],{to:"#1-\u8d39\u65f6\u5206\u6790","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"1 \u8d39\u65f6\u5206\u6790"),t.a.createElement(c["a"],{code:"const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');\nconst smw = new SpeedMeasureWebpackPlugin();\nmodule.exports =smw.wrap({\n});",lang:"js"}),t.a.createElement("h2",{id:"2-\u7f29\u5c0f\u8303\u56f4"},t.a.createElement(r["AnchorLink"],{to:"#2-\u7f29\u5c0f\u8303\u56f4","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"2 \u7f29\u5c0f\u8303\u56f4"),t.a.createElement("h3",{id:"21-extensions"},t.a.createElement(r["AnchorLink"],{to:"#21-extensions","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"2.1 extensions"),t.a.createElement("p",null,"\u6307\u5b9aextension\u4e4b\u540e\u53ef\u4ee5\u4e0d\u7528\u5728",t.a.createElement("code",null,"require"),"\u6216\u662f",t.a.createElement("code",null,"import"),"\u7684\u65f6\u5019\u52a0\u6587\u4ef6\u6269\u5c55\u540d,\u4f1a\u4f9d\u6b21\u5c1d\u8bd5\u6dfb\u52a0\u6269\u5c55\u540d\u8fdb\u884c\u5339\u914d"),t.a.createElement(c["a"],{code:'resolve: {\n  extensions: [".js",".jsx",".json",".css"]\n},',lang:"js"}),t.a.createElement("h3",{id:"22-alias"},t.a.createElement(r["AnchorLink"],{to:"#22-alias","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"2.2 alias"),t.a.createElement("p",null,"\u914d\u7f6e\u522b\u540d\u53ef\u4ee5\u52a0\u5febwebpack\u67e5\u627e\u6a21\u5757\u7684\u901f\u5ea6"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u6bcf\u5f53\u5f15\u5165bootstrap\u6a21\u5757\u7684\u65f6\u5019\uff0c\u5b83\u4f1a\u76f4\u63a5\u5f15\u5165",t.a.createElement("code",null,"bootstrap"),",\u800c\u4e0d\u9700\u8981\u4ece",t.a.createElement("code",null,"node_modules"),"\u6587\u4ef6\u5939\u4e2d\u6309\u6a21\u5757\u7684\u67e5\u627e\u89c4\u5219\u67e5\u627e")),t.a.createElement(c["a"],{code:"const bootstrap = path.resolve(__dirname,'node_modules/_bootstrap@3.3.7@bootstrap/dist/css/bootstrap.css');\nresolve: {\n+    alias:{\n+        \"bootstrap\":bootstrap\n+    }\n},",lang:"diff"}),t.a.createElement("h3",{id:"23-modules"},t.a.createElement(r["AnchorLink"],{to:"#23-modules","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"2.3 modules"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("p",null,"\u5bf9\u4e8e\u76f4\u63a5\u58f0\u660e\u4f9d\u8d56\u540d\u7684\u6a21\u5757\uff08\u5982 react \uff09\uff0cwebpack \u4f1a\u7c7b\u4f3c Node.js \u4e00\u6837\u8fdb\u884c\u8def\u5f84\u641c\u7d22\uff0c\u641c\u7d22",t.a.createElement("code",null,"node_modules"),"\u76ee\u5f55")),t.a.createElement("li",null,t.a.createElement("p",null,"\u8fd9\u4e2a\u76ee\u5f55\u5c31\u662f\u4f7f\u7528"))),t.a.createElement(c["a"],{code:"resolve.modules",lang:"js"}),t.a.createElement("p",null,"\u5b57\u6bb5\u8fdb\u884c\u914d\u7f6e\u7684 \u9ed8\u8ba4\u914d\u7f6e"),t.a.createElement(c["a"],{code:"resolve: {\nmodules: ['node_modules'],\n}",lang:"js"}),t.a.createElement("p",null,"\u5982\u679c\u53ef\u4ee5\u786e\u5b9a\u9879\u76ee\u5185\u6240\u6709\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\u6a21\u5757\u90fd\u662f\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 node_modules \u4e2d\u7684\u8bdd"),t.a.createElement(c["a"],{code:"resolve: {\nmodules: [path.resolve(__dirname, 'node_modules')],\n}",lang:"js"}),t.a.createElement("h3",{id:"24-mainfields"},t.a.createElement(r["AnchorLink"],{to:"#24-mainfields","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"2.4 mainFields"),t.a.createElement("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0bpackage.json \u6587\u4ef6\u5219\u6309\u7167\u6587\u4ef6\u4e2d main \u5b57\u6bb5\u7684\u6587\u4ef6\u540d\u6765\u67e5\u627e\u6587\u4ef6"),t.a.createElement(c["a"],{code:'resolve: {\n  // \u914d\u7f6e target === "web" \u6216\u8005 target === "webworker" \u65f6 mainFields \u9ed8\u8ba4\u503c\u662f\uff1a\n  mainFields: [\'browser\', \'module\', \'main\'],\n  // target \u7684\u503c\u4e3a\u5176\u4ed6\u65f6\uff0cmainFields \u9ed8\u8ba4\u503c\u4e3a\uff1a\n  mainFields: ["module", "main"],\n}',lang:"js"}),t.a.createElement("h3",{id:"25-mainfiles"},t.a.createElement(r["AnchorLink"],{to:"#25-mainfiles","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"2.5 mainFiles"),t.a.createElement("p",null,"\u5f53\u76ee\u5f55\u4e0b\u6ca1\u6709 package.json \u6587\u4ef6\u65f6\uff0c\u6211\u4eec\u8bf4\u4f1a\u9ed8\u8ba4\u4f7f\u7528\u76ee\u5f55\u4e0b\u7684 index.js \u8fd9\u4e2a\u6587\u4ef6\uff0c\u5176\u5b9e\u8fd9\u4e2a\u4e5f\u662f\u53ef\u4ee5\u914d\u7f6e\u7684"),t.a.createElement(c["a"],{code:"resolve: {\n  mainFiles: ['index'], // \u4f60\u53ef\u4ee5\u6dfb\u52a0\u5176\u4ed6\u9ed8\u8ba4\u4f7f\u7528\u7684\u6587\u4ef6\u540d\n},",lang:"js"}),t.a.createElement("h3",{id:"26-resolveloader"},t.a.createElement(r["AnchorLink"],{to:"#26-resolveloader","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"2.6 resolveLoader"),t.a.createElement("p",null,t.a.createElement("code",null,"resolve.resolveLoader"),"\u7528\u4e8e\u914d\u7f6e\u89e3\u6790 loader \u65f6\u7684 resolve \u914d\u7f6e,\u9ed8\u8ba4\u7684\u914d\u7f6e\uff1a"),t.a.createElement(c["a"],{code:"module.exports = {\n  resolveLoader: {\n    modules: [ 'node_modules' ],\n    extensions: [ '.js', '.json' ],\n    mainFields: [ 'loader', 'main' ]\n  }\n};",lang:"js"}),t.a.createElement("h2",{id:"3-noparse"},t.a.createElement(r["AnchorLink"],{to:"#3-noparse","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"3 noParse"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("p",null,t.a.createElement("code",null,"module.noParse")," \u5b57\u6bb5\uff0c\u53ef\u4ee5\u7528\u4e8e\u914d\u7f6e\u54ea\u4e9b\u6a21\u5757\u6587\u4ef6\u7684\u5185\u5bb9\u4e0d\u9700\u8981\u8fdb\u884c\u89e3\u6790")),t.a.createElement("li",null,t.a.createElement("p",null,"\u4e0d\u9700\u8981\u89e3\u6790\u4f9d\u8d56\uff08\u5373\u65e0\u4f9d\u8d56\uff09 \u7684\u7b2c\u4e09\u65b9\u5927\u578b\u7c7b\u5e93\u7b49\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u5b57\u6bb5\u6765\u914d\u7f6e\uff0c\u4ee5\u63d0\u9ad8\u6574\u4f53\u7684\u6784\u5efa\u901f\u5ea6"))),t.a.createElement(c["a"],{code:"module.exports = {\n// ...\nmodule: {\nnoParse: /jquery|lodash/, // \u6b63\u5219\u8868\u8fbe\u5f0f\n// \u6216\u8005\u4f7f\u7528\u51fd\u6570\nnoParse(content) {\nreturn /jquery|lodash/.test(content)\n},\n}\n}...",lang:"js"}),t.a.createElement("blockquote",null,t.a.createElement("p",null,"\u4f7f\u7528 noParse \u8fdb\u884c\u5ffd\u7565\u7684\u6a21\u5757\u6587\u4ef6\u4e2d\u4e0d\u80fd\u4f7f\u7528 import\u3001require\u3001define \u7b49\u5bfc\u5165\u673a\u5236")),t.a.createElement("h2",{id:"4-ignoreplugin"},t.a.createElement(r["AnchorLink"],{to:"#4-ignoreplugin","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"4 IgnorePlugin"),t.a.createElement("p",null,"IgnorePlugin\u7528\u4e8e\u5ffd\u7565\u67d0\u4e9b\u7279\u5b9a\u7684\u6a21\u5757\uff0c\u8ba9 webpack \u4e0d\u628a\u8fd9\u4e9b\u6307\u5b9a\u7684\u6a21\u5757\u6253\u5305\u8fdb\u53bb"),t.a.createElement(c["a"],{code:"import moment from  'moment';\nconsole.log(moment);\nnew webpack.IgnorePlugin(/^\\.\\/locale/,/moment$/)",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u7b2c\u4e00\u4e2a\u662f\u5339\u914d\u5f15\u5165\u6a21\u5757\u8def\u5f84\u7684\u6b63\u5219\u8868\u8fbe\u5f0f"),t.a.createElement("li",null,"\u7b2c\u4e8c\u4e2a\u662f\u5339\u914d\u6a21\u5757\u7684\u5bf9\u5e94\u4e0a\u4e0b\u6587\uff0c\u5373\u6240\u5728\u76ee\u5f55\u540d")),t.a.createElement("h2",{id:"5-\u65e5\u5fd7\u4f18\u5316"},t.a.createElement(r["AnchorLink"],{to:"#5-\u65e5\u5fd7\u4f18\u5316","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"5 \u65e5\u5fd7\u4f18\u5316"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u65e5\u5fd7\u592a\u591a\u592a\u5c11\u90fd\u4e0d\u7f8e\u89c2"),t.a.createElement("li",null,"\u53ef\u4ee5\u4fee\u6539stats")),t.a.createElement(o["a"],null,t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",{align:"left"},"\u9884\u8bbe"),t.a.createElement("th",{align:"left"},"\u66ff\u4ee3"),t.a.createElement("th",{align:"left"},"\u63cf\u8ff0"))),t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",{align:"left"},"errors-only"),t.a.createElement("td",{align:"left"},"none"),t.a.createElement("td",{align:"left"},"\u53ea\u5728\u9519\u8bef\u65f6\u8f93\u51fa")),t.a.createElement("tr",null,t.a.createElement("td",{align:"left"},"minimal"),t.a.createElement("td",{align:"left"},"none"),t.a.createElement("td",{align:"left"},"\u53d1\u751f\u9519\u8bef\u548c\u65b0\u7684\u7f16\u8bd1\u65f6\u8f93\u51fa")),t.a.createElement("tr",null,t.a.createElement("td",{align:"left"},"none"),t.a.createElement("td",{align:"left"},"false"),t.a.createElement("td",{align:"left"},"\u6ca1\u6709\u8f93\u51fa")),t.a.createElement("tr",null,t.a.createElement("td",{align:"left"},"normal"),t.a.createElement("td",{align:"left"},"true"),t.a.createElement("td",{align:"left"},"\u6807\u51c6\u8f93\u51fa")),t.a.createElement("tr",null,t.a.createElement("td",{align:"left"},"verbose"),t.a.createElement("td",{align:"left"},"none"),t.a.createElement("td",{align:"left"},"\u5168\u90e8\u8f93\u51fa")))),t.a.createElement("h3",{id:"51-friendly-errors-webpack-plugin"},t.a.createElement(r["AnchorLink"],{to:"#51-friendly-errors-webpack-plugin","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"5.1 friendly-errors-webpack-plugin"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement(r["Link"],{to:"https://www.npmjs.com/package/friendly-errors-webpack-plugin"},"friendly-errors-webpack-plugin")),t.a.createElement("li",null,"success \u6784\u5efa\u6210\u529f\u7684\u65e5\u5fd7\u63d0\u793a"),t.a.createElement("li",null,"warning \u6784\u5efa\u8b66\u544a\u7684\u65e5\u5fd7\u63d0\u793a"),t.a.createElement("li",null,"error \u6784\u5efa\u62a5\u9519\u7684\u65e5\u5fd7\u63d0\u793a")),t.a.createElement(c["a"],{code:"cnpm i friendly-errors-webpack-plugin\n+ stats:'verbose',\n  plugins:[\n+   new FriendlyErrorsWebpackPlugin()\n  ]",lang:"js"}),t.a.createElement("blockquote",null,t.a.createElement("p",null,"\u7f16\u8bd1\u5b8c\u6210\u540e\u53ef\u4ee5\u901a\u8fc7",t.a.createElement("code",null,"echo $?"),"\u83b7\u53d6\u9519\u8bef\u7801\uff0c0\u4e3a\u6210\u529f\uff0c\u975e0\u4e3a\u5931\u8d25")),t.a.createElement("h2",{id:"6-dll"},t.a.createElement(r["AnchorLink"],{to:"#6-dll","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"6 DLL"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("code",null,".dll"),"\u4e3a\u540e\u7f00\u7684\u6587\u4ef6\u79f0\u4e3a\u52a8\u6001\u94fe\u63a5\u5e93\uff0c\u5728\u4e00\u4e2a\u52a8\u6001\u94fe\u63a5\u5e93\u4e2d\u53ef\u4ee5\u5305\u542b\u7ed9\u5176\u4ed6\u6a21\u5757\u8c03\u7528\u7684\u51fd\u6570\u548c\u6570\u636e"),t.a.createElement("li",null,"\u628a\u57fa\u7840\u6a21\u5757\u72ec\u7acb\u51fa\u6765\u6253\u5305\u5230\u5355\u72ec\u7684\u52a8\u6001\u8fde\u63a5\u5e93\u91cc"),t.a.createElement("li",null,"\u5f53\u9700\u8981\u5bfc\u5165\u7684\u6a21\u5757\u5728\u52a8\u6001\u8fde\u63a5\u5e93\u91cc\u7684\u65f6\u5019\uff0c\u6a21\u5757\u4e0d\u80fd\u518d\u6b21\u88ab\u6253\u5305\uff0c\u800c\u662f\u53bb\u52a8\u6001\u8fde\u63a5\u5e93\u91cc\u83b7\u53d6"),t.a.createElement("li",null,t.a.createElement(r["Link"],{to:"https://webpack.js.org/plugins/dll-plugin/"},"dll-plugin"))),t.a.createElement("h3",{id:"61-\u5b9a\u4e49dll"},t.a.createElement(r["AnchorLink"],{to:"#61-\u5b9a\u4e49dll","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"6.1 \u5b9a\u4e49Dll"),t.a.createElement("ul",null,t.a.createElement("li",null,"DllPlugin\u63d2\u4ef6\uff1a \u7528\u4e8e\u6253\u5305\u51fa\u4e00\u4e2a\u4e2a\u52a8\u6001\u8fde\u63a5\u5e93"),t.a.createElement("li",null,"DllReferencePlugin: \u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u5f15\u5165DllPlugin\u63d2\u4ef6\u6253\u5305\u597d\u7684\u52a8\u6001\u8fde\u63a5\u5e93")),t.a.createElement("p",null,"webpack.dll.config.js"),t.a.createElement(c["a"],{code:'const path = require("path");\n\nconst DllPlugin = require("webpack/lib/DllPlugin");\nmodule.exports = {\n  mode: "development",\n  entry: {\n    react: ["react", "react-dom"],\n  },\n  output: {\n    path: path.resolve(__dirname, "dist"),\n    filename: "[name].dll.js", //react.dll.js\n    library: "_dll_[name]",\n  },\n  plugins: [\n    new DllPlugin({\n      name: "_dll_[name]",\n      path: path.join(__dirname, "dist", "[name].manifest.json"), //react.manifest.json\n    }),\n  ],\n};\nwebpack --config webpack.dll.config.js --mode=development',lang:"js"}),t.a.createElement("h3",{id:"62-\u4f7f\u7528\u52a8\u6001\u94fe\u63a5\u5e93\u6587\u4ef6"},t.a.createElement(r["AnchorLink"],{to:"#62-\u4f7f\u7528\u52a8\u6001\u94fe\u63a5\u5e93\u6587\u4ef6","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"6.2 \u4f7f\u7528\u52a8\u6001\u94fe\u63a5\u5e93\u6587\u4ef6"),t.a.createElement(c["a"],{code:'const path = require("path");\nconst glob = require("glob");\nconst PurgecssPlugin = require("purgecss-webpack-plugin");\nconst MiniCssExtractPlugin = require(\'mini-css-extract-plugin\');\n+const DllReferencePlugin = require("webpack/lib/DllReferencePlugin.js");\nconst PATHS = {\n  src: path.join(__dirname, \'src\')\n}\nmodule.exports = {\n  mode: "development",\n  entry: "./src/index.js",\n  module: {\n    rules: [\n      {\n        test: /\\.js/,\n        include: path.resolve(__dirname, "src"),\n        use: [\n          {\n            loader: "babel-loader",\n            options: {\n              presets: ["@babel/preset-env", "@babel/preset-react"],\n            },\n          },\n        ],\n      },\n      {\n        test: /\\.css$/,\n        include: path.resolve(__dirname, "src"),\n        exclude: /node_modules/,\n        use: [\n          {\n            loader: MiniCssExtractPlugin.loader,\n          },\n          "css-loader",\n        ],\n      },\n    ],\n  },\n  plugins: [\n    new MiniCssExtractPlugin({\n      filename: "[name].css",\n    }),\n    new PurgecssPlugin({\n      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),\n    }),\n+    new DllReferencePlugin({\n+      manifest: require("./dist/react.manifest.json"),\n+    }),\n  ],\n};\nwebpack --config webpack.config.js --mode development',lang:"diff"}),t.a.createElement("h3",{id:"63-html\u4e2d\u4f7f\u7528"},t.a.createElement(r["AnchorLink"],{to:"#63-html\u4e2d\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"6.3 html\u4e2d\u4f7f\u7528"),t.a.createElement(c["a"],{code:'<script src="react.dll.js"><\/script>\n<script src="bundle.js"><\/script>',lang:"html"}),t.a.createElement("h2",{id:"7-\u5229\u7528\u7f13\u5b58"},t.a.createElement(r["AnchorLink"],{to:"#7-\u5229\u7528\u7f13\u5b58","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"7 \u5229\u7528\u7f13\u5b58"),t.a.createElement("ul",null,t.a.createElement("li",null,"webpack\u4e2d\u5229\u7528\u7f13\u5b58\u4e00\u822c\u6709\u4ee5\u4e0b\u51e0\u79cd\u601d\u8def\uff1a",t.a.createElement("ul",null,t.a.createElement("li",null,"babel-loader\u5f00\u542f\u7f13\u5b58"),t.a.createElement("li",null,"\u4f7f\u7528cache-loader"),t.a.createElement("li",null,"\u4f7f\u7528hard-source-webpack-plugin")))),t.a.createElement("h3",{id:"71-babel-loader"},t.a.createElement(r["AnchorLink"],{to:"#71-babel-loader","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"7.1 babel-loader"),t.a.createElement("ul",null,t.a.createElement("li",null,"Babel\u5728\u8f6c\u4e49js\u6587\u4ef6\u8fc7\u7a0b\u4e2d\u6d88\u8017\u6027\u80fd\u8f83\u9ad8\uff0c\u5c06babel-loader\u6267\u884c\u7684\u7ed3\u679c\u7f13\u5b58\u8d77\u6765\uff0c\u5f53\u91cd\u65b0\u6253\u5305\u6784\u5efa\u65f6\u4f1a\u5c1d\u8bd5\u8bfb\u53d6\u7f13\u5b58\uff0c\u4ece\u800c\u63d0\u9ad8\u6253\u5305\u6784\u5efa\u901f\u5ea6\u3001\u964d\u4f4e\u6d88\u8017")),t.a.createElement(c["a"],{code:'{\n    test: /\\.js$/,\n    exclude: /node_modules/,\n    use: [{\n      loader: "babel-loader",\n      options: {\n        cacheDirectory: true\n      }\n    }]\n  },',lang:"js"}),t.a.createElement("h3",{id:"72-cache-loader"},t.a.createElement(r["AnchorLink"],{to:"#72-cache-loader","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"7.2 cache-loader"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u5728\u4e00\u4e9b\u6027\u80fd\u5f00\u9500\u8f83\u5927\u7684 loader \u4e4b\u524d\u6dfb\u52a0\u6b64 loader,\u4ee5\u5c06\u7ed3\u679c\u7f13\u5b58\u5230\u78c1\u76d8\u91cc"),t.a.createElement("li",null,"\u5b58\u548c\u8bfb\u53d6\u8fd9\u4e9b\u7f13\u5b58\u6587\u4ef6\u4f1a\u6709\u4e00\u4e9b\u65f6\u95f4\u5f00\u9500,\u6240\u4ee5\u8bf7\u53ea\u5bf9\u6027\u80fd\u5f00\u9500\u8f83\u5927\u7684 loader \u4f7f\u7528\u6b64 loader")),t.a.createElement(c["a"],{code:"cnpm i  cache-loader -D\nconst loaders = ['babel-loader'];\nmodule.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        use: [\n          'cache-loader',\n          ...loaders\n        ],\n        include: path.resolve('src')\n      }\n    ]\n  }\n}",lang:"js"}),t.a.createElement("h3",{id:"73-hard-source-webpack-plugin"},t.a.createElement(r["AnchorLink"],{to:"#73-hard-source-webpack-plugin","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"7.3 hard-source-webpack-plugin"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("code",null,"HardSourceWebpackPlugin"),"\u4e3a\u6a21\u5757\u63d0\u4f9b\u4e86\u4e2d\u95f4\u7f13\u5b58,\u7f13\u5b58\u9ed8\u8ba4\u7684\u5b58\u653e\u8def\u5f84\u662f ",t.a.createElement("code",null,"node_modules/.cache/hard-source"),"\u3002`"),t.a.createElement("li",null,"\u914d\u7f6e hard-source-webpack-plugin\u540e\uff0c\u9996\u6b21\u6784\u5efa\u65f6\u95f4\u5e76\u4e0d\u4f1a\u6709\u592a\u5927\u7684\u53d8\u5316\uff0c\u4f46\u662f\u4ece\u7b2c\u4e8c\u6b21\u5f00\u59cb\uff0c\u6784\u5efa\u65f6\u95f4\u5927\u7ea6\u53ef\u4ee5\u51cf\u5c11 80%\u5de6\u53f3"),t.a.createElement("li",null,"webpack5\u4e2d\u4f1a\u5185\u7f6e",t.a.createElement("code",null,"hard-source-webpack-plugin"))),t.a.createElement(c["a"],{code:"cnpm i  hard-source-webpack-plugin -D \nvar HardSourceWebpackPlugin = require('hard-source-webpack-plugin');\n\nmodule.exports = {\n  entry: // ...\n  output: // ...\n  plugins: [\n    new HardSourceWebpackPlugin()\n  ]\n}",lang:"js"}),t.a.createElement("h3",{id:"74-oneof"},t.a.createElement(r["AnchorLink"],{to:"#74-oneof","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"7.4 oneOf"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u6bcf\u4e2a\u6587\u4ef6\u5bf9\u4e8erules\u4e2d\u7684\u6240\u6709\u89c4\u5219\u90fd\u4f1a\u904d\u5386\u4e00\u904d\uff0c\u5982\u679c\u4f7f\u7528oneOf\u5c31\u53ef\u4ee5\u89e3\u51b3\u8be5\u95ee\u9898\uff0c\u53ea\u8981\u80fd\u5339\u914d\u4e00\u4e2a\u5373\u53ef\u9000\u51fa\u3002(\u6ce8\u610f\uff1a\u5728oneOf\u4e2d\u4e0d\u80fd\u4e24\u4e2a\u914d\u7f6e\u5904\u7406\u540c\u4e00\u79cd\u7c7b\u578b\u6587\u4ef6)")),t.a.createElement(c["a"],{code:"module.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        exclude: /node_modules/,\n        //\u4f18\u5148\u6267\u884c\n        enforce: 'pre',\n        loader: 'eslint-loader',\n        options: {\n          fix: true\n        }\n      },\n      {\n        // \u4ee5\u4e0b loader \u53ea\u4f1a\u5339\u914d\u4e00\u4e2a\n        oneOf: [\n          ...,\n          {},\n          {}\n        ]\n      }\n    ]\n  }\n}",lang:"js"}),t.a.createElement("h2",{id:"8-\u591a\u8fdb\u7a0b\u5904\u7406"},t.a.createElement(r["AnchorLink"],{to:"#8-\u591a\u8fdb\u7a0b\u5904\u7406","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"8 \u591a\u8fdb\u7a0b\u5904\u7406"),t.a.createElement("h3",{id:"81-thread-loader"},t.a.createElement(r["AnchorLink"],{to:"#81-thread-loader","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"8.1 thread-loader"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u628a\u8fd9\u4e2a loader \u653e\u7f6e\u5728\u5176\u4ed6 loader \u4e4b\u524d\uff0c \u653e\u7f6e\u5728\u8fd9\u4e2a loader \u4e4b\u540e\u7684 loader \u5c31\u4f1a\u5728\u4e00\u4e2a\u5355\u72ec\u7684 worker \u6c60(worker pool)\u4e2d\u8fd0\u884c"),t.a.createElement("li",null,t.a.createElement(r["Link"],{to:"https://webpack.js.org/loaders/thread-loader/"},"thread-loader"))),t.a.createElement(c["a"],{code:'cnpm  i thread-loader- D\nconst path = require("path");\nconst glob = require("glob");\nconst PurgecssPlugin = require("purgecss-webpack-plugin");\nconst MiniCssExtractPlugin = require(\'mini-css-extract-plugin\');\nconst DllReferencePlugin = require("webpack/lib/DllReferencePlugin.js");\nconst PATHS = {\n  src: path.join(__dirname, \'src\')\n}\nmodule.exports = {\n  mode: "development",\n  entry: "./src/index.js",\n  module: {\n    rules: [\n      {\n        test: /\\.js/,\n        include: path.resolve(__dirname, "src"),\n        use: [\n+          {\n+            loader:\'thread-loader\',\n+            options:{\n+              workers:3\n+            }\n+          },\n          {\n            loader: "babel-loader",\n            options: {\n              presets: ["@babel/preset-env", "@babel/preset-react"],\n            },\n          },\n        ],\n      },\n      {\n        test: /\\.css$/,\n        include: path.resolve(__dirname, "src"),\n        exclude: /node_modules/,\n        use: [\n          {\n            loader: MiniCssExtractPlugin.loader,\n          },\n          "css-loader",\n        ],\n      },\n    ],\n  },\n  plugins: [\n    new MiniCssExtractPlugin({\n      filename: "[name].css",\n    }),\n    new PurgecssPlugin({\n      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),\n    }),\n    new DllReferencePlugin({\n      manifest: require("./dist/react.manifest.json"),\n    }),\n  ],\n};',lang:"js"}),t.a.createElement("h3",{id:"82-parallel"},t.a.createElement(r["AnchorLink"],{to:"#82-parallel","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"8.2 parallel"),t.a.createElement("p",null,"terser-webpack-plugin \u5f00\u542f parallel \u53c2\u6570"),t.a.createElement(c["a"],{code:"const TerserPlugin = require('terser-webpack-plugin');\nmodule.exports = {\n    optimization: {\n        minimizer: [\n            new TerserPlugin({\n                parallel: true,\n            }),\n        ],\n    },\n};",lang:"js"})))}));n["default"]=e=>{var n=t.a.useContext(r["context"]),a=n.demos;return t.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),t.a.createElement(i,{demos:a})}},WpQk:function(e,n,a){},"dMo/":function(e,n,a){"use strict";var l=a("q1tI"),t=a.n(l),r=a("hKI/"),c=a.n(r);a("WpQk");function o(e,n){return u(e)||m(e,n)||s(e,n)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,n){if(e){if("string"===typeof e)return d(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,n):void 0}}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,l=new Array(n);a<n;a++)l[a]=e[a];return l}function m(e,n){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,t,r=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(l=a.next()).done);c=!0)if(r.push(l.value),n&&r.length===n)break}catch(i){o=!0,t=i}finally{try{c||null==a["return"]||a["return"]()}finally{if(o)throw t}}return r}}function u(e){if(Array.isArray(e))return e}var p=function(e){var n=e.children,a=Object(l["useRef"])(),r=Object(l["useState"])(!1),i=o(r,2),s=i[0],d=i[1],m=Object(l["useState"])(!1),u=o(m,2),p=u[0],E=u[1];return Object(l["useEffect"])((function(){var e=a.current,n=c()((function(){d(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return n(),e.addEventListener("scroll",n),window.addEventListener("resize",n),function(){e.removeEventListener("scroll",n),window.removeEventListener("resize",n)}}),[]),t.a.createElement("div",{className:"__dumi-default-table"},t.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":s||void 0,"data-right-folded":p||void 0},t.a.createElement("table",null,n)))};n["a"]=p}}]);