(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[123],{NzWy:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),l=n.n(t),c=n("dEAq"),r=n("H1Ra"),o=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"csrf"},l.a.createElement(c["AnchorLink"],{to:"#csrf","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"csrf"),l.a.createElement("p",null,l.a.createElement("strong",null,"\u6982\u5ff5")),l.a.createElement("p",null,"Cross-site request foregery\uff0c\u8de8\u7ad9\u8bf7\u6c42\u653b\u51fb\uff0c\u6307\u7684\u662f\u653b\u51fb\u65b9\u8bf1\u5bfc\u7528\u6237\u8fdb\u5165\u7b2c\u4e09\u65b9\u7f51\u7ad9(\u53ef\u80fd\u662f\u653b\u51fb\u65b9\u81ea\u5df1\u7684\u7f51\u7ad9\uff0c\u4e5f\u53ef\u80fd\u662f\u5176\u4ed6\u7f51\u7ad9)\uff0c\u5728\u7b2c\u4e09\u65b9\u7f51\u7ad9\u4e2d\uff0c\u5229\u7528\u7528\u6237\u5728\u88ab\u653b\u51fb\u7f51\u7ad9\u7684\u767b\u5f55\u72b6\u6001\uff0c\u5411\u88ab\u653b\u51fb\u7f51\u7ad9\u53d1\u8d77\u8de8\u7ad9\u8bf7\u6c42\uff0c\u7ed5\u8fc7\u88ab\u653b\u51fb\u7f51\u7ad9\u540e\u53f0\u7684\u7528\u6237\u9a8c\u8bc1\uff0c\u8fbe\u5230\u5192\u5145\u7528\u6237\u5bf9\u88ab\u653b\u51fb\u7f51\u7ad9\u8fdb\u884c\u67d0\u9879\u64cd\u4f5c\u7684\u76ee\u7684\u3002"),l.a.createElement("p",null,"CSRF \u7684\u653b\u51fb\u539f\u7406\u662f\u8bf1\u5bfc\u7528\u6237\u8df3\u8f6c\u5230\u65b0\u7684\u9875\u9762\uff0c\u5229\u7528\u670d\u52a1\u5668\u7684\u9a8c\u8bc1\u6f0f\u6d1e\u548c\u7528\u6237\u4e4b\u524d\u7684\u767b\u5f55\u72b6\u6001\u6765\u5192\u5145\u7528\u6237\u8fdb\u884c\u64cd\u4f5c\u3002"),l.a.createElement("p",null,l.a.createElement("strong",null,"CSRF \u4e00\u822c\u6d41\u7a0b")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7528\u6237\u767b\u5f55 aaa.com\uff0c\u4fdd\u7559\u4e86\u767b\u5f55\u51ed\u8bc1 Cookie\uff1b"),l.a.createElement("li",null,"\u653b\u51fb\u65b9\u5f15\u8bf1\u7528\u6237\u6253\u5f00\u4e86 bbb.com\uff1b"),l.a.createElement("li",null,"\u5728 bbb.com \u4e2d\uff0c\u653b\u51fb\u65b9\u53d1\u8d77\u4e86\u4e00\u4e2a\u8bf7\u6c42\uff1aaaa.com/act=boom\uff0c\u7531\u4e8e\u7528\u6237\u5728 aaa.com \u767b\u5f55\u4e86\uff0c\u8fd9\u4e2a\u8bf7\u6c42\u4f1a\u5e26\u4e0a aaa.com \u7684 Cookie\uff1b"),l.a.createElement("li",null,"aaa.com \u7684\u670d\u52a1\u5668\u6536\u5230\u8bf7\u6c42\uff0c\u9a8c\u8bc1 Cookie\uff0c\u4ee5\u4e3a\u8fd9\u662f\u7528\u6237\u81ea\u5df1\u53d1\u7684\u6b63\u5e38\u8bf7\u6c42\uff0c\u4ee5\u8be5\u7528\u6237\u7684\u540d\u4e49\u6267\u884c\u4e86\u8bf7\u6c42\u7684\u5185\u5bb9\uff1b"),l.a.createElement("li",null,"\u653b\u51fb\u5b8c\u6210\uff0c\u653b\u51fb\u65b9\u5728\u7528\u6237\u4e0d\u77e5\u60c5\u7684\u60c5\u51b5\u4e0b\uff0c\u8ba9 aaa.com \u6267\u884c\u4e86\u4ed6\u81ea\u5b9a\u4e49\u7684\u64cd\u4f5c\u3002")),l.a.createElement("h2",{id:"\u5e38\u89c1\u7684-csrf-\u653b\u51fb\u7c7b\u578b"},l.a.createElement(c["AnchorLink"],{to:"#\u5e38\u89c1\u7684-csrf-\u653b\u51fb\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5e38\u89c1\u7684 CSRF \u653b\u51fb\u7c7b\u578b"),l.a.createElement("p",null,"\u5728\u7b2c\u4e09\u65b9\u7f51\u7ad9\u4e2d\uff0c\u653b\u51fb\u65b9\u662f\u5982\u4f55\u53d1\u8d77\u8de8\u7ad9\u8bf7\u6c42\u7684\u5462\uff1f\u4e00\u822c\u6709\u4ee5\u4e0b\u51e0\u79cd\u5e38\u89c1\u7684\u65b9\u5f0f\uff1a"),l.a.createElement("h3",{id:"\u81ea\u52a8\u53d1-get-\u8bf7\u6c42"},l.a.createElement(c["AnchorLink"],{to:"#\u81ea\u52a8\u53d1-get-\u8bf7\u6c42","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u52a8\u53d1 GET \u8bf7\u6c42"),l.a.createElement("p",null,"\u4e00\u822c\u4f1a\u5229\u7528 ",l.a.createElement("code",null,"img")," \u6807\u7b7e\uff0c"),l.a.createElement("p",null,l.a.createElement("code",null,'<img src="http://bank.example/withdraw?amount=10000&for=hacker" />')),l.a.createElement("p",null,"\u7528\u6237\u6253\u5f00\u5e26\u6709\u8fd9\u4e2a ",l.a.createElement("code",null,"img")," \u5143\u7d20\u7684\u7f51\u7ad9\u65f6\uff0c\u6d4f\u89c8\u5668\u5c31\u4f1a\u81ea\u52a8\u53d1\u8d77\u4e00\u4e2a HTTP \u8bf7\u6c42 ",l.a.createElement("code",null,"http://bank.example/withdraw?amount=10000&for=hacker"),"\uff0c\u5982\u679c\u7528\u6237\u5728 ",l.a.createElement("code",null,"bank.example")," \u5df2\u7ecf\u767b\u5f55\u8fc7\u4e86\uff0c\u8fd9\u4e2a\u8bf7\u6c42\u5c31\u4f1a\u5e26\u4e0a ",l.a.createElement("code",null,"bank.example")," \u7684 Cookie\u3002"),l.a.createElement("p",null,"\u5982\u679c\u670d\u52a1\u5668\u6ca1\u6709\u76f8\u5e94\u7684\u9a8c\u8bc1\u673a\u5236\uff0c\u5b83\u4f1a\u8ba4\u4e3a\u8fd9\u662f\u4e00\u4e2a\u6b63\u5e38\u7528\u6237\u7684\u8bf7\u6c42\uff0c\u4ece\u800c\u6267\u884c\u5176\u4e2d\u6307\u5b9a\u7684\u64cd\u4f5c\uff0c\u653b\u51fb\u8005\u8fbe\u6210\u653b\u51fb\u76ee\u7684\u3002"),l.a.createElement("h3",{id:"\u81ea\u52a8\u53d1-post-\u8bf7\u6c42"},l.a.createElement(c["AnchorLink"],{to:"#\u81ea\u52a8\u53d1-post-\u8bf7\u6c42","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u52a8\u53d1 POST \u8bf7\u6c42"),l.a.createElement("p",null,"\u901a\u5e38\u662f\u4ee5\u4e00\u4e2a\u81ea\u52a8\u63d0\u4ea4\u7684\u8868\u5355\u7684\u5f62\u5f0f\u3002\u653b\u51fb\u65b9\u53ef\u80fd\u81ea\u5df1\u586b\u5199\u4e86\u4e00\u4e2a\u8868\u5355\uff0c\u518d\u52a0\u4e0a\u4e00\u6bb5\u81ea\u52a8\u63d0\u4ea4\u8868\u5355\u7684\u811a\u672c\uff1a"),l.a.createElement(r["a"],{code:'<form id=\'hacker-form\' action="https://xxx.com/info" method="POST">\n  <input type="hidden" name="user" value="hhh" />\n  <input type="hidden" name="count" value="100" />\n</form>\n<script>document.getElementById(\'hacker-form\').submit();<\/script>',lang:"unknown"}),l.a.createElement("p",null,"\u7528\u6237\u8bbf\u95ee\u8be5\u9875\u9762\u65f6\uff0c\u8868\u5355\u5c31\u4f1a\u81ea\u52a8\u63d0\u4ea4\uff0c\u76f8\u5f53\u4e8e\u5192\u5145\u7528\u6237\u63d0\u4ea4\u4e86\u4e00\u6b21 POST \u8bf7\u6c42\uff0c\u8fd9\u4e2a\u8bf7\u6c42\u4e5f\u4f1a\u5e26\u4e0a\u88ab\u653b\u51fb\u7f51\u7ad9\u7684 Cookie\u3002"),l.a.createElement("h3",{id:"\u94fe\u63a5\u7c7b\u578b-get-\u8bf7\u6c42"},l.a.createElement(c["AnchorLink"],{to:"#\u94fe\u63a5\u7c7b\u578b-get-\u8bf7\u6c42","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u94fe\u63a5\u7c7b\u578b GET \u8bf7\u6c42"),l.a.createElement("p",null,"\u653b\u51fb\u65b9\u53ef\u80fd\u4f1a\u628a\u8bf7\u6c42\u653e\u5728 ",l.a.createElement("code",null,"<a>")," \u6807\u7b7e\u4e2d\uff0c\u7136\u540e\u5229\u7528\u5938\u5f20\u7684\u6587\u5b57\u8bf1\u5bfc\u7528\u6237\u70b9\u51fb\uff0c\u7528\u6237\u70b9\u51fb\u540e\uff0c\u5c31\u4e0e ",l.a.createElement("code",null,"\u81ea\u52a8\u53d1 GET \u8bf7\u6c42")," \u540c\u7406\u4e86\u3002"),l.a.createElement("h2",{id:"\u5982\u4f55\u9632\u5fa1-csrf-\u653b\u51fb"},l.a.createElement(c["AnchorLink"],{to:"#\u5982\u4f55\u9632\u5fa1-csrf-\u653b\u51fb","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4f55\u9632\u5fa1 CSRF \u653b\u51fb"),l.a.createElement("h3",{id:"\u5229\u7528-cookie-\u7684-same-site-\u5c5e\u6027"},l.a.createElement(c["AnchorLink"],{to:"#\u5229\u7528-cookie-\u7684-same-site-\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5229\u7528 Cookie \u7684 Same-Site \u5c5e\u6027"),l.a.createElement("p",null,"Same-Site \u5c5e\u6027\u6709\u4ee5\u4e0b 3 \u4e2a\u503c\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"Strict: \u6d4f\u89c8\u5668\u4f1a\u7981\u6b62\u6240\u6709\u7b2c\u4e09\u65b9\u8bf7\u6c42\u643a\u5e26 Cookie\u3002"),l.a.createElement("li",null,"Lax: \u5141\u8bb8",l.a.createElement("strong",null,"Get\u8bf7\u6c42\u8868\u5355\u63d0\u4ea4"),"\u4ee5\u53ca",l.a.createElement("strong",null,"\u6807\u7b7e\u53d1\u8d77\u7684Get\u8bf7\u6c42"),"\u643a\u5e26 Cookie\uff0c\u5176\u4ed6\u60c5\u51b5\u5219\u7981\u6b62\u3002"),l.a.createElement("li",null,"None: \u662f\u9ed8\u8ba4\u503c\uff0c\u4e0d\u505a\u9650\u5236\uff0c\u6240\u6709\u8bf7\u6c42\u90fd\u4f1a\u81ea\u52a8\u5e26\u4e0a Cookie\u3002")),l.a.createElement("p",null,"\u5982\u679c\u653b\u51fb\u8005\u7684 CSRF \u8bf7\u6c42\u6ca1\u6709\u643a\u5e26\u76f8\u5e94\u7684 Cookie\uff0c\u5c31\u4f1a\u88ab\u670d\u52a1\u5668\u62d2\u6389\u4e86\u3002"),l.a.createElement("h3",{id:"\u9a8c\u8bc1\u6765\u6e90\u7ad9\u70b9"},l.a.createElement(c["AnchorLink"],{to:"#\u9a8c\u8bc1\u6765\u6e90\u7ad9\u70b9","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u9a8c\u8bc1\u6765\u6e90\u7ad9\u70b9"),l.a.createElement("p",null,"\u5229\u7528 ",l.a.createElement("code",null,"Referer")," \u548c ",l.a.createElement("code",null,"Origin")," \u8bf7\u6c42\u5934\u5b57\u6bb5\u786e\u5b9a\u8bf7\u6c42\u7684\u6765\u6e90\u57df\u540d\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"Origin \u5b57\u6bb5\u5305\u542b\u8bf7\u6c42\u7684\u57df\u540d(\u4e0d\u5305\u542b path \u548c query)"),l.a.createElement("li",null,"Referer \u5b57\u6bb5\u5305\u542b\u5177\u4f53\u7684 URL")),l.a.createElement("p",null,"\u5982\u679c\u670d\u52a1\u5668\u53d1\u73b0\u4e86\u6765\u81ea\u975e\u53ef\u4fe1\u8d56\u57df\u540d\u7684\u8bf7\u6c42\uff0c\u5c31\u53ef\u4ee5\u4e0d\u4e88\u54cd\u5e94\uff0c\u4f46\u662f\uff0c\u8fd9\u4e24\u4e2a\u5b57\u6bb5\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u53ef\u80fd\u4e0d\u5b58\u5728\uff0c\u800c\u4e14\u8fd8\u53ef\u4ee5\u4f2a\u9020\uff0c\u5e76\u4e0d\u662f\u5341\u5206\u53ef\u9760\u3002"),l.a.createElement("h3",{id:"csrf-token"},l.a.createElement(c["AnchorLink"],{to:"#csrf-token","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CSRF Token"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7528\u6237\u6d4f\u89c8\u5668\u5411\u670d\u52a1\u5668\u8bf7\u6c42\u9875\u9762\u65f6\uff0c\u6d4f\u89c8\u5668\u4f1a\u751f\u6210\u4e00\u4e2a CSRF Token \u5b57\u7b26\u4e32\u690d\u5165\u5230\u9875\u9762\u4e2d\u3002"),l.a.createElement("li",null,"\u4e4b\u540e\u6d4f\u89c8\u5668\u518d\u53d1\u9001\u8bf7\u6c42\u65f6\uff0c\u9700\u8981\u5e26\u4e0a\u8fd9\u4e2a CSRF Token\u3002"),l.a.createElement("li",null,"\u670d\u52a1\u5668\u4f1a\u9a8c\u8bc1\u8bf7\u6c42\u4e2d\u643a\u5e26\u7684 CSRF Token\uff0c\u5982\u679c\u6ca1\u6709\u901a\u8fc7\u9a8c\u8bc1\uff0c\u5c31\u4e0d\u4e88\u54cd\u5e94\u3002"),l.a.createElement("li",null,"\u901a\u5e38\u653b\u51fb\u8005\u65e0\u6cd5\u62ff\u5230\u8fd9\u4e2a CSRF Token\uff0c\u6240\u4ee5\u4f2a\u9020\u8bf7\u6c42\u4f1a\u88ab\u670d\u52a1\u5668\u62d2\u7edd\u3002"))))}));a["default"]=e=>{var a=l.a.useContext(c["context"]),n=a.demos;return l.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:n})}}}]);