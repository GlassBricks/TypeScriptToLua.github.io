(window.webpackJsonp=window.webpackJsonp||[]).push([[5,25],{185:function(e,t,n){"use strict";n.r(t);n(12);var a=n(0),r=n.n(a),o=n(213),c=n(221),l=n(45),i=n(305),s=n(1),u=n(237),m=n.n(u),d=n(387),p=n(388),f=n(250),b=n(291),h=n(99),g=n.n(h);function y({item:e,onItemClick:t,collapsible:n}){const{items:o,href:c,label:l,type:i}=e,[u,d]=Object(a.useState)(e.collapsed),[p,h]=Object(a.useState)(null);e.collapsed!==p&&(h(e.collapsed),d(e.collapsed));const g=Object(a.useCallback)(e=>{e.preventDefault(),d(e=>!e)});switch(i){case"category":return o.length>0&&r.a.createElement("li",{className:m()("menu__list-item",{"menu__list-item--collapsed":u}),key:l},r.a.createElement("a",{className:m()("menu__link",{"menu__link--sublist":n,"menu__link--active":n&&!e.collapsed}),href:"#!",onClick:n?g:void 0},l),r.a.createElement("ul",{className:"menu__list"},o.map(e=>r.a.createElement(y,{key:e.label,item:e,onItemClick:t,collapsible:n}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(f.a,Object(s.a)({className:"menu__link",to:c},Object(b.a)(c)?{activeClassName:"menu__link--active",exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"}),l))}}var E=function(e){const[t,n]=Object(a.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:o,hideOnScroll:l=!1}={}}}={},isClient:i}=Object(c.a)(),{logoLink:u,logoLinkProps:b,logoImageUrl:h,logoAlt:E}=Object(p.a)(),{docsSidebars:k,path:O,sidebar:v,sidebarCollapsible:w}=e;if(Object(d.a)(t),!v)return null;const C=k[v];if(!C)throw new Error(`Cannot find the sidebar "${v}" in the sidebar config!`);return w&&C.forEach(e=>function e(t,n){const{items:a,href:r,type:o}=t;switch(o){case"category":{const r=a.map(t=>e(t,n)).filter(e=>e).length>0;return t.collapsed=!r,r}case"link":default:return r===n}}(e,O)),r.a.createElement("div",{className:g.a.sidebar},l&&r.a.createElement(f.a,Object(s.a)({className:g.a.sidebarLogo,to:u},b),null!=h&&r.a.createElement("img",{key:i,src:h,alt:E}),null!=o&&r.a.createElement("strong",null,o)),r.a.createElement("div",{className:m()("menu","menu--responsive",g.a.menu,{"menu--show":t})},r.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{n(!t)}},t?r.a.createElement("span",{className:m()(g.a.sidebarMenuIcon,g.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:g.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},C.map(e=>r.a.createElement(y,{key:e.label,item:e,onItemClick:()=>{n(!1)},collapsible:w})))))},k=n(335),O=(n(100),n(101)),v=n.n(O);var w=e=>function({id:t,...n}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:a=!1}={}}={}}={}}=Object(c.a)();return t?r.a.createElement(e,n,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:m()("anchor",{[v.a.enhancedAnchor]:!a}),id:t}),r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#"),n.children):r.a.createElement(e,n)},C=n(102),j=n.n(C),N={code:e=>{const{children:t}=e;return"string"==typeof t?r.a.createElement(k.a,e):t},a:e=>/\.[^./]+$/.test(e.href)?r.a.createElement("a",e):r.a.createElement(f.a,e),pre:e=>r.a.createElement("div",Object(s.a)({className:j.a.mdxCodeBlock},e)),h1:w("h1"),h2:w("h2"),h3:w("h3"),h4:w("h4"),h5:w("h5"),h6:w("h6")},_=n(384),P=n(334),T=n(103),I=n.n(T);t.default=function(e){const{route:t,docsMetadata:n,location:a}=e,s=t.routes.find(e=>Object(P.a)(a.pathname,e))||{},{permalinkToSidebar:u,docsSidebars:m,version:d}=n,p=u[s.path],{siteConfig:{themeConfig:f={}}={},isClient:b}=Object(c.a)(),{sidebarCollapsible:h=!0}=f;return 0===Object.keys(s).length?r.a.createElement(_.default,e):r.a.createElement(i.a,{version:d,key:b},r.a.createElement("div",{className:I.a.docPage},p&&r.a.createElement("div",{className:I.a.docSidebarContainer},r.a.createElement(E,{docsSidebars:m,path:s.path,sidebar:p,sidebarCollapsible:h})),r.a.createElement("main",{className:I.a.docMainContainer},r.a.createElement(o.a,{components:N},Object(l.a)(t.routes)))))}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},m=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?r.a.createElement(f,l({ref:t},s,{components:n})):r.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return l}));var a=n(306),r=n.n(a);function o(){if(window.location.hash.startsWith("#src=")){const e=window.location.hash.replace("#src=","").trim();return decodeURIComponent(e)}if(window.location.hash.startsWith("#code/")){var e;const t=window.location.hash.replace("#code/","").trim();return null!=(e=r.a.decompressFromEncodedURIComponent(t))?e:""}return"// Declare exposed API\ntype Vector = [number, number, number];\n\ndeclare function findUnitsInRadius(this: void, center: Vector, radius: number): Unit[];\ndeclare interface Unit {\n    isEnemy(other: Unit): boolean;\n    kill(): void;\n}\n\n\n// Use declared API in code\nfunction onAbilityCast(this: void, caster: Unit, targetLocation: Vector) {\n    const units = findUnitsInRadius(targetLocation, 500);\n    const enemies = units.filter(unit => caster.isEnemy(unit));\n\n    for (const enemy of enemies) {\n        enemy.kill();\n    }\n}\n"}function c(e){const t="code/"+r.a.compressToEncodedURIComponent(e);window.history.replaceState({},"","#"+t)}function l(e){return"/play/#code/"+r.a.compressToEncodedURIComponent(e)}},335:function(e,t,n){"use strict";var a=n(1),r=n(250),o=n(221),c=n(274),l=n(237),i=n.n(l),s=n(389),u=n.n(s),m=n(390),d=n.n(m),p=n(447),f=n(391),b=n.n(f),h=n(0),g=n.n(h),y=n(292),E=n(336),k=n.n(E);t.a=({children:e,className:t,metastring:n=""})=>{var l,s;const{siteConfig:{themeConfig:{prism:m={}}}}=Object(o.a)(),{prismTheme:f,mounted:E}=function(e){const[t,n]=Object(h.useState)(!1);Object(h.useEffect)(()=>{n(!0)},[]);const{isDarkTheme:a}=Object(c.a)(),r=e.theme||b.a,o=e.darkTheme||r;return{prismTheme:a?o:r,mounted:t}}(m),{showCopied:O,handleCopyCode:v,target:w,button:C}=function(){const e=Object(h.useRef)(null),t=Object(h.useRef)(null),[n,a]=Object(h.useState)(!1);return Object(h.useEffect)(()=>{let n;return t.current&&(n=new u.a(t.current,{target:()=>e.current})),()=>{n&&n.destroy()}},[t.current,e.current]),{showCopied:n,handleCopyCode:()=>{window.getSelection().empty(),a(!0),setTimeout(()=>a(!1),2e3)},target:e,button:t}}(),j=e.trim(),[,N]=null!=(l=n.match(/title=(.+)( |$)/))?l:[],[,_]=null!=(s=n.match(/{([\d,-]+)}/))?s:[],P=null!=_?d.a.parse(_).filter(e=>e>0):[];let T=t&&t.replace(/language-/,"");!T&&m.defaultLanguage&&(T=m.defaultLanguage);const I="ts"===T||"typescript"===T;return g.a.createElement(p.a,Object(a.a)({},p.b,{key:E,theme:f,code:j,language:T}),({className:e,style:t,tokens:n,getLineProps:o,getTokenProps:c})=>g.a.createElement(g.a.Fragment,null,N&&g.a.createElement("div",{className:k.a.title},N),g.a.createElement("pre",{className:i()(e,k.a.codeBlock,N&&k.a.hasTitle)},g.a.createElement("button",{ref:C,type:"button","aria-label":"Copy code to clipboard",className:k.a.copyButton,onClick:v},O?"Copied":"Copy"),I&&g.a.createElement(r.a,{"aria-label":"Open code on playground",className:k.a.playgroundButton,to:Object(y.b)(j),target:"_blank"},"Playground"),g.a.createElement("code",{ref:w,className:k.a.codeBlockLines,style:t},n.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=o({line:e,key:t});return P.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),g.a.createElement("div",Object(a.a)({key:t},n),e.map((e,t)=>g.a.createElement("span",Object(a.a)({key:t},c({token:e,key:t})))))})))))}},336:function(e,t,n){e.exports={codeBlock:"codeBlock_222H",hasTitle:"hasTitle_1PmY",title:"title_1twf",codeBlockLines:"codeBlockLines_3zpG",copyButton:"copyButton_ujp3",playgroundButton:"playgroundButton_3DKR"}},384:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(305);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);