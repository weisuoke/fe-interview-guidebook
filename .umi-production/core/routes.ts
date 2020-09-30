// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/wuxiao/wuxiao-desktop/weisuoke/guidebook/fe-interview-guidebook/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"前端面试手册","meta":{"order":10}}],"/algorithm":[{"title":"基础","path":"/algorithm","meta":{"order":1},"children":[{"path":"/algorithm","title":"概述","meta":{"order":1}}]}],"/css":[{"title":"基础","path":"/css","meta":{"order":1},"children":[{"path":"/css","title":"概述","meta":{"order":1}}]}],"/explorer":[{"title":"基础","path":"/explorer","meta":{"order":1},"children":[{"path":"/explorer","title":"概述","meta":{"order":1}}]}],"/gof":[{"title":"基础","path":"/gof","meta":{"order":1},"children":[{"path":"/gof","title":"概述","meta":{"order":1}}]}],"/js":[{"title":"基础","path":"/js","meta":{"order":1},"children":[{"path":"/js","title":"概述","meta":{"order":1}}]},{"title":"仿写系列","path":"/js/hand","meta":{"order":2},"children":[{"path":"/js/hand/new","title":"重写 new","meta":{"order":2}},{"path":"/js/hand/call","title":"重写 call","meta":{"order":4}},{"path":"/js/hand/apply","title":"重写 apply","meta":{"order":5}},{"path":"/js/hand/bind","title":"重写 bind","meta":{"order":5}}]},{"title":"工具方法","path":"/js/tool","meta":{"order":3},"children":[{"path":"/js/tool","title":"概述","meta":{"order":1}}]}],"/network":[{"title":"基础","path":"/network","meta":{"order":1},"children":[{"path":"/network","title":"概述","meta":{"order":1}}]}],"/node":[{"title":"基础","path":"/node","meta":{"order":1},"children":[{"path":"/node","title":"概述","meta":{"order":1}}]}],"/overview":[{"path":"/overview","title":"Overview","meta":{"order":1}},{"path":"/overview/inbox","title":"Inbox","meta":{"order":2}}],"/react":[{"title":"基础","path":"/react","meta":{"order":1},"children":[{"path":"/react","title":"概述","meta":{"order":1}}]}],"/skill":[{"title":"基础","path":"/skill","meta":{"order":1},"children":[{"path":"/skill","title":"概述","meta":{"order":1}}]}],"/vue":[{"title":"基础","path":"/vue","meta":{"order":1},"children":[{"path":"/vue","title":"概述","meta":{"order":1}}]}],"/webpack":[{"title":"基础","path":"/webpack","meta":{"order":1},"children":[{"path":"/webpack","title":"概述","meta":{"order":1}}]}]}},"locales":[],"navs":{"*":[{"title":"JavaScript","order":1,"path":"/js"},{"title":"CSS","order":2,"path":"/css"},{"title":"浏览器","order":3,"path":"/explorer"},{"title":"网络","order":4,"path":"/network"},{"title":"React","order":5,"path":"/react"},{"title":"Vue","order":6,"path":"/vue"},{"title":"Webpack","order":7,"path":"/webpack"},{"title":"Node","order":8,"path":"/node"},{"title":"设计模式","order":9,"path":"/gof"},{"title":"算法","order":10,"path":"/algorithm"},{"title":"软技能","order":11,"path":"/skill"},{"title":"Wiki","order":99,"path":"/overview"}]},"title":"前端面试手册","desc":"前端面试手册","mode":"site","repoUrl":"https://github.com/weisuoke/fe-interview-guidebook"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'../../docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1601470118866,
          "title": "前端面试手册",
          "order": 10,
          "hero": {
            "title": "Frontend Interview Guidebook",
            "desc": "<div class=\"markdown\"><p>📚 前端面试那些事儿 JavaScript | CSS | React | Vue | Webpack | Node | 设计模式 | 算法 | 软技能</p></div>",
            "actions": [
              {
                "text": "开始阅读",
                "link": "/overview"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "完整体系",
              "desc": "<div class=\"markdown\"><p>根据官方文档及社区建设构建尽可能实用的知识体系，宏观掌握技术体系</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "深度分析",
              "desc": "<div class=\"markdown\"><p>尽览社区精品技术文章，将最受业界欢迎的使用方法收录其中</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "开发指南",
              "desc": "<div class=\"markdown\"><p>体系化整理，随时查阅具体技术细节，方便前端开发者日常开发</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020-present<br />Powered by wuxiao</p></div>",
          "slugs": []
        },
        "title": "前端面试手册",
        "_chunkName": "docs__index.md"
      },
      {
        "path": "/algorithm",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__algorithm__index.md' */'../../docs/algorithm/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/algorithm/index.md",
          "updatedTime": 1601469978726,
          "nav": {
            "title": "算法",
            "order": 10,
            "path": "/algorithm"
          },
          "group": {
            "title": "基础",
            "order": 1,
            "path": "/algorithm"
          },
          "title": "概述",
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "算法面试题",
              "heading": "算法面试题"
            }
          ]
        },
        "title": "概述",
        "_chunkName": "docs__algorithm__index.md"
      },
      {
        "path": "/css",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__css__index.md' */'../../docs/css/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/css/index.md",
          "updatedTime": 1601468853789,
          "nav": {
            "title": "CSS",
            "order": 2,
            "path": "/css"
          },
          "group": {
            "title": "基础",
            "order": 1,
            "path": "/css"
          },
          "title": "概述",
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "CSS 面试题",
              "heading": "css-面试题"
            }
          ]
        },
        "title": "概述",
        "_chunkName": "docs__css__index.md"
      },
      {
        "path": "/explorer",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__explorer__index.md' */'../../docs/explorer/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/explorer/index.md",
          "updatedTime": 1601469472807,
          "nav": {
            "title": "浏览器",
            "order": 3,
            "path": "/explorer"
          },
          "group": {
            "title": "基础",
            "order": 1,
            "path": "/explorer"
          },
          "title": "概述",
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "浏览器面试题",
              "heading": "浏览器面试题"
            }
          ]
        },
        "title": "概述",
        "_chunkName": "docs__explorer__index.md"
      },
      {
        "path": "/gof",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__gof__index.md' */'../../docs/gof/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/gof/index.md",
          "updatedTime": 1601469834811,
          "nav": {
            "title": "设计模式",
            "order": 9,
            "path": "/gof"
          },
          "group": {
            "title": "基础",
            "order": 1,
            "path": "/gof"
          },
          "title": "概述",
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "设计模式面试题",
              "heading": "设计模式面试题"
            }
          ]
        },
        "title": "概述",
        "_chunkName": "docs__gof__index.md"
      },
      {
        "path": "/js",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__js__index.md' */'../../docs/js/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/js/index.md",
          "updatedTime": 1601469188110,
          "nav": {
            "title": "JavaScript",
            "order": 1,
            "path": "/js"
          },
          "group": {
            "title": "基础",
            "order": 1,
            "path": "/js"
          },
          "title": "概述",
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "JS基础面试",
              "heading": "js基础面试"
            },
            {
              "depth": 2,
              "value": "Inbox",
              "heading": "inbox"
            }
          ]
        },
        "title": "概述",
        "_chunkName": "docs__js__index.md"
      },
      {
        "path": "/js/hand/apply",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__js__hand__apply.md' */'../../docs/js/hand/apply.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/js/hand/apply.md",
          "updatedTime": 1601468176111,
          "nav": {
            "title": "JavaScript",
            "order": 1,
            "path": "/js"
          },
          "group": {
            "title": "仿写系列",
            "order": 2,
            "path": "/js/hand"
          },
          "title": "重写 apply",
          "order": 5,
          "slugs": [
            {
              "depth": 1,
              "value": "重写 apply",
              "heading": "重写-apply"
            }
          ]
        },
        "title": "重写 apply",
        "_chunkName": "docs__js__hand__apply.md"
      },
      {
        "path": "/js/hand/bind",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__js__hand__bind.md' */'../../docs/js/hand/bind.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/js/hand/bind.md",
          "updatedTime": 1601468105185,
          "nav": {
            "title": "JavaScript",
            "order": 1,
            "path": "/js"
          },
          "group": {
            "title": "仿写系列",
            "order": 2,
            "path": "/js/hand"
          },
          "title": "重写 bind",
          "order": 5,
          "slugs": [
            {
              "depth": 1,
              "value": "重写 bind",
              "heading": "重写-bind"
            }
          ]
        },
        "title": "重写 bind",
        "_chunkName": "docs__js__hand__bind.md"
      },
      {
        "path": "/js/hand/call",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__js__hand__call.md' */'../../docs/js/hand/call.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/js/hand/call.md",
          "updatedTime": 1601468110385,
          "nav": {
            "title": "JavaScript",
            "order": 1,
            "path": "/js"
          },
          "group": {
            "title": "仿写系列",
            "order": 2,
            "path": "/js/hand"
          },
          "title": "重写 call",
          "order": 4,
          "slugs": [
            {
              "depth": 1,
              "value": "重写 Call",
              "heading": "重写-call"
            }
          ]
        },
        "title": "重写 call",
        "_chunkName": "docs__js__hand__call.md"
      },
      {
        "path": "/js/hand/new",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__js__hand__new.md' */'../../docs/js/hand/new.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/js/hand/new.md",
          "updatedTime": 1601468112822,
          "nav": {
            "title": "JavaScript",
            "order": 1,
            "path": "/js"
          },
          "group": {
            "title": "仿写系列",
            "order": 2,
            "path": "/js/hand"
          },
          "title": "重写 new",
          "order": 2,
          "slugs": [
            {
              "depth": 1,
              "value": "重写 new",
              "heading": "重写-new"
            }
          ]
        },
        "title": "重写 new",
        "_chunkName": "docs__js__hand__new.md"
      },
      {
        "path": "/js/tool",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__js__tool__index.md' */'../../docs/js/tool/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/js/tool/index.md",
          "updatedTime": 1601468668861,
          "nav": {
            "title": "JavaScript",
            "order": 1,
            "path": "/js"
          },
          "group": {
            "title": "工具方法",
            "order": 3,
            "path": "/js/tool"
          },
          "title": "概述",
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "工具方法系列",
              "heading": "工具方法系列"
            },
            {
              "depth": 1,
              "value": "参考资料",
              "heading": "参考资料"
            }
          ]
        },
        "title": "概述",
        "_chunkName": "docs__js__tool__index.md"
      },
      {
        "path": "/network",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__network__index.md' */'../../docs/network/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/network/index.md",
          "updatedTime": 1601469572072,
          "nav": {
            "title": "网络",
            "order": 4,
            "path": "/network"
          },
          "group": {
            "title": "基础",
            "order": 1,
            "path": "/network"
          },
          "title": "概述",
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "网络面试题",
              "heading": "网络面试题"
            }
          ]
        },
        "title": "概述",
        "_chunkName": "docs__network__index.md"
      },
      {
        "path": "/node",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__node__index.md' */'../../docs/node/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/node/index.md",
          "updatedTime": 1601469738111,
          "nav": {
            "title": "Node",
            "order": 8,
            "path": "/node"
          },
          "group": {
            "title": "基础",
            "order": 1,
            "path": "/node"
          },
          "title": "概述",
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "Node面试题",
              "heading": "node面试题"
            }
          ]
        },
        "title": "概述",
        "_chunkName": "docs__node__index.md"
      },
      {
        "path": "/overview/inbox",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__overview__inbox.md' */'../../docs/overview/inbox.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/overview/inbox.md",
          "updatedTime": 1601469011348,
          "nav": {
            "title": "Wiki",
            "order": 99,
            "path": "/overview"
          },
          "title": "Inbox",
          "order": 2,
          "slugs": [
            {
              "depth": 1,
              "value": "Inbox",
              "heading": "inbox"
            }
          ]
        },
        "title": "Inbox",
        "_chunkName": "docs__overview__inbox.md"
      },
      {
        "path": "/overview",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__overview__index.md' */'../../docs/overview/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/overview/index.md",
          "updatedTime": 1601466744036,
          "nav": {
            "title": "Wiki",
            "order": 99,
            "path": "/overview"
          },
          "title": "Overview",
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "资源汇总",
              "heading": "资源汇总"
            },
            {
              "depth": 2,
              "value": "1. Github",
              "heading": "1-github"
            },
            {
              "depth": 3,
              "value": "1.1 综合类",
              "heading": "11-综合类"
            },
            {
              "depth": 3,
              "value": "1.2 React",
              "heading": "12-react"
            },
            {
              "depth": 3,
              "value": "1.3 Vue",
              "heading": "13-vue"
            },
            {
              "depth": 3,
              "value": "1.4 Node",
              "heading": "14-node"
            }
          ]
        },
        "title": "Overview",
        "_chunkName": "docs__overview__index.md"
      },
      {
        "path": "/react",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__react__index.md' */'../../docs/react/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/react/index.md",
          "updatedTime": 1601469616421,
          "nav": {
            "title": "React",
            "order": 5,
            "path": "/react"
          },
          "group": {
            "title": "基础",
            "order": 1,
            "path": "/react"
          },
          "title": "概述",
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "React面试题",
              "heading": "react面试题"
            }
          ]
        },
        "title": "概述",
        "_chunkName": "docs__react__index.md"
      },
      {
        "path": "/skill",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__skill__index.md' */'../../docs/skill/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/skill/index.md",
          "updatedTime": 1601470022187,
          "nav": {
            "title": "软技能",
            "order": 11,
            "path": "/skill"
          },
          "group": {
            "title": "基础",
            "order": 1,
            "path": "/skill"
          },
          "title": "概述",
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "软技能",
              "heading": "软技能"
            }
          ]
        },
        "title": "概述",
        "_chunkName": "docs__skill__index.md"
      },
      {
        "path": "/vue",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__vue__index.md' */'../../docs/vue/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/vue/index.md",
          "updatedTime": 1601469624945,
          "nav": {
            "title": "Vue",
            "order": 6,
            "path": "/vue"
          },
          "group": {
            "title": "基础",
            "order": 1,
            "path": "/vue"
          },
          "title": "概述",
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "Vue面试题",
              "heading": "vue面试题"
            }
          ]
        },
        "title": "概述",
        "_chunkName": "docs__vue__index.md"
      },
      {
        "path": "/webpack",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__webpack__index.md' */'../../docs/webpack/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/webpack/index.md",
          "updatedTime": 1601469724684,
          "nav": {
            "title": "Webpack",
            "order": 7,
            "path": "/webpack"
          },
          "group": {
            "title": "基础",
            "order": 1,
            "path": "/webpack"
          },
          "title": "概述",
          "order": 1,
          "slugs": [
            {
              "depth": 1,
              "value": "Webpack面试题",
              "heading": "webpack面试题"
            }
          ]
        },
        "title": "概述",
        "_chunkName": "docs__webpack__index.md"
      },
      {
        "path": "/js/hand",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/js/hand/new"
      }
    ],
    "title": "前端面试手册"
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
