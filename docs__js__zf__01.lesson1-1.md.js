(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[75],{WpQk:function(e,n,t){},"dMo/":function(e,n,t){"use strict";var a=t("q1tI"),l=t.n(a),c=t("hKI/"),o=t.n(c);t("WpQk");function r(e,n){return s(e)||E(e,n)||u(e,n)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,n){if(e){if("string"===typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?m(e,n):void 0}}function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function E(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,l,c=[],o=!0,r=!1;try{for(t=t.call(e);!(o=(a=t.next()).done);o=!0)if(c.push(a.value),n&&c.length===n)break}catch(i){r=!0,l=i}finally{try{o||null==t["return"]||t["return"]()}finally{if(r)throw l}}return c}}function s(e){if(Array.isArray(e))return e}var d=function(e){var n=e.children,t=Object(a["useRef"])(),c=Object(a["useState"])(!1),i=r(c,2),u=i[0],m=i[1],E=Object(a["useState"])(!1),s=r(E,2),d=s[0],h=s[1];return Object(a["useEffect"])((function(){var e=t.current,n=o()((function(){m(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return n(),e.addEventListener("scroll",n),window.addEventListener("resize",n),function(){e.removeEventListener("scroll",n),window.removeEventListener("resize",n)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:t,"data-left-folded":u||void 0,"data-right-folded":d||void 0},l.a.createElement("table",null,n)))};n["a"]=d},jYMe:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),c=t("dEAq"),o=t("H1Ra"),r=t("dMo/"),i=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"1-\u6808"},l.a.createElement(c["AnchorLink"],{to:"#1-\u6808","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1. \u6808"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"\u6808"),"\u8005,\u5b58\u50a8\u8d27\u7269\u6216\u4f9b\u65c5\u5ba2\u4f4f\u5bbf\u7684\u5730\u65b9,\u53ef\u5f15\u7533\u4e3a\u4ed3\u5e93")),l.a.createElement("h3",{id:"11-\u6570\u636e\u7ed3\u6784\u4e2d\u7684\u6808"},l.a.createElement(c["AnchorLink"],{to:"#11-\u6570\u636e\u7ed3\u6784\u4e2d\u7684\u6808","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.1 \u6570\u636e\u7ed3\u6784\u4e2d\u7684\u6808"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",null,"\u6808\u662f\u4e00\u7ec4\u6570\u636e\u7684\u5b58\u653e\u65b9\u5f0f,\u7279\u70b9\u662f\u5148\u8fdb\u540e\u51fa\uff0c\u540e\u8fdb\u5148\u51fa"),l.a.createElement("p",null,l.a.createElement("img",{src:"https://wsk-mweb.oss-cn-hangzhou.aliyuncs.com/ipic/2021-06-14-013042.png",alt:"instack"})))),l.a.createElement("p",null,l.a.createElement("img",{src:"https://wsk-mweb.oss-cn-hangzhou.aliyuncs.com/ipic/2021-06-14-013050.png",alt:"outstack"})),l.a.createElement(r["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{align:"left"},"\u65b9\u6cd5\u540d"),l.a.createElement("th",{align:"left"},"\u64cd\u4f5c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"push()"),l.a.createElement("td",{align:"left"},"\u6dfb\u52a0\u65b0\u5143\u7d20\u5230\u6808\u9876")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"pop()"),l.a.createElement("td",{align:"left"},"\u79fb\u9664\u6808\u9876\u7684\u5143\u7d20\uff0c\u540c\u65f6\u8fd4\u56de\u88ab\u79fb\u9664\u7684\u5143\u7d20")))),l.a.createElement(o["a"],{code:"class Stack {\n    private items: number[] = [];\n    // \u6dfb\u52a0\u5143\u7d20\u5230\u6808\u9876\uff0c\u4e5f\u5c31\u662f\u6808\u7684\u672b\u5c3e\n    push(element: number) {\n        this.items.push(element);\n    }\n    // \u6808\u7684\u540e\u8fdb\u5148\u51fa\u539f\u5219\uff0c\u4ece\u6808\u9876\u51fa\u6808\n    pop(): number {\n        return this.items.pop();\n    }\n}\n\nlet stack = new Stack();\nstack.push(1);\nstack.push(2);\nstack.push(3);\nconsole.log(stack.pop());",lang:"ts"}),l.a.createElement("h3",{id:"12-\u4ee3\u7801\u7684\u8fd0\u884c\u65b9\u5f0f"},l.a.createElement(c["AnchorLink"],{to:"#12-\u4ee3\u7801\u7684\u8fd0\u884c\u65b9\u5f0f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.2 \u4ee3\u7801\u7684\u8fd0\u884c\u65b9\u5f0f"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u8868\u793a\u51fd\u6570\u7684\u4e00\u5c42\u5c42\u8c03\u7528")),l.a.createElement(o["a"],{code:"function one() {\n    function two() {\n        function three() {\n            debugger;\n        }\n        three();\n    }\n    two();\n}\none();",lang:"js"}),l.a.createElement("img",{src:"https://wsk-mweb.oss-cn-hangzhou.aliyuncs.com/ipic/2021-06-14-013228.png",alt:"callbackstack"}),l.a.createElement("h3",{id:"13-\u5185\u5b58\u533a\u57df"},l.a.createElement(c["AnchorLink"],{to:"#13-\u5185\u5b58\u533a\u57df","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"1.3 \u5185\u5b58\u533a\u57df"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6808\u4e5f\u662f\u662f\u5b58\u653e\u6570\u636e\u7684\u4e00\u79cd\u5185\u5b58\u533a\u57df"),l.a.createElement("li",null,"\u7a0b\u5e8f\u8fd0\u884c\u7684\u65f6\u5019\uff0c\u9700\u8981\u5185\u5b58\u7a7a\u95f4\u5b58\u653e\u6570\u636e\u3002\u4e00\u822c\u6765\u8bf4,\u7cfb\u7edf\u4f1a\u5212\u5206\u51fa\u4e24\u79cd\u4e0d\u540c\u7684\u5185\u5b58\u7a7a\u95f4\uff1a\u4e00\u79cd\u53eb\u505astack(\u6808)\uff0c\u53e6\u4e00\u79cd\u53eb\u505aheap(\u5806)",l.a.createElement("ul",null,l.a.createElement("li",null,"stack\u662f\u6709\u7ed3\u6784\u7684\uff0c\u6bcf\u4e2a\u533a\u5757\u6309\u7167\u4e00\u5b9a\u6b21\u5e8f\u5b58\u653e\uff0c\u53ef\u4ee5\u660e\u786e\u77e5\u9053\u6bcf\u4e2a\u533a\u5757\u7684\u5927\u5c0f"),l.a.createElement("li",null,"heap\u662f\u6ca1\u6709\u7ed3\u6784\u7684\uff0c\u6570\u636e\u53ef\u4ee5\u4efb\u610f\u5b58\u653e\u3002\u56e0\u6b64\uff0cstack\u7684\u5bfb\u5740\u901f\u5ea6\u8981\u5feb\u4e8eheap"))),l.a.createElement("li",null,"\u53ea\u8981\u662f\u5c40\u90e8\u7684\u3001\u5360\u7528\u7a7a\u95f4\u786e\u5b9a\u7684\u6570\u636e\uff0c\u4e00\u822c\u90fd\u5b58\u653e\u5728stack\u91cc\u9762\uff0c\u5426\u5219\u5c31\u653e\u5728heap\u91cc\u9762,\u6240\u6709\u7684\u5bf9\u8c61\u90fd\u5b58\u653e\u5728heap")),l.a.createElement(o["a"],{code:"function task() {\n    var a = 1;\n    var b = 2;\n    var c = {\n        name: 'zhufeng',\n        age: 10\n    }\n}\ntask();",lang:"js"}),l.a.createElement("p",null,l.a.createElement("img",{src:"https://wsk-mweb.oss-cn-hangzhou.aliyuncs.com/ipic/2021-06-14-013653.jpg",alt:"memoryposition"})),l.a.createElement("h2",{id:"\u961f\u5217"},l.a.createElement(c["AnchorLink"],{to:"#\u961f\u5217","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u961f\u5217"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u961f\u5217\u662f\u4e00\u79cd\u64cd\u4f5c\u53d7\u9650\u5236\u7684\u7ebf\u6027\u8868"),l.a.createElement("li",null,"\u7279\u6b8a\u4e4b\u5904\u5728\u4e8e\u5b83\u53ea\u5141\u8bb8\u5728\u8868\u7684\u524d\u7aef\u8fdb\u884c\u5220\u9664\u64cd\u4f5c\uff0c\u800c\u5728\u8868\u7684\u540e\u7aef\u8fdb\u884c\u63d2\u5165\u64cd\u4f5c"),l.a.createElement("li",null,"\u8fdb\u884c\u63d2\u5165\u64cd\u4f5c\u7684\u7aef\u79f0\u4e3a\u961f\u5c3e\uff0c\u8fdb\u884c\u5220\u9664\u64cd\u4f5c\u7684\u7aef\u79f0\u4e3a\u961f\u5934"),l.a.createElement("li",null,"\u56e0\u4e3a\u961f\u5217\u53ea\u5141\u8bb8\u5728\u4e00\u7aef\u63d2\u5165,\u5728\u53e6\u4e00\u7aef\u5220\u9664\uff0c\u6240\u4ee5\u53ea\u6709\u6700\u65e9\u8fdb\u5165\u961f\u5217\u7684\u5143\u7d20\u624d\u80fd\u6700\u5148\u4ece\u961f\u5217\u4e2d\u5220\u9664,\u6545\u961f\u5217\u53c8\u79f0\u4e3a\u5148\u8fdb\u5148\u51fa")),l.a.createElement("p",null,l.a.createElement("img",{src:"https://wsk-mweb.oss-cn-hangzhou.aliyuncs.com/ipic/2021-06-14-013717.png",alt:"inqueue.png"})),l.a.createElement("p",null,l.a.createElement("img",{src:"https://wsk-mweb.oss-cn-hangzhou.aliyuncs.com/ipic/2021-06-14-013727.png",alt:"outqueue.png"})),l.a.createElement(o["a"],{code:"class Queue {\n    private items: number[] = [];\n    // \u6dfb\u52a0\u5143\u7d20\u5230\u6808\u9876\uff0c\u4e5f\u5c31\u662f\u6808\u7684\u672b\u5c3e\n    enqueue(element: number) {\n        this.items.push(element);\n    }\n    dequeue() {\n        return this.items.shift();\n    }\n}\n\nlet queue = new Queue();\nqueue.enqueue(1);\nqueue.enqueue(2);\nqueue.enqueue(3);\nconsole.log(queue.dequeue());//1",lang:"ts"}),l.a.createElement("h2",{id:"3-\u6570\u636e\u7c7b\u578b"},l.a.createElement(c["AnchorLink"],{to:"#3-\u6570\u636e\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"3. \u6570\u636e\u7c7b\u578b"),l.a.createElement("ul",null,l.a.createElement("li",null,"JS\u4e2d\u6709\u4e03\u79cd\u57fa\u672c\u6570\u636e\u7c7b\u578b",l.a.createElement("ul",null,l.a.createElement("li",null,"\u516d\u79cd\u57fa\u672c\u6570\u636e\u7c7b\u578b Boolean Null Undefined Number String Symbol"),l.a.createElement("li",null,"\u4e00\u79cd\u5f15\u7528\u7c7b\u578b object ","{","}"," [] /^$/ new Date() Math")))),l.a.createElement(r["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{align:"left"},"\u7c7b\u578b"),l.a.createElement("th",{align:"left"},"\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"Boolean"),l.a.createElement("td",{align:"left"},"true\u6216false")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"Null"),l.a.createElement("td",{align:"left"},"null")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"Undefined"),l.a.createElement("td",{align:"left"},"undefined")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"Number"),l.a.createElement("td",{align:"left"},"\u6570\u5b57")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"String"),l.a.createElement("td",{align:"left"},"\u5b57\u7b26\u4e32")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"Symbol"),l.a.createElement("td",{align:"left"},"\u7b26\u53f7\u7c7b\u578b")))),l.a.createElement("h2",{id:"4-\u6267\u884c\u4e0a\u4e0b\u6587"},l.a.createElement(c["AnchorLink"],{to:"#4-\u6267\u884c\u4e0a\u4e0b\u6587","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4. \u6267\u884c\u4e0a\u4e0b\u6587"),l.a.createElement("h3",{id:"41-\u5982\u4f55\u5b58\u50a8"},l.a.createElement(c["AnchorLink"],{to:"#41-\u5982\u4f55\u5b58\u50a8","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4.1 \u5982\u4f55\u5b58\u50a8"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5f53\u51fd\u6570\u8fd0\u884c\u65f6\uff0c\u4f1a\u521b\u5efa\u4e00\u4e2a\u6267\u884c\u73af\u5883\uff0c\u8fd9\u4e2a\u6267\u884c\u73af\u5883\u5c31\u53eb\u6267\u884c\u4e0a\u4e0b\u6587(Execution Context)"),l.a.createElement("li",null,"\u6267\u884c\u4e0a\u4e0b\u6587\u4e2d\u4f1a\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u53eb\u4f5c\u53d8\u91cf\u5bf9\u8c61(Value Object),\u57fa\u7840\u6570\u636e\u7c7b\u578b\u90fd\u4fdd\u5b58\u5728\u53d8\u91cf\u5bf9\u8c61\u4e2d"),l.a.createElement("li",null,"\u5f15\u7528\u6570\u636e\u7c7b\u578b\u7684\u503c\u4fdd\u5b58\u5728\u5806\u91cc\uff0c\u6211\u4eec\u901a\u8fc7\u64cd\u4f5c\u5bf9\u8c61\u7684\u5f15\u7528\u5730\u5740\u6765\u64cd\u4f5c\u5bf9\u8c61")),l.a.createElement(o["a"],{code:"function task(){\n    var a = 1;\n    var b = {\n        name:'zhufeng'\n    }\n    var c = [1,2,3];\n}",lang:"js"}),l.a.createElement(o["a"],{code:"let ExecuteContext = {\n    VO:{\n        a:1,\n        b:'XO1',\n        c:'XA1'\n    }\n};",lang:"js"}),l.a.createElement("p",null,l.a.createElement("img",{src:"https://wsk-mweb.oss-cn-hangzhou.aliyuncs.com/ipic/2021-06-14-014108.png",alt:"valueobject"})),l.a.createElement("h3",{id:"42-\u5982\u4f55\u590d\u5236"},l.a.createElement(c["AnchorLink"],{to:"#42-\u5982\u4f55\u590d\u5236","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4.2 \u5982\u4f55\u590d\u5236"),l.a.createElement("h4",{id:"421-\u57fa\u672c\u6570\u636e"},l.a.createElement(c["AnchorLink"],{to:"#421-\u57fa\u672c\u6570\u636e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4.2.1 \u57fa\u672c\u6570\u636e"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u57fa\u672c\u6570\u636e\u7c7b\u578b\u590d\u5236\u7684\u662f\u503c\u672c\u8eab")),l.a.createElement(o["a"],{code:"var a = 1;\nvar b = a;\nb = 2;\nconsole.log(a);",lang:"js"}),l.a.createElement(o["a"],{code:"var ExecuteContext = {\n    VO: { a: 1 }\n};\n\nExecuteContext.VO.b = ExecuteContext.VO.a;\nExecuteContext.VO.b = 2;\nconsole.log(ExecuteContext.VO.a);",lang:"js"}),l.a.createElement("h4",{id:"422-\u5f15\u7528\u6570\u636e"},l.a.createElement(c["AnchorLink"],{to:"#422-\u5f15\u7528\u6570\u636e","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"4.2.2 \u5f15\u7528\u6570\u636e"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5f15\u7528\u6570\u636e\u7c7b\u578b\u590d\u5236\u7684\u662f\u5f15\u7528\u5730\u5740\u6307\u9488")),l.a.createElement(o["a"],{code:"var m = { a: 1, b: 2 };\nvar n = m;\nn.a = 10;\nconsole.log(m.a);",lang:"js"}),l.a.createElement(o["a"],{code:"var ExecuteContext = {\n    VO: { m: { a: 1, b: 2 } }\n};\n\nExecuteContext.VO.b = ExecuteContext.VO.a;\nExecuteContext.VO.a = 10;\nconsole.log(ExecuteContext.VO.a);",lang:"js"}),l.a.createElement("p",null,l.a.createElement("img",{src:"https://wsk-mweb.oss-cn-hangzhou.aliyuncs.com/ipic/2021-06-14-014400.png",alt:"copyrefer"})),l.a.createElement("h2",{id:"5-\u591a\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\u6808"},l.a.createElement(c["AnchorLink"],{to:"#5-\u591a\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\u6808","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"5. \u591a\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\u6808"),l.a.createElement("h3",{id:"51-\u6267\u884c\u4e0a\u4e0b\u6587\u5206\u7c7b"},l.a.createElement(c["AnchorLink"],{to:"#51-\u6267\u884c\u4e0a\u4e0b\u6587\u5206\u7c7b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"5.1 \u6267\u884c\u4e0a\u4e0b\u6587\u5206\u7c7b"),l.a.createElement("ul",null,l.a.createElement("li",null,"JS\u4ee3\u7801\u5728\u6267\u884c\u7684\u65f6\u5019\u4f1a\u8fdb\u5165\u4e00\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u5f53\u524d\u4ee3\u7801\u7684\u8fd0\u884c\u73af\u5883"),l.a.createElement("li",null,"\u5728JS\u4e2d\u8fd0\u884c\u73af\u5883\u4e3b\u8981\u5206\u4e3a\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587\u73af\u5883\u548c\u51fd\u6570\u73af\u6267\u884c\u4e0a\u4e0b\u6587\u73af\u5883",l.a.createElement("ul",null,l.a.createElement("li",null,"\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587\u53ea\u6709\u4e00\u4e2a\uff0c\u5728\u5ba2\u6237\u7aef\u4e2d\u4e00\u822c\u7531\u6d4f\u89c8\u5668\u521b\u5efa\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u719f\u77e5\u7684window\u5bf9\u8c61\uff0c\u6211\u4eec\u80fd\u901a\u8fc7this\u76f4\u63a5\u8bbf\u95ee\u5230\u5b83"),l.a.createElement("li",null,"window\u5bf9\u8c61\u8fd8\u662fvar\u58f0\u660e\u7684\u5168\u5c40\u53d8\u91cf\u7684\u8f7d\u4f53\u3002\u6211\u4eec\u901a\u8fc7var\u521b\u5efa\u7684\u5168\u5c40\u5bf9\u8c61\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7window\u76f4\u63a5\u8bbf\u95ee")))),l.a.createElement("h3",{id:"52-\u591a\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587"},l.a.createElement(c["AnchorLink"],{to:"#52-\u591a\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"5.2 \u591a\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5728JS\u6267\u884c\u8fc7\u7a0b\u4f1a\u4ea7\u51fa\u591a\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587,JS\u5f15\u64ce\u4f1a\u6709\u6808\u6765\u7ba1\u7406\u8fd9\u4e9b\u6267\u884c\u4e0a\u4e0b\u6587"),l.a.createElement("li",null,"\u6267\u884c\u4e0a\u4e0b\u6587\u6808(\u4e0b\u6587\u7b80\u79f0\u6267\u884c\u6808)\u4e5f\u53eb\u8c03\u7528\u6808\uff0c\u6267\u884c\u6808\u7528\u4e8e\u5b58\u50a8\u4ee3\u7801\u6267\u884c\u671f\u95f4\u521b\u5efa\u7684\u6240\u6709\u4e0a\u4e0b\u6587\uff0c\u5177\u6709LIFO\uff08Last In First Out\u540e\u8fdb\u5148\u51fa\uff0c\u4e5f\u5c31\u662f\u5148\u8fdb\u540e\u51fa\uff09\u7684\u7279\u6027"),l.a.createElement("li",null,"\u6808\u5e95\u6c38\u8fdc\u662f\u5168\u5c40\u4e0a\u4e0b\u6587\uff0c\u6808\u9876\u4e3a\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u4e0a\u4e0b\u6587"),l.a.createElement("li",null,"\u5f53\u5f00\u542f\u4e00\u4e2a\u51fd\u6570\u6267\u884c\u65f6\u4f1a\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u5e76\u653e\u5165\u8c03\u7528\u6808\uff0c\u6267\u884c\u5b8c\u6bd5\u540e\u4f1a\u81ea\u52a8\u51fa\u6808")),l.a.createElement(o["a"],{code:"function one() {\n    var a = 1;\n    debugger;\n    function two() {\n        var b = 1;\n        debugger;\n        function three() {\n            var c = 1;\n            debugger;\n        }\n        three();\n        debugger;\n    }\n    two();\n    debugger;\n}\none();",lang:"js"}),l.a.createElement(o["a"],{code:"var globalExecuteContext = {\n    VO: { setTimeout: 'setTimeout' }\n}\nvar executeContextStack = [globalExecuteContext];\nvar oneExecuteContext = {\n    VO: { a: 1 }\n}\nexecuteContextStack.push(oneExecuteContext);\nvar twoExecuteContext = {\n    VO: { b: 2 }\n}\nexecuteContextStack.push(twoExecuteContext);\nvar threeExecuteContext = {\n    VO: { c: 3 }\n}\nexecuteContextStack.push(threeExecuteContext);\nconsole.log(executeContextStack);\n\nexecuteContextStack.pop();\nexecuteContextStack.pop();\nexecuteContextStack.pop();",lang:"js"}),l.a.createElement("h2",{id:"6-\u6267\u884c\u4e0a\u4e0b\u6587\u751f\u547d\u5468\u671f"},l.a.createElement(c["AnchorLink"],{to:"#6-\u6267\u884c\u4e0a\u4e0b\u6587\u751f\u547d\u5468\u671f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"6. \u6267\u884c\u4e0a\u4e0b\u6587\u751f\u547d\u5468\u671f"),l.a.createElement("h3",{id:"61-\u751f\u547d\u5468\u671f\u6709\u4e24\u4e2a\u9636\u6bb5"},l.a.createElement(c["AnchorLink"],{to:"#61-\u751f\u547d\u5468\u671f\u6709\u4e24\u4e2a\u9636\u6bb5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"6.1 \u751f\u547d\u5468\u671f\u6709\u4e24\u4e2a\u9636\u6bb5"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4e00\u4e2a\u65b0\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u7684\u751f\u547d\u5468\u671f\u6709\u4e24\u4e2a\u9636\u6bb5",l.a.createElement("ul",null,l.a.createElement("li",null,"\u521b\u5efa\u9636\u6bb5",l.a.createElement("ul",null,l.a.createElement("li",null,"\u521b\u5efa\u53d8\u91cf\u5bf9\u8c61"),l.a.createElement("li",null,"\u786e\u5b9a\u4f5c\u7528\u57df\u94fe"),l.a.createElement("li",null,"\u786e\u5b9a",l.a.createElement("code",null,"this"),"\u6307\u5411"))),l.a.createElement("li",null,"\u6267\u884c\u9636\u6bb5",l.a.createElement("ul",null,l.a.createElement("li",null,"\u53d8\u91cf\u8d4b\u503c"),l.a.createElement("li",null,"\u51fd\u6570\u8d4b\u503c"),l.a.createElement("li",null,"\u4ee3\u7801\u6267\u884c")))))),l.a.createElement("h3",{id:"62-\u53d8\u91cf\u5bf9\u8c61"},l.a.createElement(c["AnchorLink"],{to:"#62-\u53d8\u91cf\u5bf9\u8c61","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"6.2 \u53d8\u91cf\u5bf9\u8c61"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u53d8\u91cf\u5bf9\u8c61\u4f1a\u4fdd\u5b58\u53d8\u91cf\u58f0\u660e(var)\u3001\u51fd\u6570\u53c2\u6570(arguments)\u3001\u51fd\u6570\u5b9a\u4e49(function)",l.a.createElement("ul",null,l.a.createElement("li",null,"\u53d8\u91cf\u5bf9\u8c61\u4f1a\u9996\u5148\u83b7\u5f97\u51fd\u6570\u7684\u53c2\u6570\u53d8\u91cf\u548c\u503c"),l.a.createElement("li",null,"\u83b7\u53d6\u6240\u6709\u7528",l.a.createElement("code",null,"function"),"\u8fdb\u884c\u7684\u51fd\u6570\u58f0\u660e\uff0c\u51fd\u6570\u540d\u4e3a\u53d8\u91cf\u5bf9\u8c61\u7684\u5c5e\u6027\u540d\uff0c\u503c\u4e3a\u51fd\u6570\u5bf9\u8c61,\u5982\u679c\u5c5e\u6027\u5df2\u7ecf\u5b58\u5728\uff0c\u503c\u4f1a\u7528\u65b0\u503c\u8986\u76d6"),l.a.createElement("li",null,"\u518d\u4f9d\u6b21\u6240\u6709\u7684var\u5173\u952e\u5b57\u8fdb\u884c\u7684\u53d8\u91cf\u58f0\u660e\uff0c\u6bcf\u627e\u5230\u4e00\u4e2a\u53d8\u91cf\u58f0\u660e\uff0c\u5c31\u4f1a\u5728\u53d8\u91cf\u5bf9\u8c61\u4e0a\u5efa\u4e00\u4e2a\u5c5e\u6027\uff0c\u503c\u4e3a",l.a.createElement("code",null,"undefined"),",\u5982\u679c\u53d8\u91cf\u540d\u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u4f1a\u8df3\u8fc7\uff0c\u5e76\u4e0d\u4f1a\u4fee\u6539\u539f\u5c5e\u6027\u503c,",l.a.createElement("code",null,"let"),"\u58f0\u660e\u7684\u53d8\u91cf\u5e76\u4e0d\u4f1a\u5728\u6b64\u9636\u6bb5\u8fdb\u884c\u5904\u7406"))),l.a.createElement("li",null,"\u51fd\u6570\u58f0\u660e\u4f18\u5148\u7ea7\u66f4\u9ad8\uff0c\u540c\u540d\u7684\u51fd\u6570\u4f1a\u8986\u76d6\u51fd\u6570\u548c\u53d8\u91cf\uff0c\u4f46\u540c\u540d",l.a.createElement("code",null,"var"),"\u53d8\u91cf\u5e76\u4e0d\u4f1a\u8986\u76d6\u51fd\u6570.\u6267\u884c\u9636\u6bb5\u91cd\u65b0\u8d4b\u503c\u53ef\u4ee5\u6539\u53d8\u539f\u6709\u7684\u503c")),l.a.createElement("h4",{id:"621-\u57fa\u672c\u7c7b\u578b"},l.a.createElement(c["AnchorLink"],{to:"#621-\u57fa\u672c\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"6.2.1 \u57fa\u672c\u7c7b\u578b"),l.a.createElement(o["a"],{code:"console.log(a);\nvar a = 1;",lang:"js"}),l.a.createElement(o["a"],{code:"var a = undefined;//\u53d8\u91cf\u63d0\u5347 \nconsole.log(a); \na = 1;",lang:"js"}),l.a.createElement("h4",{id:"622-\u53d8\u91cf\u63d0\u5347"},l.a.createElement(c["AnchorLink"],{to:"#622-\u53d8\u91cf\u63d0\u5347","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"6.2.2 \u53d8\u91cf\u63d0\u5347"),l.a.createElement(o["a"],{code:"var a = 1;\nfunction fn(m) { console.log('fn'); }\nfunction fn(m) { console.log('new_fn'); }\nfunction a() { console.log('fn_a'); }\nconsole.log(a);\nfn(1);\nvar fn = 'var_fn';\nconsole.log(fn);\n//1\n//new_fn\n//var_fn",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u771f\u6b63\u6267\u884c")),l.a.createElement(o["a"],{code:"// \u521b\u5efa\u9636\u6bb5\nfunction fn(m) { console.log('fn'); }\nfunction fn(m) { console.log('new_fn'); }\nfunction a() { console.log('fn_a'); }\nvar a = undefined;\nvar fn = undefined;\n//\u6267\u884c\u9636\u6bb5\na = 1;\nconsole.log(a);\nfn();\nfn = 'var_fn';\nconsole.log(fn);",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4e0a\u4e0b\u6587")),l.a.createElement(o["a"],{code:"// \u521b\u5efa\u9636\u6bb5\nvar globalEC = {\n    VO: {\n        ...arguments,\n        a: () => { console.log('fn_a'); },\n        fn: () => { console.log('new_fn'); }\n    }\n}\nvar ECStack = [globalEC];\n//\u6267\u884c\u9636\u6bb5\nglobalEC.VO.a = 1;\nconsole.log(globalEC.VO.a);\nglobalEC.VO.fn();\nglobalEC.VO.fn = 'var_fn';\nconsole.log(globalEC.VO.fn);",lang:"js"}),l.a.createElement("h4",{id:"623-\u6fc0\u6d3b\u5bf9\u8c61"},l.a.createElement(c["AnchorLink"],{to:"#623-\u6fc0\u6d3b\u5bf9\u8c61","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"6.2.3 \u6fc0\u6d3b\u5bf9\u8c61"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5728\u51fd\u6570\u7684\u8c03\u7528\u6808\u4e2d\uff0c\u5982\u679c\u5f53\u524d\u6267\u884c\u4e0a\u4e0b\u6587\u5904\u4e8e\u51fd\u6570\u8c03\u7528\u6808\u7684\u9876\u7aef\uff0c\u5219\u610f\u5473\u7740\u5f53\u524d\u4e0a\u4e0b\u6587\u5904\u4e8e\u6fc0\u6d3b\u72b6\u6001\uff0c\u6b64\u65f6\u53d8\u91cf\u5bf9\u8c61\u79f0\u4e3a\u6d3b\u52a8\u5bf9\u8c61(AO,Activation Object) VO=>AO"),l.a.createElement("li",null,"\u6d3b\u52a8\u53d8\u91cf\u5305\u542b\u53d8\u91cf\u5bf9\u8c61\u6240\u6709\u7684\u5c5e\u6027\uff0c\u5e76\u6709\u5305\u542b",l.a.createElement("code",null,"this"),"\u6307\u9488")),l.a.createElement(o["a"],{code:"function one(m) {\n    function two() {\n        console.log('two');\n    }\n}\none(1);\n\n//\u6267\u884c\u9636\u6bb5 VO=>AO\nlet VO = AO = {\n    m:1,\n    two: () => { console.log('two'); },\n\n}\nlet oneEC={\n    VO,\n    this: window,\n    scopeChain:[VO,globalVO]\n}",lang:"js"}),l.a.createElement("h4",{id:"624-\u5168\u5c40\u4e0a\u4e0b\u6587\u7684\u53d8\u91cf\u5bf9\u8c61"},l.a.createElement(c["AnchorLink"],{to:"#624-\u5168\u5c40\u4e0a\u4e0b\u6587\u7684\u53d8\u91cf\u5bf9\u8c61","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"6.2.4 \u5168\u5c40\u4e0a\u4e0b\u6587\u7684\u53d8\u91cf\u5bf9\u8c61"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5728\u6d4f\u89c8\u5668\u91cc\uff0c\u5168\u5c40\u5bf9\u8c61\u4e3a",l.a.createElement("code",null,"window")),l.a.createElement("li",null,"\u5168\u5c40\u4e0a\u4e0b\u6587\u7684\u53d8\u91cf\u5bf9\u8c61\u4e3a",l.a.createElement("code",null,"window"),",\u800c\u4e14\u8fd9\u4e2a\u53d8\u91cf\u5bf9\u8c61\u4e0d\u80fd\u6fc0\u6d3b\u53d8\u6210\u6d3b\u52a8\u5bf9\u8c61"),l.a.createElement("li",null,"\u53ea\u5728\u7a97\u53e3\u6253\u5f00\uff0c\u5168\u5c40\u4e0a\u4e0b\u6587\u4f1a\u4e00\u76f4\u5b58\u5728\uff0c\u6240\u6709\u7684\u4e0a\u4e0b\u6587\u90fd\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u5168\u5c40\u4e0a\u4e0b\u6587\u53d8\u91cf\u5bf9\u8c61\u4e0a\u7684\u5c5e\u6027"),l.a.createElement("li",null,"\u53ea\u6709\u5168\u5c40\u4e0a\u4e0b\u6587\u7684\u53d8\u91cf\u5bf9\u8c61\u5141\u8bb8\u901a\u8fc7VO\u7684\u5c5e\u6027\u540d\u79f0\u6765\u95f4\u63a5\u8bbf\u95ee\uff0c\u5728\u51fd\u6570\u4e0a\u4e0b\u6587\u4e2d\u662f\u4e0d\u80fd\u76f4\u63a5\u8bbf\u95eeVO\u5bf9\u8c61\u7684"),l.a.createElement("li",null,"\u672a\u8fdb\u5165\u6267\u884c\u9636\u6bb5\u524d\uff0c\u53d8\u91cf\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027\u90fd\u4e0d\u80fd\u8bbf\u95ee\uff01\u4f46\u662f\u8fdb\u5165\u5230\u6267\u884c\u9636\u6bb5\u4e4b\u540e\uff0c\u53d8\u91cf\u5bf9\u8c61\u8f6c\u53d8\u6210\u4e86\u6d3b\u52a8\u5bf9\u8c61\uff0c\u91cc\u9762\u7684\u5c5e\u6027\u90fd\u80fd\u88ab\u8bbf\u95ee\u4e86,\u5bf9\u4e8e\u51fd\u6570\u4e0a\u4e0b\u6587\u6765\u8bb2\uff0c\u6d3b\u52a8\u5bf9\u8c61\u4e0e\u53d8\u91cf\u5bf9\u8c61\u5176\u5b9e\u90fd\u662f\u540c\u4e00\u4e2a\u5bf9\u8c61,\u53ea\u662f\u5904\u4e8e\u6267\u884c\u4e0a\u4e0b\u6587\u7684\u4e0d\u540c\u751f\u547d\u5468\u671f")),l.a.createElement("h2",{id:"7-\u4f5c\u7528\u57df"},l.a.createElement(c["AnchorLink"],{to:"#7-\u4f5c\u7528\u57df","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7. \u4f5c\u7528\u57df"),l.a.createElement("h3",{id:"71-\u4f5c\u7528\u57df"},l.a.createElement(c["AnchorLink"],{to:"#71-\u4f5c\u7528\u57df","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7.1 \u4f5c\u7528\u57df"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5728JS\u4e2d\uff0c\u4f5c\u7528\u57df\u662f\u7528\u6765\u89c4\u5b9a\u53d8\u91cf\u8bbf\u95ee\u8303\u56f4\u7684\u89c4\u5219")),l.a.createElement(o["a"],{code:"function one() {\n    var a = 1;\n}\nconsole.log(a);",lang:"js"}),l.a.createElement("h3",{id:"72-\u4f5c\u7528\u57df\u94fe"},l.a.createElement(c["AnchorLink"],{to:"#72-\u4f5c\u7528\u57df\u94fe","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7.2 \u4f5c\u7528\u57df\u94fe"),l.a.createElement("h4",{id:"721-\u4f5c\u7528\u57df\u94fe"},l.a.createElement(c["AnchorLink"],{to:"#721-\u4f5c\u7528\u57df\u94fe","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7.2.1 \u4f5c\u7528\u57df\u94fe"),l.a.createElement(o["a"],{code:"function one() {\n    var a = 1;\n    function two() {\n        var b = 2;\n        function three() {\n            var c = 3;\n            console.log(a, b, c);\n        }\n        three();\n    }\n    two();\n}\none();",lang:"js"}),l.a.createElement(o["a"],{code:"// 1.\u521b\u5efa\u5168\u5c40\u4e0a\u4e0b\u6587\nvar globalExecuteContextVO = { one: `()=>{var a = 1;}` }\nvar globalExecuteContext = {\n    VO: globalExecuteContextVO,\n    scopeChain: [globalExecuteContextVO]\n}\nvar executeContextStack = [globalExecuteContext];\n//2.\u6267\u884cone\uff0c\u521b\u5efaone\u6267\u884c\u4e0a\u4e0b\u6587\nvar oneExecuteContextVO = {\n    a: 1,\n    two: `()=>{var b = 2 ;}`\n}\nvar oneExecuteContext = {\n    VO: oneExecuteContextVO,\n    scopeChain: [oneExecuteContextVO, globalExecuteContext.VO]\n}\n//2.\u6267\u884ctwo\uff0c\u521b\u5efatwo\u6267\u884c\u4e0a\u4e0b\u6587\nvar twoExecuteContextVO = {\n    b: 2,\n    three: `()=>{var c = 3 ;}`\n}\nvar twoExecuteContext = {\n    VO: twoExecuteContextVO,\n    scopeChain: [twoExecuteContextVO, oneExecuteContext.VO, globalExecuteContext.VO]\n}\n//3.\u6267\u884cthree\uff0c\u521b\u5efathree\u6267\u884c\u4e0a\u4e0b\u6587\nvar threeExecuteContextVO = {\n    c: 3\n}\nvar threeExecuteContext = {\n    VO: threeExecuteContextVO,\n    scopeChain: [threeExecuteContextVO, twoExecuteContext.VO, oneExecuteContext.VO, globalExecuteContext.VO]\n}\nfunction getValue(varName) {\n    for (let i = 0; i < threeExecuteContext.scopeChain.length; i++) {\n        if (varName in threeExecuteContext.scopeChain[i]) {\n            return threeExecuteContext.scopeChain[i][varName];\n        }\n    }\n}\n//console.log(a, b, c);\nconsole.log(\n    getValue('a'),\n    getValue('b'),\n    getValue('c'),\n);",lang:"js"}),l.a.createElement("h4",{id:"722-\u4f5c\u7528\u57df\u94fe"},l.a.createElement(c["AnchorLink"],{to:"#722-\u4f5c\u7528\u57df\u94fe","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"7.2.2 \u4f5c\u7528\u57df\u94fe"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"scopeChain"),"\u5176\u5b9e\u662f\u5728\u521b\u5efa\u51fd\u6570\u7684\u65f6\u5019\u786e\u5b9a\u7684")),l.a.createElement(o["a"],{code:"function one() {\n    var a = 1;\n    function two() {\n        console.log(a);\n    }\n    return two;\n}\nvar a = 2;\nvar two = one();\ntwo();",lang:"js"}),l.a.createElement(o["a"],{code:"// 1.\u521b\u5efa\u5168\u5c40\u4e0a\u4e0b\u6587\nvar globalExecuteContextVO = { one: `()=>{var a = 1;}`, a: undefined, two: undefined }\nvar globalExecuteContext = {\n    VO: globalExecuteContextVO,\n    scopeChain: [globalExecuteContextVO]\n}\n//2.\u5f00\u59cb\u6267\u884c\nglobalExecuteContextVO.a = 2;\n//3.\u5f00\u59cb\u6267\u884cone\nvar oneExecuteContextVO = { a: undefined, two: `()=>{console.log(a)}` }\nvar oneExecuteContext = {\n    VO: oneExecuteContextVO,\n    scopeChain: [oneExecuteContextVO, globalExecuteContextVO]\n}\noneExecuteContextVO.a = 1;\n//4.\u7ed9two\u8d4b\u503c\nglobalExecuteContextVO.two = oneExecuteContextVO.two;\n//5.\u6267\u884ctwo\nvar twoExecuteContextVO = {}\nvar twoExecuteContext = {\n    VO: twoExecuteContextVO,\n    //scopeChain\u662f\u5728\u521b\u5efa\u6b64\u51fd\u6570\u636e\u7684\u65f6\u5019\u5c31\u51b3\u5b9a\u4e86,\u8ddf\u5728\u54ea\u91cc\u6267\u884c\u65e0\u5173\n    scopeChain: [twoExecuteContextVO, oneExecuteContextVO, globalExecuteContextVO]\n}",lang:"js"})))}));n["default"]=e=>{var n=l.a.useContext(c["context"]),t=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(i,{demos:t})}}}]);