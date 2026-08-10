var Ty=Object.defineProperty;var by=(r,e,t)=>e in r?Ty(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Ne=(r,e,t)=>by(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function Ay(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var bh={exports:{}},ha={},Ah={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function Cy(){if(u0)return St;u0=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function v(H){return H===null||typeof H!="object"?null:(H=m&&H[m]||H["@@iterator"],typeof H=="function"?H:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function S(H,se,Ue){this.props=H,this.context=se,this.refs=M,this.updater=Ue||y}S.prototype.isReactComponent={},S.prototype.setState=function(H,se){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,se,"setState")},S.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function x(){}x.prototype=S.prototype;function R(H,se,Ue){this.props=H,this.context=se,this.refs=M,this.updater=Ue||y}var T=R.prototype=new x;T.constructor=R,w(T,S.prototype),T.isPureReactComponent=!0;var E=Array.isArray,B=Object.prototype.hasOwnProperty,D={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function k(H,se,Ue){var ie,fe={},Me=null,ve=null;if(se!=null)for(ie in se.ref!==void 0&&(ve=se.ref),se.key!==void 0&&(Me=""+se.key),se)B.call(se,ie)&&!F.hasOwnProperty(ie)&&(fe[ie]=se[ie]);var Le=arguments.length-2;if(Le===1)fe.children=Ue;else if(1<Le){for(var Be=Array(Le),Xe=0;Xe<Le;Xe++)Be[Xe]=arguments[Xe+2];fe.children=Be}if(H&&H.defaultProps)for(ie in Le=H.defaultProps,Le)fe[ie]===void 0&&(fe[ie]=Le[ie]);return{$$typeof:r,type:H,key:Me,ref:ve,props:fe,_owner:D.current}}function L(H,se){return{$$typeof:r,type:H.type,key:se,ref:H.ref,props:H.props,_owner:H._owner}}function b(H){return typeof H=="object"&&H!==null&&H.$$typeof===r}function N(H){var se={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(Ue){return se[Ue]})}var Z=/\/+/g;function X(H,se){return typeof H=="object"&&H!==null&&H.key!=null?N(""+H.key):se.toString(36)}function te(H,se,Ue,ie,fe){var Me=typeof H;(Me==="undefined"||Me==="boolean")&&(H=null);var ve=!1;if(H===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(H.$$typeof){case r:case e:ve=!0}}if(ve)return ve=H,fe=fe(ve),H=ie===""?"."+X(ve,0):ie,E(fe)?(Ue="",H!=null&&(Ue=H.replace(Z,"$&/")+"/"),te(fe,se,Ue,"",function(Xe){return Xe})):fe!=null&&(b(fe)&&(fe=L(fe,Ue+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace(Z,"$&/")+"/")+H)),se.push(fe)),1;if(ve=0,ie=ie===""?".":ie+":",E(H))for(var Le=0;Le<H.length;Le++){Me=H[Le];var Be=ie+X(Me,Le);ve+=te(Me,se,Ue,Be,fe)}else if(Be=v(H),typeof Be=="function")for(H=Be.call(H),Le=0;!(Me=H.next()).done;)Me=Me.value,Be=ie+X(Me,Le++),ve+=te(Me,se,Ue,Be,fe);else if(Me==="object")throw se=String(H),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return ve}function q(H,se,Ue){if(H==null)return H;var ie=[],fe=0;return te(H,ie,"","",function(Me){return se.call(Ue,Me,fe++)}),ie}function Q(H){if(H._status===-1){var se=H._result;se=se(),se.then(function(Ue){(H._status===0||H._status===-1)&&(H._status=1,H._result=Ue)},function(Ue){(H._status===0||H._status===-1)&&(H._status=2,H._result=Ue)}),H._status===-1&&(H._status=0,H._result=se)}if(H._status===1)return H._result.default;throw H._result}var ce={current:null},G={transition:null},he={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:G,ReactCurrentOwner:D};function oe(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:q,forEach:function(H,se,Ue){q(H,function(){se.apply(this,arguments)},Ue)},count:function(H){var se=0;return q(H,function(){se++}),se},toArray:function(H){return q(H,function(se){return se})||[]},only:function(H){if(!b(H))throw Error("React.Children.only expected to receive a single React element child.");return H}},St.Component=S,St.Fragment=t,St.Profiler=o,St.PureComponent=R,St.StrictMode=i,St.Suspense=d,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,St.act=oe,St.cloneElement=function(H,se,Ue){if(H==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+H+".");var ie=w({},H.props),fe=H.key,Me=H.ref,ve=H._owner;if(se!=null){if(se.ref!==void 0&&(Me=se.ref,ve=D.current),se.key!==void 0&&(fe=""+se.key),H.type&&H.type.defaultProps)var Le=H.type.defaultProps;for(Be in se)B.call(se,Be)&&!F.hasOwnProperty(Be)&&(ie[Be]=se[Be]===void 0&&Le!==void 0?Le[Be]:se[Be])}var Be=arguments.length-2;if(Be===1)ie.children=Ue;else if(1<Be){Le=Array(Be);for(var Xe=0;Xe<Be;Xe++)Le[Xe]=arguments[Xe+2];ie.children=Le}return{$$typeof:r,type:H.type,key:fe,ref:Me,props:ie,_owner:ve}},St.createContext=function(H){return H={$$typeof:c,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},H.Provider={$$typeof:a,_context:H},H.Consumer=H},St.createElement=k,St.createFactory=function(H){var se=k.bind(null,H);return se.type=H,se},St.createRef=function(){return{current:null}},St.forwardRef=function(H){return{$$typeof:u,render:H}},St.isValidElement=b,St.lazy=function(H){return{$$typeof:p,_payload:{_status:-1,_result:H},_init:Q}},St.memo=function(H,se){return{$$typeof:f,type:H,compare:se===void 0?null:se}},St.startTransition=function(H){var se=G.transition;G.transition={};try{H()}finally{G.transition=se}},St.unstable_act=oe,St.useCallback=function(H,se){return ce.current.useCallback(H,se)},St.useContext=function(H){return ce.current.useContext(H)},St.useDebugValue=function(){},St.useDeferredValue=function(H){return ce.current.useDeferredValue(H)},St.useEffect=function(H,se){return ce.current.useEffect(H,se)},St.useId=function(){return ce.current.useId()},St.useImperativeHandle=function(H,se,Ue){return ce.current.useImperativeHandle(H,se,Ue)},St.useInsertionEffect=function(H,se){return ce.current.useInsertionEffect(H,se)},St.useLayoutEffect=function(H,se){return ce.current.useLayoutEffect(H,se)},St.useMemo=function(H,se){return ce.current.useMemo(H,se)},St.useReducer=function(H,se,Ue){return ce.current.useReducer(H,se,Ue)},St.useRef=function(H){return ce.current.useRef(H)},St.useState=function(H){return ce.current.useState(H)},St.useSyncExternalStore=function(H,se,Ue){return ce.current.useSyncExternalStore(H,se,Ue)},St.useTransition=function(){return ce.current.useTransition()},St.version="18.3.1",St}var h0;function df(){return h0||(h0=1,Ah.exports=Cy()),Ah.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function Ry(){if(d0)return ha;d0=1;var r=df(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,f){var p,m={},v=null,y=null;f!==void 0&&(v=""+f),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(y=d.ref);for(p in d)i.call(d,p)&&!a.hasOwnProperty(p)&&(m[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)m[p]===void 0&&(m[p]=d[p]);return{$$typeof:e,type:u,key:v,ref:y,props:m,_owner:o.current}}return ha.Fragment=t,ha.jsx=c,ha.jsxs=c,ha}var f0;function Py(){return f0||(f0=1,bh.exports=Ry()),bh.exports}var C=Py(),j=df();const Gg=Ay(j);var jl={},Ch={exports:{}},Hn={},Rh={exports:{}},Ph={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function Ly(){return p0||(p0=1,function(r){function e(G,he){var oe=G.length;G.push(he);e:for(;0<oe;){var H=oe-1>>>1,se=G[H];if(0<o(se,he))G[H]=he,G[oe]=se,oe=H;else break e}}function t(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var he=G[0],oe=G.pop();if(oe!==he){G[0]=oe;e:for(var H=0,se=G.length,Ue=se>>>1;H<Ue;){var ie=2*(H+1)-1,fe=G[ie],Me=ie+1,ve=G[Me];if(0>o(fe,oe))Me<se&&0>o(ve,fe)?(G[H]=ve,G[Me]=oe,H=Me):(G[H]=fe,G[ie]=oe,H=ie);else if(Me<se&&0>o(ve,oe))G[H]=ve,G[Me]=oe,H=Me;else break e}}return he}function o(G,he){var oe=G.sortIndex-he.sortIndex;return oe!==0?oe:G.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();r.unstable_now=function(){return c.now()-u}}var d=[],f=[],p=1,m=null,v=3,y=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(G){for(var he=t(f);he!==null;){if(he.callback===null)i(f);else if(he.startTime<=G)i(f),he.sortIndex=he.expirationTime,e(d,he);else break;he=t(f)}}function E(G){if(M=!1,T(G),!w)if(t(d)!==null)w=!0,Q(B);else{var he=t(f);he!==null&&ce(E,he.startTime-G)}}function B(G,he){w=!1,M&&(M=!1,x(k),k=-1),y=!0;var oe=v;try{for(T(he),m=t(d);m!==null&&(!(m.expirationTime>he)||G&&!N());){var H=m.callback;if(typeof H=="function"){m.callback=null,v=m.priorityLevel;var se=H(m.expirationTime<=he);he=r.unstable_now(),typeof se=="function"?m.callback=se:m===t(d)&&i(d),T(he)}else i(d);m=t(d)}if(m!==null)var Ue=!0;else{var ie=t(f);ie!==null&&ce(E,ie.startTime-he),Ue=!1}return Ue}finally{m=null,v=oe,y=!1}}var D=!1,F=null,k=-1,L=5,b=-1;function N(){return!(r.unstable_now()-b<L)}function Z(){if(F!==null){var G=r.unstable_now();b=G;var he=!0;try{he=F(!0,G)}finally{he?X():(D=!1,F=null)}}else D=!1}var X;if(typeof R=="function")X=function(){R(Z)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,q=te.port2;te.port1.onmessage=Z,X=function(){q.postMessage(null)}}else X=function(){S(Z,0)};function Q(G){F=G,D||(D=!0,X())}function ce(G,he){k=S(function(){G(r.unstable_now())},he)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_continueExecution=function(){w||y||(w=!0,Q(B))},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(d)},r.unstable_next=function(G){switch(v){case 1:case 2:case 3:var he=3;break;default:he=v}var oe=v;v=he;try{return G()}finally{v=oe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(G,he){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var oe=v;v=G;try{return he()}finally{v=oe}},r.unstable_scheduleCallback=function(G,he,oe){var H=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?H+oe:H):oe=H,G){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=oe+se,G={id:p++,callback:he,priorityLevel:G,startTime:oe,expirationTime:se,sortIndex:-1},oe>H?(G.sortIndex=oe,e(f,G),t(d)===null&&G===t(f)&&(M?(x(k),k=-1):M=!0,ce(E,oe-H))):(G.sortIndex=se,e(d,G),w||y||(w=!0,Q(B))),G},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(G){var he=v;return function(){var oe=v;v=he;try{return G.apply(this,arguments)}finally{v=oe}}}}(Ph)),Ph}var m0;function Ny(){return m0||(m0=1,Rh.exports=Ly()),Rh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function Iy(){if(g0)return Hn;g0=1;var r=df(),e=Ny();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(n,s){c(n,s),c(n+"Capture",s)}function c(n,s){for(o[n]=s,n=0;n<s.length;n++)i.add(s[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function v(n){return d.call(m,n)?!0:d.call(p,n)?!1:f.test(n)?m[n]=!0:(p[n]=!0,!1)}function y(n,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,s,l,h){if(s===null||typeof s>"u"||y(n,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function M(n,s,l,h,g,_,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=n,this.type=s,this.sanitizeURL=_,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];S[s]=new M(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(x,R);S[s]=new M(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(x,R);S[s]=new M(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(x,R);S[s]=new M(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function T(n,s,l,h){var g=S.hasOwnProperty(s)?S[s]:null;(g!==null?g.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(w(s,l,g,h)&&(l=null),h||g===null?v(s)&&(l===null?n.removeAttribute(s):n.setAttribute(s,""+l)):g.mustUseProperty?n[g.propertyName]=l===null?g.type===3?!1:"":l:(s=g.attributeName,h=g.attributeNamespace,l===null?n.removeAttribute(s):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,h?n.setAttributeNS(h,s,l):n.setAttribute(s,l))))}var E=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),D=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),N=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),G=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,H;function se(n){if(H===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);H=s&&s[1]||""}return`
`+H+n}var Ue=!1;function ie(n,s){if(!n||Ue)return"";Ue=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ae){var h=ae}Reflect.construct(n,[],s)}else{try{s.call()}catch(ae){h=ae}n.call(s.prototype)}else{try{throw Error()}catch(ae){h=ae}n()}}catch(ae){if(ae&&h&&typeof ae.stack=="string"){for(var g=ae.stack.split(`
`),_=h.stack.split(`
`),A=g.length-1,z=_.length-1;1<=A&&0<=z&&g[A]!==_[z];)z--;for(;1<=A&&0<=z;A--,z--)if(g[A]!==_[z]){if(A!==1||z!==1)do if(A--,z--,0>z||g[A]!==_[z]){var W=`
`+g[A].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=A&&0<=z);break}}}finally{Ue=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?se(n):""}function fe(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=ie(n.type,!1),n;case 11:return n=ie(n.type.render,!1),n;case 1:return n=ie(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case D:return"Portal";case L:return"Profiler";case k:return"StrictMode";case X:return"Suspense";case te:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case Z:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case q:return s=n.displayName||null,s!==null?s:Me(n.type)||"Memo";case Q:s=n._payload,n=n._init;try{return Me(n(s))}catch{}}return null}function ve(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(s);case 8:return s===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Xe(n){var s=Be(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),h=""+n[s];if(!n.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,_=l.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return g.call(this)},set:function(A){h=""+A,_.call(this,A)}}),Object.defineProperty(n,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(A){h=""+A},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function gt(n){n._valueTracker||(n._valueTracker=Xe(n))}function xe(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return n&&(h=Be(n)?n.checked?"true":"false":n.value),n=h,n!==l?(s.setValue(n),!0):!1}function be(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function O(n,s){var l=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Qe(n,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Le(s.value!=null?s.value:l),n._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function we(n,s){s=s.checked,s!=null&&T(n,"checked",s,!1)}function Ve(n,s){we(n,s);var l=Le(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(h==="submit"||h==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?it(n,s.type,l):s.hasOwnProperty("defaultValue")&&it(n,s.type,Le(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Re(n,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,l||s===n.value||(n.value=s),n.defaultValue=s}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function it(n,s,l){(s!=="number"||be(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Ee=Array.isArray;function U(n,s,l,h){if(n=n.options,s){s={};for(var g=0;g<l.length;g++)s["$"+l[g]]=!0;for(l=0;l<n.length;l++)g=s.hasOwnProperty("$"+n[l].value),n[l].selected!==g&&(n[l].selected=g),g&&h&&(n[l].defaultSelected=!0)}else{for(l=""+Le(l),s=null,g=0;g<n.length;g++){if(n[g].value===l){n[g].selected=!0,h&&(n[g].defaultSelected=!0);return}s!==null||n[g].disabled||(s=n[g])}s!==null&&(s.selected=!0)}}function P(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ne(n,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Ee(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}n._wrapperState={initialValue:Le(l)}}function pe(n,s){var l=Le(s.value),h=Le(s.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),s.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),h!=null&&(n.defaultValue=""+h)}function ye(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function me(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $e(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?me(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var De,We=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,g){MSApp.execUnsafeLocalFunction(function(){return n(s,l,h,g)})}:n}(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(De=De||document.createElement("div"),De.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=De.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function vt(n,s){if(s){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=s;return}}n.textContent=s}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ke=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(n){Ke.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Ae[s]=Ae[n]})});function st(n,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ae.hasOwnProperty(n)&&Ae[n]?(""+s).trim():s+"px"}function lt(n,s){n=n.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,g=st(l,s[l],h);l==="float"&&(l="cssFloat"),h?n.setProperty(l,g):n[l]=g}}var Ze=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _t(n,s){if(s){if(Ze[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ft(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dt=null;function K(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fe=null,de=null,ge=null;function He(n){if(n=Ko(n)){if(typeof Fe!="function")throw Error(t(280));var s=n.stateNode;s&&(s=ol(s),Fe(n.stateNode,n.type,s))}}function ze(n){de?ge?ge.push(n):ge=[n]:de=n}function pt(){if(de){var n=de,s=ge;if(ge=de=null,He(n),s)for(n=0;n<s.length;n++)He(s[n])}}function Ht(n,s){return n(s)}function ln(){}var At=!1;function Un(n,s,l){if(At)return n(s,l);At=!0;try{return Ht(n,s,l)}finally{At=!1,(de!==null||ge!==null)&&(ln(),pt())}}function Cn(n,s){var l=n.stateNode;if(l===null)return null;var h=ol(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(n=n.type,h=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!h;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ms=!1;if(u)try{var cr={};Object.defineProperty(cr,"passive",{get:function(){Ms=!0}}),window.addEventListener("test",cr,cr),window.removeEventListener("test",cr,cr)}catch{Ms=!1}function Bi(n,s,l,h,g,_,A,z,W){var ae=Array.prototype.slice.call(arguments,3);try{s.apply(l,ae)}catch(Se){this.onError(Se)}}var zi=!1,Hr=null,Vr=!1,ur=null,Ba={onError:function(n){zi=!0,Hr=n}};function Es(n,s,l,h,g,_,A,z,W){zi=!1,Hr=null,Bi.apply(Ba,arguments)}function za(n,s,l,h,g,_,A,z,W){if(Es.apply(this,arguments),zi){if(zi){var ae=Hr;zi=!1,Hr=null}else throw Error(t(198));Vr||(Vr=!0,ur=ae)}}function bi(n){var s=n,l=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,s.flags&4098&&(l=s.return),n=s.return;while(n)}return s.tag===3?l:null}function Ha(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Va(n){if(bi(n)!==n)throw Error(t(188))}function qc(n){var s=n.alternate;if(!s){if(s=bi(n),s===null)throw Error(t(188));return s!==n?null:n}for(var l=n,h=s;;){var g=l.return;if(g===null)break;var _=g.alternate;if(_===null){if(h=g.return,h!==null){l=h;continue}break}if(g.child===_.child){for(_=g.child;_;){if(_===l)return Va(g),n;if(_===h)return Va(g),s;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=g,h=_;else{for(var A=!1,z=g.child;z;){if(z===l){A=!0,l=g,h=_;break}if(z===h){A=!0,h=g,l=_;break}z=z.sibling}if(!A){for(z=_.child;z;){if(z===l){A=!0,l=_,h=g;break}if(z===h){A=!0,h=_,l=g;break}z=z.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:s}function Ga(n){return n=qc(n),n!==null?Wa(n):null}function Wa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Wa(n);if(s!==null)return s;n=n.sibling}return null}var I=e.unstable_scheduleCallback,J=e.unstable_cancelCallback,le=e.unstable_shouldYield,ue=e.unstable_requestPaint,$=e.unstable_now,Ce=e.unstable_getCurrentPriorityLevel,ke=e.unstable_ImmediatePriority,je=e.unstable_UserBlockingPriority,Ye=e.unstable_NormalPriority,ct=e.unstable_LowPriority,ut=e.unstable_IdlePriority,nt=null,mt=null;function Rt(n){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(nt,n,void 0,(n.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:rt,Wt=Math.log,bt=Math.LN2;function rt(n){return n>>>=0,n===0?32:31-(Wt(n)/bt|0)|0}var Jt=64,Tt=4194304;function vn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ui(n,s){var l=n.pendingLanes;if(l===0)return 0;var h=0,g=n.suspendedLanes,_=n.pingedLanes,A=l&268435455;if(A!==0){var z=A&~g;z!==0?h=vn(z):(_&=A,_!==0&&(h=vn(_)))}else A=l&~g,A!==0?h=vn(A):_!==0&&(h=vn(_));if(h===0)return 0;if(s!==0&&s!==h&&!(s&g)&&(g=h&-h,_=s&-s,g>=_||g===16&&(_&4194240)!==0))return s;if(h&4&&(h|=l&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=h;0<s;)l=31-Pt(s),g=1<<l,h|=n[l],s&=~g;return h}function Rn(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gr(n,s){for(var l=n.suspendedLanes,h=n.pingedLanes,g=n.expirationTimes,_=n.pendingLanes;0<_;){var A=31-Pt(_),z=1<<A,W=g[A];W===-1?(!(z&l)||z&h)&&(g[A]=Rn(z,s)):W<=s&&(n.expiredLanes|=z),_&=~z}}function Ft(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pn(){var n=Jt;return Jt<<=1,!(Jt&4194240)&&(Jt=64),n}function _n(n){for(var s=[],l=0;31>l;l++)s.push(n);return s}function tn(n,s,l){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Pt(s),n[s]=l}function Sn(n,s){var l=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var h=n.eventTimes;for(n=n.expirationTimes;0<l;){var g=31-Pt(l),_=1<<g;s[g]=0,h[g]=-1,n[g]=-1,l&=~_}}function Wr(n,s){var l=n.entangledLanes|=s;for(n=n.entanglements;l;){var h=31-Pt(l),g=1<<h;g&s|n[h]&s&&(n[h]|=s),l&=~g}}var Mt=0;function Vf(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Gf,Kc,Wf,jf,Xf,Zc=!1,ja=[],hr=null,dr=null,fr=null,Do=new Map,Uo=new Map,pr=[],$v="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $f(n,s){switch(n){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Do.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(s.pointerId)}}function Fo(n,s,l,h,g,_){return n===null||n.nativeEvent!==_?(n={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[g]},s!==null&&(s=Ko(s),s!==null&&Kc(s)),n):(n.eventSystemFlags|=h,s=n.targetContainers,g!==null&&s.indexOf(g)===-1&&s.push(g),n)}function Yv(n,s,l,h,g){switch(s){case"focusin":return hr=Fo(hr,n,s,l,h,g),!0;case"dragenter":return dr=Fo(dr,n,s,l,h,g),!0;case"mouseover":return fr=Fo(fr,n,s,l,h,g),!0;case"pointerover":var _=g.pointerId;return Do.set(_,Fo(Do.get(_)||null,n,s,l,h,g)),!0;case"gotpointercapture":return _=g.pointerId,Uo.set(_,Fo(Uo.get(_)||null,n,s,l,h,g)),!0}return!1}function Yf(n){var s=jr(n.target);if(s!==null){var l=bi(s);if(l!==null){if(s=l.tag,s===13){if(s=Ha(l),s!==null){n.blockedOn=s,Xf(n.priority,function(){Wf(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Xa(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var l=Qc(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var h=new l.constructor(l.type,l);Dt=h,l.target.dispatchEvent(h),Dt=null}else return s=Ko(l),s!==null&&Kc(s),n.blockedOn=l,!1;s.shift()}return!0}function qf(n,s,l){Xa(n)&&l.delete(s)}function qv(){Zc=!1,hr!==null&&Xa(hr)&&(hr=null),dr!==null&&Xa(dr)&&(dr=null),fr!==null&&Xa(fr)&&(fr=null),Do.forEach(qf),Uo.forEach(qf)}function ko(n,s){n.blockedOn===s&&(n.blockedOn=null,Zc||(Zc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,qv)))}function Oo(n){function s(g){return ko(g,n)}if(0<ja.length){ko(ja[0],n);for(var l=1;l<ja.length;l++){var h=ja[l];h.blockedOn===n&&(h.blockedOn=null)}}for(hr!==null&&ko(hr,n),dr!==null&&ko(dr,n),fr!==null&&ko(fr,n),Do.forEach(s),Uo.forEach(s),l=0;l<pr.length;l++)h=pr[l],h.blockedOn===n&&(h.blockedOn=null);for(;0<pr.length&&(l=pr[0],l.blockedOn===null);)Yf(l),l.blockedOn===null&&pr.shift()}var Ts=E.ReactCurrentBatchConfig,$a=!0;function Kv(n,s,l,h){var g=Mt,_=Ts.transition;Ts.transition=null;try{Mt=1,Jc(n,s,l,h)}finally{Mt=g,Ts.transition=_}}function Zv(n,s,l,h){var g=Mt,_=Ts.transition;Ts.transition=null;try{Mt=4,Jc(n,s,l,h)}finally{Mt=g,Ts.transition=_}}function Jc(n,s,l,h){if($a){var g=Qc(n,s,l,h);if(g===null)gu(n,s,h,Ya,l),$f(n,h);else if(Yv(g,n,s,l,h))h.stopPropagation();else if($f(n,h),s&4&&-1<$v.indexOf(n)){for(;g!==null;){var _=Ko(g);if(_!==null&&Gf(_),_=Qc(n,s,l,h),_===null&&gu(n,s,h,Ya,l),_===g)break;g=_}g!==null&&h.stopPropagation()}else gu(n,s,h,null,l)}}var Ya=null;function Qc(n,s,l,h){if(Ya=null,n=K(h),n=jr(n),n!==null)if(s=bi(n),s===null)n=null;else if(l=s.tag,l===13){if(n=Ha(s),n!==null)return n;n=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Ya=n,null}function Kf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ce()){case ke:return 1;case je:return 4;case Ye:case ct:return 16;case ut:return 536870912;default:return 16}default:return 16}}var mr=null,eu=null,qa=null;function Zf(){if(qa)return qa;var n,s=eu,l=s.length,h,g="value"in mr?mr.value:mr.textContent,_=g.length;for(n=0;n<l&&s[n]===g[n];n++);var A=l-n;for(h=1;h<=A&&s[l-h]===g[_-h];h++);return qa=g.slice(n,1<h?1-h:void 0)}function Ka(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Za(){return!0}function Jf(){return!1}function Xn(n){function s(l,h,g,_,A){this._reactName=l,this._targetInst=g,this.type=h,this.nativeEvent=_,this.target=A,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(l=n[z],this[z]=l?l(_):_[z]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Za:Jf,this.isPropagationStopped=Jf,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),s}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=Xn(bs),Bo=oe({},bs,{view:0,detail:0}),Jv=Xn(Bo),nu,iu,zo,Ja=oe({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==zo&&(zo&&n.type==="mousemove"?(nu=n.screenX-zo.screenX,iu=n.screenY-zo.screenY):iu=nu=0,zo=n),nu)},movementY:function(n){return"movementY"in n?n.movementY:iu}}),Qf=Xn(Ja),Qv=oe({},Ja,{dataTransfer:0}),ex=Xn(Qv),tx=oe({},Bo,{relatedTarget:0}),ru=Xn(tx),nx=oe({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),ix=Xn(nx),rx=oe({},bs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),sx=Xn(rx),ox=oe({},bs,{data:0}),ep=Xn(ox),ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ux(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=cx[n])?!!s[n]:!1}function su(){return ux}var hx=oe({},Bo,{key:function(n){if(n.key){var s=ax[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Ka(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?lx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(n){return n.type==="keypress"?Ka(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ka(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),dx=Xn(hx),fx=oe({},Ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=Xn(fx),px=oe({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),mx=Xn(px),gx=oe({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),vx=Xn(gx),xx=oe({},Ja,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),yx=Xn(xx),_x=[9,13,27,32],ou=u&&"CompositionEvent"in window,Ho=null;u&&"documentMode"in document&&(Ho=document.documentMode);var Sx=u&&"TextEvent"in window&&!Ho,np=u&&(!ou||Ho&&8<Ho&&11>=Ho),ip=" ",rp=!1;function sp(n,s){switch(n){case"keyup":return _x.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var As=!1;function wx(n,s){switch(n){case"compositionend":return op(s);case"keypress":return s.which!==32?null:(rp=!0,ip);case"textInput":return n=s.data,n===ip&&rp?null:n;default:return null}}function Mx(n,s){if(As)return n==="compositionend"||!ou&&sp(n,s)?(n=Zf(),qa=eu=mr=null,As=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return np&&s.locale!=="ko"?null:s.data;default:return null}}var Ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!Ex[n.type]:s==="textarea"}function lp(n,s,l,h){ze(h),s=il(s,"onChange"),0<s.length&&(l=new tu("onChange","change",null,l,h),n.push({event:l,listeners:s}))}var Vo=null,Go=null;function Tx(n){bp(n,0)}function Qa(n){var s=Ns(n);if(xe(s))return n}function bx(n,s){if(n==="change")return s}var cp=!1;if(u){var au;if(u){var lu="oninput"in document;if(!lu){var up=document.createElement("div");up.setAttribute("oninput","return;"),lu=typeof up.oninput=="function"}au=lu}else au=!1;cp=au&&(!document.documentMode||9<document.documentMode)}function hp(){Vo&&(Vo.detachEvent("onpropertychange",dp),Go=Vo=null)}function dp(n){if(n.propertyName==="value"&&Qa(Go)){var s=[];lp(s,Go,n,K(n)),Un(Tx,s)}}function Ax(n,s,l){n==="focusin"?(hp(),Vo=s,Go=l,Vo.attachEvent("onpropertychange",dp)):n==="focusout"&&hp()}function Cx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Qa(Go)}function Rx(n,s){if(n==="click")return Qa(s)}function Px(n,s){if(n==="input"||n==="change")return Qa(s)}function Lx(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var hi=typeof Object.is=="function"?Object.is:Lx;function Wo(n,s){if(hi(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var l=Object.keys(n),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var g=l[h];if(!d.call(s,g)||!hi(n[g],s[g]))return!1}return!0}function fp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function pp(n,s){var l=fp(n);n=0;for(var h;l;){if(l.nodeType===3){if(h=n+l.textContent.length,n<=s&&h>=s)return{node:l,offset:s-n};n=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=fp(l)}}function mp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?mp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function gp(){for(var n=window,s=be();s instanceof n.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)n=s.contentWindow;else break;s=be(n.document)}return s}function cu(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function Nx(n){var s=gp(),l=n.focusedElem,h=n.selectionRange;if(s!==l&&l&&l.ownerDocument&&mp(l.ownerDocument.documentElement,l)){if(h!==null&&cu(l)){if(s=h.start,n=h.end,n===void 0&&(n=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(n,l.value.length);else if(n=(s=l.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var g=l.textContent.length,_=Math.min(h.start,g);h=h.end===void 0?_:Math.min(h.end,g),!n.extend&&_>h&&(g=h,h=_,_=g),g=pp(l,_);var A=pp(l,h);g&&A&&(n.rangeCount!==1||n.anchorNode!==g.node||n.anchorOffset!==g.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(g.node,g.offset),n.removeAllRanges(),_>h?(n.addRange(s),n.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),n.addRange(s)))}}for(s=[],n=l;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)n=s[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ix=u&&"documentMode"in document&&11>=document.documentMode,Cs=null,uu=null,jo=null,hu=!1;function vp(n,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;hu||Cs==null||Cs!==be(h)||(h=Cs,"selectionStart"in h&&cu(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),jo&&Wo(jo,h)||(jo=h,h=il(uu,"onSelect"),0<h.length&&(s=new tu("onSelect","select",null,s,l),n.push({event:s,listeners:h}),s.target=Cs)))}function el(n,s){var l={};return l[n.toLowerCase()]=s.toLowerCase(),l["Webkit"+n]="webkit"+s,l["Moz"+n]="moz"+s,l}var Rs={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},du={},xp={};u&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function tl(n){if(du[n])return du[n];if(!Rs[n])return n;var s=Rs[n],l;for(l in s)if(s.hasOwnProperty(l)&&l in xp)return du[n]=s[l];return n}var yp=tl("animationend"),_p=tl("animationiteration"),Sp=tl("animationstart"),wp=tl("transitionend"),Mp=new Map,Ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(n,s){Mp.set(n,s),a(s,[n])}for(var fu=0;fu<Ep.length;fu++){var pu=Ep[fu],Dx=pu.toLowerCase(),Ux=pu[0].toUpperCase()+pu.slice(1);gr(Dx,"on"+Ux)}gr(yp,"onAnimationEnd"),gr(_p,"onAnimationIteration"),gr(Sp,"onAnimationStart"),gr("dblclick","onDoubleClick"),gr("focusin","onFocus"),gr("focusout","onBlur"),gr(wp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function Tp(n,s,l){var h=n.type||"unknown-event";n.currentTarget=l,za(h,s,void 0,n),n.currentTarget=null}function bp(n,s){s=(s&4)!==0;for(var l=0;l<n.length;l++){var h=n[l],g=h.event;h=h.listeners;e:{var _=void 0;if(s)for(var A=h.length-1;0<=A;A--){var z=h[A],W=z.instance,ae=z.currentTarget;if(z=z.listener,W!==_&&g.isPropagationStopped())break e;Tp(g,z,ae),_=W}else for(A=0;A<h.length;A++){if(z=h[A],W=z.instance,ae=z.currentTarget,z=z.listener,W!==_&&g.isPropagationStopped())break e;Tp(g,z,ae),_=W}}}if(Vr)throw n=ur,Vr=!1,ur=null,n}function Vt(n,s){var l=s[wu];l===void 0&&(l=s[wu]=new Set);var h=n+"__bubble";l.has(h)||(Ap(s,n,2,!1),l.add(h))}function mu(n,s,l){var h=0;s&&(h|=4),Ap(l,n,h,s)}var nl="_reactListening"+Math.random().toString(36).slice(2);function $o(n){if(!n[nl]){n[nl]=!0,i.forEach(function(l){l!=="selectionchange"&&(Fx.has(l)||mu(l,!1,n),mu(l,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[nl]||(s[nl]=!0,mu("selectionchange",!1,s))}}function Ap(n,s,l,h){switch(Kf(s)){case 1:var g=Kv;break;case 4:g=Zv;break;default:g=Jc}l=g.bind(null,s,l,n),g=void 0,!Ms||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(g=!0),h?g!==void 0?n.addEventListener(s,l,{capture:!0,passive:g}):n.addEventListener(s,l,!0):g!==void 0?n.addEventListener(s,l,{passive:g}):n.addEventListener(s,l,!1)}function gu(n,s,l,h,g){var _=h;if(!(s&1)&&!(s&2)&&h!==null)e:for(;;){if(h===null)return;var A=h.tag;if(A===3||A===4){var z=h.stateNode.containerInfo;if(z===g||z.nodeType===8&&z.parentNode===g)break;if(A===4)for(A=h.return;A!==null;){var W=A.tag;if((W===3||W===4)&&(W=A.stateNode.containerInfo,W===g||W.nodeType===8&&W.parentNode===g))return;A=A.return}for(;z!==null;){if(A=jr(z),A===null)return;if(W=A.tag,W===5||W===6){h=_=A;continue e}z=z.parentNode}}h=h.return}Un(function(){var ae=_,Se=K(l),Te=[];e:{var _e=Mp.get(n);if(_e!==void 0){var Ge=tu,Je=n;switch(n){case"keypress":if(Ka(l)===0)break e;case"keydown":case"keyup":Ge=dx;break;case"focusin":Je="focus",Ge=ru;break;case"focusout":Je="blur",Ge=ru;break;case"beforeblur":case"afterblur":Ge=ru;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=mx;break;case yp:case _p:case Sp:Ge=ix;break;case wp:Ge=vx;break;case"scroll":Ge=Jv;break;case"wheel":Ge=yx;break;case"copy":case"cut":case"paste":Ge=sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=tp}var et=(s&4)!==0,nn=!et&&n==="scroll",ee=et?_e!==null?_e+"Capture":null:_e;et=[];for(var Y=ae,re;Y!==null;){re=Y;var Pe=re.stateNode;if(re.tag===5&&Pe!==null&&(re=Pe,ee!==null&&(Pe=Cn(Y,ee),Pe!=null&&et.push(Yo(Y,Pe,re)))),nn)break;Y=Y.return}0<et.length&&(_e=new Ge(_e,Je,null,l,Se),Te.push({event:_e,listeners:et}))}}if(!(s&7)){e:{if(_e=n==="mouseover"||n==="pointerover",Ge=n==="mouseout"||n==="pointerout",_e&&l!==Dt&&(Je=l.relatedTarget||l.fromElement)&&(jr(Je)||Je[Hi]))break e;if((Ge||_e)&&(_e=Se.window===Se?Se:(_e=Se.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ge?(Je=l.relatedTarget||l.toElement,Ge=ae,Je=Je?jr(Je):null,Je!==null&&(nn=bi(Je),Je!==nn||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(Ge=null,Je=ae),Ge!==Je)){if(et=Qf,Pe="onMouseLeave",ee="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(et=tp,Pe="onPointerLeave",ee="onPointerEnter",Y="pointer"),nn=Ge==null?_e:Ns(Ge),re=Je==null?_e:Ns(Je),_e=new et(Pe,Y+"leave",Ge,l,Se),_e.target=nn,_e.relatedTarget=re,Pe=null,jr(Se)===ae&&(et=new et(ee,Y+"enter",Je,l,Se),et.target=re,et.relatedTarget=nn,Pe=et),nn=Pe,Ge&&Je)t:{for(et=Ge,ee=Je,Y=0,re=et;re;re=Ps(re))Y++;for(re=0,Pe=ee;Pe;Pe=Ps(Pe))re++;for(;0<Y-re;)et=Ps(et),Y--;for(;0<re-Y;)ee=Ps(ee),re--;for(;Y--;){if(et===ee||ee!==null&&et===ee.alternate)break t;et=Ps(et),ee=Ps(ee)}et=null}else et=null;Ge!==null&&Cp(Te,_e,Ge,et,!1),Je!==null&&nn!==null&&Cp(Te,nn,Je,et,!0)}}e:{if(_e=ae?Ns(ae):window,Ge=_e.nodeName&&_e.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&_e.type==="file")var tt=bx;else if(ap(_e))if(cp)tt=Px;else{tt=Cx;var ot=Ax}else(Ge=_e.nodeName)&&Ge.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(tt=Rx);if(tt&&(tt=tt(n,ae))){lp(Te,tt,l,Se);break e}ot&&ot(n,_e,ae),n==="focusout"&&(ot=_e._wrapperState)&&ot.controlled&&_e.type==="number"&&it(_e,"number",_e.value)}switch(ot=ae?Ns(ae):window,n){case"focusin":(ap(ot)||ot.contentEditable==="true")&&(Cs=ot,uu=ae,jo=null);break;case"focusout":jo=uu=Cs=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,vp(Te,l,Se);break;case"selectionchange":if(Ix)break;case"keydown":case"keyup":vp(Te,l,Se)}var at;if(ou)e:{switch(n){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else As?sp(n,l)&&(ht="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ht="onCompositionStart");ht&&(np&&l.locale!=="ko"&&(As||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&As&&(at=Zf()):(mr=Se,eu="value"in mr?mr.value:mr.textContent,As=!0)),ot=il(ae,ht),0<ot.length&&(ht=new ep(ht,n,null,l,Se),Te.push({event:ht,listeners:ot}),at?ht.data=at:(at=op(l),at!==null&&(ht.data=at)))),(at=Sx?wx(n,l):Mx(n,l))&&(ae=il(ae,"onBeforeInput"),0<ae.length&&(Se=new ep("onBeforeInput","beforeinput",null,l,Se),Te.push({event:Se,listeners:ae}),Se.data=at))}bp(Te,s)})}function Yo(n,s,l){return{instance:n,listener:s,currentTarget:l}}function il(n,s){for(var l=s+"Capture",h=[];n!==null;){var g=n,_=g.stateNode;g.tag===5&&_!==null&&(g=_,_=Cn(n,l),_!=null&&h.unshift(Yo(n,_,g)),_=Cn(n,s),_!=null&&h.push(Yo(n,_,g))),n=n.return}return h}function Ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Cp(n,s,l,h,g){for(var _=s._reactName,A=[];l!==null&&l!==h;){var z=l,W=z.alternate,ae=z.stateNode;if(W!==null&&W===h)break;z.tag===5&&ae!==null&&(z=ae,g?(W=Cn(l,_),W!=null&&A.unshift(Yo(l,W,z))):g||(W=Cn(l,_),W!=null&&A.push(Yo(l,W,z)))),l=l.return}A.length!==0&&n.push({event:s,listeners:A})}var kx=/\r\n?/g,Ox=/\u0000|\uFFFD/g;function Rp(n){return(typeof n=="string"?n:""+n).replace(kx,`
`).replace(Ox,"")}function rl(n,s,l){if(s=Rp(s),Rp(n)!==s&&l)throw Error(t(425))}function sl(){}var vu=null,xu=null;function yu(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var _u=typeof setTimeout=="function"?setTimeout:void 0,Bx=typeof clearTimeout=="function"?clearTimeout:void 0,Pp=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof Pp<"u"?function(n){return Pp.resolve(null).then(n).catch(Hx)}:_u;function Hx(n){setTimeout(function(){throw n})}function Su(n,s){var l=s,h=0;do{var g=l.nextSibling;if(n.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(h===0){n.removeChild(g),Oo(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=g}while(l);Oo(s)}function vr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Lp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return n;s--}else l==="/$"&&s++}n=n.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Ai="__reactFiber$"+Ls,qo="__reactProps$"+Ls,Hi="__reactContainer$"+Ls,wu="__reactEvents$"+Ls,Vx="__reactListeners$"+Ls,Gx="__reactHandles$"+Ls;function jr(n){var s=n[Ai];if(s)return s;for(var l=n.parentNode;l;){if(s=l[Hi]||l[Ai]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(n=Lp(n);n!==null;){if(l=n[Ai])return l;n=Lp(n)}return s}n=l,l=n.parentNode}return null}function Ko(n){return n=n[Ai]||n[Hi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ns(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ol(n){return n[qo]||null}var Mu=[],Is=-1;function xr(n){return{current:n}}function Gt(n){0>Is||(n.current=Mu[Is],Mu[Is]=null,Is--)}function zt(n,s){Is++,Mu[Is]=n.current,n.current=s}var yr={},wn=xr(yr),Fn=xr(!1),Xr=yr;function Ds(n,s){var l=n.type.contextTypes;if(!l)return yr;var h=n.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var g={},_;for(_ in l)g[_]=s[_];return h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=g),g}function kn(n){return n=n.childContextTypes,n!=null}function al(){Gt(Fn),Gt(wn)}function Np(n,s,l){if(wn.current!==yr)throw Error(t(168));zt(wn,s),zt(Fn,l)}function Ip(n,s,l){var h=n.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var g in h)if(!(g in s))throw Error(t(108,ve(n)||"Unknown",g));return oe({},l,h)}function ll(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||yr,Xr=wn.current,zt(wn,n),zt(Fn,Fn.current),!0}function Dp(n,s,l){var h=n.stateNode;if(!h)throw Error(t(169));l?(n=Ip(n,s,Xr),h.__reactInternalMemoizedMergedChildContext=n,Gt(Fn),Gt(wn),zt(wn,n)):Gt(Fn),zt(Fn,l)}var Vi=null,cl=!1,Eu=!1;function Up(n){Vi===null?Vi=[n]:Vi.push(n)}function Wx(n){cl=!0,Up(n)}function _r(){if(!Eu&&Vi!==null){Eu=!0;var n=0,s=Mt;try{var l=Vi;for(Mt=1;n<l.length;n++){var h=l[n];do h=h(!0);while(h!==null)}Vi=null,cl=!1}catch(g){throw Vi!==null&&(Vi=Vi.slice(n+1)),I(ke,_r),g}finally{Mt=s,Eu=!1}}return null}var Us=[],Fs=0,ul=null,hl=0,ti=[],ni=0,$r=null,Gi=1,Wi="";function Yr(n,s){Us[Fs++]=hl,Us[Fs++]=ul,ul=n,hl=s}function Fp(n,s,l){ti[ni++]=Gi,ti[ni++]=Wi,ti[ni++]=$r,$r=n;var h=Gi;n=Wi;var g=32-Pt(h)-1;h&=~(1<<g),l+=1;var _=32-Pt(s)+g;if(30<_){var A=g-g%5;_=(h&(1<<A)-1).toString(32),h>>=A,g-=A,Gi=1<<32-Pt(s)+g|l<<g|h,Wi=_+n}else Gi=1<<_|l<<g|h,Wi=n}function Tu(n){n.return!==null&&(Yr(n,1),Fp(n,1,0))}function bu(n){for(;n===ul;)ul=Us[--Fs],Us[Fs]=null,hl=Us[--Fs],Us[Fs]=null;for(;n===$r;)$r=ti[--ni],ti[ni]=null,Wi=ti[--ni],ti[ni]=null,Gi=ti[--ni],ti[ni]=null}var $n=null,Yn=null,jt=!1,di=null;function kp(n,s){var l=oi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=n,s=n.deletions,s===null?(n.deletions=[l],n.flags|=16):s.push(l)}function Op(n,s){switch(n.tag){case 5:var l=n.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,$n=n,Yn=vr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,$n=n,Yn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=$r!==null?{id:Gi,overflow:Wi}:null,n.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=oi(18,null,null,0),l.stateNode=s,l.return=n,n.child=l,$n=n,Yn=null,!0):!1;default:return!1}}function Au(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Cu(n){if(jt){var s=Yn;if(s){var l=s;if(!Op(n,s)){if(Au(n))throw Error(t(418));s=vr(l.nextSibling);var h=$n;s&&Op(n,s)?kp(h,l):(n.flags=n.flags&-4097|2,jt=!1,$n=n)}}else{if(Au(n))throw Error(t(418));n.flags=n.flags&-4097|2,jt=!1,$n=n}}}function Bp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;$n=n}function dl(n){if(n!==$n)return!1;if(!jt)return Bp(n),jt=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!yu(n.type,n.memoizedProps)),s&&(s=Yn)){if(Au(n))throw zp(),Error(t(418));for(;s;)kp(n,s),s=vr(s.nextSibling)}if(Bp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(s===0){Yn=vr(n.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}n=n.nextSibling}Yn=null}}else Yn=$n?vr(n.stateNode.nextSibling):null;return!0}function zp(){for(var n=Yn;n;)n=vr(n.nextSibling)}function ks(){Yn=$n=null,jt=!1}function Ru(n){di===null?di=[n]:di.push(n)}var jx=E.ReactCurrentBatchConfig;function Zo(n,s,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,n));var g=h,_=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(A){var z=g.refs;A===null?delete z[_]:z[_]=A},s._stringRef=_,s)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function fl(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function Hp(n){var s=n._init;return s(n._payload)}function Vp(n){function s(ee,Y){if(n){var re=ee.deletions;re===null?(ee.deletions=[Y],ee.flags|=16):re.push(Y)}}function l(ee,Y){if(!n)return null;for(;Y!==null;)s(ee,Y),Y=Y.sibling;return null}function h(ee,Y){for(ee=new Map;Y!==null;)Y.key!==null?ee.set(Y.key,Y):ee.set(Y.index,Y),Y=Y.sibling;return ee}function g(ee,Y){return ee=Cr(ee,Y),ee.index=0,ee.sibling=null,ee}function _(ee,Y,re){return ee.index=re,n?(re=ee.alternate,re!==null?(re=re.index,re<Y?(ee.flags|=2,Y):re):(ee.flags|=2,Y)):(ee.flags|=1048576,Y)}function A(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function z(ee,Y,re,Pe){return Y===null||Y.tag!==6?(Y=_h(re,ee.mode,Pe),Y.return=ee,Y):(Y=g(Y,re),Y.return=ee,Y)}function W(ee,Y,re,Pe){var tt=re.type;return tt===F?Se(ee,Y,re.props.children,Pe,re.key):Y!==null&&(Y.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===Q&&Hp(tt)===Y.type)?(Pe=g(Y,re.props),Pe.ref=Zo(ee,Y,re),Pe.return=ee,Pe):(Pe=kl(re.type,re.key,re.props,null,ee.mode,Pe),Pe.ref=Zo(ee,Y,re),Pe.return=ee,Pe)}function ae(ee,Y,re,Pe){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==re.containerInfo||Y.stateNode.implementation!==re.implementation?(Y=Sh(re,ee.mode,Pe),Y.return=ee,Y):(Y=g(Y,re.children||[]),Y.return=ee,Y)}function Se(ee,Y,re,Pe,tt){return Y===null||Y.tag!==7?(Y=ns(re,ee.mode,Pe,tt),Y.return=ee,Y):(Y=g(Y,re),Y.return=ee,Y)}function Te(ee,Y,re){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=_h(""+Y,ee.mode,re),Y.return=ee,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case B:return re=kl(Y.type,Y.key,Y.props,null,ee.mode,re),re.ref=Zo(ee,null,Y),re.return=ee,re;case D:return Y=Sh(Y,ee.mode,re),Y.return=ee,Y;case Q:var Pe=Y._init;return Te(ee,Pe(Y._payload),re)}if(Ee(Y)||he(Y))return Y=ns(Y,ee.mode,re,null),Y.return=ee,Y;fl(ee,Y)}return null}function _e(ee,Y,re,Pe){var tt=Y!==null?Y.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return tt!==null?null:z(ee,Y,""+re,Pe);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case B:return re.key===tt?W(ee,Y,re,Pe):null;case D:return re.key===tt?ae(ee,Y,re,Pe):null;case Q:return tt=re._init,_e(ee,Y,tt(re._payload),Pe)}if(Ee(re)||he(re))return tt!==null?null:Se(ee,Y,re,Pe,null);fl(ee,re)}return null}function Ge(ee,Y,re,Pe,tt){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return ee=ee.get(re)||null,z(Y,ee,""+Pe,tt);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case B:return ee=ee.get(Pe.key===null?re:Pe.key)||null,W(Y,ee,Pe,tt);case D:return ee=ee.get(Pe.key===null?re:Pe.key)||null,ae(Y,ee,Pe,tt);case Q:var ot=Pe._init;return Ge(ee,Y,re,ot(Pe._payload),tt)}if(Ee(Pe)||he(Pe))return ee=ee.get(re)||null,Se(Y,ee,Pe,tt,null);fl(Y,Pe)}return null}function Je(ee,Y,re,Pe){for(var tt=null,ot=null,at=Y,ht=Y=0,mn=null;at!==null&&ht<re.length;ht++){at.index>ht?(mn=at,at=null):mn=at.sibling;var Lt=_e(ee,at,re[ht],Pe);if(Lt===null){at===null&&(at=mn);break}n&&at&&Lt.alternate===null&&s(ee,at),Y=_(Lt,Y,ht),ot===null?tt=Lt:ot.sibling=Lt,ot=Lt,at=mn}if(ht===re.length)return l(ee,at),jt&&Yr(ee,ht),tt;if(at===null){for(;ht<re.length;ht++)at=Te(ee,re[ht],Pe),at!==null&&(Y=_(at,Y,ht),ot===null?tt=at:ot.sibling=at,ot=at);return jt&&Yr(ee,ht),tt}for(at=h(ee,at);ht<re.length;ht++)mn=Ge(at,ee,ht,re[ht],Pe),mn!==null&&(n&&mn.alternate!==null&&at.delete(mn.key===null?ht:mn.key),Y=_(mn,Y,ht),ot===null?tt=mn:ot.sibling=mn,ot=mn);return n&&at.forEach(function(Rr){return s(ee,Rr)}),jt&&Yr(ee,ht),tt}function et(ee,Y,re,Pe){var tt=he(re);if(typeof tt!="function")throw Error(t(150));if(re=tt.call(re),re==null)throw Error(t(151));for(var ot=tt=null,at=Y,ht=Y=0,mn=null,Lt=re.next();at!==null&&!Lt.done;ht++,Lt=re.next()){at.index>ht?(mn=at,at=null):mn=at.sibling;var Rr=_e(ee,at,Lt.value,Pe);if(Rr===null){at===null&&(at=mn);break}n&&at&&Rr.alternate===null&&s(ee,at),Y=_(Rr,Y,ht),ot===null?tt=Rr:ot.sibling=Rr,ot=Rr,at=mn}if(Lt.done)return l(ee,at),jt&&Yr(ee,ht),tt;if(at===null){for(;!Lt.done;ht++,Lt=re.next())Lt=Te(ee,Lt.value,Pe),Lt!==null&&(Y=_(Lt,Y,ht),ot===null?tt=Lt:ot.sibling=Lt,ot=Lt);return jt&&Yr(ee,ht),tt}for(at=h(ee,at);!Lt.done;ht++,Lt=re.next())Lt=Ge(at,ee,ht,Lt.value,Pe),Lt!==null&&(n&&Lt.alternate!==null&&at.delete(Lt.key===null?ht:Lt.key),Y=_(Lt,Y,ht),ot===null?tt=Lt:ot.sibling=Lt,ot=Lt);return n&&at.forEach(function(Ey){return s(ee,Ey)}),jt&&Yr(ee,ht),tt}function nn(ee,Y,re,Pe){if(typeof re=="object"&&re!==null&&re.type===F&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case B:e:{for(var tt=re.key,ot=Y;ot!==null;){if(ot.key===tt){if(tt=re.type,tt===F){if(ot.tag===7){l(ee,ot.sibling),Y=g(ot,re.props.children),Y.return=ee,ee=Y;break e}}else if(ot.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===Q&&Hp(tt)===ot.type){l(ee,ot.sibling),Y=g(ot,re.props),Y.ref=Zo(ee,ot,re),Y.return=ee,ee=Y;break e}l(ee,ot);break}else s(ee,ot);ot=ot.sibling}re.type===F?(Y=ns(re.props.children,ee.mode,Pe,re.key),Y.return=ee,ee=Y):(Pe=kl(re.type,re.key,re.props,null,ee.mode,Pe),Pe.ref=Zo(ee,Y,re),Pe.return=ee,ee=Pe)}return A(ee);case D:e:{for(ot=re.key;Y!==null;){if(Y.key===ot)if(Y.tag===4&&Y.stateNode.containerInfo===re.containerInfo&&Y.stateNode.implementation===re.implementation){l(ee,Y.sibling),Y=g(Y,re.children||[]),Y.return=ee,ee=Y;break e}else{l(ee,Y);break}else s(ee,Y);Y=Y.sibling}Y=Sh(re,ee.mode,Pe),Y.return=ee,ee=Y}return A(ee);case Q:return ot=re._init,nn(ee,Y,ot(re._payload),Pe)}if(Ee(re))return Je(ee,Y,re,Pe);if(he(re))return et(ee,Y,re,Pe);fl(ee,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,Y!==null&&Y.tag===6?(l(ee,Y.sibling),Y=g(Y,re),Y.return=ee,ee=Y):(l(ee,Y),Y=_h(re,ee.mode,Pe),Y.return=ee,ee=Y),A(ee)):l(ee,Y)}return nn}var Os=Vp(!0),Gp=Vp(!1),pl=xr(null),ml=null,Bs=null,Pu=null;function Lu(){Pu=Bs=ml=null}function Nu(n){var s=pl.current;Gt(pl),n._currentValue=s}function Iu(n,s,l){for(;n!==null;){var h=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),n===l)break;n=n.return}}function zs(n,s){ml=n,Pu=Bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&s&&(On=!0),n.firstContext=null)}function ii(n){var s=n._currentValue;if(Pu!==n)if(n={context:n,memoizedValue:s,next:null},Bs===null){if(ml===null)throw Error(t(308));Bs=n,ml.dependencies={lanes:0,firstContext:n}}else Bs=Bs.next=n;return s}var qr=null;function Du(n){qr===null?qr=[n]:qr.push(n)}function Wp(n,s,l,h){var g=s.interleaved;return g===null?(l.next=l,Du(s)):(l.next=g.next,g.next=l),s.interleaved=l,ji(n,h)}function ji(n,s){n.lanes|=s;var l=n.alternate;for(l!==null&&(l.lanes|=s),l=n,n=n.return;n!==null;)n.childLanes|=s,l=n.alternate,l!==null&&(l.childLanes|=s),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Sr=!1;function Uu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jp(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function wr(n,s,l){var h=n.updateQueue;if(h===null)return null;if(h=h.shared,Ct&2){var g=h.pending;return g===null?s.next=s:(s.next=g.next,g.next=s),h.pending=s,ji(n,l)}return g=h.interleaved,g===null?(s.next=s,Du(h)):(s.next=g.next,g.next=s),h.interleaved=s,ji(n,l)}function gl(n,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=n.pendingLanes,l|=h,s.lanes=l,Wr(n,l)}}function Xp(n,s){var l=n.updateQueue,h=n.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var g=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?g=_=A:_=_.next=A,l=l.next}while(l!==null);_===null?g=_=s:_=_.next=s}else g=_=s;l={baseState:h.baseState,firstBaseUpdate:g,lastBaseUpdate:_,shared:h.shared,effects:h.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=s:n.next=s,l.lastBaseUpdate=s}function vl(n,s,l,h){var g=n.updateQueue;Sr=!1;var _=g.firstBaseUpdate,A=g.lastBaseUpdate,z=g.shared.pending;if(z!==null){g.shared.pending=null;var W=z,ae=W.next;W.next=null,A===null?_=ae:A.next=ae,A=W;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,z=Se.lastBaseUpdate,z!==A&&(z===null?Se.firstBaseUpdate=ae:z.next=ae,Se.lastBaseUpdate=W))}if(_!==null){var Te=g.baseState;A=0,Se=ae=W=null,z=_;do{var _e=z.lane,Ge=z.eventTime;if((h&_e)===_e){Se!==null&&(Se=Se.next={eventTime:Ge,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Je=n,et=z;switch(_e=s,Ge=l,et.tag){case 1:if(Je=et.payload,typeof Je=="function"){Te=Je.call(Ge,Te,_e);break e}Te=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=et.payload,_e=typeof Je=="function"?Je.call(Ge,Te,_e):Je,_e==null)break e;Te=oe({},Te,_e);break e;case 2:Sr=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,_e=g.effects,_e===null?g.effects=[z]:_e.push(z))}else Ge={eventTime:Ge,lane:_e,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Se===null?(ae=Se=Ge,W=Te):Se=Se.next=Ge,A|=_e;if(z=z.next,z===null){if(z=g.shared.pending,z===null)break;_e=z,z=_e.next,_e.next=null,g.lastBaseUpdate=_e,g.shared.pending=null}}while(!0);if(Se===null&&(W=Te),g.baseState=W,g.firstBaseUpdate=ae,g.lastBaseUpdate=Se,s=g.shared.interleaved,s!==null){g=s;do A|=g.lane,g=g.next;while(g!==s)}else _===null&&(g.shared.lanes=0);Jr|=A,n.lanes=A,n.memoizedState=Te}}function $p(n,s,l){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var h=n[s],g=h.callback;if(g!==null){if(h.callback=null,h=l,typeof g!="function")throw Error(t(191,g));g.call(h)}}}var Jo={},Ci=xr(Jo),Qo=xr(Jo),ea=xr(Jo);function Kr(n){if(n===Jo)throw Error(t(174));return n}function Fu(n,s){switch(zt(ea,s),zt(Qo,n),zt(Ci,Jo),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:$e(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=$e(s,n)}Gt(Ci),zt(Ci,s)}function Hs(){Gt(Ci),Gt(Qo),Gt(ea)}function Yp(n){Kr(ea.current);var s=Kr(Ci.current),l=$e(s,n.type);s!==l&&(zt(Qo,n),zt(Ci,l))}function ku(n){Qo.current===n&&(Gt(Ci),Gt(Qo))}var $t=xr(0);function xl(n){for(var s=n;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ou=[];function Bu(){for(var n=0;n<Ou.length;n++)Ou[n]._workInProgressVersionPrimary=null;Ou.length=0}var yl=E.ReactCurrentDispatcher,zu=E.ReactCurrentBatchConfig,Zr=0,Yt=null,cn=null,fn=null,_l=!1,ta=!1,na=0,Xx=0;function Mn(){throw Error(t(321))}function Hu(n,s){if(s===null)return!1;for(var l=0;l<s.length&&l<n.length;l++)if(!hi(n[l],s[l]))return!1;return!0}function Vu(n,s,l,h,g,_){if(Zr=_,Yt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,yl.current=n===null||n.memoizedState===null?Kx:Zx,n=l(h,g),ta){_=0;do{if(ta=!1,na=0,25<=_)throw Error(t(301));_+=1,fn=cn=null,s.updateQueue=null,yl.current=Jx,n=l(h,g)}while(ta)}if(yl.current=Ml,s=cn!==null&&cn.next!==null,Zr=0,fn=cn=Yt=null,_l=!1,s)throw Error(t(300));return n}function Gu(){var n=na!==0;return na=0,n}function Ri(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Yt.memoizedState=fn=n:fn=fn.next=n,fn}function ri(){if(cn===null){var n=Yt.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var s=fn===null?Yt.memoizedState:fn.next;if(s!==null)fn=s,cn=n;else{if(n===null)throw Error(t(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},fn===null?Yt.memoizedState=fn=n:fn=fn.next=n}return fn}function ia(n,s){return typeof s=="function"?s(n):s}function Wu(n){var s=ri(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=cn,g=h.baseQueue,_=l.pending;if(_!==null){if(g!==null){var A=g.next;g.next=_.next,_.next=A}h.baseQueue=g=_,l.pending=null}if(g!==null){_=g.next,h=h.baseState;var z=A=null,W=null,ae=_;do{var Se=ae.lane;if((Zr&Se)===Se)W!==null&&(W=W.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),h=ae.hasEagerState?ae.eagerState:n(h,ae.action);else{var Te={lane:Se,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};W===null?(z=W=Te,A=h):W=W.next=Te,Yt.lanes|=Se,Jr|=Se}ae=ae.next}while(ae!==null&&ae!==_);W===null?A=h:W.next=z,hi(h,s.memoizedState)||(On=!0),s.memoizedState=h,s.baseState=A,s.baseQueue=W,l.lastRenderedState=h}if(n=l.interleaved,n!==null){g=n;do _=g.lane,Yt.lanes|=_,Jr|=_,g=g.next;while(g!==n)}else g===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function ju(n){var s=ri(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=l.dispatch,g=l.pending,_=s.memoizedState;if(g!==null){l.pending=null;var A=g=g.next;do _=n(_,A.action),A=A.next;while(A!==g);hi(_,s.memoizedState)||(On=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,h]}function qp(){}function Kp(n,s){var l=Yt,h=ri(),g=s(),_=!hi(h.memoizedState,g);if(_&&(h.memoizedState=g,On=!0),h=h.queue,Xu(Qp.bind(null,l,h,n),[n]),h.getSnapshot!==s||_||fn!==null&&fn.memoizedState.tag&1){if(l.flags|=2048,ra(9,Jp.bind(null,l,h,g,s),void 0,null),pn===null)throw Error(t(349));Zr&30||Zp(l,s,g)}return g}function Zp(n,s,l){n.flags|=16384,n={getSnapshot:s,value:l},s=Yt.updateQueue,s===null?(s={lastEffect:null,stores:null},Yt.updateQueue=s,s.stores=[n]):(l=s.stores,l===null?s.stores=[n]:l.push(n))}function Jp(n,s,l,h){s.value=l,s.getSnapshot=h,em(s)&&tm(n)}function Qp(n,s,l){return l(function(){em(s)&&tm(n)})}function em(n){var s=n.getSnapshot;n=n.value;try{var l=s();return!hi(n,l)}catch{return!0}}function tm(n){var s=ji(n,1);s!==null&&gi(s,n,1,-1)}function nm(n){var s=Ri();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:n},s.queue=n,n=n.dispatch=qx.bind(null,Yt,n),[s.memoizedState,n]}function ra(n,s,l,h){return n={tag:n,create:s,destroy:l,deps:h,next:null},s=Yt.updateQueue,s===null?(s={lastEffect:null,stores:null},Yt.updateQueue=s,s.lastEffect=n.next=n):(l=s.lastEffect,l===null?s.lastEffect=n.next=n:(h=l.next,l.next=n,n.next=h,s.lastEffect=n)),n}function im(){return ri().memoizedState}function Sl(n,s,l,h){var g=Ri();Yt.flags|=n,g.memoizedState=ra(1|s,l,void 0,h===void 0?null:h)}function wl(n,s,l,h){var g=ri();h=h===void 0?null:h;var _=void 0;if(cn!==null){var A=cn.memoizedState;if(_=A.destroy,h!==null&&Hu(h,A.deps)){g.memoizedState=ra(s,l,_,h);return}}Yt.flags|=n,g.memoizedState=ra(1|s,l,_,h)}function rm(n,s){return Sl(8390656,8,n,s)}function Xu(n,s){return wl(2048,8,n,s)}function sm(n,s){return wl(4,2,n,s)}function om(n,s){return wl(4,4,n,s)}function am(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function lm(n,s,l){return l=l!=null?l.concat([n]):null,wl(4,4,am.bind(null,s,n),l)}function $u(){}function cm(n,s){var l=ri();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&Hu(s,h[1])?h[0]:(l.memoizedState=[n,s],n)}function um(n,s){var l=ri();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&Hu(s,h[1])?h[0]:(n=n(),l.memoizedState=[n,s],n)}function hm(n,s,l){return Zr&21?(hi(l,s)||(l=Pn(),Yt.lanes|=l,Jr|=l,n.baseState=!0),s):(n.baseState&&(n.baseState=!1,On=!0),n.memoizedState=l)}function $x(n,s){var l=Mt;Mt=l!==0&&4>l?l:4,n(!0);var h=zu.transition;zu.transition={};try{n(!1),s()}finally{Mt=l,zu.transition=h}}function dm(){return ri().memoizedState}function Yx(n,s,l){var h=br(n);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},fm(n))pm(s,l);else if(l=Wp(n,s,l,h),l!==null){var g=Nn();gi(l,n,h,g),mm(l,s,h)}}function qx(n,s,l){var h=br(n),g={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(fm(n))pm(s,g);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var A=s.lastRenderedState,z=_(A,l);if(g.hasEagerState=!0,g.eagerState=z,hi(z,A)){var W=s.interleaved;W===null?(g.next=g,Du(s)):(g.next=W.next,W.next=g),s.interleaved=g;return}}catch{}finally{}l=Wp(n,s,g,h),l!==null&&(g=Nn(),gi(l,n,h,g),mm(l,s,h))}}function fm(n){var s=n.alternate;return n===Yt||s!==null&&s===Yt}function pm(n,s){ta=_l=!0;var l=n.pending;l===null?s.next=s:(s.next=l.next,l.next=s),n.pending=s}function mm(n,s,l){if(l&4194240){var h=s.lanes;h&=n.pendingLanes,l|=h,s.lanes=l,Wr(n,l)}}var Ml={readContext:ii,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},Kx={readContext:ii,useCallback:function(n,s){return Ri().memoizedState=[n,s===void 0?null:s],n},useContext:ii,useEffect:rm,useImperativeHandle:function(n,s,l){return l=l!=null?l.concat([n]):null,Sl(4194308,4,am.bind(null,s,n),l)},useLayoutEffect:function(n,s){return Sl(4194308,4,n,s)},useInsertionEffect:function(n,s){return Sl(4,2,n,s)},useMemo:function(n,s){var l=Ri();return s=s===void 0?null:s,n=n(),l.memoizedState=[n,s],n},useReducer:function(n,s,l){var h=Ri();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},h.queue=n,n=n.dispatch=Yx.bind(null,Yt,n),[h.memoizedState,n]},useRef:function(n){var s=Ri();return n={current:n},s.memoizedState=n},useState:nm,useDebugValue:$u,useDeferredValue:function(n){return Ri().memoizedState=n},useTransition:function(){var n=nm(!1),s=n[0];return n=$x.bind(null,n[1]),Ri().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,l){var h=Yt,g=Ri();if(jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),pn===null)throw Error(t(349));Zr&30||Zp(h,s,l)}g.memoizedState=l;var _={value:l,getSnapshot:s};return g.queue=_,rm(Qp.bind(null,h,_,n),[n]),h.flags|=2048,ra(9,Jp.bind(null,h,_,l,s),void 0,null),l},useId:function(){var n=Ri(),s=pn.identifierPrefix;if(jt){var l=Wi,h=Gi;l=(h&~(1<<32-Pt(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=na++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=Xx++,s=":"+s+"r"+l.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},Zx={readContext:ii,useCallback:cm,useContext:ii,useEffect:Xu,useImperativeHandle:lm,useInsertionEffect:sm,useLayoutEffect:om,useMemo:um,useReducer:Wu,useRef:im,useState:function(){return Wu(ia)},useDebugValue:$u,useDeferredValue:function(n){var s=ri();return hm(s,cn.memoizedState,n)},useTransition:function(){var n=Wu(ia)[0],s=ri().memoizedState;return[n,s]},useMutableSource:qp,useSyncExternalStore:Kp,useId:dm,unstable_isNewReconciler:!1},Jx={readContext:ii,useCallback:cm,useContext:ii,useEffect:Xu,useImperativeHandle:lm,useInsertionEffect:sm,useLayoutEffect:om,useMemo:um,useReducer:ju,useRef:im,useState:function(){return ju(ia)},useDebugValue:$u,useDeferredValue:function(n){var s=ri();return cn===null?s.memoizedState=n:hm(s,cn.memoizedState,n)},useTransition:function(){var n=ju(ia)[0],s=ri().memoizedState;return[n,s]},useMutableSource:qp,useSyncExternalStore:Kp,useId:dm,unstable_isNewReconciler:!1};function fi(n,s){if(n&&n.defaultProps){s=oe({},s),n=n.defaultProps;for(var l in n)s[l]===void 0&&(s[l]=n[l]);return s}return s}function Yu(n,s,l,h){s=n.memoizedState,l=l(h,s),l=l==null?s:oe({},s,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var El={isMounted:function(n){return(n=n._reactInternals)?bi(n)===n:!1},enqueueSetState:function(n,s,l){n=n._reactInternals;var h=Nn(),g=br(n),_=Xi(h,g);_.payload=s,l!=null&&(_.callback=l),s=wr(n,_,g),s!==null&&(gi(s,n,g,h),gl(s,n,g))},enqueueReplaceState:function(n,s,l){n=n._reactInternals;var h=Nn(),g=br(n),_=Xi(h,g);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=wr(n,_,g),s!==null&&(gi(s,n,g,h),gl(s,n,g))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var l=Nn(),h=br(n),g=Xi(l,h);g.tag=2,s!=null&&(g.callback=s),s=wr(n,g,h),s!==null&&(gi(s,n,h,l),gl(s,n,h))}};function gm(n,s,l,h,g,_,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(h,_,A):s.prototype&&s.prototype.isPureReactComponent?!Wo(l,h)||!Wo(g,_):!0}function vm(n,s,l){var h=!1,g=yr,_=s.contextType;return typeof _=="object"&&_!==null?_=ii(_):(g=kn(s)?Xr:wn.current,h=s.contextTypes,_=(h=h!=null)?Ds(n,g):yr),s=new s(l,_),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=El,n.stateNode=s,s._reactInternals=n,h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=g,n.__reactInternalMemoizedMaskedChildContext=_),s}function xm(n,s,l,h){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==n&&El.enqueueReplaceState(s,s.state,null)}function qu(n,s,l,h){var g=n.stateNode;g.props=l,g.state=n.memoizedState,g.refs={},Uu(n);var _=s.contextType;typeof _=="object"&&_!==null?g.context=ii(_):(_=kn(s)?Xr:wn.current,g.context=Ds(n,_)),g.state=n.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Yu(n,s,_,l),g.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(s=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),s!==g.state&&El.enqueueReplaceState(g,g.state,null),vl(n,l,g,h),g.state=n.memoizedState),typeof g.componentDidMount=="function"&&(n.flags|=4194308)}function Vs(n,s){try{var l="",h=s;do l+=fe(h),h=h.return;while(h);var g=l}catch(_){g=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:s,stack:g,digest:null}}function Ku(n,s,l){return{value:n,source:null,stack:l??null,digest:s??null}}function Zu(n,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var Qx=typeof WeakMap=="function"?WeakMap:Map;function ym(n,s,l){l=Xi(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){Ll||(Ll=!0,dh=h),Zu(n,s)},l}function _m(n,s,l){l=Xi(-1,l),l.tag=3;var h=n.type.getDerivedStateFromError;if(typeof h=="function"){var g=s.value;l.payload=function(){return h(g)},l.callback=function(){Zu(n,s)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Zu(n,s),typeof h!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function Sm(n,s,l){var h=n.pingCache;if(h===null){h=n.pingCache=new Qx;var g=new Set;h.set(s,g)}else g=h.get(s),g===void 0&&(g=new Set,h.set(s,g));g.has(l)||(g.add(l),n=fy.bind(null,n,s,l),s.then(n,n))}function wm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Mm(n,s,l,h,g){return n.mode&1?(n.flags|=65536,n.lanes=g,n):(n===s?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Xi(-1,1),s.tag=2,wr(l,s,1))),l.lanes|=1),n)}var ey=E.ReactCurrentOwner,On=!1;function Ln(n,s,l,h){s.child=n===null?Gp(s,null,l,h):Os(s,n.child,l,h)}function Em(n,s,l,h,g){l=l.render;var _=s.ref;return zs(s,g),h=Vu(n,s,l,h,_,g),l=Gu(),n!==null&&!On?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~g,$i(n,s,g)):(jt&&l&&Tu(s),s.flags|=1,Ln(n,s,h,g),s.child)}function Tm(n,s,l,h,g){if(n===null){var _=l.type;return typeof _=="function"&&!yh(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,bm(n,s,_,h,g)):(n=kl(l.type,null,h,s,s.mode,g),n.ref=s.ref,n.return=s,s.child=n)}if(_=n.child,!(n.lanes&g)){var A=_.memoizedProps;if(l=l.compare,l=l!==null?l:Wo,l(A,h)&&n.ref===s.ref)return $i(n,s,g)}return s.flags|=1,n=Cr(_,h),n.ref=s.ref,n.return=s,s.child=n}function bm(n,s,l,h,g){if(n!==null){var _=n.memoizedProps;if(Wo(_,h)&&n.ref===s.ref)if(On=!1,s.pendingProps=h=_,(n.lanes&g)!==0)n.flags&131072&&(On=!0);else return s.lanes=n.lanes,$i(n,s,g)}return Ju(n,s,l,h,g)}function Am(n,s,l){var h=s.pendingProps,g=h.children,_=n!==null?n.memoizedState:null;if(h.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Ws,qn),qn|=l;else{if(!(l&1073741824))return n=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,zt(Ws,qn),qn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,zt(Ws,qn),qn|=h}else _!==null?(h=_.baseLanes|l,s.memoizedState=null):h=l,zt(Ws,qn),qn|=h;return Ln(n,s,g,l),s.child}function Cm(n,s){var l=s.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Ju(n,s,l,h,g){var _=kn(l)?Xr:wn.current;return _=Ds(s,_),zs(s,g),l=Vu(n,s,l,h,_,g),h=Gu(),n!==null&&!On?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~g,$i(n,s,g)):(jt&&h&&Tu(s),s.flags|=1,Ln(n,s,l,g),s.child)}function Rm(n,s,l,h,g){if(kn(l)){var _=!0;ll(s)}else _=!1;if(zs(s,g),s.stateNode===null)bl(n,s),vm(s,l,h),qu(s,l,h,g),h=!0;else if(n===null){var A=s.stateNode,z=s.memoizedProps;A.props=z;var W=A.context,ae=l.contextType;typeof ae=="object"&&ae!==null?ae=ii(ae):(ae=kn(l)?Xr:wn.current,ae=Ds(s,ae));var Se=l.getDerivedStateFromProps,Te=typeof Se=="function"||typeof A.getSnapshotBeforeUpdate=="function";Te||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==h||W!==ae)&&xm(s,A,h,ae),Sr=!1;var _e=s.memoizedState;A.state=_e,vl(s,h,A,g),W=s.memoizedState,z!==h||_e!==W||Fn.current||Sr?(typeof Se=="function"&&(Yu(s,l,Se,h),W=s.memoizedState),(z=Sr||gm(s,l,z,h,_e,W,ae))?(Te||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=W),A.props=h,A.state=W,A.context=ae,h=z):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{A=s.stateNode,jp(n,s),z=s.memoizedProps,ae=s.type===s.elementType?z:fi(s.type,z),A.props=ae,Te=s.pendingProps,_e=A.context,W=l.contextType,typeof W=="object"&&W!==null?W=ii(W):(W=kn(l)?Xr:wn.current,W=Ds(s,W));var Ge=l.getDerivedStateFromProps;(Se=typeof Ge=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(z!==Te||_e!==W)&&xm(s,A,h,W),Sr=!1,_e=s.memoizedState,A.state=_e,vl(s,h,A,g);var Je=s.memoizedState;z!==Te||_e!==Je||Fn.current||Sr?(typeof Ge=="function"&&(Yu(s,l,Ge,h),Je=s.memoizedState),(ae=Sr||gm(s,l,ae,h,_e,Je,W)||!1)?(Se||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(h,Je,W),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(h,Je,W)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||z===n.memoizedProps&&_e===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&_e===n.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=Je),A.props=h,A.state=Je,A.context=W,h=ae):(typeof A.componentDidUpdate!="function"||z===n.memoizedProps&&_e===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&_e===n.memoizedState||(s.flags|=1024),h=!1)}return Qu(n,s,l,h,_,g)}function Qu(n,s,l,h,g,_){Cm(n,s);var A=(s.flags&128)!==0;if(!h&&!A)return g&&Dp(s,l,!1),$i(n,s,_);h=s.stateNode,ey.current=s;var z=A&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,n!==null&&A?(s.child=Os(s,n.child,null,_),s.child=Os(s,null,z,_)):Ln(n,s,z,_),s.memoizedState=h.state,g&&Dp(s,l,!0),s.child}function Pm(n){var s=n.stateNode;s.pendingContext?Np(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Np(n,s.context,!1),Fu(n,s.containerInfo)}function Lm(n,s,l,h,g){return ks(),Ru(g),s.flags|=256,Ln(n,s,l,h),s.child}var eh={dehydrated:null,treeContext:null,retryLane:0};function th(n){return{baseLanes:n,cachePool:null,transitions:null}}function Nm(n,s,l){var h=s.pendingProps,g=$t.current,_=!1,A=(s.flags&128)!==0,z;if((z=A)||(z=n!==null&&n.memoizedState===null?!1:(g&2)!==0),z?(_=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(g|=1),zt($t,g&1),n===null)return Cu(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(s.mode&1?n.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(A=h.children,n=h.fallback,_?(h=s.mode,_=s.child,A={mode:"hidden",children:A},!(h&1)&&_!==null?(_.childLanes=0,_.pendingProps=A):_=Ol(A,h,0,null),n=ns(n,h,l,null),_.return=s,n.return=s,_.sibling=n,s.child=_,s.child.memoizedState=th(l),s.memoizedState=eh,n):nh(s,A));if(g=n.memoizedState,g!==null&&(z=g.dehydrated,z!==null))return ty(n,s,A,h,z,g,l);if(_){_=h.fallback,A=s.mode,g=n.child,z=g.sibling;var W={mode:"hidden",children:h.children};return!(A&1)&&s.child!==g?(h=s.child,h.childLanes=0,h.pendingProps=W,s.deletions=null):(h=Cr(g,W),h.subtreeFlags=g.subtreeFlags&14680064),z!==null?_=Cr(z,_):(_=ns(_,A,l,null),_.flags|=2),_.return=s,h.return=s,h.sibling=_,s.child=h,h=_,_=s.child,A=n.child.memoizedState,A=A===null?th(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},_.memoizedState=A,_.childLanes=n.childLanes&~l,s.memoizedState=eh,h}return _=n.child,n=_.sibling,h=Cr(_,{mode:"visible",children:h.children}),!(s.mode&1)&&(h.lanes=l),h.return=s,h.sibling=null,n!==null&&(l=s.deletions,l===null?(s.deletions=[n],s.flags|=16):l.push(n)),s.child=h,s.memoizedState=null,h}function nh(n,s){return s=Ol({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function Tl(n,s,l,h){return h!==null&&Ru(h),Os(s,n.child,null,l),n=nh(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function ty(n,s,l,h,g,_,A){if(l)return s.flags&256?(s.flags&=-257,h=Ku(Error(t(422))),Tl(n,s,A,h)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(_=h.fallback,g=s.mode,h=Ol({mode:"visible",children:h.children},g,0,null),_=ns(_,g,A,null),_.flags|=2,h.return=s,_.return=s,h.sibling=_,s.child=h,s.mode&1&&Os(s,n.child,null,A),s.child.memoizedState=th(A),s.memoizedState=eh,_);if(!(s.mode&1))return Tl(n,s,A,null);if(g.data==="$!"){if(h=g.nextSibling&&g.nextSibling.dataset,h)var z=h.dgst;return h=z,_=Error(t(419)),h=Ku(_,h,void 0),Tl(n,s,A,h)}if(z=(A&n.childLanes)!==0,On||z){if(h=pn,h!==null){switch(A&-A){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=g&(h.suspendedLanes|A)?0:g,g!==0&&g!==_.retryLane&&(_.retryLane=g,ji(n,g),gi(h,n,g,-1))}return xh(),h=Ku(Error(t(421))),Tl(n,s,A,h)}return g.data==="$?"?(s.flags|=128,s.child=n.child,s=py.bind(null,n),g._reactRetry=s,null):(n=_.treeContext,Yn=vr(g.nextSibling),$n=s,jt=!0,di=null,n!==null&&(ti[ni++]=Gi,ti[ni++]=Wi,ti[ni++]=$r,Gi=n.id,Wi=n.overflow,$r=s),s=nh(s,h.children),s.flags|=4096,s)}function Im(n,s,l){n.lanes|=s;var h=n.alternate;h!==null&&(h.lanes|=s),Iu(n.return,s,l)}function ih(n,s,l,h,g){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:g}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=g)}function Dm(n,s,l){var h=s.pendingProps,g=h.revealOrder,_=h.tail;if(Ln(n,s,h.children,l),h=$t.current,h&2)h=h&1|2,s.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Im(n,l,s);else if(n.tag===19)Im(n,l,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}h&=1}if(zt($t,h),!(s.mode&1))s.memoizedState=null;else switch(g){case"forwards":for(l=s.child,g=null;l!==null;)n=l.alternate,n!==null&&xl(n)===null&&(g=l),l=l.sibling;l=g,l===null?(g=s.child,s.child=null):(g=l.sibling,l.sibling=null),ih(s,!1,g,l,_);break;case"backwards":for(l=null,g=s.child,s.child=null;g!==null;){if(n=g.alternate,n!==null&&xl(n)===null){s.child=g;break}n=g.sibling,g.sibling=l,l=g,g=n}ih(s,!0,l,null,_);break;case"together":ih(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function bl(n,s){!(s.mode&1)&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function $i(n,s,l){if(n!==null&&(s.dependencies=n.dependencies),Jr|=s.lanes,!(l&s.childLanes))return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,l=Cr(n,n.pendingProps),s.child=l,l.return=s;n.sibling!==null;)n=n.sibling,l=l.sibling=Cr(n,n.pendingProps),l.return=s;l.sibling=null}return s.child}function ny(n,s,l){switch(s.tag){case 3:Pm(s),ks();break;case 5:Yp(s);break;case 1:kn(s.type)&&ll(s);break;case 4:Fu(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,g=s.memoizedProps.value;zt(pl,h._currentValue),h._currentValue=g;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(zt($t,$t.current&1),s.flags|=128,null):l&s.child.childLanes?Nm(n,s,l):(zt($t,$t.current&1),n=$i(n,s,l),n!==null?n.sibling:null);zt($t,$t.current&1);break;case 19:if(h=(l&s.childLanes)!==0,n.flags&128){if(h)return Dm(n,s,l);s.flags|=128}if(g=s.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),zt($t,$t.current),h)break;return null;case 22:case 23:return s.lanes=0,Am(n,s,l)}return $i(n,s,l)}var Um,rh,Fm,km;Um=function(n,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},rh=function(){},Fm=function(n,s,l,h){var g=n.memoizedProps;if(g!==h){n=s.stateNode,Kr(Ci.current);var _=null;switch(l){case"input":g=O(n,g),h=O(n,h),_=[];break;case"select":g=oe({},g,{value:void 0}),h=oe({},h,{value:void 0}),_=[];break;case"textarea":g=P(n,g),h=P(n,h),_=[];break;default:typeof g.onClick!="function"&&typeof h.onClick=="function"&&(n.onclick=sl)}_t(l,h);var A;l=null;for(ae in g)if(!h.hasOwnProperty(ae)&&g.hasOwnProperty(ae)&&g[ae]!=null)if(ae==="style"){var z=g[ae];for(A in z)z.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?_||(_=[]):(_=_||[]).push(ae,null));for(ae in h){var W=h[ae];if(z=g!=null?g[ae]:void 0,h.hasOwnProperty(ae)&&W!==z&&(W!=null||z!=null))if(ae==="style")if(z){for(A in z)!z.hasOwnProperty(A)||W&&W.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in W)W.hasOwnProperty(A)&&z[A]!==W[A]&&(l||(l={}),l[A]=W[A])}else l||(_||(_=[]),_.push(ae,l)),l=W;else ae==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,z=z?z.__html:void 0,W!=null&&z!==W&&(_=_||[]).push(ae,W)):ae==="children"?typeof W!="string"&&typeof W!="number"||(_=_||[]).push(ae,""+W):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(W!=null&&ae==="onScroll"&&Vt("scroll",n),_||z===W||(_=[])):(_=_||[]).push(ae,W))}l&&(_=_||[]).push("style",l);var ae=_;(s.updateQueue=ae)&&(s.flags|=4)}},km=function(n,s,l,h){l!==h&&(s.flags|=4)};function sa(n,s){if(!jt)switch(n.tailMode){case"hidden":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:h.sibling=null}}function En(n){var s=n.alternate!==null&&n.alternate.child===n.child,l=0,h=0;if(s)for(var g=n.child;g!==null;)l|=g.lanes|g.childLanes,h|=g.subtreeFlags&14680064,h|=g.flags&14680064,g.return=n,g=g.sibling;else for(g=n.child;g!==null;)l|=g.lanes|g.childLanes,h|=g.subtreeFlags,h|=g.flags,g.return=n,g=g.sibling;return n.subtreeFlags|=h,n.childLanes=l,s}function iy(n,s,l){var h=s.pendingProps;switch(bu(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(s),null;case 1:return kn(s.type)&&al(),En(s),null;case 3:return h=s.stateNode,Hs(),Gt(Fn),Gt(wn),Bu(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(n===null||n.child===null)&&(dl(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,di!==null&&(mh(di),di=null))),rh(n,s),En(s),null;case 5:ku(s);var g=Kr(ea.current);if(l=s.type,n!==null&&s.stateNode!=null)Fm(n,s,l,h,g),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return En(s),null}if(n=Kr(Ci.current),dl(s)){h=s.stateNode,l=s.type;var _=s.memoizedProps;switch(h[Ai]=s,h[qo]=_,n=(s.mode&1)!==0,l){case"dialog":Vt("cancel",h),Vt("close",h);break;case"iframe":case"object":case"embed":Vt("load",h);break;case"video":case"audio":for(g=0;g<Xo.length;g++)Vt(Xo[g],h);break;case"source":Vt("error",h);break;case"img":case"image":case"link":Vt("error",h),Vt("load",h);break;case"details":Vt("toggle",h);break;case"input":Qe(h,_),Vt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},Vt("invalid",h);break;case"textarea":ne(h,_),Vt("invalid",h)}_t(l,_),g=null;for(var A in _)if(_.hasOwnProperty(A)){var z=_[A];A==="children"?typeof z=="string"?h.textContent!==z&&(_.suppressHydrationWarning!==!0&&rl(h.textContent,z,n),g=["children",z]):typeof z=="number"&&h.textContent!==""+z&&(_.suppressHydrationWarning!==!0&&rl(h.textContent,z,n),g=["children",""+z]):o.hasOwnProperty(A)&&z!=null&&A==="onScroll"&&Vt("scroll",h)}switch(l){case"input":gt(h),Re(h,_,!0);break;case"textarea":gt(h),ye(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=sl)}h=g,s.updateQueue=h,h!==null&&(s.flags|=4)}else{A=g.nodeType===9?g:g.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=me(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof h.is=="string"?n=A.createElement(l,{is:h.is}):(n=A.createElement(l),l==="select"&&(A=n,h.multiple?A.multiple=!0:h.size&&(A.size=h.size))):n=A.createElementNS(n,l),n[Ai]=s,n[qo]=h,Um(n,s,!1,!1),s.stateNode=n;e:{switch(A=ft(l,h),l){case"dialog":Vt("cancel",n),Vt("close",n),g=h;break;case"iframe":case"object":case"embed":Vt("load",n),g=h;break;case"video":case"audio":for(g=0;g<Xo.length;g++)Vt(Xo[g],n);g=h;break;case"source":Vt("error",n),g=h;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),g=h;break;case"details":Vt("toggle",n),g=h;break;case"input":Qe(n,h),g=O(n,h),Vt("invalid",n);break;case"option":g=h;break;case"select":n._wrapperState={wasMultiple:!!h.multiple},g=oe({},h,{value:void 0}),Vt("invalid",n);break;case"textarea":ne(n,h),g=P(n,h),Vt("invalid",n);break;default:g=h}_t(l,g),z=g;for(_ in z)if(z.hasOwnProperty(_)){var W=z[_];_==="style"?lt(n,W):_==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&We(n,W)):_==="children"?typeof W=="string"?(l!=="textarea"||W!=="")&&vt(n,W):typeof W=="number"&&vt(n,""+W):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?W!=null&&_==="onScroll"&&Vt("scroll",n):W!=null&&T(n,_,W,A))}switch(l){case"input":gt(n),Re(n,h,!1);break;case"textarea":gt(n),ye(n);break;case"option":h.value!=null&&n.setAttribute("value",""+Le(h.value));break;case"select":n.multiple=!!h.multiple,_=h.value,_!=null?U(n,!!h.multiple,_,!1):h.defaultValue!=null&&U(n,!!h.multiple,h.defaultValue,!0);break;default:typeof g.onClick=="function"&&(n.onclick=sl)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return En(s),null;case 6:if(n&&s.stateNode!=null)km(n,s,n.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(l=Kr(ea.current),Kr(Ci.current),dl(s)){if(h=s.stateNode,l=s.memoizedProps,h[Ai]=s,(_=h.nodeValue!==l)&&(n=$n,n!==null))switch(n.tag){case 3:rl(h.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&rl(h.nodeValue,l,(n.mode&1)!==0)}_&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Ai]=s,s.stateNode=h}return En(s),null;case 13:if(Gt($t),h=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&Yn!==null&&s.mode&1&&!(s.flags&128))zp(),ks(),s.flags|=98560,_=!1;else if(_=dl(s),h!==null&&h.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ai]=s}else ks(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;En(s),_=!1}else di!==null&&(mh(di),di=null),_=!0;if(!_)return s.flags&65536?s:null}return s.flags&128?(s.lanes=l,s):(h=h!==null,h!==(n!==null&&n.memoizedState!==null)&&h&&(s.child.flags|=8192,s.mode&1&&(n===null||$t.current&1?un===0&&(un=3):xh())),s.updateQueue!==null&&(s.flags|=4),En(s),null);case 4:return Hs(),rh(n,s),n===null&&$o(s.stateNode.containerInfo),En(s),null;case 10:return Nu(s.type._context),En(s),null;case 17:return kn(s.type)&&al(),En(s),null;case 19:if(Gt($t),_=s.memoizedState,_===null)return En(s),null;if(h=(s.flags&128)!==0,A=_.rendering,A===null)if(h)sa(_,!1);else{if(un!==0||n!==null&&n.flags&128)for(n=s.child;n!==null;){if(A=xl(n),A!==null){for(s.flags|=128,sa(_,!1),h=A.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)_=l,n=h,_.flags&=14680066,A=_.alternate,A===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=A.childLanes,_.lanes=A.lanes,_.child=A.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=A.memoizedProps,_.memoizedState=A.memoizedState,_.updateQueue=A.updateQueue,_.type=A.type,n=A.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return zt($t,$t.current&1|2),s.child}n=n.sibling}_.tail!==null&&$()>js&&(s.flags|=128,h=!0,sa(_,!1),s.lanes=4194304)}else{if(!h)if(n=xl(A),n!==null){if(s.flags|=128,h=!0,l=n.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),sa(_,!0),_.tail===null&&_.tailMode==="hidden"&&!A.alternate&&!jt)return En(s),null}else 2*$()-_.renderingStartTime>js&&l!==1073741824&&(s.flags|=128,h=!0,sa(_,!1),s.lanes=4194304);_.isBackwards?(A.sibling=s.child,s.child=A):(l=_.last,l!==null?l.sibling=A:s.child=A,_.last=A)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=$(),s.sibling=null,l=$t.current,zt($t,h?l&1|2:l&1),s):(En(s),null);case 22:case 23:return vh(),h=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==h&&(s.flags|=8192),h&&s.mode&1?qn&1073741824&&(En(s),s.subtreeFlags&6&&(s.flags|=8192)):En(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function ry(n,s){switch(bu(s),s.tag){case 1:return kn(s.type)&&al(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Hs(),Gt(Fn),Gt(wn),Bu(),n=s.flags,n&65536&&!(n&128)?(s.flags=n&-65537|128,s):null;case 5:return ku(s),null;case 13:if(Gt($t),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));ks()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Gt($t),null;case 4:return Hs(),null;case 10:return Nu(s.type._context),null;case 22:case 23:return vh(),null;case 24:return null;default:return null}}var Al=!1,Tn=!1,sy=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Gs(n,s){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Qt(n,s,h)}else l.current=null}function sh(n,s,l){try{l()}catch(h){Qt(n,s,h)}}var Om=!1;function oy(n,s){if(vu=$a,n=gp(),cu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var g=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var A=0,z=-1,W=-1,ae=0,Se=0,Te=n,_e=null;t:for(;;){for(var Ge;Te!==l||g!==0&&Te.nodeType!==3||(z=A+g),Te!==_||h!==0&&Te.nodeType!==3||(W=A+h),Te.nodeType===3&&(A+=Te.nodeValue.length),(Ge=Te.firstChild)!==null;)_e=Te,Te=Ge;for(;;){if(Te===n)break t;if(_e===l&&++ae===g&&(z=A),_e===_&&++Se===h&&(W=A),(Ge=Te.nextSibling)!==null)break;Te=_e,_e=Te.parentNode}Te=Ge}l=z===-1||W===-1?null:{start:z,end:W}}else l=null}l=l||{start:0,end:0}}else l=null;for(xu={focusedElem:n,selectionRange:l},$a=!1,qe=s;qe!==null;)if(s=qe,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,qe=n;else for(;qe!==null;){s=qe;try{var Je=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var et=Je.memoizedProps,nn=Je.memoizedState,ee=s.stateNode,Y=ee.getSnapshotBeforeUpdate(s.elementType===s.type?et:fi(s.type,et),nn);ee.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var re=s.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){Qt(s,s.return,Pe)}if(n=s.sibling,n!==null){n.return=s.return,qe=n;break}qe=s.return}return Je=Om,Om=!1,Je}function oa(n,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var g=h=h.next;do{if((g.tag&n)===n){var _=g.destroy;g.destroy=void 0,_!==void 0&&sh(s,l,_)}g=g.next}while(g!==h)}}function Cl(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&n)===n){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function oh(n){var s=n.ref;if(s!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof s=="function"?s(n):s.current=n}}function Bm(n){var s=n.alternate;s!==null&&(n.alternate=null,Bm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Ai],delete s[qo],delete s[wu],delete s[Vx],delete s[Gx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function zm(n){return n.tag===5||n.tag===3||n.tag===4}function Hm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||zm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ah(n,s,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(n,s):l.insertBefore(n,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(n,l)):(s=l,s.appendChild(n)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=sl));else if(h!==4&&(n=n.child,n!==null))for(ah(n,s,l),n=n.sibling;n!==null;)ah(n,s,l),n=n.sibling}function lh(n,s,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,s?l.insertBefore(n,s):l.appendChild(n);else if(h!==4&&(n=n.child,n!==null))for(lh(n,s,l),n=n.sibling;n!==null;)lh(n,s,l),n=n.sibling}var xn=null,pi=!1;function Mr(n,s,l){for(l=l.child;l!==null;)Vm(n,s,l),l=l.sibling}function Vm(n,s,l){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(nt,l)}catch{}switch(l.tag){case 5:Tn||Gs(l,s);case 6:var h=xn,g=pi;xn=null,Mr(n,s,l),xn=h,pi=g,xn!==null&&(pi?(n=xn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):xn.removeChild(l.stateNode));break;case 18:xn!==null&&(pi?(n=xn,l=l.stateNode,n.nodeType===8?Su(n.parentNode,l):n.nodeType===1&&Su(n,l),Oo(n)):Su(xn,l.stateNode));break;case 4:h=xn,g=pi,xn=l.stateNode.containerInfo,pi=!0,Mr(n,s,l),xn=h,pi=g;break;case 0:case 11:case 14:case 15:if(!Tn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){g=h=h.next;do{var _=g,A=_.destroy;_=_.tag,A!==void 0&&(_&2||_&4)&&sh(l,s,A),g=g.next}while(g!==h)}Mr(n,s,l);break;case 1:if(!Tn&&(Gs(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(z){Qt(l,s,z)}Mr(n,s,l);break;case 21:Mr(n,s,l);break;case 22:l.mode&1?(Tn=(h=Tn)||l.memoizedState!==null,Mr(n,s,l),Tn=h):Mr(n,s,l);break;default:Mr(n,s,l)}}function Gm(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new sy),s.forEach(function(h){var g=my.bind(null,n,h);l.has(h)||(l.add(h),h.then(g,g))})}}function mi(n,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var g=l[h];try{var _=n,A=s,z=A;e:for(;z!==null;){switch(z.tag){case 5:xn=z.stateNode,pi=!1;break e;case 3:xn=z.stateNode.containerInfo,pi=!0;break e;case 4:xn=z.stateNode.containerInfo,pi=!0;break e}z=z.return}if(xn===null)throw Error(t(160));Vm(_,A,g),xn=null,pi=!1;var W=g.alternate;W!==null&&(W.return=null),g.return=null}catch(ae){Qt(g,s,ae)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Wm(s,n),s=s.sibling}function Wm(n,s){var l=n.alternate,h=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(mi(s,n),Pi(n),h&4){try{oa(3,n,n.return),Cl(3,n)}catch(et){Qt(n,n.return,et)}try{oa(5,n,n.return)}catch(et){Qt(n,n.return,et)}}break;case 1:mi(s,n),Pi(n),h&512&&l!==null&&Gs(l,l.return);break;case 5:if(mi(s,n),Pi(n),h&512&&l!==null&&Gs(l,l.return),n.flags&32){var g=n.stateNode;try{vt(g,"")}catch(et){Qt(n,n.return,et)}}if(h&4&&(g=n.stateNode,g!=null)){var _=n.memoizedProps,A=l!==null?l.memoizedProps:_,z=n.type,W=n.updateQueue;if(n.updateQueue=null,W!==null)try{z==="input"&&_.type==="radio"&&_.name!=null&&we(g,_),ft(z,A);var ae=ft(z,_);for(A=0;A<W.length;A+=2){var Se=W[A],Te=W[A+1];Se==="style"?lt(g,Te):Se==="dangerouslySetInnerHTML"?We(g,Te):Se==="children"?vt(g,Te):T(g,Se,Te,ae)}switch(z){case"input":Ve(g,_);break;case"textarea":pe(g,_);break;case"select":var _e=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!_.multiple;var Ge=_.value;Ge!=null?U(g,!!_.multiple,Ge,!1):_e!==!!_.multiple&&(_.defaultValue!=null?U(g,!!_.multiple,_.defaultValue,!0):U(g,!!_.multiple,_.multiple?[]:"",!1))}g[qo]=_}catch(et){Qt(n,n.return,et)}}break;case 6:if(mi(s,n),Pi(n),h&4){if(n.stateNode===null)throw Error(t(162));g=n.stateNode,_=n.memoizedProps;try{g.nodeValue=_}catch(et){Qt(n,n.return,et)}}break;case 3:if(mi(s,n),Pi(n),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Oo(s.containerInfo)}catch(et){Qt(n,n.return,et)}break;case 4:mi(s,n),Pi(n);break;case 13:mi(s,n),Pi(n),g=n.child,g.flags&8192&&(_=g.memoizedState!==null,g.stateNode.isHidden=_,!_||g.alternate!==null&&g.alternate.memoizedState!==null||(hh=$())),h&4&&Gm(n);break;case 22:if(Se=l!==null&&l.memoizedState!==null,n.mode&1?(Tn=(ae=Tn)||Se,mi(s,n),Tn=ae):mi(s,n),Pi(n),h&8192){if(ae=n.memoizedState!==null,(n.stateNode.isHidden=ae)&&!Se&&n.mode&1)for(qe=n,Se=n.child;Se!==null;){for(Te=qe=Se;qe!==null;){switch(_e=qe,Ge=_e.child,_e.tag){case 0:case 11:case 14:case 15:oa(4,_e,_e.return);break;case 1:Gs(_e,_e.return);var Je=_e.stateNode;if(typeof Je.componentWillUnmount=="function"){h=_e,l=_e.return;try{s=h,Je.props=s.memoizedProps,Je.state=s.memoizedState,Je.componentWillUnmount()}catch(et){Qt(h,l,et)}}break;case 5:Gs(_e,_e.return);break;case 22:if(_e.memoizedState!==null){$m(Te);continue}}Ge!==null?(Ge.return=_e,qe=Ge):$m(Te)}Se=Se.sibling}e:for(Se=null,Te=n;;){if(Te.tag===5){if(Se===null){Se=Te;try{g=Te.stateNode,ae?(_=g.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(z=Te.stateNode,W=Te.memoizedProps.style,A=W!=null&&W.hasOwnProperty("display")?W.display:null,z.style.display=st("display",A))}catch(et){Qt(n,n.return,et)}}}else if(Te.tag===6){if(Se===null)try{Te.stateNode.nodeValue=ae?"":Te.memoizedProps}catch(et){Qt(n,n.return,et)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;Se===Te&&(Se=null),Te=Te.return}Se===Te&&(Se=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:mi(s,n),Pi(n),h&4&&Gm(n);break;case 21:break;default:mi(s,n),Pi(n)}}function Pi(n){var s=n.flags;if(s&2){try{e:{for(var l=n.return;l!==null;){if(zm(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var g=h.stateNode;h.flags&32&&(vt(g,""),h.flags&=-33);var _=Hm(n);lh(n,_,g);break;case 3:case 4:var A=h.stateNode.containerInfo,z=Hm(n);ah(n,z,A);break;default:throw Error(t(161))}}catch(W){Qt(n,n.return,W)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function ay(n,s,l){qe=n,jm(n)}function jm(n,s,l){for(var h=(n.mode&1)!==0;qe!==null;){var g=qe,_=g.child;if(g.tag===22&&h){var A=g.memoizedState!==null||Al;if(!A){var z=g.alternate,W=z!==null&&z.memoizedState!==null||Tn;z=Al;var ae=Tn;if(Al=A,(Tn=W)&&!ae)for(qe=g;qe!==null;)A=qe,W=A.child,A.tag===22&&A.memoizedState!==null?Ym(g):W!==null?(W.return=A,qe=W):Ym(g);for(;_!==null;)qe=_,jm(_),_=_.sibling;qe=g,Al=z,Tn=ae}Xm(n)}else g.subtreeFlags&8772&&_!==null?(_.return=g,qe=_):Xm(n)}}function Xm(n){for(;qe!==null;){var s=qe;if(s.flags&8772){var l=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Tn||Cl(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Tn)if(l===null)h.componentDidMount();else{var g=s.elementType===s.type?l.memoizedProps:fi(s.type,l.memoizedProps);h.componentDidUpdate(g,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&$p(s,_,h);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}$p(s,A,l)}break;case 5:var z=s.stateNode;if(l===null&&s.flags&4){l=z;var W=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&l.focus();break;case"img":W.src&&(l.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ae=s.alternate;if(ae!==null){var Se=ae.memoizedState;if(Se!==null){var Te=Se.dehydrated;Te!==null&&Oo(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Tn||s.flags&512&&oh(s)}catch(_e){Qt(s,s.return,_e)}}if(s===n){qe=null;break}if(l=s.sibling,l!==null){l.return=s.return,qe=l;break}qe=s.return}}function $m(n){for(;qe!==null;){var s=qe;if(s===n){qe=null;break}var l=s.sibling;if(l!==null){l.return=s.return,qe=l;break}qe=s.return}}function Ym(n){for(;qe!==null;){var s=qe;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Cl(4,s)}catch(W){Qt(s,l,W)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var g=s.return;try{h.componentDidMount()}catch(W){Qt(s,g,W)}}var _=s.return;try{oh(s)}catch(W){Qt(s,_,W)}break;case 5:var A=s.return;try{oh(s)}catch(W){Qt(s,A,W)}}}catch(W){Qt(s,s.return,W)}if(s===n){qe=null;break}var z=s.sibling;if(z!==null){z.return=s.return,qe=z;break}qe=s.return}}var ly=Math.ceil,Rl=E.ReactCurrentDispatcher,ch=E.ReactCurrentOwner,si=E.ReactCurrentBatchConfig,Ct=0,pn=null,rn=null,yn=0,qn=0,Ws=xr(0),un=0,aa=null,Jr=0,Pl=0,uh=0,la=null,Bn=null,hh=0,js=1/0,Yi=null,Ll=!1,dh=null,Er=null,Nl=!1,Tr=null,Il=0,ca=0,fh=null,Dl=-1,Ul=0;function Nn(){return Ct&6?$():Dl!==-1?Dl:Dl=$()}function br(n){return n.mode&1?Ct&2&&yn!==0?yn&-yn:jx.transition!==null?(Ul===0&&(Ul=Pn()),Ul):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:Kf(n.type)),n):1}function gi(n,s,l,h){if(50<ca)throw ca=0,fh=null,Error(t(185));tn(n,l,h),(!(Ct&2)||n!==pn)&&(n===pn&&(!(Ct&2)&&(Pl|=l),un===4&&Ar(n,yn)),zn(n,h),l===1&&Ct===0&&!(s.mode&1)&&(js=$()+500,cl&&_r()))}function zn(n,s){var l=n.callbackNode;Gr(n,s);var h=ui(n,n===pn?yn:0);if(h===0)l!==null&&J(l),n.callbackNode=null,n.callbackPriority=0;else if(s=h&-h,n.callbackPriority!==s){if(l!=null&&J(l),s===1)n.tag===0?Wx(Km.bind(null,n)):Up(Km.bind(null,n)),zx(function(){!(Ct&6)&&_r()}),l=null;else{switch(Vf(h)){case 1:l=ke;break;case 4:l=je;break;case 16:l=Ye;break;case 536870912:l=ut;break;default:l=Ye}l=r0(l,qm.bind(null,n))}n.callbackPriority=s,n.callbackNode=l}}function qm(n,s){if(Dl=-1,Ul=0,Ct&6)throw Error(t(327));var l=n.callbackNode;if(Xs()&&n.callbackNode!==l)return null;var h=ui(n,n===pn?yn:0);if(h===0)return null;if(h&30||h&n.expiredLanes||s)s=Fl(n,h);else{s=h;var g=Ct;Ct|=2;var _=Jm();(pn!==n||yn!==s)&&(Yi=null,js=$()+500,es(n,s));do try{hy();break}catch(z){Zm(n,z)}while(!0);Lu(),Rl.current=_,Ct=g,rn!==null?s=0:(pn=null,yn=0,s=un)}if(s!==0){if(s===2&&(g=Ft(n),g!==0&&(h=g,s=ph(n,g))),s===1)throw l=aa,es(n,0),Ar(n,h),zn(n,$()),l;if(s===6)Ar(n,h);else{if(g=n.current.alternate,!(h&30)&&!cy(g)&&(s=Fl(n,h),s===2&&(_=Ft(n),_!==0&&(h=_,s=ph(n,_))),s===1))throw l=aa,es(n,0),Ar(n,h),zn(n,$()),l;switch(n.finishedWork=g,n.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:ts(n,Bn,Yi);break;case 3:if(Ar(n,h),(h&130023424)===h&&(s=hh+500-$(),10<s)){if(ui(n,0)!==0)break;if(g=n.suspendedLanes,(g&h)!==h){Nn(),n.pingedLanes|=n.suspendedLanes&g;break}n.timeoutHandle=_u(ts.bind(null,n,Bn,Yi),s);break}ts(n,Bn,Yi);break;case 4:if(Ar(n,h),(h&4194240)===h)break;for(s=n.eventTimes,g=-1;0<h;){var A=31-Pt(h);_=1<<A,A=s[A],A>g&&(g=A),h&=~_}if(h=g,h=$()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*ly(h/1960))-h,10<h){n.timeoutHandle=_u(ts.bind(null,n,Bn,Yi),h);break}ts(n,Bn,Yi);break;case 5:ts(n,Bn,Yi);break;default:throw Error(t(329))}}}return zn(n,$()),n.callbackNode===l?qm.bind(null,n):null}function ph(n,s){var l=la;return n.current.memoizedState.isDehydrated&&(es(n,s).flags|=256),n=Fl(n,s),n!==2&&(s=Bn,Bn=l,s!==null&&mh(s)),n}function mh(n){Bn===null?Bn=n:Bn.push.apply(Bn,n)}function cy(n){for(var s=n;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var g=l[h],_=g.getSnapshot;g=g.value;try{if(!hi(_(),g))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ar(n,s){for(s&=~uh,s&=~Pl,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var l=31-Pt(s),h=1<<l;n[l]=-1,s&=~h}}function Km(n){if(Ct&6)throw Error(t(327));Xs();var s=ui(n,0);if(!(s&1))return zn(n,$()),null;var l=Fl(n,s);if(n.tag!==0&&l===2){var h=Ft(n);h!==0&&(s=h,l=ph(n,h))}if(l===1)throw l=aa,es(n,0),Ar(n,s),zn(n,$()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,ts(n,Bn,Yi),zn(n,$()),null}function gh(n,s){var l=Ct;Ct|=1;try{return n(s)}finally{Ct=l,Ct===0&&(js=$()+500,cl&&_r())}}function Qr(n){Tr!==null&&Tr.tag===0&&!(Ct&6)&&Xs();var s=Ct;Ct|=1;var l=si.transition,h=Mt;try{if(si.transition=null,Mt=1,n)return n()}finally{Mt=h,si.transition=l,Ct=s,!(Ct&6)&&_r()}}function vh(){qn=Ws.current,Gt(Ws)}function es(n,s){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Bx(l)),rn!==null)for(l=rn.return;l!==null;){var h=l;switch(bu(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&al();break;case 3:Hs(),Gt(Fn),Gt(wn),Bu();break;case 5:ku(h);break;case 4:Hs();break;case 13:Gt($t);break;case 19:Gt($t);break;case 10:Nu(h.type._context);break;case 22:case 23:vh()}l=l.return}if(pn=n,rn=n=Cr(n.current,null),yn=qn=s,un=0,aa=null,uh=Pl=Jr=0,Bn=la=null,qr!==null){for(s=0;s<qr.length;s++)if(l=qr[s],h=l.interleaved,h!==null){l.interleaved=null;var g=h.next,_=l.pending;if(_!==null){var A=_.next;_.next=g,h.next=A}l.pending=h}qr=null}return n}function Zm(n,s){do{var l=rn;try{if(Lu(),yl.current=Ml,_l){for(var h=Yt.memoizedState;h!==null;){var g=h.queue;g!==null&&(g.pending=null),h=h.next}_l=!1}if(Zr=0,fn=cn=Yt=null,ta=!1,na=0,ch.current=null,l===null||l.return===null){un=1,aa=s,rn=null;break}e:{var _=n,A=l.return,z=l,W=s;if(s=yn,z.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ae=W,Se=z,Te=Se.tag;if(!(Se.mode&1)&&(Te===0||Te===11||Te===15)){var _e=Se.alternate;_e?(Se.updateQueue=_e.updateQueue,Se.memoizedState=_e.memoizedState,Se.lanes=_e.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ge=wm(A);if(Ge!==null){Ge.flags&=-257,Mm(Ge,A,z,_,s),Ge.mode&1&&Sm(_,ae,s),s=Ge,W=ae;var Je=s.updateQueue;if(Je===null){var et=new Set;et.add(W),s.updateQueue=et}else Je.add(W);break e}else{if(!(s&1)){Sm(_,ae,s),xh();break e}W=Error(t(426))}}else if(jt&&z.mode&1){var nn=wm(A);if(nn!==null){!(nn.flags&65536)&&(nn.flags|=256),Mm(nn,A,z,_,s),Ru(Vs(W,z));break e}}_=W=Vs(W,z),un!==4&&(un=2),la===null?la=[_]:la.push(_),_=A;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var ee=ym(_,W,s);Xp(_,ee);break e;case 1:z=W;var Y=_.type,re=_.stateNode;if(!(_.flags&128)&&(typeof Y.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(Er===null||!Er.has(re)))){_.flags|=65536,s&=-s,_.lanes|=s;var Pe=_m(_,z,s);Xp(_,Pe);break e}}_=_.return}while(_!==null)}e0(l)}catch(tt){s=tt,rn===l&&l!==null&&(rn=l=l.return);continue}break}while(!0)}function Jm(){var n=Rl.current;return Rl.current=Ml,n===null?Ml:n}function xh(){(un===0||un===3||un===2)&&(un=4),pn===null||!(Jr&268435455)&&!(Pl&268435455)||Ar(pn,yn)}function Fl(n,s){var l=Ct;Ct|=2;var h=Jm();(pn!==n||yn!==s)&&(Yi=null,es(n,s));do try{uy();break}catch(g){Zm(n,g)}while(!0);if(Lu(),Ct=l,Rl.current=h,rn!==null)throw Error(t(261));return pn=null,yn=0,un}function uy(){for(;rn!==null;)Qm(rn)}function hy(){for(;rn!==null&&!le();)Qm(rn)}function Qm(n){var s=i0(n.alternate,n,qn);n.memoizedProps=n.pendingProps,s===null?e0(n):rn=s,ch.current=null}function e0(n){var s=n;do{var l=s.alternate;if(n=s.return,s.flags&32768){if(l=ry(l,s),l!==null){l.flags&=32767,rn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{un=6,rn=null;return}}else if(l=iy(l,s,qn),l!==null){rn=l;return}if(s=s.sibling,s!==null){rn=s;return}rn=s=n}while(s!==null);un===0&&(un=5)}function ts(n,s,l){var h=Mt,g=si.transition;try{si.transition=null,Mt=1,dy(n,s,l,h)}finally{si.transition=g,Mt=h}return null}function dy(n,s,l,h){do Xs();while(Tr!==null);if(Ct&6)throw Error(t(327));l=n.finishedWork;var g=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=l.lanes|l.childLanes;if(Sn(n,_),n===pn&&(rn=pn=null,yn=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Nl||(Nl=!0,r0(Ye,function(){return Xs(),null})),_=(l.flags&15990)!==0,l.subtreeFlags&15990||_){_=si.transition,si.transition=null;var A=Mt;Mt=1;var z=Ct;Ct|=4,ch.current=null,oy(n,l),Wm(l,n),Nx(xu),$a=!!vu,xu=vu=null,n.current=l,ay(l),ue(),Ct=z,Mt=A,si.transition=_}else n.current=l;if(Nl&&(Nl=!1,Tr=n,Il=g),_=n.pendingLanes,_===0&&(Er=null),Rt(l.stateNode),zn(n,$()),s!==null)for(h=n.onRecoverableError,l=0;l<s.length;l++)g=s[l],h(g.value,{componentStack:g.stack,digest:g.digest});if(Ll)throw Ll=!1,n=dh,dh=null,n;return Il&1&&n.tag!==0&&Xs(),_=n.pendingLanes,_&1?n===fh?ca++:(ca=0,fh=n):ca=0,_r(),null}function Xs(){if(Tr!==null){var n=Vf(Il),s=si.transition,l=Mt;try{if(si.transition=null,Mt=16>n?16:n,Tr===null)var h=!1;else{if(n=Tr,Tr=null,Il=0,Ct&6)throw Error(t(331));var g=Ct;for(Ct|=4,qe=n.current;qe!==null;){var _=qe,A=_.child;if(qe.flags&16){var z=_.deletions;if(z!==null){for(var W=0;W<z.length;W++){var ae=z[W];for(qe=ae;qe!==null;){var Se=qe;switch(Se.tag){case 0:case 11:case 15:oa(8,Se,_)}var Te=Se.child;if(Te!==null)Te.return=Se,qe=Te;else for(;qe!==null;){Se=qe;var _e=Se.sibling,Ge=Se.return;if(Bm(Se),Se===ae){qe=null;break}if(_e!==null){_e.return=Ge,qe=_e;break}qe=Ge}}}var Je=_.alternate;if(Je!==null){var et=Je.child;if(et!==null){Je.child=null;do{var nn=et.sibling;et.sibling=null,et=nn}while(et!==null)}}qe=_}}if(_.subtreeFlags&2064&&A!==null)A.return=_,qe=A;else e:for(;qe!==null;){if(_=qe,_.flags&2048)switch(_.tag){case 0:case 11:case 15:oa(9,_,_.return)}var ee=_.sibling;if(ee!==null){ee.return=_.return,qe=ee;break e}qe=_.return}}var Y=n.current;for(qe=Y;qe!==null;){A=qe;var re=A.child;if(A.subtreeFlags&2064&&re!==null)re.return=A,qe=re;else e:for(A=Y;qe!==null;){if(z=qe,z.flags&2048)try{switch(z.tag){case 0:case 11:case 15:Cl(9,z)}}catch(tt){Qt(z,z.return,tt)}if(z===A){qe=null;break e}var Pe=z.sibling;if(Pe!==null){Pe.return=z.return,qe=Pe;break e}qe=z.return}}if(Ct=g,_r(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(nt,n)}catch{}h=!0}return h}finally{Mt=l,si.transition=s}}return!1}function t0(n,s,l){s=Vs(l,s),s=ym(n,s,1),n=wr(n,s,1),s=Nn(),n!==null&&(tn(n,1,s),zn(n,s))}function Qt(n,s,l){if(n.tag===3)t0(n,n,l);else for(;s!==null;){if(s.tag===3){t0(s,n,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Er===null||!Er.has(h))){n=Vs(l,n),n=_m(s,n,1),s=wr(s,n,1),n=Nn(),s!==null&&(tn(s,1,n),zn(s,n));break}}s=s.return}}function fy(n,s,l){var h=n.pingCache;h!==null&&h.delete(s),s=Nn(),n.pingedLanes|=n.suspendedLanes&l,pn===n&&(yn&l)===l&&(un===4||un===3&&(yn&130023424)===yn&&500>$()-hh?es(n,0):uh|=l),zn(n,s)}function n0(n,s){s===0&&(n.mode&1?(s=Tt,Tt<<=1,!(Tt&130023424)&&(Tt=4194304)):s=1);var l=Nn();n=ji(n,s),n!==null&&(tn(n,s,l),zn(n,l))}function py(n){var s=n.memoizedState,l=0;s!==null&&(l=s.retryLane),n0(n,l)}function my(n,s){var l=0;switch(n.tag){case 13:var h=n.stateNode,g=n.memoizedState;g!==null&&(l=g.retryLane);break;case 19:h=n.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),n0(n,l)}var i0;i0=function(n,s,l){if(n!==null)if(n.memoizedProps!==s.pendingProps||Fn.current)On=!0;else{if(!(n.lanes&l)&&!(s.flags&128))return On=!1,ny(n,s,l);On=!!(n.flags&131072)}else On=!1,jt&&s.flags&1048576&&Fp(s,hl,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;bl(n,s),n=s.pendingProps;var g=Ds(s,wn.current);zs(s,l),g=Vu(null,s,h,n,g,l);var _=Gu();return s.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,kn(h)?(_=!0,ll(s)):_=!1,s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Uu(s),g.updater=El,s.stateNode=g,g._reactInternals=s,qu(s,h,n,l),s=Qu(null,s,h,!0,_,l)):(s.tag=0,jt&&_&&Tu(s),Ln(null,s,g,l),s=s.child),s;case 16:h=s.elementType;e:{switch(bl(n,s),n=s.pendingProps,g=h._init,h=g(h._payload),s.type=h,g=s.tag=vy(h),n=fi(h,n),g){case 0:s=Ju(null,s,h,n,l);break e;case 1:s=Rm(null,s,h,n,l);break e;case 11:s=Em(null,s,h,n,l);break e;case 14:s=Tm(null,s,h,fi(h.type,n),l);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,g=s.pendingProps,g=s.elementType===h?g:fi(h,g),Ju(n,s,h,g,l);case 1:return h=s.type,g=s.pendingProps,g=s.elementType===h?g:fi(h,g),Rm(n,s,h,g,l);case 3:e:{if(Pm(s),n===null)throw Error(t(387));h=s.pendingProps,_=s.memoizedState,g=_.element,jp(n,s),vl(s,h,null,l);var A=s.memoizedState;if(h=A.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){g=Vs(Error(t(423)),s),s=Lm(n,s,h,l,g);break e}else if(h!==g){g=Vs(Error(t(424)),s),s=Lm(n,s,h,l,g);break e}else for(Yn=vr(s.stateNode.containerInfo.firstChild),$n=s,jt=!0,di=null,l=Gp(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ks(),h===g){s=$i(n,s,l);break e}Ln(n,s,h,l)}s=s.child}return s;case 5:return Yp(s),n===null&&Cu(s),h=s.type,g=s.pendingProps,_=n!==null?n.memoizedProps:null,A=g.children,yu(h,g)?A=null:_!==null&&yu(h,_)&&(s.flags|=32),Cm(n,s),Ln(n,s,A,l),s.child;case 6:return n===null&&Cu(s),null;case 13:return Nm(n,s,l);case 4:return Fu(s,s.stateNode.containerInfo),h=s.pendingProps,n===null?s.child=Os(s,null,h,l):Ln(n,s,h,l),s.child;case 11:return h=s.type,g=s.pendingProps,g=s.elementType===h?g:fi(h,g),Em(n,s,h,g,l);case 7:return Ln(n,s,s.pendingProps,l),s.child;case 8:return Ln(n,s,s.pendingProps.children,l),s.child;case 12:return Ln(n,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,g=s.pendingProps,_=s.memoizedProps,A=g.value,zt(pl,h._currentValue),h._currentValue=A,_!==null)if(hi(_.value,A)){if(_.children===g.children&&!Fn.current){s=$i(n,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var z=_.dependencies;if(z!==null){A=_.child;for(var W=z.firstContext;W!==null;){if(W.context===h){if(_.tag===1){W=Xi(-1,l&-l),W.tag=2;var ae=_.updateQueue;if(ae!==null){ae=ae.shared;var Se=ae.pending;Se===null?W.next=W:(W.next=Se.next,Se.next=W),ae.pending=W}}_.lanes|=l,W=_.alternate,W!==null&&(W.lanes|=l),Iu(_.return,l,s),z.lanes|=l;break}W=W.next}}else if(_.tag===10)A=_.type===s.type?null:_.child;else if(_.tag===18){if(A=_.return,A===null)throw Error(t(341));A.lanes|=l,z=A.alternate,z!==null&&(z.lanes|=l),Iu(A,l,s),A=_.sibling}else A=_.child;if(A!==null)A.return=_;else for(A=_;A!==null;){if(A===s){A=null;break}if(_=A.sibling,_!==null){_.return=A.return,A=_;break}A=A.return}_=A}Ln(n,s,g.children,l),s=s.child}return s;case 9:return g=s.type,h=s.pendingProps.children,zs(s,l),g=ii(g),h=h(g),s.flags|=1,Ln(n,s,h,l),s.child;case 14:return h=s.type,g=fi(h,s.pendingProps),g=fi(h.type,g),Tm(n,s,h,g,l);case 15:return bm(n,s,s.type,s.pendingProps,l);case 17:return h=s.type,g=s.pendingProps,g=s.elementType===h?g:fi(h,g),bl(n,s),s.tag=1,kn(h)?(n=!0,ll(s)):n=!1,zs(s,l),vm(s,h,g),qu(s,h,g,l),Qu(null,s,h,!0,n,l);case 19:return Dm(n,s,l);case 22:return Am(n,s,l)}throw Error(t(156,s.tag))};function r0(n,s){return I(n,s)}function gy(n,s,l,h){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oi(n,s,l,h){return new gy(n,s,l,h)}function yh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function vy(n){if(typeof n=="function")return yh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===q)return 14}return 2}function Cr(n,s){var l=n.alternate;return l===null?(l=oi(n.tag,s,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=s,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,s=n.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function kl(n,s,l,h,g,_){var A=2;if(h=n,typeof n=="function")yh(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case F:return ns(l.children,g,_,s);case k:A=8,g|=8;break;case L:return n=oi(12,l,s,g|2),n.elementType=L,n.lanes=_,n;case X:return n=oi(13,l,s,g),n.elementType=X,n.lanes=_,n;case te:return n=oi(19,l,s,g),n.elementType=te,n.lanes=_,n;case ce:return Ol(l,g,_,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:A=10;break e;case N:A=9;break e;case Z:A=11;break e;case q:A=14;break e;case Q:A=16,h=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=oi(A,l,s,g),s.elementType=n,s.type=h,s.lanes=_,s}function ns(n,s,l,h){return n=oi(7,n,h,s),n.lanes=l,n}function Ol(n,s,l,h){return n=oi(22,n,h,s),n.elementType=ce,n.lanes=l,n.stateNode={isHidden:!1},n}function _h(n,s,l){return n=oi(6,n,null,s),n.lanes=l,n}function Sh(n,s,l){return s=oi(4,n.children!==null?n.children:[],n.key,s),s.lanes=l,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function xy(n,s,l,h,g){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_n(0),this.expirationTimes=_n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.identifierPrefix=h,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function wh(n,s,l,h,g,_,A,z,W){return n=new xy(n,s,l,z,W),s===1?(s=1,_===!0&&(s|=8)):s=0,_=oi(3,null,null,s),n.current=_,_.stateNode=n,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uu(_),n}function yy(n,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:h==null?null:""+h,children:n,containerInfo:s,implementation:l}}function s0(n){if(!n)return yr;n=n._reactInternals;e:{if(bi(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(kn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(kn(l))return Ip(n,l,s)}return s}function o0(n,s,l,h,g,_,A,z,W){return n=wh(l,h,!0,n,g,_,A,z,W),n.context=s0(null),l=n.current,h=Nn(),g=br(l),_=Xi(h,g),_.callback=s??null,wr(l,_,g),n.current.lanes=g,tn(n,g,h),zn(n,h),n}function Bl(n,s,l,h){var g=s.current,_=Nn(),A=br(g);return l=s0(l),s.context===null?s.context=l:s.pendingContext=l,s=Xi(_,A),s.payload={element:n},h=h===void 0?null:h,h!==null&&(s.callback=h),n=wr(g,s,A),n!==null&&(gi(n,g,A,_),gl(n,g,A)),A}function zl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function a0(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<s?l:s}}function Mh(n,s){a0(n,s),(n=n.alternate)&&a0(n,s)}function _y(){return null}var l0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Eh(n){this._internalRoot=n}Hl.prototype.render=Eh.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Bl(n,s,null,null)},Hl.prototype.unmount=Eh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;Qr(function(){Bl(null,n,null,null)}),s[Hi]=null}};function Hl(n){this._internalRoot=n}Hl.prototype.unstable_scheduleHydration=function(n){if(n){var s=jf();n={blockedOn:null,target:n,priority:s};for(var l=0;l<pr.length&&s!==0&&s<pr[l].priority;l++);pr.splice(l,0,n),l===0&&Yf(n)}};function Th(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Vl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function c0(){}function Sy(n,s,l,h,g){if(g){if(typeof h=="function"){var _=h;h=function(){var ae=zl(A);_.call(ae)}}var A=o0(s,h,n,0,null,!1,!1,"",c0);return n._reactRootContainer=A,n[Hi]=A.current,$o(n.nodeType===8?n.parentNode:n),Qr(),A}for(;g=n.lastChild;)n.removeChild(g);if(typeof h=="function"){var z=h;h=function(){var ae=zl(W);z.call(ae)}}var W=wh(n,0,!1,null,null,!1,!1,"",c0);return n._reactRootContainer=W,n[Hi]=W.current,$o(n.nodeType===8?n.parentNode:n),Qr(function(){Bl(s,W,l,h)}),W}function Gl(n,s,l,h,g){var _=l._reactRootContainer;if(_){var A=_;if(typeof g=="function"){var z=g;g=function(){var W=zl(A);z.call(W)}}Bl(s,A,n,g)}else A=Sy(l,s,n,g,h);return zl(A)}Gf=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var l=vn(s.pendingLanes);l!==0&&(Wr(s,l|1),zn(s,$()),!(Ct&6)&&(js=$()+500,_r()))}break;case 13:Qr(function(){var h=ji(n,1);if(h!==null){var g=Nn();gi(h,n,1,g)}}),Mh(n,1)}},Kc=function(n){if(n.tag===13){var s=ji(n,134217728);if(s!==null){var l=Nn();gi(s,n,134217728,l)}Mh(n,134217728)}},Wf=function(n){if(n.tag===13){var s=br(n),l=ji(n,s);if(l!==null){var h=Nn();gi(l,n,s,h)}Mh(n,s)}},jf=function(){return Mt},Xf=function(n,s){var l=Mt;try{return Mt=n,s()}finally{Mt=l}},Fe=function(n,s,l){switch(s){case"input":if(Ve(n,l),s=l.name,l.type==="radio"&&s!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==n&&h.form===n.form){var g=ol(h);if(!g)throw Error(t(90));xe(h),Ve(h,g)}}}break;case"textarea":pe(n,l);break;case"select":s=l.value,s!=null&&U(n,!!l.multiple,s,!1)}},Ht=gh,ln=Qr;var wy={usingClientEntryPoint:!1,Events:[Ko,Ns,ol,ze,pt,gh]},ua={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},My={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ga(n),n===null?null:n.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||_y,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{nt=Wl.inject(My),mt=Wl}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wy,Hn.createPortal=function(n,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Th(s))throw Error(t(200));return yy(n,s,null,l)},Hn.createRoot=function(n,s){if(!Th(n))throw Error(t(299));var l=!1,h="",g=l0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(g=s.onRecoverableError)),s=wh(n,1,!1,null,null,l,!1,h,g),n[Hi]=s.current,$o(n.nodeType===8?n.parentNode:n),new Eh(s)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ga(s),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return Qr(n)},Hn.hydrate=function(n,s,l){if(!Vl(s))throw Error(t(200));return Gl(null,n,s,!0,l)},Hn.hydrateRoot=function(n,s,l){if(!Th(n))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,g=!1,_="",A=l0;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=o0(s,null,n,1,l??null,g,!1,_,A),n[Hi]=s.current,$o(n),h)for(n=0;n<h.length;n++)l=h[n],g=l._getVersion,g=g(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,g]:s.mutableSourceEagerHydrationData.push(l,g);return new Hl(s)},Hn.render=function(n,s,l){if(!Vl(s))throw Error(t(200));return Gl(null,n,s,!1,l)},Hn.unmountComponentAtNode=function(n){if(!Vl(n))throw Error(t(40));return n._reactRootContainer?(Qr(function(){Gl(null,null,n,!1,function(){n._reactRootContainer=null,n[Hi]=null})}),!0):!1},Hn.unstable_batchedUpdates=gh,Hn.unstable_renderSubtreeIntoContainer=function(n,s,l,h){if(!Vl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Gl(n,s,l,!1,h)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var v0;function Dy(){if(v0)return Ch.exports;v0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Ch.exports=Iy(),Ch.exports}var x0;function Uy(){if(x0)return jl;x0=1;var r=Dy();return jl.createRoot=r.createRoot,jl.hydrateRoot=r.hydrateRoot,jl}var Fy=Uy();/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ff=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Wg=/^[\\/]{2}/;function ky(r,e){return e+r.replace(/\\/g,"/")}var y0="popstate";function _0(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function Oy(r={}){function e(o,a){let{pathname:c="/",search:u="",hash:d=""}=Ss(o.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),xd("",{pathname:c,search:u,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(o,a){let c=o.document.querySelector("base"),u="";if(c&&c.getAttribute("href")){let d=o.location.href,f=d.indexOf("#");u=f===-1?d:d.slice(0,f)}return u+"#"+(typeof a=="string"?a:Aa(a))}function i(o,a){ci(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(a)})`)}return zy(e,t,i,r)}function Xt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ci(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function By(){return Math.random().toString(36).substring(2,10)}function S0(r,e){return{usr:r.state,key:r.key,idx:e,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function xd(r,e,t=null,i,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Ss(e):e,state:t,key:e&&e.key||i||By(),mask:o}}function Aa({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Ss(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let i=r.indexOf("?");i>=0&&(e.search=r.substring(i),r=r.substring(0,i)),r&&(e.pathname=r)}return e}function zy(r,e,t,i={}){let{window:o=document.defaultView,v5Compat:a=!1}=i,c=o.history,u="POP",d=null,f=p();f==null&&(f=0,c.replaceState({...c.state,idx:f},""));function p(){return(c.state||{idx:null}).idx}function m(){u="POP";let S=p(),x=S==null?null:S-f;f=S,d&&d({action:u,location:M.location,delta:x})}function v(S,x){u="PUSH";let R=_0(S)?S:xd(M.location,S,x);t&&t(R,S),f=p()+1;let T=S0(R,f),E=M.createHref(R.mask||R);try{c.pushState(T,"",E)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;o.location.assign(E)}a&&d&&d({action:u,location:M.location,delta:1})}function y(S,x){u="REPLACE";let R=_0(S)?S:xd(M.location,S,x);t&&t(R,S),f=p();let T=S0(R,f),E=M.createHref(R.mask||R);c.replaceState(T,"",E),a&&d&&d({action:u,location:M.location,delta:0})}function w(S){return Hy(o,S)}let M={get action(){return u},get location(){return r(o,c)},listen(S){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(y0,m),d=S,()=>{o.removeEventListener(y0,m),d=null}},createHref(S){return e(o,S)},createURL:w,encodeLocation(S){let x=w(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:y,go(S){return c.go(S)}};return M}function Hy(r,e,t=!1){let i="http://localhost";r&&(i=r.location.origin!=="null"?r.location.origin:r.location.href),Xt(i,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:Aa(e);return o=o.replace(/ $/,"%20"),!t&&Wg.test(o)&&(o=i+o),new URL(o,i)}function jg(r,e,t="/"){return Vy(r,e,t,!1)}function Vy(r,e,t,i,o){let a=typeof e=="string"?Ss(e):e,c=or(a.pathname||"/",t);if(c==null)return null;let u=Gy(r),d=null,f=e_(c);for(let p=0;d==null&&p<u.length;++p)d=Qy(u[p],f,i);return d}function Gy(r){let e=Xg(r);return Wy(e),e}function Xg(r,e=[],t=[],i="",o=!1){let a=(c,u,d=o,f)=>{let p={relativePath:f===void 0?c.path||"":f,caseSensitive:c.caseSensitive===!0,childrenIndex:u,route:c};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(i)&&d)return;Xt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length)}let m=Ei([i,p.relativePath]),v=t.concat(p);c.children&&c.children.length>0&&(Xt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Xg(c.children,e,v,m,d)),!(c.path==null&&!c.index)&&e.push({path:m,score:Zy(m,c.index),routesMeta:v.map((y,w)=>{let[M,S]=qg(y.relativePath,y.caseSensitive,w===v.length-1);return{...y,matcher:M,compiledParams:S}})})};return r.forEach((c,u)=>{var d;if(c.path===""||!((d=c.path)!=null&&d.includes("?")))a(c,u);else for(let f of $g(c.path))a(c,u,!0,f)}),e}function $g(r){let e=r.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let c=$g(i.join("/")),u=[];return u.push(...c.map(d=>d===""?a:[a,d].join("/"))),o&&u.push(...c),u.map(d=>r.startsWith("/")&&d===""?"/":d)}function Wy(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:Jy(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var jy=/^:[\w-]+$/,Xy=3,$y=2,Yy=1,qy=10,Ky=-2,w0=r=>r==="*";function Zy(r,e){let t=r.split("/"),i=t.length;return t.some(w0)&&(i+=Ky),e&&(i+=$y),t.filter(o=>!w0(o)).reduce((o,a)=>o+(jy.test(a)?Xy:a===""?Yy:qy),i)}function Jy(r,e){return r.length===e.length&&r.slice(0,-1).every((i,o)=>i===e[o])?r[r.length-1]-e[e.length-1]:0}function Qy(r,e,t=!1){let{routesMeta:i}=r,o={},a="/",c=[];for(let u=0;u<i.length;++u){let d=i[u],f=u===i.length-1,p=a==="/"?e:e.slice(a.length)||"/",m={path:d.relativePath,caseSensitive:d.caseSensitive,end:f},v=d.matcher&&d.compiledParams?Yg(m,p,d.matcher,d.compiledParams):Pc(m,p),y=d.route;if(!v&&f&&t&&!i[i.length-1].route.index&&(v=Pc({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},p)),!v)return null;Object.assign(o,v.params),c.push({params:o,pathname:Ei([a,v.pathname]),pathnameBase:i_(Ei([a,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(a=Ei([a,v.pathnameBase]))}return c}function Pc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,i]=qg(r.path,r.caseSensitive,r.end);return Yg(r,e,t,i)}function Yg(r,e,t,i){let o=e.match(t);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:i.reduce((f,{paramName:p,isOptional:m},v)=>{if(p==="*"){let w=u[v]||"";c=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const y=u[v];return m&&!y?f[p]=void 0:f[p]=(y||"").replace(/%2F/g,"/"),f},{}),pathname:a,pathnameBase:c,pattern:r}}function qg(r,e=!1,t=!0){ci(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let i=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,u,d,f,p)=>{if(i.push({paramName:u,isOptional:d!=null}),d){let m=p.charAt(f+c.length);return m&&m!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(i.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function e_(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ci(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function or(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=r.charAt(t);return i&&i!=="/"?null:r.slice(t)||"/"}function t_(r,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof r=="string"?Ss(r):r,a;return t?(t=Kg(t),t.startsWith("/")?a=M0(t.substring(1),"/"):a=M0(t,e)):a=e,{pathname:a,search:r_(i),hash:s_(o)}}function M0(r,e){let t=Lc(e).split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Lh(r,e,t,i){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function n_(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function pf(r){let e=n_(r);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Bc(r,e,t,i=!1){let o;typeof r=="string"?o=Ss(r):(o={...r},Xt(!o.pathname||!o.pathname.includes("?"),Lh("?","pathname","search",o)),Xt(!o.pathname||!o.pathname.includes("#"),Lh("#","pathname","hash",o)),Xt(!o.search||!o.search.includes("#"),Lh("#","search","hash",o)));let a=r===""||o.pathname==="",c=a?"/":o.pathname,u;if(c==null)u=t;else{let m=e.length-1;if(!i&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),m-=1;o.pathname=v.join("/")}u=m>=0?e[m]:"/"}let d=t_(o,u),f=c&&c!=="/"&&c.endsWith("/"),p=(a||c===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(f||p)&&(d.pathname+="/"),d}var Kg=r=>r.replace(/[\\/]{2,}/g,"/"),Ei=r=>Kg(r.join("/")),Lc=r=>r.replace(/\/+$/,""),i_=r=>Lc(r).replace(/^\/*/,"/"),r_=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,s_=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,o_=class{constructor(r,e,t,i=!1){this.status=r,this.statusText=e||"",this.internal=i,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function a_(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function l_(r){let e=r.map(t=>t.route.path).filter(Boolean);return Ei(e)||"/"}var Zg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Jg(r,e){let t=r;if(typeof t!="string"||!ff.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let i=t,o=!1;if(Zg)try{let a=new URL(window.location.href),c=Wg.test(t)?new URL(ky(t,a.protocol)):new URL(t),u=or(c.pathname,e);c.origin===a.origin&&u!=null?t=u+c.search+c.hash:o=!0}catch{ci(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Qg=["POST","PUT","PATCH","DELETE"];new Set(Qg);var c_=["GET",...Qg];new Set(c_);var u_=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function h_(r){try{return u_.includes(new URL(r).protocol)}catch{return!1}}var Ao=j.createContext(null);Ao.displayName="DataRouter";var zc=j.createContext(null);zc.displayName="DataRouterState";var ev=j.createContext(!1);function d_(){return j.useContext(ev)}var tv=j.createContext({isTransitioning:!1});tv.displayName="ViewTransition";var f_=j.createContext(new Map);f_.displayName="Fetchers";var p_=j.createContext(null);p_.displayName="Await";var ei=j.createContext(null);ei.displayName="Navigation";var Da=j.createContext(null);Da.displayName="Location";var Fi=j.createContext({outlet:null,matches:[],isDataRoute:!1});Fi.displayName="Route";var mf=j.createContext(null);mf.displayName="RouteError";var nv="REACT_ROUTER_ERROR",m_="REDIRECT",g_="ROUTE_ERROR_RESPONSE";function v_(r){if(r.startsWith(`${nv}:${m_}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function x_(r){if(r.startsWith(`${nv}:${g_}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new o_(e.status,e.statusText,e.data)}catch{}}function y_(r,{relative:e}={}){Xt(Co(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=j.useContext(ei),{hash:o,pathname:a,search:c}=Ua(r,{relative:e}),u=a;return t!=="/"&&(u=a==="/"?t:Ei([t,a])),i.createHref({pathname:u,search:c,hash:o})}function Co(){return j.useContext(Da)!=null}function ki(){return Xt(Co(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Da).location}var iv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function rv(r){j.useContext(ei).static||j.useLayoutEffect(r)}function Hc(){let{isDataRoute:r}=j.useContext(Fi);return r?N_():__()}function __(){Xt(Co(),"useNavigate() may be used only in the context of a <Router> component.");let r=j.useContext(Ao),{basename:e,navigator:t}=j.useContext(ei),{matches:i}=j.useContext(Fi),{pathname:o}=ki(),a=JSON.stringify(pf(i)),c=j.useRef(!1);return rv(()=>{c.current=!0}),j.useCallback((d,f={})=>{if(ci(c.current,iv),!c.current)return;if(typeof d=="number"){t.go(d);return}let p=Bc(d,JSON.parse(a),o,f.relative==="path");r==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Ei([e,p.pathname])),(f.replace?t.replace:t.push)(p,f.state,f)},[e,t,a,o,r])}j.createContext(null);function Ua(r,{relative:e}={}){let{matches:t}=j.useContext(Fi),{pathname:i}=ki(),o=JSON.stringify(pf(t));return j.useMemo(()=>Bc(r,JSON.parse(o),i,e==="path"),[r,o,i,e])}function S_(r,e){return sv(r,e)}function sv(r,e,t){var S;Xt(Co(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=j.useContext(ei),{matches:o}=j.useContext(Fi),a=o[o.length-1],c=a?a.params:{},u=a?a.pathname:"/",d=a?a.pathnameBase:"/",f=a&&a.route;{let x=f&&f.path||"";av(u,!f||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let p=ki(),m;if(e){let x=typeof e=="string"?Ss(e):e;Xt(d==="/"||((S=x.pathname)==null?void 0:S.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${x.pathname}" was given in the \`location\` prop.`),m=x}else m=p;let v=m.pathname||"/",y=v;if(d!=="/"){let x=d.replace(/^\//,"").split("/");y="/"+v.replace(/^\//,"").split("/").slice(x.length).join("/")}let w=t&&t.state.matches.length?t.state.matches.map(x=>Object.assign(x,{route:t.manifest[x.route.id]||x.route})):jg(r,{pathname:y});ci(f||w!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),ci(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=b_(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},c,x.params),pathname:Ei([d,i.encodeLocation?i.encodeLocation(x.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?d:Ei([d,i.encodeLocation?i.encodeLocation(x.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:x.pathnameBase])})),o,t);return e&&M?j.createElement(Da.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...m},navigationType:"POP"}},M):M}function w_(){let r=L_(),e=a_(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:a},"ErrorBoundary")," or"," ",j.createElement("code",{style:a},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),t?j.createElement("pre",{style:o},t):null,c)}var M_=j.createElement(w_,null),ov=class extends j.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=x_(r.digest);t&&(r=t)}let e=r!==void 0?j.createElement(Fi.Provider,{value:this.props.routeContext},j.createElement(mf.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?j.createElement(E_,{error:r},e):e}};ov.contextType=ev;var Nh=new WeakMap;function E_({children:r,error:e}){let{basename:t}=j.useContext(ei);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=v_(e.digest);if(i){let o=Nh.get(e);if(o)throw o;let a=Jg(i.location,t),c=a.absoluteURL||a.to;if(h_(c))throw new Error("Invalid redirect location");if(Zg&&!Nh.get(e))if(a.isExternal||i.reloadDocument)window.location.href=c;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:i.replace}));throw Nh.set(e,u),u}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c}`})}}return r}function T_({routeContext:r,match:e,children:t}){let i=j.useContext(Ao);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),j.createElement(Fi.Provider,{value:r},t)}function b_(r,e=[],t){let i=t==null?void 0:t.state;if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let o=r,a=i==null?void 0:i.errors;if(a!=null){let p=o.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);Xt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,u=-1;if(t&&i){c=i.renderFallback;for(let p=0;p<o.length;p++){let m=o[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=p),m.route.id){let{loaderData:v,errors:y}=i,w=m.route.loader&&!v.hasOwnProperty(m.route.id)&&(!y||y[m.route.id]===void 0);if(m.route.lazy||w){t.isStatic&&(c=!0),u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}}let d=t==null?void 0:t.onError,f=i&&d?(p,m)=>{var v,y;d(p,{location:i.location,params:((y=(v=i.matches)==null?void 0:v[0])==null?void 0:y.params)??{},pattern:l_(i.matches),errorInfo:m})}:void 0;return o.reduceRight((p,m,v)=>{let y,w=!1,M=null,S=null;i&&(y=a&&m.route.id?a[m.route.id]:void 0,M=m.route.errorElement||M_,c&&(u<0&&v===0?(av("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,S=null):u===v&&(w=!0,S=m.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,v+1)),R=()=>{let T;return y?T=M:w?T=S:m.route.Component?T=j.createElement(m.route.Component,null):m.route.element?T=m.route.element:T=p,j.createElement(T_,{match:m,routeContext:{outlet:p,matches:x,isDataRoute:i!=null},children:T})};return i&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?j.createElement(ov,{location:i.location,revalidation:i.revalidation,component:M,error:y,children:R(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:f}):R()},null)}function gf(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function A_(r){let e=j.useContext(Ao);return Xt(e,gf(r)),e}function C_(r){let e=j.useContext(zc);return Xt(e,gf(r)),e}function R_(r){let e=j.useContext(Fi);return Xt(e,gf(r)),e}function vf(r){let e=R_(r),t=e.matches[e.matches.length-1];return Xt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function P_(){return vf("useRouteId")}function L_(){var i;let r=j.useContext(mf),e=C_("useRouteError"),t=vf("useRouteError");return r!==void 0?r:(i=e.errors)==null?void 0:i[t]}function N_(){let{router:r}=A_("useNavigate"),e=vf("useNavigate"),t=j.useRef(!1);return rv(()=>{t.current=!0}),j.useCallback(async(o,a={})=>{ci(t.current,iv),t.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...a}))},[r,e])}var E0={};function av(r,e,t){!e&&!E0[r]&&(E0[r]=!0,ci(!1,t))}j.memo(I_);function I_({routes:r,manifest:e,future:t,state:i,isStatic:o,onError:a}){return sv(r,void 0,{manifest:e,state:i,isStatic:o,onError:a,future:t})}function D_({to:r,replace:e,state:t,relative:i}){Xt(Co(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=j.useContext(ei);ci(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=j.useContext(Fi),{pathname:c}=ki(),u=Hc(),d=Bc(r,pf(a),c,i==="path"),f=JSON.stringify(d);return j.useEffect(()=>{u(JSON.parse(f),{replace:e,state:t,relative:i})},[u,f,i,e,t]),null}function _c(r){Xt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function U_({basename:r="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:a=!1,useTransitions:c}){Xt(!Co(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=r.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:u,navigator:o,static:a,useTransitions:c,future:{}}),[u,o,a,c]);typeof t=="string"&&(t=Ss(t));let{pathname:f="/",search:p="",hash:m="",state:v=null,key:y="default",mask:w}=t,M=j.useMemo(()=>{let S=or(f,u);return S==null?null:{location:{pathname:S,search:p,hash:m,state:v,key:y,mask:w},navigationType:i}},[u,f,p,m,v,y,i,w]);return ci(M!=null,`<Router basename="${u}"> is not able to match the URL "${f}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:j.createElement(ei.Provider,{value:d},j.createElement(Da.Provider,{children:e,value:M}))}function F_({children:r,location:e}){return S_(yd(r),e)}function yd(r,e=[]){let t=[];return j.Children.forEach(r,(i,o)=>{if(!j.isValidElement(i))return;let a=[...e,o];if(i.type===j.Fragment){t.push.apply(t,yd(i.props.children,a));return}Xt(i.type===_c,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=yd(i.props.children,a)),t.push(c)}),t}var Sc="get",wc="application/x-www-form-urlencoded";function Vc(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function k_(r){return Vc(r)&&r.tagName.toLowerCase()==="button"}function O_(r){return Vc(r)&&r.tagName.toLowerCase()==="form"}function B_(r){return Vc(r)&&r.tagName.toLowerCase()==="input"}function z_(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function H_(r,e){return r.button===0&&(!e||e==="_self")&&!z_(r)}var Xl=null;function V_(){if(Xl===null)try{new FormData(document.createElement("form"),0),Xl=!1}catch{Xl=!0}return Xl}var G_=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ih(r){return r!=null&&!G_.has(r)?(ci(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wc}"`),null):r}function W_(r,e){let t,i,o,a,c;if(O_(r)){let u=r.getAttribute("action");i=u?or(u,e):null,t=r.getAttribute("method")||Sc,o=Ih(r.getAttribute("enctype"))||wc,a=new FormData(r)}else if(k_(r)||B_(r)&&(r.type==="submit"||r.type==="image")){let u=r.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=r.getAttribute("formaction")||u.getAttribute("action");if(i=d?or(d,e):null,t=r.getAttribute("formmethod")||u.getAttribute("method")||Sc,o=Ih(r.getAttribute("formenctype"))||Ih(u.getAttribute("enctype"))||wc,a=new FormData(u,r),!V_()){let{name:f,type:p,value:m}=r;if(p==="image"){let v=f?`${f}.`:"";a.append(`${v}x`,"0"),a.append(`${v}y`,"0")}else f&&a.append(f,m)}}else{if(Vc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Sc,i=null,o=wc,c=r}return a&&o==="text/plain"&&(c=a,a=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:a,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function xf(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function lv(r,e,t,i){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${i}`:o.pathname=`${o.pathname}.${i}`:o.pathname==="/"?o.pathname=`_root.${i}`:e&&or(o.pathname,e)==="/"?o.pathname=`${Lc(e)}/_root.${i}`:o.pathname=`${Lc(o.pathname)}.${i}`,o}async function j_(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function X_(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function $_(r,e,t){let i=await Promise.all(r.map(async o=>{let a=e.routes[o.route.id];if(a){let c=await j_(a,t);return c.links?c.links():[]}return[]}));return Z_(i.flat(1).filter(X_).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function T0(r,e,t,i,o,a){let c=(d,f)=>t[f]?d.route.id!==t[f].route.id:!0,u=(d,f)=>{var p;return t[f].pathname!==d.pathname||((p=t[f].route.path)==null?void 0:p.endsWith("*"))&&t[f].params["*"]!==d.params["*"]};return a==="assets"?e.filter((d,f)=>c(d,f)||u(d,f)):a==="data"?e.filter((d,f)=>{var m;let p=i.routes[d.route.id];if(!p||!p.hasLoader)return!1;if(c(d,f)||u(d,f))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((m=t[0])==null?void 0:m.params)||{},nextUrl:new URL(r,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Y_(r,e,{includeHydrateFallback:t}={}){return q_(r.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let a=[o.module];return o.clientActionModule&&(a=a.concat(o.clientActionModule)),o.clientLoaderModule&&(a=a.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(a=a.concat(o.hydrateFallbackModule)),o.imports&&(a=a.concat(o.imports)),a}).flat(1))}function q_(r){return[...new Set(r)]}function K_(r){let e={},t=Object.keys(r).sort();for(let i of t)e[i]=r[i];return e}function Z_(r,e){let t=new Set;return new Set(e),r.reduce((i,o)=>{let a=JSON.stringify(K_(o));return t.has(a)||(t.add(a),i.push({key:a,link:o})),i},[])}function yf(){let r=j.useContext(Ao);return xf(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function J_(){let r=j.useContext(zc);return xf(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var _f=j.createContext(void 0);_f.displayName="FrameworkContext";function Gc(){let r=j.useContext(_f);return xf(r,"You must render this element inside a <HydratedRouter> element"),r}function Q_(r,e){let t=j.useContext(_f),[i,o]=j.useState(!1),[a,c]=j.useState(!1),{onFocus:u,onBlur:d,onMouseEnter:f,onMouseLeave:p,onTouchStart:m}=e,v=j.useRef(null);j.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let M=x=>{x.forEach(R=>{c(R.isIntersecting)})},S=new IntersectionObserver(M,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[r]),j.useEffect(()=>{if(i){let M=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(M)}}},[i]);let y=()=>{o(!0)},w=()=>{o(!1),c(!1)};return t?r!=="intent"?[a,v,{}]:[a,v,{onFocus:da(u,y),onBlur:da(d,w),onMouseEnter:da(f,y),onMouseLeave:da(p,w),onTouchStart:da(m,y)}]:[!1,v,{}]}function da(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function eS({page:r,...e}){let t=d_(),{nonce:i}=Gc(),{router:o}=yf(),a=j.useMemo(()=>jg(o.routes,r,o.basename),[o.routes,r,o.basename]);return a?(e.nonce==null&&i&&(e={...e,nonce:i}),t?j.createElement(nS,{page:r,matches:a,...e}):j.createElement(iS,{page:r,matches:a,...e})):null}function tS(r){let{manifest:e,routeModules:t}=Gc(),[i,o]=j.useState([]);return j.useEffect(()=>{let a=!1;return $_(r,e,t).then(c=>{a||o(c)}),()=>{a=!0}},[r,e,t]),i}function nS({page:r,matches:e,...t}){let i=ki(),{future:o}=Gc(),{basename:a}=yf(),c=j.useMemo(()=>{if(r===i.pathname+i.search+i.hash)return[];let u=lv(r,a,o.v8_trailingSlashAwareDataRequests,"rsc"),d=!1,f=[];for(let p of e)typeof p.route.shouldRevalidate=="function"?d=!0:f.push(p.route.id);return d&&f.length>0&&u.searchParams.set("_routes",f.join(",")),[u.pathname+u.search]},[a,o.v8_trailingSlashAwareDataRequests,r,i,e]);return j.createElement(j.Fragment,null,c.map(u=>j.createElement("link",{key:u,rel:"prefetch",as:"fetch",href:u,...t})))}function iS({page:r,matches:e,...t}){let i=ki(),{future:o,manifest:a,routeModules:c}=Gc(),{basename:u}=yf(),{loaderData:d,matches:f}=J_(),p=j.useMemo(()=>T0(r,e,f,a,i,"data"),[r,e,f,a,i]),m=j.useMemo(()=>T0(r,e,f,a,i,"assets"),[r,e,f,a,i]),v=j.useMemo(()=>{if(r===i.pathname+i.search+i.hash)return[];let M=new Set,S=!1;if(e.forEach(R=>{var E;let T=a.routes[R.route.id];!T||!T.hasLoader||(!p.some(B=>B.route.id===R.route.id)&&R.route.id in d&&((E=c[R.route.id])!=null&&E.shouldRevalidate)||T.hasClientLoader?S=!0:M.add(R.route.id))}),M.size===0)return[];let x=lv(r,u,o.v8_trailingSlashAwareDataRequests,"data");return S&&M.size>0&&x.searchParams.set("_routes",e.filter(R=>M.has(R.route.id)).map(R=>R.route.id).join(",")),[x.pathname+x.search]},[u,o.v8_trailingSlashAwareDataRequests,d,i,a,p,e,r,c]),y=j.useMemo(()=>Y_(m,a),[m,a]),w=tS(m);return j.createElement(j.Fragment,null,v.map(M=>j.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...t})),y.map(M=>j.createElement("link",{key:M,rel:"modulepreload",href:M,...t})),w.map(({key:M,link:S})=>j.createElement("link",{key:M,nonce:t.nonce,...S,crossOrigin:S.crossOrigin??t.crossOrigin})))}function rS(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var sS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sS&&(window.__reactRouterVersion="7.18.2")}catch{}function oS({basename:r,children:e,useTransitions:t,window:i}){let o=j.useRef();o.current==null&&(o.current=Oy({window:i,v5Compat:!0}));let a=o.current,[c,u]=j.useState({action:a.action,location:a.location}),d=j.useCallback(f=>{t===!1?u(f):j.startTransition(()=>u(f))},[t]);return j.useLayoutEffect(()=>a.listen(d),[a,d]),j.createElement(U_,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:a,useTransitions:t})}var Sf=j.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:a,replace:c,mask:u,state:d,target:f,to:p,preventScrollReset:m,viewTransition:v,defaultShouldRevalidate:y,...w},M){let{basename:S,navigator:x,useTransitions:R}=j.useContext(ei),T=typeof p=="string"&&ff.test(p),E=Jg(p,S);p=E.to;let B=y_(p,{relative:o}),D=ki(),F=null;if(u){let q=Bc(u,[],D.mask?D.mask.pathname:"/",!0);S!=="/"&&(q.pathname=q.pathname==="/"?S:Ei([S,q.pathname])),F=x.createHref(q)}let[k,L,b]=Q_(i,w),N=uS(p,{replace:c,mask:u,state:d,target:f,preventScrollReset:m,relative:o,viewTransition:v,defaultShouldRevalidate:y,useTransitions:R});function Z(q){e&&e(q),q.defaultPrevented||N(q)}let X=!(E.isExternal||a),te=j.createElement("a",{...w,...b,href:(X?F:void 0)||E.absoluteURL||B,onClick:X?Z:e,ref:rS(M,L),target:f,"data-discover":!T&&t==="render"?"true":void 0});return k&&!T?j.createElement(j.Fragment,null,te,j.createElement(eS,{page:B})):te});Sf.displayName="Link";var aS=j.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:a,to:c,viewTransition:u,children:d,...f},p){let m=Ua(c,{relative:f.relative}),v=ki(),y=j.useContext(zc),{navigator:w,basename:M}=j.useContext(ei),S=y!=null&&mS(m)&&u===!0,x=w.encodeLocation?w.encodeLocation(m).pathname:m.pathname,R=v.pathname,T=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;t||(R=R.toLowerCase(),T=T?T.toLowerCase():null,x=x.toLowerCase()),T&&M&&(T=or(T,M)||T);const E=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let B=R===x||!o&&R.startsWith(x)&&R.charAt(E)==="/",D=T!=null&&(T===x||!o&&T.startsWith(x)&&T.charAt(x.length)==="/"),F={isActive:B,isPending:D,isTransitioning:S},k=B?e:void 0,L;typeof i=="function"?L=i(F):L=[i,B?"active":null,D?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let b=typeof a=="function"?a(F):a;return j.createElement(Sf,{...f,"aria-current":k,className:L,ref:p,style:b,to:c,viewTransition:u},typeof d=="function"?d(F):d)});aS.displayName="NavLink";var lS=j.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:a,method:c=Sc,action:u,onSubmit:d,relative:f,preventScrollReset:p,viewTransition:m,defaultShouldRevalidate:v,...y},w)=>{let{useTransitions:M}=j.useContext(ei),S=fS(),x=pS(u,{relative:f}),R=c.toLowerCase()==="get"?"get":"post",T=typeof u=="string"&&ff.test(u),E=B=>{if(d&&d(B),B.defaultPrevented)return;B.preventDefault();let D=B.nativeEvent.submitter,F=(D==null?void 0:D.getAttribute("formmethod"))||c,k=()=>S(D||B.currentTarget,{fetcherKey:e,method:F,navigate:t,replace:o,state:a,relative:f,preventScrollReset:p,viewTransition:m,defaultShouldRevalidate:v});M&&t!==!1?j.startTransition(()=>k()):k()};return j.createElement("form",{ref:w,method:R,action:x,onSubmit:i?d:E,...y,"data-discover":!T&&r==="render"?"true":void 0})});lS.displayName="Form";function cS(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cv(r){let e=j.useContext(Ao);return Xt(e,cS(r)),e}function uS(r,{target:e,replace:t,mask:i,state:o,preventScrollReset:a,relative:c,viewTransition:u,defaultShouldRevalidate:d,useTransitions:f}={}){let p=Hc(),m=ki(),v=Ua(r,{relative:c});return j.useCallback(y=>{if(H_(y,e)){y.preventDefault();let w=t!==void 0?t:Aa(m)===Aa(v),M=()=>p(r,{replace:w,mask:i,state:o,preventScrollReset:a,relative:c,viewTransition:u,defaultShouldRevalidate:d});f?j.startTransition(()=>M()):M()}},[m,p,v,t,i,o,e,r,a,c,u,d,f])}var hS=0,dS=()=>`__${String(++hS)}__`;function fS(){let{router:r}=cv("useSubmit"),{basename:e}=j.useContext(ei),t=P_(),i=r.fetch,o=r.navigate;return j.useCallback(async(a,c={})=>{let{action:u,method:d,encType:f,formData:p,body:m}=W_(a,e);if(c.navigate===!1){let v=c.fetcherKey||dS();await i(v,t,c.action||u,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:p,body:m,formMethod:c.method||d,formEncType:c.encType||f,flushSync:c.flushSync})}else await o(c.action||u,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:p,body:m,formMethod:c.method||d,formEncType:c.encType||f,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[i,o,e,t])}function pS(r,{relative:e}={}){let{basename:t}=j.useContext(ei),i=j.useContext(Fi);Xt(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),a={...Ua(r||".",{relative:e})},c=ki();if(r==null){a.search=c.search;let u=new URLSearchParams(a.search),d=u.getAll("index");if(d.some(p=>p==="")){u.delete("index"),d.filter(m=>m).forEach(m=>u.append("index",m));let p=u.toString();a.search=p?`?${p}`:""}}return(!r||r===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:Ei([t,a.pathname])),Aa(a)}function mS(r,{relative:e}={}){let t=j.useContext(tv);Xt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=cv("useViewTransitionState"),o=Ua(r,{relative:e});if(!t.isTransitioning)return!1;let a=or(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=or(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Pc(o.pathname,c)!=null||Pc(o.pathname,a)!=null}let gS=class{constructor(e){Ne(this,"particles");this.particles=Array.from({length:e},()=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,size:Math.random()*2+1,speedX:(Math.random()-.5)*.5,speedY:(Math.random()-.5)*.5}))}update(e,t){this.particles.forEach(i=>{i.x+=i.speedX,i.y+=i.speedY,i.x<0&&(i.x=window.innerWidth),i.x>window.innerWidth&&(i.x=0),i.y<0&&(i.y=window.innerHeight),i.y>window.innerHeight&&(i.y=0),e.beginPath(),e.arc(i.x,i.y,i.size,0,Math.PI*2),e.fillStyle=t,e.fill()})}};class vS{draw(e,t,i,o){e.strokeStyle=o,e.lineWidth=.5,e.globalAlpha=.2;const a=64;for(let c=0;c<t;c+=a)e.beginPath(),e.moveTo(c,0),e.lineTo(c,i),e.stroke();for(let c=0;c<i;c+=a)e.beginPath(),e.moveTo(0,c),e.lineTo(t,c),e.stroke();e.globalAlpha=1}}const ps=[{name:"cyberpunk",label:"Cyberpunk",icon:"🌟",colors:["#ff00ff","#00ffff","#fffe00","#ff007f","#00ff7f"],background:"#1a1a1a",particleColor:"#ff00ff"},{name:"midnight",label:"Midnight",icon:"🌙",colors:["#1e3a8a","#3b82f6","#9333ea","#4c51bf","#2d3748"],background:"#000814",particleColor:"#3b82f6"},{name:"neon",label:"Neon",icon:"⚡",colors:["#39ff14","#ff073a","#ff6e40","#ff9f1c","#2ec4b6"],background:"#0f0f0f",particleColor:"#ff073a"},{name:"synthwave",label:"Synthwave",icon:"🌆",colors:["#ff6ec7","#67e8f9","#d946ef","#ff8c00","#ff4500"],background:"#2e1065",particleColor:"#ff6ec7"}],xS=({selectedTheme:r})=>{const[e,t]=j.useState(()=>ps.find(p=>p.name===r)||ps[0]),i=j.useRef(null),o=j.useRef(null),a=j.useRef(new vS),c=j.useRef(),u=j.useRef([]),d=()=>{const p=window.innerWidth*.02;return Math.min(Math.max(p,15),30)},f=p=>{const m=[],v=d();for(let y=0;y<p;y++){const w=[[[1,1,1,1]],[[1,1],[1,1]],[[0,1,0],[1,1,1]],[[1,1,0],[0,1,1]],[[0,1,1],[1,1,0]],[[1,1,1],[1,0,0]],[[1,1,1],[0,0,1]]][Math.floor(Math.random()*7)],M=e.colors[Math.floor(Math.random()*e.colors.length)],S=[.4,.6,1,1.5,2][Math.floor(Math.random()*5)];m.push({shape:w,color:M,x:Math.random()*window.innerWidth,y:-(w.length*v*S)-Math.random()*window.innerHeight*2,speed:2+Math.random()*.3/S,pattern:"straight",opacity:1,rotation:0,scale:S*(window.innerWidth/1920),originalScale:S*(window.innerWidth/1920),isReset:!1})}return m};return j.useEffect(()=>{u.current.length||(u.current=f(10))},[]),j.useEffect(()=>{const p=ps.find(m=>m.name===r)||ps[0];t(p),document.body.style.background=p.background,u.current=u.current.map(m=>({...m,color:p.colors[Math.floor(Math.random()*p.colors.length)]}))},[r]),j.useEffect(()=>{const p=i.current,m=p==null?void 0:p.getContext("2d");if(!p||!m)return;const v=d(),y=()=>{const E=window.devicePixelRatio||1,B=window.innerWidth,D=window.innerHeight;p.width=B*E,p.height=D*E,p.style.width=`${B}px`,p.style.height=`${D}px`,m.scale(E,E),u.current=u.current.map(F=>({...F,scale:F.originalScale*(window.innerWidth/1920)}))};y(),window.addEventListener("resize",y);const w=[[[1,1,1,1]],[[1,1],[1,1]],[[0,1,0],[1,1,1]],[[1,1,0],[0,1,1]],[[0,1,1],[1,1,0]],[[1,1,1],[1,0,0]],[[1,1,1],[0,0,1]]],M=["straight"];u.current.length&&u.current;const S=M;if(!S||S.length===0){console.warn("No animations available for theme:",e.name);return}const x={leaf:(E,B)=>{E.y+=E.speed,E.y>p.height&&(E.y=-E.shape.length*v-Math.random()*200,E.x=Math.random()*p.width)}};if(!u.current.length){const E=[];for(let B=0;B<10;B++){const D=w[Math.floor(Math.random()*w.length)],F=e.colors[Math.floor(Math.random()*e.colors.length)],k=[.4,.6,1,1.5,2][Math.floor(Math.random()*5)],L=Math.floor(Math.random()*4);let b,N;switch(L){case 0:b=Math.random()*p.width,N=-(D.length*v*k);break;case 1:b=p.width+Math.random()*p.height,N=Math.random()*p.height;break;case 2:b=Math.random()*p.width,N=p.height+D.length*v*k;break;case 3:b=-Math.random()*p.height,N=Math.random()*p.height;break}E.push({shape:D,color:F,x:b,y:N,speed:.2+Math.random()*.3/k,pattern:"straight",opacity:1,isSpecial:!1,rotation:0,rotationSpeed:0,scale:k,originalScale:k})}u.current=E}const R=(E,B,D,F,k=0,L=1,b=1)=>{const N=d(),Z=N*b;m.save(),m.translate(B+E[0].length*Z/2,D+E.length*Z/2),m.rotate(k),m.scale(b,b),m.translate(-(E[0].length*N)/2,-(E.length*N)/2),m.globalAlpha=L,m.shadowBlur=15,m.shadowColor=F;for(let X=0;X<2;X++)m.fillStyle=F,E.forEach((te,q)=>{te.forEach((Q,ce)=>{Q&&(X===0?(m.shadowBlur=20,m.globalAlpha=L*.5):(m.shadowBlur=10,m.globalAlpha=L),m.fillRect(ce*N,q*N,N,N))})});m.shadowBlur=5,m.shadowColor="white",m.globalAlpha=L*.7,E.forEach((X,te)=>{X.forEach((q,Q)=>{q&&m.fillRect(Q*N+2,te*N+2,N-4,N-4)})}),m.restore()};o.current=new gS(50),document.body.style.background=e.background,m.shadowBlur=15,m.shadowColor=e.colors[0];const T=()=>{var B;const E=Date.now();m.clearRect(0,0,p.width,p.height),a.current.draw(m,p.width,p.height,e.gridColor),m.shadowBlur=10,m.shadowColor=e.particleColor,(B=o.current)==null||B.update(m,e.particleColor),m.shadowBlur=0,u.current.filter(D=>!D.shouldRemove).forEach(D=>{m.shadowBlur=6,m.shadowColor=D.color;const F=Math.sin(Date.now()/1200)*.1+.9;m.shadowBlur*=F,D.y+=D.speed,D.opacity=1,D.scale=1,x.leaf(D,E),D.y>p.height&&(D.y=-D.shape.length*v-Math.random()*200,D.x=Math.random()*p.width),R(D.shape,D.x,D.y,D.color,D.rotation,D.opacity*F,D.scale||1)}),c.current=requestAnimationFrame(T)};return T(),()=>{c.current&&cancelAnimationFrame(c.current),window.removeEventListener("resize",y)}},[e]),C.jsxs("div",{className:"fixed inset-0",children:[C.jsx("div",{className:`absolute inset-0 ${e.background}`}),C.jsx("canvas",{ref:i,className:"absolute top-0 left-0 w-full h-full",style:{mixBlendMode:"lighten",transition:"all 0.3s ease",pointerEvents:"none"}})]})};function yS({isExiting:r=!1}){const[e,t]=j.useState(!1);return j.useEffect(()=>{const i=()=>{t(window.innerWidth<=768)};return i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),C.jsxs("div",{className:`relative z-10 transition-all duration-1000 flex flex-col items-center justify-center w-full h-full max-w-[1920px] mx-auto
                  ${r?"animate-scale-out opacity-0":"opacity-100"}`,children:[e&&C.jsxs("div",{className:"bg-red-700 text-white font-bold text-lg mb-4 p-4 rounded shadow-lg border-4 border-red-900",children:[C.jsx("h2",{className:"text-2xl mb-2 animate-bounce",children:"⚠️ Attention"}),C.jsxs("p",{children:["It looks like you're on a ",C.jsx("span",{style:{backgroundColor:"yellow",color:"black",fontWeight:"bold",padding:"0 4px"},children:"phone"}),". For the best experience, please use a ",C.jsx("span",{style:{backgroundColor:"green",color:"black",fontWeight:"bold",padding:"0 4px"},children:"laptop"})," or ",C.jsx("span",{style:{backgroundColor:"green",color:"black",fontWeight:"bold",padding:"0 4px"},children:"PC"}),"."]})]}),C.jsx("div",{className:"text-center pointer-events-none w-full",children:C.jsxs("div",{className:`text-center transition-transform duration-1000 transform hover:scale-105 font-game 
                      flex flex-col items-center justify-center h-full gap-[2vh]`,children:[C.jsx("h1",{className:`text-[10vw] md:text-[6vw] lg:text-[8vw] min-[1920px]:text-9xl
                       ${r?"animate-slide-out-top":""}`,id:"hero-text-static",children:"NAR"}),C.jsxs("h1",{className:`text-[20vw] md:text-[18vw] lg:text-[16vw] min-[1920px]:text-[250px] 
                       font-bold tracking-tight text-shadow-glow text-white 
                       ${r?"animate-slide-out-bottom":""}`,children:[C.jsx("span",{className:"inline-block animate-float-title-0",children:"2"}),C.jsx("span",{className:"inline-block animate-float-title-1",children:"5"}),C.jsx("span",{className:"inline-block animate-float-title-2",children:"-"}),C.jsx("span",{className:"inline-block animate-float-title-0",children:"2"})]}),C.jsx("p",{className:`text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] min-[1920px]:text-xl 
                      text-white/70 mt-[1vh] hover:text-white transition-colors animate-pulse 
                      ${r?"animate-fade-out-quick":""}`,children:"Click Anywhere to continue"})]})})]})}const $s=(r,e)=>{const t=j.useRef(null),[i,o]=j.useState(!1),[a,c]=j.useState(!1),u=j.useRef(!1),d=j.useRef(null);return j.useEffect(()=>{const f=new IntersectionObserver(([m])=>{const v=m.isIntersecting;v!==u.current&&(o(v),u.current=v,v&&!a&&(c(!0),e&&d.current!==e&&(d.current=e,console.log(`Current section: ${e}`))))},{threshold:.1,rootMargin:"0px 0px -10% 0px",...r}),p=()=>{t.current&&(f.unobserve(t.current),f.observe(t.current))};return t.current&&f.observe(t.current),window.addEventListener("resize",p),()=>{t.current&&f.unobserve(t.current),window.removeEventListener("resize",p)}},[r,e,a]),[t,i,a]},_S=({currentTheme:r,onThemeChange:e})=>C.jsx("div",{className:"fixed top-4 left-4 z-50 animate-fadeIn",children:C.jsx("select",{value:r,onChange:t=>e(t.target.value),className:`bg-black/30 backdrop-blur-sm text-white/70 hover:text-white
                  px-4 py-2 rounded-lg border border-white/20 
                  transition-all duration-300 outline-none cursor-pointer
                  hover:border-white/40 font-game appearance-none
                  pr-8 relative`,style:{backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 8px center",backgroundSize:"16px"},children:ps.map(t=>C.jsxs("option",{value:t.name,className:"bg-black text-white",children:[t.icon," ",t.label]},t.name))})}),Fa=({text:r="Scroll Down",onClick:e})=>C.jsxs("div",{className:"absolute bottom-[2vh] right-[2vw] flex flex-col items-center text-white/70 animate-bounce cursor-pointer",onClick:e,children:[C.jsx("p",{className:"mb-[1vh] text-[2vw] md:text-[1.5vw] lg:text-[1vw]",children:r}),C.jsx("svg",{className:"w-[4vw] h-[4vw] md:w-[3vw] md:h-[3vw] lg:w-[2vw] lg:h-[2vw]",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})]}),b0=({text:r,baseDelay:e=0})=>{const[t,i]=j.useState(()=>r.split("").map(a=>a===" "?" ":"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random()*26)])),o="ABCDEFGHIJKLMNOPQRSTUVWXYZ";return j.useEffect(()=>{const a=r.split("").map((c,u)=>{const d=Math.random()*1200,f=5+Math.floor(Math.random()*5);let p=0;return setTimeout(()=>{const m=setInterval(()=>{i(v=>{const y=[...v];return p<f?y[u]=o[Math.floor(Math.random()*o.length)]:(y[u]=c,clearInterval(m)),y}),p++},50);return m},e+d)});return()=>a.forEach(c=>clearTimeout(c))},[r,e]),C.jsx("span",{className:"inline-block text-[6vw] sm:text-[8vw] md:text-[6vw] lg:text-[4vw]",children:t.map((a,c)=>C.jsx("span",{className:`inline-block ${a===" "?"mx-2":""}`,style:{animation:`glitch-effect 3s infinite ${Math.random()*1e3}ms`},children:a||" "},c))})},SS=({sectionRef:r,isGameTransitioning:e,handleGameClick:t})=>C.jsxs("section",{ref:r,className:"w-full h-screen min-h-[600px] max-h-[1080px] snap-start relative flex items-center justify-center pointer-events-auto mb-10 sm:mb-4",children:[C.jsx("div",{className:"relative h-full flex flex-col items-center justify-center p-4 md:p-8 sm:p-2",children:C.jsxs("div",{className:"flex flex-col items-center gap-8 md:gap-12 sm:gap-4 animate-fade-scale-in",children:[C.jsxs("div",{className:"flex flex-row items-center gap-4 md:gap-8",children:[C.jsx("div",{className:`flex ${e?"transform duration-1000 translate-y-72 translate-x-64 z-10":""}`,children:C.jsx("img",{src:"./assets/images/logo.png",alt:"SLC Logo",className:`w-[15vw] h-auto animate-spin-slow opacity-80 hover:opacity-100 
            transition-all drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]
            ${e?"animate-logo-expand-smooth":""}`})}),C.jsxs("h1",{className:"text-[14vw] md:text-[8vw] lg:text-[9vw] font-bold tracking-tight text-shadow-glow text-white",children:[C.jsx("span",{className:"inline-block animate-slide-in-number-1 opacity-0",children:"2"}),C.jsx("span",{className:"inline-block animate-slide-in-number-2 opacity-0",children:"5"}),C.jsx("span",{className:"inline-block animate-slide-in-number-3 opacity-0",children:"-"}),C.jsx("span",{className:"inline-block animate-slide-in-number-4 opacity-0",children:"2"})]})]}),C.jsxs("div",{className:"relative animate-slide-in-bottom text-center",children:[C.jsx("h1",{className:"text-[12vw] md:text-[4vw] lg:text-[4vw] animate-fade-in-delay-600 text-glitch",id:"hero-text-static",children:C.jsx(b0,{text:"NEW ASSISTANT",baseDelay:0})}),C.jsx("h1",{className:"text-[16vw] md:text-[6vw] lg:text-[6vw] mt-4 animate-fade-in-delay-900 text-glitch",id:"hero-text-static",children:C.jsx(b0,{text:"RECRUITMENT",baseDelay:200})})]}),C.jsx("div",{className:"flex flex-row flex-nowrap items-center justify-center gap-2 md:gap-16 mt-8 opacity-0 animate-fade-in-delay-1200",children:[{to:"#",text:"Play Game",icon:"🎮",onClick:t,className:e?"opacity-0":""},{to:"https://bluejack.binus.ac.id/nar",text:"Register Now",icon:"📝",target:"_blank",rel:"noopener noreferrer"}].map((i,o)=>C.jsxs(Sf,{to:i.to,onClick:i.onClick,target:i.target,rel:i.rel,className:`group relative overflow-hidden rounded-xl bg-black/50 
                           hover:scale-105 transition-all duration-500 border border-white/10 sm:w-auto
                           px-1 py-1 sm:px-3 sm:py-2
                           ${i.className||""}`,children:[C.jsxs("div",{className:"relative px-2 md:px-8 py-1 md:py-4 flex items-center gap-2 ",children:[C.jsx("span",{className:"text-[3vw] md:text-[3vw] lg:text-[2vw]",children:i.icon}),C.jsx("span",{className:"text-[3vw] md:text-[2.5vw] lg:text-[2vw] glitch-text",children:i.text})]}),C.jsx("div",{className:`absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-white/25 to-cyan-500/0 
                           translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`})]},o))})]})}),C.jsx(Fa,{text:"Scroll To Recruitment Phase"})]}),wS=({sectionRef:r,sectionInView:e,hasTriggered:t})=>C.jsxs("section",{ref:r,className:"w-full h-screen min-h-[600px] max-h-[1080px] snap-start relative flex items-center justify-center pointer-events-auto mb-20 sm:mb-8",children:[C.jsxs("div",{className:"w-full max-w-[90vw] lg:max-w-[80vw] px-4 md:px-8 sm:px-2",children:[C.jsxs("h1",{className:`text-[6vw] md:text-[4vw] lg:text-[3vw] font-bold text-white mb-[2vh] text-center text-shadow-glow relative group transition-all duration-1000 ${t?"opacity-100 translate-y-0":"opacity-0 -translate-y-10"}`,children:[C.jsx("span",{className:"inline-block animate-float-title",children:"RECRUITMENT"}),C.jsx("span",{className:"inline-block animate-float-title-delayed mx-2",children:"PHASE"})]}),C.jsxs("div",{className:"relative h-[min(60vh,600px)] px-4",children:[C.jsxs("svg",{className:"absolute inset-0 w-full h-full rotate-90 sm:rotate-0",viewBox:"0 0 1000 600",preserveAspectRatio:"none",children:[C.jsx("path",{id:"roadPath",d:"M100,300 C250,300 350,100 500,300 C650,500 750,100 900,300",fill:"none",stroke:"url(#roadGradient)",strokeWidth:"40",className:"drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]",strokeDasharray:"2000",strokeDashoffset:"2000",style:{animation:t?"drawPath 4s linear forwards":"none"}}),C.jsx("path",{d:"M100,300 C250,300 350,100 500,300 C650,500 750,100 900,300",fill:"none",stroke:"rgba(6,182,212,0.5)",strokeWidth:"2",strokeDasharray:"10,10",className:"animate-dash opacity-50"}),C.jsx("defs",{children:C.jsxs("linearGradient",{id:"roadGradient",gradientUnits:"userSpaceOnUse",children:[C.jsx("stop",{offset:"0%",stopColor:"rgba(17,24,39,0.8)"}),C.jsx("stop",{offset:"50%",stopColor:"rgba(6,182,212,0.2)"}),C.jsx("stop",{offset:"100%",stopColor:"rgba(17,24,39,0.8)"})]})})]}),C.jsx("div",{className:"absolute inset-0 scale-[0.8] lg:scale-100",children:[{phase:"01",title:"Initial Test",isCurrent:!0,position:"left-[50%] top-[10%] sm:left-[calc(15%_+_2vw)] sm:top-[45%]",steps:["Aptitude Test","Programming Test"],pathPercent:15,color:"rgb(34, 197, 94)",glow:"shadow-[0_0_15px_rgba(34,197,94,0.5)]"},{phase:"02",title:"Pre Training",position:"left-[90%] top-[30%] sm:left-[calc(35%_+_2vw)] sm:top-[25%]",steps:["DS Using C","Python","OOP Using Java"],pathPercent:35,color:"rgb(59, 130, 246)",glow:"shadow-[0_0_15px_rgba(59,130,246,0.5)]"},{phase:"03",title:"Interview",position:"left-[25%] top-[60%] sm:left-[calc(65%_-_2vw)] sm:top-[65%]",steps:["Resume","Presentation"],pathPercent:50,color:"rgb(234, 179, 8)",glow:"shadow-[0_0_15px_rgba(234,179,8,0.5)]"},{phase:"04",title:"Core Training",position:"left-[75%] top-[70%] sm:left-[calc(85%_-_2vw)] sm:top-[45%]",steps:["Learning Session","Case Solving","Presentation","Evaluation"],pathPercent:70,color:"rgb(239, 68, 68)",glow:"shadow-[0_0_15px_rgba(239,68,68,0.5)]"}].map((i,o)=>C.jsx("div",{className:`absolute ${i.position} transform -translate-x-1/2 -translate-y-1/2 rotate-0 sm:rotate-90
                ${i.isCurrent?"z-20 scale-110":"z-10"} opacity-0
                ${t?"animate-fade-in-card":""}`,style:{animationDelay:`${i.pathPercent/100*4}s`},children:C.jsxs("div",{className:`group relative flex w-[10vw] h-[10vw] flex-col items-center animate-float phase-group-${i.phase}`,children:[C.jsxs("div",{className:`particle-container w-[8vmin] h-[8vmin] md:w-[10vmin] md:h-[10vmin] rounded-full 
                             flex items-center justify-center border-[${i.color}] ${i.glow} 
                             -translate-y-[10vw] md:-translate-y-[10vh]
                             transition-all duration-300 phase-card-${i.phase}`,style:{boxShadow:`0 0 15px ${i.color}`,"--fire-color":i.color},children:[C.jsx("span",{className:"text-[3vmin] md:text-[2.5vmin]",id:"hero-text-static",children:i.phase}),i.isCurrent&&C.jsx("div",{className:"absolute inset-0 rounded-full bg-cyan-500/20 animate-ping"})]}),C.jsxs("div",{className:`mt-4 text-center bg-black/50 border-2 rounded-lg p-2 md:p-3
                           transition-all duration-300 phase-card-${i.phase} relative overflow-visible
                           w-[30vmin] md:w-[25vmin]`,style:{borderColor:i.color,boxShadow:`0 0 15px ${i.color}`},children:[C.jsx("div",{className:"particles-wrapper",children:[...Array(8)].map((a,c)=>C.jsx("div",{className:"particle-fire",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,"--random-x":`${(Math.random()-.5)*20}px`,"--random-y":`-${Math.random()*50+20}px`,"--fire-color":i.color}},c))}),C.jsx("h3",{className:"text-[3vmin] md:text-[2.7vmin] mb-2",id:"hero-text-static",children:i.title}),C.jsx("div",{className:"space-y-1",children:i.steps.map((a,c)=>C.jsx("div",{className:"text-[2.5vmin] md:text-[2vmin] text-white",children:a},c))})]})]})},o))})]})]}),C.jsx(Fa,{text:"Initial Test"})]}),MS=({sectionRef:r,scrollToTop:e,sectionInView:t,hasTriggered:i})=>C.jsxs("section",{ref:r,className:"initial-test-section w-full h-screen min-h-[60vh] max-h-[100vh] snap-start relative flex flex-col items-center justify-center px-2 mb-10 md:mb-8 sm:mb-4",children:[C.jsxs("div",{className:"content w-full max-w-[95vw] lg:max-w-[80vw] sm:px-2",children:[C.jsxs("h1",{className:`lg:text-[5vw] sm:text-[7vw] font-bold text-white mb-2 text-center text-shadow-glow transition-all duration-1000 transform
          ${i?"opacity-100 translate-y-0":"opacity-0 -translate-y-10"}`,children:[C.jsx("span",{className:"inline-block animate-float-title",children:"INITIAL"}),C.jsx("span",{className:"inline-block animate-float-title-delayed mx-1",children:"TEST"})]}),C.jsxs("div",{className:"relative flex flex-wrap items-center justify-center space-y-2 md:space-y-4",children:[C.jsx("div",{className:`absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-xl
            transition-all duration-1000 delay-300
            ${i?"opacity-100":"opacity-0"}`}),C.jsx("div",{className:"relative w-full",children:C.jsxs("div",{className:"grid grid-cols-1 gap-2 md:gap-4 lg:grid-cols-3",children:[C.jsx("div",{className:`flex-1 w-full group perspective transition-all duration-1000 transform
                ${i?"opacity-100 translate-x-0":"opacity-0 -translate-x-20"}`,children:C.jsx("div",{className:"relative transform transition-transform duration-500 group-hover:rotate-y-12",children:C.jsxs("div",{className:"p-2 md:p-3 lg:p-4 rounded-xl transition-all duration-300 bg-gradient-to-br from-cyan-500/10 to-transparent",children:[C.jsxs("div",{className:"flex items-center justify-center gap-1 md:gap-2 mb-1 md:mb-2",children:[C.jsx("div",{className:"w-5 h-5 md:w-6 md:h-6 rounded-xl bg-cyan-500/20 flex items-center justify-center",children:C.jsx("span",{className:"text-sm md:text-base",children:"🧠"})}),C.jsx("h2",{className:"text-sm md:text-base lg:text-lg",id:"hero-text-static",children:"Aptitude Test"})]}),C.jsx("div",{className:"space-y-1 md:space-y-2",children:[{name:"Mathematical Reasoning",desc:"Solve mathematical problems"},{name:"Pattern Recognition",desc:"Identify sequences and patterns"},{name:"Analytical Thinking",desc:"Analyze and solve logical problems"}].map((o,a)=>C.jsxs("div",{className:`p-1 md:p-2 bg-black rounded-lg transform hover:translate-x-2 
                        transition-all duration-300 border border-white`,children:[C.jsx("h3",{className:"text-xs md:text-sm lg:text-base text-white/90 mb-1",children:o.name}),C.jsx("p",{className:"text-[0.7rem] md:text-xs lg:text-sm text-white/60",children:o.desc})]},a))})]})})}),C.jsx("div",{className:`flex-1 w-full group perspective transition-all duration-1000 delay-300 transform
                ${i?"opacity-100 translate-x-0":"opacity-0 translate-x-20"}`,children:C.jsx("div",{className:"relative transform transition-all duration-500 group-hover:rotate-y-12",children:C.jsxs("div",{className:`bg-gradient-to-br from-purple-500/10 to-transparent p-2 md:p-3 lg:p-4 rounded-xl 
                  hover:border-purple-500/40 transition-all duration-300`,children:[C.jsxs("div",{className:"flex items-center justify-center gap-1 md:gap-2 mb-1 md:mb-2",children:[C.jsx("div",{className:"w-5 h-5 md:w-6 md:h-6 rounded-xl bg-purple-500/20 flex items-center justify-center",children:C.jsx("span",{className:"text-sm md:text-base",children:"💻"})}),C.jsx("h2",{className:"text-sm md:text-base lg:text-lg",id:"hero-text-static",children:"Programming Test"})]}),C.jsx("h3",{className:"text-xs md:text-sm lg:text-base text-white/90 mb-1 md:mb-2",children:"You can use : "}),C.jsx("div",{className:"space-y-1 md:space-y-2",children:[{lang:"C/C++"},{lang:"Java"},{lang:"Python"}].map((o,a)=>C.jsx("div",{className:"relative group/item",children:C.jsx("div",{className:`p-1 md:p-2 bg-black rounded-lg transform hover:translate-x-2
                          transition-all duration-300 border border-white`,children:C.jsxs("div",{className:"flex items-center gap-1 md:gap-2",children:[C.jsx("span",{className:"text-[0.4rem] md:text-[0.75rem]",children:o.icon}),C.jsxs("div",{children:[C.jsx("h3",{className:"text-xs md:text-sm lg:text-base text-white/90",children:o.lang}),C.jsx("p",{className:"text-[0.7rem] md:text-xs lg:text-sm text-white/60",children:o.desc})]})]})})},a))})]})})}),C.jsx("div",{className:`flex-1 w-full group perspective transition-all duration-1000 delay-500 transform
                ${i?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:C.jsx("div",{className:"relative transform transition-all duration-500 group-hover:rotate-x-12",children:C.jsxs("div",{className:"p-2 md:p-3 lg:p-4 rounded-xl transition-all duration-300 bg-gradient-to-br from-blue-500/10 to-transparent",children:[C.jsxs("div",{className:"flex items-center justify-center gap-1 md:gap-2 mb-1 md:mb-2",children:[C.jsx("div",{className:"rounded-xl bg-blue-500/20 flex items-center justify-center",children:C.jsx("span",{className:"text-sm md:text-base",children:"📅"})}),C.jsx("h2",{className:"text-sm md:text-base lg:text-lg",id:"hero-text-static",children:"Test Schedule"})]}),C.jsxs("div",{className:"gap-1 space-y-2 md:gap-2",children:[C.jsx("div",{className:"w-full space-y-1 md:space-y-2 justify-items-end align-middle",children:C.jsxs("div",{className:"w-full bg-black p-1 md:p-3 lg:p-4 rounded-lg border border-white transition-all duration-300",children:[C.jsx("h3",{className:`text-lg md:text-sm lg:text-2xl text-white/90 mb-1 md:mb-2 transform hover:translate-x-2
                            transition-all duration-300 w-full`,children:"23 February 2025"}),C.jsxs("div",{className:"space-y-1 md:space-y-2",children:[C.jsx("p",{className:`text-[0.7rem] md:text-xs lg:text-sm text-white transform hover:translate-x-2
                            transition-all duration-300`,children:"Batch 1: 08:00 - 13:05"}),C.jsx("p",{className:`text-[0.7rem] md:text-xs lg:text-sm text-white transform hover:translate-x-2
                            transition-all duration-300`,children:"Batch 2: 11:00 - 16:05"})]})]})}),C.jsx("div",{className:"space-y-1 md:space-y-2",children:[{text:"Dress Politely",icon:"👔"},{text:"Bring Binusian Card",icon:"🪪"},{text:"Arrive On Time",icon:"⏰"}].map((o,a)=>C.jsxs("div",{className:`flex items-center gap-1 md:gap-2 p-1 md:p-2 bg-black rounded-lg
                          border border-white transform hover:translate-x-2 duration-300 transition-all`,children:[C.jsx("span",{className:"text-[0.4rem] md:text-[0.75rem]",children:o.icon}),C.jsx("span",{className:"text-[0.7rem] md:text-xs lg:text-sm text-white/90",children:o.text})]},a))})]})]})})})]})})]})]}),C.jsx(Fa,{text:"Registration",className:`transition-all duration-1000 delay-700 transform
        ${i?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`})]}),ES=({sectionRef:r,hasTriggered:e})=>{const[t,i]=j.useState(null);return C.jsxs("section",{ref:r,className:"w-full h-screen min-h-[600px] max-h-[1080px] snap-start relative flex items-center justify-center pointer-events-auto mb-10 overflow-hidden sm:mb-4",children:[C.jsxs("div",{className:`w-full max-w-[90vw] lg:max-w-[80vw] px-4 md:px-6 sm:px-2 transition-opacity duration-500 ${e?"opacity-100":"opacity-0"}`,children:[C.jsx("h1",{className:`text-[4vw] md:text-[4vw] lg:text-[3.5vw] font-bold text-white mb-[1vh] text-center text-shadow-glow transition-all duration-1000 transform hover-float
            ${e?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,style:{transitionDelay:"200ms"},children:C.jsx("span",{className:"inline-block cursor-pointer animate-float-title",children:"REGISTRATION"})}),C.jsxs("div",{className:"relative",children:[C.jsxs("div",{className:"flex justify-between mb-10 relative",children:[C.jsx("div",{className:`absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-blue-500/50
                transition-all duration-1000 transform origin-left
                ${e?"scale-x-100 opacity-100":"scale-x-0 opacity-0"}`,style:{transitionDelay:"500ms"}}),[{date:"27 January 2025",event:"Registration Opens",icon:"🚀",status:"past"},{date:"15 February 2025",event:"Registration Closes",icon:"🔒",status:"future"},{date:"23 February 2025",event:"Initial Test",icon:"✨",status:"future"}].map((o,a)=>C.jsxs("div",{className:`relative z-10 flex flex-col items-center group transition-all duration-1000 transform
                  ${e?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,style:{transitionDelay:`${700+a*200}ms`},onMouseEnter:()=>i(a),onMouseLeave:()=>i(null),children:[C.jsx("div",{className:`w-[6vmin] h-[6vmin] md:w-[7vmin] md:h-[7vmin] rounded-full flex items-center justify-center 
                  border border-white relative timeline-dot cursor-pointer hover:border-ice-200`,children:C.jsx("span",{className:"text-[3vmin] md:text-[3.5vmin] transform transition-transform duration-300\n                    ${hoveredDate === index ? 'scale-125' : ''}",children:o.icon})}),C.jsxs("div",{className:"mt-[1vh] text-center transform transition-all duration-300 text-white/90",children:[C.jsx("p",{className:"text-[2.5vmin] md:text-[3vmin] font-bold",children:o.date}),C.jsx("p",{className:"text-[2vmin] md:text-[2vmin]",children:o.event})]})]},a))]}),C.jsx("div",{className:"mt-8 relative",children:C.jsxs("div",{className:"flex flex-col items-center space-y-6",children:[C.jsx("h2",{className:"text-[3.5vw] md:text-[2.5vw] lg:text-[2vw] mb-4 hover-float cursor-pointer",id:"hero-text-static",children:"Requirements"}),C.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl",children:[{text:"Active BINUS Student",icon:"🎓",desc:"Currently enrolled in BINUS University"},{text:"2 Year Commitment",icon:"📝",desc:"Willing to sign a contract"},{text:"Minimum Grade B in Algorithm and Programming / Introduction to Programming",icon:"💯",desc:"*Except for first semester students"},{text:"SoCS/SoIS/DP/MTP",icon:"🏫",desc:"Students from eligible majors"}].map((o,a)=>C.jsxs("div",{className:`group flex items-center gap-2 p-4 rounded-lg 
                      transition-all duration-200 cursor-pointer hover:bg-cyan-500/10
                      transform 
                      ${e?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,style:{transitionDelay:`${1600+a*200}ms`},children:[C.jsx("div",{className:`w-[5vmin] h-[5vmin] md:w-[4vmin] md:h-[4vmin] rounded-lg flex items-center justify-center flex-shrink-0
                                  transition-transform duration-200`,children:C.jsx("span",{className:"text-[2.5vmin] md:text-[2vmin] transform group-hover:scale-110 transition-transform duration-200",children:o.icon})}),C.jsxs("div",{children:[C.jsx("h3",{className:"text-[2vmin] md:text-[1.5vmin] text-white/90 mb-1",children:o.text}),C.jsx("p",{className:"text-[1.5vmin] md:text-[1.2vmin] text-white/60",children:o.desc})]})]},a))}),C.jsxs("button",{onClick:()=>{const o=window.open("https://bluejack.binus.ac.id/nar/home/registration","_blank");o?o.focus():alert("Popup blocked! Please allow popups for this site.")},className:`relative group mt-8 hover-float transition-all duration-1000 transform
    ${e?"translate-y-0 opacity-100 scale-100":"translate-y-10 opacity-0 scale-95"}`,style:{transitionDelay:"2400ms"},children:[C.jsx("div",{className:`absolute -inset-1 via-purple-500 to-cyan-500 
    rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300`}),C.jsxs("div",{className:"relative px-12 py-4 rounded-lg flex items-center divide-x divide-gray-600",children:[C.jsx("span",{className:"text-[3.5vmin] md:text-[2.5vmin] pr-6",id:"hero-text-static",children:"Register Now"}),C.jsx("span",{className:"text-[2.5vmin] md:text-[2vmin] pl-6 text-white bounce-x inline-block",children:"→"})]})]})]})}),C.jsx("div",{className:`absolute inset-0 pointer-events-none transition-all duration-1000
              ${e?"opacity-100":"opacity-0"}`,style:{transitionDelay:"500ms"},children:Array.from({length:15}).map((o,a)=>C.jsx("div",{className:`absolute w-1 h-1 rounded-full bg-cyan-500/30 transition-all duration-1000
                  ${e?"animate-pulse opacity-100":"opacity-0"}`,style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*1}s`,animationDuration:`${2+Math.random()*2}s`,transitionDelay:`${2e3+a*100}ms`}},a))})]})]}),C.jsx(Fa,{text:"Assistant Benefits"})]})},TS=({sectionRef:r,sectionInView:e,hasTriggered:t})=>{const[i,o]=j.useState(null),a=c=>{o(i===c?null:c)};return C.jsxs("section",{ref:r,className:`w-full h-screen min-h-[60vh] max-h-[100vh] snap-start relative flex items-center justify-center pointer-events-auto mb-40 md:mb-20 sm:mb-8 
        transform transition-all duration-1000 ease-out ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:[C.jsxs("div",{className:"w-full max-w-[95vw] lg:max-w-[80vw] px-2 md:px-6 sm:px-1",children:[C.jsxs("h1",{className:`text-[6vw] md:text-[4vw] lg:text-[3vw] font-bold text-white mb-[1vh] text-center text-shadow-glow transition-all duration-700 
          transform ${t?"opacity-100 translate-y-0":"opacity-0 -translate-y-10"}`,style:{transitionDelay:"200ms"},children:[C.jsx("span",{className:"inline-block animate-float-title",children:"ASSISTANT"}),C.jsx("span",{className:"inline-block mx-2 animate-float-title-delayed",children:"BENEFITS"})]}),C.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6",children:[{title:"SOFT SKILLS",color:"cyan",skills:[{name:"Public Speaking",icon:"🎤"},{name:"Leadership",icon:"👑"},{name:"Problem Solving",icon:"🧩"},{name:"Time Management",icon:"⏰"},{name:"Communication",icon:"💬"},{name:"And Many More"}]},{title:"HARD SKILLS",color:"purple",skills:[{name:"Programming",icon:"💻"},{name:"Web Development",icon:"🌐"},{name:"Mobile Apps",icon:"📱"},{name:"Database",icon:"🗄️"},{name:"Cloud Computing",icon:"☁️"},{name:"And Many More"}]},{title:"OTHER",color:"blue",skills:[{name:"Salary",icon:"💰"},{name:"Health Benefits",icon:"🏥"},{name:"Free Parking",icon:"🅿️"},{name:"Career Path",icon:"📈"},{name:"Second Family",icon:"❤️"},{name:"And Many More"}]}].map((c,u)=>C.jsxs("div",{className:`group bg-black/90 backdrop-blur-md rounded-xl p-2 md:p-4 lg:p-6 border border-white/10
                transition-all duration-300 ease-out transform
                ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,style:{transitionDelay:`${400+u*200}ms`},children:[C.jsxs("div",{className:"flex justify-between items-center cursor-pointer",onClick:()=>a(u),children:[C.jsx("h2",{className:"text-[5vw] md:text-[3vw] lg:text-[2.5vw] mb-[1vh]",id:"hero-text-static",children:c.title}),C.jsx("span",{className:"text-[5vw] md:hidden",children:"⬇️"})]}),C.jsx("div",{className:`space-y-[1vh] ${i===u?"block animate-slide-down":"hidden"} md:block transition-all duration-300 ease-in-out`,children:c.skills.map((d,f)=>C.jsxs("div",{className:`flex items-center gap-1 md:gap-2 p-1 md:p-2 rounded-lg
                      transform transition-all duration-500 ease-out
                      ${t?"opacity-100 translate-x-0":"opacity-0 -translate-x-10"}`,style:{transitionDelay:`${600+u*200+f*100}ms`},children:[C.jsx("span",{className:"text-[3vmin] md:text-[2.5vmin]",children:d.icon}),C.jsx("span",{className:"text-[2.5vmin] md:text-[2vmin] text-white/90",children:d.name})]},f))}),C.jsx("div",{className:"absolute inset-0 pointer-events-none",children:C.jsx("div",{className:"particle-container",children:Array.from({length:20}).map((d,f)=>C.jsx("div",{className:"particle",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`}},f))})})]},u))})]}),C.jsx(Fa,{text:"Contact Us"})]})},bS=({sectionRef:r,sectionInView:e,hasTriggered:t})=>(j.useEffect(()=>{const i=o=>{e&&o.deltaY>0&&o.preventDefault()};return window.addEventListener("wheel",i,{passive:!1}),()=>{window.removeEventListener("wheel",i)}},[e]),C.jsx("section",{ref:r,className:`w-full h-screen min-h-[600px] max-h-[1080px] snap-start relative flex items-center justify-center pointer-events-auto md:mb-20 transition-all duration-1000 transform ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,onWheel:i=>{i.deltaY>0},children:C.jsxs("div",{className:"w-full max-w-[90vw] lg:max-w-[80vw] px-4 md:px-6 sm:px-2 flex flex-col items-center justify-center",children:[C.jsxs("h1",{className:`text-[6vw] md:text-[4vw] lg:text-[3vw] font-bold text-white mb-[1vh] text-center text-shadow-glow relative group transition-all duration-1000 ${t?"opacity-100 scale-100":"opacity-0 scale-90"}`,children:[C.jsx("span",{className:"inline-block animate-float-title",children:"CONTACT"}),C.jsx("span",{className:"inline-block animate-float-title-delayed mx-2",children:"US"})]}),C.jsxs("div",{className:"flex flex-col items-center gap-1z md:gap-8 w-full",children:[C.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 md:gap-6 lg:gap-8",children:[{title:"Location",icon:"📍",content:["Room 724","BINUS Anggrek Campus","Jakarta Barat"]},{title:"Contact",icon:"📞",content:["[021] 5345830","Ext 1762"]},{title:"RECSELS",icon:"👥",content:["Darwin","Viernicia","Vito"]}].map((i,o)=>C.jsxs("div",{className:`group relative p-2 md:p-4 lg:p-6 rounded-xl bg-black/50
                            border border-white/10 hover:border-white/30 
                            transition-all duration-500 transform
                            ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:`${o*200}ms`,transitionTimingFunction:"cubic-bezier(0.34, 1.56, 0.64, 1)"},children:[C.jsxs("div",{className:"relative z-10 flex items-center gap-2",children:[C.jsx("span",{className:`text-[5vmin] md:text-[4vmin] transition-all duration-500 ${t?"opacity-100 scale-100":"opacity-0 scale-0"}`,style:{transitionDelay:`${o*200+300}ms`},children:i.icon}),C.jsx("h3",{className:`text-[4vmin] md:text-[3vmin] transition-all duration-500 ${t?"opacity-100 translate-x-0":"opacity-0 -translate-x-10"}`,style:{transitionDelay:`${o*200+400}ms`},id:"hero-text-static",children:i.title})]}),C.jsx("div",{className:"mt-2",children:i.content.map((a,c)=>C.jsx("p",{className:`text-white/70 text-[3vmin] md:text-[2vmin] leading-relaxed group-hover:text-white 
                                transition-all duration-500
                                ${t?"opacity-100 translate-x-0":"opacity-0 -translate-x-10"}`,style:{transitionDelay:`${o*200+500+c*100}ms`},children:a},c))})]},o))}),C.jsxs("div",{className:`w-full max-w-2xl transition-all duration-1000 transform ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,style:{transitionDelay:"800ms"},children:[C.jsx("h3",{className:"text-[4vmin] md:text-[3vmin] md:mb-8 text-center",id:"hero-text-static",children:"Connect With Us"}),C.jsx("div",{className:"flex justify-center gap-8 md:gap-12",children:[{name:"Instagram",icon:"./assets/images/instagram.png",url:"https://www.instagram.com/slcbinusuniv/"},{name:"Line",icon:"./assets/images/line.png",url:"https://lin.ee/T8Zr5qu"},{name:"YouTube",icon:"./assets/images/youtube.png",url:"https://www.youtube.com/@SoftwareLabCenter"}].map((i,o)=>C.jsxs("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",className:`group flex flex-col items-center md:gap-3 p-4 rounded-lg
                           hover:bg-cyan-500/10 transition-all duration-500 transform
                           ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:`${1e3+o*150}ms`,transitionTimingFunction:"cubic-bezier(0.34, 1.56, 0.64, 1)"},children:[C.jsx("img",{src:i.icon,alt:i.name,className:"w-[8vmin] md:w-[6vmin] h-[8vmin] md:h-[6vmin] group-hover:scale-125 transition-transform duration-300 object-contain"}),C.jsx("span",{className:"text-white/70 text-[3vmin] md:text-[2vmin] group-hover:text-white transition-colors",children:i.name})]},o))})]}),C.jsx("div",{className:`w-full text-center md:mt-8 transition-all duration-1000 transform ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,style:{transitionDelay:"1300ms"},children:C.jsxs("p",{className:"text-[4vmin] md:text-[3vmin] text-white font-bold md:mb-2 text-shadow-glow",children:[C.jsx("span",{className:"inline-block animate-float-title",children:'"Confront'}),C.jsx("span",{className:"inline-block animate-float-title-delayed mx-1",children:"the"}),C.jsx("span",{className:"inline-block animate-float-title",children:"challenges"}),C.jsx("span",{className:"inline-block animate-float-title-delayed mx-1",children:"of"}),C.jsx("span",{className:"inline-block animate-float-title",children:"learning"}),C.jsx("span",{className:"inline-block animate-float-title-delayed mx-1",children:"and"}),C.jsx("span",{className:"inline-block animate-float-title",children:"outgrow"}),C.jsx("span",{className:"inline-block animate-float-title-delayed mx-1",children:"the"}),C.jsx("span",{className:"inline-block animate-float-title",children:"boundaries"}),C.jsx("span",{className:"inline-block animate-float-title-delayed mx-1",children:'together."'}),C.jsxs("span",{className:"text-[3vmin] md:text-[2vmin] text-white/80",children:[C.jsx("span",{className:"inline-block animate-float-title",children:"~"}),C.jsx("span",{className:"inline-block animate-float-title-delayed mx-1",children:"24-2"})]})]})})]})]})}));function AS(){const[r,e]=j.useState(!1),[t,i]=j.useState(!1),[o,a]=j.useState(()=>ps[Math.floor(Math.random()*ps.length)].name),[c,u]=j.useState(!1),[d,f]=j.useState(!1),[p,m]=j.useState(""),[v,y]=j.useState(!1),[w,M]=j.useState(!1),[S,x]=j.useState(!1),[R,T]=j.useState(!1),[E,B]=j.useState(!1),[D,F]=j.useState(!0);j.useState(!1),j.useState(!0);const[k,L]=j.useState(!1),[b,N]=j.useState(0);j.useRef(null),j.useRef(0);const[Z,X]=j.useState(100),te=1e3,q=j.useRef(),[Q,ce,G]=$s({},"Welcome Section"),[he,oe,H]=$s({},"Recruitment Phase"),[se,Ue,ie]=$s({},"Initial Test"),[fe,Me,ve]=$s({},"Registration"),[Le,Be,Xe]=$s({},"Contact Us"),[gt,xe,be]=$s({},"Assistant Benefits"),O=Hc(),Qe=()=>{B(!0),M(!0),setTimeout(()=>{B(!1),setTimeout(()=>{m("animate-zoom-in-fade"),y(!0),f(!0),e(!0),u(!0),setTimeout(()=>{m("animate-zoom-out-fade"),y(!1)},500)},500)},500)},we=()=>{const Ee=document.querySelector(".snap-y");Ee&&Ee.scrollTo({top:0,behavior:"smooth"})},Ve=Ee=>{a(Ee)},Re=Ee=>{Ee.preventDefault(),we(),setTimeout(()=>{x(!0);const U=document.querySelector(".slc-logo");U&&U.classList.add("animate-logo-expand-smooth"),setTimeout(()=>{O("/game")},1500)},1e3)};j.useEffect(()=>{const Ee=()=>{const P=document.querySelector(".snap-y");P&&F(P.scrollTop<window.innerHeight/2)},U=document.querySelector(".snap-y");return U&&U.addEventListener("scroll",Ee),()=>{U&&U.removeEventListener("scroll",Ee)}},[r]),j.useEffect(()=>{if(t){const Ee=document.querySelector(".snap-y");Ee&&Ee.scrollTo({top:0,behavior:"smooth"})}},[t]);const it=Ee=>{Ee.preventDefault();const U=Date.now();if(k||U-b<te)return;const P=document.querySelector(".snap-y");if(P){const ne=Ee.deltaY>0?1:-1,ye=P.scrollTop+window.innerHeight*ne;L(!0),N(U),X(0),P.scrollTo({top:ye,behavior:"smooth"}),q.current&&clearInterval(q.current),q.current=window.setInterval(()=>{X(me=>{const $e=me+100/(te/50);return $e>=100?(clearInterval(q.current),L(!1),100):$e})},50)}};return j.useEffect(()=>{const Ee=document.querySelector(".snap-y");return Ee&&Ee.addEventListener("wheel",it,{passive:!1}),()=>{Ee&&Ee.removeEventListener("wheel",it),q.current&&clearInterval(q.current)}},[b,k]),C.jsx("div",{className:"w-full h-screen flex flex-col items-center bg-black justify-center font-game relative",children:C.jsxs("div",{className:"w-full h-screen flex flex-col items-center bg-black justify-center font-game relative",onClick:r?void 0:Qe,children:[C.jsx("div",{className:"absolute inset-0 bg-black/50 z-0"}),c&&C.jsx(_S,{currentTheme:o,onThemeChange:Ve}),C.jsx(xS,{selectedTheme:o,isBlurred:d,isFalling:R,isInteractive:!r,isTransitioning:v,isExploding:E}),C.jsx("div",{className:`relative z-10 w-full ${p}`,children:r?C.jsxs("div",{className:"w-full h-screen overflow-y-scroll snap-y snap-mandatory relative pointer-events-auto space-y-8 md:space-y-0",children:[C.jsx(SS,{sectionRef:Q,isGameTransitioning:S,handleGameClick:Re}),C.jsx(wS,{sectionRef:he,sectionInView:oe,hasTriggered:H}),C.jsx(MS,{sectionRef:se,sectionInView:Ue,hasTriggered:ie,scrollToTop:we}),C.jsx("div",{className:"h-40 md:hidden"}),C.jsx(ES,{sectionRef:fe,hasTriggered:ve}),C.jsx("div",{className:"h-40 md:hidden"}),C.jsx(TS,{sectionRef:gt,sectionInView:xe,hasTriggered:be}),C.jsx("div",{className:"h-40 md:hidden"}),C.jsx("div",{className:"h-40 md:hidden"}),C.jsx(bS,{sectionRef:Le,sectionInView:Be,hasTriggered:Xe})]}):C.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-auto",children:C.jsx(yS,{isExiting:w})})}),!D&&C.jsxs("button",{onClick:Re,className:"hidden sm:block border-ice-200 border-2 absolute  top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 z-50",children:[C.jsx("span",{className:"inline-block animate-float-title mr-2",children:"Play"}),C.jsx("span",{className:"inline-block animate-float-title-delayed",children:"Game"})]})]})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wf="171",CS=0,A0=1,RS=2,uv=1,PS=2,tr=3,Br=0,jn=1,Kt=2,kr=0,po=1,Ut=2,C0=3,R0=4,LS=5,hs=100,NS=101,IS=102,DS=103,US=104,FS=200,kS=201,OS=202,BS=203,_d=204,Sd=205,zS=206,HS=207,VS=208,GS=209,WS=210,jS=211,XS=212,$S=213,YS=214,wd=0,Md=1,Ed=2,yo=3,Td=4,bd=5,Ad=6,Cd=7,Mf=0,qS=1,KS=2,Or=0,ZS=1,JS=2,QS=3,e1=4,t1=5,n1=6,i1=7,hv=300,_o=301,So=302,Rd=303,Pd=304,Wc=306,Ld=1e3,ms=1001,Nd=1002,Qn=1003,r1=1004,$l=1005,Ni=1006,Dh=1007,gs=1008,ar=1009,dv=1010,fv=1011,Ca=1012,Ef=1013,xs=1014,Ii=1015,ka=1016,Tf=1017,bf=1018,wo=1020,pv=35902,mv=1021,gv=1022,Si=1023,vv=1024,xv=1025,mo=1026,Mo=1027,Af=1028,Cf=1029,yv=1030,Rf=1031,Pf=1033,Mc=33776,Ec=33777,Tc=33778,bc=33779,Id=35840,Dd=35841,Ud=35842,Fd=35843,kd=36196,Od=37492,Bd=37496,zd=37808,Hd=37809,Vd=37810,Gd=37811,Wd=37812,jd=37813,Xd=37814,$d=37815,Yd=37816,qd=37817,Kd=37818,Zd=37819,Jd=37820,Qd=37821,Ac=36492,ef=36494,tf=36495,_v=36283,nf=36284,rf=36285,sf=36286,s1=3200,o1=3201,Sv=0,a1=1,Fr="",li="srgb",Eo="srgb-linear",Nc="linear",kt="srgb",Ys=7680,P0=519,l1=512,c1=513,u1=514,wv=515,h1=516,d1=517,f1=518,p1=519,L0=35044,N0="300 es",nr=2e3,Ic=2001;class Ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uh=Math.PI/180,Dc=180/Math.PI;function Po(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function Et(r,e,t){return Math.max(e,Math.min(t,r))}function m1(r,e){return(r%e+e)%e}function Fh(r,e,t){return(1-t)*r+t*e}function fa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(e,t,i,o,a,c,u,d,f){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,d,f)}set(e,t,i,o,a,c,u,d,f){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=d,p[6]=i,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[3],d=i[6],f=i[1],p=i[4],m=i[7],v=i[2],y=i[5],w=i[8],M=o[0],S=o[3],x=o[6],R=o[1],T=o[4],E=o[7],B=o[2],D=o[5],F=o[8];return a[0]=c*M+u*R+d*B,a[3]=c*S+u*T+d*D,a[6]=c*x+u*E+d*F,a[1]=f*M+p*R+m*B,a[4]=f*S+p*T+m*D,a[7]=f*x+p*E+m*F,a[2]=v*M+y*R+w*B,a[5]=v*S+y*T+w*D,a[8]=v*x+y*E+w*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],p=e[8];return t*c*p-t*u*f-i*a*p+i*u*d+o*a*f-o*c*d}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],p=e[8],m=p*c-u*f,v=u*d-p*a,y=f*a-c*d,w=t*m+i*v+o*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=m*M,e[1]=(o*f-p*i)*M,e[2]=(u*i-o*c)*M,e[3]=v*M,e[4]=(p*t-o*d)*M,e[5]=(o*a-u*t)*M,e[6]=y*M,e[7]=(i*d-f*t)*M,e[8]=(c*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,u){const d=Math.cos(a),f=Math.sin(a);return this.set(i*d,i*f,-i*(d*c+f*u)+c+e,-o*f,o*d,-o*(-f*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(kh.makeScale(e,t)),this}rotate(e){return this.premultiply(kh.makeRotation(-e)),this}translate(e,t){return this.premultiply(kh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kh=new xt;function Mv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Uc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function g1(){const r=Uc("canvas");return r.style.display="block",r}const I0={};function co(r){r in I0||(I0[r]=!0,console.warn(r))}function v1(r,e,t){return new Promise(function(i,o){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function x1(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function y1(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const D0=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),U0=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _1(){const r={enabled:!0,workingColorSpace:Eo,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===kt&&(o.r=sr(o.r),o.g=sr(o.g),o.b=sr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===kt&&(o.r=go(o.r),o.g=go(o.g),o.b=go(o.b))),o},fromWorkingColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},toWorkingColorSpace:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Fr?Nc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Eo]:{primaries:e,whitePoint:i,transfer:Nc,toXYZ:D0,fromXYZ:U0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:i,transfer:kt,toXYZ:D0,fromXYZ:U0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),r}const Nt=_1();function sr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function go(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let qs;class S1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qs===void 0&&(qs=Uc("canvas")),qs.width=e.width,qs.height=e.height;const i=qs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Uc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=sr(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(sr(t[i]/255)*255):t[i]=sr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let w1=0;class Ev{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=Po(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Oh(o[c].image)):a.push(Oh(o[c]))}else a=Oh(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Oh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?S1.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let M1=0;class Dn extends Ro{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,i=ms,o=ms,a=Ni,c=gs,u=Si,d=ar,f=Dn.DEFAULT_ANISOTROPY,p=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M1++}),this.uuid=Po(),this.name="",this.source=new Ev(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ld:e.x=e.x-Math.floor(e.x);break;case ms:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ld:e.y=e.y-Math.floor(e.y);break;case ms:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=hv;Dn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,o=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const d=e.elements,f=d[0],p=d[4],m=d[8],v=d[1],y=d[5],w=d[9],M=d[2],S=d[6],x=d[10];if(Math.abs(p-v)<.01&&Math.abs(m-M)<.01&&Math.abs(w-S)<.01){if(Math.abs(p+v)<.1&&Math.abs(m+M)<.1&&Math.abs(w+S)<.1&&Math.abs(f+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(f+1)/2,E=(y+1)/2,B=(x+1)/2,D=(p+v)/4,F=(m+M)/4,k=(w+S)/4;return T>E&&T>B?T<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(T),o=D/i,a=F/i):E>B?E<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(E),i=D/o,a=k/o):B<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(B),i=F/a,o=k/a),this.set(i,o,a,t),this}let R=Math.sqrt((S-w)*(S-w)+(m-M)*(m-M)+(v-p)*(v-p));return Math.abs(R)<.001&&(R=1),this.x=(S-w)/R,this.y=(m-M)/R,this.z=(v-p)/R,this.w=Math.acos((f+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class E1 extends Ro{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Dn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ev(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends E1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Tv extends Dn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class T1 extends Dn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oa{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,u){let d=i[o+0],f=i[o+1],p=i[o+2],m=i[o+3];const v=a[c+0],y=a[c+1],w=a[c+2],M=a[c+3];if(u===0){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u===1){e[t+0]=v,e[t+1]=y,e[t+2]=w,e[t+3]=M;return}if(m!==M||d!==v||f!==y||p!==w){let S=1-u;const x=d*v+f*y+p*w+m*M,R=x>=0?1:-1,T=1-x*x;if(T>Number.EPSILON){const B=Math.sqrt(T),D=Math.atan2(B,x*R);S=Math.sin(S*D)/B,u=Math.sin(u*D)/B}const E=u*R;if(d=d*S+v*E,f=f*S+y*E,p=p*S+w*E,m=m*S+M*E,S===1-u){const B=1/Math.sqrt(d*d+f*f+p*p+m*m);d*=B,f*=B,p*=B,m*=B}}e[t]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,o,a,c){const u=i[o],d=i[o+1],f=i[o+2],p=i[o+3],m=a[c],v=a[c+1],y=a[c+2],w=a[c+3];return e[t]=u*w+p*m+d*y-f*v,e[t+1]=d*w+p*v+f*m-u*y,e[t+2]=f*w+p*y+u*v-d*m,e[t+3]=p*w-u*m-d*v-f*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,f=u(i/2),p=u(o/2),m=u(a/2),v=d(i/2),y=d(o/2),w=d(a/2);switch(c){case"XYZ":this._x=v*p*m+f*y*w,this._y=f*y*m-v*p*w,this._z=f*p*w+v*y*m,this._w=f*p*m-v*y*w;break;case"YXZ":this._x=v*p*m+f*y*w,this._y=f*y*m-v*p*w,this._z=f*p*w-v*y*m,this._w=f*p*m+v*y*w;break;case"ZXY":this._x=v*p*m-f*y*w,this._y=f*y*m+v*p*w,this._z=f*p*w+v*y*m,this._w=f*p*m-v*y*w;break;case"ZYX":this._x=v*p*m-f*y*w,this._y=f*y*m+v*p*w,this._z=f*p*w-v*y*m,this._w=f*p*m+v*y*w;break;case"YZX":this._x=v*p*m+f*y*w,this._y=f*y*m+v*p*w,this._z=f*p*w-v*y*m,this._w=f*p*m-v*y*w;break;case"XZY":this._x=v*p*m-f*y*w,this._y=f*y*m-v*p*w,this._z=f*p*w+v*y*m,this._w=f*p*m+v*y*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],u=t[5],d=t[9],f=t[2],p=t[6],m=t[10],v=i+u+m;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(p-d)*y,this._y=(a-f)*y,this._z=(c-o)*y}else if(i>u&&i>m){const y=2*Math.sqrt(1+i-u-m);this._w=(p-d)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(a+f)/y}else if(u>m){const y=2*Math.sqrt(1+u-i-m);this._w=(a-f)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(d+p)/y}else{const y=2*Math.sqrt(1+m-i-u);this._w=(c-o)/y,this._x=(a+f)/y,this._y=(d+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,u=t._x,d=t._y,f=t._z,p=t._w;return this._x=i*p+c*u+o*f-a*d,this._y=o*p+c*d+a*u-i*f,this._z=a*p+c*f+i*d-o*u,this._w=c*p-i*u-o*d-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+o*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=o,this._z=a,this;const d=1-u*u;if(d<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*i+t*this._x,this._y=y*o+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const f=Math.sqrt(d),p=Math.atan2(f,u),m=Math.sin((1-t)*p)/f,v=Math.sin(t*p)/f;return this._w=c*m+this._w*v,this._x=i*m+this._x*v,this._y=o*m+this._y*v,this._z=a*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(F0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(F0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,u=e.z,d=e.w,f=2*(c*o-u*i),p=2*(u*t-a*o),m=2*(a*i-c*t);return this.x=t+d*f+c*m-u*p,this.y=i+d*p+u*f-a*m,this.z=o+d*m+a*p-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=o*d-a*u,this.y=a*c-i*d,this.z=i*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bh.copy(this).projectOnVector(e),this.sub(Bh)}reflect(e){return this.sub(Bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bh=new V,F0=new Oa;class ws{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,vi):vi.fromBufferAttribute(a,c),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yl.copy(i.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),ql.subVectors(this.max,pa),Ks.subVectors(e.a,pa),Zs.subVectors(e.b,pa),Js.subVectors(e.c,pa),Pr.subVectors(Zs,Ks),Lr.subVectors(Js,Zs),is.subVectors(Ks,Js);let t=[0,-Pr.z,Pr.y,0,-Lr.z,Lr.y,0,-is.z,is.y,Pr.z,0,-Pr.x,Lr.z,0,-Lr.x,is.z,0,-is.x,-Pr.y,Pr.x,0,-Lr.y,Lr.x,0,-is.y,is.x,0];return!zh(t,Ks,Zs,Js,ql)||(t=[1,0,0,0,1,0,0,0,1],!zh(t,Ks,Zs,Js,ql))?!1:(Kl.crossVectors(Pr,Lr),t=[Kl.x,Kl.y,Kl.z],zh(t,Ks,Zs,Js,ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qi=[new V,new V,new V,new V,new V,new V,new V,new V],vi=new V,Yl=new ws,Ks=new V,Zs=new V,Js=new V,Pr=new V,Lr=new V,is=new V,pa=new V,ql=new V,Kl=new V,rs=new V;function zh(r,e,t,i,o){for(let a=0,c=r.length-3;a<=c;a+=3){rs.fromArray(r,a);const u=o.x*Math.abs(rs.x)+o.y*Math.abs(rs.y)+o.z*Math.abs(rs.z),d=e.dot(rs),f=t.dot(rs),p=i.dot(rs);if(Math.max(-Math.max(d,f,p),Math.min(d,f,p))>u)return!1}return!0}const b1=new ws,ma=new V,Hh=new V;class Lo{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):b1.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const t=ma.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(ma,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(Hh)),this.expandByPoint(ma.copy(e.center).sub(Hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new V,Vh=new V,Zl=new V,Nr=new V,Gh=new V,Jl=new V,Wh=new V;class Lf{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Vh.copy(e).add(t).multiplyScalar(.5),Zl.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(Vh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Zl),u=Nr.dot(this.direction),d=-Nr.dot(Zl),f=Nr.lengthSq(),p=Math.abs(1-c*c);let m,v,y,w;if(p>0)if(m=c*d-u,v=c*u-d,w=a*p,m>=0)if(v>=-w)if(v<=w){const M=1/p;m*=M,v*=M,y=m*(m+c*v+2*u)+v*(c*m+v+2*d)+f}else v=a,m=Math.max(0,-(c*v+u)),y=-m*m+v*(v+2*d)+f;else v=-a,m=Math.max(0,-(c*v+u)),y=-m*m+v*(v+2*d)+f;else v<=-w?(m=Math.max(0,-(-c*a+u)),v=m>0?-a:Math.min(Math.max(-a,-d),a),y=-m*m+v*(v+2*d)+f):v<=w?(m=0,v=Math.min(Math.max(-a,-d),a),y=v*(v+2*d)+f):(m=Math.max(0,-(c*a+u)),v=m>0?a:Math.min(Math.max(-a,-d),a),y=-m*m+v*(v+2*d)+f);else v=c>0?-a:a,m=Math.max(0,-(c*v+u)),y=-m*m+v*(v+2*d)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,m),o&&o.copy(Vh).addScaledVector(Zl,v),y}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const i=Ki.dot(this.direction),o=Ki.dot(Ki)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,u,d;const f=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,v=this.origin;return f>=0?(i=(e.min.x-v.x)*f,o=(e.max.x-v.x)*f):(i=(e.max.x-v.x)*f,o=(e.min.x-v.x)*f),p>=0?(a=(e.min.y-v.y)*p,c=(e.max.y-v.y)*p):(a=(e.max.y-v.y)*p,c=(e.min.y-v.y)*p),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),m>=0?(u=(e.min.z-v.z)*m,d=(e.max.z-v.z)*m):(u=(e.max.z-v.z)*m,d=(e.min.z-v.z)*m),i>d||u>o)||((u>i||i!==i)&&(i=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,i,o,a){Gh.subVectors(t,e),Jl.subVectors(i,e),Wh.crossVectors(Gh,Jl);let c=this.direction.dot(Wh),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Nr.subVectors(this.origin,e);const d=u*this.direction.dot(Jl.crossVectors(Nr,Jl));if(d<0)return null;const f=u*this.direction.dot(Gh.cross(Nr));if(f<0||d+f>c)return null;const p=-u*Nr.dot(Wh);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,i,o,a,c,u,d,f,p,m,v,y,w,M,S){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,d,f,p,m,v,y,w,M,S)}set(e,t,i,o,a,c,u,d,f,p,m,v,y,w,M,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=o,x[1]=a,x[5]=c,x[9]=u,x[13]=d,x[2]=f,x[6]=p,x[10]=m,x[14]=v,x[3]=y,x[7]=w,x[11]=M,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/Qs.setFromMatrixColumn(e,0).length(),a=1/Qs.setFromMatrixColumn(e,1).length(),c=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(o),f=Math.sin(o),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const v=c*p,y=c*m,w=u*p,M=u*m;t[0]=d*p,t[4]=-d*m,t[8]=f,t[1]=y+w*f,t[5]=v-M*f,t[9]=-u*d,t[2]=M-v*f,t[6]=w+y*f,t[10]=c*d}else if(e.order==="YXZ"){const v=d*p,y=d*m,w=f*p,M=f*m;t[0]=v+M*u,t[4]=w*u-y,t[8]=c*f,t[1]=c*m,t[5]=c*p,t[9]=-u,t[2]=y*u-w,t[6]=M+v*u,t[10]=c*d}else if(e.order==="ZXY"){const v=d*p,y=d*m,w=f*p,M=f*m;t[0]=v-M*u,t[4]=-c*m,t[8]=w+y*u,t[1]=y+w*u,t[5]=c*p,t[9]=M-v*u,t[2]=-c*f,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const v=c*p,y=c*m,w=u*p,M=u*m;t[0]=d*p,t[4]=w*f-y,t[8]=v*f+M,t[1]=d*m,t[5]=M*f+v,t[9]=y*f-w,t[2]=-f,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const v=c*d,y=c*f,w=u*d,M=u*f;t[0]=d*p,t[4]=M-v*m,t[8]=w*m+y,t[1]=m,t[5]=c*p,t[9]=-u*p,t[2]=-f*p,t[6]=y*m+w,t[10]=v-M*m}else if(e.order==="XZY"){const v=c*d,y=c*f,w=u*d,M=u*f;t[0]=d*p,t[4]=-m,t[8]=f*p,t[1]=v*m+M,t[5]=c*p,t[9]=y*m-w,t[2]=w*m-y,t[6]=u*p,t[10]=M*m+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(A1,e,C1)}lookAt(e,t,i){const o=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Ir.crossVectors(i,Kn),Ir.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Ir.crossVectors(i,Kn)),Ir.normalize(),Ql.crossVectors(Kn,Ir),o[0]=Ir.x,o[4]=Ql.x,o[8]=Kn.x,o[1]=Ir.y,o[5]=Ql.y,o[9]=Kn.y,o[2]=Ir.z,o[6]=Ql.z,o[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[4],d=i[8],f=i[12],p=i[1],m=i[5],v=i[9],y=i[13],w=i[2],M=i[6],S=i[10],x=i[14],R=i[3],T=i[7],E=i[11],B=i[15],D=o[0],F=o[4],k=o[8],L=o[12],b=o[1],N=o[5],Z=o[9],X=o[13],te=o[2],q=o[6],Q=o[10],ce=o[14],G=o[3],he=o[7],oe=o[11],H=o[15];return a[0]=c*D+u*b+d*te+f*G,a[4]=c*F+u*N+d*q+f*he,a[8]=c*k+u*Z+d*Q+f*oe,a[12]=c*L+u*X+d*ce+f*H,a[1]=p*D+m*b+v*te+y*G,a[5]=p*F+m*N+v*q+y*he,a[9]=p*k+m*Z+v*Q+y*oe,a[13]=p*L+m*X+v*ce+y*H,a[2]=w*D+M*b+S*te+x*G,a[6]=w*F+M*N+S*q+x*he,a[10]=w*k+M*Z+S*Q+x*oe,a[14]=w*L+M*X+S*ce+x*H,a[3]=R*D+T*b+E*te+B*G,a[7]=R*F+T*N+E*q+B*he,a[11]=R*k+T*Z+E*Q+B*oe,a[15]=R*L+T*X+E*ce+B*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],u=e[5],d=e[9],f=e[13],p=e[2],m=e[6],v=e[10],y=e[14],w=e[3],M=e[7],S=e[11],x=e[15];return w*(+a*d*m-o*f*m-a*u*v+i*f*v+o*u*y-i*d*y)+M*(+t*d*y-t*f*v+a*c*v-o*c*y+o*f*p-a*d*p)+S*(+t*f*m-t*u*y-a*c*m+i*c*y+a*u*p-i*f*p)+x*(-o*u*p-t*d*m+t*u*v+o*c*m-i*c*v+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],p=e[8],m=e[9],v=e[10],y=e[11],w=e[12],M=e[13],S=e[14],x=e[15],R=m*S*f-M*v*f+M*d*y-u*S*y-m*d*x+u*v*x,T=w*v*f-p*S*f-w*d*y+c*S*y+p*d*x-c*v*x,E=p*M*f-w*m*f+w*u*y-c*M*y-p*u*x+c*m*x,B=w*m*d-p*M*d-w*u*v+c*M*v+p*u*S-c*m*S,D=t*R+i*T+o*E+a*B;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/D;return e[0]=R*F,e[1]=(M*v*a-m*S*a-M*o*y+i*S*y+m*o*x-i*v*x)*F,e[2]=(u*S*a-M*d*a+M*o*f-i*S*f-u*o*x+i*d*x)*F,e[3]=(m*d*a-u*v*a-m*o*f+i*v*f+u*o*y-i*d*y)*F,e[4]=T*F,e[5]=(p*S*a-w*v*a+w*o*y-t*S*y-p*o*x+t*v*x)*F,e[6]=(w*d*a-c*S*a-w*o*f+t*S*f+c*o*x-t*d*x)*F,e[7]=(c*v*a-p*d*a+p*o*f-t*v*f-c*o*y+t*d*y)*F,e[8]=E*F,e[9]=(w*m*a-p*M*a-w*i*y+t*M*y+p*i*x-t*m*x)*F,e[10]=(c*M*a-w*u*a+w*i*f-t*M*f-c*i*x+t*u*x)*F,e[11]=(p*u*a-c*m*a-p*i*f+t*m*f+c*i*y-t*u*y)*F,e[12]=B*F,e[13]=(p*M*o-w*m*o+w*i*v-t*M*v-p*i*S+t*m*S)*F,e[14]=(w*u*o-c*M*o-w*i*d+t*M*d+c*i*S-t*u*S)*F,e[15]=(c*m*o-p*u*o+p*i*d-t*m*d-c*i*v+t*u*v)*F,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,u=e.y,d=e.z,f=a*c,p=a*u;return this.set(f*c+i,f*u-o*d,f*d+o*u,0,f*u+o*d,p*u+i,p*d-o*c,0,f*d-o*u,p*d+o*c,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,f=a+a,p=c+c,m=u+u,v=a*f,y=a*p,w=a*m,M=c*p,S=c*m,x=u*m,R=d*f,T=d*p,E=d*m,B=i.x,D=i.y,F=i.z;return o[0]=(1-(M+x))*B,o[1]=(y+E)*B,o[2]=(w-T)*B,o[3]=0,o[4]=(y-E)*D,o[5]=(1-(v+x))*D,o[6]=(S+R)*D,o[7]=0,o[8]=(w+T)*F,o[9]=(S-R)*F,o[10]=(1-(v+M))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=Qs.set(o[0],o[1],o[2]).length();const c=Qs.set(o[4],o[5],o[6]).length(),u=Qs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],xi.copy(this);const f=1/a,p=1/c,m=1/u;return xi.elements[0]*=f,xi.elements[1]*=f,xi.elements[2]*=f,xi.elements[4]*=p,xi.elements[5]*=p,xi.elements[6]*=p,xi.elements[8]*=m,xi.elements[9]*=m,xi.elements[10]*=m,t.setFromRotationMatrix(xi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,o,a,c,u=nr){const d=this.elements,f=2*a/(t-e),p=2*a/(i-o),m=(t+e)/(t-e),v=(i+o)/(i-o);let y,w;if(u===nr)y=-(c+a)/(c-a),w=-2*c*a/(c-a);else if(u===Ic)y=-c/(c-a),w=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=f,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=p,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,o,a,c,u=nr){const d=this.elements,f=1/(t-e),p=1/(i-o),m=1/(c-a),v=(t+e)*f,y=(i+o)*p;let w,M;if(u===nr)w=(c+a)*m,M=-2*m;else if(u===Ic)w=a*m,M=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=M,d[14]=-w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qs=new V,xi=new It,A1=new V(0,0,0),C1=new V(1,1,1),Ir=new V,Ql=new V,Kn=new V,k0=new It,O0=new Oa;class Ui{constructor(e=0,t=0,i=0,o=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],d=o[1],f=o[5],p=o[9],m=o[2],v=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return k0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(k0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return O0.setFromEuler(this),this.setFromQuaternion(O0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Nf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let R1=0;const B0=new V,eo=new Oa,Zi=new It,ec=new V,ga=new V,P1=new V,L1=new Oa,z0=new V(1,0,0),H0=new V(0,1,0),V0=new V(0,0,1),G0={type:"added"},N1={type:"removed"},to={type:"childadded",child:null},jh={type:"childremoved",child:null};class an extends Ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new V,t=new Ui,i=new Oa,o=new V(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new It},normalMatrix:{value:new xt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(z0,e)}rotateY(e){return this.rotateOnAxis(H0,e)}rotateZ(e){return this.rotateOnAxis(V0,e)}translateOnAxis(e,t){return B0.copy(e).applyQuaternion(this.quaternion),this.position.add(B0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(z0,e)}translateY(e){return this.translateOnAxis(H0,e)}translateZ(e){return this.translateOnAxis(V0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ec.copy(e):ec.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(ga,ec,this.up):Zi.lookAt(ec,ga,this.up),this.quaternion.setFromRotationMatrix(Zi),o&&(Zi.extractRotation(o.matrixWorld),eo.setFromRotationMatrix(Zi),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(G0),to.child=e,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(N1),jh.child=e,this.dispatchEvent(jh),jh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(G0),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,P1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,L1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,p=d.length;f<p;f++){const m=d[f];a(e.shapes,m)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(a(e.materials,this.material[d]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),f=c(e.textures),p=c(e.images),m=c(e.shapes),v=c(e.skeletons),y=c(e.animations),w=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),v.length>0&&(i.skeletons=v),y.length>0&&(i.animations=y),w.length>0&&(i.nodes=w)}return i.object=o,i;function c(u){const d=[];for(const f in u){const p=u[f];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}an.DEFAULT_UP=new V(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new V,Ji=new V,Xh=new V,Qi=new V,no=new V,io=new V,W0=new V,$h=new V,Yh=new V,qh=new V,Kh=new Ot,Zh=new Ot,Jh=new Ot;class _i{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),yi.subVectors(e,t),o.cross(yi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){yi.subVectors(o,t),Ji.subVectors(i,t),Xh.subVectors(e,t);const c=yi.dot(yi),u=yi.dot(Ji),d=yi.dot(Xh),f=Ji.dot(Ji),p=Ji.dot(Xh),m=c*f-u*u;if(m===0)return a.set(0,0,0),null;const v=1/m,y=(f*d-u*p)*v,w=(c*p-u*d)*v;return a.set(1-y-w,w,y)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,i,o,a,c,u,d){return this.getBarycoord(e,t,i,o,Qi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Qi.x),d.addScaledVector(c,Qi.y),d.addScaledVector(u,Qi.z),d)}static getInterpolatedAttribute(e,t,i,o,a,c){return Kh.setScalar(0),Zh.setScalar(0),Jh.setScalar(0),Kh.fromBufferAttribute(e,t),Zh.fromBufferAttribute(e,i),Jh.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Kh,a.x),c.addScaledVector(Zh,a.y),c.addScaledVector(Jh,a.z),c}static isFrontFacing(e,t,i,o){return yi.subVectors(i,t),Ji.subVectors(e,t),yi.cross(Ji).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),yi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return _i.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,u;no.subVectors(o,i),io.subVectors(a,i),$h.subVectors(e,i);const d=no.dot($h),f=io.dot($h);if(d<=0&&f<=0)return t.copy(i);Yh.subVectors(e,o);const p=no.dot(Yh),m=io.dot(Yh);if(p>=0&&m<=p)return t.copy(o);const v=d*m-p*f;if(v<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(i).addScaledVector(no,c);qh.subVectors(e,a);const y=no.dot(qh),w=io.dot(qh);if(w>=0&&y<=w)return t.copy(a);const M=y*f-d*w;if(M<=0&&f>=0&&w<=0)return u=f/(f-w),t.copy(i).addScaledVector(io,u);const S=p*w-y*m;if(S<=0&&m-p>=0&&y-w>=0)return W0.subVectors(a,o),u=(m-p)/(m-p+(y-w)),t.copy(o).addScaledVector(W0,u);const x=1/(S+M+v);return c=M*x,u=v*x,t.copy(i).addScaledVector(no,c).addScaledVector(io,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},tc={h:0,s:0,l:0};function Qh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Nt.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=Nt.workingColorSpace){if(e=m1(e,1),t=Et(t,0,1),i=Et(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Qh(c,a,e+1/3),this.g=Qh(c,a,e),this.b=Qh(c,a,e-1/3)}return Nt.toWorkingColorSpace(this,o),this}setStyle(e,t=li){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){const i=bv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Nt.fromWorkingColorSpace(An.copy(this),e),Math.round(Et(An.r*255,0,255))*65536+Math.round(Et(An.g*255,0,255))*256+Math.round(Et(An.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(An.copy(this),t);const i=An.r,o=An.g,a=An.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let d,f;const p=(u+c)/2;if(u===c)d=0,f=0;else{const m=c-u;switch(f=p<=.5?m/(c+u):m/(2-c-u),c){case i:d=(o-a)/m+(o<a?6:0);break;case o:d=(a-i)/m+2;break;case a:d=(i-o)/m+4;break}d/=6}return e.h=d,e.s=f,e.l=p,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=li){Nt.fromWorkingColorSpace(An.copy(this),e);const t=An.r,i=An.g,o=An.b;return e!==li?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Dr),this.setHSL(Dr.h+e,Dr.s+t,Dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Dr),e.getHSL(tc);const i=Fh(Dr.h,tc.h,t),o=Fh(Dr.s,tc.s,t),a=Fh(Dr.l,tc.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new dt;dt.NAMES=bv;let I1=0;class No extends Ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=po,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_d,this.blendDst=Sd,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=P0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(i.blending=this.blending),this.side!==Br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_d&&(i.blendSrc=this.blendSrc),this.blendDst!==Sd&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==P0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class on extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Mf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new V,nc=new Ie;class Ti{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=L0,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)nc.fromBufferAttribute(this,t),nc.applyMatrix3(e),this.setXY(t,nc.x,nc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),i=Vn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),i=Vn(i,this.array),o=Vn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),i=Vn(i,this.array),o=Vn(o,this.array),a=Vn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==L0&&(e.usage=this.usage),e}}class Av extends Ti{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Cv extends Ti{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bt extends Ti{constructor(e,t,i){super(new Float32Array(e),t,i)}}let D1=0;const ai=new It,ed=new an,ro=new V,Zn=new ws,va=new ws,gn=new V;class en extends Ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mv(e)?Cv:Av)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new xt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,i){return ai.makeTranslation(e,t,i),this.applyMatrix4(ai),this}scale(e,t,i){return ai.makeScale(e,t,i),this.applyMatrix4(ai),this}lookAt(e){return ed.lookAt(e),ed.updateMatrix(),this.applyMatrix4(ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Bt(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Zn.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];va.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(Zn.min,va.min),Zn.expandByPoint(gn),gn.addVectors(Zn.max,va.max),Zn.expandByPoint(gn)):(Zn.expandByPoint(va.min),Zn.expandByPoint(va.max))}Zn.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)gn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(gn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)gn.fromBufferAttribute(u,f),d&&(ro.fromBufferAttribute(e,f),gn.add(ro)),o=Math.max(o,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let k=0;k<i.count;k++)u[k]=new V,d[k]=new V;const f=new V,p=new V,m=new V,v=new Ie,y=new Ie,w=new Ie,M=new V,S=new V;function x(k,L,b){f.fromBufferAttribute(i,k),p.fromBufferAttribute(i,L),m.fromBufferAttribute(i,b),v.fromBufferAttribute(a,k),y.fromBufferAttribute(a,L),w.fromBufferAttribute(a,b),p.sub(f),m.sub(f),y.sub(v),w.sub(v);const N=1/(y.x*w.y-w.x*y.y);isFinite(N)&&(M.copy(p).multiplyScalar(w.y).addScaledVector(m,-y.y).multiplyScalar(N),S.copy(m).multiplyScalar(y.x).addScaledVector(p,-w.x).multiplyScalar(N),u[k].add(M),u[L].add(M),u[b].add(M),d[k].add(S),d[L].add(S),d[b].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let k=0,L=R.length;k<L;++k){const b=R[k],N=b.start,Z=b.count;for(let X=N,te=N+Z;X<te;X+=3)x(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const T=new V,E=new V,B=new V,D=new V;function F(k){B.fromBufferAttribute(o,k),D.copy(B);const L=u[k];T.copy(L),T.sub(B.multiplyScalar(B.dot(L))).normalize(),E.crossVectors(D,L);const N=E.dot(d[k])<0?-1:1;c.setXYZW(k,T.x,T.y,T.z,N)}for(let k=0,L=R.length;k<L;++k){const b=R[k],N=b.start,Z=b.count;for(let X=N,te=N+Z;X<te;X+=3)F(e.getX(X+0)),F(e.getX(X+1)),F(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ti(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,y=i.count;v<y;v++)i.setXYZ(v,0,0,0);const o=new V,a=new V,c=new V,u=new V,d=new V,f=new V,p=new V,m=new V;if(e)for(let v=0,y=e.count;v<y;v+=3){const w=e.getX(v+0),M=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,w),a.fromBufferAttribute(t,M),c.fromBufferAttribute(t,S),p.subVectors(c,a),m.subVectors(o,a),p.cross(m),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),u.add(p),d.add(p),f.add(p),i.setXYZ(w,u.x,u.y,u.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(S,f.x,f.y,f.z)}else for(let v=0,y=t.count;v<y;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),p.subVectors(c,a),m.subVectors(o,a),p.cross(m),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(u,d){const f=u.array,p=u.itemSize,m=u.normalized,v=new f.constructor(d.length*p);let y=0,w=0;for(let M=0,S=d.length;M<S;M++){u.isInterleavedBufferAttribute?y=d[M]*u.data.stride+u.offset:y=d[M]*p;for(let x=0;x<p;x++)v[w++]=f[y++]}return new Ti(v,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,o=this.attributes;for(const u in o){const d=o[u],f=e(d,i);t.setAttribute(u,f)}const a=this.morphAttributes;for(const u in a){const d=[],f=a[u];for(let p=0,m=f.length;p<m;p++){const v=f[p],y=e(v,i);d.push(y)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const f=c[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const f=i[d];e.data.attributes[d]=f.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],p=[];for(let m=0,v=f.length;m<v;m++){const y=f[m];p.push(y.toJSON(e.data))}p.length>0&&(o[d]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const f in o){const p=o[f];this.setAttribute(f,p.clone(t))}const a=e.morphAttributes;for(const f in a){const p=[],m=a[f];for(let v=0,y=m.length;v<y;v++)p.push(m[v].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,p=c.length;f<p;f++){const m=c[f];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const j0=new It,ss=new Lf,ic=new Lo,X0=new V,rc=new V,sc=new V,oc=new V,td=new V,ac=new V,$0=new V,lc=new V;class wt extends an{constructor(e=new en,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){ac.set(0,0,0);for(let d=0,f=a.length;d<f;d++){const p=u[d],m=a[d];p!==0&&(td.fromBufferAttribute(m,e),c?ac.addScaledVector(td,p):ac.addScaledVector(td.sub(t),p))}t.add(ac)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(a),ss.copy(e.ray).recast(e.near),!(ic.containsPoint(ss.origin)===!1&&(ss.intersectSphere(ic,X0)===null||ss.origin.distanceToSquared(X0)>(e.far-e.near)**2))&&(j0.copy(a).invert(),ss.copy(e.ray).applyMatrix4(j0),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,f=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,v=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let w=0,M=v.length;w<M;w++){const S=v[w],x=c[S.materialIndex],R=Math.max(S.start,y.start),T=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let E=R,B=T;E<B;E+=3){const D=u.getX(E),F=u.getX(E+1),k=u.getX(E+2);o=cc(this,x,e,i,f,p,m,D,F,k),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),M=Math.min(u.count,y.start+y.count);for(let S=w,x=M;S<x;S+=3){const R=u.getX(S),T=u.getX(S+1),E=u.getX(S+2);o=cc(this,c,e,i,f,p,m,R,T,E),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let w=0,M=v.length;w<M;w++){const S=v[w],x=c[S.materialIndex],R=Math.max(S.start,y.start),T=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let E=R,B=T;E<B;E+=3){const D=E,F=E+1,k=E+2;o=cc(this,x,e,i,f,p,m,D,F,k),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),M=Math.min(d.count,y.start+y.count);for(let S=w,x=M;S<x;S+=3){const R=S,T=S+1,E=S+2;o=cc(this,c,e,i,f,p,m,R,T,E),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function U1(r,e,t,i,o,a,c,u){let d;if(e.side===jn?d=i.intersectTriangle(c,a,o,!0,u):d=i.intersectTriangle(o,a,c,e.side===Br,u),d===null)return null;lc.copy(u),lc.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(lc);return f<t.near||f>t.far?null:{distance:f,point:lc.clone(),object:r}}function cc(r,e,t,i,o,a,c,u,d,f){r.getVertexPosition(u,rc),r.getVertexPosition(d,sc),r.getVertexPosition(f,oc);const p=U1(r,e,t,i,rc,sc,oc,$0);if(p){const m=new V;_i.getBarycoord($0,rc,sc,oc,m),o&&(p.uv=_i.getInterpolatedAttribute(o,u,d,f,m,new Ie)),a&&(p.uv1=_i.getInterpolatedAttribute(a,u,d,f,m,new Ie)),c&&(p.normal=_i.getInterpolatedAttribute(c,u,d,f,m,new V),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const v={a:u,b:d,c:f,normal:new V,materialIndex:0};_i.getNormal(rc,sc,oc,v.normal),p.face=v,p.barycoord=m}return p}class lr extends en{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],f=[],p=[],m=[];let v=0,y=0;w("z","y","x",-1,-1,i,t,e,c,a,0),w("z","y","x",1,-1,i,t,-e,c,a,1),w("x","z","y",1,1,e,i,t,o,c,2),w("x","z","y",1,-1,e,i,-t,o,c,3),w("x","y","z",1,-1,e,t,i,o,a,4),w("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(d),this.setAttribute("position",new Bt(f,3)),this.setAttribute("normal",new Bt(p,3)),this.setAttribute("uv",new Bt(m,2));function w(M,S,x,R,T,E,B,D,F,k,L){const b=E/F,N=B/k,Z=E/2,X=B/2,te=D/2,q=F+1,Q=k+1;let ce=0,G=0;const he=new V;for(let oe=0;oe<Q;oe++){const H=oe*N-X;for(let se=0;se<q;se++){const Ue=se*b-Z;he[M]=Ue*R,he[S]=H*T,he[x]=te,f.push(he.x,he.y,he.z),he[M]=0,he[S]=0,he[x]=D>0?1:-1,p.push(he.x,he.y,he.z),m.push(se/F),m.push(1-oe/k),ce+=1}}for(let oe=0;oe<k;oe++)for(let H=0;H<F;H++){const se=v+H+q*oe,Ue=v+H+q*(oe+1),ie=v+(H+1)+q*(oe+1),fe=v+(H+1)+q*oe;d.push(se,Ue,fe),d.push(Ue,ie,fe),G+=6}u.addGroup(y,G,L),y+=G,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const o=r[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function In(r){const e={};for(let t=0;t<r.length;t++){const i=To(r[t]);for(const o in i)e[o]=i[o]}return e}function F1(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Rv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const k1={clone:To,merge:In};var O1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O1,this.fragmentShader=B1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=F1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Pv extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=nr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new V,Y0=new Ie,q0=new Ie;class Gn extends Pv{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Dc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dc*2*Math.atan(Math.tan(Uh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,Y0,q0),t.subVectors(q0,Y0)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Uh*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,f=c.fullHeight;a+=c.offsetX*o/d,t-=c.offsetY*i/f,o*=c.width/d,i*=c.height/f}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const so=-90,oo=1;class z1 extends an{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Gn(so,oo,e,t);o.layers=this.layers,this.add(o);const a=new Gn(so,oo,e,t);a.layers=this.layers,this.add(a);const c=new Gn(so,oo,e,t);c.layers=this.layers,this.add(c);const u=new Gn(so,oo,e,t);u.layers=this.layers,this.add(u);const d=new Gn(so,oo,e,t);d.layers=this.layers,this.add(d);const f=new Gn(so,oo,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,u,d]=t;for(const f of t)this.remove(f);if(e===nr)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,f,p]=this.children,m=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,c),e.setRenderTarget(i,2,o),e.render(t,u),e.setRenderTarget(i,3,o),e.render(t,d),e.setRenderTarget(i,4,o),e.render(t,f),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,o),e.render(t,p),e.setRenderTarget(m,v,y),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class Lv extends Dn{constructor(e,t,i,o,a,c,u,d,f,p){e=e!==void 0?e:[],t=t!==void 0?t:_o,super(e,t,i,o,a,c,u,d,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class H1 extends ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new Lv(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new lr(5,5,5),a=new zr({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jn,blending:kr});a.uniforms.tEquirect.value=t;const c=new wt(o,a),u=t.minFilter;return t.minFilter===gs&&(t.minFilter=Ni),new z1(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}class V1 extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class G1 extends Dn{constructor(e=null,t=1,i=1,o,a,c,u,d,f=Qn,p=Qn,m,v){super(null,c,u,d,f,p,o,a,m,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class K0 extends Ti{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ao=new It,Z0=new It,uc=[],J0=new ws,W1=new It,xa=new wt,ya=new Lo;class Q0 extends wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new K0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,W1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ws),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ao),J0.copy(e.boundingBox).applyMatrix4(ao),this.boundingBox.union(J0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Lo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ao),ya.copy(e.boundingSphere).applyMatrix4(ao),this.boundingSphere.union(ya)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,o=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let u=0;u<i.length;u++)i[u]=o[c+u]}raycast(e,t){const i=this.matrixWorld,o=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ya.copy(this.boundingSphere),ya.applyMatrix4(i),e.ray.intersectsSphere(ya)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,ao),Z0.multiplyMatrices(i,ao),xa.matrixWorld=Z0,xa.raycast(e,uc);for(let c=0,u=uc.length;c<u;c++){const d=uc[c];d.instanceId=a,d.object=this,t.push(d)}uc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new K0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new G1(new Float32Array(o*this.count),o,this.count,Af,Ii));const a=this.morphTexture.source.data.data;let c=0;for(let f=0;f<i.length;f++)c+=i[f];const u=this.geometry.morphTargetsRelative?1:1-c,d=o*e;a[d]=u,a.set(i,d+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const nd=new V,j1=new V,X1=new xt;class cs{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=nd.subVectors(i,t).cross(j1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(nd),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||X1.getNormalMatrix(e),o=this.coplanarPoint(nd).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new Lo,hc=new V;class If{constructor(e=new cs,t=new cs,i=new cs,o=new cs,a=new cs,c=new cs){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=nr){const i=this.planes,o=e.elements,a=o[0],c=o[1],u=o[2],d=o[3],f=o[4],p=o[5],m=o[6],v=o[7],y=o[8],w=o[9],M=o[10],S=o[11],x=o[12],R=o[13],T=o[14],E=o[15];if(i[0].setComponents(d-a,v-f,S-y,E-x).normalize(),i[1].setComponents(d+a,v+f,S+y,E+x).normalize(),i[2].setComponents(d+c,v+p,S+w,E+R).normalize(),i[3].setComponents(d-c,v-p,S-w,E-R).normalize(),i[4].setComponents(d-u,v-m,S-M,E-T).normalize(),t===nr)i[5].setComponents(d+u,v+m,S+M,E+T).normalize();else if(t===Ic)i[5].setComponents(u,m,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){return os.center.set(0,0,0),os.radius=.7071067811865476,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(hc.x=o.normal.x>0?e.max.x:e.min.x,hc.y=o.normal.y>0?e.max.y:e.min.y,hc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ir extends No{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fc=new V,kc=new V,eg=new It,_a=new Lf,dc=new Lo,id=new V,tg=new V;class rr extends an{constructor(e=new en,t=new ir){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,a=t.count;o<a;o++)Fc.fromBufferAttribute(t,o-1),kc.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=Fc.distanceTo(kc);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dc.copy(i.boundingSphere),dc.applyMatrix4(o),dc.radius+=a,e.ray.intersectsSphere(dc)===!1)return;eg.copy(o).invert(),_a.copy(e.ray).applyMatrix4(eg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=this.isLineSegments?2:1,p=i.index,v=i.attributes.position;if(p!==null){const y=Math.max(0,c.start),w=Math.min(p.count,c.start+c.count);for(let M=y,S=w-1;M<S;M+=f){const x=p.getX(M),R=p.getX(M+1),T=fc(this,e,_a,d,x,R);T&&t.push(T)}if(this.isLineLoop){const M=p.getX(w-1),S=p.getX(y),x=fc(this,e,_a,d,M,S);x&&t.push(x)}}else{const y=Math.max(0,c.start),w=Math.min(v.count,c.start+c.count);for(let M=y,S=w-1;M<S;M+=f){const x=fc(this,e,_a,d,M,M+1);x&&t.push(x)}if(this.isLineLoop){const M=fc(this,e,_a,d,w-1,y);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function fc(r,e,t,i,o,a){const c=r.geometry.attributes.position;if(Fc.fromBufferAttribute(c,o),kc.fromBufferAttribute(c,a),t.distanceSqToSegment(Fc,kc,id,tg)>i)return;id.applyMatrix4(r.matrixWorld);const d=e.ray.origin.distanceTo(id);if(!(d<e.near||d>e.far))return{distance:d,point:tg.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const ng=new V,ig=new V;class rd extends rr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let o=0,a=t.count;o<a;o+=2)ng.fromBufferAttribute(t,o),ig.fromBufferAttribute(t,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+ng.distanceTo(ig);e.setAttribute("lineDistance",new Bt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wa extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Nv extends Dn{constructor(e,t,i,o,a,c,u,d,f,p=mo){if(p!==mo&&p!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===mo&&(i=xs),i===void 0&&p===Mo&&(i=wo),super(null,o,a,c,u,d,p,i,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Qn,this.minFilter=d!==void 0?d:Qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Oi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,o=this.getPoint(0),a=0;t.push(0);for(let c=1;c<=e;c++)i=this.getPoint(c/e),a+=i.distanceTo(o),t.push(a),o=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let o=0;const a=i.length;let c;t?c=t:c=e*i[a-1];let u=0,d=a-1,f;for(;u<=d;)if(o=Math.floor(u+(d-u)/2),f=i[o]-c,f<0)u=o+1;else if(f>0)d=o-1;else{d=o;break}if(o=d,i[o]===c)return o/(a-1);const p=i[o],v=i[o+1]-p,y=(c-p)/v;return(o+y)/(a-1)}getTangent(e,t){let o=e-1e-4,a=e+1e-4;o<0&&(o=0),a>1&&(a=1);const c=this.getPoint(o),u=this.getPoint(a),d=t||(c.isVector2?new Ie:new V);return d.copy(u).sub(c).normalize(),d}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new V,o=[],a=[],c=[],u=new V,d=new It;for(let y=0;y<=e;y++){const w=y/e;o[y]=this.getTangentAt(w,new V)}a[0]=new V,c[0]=new V;let f=Number.MAX_VALUE;const p=Math.abs(o[0].x),m=Math.abs(o[0].y),v=Math.abs(o[0].z);p<=f&&(f=p,i.set(1,0,0)),m<=f&&(f=m,i.set(0,1,0)),v<=f&&i.set(0,0,1),u.crossVectors(o[0],i).normalize(),a[0].crossVectors(o[0],u),c[0].crossVectors(o[0],a[0]);for(let y=1;y<=e;y++){if(a[y]=a[y-1].clone(),c[y]=c[y-1].clone(),u.crossVectors(o[y-1],o[y]),u.length()>Number.EPSILON){u.normalize();const w=Math.acos(Et(o[y-1].dot(o[y]),-1,1));a[y].applyMatrix4(d.makeRotationAxis(u,w))}c[y].crossVectors(o[y],a[y])}if(t===!0){let y=Math.acos(Et(a[0].dot(a[e]),-1,1));y/=e,o[0].dot(u.crossVectors(a[0],a[e]))>0&&(y=-y);for(let w=1;w<=e;w++)a[w].applyMatrix4(d.makeRotationAxis(o[w],y*w)),c[w].crossVectors(o[w],a[w])}return{tangents:o,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Df extends Oi{constructor(e=0,t=0,i=1,o=1,a=0,c=Math.PI*2,u=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=o,this.aStartAngle=a,this.aEndAngle=c,this.aClockwise=u,this.aRotation=d}getPoint(e,t=new Ie){const i=t,o=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const c=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=o;for(;a>o;)a-=o;a<Number.EPSILON&&(c?a=0:a=o),this.aClockwise===!0&&!c&&(a===o?a=-o:a=a-o);const u=this.aStartAngle+e*a;let d=this.aX+this.xRadius*Math.cos(u),f=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const p=Math.cos(this.aRotation),m=Math.sin(this.aRotation),v=d-this.aX,y=f-this.aY;d=v*p-y*m+this.aX,f=v*m+y*p+this.aY}return i.set(d,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $1 extends Df{constructor(e,t,i,o,a,c){super(e,t,i,i,o,a,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Uf(){let r=0,e=0,t=0,i=0;function o(a,c,u,d){r=a,e=u,t=-3*a+3*c-2*u-d,i=2*a-2*c+u+d}return{initCatmullRom:function(a,c,u,d,f){o(c,u,f*(u-a),f*(d-c))},initNonuniformCatmullRom:function(a,c,u,d,f,p,m){let v=(c-a)/f-(u-a)/(f+p)+(u-c)/p,y=(u-c)/p-(d-c)/(p+m)+(d-u)/m;v*=p,y*=p,o(c,u,v,y)},calc:function(a){const c=a*a,u=c*a;return r+e*a+t*c+i*u}}}const pc=new V,sd=new Uf,od=new Uf,ad=new Uf;class Y1 extends Oi{constructor(e=[],t=!1,i="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=o}getPoint(e,t=new V){const i=t,o=this.points,a=o.length,c=(a-(this.closed?0:1))*e;let u=Math.floor(c),d=c-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/a)+1)*a:d===0&&u===a-1&&(u=a-2,d=1);let f,p;this.closed||u>0?f=o[(u-1)%a]:(pc.subVectors(o[0],o[1]).add(o[0]),f=pc);const m=o[u%a],v=o[(u+1)%a];if(this.closed||u+2<a?p=o[(u+2)%a]:(pc.subVectors(o[a-1],o[a-2]).add(o[a-1]),p=pc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let w=Math.pow(f.distanceToSquared(m),y),M=Math.pow(m.distanceToSquared(v),y),S=Math.pow(v.distanceToSquared(p),y);M<1e-4&&(M=1),w<1e-4&&(w=M),S<1e-4&&(S=M),sd.initNonuniformCatmullRom(f.x,m.x,v.x,p.x,w,M,S),od.initNonuniformCatmullRom(f.y,m.y,v.y,p.y,w,M,S),ad.initNonuniformCatmullRom(f.z,m.z,v.z,p.z,w,M,S)}else this.curveType==="catmullrom"&&(sd.initCatmullRom(f.x,m.x,v.x,p.x,this.tension),od.initCatmullRom(f.y,m.y,v.y,p.y,this.tension),ad.initCatmullRom(f.z,m.z,v.z,p.z,this.tension));return i.set(sd.calc(d),od.calc(d),ad.calc(d)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(new V().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function rg(r,e,t,i,o){const a=(i-e)*.5,c=(o-t)*.5,u=r*r,d=r*u;return(2*t-2*i+a+c)*d+(-3*t+3*i-2*a-c)*u+a*r+t}function q1(r,e){const t=1-r;return t*t*e}function K1(r,e){return 2*(1-r)*r*e}function Z1(r,e){return r*r*e}function Ea(r,e,t,i){return q1(r,e)+K1(r,t)+Z1(r,i)}function J1(r,e){const t=1-r;return t*t*t*e}function Q1(r,e){const t=1-r;return 3*t*t*r*e}function ew(r,e){return 3*(1-r)*r*r*e}function tw(r,e){return r*r*r*e}function Ta(r,e,t,i,o){return J1(r,e)+Q1(r,t)+ew(r,i)+tw(r,o)}class Iv extends Oi{constructor(e=new Ie,t=new Ie,i=new Ie,o=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=o}getPoint(e,t=new Ie){const i=t,o=this.v0,a=this.v1,c=this.v2,u=this.v3;return i.set(Ta(e,o.x,a.x,c.x,u.x),Ta(e,o.y,a.y,c.y,u.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nw extends Oi{constructor(e=new V,t=new V,i=new V,o=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=o}getPoint(e,t=new V){const i=t,o=this.v0,a=this.v1,c=this.v2,u=this.v3;return i.set(Ta(e,o.x,a.x,c.x,u.x),Ta(e,o.y,a.y,c.y,u.y),Ta(e,o.z,a.z,c.z,u.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dv extends Oi{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iw extends Oi{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uv extends Oi{constructor(e=new Ie,t=new Ie,i=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ie){const i=t,o=this.v0,a=this.v1,c=this.v2;return i.set(Ea(e,o.x,a.x,c.x),Ea(e,o.y,a.y,c.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rw extends Oi{constructor(e=new V,t=new V,i=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new V){const i=t,o=this.v0,a=this.v1,c=this.v2;return i.set(Ea(e,o.x,a.x,c.x),Ea(e,o.y,a.y,c.y),Ea(e,o.z,a.z,c.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fv extends Oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){const i=t,o=this.points,a=(o.length-1)*e,c=Math.floor(a),u=a-c,d=o[c===0?c:c-1],f=o[c],p=o[c>o.length-2?o.length-1:c+1],m=o[c>o.length-3?o.length-1:c+2];return i.set(rg(u,d.x,f.x,p.x,m.x),rg(u,d.y,f.y,p.y,m.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(new Ie().fromArray(o))}return this}}var of=Object.freeze({__proto__:null,ArcCurve:$1,CatmullRomCurve3:Y1,CubicBezierCurve:Iv,CubicBezierCurve3:nw,EllipseCurve:Df,LineCurve:Dv,LineCurve3:iw,QuadraticBezierCurve:Uv,QuadraticBezierCurve3:rw,SplineCurve:Fv});class sw extends Oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new of[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),o=this.getCurveLengths();let a=0;for(;a<o.length;){if(o[a]>=i){const c=o[a]-i,u=this.curves[a],d=u.getLength(),f=d===0?0:1-c/d;return u.getPointAt(f,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,o=this.curves.length;i<o;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let o=0,a=this.curves;o<a.length;o++){const c=a[o],u=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,d=c.getPoints(u);for(let f=0;f<d.length;f++){const p=d[f];i&&i.equals(p)||(t.push(p),i=p)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const o=e.curves[t];this.curves.push(new of[o.type]().fromJSON(o))}return this}}class af extends sw{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Dv(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,o){const a=new Uv(this.currentPoint.clone(),new Ie(e,t),new Ie(i,o));return this.curves.push(a),this.currentPoint.set(i,o),this}bezierCurveTo(e,t,i,o,a,c){const u=new Iv(this.currentPoint.clone(),new Ie(e,t),new Ie(i,o),new Ie(a,c));return this.curves.push(u),this.currentPoint.set(a,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Fv(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,o,a,c){const u=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(e+u,t+d,i,o,a,c),this}absarc(e,t,i,o,a,c){return this.absellipse(e,t,i,i,o,a,c),this}ellipse(e,t,i,o,a,c,u,d){const f=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(e+f,t+p,i,o,a,c,u,d),this}absellipse(e,t,i,o,a,c,u,d){const f=new Df(e,t,i,o,a,c,u,d);if(this.curves.length>0){const m=f.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(f);const p=f.getPoint(1);return this.currentPoint.copy(p),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ra extends en{constructor(e=1,t=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:o},t=Math.max(3,t);const a=[],c=[],u=[],d=[],f=new V,p=new Ie;c.push(0,0,0),u.push(0,0,1),d.push(.5,.5);for(let m=0,v=3;m<=t;m++,v+=3){const y=i+m/t*o;f.x=e*Math.cos(y),f.y=e*Math.sin(y),c.push(f.x,f.y,f.z),u.push(0,0,1),p.x=(c[v]/e+1)/2,p.y=(c[v+1]/e+1)/2,d.push(p.x,p.y)}for(let m=1;m<=t;m++)a.push(m,m+1,0);this.setIndex(a),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ba extends en{constructor(e=1,t=1,i=1,o=32,a=1,c=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:o,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:d};const f=this;o=Math.floor(o),a=Math.floor(a);const p=[],m=[],v=[],y=[];let w=0;const M=[],S=i/2;let x=0;R(),c===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(p),this.setAttribute("position",new Bt(m,3)),this.setAttribute("normal",new Bt(v,3)),this.setAttribute("uv",new Bt(y,2));function R(){const E=new V,B=new V;let D=0;const F=(t-e)/i;for(let k=0;k<=a;k++){const L=[],b=k/a,N=b*(t-e)+e;for(let Z=0;Z<=o;Z++){const X=Z/o,te=X*d+u,q=Math.sin(te),Q=Math.cos(te);B.x=N*q,B.y=-b*i+S,B.z=N*Q,m.push(B.x,B.y,B.z),E.set(q,F,Q).normalize(),v.push(E.x,E.y,E.z),y.push(X,1-b),L.push(w++)}M.push(L)}for(let k=0;k<o;k++)for(let L=0;L<a;L++){const b=M[L][k],N=M[L+1][k],Z=M[L+1][k+1],X=M[L][k+1];(e>0||L!==0)&&(p.push(b,N,X),D+=3),(t>0||L!==a-1)&&(p.push(N,Z,X),D+=3)}f.addGroup(x,D,0),x+=D}function T(E){const B=w,D=new Ie,F=new V;let k=0;const L=E===!0?e:t,b=E===!0?1:-1;for(let Z=1;Z<=o;Z++)m.push(0,S*b,0),v.push(0,b,0),y.push(.5,.5),w++;const N=w;for(let Z=0;Z<=o;Z++){const te=Z/o*d+u,q=Math.cos(te),Q=Math.sin(te);F.x=L*Q,F.y=S*b,F.z=L*q,m.push(F.x,F.y,F.z),v.push(0,b,0),D.x=q*.5+.5,D.y=Q*.5*b+.5,y.push(D.x,D.y),w++}for(let Z=0;Z<o;Z++){const X=B+Z,te=N+Z;E===!0?p.push(te,te+1,X):p.push(te+1,te,X),k+=3}f.addGroup(x,k,E===!0?1:2),x+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ff extends en{constructor(e=[],t=[],i=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:o};const a=[],c=[];u(o),f(i),p(),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(a.slice(),3)),this.setAttribute("uv",new Bt(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function u(R){const T=new V,E=new V,B=new V;for(let D=0;D<t.length;D+=3)y(t[D+0],T),y(t[D+1],E),y(t[D+2],B),d(T,E,B,R)}function d(R,T,E,B){const D=B+1,F=[];for(let k=0;k<=D;k++){F[k]=[];const L=R.clone().lerp(E,k/D),b=T.clone().lerp(E,k/D),N=D-k;for(let Z=0;Z<=N;Z++)Z===0&&k===D?F[k][Z]=L:F[k][Z]=L.clone().lerp(b,Z/N)}for(let k=0;k<D;k++)for(let L=0;L<2*(D-k)-1;L++){const b=Math.floor(L/2);L%2===0?(v(F[k][b+1]),v(F[k+1][b]),v(F[k][b])):(v(F[k][b+1]),v(F[k+1][b+1]),v(F[k+1][b]))}}function f(R){const T=new V;for(let E=0;E<a.length;E+=3)T.x=a[E+0],T.y=a[E+1],T.z=a[E+2],T.normalize().multiplyScalar(R),a[E+0]=T.x,a[E+1]=T.y,a[E+2]=T.z}function p(){const R=new V;for(let T=0;T<a.length;T+=3){R.x=a[T+0],R.y=a[T+1],R.z=a[T+2];const E=S(R)/2/Math.PI+.5,B=x(R)/Math.PI+.5;c.push(E,1-B)}w(),m()}function m(){for(let R=0;R<c.length;R+=6){const T=c[R+0],E=c[R+2],B=c[R+4],D=Math.max(T,E,B),F=Math.min(T,E,B);D>.9&&F<.1&&(T<.2&&(c[R+0]+=1),E<.2&&(c[R+2]+=1),B<.2&&(c[R+4]+=1))}}function v(R){a.push(R.x,R.y,R.z)}function y(R,T){const E=R*3;T.x=e[E+0],T.y=e[E+1],T.z=e[E+2]}function w(){const R=new V,T=new V,E=new V,B=new V,D=new Ie,F=new Ie,k=new Ie;for(let L=0,b=0;L<a.length;L+=9,b+=6){R.set(a[L+0],a[L+1],a[L+2]),T.set(a[L+3],a[L+4],a[L+5]),E.set(a[L+6],a[L+7],a[L+8]),D.set(c[b+0],c[b+1]),F.set(c[b+2],c[b+3]),k.set(c[b+4],c[b+5]),B.copy(R).add(T).add(E).divideScalar(3);const N=S(B);M(D,b+0,R,N),M(F,b+2,T,N),M(k,b+4,E,N)}}function M(R,T,E,B){B<0&&R.x===1&&(c[T]=R.x-1),E.x===0&&E.z===0&&(c[T]=B/2/Math.PI+.5)}function S(R){return Math.atan2(R.z,-R.x)}function x(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ff(e.vertices,e.indices,e.radius,e.details)}}class Cc extends af{constructor(e){super(e),this.uuid=Po(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,o=this.holes.length;i<o;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const o=e.holes[t];this.holes.push(new af().fromJSON(o))}return this}}const ow={triangulate:function(r,e,t=2){const i=e&&e.length,o=i?e[0]*t:r.length;let a=kv(r,0,o,t,!0);const c=[];if(!a||a.next===a.prev)return c;let u,d,f,p,m,v,y;if(i&&(a=hw(r,e,a,t)),r.length>80*t){u=f=r[0],d=p=r[1];for(let w=t;w<o;w+=t)m=r[w],v=r[w+1],m<u&&(u=m),v<d&&(d=v),m>f&&(f=m),v>p&&(p=v);y=Math.max(f-u,p-d),y=y!==0?32767/y:0}return Pa(a,c,t,u,d,y,0),c}};function kv(r,e,t,i,o){let a,c;if(o===ww(r,e,t,i)>0)for(a=e;a<t;a+=i)c=sg(a,r[a],r[a+1],c);else for(a=t-i;a>=e;a-=i)c=sg(a,r[a],r[a+1],c);return c&&jc(c,c.next)&&(Na(c),c=c.next),c}function _s(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(jc(t,t.next)||Zt(t.prev,t,t.next)===0)){if(Na(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Pa(r,e,t,i,o,a,c){if(!r)return;!c&&a&&gw(r,i,o,a);let u=r,d,f;for(;r.prev!==r.next;){if(d=r.prev,f=r.next,a?lw(r,i,o,a):aw(r)){e.push(d.i/t|0),e.push(r.i/t|0),e.push(f.i/t|0),Na(r),r=f.next,u=f.next;continue}if(r=f,r===u){c?c===1?(r=cw(_s(r),e,t),Pa(r,e,t,i,o,a,2)):c===2&&uw(r,e,t,i,o,a):Pa(_s(r),e,t,i,o,a,1);break}}}function aw(r){const e=r.prev,t=r,i=r.next;if(Zt(e,t,i)>=0)return!1;const o=e.x,a=t.x,c=i.x,u=e.y,d=t.y,f=i.y,p=o<a?o<c?o:c:a<c?a:c,m=u<d?u<f?u:f:d<f?d:f,v=o>a?o>c?o:c:a>c?a:c,y=u>d?u>f?u:f:d>f?d:f;let w=i.next;for(;w!==e;){if(w.x>=p&&w.x<=v&&w.y>=m&&w.y<=y&&uo(o,u,a,d,c,f,w.x,w.y)&&Zt(w.prev,w,w.next)>=0)return!1;w=w.next}return!0}function lw(r,e,t,i){const o=r.prev,a=r,c=r.next;if(Zt(o,a,c)>=0)return!1;const u=o.x,d=a.x,f=c.x,p=o.y,m=a.y,v=c.y,y=u<d?u<f?u:f:d<f?d:f,w=p<m?p<v?p:v:m<v?m:v,M=u>d?u>f?u:f:d>f?d:f,S=p>m?p>v?p:v:m>v?m:v,x=lf(y,w,e,t,i),R=lf(M,S,e,t,i);let T=r.prevZ,E=r.nextZ;for(;T&&T.z>=x&&E&&E.z<=R;){if(T.x>=y&&T.x<=M&&T.y>=w&&T.y<=S&&T!==o&&T!==c&&uo(u,p,d,m,f,v,T.x,T.y)&&Zt(T.prev,T,T.next)>=0||(T=T.prevZ,E.x>=y&&E.x<=M&&E.y>=w&&E.y<=S&&E!==o&&E!==c&&uo(u,p,d,m,f,v,E.x,E.y)&&Zt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;T&&T.z>=x;){if(T.x>=y&&T.x<=M&&T.y>=w&&T.y<=S&&T!==o&&T!==c&&uo(u,p,d,m,f,v,T.x,T.y)&&Zt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;E&&E.z<=R;){if(E.x>=y&&E.x<=M&&E.y>=w&&E.y<=S&&E!==o&&E!==c&&uo(u,p,d,m,f,v,E.x,E.y)&&Zt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function cw(r,e,t){let i=r;do{const o=i.prev,a=i.next.next;!jc(o,a)&&Ov(o,i,i.next,a)&&La(o,a)&&La(a,o)&&(e.push(o.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),Na(i),Na(i.next),i=r=a),i=i.next}while(i!==r);return _s(i)}function uw(r,e,t,i,o,a){let c=r;do{let u=c.next.next;for(;u!==c.prev;){if(c.i!==u.i&&yw(c,u)){let d=Bv(c,u);c=_s(c,c.next),d=_s(d,d.next),Pa(c,e,t,i,o,a,0),Pa(d,e,t,i,o,a,0);return}u=u.next}c=c.next}while(c!==r)}function hw(r,e,t,i){const o=[];let a,c,u,d,f;for(a=0,c=e.length;a<c;a++)u=e[a]*i,d=a<c-1?e[a+1]*i:r.length,f=kv(r,u,d,i,!1),f===f.next&&(f.steiner=!0),o.push(xw(f));for(o.sort(dw),a=0;a<o.length;a++)t=fw(o[a],t);return t}function dw(r,e){return r.x-e.x}function fw(r,e){const t=pw(r,e);if(!t)return e;const i=Bv(t,r);return _s(i,i.next),_s(t,t.next)}function pw(r,e){let t=e,i=-1/0,o;const a=r.x,c=r.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const v=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=a&&v>i&&(i=v,o=t.x<t.next.x?t:t.next,v===a))return o}t=t.next}while(t!==e);if(!o)return null;const u=o,d=o.x,f=o.y;let p=1/0,m;t=o;do a>=t.x&&t.x>=d&&a!==t.x&&uo(c<f?a:i,c,d,f,c<f?i:a,c,t.x,t.y)&&(m=Math.abs(c-t.y)/(a-t.x),La(t,r)&&(m<p||m===p&&(t.x>o.x||t.x===o.x&&mw(o,t)))&&(o=t,p=m)),t=t.next;while(t!==u);return o}function mw(r,e){return Zt(r.prev,r,e.prev)<0&&Zt(e.next,r,r.next)<0}function gw(r,e,t,i){let o=r;do o.z===0&&(o.z=lf(o.x,o.y,e,t,i)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==r);o.prevZ.nextZ=null,o.prevZ=null,vw(o)}function vw(r){let e,t,i,o,a,c,u,d,f=1;do{for(t=r,r=null,a=null,c=0;t;){for(c++,i=t,u=0,e=0;e<f&&(u++,i=i.nextZ,!!i);e++);for(d=f;u>0||d>0&&i;)u!==0&&(d===0||!i||t.z<=i.z)?(o=t,t=t.nextZ,u--):(o=i,i=i.nextZ,d--),a?a.nextZ=o:r=o,o.prevZ=a,a=o;t=i}a.nextZ=null,f*=2}while(c>1);return r}function lf(r,e,t,i,o){return r=(r-t)*o|0,e=(e-i)*o|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function xw(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function uo(r,e,t,i,o,a,c,u){return(o-c)*(e-u)>=(r-c)*(a-u)&&(r-c)*(i-u)>=(t-c)*(e-u)&&(t-c)*(a-u)>=(o-c)*(i-u)}function yw(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!_w(r,e)&&(La(r,e)&&La(e,r)&&Sw(r,e)&&(Zt(r.prev,r,e.prev)||Zt(r,e.prev,e))||jc(r,e)&&Zt(r.prev,r,r.next)>0&&Zt(e.prev,e,e.next)>0)}function Zt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function jc(r,e){return r.x===e.x&&r.y===e.y}function Ov(r,e,t,i){const o=gc(Zt(r,e,t)),a=gc(Zt(r,e,i)),c=gc(Zt(t,i,r)),u=gc(Zt(t,i,e));return!!(o!==a&&c!==u||o===0&&mc(r,t,e)||a===0&&mc(r,i,e)||c===0&&mc(t,r,i)||u===0&&mc(t,e,i))}function mc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function gc(r){return r>0?1:r<0?-1:0}function _w(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Ov(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function La(r,e){return Zt(r.prev,r,r.next)<0?Zt(r,e,r.next)>=0&&Zt(r,r.prev,e)>=0:Zt(r,e,r.prev)<0||Zt(r,r.next,e)<0}function Sw(r,e){let t=r,i=!1;const o=(r.x+e.x)/2,a=(r.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&o<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function Bv(r,e){const t=new cf(r.i,r.x,r.y),i=new cf(e.i,e.x,e.y),o=r.next,a=e.prev;return r.next=e,e.prev=r,t.next=o,o.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function sg(r,e,t,i){const o=new cf(r,e,t);return i?(o.next=i.next,o.prev=i,i.next.prev=o,i.next=o):(o.prev=o,o.next=o),o}function Na(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function cf(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ww(r,e,t,i){let o=0;for(let a=e,c=t-i;a<t;a+=i)o+=(r[c]-r[a])*(r[a+1]+r[c+1]),c=a;return o}class vo{static area(e){const t=e.length;let i=0;for(let o=t-1,a=0;a<t;o=a++)i+=e[o].x*e[a].y-e[a].x*e[o].y;return i*.5}static isClockWise(e){return vo.area(e)<0}static triangulateShape(e,t){const i=[],o=[],a=[];og(e),ag(i,e);let c=e.length;t.forEach(og);for(let d=0;d<t.length;d++)o.push(c),c+=t[d].length,ag(i,t[d]);const u=ow.triangulate(i,o);for(let d=0;d<u.length;d+=3)a.push(u.slice(d,d+3));return a}}function og(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function ag(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class kf extends en{constructor(e=new Cc([new Ie(.5,.5),new Ie(-.5,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,o=[],a=[];for(let u=0,d=e.length;u<d;u++){const f=e[u];c(f)}this.setAttribute("position",new Bt(o,3)),this.setAttribute("uv",new Bt(a,2)),this.computeVertexNormals();function c(u){const d=[],f=t.curveSegments!==void 0?t.curveSegments:12,p=t.steps!==void 0?t.steps:1,m=t.depth!==void 0?t.depth:1;let v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,y=t.bevelThickness!==void 0?t.bevelThickness:.2,w=t.bevelSize!==void 0?t.bevelSize:y-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,R=t.UVGenerator!==void 0?t.UVGenerator:Mw;let T,E=!1,B,D,F,k;x&&(T=x.getSpacedPoints(p),E=!0,v=!1,B=x.computeFrenetFrames(p,!1),D=new V,F=new V,k=new V),v||(S=0,y=0,w=0,M=0);const L=u.extractPoints(f);let b=L.shape;const N=L.holes;if(!vo.isClockWise(b)){b=b.reverse();for(let xe=0,be=N.length;xe<be;xe++){const O=N[xe];vo.isClockWise(O)&&(N[xe]=O.reverse())}}const X=vo.triangulateShape(b,N),te=b;for(let xe=0,be=N.length;xe<be;xe++){const O=N[xe];b=b.concat(O)}function q(xe,be,O){return be||console.error("THREE.ExtrudeGeometry: vec does not exist"),xe.clone().addScaledVector(be,O)}const Q=b.length,ce=X.length;function G(xe,be,O){let Qe,we,Ve;const Re=xe.x-be.x,it=xe.y-be.y,Ee=O.x-xe.x,U=O.y-xe.y,P=Re*Re+it*it,ne=Re*U-it*Ee;if(Math.abs(ne)>Number.EPSILON){const pe=Math.sqrt(P),ye=Math.sqrt(Ee*Ee+U*U),me=be.x-it/pe,$e=be.y+Re/pe,De=O.x-U/ye,We=O.y+Ee/ye,vt=((De-me)*U-(We-$e)*Ee)/(Re*U-it*Ee);Qe=me+Re*vt-xe.x,we=$e+it*vt-xe.y;const Ae=Qe*Qe+we*we;if(Ae<=2)return new Ie(Qe,we);Ve=Math.sqrt(Ae/2)}else{let pe=!1;Re>Number.EPSILON?Ee>Number.EPSILON&&(pe=!0):Re<-Number.EPSILON?Ee<-Number.EPSILON&&(pe=!0):Math.sign(it)===Math.sign(U)&&(pe=!0),pe?(Qe=-it,we=Re,Ve=Math.sqrt(P)):(Qe=Re,we=it,Ve=Math.sqrt(P/2))}return new Ie(Qe/Ve,we/Ve)}const he=[];for(let xe=0,be=te.length,O=be-1,Qe=xe+1;xe<be;xe++,O++,Qe++)O===be&&(O=0),Qe===be&&(Qe=0),he[xe]=G(te[xe],te[O],te[Qe]);const oe=[];let H,se=he.concat();for(let xe=0,be=N.length;xe<be;xe++){const O=N[xe];H=[];for(let Qe=0,we=O.length,Ve=we-1,Re=Qe+1;Qe<we;Qe++,Ve++,Re++)Ve===we&&(Ve=0),Re===we&&(Re=0),H[Qe]=G(O[Qe],O[Ve],O[Re]);oe.push(H),se=se.concat(H)}for(let xe=0;xe<S;xe++){const be=xe/S,O=y*Math.cos(be*Math.PI/2),Qe=w*Math.sin(be*Math.PI/2)+M;for(let we=0,Ve=te.length;we<Ve;we++){const Re=q(te[we],he[we],Qe);ve(Re.x,Re.y,-O)}for(let we=0,Ve=N.length;we<Ve;we++){const Re=N[we];H=oe[we];for(let it=0,Ee=Re.length;it<Ee;it++){const U=q(Re[it],H[it],Qe);ve(U.x,U.y,-O)}}}const Ue=w+M;for(let xe=0;xe<Q;xe++){const be=v?q(b[xe],se[xe],Ue):b[xe];E?(F.copy(B.normals[0]).multiplyScalar(be.x),D.copy(B.binormals[0]).multiplyScalar(be.y),k.copy(T[0]).add(F).add(D),ve(k.x,k.y,k.z)):ve(be.x,be.y,0)}for(let xe=1;xe<=p;xe++)for(let be=0;be<Q;be++){const O=v?q(b[be],se[be],Ue):b[be];E?(F.copy(B.normals[xe]).multiplyScalar(O.x),D.copy(B.binormals[xe]).multiplyScalar(O.y),k.copy(T[xe]).add(F).add(D),ve(k.x,k.y,k.z)):ve(O.x,O.y,m/p*xe)}for(let xe=S-1;xe>=0;xe--){const be=xe/S,O=y*Math.cos(be*Math.PI/2),Qe=w*Math.sin(be*Math.PI/2)+M;for(let we=0,Ve=te.length;we<Ve;we++){const Re=q(te[we],he[we],Qe);ve(Re.x,Re.y,m+O)}for(let we=0,Ve=N.length;we<Ve;we++){const Re=N[we];H=oe[we];for(let it=0,Ee=Re.length;it<Ee;it++){const U=q(Re[it],H[it],Qe);E?ve(U.x,U.y+T[p-1].y,T[p-1].x+O):ve(U.x,U.y,m+O)}}}ie(),fe();function ie(){const xe=o.length/3;if(v){let be=0,O=Q*be;for(let Qe=0;Qe<ce;Qe++){const we=X[Qe];Le(we[2]+O,we[1]+O,we[0]+O)}be=p+S*2,O=Q*be;for(let Qe=0;Qe<ce;Qe++){const we=X[Qe];Le(we[0]+O,we[1]+O,we[2]+O)}}else{for(let be=0;be<ce;be++){const O=X[be];Le(O[2],O[1],O[0])}for(let be=0;be<ce;be++){const O=X[be];Le(O[0]+Q*p,O[1]+Q*p,O[2]+Q*p)}}i.addGroup(xe,o.length/3-xe,0)}function fe(){const xe=o.length/3;let be=0;Me(te,be),be+=te.length;for(let O=0,Qe=N.length;O<Qe;O++){const we=N[O];Me(we,be),be+=we.length}i.addGroup(xe,o.length/3-xe,1)}function Me(xe,be){let O=xe.length;for(;--O>=0;){const Qe=O;let we=O-1;we<0&&(we=xe.length-1);for(let Ve=0,Re=p+S*2;Ve<Re;Ve++){const it=Q*Ve,Ee=Q*(Ve+1),U=be+Qe+it,P=be+we+it,ne=be+we+Ee,pe=be+Qe+Ee;Be(U,P,ne,pe)}}}function ve(xe,be,O){d.push(xe),d.push(be),d.push(O)}function Le(xe,be,O){Xe(xe),Xe(be),Xe(O);const Qe=o.length/3,we=R.generateTopUV(i,o,Qe-3,Qe-2,Qe-1);gt(we[0]),gt(we[1]),gt(we[2])}function Be(xe,be,O,Qe){Xe(xe),Xe(be),Xe(Qe),Xe(be),Xe(O),Xe(Qe);const we=o.length/3,Ve=R.generateSideWallUV(i,o,we-6,we-3,we-2,we-1);gt(Ve[0]),gt(Ve[1]),gt(Ve[3]),gt(Ve[1]),gt(Ve[2]),gt(Ve[3])}function Xe(xe){o.push(d[xe*3+0]),o.push(d[xe*3+1]),o.push(d[xe*3+2])}function gt(xe){a.push(xe.x),a.push(xe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Ew(t,i,e)}static fromJSON(e,t){const i=[];for(let a=0,c=e.shapes.length;a<c;a++){const u=t[e.shapes[a]];i.push(u)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new of[o.type]().fromJSON(o)),new kf(i,e.options)}}const Mw={generateTopUV:function(r,e,t,i,o){const a=e[t*3],c=e[t*3+1],u=e[i*3],d=e[i*3+1],f=e[o*3],p=e[o*3+1];return[new Ie(a,c),new Ie(u,d),new Ie(f,p)]},generateSideWallUV:function(r,e,t,i,o,a){const c=e[t*3],u=e[t*3+1],d=e[t*3+2],f=e[i*3],p=e[i*3+1],m=e[i*3+2],v=e[o*3],y=e[o*3+1],w=e[o*3+2],M=e[a*3],S=e[a*3+1],x=e[a*3+2];return Math.abs(u-p)<Math.abs(c-f)?[new Ie(c,1-d),new Ie(f,1-m),new Ie(v,1-w),new Ie(M,1-x)]:[new Ie(u,1-d),new Ie(p,1-m),new Ie(y,1-w),new Ie(S,1-x)]}};function Ew(r,e,t){if(t.shapes=[],Array.isArray(r))for(let i=0,o=r.length;i<o;i++){const a=r[i];t.shapes.push(a.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Of extends Ff{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Of(e.radius,e.detail)}}class wi extends en{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(i),d=Math.floor(o),f=u+1,p=d+1,m=e/u,v=t/d,y=[],w=[],M=[],S=[];for(let x=0;x<p;x++){const R=x*v-c;for(let T=0;T<f;T++){const E=T*m-a;w.push(E,-R,0),M.push(0,0,1),S.push(T/u),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let R=0;R<u;R++){const T=R+f*x,E=R+f*(x+1),B=R+1+f*(x+1),D=R+1+f*x;y.push(T,E,D),y.push(E,B,D)}this.setIndex(y),this.setAttribute("position",new Bt(w,3)),this.setAttribute("normal",new Bt(M,3)),this.setAttribute("uv",new Bt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xc extends en{constructor(e=.5,t=1,i=32,o=1,a=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:o,thetaStart:a,thetaLength:c},i=Math.max(3,i),o=Math.max(1,o);const u=[],d=[],f=[],p=[];let m=e;const v=(t-e)/o,y=new V,w=new Ie;for(let M=0;M<=o;M++){for(let S=0;S<=i;S++){const x=a+S/i*c;y.x=m*Math.cos(x),y.y=m*Math.sin(x),d.push(y.x,y.y,y.z),f.push(0,0,1),w.x=(y.x/t+1)/2,w.y=(y.y/t+1)/2,p.push(w.x,w.y)}m+=v}for(let M=0;M<o;M++){const S=M*(i+1);for(let x=0;x<i;x++){const R=x+S,T=R,E=R+i+1,B=R+i+2,D=R+1;u.push(T,E,D),u.push(E,B,D)}}this.setIndex(u),this.setAttribute("position",new Bt(d,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ia extends en{constructor(e=1,t=32,i=16,o=0,a=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:a,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(c+u,Math.PI);let f=0;const p=[],m=new V,v=new V,y=[],w=[],M=[],S=[];for(let x=0;x<=i;x++){const R=[],T=x/i;let E=0;x===0&&c===0?E=.5/t:x===i&&d===Math.PI&&(E=-.5/t);for(let B=0;B<=t;B++){const D=B/t;m.x=-e*Math.cos(o+D*a)*Math.sin(c+T*u),m.y=e*Math.cos(c+T*u),m.z=e*Math.sin(o+D*a)*Math.sin(c+T*u),w.push(m.x,m.y,m.z),v.copy(m).normalize(),M.push(v.x,v.y,v.z),S.push(D+E,1-T),R.push(f++)}p.push(R)}for(let x=0;x<i;x++)for(let R=0;R<t;R++){const T=p[x][R+1],E=p[x][R],B=p[x+1][R],D=p[x+1][R+1];(x!==0||c>0)&&y.push(T,E,D),(x!==i-1||d<Math.PI)&&y.push(E,B,D)}this.setIndex(y),this.setAttribute("position",new Bt(w,3)),this.setAttribute("normal",new Bt(M,3)),this.setAttribute("uv",new Bt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bo extends No{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new dt(16777215),this.specular=new dt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sv,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Mf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tw extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=s1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bw extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lg={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Aw{constructor(e,t,i){const o=this;let a=!1,c=0,u=0,d;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){u++,a===!1&&o.onStart!==void 0&&o.onStart(p,c,u),a=!0},this.itemEnd=function(p){c++,o.onProgress!==void 0&&o.onProgress(p,c,u),c===u&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,m){return f.push(p,m),this},this.removeHandler=function(p){const m=f.indexOf(p);return m!==-1&&f.splice(m,2),this},this.getHandler=function(p){for(let m=0,v=f.length;m<v;m+=2){const y=f[m],w=f[m+1];if(y.global&&(y.lastIndex=0),y.test(p))return w}return null}}}const Cw=new Aw;class Bf{constructor(e){this.manager=e!==void 0?e:Cw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,a){i.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bf.DEFAULT_MATERIAL_NAME="__DEFAULT";const er={};class Rw extends Error{constructor(e,t){super(e),this.response=t}}class Pw extends Bf{constructor(e){super(e)}load(e,t,i,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=lg.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(er[e]!==void 0){er[e].push({onLoad:t,onProgress:i,onError:o});return}er[e]=[],er[e].push({onLoad:t,onProgress:i,onError:o});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,d=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const p=er[e],m=f.body.getReader(),v=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),y=v?parseInt(v):0,w=y!==0;let M=0;const S=new ReadableStream({start(x){R();function R(){m.read().then(({done:T,value:E})=>{if(T)x.close();else{M+=E.byteLength;const B=new ProgressEvent("progress",{lengthComputable:w,loaded:M,total:y});for(let D=0,F=p.length;D<F;D++){const k=p[D];k.onProgress&&k.onProgress(B)}x.enqueue(E),R()}},T=>{x.error(T)})}}});return new Response(S)}else throw new Rw(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(d){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return f.json();default:if(u===void 0)return f.text();{const m=/charset="?([^;"\s]*)"?/i.exec(u),v=m&&m[1]?m[1].toLowerCase():void 0,y=new TextDecoder(v);return f.arrayBuffer().then(w=>y.decode(w))}}}).then(f=>{lg.add(e,f);const p=er[e];delete er[e];for(let m=0,v=p.length;m<v;m++){const y=p[m];y.onLoad&&y.onLoad(f)}}).catch(f=>{const p=er[e];if(p===void 0)throw this.manager.itemError(e),f;delete er[e];for(let m=0,v=p.length;m<v;m++){const y=p[m];y.onError&&y.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $c extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ld=new It,cg=new V,ug=new V;class zf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new If,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;cg.setFromMatrixPosition(e.matrixWorld),t.position.copy(cg),ug.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ug),t.updateMatrixWorld(),ld.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ld),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Lw extends zf{constructor(){super(new Gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Dc*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||o!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=o,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Nw extends $c{constructor(e,t,i=0,o=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.distance=i,this.angle=o,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new Lw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hg=new It,Sa=new V,cd=new V;class Iw extends zf{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,o=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Sa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Sa),cd.copy(i.position),cd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(cd),i.updateMatrixWorld(),o.makeTranslation(-Sa.x,-Sa.y,-Sa.z),hg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hg)}}class ud extends $c{constructor(e,t,i=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new Iw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zv extends Pv{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dw extends zf{constructor(){super(new zv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dg extends $c{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new Dw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Uw extends $c{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Fw extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const fg=new It;class kw{constructor(e,t,i=0,o=1/0){this.ray=new Lf(e,t),this.near=i,this.far=o,this.camera=null,this.layers=new Nf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fg),this}intersectObject(e,t=!0,i=[]){return uf(e,this,i,t),i.sort(pg),i}intersectObjects(e,t=!0,i=[]){for(let o=0,a=e.length;o<a;o++)uf(e[o],this,i,t);return i.sort(pg),i}}function pg(r,e){return r.distance-e.distance}function uf(r,e,t,i){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(o=!1),o===!0&&i===!0){const a=r.children;for(let c=0,u=a.length;c<u;c++)uf(a[c],e,t,!0)}}class Ow{constructor(){this.type="ShapePath",this.color=new dt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new af,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,o){return this.currentPath.quadraticCurveTo(e,t,i,o),this}bezierCurveTo(e,t,i,o,a,c){return this.currentPath.bezierCurveTo(e,t,i,o,a,c),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(x){const R=[];for(let T=0,E=x.length;T<E;T++){const B=x[T],D=new Cc;D.curves=B.curves,R.push(D)}return R}function i(x,R){const T=R.length;let E=!1;for(let B=T-1,D=0;D<T;B=D++){let F=R[B],k=R[D],L=k.x-F.x,b=k.y-F.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(F=R[D],L=-L,k=R[B],b=-b),x.y<F.y||x.y>k.y)continue;if(x.y===F.y){if(x.x===F.x)return!0}else{const N=b*(x.x-F.x)-L*(x.y-F.y);if(N===0)return!0;if(N<0)continue;E=!E}}else{if(x.y!==F.y)continue;if(k.x<=x.x&&x.x<=F.x||F.x<=x.x&&x.x<=k.x)return!0}}return E}const o=vo.isClockWise,a=this.subPaths;if(a.length===0)return[];let c,u,d;const f=[];if(a.length===1)return u=a[0],d=new Cc,d.curves=u.curves,f.push(d),f;let p=!o(a[0].getPoints());p=e?!p:p;const m=[],v=[];let y=[],w=0,M;v[w]=void 0,y[w]=[];for(let x=0,R=a.length;x<R;x++)u=a[x],M=u.getPoints(),c=o(M),c=e?!c:c,c?(!p&&v[w]&&w++,v[w]={s:new Cc,p:M},v[w].s.curves=u.curves,p&&w++,y[w]=[]):y[w].push({h:u,p:M[0]});if(!v[0])return t(a);if(v.length>1){let x=!1,R=0;for(let T=0,E=v.length;T<E;T++)m[T]=[];for(let T=0,E=v.length;T<E;T++){const B=y[T];for(let D=0;D<B.length;D++){const F=B[D];let k=!0;for(let L=0;L<v.length;L++)i(F.p,v[L].p)&&(T!==L&&R++,k?(k=!1,m[L].push(F)):x=!0);k&&m[T].push(F)}}R>0&&x===!1&&(y=m)}let S;for(let x=0,R=v.length;x<R;x++){d=v[x].s,f.push(d),S=y[x];for(let T=0,E=S.length;T<E;T++)d.holes.push(S[T].h)}return f}}function mg(r,e,t,i){const o=Bw(i);switch(t){case mv:return r*e;case vv:return r*e;case xv:return r*e*2;case Af:return r*e/o.components*o.byteLength;case Cf:return r*e/o.components*o.byteLength;case yv:return r*e*2/o.components*o.byteLength;case Rf:return r*e*2/o.components*o.byteLength;case gv:return r*e*3/o.components*o.byteLength;case Si:return r*e*4/o.components*o.byteLength;case Pf:return r*e*4/o.components*o.byteLength;case Mc:case Ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Tc:case bc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dd:case Fd:return Math.max(r,16)*Math.max(e,8)/4;case Id:case Ud:return Math.max(r,8)*Math.max(e,8)/2;case kd:case Od:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Bd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case jd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case $d:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case qd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Qd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ac:case ef:case tf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case _v:case nf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case rf:case sf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bw(r){switch(r){case ar:case dv:return{byteLength:1,components:1};case Ca:case fv:case ka:return{byteLength:2,components:1};case Tf:case bf:return{byteLength:2,components:4};case xs:case Ef:case Ii:return{byteLength:4,components:1};case pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hv(){let r=null,e=!1,t=null,i=null;function o(a,c){t(a,c),i=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function zw(r){const e=new WeakMap;function t(u,d){const f=u.array,p=u.usage,m=f.byteLength,v=r.createBuffer();r.bindBuffer(d,v),r.bufferData(d,f,p),u.onUploadCallback();let y;if(f instanceof Float32Array)y=r.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=r.SHORT;else if(f instanceof Uint32Array)y=r.UNSIGNED_INT;else if(f instanceof Int32Array)y=r.INT;else if(f instanceof Int8Array)y=r.BYTE;else if(f instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:m}}function i(u,d,f){const p=d.array,m=d.updateRanges;if(r.bindBuffer(f,u),m.length===0)r.bufferSubData(f,0,p);else{m.sort((y,w)=>y.start-w.start);let v=0;for(let y=1;y<m.length;y++){const w=m[v],M=m[y];M.start<=w.start+w.count+1?w.count=Math.max(w.count,M.start+M.count-w.start):(++v,m[v]=M)}m.length=v+1;for(let y=0,w=m.length;y<w;y++){const M=m[y];r.bufferSubData(f,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(r.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,d),f.version=u.version}}return{get:o,remove:a,update:c}}var Hw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ww=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$w=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vM="gl_FragColor = linearToOutputTexel( gl_FragColor );",xM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,EM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,RM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$M=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_E=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,EE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,TE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$E=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,YE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yt={alphahash_fragment:Hw,alphahash_pars_fragment:Vw,alphamap_fragment:Gw,alphamap_pars_fragment:Ww,alphatest_fragment:jw,alphatest_pars_fragment:Xw,aomap_fragment:$w,aomap_pars_fragment:Yw,batching_pars_vertex:qw,batching_vertex:Kw,begin_vertex:Zw,beginnormal_vertex:Jw,bsdfs:Qw,iridescence_fragment:eM,bumpmap_pars_fragment:tM,clipping_planes_fragment:nM,clipping_planes_pars_fragment:iM,clipping_planes_pars_vertex:rM,clipping_planes_vertex:sM,color_fragment:oM,color_pars_fragment:aM,color_pars_vertex:lM,color_vertex:cM,common:uM,cube_uv_reflection_fragment:hM,defaultnormal_vertex:dM,displacementmap_pars_vertex:fM,displacementmap_vertex:pM,emissivemap_fragment:mM,emissivemap_pars_fragment:gM,colorspace_fragment:vM,colorspace_pars_fragment:xM,envmap_fragment:yM,envmap_common_pars_fragment:_M,envmap_pars_fragment:SM,envmap_pars_vertex:wM,envmap_physical_pars_fragment:IM,envmap_vertex:MM,fog_vertex:EM,fog_pars_vertex:TM,fog_fragment:bM,fog_pars_fragment:AM,gradientmap_pars_fragment:CM,lightmap_pars_fragment:RM,lights_lambert_fragment:PM,lights_lambert_pars_fragment:LM,lights_pars_begin:NM,lights_toon_fragment:DM,lights_toon_pars_fragment:UM,lights_phong_fragment:FM,lights_phong_pars_fragment:kM,lights_physical_fragment:OM,lights_physical_pars_fragment:BM,lights_fragment_begin:zM,lights_fragment_maps:HM,lights_fragment_end:VM,logdepthbuf_fragment:GM,logdepthbuf_pars_fragment:WM,logdepthbuf_pars_vertex:jM,logdepthbuf_vertex:XM,map_fragment:$M,map_pars_fragment:YM,map_particle_fragment:qM,map_particle_pars_fragment:KM,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:JM,morphinstance_vertex:QM,morphcolor_vertex:eE,morphnormal_vertex:tE,morphtarget_pars_vertex:nE,morphtarget_vertex:iE,normal_fragment_begin:rE,normal_fragment_maps:sE,normal_pars_fragment:oE,normal_pars_vertex:aE,normal_vertex:lE,normalmap_pars_fragment:cE,clearcoat_normal_fragment_begin:uE,clearcoat_normal_fragment_maps:hE,clearcoat_pars_fragment:dE,iridescence_pars_fragment:fE,opaque_fragment:pE,packing:mE,premultiplied_alpha_fragment:gE,project_vertex:vE,dithering_fragment:xE,dithering_pars_fragment:yE,roughnessmap_fragment:_E,roughnessmap_pars_fragment:SE,shadowmap_pars_fragment:wE,shadowmap_pars_vertex:ME,shadowmap_vertex:EE,shadowmask_pars_fragment:TE,skinbase_vertex:bE,skinning_pars_vertex:AE,skinning_vertex:CE,skinnormal_vertex:RE,specularmap_fragment:PE,specularmap_pars_fragment:LE,tonemapping_fragment:NE,tonemapping_pars_fragment:IE,transmission_fragment:DE,transmission_pars_fragment:UE,uv_pars_fragment:FE,uv_pars_vertex:kE,uv_vertex:OE,worldpos_vertex:BE,background_vert:zE,background_frag:HE,backgroundCube_vert:VE,backgroundCube_frag:GE,cube_vert:WE,cube_frag:jE,depth_vert:XE,depth_frag:$E,distanceRGBA_vert:YE,distanceRGBA_frag:qE,equirect_vert:KE,equirect_frag:ZE,linedashed_vert:JE,linedashed_frag:QE,meshbasic_vert:eT,meshbasic_frag:tT,meshlambert_vert:nT,meshlambert_frag:iT,meshmatcap_vert:rT,meshmatcap_frag:sT,meshnormal_vert:oT,meshnormal_frag:aT,meshphong_vert:lT,meshphong_frag:cT,meshphysical_vert:uT,meshphysical_frag:hT,meshtoon_vert:dT,meshtoon_frag:fT,points_vert:pT,points_frag:mT,shadow_vert:gT,shadow_frag:vT,sprite_vert:xT,sprite_frag:yT},Oe={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Li={basic:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new dt(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:In([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:In([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new dt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:In([Oe.points,Oe.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:In([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:In([Oe.common,Oe.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:In([Oe.sprite,Oe.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:In([Oe.common,Oe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:In([Oe.lights,Oe.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Li.physical={uniforms:In([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const vc={r:0,b:0,g:0},as=new Ui,_T=new It;function ST(r,e,t,i,o,a,c){const u=new dt(0);let d=a===!0?0:1,f,p,m=null,v=0,y=null;function w(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function M(T){let E=!1;const B=w(T);B===null?x(u,d):B&&B.isColor&&(x(B,1),E=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,c):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(T,E){const B=w(E);B&&(B.isCubeTexture||B.mapping===Wc)?(p===void 0&&(p=new wt(new lr(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:To(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,F,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),as.copy(E.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),p.material.uniforms.envMap.value=B,p.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(_T.makeRotationFromEuler(as)),p.material.toneMapped=Nt.getTransfer(B.colorSpace)!==kt,(m!==B||v!==B.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,m=B,v=B.version,y=r.toneMapping),p.layers.enableAll(),T.unshift(p,p.geometry,p.material,0,0,null)):B&&B.isTexture&&(f===void 0&&(f=new wt(new wi(2,2),new zr({name:"BackgroundMaterial",uniforms:To(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=B,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.toneMapped=Nt.getTransfer(B.colorSpace)!==kt,B.matrixAutoUpdate===!0&&B.updateMatrix(),f.material.uniforms.uvTransform.value.copy(B.matrix),(m!==B||v!==B.version||y!==r.toneMapping)&&(f.material.needsUpdate=!0,m=B,v=B.version,y=r.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null))}function x(T,E){T.getRGB(vc,Rv(r)),i.buffers.color.setClear(vc.r,vc.g,vc.b,E,c)}function R(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),f!==void 0&&(f.geometry.dispose(),f.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(T,E=1){u.set(T),d=E,x(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(T){d=T,x(u,d)},render:M,addToRenderList:S,dispose:R}}function wT(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},o=v(null);let a=o,c=!1;function u(b,N,Z,X,te){let q=!1;const Q=m(X,Z,N);a!==Q&&(a=Q,f(a.object)),q=y(b,X,Z,te),q&&w(b,X,Z,te),te!==null&&e.update(te,r.ELEMENT_ARRAY_BUFFER),(q||c)&&(c=!1,E(b,N,Z,X),te!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function d(){return r.createVertexArray()}function f(b){return r.bindVertexArray(b)}function p(b){return r.deleteVertexArray(b)}function m(b,N,Z){const X=Z.wireframe===!0;let te=i[b.id];te===void 0&&(te={},i[b.id]=te);let q=te[N.id];q===void 0&&(q={},te[N.id]=q);let Q=q[X];return Q===void 0&&(Q=v(d()),q[X]=Q),Q}function v(b){const N=[],Z=[],X=[];for(let te=0;te<t;te++)N[te]=0,Z[te]=0,X[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Z,attributeDivisors:X,object:b,attributes:{},index:null}}function y(b,N,Z,X){const te=a.attributes,q=N.attributes;let Q=0;const ce=Z.getAttributes();for(const G in ce)if(ce[G].location>=0){const oe=te[G];let H=q[G];if(H===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(H=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(H=b.instanceColor)),oe===void 0||oe.attribute!==H||H&&oe.data!==H.data)return!0;Q++}return a.attributesNum!==Q||a.index!==X}function w(b,N,Z,X){const te={},q=N.attributes;let Q=0;const ce=Z.getAttributes();for(const G in ce)if(ce[G].location>=0){let oe=q[G];oe===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor));const H={};H.attribute=oe,oe&&oe.data&&(H.data=oe.data),te[G]=H,Q++}a.attributes=te,a.attributesNum=Q,a.index=X}function M(){const b=a.newAttributes;for(let N=0,Z=b.length;N<Z;N++)b[N]=0}function S(b){x(b,0)}function x(b,N){const Z=a.newAttributes,X=a.enabledAttributes,te=a.attributeDivisors;Z[b]=1,X[b]===0&&(r.enableVertexAttribArray(b),X[b]=1),te[b]!==N&&(r.vertexAttribDivisor(b,N),te[b]=N)}function R(){const b=a.newAttributes,N=a.enabledAttributes;for(let Z=0,X=N.length;Z<X;Z++)N[Z]!==b[Z]&&(r.disableVertexAttribArray(Z),N[Z]=0)}function T(b,N,Z,X,te,q,Q){Q===!0?r.vertexAttribIPointer(b,N,Z,te,q):r.vertexAttribPointer(b,N,Z,X,te,q)}function E(b,N,Z,X){M();const te=X.attributes,q=Z.getAttributes(),Q=N.defaultAttributeValues;for(const ce in q){const G=q[ce];if(G.location>=0){let he=te[ce];if(he===void 0&&(ce==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),ce==="instanceColor"&&b.instanceColor&&(he=b.instanceColor)),he!==void 0){const oe=he.normalized,H=he.itemSize,se=e.get(he);if(se===void 0)continue;const Ue=se.buffer,ie=se.type,fe=se.bytesPerElement,Me=ie===r.INT||ie===r.UNSIGNED_INT||he.gpuType===Ef;if(he.isInterleavedBufferAttribute){const ve=he.data,Le=ve.stride,Be=he.offset;if(ve.isInstancedInterleavedBuffer){for(let Xe=0;Xe<G.locationSize;Xe++)x(G.location+Xe,ve.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Xe=0;Xe<G.locationSize;Xe++)S(G.location+Xe);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let Xe=0;Xe<G.locationSize;Xe++)T(G.location+Xe,H/G.locationSize,ie,oe,Le*fe,(Be+H/G.locationSize*Xe)*fe,Me)}else{if(he.isInstancedBufferAttribute){for(let ve=0;ve<G.locationSize;ve++)x(G.location+ve,he.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ve=0;ve<G.locationSize;ve++)S(G.location+ve);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let ve=0;ve<G.locationSize;ve++)T(G.location+ve,H/G.locationSize,ie,oe,H*fe,H/G.locationSize*ve*fe,Me)}}else if(Q!==void 0){const oe=Q[ce];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(G.location,oe);break;case 3:r.vertexAttrib3fv(G.location,oe);break;case 4:r.vertexAttrib4fv(G.location,oe);break;default:r.vertexAttrib1fv(G.location,oe)}}}}R()}function B(){k();for(const b in i){const N=i[b];for(const Z in N){const X=N[Z];for(const te in X)p(X[te].object),delete X[te];delete N[Z]}delete i[b]}}function D(b){if(i[b.id]===void 0)return;const N=i[b.id];for(const Z in N){const X=N[Z];for(const te in X)p(X[te].object),delete X[te];delete N[Z]}delete i[b.id]}function F(b){for(const N in i){const Z=i[N];if(Z[b.id]===void 0)continue;const X=Z[b.id];for(const te in X)p(X[te].object),delete X[te];delete Z[b.id]}}function k(){L(),c=!0,a!==o&&(a=o,f(a.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:k,resetDefaultState:L,dispose:B,releaseStatesOfGeometry:D,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:S,disableUnusedAttributes:R}}function MT(r,e,t){let i;function o(f){i=f}function a(f,p){r.drawArrays(i,f,p),t.update(p,i,1)}function c(f,p,m){m!==0&&(r.drawArraysInstanced(i,f,p,m),t.update(p,i,m))}function u(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,p,0,m);let y=0;for(let w=0;w<m;w++)y+=p[w];t.update(y,i,1)}function d(f,p,m,v){if(m===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let w=0;w<f.length;w++)c(f[w],p[w],v[w]);else{y.multiDrawArraysInstancedWEBGL(i,f,0,p,0,v,0,m);let w=0;for(let M=0;M<m;M++)w+=p[M]*v[M];t.update(w,i,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ET(r,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==Si&&i.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const k=F===ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ar&&i.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ii&&!k)}function d(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=d(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const m=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=w>0,D=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:m,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:w,maxTextureSize:M,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:B,maxSamples:D}}function TT(r){const e=this;let t=null,i=0,o=!1,a=!1;const c=new cs,u=new xt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v){const y=m.length!==0||v||i!==0||o;return o=v,i=m.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,v){t=p(m,v,0)},this.setState=function(m,v,y){const w=m.clippingPlanes,M=m.clipIntersection,S=m.clipShadows,x=r.get(m);if(!o||w===null||w.length===0||a&&!S)a?p(null):f();else{const R=a?0:i,T=R*4;let E=x.clippingState||null;d.value=E,E=p(w,v,T,y);for(let B=0;B!==T;++B)E[B]=t[B];x.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,v,y,w){const M=m!==null?m.length:0;let S=null;if(M!==0){if(S=d.value,w!==!0||S===null){const x=y+M*4,R=v.matrixWorldInverse;u.getNormalMatrix(R),(S===null||S.length<x)&&(S=new Float32Array(x));for(let T=0,E=y;T!==M;++T,E+=4)c.copy(m[T]).applyMatrix4(R,u),c.normal.toArray(S,E),S[E+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function bT(r){let e=new WeakMap;function t(c,u){return u===Rd?c.mapping=_o:u===Pd&&(c.mapping=So),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===Rd||u===Pd)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const f=new H1(d.height);return f.fromEquirectangularTexture(r,c),e.set(c,f),c.addEventListener("dispose",o),t(f.texture,c.mapping)}else return null}}return c}function o(c){const u=c.target;u.removeEventListener("dispose",o);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const ho=4,gg=[.125,.215,.35,.446,.526,.582],ds=20,hd=new zv,vg=new dt;let dd=null,fd=0,pd=0,md=!1;const us=(1+Math.sqrt(5))/2,lo=1/us,xg=[new V(-us,lo,0),new V(us,lo,0),new V(-lo,0,us),new V(lo,0,us),new V(0,us,-lo),new V(0,us,lo),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class yg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){dd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dd,fd,pd),this._renderer.xr.enabled=md,e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_o||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:ka,format:Si,colorSpace:Eo,depthBuffer:!1},o=_g(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_g(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AT(a)),this._blurMaterial=CT(a,e,t)}return o}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,hd)}_sceneToCubeUV(e,t,i,o){const u=new Gn(90,1,t,i),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,v=p.toneMapping;p.getClearColor(vg),p.toneMapping=Or,p.autoClear=!1;const y=new on({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),w=new wt(new lr,y);let M=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,M=!0):(y.color.copy(vg),M=!0);for(let x=0;x<6;x++){const R=x%3;R===0?(u.up.set(0,d[x],0),u.lookAt(f[x],0,0)):R===1?(u.up.set(0,0,d[x]),u.lookAt(0,f[x],0)):(u.up.set(0,d[x],0),u.lookAt(0,0,f[x]));const T=this._cubeSize;xc(o,R*T,x>2?T:0,T,T),p.setRenderTarget(o),M&&p.render(w,u),p.render(e,u)}w.geometry.dispose(),w.material.dispose(),p.toneMapping=v,p.autoClear=m,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===_o||e.mapping===So;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sg());const a=o?this._cubemapMaterial:this._equirectMaterial,c=new wt(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;xc(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,hd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=xg[(o-a-1)%xg.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",a),this._halfBlur(c,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,c,u){const d=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,m=new wt(this._lodPlanes[o],f),v=f.uniforms,y=this._sizeLods[i]-1,w=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*ds-1),M=a/w,S=isFinite(a)?1+Math.floor(p*M):ds;S>ds&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ds}`);const x=[];let R=0;for(let F=0;F<ds;++F){const k=F/M,L=Math.exp(-k*k/2);x.push(L),F===0?R+=L:F<S&&(R+=2*L)}for(let F=0;F<x.length;F++)x[F]=x[F]/R;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=c==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:T}=this;v.dTheta.value=w,v.mipInt.value=T-i;const E=this._sizeLods[o],B=3*E*(o>T-ho?o-T+ho:0),D=4*(this._cubeSize-E);xc(t,B,D,3*E,2*E),d.setRenderTarget(t),d.render(m,hd)}}function AT(r){const e=[],t=[],i=[];let o=r;const a=r-ho+1+gg.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);t.push(u);let d=1/u;c>r-ho?d=gg[c-r+ho-1]:c===0&&(d=0),i.push(d);const f=1/(u-2),p=-f,m=1+f,v=[p,p,m,p,m,m,p,p,m,m,p,m],y=6,w=6,M=3,S=2,x=1,R=new Float32Array(M*w*y),T=new Float32Array(S*w*y),E=new Float32Array(x*w*y);for(let D=0;D<y;D++){const F=D%3*2/3-1,k=D>2?0:-1,L=[F,k,0,F+2/3,k,0,F+2/3,k+1,0,F,k,0,F+2/3,k+1,0,F,k+1,0];R.set(L,M*w*D),T.set(v,S*w*D);const b=[D,D,D,D,D,D];E.set(b,x*w*D)}const B=new en;B.setAttribute("position",new Ti(R,M)),B.setAttribute("uv",new Ti(T,S)),B.setAttribute("faceIndex",new Ti(E,x)),e.push(B),o>ho&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _g(r,e,t){const i=new ys(r,e,t);return i.texture.mapping=Wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xc(r,e,t,i,o){r.viewport.set(e,t,i,o),r.scissor.set(e,t,i,o)}function CT(r,e,t){const i=new Float32Array(ds),o=new V(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Sg(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function wg(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Hf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RT(r){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,f=d===Rd||d===Pd,p=d===_o||d===So;if(f||p){let m=e.get(u);const v=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new yg(r)),m=f?t.fromEquirectangular(u,m):t.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return f&&y&&y.height>0||p&&y&&o(y)?(t===null&&(t=new yg(r)),m=f?t.fromEquirectangular(u):t.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",a),m.texture):null}}}return u}function o(u){let d=0;const f=6;for(let p=0;p<f;p++)u[p]!==void 0&&d++;return d===f}function a(u){const d=u.target;d.removeEventListener("dispose",a);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function PT(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&co("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function LT(r,e,t,i){const o={},a=new WeakMap;function c(m){const v=m.target;v.index!==null&&e.remove(v.index);for(const w in v.attributes)e.remove(v.attributes[w]);v.removeEventListener("dispose",c),delete o[v.id];const y=a.get(v);y&&(e.remove(y),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(m,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,t.memory.geometries++),v}function d(m){const v=m.attributes;for(const y in v)e.update(v[y],r.ARRAY_BUFFER)}function f(m){const v=[],y=m.index,w=m.attributes.position;let M=0;if(y!==null){const R=y.array;M=y.version;for(let T=0,E=R.length;T<E;T+=3){const B=R[T+0],D=R[T+1],F=R[T+2];v.push(B,D,D,F,F,B)}}else if(w!==void 0){const R=w.array;M=w.version;for(let T=0,E=R.length/3-1;T<E;T+=3){const B=T+0,D=T+1,F=T+2;v.push(B,D,D,F,F,B)}}else return;const S=new(Mv(v)?Cv:Av)(v,1);S.version=M;const x=a.get(m);x&&e.remove(x),a.set(m,S)}function p(m){const v=a.get(m);if(v){const y=m.index;y!==null&&v.version<y.version&&f(m)}else f(m);return a.get(m)}return{get:u,update:d,getWireframeAttribute:p}}function NT(r,e,t){let i;function o(v){i=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function d(v,y){r.drawElements(i,y,a,v*c),t.update(y,i,1)}function f(v,y,w){w!==0&&(r.drawElementsInstanced(i,y,a,v*c,w),t.update(y,i,w))}function p(v,y,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,v,0,w);let S=0;for(let x=0;x<w;x++)S+=y[x];t.update(S,i,1)}function m(v,y,w,M){if(w===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)f(v[x]/c,y[x],M[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,a,v,0,M,0,w);let x=0;for(let R=0;R<w;R++)x+=y[R]*M[R];t.update(x,i,1)}}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function IT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=u*(a/3);break;case r.LINES:t.lines+=u*(a/2);break;case r.LINE_STRIP:t.lines+=u*(a-1);break;case r.LINE_LOOP:t.lines+=u*a;break;case r.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function DT(r,e,t){const i=new WeakMap,o=new Ot;function a(c,u,d){const f=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=p!==void 0?p.length:0;let v=i.get(u);if(v===void 0||v.count!==m){let b=function(){k.dispose(),i.delete(u),u.removeEventListener("dispose",b)};var y=b;v!==void 0&&v.texture.dispose();const w=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let E=0;w===!0&&(E=1),M===!0&&(E=2),S===!0&&(E=3);let B=u.attributes.position.count*E,D=1;B>e.maxTextureSize&&(D=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const F=new Float32Array(B*D*4*m),k=new Tv(F,B,D,m);k.type=Ii,k.needsUpdate=!0;const L=E*4;for(let N=0;N<m;N++){const Z=x[N],X=R[N],te=T[N],q=B*D*4*N;for(let Q=0;Q<Z.count;Q++){const ce=Q*L;w===!0&&(o.fromBufferAttribute(Z,Q),F[q+ce+0]=o.x,F[q+ce+1]=o.y,F[q+ce+2]=o.z,F[q+ce+3]=0),M===!0&&(o.fromBufferAttribute(X,Q),F[q+ce+4]=o.x,F[q+ce+5]=o.y,F[q+ce+6]=o.z,F[q+ce+7]=0),S===!0&&(o.fromBufferAttribute(te,Q),F[q+ce+8]=o.x,F[q+ce+9]=o.y,F[q+ce+10]=o.z,F[q+ce+11]=te.itemSize===4?o.w:1)}}v={count:m,texture:k,size:new Ie(B,D)},i.set(u,v),u.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let w=0;for(let S=0;S<f.length;S++)w+=f[S];const M=u.morphTargetsRelative?1:1-w;d.getUniforms().setValue(r,"morphTargetBaseInfluence",M),d.getUniforms().setValue(r,"morphTargetInfluences",f)}d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:a}}function UT(r,e,t,i){let o=new WeakMap;function a(d){const f=i.render.frame,p=d.geometry,m=e.get(d,p);if(o.get(m)!==f&&(e.update(m),o.set(m,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),o.get(d)!==f&&(t.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,r.ARRAY_BUFFER),o.set(d,f))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==f&&(v.update(),o.set(v,f))}return m}function c(){o=new WeakMap}function u(d){const f=d.target;f.removeEventListener("dispose",u),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:c}}const Vv=new Dn,Mg=new Nv(1,1),Gv=new Tv,Wv=new T1,jv=new Lv,Eg=[],Tg=[],bg=new Float32Array(16),Ag=new Float32Array(9),Cg=new Float32Array(4);function Io(r,e,t){const i=r[0];if(i<=0||i>0)return r;const o=e*t;let a=Eg[o];if(a===void 0&&(a=new Float32Array(o),Eg[o]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,r[c].toArray(a,u)}return a}function hn(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function dn(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Yc(r,e){let t=Tg[e];t===void 0&&(t=new Int32Array(e),Tg[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function FT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function kT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2fv(this.addr,e),dn(t,e)}}function OT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;r.uniform3fv(this.addr,e),dn(t,e)}}function BT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4fv(this.addr,e),dn(t,e)}}function zT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;Cg.set(i),r.uniformMatrix2fv(this.addr,!1,Cg),dn(t,i)}}function HT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;Ag.set(i),r.uniformMatrix3fv(this.addr,!1,Ag),dn(t,i)}}function VT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;bg.set(i),r.uniformMatrix4fv(this.addr,!1,bg),dn(t,i)}}function GT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function WT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2iv(this.addr,e),dn(t,e)}}function jT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3iv(this.addr,e),dn(t,e)}}function XT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4iv(this.addr,e),dn(t,e)}}function $T(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function YT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2uiv(this.addr,e),dn(t,e)}}function qT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3uiv(this.addr,e),dn(t,e)}}function KT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4uiv(this.addr,e),dn(t,e)}}function ZT(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o);let a;this.type===r.SAMPLER_2D_SHADOW?(Mg.compareFunction=wv,a=Mg):a=Vv,t.setTexture2D(e||a,o)}function JT(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||Wv,o)}function QT(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||jv,o)}function eb(r,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(r.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||Gv,o)}function tb(r){switch(r){case 5126:return FT;case 35664:return kT;case 35665:return OT;case 35666:return BT;case 35674:return zT;case 35675:return HT;case 35676:return VT;case 5124:case 35670:return GT;case 35667:case 35671:return WT;case 35668:case 35672:return jT;case 35669:case 35673:return XT;case 5125:return $T;case 36294:return YT;case 36295:return qT;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return JT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return eb}}function nb(r,e){r.uniform1fv(this.addr,e)}function ib(r,e){const t=Io(e,this.size,2);r.uniform2fv(this.addr,t)}function rb(r,e){const t=Io(e,this.size,3);r.uniform3fv(this.addr,t)}function sb(r,e){const t=Io(e,this.size,4);r.uniform4fv(this.addr,t)}function ob(r,e){const t=Io(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ab(r,e){const t=Io(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function lb(r,e){const t=Io(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function cb(r,e){r.uniform1iv(this.addr,e)}function ub(r,e){r.uniform2iv(this.addr,e)}function hb(r,e){r.uniform3iv(this.addr,e)}function db(r,e){r.uniform4iv(this.addr,e)}function fb(r,e){r.uniform1uiv(this.addr,e)}function pb(r,e){r.uniform2uiv(this.addr,e)}function mb(r,e){r.uniform3uiv(this.addr,e)}function gb(r,e){r.uniform4uiv(this.addr,e)}function vb(r,e,t){const i=this.cache,o=e.length,a=Yc(t,o);hn(i,a)||(r.uniform1iv(this.addr,a),dn(i,a));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||Vv,a[c])}function xb(r,e,t){const i=this.cache,o=e.length,a=Yc(t,o);hn(i,a)||(r.uniform1iv(this.addr,a),dn(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Wv,a[c])}function yb(r,e,t){const i=this.cache,o=e.length,a=Yc(t,o);hn(i,a)||(r.uniform1iv(this.addr,a),dn(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||jv,a[c])}function _b(r,e,t){const i=this.cache,o=e.length,a=Yc(t,o);hn(i,a)||(r.uniform1iv(this.addr,a),dn(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Gv,a[c])}function Sb(r){switch(r){case 5126:return nb;case 35664:return ib;case 35665:return rb;case 35666:return sb;case 35674:return ob;case 35675:return ab;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return hb;case 35669:case 35673:return db;case 5125:return fb;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return _b}}class wb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=tb(t.type)}}class Mb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sb(t.type)}}class Eb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],i)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function Rg(r,e){r.seq.push(e),r.map[e.id]=e}function Tb(r,e,t){const i=r.name,o=i.length;for(gd.lastIndex=0;;){const a=gd.exec(i),c=gd.lastIndex;let u=a[1];const d=a[2]==="]",f=a[3];if(d&&(u=u|0),f===void 0||f==="["&&c+2===o){Rg(t,f===void 0?new wb(u,r,e):new Mb(u,r,e));break}else{let m=t.map[u];m===void 0&&(m=new Eb(u),Rg(t,m)),t=m}}}class Rc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Tb(a,c,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function Pg(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const bb=37297;let Ab=0;function Cb(r,e){const t=r.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Lg=new xt;function Rb(r){Nt._getMatrix(Lg,Nt.workingColorSpace,r);const e=`mat3( ${Lg.elements.map(t=>t.toFixed(4))} )`;switch(Nt.getTransfer(r)){case Nc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ng(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+Cb(r.getShaderSource(e),c)}else return o}function Pb(r,e){const t=Rb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lb(r,e){let t;switch(e){case ZS:t="Linear";break;case JS:t="Reinhard";break;case QS:t="Cineon";break;case e1:t="ACESFilmic";break;case n1:t="AgX";break;case i1:t="Neutral";break;case t1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yc=new V;function Nb(){Nt.getLuminanceCoefficients(yc);const r=yc.x.toFixed(4),e=yc.y.toFixed(4),t=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ib(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function Db(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ub(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=r.getActiveAttrib(e,o),c=a.name;let u=1;a.type===r.FLOAT_MAT2&&(u=2),a.type===r.FLOAT_MAT3&&(u=3),a.type===r.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:r.getAttribLocation(e,c),locationSize:u}}return t}function Ma(r){return r!==""}function Ig(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fb=/^[ \t]*#include +<([\w\d./]+)>/gm;function hf(r){return r.replace(Fb,Ob)}const kb=new Map;function Ob(r,e){let t=yt[e];if(t===void 0){const i=kb.get(e);if(i!==void 0)t=yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hf(t)}const Bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ug(r){return r.replace(Bb,zb)}function zb(r,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Fg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===uv?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===PS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===tr&&(e="SHADOWMAP_TYPE_VSM"),e}function Vb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case _o:case So:e="ENVMAP_TYPE_CUBE";break;case Wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case So:e="ENVMAP_MODE_REFRACTION";break}return e}function Wb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Mf:e="ENVMAP_BLENDING_MULTIPLY";break;case qS:e="ENVMAP_BLENDING_MIX";break;case KS:e="ENVMAP_BLENDING_ADD";break}return e}function jb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Xb(r,e,t,i){const o=r.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=Hb(t),f=Vb(t),p=Gb(t),m=Wb(t),v=jb(t),y=Ib(t),w=Db(a),M=o.createProgram();let S,x,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Ma).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Ma).join(`
`),x.length>0&&(x+=`
`)):(S=[Fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),x=[Fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?yt.tonemapping_pars_fragment:"",t.toneMapping!==Or?Lb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,Pb("linearToOutputTexel",t.outputColorSpace),Nb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),c=hf(c),c=Ig(c,t),c=Dg(c,t),u=hf(u),u=Ig(u,t),u=Dg(u,t),c=Ug(c),u=Ug(u),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===N0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===N0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const T=R+S+c,E=R+x+u,B=Pg(o,o.VERTEX_SHADER,T),D=Pg(o,o.FRAGMENT_SHADER,E);o.attachShader(M,B),o.attachShader(M,D),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function F(N){if(r.debug.checkShaderErrors){const Z=o.getProgramInfoLog(M).trim(),X=o.getShaderInfoLog(B).trim(),te=o.getShaderInfoLog(D).trim();let q=!0,Q=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,M,B,D);else{const ce=Ng(o,B,"vertex"),G=Ng(o,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+Z+`
`+ce+`
`+G)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(X===""||te==="")&&(Q=!1);Q&&(N.diagnostics={runnable:q,programLog:Z,vertexShader:{log:X,prefix:S},fragmentShader:{log:te,prefix:x}})}o.deleteShader(B),o.deleteShader(D),k=new Rc(o,M),L=Ub(o,M)}let k;this.getUniforms=function(){return k===void 0&&F(this),k};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=o.getProgramParameter(M,bb)),b},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ab++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=B,this.fragmentShader=D,this}let $b=0;class Yb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new qb(e),t.set(e,i)),i}}class qb{constructor(e){this.id=$b++,this.code=e,this.usedTimes=0}}function Kb(r,e,t,i,o,a,c){const u=new Nf,d=new Yb,f=new Set,p=[],m=o.logarithmicDepthBuffer,v=o.vertexTextures;let y=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(L){return f.add(L),L===0?"uv":`uv${L}`}function S(L,b,N,Z,X){const te=Z.fog,q=X.geometry,Q=L.isMeshStandardMaterial?Z.environment:null,ce=(L.isMeshStandardMaterial?t:e).get(L.envMap||Q),G=ce&&ce.mapping===Wc?ce.image.height:null,he=w[L.type];L.precision!==null&&(y=o.getMaxPrecision(L.precision),y!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",y,"instead."));const oe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,H=oe!==void 0?oe.length:0;let se=0;q.morphAttributes.position!==void 0&&(se=1),q.morphAttributes.normal!==void 0&&(se=2),q.morphAttributes.color!==void 0&&(se=3);let Ue,ie,fe,Me;if(he){const At=Li[he];Ue=At.vertexShader,ie=At.fragmentShader}else Ue=L.vertexShader,ie=L.fragmentShader,d.update(L),fe=d.getVertexShaderID(L),Me=d.getFragmentShaderID(L);const ve=r.getRenderTarget(),Le=r.state.buffers.depth.getReversed(),Be=X.isInstancedMesh===!0,Xe=X.isBatchedMesh===!0,gt=!!L.map,xe=!!L.matcap,be=!!ce,O=!!L.aoMap,Qe=!!L.lightMap,we=!!L.bumpMap,Ve=!!L.normalMap,Re=!!L.displacementMap,it=!!L.emissiveMap,Ee=!!L.metalnessMap,U=!!L.roughnessMap,P=L.anisotropy>0,ne=L.clearcoat>0,pe=L.dispersion>0,ye=L.iridescence>0,me=L.sheen>0,$e=L.transmission>0,De=P&&!!L.anisotropyMap,We=ne&&!!L.clearcoatMap,vt=ne&&!!L.clearcoatNormalMap,Ae=ne&&!!L.clearcoatRoughnessMap,Ke=ye&&!!L.iridescenceMap,st=ye&&!!L.iridescenceThicknessMap,lt=me&&!!L.sheenColorMap,Ze=me&&!!L.sheenRoughnessMap,_t=!!L.specularMap,ft=!!L.specularColorMap,Dt=!!L.specularIntensityMap,K=$e&&!!L.transmissionMap,Fe=$e&&!!L.thicknessMap,de=!!L.gradientMap,ge=!!L.alphaMap,He=L.alphaTest>0,ze=!!L.alphaHash,pt=!!L.extensions;let Ht=Or;L.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ht=r.toneMapping);const ln={shaderID:he,shaderType:L.type,shaderName:L.name,vertexShader:Ue,fragmentShader:ie,defines:L.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:y,batching:Xe,batchingColor:Xe&&X._colorsTexture!==null,instancing:Be,instancingColor:Be&&X.instanceColor!==null,instancingMorph:Be&&X.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ve===null?r.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Eo,alphaToCoverage:!!L.alphaToCoverage,map:gt,matcap:xe,envMap:be,envMapMode:be&&ce.mapping,envMapCubeUVHeight:G,aoMap:O,lightMap:Qe,bumpMap:we,normalMap:Ve,displacementMap:v&&Re,emissiveMap:it,normalMapObjectSpace:Ve&&L.normalMapType===a1,normalMapTangentSpace:Ve&&L.normalMapType===Sv,metalnessMap:Ee,roughnessMap:U,anisotropy:P,anisotropyMap:De,clearcoat:ne,clearcoatMap:We,clearcoatNormalMap:vt,clearcoatRoughnessMap:Ae,dispersion:pe,iridescence:ye,iridescenceMap:Ke,iridescenceThicknessMap:st,sheen:me,sheenColorMap:lt,sheenRoughnessMap:Ze,specularMap:_t,specularColorMap:ft,specularIntensityMap:Dt,transmission:$e,transmissionMap:K,thicknessMap:Fe,gradientMap:de,opaque:L.transparent===!1&&L.blending===po&&L.alphaToCoverage===!1,alphaMap:ge,alphaTest:He,alphaHash:ze,combine:L.combine,mapUv:gt&&M(L.map.channel),aoMapUv:O&&M(L.aoMap.channel),lightMapUv:Qe&&M(L.lightMap.channel),bumpMapUv:we&&M(L.bumpMap.channel),normalMapUv:Ve&&M(L.normalMap.channel),displacementMapUv:Re&&M(L.displacementMap.channel),emissiveMapUv:it&&M(L.emissiveMap.channel),metalnessMapUv:Ee&&M(L.metalnessMap.channel),roughnessMapUv:U&&M(L.roughnessMap.channel),anisotropyMapUv:De&&M(L.anisotropyMap.channel),clearcoatMapUv:We&&M(L.clearcoatMap.channel),clearcoatNormalMapUv:vt&&M(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&M(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&M(L.iridescenceMap.channel),iridescenceThicknessMapUv:st&&M(L.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&M(L.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&M(L.sheenRoughnessMap.channel),specularMapUv:_t&&M(L.specularMap.channel),specularColorMapUv:ft&&M(L.specularColorMap.channel),specularIntensityMapUv:Dt&&M(L.specularIntensityMap.channel),transmissionMapUv:K&&M(L.transmissionMap.channel),thicknessMapUv:Fe&&M(L.thicknessMap.channel),alphaMapUv:ge&&M(L.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ve||P),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!q.attributes.uv&&(gt||ge),fog:!!te,useFog:L.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Le,skinning:X.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:L.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ht,decodeVideoTexture:gt&&L.map.isVideoTexture===!0&&Nt.getTransfer(L.map.colorSpace)===kt,decodeVideoTextureEmissive:it&&L.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(L.emissiveMap.colorSpace)===kt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Kt,flipSided:L.side===jn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:pt&&L.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&L.extensions.multiDraw===!0||Xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return ln.vertexUv1s=f.has(1),ln.vertexUv2s=f.has(2),ln.vertexUv3s=f.has(3),f.clear(),ln}function x(L){const b=[];if(L.shaderID?b.push(L.shaderID):(b.push(L.customVertexShaderID),b.push(L.customFragmentShaderID)),L.defines!==void 0)for(const N in L.defines)b.push(N),b.push(L.defines[N]);return L.isRawShaderMaterial===!1&&(R(b,L),T(b,L),b.push(r.outputColorSpace)),b.push(L.customProgramCacheKey),b.join()}function R(L,b){L.push(b.precision),L.push(b.outputColorSpace),L.push(b.envMapMode),L.push(b.envMapCubeUVHeight),L.push(b.mapUv),L.push(b.alphaMapUv),L.push(b.lightMapUv),L.push(b.aoMapUv),L.push(b.bumpMapUv),L.push(b.normalMapUv),L.push(b.displacementMapUv),L.push(b.emissiveMapUv),L.push(b.metalnessMapUv),L.push(b.roughnessMapUv),L.push(b.anisotropyMapUv),L.push(b.clearcoatMapUv),L.push(b.clearcoatNormalMapUv),L.push(b.clearcoatRoughnessMapUv),L.push(b.iridescenceMapUv),L.push(b.iridescenceThicknessMapUv),L.push(b.sheenColorMapUv),L.push(b.sheenRoughnessMapUv),L.push(b.specularMapUv),L.push(b.specularColorMapUv),L.push(b.specularIntensityMapUv),L.push(b.transmissionMapUv),L.push(b.thicknessMapUv),L.push(b.combine),L.push(b.fogExp2),L.push(b.sizeAttenuation),L.push(b.morphTargetsCount),L.push(b.morphAttributeCount),L.push(b.numDirLights),L.push(b.numPointLights),L.push(b.numSpotLights),L.push(b.numSpotLightMaps),L.push(b.numHemiLights),L.push(b.numRectAreaLights),L.push(b.numDirLightShadows),L.push(b.numPointLightShadows),L.push(b.numSpotLightShadows),L.push(b.numSpotLightShadowsWithMaps),L.push(b.numLightProbes),L.push(b.shadowMapType),L.push(b.toneMapping),L.push(b.numClippingPlanes),L.push(b.numClipIntersection),L.push(b.depthPacking)}function T(L,b){u.disableAll(),b.supportsVertexTextures&&u.enable(0),b.instancing&&u.enable(1),b.instancingColor&&u.enable(2),b.instancingMorph&&u.enable(3),b.matcap&&u.enable(4),b.envMap&&u.enable(5),b.normalMapObjectSpace&&u.enable(6),b.normalMapTangentSpace&&u.enable(7),b.clearcoat&&u.enable(8),b.iridescence&&u.enable(9),b.alphaTest&&u.enable(10),b.vertexColors&&u.enable(11),b.vertexAlphas&&u.enable(12),b.vertexUv1s&&u.enable(13),b.vertexUv2s&&u.enable(14),b.vertexUv3s&&u.enable(15),b.vertexTangents&&u.enable(16),b.anisotropy&&u.enable(17),b.alphaHash&&u.enable(18),b.batching&&u.enable(19),b.dispersion&&u.enable(20),b.batchingColor&&u.enable(21),L.push(u.mask),u.disableAll(),b.fog&&u.enable(0),b.useFog&&u.enable(1),b.flatShading&&u.enable(2),b.logarithmicDepthBuffer&&u.enable(3),b.reverseDepthBuffer&&u.enable(4),b.skinning&&u.enable(5),b.morphTargets&&u.enable(6),b.morphNormals&&u.enable(7),b.morphColors&&u.enable(8),b.premultipliedAlpha&&u.enable(9),b.shadowMapEnabled&&u.enable(10),b.doubleSided&&u.enable(11),b.flipSided&&u.enable(12),b.useDepthPacking&&u.enable(13),b.dithering&&u.enable(14),b.transmission&&u.enable(15),b.sheen&&u.enable(16),b.opaque&&u.enable(17),b.pointsUvs&&u.enable(18),b.decodeVideoTexture&&u.enable(19),b.decodeVideoTextureEmissive&&u.enable(20),b.alphaToCoverage&&u.enable(21),L.push(u.mask)}function E(L){const b=w[L.type];let N;if(b){const Z=Li[b];N=k1.clone(Z.uniforms)}else N=L.uniforms;return N}function B(L,b){let N;for(let Z=0,X=p.length;Z<X;Z++){const te=p[Z];if(te.cacheKey===b){N=te,++N.usedTimes;break}}return N===void 0&&(N=new Xb(r,b,L,a),p.push(N)),N}function D(L){if(--L.usedTimes===0){const b=p.indexOf(L);p[b]=p[p.length-1],p.pop(),L.destroy()}}function F(L){d.remove(L)}function k(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:E,acquireProgram:B,releaseProgram:D,releaseShaderCache:F,programs:p,dispose:k}}function Zb(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let u=r.get(c);return u===void 0&&(u={},r.set(c,u)),u}function i(c){r.delete(c)}function o(c,u,d){r.get(c)[u]=d}function a(){r=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function Jb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function kg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Og(){const r=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(m,v,y,w,M,S){let x=r[e];return x===void 0?(x={id:m.id,object:m,geometry:v,material:y,groupOrder:w,renderOrder:m.renderOrder,z:M,group:S},r[e]=x):(x.id=m.id,x.object=m,x.geometry=v,x.material=y,x.groupOrder=w,x.renderOrder=m.renderOrder,x.z=M,x.group=S),e++,x}function u(m,v,y,w,M,S){const x=c(m,v,y,w,M,S);y.transmission>0?i.push(x):y.transparent===!0?o.push(x):t.push(x)}function d(m,v,y,w,M,S){const x=c(m,v,y,w,M,S);y.transmission>0?i.unshift(x):y.transparent===!0?o.unshift(x):t.unshift(x)}function f(m,v){t.length>1&&t.sort(m||Jb),i.length>1&&i.sort(v||kg),o.length>1&&o.sort(v||kg)}function p(){for(let m=e,v=r.length;m<v;m++){const y=r[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:u,unshift:d,finish:p,sort:f}}function Qb(){let r=new WeakMap;function e(i,o){const a=r.get(i);let c;return a===void 0?(c=new Og,r.set(i,[c])):o>=a.length?(c=new Og,a.push(c)):c=a[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function eA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new dt};break;case"SpotLight":t={position:new V,direction:new V,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new V,halfWidth:new V,halfHeight:new V};break}return r[e.id]=t,t}}}function tA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let nA=0;function iA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function rA(r){const e=new eA,t=tA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new V);const o=new V,a=new It,c=new It;function u(f){let p=0,m=0,v=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let y=0,w=0,M=0,S=0,x=0,R=0,T=0,E=0,B=0,D=0,F=0;f.sort(iA);for(let L=0,b=f.length;L<b;L++){const N=f[L],Z=N.color,X=N.intensity,te=N.distance,q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)p+=Z.r*X,m+=Z.g*X,v+=Z.b*X;else if(N.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(N.sh.coefficients[Q],X);F++}else if(N.isDirectionalLight){const Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ce=N.shadow,G=t.get(N);G.shadowIntensity=ce.intensity,G.shadowBias=ce.bias,G.shadowNormalBias=ce.normalBias,G.shadowRadius=ce.radius,G.shadowMapSize=ce.mapSize,i.directionalShadow[y]=G,i.directionalShadowMap[y]=q,i.directionalShadowMatrix[y]=N.shadow.matrix,R++}i.directional[y]=Q,y++}else if(N.isSpotLight){const Q=e.get(N);Q.position.setFromMatrixPosition(N.matrixWorld),Q.color.copy(Z).multiplyScalar(X),Q.distance=te,Q.coneCos=Math.cos(N.angle),Q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Q.decay=N.decay,i.spot[M]=Q;const ce=N.shadow;if(N.map&&(i.spotLightMap[B]=N.map,B++,ce.updateMatrices(N),N.castShadow&&D++),i.spotLightMatrix[M]=ce.matrix,N.castShadow){const G=t.get(N);G.shadowIntensity=ce.intensity,G.shadowBias=ce.bias,G.shadowNormalBias=ce.normalBias,G.shadowRadius=ce.radius,G.shadowMapSize=ce.mapSize,i.spotShadow[M]=G,i.spotShadowMap[M]=q,E++}M++}else if(N.isRectAreaLight){const Q=e.get(N);Q.color.copy(Z).multiplyScalar(X),Q.halfWidth.set(N.width*.5,0,0),Q.halfHeight.set(0,N.height*.5,0),i.rectArea[S]=Q,S++}else if(N.isPointLight){const Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),Q.distance=N.distance,Q.decay=N.decay,N.castShadow){const ce=N.shadow,G=t.get(N);G.shadowIntensity=ce.intensity,G.shadowBias=ce.bias,G.shadowNormalBias=ce.normalBias,G.shadowRadius=ce.radius,G.shadowMapSize=ce.mapSize,G.shadowCameraNear=ce.camera.near,G.shadowCameraFar=ce.camera.far,i.pointShadow[w]=G,i.pointShadowMap[w]=q,i.pointShadowMatrix[w]=N.shadow.matrix,T++}i.point[w]=Q,w++}else if(N.isHemisphereLight){const Q=e.get(N);Q.skyColor.copy(N.color).multiplyScalar(X),Q.groundColor.copy(N.groundColor).multiplyScalar(X),i.hemi[x]=Q,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=m,i.ambient[2]=v;const k=i.hash;(k.directionalLength!==y||k.pointLength!==w||k.spotLength!==M||k.rectAreaLength!==S||k.hemiLength!==x||k.numDirectionalShadows!==R||k.numPointShadows!==T||k.numSpotShadows!==E||k.numSpotMaps!==B||k.numLightProbes!==F)&&(i.directional.length=y,i.spot.length=M,i.rectArea.length=S,i.point.length=w,i.hemi.length=x,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+B-D,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=F,k.directionalLength=y,k.pointLength=w,k.spotLength=M,k.rectAreaLength=S,k.hemiLength=x,k.numDirectionalShadows=R,k.numPointShadows=T,k.numSpotShadows=E,k.numSpotMaps=B,k.numLightProbes=F,i.version=nA++)}function d(f,p){let m=0,v=0,y=0,w=0,M=0;const S=p.matrixWorldInverse;for(let x=0,R=f.length;x<R;x++){const T=f[x];if(T.isDirectionalLight){const E=i.directional[m];E.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(S),m++}else if(T.isSpotLight){const E=i.spot[y];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(S),E.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(S),y++}else if(T.isRectAreaLight){const E=i.rectArea[w];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(S),c.identity(),a.copy(T.matrixWorld),a.premultiply(S),c.extractRotation(a),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(c),E.halfHeight.applyMatrix4(c),w++}else if(T.isPointLight){const E=i.point[v];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(S),v++}else if(T.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(S),M++}}}return{setup:u,setupView:d,state:i}}function Bg(r){const e=new rA(r),t=[],i=[];function o(p){f.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function c(p){i.push(p)}function u(){e.setup(t)}function d(p){e.setupView(t,p)}const f={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:f,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:c}}function sA(r){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new Bg(r),e.set(o,[u])):a>=c.length?(u=new Bg(r),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const oA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lA(r,e,t){let i=new If;const o=new Ie,a=new Ie,c=new Ot,u=new Tw({depthPacking:o1}),d=new bw,f={},p=t.maxTextureSize,m={[Br]:jn,[jn]:Br,[Kt]:Kt},v=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:oA,fragmentShader:aA}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const w=new en;w.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new wt(w,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uv;let x=this.type;this.render=function(D,F,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||D.length===0)return;const L=r.getRenderTarget(),b=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(kr),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const X=x!==tr&&this.type===tr,te=x===tr&&this.type!==tr;for(let q=0,Q=D.length;q<Q;q++){const ce=D[q],G=ce.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const he=G.getFrameExtents();if(o.multiply(he),a.copy(G.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/he.x),o.x=a.x*he.x,G.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/he.y),o.y=a.y*he.y,G.mapSize.y=a.y)),G.map===null||X===!0||te===!0){const H=this.type!==tr?{minFilter:Qn,magFilter:Qn}:{};G.map!==null&&G.map.dispose(),G.map=new ys(o.x,o.y,H),G.map.texture.name=ce.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const oe=G.getViewportCount();for(let H=0;H<oe;H++){const se=G.getViewport(H);c.set(a.x*se.x,a.y*se.y,a.x*se.z,a.y*se.w),Z.viewport(c),G.updateMatrices(ce,H),i=G.getFrustum(),E(F,k,G.camera,ce,this.type)}G.isPointLightShadow!==!0&&this.type===tr&&R(G,k),G.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(L,b,N)};function R(D,F){const k=e.update(M);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ys(o.x,o.y)),v.uniforms.shadow_pass.value=D.map.texture,v.uniforms.resolution.value=D.mapSize,v.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(F,null,k,v,M,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(F,null,k,y,M,null)}function T(D,F,k,L){let b=null;const N=k.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(N!==void 0)b=N;else if(b=k.isPointLight===!0?d:u,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const Z=b.uuid,X=F.uuid;let te=f[Z];te===void 0&&(te={},f[Z]=te);let q=te[X];q===void 0&&(q=b.clone(),te[X]=q,F.addEventListener("dispose",B)),b=q}if(b.visible=F.visible,b.wireframe=F.wireframe,L===tr?b.side=F.shadowSide!==null?F.shadowSide:F.side:b.side=F.shadowSide!==null?F.shadowSide:m[F.side],b.alphaMap=F.alphaMap,b.alphaTest=F.alphaTest,b.map=F.map,b.clipShadows=F.clipShadows,b.clippingPlanes=F.clippingPlanes,b.clipIntersection=F.clipIntersection,b.displacementMap=F.displacementMap,b.displacementScale=F.displacementScale,b.displacementBias=F.displacementBias,b.wireframeLinewidth=F.wireframeLinewidth,b.linewidth=F.linewidth,k.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Z=r.properties.get(b);Z.light=k}return b}function E(D,F,k,L,b){if(D.visible===!1)return;if(D.layers.test(F.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&b===tr)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,D.matrixWorld);const X=e.update(D),te=D.material;if(Array.isArray(te)){const q=X.groups;for(let Q=0,ce=q.length;Q<ce;Q++){const G=q[Q],he=te[G.materialIndex];if(he&&he.visible){const oe=T(D,he,L,b);D.onBeforeShadow(r,D,F,k,X,oe,G),r.renderBufferDirect(k,null,X,oe,D,G),D.onAfterShadow(r,D,F,k,X,oe,G)}}}else if(te.visible){const q=T(D,te,L,b);D.onBeforeShadow(r,D,F,k,X,q,null),r.renderBufferDirect(k,null,X,q,D,null),D.onAfterShadow(r,D,F,k,X,q,null)}}const Z=D.children;for(let X=0,te=Z.length;X<te;X++)E(Z[X],F,k,L,b)}function B(D){D.target.removeEventListener("dispose",B);for(const k in f){const L=f[k],b=D.target.uuid;b in L&&(L[b].dispose(),delete L[b])}}}const cA={[wd]:Md,[Ed]:Ad,[Td]:Cd,[yo]:bd,[Md]:wd,[Ad]:Ed,[Cd]:Td,[bd]:yo};function uA(r,e){function t(){let K=!1;const Fe=new Ot;let de=null;const ge=new Ot(0,0,0,0);return{setMask:function(He){de!==He&&!K&&(r.colorMask(He,He,He,He),de=He)},setLocked:function(He){K=He},setClear:function(He,ze,pt,Ht,ln){ln===!0&&(He*=Ht,ze*=Ht,pt*=Ht),Fe.set(He,ze,pt,Ht),ge.equals(Fe)===!1&&(r.clearColor(He,ze,pt,Ht),ge.copy(Fe))},reset:function(){K=!1,de=null,ge.set(-1,0,0,0)}}}function i(){let K=!1,Fe=!1,de=null,ge=null,He=null;return{setReversed:function(ze){if(Fe!==ze){const pt=e.get("EXT_clip_control");Fe?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);const Ht=He;He=null,this.setClear(Ht)}Fe=ze},getReversed:function(){return Fe},setTest:function(ze){ze?ve(r.DEPTH_TEST):Le(r.DEPTH_TEST)},setMask:function(ze){de!==ze&&!K&&(r.depthMask(ze),de=ze)},setFunc:function(ze){if(Fe&&(ze=cA[ze]),ge!==ze){switch(ze){case wd:r.depthFunc(r.NEVER);break;case Md:r.depthFunc(r.ALWAYS);break;case Ed:r.depthFunc(r.LESS);break;case yo:r.depthFunc(r.LEQUAL);break;case Td:r.depthFunc(r.EQUAL);break;case bd:r.depthFunc(r.GEQUAL);break;case Ad:r.depthFunc(r.GREATER);break;case Cd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=ze}},setLocked:function(ze){K=ze},setClear:function(ze){He!==ze&&(Fe&&(ze=1-ze),r.clearDepth(ze),He=ze)},reset:function(){K=!1,de=null,ge=null,He=null,Fe=!1}}}function o(){let K=!1,Fe=null,de=null,ge=null,He=null,ze=null,pt=null,Ht=null,ln=null;return{setTest:function(At){K||(At?ve(r.STENCIL_TEST):Le(r.STENCIL_TEST))},setMask:function(At){Fe!==At&&!K&&(r.stencilMask(At),Fe=At)},setFunc:function(At,Un,Cn){(de!==At||ge!==Un||He!==Cn)&&(r.stencilFunc(At,Un,Cn),de=At,ge=Un,He=Cn)},setOp:function(At,Un,Cn){(ze!==At||pt!==Un||Ht!==Cn)&&(r.stencilOp(At,Un,Cn),ze=At,pt=Un,Ht=Cn)},setLocked:function(At){K=At},setClear:function(At){ln!==At&&(r.clearStencil(At),ln=At)},reset:function(){K=!1,Fe=null,de=null,ge=null,He=null,ze=null,pt=null,Ht=null,ln=null}}}const a=new t,c=new i,u=new o,d=new WeakMap,f=new WeakMap;let p={},m={},v=new WeakMap,y=[],w=null,M=!1,S=null,x=null,R=null,T=null,E=null,B=null,D=null,F=new dt(0,0,0),k=0,L=!1,b=null,N=null,Z=null,X=null,te=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ce=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(G)[1]),Q=ce>=1):G.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Q=ce>=2);let he=null,oe={};const H=r.getParameter(r.SCISSOR_BOX),se=r.getParameter(r.VIEWPORT),Ue=new Ot().fromArray(H),ie=new Ot().fromArray(se);function fe(K,Fe,de,ge){const He=new Uint8Array(4),ze=r.createTexture();r.bindTexture(K,ze),r.texParameteri(K,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(K,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let pt=0;pt<de;pt++)K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?r.texImage3D(Fe,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,He):r.texImage2D(Fe+pt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,He);return ze}const Me={};Me[r.TEXTURE_2D]=fe(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=fe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=fe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=fe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ve(r.DEPTH_TEST),c.setFunc(yo),we(!1),Ve(A0),ve(r.CULL_FACE),O(kr);function ve(K){p[K]!==!0&&(r.enable(K),p[K]=!0)}function Le(K){p[K]!==!1&&(r.disable(K),p[K]=!1)}function Be(K,Fe){return m[K]!==Fe?(r.bindFramebuffer(K,Fe),m[K]=Fe,K===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Fe),K===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Fe),!0):!1}function Xe(K,Fe){let de=y,ge=!1;if(K){de=v.get(Fe),de===void 0&&(de=[],v.set(Fe,de));const He=K.textures;if(de.length!==He.length||de[0]!==r.COLOR_ATTACHMENT0){for(let ze=0,pt=He.length;ze<pt;ze++)de[ze]=r.COLOR_ATTACHMENT0+ze;de.length=He.length,ge=!0}}else de[0]!==r.BACK&&(de[0]=r.BACK,ge=!0);ge&&r.drawBuffers(de)}function gt(K){return w!==K?(r.useProgram(K),w=K,!0):!1}const xe={[hs]:r.FUNC_ADD,[NS]:r.FUNC_SUBTRACT,[IS]:r.FUNC_REVERSE_SUBTRACT};xe[DS]=r.MIN,xe[US]=r.MAX;const be={[FS]:r.ZERO,[kS]:r.ONE,[OS]:r.SRC_COLOR,[_d]:r.SRC_ALPHA,[WS]:r.SRC_ALPHA_SATURATE,[VS]:r.DST_COLOR,[zS]:r.DST_ALPHA,[BS]:r.ONE_MINUS_SRC_COLOR,[Sd]:r.ONE_MINUS_SRC_ALPHA,[GS]:r.ONE_MINUS_DST_COLOR,[HS]:r.ONE_MINUS_DST_ALPHA,[jS]:r.CONSTANT_COLOR,[XS]:r.ONE_MINUS_CONSTANT_COLOR,[$S]:r.CONSTANT_ALPHA,[YS]:r.ONE_MINUS_CONSTANT_ALPHA};function O(K,Fe,de,ge,He,ze,pt,Ht,ln,At){if(K===kr){M===!0&&(Le(r.BLEND),M=!1);return}if(M===!1&&(ve(r.BLEND),M=!0),K!==LS){if(K!==S||At!==L){if((x!==hs||E!==hs)&&(r.blendEquation(r.FUNC_ADD),x=hs,E=hs),At)switch(K){case po:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ut:r.blendFunc(r.ONE,r.ONE);break;case C0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case R0:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case po:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ut:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case C0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case R0:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}R=null,T=null,B=null,D=null,F.set(0,0,0),k=0,S=K,L=At}return}He=He||Fe,ze=ze||de,pt=pt||ge,(Fe!==x||He!==E)&&(r.blendEquationSeparate(xe[Fe],xe[He]),x=Fe,E=He),(de!==R||ge!==T||ze!==B||pt!==D)&&(r.blendFuncSeparate(be[de],be[ge],be[ze],be[pt]),R=de,T=ge,B=ze,D=pt),(Ht.equals(F)===!1||ln!==k)&&(r.blendColor(Ht.r,Ht.g,Ht.b,ln),F.copy(Ht),k=ln),S=K,L=!1}function Qe(K,Fe){K.side===Kt?Le(r.CULL_FACE):ve(r.CULL_FACE);let de=K.side===jn;Fe&&(de=!de),we(de),K.blending===po&&K.transparent===!1?O(kr):O(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),c.setFunc(K.depthFunc),c.setTest(K.depthTest),c.setMask(K.depthWrite),a.setMask(K.colorWrite);const ge=K.stencilWrite;u.setTest(ge),ge&&(u.setMask(K.stencilWriteMask),u.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),u.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),it(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):Le(r.SAMPLE_ALPHA_TO_COVERAGE)}function we(K){b!==K&&(K?r.frontFace(r.CW):r.frontFace(r.CCW),b=K)}function Ve(K){K!==CS?(ve(r.CULL_FACE),K!==N&&(K===A0?r.cullFace(r.BACK):K===RS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Le(r.CULL_FACE),N=K}function Re(K){K!==Z&&(Q&&r.lineWidth(K),Z=K)}function it(K,Fe,de){K?(ve(r.POLYGON_OFFSET_FILL),(X!==Fe||te!==de)&&(r.polygonOffset(Fe,de),X=Fe,te=de)):Le(r.POLYGON_OFFSET_FILL)}function Ee(K){K?ve(r.SCISSOR_TEST):Le(r.SCISSOR_TEST)}function U(K){K===void 0&&(K=r.TEXTURE0+q-1),he!==K&&(r.activeTexture(K),he=K)}function P(K,Fe,de){de===void 0&&(he===null?de=r.TEXTURE0+q-1:de=he);let ge=oe[de];ge===void 0&&(ge={type:void 0,texture:void 0},oe[de]=ge),(ge.type!==K||ge.texture!==Fe)&&(he!==de&&(r.activeTexture(de),he=de),r.bindTexture(K,Fe||Me[K]),ge.type=K,ge.texture=Fe)}function ne(){const K=oe[he];K!==void 0&&K.type!==void 0&&(r.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function pe(){try{r.compressedTexImage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ye(){try{r.compressedTexImage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function me(){try{r.texSubImage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function $e(){try{r.texSubImage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function De(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function We(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function vt(){try{r.texStorage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ae(){try{r.texStorage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ke(){try{r.texImage2D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function st(){try{r.texImage3D.apply(r,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function lt(K){Ue.equals(K)===!1&&(r.scissor(K.x,K.y,K.z,K.w),Ue.copy(K))}function Ze(K){ie.equals(K)===!1&&(r.viewport(K.x,K.y,K.z,K.w),ie.copy(K))}function _t(K,Fe){let de=f.get(Fe);de===void 0&&(de=new WeakMap,f.set(Fe,de));let ge=de.get(K);ge===void 0&&(ge=r.getUniformBlockIndex(Fe,K.name),de.set(K,ge))}function ft(K,Fe){const ge=f.get(Fe).get(K);d.get(Fe)!==ge&&(r.uniformBlockBinding(Fe,ge,K.__bindingPointIndex),d.set(Fe,ge))}function Dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},he=null,oe={},m={},v=new WeakMap,y=[],w=null,M=!1,S=null,x=null,R=null,T=null,E=null,B=null,D=null,F=new dt(0,0,0),k=0,L=!1,b=null,N=null,Z=null,X=null,te=null,Ue.set(0,0,r.canvas.width,r.canvas.height),ie.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:ve,disable:Le,bindFramebuffer:Be,drawBuffers:Xe,useProgram:gt,setBlending:O,setMaterial:Qe,setFlipSided:we,setCullFace:Ve,setLineWidth:Re,setPolygonOffset:it,setScissorTest:Ee,activeTexture:U,bindTexture:P,unbindTexture:ne,compressedTexImage2D:pe,compressedTexImage3D:ye,texImage2D:Ke,texImage3D:st,updateUBOMapping:_t,uniformBlockBinding:ft,texStorage2D:vt,texStorage3D:Ae,texSubImage2D:me,texSubImage3D:$e,compressedTexSubImage2D:De,compressedTexSubImage3D:We,scissor:lt,viewport:Ze,reset:Dt}}function hA(r,e,t,i,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ie,p=new WeakMap;let m;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(U,P){return y?new OffscreenCanvas(U,P):Uc("canvas")}function M(U,P,ne){let pe=1;const ye=Ee(U);if((ye.width>ne||ye.height>ne)&&(pe=ne/Math.max(ye.width,ye.height)),pe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const me=Math.floor(pe*ye.width),$e=Math.floor(pe*ye.height);m===void 0&&(m=w(me,$e));const De=P?w(me,$e):m;return De.width=me,De.height=$e,De.getContext("2d").drawImage(U,0,0,me,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+me+"x"+$e+")."),De}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),U;return U}function S(U){return U.generateMipmaps}function x(U){r.generateMipmap(U)}function R(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(U,P,ne,pe,ye=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let me=P;if(P===r.RED&&(ne===r.FLOAT&&(me=r.R32F),ne===r.HALF_FLOAT&&(me=r.R16F),ne===r.UNSIGNED_BYTE&&(me=r.R8)),P===r.RED_INTEGER&&(ne===r.UNSIGNED_BYTE&&(me=r.R8UI),ne===r.UNSIGNED_SHORT&&(me=r.R16UI),ne===r.UNSIGNED_INT&&(me=r.R32UI),ne===r.BYTE&&(me=r.R8I),ne===r.SHORT&&(me=r.R16I),ne===r.INT&&(me=r.R32I)),P===r.RG&&(ne===r.FLOAT&&(me=r.RG32F),ne===r.HALF_FLOAT&&(me=r.RG16F),ne===r.UNSIGNED_BYTE&&(me=r.RG8)),P===r.RG_INTEGER&&(ne===r.UNSIGNED_BYTE&&(me=r.RG8UI),ne===r.UNSIGNED_SHORT&&(me=r.RG16UI),ne===r.UNSIGNED_INT&&(me=r.RG32UI),ne===r.BYTE&&(me=r.RG8I),ne===r.SHORT&&(me=r.RG16I),ne===r.INT&&(me=r.RG32I)),P===r.RGB_INTEGER&&(ne===r.UNSIGNED_BYTE&&(me=r.RGB8UI),ne===r.UNSIGNED_SHORT&&(me=r.RGB16UI),ne===r.UNSIGNED_INT&&(me=r.RGB32UI),ne===r.BYTE&&(me=r.RGB8I),ne===r.SHORT&&(me=r.RGB16I),ne===r.INT&&(me=r.RGB32I)),P===r.RGBA_INTEGER&&(ne===r.UNSIGNED_BYTE&&(me=r.RGBA8UI),ne===r.UNSIGNED_SHORT&&(me=r.RGBA16UI),ne===r.UNSIGNED_INT&&(me=r.RGBA32UI),ne===r.BYTE&&(me=r.RGBA8I),ne===r.SHORT&&(me=r.RGBA16I),ne===r.INT&&(me=r.RGBA32I)),P===r.RGB&&ne===r.UNSIGNED_INT_5_9_9_9_REV&&(me=r.RGB9_E5),P===r.RGBA){const $e=ye?Nc:Nt.getTransfer(pe);ne===r.FLOAT&&(me=r.RGBA32F),ne===r.HALF_FLOAT&&(me=r.RGBA16F),ne===r.UNSIGNED_BYTE&&(me=$e===kt?r.SRGB8_ALPHA8:r.RGBA8),ne===r.UNSIGNED_SHORT_4_4_4_4&&(me=r.RGBA4),ne===r.UNSIGNED_SHORT_5_5_5_1&&(me=r.RGB5_A1)}return(me===r.R16F||me===r.R32F||me===r.RG16F||me===r.RG32F||me===r.RGBA16F||me===r.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function E(U,P){let ne;return U?P===null||P===xs||P===wo?ne=r.DEPTH24_STENCIL8:P===Ii?ne=r.DEPTH32F_STENCIL8:P===Ca&&(ne=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===xs||P===wo?ne=r.DEPTH_COMPONENT24:P===Ii?ne=r.DEPTH_COMPONENT32F:P===Ca&&(ne=r.DEPTH_COMPONENT16),ne}function B(U,P){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Qn&&U.minFilter!==Ni?Math.log2(Math.max(P.width,P.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?P.mipmaps.length:1}function D(U){const P=U.target;P.removeEventListener("dispose",D),k(P),P.isVideoTexture&&p.delete(P)}function F(U){const P=U.target;P.removeEventListener("dispose",F),b(P)}function k(U){const P=i.get(U);if(P.__webglInit===void 0)return;const ne=U.source,pe=v.get(ne);if(pe){const ye=pe[P.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&L(U),Object.keys(pe).length===0&&v.delete(ne)}i.remove(U)}function L(U){const P=i.get(U);r.deleteTexture(P.__webglTexture);const ne=U.source,pe=v.get(ne);delete pe[P.__cacheKey],c.memory.textures--}function b(U){const P=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(P.__webglFramebuffer[pe]))for(let ye=0;ye<P.__webglFramebuffer[pe].length;ye++)r.deleteFramebuffer(P.__webglFramebuffer[pe][ye]);else r.deleteFramebuffer(P.__webglFramebuffer[pe]);P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer[pe])}else{if(Array.isArray(P.__webglFramebuffer))for(let pe=0;pe<P.__webglFramebuffer.length;pe++)r.deleteFramebuffer(P.__webglFramebuffer[pe]);else r.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&r.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let pe=0;pe<P.__webglColorRenderbuffer.length;pe++)P.__webglColorRenderbuffer[pe]&&r.deleteRenderbuffer(P.__webglColorRenderbuffer[pe]);P.__webglDepthRenderbuffer&&r.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const ne=U.textures;for(let pe=0,ye=ne.length;pe<ye;pe++){const me=i.get(ne[pe]);me.__webglTexture&&(r.deleteTexture(me.__webglTexture),c.memory.textures--),i.remove(ne[pe])}i.remove(U)}let N=0;function Z(){N=0}function X(){const U=N;return U>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),N+=1,U}function te(U){const P=[];return P.push(U.wrapS),P.push(U.wrapT),P.push(U.wrapR||0),P.push(U.magFilter),P.push(U.minFilter),P.push(U.anisotropy),P.push(U.internalFormat),P.push(U.format),P.push(U.type),P.push(U.generateMipmaps),P.push(U.premultiplyAlpha),P.push(U.flipY),P.push(U.unpackAlignment),P.push(U.colorSpace),P.join()}function q(U,P){const ne=i.get(U);if(U.isVideoTexture&&Re(U),U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){const pe=U.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(ne,U,P);return}}t.bindTexture(r.TEXTURE_2D,ne.__webglTexture,r.TEXTURE0+P)}function Q(U,P){const ne=i.get(U);if(U.version>0&&ne.__version!==U.version){ie(ne,U,P);return}t.bindTexture(r.TEXTURE_2D_ARRAY,ne.__webglTexture,r.TEXTURE0+P)}function ce(U,P){const ne=i.get(U);if(U.version>0&&ne.__version!==U.version){ie(ne,U,P);return}t.bindTexture(r.TEXTURE_3D,ne.__webglTexture,r.TEXTURE0+P)}function G(U,P){const ne=i.get(U);if(U.version>0&&ne.__version!==U.version){fe(ne,U,P);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture,r.TEXTURE0+P)}const he={[Ld]:r.REPEAT,[ms]:r.CLAMP_TO_EDGE,[Nd]:r.MIRRORED_REPEAT},oe={[Qn]:r.NEAREST,[r1]:r.NEAREST_MIPMAP_NEAREST,[$l]:r.NEAREST_MIPMAP_LINEAR,[Ni]:r.LINEAR,[Dh]:r.LINEAR_MIPMAP_NEAREST,[gs]:r.LINEAR_MIPMAP_LINEAR},H={[l1]:r.NEVER,[p1]:r.ALWAYS,[c1]:r.LESS,[wv]:r.LEQUAL,[u1]:r.EQUAL,[f1]:r.GEQUAL,[h1]:r.GREATER,[d1]:r.NOTEQUAL};function se(U,P){if(P.type===Ii&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Ni||P.magFilter===Dh||P.magFilter===$l||P.magFilter===gs||P.minFilter===Ni||P.minFilter===Dh||P.minFilter===$l||P.minFilter===gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,he[P.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,he[P.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,he[P.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,oe[P.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,oe[P.minFilter]),P.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,H[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Qn||P.minFilter!==$l&&P.minFilter!==gs||P.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||i.get(P).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,o.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy}}}function Ue(U,P){let ne=!1;U.__webglInit===void 0&&(U.__webglInit=!0,P.addEventListener("dispose",D));const pe=P.source;let ye=v.get(pe);ye===void 0&&(ye={},v.set(pe,ye));const me=te(P);if(me!==U.__cacheKey){ye[me]===void 0&&(ye[me]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,ne=!0),ye[me].usedTimes++;const $e=ye[U.__cacheKey];$e!==void 0&&(ye[U.__cacheKey].usedTimes--,$e.usedTimes===0&&L(P)),U.__cacheKey=me,U.__webglTexture=ye[me].texture}return ne}function ie(U,P,ne){let pe=r.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(pe=r.TEXTURE_2D_ARRAY),P.isData3DTexture&&(pe=r.TEXTURE_3D);const ye=Ue(U,P),me=P.source;t.bindTexture(pe,U.__webglTexture,r.TEXTURE0+ne);const $e=i.get(me);if(me.version!==$e.__version||ye===!0){t.activeTexture(r.TEXTURE0+ne);const De=Nt.getPrimaries(Nt.workingColorSpace),We=P.colorSpace===Fr?null:Nt.getPrimaries(P.colorSpace),vt=P.colorSpace===Fr||De===We?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Ae=M(P.image,!1,o.maxTextureSize);Ae=it(P,Ae);const Ke=a.convert(P.format,P.colorSpace),st=a.convert(P.type);let lt=T(P.internalFormat,Ke,st,P.colorSpace,P.isVideoTexture);se(pe,P);let Ze;const _t=P.mipmaps,ft=P.isVideoTexture!==!0,Dt=$e.__version===void 0||ye===!0,K=me.dataReady,Fe=B(P,Ae);if(P.isDepthTexture)lt=E(P.format===Mo,P.type),Dt&&(ft?t.texStorage2D(r.TEXTURE_2D,1,lt,Ae.width,Ae.height):t.texImage2D(r.TEXTURE_2D,0,lt,Ae.width,Ae.height,0,Ke,st,null));else if(P.isDataTexture)if(_t.length>0){ft&&Dt&&t.texStorage2D(r.TEXTURE_2D,Fe,lt,_t[0].width,_t[0].height);for(let de=0,ge=_t.length;de<ge;de++)Ze=_t[de],ft?K&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Ze.width,Ze.height,Ke,st,Ze.data):t.texImage2D(r.TEXTURE_2D,de,lt,Ze.width,Ze.height,0,Ke,st,Ze.data);P.generateMipmaps=!1}else ft?(Dt&&t.texStorage2D(r.TEXTURE_2D,Fe,lt,Ae.width,Ae.height),K&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Ke,st,Ae.data)):t.texImage2D(r.TEXTURE_2D,0,lt,Ae.width,Ae.height,0,Ke,st,Ae.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){ft&&Dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,lt,_t[0].width,_t[0].height,Ae.depth);for(let de=0,ge=_t.length;de<ge;de++)if(Ze=_t[de],P.format!==Si)if(Ke!==null)if(ft){if(K)if(P.layerUpdates.size>0){const He=mg(Ze.width,Ze.height,P.format,P.type);for(const ze of P.layerUpdates){const pt=Ze.data.subarray(ze*He/Ze.data.BYTES_PER_ELEMENT,(ze+1)*He/Ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,ze,Ze.width,Ze.height,1,Ke,pt)}P.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Ze.width,Ze.height,Ae.depth,Ke,Ze.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,de,lt,Ze.width,Ze.height,Ae.depth,0,Ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?K&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,de,0,0,0,Ze.width,Ze.height,Ae.depth,Ke,st,Ze.data):t.texImage3D(r.TEXTURE_2D_ARRAY,de,lt,Ze.width,Ze.height,Ae.depth,0,Ke,st,Ze.data)}else{ft&&Dt&&t.texStorage2D(r.TEXTURE_2D,Fe,lt,_t[0].width,_t[0].height);for(let de=0,ge=_t.length;de<ge;de++)Ze=_t[de],P.format!==Si?Ke!==null?ft?K&&t.compressedTexSubImage2D(r.TEXTURE_2D,de,0,0,Ze.width,Ze.height,Ke,Ze.data):t.compressedTexImage2D(r.TEXTURE_2D,de,lt,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?K&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Ze.width,Ze.height,Ke,st,Ze.data):t.texImage2D(r.TEXTURE_2D,de,lt,Ze.width,Ze.height,0,Ke,st,Ze.data)}else if(P.isDataArrayTexture)if(ft){if(Dt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,lt,Ae.width,Ae.height,Ae.depth),K)if(P.layerUpdates.size>0){const de=mg(Ae.width,Ae.height,P.format,P.type);for(const ge of P.layerUpdates){const He=Ae.data.subarray(ge*de/Ae.data.BYTES_PER_ELEMENT,(ge+1)*de/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,Ae.width,Ae.height,1,Ke,st,He)}P.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ke,st,Ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,lt,Ae.width,Ae.height,Ae.depth,0,Ke,st,Ae.data);else if(P.isData3DTexture)ft?(Dt&&t.texStorage3D(r.TEXTURE_3D,Fe,lt,Ae.width,Ae.height,Ae.depth),K&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ke,st,Ae.data)):t.texImage3D(r.TEXTURE_3D,0,lt,Ae.width,Ae.height,Ae.depth,0,Ke,st,Ae.data);else if(P.isFramebufferTexture){if(Dt)if(ft)t.texStorage2D(r.TEXTURE_2D,Fe,lt,Ae.width,Ae.height);else{let de=Ae.width,ge=Ae.height;for(let He=0;He<Fe;He++)t.texImage2D(r.TEXTURE_2D,He,lt,de,ge,0,Ke,st,null),de>>=1,ge>>=1}}else if(_t.length>0){if(ft&&Dt){const de=Ee(_t[0]);t.texStorage2D(r.TEXTURE_2D,Fe,lt,de.width,de.height)}for(let de=0,ge=_t.length;de<ge;de++)Ze=_t[de],ft?K&&t.texSubImage2D(r.TEXTURE_2D,de,0,0,Ke,st,Ze):t.texImage2D(r.TEXTURE_2D,de,lt,Ke,st,Ze);P.generateMipmaps=!1}else if(ft){if(Dt){const de=Ee(Ae);t.texStorage2D(r.TEXTURE_2D,Fe,lt,de.width,de.height)}K&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ke,st,Ae)}else t.texImage2D(r.TEXTURE_2D,0,lt,Ke,st,Ae);S(P)&&x(pe),$e.__version=me.version,P.onUpdate&&P.onUpdate(P)}U.__version=P.version}function fe(U,P,ne){if(P.image.length!==6)return;const pe=Ue(U,P),ye=P.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+ne);const me=i.get(ye);if(ye.version!==me.__version||pe===!0){t.activeTexture(r.TEXTURE0+ne);const $e=Nt.getPrimaries(Nt.workingColorSpace),De=P.colorSpace===Fr?null:Nt.getPrimaries(P.colorSpace),We=P.colorSpace===Fr||$e===De?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const vt=P.isCompressedTexture||P.image[0].isCompressedTexture,Ae=P.image[0]&&P.image[0].isDataTexture,Ke=[];for(let ge=0;ge<6;ge++)!vt&&!Ae?Ke[ge]=M(P.image[ge],!0,o.maxCubemapSize):Ke[ge]=Ae?P.image[ge].image:P.image[ge],Ke[ge]=it(P,Ke[ge]);const st=Ke[0],lt=a.convert(P.format,P.colorSpace),Ze=a.convert(P.type),_t=T(P.internalFormat,lt,Ze,P.colorSpace),ft=P.isVideoTexture!==!0,Dt=me.__version===void 0||pe===!0,K=ye.dataReady;let Fe=B(P,st);se(r.TEXTURE_CUBE_MAP,P);let de;if(vt){ft&&Dt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,_t,st.width,st.height);for(let ge=0;ge<6;ge++){de=Ke[ge].mipmaps;for(let He=0;He<de.length;He++){const ze=de[He];P.format!==Si?lt!==null?ft?K&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He,0,0,ze.width,ze.height,lt,ze.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He,_t,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He,0,0,ze.width,ze.height,lt,Ze,ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He,_t,ze.width,ze.height,0,lt,Ze,ze.data)}}}else{if(de=P.mipmaps,ft&&Dt){de.length>0&&Fe++;const ge=Ee(Ke[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,_t,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ae){ft?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ke[ge].width,Ke[ge].height,lt,Ze,Ke[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,_t,Ke[ge].width,Ke[ge].height,0,lt,Ze,Ke[ge].data);for(let He=0;He<de.length;He++){const pt=de[He].image[ge].image;ft?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He+1,0,0,pt.width,pt.height,lt,Ze,pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He+1,_t,pt.width,pt.height,0,lt,Ze,pt.data)}}else{ft?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,lt,Ze,Ke[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,_t,lt,Ze,Ke[ge]);for(let He=0;He<de.length;He++){const ze=de[He];ft?K&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He+1,0,0,lt,Ze,ze.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He+1,_t,lt,Ze,ze.image[ge])}}}S(P)&&x(r.TEXTURE_CUBE_MAP),me.__version=ye.version,P.onUpdate&&P.onUpdate(P)}U.__version=P.version}function Me(U,P,ne,pe,ye,me){const $e=a.convert(ne.format,ne.colorSpace),De=a.convert(ne.type),We=T(ne.internalFormat,$e,De,ne.colorSpace),vt=i.get(P),Ae=i.get(ne);if(Ae.__renderTarget=P,!vt.__hasExternalTextures){const Ke=Math.max(1,P.width>>me),st=Math.max(1,P.height>>me);ye===r.TEXTURE_3D||ye===r.TEXTURE_2D_ARRAY?t.texImage3D(ye,me,We,Ke,st,P.depth,0,$e,De,null):t.texImage2D(ye,me,We,Ke,st,0,$e,De,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),Ve(P)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pe,ye,Ae.__webglTexture,0,we(P)):(ye===r.TEXTURE_2D||ye>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pe,ye,Ae.__webglTexture,me),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ve(U,P,ne){if(r.bindRenderbuffer(r.RENDERBUFFER,U),P.depthBuffer){const pe=P.depthTexture,ye=pe&&pe.isDepthTexture?pe.type:null,me=E(P.stencilBuffer,ye),$e=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=we(P);Ve(P)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,De,me,P.width,P.height):ne?r.renderbufferStorageMultisample(r.RENDERBUFFER,De,me,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,me,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,$e,r.RENDERBUFFER,U)}else{const pe=P.textures;for(let ye=0;ye<pe.length;ye++){const me=pe[ye],$e=a.convert(me.format,me.colorSpace),De=a.convert(me.type),We=T(me.internalFormat,$e,De,me.colorSpace),vt=we(P);ne&&Ve(P)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,We,P.width,P.height):Ve(P)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,vt,We,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,We,P.width,P.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Le(U,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(P.depthTexture);pe.__renderTarget=P,(!pe.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),q(P.depthTexture,0);const ye=pe.__webglTexture,me=we(P);if(P.depthTexture.format===mo)Ve(P)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ye,0);else if(P.depthTexture.format===Mo)Ve(P)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0,me):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function Be(U){const P=i.get(U),ne=U.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==U.depthTexture){const pe=U.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),pe){const ye=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,pe.removeEventListener("dispose",ye)};pe.addEventListener("dispose",ye),P.__depthDisposeCallback=ye}P.__boundDepthTexture=pe}if(U.depthTexture&&!P.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Le(P.__webglFramebuffer,U)}else if(ne){P.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer[pe]),P.__webglDepthbuffer[pe]===void 0)P.__webglDepthbuffer[pe]=r.createRenderbuffer(),ve(P.__webglDepthbuffer[pe],U,!1);else{const ye=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,me=P.__webglDepthbuffer[pe];r.bindRenderbuffer(r.RENDERBUFFER,me),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,me)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=r.createRenderbuffer(),ve(P.__webglDepthbuffer,U,!1);else{const pe=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=P.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ye),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,ye)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(U,P,ne){const pe=i.get(U);P!==void 0&&Me(pe.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ne!==void 0&&Be(U)}function gt(U){const P=U.texture,ne=i.get(U),pe=i.get(P);U.addEventListener("dispose",F);const ye=U.textures,me=U.isWebGLCubeRenderTarget===!0,$e=ye.length>1;if($e||(pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture()),pe.__version=P.version,c.memory.textures++),me){ne.__webglFramebuffer=[];for(let De=0;De<6;De++)if(P.mipmaps&&P.mipmaps.length>0){ne.__webglFramebuffer[De]=[];for(let We=0;We<P.mipmaps.length;We++)ne.__webglFramebuffer[De][We]=r.createFramebuffer()}else ne.__webglFramebuffer[De]=r.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){ne.__webglFramebuffer=[];for(let De=0;De<P.mipmaps.length;De++)ne.__webglFramebuffer[De]=r.createFramebuffer()}else ne.__webglFramebuffer=r.createFramebuffer();if($e)for(let De=0,We=ye.length;De<We;De++){const vt=i.get(ye[De]);vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture(),c.memory.textures++)}if(U.samples>0&&Ve(U)===!1){ne.__webglMultisampledFramebuffer=r.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let De=0;De<ye.length;De++){const We=ye[De];ne.__webglColorRenderbuffer[De]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ne.__webglColorRenderbuffer[De]);const vt=a.convert(We.format,We.colorSpace),Ae=a.convert(We.type),Ke=T(We.internalFormat,vt,Ae,We.colorSpace,U.isXRRenderTarget===!0),st=we(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,st,Ke,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,ne.__webglColorRenderbuffer[De])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(ne.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(ne.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(me){t.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),se(r.TEXTURE_CUBE_MAP,P);for(let De=0;De<6;De++)if(P.mipmaps&&P.mipmaps.length>0)for(let We=0;We<P.mipmaps.length;We++)Me(ne.__webglFramebuffer[De][We],U,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+De,We);else Me(ne.__webglFramebuffer[De],U,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);S(P)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let De=0,We=ye.length;De<We;De++){const vt=ye[De],Ae=i.get(vt);t.bindTexture(r.TEXTURE_2D,Ae.__webglTexture),se(r.TEXTURE_2D,vt),Me(ne.__webglFramebuffer,U,vt,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,0),S(vt)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let De=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(De=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(De,pe.__webglTexture),se(De,P),P.mipmaps&&P.mipmaps.length>0)for(let We=0;We<P.mipmaps.length;We++)Me(ne.__webglFramebuffer[We],U,P,r.COLOR_ATTACHMENT0,De,We);else Me(ne.__webglFramebuffer,U,P,r.COLOR_ATTACHMENT0,De,0);S(P)&&x(De),t.unbindTexture()}U.depthBuffer&&Be(U)}function xe(U){const P=U.textures;for(let ne=0,pe=P.length;ne<pe;ne++){const ye=P[ne];if(S(ye)){const me=R(U),$e=i.get(ye).__webglTexture;t.bindTexture(me,$e),x(me),t.unbindTexture()}}}const be=[],O=[];function Qe(U){if(U.samples>0){if(Ve(U)===!1){const P=U.textures,ne=U.width,pe=U.height;let ye=r.COLOR_BUFFER_BIT;const me=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$e=i.get(U),De=P.length>1;if(De)for(let We=0;We<P.length;We++)t.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+We,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+We,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let We=0;We<P.length;We++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ye|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ye|=r.STENCIL_BUFFER_BIT)),De){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,$e.__webglColorRenderbuffer[We]);const vt=i.get(P[We]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,vt,0)}r.blitFramebuffer(0,0,ne,pe,0,0,ne,pe,ye,r.NEAREST),d===!0&&(be.length=0,O.length=0,be.push(r.COLOR_ATTACHMENT0+We),U.depthBuffer&&U.resolveDepthBuffer===!1&&(be.push(me),O.push(me),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,O)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),De)for(let We=0;We<P.length;We++){t.bindFramebuffer(r.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+We,r.RENDERBUFFER,$e.__webglColorRenderbuffer[We]);const vt=i.get(P[We]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,$e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+We,r.TEXTURE_2D,vt,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&d){const P=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[P])}}}function we(U){return Math.min(o.maxSamples,U.samples)}function Ve(U){const P=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Re(U){const P=c.render.frame;p.get(U)!==P&&(p.set(U,P),U.update())}function it(U,P){const ne=U.colorSpace,pe=U.format,ye=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ne!==Eo&&ne!==Fr&&(Nt.getTransfer(ne)===kt?(pe!==Si||ye!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),P}function Ee(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=X,this.resetTextureUnits=Z,this.setTexture2D=q,this.setTexture2DArray=Q,this.setTexture3D=ce,this.setTextureCube=G,this.rebindTextures=Xe,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ve}function dA(r,e){function t(i,o=Fr){let a;const c=Nt.getTransfer(o);if(i===ar)return r.UNSIGNED_BYTE;if(i===Tf)return r.UNSIGNED_SHORT_4_4_4_4;if(i===bf)return r.UNSIGNED_SHORT_5_5_5_1;if(i===pv)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===dv)return r.BYTE;if(i===fv)return r.SHORT;if(i===Ca)return r.UNSIGNED_SHORT;if(i===Ef)return r.INT;if(i===xs)return r.UNSIGNED_INT;if(i===Ii)return r.FLOAT;if(i===ka)return r.HALF_FLOAT;if(i===mv)return r.ALPHA;if(i===gv)return r.RGB;if(i===Si)return r.RGBA;if(i===vv)return r.LUMINANCE;if(i===xv)return r.LUMINANCE_ALPHA;if(i===mo)return r.DEPTH_COMPONENT;if(i===Mo)return r.DEPTH_STENCIL;if(i===Af)return r.RED;if(i===Cf)return r.RED_INTEGER;if(i===yv)return r.RG;if(i===Rf)return r.RG_INTEGER;if(i===Pf)return r.RGBA_INTEGER;if(i===Mc||i===Ec||i===Tc||i===bc)if(c===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Mc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Mc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ec)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Id||i===Dd||i===Ud||i===Fd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Id)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ud)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kd||i===Od||i===Bd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===kd||i===Od)return c===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Bd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zd||i===Hd||i===Vd||i===Gd||i===Wd||i===jd||i===Xd||i===$d||i===Yd||i===qd||i===Kd||i===Zd||i===Jd||i===Qd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===zd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$d)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ac||i===ef||i===tf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Ac)return c===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ef)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_v||i===nf||i===rf||i===sf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Ac)return a.COMPRESSED_RED_RGTC1_EXT;if(i===nf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wo?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const fA={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const u=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,i),x=this._getHandJoint(f,M);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const p=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],v=p.position.distanceTo(m.position),y=.02,w=.005;f.inputState.pinching&&v>y+w?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=y-w&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(fA)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new wa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const pA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new Dn,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zr({vertexShader:pA,fragmentShader:mA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new wi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vA extends Ro{constructor(e,t){super();const i=this;let o=null,a=1,c=null,u="local-floor",d=1,f=null,p=null,m=null,v=null,y=null,w=null;const M=new gA,S=t.getContextAttributes();let x=null,R=null;const T=[],E=[],B=new Ie;let D=null;const F=new Gn;F.viewport=new Ot;const k=new Gn;k.viewport=new Ot;const L=[F,k],b=new Fw;let N=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let fe=T[ie];return fe===void 0&&(fe=new vd,T[ie]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ie){let fe=T[ie];return fe===void 0&&(fe=new vd,T[ie]=fe),fe.getGripSpace()},this.getHand=function(ie){let fe=T[ie];return fe===void 0&&(fe=new vd,T[ie]=fe),fe.getHandSpace()};function X(ie){const fe=E.indexOf(ie.inputSource);if(fe===-1)return;const Me=T[fe];Me!==void 0&&(Me.update(ie.inputSource,ie.frame,f||c),Me.dispatchEvent({type:ie.type,data:ie.inputSource}))}function te(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",q);for(let ie=0;ie<T.length;ie++){const fe=E[ie];fe!==null&&(E[ie]=null,T[ie].disconnect(fe))}N=null,Z=null,M.reset(),e.setRenderTarget(x),y=null,v=null,m=null,o=null,R=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){u=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(ie){f=ie},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return m},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",te),o.addEventListener("inputsourceschange",q),S.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(B),o.renderState.layers===void 0){const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,t,fe),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new ys(y.framebufferWidth,y.framebufferHeight,{format:Si,type:ar,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let fe=null,Me=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?Mo:mo,Me=S.stencil?wo:xs);const Le={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:a};m=new XRWebGLBinding(o,t),v=m.createProjectionLayer(Le),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),R=new ys(v.textureWidth,v.textureHeight,{format:Si,type:ar,depthTexture:new Nv(v.textureWidth,v.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),f=null,c=await o.requestReferenceSpace(u),Ue.setContext(o),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function q(ie){for(let fe=0;fe<ie.removed.length;fe++){const Me=ie.removed[fe],ve=E.indexOf(Me);ve>=0&&(E[ve]=null,T[ve].disconnect(Me))}for(let fe=0;fe<ie.added.length;fe++){const Me=ie.added[fe];let ve=E.indexOf(Me);if(ve===-1){for(let Be=0;Be<T.length;Be++)if(Be>=E.length){E.push(Me),ve=Be;break}else if(E[Be]===null){E[Be]=Me,ve=Be;break}if(ve===-1)break}const Le=T[ve];Le&&Le.connect(Me)}}const Q=new V,ce=new V;function G(ie,fe,Me){Q.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(Me.matrixWorld);const ve=Q.distanceTo(ce),Le=fe.projectionMatrix.elements,Be=Me.projectionMatrix.elements,Xe=Le[14]/(Le[10]-1),gt=Le[14]/(Le[10]+1),xe=(Le[9]+1)/Le[5],be=(Le[9]-1)/Le[5],O=(Le[8]-1)/Le[0],Qe=(Be[8]+1)/Be[0],we=Xe*O,Ve=Xe*Qe,Re=ve/(-O+Qe),it=Re*-O;if(fe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(it),ie.translateZ(Re),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Le[10]===-1)ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ee=Xe+Re,U=gt+Re,P=we-it,ne=Ve+(ve-it),pe=xe*gt/U*Ee,ye=be*gt/U*Ee;ie.projectionMatrix.makePerspective(P,ne,pe,ye,Ee,U),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function he(ie,fe){fe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(fe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let fe=ie.near,Me=ie.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(Me=M.depthFar)),b.near=k.near=F.near=fe,b.far=k.far=F.far=Me,(N!==b.near||Z!==b.far)&&(o.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,Z=b.far),F.layers.mask=ie.layers.mask|2,k.layers.mask=ie.layers.mask|4,b.layers.mask=F.layers.mask|k.layers.mask;const ve=ie.parent,Le=b.cameras;he(b,ve);for(let Be=0;Be<Le.length;Be++)he(Le[Be],ve);Le.length===2?G(b,F,k):b.projectionMatrix.copy(F.projectionMatrix),oe(ie,b,ve)};function oe(ie,fe,Me){Me===null?ie.matrix.copy(fe.matrixWorld):(ie.matrix.copy(Me.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(fe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Dc*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(ie){d=ie,v!==null&&(v.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(b)};let H=null;function se(ie,fe){if(p=fe.getViewerPose(f||c),w=fe,p!==null){const Me=p.views;y!==null&&(e.setRenderTargetFramebuffer(R,y.framebuffer),e.setRenderTarget(R));let ve=!1;Me.length!==b.cameras.length&&(b.cameras.length=0,ve=!0);for(let Be=0;Be<Me.length;Be++){const Xe=Me[Be];let gt=null;if(y!==null)gt=y.getViewport(Xe);else{const be=m.getViewSubImage(v,Xe);gt=be.viewport,Be===0&&(e.setRenderTargetTextures(R,be.colorTexture,v.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(R))}let xe=L[Be];xe===void 0&&(xe=new Gn,xe.layers.enable(Be),xe.viewport=new Ot,L[Be]=xe),xe.matrix.fromArray(Xe.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Xe.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(gt.x,gt.y,gt.width,gt.height),Be===0&&(b.matrix.copy(xe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ve===!0&&b.cameras.push(xe)}const Le=o.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Be=m.getDepthInformation(Me[0]);Be&&Be.isValid&&Be.texture&&M.init(e,Be,o.renderState)}}for(let Me=0;Me<T.length;Me++){const ve=E[Me],Le=T[Me];ve!==null&&Le!==void 0&&Le.update(ve,fe,f||c)}H&&H(ie,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),w=null}const Ue=new Hv;Ue.setAnimationLoop(se),this.setAnimationLoop=function(ie){H=ie},this.dispose=function(){}}}const ls=new Ui,xA=new It;function yA(r,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,Rv(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,R,T,E){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(S,x):x.isMeshToonMaterial?(a(S,x),m(S,x)):x.isMeshPhongMaterial?(a(S,x),p(S,x)):x.isMeshStandardMaterial?(a(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,E)):x.isMeshMatcapMaterial?(a(S,x),w(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),M(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&u(S,x)):x.isPointsMaterial?d(S,x,R,T):x.isSpriteMaterial?f(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===jn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===jn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const R=e.get(x),T=R.envMap,E=R.envMapRotation;T&&(S.envMap.value=T,ls.copy(E),ls.x*=-1,ls.y*=-1,ls.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),S.envMapRotation.value.setFromMatrix4(xA.makeRotationFromEuler(ls)),S.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function u(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,R,T){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*R,S.scale.value=T*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function f(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function m(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,R){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,x){x.matcap&&(S.matcap.value=x.matcap)}function M(S,x){const R=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function _A(r,e,t,i){let o={},a={},c=[];const u=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,T){const E=T.program;i.uniformBlockBinding(R,E)}function f(R,T){let E=o[R.id];E===void 0&&(w(R),E=p(R),o[R.id]=E,R.addEventListener("dispose",S));const B=T.program;i.updateUBOMapping(R,B);const D=e.render.frame;a[R.id]!==D&&(v(R),a[R.id]=D)}function p(R){const T=m();R.__bindingPointIndex=T;const E=r.createBuffer(),B=R.__size,D=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,B,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,E),E}function m(){for(let R=0;R<u;R++)if(c.indexOf(R)===-1)return c.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const T=o[R.id],E=R.uniforms,B=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let D=0,F=E.length;D<F;D++){const k=Array.isArray(E[D])?E[D]:[E[D]];for(let L=0,b=k.length;L<b;L++){const N=k[L];if(y(N,D,L,B)===!0){const Z=N.__offset,X=Array.isArray(N.value)?N.value:[N.value];let te=0;for(let q=0;q<X.length;q++){const Q=X[q],ce=M(Q);typeof Q=="number"||typeof Q=="boolean"?(N.__data[0]=Q,r.bufferSubData(r.UNIFORM_BUFFER,Z+te,N.__data)):Q.isMatrix3?(N.__data[0]=Q.elements[0],N.__data[1]=Q.elements[1],N.__data[2]=Q.elements[2],N.__data[3]=0,N.__data[4]=Q.elements[3],N.__data[5]=Q.elements[4],N.__data[6]=Q.elements[5],N.__data[7]=0,N.__data[8]=Q.elements[6],N.__data[9]=Q.elements[7],N.__data[10]=Q.elements[8],N.__data[11]=0):(Q.toArray(N.__data,te),te+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(R,T,E,B){const D=R.value,F=T+"_"+E;if(B[F]===void 0)return typeof D=="number"||typeof D=="boolean"?B[F]=D:B[F]=D.clone(),!0;{const k=B[F];if(typeof D=="number"||typeof D=="boolean"){if(k!==D)return B[F]=D,!0}else if(k.equals(D)===!1)return k.copy(D),!0}return!1}function w(R){const T=R.uniforms;let E=0;const B=16;for(let F=0,k=T.length;F<k;F++){const L=Array.isArray(T[F])?T[F]:[T[F]];for(let b=0,N=L.length;b<N;b++){const Z=L[b],X=Array.isArray(Z.value)?Z.value:[Z.value];for(let te=0,q=X.length;te<q;te++){const Q=X[te],ce=M(Q),G=E%B,he=G%ce.boundary,oe=G+he;E+=he,oe!==0&&B-oe<ce.storage&&(E+=B-oe),Z.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=E,E+=ce.storage}}}const D=E%B;return D>0&&(E+=B-D),R.__size=E,R.__cache={},this}function M(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function S(R){const T=R.target;T.removeEventListener("dispose",S);const E=c.indexOf(T.__bindingPointIndex);c.splice(E,1),r.deleteBuffer(o[T.id]),delete o[T.id],delete a[T.id]}function x(){for(const R in o)r.deleteBuffer(o[R]);c=[],o={},a={}}return{bind:d,update:f,dispose:x}}class SA{constructor(e={}){const{canvas:t=g1(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const w=new Uint32Array(4),M=new Int32Array(4);let S=null,x=null;const R=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=li,this.toneMapping=Or,this.toneMappingExposure=1;const E=this;let B=!1,D=0,F=0,k=null,L=-1,b=null;const N=new Ot,Z=new Ot;let X=null;const te=new dt(0);let q=0,Q=t.width,ce=t.height,G=1,he=null,oe=null;const H=new Ot(0,0,Q,ce),se=new Ot(0,0,Q,ce);let Ue=!1;const ie=new If;let fe=!1,Me=!1;const ve=new It,Le=new It,Be=new V,Xe=new Ot,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function be(){return k===null?G:1}let O=i;function Qe(I,J){return t.getContext(I,J)}try{const I={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wf}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",ze,!1),O===null){const J="webgl2";if(O=Qe(J,I),O===null)throw Qe(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let we,Ve,Re,it,Ee,U,P,ne,pe,ye,me,$e,De,We,vt,Ae,Ke,st,lt,Ze,_t,ft,Dt,K;function Fe(){we=new PT(O),we.init(),ft=new dA(O,we),Ve=new ET(O,we,e,ft),Re=new uA(O,we),Ve.reverseDepthBuffer&&v&&Re.buffers.depth.setReversed(!0),it=new IT(O),Ee=new Zb,U=new hA(O,we,Re,Ee,Ve,ft,it),P=new bT(E),ne=new RT(E),pe=new zw(O),Dt=new wT(O,pe),ye=new LT(O,pe,it,Dt),me=new UT(O,ye,pe,it),lt=new DT(O,Ve,U),Ae=new TT(Ee),$e=new Kb(E,P,ne,we,Ve,Dt,Ae),De=new yA(E,Ee),We=new Qb,vt=new sA(we),st=new ST(E,P,ne,Re,me,y,d),Ke=new lA(E,me,Ve),K=new _A(O,it,Ve,Re),Ze=new MT(O,we,it),_t=new NT(O,we,it),it.programs=$e.programs,E.capabilities=Ve,E.extensions=we,E.properties=Ee,E.renderLists=We,E.shadowMap=Ke,E.state=Re,E.info=it}Fe();const de=new vA(E,O);this.xr=de,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const I=we.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=we.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(I){I!==void 0&&(G=I,this.setSize(Q,ce,!1))},this.getSize=function(I){return I.set(Q,ce)},this.setSize=function(I,J,le=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=I,ce=J,t.width=Math.floor(I*G),t.height=Math.floor(J*G),le===!0&&(t.style.width=I+"px",t.style.height=J+"px"),this.setViewport(0,0,I,J)},this.getDrawingBufferSize=function(I){return I.set(Q*G,ce*G).floor()},this.setDrawingBufferSize=function(I,J,le){Q=I,ce=J,G=le,t.width=Math.floor(I*le),t.height=Math.floor(J*le),this.setViewport(0,0,I,J)},this.getCurrentViewport=function(I){return I.copy(N)},this.getViewport=function(I){return I.copy(H)},this.setViewport=function(I,J,le,ue){I.isVector4?H.set(I.x,I.y,I.z,I.w):H.set(I,J,le,ue),Re.viewport(N.copy(H).multiplyScalar(G).round())},this.getScissor=function(I){return I.copy(se)},this.setScissor=function(I,J,le,ue){I.isVector4?se.set(I.x,I.y,I.z,I.w):se.set(I,J,le,ue),Re.scissor(Z.copy(se).multiplyScalar(G).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(I){Re.setScissorTest(Ue=I)},this.setOpaqueSort=function(I){he=I},this.setTransparentSort=function(I){oe=I},this.getClearColor=function(I){return I.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(I=!0,J=!0,le=!0){let ue=0;if(I){let $=!1;if(k!==null){const Ce=k.texture.format;$=Ce===Pf||Ce===Rf||Ce===Cf}if($){const Ce=k.texture.type,ke=Ce===ar||Ce===xs||Ce===Ca||Ce===wo||Ce===Tf||Ce===bf,je=st.getClearColor(),Ye=st.getClearAlpha(),ct=je.r,ut=je.g,nt=je.b;ke?(w[0]=ct,w[1]=ut,w[2]=nt,w[3]=Ye,O.clearBufferuiv(O.COLOR,0,w)):(M[0]=ct,M[1]=ut,M[2]=nt,M[3]=Ye,O.clearBufferiv(O.COLOR,0,M))}else ue|=O.COLOR_BUFFER_BIT}J&&(ue|=O.DEPTH_BUFFER_BIT),le&&(ue|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),st.dispose(),We.dispose(),vt.dispose(),Ee.dispose(),P.dispose(),ne.dispose(),me.dispose(),Dt.dispose(),K.dispose(),$e.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ms),de.removeEventListener("sessionend",cr),Bi.stop()};function ge(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const I=it.autoReset,J=Ke.enabled,le=Ke.autoUpdate,ue=Ke.needsUpdate,$=Ke.type;Fe(),it.autoReset=I,Ke.enabled=J,Ke.autoUpdate=le,Ke.needsUpdate=ue,Ke.type=$}function ze(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function pt(I){const J=I.target;J.removeEventListener("dispose",pt),Ht(J)}function Ht(I){ln(I),Ee.remove(I)}function ln(I){const J=Ee.get(I).programs;J!==void 0&&(J.forEach(function(le){$e.releaseProgram(le)}),I.isShaderMaterial&&$e.releaseShaderCache(I))}this.renderBufferDirect=function(I,J,le,ue,$,Ce){J===null&&(J=gt);const ke=$.isMesh&&$.matrixWorld.determinant()<0,je=Ha(I,J,le,ue,$);Re.setMaterial(ue,ke);let Ye=le.index,ct=1;if(ue.wireframe===!0){if(Ye=ye.getWireframeAttribute(le),Ye===void 0)return;ct=2}const ut=le.drawRange,nt=le.attributes.position;let mt=ut.start*ct,Rt=(ut.start+ut.count)*ct;Ce!==null&&(mt=Math.max(mt,Ce.start*ct),Rt=Math.min(Rt,(Ce.start+Ce.count)*ct)),Ye!==null?(mt=Math.max(mt,0),Rt=Math.min(Rt,Ye.count)):nt!=null&&(mt=Math.max(mt,0),Rt=Math.min(Rt,nt.count));const Pt=Rt-mt;if(Pt<0||Pt===1/0)return;Dt.setup($,ue,je,le,Ye);let Wt,bt=Ze;if(Ye!==null&&(Wt=pe.get(Ye),bt=_t,bt.setIndex(Wt)),$.isMesh)ue.wireframe===!0?(Re.setLineWidth(ue.wireframeLinewidth*be()),bt.setMode(O.LINES)):bt.setMode(O.TRIANGLES);else if($.isLine){let rt=ue.linewidth;rt===void 0&&(rt=1),Re.setLineWidth(rt*be()),$.isLineSegments?bt.setMode(O.LINES):$.isLineLoop?bt.setMode(O.LINE_LOOP):bt.setMode(O.LINE_STRIP)}else $.isPoints?bt.setMode(O.POINTS):$.isSprite&&bt.setMode(O.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)bt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))bt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const rt=$._multiDrawStarts,Jt=$._multiDrawCounts,Tt=$._multiDrawCount,vn=Ye?pe.get(Ye).bytesPerElement:1,ui=Ee.get(ue).currentProgram.getUniforms();for(let Rn=0;Rn<Tt;Rn++)ui.setValue(O,"_gl_DrawID",Rn),bt.render(rt[Rn]/vn,Jt[Rn])}else if($.isInstancedMesh)bt.renderInstances(mt,Pt,$.count);else if(le.isInstancedBufferGeometry){const rt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Jt=Math.min(le.instanceCount,rt);bt.renderInstances(mt,Pt,Jt)}else bt.render(mt,Pt)};function At(I,J,le){I.transparent===!0&&I.side===Kt&&I.forceSinglePass===!1?(I.side=jn,I.needsUpdate=!0,Es(I,J,le),I.side=Br,I.needsUpdate=!0,Es(I,J,le),I.side=Kt):Es(I,J,le)}this.compile=function(I,J,le=null){le===null&&(le=I),x=vt.get(le),x.init(J),T.push(x),le.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),I!==le&&I.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(x.pushLight($),$.castShadow&&x.pushShadow($))}),x.setupLights();const ue=new Set;return I.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ce=$.material;if(Ce)if(Array.isArray(Ce))for(let ke=0;ke<Ce.length;ke++){const je=Ce[ke];At(je,le,$),ue.add(je)}else At(Ce,le,$),ue.add(Ce)}),T.pop(),x=null,ue},this.compileAsync=function(I,J,le=null){const ue=this.compile(I,J,le);return new Promise($=>{function Ce(){if(ue.forEach(function(ke){Ee.get(ke).currentProgram.isReady()&&ue.delete(ke)}),ue.size===0){$(I);return}setTimeout(Ce,10)}we.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Un=null;function Cn(I){Un&&Un(I)}function Ms(){Bi.stop()}function cr(){Bi.start()}const Bi=new Hv;Bi.setAnimationLoop(Cn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(I){Un=I,de.setAnimationLoop(I),I===null?Bi.stop():Bi.start()},de.addEventListener("sessionstart",Ms),de.addEventListener("sessionend",cr),this.render=function(I,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(J),J=de.getCamera()),I.isScene===!0&&I.onBeforeRender(E,I,J,k),x=vt.get(I,T.length),x.init(J),T.push(x),Le.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),ie.setFromProjectionMatrix(Le),Me=this.localClippingEnabled,fe=Ae.init(this.clippingPlanes,Me),S=We.get(I,R.length),S.init(),R.push(S),de.enabled===!0&&de.isPresenting===!0){const Ce=E.xr.getDepthSensingMesh();Ce!==null&&zi(Ce,J,-1/0,E.sortObjects)}zi(I,J,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(he,oe),xe=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,xe&&st.addToRenderList(S,I),this.info.render.frame++,fe===!0&&Ae.beginShadows();const le=x.state.shadowsArray;Ke.render(le,I,J),fe===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=S.opaque,$=S.transmissive;if(x.setupLights(),J.isArrayCamera){const Ce=J.cameras;if($.length>0)for(let ke=0,je=Ce.length;ke<je;ke++){const Ye=Ce[ke];Vr(ue,$,I,Ye)}xe&&st.render(I);for(let ke=0,je=Ce.length;ke<je;ke++){const Ye=Ce[ke];Hr(S,I,Ye,Ye.viewport)}}else $.length>0&&Vr(ue,$,I,J),xe&&st.render(I),Hr(S,I,J);k!==null&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),I.isScene===!0&&I.onAfterRender(E,I,J),Dt.resetDefaultState(),L=-1,b=null,T.pop(),T.length>0?(x=T[T.length-1],fe===!0&&Ae.setGlobalState(E.clippingPlanes,x.state.camera)):x=null,R.pop(),R.length>0?S=R[R.length-1]:S=null};function zi(I,J,le,ue){if(I.visible===!1)return;if(I.layers.test(J.layers)){if(I.isGroup)le=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(J);else if(I.isLight)x.pushLight(I),I.castShadow&&x.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ie.intersectsSprite(I)){ue&&Xe.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Le);const ke=me.update(I),je=I.material;je.visible&&S.push(I,ke,je,le,Xe.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ie.intersectsObject(I))){const ke=me.update(I),je=I.material;if(ue&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Xe.copy(I.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Xe.copy(ke.boundingSphere.center)),Xe.applyMatrix4(I.matrixWorld).applyMatrix4(Le)),Array.isArray(je)){const Ye=ke.groups;for(let ct=0,ut=Ye.length;ct<ut;ct++){const nt=Ye[ct],mt=je[nt.materialIndex];mt&&mt.visible&&S.push(I,ke,mt,le,Xe.z,nt)}}else je.visible&&S.push(I,ke,je,le,Xe.z,null)}}const Ce=I.children;for(let ke=0,je=Ce.length;ke<je;ke++)zi(Ce[ke],J,le,ue)}function Hr(I,J,le,ue){const $=I.opaque,Ce=I.transmissive,ke=I.transparent;x.setupLightsView(le),fe===!0&&Ae.setGlobalState(E.clippingPlanes,le),ue&&Re.viewport(N.copy(ue)),$.length>0&&ur($,J,le),Ce.length>0&&ur(Ce,J,le),ke.length>0&&ur(ke,J,le),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Vr(I,J,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ue.id]===void 0&&(x.state.transmissionRenderTarget[ue.id]=new ys(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?ka:ar,minFilter:gs,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace}));const Ce=x.state.transmissionRenderTarget[ue.id],ke=ue.viewport||N;Ce.setSize(ke.z,ke.w);const je=E.getRenderTarget();E.setRenderTarget(Ce),E.getClearColor(te),q=E.getClearAlpha(),q<1&&E.setClearColor(16777215,.5),E.clear(),xe&&st.render(le);const Ye=E.toneMapping;E.toneMapping=Or;const ct=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),x.setupLightsView(ue),fe===!0&&Ae.setGlobalState(E.clippingPlanes,ue),ur(I,le,ue),U.updateMultisampleRenderTarget(Ce),U.updateRenderTargetMipmap(Ce),we.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let nt=0,mt=J.length;nt<mt;nt++){const Rt=J[nt],Pt=Rt.object,Wt=Rt.geometry,bt=Rt.material,rt=Rt.group;if(bt.side===Kt&&Pt.layers.test(ue.layers)){const Jt=bt.side;bt.side=jn,bt.needsUpdate=!0,Ba(Pt,le,ue,Wt,bt,rt),bt.side=Jt,bt.needsUpdate=!0,ut=!0}}ut===!0&&(U.updateMultisampleRenderTarget(Ce),U.updateRenderTargetMipmap(Ce))}E.setRenderTarget(je),E.setClearColor(te,q),ct!==void 0&&(ue.viewport=ct),E.toneMapping=Ye}function ur(I,J,le){const ue=J.isScene===!0?J.overrideMaterial:null;for(let $=0,Ce=I.length;$<Ce;$++){const ke=I[$],je=ke.object,Ye=ke.geometry,ct=ue===null?ke.material:ue,ut=ke.group;je.layers.test(le.layers)&&Ba(je,J,le,Ye,ct,ut)}}function Ba(I,J,le,ue,$,Ce){I.onBeforeRender(E,J,le,ue,$,Ce),I.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),$.onBeforeRender(E,J,le,ue,I,Ce),$.transparent===!0&&$.side===Kt&&$.forceSinglePass===!1?($.side=jn,$.needsUpdate=!0,E.renderBufferDirect(le,J,ue,$,I,Ce),$.side=Br,$.needsUpdate=!0,E.renderBufferDirect(le,J,ue,$,I,Ce),$.side=Kt):E.renderBufferDirect(le,J,ue,$,I,Ce),I.onAfterRender(E,J,le,ue,$,Ce)}function Es(I,J,le){J.isScene!==!0&&(J=gt);const ue=Ee.get(I),$=x.state.lights,Ce=x.state.shadowsArray,ke=$.state.version,je=$e.getParameters(I,$.state,Ce,J,le),Ye=$e.getProgramCacheKey(je);let ct=ue.programs;ue.environment=I.isMeshStandardMaterial?J.environment:null,ue.fog=J.fog,ue.envMap=(I.isMeshStandardMaterial?ne:P).get(I.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&I.envMap===null?J.environmentRotation:I.envMapRotation,ct===void 0&&(I.addEventListener("dispose",pt),ct=new Map,ue.programs=ct);let ut=ct.get(Ye);if(ut!==void 0){if(ue.currentProgram===ut&&ue.lightsStateVersion===ke)return bi(I,je),ut}else je.uniforms=$e.getUniforms(I),I.onBeforeCompile(je,E),ut=$e.acquireProgram(je,Ye),ct.set(Ye,ut),ue.uniforms=je.uniforms;const nt=ue.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(nt.clippingPlanes=Ae.uniform),bi(I,je),ue.needsLights=qc(I),ue.lightsStateVersion=ke,ue.needsLights&&(nt.ambientLightColor.value=$.state.ambient,nt.lightProbe.value=$.state.probe,nt.directionalLights.value=$.state.directional,nt.directionalLightShadows.value=$.state.directionalShadow,nt.spotLights.value=$.state.spot,nt.spotLightShadows.value=$.state.spotShadow,nt.rectAreaLights.value=$.state.rectArea,nt.ltc_1.value=$.state.rectAreaLTC1,nt.ltc_2.value=$.state.rectAreaLTC2,nt.pointLights.value=$.state.point,nt.pointLightShadows.value=$.state.pointShadow,nt.hemisphereLights.value=$.state.hemi,nt.directionalShadowMap.value=$.state.directionalShadowMap,nt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,nt.spotShadowMap.value=$.state.spotShadowMap,nt.spotLightMatrix.value=$.state.spotLightMatrix,nt.spotLightMap.value=$.state.spotLightMap,nt.pointShadowMap.value=$.state.pointShadowMap,nt.pointShadowMatrix.value=$.state.pointShadowMatrix),ue.currentProgram=ut,ue.uniformsList=null,ut}function za(I){if(I.uniformsList===null){const J=I.currentProgram.getUniforms();I.uniformsList=Rc.seqWithValue(J.seq,I.uniforms)}return I.uniformsList}function bi(I,J){const le=Ee.get(I);le.outputColorSpace=J.outputColorSpace,le.batching=J.batching,le.batchingColor=J.batchingColor,le.instancing=J.instancing,le.instancingColor=J.instancingColor,le.instancingMorph=J.instancingMorph,le.skinning=J.skinning,le.morphTargets=J.morphTargets,le.morphNormals=J.morphNormals,le.morphColors=J.morphColors,le.morphTargetsCount=J.morphTargetsCount,le.numClippingPlanes=J.numClippingPlanes,le.numIntersection=J.numClipIntersection,le.vertexAlphas=J.vertexAlphas,le.vertexTangents=J.vertexTangents,le.toneMapping=J.toneMapping}function Ha(I,J,le,ue,$){J.isScene!==!0&&(J=gt),U.resetTextureUnits();const Ce=J.fog,ke=ue.isMeshStandardMaterial?J.environment:null,je=k===null?E.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Eo,Ye=(ue.isMeshStandardMaterial?ne:P).get(ue.envMap||ke),ct=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ut=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),nt=!!le.morphAttributes.position,mt=!!le.morphAttributes.normal,Rt=!!le.morphAttributes.color;let Pt=Or;ue.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Pt=E.toneMapping);const Wt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,bt=Wt!==void 0?Wt.length:0,rt=Ee.get(ue),Jt=x.state.lights;if(fe===!0&&(Me===!0||I!==b)){const tn=I===b&&ue.id===L;Ae.setState(ue,I,tn)}let Tt=!1;ue.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Jt.state.version||rt.outputColorSpace!==je||$.isBatchedMesh&&rt.batching===!1||!$.isBatchedMesh&&rt.batching===!0||$.isBatchedMesh&&rt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&rt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&rt.instancing===!1||!$.isInstancedMesh&&rt.instancing===!0||$.isSkinnedMesh&&rt.skinning===!1||!$.isSkinnedMesh&&rt.skinning===!0||$.isInstancedMesh&&rt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&rt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&rt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&rt.instancingMorph===!1&&$.morphTexture!==null||rt.envMap!==Ye||ue.fog===!0&&rt.fog!==Ce||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Ae.numPlanes||rt.numIntersection!==Ae.numIntersection)||rt.vertexAlphas!==ct||rt.vertexTangents!==ut||rt.morphTargets!==nt||rt.morphNormals!==mt||rt.morphColors!==Rt||rt.toneMapping!==Pt||rt.morphTargetsCount!==bt)&&(Tt=!0):(Tt=!0,rt.__version=ue.version);let vn=rt.currentProgram;Tt===!0&&(vn=Es(ue,J,$));let ui=!1,Rn=!1,Gr=!1;const Ft=vn.getUniforms(),Pn=rt.uniforms;if(Re.useProgram(vn.program)&&(ui=!0,Rn=!0,Gr=!0),ue.id!==L&&(L=ue.id,Rn=!0),ui||b!==I){Re.buffers.depth.getReversed()?(ve.copy(I.projectionMatrix),x1(ve),y1(ve),Ft.setValue(O,"projectionMatrix",ve)):Ft.setValue(O,"projectionMatrix",I.projectionMatrix),Ft.setValue(O,"viewMatrix",I.matrixWorldInverse);const Sn=Ft.map.cameraPosition;Sn!==void 0&&Sn.setValue(O,Be.setFromMatrixPosition(I.matrixWorld)),Ve.logarithmicDepthBuffer&&Ft.setValue(O,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Ft.setValue(O,"isOrthographic",I.isOrthographicCamera===!0),b!==I&&(b=I,Rn=!0,Gr=!0)}if($.isSkinnedMesh){Ft.setOptional(O,$,"bindMatrix"),Ft.setOptional(O,$,"bindMatrixInverse");const tn=$.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ft.setValue(O,"boneTexture",tn.boneTexture,U))}$.isBatchedMesh&&(Ft.setOptional(O,$,"batchingTexture"),Ft.setValue(O,"batchingTexture",$._matricesTexture,U),Ft.setOptional(O,$,"batchingIdTexture"),Ft.setValue(O,"batchingIdTexture",$._indirectTexture,U),Ft.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&Ft.setValue(O,"batchingColorTexture",$._colorsTexture,U));const _n=le.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&lt.update($,le,vn),(Rn||rt.receiveShadow!==$.receiveShadow)&&(rt.receiveShadow=$.receiveShadow,Ft.setValue(O,"receiveShadow",$.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Pn.envMap.value=Ye,Pn.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&J.environment!==null&&(Pn.envMapIntensity.value=J.environmentIntensity),Rn&&(Ft.setValue(O,"toneMappingExposure",E.toneMappingExposure),rt.needsLights&&Va(Pn,Gr),Ce&&ue.fog===!0&&De.refreshFogUniforms(Pn,Ce),De.refreshMaterialUniforms(Pn,ue,G,ce,x.state.transmissionRenderTarget[I.id]),Rc.upload(O,za(rt),Pn,U)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Rc.upload(O,za(rt),Pn,U),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Ft.setValue(O,"center",$.center),Ft.setValue(O,"modelViewMatrix",$.modelViewMatrix),Ft.setValue(O,"normalMatrix",$.normalMatrix),Ft.setValue(O,"modelMatrix",$.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const tn=ue.uniformsGroups;for(let Sn=0,Wr=tn.length;Sn<Wr;Sn++){const Mt=tn[Sn];K.update(Mt,vn),K.bind(Mt,vn)}}return vn}function Va(I,J){I.ambientLightColor.needsUpdate=J,I.lightProbe.needsUpdate=J,I.directionalLights.needsUpdate=J,I.directionalLightShadows.needsUpdate=J,I.pointLights.needsUpdate=J,I.pointLightShadows.needsUpdate=J,I.spotLights.needsUpdate=J,I.spotLightShadows.needsUpdate=J,I.rectAreaLights.needsUpdate=J,I.hemisphereLights.needsUpdate=J}function qc(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(I,J,le){Ee.get(I.texture).__webglTexture=J,Ee.get(I.depthTexture).__webglTexture=le;const ue=Ee.get(I);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=le===void 0,ue.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,J){const le=Ee.get(I);le.__webglFramebuffer=J,le.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(I,J=0,le=0){k=I,D=J,F=le;let ue=!0,$=null,Ce=!1,ke=!1;if(I){const Ye=Ee.get(I);if(Ye.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(O.FRAMEBUFFER,null),ue=!1;else if(Ye.__webglFramebuffer===void 0)U.setupRenderTarget(I);else if(Ye.__hasExternalTextures)U.rebindTextures(I,Ee.get(I.texture).__webglTexture,Ee.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const nt=I.depthTexture;if(Ye.__boundDepthTexture!==nt){if(nt!==null&&Ee.has(nt)&&(I.width!==nt.image.width||I.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(I)}}const ct=I.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(ke=!0);const ut=Ee.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ut[J])?$=ut[J][le]:$=ut[J],Ce=!0):I.samples>0&&U.useMultisampledRTT(I)===!1?$=Ee.get(I).__webglMultisampledFramebuffer:Array.isArray(ut)?$=ut[le]:$=ut,N.copy(I.viewport),Z.copy(I.scissor),X=I.scissorTest}else N.copy(H).multiplyScalar(G).floor(),Z.copy(se).multiplyScalar(G).floor(),X=Ue;if(Re.bindFramebuffer(O.FRAMEBUFFER,$)&&ue&&Re.drawBuffers(I,$),Re.viewport(N),Re.scissor(Z),Re.setScissorTest(X),Ce){const Ye=Ee.get(I.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ye.__webglTexture,le)}else if(ke){const Ye=Ee.get(I.texture),ct=J||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ye.__webglTexture,le||0,ct)}L=-1},this.readRenderTargetPixels=function(I,J,le,ue,$,Ce,ke){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Ee.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ke!==void 0&&(je=je[ke]),je){Re.bindFramebuffer(O.FRAMEBUFFER,je);try{const Ye=I.texture,ct=Ye.format,ut=Ye.type;if(!Ve.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=I.width-ue&&le>=0&&le<=I.height-$&&O.readPixels(J,le,ue,$,ft.convert(ct),ft.convert(ut),Ce)}finally{const Ye=k!==null?Ee.get(k).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(I,J,le,ue,$,Ce,ke){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Ee.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ke!==void 0&&(je=je[ke]),je){const Ye=I.texture,ct=Ye.format,ut=Ye.type;if(!Ve.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=I.width-ue&&le>=0&&le<=I.height-$){Re.bindFramebuffer(O.FRAMEBUFFER,je);const nt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,nt),O.bufferData(O.PIXEL_PACK_BUFFER,Ce.byteLength,O.STREAM_READ),O.readPixels(J,le,ue,$,ft.convert(ct),ft.convert(ut),0);const mt=k!==null?Ee.get(k).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,mt);const Rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await v1(O,Rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,nt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ce),O.deleteBuffer(nt),O.deleteSync(Rt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,J=null,le=0){I.isTexture!==!0&&(co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,I=arguments[1]);const ue=Math.pow(2,-le),$=Math.floor(I.image.width*ue),Ce=Math.floor(I.image.height*ue),ke=J!==null?J.x:0,je=J!==null?J.y:0;U.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,le,0,0,ke,je,$,Ce),Re.unbindTexture()};const Ga=O.createFramebuffer(),Wa=O.createFramebuffer();this.copyTextureToTexture=function(I,J,le=null,ue=null,$=0,Ce=null){I.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,I=arguments[1],J=arguments[2],Ce=arguments[3]||0,le=null),Ce===null&&($!==0?(co("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=$,$=0):Ce=0);let ke,je,Ye,ct,ut,nt,mt,Rt,Pt;const Wt=I.isCompressedTexture?I.mipmaps[Ce]:I.image;if(le!==null)ke=le.max.x-le.min.x,je=le.max.y-le.min.y,Ye=le.isBox3?le.max.z-le.min.z:1,ct=le.min.x,ut=le.min.y,nt=le.isBox3?le.min.z:0;else{const _n=Math.pow(2,-$);ke=Math.floor(Wt.width*_n),je=Math.floor(Wt.height*_n),I.isDataArrayTexture?Ye=Wt.depth:I.isData3DTexture?Ye=Math.floor(Wt.depth*_n):Ye=1,ct=0,ut=0,nt=0}ue!==null?(mt=ue.x,Rt=ue.y,Pt=ue.z):(mt=0,Rt=0,Pt=0);const bt=ft.convert(J.format),rt=ft.convert(J.type);let Jt;J.isData3DTexture?(U.setTexture3D(J,0),Jt=O.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(U.setTexture2DArray(J,0),Jt=O.TEXTURE_2D_ARRAY):(U.setTexture2D(J,0),Jt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,J.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,J.unpackAlignment);const Tt=O.getParameter(O.UNPACK_ROW_LENGTH),vn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ui=O.getParameter(O.UNPACK_SKIP_PIXELS),Rn=O.getParameter(O.UNPACK_SKIP_ROWS),Gr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Wt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Wt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ct),O.pixelStorei(O.UNPACK_SKIP_ROWS,ut),O.pixelStorei(O.UNPACK_SKIP_IMAGES,nt);const Ft=I.isDataArrayTexture||I.isData3DTexture,Pn=J.isDataArrayTexture||J.isData3DTexture;if(I.isDepthTexture){const _n=Ee.get(I),tn=Ee.get(J),Sn=Ee.get(_n.__renderTarget),Wr=Ee.get(tn.__renderTarget);Re.bindFramebuffer(O.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,Wr.__webglFramebuffer);for(let Mt=0;Mt<Ye;Mt++)Ft&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ee.get(I).__webglTexture,$,nt+Mt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ee.get(J).__webglTexture,Ce,Pt+Mt)),O.blitFramebuffer(ct,ut,ke,je,mt,Rt,ke,je,O.DEPTH_BUFFER_BIT,O.NEAREST);Re.bindFramebuffer(O.READ_FRAMEBUFFER,null),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if($!==0||I.isRenderTargetTexture||Ee.has(I)){const _n=Ee.get(I),tn=Ee.get(J);Re.bindFramebuffer(O.READ_FRAMEBUFFER,Ga),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,Wa);for(let Sn=0;Sn<Ye;Sn++)Ft?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,_n.__webglTexture,$,nt+Sn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_n.__webglTexture,$),Pn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,tn.__webglTexture,Ce,Pt+Sn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,tn.__webglTexture,Ce),$!==0?O.blitFramebuffer(ct,ut,ke,je,mt,Rt,ke,je,O.COLOR_BUFFER_BIT,O.NEAREST):Pn?O.copyTexSubImage3D(Jt,Ce,mt,Rt,Pt+Sn,ct,ut,ke,je):O.copyTexSubImage2D(Jt,Ce,mt,Rt,ct,ut,ke,je);Re.bindFramebuffer(O.READ_FRAMEBUFFER,null),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Pn?I.isDataTexture||I.isData3DTexture?O.texSubImage3D(Jt,Ce,mt,Rt,Pt,ke,je,Ye,bt,rt,Wt.data):J.isCompressedArrayTexture?O.compressedTexSubImage3D(Jt,Ce,mt,Rt,Pt,ke,je,Ye,bt,Wt.data):O.texSubImage3D(Jt,Ce,mt,Rt,Pt,ke,je,Ye,bt,rt,Wt):I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ce,mt,Rt,ke,je,bt,rt,Wt.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ce,mt,Rt,Wt.width,Wt.height,bt,Wt.data):O.texSubImage2D(O.TEXTURE_2D,Ce,mt,Rt,ke,je,bt,rt,Wt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Tt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ui),O.pixelStorei(O.UNPACK_SKIP_ROWS,Rn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Gr),Ce===0&&J.generateMipmaps&&O.generateMipmap(Jt),Re.unbindTexture()},this.copyTextureToTexture3D=function(I,J,le=null,ue=null,$=0){return I.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ue=arguments[1]||null,I=arguments[2],J=arguments[3],$=arguments[4]||0),co('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,J,le,ue,$)},this.initRenderTarget=function(I){Ee.get(I).__webglFramebuffer===void 0&&U.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?U.setTextureCube(I,0):I.isData3DTexture?U.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?U.setTexture2DArray(I,0):U.setTexture2D(I,0),Re.unbindTexture()},this.resetState=function(){D=0,F=0,k=null,Re.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}}const Jn=[[[1,1,1,1]],[[1,1],[1,1]],[[0,1,0],[1,1,1]],[[0,1,1],[1,1,0]],[[1,1,0],[0,1,1]],[[1,0,0],[1,1,1]],[[0,0,1],[1,1,1]]],Wn={neon:{colors:[65535,16716947,8388352,16729344,4286945,16766720,9699539],background:2065,grid:35071,border:65535},retro:{colors:[16711680,65280,255,16776960,16711935,65535,16753920],background:1118481,grid:4473924,border:8947848},pastel:{colors:[16757690,12255177,12247551,16777146,16768954,14728191,16765404],background:2763306,grid:4473924,border:6710886},synthwave:{colors:[16711935,65535,16716947,4286945,16729344,8388352,16766720],background:1376293,grid:16711935,border:65535}},xo="synthwave";let Di=(()=>{try{const r=localStorage.getItem("selectedTheme");let e=Wn[xo];return r&&Wn[r]&&(e=Wn[r]),(!e.colors||e.colors.length!==7)&&(console.warn("Invalid theme structure, falling back to default"),e=Wn[xo]),e}catch(r){return console.error("Error initializing theme:",r),Wn[xo]}})();const Mi=Di.colors,fo=new lr(.92,.92,1.2),vs=Mi.map(r=>new bo({color:r,opacity:.95,transparent:!0,shininess:100,specular:16777215,emissive:new dt(r).multiplyScalar(.3),flatShading:!1,metalness:.5,roughness:.2})),Oc=Mi.map(r=>new bo({color:r,opacity:.2,transparent:!0,shininess:30,emissive:new dt(r).multiplyScalar(.15),side:Kt,depthWrite:!1,blending:Ut,wireframe:!0})),wA=r=>{try{(!Wn[r]||!Wn[r].colors||Wn[r].colors.length!==7)&&(console.warn(`Invalid theme ${r}, using default theme`),r=xo),Di=Wn[r],localStorage.setItem("selectedTheme",r);const e=[...Di.colors];Mi.length=0,Mi.push(...e),vs.forEach((t,i)=>{const o=e[i];t.color.setHex(o),t.emissive.copy(new dt(o).multiplyScalar(.3))}),Oc.forEach((t,i)=>{const o=e[i];t.color.setHex(o),t.emissive.copy(new dt(o).multiplyScalar(.15))})}catch(e){console.error("Error setting theme:",e),Di=Wn[xo],Mi.length=0,Mi.push(...Wn[xo].colors)}};class MA{constructor(e){Ne(this,"particles",[]);Ne(this,"scene");Ne(this,"lastUpdate",0);Ne(this,"isAnimating",!1);Ne(this,"backgroundEffects",[]);Ne(this,"energyFields",[]);Ne(this,"glowRings",[]);this.scene=e,this.initializeBackgroundEffects(),this.createEnergyFields(),this.createGlowRings()}initializeBackgroundEffects(){const e=window.innerWidth,t=window.innerHeight,i=e/2,o=t/2;for(let a=0;a<40;a++){const c=new wi(.1,2+Math.random()*3),u=new on({color:new dt().setHSL(Math.random(),.5,.5),transparent:!0,opacity:.2,blending:Ut,side:Kt}),d=new wt(c,u);d.position.set(Math.random()*e-i,Math.random()*t-o,-2+Math.random()),d.rotation.z=Math.random()*Math.PI,this.scene.add(d),this.backgroundEffects.push({mesh:d,velocity:new V((Math.random()-.5)*.05,(Math.random()-.5)*.05,0),life:1})}window.addEventListener("resize",()=>{const a=window.innerWidth,c=window.innerHeight,u=a/2,d=c/2;this.backgroundEffects.forEach(f=>{f.mesh.position.set(Math.random()*a-u,Math.random()*c-d,f.mesh.position.z)})})}createEnergyFields(){const e=window.innerWidth,t=window.innerHeight;for(let i=0;i<5;i++){const o=new wi(20,20),a=new on({color:new dt().setHSL(Math.random(),.7,.5),transparent:!0,opacity:.1,blending:Ut,side:Kt}),c=new wt(o,a);c.position.set((Math.random()-.5)*e,(Math.random()-.5)*t,-6),c.rotation.z=Math.random()*Math.PI,this.scene.add(c),this.energyFields.push(c)}}createGlowRings(){const e=window.innerWidth,t=window.innerHeight;for(let i=0;i<8;i++){const o=new Xc(5,6,32),a=new on({color:new dt().setHSL(Math.random(),.8,.5),transparent:!0,opacity:.15,blending:Ut,side:Kt}),c=new wt(o,a);c.position.set((Math.random()-.5)*e,(Math.random()-.5)*t,-4),this.scene.add(c),this.glowRings.push(c)}}addParticlesForLine(e,t){const i=[],o=new wi(10,1),a=new on({color:16777215,transparent:!0,opacity:.8,side:Kt,blending:Ut}),c=new wt(o,a);c.position.set(5,-e+.5,.1),this.scene.add(c),i.push({mesh:c,velocity:new V(0,0,0),life:.5});for(let u=0;u<t[0].length;u++)if(t[e][u].filled&&t[e][u].color!==null){const d=Mi.indexOf(t[e][u].color);if(d!==-1){for(let p=0;p<8;p++){const m=.2+Math.random()*.3,v=new lr(m,m,m),y=vs[d].clone();y.transparent=!0,y.emissive=new dt(t[e][u].color),y.emissiveIntensity=.5;const w=new wt(v,y);w.position.set(u+.5,-e+.5,Math.random()*.5),this.scene.add(w);const M=Math.PI*2*p/8,S=.1+Math.random()*.2;i.push({mesh:w,velocity:new V(Math.cos(M)*S,Math.sin(M)*S,Math.random()*.1),life:1+Math.random()})}const f=2;for(let p=0;p<f;p++){const m=new ba(.05,.05,.8,4),v=new on({color:t[e][u].color,transparent:!0,opacity:.6,blending:Ut}),y=new wt(m,v);y.position.set(u+.5,-e+.5,0),y.rotation.z=Math.random()*Math.PI,this.scene.add(y),i.push({mesh:y,velocity:new V((Math.random()-.5)*.2,(Math.random()-.5)*.2,0),life:.5+Math.random()*.5})}}}this.particles.push(...i),this.isAnimating||this.startAnimation()}addImpactParticles(e,t,i){const a=[];for(let c=0;c<8;c++){const u=.2+Math.random()*.3,d=new lr(u,u,u),f=new bo({color:i,opacity:.8,transparent:!0,shininess:30}),p=new wt(d,f);p.position.set(e+.5+(Math.random()-.5)*.3,-t+.5,(Math.random()-.5)*.3),this.scene.add(p);const m=Math.PI*2*c/8;a.push({mesh:p,velocity:new V(Math.cos(m)*.2,Math.abs(Math.sin(m))*.3,Math.sin(m)*.2),life:1+Math.random()})}this.particles.push(...a),this.isAnimating||this.startAnimation()}addLightBeam(e,t,i){const a=new ba(.1,.3,12,8),c=new bo({color:new dt(i),opacity:.3,transparent:!0,shininess:100,emissive:i,emissiveIntensity:1,blending:Ut}),u=new wt(a,c);u.position.set(e+.5,-t+12/2-.5,0);const d=new ba(.2,.5,12,8),f=c.clone();f.opacity=.15;const p=new wt(d,f);u.add(p),this.scene.add(u),this.particles.push({mesh:u,velocity:new V(0,2.5,0),life:1.5});const m=8;for(let w=0;w<m;w++){const M=new Ia(.1,8,8),S=new on({color:i,transparent:!0,opacity:.5,blending:Ut}),x=new wt(M,S),R=w/m*Math.PI*2;x.position.set(e+.5+Math.cos(R)*.3,-t+.5,Math.sin(R)*.3),this.scene.add(x),this.particles.push({mesh:x,velocity:new V(Math.cos(R)*.05,.2,Math.sin(R)*.05),life:1})}const v=12;for(let w=0;w<v;w++){const M=new Ia(.08,8,8),S=new on({color:i,transparent:!0,opacity:.3,blending:Ut}),x=5;for(let R=0;R<x;R++){const T=new wt(M,S.clone()),E=w/v*Math.PI*2,B=.3+R*.1;T.position.set(e+.5+Math.cos(E)*B,-t+.5+R*.2,Math.sin(E)*B),T.scale.set(1-R*.15,1-R*.15,1-R*.15),this.scene.add(T),this.particles.push({mesh:T,velocity:new V(Math.cos(E)*(.05+R*.02),.2+R*.1,Math.sin(E)*(.05+R*.02)),life:1-R*.15})}}const y=6;for(let w=0;w<y;w++){const M=new en,S=[];for(let T=0;T<6;T++){const E=T/6*Math.PI*2;S.push(Math.cos(E)*.1,Math.sin(E)*.1,0,0,0,0)}M.setAttribute("position",new Bt(S,3));const x=new ir({color:i,transparent:!0,opacity:.8,blending:Ut}),R=new rd(M,x);R.position.set(e+.5+(Math.random()-.5)*.5,-t+.5+Math.random()*.5,(Math.random()-.5)*.5),this.scene.add(R),this.particles.push({mesh:R,velocity:new V((Math.random()-.5)*.1,.3+Math.random()*.2,(Math.random()-.5)*.1),life:.8+Math.random()*.4})}}addLineEffect(e,t,i,o,a){const c=[];c.push(new V(e+.5,-t+.5,.1)),c.push(new V(i+.5,-o+.5,.1));const u=new en().setFromPoints(c),d=new ir({color:a,transparent:!0,opacity:.8,blending:Ut}),f=new rr(u,d);this.scene.add(f);const p=new ir({color:a,transparent:!0,opacity:.4,blending:Ut,linewidth:3}),m=new rr(u,p);m.scale.multiplyScalar(1.2),this.scene.add(m),this.particles.push({mesh:f,velocity:new V(0,0,0),life:.5},{mesh:m,velocity:new V(0,0,0),life:.5});const v=Math.sqrt(Math.pow(i-e,2)+Math.pow(o-t,2)),y=Math.ceil(v*5);for(let w=0;w<y;w++){const M=w/y,S=e+(i-e)*M,x=t+(o-t)*M,R=new en,T=[];for(let D=0;D<6;D++){const F=D/6*Math.PI*2;T.push(Math.cos(F)*.05,Math.sin(F)*.05,0,0,0,0)}R.setAttribute("position",new Bt(T,3));const E=new ir({color:a,transparent:!0,opacity:.6,blending:Ut}),B=new rd(R,E);B.position.set(S+.5+(Math.random()-.5)*.2,-x+.5+(Math.random()-.5)*.2,.1),this.scene.add(B),this.particles.push({mesh:B,velocity:new V((Math.random()-.5)*.05,(Math.random()-.5)*.05,0),life:.3+Math.random()*.2})}this.isAnimating||this.startAnimation()}startAnimation(){this.isAnimating=!0;const e=()=>{const t=performance.now();t-this.lastUpdate>=16&&(this.lastUpdate=t,this.updateParticles()),this.particles.length>0&&this.isAnimating?requestAnimationFrame(e):this.isAnimating=!1};requestAnimationFrame(e)}updateParticles(){const e=window.innerWidth,t=window.innerHeight,i=e/2,o=t/2;this.backgroundEffects.forEach(a=>{a.mesh.position.add(a.velocity),a.mesh.rotation.z+=.001,a.mesh.position.x>i&&(a.mesh.position.x=-i),a.mesh.position.x<-i&&(a.mesh.position.x=i),a.mesh.position.y>o&&(a.mesh.position.y=-o),a.mesh.position.y<-o&&(a.mesh.position.y=o);const c=Math.sin(Date.now()*.001)*.3+.7;a.mesh.material.opacity=.2*c}),this.energyFields.forEach((a,c)=>{const u=Date.now()*5e-4;a.rotation.z+=.002,a.scale.x=1+Math.sin(u+c)*.2,a.scale.y=1+Math.cos(u+c)*.2,a.material.opacity=.1+Math.sin(u*2+c)*.05}),this.glowRings.forEach((a,c)=>{const u=Date.now()*.001;a.scale.setScalar(1+Math.sin(u+c*.5)*.2),a.rotation.z+=.01,a.material.opacity=.15+Math.sin(u*1.5+c)*.05});for(let a=this.particles.length-1;a>=0;a--){const c=this.particles[a];if(c.mesh.geometry.type==="CylinderGeometry"){c.mesh.scale.y*=.97,c.mesh.scale.x*=.99,c.mesh.scale.z*=.99,c.mesh.position.y+=.3,c.mesh.rotation.y+=.02,c.mesh.material.opacity*=.97;const u=Math.sin(Date.now()*.005)*.1+.9;c.mesh.scale.multiplyScalar(u)}else if(c.mesh.geometry.type==="SphereGeometry"){c.mesh.position.add(c.velocity),c.velocity.y*=.98,c.mesh.rotation.x+=.1,c.mesh.rotation.z+=.1;const u=Math.sin(Date.now()*.01+c.mesh.position.x)*.1+.9;c.mesh.scale.set(u,u,u),c.mesh.material.color&&c.mesh.material.color.offsetHSL(.001,0,0)}else if(c.mesh.type==="LineSegments")c.mesh.position.add(c.velocity),c.mesh.rotation.z+=.1,c.mesh.scale.multiplyScalar(.98),c.mesh.material.opacity=c.life*Math.sin(Date.now()*.01);else if(c.mesh.geometry.type==="PlaneGeometry")c.mesh.material.opacity*=.9,c.mesh.scale.x*=1.05;else if(c.mesh instanceof rr&&!(c.mesh instanceof rd)){c.mesh.material.opacity*=.95;const u=Math.sin(Date.now()*.01)*.2+.8;c.mesh.scale.y=u}else c.mesh.rotation.x+=.1,c.mesh.rotation.y+=.1,c.mesh.rotation.z+=.1,c.velocity.y-=.02,c.mesh.position.add(c.velocity),c.mesh.position.x+=Math.sin(Date.now()*.01)*.01,c.mesh.material.opacity=c.life;c.life-=.03,c.life<=0&&(this.scene.remove(c.mesh),this.particles.splice(a,1))}}cleanup(){[...this.energyFields,...this.glowRings].forEach(e=>{this.scene.remove(e),e.geometry.dispose(),e.material.dispose()}),this.energyFields=[],this.glowRings=[]}}class zg{constructor(e,t){Ne(this,"grid");Ne(this,"width");Ne(this,"height");Ne(this,"game");this.width=e,this.height=t+1,this.grid=this.createGrid()}setGame(e){this.game=e}createGrid(){const e=[];for(let t=0;t<this.height;t++){const i=Array(this.width).fill({color:null,filled:!1});e.push([...i])}return e}clearTetromino(e,t,i){Jn[e].forEach((a,c)=>{a.forEach((u,d)=>{if(u===1){const f=t+d,p=i+c;p>=0&&p<this.height&&f>=0&&f<this.width&&(this.grid[p][f]={color:null,filled:!1})}})})}placeTetromino(e,t,i){Jn[e].forEach((a,c)=>{a.forEach((u,d)=>{if(u===1){const f=t+d,p=i+c;p>=0&&p<this.height&&f>=0&&f<this.width&&(this.grid[p][f]={color:Mi[e],filled:!0})}})})}checkCollision(e,t,i){const o=Jn[e];for(let a=0;a<o.length;a++)for(let c=0;c<o[a].length;c++)if(o[a][c]===1){const u=t+c,d=i+a;if(u<0||u>=this.width||d>=this.height||d<-2||d>=0&&d<this.height&&this.grid[d][u].filled)return!0}return!1}checkAndClearLines(e){let t=[];for(let o=this.height-1;o>=0;o--)this.grid[o].every(a=>a.filled)&&t.push(o);if(t.length===0||this.game.isInTargetMode)return 0;const i=t[0];return this.game.startTargetMode(i),1}clearLine(e){for(let t=e;t>0;t--)this.grid[t]=[...this.grid[t-1]].map(i=>({color:i.color,filled:i.filled}));this.grid[0]=Array(this.width).fill(null).map(()=>({color:null,filled:!1}))}}class EA{constructor(e){Ne(this,"game");this.game=e}handleKeyPress(e){if(!this.game.gameOver){switch(e.key.toLowerCase()){case"a":case"arrowleft":this.game.gridManager.clearTetromino(this.game.currentTetromino,this.game.currentX,this.game.currentY),this.game.gridManager.checkCollision(this.game.currentTetromino,this.game.currentX-1,this.game.currentY)||this.game.currentX--,this.game.gridManager.placeTetromino(this.game.currentTetromino,this.game.currentX,this.game.currentY);break;case"d":case"arrowright":this.game.gridManager.clearTetromino(this.game.currentTetromino,this.game.currentX,this.game.currentY),this.game.gridManager.checkCollision(this.game.currentTetromino,this.game.currentX+1,this.game.currentY)||this.game.currentX++,this.game.gridManager.placeTetromino(this.game.currentTetromino,this.game.currentX,this.game.currentY);break;case"s":case"arrowdown":this.game.moveDown();break;case"w":case"arrowup":this.game.rotateTetromino();break;case" ":this.game.hardDrop();break;case"r":this.game.replaceTetromino();break}this.game.renderer.renderScene()}}}class Hg extends kf{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const o=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(o,t)}this.type="TextGeometry"}}class TA extends Bf{constructor(e){super(e)}load(e,t,i,o){const a=this,c=new Pw(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){const d=a.parse(JSON.parse(u));t&&t(d)},i,o)}parse(e){return new bA(e)}}class bA{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],o=AA(e,t,this.data);for(let a=0,c=o.length;a<c;a++)i.push(...o[a].toShapes());return i}}function AA(r,e,t){const i=Array.from(r),o=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*o,c=[];let u=0,d=0;for(let f=0;f<i.length;f++){const p=i[f];if(p===`
`)u=0,d-=a;else{const m=CA(p,o,u,d,t);u+=m.offsetX,c.push(m.path)}}return c}function CA(r,e,t,i,o){const a=o.glyphs[r]||o.glyphs["?"];if(!a){console.error('THREE.Font: character "'+r+'" does not exists in font family '+o.familyName+".");return}const c=new Ow;let u,d,f,p,m,v,y,w;if(a.o){const M=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let S=0,x=M.length;S<x;)switch(M[S++]){case"m":u=M[S++]*e+t,d=M[S++]*e+i,c.moveTo(u,d);break;case"l":u=M[S++]*e+t,d=M[S++]*e+i,c.lineTo(u,d);break;case"q":f=M[S++]*e+t,p=M[S++]*e+i,m=M[S++]*e+t,v=M[S++]*e+i,c.quadraticCurveTo(m,v,f,p);break;case"b":f=M[S++]*e+t,p=M[S++]*e+i,m=M[S++]*e+t,v=M[S++]*e+i,y=M[S++]*e+t,w=M[S++]*e+i,c.bezierCurveTo(m,v,y,w,f,p);break}}return{offsetX:a.ha*e,path:c}}class RA{constructor(e,t){Ne(this,"scene");Ne(this,"gridManager");Ne(this,"blocks",[]);Ne(this,"shadowBlocks",[]);Ne(this,"previewBlocks",[]);Ne(this,"directionLabels",[]);Ne(this,"scoreText",null);Ne(this,"keybindText",null);this.scene=e,this.gridManager=t}renderScene(){this.blocks.forEach(e=>this.scene.remove(e)),this.blocks=[];for(let e=0;e<this.gridManager.height;e++)for(let t=0;t<this.gridManager.width;t++){const i=this.gridManager.grid[e][t];if(i.filled&&i.color!==null){const o=vs.findIndex(a=>a.color.getHex()===i.color);if(o!==-1){const a=new wt(fo,vs[o]);a.position.set(t+.5,-e+.5,0),this.scene.add(a),this.blocks.push(a)}}}}updateShadow(e,t,i){this.shadowBlocks.forEach(c=>this.scene.remove(c)),this.shadowBlocks=[];const o=Oc[e];Jn[e].forEach((c,u)=>{c.forEach((d,f)=>{if(d===1){const p=new wt(fo,o);p.position.set(t+f+.5,-(i+u)+.5,0),this.scene.add(p),this.shadowBlocks.push(p)}})})}updateActivePiece(e,t,i){const o=Jn[e],a=vs[e];o.forEach((c,u)=>{c.forEach((d,f)=>{if(d===1){const p=new wt(fo,a);p.position.set(t+f+.5,-(i+u)+.5,0),this.scene.add(p),this.blocks.push(p)}})})}updateNextPiecePreview(e){this.previewBlocks.forEach(f=>this.scene.remove(f)),this.previewBlocks=[],this.directionLabels.forEach(f=>this.scene.remove(f)),this.directionLabels=[];const t=Jn[e],i=vs[e],o=12,a=2;new TA().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",f=>{const p=new Hg("NEXT PIECE",{font:f,size:.3,height:.05,curveSegments:1,bevelEnabled:!1}),m=new bo({color:65535,transparent:!0,opacity:.9,emissive:65535,emissiveIntensity:.5,shininess:80}),v=new wt(p,m);v.position.set(o-.8,-a+2.5,0),this.scene.add(v),this.directionLabels.push(v);const y=new Hg("Press R to swap",{font:f,size:.25,height:.05,curveSegments:12,bevelEnabled:!1}),w=new bo({color:7829503,transparent:!0,opacity:.7,emissive:4474111,emissiveIntensity:.3,shininess:60}),M=new wt(y,w);M.position.set(o-.6,-a+2,0),this.scene.add(M),this.directionLabels.push(M)}),t.forEach((f,p)=>{f.forEach((m,v)=>{if(m===1){const y=new wt(fo,i.clone());y.material.opacity=.8,y.position.set(o+v+.5,-a-p+.5,0),this.scene.add(y),this.previewBlocks.push(y)}})});const u=new en().setFromPoints([new V(o-.5,-a+1.5,0),new V(o+t[0].length+.5,-a+1.5,0),new V(o+t[0].length+.5,-(a+t.length+.5),0),new V(o-.5,-(a+t.length+.5),0),new V(o-.5,-a+1.5,0)]),d=new rr(u,new ir({color:65535,opacity:.4,transparent:!0,blending:Ut}));this.scene.add(d),this.directionLabels.push(d)}updateScore(e){this.scoreText&&this.scene.remove(this.scoreText);const t=document.querySelector(".fixed.bottom-4.right-4");t&&t.remove();const i=document.createElement("div");i.className="fixed bottom-4 right-4 z-50",i.innerHTML=`
                <div class="w-72 p-4 bg-black/80 backdrop-blur-md 
                            border border-cyan-500/30 rounded-lg text-white space-y-3">
                    <h3 class="text-lg font-bold text-cyan-400 mb-2">Quick Tutorial</h3>
                    <div class="space-y-2">
                        <div class="flex justify-between">
                            <span class="text-cyan-300">W / ↑</span>
                            <span class="text-gray-300">Rotate Piece</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-cyan-300">A / ←</span>
                            <span class="text-gray-300">Move Left</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-cyan-300">S / ↓</span>
                            <span class="text-gray-300">Move Down</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-cyan-300">D / →</span>
                            <span class="text-gray-300">Move Right</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-cyan-300">R</span>
                            <span class="text-gray-300">Swap Piece</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-cyan-300">SPACE</span>
                            <span class="text-gray-300">Hard Drop</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-cyan-300">LEFT MOUSE</span>
                            <span class="text-gray-300">Click Circle</span>
                        </div>
                    </div>
                </div>
            `,document.body.appendChild(i)}}const qt=class qt{constructor(e,t,i,o){Ne(this,"outerCircle");Ne(this,"innerCircle");Ne(this,"hitbox");Ne(this,"startTime");Ne(this,"position");Ne(this,"DURATION",4);Ne(this,"originalX");Ne(this,"originalZ");Ne(this,"radius",5);Ne(this,"angle",0);Ne(this,"orbitSpeed",.002);Ne(this,"orbitRadius",1);Ne(this,"orbitCenterX");Ne(this,"orbitCenterY");Ne(this,"isRotating",!1);Ne(this,"targetZ");Ne(this,"currentZ");Ne(this,"zTransitionSpeed",.1);Ne(this,"game");Ne(this,"isInRotation");this.position=e,this.startTime=Date.now(),this.originalX=e.x,this.originalZ=e.z,this.radius=e.z,this.orbitCenterX=e.x,this.orbitCenterY=e.y,this.game=o,e.z=qt.gameRotationState.normalZ,this.position=e.clone(),this.orbitSpeed=Math.random()*.002+.001,this.orbitRadius=Math.random()*1+.5,this.angle=Math.random()*Math.PI*2,this.innerCircle=new wt(qt.geometries.inner,qt.materials.inner.clone()),this.outerCircle=new wt(qt.geometries.outer,qt.materials.outer.clone()),this.hitbox=new wt(qt.geometries.hitbox,new on({transparent:!0,opacity:0,side:Kt,depthTest:!1})),[this.innerCircle,this.outerCircle,this.hitbox].forEach(a=>{a.position.copy(e);const c=new It;c.lookAt(e,i,new V(0,1,0)),a.quaternion.setFromRotationMatrix(c),a.rotateX(Math.PI/2),t.add(a)}),this.outerCircle.scale.set(3,3,1),this.targetZ=e.z,this.currentZ=e.z,this.position.z=qt.gameRotationState.normalZ,[this.innerCircle,this.outerCircle,this.hitbox].forEach(a=>{a.position.z=qt.gameRotationState.normalZ})}static setGameRotation(e){qt.gameRotationState.isRotating=e,console.log(`Rotation state changed to: ${e}`)}static getCurrentZ(){return qt.gameRotationState.isRotating?qt.gameRotationState.rotatedZ:qt.gameRotationState.normalZ}update(){const e=(Date.now()-this.startTime)*.001,t=Math.min(e/this.DURATION,1);this.angle+=this.orbitSpeed;const i=Math.cos(this.angle)*this.orbitRadius,o=Math.sin(this.angle)*this.orbitRadius,a=this.orbitCenterX+i,c=this.orbitCenterY+o;[this.innerCircle,this.outerCircle,this.hitbox].forEach(f=>{f.position.x=a,f.position.y=c}),this.position.x=a,this.position.y=c;const u=1+Math.sin(e*8)*.2;this.innerCircle.scale.setScalar(u);const d=3*(1-t)+1;this.outerCircle.scale.setScalar(d),this.outerCircle.material.opacity=.8*(1-t),this.outerCircle.rotation.z=e*2}updatePositionWithCamera(e){const t=qt.gameRotationState.isRotating?qt.gameRotationState.rotatedZ:qt.gameRotationState.normalZ,i=this.orbitCenterX-Math.sin(e)*5,o=Math.cos(e)*t;this.position.set(i,this.orbitCenterY,o);const a=new V;this.game.camera.getWorldPosition(a),[this.innerCircle,this.outerCircle,this.hitbox].forEach(c=>{c.position.copy(this.position);const u=new It,d=new V(0,1,0);if(u.lookAt(c.position,a,d),c.quaternion.setFromRotationMatrix(u),qt.gameRotationState.isRotating){const f=e%(Math.PI*2)/(Math.PI*2);c.rotateX(Math.sin(f*Math.PI)*.2)}}),qt.gameRotationState.lastAngle=e}destroy(e){e.remove(this.innerCircle,this.outerCircle,this.hitbox);const t=new wt(qt.geometries.inner,new on({color:Di.border,transparent:!0,opacity:1,blending:Ut,side:Kt,depthTest:!1}));t.position.copy(this.position),t.lookAt(e.position),e.add(t);let i=1;const o=()=>{t.scale.multiplyScalar(1.1),i*=.9,t.material.opacity=i,i>.01?requestAnimationFrame(o):(e.remove(t),t.material.dispose())};o()}};Ne(qt,"geometries",{inner:new Ra(.5,16),outer:new Xc(.5,.6,16),hitbox:new Ra(.8,8)}),Ne(qt,"materials",{inner:new on({color:Di.border,transparent:!0,opacity:1,side:Kt,depthTest:!1,blending:Ut}),outer:new on({color:Di.grid,transparent:!0,opacity:.8,side:Kt,depthTest:!1,blending:Ut})}),Ne(qt,"gameRotationState",{isRotating:!1,normalZ:1,rotatedZ:-1,lastAngle:0});let fs=qt;class PA{constructor(e,t,i){Ne(this,"gridManager");Ne(this,"inputHandler");Ne(this,"renderer");Ne(this,"particleSystem");Ne(this,"currentX");Ne(this,"currentY");Ne(this,"currentTetromino");Ne(this,"gameOver");Ne(this,"dropIntervalId");Ne(this,"scene");Ne(this,"setTetrominoState");Ne(this,"lastRenderTime");Ne(this,"blockInstances");Ne(this,"shadowBlockInstances");Ne(this,"hardDropPressed");Ne(this,"dropAnimation");Ne(this,"camera");Ne(this,"cameraShake");Ne(this,"originalCameraPosition");Ne(this,"nextTetromino");Ne(this,"score",0);Ne(this,"circleTargets",[]);Ne(this,"targetedBlocks",new Set);Ne(this,"isInTargetMode",!1);Ne(this,"requiredTargets",0);Ne(this,"hitTargets",0);Ne(this,"timeoutId",null);Ne(this,"tetrominoBag",[]);Ne(this,"isRotating",!1);Ne(this,"pivotPoint");Ne(this,"ambientParticles",[]);Ne(this,"animationFrameId",null);Ne(this,"initialDropInterval",700);Ne(this,"currentDropInterval",700);Ne(this,"minDropInterval",100);Ne(this,"difficultyIncreaseTimer",null);Ne(this,"speedIncreaseAmount",50);Ne(this,"onGameOver",null);Ne(this,"isPaused",!1);Ne(this,"handleClick",e=>{if(!this.isInTargetMode||this.isPaused)return;const i=e.target.getBoundingClientRect(),o=new Ie((e.clientX-i.left)/i.width*2-1,-((e.clientY-i.top)/i.height)*2+1),a=new kw;a.setFromCamera(o,this.camera);for(let c=this.circleTargets.length-1;c>=0;c--){const u=this.circleTargets[c];if(a.intersectObject(u.hitbox).length>0){this.hitTargets++,this.triggerCameraShake(.4);const d=new Ra(.5,32),f=new on({color:16711680,transparent:!0,opacity:1,blending:Ut,side:Kt,depthTest:!1}),p=new wt(d,f);p.position.copy(u.position),p.lookAt(this.camera.position),this.scene.add(p);const m=()=>{p.scale.multiplyScalar(1.2),p.material.opacity*=.85,p.material.opacity>.01?requestAnimationFrame(m):this.scene.remove(p)};m();for(let v=0;v<8;v++)this.particleSystem.addImpactParticles(u.position.x,u.position.y,16711680);u.destroy(this.scene),this.circleTargets.splice(c,1),this.hitTargets===this.requiredTargets&&this.completeTargetMode(!0);break}}});this.scene=e,this.camera=t,this.setTetrominoState=i,this.gameOver=!1,this.currentX=3,this.currentY=-2,this.lastRenderTime=0,this.hardDropPressed=!1,this.dropAnimation={scale:1,blocks:new Set},this.originalCameraPosition=t.position.clone(),this.cameraShake={enabled:!1,intensity:1,decay:.9},this.blockInstances=this.initializeBlockInstances(),this.shadowBlockInstances=this.initializeShadowBlockInstances(),this.gridManager=new zg(10,20),this.gridManager.setGame(this),this.renderer=new RA(e,this.gridManager),this.particleSystem=new MA(e),this.inputHandler=new EA(this),this.tetrominoBag=this.generateNewBag(),this.nextTetromino=this.getNextTetromino(),this.score=0,this.setupLighting(),this.initializeAmbientParticles(),this.pivotPoint=new V(5,-10,0),this.startAutoDrop(),this.spawnNewTetromino(),this.renderer.updateScore(this.score),window.addEventListener("click",this.handleClick),this.setupDifficultyIncrease()}cleanup(){var t,i,o;this.dropIntervalId&&(clearInterval(this.dropIntervalId),this.dropIntervalId=null),this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null),window.removeEventListener("click",this.handleClick),this.gameOver=!1,this.score=0,this.isInTargetMode=!1,this.currentX=3,this.currentY=-2,this.circleTargets.forEach(a=>a.destroy(this.scene)),this.circleTargets=[],(t=this.blocks)==null||t.forEach(a=>{a&&this.scene.contains(a)&&this.scene.remove(a)}),this.ambientParticles.forEach(a=>{this.scene.remove(a.mesh),a.mesh.geometry&&a.mesh.geometry.dispose(),a.mesh.material&&a.mesh.material.dispose()}),this.ambientParticles=[],(i=this.blockInstances)==null||i.forEach(a=>{a&&this.scene.contains(a)&&(this.scene.remove(a),a.geometry.dispose(),a.material.dispose())}),(o=this.shadowBlockInstances)==null||o.forEach(a=>{a&&this.scene.contains(a)&&(this.scene.remove(a),a.geometry.dispose(),a.material.dispose())}),this.blockInstances=this.initializeBlockInstances(),this.shadowBlockInstances=this.initializeShadowBlockInstances(),this.gridManager=new zg(10,20),this.gridManager.setGame(this),this.tetrominoBag=this.generateNewBag(),this.nextTetromino=this.getNextTetromino(),this.currentTetromino=this.getNextTetromino();const e=[];this.scene.traverse(a=>{a instanceof wt&&a.geometry instanceof lr&&e.push(a)}),e.forEach(a=>{this.scene.remove(a),a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose()}),this.renderer.renderScene(),this.difficultyIncreaseTimer&&(clearInterval(this.difficultyIncreaseTimer),this.difficultyIncreaseTimer=null),this.currentDropInterval=this.initialDropInterval}setupLighting(){const e=new Uw(2236962,.6),t=new dg(16777215,1.2);t.position.set(5,15,10),t.castShadow=!0;const i=new dg(2245887,.8);i.position.set(-5,5,-10);const o=new ud(65535,1.2);o.position.set(5,-22,10),o.distance=35,o.decay=2;const a=new Nw(7816447,.8);a.position.set(5,25,5),a.angle=Math.PI/4,a.penumbra=.5,a.decay=1.5,a.distance=40;const c=new ud(16711935,.4);c.position.set(-15,-10,15);const u=new ud(65535,.4);u.position.set(15,-10,15),this.scene.add(e,t,i,o,a,c,u)}initializeBlockInstances(){return Mi.map((e,t)=>{const i=new Q0(fo,vs[t],200);return i.count=0,i})}initializeShadowBlockInstances(){return Oc.map((e,t)=>{const i=new Q0(fo,Oc[t],200);return i.count=0,i})}startAutoDrop(){this.dropIntervalId&&clearInterval(this.dropIntervalId),this.dropIntervalId=setInterval(()=>{!this.gameOver&&!this.isPaused&&this.moveDown()},this.currentDropInterval)}generateNewBag(){const e=Array.from({length:Jn.length},(t,i)=>i);for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}getNextTetromino(){return this.tetrominoBag.length===0&&(this.tetrominoBag=this.generateNewBag()),this.tetrominoBag.pop()}spawnNewTetromino(){if(this.currentTetromino=this.nextTetromino,this.nextTetromino=this.getNextTetromino(),this.currentX=Math.floor((this.gridManager.width-Jn[this.currentTetromino][0].length)/2),this.currentY=-2,this.gridManager.checkCollision(this.currentTetromino,this.currentX,this.currentY)){this.gameOver=!0,clearInterval(this.dropIntervalId),console.log("Game Over - ad di collision spawn"),this.onGameOver&&this.onGameOver(this.score);return}this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY),this.renderer.updateActivePiece(this.currentTetromino,this.currentX,this.currentY),this.renderer.updateNextPiecePreview(this.nextTetromino)}moveDown(){if(!(this.gameOver||this.isPaused)){if(this.gridManager.clearTetromino(this.currentTetromino,this.currentX,this.currentY),!this.gridManager.checkCollision(this.currentTetromino,this.currentX,this.currentY+1))this.currentY++,this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY),this.gridManager.checkAndClearLines(this.particleSystem);else{if(this.currentY<0){this.gameOver=!0,clearInterval(this.dropIntervalId),console.log("Game Over bang cukup bang"),this.onGameOver&&this.onGameOver(this.score);return}this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY);const e=this.gridManager.checkAndClearLines(this.particleSystem);e>0&&(this.score+=e*100,this.renderer.updateScore(this.score),this.triggerCameraShake(3)),this.spawnNewTetromino()}this.renderer.renderScene()}}hardDrop(){if(this.isPaused)return;this.hardDropPressed=!0,this.gridManager.clearTetromino(this.currentTetromino,this.currentX,this.currentY);let e=this.currentY;for(;!this.gridManager.checkCollision(this.currentTetromino,this.currentX,e+1);)e++;if(this.currentY=e,this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY),this.currentY>=0){this.triggerCameraShake(.2);const t=Jn[this.currentTetromino],i=Mi[this.currentTetromino];if(t.forEach((a,c)=>{a.forEach((u,d)=>{if(u===1){const f=this.currentX+d,p=this.currentY+c;setTimeout(()=>{this.particleSystem.addLightBeam(f,p,i)},(d+c)*50)}})}),this.gridManager.checkAndClearLines(this.particleSystem)>0){this.triggerCameraShake(.4);const a=new wi(15,25),c=new on({color:16777215,transparent:!0,opacity:.3,side:Kt,blending:Ut}),u=new wt(a,c);u.position.set(5,-10,.1),this.scene.add(u);const d=()=>{u.material.opacity>0?(u.material.opacity-=.05,requestAnimationFrame(d)):this.scene.remove(u)};d()}this.spawnNewTetromino()}this.hardDropPressed=!1,this.renderer.renderScene()}rotateTetromino(){if(this.isPaused)return;this.gridManager.clearTetromino(this.currentTetromino,this.currentX,this.currentY);const e=Jn[this.currentTetromino],t=e[0].map((a,c)=>e.map(u=>u[u.length-1-c])),i=Jn[this.currentTetromino];if(Jn[this.currentTetromino]=t,!this.gridManager.checkCollision(this.currentTetromino,this.currentX,this.currentY)){this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY);return}const o=[{x:1,y:0},{x:-1,y:0},{x:2,y:0},{x:-2,y:0}];for(const a of o)if(!this.gridManager.checkCollision(this.currentTetromino,this.currentX+a.x,this.currentY)){this.currentX+=a.x,this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY);return}Jn[this.currentTetromino]=i,this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY)}replaceTetromino(){if(this.gameOver||this.isPaused)return;this.gridManager.clearTetromino(this.currentTetromino,this.currentX,this.currentY);const e=this.currentTetromino;if(this.currentTetromino=this.nextTetromino,this.nextTetromino=e,this.gridManager.checkCollision(this.currentTetromino,this.currentX,this.currentY)){const t=this.currentTetromino;this.currentTetromino=this.nextTetromino,this.nextTetromino=t,this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY)}else{this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY),this.renderer.updateNextPiecePreview(this.nextTetromino);const t=new wi(2,2),i=new on({color:Mi[this.currentTetromino],transparent:!0,opacity:.3,side:Kt,blending:Ut}),o=new wt(t,i);o.position.set(this.currentX+1,-this.currentY-1,.1),this.scene.add(o);const a=()=>{o.material.opacity>0?(o.material.opacity-=.1,requestAnimationFrame(a)):this.scene.remove(o)};a()}this.renderer.renderScene()}handleKeyPress(e){this.gameOver||this.isPaused&&e.key!=="Escape"||this.inputHandler.handleKeyPress(e)}renderGridBorders(e,t){const i=new wa,o=new ir({color:Di.grid,opacity:.2,transparent:!0,blending:Ut});for(let m=0;m<=t;m++){const v=m%2===0?.3:.15,y=o.clone();y.opacity=v;const w=new en().setFromPoints([new V(0,-m,0),new V(e,-m,0)]),M=new rr(w,y);i.add(M)}for(let m=0;m<=e;m++){const v=m%2===0?.3:.15,y=o.clone();y.opacity=v;const w=new en().setFromPoints([new V(m,0,0),new V(m,-t,0)]),M=new rr(w,y);i.add(M)}const a=new ir({color:Di.border,opacity:.8,transparent:!0,blending:Ut}),c=new en().setFromPoints([new V(-.1,.1,0),new V(e+.1,.1,0),new V(e+.1,-(t+.1),0),new V(-.1,-(t+.1),0),new V(-.1,.1,0)]),u=new rr(c,a),d=new ir({color:65535,opacity:.4,transparent:!0,blending:Ut}),f=new en().setFromPoints([new V(-.2,.2,0),new V(e+.2,.2,0),new V(e+.2,-(t+.2),0),new V(-.2,-(t+.2),0),new V(-.2,.2,0)]),p=new rr(f,d);return i.add(u,p),i}calculateShadowPosition(){let e=this.currentY;for(this.gridManager.clearTetromino(this.currentTetromino,this.currentX,this.currentY);!this.gridManager.checkCollision(this.currentTetromino,this.currentX,e+1);)e++;return this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY),e}updateCameraShake(){this.cameraShake.enabled&&(this.camera.position.set(this.originalCameraPosition.x+(Math.random()-.5)*this.cameraShake.intensity,this.originalCameraPosition.y+(Math.random()-.5)*this.cameraShake.intensity,this.originalCameraPosition.z+(Math.random()-.5)*this.cameraShake.intensity),this.cameraShake.intensity*=this.cameraShake.decay,this.cameraShake.intensity<.01&&(this.cameraShake.enabled=!1,this.camera.position.copy(this.originalCameraPosition)))}triggerCameraShake(e=.5){this.cameraShake.enabled=!0,this.cameraShake.intensity=e}startTargetMode(e){if(this.isInTargetMode)return;this.isInTargetMode=!0,this.hitTargets=0,this.circleTargets=[],this.targetedBlocks.clear();const t=e,i=Math.floor(Math.random()*4)+2;this.requiredTargets=i,console.log(`Creating ${i} targets for line ${e}`),this.camera.position.clone();const o=[];for(let a=0;a<this.gridManager.width;a++)this.gridManager.grid[t][a].filled&&o.push(a);if(o.length<i){console.log("Not enough filled positions for targets"),this.completeTargetMode(!1);return}for(let a=0;a<i;a++){const c=Math.floor(Math.random()*o.length),u=o.splice(c,1)[0],d=new V(u+.5,-t+.5,fs.getCurrentZ()),f=new fs(d,this.scene,this.camera.position,this);this.circleTargets.push(f),this.targetedBlocks.add(`${u},${t}`)}this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{this.isInTargetMode&&this.completeTargetMode(!1)},4e3)}completeTargetMode(e){this.isInTargetMode=!1;const t={tetromino:this.currentTetromino,x:this.currentX,y:this.currentY};if(this.gridManager.clearTetromino(this.currentTetromino,this.currentX,this.currentY),this.circleTargets.forEach(i=>i.destroy(this.scene)),this.circleTargets=[],e)for(let i=this.gridManager.height-1;i>=0;i--)this.gridManager.grid[i].every(o=>o.filled)&&(this.createLineClearEffects(i),this.gridManager.clearLine(i),this.score+=100,this.renderer.updateScore(this.score),setTimeout(()=>{this.renderer.renderScene()},100));else this.targetedBlocks.forEach(i=>{const[o,a]=i.split(",").map(Number);this.gridManager.grid[a][o]={color:null,filled:!1}});this.gridManager.placeTetromino(t.tetromino,t.x,t.y),this.renderer.renderScene()}createLineClearEffects(e){const t=new wi(12,.8),i=new on({color:16777215,transparent:!0,opacity:.6,side:Kt,blending:Ut}),o=new wt(t,i);o.position.set(-2,-e+.5,.1),this.scene.add(o);const a=Date.now(),c=()=>{const u=(Date.now()-a)/300;u<1?(o.position.x=-2+u*14,o.material.opacity=.6*(1-u),requestAnimationFrame(c)):this.scene.remove(o)};c();for(let u=0;u<this.gridManager.width;u++)this.gridManager.grid[e][u].filled&&this.gridManager.grid[e][u].color!==null&&setTimeout(()=>{this.particleSystem.addLightBeam(u,e,this.gridManager.grid[e][u].color)},u*50);this.triggerCameraShake(.2)}updateScene(){var o,a;if(this.isPaused||this.gameOver){this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null);return}const e=performance.now();if(e-this.lastRenderTime<16){this.animationFrameId=requestAnimationFrame(()=>this.updateScene());return}this.lastRenderTime=e;const t=Math.abs(this.camera.rotation.y)>.01;t!==this.isRotating&&(this.isRotating=t,fs.setGameRotation(t)),this.circleTargets.forEach(c=>{c.updatePositionWithCamera(this.camera.rotation.y)});const i=this.calculateShadowPosition();this.renderer.updateShadow(this.currentTetromino,this.currentX,i),this.renderer.updateActivePiece(this.currentTetromino,this.currentX,this.currentY),this.renderer.renderScene(),(a=(o=this.particleSystem).updateParticles)==null||a.call(o),this.hardDropPressed?this.blockInstances.forEach(c=>{c.material.opacity=1}):this.blockInstances.forEach(c=>{c.material.opacity=.8}),this.shadowBlockInstances.forEach(c=>{c.count=0,c.instanceMatrix.needsUpdate=!0}),this.updateCameraShake(),this.circleTargets.forEach(c=>c.update()),this.ambientParticles.forEach(c=>{c.mesh.position.add(c.velocity);const u=Date.now()*.001;c.mesh.position.y+=Math.sin(u+c.originalY)*.01,c.mesh.position.x+=Math.cos(u*.5+c.originalY)*.005,c.mesh.rotation.x+=.001,c.mesh.rotation.y+=.002,c.mesh.position.x>20&&(c.mesh.position.x=-20,c.mesh.material.opacity=0),c.mesh.position.x<-20&&(c.mesh.position.x=20,c.mesh.material.opacity=0),c.mesh.position.y>5&&(c.mesh.position.y=-25,c.mesh.material.opacity=0),c.mesh.position.y<-25&&(c.mesh.position.y=5,c.mesh.material.opacity=0);const d=new Ie(c.mesh.position.x-5,c.mesh.position.y+10).length();c.life=(Math.sin(u+c.originalY)+1)*.5;const p=c.life*.4*(1-d/35);if(c.mesh.material.opacity+=(p-c.mesh.material.opacity)*.1,c.mesh.geometry.type==="SphereGeometry"){const v=(u*.1+c.originalY)%1;c.mesh.material.color.setHSL(v,.8,.5)}else if(c.mesh.geometry.type==="OctahedronGeometry"){const v=(u*.05+c.originalY)%1;c.mesh.material.color.setHSL(v,.5,.6)}const m=1+Math.sin(u*2+c.originalY)*.1;c.mesh.scale.setScalar(m)}),this.animationFrameId=requestAnimationFrame(()=>this.updateScene())}async onRotationStart(){return new Promise(e=>{fs.setGameRotation(!0),this.circleTargets.forEach(t=>{t.updatePositionWithCamera(this.camera.rotation.y)}),e()})}onRotationEnd(){fs.setGameRotation(!1),this.circleTargets.forEach(e=>{e.updatePositionWithCamera(this.camera.rotation.y)})}initializeAmbientParticles(){for(let t=0;t<200;t++){const i=Math.random();let o,a;i<.4?(o=new Ia(.05+Math.random()*.05,8,8),a=new on({color:new dt().setHSL(Math.random(),.8,.5),transparent:!0,opacity:Math.random()*.3+.1,blending:Ut})):i<.7?(o=new Of(.08+Math.random()*.05),a=new on({color:65535,transparent:!0,opacity:Math.random()*.4+.1,blending:Ut})):(o=new wi(.05,.3+Math.random()*.4),a=new on({color:new dt().setHSL(Math.random(),.5,.5),transparent:!0,opacity:Math.random()*.3+.1,blending:Ut,side:Kt}));const c=new wt(o,a);c.position.set(Math.random()*40-20,Math.random()*40-30,Math.random()*8-4),c.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),this.scene.add(c),this.ambientParticles.push({mesh:c,velocity:new V((Math.random()-.5)*.03,Math.random()*.02-.01,(Math.random()-.5)*.02),life:Math.random(),originalY:c.position.y})}}togglePause(){this.isPaused=!this.isPaused,this.isPaused?(this.dropIntervalId&&(clearInterval(this.dropIntervalId),this.dropIntervalId=null),this.timeoutId&&clearTimeout(this.timeoutId)):(this.startAutoDrop(),this.isInTargetMode&&(this.timeoutId=setTimeout(()=>{this.isInTargetMode&&this.completeTargetMode(!1)},4e3))),this.renderer.renderScene()}setupDifficultyIncrease(){this.difficultyIncreaseTimer=setInterval(()=>{!this.isPaused&&!this.gameOver&&this.increaseSpeed()},1e4)}increaseSpeed(){this.currentDropInterval>this.minDropInterval&&(this.currentDropInterval=Math.max(this.currentDropInterval-this.speedIncreaseAmount,this.minDropInterval),this.dropIntervalId&&clearInterval(this.dropIntervalId),this.startAutoDrop())}handleRestart(){this.currentDropInterval=this.initialDropInterval,this.difficultyIncreaseTimer&&clearInterval(this.difficultyIncreaseTimer),this.setupDifficultyIncrease(),this.startAutoDrop()}}const LA=({theme:r})=>{const e=Gg.useRef(null);return j.useEffect(()=>{const t=e.current;if(!t)return;const i=t.getContext("2d");if(!i)return;const o=Wn[r];if(!o)return;const a=20,c=8,u=8;t.width=c*a+2,t.height=u*a+2,i.fillStyle=`#${o.background.toString(16).padStart(6,"0")}`,i.fillRect(0,0,t.width,t.height),i.strokeStyle=`#${o.grid.toString(16).padStart(6,"0")}`,i.lineWidth=.5;for(let f=0;f<=c;f++)i.beginPath(),i.moveTo(f*a,0),i.lineTo(f*a,t.height),i.stroke();for(let f=0;f<=u;f++)i.beginPath(),i.moveTo(0,f*a),i.lineTo(t.width,f*a),i.stroke();i.strokeStyle=`#${o.border.toString(16).padStart(6,"0")}`,i.lineWidth=2,i.strokeRect(0,0,t.width,t.height),[[[1,1,1,1]],[[1,1],[1,1]],[[1,1,1],[0,1,0]],[[1,1,1],[1,0,0]],[[1,1,1],[0,0,1]],[[1,1,0],[0,1,1]],[[0,1,1],[1,1,0]]].forEach((f,p)=>{const m=o.colors[p],v=1+Math.floor(Math.random()*(c-f[0].length)),y=1+Math.floor(Math.random()*(u-f.length));f.forEach((w,M)=>{w.forEach((S,x)=>{if(S){i.fillStyle=`#${m.toString(16).padStart(6,"0")}`,i.fillRect((v+x)*a,(y+M)*a,a-1,a-1);const R=i.createLinearGradient((v+x)*a,(y+M)*a,(v+x+1)*a,(y+M+1)*a);R.addColorStop(0,`#${m.toString(16).padStart(6,"0")}99`),R.addColorStop(1,`#${m.toString(16).padStart(6,"0")}33`),i.fillStyle=R,i.fillRect((v+x)*a,(y+M)*a,a-1,a-1)}})})})},[r]),C.jsx("canvas",{ref:e,className:"border-2 border-gray-700 rounded-lg shadow-lg",style:{imageRendering:"pixelated"}})},NA="synthwave",Vg={W:"W",A:"A",S:"S",D:"D"," ":"SPACE",R:"R",MOUSE1:"MOUSE1"},IA=({onClose:r})=>{const[e,t]=j.useState(1),i=3,o=Gg.useRef(null),[a,c]=j.useState("right"),[u,d]=j.useState(!1),[f,p]=j.useState(3),[m,v]=j.useState(new Set),[y,w]=j.useState(""),[M,S]=j.useState({x:0,y:0}),[x,R]=j.useState(""),[T,E]=j.useState(""),B=()=>{if(e<i){c("right"),d(!0),p(3);const N=setInterval(()=>{p(Z=>(Z===1&&(clearInterval(N),t(e+1),d(!1)),Z-1))},1e3)}else r()},D=()=>{e===1?window.location.href="/":(c("left"),t(N=>N-1))},F=()=>{switch(e){case 1:return C.jsxs("div",{className:"space-y-4",children:[C.jsx("h3",{className:"text-xl text-white font-semibold mb-2 drop-shadow-glow",children:"Basic Controls"}),C.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:[{key:"W",action:"Rotate"},{key:"A",action:"Left"},{key:"S",action:"Down"},{key:"D",action:"Right"},{key:"SPACE",action:"Drop"},{key:"R",action:"Swap"},{key:"MOUSE1",action:"Click"}].map(N=>C.jsxs("div",{className:`flex items-center space-x-2 bg-gray-800/50 p-2 rounded-lg backdrop-blur-sm transition-all duration-300 ${m.has(N.key)?"bg-cyan-900/50 scale-105":""}`,children:[C.jsx("kbd",{className:`px-2 py-1 ${m.has(N.key)?"bg-cyan-500/50 border-cyan-300":"bg-cyan-500/30 border-cyan-400"} text-white text-sm border rounded-md font-mono shadow-glow transition-all duration-300`,children:N.key==="MOUSE1"?"🖱️":N.key}),C.jsx("span",{className:"text-white text-sm",children:N.action})]},N.key))})]});case 2:return C.jsxs("div",{className:"space-y-4",children:[C.jsx("h3",{className:"text-[2.5vh] text-white font-semibold mb-2 drop-shadow-glow",children:"Special Features"}),C.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:[{title:"Dynamic Camera",description:"Auto camera rotation with random interval",icon:"🎥"}].map(N=>C.jsxs("div",{className:"flex items-start space-x-4 bg-gray-800/50 p-[2vh] rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors",children:[C.jsx("span",{className:"text-[4vh]",children:N.icon}),C.jsxs("div",{children:[C.jsx("h4",{className:"text-cyan-200 text-[2.5vh] font-medium",children:N.title}),C.jsx("p",{className:"text-gray-100 text-[1.5vh]",children:N.description})]})]},N.title))}),C.jsx("div",{className:"space-y-4 mt-4",children:C.jsxs("div",{className:"flex flex-col sm:flex-row items-start space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 bg-gray-800/50 p-[2vh] rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors",children:[C.jsx("img",{src:"./assets/images/circle.png",alt:"Circle",className:"w-[12vh] h-[12vh] mx-auto sm:mx-0"}),C.jsxs("div",{children:[C.jsx("h4",{className:"text-cyan-200 text-[2.5vh] font-medium",children:"Circle Click"}),C.jsx("p",{className:"text-gray-100 text-[1.5vh]",children:"Make sure you click on the circle like this to earn score and clear the line"})]})]})})]});case 3:return C.jsxs("div",{className:"space-y-4",children:[C.jsx("h3",{className:"text-xl text-white font-semibold mb-2 drop-shadow-glow text-center",children:"Themes"}),C.jsx("div",{className:"grid grid-cols-2 gap-3",children:Object.entries(Wn).sort().map(([N])=>C.jsxs("div",{onClick:()=>{E(N),localStorage.setItem("selectedTheme",N),wA(N)},className:`relative cursor-pointer rounded-lg p-2 transition-all duration-300
                    ${T===N?"bg-cyan-500/20 ring-1 ring-cyan-400/50 scale-[1.02]":"bg-gray-900/50 hover:bg-gray-800/50"}`,children:[C.jsx("div",{className:"relative aspect-video mb-2 rounded-lg overflow-hidden",children:C.jsx(LA,{theme:N})}),C.jsx("div",{className:"text-sm text-white font-medium text-center",children:N.charAt(0).toUpperCase()+N.slice(1)})]},N))})]});default:return null}},k=j.useMemo(()=>{const N=[];for(let Z=0;Z<60;Z++)N.push({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,speedX:(Math.random()-.5)*.5,speedY:(Math.random()-.5)*.5,size:Math.random()*3+1,color:`hsla(${180+Math.random()*60}, 100%, 70%, ${.3+Math.random()*.2})`});return N},[]);j.useEffect(()=>{const N=q=>{const Q=Vg[q.key]||q.key.toUpperCase();v(ce=>new Set(ce).add(Q)),q.key==="Escape"&&r(),q.key==="ArrowRight"&&e<i&&t(e+1),q.key==="ArrowLeft"&&e>1&&t(e-1)},Z=q=>{const Q=Vg[q.key]||q.key.toUpperCase();v(ce=>{const G=new Set(ce);return G.delete(Q),G})},X=q=>{v(Q=>new Set(Q).add("MOUSE1"))},te=()=>{v(q=>{const Q=new Set(q);return Q.delete("MOUSE1"),Q})};return window.addEventListener("keydown",N),window.addEventListener("keyup",Z),window.addEventListener("mousedown",X),window.addEventListener("mouseup",te),()=>{window.removeEventListener("keydown",N),window.removeEventListener("keyup",Z),window.removeEventListener("mousedown",X),window.removeEventListener("mouseup",te)}},[e,r]);const L=j.useCallback(N=>{N.clearRect(0,0,window.innerWidth,window.innerHeight);const Z=window.innerWidth,X=window.innerHeight;if(!y){const q=N.createRadialGradient(Z/2,X/2,0,Z/2,X/2,Z/2);q.addColorStop(0,"rgba(0, 40, 80, 0.8)"),q.addColorStop(.5,"rgba(0, 20, 40, 0.9)"),q.addColorStop(1,"rgba(0, 10, 20, 0.95)"),N.fillStyle=q,N.fillRect(0,0,Z,X)}const te=k.map((q,Q)=>(q.x=(q.x+q.speedX+Z)%Z,q.y=(q.y+q.speedY+X)%X,q));if(N.save(),te.forEach((q,Q)=>{var Ue;const ce=Math.sin(Date.now()*.002+Q*.1)*.2+.8,G=N.createRadialGradient(q.x,q.y,0,q.x,q.y,q.size*2),he=((Ue=q.color.match(/hsla\(([^)]+)\)/))==null?void 0:Ue[1].split(","))||[],[oe,H,se]=he;G.addColorStop(0,`hsla(${oe}, ${H}, ${se}, ${ce})`),G.addColorStop(1,"transparent"),N.fillStyle=G,N.beginPath(),N.arc(q.x,q.y,q.size*2,0,Math.PI*2),N.fill()}),N.restore(),!y){N.save();for(let q=0;q<k.length;q+=2){const Q=k[q];for(let ce=q+1;ce<k.length;ce+=2){const G=k[ce],he=Q.x-G.x,oe=Q.y-G.y,H=Math.sqrt(he*he+oe*oe);if(H<100){const se=(1-H/100)*.15;N.strokeStyle=`rgba(0, 255, 255, ${se})`,N.lineWidth=1-H/100,N.beginPath(),N.moveTo(Q.x,Q.y),N.lineTo(G.x,G.y),N.stroke()}}}N.restore()}},[k,y]),b=N=>{if(!N)return"rgba(2, 6, 23, 0.95)";const X=Wn[N].background,te=X>>16&255,q=X>>8&255,Q=X&255;return`rgba(${te}, ${q}, ${Q}, 0.95)`};return j.useEffect(()=>{const N=o.current;N&&(N.style.backgroundColor=b(T))},[T]),j.useEffect(()=>{const N=o.current;if(!N)return;const Z=N.getContext("2d",{alpha:!1});if(!Z)return;N.width=window.innerWidth,N.height=window.innerHeight;let X,te=0;const Q=1e3/60,ce=he=>{X=requestAnimationFrame(ce);const oe=he-te;oe<Q||(te=he-oe%Q,L(Z))};X=requestAnimationFrame(ce);const G=()=>{N.width=window.innerWidth,N.height=window.innerHeight};return window.addEventListener("resize",G),()=>{cancelAnimationFrame(X),window.removeEventListener("resize",G)}},[L]),j.useEffect(()=>{if(!T){const N=localStorage.getItem("selectedTheme")||NA;E(N)}},[]),C.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50 p-2 animate-fadeIn",children:[C.jsxs("div",{className:"fixed inset-0",children:[C.jsx("canvas",{ref:o,className:"absolute inset-0 w-full h-full",style:{backgroundColor:b(T),transition:"background-color 0.5s ease-in-out"}}),C.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-purple-600/30"}),C.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`
              linear-gradient(to right, rgba(99, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 255, 255, 0.15) 1px, transparent 1px)
            `,backgroundSize:"3vh 3vh",animation:"grid-move 15s linear infinite"}}),C.jsx("div",{className:"absolute inset-0 opacity-20",children:C.jsx("div",{className:"absolute inset-0 bg-repeat",style:{backgroundImage:`
                linear-gradient(45deg, transparent 48%, rgba(0, 255, 255, 0.1) 50%, transparent 52%),
                linear-gradient(-45deg, transparent 48%, rgba(0, 255, 255, 0.1) 50%, transparent 52%)
              `,backgroundSize:"6vh 6vh",animation:"pattern-move 20s linear infinite"}})}),C.jsxs("div",{className:"absolute w-full h-full overflow-hidden",children:[C.jsx("div",{className:"absolute top-1/4 left-1/4 w-[24vh] h-[24vh] bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow"}),C.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-[28vh] h-[28vh] bg-blue-400/20 rounded-full blur-3xl animate-float-slow"}),C.jsx("div",{className:"absolute top-1/2 left-1/2 w-[32vh] h-[32vh] bg-purple-400/20 rounded-full blur-3xl animate-spin-slow"})]}),y==="keypress"&&C.jsxs("div",{className:"absolute inset-0 animate-ripple-fast",children:[C.jsx("div",{className:`absolute inset-0 ${x||"from-cyan-500/10"} via-transparent to-transparent bg-gradient-radial animate-pulse-fast`}),C.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${x||"from-cyan-500/5"} via-transparent to-transparent opacity-80`})]}),y==="click"&&C.jsx("div",{className:"absolute pointer-events-none",style:{left:M.x,top:M.y,transform:"translate(-50%, -50%)"},children:C.jsxs("div",{className:"absolute w-[50vh] h-[50vh] -translate-x-1/2 -translate-y-1/2",children:[C.jsx("div",{className:"absolute inset-0 bg-blue-500/20 rounded-full animate-ripple-out"}),C.jsx("div",{className:"absolute inset-0 bg-cyan-500/10 rounded-full animate-ripple-out-delayed"})]})})]}),C.jsxs("div",{className:"relative max-w-full p-4 sm:p-8",children:[C.jsxs("div",{className:"text-[6vh] sm:text-[9vh] font-bold text-white mb-6 text-center text-shadow-glow animate-slideDown relative group",children:[C.jsx("span",{className:"inline-block animate-float-title transition-all duration-300",children:"2"}),C.jsx("span",{className:"inline-block animate-float-title-delayed mx-2",children:"5"}),C.jsx("span",{className:"inline-block animate-float-title-more-delayed",children:"-"}),C.jsx("span",{className:"inline-block animate-float-title",children:"2"}),C.jsx("div",{className:"absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 group-hover:via-cyan-500/20 transition-all duration-500"})]}),C.jsxs("div",{className:"relative bg-gray-900/80 border-2 border-cyan-400/50 rounded-xl p-4 sm:p-8 max-w-3xl w-full mx-auto backdrop-blur-md animate-slideUp",children:[C.jsx("div",{className:"absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 opacity-50 animate-pulse"}),C.jsxs("div",{className:"relative bg-gray-900/90 p-4 sm:p-8 rounded-lg overflow-hidden",children:[C.jsx("div",{className:"absolute -top-4 -right-4 animate-bounce-slow",children:C.jsx("button",{onClick:r,className:"bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none transition-all duration-300 transform hover:scale-110 hover:rotate-180 active:scale-95",children:"×"})}),C.jsxs("h2",{className:"text-[3vh] sm:text-[4vh] sm:text-[5vh] font-bold text-white mb-6 text-center text-shadow-glow animate-slideDown relative group",children:[C.jsx("span",{className:"inline-block animate-float-title transition-all duration-300",children:"HOW"}),C.jsx("span",{className:"inline-block animate-float-title-delayed mx-2",children:"TO"}),C.jsx("span",{className:"inline-block animate-float-title-more-delayed",children:"PLAY"}),C.jsx("div",{className:"absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 group-hover:via-cyan-500/20 transition-all duration-500"})]}),C.jsx("div",{className:"text-white text-shadow-sm",children:C.jsx("div",{className:`transition-all duration-500 transform ${a==="right"?"animate-slideInRight":"animate-slideInLeft"}`,children:F()},e)}),C.jsxs("div",{className:"mt-8 flex items-center justify-between animate-fadeIn",children:[C.jsxs("button",{onClick:D,className:`px-4 sm:px-6 py-2 rounded-lg text-white font-medium relative overflow-hidden group 
                  bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 
                  transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 
                  active:scale-95`,children:[C.jsx("span",{className:"relative z-10",children:e===1?"Back to Home":"Previous"}),C.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-1"}),C.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)]"})]}),C.jsx("div",{className:"flex space-x-3",children:Array.from({length:i}).map((N,Z)=>C.jsxs("div",{className:`relative ${Z+1===e?"scale-125":""} transition-all duration-300`,children:[C.jsx("div",{className:`w-[1vh] h-[1vh] rounded-full transition-all duration-500 ${Z+1===e?"bg-cyan-400 animate-ping-slow":"bg-gray-600 hover:bg-gray-400"}`}),Z+1===e&&C.jsx("div",{className:"absolute inset-0 bg-cyan-400/30 rounded-full animate-ripple"})]},Z))}),C.jsxs("button",{onClick:B,disabled:u,className:`px-4 sm:px-6 py-2 text-white rounded-lg font-medium relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 active:scale-95 ${u?"opacity-50 cursor-not-allowed":""}`,children:[C.jsx("span",{className:"relative z-10 group-hover:animate-pulse-fast",children:u?`Please wait... ${f}`:e===i?"Start":"Next"}),C.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),C.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)]"}),C.jsx("div",{className:"absolute -inset-px bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x"})]})]})]})]})]})]})},DA=`
  @keyframes grid-move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 30px 30px;
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-20px) scale(1.1);
    }
  }

  @keyframes float-delayed {
    0%, 100% {
      transform: translateY(0) scale(1.1);
    }
    50% {
      transform: translateY(-25px) scale(1);
    }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-float-delayed {
    animation: float-delayed 7s ease-in-out infinite;
  }

  .drop-shadow-glow {
    filter: drop-shadow(0 0 10px rgba(99, 255, 255, 0.5));
  }

  .text-shadow-glow {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
                 0 0 20px rgba(99, 255, 255, 0.3),
                 0 0 30px rgba(99, 255, 255, 0.2);
  }

  .text-shadow-bright {
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
  }

  .text-shadow-sm {
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.3);
  }

  .shadow-glow {
    box-shadow: 0 0 10px rgba(99, 255, 255, 0.3);
  }

  @keyframes pattern-move {
    0% { background-position: 0 0; }
    100% { background-position: 60px 60px; }
  }

  @keyframes pulse-slow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.2); }
  }

  @keyframes float-slow {
    0%, 100% { transform: translateY(0) scale(1.1); }
    50% { transform: translateY(-30px) scale(1); }
  }

  @keyframes spin-slow {
    from { transform: rotate(0deg) scale(1); }
    to { transform: rotate(360deg) scale(1.2); }
  }

  .animate-pulse-slow {
    animation: pulse-slow 8s ease-in-out infinite;
  }

  .animate-float-slow {
    animation: float-slow 10s ease-in-out infinite;
  }

  .animate-spin-slow {
    animation: spin-slow 15s linear infinite;
  }

  @keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes slideDown {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes slideInRight {
    from { transform: translateX(50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes ping-slow {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.5); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .animate-slideUp {
    animation: slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .animate-slideDown {
    animation: slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .animate-slideInRight {
    animation: slideInRight 0.4s ease-out forwards;
  }

  .animate-slideInLeft {
    animation: slideInLeft 0.4s ease-out forwards;
  }

  .animate-fadeIn {
    animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .animate-ping-slow {
    animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .animate-bounce-slow {
    animation: bounce-slow 2s ease-in-out infinite;
  }

  @keyframes ripple {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .animate-ripple {
    animation: ripple 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .hover-glow {
    transition: all 0.3s ease;
  }

  .hover-glow:hover {
    box-shadow: 0 0 15px rgba(99, 255, 255, 0.5);
    transform: translateY(-2px);
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes shine {
    from {
      transform: translateX(-100%) rotate(45deg);
    }
    to {
      transform: translateX(100%) rotate(45deg);
    }
  }

  .shine-effect::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    animation: shine 3s infinite;
  }

  @keyframes float-title {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-5px) rotate(2deg); }
  }

  @keyframes float-title-delayed {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-5px) rotate(-2deg); }
  }

  @keyframes float-title-more-delayed {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-5px) rotate(1deg); }
  }

  .animate-float-title {
    animation: float-title 3s ease-in-out infinite;
    display: inline-block;
  }

  .animate-float-title-delayed {
    animation: float-title-delayed 3s ease-in-out infinite;
    display: inline-block;
  }

  .animate-float-title-more-delayed {
    animation: float-title-more-delayed 3s ease-in-out infinite;
    display: inline-block;
  }

  @keyframes gradient-x {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes pulse-fast {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .animate-float-title {
    animation: float-title 3s ease-in-out infinite;
    display: inline-block;
  }

  .animate-float-title-delayed {
    animation: float-title-delayed 3s ease-in-out infinite;
    display: inline-block;
  }

  .animate-float-title-more-delayed {
    animation: float-title-more-delayed 3s ease-in-out infinite;
    display: inline-block;
  }

  .animate-gradient-x {
    animation: gradient-x 3s linear infinite;
    background-size: 200% 200%;
  }

  .animate-pulse-fast {
    animation: pulse-fast 1s ease-in-out infinite;
  }

  .hover-lift {
    transition: transform 0.2s ease;
  }

  .hover-lift:hover {
    transform: translateY(-2px);
  }

  .hover-glow {
    transition: all 0.3s ease;
  }

  .hover-glow:hover {
    box-shadow: 0 0 15px rgba(99, 255, 255, 0.5);
    text-shadow: 0 0 8px rgba(99, 255, 255, 0.8);
  }

  .shadow-glow-intense {
    box-shadow: 0 0 15px rgba(99, 255, 255, 0.8),
                0 0 30px rgba(99, 255, 255, 0.6);
  }

  @keyframes key-press {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  .animate-key-press {
    animation: key-press 0.2s ease-in-out;
  }

  @keyframes ripple-out {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
  }

  @keyframes ripple-out-delayed {
    0% { transform: scale(0); opacity: 0.8; }
    100% { transform: scale(1); opacity: 0; }
  }

  @keyframes ripple-fast {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  .animate-ripple-out {
    animation: ripple-out 0.8s ease-out forwards;
  }

  .animate-ripple-out-delayed {
    animation: ripple-out-delayed 1s ease-out forwards;
  }

  .animate-ripple-fast {
    animation: ripple-fast 0.3s ease-out forwards;
  }

  .bg-gradient-radial {
    background-image: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 70%);
  }

  @keyframes ripple-glow {
    0% { opacity: 0.8; transform: scale(0.8); filter: brightness(1); }
  }

  .animate-ripple-glow {
    animation: ripple-glow 0.8s ease-out forwards;
  }

  .bg-gradient-animated {
    background-size: 200% 200%;
    animation: gradient-shift 3s ease infinite;
  }

  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`,Xv=document.createElement("style");Xv.innerText=DA;document.head.appendChild(Xv);const UA=({score:r,onClose:e})=>{const t=()=>{const i=window.open("https://bluejack.binus.ac.id/nar/home/registration","_blank","noopener,noreferrer");i&&i.focus()};return C.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50 animate-fadeIn",children:[C.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm"}),C.jsxs("div",{className:`relative bg-gray-900/90 border-2 border-white rounded-xl p-8 max-w-md w-full mx-auto 
                          backdrop-blur-md animate-slideUp`,children:[C.jsx("div",{className:`absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 
                              opacity-50 animate-pulse`}),C.jsxs("div",{className:"relative space-y-6 text-center",children:[C.jsx("h2",{className:"text-4xl font-bold text-white mb-6 text-shadow-glow animate-slideDown",children:"Game Over!"}),C.jsxs("div",{className:"text-2xl text-white mb-8 animate-float",children:["Final Score: ",r]}),C.jsx("div",{className:"space-y-4",children:C.jsx("button",{onClick:t,className:`w-full px-6 py-3 text-lg font-semibold text-white rounded-lg 
                                     bg-gradient-to-r from-cyan-500 to-blue-500 
                                     hover:from-cyan-400 hover:to-blue-400 
                                     transition-all duration-300 transform hover:scale-105 
                                     hover:shadow-xl hover:shadow-cyan-500/25 
                                     active:scale-95`,children:"Continue"})})]})]})]})},FA=({onClose:r,onRestart:e})=>{const t=Hc();return j.useEffect(()=>{const i=o=>{o.key==="Escape"&&r()};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[r]),C.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50",children:C.jsxs("div",{className:"bg-white/20 p-8 rounded-xl border-2 border-white/50 max-w-md w-full mx-4 shadow-2xl backdrop-blur-lg transform animate-slideDown",children:[C.jsx("h2",{className:"text-3xl font-bold text-white mb-8 text-center drop-shadow-glow",children:"Settings"}),C.jsxs("div",{className:"space-y-4",children:[C.jsx("button",{onClick:e,className:`w-full py-4 px-6 rounded-lg bg-gradient-to-r from-white/80 to-pink-400/80 text-gray-800 font-bold 
                     hover:from-white hover:to-pink-400 transition-all duration-300 transform hover:scale-105 
                     hover:shadow-lg active:scale-95 backdrop-blur-sm`,children:"Restart Game"}),C.jsx("button",{onClick:()=>t("/"),className:`w-full py-4 px-6 rounded-lg bg-gradient-to-r from-white/80 to-purple-400/80 text-gray-800 font-bold 
                     hover:from-white hover:to-purple-400 transition-all duration-300 transform hover:scale-105 
                     hover:shadow-lg active:scale-95 backdrop-blur-sm`,children:"Back to Home"})]})]})})},kA=()=>{const r=j.useRef(null),[e,t]=j.useState(!0),[i,o]=j.useState({tetromino:0,startX:3,startY:0}),a=j.useRef(null),c=j.useRef(0),u=j.useRef(!1),d=j.useRef(null),f=j.useRef(null),[p,m]=j.useState(!1),[v,y]=j.useState(0),[w,M]=j.useState(!1),[S,x]=j.useState(!1);j.useEffect(()=>{const k=()=>{x(window.innerWidth<768)};return window.addEventListener("resize",k),k(),()=>window.removeEventListener("resize",k)},[]);const R=k=>{y(k),m(!0)},T=()=>{m(!1),a.current&&(a.current=null),E()},E=()=>{const k=new V1;k.background=new dt(Di.background);const L=new Gn(75,window.innerWidth/window.innerHeight,.1,1e3);L.position.set(5,-10,16),L.lookAt(5,-10,0);const b=new an;b.position.set(5,-10,0),k.add(b),b.add(L),L.position.set(0,0,16),f.current=b;const N=new SA({antialias:!0,alpha:!0,powerPreference:"high-performance"});N.setPixelRatio(window.devicePixelRatio),N.setSize(window.innerWidth,window.innerHeight),N.setClearColor(0,0),N.gammaFactor=2.2,N.outputEncoding=void 0;const Z=()=>{L.aspect=window.innerWidth/window.innerHeight,L.updateProjectionMatrix(),N.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",Z),Z();const X=r.current;if(!X)return;X.innerHTML="",X.appendChild(N.domElement);const te=new PA(k,L,o);a.current=te,te.onGameOver=R,te.spawnNewTetromino();const q=te.renderGridBorders(10,20);k.add(q);let Q=0;const ce=he=>{he-Q>=16&&(N.render(k,L),te&&te.updateScene(),Q=he),requestAnimationFrame(ce)};requestAnimationFrame(ce);const G=()=>{d.current&&clearInterval(d.current);const he=async()=>{if(!u.current&&f.current){let H=function(){const fe=Date.now()-Ue,Me=Math.min(fe/ie,1),ve=1-Math.pow(1-Me,3),Le=c.current+Math.PI*ve;f.current.rotation.y=Le,Me<1?requestAnimationFrame(H):(c.current=se,setTimeout(()=>{const Be=Date.now();function Xe(){const gt=Date.now()-Be,xe=Math.min(gt/ie,1),be=1-Math.pow(1-xe,3),O=se-Math.PI*be;f.current.rotation.y=O,xe<1?requestAnimationFrame(Xe):(c.current=se-Math.PI,u.current=!1,a.current&&(console.log("rotation end"),a.current.onRotationEnd()))}Xe()},5e3+Math.random()*1e4))};a.current&&a.current.onRotationStart(),u.current=!0;const se=c.current+Math.PI,Ue=Date.now(),ie=1e3;H()}},oe=()=>{const H=3e4+Math.random()*1e4;d.current=setTimeout(()=>{he(),oe()},H)};oe()};return setTimeout(()=>{G()},1e3),()=>{X&&X.contains(N.domElement)&&X.removeChild(N.domElement),window.removeEventListener("resize",Z),N.dispose(),a.current=null,d.current&&(clearInterval(d.current),d.current=null),f.current=null}};j.useEffect(()=>{localStorage.getItem("skipTutorial")==="true"&&(t(!1),localStorage.removeItem("skipTutorial"))},[]),j.useEffect(()=>{if(!e){const k=E(),L=b=>{a.current&&a.current.handleKeyPress(b)};return window.addEventListener("keydown",L),()=>{var N;k(),window.removeEventListener("keydown",L),(N=a.current)!=null&&N.dropIntervalId&&clearInterval(a.current.dropIntervalId);const b=document.querySelector(".fixed.bottom-4.right-4");b&&b.remove()}}},[e]),j.useEffect(()=>{const k=L=>{L.key==="Escape"&&M(b=>(a.current,!b))};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[]);const B=()=>{M(!0),a.current&&a.current.togglePause()},D=()=>{M(!1),a.current&&a.current.togglePause()},F=()=>{M(!1),m(!1),localStorage.setItem("skipTutorial","true"),window.location.reload()};return S?C.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-white p-8",children:C.jsxs("div",{className:"animate-float-slow text-center space-y-6 max-w-md",children:[C.jsx("h1",{className:"text-2xl font-bold animate-fade-in-up mb-4 text-shadow-neon",children:"Desktop Experience Required"}),C.jsxs("p",{className:"text-lg mb-8 ",children:["please switch to a"," ",C.jsx("span",{className:"text-sky font-bold ",children:"laptop"})," or"," ",C.jsx("span",{className:"text-sky font-bold ",children:"PC"})," to play the game."]}),C.jsxs("button",{onClick:()=>window.location.href="/",className:"group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 animate-fade-in-up-delay-2",children:[C.jsx("div",{className:"absolute inset-0 rounded-full bg-black blur-lg opacity-50 group-hover:opacity-75 transition-opacity"}),C.jsxs("div",{className:"relative flex items-center justify-center  text-black",children:[C.jsx("svg",{className:"w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),C.jsx("span",{className:"group-hover:translate-x-1 transition-transform",children:"Return to Home"})]})]})]})}):C.jsxs("div",{className:"relative overflow-hidden hide-scrollbar",children:[C.jsx("div",{className:"fixed inset-0 bg-black z-50 pointer-events-none transition-opacity duration-300 opacity-0"}),C.jsx("button",{onClick:B,className:"fixed top-4 left-4 z-50 p-3 rounded-full bg-white border border-cyan-500/30 hover:bg-white transition-all duration-300 group backdrop-blur-sm",children:C.jsxs("svg",{className:"w-6 h-6 text-cyan-400 group-hover:rotate-90 transition-transform duration-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}),w&&C.jsx(FA,{onClose:D,onRestart:F}),e&&C.jsx(IA,{onClose:()=>t(!1)}),p&&C.jsx(UA,{score:v,onClose:T}),C.jsx("div",{ref:r,style:{width:"100%",height:"100vh"}})]})};function OA(){return C.jsx(oS,{children:C.jsxs(F_,{children:[C.jsx(_c,{path:"/game",element:C.jsx(kA,{})}),C.jsx(_c,{path:"/",element:C.jsx(AS,{})}),C.jsx(_c,{path:"*",element:C.jsx(D_,{to:"/",replace:!0})})]})})}Fy.createRoot(document.getElementById("root")).render(C.jsx(j.StrictMode,{children:C.jsx(OA,{})}));
