(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5xem":function(n,e,t){"use strict";t.r(e);var l=t("CcnG"),u=t("0UkO"),i=t("AytR"),r=(t("hfLc"),function(){function n(){this.name="",this.sub=""}return Object.defineProperty(n.prototype,"ctx",{set:function(n){Object.assign(this,n)},enumerable:!0,configurable:!0}),n}()),o=new(t("fCI2").LoremIpsum),a=function(){function n(){this.list=[]}return Object.defineProperty(n.prototype,"ctx",{set:function(n){Object.assign(this,n),n.list.forEach(function(n){n.desc.startsWith("lorem")&&(n.desc=o.generateWords(+n.desc.split(",")[1]))})},enumerable:!0,configurable:!0}),n}(),c={HeroTag:r,ListAsideTag:a},s=function(){function n(n,e){void 0===e&&(e=""),this.base=e,this.type="",this.bgUrl="",Object.assign(this,n),this.tag=c[this.type]}return Object.defineProperty(n.prototype,"bg",{set:function(n){this.bgUrl=n?"url("+this.base+"/"+n+")":null},enumerable:!0,configurable:!0}),n}(),d=function(){return function(n){var e=this;this.d=n,n.topics().subscribe(function(n){e.topics=n.map(function(n){return new s(n,i.a.host.app)})})}}(),f={cld:u.a},p=function(){return function(){}}(),b=t("pMnS"),g=function(){function n(n){this.fr=n}return n.prototype.ngOnInit=function(){if(this.tag){var n=this.fr.resolveComponentFactory(this.tag);this.box.createComponent(n).instance.ctx=this.ctx}},n}(),m=l.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:inherit}.HeroTag[_nghost-%COMP%]{height:100%}"]],data:{}});function h(n){return l.Bb(0,[l.yb(402653184,1,{box:0}),l.vb(null,0),(n()(),l.ob(2,16777216,[[1,3],["box",1]],null,0,null,null,null,null,null,null,null))],null,null)}var v=t("Ip0R"),O=t("elQI"),P=l.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{color:var(--c)}[_nghost-%COMP%]   app-lander-section[_ngcontent-%COMP%]{display:block;background-repeat:no-repeat;background-size:cover;background-position:center}"]],data:{}});function y(n){return l.Bb(0,[(n()(),l.ob(0,0,null,null,1,"app-lander-section",[],[[8,"className",0],[4,"background-image",null]],null,null,h,m)),l.nb(1,114688,null,0,g,[l.j],{tag:[0,"tag"],ctx:[1,"ctx"]},null)],function(n,e){n(e,1,0,e.context.$implicit.tag,e.context.$implicit.ctx)},function(n,e){n(e,0,0,e.context.$implicit.type,e.context.$implicit.bgUrl)})}function _(n){return l.Bb(0,[(n()(),l.fb(16777216,null,null,1,null,y)),l.nb(1,278528,null,0,v.h,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],function(n,e){n(e,1,0,e.component.topics)},null)}function x(n){return l.Bb(0,[(n()(),l.ob(0,0,null,null,1,"app-lander-base",[],null,null,null,_,P)),l.nb(1,49152,null,0,d,[O.a],null,null)],null,null)}var M=l.kb("app-lander-base",d,x,{},{},[]),w=t("PVdz"),C=t("1AS4"),k=l.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{position:relative;display:block;min-height:100%;color:var(--c-w-d);text-shadow:2px 2px 5px var(--c-bl-d)}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{position:absolute;top:15%;right:5%;font-size:5rem;text-align:right}[_nghost-%COMP%]   .sub[_ngcontent-%COMP%]{font-size:1.5rem}"]],data:{}});function S(n){return l.Bb(0,[(n()(),l.ob(0,0,null,null,6,"div",[["class","title"]],null,null,null,null,null)),(n()(),l.ob(1,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),l.ob(2,0,null,null,1,"cti",[["key","cld.windycloud"]],[[4,"font-family",null],[1,"data-icon-code",0],[2,"x",null]],null,null,w.b,w.a)),l.nb(3,49152,null,0,C.c,[C.f,C.e],{key:[0,"key"]},null),(n()(),l.Ab(4,null,[" "," "])),(n()(),l.ob(5,0,null,null,1,"div",[["class","sub"]],null,null,null,null,null)),(n()(),l.Ab(6,null,[" "," "]))],function(n,e){n(e,3,0,"cld.windycloud")},function(n,e){var t=e.component;n(e,2,0,l.wb(e,3).ff,l.wb(e,3)._code,l.wb(e,3).x),n(e,4,0,t.name),n(e,6,0,t.sub)})}function j(n){return l.Bb(0,[(n()(),l.ob(0,0,null,null,1,"app-hero",[],null,null,null,S,k)),l.nb(1,49152,null,0,r,[],null,null)],null,null)}var R=l.kb("app-hero",r,j,{name:"name",sub:"sub"},{},[]),L=l.mb({encapsulation:0,styles:[["[_nghost-%COMP%]{box-sizing:border-box;display:inline-block;padding:100px;width:100%}[_nghost-%COMP%]   .wrap[_ngcontent-%COMP%]{display:flex;flex-flow:column;width:100%}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;padding:80px 30px;min-height:400px}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(2n+1){background:radial-gradient(ellipse,rgba(0,0,0,.1) 0,rgba(255,255,255,0) 70%)}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(2n){direction:rtl}[_nghost-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(2n)   p[_ngcontent-%COMP%]{padding-left:50px;padding-right:10px;direction:ltr}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{padding:10px 0;letter-spacing:2px}[_nghost-%COMP%]   p[_ngcontent-%COMP%]{padding-left:10px;padding-right:50px;line-height:1.5em;text-align:justify}[_nghost-%COMP%]   .sublist[_ngcontent-%COMP%]{flex:0 0 auto;display:flex}[_nghost-%COMP%]   .sublist[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]{align-self:center;display:flex;flex-flow:column;padding:20px;min-width:100px;text-align:center}[_nghost-%COMP%]   .sublist[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   cti[_ngcontent-%COMP%]{font-size:100px}[_nghost-%COMP%]   .sublist[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:var(--c-bl-bb);font-weight:700}"]],data:{}});function A(n){return l.Bb(0,[(n()(),l.ob(0,0,null,null,1,"cti",[],[[4,"color",null],[4,"font-family",null],[1,"data-icon-code",0],[2,"x",null]],null,null,w.b,w.a)),l.nb(1,49152,null,0,C.c,[C.f,C.e],{key:[0,"key"]},null)],function(n,e){n(e,1,0,e.parent.context.$implicit.icon.key)},function(n,e){n(e,0,0,e.parent.context.$implicit.icon.color,l.wb(e,1).ff,l.wb(e,1)._code,l.wb(e,1).x)})}function I(n){return l.Bb(0,[(n()(),l.ob(0,0,null,null,4,"div",[["class","sub"]],null,null,null,null,null)),(n()(),l.fb(16777216,null,null,1,null,A)),l.nb(2,16384,null,0,v.i,[l.O,l.L],{ngIf:[0,"ngIf"]},null),(n()(),l.ob(3,0,null,null,1,"label",[],null,null,null,null,null)),(n()(),l.Ab(4,null,[" "," "]))],function(n,e){n(e,2,0,e.context.$implicit.icon)},function(n,e){n(e,4,0,e.context.$implicit.text)})}function N(n){return l.Bb(0,[(n()(),l.ob(0,0,null,null,8,"div",[["class","item"]],null,null,null,null,null)),(n()(),l.ob(1,0,null,null,4,"div",[["class","part"]],null,null,null,null,null)),(n()(),l.ob(2,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),l.Ab(3,null,[" "," "])),(n()(),l.ob(4,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),l.Ab(5,null,[" "," "])),(n()(),l.ob(6,0,null,null,2,"div",[["class","sublist"]],null,null,null,null,null)),(n()(),l.fb(16777216,null,null,1,null,I)),l.nb(8,278528,null,0,v.h,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],function(n,e){n(e,8,0,e.context.$implicit.sublist)},function(n,e){n(e,3,0,e.context.$implicit.text),n(e,5,0,e.context.$implicit.desc)})}function T(n){return l.Bb(0,[(n()(),l.ob(0,0,null,null,2,"div",[["class","wrap"]],null,null,null,null,null)),(n()(),l.fb(16777216,null,null,1,null,N)),l.nb(2,278528,null,0,v.h,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],function(n,e){n(e,2,0,e.component.list)},null)}function W(n){return l.Bb(0,[(n()(),l.ob(0,0,null,null,1,"app-list-aside",[],null,null,null,T,L)),l.nb(1,49152,null,0,a,[],null,null)],null,null)}var F=l.kb("app-list-aside",a,W,{},{},[]),E=t("ZYCi");t.d(e,"LanderModNgFactory",function(){return B});var B=l.lb(p,[],function(n){return l.tb([l.ub(512,l.j,l.ab,[[8,[b.a,M,R,F]],[3,l.j],l.x]),l.ub(4608,v.k,v.j,[l.u,[2,v.q]]),l.ub(1073742336,C.b,C.b,[]),l.ub(1073742336,C.a,C.a,[]),l.ub(1073742336,v.b,v.b,[]),l.ub(1073742336,E.n,E.n,[[2,E.t],[2,E.k]]),l.ub(1073742336,p,p,[]),l.ub(1024,E.i,function(){return[[{path:"",component:d}]]},[]),l.ub(256,C.e,f,[])])})},CD1Z:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"capitalize",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"isNode",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"isReactNative",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"isWindows",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"makeArrayOfLength",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"makeArrayOfStrings",{enumerable:!0,get:function(){return a.default}});var l=c(t("EAS3")),u=c(t("W7kM")),i=c(t("riOy")),r=c(t("jM9e")),o=c(t("iHFl")),a=c(t("odNT"));function c(n){return n&&n.__esModule?n:{default:n}}},EAS3:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.default=function(n){var e=n.trim();return e.charAt(0).toUpperCase()+e.slice(1)}},I45k:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l,u=t("VWBJ"),i=t("k3Yx"),r=(l=t("QUu6"))&&l.__esModule?l:{default:l},o=t("CD1Z");function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.default=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.FORMAT_PLAIN,l=arguments.length>2?arguments[2]:void 0;if(function(e,t){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this),a(this,"generator",void 0),a(this,"format",void 0),a(this,"suffix",void 0),-1===u.FORMATS.indexOf(t.toLowerCase()))throw new Error("".concat(t," is an invalid format. Please use ").concat(u.FORMATS.join(" or "),"."));this.format=t.toLowerCase(),this.suffix=l,this.generator=new r.default(e)}var e;return(e=[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,o.isReactNative)()&&(0,o.isNode)()&&(0,o.isWindows)()?i.LINE_ENDINGS.WIN32:i.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(n){return this.format===u.FORMAT_HTML?"<p>".concat(n,"</p>"):n}},{key:"formatStrings",value:function(n){var e=this;return n.map(function(n){return e.formatString(n)})}},{key:"generateWords",value:function(n){return this.formatString(this.generator.generateRandomWords(n))}},{key:"generateSentences",value:function(n){return this.formatString(this.generator.generateRandomParagraph(n))}},{key:"generateParagraphs",value:function(n){var e=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,o.makeArrayOfStrings)(n,e)).join(this.getLineEnding())}}])&&function(n,e){for(var t=0;t<e.length;t++){var l=e[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}(n.prototype,e),n}()},QUu6:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=t("sL/9"),u=t("CD1Z");function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.default=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.sentencesPerParagraph,u=void 0===t?{max:7,min:3}:t,r=e.wordsPerSentence,o=void 0===r?{max:15,min:5}:r,a=e.random,c=e.words,s=void 0===c?l.WORDS:c;if(function(e,t){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this),i(this,"sentencesPerParagraph",void 0),i(this,"wordsPerSentence",void 0),i(this,"random",void 0),i(this,"words",void 0),u.min>u.max)throw new Error("Minimum number of sentences per paragraph (".concat(u.min,") cannot exceed maximum (").concat(u.max,")."));if(o.min>o.max)throw new Error("Minimum number of words per sentence (".concat(o.min,") cannot exceed maximum (").concat(o.max,")."));this.sentencesPerParagraph=u,this.words=s,this.wordsPerSentence=o,this.random=a||Math.random}var e;return(e=[{key:"generateRandomInteger",value:function(n,e){return Math.floor(this.random()*(e-n+1)+n)}},{key:"generateRandomWords",value:function(n){var e=this,t=this.wordsPerSentence,l=n||this.generateRandomInteger(t.min,t.max);return(0,u.makeArrayOfLength)(l).reduce(function(n,t){return"".concat(e.pluckRandomWord()," ").concat(n)},"").trim()}},{key:"generateRandomSentence",value:function(n){return"".concat((0,u.capitalize)(this.generateRandomWords(n)),".")}},{key:"generateRandomParagraph",value:function(n){var e=this,t=this.sentencesPerParagraph,l=n||this.generateRandomInteger(t.min,t.max);return(0,u.makeArrayOfLength)(l).reduce(function(n,t){return"".concat(e.generateRandomSentence()," ").concat(n)},"").trim()}},{key:"pluckRandomWord",value:function(){var n=this.generateRandomInteger(0,this.words.length-1);return this.words[n]}}])&&function(n,e){for(var t=0;t<e.length;t++){var l=e[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}(n.prototype,e),n}()},VWBJ:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FORMATS=e.FORMAT_PLAIN=e.FORMAT_HTML=void 0,e.FORMAT_HTML="html",e.FORMAT_PLAIN="plain",e.FORMATS=["html","plain"]},W7kM:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.default=function(){return!!n.exports}},fCI2:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"LoremIpsum",{enumerable:!0,get:function(){return i.default}}),e.loremIpsum=void 0;var l,u=t("sL/9"),i=(l=t("I45k"))&&l.__esModule?l:{default:l};e.loremIpsum=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.count,t=void 0===e?1:e,l=n.format,r=n.paragraphLowerBound,o=n.paragraphUpperBound,a=n.sentenceLowerBound,c=n.sentenceUpperBound,s=n.units,d=void 0===s?"sentences":s,f=n.words,p=n.suffix,b=new i.default({random:n.random,sentencesPerParagraph:{max:void 0===o?7:o,min:void 0===r?3:r},words:void 0===f?u.WORDS:f,wordsPerSentence:{max:void 0===c?15:c,min:void 0===a?5:a}},void 0===l?"plain":l,void 0===p?"":p);switch(d){case"paragraphs":case"paragraph":return b.generateParagraphs(t);case"sentences":case"sentence":return b.generateSentences(t);case"words":case"word":return b.generateWords(t);default:return""}}},iHFl:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.default=function(){return Array.apply(null,Array(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)).map(function(n,e){return e})}},jM9e:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=t("kfcT");e.default=function(){return"undefined"!=typeof process&&process.platform===l.SUPPORTED_PLATFORMS.WIN32}},k3Yx:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LINE_ENDINGS=void 0,e.LINE_ENDINGS={POSIX:"\n",WIN32:"\r\n"}},kfcT:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SUPPORTED_PLATFORMS=void 0,e.SUPPORTED_PLATFORMS={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"}},odNT:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=t("CD1Z");e.default=function(n,e){return(0,l.makeArrayOfLength)(n).map(function(){return e()})}},riOy:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.default=function(){return"undefined"!=typeof navigator&&"ReactNative"===navigator.product}},"sL/9":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.WORDS=void 0,e.WORDS=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]}}]);