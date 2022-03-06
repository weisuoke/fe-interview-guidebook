(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[120],{"5CFc":function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),a=t.n(o),l=t("dEAq"),r=t("H1Ra"),s=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"react-hooks-\u5b9e\u73b0\u539f\u7406"},a.a.createElement(l["AnchorLink"],{to:"#react-hooks-\u5b9e\u73b0\u539f\u7406","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"React Hooks \u5b9e\u73b0\u539f\u7406"),a.a.createElement("h2",{id:"\u4ec0\u4e48\u662f-hooks\u4e3a\u4ec0\u4e48\u9700\u8981-hooks"},a.a.createElement(l["AnchorLink"],{to:"#\u4ec0\u4e48\u662f-hooks\u4e3a\u4ec0\u4e48\u9700\u8981-hooks","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u4ec0\u4e48\u662f hooks\uff1f\u4e3a\u4ec0\u4e48\u9700\u8981 hooks?"),a.a.createElement("p",null,"\u5728 React16 \u4e4b\u524d\uff0c\u5927\u5bb6\u5199\u7684\u90fd\u662f ClassComponent\uff0c\u6240\u6709\u7684\u51fd\u6570\u5f0f\u7ec4\u4ef6\u90fd\u662f\u7eaf\u51fd\u6570\uff0c\u5e76\u6ca1\u6709\u81ea\u5df1\u7684\u4e00\u4efd\u72b6\u6001\uff0c\u53ea\u53ef\u4ee5\u901a\u8fc7 props\uff0c\u5728 React16 \u540e\uff0cReact \u5b98\u65b9\u63a8\u51fa\u4e86 Fiber \u67b6\u6784\u4ee5\u53ca Hooks, Hooks \u589e\u5f3a\u4e86\u51fd\u6570\u5f0f\u7ec4\u4ef6\uff0c\u518d\u4e5f\u4e0d\u662f\u7eaf\u51fd\u6570\u4e86\uff0c\u7ec4\u4ef6\u53ef\u4ee5\u7ba1\u7406\u4e00\u4efd\u81ea\u5df1\u7684\u72b6\u6001\u3002"),a.a.createElement("p",null,"React16.8 \u52a0\u5165 hooks\uff0c\u8ba9 React \u51fd\u6570\u5f0f\u7ec4\u4ef6\u66f4\u52a0\u7075\u6d3b"),a.a.createElement("p",null,"hooks \u4e4b\u524d\uff0cReact \u5b58\u5728\u5f88\u591a\u95ee\u9898"),a.a.createElement("ol",null,a.a.createElement("li",null,"\u5728\u7ec4\u4ef6\u95f4\u590d\u7528\u72b6\u6001\u903b\u8f91\u5f88\u96be"),a.a.createElement("li",null,"\u590d\u6742\u7ec4\u4ef6\u53d8\u5f97\u96be\u4ee5\u7406\u89e3\uff0c\u9ad8\u9636\u7ec4\u4ef6\u548c\u51fd\u6570\u7ec4\u4ef6\u7684\u5d4c\u5957\u8fc7\u6df1"),a.a.createElement("li",null,"Cass \u7ec4\u4ef6\u7684 this \u6307\u5411\u95ee\u9898"),a.a.createElement("li",null,"\u96be\u4ee5\u8bb0\u5fc6\u7684\u751f\u547d\u5468\u671f")),a.a.createElement("p",null,"hooks \u5f88\u597d\u7684\u89e3\u6c7a\u4e86\u4e0a\u8ff0\u95ee\u9898\uff0chooks \u63d0\u4f9b\u4e86\u5f88\u591a\u65b9\u6cd5"),a.a.createElement("ol",null,a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"useState")," \u8fd4\u56de\u6709\u72b6\u6001\u503c\uff0c\u4ee5\u53ca\u66f4\u65b0\u8fd9\u4e2a\u72b6\u6001\u503c\u7684\u51fd\u6570")),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"useEffect"),"\u63a5\u53d7\u5305\u542b\u547d\u4ee4\u5f0f\uff0c\u53ef\u80fd\u6709\u526f\u4f5c\u7528\u4ee3\u7801\u7684\u51fd\u6570\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"useContext"),"\u63a5\u53d7\u4e0a\u4e0b\u6587\u5bf9\u8c61\uff08\u4ece ",a.a.createElement("code",null,"React.createContext")," \u8fd4\u56de\u7684\u503c\uff09\u5e76\u8fd4\u56de\u5f53\u524d\u4e0a\u4e0b\u6587\u503c\uff0c")),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"useReducer")," usestate \u7684\u66ff\u4ee3\u65b9\u6848\u3002\u63a5\u53d7\u7c7b\u578b\u4e3a\uff08state, action) => newstate \u7684 reducer\uff0c\u5e76\u8fd4\u56de\u4e0e dispatch \u65b9\u6cd5\u914d\u5bf9\u7684\u5f53\u524d\u72b6\u6001\u3002")),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"useCallback")," \u8fd4\u56de\u4e00\u4e2a\u56de\u5fc6\u7684 memoized \u7248\u672c\uff0c\u8be5\u7248\u672c\u4ec5\u5728\u5176\u4e2d\u4e00\u4e2a\u8f93\u5165\u53d1\u751f\u66f4\u6539\u65f6\u4f1a\u66f4\u6539\u3002\u7eaf\u51fd\u6570\u7684\u8f93\u5165\u8f93\u51fa\u786e\u5b9a\u6027")),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"useMemo"),"\u7eaf\u7684\u4e00\u4e2a\u8bb0\u5fc6\u51fd\u6570")),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"useRef"),"\u8fd4\u56de\u4e00\u4e2a\u53ef\u53d8\u7684 ref \u5bf9\u8c61\uff0c\u5176",a.a.createElement("code",null,".current")," \u5c5e\u6027\u88ab\u521d\u59cb\u5316\u4e3a\u4f20\u9012\u7684\u53c2\u6570")),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"useImperative")," \u81ea\u5b9a\u4e49\u4f7f\u7528 ref \u65f6\u516c\u5f00\u7ed9\u7236\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u503c")),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"useMutationEffect")," \u66f4\u65b0\u5144\u5f1f\u7ec4\u4ef6\u4e4b\u524d\uff0c\u5b83\u5728 React \u6267\u884c\u5176 DOM \u6539\u53d8\u7684\u540c\u4e00\u9636\u6bb5\u540c\u6b65\u89e6\u53d1")),a.a.createElement("li",null,a.a.createElement("p",null,a.a.createElement("code",null,"useLayoutEffect")," DOM \u6539\u540e\u540c\u6b65\u89e6\u53d1\u3002\u4f7f\u7528\u5b83\u6765\u4ece DOM \u8bfb\u53d6\u5e03\u5c40\u5e76\u540c\u6b65\u91cd\u65b0\u6e32\u67d3"))),a.a.createElement("h2",{id:"\u5b9e\u73b0\u539f\u7406"},a.a.createElement(l["AnchorLink"],{to:"#\u5b9e\u73b0\u539f\u7406","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0\u539f\u7406"),a.a.createElement("p",null,"React \u4f1a\u7ef4\u62a4\u4e24\u4e2a\u94fe\u8868\uff0c\u4e00\u4e2a\u662f Currenthook\uff0c\u4e00\u4e2a\u662fWorkInProgressHook\uff0c\u6bcf\u4e00\u4e2a\u8282\u70b9\u7c7b\u578b\u90fd\u662f Hook\uff0c\u6bcf\u5f53\u6211\u4eec\u8c03\u7528 useXXX \u65f6\uff0cReact \u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a hook \u5bf9\u8c61\uff0c\u5e76\u6302\u8f7d\u5230\u94fe\u8868\u7684\u5c3e\u90e8\uff0c\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e4b\u6240\u4ee5\u53ef\u4ee5\u505a\u4e00\u4e9b Class\u30aa\u80fd\u505a\u7684\u4e8b\uff0c\u5c31\u662f\u56e0\u4e3a hook \u5bf9\u8c61\uff0c\u51fd\u6570\u5f0f\u7ec4\u4ef6\u7684\u72b6\u6001\u3001\u8ba1\u7b97\u503c\u3001\u7f13\u5b58\u7684\u51fd\u6570\u90fd\u662f\u4ea4\u7531 hook \u8fdb\u884c\u7ba1\u7406\u7684\uff0c\u800c\u5355\u5355\u6709 hook \u662f\u6ca1\u6709\u7528\u7684\uff0c\u5b83\u8fd8\u9700\u8981\u548c\u5f53\u524d\u7684\u8c03\u7528\u5b83\u7684\u7ec4\u4ef6\u5173\u8054\u8d77\u6765\uff0c\u5982\u4f55\u5173\u8054\u5c31\u662f\u901a\u8fc7 Fiber.memoizedState\uff0c\u7ec4\u4ef6\u5bf9\u5e94\u7684 Fiber \u4f1a\u7ef4\u62a4\u4e00\u4e2a memoizedState \u5c5e\u6027\uff0c\u5b83\u6c38\u8fdc\u6307\u5411 Hook\u94fe\u8868\u7684\u5934\u90e8\u3002 Hooks \u7684\u57fa\u672c\u7c7b\u578b:"),a.a.createElement(r["a"],{code:"type Hooks = {\n  memoizedState: any, // \u6307\u5411\u5f53\u524d\u6e32\u67d3\u8282\u70b9 Fiber\n  baseState: any, // \u521d\u59cb\u5316 initialState\uff0c \u5df2\u7ecf\u6bcf\u6b21 dispatch \u4e4b\u540e newState\n  baseUpdate: Update<any> | null, // \u5f53\u524d\u9700\u8981\u66f4\u65b0\u7684 Update \uff0c\u6bcf\u6b21\u66f4\u65b0\u5b8c\u4e4b\u540e\uff0c\u4f1a\u8d4b\u503c\u4e0a\u4e00\u4e2a update\uff0c\u65b9\u4fbf react \u5728\u6e32\u67d3\u9519\u8bef\u7684\u8fb9\u7f18\uff0c\u6570\u636e\u56de\u6eaf\n  queue: UpdateQueue<any> | null, // UpdateQueue \u901a\u8fc7\n  next: Hook | null, // link \u5230\u4e0b\u4e00\u4e2a hooks\uff0c\u901a\u8fc7 next \u4e32\u8054\u6bcf\u4e00 hooks\n};\n\ntype Effect = {\n  tag: HookEffectTag, // effectTag \u6807\u8bb0\u5f53\u524d hook \u4f5c\u7528\u5728 life-cycles \u7684\u54ea\u4e00\u4e2a\u9636\u6bb5\n  create: () => mixed, // \u521d\u59cb\u5316 callback\n  destroy: (() => mixed) | null, // \u5378\u8f7d callback\n  deps: Array<mixed> | null,\n  next: Effect, // \u540c\u4e0a\n};",lang:"ts"}),a.a.createElement("p",null,"React Hooks \u5168\u5c40\u7ef4\u62a4\u4e86\u30fc\u4e2a workInProgressHook \u5909\u91cf\uff0c\u6bcf\u4e00\u6b21\u8c03\u53d6 Hooks API \u90fd\u4f1a\u9996\u5148\u8c03\u53d6 createWorkInProgressHooks \u51fd\u6570\u3002"),a.a.createElement(r["a"],{code:"function createWorkInProgressHook() {\n  if (workInProgressHook === null) {\n    // This is the first hook in the list\n    if (firstWorkInProgressHook === null) {\n      currentHook = firstCurrentHook;\n      if (currentHook === null) {\n        // This is a newly mounted hook\n        workInProgressHook = createHook();\n      } else {\n        // Clone the current hook.\n        workInProgressHook = cloneHook(currentHook);\n      }\n      firstWorkInProgressHook = workInProgressHook;\n    } else {\n      // There's already a work-in-progress. Reuse it.\n      currentHook = firstCurrentHook;\n      workInProgressHook = firstWorkInProgressHook;\n    }\n  } else {\n    if (workInProgressHook.next === null) {\n      let hook;\n      if (currentHook === null) {\n        // This is a newly mounted hook\n        hook = createHook();\n      } else {\n        currentHook = currentHook.next;\n        if (currentHook === null) {\n          // This is a newly mounted hook\n          hook = createHook();\n        } else {\n          // Clone the current hook.\n          hook = cloneHook(currentHook);\n        }\n      }\n      // Append to the end of the list\n      workInProgressHook = workInProgressHook.next = hook;\n    } else {\n      // There's already a work-in-progress. Reuse it.\n      workInProgressHook = workInProgressHook.next;\n      currentHook = currentHook !== null ? currentHook.next : null;\n    }\n  }\n  return workInProgressHook;\n}",lang:"js"}),a.a.createElement("p",null,"\u5047\u8bbe\u6211\u4eec\u9700\u8981\u6267\u884c\u4ee5\u4e0b hooks \u4ee3\u7801"),a.a.createElement(r["a"],{code:"function FunctionComponet() {\n\n  const [ state0, setState0 ] = useState(0);\n  const [ state1, setState1 ] = useState(1);\n  useEffect(() => {\n  \tdocument.addEventListener('mousemove', handlerMouseMove, false);\n    ...\n    ...\n    ...\n    return () => {\n      ...\n      ...\n      ...\n    \tdocument.removeEventListener('mousemove', handlerMouseMove, false);\n    }\n  })\n\n  const [ satte3, setState3 ] = useState(3);\n  return [state0, state1, state3];\n}",lang:"js"}),a.a.createElement("p",null,"\u5f53\u6211\u4eec\u4e86\u89e3 React Hooks \u7684\u7b80\u5355\u539f\u7406\uff0c\u5f97\u5230 Hooks \u7684\u4e32\u8054\u4e0d\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u4f46\u662f\u662f\u4e00\u4e2a\u94fe\u5f0f\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4ece\u6839\u8282\u70b9 WorkInProgressHook \u5411\u4e0b\u901a\u8fc7 next \u8fdb\u884c\u4e32\u8054\u3002\u8fd9\u4e5f\u5c31\u662f\u4e3a\u4ec0\u4e48 Hooks \u4e0d\u80fd\u5d4c\u5957\u4f7f\u7528\uff0c\u4e0d\u80fd\u5728\u6761\u4ef6\u5224\u65ad\u4e2d\u4f7f\u7528\uff0c\u4e0d\u80fd\u5728\u5faa\u73af\u4e2d\u4f7f\u7528\u3002\u5426\u5219\u4f1a\u7834\u574f\u94fe\u5f0f\u7ed3\u6784\u3002")))}));n["default"]=e=>{var n=a.a.useContext(l["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(s,{demos:t})}}}]);