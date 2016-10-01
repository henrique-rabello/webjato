/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(O,U,s){'use strict';function t(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.16/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function ab(b){if(null==b||Ca(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:w(b)||M(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(P(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(ab(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Qb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Sc(b,
a,c){for(var d=Qb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Rb(b){return function(a,c){b(c,a)}}function bb(){for(var b=ka.length,a;b;){b--;a=ka[b].charCodeAt(0);if(57==a)return ka[b]="A",ka.join("");if(90==a)ka[b]="0";else return ka[b]=String.fromCharCode(a+1),ka.join("")}ka.unshift("0");return ka.join("")}function Sb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function D(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Sb(b,a);return b}function Y(b){return parseInt(b,
10)}function Tb(b,a){return D(new (D(function(){},{prototype:b})),a)}function C(){}function Da(b){return b}function aa(b){return function(){return b}}function E(b){return"undefined"===typeof b}function B(b){return"undefined"!==typeof b}function X(b){return null!=b&&"object"===typeof b}function w(b){return"string"===typeof b}function vb(b){return"number"===typeof b}function Na(b){return"[object Date]"===wa.call(b)}function M(b){return"[object Array]"===wa.call(b)}function P(b){return"function"===typeof b}
function cb(b){return"[object RegExp]"===wa.call(b)}function Ca(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Uc(b,a,c){var d=[];q(b,function(b,g,f){d.push(a.call(c,b,g,f))});return d}function db(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Oa(b,a){var c=db(b,a);0<=c&&b.splice(c,1);return a}function ba(b,a){if(Ca(b)||b&&b.$evalAsync&&b.$watch)throw Pa("cpws");
if(a){if(b===a)throw Pa("cpi");if(M(b))for(var c=a.length=0;c<b.length;c++)a.push(ba(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=ba(b[d]);Sb(a,c)}}else(a=b)&&(M(b)?a=ba(b,[]):Na(b)?a=new Date(b.getTime()):cb(b)?a=RegExp(b.source):X(b)&&(a=ba(b,{})));return a}function Ub(b,a){a=a||{};for(var c in b)!b.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a}function xa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;
var c=typeof b,d;if(c==typeof a&&"object"==c)if(M(b)){if(!M(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!xa(b[d],a[d]))return!1;return!0}}else{if(Na(b))return Na(a)&&b.getTime()==a.getTime();if(cb(b)&&cb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ca(b)||Ca(a)||M(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!P(b[d])){if(!xa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!P(a[d]))return!1;
return!0}return!1}function Vb(){return U.securityPolicy&&U.securityPolicy.isActive||U.querySelector&&!(!U.querySelector("[ng-csp]")&&!U.querySelector("[data-ng-csp]"))}function eb(b,a){var c=2<arguments.length?ya.call(arguments,2):[];return!P(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ya.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Vc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=
s:Ca(a)?c="$WINDOW":a&&U===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function qa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Vc,a?"  ":null)}function Wb(b){return w(b)?JSON.parse(b):b}function Qa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=K(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ha(b){b=y(b).clone();try{b.empty()}catch(a){}var c=y("<div>").append(b).html();try{return 3===b[0].nodeType?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+K(b)})}catch(d){return K(c)}}function Xb(b){try{return decodeURIComponent(b)}catch(a){}}function Yb(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=Xb(c[0]),B(d)&&(b=B(c[1])?Xb(c[1]):!0,a[d]?M(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Zb(b){var a=[];q(b,function(b,d){M(b)?q(b,function(b){a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))}):a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))});return a.length?a.join("&"):""}function wb(b){return za(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function za(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Wc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,f=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(f,function(a){f[a]=!0;c(U.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+
a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&f[b.name]&&(e=a,g=b.value)})}});e&&a(e,g?[g]:[])}function $b(b,a){var c=function(){b=y(b);if(b.injector()){var c=b[0]===U?"document":ha(b);throw Pa("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=ac(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",
function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(O&&!d.test(O.name))return c();O.name=O.name.replace(d,"");Ea.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function fb(b,a){a=a||"_";return b.replace(Xc,function(b,d){return(d?a:"")+b.toLowerCase()})}function xb(b,a,c){if(!b)throw Pa("areq",a||"?",c||"required");return b}function Ra(b,a,c){c&&M(b)&&(b=b[b.length-1]);xb(P(b),a,"not a function, got "+(b&&"object"==typeof b?
b.constructor.name||"Object":typeof b));return b}function Aa(b,a){if("hasOwnProperty"===b)throw Pa("badname",a);}function bc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,g=a.length,f=0;f<g;f++)d=a[f],b&&(b=(e=b)[d]);return!c&&P(b)?eb(e,b):b}function yb(b){var a=b[0];b=b[b.length-1];if(a===b)return y(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return y(c)}function Yc(b){var a=t("$injector"),c=t("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||t;return b.module||
(b.module=function(){var b={};return function(e,g,f){if("hasOwnProperty"===e)throw c("badname","module");g&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!g)throw a("nomod",e);var c=[],d=[],m=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide",
"constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:m,run:function(a){d.push(a);return this}};f&&m(f);return n}())}}())}function Zc(b){D(b,{bootstrap:$b,copy:ba,extend:D,equals:xa,element:y,forEach:q,injector:ac,noop:C,bind:eb,toJson:qa,fromJson:Wb,identity:Da,isUndefined:E,isDefined:B,isString:w,isFunction:P,isObject:X,isNumber:vb,isElement:Tc,isArray:M,
version:$c,isDate:Na,lowercase:K,uppercase:Fa,callbacks:{counter:0},$$minErr:t,$$csp:Vb});Sa=Yc(O);try{Sa("ngLocale")}catch(a){Sa("ngLocale",[]).provider("$locale",ad)}Sa("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:bd});a.provider("$compile",cc).directive({a:cd,input:dc,textarea:dc,form:dd,script:ed,select:fd,style:gd,option:hd,ngBind:id,ngBindHtml:jd,ngBindTemplate:kd,ngClass:ld,ngClassEven:md,ngClassOdd:nd,ngCloak:od,ngController:pd,ngForm:qd,ngHide:rd,ngIf:sd,ngInclude:td,
ngInit:ud,ngNonBindable:vd,ngPluralize:wd,ngRepeat:xd,ngShow:yd,ngStyle:zd,ngSwitch:Ad,ngSwitchWhen:Bd,ngSwitchDefault:Cd,ngOptions:Dd,ngTransclude:Ed,ngModel:Fd,ngList:Gd,ngChange:Hd,required:ec,ngRequired:ec,ngValue:Id}).directive({ngInclude:Jd}).directive(zb).directive(fc);a.provider({$anchorScroll:Kd,$animate:Ld,$browser:Md,$cacheFactory:Nd,$controller:Od,$document:Pd,$exceptionHandler:Qd,$filter:gc,$interpolate:Rd,$interval:Sd,$http:Td,$httpBackend:Ud,$location:Vd,$log:Wd,$parse:Xd,$rootScope:Yd,
$q:Zd,$sce:$d,$sceDelegate:ae,$sniffer:be,$templateCache:ce,$timeout:de,$window:ee,$$rAF:fe,$$asyncCallback:ge})}])}function Ta(b){return b.replace(he,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ie,"Moz$1")}function Ab(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],l=a,k,m,n,p,r,z;if(!d||null!=b)for(;e.length;)for(k=e.shift(),m=0,n=k.length;m<n;m++)for(p=y(k[m]),l?p.triggerHandler("$destroy"):l=!l,r=0,p=(z=p.children()).length;r<p;r++)e.push(Ga(z[r]));return g.apply(this,arguments)}
var g=Ga.fn[b],g=g.$original||g;e.$original=g;Ga.fn[b]=e}function N(b){if(b instanceof N)return b;w(b)&&(b=ca(b));if(!(this instanceof N)){if(w(b)&&"<"!=b.charAt(0))throw Bb("nosel");return new N(b)}if(w(b)){var a=b;b=U;var c;if(c=je.exec(a))b=[b.createElement(c[1])];else{var d=b,e;b=d.createDocumentFragment();c=[];if(Cb.test(a)){d=b.appendChild(d.createElement("div"));e=(ke.exec(a)||["",""])[1].toLowerCase();e=ea[e]||ea._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(le,"<$1></$2>")+e[2];
d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Db(this,b);y(U.createDocumentFragment()).append(this)}else Db(this,b)}function Eb(b){return b.cloneNode(!0)}function Ha(b){hc(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ha(b[a])}function ic(b,a,c,d){if(B(d))throw Bb("offargs");var e=la(b,"events");la(b,"handle")&&(E(a)?q(e,
function(a,c){Fb(b,c,a);delete e[c]}):q(a.split(" "),function(a){E(c)?(Fb(b,a,e[a]),delete e[a]):Oa(e[a]||[],c)}))}function hc(b,a){var c=b[gb],d=Ua[c];d&&(a?delete Ua[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),ic(b)),delete Ua[c],b[gb]=s))}function la(b,a,c){var d=b[gb],d=Ua[d||-1];if(B(c))d||(b[gb]=d=++me,d=Ua[d]={}),d[a]=c;else return d&&d[a]}function jc(b,a,c){var d=la(b,"data"),e=B(c),g=!e&&B(a),f=g&&!X(a);d||f||la(b,"data",d={});if(e)d[a]=c;else if(g){if(f)return d&&d[a];
D(d,a)}else return d}function Gb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function hb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",ca((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+ca(a)+" "," ")))})}function ib(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=ca(a);-1===c.indexOf(" "+a+" ")&&
(c+=a+" ")});b.setAttribute("class",ca(c))}}function Db(b,a){if(a){a=a.nodeName||!B(a.length)||Ca(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function kc(b,a){return jb(b,"$"+(a||"ngController")+"Controller")}function jb(b,a,c){b=y(b);9==b[0].nodeType&&(b=b.find("html"));for(a=M(a)?a:[a];b.length;){for(var d=b[0],e=0,g=a.length;e<g;e++)if((c=b.data(a[e]))!==s)return c;b=y(d.parentNode||11===d.nodeType&&d.host)}}function lc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ha(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}
function mc(b,a){var c=kb[a.toLowerCase()];return c&&nc[b.nodeName]&&c}function ne(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||U);if(E(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var f=Ub(a[e||
c.type]||[]);q(f,function(a){a.call(b,c)});8>=S?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ia(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===s&&(c=b.$$hashKey=bb()):c=b;return a+":"+c}function Va(b){q(b,this.put,this)}function oc(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(oe,
""),c=c.match(pe),q(c[1].split(qe),function(b){b.replace(re,function(b,c,d){a.push(d)})})),b.$inject=a):M(b)?(c=b.length-1,Ra(b[c],"fn"),a=b.slice(0,c)):Ra(b,"fn",!0);return a}function ac(b){function a(a){return function(b,c){if(X(b))q(b,Rb(a));else return a(b,c)}}function c(a,b){Aa(a,"service");if(P(b)||M(b))b=n.instantiate(b);if(!b.$get)throw Wa("pget",a);return m[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,g,h;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(w(a))for(c=
Sa(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,g=0,h=d.length;g<h;g++){var f=d[g],l=n.get(f[0]);l[f[1]].apply(l,f[2])}else P(a)?b.push(n.invoke(a)):M(a)?b.push(n.invoke(a)):Ra(a,"module")}catch(m){throw M(a)&&(a=a[a.length-1]),m.message&&(m.stack&&-1==m.stack.indexOf(m.message))&&(m=m.message+"\n"+m.stack),Wa("modulerr",a,m.stack||m.message||m);}}});return b}function g(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===f)throw Wa("cdep",l.join(" <- "));return a[d]}try{return l.unshift(d),
a[d]=f,a[d]=b(d)}catch(e){throw a[d]===f&&delete a[d],e;}finally{l.shift()}}function d(a,b,e){var g=[],h=oc(a),f,l,k;l=0;for(f=h.length;l<f;l++){k=h[l];if("string"!==typeof k)throw Wa("itkn",k);g.push(e&&e.hasOwnProperty(k)?e[k]:c(k))}a.$inject||(a=a[f]);return a.apply(b,g)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(M(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return X(e)||P(e)?e:c},get:c,annotate:oc,has:function(b){return m.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}
var f={},h="Provider",l=[],k=new Va,m={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,aa(b))}),constant:a(function(a,b){Aa(a,"constant");m[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},n=m.$injector=g(m,function(){throw Wa("unpr",l.join(" <- "));}),p={},r=p.$injector=g(p,function(a){a=n.get(a+
h);return r.invoke(a.$get,a)});q(e(b),function(a){r.invoke(a||C)});return r}function Kd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==K(a.nodeName)||(b=a)});return b}function g(){var b=c.hash(),d;b?(d=f.getElementById(b))?d.scrollIntoView():(d=e(f.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var f=a.document;b&&d.$watch(function(){return c.hash()},
function(){d.$evalAsync(g)});return g}]}function ge(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function se(b,a,c,d){function e(a){try{a.apply(null,ya.call(arguments,1))}finally{if(z--,0===z)for(;u.length;)try{u.pop()()}catch(b){c.error(b)}}}function g(a,b){(function T(){q(F,function(a){a()});v=b(T,a)})()}function f(){x=null;J!=h.url()&&(J=h.url(),q(ma,function(a){a(h.url())}))}var h=this,l=a[0],k=b.location,m=b.history,
n=b.setTimeout,p=b.clearTimeout,r={};h.isMock=!1;var z=0,u=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){z++};h.notifyWhenNoOutstandingRequests=function(a){q(F,function(a){a()});0===z?a():u.push(a)};var F=[],v;h.addPollFn=function(a){E(v)&&g(100,n);F.push(a);return a};var J=k.href,A=a.find("base"),x=null;h.url=function(a,c){k!==b.location&&(k=b.location);m!==b.history&&(m=b.history);if(a){if(J!=a)return J=a,d.history?c?m.replaceState(null,"",a):(m.pushState(null,"",
a),A.attr("href",A.attr("href"))):(x=a,c?k.replace(a):k.href=a),h}else return x||k.href.replace(/%27/g,"'")};var ma=[],L=!1;h.onUrlChange=function(a){if(!L){if(d.history)y(b).on("popstate",f);if(d.hashchange)y(b).on("hashchange",f);else h.addPollFn(f);L=!0}ma.push(a);return a};h.baseHref=function(){var a=A.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var Q={},da="",H=h.baseHref();h.cookies=function(a,b){var d,e,g,h;if(a)b===s?l.cookie=escape(a)+"=;path="+H+";expires=Thu, 01 Jan 1970 00:00:00 GMT":
w(b)&&(d=(l.cookie=escape(a)+"="+escape(b)+";path="+H).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(l.cookie!==da)for(da=l.cookie,d=da.split("; "),Q={},g=0;g<d.length;g++)e=d[g],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),Q[a]===s&&(Q[a]=unescape(e.substring(h+1))));return Q}};h.defer=function(a,b){var c;z++;c=n(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};h.defer.cancel=function(a){return r[a]?(delete r[a],
p(a),e(C),!0):!1}}function Md(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new se(b,d,a,c)}]}function Nd(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,g(a.n,a.p),g(a,n),n=a,n.n=null)}function g(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw t("$cacheFactory")("iid",b);var f=0,h=D({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},n=null,p=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});
e(c)}if(!E(b))return a in l||f++,l[a]=b,f>k&&this.remove(p.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);g(b.n,b.p);delete m[a]}delete l[a];f--},removeAll:function(){l={};f=0;m={};n=p=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return D({},h,{size:f})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};
return b}}function ce(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function cc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,g=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f=/^(on[a-z]+|formaction)$/;this.directive=function l(a,e){Aa(a,"directive");w(a)?(xb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,g){try{var f=b.invoke(c);P(f)?f={compile:aa(f)}:!f.compile&&f.link&&(f.compile=
aa(f.link));f.priority=f.priority||0;f.index=g;f.name=f.name||a;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(l){d(l)}});return e}])),c[a].push(e)):q(a,Rb(l));return this};this.aHrefSanitizationWhitelist=function(b){return B(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate",
"$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,m,n,p,r,z,u,F,v,J,A){function x(a,b,c,d,e){a instanceof y||(a=y(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=y(b).wrap("<span></span>").parent()[0])});var g=L(a,b,a,c,d,e);ma(a,"ng-scope");return function(b,c,d){xb(b,"scope");var e=c?Ja.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var f=e.length;d<f;d++){var l=
e[d].nodeType;1!==l&&9!==l||e.eq(d).data("$scope",b)}c&&c(e,b);g&&g(b,e,e);return e}}function ma(a,b){try{a.addClass(b)}catch(c){}}function L(a,b,c,d,e,g){function f(a,c,d,e){var g,k,m,r,n,p,z;g=c.length;var I=Array(g);for(n=0;n<g;n++)I[n]=c[n];z=n=0;for(p=l.length;n<p;z++)k=I[z],c=l[n++],g=l[n++],m=y(k),c?(c.scope?(r=a.$new(),m.data("$scope",r)):r=a,(m=c.transclude)||!e&&b?c(g,r,k,d,Q(a,m||b)):c(g,r,k,d,e)):g&&g(a,k.childNodes,s,e)}for(var l=[],k,m,r,n,p=0;p<a.length;p++)k=new Hb,m=da(a[p],[],k,
0===p?d:s,e),(g=m.length?ia(m,a[p],k,b,c,null,[],[],g):null)&&g.scope&&ma(y(a[p]),"ng-scope"),k=g&&g.terminal||!(r=a[p].childNodes)||!r.length?null:L(r,g?g.transclude:b),l.push(g,k),n=n||g||k,g=null;return n?f:null}function Q(a,b){return function(c,d,e){var g=!1;c||(c=a.$new(),g=c.$$transcluded=!0);d=b(c,d,e);if(g)d.on("$destroy",eb(c,c.$destroy));return d}}function da(a,b,c,d,f){var k=c.$attr,l;switch(a.nodeType){case 1:T(b,na(Ka(a).toLowerCase()),"E",d,f);var m,r,n;l=a.attributes;for(var p=0,z=
l&&l.length;p<z;p++){var u=!1,F=!1;m=l[p];if(!S||8<=S||m.specified){r=m.name;n=na(r);W.test(n)&&(r=fb(n.substr(6),"-"));var J=n.replace(/(Start|End)$/,"");n===J+"Start"&&(u=r,F=r.substr(0,r.length-5)+"end",r=r.substr(0,r.length-6));n=na(r.toLowerCase());k[n]=r;c[n]=m=ca(m.value);mc(a,n)&&(c[n]=!0);N(a,b,m,n);T(b,n,"A",d,f,u,F)}}a=a.className;if(w(a)&&""!==a)for(;l=g.exec(a);)n=na(l[2]),T(b,n,"C",d,f)&&(c[n]=ca(l[3])),a=a.substr(l.index+l[0].length);break;case 3:t(b,a.nodeValue);break;case 8:try{if(l=
e.exec(a.nodeValue))n=na(l[1]),T(b,n,"M",d,f)&&(c[n]=ca(l[2]))}catch(x){}}b.sort(E);return b}function H(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function R(a,b,c){return function(d,e,g,f,l){e=H(e[0],b,c);return a(d,e,g,f,l)}}function ia(a,c,d,e,g,f,l,n,p){function u(a,b,c,d){if(a){c&&(a=R(a,c,d));a.require=G.require;if(Q===
G||G.$$isolateScope)a=qc(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=R(b,c,d));b.require=G.require;if(Q===G||G.$$isolateScope)b=qc(b,{isolateScope:!0});n.push(b)}}function F(a,b,c){var d,e="data",g=!1;if(w(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),g=g||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!g)throw ja("ctreq",a,t);}else M(a)&&(d=[],q(a,function(a){d.push(F(a,b,c))}));return d}function J(a,e,g,f,p){function u(a,b){var c;2>arguments.length&&
(b=a,a=s);D&&(c=lb);return p(a,b,c)}var I,x,v,A,R,H,lb={},da;I=c===g?d:Ub(d,new Hb(y(g),d.$attr));x=I.$$element;if(Q){var T=/^\s*([@=&])(\??)\s*(\w*)\s*$/;f=y(g);H=e.$new(!0);ia&&ia===Q.$$originalDirective?f.data("$isolateScope",H):f.data("$isolateScopeNoTemplate",H);ma(f,"ng-isolate-scope");q(Q.scope,function(a,c){var d=a.match(T)||[],g=d[3]||c,f="?"==d[2],d=d[1],l,m,n,p;H.$$isolateBindings[c]=d+g;switch(d){case "@":I.$observe(g,function(a){H[c]=a});I.$$observers[g].$$scope=e;I[g]&&(H[c]=b(I[g])(e));
break;case "=":if(f&&!I[g])break;m=r(I[g]);p=m.literal?xa:function(a,b){return a===b};n=m.assign||function(){l=H[c]=m(e);throw ja("nonassign",I[g],Q.name);};l=H[c]=m(e);H.$watch(function(){var a=m(e);p(a,H[c])||(p(a,l)?n(e,a=H[c]):H[c]=a);return l=a},null,m.literal);break;case "&":m=r(I[g]);H[c]=function(a){return m(e,a)};break;default:throw ja("iscp",Q.name,c,a);}})}da=p&&u;L&&q(L,function(a){var b={$scope:a===Q||a.$$isolateScope?H:e,$element:x,$attrs:I,$transclude:da},c;R=a.controller;"@"==R&&(R=
I[a.name]);c=z(R,b);lb[a.name]=c;D||x.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for(v=l.length;f<v;f++)try{A=l[f],A(A.isolateScope?H:e,x,I,A.require&&F(A.require,x,lb),da)}catch(G){m(G,ha(x))}f=e;Q&&(Q.template||null===Q.templateUrl)&&(f=H);a&&a(f,g.childNodes,s,p);for(f=n.length-1;0<=f;f--)try{A=n[f],A(A.isolateScope?H:e,x,I,A.require&&F(A.require,x,lb),da)}catch(B){m(B,ha(x))}}p=p||{};for(var v=-Number.MAX_VALUE,A,L=p.controllerDirectives,Q=p.newIsolateScopeDirective,
ia=p.templateDirective,T=p.nonTlbTranscludeDirective,E=!1,D=p.hasElementTranscludeDirective,Z=d.$$element=y(c),G,t,V,Xa=e,O,N=0,S=a.length;N<S;N++){G=a[N];var ra=G.$$start,W=G.$$end;ra&&(Z=H(c,ra,W));V=s;if(v>G.priority)break;if(V=G.scope)A=A||G,G.templateUrl||(K("new/isolated scope",Q,G,Z),X(V)&&(Q=G));t=G.name;!G.templateUrl&&G.controller&&(V=G.controller,L=L||{},K("'"+t+"' controller",L[t],G,Z),L[t]=G);if(V=G.transclude)E=!0,G.$$tlb||(K("transclusion",T,G,Z),T=G),"element"==V?(D=!0,v=G.priority,
V=H(c,ra,W),Z=d.$$element=y(U.createComment(" "+t+": "+d[t]+" ")),c=Z[0],mb(g,y(ya.call(V,0)),c),Xa=x(V,e,v,f&&f.name,{nonTlbTranscludeDirective:T})):(V=y(Eb(c)).contents(),Z.empty(),Xa=x(V,e));if(G.template)if(K("template",ia,G,Z),ia=G,V=P(G.template)?G.template(Z,d):G.template,V=Y(V),G.replace){f=G;V=Cb.test(V)?y(V):[];c=V[0];if(1!=V.length||1!==c.nodeType)throw ja("tplrt",t,"");mb(g,Z,c);S={$attr:{}};V=da(c,[],S);var $=a.splice(N+1,a.length-(N+1));Q&&pc(V);a=a.concat(V).concat($);B(d,S);S=a.length}else Z.html(V);
if(G.templateUrl)K("template",ia,G,Z),ia=G,G.replace&&(f=G),J=C(a.splice(N,a.length-N),Z,d,g,Xa,l,n,{controllerDirectives:L,newIsolateScopeDirective:Q,templateDirective:ia,nonTlbTranscludeDirective:T}),S=a.length;else if(G.compile)try{O=G.compile(Z,d,Xa),P(O)?u(null,O,ra,W):O&&u(O.pre,O.post,ra,W)}catch(aa){m(aa,ha(Z))}G.terminal&&(J.terminal=!0,v=Math.max(v,G.priority))}J.scope=A&&!0===A.scope;J.transclude=E&&Xa;p.hasElementTranscludeDirective=D;return J}function pc(a){for(var b=0,c=a.length;b<c;b++)a[b]=
Tb(a[b],{$$isolateScope:!0})}function T(b,e,g,f,k,n,r){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var z=0,u=e.length;z<u;z++)try{p=e[z],(f===s||f>p.priority)&&-1!=p.restrict.indexOf(g)&&(n&&(p=Tb(p,{$$start:n,$$end:r})),b.push(p),k=p)}catch(F){m(F)}}return k}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,g){"class"==g?(ma(e,b),a["class"]=(a["class"]?
a["class"]+" ":"")+b):"style"==g?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==g.charAt(0)||a.hasOwnProperty(g)||(a[g]=b,d[g]=c[g])})}function C(a,b,c,d,e,g,f,l){var k=[],m,r,z=b[0],u=a.shift(),F=D({},u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),x=P(u.templateUrl)?u.templateUrl(b,c):u.templateUrl;b.empty();n.get(v.getTrustedResourceUrl(x),{cache:p}).success(function(n){var p,J;n=Y(n);if(u.replace){n=Cb.test(n)?y(n):[];p=n[0];if(1!=n.length||
1!==p.nodeType)throw ja("tplrt",u.name,x);n={$attr:{}};mb(d,b,p);var v=da(p,[],n);X(u.scope)&&pc(v);a=v.concat(a);B(c,n)}else p=z,b.html(n);a.unshift(F);m=ia(a,p,c,e,b,u,g,f,l);q(d,function(a,c){a==p&&(d[c]=b[0])});for(r=L(b[0].childNodes,e);k.length;){n=k.shift();J=k.shift();var A=k.shift(),R=k.shift(),v=b[0];if(J!==z){var H=J.className;l.hasElementTranscludeDirective&&u.replace||(v=Eb(p));mb(A,y(J),v);ma(y(v),H)}J=m.transclude?Q(n,m.transclude):R;m(r,n,v,d,J)}k=null}).error(function(a,b,c,d){throw ja("tpload",
d.url);});return function(a,b,c,d,e){k?(k.push(b),k.push(c),k.push(d),k.push(e)):m(r,b,c,d,e)}}function E(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function K(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ha(d));}function t(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:aa(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);ma(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function O(a,b){if("srcdoc"==
b)return v.HTML;var c=Ka(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return v.RESOURCE_URL}function N(a,c,d,e){var g=b(d,!0);if(g){if("multiple"===e&&"SELECT"===Ka(a))throw ja("selmulti",ha(a));c.push({priority:100,compile:function(){return{pre:function(c,d,l){d=l.$$observers||(l.$$observers={});if(f.test(e))throw ja("nodomevents");if(g=b(l[e],!0,O(a,e)))l[e]=g(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(g,function(a,b){"class"===
e&&a!=b?l.$updateClass(a,b):l.$set(e,a)})}}}})}}function mb(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,l;if(a)for(f=0,l=a.length;f<l;f++)if(a[f]==d){a[f++]=c;l=f+e-1;for(var k=a.length;f<k;f++,l++)l<k?a[f]=a[l]:delete a[f];a.length-=e-1;break}g&&g.replaceChild(c,d);a=U.createDocumentFragment();a.appendChild(d);c[y.expando]=d[y.expando];d=1;for(e=b.length;d<e;d++)g=b[d],y(g).remove(),a.appendChild(g),delete b[d];b[0]=c;b.length=1}function qc(a,b){return D(function(){return a.apply(null,arguments)},
a,b)}var Hb=function(a,b){this.$$element=a;this.$attr=b||{}};Hb.prototype={$normalize:na,$addClass:function(a){a&&0<a.length&&J.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&J.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=rc(a,b),d=rc(b,a);0===c.length?J.removeClass(this.$$element,d):0===d.length?J.addClass(this.$$element,c):J.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=mc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=
d:(d=this.$attr[a])||(this.$attr[a]=d=fb(a,"-"));e=Ka(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=A(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){m(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);u.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var Z=b.startSymbol(),ra=b.endSymbol(),Y="{{"==Z||"}}"==ra?
Da:function(a){return a.replace(/\{\{/g,Z).replace(/}}/g,ra)},W=/^ngAttr[A-Z]/;return x}]}function na(b){return Ta(b.replace(te,""))}function rc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),g=0;a:for(;g<d.length;g++){for(var f=d[g],h=0;h<e.length;h++)if(f==e[h])continue a;c+=(0<c.length?" ":"")+f}return c}function Od(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Aa(a,"controller");X(a)?D(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,g){var f,
h,l;w(e)&&(f=e.match(a),h=f[1],l=f[3],e=b.hasOwnProperty(h)?b[h]:bc(g.$scope,h,!0)||bc(d,h,!0),Ra(e,h,!0));f=c.instantiate(e,g);if(l){if(!g||"object"!=typeof g.$scope)throw t("$controller")("noscp",h||e.name,l);g.$scope[l]=f}return f}}]}function Pd(){this.$get=["$window",function(b){return y(b.document)}]}function Qd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function sc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=K(ca(b.substr(0,
e)));d=ca(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function tc(b){var a=X(b)?b:s;return function(c){a||(a=sc(b));return c?a[K(c)]||null:a}}function uc(b,a,c){if(P(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function Td(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){w(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Wb(d)));return d}],transformRequest:[function(a){return X(a)&&
"[object File]"!==wa.call(a)&&"[object Blob]"!==wa.call(a)?qa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ba(d),put:ba(d),patch:ba(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function r(a){function c(a){var b=D({},a,{data:uc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?
b:n.reject(b)}var d={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},g=function(a){function b(a){var c;q(a,function(b,d){P(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=D({},a.headers),g,f,c=D({},c.common,c[K(a.method)]);b(c);b(d);a:for(g in c){a=K(g);for(f in d)if(K(f)===a)continue a;d[g]=c[g]}return d}(a);D(d,a);d.headers=g;d.method=Fa(d.method);(a=Ib(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(g[d.xsrfHeaderName||e.xsrfHeaderName]=
a);var f=[function(a){g=a.headers;var b=uc(a.data,tc(g),a.transformRequest);E(a.data)&&q(g,function(a,b){"content-type"===K(b)&&delete g[b]});E(a.withCredentials)&&!E(e.withCredentials)&&(a.withCredentials=e.withCredentials);return z(a,b,g).then(c,c)},s],h=n.when(d);for(q(v,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),h=h.then(a,k)}h.success=function(a){h.then(function(b){a(b.data,
b.status,b.headers,d)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,d)});return h};return h}function z(b,c,g){function f(a,b,c,e){v&&(200<=a&&300>a?v.put(s,[a,b,sc(c),e]):v.remove(s));l(b,a,c,e);d.$$phase||d.$apply()}function l(a,c,d,e){c=Math.max(c,0);(200<=c&&300>c?p.resolve:p.reject)({data:a,status:c,headers:tc(d),config:b,statusText:e})}function k(){var a=db(r.pendingRequests,b);-1!==a&&r.pendingRequests.splice(a,1)}var p=n.defer(),z=p.promise,v,q,s=u(b.url,
b.params);r.pendingRequests.push(b);z.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(v=X(b.cache)?b.cache:X(e.cache)?e.cache:F);if(v)if(q=v.get(s),B(q)){if(q.then)return q.then(k,k),q;M(q)?l(q[1],q[0],ba(q[2]),q[3]):l(q,200,{},"OK")}else v.put(s,z);E(q)&&a(b.method,s,c,f,g,b.timeout,b.withCredentials,b.responseType);return z}function u(a,b){if(!b)return a;var c=[];Sc(b,function(a,b){null===a||E(a)||(M(a)||(a=[a]),q(a,function(a){X(a)&&(a=qa(a));c.push(za(b)+"="+za(a))}))});0<c.length&&
(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var F=c("$http"),v=[];q(g,function(a){v.unshift(w(a)?p.get(a):p.invoke(a))});q(f,function(a,b){var c=w(a)?p.get(a):p.invoke(a);v.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});r.pendingRequests=[];(function(a){q(arguments,function(a){r[a]=function(b,c){return r(D(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){r[a]=function(b,c,d){return r(D(d||
{},{method:a,url:b,data:c}))}})})("post","put");r.defaults=e;return r}]}function ue(b){if(8>=S&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!O.XMLHttpRequest))return new O.ActiveXObject("Microsoft.XMLHTTP");if(O.XMLHttpRequest)return new O.XMLHttpRequest;throw t("$httpBackend")("noxhr");}function Ud(){this.$get=["$browser","$window","$document",function(b,a,c){return ve(b,ue,b.defer,a.angular.callbacks,c[0])}]}function ve(b,a,c,d,e){function g(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=
c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;S&&8>=S?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=function(){d()};e.body.appendChild(c);return d}var f=-1;return function(e,l,k,m,n,p,r,z){function u(){v=f;A&&A();x&&x.abort()}function F(a,d,e,g,f){L&&c.cancel(L);A=x=null;0===d&&(d=e?200:"file"==sa(l).protocol?404:0);a(1223===d?204:d,e,g,f||"");b.$$completeOutstandingRequest(C)}var v;b.$$incOutstandingRequestCount();
l=l||b.url();if("jsonp"==K(e)){var J="_"+(d.counter++).toString(36);d[J]=function(a){d[J].data=a};var A=g(l.replace("JSON_CALLBACK","angular.callbacks."+J),function(){d[J].data?F(m,200,d[J].data):F(m,v||-2);d[J]=Ea.noop})}else{var x=a(e);x.open(e,l,!0);q(n,function(a,b){B(a)&&x.setRequestHeader(b,a)});x.onreadystatechange=function(){if(x&&4==x.readyState){var a=null,b=null;v!==f&&(a=x.getAllResponseHeaders(),b="response"in x?x.response:x.responseText);F(m,v||x.status,b,a,x.statusText||"")}};r&&(x.withCredentials=
!0);if(z)try{x.responseType=z}catch(s){if("json"!==z)throw s;}x.send(k||null)}if(0<p)var L=c(u,p);else p&&p.then&&p.then(u)}}function Rd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function g(g,k,m){for(var n,p,r=0,z=[],u=g.length,F=!1,v=[];r<u;)-1!=(n=g.indexOf(b,r))&&-1!=(p=g.indexOf(a,n+f))?(r!=n&&z.push(g.substring(r,n)),z.push(r=c(F=g.substring(n+f,p))),
r.exp=F,r=p+h,F=!0):(r!=u&&z.push(g.substring(r)),r=u);(u=z.length)||(z.push(""),u=1);if(m&&1<z.length)throw vc("noconcat",g);if(!k||F)return v.length=u,r=function(a){try{for(var b=0,c=u,f;b<c;b++)"function"==typeof(f=z[b])&&(f=f(a),f=m?e.getTrusted(m,f):e.valueOf(f),null===f||E(f)?f="":"string"!=typeof f&&(f=qa(f))),v[b]=f;return v.join("")}catch(h){a=vc("interr",g,h.toString()),d(a)}},r.exp=g,r.parts=z,r}var f=b.length,h=a.length;g.startSymbol=function(){return b};g.endSymbol=function(){return a};
return g}]}function Sd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,f,h,l){var k=a.setInterval,m=a.clearInterval,n=c.defer(),p=n.promise,r=0,z=B(l)&&!l;h=B(h)?h:0;p.then(null,null,d);p.$$intervalId=k(function(){n.notify(r++);0<h&&r>=h&&(n.resolve(r),m(p.$$intervalId),delete e[p.$$intervalId]);z||b.$apply()},f);e[p.$$intervalId]=n;return p}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],
!0):!1};return d}]}function ad(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function wc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=wb(b[a]);return b.join("/")}function xc(b,a,c){b=sa(b,c);a.$$protocol=
b.protocol;a.$$host=b.hostname;a.$$port=Y(b.port)||we[b.protocol]||null}function yc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=sa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=Yb(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function oa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ya(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Jb(b){return b.substr(0,
Ya(b).lastIndexOf("/")+1)}function zc(b,a){this.$$html5=!0;a=a||"";var c=Jb(b);xc(b,this,b);this.$$parse=function(a){var e=oa(c,a);if(!w(e))throw Kb("ipthprfx",a,c);yc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Zb(this.$$search),b=this.$$hash?"#"+wb(this.$$hash):"";this.$$url=wc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=oa(b,d))!==s)return d=e,(e=oa(a,e))!==s?c+(oa("/",e)||e):b+d;if((e=oa(c,
d))!==s)return c+e;if(c==d+"/")return c}}function Lb(b,a){var c=Jb(b);xc(b,this,b);this.$$parse=function(d){var e=oa(b,d)||oa(c,d),e="#"==e.charAt(0)?oa(a,e):this.$$html5?e:"";if(!w(e))throw Kb("ihshprfx",d,a);yc(e,this,b);d=this.$$path;var g=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));g.exec(e)||(d=(e=g.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Zb(this.$$search),e=this.$$hash?"#"+wb(this.$$hash):"";this.$$url=wc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=
b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Ya(b)==Ya(a))return a}}function Ac(b,a){this.$$html5=!0;Lb.apply(this,arguments);var c=Jb(b);this.$$rewrite=function(d){var e;if(b==Ya(d))return d;if(e=oa(c,d))return b+a+e;if(c===d+"/")return c}}function nb(b){return function(){return this[b]}}function Bc(b,a){return function(c){if(E(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Vd(){var b="",a=!1;this.hashPrefix=function(a){return B(a)?(b=a,this):b};this.html5Mode=
function(b){return B(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function f(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,l=d.baseHref(),k=d.url();a?(l=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(l||"/"),e=e.history?zc:Ac):(l=Ya(k),e=Lb);h=new e(l,"#"+b);h.$$parse(h.$$rewrite(k));g.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=y(a.target);"a"!==K(b[0].nodeName);)if(b[0]===g[0]||!(b=b.parent())[0])return;
var e=b.prop("href");X(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=sa(e.animVal).href);var f=h.$$rewrite(e);e&&(!b.attr("target")&&f&&!a.isDefaultPrevented())&&(a.preventDefault(),f!=d.url()&&(h.$$parse(f),c.$apply(),O.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):f(b)}),c.$$phase||
c.$digest())});var m=0;c.$watch(function(){var a=d.url(),b=h.$$replace;m&&a==h.absUrl()||(m++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),f(a))}));h.$$replace=!1;return m});return h}]}function Wd(){var b=!0,a=this;this.debugEnabled=function(a){return B(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:
a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function fa(b,a){if("constructor"===b)throw Ba("isecfld",a);return b}function Za(b,
a){if(b){if(b.constructor===b)throw Ba("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw Ba("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw Ba("isecdom",a);}return b}function ob(b,a,c,d,e){e=e||{};a=a.split(".");for(var g,f=0;1<a.length;f++){g=fa(a.shift(),d);var h=b[g];h||(h={},b[g]=h);b=h;b.then&&e.unwrapPromises&&(ta(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}g=fa(a.shift(),d);return b[g]=c}function Cc(b,
a,c,d,e,g,f){fa(b,g);fa(a,g);fa(c,g);fa(d,g);fa(e,g);return f.unwrapPromises?function(f,l){var k=l&&l.hasOwnProperty(b)?l:f,m;if(null==k)return k;(k=k[b])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!a)return k;if(null==k)return s;(k=k[a])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return s;(k=k[c])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!d)return k;if(null==
k)return s;(k=k[d])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return s;(k=k[e])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);return k}:function(g,f){var k=f&&f.hasOwnProperty(b)?f:g;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function xe(b,a){fa(b,a);return function(a,
d){return null==a?s:(d&&d.hasOwnProperty(b)?d:a)[b]}}function ye(b,a,c){fa(b,c);fa(a,c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?s:c[a]}}function Dc(b,a,c){if(Mb.hasOwnProperty(b))return Mb[b];var d=b.split("."),e=d.length,g;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)g=6>e?Cc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,g){var f=0,h;do h=Cc(d[f++],d[f++],d[f++],d[f++],d[f++],c,a)(b,g),g=s,b=h;while(f<e);return h};else{var f="var p;\n";
q(d,function(b,d){fa(b,c);f+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var f=f+"return s;",h=new Function("s","k","pw",f);h.toString=aa(f);g=a.unwrapPromises?function(a,b){return h(a,b,ta)}:h}else g=ye(d[0],d[1],c);else g=xe(d[0],c);"hasOwnProperty"!==
b&&(Mb[b]=g);return g}function Xd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return B(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return B(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;ta=function(b){a.logPromiseWarnings&&!Ec.hasOwnProperty(b)&&(Ec[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};
return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Nb(a);e=(new $a(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return C}}}]}function Zd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return ze(function(a){b.$evalAsync(a)},a)}]}function ze(b,a){function c(a){return a}function d(a){return f(a)}var e=function(){var f=[],k,m;return m={resolve:function(a){if(f){var c=f;f=s;k=g(a);c.length&&b(function(){for(var a,
b=0,d=c.length;b<d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){m.resolve(h(a))},notify:function(a){if(f){var c=f;f.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,g,h){var m=e(),u=function(d){try{m.resolve((P(b)?b:c)(d))}catch(e){m.reject(e),a(e)}},F=function(b){try{m.resolve((P(g)?g:d)(b))}catch(c){m.reject(c),a(c)}},v=function(b){try{m.notify((P(h)?h:c)(b))}catch(d){a(d)}};f?f.push([u,F,v]):k.then(u,F,v);return m.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,g){var f=null;try{f=(a||c)()}catch(h){return b(h,!1)}return f&&P(f.then)?f.then(function(){return b(e,g)},function(a){return b(a,!1)}):b(e,g)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&P(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},f=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(g,
f){var h=e();b(function(){try{h.resolve((P(f)?f:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:f,when:function(h,k,m,n){var p=e(),r,z=function(b){try{return(P(k)?k:c)(b)}catch(d){return a(d),f(d)}},u=function(b){try{return(P(m)?m:d)(b)}catch(c){return a(c),f(c)}},F=function(b){try{return(P(n)?n:c)(b)}catch(d){a(d)}};b(function(){g(h).then(function(a){r||(r=!0,p.resolve(g(a).then(z,u,F)))},function(a){r||(r=!0,p.resolve(u(a)))},function(a){r||p.notify(F(a))})});return p.promise},
all:function(a){var b=e(),c=0,d=M(a)?[]:{};q(a,function(a,e){c++;g(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function fe(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,g=e?
function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};g.supported=e;return g}]}function Yd(){var b=10,a=t("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,g,f){function h(){this.$id=bb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;
this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function l(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function k(a,b){var c=g(a);Ra(c,b);return c}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=
this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=bb());a["this"]=a;a.$$listeners={};a.$$listenerCount={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),g=this.$$watchers,f={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!P(b)){var h=k(b||C,"listener");f.fn=function(a,
b,c){h(c)}}if("string"==typeof a&&e.constant){var l=f.fn;f.fn=function(a,b,c){l.call(this,a,b,c);Oa(g,f)}}g||(g=this.$$watchers=[]);g.unshift(f);return function(){Oa(g,f);c=null}},$watchCollection:function(a,b){var c=this,d,e,f,h=1<b.length,l=0,k=g(a),m=[],n={},p=!0,q=0;return this.$watch(function(){d=k(c);var a,b;if(X(d))if(ab(d))for(e!==m&&(e=m,q=e.length=0,l++),a=d.length,q!==a&&(l++,e.length=q=a),b=0;b<a;b++)e[b]!==e[b]&&d[b]!==d[b]||e[b]===d[b]||(l++,e[b]=d[b]);else{e!==n&&(e=n={},q=0,l++);a=
0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==d[b]&&(l++,e[b]=d[b]):(q++,e[b]=d[b],l++));if(q>a)for(b in l++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(q--,delete e[b])}else e!==d&&(e=d,l++);return l},function(){p?(p=!1,b(d,d,c)):b(d,f,c);if(h)if(X(d))if(ab(d)){f=Array(d.length);for(var a=0;a<d.length;a++)f[a]=d[a]}else for(a in f={},d)Fc.call(d,a)&&(f[a]=d[a]);else f=d})},$digest:function(){var d,g,f,h,k=this.$$asyncQueue,m=this.$$postDigestQueue,q,x,s=b,L,Q=[],y,H,R;l("$digest");
c=null;do{x=!1;for(L=this;k.length;){try{R=k.shift(),R.scope.$eval(R.expression)}catch(B){p.$$phase=null,e(B)}c=null}a:do{if(h=L.$$watchers)for(q=h.length;q--;)try{if(d=h[q])if((g=d.get(L))!==(f=d.last)&&!(d.eq?xa(g,f):"number"==typeof g&&"number"==typeof f&&isNaN(g)&&isNaN(f)))x=!0,c=d,d.last=d.eq?ba(g):g,d.fn(g,f===n?g:f,L),5>s&&(y=4-s,Q[y]||(Q[y]=[]),H=P(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,H+="; newVal: "+qa(g)+"; oldVal: "+qa(f),Q[y].push(H));else if(d===c){x=!1;break a}}catch(w){p.$$phase=
null,e(w)}if(!(h=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==this&&!(h=L.$$nextSibling);)L=L.$parent}while(L=h);if((x||k.length)&&!s--)throw p.$$phase=null,a("infdig",b,qa(Q));}while(x||k.length);for(p.$$phase=null;m.length;)try{m.shift()()}catch(T){e(T)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(q(this.$$listenerCount,eb(null,m,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&
(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=C,this.$on=this.$watch=function(){return C})}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){p.$$phase||
p.$$asyncQueue.length||f.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);
var e=this;return function(){c[db(c,b)]=null;m(e,1,a)}},$emit:function(a,b){var c=[],d,g=this,f=!1,h={name:a,targetScope:g,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=[h].concat(ya.call(arguments,1)),k,m;do{d=g.$$listeners[a]||c;h.currentScope=g;k=0;for(m=d.length;k<m;k++)if(d[k])try{d[k].apply(null,l)}catch(n){e(n)}else d.splice(k,1),k--,m--;if(f)break;g=g.$parent}while(g);return h},$broadcast:function(a,b){for(var c=this,d=this,g={name:a,
targetScope:this,preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},f=[g].concat(ya.call(arguments,1)),h,k;c=d;){g.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return g}};var p=new h;return p}]}function bd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;
this.aHrefSanitizationWhitelist=function(a){return B(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,g;if(!S||8<=S)if(g=sa(c).href,""!==g&&!g.match(e))return"unsafe:"+g;return c}}}function Ae(b){if("self"===b)return b;if(w(b)){if(-1<b.indexOf("***"))throw ua("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+
b+"$")}if(cb(b))return RegExp("^"+b.source+"$");throw ua("imatcher");}function Gc(b){var a=[];B(b)&&q(b,function(b){a.push(Ae(b))});return a}function ae(){this.SCE_CONTEXTS=ga;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Gc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Gc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=
function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ua("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var g=d(),f={};f[ga.HTML]=d(g);f[ga.CSS]=d(g);f[ga.URL]=d(g);f[ga.JS]=d(g);f[ga.RESOURCE_URL]=d(f[ga.URL]);return{trustAs:function(a,b){var c=f.hasOwnProperty(a)?f[a]:null;if(!c)throw ua("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw ua("itype",a);return new c(b)},
getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var g=f.hasOwnProperty(c)?f[c]:null;if(g&&d instanceof g)return d.$$unwrapTrustedValue();if(c===ga.RESOURCE_URL){var g=sa(d.toString()),m,n,p=!1;m=0;for(n=b.length;m<n;m++)if("self"===b[m]?Ib(g):b[m].exec(g.href)){p=!0;break}if(p)for(m=0,n=a.length;m<n;m++)if("self"===a[m]?Ib(g):a[m].exec(g.href)){p=!1;break}if(p)return d;throw ua("insecurl",d.toString());}if(c===ga.HTML)return e(d);throw ua("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function $d(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ua("iequirks");var e=ba(ga);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Da);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,
d(a,c))}};var g=e.parseAs,f=e.getTrusted,h=e.trustAs;q(ga,function(a,b){var c=K(b);e[Ta("parse_as_"+c)]=function(b){return g(a,b)};e[Ta("get_trusted_"+c)]=function(b){return f(a,b)};e[Ta("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function be(){this.$get=["$window","$document",function(b,a){var c={},d=Y((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),g=a[0]||{},f=g.documentMode,h,l=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=g.body&&g.body.style,
m=!1,n=!1;if(k){for(var p in k)if(m=l.exec(p)){h=m[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");m=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in k);!d||m&&n||(m=w(g.body.style.webkitTransition),n=w(g.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f||7<f),hasEvent:function(a){if("input"==a&&9==S)return!1;if(E(c[a])){var b=g.createElement("div");c[a]="on"+
a in b}return c[a]},csp:Vb(),vendorPrefix:h,transitions:m,animations:n,android:d,msie:S,msieDocumentMode:f}}]}function de(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,l){var k=c.defer(),m=k.promise,n=B(l)&&!l;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete g[m.$$timeoutId]}n||b.$apply()},h);m.$$timeoutId=h;g[h]=k;return m}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),
delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function sa(b,a){var c=b;S&&(W.setAttribute("href",c),c=W.href);W.setAttribute("href",c);return{href:W.href,protocol:W.protocol?W.protocol.replace(/:$/,""):"",host:W.host,search:W.search?W.search.replace(/^\?/,""):"",hash:W.hash?W.hash.replace(/^#/,""):"",hostname:W.hostname,port:W.port,pathname:"/"===W.pathname.charAt(0)?W.pathname:"/"+W.pathname}}function Ib(b){b=w(b)?sa(b):b;return b.protocol===Hc.protocol&&b.host===Hc.host}
function ee(){this.$get=aa(O)}function gc(b){function a(d,e){if(X(d)){var g={};q(d,function(b,c){g[c]=a(c,b)});return g}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ic);a("date",Jc);a("filter",Be);a("json",Ce);a("limitTo",De);a("lowercase",Ee);a("number",Kc);a("orderBy",Lc);a("uppercase",Fe)}function Be(){return function(b,a,c){if(!M(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;
return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ea.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Fc.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var g=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!g(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,
b);default:for(var d in a)if("$"!==d.charAt(0)&&g(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(g(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return g("$"==b?c:c&&c[b],a[b])})})(f);break;case "function":e.push(a);break;default:return b}d=[];for(f=0;f<b.length;f++){var h=b[f];e.check(h)&&d.push(h)}return d}}function Ic(b){var a=
b.NUMBER_FORMATS;return function(b,d){E(d)&&(d=a.CURRENCY_SYM);return Mc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Kc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Mc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Mc(b,a,c,d,e){if(null==b||!isFinite(b)||X(b))return"";var g=0>b;b=Math.abs(b);var f=b+"",h="",l=[],k=!1;if(-1!==f.indexOf("e")){var m=f.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?f="0":(h=f,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));
else{f=(f.split(Nc)[1]||"").length;E(e)&&(e=Math.min(Math.max(a.minFrac,f),a.maxFrac));f=Math.pow(10,e);b=Math.round(b*f)/f;b=(""+b).split(Nc);f=b[0];b=b[1]||"";var m=0,n=a.lgSize,p=a.gSize;if(f.length>=n+p)for(m=f.length-n,k=0;k<m;k++)0===(m-k)%p&&0!==k&&(h+=c),h+=f.charAt(k);for(k=m;k<f.length;k++)0===(f.length-k)%n&&0!==k&&(h+=c),h+=f.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}l.push(g?a.negPre:a.posPre);l.push(h);l.push(g?a.negSuf:a.posSuf);return l.join("")}function Ob(b,
a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ob(e,a,d)}}function pb(b,a){return function(c,d){var e=c["get"+b](),g=Fa(a?"SHORT"+b:b);return d[g][e]}}function Jc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var g=0,f=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(g=Y(b[9]+b[10]),f=Y(b[9]+b[11]));
h.call(a,Y(b[1]),Y(b[2])-1,Y(b[3]));g=Y(b[4]||0)-g;f=Y(b[5]||0)-f;h=Y(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,g,f,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",f=[],h,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;w(c)&&(c=Ge.test(c)?Y(c):a(c));vb(c)&&(c=new Date(c));if(!Na(c))return c;for(;e;)(l=He.exec(e))?(f=f.concat(ya.call(l,1)),e=f.pop()):(f.push(e),e=null);q(f,function(a){h=
Ie[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ce(){return function(b){return qa(b,!0)}}function De(){return function(b,a){if(!M(b)&&!w(b))return b;a=Y(a);if(w(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Lc(b){return function(a,c,d){function e(a,b){return Qa(b)?function(b,c){return a(c,b)}:a}
function g(a,b){var c=typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!M(a)||!c)return a;c=M(c)?c:[c];c=Uc(c,function(a){var c=!1,d=a||Da;if(w(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var f=d();return e(function(a,b){return g(a[f],b[f])},c)}}return e(function(a,b){return g(d(a),d(b))},c)});for(var f=[],h=0;h<a.length;h++)f.push(a[h]);return f.sort(e(function(a,b){for(var d=
0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function va(b){P(b)&&(b={link:b});b.restrict=b.restrict||"AC";return aa(b)}function Oc(b,a,c,d){function e(a,c){c=c?"-"+fb(c,"-"):"";d.removeClass(b,(a?qb:rb)+c);d.addClass(b,(a?rb:qb)+c)}var g=this,f=b.parent().controller("form")||sb,h=0,l=g.$error={},k=[];g.$name=a.name||a.ngForm;g.$dirty=!1;g.$pristine=!0;g.$valid=!0;g.$invalid=!1;f.$addControl(g);b.addClass(La);e(!0);g.$addControl=function(a){Aa(a.$name,"input");k.push(a);a.$name&&
(g[a.$name]=a)};g.$removeControl=function(a){a.$name&&g[a.$name]===a&&delete g[a.$name];q(l,function(b,c){g.$setValidity(c,!0,a)});Oa(k,a)};g.$setValidity=function(a,b,c){var d=l[a];if(b)d&&(Oa(d,c),d.length||(h--,h||(e(b),g.$valid=!0,g.$invalid=!1),l[a]=!1,e(!0,a),f.$setValidity(a,!0,g)));else{h||e(b);if(d){if(-1!=db(d,c))return}else l[a]=d=[],h++,e(!1,a),f.$setValidity(a,!1,g);d.push(c);g.$valid=!1;g.$invalid=!0}};g.$setDirty=function(){d.removeClass(b,La);d.addClass(b,tb);g.$dirty=!0;g.$pristine=
!1;f.$setDirty()};g.$setPristine=function(){d.removeClass(b,tb);d.addClass(b,La);g.$dirty=!1;g.$pristine=!0;q(k,function(a){a.$setPristine()})}}function pa(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Je(b,a,c){var d=c.prop("validity");X(d)&&b.$parsers.push(function(c){if(b.$error[a]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)})}function ub(b,a,c,d,e,g){var f=a.prop("validity");if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});
a.on("compositionend",function(){h=!1;l()})}var l=function(){if(!h){var e=a.val();Qa(c.ngTrim||"T")&&(e=ca(e));if(d.$viewValue!==e||f&&""===e&&!f.valueMissing)b.$$phase?d.$setViewValue(e):b.$apply(function(){d.$setViewValue(e)})}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(){k||(k=g.defer(function(){l();k=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||m()});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?
"":d.$viewValue)};var n=c.ngPattern;n&&((e=n.match(/^\/(.*)\/([gim]*)$/))?(n=RegExp(e[1],e[2]),e=function(a){return pa(d,"pattern",d.$isEmpty(a)||n.test(a),a)}):e=function(c){var e=b.$eval(n);if(!e||!e.test)throw t("ngPattern")("noregexp",n,e,ha(a));return pa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var p=Y(c.ngMinlength);e=function(a){return pa(d,"minlength",d.$isEmpty(a)||a.length>=p,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var r=
Y(c.ngMaxlength);e=function(a){return pa(d,"maxlength",d.$isEmpty(a)||a.length<=r,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Pb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!M(a)){if(w(a))return a.split(" ");if(X(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b}}return a}return{restrict:"AC",link:function(g,f,h){function l(a,b){var c=
f.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});f.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||g.$index%2===a){var k=e(b||[]);if(!m){var r=l(k,1);h.$addClass(r)}else if(!xa(b,m)){var q=e(m),r=d(k,q),k=d(q,k),k=l(k,-1),r=l(r,1);0===r.length?c.removeClass(f,k):0===k.length?c.addClass(f,r):c.setClass(f,r,k)}}m=ba(b)}var m;g.$watch(h[b],k,!0);h.$observe("class",function(a){k(g.$eval(h[b]))});"ngClass"!==b&&g.$watch("$index",
function(c,d){var f=c&1;if(f!==d&1){var k=e(g.$eval(h[b]));f===a?(f=l(k,1),h.$addClass(f)):(f=l(k,-1),h.$removeClass(f))}})}}}]}var K=function(b){return w(b)?b.toLowerCase():b},Fc=Object.prototype.hasOwnProperty,Fa=function(b){return w(b)?b.toUpperCase():b},S,y,Ga,ya=[].slice,Ke=[].push,wa=Object.prototype.toString,Pa=t("ng"),Ea=O.angular||(O.angular={}),Sa,Ka,ka=["0","0","0"];S=Y((/msie (\d+)/.exec(K(navigator.userAgent))||[])[1]);isNaN(S)&&(S=Y((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent))||
[])[1]));C.$inject=[];Da.$inject=[];var ca=function(){return String.prototype.trim?function(b){return w(b)?b.trim():b}:function(b){return w(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ka=9>S?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Fa(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Xc=/[A-Z]/g,$c={full:"1.2.16",major:1,minor:2,dot:16,codeName:"badger-enumeration"},Ua=N.cache={},gb=N.expando="ng-"+(new Date).getTime(),
me=1,Pc=O.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Fb=O.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};N._data=function(b){return this.cache[b[this.expando]]||{}};var he=/([\:\-\_]+(.))/g,ie=/^moz([A-Z])/,Bb=t("jqLite"),je=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Cb=/<|&#?\w+;/,ke=/<([\w:]+)/,le=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ea=
{option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ea.optgroup=ea.option;ea.tbody=ea.tfoot=ea.colgroup=ea.caption=ea.thead;ea.th=ea.td;var Ja=N.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===U.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),N(O).on("load",a))},toString:function(){var b=
[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?y(this[b]):y(this[this.length+b])},length:0,push:Ke,sort:[].sort,splice:[].splice},kb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){kb[K(b)]=b});var nc={};q("input select option textarea button form details".split(" "),function(b){nc[Fa(b)]=!0});q({data:jc,inheritedData:jb,scope:function(b){return y(b).data("$scope")||jb(b.parentNode||b,["$isolateScope","$scope"])},
isolateScope:function(b){return y(b).data("$isolateScope")||y(b).data("$isolateScopeNoTemplate")},controller:kc,injector:function(b){return jb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Gb,css:function(b,a,c){a=Ta(a);if(B(c))b.style[a]=c;else{var d;8>=S&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=S&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=K(a);if(kb[d])if(B(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));
else return b[a]||(b.attributes.getNamedItem(a)||C).specified?d:s;else if(B(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(B(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(E(d))return e?b[e]:"";b[e]=d}var a=[];9>S?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(E(a)){if("SELECT"===Ka(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&
c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(E(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ha(d[c]);b.innerHTML=a},empty:lc},function(b,a){N.prototype[a]=function(a,d){var e,g;if(b!==lc&&(2==b.length&&b!==Gb&&b!==kc?a:d)===s){if(X(a)){for(e=0;e<this.length;e++)if(b===jc)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}e=b.$dv;g=e===s?Math.min(this.length,1):this.length;for(var f=0;f<g;f++){var h=b(this[f],a,d);e=
e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:hc,dealoc:Ha,on:function a(c,d,e,g){if(B(g))throw Bb("onargs");var f=la(c,"events"),h=la(c,"handle");f||la(c,"events",f={});h||la(c,"handle",h=ne(c,f));q(d.split(" "),function(d){var g=f[d];if(!g){if("mouseenter"==d||"mouseleave"==d){var m=U.body.contains||U.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):
a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};f[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||m(this,c))||h(a,d)})}else Pc(c,d,h),f[d]=[];g=f[d]}g.push(e)})},off:ic,one:function(a,c,d){a=y(a);a.on(c,function g(){a.off(c,d);a.off(c,g)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ha(a);q(new N(c),function(c){d?e.insertBefore(c,d.nextSibling):
e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){q(new N(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new N(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=y(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ha(a);
var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new N(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:ib,removeClass:hb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var g=d;E(g)&&(g=!Gb(a,c));(g?ib:hb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?
a.getElementsByTagName(c):[]},clone:Eb,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];d=d||[];var e=[{preventDefault:C,stopPropagation:C}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){N.prototype[c]=function(c,e,g){for(var f,h=0;h<this.length;h++)E(f)?(f=a(this[h],c,e,g),B(f)&&(f=y(f))):Db(f,a(this[h],c,e,g));return B(f)?f:this};N.prototype.bind=N.prototype.on;N.prototype.unbind=N.prototype.off});Va.prototype={put:function(a,c){this[Ia(a)]=c},get:function(a){return this[Ia(a)]},
remove:function(a){var c=this[a=Ia(a)];delete this[a];return c}};var pe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,qe=/,/,re=/^\s*(_?)(\S+?)\1\s*$/,oe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Wa=t("$injector"),Le=t("$animate"),Ld=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Le("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?
a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,f,h){f?f.after(a):(c&&c[0]||(c=f.parent()),c.append(a));h&&d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,f){c=w(c)?c:M(c)?c.join(" "):"";q(a,function(a){ib(a,c)});f&&d(f)},removeClass:function(a,c,f){c=w(c)?c:M(c)?c.join(" "):"";q(a,function(a){hb(a,c)});f&&d(f)},setClass:function(a,c,f,h){q(a,function(a){ib(a,c);hb(a,
f)});h&&d(h)},enabled:C}}]}],ja=t("$compile");cc.$inject=["$provide","$$sanitizeUriProvider"];var te=/^(x[\:\-_]|data[\:\-_])/i,vc=t("$interpolate"),Me=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,we={http:80,https:443,ftp:21},Kb=t("$location");Ac.prototype=Lb.prototype=zc.prototype={$$html5:!1,$$replace:!1,absUrl:nb("$$absUrl"),url:function(a,c){if(E(a))return this.$$url;var d=Me.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:nb("$$protocol"),
host:nb("$$host"),port:nb("$$port"),path:Bc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(w(a))this.$$search=Yb(a);else if(X(a))this.$$search=a;else throw Kb("isrcharg");break;default:E(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Bc("$$hash",Da),replace:function(){this.$$replace=!0;return this}};var Ba=t("$parse"),Ec={},ta,Ma={"null":function(){return null},"true":function(){return!0},
"false":function(){return!1},undefined:C,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return B(d)?B(e)?d+e:d:B(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(B(d)?d:0)-(B(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":C,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,
c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Ne={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},
Nb=function(a){this.options=a};Nb.prototype={constructor:Nb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));
else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),g=Ma[this.ch],f=Ma[d],h=Ma[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):f?(this.tokens.push({index:this.index,text:d,fn:f}),this.index+=2):g?(this.tokens.push({index:this.index,
text:this.ch,fn:g,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===
a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=B(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw Ba("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=
d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,g,f,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;
this.index++}if(e)for(g=this.index;g<this.text.length;){h=this.text.charAt(g);if("("===h){f=c.substr(e-d+1);c=c.substr(0,e-d);this.index=g;break}if(this.isWhitespace(h))g++;else break}d={index:d,text:c};if(Ma.hasOwnProperty(c))d.fn=Ma[c],d.json=Ma[c];else{var l=Dc(c,this.options,this.text);d.fn=D(function(a,c){return l(a,c)},{assign:function(d,e){return ob(d,c,e,a.text,a.options)}})}this.tokens.push(d);f&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:f,json:!1}))},
readString:function(a){var c=this.index;this.index++;for(var d="",e=a,g=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),e=e+f;if(g)"u"===f?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d=(g=Ne[f])?d+g:d+f,g=!1;else if("\\"===f)g=!0;else{if(f===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=
f}this.index++}this.throwError("Unterminated quote",c)}};var $a=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};$a.ZERO=D(function(){return 0},{constant:!0});$a.prototype={constructor:$a,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&
this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?
(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw Ba("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw Ba("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var g=this.tokens[0],f=g.text;if(f===a||f===c||f===d||f===e||!(a||c||d||e))return g}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,
e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return D(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return D(function(e,g){return a(e,g)?c(e,g):d(e,g)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return D(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant})},
statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,g=0;g<a.length;g++){var f=a[g];f&&(e=f(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=
function(a,e,h){h=[h];for(var l=0;l<d.length;l++)h.push(d[l](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,g){return a.assign(d,c(d,g),g)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn($a.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Dc(d,this.options,this.text);return D(function(c,d,h){return e(h||a(c,d))},{assign:function(e,f,h){return ob(a(e,h),d,f,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return D(function(e,g){var f=a(e,g),h=d(e,g),l;if(!f)return s;(f=Za(f[h],c.text))&&(f.then&&c.options.unwrapPromises)&&(l=f,"$$v"in f||(l.$$v=s,l.then(function(a){l.$$v=
a})),f=f.$$v);return f},{assign:function(e,g,f){var h=d(e,f);return Za(a(e,f),c.text)[h]=g}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(g,f){for(var h=[],l=c?c(g,f):g,k=0;k<d.length;k++)h.push(d[k](g,f));k=a(g,f,l)||C;Za(l,e.text);Za(k,e.text);h=k.apply?k.apply(l,h):k(h[0],h[1],h[2],h[3],h[4]);return Za(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return D(function(c,d){for(var f=[],h=0;h<a.length;h++)f.push(a[h](c,d));return f},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return D(function(c,d){for(var e={},l=0;l<
a.length;l++){var k=a[l];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Mb={},ua=t("$sce"),ga={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},W=U.createElement("a"),Hc=sa(O.location.href,!0);gc.$inject=["$provide"];Ic.$inject=["$locale"];Kc.$inject=["$locale"];var Nc=".",Ie={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:pb("Month"),MMM:pb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",
1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:pb("Day"),EEE:pb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ob(Math[0<a?"floor":"ceil"](a/60),2)+Ob(Math.abs(a%60),2))}},He=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Ge=/^\-?\d+$/;Jc.$inject=["$locale"];var Ee=aa(K),Fe=aa(Fa);Lc.$inject=
["$parse"];var cd=aa({restrict:"E",compile:function(a,c){8>=S&&(c.href||c.name||c.$set("href",""),a.append(U.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var g="[object SVGAnimatedString]"===wa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(g)||a.preventDefault()})}}}),zb={};q(kb,function(a,c){if("multiple"!=a){var d=na("ng-"+c);zb[d]=function(){return{priority:100,link:function(a,g,f){a.$watch(f[d],function(a){f.$set(c,!!a)})}}}}});q(["src",
"srcset","href"],function(a){var c=na("ng-"+a);zb[c]=function(){return{priority:99,link:function(d,e,g){var f=a,h=a;"href"===a&&"[object SVGAnimatedString]"===wa.call(e.prop("href"))&&(h="xlinkHref",g.$attr[h]="xlink:href",f=null);g.$observe(c,function(a){a&&(g.$set(h,a),S&&f&&e.prop(f,g[h]))})}}}});var sb={$addControl:C,$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C};Oc.$inject=["$element","$attrs","$scope","$animate"];var Qc=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:Oc,compile:function(){return{pre:function(a,e,g,f){if(!g.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Pc(e[0],"submit",h);e.on("$destroy",function(){c(function(){Fb(e[0],"submit",h)},0,!1)})}var l=e.parent().controller("form"),k=g.name||g.ngForm;k&&ob(a,k,f,k);if(l)e.on("$destroy",function(){l.$removeControl(f);k&&ob(a,k,s,k);D(f,sb)})}}}}}]},dd=Qc(),qd=Qc(!0),Oe=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Pe=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,Qe=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Rc={text:ub,number:function(a,c,d,e,g,f){ub(a,c,d,e,g,f);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Qe.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Je(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return pa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),
e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return pa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return pa(e,"number",e.$isEmpty(a)||vb(a),a)})},url:function(a,c,d,e,g,f){ub(a,c,d,e,g,f);a=function(a){return pa(e,"url",e.$isEmpty(a)||Oe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,f){ub(a,c,d,e,g,f);a=function(a){return pa(e,"email",e.$isEmpty(a)||Pe.test(a),a)};e.$formatters.push(a);
e.$parsers.push(a)},radio:function(a,c,d,e){E(d.name)&&c.attr("name",bb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,f=d.ngFalseValue;w(g)||(g=!0);w(f)||(f=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==g};
e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:f})},hidden:C,button:C,submit:C,reset:C,file:C},dc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,f){f&&(Rc[K(g.type)]||Rc.text)(d,e,g,f,c,a)}}}],rb="ng-valid",qb="ng-invalid",La="ng-pristine",tb="ng-dirty",Re=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,g,f){function h(a,c){c=c?"-"+fb(c,"-"):"";f.removeClass(e,(a?qb:rb)+c);
f.addClass(e,(a?rb:qb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var l=g(d.ngModel),k=l.assign;if(!k)throw t("ngModel")("nonassign",d.ngModel,ha(e));this.$render=C;this.$isEmpty=function(a){return E(a)||""===a||null===a||a!==a};var m=e.inheritedData("$formController")||sb,n=0,p=this.$error={};e.addClass(La);h(!0);this.$setValidity=function(a,c){p[a]!==
!c&&(c?(p[a]&&n--,n||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$invalid=!0,this.$valid=!1,n++),p[a]=!c,h(c,a),m.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;f.removeClass(e,tb);f.addClass(e,La)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,f.removeClass(e,La),f.addClass(e,tb),m.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,k(a,d),q(this.$viewChangeListeners,
function(a){try{a()}catch(d){c(d)}}))};var r=this;a.$watch(function(){var c=l(a);if(r.$modelValue!==c){var d=r.$formatters,e=d.length;for(r.$modelValue=c;e--;)c=d[e](c);r.$viewValue!==c&&(r.$viewValue=c,r.$render())}return c})}],Fd=function(){return{require:["ngModel","^?form"],controller:Re,link:function(a,c,d,e){var g=e[0],f=e[1]||sb;f.$addControl(g);a.$on("$destroy",function(){f.$removeControl(g)})}}},Hd=aa({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
ec=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},Gd=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!E(a)){var c=[];a&&q(a.split(g),function(a){a&&
c.push(ca(a))});return c}});e.$formatters.push(function(a){return M(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},Se=/^(true|false|\d+)$/,Id=function(){return{priority:100,compile:function(a,c){return Se.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},id=va(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),kd=["$interpolate",
function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],jd=["$sce","$parse",function(a,c){return function(d,e,g){e.addClass("ng-binding").data("$binding",g.ngBindHtml);var f=c(g.ngBindHtml);d.$watch(function(){return(f(d)||"").toString()},function(c){e.html(a.getTrustedHtml(f(d))||"")})}}],ld=Pb("",!0),nd=Pb("Odd",0),md=Pb("Even",1),od=va({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),
pd=[function(){return{scope:!0,controller:"@",priority:500}}],fc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=na("ng-"+a);fc[c]=["$parse",function(d){return{compile:function(e,g){var f=d(g[c]);return function(c,d,e){d.on(K(a),function(a){c.$apply(function(){f(c,{$event:a})})})}}}}]});var sd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",
$$tlb:!0,link:function(c,d,e,g,f){var h,l,k;c.$watch(e.ngIf,function(g){Qa(g)?l||(l=c.$new(),f(l,function(c){c[c.length++]=U.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=yb(h.clone),a.leave(k,function(){k=null}),h=null))})}}}],td=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,g){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ea.noop,compile:function(f,
h){var l=h.ngInclude||h.src,k=h.onload||"",m=h.autoscroll;return function(f,h,q,s,u){var F=0,v,y,A,x=function(){y&&(y.remove(),y=null);v&&(v.$destroy(),v=null);A&&(e.leave(A,function(){y=null}),y=A,A=null)};f.$watch(g.parseAsResourceUrl(l),function(g){var l=function(){!B(m)||m&&!f.$eval(m)||d()},q=++F;g?(a.get(g,{cache:c}).success(function(a){if(q===F){var c=f.$new();s.template=a;a=u(c,function(a){x();e.enter(a,null,h,l)});v=c;A=a;v.$emit("$includeContentLoaded");f.$eval(k)}}).error(function(){q===
F&&x()}),f.$emit("$includeContentRequested")):(x(),s.template=null)})}}}}],Jd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,g){d.html(g.template);a(d.contents())(c)}}}],ud=va({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),vd=va({terminal:!0,priority:1E3}),wd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,f){var h=f.count,l=f.$attr.when&&g.attr(f.$attr.when),k=f.offset||
0,m=e.$eval(l)||{},n={},p=c.startSymbol(),r=c.endSymbol(),s=/^when(Minus)?(.+)$/;q(f,function(a,c){s.test(c)&&(m[K(c.replace("when","").replace("Minus","-"))]=g.attr(f.$attr[c]))});q(m,function(a,e){n[e]=c(a.replace(d,p+h+"-"+k+r))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in m||(c=a.pluralCat(c-k));return n[c](e,g,!0)},function(a){g.text(a)})}}}],xd=["$parse","$animate",function(a,c){var d=t("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,
link:function(e,g,f,h,l){var k=f.ngRepeat,m=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,r,s,u,F,v={$id:Ia};if(!m)throw d("iexp",k);f=m[1];h=m[2];(m=m[3])?(n=a(m),p=function(a,c,d){F&&(v[F]=a);v[u]=c;v.$index=d;return n(e,v)}):(r=function(a,c){return Ia(c)},s=function(a){return a});m=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!m)throw d("iidexp",f);u=m[3]||m[1];F=m[2];var B={};e.$watchCollection(h,function(a){var f,h,m=g[0],n,v={},H,R,w,C,T,t,
E=[];if(ab(a))T=a,n=p||r;else{n=p||s;T=[];for(w in a)a.hasOwnProperty(w)&&"$"!=w.charAt(0)&&T.push(w);T.sort()}H=T.length;h=E.length=T.length;for(f=0;f<h;f++)if(w=a===T?f:T[f],C=a[w],C=n(w,C,f),Aa(C,"`track by` id"),B.hasOwnProperty(C))t=B[C],delete B[C],v[C]=t,E[f]=t;else{if(v.hasOwnProperty(C))throw q(E,function(a){a&&a.scope&&(B[a.id]=a)}),d("dupes",k,C);E[f]={id:C};v[C]=!1}for(w in B)B.hasOwnProperty(w)&&(t=B[w],f=yb(t.clone),c.leave(f),q(f,function(a){a.$$NG_REMOVED=!0}),t.scope.$destroy());
f=0;for(h=T.length;f<h;f++){w=a===T?f:T[f];C=a[w];t=E[f];E[f-1]&&(m=E[f-1].clone[E[f-1].clone.length-1]);if(t.scope){R=t.scope;n=m;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);t.clone[0]!=n&&c.move(yb(t.clone),null,y(m));m=t.clone[t.clone.length-1]}else R=e.$new();R[u]=C;F&&(R[F]=w);R.$index=f;R.$first=0===f;R.$last=f===H-1;R.$middle=!(R.$first||R.$last);R.$odd=!(R.$even=0===(f&1));t.scope||l(R,function(a){a[a.length++]=U.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,y(m));m=a;t.scope=R;t.clone=
a;v[t.id]=t})}B=v})}}}],yd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Qa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],rd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Qa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],zd=va(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ad=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(c,d,e,g){var f,h,l,k=[];c.$watch(e.ngSwitch||e.on,function(d){var n,p=k.length;if(0<p){if(l){for(n=0;n<p;n++)l[n].remove();l=null}l=[];for(n=0;n<p;n++){var r=h[n];k[n].$destroy();l[n]=r;a.leave(r,function(){l.splice(n,1);0===l.length&&(l=null)})}}h=[];k=[];if(f=g.cases["!"+d]||g.cases["?"])c.$eval(e.change),q(f,function(d){var e=c.$new();k.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Bd=va({transclude:"element",priority:800,require:"^ngSwitch",
link:function(a,c,d,e,g){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:g,element:c})}}),Cd=va({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,g){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:g,element:c})}}),Ed=va({link:function(a,c,d,e,g){if(!g)throw t("ngTransclude")("orphan",ha(c));g(function(a){c.empty();c.append(a)})}}),ed=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,
d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Te=t("ngOptions"),Dd=aa({terminal:!0}),fd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:C};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,n;l.databound=
d.ngModel;l.init=function(a,c,d){m=a;n=d};l.addOption=function(c){Aa(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],m.$viewValue==a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Ia(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=C})}],link:function(e,f,h,l){function k(a,
c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(A.parent()&&A.remove(),c.val(a),""===a&&w.prop("selected",!0)):E(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){A.parent()&&A.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new Va(d.$viewValue);q(c.find("option"),function(c){c.selected=B(a.get(c.value))})};a.$watch(function(){xa(e,d.$viewValue)||(e=ba(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=
[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,s,t,z;t=g.$modelValue;z=y(e)||[];var E=n?Qb(z):z,F,I,A;I={};s=!1;var D,H;if(r)if(w&&M(t))for(s=new Va([]),A=0;A<t.length;A++)I[m]=t[A],s.put(w(e,I),t[A]);else s=new Va(t);for(A=0;F=E.length,A<F;A++){k=A;if(n){k=E[A];if("$"===k.charAt(0))continue;I[n]=k}I[m]=z[k];d=p(e,I)||"";(k=a[d])||(k=a[d]=[],c.push(d));r?d=B(s.remove(w?w(e,I):q(e,I))):(w?(d={},d[m]=t,d=
w(e,d)===w(e,I)):d=t===q(e,I),s=s||d);D=l(e,I);D=B(D)?D:"";k.push({id:w?w(e,I):n?E[A]:A,label:D,selected:d})}r||(u||null===t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));I=0;for(E=c.length;I<E;I++){d=c[I];k=a[d];x.length<=I?(t={element:C.clone().attr("label",d),label:k.label},z=[t],x.push(z),f.append(t.element)):(z=x[I],t=z[0],t.label!=d&&t.element.attr("label",t.label=d));D=null;A=0;for(F=k.length;A<F;A++)s=k[A],(d=z[A+1])?(D=d.element,d.label!==s.label&&
D.text(d.label=s.label),d.id!==s.id&&D.val(d.id=s.id),d.selected!==s.selected&&D.prop("selected",d.selected=s.selected)):(""===s.id&&u?H=u:(H=v.clone()).val(s.id).attr("selected",s.selected).text(s.label),z.push({element:H,label:s.label,id:s.id,selected:s.selected}),D?D.after(H):t.element.append(H),D=H);for(A++;z.length>A;)z.pop().element.remove()}for(;x.length>I;)x.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Te("iexp",t,ha(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=
c(k[2]?k[1]:m),y=c(k[7]),w=k[8]?c(k[8]):null,x=[[{element:f,label:""}]];u&&(a(u)(e),u.removeClass("ng-scope"),u.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=y(e)||[],d={},h,k,l,p,t,v,u;if(r)for(k=[],p=0,v=x.length;p<v;p++)for(a=x[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(u=0;u<c.length&&(d[m]=c[u],w(e,d)!=h);u++);else d[m]=c[h];k.push(q(e,d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(w)for(u=0;u<c.length;u++){if(d[m]=
c[u],w(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);1<x[0].length&&x[0][1].id!==h&&(x[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(l[1]){var p=l[0];l=l[1];var r=h.multiple,t=h.ngOptions,u=!1,w,v=y(U.createElement("option")),C=y(U.createElement("optgroup")),A=v.clone();h=0;for(var x=f.children(),D=x.length;h<D;h++)if(""===x[h].value){w=u=x.eq(h);break}p.init(l,u,A);r&&(l.$isEmpty=function(a){return!a||0===a.length});t?n(e,f,l):r?m(e,f,l):k(e,f,l,p)}}}}],hd=["$interpolate",
function(a){var c={addOption:C,removeOption:C};return{restrict:"E",priority:100,compile:function(d,e){if(E(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound?d.prop("selected",!1):m=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&m.removeOption(c);m.addOption(a)}):m.addOption(e.value);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],gd=aa({restrict:"E",
terminal:!0});O.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ga=O.jQuery)?(y=Ga,D(Ga.fn,{scope:Ja.scope,isolateScope:Ja.isolateScope,controller:Ja.controller,injector:Ja.injector,inheritedData:Ja.inheritedData}),Ab("remove",!0,!0,!1),Ab("empty",!1,!1,!1),Ab("html",!1,!1,!0)):y=N,Ea.element=y,Zc(Ea),y(U).ready(function(){Wc(U,$b)}))})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>');

/*
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(s,g,P){'use strict';g.module("ngAnimate",["ng"]).factory("$$animateReflow",["$$rAF","$document",function(g,s){return function(e){return g(function(){e()})}}]).config(["$provide","$animateProvider",function(ga,G){function e(e){for(var p=0;p<e.length;p++){var g=e[p];if(g.nodeType==ba)return g}}function u(p){return g.element(e(p))}var m=g.noop,p=g.forEach,Q=G.$$selectors,ba=1,h="$$ngAnimateState",J="ng-animate",r={running:!0};ga.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement",
"$$asyncCallback","$rootScope","$document",function(t,s,aa,K,E,H,P){function R(a){if(a){var b=[],c={};a=a.substr(1).split(".");(aa.transitions||aa.animations)&&b.push(s.get(Q[""]));for(var d=0;d<a.length;d++){var f=a[d],e=Q[f];e&&!c[f]&&(b.push(s.get(e)),c[f]=!0)}return b}}function L(a,b,c){function d(a,b){var c=a[b],d=a["before"+b.charAt(0).toUpperCase()+b.substr(1)];if(c||d)return"leave"==b&&(d=c,c=null),A.push({event:b,fn:c}),l.push({event:b,fn:d}),!0}function f(b,d,e){var f=[];p(b,function(a){a.fn&&
f.push(a)});var n=0;p(f,function(b,p){var C=function(){a:{if(d){(d[p]||m)();if(++n<f.length)break a;d=null}e()}};switch(b.event){case "setClass":d.push(b.fn(a,q,y,C));break;case "addClass":d.push(b.fn(a,q||c,C));break;case "removeClass":d.push(b.fn(a,y||c,C));break;default:d.push(b.fn(a,C))}});d&&0===d.length&&e()}var e=a[0];if(e){var h="setClass"==b,r=h||"addClass"==b||"removeClass"==b,q,y;g.isArray(c)&&(q=c[0],y=c[1],c=q+" "+y);var z=a.attr("class")+" "+c;if(T(z)){var v=m,w=[],l=[],x=m,n=[],A=[],
z=(" "+z).replace(/\s+/g,".");p(R(z),function(a){!d(a,b)&&h&&(d(a,"addClass"),d(a,"removeClass"))});return{node:e,event:b,className:c,isClassBased:r,isSetClassOperation:h,before:function(a){v=a;f(l,w,function(){v=m;a()})},after:function(a){x=a;f(A,n,function(){x=m;a()})},cancel:function(){w&&(p(w,function(a){(a||m)(!0)}),v(!0));n&&(p(n,function(a){(a||m)(!0)}),x(!0))}}}}}function F(a,b,c,d,f,e,r){function m(d){var e="$animate:"+d;x&&(x[e]&&0<x[e].length)&&E(function(){c.triggerHandler(e,{event:a,
className:b})})}function q(){m("before")}function y(){m("after")}function z(){m("close");r&&E(function(){r()})}function v(){v.hasBeenRun||(v.hasBeenRun=!0,e())}function w(){if(!w.hasBeenRun){w.hasBeenRun=!0;var d=c.data(h);d&&(l&&l.isClassBased?B(c,b):(E(function(){var d=c.data(h)||{};t==d.index&&B(c,b,a)}),c.data(h,d)));z()}}var l=L(c,a,b);if(l){b=l.className;var x=g.element._data(l.node),x=x&&x.events;d||(d=f?f.parent():c.parent());var n=c.data(h)||{};f=n.active||{};var A=n.totalActive||0,C=n.last;
if(l.isClassBased&&(n.disabled||C&&!C.isClassBased)||N(c,d))v(),q(),y(),w();else{d=!1;if(0<A){n=[];if(l.isClassBased)"setClass"==C.event?(n.push(C),B(c,b)):f[b]&&(s=f[b],s.event==a?d=!0:(n.push(s),B(c,b)));else if("leave"==a&&f["ng-leave"])d=!0;else{for(var s in f)n.push(f[s]),B(c,s);f={};A=0}0<n.length&&p(n,function(a){a.cancel()})}!l.isClassBased||(l.isSetClassOperation||d)||(d="addClass"==a==c.hasClass(b));if(d)q(),y(),z();else{if("leave"==a)c.one("$destroy",function(a){a=g.element(this);var b=
a.data(h);b&&(b=b.active["ng-leave"])&&(b.cancel(),B(a,"ng-leave"))});c.addClass(J);var t=O++;A++;f[b]=l;c.data(h,{last:l,active:f,index:t,totalActive:A});q();l.before(function(d){var e=c.data(h);d=d||!e||!e.active[b]||l.isClassBased&&e.active[b].event!=a;v();!0===d?w():(y(),l.after(w))})}}}else v(),q(),y(),w()}function U(a){if(a=e(a))a=g.isFunction(a.getElementsByClassName)?a.getElementsByClassName(J):a.querySelectorAll("."+J),p(a,function(a){a=g.element(a);(a=a.data(h))&&a.active&&p(a.active,function(a){a.cancel()})})}
function B(a,b){if(e(a)==e(K))r.disabled||(r.running=!1,r.structural=!1);else if(b){var c=a.data(h)||{},d=!0===b;!d&&(c.active&&c.active[b])&&(c.totalActive--,delete c.active[b]);if(d||!c.totalActive)a.removeClass(J),a.removeData(h)}}function N(a,b){if(r.disabled)return!0;if(e(a)==e(K))return r.disabled||r.running;do{if(0===b.length)break;var c=e(b)==e(K),d=c?r:b.data(h),d=d&&(!!d.disabled||d.running||0<d.totalActive);if(c||d)return d;if(c)break}while(b=b.parent());return!0}var O=0;K.data(h,r);H.$$postDigest(function(){H.$$postDigest(function(){r.running=
!1})});var V=G.classNameFilter(),T=V?function(a){return V.test(a)}:function(){return!0};return{enter:function(a,b,c,d){this.enabled(!1,a);t.enter(a,b,c);H.$$postDigest(function(){a=u(a);F("enter","ng-enter",a,b,c,m,d)})},leave:function(a,b){U(a);this.enabled(!1,a);H.$$postDigest(function(){F("leave","ng-leave",u(a),null,null,function(){t.leave(a)},b)})},move:function(a,b,c,d){U(a);this.enabled(!1,a);t.move(a,b,c);H.$$postDigest(function(){a=u(a);F("move","ng-move",a,b,c,m,d)})},addClass:function(a,
b,c){a=u(a);F("addClass",b,a,null,null,function(){t.addClass(a,b)},c)},removeClass:function(a,b,c){a=u(a);F("removeClass",b,a,null,null,function(){t.removeClass(a,b)},c)},setClass:function(a,b,c,d){a=u(a);F("setClass",[b,c],a,null,null,function(){t.setClass(a,b,c)},d)},enabled:function(a,b){switch(arguments.length){case 2:if(a)B(b);else{var c=b.data(h)||{};c.disabled=!0;b.data(h,c)}break;case 1:r.disabled=!a;break;default:a=!r.disabled}return!!a}}}]);G.register("",["$window","$sniffer","$timeout",
"$$animateReflow",function(h,r,u,K){function E(a,k){S&&S();W.push(k);S=K(function(){p(W,function(a){a()});W=[];S=null;M={}})}function H(a,k){var b=e(a);a=g.element(b);Y.push(a);b=Date.now()+k;b<=fa||(u.cancel(ea),fa=b,ea=u(function(){J(Y);Y=[]},k,!1))}function J(a){p(a,function(a){(a=a.data(n))&&(a.closeAnimationFn||m)()})}function R(a,k){var b=k?M[k]:null;if(!b){var c=0,d=0,e=0,f=0,n,Z,$,g;p(a,function(a){if(a.nodeType==ba){a=h.getComputedStyle(a)||{};$=a[I+z];c=Math.max(L($),c);g=a[I+v];n=a[I+w];
d=Math.max(L(n),d);Z=a[q+w];f=Math.max(L(Z),f);var k=L(a[q+z]);0<k&&(k*=parseInt(a[q+l],10)||1);e=Math.max(k,e)}});b={total:0,transitionPropertyStyle:g,transitionDurationStyle:$,transitionDelayStyle:n,transitionDelay:d,transitionDuration:c,animationDelayStyle:Z,animationDelay:f,animationDuration:e};k&&(M[k]=b)}return b}function L(a){var k=0;a=g.isString(a)?a.split(/\s*,\s*/):[];p(a,function(a){k=Math.max(parseFloat(a)||0,k)});return k}function F(a){var k=a.parent(),b=k.data(x);b||(k.data(x,++da),
b=da);return b+"-"+e(a).getAttribute("class")}function U(a,k,b,c){var d=F(k),f=d+" "+b,p=M[f]?++M[f].total:0,g={};if(0<p){var h=b+"-stagger",g=d+" "+h;(d=!M[g])&&k.addClass(h);g=R(k,g);d&&k.removeClass(h)}c=c||function(a){return a()};k.addClass(b);var h=k.data(n)||{},l=c(function(){return R(k,f)});c=l.transitionDuration;d=l.animationDuration;if(0===c&&0===d)return k.removeClass(b),!1;k.data(n,{running:h.running||0,itemIndex:p,stagger:g,timings:l,closeAnimationFn:m});a=0<h.running||"setClass"==a;0<
c&&B(k,b,a);0<d&&(0<g.animationDelay&&0===g.animationDuration)&&(e(k).style[q]="none 0s");return!0}function B(a,b,c){"ng-enter"!=b&&("ng-move"!=b&&"ng-leave"!=b)&&c?a.addClass(A):e(a).style[I+v]="none"}function N(a,b){var c=I+v,d=e(a);d.style[c]&&0<d.style[c].length&&(d.style[c]="");a.removeClass(A)}function O(a){var b=q;a=e(a);a.style[b]&&0<a.style[b].length&&(a.style[b]="")}function V(a,b,c,f){function g(a){b.off(z,h);b.removeClass(r);d(b,c);a=e(b);for(var X in u)a.style.removeProperty(u[X])}function h(a){a.stopPropagation();
var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(C));Math.max(a-A,0)>=x&&b>=v&&f()}var l=e(b);a=b.data(n);if(-1!=l.getAttribute("class").indexOf(c)&&a){var r="";p(c.split(" "),function(a,b){r+=(0<b?" ":"")+a+"-active"});var q=a.stagger,m=a.timings,s=a.itemIndex,v=Math.max(m.transitionDuration,m.animationDuration),w=Math.max(m.transitionDelay,m.animationDelay),x=w*ca,A=Date.now(),z=y+" "+G,t="",u=[];if(0<m.transitionDuration){var B=m.transitionPropertyStyle;
-1==B.indexOf("all")&&(t+=D+"transition-property: "+B+";",t+=D+"transition-duration: "+m.transitionDurationStyle+";",u.push(D+"transition-property"),u.push(D+"transition-duration"))}0<s&&(0<q.transitionDelay&&0===q.transitionDuration&&(t+=D+"transition-delay: "+T(m.transitionDelayStyle,q.transitionDelay,s)+"; ",u.push(D+"transition-delay")),0<q.animationDelay&&0===q.animationDuration&&(t+=D+"animation-delay: "+T(m.animationDelayStyle,q.animationDelay,s)+"; ",u.push(D+"animation-delay")));0<u.length&&
(m=l.getAttribute("style")||"",l.setAttribute("style",m+" "+t));b.on(z,h);b.addClass(r);a.closeAnimationFn=function(){g();f()};l=(s*(Math.max(q.animationDelay,q.transitionDelay)||0)+(w+v)*Q)*ca;a.running++;H(b,l);return g}f()}function T(a,b,c){var d="";p(a.split(","),function(a,X){d+=(0<X?",":"")+(c*b+parseInt(a,10))+"s"});return d}function a(a,b,c,e){if(U(a,b,c,e))return function(a){a&&d(b,c)}}function b(a,b,c,e){if(b.data(n))return V(a,b,c,e);d(b,c);e()}function c(c,d,e,f){var g=a(c,d,e);if(g){var h=
g;E(d,function(){N(d,e);O(d);h=b(c,d,e,f)});return function(a){(h||m)(a)}}f()}function d(a,b){a.removeClass(b);var c=a.data(n);c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData(n))}function f(a,b){var c="";a=g.isArray(a)?a:a.split(/\s+/);p(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var D="",I,G,q,y;s.ontransitionend===P&&s.onwebkittransitionend!==P?(D="-webkit-",I="WebkitTransition",G="webkitTransitionEnd transitionend"):(I="transition",G="transitionend");s.onanimationend===
P&&s.onwebkitanimationend!==P?(D="-webkit-",q="WebkitAnimation",y="webkitAnimationEnd animationend"):(q="animation",y="animationend");var z="Duration",v="Property",w="Delay",l="IterationCount",x="$$ngAnimateKey",n="$$ngAnimateCSS3Data",A="ng-animate-block-transitions",C=3,Q=1.5,ca=1E3,M={},da=0,W=[],S,ea=null,fa=0,Y=[];return{enter:function(a,b){return c("enter",a,"ng-enter",b)},leave:function(a,b){return c("leave",a,"ng-leave",b)},move:function(a,b){return c("move",a,"ng-move",b)},beforeSetClass:function(b,
c,d,e){var g=f(d,"-remove")+" "+f(c,"-add"),h=a("setClass",b,g,function(a){var e=b.attr("class");b.removeClass(d);b.addClass(c);a=a();b.attr("class",e);return a});if(h)return E(b,function(){N(b,g);O(b);e()}),h;e()},beforeAddClass:function(b,c,d){var e=a("addClass",b,f(c,"-add"),function(a){b.addClass(c);a=a();b.removeClass(c);return a});if(e)return E(b,function(){N(b,c);O(b);d()}),e;d()},setClass:function(a,c,d,e){d=f(d,"-remove");c=f(c,"-add");return b("setClass",a,d+" "+c,e)},addClass:function(a,
c,d){return b("addClass",a,f(c,"-add"),d)},beforeRemoveClass:function(b,c,d){var e=a("removeClass",b,f(c,"-remove"),function(a){var d=b.attr("class");b.removeClass(c);a=a();b.attr("class",d);return a});if(e)return E(b,function(){N(b,c);O(b);d()}),e;d()},removeClass:function(a,c,d){return b("removeClass",a,f(c,"-remove"),d)}}}])}])})(window,window.angular);
!function(){"use strict";var e=angular.module("pasvaz.bindonce",[]);e.directive("bindonce",function(){var e=function(e){if(e&&0!==e.length){var t=angular.lowercase(""+e);e=!("f"===t||"0"===t||"false"===t||"no"===t||"n"===t||"[]"===t)}else e=!1;return e},t=parseInt((/msie (\d+)/.exec(angular.lowercase(navigator.userAgent))||[])[1],10);isNaN(t)&&(t=parseInt((/trident\/.*; rv:(\d+)/.exec(angular.lowercase(navigator.userAgent))||[])[1],10));var r={restrict:"AM",controller:["$scope","$element","$attrs","$interpolate",function(r,a,i,n){var c=function(t,r,a){var i="show"===r?"":"none",n="hide"===r?"":"none";t.css("display",e(a)?i:n)},o=function(e,t){if(angular.isObject(t)&&!angular.isArray(t)){var r=[];angular.forEach(t,function(e,t){e&&r.push(t)}),t=r}t&&e.addClass(angular.isArray(t)?t.join(" "):t)},s=function(e,t){e.transclude(t,function(t){var r=e.element.parent(),a=e.element&&e.element[e.element.length-1],i=r&&r[0]||a&&a.parentNode,n=a&&a.nextSibling||null;angular.forEach(t,function(e){i.insertBefore(e,n)})})},l={watcherRemover:void 0,binders:[],group:i.boName,element:a,ran:!1,addBinder:function(e){this.binders.push(e),this.ran&&this.runBinders()},setupWatcher:function(e){var t=this;this.watcherRemover=r.$watch(e,function(e){void 0!==e&&(t.removeWatcher(),t.checkBindonce(e))},!0)},checkBindonce:function(e){var t=this,r=e.$promise?e.$promise.then:e.then;"function"==typeof r?r(function(){t.runBinders()}):t.runBinders()},removeWatcher:function(){void 0!==this.watcherRemover&&(this.watcherRemover(),this.watcherRemover=void 0)},runBinders:function(){for(;this.binders.length>0;){var r=this.binders.shift();if(!this.group||this.group==r.group){var a=r.scope.$eval(r.interpolate?n(r.value):r.value);switch(r.attr){case"boIf":e(a)&&s(r,r.scope.$new());break;case"boSwitch":var i,l=r.controller[0];(i=l.cases["!"+a]||l.cases["?"])&&(r.scope.$eval(r.attrs.change),angular.forEach(i,function(e){s(e,r.scope.$new())}));break;case"boSwitchWhen":var u=r.controller[0];u.cases["!"+r.attrs.boSwitchWhen]=u.cases["!"+r.attrs.boSwitchWhen]||[],u.cases["!"+r.attrs.boSwitchWhen].push({transclude:r.transclude,element:r.element});break;case"boSwitchDefault":var u=r.controller[0];u.cases["?"]=u.cases["?"]||[],u.cases["?"].push({transclude:r.transclude,element:r.element});break;case"hide":case"show":c(r.element,r.attr,a);break;case"class":o(r.element,a);break;case"text":r.element.text(a);break;case"html":r.element.html(a);break;case"style":r.element.css(a);break;case"src":r.element.attr(r.attr,a),t&&r.element.prop("src",a);break;case"attr":angular.forEach(r.attrs,function(e,t){var a,i;t.match(/^boAttr./)&&r.attrs[t]&&(a=t.replace(/^boAttr/,"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=r.scope.$eval(r.attrs[t]),r.element.attr(a,i))});break;case"href":case"alt":case"title":case"id":case"value":r.element.attr(r.attr,a)}}}this.ran=!0}};return l}],link:function(e,t,r,a){var i=r.bindonce&&e.$eval(r.bindonce);void 0!==i?a.checkBindonce(i):(a.setupWatcher(r.bindonce),t.bind("$destroy",a.removeWatcher))}};return r}),angular.forEach([{directiveName:"boShow",attribute:"show"},{directiveName:"boHide",attribute:"hide"},{directiveName:"boClass",attribute:"class"},{directiveName:"boText",attribute:"text"},{directiveName:"boBind",attribute:"text"},{directiveName:"boHtml",attribute:"html"},{directiveName:"boSrcI",attribute:"src",interpolate:!0},{directiveName:"boSrc",attribute:"src"},{directiveName:"boHrefI",attribute:"href",interpolate:!0},{directiveName:"boHref",attribute:"href"},{directiveName:"boAlt",attribute:"alt"},{directiveName:"boTitle",attribute:"title"},{directiveName:"boId",attribute:"id"},{directiveName:"boStyle",attribute:"style"},{directiveName:"boValue",attribute:"value"},{directiveName:"boAttr",attribute:"attr"},{directiveName:"boIf",transclude:"element",terminal:!0,priority:1e3},{directiveName:"boSwitch",require:"boSwitch",controller:function(){this.cases={}}},{directiveName:"boSwitchWhen",transclude:"element",priority:800,require:"^boSwitch"},{directiveName:"boSwitchDefault",transclude:"element",priority:800,require:"^boSwitch"}],function(t){var r=200;return e.directive(t.directiveName,function(){var e={priority:t.priority||r,transclude:t.transclude||!1,terminal:t.terminal||!1,require:["^bindonce"].concat(t.require||[]),controller:t.controller,compile:function(e,r,a){return function(e,r,i,n){var c=n[0],o=i.boParent;if(o&&c.group!==o){var s=c.element.parent();c=void 0;for(var l;9!==s[0].nodeType&&s.length;){if((l=s.data("$bindonceController"))&&l.group===o){c=l;break}s=s.parent()}if(!c)throw new Error("No bindonce controller: "+o)}c.addBinder({element:r,attr:t.attribute||t.directiveName,attrs:i,value:i[t.directiveName],interpolate:t.interpolate,group:o,transclude:a,controller:n.slice(1),scope:e})}}};return e})})}();
/*
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,f,n){'use strict';f.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(e,b){var c={},g={},h,k=!1,l=f.copy,m=f.isUndefined;b.addPollFn(function(){var a=b.cookies();h!=a&&(h=a,l(a,g),l(a,c),k&&e.$apply())})();k=!0;e.$watch(function(){var a,d,e;for(a in g)m(c[a])&&b.cookies(a,n);for(a in c)d=c[a],f.isString(d)||(d=""+d,c[a]=d),d!==g[a]&&(b.cookies(a,d),e=!0);if(e)for(a in d=b.cookies(),c)c[a]!==d[a]&&(m(d[a])?delete c[a]:c[a]=d[a])});return c}]).factory("$cookieStore",
["$cookies",function(e){return{get:function(b){return(b=e[b])?f.fromJson(b):b},put:function(b,c){e[b]=f.toJson(c)},remove:function(b){delete e[b]}}}])})(window,window.angular);
/*
 angular-file-upload v2.2.0
 https://github.com/nervgh/angular-file-upload
*/

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["angular-file-upload"]=t():e["angular-file-upload"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},i=r(n(1)),o=r(n(2)),s=r(n(3)),a=r(n(4)),u=r(n(5)),l=r(n(6)),c=r(n(7)),f=r(n(8)),p=r(n(9)),d=r(n(10)),v=r(n(11)),h=r(n(12));angular.module(i.name,[]).value("fileUploaderOptions",o).factory("FileUploader",s).factory("FileLikeObject",a).factory("FileItem",u).factory("FileDirective",l).factory("FileSelect",c).factory("FileDrop",f).factory("FileOver",p).directive("nvFileSelect",d).directive("nvFileDrop",v).directive("nvFileOver",h).run(["FileUploader","FileLikeObject","FileItem","FileDirective","FileSelect","FileDrop","FileOver",function(e,t,n,r,i,o,s){e.FileLikeObject=t,e.FileItem=n,e.FileDirective=r,e.FileSelect=i,e.FileDrop=o,e.FileOver=s}])},function(e,t){e.exports={name:"angularFileUpload"}},function(e,t){"use strict";e.exports={url:"/",alias:"file",headers:{},queue:[],progress:0,autoUpload:!1,removeAfterUpload:!1,method:"POST",filters:[],formData:[],queueLimit:Number.MAX_VALUE,withCredentials:!1}},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},i=function(){function e(e,t){for(var n in t){var r=t[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=(r(n(1)),angular.copy),a=angular.extend,u=angular.forEach,l=angular.isObject,c=angular.isNumber,f=angular.isDefined,p=angular.isArray,d=angular.element;e.exports=function(e,t,n,r,v,h){var m=r.File,g=r.FormData,_=function(){function r(t){o(this,r);var n=s(e);a(this,n,t,{isUploading:!1,_nextIndex:0,_failFilterIndex:-1,_directives:{select:[],drop:[],over:[]}}),this.filters.unshift({name:"queueLimit",fn:this._queueLimitFilter}),this.filters.unshift({name:"folder",fn:this._folderFilter})}return i(r,{addToQueue:{value:function(e,t,n){var r=this,i=this.isArrayLikeObject(e)?e:[e],o=this._getFilters(n),s=this.queue.length,a=[];u(i,function(e){var n=new v(e);if(r._isValidFile(n,o,t)){var i=new h(r,e,t);a.push(i),r.queue.push(i),r._onAfterAddingFile(i)}else{var s=o[r._failFilterIndex];r._onWhenAddingFileFailed(n,s,t)}}),this.queue.length!==s&&(this._onAfterAddingAll(a),this.progress=this._getTotalProgress()),this._render(),this.autoUpload&&this.uploadAll()}},removeFromQueue:{value:function(e){var t=this.getIndexOfItem(e),n=this.queue[t];n.isUploading&&n.cancel(),this.queue.splice(t,1),n._destroy(),this.progress=this._getTotalProgress()}},clearQueue:{value:function(){for(;this.queue.length;)this.queue[0].remove();this.progress=0}},uploadItem:{value:function(e){var t=this.getIndexOfItem(e),n=this.queue[t],r=this.isHTML5?"_xhrTransport":"_iframeTransport";n._prepareToUploading(),this.isUploading||(this.isUploading=!0,this[r](n))}},cancelItem:{value:function(e){var t=this.getIndexOfItem(e),n=this.queue[t],r=this.isHTML5?"_xhr":"_form";n&&n.isUploading&&n[r].abort()}},uploadAll:{value:function(){var e=this.getNotUploadedItems().filter(function(e){return!e.isUploading});e.length&&(u(e,function(e){return e._prepareToUploading()}),e[0].upload())}},cancelAll:{value:function(){var e=this.getNotUploadedItems();u(e,function(e){return e.cancel()})}},isFile:{value:function(e){return this.constructor.isFile(e)}},isFileLikeObject:{value:function(e){return this.constructor.isFileLikeObject(e)}},isArrayLikeObject:{value:function(e){return this.constructor.isArrayLikeObject(e)}},getIndexOfItem:{value:function(e){return c(e)?e:this.queue.indexOf(e)}},getNotUploadedItems:{value:function(){return this.queue.filter(function(e){return!e.isUploaded})}},getReadyItems:{value:function(){return this.queue.filter(function(e){return e.isReady&&!e.isUploading}).sort(function(e,t){return e.index-t.index})}},destroy:{value:function(){var e=this;u(this._directives,function(t){u(e._directives[t],function(e){e.destroy()})})}},onAfterAddingAll:{value:function(e){}},onAfterAddingFile:{value:function(e){}},onWhenAddingFileFailed:{value:function(e,t,n){}},onBeforeUploadItem:{value:function(e){}},onProgressItem:{value:function(e,t){}},onProgressAll:{value:function(e){}},onSuccessItem:{value:function(e,t,n,r){}},onErrorItem:{value:function(e,t,n,r){}},onCancelItem:{value:function(e,t,n,r){}},onCompleteItem:{value:function(e,t,n,r){}},onCompleteAll:{value:function(){}},_getTotalProgress:{value:function(e){if(this.removeAfterUpload)return e||0;var t=this.getNotUploadedItems().length,n=t?this.queue.length-t:this.queue.length,r=100/this.queue.length,i=(e||0)*r/100;return Math.round(n*r+i)}},_getFilters:{value:function(e){if(!e)return this.filters;if(p(e))return e;var t=e.match(/[^\s,]+/g);return this.filters.filter(function(e){return-1!==t.indexOf(e.name)})}},_render:{value:function(){t.$$phase||t.$apply()}},_folderFilter:{value:function(e){return!(!e.size&&!e.type)}},_queueLimitFilter:{value:function(){return this.queue.length<this.queueLimit}},_isValidFile:{value:function(e,t,n){var r=this;return this._failFilterIndex=-1,t.length?t.every(function(t){return r._failFilterIndex++,t.fn.call(r,e,n)}):!0}},_isSuccessCode:{value:function(e){return e>=200&&300>e||304===e}},_transformResponse:{value:function(e,t){var r=this._headersGetter(t);return u(n.defaults.transformResponse,function(t){e=t(e,r)}),e}},_parseHeaders:{value:function(e){var t,n,r,i={};return e?(u(e.split("\n"),function(e){r=e.indexOf(":"),t=e.slice(0,r).trim().toLowerCase(),n=e.slice(r+1).trim(),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}},_headersGetter:{value:function(e){return function(t){return t?e[t.toLowerCase()]||null:e}}},_xhrTransport:{value:function(e){var t=this,n=e._xhr=new XMLHttpRequest,r=new g;if(this._onBeforeUploadItem(e),u(e.formData,function(e){u(e,function(e,t){r.append(t,e)})}),"number"!=typeof e._file.size)throw new TypeError("The file specified is no longer valid");r.append(e.alias,e._file,e.file.name),n.upload.onprogress=function(n){var r=Math.round(n.lengthComputable?100*n.loaded/n.total:0);t._onProgressItem(e,r)},n.onload=function(){var r=t._parseHeaders(n.getAllResponseHeaders()),i=t._transformResponse(n.response,r),o=t._isSuccessCode(n.status)?"Success":"Error",s="_on"+o+"Item";t[s](e,i,n.status,r),t._onCompleteItem(e,i,n.status,r)},n.onerror=function(){var r=t._parseHeaders(n.getAllResponseHeaders()),i=t._transformResponse(n.response,r);t._onErrorItem(e,i,n.status,r),t._onCompleteItem(e,i,n.status,r)},n.onabort=function(){var r=t._parseHeaders(n.getAllResponseHeaders()),i=t._transformResponse(n.response,r);t._onCancelItem(e,i,n.status,r),t._onCompleteItem(e,i,n.status,r)},n.open(e.method,e.url,!0),n.withCredentials=e.withCredentials,u(e.headers,function(e,t){n.setRequestHeader(t,e)}),n.send(r),this._render()}},_iframeTransport:{value:function(e){var t=this,n=d('<form style="display: none;" />'),r=d('<iframe name="iframeTransport'+Date.now()+'">'),i=e._input;e._form&&e._form.replaceWith(i),e._form=n,this._onBeforeUploadItem(e),i.prop("name",e.alias),u(e.formData,function(e){u(e,function(e,t){var r=d('<input type="hidden" name="'+t+'" />');r.val(e),n.append(r)})}),n.prop({action:e.url,method:"POST",target:r.prop("name"),enctype:"multipart/form-data",encoding:"multipart/form-data"}),r.bind("load",function(){var n="",i=200;try{n=r[0].contentDocument.body.innerHTML}catch(o){i=500}var s={response:n,status:i,dummy:!0},a={},u=t._transformResponse(s.response,a);t._onSuccessItem(e,u,s.status,a),t._onCompleteItem(e,u,s.status,a)}),n.abort=function(){var o,s={status:0,dummy:!0},a={};r.unbind("load").prop("src","javascript:false;"),n.replaceWith(i),t._onCancelItem(e,o,s.status,a),t._onCompleteItem(e,o,s.status,a)},i.after(n),n.append(i).append(r),n[0].submit(),this._render()}},_onWhenAddingFileFailed:{value:function(e,t,n){this.onWhenAddingFileFailed(e,t,n)}},_onAfterAddingFile:{value:function(e){this.onAfterAddingFile(e)}},_onAfterAddingAll:{value:function(e){this.onAfterAddingAll(e)}},_onBeforeUploadItem:{value:function(e){e._onBeforeUpload(),this.onBeforeUploadItem(e)}},_onProgressItem:{value:function(e,t){var n=this._getTotalProgress(t);this.progress=n,e._onProgress(t),this.onProgressItem(e,t),this.onProgressAll(n),this._render()}},_onSuccessItem:{value:function(e,t,n,r){e._onSuccess(t,n,r),this.onSuccessItem(e,t,n,r)}},_onErrorItem:{value:function(e,t,n,r){e._onError(t,n,r),this.onErrorItem(e,t,n,r)}},_onCancelItem:{value:function(e,t,n,r){e._onCancel(t,n,r),this.onCancelItem(e,t,n,r)}},_onCompleteItem:{value:function(e,t,n,r){e._onComplete(t,n,r),this.onCompleteItem(e,t,n,r);var i=this.getReadyItems()[0];return this.isUploading=!1,f(i)?void i.upload():(this.onCompleteAll(),this.progress=this._getTotalProgress(),void this._render())}}},{isFile:{value:function(e){return m&&e instanceof m}},isFileLikeObject:{value:function(e){return e instanceof v}},isArrayLikeObject:{value:function(e){return l(e)&&"length"in e}},inherit:{value:function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.super_=t}}}),r}();return _.prototype.isHTML5=!(!m||!g),_.isHTML5=_.prototype.isHTML5,_},e.exports.$inject=["fileUploaderOptions","$rootScope","$http","$window","FileLikeObject","FileItem"]},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},i=function(){function e(e,t){for(var n in t){var r=t[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=(r(n(1)),angular.copy),a=angular.isElement,u=angular.isString;e.exports=function(){var e=function(){function e(t){o(this,e);var n=a(t),r=n?t.value:t,i=u(r)?"FakePath":"Object",s="_createFrom"+i;this[s](r)}return i(e,{_createFromFakePath:{value:function(e){this.lastModifiedDate=null,this.size=null,this.type="like/"+e.slice(e.lastIndexOf(".")+1).toLowerCase(),this.name=e.slice(e.lastIndexOf("/")+e.lastIndexOf("\\")+2)}},_createFromObject:{value:function(e){this.lastModifiedDate=s(e.lastModifiedDate),this.size=e.size,this.type=e.type,this.name=e.name}}}),e}();return e},e.exports.$inject=[]},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},i=function(){function e(e,t){for(var n in t){var r=t[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=(r(n(1)),angular.copy),a=angular.extend,u=angular.element,l=angular.isElement;e.exports=function(e,t){var n=function(){function n(e,r,i){o(this,n);var c=l(r),f=c?u(r):null,p=c?null:r;a(this,{url:e.url,alias:e.alias,headers:s(e.headers),formData:s(e.formData),removeAfterUpload:e.removeAfterUpload,withCredentials:e.withCredentials,method:e.method},i,{uploader:e,file:new t(r),isReady:!1,isUploading:!1,isUploaded:!1,isSuccess:!1,isCancel:!1,isError:!1,progress:0,index:null,_file:p,_input:f}),f&&this._replaceNode(f)}return i(n,{upload:{value:function(){try{this.uploader.uploadItem(this)}catch(e){this.uploader._onCompleteItem(this,"",0,[]),this.uploader._onErrorItem(this,"",0,[])}}},cancel:{value:function(){this.uploader.cancelItem(this)}},remove:{value:function(){this.uploader.removeFromQueue(this)}},onBeforeUpload:{value:function(){}},onProgress:{value:function(e){}},onSuccess:{value:function(e,t,n){}},onError:{value:function(e,t,n){}},onCancel:{value:function(e,t,n){}},onComplete:{value:function(e,t,n){}},_onBeforeUpload:{value:function(){this.isReady=!0,this.isUploading=!0,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!1,this.isError=!1,this.progress=0,this.onBeforeUpload()}},_onProgress:{value:function(e){this.progress=e,this.onProgress(e)}},_onSuccess:{value:function(e,t,n){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!0,this.isCancel=!1,this.isError=!1,this.progress=100,this.index=null,this.onSuccess(e,t,n)}},_onError:{value:function(e,t,n){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!1,this.isCancel=!1,this.isError=!0,this.progress=0,this.index=null,this.onError(e,t,n)}},_onCancel:{value:function(e,t,n){this.isReady=!1,this.isUploading=!1,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!0,this.isError=!1,this.progress=0,this.index=null,this.onCancel(e,t,n)}},_onComplete:{value:function(e,t,n){this.onComplete(e,t,n),this.removeAfterUpload&&this.remove()}},_destroy:{value:function(){this._input&&this._input.remove(),this._form&&this._form.remove(),delete this._form,delete this._input}},_prepareToUploading:{value:function(){this.index=this.index||++this.uploader._nextIndex,this.isReady=!0}},_replaceNode:{value:function(t){var n=e(t.clone())(t.scope());n.prop("value",null),t.css("display","none"),t.after(n)}}}),n}();return n},e.exports.$inject=["$compile","FileLikeObject"]},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},i=function(){function e(e,t){for(var n in t){var r=t[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=(r(n(1)),angular.extend);e.exports=function(){var e=function(){function e(t){o(this,e),s(this,t),this.uploader._directives[this.prop].push(this),this._saveLinks(),this.bind()}return i(e,{bind:{value:function(){for(var e in this.events){var t=this.events[e];this.element.bind(e,this[t])}}},unbind:{value:function(){for(var e in this.events)this.element.unbind(e,this.events[e])}},destroy:{value:function(){var e=this.uploader._directives[this.prop].indexOf(this);this.uploader._directives[this.prop].splice(e,1),this.unbind()}},_saveLinks:{value:function(){for(var e in this.events){var t=this.events[e];this[t]=this[t].bind(this)}}}}),e}();return e.prototype.events={},e},e.exports.$inject=[]},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},i=function(){function e(e,t){for(var n in t){var r=t[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function l(e,t,n){var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:l(i,t,n)}if("value"in r&&r.writable)return r.value;var o=r.get;return void 0===o?void 0:o.call(n)},s=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=(r(n(1)),angular.extend);e.exports=function(e){var t=function(e){function t(e){a(this,t);var n=u(e,{events:{$destroy:"destroy",change:"onChange"},prop:"select"});o(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,n),this.uploader.isHTML5||this.element.removeAttr("multiple"),this.element.prop("value",null)}return s(t,e),i(t,{getOptions:{value:function(){}},getFilters:{value:function(){}},isEmptyAfterSelection:{value:function(){return!!this.element.attr("multiple")}},onChange:{value:function(){var e=this.uploader.isHTML5?this.element[0].files:this.element[0],t=this.getOptions(),n=this.getFilters();this.uploader.isHTML5||this.destroy(),this.uploader.addToQueue(e,t,n),this.isEmptyAfterSelection()&&(this.element.prop("value",null),this.element.replaceWith(this.element=this.element.clone(!0)))}}}),t}(e);return t},e.exports.$inject=["FileDirective"]},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},i=function(){function e(e,t){for(var n in t){var r=t[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function c(e,t,n){var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:c(i,t,n)}if("value"in r&&r.writable)return r.value;var o=r.get;return void 0===o?void 0:o.call(n)},s=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=(r(n(1)),angular.extend),l=angular.forEach;e.exports=function(e){var t=function(e){function t(e){a(this,t);var n=u(e,{events:{$destroy:"destroy",drop:"onDrop",dragover:"onDragOver",dragleave:"onDragLeave"},prop:"drop"});o(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,n)}return s(t,e),i(t,{getOptions:{value:function(){}},getFilters:{value:function(){}},onDrop:{value:function(e){var t=this._getTransfer(e);if(t){var n=this.getOptions(),r=this.getFilters();this._preventAndStop(e),l(this.uploader._directives.over,this._removeOverClass,this),this.uploader.addToQueue(t.files,n,r)}}},onDragOver:{value:function(e){var t=this._getTransfer(e);this._haveFiles(t.types)&&(t.dropEffect="copy",this._preventAndStop(e),l(this.uploader._directives.over,this._addOverClass,this))}},onDragLeave:{value:function(e){e.currentTarget!==this.element[0]&&(this._preventAndStop(e),l(this.uploader._directives.over,this._removeOverClass,this))}},_getTransfer:{value:function(e){return e.dataTransfer?e.dataTransfer:e.originalEvent.dataTransfer}},_preventAndStop:{value:function(e){e.preventDefault(),e.stopPropagation()}},_haveFiles:{value:function(e){return e?e.indexOf?-1!==e.indexOf("Files"):e.contains?e.contains("Files"):!1:!1}},_addOverClass:{value:function(e){e.addOverClass()}},_removeOverClass:{value:function(e){e.removeOverClass()}}}),t}(e);return t},e.exports.$inject=["FileDirective"]},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e},i=function(){function e(e,t){for(var n in t){var r=t[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function l(e,t,n){var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:l(i,t,n)}if("value"in r&&r.writable)return r.value;var o=r.get;return void 0===o?void 0:o.call(n)},s=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=(r(n(1)),angular.extend);e.exports=function(e){var t=function(e){function t(e){a(this,t);var n=u(e,{events:{$destroy:"destroy"},prop:"over",overClass:"nv-file-over"});o(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,n)}return s(t,e),i(t,{addOverClass:{value:function(){this.element.addClass(this.getOverClass())}},removeOverClass:{value:function(){this.element.removeClass(this.getOverClass())}},getOverClass:{value:function(){return this.overClass}}}),t}(e);return t},e.exports.$inject=["FileDirective"]},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e};r(n(1));e.exports=function(e,t,n){return{link:function(r,i,o){var s=r.$eval(o.uploader);if(!(s instanceof t))throw new TypeError('"Uploader" must be an instance of FileUploader');var a=new n({uploader:s,element:i});a.getOptions=e(o.options).bind(a,r),a.getFilters=function(){return o.filters}}}},e.exports.$inject=["$parse","FileUploader","FileSelect"]},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e};r(n(1));e.exports=function(e,t,n){return{link:function(r,i,o){var s=r.$eval(o.uploader);if(!(s instanceof t))throw new TypeError('"Uploader" must be an instance of FileUploader');if(s.isHTML5){var a=new n({uploader:s,element:i});a.getOptions=e(o.options).bind(a,r),a.getFilters=function(){return o.filters}}}}},e.exports.$inject=["$parse","FileUploader","FileDrop"]},function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e["default"]:e};r(n(1));e.exports=function(e,t){return{link:function(n,r,i){var o=n.$eval(i.uploader);if(!(o instanceof e))throw new TypeError('"Uploader" must be an instance of FileUploader');var s=new t({uploader:o,element:r});s.getOverClass=function(){return i.overClass||s.overClass}}}},e.exports.$inject=["FileUploader","FileOver"]}])});
//# sourceMappingURL=angular-file-upload.min.js.map
angular.module("gettext",[]),angular.module("gettext").constant("gettext",function(a){return a}),angular.module("gettext").factory("gettextCatalog",["gettextPlurals","$http","$cacheFactory",function(a,b,c){var d,e=function(a){return d.debug&&d.currentLanguage!==d.baseLanguage?"[MISSING]: "+a:a};return d={debug:!1,strings:{},baseLanguage:"en",currentLanguage:"en",cache:c("strings"),setStrings:function(a,b){var c,d;this.strings[a]||(this.strings[a]={});for(c in b)d=b[c],this.strings[a][c]="string"==typeof d?[d]:d},getStringForm:function(a,b){var c=this.strings[this.currentLanguage]||{},d=c[a]||[];return d[b]},getString:function(a){return this.getStringForm(a,0)||e(a)},getPlural:function(b,c,d){var f=a(this.currentLanguage,b);return this.getStringForm(c,f)||e(1===b?c:d)},loadRemote:function(a){return b({method:"GET",url:a,cache:d.cache}).success(function(a){for(var b in a)d.setStrings(b,a[b])})}}}]),angular.module("gettext").directive("translate",["gettextCatalog","$interpolate","$parse","$compile",function(a,b,c,d){var e=function(){return String.prototype.trim?function(a){return"string"==typeof a?a.trim():a}:function(a){return"string"==typeof a?a.replace(/^\s*/,"").replace(/\s*$/,""):a}}();return{transclude:"element",priority:499,compile:function(f,g,h){return function(f,i){var j=function(a,b,c){if(!a)throw new Error("You should add a "+b+" attribute whenever you add a "+c+" attribute.")};if(j(!g.translatePlural||g.translateN,"translate-n","translate-plural"),j(!g.translateN||g.translatePlural,"translate-plural","translate-n"),g.ngIf)throw new Error("You should not combine translate with ng-if, this will lead to problems.");if(g.ngSwitchWhen)throw new Error("You should not combine translate with ng-switch-when, this will lead to problems.");var k=c(g.translateN),l=null;h(f,function(c){var h=e(c.html());return c.removeAttr("translate"),i.replaceWith(c),f.$watch(function(){var e,i=c.html();g.translatePlural?(f=l||(l=f.$new()),f.$count=k(f),e=a.getPlural(f.$count,h,g.translatePlural)):e=a.getString(h);var j=b(e)(f);return i!==j?(c.html(j),void 0!==g.translateCompile&&d(c.contents())(f),c):void 0})})}}}}]),angular.module("gettext").filter("translate",["gettextCatalog","$interpolate","$parse",function(a){return function(b){return a.getString(b)}}]),angular.module("gettext").factory("gettextPlurals",function(){return function(a,b){switch(a){case"ay":case"bo":case"cgg":case"dz":case"fa":case"id":case"ja":case"jbo":case"ka":case"kk":case"km":case"ko":case"ky":case"lo":case"ms":case"my":case"sah":case"su":case"th":case"tt":case"ug":case"vi":case"wo":case"zh":return 0;case"is":return b%10!=1||b%100==11?1:0;case"jv":return 0!=b?1:0;case"mk":return 1==b||b%10==1?0:1;case"ach":case"ak":case"am":case"arn":case"br":case"fil":case"fr":case"gun":case"ln":case"mfe":case"mg":case"mi":case"oc":case"pt_BR":case"tg":case"ti":case"tr":case"uz":case"wa":case"zh":return b>1?1:0;case"lv":return b%10==1&&b%100!=11?0:0!=b?1:2;case"lt":return b%10==1&&b%100!=11?0:b%10>=2&&(10>b%100||b%100>=20)?1:2;case"be":case"bs":case"hr":case"ru":case"sr":case"uk":return b%10==1&&b%100!=11?0:b%10>=2&&4>=b%10&&(10>b%100||b%100>=20)?1:2;case"mnk":return 0==b?0:1==b?1:2;case"ro":return 1==b?0:0==b||b%100>0&&20>b%100?1:2;case"pl":return 1==b?0:b%10>=2&&4>=b%10&&(10>b%100||b%100>=20)?1:2;case"cs":case"sk":return 1==b?0:b>=2&&4>=b?1:2;case"sl":return b%100==1?1:b%100==2?2:b%100==3||b%100==4?3:0;case"mt":return 1==b?0:0==b||b%100>1&&11>b%100?1:b%100>10&&20>b%100?2:3;case"gd":return 1==b||11==b?0:2==b||12==b?1:b>2&&20>b?2:3;case"cy":return 1==b?0:2==b?1:8!=b&&11!=b?2:3;case"kw":return 1==b?0:2==b?1:3==b?2:3;case"ga":return 1==b?0:2==b?1:7>b?2:11>b?3:4;case"ar":return 0==b?0:1==b?1:2==b?2:b%100>=3&&10>=b%100?3:b%100>=11?4:5;default:return 1!=b?1:0}}});
angular.module("AngularJCrop", [])
.directive("cropped", function () {
    return {
        restrict: "A",
        replace: false,
        scope: {
            ngSrc: "@",
            selected: "&",
            loaded: "&",
            props: "="
        },
        link: function (scope, element, attr) {
            var props = {
                allowSelect: false,
                bgColor: "#FFFFFF",
                bgOpacity: 0.8,
                onChange: function (x) { scope.selected({ coords: x }); },
                onSelect: function (x) { scope.selected({ coords: x }); },
            };
            var jcropAPI = null;
            var clear = function () {
                if (jcropAPI == null) {
                    return;
                }
                jcropAPI.destroy();
                jcropAPI = null;
            };
            element.bind("load", function () {
                setTimeout(
                    function () {
                        angular.extend(props, scope.props);
                        $(element).Jcrop(props, function () { jcropAPI = this; });
                        scope.loaded();
                    }, 1000);
            });
            scope.$on("$destroy", clear);
        }
    };
});
/*
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,e,A){'use strict';function x(s,g,k){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,w){function y(){p&&(p.remove(),p=null);h&&(h.$destroy(),h=null);l&&(k.leave(l,function(){p=null}),p=l,l=null)}function v(){var b=s.current&&s.current.locals;if(e.isDefined(b&&b.$template)){var b=a.$new(),d=s.current;l=w(b,function(d){k.enter(d,null,l||c,function(){!e.isDefined(t)||t&&!a.$eval(t)||g()});y()});h=d.scope=b;h.$emit("$viewContentLoaded");h.$eval(u)}else y()}
var h,l,p,t=b.autoscroll,u=b.onload||"";a.$on("$routeChangeSuccess",v);v()}}}function z(e,g,k){return{restrict:"ECA",priority:-400,link:function(a,c){var b=k.current,f=b.locals;c.html(f.$template);var w=e(c.contents());b.controller&&(f.$scope=a,f=g(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));w(a)}}}n=e.module("ngRoute",["ng"]).provider("$route",function(){function s(a,c){return e.extend(new (e.extend(function(){},
{prototype:a})),c)}function g(a,e){var b=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},k=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,b,c){a="?"===c?c:null;c="*"===c?c:null;k.push({name:b,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",b?"i":"");return f}var k={};this.when=function(a,c){k[a]=e.extend({reloadOnSearch:!0},c,a&&g(a,c));if(a){var b=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";k[b]=e.extend({redirectTo:a},g(b,c))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,c,b,f,g,n,v,h){function l(){var d=p(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!u)m.params=d.params,e.copy(m.params,b),a.$broadcast("$routeUpdate",m);else if(d||m)u=!1,a.$broadcast("$routeChangeStart",
d,m),(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?c.path(t(d.redirectTo,d.params)).search(d.params).replace():c.url(d.redirectTo(d.pathParams,c.path(),c.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),c,b;e.forEach(a,function(d,c){a[c]=e.isString(d)?g.get(d):g.invoke(d)});e.isDefined(c=d.template)?e.isFunction(c)&&(c=c(d.params)):e.isDefined(b=d.templateUrl)&&(e.isFunction(b)&&(b=b(d.params)),b=h.getTrustedResourceUrl(b),e.isDefined(b)&&(d.loadedTemplateUrl=
b,c=n.get(b,{cache:v}).then(function(a){return a.data})));e.isDefined(c)&&(a.$template=c);return f.all(a)}}).then(function(c){d==r.current&&(d&&(d.locals=c,e.copy(d.params,b)),a.$broadcast("$routeChangeSuccess",d,m))},function(c){d==r.current&&a.$broadcast("$routeChangeError",d,m,c)})}function p(){var a,b;e.forEach(k,function(f,k){var q;if(q=!b){var g=c.path();q=f.keys;var l={};if(f.regexp)if(g=f.regexp.exec(g)){for(var h=1,p=g.length;h<p;++h){var n=q[h-1],r="string"==typeof g[h]?decodeURIComponent(g[h]):
g[h];n&&r&&(l[n.name]=r)}q=l}else q=null;else q=null;q=a=q}q&&(b=s(f,{params:e.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||k[null]&&s(k[null],{params:{},pathParams:{}})}function t(a,c){var b=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)b.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];b.push(c[f]);b.push(e[2]||"");delete c[f]}});return b.join("")}var u=!1,r={routes:k,reload:function(){u=!0;a.$evalAsync(l)}};a.$on("$locationChangeSuccess",l);return r}]});n.provider("$routeParams",
function(){this.$get=function(){return{}}});n.directive("ngView",x);n.directive("ngView",z);x.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
/*
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,h,q){'use strict';function E(a){var e=[];s(e,h.noop).chars(a);return e.join("")}function k(a){var e={};a=a.split(",");var d;for(d=0;d<a.length;d++)e[a[d]]=!0;return e}function F(a,e){function d(a,b,d,g){b=h.lowercase(b);if(t[b])for(;f.last()&&u[f.last()];)c("",f.last());v[b]&&f.last()==b&&c("",b);(g=w[b]||!!g)||f.push(b);var l={};d.replace(G,function(a,b,e,c,d){l[b]=r(e||c||d||"")});e.start&&e.start(b,l,g)}function c(a,b){var c=0,d;if(b=h.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(d=f.length-1;d>=c;d--)e.end&&e.end(f[d]);f.length=c}}var b,g,f=[],l=a;for(f.last=function(){return f[f.length-1]};a;){g=!0;if(f.last()&&x[f.last()])a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(b,a){a=a.replace(H,"$1").replace(I,"$1");e.chars&&e.chars(r(a));return""}),c("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(e.comment&&e.comment(a.substring(4,b)),a=a.substring(b+3),g=!1);else if(y.test(a)){if(b=a.match(y))a=
a.replace(b[0],""),g=!1}else if(J.test(a)){if(b=a.match(z))a=a.substring(b[0].length),b[0].replace(z,c),g=!1}else K.test(a)&&(b=a.match(A))&&(a=a.substring(b[0].length),b[0].replace(A,d),g=!1);g&&(b=a.indexOf("<"),g=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),e.chars&&e.chars(r(g)))}if(a==l)throw L("badparse",a);l=a}c()}function r(a){if(!a)return"";var e=M.exec(a);a=e[1];var d=e[3];if(e=e[2])n.innerHTML=e.replace(/</g,"&lt;"),e="textContent"in n?n.textContent:n.innerText;return a+e+d}function B(a){return a.replace(/&/g,
"&amp;").replace(N,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function s(a,e){var d=!1,c=h.bind(a,a.push);return{start:function(a,g,f){a=h.lowercase(a);!d&&x[a]&&(d=a);d||!0!==C[a]||(c("<"),c(a),h.forEach(g,function(d,f){var g=h.lowercase(f),k="img"===a&&"src"===g||"background"===g;!0!==O[g]||!0===D[g]&&!e(d,k)||(c(" "),c(f),c('="'),c(B(d)),c('"'))}),c(f?"/>":">"))},end:function(a){a=h.lowercase(a);d||!0!==C[a]||(c("</"),c(a),c(">"));a==d&&(d=!1)},chars:function(a){d||
c(B(a))}}}var L=h.$$minErr("$sanitize"),A=/^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,z=/^<\s*\/\s*([\w:-]+)[^>]*>/,G=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,K=/^</,J=/^<\s*\//,H=/\x3c!--(.*?)--\x3e/g,y=/<!DOCTYPE([^>]*?)>/i,I=/<!\[CDATA\[(.*?)]]\x3e/g,N=/([^\#-~| |!])/g,w=k("area,br,col,hr,img,wbr");p=k("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");q=k("rp,rt");var v=h.extend({},q,p),t=h.extend({},p,k("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
u=h.extend({},q,k("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),x=k("script,style"),C=h.extend({},w,t,u,v),D=k("background,cite,href,longdesc,src,usemap"),O=h.extend({},D,k("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),
n=document.createElement("pre"),M=/^(\s*)([\s\S]*?)(\s*)$/;h.module("ngSanitize",[]).provider("$sanitize",function(){this.$get=["$$sanitizeUri",function(a){return function(e){var d=[];F(e,s(d,function(c,b){return!/^unsafe/.test(a(c,b))}));return d.join("")}}]});h.module("ngSanitize").filter("linky",["$sanitize",function(a){var e=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,d=/^mailto:/;return function(c,b){function g(a){a&&m.push(E(a))}function f(a,c){m.push("<a ");h.isDefined(b)&&
(m.push('target="'),m.push(b),m.push('" '));m.push('href="');m.push(a);m.push('">');g(c);m.push("</a>")}if(!c)return c;for(var l,k=c,m=[],n,p;l=k.match(e);)n=l[0],l[2]==l[3]&&(n="mailto:"+n),p=l.index,g(k.substr(0,p)),f(n,l[0].replace(d,"")),k=k.substring(p+l[0].length);g(k);return a(m.join(""))}}])})(window,window.angular);

var duScrollDefaultEasing=function(e){"use strict";return.5>e?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2};angular.module("duScroll",["duScroll.scrollspy","duScroll.smoothScroll","duScroll.scrollContainer","duScroll.spyContext","duScroll.scrollHelpers"]).value("duScrollDuration",350).value("duScrollSpyWait",100).value("duScrollGreedy",!1).value("duScrollOffset",0).value("duScrollEasing",duScrollDefaultEasing).value("duScrollCancelOnEvents","scroll mousedown mousewheel touchmove keydown").value("duScrollBottomSpy",!1),angular.module("duScroll.scrollHelpers",["duScroll.requestAnimation"]).run(["$window","$q","cancelAnimation","requestAnimation","duScrollEasing","duScrollDuration","duScrollOffset","duScrollCancelOnEvents",function(e,t,n,r,o,l,u,i){"use strict";var c={},a=function(e){return"undefined"!=typeof HTMLDocument&&e instanceof HTMLDocument||e.nodeType&&e.nodeType===e.DOCUMENT_NODE},s=function(e){return"undefined"!=typeof HTMLElement&&e instanceof HTMLElement||e.nodeType&&e.nodeType===e.ELEMENT_NODE},d=function(e){return s(e)||a(e)?e:e[0]};c.duScrollTo=function(t,n,r,o){var l;if(angular.isElement(t)?l=this.duScrollToElement:angular.isDefined(r)&&(l=this.duScrollToAnimated),l)return l.apply(this,arguments);var u=d(this);return a(u)?e.scrollTo(t,n):(u.scrollLeft=t,void(u.scrollTop=n))};var f,p;c.duScrollToAnimated=function(e,l,u,c){u&&!c&&(c=o);var a=this.duScrollLeft(),s=this.duScrollTop(),d=Math.round(e-a),m=Math.round(l-s),S=null,g=0,h=this,v=function(e){(!e||g&&e.which>0)&&(i&&h.unbind(i,v),n(f),p.reject(),f=null)};if(f&&v(),p=t.defer(),0===u||!d&&!m)return 0===u&&h.duScrollTo(e,l),p.resolve(),p.promise;var y=function(e){null===S&&(S=e),g=e-S;var t=g>=u?1:c(g/u);h.scrollTo(a+Math.ceil(d*t),s+Math.ceil(m*t)),1>t?f=r(y):(i&&h.unbind(i,v),f=null,p.resolve())};return h.duScrollTo(a,s),i&&h.bind(i,v),f=r(y),p.promise},c.duScrollToElement=function(e,t,n,r){var o=d(this);(!angular.isNumber(t)||isNaN(t))&&(t=u);var l=this.duScrollTop()+d(e).getBoundingClientRect().top-t;return s(o)&&(l-=o.getBoundingClientRect().top),this.duScrollTo(0,l,n,r)},c.duScrollLeft=function(t,n,r){if(angular.isNumber(t))return this.duScrollTo(t,this.duScrollTop(),n,r);var o=d(this);return a(o)?e.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft:o.scrollLeft},c.duScrollTop=function(t,n,r){if(angular.isNumber(t))return this.duScrollTo(this.duScrollLeft(),t,n,r);var o=d(this);return a(o)?e.scrollY||document.documentElement.scrollTop||document.body.scrollTop:o.scrollTop},c.duScrollToElementAnimated=function(e,t,n,r){return this.duScrollToElement(e,t,n||l,r)},c.duScrollTopAnimated=function(e,t,n){return this.duScrollTop(e,t||l,n)},c.duScrollLeftAnimated=function(e,t,n){return this.duScrollLeft(e,t||l,n)},angular.forEach(c,function(e,t){angular.element.prototype[t]=e;var n=t.replace(/^duScroll/,"scroll");angular.isUndefined(angular.element.prototype[n])&&(angular.element.prototype[n]=e)})}]),angular.module("duScroll.polyfill",[]).factory("polyfill",["$window",function(e){"use strict";var t=["webkit","moz","o","ms"];return function(n,r){if(e[n])return e[n];for(var o,l=n.substr(0,1).toUpperCase()+n.substr(1),u=0;u<t.length;u++)if(o=t[u]+l,e[o])return e[o];return r}}]),angular.module("duScroll.requestAnimation",["duScroll.polyfill"]).factory("requestAnimation",["polyfill","$timeout",function(e,t){"use strict";var n=0,r=function(e,r){var o=(new Date).getTime(),l=Math.max(0,16-(o-n)),u=t(function(){e(o+l)},l);return n=o+l,u};return e("requestAnimationFrame",r)}]).factory("cancelAnimation",["polyfill","$timeout",function(e,t){"use strict";var n=function(e){t.cancel(e)};return e("cancelAnimationFrame",n)}]),angular.module("duScroll.spyAPI",["duScroll.scrollContainerAPI"]).factory("spyAPI",["$rootScope","$timeout","$window","$document","scrollContainerAPI","duScrollGreedy","duScrollSpyWait","duScrollBottomSpy",function(e,t,n,r,o,l,u,i){"use strict";var c=function(o){var c=!1,a=!1,s=function(){a=!1;var t,u=o.container,c=u[0],s=0;"undefined"!=typeof HTMLElement&&c instanceof HTMLElement||c.nodeType&&c.nodeType===c.ELEMENT_NODE?(s=c.getBoundingClientRect().top,t=Math.round(c.scrollTop+c.clientHeight)>=c.scrollHeight):t=Math.round(n.pageYOffset+n.innerHeight)>=r[0].body.scrollHeight;var d,f,p,m,S,g,h=i&&t?"bottom":"top";for(m=o.spies,f=o.currentlyActive,p=void 0,d=0;d<m.length;d++)S=m[d],g=S.getTargetPosition(),g&&(i&&t||g.top+S.offset-s<20&&(l||-1*g.top+s)<g.height)&&(!p||p[h]<g[h])&&(p={spy:S},p[h]=g[h]);p&&(p=p.spy),f===p||l&&!p||(f&&(f.$element.removeClass("active"),e.$broadcast("duScrollspy:becameInactive",f.$element)),p&&(p.$element.addClass("active"),e.$broadcast("duScrollspy:becameActive",p.$element)),o.currentlyActive=p)};return u?function(){c?a=!0:(s(),c=t(function(){c=!1,a&&s()},u,!1))}:s},a={},s=function(e){var t=e.$id,n={spies:[]};return n.handler=c(n),a[t]=n,e.$on("$destroy",function(){d(e)}),t},d=function(e){var t=e.$id,n=a[t],r=n.container;r&&r.off("scroll",n.handler),delete a[t]},f=s(e),p=function(e){return a[e.$id]?a[e.$id]:e.$parent?p(e.$parent):a[f]},m=function(e){var t,n,r=e.$scope;if(r)return p(r);for(n in a)if(t=a[n],-1!==t.spies.indexOf(e))return t},S=function(e){for(;e.parentNode;)if(e=e.parentNode,e===document)return!0;return!1},g=function(e){var t=m(e);t&&(t.spies.push(e),t.container&&S(t.container)||(t.container&&t.container.off("scroll",t.handler),t.container=o.getContainer(e.$scope),t.container.on("scroll",t.handler).triggerHandler("scroll")))},h=function(e){var t=m(e);e===t.currentlyActive&&(t.currentlyActive=null);var n=t.spies.indexOf(e);-1!==n&&t.spies.splice(n,1),e.$element=null};return{addSpy:g,removeSpy:h,createContext:s,destroyContext:d,getContextForScope:p}}]),angular.module("duScroll.scrollContainerAPI",[]).factory("scrollContainerAPI",["$document",function(e){"use strict";var t={},n=function(e,n){var r=e.$id;return t[r]=n,r},r=function(e){return t[e.$id]?e.$id:e.$parent?r(e.$parent):void 0},o=function(n){var o=r(n);return o?t[o]:e},l=function(e){var n=r(e);n&&delete t[n]};return{getContainerId:r,getContainer:o,setContainer:n,removeContainer:l}}]),angular.module("duScroll.smoothScroll",["duScroll.scrollHelpers","duScroll.scrollContainerAPI"]).directive("duSmoothScroll",["duScrollDuration","duScrollOffset","scrollContainerAPI",function(e,t,n){"use strict";return{link:function(r,o,l){o.on("click",function(o){if(l.href&&-1!==l.href.indexOf("#")||""!==l.duSmoothScroll){var u=l.href?l.href.replace(/.*(?=#[^\s]+$)/,"").substring(1):l.duSmoothScroll,i=document.getElementById(u)||document.getElementsByName(u)[0];if(i&&i.getBoundingClientRect){o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault();var c=l.offset?parseInt(l.offset,10):t,a=l.duration?parseInt(l.duration,10):e,s=n.getContainer(r);s.duScrollToElement(angular.element(i),isNaN(c)?0:c,isNaN(a)?0:a)}}})}}}]),angular.module("duScroll.spyContext",["duScroll.spyAPI"]).directive("duSpyContext",["spyAPI",function(e){"use strict";return{restrict:"A",scope:!0,compile:function(t,n,r){return{pre:function(t,n,r,o){e.createContext(t)}}}}}]),angular.module("duScroll.scrollContainer",["duScroll.scrollContainerAPI"]).directive("duScrollContainer",["scrollContainerAPI",function(e){"use strict";return{restrict:"A",scope:!0,compile:function(t,n,r){return{pre:function(t,n,r,o){r.$observe("duScrollContainer",function(r){angular.isString(r)&&(r=document.getElementById(r)),r=angular.isElement(r)?angular.element(r):n,e.setContainer(t,r),t.$on("$destroy",function(){e.removeContainer(t)})})}}}}}]),angular.module("duScroll.scrollspy",["duScroll.spyAPI"]).directive("duScrollspy",["spyAPI","duScrollOffset","$timeout","$rootScope",function(e,t,n,r){"use strict";var o=function(e,t,n,r){angular.isElement(e)?this.target=e:angular.isString(e)&&(this.targetId=e),this.$scope=t,this.$element=n,this.offset=r};return o.prototype.getTargetElement=function(){return!this.target&&this.targetId&&(this.target=document.getElementById(this.targetId)||document.getElementsByName(this.targetId)[0]),this.target},o.prototype.getTargetPosition=function(){var e=this.getTargetElement();return e?e.getBoundingClientRect():void 0},o.prototype.flushTargetCache=function(){this.targetId&&(this.target=void 0)},{link:function(l,u,i){var c,a=i.ngHref||i.href;a&&-1!==a.indexOf("#")?c=a.replace(/.*(?=#[^\s]+$)/,"").substring(1):i.duScrollspy?c=i.duScrollspy:i.duSmoothScroll&&(c=i.duSmoothScroll),c&&n(function(){var n=new o(c,l,u,-(i.offset?parseInt(i.offset,10):t));e.addSpy(n),l.$on("$locationChangeSuccess",n.flushTargetCache.bind(n));var a=r.$on("$stateChangeSuccess",n.flushTargetCache.bind(n));l.$on("$destroy",function(){e.removeSpy(n),a()})},0,!1)}}}]);
//# sourceMappingURL=angular-scroll.min.js.map
/*!
 * angular-spectrum-colorpicker v1.0.13
 * https://github.com/Jimdo/angular-spectrum-colorpicker
 *
 * Angular directive for a colorpicker, that bases on http://bgrins.github.io/spectrum/
 * Idea from http://jsfiddle.net/g/LAJCa/
 *
 * Copyright 2014, Jimdo
 * Released under the MIT license
 */
(function(angular) {
  'use strict';

  // src/js/spectrumColorpicker.module.js
  var angularSpectrumColorpicker = angular.module('angularSpectrumColorpicker', []);

  // src/js/spectrumColorpicker.directive.js
  angularSpectrumColorpicker.directive('spectrumColorpicker', function() {
    return {
      restrict: 'E',
      require: 'ngModel',
      scope: false,
      replace: true,
      template: '<span><input class="input-small" /></span>',
      link: function($scope, $element, attrs, $ngModel) {
  
        var $input = $element.find('input');
        var fallbackValue = $scope.$eval(attrs.fallbackValue);
  
        function setViewValue(color) {
          var value = fallbackValue;
  
          if (color) {
            value = color.toString();
          } else if (angular.isUndefined(fallbackValue)) {
            value = color;
          }
  
          $ngModel.$setViewValue(value);
        }
  
        var onChange = function(color) {
          $scope.$apply(function() {
            setViewValue(color);
          });
        };
        var onToggle = function() {
          $input.spectrum('toggle');
          return false;
        };
        var options = angular.extend({
          color: $ngModel.$viewValue,
          change: onChange,
          move: onChange,
          hide: onChange
        }, $scope.$eval(attrs.options));
  
  
        if(attrs.triggerId) {
          angular.element(document.body).on('click', '#' + attrs.triggerId, onToggle);
        }
  
  
        $ngModel.$render = function() {
          $input.spectrum('set', $ngModel.$viewValue || '');
        };
  
        if (options.color) {
          $input.spectrum('set', options.color || '');
          setViewValue(options.color);
        }
  
        $input.spectrum(options);
  
        $scope.$on('$destroy', function() {
          $input.spectrum('destroy');
        });
      }
    };
  });
})(angular);

angular.module("ui.spinner", [])
  .directive("uiSpinner", [function () {
      return {
          restrict: "A",
          scope: {
              stateFlag: "=",
              stateValue: "=",
              onUpdate: "&",
			  spinTitle: "@"
          },
          link: function (scope, elm, attrs) {
              var UnwatchStateValue = null;
              var UnwatchStateFlag = null;
              var IsValueOk = function (value) {
                  return (value != undefined && value != null && String(value) != "" && !isNaN(value) && parseInt(value) >= parseInt(attrs.min) && parseInt(value) <= parseInt(attrs.max));
              };
              var OnStateValueChange = function (newValue) {
                  $(elm).spinner("value", newValue);
              };
              var OnStateFlagChange = function (newValue) {
                  $(elm).spinner(newValue ? "disable" : "enable");
              };
              var OnSpinnerCreated = function () {
                  if (IsValueOk(scope.stateValue)) {
                      OnStateValueChange(scope.stateValue);
                  }
                  if (angular.isDefined(scope.stateFlag)) {
                      OnStateFlagChange(scope.stateFlag);
                  }
                  UnwatchStateValue = scope.$watch("stateValue", OnStateValueChange);
                  UnwatchStateFlag = scope.$watch("stateFlag", OnStateFlagChange);
                  elm.bind("propertychange keyup input paste", function () {
                      OnChange(elm.val());
                  });
                  if (!scope.spinTitle) {
                  	return;
                  }
                  setTimeout(function () {
						$(".ui-spinner").attr("title", scope.spinTitle);
						$(".ui-spinner").addClass("mouse-seta");
						$(".ui-spinner").tipsy({ gravity: "n" });
                  }, 100);
              };
              var OnChange = function (value) {
                  if (!IsValueOk(value)) return;
                  scope.stateValue = parseInt(value);
                  if (angular.isDefined(scope.onUpdate)) {
                      scope.onUpdate(parseInt(value));
                  }
                  if (!scope.$root.$$phase) {
                      scope.$apply();
                  }
              };
              setTimeout(function () {
                  var options = {
                      max: attrs.max,
                      min: attrs.min,
                      create: OnSpinnerCreated,
                      spin: function (event, ui) {
                          OnChange(ui.value);
                      }
                  };
                  $(elm).spinner(options);
              });
              scope.$on("$destroy", function () {
                  $(elm).spinner("destroy");
                  $(elm).unbind();
                  UnwatchStateFlag();
                  UnwatchStateValue();
              });
          }
      };
  }]);
angular.module("ui.tinymce", [])
  .directive("uiTinymce", function () {
      var generatedIds = 0;
      return {
          priority: 10,
          require: "ngModel",
          link: function (scope, elm, attrs, ngModel) {
              var tinyInstance;
              var updateView = function () {
                    ngModel.$setViewValue(elm.html());
                    if (!scope.$root.$$phase) {
                        scope.$apply();
                    }
                    if (scope.OnTextChange) {
                        scope.OnTextChange(ngModel.$viewValue);
                    }
                };
              if (!attrs.id) {
                  attrs.$set("id", "uiTinymce" + generatedIds++);
              }
              var options = {
                  setup: function (ed) {
                      var args;
                      ed.on("init", function (args) {
                          ngModel.$render();
                          ngModel.$setPristine();
                      });
                      ed.on("ExecCommand", function (e) {
                          ed.save();
                          updateView();
                      });
                      ed.on("Change", function (e) {
                          ed.save();
                          updateView();
                      });
                      ed.on("KeyUp", function (e) {
                          ed.save();
                          updateView();
                      });
                      ed.on("SetContent", function (e) {
                          if (!e.initial && ngModel.$viewValue !== e.content) {
                              ed.save();
                              updateView();
                          }
                      });
                      ed.on("blur", function (e) {
                          elm.blur();
                      });
                      ed.on("ObjectResized", function (e) {
                          ed.save();
                          updateView();
                      });
                  },
                  mode: "exact",
                  elements: attrs.id
              };
              angular.extend(options, scope.$eval(attrs.config));
              setTimeout(function () {
                  tinymce.init(options);
              });
              ngModel.$render = function () {
                  if (!tinyInstance) {
                      tinyInstance = tinymce.get(attrs.id);
                  }
                  if (tinyInstance) {
                      tinyInstance.setContent(ngModel.$viewValue || "");
                  }
              };
              scope.$on("$destroy", function () {
                  if (!tinyInstance) { tinyInstance = tinymce.get(attrs.id); }
                  if (tinyInstance) {
                      tinyInstance.remove();
                      tinyInstance = null;
                  }
              });
          }
      };
  });
/**
 * angular-ui-utils - Swiss-Army-Knife of AngularJS tools (with no external dependencies!)
 * @version v0.1.1 - 2014-02-05
 * @link http://angular-ui.github.com
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"use strict";angular.module("ui.alias",[]).config(["$compileProvider","uiAliasConfig",function(a,b){b=b||{},angular.forEach(b,function(b,c){angular.isString(b)&&(b={replace:!0,template:b}),a.directive(c,function(){return b})})}]),angular.module("ui.event",[]).directive("uiEvent",["$parse",function(a){return function(b,c,d){var e=b.$eval(d.uiEvent);angular.forEach(e,function(d,e){var f=a(d);c.bind(e,function(a){var c=Array.prototype.slice.call(arguments);c=c.splice(1),f(b,{$event:a,$params:c}),b.$$phase||b.$apply()})})}}]),angular.module("ui.format",[]).filter("format",function(){return function(a,b){var c=a;if(angular.isString(c)&&void 0!==b)if(angular.isArray(b)||angular.isObject(b)||(b=[b]),angular.isArray(b)){var d=b.length,e=function(a,c){return c=parseInt(c,10),c>=0&&d>c?b[c]:a};c=c.replace(/\$([0-9]+)/g,e)}else angular.forEach(b,function(a,b){c=c.split(":"+b).join(a)});return c}}),angular.module("ui.highlight",[]).filter("highlight",function(){return function(a,b,c){return b||angular.isNumber(b)?(a=a.toString(),b=b.toString(),c?a.split(b).join('<span class="ui-match">'+b+"</span>"):a.replace(new RegExp(b,"gi"),'<span class="ui-match">$&</span>')):a}}),angular.module("ui.include",[]).directive("uiInclude",["$http","$templateCache","$anchorScroll","$compile",function(a,b,c,d){return{restrict:"ECA",terminal:!0,compile:function(e,f){var g=f.uiInclude||f.src,h=f.fragment||"",i=f.onload||"",j=f.autoscroll;return function(e,f){function k(){var k=++m,o=e.$eval(g),p=e.$eval(h);o?a.get(o,{cache:b}).success(function(a){if(k===m){l&&l.$destroy(),l=e.$new();var b;b=p?angular.element("<div/>").html(a).find(p):angular.element("<div/>").html(a).contents(),f.html(b),d(b)(l),!angular.isDefined(j)||j&&!e.$eval(j)||c(),l.$emit("$includeContentLoaded"),e.$eval(i)}}).error(function(){k===m&&n()}):n()}var l,m=0,n=function(){l&&(l.$destroy(),l=null),f.html("")};e.$watch(h,k),e.$watch(g,k)}}}}]),angular.module("ui.indeterminate",[]).directive("uiIndeterminate",[function(){return{compile:function(a,b){return b.type&&"checkbox"===b.type.toLowerCase()?function(a,b,c){a.$watch(c.uiIndeterminate,function(a){b[0].indeterminate=!!a})}:angular.noop}}}]),angular.module("ui.inflector",[]).filter("inflector",function(){function a(a){return a.replace(/^([a-z])|\s+([a-z])/g,function(a){return a.toUpperCase()})}function b(a,b){return a.replace(/[A-Z]/g,function(a){return b+a})}var c={humanize:function(c){return a(b(c," ").split("_").join(" "))},underscore:function(a){return a.substr(0,1).toLowerCase()+b(a.substr(1),"_").toLowerCase().split(" ").join("_")},variable:function(b){return b=b.substr(0,1).toLowerCase()+a(b.split("_").join(" ")).substr(1).split(" ").join("")}};return function(a,b){return b!==!1&&angular.isString(a)?(b=b||"humanize",c[b](a)):a}}),angular.module("ui.jq",[]).value("uiJqConfig",{}).directive("uiJq",["uiJqConfig","$timeout",function(a,b){return{restrict:"A",compile:function(c,d){if(!angular.isFunction(c[d.uiJq]))throw new Error('ui-jq: The "'+d.uiJq+'" function does not exist');var e=a&&a[d.uiJq];return function(a,c,d){function f(){b(function(){c[d.uiJq].apply(c,g)},0,!1)}var g=[];d.uiOptions?(g=a.$eval("["+d.uiOptions+"]"),angular.isObject(e)&&angular.isObject(g[0])&&(g[0]=angular.extend({},e,g[0]))):e&&(g=[e]),d.ngModel&&c.is("select,input,textarea")&&c.bind("change",function(){c.trigger("input")}),d.uiRefresh&&a.$watch(d.uiRefresh,function(){f()}),f()}}}}]),angular.module("ui.keypress",[]).factory("keypressHelper",["$parse",function(a){var b={8:"backspace",9:"tab",13:"enter",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"delete"},c=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};return function(d,e,f,g){var h,i=[];h=e.$eval(g["ui"+c(d)]),angular.forEach(h,function(b,c){var d,e;e=a(b),angular.forEach(c.split(" "),function(a){d={expression:e,keys:{}},angular.forEach(a.split("-"),function(a){d.keys[a]=!0}),i.push(d)})}),f.bind(d,function(a){var c=!(!a.metaKey||a.ctrlKey),f=!!a.altKey,g=!!a.ctrlKey,h=!!a.shiftKey,j=a.keyCode;"keypress"===d&&!h&&j>=97&&122>=j&&(j-=32),angular.forEach(i,function(d){var i=d.keys[b[j]]||d.keys[j.toString()],k=!!d.keys.meta,l=!!d.keys.alt,m=!!d.keys.ctrl,n=!!d.keys.shift;i&&k===c&&l===f&&m===g&&n===h&&e.$apply(function(){d.expression(e,{$event:a})})})})}}]),angular.module("ui.keypress").directive("uiKeydown",["keypressHelper",function(a){return{link:function(b,c,d){a("keydown",b,c,d)}}}]),angular.module("ui.keypress").directive("uiKeypress",["keypressHelper",function(a){return{link:function(b,c,d){a("keypress",b,c,d)}}}]),angular.module("ui.keypress").directive("uiKeyup",["keypressHelper",function(a){return{link:function(b,c,d){a("keyup",b,c,d)}}}]),angular.module("ui.mask",[]).value("uiMaskConfig",{maskDefinitions:{9:/\d/,A:/[a-zA-Z]/,"*":/[a-zA-Z0-9]/}}).directive("uiMask",["uiMaskConfig",function(a){return{priority:100,require:"ngModel",restrict:"A",compile:function(){var b=a;return function(a,c,d,e){function f(a){return angular.isDefined(a)?(s(a),N?(k(),l(),!0):j()):j()}function g(a){angular.isDefined(a)&&(D=a,N&&w())}function h(a){return N?(G=o(a||""),I=n(G),e.$setValidity("mask",I),I&&G.length?p(G):void 0):a}function i(a){return N?(G=o(a||""),I=n(G),e.$viewValue=G.length?p(G):"",e.$setValidity("mask",I),""===G&&void 0!==e.$error.required&&e.$setValidity("required",!1),I?G:void 0):a}function j(){return N=!1,m(),angular.isDefined(P)?c.attr("placeholder",P):c.removeAttr("placeholder"),angular.isDefined(Q)?c.attr("maxlength",Q):c.removeAttr("maxlength"),c.val(e.$modelValue),e.$viewValue=e.$modelValue,!1}function k(){G=K=o(e.$modelValue||""),H=J=p(G),I=n(G);var a=I&&G.length?H:"";d.maxlength&&c.attr("maxlength",2*B[B.length-1]),c.attr("placeholder",D),c.val(a),e.$viewValue=a}function l(){O||(c.bind("blur",t),c.bind("mousedown mouseup",u),c.bind("input keyup click focus",w),O=!0)}function m(){O&&(c.unbind("blur",t),c.unbind("mousedown",u),c.unbind("mouseup",u),c.unbind("input",w),c.unbind("keyup",w),c.unbind("click",w),c.unbind("focus",w),O=!1)}function n(a){return a.length?a.length>=F:!0}function o(a){var b="",c=C.slice();return a=a.toString(),angular.forEach(E,function(b){a=a.replace(b,"")}),angular.forEach(a.split(""),function(a){c.length&&c[0].test(a)&&(b+=a,c.shift())}),b}function p(a){var b="",c=B.slice();return angular.forEach(D.split(""),function(d,e){a.length&&e===c[0]?(b+=a.charAt(0)||"_",a=a.substr(1),c.shift()):b+=d}),b}function q(a){var b=d.placeholder;return"undefined"!=typeof b&&b[a]?b[a]:"_"}function r(){return D.replace(/[_]+/g,"_").replace(/([^_]+)([a-zA-Z0-9])([^_])/g,"$1$2_$3").split("_")}function s(a){var b=0;if(B=[],C=[],D="","string"==typeof a){F=0;var c=!1,d=a.split("");angular.forEach(d,function(a,d){R.maskDefinitions[a]?(B.push(b),D+=q(d),C.push(R.maskDefinitions[a]),b++,c||F++):"?"===a?c=!0:(D+=a,b++)})}B.push(B.slice().pop()+1),E=r(),N=B.length>1?!0:!1}function t(){L=0,M=0,I&&0!==G.length||(H="",c.val(""),a.$apply(function(){e.$setViewValue("")}))}function u(a){"mousedown"===a.type?c.bind("mouseout",v):c.unbind("mouseout",v)}function v(){M=A(this),c.unbind("mouseout",v)}function w(b){b=b||{};var d=b.which,f=b.type;if(16!==d&&91!==d){var g,h=c.val(),i=J,j=o(h),k=K,l=!1,m=y(this)||0,n=L||0,q=m-n,r=B[0],s=B[j.length]||B.slice().shift(),t=M||0,u=A(this)>0,v=t>0,w=h.length>i.length||t&&h.length>i.length-t,C=h.length<i.length||t&&h.length===i.length-t,D=d>=37&&40>=d&&b.shiftKey,E=37===d,F=8===d||"keyup"!==f&&C&&-1===q,G=46===d||"keyup"!==f&&C&&0===q&&!v,H=(E||F||"click"===f)&&m>r;if(M=A(this),!D&&(!u||"click"!==f&&"keyup"!==f)){if("input"===f&&C&&!v&&j===k){for(;F&&m>r&&!x(m);)m--;for(;G&&s>m&&-1===B.indexOf(m);)m++;var I=B.indexOf(m);j=j.substring(0,I)+j.substring(I+1),l=!0}for(g=p(j),J=g,K=j,c.val(g),l&&a.$apply(function(){e.$setViewValue(j)}),w&&r>=m&&(m=r+1),H&&m--,m=m>s?s:r>m?r:m;!x(m)&&m>r&&s>m;)m+=H?-1:1;(H&&s>m||w&&!x(n))&&m++,L=m,z(this,m)}}}function x(a){return B.indexOf(a)>-1}function y(a){if(!a)return 0;if(void 0!==a.selectionStart)return a.selectionStart;if(document.selection){a.focus();var b=document.selection.createRange();return b.moveStart("character",-a.value.length),b.text.length}return 0}function z(a,b){if(!a)return 0;if(0!==a.offsetWidth&&0!==a.offsetHeight)if(a.setSelectionRange)a.focus(),a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",b),c.select()}}function A(a){return a?void 0!==a.selectionStart?a.selectionEnd-a.selectionStart:document.selection?document.selection.createRange().text.length:0:0}var B,C,D,E,F,G,H,I,J,K,L,M,N=!1,O=!1,P=d.placeholder,Q=d.maxlength,R={};d.uiOptions?(R=a.$eval("["+d.uiOptions+"]"),angular.isObject(R[0])&&(R=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]?angular.extend(b[c],a[c]):b[c]=angular.copy(a[c]));return b}(b,R[0]))):R=b,d.$observe("uiMask",f),d.$observe("placeholder",g),e.$formatters.push(h),e.$parsers.push(i),c.bind("mousedown mouseup",u),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null===this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var d=0;if(arguments.length>1&&(d=Number(arguments[1]),d!==d?d=0:0!==d&&1/0!==d&&d!==-1/0&&(d=(d>0||-1)*Math.floor(Math.abs(d)))),d>=c)return-1;for(var e=d>=0?d:Math.max(c-Math.abs(d),0);c>e;e++)if(e in b&&b[e]===a)return e;return-1})}}}}]),angular.module("ui.reset",[]).value("uiResetConfig",null).directive("uiReset",["uiResetConfig",function(a){var b=null;return void 0!==a&&(b=a),{require:"ngModel",link:function(a,c,d,e){var f;f=angular.element('<a class="ui-reset" />'),c.wrap('<span class="ui-resetwrap" />').after(f),f.bind("click",function(c){c.preventDefault(),a.$apply(function(){e.$setViewValue(d.uiReset?a.$eval(d.uiReset):b),e.$render()})})}}}]),angular.module("ui.route",[]).directive("uiRoute",["$location","$parse",function(a,b){return{restrict:"AC",scope:!0,compile:function(c,d){var e;if(d.uiRoute)e="uiRoute";else if(d.ngHref)e="ngHref";else{if(!d.href)throw new Error("uiRoute missing a route or href property on "+c[0]);e="href"}return function(c,d,f){function g(b){var d=b.indexOf("#");d>-1&&(b=b.substr(d+1)),(j=function(){i(c,a.path().indexOf(b)>-1)})()}function h(b){var d=b.indexOf("#");d>-1&&(b=b.substr(d+1)),(j=function(){var d=new RegExp("^"+b+"$",["i"]);i(c,d.test(a.path()))})()}var i=b(f.ngModel||f.routeModel||"$uiRoute").assign,j=angular.noop;switch(e){case"uiRoute":f.uiRoute?h(f.uiRoute):f.$observe("uiRoute",h);break;case"ngHref":f.ngHref?g(f.ngHref):f.$observe("ngHref",g);break;case"href":g(f.href)}c.$on("$routeChangeSuccess",function(){j()}),c.$on("$stateChangeSuccess",function(){j()})}}}}]),angular.module("ui.scroll.jqlite",["ui.scroll"]).service("jqLiteExtras",["$log","$window",function(a,b){return{registerFor:function(a){var c,d,e,f,g,h,i;return d=angular.element.prototype.css,a.prototype.css=function(a,b){var c,e;return e=this,c=e[0],c&&3!==c.nodeType&&8!==c.nodeType&&c.style?d.call(e,a,b):void 0},h=function(a){return a&&a.document&&a.location&&a.alert&&a.setInterval},i=function(a,b,c){var d,e,f,g,i;return d=a[0],i={top:["scrollTop","pageYOffset","scrollLeft"],left:["scrollLeft","pageXOffset","scrollTop"]}[b],e=i[0],g=i[1],f=i[2],h(d)?angular.isDefined(c)?d.scrollTo(a[f].call(a),c):g in d?d[g]:d.document.documentElement[e]:angular.isDefined(c)?d[e]=c:d[e]},b.getComputedStyle?(f=function(a){return b.getComputedStyle(a,null)},c=function(a,b){return parseFloat(b)}):(f=function(a){return a.currentStyle},c=function(a,b){var c,d,e,f,g,h,i;return c=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,f=new RegExp("^("+c+")(?!px)[a-z%]+$","i"),f.test(b)?(i=a.style,d=i.left,g=a.runtimeStyle,h=g&&g.left,g&&(g.left=i.left),i.left=b,e=i.pixelLeft,i.left=d,h&&(g.left=h),e):parseFloat(b)}),e=function(a,b){var d,e,g,i,j,k,l,m,n,o,p,q,r;return h(a)?(d=document.documentElement[{height:"clientHeight",width:"clientWidth"}[b]],{base:d,padding:0,border:0,margin:0}):(r={width:[a.offsetWidth,"Left","Right"],height:[a.offsetHeight,"Top","Bottom"]}[b],d=r[0],l=r[1],m=r[2],k=f(a),p=c(a,k["padding"+l])||0,q=c(a,k["padding"+m])||0,e=c(a,k["border"+l+"Width"])||0,g=c(a,k["border"+m+"Width"])||0,i=k["margin"+l],j=k["margin"+m],n=c(a,i)||0,o=c(a,j)||0,{base:d,padding:p+q,border:e+g,margin:n+o})},g=function(a,b,c){var d,g,h;return g=e(a,b),g.base>0?{base:g.base-g.padding-g.border,outer:g.base,outerfull:g.base+g.margin}[c]:(d=f(a),h=d[b],(0>h||null===h)&&(h=a.style[b]||0),h=parseFloat(h)||0,{base:h-g.padding-g.border,outer:h,outerfull:h+g.padding+g.border+g.margin}[c])},angular.forEach({before:function(a){var b,c,d,e,f,g,h;if(f=this,c=f[0],e=f.parent(),b=e.contents(),b[0]===c)return e.prepend(a);for(d=g=1,h=b.length-1;h>=1?h>=g:g>=h;d=h>=1?++g:--g)if(b[d]===c)return void angular.element(b[d-1]).after(a);throw new Error("invalid DOM structure "+c.outerHTML)},height:function(a){var b;return b=this,angular.isDefined(a)?(angular.isNumber(a)&&(a+="px"),d.call(b,"height",a)):g(this[0],"height","base")},outerHeight:function(a){return g(this[0],"height",a?"outerfull":"outer")},offset:function(a){var b,c,d,e,f,g;return f=this,arguments.length?void 0===a?f:a:(b={top:0,left:0},e=f[0],(c=e&&e.ownerDocument)?(d=c.documentElement,e.getBoundingClientRect&&(b=e.getBoundingClientRect()),g=c.defaultView||c.parentWindow,{top:b.top+(g.pageYOffset||d.scrollTop)-(d.clientTop||0),left:b.left+(g.pageXOffset||d.scrollLeft)-(d.clientLeft||0)}):void 0)},scrollTop:function(a){return i(this,"top",a)},scrollLeft:function(a){return i(this,"left",a)}},function(b,c){return a.prototype[c]?void 0:a.prototype[c]=b})}}}]).run(["$log","$window","jqLiteExtras",function(a,b,c){return b.jQuery?void 0:c.registerFor(angular.element)}]),angular.module("ui.scroll",[]).directive("ngScrollViewport",["$log",function(){return{controller:["$scope","$element",function(a,b){return b}]}}]).directive("ngScroll",["$log","$injector","$rootScope","$timeout",function(a,b,c,d){return{require:["?^ngScrollViewport"],transclude:"element",priority:1e3,terminal:!0,compile:function(e,f,g){return function(f,h,i,j){var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;if(H=i.ngScroll.match(/^\s*(\w+)\s+in\s+(\w+)\s*$/),!H)throw new Error('Expected ngScroll in form of "item_ in _datasource_" but got "'+i.ngScroll+'"');if(F=H[1],v=H[2],D=function(a){return angular.isObject(a)&&a.get&&angular.isFunction(a.get)},u=f[v],!D(u)&&(u=b.get(v),!D(u)))throw new Error(v+" is not a valid datasource");return r=Math.max(3,+i.bufferSize||10),q=function(){return T.height()*Math.max(.1,+i.padding||.1)},O=function(a){return a[0].scrollHeight||a[0].document.documentElement.scrollHeight},k=null,g(R=f.$new(),function(a){var b,c,d,f,g,h;if(f=a[0].localName,"dl"===f)throw new Error("ng-scroll directive does not support <"+a[0].localName+"> as a repeating tag: "+a[0].outerHTML);return"li"!==f&&"tr"!==f&&(f="div"),h=j[0]||angular.element(window),h.css({"overflow-y":"auto",display:"block"}),d=function(a){var b,c,d;switch(a){case"tr":return d=angular.element("<table><tr><td><div></div></td></tr></table>"),b=d.find("div"),c=d.find("tr"),c.paddingHeight=function(){return b.height.apply(b,arguments)},c;default:return c=angular.element("<"+a+"></"+a+">"),c.paddingHeight=c.height,c}},c=function(a,b,c){return b[{top:"before",bottom:"after"}[c]](a),{paddingHeight:function(){return a.paddingHeight.apply(a,arguments)},insert:function(b){return a[{top:"after",bottom:"before"}[c]](b)}}},g=c(d(f),e,"top"),b=c(d(f),e,"bottom"),R.$destroy(),k={viewport:h,topPadding:g.paddingHeight,bottomPadding:b.paddingHeight,append:b.insert,prepend:g.insert,bottomDataPos:function(){return O(h)-b.paddingHeight()},topDataPos:function(){return g.paddingHeight()}}}),T=k.viewport,B=1,I=1,p=[],J=[],x=!1,n=!1,G=u.loading||function(){},E=!1,L=function(a,b){var c,d;for(c=d=a;b>=a?b>d:d>b;c=b>=a?++d:--d)p[c].scope.$destroy(),p[c].element.remove();return p.splice(a,b-a)},K=function(){return B=1,I=1,L(0,p.length),k.topPadding(0),k.bottomPadding(0),J=[],x=!1,n=!1,l(!1)},o=function(){return T.scrollTop()+T.height()},S=function(){return T.scrollTop()},P=function(){return!x&&k.bottomDataPos()<o()+q()},s=function(){var b,c,d,e,f,g;for(b=0,e=0,c=f=g=p.length-1;(0>=g?0>=f:f>=0)&&(d=p[c].element.outerHeight(!0),k.bottomDataPos()-b-d>o()+q());c=0>=g?++f:--f)b+=d,e++,x=!1;return e>0?(k.bottomPadding(k.bottomPadding()+b),L(p.length-e,p.length),I-=e,a.log("clipped off bottom "+e+" bottom padding "+k.bottomPadding())):void 0},Q=function(){return!n&&k.topDataPos()>S()-q()},t=function(){var b,c,d,e,f,g;for(e=0,d=0,f=0,g=p.length;g>f&&(b=p[f],c=b.element.outerHeight(!0),k.topDataPos()+e+c<S()-q());f++)e+=c,d++,n=!1;return d>0?(k.topPadding(k.topPadding()+e),L(0,d),B+=d,a.log("clipped off top "+d+" top padding "+k.topPadding())):void 0},w=function(a,b){return E||(E=!0,G(!0)),1===J.push(a)?z(b):void 0},C=function(a,b){var c,d,e;return c=f.$new(),c[F]=b,d=a>B,c.$index=a,d&&c.$index--,e={scope:c},g(c,function(b){return e.element=b,d?a===I?(k.append(b),p.push(e)):(p[a-B].element.after(b),p.splice(a-B+1,0,e)):(k.prepend(b),p.unshift(e))}),{appended:d,wrapper:e}},m=function(a,b){var c;return a?k.bottomPadding(Math.max(0,k.bottomPadding()-b.element.outerHeight(!0))):(c=k.topPadding()-b.element.outerHeight(!0),c>=0?k.topPadding(c):T.scrollTop(T.scrollTop()+b.element.outerHeight(!0)))},l=function(b,c,e){var f;return f=function(){return a.log("top {actual="+k.topDataPos()+" visible from="+S()+" bottom {visible through="+o()+" actual="+k.bottomDataPos()+"}"),P()?w(!0,b):Q()&&w(!1,b),e?e():void 0},c?d(function(){var a,b,d;for(b=0,d=c.length;d>b;b++)a=c[b],m(a.appended,a.wrapper);return f()}):f()},A=function(a,b){return l(a,b,function(){return J.shift(),0===J.length?(E=!1,G(!1)):z(a)})},z=function(b){var c;return c=J[0],c?p.length&&!P()?A(b):u.get(I,r,function(c){var d,e,f,g;if(e=[],0===c.length)x=!0,k.bottomPadding(0),a.log("appended: requested "+r+" records starting from "+I+" recieved: eof");else{for(t(),f=0,g=c.length;g>f;f++)d=c[f],e.push(C(++I,d));a.log("appended: requested "+r+" received "+c.length+" buffer size "+p.length+" first "+B+" next "+I)}return A(b,e)}):p.length&&!Q()?A(b):u.get(B-r,r,function(c){var d,e,f,g;if(e=[],0===c.length)n=!0,k.topPadding(0),a.log("prepended: requested "+r+" records starting from "+(B-r)+" recieved: bof");else{for(s(),d=f=g=c.length-1;0>=g?0>=f:f>=0;d=0>=g?++f:--f)e.unshift(C(--B,c[d]));a.log("prepended: requested "+r+" received "+c.length+" buffer size "+p.length+" first "+B+" next "+I)}return A(b,e)})},M=function(){return c.$$phase||E?void 0:(l(!1),f.$apply())},T.bind("resize",M),N=function(){return c.$$phase||E?void 0:(l(!0),f.$apply())},T.bind("scroll",N),f.$watch(u.revision,function(){return K()}),y=u.scope?u.scope.$new():f.$new(),f.$on("$destroy",function(){return y.$destroy(),T.unbind("resize",M),T.unbind("scroll",N)}),y.$on("update.items",function(a,b,c){var d,e,f,g,h;if(angular.isFunction(b))for(e=function(a){return b(a.scope)},f=0,g=p.length;g>f;f++)d=p[f],e(d);else 0<=(h=b-B-1)&&h<p.length&&(p[b-B-1].scope[F]=c);return null}),y.$on("delete.items",function(a,b){var c,d,e,f,g,h,i,j,k,m,n,o;if(angular.isFunction(b)){for(e=[],h=0,k=p.length;k>h;h++)d=p[h],e.unshift(d);for(g=function(a){return b(a.scope)?(L(e.length-1-c,e.length-c),I--):void 0},c=i=0,m=e.length;m>i;c=++i)f=e[c],g(f)}else 0<=(o=b-B-1)&&o<p.length&&(L(b-B-1,b-B),I--);for(c=j=0,n=p.length;n>j;c=++j)d=p[c],d.scope.$index=B+c;return l(!1)}),y.$on("insert.item",function(a,b,c){var d,e,f,g,h,i,j,k,m,n,o,q;if(e=[],angular.isFunction(b)){for(f=[],i=0,m=p.length;m>i;i++)c=p[i],f.unshift(c);for(h=function(a){var f,g,h,i,j;if(g=b(a.scope)){if(C=function(a,b){return C(a,b),I++},angular.isArray(g)){for(j=[],f=h=0,i=g.length;i>h;f=++h)c=g[f],j.push(e.push(C(d+f,c)));return j}return e.push(C(d,g))}},d=j=0,n=f.length;n>j;d=++j)g=f[d],h(g)}else 0<=(q=b-B-1)&&q<p.length&&(e.push(C(b,c)),I++);for(d=k=0,o=p.length;o>k;d=++k)c=p[d],c.scope.$index=B+d;return l(!1,e)})}}}}]),angular.module("ui.scrollfix",[]).directive("uiScrollfix",["$window",function(a){return{require:"^?uiScrollfixTarget",link:function(b,c,d,e){function f(){var b;if(angular.isDefined(a.pageYOffset))b=a.pageYOffset;else{var e=document.compatMode&&"BackCompat"!==document.compatMode?document.documentElement:document.body;b=e.scrollTop}!c.hasClass("ui-scrollfix")&&b>d.uiScrollfix?c.addClass("ui-scrollfix"):c.hasClass("ui-scrollfix")&&b<d.uiScrollfix&&c.removeClass("ui-scrollfix")}var g=c[0].offsetTop,h=e&&e.$element||angular.element(a);d.uiScrollfix?"string"==typeof d.uiScrollfix&&("-"===d.uiScrollfix.charAt(0)?d.uiScrollfix=g-parseFloat(d.uiScrollfix.substr(1)):"+"===d.uiScrollfix.charAt(0)&&(d.uiScrollfix=g+parseFloat(d.uiScrollfix.substr(1)))):d.uiScrollfix=g,h.on("scroll",f),b.$on("$destroy",function(){h.off("scroll",f)})}}}]).directive("uiScrollfixTarget",[function(){return{controller:["$element",function(a){this.$element=a}]}}]),angular.module("ui.showhide",[]).directive("uiShow",[function(){return function(a,b,c){a.$watch(c.uiShow,function(a){a?b.addClass("ui-show"):b.removeClass("ui-show")})}}]).directive("uiHide",[function(){return function(a,b,c){a.$watch(c.uiHide,function(a){a?b.addClass("ui-hide"):b.removeClass("ui-hide")})}}]).directive("uiToggle",[function(){return function(a,b,c){a.$watch(c.uiToggle,function(a){a?b.removeClass("ui-hide").addClass("ui-show"):b.removeClass("ui-show").addClass("ui-hide")})}}]),angular.module("ui.unique",[]).filter("unique",["$parse",function(a){return function(b,c){if(c===!1)return b;if((c||angular.isUndefined(c))&&angular.isArray(b)){var d=[],e=angular.isString(c)?a(c):function(a){return a},f=function(a){return angular.isObject(a)?e(a):a};angular.forEach(b,function(a){for(var b=!1,c=0;c<d.length;c++)if(angular.equals(f(d[c]),f(a))){b=!0;break}b||d.push(a)}),b=d}return b}}]),angular.module("ui.validate",[]).directive("uiValidate",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){function e(b){return angular.isString(b)?void a.$watch(b,function(){angular.forEach(g,function(a){a(d.$modelValue)})}):angular.isArray(b)?void angular.forEach(b,function(b){a.$watch(b,function(){angular.forEach(g,function(a){a(d.$modelValue)})})}):void(angular.isObject(b)&&angular.forEach(b,function(b,c){angular.isString(b)&&a.$watch(b,function(){g[c](d.$modelValue)}),angular.isArray(b)&&angular.forEach(b,function(b){a.$watch(b,function(){g[c](d.$modelValue)})})}))}var f,g={},h=a.$eval(c.uiValidate);h&&(angular.isString(h)&&(h={validator:h}),angular.forEach(h,function(b,c){f=function(e){var f=a.$eval(b,{$value:e});return angular.isObject(f)&&angular.isFunction(f.then)?(f.then(function(){d.$setValidity(c,!0)},function(){d.$setValidity(c,!1)}),e):f?(d.$setValidity(c,!0),e):(d.$setValidity(c,!1),e)},g[c]=f,d.$formatters.push(f),d.$parsers.push(f)}),c.uiValidateWatch&&e(a.$eval(c.uiValidateWatch)))}}}),angular.module("ui.utils",["ui.event","ui.format","ui.highlight","ui.include","ui.indeterminate","ui.inflector","ui.jq","ui.keypress","ui.mask","ui.reset","ui.route","ui.scrollfix","ui.scroll","ui.scroll.jqlite","ui.showhide","ui.unique","ui.validate"]);
/**
 * Created by ezgoing on 14/9/2014.
 */

"use strict";
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {
    var cropbox = function(options, el){
        var el = el || $(options.imageBox),
            obj =
            {
                state : {},
                ratio : 1,
                options : options,
                imageBox : el,
                thumbBox : el.find(options.thumbBox),
                spinner : el.find(options.spinner),
                image : new Image(),
                getDataURL: function ()
                {
                    var width = this.thumbBox.width(),
                        height = this.thumbBox.height(),
                        canvas = document.createElement("canvas"),
                        dim = el.css('background-position').split(' '),
                        size = el.css('background-size').split(' '),
                        dx = parseInt(dim[0]) - el.width()/2 + width/2,
                        dy = parseInt(dim[1]) - el.height()/2 + height/2,
                        dw = parseInt(size[0]),
                        dh = parseInt(size[1]),
                        sh = parseInt(this.image.height),
                        sw = parseInt(this.image.width);

                    canvas.width = width;
                    canvas.height = height;
                    var context = canvas.getContext("2d");
                    context.drawImage(this.image, 0, 0, sw, sh, dx, dy, dw, dh);
                    var imageData = canvas.toDataURL('image/png');
                    return imageData;
                },
                getBlob: function()
                {
                    var imageData = this.getDataURL();
                    var b64 = imageData.replace('data:image/png;base64,','');
                    var binary = atob(b64);
                    var array = [];
                    for (var i = 0; i < binary.length; i++) {
                        array.push(binary.charCodeAt(i));
                    }
                    return  new Blob([new Uint8Array(array)], {type: 'image/png'});
                },
                zoomIn: function ()
                {
                    this.ratio*=1.1;
                    setBackground();
                },
                zoomOut: function ()
                {
                    this.ratio*=0.9;
                    setBackground();
                }
            },
            setBackground = function()
            {
                var w =  parseInt(obj.image.width)*obj.ratio;
                var h =  parseInt(obj.image.height)*obj.ratio;

                var pw = (el.width() - w) / 2;
                var ph = (el.height() - h) / 2;

                el.css({
                    'background-image': 'url(' + obj.image.src + ')',
                    'background-size': w +'px ' + h + 'px',
                    'background-position': pw + 'px ' + ph + 'px',
                    'background-repeat': 'no-repeat'});
            },
            imgMouseDown = function(e)
            {
                e.stopImmediatePropagation();

                obj.state.dragable = true;
                obj.state.mouseX = e.clientX;
                obj.state.mouseY = e.clientY;
            },
            imgMouseMove = function(e)
            {
                e.stopImmediatePropagation();

                if (obj.state.dragable)
                {
                    var x = e.clientX - obj.state.mouseX;
                    var y = e.clientY - obj.state.mouseY;

                    var bg = el.css('background-position').split(' ');

                    var bgX = x + parseInt(bg[0]);
                    var bgY = y + parseInt(bg[1]);

                    el.css('background-position', bgX +'px ' + bgY + 'px');

                    obj.state.mouseX = e.clientX;
                    obj.state.mouseY = e.clientY;
                }
            },
            imgMouseUp = function(e)
            {
                e.stopImmediatePropagation();
                obj.state.dragable = false;
            },
            zoomImage = function(e)
            {
                e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? obj.ratio*=1.1 : obj.ratio*=0.9;
                setBackground();
            }

        obj.spinner.show();
        obj.image.onload = function() {
            obj.spinner.hide();
            setBackground();

            el.bind('mousedown', imgMouseDown);
            el.bind('mousemove', imgMouseMove);
            $(window).bind('mouseup', imgMouseUp);
            el.bind('mousewheel DOMMouseScroll', zoomImage);
        };
        obj.image.src = options.imgSrc;
        el.on('remove', function(){$(window).unbind('mouseup', imgMouseUp)});

        return obj;
    };

    jQuery.fn.cropbox = function(options){
        return new cropbox(options, this);
    };
}));



﻿(function(definition){if(typeof define=="function"){define(definition)}else if(typeof YUI=="function"){YUI.add("es5",definition)}else{definition()}})(function(){function Empty(){}if(!Function.prototype.bind){Function.prototype.bind=function bind(that){var target=this;if(typeof target!="function"){throw new TypeError("Function.prototype.bind called on incompatible "+target)}var args=_Array_slice_.call(arguments,1);var bound=function(){if(this instanceof bound){var result=target.apply(this,args.concat(_Array_slice_.call(arguments)));if(Object(result)===result){return result}return this}else{return target.apply(that,args.concat(_Array_slice_.call(arguments)))}};if(target.prototype){Empty.prototype=target.prototype;bound.prototype=new Empty;Empty.prototype=null}return bound}}var call=Function.prototype.call;var prototypeOfArray=Array.prototype;var prototypeOfObject=Object.prototype;var _Array_slice_=prototypeOfArray.slice;var _toString=call.bind(prototypeOfObject.toString);var owns=call.bind(prototypeOfObject.hasOwnProperty);var defineGetter;var defineSetter;var lookupGetter;var lookupSetter;var supportsAccessors;if(supportsAccessors=owns(prototypeOfObject,"__defineGetter__")){defineGetter=call.bind(prototypeOfObject.__defineGetter__);defineSetter=call.bind(prototypeOfObject.__defineSetter__);lookupGetter=call.bind(prototypeOfObject.__lookupGetter__);lookupSetter=call.bind(prototypeOfObject.__lookupSetter__)}if([1,2].splice(0).length!=2){var array_splice=Array.prototype.splice;if(function(){function makeArray(l){var a=[];while(l--){a.unshift(l)}return a}var array=[],lengthBefore;array.splice.bind(array,0,0).apply(null,makeArray(20));array.splice.bind(array,0,0).apply(null,makeArray(26));lengthBefore=array.length;array.splice(5,0,"XXX");if(lengthBefore+1==array.length){return true}}()){Array.prototype.splice=function(start,deleteCount){if(!arguments.length){return[]}else{return array_splice.apply(this,[start===void 0?0:start,deleteCount===void 0?this.length-start:deleteCount].concat(_Array_slice_.call(arguments,2)))}}}else{Array.prototype.splice=function(start,deleteCount){var result,args=_Array_slice_.call(arguments,2),addElementsCount=args.length;if(!arguments.length){return[]}if(start===void 0){start=0}if(deleteCount===void 0){deleteCount=this.length-start}if(addElementsCount>0){if(deleteCount<=0){if(start==this.length){this.push.apply(this,args);return[]}if(start==0){this.unshift.apply(this,args);return[]}}result=_Array_slice_.call(this,start,start+deleteCount);args.push.apply(args,_Array_slice_.call(this,start+deleteCount,this.length));args.unshift.apply(args,_Array_slice_.call(this,0,start));args.unshift(0,this.length);array_splice.apply(this,args);return result}return array_splice.call(this,start,deleteCount)}}}if([].unshift(0)!=1){var array_unshift=Array.prototype.unshift;Array.prototype.unshift=function(){array_unshift.apply(this,arguments);return this.length}}if(!Array.isArray){Array.isArray=function isArray(obj){return _toString(obj)=="[object Array]"}}var boxedString=Object("a"),splitString=boxedString[0]!="a"||!(0 in boxedString);if(!Array.prototype.forEach){Array.prototype.forEach=function forEach(fun){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,thisp=arguments[1],i=-1,length=self.length>>>0;if(_toString(fun)!="[object Function]"){throw new TypeError}while(++i<length){if(i in self){fun.call(thisp,self[i],i,object)}}}}if(!Array.prototype.map){Array.prototype.map=function map(fun){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,length=self.length>>>0,result=Array(length),thisp=arguments[1];if(_toString(fun)!="[object Function]"){throw new TypeError(fun+" is not a function")}for(var i=0;i<length;i++){if(i in self)result[i]=fun.call(thisp,self[i],i,object)}return result}}if(!Array.prototype.filter){Array.prototype.filter=function filter(fun){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,length=self.length>>>0,result=[],value,thisp=arguments[1];if(_toString(fun)!="[object Function]"){throw new TypeError(fun+" is not a function")}for(var i=0;i<length;i++){if(i in self){value=self[i];if(fun.call(thisp,value,i,object)){result.push(value)}}}return result}}if(!Array.prototype.every){Array.prototype.every=function every(fun){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,length=self.length>>>0,thisp=arguments[1];if(_toString(fun)!="[object Function]"){throw new TypeError(fun+" is not a function")}for(var i=0;i<length;i++){if(i in self&&!fun.call(thisp,self[i],i,object)){return false}}return true}}if(!Array.prototype.some){Array.prototype.some=function some(fun){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,length=self.length>>>0,thisp=arguments[1];if(_toString(fun)!="[object Function]"){throw new TypeError(fun+" is not a function")}for(var i=0;i<length;i++){if(i in self&&fun.call(thisp,self[i],i,object)){return true}}return false}}if(!Array.prototype.reduce){Array.prototype.reduce=function reduce(fun){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,length=self.length>>>0;if(_toString(fun)!="[object Function]"){throw new TypeError(fun+" is not a function")}if(!length&&arguments.length==1){throw new TypeError("reduce of empty array with no initial value")}var i=0;var result;if(arguments.length>=2){result=arguments[1]}else{do{if(i in self){result=self[i++];break}if(++i>=length){throw new TypeError("reduce of empty array with no initial value")}}while(true)}for(;i<length;i++){if(i in self){result=fun.call(void 0,result,self[i],i,object)}}return result}}if(!Array.prototype.reduceRight){Array.prototype.reduceRight=function reduceRight(fun){var object=toObject(this),self=splitString&&_toString(this)=="[object String]"?this.split(""):object,length=self.length>>>0;if(_toString(fun)!="[object Function]"){throw new TypeError(fun+" is not a function")}if(!length&&arguments.length==1){throw new TypeError("reduceRight of empty array with no initial value")}var result,i=length-1;if(arguments.length>=2){result=arguments[1]}else{do{if(i in self){result=self[i--];break}if(--i<0){throw new TypeError("reduceRight of empty array with no initial value")}}while(true)}if(i<0){return result}do{if(i in this){result=fun.call(void 0,result,self[i],i,object)}}while(i--);return result}}if(!Array.prototype.indexOf||[0,1].indexOf(1,2)!=-1){Array.prototype.indexOf=function indexOf(sought){var self=splitString&&_toString(this)=="[object String]"?this.split(""):toObject(this),length=self.length>>>0;if(!length){return-1}var i=0;if(arguments.length>1){i=toInteger(arguments[1])}i=i>=0?i:Math.max(0,length+i);for(;i<length;i++){if(i in self&&self[i]===sought){return i}}return-1}}if(!Array.prototype.lastIndexOf||[0,1].lastIndexOf(0,-3)!=-1){Array.prototype.lastIndexOf=function lastIndexOf(sought){var self=splitString&&_toString(this)=="[object String]"?this.split(""):toObject(this),length=self.length>>>0;if(!length){return-1}var i=length-1;if(arguments.length>1){i=Math.min(i,toInteger(arguments[1]))}i=i>=0?i:length-Math.abs(i);for(;i>=0;i--){if(i in self&&sought===self[i]){return i}}return-1}}if(!Object.keys){var hasDontEnumBug=true,dontEnums=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],dontEnumsLength=dontEnums.length;for(var key in{toString:null}){hasDontEnumBug=false}Object.keys=function keys(object){if(typeof object!="object"&&typeof object!="function"||object===null){throw new TypeError("Object.keys called on a non-object")}var keys=[];for(var name in object){if(owns(object,name)){keys.push(name)}}if(hasDontEnumBug){for(var i=0,ii=dontEnumsLength;i<ii;i++){var dontEnum=dontEnums[i];if(owns(object,dontEnum)){keys.push(dontEnum)}}}return keys}}var negativeDate=-621987552e5,negativeYearString="-000001";if(!Date.prototype.toISOString||new Date(negativeDate).toISOString().indexOf(negativeYearString)===-1){Date.prototype.toISOString=function toISOString(){var result,length,value,year,month;if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")}year=this.getUTCFullYear();month=this.getUTCMonth();year+=Math.floor(month/12);month=(month%12+12)%12;result=[month+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];year=(year<0?"-":year>9999?"+":"")+("00000"+Math.abs(year)).slice(0<=year&&year<=9999?-4:-6);length=result.length;while(length--){value=result[length];if(value<10){result[length]="0"+value}}return year+"-"+result.slice(0,2).join("-")+"T"+result.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}}var dateToJSONIsSupported=false;try{dateToJSONIsSupported=Date.prototype.toJSON&&new Date(NaN).toJSON()===null&&new Date(negativeDate).toJSON().indexOf(negativeYearString)!==-1&&Date.prototype.toJSON.call({toISOString:function(){return true}})}catch(e){}if(!dateToJSONIsSupported){Date.prototype.toJSON=function toJSON(key){var o=Object(this),tv=toPrimitive(o),toISO;if(typeof tv==="number"&&!isFinite(tv)){return null}toISO=o.toISOString;if(typeof toISO!="function"){throw new TypeError("toISOString property is not callable")}return toISO.call(o)}}if(!Date.parse||"Date.parse is buggy"){Date=function(NativeDate){function Date(Y,M,D,h,m,s,ms){var length=arguments.length;if(this instanceof NativeDate){var date=length==1&&String(Y)===Y?new NativeDate(Date.parse(Y)):length>=7?new NativeDate(Y,M,D,h,m,s,ms):length>=6?new NativeDate(Y,M,D,h,m,s):length>=5?new NativeDate(Y,M,D,h,m):length>=4?new NativeDate(Y,M,D,h):length>=3?new NativeDate(Y,M,D):length>=2?new NativeDate(Y,M):length>=1?new NativeDate(Y):new NativeDate;date.constructor=Date;return date}return NativeDate.apply(this,arguments)}var isoDateExpression=new RegExp("^"+"(\\d{4}|[+-]\\d{6})"+"(?:-(\\d{2})"+"(?:-(\\d{2})"+"(?:"+"T(\\d{2})"+":(\\d{2})"+"(?:"+":(\\d{2})"+"(?:(\\.\\d{1,}))?"+")?"+"("+"Z|"+"(?:"+"([-+])"+"(\\d{2})"+":(\\d{2})"+")"+")?)?)?)?"+"$");var months=[0,31,59,90,120,151,181,212,243,273,304,334,365];function dayFromMonth(year,month){var t=month>1?1:0;return months[month]+Math.floor((year-1969+t)/4)-Math.floor((year-1901+t)/100)+Math.floor((year-1601+t)/400)+365*(year-1970)}for(var key in NativeDate){Date[key]=NativeDate[key]}Date.now=NativeDate.now;Date.UTC=NativeDate.UTC;Date.prototype=NativeDate.prototype;Date.prototype.constructor=Date;Date.parse=function parse(string){var match=isoDateExpression.exec(string);if(match){var year=Number(match[1]),month=Number(match[2]||1)-1,day=Number(match[3]||1)-1,hour=Number(match[4]||0),minute=Number(match[5]||0),second=Number(match[6]||0),millisecond=Math.floor(Number(match[7]||0)*1e3),offset=!match[4]||match[8]?0:Number(new NativeDate(1970,0)),signOffset=match[9]==="-"?1:-1,hourOffset=Number(match[10]||0),minuteOffset=Number(match[11]||0),result;if(hour<(minute>0||second>0||millisecond>0?24:25)&&minute<60&&second<60&&millisecond<1e3&&month>-1&&month<12&&hourOffset<24&&minuteOffset<60&&day>-1&&day<dayFromMonth(year,month+1)-dayFromMonth(year,month)){result=((dayFromMonth(year,month)+day)*24+hour+hourOffset*signOffset)*60;result=((result+minute+minuteOffset*signOffset)*60+second)*1e3+millisecond+offset;if(-864e13<=result&&result<=864e13){return result}}return NaN}return NativeDate.parse.apply(this,arguments)};return Date}(Date)}if(!Date.now){Date.now=function now(){return(new Date).getTime()}}if(!Number.prototype.toFixed||8e-5.toFixed(3)!=="0.000"||.9.toFixed(0)==="0"||1.255.toFixed(2)!=="1.25"||0xde0b6b3a7640080.toFixed(0)!=="1000000000000000128"){(function(){var base,size,data,i;base=1e7;size=6;data=[0,0,0,0,0,0];function multiply(n,c){var i=-1;while(++i<size){c+=n*data[i];data[i]=c%base;c=Math.floor(c/base)}}function divide(n){var i=size,c=0;while(--i>=0){c+=data[i];data[i]=Math.floor(c/n);c=c%n*base}}function toString(){var i=size;var s="";while(--i>=0){if(s!==""||i===0||data[i]!==0){var t=String(data[i]);if(s===""){s=t}else{s+="0000000".slice(0,7-t.length)+t}}}return s}function pow(x,n,acc){return n===0?acc:n%2===1?pow(x,n-1,acc*x):pow(x*x,n/2,acc)}function log(x){var n=0;while(x>=4096){n+=12;x/=4096}while(x>=2){n+=1;x/=2}return n}Number.prototype.toFixed=function(fractionDigits){var f,x,s,m,e,z,j,k;f=Number(fractionDigits);f=f!==f?0:Math.floor(f);if(f<0||f>20){throw new RangeError("Number.toFixed called with invalid number of decimals")}x=Number(this);if(x!==x){return"NaN"}if(x<=-1e21||x>=1e21){return String(x)}s="";if(x<0){s="-";x=-x}m="0";if(x>1e-21){e=log(x*pow(2,69,1))-69;z=e<0?x*pow(2,-e,1):x/pow(2,e,1);z*=4503599627370496;e=52-e;if(e>0){multiply(0,z);j=f;while(j>=7){multiply(1e7,0);j-=7}multiply(pow(10,j,1),0);j=e-1;while(j>=23){divide(1<<23);j-=23}divide(1<<j);multiply(1,1);divide(2);m=toString()}else{multiply(0,z);multiply(1<<-e,0);m=toString()+"0.00000000000000000000".slice(2,2+f)}}if(f>0){k=m.length;if(k<=f){m=s+"0.0000000000000000000".slice(0,f-k+2)+m}else{m=s+m.slice(0,k-f)+"."+m.slice(k-f)}}else{m=s+m}return m}})()}var string_split=String.prototype.split;if("ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||"tesst".split(/(s)*/)[1]==="t"||"".split(/.?/).length===0||".".split(/()()/).length>1){(function(){var compliantExecNpcg=/()??/.exec("")[1]===void 0;String.prototype.split=function(separator,limit){var string=this;if(separator===void 0&&limit===0)return[];if(Object.prototype.toString.call(separator)!=="[object RegExp]"){return string_split.apply(this,arguments)}var output=[],flags=(separator.ignoreCase?"i":"")+(separator.multiline?"m":"")+(separator.extended?"x":"")+(separator.sticky?"y":""),lastLastIndex=0,separator=new RegExp(separator.source,flags+"g"),separator2,match,lastIndex,lastLength;string+="";if(!compliantExecNpcg){separator2=new RegExp("^"+separator.source+"$(?!\\s)",flags)}limit=limit===void 0?-1>>>0:limit>>>0;while(match=separator.exec(string)){lastIndex=match.index+match[0].length;if(lastIndex>lastLastIndex){output.push(string.slice(lastLastIndex,match.index));if(!compliantExecNpcg&&match.length>1){match[0].replace(separator2,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===void 0){match[i]=void 0}}})}if(match.length>1&&match.index<string.length){Array.prototype.push.apply(output,match.slice(1))}lastLength=match[0].length;lastLastIndex=lastIndex;if(output.length>=limit){break}}if(separator.lastIndex===match.index){separator.lastIndex++}}if(lastLastIndex===string.length){if(lastLength||!separator.test("")){output.push("")}}else{output.push(string.slice(lastLastIndex))}return output.length>limit?output.slice(0,limit):output}})()}else if("0".split(void 0,0).length){String.prototype.split=function(separator,limit){if(separator===void 0&&limit===0)return[];return string_split.apply(this,arguments)}}if("".substr&&"0b".substr(-1)!=="b"){var string_substr=String.prototype.substr;String.prototype.substr=function(start,length){return string_substr.call(this,start<0?(start=this.length+start)<0?0:start:start,length)}}var ws="	\n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003"+"\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028"+"\u2029\ufeff";if(!String.prototype.trim||ws.trim()){ws="["+ws+"]";var trimBeginRegexp=new RegExp("^"+ws+ws+"*"),trimEndRegexp=new RegExp(ws+ws+"*$");String.prototype.trim=function trim(){if(this===void 0||this===null){throw new TypeError("can't convert "+this+" to object")}return String(this).replace(trimBeginRegexp,"").replace(trimEndRegexp,"")}}function toInteger(n){n=+n;if(n!==n){n=0}else if(n!==0&&n!==1/0&&n!==-(1/0)){n=(n>0||-1)*Math.floor(Math.abs(n))}return n}function isPrimitive(input){var type=typeof input;return input===null||type==="undefined"||type==="boolean"||type==="number"||type==="string"}function toPrimitive(input){var val,valueOf,toString;if(isPrimitive(input)){return input}valueOf=input.valueOf;if(typeof valueOf==="function"){val=valueOf.call(input);if(isPrimitive(val)){return val}}toString=input.toString;if(typeof toString==="function"){val=toString.call(input);if(isPrimitive(val)){return val}}throw new TypeError}var toObject=function(o){if(o==null){throw new TypeError("can't convert "+o+" to object")}return Object(o)}});
!function(a,b){"function"==typeof define&&define.amd?define(["is"],function(c){return a.is=b(c)}):"object"==typeof exports?module.exports=b(require("is_js")):a.is=b(a.is)}(this,function(a){function b(a){return function(){return!a.apply(null,j.call(arguments))}}function c(b){return function(){var c=j.call(arguments),d=c.length;1===d&&a.array(c[0])&&(c=c[0],d=c.length);for(var e=0;d>e;e++)if(!b.call(null,c[e]))return!1;return!0}}function d(b){return function(){var c=j.call(arguments),d=c.length;1===d&&a.array(c[0])&&(c=c[0],d=c.length);for(var e=0;d>e;e++)if(b.call(null,c[e]))return!0;return!1}}function e(b,c){a[b]=function(a){return c[b].test(a)}}function f(){var e=a;for(var f in e)if(k.call(e,f)&&a["function"](e[f]))for(var g=e[f].api||["not","all","any"],h=0;h<g.length;h++)"not"===g[h]&&(a.not[f]=b(a[f])),"all"===g[h]&&(a.all[f]=c(a[f])),"any"===g[h]&&(a.any[f]=d(a[f]))}var g=this,h=g.is;a={},a.VERSION="0.4.1",a.not={},a.all={},a.any={};var i=Object.prototype.toString,j=Array.prototype.slice,k=Object.prototype.hasOwnProperty;a.arguments=function(b){return a.not["null"](b)&&("[object Arguments]"===i.call(b)||"object"==typeof b&&"callee"in b)},a.array=Array.isArray||function(a){return"[object Array]"===i.call(a)},a["boolean"]=function(a){return a===!0||a===!1||"[object Boolean]"===i.call(a)},a.date=function(a){return"[object Date]"===i.call(a)},a.error=function(a){return"[object Error]"===i.call(a)},a["function"]=function(a){return"[object Function]"===i.call(a)||"function"==typeof a},a.nan=function(a){return a!==a},a["null"]=function(a){return null===a||"[object Null]"===i.call(a)},a.number=function(a){return"[object Number]"===i.call(a)},a.object=function(a){var b=typeof a;return"function"===b||"object"===b&&!!a},a.regexp=function(a){return"[object RegExp]"===i.call(a)},a.sameType=function(b,c){return a.nan(b)||a.nan(c)?a.nan(b)===a.nan(c):i.call(b)===i.call(c)},a.sameType.api=["not"],a.string=function(a){return"[object String]"===i.call(a)},a["char"]=function(b){return a.string(b)&&1===b.length},a.undefined=function(a){return void 0===a},a.empty=function(b){if(a.object(b)){var c=Object.getOwnPropertyNames(b).length;return 0===c||1===c&&a.array(b)||2===c&&a.arguments(b)?!0:!1}return""===b},a.existy=function(a){return null!==a&&void 0!==a},a.truthy=function(b){return a.existy(b)&&b!==!1&&a.not.nan(b)&&""!==b&&0!==b},a.falsy=b(a.truthy),a.space=function(b){if(a["char"](b)){var c=b.charCodeAt(0);return c>8&&14>c||32===c}return!1},a.equal=function(b,c){return a.all.number(b,c)?b===c&&1/b===1/c:a.all.string(b,c)||a.all.regexp(b,c)?""+b==""+c:a.all["boolean"](b,c)?b===c:!1},a.equal.api=["not"],a.even=function(b){return a.number(b)&&b%2===0},a.odd=function(b){return a.number(b)&&b%2!==0},a.positive=function(b){return a.number(b)&&b>0},a.negative=function(b){return a.number(b)&&0>b},a.above=function(b,c){return a.all.number(b,c)&&b>c},a.above.api=["not"],a.under=function(b,c){return a.all.number(b,c)&&c>b},a.under.api=["not"],a.within=function(b,c,d){return a.all.number(b,c,d)&&b>c&&d>b},a.within.api=["not"],a.decimal=function(b){return a.number(b)&&b%1!==0},a.integer=function(b){return a.number(b)&&b%1===0},a.finite=isFinite||function(b){return 1/0!==b&&b!==-1/0&&a.not.nan(b)},a.infinite=b(a.finite);var l={url:/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,creditCard:/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/,alphaNumeric:/^[A-Za-z0-9]+$/,timeString:/^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/,dateString:/^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/,usZipCode:/^[0-9]{5}(?:-[0-9]{4})?$/,caPostalCode:/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]?[0-9][A-Z][0-9]$/,ukPostCode:/^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/,nanpPhone:/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,eppPhone:/^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/,socialSecurityNumber:/^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/,affirmative:/^(?:1|t(?:rue)?|y(?:es)?|ok(?:ay)?)$/,hexadecimal:/^[0-9a-fA-F]+$/,hexColor:/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,ipv4:/^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,ipv6:/^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,ip:/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/};for(var m in l)l.hasOwnProperty(m)&&e(m,l);a.include=String.prototype.includes||function(a,b){return a.indexOf(b)>-1},a.include.api=["not"],a.upperCase=function(b){return a.string(b)&&b===b.toUpperCase()},a.lowerCase=function(b){return a.string(b)&&b===b.toLowerCase()},a.startWith=function(b,c){return a.string(b)&&0===b.indexOf(c)},a.startWith.api=["not"],a.endWith=function(b,c){return a.string(b)&&b.indexOf(c)===b.length-c.length},a.endWith.api=["not"],a.capitalized=function(b){if(a.not.string(b))return!1;for(var c=b.split(" "),d=[],e=0;e<c.length;e++)d.push(c[e][0]===c[e][0].toUpperCase());return a.all.truthy.apply(null,d)};var n=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],o=["january","february","march","april","may","june","july","august","september","october","november","december"];if(a.today=function(b){var c=new Date,d=c.toDateString();return a.date(b)&&b.toDateString()===d},a.yesterday=function(b){var c=new Date,d=new Date(c.setDate(c.getDate()-1)).toDateString();return a.date(b)&&b.toDateString()===d},a.tomorrow=function(b){var c=new Date,d=new Date(c.setDate(c.getDate()+1)).toDateString();return a.date(b)&&b.toDateString()===d},a.past=function(b){var c=new Date;return a.date(b)&&b.getTime()<c.getTime()},a.future=b(a.past),a.day=function(b,c){return a.date(b)&&c.toLowerCase()===n[b.getDay()]},a.day.api=["not"],a.month=function(b,c){return a.date(b)&&c.toLowerCase()===o[b.getMonth()]},a.month.api=["not"],a.year=function(b,c){return a.date(b)&&a.number(c)&&c===b.getFullYear()},a.year.api=["not"],a.weekend=function(b){return a.date(b)&&(6===b.getDay()||0===b.getDay())},a.weekday=b(a.weekend),a.inDateRange=function(b,c,d){if(a.not.date(b)||a.not.date(c)||a.not.date(d))return!1;var e=b.getTime(),f=c.getTime(),g=d.getTime();return e>f&&g>e},a.inDateRange.api=["not"],a.inLastWeek=function(b){return a.inDateRange(b,new Date((new Date).setDate((new Date).getDate()-7)),new Date)},a.inLastMonth=function(b){return a.inDateRange(b,new Date((new Date).setMonth((new Date).getMonth()-1)),new Date)},a.inLastYear=function(b){return a.inDateRange(b,new Date((new Date).setFullYear((new Date).getFullYear()-1)),new Date)},a.inNextWeek=function(b){return a.inDateRange(b,new Date,new Date((new Date).setDate((new Date).getDate()+7)))},a.inNextMonth=function(b){return a.inDateRange(b,new Date,new Date((new Date).setMonth((new Date).getMonth()+1)))},a.inNextYear=function(b){return a.inDateRange(b,new Date,new Date((new Date).setFullYear((new Date).getFullYear()+1)))},a.quarterOfYear=function(b,c){return a.date(b)&&a.number(c)&&c===Math.floor((b.getMonth()+3)/3)},a.quarterOfYear.api=["not"],a.dayLightSavingTime=function(a){var b=new Date(a.getFullYear(),0,1),c=new Date(a.getFullYear(),6,1),d=Math.max(b.getTimezoneOffset(),c.getTimezoneOffset());return a.getTimezoneOffset()<d},"undefined"!=typeof window){var p="navigator"in window&&"userAgent"in navigator&&navigator.userAgent.toLowerCase()||"",q="navigator"in window&&"vendor"in navigator&&navigator.vendor.toLowerCase()||"",r="navigator"in window&&"appVersion"in navigator&&navigator.appVersion.toLowerCase()||"";a.chrome=function(){return/chrome|chromium/i.test(p)&&/google inc/.test(q)},a.chrome.api=["not"],a.firefox=function(){return/firefox/i.test(p)},a.firefox.api=["not"],a.ie=function(a){return a?a>=11?"ActiveXObject"in window:new RegExp("msie "+a).test(p):/msie/i.test(p)||"ActiveXObject"in window},a.ie.api=["not"],a.opera=function(){return/opr/i.test(p)},a.opera.api=["not"],a.safari=function(){return/safari/i.test(p)&&/apple computer/i.test(q)},a.safari.api=["not"],a.ios=function(){return a.iphone()||a.ipad()||a.ipod()},a.ios.api=["not"],a.iphone=function(){return/iphone/i.test(p)},a.iphone.api=["not"],a.ipad=function(){return/ipad/i.test(p)},a.ipad.api=["not"],a.ipod=function(){return/ipod/i.test(p)},a.ipod.api=["not"],a.android=function(){return/android/i.test(p)},a.android.api=["not"],a.androidPhone=function(){return/android/i.test(p)&&/mobile/i.test(p)},a.androidPhone.api=["not"],a.androidTablet=function(){return/android/i.test(p)&&!/mobile/i.test(p)},a.androidTablet.api=["not"],a.blackberry=function(){return/blackberry/i.test(p)},a.blackberry.api=["not"],a.desktop=function(){return a.not.mobile()&&a.not.tablet()},a.desktop.api=["not"],a.linux=function(){return/linux/i.test(r)},a.linux.api=["not"],a.mac=function(){return/mac/i.test(r)},a.mac.api=["not"],a.windows=function(){return/win/i.test(r)},a.windows.api=["not"],a.windowsPhone=function(){return a.windows()&&/phone/i.test(p)},a.windowsPhone.api=["not"],a.windowsTablet=function(){return a.windows()&&a.not.windowsPhone()&&/touch/i.test(p)},a.windowsTablet.api=["not"],a.mobile=function(){return a.iphone()||a.ipod()||a.androidPhone()||a.blackberry()||a.windowsPhone()},a.mobile.api=["not"],a.tablet=function(){return a.ipad()||a.androidTablet()||a.windowsTablet()},a.tablet.api=["not"],a.online=function(){return navigator.onLine},a.online.api=["not"],a.offline=b(a.online),a.offline.api=["not"]}return a.propertyCount=function(b,c){if(!a.object(b)||!a.number(c))return!1;if(Object.keys)return Object.keys(b).length===c;var d,e=[];for(d in b)k.call(b,d)&&e.push(d);return e.length===c},a.propertyCount.api=["not"],a.propertyDefined=function(b,c){return a.object(b)&&a.string(c)&&c in b},a.propertyDefined.api=["not"],a.windowObject=function(a){return"object"==typeof a&&"setInterval"in a},a.inArray=function(b,c){if(a.not.array(c))return!1;for(var d=0;d<c.length;d++)if(c[d]===b)return!0;return!1},a.inArray.api=["not"],a.sorted=function(b){if(a.not.array(b))return!1;for(var c=0;c<b.length;c++)if(b[c]>b[c+1])return!1;return!0},f(),a.setRegexp=function(a,b){for(var c in l)k.call(l,c)&&b===c&&(l[c]=a)},a.setNamespace=function(){return g.is=h,this},a});
/*! jQuery UI - v1.11.1 - 2014-10-11
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, draggable.js, resizable.js, button.js, spinner.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var n=0,a=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,n=a.call(arguments,1),o=0,r=n.length;r>o;o++)for(i in n[o])s=n[o][i],n[o].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(n){var o="string"==typeof n,r=a.call(arguments,1),h=this;return n=!o&&r.length?e.widget.extend.apply(null,[n].concat(r)):n,o?this.each(function(){var i,a=e.data(this,s);return"instance"===n?(h=a,!1):a?e.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,r),i!==a&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+n+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+n+"'")}):this.each(function(){var t=e.data(this,s);t?(t.option(n||{}),t._init&&t._init()):e.data(this,s,new i(n,this))}),h}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var o=!1;e(document).mouseup(function(){o=!1}),e.widget("ui.mouse",{version:"1.11.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!o){this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),o=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):t.which?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),o=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,N=e.extend({},y),M=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?N.left-=d:"center"===n.my[0]&&(N.left-=d/2),"bottom"===n.my[1]?N.top-=c:"center"===n.my[1]&&(N.top-=c/2),N.left+=M[0],N.top+=M[1],a||(N.left=h(N.left),N.top=h(N.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](N,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+M[0],p[1]+M[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-N.left,i=t+m-d,s=v.top-N.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:N.left,top:N.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(N,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,e.top+p+f+m>u&&(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,e.top+p+f+m>d&&(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.draggable",e.ui.mouse,{version:"1.11.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.document[0],s=this.options;try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(n){}return this.helper||s.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(s.iframeFix===!0?"iframe":s.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=s.options,a=e.extend({},i,{item:s.element});s.sortables=[],e(n.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,a))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});e.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,n))})},drag:function(t,i,s){var n=this;e.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,e.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",t),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",t),s.dropped=!1)
})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left,l=h+s.snapElements[c].width,u=s.snapElements[c].top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top-s.margins.top),a&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top-s.margins.top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left-s.margins.left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left-s.margins.left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-y),a=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top-s.margins.top),a&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top-s.margins.top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left-s.margins.left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left-s.margins.left)),!s.snapElements[c].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable,e.widget("ui.resizable",e.ui.mouse,{version:"1.11.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=this.element.children(this.handles[i]).first().show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var i,s,n,a=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),a.containment&&(i+=e(a.containment).scrollLeft()||0,s+=e(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===n?this.axis+"-resize":n),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,s,n=this.originalMousePosition,a=this.axis,o=t.pageX-n.left||0,r=t.pageY-n.top||0,h=this._change[a];return this._updatePrevProperties(),h?(i=h.apply(this,[t,o,r]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,i,s,n,a,o=this.options;a={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=a.minHeight*this.aspectRatio,s=a.minWidth/this.aspectRatio,i=a.maxHeight*this.aspectRatio,n=a.maxWidth/this.aspectRatio,t>a.minWidth&&(a.minWidth=t),s>a.minHeight&&(a.minHeight=s),a.maxWidth>i&&(a.maxWidth=i),a.maxHeight>n&&(a.maxHeight=n)),this._vBoundaries=a},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,i=this.size,s=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===s&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"===s&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,i=this.axis,s=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,a=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return a&&(e.width=t.minWidth),o&&(e.height=t.minHeight),s&&(e.width=t.maxWidth),n&&(e.height=t.maxHeight),a&&l&&(e.left=r-t.minWidth),s&&l&&(e.left=r-t.maxWidth),o&&u&&(e.top=h-t.minHeight),n&&u&&(e.top=h-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_getPaddingPlusBorderDimensions:function(e){for(var t=0,i=[],s=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],n=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];4>t;t++)i[t]=parseInt(s[t],10)||0,i[t]+=parseInt(n[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;this._proportionallyResizeElements.length>t;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,i,s,n,a,o,r,h=e(this).resizable("instance"),l=h.options,u=h.element,d=l.containment,c=d instanceof e?d.get(0):/parent/.test(d)?u.parent().get(0):d;c&&(h.containerElement=e(c),/document/.test(d)||d===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(c),i=[],e(["Top","Right","Left","Bottom"]).each(function(e,s){i[e]=h._num(t.css("padding"+s))}),h.containerOffset=t.offset(),h.containerPosition=t.position(),h.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,a=h.containerSize.width,o=h._hasScroll(c,"left")?c.scrollWidth:a,r=h._hasScroll(c)?c.scrollHeight:n,h.parentData={element:c,left:s.left,top:s.top,width:o,height:r}))},resize:function(t){var i,s,n,a,o=e(this).resizable("instance"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,d={top:0,left:0},c=o.containerElement,p=!0;c[0]!==document&&/static/.test(c.css("position"))&&(d=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-d.left),u&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?h.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-h.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-h.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).resizable("instance"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);i&&i>=0&&(a[t]=i||null)}),t.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,i=e(this).resizable("instance"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,d=Math.round((n.width-a.width)/l)*l,c=Math.round((n.height-a.height)/u)*u,p=a.width+d,f=a.height+c,m=s.maxWidth&&p>s.maxWidth,g=s.maxHeight&&f>s.maxHeight,v=s.minWidth&&s.minWidth>p,y=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),y&&(f+=u),m&&(p-=l),g&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=o.top-c):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=o.left-d):((0>=f-u||0>=p-l)&&(t=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=o.top-c):(f=u-t.height,i.size.height=f,i.position.top=o.top+a.height-f),p-l>0?(i.size.width=p,i.position.left=o.left-d):(p=u-t.height,i.size.width=p,i.position.left=o.left+a.width-p))}}),e.ui.resizable;var r,h="ui-button ui-widget ui-state-default ui-corner-all",l="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",u=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},d=function(t){var i=t.name,s=t.form,n=e([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?e(s).find("[name='"+i+"'][type=radio]"):e("[name='"+i+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),n};e.widget("ui.button",{version:"1.11.1",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,u),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,i=this.options,s="checkbox"===this.type||"radio"===this.type,n=s?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(h).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===r&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||e(this).removeClass(n)}).bind("click"+this.eventNamespace,function(e){i.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),s&&this.element.bind("change"+this.eventNamespace,function(){t.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return i.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var s=t.element[0];d(s).not(s).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return i.disabled?!1:(e(this).addClass("ui-state-active"),r=this,t.document.one("mouseup",function(){r=null}),void 0)}).bind("mouseup"+this.eventNamespace,function(){return i.disabled?!1:(e(this).removeClass("ui-state-active"),void 0)}).bind("keydown"+this.eventNamespace,function(t){return i.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),void 0)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(h+" ui-state-active "+l).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),t&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")),void 0):(this._resetButton(),void 0)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?d(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),void 0;var t=this.buttonElement.removeClass(l),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):a.push("ui-button-text-only"),t.addClass(a.join(" "))}}),e.widget("ui.buttonset",{version:"1.11.1",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction"),i=this.element.find(this.options.items),s=i.filter(":ui-button");i.not(":ui-button").button(),s.button("refresh"),this.buttons=i.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),e.ui.button,e.widget("ui.spinner",{version:"1.11.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},i=this.element;return e.each(["min","max","step"],function(e,s){var n=i.attr(s);void 0!==n&&n.length&&(t[s]=n)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e),void 0)},mousewheel:function(e,t){if(t){if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()}},"mousedown .ui-spinner-button":function(t){function i(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(t)!==!1&&this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){return e(t.currentTarget).hasClass("ui-state-active")?this._start(t)===!1?!1:(this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*e.height())&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var i=this.options,s=e.ui.keyCode;switch(t.keyCode){case s.UP:return this._repeat(null,1,t),!0;case s.DOWN:return this._repeat(null,-1,t),!0;case s.PAGE_UP:return this._repeat(null,i.page,t),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return this.spinning||this._trigger("start",e)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(e,t,i){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,i)},e),this._spin(t*this.options.step,i)},_spin:function(e,t){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+e*this._increment(this.counter)),this.spinning&&this._trigger("spin",t,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(t){var i=this.options.incremental;return i?e.isFunction(i)?i(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_adjustValue:function(e){var t,i,s=this.options;return t=null!==s.min?s.min:0,i=e-t,i=Math.round(i/s.step)*s.step,e=t+i,e=parseFloat(e.toFixed(this._precision())),null!==s.max&&e>s.max?s.max:null!==s.min&&s.min>e?s.min:e},_stop:function(e){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e))},_setOption:function(e,t){if("culture"===e||"numberFormat"===e){var i=this._parse(this.element.val());return this.options[e]=t,this.element.val(this._format(i)),void 0}("max"===e||"min"===e||"step"===e)&&"string"==typeof t&&(t=this._parse(t)),"icons"===e&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),this._super(e,t),"disabled"===e&&(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable"))},_setOptions:s(function(e){this._super(e)}),_parse:function(e){return"string"==typeof e&&""!==e&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),""===e||isNaN(e)?null:e},_format:function(e){return""===e?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var e=this.value();return null===e?!1:e===this._adjustValue(e)},_value:function(e,t){var i;""!==e&&(i=this._parse(e),null!==i&&(t||(i=this._adjustValue(i)),e=this._format(i))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:s(function(e){this._stepUp(e)}),_stepUp:function(e){this._start()&&(this._spin((e||1)*this.options.step),this._stop())},stepDown:s(function(e){this._stepDown(e)}),_stepDown:function(e){this._start()&&(this._spin((e||1)*-this.options.step),this._stop())},pageUp:s(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:s(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){return arguments.length?(s(this._value).call(this,e),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}})});
/*
 * jQuery Blueberry Slider v0.4 BETA
 * http://marktyrrell.com/labs/blueberry/
 *
 * Copyright (C) 2011, Mark Tyrrell <me@marktyrrell.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

(function($){
	$.fn.extend({
		blueberry: function(options) {

			//default values for plugin options
			var defaults = {
				interval: 5000,
				duration: 500,
				lineheight: 1,
				height: 'auto', //reserved
				hoverpause: false,
				pager: true,
				nav: true, //reserved
				keynav: true
			}
			var options =  $.extend(defaults, options);
 
			return this.each(function() {
				var o = options;
				var obj = $(this);

				//store the slide and pager li
				var slides = $('.slides li', obj);
				var pager = $('.pager li', obj);

				//set initial current and next slide index values
				var current = 0;
				var next = current+1;

				//get height and width of initial slide image and calculate size ratio
				var imgHeight = slides.eq(current).find('img').height();
				var imgWidth = slides.eq(current).find('img').width();
				var imgRatio = imgWidth/imgHeight;

				//define vars for setsize function
				var sliderWidth = 0;
				var cropHeight = 0;

				//hide all slides, fade in the first, add active class to first slide
				slides.hide().eq(current).fadeIn(o.duration).addClass('active');
				

				//build pager if it doesn't already exist and if enabled
				if(pager.length) {
					pager.eq(current).addClass('active');
				} else if(o.pager){
					obj.append('<ul class="pager"></ul>');
					slides.each(function(index) {
						$('.pager', obj).append('<li><a href="#"><span>'+index+'</span></a></li>')
					});
					pager = $('.pager li', obj);
					pager.eq(current).addClass('active');
				}

				//rotate to selected slide on pager click
				if(pager){
					$('a', pager).click(function() {
						//stop the timer
						clearTimeout(obj.play);
						//set the slide index based on pager index
						next = $(this).parent().index();
						//rotate the slides
						rotate();
						return false;
					});
				}

				//primary function to change slides
				var rotate = function(){
					//fade out current slide and remove active class,
					//fade in next slide and add active class
					slides.eq(current).fadeOut(o.duration).removeClass('active')
						.end().eq(next).fadeIn(o.duration).addClass('active').queue(function(){
							//add rotateTimer function to end of animation queue
							//this prevents animation buildup caused by requestAnimationFrame
							//rotateTimer starts a timer for the next rotate
							rotateTimer();
							$(this).dequeue()
					});

					//update pager to reflect slide change
					if(pager){
						pager.eq(current).removeClass('active')
							.end().eq(next).addClass('active');
					}

					//update current and next vars to reflect slide change
					//set next as first slide if current is the last
					current = next;
					next = current >= slides.length-1 ? 0 : current+1;
				};
				//create a timer to control slide rotation interval
				var rotateTimer = function(){
					obj.play = setTimeout(function(){
						//trigger slide rotate function at end of timer
						rotate();
					}, o.interval);
				};
				//start the timer for the first time
				rotateTimer();

				//pause the slider on hover
				//disabled by default due to bug
				if(o.hoverpause){
					slides.hover(function(){
						//stop the timer in mousein
						clearTimeout(obj.play);
					}, function(){
						//start the timer on mouseout
						rotateTimer();
					});
				}

				//calculate and set height based on image width/height ratio and specified line height
				var setsize = function(){
					sliderWidth = $('.slides', obj).width();
					cropHeight = Math.floor(((sliderWidth/imgRatio)/o.lineheight))*o.lineheight;

					$('.slides', obj).css({height: cropHeight});
				};
				setsize();

				//bind setsize function to window resize event
				$(window).resize(function(){
					setsize();
				});
				
				

				//Add keyboard navigation

				if(o.keynav){
					$(document).keyup(function(e){

						switch (e.which) {

							case 39: case 32: //right arrow & space

								clearTimeout(obj.play);

								rotate();

								break;


							case 37: // left arrow
								clearTimeout(obj.play);
								next = current - 1;
								rotate();

								break;
						}

					});
				}


			});
		}
	});
})(jQuery);

/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));

/**
 * jquery.Jcrop.js v0.9.12
 * jQuery Image Cropping Plugin - released under MIT License 
 * Author: Kelly Hallman <khallman@gmail.com>
 * http://github.com/tapmodo/Jcrop
 * Copyright (c) 2008-2013 Tapmodo Interactive LLC {{{
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * }}}
 */

(function ($) {

  $.Jcrop = function (obj, opt) {
    var options = $.extend({}, $.Jcrop.defaults),
        docOffset,
        _ua = navigator.userAgent.toLowerCase(),
        is_msie = /msie/.test(_ua),
        ie6mode = /msie [1-6]\./.test(_ua);

    // Internal Methods {{{
    function px(n) {
      return Math.round(n) + 'px';
    }
    function cssClass(cl) {
      return options.baseClass + '-' + cl;
    }
    function supportsColorFade() {
      return $.fx.step.hasOwnProperty('backgroundColor');
    }
    function getPos(obj) //{{{
    {
      var pos = $(obj).offset();
      return [pos.left, pos.top];
    }
    //}}}
    function mouseAbs(e) //{{{
    {
      return [(e.pageX - docOffset[0]), (e.pageY - docOffset[1])];
    }
    //}}}
    function setOptions(opt) //{{{
    {
      if (typeof(opt) !== 'object') opt = {};
      options = $.extend(options, opt);

      $.each(['onChange','onSelect','onRelease','onDblClick'],function(i,e) {
        if (typeof(options[e]) !== 'function') options[e] = function () {};
      });
    }
    //}}}
    function startDragMode(mode, pos, touch) //{{{
    {
      docOffset = getPos($img);
      Tracker.setCursor(mode === 'move' ? mode : mode + '-resize');

      if (mode === 'move') {
        return Tracker.activateHandlers(createMover(pos), doneSelect, touch);
      }

      var fc = Coords.getFixed();
      var opp = oppLockCorner(mode);
      var opc = Coords.getCorner(oppLockCorner(opp));

      Coords.setPressed(Coords.getCorner(opp));
      Coords.setCurrent(opc);

      Tracker.activateHandlers(dragmodeHandler(mode, fc), doneSelect, touch);
    }
    //}}}
    function dragmodeHandler(mode, f) //{{{
    {
      return function (pos) {
        if (!options.aspectRatio) {
          switch (mode) {
          case 'e':
            pos[1] = f.y2;
            break;
          case 'w':
            pos[1] = f.y2;
            break;
          case 'n':
            pos[0] = f.x2;
            break;
          case 's':
            pos[0] = f.x2;
            break;
          }
        } else {
          switch (mode) {
          case 'e':
            pos[1] = f.y + 1;
            break;
          case 'w':
            pos[1] = f.y + 1;
            break;
          case 'n':
            pos[0] = f.x + 1;
            break;
          case 's':
            pos[0] = f.x + 1;
            break;
          }
        }
        Coords.setCurrent(pos);
        Selection.update();
      };
    }
    //}}}
    function createMover(pos) //{{{
    {
      var lloc = pos;
      KeyManager.watchKeys();

      return function (pos) {
        Coords.moveOffset([pos[0] - lloc[0], pos[1] - lloc[1]]);
        lloc = pos;

        Selection.update();
      };
    }
    //}}}
    function oppLockCorner(ord) //{{{
    {
      switch (ord) {
      case 'n':
        return 'sw';
      case 's':
        return 'nw';
      case 'e':
        return 'nw';
      case 'w':
        return 'ne';
      case 'ne':
        return 'sw';
      case 'nw':
        return 'se';
      case 'se':
        return 'nw';
      case 'sw':
        return 'ne';
      }
    }
    //}}}
    function createDragger(ord) //{{{
    {
      return function (e) {
        if (options.disabled) {
          return false;
        }
        if ((ord === 'move') && !options.allowMove) {
          return false;
        }
        
        // Fix position of crop area when dragged the very first time.
        // Necessary when crop image is in a hidden element when page is loaded.
        docOffset = getPos($img);

        btndown = true;
        startDragMode(ord, mouseAbs(e));
        e.stopPropagation();
        e.preventDefault();
        return false;
      };
    }
    //}}}
    function presize($obj, w, h) //{{{
    {
      var nw = $obj.width(),
          nh = $obj.height();
      if ((nw > w) && w > 0) {
        nw = w;
        nh = (w / $obj.width()) * $obj.height();
      }
      if ((nh > h) && h > 0) {
        nh = h;
        nw = (h / $obj.height()) * $obj.width();
      }
      xscale = $obj.width() / nw;
      yscale = $obj.height() / nh;
      $obj.width(nw).height(nh);
    }
    //}}}
    function unscale(c) //{{{
    {
      return {
        x: c.x * xscale,
        y: c.y * yscale,
        x2: c.x2 * xscale,
        y2: c.y2 * yscale,
        w: c.w * xscale,
        h: c.h * yscale
      };
    }
    //}}}
    function doneSelect(pos) //{{{
    {
      var c = Coords.getFixed();
      if ((c.w > options.minSelect[0]) && (c.h > options.minSelect[1])) {
        Selection.enableHandles();
        Selection.done();
      } else {
        Selection.release();
      }
      Tracker.setCursor(options.allowSelect ? 'crosshair' : 'default');
    }
    //}}}
    function newSelection(e) //{{{
    {
      if (options.disabled) {
        return false;
      }
      if (!options.allowSelect) {
        return false;
      }
      btndown = true;
      docOffset = getPos($img);
      Selection.disableHandles();
      Tracker.setCursor('crosshair');
      var pos = mouseAbs(e);
      Coords.setPressed(pos);
      Selection.update();
      Tracker.activateHandlers(selectDrag, doneSelect, e.type.substring(0,5)==='touch');
      KeyManager.watchKeys();

      e.stopPropagation();
      e.preventDefault();
      return false;
    }
    //}}}
    function selectDrag(pos) //{{{
    {
      Coords.setCurrent(pos);
      Selection.update();
    }
    //}}}
    function newTracker() //{{{
    {
      var trk = $('<div></div>').addClass(cssClass('tracker'));
      if (is_msie) {
        trk.css({
          opacity: 0,
          backgroundColor: 'white'
        });
      }
      return trk;
    }
    //}}}

    // }}}
    // Initialization {{{
    // Sanitize some options {{{
    if (typeof(obj) !== 'object') {
      obj = $(obj)[0];
    }
    if (typeof(opt) !== 'object') {
      opt = {};
    }
    // }}}
    setOptions(opt);
    // Initialize some jQuery objects {{{
    // The values are SET on the image(s) for the interface
    // If the original image has any of these set, they will be reset
    // However, if you destroy() the Jcrop instance the original image's
    // character in the DOM will be as you left it.
    var img_css = {
      border: 'none',
      visibility: 'visible',
      margin: 0,
      padding: 0,
      position: 'absolute',
      top: 0,
      left: 0
    };

    var $origimg = $(obj),
      img_mode = true;

    if (obj.tagName == 'IMG') {
      // Fix size of crop image.
      // Necessary when crop image is within a hidden element when page is loaded.
      if ($origimg[0].width != 0 && $origimg[0].height != 0) {
        // Obtain dimensions from contained img element.
        $origimg.width($origimg[0].width);
        $origimg.height($origimg[0].height);
      } else {
        // Obtain dimensions from temporary image in case the original is not loaded yet (e.g. IE 7.0). 
        var tempImage = new Image();
        tempImage.src = $origimg[0].src;
        $origimg.width(tempImage.width);
        $origimg.height(tempImage.height);
      } 

      var $img = $origimg.clone().removeAttr('id').css(img_css).show();

      $img.width($origimg.width());
      $img.height($origimg.height());
      $origimg.after($img).hide();

    } else {
      $img = $origimg.css(img_css).show();
      img_mode = false;
      if (options.shade === null) { options.shade = true; }
    }

    presize($img, options.boxWidth, options.boxHeight);

    var boundx = $img.width(),
        boundy = $img.height(),
        
        
        $div = $('<div />').width(boundx).height(boundy).addClass(cssClass('holder')).css({
        position: 'relative',
        backgroundColor: options.bgColor
      }).insertAfter($origimg).append($img);

    if (options.addClass) {
      $div.addClass(options.addClass);
    }

    var $img2 = $('<div />'),

        $img_holder = $('<div />') 
        .width('100%').height('100%').css({
          zIndex: 310,
          position: 'absolute',
          overflow: 'hidden'
        }),

        $hdl_holder = $('<div />') 
        .width('100%').height('100%').css('zIndex', 320), 

        $sel = $('<div />') 
        .css({
          position: 'absolute',
          zIndex: 600
        }).dblclick(function(){
          var c = Coords.getFixed();
          options.onDblClick.call(api,c);
        }).insertBefore($img).append($img_holder, $hdl_holder); 

    if (img_mode) {

      $img2 = $('<img />')
          .attr('src', $img.attr('src')).css(img_css).width(boundx).height(boundy),

      $img_holder.append($img2);

    }

    if (ie6mode) {
      $sel.css({
        overflowY: 'hidden'
      });
    }

    var bound = options.boundary;
    var $trk = newTracker().width(boundx + (bound * 2)).height(boundy + (bound * 2)).css({
      position: 'absolute',
      top: px(-bound),
      left: px(-bound),
      zIndex: 290
    }).mousedown(newSelection);

    /* }}} */
    // Set more variables {{{
    var bgcolor = options.bgColor,
        bgopacity = options.bgOpacity,
        xlimit, ylimit, xmin, ymin, xscale, yscale, enabled = true,
        btndown, animating, shift_down;

    docOffset = getPos($img);
    // }}}
    // }}}
    // Internal Modules {{{
    // Touch Module {{{ 
    var Touch = (function () {
      // Touch support detection function adapted (under MIT License)
      // from code by Jeffrey Sambells - http://github.com/iamamused/
      function hasTouchSupport() {
        var support = {}, events = ['touchstart', 'touchmove', 'touchend'],
            el = document.createElement('div'), i;

        try {
          for(i=0; i<events.length; i++) {
            var eventName = events[i];
            eventName = 'on' + eventName;
            var isSupported = (eventName in el);
            if (!isSupported) {
              el.setAttribute(eventName, 'return;');
              isSupported = typeof el[eventName] == 'function';
            }
            support[events[i]] = isSupported;
          }
          return support.touchstart && support.touchend && support.touchmove;
        }
        catch(err) {
          return false;
        }
      }

      function detectSupport() {
        if ((options.touchSupport === true) || (options.touchSupport === false)) return options.touchSupport;
          else return hasTouchSupport();
      }
      return {
        createDragger: function (ord) {
          return function (e) {
            if (options.disabled) {
              return false;
            }
            if ((ord === 'move') && !options.allowMove) {
              return false;
            }
            docOffset = getPos($img);
            btndown = true;
            startDragMode(ord, mouseAbs(Touch.cfilter(e)), true);
            e.stopPropagation();
            e.preventDefault();
            return false;
          };
        },
        newSelection: function (e) {
          return newSelection(Touch.cfilter(e));
        },
        cfilter: function (e){
          e.pageX = e.originalEvent.changedTouches[0].pageX;
          e.pageY = e.originalEvent.changedTouches[0].pageY;
          return e;
        },
        isSupported: hasTouchSupport,
        support: detectSupport()
      };
    }());
    // }}}
    // Coords Module {{{
    var Coords = (function () {
      var x1 = 0,
          y1 = 0,
          x2 = 0,
          y2 = 0,
          ox, oy;

      function setPressed(pos) //{{{
      {
        pos = rebound(pos);
        x2 = x1 = pos[0];
        y2 = y1 = pos[1];
      }
      //}}}
      function setCurrent(pos) //{{{
      {
        pos = rebound(pos);
        ox = pos[0] - x2;
        oy = pos[1] - y2;
        x2 = pos[0];
        y2 = pos[1];
      }
      //}}}
      function getOffset() //{{{
      {
        return [ox, oy];
      }
      //}}}
      function moveOffset(offset) //{{{
      {
        var ox = offset[0],
            oy = offset[1];

        if (0 > x1 + ox) {
          ox -= ox + x1;
        }
        if (0 > y1 + oy) {
          oy -= oy + y1;
        }

        if (boundy < y2 + oy) {
          oy += boundy - (y2 + oy);
        }
        if (boundx < x2 + ox) {
          ox += boundx - (x2 + ox);
        }

        x1 += ox;
        x2 += ox;
        y1 += oy;
        y2 += oy;
      }
      //}}}
      function getCorner(ord) //{{{
      {
        var c = getFixed();
        switch (ord) {
        case 'ne':
          return [c.x2, c.y];
        case 'nw':
          return [c.x, c.y];
        case 'se':
          return [c.x2, c.y2];
        case 'sw':
          return [c.x, c.y2];
        }
      }
      //}}}
      function getFixed() //{{{
      {
        if (!options.aspectRatio) {
          return getRect();
        }
        // This function could use some optimization I think...
        var aspect = options.aspectRatio,
            min_x = options.minSize[0] / xscale,
            
            
            //min_y = options.minSize[1]/yscale,
            max_x = options.maxSize[0] / xscale,
            max_y = options.maxSize[1] / yscale,
            rw = x2 - x1,
            rh = y2 - y1,
            rwa = Math.abs(rw),
            rha = Math.abs(rh),
            real_ratio = rwa / rha,
            xx, yy, w, h;

        if (max_x === 0) {
          max_x = boundx * 10;
        }
        if (max_y === 0) {
          max_y = boundy * 10;
        }
        if (real_ratio < aspect) {
          yy = y2;
          w = rha * aspect;
          xx = rw < 0 ? x1 - w : w + x1;

          if (xx < 0) {
            xx = 0;
            h = Math.abs((xx - x1) / aspect);
            yy = rh < 0 ? y1 - h : h + y1;
          } else if (xx > boundx) {
            xx = boundx;
            h = Math.abs((xx - x1) / aspect);
            yy = rh < 0 ? y1 - h : h + y1;
          }
        } else {
          xx = x2;
          h = rwa / aspect;
          yy = rh < 0 ? y1 - h : y1 + h;
          if (yy < 0) {
            yy = 0;
            w = Math.abs((yy - y1) * aspect);
            xx = rw < 0 ? x1 - w : w + x1;
          } else if (yy > boundy) {
            yy = boundy;
            w = Math.abs(yy - y1) * aspect;
            xx = rw < 0 ? x1 - w : w + x1;
          }
        }

        // Magic %-)
        if (xx > x1) { // right side
          if (xx - x1 < min_x) {
            xx = x1 + min_x;
          } else if (xx - x1 > max_x) {
            xx = x1 + max_x;
          }
          if (yy > y1) {
            yy = y1 + (xx - x1) / aspect;
          } else {
            yy = y1 - (xx - x1) / aspect;
          }
        } else if (xx < x1) { // left side
          if (x1 - xx < min_x) {
            xx = x1 - min_x;
          } else if (x1 - xx > max_x) {
            xx = x1 - max_x;
          }
          if (yy > y1) {
            yy = y1 + (x1 - xx) / aspect;
          } else {
            yy = y1 - (x1 - xx) / aspect;
          }
        }

        if (xx < 0) {
          x1 -= xx;
          xx = 0;
        } else if (xx > boundx) {
          x1 -= xx - boundx;
          xx = boundx;
        }

        if (yy < 0) {
          y1 -= yy;
          yy = 0;
        } else if (yy > boundy) {
          y1 -= yy - boundy;
          yy = boundy;
        }

        return makeObj(flipCoords(x1, y1, xx, yy));
      }
      //}}}
      function rebound(p) //{{{
      {
        if (p[0] < 0) p[0] = 0;
        if (p[1] < 0) p[1] = 0;

        if (p[0] > boundx) p[0] = boundx;
        if (p[1] > boundy) p[1] = boundy;

        return [Math.round(p[0]), Math.round(p[1])];
      }
      //}}}
      function flipCoords(x1, y1, x2, y2) //{{{
      {
        var xa = x1,
            xb = x2,
            ya = y1,
            yb = y2;
        if (x2 < x1) {
          xa = x2;
          xb = x1;
        }
        if (y2 < y1) {
          ya = y2;
          yb = y1;
        }
        return [xa, ya, xb, yb];
      }
      //}}}
      function getRect() //{{{
      {
        var xsize = x2 - x1,
            ysize = y2 - y1,
            delta;

        if (xlimit && (Math.abs(xsize) > xlimit)) {
          x2 = (xsize > 0) ? (x1 + xlimit) : (x1 - xlimit);
        }
        if (ylimit && (Math.abs(ysize) > ylimit)) {
          y2 = (ysize > 0) ? (y1 + ylimit) : (y1 - ylimit);
        }

        if (ymin / yscale && (Math.abs(ysize) < ymin / yscale)) {
          y2 = (ysize > 0) ? (y1 + ymin / yscale) : (y1 - ymin / yscale);
        }
        if (xmin / xscale && (Math.abs(xsize) < xmin / xscale)) {
          x2 = (xsize > 0) ? (x1 + xmin / xscale) : (x1 - xmin / xscale);
        }

        if (x1 < 0) {
          x2 -= x1;
          x1 -= x1;
        }
        if (y1 < 0) {
          y2 -= y1;
          y1 -= y1;
        }
        if (x2 < 0) {
          x1 -= x2;
          x2 -= x2;
        }
        if (y2 < 0) {
          y1 -= y2;
          y2 -= y2;
        }
        if (x2 > boundx) {
          delta = x2 - boundx;
          x1 -= delta;
          x2 -= delta;
        }
        if (y2 > boundy) {
          delta = y2 - boundy;
          y1 -= delta;
          y2 -= delta;
        }
        if (x1 > boundx) {
          delta = x1 - boundy;
          y2 -= delta;
          y1 -= delta;
        }
        if (y1 > boundy) {
          delta = y1 - boundy;
          y2 -= delta;
          y1 -= delta;
        }

        return makeObj(flipCoords(x1, y1, x2, y2));
      }
      //}}}
      function makeObj(a) //{{{
      {
        return {
          x: a[0],
          y: a[1],
          x2: a[2],
          y2: a[3],
          w: a[2] - a[0],
          h: a[3] - a[1]
        };
      }
      //}}}

      return {
        flipCoords: flipCoords,
        setPressed: setPressed,
        setCurrent: setCurrent,
        getOffset: getOffset,
        moveOffset: moveOffset,
        getCorner: getCorner,
        getFixed: getFixed
      };
    }());

    //}}}
    // Shade Module {{{
    var Shade = (function() {
      var enabled = false,
          holder = $('<div />').css({
            position: 'absolute',
            zIndex: 240,
            opacity: 0
          }),
          shades = {
            top: createShade(),
            left: createShade().height(boundy),
            right: createShade().height(boundy),
            bottom: createShade()
          };

      function resizeShades(w,h) {
        shades.left.css({ height: px(h) });
        shades.right.css({ height: px(h) });
      }
      function updateAuto()
      {
        return updateShade(Coords.getFixed());
      }
      function updateShade(c)
      {
        shades.top.css({
          left: px(c.x),
          width: px(c.w),
          height: px(c.y)
        });
        shades.bottom.css({
          top: px(c.y2),
          left: px(c.x),
          width: px(c.w),
          height: px(boundy-c.y2)
        });
        shades.right.css({
          left: px(c.x2),
          width: px(boundx-c.x2)
        });
        shades.left.css({
          width: px(c.x)
        });
      }
      function createShade() {
        return $('<div />').css({
          position: 'absolute',
          backgroundColor: options.shadeColor||options.bgColor
        }).appendTo(holder);
      }
      function enableShade() {
        if (!enabled) {
          enabled = true;
          holder.insertBefore($img);
          updateAuto();
          Selection.setBgOpacity(1,0,1);
          $img2.hide();

          setBgColor(options.shadeColor||options.bgColor,1);
          if (Selection.isAwake())
          {
            setOpacity(options.bgOpacity,1);
          }
            else setOpacity(1,1);
        }
      }
      function setBgColor(color,now) {
        colorChangeMacro(getShades(),color,now);
      }
      function disableShade() {
        if (enabled) {
          holder.remove();
          $img2.show();
          enabled = false;
          if (Selection.isAwake()) {
            Selection.setBgOpacity(options.bgOpacity,1,1);
          } else {
            Selection.setBgOpacity(1,1,1);
            Selection.disableHandles();
          }
          colorChangeMacro($div,0,1);
        }
      }
      function setOpacity(opacity,now) {
        if (enabled) {
          if (options.bgFade && !now) {
            holder.animate({
              opacity: 1-opacity
            },{
              queue: false,
              duration: options.fadeTime
            });
          }
          else holder.css({opacity:1-opacity});
        }
      }
      function refreshAll() {
        options.shade ? enableShade() : disableShade();
        if (Selection.isAwake()) setOpacity(options.bgOpacity);
      }
      function getShades() {
        return holder.children();
      }

      return {
        update: updateAuto,
        updateRaw: updateShade,
        getShades: getShades,
        setBgColor: setBgColor,
        enable: enableShade,
        disable: disableShade,
        resize: resizeShades,
        refresh: refreshAll,
        opacity: setOpacity
      };
    }());
    // }}}
    // Selection Module {{{
    var Selection = (function () {
      var awake,
          hdep = 370,
          borders = {},
          handle = {},
          dragbar = {},
          seehandles = false;

      // Private Methods
      function insertBorder(type) //{{{
      {
        var jq = $('<div />').css({
          position: 'absolute',
          opacity: options.borderOpacity
        }).addClass(cssClass(type));
        $img_holder.append(jq);
        return jq;
      }
      //}}}
      function dragDiv(ord, zi) //{{{
      {
        var jq = $('<div />').mousedown(createDragger(ord)).css({
          cursor: ord + '-resize',
          position: 'absolute',
          zIndex: zi
        }).addClass('ord-'+ord);

        if (Touch.support) {
          jq.bind('touchstart.jcrop', Touch.createDragger(ord));
        }

        $hdl_holder.append(jq);
        return jq;
      }
      //}}}
      function insertHandle(ord) //{{{
      {
        var hs = options.handleSize,

          div = dragDiv(ord, hdep++).css({
            opacity: options.handleOpacity
          }).addClass(cssClass('handle'));

        if (hs) { div.width(hs).height(hs); }

        return div;
      }
      //}}}
      function insertDragbar(ord) //{{{
      {
        return dragDiv(ord, hdep++).addClass('jcrop-dragbar');
      }
      //}}}
      function createDragbars(li) //{{{
      {
        var i;
        for (i = 0; i < li.length; i++) {
          dragbar[li[i]] = insertDragbar(li[i]);
        }
      }
      //}}}
      function createBorders(li) //{{{
      {
        var cl,i;
        for (i = 0; i < li.length; i++) {
          switch(li[i]){
            case'n': cl='hline'; break;
            case's': cl='hline bottom'; break;
            case'e': cl='vline right'; break;
            case'w': cl='vline'; break;
          }
          borders[li[i]] = insertBorder(cl);
        }
      }
      //}}}
      function createHandles(li) //{{{
      {
        var i;
        for (i = 0; i < li.length; i++) {
          handle[li[i]] = insertHandle(li[i]);
        }
      }
      //}}}
      function moveto(x, y) //{{{
      {
        if (!options.shade) {
          $img2.css({
            top: px(-y),
            left: px(-x)
          });
        }
        $sel.css({
          top: px(y),
          left: px(x)
        });
      }
      //}}}
      function resize(w, h) //{{{
      {
        $sel.width(Math.round(w)).height(Math.round(h));
      }
      //}}}
      function refresh() //{{{
      {
        var c = Coords.getFixed();

        Coords.setPressed([c.x, c.y]);
        Coords.setCurrent([c.x2, c.y2]);

        updateVisible();
      }
      //}}}

      // Internal Methods
      function updateVisible(select) //{{{
      {
        if (awake) {
          return update(select);
        }
      }
      //}}}
      function update(select) //{{{
      {
        var c = Coords.getFixed();

        resize(c.w, c.h);
        moveto(c.x, c.y);
        if (options.shade) Shade.updateRaw(c);

        awake || show();

        if (select) {
          options.onSelect.call(api, unscale(c));
        } else {
          options.onChange.call(api, unscale(c));
        }
      }
      //}}}
      function setBgOpacity(opacity,force,now) //{{{
      {
        if (!awake && !force) return;
        if (options.bgFade && !now) {
          $img.animate({
            opacity: opacity
          },{
            queue: false,
            duration: options.fadeTime
          });
        } else {
          $img.css('opacity', opacity);
        }
      }
      //}}}
      function show() //{{{
      {
        $sel.show();

        if (options.shade) Shade.opacity(bgopacity);
          else setBgOpacity(bgopacity,true);

        awake = true;
      }
      //}}}
      function release() //{{{
      {
        disableHandles();
        $sel.hide();

        if (options.shade) Shade.opacity(1);
          else setBgOpacity(1);

        awake = false;
        options.onRelease.call(api);
      }
      //}}}
      function showHandles() //{{{
      {
        if (seehandles) {
          $hdl_holder.show();
        }
      }
      //}}}
      function enableHandles() //{{{
      {
        seehandles = true;
        if (options.allowResize) {
          $hdl_holder.show();
          return true;
        }
      }
      //}}}
      function disableHandles() //{{{
      {
        seehandles = false;
        $hdl_holder.hide();
      } 
      //}}}
      function animMode(v) //{{{
      {
        if (v) {
          animating = true;
          disableHandles();
        } else {
          animating = false;
          enableHandles();
        }
      } 
      //}}}
      function done() //{{{
      {
        animMode(false);
        refresh();
      } 
      //}}}
      // Insert draggable elements {{{
      // Insert border divs for outline

      if (options.dragEdges && $.isArray(options.createDragbars))
        createDragbars(options.createDragbars);

      if ($.isArray(options.createHandles))
        createHandles(options.createHandles);

      if (options.drawBorders && $.isArray(options.createBorders))
        createBorders(options.createBorders);

      //}}}

      // This is a hack for iOS5 to support drag/move touch functionality
      $(document).bind('touchstart.jcrop-ios',function(e) {
        if ($(e.currentTarget).hasClass('jcrop-tracker')) e.stopPropagation();
      });

      var $track = newTracker().mousedown(createDragger('move')).css({
        cursor: 'move',
        position: 'absolute',
        zIndex: 360
      });

      if (Touch.support) {
        $track.bind('touchstart.jcrop', Touch.createDragger('move'));
      }

      $img_holder.append($track);
      disableHandles();

      return {
        updateVisible: updateVisible,
        update: update,
        release: release,
        refresh: refresh,
        isAwake: function () {
          return awake;
        },
        setCursor: function (cursor) {
          $track.css('cursor', cursor);
        },
        enableHandles: enableHandles,
        enableOnly: function () {
          seehandles = true;
        },
        showHandles: showHandles,
        disableHandles: disableHandles,
        animMode: animMode,
        setBgOpacity: setBgOpacity,
        done: done
      };
    }());
    
    //}}}
    // Tracker Module {{{
    var Tracker = (function () {
      var onMove = function () {},
          onDone = function () {},
          trackDoc = options.trackDocument;

      function toFront(touch) //{{{
      {
        $trk.css({
          zIndex: 450
        });

        if (touch)
          $(document)
            .bind('touchmove.jcrop', trackTouchMove)
            .bind('touchend.jcrop', trackTouchEnd);

        else if (trackDoc)
          $(document)
            .bind('mousemove.jcrop',trackMove)
            .bind('mouseup.jcrop',trackUp);
      } 
      //}}}
      function toBack() //{{{
      {
        $trk.css({
          zIndex: 290
        });
        $(document).unbind('.jcrop');
      } 
      //}}}
      function trackMove(e) //{{{
      {
        onMove(mouseAbs(e));
        return false;
      } 
      //}}}
      function trackUp(e) //{{{
      {
        e.preventDefault();
        e.stopPropagation();

        if (btndown) {
          btndown = false;

          onDone(mouseAbs(e));

          if (Selection.isAwake()) {
            options.onSelect.call(api, unscale(Coords.getFixed()));
          }

          toBack();
          onMove = function () {};
          onDone = function () {};
        }

        return false;
      }
      //}}}
      function activateHandlers(move, done, touch) //{{{
      {
        btndown = true;
        onMove = move;
        onDone = done;
        toFront(touch);
        return false;
      }
      //}}}
      function trackTouchMove(e) //{{{
      {
        onMove(mouseAbs(Touch.cfilter(e)));
        return false;
      }
      //}}}
      function trackTouchEnd(e) //{{{
      {
        return trackUp(Touch.cfilter(e));
      }
      //}}}
      function setCursor(t) //{{{
      {
        $trk.css('cursor', t);
      }
      //}}}

      if (!trackDoc) {
        $trk.mousemove(trackMove).mouseup(trackUp).mouseout(trackUp);
      }

      $img.before($trk);
      return {
        activateHandlers: activateHandlers,
        setCursor: setCursor
      };
    }());
    //}}}
    // KeyManager Module {{{
    var KeyManager = (function () {
      var $keymgr = $('<input type="radio" />').css({
        position: 'fixed',
        left: '-120px',
        width: '12px'
      }).addClass('jcrop-keymgr'),

        $keywrap = $('<div />').css({
          position: 'absolute',
          overflow: 'hidden'
        }).append($keymgr);

      function watchKeys() //{{{
      {
        if (options.keySupport) {
          $keymgr.show();
          $keymgr.focus();
        }
      }
      //}}}
      function onBlur(e) //{{{
      {
        $keymgr.hide();
      }
      //}}}
      function doNudge(e, x, y) //{{{
      {
        if (options.allowMove) {
          Coords.moveOffset([x, y]);
          Selection.updateVisible(true);
        }
        e.preventDefault();
        e.stopPropagation();
      }
      //}}}
      function parseKey(e) //{{{
      {
        if (e.ctrlKey || e.metaKey) {
          return true;
        }
        shift_down = e.shiftKey ? true : false;
        var nudge = shift_down ? 10 : 1;

        switch (e.keyCode) {
        case 37:
          doNudge(e, -nudge, 0);
          break;
        case 39:
          doNudge(e, nudge, 0);
          break;
        case 38:
          doNudge(e, 0, -nudge);
          break;
        case 40:
          doNudge(e, 0, nudge);
          break;
        case 27:
          if (options.allowSelect) Selection.release();
          break;
        case 9:
          return true;
        }

        return false;
      }
      //}}}

      if (options.keySupport) {
        $keymgr.keydown(parseKey).blur(onBlur);
        if (ie6mode || !options.fixedSupport) {
          $keymgr.css({
            position: 'absolute',
            left: '-20px'
          });
          $keywrap.append($keymgr).insertBefore($img);
        } else {
          $keymgr.insertBefore($img);
        }
      }


      return {
        watchKeys: watchKeys
      };
    }());
    //}}}
    // }}}
    // API methods {{{
    function setClass(cname) //{{{
    {
      $div.removeClass().addClass(cssClass('holder')).addClass(cname);
    }
    //}}}
    function animateTo(a, callback) //{{{
    {
      var x1 = a[0] / xscale,
          y1 = a[1] / yscale,
          x2 = a[2] / xscale,
          y2 = a[3] / yscale;

      if (animating) {
        return;
      }

      var animto = Coords.flipCoords(x1, y1, x2, y2),
          c = Coords.getFixed(),
          initcr = [c.x, c.y, c.x2, c.y2],
          animat = initcr,
          interv = options.animationDelay,
          ix1 = animto[0] - initcr[0],
          iy1 = animto[1] - initcr[1],
          ix2 = animto[2] - initcr[2],
          iy2 = animto[3] - initcr[3],
          pcent = 0,
          velocity = options.swingSpeed;

      x1 = animat[0];
      y1 = animat[1];
      x2 = animat[2];
      y2 = animat[3];

      Selection.animMode(true);
      var anim_timer;

      function queueAnimator() {
        window.setTimeout(animator, interv);
      }
      var animator = (function () {
        return function () {
          pcent += (100 - pcent) / velocity;

          animat[0] = Math.round(x1 + ((pcent / 100) * ix1));
          animat[1] = Math.round(y1 + ((pcent / 100) * iy1));
          animat[2] = Math.round(x2 + ((pcent / 100) * ix2));
          animat[3] = Math.round(y2 + ((pcent / 100) * iy2));

          if (pcent >= 99.8) {
            pcent = 100;
          }
          if (pcent < 100) {
            setSelectRaw(animat);
            queueAnimator();
          } else {
            Selection.done();
            Selection.animMode(false);
            if (typeof(callback) === 'function') {
              callback.call(api);
            }
          }
        };
      }());
      queueAnimator();
    }
    //}}}
    function setSelect(rect) //{{{
    {
      setSelectRaw([rect[0] / xscale, rect[1] / yscale, rect[2] / xscale, rect[3] / yscale]);
      options.onSelect.call(api, unscale(Coords.getFixed()));
      Selection.enableHandles();
    }
    //}}}
    function setSelectRaw(l) //{{{
    {
      Coords.setPressed([l[0], l[1]]);
      Coords.setCurrent([l[2], l[3]]);
      Selection.update();
    }
    //}}}
    function tellSelect() //{{{
    {
      return unscale(Coords.getFixed());
    }
    //}}}
    function tellScaled() //{{{
    {
      return Coords.getFixed();
    }
    //}}}
    function setOptionsNew(opt) //{{{
    {
      setOptions(opt);
      interfaceUpdate();
    }
    //}}}
    function disableCrop() //{{{
    {
      options.disabled = true;
      Selection.disableHandles();
      Selection.setCursor('default');
      Tracker.setCursor('default');
    }
    //}}}
    function enableCrop() //{{{
    {
      options.disabled = false;
      interfaceUpdate();
    }
    //}}}
    function cancelCrop() //{{{
    {
      Selection.done();
      Tracker.activateHandlers(null, null);
    }
    //}}}
    function destroy() //{{{
    {
      $div.remove();
      $origimg.show();
      $origimg.css('visibility','visible');
      $(obj).removeData('Jcrop');
    }
    //}}}
    function setImage(src, callback) //{{{
    {
      Selection.release();
      disableCrop();
      var img = new Image();
      img.onload = function () {
        var iw = img.width;
        var ih = img.height;
        var bw = options.boxWidth;
        var bh = options.boxHeight;
        $img.width(iw).height(ih);
        $img.attr('src', src);
        $img2.attr('src', src);
        presize($img, bw, bh);
        boundx = $img.width();
        boundy = $img.height();
        $img2.width(boundx).height(boundy);
        $trk.width(boundx + (bound * 2)).height(boundy + (bound * 2));
        $div.width(boundx).height(boundy);
        Shade.resize(boundx,boundy);
        enableCrop();

        if (typeof(callback) === 'function') {
          callback.call(api);
        }
      };
      img.src = src;
    }
    //}}}
    function colorChangeMacro($obj,color,now) {
      var mycolor = color || options.bgColor;
      if (options.bgFade && supportsColorFade() && options.fadeTime && !now) {
        $obj.animate({
          backgroundColor: mycolor
        }, {
          queue: false,
          duration: options.fadeTime
        });
      } else {
        $obj.css('backgroundColor', mycolor);
      }
    }
    function interfaceUpdate(alt) //{{{
    // This method tweaks the interface based on options object.
    // Called when options are changed and at end of initialization.
    {
      if (options.allowResize) {
        if (alt) {
          Selection.enableOnly();
        } else {
          Selection.enableHandles();
        }
      } else {
        Selection.disableHandles();
      }

      Tracker.setCursor(options.allowSelect ? 'crosshair' : 'default');
      Selection.setCursor(options.allowMove ? 'move' : 'default');

      if (options.hasOwnProperty('trueSize')) {
        xscale = options.trueSize[0] / boundx;
        yscale = options.trueSize[1] / boundy;
      }

      if (options.hasOwnProperty('setSelect')) {
        setSelect(options.setSelect);
        Selection.done();
        delete(options.setSelect);
      }

      Shade.refresh();

      if (options.bgColor != bgcolor) {
        colorChangeMacro(
          options.shade? Shade.getShades(): $div,
          options.shade?
            (options.shadeColor || options.bgColor):
            options.bgColor
        );
        bgcolor = options.bgColor;
      }

      if (bgopacity != options.bgOpacity) {
        bgopacity = options.bgOpacity;
        if (options.shade) Shade.refresh();
          else Selection.setBgOpacity(bgopacity);
      }

      xlimit = options.maxSize[0] || 0;
      ylimit = options.maxSize[1] || 0;
      xmin = options.minSize[0] || 0;
      ymin = options.minSize[1] || 0;

      if (options.hasOwnProperty('outerImage')) {
        $img.attr('src', options.outerImage);
        delete(options.outerImage);
      }

      Selection.refresh();
    }
    //}}}
    //}}}

    if (Touch.support) $trk.bind('touchstart.jcrop', Touch.newSelection);

    $hdl_holder.hide();
    interfaceUpdate(true);

    var api = {
      setImage: setImage,
      animateTo: animateTo,
      setSelect: setSelect,
      setOptions: setOptionsNew,
      tellSelect: tellSelect,
      tellScaled: tellScaled,
      setClass: setClass,

      disable: disableCrop,
      enable: enableCrop,
      cancel: cancelCrop,
      release: Selection.release,
      destroy: destroy,

      focus: KeyManager.watchKeys,

      getBounds: function () {
        return [boundx * xscale, boundy * yscale];
      },
      getWidgetSize: function () {
        return [boundx, boundy];
      },
      getScaleFactor: function () {
        return [xscale, yscale];
      },
      getOptions: function() {
        // careful: internal values are returned
        return options;
      },

      ui: {
        holder: $div,
        selection: $sel
      }
    };

    if (is_msie) $div.bind('selectstart', function () { return false; });

    $origimg.data('Jcrop', api);
    return api;
  };
  $.fn.Jcrop = function (options, callback) //{{{
  {
    var api;
    // Iterate over each object, attach Jcrop
    this.each(function () {
      // If we've already attached to this object
      if ($(this).data('Jcrop')) {
        // The API can be requested this way (undocumented)
        if (options === 'api') return $(this).data('Jcrop');
        // Otherwise, we just reset the options...
        else $(this).data('Jcrop').setOptions(options);
      }
      // If we haven't been attached, preload and attach
      else {
        if (this.tagName == 'IMG')
          $.Jcrop.Loader(this,function(){
            $(this).css({display:'block',visibility:'hidden'});
            api = $.Jcrop(this, options);
            if ($.isFunction(callback)) callback.call(api);
          });
        else {
          $(this).css({display:'block',visibility:'hidden'});
          api = $.Jcrop(this, options);
          if ($.isFunction(callback)) callback.call(api);
        }
      }
    });

    // Return "this" so the object is chainable (jQuery-style)
    return this;
  };
  //}}}
  // $.Jcrop.Loader - basic image loader {{{

  $.Jcrop.Loader = function(imgobj,success,error){
    var $img = $(imgobj), img = $img[0];

    function completeCheck(){
      if (img.complete) {
        $img.unbind('.jcloader');
        if ($.isFunction(success)) success.call(img);
      }
      else window.setTimeout(completeCheck,50);
    }

    $img
      .bind('load.jcloader',completeCheck)
      .bind('error.jcloader',function(e){
        $img.unbind('.jcloader');
        if ($.isFunction(error)) error.call(img);
      });

    if (img.complete && $.isFunction(success)){
      $img.unbind('.jcloader');
      success.call(img);
    }
  };

  //}}}
  // Global Defaults {{{
  $.Jcrop.defaults = {

    // Basic Settings
    allowSelect: true,
    allowMove: true,
    allowResize: true,

    trackDocument: true,

    // Styling Options
    baseClass: 'jcrop',
    addClass: null,
    bgColor: 'black',
    bgOpacity: 0.6,
    bgFade: false,
    borderOpacity: 0.4,
    handleOpacity: 0.5,
    handleSize: null,

    aspectRatio: 0,
    keySupport: true,
    createHandles: ['n','s','e','w','nw','ne','se','sw'],
    createDragbars: ['n','s','e','w'],
    createBorders: ['n','s','e','w'],
    drawBorders: true,
    dragEdges: true,
    fixedSupport: true,
    touchSupport: null,

    shade: null,

    boxWidth: 0,
    boxHeight: 0,
    boundary: 2,
    fadeTime: 400,
    animationDelay: 20,
    swingSpeed: 3,

    minSelect: [0, 0],
    maxSize: [0, 0],
    minSize: [0, 0],

    // Callbacks / Event Handlers
    onChange: function () {},
    onSelect: function () {},
    onDblClick: function () {},
    onRelease: function () {}
  };

  // }}}
}(jQuery));

/**
 * @preserve
 * jquery.layout 1.3.0 - Release Candidate 30.79
 * $Date: 2013-01-12 08:00:00 (Sat, 12 Jan 2013) $
 * $Rev: 303007 $
 *
 * Copyright (c) 2013 Kevin Dalman (http://allpro.net)
 * Based on work by Fabrizio Balliano (http://www.fabrizioballiano.net)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * SEE: http://layout.jquery-dev.net/LICENSE.txt
 * 
 * Changelog: http://layout.jquery-dev.net/changelog.cfm#1.3.0.rc30.79
 *
 * Docs: http://layout.jquery-dev.net/documentation.html
 * Tips: http://layout.jquery-dev.net/tips.html
 * Help: http://groups.google.com/group/jquery-ui-layout
 */

/* JavaDoc Info: http://code.google.com/closure/compiler/docs/js-for-compiler.html
 * {!Object}	non-nullable type (never NULL)
 * {?string}	nullable type (sometimes NULL) - default for {Object}
 * {number=}	optional parameter
 * {*}			ALL types
 */
/*	TODO for jQ 2.0 
 *	change .andSelf() to .addBack()
 *	$.fn.disableSelection won't work
 */

// NOTE: For best readability, view with a fixed-width font and tabs equal to 4-chars

;(function ($) {

// alias Math methods - used a lot!
var	min		= Math.min
,	max		= Math.max
,	round	= Math.floor

,	isStr	=  function (v) { return $.type(v) === "string"; }

	/**
	* @param {!Object}			Instance
	* @param {Array.<string>}	a_fn
	*/
,	runPluginCallbacks = function (Instance, a_fn) {
		if ($.isArray(a_fn))
			for (var i=0, c=a_fn.length; i<c; i++) {
				var fn = a_fn[i];
				try {
					if (isStr(fn)) // 'name' of a function
						fn = eval(fn);
					if ($.isFunction(fn))
						g(fn)( Instance );
				} catch (ex) {}
			}
		function g (f) { return f; }; // compiler hack
	}
;

/*
 *	GENERIC $.layout METHODS - used by all layouts
 */
$.layout = {

	version:	"1.3.rc30.79"
,	revision:	0.033007 // 1.3.0 final = 1.0300 - major(n+).minor(nn)+patch(nn+)

	// $.layout.browser REPLACES $.browser
,	browser:	{} // set below

	// *PREDEFINED* EFFECTS & DEFAULTS 
	// MUST list effect here - OR MUST set an fxSettings option (can be an empty hash: {})
,	effects: {

	//	Pane Open/Close Animations
		slide: {
			all:	{ duration:  "fast"	} // eg: duration: 1000, easing: "easeOutBounce"
		,	north:	{ direction: "up"	}
		,	south:	{ direction: "down"	}
		,	east:	{ direction: "right"}
		,	west:	{ direction: "left"	}
		}
	,	drop: {
			all:	{ duration:  "slow"	}
		,	north:	{ direction: "up"	}
		,	south:	{ direction: "down"	}
		,	east:	{ direction: "right"}
		,	west:	{ direction: "left"	}
		}
	,	scale: {
			all:	{ duration:	"fast"	}
		}
	//	these are not recommended, but can be used
	,	blind:		{}
	,	clip:		{}
	,	explode:	{}
	,	fade:		{}
	,	fold:		{}
	,	puff:		{}

	//	Pane Resize Animations
	,	size: {
			all:	{ easing:	"swing"	}
		}
	}

	// INTERNAL CONFIG DATA - DO NOT CHANGE THIS!
,	config: {
		optionRootKeys:	"effects,panes,north,south,west,east,center".split(",")
	,	allPanes:		"north,south,west,east,center".split(",")
	,	borderPanes:	"north,south,west,east".split(",")
	,	oppositeEdge: {
			north:	"south"
		,	south:	"north"
		,	east: 	"west"
		,	west: 	"east"
		}
	//	offscreen data
	,	offscreenCSS:	{ left: "-99999px", right: "auto" } // used by hide/close if useOffscreenClose=true
	,	offscreenReset:	"offscreenReset" // key used for data
	//	CSS used in multiple places
	,	hidden:		{ visibility: "hidden" }
	,	visible:	{ visibility: "visible" }
	//	layout element settings
	,	resizers: {
			cssReq: {
				position: 	"absolute"
			,	padding: 	0
			,	margin: 	0
			,	fontSize:	"1px"
			,	textAlign:	"left"	// to counter-act "center" alignment!
			,	overflow: 	"hidden" // prevent toggler-button from overflowing
			//	SEE $.layout.defaults.zIndexes.resizer_normal
			}
		,	cssDemo: { // DEMO CSS - applied if: options.PANE.applyDemoStyles=true
				background: "#DDD"
			,	border:		"none"
			}
		}
	,	togglers: {
			cssReq: {
				position: 	"absolute"
			,	display: 	"block"
			,	padding: 	0
			,	margin: 	0
			,	overflow:	"hidden"
			,	textAlign:	"center"
			,	fontSize:	"1px"
			,	cursor: 	"pointer"
			,	zIndex: 	1
			}
		,	cssDemo: { // DEMO CSS - applied if: options.PANE.applyDemoStyles=true
				background: "#AAA"
			}
		}
	,	content: {
			cssReq: {
				position:	"relative" /* contain floated or positioned elements */
			}
		,	cssDemo: { // DEMO CSS - applied if: options.PANE.applyDemoStyles=true
				overflow:	"auto"
			,	padding:	"10px"
			}
		,	cssDemoPane: { // DEMO CSS - REMOVE scrolling from 'pane' when it has a content-div
				overflow:	"hidden"
			,	padding:	0
			}
		}
	,	panes: { // defaults for ALL panes - overridden by 'per-pane settings' below
			cssReq: {
				position: 	"absolute"
			,	margin:		0
			//	$.layout.defaults.zIndexes.pane_normal
			}
		,	cssDemo: { // DEMO CSS - applied if: options.PANE.applyDemoStyles=true
				padding:	"10px"
			,	background:	"#FFF"
			,	border:		"1px solid #BBB"
			,	overflow:	"auto"
			}
		}
	,	north: {
			side:			"top"
		,	sizeType:		"Height"
		,	dir:			"horz"
		,	cssReq: {
				top: 		0
			,	bottom: 	"auto"
			,	left: 		0
			,	right: 		0
			,	width: 		"auto"
			//	height: 	DYNAMIC
			}
		}
	,	south: {
			side:			"bottom"
		,	sizeType:		"Height"
		,	dir:			"horz"
		,	cssReq: {
				top: 		"auto"
			,	bottom: 	0
			,	left: 		0
			,	right: 		0
			,	width: 		"auto"
			//	height: 	DYNAMIC
			}
		}
	,	east: {
			side:			"right"
		,	sizeType:		"Width"
		,	dir:			"vert"
		,	cssReq: {
				left: 		"auto"
			,	right: 		0
			,	top: 		"auto" // DYNAMIC
			,	bottom: 	"auto" // DYNAMIC
			,	height: 	"auto"
			//	width: 		DYNAMIC
			}
		}
	,	west: {
			side:			"left"
		,	sizeType:		"Width"
		,	dir:			"vert"
		,	cssReq: {
				left: 		0
			,	right: 		"auto"
			,	top: 		"auto" // DYNAMIC
			,	bottom: 	"auto" // DYNAMIC
			,	height: 	"auto"
			//	width: 		DYNAMIC
			}
		}
	,	center: {
			dir:			"center"
		,	cssReq: {
				left: 		"auto" // DYNAMIC
			,	right: 		"auto" // DYNAMIC
			,	top: 		"auto" // DYNAMIC
			,	bottom: 	"auto" // DYNAMIC
			,	height: 	"auto"
			,	width: 		"auto"
			}
		}
	}

	// CALLBACK FUNCTION NAMESPACE - used to store reusable callback functions
,	callbacks: {}

,	getParentPaneElem: function (el) {
		// must pass either a container or pane element
		var $el = $(el)
		,	layout = $el.data("layout") || $el.data("parentLayout");
		if (layout) {
			var $cont = layout.container;
			// see if this container is directly-nested inside an outer-pane
			if ($cont.data("layoutPane")) return $cont;
			var $pane = $cont.closest("."+ $.layout.defaults.panes.paneClass);
			// if a pane was found, return it
			if ($pane.data("layoutPane")) return $pane;
		}
		return null;
	}

,	getParentPaneInstance: function (el) {
		// must pass either a container or pane element
		var $pane = $.layout.getParentPaneElem(el);
		return $pane ? $pane.data("layoutPane") : null;
	}

,	getParentLayoutInstance: function (el) {
		// must pass either a container or pane element
		var $pane = $.layout.getParentPaneElem(el);
		return $pane ? $pane.data("parentLayout") : null;
	}

,	getEventObject: function (evt) {
		return typeof evt === "object" && evt.stopPropagation ? evt : null;
	}
,	parsePaneName: function (evt_or_pane) {
		var evt = $.layout.getEventObject( evt_or_pane )
		,	pane = evt_or_pane;
		if (evt) {
			// ALWAYS stop propagation of events triggered in Layout!
			evt.stopPropagation();
			pane = $(this).data("layoutEdge");
		}
		if (pane && !/^(west|east|north|south|center)$/.test(pane)) {
			$.layout.msg('LAYOUT ERROR - Invalid pane-name: "'+ pane +'"');
			pane = "error";
		}
		return pane;
	}


	// LAYOUT-PLUGIN REGISTRATION
	// more plugins can added beyond this default list
,	plugins: {
		draggable:		!!$.fn.draggable // resizing
	,	effects: {
			core:		!!$.effects		// animimations (specific effects tested by initOptions)
		,	slide:		$.effects && ($.effects.slide || ($.effects.effect && $.effects.effect.slide)) // default effect
		}
	}

//	arrays of plugin or other methods to be triggered for events in *each layout* - will be passed 'Instance'
,	onCreate:	[]	// runs when layout is just starting to be created - right after options are set
,	onLoad:		[]	// runs after layout container and global events init, but before initPanes is called
,	onReady:	[]	// runs after initialization *completes* - ie, after initPanes completes successfully
,	onDestroy:	[]	// runs after layout is destroyed
,	onUnload:	[]	// runs after layout is destroyed OR when page unloads
,	afterOpen:	[]	// runs after setAsOpen() completes
,	afterClose:	[]	// runs after setAsClosed() completes

	/*
	*	GENERIC UTILITY METHODS
	*/

	// calculate and return the scrollbar width, as an integer
,	scrollbarWidth:		function () { return window.scrollbarWidth  || $.layout.getScrollbarSize('width'); }
,	scrollbarHeight:	function () { return window.scrollbarHeight || $.layout.getScrollbarSize('height'); }
,	getScrollbarSize:	function (dim) {
		var $c	= $('<div style="position: absolute; top: -10000px; left: -10000px; width: 100px; height: 100px; overflow: scroll;"></div>').appendTo("body");
		var d	= { width: $c.css("width") - $c[0].clientWidth, height: $c.height() - $c[0].clientHeight };
		$c.remove();
		window.scrollbarWidth	= d.width;
		window.scrollbarHeight	= d.height;
		return dim.match(/^(width|height)$/) ? d[dim] : d;
	}


	/**
	* Returns hash container 'display' and 'visibility'
	*
	* @see	$.swap() - swaps CSS, runs callback, resets CSS
	* @param  {!Object}		$E				jQuery element
	* @param  {boolean=}	[force=false]	Run even if display != none
	* @return {!Object}						Returns current style props, if applicable
	*/
,	showInvisibly: function ($E, force) {
		if ($E && $E.length && (force || $E.css("display") === "none")) { // only if not *already hidden*
			var s = $E[0].style
				// save ONLY the 'style' props because that is what we must restore
			,	CSS = { display: s.display || '', visibility: s.visibility || '' };
			// show element 'invisibly' so can be measured
			$E.css({ display: "block", visibility: "hidden" });
			return CSS;
		}
		return {};
	}

	/**
	* Returns data for setting size of an element (container or a pane).
	*
	* @see  _create(), onWindowResize() for container, plus others for pane
	* @return JSON  Returns a hash of all dimensions: top, bottom, left, right, outerWidth, innerHeight, etc
	*/
,	getElementDimensions: function ($E, inset) {
		var
		//	dimensions hash - start with current data IF passed
			d	= { css: {}, inset: {} }
		,	x	= d.css			// CSS hash
		,	i	= { bottom: 0 }	// TEMP insets (bottom = complier hack)
		,	N	= $.layout.cssNum
		,	off = $E.offset()
		,	b, p, ei			// TEMP border, padding
		;
		d.offsetLeft = off.left;
		d.offsetTop  = off.top;

		if (!inset) inset = {}; // simplify logic below

		$.each("Left,Right,Top,Bottom".split(","), function (idx, e) { // e = edge
			b = x["border" + e] = $.layout.borderWidth($E, e);
			p = x["padding"+ e] = $.layout.cssNum($E, "padding"+e);
			ei = e.toLowerCase();
			d.inset[ei] = inset[ei] >= 0 ? inset[ei] : p; // any missing insetX value = paddingX
			i[ei] = d.inset[ei] + b; // total offset of content from outer side
		});

		x.width		= $E.width();
		x.height	= $E.height();
		x.top		= N($E,"top",true);
		x.bottom	= N($E,"bottom",true);
		x.left		= N($E,"left",true);
		x.right		= N($E,"right",true);

		d.outerWidth	= $E.outerWidth();
		d.outerHeight	= $E.outerHeight();
		// calc the TRUE inner-dimensions, even in quirks-mode!
		d.innerWidth	= max(0, d.outerWidth  - i.left - i.right);
		d.innerHeight	= max(0, d.outerHeight - i.top  - i.bottom);
		// layoutWidth/Height is used in calcs for manual resizing
		// layoutW/H only differs from innerW/H when in quirks-mode - then is like outerW/H
		d.layoutWidth	= $E.innerWidth();
		d.layoutHeight	= $E.innerHeight();

		//if ($E.prop('tagName') === 'BODY') { debugData( d, $E.prop('tagName') ); } // DEBUG

		//d.visible	= $E.is(":visible");// && x.width > 0 && x.height > 0;

		return d;
	}

,	getElementStyles: function ($E, list) {
		var
			CSS	= {}
		,	style	= $E[0].style
		,	props	= list.split(",")
		,	sides	= "Top,Bottom,Left,Right".split(",")
		,	attrs	= "Color,Style,Width".split(",")
		,	p, s, a, i, j, k
		;
		for (i=0; i < props.length; i++) {
			p = props[i];
			if (p.match(/(border|padding|margin)$/))
				for (j=0; j < 4; j++) {
					s = sides[j];
					if (p === "border")
						for (k=0; k < 3; k++) {
							a = attrs[k];
							CSS[p+s+a] = style[p+s+a];
						}
					else
						CSS[p+s] = style[p+s];
				}
			else
				CSS[p] = style[p];
		};
		return CSS
	}

	/**
	* Return the innerWidth for the current browser/doctype
	*
	* @see  initPanes(), sizeMidPanes(), initHandles(), sizeHandles()
	* @param  {Array.<Object>}	$E  Must pass a jQuery object - first element is processed
	* @param  {number=}			outerWidth (optional) Can pass a width, allowing calculations BEFORE element is resized
	* @return {number}			Returns the innerWidth of the elem by subtracting padding and borders
	*/
,	cssWidth: function ($E, outerWidth) {
		// a 'calculated' outerHeight can be passed so borders and/or padding are removed if needed
		if (outerWidth <= 0) return 0;

		var bs	= !$.layout.browser.boxModel ? "border-box" : $.support.boxSizing ? $E.css("boxSizing") : "content-box"
		,	b	= $.layout.borderWidth
		,	n	= $.layout.cssNum
		,	W	= outerWidth
		;
		// strip border and/or padding from outerWidth to get CSS Width
		if (bs !== "border-box")
			W -= (b($E, "Left") + b($E, "Right"));
		if (bs === "content-box")
			W -= (n($E, "paddingLeft") + n($E, "paddingRight"));
		return max(0,W);
	}

	/**
	* Return the innerHeight for the current browser/doctype
	*
	* @see  initPanes(), sizeMidPanes(), initHandles(), sizeHandles()
	* @param  {Array.<Object>}	$E  Must pass a jQuery object - first element is processed
	* @param  {number=}			outerHeight  (optional) Can pass a width, allowing calculations BEFORE element is resized
	* @return {number}			Returns the innerHeight of the elem by subtracting padding and borders
	*/
,	cssHeight: function ($E, outerHeight) {
		// a 'calculated' outerHeight can be passed so borders and/or padding are removed if needed
		if (outerHeight <= 0) return 0;

		var bs	= !$.layout.browser.boxModel ? "border-box" : $.support.boxSizing ? $E.css("boxSizing") : "content-box"
		,	b	= $.layout.borderWidth
		,	n	= $.layout.cssNum
		,	H	= outerHeight
		;
		// strip border and/or padding from outerHeight to get CSS Height
		if (bs !== "border-box")
			H -= (b($E, "Top") + b($E, "Bottom"));
		if (bs === "content-box")
			H -= (n($E, "paddingTop") + n($E, "paddingBottom"));
		return max(0,H);
	}

	/**
	* Returns the 'current CSS numeric value' for a CSS property - 0 if property does not exist
	*
	* @see  Called by many methods
	* @param {Array.<Object>}	$E					Must pass a jQuery object - first element is processed
	* @param {string}			prop				The name of the CSS property, eg: top, width, etc.
	* @param {boolean=}			[allowAuto=false]	true = return 'auto' if that is value; false = return 0
	* @return {(string|number)}						Usually used to get an integer value for position (top, left) or size (height, width)
	*/
,	cssNum: function ($E, prop, allowAuto) {
		if (!$E.jquery) $E = $($E);
		var CSS = $.layout.showInvisibly($E)
		,	p	= $.css($E[0], prop, true)
		,	v	= allowAuto && p=="auto" ? p : Math.round(parseFloat(p) || 0);
		$E.css( CSS ); // RESET
		return v;
	}

,	borderWidth: function (el, side) {
		if (el.jquery) el = el[0];
		var b = "border"+ side.substr(0,1).toUpperCase() + side.substr(1); // left => Left
		return $.css(el, b+"Style", true) === "none" ? 0 : Math.round(parseFloat($.css(el, b+"Width", true)) || 0);
	}

	/**
	* Mouse-tracking utility - FUTURE REFERENCE
	*
	* init: if (!window.mouse) {
	*			window.mouse = { x: 0, y: 0 };
	*			$(document).mousemove( $.layout.trackMouse );
	*		}
	*
	* @param {Object}		evt
	*
,	trackMouse: function (evt) {
		window.mouse = { x: evt.clientX, y: evt.clientY };
	}
	*/

	/**
	* SUBROUTINE for preventPrematureSlideClose option
	*
	* @param {Object}		evt
	* @param {Object=}		el
	*/
,	isMouseOverElem: function (evt, el) {
		var
			$E	= $(el || this)
		,	d	= $E.offset()
		,	T	= d.top
		,	L	= d.left
		,	R	= L + $E.outerWidth()
		,	B	= T + $E.outerHeight()
		,	x	= evt.pageX	// evt.clientX ?
		,	y	= evt.pageY	// evt.clientY ?
		;
		// if X & Y are < 0, probably means is over an open SELECT
		return ($.layout.browser.msie && x < 0 && y < 0) || ((x >= L && x <= R) && (y >= T && y <= B));
	}

	/**
	* Message/Logging Utility
	*
	* @example $.layout.msg("My message");				// log text
	* @example $.layout.msg("My message", true);		// alert text
	* @example $.layout.msg({ foo: "bar" }, "Title");	// log hash-data, with custom title
	* @example $.layout.msg({ foo: "bar" }, true, "Title", { sort: false }); -OR-
	* @example $.layout.msg({ foo: "bar" }, "Title", { sort: false, display: true }); // alert hash-data
	*
	* @param {(Object|string)}			info			String message OR Hash/Array
	* @param {(Boolean|string|Object)=}	[popup=false]	True means alert-box - can be skipped
	* @param {(Object|string)=}			[debugTitle=""]	Title for Hash data - can be skipped
	* @param {Object=}					[debugOpts]		Extra options for debug output
	*/
,	msg: function (info, popup, debugTitle, debugOpts) {
		if ($.isPlainObject(info) && window.debugData) {
			if (typeof popup === "string") {
				debugOpts	= debugTitle;
				debugTitle	= popup;
			}
			else if (typeof debugTitle === "object") {
				debugOpts	= debugTitle;
				debugTitle	= null;
			}
			var t = debugTitle || "log( <object> )"
			,	o = $.extend({ sort: false, returnHTML: false, display: false }, debugOpts);
			if (popup === true || o.display)
				debugData( info, t, o );
			else if (window.console)
				console.log(debugData( info, t, o ));
		}
		else if (popup)
			alert(info);
		else if (window.console)
			console.log(info);
		else {
			var id	= "#layoutLogger"
			,	$l = $(id);
			if (!$l.length)
				$l = createLog();
			$l.children("ul").append('<li style="padding: 4px 10px; margin: 0; border-top: 1px solid #CCC;">'+ info.replace(/\</g,"&lt;").replace(/\>/g,"&gt;") +'</li>');
		}

		function createLog () {
			var pos = $.support.fixedPosition ? 'fixed' : 'absolute'
			,	$e = $('<div id="layoutLogger" style="position: '+ pos +'; top: 5px; z-index: 999999; max-width: 25%; overflow: hidden; border: 1px solid #000; border-radius: 5px; background: #FBFBFB; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">'
				+	'<div style="font-size: 13px; font-weight: bold; padding: 5px 10px; background: #F6F6F6; border-radius: 5px 5px 0 0; cursor: move;">'
				+	'<span style="float: right; padding-left: 7px; cursor: pointer;" title="Remove Console" onclick="$(this).closest(\'#layoutLogger\').remove()">X</span>Layout console.log</div>'
				+	'<ul style="font-size: 13px; font-weight: none; list-style: none; margin: 0; padding: 0 0 2px;"></ul>'
				+ '</div>'
				).appendTo("body");
			$e.css('left', $(window).width() - $e.outerWidth() - 5)
			if ($.ui.draggable) $e.draggable({ handle: ':first-child' });
			return $e;
		};
	}

};


/*
 *	$.layout.browser REPLACES removed $.browser, with extra data
 *	Parsing code here adapted from jQuery 1.8 $.browse
 */
var u = navigator.userAgent.toLowerCase()
,	m = /(chrome)[ \/]([\w.]+)/.exec( u )
	||	/(webkit)[ \/]([\w.]+)/.exec( u )
	||	/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( u )
	||	/(msie) ([\w.]+)/.exec( u )
	||	u.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( u )
	||	[]
,	b = m[1] || ""
,	v = m[2] || 0
,	ie = b === "msie"
;
$.layout.browser = {
	version:	v
,	safari:		b === "webkit"	// webkit (NOT chrome) = safari
,	webkit:		b === "chrome"	// chrome = webkit
,	msie:		ie
,	isIE6:		ie && v == 6
	// ONLY IE reverts to old box-model - update for older jQ onReady
,	boxModel:	!ie || $.support.boxModel !== false
};
if (b) $.layout.browser[b] = true; // set CURRENT browser
/*	OLD versions of jQuery only set $.support.boxModel after page is loaded
 *	so if this is IE, use support.boxModel to test for quirks-mode (ONLY IE changes boxModel) */
if (ie) $(function(){ $.layout.browser.boxModel = $.support.boxModel; });


// DEFAULT OPTIONS
$.layout.defaults = {
/*
 *	LAYOUT & LAYOUT-CONTAINER OPTIONS
 *	- none of these options are applicable to individual panes
 */
	name:						""			// Not required, but useful for buttons and used for the state-cookie
,	containerClass:				"ui-layout-container" // layout-container element
,	inset:						null		// custom container-inset values (override padding)
,	scrollToBookmarkOnLoad:		true		// after creating a layout, scroll to bookmark in URL (.../page.htm#myBookmark)
,	resizeWithWindow:			true		// bind thisLayout.resizeAll() to the window.resize event
,	resizeWithWindowDelay:		200			// delay calling resizeAll because makes window resizing very jerky
,	resizeWithWindowMaxDelay:	0			// 0 = none - force resize every XX ms while window is being resized
,	maskPanesEarly:				false		// true = create pane-masks on resizer.mouseDown instead of waiting for resizer.dragstart
,	onresizeall_start:			null		// CALLBACK when resizeAll() STARTS	- NOT pane-specific
,	onresizeall_end:			null		// CALLBACK when resizeAll() ENDS	- NOT pane-specific
,	onload_start:				null		// CALLBACK when Layout inits - after options initialized, but before elements
,	onload_end:					null		// CALLBACK when Layout inits - after EVERYTHING has been initialized
,	onunload_start:				null		// CALLBACK when Layout is destroyed OR onWindowUnload
,	onunload_end:				null		// CALLBACK when Layout is destroyed OR onWindowUnload
,	initPanes:					true		// false = DO NOT initialize the panes onLoad - will init later
,	showErrorMessages:			true		// enables fatal error messages to warn developers of common errors
,	showDebugMessages:			false		// display console-and-alert debug msgs - IF this Layout version _has_ debugging code!
//	Changing this zIndex value will cause other zIndex values to automatically change
,	zIndex:						null		// the PANE zIndex - resizers and masks will be +1
//	DO NOT CHANGE the zIndex values below unless you clearly understand their relationships
,	zIndexes: {								// set _default_ z-index values here...
		pane_normal:			0			// normal z-index for panes
	,	content_mask:			1			// applied to overlays used to mask content INSIDE panes during resizing
	,	resizer_normal:			2			// normal z-index for resizer-bars
	,	pane_sliding:			100			// applied to *BOTH* the pane and its resizer when a pane is 'slid open'
	,	pane_animate:			1000		// applied to the pane when being animated - not applied to the resizer
	,	resizer_drag:			10000		// applied to the CLONED resizer-bar when being 'dragged'
	}
,	errors: {
		pane:					"pane"		// description of "layout pane element" - used only in error messages
	,	selector:				"selector"	// description of "jQuery-selector" - used only in error messages
	,	addButtonError:			"Error Adding Button\nInvalid "
	,	containerMissing:		"UI Layout Initialization Error\nThe specified layout-container does not exist."
	,	centerPaneMissing:		"UI Layout Initialization Error\nThe center-pane element does not exist.\nThe center-pane is a required element."
	,	noContainerHeight:		"UI Layout Initialization Warning\nThe layout-container \"CONTAINER\" has no height.\nTherefore the layout is 0-height and hence 'invisible'!"
	,	callbackError:			"UI Layout Callback Error\nThe EVENT callback is not a valid function."
	}
/*
 *	PANE DEFAULT SETTINGS
 *	- settings under the 'panes' key become the default settings for *all panes*
 *	- ALL pane-options can also be set specifically for each panes, which will override these 'default values'
 */
,	panes: { // default options for 'all panes' - will be overridden by 'per-pane settings'
		applyDemoStyles: 		false		// NOTE: renamed from applyDefaultStyles for clarity
	,	closable:				true		// pane can open & close
	,	resizable:				false		// when open, pane can be resized 
	,	slidable:				false		// when closed, pane can 'slide open' over other panes - closes on mouse-out
	,	initClosed:				false		// true = init pane as 'closed'
	,	initHidden: 			false 		// true = init pane as 'hidden' - no resizer-bar/spacing
	//	SELECTORS
	//,	paneSelector:			""			// MUST be pane-specific - jQuery selector for pane
	,	contentSelector:		".ui-layout-content" // INNER div/element to auto-size so only it scrolls, not the entire pane!
	,	contentIgnoreSelector:	".ui-layout-ignore"	// element(s) to 'ignore' when measuring 'content'
	,	findNestedContent:		false		// true = $P.find(contentSelector), false = $P.children(contentSelector)
	//	GENERIC ROOT-CLASSES - for auto-generated classNames
	,	paneClass:				"ui-layout-pane"	// Layout Pane
	,	resizerClass:			"ui-layout-resizer"	// Resizer Bar
	,	togglerClass:			"ui-layout-toggler"	// Toggler Button
	,	buttonClass:			"ui-layout-button"	// CUSTOM Buttons	- eg: '[ui-layout-button]-toggle/-open/-close/-pin'
	//	ELEMENT SIZE & SPACING
	//,	size:					100			// MUST be pane-specific -initial size of pane
	,	minSize:				0			// when manually resizing a pane
	,	maxSize:				0			// ditto, 0 = no limit
	,	spacing_open:			0			// space between pane and adjacent panes - when pane is 'open'
	,	spacing_closed:			0			// ditto - when pane is 'closed'
	,	togglerLength_open:		0			// Length = WIDTH of toggler button on north/south sides - HEIGHT on east/west sides
	,	togglerLength_closed: 	0			// 100% OR -1 means 'full height/width of resizer bar' - 0 means 'hidden'
	,	togglerAlign_open:		"center"	// top/left, bottom/right, center, OR...
	,	togglerAlign_closed:	"center"	// 1 => nn = offset from top/left, -1 => -nn == offset from bottom/right
	,	togglerContent_open:	""			// text or HTML to put INSIDE the toggler
	,	togglerContent_closed:	""			// ditto
	//	RESIZING OPTIONS
	,	resizerDblClickToggle:	false		// 
	,	autoResize:				true		// IF size is 'auto' or a percentage, then recalc 'pixel size' whenever the layout resizes
	,	autoReopen:				true		// IF a pane was auto-closed due to noRoom, reopen it when there is room? False = leave it closed
	,	resizerDragOpacity:		1			// option for ui.draggable
	//,	resizerCursor:			""			// MUST be pane-specific - cursor when over resizer-bar
	,	maskContents:			false		// true = add DIV-mask over-or-inside this pane so can 'drag' over IFRAMES
	,	maskObjects:			false		// true = add IFRAME-mask over-or-inside this pane to cover objects/applets - content-mask will overlay this mask
	,	maskZindex:				null		// will override zIndexes.content_mask if specified - not applicable to iframe-panes
	,	resizingGrid:			false		// grid size that the resizers will snap-to during resizing, eg: [20,20]
	,	livePaneResizing:		false		// true = LIVE Resizing as resizer is dragged
	,	liveContentResizing:	false		// true = re-measure header/footer heights as resizer is dragged
	,	liveResizingTolerance:	1			// how many px change before pane resizes, to control performance
	//	SLIDING OPTIONS
	,	sliderCursor:			"pointer"	// cursor when resizer-bar will trigger 'sliding'
	,	slideTrigger_open:		"click"		// click, dblclick, mouseenter
	,	slideTrigger_close:		"mouseleave"// click, mouseleave
	,	slideDelay_open:		300			// applies only for mouseenter event - 0 = instant open
	,	slideDelay_close:		300			// applies only for mouseleave event (300ms is the minimum!)
	,	hideTogglerOnSlide:		false		// when pane is slid-open, should the toggler show?
	,	preventQuickSlideClose:	$.layout.browser.webkit // Chrome triggers slideClosed as it is opening
	,	preventPrematureSlideClose: false	// handle incorrect mouseleave trigger, like when over a SELECT-list in IE
	//	PANE-SPECIFIC TIPS & MESSAGES
	,	tips: {
			Open:				"Mostrar painel"		// eg: "Open Pane"
		,	Close:				"Ocultar painel"
		,	Resize:				"Resize"
		,	Slide:				"Slide Open"
		,	Pin:				"Pin"
		,	Unpin:				"Un-Pin"
		,	noRoomToOpen:		"Not enough room to show this panel."	// alert if user tries to open a pane that cannot
		,	minSizeWarning:		"Panel has reached its minimum size"	// displays in browser statusbar
		,	maxSizeWarning:		"Panel has reached its maximum size"	// ditto
		}
	//	HOT-KEYS & MISC
	,	showOverflowOnHover:	false		// will bind allowOverflow() utility to pane.onMouseOver
	,	enableCursorHotkey:		true		// enabled 'cursor' hotkeys
	//,	customHotkey:			""			// MUST be pane-specific - EITHER a charCode OR a character
	,	customHotkeyModifier:	"SHIFT"		// either 'SHIFT', 'CTRL' or 'CTRL+SHIFT' - NOT 'ALT'
	//	PANE ANIMATION
	//	NOTE: fxSss_open, fxSss_close & fxSss_size options (eg: fxName_open) are auto-generated if not passed
	,	fxName:					"slide" 	// ('none' or blank), slide, drop, scale -- only relevant to 'open' & 'close', NOT 'size'
	,	fxSpeed:				null		// slow, normal, fast, 200, nnn - if passed, will OVERRIDE fxSettings.duration
	,	fxSettings:				{}			// can be passed, eg: { easing: "easeOutBounce", duration: 1500 }
	,	fxOpacityFix:			true		// tries to fix opacity in IE to restore anti-aliasing after animation
	,	animatePaneSizing:		false		// true = animate resizing after dragging resizer-bar OR sizePane() is called
	/*  NOTE: Action-specific FX options are auto-generated from the options above if not specifically set:
		fxName_open:			"slide"		// 'Open' pane animation
		fnName_close:			"slide"		// 'Close' pane animation
		fxName_size:			"slide"		// 'Size' pane animation - when animatePaneSizing = true
		fxSpeed_open:			null
		fxSpeed_close:			null
		fxSpeed_size:			null
		fxSettings_open:		{}
		fxSettings_close:		{}
		fxSettings_size:		{}
	*/
	//	CHILD/NESTED LAYOUTS
	,	children:				null		// Layout-options for nested/child layout - even {} is valid as options
	,	containerSelector:		''			// if child is NOT 'directly nested', a selector to find it/them (can have more than one child layout!)
	,	initChildren:			true		// true = child layout will be created as soon as _this_ layout completes initialization
	,	destroyChildren:		true		// true = destroy child-layout if this pane is destroyed
	,	resizeChildren:			true		// true = trigger child-layout.resizeAll() when this pane is resized
	//	EVENT TRIGGERING
	,	triggerEventsOnLoad:	false		// true = trigger onopen OR onclose callbacks when layout initializes
	,	triggerEventsDuringLiveResize: true	// true = trigger onresize callback REPEATEDLY if livePaneResizing==true
	//	PANE CALLBACKS
	,	onshow_start:			null		// CALLBACK when pane STARTS to Show	- BEFORE onopen/onhide_start
	,	onshow_end:				null		// CALLBACK when pane ENDS being Shown	- AFTER  onopen/onhide_end
	,	onhide_start:			null		// CALLBACK when pane STARTS to Close	- BEFORE onclose_start
	,	onhide_end:				null		// CALLBACK when pane ENDS being Closed	- AFTER  onclose_end
	,	onopen_start:			null		// CALLBACK when pane STARTS to Open
	,	onopen_end:				null		// CALLBACK when pane ENDS being Opened
	,	onclose_start:			null		// CALLBACK when pane STARTS to Close
	,	onclose_end:			null		// CALLBACK when pane ENDS being Closed
	,	onresize_start:			null		// CALLBACK when pane STARTS being Resized ***FOR ANY REASON***
	,	onresize_end:			null		// CALLBACK when pane ENDS being Resized ***FOR ANY REASON***
	,	onsizecontent_start:	null		// CALLBACK when sizing of content-element STARTS
	,	onsizecontent_end:		null		// CALLBACK when sizing of content-element ENDS
	,	onswap_start:			null		// CALLBACK when pane STARTS to Swap
	,	onswap_end:				null		// CALLBACK when pane ENDS being Swapped
	,	ondrag_start:			null		// CALLBACK when pane STARTS being ***MANUALLY*** Resized
	,	ondrag_end:				null		// CALLBACK when pane ENDS being ***MANUALLY*** Resized
	}
/*
 *	PANE-SPECIFIC SETTINGS
 *	- options listed below MUST be specified per-pane - they CANNOT be set under 'panes'
 *	- all options under the 'panes' key can also be set specifically for any pane
 *	- most options under the 'panes' key apply only to 'border-panes' - NOT the the center-pane
 */
,	north: {
		paneSelector:			".ui-layout-north"
	,	size:					"61"		// eg: "auto", "30%", .30, 200
	,	resizerCursor:			"n-resize"	// custom = url(myCursor.cur)
	,	customHotkey:			""			// EITHER a charCode (43) OR a character ("o")
	,	spacing_open:			0			// space between pane and adjacent panes - when pane is 'open'
	,	spacing_closed:			0			// ditto - when pane is 'closed'
	}
,	south: {
		paneSelector:			".ui-layout-south"
	,	size:					"auto"
	,	resizerCursor:			"s-resize"
	,	customHotkey:			""
	,	spacing_open:			1	
	}
,	east: {
		paneSelector:			".ui-layout-east"
	,	size:					200
	,	resizerCursor:			"e-resize"
	,	customHotkey:			""
	}
,	west: {
		paneSelector:			".ui-layout-west"
	,	size:					192
	,	resizerCursor:			"w-resize"
	,	customHotkey:			""
	,	spacing_open:			0			// space between pane and adjacent panes - when pane is 'open'
	,	spacing_closed:			25			// ditto - when pane is 'closed'
	,	togglerLength_open:		0			// Length = WIDTH of toggler button on north/south sides - HEIGHT on east/west sides
	,	togglerLength_closed: 	42			// 100% OR -1 means 'full height/width of resizer bar' - 0 means 'hidden'
	,	togglerAlign_open:		"top"	// top/left, bottom/right, center, OR...
	,	togglerAlign_closed:	"top"	// 1 => nn = offset from top/left, -1 => -nn == offset from bottom/right
	,	togglerContent_open:	""			// text or HTML to put INSIDE the toggler
	,	togglerContent_closed:	""			// ditto
	}
,	center: {
		paneSelector:			".ui-layout-center"
	,	minWidth:				0
	,	minHeight:				0
	}
};

$.layout.optionsMap = {
	// layout/global options - NOT pane-options
	layout: ("name,instanceKey,stateManagement,effects,inset,zIndexes,errors,"
	+	"zIndex,scrollToBookmarkOnLoad,showErrorMessages,maskPanesEarly,"
	+	"outset,resizeWithWindow,resizeWithWindowDelay,resizeWithWindowMaxDelay,"
	+	"onresizeall,onresizeall_start,onresizeall_end,onload,onload_start,onload_end,onunload,onunload_start,onunload_end").split(",")
//	borderPanes: [ ALL options that are NOT specified as 'layout' ]
	// default.panes options that apply to the center-pane (most options apply _only_ to border-panes)
,	center: ("paneClass,contentSelector,contentIgnoreSelector,findNestedContent,applyDemoStyles,triggerEventsOnLoad,"
	+	"showOverflowOnHover,maskContents,maskObjects,liveContentResizing,"
	+	"containerSelector,children,initChildren,resizeChildren,destroyChildren,"
	+	"onresize,onresize_start,onresize_end,onsizecontent,onsizecontent_start,onsizecontent_end").split(",")
	// options that MUST be specifically set 'per-pane' - CANNOT set in the panes (defaults) key
,	noDefault: ("paneSelector,resizerCursor,customHotkey").split(",")
};

/**
 * Processes options passed in converts flat-format data into subkey (JSON) format
 * In flat-format, subkeys are _currently_ separated with 2 underscores, like north__optName
 * Plugins may also call this method so they can transform their own data
 *
 * @param  {!Object}	hash			Data/options passed by user - may be a single level or nested levels
 * @param  {boolean=}	[addKeys=false]	Should the primary layout.options keys be added if they do not exist?
 * @return {Object}						Returns hash of minWidth & minHeight
 */
$.layout.transformData = function (hash, addKeys) {
	var	json = addKeys ? { panes: {}, center: {} } : {} // init return object
	,	branch, optKey, keys, key, val, i, c;

	if (typeof hash !== "object") return json; // no options passed

	// convert all 'flat-keys' to 'sub-key' format
	for (optKey in hash) {
		branch	= json;
		val		= hash[ optKey ];
		keys	= optKey.split("__"); // eg: west__size or north__fxSettings__duration
		c		= keys.length - 1;
		// convert underscore-delimited to subkeys
		for (i=0; i <= c; i++) {
			key = keys[i];
			if (i === c) {	// last key = value
				if ($.isPlainObject( val ))
					branch[key] = $.layout.transformData( val ); // RECURSE
				else
					branch[key] = val;
			}
			else {
				if (!branch[key])
					branch[key] = {}; // create the subkey
				// recurse to sub-key for next loop - if not done
				branch = branch[key];
			}
		}
	}
	return json;
};

// INTERNAL CONFIG DATA - DO NOT CHANGE THIS!
$.layout.backwardCompatibility = {
	// data used by renameOldOptions()
	map: {
	//	OLD Option Name:			NEW Option Name
		applyDefaultStyles:			"applyDemoStyles"
	//	CHILD/NESTED LAYOUTS
	,	childOptions:				"children"
	,	initChildLayout:			"initChildren"
	,	destroyChildLayout:			"destroyChildren"
	,	resizeChildLayout:			"resizeChildren"
	,	resizeNestedLayout:			"resizeChildren"
	//	MISC Options
	,	resizeWhileDragging:		"livePaneResizing"
	,	resizeContentWhileDragging:	"liveContentResizing"
	,	triggerEventsWhileDragging:	"triggerEventsDuringLiveResize"
	,	maskIframesOnResize:		"maskContents"
	//	STATE MANAGEMENT
	,	useStateCookie:				"stateManagement.enabled"
	,	"cookie.autoLoad":			"stateManagement.autoLoad"
	,	"cookie.autoSave":			"stateManagement.autoSave"
	,	"cookie.keys":				"stateManagement.stateKeys"
	,	"cookie.name":				"stateManagement.cookie.name"
	,	"cookie.domain":			"stateManagement.cookie.domain"
	,	"cookie.path":				"stateManagement.cookie.path"
	,	"cookie.expires":			"stateManagement.cookie.expires"
	,	"cookie.secure":			"stateManagement.cookie.secure"
	//	OLD Language options
	,	noRoomToOpenTip:			"tips.noRoomToOpen"
	,	togglerTip_open:			"tips.Close"	// open   = Close
	,	togglerTip_closed:			"tips.Open"		// closed = Open
	,	resizerTip:					"tips.Resize"
	,	sliderTip:					"tips.Slide"
	}

/**
* @param {Object}	opts
*/
,	renameOptions: function (opts) {
		var map = $.layout.backwardCompatibility.map
		,	oldData, newData, value
		;
		for (var itemPath in map) {
			oldData	= getBranch( itemPath );
			value	= oldData.branch[ oldData.key ];
			if (value !== undefined) {
				newData = getBranch( map[itemPath], true );
				newData.branch[ newData.key ] = value;
				delete oldData.branch[ oldData.key ];
			}
		}

		/**
		* @param {string}	path
		* @param {boolean=}	[create=false]	Create path if does not exist
		*/
		function getBranch (path, create) {
			var a = path.split(".") // split keys into array
			,	c = a.length - 1
			,	D = { branch: opts, key: a[c] } // init branch at top & set key (last item)
			,	i = 0, k, undef;
			for (; i<c; i++) { // skip the last key (data)
				k = a[i];
				if (D.branch[ k ] == undefined) { // child-key does not exist
					if (create) {
						D.branch = D.branch[ k ] = {}; // create child-branch
					}
					else // can't go any farther
						D.branch = {}; // branch is undefined
				}
				else
					D.branch = D.branch[ k ]; // get child-branch
			}
			return D;
		};
	}

/**
* @param {Object}	opts
*/
,	renameAllOptions: function (opts) {
		var ren = $.layout.backwardCompatibility.renameOptions;
		// rename root (layout) options
		ren( opts );
		// rename 'defaults' to 'panes'
		if (opts.defaults) {
			if (typeof opts.panes !== "object")
				opts.panes = {};
			$.extend(true, opts.panes, opts.defaults);
			delete opts.defaults;
		}
		// rename options in the the options.panes key
		if (opts.panes) ren( opts.panes );
		// rename options inside *each pane key*, eg: options.west
		$.each($.layout.config.allPanes, function (i, pane) {
			if (opts[pane]) ren( opts[pane] );
		});	
		return opts;
	}
};




/*	============================================================
 *	BEGIN WIDGET: $( selector ).layout( {options} );
 *	============================================================
 */
$.fn.layout = function (opts) {
	var

	// local aliases to global data
	browser	= $.layout.browser
,	_c		= $.layout.config

	// local aliases to utlity methods
,	cssW	= $.layout.cssWidth
,	cssH	= $.layout.cssHeight
,	elDims	= $.layout.getElementDimensions
,	styles	= $.layout.getElementStyles
,	evtObj	= $.layout.getEventObject
,	evtPane	= $.layout.parsePaneName

/**
 * options - populated by initOptions()
 */
,	options = $.extend(true, {}, $.layout.defaults)
,	effects	= options.effects = $.extend(true, {}, $.layout.effects)

/**
 * layout-state object
 */
,	state = {
		// generate unique ID to use for event.namespace so can unbind only events added by 'this layout'
		id:				"layout"+ $.now()	// code uses alias: sID
	,	initialized:	false
	,	paneResizing:	false
	,	panesSliding:	{}
	,	container:	{ 	// list all keys referenced in code to avoid compiler error msgs
			innerWidth:		0
		,	innerHeight:	0
		,	outerWidth:		0
		,	outerHeight:	0
		,	layoutWidth:	0
		,	layoutHeight:	0
		}
	,	north:		{ childIdx: 0 }
	,	south:		{ childIdx: 0 }
	,	east:		{ childIdx: 0 }
	,	west:		{ childIdx: 0 }
	,	center:		{ childIdx: 0 }
	}

/**
 * parent/child-layout pointers
 */
//,	hasParentLayout	= false	- exists ONLY inside Instance so can be set externally
,	children = {
		north:		null
	,	south:		null
	,	east:		null
	,	west:		null
	,	center:		null
	}

/*
 * ###########################
 *  INTERNAL HELPER FUNCTIONS
 * ###########################
 */

	/**
	* Manages all internal timers
	*/
,	timer = {
		data:	{}
	,	set:	function (s, fn, ms) { timer.clear(s); timer.data[s] = setTimeout(fn, ms); }
	,	clear:	function (s) { var t=timer.data; if (t[s]) {clearTimeout(t[s]); delete t[s];} }
	}

	/**
	* Alert or console.log a message - IF option is enabled.
	*
	* @param {(string|!Object)}	msg				Message (or debug-data) to display
	* @param {boolean=}			[popup=false]	True by default, means 'alert', false means use console.log
	* @param {boolean=}			[debug=false]	True means is a widget debugging message
	*/
,	_log = function (msg, popup, debug) {
		var o = options;
		if ((o.showErrorMessages && !debug) || (debug && o.showDebugMessages))
			$.layout.msg( o.name +' / '+ msg, (popup !== false) );
		return false;
	}

	/**
	* Executes a Callback function after a trigger event, like resize, open or close
	*
	* @param {string}				evtName					Name of the layout callback, eg "onresize_start"
	* @param {(string|boolean)=}	[pane=""]				This is passed only so we can pass the 'pane object' to the callback
	* @param {(string|boolean)=}	[skipBoundEvents=false]	True = do not run events bound to the elements - only the callbacks set in options
	*/
,	_runCallbacks = function (evtName, pane, skipBoundEvents) {
		var	hasPane	= pane && isStr(pane)
		,	s		= hasPane ? state[pane] : state
		,	o		= hasPane ? options[pane] : options
		,	lName	= options.name
			// names like onopen and onopen_end separate are interchangeable in options...
		,	lng		= evtName + (evtName.match(/_/) ? "" : "_end")
		,	shrt	= lng.match(/_end$/) ? lng.substr(0, lng.length - 4) : ""
		,	fn		= o[lng] || o[shrt]
		,	retVal	= "NC" // NC = No Callback
		,	args	= []
		,	$P
		;
		if ( !hasPane && $.type(pane) === 'boolean' ) {
			skipBoundEvents = pane; // allow pane param to be skipped for Layout callback
			pane = "";
		}

		// first trigger the callback set in the options
		if (fn) {
			try {
				// convert function name (string) to function object
				if (isStr( fn )) {
					if (fn.match(/,/)) {
						// function name cannot contain a comma, 
						// so must be a function name AND a parameter to pass
						args = fn.split(",")
						,	fn = eval(args[0]);
					}
					else // just the name of an external function?
						fn = eval(fn);
				}
				// execute the callback, if exists
				if ($.isFunction( fn )) {
					if (args.length)
						retVal = g(fn)(args[1]); // pass the argument parsed from 'list'
					else if ( hasPane )
						// pass data: pane-name, pane-element, pane-state, pane-options, and layout-name
						retVal = g(fn)( pane, $Ps[pane], s, o, lName );
					else // must be a layout/container callback - pass suitable info
						retVal = g(fn)( Instance, s, o, lName );
				}
			}
			catch (ex) {
				_log( options.errors.callbackError.replace(/EVENT/, $.trim((pane || "") +" "+ lng)), false );
				if ($.type(ex) === 'string' && string.length)
					_log('Exception:  '+ ex, false );
			}
		}

		// trigger additional events bound directly to the pane
		if (!skipBoundEvents && retVal !== false) {
			if ( hasPane ) { // PANE events can be bound to each pane-elements
				$P	= $Ps[pane];
				o	= options[pane];
				s	= state[pane];
				$P.triggerHandler('layoutpane'+ lng, [ pane, $P, s, o, lName ]);
				if (shrt)
					$P.triggerHandler('layoutpane'+ shrt, [ pane, $P, s, o, lName ]);
			}
			else { // LAYOUT events can be bound to the container-element
				$N.triggerHandler('layout'+ lng, [ Instance, s, o, lName ]);
				if (shrt)
					$N.triggerHandler('layout'+ shrt, [ Instance, s, o, lName ]);
			}
		}

		// ALWAYS resizeChildren after an onresize_end event - even during initialization
		// IGNORE onsizecontent_end event because causes child-layouts to resize TWICE
		if (hasPane && evtName === "onresize_end") // BAD: || evtName === "onsizecontent_end"
			resizeChildren(pane+"", true); // compiler hack -force string

		return retVal;

		function g (f) { return f; }; // compiler hack
	}


	/**
	* cure iframe display issues in IE & other browsers
	*/
,	_fixIframe = function (pane) {
		if (browser.mozilla) return; // skip FireFox - it auto-refreshes iframes onShow
		var $P = $Ps[pane];
		// if the 'pane' is an iframe, do it
		if (state[pane].tagName === "IFRAME")
			$P.css(_c.hidden).css(_c.visible); 
		else // ditto for any iframes INSIDE the pane
			$P.find('IFRAME').css(_c.hidden).css(_c.visible);
	}

	/**
	* @param  {string}		pane		Can accept ONLY a 'pane' (east, west, etc)
	* @param  {number=}		outerSize	(optional) Can pass a width, allowing calculations BEFORE element is resized
	* @return {number}		Returns the innerHeight/Width of el by subtracting padding and borders
	*/
,	cssSize = function (pane, outerSize) {
		var fn = _c[pane].dir=="horz" ? cssH : cssW;
		return fn($Ps[pane], outerSize);
	}

	/**
	* @param  {string}		pane		Can accept ONLY a 'pane' (east, west, etc)
	* @return {Object}		Returns hash of minWidth & minHeight
	*/
,	cssMinDims = function (pane) {
		// minWidth/Height means CSS width/height = 1px
		var	$P	= $Ps[pane]
		,	dir	= _c[pane].dir
		,	d	= {
				minWidth:	1001 - cssW($P, 1000)
			,	minHeight:	1001 - cssH($P, 1000)
			}
		;
		if (dir === "horz") d.minSize = d.minHeight;
		if (dir === "vert") d.minSize = d.minWidth;
		return d;
	}

	// TODO: see if these methods can be made more useful...
	// TODO: *maybe* return cssW/H from these so caller can use this info

	/**
	* @param {(string|!Object)}		el
	* @param {number=}				outerWidth
	* @param {boolean=}				[autoHide=false]
	*/
,	setOuterWidth = function (el, outerWidth, autoHide) {
		var $E = el, w;
		if (isStr(el)) $E = $Ps[el]; // west
		else if (!el.jquery) $E = $(el);
		w = cssW($E, outerWidth);
		$E.css({ width: w });
		if (w > 0) {
			if (autoHide && $E.data('autoHidden') && $E.innerHeight() > 0) {
				$E.show().data('autoHidden', false);
				if (!browser.mozilla) // FireFox refreshes iframes - IE does not
					// make hidden, then visible to 'refresh' display after animation
					$E.css(_c.hidden).css(_c.visible);
			}
		}
		else if (autoHide && !$E.data('autoHidden'))
			$E.hide().data('autoHidden', true);
	}

	/**
	* @param {(string|!Object)}		el
	* @param {number=}				outerHeight
	* @param {boolean=}				[autoHide=false]
	*/
,	setOuterHeight = function (el, outerHeight, autoHide) {
		var $E = el, h;
		if (isStr(el)) $E = $Ps[el]; // west
		else if (!el.jquery) $E = $(el);
		h = cssH($E, outerHeight);
		$E.css({ height: h, visibility: "visible" }); // may have been 'hidden' by sizeContent
		if (h > 0 && $E.innerWidth() > 0) {
			if (autoHide && $E.data('autoHidden')) {
				$E.show().data('autoHidden', false);
				if (!browser.mozilla) // FireFox refreshes iframes - IE does not
					$E.css(_c.hidden).css(_c.visible);
			}
		}
		else if (autoHide && !$E.data('autoHidden'))
			$E.hide().data('autoHidden', true);
	}


	/**
	* Converts any 'size' params to a pixel/integer size, if not already
	* If 'auto' or a decimal/percentage is passed as 'size', a pixel-size is calculated
	*
	/**
	* @param  {string}				pane
	* @param  {(string|number)=}	size
	* @param  {string=}				[dir]
	* @return {number}
	*/
,	_parseSize = function (pane, size, dir) {
		if (!dir) dir = _c[pane].dir;

		if (isStr(size) && size.match(/%/))
			size = (size === '100%') ? -1 : parseInt(size, 10) / 100; // convert % to decimal

		if (size === 0)
			return 0;
		else if (size >= 1)
			return parseInt(size, 10);

		var o = options, avail = 0;
		if (dir=="horz") // north or south or center.minHeight
			avail = sC.innerHeight - ($Ps.north ? o.north.spacing_open : 0) - ($Ps.south ? o.south.spacing_open : 0);
		else if (dir=="vert") // east or west or center.minWidth
			avail = sC.innerWidth - ($Ps.west ? o.west.spacing_open : 0) - ($Ps.east ? o.east.spacing_open : 0);

		if (size === -1) // -1 == 100%
			return avail;
		else if (size > 0) // percentage, eg: .25
			return round(avail * size);
		else if (pane=="center")
			return 0;
		else { // size < 0 || size=='auto' || size==Missing || size==Invalid
			// auto-size the pane
			var	dim	= (dir === "horz" ? "height" : "width")
			,	$P	= $Ps[pane]
			,	$C	= dim === 'height' ? $Cs[pane] : false
			,	vis	= $.layout.showInvisibly($P) // show pane invisibly if hidden
			,	szP	= $P.css(dim) // SAVE current pane size
			,	szC	= $C ? $C.css(dim) : 0 // SAVE current content size
			;
			$P.css(dim, "auto");
			if ($C) $C.css(dim, "auto");
			size = (dim === "height") ? $P.outerHeight() : $P.outerWidth(); // MEASURE
			$P.css(dim, szP).css(vis); // RESET size & visibility
			if ($C) $C.css(dim, szC);
			return size;
		}
	}

	/**
	* Calculates current 'size' (outer-width or outer-height) of a border-pane - optionally with 'pane-spacing' added
	*
	* @param  {(string|!Object)}	pane
	* @param  {boolean=}			[inclSpace=false]
	* @return {number}				Returns EITHER Width for east/west panes OR Height for north/south panes
	*/
,	getPaneSize = function (pane, inclSpace) {
		var 
			$P	= $Ps[pane]
		,	o	= options[pane]
		,	s	= state[pane]
		,	oSp	= (inclSpace ? o.spacing_open : 0)
		,	cSp	= (inclSpace ? o.spacing_closed : 0)
		;
		if (!$P || s.isHidden)
			return 0;
		else if (s.isClosed || (s.isSliding && inclSpace))
			return cSp;
		else if (_c[pane].dir === "horz")
			return $P.outerHeight() + oSp;
		else // dir === "vert"
			return $P.outerWidth() + oSp;
	}

	/**
	* Calculate min/max pane dimensions and limits for resizing
	*
	* @param  {string}		pane
	* @param  {boolean=}	[slide=false]
	*/
,	setSizeLimits = function (pane, slide) {
		if (!isInitialized()) return;
		var 
			o				= options[pane]
		,	s				= state[pane]
		,	c				= _c[pane]
		,	dir				= c.dir
		,	type			= c.sizeType.toLowerCase()
		,	isSliding		= (slide != undefined ? slide : s.isSliding) // only open() passes 'slide' param
		,	$P				= $Ps[pane]
		,	paneSpacing		= o.spacing_open
		//	measure the pane on the *opposite side* from this pane
		,	altPane			= _c.oppositeEdge[pane]
		,	altS			= state[altPane]
		,	$altP			= $Ps[altPane]
		,	altPaneSize		= (!$altP || altS.isVisible===false || altS.isSliding ? 0 : (dir=="horz" ? $altP.outerHeight() : $altP.outerWidth()))
		,	altPaneSpacing	= ((!$altP || altS.isHidden ? 0 : options[altPane][ altS.isClosed !== false ? "spacing_closed" : "spacing_open" ]) || 0)
		//	limitSize prevents this pane from 'overlapping' opposite pane
		,	containerSize	= (dir=="horz" ? sC.innerHeight : sC.innerWidth)
		,	minCenterDims	= cssMinDims("center")
		,	minCenterSize	= dir=="horz" ? max(options.center.minHeight, minCenterDims.minHeight) : max(options.center.minWidth, minCenterDims.minWidth)
		//	if pane is 'sliding', then ignore center and alt-pane sizes - because 'overlays' them
		,	limitSize		= (containerSize - paneSpacing - (isSliding ? 0 : (_parseSize("center", minCenterSize, dir) + altPaneSize + altPaneSpacing)))
		,	minSize			= s.minSize = max( _parseSize(pane, o.minSize), cssMinDims(pane).minSize )
		,	maxSize			= s.maxSize = min( (o.maxSize ? _parseSize(pane, o.maxSize) : 100000), limitSize )
		,	r				= s.resizerPosition = {} // used to set resizing limits
		,	top				= sC.inset.top
		,	left			= sC.inset.left
		,	W				= sC.innerWidth
		,	H				= sC.innerHeight
		,	rW				= o.spacing_open // subtract resizer-width to get top/left position for south/east
		;
		switch (pane) {
			case "north":	r.min = top + minSize;
							r.max = top + maxSize;
							break;
			case "west":	r.min = left + minSize;
							r.max = left + maxSize;
							break;
			case "south":	r.min = top + H - maxSize - rW;
							r.max = top + H - minSize - rW;
							break;
			case "east":	r.min = left + W - maxSize - rW;
							r.max = left + W - minSize - rW;
							break;
		};
	}

	/**
	* Returns data for setting the size/position of center pane. Also used to set Height for east/west panes
	*
	* @return JSON  Returns a hash of all dimensions: top, bottom, left, right, (outer) width and (outer) height
	*/
,	calcNewCenterPaneDims = function () {
		var d = {
			top:	getPaneSize("north", true) // true = include 'spacing' value for pane
		,	bottom:	getPaneSize("south", true)
		,	left:	getPaneSize("west", true)
		,	right:	getPaneSize("east", true)
		,	width:	0
		,	height:	0
		};

		// NOTE: sC = state.container
		// calc center-pane outer dimensions
		d.width		= sC.innerWidth - d.left - d.right;  // outerWidth
		d.height	= sC.innerHeight - d.bottom - d.top; // outerHeight
		// add the 'container border/padding' to get final positions relative to the container
		d.top		+= sC.inset.top;
		d.bottom	+= sC.inset.bottom;
		d.left		+= sC.inset.left;
		d.right		+= sC.inset.right;

		return d;
	}


	/**
	* @param {!Object}		el
	* @param {boolean=}		[allStates=false]
	*/
,	getHoverClasses = function (el, allStates) {
		var
			$El		= $(el)
		,	type	= $El.data("layoutRole")
		,	pane	= $El.data("layoutEdge")
		,	o		= options[pane]
		,	root	= o[type +"Class"]
		,	_pane	= "-"+ pane // eg: "-west"
		,	_open	= "-open"
		,	_closed	= "-closed"
		,	_slide	= "-sliding"
		,	_hover	= "-hover " // NOTE the trailing space
		,	_state	= $El.hasClass(root+_closed) ? _closed : _open
		,	_alt	= _state === _closed ? _open : _closed
		,	classes = (root+_hover) + (root+_pane+_hover) + (root+_state+_hover) + (root+_pane+_state+_hover)
		;
		if (allStates) // when 'removing' classes, also remove alternate-state classes
			classes += (root+_alt+_hover) + (root+_pane+_alt+_hover);

		if (type=="resizer" && $El.hasClass(root+_slide))
			classes += (root+_slide+_hover) + (root+_pane+_slide+_hover);

		return $.trim(classes);
	}
,	addHover	= function (evt, el) {
		var $E = $(el || this);
		if (evt && $E.data("layoutRole") === "toggler")
			evt.stopPropagation(); // prevent triggering 'slide' on Resizer-bar
		$E.addClass( getHoverClasses($E) );
	}
,	removeHover	= function (evt, el) {
		var $E = $(el || this);
		$E.removeClass( getHoverClasses($E, true) );
	}

,	onResizerEnter	= function (evt) { // ALSO called by toggler.mouseenter
		var pane	= $(this).data("layoutEdge")
		,	s		= state[pane]
		;
		// ignore closed-panes and mouse moving back & forth over resizer!
		// also ignore if ANY pane is currently resizing
		if ( s.isClosed || s.isResizing || state.paneResizing ) return;

		if ($.fn.disableSelection)
			$("body").disableSelection();
		if (options.maskPanesEarly)
			showMasks( pane, { resizing: true });
	}
,	onResizerLeave	= function (evt, el) {
		var	e		= el || this // el is only passed when called by the timer
		,	pane	= $(e).data("layoutEdge")
		,	name	= pane +"ResizerLeave"
		;
		timer.clear(pane+"_openSlider"); // cancel slideOpen timer, if set
		timer.clear(name); // cancel enableSelection timer - may re/set below
		// this method calls itself on a timer because it needs to allow
		// enough time for dragging to kick-in and set the isResizing flag
		// dragging has a 100ms delay set, so this delay must be >100
		if (!el) // 1st call - mouseleave event
			timer.set(name, function(){ onResizerLeave(evt, e); }, 200);
		// if user is resizing, then dragStop will enableSelection(), so can skip it here
		else if ( !state.paneResizing ) { // 2nd call - by timer
			if ($.fn.enableSelection)
				$("body").enableSelection();
			if (options.maskPanesEarly)
				hideMasks();
		}
	}

/*
 * ###########################
 *   INITIALIZATION METHODS
 * ###########################
 */

	/**
	* Initialize the layout - called automatically whenever an instance of layout is created
	*
	* @see  none - triggered onInit
	* @return  mixed	true = fully initialized | false = panes not initialized (yet) | 'cancel' = abort
	*/
,	_create = function () {
		// initialize config/options
		initOptions();
		var o = options
		,	s = state;

		// TEMP state so isInitialized returns true during init process
		s.creatingLayout = true;

		// init plugins for this layout, if there are any (eg: stateManagement)
		runPluginCallbacks( Instance, $.layout.onCreate );

		// options & state have been initialized, so now run beforeLoad callback
		// onload will CANCEL layout creation if it returns false
		if (false === _runCallbacks("onload_start"))
			return 'cancel';

		// initialize the container element
		_initContainer();

		// bind hotkey function - keyDown - if required
		initHotkeys();

		// bind window.onunload
		$(window).bind("unload."+ sID, unload);

		// init plugins for this layout, if there are any (eg: customButtons)
		runPluginCallbacks( Instance, $.layout.onLoad );

		// if layout elements are hidden, then layout WILL NOT complete initialization!
		// initLayoutElements will set initialized=true and run the onload callback IF successful
		if (o.initPanes) _initLayoutElements();

		delete s.creatingLayout;

		return state.initialized;
	}

	/**
	* Initialize the layout IF not already
	*
	* @see  All methods in Instance run this test
	* @return  boolean	true = layoutElements have been initialized | false = panes are not initialized (yet)
	*/
,	isInitialized = function () {
		if (state.initialized || state.creatingLayout) return true;	// already initialized
		else return _initLayoutElements();	// try to init panes NOW
	}

	/**
	* Initialize the layout - called automatically whenever an instance of layout is created
	*
	* @see  _create() & isInitialized
	* @param {boolean=}		[retry=false]	// indicates this is a 2nd try
	* @return  An object pointer to the instance created
	*/
,	_initLayoutElements = function (retry) {
		// initialize config/options
		var o = options;
		// CANNOT init panes inside a hidden container!
		if (!$N.is(":visible")) {
			// handle Chrome bug where popup window 'has no height'
			// if layout is BODY element, try again in 50ms
			// SEE: http://layout.jquery-dev.net/samples/test_popup_window.html
			if ( !retry && browser.webkit && $N[0].tagName === "BODY" )
				setTimeout(function(){ _initLayoutElements(true); }, 50);
			return false;
		}

		// a center pane is required, so make sure it exists
		if (!getPane("center").length) {
			return _log( o.errors.centerPaneMissing );
		}

		// TEMP state so isInitialized returns true during init process
		state.creatingLayout = true;

		// update Container dims
		$.extend(sC, elDims( $N, o.inset )); // passing inset means DO NOT include insetX values

		// initialize all layout elements
		initPanes();	// size & position panes - calls initHandles() - which calls initResizable()

		if (o.scrollToBookmarkOnLoad) {
			var l = self.location;
			if (l.hash) l.replace( l.hash ); // scrollTo Bookmark
		}

		// check to see if this layout 'nested' inside a pane
		if (Instance.hasParentLayout)
			o.resizeWithWindow = false;
		// bind resizeAll() for 'this layout instance' to window.resize event
		else if (o.resizeWithWindow)
			$(window).bind("resize."+ sID, windowResize);

		delete state.creatingLayout;
		state.initialized = true;

		// init plugins for this layout, if there are any
		runPluginCallbacks( Instance, $.layout.onReady );

		// now run the onload callback, if exists
		_runCallbacks("onload_end");

		return true; // elements initialized successfully
	}

	/**
	* Initialize nested layouts for a specific pane - can optionally pass layout-options
	*
	* @param {(string|Object)}	evt_or_pane	The pane being opened, ie: north, south, east, or west
	* @param {Object=}			[opts]		Layout-options - if passed, will OVERRRIDE options[pane].children
	* @return  An object pointer to the layout instance created - or null
	*/
,	createChildren = function (evt_or_pane, opts) {
		var	pane = evtPane.call(this, evt_or_pane)
		,	$P	= $Ps[pane]
		;
		if (!$P) return;
		var	$C	= $Cs[pane]
		,	s	= state[pane]
		,	o	= options[pane]
		,	sm	= options.stateManagement || {}
		,	cos = opts ? (o.children = opts) : o.children
		;
		if ( $.isPlainObject( cos ) )
			cos = [ cos ]; // convert a hash to a 1-elem array
		else if (!cos || !$.isArray( cos ))
			return;

		$.each( cos, function (idx, co) {
			if ( !$.isPlainObject( co ) ) return;

			// determine which element is supposed to be the 'child container'
			// if pane has a 'containerSelector' OR a 'content-div', use those instead of the pane
			var $containers = co.containerSelector ? $P.find( co.containerSelector ) : ($C || $P);

			$containers.each(function(){
				var $cont	= $(this)
				,	child	= $cont.data("layout") //	see if a child-layout ALREADY exists on this element
				;
				// if no layout exists, but children are set, try to create the layout now
				if (!child) {
					// TODO: see about moving this to the stateManagement plugin, as a method
					// set a unique child-instance key for this layout, if not already set
					setInstanceKey({ container: $cont, options: co }, s );
					// If THIS layout has a hash in stateManagement.autoLoad,
					// then see if it also contains state-data for this child-layout
					// If so, copy the stateData to child.options.stateManagement.autoLoad
					if ( sm.includeChildren && state.stateData[pane] ) {
						//	THIS layout's state was cached when its state was loaded
						var	paneChildren = state.stateData[pane].children || {}
						,	childState	= paneChildren[ co.instanceKey ]
						,	co_sm		= co.stateManagement || (co.stateManagement = { autoLoad: true })
						;
						// COPY the stateData into the autoLoad key
						if ( co_sm.autoLoad === true && childState ) {
							co_sm.autoSave			= false; // disable autoSave because saving handled by parent-layout
							co_sm.includeChildren	= true;  // cascade option - FOR NOW
							co_sm.autoLoad = $.extend(true, {}, childState); // COPY the state-hash
						}
					}

					// create the layout
					child = $cont.layout( co );

					// if successful, update data
					if (child) {
						// add the child and update all layout-pointers
						// MAY have already been done by child-layout calling parent.refreshChildren()
						refreshChildren( pane, child );
					}
				}
			});
		});
	}

,	setInstanceKey = function (child, parentPaneState) {
		// create a named key for use in state and instance branches
		var	$c	= child.container
		,	o	= child.options
		,	sm	= o.stateManagement
		,	key	= o.instanceKey || $c.data("layoutInstanceKey")
		;
		if (!key) key = (sm && sm.cookie ? sm.cookie.name : '') || o.name; // look for a name/key
		if (!key) key = "layout"+ (++parentPaneState.childIdx);	// if no name/key found, generate one
		else key = key.replace(/[^\w-]/gi, '_').replace(/_{2,}/g, '_');	 // ensure is valid as a hash key
		o.instanceKey = key;
		$c.data("layoutInstanceKey", key); // useful if layout is destroyed and then recreated
		return key;
	}

	/**
	* @param {string}		pane		The pane being opened, ie: north, south, east, or west
	* @param {Object=}		newChild	New child-layout Instance to add to this pane
	*/
,	refreshChildren = function (pane, newChild) {
		var	$P	= $Ps[pane]
		,	pC	= children[pane]
		,	s	= state[pane]
		,	o
		;
		// check for destroy()ed layouts and update the child pointers & arrays
		if ($.isPlainObject( pC )) {
			$.each( pC, function (key, child) {
				if (child.destroyed) delete pC[key]
			});
			// if no more children, remove the children hash
			if ($.isEmptyObject( pC ))
				pC = children[pane] = null; // clear children hash
		}

		// see if there is a directly-nested layout inside this pane
		// if there is, then there can be only ONE child-layout, so check that...
		if (!newChild && !pC) {
			newChild = $P.data("layout");
		}

		// if a newChild instance was passed, add it to children[pane]
		if (newChild) {
			// update child.state
			newChild.hasParentLayout = true; // set parent-flag in child
			// instanceKey is a key-name used in both state and children
			o = newChild.options;
			// set a unique child-instance key for this layout, if not already set
			setInstanceKey( newChild, s );
			// add pointer to pane.children hash
			if (!pC) pC = children[pane] = {}; // create an empty children hash
			pC[ o.instanceKey ] = newChild.container.data("layout"); // add childLayout instance
		}

		// ALWAYS refresh the pane.children alias, even if null
		Instance[pane].children = children[pane];

		// if newChild was NOT passed - see if there is a child layout NOW
		if (!newChild) {
			createChildren(pane); // MAY create a child and re-call this method
		}
	}

,	windowResize = function () {
		var	o = options
		,	delay = Number(o.resizeWithWindowDelay);
		if (delay < 10) delay = 100; // MUST have a delay!
		// resizing uses a delay-loop because the resize event fires repeatly - except in FF, but delay anyway
		timer.clear("winResize"); // if already running
		timer.set("winResize", function(){
			timer.clear("winResize");
			timer.clear("winResizeRepeater");
			var dims = elDims( $N, o.inset );
			// only trigger resizeAll() if container has changed size
			if (dims.innerWidth !== sC.innerWidth || dims.innerHeight !== sC.innerHeight)
				resizeAll();
		}, delay);
		// ALSO set fixed-delay timer, if not already running
		if (!timer.data["winResizeRepeater"]) setWindowResizeRepeater();
	}

,	setWindowResizeRepeater = function () {
		var delay = Number(options.resizeWithWindowMaxDelay);
		if (delay > 0)
			timer.set("winResizeRepeater", function(){ setWindowResizeRepeater(); resizeAll(); }, delay);
	}

,	unload = function () {
		var o = options;

		_runCallbacks("onunload_start");

		// trigger plugin callabacks for this layout (eg: stateManagement)
		runPluginCallbacks( Instance, $.layout.onUnload );

		_runCallbacks("onunload_end");
	}

	/**
	* Validate and initialize container CSS and events
	*
	* @see  _create()
	*/
,	_initContainer = function () {
		var
			N		= $N[0]	
		,	$H		= $("html")
		,	tag		= sC.tagName = N.tagName
		,	id		= sC.id = N.id
		,	cls		= sC.className = N.className
		,	o		= options
		,	name	= o.name
		,	props	= "position,margin,padding,border"
		,	css		= "layoutCSS"
		,	CSS		= {}
		,	hid		= "hidden" // used A LOT!
		//	see if this container is a 'pane' inside an outer-layout
		,	parent	= $N.data("parentLayout")	// parent-layout Instance
		,	pane	= $N.data("layoutEdge")		// pane-name in parent-layout
		,	isChild	= parent && pane
		,	num		= $.layout.cssNum
		,	$parent, n
		;
		// sC = state.container
		sC.selector = $N.selector.split(".slice")[0];
		sC.ref		= (o.name ? o.name +' layout / ' : '') + tag + (id ? "#"+id : cls ? '.['+cls+']' : ''); // used in messages
		sC.isBody	= (tag === "BODY");

		// try to find a parent-layout
		if (!isChild && !sC.isBody) {
			$parent = $N.closest("."+ $.layout.defaults.panes.paneClass);
			parent	= $parent.data("parentLayout");
			pane	= $parent.data("layoutEdge");
			isChild	= parent && pane;
		}

		$N	.data({
				layout: Instance
			,	layoutContainer: sID // FLAG to indicate this is a layout-container - contains unique internal ID
			})
			.addClass(o.containerClass)
		;
		var layoutMethods = {
			destroy:	''
		,	initPanes:	''
		,	resizeAll:	'resizeAll'
		,	resize:		'resizeAll'
		};
		// loop hash and bind all methods - include layoutID namespacing
		for (name in layoutMethods) {
			$N.bind("layout"+ name.toLowerCase() +"."+ sID, Instance[ layoutMethods[name] || name ]);
		}

		// if this container is another layout's 'pane', then set child/parent pointers
		if (isChild) {
			// update parent flag
			Instance.hasParentLayout = true;
			// set pointers to THIS child-layout (Instance) in parent-layout
			parent.refreshChildren( pane, Instance );
		}

		// SAVE original container CSS for use in destroy()
		if (!$N.data(css)) {
			// handle props like overflow different for BODY & HTML - has 'system default' values
			if (sC.isBody) {
				// SAVE <BODY> CSS
				$N.data(css, $.extend( styles($N, props), {
					height:		$N.css("height")
				,	overflow:	$N.css("overflow")
				,	overflowX:	$N.css("overflowX")
				,	overflowY:	$N.css("overflowY")
				}));
				// ALSO SAVE <HTML> CSS
				$H.data(css, $.extend( styles($H, 'padding'), {
					height:		"auto" // FF would return a fixed px-size!
				,	overflow:	$H.css("overflow")
				,	overflowX:	$H.css("overflowX")
				,	overflowY:	$H.css("overflowY")
				}));
			}
			else // handle props normally for non-body elements
				$N.data(css, styles($N, props+",top,bottom,left,right,width,height,overflow,overflowX,overflowY") );
		}

		try {
			// common container CSS
			CSS = {
				overflow:	hid
			,	overflowX:	hid
			,	overflowY:	hid
			};
			$N.css( CSS );

			if (o.inset && !$.isPlainObject(o.inset)) {
				// can specify a single number for equal outset all-around
				n = parseInt(o.inset, 10) || 0
				o.inset = {
					top:	n
				,	bottom:	n
				,	left:	n
				,	right:	n
				};
			}

			// format html & body if this is a full page layout
			if (sC.isBody) {
				// if HTML has padding, use this as an outer-spacing around BODY
				if (!o.outset) {
					// use padding from parent-elem (HTML) as outset
					o.outset = {
						top:	num($H, "paddingTop")
					,	bottom:	num($H, "paddingBottom")
					,	left:	num($H, "paddingLeft")
					,	right:	num($H, "paddingRight")
					};
				}
				else if (!$.isPlainObject(o.outset)) {
					// can specify a single number for equal outset all-around
					n = parseInt(o.outset, 10) || 0
					o.outset = {
						top:	n
					,	bottom:	n
					,	left:	n
					,	right:	n
					};
				}
				// HTML
				$H.css( CSS ).css({
					height:		"100%"
				,	border:		"none"	// no border or padding allowed when using height = 100%
				,	padding:	0		// ditto
				,	margin:		0
				});
				// BODY
				if (browser.isIE6) {
					// IE6 CANNOT use the trick of setting absolute positioning on all 4 sides - must have 'height'
					$N.css({
						width:		"100%"
					,	height:		"100%"
					,	border:		"none"	// no border or padding allowed when using height = 100%
					,	padding:	0		// ditto
					,	margin:		0
					,	position:	"relative"
					});
					// convert body padding to an inset option - the border cannot be measured in IE6!
					if (!o.inset) o.inset = elDims( $N ).inset;
				}
				else { // use absolute positioning for BODY to allow borders & padding without overflow
					$N.css({
						width:		"auto"
					,	height:		"auto"
					,	margin:		0
					,	position:	"absolute"	// allows for border and padding on BODY
					});
					// apply edge-positioning created above
					$N.css( o.outset );
				}
				// set current layout-container dimensions
				$.extend(sC, elDims( $N, o.inset )); // passing inset means DO NOT include insetX values
			}
			else {
				// container MUST have 'position'
				var	p = $N.css("position");
				if (!p || !p.match(/(fixed|absolute|relative)/))
					$N.css("position","relative");

				// set current layout-container dimensions
				if ( $N.is(":visible") ) {
					$.extend(sC, elDims( $N, o.inset )); // passing inset means DO NOT change insetX (padding) values
					if (sC.innerHeight < 1) // container has no 'height' - warn developer
						_log( o.errors.noContainerHeight.replace(/CONTAINER/, sC.ref) );
				}
			}

			// if container has min-width/height, then enable scrollbar(s)
			if ( num($N, "minWidth")  ) $N.parent().css("overflowX","auto");
			if ( num($N, "minHeight") ) $N.parent().css("overflowY","auto");

		} catch (ex) {}
	}

	/**
	* Bind layout hotkeys - if options enabled
	*
	* @see  _create() and addPane()
	* @param {string=}	[panes=""]	The edge(s) to process
	*/
,	initHotkeys = function (panes) {
		panes = panes ? panes.split(",") : _c.borderPanes;
		// bind keyDown to capture hotkeys, if option enabled for ANY pane
		$.each(panes, function (i, pane) {
			var o = options[pane];
			if (o.enableCursorHotkey || o.customHotkey) {
				$(document).bind("keydown."+ sID, keyDown); // only need to bind this ONCE
				return false; // BREAK - binding was done
			}
		});
	}

	/**
	* Build final OPTIONS data
	*
	* @see  _create()
	*/
,	initOptions = function () {
		var data, d, pane, key, val, i, c, o;

		// reprocess user's layout-options to have correct options sub-key structure
		opts = $.layout.transformData( opts, true ); // panes = default subkey

		// auto-rename old options for backward compatibility
		opts = $.layout.backwardCompatibility.renameAllOptions( opts );

		// if user-options has 'panes' key (pane-defaults), clean it...
		if (!$.isEmptyObject(opts.panes)) {
			// REMOVE any pane-defaults that MUST be set per-pane
			data = $.layout.optionsMap.noDefault;
			for (i=0, c=data.length; i<c; i++) {
				key = data[i];
				delete opts.panes[key]; // OK if does not exist
			}
			// REMOVE any layout-options specified under opts.panes
			data = $.layout.optionsMap.layout;
			for (i=0, c=data.length; i<c; i++) {
				key = data[i];
				delete opts.panes[key]; // OK if does not exist
			}
		}

		// MOVE any NON-layout-options from opts-root to opts.panes
		data = $.layout.optionsMap.layout;
		var rootKeys = $.layout.config.optionRootKeys;
		for (key in opts) {
			val = opts[key];
			if ($.inArray(key, rootKeys) < 0 && $.inArray(key, data) < 0) {
				if (!opts.panes[key])
					opts.panes[key] = $.isPlainObject(val) ? $.extend(true, {}, val) : val;
				delete opts[key]
			}
		}

		// START by updating ALL options from opts
		$.extend(true, options, opts);

		// CREATE final options (and config) for EACH pane
		$.each(_c.allPanes, function (i, pane) {

			// apply 'pane-defaults' to CONFIG.[PANE]
			_c[pane] = $.extend(true, {}, _c.panes, _c[pane]);

			d = options.panes;
			o = options[pane];

			// center-pane uses SOME keys in defaults.panes branch
			if (pane === 'center') {
				// ONLY copy keys from opts.panes listed in: $.layout.optionsMap.center
				data = $.layout.optionsMap.center;		// list of 'center-pane keys'
				for (i=0, c=data.length; i<c; i++) {	// loop the list...
					key = data[i];
					// only need to use pane-default if pane-specific value not set
					if (!opts.center[key] && (opts.panes[key] || !o[key]))
						o[key] = d[key]; // pane-default
				}
			}
			else {
				// border-panes use ALL keys in defaults.panes branch
				o = options[pane] = $.extend(true, {}, d, o); // re-apply pane-specific opts AFTER pane-defaults
				createFxOptions( pane );
				// ensure all border-pane-specific base-classes exist
				if (!o.resizerClass)	o.resizerClass	= "ui-layout-resizer";
				if (!o.togglerClass)	o.togglerClass	= "ui-layout-toggler";
			}
			// ensure we have base pane-class (ALL panes)
			if (!o.paneClass) o.paneClass = "ui-layout-pane";
		});

		// update options.zIndexes if a zIndex-option specified
		var zo	= opts.zIndex
		,	z	= options.zIndexes;
		if (zo > 0) {
			z.pane_normal		= zo;
			z.content_mask		= max(zo+1, z.content_mask);	// MIN = +1
			z.resizer_normal	= max(zo+2, z.resizer_normal);	// MIN = +2
		}

		// DELETE 'panes' key now that we are done - values were copied to EACH pane
		delete options.panes;


		function createFxOptions ( pane ) {
			var	o = options[pane]
			,	d = options.panes;
			// ensure fxSettings key to avoid errors
			if (!o.fxSettings) o.fxSettings = {};
			if (!d.fxSettings) d.fxSettings = {};

			$.each(["_open","_close","_size"], function (i,n) { 
				var
					sName		= "fxName"+ n
				,	sSpeed		= "fxSpeed"+ n
				,	sSettings	= "fxSettings"+ n
					// recalculate fxName according to specificity rules
				,	fxName = o[sName] =
						o[sName]	// options.west.fxName_open
					||	d[sName]	// options.panes.fxName_open
					||	o.fxName	// options.west.fxName
					||	d.fxName	// options.panes.fxName
					||	"none"		// MEANS $.layout.defaults.panes.fxName == "" || false || null || 0
				,	fxExists	= $.effects && ($.effects[fxName] || ($.effects.effect && $.effects.effect[fxName]))
				;
				// validate fxName to ensure is valid effect - MUST have effect-config data in options.effects
				if (fxName === "none" || !options.effects[fxName] || !fxExists)
					fxName = o[sName] = "none"; // effect not loaded OR unrecognized fxName

				// set vars for effects subkeys to simplify logic
				var	fx		= options.effects[fxName] || {}	// effects.slide
				,	fx_all	= fx.all	|| null				// effects.slide.all
				,	fx_pane	= fx[pane]	|| null				// effects.slide.west
				;
				// create fxSpeed[_open|_close|_size]
				o[sSpeed] =
					o[sSpeed]				// options.west.fxSpeed_open
				||	d[sSpeed]				// options.west.fxSpeed_open
				||	o.fxSpeed				// options.west.fxSpeed
				||	d.fxSpeed				// options.panes.fxSpeed
				||	null					// DEFAULT - let fxSetting.duration control speed
				;
				// create fxSettings[_open|_close|_size]
				o[sSettings] = $.extend(
					true
				,	{}
				,	fx_all					// effects.slide.all
				,	fx_pane					// effects.slide.west
				,	d.fxSettings			// options.panes.fxSettings
				,	o.fxSettings			// options.west.fxSettings
				,	d[sSettings]			// options.panes.fxSettings_open
				,	o[sSettings]			// options.west.fxSettings_open
				);
			});

			// DONE creating action-specific-settings for this pane,
			// so DELETE generic options - are no longer meaningful
			delete o.fxName;
			delete o.fxSpeed;
			delete o.fxSettings;
		}
	}

	/**
	* Initialize module objects, styling, size and position for all panes
	*
	* @see  _initElements()
	* @param {string}	pane		The pane to process
	*/
,	getPane = function (pane) {
		var sel = options[pane].paneSelector
		if (sel.substr(0,1)==="#") // ID selector
			// NOTE: elements selected 'by ID' DO NOT have to be 'children'
			return $N.find(sel).eq(0);
		else { // class or other selector
			var $P = $N.children(sel).eq(0);
			// look for the pane nested inside a 'form' element
			return $P.length ? $P : $N.children("form:first").children(sel).eq(0);
		}
	}

	/**
	* @param {Object=}		evt
	*/
,	initPanes = function (evt) {
		// stopPropagation if called by trigger("layoutinitpanes") - use evtPane utility 
		evtPane(evt);

		// NOTE: do north & south FIRST so we can measure their height - do center LAST
		$.each(_c.allPanes, function (idx, pane) {
			addPane( pane, true );
		});

		// init the pane-handles NOW in case we have to hide or close the pane below
		initHandles();

		// now that all panes have been initialized and initially-sized,
		// make sure there is really enough space available for each pane
		$.each(_c.borderPanes, function (i, pane) {
			if ($Ps[pane] && state[pane].isVisible) { // pane is OPEN
				setSizeLimits(pane);
				makePaneFit(pane); // pane may be Closed, Hidden or Resized by makePaneFit()
			}
		});
		// size center-pane AGAIN in case we 'closed' a border-pane in loop above
		sizeMidPanes("center");

		//	Chrome/Webkit sometimes fires callbacks BEFORE it completes resizing!
		//	Before RC30.3, there was a 10ms delay here, but that caused layout 
		//	to load asynchrously, which is BAD, so try skipping delay for now

		// process pane contents and callbacks, and init/resize child-layout if exists
		$.each(_c.allPanes, function (idx, pane) {
			afterInitPane(pane);
		});
	}

	/**
	* Add a pane to the layout - subroutine of initPanes()
	*
	* @see  initPanes()
	* @param {string}	pane			The pane to process
	* @param {boolean=}	[force=false]	Size content after init
	*/
,	addPane = function (pane, force) {
		if (!force && !isInitialized()) return;
		var
			o		= options[pane]
		,	s		= state[pane]
		,	c		= _c[pane]
		,	dir		= c.dir
		,	fx		= s.fx
		,	spacing	= o.spacing_open || 0
		,	isCenter = (pane === "center")
		,	CSS		= {}
		,	$P		= $Ps[pane]
		,	size, minSize, maxSize, child
		;
		// if pane-pointer already exists, remove the old one first
		if ($P)
			removePane( pane, false, true, false );
		else
			$Cs[pane] = false; // init

		$P = $Ps[pane] = getPane(pane);
		if (!$P.length) {
			$Ps[pane] = false; // logic
			return;
		}

		// SAVE original Pane CSS
		if (!$P.data("layoutCSS")) {
			var props = "position,top,left,bottom,right,width,height,overflow,zIndex,display,backgroundColor,padding,margin,border";
			$P.data("layoutCSS", styles($P, props));
		}

		// create alias for pane data in Instance - initHandles will add more
		Instance[pane] = {
			name:		pane
		,	pane:		$Ps[pane]
		,	content:	$Cs[pane]
		,	options:	options[pane]
		,	state:		state[pane]
		,	children:	children[pane]
		};

		// add classes, attributes & events
		$P	.data({
				parentLayout:	Instance		// pointer to Layout Instance
			,	layoutPane:		Instance[pane]	// NEW pointer to pane-alias-object
			,	layoutEdge:		pane
			,	layoutRole:		"pane"
			})
			.css(c.cssReq).css("zIndex", options.zIndexes.pane_normal)
			.css(o.applyDemoStyles ? c.cssDemo : {}) // demo styles
			.addClass( o.paneClass +" "+ o.paneClass+"-"+pane ) // default = "ui-layout-pane ui-layout-pane-west" - may be a dupe of 'paneSelector'
			.bind("mouseenter."+ sID, addHover )
			.bind("mouseleave."+ sID, removeHover )
			;
		var paneMethods = {
				hide:				''
			,	show:				''
			,	toggle:				''
			,	close:				''
			,	open:				''
			,	slideOpen:			''
			,	slideClose:			''
			,	slideToggle:		''
			,	size:				'sizePane'
			,	sizePane:			'sizePane'
			,	sizeContent:		''
			,	sizeHandles:		''
			,	enableClosable:		''
			,	disableClosable:	''
			,	enableSlideable:	''
			,	disableSlideable:	''
			,	enableResizable:	''
			,	disableResizable:	''
			,	swapPanes:			'swapPanes'
			,	swap:				'swapPanes'
			,	move:				'swapPanes'
			,	removePane:			'removePane'
			,	remove:				'removePane'
			,	createChildren:		''
			,	resizeChildren:		''
			,	resizeAll:			'resizeAll'
			,	resizeLayout:		'resizeAll'
			}
		,	name;
		// loop hash and bind all methods - include layoutID namespacing
		for (name in paneMethods) {
			$P.bind("layoutpane"+ name.toLowerCase() +"."+ sID, Instance[ paneMethods[name] || name ]);
		}

		// see if this pane has a 'scrolling-content element'
		initContent(pane, false); // false = do NOT sizeContent() - called later

		if (!isCenter) {
			// call _parseSize AFTER applying pane classes & styles - but before making visible (if hidden)
			// if o.size is auto or not valid, then MEASURE the pane and use that as its 'size'
			size	= s.size = _parseSize(pane, o.size);
			minSize	= _parseSize(pane,o.minSize) || 1;
			maxSize	= _parseSize(pane,o.maxSize) || 100000;
			if (size > 0) size = max(min(size, maxSize), minSize);
			s.autoResize = o.autoResize; // used with percentage sizes

			// state for border-panes
			s.isClosed  = false; // true = pane is closed
			s.isSliding = false; // true = pane is currently open by 'sliding' over adjacent panes
			s.isResizing= false; // true = pane is in process of being resized
			s.isHidden	= false; // true = pane is hidden - no spacing, resizer or toggler is visible!

			// array for 'pin buttons' whose classNames are auto-updated on pane-open/-close
			if (!s.pins) s.pins = [];
		}
		//	states common to ALL panes
		s.tagName	= $P[0].tagName;
		s.edge		= pane;		// useful if pane is (or about to be) 'swapped' - easy find out where it is (or is going)
		s.noRoom	= false;	// true = pane 'automatically' hidden due to insufficient room - will unhide automatically
		s.isVisible	= true;		// false = pane is invisible - closed OR hidden - simplify logic

		// init pane positioning
		setPanePosition( pane );

		// if pane is not visible, 
		if (dir === "horz") // north or south pane
			CSS.height = cssH($P, size);
		else if (dir === "vert") // east or west pane
			CSS.width = cssW($P, size);
		//else if (isCenter) {}

		$P.css(CSS); // apply size -- top, bottom & height will be set by sizeMidPanes
		if (dir != "horz") sizeMidPanes(pane, true); // true = skipCallback

		// if manually adding a pane AFTER layout initialization, then...
		if (state.initialized) {
			initHandles( pane );
			initHotkeys( pane );
		}

		// close or hide the pane if specified in settings
		if (o.initClosed && o.closable && !o.initHidden)
			close(pane, true, true); // true, true = force, noAnimation
		else if (o.initHidden || o.initClosed)
			hide(pane); // will be completely invisible - no resizer or spacing
		else if (!s.noRoom)
			// make the pane visible - in case was initially hidden
			$P.css("display","block");
		// ELSE setAsOpen() - called later by initHandles()

		// RESET visibility now - pane will appear IF display:block
		$P.css("visibility","visible");

		// check option for auto-handling of pop-ups & drop-downs
		if (o.showOverflowOnHover)
			$P.hover( allowOverflow, resetOverflow );

		// if manually adding a pane AFTER layout initialization, then...
		if (state.initialized) {
			afterInitPane( pane );
		}
	}

,	afterInitPane = function (pane) {
		var	$P	= $Ps[pane]
		,	s	= state[pane]
		,	o	= options[pane]
		;
		if (!$P) return;

		// see if there is a directly-nested layout inside this pane
		if ($P.data("layout"))
			refreshChildren( pane, $P.data("layout") );

		// process pane contents and callbacks, and init/resize child-layout if exists
		if (s.isVisible) { // pane is OPEN
			if (state.initialized) // this pane was added AFTER layout was created
				resizeAll(); // will also sizeContent
			else
				sizeContent(pane);

			if (o.triggerEventsOnLoad)
				_runCallbacks("onresize_end", pane);
			else // automatic if onresize called, otherwise call it specifically
				// resize child - IF inner-layout already exists (created before this layout)
				resizeChildren(pane, true); // a previously existing childLayout
		}

		// init childLayouts - even if pane is not visible
		if (o.initChildren && o.children)
			createChildren(pane);
	}

	/**
	* @param {string=}	panes		The pane(s) to process
	*/
,	setPanePosition = function (panes) {
		panes = panes ? panes.split(",") : _c.borderPanes;

		// create toggler DIVs for each pane, and set object pointers for them, eg: $R.north = north toggler DIV
		$.each(panes, function (i, pane) {
			var $P	= $Ps[pane]
			,	$R	= $Rs[pane]
			,	o	= options[pane]
			,	s	= state[pane]
			,	side =  _c[pane].side
			,	CSS	= {}
			;
			if (!$P) return; // pane does not exist - skip

			// set css-position to account for container borders & padding
			switch (pane) {
				case "north": 	CSS.top 	= sC.inset.top;
								CSS.left 	= sC.inset.left;
								CSS.right	= sC.inset.right;
								break;
				case "south": 	CSS.bottom	= sC.inset.bottom;
								CSS.left 	= sC.inset.left;
								CSS.right 	= sC.inset.right;
								break;
				case "west": 	CSS.left 	= sC.inset.left; // top, bottom & height set by sizeMidPanes()
								break;
				case "east": 	CSS.right 	= sC.inset.right; // ditto
								break;
				case "center":	// top, left, width & height set by sizeMidPanes()
			}
			// apply position
			$P.css(CSS); 

			// update resizer position
			if ($R && s.isClosed)
				$R.css(side, sC.inset[side]);
			else if ($R && !s.isHidden)
				$R.css(side, sC.inset[side] + getPaneSize(pane));
		});
	}

	/**
	* Initialize module objects, styling, size and position for all resize bars and toggler buttons
	*
	* @see  _create()
	* @param {string=}	[panes=""]	The edge(s) to process
	*/
,	initHandles = function (panes) {
		panes = panes ? panes.split(",") : _c.borderPanes;

		// create toggler DIVs for each pane, and set object pointers for them, eg: $R.north = north toggler DIV
		$.each(panes, function (i, pane) {
			var $P		= $Ps[pane];
			$Rs[pane]	= false; // INIT
			$Ts[pane]	= false;
			if (!$P) return; // pane does not exist - skip

			var	o		= options[pane]
			,	s		= state[pane]
			,	c		= _c[pane]
			,	paneId	= o.paneSelector.substr(0,1) === "#" ? o.paneSelector.substr(1) : ""
			,	rClass	= o.resizerClass
			,	tClass	= o.togglerClass
			,	spacing	= (s.isVisible ? o.spacing_open : o.spacing_closed)
			,	_pane	= "-"+ pane // used for classNames
			,	_state	= (s.isVisible ? "-open" : "-closed") // used for classNames
			,	I		= Instance[pane]
				// INIT RESIZER BAR
			,	$R		= I.resizer = $Rs[pane] = $("<div></div>")
				// INIT TOGGLER BUTTON
			,	$T		= I.toggler = (o.closable ? $Ts[pane] = $("<div></div>") : false)
			;

			//if (s.isVisible && o.resizable) ... handled by initResizable
			if (!s.isVisible && o.slidable)
				$R.attr("title", o.tips.Slide).css("cursor", o.sliderCursor);

			$R	// if paneSelector is an ID, then create a matching ID for the resizer, eg: "#paneLeft" => "paneLeft-resizer"
				.attr("id", paneId ? paneId +"-resizer" : "" )
				.data({
					parentLayout:	Instance
				,	layoutPane:		Instance[pane]	// NEW pointer to pane-alias-object
				,	layoutEdge:		pane
				,	layoutRole:		"resizer"
				})
				.css(_c.resizers.cssReq).css("zIndex", options.zIndexes.resizer_normal)
				.css(o.applyDemoStyles ? _c.resizers.cssDemo : {}) // add demo styles
				.addClass(rClass +" "+ rClass+_pane)
				.hover(addHover, removeHover) // ALWAYS add hover-classes, even if resizing is not enabled - handle with CSS instead
				.hover(onResizerEnter, onResizerLeave) // ALWAYS NEED resizer.mouseleave to balance toggler.mouseenter
				.appendTo($N) // append DIV to container
			;
			if (o.resizerDblClickToggle)
				$R.bind("dblclick."+ sID, toggle );

			if ($T) {
				$T	// if paneSelector is an ID, then create a matching ID for the resizer, eg: "#paneLeft" => "#paneLeft-toggler"
					.attr("id", paneId ? paneId +"-toggler" : "" )
					.data({
						parentLayout:	Instance
					,	layoutPane:		Instance[pane]	// NEW pointer to pane-alias-object
					,	layoutEdge:		pane
					,	layoutRole:		"toggler"
					})
					.css(_c.togglers.cssReq) // add base/required styles
					.css(o.applyDemoStyles ? _c.togglers.cssDemo : {}) // add demo styles
					.addClass(tClass +" "+ tClass+_pane)
					.hover(addHover, removeHover) // ALWAYS add hover-classes, even if toggling is not enabled - handle with CSS instead
					.bind("mouseenter", onResizerEnter) // NEED toggler.mouseenter because mouseenter MAY NOT fire on resizer
					.appendTo($R) // append SPAN to resizer DIV
				;
				// ADD INNER-SPANS TO TOGGLER
				if (o.togglerContent_open) // ui-layout-open
					$("<span>"+ o.togglerContent_open +"</span>")
						.data({
							layoutEdge:		pane
						,	layoutRole:		"togglerContent"
						})
						.data("layoutRole", "togglerContent")
						.data("layoutEdge", pane)
						.addClass("content content-open")
						.css("display","none")
						.appendTo( $T )
						//.hover( addHover, removeHover ) // use ui-layout-toggler-west-hover .content-open instead!
					;
				if (o.togglerContent_closed) // ui-layout-closed
					$("<span>"+ o.togglerContent_closed +"</span>")
						.data({
							layoutEdge:		pane
						,	layoutRole:		"togglerContent"
						})
						.addClass("content content-closed")
						.css("display","none")
						.appendTo( $T )
						//.hover( addHover, removeHover ) // use ui-layout-toggler-west-hover .content-closed instead!
					;
				// ADD TOGGLER.click/.hover
				enableClosable(pane);
			}

			// add Draggable events
			initResizable(pane);

			// ADD CLASSNAMES & SLIDE-BINDINGS - eg: class="resizer resizer-west resizer-open"
			if (s.isVisible)
				setAsOpen(pane);	// onOpen will be called, but NOT onResize
			else {
				setAsClosed(pane);	// onClose will be called
				bindStartSlidingEvents(pane, true); // will enable events IF option is set
			}

		});

		// SET ALL HANDLE DIMENSIONS
		sizeHandles();
	}


	/**
	* Initialize scrolling ui-layout-content div - if exists
	*
	* @see  initPane() - or externally after an Ajax injection
	* @param {string}	pane			The pane to process
	* @param {boolean=}	[resize=true]	Size content after init
	*/
,	initContent = function (pane, resize) {
		if (!isInitialized()) return;
		var 
			o	= options[pane]
		,	sel	= o.contentSelector
		,	I	= Instance[pane]
		,	$P	= $Ps[pane]
		,	$C
		;
		if (sel) $C = I.content = $Cs[pane] = (o.findNestedContent)
			? $P.find(sel).eq(0) // match 1-element only
			: $P.children(sel).eq(0)
		;
		if ($C && $C.length) {
			$C.data("layoutRole", "content");
			// SAVE original Content CSS
			if (!$C.data("layoutCSS"))
				$C.data("layoutCSS", styles($C, "height"));
			$C.css( _c.content.cssReq );
			if (o.applyDemoStyles) {
				$C.css( _c.content.cssDemo ); // add padding & overflow: auto to content-div
				$P.css( _c.content.cssDemoPane ); // REMOVE padding/scrolling from pane
			}
			// ensure no vertical scrollbar on pane - will mess up measurements
			if ($P.css("overflowX").match(/(scroll|auto)/)) {
				$P.css("overflow", "hidden");
			}
			state[pane].content = {}; // init content state
			if (resize !== false) sizeContent(pane);
			// sizeContent() is called AFTER init of all elements
		}
		else
			I.content = $Cs[pane] = false;
	}


	/**
	* Add resize-bars to all panes that specify it in options
	* -dependancy: $.fn.resizable - will skip if not found
	*
	* @see  _create()
	* @param {string=}	[panes=""]	The edge(s) to process
	*/
,	initResizable = function (panes) {
		var	draggingAvailable = $.layout.plugins.draggable
		,	side // set in start()
		;
		panes = panes ? panes.split(",") : _c.borderPanes;

		$.each(panes, function (idx, pane) {
			var o = options[pane];
			if (!draggingAvailable || !$Ps[pane] || !o.resizable) {
				o.resizable = false;
				return true; // skip to next
			}

			var s		= state[pane]
			,	z		= options.zIndexes
			,	c		= _c[pane]
			,	side	= c.dir=="horz" ? "top" : "left"
			,	$P 		= $Ps[pane]
			,	$R		= $Rs[pane]
			,	base	= o.resizerClass
			,	lastPos	= 0 // used when live-resizing
			,	r, live // set in start because may change
			//	'drag' classes are applied to the ORIGINAL resizer-bar while dragging is in process
			,	resizerClass		= base+"-drag"				// resizer-drag
			,	resizerPaneClass	= base+"-"+pane+"-drag"		// resizer-north-drag
			//	'helper' class is applied to the CLONED resizer-bar while it is being dragged
			,	helperClass			= base+"-dragging"			// resizer-dragging
			,	helperPaneClass		= base+"-"+pane+"-dragging" // resizer-north-dragging
			,	helperLimitClass	= base+"-dragging-limit"	// resizer-drag
			,	helperPaneLimitClass = base+"-"+pane+"-dragging-limit"	// resizer-north-drag
			,	helperClassesSet	= false 					// logic var
			;

			if (!s.isClosed)
				$R.attr("title", o.tips.Resize)
				  .css("cursor", o.resizerCursor); // n-resize, s-resize, etc

			$R.draggable({
				containment:	$N[0] // limit resizing to layout container
			,	axis:			(c.dir=="horz" ? "y" : "x") // limit resizing to horz or vert axis
			,	delay:			0
			,	distance:		1
			,	grid:			o.resizingGrid
			//	basic format for helper - style it using class: .ui-draggable-dragging
			,	helper:			"clone"
			,	opacity:		o.resizerDragOpacity
			,	addClasses:		false // avoid ui-state-disabled class when disabled
			//,	iframeFix:		o.draggableIframeFix // TODO: consider using when bug is fixed
			,	zIndex:			z.resizer_drag

			,	start: function (e, ui) {
					// REFRESH options & state pointers in case we used swapPanes
					o = options[pane];
					s = state[pane];
					// re-read options
					live = o.livePaneResizing;

					// ondrag_start callback - will CANCEL hide if returns false
					// TODO: dragging CANNOT be cancelled like this, so see if there is a way?
					if (false === _runCallbacks("ondrag_start", pane)) return false;

					s.isResizing		= true; // prevent pane from closing while resizing
					state.paneResizing	= pane; // easy to see if ANY pane is resizing
					timer.clear(pane+"_closeSlider"); // just in case already triggered

					// SET RESIZER LIMITS - used in drag()
					setSizeLimits(pane); // update pane/resizer state
					r = s.resizerPosition;
					lastPos = ui.position[ side ]

					$R.addClass( resizerClass +" "+ resizerPaneClass ); // add drag classes
					helperClassesSet = false; // reset logic var - see drag()

					// DISABLE TEXT SELECTION (probably already done by resizer.mouseOver)
					$('body').disableSelection(); 

					// MASK PANES CONTAINING IFRAMES, APPLETS OR OTHER TROUBLESOME ELEMENTS
					showMasks( pane, { resizing: true });
				}

			,	drag: function (e, ui) {
					if (!helperClassesSet) { // can only add classes after clone has been added to the DOM
						//$(".ui-draggable-dragging")
						ui.helper
							.addClass( helperClass +" "+ helperPaneClass ) // add helper classes
							.css({ right: "auto", bottom: "auto" })	// fix dir="rtl" issue
							.children().css("visibility","hidden")	// hide toggler inside dragged resizer-bar
						;
						helperClassesSet = true;
						// draggable bug!? RE-SET zIndex to prevent E/W resize-bar showing through N/S pane!
						if (s.isSliding) $Ps[pane].css("zIndex", z.pane_sliding);
					}
					// CONTAIN RESIZER-BAR TO RESIZING LIMITS
					var limit = 0;
					if (ui.position[side] < r.min) {
						ui.position[side] = r.min;
						limit = -1;
					}
					else if (ui.position[side] > r.max) {
						ui.position[side] = r.max;
						limit = 1;
					}
					// ADD/REMOVE dragging-limit CLASS
					if (limit) {
						ui.helper.addClass( helperLimitClass +" "+ helperPaneLimitClass ); // at dragging-limit
						window.defaultStatus = (limit>0 && pane.match(/(north|west)/)) || (limit<0 && pane.match(/(south|east)/)) ? o.tips.maxSizeWarning : o.tips.minSizeWarning;
					}
					else {
						ui.helper.removeClass( helperLimitClass +" "+ helperPaneLimitClass ); // not at dragging-limit
						window.defaultStatus = "";
					}
					// DYNAMICALLY RESIZE PANES IF OPTION ENABLED
					// won't trigger unless resizer has actually moved!
					if (live && Math.abs(ui.position[side] - lastPos) >= o.liveResizingTolerance) {
						lastPos = ui.position[side];
						resizePanes(e, ui, pane)
					}
				}

			,	stop: function (e, ui) {
					$('body').enableSelection(); // RE-ENABLE TEXT SELECTION
					window.defaultStatus = ""; // clear 'resizing limit' message from statusbar
					$R.removeClass( resizerClass +" "+ resizerPaneClass ); // remove drag classes from Resizer
					s.isResizing		= false;
					state.paneResizing	= false; // easy to see if ANY pane is resizing
					resizePanes(e, ui, pane, true); // true = resizingDone
				}

			});
		});

		/**
		* resizePanes
		*
		* Sub-routine called from stop() - and drag() if livePaneResizing
		*
		* @param {!Object}		evt
		* @param {!Object}		ui
		* @param {string}		pane
		* @param {boolean=}		[resizingDone=false]
		*/
		var resizePanes = function (evt, ui, pane, resizingDone) {
			var	dragPos	= ui.position
			,	c		= _c[pane]
			,	o		= options[pane]
			,	s		= state[pane]
			,	resizerPos
			;
			switch (pane) {
				case "north":	resizerPos = dragPos.top; break;
				case "west":	resizerPos = dragPos.left; break;
				case "south":	resizerPos = sC.layoutHeight - dragPos.top  - o.spacing_open; break;
				case "east":	resizerPos = sC.layoutWidth  - dragPos.left - o.spacing_open; break;
			};
			// remove container margin from resizer position to get the pane size
			var newSize = resizerPos - sC.inset[c.side];

			// Disable OR Resize Mask(s) created in drag.start
			if (!resizingDone) {
				// ensure we meet liveResizingTolerance criteria
				if (Math.abs(newSize - s.size) < o.liveResizingTolerance)
					return; // SKIP resize this time
				// resize the pane
				manualSizePane(pane, newSize, false, true); // true = noAnimation
				sizeMasks(); // resize all visible masks
			}
			else { // resizingDone
				// ondrag_end callback
				if (false !== _runCallbacks("ondrag_end", pane))
					manualSizePane(pane, newSize, false, true); // true = noAnimation
				hideMasks(true); // true = force hiding all masks even if one is 'sliding'
				if (s.isSliding) // RE-SHOW 'object-masks' so objects won't show through sliding pane
					showMasks( pane, { resizing: true });
			}
		};
	}

	/**
	*	sizeMask
	*
	*	Needed to overlay a DIV over an IFRAME-pane because mask CANNOT be *inside* the pane
	*	Called when mask created, and during livePaneResizing
	*/
,	sizeMask = function () {
		var $M		= $(this)
		,	pane	= $M.data("layoutMask") // eg: "west"
		,	s		= state[pane]
		;
		// only masks over an IFRAME-pane need manual resizing
		if (s.tagName == "IFRAME" && s.isVisible) // no need to mask closed/hidden panes
			$M.css({
				top:	s.offsetTop
			,	left:	s.offsetLeft
			,	width:	s.outerWidth
			,	height:	s.outerHeight
			});
		/* ALT Method...
		var $P = $Ps[pane];
		$M.css( $P.position() ).css({ width: $P[0].offsetWidth, height: $P[0].offsetHeight });
		*/
	}
,	sizeMasks = function () {
		$Ms.each( sizeMask ); // resize all 'visible' masks
	}

	/**
	* @param {string}	pane		The pane being resized, animated or isSliding
	* @param {Object=}	[args]		(optional) Options: which masks to apply, and to which panes
	*/
,	showMasks = function (pane, args) {
		var	c		= _c[pane]
		,	panes	=  ["center"]
		,	z		= options.zIndexes
		,	a		= $.extend({
						objectsOnly:	false
					,	animation:		false
					,	resizing:		true
					,	sliding:		state[pane].isSliding
					},	args )
		,	o, s
		;
		if (a.resizing)
			panes.push( pane );
		if (a.sliding)
			panes.push( _c.oppositeEdge[pane] ); // ADD the oppositeEdge-pane

		if (c.dir === "horz") {
			panes.push("west");
			panes.push("east");
		}

		$.each(panes, function(i,p){
			s = state[p];
			o = options[p];
			if (s.isVisible && ( o.maskObjects || (!a.objectsOnly && o.maskContents) )) {
				getMasks(p).each(function(){
					sizeMask.call(this);
					this.style.zIndex = s.isSliding ? z.pane_sliding+1 : z.pane_normal+1
					this.style.display = "block";
				});
			}
		});
	}

	/**
	* @param {boolean=}	force		Hide masks even if a pane is sliding
	*/
,	hideMasks = function (force) {
		// ensure no pane is resizing - could be a timing issue
		if (force || !state.paneResizing) {
			$Ms.hide(); // hide ALL masks
		}
		// if ANY pane is sliding, then DO NOT remove masks from panes with maskObjects enabled
		else if (!force && !$.isEmptyObject( state.panesSliding )) {
			var	i = $Ms.length - 1
			,	p, $M;
			for (; i >= 0; i--) {
				$M	= $Ms.eq(i);
				p	= $M.data("layoutMask");
				if (!options[p].maskObjects) {
					$M.hide();
				}
			}
		}
	}

	/**
	* @param {string}	pane
	*/
,	getMasks = function (pane) {
		var $Masks	= $([])
		,	$M, i = 0, c = $Ms.length
		;
		for (; i<c; i++) {
			$M = $Ms.eq(i);
			if ($M.data("layoutMask") === pane)
				$Masks = $Masks.add( $M );
		}
		if ($Masks.length)
			return $Masks;
		else
			return createMasks(pane);
	}

	/**
	* createMasks
	*
	* Generates both DIV (ALWAYS used) and IFRAME (optional) elements as masks
	* An IFRAME mask is created *under* the DIV when maskObjects=true, because a DIV cannot mask an applet
	*
	* @param {string}	pane
	*/
,	createMasks = function (pane) {
		var
			$P		= $Ps[pane]
		,	s		= state[pane]
		,	o		= options[pane]
		,	z		= options.zIndexes
		//,	objMask	= o.maskObjects && s.tagName != "IFRAME" // check for option
		,	$Masks	= $([])
		,	isIframe, el, $M, css, i
		;
		if (!o.maskContents && !o.maskObjects) return $Masks;
		// if o.maskObjects=true, then loop TWICE to create BOTH kinds of mask, else only create a DIV
		for (i=0; i < (o.maskObjects ? 2 : 1); i++) {
			isIframe = o.maskObjects && i==0;
			el = document.createElement( isIframe ? "iframe" : "div" );
			$M = $(el).data("layoutMask", pane); // add data to relate mask to pane
			el.className = "ui-layout-mask ui-layout-mask-"+ pane; // for user styling
			css = el.style;
			// styles common to both DIVs and IFRAMES
			css.display		= "block";
			css.position	= "absolute";
			css.background	= "#FFF";
			if (isIframe) { // IFRAME-only props
				el.frameborder = 0;
				el.src		= "about:blank";
				//el.allowTransparency = true; - for IE, but breaks masking ability!
				css.opacity	= 0;
				css.filter	= "Alpha(Opacity='0')";
				css.border	= 0;
			}
			// if pane is an IFRAME, then must mask the pane itself
			if (s.tagName == "IFRAME") {
				// NOTE sizing done by a subroutine so can be called during live-resizing
				css.zIndex	= z.pane_normal+1; // 1-higher than pane
				$N.append( el ); // append to LAYOUT CONTAINER
			}
			// otherwise put masks *inside the pane* to mask its contents
			else {
				$M.addClass("ui-layout-mask-inside-pane");
				css.zIndex	= o.maskZindex || z.content_mask; // usually 1, but customizable
				css.top		= 0;
				css.left	= 0;
				css.width	= "100%";
				css.height	= "100%";
				$P.append( el ); // append INSIDE pane element
			}
			// add to return object
			$Masks = $Masks.add( el );
			// add Mask to cached array so can be resized & reused
			$Ms = $Ms.add( el );
		}
		return $Masks;
	}


	/**
	* Destroy this layout and reset all elements
	*
	* @param {boolean=}	[destroyChildren=false]		Destory Child-Layouts first?
	*/
,	destroy = function (evt_or_destroyChildren, destroyChildren) {
		// UNBIND layout events and remove global object
		$(window).unbind("."+ sID);		// resize & unload
		$(document).unbind("."+ sID);	// keyDown (hotkeys)

		if (typeof evt_or_destroyChildren === "object")
			// stopPropagation if called by trigger("layoutdestroy") - use evtPane utility 
			evtPane(evt_or_destroyChildren);
		else // no event, so transfer 1st param to destroyChildren param
			destroyChildren = evt_or_destroyChildren;

		// need to look for parent layout BEFORE we remove the container data, else skips a level
		//var parentPane = Instance.hasParentLayout ? $.layout.getParentPaneInstance( $N ) : null;

		// reset layout-container
		$N	.clearQueue()
			.removeData("layout")
			.removeData("layoutContainer")
			.removeClass(options.containerClass)
			.unbind("."+ sID) // remove ALL Layout events
		;

		// remove all mask elements that have been created
		$Ms.remove();

		// loop all panes to remove layout classes, attributes and bindings
		$.each(_c.allPanes, function (i, pane) {
			removePane( pane, false, true, destroyChildren ); // true = skipResize
		});

		// do NOT reset container CSS if is a 'pane' (or 'content') in an outer-layout - ie, THIS layout is 'nested'
		var css = "layoutCSS";
		if ($N.data(css) && !$N.data("layoutRole")) // RESET CSS
			$N.css( $N.data(css) ).removeData(css);

		// for full-page layouts, also reset the <HTML> CSS
		if (sC.tagName === "BODY" && ($N = $("html")).data(css)) // RESET <HTML> CSS
			$N.css( $N.data(css) ).removeData(css);

		// trigger plugins for this layout, if there are any
		runPluginCallbacks( Instance, $.layout.onDestroy );

		// trigger state-management and onunload callback
		unload();

		// clear the Instance of everything except for container & options (so could recreate)
		// RE-CREATE: myLayout = myLayout.container.layout( myLayout.options );
		for (var n in Instance)
			if (!n.match(/^(container|options)$/)) delete Instance[ n ];
		// add a 'destroyed' flag to make it easy to check
		Instance.destroyed = true;

		// if this is a child layout, CLEAR the child-pointer in the parent
		/* for now the pointer REMAINS, but with only container, options and destroyed keys
		if (parentPane) {
			var layout	= parentPane.pane.data("parentLayout")
			,	key		= layout.options.instanceKey || 'error';
			// THIS SYNTAX MAY BE WRONG!
			parentPane.children[key] = layout.children[ parentPane.name ].children[key] = null;
		}
		*/

		return Instance; // for coding convenience
	}

	/**
	* Remove a pane from the layout - subroutine of destroy()
	*
	* @see  destroy()
	* @param {(string|Object)}	evt_or_pane			The pane to process
	* @param {boolean=}			[remove=false]		Remove the DOM element?
	* @param {boolean=}			[skipResize=false]	Skip calling resizeAll()?
	* @param {boolean=}			[destroyChild=true]	Destroy Child-layouts? If not passed, obeys options setting
	*/
,	removePane = function (evt_or_pane, remove, skipResize, destroyChild) {
		if (!isInitialized()) return;
		var	pane = evtPane.call(this, evt_or_pane)
		,	$P	= $Ps[pane]
		,	$C	= $Cs[pane]
		,	$R	= $Rs[pane]
		,	$T	= $Ts[pane]
		;
		// NOTE: elements can still exist even after remove()
		//		so check for missing data(), which is cleared by removed()
		if ($P && $.isEmptyObject( $P.data() )) $P = false;
		if ($C && $.isEmptyObject( $C.data() )) $C = false;
		if ($R && $.isEmptyObject( $R.data() )) $R = false;
		if ($T && $.isEmptyObject( $T.data() )) $T = false;

		if ($P) $P.stop(true, true);

		var	o	= options[pane]
		,	s	= state[pane]
		,	d	= "layout"
		,	css	= "layoutCSS"
		,	pC	= children[pane]
		,	hasChildren	= $.isPlainObject( pC ) && !$.isEmptyObject( pC )
		,	destroy		= destroyChild !== undefined ? destroyChild : o.destroyChildren
		;
		// FIRST destroy the child-layout(s)
		if (hasChildren && destroy) {
			$.each( pC, function (key, child) {
				if (!child.destroyed)
					child.destroy(true);// tell child-layout to destroy ALL its child-layouts too
				if (child.destroyed)	// destroy was successful
					delete pC[key];
			});
			// if no more children, remove the children hash
			if ($.isEmptyObject( pC )) {
				pC = children[pane] = null; // clear children hash
				hasChildren = false;
			}
		}

		// Note: can't 'remove' a pane element with non-destroyed children
		if ($P && remove && !hasChildren)
			$P.remove(); // remove the pane-element and everything inside it
		else if ($P && $P[0]) {
			//	create list of ALL pane-classes that need to be removed
			var	root	= o.paneClass // default="ui-layout-pane"
			,	pRoot	= root +"-"+ pane // eg: "ui-layout-pane-west"
			,	_open	= "-open"
			,	_sliding= "-sliding"
			,	_closed	= "-closed"
			,	classes	= [	root, root+_open, root+_closed, root+_sliding,		// generic classes
							pRoot, pRoot+_open, pRoot+_closed, pRoot+_sliding ]	// pane-specific classes
			;
			$.merge(classes, getHoverClasses($P, true)); // ADD hover-classes
			// remove all Layout classes from pane-element
			$P	.removeClass( classes.join(" ") ) // remove ALL pane-classes
				.removeData("parentLayout")
				.removeData("layoutPane")
				.removeData("layoutRole")
				.removeData("layoutEdge")
				.removeData("autoHidden")	// in case set
				.unbind("."+ sID) // remove ALL Layout events
				// TODO: remove these extra unbind commands when jQuery is fixed
				//.unbind("mouseenter"+ sID)
				//.unbind("mouseleave"+ sID)
			;
			// do NOT reset CSS if this pane/content is STILL the container of a nested layout!
			// the nested layout will reset its 'container' CSS when/if it is destroyed
			if (hasChildren && $C) {
				// a content-div may not have a specific width, so give it one to contain the Layout
				$C.width( $C.width() );
				$.each( pC, function (key, child) {
					child.resizeAll(); // resize the Layout
				});
			}
			else if ($C)
				$C.css( $C.data(css) ).removeData(css).removeData("layoutRole");
			// remove pane AFTER content in case there was a nested layout
			if (!$P.data(d))
				$P.css( $P.data(css) ).removeData(css);
		}

		// REMOVE pane resizer and toggler elements
		if ($T) $T.remove();
		if ($R) $R.remove();

		// CLEAR all pointers and state data
		Instance[pane] = $Ps[pane] = $Cs[pane] = $Rs[pane] = $Ts[pane] = false;
		s = { removed: true };

		if (!skipResize)
			resizeAll();
	}


/*
 * ###########################
 *	   ACTION METHODS
 * ###########################
 */

	/**
	* @param {string}	pane
	*/
,	_hidePane = function (pane) {
		var $P	= $Ps[pane]
		,	o	= options[pane]
		,	s	= $P[0].style
		;
		if (o.useOffscreenClose) {
			if (!$P.data(_c.offscreenReset))
				$P.data(_c.offscreenReset, { left: s.left, right: s.right });
			$P.css( _c.offscreenCSS );
		}
		else
			$P.hide().removeData(_c.offscreenReset);
	}

	/**
	* @param {string}	pane
	*/
,	_showPane = function (pane) {
		var $P	= $Ps[pane]
		,	o	= options[pane]
		,	off	= _c.offscreenCSS
		,	old	= $P.data(_c.offscreenReset)
		,	s	= $P[0].style
		;
		$P	.show() // ALWAYS show, just in case
			.removeData(_c.offscreenReset);
		if (o.useOffscreenClose && old) {
			if (s.left == off.left)
				s.left = old.left;
			if (s.right == off.right)
				s.right = old.right;
		}
	}


	/**
	* Completely 'hides' a pane, including its spacing - as if it does not exist
	* The pane is not actually 'removed' from the source, so can use 'show' to un-hide it
	*
	* @param {(string|Object)}	evt_or_pane			The pane being hidden, ie: north, south, east, or west
	* @param {boolean=}			[noAnimation=false]	
	*/
,	hide = function (evt_or_pane, noAnimation) {
		if (!isInitialized()) return;
		var	pane = evtPane.call(this, evt_or_pane)
		,	o	= options[pane]
		,	s	= state[pane]
		,	$P	= $Ps[pane]
		,	$R	= $Rs[pane]
		;
		if (!$P || s.isHidden) return; // pane does not exist OR is already hidden

		// onhide_start callback - will CANCEL hide if returns false
		if (state.initialized && false === _runCallbacks("onhide_start", pane)) return;

		s.isSliding = false; // just in case
		delete state.panesSliding[pane];

		// now hide the elements
		if ($R) $R.hide(); // hide resizer-bar
		if (!state.initialized || s.isClosed) {
			s.isClosed = true; // to trigger open-animation on show()
			s.isHidden  = true;
			s.isVisible = false;
			if (!state.initialized)
				_hidePane(pane); // no animation when loading page
			sizeMidPanes(_c[pane].dir === "horz" ? "" : "center");
			if (state.initialized || o.triggerEventsOnLoad)
				_runCallbacks("onhide_end", pane);
		}
		else {
			s.isHiding = true; // used by onclose
			close(pane, false, noAnimation); // adjust all panes to fit
		}
	}

	/**
	* Show a hidden pane - show as 'closed' by default unless openPane = true
	*
	* @param {(string|Object)}	evt_or_pane			The pane being opened, ie: north, south, east, or west
	* @param {boolean=}			[openPane=false]
	* @param {boolean=}			[noAnimation=false]
	* @param {boolean=}			[noAlert=false]
	*/
,	show = function (evt_or_pane, openPane, noAnimation, noAlert) {
		if (!isInitialized()) return;
		var	pane = evtPane.call(this, evt_or_pane)
		,	o	= options[pane]
		,	s	= state[pane]
		,	$P	= $Ps[pane]
		,	$R	= $Rs[pane]
		;
		if (!$P || !s.isHidden) return; // pane does not exist OR is not hidden

		// onshow_start callback - will CANCEL show if returns false
		if (false === _runCallbacks("onshow_start", pane)) return;

		s.isShowing = true; // used by onopen/onclose
		//s.isHidden  = false; - will be set by open/close - if not cancelled
		s.isSliding = false; // just in case
		delete state.panesSliding[pane];

		// now show the elements
		//if ($R) $R.show(); - will be shown by open/close
		if (openPane === false)
			close(pane, true); // true = force
		else
			open(pane, false, noAnimation, noAlert); // adjust all panes to fit
	}


	/**
	* Toggles a pane open/closed by calling either open or close
	*
	* @param {(string|Object)}	evt_or_pane		The pane being toggled, ie: north, south, east, or west
	* @param {boolean=}			[slide=false]
	*/
,	toggle = function (evt_or_pane, slide) {
		if (!isInitialized()) return;
		var	evt		= evtObj(evt_or_pane)
		,	pane	= evtPane.call(this, evt_or_pane)
		,	s		= state[pane]
		;
		if (evt) // called from to $R.dblclick OR triggerPaneEvent
			evt.stopImmediatePropagation();
		if (s.isHidden)
			show(pane); // will call 'open' after unhiding it
		else if (s.isClosed)
			open(pane, !!slide);
		else
			close(pane);
	}


	/**
	* Utility method used during init or other auto-processes
	*
	* @param {string}	pane   The pane being closed
	* @param {boolean=}	[setHandles=false]
	*/
,	_closePane = function (pane, setHandles) {
		var
			$P	= $Ps[pane]
		,	s	= state[pane]
		;
		_hidePane(pane);
		s.isClosed = true;
		s.isVisible = false;
		if (setHandles) setAsClosed(pane);
	}

	/**
	* Close the specified pane (animation optional), and resize all other panes as needed
	*
	* @param {(string|Object)}	evt_or_pane			The pane being closed, ie: north, south, east, or west
	* @param {boolean=}			[force=false]
	* @param {boolean=}			[noAnimation=false]
	* @param {boolean=}			[skipCallback=false]
	*/
,	close = function (evt_or_pane, force, noAnimation, skipCallback) {
		var	pane = evtPane.call(this, evt_or_pane);
		// if pane has been initialized, but NOT the complete layout, close pane instantly
		if (!state.initialized && $Ps[pane]) {
			_closePane(pane, true); // INIT pane as closed
			return;
		}
		if (!isInitialized()) return;

		var
			$P	= $Ps[pane]
		,	$R	= $Rs[pane]
		,	$T	= $Ts[pane]
		,	o	= options[pane]
		,	s	= state[pane]
		,	c	= _c[pane]
		,	doFX, isShowing, isHiding, wasSliding;

		// QUEUE in case another action/animation is in progress
		$N.queue(function( queueNext ){

			if ( !$P
			||	(!o.closable && !s.isShowing && !s.isHiding)	// invalid request // (!o.resizable && !o.closable) ???
			||	(!force && s.isClosed && !s.isShowing)			// already closed
			) return queueNext();

			// onclose_start callback - will CANCEL hide if returns false
			// SKIP if just 'showing' a hidden pane as 'closed'
			var abort = !s.isShowing && false === _runCallbacks("onclose_start", pane);

			// transfer logic vars to temp vars
			isShowing	= s.isShowing;
			isHiding	= s.isHiding;
			wasSliding	= s.isSliding;
			// now clear the logic vars (REQUIRED before aborting)
			delete s.isShowing;
			delete s.isHiding;

			if (abort) return queueNext();

			doFX		= !noAnimation && !s.isClosed && (o.fxName_close != "none");
			s.isMoving	= true;
			s.isClosed	= true;
			s.isVisible	= false;
			// update isHidden BEFORE sizing panes
			if (isHiding) s.isHidden = true;
			else if (isShowing) s.isHidden = false;

			if (s.isSliding) // pane is being closed, so UNBIND trigger events
				bindStopSlidingEvents(pane, false); // will set isSliding=false
			else // resize panes adjacent to this one
				sizeMidPanes(_c[pane].dir === "horz" ? "" : "center", false); // false = NOT skipCallback

			// if this pane has a resizer bar, move it NOW - before animation
			setAsClosed(pane);

			// CLOSE THE PANE
			if (doFX) { // animate the close
				lockPaneForFX(pane, true);	// need to set left/top so animation will work
				$P.hide( o.fxName_close, o.fxSettings_close, o.fxSpeed_close, function () {
					lockPaneForFX(pane, false); // undo
					if (s.isClosed) close_2();
					queueNext();
				});
			}
			else { // hide the pane without animation
				_hidePane(pane);
				close_2();
				queueNext();
			};
		});

		// SUBROUTINE
		function close_2 () {
			s.isMoving	= false;
			bindStartSlidingEvents(pane, true); // will enable if o.slidable = true

			// if opposite-pane was autoClosed, see if it can be autoOpened now
			var altPane = _c.oppositeEdge[pane];
			if (state[ altPane ].noRoom) {
				setSizeLimits( altPane );
				makePaneFit( altPane );
			}

			if (!skipCallback && (state.initialized || o.triggerEventsOnLoad)) {
				// onclose callback - UNLESS just 'showing' a hidden pane as 'closed'
				if (!isShowing)	_runCallbacks("onclose_end", pane);
				// onhide OR onshow callback
				if (isShowing)	_runCallbacks("onshow_end", pane);
				if (isHiding)	_runCallbacks("onhide_end", pane);
			}
		}
	}

	/**
	* @param {string}	pane	The pane just closed, ie: north, south, east, or west
	*/
,	setAsClosed = function (pane) {
		if (!$Rs[pane]) return; // handles not initialized yet!
		var
			$P		= $Ps[pane]
		,	$R		= $Rs[pane]
		,	$T		= $Ts[pane]
		,	o		= options[pane]
		,	s		= state[pane]
		,	side	= _c[pane].side
		,	rClass	= o.resizerClass
		,	tClass	= o.togglerClass
		,	_pane	= "-"+ pane // used for classNames
		,	_open	= "-open"
		,	_sliding= "-sliding"
		,	_closed	= "-closed"
		;
		$R
			.css(side, sC.inset[side]) // move the resizer
			.removeClass( rClass+_open +" "+ rClass+_pane+_open )
			.removeClass( rClass+_sliding +" "+ rClass+_pane+_sliding )
			.addClass( rClass+_closed +" "+ rClass+_pane+_closed )
		;
		// DISABLE 'resizing' when closed - do this BEFORE bindStartSlidingEvents?
		if (o.resizable && $.layout.plugins.draggable)
			$R
				.draggable("disable")
				.removeClass("ui-state-disabled") // do NOT apply disabled styling - not suitable here
				.css("cursor", "default")
				.attr("title","")
			;

		// if pane has a toggler button, adjust that too
		if ($T) {
			$T
				.removeClass( tClass+_open +" "+ tClass+_pane+_open )
				.addClass( tClass+_closed +" "+ tClass+_pane+_closed )
				.attr("title", o.tips.Open) // may be blank
			;
			// toggler-content - if exists
			$T.children(".content-open").hide();
			$T.children(".content-closed").css("display","block");
		}

		// sync any 'pin buttons'
		syncPinBtns(pane, false);

		if (state.initialized) {
			// resize 'length' and position togglers for adjacent panes
			sizeHandles();
		}
	}

	/**
	* Open the specified pane (animation optional), and resize all other panes as needed
	*
	* @param {(string|Object)}	evt_or_pane			The pane being opened, ie: north, south, east, or west
	* @param {boolean=}			[slide=false]
	* @param {boolean=}			[noAnimation=false]
	* @param {boolean=}			[noAlert=false]
	*/
,	open = function (evt_or_pane, slide, noAnimation, noAlert) {
		if (!isInitialized()) return;
		var	pane = evtPane.call(this, evt_or_pane)
		,	$P	= $Ps[pane]
		,	$R	= $Rs[pane]
		,	$T	= $Ts[pane]
		,	o	= options[pane]
		,	s	= state[pane]
		,	c	= _c[pane]
		,	doFX, isShowing
		;
		// QUEUE in case another action/animation is in progress
		$N.queue(function( queueNext ){

			if ( !$P
			||	(!o.resizable && !o.closable && !s.isShowing)	// invalid request
			||	(s.isVisible && !s.isSliding)					// already open
			) return queueNext();

			// pane can ALSO be unhidden by just calling show(), so handle this scenario
			if (s.isHidden && !s.isShowing) {
				queueNext(); // call before show() because it needs the queue free
				show(pane, true);
				return;
			}

			if (s.autoResize && s.size != o.size) // resize pane to original size set in options
				sizePane(pane, o.size, true, true, true); // true=skipCallback/noAnimation/forceResize
			else
				// make sure there is enough space available to open the pane
				setSizeLimits(pane, slide);

			// onopen_start callback - will CANCEL open if returns false
			var cbReturn = _runCallbacks("onopen_start", pane);

			if (cbReturn === "abort")
				return queueNext();

			// update pane-state again in case options were changed in onopen_start
			if (cbReturn !== "NC") // NC = "No Callback"
				setSizeLimits(pane, slide);

			if (s.minSize > s.maxSize) { // INSUFFICIENT ROOM FOR PANE TO OPEN!
				syncPinBtns(pane, false); // make sure pin-buttons are reset
				if (!noAlert && o.tips.noRoomToOpen)
					alert(o.tips.noRoomToOpen);
				return queueNext(); // ABORT
			}

			if (slide) // START Sliding - will set isSliding=true
				bindStopSlidingEvents(pane, true); // BIND trigger events to close sliding-pane
			else if (s.isSliding) // PIN PANE (stop sliding) - open pane 'normally' instead
				bindStopSlidingEvents(pane, false); // UNBIND trigger events - will set isSliding=false
			else if (o.slidable)
				bindStartSlidingEvents(pane, false); // UNBIND trigger events

			s.noRoom = false; // will be reset by makePaneFit if 'noRoom'
			makePaneFit(pane);

			// transfer logic var to temp var
			isShowing = s.isShowing;
			// now clear the logic var
			delete s.isShowing;

			doFX		= !noAnimation && s.isClosed && (o.fxName_open != "none");
			s.isMoving	= true;
			s.isVisible	= true;
			s.isClosed	= false;
			// update isHidden BEFORE sizing panes - WHY??? Old?
			if (isShowing) s.isHidden = false;

			if (doFX) { // ANIMATE
				// mask adjacent panes with objects
				lockPaneForFX(pane, true);	// need to set left/top so animation will work
					$P.show( o.fxName_open, o.fxSettings_open, o.fxSpeed_open, function() {
					lockPaneForFX(pane, false); // undo
					if (s.isVisible) open_2(); // continue
					queueNext();
				});
			}
			else { // no animation
				_showPane(pane);// just show pane and...
				open_2();		// continue
				queueNext();
			};
		});

		// SUBROUTINE
		function open_2 () {
			s.isMoving	= false;

			// cure iframe display issues
			_fixIframe(pane);

			// NOTE: if isSliding, then other panes are NOT 'resized'
			if (!s.isSliding) { // resize all panes adjacent to this one
				sizeMidPanes(_c[pane].dir=="vert" ? "center" : "", false); // false = NOT skipCallback
			}

			// set classes, position handles and execute callbacks...
			setAsOpen(pane);
		};
	
	}

	/**
	* @param {string}	pane		The pane just opened, ie: north, south, east, or west
	* @param {boolean=}	[skipCallback=false]
	*/
,	setAsOpen = function (pane, skipCallback) {
		var 
			$P		= $Ps[pane]
		,	$R		= $Rs[pane]
		,	$T		= $Ts[pane]
		,	o		= options[pane]
		,	s		= state[pane]
		,	side	= _c[pane].side
		,	rClass	= o.resizerClass
		,	tClass	= o.togglerClass
		,	_pane	= "-"+ pane // used for classNames
		,	_open	= "-open"
		,	_closed	= "-closed"
		,	_sliding= "-sliding"
		;
		$R
			.css(side, sC.inset[side] + getPaneSize(pane)) // move the resizer
			.removeClass( rClass+_closed +" "+ rClass+_pane+_closed )
			.addClass( rClass+_open +" "+ rClass+_pane+_open )
		;
		if (s.isSliding)
			$R.addClass( rClass+_sliding +" "+ rClass+_pane+_sliding )
		else // in case 'was sliding'
			$R.removeClass( rClass+_sliding +" "+ rClass+_pane+_sliding )

		removeHover( 0, $R ); // remove hover classes
		if (o.resizable && $.layout.plugins.draggable)
			$R	.draggable("enable")
				.css("cursor", o.resizerCursor)
				.attr("title", o.tips.Resize);
		else if (!s.isSliding)
			$R.css("cursor", "default"); // n-resize, s-resize, etc

		// if pane also has a toggler button, adjust that too
		if ($T) {
			$T	.removeClass( tClass+_closed +" "+ tClass+_pane+_closed )
				.addClass( tClass+_open +" "+ tClass+_pane+_open )
				.attr("title", o.tips.Close); // may be blank
			removeHover( 0, $T ); // remove hover classes
			// toggler-content - if exists
			$T.children(".content-closed").hide();
			$T.children(".content-open").css("display","block");
		}

		// sync any 'pin buttons'
		syncPinBtns(pane, !s.isSliding);

		// update pane-state dimensions - BEFORE resizing content
		$.extend(s, elDims($P));

		if (state.initialized) {
			// resize resizer & toggler sizes for all panes
			sizeHandles();
			// resize content every time pane opens - to be sure
			sizeContent(pane, true); // true = remeasure headers/footers, even if 'pane.isMoving'
		}

		if (!skipCallback && (state.initialized || o.triggerEventsOnLoad) && $P.is(":visible")) {
			// onopen callback
			_runCallbacks("onopen_end", pane);
			// onshow callback - TODO: should this be here?
			if (s.isShowing) _runCallbacks("onshow_end", pane);

			// ALSO call onresize because layout-size *may* have changed while pane was closed
			if (state.initialized)
				_runCallbacks("onresize_end", pane);
		}

		// TODO: Somehow sizePane("north") is being called after this point???
	}


	/**
	* slideOpen / slideClose / slideToggle
	*
	* Pass-though methods for sliding
	*/
,	slideOpen = function (evt_or_pane) {
		if (!isInitialized()) return;
		var	evt		= evtObj(evt_or_pane)
		,	pane	= evtPane.call(this, evt_or_pane)
		,	s		= state[pane]
		,	delay	= options[pane].slideDelay_open
		;
		// prevent event from triggering on NEW resizer binding created below
		if (evt) evt.stopImmediatePropagation();

		if (s.isClosed && evt && evt.type === "mouseenter" && delay > 0)
			// trigger = mouseenter - use a delay
			timer.set(pane+"_openSlider", open_NOW, delay);
		else
			open_NOW(); // will unbind events if is already open

		/**
		* SUBROUTINE for timed open
		*/
		function open_NOW () {
			if (!s.isClosed) // skip if no longer closed!
				bindStopSlidingEvents(pane, true); // BIND trigger events to close sliding-pane
			else if (!s.isMoving)
				open(pane, true); // true = slide - open() will handle binding
		};
	}

,	slideClose = function (evt_or_pane) {
		if (!isInitialized()) return;
		var	evt		= evtObj(evt_or_pane)
		,	pane	= evtPane.call(this, evt_or_pane)
		,	o		= options[pane]
		,	s		= state[pane]
		,	delay	= s.isMoving ? 1000 : 300 // MINIMUM delay - option may override
		;
		if (s.isClosed || s.isResizing)
			return; // skip if already closed OR in process of resizing
		else if (o.slideTrigger_close === "click")
			close_NOW(); // close immediately onClick
		else if (o.preventQuickSlideClose && s.isMoving)
			return; // handle Chrome quick-close on slide-open
		else if (o.preventPrematureSlideClose && evt && $.layout.isMouseOverElem(evt, $Ps[pane]))
			return; // handle incorrect mouseleave trigger, like when over a SELECT-list in IE
		else if (evt) // trigger = mouseleave - use a delay
			// 1 sec delay if 'opening', else .3 sec
			timer.set(pane+"_closeSlider", close_NOW, max(o.slideDelay_close, delay));
		else // called programically
			close_NOW();

		/**
		* SUBROUTINE for timed close
		*/
		function close_NOW () {
			if (s.isClosed) // skip 'close' if already closed!
				bindStopSlidingEvents(pane, false); // UNBIND trigger events - TODO: is this needed here?
			else if (!s.isMoving)
				close(pane); // close will handle unbinding
		};
	}

	/**
	* @param {(string|Object)}	evt_or_pane		The pane being opened, ie: north, south, east, or west
	*/
,	slideToggle = function (evt_or_pane) {
		var pane = evtPane.call(this, evt_or_pane);
		toggle(pane, true);
	}


	/**
	* Must set left/top on East/South panes so animation will work properly
	*
	* @param {string}	pane	The pane to lock, 'east' or 'south' - any other is ignored!
	* @param {boolean}	doLock  true = set left/top, false = remove
	*/
,	lockPaneForFX = function (pane, doLock) {
		var $P	= $Ps[pane]
		,	s	= state[pane]
		,	o	= options[pane]
		,	z	= options.zIndexes
		;
		if (doLock) {
			showMasks( pane, { animation: true, objectsOnly: true });
			$P.css({ zIndex: z.pane_animate }); // overlay all elements during animation
			if (pane=="south")
				$P.css({ top: sC.inset.top + sC.innerHeight - $P.outerHeight() });
			else if (pane=="east")
				$P.css({ left: sC.inset.left + sC.innerWidth - $P.outerWidth() });
		}
		else { // animation DONE - RESET CSS
			hideMasks();
			$P.css({ zIndex: (s.isSliding ? z.pane_sliding : z.pane_normal) });
			if (pane=="south")
				$P.css({ top: "auto" });
			// if pane is positioned 'off-screen', then DO NOT screw with it!
			else if (pane=="east" && !$P.css("left").match(/\-99999/))
				$P.css({ left: "auto" });
			// fix anti-aliasing in IE - only needed for animations that change opacity
			if (browser.msie && o.fxOpacityFix && o.fxName_open != "slide" && $P.css("filter") && $P.css("opacity") == 1)
				$P[0].style.removeAttribute('filter');
		}
	}


	/**
	* Toggle sliding functionality of a specific pane on/off by adding removing 'slide open' trigger
	*
	* @see  open(), close()
	* @param {string}	pane	The pane to enable/disable, 'north', 'south', etc.
	* @param {boolean}	enable	Enable or Disable sliding?
	*/
,	bindStartSlidingEvents = function (pane, enable) {
		var o		= options[pane]
		,	$P		= $Ps[pane]
		,	$R		= $Rs[pane]
		,	evtName	= o.slideTrigger_open.toLowerCase()
		;
		if (!$R || (enable && !o.slidable)) return;

		// make sure we have a valid event
		if (evtName.match(/mouseover/))
			evtName = o.slideTrigger_open = "mouseenter";
		else if (!evtName.match(/(click|dblclick|mouseenter)/)) 
			evtName = o.slideTrigger_open = "click";

		// must remove double-click-toggle when using dblclick-slide
		if (o.resizerDblClickToggle && evtName.match(/click/)) {
			$R[enable ? "unbind" : "bind"]('dblclick.'+ sID, toggle)
		}

		$R
			// add or remove event
			[enable ? "bind" : "unbind"](evtName +'.'+ sID, slideOpen)
			// set the appropriate cursor & title/tip
			.css("cursor", enable ? o.sliderCursor : "default")
			.attr("title", enable ? o.tips.Slide : "")
		;
	}

	/**
	* Add or remove 'mouseleave' events to 'slide close' when pane is 'sliding' open or closed
	* Also increases zIndex when pane is sliding open
	* See bindStartSlidingEvents for code to control 'slide open'
	*
	* @see  slideOpen(), slideClose()
	* @param {string}	pane	The pane to process, 'north', 'south', etc.
	* @param {boolean}	enable	Enable or Disable events?
	*/
,	bindStopSlidingEvents = function (pane, enable) {
		var	o		= options[pane]
		,	s		= state[pane]
		,	c		= _c[pane]
		,	z		= options.zIndexes
		,	evtName	= o.slideTrigger_close.toLowerCase()
		,	action	= (enable ? "bind" : "unbind")
		,	$P		= $Ps[pane]
		,	$R		= $Rs[pane]
		;
		timer.clear(pane+"_closeSlider"); // just in case

		if (enable) {
			s.isSliding = true;
			state.panesSliding[pane] = true;
			// remove 'slideOpen' event from resizer
			// ALSO will raise the zIndex of the pane & resizer
			bindStartSlidingEvents(pane, false);
		}
		else {
			s.isSliding = false;
			delete state.panesSliding[pane];
		}

		// RE/SET zIndex - increases when pane is sliding-open, resets to normal when not
		$P.css("zIndex", enable ? z.pane_sliding : z.pane_normal);
		$R.css("zIndex", enable ? z.pane_sliding+2 : z.resizer_normal); // NOTE: mask = pane_sliding+1

		// make sure we have a valid event
		if (!evtName.match(/(click|mouseleave)/))
			evtName = o.slideTrigger_close = "mouseleave"; // also catches 'mouseout'

		// add/remove slide triggers
		$R[action](evtName, slideClose); // base event on resize
		// need extra events for mouseleave
		if (evtName === "mouseleave") {
			// also close on pane.mouseleave
			$P[action]("mouseleave."+ sID, slideClose);
			// cancel timer when mouse moves between 'pane' and 'resizer'
			$R[action]("mouseenter."+ sID, cancelMouseOut);
			$P[action]("mouseenter."+ sID, cancelMouseOut);
		}

		if (!enable)
			timer.clear(pane+"_closeSlider");
		else if (evtName === "click" && !o.resizable) {
			// IF pane is not resizable (which already has a cursor and tip) 
			// then set the a cursor & title/tip on resizer when sliding
			$R.css("cursor", enable ? o.sliderCursor : "default");
			$R.attr("title", enable ? o.tips.Close : ""); // use Toggler-tip, eg: "Close Pane"
		}

		// SUBROUTINE for mouseleave timer clearing
		function cancelMouseOut (evt) {
			timer.clear(pane+"_closeSlider");
			evt.stopPropagation();
		}
	}


	/**
	* Hides/closes a pane if there is insufficient room - reverses this when there is room again
	* MUST have already called setSizeLimits() before calling this method
	*
	* @param {string}	pane					The pane being resized
	* @param {boolean=}	[isOpening=false]		Called from onOpen?
	* @param {boolean=}	[skipCallback=false]	Should the onresize callback be run?
	* @param {boolean=}	[force=false]
	*/
,	makePaneFit = function (pane, isOpening, skipCallback, force) {
		var	o	= options[pane]
		,	s	= state[pane]
		,	c	= _c[pane]
		,	$P	= $Ps[pane]
		,	$R	= $Rs[pane]
		,	isSidePane 	= c.dir==="vert"
		,	hasRoom		= false
		;
		// special handling for center & east/west panes
		if (pane === "center" || (isSidePane && s.noVerticalRoom)) {
			// see if there is enough room to display the pane
			// ERROR: hasRoom = s.minHeight <= s.maxHeight && (isSidePane || s.minWidth <= s.maxWidth);
			hasRoom = (s.maxHeight >= 0);
			if (hasRoom && s.noRoom) { // previously hidden due to noRoom, so show now
				_showPane(pane);
				if ($R) $R.show();
				s.isVisible = true;
				s.noRoom = false;
				if (isSidePane) s.noVerticalRoom = false;
				_fixIframe(pane);
			}
			else if (!hasRoom && !s.noRoom) { // not currently hidden, so hide now
				_hidePane(pane);
				if ($R) $R.hide();
				s.isVisible = false;
				s.noRoom = true;
			}
		}

		// see if there is enough room to fit the border-pane
		if (pane === "center") {
			// ignore center in this block
		}
		else if (s.minSize <= s.maxSize) { // pane CAN fit
			hasRoom = true;
			if (s.size > s.maxSize) // pane is too big - shrink it
				sizePane(pane, s.maxSize, skipCallback, true, force); // true = noAnimation
			else if (s.size < s.minSize) // pane is too small - enlarge it
				sizePane(pane, s.minSize, skipCallback, true, force); // true = noAnimation
			// need s.isVisible because new pseudoClose method keeps pane visible, but off-screen
			else if ($R && s.isVisible && $P.is(":visible")) {
				// make sure resizer-bar is positioned correctly
				// handles situation where nested layout was 'hidden' when initialized
				var	pos = s.size + sC.inset[c.side];
				if ($.layout.cssNum( $R, c.side ) != pos) $R.css( c.side, pos );
			}

			// if was previously hidden due to noRoom, then RESET because NOW there is room
			if (s.noRoom) {
				// s.noRoom state will be set by open or show
				if (s.wasOpen && o.closable) {
					if (o.autoReopen)
						open(pane, false, true, true); // true = noAnimation, true = noAlert
					else // leave the pane closed, so just update state
						s.noRoom = false;
				}
				else
					show(pane, s.wasOpen, true, true); // true = noAnimation, true = noAlert
			}
		}
		else { // !hasRoom - pane CANNOT fit
			if (!s.noRoom) { // pane not set as noRoom yet, so hide or close it now...
				s.noRoom = true; // update state
				s.wasOpen = !s.isClosed && !s.isSliding;
				if (s.isClosed){} // SKIP
				else if (o.closable) // 'close' if possible
					close(pane, true, true); // true = force, true = noAnimation
				else // 'hide' pane if cannot just be closed
					hide(pane, true); // true = noAnimation
			}
		}
	}


	/**
	* manualSizePane is an exposed flow-through method allowing extra code when pane is 'manually resized'
	*
	* @param {(string|Object)}	evt_or_pane				The pane being resized
	* @param {number}			size					The *desired* new size for this pane - will be validated
	* @param {boolean=}			[skipCallback=false]	Should the onresize callback be run?
	* @param {boolean=}			[noAnimation=false]
	* @param {boolean=}			[force=false]			Force resizing even if does not seem necessary
	*/
,	manualSizePane = function (evt_or_pane, size, skipCallback, noAnimation, force) {
		if (!isInitialized()) return;
		var	pane = evtPane.call(this, evt_or_pane)
		,	o	= options[pane]
		,	s	= state[pane]
		//	if resizing callbacks have been delayed and resizing is now DONE, force resizing to complete...
		,	forceResize = force || (o.livePaneResizing && !s.isResizing)
		;
		// ANY call to manualSizePane disables autoResize - ie, percentage sizing
		s.autoResize = false;
		// flow-through...
		sizePane(pane, size, skipCallback, noAnimation, forceResize); // will animate resize if option enabled
	}

	/**
	* sizePane is called only by internal methods whenever a pane needs to be resized
	*
	* @param {(string|Object)}	evt_or_pane				The pane being resized
	* @param {number}			size					The *desired* new size for this pane - will be validated
	* @param {boolean=}			[skipCallback=false]	Should the onresize callback be run?
	* @param {boolean=}			[noAnimation=false]
	* @param {boolean=}			[force=false]			Force resizing even if does not seem necessary
	*/
,	sizePane = function (evt_or_pane, size, skipCallback, noAnimation, force) {
		if (!isInitialized()) return;
		var	pane	= evtPane.call(this, evt_or_pane) // probably NEVER called from event?
		,	o		= options[pane]
		,	s		= state[pane]
		,	$P		= $Ps[pane]
		,	$R		= $Rs[pane]
		,	side	= _c[pane].side
		,	dimName	= _c[pane].sizeType.toLowerCase()
		,	skipResizeWhileDragging = s.isResizing && !o.triggerEventsDuringLiveResize
		,	doFX	= noAnimation !== true && o.animatePaneSizing
		,	oldSize, newSize
		;
		// QUEUE in case another action/animation is in progress
		$N.queue(function( queueNext ){
			// calculate 'current' min/max sizes
			setSizeLimits(pane); // update pane-state
			oldSize = s.size;
			size = _parseSize(pane, size); // handle percentages & auto
			size = max(size, _parseSize(pane, o.minSize));
			size = min(size, s.maxSize);
			if (size < s.minSize) { // not enough room for pane!
				queueNext(); // call before makePaneFit() because it needs the queue free
				makePaneFit(pane, false, skipCallback);	// will hide or close pane
				return;
			}

			// IF newSize is same as oldSize, then nothing to do - abort
			if (!force && size === oldSize)
				return queueNext();

			s.newSize = size;

			// onresize_start callback CANNOT cancel resizing because this would break the layout!
			if (!skipCallback && state.initialized && s.isVisible)
				_runCallbacks("onresize_start", pane);

			// resize the pane, and make sure its visible
			newSize = cssSize(pane, size);

			if (doFX && $P.is(":visible")) { // ANIMATE
				var fx		= $.layout.effects.size[pane] || $.layout.effects.size.all
				,	easing	= o.fxSettings_size.easing || fx.easing
				,	z		= options.zIndexes
				,	props	= {};
				props[ dimName ] = newSize +'px';
				s.isMoving = true;
				// overlay all elements during animation
				$P.css({ zIndex: z.pane_animate })
				  .show().animate( props, o.fxSpeed_size, easing, function(){
					// reset zIndex after animation
					$P.css({ zIndex: (s.isSliding ? z.pane_sliding : z.pane_normal) });
					s.isMoving = false;
					delete s.newSize;
					sizePane_2(); // continue
					queueNext();
				});
			}
			else { // no animation
				$P.css( dimName, newSize );	// resize pane
				delete s.newSize;
				// if pane is visible, then 
				if ($P.is(":visible"))
					sizePane_2(); // continue
				else {
					// pane is NOT VISIBLE, so just update state data...
					// when pane is *next opened*, it will have the new size
					s.size = size;				// update state.size
					$.extend(s, elDims($P));	// update state dimensions
				}
				queueNext();
			};

		});

		// SUBROUTINE
		function sizePane_2 () {
			/*	Panes are sometimes not sized precisely in some browsers!?
			 *	This code will resize the pane up to 3 times to nudge the pane to the correct size
			 */
			var	actual	= dimName==='width' ? $P.outerWidth() : $P.outerHeight()
			,	tries	= [{
						   	pane:		pane
						,	count:		1
						,	target:		size
						,	actual:		actual
						,	correct:	(size === actual)
						,	attempt:	size
						,	cssSize:	newSize
						}]
			,	lastTry = tries[0]
			,	thisTry	= {}
			,	msg		= 'Inaccurate size after resizing the '+ pane +'-pane.'
			;
			while ( !lastTry.correct ) {
				thisTry = { pane: pane, count: lastTry.count+1, target: size };

				if (lastTry.actual > size)
					thisTry.attempt = max(0, lastTry.attempt - (lastTry.actual - size));
				else // lastTry.actual < size
					thisTry.attempt = max(0, lastTry.attempt + (size - lastTry.actual));

				thisTry.cssSize = cssSize(pane, thisTry.attempt);
				$P.css( dimName, thisTry.cssSize );

				thisTry.actual	= dimName=='width' ? $P.outerWidth() : $P.outerHeight();
				thisTry.correct	= (size === thisTry.actual);

				// log attempts and alert the user of this *non-fatal error* (if showDebugMessages)
				if ( tries.length === 1) {
					_log(msg, false, true);
					_log(lastTry, false, true);
				}
				_log(thisTry, false, true);
				// after 4 tries, is as close as its gonna get!
				if (tries.length > 3) break;

				tries.push( thisTry );
				lastTry = tries[ tries.length - 1 ];
			}
			// END TESTING CODE

			// update pane-state dimensions
			s.size	= size;
			$.extend(s, elDims($P));

			if (s.isVisible && $P.is(":visible")) {
				// reposition the resizer-bar
				if ($R) $R.css( side, size + sC.inset[side] );
				// resize the content-div
				sizeContent(pane);
			}

			if (!skipCallback && !skipResizeWhileDragging && state.initialized && s.isVisible)
				_runCallbacks("onresize_end", pane);

			// resize all the adjacent panes, and adjust their toggler buttons
			// when skipCallback passed, it means the controlling method will handle 'other panes'
			if (!skipCallback) {
				// also no callback if live-resize is in progress and NOT triggerEventsDuringLiveResize
				if (!s.isSliding) sizeMidPanes(_c[pane].dir=="horz" ? "" : "center", skipResizeWhileDragging, force);
				sizeHandles();
			}

			// if opposite-pane was autoClosed, see if it can be autoOpened now
			var altPane = _c.oppositeEdge[pane];
			if (size < oldSize && state[ altPane ].noRoom) {
				setSizeLimits( altPane );
				makePaneFit( altPane, false, skipCallback );
			}

			// DEBUG - ALERT user/developer so they know there was a sizing problem
			if (tries.length > 1)
				_log(msg +'\nSee the Error Console for details.', true, true);
		}
	}

	/**
	* @see  initPanes(), sizePane(), 	resizeAll(), open(), close(), hide()
	* @param {(Array.<string>|string)}	panes					The pane(s) being resized, comma-delmited string
	* @param {boolean=}					[skipCallback=false]	Should the onresize callback be run?
	* @param {boolean=}					[force=false]
	*/
,	sizeMidPanes = function (panes, skipCallback, force) {
		panes = (panes ? panes : "east,west,center").split(",");

		$.each(panes, function (i, pane) {
			if (!$Ps[pane]) return; // NO PANE - skip
			var 
				o		= options[pane]
			,	s		= state[pane]
			,	$P		= $Ps[pane]
			,	$R		= $Rs[pane]
			,	isCenter= (pane=="center")
			,	hasRoom	= true
			,	CSS		= {}
			//	if pane is not visible, show it invisibly NOW rather than for *each call* in this script
			,	visCSS	= $.layout.showInvisibly($P)

			,	newCenter	= calcNewCenterPaneDims()
			;

			// update pane-state dimensions
			$.extend(s, elDims($P));

			if (pane === "center") {
				if (!force && s.isVisible && newCenter.width === s.outerWidth && newCenter.height === s.outerHeight) {
					$P.css(visCSS);
					return true; // SKIP - pane already the correct size
				}
				// set state for makePaneFit() logic
				$.extend(s, cssMinDims(pane), {
					maxWidth:	newCenter.width
				,	maxHeight:	newCenter.height
				});
				CSS = newCenter;
				s.newWidth	= CSS.width;
				s.newHeight	= CSS.height;
				// convert OUTER width/height to CSS width/height 
				CSS.width	= cssW($P, CSS.width);
				// NEW - allow pane to extend 'below' visible area rather than hide it
				CSS.height	= cssH($P, CSS.height);
				hasRoom		= CSS.width >= 0 && CSS.height >= 0; // height >= 0 = ALWAYS TRUE NOW

				// during layout init, try to shrink east/west panes to make room for center
				if (!state.initialized && o.minWidth > newCenter.width) {
					var
						reqPx	= o.minWidth - s.outerWidth
					,	minE	= options.east.minSize || 0
					,	minW	= options.west.minSize || 0
					,	sizeE	= state.east.size
					,	sizeW	= state.west.size
					,	newE	= sizeE
					,	newW	= sizeW
					;
					if (reqPx > 0 && state.east.isVisible && sizeE > minE) {
						newE = max( sizeE-minE, sizeE-reqPx );
						reqPx -= sizeE-newE;
					}
					if (reqPx > 0 && state.west.isVisible && sizeW > minW) {
						newW = max( sizeW-minW, sizeW-reqPx );
						reqPx -= sizeW-newW;
					}
					// IF we found enough extra space, then resize the border panes as calculated
					if (reqPx === 0) {
						if (sizeE && sizeE != minE)
							sizePane('east', newE, true, true, force); // true = skipCallback/noAnimation - initPanes will handle when done
						if (sizeW && sizeW != minW)
							sizePane('west', newW, true, true, force); // true = skipCallback/noAnimation
						// now start over!
						sizeMidPanes('center', skipCallback, force);
						$P.css(visCSS);
						return; // abort this loop
					}
				}
			}
			else { // for east and west, set only the height, which is same as center height
				// set state.min/maxWidth/Height for makePaneFit() logic
				if (s.isVisible && !s.noVerticalRoom)
					$.extend(s, elDims($P), cssMinDims(pane))
				if (!force && !s.noVerticalRoom && newCenter.height === s.outerHeight) {
					$P.css(visCSS);
					return true; // SKIP - pane already the correct size
				}
				// east/west have same top, bottom & height as center
				CSS.top		= newCenter.top;
				CSS.bottom	= newCenter.bottom;
				s.newSize	= newCenter.height
				// NEW - allow pane to extend 'below' visible area rather than hide it
				CSS.height	= cssH($P, newCenter.height);
				s.maxHeight	= CSS.height;
				hasRoom		= (s.maxHeight >= 0); // ALWAYS TRUE NOW
				if (!hasRoom) s.noVerticalRoom = true; // makePaneFit() logic
			}

			if (hasRoom) {
				// resizeAll passes skipCallback because it triggers callbacks after ALL panes are resized
				if (!skipCallback && state.initialized)
					_runCallbacks("onresize_start", pane);

				$P.css(CSS); // apply the CSS to pane
				if (pane !== "center")
					sizeHandles(pane); // also update resizer length
				if (s.noRoom && !s.isClosed && !s.isHidden)
					makePaneFit(pane); // will re-open/show auto-closed/hidden pane
				if (s.isVisible) {
					$.extend(s, elDims($P)); // update pane dimensions
					if (state.initialized) sizeContent(pane); // also resize the contents, if exists
				}
			}
			else if (!s.noRoom && s.isVisible) // no room for pane
				makePaneFit(pane); // will hide or close pane

			// reset visibility, if necessary
			$P.css(visCSS);

			delete s.newSize;
			delete s.newWidth;
			delete s.newHeight;

			if (!s.isVisible)
				return true; // DONE - next pane

			/*
			* Extra CSS for IE6 or IE7 in Quirks-mode - add 'width' to NORTH/SOUTH panes
			* Normally these panes have only 'left' & 'right' positions so pane auto-sizes
			* ALSO required when pane is an IFRAME because will NOT default to 'full width'
			*	TODO: Can I use width:100% for a north/south iframe?
			*	TODO: Sounds like a job for $P.outerWidth( sC.innerWidth ) SETTER METHOD
			*/
			if (pane === "center") { // finished processing midPanes
				var fix = browser.isIE6 || !browser.boxModel;
				if ($Ps.north && (fix || state.north.tagName=="IFRAME")) 
					$Ps.north.css("width", cssW($Ps.north, sC.innerWidth));
				if ($Ps.south && (fix || state.south.tagName=="IFRAME"))
					$Ps.south.css("width", cssW($Ps.south, sC.innerWidth));
			}

			// resizeAll passes skipCallback because it triggers callbacks after ALL panes are resized
			if (!skipCallback && state.initialized)
				_runCallbacks("onresize_end", pane);
		});
	}


	/**
	* @see  window.onresize(), callbacks or custom code
	* @param {(Object|boolean)=}	evt_or_refresh	If 'true', then also reset pane-positioning
	*/
,	resizeAll = function (evt_or_refresh) {
		var	oldW	= sC.innerWidth
		,	oldH	= sC.innerHeight
		;
		// stopPropagation if called by trigger("layoutdestroy") - use evtPane utility 
		evtPane(evt_or_refresh);

		// cannot size layout when 'container' is hidden or collapsed
		if (!$N.is(":visible")) return;

		if (!state.initialized) {
			_initLayoutElements();
			return; // no need to resize since we just initialized!
		}

		if (evt_or_refresh === true && $.isPlainObject(options.outset)) {
			// update container CSS in case outset option has changed
			$N.css( options.outset );
		}
		// UPDATE container dimensions
		$.extend(sC, elDims( $N, options.inset ));
		if (!sC.outerHeight) return;

		// if 'true' passed, refresh pane & handle positioning too
		if (evt_or_refresh === true) {
			setPanePosition();
		}

		// onresizeall_start will CANCEL resizing if returns false
		// state.container has already been set, so user can access this info for calcuations
		if (false === _runCallbacks("onresizeall_start")) return false;

		var	// see if container is now 'smaller' than before
			shrunkH	= (sC.innerHeight < oldH)
		,	shrunkW	= (sC.innerWidth < oldW)
		,	$P, o, s
		;
		// NOTE special order for sizing: S-N-E-W
		$.each(["south","north","east","west"], function (i, pane) {
			if (!$Ps[pane]) return; // no pane - SKIP
			o = options[pane];
			s = state[pane];
			if (s.autoResize && s.size != o.size) // resize pane to original size set in options
				sizePane(pane, o.size, true, true, true); // true=skipCallback/noAnimation/forceResize
			else {
				setSizeLimits(pane);
				makePaneFit(pane, false, true, true); // true=skipCallback/forceResize
			}
		});

		sizeMidPanes("", true, true); // true=skipCallback/forceResize
		sizeHandles(); // reposition the toggler elements

		// trigger all individual pane callbacks AFTER layout has finished resizing
		$.each(_c.allPanes, function (i, pane) {
			$P = $Ps[pane];
			if (!$P) return; // SKIP
			if (state[pane].isVisible) // undefined for non-existent panes
				_runCallbacks("onresize_end", pane); // callback - if exists
		});

		_runCallbacks("onresizeall_end");
		//_triggerLayoutEvent(pane, 'resizeall');
	}

	/**
	* Whenever a pane resizes or opens that has a nested layout, trigger resizeAll
	*
	* @param {(string|Object)}	evt_or_pane		The pane just resized or opened
	*/
,	resizeChildren = function (evt_or_pane, skipRefresh) {
		var	pane = evtPane.call(this, evt_or_pane);

		if (!options[pane].resizeChildren) return;

		// ensure the pane-children are up-to-date
		if (!skipRefresh) refreshChildren( pane );
		var pC = children[pane];
		if ($.isPlainObject( pC )) {
			// resize one or more children
			$.each( pC, function (key, child) {
				if (!child.destroyed) child.resizeAll();
			});
		}
	}

	/**
	* IF pane has a content-div, then resize all elements inside pane to fit pane-height
	*
	* @param {(string|Object)}	evt_or_panes		The pane(s) being resized
	* @param {boolean=}			[remeasure=false]	Should the content (header/footer) be remeasured?
	*/
,	sizeContent = function (evt_or_panes, remeasure) {
		if (!isInitialized()) return;

		var panes = evtPane.call(this, evt_or_panes);
		panes = panes ? panes.split(",") : _c.allPanes;

		$.each(panes, function (idx, pane) {
			var
				$P	= $Ps[pane]
			,	$C	= $Cs[pane]
			,	o	= options[pane]
			,	s	= state[pane]
			,	m	= s.content // m = measurements
			;
			if (!$P || !$C || !$P.is(":visible")) return true; // NOT VISIBLE - skip

			// if content-element was REMOVED, update OR remove the pointer
			if (!$C.length) {
				initContent(pane, false);	// false = do NOT sizeContent() - already there!
				if (!$C) return;			// no replacement element found - pointer have been removed
			}

			// onsizecontent_start will CANCEL resizing if returns false
			if (false === _runCallbacks("onsizecontent_start", pane)) return;

			// skip re-measuring offsets if live-resizing
			if ((!s.isMoving && !s.isResizing) || o.liveContentResizing || remeasure || m.top == undefined) {
				_measure();
				// if any footers are below pane-bottom, they may not measure correctly,
				// so allow pane overflow and re-measure
				if (m.hiddenFooters > 0 && $P.css("overflow") === "hidden") {
					$P.css("overflow", "visible");
					_measure(); // remeasure while overflowing
					$P.css("overflow", "hidden");
				}
			}
			// NOTE: spaceAbove/Below *includes* the pane paddingTop/Bottom, but not pane.borders
			var newH = s.innerHeight - (m.spaceAbove - s.css.paddingTop) - (m.spaceBelow - s.css.paddingBottom);

			if (!$C.is(":visible") || m.height != newH) {
				// size the Content element to fit new pane-size - will autoHide if not enough room
				setOuterHeight($C, newH, true); // true=autoHide
				m.height = newH; // save new height
			};

			if (state.initialized)
				_runCallbacks("onsizecontent_end", pane);

			function _below ($E) {
				return max(s.css.paddingBottom, (parseInt($E.css("marginBottom"), 10) || 0));
			};

			function _measure () {
				var
					ignore	= options[pane].contentIgnoreSelector
				,	$Fs		= $C.nextAll().not(".ui-layout-mask").not(ignore || ":lt(0)") // not :lt(0) = ALL
				,	$Fs_vis	= $Fs.filter(':visible')
				,	$F		= $Fs_vis.filter(':last')
				;
				m = {
					top:			$C[0].offsetTop
				,	height:			$C.outerHeight()
				,	numFooters:		$Fs.length
				,	hiddenFooters:	$Fs.length - $Fs_vis.length
				,	spaceBelow:		0 // correct if no content footer ($E)
				}
					m.spaceAbove	= m.top; // just for state - not used in calc
					m.bottom		= m.top + m.height;
				if ($F.length)
					//spaceBelow = (LastFooter.top + LastFooter.height) [footerBottom] - Content.bottom + max(LastFooter.marginBottom, pane.paddingBotom)
					m.spaceBelow = ($F[0].offsetTop + $F.outerHeight()) - m.bottom + _below($F);
				else // no footer - check marginBottom on Content element itself
					m.spaceBelow = _below($C);
			};
		});
	}


	/**
	* Called every time a pane is opened, closed, or resized to slide the togglers to 'center' and adjust their length if necessary
	*
	* @see  initHandles(), open(), close(), resizeAll()
	* @param {(string|Object)=}		evt_or_panes	The pane(s) being resized
	*/
,	sizeHandles = function (evt_or_panes) {
		var panes = evtPane.call(this, evt_or_panes)
		panes = panes ? panes.split(",") : _c.borderPanes;

		$.each(panes, function (i, pane) {
			var 
				o	= options[pane]
			,	s	= state[pane]
			,	$P	= $Ps[pane]
			,	$R	= $Rs[pane]
			,	$T	= $Ts[pane]
			,	$TC
			;
			if (!$P || !$R) return;

			var
				dir			= _c[pane].dir
			,	_state		= (s.isClosed ? "_closed" : "_open")
			,	spacing		= o["spacing"+ _state]
			,	togAlign	= o["togglerAlign"+ _state]
			,	togLen		= o["togglerLength"+ _state]
			,	paneLen
			,	left
			,	offset
			,	CSS = {}
			;

			if (spacing === 0) {
				$R.hide();
				return;
			}
			else if (!s.noRoom && !s.isHidden) // skip if resizer was hidden for any reason
				$R.show(); // in case was previously hidden

			// Resizer Bar is ALWAYS same width/height of pane it is attached to
			if (dir === "horz") { // north/south
				//paneLen = $P.outerWidth(); // s.outerWidth || 
				paneLen = sC.innerWidth; // handle offscreen-panes
				s.resizerLength = paneLen;
				left = $.layout.cssNum($P, "left")
				$R.css({
					width:	cssW($R, paneLen) // account for borders & padding
				,	height:	cssH($R, spacing) // ditto
				,	left:	left > -9999 ? left : sC.inset.left // handle offscreen-panes
				});
			}
			else { // east/west
				paneLen = $P.outerHeight(); // s.outerHeight || 
				s.resizerLength = paneLen;
				$R.css({
					height:	cssH($R, paneLen) // account for borders & padding
				,	width:	cssW($R, spacing) // ditto
				,	top:	sC.inset.top + getPaneSize("north", true) // TODO: what if no North pane?
				//,	top:	$.layout.cssNum($Ps["center"], "top")
				});
			}

			// remove hover classes
			removeHover( o, $R );

			if ($T) {
				if (togLen === 0 || (s.isSliding && o.hideTogglerOnSlide)) {
					$T.hide(); // always HIDE the toggler when 'sliding'
					return;
				}
				else
					$T.show(); // in case was previously hidden

				if (!(togLen > 0) || togLen === "100%" || togLen > paneLen) {
					togLen = paneLen;
					offset = 0;
				}
				else { // calculate 'offset' based on options.PANE.togglerAlign_open/closed
					if (isStr(togAlign)) {
						switch (togAlign) {
							case "top":
							case "left":	offset = 0;
											break;
							case "bottom":
							case "right":	offset = paneLen - togLen;
											break;
							case "middle":
							case "center":
							default:		offset = round((paneLen - togLen) / 2); // 'default' catches typos
						}
					}
					else { // togAlign = number
						var x = parseInt(togAlign, 10); //
						if (togAlign >= 0) offset = x;
						else offset = paneLen - togLen + x; // NOTE: x is negative!
					}
				}

				if (dir === "horz") { // north/south
					var width = cssW($T, togLen);
					$T.css({
						width:	width  // account for borders & padding
					,	height:	cssH($T, spacing) // ditto
					,	left:	offset // TODO: VERIFY that toggler  positions correctly for ALL values
					,	top:	0
					});
					// CENTER the toggler content SPAN
					$T.children(".content").each(function(){
						$TC = $(this);
						$TC.css("marginLeft", round((width-$TC.outerWidth())/2)); // could be negative
					});
				}
				else { // east/west
					var height = cssH($T, togLen);
					$T.css({
						height:	height // account for borders & padding
					,	width:	cssW($T, spacing) // ditto
					,	top:	offset // POSITION the toggler
					,	left:	0
					});
					// CENTER the toggler content SPAN
					$T.children(".content").each(function(){
						$TC = $(this);
						$TC.css("marginTop", round((height-$TC.outerHeight())/2)); // could be negative
					});
				}

				// remove ALL hover classes
				removeHover( 0, $T );
			}

			// DONE measuring and sizing this resizer/toggler, so can be 'hidden' now
			if (!state.initialized && (o.initHidden || s.isHidden)) {
				$R.hide();
				if ($T) $T.hide();
			}
		});
	}


	/**
	* @param {(string|Object)}	evt_or_pane
	*/
,	enableClosable = function (evt_or_pane) {
		if (!isInitialized()) return;
		var	pane = evtPane.call(this, evt_or_pane)
		,	$T	= $Ts[pane]
		,	o	= options[pane]
		;
		if (!$T) return;
		o.closable = true;
		$T	.bind("click."+ sID, function(evt){ evt.stopPropagation(); toggle(pane); })
			.css("visibility", "visible")
			.css("cursor", "pointer")
			.attr("title", state[pane].isClosed ? o.tips.Open : o.tips.Close) // may be blank
			.show();
	}
	/**
	* @param {(string|Object)}	evt_or_pane
	* @param {boolean=}			[hide=false]
	*/
,	disableClosable = function (evt_or_pane, hide) {
		if (!isInitialized()) return;
		var	pane = evtPane.call(this, evt_or_pane)
		,	$T	= $Ts[pane]
		;
		if (!$T) return;
		options[pane].closable = false;
		// is closable is disable, then pane MUST be open!
		if (state[pane].isClosed) open(pane, false, true);
		$T	.unbind("."+ sID)
			.css("visibility", hide ? "hidden" : "visible") // instead of hide(), which creates logic issues
			.css("cursor", "default")
			.attr("title", "");
	}


	/**
	* @param {(string|Object)}	evt_or_pane
	*/
,	enableSlidable = function (evt_or_pane) {
		if (!isInitialized()) return;
		var	pane = evtPane.call(this, evt_or_pane)
		,	$R	= $Rs[pane]
		;
		if (!$R || !$R.data('draggable')) return;
		options[pane].slidable = true; 
		if (state[pane].isClosed)
			bindStartSlidingEvents(pane, true);
	}
	/**
	* @param {(string|Object)}	evt_or_pane
	*/
,	disableSlidable = function (evt_or_pane) {
		if (!isInitialized()) return;
		var	pane = evtPane.call(this, evt_or_pane)
		,	$R	= $Rs[pane]
		;
		if (!$R) return;
		options[pane].slidable = false; 
		if (state[pane].isSliding)
			close(pane, false, true);
		else {
			bindStartSlidingEvents(pane, false);
			$R	.css("cursor", "default")
				.attr("title", "");
			removeHover(null, $R[0]); // in case currently hovered
		}
	}


	/**
	* @param {(string|Object)}	evt_or_pane
	*/
,	enableResizable = function (evt_or_pane) {
		if (!isInitialized()) return;
		var	pane = evtPane.call(this, evt_or_pane)
		,	$R	= $Rs[pane]
		,	o	= options[pane]
		;
		if (!$R || !$R.data('draggable')) return;
		o.resizable = true; 
		$R.draggable("enable");
		if (!state[pane].isClosed)
			$R	.css("cursor", o.resizerCursor)
			 	.attr("title", o.tips.Resize);
	}
	/**
	* @param {(string|Object)}	evt_or_pane
	*/
,	disableResizable = function (evt_or_pane) {
		if (!isInitialized()) return;
		var	pane = evtPane.call(this, evt_or_pane)
		,	$R	= $Rs[pane]
		;
		if (!$R || !$R.data('draggable')) return;
		options[pane].resizable = false; 
		$R	.draggable("disable")
			.css("cursor", "default")
			.attr("title", "");
		removeHover(null, $R[0]); // in case currently hovered
	}


	/**
	* Move a pane from source-side (eg, west) to target-side (eg, east)
	* If pane exists on target-side, move that to source-side, ie, 'swap' the panes
	*
	* @param {(string|Object)}	evt_or_pane1	The pane/edge being swapped
	* @param {string}			pane2			ditto
	*/
,	swapPanes = function (evt_or_pane1, pane2) {
		if (!isInitialized()) return;
		var pane1 = evtPane.call(this, evt_or_pane1);
		// change state.edge NOW so callbacks can know where pane is headed...
		state[pane1].edge = pane2;
		state[pane2].edge = pane1;
		// run these even if NOT state.initialized
		if (false === _runCallbacks("onswap_start", pane1)
		 ||	false === _runCallbacks("onswap_start", pane2)
		) {
			state[pane1].edge = pane1; // reset
			state[pane2].edge = pane2;
			return;
		}

		var
			oPane1	= copy( pane1 )
		,	oPane2	= copy( pane2 )
		,	sizes	= {}
		;
		sizes[pane1] = oPane1 ? oPane1.state.size : 0;
		sizes[pane2] = oPane2 ? oPane2.state.size : 0;

		// clear pointers & state
		$Ps[pane1] = false; 
		$Ps[pane2] = false;
		state[pane1] = {};
		state[pane2] = {};
		
		// ALWAYS remove the resizer & toggler elements
		if ($Ts[pane1]) $Ts[pane1].remove();
		if ($Ts[pane2]) $Ts[pane2].remove();
		if ($Rs[pane1]) $Rs[pane1].remove();
		if ($Rs[pane2]) $Rs[pane2].remove();
		$Rs[pane1] = $Rs[pane2] = $Ts[pane1] = $Ts[pane2] = false;

		// transfer element pointers and data to NEW Layout keys
		move( oPane1, pane2 );
		move( oPane2, pane1 );

		// cleanup objects
		oPane1 = oPane2 = sizes = null;

		// make panes 'visible' again
		if ($Ps[pane1]) $Ps[pane1].css(_c.visible);
		if ($Ps[pane2]) $Ps[pane2].css(_c.visible);

		// fix any size discrepancies caused by swap
		resizeAll();

		// run these even if NOT state.initialized
		_runCallbacks("onswap_end", pane1);
		_runCallbacks("onswap_end", pane2);

		return;

		function copy (n) { // n = pane
			var
				$P	= $Ps[n]
			,	$C	= $Cs[n]
			;
			return !$P ? false : {
				pane:		n
			,	P:			$P ? $P[0] : false
			,	C:			$C ? $C[0] : false
			,	state:		$.extend(true, {}, state[n])
			,	options:	$.extend(true, {}, options[n])
			}
		};

		function move (oPane, pane) {
			if (!oPane) return;
			var
				P		= oPane.P
			,	C		= oPane.C
			,	oldPane = oPane.pane
			,	c		= _c[pane]
			//	save pane-options that should be retained
			,	s		= $.extend(true, {}, state[pane])
			,	o		= options[pane]
			//	RETAIN side-specific FX Settings - more below
			,	fx		= { resizerCursor: o.resizerCursor }
			,	re, size, pos
			;
			$.each("fxName,fxSpeed,fxSettings".split(","), function (i, k) {
				fx[k +"_open"]  = o[k +"_open"];
				fx[k +"_close"] = o[k +"_close"];
				fx[k +"_size"]  = o[k +"_size"];
			});

			// update object pointers and attributes
			$Ps[pane] = $(P)
				.data({
					layoutPane:		Instance[pane]	// NEW pointer to pane-alias-object
				,	layoutEdge:		pane
				})
				.css(_c.hidden)
				.css(c.cssReq)
			;
			$Cs[pane] = C ? $(C) : false;

			// set options and state
			options[pane]	= $.extend(true, {}, oPane.options, fx);
			state[pane]		= $.extend(true, {}, oPane.state);

			// change classNames on the pane, eg: ui-layout-pane-east ==> ui-layout-pane-west
			re = new RegExp(o.paneClass +"-"+ oldPane, "g");
			P.className = P.className.replace(re, o.paneClass +"-"+ pane);

			// ALWAYS regenerate the resizer & toggler elements
			initHandles(pane); // create the required resizer & toggler

			// if moving to different orientation, then keep 'target' pane size
			if (c.dir != _c[oldPane].dir) {
				size = sizes[pane] || 0;
				setSizeLimits(pane); // update pane-state
				size = max(size, state[pane].minSize);
				// use manualSizePane to disable autoResize - not useful after panes are swapped
				manualSizePane(pane, size, true, true); // true/true = skipCallback/noAnimation
			}
			else // move the resizer here
				$Rs[pane].css(c.side, sC.inset[c.side] + (state[pane].isVisible ? getPaneSize(pane) : 0));


			// ADD CLASSNAMES & SLIDE-BINDINGS
			if (oPane.state.isVisible && !s.isVisible)
				setAsOpen(pane, true); // true = skipCallback
			else {
				setAsClosed(pane);
				bindStartSlidingEvents(pane, true); // will enable events IF option is set
			}

			// DESTROY the object
			oPane = null;
		};
	}


	/**
	* INTERNAL method to sync pin-buttons when pane is opened or closed
	* Unpinned means the pane is 'sliding' - ie, over-top of the adjacent panes
	*
	* @see  open(), setAsOpen(), setAsClosed()
	* @param {string}	pane   These are the params returned to callbacks by layout()
	* @param {boolean}	doPin  True means set the pin 'down', False means 'up'
	*/
,	syncPinBtns = function (pane, doPin) {
		if ($.layout.plugins.buttons)
			$.each(state[pane].pins, function (i, selector) {
				$.layout.buttons.setPinState(Instance, $(selector), pane, doPin);
			});
	}

;	// END var DECLARATIONS

	/**
	* Capture keys when enableCursorHotkey - toggle pane if hotkey pressed
	*
	* @see  document.keydown()
	*/
	function keyDown (evt) {
		if (!evt) return true;
		var code = evt.keyCode;
		if (code < 33) return true; // ignore special keys: ENTER, TAB, etc

		var
			PANE = {
				38: "north" // Up Cursor	- $.ui.keyCode.UP
			,	40: "south" // Down Cursor	- $.ui.keyCode.DOWN
			,	37: "west"  // Left Cursor	- $.ui.keyCode.LEFT
			,	39: "east"  // Right Cursor	- $.ui.keyCode.RIGHT
			}
		,	ALT		= evt.altKey // no worky!
		,	SHIFT	= evt.shiftKey
		,	CTRL	= evt.ctrlKey
		,	CURSOR	= (CTRL && code >= 37 && code <= 40)
		,	o, k, m, pane
		;

		if (CURSOR && options[PANE[code]].enableCursorHotkey) // valid cursor-hotkey
			pane = PANE[code];
		else if (CTRL || SHIFT) // check to see if this matches a custom-hotkey
			$.each(_c.borderPanes, function (i, p) { // loop each pane to check its hotkey
				o = options[p];
				k = o.customHotkey;
				m = o.customHotkeyModifier; // if missing or invalid, treated as "CTRL+SHIFT"
				if ((SHIFT && m=="SHIFT") || (CTRL && m=="CTRL") || (CTRL && SHIFT)) { // Modifier matches
					if (k && code === (isNaN(k) || k <= 9 ? k.toUpperCase().charCodeAt(0) : k)) { // Key matches
						pane = p;
						return false; // BREAK
					}
				}
			});

		// validate pane
		if (!pane || !$Ps[pane] || !options[pane].closable || state[pane].isHidden)
			return true;

		toggle(pane);

		evt.stopPropagation();
		evt.returnValue = false; // CANCEL key
		return false;
	};


/*
 * ######################################
 *	UTILITY METHODS
 *	called externally or by initButtons
 * ######################################
 */

	/**
	* Change/reset a pane overflow setting & zIndex to allow popups/drop-downs to work
	*
	* @param {Object=}   [el]	(optional) Can also be 'bound' to a click, mouseOver, or other event
	*/
	function allowOverflow (el) {
		if (!isInitialized()) return;
		if (this && this.tagName) el = this; // BOUND to element
		var $P;
		if (isStr(el))
			$P = $Ps[el];
		else if ($(el).data("layoutRole"))
			$P = $(el);
		else
			$(el).parents().each(function(){
				if ($(this).data("layoutRole")) {
					$P = $(this);
					return false; // BREAK
				}
			});
		if (!$P || !$P.length) return; // INVALID

		var
			pane	= $P.data("layoutEdge")
		,	s		= state[pane]
		;

		// if pane is already raised, then reset it before doing it again!
		// this would happen if allowOverflow is attached to BOTH the pane and an element 
		if (s.cssSaved)
			resetOverflow(pane); // reset previous CSS before continuing

		// if pane is raised by sliding or resizing, or its closed, then abort
		if (s.isSliding || s.isResizing || s.isClosed) {
			s.cssSaved = false;
			return;
		}

		var
			newCSS	= { zIndex: (options.zIndexes.resizer_normal + 1) }
		,	curCSS	= {}
		,	of		= $P.css("overflow")
		,	ofX		= $P.css("overflowX")
		,	ofY		= $P.css("overflowY")
		;
		// determine which, if any, overflow settings need to be changed
		if (of != "visible") {
			curCSS.overflow = of;
			newCSS.overflow = "visible";
		}
		if (ofX && !ofX.match(/(visible|auto)/)) {
			curCSS.overflowX = ofX;
			newCSS.overflowX = "visible";
		}
		if (ofY && !ofY.match(/(visible|auto)/)) {
			curCSS.overflowY = ofX;
			newCSS.overflowY = "visible";
		}

		// save the current overflow settings - even if blank!
		s.cssSaved = curCSS;

		// apply new CSS to raise zIndex and, if necessary, make overflow 'visible'
		$P.css( newCSS );

		// make sure the zIndex of all other panes is normal
		$.each(_c.allPanes, function(i, p) {
			if (p != pane) resetOverflow(p);
		});

	};
	/**
	* @param {Object=}   [el]	(optional) Can also be 'bound' to a click, mouseOver, or other event
	*/
	function resetOverflow (el) {
		if (!isInitialized()) return;
		if (this && this.tagName) el = this; // BOUND to element
		var $P;
		if (isStr(el))
			$P = $Ps[el];
		else if ($(el).data("layoutRole"))
			$P = $(el);
		else
			$(el).parents().each(function(){
				if ($(this).data("layoutRole")) {
					$P = $(this);
					return false; // BREAK
				}
			});
		if (!$P || !$P.length) return; // INVALID

		var
			pane	= $P.data("layoutEdge")
		,	s		= state[pane]
		,	CSS		= s.cssSaved || {}
		;
		// reset the zIndex
		if (!s.isSliding && !s.isResizing)
			$P.css("zIndex", options.zIndexes.pane_normal);

		// reset Overflow - if necessary
		$P.css( CSS );

		// clear var
		s.cssSaved = false;
	};

/*
 * #####################
 * CREATE/RETURN LAYOUT
 * #####################
 */

	// validate that container exists
	var $N = $(this).eq(0); // FIRST matching Container element
	if (!$N.length) {
		return _log( options.errors.containerMissing );
	};

	// Users retrieve Instance of a layout with: $N.layout() OR $N.data("layout")
	// return the Instance-pointer if layout has already been initialized
	if ($N.data("layoutContainer") && $N.data("layout"))
		return $N.data("layout"); // cached pointer

	// init global vars
	var 
		$Ps	= {}	// Panes x5		- set in initPanes()
	,	$Cs	= {}	// Content x5	- set in initPanes()
	,	$Rs	= {}	// Resizers x4	- set in initHandles()
	,	$Ts	= {}	// Togglers x4	- set in initHandles()
	,	$Ms	= $([])	// Masks - up to 2 masks per pane (IFRAME + DIV)
	//	aliases for code brevity
	,	sC	= state.container // alias for easy access to 'container dimensions'
	,	sID	= state.id // alias for unique layout ID/namespace - eg: "layout435"
	;

	// create Instance object to expose data & option Properties, and primary action Methods
	var Instance = {
	//	layout data
		options:			options			// property - options hash
	,	state:				state			// property - dimensions hash
	//	object pointers
	,	container:			$N				// property - object pointers for layout container
	,	panes:				$Ps				// property - object pointers for ALL Panes: panes.north, panes.center
	,	contents:			$Cs				// property - object pointers for ALL Content: contents.north, contents.center
	,	resizers:			$Rs				// property - object pointers for ALL Resizers, eg: resizers.north
	,	togglers:			$Ts				// property - object pointers for ALL Togglers, eg: togglers.north
	//	border-pane open/close
	,	hide:				hide			// method - ditto
	,	show:				show			// method - ditto
	,	toggle:				toggle			// method - pass a 'pane' ("north", "west", etc)
	,	open:				open			// method - ditto
	,	close:				close			// method - ditto
	,	slideOpen:			slideOpen		// method - ditto
	,	slideClose:			slideClose		// method - ditto
	,	slideToggle:		slideToggle		// method - ditto
	//	pane actions
	,	setSizeLimits:		setSizeLimits	// method - pass a 'pane' - update state min/max data
	,	_sizePane:			sizePane		// method -intended for user by plugins only!
	,	sizePane:			manualSizePane	// method - pass a 'pane' AND an 'outer-size' in pixels or percent, or 'auto'
	,	sizeContent:		sizeContent		// method - pass a 'pane'
	,	swapPanes:			swapPanes		// method - pass TWO 'panes' - will swap them
	,	showMasks:			showMasks		// method - pass a 'pane' OR list of panes - default = all panes with mask option set
	,	hideMasks:			hideMasks		// method - ditto'
	//	pane element methods
	,	initContent:		initContent		// method - ditto
	,	addPane:			addPane			// method - pass a 'pane'
	,	removePane:			removePane		// method - pass a 'pane' to remove from layout, add 'true' to delete the pane-elem
	,	createChildren:		createChildren	// method - pass a 'pane' and (optional) layout-options (OVERRIDES options[pane].children
	,	refreshChildren:	refreshChildren	// method - pass a 'pane' and a layout-instance
	//	special pane option setting
	,	enableClosable:		enableClosable	// method - pass a 'pane'
	,	disableClosable:	disableClosable	// method - ditto
	,	enableSlidable:		enableSlidable	// method - ditto
	,	disableSlidable:	disableSlidable	// method - ditto
	,	enableResizable:	enableResizable	// method - ditto
	,	disableResizable:	disableResizable// method - ditto
	//	utility methods for panes
	,	allowOverflow:		allowOverflow	// utility - pass calling element (this)
	,	resetOverflow:		resetOverflow	// utility - ditto
	//	layout control
	,	destroy:			destroy			// method - no parameters
	,	initPanes:			isInitialized	// method - no parameters
	,	resizeAll:			resizeAll		// method - no parameters
	//	callback triggering
	,	runCallbacks:		_runCallbacks	// method - pass evtName & pane (if a pane-event), eg: trigger("onopen", "west")
	//	alias collections of options, state and children - created in addPane and extended elsewhere
	,	hasParentLayout:	false			// set by initContainer()
	,	children:			children		// pointers to child-layouts, eg: Instance.children.west.layoutName
	,	north:				false			// alias group: { name: pane, pane: $Ps[pane], options: options[pane], state: state[pane], children: children[pane] }
	,	south:				false			// ditto
	,	west:				false			// ditto
	,	east:				false			// ditto
	,	center:				false			// ditto
	};

	// create the border layout NOW
	if (_create() === 'cancel') // onload_start callback returned false to CANCEL layout creation
		return null;
	else // true OR false -- if layout-elements did NOT init (hidden or do not exist), can auto-init later
		return Instance; // return the Instance object

}


})( jQuery );
// END Layout - keep internal vars internal!



// START Plugins - shared wrapper, no global vars
(function ($) {


/**
 * jquery.layout.state 1.0
 * $Date: 2011-07-16 08:00:00 (Sat, 16 July 2011) $
 *
 * Copyright (c) 2012 
 *   Kevin Dalman (http://allpro.net)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * @requires: UI Layout 1.3.0.rc30.1 or higher
 * @requires: $.ui.cookie (above)
 *
 * @see: http://groups.google.com/group/jquery-ui-layout
 */
/*
 *	State-management options stored in options.stateManagement, which includes a .cookie hash
 *	Default options saves ALL KEYS for ALL PANES, ie: pane.size, pane.isClosed, pane.isHidden
 *
 *	// STATE/COOKIE OPTIONS
 *	@example $(el).layout({
				stateManagement: {
					enabled:	true
				,	stateKeys:	"east.size,west.size,east.isClosed,west.isClosed"
				,	cookie:		{ name: "appLayout", path: "/" }
				}
			})
 *	@example $(el).layout({ stateManagement__enabled: true }) // enable auto-state-management using cookies
 *	@example $(el).layout({ stateManagement__cookie: { name: "appLayout", path: "/" } })
 *	@example $(el).layout({ stateManagement__cookie__name: "appLayout", stateManagement__cookie__path: "/" })
 *
 *	// STATE/COOKIE METHODS
 *	@example myLayout.saveCookie( "west.isClosed,north.size,south.isHidden", {expires: 7} );
 *	@example myLayout.loadCookie();
 *	@example myLayout.deleteCookie();
 *	@example var JSON = myLayout.readState();	// CURRENT Layout State
 *	@example var JSON = myLayout.readCookie();	// SAVED Layout State (from cookie)
 *	@example var JSON = myLayout.state.stateData;	// LAST LOADED Layout State (cookie saved in layout.state hash)
 *
 *	CUSTOM STATE-MANAGEMENT (eg, saved in a database)
 *	@example var JSON = myLayout.readState( "west.isClosed,north.size,south.isHidden" );
 *	@example myLayout.loadState( JSON );
 */

/**
 *	UI COOKIE UTILITY
 *
 *	A $.cookie OR $.ui.cookie namespace *should be standard*, but until then...
 *	This creates $.ui.cookie so Layout does not need the cookie.jquery.js plugin
 *	NOTE: This utility is REQUIRED by the layout.state plugin
 *
 *	Cookie methods in Layout are created as part of State Management 
 */
if (!$.ui) $.ui = {};
$.ui.cookie = {

	// cookieEnabled is not in DOM specs, but DOES works in all browsers,including IE6
	acceptsCookies: !!navigator.cookieEnabled

,	read: function (name) {
		var	c		= document.cookie
		,	cs		= c ? c.split(';') : []
		,	pair	// loop var
		;
		for (var i=0, n=cs.length; i < n; i++) {
			pair = $.trim(cs[i]).split('='); // name=value pair
			if (pair[0] == name) // found the layout cookie
				return decodeURIComponent(pair[1]);
		}
		return null;
	}

,	write: function (name, val, cookieOpts) {
		var	params	= ""
		,	date	= ""
		,	clear	= false
		,	o		= cookieOpts || {}
		,	x		= o.expires  || null
		,	t		= $.type(x)
		;
		if (t === "date")
			date = x;
		else if (t === "string" && x > 0) {
			x = parseInt(x,10);
			t = "number";
		}
		if (t === "number") {
			date = new Date();
			if (x > 0)
				date.setDate(date.getDate() + x);
			else {
				date.setFullYear(1970);
				clear = true;
			}
		}
		if (date)		params += ";expires="+ date.toUTCString();
		if (o.path)		params += ";path="+ o.path;
		if (o.domain)	params += ";domain="+ o.domain;
		if (o.secure)	params += ";secure";
		document.cookie = name +"="+ (clear ? "" : encodeURIComponent( val )) + params; // write or clear cookie
	}

,	clear: function (name) {
		$.ui.cookie.write(name, "", {expires: -1});
	}

};
// if cookie.jquery.js is not loaded, create an alias to replicate it
// this may be useful to other plugins or code dependent on that plugin
if (!$.cookie) $.cookie = function (k, v, o) {
	var C = $.ui.cookie;
	if (v === null)
		C.clear(k);
	else if (v === undefined)
		return C.read(k);
	else
		C.write(k, v, o);
};


// tell Layout that the state plugin is available
$.layout.plugins.stateManagement = true;

//	Add State-Management options to layout.defaults
$.layout.config.optionRootKeys.push("stateManagement");
$.layout.defaults.stateManagement = {
	enabled:		false	// true = enable state-management, even if not using cookies
,	autoSave:		true	// Save a state-cookie when page exits?
,	autoLoad:		true	// Load the state-cookie when Layout inits?
,	animateLoad:	true	// animate panes when loading state into an active layout
,	includeChildren: true	// recurse into child layouts to include their state as well
	// List state-data to save - must be pane-specific
,	stateKeys:	"north.size,south.size,east.size,west.size,"+
				"north.isClosed,south.isClosed,east.isClosed,west.isClosed,"+
				"north.isHidden,south.isHidden,east.isHidden,west.isHidden"
,	cookie: {
		name:	""	// If not specified, will use Layout.name, else just "Layout"
	,	domain:	""	// blank = current domain
	,	path:	""	// blank = current page, "/" = entire website
	,	expires: ""	// 'days' to keep cookie - leave blank for 'session cookie'
	,	secure:	false
	}
};
// Set stateManagement as a layout-option, NOT a pane-option
$.layout.optionsMap.layout.push("stateManagement");

/*
 *	State Management methods
 */
$.layout.state = {

	/**
	 * Get the current layout state and save it to a cookie
	 *
	 * myLayout.saveCookie( keys, cookieOpts )
	 *
	 * @param {Object}			inst
	 * @param {(string|Array)=}	keys
	 * @param {Object=}			cookieOpts
	 */
	saveCookie: function (inst, keys, cookieOpts) {
		var o	= inst.options
		,	sm	= o.stateManagement
		,	oC	= $.extend(true, {}, sm.cookie, cookieOpts || null)
		,	data = inst.state.stateData = inst.readState( keys || sm.stateKeys ) // read current panes-state
		;
		$.ui.cookie.write( oC.name || o.name || "Layout", $.layout.state.encodeJSON(data), oC );
		return $.extend(true, {}, data); // return COPY of state.stateData data
	}

	/**
	 * Remove the state cookie
	 *
	 * @param {Object}	inst
	 */
,	deleteCookie: function (inst) {
		var o = inst.options;
		$.ui.cookie.clear( o.stateManagement.cookie.name || o.name || "Layout" );
	}

	/**
	 * Read & return data from the cookie - as JSON
	 *
	 * @param {Object}	inst
	 */
,	readCookie: function (inst) {
		var o = inst.options;
		var c = $.ui.cookie.read( o.stateManagement.cookie.name || o.name || "Layout" );
		// convert cookie string back to a hash and return it
		return c ? $.layout.state.decodeJSON(c) : {};
	}

	/**
	 * Get data from the cookie and USE IT to loadState
	 *
	 * @param {Object}	inst
	 */
,	loadCookie: function (inst) {
		var c = $.layout.state.readCookie(inst); // READ the cookie
		if (c) {
			inst.state.stateData = $.extend(true, {}, c); // SET state.stateData
			inst.loadState(c); // LOAD the retrieved state
		}
		return c;
	}

	/**
	 * Update layout options from the cookie, if one exists
	 *
	 * @param {Object}		inst
	 * @param {Object=}		stateData
	 * @param {boolean=}	animate
	 */
,	loadState: function (inst, data, opts) {
		if (!$.isPlainObject( data ) || $.isEmptyObject( data )) return;

		// normalize data & cache in the state object
		data = inst.state.stateData = $.layout.transformData( data ); // panes = default subkey

		// add missing/default state-restore options
		var smo = inst.options.stateManagement;
		opts = $.extend({
			animateLoad:		false //smo.animateLoad
		,	includeChildren:	smo.includeChildren
		}, opts );

		if (!inst.state.initialized) {
			/*
			 *	layout NOT initialized, so just update its options
			 */
			// MUST remove pane.children keys before applying to options
			// use a copy so we don't remove keys from original data
			var o = $.extend(true, {}, data);
			//delete o.center; // center has no state-data - only children
			$.each($.layout.config.allPanes, function (idx, pane) {
				if (o[pane]) delete o[pane].children;		   
			 });
			// update CURRENT layout-options with saved state data
			$.extend(true, inst.options, o);
		}
		else {
			/*
			 *	layout already initialized, so modify layout's configuration
			 */
			var noAnimate = !opts.animateLoad
			,	o, c, h, state, open
			;
			$.each($.layout.config.borderPanes, function (idx, pane) {
				o = data[ pane ];
				if (!$.isPlainObject( o )) return; // no key, skip pane

				s	= o.size;
				c	= o.initClosed;
				h	= o.initHidden;
				ar	= o.autoResize
				state	= inst.state[pane];
				open	= state.isVisible;

				// reset autoResize
				if (ar)
					state.autoResize = ar;
				// resize BEFORE opening
				if (!open)
					inst._sizePane(pane, s, false, false, false); // false=skipCallback/noAnimation/forceResize
				// open/close as necessary - DO NOT CHANGE THIS ORDER!
				if (h === true)			inst.hide(pane, noAnimate);
				else if (c === true)	inst.close(pane, false, noAnimate);
				else if (c === false)	inst.open (pane, false, noAnimate);
				else if (h === false)	inst.show (pane, false, noAnimate);
				// resize AFTER any other actions
				if (open)
					inst._sizePane(pane, s, false, false, noAnimate); // animate resize if option passed
			});

			/*
			 *	RECURSE INTO CHILD-LAYOUTS
			 */
			if (opts.includeChildren) {
				var paneStateChildren, childState;
				$.each(inst.children, function (pane, paneChildren) {
					paneStateChildren = data[pane] ? data[pane].children : 0;
					if (paneStateChildren && paneChildren) {
						$.each(paneChildren, function (stateKey, child) {
							childState = paneStateChildren[stateKey];
							if (child && childState)
								child.loadState( childState );
						});
					}
				});
			}
		}
	}

	/**
	 * Get the *current layout state* and return it as a hash
	 *
	 * @param {Object=}		inst	// Layout instance to get state for
	 * @param {object=}		[opts]	// State-Managements override options
	 */
,	readState: function (inst, opts) {
		// backward compatility
		if ($.type(opts) === 'string') opts = { keys: opts };
		if (!opts) opts = {};
		var	sm		= inst.options.stateManagement
		,	ic		= opts.includeChildren
		,	recurse	= ic !== undefined ? ic : sm.includeChildren
		,	keys	= opts.stateKeys || sm.stateKeys
		,	alt		= { isClosed: 'initClosed', isHidden: 'initHidden' }
		,	state	= inst.state
		,	panes	= $.layout.config.allPanes
		,	data	= {}
		,	pair, pane, key, val
		,	ps, pC, child, array, count, branch
		;
		if ($.isArray(keys)) keys = keys.join(",");
		// convert keys to an array and change delimiters from '__' to '.'
		keys = keys.replace(/__/g, ".").split(',');
		// loop keys and create a data hash
		for (var i=0, n=keys.length; i < n; i++) {
			pair = keys[i].split(".");
			pane = pair[0];
			key  = pair[1];
			if ($.inArray(pane, panes) < 0) continue; // bad pane!
			val = state[ pane ][ key ];
			if (val == undefined) continue;
			if (key=="isClosed" && state[pane]["isSliding"])
				val = true; // if sliding, then *really* isClosed
			( data[pane] || (data[pane]={}) )[ alt[key] ? alt[key] : key ] = val;
		}

		// recurse into the child-layouts for each pane
		if (recurse) {
			$.each(panes, function (idx, pane) {
				pC = inst.children[pane];
				ps = state.stateData[pane];
				if ($.isPlainObject( pC ) && !$.isEmptyObject( pC )) {
					// ensure a key exists for this 'pane', eg: branch = data.center
					branch = data[pane] || (data[pane] = {});
					if (!branch.children) branch.children = {};
					$.each( pC, function (key, child) {
						// ONLY read state from an initialize layout
						if ( child.state.initialized )
							branch.children[ key ] = $.layout.state.readState( child );
						// if we have PREVIOUS (onLoad) state for this child-layout, KEEP IT!
						else if ( ps && ps.children && ps.children[ key ] ) {
							branch.children[ key ] = $.extend(true, {}, ps.children[ key ] );
						}
					});
				}
			});
		}

		return data;
	}

	/**
	 *	Stringify a JSON hash so can save in a cookie or db-field
	 */
,	encodeJSON: function (JSON) {
		return parse(JSON);
		function parse (h) {
			var D=[], i=0, k, v, t // k = key, v = value
			,	a = $.isArray(h)
			;
			for (k in h) {
				v = h[k];
				t = typeof v;
				if (t == 'string')		// STRING - add quotes
					v = '"'+ v +'"';
				else if (t == 'object')	// SUB-KEY - recurse into it
					v = parse(v);
				D[i++] = (!a ? '"'+ k +'":' : '') + v;
			}
			return (a ? '[' : '{') + D.join(',') + (a ? ']' : '}');
		};
	}

	/**
	 *	Convert stringified JSON back to a hash object
	 *	@see		$.parseJSON(), adding in jQuery 1.4.1
	 */
,	decodeJSON: function (str) {
		try { return $.parseJSON ? $.parseJSON(str) : window["eval"]("("+ str +")") || {}; }
		catch (e) { return {}; }
	}


,	_create: function (inst) {
		var _	= $.layout.state
		,	o	= inst.options
		,	sm	= o.stateManagement
		;
		//	ADD State-Management plugin methods to inst
		 $.extend( inst, {
		//	readCookie - update options from cookie - returns hash of cookie data
			readCookie:		function () { return _.readCookie(inst); }
		//	deleteCookie
		,	deleteCookie:	function () { _.deleteCookie(inst); }
		//	saveCookie - optionally pass keys-list and cookie-options (hash)
		,	saveCookie:		function (keys, cookieOpts) { return _.saveCookie(inst, keys, cookieOpts); }
		//	loadCookie - readCookie and use to loadState() - returns hash of cookie data
		,	loadCookie:		function () { return _.loadCookie(inst); }
		//	loadState - pass a hash of state to use to update options
		,	loadState:		function (stateData, opts) { _.loadState(inst, stateData, opts); }
		//	readState - returns hash of current layout-state
		,	readState:		function (keys) { return _.readState(inst, keys); }
		//	add JSON utility methods too...
		,	encodeJSON:		_.encodeJSON
		,	decodeJSON:		_.decodeJSON
		});

		// init state.stateData key, even if plugin is initially disabled
		inst.state.stateData = {};

		// autoLoad MUST BE one of: data-array, data-hash, callback-function, or TRUE
		if ( !sm.autoLoad ) return;

		//	When state-data exists in the autoLoad key USE IT,
		//	even if stateManagement.enabled == false
		if ($.isPlainObject( sm.autoLoad )) {
			if (!$.isEmptyObject( sm.autoLoad )) {
				inst.loadState( sm.autoLoad );
			}
		}
		else if ( sm.enabled ) {
			// update the options from cookie or callback
			// if options is a function, call it to get stateData
			if ($.isFunction( sm.autoLoad )) {
				var d = {};
				try {
					d = sm.autoLoad( inst, inst.state, inst.options, inst.options.name || '' ); // try to get data from fn
				} catch (e) {}
				if (d && $.isPlainObject( d ) && !$.isEmptyObject( d ))
					inst.loadState(d);
			}
			else // any other truthy value will trigger loadCookie
				inst.loadCookie();
		}
	}

,	_unload: function (inst) {
		var sm = inst.options.stateManagement;
		if (sm.enabled && sm.autoSave) {
			// if options is a function, call it to save the stateData
			if ($.isFunction( sm.autoSave )) {
				try {
					sm.autoSave( inst, inst.state, inst.options, inst.options.name || '' ); // try to get data from fn
				} catch (e) {}
			}
			else // any truthy value will trigger saveCookie
				inst.saveCookie();
		}
	}

};

// add state initialization method to Layout's onCreate array of functions
$.layout.onCreate.push( $.layout.state._create );
$.layout.onUnload.push( $.layout.state._unload );




/**
 * jquery.layout.buttons 1.0
 * $Date: 2011-07-16 08:00:00 (Sat, 16 July 2011) $
 *
 * Copyright (c) 2012 
 *   Kevin Dalman (http://allpro.net)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * @requires: UI Layout 1.3.0.rc30.1 or higher
 *
 * @see: http://groups.google.com/group/jquery-ui-layout
 *
 * Docs: [ to come ]
 * Tips: [ to come ]
 */

// tell Layout that the state plugin is available
$.layout.plugins.buttons = true;

//	Add buttons options to layout.defaults
$.layout.defaults.autoBindCustomButtons = false;
// Specify autoBindCustomButtons as a layout-option, NOT a pane-option
$.layout.optionsMap.layout.push("autoBindCustomButtons");

/*
 *	Button methods
 */
$.layout.buttons = {

	/**
	* Searches for .ui-layout-button-xxx elements and auto-binds them as layout-buttons
	*
	* @see  _create()
	*
	* @param  {Object}		inst	Layout Instance object
	*/
	init: function (inst) {
		var pre		= "ui-layout-button-"
		,	layout	= inst.options.name || ""
		,	name;
		$.each("toggle,open,close,pin,toggle-slide,open-slide".split(","), function (i, action) {
			$.each($.layout.config.borderPanes, function (ii, pane) {
				$("."+pre+action+"-"+pane).each(function(){
					// if button was previously 'bound', data.layoutName was set, but is blank if layout has no 'name'
					name = $(this).data("layoutName") || $(this).attr("layoutName");
					if (name == undefined || name === layout)
						inst.bindButton(this, action, pane);
				});
			});
		});
	}

	/**
	* Helper function to validate params received by addButton utilities
	*
	* Two classes are added to the element, based on the buttonClass...
	* The type of button is appended to create the 2nd className:
	*  - ui-layout-button-pin		// action btnClass
	*  - ui-layout-button-pin-west	// action btnClass + pane
	*  - ui-layout-button-toggle
	*  - ui-layout-button-open
	*  - ui-layout-button-close
	*
	* @param {Object}			inst		Layout Instance object
	* @param {(string|!Object)}	selector	jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
	* @param {string}   		pane 		Name of the pane the button is for: 'north', 'south', etc.
	*
	* @return {Array.<Object>}	If both params valid, the element matching 'selector' in a jQuery wrapper - otherwise returns null
	*/
,	get: function (inst, selector, pane, action) {
		var $E	= $(selector)
		,	o	= inst.options
		,	err	= o.errors.addButtonError
		;
		if (!$E.length) { // element not found
			$.layout.msg(err +" "+ o.errors.selector +": "+ selector, true);
		}
		else if ($.inArray(pane, $.layout.config.borderPanes) < 0) { // invalid 'pane' sepecified
			$.layout.msg(err +" "+ o.errors.pane +": "+ pane, true);
			$E = $("");  // NO BUTTON
		}
		else { // VALID
			var btn = o[pane].buttonClass +"-"+ action;
			$E	.addClass( btn +" "+ btn +"-"+ pane )
				.data("layoutName", o.name); // add layout identifier - even if blank!
		}
		return $E;
	}


	/**
	* NEW syntax for binding layout-buttons - will eventually replace addToggle, addOpen, etc.
	*
	* @param {Object}			inst		Layout Instance object
	* @param {(string|!Object)}	selector	jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
	* @param {string}			action
	* @param {string}			pane
	*/
,	bind: function (inst, selector, action, pane) {
		var _ = $.layout.buttons;
		switch (action.toLowerCase()) {
			case "toggle":			_.addToggle	(inst, selector, pane); break;	
			case "open":			_.addOpen	(inst, selector, pane); break;
			case "close":			_.addClose	(inst, selector, pane); break;
			case "pin":				_.addPin	(inst, selector, pane); break;
			case "toggle-slide":	_.addToggle	(inst, selector, pane, true); break;	
			case "open-slide":		_.addOpen	(inst, selector, pane, true); break;
		}
		return inst;
	}

	/**
	* Add a custom Toggler button for a pane
	*
	* @param {Object}			inst		Layout Instance object
	* @param {(string|!Object)}	selector	jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
	* @param {string}  			pane 		Name of the pane the button is for: 'north', 'south', etc.
	* @param {boolean=}			slide 		true = slide-open, false = pin-open
	*/
,	addToggle: function (inst, selector, pane, slide) {
		$.layout.buttons.get(inst, selector, pane, "toggle")
			.click(function(evt){
				inst.toggle(pane, !!slide);
				evt.stopPropagation();
			});
		return inst;
	}

	/**
	* Add a custom Open button for a pane
	*
	* @param {Object}			inst		Layout Instance object
	* @param {(string|!Object)}	selector	jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
	* @param {string}			pane 		Name of the pane the button is for: 'north', 'south', etc.
	* @param {boolean=}			slide 		true = slide-open, false = pin-open
	*/
,	addOpen: function (inst, selector, pane, slide) {
		$.layout.buttons.get(inst, selector, pane, "open")
			.attr("title", inst.options[pane].tips.Open)
			.click(function (evt) {
				inst.open(pane, !!slide);
				evt.stopPropagation();
			});
		return inst;
	}

	/**
	* Add a custom Close button for a pane
	*
	* @param {Object}			inst		Layout Instance object
	* @param {(string|!Object)}	selector	jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
	* @param {string}   		pane 		Name of the pane the button is for: 'north', 'south', etc.
	*/
,	addClose: function (inst, selector, pane) {
		$.layout.buttons.get(inst, selector, pane, "close")
			.attr("title", inst.options[pane].tips.Close)
			.click(function (evt) {
				inst.close(pane);
				evt.stopPropagation();
			});
		return inst;
	}

	/**
	* Add a custom Pin button for a pane
	*
	* Four classes are added to the element, based on the paneClass for the associated pane...
	* Assuming the default paneClass and the pin is 'up', these classes are added for a west-pane pin:
	*  - ui-layout-pane-pin
	*  - ui-layout-pane-west-pin
	*  - ui-layout-pane-pin-up
	*  - ui-layout-pane-west-pin-up
	*
	* @param {Object}			inst		Layout Instance object
	* @param {(string|!Object)}	selector	jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
	* @param {string}   		pane 		Name of the pane the pin is for: 'north', 'south', etc.
	*/
,	addPin: function (inst, selector, pane) {
		var	_	= $.layout.buttons
		,	$E	= _.get(inst, selector, pane, "pin");
		if ($E.length) {
			var s = inst.state[pane];
			$E.click(function (evt) {
				_.setPinState(inst, $(this), pane, (s.isSliding || s.isClosed));
				if (s.isSliding || s.isClosed) inst.open( pane ); // change from sliding to open
				else inst.close( pane ); // slide-closed
				evt.stopPropagation();
			});
			// add up/down pin attributes and classes
			_.setPinState(inst, $E, pane, (!s.isClosed && !s.isSliding));
			// add this pin to the pane data so we can 'sync it' automatically
			// PANE.pins key is an array so we can store multiple pins for each pane
			s.pins.push( selector ); // just save the selector string
		}
		return inst;
	}

	/**
	* Change the class of the pin button to make it look 'up' or 'down'
	*
	* @see  addPin(), syncPins()
	*
	* @param {Object}			inst	Layout Instance object
	* @param {Array.<Object>}	$Pin	The pin-span element in a jQuery wrapper
	* @param {string}			pane	These are the params returned to callbacks by layout()
	* @param {boolean}			doPin	true = set the pin 'down', false = set it 'up'
	*/
,	setPinState: function (inst, $Pin, pane, doPin) {
		var updown = $Pin.attr("pin");
		if (updown && doPin === (updown=="down")) return; // already in correct state
		var
			o		= inst.options[pane]
		,	pin		= o.buttonClass +"-pin"
		,	side	= pin +"-"+ pane
		,	UP		= pin +"-up "+	side +"-up"
		,	DN		= pin +"-down "+side +"-down"
		;
		$Pin
			.attr("pin", doPin ? "down" : "up") // logic
			.attr("title", doPin ? o.tips.Unpin : o.tips.Pin)
			.removeClass( doPin ? UP : DN ) 
			.addClass( doPin ? DN : UP ) 
		;
	}

	/**
	* INTERNAL function to sync 'pin buttons' when pane is opened or closed
	* Unpinned means the pane is 'sliding' - ie, over-top of the adjacent panes
	*
	* @see  open(), close()
	*
	* @param {Object}			inst	Layout Instance object
	* @param {string}	pane	These are the params returned to callbacks by layout()
	* @param {boolean}	doPin	True means set the pin 'down', False means 'up'
	*/
,	syncPinBtns: function (inst, pane, doPin) {
		// REAL METHOD IS _INSIDE_ LAYOUT - THIS IS HERE JUST FOR REFERENCE
		$.each(inst.state[pane].pins, function (i, selector) {
			$.layout.buttons.setPinState(inst, $(selector), pane, doPin);
		});
	}


,	_load: function (inst) {
		var	_	= $.layout.buttons;
		// ADD Button methods to Layout Instance
		// Note: sel = jQuery Selector string
		$.extend( inst, {
			bindButton:		function (sel, action, pane) { return _.bind(inst, sel, action, pane); }
		//	DEPRECATED METHODS
		,	addToggleBtn:	function (sel, pane, slide) { return _.addToggle(inst, sel, pane, slide); }
		,	addOpenBtn:		function (sel, pane, slide) { return _.addOpen(inst, sel, pane, slide); }
		,	addCloseBtn:	function (sel, pane) { return _.addClose(inst, sel, pane); }
		,	addPinBtn:		function (sel, pane) { return _.addPin(inst, sel, pane); }
		});

		// init state array to hold pin-buttons
		for (var i=0; i<4; i++) {
			var pane = $.layout.config.borderPanes[i];
			inst.state[pane].pins = [];
		}

		// auto-init buttons onLoad if option is enabled
		if ( inst.options.autoBindCustomButtons )
			_.init(inst);
	}

,	_unload: function (inst) {
		// TODO: unbind all buttons???
	}

};

// add initialization method to Layout's onLoad array of functions
$.layout.onLoad.push(  $.layout.buttons._load );
//$.layout.onUnload.push( $.layout.buttons._unload );



/**
 * jquery.layout.browserZoom 1.0
 * $Date: 2011-12-29 08:00:00 (Thu, 29 Dec 2011) $
 *
 * Copyright (c) 2012 
 *   Kevin Dalman (http://allpro.net)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * @requires: UI Layout 1.3.0.rc30.1 or higher
 *
 * @see: http://groups.google.com/group/jquery-ui-layout
 *
 * TODO: Extend logic to handle other problematic zooming in browsers
 * TODO: Add hotkey/mousewheel bindings to _instantly_ respond to these zoom event
 */

// tell Layout that the plugin is available
$.layout.plugins.browserZoom = true;

$.layout.defaults.browserZoomCheckInterval = 1000;
$.layout.optionsMap.layout.push("browserZoomCheckInterval");

/*
 *	browserZoom methods
 */
$.layout.browserZoom = {

	_init: function (inst) {
		// abort if browser does not need this check
		if ($.layout.browserZoom.ratio() !== false)
			$.layout.browserZoom._setTimer(inst);
	}

,	_setTimer: function (inst) {
		// abort if layout destroyed or browser does not need this check
		if (inst.destroyed) return;
		var o	= inst.options
		,	s	= inst.state
		//	don't need check if inst has parentLayout, but check occassionally in case parent destroyed!
		//	MINIMUM 100ms interval, for performance
		,	ms	= inst.hasParentLayout ?  5000 : Math.max( o.browserZoomCheckInterval, 100 )
		;
		// set the timer
		setTimeout(function(){
			if (inst.destroyed || !o.resizeWithWindow) return;
			var d = $.layout.browserZoom.ratio();
			if (d !== s.browserZoom) {
				s.browserZoom = d;
				inst.resizeAll();
			}
			// set a NEW timeout
			$.layout.browserZoom._setTimer(inst);
		}
		,	ms );
	}

,	ratio: function () {
		var w	= window
		,	s	= screen
		,	d	= document
		,	dE	= d.documentElement || d.body
		,	b	= $.layout.browser
		,	v	= b.version
		,	r, sW, cW
		;
		// we can ignore all browsers that fire window.resize event onZoom
		if ((b.msie && v > 8)
		||	!b.msie
		) return false; // don't need to track zoom

		if (s.deviceXDPI && s.systemXDPI) // syntax compiler hack
			return calc(s.deviceXDPI, s.systemXDPI);
		// everything below is just for future reference!
		if (b.webkit && (r = d.body.getBoundingClientRect))
			return calc((r.left - r.right), d.body.offsetWidth);
		if (b.webkit && (sW = w.outerWidth))
			return calc(sW, w.innerWidth);
		if ((sW = s.width) && (cW = dE.clientWidth))
			return calc(sW, cW);
		return false; // no match, so cannot - or don't need to - track zoom

		function calc (x,y) { return (parseInt(x,10) / parseInt(y,10) * 100).toFixed(); }
	}

};
// add initialization method to Layout's onLoad array of functions
$.layout.onReady.push( $.layout.browserZoom._init );


})( jQuery );
/*
* $ lightbox_me
* By: Buck Wilson
* Version : 2.4
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


(function($) {

    $.fn.lightbox_me = function(options) {

        return this.each(function() {

            var
                opts = $.extend({}, $.fn.lightbox_me.defaults, options),
                $overlay = $(),
                $self = $(this),
                $iframe = $('<iframe id="foo" style="z-index: ' + (opts.zIndex + 1) + ';border: none; margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; top: 0; left: 0; filter: mask();"/>');

            if (opts.showOverlay) {
                //check if there's an existing overlay, if so, make subequent ones clear
               var $currentOverlays = $(".js_lb_overlay:visible");
                if ($currentOverlays.length > 0){
                    $overlay = $('<div class="lb_overlay_clear js_lb_overlay"/>');
                } else {
                    $overlay = $('<div class="' + opts.classPrefix + '_overlay js_lb_overlay"/>');
                }
            }

            /*----------------------------------------------------
               DOM Building
            ---------------------------------------------------- */
            $('body').append($self.hide()).append($overlay);


            /*----------------------------------------------------
               Overlay CSS stuffs
            ---------------------------------------------------- */

            // set css of the overlay
            if (opts.showOverlay) {
                setOverlayHeight(); // pulled this into a function because it is called on window resize.
                $overlay.css({ position: 'absolute', width: '100%', top: 0, left: 0, right: 0, bottom: 0, zIndex: (opts.zIndex + 2), display: 'none' });
				if (!$overlay.hasClass('lb_overlay_clear')){
                	$overlay.css(opts.overlayCSS);
                }
            }

            /*----------------------------------------------------
               Animate it in.
            ---------------------------------------------------- */
               //
            if (opts.showOverlay) {
                $overlay.fadeIn(opts.overlaySpeed, function() {
                    setSelfPosition();
                    $self[opts.appearEffect](opts.lightboxSpeed, function() { setOverlayHeight(); setSelfPosition(); opts.onLoad()});
                });
            } else {
                setSelfPosition();
                $self[opts.appearEffect](opts.lightboxSpeed, function() { opts.onLoad()});
            }

            /*----------------------------------------------------
               Hide parent if parent specified (parentLightbox should be jquery reference to any parent lightbox)
            ---------------------------------------------------- */
            if (opts.parentLightbox) {
                opts.parentLightbox.fadeOut(200);
            }


            /*----------------------------------------------------
               Bind Events
            ---------------------------------------------------- */

            $(window).resize(setOverlayHeight)
                     .resize(setSelfPosition)
                     .scroll(setSelfPosition);

            $(window).bind('keyup.lightbox_me', observeKeyPress);

            if (opts.closeClick) {
                $overlay.click(function(e) { closeLightbox(); e.preventDefault; });
            }
            $self.delegate(opts.closeSelector, "click", function(e) {
                closeLightbox(); e.preventDefault();
            });
            $self.bind('close', closeLightbox);
            $self.bind('reposition', setSelfPosition);



            /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
              -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */


            /*----------------------------------------------------
               Private Functions
            ---------------------------------------------------- */

            /* Remove or hide all elements */
            function closeLightbox() {
                var s = $self[0].style;
                if (opts.destroyOnClose) {
                    $self.add($overlay).remove();
                } else {
                    $self.add($overlay).hide();
                }

                //show the hidden parent lightbox
                if (opts.parentLightbox) {
                    opts.parentLightbox.fadeIn(200);
                }
                if (opts.preventScroll) {
                    $('body').css('overflow', '');
                }
                $iframe.remove();

				        // clean up events.
                $self.undelegate(opts.closeSelector, "click");
                $self.unbind('close', closeLightbox);
                $self.unbind('repositon', setSelfPosition);
                
                $(window).unbind('resize', setOverlayHeight);
                $(window).unbind('resize', setSelfPosition);
                $(window).unbind('scroll', setSelfPosition);
                $(window).unbind('keyup.lightbox_me');
                opts.onClose();
            }


            /* Function to bind to the window to observe the escape/enter key press */
            function observeKeyPress(e) {
                if((e.keyCode == 27 || (e.DOM_VK_ESCAPE == 27 && e.which==0)) && opts.closeEsc) closeLightbox();
            }


            /* Set the height of the overlay
                    : if the document height is taller than the window, then set the overlay height to the document height.
                    : otherwise, just set overlay height: 100%
            */
            function setOverlayHeight() {
                if ($(window).height() < $(document).height()) {
                    $overlay.css({height: $(document).height() + 'px'});
                     $iframe.css({height: $(document).height() + 'px'});
                } else {
                    $overlay.css({height: '100%'});
                }
            }


            /* Set the position of the modal'd window ($self)
                    : if $self is taller than the window, then make it absolutely positioned
                    : otherwise fixed
            */
            function setSelfPosition() {
                var s = $self[0].style;

                // reset CSS so width is re-calculated for margin-left CSS
                $self.css({left: '50%', marginLeft: ($self.outerWidth() / 2) * -1,  zIndex: (opts.zIndex + 3) });


                /* we have to get a little fancy when dealing with height, because lightbox_me
                    is just so fancy.
                 */

                // if the height of $self is bigger than the window and self isn't already position absolute
                if (($self.height() + 80  >= $(window).height()) && ($self.css('position') != 'absolute')) {

                    // we are going to make it positioned where the user can see it, but they can still scroll
                    // so the top offset is based on the user's scroll position.
                    var topOffset = $(document).scrollTop() + 40;
                    $self.css({position: 'absolute', top: topOffset + 'px', marginTop: 0})
                } else if ($self.height()+ 80  < $(window).height()) {
                    //if the height is less than the window height, then we're gonna make this thing position: fixed.
                    if (opts.centered) {
                        $self.css({ position: 'fixed', top: '50%', marginTop: ($self.outerHeight() / 2) * -1})
                    } else {
                        $self.css({ position: 'fixed'}).css(opts.modalCSS);
                    }
                    if (opts.preventScroll) {
                        $('body').css('overflow', 'hidden');
                    }
                }
            }

        });



    };

    $.fn.lightbox_me.defaults = {

        // animation
        appearEffect: "fadeIn",
        appearEase: "",
        overlaySpeed: 250,
        lightboxSpeed: 300,

        // close
        closeSelector: ".close",
        closeClick: true,
        closeEsc: true,

        // behavior
        destroyOnClose: false,
        showOverlay: true,
        parentLightbox: false,
        preventScroll: false,

        // callbacks
        onLoad: function() {},
        onClose: function() {},

        // style
        classPrefix: 'lb',
        zIndex: 999,
        centered: false,
        modalCSS: {top: '40px'},
        overlayCSS: {background: 'black', opacity: .3}
    }
})(jQuery);

/*! jquery.selectBoxIt - v3.8.1 - 2013-11-17 
* http://www.selectboxit.com
* Copyright (c) 2013 Greg Franko; Licensed MIT*/
!function(a){"use strict";a(window.jQuery,window,document)}(function(a,b,c,d){"use strict";a.widget("selectBox.selectBoxIt",{VERSION:"3.8.1",options:{showEffect:"none",showEffectOptions:{},showEffectSpeed:"medium",hideEffect:"none",hideEffectOptions:{},hideEffectSpeed:"medium",showFirstOption:!0,defaultText:"",defaultIcon:"",downArrowIcon:"",theme:"default",keydownOpen:!0,isMobile:function(){var a=navigator.userAgent||navigator.vendor||b.opera;return/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(a)},"native":!1,aggressiveChange:!1,selectWhenHidden:!0,viewport:a(b),similarSearch:!1,copyAttributes:["title","rel"],copyClasses:"button",nativeMousedown:!1,customShowHideEvent:!1,autoWidth:!0,html:!0,populate:"",dynamicPositioning:!0,hideCurrent:!1},getThemes:function(){var b=this,c=a(b.element).attr("data-theme")||"c";return{bootstrap:{focus:"active",hover:"",enabled:"enabled",disabled:"disabled",arrow:"caret",button:"btn",list:"dropdown-menu",container:"bootstrap",open:"open"},jqueryui:{focus:"ui-state-focus",hover:"ui-state-hover",enabled:"ui-state-enabled",disabled:"ui-state-disabled",arrow:"ui-icon ui-icon-triangle-1-s",button:"ui-widget ui-state-default",list:"ui-widget ui-widget-content",container:"jqueryui",open:"selectboxit-open"},jquerymobile:{focus:"ui-btn-down-"+c,hover:"ui-btn-hover-"+c,enabled:"ui-enabled",disabled:"ui-disabled",arrow:"ui-icon ui-icon-arrow-d ui-icon-shadow",button:"ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-"+c,list:"ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-"+c,container:"jquerymobile",open:"selectboxit-open"},"default":{focus:"selectboxit-focus",hover:"selectboxit-hover",enabled:"selectboxit-enabled",disabled:"selectboxit-disabled",arrow:"selectboxit-default-arrow",button:"selectboxit-btn",list:"selectboxit-list",container:"selectboxit-container",open:"selectboxit-open"}}},isDeferred:function(b){return a.isPlainObject(b)&&b.promise&&b.done},_create:function(b){var d=this,e=d.options.populate,f=d.options.theme;if(d.element.is("select"))return d.widgetProto=a.Widget.prototype,d.originalElem=d.element[0],d.selectBox=d.element,d.options.populate&&d.add&&!b&&d.add(e),d.selectItems=d.element.find("option"),d.firstSelectItem=d.selectItems.slice(0,1),d.documentHeight=a(c).height(),d.theme=a.isPlainObject(f)?a.extend({},d.getThemes()["default"],f):d.getThemes()[f]?d.getThemes()[f]:d.getThemes()["default"],d.currentFocus=0,d.blur=!0,d.textArray=[],d.currentIndex=0,d.currentText="",d.flipped=!1,b||(d.selectBoxStyles=d.selectBox.attr("style")),d._createDropdownButton()._createUnorderedList()._copyAttributes()._replaceSelectBox()._addClasses(d.theme)._eventHandlers(),d.originalElem.disabled&&d.disable&&d.disable(),d._ariaAccessibility&&d._ariaAccessibility(),d.isMobile=d.options.isMobile(),d._mobile&&d._mobile(),d.options["native"]&&this._applyNativeSelect(),d.triggerEvent("create"),d},_createDropdownButton:function(){var b=this,c=b.originalElemId=b.originalElem.id||"",d=b.originalElemValue=b.originalElem.value||"",e=b.originalElemName=b.originalElem.name||"",f=b.options.copyClasses,g=b.selectBox.attr("class")||"";return b.dropdownText=a("<span/>",{id:c&&c+"SelectBoxItText","class":"selectboxit-text",unselectable:"on",text:b.firstSelectItem.text()}).attr("data-val",d),b.dropdownImageContainer=a("<span/>",{"class":"selectboxit-option-icon-container"}),b.dropdownImage=a("<i/>",{id:c&&c+"SelectBoxItDefaultIcon","class":"selectboxit-default-icon",unselectable:"on"}),b.dropdown=a("<span/>",{id:c&&c+"SelectBoxIt","class":"selectboxit "+("button"===f?g:"")+" "+(b.selectBox.prop("disabled")?b.theme.disabled:b.theme.enabled),name:e,tabindex:b.selectBox.attr("tabindex")||"0",unselectable:"on"}).append(b.dropdownImageContainer.append(b.dropdownImage)).append(b.dropdownText),b.dropdownContainer=a("<span/>",{id:c&&c+"SelectBoxItContainer","class":"selectboxit-container "+b.theme.container+" "+("container"===f?g:"")}).append(b.dropdown),b},_createUnorderedList:function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o=this,p="",q=o.originalElemId||"",r=a("<ul/>",{id:q&&q+"SelectBoxItOptions","class":"selectboxit-options",tabindex:-1});if(o.options.showFirstOption||(o.selectItems.first().attr("disabled","disabled"),o.selectItems=o.selectBox.find("option").slice(1)),o.selectItems.each(function(q){m=a(this),c="",d="",b=m.prop("disabled"),e=m.attr("data-icon")||"",f=m.attr("data-iconurl")||"",g=f?"selectboxit-option-icon-url":"",h=f?"style=\"background-image:url('"+f+"');\"":"",i=m.attr("data-selectedtext"),j=m.attr("data-text"),l=j?j:m.text(),n=m.parent(),n.is("optgroup")&&(c="selectboxit-optgroup-option",0===m.index()&&(d='<span class="selectboxit-optgroup-header '+n.first().attr("class")+'"data-disabled="true">'+n.first().attr("label")+"</span>")),m.attr("value",this.value),p+=d+'<li data-id="'+q+'" data-val="'+this.value+'" data-disabled="'+b+'" class="'+c+" selectboxit-option "+(a(this).attr("class")||"")+'"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon '+e+" "+(g||o.theme.container)+'"'+h+"></i></span>"+(o.options.html?l:o.htmlEscape(l))+"</a></li>",k=m.attr("data-search"),o.textArray[q]=b?"":k?k:l,this.selected&&(o._setText(o.dropdownText,i||l),o.currentFocus=q)}),o.options.defaultText||o.selectBox.attr("data-text")){var s=o.options.defaultText||o.selectBox.attr("data-text");o._setText(o.dropdownText,s),o.options.defaultText=s}return r.append(p),o.list=r,o.dropdownContainer.append(o.list),o.listItems=o.list.children("li"),o.listAnchors=o.list.find("a"),o.listItems.first().addClass("selectboxit-option-first"),o.listItems.last().addClass("selectboxit-option-last"),o.list.find("li[data-disabled='true']").not(".optgroupHeader").addClass(o.theme.disabled),o.dropdownImage.addClass(o.selectBox.attr("data-icon")||o.options.defaultIcon||o.listItems.eq(o.currentFocus).find("i").attr("class")),o.dropdownImage.attr("style",o.listItems.eq(o.currentFocus).find("i").attr("style")),o},_replaceSelectBox:function(){var b,c,e,f=this,g=f.originalElem.id||"",h=f.selectBox.attr("data-size"),i=f.listSize=h===d?"auto":"0"===h?"auto":+h;return f.selectBox.css("display","none").after(f.dropdownContainer),f.dropdownContainer.appendTo("body").addClass("selectboxit-rendering"),b=f.dropdown.height(),f.downArrow=a("<i/>",{id:g&&g+"SelectBoxItArrow","class":"selectboxit-arrow",unselectable:"on"}),f.downArrowContainer=a("<span/>",{id:g&&g+"SelectBoxItArrowContainer","class":"selectboxit-arrow-container",unselectable:"on"}).append(f.downArrow),f.dropdown.append(f.downArrowContainer),f.listItems.removeClass("selectboxit-selected").eq(f.currentFocus).addClass("selectboxit-selected"),c=f.downArrowContainer.outerWidth(!0),e=f.dropdownImage.outerWidth(!0),f.options.autoWidth&&(f.dropdown.css({width:"auto"}).css({width:f.list.outerWidth(!0)+c+e}),f.list.css({"min-width":f.dropdown.width()})),f.dropdownText.css({"max-width":f.dropdownContainer.outerWidth(!0)-(c+e)}),f.selectBox.after(f.dropdownContainer),f.dropdownContainer.removeClass("selectboxit-rendering"),"number"===a.type(i)&&(f.maxHeight=f.listAnchors.outerHeight(!0)*i),f},_scrollToView:function(a){var b=this,c=b.listItems.eq(b.currentFocus),d=b.list.scrollTop(),e=c.height(),f=c.position().top,g=Math.abs(f),h=b.list.height();return"search"===a?e>h-f?b.list.scrollTop(d+(f-(h-e))):-1>f&&b.list.scrollTop(f-e):"up"===a?-1>f&&b.list.scrollTop(d-g):"down"===a&&e>h-f&&b.list.scrollTop(d+(g-h+e)),b},_callbackSupport:function(b){var c=this;return a.isFunction(b)&&b.call(c,c.dropdown),c},_setText:function(a,b){var c=this;return c.options.html?a.html(b):a.text(b),c},open:function(a){var b=this,c=b.options.showEffect,d=b.options.showEffectSpeed,e=b.options.showEffectOptions,f=b.options["native"],g=b.isMobile;return!b.listItems.length||b.dropdown.hasClass(b.theme.disabled)?b:(f||g||this.list.is(":visible")||(b.triggerEvent("open"),b._dynamicPositioning&&b.options.dynamicPositioning&&b._dynamicPositioning(),"none"===c?b.list.show():"show"===c||"slideDown"===c||"fadeIn"===c?b.list[c](d):b.list.show(c,e,d),b.list.promise().done(function(){b._scrollToView("search"),b.triggerEvent("opened")})),b._callbackSupport(a),b)},close:function(a){var b=this,c=b.options.hideEffect,d=b.options.hideEffectSpeed,e=b.options.hideEffectOptions,f=b.options["native"],g=b.isMobile;return f||g||!b.list.is(":visible")||(b.triggerEvent("close"),"none"===c?b.list.hide():"hide"===c||"slideUp"===c||"fadeOut"===c?b.list[c](d):b.list.hide(c,e,d),b.list.promise().done(function(){b.triggerEvent("closed")})),b._callbackSupport(a),b},toggle:function(){var a=this,b=a.list.is(":visible");b?a.close():b||a.open()},_keyMappings:{38:"up",40:"down",13:"enter",8:"backspace",9:"tab",32:"space",27:"esc"},_keydownMethods:function(){var a=this,b=a.list.is(":visible")||!a.options.keydownOpen;return{down:function(){a.moveDown&&b&&a.moveDown()},up:function(){a.moveUp&&b&&a.moveUp()},enter:function(){var b=a.listItems.eq(a.currentFocus);a._update(b),"true"!==b.attr("data-preventclose")&&a.close(),a.triggerEvent("enter")},tab:function(){a.triggerEvent("tab-blur"),a.close()},backspace:function(){a.triggerEvent("backspace")},esc:function(){a.close()}}},_eventHandlers:function(){var b,c,d=this,e=d.options.nativeMousedown,f=d.options.customShowHideEvent,g=d.focusClass,h=d.hoverClass,i=d.openClass;return this.dropdown.on({"click.selectBoxIt":function(){d.dropdown.trigger("focus",!0),d.originalElem.disabled||(d.triggerEvent("click"),e||f||d.toggle())},"mousedown.selectBoxIt":function(){a(this).data("mdown",!0),d.triggerEvent("mousedown"),e&&!f&&d.toggle()},"mouseup.selectBoxIt":function(){d.triggerEvent("mouseup")},"blur.selectBoxIt":function(){d.blur&&(d.triggerEvent("blur"),d.close(),a(this).removeClass(g))},"focus.selectBoxIt":function(b,c){var e=a(this).data("mdown");a(this).removeData("mdown"),e||c||setTimeout(function(){d.triggerEvent("tab-focus")},0),c||(a(this).hasClass(d.theme.disabled)||a(this).addClass(g),d.triggerEvent("focus"))},"keydown.selectBoxIt":function(a){var b=d._keyMappings[a.keyCode],c=d._keydownMethods()[b];c&&(c(),!d.options.keydownOpen||"up"!==b&&"down"!==b||d.open()),c&&"tab"!==b&&a.preventDefault()},"keypress.selectBoxIt":function(a){var b=a.charCode||a.keyCode,c=d._keyMappings[a.charCode||a.keyCode],e=String.fromCharCode(b);d.search&&(!c||c&&"space"===c)&&d.search(e,!0,!0),"space"===c&&a.preventDefault()},"mouseenter.selectBoxIt":function(){d.triggerEvent("mouseenter")},"mouseleave.selectBoxIt":function(){d.triggerEvent("mouseleave")}}),d.list.on({"mouseover.selectBoxIt":function(){d.blur=!1},"mouseout.selectBoxIt":function(){d.blur=!0},"focusin.selectBoxIt":function(){d.dropdown.trigger("focus",!0)}}),d.list.on({"mousedown.selectBoxIt":function(){d._update(a(this)),d.triggerEvent("option-click"),"false"===a(this).attr("data-disabled")&&"true"!==a(this).attr("data-preventclose")&&d.close(),setTimeout(function(){d.dropdown.trigger("focus",!0)},0)},"focusin.selectBoxIt":function(){d.listItems.not(a(this)).removeAttr("data-active"),a(this).attr("data-active","");var b=d.list.is(":hidden");(d.options.searchWhenHidden&&b||d.options.aggressiveChange||b&&d.options.selectWhenHidden)&&d._update(a(this)),a(this).addClass(g)},"mouseup.selectBoxIt":function(){e&&!f&&(d._update(a(this)),d.triggerEvent("option-mouseup"),"false"===a(this).attr("data-disabled")&&"true"!==a(this).attr("data-preventclose")&&d.close())},"mouseenter.selectBoxIt":function(){"false"===a(this).attr("data-disabled")&&(d.listItems.removeAttr("data-active"),a(this).addClass(g).attr("data-active",""),d.listItems.not(a(this)).removeClass(g),a(this).addClass(g),d.currentFocus=+a(this).attr("data-id"))},"mouseleave.selectBoxIt":function(){"false"===a(this).attr("data-disabled")&&(d.listItems.not(a(this)).removeClass(g).removeAttr("data-active"),a(this).addClass(g),d.currentFocus=+a(this).attr("data-id"))},"blur.selectBoxIt":function(){a(this).removeClass(g)}},".selectboxit-option"),d.list.on({"click.selectBoxIt":function(a){a.preventDefault()}},"a"),d.selectBox.on({"change.selectBoxIt, internal-change.selectBoxIt":function(a,e){var f,g;e||(f=d.list.find('li[data-val="'+d.originalElem.value+'"]'),f.length&&(d.listItems.eq(d.currentFocus).removeClass(d.focusClass),d.currentFocus=+f.attr("data-id"))),f=d.listItems.eq(d.currentFocus),g=f.attr("data-selectedtext"),b=f.attr("data-text"),c=b?b:f.find("a").text(),d._setText(d.dropdownText,g||c),d.dropdownText.attr("data-val",d.originalElem.value),f.find("i").attr("class")&&(d.dropdownImage.attr("class",f.find("i").attr("class")).addClass("selectboxit-default-icon"),d.dropdownImage.attr("style",f.find("i").attr("style"))),d.triggerEvent("changed")},"disable.selectBoxIt":function(){d.dropdown.addClass(d.theme.disabled)},"enable.selectBoxIt":function(){d.dropdown.removeClass(d.theme.disabled)},"open.selectBoxIt":function(){var a,b=d.list.find("li[data-val='"+d.dropdownText.attr("data-val")+"']");b.length||(b=d.listItems.not("[data-disabled=true]").first()),d.currentFocus=+b.attr("data-id"),a=d.listItems.eq(d.currentFocus),d.dropdown.addClass(i).removeClass(h).addClass(g),d.listItems.removeClass(d.selectedClass).removeAttr("data-active").not(a).removeClass(g),a.addClass(d.selectedClass).addClass(g),d.options.hideCurrent&&(d.listItems.show(),a.hide())},"close.selectBoxIt":function(){d.dropdown.removeClass(i)},"blur.selectBoxIt":function(){d.dropdown.removeClass(g)},"mouseenter.selectBoxIt":function(){a(this).hasClass(d.theme.disabled)||d.dropdown.addClass(h)},"mouseleave.selectBoxIt":function(){d.dropdown.removeClass(h)},destroy:function(a){a.preventDefault(),a.stopPropagation()}}),d},_update:function(a){var b,c,d,e=this,f=e.options.defaultText||e.selectBox.attr("data-text"),g=e.listItems.eq(e.currentFocus);"false"===a.attr("data-disabled")&&(b=e.listItems.eq(e.currentFocus).attr("data-selectedtext"),c=g.attr("data-text"),d=c?c:g.text(),(f&&e.options.html?e.dropdownText.html()===f:e.dropdownText.text()===f)&&e.selectBox.val()===a.attr("data-val")?e.triggerEvent("change"):(e.selectBox.val(a.attr("data-val")),e.currentFocus=+a.attr("data-id"),e.originalElem.value!==e.dropdownText.attr("data-val")&&e.triggerEvent("change")))},_addClasses:function(a){var b=this,c=(b.focusClass=a.focus,b.hoverClass=a.hover,a.button),d=a.list,e=a.arrow,f=a.container;return b.openClass=a.open,b.selectedClass="selectboxit-selected",b.downArrow.addClass(b.selectBox.attr("data-downarrow")||b.options.downArrowIcon||e),b.dropdownContainer.addClass(f),b.dropdown.addClass(c),b.list.addClass(d),b},refresh:function(a,b){var c=this;return c._destroySelectBoxIt()._create(!0),b||c.triggerEvent("refresh"),c._callbackSupport(a),c},htmlEscape:function(a){return String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},triggerEvent:function(a){var b=this,c=b.options.showFirstOption?b.currentFocus:b.currentFocus-1>=0?b.currentFocus:0;return b.selectBox.trigger(a,{selectbox:b.selectBox,selectboxOption:b.selectItems.eq(c),dropdown:b.dropdown,dropdownOption:b.listItems.eq(b.currentFocus)}),b},_copyAttributes:function(){var a=this;return a._addSelectBoxAttributes&&a._addSelectBoxAttributes(),a},_realOuterWidth:function(a){if(a.is(":visible"))return a.outerWidth(!0);var b,c=a.clone();return c.css({visibility:"hidden",display:"block",position:"absolute"}).appendTo("body"),b=c.outerWidth(!0),c.remove(),b}});var e=a.selectBox.selectBoxIt.prototype;e.add=function(b,c){this._populate(b,function(b){var d,e,f=this,g=a.type(b),h=0,i=[],j=f._isJSON(b),k=j&&f._parseJSON(b);if(b&&("array"===g||j&&k.data&&"array"===a.type(k.data))||"object"===g&&b.data&&"array"===a.type(b.data)){for(f._isJSON(b)&&(b=k),b.data&&(b=b.data),e=b.length;e-1>=h;h+=1)d=b[h],a.isPlainObject(d)?i.push(a("<option/>",d)):"string"===a.type(d)&&i.push(a("<option/>",{text:d,value:d}));f.selectBox.append(i)}else b&&"string"===g&&!f._isJSON(b)?f.selectBox.append(b):b&&"object"===g?f.selectBox.append(a("<option/>",b)):b&&f._isJSON(b)&&a.isPlainObject(f._parseJSON(b))&&f.selectBox.append(a("<option/>",f._parseJSON(b)));return f.dropdown?f.refresh(function(){f._callbackSupport(c)},!0):f._callbackSupport(c),f})},e._parseJSON=function(b){return JSON&&JSON.parse&&JSON.parse(b)||a.parseJSON(b)},e._isJSON=function(a){var b,c=this;try{return b=c._parseJSON(a),!0}catch(d){return!1}},e._populate=function(b,c){var d=this;return b=a.isFunction(b)?b.call():b,d.isDeferred(b)?b.done(function(a){c.call(d,a)}):c.call(d,b),d},e._ariaAccessibility=function(){var b=this,c=a("label[for='"+b.originalElem.id+"']");return b.dropdownContainer.attr({role:"combobox","aria-autocomplete":"list","aria-haspopup":"true","aria-expanded":"false","aria-owns":b.list[0].id}),b.dropdownText.attr({"aria-live":"polite"}),b.dropdown.on({"disable.selectBoxIt":function(){b.dropdownContainer.attr("aria-disabled","true")},"enable.selectBoxIt":function(){b.dropdownContainer.attr("aria-disabled","false")}}),c.length&&b.dropdownContainer.attr("aria-labelledby",c[0].id),b.list.attr({role:"listbox","aria-hidden":"true"}),b.listItems.attr({role:"option"}),b.selectBox.on({"open.selectBoxIt":function(){b.list.attr("aria-hidden","false"),b.dropdownContainer.attr("aria-expanded","true")},"close.selectBoxIt":function(){b.list.attr("aria-hidden","true"),b.dropdownContainer.attr("aria-expanded","false")}}),b},e._addSelectBoxAttributes=function(){var b=this;return b._addAttributes(b.selectBox.prop("attributes"),b.dropdown),b.selectItems.each(function(c){b._addAttributes(a(this).prop("attributes"),b.listItems.eq(c))}),b},e._addAttributes=function(b,c){var d=this,e=d.options.copyAttributes;return b.length&&a.each(b,function(b,d){var f=d.name.toLowerCase(),g=d.value;"null"===g||-1===a.inArray(f,e)&&-1===f.indexOf("data")||c.attr(f,g)}),d},e.destroy=function(a){var b=this;return b._destroySelectBoxIt(),b.widgetProto.destroy.call(b),b._callbackSupport(a),b},e._destroySelectBoxIt=function(){var b=this;return b.dropdown.off(".selectBoxIt"),a.contains(b.dropdownContainer[0],b.originalElem)&&b.dropdownContainer.before(b.selectBox),b.dropdownContainer.remove(),b.selectBox.removeAttr("style").attr("style",b.selectBoxStyles),b.triggerEvent("destroy"),b},e.disable=function(a){var b=this;return b.options.disabled||(b.close(),b.selectBox.attr("disabled","disabled"),b.dropdown.removeAttr("tabindex").removeClass(b.theme.enabled).addClass(b.theme.disabled),b.setOption("disabled",!0),b.triggerEvent("disable")),b._callbackSupport(a),b},e.disableOption=function(b,c){var d,e,f,g=this,h=a.type(b);return"number"===h&&(g.close(),d=g.selectBox.find("option").eq(b),g.triggerEvent("disable-option"),d.attr("disabled","disabled"),g.listItems.eq(b).attr("data-disabled","true").addClass(g.theme.disabled),g.currentFocus===b&&(e=g.listItems.eq(g.currentFocus).nextAll("li").not("[data-disabled='true']").first().length,f=g.listItems.eq(g.currentFocus).prevAll("li").not("[data-disabled='true']").first().length,e?g.moveDown():f?g.moveUp():g.disable())),g._callbackSupport(c),g},e._isDisabled=function(){var a=this;return a.originalElem.disabled&&a.disable(),a},e._dynamicPositioning=function(){var b=this;if("number"===a.type(b.listSize))b.list.css("max-height",b.maxHeight||"none");else{var c=b.dropdown.offset().top,d=b.list.data("max-height")||b.list.outerHeight(),e=b.dropdown.outerHeight(),f=b.options.viewport,g=f.height(),h=a.isWindow(f.get(0))?f.scrollTop():f.offset().top,i=g+h>=c+e+d,j=!i;if(b.list.data("max-height")||b.list.data("max-height",b.list.outerHeight()),j)if(b.dropdown.offset().top-h>=d)b.list.css("max-height",d),b.list.css("top",b.dropdown.position().top-b.list.outerHeight());else{var k=Math.abs(c+e+d-(g+h)),l=Math.abs(b.dropdown.offset().top-h-d);l>k?(b.list.css("max-height",d-k-e/2),b.list.css("top","auto")):(b.list.css("max-height",d-l-e/2),b.list.css("top",b.dropdown.position().top-b.list.outerHeight()))}else b.list.css("max-height",d),b.list.css("top","auto")}return b},e.enable=function(a){var b=this;return b.options.disabled&&(b.triggerEvent("enable"),b.selectBox.removeAttr("disabled"),b.dropdown.attr("tabindex",0).removeClass(b.theme.disabled).addClass(b.theme.enabled),b.setOption("disabled",!1),b._callbackSupport(a)),b},e.enableOption=function(b,c){var d,e=this,f=a.type(b);return"number"===f&&(d=e.selectBox.find("option").eq(b),e.triggerEvent("enable-option"),d.removeAttr("disabled"),e.listItems.eq(b).attr("data-disabled","false").removeClass(e.theme.disabled)),e._callbackSupport(c),e},e.moveDown=function(a){var b=this;b.currentFocus+=1;var c="true"===b.listItems.eq(b.currentFocus).attr("data-disabled")?!0:!1,d=b.listItems.eq(b.currentFocus).nextAll("li").not("[data-disabled='true']").first().length;if(b.currentFocus===b.listItems.length)b.currentFocus-=1;else{if(c&&d)return b.listItems.eq(b.currentFocus-1).blur(),b.moveDown(),void 0;c&&!d?b.currentFocus-=1:(b.listItems.eq(b.currentFocus-1).blur().end().eq(b.currentFocus).focusin(),b._scrollToView("down"),b.triggerEvent("moveDown"))}return b._callbackSupport(a),b},e.moveUp=function(a){var b=this;b.currentFocus-=1;var c="true"===b.listItems.eq(b.currentFocus).attr("data-disabled")?!0:!1,d=b.listItems.eq(b.currentFocus).prevAll("li").not("[data-disabled='true']").first().length;if(-1===b.currentFocus)b.currentFocus+=1;else{if(c&&d)return b.listItems.eq(b.currentFocus+1).blur(),b.moveUp(),void 0;c&&!d?b.currentFocus+=1:(b.listItems.eq(this.currentFocus+1).blur().end().eq(b.currentFocus).focusin(),b._scrollToView("up"),b.triggerEvent("moveUp"))}return b._callbackSupport(a),b},e._setCurrentSearchOption=function(a){var b=this;return(b.options.aggressiveChange||b.options.selectWhenHidden||b.listItems.eq(a).is(":visible"))&&b.listItems.eq(a).data("disabled")!==!0&&(b.listItems.eq(b.currentFocus).blur(),b.currentIndex=a,b.currentFocus=a,b.listItems.eq(b.currentFocus).focusin(),b._scrollToView("search"),b.triggerEvent("search")),b},e._searchAlgorithm=function(a,b){var c,d,e,f,g=this,h=!1,i=g.textArray,j=g.currentText;for(c=a,e=i.length;e>c;c+=1){for(f=i[c],d=0;e>d;d+=1)-1!==i[d].search(b)&&(h=!0,d=e);if(h||(g.currentText=g.currentText.charAt(g.currentText.length-1).replace(/[|()\[{.+*?$\\]/g,"\\$0"),j=g.currentText),b=new RegExp(j,"gi"),j.length<3){if(b=new RegExp(j.charAt(0),"gi"),-1!==f.charAt(0).search(b))return g._setCurrentSearchOption(c),(f.substring(0,j.length).toLowerCase()!==j.toLowerCase()||g.options.similarSearch)&&(g.currentIndex+=1),!1}else if(-1!==f.search(b))return g._setCurrentSearchOption(c),!1;if(f.toLowerCase()===g.currentText.toLowerCase())return g._setCurrentSearchOption(c),g.currentText="",!1}return!0},e.search=function(a,b,c){var d=this;c?d.currentText+=a.replace(/[|()\[{.+*?$\\]/g,"\\$0"):d.currentText=a.replace(/[|()\[{.+*?$\\]/g,"\\$0");var e=d._searchAlgorithm(d.currentIndex,new RegExp(d.currentText,"gi"));return e&&d._searchAlgorithm(0,d.currentText),d._callbackSupport(b),d},e._updateMobileText=function(){var a,b,c,d=this;a=d.selectBox.find("option").filter(":selected"),b=a.attr("data-text"),c=b?b:a.text(),d._setText(d.dropdownText,c),d.list.find('li[data-val="'+a.val()+'"]').find("i").attr("class")&&d.dropdownImage.attr("class",d.list.find('li[data-val="'+a.val()+'"]').find("i").attr("class")).addClass("selectboxit-default-icon")},e._applyNativeSelect=function(){var a=this;return a.dropdownContainer.append(a.selectBox),a.dropdown.attr("tabindex","-1"),a.selectBox.css({display:"block",visibility:"visible",width:a._realOuterWidth(a.dropdown),height:a.dropdown.outerHeight(),opacity:"0",position:"absolute",top:"0",left:"0",cursor:"pointer","z-index":"999999",margin:a.dropdown.css("margin"),padding:"0","-webkit-appearance":"menulist-button"}),a.originalElem.disabled&&a.triggerEvent("disable"),this},e._mobileEvents=function(){var a=this;a.selectBox.on({"changed.selectBoxIt":function(){a.hasChanged=!0,a._updateMobileText(),a.triggerEvent("option-click")},"mousedown.selectBoxIt":function(){a.hasChanged||!a.options.defaultText||a.originalElem.disabled||(a._updateMobileText(),a.triggerEvent("option-click"))},"enable.selectBoxIt":function(){a.selectBox.removeClass("selectboxit-rendering")},"disable.selectBoxIt":function(){a.selectBox.addClass("selectboxit-rendering")}})},e._mobile=function(){var a=this;return a.isMobile&&(a._applyNativeSelect(),a._mobileEvents()),this},e.remove=function(b,c){var d,e,f=this,g=a.type(b),h=0,i="";if("array"===g){for(e=b.length;e-1>=h;h+=1)d=b[h],"number"===a.type(d)&&(i+=i.length?", option:eq("+d+")":"option:eq("+d+")");f.selectBox.find(i).remove()}else"number"===g?f.selectBox.find("option").eq(b).remove():f.selectBox.find("option").remove();return f.dropdown?f.refresh(function(){f._callbackSupport(c)},!0):f._callbackSupport(c),f},e.selectOption=function(b,c){var d=this,e=a.type(b);return"number"===e?d.selectBox.val(d.selectItems.eq(b).val()).change():"string"===e&&d.selectBox.val(b).change(),d._callbackSupport(c),d},e.setOption=function(b,c,d){var e=this;return"string"===a.type(b)&&(e.options[b]=c),e.refresh(function(){e._callbackSupport(d)},!0),e},e.setOptions=function(b,c){var d=this;return a.isPlainObject(b)&&(d.options=a.extend({},d.options,b)),d.refresh(function(){d._callbackSupport(c)},!0),d},e.wait=function(a,b){var c=this;return c.widgetProto._delay.call(c,b,a),c}});
// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// released under the MIT license

(function($) {
    
    function maybeCall(thing, ctx) {
        return (typeof thing == 'function') ? (thing.call(ctx)) : thing;
    };
    
    function isElementInDOM(ele) {
      while (ele = ele.parentNode) {
        if (ele == document) return true;
      }
      return false;
    };
    
    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        this.fixTitle();
    };
    
    Tipsy.prototype = {
        show: function() {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();
                
                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy'; // reset classname in case of dynamic gravity
                $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).prependTo(document.body);
                
                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });
                
                var actualWidth = $tip[0].offsetWidth,
                    actualHeight = $tip[0].offsetHeight,
                    gravity = maybeCall(this.options.gravity, this.$element[0]);
                
                var tp;
                switch (gravity.charAt(0)) {
                    case 'n':
                        tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 's':
                        tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 'e':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};
                        break;
                    case 'w':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};
                        break;
                }
                
                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }
                
                $tip.css(tp).addClass('tipsy-' + gravity);
                $tip.find('.tipsy-arrow')[0].className = 'tipsy-arrow tipsy-arrow-' + gravity.charAt(0);
                if (this.options.className) {
                    $tip.addClass(maybeCall(this.options.className, this.$element[0]));
                }
                
                if (this.options.fade) {
                    $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});
                } else {
                    $tip.css({visibility: 'visible', opacity: this.options.opacity});
                }
            }
        },
        
        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() { $(this).remove(); });
            } else {
                this.tip().remove();
            }
        },
        
        fixTitle: function() {
            var $e = this.$element;
            if ($e.attr('title') || typeof($e.attr('original-title')) != 'string') {
                $e.attr('original-title', $e.attr('title') || '').removeAttr('title');
            }
        },
        
        getTitle: function() {
            var title, $e = this.$element, o = this.options;
            this.fixTitle();
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },
        
        tip: function() {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
                this.$tip.data('tipsy-pointee', this.$element[0]);
            }
            return this.$tip;
        },
        
        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },
        
        enable: function() { this.enabled = true; },
        disable: function() { this.enabled = false; },
        toggleEnabled: function() { this.enabled = !this.enabled; }
    };
    
    $.fn.tipsy = function(options) {
        
        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            var tipsy = this.data('tipsy');
            if (tipsy) tipsy[options]();
            return this;
        }
        
        options = $.extend({}, $.fn.tipsy.defaults, options);
        
        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy);
            }
            return tipsy;
        }
        
        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                tipsy.fixTitle();
                setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
            }
        };
        
        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'out') tipsy.hide(); }, options.delayOut);
            }
        };
        
        if (!options.live) this.each(function() { get(this); });
        
        if (options.trigger != 'manual') {
            var binder   = options.live ? 'live' : 'bind',
                eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }
        
        return this;
        
    };
    
    $.fn.tipsy.defaults = {
        className: null,
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 1.0,
        title: 'title',
        trigger: 'hover'
    };
    
    $.fn.tipsy.revalidate = function() {
      $('.tipsy').each(function() {
        var pointee = $.data(this, 'tipsy-pointee');
        if (!pointee || !isElementInDOM(pointee)) {
          $(this).remove();
        }
      });
    };
    
    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };
    
    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };
    
    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };
    
    /**
     * yields a closure of the supplied parameters, producing a function that takes
     * no arguments and is suitable for use as an autogravity function like so:
     *
     * @param margin (int) - distance from the viewable region edge that an
     *        element should be before setting its tooltip's gravity to be away
     *        from that edge.
     * @param prefer (string, e.g. 'n', 'sw', 'w') - the direction to prefer
     *        if there are no viewable region edges effecting the tooltip's
     *        gravity. It will try to vary from this minimally, for example,
     *        if 'sw' is preferred and an element is near the right viewable 
     *        region edge, but not the top edge, it will set the gravity for
     *        that element's tooltip to be 'se', preserving the southern
     *        component.
     */
     $.fn.tipsy.autoBounds = function(margin, prefer) {
		return function() {
			var dir = {ns: prefer[0], ew: (prefer.length > 1 ? prefer[1] : false)},
			    boundTop = $(document).scrollTop() + margin,
			    boundLeft = $(document).scrollLeft() + margin,
			    $this = $(this);

			if ($this.offset().top < boundTop) dir.ns = 'n';
			if ($this.offset().left < boundLeft) dir.ew = 'w';
			if ($(window).width() + $(document).scrollLeft() - $this.offset().left < margin) dir.ew = 'e';
			if ($(window).height() + $(document).scrollTop() - $this.offset().top < margin) dir.ns = 's';

			return dir.ns + (dir.ew ? dir.ew : '');
		}
	};
    
})(jQuery);

// Spectrum Colorpicker v1.3.4
// https://github.com/bgrins/spectrum
// Author: Brian Grinstead
// License: MIT

(function (window, $, undefined) {
    var defaultOpts = {

        // Callbacks
        beforeShow: noop,
        move: noop,
        change: noop,
        show: noop,
        hide: noop,

        // Options
        color: false,
        flat: false,
        showInput: false,
        allowEmpty: false,
        showButtons: true,
        clickoutFiresChange: false,
        showInitial: false,
        showPalette: false,
        showPaletteOnly: false,
        showSelectionPalette: true,
        localStorageKey: false,
        appendTo: "body",
        maxSelectionSize: 7,
        cancelText: "cancel",
        chooseText: "choose",
        clearText: "Clear Color Selection",
        preferredFormat: false,
        className: "", // Deprecated - use containerClassName and replacerClassName instead.
        containerClassName: "",
        replacerClassName: "",
        showAlpha: false,
        theme: "sp-light",
        palette: [["#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3"]],
        selectionPalette: [],
        disabled: false
    },
    spectrums = [],
    IE = !!/msie/i.exec( window.navigator.userAgent ),
    rgbaSupport = (function() {
        function contains( str, substr ) {
            return !!~('' + str).indexOf(substr);
        }

        var elem = document.createElement('div');
        var style = elem.style;
        style.cssText = 'background-color:rgba(0,0,0,.5)';
        return contains(style.backgroundColor, 'rgba') || contains(style.backgroundColor, 'hsla');
    })(),
    inputTypeColorSupport = (function() {
        var colorInput = $("<input type='color' value='!' />")[0];
        return colorInput.type === "color" && colorInput.value !== "!";
    })(),
    replaceInput = [
        "<div class='sp-replacer'>",
            "<div class='sp-preview'><div class='sp-preview-inner'></div></div>",
            "<div class='sp-dd'>&#9660;</div>",
        "</div>"
    ].join(''),
    markup = (function () {

        // IE does not support gradients with multiple stops, so we need to simulate
        //  that for the rainbow slider with 8 divs that each have a single gradient
        var gradientFix = "";
        if (IE) {
            for (var i = 1; i <= 6; i++) {
                gradientFix += "<div class='sp-" + i + "'></div>";
            }
        }

        return [
            "<div class='sp-container sp-hidden'>",
                "<div class='sp-palette-container'>",
                    "<div class='sp-palette sp-thumb sp-cf'></div>",
                "</div>",
                "<div class='sp-picker-container'>",
                    "<div class='sp-top sp-cf'>",
                        "<div class='sp-fill'></div>",
                        "<div class='sp-top-inner'>",
                            "<div class='sp-color'>",
                                "<div class='sp-sat'>",
                                    "<div class='sp-val'>",
                                        "<div class='sp-dragger'></div>",
                                    "</div>",
                                "</div>",
                            "</div>",
                            "<div class='sp-clear sp-clear-display'>",
                            "</div>",
                            "<div class='sp-hue'>",
                                "<div class='sp-slider'></div>",
                                gradientFix,
                            "</div>",
                        "</div>",
                        "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>",
                    "</div>",
                    "<div class='sp-input-container sp-cf'>",
                        "<input class='sp-input' type='text' spellcheck='false'  />",
                    "</div>",
                    "<div class='sp-initial sp-thumb sp-cf'></div>",
                    "<div class='sp-button-container sp-cf'>",
                        "<a class='sp-cancel' href='#'></a>",
                        "<button type='button' class='sp-choose'></button>",
                    "</div>",
                "</div>",
            "</div>"
        ].join("");
    })();

    function paletteTemplate (p, color, className, tooltipFormat) {
        var html = [];
        for (var i = 0; i < p.length; i++) {
            var current = p[i];
            if(current) {
                var tiny = tinycolor(current);
                var c = tiny.toHsl().l < 0.5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
                c += (tinycolor.equals(color, current)) ? " sp-thumb-active" : "";

                var formattedString = tiny.toString(tooltipFormat || "rgb");
                var swatchStyle = rgbaSupport ? ("background-color:" + tiny.toRgbString()) : "filter:" + tiny.toFilter();
                html.push('<span title="' + formattedString + '" data-color="' + tiny.toRgbString() + '" class="' + c + '"><span class="sp-thumb-inner" style="' + swatchStyle + ';" /></span>');
            } else {
                var cls = 'sp-clear-display';
                html.push('<span title="No Color Selected" data-color="" style="background-color:transparent;" class="' + cls + '"></span>');
            }
        }
        return "<div class='sp-cf " + className + "'>" + html.join('') + "</div>";
    }

    function hideAll() {
        for (var i = 0; i < spectrums.length; i++) {
            if (spectrums[i]) {
                spectrums[i].hide();
            }
        }
    }

    function instanceOptions(o, callbackContext) {
        var opts = $.extend({}, defaultOpts, o);
        opts.callbacks = {
            'move': bind(opts.move, callbackContext),
            'change': bind(opts.change, callbackContext),
            'show': bind(opts.show, callbackContext),
            'hide': bind(opts.hide, callbackContext),
            'beforeShow': bind(opts.beforeShow, callbackContext)
        };

        return opts;
    }

    function spectrum(element, o) {

        var opts = instanceOptions(o, element),
            flat = opts.flat,
            showSelectionPalette = opts.showSelectionPalette,
            localStorageKey = opts.localStorageKey,
            theme = opts.theme,
            callbacks = opts.callbacks,
            resize = throttle(reflow, 10),
            visible = false,
            dragWidth = 0,
            dragHeight = 0,
            dragHelperHeight = 0,
            slideHeight = 0,
            slideWidth = 0,
            alphaWidth = 0,
            alphaSlideHelperWidth = 0,
            slideHelperHeight = 0,
            currentHue = 0,
            currentSaturation = 0,
            currentValue = 0,
            currentAlpha = 1,
            palette = [],
            paletteArray = [],
            paletteLookup = {},
            selectionPalette = opts.selectionPalette.slice(0),
            maxSelectionSize = opts.maxSelectionSize,
            draggingClass = "sp-dragging",
            shiftMovementDirection = null;

        var doc = element.ownerDocument,
            body = doc.body,
            boundElement = $(element),
            disabled = false,
            container = $(markup, doc).addClass(theme),
            dragger = container.find(".sp-color"),
            dragHelper = container.find(".sp-dragger"),
            slider = container.find(".sp-hue"),
            slideHelper = container.find(".sp-slider"),
            alphaSliderInner = container.find(".sp-alpha-inner"),
            alphaSlider = container.find(".sp-alpha"),
            alphaSlideHelper = container.find(".sp-alpha-handle"),
            textInput = container.find(".sp-input"),
            paletteContainer = container.find(".sp-palette"),
            initialColorContainer = container.find(".sp-initial"),
            cancelButton = container.find(".sp-cancel"),
            clearButton = container.find(".sp-clear"),
            chooseButton = container.find(".sp-choose"),
            isInput = boundElement.is("input"),
            isInputTypeColor = isInput && inputTypeColorSupport && boundElement.attr("type") === "color",
            shouldReplace = isInput && !flat,
            replacer = (shouldReplace) ? $(replaceInput).addClass(theme).addClass(opts.className).addClass(opts.replacerClassName) : $([]),
            offsetElement = (shouldReplace) ? replacer : boundElement,
            previewElement = replacer.find(".sp-preview-inner"),
            initialColor = opts.color || (isInput && boundElement.val()),
            colorOnShow = false,
            preferredFormat = opts.preferredFormat,
            currentPreferredFormat = preferredFormat,
            clickoutFiresChange = !opts.showButtons || opts.clickoutFiresChange,
            isEmpty = !initialColor,
            allowEmpty = opts.allowEmpty && !isInputTypeColor;

        function applyOptions() {

            if (opts.showPaletteOnly) {
                opts.showPalette = true;
            }

            if (opts.palette) {
                palette = opts.palette.slice(0);
                paletteArray = $.isArray(palette[0]) ? palette : [palette];
                paletteLookup = {};
                for (var i = 0; i < paletteArray.length; i++) {
                    for (var j = 0; j < paletteArray[i].length; j++) {
                        var rgb = tinycolor(paletteArray[i][j]).toRgbString();
                        paletteLookup[rgb] = true;
                    }
                }
            }

            container.toggleClass("sp-flat", flat);
            container.toggleClass("sp-input-disabled", !opts.showInput);
            container.toggleClass("sp-alpha-enabled", opts.showAlpha);
            container.toggleClass("sp-clear-enabled", allowEmpty);
            container.toggleClass("sp-buttons-disabled", !opts.showButtons);
            container.toggleClass("sp-palette-disabled", !opts.showPalette);
            container.toggleClass("sp-palette-only", opts.showPaletteOnly);
            container.toggleClass("sp-initial-disabled", !opts.showInitial);
            container.addClass(opts.className).addClass(opts.containerClassName);

            reflow();
        }

        function initialize() {

            if (IE) {
                container.find("*:not(input)").attr("unselectable", "on");
            }

            applyOptions();

            if (shouldReplace) {
                boundElement.after(replacer).hide();
            }

            if (!allowEmpty) {
                clearButton.hide();
            }

            if (flat) {
                boundElement.after(container).hide();
            }
            else {

                var appendTo = opts.appendTo === "parent" ? boundElement.parent() : $(opts.appendTo);
                if (appendTo.length !== 1) {
                    appendTo = $("body");
                }

                appendTo.append(container);
            }

            updateSelectionPaletteFromStorage();

            offsetElement.bind("click.spectrum touchstart.spectrum", function (e) {
                if (!disabled) {
                    toggle();
                }

                e.stopPropagation();

                if (!$(e.target).is("input")) {
                    e.preventDefault();
                }
            });

            if(boundElement.is(":disabled") || (opts.disabled === true)) {
                disable();
            }

            // Prevent clicks from bubbling up to document.  This would cause it to be hidden.
            container.click(stopPropagation);

            // Handle user typed input
            textInput.change(setFromTextInput);
            textInput.bind("paste", function () {
                setTimeout(setFromTextInput, 1);
            });
            textInput.keydown(function (e) { if (e.keyCode == 13) { setFromTextInput(); } });

            cancelButton.text(opts.cancelText);
            cancelButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();
                hide("cancel");
            });

            clearButton.attr("title", opts.clearText);
            clearButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();
                isEmpty = true;
                move();

                if(flat) {
                    //for the flat style, this is a change event
                    updateOriginalInput(true);
                }
            });

            chooseButton.text(opts.chooseText);
            chooseButton.bind("click.spectrum", function (e) {
                e.stopPropagation();
                e.preventDefault();

                if (isValid()) {
                    updateOriginalInput(true);
                    hide();
                }
            });

            draggable(alphaSlider, function (dragX, dragY, e) {
                currentAlpha = (dragX / alphaWidth);
                isEmpty = false;
                if (e.shiftKey) {
                    currentAlpha = Math.round(currentAlpha * 10) / 10;
                }

                move();
            }, dragStart, dragStop);

            draggable(slider, function (dragX, dragY) {
                currentHue = parseFloat(dragY / slideHeight);
                isEmpty = false;
                if (!opts.showAlpha) {
                    currentAlpha = 1;
                }
                move();
            }, dragStart, dragStop);

            draggable(dragger, function (dragX, dragY, e) {

                // shift+drag should snap the movement to either the x or y axis.
                if (!e.shiftKey) {
                    shiftMovementDirection = null;
                }
                else if (!shiftMovementDirection) {
                    var oldDragX = currentSaturation * dragWidth;
                    var oldDragY = dragHeight - (currentValue * dragHeight);
                    var furtherFromX = Math.abs(dragX - oldDragX) > Math.abs(dragY - oldDragY);

                    shiftMovementDirection = furtherFromX ? "x" : "y";
                }

                var setSaturation = !shiftMovementDirection || shiftMovementDirection === "x";
                var setValue = !shiftMovementDirection || shiftMovementDirection === "y";

                if (setSaturation) {
                    currentSaturation = parseFloat(dragX / dragWidth);
                }
                if (setValue) {
                    currentValue = parseFloat((dragHeight - dragY) / dragHeight);
                }

                isEmpty = false;
                if (!opts.showAlpha) {
                    currentAlpha = 1;
                }

                move();

            }, dragStart, dragStop);

            if (!!initialColor) {
                set(initialColor);

                // In case color was black - update the preview UI and set the format
                // since the set function will not run (default color is black).
                updateUI();
                currentPreferredFormat = preferredFormat || tinycolor(initialColor).format;

                addColorToSelectionPalette(initialColor);
            }
            else {
                updateUI();
            }

            if (flat) {
                show();
            }

            function palletElementClick(e) {
                if (e.data && e.data.ignore) {
                    set($(this).data("color"));
                    move();
                }
                else {
                    set($(this).data("color"));
                    move();
                    updateOriginalInput(true);
                    hide();
                }

                return false;
            }

            var paletteEvent = IE ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
            paletteContainer.delegate(".sp-thumb-el", paletteEvent, palletElementClick);
            initialColorContainer.delegate(".sp-thumb-el:nth-child(1)", paletteEvent, { ignore: true }, palletElementClick);
        }

        function updateSelectionPaletteFromStorage() {

            if (localStorageKey && window.localStorage) {

                // Migrate old palettes over to new format.  May want to remove this eventually.
                try {
                    var oldPalette = window.localStorage[localStorageKey].split(",#");
                    if (oldPalette.length > 1) {
                        delete window.localStorage[localStorageKey];
                        $.each(oldPalette, function(i, c) {
                             addColorToSelectionPalette(c);
                        });
                    }
                }
                catch(e) { }

                try {
                    selectionPalette = window.localStorage[localStorageKey].split(";");
                }
                catch (e) { }
            }
        }

        function addColorToSelectionPalette(color) {
            if (showSelectionPalette) {
                var rgb = tinycolor(color).toRgbString();
                if (!paletteLookup[rgb] && $.inArray(rgb, selectionPalette) === -1) {
                    selectionPalette.push(rgb);
                    while(selectionPalette.length > maxSelectionSize) {
                        selectionPalette.shift();
                    }
                }

                if (localStorageKey && window.localStorage) {
                    try {
                        window.localStorage[localStorageKey] = selectionPalette.join(";");
                    }
                    catch(e) { }
                }
            }
        }

        function getUniqueSelectionPalette() {
            var unique = [];
            if (opts.showPalette) {
                for (i = 0; i < selectionPalette.length; i++) {
                    var rgb = tinycolor(selectionPalette[i]).toRgbString();

                    if (!paletteLookup[rgb]) {
                        unique.push(selectionPalette[i]);
                    }
                }
            }

            return unique.reverse().slice(0, opts.maxSelectionSize);
        }

        function drawPalette() {

            var currentColor = get();

            var html = $.map(paletteArray, function (palette, i) {
                return paletteTemplate(palette, currentColor, "sp-palette-row sp-palette-row-" + i, opts.preferredFormat);
            });

            updateSelectionPaletteFromStorage();

            if (selectionPalette) {
                html.push(paletteTemplate(getUniqueSelectionPalette(), currentColor, "sp-palette-row sp-palette-row-selection", opts.preferredFormat));
            }

            paletteContainer.html(html.join(""));
        }

        function drawInitial() {
            if (opts.showInitial) {
                var initial = colorOnShow;
                var current = get();
                initialColorContainer.html(paletteTemplate([initial, current], current, "sp-palette-row-initial", opts.preferredFormat));
            }
        }

        function dragStart() {
            if (dragHeight <= 0 || dragWidth <= 0 || slideHeight <= 0) {
                reflow();
            }
            container.addClass(draggingClass);
            shiftMovementDirection = null;
            boundElement.trigger('dragstart.spectrum', [ get() ]);
        }

        function dragStop() {
            container.removeClass(draggingClass);
            boundElement.trigger('dragstop.spectrum', [ get() ]);
        }

        function setFromTextInput() {

            var value = textInput.val();

            if ((value === null || value === "") && allowEmpty) {
                set(null);
                updateOriginalInput(true);
            }
            else {
                var tiny = tinycolor(value);
                if (tiny.ok) {
                    set(tiny);
                    updateOriginalInput(true);
                }
                else {
                    textInput.addClass("sp-validation-error");
                }
            }
        }

        function toggle() {
            if (visible) {
                hide();
            }
            else {
                show();
            }
        }

        function show() {
            var event = $.Event('beforeShow.spectrum');

            if (visible) {
                reflow();
                return;
            }

            boundElement.trigger(event, [ get() ]);

            if (callbacks.beforeShow(get()) === false || event.isDefaultPrevented()) {
                return;
            }

            hideAll();
            visible = true;

            $(doc).bind("click.spectrum", hide);
            $(window).bind("resize.spectrum", resize);
            replacer.addClass("sp-active");
            container.removeClass("sp-hidden");

            reflow();
            updateUI();

            colorOnShow = get();

            drawInitial();
            callbacks.show(colorOnShow);
            boundElement.trigger('show.spectrum', [ colorOnShow ]);
        }

        function hide(e) {

            // Return on right click
            if (e && e.type == "click" && e.button == 2) { return; }

            // Return if hiding is unnecessary
            if (!visible || flat) { return; }
            visible = false;

            $(doc).unbind("click.spectrum", hide);
            $(window).unbind("resize.spectrum", resize);

            replacer.removeClass("sp-active");
            container.addClass("sp-hidden");

            var colorHasChanged = !tinycolor.equals(get(), colorOnShow);

            if (colorHasChanged) {
                if (clickoutFiresChange && e !== "cancel") {
                    updateOriginalInput(true);
                }
                else {
                    revert();
                }
            }

            callbacks.hide(get());
            boundElement.trigger('hide.spectrum', [ get() ]);
        }

        function revert() {
            set(colorOnShow, true);
        }

        function set(color, ignoreFormatChange) {
            if (tinycolor.equals(color, get())) {
                // Update UI just in case a validation error needs
                // to be cleared.
                updateUI();
                return;
            }

            var newColor, newHsv;
            if (!color && allowEmpty) {
                isEmpty = true;
            } else {
                isEmpty = false;
                newColor = tinycolor(color);
                newHsv = newColor.toHsv();

                currentHue = (newHsv.h % 360) / 360;
                currentSaturation = newHsv.s;
                currentValue = newHsv.v;
                currentAlpha = newHsv.a;
            }
            updateUI();

            if (newColor && newColor.ok && !ignoreFormatChange) {
                currentPreferredFormat = preferredFormat || newColor.format;
            }
        }

        function get(opts) {
            opts = opts || { };

            if (allowEmpty && isEmpty) {
                return null;
            }

            return tinycolor.fromRatio({
                h: currentHue,
                s: currentSaturation,
                v: currentValue,
                a: Math.round(currentAlpha * 100) / 100
            }, { format: opts.format || currentPreferredFormat });
        }

        function isValid() {
            return !textInput.hasClass("sp-validation-error");
        }

        function move() {
            updateUI();

            callbacks.move(get());
            boundElement.trigger('move.spectrum', [ get() ]);
        }

        function updateUI() {

            textInput.removeClass("sp-validation-error");

            updateHelperLocations();

            // Update dragger background color (gradients take care of saturation and value).
            var flatColor = tinycolor.fromRatio({ h: currentHue, s: 1, v: 1 });
            dragger.css("background-color", flatColor.toHexString());

            // Get a format that alpha will be included in (hex and names ignore alpha)
            var format = currentPreferredFormat;
            if (currentAlpha < 1 && !(currentAlpha === 0 && format === "name")) {
                if (format === "hex" || format === "hex3" || format === "hex6" || format === "name") {
                    format = "rgb";
                }
            }

            var realColor = get({ format: format }),
                displayColor = '';

             //reset background info for preview element
            previewElement.removeClass("sp-clear-display");
            previewElement.css('background-color', 'transparent');

            if (!realColor && allowEmpty) {
                // Update the replaced elements background with icon indicating no color selection
                previewElement.addClass("sp-clear-display");
            }
            else {
                var realHex = realColor.toHexString(),
                    realRgb = realColor.toRgbString();

                // Update the replaced elements background color (with actual selected color)
                if (rgbaSupport || realColor.alpha === 1) {
                    previewElement.css("background-color", realRgb);
                }
                else {
                    previewElement.css("background-color", "transparent");
                    previewElement.css("filter", realColor.toFilter());
                }

                if (opts.showAlpha) {
                    var rgb = realColor.toRgb();
                    rgb.a = 0;
                    var realAlpha = tinycolor(rgb).toRgbString();
                    var gradient = "linear-gradient(left, " + realAlpha + ", " + realHex + ")";

                    if (IE) {
                        alphaSliderInner.css("filter", tinycolor(realAlpha).toFilter({ gradientType: 1 }, realHex));
                    }
                    else {
                        alphaSliderInner.css("background", "-webkit-" + gradient);
                        alphaSliderInner.css("background", "-moz-" + gradient);
                        alphaSliderInner.css("background", "-ms-" + gradient);
                        // Use current syntax gradient on unprefixed property.
                        alphaSliderInner.css("background",
                            "linear-gradient(to right, " + realAlpha + ", " + realHex + ")");
                    }
                }

                displayColor = realColor.toString(format);
            }

            // Update the text entry input as it changes happen
            if (opts.showInput) {
                textInput.val(displayColor);
            }

            if (opts.showPalette) {
                drawPalette();
            }

            drawInitial();
        }

        function updateHelperLocations() {
            var s = currentSaturation;
            var v = currentValue;

            if(allowEmpty && isEmpty) {
                //if selected color is empty, hide the helpers
                alphaSlideHelper.hide();
                slideHelper.hide();
                dragHelper.hide();
            }
            else {
                //make sure helpers are visible
                alphaSlideHelper.show();
                slideHelper.show();
                dragHelper.show();

                // Where to show the little circle in that displays your current selected color
                var dragX = s * dragWidth;
                var dragY = dragHeight - (v * dragHeight);
                dragX = Math.max(
                    -dragHelperHeight,
                    Math.min(dragWidth - dragHelperHeight, dragX - dragHelperHeight)
                );
                dragY = Math.max(
                    -dragHelperHeight,
                    Math.min(dragHeight - dragHelperHeight, dragY - dragHelperHeight)
                );
                dragHelper.css({
                    "top": dragY + "px",
                    "left": dragX + "px"
                });

                var alphaX = currentAlpha * alphaWidth;
                alphaSlideHelper.css({
                    "left": (alphaX - (alphaSlideHelperWidth / 2)) + "px"
                });

                // Where to show the bar that displays your current selected hue
                var slideY = (currentHue) * slideHeight;
                slideHelper.css({
                    "top": (slideY - slideHelperHeight) + "px"
                });
            }
        }

        function updateOriginalInput(fireCallback) {
            var color = get(),
                displayColor = '',
                hasChanged = !tinycolor.equals(color, colorOnShow);

            if (color) {
                displayColor = color.toString(currentPreferredFormat);
                // Update the selection palette with the current color
                addColorToSelectionPalette(color);
            }

            if (isInput) {
                boundElement.val(displayColor);
            }

            colorOnShow = color;

            if (fireCallback && hasChanged) {
                callbacks.change(color);
                boundElement.trigger('change', [ color ]);
            }
        }

        function reflow() {
            dragWidth = dragger.width();
            dragHeight = dragger.height();
            dragHelperHeight = dragHelper.height();
            slideWidth = slider.width();
            slideHeight = slider.height();
            slideHelperHeight = slideHelper.height();
            alphaWidth = alphaSlider.width();
            alphaSlideHelperWidth = alphaSlideHelper.width();

            if (!flat) {
                container.css("position", "absolute");
                container.offset(getOffset(container, offsetElement));
            }

            updateHelperLocations();

            if (opts.showPalette) {
                drawPalette();
            }

            boundElement.trigger('reflow.spectrum');
        }

        function destroy() {
            boundElement.show();
            offsetElement.unbind("click.spectrum touchstart.spectrum");
            container.remove();
            replacer.remove();
            spectrums[spect.id] = null;
        }

        function option(optionName, optionValue) {
            if (optionName === undefined) {
                return $.extend({}, opts);
            }
            if (optionValue === undefined) {
                return opts[optionName];
            }

            opts[optionName] = optionValue;
            applyOptions();
        }

        function enable() {
            disabled = false;
            boundElement.attr("disabled", false);
            offsetElement.removeClass("sp-disabled");
        }

        function disable() {
            hide();
            disabled = true;
            boundElement.attr("disabled", true);
            offsetElement.addClass("sp-disabled");
        }

        initialize();

        var spect = {
            show: show,
            hide: hide,
            toggle: toggle,
            reflow: reflow,
            option: option,
            enable: enable,
            disable: disable,
            set: function (c) {
                set(c);
                updateOriginalInput();
            },
            get: get,
            destroy: destroy,
            container: container
        };

        spect.id = spectrums.push(spect) - 1;

        return spect;
    }

    /**
    * checkOffset - get the offset below/above and left/right element depending on screen position
    * Thanks https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.datepicker.js
    */
    function getOffset(picker, input) {
        var extraY = 0;
        var dpWidth = picker.outerWidth();
        var dpHeight = picker.outerHeight();
        var inputHeight = input.outerHeight();
        var doc = picker[0].ownerDocument;
        var docElem = doc.documentElement;
        var viewWidth = docElem.clientWidth + $(doc).scrollLeft();
        var viewHeight = docElem.clientHeight + $(doc).scrollTop();
        var offset = input.offset();
        offset.top += inputHeight;

        offset.left -=
            Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
            Math.abs(offset.left + dpWidth - viewWidth) : 0);

        offset.top -=
            Math.min(offset.top, ((offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
            Math.abs(dpHeight + inputHeight - extraY) : extraY));

        return offset;
    }

    /**
    * noop - do nothing
    */
    function noop() {

    }

    /**
    * stopPropagation - makes the code only doing this a little easier to read in line
    */
    function stopPropagation(e) {
        e.stopPropagation();
    }

    /**
    * Create a function bound to a given object
    * Thanks to underscore.js
    */
    function bind(func, obj) {
        var slice = Array.prototype.slice;
        var args = slice.call(arguments, 2);
        return function () {
            return func.apply(obj, args.concat(slice.call(arguments)));
        };
    }

    /**
    * Lightweight drag helper.  Handles containment within the element, so that
    * when dragging, the x is within [0,element.width] and y is within [0,element.height]
    */
    function draggable(element, onmove, onstart, onstop) {
        onmove = onmove || function () { };
        onstart = onstart || function () { };
        onstop = onstop || function () { };
        var doc = element.ownerDocument || document;
        var dragging = false;
        var offset = {};
        var maxHeight = 0;
        var maxWidth = 0;
        var hasTouch = ('ontouchstart' in window);

        var duringDragEvents = {};
        duringDragEvents["selectstart"] = prevent;
        duringDragEvents["dragstart"] = prevent;
        duringDragEvents["touchmove mousemove"] = move;
        duringDragEvents["touchend mouseup"] = stop;

        function prevent(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (e.preventDefault) {
                e.preventDefault();
            }
            e.returnValue = false;
        }

        function move(e) {
            if (dragging) {
                // Mouseup happened outside of window
                if (IE && document.documentMode < 9 && !e.button) {
                    return stop();
                }

                var touches = e.originalEvent.touches;
                var pageX = touches ? touches[0].pageX : e.pageX;
                var pageY = touches ? touches[0].pageY : e.pageY;

                var dragX = Math.max(0, Math.min(pageX - offset.left, maxWidth));
                var dragY = Math.max(0, Math.min(pageY - offset.top, maxHeight));

                if (hasTouch) {
                    // Stop scrolling in iOS
                    prevent(e);
                }

                onmove.apply(element, [dragX, dragY, e]);
            }
        }

        function start(e) {
            var rightclick = (e.which) ? (e.which == 3) : (e.button == 2);
            var touches = e.originalEvent.touches;

            if (!rightclick && !dragging) {
                if (onstart.apply(element, arguments) !== false) {
                    dragging = true;
                    maxHeight = $(element).height();
                    maxWidth = $(element).width();
                    offset = $(element).offset();

                    $(doc).bind(duringDragEvents);
                    $(doc.body).addClass("sp-dragging");

                    if (!hasTouch) {
                        move(e);
                    }

                    prevent(e);
                }
            }
        }

        function stop() {
            if (dragging) {
                $(doc).unbind(duringDragEvents);
                $(doc.body).removeClass("sp-dragging");
                onstop.apply(element, arguments);
            }
            dragging = false;
        }

        $(element).bind("touchstart mousedown", start);
    }

    function throttle(func, wait, debounce) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var throttler = function () {
                timeout = null;
                func.apply(context, args);
            };
            if (debounce) clearTimeout(timeout);
            if (debounce || !timeout) timeout = setTimeout(throttler, wait);
        };
    }

    function log(){/* jshint -W021 */if(window.console){if(Function.prototype.bind)log=Function.prototype.bind.call(console.log,console);else log=function(){Function.prototype.apply.call(console.log,console,arguments);};log.apply(this,arguments);}}

    /**
    * Define a jQuery plugin
    */
    var dataID = "spectrum.id";
    $.fn.spectrum = function (opts, extra) {

        if (typeof opts == "string") {

            var returnValue = this;
            var args = Array.prototype.slice.call( arguments, 1 );

            this.each(function () {
                var spect = spectrums[$(this).data(dataID)];
                if (spect) {
                    var method = spect[opts];
                    if (!method) {
                        throw new Error( "Spectrum: no such method: '" + opts + "'" );
                    }

                    if (opts == "get") {
                        returnValue = spect.get();
                    }
                    else if (opts == "container") {
                        returnValue = spect.container;
                    }
                    else if (opts == "option") {
                        returnValue = spect.option.apply(spect, args);
                    }
                    else if (opts == "destroy") {
                        spect.destroy();
                        $(this).removeData(dataID);
                    }
                    else {
                        method.apply(spect, args);
                    }
                }
            });

            return returnValue;
        }

        // Initializing a new instance of spectrum
        return this.spectrum("destroy").each(function () {
            var options = $.extend({}, opts, $(this).data());
            var spect = spectrum(this, options);
            $(this).data(dataID, spect.id);
        });
    };

    $.fn.spectrum.load = true;
    $.fn.spectrum.loadOpts = {};
    $.fn.spectrum.draggable = draggable;
    $.fn.spectrum.defaults = defaultOpts;

    $.spectrum = { };
    $.spectrum.localization = { };
    $.spectrum.palettes = { };

    $.fn.spectrum.processNativeColorInputs = function () {
        if (!inputTypeColorSupport) {
            $("input[type=color]").spectrum({
                preferredFormat: "hex6"
            });
        }
    };

    // TinyColor v0.9.17
    // https://github.com/bgrins/TinyColor
    // 2013-08-10, Brian Grinstead, MIT License

    (function() {

    var trimLeft = /^[\s,#]+/,
        trimRight = /\s+$/,
        tinyCounter = 0,
        math = Math,
        mathRound = math.round,
        mathMin = math.min,
        mathMax = math.max,
        mathRandom = math.random;

    function tinycolor (color, opts) {

        color = (color) ? color : '';
        opts = opts || { };

        // If input is already a tinycolor, return itself
        if (typeof color == "object" && color.hasOwnProperty("_tc_id")) {
           return color;
        }

        var rgb = inputToRGB(color);
        var r = rgb.r,
            g = rgb.g,
            b = rgb.b,
            a = rgb.a,
            roundA = mathRound(100*a) / 100,
            format = opts.format || rgb.format;

        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (r < 1) { r = mathRound(r); }
        if (g < 1) { g = mathRound(g); }
        if (b < 1) { b = mathRound(b); }

        return {
            ok: rgb.ok,
            format: format,
            _tc_id: tinyCounter++,
            alpha: a,
            getAlpha: function() {
                return a;
            },
            setAlpha: function(value) {
                a = boundAlpha(value);
                roundA = mathRound(100*a) / 100;
            },
            toHsv: function() {
                var hsv = rgbToHsv(r, g, b);
                return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: a };
            },
            toHsvString: function() {
                var hsv = rgbToHsv(r, g, b);
                var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
                return (a == 1) ?
                  "hsv("  + h + ", " + s + "%, " + v + "%)" :
                  "hsva(" + h + ", " + s + "%, " + v + "%, "+ roundA + ")";
            },
            toHsl: function() {
                var hsl = rgbToHsl(r, g, b);
                return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: a };
            },
            toHslString: function() {
                var hsl = rgbToHsl(r, g, b);
                var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
                return (a == 1) ?
                  "hsl("  + h + ", " + s + "%, " + l + "%)" :
                  "hsla(" + h + ", " + s + "%, " + l + "%, "+ roundA + ")";
            },
            toHex: function(allow3Char) {
                return rgbToHex(r, g, b, allow3Char);
            },
            toHexString: function(allow3Char) {
                return '#' + this.toHex(allow3Char);
            },
            toHex8: function() {
                return rgbaToHex(r, g, b, a);
            },
            toHex8String: function() {
                return '#' + this.toHex8();
            },
            toRgb: function() {
                return { r: mathRound(r), g: mathRound(g), b: mathRound(b), a: a };
            },
            toRgbString: function() {
                return (a == 1) ?
                  "rgb("  + mathRound(r) + ", " + mathRound(g) + ", " + mathRound(b) + ")" :
                  "rgba(" + mathRound(r) + ", " + mathRound(g) + ", " + mathRound(b) + ", " + roundA + ")";
            },
            toPercentageRgb: function() {
                return { r: mathRound(bound01(r, 255) * 100) + "%", g: mathRound(bound01(g, 255) * 100) + "%", b: mathRound(bound01(b, 255) * 100) + "%", a: a };
            },
            toPercentageRgbString: function() {
                return (a == 1) ?
                  "rgb("  + mathRound(bound01(r, 255) * 100) + "%, " + mathRound(bound01(g, 255) * 100) + "%, " + mathRound(bound01(b, 255) * 100) + "%)" :
                  "rgba(" + mathRound(bound01(r, 255) * 100) + "%, " + mathRound(bound01(g, 255) * 100) + "%, " + mathRound(bound01(b, 255) * 100) + "%, " + roundA + ")";
            },
            toName: function() {
                if (a === 0) {
                    return "transparent";
                }

                return hexNames[rgbToHex(r, g, b, true)] || false;
            },
            toFilter: function(secondColor) {
                var hex8String = '#' + rgbaToHex(r, g, b, a);
                var secondHex8String = hex8String;
                var gradientType = opts && opts.gradientType ? "GradientType = 1, " : "";

                if (secondColor) {
                    var s = tinycolor(secondColor);
                    secondHex8String = s.toHex8String();
                }

                return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
            },
            toString: function(format) {
                var formatSet = !!format;
                format = format || this.format;

                var formattedString = false;
                var hasAlphaAndFormatNotSet = !formatSet && a < 1 && a > 0;
                var formatWithAlpha = hasAlphaAndFormatNotSet && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

                if (format === "rgb") {
                    formattedString = this.toRgbString();
                }
                if (format === "prgb") {
                    formattedString = this.toPercentageRgbString();
                }
                if (format === "hex" || format === "hex6") {
                    formattedString = this.toHexString();
                }
                if (format === "hex3") {
                    formattedString = this.toHexString(true);
                }
                if (format === "hex8") {
                    formattedString = this.toHex8String();
                }
                if (format === "name") {
                    formattedString = this.toName();
                }
                if (format === "hsl") {
                    formattedString = this.toHslString();
                }
                if (format === "hsv") {
                    formattedString = this.toHsvString();
                }

                if (formatWithAlpha) {
                    return this.toRgbString();
                }

                return formattedString || this.toHexString();
            }
        };
    }

    // If input is an object, force 1 into "1.0" to handle ratios properly
    // String input requires "1.0" as input, so 1 will be treated as 1
    tinycolor.fromRatio = function(color, opts) {
        if (typeof color == "object") {
            var newColor = {};
            for (var i in color) {
                if (color.hasOwnProperty(i)) {
                    if (i === "a") {
                        newColor[i] = color[i];
                    }
                    else {
                        newColor[i] = convertToPercentage(color[i]);
                    }
                }
            }
            color = newColor;
        }

        return tinycolor(color, opts);
    };

    // Given a string or object, convert that input to RGB
    // Possible string inputs:
    //
    //     "red"
    //     "#f00" or "f00"
    //     "#ff0000" or "ff0000"
    //     "#ff000000" or "ff000000"
    //     "rgb 255 0 0" or "rgb (255, 0, 0)"
    //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
    //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
    //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
    //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
    //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
    //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
    //
    function inputToRGB(color) {

        var rgb = { r: 0, g: 0, b: 0 };
        var a = 1;
        var ok = false;
        var format = false;

        if (typeof color == "string") {
            color = stringInputToObject(color);
        }

        if (typeof color == "object") {
            if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
                rgb = rgbToRgb(color.r, color.g, color.b);
                ok = true;
                format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
            }
            else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
                color.s = convertToPercentage(color.s);
                color.v = convertToPercentage(color.v);
                rgb = hsvToRgb(color.h, color.s, color.v);
                ok = true;
                format = "hsv";
            }
            else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
                color.s = convertToPercentage(color.s);
                color.l = convertToPercentage(color.l);
                rgb = hslToRgb(color.h, color.s, color.l);
                ok = true;
                format = "hsl";
            }

            if (color.hasOwnProperty("a")) {
                a = color.a;
            }
        }

        a = boundAlpha(a);

        return {
            ok: ok,
            format: color.format || format,
            r: mathMin(255, mathMax(rgb.r, 0)),
            g: mathMin(255, mathMax(rgb.g, 0)),
            b: mathMin(255, mathMax(rgb.b, 0)),
            a: a
        };
    }


    // Conversion Functions
    // --------------------

    // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
    // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

    // `rgbToRgb`
    // Handle bounds / percentage checking to conform to CSS color spec
    // <http://www.w3.org/TR/css3-color/>
    // *Assumes:* r, g, b in [0, 255] or [0, 1]
    // *Returns:* { r, g, b } in [0, 255]
    function rgbToRgb(r, g, b){
        return {
            r: bound01(r, 255) * 255,
            g: bound01(g, 255) * 255,
            b: bound01(b, 255) * 255
        };
    }

    // `rgbToHsl`
    // Converts an RGB color value to HSL.
    // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
    // *Returns:* { h, s, l } in [0,1]
    function rgbToHsl(r, g, b) {

        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);

        var max = mathMax(r, g, b), min = mathMin(r, g, b);
        var h, s, l = (max + min) / 2;

        if(max == min) {
            h = s = 0; // achromatic
        }
        else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }

            h /= 6;
        }

        return { h: h, s: s, l: l };
    }

    // `hslToRgb`
    // Converts an HSL color value to RGB.
    // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
    // *Returns:* { r, g, b } in the set [0, 255]
    function hslToRgb(h, s, l) {
        var r, g, b;

        h = bound01(h, 360);
        s = bound01(s, 100);
        l = bound01(l, 100);

        function hue2rgb(p, q, t) {
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        if(s === 0) {
            r = g = b = l; // achromatic
        }
        else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return { r: r * 255, g: g * 255, b: b * 255 };
    }

    // `rgbToHsv`
    // Converts an RGB color value to HSV
    // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
    // *Returns:* { h, s, v } in [0,1]
    function rgbToHsv(r, g, b) {

        r = bound01(r, 255);
        g = bound01(g, 255);
        b = bound01(b, 255);

        var max = mathMax(r, g, b), min = mathMin(r, g, b);
        var h, s, v = max;

        var d = max - min;
        s = max === 0 ? 0 : d / max;

        if(max == min) {
            h = 0; // achromatic
        }
        else {
            switch(max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return { h: h, s: s, v: v };
    }

    // `hsvToRgb`
    // Converts an HSV color value to RGB.
    // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
    // *Returns:* { r, g, b } in the set [0, 255]
     function hsvToRgb(h, s, v) {

        h = bound01(h, 360) * 6;
        s = bound01(s, 100);
        v = bound01(v, 100);

        var i = math.floor(h),
            f = h - i,
            p = v * (1 - s),
            q = v * (1 - f * s),
            t = v * (1 - (1 - f) * s),
            mod = i % 6,
            r = [v, q, p, p, t, v][mod],
            g = [t, v, v, q, p, p][mod],
            b = [p, p, t, v, v, q][mod];

        return { r: r * 255, g: g * 255, b: b * 255 };
    }

    // `rgbToHex`
    // Converts an RGB color to hex
    // Assumes r, g, and b are contained in the set [0, 255]
    // Returns a 3 or 6 character hex
    function rgbToHex(r, g, b, allow3Char) {

        var hex = [
            pad2(mathRound(r).toString(16)),
            pad2(mathRound(g).toString(16)),
            pad2(mathRound(b).toString(16))
        ];

        // Return a 3 character hex if possible
        if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
            return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
        }

        return hex.join("");
    }
        // `rgbaToHex`
        // Converts an RGBA color plus alpha transparency to hex
        // Assumes r, g, b and a are contained in the set [0, 255]
        // Returns an 8 character hex
        function rgbaToHex(r, g, b, a) {

            var hex = [
                pad2(convertDecimalToHex(a)),
                pad2(mathRound(r).toString(16)),
                pad2(mathRound(g).toString(16)),
                pad2(mathRound(b).toString(16))
            ];

            return hex.join("");
        }

    // `equals`
    // Can be called with any tinycolor input
    tinycolor.equals = function (color1, color2) {
        if (!color1 || !color2) { return false; }
        return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
    };
    tinycolor.random = function() {
        return tinycolor.fromRatio({
            r: mathRandom(),
            g: mathRandom(),
            b: mathRandom()
        });
    };


    // Modification Functions
    // ----------------------
    // Thanks to less.js for some of the basics here
    // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

    tinycolor.desaturate = function (color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor(hsl);
    };
    tinycolor.saturate = function (color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return tinycolor(hsl);
    };
    tinycolor.greyscale = function(color) {
        return tinycolor.desaturate(color, 100);
    };
    tinycolor.lighten = function(color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor(hsl);
    };
    tinycolor.darken = function (color, amount) {
        amount = (amount === 0) ? 0 : (amount || 10);
        var hsl = tinycolor(color).toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return tinycolor(hsl);
    };
    tinycolor.complement = function(color) {
        var hsl = tinycolor(color).toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return tinycolor(hsl);
    };


    // Combination Functions
    // ---------------------
    // Thanks to jQuery xColor for some of the ideas behind these
    // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

    tinycolor.triad = function(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [
            tinycolor(color),
            tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
        ];
    };
    tinycolor.tetrad = function(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [
            tinycolor(color),
            tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
            tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
        ];
    };
    tinycolor.splitcomplement = function(color) {
        var hsl = tinycolor(color).toHsl();
        var h = hsl.h;
        return [
            tinycolor(color),
            tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
            tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
        ];
    };
    tinycolor.analogous = function(color, results, slices) {
        results = results || 6;
        slices = slices || 30;

        var hsl = tinycolor(color).toHsl();
        var part = 360 / slices;
        var ret = [tinycolor(color)];

        for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(tinycolor(hsl));
        }
        return ret;
    };
    tinycolor.monochromatic = function(color, results) {
        results = results || 6;
        var hsv = tinycolor(color).toHsv();
        var h = hsv.h, s = hsv.s, v = hsv.v;
        var ret = [];
        var modification = 1 / results;

        while (results--) {
            ret.push(tinycolor({ h: h, s: s, v: v}));
            v = (v + modification) % 1;
        }

        return ret;
    };


    // Readability Functions
    // ---------------------
    // <http://www.w3.org/TR/AERT#color-contrast>

    // `readability`
    // Analyze the 2 colors and returns an object with the following properties:
    //    `brightness`: difference in brightness between the two colors
    //    `color`: difference in color/hue between the two colors
    tinycolor.readability = function(color1, color2) {
        var a = tinycolor(color1).toRgb();
        var b = tinycolor(color2).toRgb();
        var brightnessA = (a.r * 299 + a.g * 587 + a.b * 114) / 1000;
        var brightnessB = (b.r * 299 + b.g * 587 + b.b * 114) / 1000;
        var colorDiff = (
            Math.max(a.r, b.r) - Math.min(a.r, b.r) +
            Math.max(a.g, b.g) - Math.min(a.g, b.g) +
            Math.max(a.b, b.b) - Math.min(a.b, b.b)
        );

        return {
            brightness: Math.abs(brightnessA - brightnessB),
            color: colorDiff
        };
    };

    // `readable`
    // http://www.w3.org/TR/AERT#color-contrast
    // Ensure that foreground and background color combinations provide sufficient contrast.
    // *Example*
    //    tinycolor.readable("#000", "#111") => false
    tinycolor.readable = function(color1, color2) {
        var readability = tinycolor.readability(color1, color2);
        return readability.brightness > 125 && readability.color > 500;
    };

    // `mostReadable`
    // Given a base color and a list of possible foreground or background
    // colors for that base, returns the most readable color.
    // *Example*
    //    tinycolor.mostReadable("#123", ["#fff", "#000"]) => "#000"
    tinycolor.mostReadable = function(baseColor, colorList) {
        var bestColor = null;
        var bestScore = 0;
        var bestIsReadable = false;
        for (var i=0; i < colorList.length; i++) {

            // We normalize both around the "acceptable" breaking point,
            // but rank brightness constrast higher than hue.

            var readability = tinycolor.readability(baseColor, colorList[i]);
            var readable = readability.brightness > 125 && readability.color > 500;
            var score = 3 * (readability.brightness / 125) + (readability.color / 500);

            if ((readable && ! bestIsReadable) ||
                (readable && bestIsReadable && score > bestScore) ||
                ((! readable) && (! bestIsReadable) && score > bestScore)) {
                bestIsReadable = readable;
                bestScore = score;
                bestColor = tinycolor(colorList[i]);
            }
        }
        return bestColor;
    };


    // Big List of Colors
    // ------------------
    // <http://www.w3.org/TR/css3-color/#svg-color>
    var names = tinycolor.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    };

    // Make it easy to access colors via `hexNames[hex]`
    var hexNames = tinycolor.hexNames = flip(names);


    // Utilities
    // ---------

    // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
    function flip(o) {
        var flipped = { };
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
                flipped[o[i]] = i;
            }
        }
        return flipped;
    }

    // Return a valid alpha value [0,1] with all invalid values being set to 1
    function boundAlpha(a) {
        a = parseFloat(a);

        if (isNaN(a) || a < 0 || a > 1) {
            a = 1;
        }

        return a;
    }

    // Take input from [0, n] and return it as [0, 1]
    function bound01(n, max) {
        if (isOnePointZero(n)) { n = "100%"; }

        var processPercent = isPercentage(n);
        n = mathMin(max, mathMax(0, parseFloat(n)));

        // Automatically convert percentage into number
        if (processPercent) {
            n = parseInt(n * max, 10) / 100;
        }

        // Handle floating point rounding errors
        if ((math.abs(n - max) < 0.000001)) {
            return 1;
        }

        // Convert into [0, 1] range if it isn't already
        return (n % max) / parseFloat(max);
    }

    // Force a number between 0 and 1
    function clamp01(val) {
        return mathMin(1, mathMax(0, val));
    }

    // Parse a base-16 hex value into a base-10 integer
    function parseIntFromHex(val) {
        return parseInt(val, 16);
    }

    // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
    // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
    function isOnePointZero(n) {
        return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
    }

    // Check to see if string passed in is a percentage
    function isPercentage(n) {
        return typeof n === "string" && n.indexOf('%') != -1;
    }

    // Force a hex value to have 2 characters
    function pad2(c) {
        return c.length == 1 ? '0' + c : '' + c;
    }

    // Replace a decimal with it's percentage value
    function convertToPercentage(n) {
        if (n <= 1) {
            n = (n * 100) + "%";
        }

        return n;
    }

    // Converts a decimal to a hex value
    function convertDecimalToHex(d) {
        return Math.round(parseFloat(d) * 255).toString(16);
    }
    // Converts a hex value to a decimal
    function convertHexToDecimal(h) {
        return (parseIntFromHex(h) / 255);
    }

    var matchers = (function() {

        // <http://www.w3.org/TR/css3-values/#integers>
        var CSS_INTEGER = "[-\\+]?\\d+%?";

        // <http://www.w3.org/TR/css3-values/#number-value>
        var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

        // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
        var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

        // Actual matching.
        // Parentheses and commas are optional, but not required.
        // Whitespace can take the place of commas or opening paren
        var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
        var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

        return {
            rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
            rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
            hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
            hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
            hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
            hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
    })();

    // `stringInputToObject`
    // Permissive string parsing.  Take in a number of formats, and output an object
    // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
    function stringInputToObject(color) {

        color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
        var named = false;
        if (names[color]) {
            color = names[color];
            named = true;
        }
        else if (color == 'transparent') {
            return { r: 0, g: 0, b: 0, a: 0, format: "name" };
        }

        // Try to match string input using regular expressions.
        // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
        // Just return an object and let the conversion functions handle that.
        // This way the result will be the same whether the tinycolor is initialized with string or object.
        var match;
        if ((match = matchers.rgb.exec(color))) {
            return { r: match[1], g: match[2], b: match[3] };
        }
        if ((match = matchers.rgba.exec(color))) {
            return { r: match[1], g: match[2], b: match[3], a: match[4] };
        }
        if ((match = matchers.hsl.exec(color))) {
            return { h: match[1], s: match[2], l: match[3] };
        }
        if ((match = matchers.hsla.exec(color))) {
            return { h: match[1], s: match[2], l: match[3], a: match[4] };
        }
        if ((match = matchers.hsv.exec(color))) {
            return { h: match[1], s: match[2], v: match[3] };
        }
        if ((match = matchers.hex8.exec(color))) {
            return {
                a: convertHexToDecimal(match[1]),
                r: parseIntFromHex(match[2]),
                g: parseIntFromHex(match[3]),
                b: parseIntFromHex(match[4]),
                format: named ? "name" : "hex8"
            };
        }
        if ((match = matchers.hex6.exec(color))) {
            return {
                r: parseIntFromHex(match[1]),
                g: parseIntFromHex(match[2]),
                b: parseIntFromHex(match[3]),
                format: named ? "name" : "hex"
            };
        }
        if ((match = matchers.hex3.exec(color))) {
            return {
                r: parseIntFromHex(match[1] + '' + match[1]),
                g: parseIntFromHex(match[2] + '' + match[2]),
                b: parseIntFromHex(match[3] + '' + match[3]),
                format: named ? "name" : "hex"
            };
        }

        return false;
    }

    // Expose tinycolor to window, does not need to run in non-browser context.
    window.tinycolor = tinycolor;

    })();


    $(function () {
        if ($.fn.spectrum.load) {
            $.fn.spectrum.processNativeColorInputs();
        }
    });

})(window, jQuery);

//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
/*
* Underscore.string
* (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
* Underscore.string is freely distributable under the terms of the MIT license.
* Documentation: https://github.com/epeli/underscore.string
* Some code is borrowed from MooTools and Alexandru Marasteanu.
* Version '3.3.4'
* @preserve
*/
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.s=f()}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){var trim=require("./trim");var decap=require("./decapitalize");module.exports=function camelize(str,decapitalize){str=trim(str).replace(/[-_\s]+(.)?/g,function(match,c){return c?c.toUpperCase():""});if(decapitalize===true){return decap(str)}else{return str}}},{"./decapitalize":10,"./trim":65}],2:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function capitalize(str,lowercaseRest){str=makeString(str);var remainingChars=!lowercaseRest?str.slice(1):str.slice(1).toLowerCase();return str.charAt(0).toUpperCase()+remainingChars}},{"./helper/makeString":20}],3:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function chars(str){return makeString(str).split("")}},{"./helper/makeString":20}],4:[function(require,module,exports){module.exports=function chop(str,step){if(str==null)return[];str=String(str);step=~~step;return step>0?str.match(new RegExp(".{1,"+step+"}","g")):[str]}},{}],5:[function(require,module,exports){var capitalize=require("./capitalize");var camelize=require("./camelize");var makeString=require("./helper/makeString");module.exports=function classify(str){str=makeString(str);return capitalize(camelize(str.replace(/[\W_]/g," ")).replace(/\s/g,""))}},{"./camelize":1,"./capitalize":2,"./helper/makeString":20}],6:[function(require,module,exports){var trim=require("./trim");module.exports=function clean(str){return trim(str).replace(/\s\s+/g," ")}},{"./trim":65}],7:[function(require,module,exports){var makeString=require("./helper/makeString");var from="ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž",to="aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";from+=from.toUpperCase();to+=to.toUpperCase();to=to.split("");from+="ß";to.push("ss");module.exports=function cleanDiacritics(str){return makeString(str).replace(/.{1}/g,function(c){var index=from.indexOf(c);return index===-1?c:to[index]})}},{"./helper/makeString":20}],8:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function(str,substr){str=makeString(str);substr=makeString(substr);if(str.length===0||substr.length===0)return 0;return str.split(substr).length-1}},{"./helper/makeString":20}],9:[function(require,module,exports){var trim=require("./trim");module.exports=function dasherize(str){return trim(str).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()}},{"./trim":65}],10:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function decapitalize(str){str=makeString(str);return str.charAt(0).toLowerCase()+str.slice(1)}},{"./helper/makeString":20}],11:[function(require,module,exports){var makeString=require("./helper/makeString");function getIndent(str){var matches=str.match(/^[\s\\t]*/gm);var indent=matches[0].length;for(var i=1;i<matches.length;i++){indent=Math.min(matches[i].length,indent)}return indent}module.exports=function dedent(str,pattern){str=makeString(str);var indent=getIndent(str);var reg;if(indent===0)return str;if(typeof pattern==="string"){reg=new RegExp("^"+pattern,"gm")}else{reg=new RegExp("^[ \\t]{"+indent+"}","gm")}return str.replace(reg,"")}},{"./helper/makeString":20}],12:[function(require,module,exports){var makeString=require("./helper/makeString");var toPositive=require("./helper/toPositive");module.exports=function endsWith(str,ends,position){str=makeString(str);ends=""+ends;if(typeof position=="undefined"){position=str.length-ends.length}else{position=Math.min(toPositive(position),str.length)-ends.length}return position>=0&&str.indexOf(ends,position)===position}},{"./helper/makeString":20,"./helper/toPositive":22}],13:[function(require,module,exports){var makeString=require("./helper/makeString");var escapeChars=require("./helper/escapeChars");var regexString="[";for(var key in escapeChars){regexString+=key}regexString+="]";var regex=new RegExp(regexString,"g");module.exports=function escapeHTML(str){return makeString(str).replace(regex,function(m){return"&"+escapeChars[m]+";"})}},{"./helper/escapeChars":17,"./helper/makeString":20}],14:[function(require,module,exports){module.exports=function(){var result={};for(var prop in this){if(!this.hasOwnProperty(prop)||prop.match(/^(?:include|contains|reverse|join|map|wrap)$/))continue;result[prop]=this[prop]}return result}},{}],15:[function(require,module,exports){var makeString=require("./makeString");module.exports=function adjacent(str,direction){str=makeString(str);if(str.length===0){return""}return str.slice(0,-1)+String.fromCharCode(str.charCodeAt(str.length-1)+direction)}},{"./makeString":20}],16:[function(require,module,exports){var escapeRegExp=require("./escapeRegExp");module.exports=function defaultToWhiteSpace(characters){if(characters==null)return"\\s";else if(characters.source)return characters.source;else return"["+escapeRegExp(characters)+"]"}},{"./escapeRegExp":18}],17:[function(require,module,exports){var escapeChars={"¢":"cent","£":"pound","¥":"yen","€":"euro","©":"copy","®":"reg","<":"lt",">":"gt",'"':"quot","&":"amp","'":"#39"};module.exports=escapeChars},{}],18:[function(require,module,exports){var makeString=require("./makeString");module.exports=function escapeRegExp(str){return makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}},{"./makeString":20}],19:[function(require,module,exports){var htmlEntities={nbsp:" ",cent:"¢",pound:"£",yen:"¥",euro:"€",copy:"©",reg:"®",lt:"<",gt:">",quot:'"',amp:"&",apos:"'"};module.exports=htmlEntities},{}],20:[function(require,module,exports){module.exports=function makeString(object){if(object==null)return"";return""+object}},{}],21:[function(require,module,exports){module.exports=function strRepeat(str,qty){if(qty<1)return"";var result="";while(qty>0){if(qty&1)result+=str;qty>>=1,str+=str}return result}},{}],22:[function(require,module,exports){module.exports=function toPositive(number){return number<0?0:+number||0}},{}],23:[function(require,module,exports){var capitalize=require("./capitalize");var underscored=require("./underscored");var trim=require("./trim");module.exports=function humanize(str){return capitalize(trim(underscored(str).replace(/_id$/,"").replace(/_/g," ")))}},{"./capitalize":2,"./trim":65,"./underscored":67}],24:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function include(str,needle){if(needle==="")return true;return makeString(str).indexOf(needle)!==-1}},{"./helper/makeString":20}],25:[function(require,module,exports){/*
* Underscore.string
* (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
* Underscore.string is freely distributable under the terms of the MIT license.
* Documentation: https://github.com/epeli/underscore.string
* Some code is borrowed from MooTools and Alexandru Marasteanu.
* Version '3.3.4'
* @preserve
*/
"use strict";function s(value){if(!(this instanceof s))return new s(value);this._wrapped=value}s.VERSION="3.3.4";s.isBlank=require("./isBlank");s.stripTags=require("./stripTags");s.capitalize=require("./capitalize");s.decapitalize=require("./decapitalize");s.chop=require("./chop");s.trim=require("./trim");s.clean=require("./clean");s.cleanDiacritics=require("./cleanDiacritics");s.count=require("./count");s.chars=require("./chars");s.swapCase=require("./swapCase");s.escapeHTML=require("./escapeHTML");s.unescapeHTML=require("./unescapeHTML");s.splice=require("./splice");s.insert=require("./insert");s.replaceAll=require("./replaceAll");s.include=require("./include");s.join=require("./join");s.lines=require("./lines");s.dedent=require("./dedent");s.reverse=require("./reverse");s.startsWith=require("./startsWith");s.endsWith=require("./endsWith");s.pred=require("./pred");s.succ=require("./succ");s.titleize=require("./titleize");s.camelize=require("./camelize");s.underscored=require("./underscored");s.dasherize=require("./dasherize");s.classify=require("./classify");s.humanize=require("./humanize");s.ltrim=require("./ltrim");s.rtrim=require("./rtrim");s.truncate=require("./truncate");s.prune=require("./prune");s.words=require("./words");s.pad=require("./pad");s.lpad=require("./lpad");s.rpad=require("./rpad");s.lrpad=require("./lrpad");s.sprintf=require("./sprintf");s.vsprintf=require("./vsprintf");s.toNumber=require("./toNumber");s.numberFormat=require("./numberFormat");s.strRight=require("./strRight");s.strRightBack=require("./strRightBack");s.strLeft=require("./strLeft");s.strLeftBack=require("./strLeftBack");s.toSentence=require("./toSentence");s.toSentenceSerial=require("./toSentenceSerial");s.slugify=require("./slugify");s.surround=require("./surround");s.quote=require("./quote");s.unquote=require("./unquote");s.repeat=require("./repeat");s.naturalCmp=require("./naturalCmp");s.levenshtein=require("./levenshtein");s.toBoolean=require("./toBoolean");s.exports=require("./exports");s.escapeRegExp=require("./helper/escapeRegExp");s.wrap=require("./wrap");s.map=require("./map");s.strip=s.trim;s.lstrip=s.ltrim;s.rstrip=s.rtrim;s.center=s.lrpad;s.rjust=s.lpad;s.ljust=s.rpad;s.contains=s.include;s.q=s.quote;s.toBool=s.toBoolean;s.camelcase=s.camelize;s.mapChars=s.map;s.prototype={value:function value(){return this._wrapped}};function fn2method(key,fn){if(typeof fn!=="function")return;s.prototype[key]=function(){var args=[this._wrapped].concat(Array.prototype.slice.call(arguments));var res=fn.apply(null,args);return typeof res==="string"?new s(res):res}}for(var key in s)fn2method(key,s[key]);fn2method("tap",function tap(string,fn){return fn(string)});function prototype2method(methodName){fn2method(methodName,function(context){var args=Array.prototype.slice.call(arguments,1);return String.prototype[methodName].apply(context,args)})}var prototypeMethods=["toUpperCase","toLowerCase","split","replace","slice","substring","substr","concat"];for(var method in prototypeMethods)prototype2method(prototypeMethods[method]);module.exports=s},{"./camelize":1,"./capitalize":2,"./chars":3,"./chop":4,"./classify":5,"./clean":6,"./cleanDiacritics":7,"./count":8,"./dasherize":9,"./decapitalize":10,"./dedent":11,"./endsWith":12,"./escapeHTML":13,"./exports":14,"./helper/escapeRegExp":18,"./humanize":23,"./include":24,"./insert":26,"./isBlank":27,"./join":28,"./levenshtein":29,"./lines":30,"./lpad":31,"./lrpad":32,"./ltrim":33,"./map":34,"./naturalCmp":35,"./numberFormat":38,"./pad":39,"./pred":40,"./prune":41,"./quote":42,"./repeat":43,"./replaceAll":44,"./reverse":45,"./rpad":46,"./rtrim":47,"./slugify":48,"./splice":49,"./sprintf":50,"./startsWith":51,"./strLeft":52,"./strLeftBack":53,"./strRight":54,"./strRightBack":55,"./stripTags":56,"./succ":57,"./surround":58,"./swapCase":59,"./titleize":60,"./toBoolean":61,"./toNumber":62,"./toSentence":63,"./toSentenceSerial":64,"./trim":65,"./truncate":66,"./underscored":67,"./unescapeHTML":68,"./unquote":69,"./vsprintf":70,"./words":71,"./wrap":72}],26:[function(require,module,exports){var splice=require("./splice");module.exports=function insert(str,i,substr){return splice(str,i,0,substr)}},{"./splice":49}],27:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function isBlank(str){return/^\s*$/.test(makeString(str))}},{"./helper/makeString":20}],28:[function(require,module,exports){var makeString=require("./helper/makeString");var slice=[].slice;module.exports=function join(){var args=slice.call(arguments),separator=args.shift();return args.join(makeString(separator))}},{"./helper/makeString":20}],29:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function levenshtein(str1,str2){"use strict";str1=makeString(str1);str2=makeString(str2);if(str1===str2)return 0;if(!str1||!str2)return Math.max(str1.length,str2.length);var prevRow=new Array(str2.length+1);for(var i=0;i<prevRow.length;++i){prevRow[i]=i}for(i=0;i<str1.length;++i){var nextCol=i+1;for(var j=0;j<str2.length;++j){var curCol=nextCol;nextCol=prevRow[j]+(str1.charAt(i)===str2.charAt(j)?0:1);var tmp=curCol+1;if(nextCol>tmp){nextCol=tmp}tmp=prevRow[j+1]+1;if(nextCol>tmp){nextCol=tmp}prevRow[j]=curCol}prevRow[j]=nextCol}return nextCol}},{"./helper/makeString":20}],30:[function(require,module,exports){module.exports=function lines(str){if(str==null)return[];return String(str).split(/\r\n?|\n/)}},{}],31:[function(require,module,exports){var pad=require("./pad");module.exports=function lpad(str,length,padStr){return pad(str,length,padStr)}},{"./pad":39}],32:[function(require,module,exports){var pad=require("./pad");module.exports=function lrpad(str,length,padStr){return pad(str,length,padStr,"both")}},{"./pad":39}],33:[function(require,module,exports){var makeString=require("./helper/makeString");var defaultToWhiteSpace=require("./helper/defaultToWhiteSpace");var nativeTrimLeft=String.prototype.trimLeft;module.exports=function ltrim(str,characters){str=makeString(str);if(!characters&&nativeTrimLeft)return nativeTrimLeft.call(str);characters=defaultToWhiteSpace(characters);return str.replace(new RegExp("^"+characters+"+"),"")}},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":20}],34:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function(str,callback){str=makeString(str);if(str.length===0||typeof callback!=="function")return str;return str.replace(/./g,callback)}},{"./helper/makeString":20}],35:[function(require,module,exports){module.exports=function naturalCmp(str1,str2){if(str1==str2)return 0;if(!str1)return-1;if(!str2)return 1;var cmpRegex=/(\.\d+|\d+|\D+)/g,tokens1=String(str1).match(cmpRegex),tokens2=String(str2).match(cmpRegex),count=Math.min(tokens1.length,tokens2.length);for(var i=0;i<count;i++){var a=tokens1[i],b=tokens2[i];if(a!==b){var num1=+a;var num2=+b;if(num1===num1&&num2===num2){return num1>num2?1:-1}return a<b?-1:1}}if(tokens1.length!=tokens2.length)return tokens1.length-tokens2.length;return str1<str2?-1:1}},{}],36:[function(require,module,exports){(function(window){var re={not_string:/[^s]/,number:/[diefg]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[\+\-]/};function sprintf(){var key=arguments[0],cache=sprintf.cache;if(!(cache[key]&&cache.hasOwnProperty(key))){cache[key]=sprintf.parse(key)}return sprintf.format.call(null,cache[key],arguments)}sprintf.format=function(parse_tree,argv){var cursor=1,tree_length=parse_tree.length,node_type="",arg,output=[],i,k,match,pad,pad_character,pad_length,is_positive=true,sign="";for(i=0;i<tree_length;i++){node_type=get_type(parse_tree[i]);if(node_type==="string"){output[output.length]=parse_tree[i]}else if(node_type==="array"){match=parse_tree[i];if(match[2]){arg=argv[cursor];for(k=0;k<match[2].length;k++){if(!arg.hasOwnProperty(match[2][k])){throw new Error(sprintf("[sprintf] property '%s' does not exist",match[2][k]))}arg=arg[match[2][k]]}}else if(match[1]){arg=argv[match[1]]}else{arg=argv[cursor++]}if(get_type(arg)=="function"){arg=arg()}if(re.not_string.test(match[8])&&re.not_json.test(match[8])&&(get_type(arg)!="number"&&isNaN(arg))){throw new TypeError(sprintf("[sprintf] expecting number but found %s",get_type(arg)))}if(re.number.test(match[8])){is_positive=arg>=0}switch(match[8]){case"b":arg=arg.toString(2);break;case"c":arg=String.fromCharCode(arg);break;case"d":case"i":arg=parseInt(arg,10);break;case"j":arg=JSON.stringify(arg,null,match[6]?parseInt(match[6]):0);break;case"e":arg=match[7]?arg.toExponential(match[7]):arg.toExponential();break;case"f":arg=match[7]?parseFloat(arg).toFixed(match[7]):parseFloat(arg);break;case"g":arg=match[7]?parseFloat(arg).toPrecision(match[7]):parseFloat(arg);break;case"o":arg=arg.toString(8);break;case"s":arg=(arg=String(arg))&&match[7]?arg.substring(0,match[7]):arg;break;case"u":arg=arg>>>0;break;case"x":arg=arg.toString(16);break;case"X":arg=arg.toString(16).toUpperCase();break}if(re.json.test(match[8])){output[output.length]=arg}else{if(re.number.test(match[8])&&(!is_positive||match[3])){sign=is_positive?"+":"-";arg=arg.toString().replace(re.sign,"")}else{sign=""}pad_character=match[4]?match[4]==="0"?"0":match[4].charAt(1):" ";pad_length=match[6]-(sign+arg).length;pad=match[6]?pad_length>0?str_repeat(pad_character,pad_length):"":"";output[output.length]=match[5]?sign+arg+pad:pad_character==="0"?sign+pad+arg:pad+sign+arg}}}return output.join("")};sprintf.cache={};sprintf.parse=function(fmt){var _fmt=fmt,match=[],parse_tree=[],arg_names=0;while(_fmt){if((match=re.text.exec(_fmt))!==null){parse_tree[parse_tree.length]=match[0]}else if((match=re.modulo.exec(_fmt))!==null){parse_tree[parse_tree.length]="%"}else if((match=re.placeholder.exec(_fmt))!==null){if(match[2]){arg_names|=1;var field_list=[],replacement_field=match[2],field_match=[];if((field_match=re.key.exec(replacement_field))!==null){field_list[field_list.length]=field_match[1];while((replacement_field=replacement_field.substring(field_match[0].length))!==""){if((field_match=re.key_access.exec(replacement_field))!==null){field_list[field_list.length]=field_match[1]}else if((field_match=re.index_access.exec(replacement_field))!==null){field_list[field_list.length]=field_match[1]}else{throw new SyntaxError("[sprintf] failed to parse named argument key")}}}else{throw new SyntaxError("[sprintf] failed to parse named argument key")}match[2]=field_list}else{arg_names|=2}if(arg_names===3){throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported")}parse_tree[parse_tree.length]=match}else{throw new SyntaxError("[sprintf] unexpected placeholder")}_fmt=_fmt.substring(match[0].length)}return parse_tree};var vsprintf=function(fmt,argv,_argv){_argv=(argv||[]).slice(0);_argv.splice(0,0,fmt);return sprintf.apply(null,_argv)};function get_type(variable){return Object.prototype.toString.call(variable).slice(8,-1).toLowerCase()}function str_repeat(input,multiplier){return Array(multiplier+1).join(input)}if(typeof exports!=="undefined"){exports.sprintf=sprintf;exports.vsprintf=vsprintf}else{window.sprintf=sprintf;window.vsprintf=vsprintf;if(typeof define==="function"&&define.amd){define(function(){return{sprintf:sprintf,vsprintf:vsprintf}})}}})(typeof window==="undefined"?this:window)},{}],37:[function(require,module,exports){(function(global){module.exports=deprecate;function deprecate(fn,msg){if(config("noDeprecation")){return fn}var warned=false;function deprecated(){if(!warned){if(config("throwDeprecation")){throw new Error(msg)}else if(config("traceDeprecation")){console.trace(msg)}else{console.warn(msg)}warned=true}return fn.apply(this,arguments)}return deprecated}function config(name){try{if(!global.localStorage)return false}catch(_){return false}var val=global.localStorage[name];if(null==val)return false;return String(val).toLowerCase()==="true"}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}],38:[function(require,module,exports){module.exports=function numberFormat(number,dec,dsep,tsep){if(isNaN(number)||number==null)return"";number=number.toFixed(~~dec);tsep=typeof tsep=="string"?tsep:",";var parts=number.split("."),fnums=parts[0],decimals=parts[1]?(dsep||".")+parts[1]:"";return fnums.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+tsep)+decimals}},{}],39:[function(require,module,exports){var makeString=require("./helper/makeString");var strRepeat=require("./helper/strRepeat");module.exports=function pad(str,length,padStr,type){str=makeString(str);length=~~length;var padlen=0;if(!padStr)padStr=" ";else if(padStr.length>1)padStr=padStr.charAt(0);switch(type){case"right":padlen=length-str.length;return str+strRepeat(padStr,padlen);case"both":padlen=length-str.length;return strRepeat(padStr,Math.ceil(padlen/2))+str+strRepeat(padStr,Math.floor(padlen/2));default:padlen=length-str.length;return strRepeat(padStr,padlen)+str}}},{"./helper/makeString":20,"./helper/strRepeat":21}],40:[function(require,module,exports){var adjacent=require("./helper/adjacent");module.exports=function succ(str){return adjacent(str,-1)}},{"./helper/adjacent":15}],41:[function(require,module,exports){var makeString=require("./helper/makeString");var rtrim=require("./rtrim");module.exports=function prune(str,length,pruneStr){str=makeString(str);length=~~length;pruneStr=pruneStr!=null?String(pruneStr):"...";if(str.length<=length)return str;var tmpl=function(c){return c.toUpperCase()!==c.toLowerCase()?"A":" "},template=str.slice(0,length+1).replace(/.(?=\W*\w*$)/g,tmpl);if(template.slice(template.length-2).match(/\w\w/))template=template.replace(/\s*\S+$/,"");else template=rtrim(template.slice(0,template.length-1));return(template+pruneStr).length>str.length?str:str.slice(0,template.length)+pruneStr}},{"./helper/makeString":20,"./rtrim":47}],42:[function(require,module,exports){var surround=require("./surround");module.exports=function quote(str,quoteChar){return surround(str,quoteChar||'"')}},{"./surround":58}],43:[function(require,module,exports){var makeString=require("./helper/makeString");var strRepeat=require("./helper/strRepeat");module.exports=function repeat(str,qty,separator){str=makeString(str);qty=~~qty;if(separator==null)return strRepeat(str,qty);for(var repeat=[];qty>0;repeat[--qty]=str){}return repeat.join(separator)}},{"./helper/makeString":20,"./helper/strRepeat":21}],44:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function replaceAll(str,find,replace,ignorecase){var flags=ignorecase===true?"gi":"g";var reg=new RegExp(find,flags);return makeString(str).replace(reg,replace)}},{"./helper/makeString":20}],45:[function(require,module,exports){var chars=require("./chars");module.exports=function reverse(str){return chars(str).reverse().join("")}},{"./chars":3}],46:[function(require,module,exports){var pad=require("./pad");module.exports=function rpad(str,length,padStr){return pad(str,length,padStr,"right")}},{"./pad":39}],47:[function(require,module,exports){var makeString=require("./helper/makeString");var defaultToWhiteSpace=require("./helper/defaultToWhiteSpace");var nativeTrimRight=String.prototype.trimRight;module.exports=function rtrim(str,characters){str=makeString(str);if(!characters&&nativeTrimRight)return nativeTrimRight.call(str);characters=defaultToWhiteSpace(characters);return str.replace(new RegExp(characters+"+$"),"")}},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":20}],48:[function(require,module,exports){var trim=require("./trim");var dasherize=require("./dasherize");var cleanDiacritics=require("./cleanDiacritics");module.exports=function slugify(str){return trim(dasherize(cleanDiacritics(str).replace(/[^\w\s-]/g,"-").toLowerCase()),"-")}},{"./cleanDiacritics":7,"./dasherize":9,"./trim":65}],49:[function(require,module,exports){var chars=require("./chars");module.exports=function splice(str,i,howmany,substr){var arr=chars(str);arr.splice(~~i,~~howmany,substr);return arr.join("")}},{"./chars":3}],50:[function(require,module,exports){var deprecate=require("util-deprecate");module.exports=deprecate(require("sprintf-js").sprintf,"sprintf() will be removed in the next major release, use the sprintf-js package instead.")},{"sprintf-js":36,"util-deprecate":37}],51:[function(require,module,exports){var makeString=require("./helper/makeString");var toPositive=require("./helper/toPositive");module.exports=function startsWith(str,starts,position){str=makeString(str);starts=""+starts;position=position==null?0:Math.min(toPositive(position),str.length);return str.lastIndexOf(starts,position)===position}},{"./helper/makeString":20,"./helper/toPositive":22}],52:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function strLeft(str,sep){str=makeString(str);sep=makeString(sep);var pos=!sep?-1:str.indexOf(sep);return~pos?str.slice(0,pos):str}},{"./helper/makeString":20}],53:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function strLeftBack(str,sep){str=makeString(str);sep=makeString(sep);var pos=str.lastIndexOf(sep);return~pos?str.slice(0,pos):str}},{"./helper/makeString":20}],54:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function strRight(str,sep){str=makeString(str);sep=makeString(sep);var pos=!sep?-1:str.indexOf(sep);return~pos?str.slice(pos+sep.length,str.length):str}},{"./helper/makeString":20}],55:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function strRightBack(str,sep){str=makeString(str);sep=makeString(sep);var pos=!sep?-1:str.lastIndexOf(sep);return~pos?str.slice(pos+sep.length,str.length):str}},{"./helper/makeString":20}],56:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function stripTags(str){return makeString(str).replace(/<\/?[^>]+>/g,"")}},{"./helper/makeString":20}],57:[function(require,module,exports){var adjacent=require("./helper/adjacent");module.exports=function succ(str){return adjacent(str,1)}},{"./helper/adjacent":15}],58:[function(require,module,exports){module.exports=function surround(str,wrapper){return[wrapper,str,wrapper].join("")}},{}],59:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function swapCase(str){return makeString(str).replace(/\S/g,function(c){return c===c.toUpperCase()?c.toLowerCase():c.toUpperCase()})}},{"./helper/makeString":20}],60:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function titleize(str){return makeString(str).toLowerCase().replace(/(?:^|\s|-)\S/g,function(c){return c.toUpperCase()})}},{"./helper/makeString":20}],61:[function(require,module,exports){var trim=require("./trim");function boolMatch(s,matchers){var i,matcher,down=s.toLowerCase();matchers=[].concat(matchers);for(i=0;i<matchers.length;i+=1){matcher=matchers[i];if(!matcher)continue;if(matcher.test&&matcher.test(s))return true;if(matcher.toLowerCase()===down)return true}}module.exports=function toBoolean(str,trueValues,falseValues){if(typeof str==="number")str=""+str;if(typeof str!=="string")return!!str;str=trim(str);if(boolMatch(str,trueValues||["true","1"]))return true;if(boolMatch(str,falseValues||["false","0"]))return false}},{"./trim":65}],62:[function(require,module,exports){module.exports=function toNumber(num,precision){if(num==null)return 0;var factor=Math.pow(10,isFinite(precision)?precision:0);return Math.round(num*factor)/factor}},{}],63:[function(require,module,exports){var rtrim=require("./rtrim");module.exports=function toSentence(array,separator,lastSeparator,serial){separator=separator||", ";lastSeparator=lastSeparator||" and ";var a=array.slice(),lastMember=a.pop();if(array.length>2&&serial)lastSeparator=rtrim(separator)+lastSeparator;return a.length?a.join(separator)+lastSeparator+lastMember:lastMember}},{"./rtrim":47}],64:[function(require,module,exports){var toSentence=require("./toSentence");module.exports=function toSentenceSerial(array,sep,lastSep){return toSentence(array,sep,lastSep,true)}},{"./toSentence":63}],65:[function(require,module,exports){var makeString=require("./helper/makeString");var defaultToWhiteSpace=require("./helper/defaultToWhiteSpace");var nativeTrim=String.prototype.trim;module.exports=function trim(str,characters){str=makeString(str);if(!characters&&nativeTrim)return nativeTrim.call(str);characters=defaultToWhiteSpace(characters);return str.replace(new RegExp("^"+characters+"+|"+characters+"+$","g"),"")}},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":20}],66:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function truncate(str,length,truncateStr){str=makeString(str);truncateStr=truncateStr||"...";length=~~length;return str.length>length?str.slice(0,length)+truncateStr:str}},{"./helper/makeString":20}],67:[function(require,module,exports){var trim=require("./trim");module.exports=function underscored(str){return trim(str).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()}},{"./trim":65}],68:[function(require,module,exports){var makeString=require("./helper/makeString");var htmlEntities=require("./helper/htmlEntities");module.exports=function unescapeHTML(str){return makeString(str).replace(/\&([^;]+);/g,function(entity,entityCode){var match;if(entityCode in htmlEntities){return htmlEntities[entityCode]}else if(match=entityCode.match(/^#x([\da-fA-F]+)$/)){return String.fromCharCode(parseInt(match[1],16))}else if(match=entityCode.match(/^#(\d+)$/)){return String.fromCharCode(~~match[1])}else{return entity}})}},{"./helper/htmlEntities":19,"./helper/makeString":20}],69:[function(require,module,exports){module.exports=function unquote(str,quoteChar){quoteChar=quoteChar||'"';if(str[0]===quoteChar&&str[str.length-1]===quoteChar)return str.slice(1,str.length-1);else return str}},{}],70:[function(require,module,exports){var deprecate=require("util-deprecate");module.exports=deprecate(require("sprintf-js").vsprintf,"vsprintf() will be removed in the next major release, use the sprintf-js package instead.")},{"sprintf-js":36,"util-deprecate":37}],71:[function(require,module,exports){var isBlank=require("./isBlank");var trim=require("./trim");module.exports=function words(str,delimiter){if(isBlank(str))return[];return trim(str,delimiter).split(delimiter||/\s+/)}},{"./isBlank":27,"./trim":65}],72:[function(require,module,exports){var makeString=require("./helper/makeString");module.exports=function wrap(str,options){str=makeString(str);options=options||{};var width=options.width||75;var seperator=options.seperator||"\n";var cut=options.cut||false;var preserveSpaces=options.preserveSpaces||false;var trailingSpaces=options.trailingSpaces||false;var result;if(width<=0){return str}else if(!cut){var words=str.split(" ");var current_column=0;result="";while(words.length>0){if(1+words[0].length+current_column>width){if(current_column>0){if(preserveSpaces){result+=" ";current_column++}else if(trailingSpaces){while(current_column<width){result+=" ";current_column++}}result+=seperator;current_column=0}}if(current_column>0){result+=" ";current_column++}result+=words[0];current_column+=words[0].length;words.shift()}if(trailingSpaces){while(current_column<width){result+=" ";current_column++}}return result}else{var index=0;result="";while(index<str.length){if(index%width==0&&index>0){result+=seperator}result+=str.charAt(index);index++}if(trailingSpaces){while(index%width>0){result+=" ";index++}}return result}}},{"./helper/makeString":20}]},{},[25])(25)});
/*! URI.js v1.14.1 http://medialize.github.io/URI.js/ */
/* build contains: URI.js */
(function (p, u) { "object" === typeof exports ? module.exports = u(require("./punycode"), require("./IPv6"), require("./SecondLevelDomains")) : "function" === typeof define && define.amd ? define(["./punycode", "./IPv6", "./SecondLevelDomains"], u) : p.URI = u(p.punycode, p.IPv6, p.SecondLevelDomains, p) })(this, function (p, u, t, m) {
    function e(a, b) { if (!(this instanceof e)) return new e(a, b); void 0 === a && (a = "undefined" !== typeof location ? location.href + "" : ""); this.href(a); return void 0 !== b ? this.absoluteTo(b) : this } function r(a) {
        return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,
        "\\$1")
    } function x(a) { return void 0 === a ? "Undefined" : String(Object.prototype.toString.call(a)).slice(8, -1) } function l(a) { return "Array" === x(a) } function w(a, b) { var c, e; if (l(b)) { c = 0; for (e = b.length; c < e; c++) if (!w(a, b[c])) return !1; return !0 } var h = x(b); c = 0; for (e = a.length; c < e; c++) if ("RegExp" === h) { if ("string" === typeof a[c] && a[c].match(b)) return !0 } else if (a[c] === b) return !0; return !1 } function A(a, b) {
        if (!l(a) || !l(b) || a.length !== b.length) return !1; a.sort(); b.sort(); for (var c = 0, e = a.length; c < e; c++) if (a[c] !== b[c]) return !1;
        return !0
    } function E(a) { return escape(a) } function y(a) { return encodeURIComponent(a).replace(/[!'()*]/g, E).replace(/\*/g, "%2A") } function v(a) { return function (b, c) { if (void 0 === b) return this._parts[a] || ""; this._parts[a] = b || null; this.build(!c); return this } } function B(a, b) { return function (c, e) { if (void 0 === c) return this._parts[a] || ""; null !== c && (c += "", c.charAt(0) === b && (c = c.substring(1))); this._parts[a] = c; this.build(!e); return this } } var F = m && m.URI; e.version = "1.14.1"; var d = e.prototype, q = Object.prototype.hasOwnProperty;
    e._parts = function () { return { protocol: null, username: null, password: null, hostname: null, urn: null, port: null, path: null, query: null, fragment: null, duplicateQueryParameters: e.duplicateQueryParameters, escapeQuerySpace: e.escapeQuerySpace } }; e.duplicateQueryParameters = !1; e.escapeQuerySpace = !0; e.protocol_expression = /^[a-z][a-z0-9.+-]*$/i; e.idn_expression = /[^a-z0-9\.-]/i; e.punycode_expression = /(xn--)/i; e.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/; e.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
    e.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig; e.findUri = { start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi, end: /[\s\r\n]|$/, trim: /[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/ }; e.defaultPorts = { http: "80", https: "443", ftp: "21", gopher: "70", ws: "80", wss: "443" }; e.invalid_hostname_characters =
    /[^a-zA-Z0-9\.-]/; e.domAttributes = { a: "href", blockquote: "cite", link: "href", base: "href", script: "src", form: "action", img: "src", area: "href", iframe: "src", embed: "src", source: "src", track: "src", input: "src", audio: "src", video: "src" }; e.getDomAttribute = function (a) { if (a && a.nodeName) { var b = a.nodeName.toLowerCase(); return "input" === b && "image" !== a.type ? void 0 : e.domAttributes[b] } }; e.encode = y; e.decode = decodeURIComponent; e.iso8859 = function () { e.encode = escape; e.decode = unescape }; e.unicode = function () {
        e.encode = y; e.decode =
        decodeURIComponent
    }; e.characters = {
        pathname: { encode: { expression: /%(24|26|2B|2C|3B|3D|3A|40)/ig, map: { "%24": "$", "%26": "&", "%2B": "+", "%2C": ",", "%3B": ";", "%3D": "=", "%3A": ":", "%40": "@" } }, decode: { expression: /[\/\?#]/g, map: { "/": "%2F", "?": "%3F", "#": "%23" } } }, reserved: {
            encode: {
                expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig, map: {
                    "%3A": ":", "%2F": "/", "%3F": "?", "%23": "#", "%5B": "[", "%5D": "]", "%40": "@", "%21": "!", "%24": "$", "%26": "&", "%27": "'", "%28": "(", "%29": ")", "%2A": "*", "%2B": "+", "%2C": ",",
                    "%3B": ";", "%3D": "="
                }
            }
        }
    }; e.encodeQuery = function (a, b) { var c = e.encode(a + ""); void 0 === b && (b = e.escapeQuerySpace); return b ? c.replace(/%20/g, "+") : c }; e.decodeQuery = function (a, b) { a += ""; void 0 === b && (b = e.escapeQuerySpace); try { return e.decode(b ? a.replace(/\+/g, "%20") : a) } catch (c) { return a } }; e.recodePath = function (a) { a = (a + "").split("/"); for (var b = 0, c = a.length; b < c; b++) a[b] = e.encodePathSegment(e.decode(a[b])); return a.join("/") }; e.decodePath = function (a) {
        a = (a + "").split("/"); for (var b = 0, c = a.length; b < c; b++) a[b] = e.decodePathSegment(a[b]);
        return a.join("/")
    }; var C = { encode: "encode", decode: "decode" }, z, D = function (a, b) { return function (c) { try { return e[b](c + "").replace(e.characters[a][b].expression, function (c) { return e.characters[a][b].map[c] }) } catch (f) { return c } } }; for (z in C) e[z + "PathSegment"] = D("pathname", C[z]); e.encodeReserved = D("reserved", "encode"); e.parse = function (a, b) {
        var c; b || (b = {}); c = a.indexOf("#"); -1 < c && (b.fragment = a.substring(c + 1) || null, a = a.substring(0, c)); c = a.indexOf("?"); -1 < c && (b.query = a.substring(c + 1) || null, a = a.substring(0,
        c)); "//" === a.substring(0, 2) ? (b.protocol = null, a = a.substring(2), a = e.parseAuthority(a, b)) : (c = a.indexOf(":"), -1 < c && (b.protocol = a.substring(0, c) || null, b.protocol && !b.protocol.match(e.protocol_expression) ? b.protocol = void 0 : "//" === a.substring(c + 1, c + 3) ? (a = a.substring(c + 3), a = e.parseAuthority(a, b)) : (a = a.substring(c + 1), b.urn = !0))); b.path = a; return b
    }; e.parseHost = function (a, b) {
        var c = a.indexOf("/"), e; -1 === c && (c = a.length); "[" === a.charAt(0) ? (e = a.indexOf("]"), b.hostname = a.substring(1, e) || null, b.port = a.substring(e +
        2, c) || null, "/" === b.port && (b.port = null)) : a.indexOf(":") !== a.lastIndexOf(":") ? (b.hostname = a.substring(0, c) || null, b.port = null) : (e = a.substring(0, c).split(":"), b.hostname = e[0] || null, b.port = e[1] || null); b.hostname && "/" !== a.substring(c).charAt(0) && (c++, a = "/" + a); return a.substring(c) || "/"
    }; e.parseAuthority = function (a, b) { a = e.parseUserinfo(a, b); return e.parseHost(a, b) }; e.parseUserinfo = function (a, b) {
        var c = a.indexOf("/"), f = a.lastIndexOf("@", -1 < c ? c : a.length - 1); -1 < f && (-1 === c || f < c) ? (c = a.substring(0, f).split(":"),
        b.username = c[0] ? e.decode(c[0]) : null, c.shift(), b.password = c[0] ? e.decode(c.join(":")) : null, a = a.substring(f + 1)) : (b.username = null, b.password = null); return a
    }; e.parseQuery = function (a, b) { if (!a) return {}; a = a.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, ""); if (!a) return {}; for (var c = {}, f = a.split("&"), h = f.length, d, k, n = 0; n < h; n++) d = f[n].split("="), k = e.decodeQuery(d.shift(), b), d = d.length ? e.decodeQuery(d.join("="), b) : null, q.call(c, k) ? ("string" === typeof c[k] && (c[k] = [c[k]]), c[k].push(d)) : c[k] = d; return c }; e.build = function (a) {
        var b =
        ""; a.protocol && (b += a.protocol + ":"); a.urn || !b && !a.hostname || (b += "//"); b += e.buildAuthority(a) || ""; "string" === typeof a.path && ("/" !== a.path.charAt(0) && "string" === typeof a.hostname && (b += "/"), b += a.path); "string" === typeof a.query && a.query && (b += "?" + a.query); "string" === typeof a.fragment && a.fragment && (b += "#" + a.fragment); return b
    }; e.buildHost = function (a) { var b = ""; if (a.hostname) b = e.ip6_expression.test(a.hostname) ? b + ("[" + a.hostname + "]") : b + a.hostname; else return ""; a.port && (b += ":" + a.port); return b }; e.buildAuthority =
    function (a) { return e.buildUserinfo(a) + e.buildHost(a) }; e.buildUserinfo = function (a) { var b = ""; a.username && (b += e.encode(a.username), a.password && (b += ":" + e.encode(a.password)), b += "@"); return b }; e.buildQuery = function (a, b, c) { var f = "", h, d, k, n; for (d in a) if (q.call(a, d) && d) if (l(a[d])) for (h = {}, k = 0, n = a[d].length; k < n; k++) void 0 !== a[d][k] && void 0 === h[a[d][k] + ""] && (f += "&" + e.buildQueryParameter(d, a[d][k], c), !0 !== b && (h[a[d][k] + ""] = !0)); else void 0 !== a[d] && (f += "&" + e.buildQueryParameter(d, a[d], c)); return f.substring(1) };
    e.buildQueryParameter = function (a, b, c) { return e.encodeQuery(a, c) + (null !== b ? "=" + e.encodeQuery(b, c) : "") }; e.addQuery = function (a, b, c) { if ("object" === typeof b) for (var f in b) q.call(b, f) && e.addQuery(a, f, b[f]); else if ("string" === typeof b) void 0 === a[b] ? a[b] = c : ("string" === typeof a[b] && (a[b] = [a[b]]), l(c) || (c = [c]), a[b] = (a[b] || []).concat(c)); else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter"); }; e.removeQuery = function (a, b, c) {
        var f; if (l(b)) for (c = 0, f = b.length; c < f; c++) a[b[c]] =
        void 0; else if ("object" === typeof b) for (f in b) q.call(b, f) && e.removeQuery(a, f, b[f]); else if ("string" === typeof b) if (void 0 !== c) if (a[b] === c) a[b] = void 0; else { if (l(a[b])) { f = a[b]; var d = {}, g, k; if (l(c)) for (g = 0, k = c.length; g < k; g++) d[c[g]] = !0; else d[c] = !0; g = 0; for (k = f.length; g < k; g++) void 0 !== d[f[g]] && (f.splice(g, 1), k--, g--); a[b] = f } } else a[b] = void 0; else throw new TypeError("URI.removeQuery() accepts an object, string as the first parameter");
    }; e.hasQuery = function (a, b, c, f) {
        if ("object" === typeof b) {
            for (var d in b) if (q.call(b,
            d) && !e.hasQuery(a, d, b[d])) return !1; return !0
        } if ("string" !== typeof b) throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter"); switch (x(c)) {
            case "Undefined": return b in a; case "Boolean": return a = Boolean(l(a[b]) ? a[b].length : a[b]), c === a; case "Function": return !!c(a[b], b, a); case "Array": return l(a[b]) ? (f ? w : A)(a[b], c) : !1; case "RegExp": return l(a[b]) ? f ? w(a[b], c) : !1 : Boolean(a[b] && a[b].match(c)); case "Number": c = String(c); case "String": return l(a[b]) ? f ? w(a[b], c) : !1 : a[b] === c; default: throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");
        }
    }; e.commonPath = function (a, b) { var c = Math.min(a.length, b.length), e; for (e = 0; e < c; e++) if (a.charAt(e) !== b.charAt(e)) { e--; break } if (1 > e) return a.charAt(0) === b.charAt(0) && "/" === a.charAt(0) ? "/" : ""; if ("/" !== a.charAt(e) || "/" !== b.charAt(e)) e = a.substring(0, e).lastIndexOf("/"); return a.substring(0, e + 1) }; e.withinString = function (a, b, c) {
        c || (c = {}); var f = c.start || e.findUri.start, d = c.end || e.findUri.end, g = c.trim || e.findUri.trim, k = /[a-z0-9-]=["']?$/i; for (f.lastIndex = 0; ;) {
            var n = f.exec(a); if (!n) break; n = n.index; if (c.ignoreHtml) {
                var l =
                a.slice(Math.max(n - 3, 0), n); if (l && k.test(l)) continue
            } var l = n + a.slice(n).search(d), m = a.slice(n, l).replace(g, ""); c.ignore && c.ignore.test(m) || (l = n + m.length, m = b(m, n, l, a), a = a.slice(0, n) + m + a.slice(l), f.lastIndex = n + m.length)
        } f.lastIndex = 0; return a
    }; e.ensureValidHostname = function (a) {
        if (a.match(e.invalid_hostname_characters)) {
            if (!p) throw new TypeError('Hostname "' + a + '" contains characters other than [A-Z0-9.-] and Punycode.js is not available'); if (p.toASCII(a).match(e.invalid_hostname_characters)) throw new TypeError('Hostname "' +
            a + '" contains characters other than [A-Z0-9.-]');
        }
    }; e.noConflict = function (a) { if (a) return a = { URI: this.noConflict() }, m.URITemplate && "function" === typeof m.URITemplate.noConflict && (a.URITemplate = m.URITemplate.noConflict()), m.IPv6 && "function" === typeof m.IPv6.noConflict && (a.IPv6 = m.IPv6.noConflict()), m.SecondLevelDomains && "function" === typeof m.SecondLevelDomains.noConflict && (a.SecondLevelDomains = m.SecondLevelDomains.noConflict()), a; m.URI === this && (m.URI = F); return this }; d.build = function (a) {
        if (!0 === a) this._deferred_build =
        !0; else if (void 0 === a || this._deferred_build) this._string = e.build(this._parts), this._deferred_build = !1; return this
    }; d.clone = function () { return new e(this) }; d.valueOf = d.toString = function () { return this.build(!1)._string }; d.protocol = v("protocol"); d.username = v("username"); d.password = v("password"); d.hostname = v("hostname"); d.port = v("port"); d.query = B("query", "?"); d.fragment = B("fragment", "#"); d.search = function (a, b) { var c = this.query(a, b); return "string" === typeof c && c.length ? "?" + c : c }; d.hash = function (a, b) {
        var c =
        this.fragment(a, b); return "string" === typeof c && c.length ? "#" + c : c
    }; d.pathname = function (a, b) { if (void 0 === a || !0 === a) { var c = this._parts.path || (this._parts.hostname ? "/" : ""); return a ? e.decodePath(c) : c } this._parts.path = a ? e.recodePath(a) : "/"; this.build(!b); return this }; d.path = d.pathname; d.href = function (a, b) {
        var c; if (void 0 === a) return this.toString(); this._string = ""; this._parts = e._parts(); var f = a instanceof e, d = "object" === typeof a && (a.hostname || a.path || a.pathname); a.nodeName && (d = e.getDomAttribute(a), a = a[d] ||
        "", d = !1); !f && d && void 0 !== a.pathname && (a = a.toString()); if ("string" === typeof a || a instanceof String) this._parts = e.parse(String(a), this._parts); else if (f || d) for (c in f = f ? a._parts : a, f) q.call(this._parts, c) && (this._parts[c] = f[c]); else throw new TypeError("invalid input"); this.build(!b); return this
    }; d.is = function (a) {
        var b = !1, c = !1, f = !1, d = !1, g = !1, k = !1, l = !1, m = !this._parts.urn; this._parts.hostname && (m = !1, c = e.ip4_expression.test(this._parts.hostname), f = e.ip6_expression.test(this._parts.hostname), b = c || f, g = (d =
        !b) && t && t.has(this._parts.hostname), k = d && e.idn_expression.test(this._parts.hostname), l = d && e.punycode_expression.test(this._parts.hostname)); switch (a.toLowerCase()) { case "relative": return m; case "absolute": return !m; case "domain": case "name": return d; case "sld": return g; case "ip": return b; case "ip4": case "ipv4": case "inet4": return c; case "ip6": case "ipv6": case "inet6": return f; case "idn": return k; case "url": return !this._parts.urn; case "urn": return !!this._parts.urn; case "punycode": return l } return null
    };
    var G = d.protocol, H = d.port, I = d.hostname; d.protocol = function (a, b) { if (void 0 !== a && a && (a = a.replace(/:(\/\/)?$/, ""), !a.match(e.protocol_expression))) throw new TypeError('Protocol "' + a + "\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]"); return G.call(this, a, b) }; d.scheme = d.protocol; d.port = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 !== a && (0 === a && (a = null), a && (a += "", ":" === a.charAt(0) && (a = a.substring(1)), a.match(/[^0-9]/)))) throw new TypeError('Port "' + a + '" contains characters other than [0-9]');
        return H.call(this, a, b)
    }; d.hostname = function (a, b) { if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 !== a) { var c = {}; e.parseHost(a, c); a = c.hostname } return I.call(this, a, b) }; d.host = function (a, b) { if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 === a) return this._parts.hostname ? e.buildHost(this._parts) : ""; e.parseHost(a, this._parts); this.build(!b); return this }; d.authority = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 === a) return this._parts.hostname ? e.buildAuthority(this._parts) :
        ""; e.parseAuthority(a, this._parts); this.build(!b); return this
    }; d.userinfo = function (a, b) { if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 === a) { if (!this._parts.username) return ""; var c = e.buildUserinfo(this._parts); return c.substring(0, c.length - 1) } "@" !== a[a.length - 1] && (a += "@"); e.parseUserinfo(a, this._parts); this.build(!b); return this }; d.resource = function (a, b) {
        var c; if (void 0 === a) return this.path() + this.search() + this.hash(); c = e.parse(a); this._parts.path = c.path; this._parts.query = c.query; this._parts.fragment =
        c.fragment; this.build(!b); return this
    }; d.subdomain = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 === a) { if (!this._parts.hostname || this.is("IP")) return ""; var c = this._parts.hostname.length - this.domain().length - 1; return this._parts.hostname.substring(0, c) || "" } c = this._parts.hostname.length - this.domain().length; c = this._parts.hostname.substring(0, c); c = new RegExp("^" + r(c)); a && "." !== a.charAt(a.length - 1) && (a += "."); a && e.ensureValidHostname(a); this._parts.hostname = this._parts.hostname.replace(c,
        a); this.build(!b); return this
    }; d.domain = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this; "boolean" === typeof a && (b = a, a = void 0); if (void 0 === a) { if (!this._parts.hostname || this.is("IP")) return ""; var c = this._parts.hostname.match(/\./g); if (c && 2 > c.length) return this._parts.hostname; c = this._parts.hostname.length - this.tld(b).length - 1; c = this._parts.hostname.lastIndexOf(".", c - 1) + 1; return this._parts.hostname.substring(c) || "" } if (!a) throw new TypeError("cannot set domain empty"); e.ensureValidHostname(a);
        !this._parts.hostname || this.is("IP") ? this._parts.hostname = a : (c = new RegExp(r(this.domain()) + "$"), this._parts.hostname = this._parts.hostname.replace(c, a)); this.build(!b); return this
    }; d.tld = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this; "boolean" === typeof a && (b = a, a = void 0); if (void 0 === a) { if (!this._parts.hostname || this.is("IP")) return ""; var c = this._parts.hostname.lastIndexOf("."), c = this._parts.hostname.substring(c + 1); return !0 !== b && t && t.list[c.toLowerCase()] ? t.get(this._parts.hostname) || c : c } if (a) if (a.match(/[^a-zA-Z0-9-]/)) if (t &&
        t.is(a)) c = new RegExp(r(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(c, a); else throw new TypeError('TLD "' + a + '" contains characters other than [A-Z0-9]'); else { if (!this._parts.hostname || this.is("IP")) throw new ReferenceError("cannot set TLD on non-domain host"); c = new RegExp(r(this.tld()) + "$"); this._parts.hostname = this._parts.hostname.replace(c, a) } else throw new TypeError("cannot set TLD empty"); this.build(!b); return this
    }; d.directory = function (a, b) {
        if (this._parts.urn) return void 0 ===
        a ? "" : this; if (void 0 === a || !0 === a) { if (!this._parts.path && !this._parts.hostname) return ""; if ("/" === this._parts.path) return "/"; var c = this._parts.path.length - this.filename().length - 1, c = this._parts.path.substring(0, c) || (this._parts.hostname ? "/" : ""); return a ? e.decodePath(c) : c } c = this._parts.path.length - this.filename().length; c = this._parts.path.substring(0, c); c = new RegExp("^" + r(c)); this.is("relative") || (a || (a = "/"), "/" !== a.charAt(0) && (a = "/" + a)); a && "/" !== a.charAt(a.length - 1) && (a += "/"); a = e.recodePath(a); this._parts.path =
        this._parts.path.replace(c, a); this.build(!b); return this
    }; d.filename = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 === a || !0 === a) { if (!this._parts.path || "/" === this._parts.path) return ""; var c = this._parts.path.lastIndexOf("/"), c = this._parts.path.substring(c + 1); return a ? e.decodePathSegment(c) : c } c = !1; "/" === a.charAt(0) && (a = a.substring(1)); a.match(/\.?\//) && (c = !0); var f = new RegExp(r(this.filename()) + "$"); a = e.recodePath(a); this._parts.path = this._parts.path.replace(f, a); c ? this.normalizePath(b) :
        this.build(!b); return this
    }; d.suffix = function (a, b) {
        if (this._parts.urn) return void 0 === a ? "" : this; if (void 0 === a || !0 === a) { if (!this._parts.path || "/" === this._parts.path) return ""; var c = this.filename(), f = c.lastIndexOf("."); if (-1 === f) return ""; c = c.substring(f + 1); c = /^[a-z0-9%]+$/i.test(c) ? c : ""; return a ? e.decodePathSegment(c) : c } "." === a.charAt(0) && (a = a.substring(1)); if (c = this.suffix()) f = a ? new RegExp(r(c) + "$") : new RegExp(r("." + c) + "$"); else { if (!a) return this; this._parts.path += "." + e.recodePath(a) } f && (a = e.recodePath(a),
        this._parts.path = this._parts.path.replace(f, a)); this.build(!b); return this
    }; d.segment = function (a, b, c) {
        var e = this._parts.urn ? ":" : "/", d = this.path(), g = "/" === d.substring(0, 1), d = d.split(e); void 0 !== a && "number" !== typeof a && (c = b, b = a, a = void 0); if (void 0 !== a && "number" !== typeof a) throw Error('Bad segment "' + a + '", must be 0-based integer'); g && d.shift(); 0 > a && (a = Math.max(d.length + a, 0)); if (void 0 === b) return void 0 === a ? d : d[a]; if (null === a || void 0 === d[a]) if (l(b)) {
            d = []; a = 0; for (var k = b.length; a < k; a++) if (b[a].length ||
            d.length && d[d.length - 1].length) d.length && !d[d.length - 1].length && d.pop(), d.push(b[a])
        } else { if (b || "string" === typeof b) "" === d[d.length - 1] ? d[d.length - 1] = b : d.push(b) } else b ? d[a] = b : d.splice(a, 1); g && d.unshift(""); return this.path(d.join(e), c)
    }; d.segmentCoded = function (a, b, c) {
        var d, h; "number" !== typeof a && (c = b, b = a, a = void 0); if (void 0 === b) { a = this.segment(a, b, c); if (l(a)) for (d = 0, h = a.length; d < h; d++) a[d] = e.decode(a[d]); else a = void 0 !== a ? e.decode(a) : void 0; return a } if (l(b)) for (d = 0, h = b.length; d < h; d++) b[d] = e.decode(b[d]);
        else b = "string" === typeof b || b instanceof String ? e.encode(b) : b; return this.segment(a, b, c)
    }; var J = d.query; d.query = function (a, b) {
        if (!0 === a) return e.parseQuery(this._parts.query, this._parts.escapeQuerySpace); if ("function" === typeof a) { var c = e.parseQuery(this._parts.query, this._parts.escapeQuerySpace), d = a.call(this, c); this._parts.query = e.buildQuery(d || c, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace); this.build(!b); return this } return void 0 !== a && "string" !== typeof a ? (this._parts.query =
        e.buildQuery(a, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!b), this) : J.call(this, a, b)
    }; d.setQuery = function (a, b, c) {
        var d = e.parseQuery(this._parts.query, this._parts.escapeQuerySpace); if ("string" === typeof a || a instanceof String) d[a] = void 0 !== b ? b : null; else if ("object" === typeof a) for (var h in a) q.call(a, h) && (d[h] = a[h]); else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter"); this._parts.query = e.buildQuery(d, this._parts.duplicateQueryParameters,
        this._parts.escapeQuerySpace); "string" !== typeof a && (c = b); this.build(!c); return this
    }; d.addQuery = function (a, b, c) { var d = e.parseQuery(this._parts.query, this._parts.escapeQuerySpace); e.addQuery(d, a, void 0 === b ? null : b); this._parts.query = e.buildQuery(d, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace); "string" !== typeof a && (c = b); this.build(!c); return this }; d.removeQuery = function (a, b, c) {
        var d = e.parseQuery(this._parts.query, this._parts.escapeQuerySpace); e.removeQuery(d, a, b); this._parts.query =
        e.buildQuery(d, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace); "string" !== typeof a && (c = b); this.build(!c); return this
    }; d.hasQuery = function (a, b, c) { var d = e.parseQuery(this._parts.query, this._parts.escapeQuerySpace); return e.hasQuery(d, a, b, c) }; d.setSearch = d.setQuery; d.addSearch = d.addQuery; d.removeSearch = d.removeQuery; d.hasSearch = d.hasQuery; d.normalize = function () { return this._parts.urn ? this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build() };
    d.normalizeProtocol = function (a) { "string" === typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(), this.build(!a)); return this }; d.normalizeHostname = function (a) { this._parts.hostname && (this.is("IDN") && p ? this._parts.hostname = p.toASCII(this._parts.hostname) : this.is("IPv6") && u && (this._parts.hostname = u.best(this._parts.hostname)), this._parts.hostname = this._parts.hostname.toLowerCase(), this.build(!a)); return this }; d.normalizePort = function (a) {
        "string" === typeof this._parts.protocol &&
        this._parts.port === e.defaultPorts[this._parts.protocol] && (this._parts.port = null, this.build(!a)); return this
    }; d.normalizePath = function (a) {
        if (this._parts.urn || !this._parts.path || "/" === this._parts.path) return this; var b, c = this._parts.path, d = "", h, g; "/" !== c.charAt(0) && (b = !0, c = "/" + c); c = c.replace(/(\/(\.\/)+)|(\/\.$)/g, "/").replace(/\/{2,}/g, "/"); b && (d = c.substring(1).match(/^(\.\.\/)+/) || "") && (d = d[0]); for (; ;) {
            h = c.indexOf("/.."); if (-1 === h) break; else if (0 === h) { c = c.substring(3); continue } g = c.substring(0, h).lastIndexOf("/");
            -1 === g && (g = h); c = c.substring(0, g) + c.substring(h + 3)
        } b && this.is("relative") && (c = d + c.substring(1)); c = e.recodePath(c); this._parts.path = c; this.build(!a); return this
    }; d.normalizePathname = d.normalizePath; d.normalizeQuery = function (a) { "string" === typeof this._parts.query && (this._parts.query.length ? this.query(e.parseQuery(this._parts.query, this._parts.escapeQuerySpace)) : this._parts.query = null, this.build(!a)); return this }; d.normalizeFragment = function (a) {
        this._parts.fragment || (this._parts.fragment = null, this.build(!a));
        return this
    }; d.normalizeSearch = d.normalizeQuery; d.normalizeHash = d.normalizeFragment; d.iso8859 = function () { var a = e.encode, b = e.decode; e.encode = escape; e.decode = decodeURIComponent; this.normalize(); e.encode = a; e.decode = b; return this }; d.unicode = function () { var a = e.encode, b = e.decode; e.encode = y; e.decode = unescape; this.normalize(); e.encode = a; e.decode = b; return this }; d.readable = function () {
        var a = this.clone(); a.username("").password("").normalize(); var b = ""; a._parts.protocol && (b += a._parts.protocol + "://"); a._parts.hostname &&
        (a.is("punycode") && p ? (b += p.toUnicode(a._parts.hostname), a._parts.port && (b += ":" + a._parts.port)) : b += a.host()); a._parts.hostname && a._parts.path && "/" !== a._parts.path.charAt(0) && (b += "/"); b += a.path(!0); if (a._parts.query) { for (var c = "", d = 0, h = a._parts.query.split("&"), g = h.length; d < g; d++) { var k = (h[d] || "").split("="), c = c + ("&" + e.decodeQuery(k[0], this._parts.escapeQuerySpace).replace(/&/g, "%26")); void 0 !== k[1] && (c += "=" + e.decodeQuery(k[1], this._parts.escapeQuerySpace).replace(/&/g, "%26")) } b += "?" + c.substring(1) } return b +=
        e.decodeQuery(a.hash(), !0)
    }; d.absoluteTo = function (a) {
        var b = this.clone(), c = ["protocol", "username", "password", "hostname", "port"], d, h; if (this._parts.urn) throw Error("URNs do not have any generally defined hierarchical components"); a instanceof e || (a = new e(a)); b._parts.protocol || (b._parts.protocol = a._parts.protocol); if (this._parts.hostname) return b; for (d = 0; h = c[d]; d++) b._parts[h] = a._parts[h]; b._parts.path ? ".." === b._parts.path.substring(-2) && (b._parts.path += "/") : (b._parts.path = a._parts.path, b._parts.query ||
        (b._parts.query = a._parts.query)); "/" !== b.path().charAt(0) && (a = a.directory(), b._parts.path = (a ? a + "/" : "") + b._parts.path, b.normalizePath()); b.build(); return b
    }; d.relativeTo = function (a) {
        var b = this.clone().normalize(), c, d, h, g; if (b._parts.urn) throw Error("URNs do not have any generally defined hierarchical components"); a = (new e(a)).normalize(); c = b._parts; d = a._parts; h = b.path(); g = a.path(); if ("/" !== h.charAt(0)) throw Error("URI is already relative"); if ("/" !== g.charAt(0)) throw Error("Cannot calculate a URI relative to another relative URI");
        c.protocol === d.protocol && (c.protocol = null); if (c.username === d.username && c.password === d.password && null === c.protocol && null === c.username && null === c.password && c.hostname === d.hostname && c.port === d.port) c.hostname = null, c.port = null; else return b.build(); if (h === g) return c.path = "", b.build(); a = e.commonPath(b.path(), a.path()); if (!a) return b.build(); d = d.path.substring(a.length).replace(/[^\/]*$/, "").replace(/.*?\//g, "../"); c.path = d + c.path.substring(a.length); return b.build()
    }; d.equals = function (a) {
        var b = this.clone();
        a = new e(a); var c = {}, d = {}, h = {}, g; b.normalize(); a.normalize(); if (b.toString() === a.toString()) return !0; c = b.query(); d = a.query(); b.query(""); a.query(""); if (b.toString() !== a.toString() || c.length !== d.length) return !1; c = e.parseQuery(c, this._parts.escapeQuerySpace); d = e.parseQuery(d, this._parts.escapeQuerySpace); for (g in c) if (q.call(c, g)) { if (!l(c[g])) { if (c[g] !== d[g]) return !1 } else if (!A(c[g], d[g])) return !1; h[g] = !0 } for (g in d) if (q.call(d, g) && !h[g]) return !1; return !0
    }; d.duplicateQueryParameters = function (a) {
        this._parts.duplicateQueryParameters =
        !!a; return this
    }; d.escapeQuerySpace = function (a) { this._parts.escapeQuerySpace = !!a; return this }; return e
});

angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('en_US', {"&nbsp;":"&nbsp;","(mais utilizado)":"(most used)","(não disponível)":"(not available)","(obrigatório)":"(required)","* Texto atingiu o limite de 60 caracteres":"* The 60 characters limits has been reached","1. Página – altera a página sendo editada.":"1. Page - changes the page being edited.","1º Passo":"1st Step","2. Unidade – adiciona um conteúdo.":"2. Single - adds a single contente.","2º Passo":"2nd Step","3. Grupo – adiciona página predefinida.":"3. Group - adds a predefined page.","3º Passo":"3rd Step","4. Edição<img src=\"../images/help/ajuda_edicao.png\" alt=\"\">– passe o mouse sobre os conteúdos criados.":"4. Edit<img src=\"../images/help/ajuda_edicao.png\" alt=\"\"> - hover the mouse over created contents.","4º Passo":"4th Step","<b>Clique</b> no texto de rodapé e digite para alterá-lo.":"Scroll down to the page footer and click directly on the footer text to edit it.","<p>&nbsp;Jpeg, Gif ou Png</p>":"<p>&nbsp;Jpeg, Gif or Png</p>","<p>Ex.: nome do site ou negócio, </p>serviços, qualidades...":"<p>Ex.: your site or business name, </p>services, features...","<p>Jpeg, Gif ou Png</p>":"<p>Jpeg, Gif or Png</p>","A senha deve ter pelo menos 5 caracteres":"The password must be at least 5 characters long","A senha foi enviada para o seu e-mail.":"Password has been sent to your e-mail.","A url aqui...":"Url here...","ATENÇÃO":"ATTENTION","AVISO":"WARNING","Abrir":"Open","Abrir – ação para quando a imagem for clicada.":"Open - action to be executed when the image is clicked.","Adicionar":"Add","Adicionar e editar":"Add and edit","Administração":"Administration","Ajuda":"Help","Ajuda automática":"Show help","Alinhamento":"Alignment","Alinhamento do site":"Site alignment","Alterar senha":"Change password","Altura":"Height","Altura - opções de tamanhos.":"Height - size options.","Altura <img class=\"margin-img\" src=\"../images/help/ajuda_altura.png\" alt=\"\"> – altera o comprimento da página.":"Height <img class=\"margin-img\" src=\"../images/help/ajuda_altura.png\" alt=\"\"> - changes the page height.","Apagar o nome <strong>somente oculta</strong> o botão e sua página.":"Deleting the name <strong>only hides</strong> the button on your page.","Aparência do site":"Website look and feel","Aplicar":"Apply","Aprimorar":"Upgrade","Arquivo":"File","Arquivo selecionado:":"Selected file:","Assunto":"Subject","Avançar":"Next","Avançar um":"Foward","Bem vindo a WebJato":"Welcome to Webjato","Bordas":"Borders","Bordas - adiciona bordas laterais, superior e inferior.":"Borders - adds borders to the top, bottom and sides of the site.","Botão 1":"Button 1","Botão 2":"Button 2","Botão 3":"Button 3","Botão 4":"Button 4","Botão 5":"Button 5","Botão 6":"Button 6","Box":"Box","CONFIGURAÇÃO":"CONFIGURATION","CONTEÚDO":"CONTENT","Cabeçalho":"Header","Cada botão representa uma página.":"Each button represents a page.","Cancelar":"Cancel","Caracteres disponíveis:":"Available characters:","Centralizado":"Center","Centro":"Center","Clientes":"Clients","Clique diretamente sobre o texto de rodapé para editá-lo. Escreva uma breve descrição na parte inferior da página como por exemplo o nome site, endereço, etc.":"Click directly on the footer text to edit it. Write a short description at the bottom of the page such as the site name or address, etc.","Clique em":"Click on","Clique em exemplos ou escreva direto no campo para criar os botões do menu do seu site.":"Pick one of the predefined names or write your own to create the site buttons.","Clique no link abaixo e entre na Webjato utilizando seu e-mail e senha.":"Click the link below and sign in to Webjato using your email and password.","Clique para selecionar":"Click to select","Com exceção do 1º botão, você pode trocar a ordem de navegação.":"With the exception of the first button, you can change the order of navigation.","Combinação email/senha não reconhecida. Tente de novo.":"Email/password combination seems invalid. Try again.","Comece hoje":"Start today","Conectar endereço (www.seusite.com)":"Connect your domain (www.domain.com)","Configuração":"Configuration","Confirmar":"Confirm","Contato":"Contact","Conteúdo":"Content","Contorno":"Border","Contorno – adiciona contorno.":"Border - adds border.","Cor":"Color","Cor - altera a cor da página.":"Color - change page color.","Cor - cor do cabeçalho.":"Color - header color.","Cor - cor do fundo.":"Color - background color.","Cor - cor do rodapé.":"Color - footer color.","Cor – cor da linha.":"Color - line color.","Cor – cor do box.":"Color - box color.","Cortar imagem":"Crop image","Crie seu site em 4 etapas":"Create your site in 4 steps.","De repente lembrou? Entre aqui":"Remember your password? Click here","Defina a largura e altura do seu site.":"Define the site width and height.","Defina a posição do site na tela.":"Define the site position on the screen.","Depois clique em":"Click on","Desfazer":"Undo","Direita":"Right","Duplicar":"Duplicate","E-mail":"E-mail","E-mail inválido!":"Invalid e-mail!","E-mail – escreva o e-mail que receberá as mensagens.":"E-mail - enter the e-mail that will receive the messages.","Editar":"Edit","Editar texto":"Edit text","Efeitos":"Effects","Efeitos - cores e imagens predefinidas.":"Effects - predefined colors and images.","Em breve":"Coming soon","Email":"Email","Empresa":"Company","Endereço":"Address","Endereço – endereço completo do local.":"Address - enter the complete address.","Entre":"Sign in","Entre com um e-mail válido.":"Enter with a valid e-mail.","Enviando imagem...":"Uploading image...","Enviar para trás":"Send to back","Enviar senha":"Send password","Equipe":"Team","Escolher Imagem – para selecionar uma imagem no computador.":"Chose image - to select and send an image from your computer.","Escolher imagem":"Chose image","Escreva aqui...":"Type here...","Escreva um título para o seu site. Este título será exibido na janela do navegador, nos sites de busca e também nas listas de favoritos.":"Write a title for your site. This title will be displayed on the browser's window as well as in search engines and favorite lists.","Escrever":"Text","Escrever - para entrar com um texto como logotipo caso ainda não possua logo. Escreva o nome do site ou do negócio.":"Text - if you don't have a logo you can enter a text and use it as your logo.","Espessura":"Width","Espessura – altera a densidade.":"Width - changes the width.","Esqueci a Senha":"Forgot your password?","Esqueci a senha":"I forgot my password","Esquerda":"Left","Este e-mail está associado a uma conta de Facebook. Utilize o facebook para entrar no site.":"This e-mail is associated with a Facebook account. Use Facebook to sign in.","Este e-mail já está em uso, por favor tente de novo.":"This email is already in use, please try again.","Este e-mail não está cadastrado em nosso sistema.":"Could not find this e-mail in our system.","Este nome é inválido, pois ultrapassará o limite de 60 caracteres. Por favor tente de novo.":"This name is not valid because it will surpass the 60 characters limit. Please try again.","Estilo":"Style","Estilo – altera a forma.":"Style - changes the line type.","Excluir":"Delete","Excluir imagem":"Delete image","Excluir imagem de fundo":"Delete background image","Exibir seu site na web":"Publish your site on the internet","Fale conosco":"Contact us","Fechar":"Close","Ferramenta de duplicar":"Dupliate tool","Fixa":"Fixed","Fixo":"Fixed","Formulário":"Email form","Formulário de contato":"Contact form","Fotos":"Photos","Fundo":"Background","Galeria":"Gallery","Grande":"Large","Gravando":"Saving","Grupo":"Group","História":"History","Home":"HOme","Horizontal":"Horizontal","INÍCIO":"HOME","Idioma":"Language","Imagem":"Image","Imagem Link":"Linked image","Imagem ampliável":"Expandable image","Imagem com link":"Linked image","Imagem simples":"Simple image","Importar":"Import","Importar - para enviar uma imagem do seu computador e utilizar como cabeçalho.":"Import - to send an image from your computer and use it as header.","Importar - para enviar uma imagem do seu computador e utilizar como fundo.":"Import - to send an image from your computer and use it as background.","Importar - para enviar uma imagem do seu computador e utilizar como logo.":"Import - to send an image from your computer and use it as logo.","Inferior":"Bottom","Inscrever-se com Email":"Sign up using your email.","Inscrever-se com email":"Sign up with your email","Início":"Home","Já possui uma conta?":"Already have an account?","Largura":"Width","Largura e altura":"Width and height","Lateral":"Sides","Linha":"Line","Linha horizontal":"Horizontal line","Linha vertical":"Vertical line","Links":"Links","Livre <span class=\"marcatu\">(você determina a altura de cada página)</span>":"Free <span class=\"marcatu\">(you set the height of each page)</span>","Logo":"Logo","Manter imagem original":"Keep the original image","Mapa":"Map","Mapa bing":"Bing map","Mapa design especial":"Special design map","Mapa google":"Google map","Margem":"Margin","Margem - adiciona espaço no topo da página.":"Margin - add margin on the top of the page.","Mensagem":"Message","Menu":"Menu","Modelos":"Templates","Modelos - opções de menus predefinidos.":"Templates - predefined menu templates.","Mover":"Move","Mover junto":"Move together","Mover<img src=\"../images/help/ajuda_mover.png\" alt=\"\">– clique no ícone e arraste.":"Move<img src=\"../images/help/ajuda_mover.png\" alt=\"\">– click on the icon and drag it.","Médio":"Medium","Navegação":"Navigation","Nome":"Name","Nome e sobrenome":"Name and surname","Normal":"Normal","Notícias":"News","Novidades":"What's new?","Não":"No","Não possui uma conta? Inscreva-se!":"Don't have an account? Sign up!","O e-mail associado a esta conta do Facebook já se encontra cadastrado em nosso sistema com uma conta regular (não associada ao Facebook).":"The email associated with this Facebook account is already registered on our system with a regular account (not associated with Facebook).","O nome deve ter pelo menos 6 caracteres":"The name must have at least 6 characters","O recorte pontilhado representa a área do cabeçalho. Arraste a área pontilhada para mostrar apenas a melhor parte da foto.":"The highlighted area represents the header. Drag this area to display the best part of your photo.","Ordem":"Position","Ordem das páginas":"Pages positioning","Ordem – posiciona acima ou abaixo de outros conteúdos.":"Order - positions the content above or below other contents.","Para sair clique em":"To exit click on","Passo":"Step","Pequeno":"Small","Personalizar":"Customize","Personalizar - para alterar as cores dos elementos de menu.":"Customize - to changes colors of several menu parts.","Personalizar – para alterar as cores dos elementos.":"Customize - to change color of form elements.","Plano de fundo":"Background","Planos e preços":"Plans and prices","Política de Conteúdo":"Content policy","Pontilhada":"Dotted","Posição":"Position","Posição - posição do menu no site.":"Position - menu's position on the page.","Principal":"Main","Produtos":"Products","Publicar":"Publish","Página":"Page","Recortar":"Crop","Recuar um":"Previous","Rede Social":"Social network","Registro ou importar endereço":"Register or import na address","Repetição":"Repetition","Rodapé":"Footer","Sair":"Sign out","Senha":"Password","Serviços":"Services","Sim":"Yes","Soluções":"Solutions","Somente são aceitos arquivos de imagens nos formatos JPG, PNG e GIF.":"Only JPG, PNG or GIF images are accepted.","Sua sessão expirou :(":"Your session has expired","Tamanho":"Size","Tamanho – opções de dimensões.":"Size - size options.","Tamanho<img class=\"margin-img\" src=\"../images/help/ajuda_tamanho.png\" alt=\"\">– clique no canto inferior direito e arraste.":"Size<img class=\"margin-img\" src=\"../images/help/ajuda_tamanho.png\" alt=\"\">– click on the bottom right corner and drag.","Tela e navegação":"Screen and navigation","Termo de Uso":"Terms of use","Texto":"Text","Texto a escrever":"Text to write","Todas as páginas do seu site iniciam vazias e aqui você pode adicionar/editar conteúdos.":"All pages start empty and here you can add content to them.","Topo":"Top","Tracejada":"Dashed","Transparente":"Transparent","Trazer para frente":"Send to front","Trocar":"Swap","Título":"Title","Unidade":"Single","Url – endereço na web do vídeo.":"Url - video's address. Copy and paste it from the browser address bar.","VISUAL":"VISUALS","Vertical":"Vertical","Visual":"Visuals","Visualizar":"Preview","Visualizar projeto":"Preview project","Visualizar texto":"View text","Você pode alterar o nome do botão sempre que desejar.":"You can change the name of the button whenever you want.","Você pode recortar sua foto.<br>Arraste a ferramenta de recorte ou ajuste os cantos para mostrar apenas a melhor parte da imagem.":"You can crop your Picture.<br />Drag the crop tool or adjust the corners to show only the best part of your image.","Você pode retornar em qualquer etapa sempre que desejar.":"Your can Always return to a previous step whenever you want.","Voltar":"Previous","Vá para a <a href=\"index.html\" target=\"_top\">página de login</a> e entre novamente.":"Go to the <a href=\"index.html\" target=\"_top\">login page</a> and sign in.","Vídeo":"Video","Vídeo vimeo":"Vimeo","Vídeo youtube":"Youtube","Webjato - CONFIGURAÇÃO":"Webjato - CONFIGURATION","Webjato - CONTEÚDO":"Wejbato - CONTENT","Webjato - Sessão expirada":"Webjato - Your session has expired","Webjato - VISUAL":"Webjato - VISUALS","Webjato&nbsp;&nbsp;-&nbsp;&nbsp;INÍCIO&nbsp;&nbsp;":"Webjato&nbsp;&nbsp;-&nbsp;&nbsp;HOME&nbsp;&nbsp;","com":"with","exemplos:":"examples:","mostrar mais":"expand","ou":"or","para concluir e sair.":"to finish and exit.","para finalizar.":"to finish.","para ir ao próximo passo.":"and go to the next step.","para sair.":"to exit.","um site externo":"an external website","uma página interna":"an internal page","© 2012-2015 WebJato - Todos os direitos reservados.":"© 2012-2015 WebJato - All rights reserved.","É a marca que uma empresa possui para representá-la visualmente.":"It is the brand that a company has to represent it visually.","Ícones":"Icons","Ícones – habilite-o e escreva o endereço na web.":"Icons - enable an icon and enter the corresponding address."});
/* jshint +W100 */
}]);