(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[81],{CAUB:function(e,n,l){"use strict";l.r(n);var a=l("q1tI"),t=l.n(a),c=l("dEAq"),r=l("H1Ra"),m=t.a.memo((e=>{e.demos;return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"tcp"},t.a.createElement(c["AnchorLink"],{to:"#tcp","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"TCP"),t.a.createElement("p",null,"\u9996\u5148\u8fd8\u662f\u5148\u6765\u89e3\u7b54\u8fd9\u4e2a\u5e38\u8003\u9762\u8bd5\u9898\u5173\u4e8e TCP \u90e8\u5206\u7684\u5185\u5bb9\uff0c\u7136\u540e\u518d\u8be6\u7ec6\u53bb\u5b66\u4e60\u8fd9\u4e2a\u534f\u8bae\u3002"),t.a.createElement(r["a"],{code:"\u5e38\u8003\u9762\u8bd5\u9898\uff1aUDP \u4e0e TCP \u7684\u533a\u522b\u662f\u4ec0\u4e48\uff1f",lang:"unknown"}),t.a.createElement("p",null,"TCP \u57fa\u672c\u662f\u548c UDP \u53cd\u7740\u6765\uff0c\u5efa\u7acb\u8fde\u63a5\u65ad\u5f00\u8fde\u63a5\u90fd\u9700\u8981\u5148\u9700\u8981\u8fdb\u884c\u63e1\u624b\u3002\u5728\u4f20\u8f93\u6570\u636e\u7684\u8fc7\u7a0b\u4e2d\uff0c\u901a\u8fc7\u5404\u79cd\u7b97\u6cd5\u4fdd\u8bc1\u6570\u636e\u7684\u53ef\u9760\u6027\uff0c\u5f53\u7136\u5e26\u6765\u7684\u95ee\u9898\u5c31\u662f\u76f8\u6bd4 UDP \u6765\u8bf4\u4e0d\u90a3\u4e48\u7684\u9ad8\u6548\u3002"),t.a.createElement("h2",{id:"\u5934\u90e8"},t.a.createElement(c["AnchorLink"],{to:"#\u5934\u90e8","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5934\u90e8"),t.a.createElement("p",null,"\u4ece\u8fd9\u4e2a\u56fe\u4e0a\u6211\u4eec\u5c31\u53ef\u4ee5\u53d1\u73b0 TCP \u5934\u90e8\u6bd4 UDP \u5934\u90e8\u590d\u6742\u7684\u591a\u3002"),t.a.createElement("p",null,t.a.createElement("img",{src:"http://wuxiao-tech-doc.oss-cn-hangzhou.aliyuncs.com/2022-02-09-020210.jpg",alt:"img"})),t.a.createElement("p",null,"\u5bf9\u4e8e TCP \u5934\u90e8\u6765\u8bf4\uff0c\u4ee5\u4e0b\u51e0\u4e2a\u5b57\u6bb5\u662f\u5f88\u91cd\u8981\u7684"),t.a.createElement("ul",null,t.a.createElement("li",null,"Sequence number\uff0c\u8fd9\u4e2a\u5e8f\u53f7\u4fdd\u8bc1\u4e86 TCP \u4f20\u8f93\u7684\u62a5\u6587\u90fd\u662f\u6709\u5e8f\u7684\uff0c\u5bf9\u7aef\u53ef\u4ee5\u901a\u8fc7\u5e8f\u53f7\u987a\u5e8f\u7684\u62fc\u63a5\u62a5\u6587"),t.a.createElement("li",null,"Acknowledgement Number\uff0c\u8fd9\u4e2a\u5e8f\u53f7\u8868\u793a\u6570\u636e\u63a5\u6536\u7aef\u671f\u671b\u63a5\u6536\u7684\u4e0b\u4e00\u4e2a\u5b57\u8282\u7684\u7f16\u53f7\u662f\u591a\u5c11\uff0c\u540c\u65f6\u4e5f\u8868\u793a\u4e0a\u4e00\u4e2a\u5e8f\u53f7\u7684\u6570\u636e\u5df2\u7ecf\u6536\u5230"),t.a.createElement("li",null,"Window Size\uff0c\u7a97\u53e3\u5927\u5c0f\uff0c\u8868\u793a\u8fd8\u80fd\u63a5\u6536\u591a\u5c11\u5b57\u8282\u7684\u6570\u636e\uff0c\u7528\u4e8e\u6d41\u91cf\u63a7\u5236"),t.a.createElement("li",null,"\u6807\u8bc6\u7b26",t.a.createElement("ul",null,t.a.createElement("li",null,"URG=1\uff1a\u8be5\u5b57\u6bb5\u4e3a\u4e00\u8868\u793a\u672c\u6570\u636e\u62a5\u7684\u6570\u636e\u90e8\u5206\u5305\u542b\u7d27\u6025\u4fe1\u606f\uff0c\u662f\u4e00\u4e2a\u9ad8\u4f18\u5148\u7ea7\u6570\u636e\u62a5\u6587\uff0c\u6b64\u65f6\u7d27\u6025\u6307\u9488\u6709\u6548\u3002\u7d27\u6025\u6570\u636e\u4e00\u5b9a\u4f4d\u4e8e\u5f53\u524d\u6570\u636e\u5305\u6570\u636e\u90e8\u5206\u7684\u6700\u524d\u9762\uff0c\u7d27\u6025\u6307\u9488\u6807\u660e\u4e86\u7d27\u6025\u6570\u636e\u7684\u5c3e\u90e8\u3002"),t.a.createElement("li",null,"ACK=1\uff1a\u8be5\u5b57\u6bb5\u4e3a\u4e00\u8868\u793a\u786e\u8ba4\u53f7\u5b57\u6bb5\u6709\u6548\u3002\u6b64\u5916\uff0cTCP \u8fd8\u89c4\u5b9a\u5728\u8fde\u63a5\u5efa\u7acb\u540e\u4f20\u9001\u7684\u6240\u6709\u62a5\u6587\u6bb5\u90fd\u5fc5\u987b\u628a ACK \u7f6e\u4e3a\u4e00\u3002"),t.a.createElement("li",null,"PSH=1\uff1a\u8be5\u5b57\u6bb5\u4e3a\u4e00\u8868\u793a\u63a5\u6536\u7aef\u5e94\u8be5\u7acb\u5373\u5c06\u6570\u636e push \u7ed9\u5e94\u7528\u5c42\uff0c\u800c\u4e0d\u662f\u7b49\u5230\u7f13\u51b2\u533a\u6ee1\u540e\u518d\u63d0\u4ea4\u3002"),t.a.createElement("li",null,"RST=1\uff1a\u8be5\u5b57\u6bb5\u4e3a\u4e00\u8868\u793a\u5f53\u524d TCP \u8fde\u63a5\u51fa\u73b0\u4e25\u91cd\u95ee\u9898\uff0c\u53ef\u80fd\u9700\u8981\u91cd\u65b0\u5efa\u7acb TCP \u8fde\u63a5\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e8e\u62d2\u7edd\u975e\u6cd5\u7684\u62a5\u6587\u6bb5\u548c\u62d2\u7edd\u8fde\u63a5\u8bf7\u6c42\u3002"),t.a.createElement("li",null,"SYN=1\uff1a\u5f53SYN=1\uff0cACK=0\u65f6\uff0c\u8868\u793a\u5f53\u524d\u62a5\u6587\u6bb5\u662f\u4e00\u4e2a\u8fde\u63a5\u8bf7\u6c42\u62a5\u6587\u3002\u5f53SYN=1\uff0cACK=1\u65f6\uff0c\u8868\u793a\u5f53\u524d\u62a5\u6587\u6bb5\u662f\u4e00\u4e2a\u540c\u610f\u5efa\u7acb\u8fde\u63a5\u7684\u5e94\u7b54\u62a5\u6587\u3002"),t.a.createElement("li",null,"FIN=1\uff1a\u8be5\u5b57\u6bb5\u4e3a\u4e00\u8868\u793a\u6b64\u62a5\u6587\u6bb5\u662f\u4e00\u4e2a\u91ca\u653e\u8fde\u63a5\u7684\u8bf7\u6c42\u62a5\u6587\u3002")))),t.a.createElement("h2",{id:"\u72b6\u6001\u673a"},t.a.createElement(c["AnchorLink"],{to:"#\u72b6\u6001\u673a","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u72b6\u6001\u673a"),t.a.createElement("p",null,"TCP \u7684\u72b6\u6001\u673a\u662f\u5f88\u590d\u6742\u7684\uff0c\u5e76\u4e14\u4e0e\u5efa\u7acb\u65ad\u5f00\u8fde\u63a5\u65f6\u7684\u63e1\u624b\u606f\u606f\u76f8\u5173\uff0c\u63a5\u4e0b\u6765\u5c31\u6765\u8be6\u7ec6\u63cf\u8ff0\u4e0b\u4e24\u79cd\u63e1\u624b\u3002"),t.a.createElement("p",null,t.a.createElement("img",{src:"http://wuxiao-tech-doc.oss-cn-hangzhou.aliyuncs.com/2022-02-09-020216.jpg",alt:"img"})),t.a.createElement("p",null,"\u5728\u8fd9\u4e4b\u524d\u9700\u8981\u4e86\u89e3\u4e00\u4e2a\u91cd\u8981\u7684\u6027\u80fd\u6307\u6807 RTT\u3002\u8be5\u6307\u6807\u8868\u793a\u53d1\u9001\u7aef\u53d1\u9001\u6570\u636e\u5230\u63a5\u6536\u5230\u5bf9\u7aef\u6570\u636e\u6240\u9700\u7684\u5f80\u8fd4\u65f6\u95f4\u3002"),t.a.createElement("h3",{id:"\u5efa\u7acb\u8fde\u63a5\u4e09\u6b21\u63e1\u624b"},t.a.createElement(c["AnchorLink"],{to:"#\u5efa\u7acb\u8fde\u63a5\u4e09\u6b21\u63e1\u624b","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5efa\u7acb\u8fde\u63a5\u4e09\u6b21\u63e1\u624b"),t.a.createElement("p",null,"\u9996\u5148\u5047\u8bbe\u4e3b\u52a8\u53d1\u8d77\u8bf7\u6c42\u7684\u4e00\u7aef\u79f0\u4e3a\u5ba2\u6237\u7aef\uff0c\u88ab\u52a8\u8fde\u63a5\u7684\u4e00\u7aef\u79f0\u4e3a\u670d\u52a1\u7aef\u3002\u4e0d\u7ba1\u662f\u5ba2\u6237\u7aef\u8fd8\u662f\u670d\u52a1\u7aef\uff0cTCP \u8fde\u63a5\u5efa\u7acb\u5b8c\u540e\u90fd\u80fd\u53d1\u9001\u548c\u63a5\u6536\u6570\u636e\uff0c\u6240\u4ee5 TCP \u662f\u4e00\u4e2a\u5168\u53cc\u5de5\u7684\u534f\u8bae\u3002"),t.a.createElement("p",null,"\u8d77\u521d\uff0c\u4e24\u7aef\u90fd\u4e3a CLOSED \u72b6\u6001\u3002\u5728\u901a\u4fe1\u5f00\u59cb\u524d\uff0c\u53cc\u65b9\u90fd\u4f1a\u521b\u5efa TCB\u3002 \u670d\u52a1\u5668\u521b\u5efa\u5b8c TCB \u540e\u4fbf\u8fdb\u5165 LISTEN \u72b6\u6001\uff0c\u6b64\u65f6\u5f00\u59cb\u7b49\u5f85\u5ba2\u6237\u7aef\u53d1\u9001\u6570\u636e\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u7b2c\u4e00\u6b21\u63e1\u624b")),t.a.createElement("p",null,"\u5ba2\u6237\u7aef\u5411\u670d\u52a1\u7aef\u53d1\u9001\u8fde\u63a5\u8bf7\u6c42\u62a5\u6587\u6bb5\u3002\u8be5\u62a5\u6587\u6bb5\u4e2d\u5305\u542b\u81ea\u8eab\u7684\u6570\u636e\u901a\u8baf\u521d\u59cb\u5e8f\u53f7\u3002\u8bf7\u6c42\u53d1\u9001\u540e\uff0c\u5ba2\u6237\u7aef\u4fbf\u8fdb\u5165 SYN-SENT \u72b6\u6001\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u7b2c\u4e8c\u6b21\u63e1\u624b")),t.a.createElement("p",null,"\u670d\u52a1\u7aef\u6536\u5230\u8fde\u63a5\u8bf7\u6c42\u62a5\u6587\u6bb5\u540e\uff0c\u5982\u679c\u540c\u610f\u8fde\u63a5\uff0c\u5219\u4f1a\u53d1\u9001\u4e00\u4e2a\u5e94\u7b54\uff0c\u8be5\u5e94\u7b54\u4e2d\u4e5f\u4f1a\u5305\u542b\u81ea\u8eab\u7684\u6570\u636e\u901a\u8baf\u521d\u59cb\u5e8f\u53f7\uff0c\u53d1\u9001\u5b8c\u6210\u540e\u4fbf\u8fdb\u5165 SYN-RECEIVED \u72b6\u6001\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u7b2c\u4e09\u6b21\u63e1\u624b")),t.a.createElement("p",null,"\u5f53\u5ba2\u6237\u7aef\u6536\u5230\u8fde\u63a5\u540c\u610f\u7684\u5e94\u7b54\u540e\uff0c\u8fd8\u8981\u5411\u670d\u52a1\u7aef\u53d1\u9001\u4e00\u4e2a\u786e\u8ba4\u62a5\u6587\u3002\u5ba2\u6237\u7aef\u53d1\u5b8c\u8fd9\u4e2a\u62a5\u6587\u6bb5\u540e\u4fbf\u8fdb\u5165 ESTABLISHED \u72b6\u6001\uff0c\u670d\u52a1\u7aef\u6536\u5230\u8fd9\u4e2a\u5e94\u7b54\u540e\u4e5f\u8fdb\u5165 ESTABLISHED \u72b6\u6001\uff0c\u6b64\u65f6\u8fde\u63a5\u5efa\u7acb\u6210\u529f\u3002"),t.a.createElement("p",null,"PS\uff1a\u7b2c\u4e09\u6b21\u63e1\u624b\u4e2d\u53ef\u4ee5\u5305\u542b\u6570\u636e\uff0c\u901a\u8fc7\u5feb\u901f\u6253\u5f00\uff08TFO\uff09\u6280\u672f\u5c31\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u4e00\u529f\u80fd\u3002\u5176\u5b9e\u53ea\u8981\u6d89\u53ca\u5230\u63e1\u624b\u7684\u534f\u8bae\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528\u7c7b\u4f3c TFO \u7684\u65b9\u5f0f\uff0c\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u5b58\u50a8\u76f8\u540c\u7684 cookie\uff0c\u4e0b\u6b21\u63e1\u624b\u65f6\u53d1\u51fa cookie \u8fbe\u5230\u51cf\u5c11 RTT \u7684\u76ee\u7684\u3002"),t.a.createElement(r["a"],{code:"\u5e38\u8003\u9762\u8bd5\u9898\uff1a\u4e3a\u4ec0\u4e48 TCP \u5efa\u7acb\u8fde\u63a5\u9700\u8981\u4e09\u6b21\u63e1\u624b\uff0c\u660e\u660e\u4e24\u6b21\u5c31\u53ef\u4ee5\u5efa\u7acb\u8d77\u8fde\u63a5",lang:"unknown"}),t.a.createElement("p",null,"\u56e0\u4e3a\u8fd9\u662f\u4e3a\u4e86\u9632\u6b62\u51fa\u73b0\u5931\u6548\u7684\u8fde\u63a5\u8bf7\u6c42\u62a5\u6587\u6bb5\u88ab\u670d\u52a1\u7aef\u63a5\u6536\u7684\u60c5\u51b5\uff0c\u4ece\u800c\u4ea7\u751f\u9519\u8bef\u3002"),t.a.createElement("p",null,"\u53ef\u4ee5\u60f3\u8c61\u5982\u4e0b\u573a\u666f\u3002\u5ba2\u6237\u7aef\u53d1\u9001\u4e86\u4e00\u4e2a\u8fde\u63a5\u8bf7\u6c42 A\uff0c\u4f46\u662f\u56e0\u4e3a\u7f51\u7edc\u539f\u56e0\u9020\u6210\u4e86\u8d85\u65f6\uff0c\u8fd9\u65f6 TCP \u4f1a\u542f\u52a8\u8d85\u65f6\u91cd\u4f20\u7684\u673a\u5236\u518d\u6b21\u53d1\u9001\u4e00\u4e2a\u8fde\u63a5\u8bf7\u6c42 B\u3002\u6b64\u65f6\u8bf7\u6c42\u987a\u5229\u5230\u8fbe\u670d\u52a1\u7aef\uff0c\u670d\u52a1\u7aef\u5e94\u7b54\u5b8c\u5c31\u5efa\u7acb\u4e86\u8bf7\u6c42\uff0c\u7136\u540e\u63a5\u6536\u6570\u636e\u540e\u91ca\u653e\u4e86\u8fde\u63a5\u3002"),t.a.createElement("p",null,"\u5047\u8bbe\u8fd9\u65f6\u5019\u8fde\u63a5\u8bf7\u6c42 A \u5728\u4e24\u7aef\u5173\u95ed\u540e\u7ec8\u4e8e\u62b5\u8fbe\u4e86\u670d\u52a1\u7aef\uff0c\u90a3\u4e48\u6b64\u65f6\u670d\u52a1\u7aef\u4f1a\u8ba4\u4e3a\u5ba2\u6237\u7aef\u53c8\u9700\u8981\u5efa\u7acb TCP \u8fde\u63a5\uff0c\u4ece\u800c\u5e94\u7b54\u4e86\u8be5\u8bf7\u6c42\u5e76\u8fdb\u5165 ESTABLISHED \u72b6\u6001\u3002\u4f46\u662f\u5ba2\u6237\u7aef\u5176\u5b9e\u662f CLOSED \u7684\u72b6\u6001\uff0c\u90a3\u4e48\u5c31\u4f1a\u5bfc\u81f4\u670d\u52a1\u7aef\u4e00\u76f4\u7b49\u5f85\uff0c\u9020\u6210\u8d44\u6e90\u7684\u6d6a\u8d39\u3002"),t.a.createElement("p",null,"PS\uff1a\u5728\u5efa\u7acb\u8fde\u63a5\u4e2d\uff0c\u4efb\u610f\u4e00\u7aef\u6389\u7ebf\uff0cTCP \u90fd\u4f1a\u91cd\u53d1 SYN \u5305\uff0c\u4e00\u822c\u4f1a\u91cd\u8bd5\u4e94\u6b21\uff0c\u5728\u5efa\u7acb\u8fde\u63a5\u4e2d\u53ef\u80fd\u4f1a\u9047\u5230 SYN Flood \u653b\u51fb\u3002\u9047\u5230\u8fd9\u79cd\u60c5\u51b5\u4f60\u53ef\u4ee5\u9009\u62e9\u8c03\u4f4e\u91cd\u8bd5\u6b21\u6570\u6216\u8005\u5e72\u8106\u5728\u4e0d\u80fd\u5904\u7406\u7684\u60c5\u51b5\u4e0b\u62d2\u7edd\u8bf7\u6c42\u3002"),t.a.createElement("h3",{id:"\u65ad\u5f00\u94fe\u63a5\u56db\u6b21\u63e1\u624b"},t.a.createElement(c["AnchorLink"],{to:"#\u65ad\u5f00\u94fe\u63a5\u56db\u6b21\u63e1\u624b","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u65ad\u5f00\u94fe\u63a5\u56db\u6b21\u63e1\u624b"),t.a.createElement("p",null,t.a.createElement("img",{src:"http://wuxiao-tech-doc.oss-cn-hangzhou.aliyuncs.com/2022-02-09-020248.jpg",alt:"img"})),t.a.createElement("p",null,"TCP \u662f\u5168\u53cc\u5de5\u7684\uff0c\u5728\u65ad\u5f00\u8fde\u63a5\u65f6\u4e24\u7aef\u90fd\u9700\u8981\u53d1\u9001 FIN \u548c ACK\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u7b2c\u4e00\u6b21\u63e1\u624b")),t.a.createElement("p",null,"\u82e5\u5ba2\u6237\u7aef A \u8ba4\u4e3a\u6570\u636e\u53d1\u9001\u5b8c\u6210\uff0c\u5219\u5b83\u9700\u8981\u5411\u670d\u52a1\u7aef B \u53d1\u9001\u8fde\u63a5\u91ca\u653e\u8bf7\u6c42\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u7b2c\u4e8c\u6b21\u63e1\u624b")),t.a.createElement("p",null,"B \u6536\u5230\u8fde\u63a5\u91ca\u653e\u8bf7\u6c42\u540e\uff0c\u4f1a\u544a\u8bc9\u5e94\u7528\u5c42\u8981\u91ca\u653e TCP \u94fe\u63a5\u3002\u7136\u540e\u4f1a\u53d1\u9001 ACK \u5305\uff0c\u5e76\u8fdb\u5165 CLOSE_WAIT \u72b6\u6001\uff0c\u6b64\u65f6\u8868\u660e A \u5230 B \u7684\u8fde\u63a5\u5df2\u7ecf\u91ca\u653e\uff0c\u4e0d\u518d\u63a5\u6536 A \u53d1\u7684\u6570\u636e\u4e86\u3002\u4f46\u662f\u56e0\u4e3a TCP \u8fde\u63a5\u662f\u53cc\u5411\u7684\uff0c\u6240\u4ee5 B \u4ecd\u65e7\u53ef\u4ee5\u53d1\u9001\u6570\u636e\u7ed9 A\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u7b2c\u4e09\u6b21\u63e1\u624b")),t.a.createElement("p",null,"B \u5982\u679c\u6b64\u65f6\u8fd8\u6709\u6ca1\u53d1\u5b8c\u7684\u6570\u636e\u4f1a\u7ee7\u7eed\u53d1\u9001\uff0c\u5b8c\u6bd5\u540e\u4f1a\u5411 A \u53d1\u9001\u8fde\u63a5\u91ca\u653e\u8bf7\u6c42\uff0c\u7136\u540e B \u4fbf\u8fdb\u5165 LAST-ACK \u72b6\u6001\u3002"),t.a.createElement("p",null,"PS\uff1a\u901a\u8fc7\u5ef6\u8fdf\u786e\u8ba4\u7684\u6280\u672f\uff08\u901a\u5e38\u6709\u65f6\u95f4\u9650\u5236\uff0c\u5426\u5219\u5bf9\u65b9\u4f1a\u8bef\u8ba4\u4e3a\u9700\u8981\u91cd\u4f20\uff09\uff0c\u53ef\u4ee5\u5c06\u7b2c\u4e8c\u6b21\u548c\u7b2c\u4e09\u6b21\u63e1\u624b\u5408\u5e76\uff0c\u5ef6\u8fdf ACK \u5305\u7684\u53d1\u9001\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u7b2c\u56db\u6b21\u63e1\u624b")),t.a.createElement("p",null,"A \u6536\u5230\u91ca\u653e\u8bf7\u6c42\u540e\uff0c\u5411 B \u53d1\u9001\u786e\u8ba4\u5e94\u7b54\uff0c\u6b64\u65f6 A \u8fdb\u5165 TIME-WAIT \u72b6\u6001\u3002\u8be5\u72b6\u6001\u4f1a\u6301\u7eed 2MSL\uff08\u6700\u5927\u6bb5\u751f\u5b58\u671f\uff0c\u6307\u62a5\u6587\u6bb5\u5728\u7f51\u7edc\u4e2d\u751f\u5b58\u7684\u65f6\u95f4\uff0c\u8d85\u65f6\u4f1a\u88ab\u629b\u5f03\uff09 \u65f6\u95f4\uff0c\u82e5\u8be5\u65f6\u95f4\u6bb5\u5185\u6ca1\u6709 B \u7684\u91cd\u53d1\u8bf7\u6c42\u7684\u8bdd\uff0c\u5c31\u8fdb\u5165 CLOSED \u72b6\u6001\u3002\u5f53 B \u6536\u5230\u786e\u8ba4\u5e94\u7b54\u540e\uff0c\u4e5f\u4fbf\u8fdb\u5165 CLOSED \u72b6\u6001\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u4e3a\u4ec0\u4e48 A \u8981\u8fdb\u5165 TIME-WAIT \u72b6\u6001\uff0c\u7b49\u5f85 2MSL \u65f6\u95f4\u540e\u624d\u8fdb\u5165 CLOSED \u72b6\u6001\uff1f")),t.a.createElement("p",null,"\u4e3a\u4e86\u4fdd\u8bc1 B \u80fd\u6536\u5230 A \u7684\u786e\u8ba4\u5e94\u7b54\u3002\u82e5 A \u53d1\u5b8c\u786e\u8ba4\u5e94\u7b54\u540e\u76f4\u63a5\u8fdb\u5165 CLOSED \u72b6\u6001\uff0c\u5982\u679c\u786e\u8ba4\u5e94\u7b54\u56e0\u4e3a\u7f51\u7edc\u95ee\u9898\u4e00\u76f4\u6ca1\u6709\u5230\u8fbe\uff0c\u90a3\u4e48\u4f1a\u9020\u6210 B \u4e0d\u80fd\u6b63\u5e38\u5173\u95ed\u3002"),t.a.createElement("h2",{id:"arq-\u534f\u8bae"},t.a.createElement(c["AnchorLink"],{to:"#arq-\u534f\u8bae","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"ARQ \u534f\u8bae"),t.a.createElement("p",null,"ARQ \u534f\u8bae\u4e5f\u5c31\u662f\u8d85\u65f6\u91cd\u4f20\u673a\u5236\u3002\u901a\u8fc7\u786e\u8ba4\u548c\u8d85\u65f6\u673a\u5236\u4fdd\u8bc1\u4e86\u6570\u636e\u7684\u6b63\u786e\u9001\u8fbe\uff0cARQ \u534f\u8bae\u5305\u542b\u505c\u6b62\u7b49\u5f85 ARQ \u548c\u8fde\u7eed ARQ \u4e24\u79cd\u534f\u8bae\u3002"),t.a.createElement("h3",{id:"\u505c\u6b62\u7b49\u5f85-arq"},t.a.createElement(c["AnchorLink"],{to:"#\u505c\u6b62\u7b49\u5f85-arq","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u505c\u6b62\u7b49\u5f85 ARQ"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u6b63\u5e38\u4f20\u8f93\u8fc7\u7a0b")),t.a.createElement("p",null,"\u53ea\u8981 A \u5411 B \u53d1\u9001\u4e00\u6bb5\u62a5\u6587\uff0c\u90fd\u8981\u505c\u6b62\u53d1\u9001\u5e76\u542f\u52a8\u4e00\u4e2a\u5b9a\u65f6\u5668\uff0c\u7b49\u5f85\u5bf9\u7aef\u56de\u5e94\uff0c\u5728\u5b9a\u65f6\u5668\u65f6\u95f4\u5185\u63a5\u6536\u5230\u5bf9\u7aef\u5e94\u7b54\u5c31\u53d6\u6d88\u5b9a\u65f6\u5668\u5e76\u53d1\u9001\u4e0b\u4e00\u6bb5\u62a5\u6587\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u62a5\u6587\u4e22\u5931\u6216\u51fa\u9519")),t.a.createElement("p",null,"\u5728\u62a5\u6587\u4f20\u8f93\u7684\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e22\u5305\u3002\u8fd9\u65f6\u5019\u8d85\u8fc7\u5b9a\u65f6\u5668\u8bbe\u5b9a\u7684\u65f6\u95f4\u5c31\u4f1a\u518d\u6b21\u53d1\u9001\u4e22\u5931\u7684\u6570\u636e\u76f4\u5230\u5bf9\u7aef\u54cd\u5e94\uff0c\u6240\u4ee5\u9700\u8981\u6bcf\u6b21\u90fd\u5907\u4efd\u53d1\u9001\u7684\u6570\u636e\u3002"),t.a.createElement("p",null,"\u5373\u4f7f\u62a5\u6587\u6b63\u5e38\u7684\u4f20\u8f93\u5230\u5bf9\u7aef\uff0c\u4e5f\u53ef\u80fd\u51fa\u73b0\u5728\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u62a5\u6587\u51fa\u9519\u7684\u95ee\u9898\u3002\u8fd9\u65f6\u5019\u5bf9\u7aef\u4f1a\u629b\u5f03\u8be5\u62a5\u6587\u5e76\u7b49\u5f85 A \u7aef\u91cd\u4f20\u3002"),t.a.createElement("p",null,"PS\uff1a\u4e00\u822c\u5b9a\u65f6\u5668\u8bbe\u5b9a\u7684\u65f6\u95f4\u90fd\u4f1a\u5927\u4e8e\u4e00\u4e2a RTT \u7684\u5e73\u5747\u65f6\u95f4\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"ACK \u8d85\u65f6\u6216\u4e22\u5931")),t.a.createElement("p",null,"\u5bf9\u7aef\u4f20\u8f93\u7684\u5e94\u7b54\u4e5f\u53ef\u80fd\u51fa\u73b0\u4e22\u5931\u6216\u8d85\u65f6\u7684\u60c5\u51b5\u3002\u90a3\u4e48\u8d85\u8fc7\u5b9a\u65f6\u5668\u65f6\u95f4 A \u7aef\u7167\u6837\u4f1a\u91cd\u4f20\u62a5\u6587\u3002\u8fd9\u65f6\u5019 B \u7aef\u6536\u5230\u76f8\u540c\u5e8f\u53f7\u7684\u62a5\u6587\u4f1a\u4e22\u5f03\u8be5\u62a5\u6587\u5e76\u91cd\u4f20\u5e94\u7b54\uff0c\u76f4\u5230 A \u7aef\u53d1\u9001\u4e0b\u4e00\u4e2a\u5e8f\u53f7\u7684\u62a5\u6587\u3002"),t.a.createElement("p",null,"\u5728\u8d85\u65f6\u7684\u60c5\u51b5\u4e0b\u4e5f\u53ef\u80fd\u51fa\u73b0\u5e94\u7b54\u5f88\u8fdf\u5230\u8fbe\uff0c\u8fd9\u65f6 A \u7aef\u4f1a\u5224\u65ad\u8be5\u5e8f\u53f7\u662f\u5426\u5df2\u7ecf\u63a5\u6536\u8fc7\uff0c\u5982\u679c\u63a5\u6536\u8fc7\u53ea\u9700\u8981\u4e22\u5f03\u5e94\u7b54\u5373\u53ef\u3002"),t.a.createElement("p",null,"\u4ece\u4e0a\u9762\u7684\u63cf\u8ff0\u4e2d\u5927\u5bb6\u80af\u5b9a\u53ef\u4ee5\u53d1\u73b0\u8fd9\u80af\u5b9a\u4e0d\u662f\u4e00\u4e2a\u9ad8\u6548\u7684\u65b9\u5f0f\u3002\u5047\u8bbe\u5728\u826f\u597d\u7684\u7f51\u7edc\u73af\u5883\u4e2d\uff0c\u6bcf\u6b21\u53d1\u9001\u6570\u636e\u90fd\u9700\u8981\u7b49\u5f85\u7247\u523b\u80af\u5b9a\u662f\u4e0d\u80fd\u63a5\u53d7\u7684\u3002\u90a3\u4e48\u65e2\u7136\u6211\u4eec\u4e0d\u80fd\u63a5\u53d7\u8fd9\u4e2a\u4e0d\u90a3\u4e48\u9ad8\u6548\u7684\u534f\u8bae\uff0c\u5c31\u6765\u7ee7\u7eed\u5b66\u4e60\u76f8\u5bf9\u9ad8\u6548\u7684\u534f\u8bae\u5427\u3002"),t.a.createElement("h3",{id:"\u8fde\u7eed-arq"},t.a.createElement(c["AnchorLink"],{to:"#\u8fde\u7eed-arq","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u8fde\u7eed ARQ"),t.a.createElement("p",null,"\u5728\u8fde\u7eed ARQ \u4e2d\uff0c\u53d1\u9001\u7aef\u62e5\u6709\u4e00\u4e2a",t.a.createElement("strong",null,"\u53d1\u9001\u7a97\u53e3"),"\uff0c\u53ef\u4ee5\u5728\u6ca1\u6709\u6536\u5230\u5e94\u7b54\u7684\u60c5\u51b5\u4e0b\u6301\u7eed\u53d1\u9001\u7a97\u53e3\u5185\u7684\u6570\u636e\uff0c\u8fd9\u6837\u76f8\u6bd4\u505c\u6b62\u7b49\u5f85 ARQ \u534f\u8bae\u6765\u8bf4\u51cf\u5c11\u4e86\u7b49\u5f85\u65f6\u95f4\uff0c\u63d0\u9ad8\u4e86\u6548\u7387\u3002"),t.a.createElement("h3",{id:"\u7d2f\u8ba1\u786e\u8ba4"},t.a.createElement(c["AnchorLink"],{to:"#\u7d2f\u8ba1\u786e\u8ba4","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u7d2f\u8ba1\u786e\u8ba4"),t.a.createElement("p",null,"\u8fde\u7eed ARQ \u4e2d\uff0c\u63a5\u6536\u7aef\u4f1a\u6301\u7eed\u4e0d\u65ad\u6536\u5230\u62a5\u6587\u3002\u5982\u679c\u548c\u505c\u6b62\u7b49\u5f85 ARQ \u4e2d\u63a5\u6536\u4e00\u4e2a\u62a5\u6587\u5c31\u53d1\u9001\u4e00\u4e2a\u5e94\u7b54\u4e00\u6837\uff0c\u5c31\u592a\u6d6a\u8d39\u8d44\u6e90\u4e86\u3002\u901a\u8fc7\u7d2f\u8ba1\u786e\u8ba4\uff0c\u53ef\u4ee5\u5728\u6536\u5230\u591a\u4e2a\u62a5\u6587\u4ee5\u540e\u7edf\u4e00\u56de\u590d\u4e00\u4e2a\u5e94\u7b54\u62a5\u6587\u3002\u62a5\u6587\u4e2d\u7684 ACK \u6807\u5fd7\u4f4d\u53ef\u4ee5\u7528\u6765\u544a\u8bc9\u53d1\u9001\u7aef\u8fd9\u4e2a\u5e8f\u53f7\u4e4b\u524d\u7684\u6570\u636e\u5df2\u7ecf\u5168\u90e8\u63a5\u6536\u5230\u4e86\uff0c\u4e0b\u6b21\u8bf7\u53d1\u9001\u8fd9\u4e2a\u5e8f\u53f7\u540e\u7684\u6570\u636e\u3002"),t.a.createElement("p",null,"\u4f46\u662f\u7d2f\u8ba1\u786e\u8ba4\u4e5f\u6709\u4e00\u4e2a\u5f0a\u7aef\u3002\u5728\u8fde\u7eed\u63a5\u6536\u62a5\u6587\u65f6\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u63a5\u6536\u5230\u5e8f\u53f7 5 \u7684\u62a5\u6587\u540e\uff0c\u5e76\u672a\u63a5\u6536\u5230\u5e8f\u53f7 6 \u7684\u62a5\u6587\uff0c\u7136\u800c\u5e8f\u53f7 7 \u4ee5\u540e\u7684\u62a5\u6587\u5df2\u7ecf\u63a5\u6536\u3002\u9047\u5230\u8fd9\u79cd\u60c5\u51b5\u65f6\uff0cACK \u53ea\u80fd\u56de\u590d 6\uff0c\u8fd9\u6837\u5c31\u4f1a\u9020\u6210\u53d1\u9001\u7aef\u91cd\u590d\u53d1\u9001\u6570\u636e\u7684\u60c5\u51b5\u3002"),t.a.createElement("h2",{id:"\u6ed1\u52a8\u7a97\u53e3"},t.a.createElement(c["AnchorLink"],{to:"#\u6ed1\u52a8\u7a97\u53e3","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u6ed1\u52a8\u7a97\u53e3"),t.a.createElement("p",null,"\u5728\u4e0a\u9762\u5c0f\u8282\u4e2d\u8bb2\u5230\u4e86\u53d1\u9001\u7a97\u53e3\u3002\u5728 TCP \u4e2d\uff0c\u4e24\u7aef\u5176\u5b9e\u90fd\u7ef4\u62a4\u7740\u7a97\u53e3\uff1a\u5206\u522b\u4e3a\u53d1\u9001\u7aef\u7a97\u53e3\u548c\u63a5\u6536\u7aef\u7a97\u53e3\u3002"),t.a.createElement("p",null,"\u53d1\u9001\u7aef\u7a97\u53e3\u5305\u542b\u5df2\u53d1\u9001\u4f46\u672a\u6536\u5230\u5e94\u7b54\u7684\u6570\u636e\u548c\u53ef\u4ee5\u53d1\u9001\u4f46\u662f\u672a\u53d1\u9001\u7684\u6570\u636e\u3002"),t.a.createElement("p",null,t.a.createElement("img",{src:"http://wuxiao-tech-doc.oss-cn-hangzhou.aliyuncs.com/2022-02-09-020254.jpg",alt:"img"})),t.a.createElement("p",null,"\u53d1\u9001\u7aef\u7a97\u53e3\u662f\u7531\u63a5\u6536\u7a97\u53e3\u5269\u4f59\u5927\u5c0f\u51b3\u5b9a\u7684\u3002\u63a5\u6536\u65b9\u4f1a\u628a\u5f53\u524d\u63a5\u6536\u7a97\u53e3\u7684\u5269\u4f59\u5927\u5c0f\u5199\u5165\u5e94\u7b54\u62a5\u6587\uff0c\u53d1\u9001\u7aef\u6536\u5230\u5e94\u7b54\u540e\u6839\u636e\u8be5\u503c\u548c\u5f53\u524d\u7f51\u7edc\u62e5\u585e\u60c5\u51b5\u8bbe\u7f6e\u53d1\u9001\u7a97\u53e3\u7684\u5927\u5c0f\uff0c\u6240\u4ee5\u53d1\u9001\u7a97\u53e3\u7684\u5927\u5c0f\u662f\u4e0d\u65ad\u53d8\u5316\u7684\u3002"),t.a.createElement("p",null,"\u5f53\u53d1\u9001\u7aef\u63a5\u6536\u5230\u5e94\u7b54\u62a5\u6587\u540e\uff0c\u4f1a\u968f\u4e4b\u5c06\u7a97\u53e3\u8fdb\u884c\u6ed1\u52a8"),t.a.createElement("p",null,t.a.createElement("img",{src:"http://wuxiao-tech-doc.oss-cn-hangzhou.aliyuncs.com/2022-02-09-020257.jpg",alt:"img"})),t.a.createElement("p",null,"\u6ed1\u52a8\u7a97\u53e3\u662f\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u5b83\u5e2e\u52a9 TCP \u5b9e\u73b0\u4e86\u6d41\u91cf\u63a7\u5236\u7684\u529f\u80fd\u3002\u63a5\u6536\u65b9\u901a\u8fc7\u62a5\u6587\u544a\u77e5\u53d1\u9001\u65b9\u8fd8\u53ef\u4ee5\u53d1\u9001\u591a\u5c11\u6570\u636e\uff0c\u4ece\u800c\u4fdd\u8bc1\u63a5\u6536\u65b9\u80fd\u591f\u6765\u5f97\u53ca\u63a5\u6536\u6570\u636e\uff0c\u9632\u6b62\u51fa\u73b0\u63a5\u6536\u65b9\u5e26\u5bbd\u5df2\u6ee1\uff0c\u4f46\u662f\u53d1\u9001\u65b9\u8fd8\u4e00\u76f4\u53d1\u9001\u6570\u636e\u7684\u60c5\u51b5\u3002"),t.a.createElement("h3",{id:"zero-\u7a97\u53e3"},t.a.createElement(c["AnchorLink"],{to:"#zero-\u7a97\u53e3","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"Zero \u7a97\u53e3"),t.a.createElement("p",null,"\u5728\u53d1\u9001\u62a5\u6587\u7684\u8fc7\u7a0b\u4e2d\uff0c\u53ef\u80fd\u4f1a\u9047\u5230\u5bf9\u7aef\u51fa\u73b0\u96f6\u7a97\u53e3\u7684\u60c5\u51b5\u3002\u5728\u8be5\u60c5\u51b5\u4e0b\uff0c\u53d1\u9001\u7aef\u4f1a\u505c\u6b62\u53d1\u9001\u6570\u636e\uff0c\u5e76\u542f\u52a8 persistent timer \u3002\u8be5\u5b9a\u65f6\u5668\u4f1a\u5b9a\u65f6\u53d1\u9001\u8bf7\u6c42\u7ed9\u5bf9\u7aef\uff0c\u8ba9\u5bf9\u7aef\u544a\u77e5\u7a97\u53e3\u5927\u5c0f\u3002\u5728\u91cd\u8bd5\u6b21\u6570\u8d85\u8fc7\u4e00\u5b9a\u6b21\u6570\u540e\uff0c\u53ef\u80fd\u4f1a\u4e2d\u65ad TCP \u94fe\u63a5\u3002"),t.a.createElement("h2",{id:"\u62e5\u585e\u5904\u7406"},t.a.createElement(c["AnchorLink"],{to:"#\u62e5\u585e\u5904\u7406","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u62e5\u585e\u5904\u7406"),t.a.createElement("p",null,"\u62e5\u585e\u5904\u7406\u548c\u6d41\u91cf\u63a7\u5236\u4e0d\u540c\uff0c\u540e\u8005\u662f\u4f5c\u7528\u4e8e\u63a5\u6536\u65b9\uff0c\u4fdd\u8bc1\u63a5\u6536\u65b9\u6765\u5f97\u53ca\u63a5\u53d7\u6570\u636e\u3002\u800c\u524d\u8005\u662f\u4f5c\u7528\u4e8e\u7f51\u7edc\uff0c\u9632\u6b62\u8fc7\u591a\u7684\u6570\u636e\u62e5\u585e\u7f51\u7edc\uff0c\u907f\u514d\u51fa\u73b0\u7f51\u7edc\u8d1f\u8f7d\u8fc7\u5927\u7684\u60c5\u51b5\u3002"),t.a.createElement("p",null,"\u62e5\u585e\u5904\u7406\u5305\u62ec\u4e86\u56db\u4e2a\u7b97\u6cd5\uff0c\u5206\u522b\u4e3a\uff1a\u6162\u5f00\u59cb\uff0c\u62e5\u585e\u907f\u514d\uff0c\u5feb\u901f\u91cd\u4f20\uff0c\u5feb\u901f\u6062\u590d\u3002"),t.a.createElement("h3",{id:"\u6162\u5f00\u59cb\u7b97\u6cd5"},t.a.createElement(c["AnchorLink"],{to:"#\u6162\u5f00\u59cb\u7b97\u6cd5","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u6162\u5f00\u59cb\u7b97\u6cd5"),t.a.createElement("p",null,"\u6162\u5f00\u59cb\u7b97\u6cd5\uff0c\u987e\u540d\u601d\u4e49\uff0c\u5c31\u662f\u5728\u4f20\u8f93\u5f00\u59cb\u65f6\u5c06\u53d1\u9001\u7a97\u53e3\u6162\u6162\u6307\u6570\u7ea7\u6269\u5927\uff0c\u4ece\u800c\u907f\u514d\u4e00\u5f00\u59cb\u5c31\u4f20\u8f93\u5927\u91cf\u6570\u636e\u5bfc\u81f4\u7f51\u7edc\u62e5\u585e\u3002\u60f3\u5fc5\u5927\u5bb6\u90fd\u4e0b\u8f7d\u8fc7\u8d44\u6e90\uff0c\u6bcf\u5f53\u6211\u4eec\u5f00\u59cb\u4e0b\u8f7d\u7684\u65f6\u5019\u90fd\u4f1a\u53d1\u73b0\u4e0b\u8f7d\u901f\u5ea6\u662f\u6162\u6162\u63d0\u5347\u7684\uff0c\u800c\u4e0d\u662f\u4e00\u8e74\u800c\u5c31\u76f4\u63a5\u62c9\u6ee1\u5e26\u5bbd\u3002"),t.a.createElement("p",null,"\u6162\u5f00\u59cb\u7b97\u6cd5\u6b65\u9aa4\u5177\u4f53\u5982\u4e0b"),t.a.createElement("ol",null,t.a.createElement("li",null,"\u8fde\u63a5\u521d\u59cb\u8bbe\u7f6e\u62e5\u585e\u7a97\u53e3\uff08Congestion Window\uff09 \u4e3a 1 MSS\uff08\u4e00\u4e2a\u5206\u6bb5\u7684\u6700\u5927\u6570\u636e\u91cf\uff09"),t.a.createElement("li",null,"\u6bcf\u8fc7\u4e00\u4e2a RTT \u5c31\u5c06\u7a97\u53e3\u5927\u5c0f\u4e58\u4e8c"),t.a.createElement("li",null,"\u6307\u6570\u7ea7\u589e\u957f\u80af\u5b9a\u4e0d\u80fd\u6ca1\u6709\u9650\u5236\u7684\uff0c\u6240\u4ee5\u6709\u4e00\u4e2a\u9608\u503c\u9650\u5236\uff0c\u5f53\u7a97\u53e3\u5927\u5c0f\u5927\u4e8e\u9608\u503c\u65f6\u5c31\u4f1a\u542f\u52a8\u62e5\u585e\u907f\u514d\u7b97\u6cd5\u3002")),t.a.createElement("h3",{id:"\u62e5\u585e\u907f\u514d\u7b97\u6cd5"},t.a.createElement(c["AnchorLink"],{to:"#\u62e5\u585e\u907f\u514d\u7b97\u6cd5","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u62e5\u585e\u907f\u514d\u7b97\u6cd5"),t.a.createElement("p",null,"\u62e5\u585e\u907f\u514d\u7b97\u6cd5\u76f8\u6bd4\u7b80\u5355\u70b9\uff0c\u6bcf\u8fc7\u4e00\u4e2a RTT \u7a97\u53e3\u5927\u5c0f\u53ea\u52a0\u4e00\uff0c\u8fd9\u6837\u80fd\u591f\u907f\u514d\u6307\u6570\u7ea7\u589e\u957f\u5bfc\u81f4\u7f51\u7edc\u62e5\u585e\uff0c\u6162\u6162\u5c06\u5927\u5c0f\u8c03\u6574\u5230\u6700\u4f73\u503c\u3002"),t.a.createElement("p",null,"\u5728\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u5b9a\u65f6\u5668\u8d85\u65f6\u7684\u60c5\u51b5\uff0c\u8fd9\u65f6\u5019 TCP \u4f1a\u8ba4\u4e3a\u7f51\u7edc\u62e5\u585e\u4e86\uff0c\u4f1a\u9a6c\u4e0a\u8fdb\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u5c06\u9608\u503c\u8bbe\u4e3a\u5f53\u524d\u62e5\u585e\u7a97\u53e3\u7684\u4e00\u534a"),t.a.createElement("li",null,"\u5c06\u62e5\u585e\u7a97\u53e3\u8bbe\u4e3a 1 MSS"),t.a.createElement("li",null,"\u542f\u52a8\u62e5\u585e\u907f\u514d\u7b97\u6cd5")),t.a.createElement("h3",{id:"\u5feb\u901f\u91cd\u4f20"},t.a.createElement(c["AnchorLink"],{to:"#\u5feb\u901f\u91cd\u4f20","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5feb\u901f\u91cd\u4f20"),t.a.createElement("p",null,"\u5feb\u901f\u91cd\u4f20\u4e00\u822c\u548c\u5feb\u6062\u590d\u4e00\u8d77\u51fa\u73b0\u3002\u4e00\u65e6\u63a5\u6536\u7aef\u6536\u5230\u7684\u62a5\u6587\u51fa\u73b0\u5931\u5e8f\u7684\u60c5\u51b5\uff0c\u63a5\u6536\u7aef\u53ea\u4f1a\u56de\u590d\u6700\u540e\u4e00\u4e2a\u987a\u5e8f\u6b63\u786e\u7684\u62a5\u6587\u5e8f\u53f7\u3002\u5982\u679c\u53d1\u9001\u7aef\u6536\u5230\u4e09\u4e2a\u91cd\u590d\u7684 ACK\uff0c\u65e0\u9700\u7b49\u5f85\u5b9a\u65f6\u5668\u8d85\u65f6\u800c\u662f\u76f4\u63a5\u542f\u52a8\u5feb\u901f\u91cd\u4f20\u7b97\u6cd5\u3002\u5177\u4f53\u7b97\u6cd5\u5206\u4e3a\u4e24\u79cd\uff1a"),t.a.createElement("p",null,t.a.createElement("strong",null,"TCP Taho \u5b9e\u73b0\u5982\u4e0b")),t.a.createElement("ul",null,t.a.createElement("li",null,"\u5c06\u9608\u503c\u8bbe\u4e3a\u5f53\u524d\u62e5\u585e\u7a97\u53e3\u7684\u4e00\u534a"),t.a.createElement("li",null,"\u5c06\u62e5\u585e\u7a97\u53e3\u8bbe\u4e3a 1 MSS"),t.a.createElement("li",null,"\u91cd\u65b0\u5f00\u59cb\u6162\u5f00\u59cb\u7b97\u6cd5")),t.a.createElement("p",null,t.a.createElement("strong",null,"TCP Reno \u5b9e\u73b0\u5982\u4e0b")),t.a.createElement("ul",null,t.a.createElement("li",null,"\u62e5\u585e\u7a97\u53e3\u51cf\u534a"),t.a.createElement("li",null,"\u5c06\u9608\u503c\u8bbe\u4e3a\u5f53\u524d\u62e5\u585e\u7a97\u53e3"),t.a.createElement("li",null,"\u8fdb\u5165\u5feb\u6062\u590d\u9636\u6bb5\uff08\u91cd\u53d1\u5bf9\u7aef\u9700\u8981\u7684\u5305\uff0c\u4e00\u65e6\u6536\u5230\u4e00\u4e2a\u65b0\u7684 ACK \u7b54\u590d\u5c31\u9000\u51fa\u8be5\u9636\u6bb5\uff09\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5728\u4e22\u5931\u591a\u4e2a\u5305\u7684\u60c5\u51b5\u4e0b\u5c31\u4e0d\u90a3\u4e48\u597d\u4e86"),t.a.createElement("li",null,"\u4f7f\u7528\u62e5\u585e\u907f\u514d\u7b97\u6cd5")),t.a.createElement("h3",{id:"tcp-new-ren-\u6539\u8fdb\u540e\u7684\u5feb\u6062\u590d"},t.a.createElement(c["AnchorLink"],{to:"#tcp-new-ren-\u6539\u8fdb\u540e\u7684\u5feb\u6062\u590d","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"TCP New Ren \u6539\u8fdb\u540e\u7684\u5feb\u6062\u590d"),t.a.createElement("p",null,t.a.createElement("strong",null,"TCP New Reno")," \u7b97\u6cd5\u6539\u8fdb\u4e86\u4e4b\u524d ",t.a.createElement("strong",null,"TCP Reno")," \u7b97\u6cd5\u7684\u7f3a\u9677\u3002\u5728\u4e4b\u524d\uff0c\u5feb\u6062\u590d\u4e2d\u53ea\u8981\u6536\u5230\u4e00\u4e2a\u65b0\u7684 ACK \u5305\uff0c\u5c31\u4f1a\u9000\u51fa\u5feb\u6062\u590d\u3002"),t.a.createElement("p",null,"\u5728 ",t.a.createElement("strong",null,"TCP New Reno")," \u4e2d\uff0cTCP \u53d1\u9001\u65b9\u5148\u8bb0\u4e0b\u4e09\u4e2a\u91cd\u590d ACK \u7684\u5206\u6bb5\u7684\u6700\u5927\u5e8f\u53f7\u3002"),t.a.createElement("p",null,"\u5047\u5982\u6211\u6709\u4e00\u4e2a\u5206\u6bb5\u6570\u636e\u662f 1 ~ 10 \u8fd9\u5341\u4e2a\u5e8f\u53f7\u7684\u62a5\u6587\uff0c\u5176\u4e2d\u4e22\u5931\u4e86\u5e8f\u53f7\u4e3a 3 \u548c 7 \u7684\u62a5\u6587\uff0c\u90a3\u4e48\u8be5\u5206\u6bb5\u7684\u6700\u5927\u5e8f\u53f7\u5c31\u662f 10\u3002\u53d1\u9001\u7aef\u53ea\u4f1a\u6536\u5230 ACK \u5e8f\u53f7\u4e3a 3 \u7684\u5e94\u7b54\u3002\u8fd9\u65f6\u5019\u91cd\u53d1\u5e8f\u53f7\u4e3a 3 \u7684\u62a5\u6587\uff0c\u63a5\u6536\u65b9\u987a\u5229\u63a5\u6536\u7684\u8bdd\u5c31\u4f1a\u53d1\u9001 ACK \u5e8f\u53f7\u4e3a 7 \u7684\u5e94\u7b54\u3002\u8fd9\u65f6\u5019 TCP \u77e5\u9053\u5bf9\u7aef\u662f\u6709\u591a\u4e2a\u5305\u672a\u6536\u5230\uff0c\u4f1a\u7ee7\u7eed\u53d1\u9001\u5e8f\u53f7\u4e3a 7 \u7684\u62a5\u6587\uff0c\u63a5\u6536\u65b9\u987a\u5229\u63a5\u6536\u5e76\u4f1a\u53d1\u9001 ACK \u5e8f\u53f7\u4e3a 11 \u7684\u5e94\u7b54\uff0c\u8fd9\u65f6\u53d1\u9001\u7aef\u8ba4\u4e3a\u8fd9\u4e2a\u5206\u6bb5\u63a5\u6536\u7aef\u5df2\u7ecf\u987a\u5229\u63a5\u6536\uff0c\u63a5\u4e0b\u6765\u4f1a\u9000\u51fa\u5feb\u6062\u590d\u9636\u6bb5\u3002"),t.a.createElement("h2",{id:"\u5c0f\u7ed3"},t.a.createElement(c["AnchorLink"],{to:"#\u5c0f\u7ed3","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5c0f\u7ed3"),t.a.createElement("p",null,"\u8fd9\u4e00\u7ae0\u8282\u5185\u5bb9\u5f88\u591a\uff0c\u5145\u65a5\u4e86\u5927\u91cf\u7684\u672f\u8bed\uff0c\u9002\u5408\u5927\u5bb6\u53cd\u590d\u7814\u8bfb\uff0c\u5df2\u7ecf\u628a TCP \u4e2d\u6700\u6838\u5fc3\u6700\u9700\u8981\u638c\u63e1\u7684\u5185\u5bb9\u5168\u76d8\u6258\u51fa\u4e86\uff0c\u5982\u6709\u54ea\u91cc\u4e0d\u660e\u767d\u7684\u6b22\u8fce\u63d0\u95ee\u3002"),t.a.createElement("p",null,"\u603b\u7ed3\u4e00\u4e0b\u8fd9\u4e00\u7ae0\u8282\u7684\u5185\u5bb9\uff1a"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u5efa\u7acb\u8fde\u63a5\u9700\u8981\u4e09\u6b21\u63e1\u624b\uff0c\u65ad\u5f00\u8fde\u63a5\u9700\u8981\u56db\u6b21\u63e1\u624b"),t.a.createElement("li",null,"\u6ed1\u52a8\u7a97\u53e3\u89e3\u51b3\u4e86\u6570\u636e\u7684\u4e22\u5305\u3001\u987a\u5e8f\u4e0d\u5bf9\u548c\u6d41\u91cf\u63a7\u5236\u95ee\u9898"),t.a.createElement("li",null,"\u62e5\u585e\u7a97\u53e3\u5b9e\u73b0\u4e86\u5bf9\u6d41\u91cf\u7684\u63a7\u5236\uff0c\u4fdd\u8bc1\u5728\u5168\u5929\u5019\u73af\u5883\u4e0b\u6700\u4f18\u7684\u4f20\u9012\u6570\u636e"))))}));n["default"]=e=>{var n=t.a.useContext(c["context"]),l=n.demos;return t.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),t.a.createElement(m,{demos:l})}}}]);