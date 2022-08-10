"use strict";(self.webpackChunkfringe_division=self.webpackChunkfringe_division||[]).push([[99],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return E}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),c=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(p.Provider,{value:a},e.children)},B={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(t),E=i,m=s["".concat(p,".").concat(E)]||s[E]||B[E]||r;return t?n.createElement(m,l(l({ref:a},u),{},{components:t})):n.createElement(m,l({ref:a},u))}));function E(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=s;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},2167:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return p},default:function(){return E},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return B}});var n=t(3117),i=t(102),r=(t(7294),t(3905)),l=["components"],o={title:"Data Pipelines"},p=void 0,c={unversionedId:"docs/data-pipelines",id:"docs/data-pipelines",title:"Data Pipelines",description:"\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07 Data Pipeline",source:"@site/docs/docs/05-data-pipelines.md",sourceDirName:"docs",slug:"/docs/data-pipelines",permalink:"/docs/data-pipelines",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Data Pipelines"},sidebar:"docs",previous:{title:"Data Engineering Practices",permalink:"/docs/data-engineering-practices"},next:{title:"Data Validation in Pipelines",permalink:"/docs/data-validation-in-pipelines"}},u={},B=[{value:"\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07 Data Pipeline",id:"\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07-data-pipeline",level:2},{value:"\u0e04\u0e27\u0e32\u0e21\u0e17\u0e49\u0e32\u0e17\u0e32\u0e22\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07 Data Pipeline \u0e17\u0e35\u0e48\u0e14\u0e35",id:"\u0e04\u0e27\u0e32\u0e21\u0e17\u0e49\u0e32\u0e17\u0e32\u0e22\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07-data-pipeline-\u0e17\u0e35\u0e48\u0e14\u0e35",level:2},{value:"1. Schema \u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e15\u0e25\u0e2d\u0e14",id:"1-schema-\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e15\u0e25\u0e2d\u0e14",level:3},{value:"2. Machine Failure \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e01\u0e15\u0e34",id:"2-machine-failure-\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e01\u0e15\u0e34",level:3},{value:"3. \u0e01\u0e32\u0e23 Scale \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e21\u0e35\u0e02\u0e19\u0e32\u0e14\u0e43\u0e2b\u0e0d\u0e48\u0e02\u0e36\u0e49\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e22\u0e46",id:"3-\u0e01\u0e32\u0e23-scale-\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e21\u0e35\u0e02\u0e19\u0e32\u0e14\u0e43\u0e2b\u0e0d\u0e48\u0e02\u0e36\u0e49\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e22\u0e46",level:3},{value:"4. Batch vs. Real-Time",id:"4-batch-vs-real-time",level:3},{value:"5. \u0e01\u0e32\u0e23\u0e17\u0e33 Data Catalog \u0e41\u0e25\u0e30 Data Lineage",id:"5-\u0e01\u0e32\u0e23\u0e17\u0e33-data-catalog-\u0e41\u0e25\u0e30-data-lineage",level:3},{value:"\u0e17\u0e33\u0e44\u0e21\u0e40\u0e27\u0e25\u0e32\u0e2a\u0e23\u0e49\u0e32\u0e07 Data Pipeline \u0e04\u0e27\u0e23\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e21\u0e32\u0e40\u0e01\u0e47\u0e1a\u0e25\u0e07 Storage \u0e2b\u0e23\u0e37\u0e2d Data Lake \u0e01\u0e48\u0e2d\u0e19?",id:"\u0e17\u0e33\u0e44\u0e21\u0e40\u0e27\u0e25\u0e32\u0e2a\u0e23\u0e49\u0e32\u0e07-data-pipeline-\u0e04\u0e27\u0e23\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e21\u0e32\u0e40\u0e01\u0e47\u0e1a\u0e25\u0e07-storage-\u0e2b\u0e23\u0e37\u0e2d-data-lake-\u0e01\u0e48\u0e2d\u0e19",level:2}],s={toc:B};function E(e){var a=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07-data-pipeline"},"\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07 Data Pipeline"),(0,r.kt)("p",null,"\u0e21\u0e35\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a ETL \u0e41\u0e25\u0e30 ELT \u0e0b\u0e36\u0e48\u0e07\u0e17\u0e31\u0e49\u0e07 2 patterns \u0e19\u0e35\u0e49\u0e43\u0e0a\u0e49\u0e01\u0e31\u0e19\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e01\u0e27\u0e49\u0e32\u0e07\u0e02\u0e27\u0e32\u0e07\u0e21\u0e32\u0e01\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14 \u0e04\u0e27\u0e32\u0e21\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e17\u0e31\u0e49\u0e07 2 \u0e41\u0e1a\u0e1a \u0e2d\u0e22\u0e39\u0e48\u0e17\u0e35\u0e48\u0e25\u0e33\u0e14\u0e31\u0e1a\u0e02\u0e2d\u0e07\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23 2 \u0e15\u0e31\u0e27\u0e2b\u0e25\u0e31\u0e07 (Transform \u0e01\u0e31\u0e1a Load)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Extract (E) \u0e01\u0e32\u0e23\u0e14\u0e36\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e08\u0e32\u0e01\u0e41\u0e2b\u0e25\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e15\u0e48\u0e32\u0e07\u0e46"),(0,r.kt)("li",{parentName:"ul"},"Load (L) \u0e01\u0e32\u0e23\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e44\u0e21\u0e48\u0e27\u0e48\u0e32\u0e08\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e14\u0e34\u0e1a \u0e2b\u0e23\u0e37\u0e2d\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e41\u0e1b\u0e25\u0e07\u0e41\u0e25\u0e49\u0e27 \u0e44\u0e1b\u0e17\u0e35\u0e48\u0e1b\u0e25\u0e32\u0e22\u0e17\u0e32\u0e07 \u0e40\u0e0a\u0e48\u0e19 Data Warehouse \u0e2b\u0e23\u0e37\u0e2d Data Lake \u0e2b\u0e23\u0e37\u0e2d\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e37\u0e48\u0e19\u0e46"),(0,r.kt)("li",{parentName:"ul"},"Transform (T) \u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e41\u0e1b\u0e25\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e14\u0e34\u0e1a\u0e08\u0e32\u0e01\u0e41\u0e2b\u0e25\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e15\u0e48\u0e32\u0e07\u0e46 \u0e2b\u0e23\u0e37\u0e2d\u0e08\u0e32\u0e01\u0e23\u0e30\u0e1a\u0e1a\u0e15\u0e48\u0e32\u0e07\u0e46 \u0e43\u0e2b\u0e49\u0e21\u0e32\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e2d\u0e32\u0e44\u0e1b\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e44\u0e14\u0e49 \u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e2d\u0e32\u0e44\u0e1b\u0e17\u0e33 Visualization \u0e44\u0e14\u0e49")),(0,r.kt)("p",null,"\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19 E \u0e01\u0e31\u0e1a L \u0e2d\u0e32\u0e08\u0e08\u0e30\u0e40\u0e23\u0e35\u0e22\u0e01\u0e23\u0e27\u0e21\u0e46 \u0e44\u0e14\u0e49\u0e40\u0e1b\u0e47\u0e19 Data Ingestion \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e27\u0e48\u0e32\u0e14\u0e39\u0e41\u0e25\u0e49\u0e27\u0e21\u0e35\u0e2d\u0e30\u0e44\u0e23\u0e17\u0e35\u0e48\u0e04\u0e25\u0e49\u0e32\u0e22\u0e46 \u0e01\u0e31\u0e19 \u0e41\u0e25\u0e30\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e46 \u0e01\u0e31\u0e19\u0e2d\u0e22\u0e39\u0e48 \u0e41\u0e15\u0e48\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23\u0e01\u0e47\u0e14\u0e35 \u0e15\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e2d\u0e2d\u0e01\u0e41\u0e1a\u0e1a Data Pipeline \u0e40\u0e23\u0e32\u0e04\u0e27\u0e23\u0e17\u0e35\u0e48\u0e08\u0e30\u0e41\u0e22\u0e01\u0e2d\u0e2d\u0e01\u0e08\u0e32\u0e01\u0e01\u0e31\u0e19\u0e14\u0e35\u0e01\u0e27\u0e48\u0e32 \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e27\u0e48\u0e32\u0e04\u0e27\u0e32\u0e21\u0e0b\u0e31\u0e1a\u0e0b\u0e49\u0e2d\u0e19\u0e02\u0e2d\u0e07 E \u0e01\u0e31\u0e1a L \u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19"),(0,r.kt)("h2",{id:"\u0e04\u0e27\u0e32\u0e21\u0e17\u0e49\u0e32\u0e17\u0e32\u0e22\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07-data-pipeline-\u0e17\u0e35\u0e48\u0e14\u0e35"},"\u0e04\u0e27\u0e32\u0e21\u0e17\u0e49\u0e32\u0e17\u0e32\u0e22\u0e43\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07 Data Pipeline \u0e17\u0e35\u0e48\u0e14\u0e35"),(0,r.kt)("p",null,"\u0e15\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e2a\u0e23\u0e49\u0e32\u0e07 Data Pipeline \u0e40\u0e23\u0e32\u0e21\u0e31\u0e01\u0e08\u0e30\u0e40\u0e08\u0e2d\u0e04\u0e27\u0e32\u0e21\u0e17\u0e49\u0e32\u0e17\u0e32\u0e22\u0e2b\u0e25\u0e31\u0e01\u0e46 \u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13\u200b 5 \u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e35\u0e49"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#1-schema-%E0%B9%80%E0%B8%9B%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%99%E0%B9%81%E0%B8%9B%E0%B8%A5%E0%B8%87%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88%E0%B8%95%E0%B8%A5%E0%B8%AD%E0%B8%94"},"Schema \u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e15\u0e25\u0e2d\u0e14\u0e40\u0e27\u0e25\u0e32")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#2-machine-failure-%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%9B%E0%B8%81%E0%B8%95%E0%B8%B4"},"Machine Failure \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e01\u0e15\u0e34")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#3-%E0%B8%81%E0%B8%B2%E0%B8%A3-scale-%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%82%E0%B8%99%E0%B8%B2%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B9%86"},"\u0e01\u0e32\u0e23 Scale \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e21\u0e35\u0e02\u0e19\u0e32\u0e14\u0e43\u0e2b\u0e0d\u0e48\u0e02\u0e36\u0e49\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e22\u0e46")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#4-batch-vs-real-time"},"Batch vs. Real-Time")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#5-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B3-data-catalog-%E0%B9%81%E0%B8%A5%E0%B8%B0-data-lineage"},"\u0e01\u0e32\u0e23\u0e17\u0e33 Data Catalog \u0e41\u0e25\u0e30 Data Lineage"))),(0,r.kt)("h3",{id:"1-schema-\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e15\u0e25\u0e2d\u0e14"},"1. Schema \u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e15\u0e25\u0e2d\u0e14"),(0,r.kt)("p",null,"\u0e41\u0e17\u0e1a\u0e08\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e2d\u0e31\u0e1a\u0e14\u0e31\u0e1a 1 \u0e40\u0e25\u0e22\u0e17\u0e35\u0e48\u0e17\u0e38\u0e01\u0e04\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e40\u0e08\u0e2d \u0e22\u0e34\u0e48\u0e07\u0e43\u0e19\u0e22\u0e38\u0e04\u0e1b\u0e31\u0e08\u0e08\u0e38\u0e1a\u0e31\u0e19\u0e17\u0e35\u0e48\u0e42\u0e25\u0e01\u0e02\u0e2d\u0e07\u0e0b\u0e2d\u0e1f\u0e15\u0e4c\u0e41\u0e27\u0e23\u0e4c\u0e19\u0e31\u0e49\u0e19\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07\u0e44\u0e1b\u0e40\u0e23\u0e47\u0e27\u0e21\u0e32\u0e01 \u0e18\u0e38\u0e23\u0e01\u0e34\u0e08\u0e40\u0e23\u0e32\u0e01\u0e47\u0e1b\u0e23\u0e31\u0e1a\u0e15\u0e31\u0e27\u0e15\u0e32\u0e21\u0e44\u0e1b\u0e14\u0e49\u0e27\u0e22\n\u0e41\u0e25\u0e30\u0e41\u0e19\u0e48\u0e19\u0e2d\u0e19\u0e27\u0e48\u0e32\u0e08\u0e30\u0e2a\u0e48\u0e07\u0e1c\u0e25\u0e43\u0e2b\u0e49 Schema \u0e02\u0e2d\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e19\u0e31\u0e49\u0e19\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e44\u0e1b \u0e40\u0e23\u0e32\u0e01\u0e47\u0e15\u0e49\u0e2d\u0e07\u0e1b\u0e23\u0e31\u0e1a Data Pipeline \u0e02\u0e2d\u0e07\u0e40\u0e23\u0e32\u0e15\u0e32\u0e21"),(0,r.kt)("p",null,"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e01\u0e47\u0e21\u0e35\u0e2d\u0e22\u0e39\u0e48\u0e2b\u0e25\u0e32\u0e22\u0e27\u0e34\u0e18\u0e35\u0e02\u0e36\u0e49\u0e19\u0e2d\u0e22\u0e39\u0e48\u0e01\u0e31\u0e1a\u0e2a\u0e16\u0e32\u0e19\u0e01\u0e32\u0e23\u0e13\u0e4c \u0e40\u0e0a\u0e48\u0e19 \u0e16\u0e49\u0e32\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e23\u0e32\u0e44\u0e21\u0e48\u0e40\u0e22\u0e2d\u0e30\u0e40\u0e17\u0e48\u0e32\u0e44\u0e2b\u0e23\u0e48 \u0e41\u0e25\u0e49\u0e27\u0e01\u0e32\u0e23\u0e27\u0e34\u0e40\u0e04\u0e23\u0e32\u0e30\u0e2b\u0e4c\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e01\u0e47\u0e44\u0e21\u0e48\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e40\u0e1b\u0e47\u0e19 Real-Time\n\u0e40\u0e23\u0e32\u0e2d\u0e32\u0e08\u0e08\u0e30 Drop Table \u0e17\u0e34\u0e49\u0e07 \u0e2a\u0e23\u0e49\u0e32\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e41\u0e25\u0e49\u0e27\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e15\u0e32\u0e21\u0e44\u0e1b \u0e41\u0e15\u0e48\u0e16\u0e49\u0e32\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e23\u0e32\u0e40\u0e22\u0e2d\u0e30\u0e21\u0e32\u0e01\u0e02\u0e36\u0e49\u0e19 \u0e01\u0e32\u0e23\u0e17\u0e33\u0e41\u0e1a\u0e1a\u0e19\u0e35\u0e49\u0e01\u0e47\u0e2d\u0e32\u0e08\u0e08\u0e30\u0e40\u0e2a\u0e35\u0e22\u0e40\u0e27\u0e25\u0e32\u0e44\u0e1b\u0e40\u0e1b\u0e47\u0e19\u0e27\u0e31\u0e19\u0e46\n\u0e40\u0e23\u0e32\u0e01\u0e47\u0e15\u0e49\u0e2d\u0e07\u0e2b\u0e32\u0e27\u0e34\u0e18\u0e35\u0e2d\u0e37\u0e48\u0e19\u0e21\u0e32\u0e41\u0e01\u0e49\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e43\u0e2b\u0e49\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21\u0e01\u0e31\u0e1a\u0e2a\u0e16\u0e32\u0e19\u0e01\u0e32\u0e23\u0e13\u0e4c"),(0,r.kt)("p",null,"\u0e23\u0e30\u0e1a\u0e1a Monitoring \u0e01\u0e31\u0e1a Logging \u0e14\u0e35\u0e46 \u0e08\u0e30\u0e0a\u0e48\u0e27\u0e22\u0e43\u0e2b\u0e49\u0e40\u0e23\u0e32\u0e23\u0e39\u0e49\u0e15\u0e31\u0e27\u0e44\u0e14\u0e49\u0e44\u0e27 \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e17\u0e33 Schema Version Management \u0e01\u0e47\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e0a\u0e48\u0e27\u0e22\u0e44\u0e14\u0e49\u0e40\u0e0a\u0e48\u0e19\u0e01\u0e31\u0e19"),(0,r.kt)("h3",{id:"2-machine-failure-\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e01\u0e15\u0e34"},"2. Machine Failure \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e01\u0e15\u0e34"),(0,r.kt)("p",null,"\u0e07\u0e32\u0e19 Data Pipeline \u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e21\u0e35\u0e41\u0e04\u0e48\u0e2a\u0e48\u0e27\u0e19\u0e42\u0e04\u0e49\u0e14\u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e15\u0e49\u0e2d\u0e07\u0e14\u0e39\u0e41\u0e25 \u0e22\u0e31\u0e07\u0e21\u0e35\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e02\u0e2d\u0e07 Infrastructure \u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e43\u0e0a\u0e49\u0e2d\u0e35\u0e01\u0e14\u0e49\u0e27\u0e22\n\u0e23\u0e30\u0e1a\u0e1a\u0e2b\u0e23\u0e37\u0e2d\u0e15\u0e31\u0e27\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e40\u0e0b\u0e34\u0e1f\u0e40\u0e27\u0e2d\u0e23\u0e4c \u0e21\u0e31\u0e01\u0e08\u0e30\u0e21\u0e35\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e1b\u0e23\u0e30\u0e21\u0e32\u0e13\u0e27\u0e48\u0e32 Disk \u0e40\u0e15\u0e47\u0e21 \u0e17\u0e33\u0e43\u0e2b\u0e49\u0e40\u0e02\u0e35\u0e22\u0e19\u0e44\u0e1f\u0e25\u0e4c\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e1a\u0e49\u0e32\u0e07 \u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e04\u0e49\u0e32\u0e07\u0e15\u0e49\u0e2d\u0e07\u0e23\u0e35\u0e2a\u0e15\u0e32\u0e23\u0e4c\u0e17\n\u0e23\u0e27\u0e21\u0e44\u0e1b\u0e16\u0e36\u0e07 \u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e23\u0e30\u0e1a\u0e1a Network \u0e2b\u0e23\u0e37\u0e2d DNS \u0e25\u0e48\u0e21 \u0e41\u0e25\u0e49\u0e27\u0e22\u0e31\u0e07\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e32\u0e04\u0e2d\u0e22\u0e2d\u0e31\u0e1e\u0e40\u0e01\u0e23\u0e14 Patch \u0e2d\u0e35\u0e01 (\u0e42\u0e14\u0e22\u0e40\u0e09\u0e1e\u0e32\u0e30 Security Patch)\n\u0e0b\u0e36\u0e48\u0e07\u0e2a\u0e34\u0e48\u0e07\u0e40\u0e2b\u0e25\u0e48\u0e32\u0e19\u0e35\u0e49\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1b\u0e01\u0e15\u0e34 \u0e40\u0e23\u0e32\u0e2b\u0e32\u0e27\u0e34\u0e18\u0e35\u0e23\u0e31\u0e1a\u0e21\u0e37\u0e2d\u0e44\u0e27\u0e49\u0e40\u0e25\u0e22\u0e41\u0e15\u0e48\u0e40\u0e19\u0e34\u0e48\u0e19\u0e46 \u0e40\u0e25\u0e22"),(0,r.kt)("h3",{id:"3-\u0e01\u0e32\u0e23-scale-\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e21\u0e35\u0e02\u0e19\u0e32\u0e14\u0e43\u0e2b\u0e0d\u0e48\u0e02\u0e36\u0e49\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e22\u0e46"},"3. \u0e01\u0e32\u0e23 Scale \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e21\u0e35\u0e02\u0e19\u0e32\u0e14\u0e43\u0e2b\u0e0d\u0e48\u0e02\u0e36\u0e49\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e22\u0e46"),(0,r.kt)("p",null,"\u0e0a\u0e48\u0e27\u0e07\u0e41\u0e23\u0e01\u0e46 \u0e15\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e19\u0e49\u0e2d\u0e22\u0e46 Data Pipeline \u0e2d\u0e32\u0e08\u0e08\u0e30\u0e43\u0e0a\u0e49\u0e40\u0e27\u0e25\u0e32\u0e44\u0e21\u0e48\u0e16\u0e36\u0e07 10 \u0e19\u0e32\u0e17\u0e35\u0e01\u0e47\u0e17\u0e33\u0e07\u0e32\u0e19\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e41\u0e25\u0e49\u0e27 \u0e1e\u0e2d\u0e17\u0e33\u0e40\u0e2a\u0e23\u0e47\u0e08 \u0e40\u0e23\u0e32\u0e01\u0e47\u0e2d\u0e32\u0e08\u0e08\u0e30\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e40\u0e02\u0e49\u0e32\u0e21\u0e32\u0e14\u0e39\u0e41\u0e25\u0e2a\u0e31\u0e01\u0e40\u0e17\u0e48\u0e32\u0e44\u0e2b\u0e23\u0e48\n\u0e41\u0e15\u0e48\u0e19\u0e31\u0e48\u0e07\u0e2d\u0e32\u0e08\u0e08\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e25\u0e38\u0e21\u0e1e\u0e25\u0e32\u0e07 (Pitfall) \u0e02\u0e2d\u0e07\u0e2b\u0e25\u0e32\u0e22\u0e46 \u0e04\u0e19 \u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e08\u0e32\u0e01\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e08\u0e30\u0e44\u0e2b\u0e25\u0e40\u0e02\u0e49\u0e32\u0e21\u0e32\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e22\u0e46 \u0e2d\u0e22\u0e39\u0e48\u0e15\u0e25\u0e2d\u0e14\u0e40\u0e27\u0e25\u0e32\u0e2d\u0e22\u0e39\u0e48\u0e41\u0e25\u0e49\u0e27\nData Pipeline \u0e02\u0e2d\u0e07\u0e40\u0e23\u0e32\u0e01\u0e47\u0e08\u0e30\u0e43\u0e0a\u0e49\u0e40\u0e27\u0e25\u0e32\u0e19\u0e32\u0e19\u0e02\u0e36\u0e49\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e22\u0e46 \u0e40\u0e0a\u0e48\u0e19\u0e01\u0e31\u0e19 \u0e41\u0e25\u0e49\u0e27\u0e41\u0e15\u0e48\u0e25\u0e30\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e23\u0e01\u0e47\u0e04\u0e07\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e21\u0e35\u0e41\u0e04\u0e48 Data Pipeline \u0e40\u0e14\u0e35\u0e22\u0e27\u0e41\u0e19\u0e48\n\u0e14\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19\u0e43\u0e2b\u0e49\u0e19\u0e36\u0e01\u0e16\u0e36\u0e07\u0e01\u0e32\u0e23 Scale \u0e40\u0e2d\u0e32\u0e44\u0e27\u0e49\u0e14\u0e49\u0e27\u0e22\u0e40\u0e25\u0e22 \u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e40\u0e19\u0e34\u0e48\u0e19\u0e46 \u0e22\u0e34\u0e48\u0e07\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e23\u0e44\u0e2b\u0e19\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e22\u0e2d\u0e30\u0e2d\u0e22\u0e39\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e32\u0e23 Scale \u0e40\u0e1b\u0e47\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e21\u0e32\u0e01\n\u0e15\u0e23\u0e07\u0e19\u0e35\u0e49\u0e08\u0e30\u0e23\u0e27\u0e21\u0e44\u0e1b\u0e16\u0e36\u0e07\u0e01\u0e32\u0e23\u0e40\u0e25\u0e37\u0e2d\u0e01 Technology \u0e17\u0e35\u0e48\u0e40\u0e2b\u0e21\u0e32\u0e30\u0e2a\u0e21\u0e21\u0e32\u0e43\u0e0a\u0e49\u0e14\u0e49\u0e27\u0e22\u0e40\u0e0a\u0e48\u0e19\u0e01\u0e31\u0e19"),(0,r.kt)("p",null,"\u0e2d\u0e22\u0e32\u0e01\u0e40\u0e19\u0e49\u0e19\u0e22\u0e49\u0e33\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e40\u0e15\u0e34\u0e21\u0e27\u0e48\u0e32\u0e43\u0e2b\u0e49\u0e04\u0e34\u0e14\u0e44\u0e27\u0e49\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e0a\u0e48\u0e27\u0e07\u0e41\u0e23\u0e01\u0e46 \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e16\u0e49\u0e32\u0e40\u0e23\u0e32\u0e22\u0e34\u0e48\u0e07\u0e1b\u0e25\u0e48\u0e2d\u0e22\u0e17\u0e34\u0e49\u0e07\u0e44\u0e27\u0e49\u0e21\u0e31\u0e19\u0e01\u0e47\u0e22\u0e34\u0e48\u0e07\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19 Technical Debt \u0e17\u0e35\u0e48\u0e2a\u0e30\u0e2a\u0e21\n\u0e44\u0e1b\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e22\u0e46 \u0e08\u0e19\u0e27\u0e31\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e40\u0e23\u0e32\u0e08\u0e30\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e41\u0e01\u0e49\u0e21\u0e31\u0e19\u0e44\u0e14\u0e49\u0e2d\u0e35\u0e01\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e04\u0e48\u0e32\u0e43\u0e0a\u0e49\u0e48\u0e08\u0e32\u0e22\u0e17\u0e35\u0e48\u0e08\u0e30\u0e25\u0e07\u0e41\u0e23\u0e07\u0e44\u0e1b\u0e1b\u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e38\u0e07\u0e43\u0e2b\u0e49\u0e14\u0e35\u0e02\u0e36\u0e49\u0e19\u0e21\u0e31\u0e19\u0e2a\u0e39\u0e07\u0e40\u0e01\u0e34\u0e19\u0e44\u0e1b"),(0,r.kt)("h3",{id:"4-batch-vs-real-time"},"4. Batch vs. Real-Time"),(0,r.kt)("p",null,"\u0e01\u0e32\u0e23\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e48\u0e32\u0e08\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e21\u0e27\u0e25\u0e1c\u0e25\u0e41\u0e1a\u0e1a Batch \u0e2b\u0e23\u0e37\u0e2d Real-Time \u0e43\u0e2b\u0e49\u0e25\u0e2d\u0e07\u0e17\u0e33\u0e04\u0e27\u0e32\u0e21\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e18\u0e38\u0e23\u0e01\u0e34\u0e08 \u0e41\u0e25\u0e30 Use Case \u0e15\u0e48\u0e32\u0e07\u0e46 \u0e01\u0e48\u0e2d\u0e19 \u0e15\u0e23\u0e07\u0e19\u0e35\u0e49\u0e08\u0e30\u0e02\u0e36\u0e49\u0e19\u0e2d\u0e22\u0e39\u0e48\u0e01\u0e31\u0e1a\u0e1a\u0e23\u0e34\u0e1a\u0e17\u0e02\u0e2d\u0e07\u0e41\u0e15\u0e48\u0e25\u0e30\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e23\n\u0e41\u0e25\u0e30\u0e41\u0e15\u0e48\u0e25\u0e30\u0e07\u0e32\u0e19 \u0e16\u0e36\u0e07\u0e41\u0e21\u0e49\u0e27\u0e48\u0e32\u0e15\u0e25\u0e32\u0e14\u0e2a\u0e48\u0e27\u0e19\u0e43\u0e2b\u0e0d\u0e48\u0e08\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e1b\u0e23\u0e30\u0e21\u0e27\u0e25\u0e1c\u0e25\u0e41\u0e1a\u0e1a Batch \u0e41\u0e15\u0e48\u0e01\u0e47\u0e2d\u0e22\u0e32\u0e01\u0e43\u0e2b\u0e49\u0e23\u0e30\u0e25\u0e36\u0e01\u0e44\u0e27\u0e49\u0e40\u0e2a\u0e21\u0e2d\u0e44\u0e27\u0e49\u0e27\u0e48\u0e32\n\u0e07\u0e32\u0e19\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17 Real-Time \u0e01\u0e47\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e04\u0e38\u0e13\u0e04\u0e48\u0e32\u0e43\u0e2b\u0e49\u0e01\u0e31\u0e1a\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e23\u0e44\u0e14\u0e49\u0e40\u0e0a\u0e48\u0e19\u0e01\u0e31\u0e19 \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07 Data Pipeline \u0e41\u0e1a\u0e1a Batch \u0e01\u0e31\u0e1a\u0e41\u0e1a\u0e1a Real-Time\n\u0e21\u0e35\u0e01\u0e32\u0e23\u0e1e\u0e31\u0e12\u0e19\u0e32\u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e14\u0e39\u0e41\u0e25\u0e17\u0e35\u0e48\u0e41\u0e15\u0e01\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19 \u0e43\u0e19\u0e10\u0e32\u0e19\u0e30\u0e17\u0e35\u0e48\u0e1e\u0e27\u0e01\u0e40\u0e23\u0e32\u0e40\u0e1b\u0e47\u0e19 Data Engineer \u0e04\u0e27\u0e23\u0e17\u0e35\u0e48\u0e08\u0e30\u0e28\u0e36\u0e01\u0e29\u0e32\u0e41\u0e25\u0e30\u0e17\u0e33\u0e04\u0e27\u0e32\u0e21\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e44\u0e27\u0e49\u0e17\u0e31\u0e49\u0e07 2 \u0e41\u0e1a\u0e1a"),(0,r.kt)("h3",{id:"5-\u0e01\u0e32\u0e23\u0e17\u0e33-data-catalog-\u0e41\u0e25\u0e30-data-lineage"},"5. \u0e01\u0e32\u0e23\u0e17\u0e33 Data Catalog \u0e41\u0e25\u0e30 Data Lineage"),(0,r.kt)("p",null,"\u0e2b\u0e31\u0e27\u0e02\u0e49\u0e2d\u0e19\u0e35\u0e49\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e40\u0e01\u0e35\u0e48\u0e22\u0e27\u0e02\u0e49\u0e2d\u0e07\u0e01\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e17\u0e33 Data Lake \u0e14\u0e49\u0e27\u0e22 \u0e0b\u0e36\u0e48\u0e07\u0e2b\u0e25\u0e32\u0e22\u0e04\u0e19\u0e21\u0e31\u0e01\u0e08\u0e30\u0e21\u0e2d\u0e07\u0e02\u0e49\u0e32\u0e21 \u0e40\u0e2d\u0e32\u0e44\u0e27\u0e49\u0e17\u0e33\u0e17\u0e35\u0e2b\u0e25\u0e31\u0e07\u0e01\u0e47\u0e44\u0e14\u0e49 \u0e41\u0e25\u0e49\u0e27\u0e2a\u0e38\u0e14\u0e17\u0e49\u0e32\u0e22\u0e40\u0e23\u0e32\u0e01\u0e47\u0e25\u0e37\u0e21 \u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48\u0e01\u0e47\u0e40\u0e01\u0e34\u0e14\u0e2d\u0e32\u0e01\u0e32\u0e23\nCurse of Knowledge \u0e02\u0e2d\u0e07\u0e04\u0e19\u0e17\u0e33\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 \u0e17\u0e35\u0e48\u0e27\u0e48\u0e32\u0e21\u0e2d\u0e07\u0e41\u0e27\u0e4a\u0e1a\u0e40\u0e14\u0e35\u0e22\u0e27\u0e01\u0e47\u0e23\u0e39\u0e49\u0e27\u0e48\u0e32\u0e2d\u0e30\u0e44\u0e23\u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23 \u0e2d\u0e22\u0e48\u0e32\u0e44\u0e1b\u0e15\u0e01\u0e2b\u0e25\u0e38\u0e21\u0e1e\u0e25\u0e32\u0e07\u0e40\u0e02\u0e49\u0e32\u0e25\u0e48\u0e30 \u0e23\u0e30\u0e25\u0e36\u0e01\u0e44\u0e27\u0e49\u0e40\u0e2a\u0e21\u0e2d\u0e40\u0e25\u0e22\u0e27\u0e48\u0e32\u0e40\u0e23\u0e32\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e17\u0e33\u0e07\u0e32\u0e19\u0e04\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27"),(0,r.kt)("p",null,"\u0e0b\u0e36\u0e48\u0e07\u0e16\u0e49\u0e32\u0e40\u0e23\u0e32\u0e2d\u0e22\u0e32\u0e01\u0e43\u0e2b\u0e49\u0e17\u0e38\u0e01\u0e04\u0e19\u0e43\u0e19\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e23\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e43\u0e0a\u0e49\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e20\u0e32\u0e1e \u0e41\u0e25\u0e30\u0e40\u0e2d\u0e32\u0e44\u0e1b\u0e0a\u0e48\u0e27\u0e22\u0e15\u0e31\u0e14\u0e2a\u0e34\u0e19\u0e43\u0e08\u0e43\u0e19\u0e07\u0e32\u0e19\u0e02\u0e2d\u0e07\u0e1e\u0e27\u0e01\u0e40\u0e02\u0e32\u0e44\u0e14\u0e49 \u0e01\u0e32\u0e23\u0e21\u0e35 Data Catalog\n(\u0e40\u0e01\u0e47\u0e1a Metadata \u0e44\u0e27\u0e49\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e49\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e44\u0e14\u0e49\u0e2a\u0e30\u0e14\u0e27\u0e01\u0e41\u0e25\u0e30\u0e23\u0e27\u0e14\u0e40\u0e23\u0e47\u0e27) \u0e41\u0e25\u0e30 Data Lineage (\u0e23\u0e39\u0e49\u0e17\u0e35\u0e48\u0e21\u0e32\u0e17\u0e35\u0e48\u0e44\u0e1b\u0e02\u0e2d\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e27\u0e48\u0e32\u0e21\u0e32\u0e08\u0e32\u0e01\u0e44\u0e2b\u0e19 \u0e44\u0e14\u0e49\u0e21\u0e32\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23\n\u0e42\u0e14\u0e19 Transform \u0e21\u0e32\u0e41\u0e1a\u0e1a\u0e44\u0e2b\u0e19) \u0e16\u0e37\u0e2d\u0e27\u0e48\u0e32\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e02\u0e32\u0e14\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e40\u0e25\u0e22"),(0,r.kt)("h2",{id:"\u0e17\u0e33\u0e44\u0e21\u0e40\u0e27\u0e25\u0e32\u0e2a\u0e23\u0e49\u0e32\u0e07-data-pipeline-\u0e04\u0e27\u0e23\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e21\u0e32\u0e40\u0e01\u0e47\u0e1a\u0e25\u0e07-storage-\u0e2b\u0e23\u0e37\u0e2d-data-lake-\u0e01\u0e48\u0e2d\u0e19"},"\u0e17\u0e33\u0e44\u0e21\u0e40\u0e27\u0e25\u0e32\u0e2a\u0e23\u0e49\u0e32\u0e07 Data Pipeline \u0e04\u0e27\u0e23\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e21\u0e32\u0e40\u0e01\u0e47\u0e1a\u0e25\u0e07 Storage \u0e2b\u0e23\u0e37\u0e2d Data Lake \u0e01\u0e48\u0e2d\u0e19?"),(0,r.kt)("p",null,"\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e33\u0e16\u0e32\u0e21\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e22\u0e34\u0e19\u0e2d\u0e22\u0e39\u0e48\u0e1a\u0e48\u0e2d\u0e22\u0e46 \u0e27\u0e48\u0e32\u0e15\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07 Data Pipeline \u0e02\u0e36\u0e49\u0e19\u0e21\u0e32 \u0e40\u0e23\u0e32\u0e04\u0e27\u0e23\u0e17\u0e35\u0e48\u0e08\u0e30\u0e40\u0e01\u0e47\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e25\u0e07\u0e44\u0e27\u0e49\u0e17\u0e35\u0e48 Storage \u0e2a\u0e31\u0e01\u0e17\u0e35\u0e48\u0e2b\u0e19\u0e36\u0e48\u0e07 \u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e01\u0e47\u0e1a\u0e25\u0e07 Data Lake \u0e01\u0e48\u0e2d\u0e19?"),(0,r.kt)("p",null,"\u0e41\u0e19\u0e48\u0e19\u0e2d\u0e19\u0e27\u0e48\u0e32\u0e15\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e40\u0e02\u0e35\u0e22\u0e19\u0e42\u0e04\u0e49\u0e14\u0e2a\u0e23\u0e49\u0e32\u0e07 Data Pipeline \u0e02\u0e36\u0e49\u0e19\u0e21\u0e32\u0e19\u0e31\u0e49\u0e19 \u0e08\u0e31\u0e07\u0e2b\u0e27\u0e30\u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e14\u0e36\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e21\u0e32 \u0e44\u0e21\u0e48\u0e27\u0e48\u0e32\u0e08\u0e30\u0e17\u0e31\u0e49\u0e07\u0e17\u0e32\u0e07 API \u0e2b\u0e23\u0e37\u0e2d\u0e08\u0e32\u0e01\u0e17\u0e32\u0e07 Database \u0e15\u0e49\u0e19\u0e17\u0e32\u0e07 \u0e40\u0e23\u0e32\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e17\u0e35\u0e48\u0e08\u0e30\u0e1b\u0e23\u0e31\u0e1a\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19 \u0e2b\u0e23\u0e37\u0e2d\u0e17\u0e33 Transform \u0e23\u0e39\u0e1b\u0e41\u0e1a\u0e1a\u0e01\u0e31\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e19\u0e31\u0e49\u0e19\u0e46 \u0e44\u0e14\u0e49\u0e40\u0e25\u0e22 \u0e1e\u0e2d\u0e40\u0e2a\u0e23\u0e47\u0e08\u0e41\u0e25\u0e49\u0e27\u0e01\u0e47\u0e42\u0e2b\u0e25\u0e14\u0e40\u0e02\u0e49\u0e32\u0e44\u0e1b\u0e40\u0e01\u0e47\u0e1a\u0e44\u0e27\u0e49\u0e17\u0e35\u0e48 Database \u0e1b\u0e25\u0e32\u0e22\u0e17\u0e32\u0e07 \u0e2b\u0e23\u0e37\u0e2d Data Warehouse \u0e40\u0e25\u0e22\u0e01\u0e47\u0e44\u0e14\u0e49 \u0e43\u0e19\u0e41\u0e07\u0e48\u0e1b\u0e23\u0e30\u0e2a\u0e34\u0e17\u0e18\u0e34\u0e20\u0e32\u0e1e \u0e40\u0e23\u0e32\u0e08\u0e30\u0e44\u0e14\u0e49\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e04\u0e27\u0e32\u0e21\u0e40\u0e23\u0e47\u0e27 \u0e40\u0e1e\u0e23\u0e32\u0e30\u0e27\u0e48\u0e32\u0e40\u0e23\u0e32\u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e32\u0e40\u0e02\u0e35\u0e22\u0e19\u0e25\u0e07\u0e44\u0e1f\u0e25\u0e4c \u0e41\u0e25\u0e30\u0e2d\u0e48\u0e32\u0e19\u0e08\u0e32\u0e01\u0e44\u0e1f\u0e25\u0e4c\u0e02\u0e36\u0e49\u0e19\u0e21\u0e32\u0e2d\u0e35\u0e01\n\u0e17\u0e33\u0e44\u0e21\u0e40\u0e23\u0e32\u0e16\u0e36\u0e07\u0e04\u0e27\u0e23\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e21\u0e32\u0e40\u0e01\u0e47\u0e1a\u0e25\u0e07 Storage \u0e2b\u0e23\u0e37\u0e2d Data Lake \u0e01\u0e48\u0e2d\u0e19?"),(0,r.kt)("p",null,"\u0e21\u0e35\u0e2d\u0e22\u0e39\u0e48 2 \u0e40\u0e2b\u0e15\u0e38\u0e1c\u0e25\u0e2b\u0e25\u0e31\u0e01\u0e46"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0e43\u0e19\u0e2b\u0e25\u0e32\u0e22\u0e46 \u0e04\u0e23\u0e31\u0e49\u0e07\u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e21\u0e32\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 \u0e21\u0e31\u0e01\u0e08\u0e30\u0e21\u0e35\u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19 \u0e2b\u0e23\u0e37\u0e2d\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e37\u0e48\u0e19\u0e21\u0e32\u0e23\u0e48\u0e27\u0e21\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e14\u0e49\u0e27\u0e22 \u0e14\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e40\u0e2d\u0e32\u0e21\u0e32\u0e40\u0e01\u0e47\u0e1a\u0e44\u0e27\u0e49\u0e17\u0e35\u0e48 Storage \u0e2b\u0e23\u0e37\u0e2d Data Lake \u0e01\u0e48\u0e2d\u0e19 \u0e17\u0e33\u0e43\u0e2b\u0e49\u0e40\u0e23\u0e32\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e17\u0e35\u0e48\u0e08\u0e30\u0e41\u0e0a\u0e23\u0e4c\u0e43\u0e2b\u0e49\u0e01\u0e31\u0e1a\u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19 \u0e2b\u0e23\u0e37\u0e2d\u0e23\u0e30\u0e1a\u0e1a\u0e2d\u0e37\u0e48\u0e19\u0e40\u0e02\u0e49\u0e32\u0e21\u0e32\u0e2b\u0e22\u0e34\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e44\u0e1b\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49 \u0e41\u0e25\u0e30\u0e40\u0e23\u0e32\u0e01\u0e47\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e19\u0e33\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e19\u0e35\u0e49\u0e44\u0e1b\u0e43\u0e0a\u0e49\u0e0b\u0e49\u0e33\u0e43\u0e19\u0e07\u0e32\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e44\u0e14\u0e49\u0e2d\u0e35\u0e01\u0e14\u0e49\u0e27\u0e22 \u0e42\u0e14\u0e22\u0e44\u0e21\u0e48\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e44\u0e1b\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e21\u0e32\u0e43\u0e2b\u0e21\u0e48\u0e08\u0e32\u0e01\u0e15\u0e49\u0e19\u0e17\u0e32\u0e07"),(0,r.kt)("p",{parentName:"li"},"\u0e2b\u0e23\u0e37\u0e2d\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e19\u0e33\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e44\u0e1b\u0e17\u0e33 Transformation \u0e41\u0e25\u0e49\u0e27 \u0e04\u0e19\u0e2d\u0e37\u0e48\u0e19\u0e2d\u0e22\u0e32\u0e01\u0e08\u0e30\u0e21\u0e32\u0e02\u0e2d\u0e2b\u0e22\u0e34\u0e1a\u0e44\u0e1b\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 \u0e01\u0e47\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e21\u0e32\u0e2b\u0e22\u0e34\u0e1a\u0e44\u0e14\u0e49\u0e17\u0e35\u0e48 Storage \u0e2b\u0e23\u0e37\u0e2d Data Lake \u0e02\u0e2d\u0e07\u0e40\u0e23\u0e32\u0e44\u0e14\u0e49\u0e40\u0e25\u0e22 \u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e44\u0e1b\u0e17\u0e33 Transformation \u0e40\u0e2d\u0e07"),(0,r.kt)("p",{parentName:"li"},"\u0e0b\u0e36\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e19\u0e35\u0e49\u0e01\u0e47\u0e40\u0e1b\u0e47\u0e19\u0e08\u0e38\u0e14\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19\u0e02\u0e2d\u0e07\u0e40\u0e23\u0e32\u0e17\u0e35\u0e48\u0e08\u0e30\u0e17\u0e33\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 Data Democratization \u0e43\u0e19\u0e2d\u0e07\u0e04\u0e4c\u0e01\u0e23\u0e43\u0e2b\u0e49\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19\u0e44\u0e14\u0e49\u0e2d\u0e35\u0e01\u0e14\u0e49\u0e27\u0e22 \ud83d\udc4d")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u0e02\u0e49\u0e2d\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e02\u0e49\u0e2d\u0e17\u0e35\u0e48\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e21\u0e32\u0e01\u0e04\u0e37\u0e2d \u0e40\u0e23\u0e32\u0e2d\u0e22\u0e32\u0e01\u0e17\u0e35\u0e48\u0e08\u0e30\u0e17\u0e33\u0e43\u0e2b\u0e49 Data Pipeline \u0e02\u0e2d\u0e07\u0e40\u0e23\u0e32\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e17\u0e33\u0e0b\u0e49\u0e33\u0e44\u0e14\u0e49 (Reproducible) \u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e08\u0e32\u0e01\u0e27\u0e48\u0e32\u0e40\u0e23\u0e32\u0e2d\u0e32\u0e08\u0e08\u0e30\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e1b\u0e31\u0e01\u0e43\u0e08\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e44\u0e14\u0e49\u0e27\u0e48\u0e32\u0e23\u0e30\u0e1a\u0e1a\u0e15\u0e49\u0e19\u0e17\u0e32\u0e07\u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e44\u0e1b\u0e14\u0e36\u0e07\u0e21\u0e32 \u0e44\u0e21\u0e48\u0e27\u0e48\u0e32\u0e08\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e19\u0e49\u0e32\u0e40\u0e27\u0e47\u0e1a\u0e17\u0e35\u0e48\u0e40\u0e23\u0e32 Scrape \u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e21\u0e32 \u0e2b\u0e23\u0e37\u0e2d\u0e08\u0e30\u0e40\u0e1b\u0e47\u0e19 API \u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e40\u0e02\u0e35\u0e22\u0e19\u0e42\u0e04\u0e49\u0e14\u0e44\u0e1b\u0e14\u0e36\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e21\u0e32 \u0e08\u0e30\u0e44\u0e21\u0e48\u0e21\u0e35\u0e2d\u0e30\u0e44\u0e23\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e41\u0e1b\u0e25\u0e07 \u0e41\u0e25\u0e30\u0e08\u0e30\u0e04\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e01\u0e31\u0e1a\u0e40\u0e23\u0e32\u0e15\u0e25\u0e2d\u0e14\u0e44\u0e1b \u0e22\u0e34\u0e48\u0e07\u0e16\u0e49\u0e32 API \u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e21\u0e35\u0e43\u0e2b\u0e49\u0e40\u0e23\u0e32\u0e40\u0e25\u0e37\u0e2d\u0e01 Date Range \u0e44\u0e14\u0e49\u0e40\u0e19\u0e35\u0e48\u0e22 \ud83d\ude05 \u0e22\u0e34\u0e48\u0e07\u0e21\u0e35\u0e04\u0e27\u0e32\u0e21\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e08\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e40\u0e2d\u0e32\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e21\u0e32\u0e40\u0e01\u0e47\u0e1a\u0e44\u0e27\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e14\u0e36\u0e07\u0e41\u0e15\u0e48\u0e25\u0e30\u0e04\u0e23\u0e31\u0e49\u0e07"),(0,r.kt)("p",{parentName:"li"},"\u0e14\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19\u0e01\u0e32\u0e23\u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e40\u0e01\u0e47\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e40\u0e2d\u0e32\u0e44\u0e27\u0e49\u0e17\u0e35\u0e48 Storage \u0e2b\u0e23\u0e37\u0e2d Data Lake \u0e01\u0e48\u0e2d\u0e19 \u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e17\u0e33\u0e43\u0e2b\u0e49\u0e40\u0e23\u0e32\u0e21\u0e31\u0e48\u0e19\u0e43\u0e08\u0e44\u0e14\u0e49\u0e27\u0e48\u0e32\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e14\u0e36\u0e07\u0e21\u0e32\u0e40\u0e01\u0e47\u0e1a \u0e08\u0e30\u0e2d\u0e22\u0e39\u0e48\u0e01\u0e31\u0e1a\u0e40\u0e23\u0e32\u0e41\u0e25\u0e30\u0e40\u0e23\u0e32\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e2b\u0e22\u0e34\u0e1a\u0e40\u0e2d\u0e32\u0e44\u0e1b\u0e43\u0e0a\u0e49\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e44\u0e2b\u0e23\u0e48\u0e01\u0e47\u0e44\u0e14\u0e49\u0e15\u0e32\u0e21\u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23 \u0e08\u0e30\u0e40\u0e2d\u0e32\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e22\u0e49\u0e2d\u0e19\u0e2b\u0e25\u0e31\u0e07\u0e21\u0e32\u0e1b\u0e23\u0e30\u0e21\u0e27\u0e25\u0e1c\u0e25\u0e43\u0e2b\u0e21\u0e48\u0e2d\u0e35\u0e01\u0e23\u0e2d\u0e1a\u0e01\u0e47\u0e44\u0e14\u0e49! \ud83e\udd29"),(0,r.kt)("p",{parentName:"li"},"\u0e42\u0e14\u0e22\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e40\u0e01\u0e47\u0e1a\u0e04\u0e27\u0e23\u0e08\u0e30\u0e40\u0e1b\u0e47\u0e19 Copy \u0e08\u0e32\u0e01\u0e41\u0e2b\u0e25\u0e48\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e15\u0e49\u0e19\u0e17\u0e32\u0e07\u0e40\u0e25\u0e22 (\u0e2b\u0e23\u0e37\u0e2d\u0e40\u0e23\u0e35\u0e22\u0e01\u0e27\u0e48\u0e32 Raw Data) \u0e0b\u0e36\u0e48\u0e07\u0e15\u0e23\u0e07\u0e19\u0e35\u0e49\u0e01\u0e47\u0e08\u0e30\u0e2a\u0e48\u0e07\u0e1c\u0e25\u0e43\u0e2b\u0e49 Data Pipeline \u0e2d\u0e37\u0e48\u0e19\u0e46 \u0e17\u0e35\u0e48\u0e21\u0e32\u0e2b\u0e22\u0e34\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e19\u0e35\u0e49\u0e40\u0e2d\u0e32\u0e44\u0e1b Transform \u0e01\u0e47\u0e08\u0e30\u0e21\u0e35\u0e04\u0e38\u0e13\u0e2a\u0e21\u0e1a\u0e31\u0e15\u0e34 Reproducible \u0e44\u0e14\u0e49"))))}E.isMDXComponent=!0}}]);