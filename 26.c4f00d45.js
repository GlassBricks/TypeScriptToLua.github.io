(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{273:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return i}));var n=a(290),r=a.n(n);function s(){if(window.location.hash.startsWith("#src=")){const e=window.location.hash.replace("#src=","").trim();return decodeURIComponent(e)}if(window.location.hash.startsWith("#code/")){const e=window.location.hash.replace("#code/","").trim();return r.a.decompressFromEncodedURIComponent(e)||""}return"// Declare exposed API\ntype Vector = [number, number, number];\n\ndeclare function findUnitsInRadius(this: void, center: Vector, radius: number): Unit[];\ndeclare interface Unit {\n    isEnemy(other: Unit): boolean;\n    kill(): void;\n}\n\n\n// Use declared API in code\nfunction onAbilityCast(this: void, caster: Unit, targetLocation: Vector) {\n    const units = findUnitsInRadius(targetLocation, 500);\n    const enemies = units.filter(unit => caster.isEnemy(unit));\n\n    for (const enemy of enemies) {\n        enemy.kill();\n    }\n}\n"}function o(e){const t=`code/${r.a.compressToEncodedURIComponent(e)}`;window.history.replaceState({},"",`#${t}`)}function i(e){return`/play/#code/${r.a.compressToEncodedURIComponent(e)}`}},688:function(e,t,a){var n={"./lib.d.ts":689,"./lib.es2015.collection.d.ts":690,"./lib.es2015.core.d.ts":691,"./lib.es2015.d.ts":692,"./lib.es2015.generator.d.ts":693,"./lib.es2015.iterable.d.ts":694,"./lib.es2015.promise.d.ts":695,"./lib.es2015.proxy.d.ts":696,"./lib.es2015.reflect.d.ts":697,"./lib.es2015.symbol.d.ts":698,"./lib.es2015.symbol.wellknown.d.ts":699,"./lib.es2016.array.include.d.ts":700,"./lib.es2016.d.ts":701,"./lib.es2016.full.d.ts":702,"./lib.es2017.d.ts":703,"./lib.es2017.full.d.ts":704,"./lib.es2017.intl.d.ts":705,"./lib.es2017.object.d.ts":706,"./lib.es2017.sharedmemory.d.ts":707,"./lib.es2017.string.d.ts":708,"./lib.es2017.typedarrays.d.ts":709,"./lib.es2018.asyncgenerator.d.ts":710,"./lib.es2018.asynciterable.d.ts":711,"./lib.es2018.d.ts":712,"./lib.es2018.full.d.ts":713,"./lib.es2018.intl.d.ts":714,"./lib.es2018.promise.d.ts":715,"./lib.es2018.regexp.d.ts":716,"./lib.es2019.array.d.ts":717,"./lib.es2019.d.ts":718,"./lib.es2019.full.d.ts":719,"./lib.es2019.object.d.ts":720,"./lib.es2019.string.d.ts":721,"./lib.es2019.symbol.d.ts":722,"./lib.es2020.bigint.d.ts":723,"./lib.es2020.d.ts":724,"./lib.es2020.full.d.ts":725,"./lib.es2020.intl.d.ts":726,"./lib.es2020.promise.d.ts":727,"./lib.es2020.sharedmemory.d.ts":728,"./lib.es2020.string.d.ts":729,"./lib.es2020.symbol.wellknown.d.ts":730,"./lib.es2021.d.ts":731,"./lib.es2021.full.d.ts":732,"./lib.es2021.promise.d.ts":733,"./lib.es2021.string.d.ts":734,"./lib.es2021.weakref.d.ts":735,"./lib.es5.d.ts":736,"./lib.es6.d.ts":737,"./lib.esnext.d.ts":738,"./lib.esnext.full.d.ts":739,"./lib.esnext.intl.d.ts":740,"./lib.esnext.promise.d.ts":741,"./lib.esnext.string.d.ts":742,"./lib.esnext.weakref.d.ts":743};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=688},744:function(e,t,a){"use strict";a.r(t),t.default="declare var console: Console;\ninterface Console {\n    assert(condition?: boolean, ...data: any[]): void;\n    clear(): void;\n    count(label?: string): void;\n    // countReset(label?: string): void;\n    debug(...data: any[]): void;\n    // dir(item?: any, options?: any): void;\n    // dirxml(...data: any[]): void;\n    error(...data: any[]): void;\n    // exception(message?: string, ...optionalParams: any[]): void;\n    // group(...data: any[]): void;\n    // groupCollapsed(...data: any[]): void;\n    // groupEnd(): void;\n    info(...data: any[]): void;\n    log(...data: any[]): void;\n    table(tabularData?: any, properties?: string[]): void;\n    time(label?: string): void;\n    timeEnd(label?: string): void;\n    // timeLog(label?: string, ...data: any[]): void;\n    // timeStamp(label?: string): void;\n    // trace(...data: any[]): void;\n    warn(...data: any[]): void;\n}\n"},745:function(e,t,a){var n={"./coroutine.d.ts":746,"./debug.d.ts":747,"./global.d.ts":748,"./index.d.ts":749,"./io.d.ts":750,"./math.d.ts":751,"./metatable.d.ts":752,"./modules.d.ts":753,"./os.d.ts":754,"./string.d.ts":755,"./table.d.ts":756};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=745},761:function(e,t,a){var n={"./index.d.ts":457};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=761},762:function(e,t,a){e.exports={navbar:"navbar_2WwY",navbarVersions:"navbarVersions_3EZX",navBarPanelSelection:"navBarPanelSelection_2pew",content:"content_13-L",contentPane:"contentPane_JaAR",outputEditor:"outputEditor_1yiM",outputControls:"outputControls_3yi_",luaOutput:"luaOutput_1hNj",luaOutputLineNumbers:"luaOutputLineNumbers_12IE",luaOutputTerminal:"luaOutputTerminal_lgYg",contentPaneHiddenMobile:"contentPaneHiddenMobile_e5vo"}},766:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return U}));var n=a(255),r=a(196),s=a(583),o=a(0),i=a.n(o),l=a(622),c=a.n(l),u=a(767),d=a(682),p=a(683);var O=a(273);function b(){return new Worker(a.p+"fengari.worker.js")}let m=new b;var E=a(218),g=(a(765),a(685),a(686),a(770),a(687));function f(){return new Worker(a.p+"ts.worker.js")}function _(){const{isDarkTheme:e}=Object(n.a)();return e?"vs-dark":"vs"}function v(e,t){for(const a of e.keys())if(t){const n=a.replace("./",t+"/");E.languages.typescript.typescriptDefaults.addExtraLib(e(a).default,n)}else E.languages.typescript.typescriptDefaults.addExtraLib(e(a).default)}globalThis.MonacoEnvironment={getWorker:(e,t)=>"typescript"===t?new f:new g.a},v(a(688)),E.languages.typescript.typescriptDefaults.addExtraLib(a(744).default),v(a(745));for(const G of[a(757),a(758),a(759),a(760)])E.languages.typescript.typescriptDefaults.addExtraLib(G.default);v(a(761),"/language-extensions"),E.languages.typescript.typescriptDefaults.addExtraLib(a(457).default,"/language-extensions/index.d.ts"),E.languages.typescript.typescriptDefaults.setCompilerOptions({...E.languages.typescript.typescriptDefaults.getCompilerOptions(),strict:!0});var L=a(762),T=a.n(L);const y={scheme:"monokai",author:"wimer hazenberg (http://www.monokai.nl)",base00:"#1e1e1e",base01:"#383830",base02:"#49483e",base03:"#75715e",base04:"#a59f85",base05:"#f8f8f2",base06:"#f5f4f1",base07:"#f9f8f5",base08:"#f92672",base09:"#fd971f",base0A:"#f4bf75",base0B:"#a6e22e",base0C:"#a1efe4",base0D:"#66d9ef",base0E:"#ae81ff",base0F:"#cc6633"},w=e=>({PADDING:"0.4rem 1.5rem 0.4rem 0px",LOG_ICON:"",LOG_BORDER:"#80808059",LOG_ICON_HEIGHT:"26px",LOG_ICON_WIDTH:"1em",LOG_COMMAND_ICON:"url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(255, 255, 255, 0.8)' viewBox='0 0 40 40'%3e%3cpath d='M16.6 10l10 10-10 10-2.3-2.3L22 20l-7.7-7.7z'/%3e%3c/svg%3e\")",LOG_RESULT_ICON:"url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(255, 255, 255, 0.8)' preserveAspectRatio='xMidYMid meet' viewBox='0 0 40 40'%3e%3cg%3e%3cpath d='m22 30.7q0 0.3-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.3 0.2 0.5t-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5z m8.6 0q0 0.3-0.3 0.5l-1.1 1.1q-0.2 0.3-0.5 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.2-0.2 0.5-0.2t0.5 0.2l1.1 1.1q0.3 0.3 0.3 0.5t-0.3 0.6l-8.7 8.7 8.7 8.8q0.3 0.2 0.3 0.5z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e\")",LOG_WARN_COLOR:"rgb(245, 211, 150)",LOG_WARN_BACKGROUND:"#332A00",LOG_WARN_BORDER:"#665500",LOG_WARN_ICON:"url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23F5D396' viewBox='0 0 40 40'%3e%3cpath d='M21.6 23.4v-6.8h-3.2v6.8h3.2zm0 6.6v-3.4h-3.2V30h3.2zm-20 5L20 3.4 38.4 35H1.6z'/%3e%3c/svg%3e\")",LOG_ERROR_COLOR:"rgb(254, 127, 127)",LOG_ERROR_BACKGROUND:"#280000",LOG_ERROR_BORDER:"#5B0000",LOG_ERROR_ICON:"url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23FE7F7F' viewBox='0 0 40 40'%3e%3cpath d='M21.6 21.6v-10h-3.2v10h3.2zm0 6.8V25h-3.2v3.4h3.2zM20 3.4a16.6 16.6 0 1 1 0 33.2 16.6 16.6 0 1 1 0-33.2z'/%3e%3c/svg%3e\")",BASE_FONT_FAMILY:"Menlo, monospace",BASE_FONT_SIZE:"13px",BASE_LINE_HEIGHT:"18px",BASE_BACKGROUND_COLOR:"rgba(0, 0, 0, 0)",LOG_COLOR:e?"rgb(213, 213, 213)":"rgb(52, 52, 52)",OBJECT_NAME_COLOR:"#40A9F3",OBJECT_VALUE_NULL_COLOR:"rgb(127, 127, 127)",OBJECT_VALUE_UNDEFINED_COLOR:"rgb(127, 127, 127)",OBJECT_VALUE_REGEXP_COLOR:"#fac863",OBJECT_VALUE_STRING_COLOR:"#fac863",OBJECT_VALUE_SYMBOL_COLOR:"#fac863",OBJECT_VALUE_NUMBER_COLOR:"hsl(252, 100%, 75%)",OBJECT_VALUE_BOOLEAN_COLOR:"hsl(252, 100%, 75%)",OBJECT_VALUE_FUNCTION_KEYWORD_COLOR:"rgb(242, 85, 217)",HTML_TAG_COLOR:"rgb(93, 176, 215)",HTML_TAGNAME_COLOR:"rgb(93, 176, 215)",HTML_TAGNAME_TEXT_TRANSFORM:"lowercase",HTML_ATTRIBUTE_NAME_COLOR:"rgb(155, 187, 220)",HTML_ATTRIBUTE_VALUE_COLOR:"rgb(242, 151, 102)",HTML_COMMENT_COLOR:"rgb(137, 137, 137)",HTML_DOCTYPE_COLOR:"rgb(192, 192, 192)",ARROW_COLOR:"rgb(145, 145, 145)",ARROW_MARGIN_RIGHT:3,ARROW_FONT_SIZE:11,TREENODE_FONT_FAMILY:"Menlo, monospace",TREENODE_FONT_SIZE:"13px",TREENODE_LINE_HEIGHT:"16px",TREENODE_PADDING_LEFT:12,TABLE_BORDER_COLOR:"rgb(85, 85, 85)",TABLE_TH_BACKGROUND_COLOR:"rgb(44, 44, 44)",TABLE_TH_HOVER_COLOR:"rgb(48, 48, 48)",TABLE_SORT_ICON_COLOR:"black",TABLE_DATA_BACKGROUND_IMAGE:"linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",TABLE_DATA_BACKGROUND_SIZE:"128px 32px"});var R;!function(e){e[e.Input=0]="Input",e[e.Output=1]="Output"}(R||(R={}));const h=i.a.createContext(null);function C({children:e}){const[t,a]=Object(o.useState)(R.Input);return i.a.createElement(h.Provider,{value:{activePanel:t,setActivePanel:a}},e)}const N=i.a.createContext(null);function x({children:e}){const[t,a]=Object(o.useState)({source:"",lua:"",ast:{},sourceMap:"",results:[]}),n=Object(o.useCallback)((async e=>{const t=await E.languages.typescript.getTypeScriptWorker(),n=await t(e.uri),{lua:r,ast:s,sourceMap:o}=await n.getTranspileOutput(e.uri.toString()),i=e.getValue();a({source:i,lua:r,ast:s,sourceMap:o,results:[]});const l=await async function(e){return new Promise((t=>{const a=setTimeout((()=>{t([{method:"log",data:["%cLua code execution timed out","font-style: italic"]}]),m.terminate(),m=new b}),2500);m.postMessage({code:e}),m.addEventListener("message",(e=>{clearTimeout(a),t(e.data.messages)}))}))}(r);a({source:i,lua:r,ast:s,sourceMap:o,results:l})}),[]);return i.a.createElement(N.Provider,{value:{updateModel:n,...t}},e)}const A={minimap:{enabled:!1},automaticLayout:!0,scrollbar:{useShadows:!1},fixedOverflowWidgets:!0};function S(){const e=_(),t=Object(o.useRef)(null),{updateModel:a}=Object(o.useContext)(N);Object(o.useEffect)((()=>{a(t.current.editor.getModel())}),[]);const n=Object(o.useCallback)(function(e,t){let a;return(...n)=>{clearTimeout(a),a=setTimeout((()=>e(...n)),t)}}((e=>{Object(O.c)(e),a(t.current.editor.getModel())}),250),[]),{activePanel:s}=Object(o.useContext)(h);return i.a.createElement("div",{className:Object(r.a)(T.a.contentPane,s!=R.Input&&T.a.contentPaneHiddenMobile)},i.a.createElement(u.a,{theme:e,language:"typescript",defaultValue:Object(O.a)(),options:A,onChange:n,ref:t}))}const B={0:"File",1:"Block",2:"DoStatement",3:"VariableDeclarationStatement",4:"AssignmentStatement",5:"IfStatement",6:"WhileStatement",7:"RepeatStatement",8:"ForStatement",9:"ForInStatement",10:"GotoStatement",11:"LabelStatement",12:"ReturnStatement",13:"BreakStatement",14:"ExpressionStatement",15:"StringLiteral",16:"NumericLiteral",17:"NilKeyword",18:"DotsKeyword",19:"TrueKeyword",20:"FalseKeyword",21:"FunctionExpression",22:"TableFieldExpression",23:"TableExpression",24:"UnaryExpression",25:"BinaryExpression",26:"CallExpression",27:"MethodCallExpression",28:"Identifier",29:"TableIndexExpression",30:"AdditionOperator",31:"SubtractionOperator",32:"MultiplicationOperator",33:"DivisionOperator",34:"FloorDivisionOperator",35:"ModuloOperator",36:"PowerOperator",37:"NegationOperator",38:"ConcatOperator",39:"LengthOperator",40:"EqualityOperator",41:"InequalityOperator",42:"LessThanOperator",43:"LessEqualOperator",44:"GreaterThanOperator",45:"GreaterEqualOperator",46:"AndOperator",47:"OrOperator",48:"NotOperator",49:"BitwiseAndOperator",50:"BitwiseOrOperator",51:"BitwiseExclusiveOrOperator",52:"BitwiseRightShiftOperator",53:"BitwiseLeftShiftOperator",54:"BitwiseNotOperator",File:0,Block:1,DoStatement:2,VariableDeclarationStatement:3,AssignmentStatement:4,IfStatement:5,WhileStatement:6,RepeatStatement:7,ForStatement:8,ForInStatement:9,GotoStatement:10,LabelStatement:11,ReturnStatement:12,BreakStatement:13,ExpressionStatement:14,StringLiteral:15,NumericLiteral:16,NilKeyword:17,DotsKeyword:18,TrueKeyword:19,FalseKeyword:20,FunctionExpression:21,TableFieldExpression:22,TableExpression:23,UnaryExpression:24,BinaryExpression:25,CallExpression:26,MethodCallExpression:27,Identifier:28,TableIndexExpression:29,AdditionOperator:30,SubtractionOperator:31,MultiplicationOperator:32,DivisionOperator:33,FloorDivisionOperator:34,ModuloOperator:35,PowerOperator:36,NegationOperator:37,ConcatOperator:38,LengthOperator:39,EqualityOperator:40,InequalityOperator:41,LessThanOperator:42,LessEqualOperator:43,GreaterThanOperator:44,GreaterEqualOperator:45,AndOperator:46,OrOperator:47,NotOperator:48,BitwiseAndOperator:49,BitwiseOrOperator:50,BitwiseExclusiveOrOperator:51,BitwiseRightShiftOperator:52,BitwiseLeftShiftOperator:53,BitwiseNotOperator:54};function M({ast:e}){const{isDarkTheme:t}=Object(n.a)();return i.a.createElement(c.a,{data:e,hideRoot:!0,theme:y,invertTheme:!t,valueRenderer:(e,t,a)=>"kind"===a?i.a.createElement("em",null,B[t]):i.a.createElement("em",null,e)})}function D(){const{isDarkTheme:e}=Object(n.a)(),{results:t}=Object(o.useContext)(N);return i.a.createElement("div",{className:T.a.luaOutput},i.a.createElement("div",{className:T.a.luaOutputLineNumbers},">_"),i.a.createElement("div",{className:T.a.luaOutputTerminal},i.a.createElement(s.Console,{key:e,logs:t,variant:e?"dark":"light",styles:w(e)})))}function I(){const e=_(),{source:t,lua:a,sourceMap:n,ast:s}=Object(o.useContext)(N),[l,c]=Object(o.useState)(!1),d=Object(o.useCallback)((()=>c((e=>!e))),[]),p=Object(o.useMemo)((()=>`https://sokra.github.io/source-map-visualization#base64,${[a,n,t].map((e=>btoa(e.replace(/[^\x00-\x7F]/g,"?")))).join(",")}`),[a,n,t]),{activePanel:O}=Object(o.useContext)(h);return i.a.createElement("div",{className:Object(r.a)(T.a.contentPane,O!=R.Output&&T.a.contentPaneHiddenMobile)},i.a.createElement("div",{className:T.a.outputEditor},i.a.createElement("div",{style:{height:"100%",display:l?"none":"block"}},i.a.createElement(u.a,{theme:e,language:"lua",value:a,options:{...A,scrollBeyondLastLine:!1,scrollBeyondLastColumn:15,readOnly:!0}})),i.a.createElement("div",{style:{height:"100%",overflow:"auto",display:l?"block":"none"}},i.a.createElement(M,{ast:s})),i.a.createElement("div",{className:T.a.outputControls},i.a.createElement("button",{className:Object(r.a)("button button--outline button--primary",!l&&"button--active"),onClick:d},l?"Text":"Lua AST"),i.a.createElement("a",{className:"button button--success",href:p,target:"_blank"},"Source Map"))),i.a.createElement(D,null))}function k(){const e=`https://www.typescriptlang.org/docs/handbook/release-notes/typescript-${p.a.split(".")[0]}-${p.a.split(".")[1]}.html`,{activePanel:t,setActivePanel:a}=Object(o.useContext)(h);return i.a.createElement("nav",{className:T.a.navbar},i.a.createElement("div",{className:T.a.navbarVersions},"TSTL"," ",i.a.createElement("a",{href:"https://github.com/TypeScriptToLua/TypeScriptToLua/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener"},i.a.createElement("b",null,"v",d.a)),i.a.createElement("br",null),"\xa0\xa0TS"," ",i.a.createElement("a",{href:e,target:"_blank",rel:"noopener"},i.a.createElement("b",null,"v",p.a))),i.a.createElement("div",{className:T.a.navBarPanelSelection},i.a.createElement("button",{className:Object(r.a)("button button--primary button--outline",0==t&&"button--active"),onClick:()=>a(R.Input)},"TS Input"),i.a.createElement("button",{className:Object(r.a)("button button--primary button--outline",1==t&&"button--active"),onClick:()=>a(R.Output)},"Lua Output")))}function U(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(C,null,i.a.createElement(k,null),i.a.createElement("div",{className:T.a.content},i.a.createElement(x,null,i.a.createElement(S,null),i.a.createElement(I,null)))))}}}]);