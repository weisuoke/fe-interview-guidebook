(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[104],{GYAW:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("dEAq"),c=n("H1Ra"),o=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"redux-\u539f\u5219"},r.a.createElement(l["AnchorLink"],{to:"#redux-\u539f\u5219","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Redux \u539f\u5219"),r.a.createElement("p",null,r.a.createElement("strong",null,"\u4e09\u5927\u539f\u5219")),r.a.createElement("ol",null,r.a.createElement("li",null,"\u5355\u4e00\u6570\u636e\u6e90"),r.a.createElement("li",null,"State\u662f\u53ea\u8bfb\u7684"),r.a.createElement("li",null,"\u4f7f\u7528\u7eaf\u51fd\u6570\u6765\u4fee\u6539")),r.a.createElement("h3",{id:"\u5355\u4e00\u6570\u636e\u6e90"},r.a.createElement(l["AnchorLink"],{to:"#\u5355\u4e00\u6570\u636e\u6e90","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5355\u4e00\u6570\u636e\u6e90"),r.a.createElement("p",null,r.a.createElement("strong",null,"\u6574\u4e2a\u5e94\u7528\u7684 ",r.a.createElement(l["Link"],{to:"https://www.redux.org.cn/docs/Glossary.html#state"},"state")," \u88ab\u50a8\u5b58\u5728\u4e00\u68f5 object tree \u4e2d\uff0c\u5e76\u4e14\u8fd9\u4e2a object tree \u53ea\u5b58\u5728\u4e8e\u552f\u4e00\u4e00\u4e2a ",r.a.createElement(l["Link"],{to:"https://www.redux.org.cn/docs/Glossary.html#store"},"store")," \u4e2d\u3002")),r.a.createElement("p",null,"\u8fd9\u8ba9\u540c\u6784\u5e94\u7528\u5f00\u53d1\u53d8\u5f97\u975e\u5e38\u5bb9\u6613\u3002\u6765\u81ea\u670d\u52a1\u7aef\u7684 state \u53ef\u4ee5\u5728\u65e0\u9700\u7f16\u5199\u66f4\u591a\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\u88ab\u5e8f\u5217\u5316\u5e76\u6ce8\u5165\u5230\u5ba2\u6237\u7aef\u4e2d\u3002\u7531\u4e8e\u662f\u5355\u4e00\u7684 state tree \uff0c\u8c03\u8bd5\u4e5f\u53d8\u5f97\u975e\u5e38\u5bb9\u6613\u3002\u5728\u5f00\u53d1\u4e2d\uff0c\u4f60\u53ef\u4ee5\u628a\u5e94\u7528\u7684 state \u4fdd\u5b58\u5728\u672c\u5730\uff0c\u4ece\u800c\u52a0\u5feb\u5f00\u53d1\u901f\u5ea6\u3002\u6b64\u5916\uff0c\u53d7\u76ca\u4e8e\u5355\u4e00\u7684 state tree \uff0c\u4ee5\u524d\u96be\u4ee5\u5b9e\u73b0\u7684\u5982\u201c\u64a4\u9500/\u91cd\u505a\u201d\u8fd9\u7c7b\u529f\u80fd\u4e5f\u53d8\u5f97\u8f7b\u800c\u6613\u4e3e\u3002"),r.a.createElement(c["a"],{code:"console.log(store.getState())\n\n/* \u8f93\u51fa\n{\n  visibilityFilter: 'SHOW_ALL',\n  todos: [\n    {\n      text: 'Consider using Redux',\n      completed: true,\n    },\n    {\n      text: 'Keep all state in a single tree',\n      completed: false\n    }\n  ]\n}\n*\uff0f",lang:"js"}),r.a.createElement("h3",{id:"state-\u662f\u53ea\u8bfb\u7684"},r.a.createElement(l["AnchorLink"],{to:"#state-\u662f\u53ea\u8bfb\u7684","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"State \u662f\u53ea\u8bfb\u7684"),r.a.createElement("p",null,r.a.createElement("strong",null,"\u552f\u4e00\u6539\u53d8 state \u7684\u65b9\u6cd5\u5c31\u662f\u89e6\u53d1 ",r.a.createElement(l["Link"],{to:"https://www.redux.org.cn/docs/Glossary.html#action"},"action"),"\uff0caction \u662f\u4e00\u4e2a\u7528\u4e8e\u63cf\u8ff0\u5df2\u53d1\u751f\u4e8b\u4ef6\u7684\u666e\u901a\u5bf9\u8c61\u3002")),r.a.createElement("p",null,"\u8fd9\u6837\u786e\u4fdd\u4e86\u89c6\u56fe\u548c\u7f51\u7edc\u8bf7\u6c42\u90fd\u4e0d\u80fd\u76f4\u63a5\u4fee\u6539 state\uff0c\u76f8\u53cd\u5b83\u4eec\u53ea\u80fd\u8868\u8fbe\u60f3\u8981\u4fee\u6539\u7684\u610f\u56fe\u3002\u56e0\u4e3a\u6240\u6709\u7684\u4fee\u6539\u90fd\u88ab\u96c6\u4e2d\u5316\u5904\u7406\uff0c\u4e14\u4e25\u683c\u6309\u7167\u4e00\u4e2a\u63a5\u4e00\u4e2a\u7684\u987a\u5e8f\u6267\u884c\uff0c\u56e0\u6b64\u4e0d\u7528\u62c5\u5fc3 race condition \u7684\u51fa\u73b0\u3002 Action \u5c31\u662f\u666e\u901a\u5bf9\u8c61\u800c\u5df2\uff0c\u56e0\u6b64\u5b83\u4eec\u53ef\u4ee5\u88ab\u65e5\u5fd7\u6253\u5370\u3001\u5e8f\u5217\u5316\u3001\u50a8\u5b58\u3001\u540e\u671f\u8c03\u8bd5\u6216\u6d4b\u8bd5\u65f6\u56de\u653e\u51fa\u6765\u3002"),r.a.createElement(c["a"],{code:"store.dispatch({\n  type: 'COMPLETE_TODO',\n  index: 1\n})\n\nstore.dispatch({\n  type: 'SET_VISIBILITY_FILTER',\n  filter: 'SHOW_COMPLETED'\n})",lang:"js"}),r.a.createElement("h3",{id:"\u4f7f\u7528\u7eaf\u51fd\u6570\u6765\u6267\u884c\u4fee\u6539"},r.a.createElement(l["AnchorLink"],{to:"#\u4f7f\u7528\u7eaf\u51fd\u6570\u6765\u6267\u884c\u4fee\u6539","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528\u7eaf\u51fd\u6570\u6765\u6267\u884c\u4fee\u6539"),r.a.createElement("p",null,r.a.createElement("strong",null,"\u4e3a\u4e86\u63cf\u8ff0 action \u5982\u4f55\u6539\u53d8 state tree \uff0c\u4f60\u9700\u8981\u7f16\u5199 ",r.a.createElement(l["Link"],{to:"https://www.redux.org.cn/docs/Glossary.html#reducer"},"reducers"),"\u3002")),r.a.createElement("p",null,"Reducer \u53ea\u662f\u4e00\u4e9b\u7eaf\u51fd\u6570\uff0c\u5b83\u63a5\u6536\u5148\u524d\u7684 state \u548c action\uff0c\u5e76\u8fd4\u56de\u65b0\u7684 state\u3002\u521a\u5f00\u59cb\u4f60\u53ef\u4ee5\u53ea\u6709\u4e00\u4e2a reducer\uff0c\u968f\u7740\u5e94\u7528\u53d8\u5927\uff0c\u4f60\u53ef\u4ee5\u628a\u5b83\u62c6\u6210\u591a\u4e2a\u5c0f\u7684 reducers\uff0c\u5206\u522b\u72ec\u7acb\u5730\u64cd\u4f5c state tree \u7684\u4e0d\u540c\u90e8\u5206\uff0c\u56e0\u4e3a reducer \u53ea\u662f\u51fd\u6570\uff0c\u4f60\u53ef\u4ee5\u63a7\u5236\u5b83\u4eec\u88ab\u8c03\u7528\u7684\u987a\u5e8f\uff0c\u4f20\u5165\u9644\u52a0\u6570\u636e\uff0c\u751a\u81f3\u7f16\u5199\u53ef\u590d\u7528\u7684 reducer \u6765\u5904\u7406\u4e00\u4e9b\u901a\u7528\u4efb\u52a1\uff0c\u5982\u5206\u9875\u5668\u3002"),r.a.createElement(c["a"],{code:"function visibilityFilter(state = 'SHOW_ALL', action) {\n  switch (action.type) {\n    case 'SET_VISIBILITY_FILTER':\n      return action.filter\n    default:\n      return state\n  }\n}\n\nfunction todos(state = [], action) {\n  switch (action.type) {\n    case 'ADD_TODO':\n      return [\n        ...state,\n        {\n          text: action.text,\n          completed: false\n        }\n      ]\n    case 'COMPLETE_TODO':\n      return state.map((todo, index) => {\n        if (index === action.index) {\n          return Object.assign({}, todo, {\n            completed: true\n          })\n        }\n        return todo\n      })\n    default:\n      return state\n  }\n}\n\nimport { combineReducers, createStore } from 'redux'\nlet reducer = combineReducers({ visibilityFilter, todos })\nlet store = createStore(reducer)",lang:"js"}),r.a.createElement("p",null,"\u5c31\u662f\u8fd9\u6837\uff0c\u73b0\u5728\u4f60\u5e94\u8be5\u660e\u767d Redux \u662f\u600e\u4e48\u56de\u4e8b\u4e86\u3002")))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:n})}}}]);