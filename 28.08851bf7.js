(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{309:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return i}));var n=a(327),r=a.n(n);function s(){if(window.location.hash.startsWith("#src=")){const e=window.location.hash.replace("#src=","").trim();return decodeURIComponent(e)}if(window.location.hash.startsWith("#code/")){const e=window.location.hash.replace("#code/","").trim();return r.a.decompressFromEncodedURIComponent(e)||""}return"// Declare exposed API\ntype Vector = [number, number, number];\n\ndeclare function findUnitsInRadius(this: void, center: Vector, radius: number): Unit[];\ndeclare interface Unit {\n    isEnemy(other: Unit): boolean;\n    kill(): void;\n}\n\n\n// Use declared API in code\nfunction onAbilityCast(this: void, caster: Unit, targetLocation: Vector) {\n    const units = findUnitsInRadius(targetLocation, 500);\n    const enemies = units.filter(unit => caster.isEnemy(unit));\n\n    for (const enemy of enemies) {\n        enemy.kill();\n    }\n}\n"}function o(e){const t="code/"+r.a.compressToEncodedURIComponent(e);window.history.replaceState({},"","#"+t)}function i(e){return"/play/#code/"+r.a.compressToEncodedURIComponent(e)}},819:function(e,t,a){e.exports=function(){return new Worker(a.p+"fengari.worker.js")}},823:function(e,t,a){e.exports=function(){return new Worker(a.p+"ts.worker.js")}},824:function(e,t,a){var n={"./lib.d.ts":825,"./lib.es2015.collection.d.ts":826,"./lib.es2015.core.d.ts":827,"./lib.es2015.d.ts":828,"./lib.es2015.generator.d.ts":829,"./lib.es2015.iterable.d.ts":830,"./lib.es2015.promise.d.ts":831,"./lib.es2015.proxy.d.ts":832,"./lib.es2015.reflect.d.ts":833,"./lib.es2015.symbol.d.ts":834,"./lib.es2015.symbol.wellknown.d.ts":835,"./lib.es2016.array.include.d.ts":836,"./lib.es2016.d.ts":837,"./lib.es2016.full.d.ts":838,"./lib.es2017.d.ts":839,"./lib.es2017.full.d.ts":840,"./lib.es2017.intl.d.ts":841,"./lib.es2017.object.d.ts":842,"./lib.es2017.sharedmemory.d.ts":843,"./lib.es2017.string.d.ts":844,"./lib.es2017.typedarrays.d.ts":845,"./lib.es2018.asyncgenerator.d.ts":846,"./lib.es2018.asynciterable.d.ts":847,"./lib.es2018.d.ts":848,"./lib.es2018.full.d.ts":849,"./lib.es2018.intl.d.ts":850,"./lib.es2018.promise.d.ts":851,"./lib.es2018.regexp.d.ts":852,"./lib.es2019.array.d.ts":853,"./lib.es2019.d.ts":854,"./lib.es2019.full.d.ts":855,"./lib.es2019.object.d.ts":856,"./lib.es2019.string.d.ts":857,"./lib.es2019.symbol.d.ts":858,"./lib.es2020.bigint.d.ts":859,"./lib.es2020.d.ts":860,"./lib.es2020.full.d.ts":861,"./lib.es2020.promise.d.ts":862,"./lib.es2020.string.d.ts":863,"./lib.es2020.symbol.wellknown.d.ts":864,"./lib.es5.d.ts":865,"./lib.es6.d.ts":866,"./lib.esnext.array.d.ts":867,"./lib.esnext.asynciterable.d.ts":868,"./lib.esnext.bigint.d.ts":869,"./lib.esnext.d.ts":870,"./lib.esnext.full.d.ts":871,"./lib.esnext.intl.d.ts":872,"./lib.esnext.promise.d.ts":873,"./lib.esnext.string.d.ts":874,"./lib.esnext.symbol.d.ts":875};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=824},876:function(e,t,a){"use strict";a.r(t),t.default="declare var console: Console;\ninterface Console {\n    assert(condition?: boolean, ...data: any[]): void;\n    clear(): void;\n    count(label?: string): void;\n    // countReset(label?: string): void;\n    debug(...data: any[]): void;\n    // dir(item?: any, options?: any): void;\n    // dirxml(...data: any[]): void;\n    error(...data: any[]): void;\n    // exception(message?: string, ...optionalParams: any[]): void;\n    // group(...data: any[]): void;\n    // groupCollapsed(...data: any[]): void;\n    // groupEnd(): void;\n    info(...data: any[]): void;\n    log(...data: any[]): void;\n    table(tabularData?: any, properties?: string[]): void;\n    time(label?: string): void;\n    timeEnd(label?: string): void;\n    // timeLog(label?: string, ...data: any[]): void;\n    // timeStamp(label?: string): void;\n    // trace(...data: any[]): void;\n    warn(...data: any[]): void;\n}\n"},877:function(e,t,a){var n={"./coroutine.d.ts":878,"./debug.d.ts":879,"./global.d.ts":880,"./index.d.ts":881,"./io.d.ts":882,"./math.d.ts":883,"./metatable.d.ts":884,"./modules.d.ts":885,"./os.d.ts":886,"./string.d.ts":887,"./table.d.ts":888};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=877},893:function(e,t,a){e.exports={navbar:"navbar_2WwY",navbarVersion:"navbarVersion_WEx5",content:"content_13-L",contentPane:"contentPane_JaAR",outputEditor:"outputEditor_1yiM",outputControls:"outputControls_3yi_",editorOutput:"editorOutput_3sJH",editorOutputLineNumbers:"editorOutputLineNumbers_1Y45",editorOutputTerminal:"editorOutputTerminal_2Q-0"}},897:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return G}));var n=a(291),r=a(642),s=a(643),o=a(0),i=a.n(o),l=a(747),c=a.n(l),d=a(812),u=a.n(d),O=a(817),p=a(818);var b=a(309),m=a(819),E=a.n(m);let g=new E.a;a(12);var _=a(288),f=(a(896),a(820),a(821),a(900),a(822)),L=a.n(f),v=a(823),T=a.n(v);function R(){const{isDarkTheme:e}=Object(n.a)();return e?"vs-dark":"vs"}function y(e){for(const t of e.keys())_.languages.typescript.typescriptDefaults.addExtraLib(e(t).default)}globalThis.MonacoEnvironment={getWorker:(e,t)=>"typescript"===t?new T.a:new L.a},y(a(824)),_.languages.typescript.typescriptDefaults.addExtraLib(a(876).default),y(a(877));for(const k of[a(889),a(890),a(891),a(892)])_.languages.typescript.typescriptDefaults.addExtraLib(k.default);_.languages.typescript.typescriptDefaults.setCompilerOptions({..._.languages.typescript.typescriptDefaults.getCompilerOptions(),strict:!0});var w=a(893),h=a.n(w);const C={scheme:"monokai",author:"wimer hazenberg (http://www.monokai.nl)",base00:"#1e1e1e",base01:"#383830",base02:"#49483e",base03:"#75715e",base04:"#a59f85",base05:"#f8f8f2",base06:"#f5f4f1",base07:"#f9f8f5",base08:"#f92672",base09:"#fd971f",base0A:"#f4bf75",base0B:"#a6e22e",base0C:"#a1efe4",base0D:"#66d9ef",base0E:"#ae81ff",base0F:"#cc6633"},N=e=>({PADDING:"0.4rem 1.5rem 0.4rem 0px",LOG_ICON:"",LOG_BORDER:"#80808059",LOG_ICON_HEIGHT:"26px",LOG_ICON_WIDTH:"1em",LOG_COMMAND_ICON:"url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(255, 255, 255, 0.8)' viewBox='0 0 40 40'%3e%3cpath d='M16.6 10l10 10-10 10-2.3-2.3L22 20l-7.7-7.7z'/%3e%3c/svg%3e\")",LOG_RESULT_ICON:"url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(255, 255, 255, 0.8)' preserveAspectRatio='xMidYMid meet' viewBox='0 0 40 40'%3e%3cg%3e%3cpath d='m22 30.7q0 0.3-0.2 0.5l-1.1 1.1q-0.3 0.3-0.6 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.3-0.2 0.5-0.2t0.6 0.2l1.1 1.1q0.2 0.3 0.2 0.5t-0.2 0.6l-8.8 8.7 8.8 8.8q0.2 0.2 0.2 0.5z m8.6 0q0 0.3-0.3 0.5l-1.1 1.1q-0.2 0.3-0.5 0.3t-0.5-0.3l-10.4-10.4q-0.2-0.2-0.2-0.5t0.2-0.5l10.4-10.4q0.2-0.2 0.5-0.2t0.5 0.2l1.1 1.1q0.3 0.3 0.3 0.5t-0.3 0.6l-8.7 8.7 8.7 8.8q0.3 0.2 0.3 0.5z'%3e%3c/path%3e%3c/g%3e%3c/svg%3e\")",LOG_WARN_COLOR:"rgb(245, 211, 150)",LOG_WARN_BACKGROUND:"#332A00",LOG_WARN_BORDER:"#665500",LOG_WARN_ICON:"url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23F5D396' viewBox='0 0 40 40'%3e%3cpath d='M21.6 23.4v-6.8h-3.2v6.8h3.2zm0 6.6v-3.4h-3.2V30h3.2zm-20 5L20 3.4 38.4 35H1.6z'/%3e%3c/svg%3e\")",LOG_ERROR_COLOR:"rgb(254, 127, 127)",LOG_ERROR_BACKGROUND:"#280000",LOG_ERROR_BORDER:"#5B0000",LOG_ERROR_ICON:"url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23FE7F7F' viewBox='0 0 40 40'%3e%3cpath d='M21.6 21.6v-10h-3.2v10h3.2zm0 6.8V25h-3.2v3.4h3.2zM20 3.4a16.6 16.6 0 1 1 0 33.2 16.6 16.6 0 1 1 0-33.2z'/%3e%3c/svg%3e\")",BASE_FONT_FAMILY:"Menlo, monospace",BASE_FONT_SIZE:"13px",BASE_LINE_HEIGHT:"18px",BASE_BACKGROUND_COLOR:"rgba(0, 0, 0, 0)",LOG_COLOR:e?"rgb(213, 213, 213)":"rgb(52, 52, 52)",OBJECT_NAME_COLOR:"#40A9F3",OBJECT_VALUE_NULL_COLOR:"rgb(127, 127, 127)",OBJECT_VALUE_UNDEFINED_COLOR:"rgb(127, 127, 127)",OBJECT_VALUE_REGEXP_COLOR:"#fac863",OBJECT_VALUE_STRING_COLOR:"#fac863",OBJECT_VALUE_SYMBOL_COLOR:"#fac863",OBJECT_VALUE_NUMBER_COLOR:"hsl(252, 100%, 75%)",OBJECT_VALUE_BOOLEAN_COLOR:"hsl(252, 100%, 75%)",OBJECT_VALUE_FUNCTION_KEYWORD_COLOR:"rgb(242, 85, 217)",HTML_TAG_COLOR:"rgb(93, 176, 215)",HTML_TAGNAME_COLOR:"rgb(93, 176, 215)",HTML_TAGNAME_TEXT_TRANSFORM:"lowercase",HTML_ATTRIBUTE_NAME_COLOR:"rgb(155, 187, 220)",HTML_ATTRIBUTE_VALUE_COLOR:"rgb(242, 151, 102)",HTML_COMMENT_COLOR:"rgb(137, 137, 137)",HTML_DOCTYPE_COLOR:"rgb(192, 192, 192)",ARROW_COLOR:"rgb(145, 145, 145)",ARROW_MARGIN_RIGHT:3,ARROW_FONT_SIZE:11,TREENODE_FONT_FAMILY:"Menlo, monospace",TREENODE_FONT_SIZE:"13px",TREENODE_LINE_HEIGHT:"16px",TREENODE_PADDING_LEFT:12,TABLE_BORDER_COLOR:"rgb(85, 85, 85)",TABLE_TH_BACKGROUND_COLOR:"rgb(44, 44, 44)",TABLE_TH_HOVER_COLOR:"rgb(48, 48, 48)",TABLE_SORT_ICON_COLOR:"black",TABLE_DATA_BACKGROUND_IMAGE:"linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",TABLE_DATA_BACKGROUND_SIZE:"128px 32px"}),x=i.a.createContext(null);function A({children:e}){const[t,a]=Object(o.useState)({source:"",lua:"",ast:{},sourceMap:"",results:[]}),n=Object(o.useCallback)(async e=>{const t=await _.languages.typescript.getTypeScriptWorker(),n=await t(e.uri),{lua:r,ast:s,sourceMap:o}=await n.getTranspileOutput(e.uri.toString()),i=e.getValue();a({source:i,lua:r,ast:s,sourceMap:o,results:[]});const l=await async function(e){return new Promise(t=>{const a=setTimeout(()=>{t([{method:"log",data:["%cLua code execution timed out","font-style: italic"]}]),g.terminate(),g=new E.a},2500);g.postMessage({code:e}),g.addEventListener("message",e=>{clearTimeout(a),t(e.data.messages)})})}(r);a({source:i,lua:r,ast:s,sourceMap:o,results:l})},[]);return i.a.createElement(x.Provider,{value:{updateModel:n,...t}},e)}const B={minimap:{enabled:!1},automaticLayout:!0,scrollbar:{useShadows:!1}};function S(){const e=R(),t=Object(o.useRef)(null),{updateModel:a}=Object(o.useContext)(x);Object(o.useEffect)(()=>{a(t.current.editor.getModel())},[]);const n=Object(o.useCallback)(function(e,t){let a;return(...n)=>{clearTimeout(a),a=setTimeout(()=>e(...n),t)}}(e=>{Object(b.c)(e),a(t.current.editor.getModel())},250),[]);return i.a.createElement("div",{className:h.a.contentPane},i.a.createElement(u.a,{theme:e,language:"typescript",defaultValue:Object(b.a)(),options:B,onChange:n,ref:t}))}const D={0:"Block",1:"DoStatement",2:"VariableDeclarationStatement",3:"AssignmentStatement",4:"IfStatement",5:"WhileStatement",6:"RepeatStatement",7:"ForStatement",8:"ForInStatement",9:"GotoStatement",10:"LabelStatement",11:"ReturnStatement",12:"BreakStatement",13:"ExpressionStatement",14:"StringLiteral",15:"NumericLiteral",16:"NilKeyword",17:"DotsKeyword",18:"TrueKeyword",19:"FalseKeyword",20:"FunctionExpression",21:"TableFieldExpression",22:"TableExpression",23:"UnaryExpression",24:"BinaryExpression",25:"CallExpression",26:"MethodCallExpression",27:"Identifier",28:"TableIndexExpression",29:"AdditionOperator",30:"SubtractionOperator",31:"MultiplicationOperator",32:"DivisionOperator",33:"FloorDivisionOperator",34:"ModuloOperator",35:"PowerOperator",36:"NegationOperator",37:"ConcatOperator",38:"LengthOperator",39:"EqualityOperator",40:"InequalityOperator",41:"LessThanOperator",42:"LessEqualOperator",43:"GreaterThanOperator",44:"GreaterEqualOperator",45:"AndOperator",46:"OrOperator",47:"NotOperator",48:"BitwiseAndOperator",49:"BitwiseOrOperator",50:"BitwiseExclusiveOrOperator",51:"BitwiseRightShiftOperator",52:"BitwiseLeftShiftOperator",53:"BitwiseNotOperator",Block:0,DoStatement:1,VariableDeclarationStatement:2,AssignmentStatement:3,IfStatement:4,WhileStatement:5,RepeatStatement:6,ForStatement:7,ForInStatement:8,GotoStatement:9,LabelStatement:10,ReturnStatement:11,BreakStatement:12,ExpressionStatement:13,StringLiteral:14,NumericLiteral:15,NilKeyword:16,DotsKeyword:17,TrueKeyword:18,FalseKeyword:19,FunctionExpression:20,TableFieldExpression:21,TableExpression:22,UnaryExpression:23,BinaryExpression:24,CallExpression:25,MethodCallExpression:26,Identifier:27,TableIndexExpression:28,AdditionOperator:29,SubtractionOperator:30,MultiplicationOperator:31,DivisionOperator:32,FloorDivisionOperator:33,ModuloOperator:34,PowerOperator:35,NegationOperator:36,ConcatOperator:37,LengthOperator:38,EqualityOperator:39,InequalityOperator:40,LessThanOperator:41,LessEqualOperator:42,GreaterThanOperator:43,GreaterEqualOperator:44,AndOperator:45,OrOperator:46,NotOperator:47,BitwiseAndOperator:48,BitwiseOrOperator:49,BitwiseExclusiveOrOperator:50,BitwiseRightShiftOperator:51,BitwiseLeftShiftOperator:52,BitwiseNotOperator:53};function M({ast:e}){const{isDarkTheme:t}=Object(n.a)();return i.a.createElement(c.a,{data:e,hideRoot:!0,theme:C,invertTheme:!t,valueRenderer:(e,t,a)=>"kind"===a?i.a.createElement("em",null,D[t]):i.a.createElement("em",null,e)})}function I(){const{isDarkTheme:e}=Object(n.a)(),{results:t}=Object(o.useContext)(x);return i.a.createElement("div",{className:h.a.editorOutput},i.a.createElement("div",{className:h.a.editorOutputLineNumbers},">_"),i.a.createElement("div",{className:h.a.editorOutputTerminal},i.a.createElement(s.Console,{key:e,logs:t,variant:e?"dark":"light",styles:N(e)})))}function U(){const e=R(),{source:t,lua:a,sourceMap:n,ast:s}=Object(o.useContext)(x),[l,c]=Object(o.useState)(!1),d=Object(o.useCallback)(()=>c(e=>!e),[]),O=Object(o.useMemo)(()=>"https://sokra.github.io/source-map-visualization#base64,"+[a,n,t].map(e=>btoa(e.replace(/[^\x00-\x7F]/g,"?"))).join(","),[a,n,t]);return i.a.createElement("div",{className:h.a.contentPane},i.a.createElement("div",{className:h.a.outputEditor},i.a.createElement("div",{style:{height:"100%",display:l?"none":"block"}},i.a.createElement(u.a,{theme:e,language:"lua",value:a,options:{...B,scrollBeyondLastLine:!1,scrollBeyondLastColumn:15,readOnly:!0}})),i.a.createElement("div",{style:{height:"100%",overflow:"auto",display:l?"block":"none"}},i.a.createElement(M,{ast:s})),i.a.createElement("div",{className:h.a.outputControls},i.a.createElement("button",{className:Object(r.a)("button button--outline button--primary",!l&&"button--active"),onClick:d},l?"Lua AST":"TEXT"),i.a.createElement("a",{className:"button button--success",href:O,target:"_blank"},"Source Map"))),i.a.createElement(I,null))}function G(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{className:h.a.navbar},i.a.createElement("div",{className:h.a.navbarVersion},"TSTL"," ",i.a.createElement("a",{href:"https://github.com/TypeScriptToLua/TypeScriptToLua/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener"},i.a.createElement("b",null,"v",O.a)),i.a.createElement("br",null),"\xa0\xa0TS ",i.a.createElement("b",null,"v",p.a))),i.a.createElement("div",{className:h.a.content},i.a.createElement(A,null,i.a.createElement(S,null),i.a.createElement(U,null))))}}}]);