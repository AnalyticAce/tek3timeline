"use strict";this.default_ChartsCombinedJ2clBootstrap=this.default_ChartsCombinedJ2clBootstrap||{};(function(_){var window=this;
_._F_toggles_initialize=function(a){(typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:this)._F_toggles=a||[]};(0,_._F_toggles_initialize)([]);
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var l=function(a){return function(b){this[a]=b}};
var aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ca=function(a){return ba(a,a)},ba=function(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a},m=function(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error("a`"+String(a));},da=function(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b},ea=
function(a){var b=typeof a;b=b!="object"?b:a?Array.isArray(a)?"array":b:"null";return b=="array"||b=="object"&&typeof a.length=="number"},n=function(a){var b=typeof a;return b=="object"&&a!=null||b=="function"},p=function(a,b){function c(){}c.prototype=b.prototype;a.o=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.m=function(d,e,f){for(var h=Array(arguments.length-2),g=2;g<arguments.length;g++)h[g-2]=arguments[g];return b.prototype[e].apply(d,h)}},r=function(a){return a},t=function(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,
t);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)},u=function(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");t.call(this,c+a[d])},fa=function(a){var b=a.length;if(b>0){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},ha=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},x=function(a,b){this.g=a===v&&b||"";this.h=w},y=function(a){return a instanceof x&&a.constructor===x&&a.h===w?a.g:"type_error:Const"},
A=function(a){if(!ia.test(a))return a;a.indexOf("&")!=-1&&(a=a.replace(ja,"&amp;"));a.indexOf("<")!=-1&&(a=a.replace(ka,"&lt;"));a.indexOf(">")!=-1&&(a=a.replace(la,"&gt;"));a.indexOf('"')!=-1&&(a=a.replace(ma,"&quot;"));a.indexOf("'")!=-1&&(a=a.replace(na,"&#39;"));a.indexOf("\x00")!=-1&&(a=a.replace(oa,"&#0;"));return a},D=function(){if(B===void 0){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:r,createScript:r,createScriptURL:r})}catch(c){C.console&&
C.console.error(c.message)}B=a}else B=a}return B},E=l("g"),F=function(a){return a instanceof E&&a.constructor===E?a.g:"type_error:TrustedResourceUrl"},G=function(a){var b=D();a=b?b.createScriptURL(a):a;return new E(a,pa)},H=l("g"),I=l("j"),J=function(a){return new I(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})},L=function(a){var b=b===void 0?K:b;a:if(b=b===void 0?K:b,!(a instanceof H)){for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof I&&d.j(a)){a=new H(a);break a}}a=void 0}return a||
qa},M=l("g"),N=function(a){var b=D();return new M(b?b.createHTML(a):a)},O=function(a){if(a instanceof M)return a.g;throw Error("b");},P=l("g"),Q=function(a){if(a instanceof P)return a.g;throw Error("b");},wa=function(a){if(a instanceof H)return'url("'+a.toString().replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof x)a=y(a);else{a=String(a);var b=a.replace(R,"$1").replace(R,"$1").replace(ra,"url");if(sa.test(b)){if(b=!ta.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);
e=="'"&&c?b=!b:e=='"'&&b&&(c=!c)}b=b&&c&&ua(a)}a=b?va(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new u("Value does not allow [{;}], got: %s.",[a]);return a},ua=function(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if(e=="]"){if(b)return!1;b=!0}else if(e=="["){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b},va=function(a){return a.replace(ra,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(h,g,z){f=g;return z});b=L(d).toString();
return c+f+b+f+e})},T=function(a,b){var c=String(a);if(!xa.test(c))throw Error("b");if(c.toUpperCase()in ya)throw Error("b");a=String(a);c="<"+a;var d={},e="";if(d)for(k in d)if(Object.prototype.hasOwnProperty.call(d,k)){if(!xa.test(k))throw Error("b");var f=d[k];if(f!=null){var h=k;var g=f;if(g instanceof x)g=y(g);else if(h.toLowerCase()=="style"){if(f=void 0,typeof g!=="string"){if(!n(g))throw Error("b");if(!(g instanceof P)){var z="";for(f in g)if(Object.prototype.hasOwnProperty.call(g,f)){if(!/^[-_a-zA-Z0-9]+$/.test(f))throw Error("c`"+
f);var q=g[f];q!=null&&(q=Array.isArray(q)?q.map(wa).join(" "):wa(q),z+=f+":"+q+";")}g=z?new P(z):za}g=Q(g)}}else{if(/^on/i.test(h))throw Error("b");if(h.toLowerCase()in Aa)if(g instanceof E)g=F(g).toString();else if(g instanceof H)if(g instanceof H)g=g.g;else throw Error("b");else if(typeof g==="string")g=L(g).toString();else throw Error("b");}h=h+'="'+A(String(g))+'"';e+=" "+h}}var k=c+e;b==null?b=[]:Array.isArray(b)||(b=[b]);Ba[a.toLowerCase()]===!0?k+=">":(b=S(b),k+=">"+O(b).toString()+"</"+a+
">");return N(k)},Ca=function(a){function b(e){Array.isArray(e)?e.forEach(b):(e=e instanceof M?e:N(A(String(e))),d.push(O(e).toString()))}var c=U instanceof M?U:N(A(String(U))),d=[];a.forEach(b);return N(d.join(O(c).toString()))},S=function(a){return Ca(Array.prototype.slice.call(arguments))},Da=function(a){for(var b=da.apply(1,arguments),c=a[0],d=0;d<a.length-1;d++)c+=String(b[d])+a[d+1];if(/[<>]/.test(c))throw Error("d`"+c);return new P(c)},V=function(a,b){a.src=F(b);var c,d;(c=(b=(d=(c=(a.ownerDocument&&
a.ownerDocument.defaultView||window).document).querySelector)==null?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)},X=function(a){return a?new W(a.nodeType==9?a:a.ownerDocument||a.document):Ea||(Ea=new W)},Ga=function(a,b){ha(b,function(c,d){d=="style"?a.style.cssText=c:d=="class"?a.className=c:d=="for"?a.htmlFor=c:Fa.hasOwnProperty(d)?a.setAttribute(Fa[d],c):d.lastIndexOf("aria-",0)==0||d.lastIndexOf("data-",0)==0?a.setAttribute(d,c):a[d]=c})},
Ia=function(a,b,c){function d(g){g&&b.appendChild(typeof g==="string"?a.createTextNode(g):g)}for(var e=2;e<c.length;e++){var f=c[e];if(!ea(f)||n(f)&&f.nodeType>0)d(f);else{a:{if(f&&typeof f.length=="number"){if(n(f)){var h=typeof f.item=="function"||typeof f.item=="string";break a}if(typeof f==="function"){h=typeof f.item=="function";break a}}h=!1}Ha(h?fa(f):f,d)}}},Y=function(a,b){b=String(b);a.contentType==="application/xhtml+xml"&&(b=b.toLowerCase());return a.createElement(b)},W=function(a){this.g=
a||C.document||document},Z=function(a,b){this.l=a;this.i=b;this.h=this.g=null},Ma=function(a){var b=document.head||document.body||document,c=Da(Ja),d=X(b),e=T("html",S(T("head"),T("body")));e=S(Ka,e);c=c?Q(c):"";d=d.h("IFRAME",{frameborder:0,style:"border:0;vertical-align:bottom;"+c});d.src=F(La).toString();b.appendChild(d);b=e;e=d.contentDocument||d.contentWindow.document;e.open();e.write(O(b));e.close();d.id=a.l;d.tabIndex=-1;a.h=d},Na=function(a){return(typeof document.readyState=="undefined"?
typeof document.body!="undefined"&&document.body!=null:/loaded|complete/.test(document.readyState))?(a.g!=null&&(clearInterval(a.g),a.g=null),a.i(a.h),!0):!1};var C=this||self;p(t,Error);t.prototype.name="CustomError";var Ea;p(u,t);u.prototype.name="AssertionError";var Ha=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};var Ba={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0};x.prototype.toString=function(){return this.g};var w={},v={};var ja=/&/g,ka=/</g,la=/>/g,ma=/"/g,na=/'/g,oa=/\x00/g,ia=/[\x00&<>"']/;var B;var pa={};E.prototype.toString=function(){return this.g+""};H.prototype.toString=function(){return this.g};var qa=new H("about:invalid#zClosurez");var K=[J("data"),J("http"),J("https"),J("mailto"),J("ftp"),new I(function(a){return/^[^:]*([/?#]|$)/.test(a)})];var Oa=C.trustedTypes;M.prototype.toString=function(){return this.g+""};var U=new M(Oa?Oa.emptyHTML:"");P.prototype.toString=function(){return this.g};var za=new P(""),sa=RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),ra=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),R=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)","g"),ta=/\/\*/;var xa=/^[a-zA-Z0-9-]+$/,Aa={action:!0,cite:!0,data:!0,formaction:!0,href:!0,manifest:!0,poster:!0,src:!0},ya={APPLET:!0,BASE:!0,EMBED:!0,IFRAME:!0,LINK:!0,MATH:!0,META:!0,OBJECT:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Ka=N("<!DOCTYPE html>");var Fa={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};W.prototype.h=function(a,b,c){var d=this.g,e=arguments,f=e[1],h=Y(d,String(e[0]));f&&(typeof f==="string"?h.className=f:Array.isArray(f)?h.className=f.join(" "):Ga(h,f));e.length>2&&Ia(d,h,e);return h};var La=G(y(new x(v,"about:blank")));G(y(new x(v,"javascript:undefined")));var Ja=ca(["position:absolute; width:0; height:0; border:none;left: -1000px; top: -1000px;"]);Z.prototype.load=function(){var a=this;Ma(this);Na(this)||(this.g=setInterval(function(){return void Na(a)},50))};window.tvizScriptLoader=new Z("charts-export-frame",function(a){var b=a.contentDocument;a.contentWindow.ritzspreadsheetconstants=window.ritzspreadsheetconstants;a.contentWindow.__chartmessages=window.__chartmessages;a=m(window.CHARTS_EXPORT_URI);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=Y(X(b).g,"SCRIPT");d.type="text/javascript";d.async=!1;V(d,G(c));b.body.appendChild(d)}});
window.gvizScriptLoader=new Z("charts-gviz-rendering-frame",function(a){var b=a.contentDocument;a.contentWindow.ritzspreadsheetconstants=window.ritzspreadsheetconstants;a=m(window.CHARTS_RENDER_URI);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=Y(X(b).g,"SCRIPT");d.type="text/javascript";d.async=!1;V(d,G(c));b.body.appendChild(d)}});
window.visualizationScriptLoader=new Z("visualization-export-frame",function(a){var b=a.contentDocument;a.contentWindow.ritzspreadsheetconstants=window.ritzspreadsheetconstants;a=m(window.VISUALIZATION_EXPORT_URI);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=Y(X(b).g,"SCRIPT");d.type="text/javascript";d.async=!1;V(d,G(c));b.body.appendChild(d)}});
}).call(this,this.default_ChartsCombinedJ2clBootstrap);
// Google Inc.

//# sourceMappingURL=ChartsCombinedJ2clBootstrap_bootstrap_core.sourcemap
