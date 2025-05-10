var fy=Object.defineProperty;var py=(s,e,t)=>e in s?fy(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ne=(s,e,t)=>py(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function my(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Eh={exports:{}},ha={},Th={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function gy(){if(o0)return St;o0=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function v(H){return H===null||typeof H!="object"?null:(H=g&&H[g]||H["@@iterator"],typeof H=="function"?H:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function S(H,se,Ue){this.props=H,this.context=se,this.refs=M,this.updater=Ue||y}S.prototype.isReactComponent={},S.prototype.setState=function(H,se){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,se,"setState")},S.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function x(){}x.prototype=S.prototype;function A(H,se,Ue){this.props=H,this.context=se,this.refs=M,this.updater=Ue||y}var T=A.prototype=new x;T.constructor=A,w(T,S.prototype),T.isPureReactComponent=!0;var E=Array.isArray,z=Object.prototype.hasOwnProperty,D={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function k(H,se,Ue){var ie,fe={},Me=null,ve=null;if(se!=null)for(ie in se.ref!==void 0&&(ve=se.ref),se.key!==void 0&&(Me=""+se.key),se)z.call(se,ie)&&!F.hasOwnProperty(ie)&&(fe[ie]=se[ie]);var Le=arguments.length-2;if(Le===1)fe.children=Ue;else if(1<Le){for(var ze=Array(Le),Xe=0;Xe<Le;Xe++)ze[Xe]=arguments[Xe+2];fe.children=ze}if(H&&H.defaultProps)for(ie in Le=H.defaultProps,Le)fe[ie]===void 0&&(fe[ie]=Le[ie]);return{$$typeof:s,type:H,key:Me,ref:ve,props:fe,_owner:D.current}}function P(H,se){return{$$typeof:s,type:H.type,key:se,ref:H.ref,props:H.props,_owner:H._owner}}function b(H){return typeof H=="object"&&H!==null&&H.$$typeof===s}function N(H){var se={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(Ue){return se[Ue]})}var K=/\/+/g;function $(H,se){return typeof H=="object"&&H!==null&&H.key!=null?N(""+H.key):se.toString(36)}function te(H,se,Ue,ie,fe){var Me=typeof H;(Me==="undefined"||Me==="boolean")&&(H=null);var ve=!1;if(H===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(H.$$typeof){case s:case e:ve=!0}}if(ve)return ve=H,fe=fe(ve),H=ie===""?"."+$(ve,0):ie,E(fe)?(Ue="",H!=null&&(Ue=H.replace(K,"$&/")+"/"),te(fe,se,Ue,"",function(Xe){return Xe})):fe!=null&&(b(fe)&&(fe=P(fe,Ue+(!fe.key||ve&&ve.key===fe.key?"":(""+fe.key).replace(K,"$&/")+"/")+H)),se.push(fe)),1;if(ve=0,ie=ie===""?".":ie+":",E(H))for(var Le=0;Le<H.length;Le++){Me=H[Le];var ze=ie+$(Me,Le);ve+=te(Me,se,Ue,ze,fe)}else if(ze=v(H),typeof ze=="function")for(H=ze.call(H),Le=0;!(Me=H.next()).done;)Me=Me.value,ze=ie+$(Me,Le++),ve+=te(Me,se,Ue,ze,fe);else if(Me==="object")throw se=String(H),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return ve}function J(H,se,Ue){if(H==null)return H;var ie=[],fe=0;return te(H,ie,"","",function(Me){return se.call(Ue,Me,fe++)}),ie}function Q(H){if(H._status===-1){var se=H._result;se=se(),se.then(function(Ue){(H._status===0||H._status===-1)&&(H._status=1,H._result=Ue)},function(Ue){(H._status===0||H._status===-1)&&(H._status=2,H._result=Ue)}),H._status===-1&&(H._status=0,H._result=se)}if(H._status===1)return H._result.default;throw H._result}var ce={current:null},G={transition:null},he={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:G,ReactCurrentOwner:D};function oe(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:J,forEach:function(H,se,Ue){J(H,function(){se.apply(this,arguments)},Ue)},count:function(H){var se=0;return J(H,function(){se++}),se},toArray:function(H){return J(H,function(se){return se})||[]},only:function(H){if(!b(H))throw Error("React.Children.only expected to receive a single React element child.");return H}},St.Component=S,St.Fragment=t,St.Profiler=o,St.PureComponent=A,St.StrictMode=i,St.Suspense=d,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,St.act=oe,St.cloneElement=function(H,se,Ue){if(H==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+H+".");var ie=w({},H.props),fe=H.key,Me=H.ref,ve=H._owner;if(se!=null){if(se.ref!==void 0&&(Me=se.ref,ve=D.current),se.key!==void 0&&(fe=""+se.key),H.type&&H.type.defaultProps)var Le=H.type.defaultProps;for(ze in se)z.call(se,ze)&&!F.hasOwnProperty(ze)&&(ie[ze]=se[ze]===void 0&&Le!==void 0?Le[ze]:se[ze])}var ze=arguments.length-2;if(ze===1)ie.children=Ue;else if(1<ze){Le=Array(ze);for(var Xe=0;Xe<ze;Xe++)Le[Xe]=arguments[Xe+2];ie.children=Le}return{$$typeof:s,type:H.type,key:fe,ref:Me,props:ie,_owner:ve}},St.createContext=function(H){return H={$$typeof:c,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},H.Provider={$$typeof:a,_context:H},H.Consumer=H},St.createElement=k,St.createFactory=function(H){var se=k.bind(null,H);return se.type=H,se},St.createRef=function(){return{current:null}},St.forwardRef=function(H){return{$$typeof:u,render:H}},St.isValidElement=b,St.lazy=function(H){return{$$typeof:p,_payload:{_status:-1,_result:H},_init:Q}},St.memo=function(H,se){return{$$typeof:f,type:H,compare:se===void 0?null:se}},St.startTransition=function(H){var se=G.transition;G.transition={};try{H()}finally{G.transition=se}},St.unstable_act=oe,St.useCallback=function(H,se){return ce.current.useCallback(H,se)},St.useContext=function(H){return ce.current.useContext(H)},St.useDebugValue=function(){},St.useDeferredValue=function(H){return ce.current.useDeferredValue(H)},St.useEffect=function(H,se){return ce.current.useEffect(H,se)},St.useId=function(){return ce.current.useId()},St.useImperativeHandle=function(H,se,Ue){return ce.current.useImperativeHandle(H,se,Ue)},St.useInsertionEffect=function(H,se){return ce.current.useInsertionEffect(H,se)},St.useLayoutEffect=function(H,se){return ce.current.useLayoutEffect(H,se)},St.useMemo=function(H,se){return ce.current.useMemo(H,se)},St.useReducer=function(H,se,Ue){return ce.current.useReducer(H,se,Ue)},St.useRef=function(H){return ce.current.useRef(H)},St.useState=function(H){return ce.current.useState(H)},St.useSyncExternalStore=function(H,se,Ue){return ce.current.useSyncExternalStore(H,se,Ue)},St.useTransition=function(){return ce.current.useTransition()},St.version="18.3.1",St}var a0;function cf(){return a0||(a0=1,Th.exports=gy()),Th.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function vy(){if(l0)return ha;l0=1;var s=cf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,f){var p,g={},v=null,y=null;f!==void 0&&(v=""+f),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(y=d.ref);for(p in d)i.call(d,p)&&!a.hasOwnProperty(p)&&(g[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:u,key:v,ref:y,props:g,_owner:o.current}}return ha.Fragment=t,ha.jsx=c,ha.jsxs=c,ha}var c0;function xy(){return c0||(c0=1,Eh.exports=vy()),Eh.exports}var R=xy(),Y=cf();const Og=my(Y);var Xl={},bh={exports:{}},Hn={},Ah={exports:{}},Ch={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function yy(){return u0||(u0=1,function(s){function e(G,he){var oe=G.length;G.push(he);e:for(;0<oe;){var H=oe-1>>>1,se=G[H];if(0<o(se,he))G[H]=he,G[oe]=se,oe=H;else break e}}function t(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var he=G[0],oe=G.pop();if(oe!==he){G[0]=oe;e:for(var H=0,se=G.length,Ue=se>>>1;H<Ue;){var ie=2*(H+1)-1,fe=G[ie],Me=ie+1,ve=G[Me];if(0>o(fe,oe))Me<se&&0>o(ve,fe)?(G[H]=ve,G[Me]=oe,H=Me):(G[H]=fe,G[ie]=oe,H=ie);else if(Me<se&&0>o(ve,oe))G[H]=ve,G[Me]=oe,H=Me;else break e}}return he}function o(G,he){var oe=G.sortIndex-he.sortIndex;return oe!==0?oe:G.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();s.unstable_now=function(){return c.now()-u}}var d=[],f=[],p=1,g=null,v=3,y=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(G){for(var he=t(f);he!==null;){if(he.callback===null)i(f);else if(he.startTime<=G)i(f),he.sortIndex=he.expirationTime,e(d,he);else break;he=t(f)}}function E(G){if(M=!1,T(G),!w)if(t(d)!==null)w=!0,Q(z);else{var he=t(f);he!==null&&ce(E,he.startTime-G)}}function z(G,he){w=!1,M&&(M=!1,x(k),k=-1),y=!0;var oe=v;try{for(T(he),g=t(d);g!==null&&(!(g.expirationTime>he)||G&&!N());){var H=g.callback;if(typeof H=="function"){g.callback=null,v=g.priorityLevel;var se=H(g.expirationTime<=he);he=s.unstable_now(),typeof se=="function"?g.callback=se:g===t(d)&&i(d),T(he)}else i(d);g=t(d)}if(g!==null)var Ue=!0;else{var ie=t(f);ie!==null&&ce(E,ie.startTime-he),Ue=!1}return Ue}finally{g=null,v=oe,y=!1}}var D=!1,F=null,k=-1,P=5,b=-1;function N(){return!(s.unstable_now()-b<P)}function K(){if(F!==null){var G=s.unstable_now();b=G;var he=!0;try{he=F(!0,G)}finally{he?$():(D=!1,F=null)}}else D=!1}var $;if(typeof A=="function")$=function(){A(K)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,J=te.port2;te.port1.onmessage=K,$=function(){J.postMessage(null)}}else $=function(){S(K,0)};function Q(G){F=G,D||(D=!0,$())}function ce(G,he){k=S(function(){G(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){w||y||(w=!0,Q(z))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(G){switch(v){case 1:case 2:case 3:var he=3;break;default:he=v}var oe=v;v=he;try{return G()}finally{v=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,he){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var oe=v;v=G;try{return he()}finally{v=oe}},s.unstable_scheduleCallback=function(G,he,oe){var H=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?H+oe:H):oe=H,G){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=oe+se,G={id:p++,callback:he,priorityLevel:G,startTime:oe,expirationTime:se,sortIndex:-1},oe>H?(G.sortIndex=oe,e(f,G),t(d)===null&&G===t(f)&&(M?(x(k),k=-1):M=!0,ce(E,oe-H))):(G.sortIndex=se,e(d,G),w||y||(w=!0,Q(z))),G},s.unstable_shouldYield=N,s.unstable_wrapCallback=function(G){var he=v;return function(){var oe=v;v=he;try{return G.apply(this,arguments)}finally{v=oe}}}}(Ch)),Ch}var h0;function _y(){return h0||(h0=1,Ah.exports=yy()),Ah.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function Sy(){if(d0)return Hn;d0=1;var s=cf(),e=_y();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(o[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function v(n){return d.call(g,n)?!0:d.call(p,n)?!1:f.test(n)?g[n]=!0:(p[n]=!0,!1)}function y(n,r,l,h){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,r,l,h){if(r===null||typeof r>"u"||y(n,r,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,l,h,m,_,C){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=h,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=_,this.removeEmptyString=C}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function A(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,A);S[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,A);S[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,A);S[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function T(n,r,l,h){var m=S.hasOwnProperty(r)?S[r]:null;(m!==null?m.type!==0:h||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(w(r,l,m,h)&&(l=null),h||m===null?v(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,h=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,h?n.setAttributeNS(h,r,l):n.setAttribute(r,l))))}var E=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),D=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),N=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),G=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,H;function se(n){if(H===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);H=r&&r[1]||""}return`
`+H+n}var Ue=!1;function ie(n,r){if(!n||Ue)return"";Ue=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ae){var h=ae}Reflect.construct(n,[],r)}else{try{r.call()}catch(ae){h=ae}n.call(r.prototype)}else{try{throw Error()}catch(ae){h=ae}n()}}catch(ae){if(ae&&h&&typeof ae.stack=="string"){for(var m=ae.stack.split(`
`),_=h.stack.split(`
`),C=m.length-1,B=_.length-1;1<=C&&0<=B&&m[C]!==_[B];)B--;for(;1<=C&&0<=B;C--,B--)if(m[C]!==_[B]){if(C!==1||B!==1)do if(C--,B--,0>B||m[C]!==_[B]){var W=`
`+m[C].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=C&&0<=B);break}}}finally{Ue=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?se(n):""}function fe(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=ie(n.type,!1),n;case 11:return n=ie(n.type.render,!1),n;case 1:return n=ie(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case D:return"Portal";case P:return"Profiler";case k:return"StrictMode";case $:return"Suspense";case te:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case K:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case J:return r=n.displayName||null,r!==null?r:Me(n.type)||"Memo";case Q:r=n._payload,n=n._init;try{return Me(n(r))}catch{}}return null}function ve(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(r);case 8:return r===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Xe(n){var r=ze(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),h=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,_=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(C){h=""+C,_.call(this,C)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(C){h=""+C},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function gt(n){n._valueTracker||(n._valueTracker=Xe(n))}function xe(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),h="";return n&&(h=ze(n)?n.checked?"true":"false":n.value),n=h,n!==l?(r.setValue(n),!0):!1}function be(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function O(n,r){var l=r.checked;return oe({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Qe(n,r){var l=r.defaultValue==null?"":r.defaultValue,h=r.checked!=null?r.checked:r.defaultChecked;l=Le(r.value!=null?r.value:l),n._wrapperState={initialChecked:h,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function we(n,r){r=r.checked,r!=null&&T(n,"checked",r,!1)}function Ve(n,r){we(n,r);var l=Le(r.value),h=r.type;if(l!=null)h==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(h==="submit"||h==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?it(n,r.type,l):r.hasOwnProperty("defaultValue")&&it(n,r.type,Le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Re(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var h=r.type;if(!(h!=="submit"&&h!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function it(n,r,l){(r!=="number"||be(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Ee=Array.isArray;function U(n,r,l,h){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&h&&(n[l].defaultSelected=!0)}else{for(l=""+Le(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,h&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function L(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ne(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Ee(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Le(l)}}function pe(n,r){var l=Le(r.value),h=Le(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),h!=null&&(n.defaultValue=""+h)}function ye(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function me(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $e(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?me(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var De,We=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,h,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,h,m)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(De=De||document.createElement("div"),De.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=De.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function vt(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ke=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(n){Ke.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ae[r]=Ae[n]})});function st(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ae.hasOwnProperty(n)&&Ae[n]?(""+r).trim():r+"px"}function lt(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var h=l.indexOf("--")===0,m=st(l,r[l],h);l==="float"&&(l="cssFloat"),h?n.setProperty(l,m):n[l]=m}}var Ze=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _t(n,r){if(r){if(Ze[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function ft(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dt=null;function q(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fe=null,de=null,ge=null;function He(n){if(n=Ko(n)){if(typeof Fe!="function")throw Error(t(280));var r=n.stateNode;r&&(r=al(r),Fe(n.stateNode,n.type,r))}}function Be(n){de?ge?ge.push(n):ge=[n]:de=n}function pt(){if(de){var n=de,r=ge;if(ge=de=null,He(n),r)for(n=0;n<r.length;n++)He(r[n])}}function Ht(n,r){return n(r)}function ln(){}var At=!1;function Un(n,r,l){if(At)return n(r,l);At=!0;try{return Ht(n,r,l)}finally{At=!1,(de!==null||ge!==null)&&(ln(),pt())}}function Cn(n,r){var l=n.stateNode;if(l===null)return null;var h=al(l);if(h===null)return null;l=h[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(n=n.type,h=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!h;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Ms=!1;if(u)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){Ms=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{Ms=!1}function ki(n,r,l,h,m,_,C,B,W){var ae=Array.prototype.slice.call(arguments,3);try{r.apply(l,ae)}catch(Se){this.onError(Se)}}var Oi=!1,Hr=null,Vr=!1,lr=null,Ba={onError:function(n){Oi=!0,Hr=n}};function Es(n,r,l,h,m,_,C,B,W){Oi=!1,Hr=null,ki.apply(Ba,arguments)}function Ha(n,r,l,h,m,_,C,B,W){if(Es.apply(this,arguments),Oi){if(Oi){var ae=Hr;Oi=!1,Hr=null}else throw Error(t(198));Vr||(Vr=!0,lr=ae)}}function Ti(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Va(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Ga(n){if(Ti(n)!==n)throw Error(t(188))}function $c(n){var r=n.alternate;if(!r){if(r=Ti(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,h=r;;){var m=l.return;if(m===null)break;var _=m.alternate;if(_===null){if(h=m.return,h!==null){l=h;continue}break}if(m.child===_.child){for(_=m.child;_;){if(_===l)return Ga(m),n;if(_===h)return Ga(m),r;_=_.sibling}throw Error(t(188))}if(l.return!==h.return)l=m,h=_;else{for(var C=!1,B=m.child;B;){if(B===l){C=!0,l=m,h=_;break}if(B===h){C=!0,h=m,l=_;break}B=B.sibling}if(!C){for(B=_.child;B;){if(B===l){C=!0,l=_,h=m;break}if(B===h){C=!0,h=_,l=m;break}B=B.sibling}if(!C)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Wa(n){return n=$c(n),n!==null?ja(n):null}function ja(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ja(n);if(r!==null)return r;n=n.sibling}return null}var I=e.unstable_scheduleCallback,Z=e.unstable_cancelCallback,le=e.unstable_shouldYield,ue=e.unstable_requestPaint,j=e.unstable_now,Ce=e.unstable_getCurrentPriorityLevel,ke=e.unstable_ImmediatePriority,je=e.unstable_UserBlockingPriority,Ye=e.unstable_NormalPriority,ct=e.unstable_LowPriority,ut=e.unstable_IdlePriority,nt=null,mt=null;function Rt(n){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(nt,n,void 0,(n.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:rt,Wt=Math.log,bt=Math.LN2;function rt(n){return n>>>=0,n===0?32:31-(Wt(n)/bt|0)|0}var Jt=64,Tt=4194304;function vn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ci(n,r){var l=n.pendingLanes;if(l===0)return 0;var h=0,m=n.suspendedLanes,_=n.pingedLanes,C=l&268435455;if(C!==0){var B=C&~m;B!==0?h=vn(B):(_&=C,_!==0&&(h=vn(_)))}else C=l&~m,C!==0?h=vn(C):_!==0&&(h=vn(_));if(h===0)return 0;if(r!==0&&r!==h&&!(r&m)&&(m=h&-h,_=r&-r,m>=_||m===16&&(_&4194240)!==0))return r;if(h&4&&(h|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=h;0<r;)l=31-Pt(r),m=1<<l,h|=n[l],r&=~m;return h}function Rn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gr(n,r){for(var l=n.suspendedLanes,h=n.pingedLanes,m=n.expirationTimes,_=n.pendingLanes;0<_;){var C=31-Pt(_),B=1<<C,W=m[C];W===-1?(!(B&l)||B&h)&&(m[C]=Rn(B,r)):W<=r&&(n.expiredLanes|=B),_&=~B}}function Ft(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pn(){var n=Jt;return Jt<<=1,!(Jt&4194240)&&(Jt=64),n}function _n(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function tn(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Pt(r),n[r]=l}function Sn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var h=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-Pt(l),_=1<<m;r[m]=0,h[m]=-1,n[m]=-1,l&=~_}}function Wr(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var h=31-Pt(l),m=1<<h;m&r|n[h]&r&&(n[h]|=r),l&=~m}}var Mt=0;function Of(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var zf,Yc,Bf,Hf,Vf,qc=!1,Xa=[],cr=null,ur=null,hr=null,Do=new Map,Uo=new Map,dr=[],Uv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gf(n,r){switch(n){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Do.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(r.pointerId)}}function Fo(n,r,l,h,m,_){return n===null||n.nativeEvent!==_?(n={blockedOn:r,domEventName:l,eventSystemFlags:h,nativeEvent:_,targetContainers:[m]},r!==null&&(r=Ko(r),r!==null&&Yc(r)),n):(n.eventSystemFlags|=h,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function Fv(n,r,l,h,m){switch(r){case"focusin":return cr=Fo(cr,n,r,l,h,m),!0;case"dragenter":return ur=Fo(ur,n,r,l,h,m),!0;case"mouseover":return hr=Fo(hr,n,r,l,h,m),!0;case"pointerover":var _=m.pointerId;return Do.set(_,Fo(Do.get(_)||null,n,r,l,h,m)),!0;case"gotpointercapture":return _=m.pointerId,Uo.set(_,Fo(Uo.get(_)||null,n,r,l,h,m)),!0}return!1}function Wf(n){var r=jr(n.target);if(r!==null){var l=Ti(r);if(l!==null){if(r=l.tag,r===13){if(r=Va(l),r!==null){n.blockedOn=r,Vf(n.priority,function(){Bf(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $a(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Zc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var h=new l.constructor(l.type,l);Dt=h,l.target.dispatchEvent(h),Dt=null}else return r=Ko(l),r!==null&&Yc(r),n.blockedOn=l,!1;r.shift()}return!0}function jf(n,r,l){$a(n)&&l.delete(r)}function kv(){qc=!1,cr!==null&&$a(cr)&&(cr=null),ur!==null&&$a(ur)&&(ur=null),hr!==null&&$a(hr)&&(hr=null),Do.forEach(jf),Uo.forEach(jf)}function ko(n,r){n.blockedOn===r&&(n.blockedOn=null,qc||(qc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,kv)))}function Oo(n){function r(m){return ko(m,n)}if(0<Xa.length){ko(Xa[0],n);for(var l=1;l<Xa.length;l++){var h=Xa[l];h.blockedOn===n&&(h.blockedOn=null)}}for(cr!==null&&ko(cr,n),ur!==null&&ko(ur,n),hr!==null&&ko(hr,n),Do.forEach(r),Uo.forEach(r),l=0;l<dr.length;l++)h=dr[l],h.blockedOn===n&&(h.blockedOn=null);for(;0<dr.length&&(l=dr[0],l.blockedOn===null);)Wf(l),l.blockedOn===null&&dr.shift()}var Ts=E.ReactCurrentBatchConfig,Ya=!0;function Ov(n,r,l,h){var m=Mt,_=Ts.transition;Ts.transition=null;try{Mt=1,Kc(n,r,l,h)}finally{Mt=m,Ts.transition=_}}function zv(n,r,l,h){var m=Mt,_=Ts.transition;Ts.transition=null;try{Mt=4,Kc(n,r,l,h)}finally{Mt=m,Ts.transition=_}}function Kc(n,r,l,h){if(Ya){var m=Zc(n,r,l,h);if(m===null)pu(n,r,h,qa,l),Gf(n,h);else if(Fv(m,n,r,l,h))h.stopPropagation();else if(Gf(n,h),r&4&&-1<Uv.indexOf(n)){for(;m!==null;){var _=Ko(m);if(_!==null&&zf(_),_=Zc(n,r,l,h),_===null&&pu(n,r,h,qa,l),_===m)break;m=_}m!==null&&h.stopPropagation()}else pu(n,r,h,null,l)}}var qa=null;function Zc(n,r,l,h){if(qa=null,n=q(h),n=jr(n),n!==null)if(r=Ti(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Va(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return qa=n,null}function Xf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ce()){case ke:return 1;case je:return 4;case Ye:case ct:return 16;case ut:return 536870912;default:return 16}default:return 16}}var fr=null,Jc=null,Ka=null;function $f(){if(Ka)return Ka;var n,r=Jc,l=r.length,h,m="value"in fr?fr.value:fr.textContent,_=m.length;for(n=0;n<l&&r[n]===m[n];n++);var C=l-n;for(h=1;h<=C&&r[l-h]===m[_-h];h++);return Ka=m.slice(n,1<h?1-h:void 0)}function Za(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ja(){return!0}function Yf(){return!1}function Xn(n){function r(l,h,m,_,C){this._reactName=l,this._targetInst=m,this.type=h,this.nativeEvent=_,this.target=C,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(l=n[B],this[B]=l?l(_):_[B]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Ja:Yf,this.isPropagationStopped=Yf,this}return oe(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),r}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qc=Xn(bs),zo=oe({},bs,{view:0,detail:0}),Bv=Xn(zo),eu,tu,Bo,Qa=oe({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Bo&&(Bo&&n.type==="mousemove"?(eu=n.screenX-Bo.screenX,tu=n.screenY-Bo.screenY):tu=eu=0,Bo=n),eu)},movementY:function(n){return"movementY"in n?n.movementY:tu}}),qf=Xn(Qa),Hv=oe({},Qa,{dataTransfer:0}),Vv=Xn(Hv),Gv=oe({},zo,{relatedTarget:0}),nu=Xn(Gv),Wv=oe({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=Xn(Wv),Xv=oe({},bs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),$v=Xn(Xv),Yv=oe({},bs,{data:0}),Kf=Xn(Yv),qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Zv[n])?!!r[n]:!1}function iu(){return Jv}var Qv=oe({},zo,{key:function(n){if(n.key){var r=qv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Za(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Kv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(n){return n.type==="keypress"?Za(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Za(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ex=Xn(Qv),tx=oe({},Qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=Xn(tx),nx=oe({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),ix=Xn(nx),rx=oe({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=Xn(rx),ox=oe({},Qa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ax=Xn(ox),lx=[9,13,27,32],ru=u&&"CompositionEvent"in window,Ho=null;u&&"documentMode"in document&&(Ho=document.documentMode);var cx=u&&"TextEvent"in window&&!Ho,Jf=u&&(!ru||Ho&&8<Ho&&11>=Ho),Qf=" ",ep=!1;function tp(n,r){switch(n){case"keyup":return lx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var As=!1;function ux(n,r){switch(n){case"compositionend":return np(r);case"keypress":return r.which!==32?null:(ep=!0,Qf);case"textInput":return n=r.data,n===Qf&&ep?null:n;default:return null}}function hx(n,r){if(As)return n==="compositionend"||!ru&&tp(n,r)?(n=$f(),Ka=Jc=fr=null,As=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Jf&&r.locale!=="ko"?null:r.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!dx[n.type]:r==="textarea"}function rp(n,r,l,h){Be(h),r=rl(r,"onChange"),0<r.length&&(l=new Qc("onChange","change",null,l,h),n.push({event:l,listeners:r}))}var Vo=null,Go=null;function fx(n){wp(n,0)}function el(n){var r=Ns(n);if(xe(r))return n}function px(n,r){if(n==="change")return r}var sp=!1;if(u){var su;if(u){var ou="oninput"in document;if(!ou){var op=document.createElement("div");op.setAttribute("oninput","return;"),ou=typeof op.oninput=="function"}su=ou}else su=!1;sp=su&&(!document.documentMode||9<document.documentMode)}function ap(){Vo&&(Vo.detachEvent("onpropertychange",lp),Go=Vo=null)}function lp(n){if(n.propertyName==="value"&&el(Go)){var r=[];rp(r,Go,n,q(n)),Un(fx,r)}}function mx(n,r,l){n==="focusin"?(ap(),Vo=r,Go=l,Vo.attachEvent("onpropertychange",lp)):n==="focusout"&&ap()}function gx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return el(Go)}function vx(n,r){if(n==="click")return el(r)}function xx(n,r){if(n==="input"||n==="change")return el(r)}function yx(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ui=typeof Object.is=="function"?Object.is:yx;function Wo(n,r){if(ui(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),h=Object.keys(r);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var m=l[h];if(!d.call(r,m)||!ui(n[m],r[m]))return!1}return!0}function cp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function up(n,r){var l=cp(n);n=0;for(var h;l;){if(l.nodeType===3){if(h=n+l.textContent.length,n<=r&&h>=r)return{node:l,offset:r-n};n=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=cp(l)}}function hp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?hp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function dp(){for(var n=window,r=be();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=be(n.document)}return r}function au(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function _x(n){var r=dp(),l=n.focusedElem,h=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&hp(l.ownerDocument.documentElement,l)){if(h!==null&&au(l)){if(r=h.start,n=h.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,_=Math.min(h.start,m);h=h.end===void 0?_:Math.min(h.end,m),!n.extend&&_>h&&(m=h,h=_,_=m),m=up(l,_);var C=up(l,h);m&&C&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),_>h?(n.addRange(r),n.extend(C.node,C.offset)):(r.setEnd(C.node,C.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Sx=u&&"documentMode"in document&&11>=document.documentMode,Cs=null,lu=null,jo=null,cu=!1;function fp(n,r,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;cu||Cs==null||Cs!==be(h)||(h=Cs,"selectionStart"in h&&au(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),jo&&Wo(jo,h)||(jo=h,h=rl(lu,"onSelect"),0<h.length&&(r=new Qc("onSelect","select",null,r,l),n.push({event:r,listeners:h}),r.target=Cs)))}function tl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Rs={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},uu={},pp={};u&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function nl(n){if(uu[n])return uu[n];if(!Rs[n])return n;var r=Rs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in pp)return uu[n]=r[l];return n}var mp=nl("animationend"),gp=nl("animationiteration"),vp=nl("animationstart"),xp=nl("transitionend"),yp=new Map,_p="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(n,r){yp.set(n,r),a(r,[n])}for(var hu=0;hu<_p.length;hu++){var du=_p[hu],wx=du.toLowerCase(),Mx=du[0].toUpperCase()+du.slice(1);pr(wx,"on"+Mx)}pr(mp,"onAnimationEnd"),pr(gp,"onAnimationIteration"),pr(vp,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(xp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ex=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));function Sp(n,r,l){var h=n.type||"unknown-event";n.currentTarget=l,Ha(h,r,void 0,n),n.currentTarget=null}function wp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var h=n[l],m=h.event;h=h.listeners;e:{var _=void 0;if(r)for(var C=h.length-1;0<=C;C--){var B=h[C],W=B.instance,ae=B.currentTarget;if(B=B.listener,W!==_&&m.isPropagationStopped())break e;Sp(m,B,ae),_=W}else for(C=0;C<h.length;C++){if(B=h[C],W=B.instance,ae=B.currentTarget,B=B.listener,W!==_&&m.isPropagationStopped())break e;Sp(m,B,ae),_=W}}}if(Vr)throw n=lr,Vr=!1,lr=null,n}function Vt(n,r){var l=r[_u];l===void 0&&(l=r[_u]=new Set);var h=n+"__bubble";l.has(h)||(Mp(r,n,2,!1),l.add(h))}function fu(n,r,l){var h=0;r&&(h|=4),Mp(l,n,h,r)}var il="_reactListening"+Math.random().toString(36).slice(2);function $o(n){if(!n[il]){n[il]=!0,i.forEach(function(l){l!=="selectionchange"&&(Ex.has(l)||fu(l,!1,n),fu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[il]||(r[il]=!0,fu("selectionchange",!1,r))}}function Mp(n,r,l,h){switch(Xf(r)){case 1:var m=Ov;break;case 4:m=zv;break;default:m=Kc}l=m.bind(null,r,l,n),m=void 0,!Ms||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),h?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function pu(n,r,l,h,m){var _=h;if(!(r&1)&&!(r&2)&&h!==null)e:for(;;){if(h===null)return;var C=h.tag;if(C===3||C===4){var B=h.stateNode.containerInfo;if(B===m||B.nodeType===8&&B.parentNode===m)break;if(C===4)for(C=h.return;C!==null;){var W=C.tag;if((W===3||W===4)&&(W=C.stateNode.containerInfo,W===m||W.nodeType===8&&W.parentNode===m))return;C=C.return}for(;B!==null;){if(C=jr(B),C===null)return;if(W=C.tag,W===5||W===6){h=_=C;continue e}B=B.parentNode}}h=h.return}Un(function(){var ae=_,Se=q(l),Te=[];e:{var _e=yp.get(n);if(_e!==void 0){var Ge=Qc,Je=n;switch(n){case"keypress":if(Za(l)===0)break e;case"keydown":case"keyup":Ge=ex;break;case"focusin":Je="focus",Ge=nu;break;case"focusout":Je="blur",Ge=nu;break;case"beforeblur":case"afterblur":Ge=nu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ge=qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ge=Vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ge=ix;break;case mp:case gp:case vp:Ge=jv;break;case xp:Ge=sx;break;case"scroll":Ge=Bv;break;case"wheel":Ge=ax;break;case"copy":case"cut":case"paste":Ge=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ge=Zf}var et=(r&4)!==0,nn=!et&&n==="scroll",ee=et?_e!==null?_e+"Capture":null:_e;et=[];for(var X=ae,re;X!==null;){re=X;var Pe=re.stateNode;if(re.tag===5&&Pe!==null&&(re=Pe,ee!==null&&(Pe=Cn(X,ee),Pe!=null&&et.push(Yo(X,Pe,re)))),nn)break;X=X.return}0<et.length&&(_e=new Ge(_e,Je,null,l,Se),Te.push({event:_e,listeners:et}))}}if(!(r&7)){e:{if(_e=n==="mouseover"||n==="pointerover",Ge=n==="mouseout"||n==="pointerout",_e&&l!==Dt&&(Je=l.relatedTarget||l.fromElement)&&(jr(Je)||Je[zi]))break e;if((Ge||_e)&&(_e=Se.window===Se?Se:(_e=Se.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ge?(Je=l.relatedTarget||l.toElement,Ge=ae,Je=Je?jr(Je):null,Je!==null&&(nn=Ti(Je),Je!==nn||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(Ge=null,Je=ae),Ge!==Je)){if(et=qf,Pe="onMouseLeave",ee="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(et=Zf,Pe="onPointerLeave",ee="onPointerEnter",X="pointer"),nn=Ge==null?_e:Ns(Ge),re=Je==null?_e:Ns(Je),_e=new et(Pe,X+"leave",Ge,l,Se),_e.target=nn,_e.relatedTarget=re,Pe=null,jr(Se)===ae&&(et=new et(ee,X+"enter",Je,l,Se),et.target=re,et.relatedTarget=nn,Pe=et),nn=Pe,Ge&&Je)t:{for(et=Ge,ee=Je,X=0,re=et;re;re=Ps(re))X++;for(re=0,Pe=ee;Pe;Pe=Ps(Pe))re++;for(;0<X-re;)et=Ps(et),X--;for(;0<re-X;)ee=Ps(ee),re--;for(;X--;){if(et===ee||ee!==null&&et===ee.alternate)break t;et=Ps(et),ee=Ps(ee)}et=null}else et=null;Ge!==null&&Ep(Te,_e,Ge,et,!1),Je!==null&&nn!==null&&Ep(Te,nn,Je,et,!0)}}e:{if(_e=ae?Ns(ae):window,Ge=_e.nodeName&&_e.nodeName.toLowerCase(),Ge==="select"||Ge==="input"&&_e.type==="file")var tt=px;else if(ip(_e))if(sp)tt=xx;else{tt=gx;var ot=mx}else(Ge=_e.nodeName)&&Ge.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(tt=vx);if(tt&&(tt=tt(n,ae))){rp(Te,tt,l,Se);break e}ot&&ot(n,_e,ae),n==="focusout"&&(ot=_e._wrapperState)&&ot.controlled&&_e.type==="number"&&it(_e,"number",_e.value)}switch(ot=ae?Ns(ae):window,n){case"focusin":(ip(ot)||ot.contentEditable==="true")&&(Cs=ot,lu=ae,jo=null);break;case"focusout":jo=lu=Cs=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,fp(Te,l,Se);break;case"selectionchange":if(Sx)break;case"keydown":case"keyup":fp(Te,l,Se)}var at;if(ru)e:{switch(n){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else As?tp(n,l)&&(ht="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ht="onCompositionStart");ht&&(Jf&&l.locale!=="ko"&&(As||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&As&&(at=$f()):(fr=Se,Jc="value"in fr?fr.value:fr.textContent,As=!0)),ot=rl(ae,ht),0<ot.length&&(ht=new Kf(ht,n,null,l,Se),Te.push({event:ht,listeners:ot}),at?ht.data=at:(at=np(l),at!==null&&(ht.data=at)))),(at=cx?ux(n,l):hx(n,l))&&(ae=rl(ae,"onBeforeInput"),0<ae.length&&(Se=new Kf("onBeforeInput","beforeinput",null,l,Se),Te.push({event:Se,listeners:ae}),Se.data=at))}wp(Te,r)})}function Yo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function rl(n,r){for(var l=r+"Capture",h=[];n!==null;){var m=n,_=m.stateNode;m.tag===5&&_!==null&&(m=_,_=Cn(n,l),_!=null&&h.unshift(Yo(n,_,m)),_=Cn(n,r),_!=null&&h.push(Yo(n,_,m))),n=n.return}return h}function Ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ep(n,r,l,h,m){for(var _=r._reactName,C=[];l!==null&&l!==h;){var B=l,W=B.alternate,ae=B.stateNode;if(W!==null&&W===h)break;B.tag===5&&ae!==null&&(B=ae,m?(W=Cn(l,_),W!=null&&C.unshift(Yo(l,W,B))):m||(W=Cn(l,_),W!=null&&C.push(Yo(l,W,B)))),l=l.return}C.length!==0&&n.push({event:r,listeners:C})}var Tx=/\r\n?/g,bx=/\u0000|\uFFFD/g;function Tp(n){return(typeof n=="string"?n:""+n).replace(Tx,`
`).replace(bx,"")}function sl(n,r,l){if(r=Tp(r),Tp(n)!==r&&l)throw Error(t(425))}function ol(){}var mu=null,gu=null;function vu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var xu=typeof setTimeout=="function"?setTimeout:void 0,Ax=typeof clearTimeout=="function"?clearTimeout:void 0,bp=typeof Promise=="function"?Promise:void 0,Cx=typeof queueMicrotask=="function"?queueMicrotask:typeof bp<"u"?function(n){return bp.resolve(null).then(n).catch(Rx)}:xu;function Rx(n){setTimeout(function(){throw n})}function yu(n,r){var l=r,h=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(h===0){n.removeChild(m),Oo(r);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=m}while(l);Oo(r)}function mr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Ap(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),bi="__reactFiber$"+Ls,qo="__reactProps$"+Ls,zi="__reactContainer$"+Ls,_u="__reactEvents$"+Ls,Px="__reactListeners$"+Ls,Lx="__reactHandles$"+Ls;function jr(n){var r=n[bi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[zi]||l[bi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Ap(n);n!==null;){if(l=n[bi])return l;n=Ap(n)}return r}n=l,l=n.parentNode}return null}function Ko(n){return n=n[bi]||n[zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ns(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function al(n){return n[qo]||null}var Su=[],Is=-1;function gr(n){return{current:n}}function Gt(n){0>Is||(n.current=Su[Is],Su[Is]=null,Is--)}function Bt(n,r){Is++,Su[Is]=n.current,n.current=r}var vr={},wn=gr(vr),Fn=gr(!1),Xr=vr;function Ds(n,r){var l=n.type.contextTypes;if(!l)return vr;var h=n.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===r)return h.__reactInternalMemoizedMaskedChildContext;var m={},_;for(_ in l)m[_]=r[_];return h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function kn(n){return n=n.childContextTypes,n!=null}function ll(){Gt(Fn),Gt(wn)}function Cp(n,r,l){if(wn.current!==vr)throw Error(t(168));Bt(wn,r),Bt(Fn,l)}function Rp(n,r,l){var h=n.stateNode;if(r=r.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var m in h)if(!(m in r))throw Error(t(108,ve(n)||"Unknown",m));return oe({},l,h)}function cl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||vr,Xr=wn.current,Bt(wn,n),Bt(Fn,Fn.current),!0}function Pp(n,r,l){var h=n.stateNode;if(!h)throw Error(t(169));l?(n=Rp(n,r,Xr),h.__reactInternalMemoizedMergedChildContext=n,Gt(Fn),Gt(wn),Bt(wn,n)):Gt(Fn),Bt(Fn,l)}var Bi=null,ul=!1,wu=!1;function Lp(n){Bi===null?Bi=[n]:Bi.push(n)}function Nx(n){ul=!0,Lp(n)}function xr(){if(!wu&&Bi!==null){wu=!0;var n=0,r=Mt;try{var l=Bi;for(Mt=1;n<l.length;n++){var h=l[n];do h=h(!0);while(h!==null)}Bi=null,ul=!1}catch(m){throw Bi!==null&&(Bi=Bi.slice(n+1)),I(ke,xr),m}finally{Mt=r,wu=!1}}return null}var Us=[],Fs=0,hl=null,dl=0,ei=[],ti=0,$r=null,Hi=1,Vi="";function Yr(n,r){Us[Fs++]=dl,Us[Fs++]=hl,hl=n,dl=r}function Np(n,r,l){ei[ti++]=Hi,ei[ti++]=Vi,ei[ti++]=$r,$r=n;var h=Hi;n=Vi;var m=32-Pt(h)-1;h&=~(1<<m),l+=1;var _=32-Pt(r)+m;if(30<_){var C=m-m%5;_=(h&(1<<C)-1).toString(32),h>>=C,m-=C,Hi=1<<32-Pt(r)+m|l<<m|h,Vi=_+n}else Hi=1<<_|l<<m|h,Vi=n}function Mu(n){n.return!==null&&(Yr(n,1),Np(n,1,0))}function Eu(n){for(;n===hl;)hl=Us[--Fs],Us[Fs]=null,dl=Us[--Fs],Us[Fs]=null;for(;n===$r;)$r=ei[--ti],ei[ti]=null,Vi=ei[--ti],ei[ti]=null,Hi=ei[--ti],ei[ti]=null}var $n=null,Yn=null,jt=!1,hi=null;function Ip(n,r){var l=si(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Dp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,$n=n,Yn=mr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,$n=n,Yn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=$r!==null?{id:Hi,overflow:Vi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=si(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,$n=n,Yn=null,!0):!1;default:return!1}}function Tu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function bu(n){if(jt){var r=Yn;if(r){var l=r;if(!Dp(n,r)){if(Tu(n))throw Error(t(418));r=mr(l.nextSibling);var h=$n;r&&Dp(n,r)?Ip(h,l):(n.flags=n.flags&-4097|2,jt=!1,$n=n)}}else{if(Tu(n))throw Error(t(418));n.flags=n.flags&-4097|2,jt=!1,$n=n}}}function Up(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;$n=n}function fl(n){if(n!==$n)return!1;if(!jt)return Up(n),jt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!vu(n.type,n.memoizedProps)),r&&(r=Yn)){if(Tu(n))throw Fp(),Error(t(418));for(;r;)Ip(n,r),r=mr(r.nextSibling)}if(Up(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Yn=mr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Yn=null}}else Yn=$n?mr(n.stateNode.nextSibling):null;return!0}function Fp(){for(var n=Yn;n;)n=mr(n.nextSibling)}function ks(){Yn=$n=null,jt=!1}function Au(n){hi===null?hi=[n]:hi.push(n)}var Ix=E.ReactCurrentBatchConfig;function Zo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,n));var m=h,_=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===_?r.ref:(r=function(C){var B=m.refs;C===null?delete B[_]:B[_]=C},r._stringRef=_,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function pl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function kp(n){var r=n._init;return r(n._payload)}function Op(n){function r(ee,X){if(n){var re=ee.deletions;re===null?(ee.deletions=[X],ee.flags|=16):re.push(X)}}function l(ee,X){if(!n)return null;for(;X!==null;)r(ee,X),X=X.sibling;return null}function h(ee,X){for(ee=new Map;X!==null;)X.key!==null?ee.set(X.key,X):ee.set(X.index,X),X=X.sibling;return ee}function m(ee,X){return ee=br(ee,X),ee.index=0,ee.sibling=null,ee}function _(ee,X,re){return ee.index=re,n?(re=ee.alternate,re!==null?(re=re.index,re<X?(ee.flags|=2,X):re):(ee.flags|=2,X)):(ee.flags|=1048576,X)}function C(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function B(ee,X,re,Pe){return X===null||X.tag!==6?(X=xh(re,ee.mode,Pe),X.return=ee,X):(X=m(X,re),X.return=ee,X)}function W(ee,X,re,Pe){var tt=re.type;return tt===F?Se(ee,X,re.props.children,Pe,re.key):X!==null&&(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===Q&&kp(tt)===X.type)?(Pe=m(X,re.props),Pe.ref=Zo(ee,X,re),Pe.return=ee,Pe):(Pe=Ol(re.type,re.key,re.props,null,ee.mode,Pe),Pe.ref=Zo(ee,X,re),Pe.return=ee,Pe)}function ae(ee,X,re,Pe){return X===null||X.tag!==4||X.stateNode.containerInfo!==re.containerInfo||X.stateNode.implementation!==re.implementation?(X=yh(re,ee.mode,Pe),X.return=ee,X):(X=m(X,re.children||[]),X.return=ee,X)}function Se(ee,X,re,Pe,tt){return X===null||X.tag!==7?(X=ns(re,ee.mode,Pe,tt),X.return=ee,X):(X=m(X,re),X.return=ee,X)}function Te(ee,X,re){if(typeof X=="string"&&X!==""||typeof X=="number")return X=xh(""+X,ee.mode,re),X.return=ee,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case z:return re=Ol(X.type,X.key,X.props,null,ee.mode,re),re.ref=Zo(ee,null,X),re.return=ee,re;case D:return X=yh(X,ee.mode,re),X.return=ee,X;case Q:var Pe=X._init;return Te(ee,Pe(X._payload),re)}if(Ee(X)||he(X))return X=ns(X,ee.mode,re,null),X.return=ee,X;pl(ee,X)}return null}function _e(ee,X,re,Pe){var tt=X!==null?X.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return tt!==null?null:B(ee,X,""+re,Pe);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case z:return re.key===tt?W(ee,X,re,Pe):null;case D:return re.key===tt?ae(ee,X,re,Pe):null;case Q:return tt=re._init,_e(ee,X,tt(re._payload),Pe)}if(Ee(re)||he(re))return tt!==null?null:Se(ee,X,re,Pe,null);pl(ee,re)}return null}function Ge(ee,X,re,Pe,tt){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return ee=ee.get(re)||null,B(X,ee,""+Pe,tt);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case z:return ee=ee.get(Pe.key===null?re:Pe.key)||null,W(X,ee,Pe,tt);case D:return ee=ee.get(Pe.key===null?re:Pe.key)||null,ae(X,ee,Pe,tt);case Q:var ot=Pe._init;return Ge(ee,X,re,ot(Pe._payload),tt)}if(Ee(Pe)||he(Pe))return ee=ee.get(re)||null,Se(X,ee,Pe,tt,null);pl(X,Pe)}return null}function Je(ee,X,re,Pe){for(var tt=null,ot=null,at=X,ht=X=0,mn=null;at!==null&&ht<re.length;ht++){at.index>ht?(mn=at,at=null):mn=at.sibling;var Lt=_e(ee,at,re[ht],Pe);if(Lt===null){at===null&&(at=mn);break}n&&at&&Lt.alternate===null&&r(ee,at),X=_(Lt,X,ht),ot===null?tt=Lt:ot.sibling=Lt,ot=Lt,at=mn}if(ht===re.length)return l(ee,at),jt&&Yr(ee,ht),tt;if(at===null){for(;ht<re.length;ht++)at=Te(ee,re[ht],Pe),at!==null&&(X=_(at,X,ht),ot===null?tt=at:ot.sibling=at,ot=at);return jt&&Yr(ee,ht),tt}for(at=h(ee,at);ht<re.length;ht++)mn=Ge(at,ee,ht,re[ht],Pe),mn!==null&&(n&&mn.alternate!==null&&at.delete(mn.key===null?ht:mn.key),X=_(mn,X,ht),ot===null?tt=mn:ot.sibling=mn,ot=mn);return n&&at.forEach(function(Ar){return r(ee,Ar)}),jt&&Yr(ee,ht),tt}function et(ee,X,re,Pe){var tt=he(re);if(typeof tt!="function")throw Error(t(150));if(re=tt.call(re),re==null)throw Error(t(151));for(var ot=tt=null,at=X,ht=X=0,mn=null,Lt=re.next();at!==null&&!Lt.done;ht++,Lt=re.next()){at.index>ht?(mn=at,at=null):mn=at.sibling;var Ar=_e(ee,at,Lt.value,Pe);if(Ar===null){at===null&&(at=mn);break}n&&at&&Ar.alternate===null&&r(ee,at),X=_(Ar,X,ht),ot===null?tt=Ar:ot.sibling=Ar,ot=Ar,at=mn}if(Lt.done)return l(ee,at),jt&&Yr(ee,ht),tt;if(at===null){for(;!Lt.done;ht++,Lt=re.next())Lt=Te(ee,Lt.value,Pe),Lt!==null&&(X=_(Lt,X,ht),ot===null?tt=Lt:ot.sibling=Lt,ot=Lt);return jt&&Yr(ee,ht),tt}for(at=h(ee,at);!Lt.done;ht++,Lt=re.next())Lt=Ge(at,ee,ht,Lt.value,Pe),Lt!==null&&(n&&Lt.alternate!==null&&at.delete(Lt.key===null?ht:Lt.key),X=_(Lt,X,ht),ot===null?tt=Lt:ot.sibling=Lt,ot=Lt);return n&&at.forEach(function(dy){return r(ee,dy)}),jt&&Yr(ee,ht),tt}function nn(ee,X,re,Pe){if(typeof re=="object"&&re!==null&&re.type===F&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case z:e:{for(var tt=re.key,ot=X;ot!==null;){if(ot.key===tt){if(tt=re.type,tt===F){if(ot.tag===7){l(ee,ot.sibling),X=m(ot,re.props.children),X.return=ee,ee=X;break e}}else if(ot.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===Q&&kp(tt)===ot.type){l(ee,ot.sibling),X=m(ot,re.props),X.ref=Zo(ee,ot,re),X.return=ee,ee=X;break e}l(ee,ot);break}else r(ee,ot);ot=ot.sibling}re.type===F?(X=ns(re.props.children,ee.mode,Pe,re.key),X.return=ee,ee=X):(Pe=Ol(re.type,re.key,re.props,null,ee.mode,Pe),Pe.ref=Zo(ee,X,re),Pe.return=ee,ee=Pe)}return C(ee);case D:e:{for(ot=re.key;X!==null;){if(X.key===ot)if(X.tag===4&&X.stateNode.containerInfo===re.containerInfo&&X.stateNode.implementation===re.implementation){l(ee,X.sibling),X=m(X,re.children||[]),X.return=ee,ee=X;break e}else{l(ee,X);break}else r(ee,X);X=X.sibling}X=yh(re,ee.mode,Pe),X.return=ee,ee=X}return C(ee);case Q:return ot=re._init,nn(ee,X,ot(re._payload),Pe)}if(Ee(re))return Je(ee,X,re,Pe);if(he(re))return et(ee,X,re,Pe);pl(ee,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,X!==null&&X.tag===6?(l(ee,X.sibling),X=m(X,re),X.return=ee,ee=X):(l(ee,X),X=xh(re,ee.mode,Pe),X.return=ee,ee=X),C(ee)):l(ee,X)}return nn}var Os=Op(!0),zp=Op(!1),ml=gr(null),gl=null,zs=null,Cu=null;function Ru(){Cu=zs=gl=null}function Pu(n){var r=ml.current;Gt(ml),n._currentValue=r}function Lu(n,r,l){for(;n!==null;){var h=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,h!==null&&(h.childLanes|=r)):h!==null&&(h.childLanes&r)!==r&&(h.childLanes|=r),n===l)break;n=n.return}}function Bs(n,r){gl=n,Cu=zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(On=!0),n.firstContext=null)}function ni(n){var r=n._currentValue;if(Cu!==n)if(n={context:n,memoizedValue:r,next:null},zs===null){if(gl===null)throw Error(t(308));zs=n,gl.dependencies={lanes:0,firstContext:n}}else zs=zs.next=n;return r}var qr=null;function Nu(n){qr===null?qr=[n]:qr.push(n)}function Bp(n,r,l,h){var m=r.interleaved;return m===null?(l.next=l,Nu(r)):(l.next=m.next,m.next=l),r.interleaved=l,Gi(n,h)}function Gi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var yr=!1;function Iu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Wi(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function _r(n,r,l){var h=n.updateQueue;if(h===null)return null;if(h=h.shared,Ct&2){var m=h.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),h.pending=r,Gi(n,l)}return m=h.interleaved,m===null?(r.next=r,Nu(h)):(r.next=m.next,m.next=r),h.interleaved=r,Gi(n,l)}function vl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,Wr(n,l)}}function Vp(n,r){var l=n.updateQueue,h=n.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var m=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var C={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?m=_=C:_=_.next=C,l=l.next}while(l!==null);_===null?m=_=r:_=_.next=r}else m=_=r;l={baseState:h.baseState,firstBaseUpdate:m,lastBaseUpdate:_,shared:h.shared,effects:h.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function xl(n,r,l,h){var m=n.updateQueue;yr=!1;var _=m.firstBaseUpdate,C=m.lastBaseUpdate,B=m.shared.pending;if(B!==null){m.shared.pending=null;var W=B,ae=W.next;W.next=null,C===null?_=ae:C.next=ae,C=W;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,B=Se.lastBaseUpdate,B!==C&&(B===null?Se.firstBaseUpdate=ae:B.next=ae,Se.lastBaseUpdate=W))}if(_!==null){var Te=m.baseState;C=0,Se=ae=W=null,B=_;do{var _e=B.lane,Ge=B.eventTime;if((h&_e)===_e){Se!==null&&(Se=Se.next={eventTime:Ge,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Je=n,et=B;switch(_e=r,Ge=l,et.tag){case 1:if(Je=et.payload,typeof Je=="function"){Te=Je.call(Ge,Te,_e);break e}Te=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=et.payload,_e=typeof Je=="function"?Je.call(Ge,Te,_e):Je,_e==null)break e;Te=oe({},Te,_e);break e;case 2:yr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,_e=m.effects,_e===null?m.effects=[B]:_e.push(B))}else Ge={eventTime:Ge,lane:_e,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Se===null?(ae=Se=Ge,W=Te):Se=Se.next=Ge,C|=_e;if(B=B.next,B===null){if(B=m.shared.pending,B===null)break;_e=B,B=_e.next,_e.next=null,m.lastBaseUpdate=_e,m.shared.pending=null}}while(!0);if(Se===null&&(W=Te),m.baseState=W,m.firstBaseUpdate=ae,m.lastBaseUpdate=Se,r=m.shared.interleaved,r!==null){m=r;do C|=m.lane,m=m.next;while(m!==r)}else _===null&&(m.shared.lanes=0);Jr|=C,n.lanes=C,n.memoizedState=Te}}function Gp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var h=n[r],m=h.callback;if(m!==null){if(h.callback=null,h=l,typeof m!="function")throw Error(t(191,m));m.call(h)}}}var Jo={},Ai=gr(Jo),Qo=gr(Jo),ea=gr(Jo);function Kr(n){if(n===Jo)throw Error(t(174));return n}function Du(n,r){switch(Bt(ea,r),Bt(Qo,n),Bt(Ai,Jo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:$e(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=$e(r,n)}Gt(Ai),Bt(Ai,r)}function Hs(){Gt(Ai),Gt(Qo),Gt(ea)}function Wp(n){Kr(ea.current);var r=Kr(Ai.current),l=$e(r,n.type);r!==l&&(Bt(Qo,n),Bt(Ai,l))}function Uu(n){Qo.current===n&&(Gt(Ai),Gt(Qo))}var $t=gr(0);function yl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Fu=[];function ku(){for(var n=0;n<Fu.length;n++)Fu[n]._workInProgressVersionPrimary=null;Fu.length=0}var _l=E.ReactCurrentDispatcher,Ou=E.ReactCurrentBatchConfig,Zr=0,Yt=null,cn=null,fn=null,Sl=!1,ta=!1,na=0,Dx=0;function Mn(){throw Error(t(321))}function zu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!ui(n[l],r[l]))return!1;return!0}function Bu(n,r,l,h,m,_){if(Zr=_,Yt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,_l.current=n===null||n.memoizedState===null?Ox:zx,n=l(h,m),ta){_=0;do{if(ta=!1,na=0,25<=_)throw Error(t(301));_+=1,fn=cn=null,r.updateQueue=null,_l.current=Bx,n=l(h,m)}while(ta)}if(_l.current=El,r=cn!==null&&cn.next!==null,Zr=0,fn=cn=Yt=null,Sl=!1,r)throw Error(t(300));return n}function Hu(){var n=na!==0;return na=0,n}function Ci(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Yt.memoizedState=fn=n:fn=fn.next=n,fn}function ii(){if(cn===null){var n=Yt.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var r=fn===null?Yt.memoizedState:fn.next;if(r!==null)fn=r,cn=n;else{if(n===null)throw Error(t(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},fn===null?Yt.memoizedState=fn=n:fn=fn.next=n}return fn}function ia(n,r){return typeof r=="function"?r(n):r}function Vu(n){var r=ii(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=cn,m=h.baseQueue,_=l.pending;if(_!==null){if(m!==null){var C=m.next;m.next=_.next,_.next=C}h.baseQueue=m=_,l.pending=null}if(m!==null){_=m.next,h=h.baseState;var B=C=null,W=null,ae=_;do{var Se=ae.lane;if((Zr&Se)===Se)W!==null&&(W=W.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),h=ae.hasEagerState?ae.eagerState:n(h,ae.action);else{var Te={lane:Se,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};W===null?(B=W=Te,C=h):W=W.next=Te,Yt.lanes|=Se,Jr|=Se}ae=ae.next}while(ae!==null&&ae!==_);W===null?C=h:W.next=B,ui(h,r.memoizedState)||(On=!0),r.memoizedState=h,r.baseState=C,r.baseQueue=W,l.lastRenderedState=h}if(n=l.interleaved,n!==null){m=n;do _=m.lane,Yt.lanes|=_,Jr|=_,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Gu(n){var r=ii(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var h=l.dispatch,m=l.pending,_=r.memoizedState;if(m!==null){l.pending=null;var C=m=m.next;do _=n(_,C.action),C=C.next;while(C!==m);ui(_,r.memoizedState)||(On=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),l.lastRenderedState=_}return[_,h]}function jp(){}function Xp(n,r){var l=Yt,h=ii(),m=r(),_=!ui(h.memoizedState,m);if(_&&(h.memoizedState=m,On=!0),h=h.queue,Wu(qp.bind(null,l,h,n),[n]),h.getSnapshot!==r||_||fn!==null&&fn.memoizedState.tag&1){if(l.flags|=2048,ra(9,Yp.bind(null,l,h,m,r),void 0,null),pn===null)throw Error(t(349));Zr&30||$p(l,r,m)}return m}function $p(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Yp(n,r,l,h){r.value=l,r.getSnapshot=h,Kp(r)&&Zp(n)}function qp(n,r,l){return l(function(){Kp(r)&&Zp(n)})}function Kp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!ui(n,l)}catch{return!0}}function Zp(n){var r=Gi(n,1);r!==null&&mi(r,n,1,-1)}function Jp(n){var r=Ci();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:n},r.queue=n,n=n.dispatch=kx.bind(null,Yt,n),[r.memoizedState,n]}function ra(n,r,l,h){return n={tag:n,create:r,destroy:l,deps:h,next:null},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(h=l.next,l.next=n,n.next=h,r.lastEffect=n)),n}function Qp(){return ii().memoizedState}function wl(n,r,l,h){var m=Ci();Yt.flags|=n,m.memoizedState=ra(1|r,l,void 0,h===void 0?null:h)}function Ml(n,r,l,h){var m=ii();h=h===void 0?null:h;var _=void 0;if(cn!==null){var C=cn.memoizedState;if(_=C.destroy,h!==null&&zu(h,C.deps)){m.memoizedState=ra(r,l,_,h);return}}Yt.flags|=n,m.memoizedState=ra(1|r,l,_,h)}function em(n,r){return wl(8390656,8,n,r)}function Wu(n,r){return Ml(2048,8,n,r)}function tm(n,r){return Ml(4,2,n,r)}function nm(n,r){return Ml(4,4,n,r)}function im(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function rm(n,r,l){return l=l!=null?l.concat([n]):null,Ml(4,4,im.bind(null,r,n),l)}function ju(){}function sm(n,r){var l=ii();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&zu(r,h[1])?h[0]:(l.memoizedState=[n,r],n)}function om(n,r){var l=ii();r=r===void 0?null:r;var h=l.memoizedState;return h!==null&&r!==null&&zu(r,h[1])?h[0]:(n=n(),l.memoizedState=[n,r],n)}function am(n,r,l){return Zr&21?(ui(l,r)||(l=Pn(),Yt.lanes|=l,Jr|=l,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,On=!0),n.memoizedState=l)}function Ux(n,r){var l=Mt;Mt=l!==0&&4>l?l:4,n(!0);var h=Ou.transition;Ou.transition={};try{n(!1),r()}finally{Mt=l,Ou.transition=h}}function lm(){return ii().memoizedState}function Fx(n,r,l){var h=Er(n);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},cm(n))um(r,l);else if(l=Bp(n,r,l,h),l!==null){var m=Nn();mi(l,n,h,m),hm(l,r,h)}}function kx(n,r,l){var h=Er(n),m={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(cm(n))um(r,m);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var C=r.lastRenderedState,B=_(C,l);if(m.hasEagerState=!0,m.eagerState=B,ui(B,C)){var W=r.interleaved;W===null?(m.next=m,Nu(r)):(m.next=W.next,W.next=m),r.interleaved=m;return}}catch{}finally{}l=Bp(n,r,m,h),l!==null&&(m=Nn(),mi(l,n,h,m),hm(l,r,h))}}function cm(n){var r=n.alternate;return n===Yt||r!==null&&r===Yt}function um(n,r){ta=Sl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function hm(n,r,l){if(l&4194240){var h=r.lanes;h&=n.pendingLanes,l|=h,r.lanes=l,Wr(n,l)}}var El={readContext:ni,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},Ox={readContext:ni,useCallback:function(n,r){return Ci().memoizedState=[n,r===void 0?null:r],n},useContext:ni,useEffect:em,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,wl(4194308,4,im.bind(null,r,n),l)},useLayoutEffect:function(n,r){return wl(4194308,4,n,r)},useInsertionEffect:function(n,r){return wl(4,2,n,r)},useMemo:function(n,r){var l=Ci();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var h=Ci();return r=l!==void 0?l(r):r,h.memoizedState=h.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},h.queue=n,n=n.dispatch=Fx.bind(null,Yt,n),[h.memoizedState,n]},useRef:function(n){var r=Ci();return n={current:n},r.memoizedState=n},useState:Jp,useDebugValue:ju,useDeferredValue:function(n){return Ci().memoizedState=n},useTransition:function(){var n=Jp(!1),r=n[0];return n=Ux.bind(null,n[1]),Ci().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var h=Yt,m=Ci();if(jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),pn===null)throw Error(t(349));Zr&30||$p(h,r,l)}m.memoizedState=l;var _={value:l,getSnapshot:r};return m.queue=_,em(qp.bind(null,h,_,n),[n]),h.flags|=2048,ra(9,Yp.bind(null,h,_,l,r),void 0,null),l},useId:function(){var n=Ci(),r=pn.identifierPrefix;if(jt){var l=Vi,h=Hi;l=(h&~(1<<32-Pt(h)-1)).toString(32)+l,r=":"+r+"R"+l,l=na++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Dx++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},zx={readContext:ni,useCallback:sm,useContext:ni,useEffect:Wu,useImperativeHandle:rm,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:Vu,useRef:Qp,useState:function(){return Vu(ia)},useDebugValue:ju,useDeferredValue:function(n){var r=ii();return am(r,cn.memoizedState,n)},useTransition:function(){var n=Vu(ia)[0],r=ii().memoizedState;return[n,r]},useMutableSource:jp,useSyncExternalStore:Xp,useId:lm,unstable_isNewReconciler:!1},Bx={readContext:ni,useCallback:sm,useContext:ni,useEffect:Wu,useImperativeHandle:rm,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:Gu,useRef:Qp,useState:function(){return Gu(ia)},useDebugValue:ju,useDeferredValue:function(n){var r=ii();return cn===null?r.memoizedState=n:am(r,cn.memoizedState,n)},useTransition:function(){var n=Gu(ia)[0],r=ii().memoizedState;return[n,r]},useMutableSource:jp,useSyncExternalStore:Xp,useId:lm,unstable_isNewReconciler:!1};function di(n,r){if(n&&n.defaultProps){r=oe({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Xu(n,r,l,h){r=n.memoizedState,l=l(h,r),l=l==null?r:oe({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Tl={isMounted:function(n){return(n=n._reactInternals)?Ti(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var h=Nn(),m=Er(n),_=Wi(h,m);_.payload=r,l!=null&&(_.callback=l),r=_r(n,_,m),r!==null&&(mi(r,n,m,h),vl(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var h=Nn(),m=Er(n),_=Wi(h,m);_.tag=1,_.payload=r,l!=null&&(_.callback=l),r=_r(n,_,m),r!==null&&(mi(r,n,m,h),vl(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Nn(),h=Er(n),m=Wi(l,h);m.tag=2,r!=null&&(m.callback=r),r=_r(n,m,h),r!==null&&(mi(r,n,h,l),vl(r,n,h))}};function dm(n,r,l,h,m,_,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(h,_,C):r.prototype&&r.prototype.isPureReactComponent?!Wo(l,h)||!Wo(m,_):!0}function fm(n,r,l){var h=!1,m=vr,_=r.contextType;return typeof _=="object"&&_!==null?_=ni(_):(m=kn(r)?Xr:wn.current,h=r.contextTypes,_=(h=h!=null)?Ds(n,m):vr),r=new r(l,_),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Tl,n.stateNode=r,r._reactInternals=n,h&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=_),r}function pm(n,r,l,h){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,h),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,h),r.state!==n&&Tl.enqueueReplaceState(r,r.state,null)}function $u(n,r,l,h){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},Iu(n);var _=r.contextType;typeof _=="object"&&_!==null?m.context=ni(_):(_=kn(r)?Xr:wn.current,m.context=Ds(n,_)),m.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(Xu(n,r,_,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&Tl.enqueueReplaceState(m,m.state,null),xl(n,l,m,h),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function Vs(n,r){try{var l="",h=r;do l+=fe(h),h=h.return;while(h);var m=l}catch(_){m=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:r,stack:m,digest:null}}function Yu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function qu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Hx=typeof WeakMap=="function"?WeakMap:Map;function mm(n,r,l){l=Wi(-1,l),l.tag=3,l.payload={element:null};var h=r.value;return l.callback=function(){Nl||(Nl=!0,uh=h),qu(n,r)},l}function gm(n,r,l){l=Wi(-1,l),l.tag=3;var h=n.type.getDerivedStateFromError;if(typeof h=="function"){var m=r.value;l.payload=function(){return h(m)},l.callback=function(){qu(n,r)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){qu(n,r),typeof h!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})}),l}function vm(n,r,l){var h=n.pingCache;if(h===null){h=n.pingCache=new Hx;var m=new Set;h.set(r,m)}else m=h.get(r),m===void 0&&(m=new Set,h.set(r,m));m.has(l)||(m.add(l),n=ty.bind(null,n,r,l),r.then(n,n))}function xm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function ym(n,r,l,h,m){return n.mode&1?(n.flags|=65536,n.lanes=m,n):(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Wi(-1,1),r.tag=2,_r(l,r,1))),l.lanes|=1),n)}var Vx=E.ReactCurrentOwner,On=!1;function Ln(n,r,l,h){r.child=n===null?zp(r,null,l,h):Os(r,n.child,l,h)}function _m(n,r,l,h,m){l=l.render;var _=r.ref;return Bs(r,m),h=Bu(n,r,l,h,_,m),l=Hu(),n!==null&&!On?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,ji(n,r,m)):(jt&&l&&Mu(r),r.flags|=1,Ln(n,r,h,m),r.child)}function Sm(n,r,l,h,m){if(n===null){var _=l.type;return typeof _=="function"&&!vh(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=_,wm(n,r,_,h,m)):(n=Ol(l.type,null,h,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(_=n.child,!(n.lanes&m)){var C=_.memoizedProps;if(l=l.compare,l=l!==null?l:Wo,l(C,h)&&n.ref===r.ref)return ji(n,r,m)}return r.flags|=1,n=br(_,h),n.ref=r.ref,n.return=r,r.child=n}function wm(n,r,l,h,m){if(n!==null){var _=n.memoizedProps;if(Wo(_,h)&&n.ref===r.ref)if(On=!1,r.pendingProps=h=_,(n.lanes&m)!==0)n.flags&131072&&(On=!0);else return r.lanes=n.lanes,ji(n,r,m)}return Ku(n,r,l,h,m)}function Mm(n,r,l){var h=r.pendingProps,m=h.children,_=n!==null?n.memoizedState:null;if(h.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Ws,qn),qn|=l;else{if(!(l&1073741824))return n=_!==null?_.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Bt(Ws,qn),qn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=_!==null?_.baseLanes:l,Bt(Ws,qn),qn|=h}else _!==null?(h=_.baseLanes|l,r.memoizedState=null):h=l,Bt(Ws,qn),qn|=h;return Ln(n,r,m,l),r.child}function Em(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Ku(n,r,l,h,m){var _=kn(l)?Xr:wn.current;return _=Ds(r,_),Bs(r,m),l=Bu(n,r,l,h,_,m),h=Hu(),n!==null&&!On?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,ji(n,r,m)):(jt&&h&&Mu(r),r.flags|=1,Ln(n,r,l,m),r.child)}function Tm(n,r,l,h,m){if(kn(l)){var _=!0;cl(r)}else _=!1;if(Bs(r,m),r.stateNode===null)Al(n,r),fm(r,l,h),$u(r,l,h,m),h=!0;else if(n===null){var C=r.stateNode,B=r.memoizedProps;C.props=B;var W=C.context,ae=l.contextType;typeof ae=="object"&&ae!==null?ae=ni(ae):(ae=kn(l)?Xr:wn.current,ae=Ds(r,ae));var Se=l.getDerivedStateFromProps,Te=typeof Se=="function"||typeof C.getSnapshotBeforeUpdate=="function";Te||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(B!==h||W!==ae)&&pm(r,C,h,ae),yr=!1;var _e=r.memoizedState;C.state=_e,xl(r,h,C,m),W=r.memoizedState,B!==h||_e!==W||Fn.current||yr?(typeof Se=="function"&&(Xu(r,l,Se,h),W=r.memoizedState),(B=yr||dm(r,l,B,h,_e,W,ae))?(Te||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(r.flags|=4194308)):(typeof C.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=h,r.memoizedState=W),C.props=h,C.state=W,C.context=ae,h=B):(typeof C.componentDidMount=="function"&&(r.flags|=4194308),h=!1)}else{C=r.stateNode,Hp(n,r),B=r.memoizedProps,ae=r.type===r.elementType?B:di(r.type,B),C.props=ae,Te=r.pendingProps,_e=C.context,W=l.contextType,typeof W=="object"&&W!==null?W=ni(W):(W=kn(l)?Xr:wn.current,W=Ds(r,W));var Ge=l.getDerivedStateFromProps;(Se=typeof Ge=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(B!==Te||_e!==W)&&pm(r,C,h,W),yr=!1,_e=r.memoizedState,C.state=_e,xl(r,h,C,m);var Je=r.memoizedState;B!==Te||_e!==Je||Fn.current||yr?(typeof Ge=="function"&&(Xu(r,l,Ge,h),Je=r.memoizedState),(ae=yr||dm(r,l,ae,h,_e,Je,W)||!1)?(Se||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(h,Je,W),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(h,Je,W)),typeof C.componentDidUpdate=="function"&&(r.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof C.componentDidUpdate!="function"||B===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),r.memoizedProps=h,r.memoizedState=Je),C.props=h,C.state=Je,C.context=W,h=ae):(typeof C.componentDidUpdate!="function"||B===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),h=!1)}return Zu(n,r,l,h,_,m)}function Zu(n,r,l,h,m,_){Em(n,r);var C=(r.flags&128)!==0;if(!h&&!C)return m&&Pp(r,l,!1),ji(n,r,_);h=r.stateNode,Vx.current=r;var B=C&&typeof l.getDerivedStateFromError!="function"?null:h.render();return r.flags|=1,n!==null&&C?(r.child=Os(r,n.child,null,_),r.child=Os(r,null,B,_)):Ln(n,r,B,_),r.memoizedState=h.state,m&&Pp(r,l,!0),r.child}function bm(n){var r=n.stateNode;r.pendingContext?Cp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Cp(n,r.context,!1),Du(n,r.containerInfo)}function Am(n,r,l,h,m){return ks(),Au(m),r.flags|=256,Ln(n,r,l,h),r.child}var Ju={dehydrated:null,treeContext:null,retryLane:0};function Qu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Cm(n,r,l){var h=r.pendingProps,m=$t.current,_=!1,C=(r.flags&128)!==0,B;if((B=C)||(B=n!==null&&n.memoizedState===null?!1:(m&2)!==0),B?(_=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),Bt($t,m&1),n===null)return bu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(C=h.children,n=h.fallback,_?(h=r.mode,_=r.child,C={mode:"hidden",children:C},!(h&1)&&_!==null?(_.childLanes=0,_.pendingProps=C):_=zl(C,h,0,null),n=ns(n,h,l,null),_.return=r,n.return=r,_.sibling=n,r.child=_,r.child.memoizedState=Qu(l),r.memoizedState=Ju,n):eh(r,C));if(m=n.memoizedState,m!==null&&(B=m.dehydrated,B!==null))return Gx(n,r,C,h,B,m,l);if(_){_=h.fallback,C=r.mode,m=n.child,B=m.sibling;var W={mode:"hidden",children:h.children};return!(C&1)&&r.child!==m?(h=r.child,h.childLanes=0,h.pendingProps=W,r.deletions=null):(h=br(m,W),h.subtreeFlags=m.subtreeFlags&14680064),B!==null?_=br(B,_):(_=ns(_,C,l,null),_.flags|=2),_.return=r,h.return=r,h.sibling=_,r.child=h,h=_,_=r.child,C=n.child.memoizedState,C=C===null?Qu(l):{baseLanes:C.baseLanes|l,cachePool:null,transitions:C.transitions},_.memoizedState=C,_.childLanes=n.childLanes&~l,r.memoizedState=Ju,h}return _=n.child,n=_.sibling,h=br(_,{mode:"visible",children:h.children}),!(r.mode&1)&&(h.lanes=l),h.return=r,h.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=h,r.memoizedState=null,h}function eh(n,r){return r=zl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function bl(n,r,l,h){return h!==null&&Au(h),Os(r,n.child,null,l),n=eh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Gx(n,r,l,h,m,_,C){if(l)return r.flags&256?(r.flags&=-257,h=Yu(Error(t(422))),bl(n,r,C,h)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(_=h.fallback,m=r.mode,h=zl({mode:"visible",children:h.children},m,0,null),_=ns(_,m,C,null),_.flags|=2,h.return=r,_.return=r,h.sibling=_,r.child=h,r.mode&1&&Os(r,n.child,null,C),r.child.memoizedState=Qu(C),r.memoizedState=Ju,_);if(!(r.mode&1))return bl(n,r,C,null);if(m.data==="$!"){if(h=m.nextSibling&&m.nextSibling.dataset,h)var B=h.dgst;return h=B,_=Error(t(419)),h=Yu(_,h,void 0),bl(n,r,C,h)}if(B=(C&n.childLanes)!==0,On||B){if(h=pn,h!==null){switch(C&-C){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=m&(h.suspendedLanes|C)?0:m,m!==0&&m!==_.retryLane&&(_.retryLane=m,Gi(n,m),mi(h,n,m,-1))}return gh(),h=Yu(Error(t(421))),bl(n,r,C,h)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=ny.bind(null,n),m._reactRetry=r,null):(n=_.treeContext,Yn=mr(m.nextSibling),$n=r,jt=!0,hi=null,n!==null&&(ei[ti++]=Hi,ei[ti++]=Vi,ei[ti++]=$r,Hi=n.id,Vi=n.overflow,$r=r),r=eh(r,h.children),r.flags|=4096,r)}function Rm(n,r,l){n.lanes|=r;var h=n.alternate;h!==null&&(h.lanes|=r),Lu(n.return,r,l)}function th(n,r,l,h,m){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:m}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=h,_.tail=l,_.tailMode=m)}function Pm(n,r,l){var h=r.pendingProps,m=h.revealOrder,_=h.tail;if(Ln(n,r,h.children,l),h=$t.current,h&2)h=h&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Rm(n,l,r);else if(n.tag===19)Rm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}h&=1}if(Bt($t,h),!(r.mode&1))r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&yl(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),th(r,!1,m,l,_);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&yl(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}th(r,!0,l,null,_);break;case"together":th(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Al(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function ji(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Jr|=r.lanes,!(l&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=br(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=br(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Wx(n,r,l){switch(r.tag){case 3:bm(r),ks();break;case 5:Wp(r);break;case 1:kn(r.type)&&cl(r);break;case 4:Du(r,r.stateNode.containerInfo);break;case 10:var h=r.type._context,m=r.memoizedProps.value;Bt(ml,h._currentValue),h._currentValue=m;break;case 13:if(h=r.memoizedState,h!==null)return h.dehydrated!==null?(Bt($t,$t.current&1),r.flags|=128,null):l&r.child.childLanes?Cm(n,r,l):(Bt($t,$t.current&1),n=ji(n,r,l),n!==null?n.sibling:null);Bt($t,$t.current&1);break;case 19:if(h=(l&r.childLanes)!==0,n.flags&128){if(h)return Pm(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Bt($t,$t.current),h)break;return null;case 22:case 23:return r.lanes=0,Mm(n,r,l)}return ji(n,r,l)}var Lm,nh,Nm,Im;Lm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},nh=function(){},Nm=function(n,r,l,h){var m=n.memoizedProps;if(m!==h){n=r.stateNode,Kr(Ai.current);var _=null;switch(l){case"input":m=O(n,m),h=O(n,h),_=[];break;case"select":m=oe({},m,{value:void 0}),h=oe({},h,{value:void 0}),_=[];break;case"textarea":m=L(n,m),h=L(n,h),_=[];break;default:typeof m.onClick!="function"&&typeof h.onClick=="function"&&(n.onclick=ol)}_t(l,h);var C;l=null;for(ae in m)if(!h.hasOwnProperty(ae)&&m.hasOwnProperty(ae)&&m[ae]!=null)if(ae==="style"){var B=m[ae];for(C in B)B.hasOwnProperty(C)&&(l||(l={}),l[C]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?_||(_=[]):(_=_||[]).push(ae,null));for(ae in h){var W=h[ae];if(B=m!=null?m[ae]:void 0,h.hasOwnProperty(ae)&&W!==B&&(W!=null||B!=null))if(ae==="style")if(B){for(C in B)!B.hasOwnProperty(C)||W&&W.hasOwnProperty(C)||(l||(l={}),l[C]="");for(C in W)W.hasOwnProperty(C)&&B[C]!==W[C]&&(l||(l={}),l[C]=W[C])}else l||(_||(_=[]),_.push(ae,l)),l=W;else ae==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,B=B?B.__html:void 0,W!=null&&B!==W&&(_=_||[]).push(ae,W)):ae==="children"?typeof W!="string"&&typeof W!="number"||(_=_||[]).push(ae,""+W):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(W!=null&&ae==="onScroll"&&Vt("scroll",n),_||B===W||(_=[])):(_=_||[]).push(ae,W))}l&&(_=_||[]).push("style",l);var ae=_;(r.updateQueue=ae)&&(r.flags|=4)}},Im=function(n,r,l,h){l!==h&&(r.flags|=4)};function sa(n,r){if(!jt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:h.sibling=null}}function En(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,h=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,h|=m.subtreeFlags&14680064,h|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,h|=m.subtreeFlags,h|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=h,n.childLanes=l,r}function jx(n,r,l){var h=r.pendingProps;switch(Eu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(r),null;case 1:return kn(r.type)&&ll(),En(r),null;case 3:return h=r.stateNode,Hs(),Gt(Fn),Gt(wn),ku(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(n===null||n.child===null)&&(fl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,hi!==null&&(fh(hi),hi=null))),nh(n,r),En(r),null;case 5:Uu(r);var m=Kr(ea.current);if(l=r.type,n!==null&&r.stateNode!=null)Nm(n,r,l,h,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!h){if(r.stateNode===null)throw Error(t(166));return En(r),null}if(n=Kr(Ai.current),fl(r)){h=r.stateNode,l=r.type;var _=r.memoizedProps;switch(h[bi]=r,h[qo]=_,n=(r.mode&1)!==0,l){case"dialog":Vt("cancel",h),Vt("close",h);break;case"iframe":case"object":case"embed":Vt("load",h);break;case"video":case"audio":for(m=0;m<Xo.length;m++)Vt(Xo[m],h);break;case"source":Vt("error",h);break;case"img":case"image":case"link":Vt("error",h),Vt("load",h);break;case"details":Vt("toggle",h);break;case"input":Qe(h,_),Vt("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!_.multiple},Vt("invalid",h);break;case"textarea":ne(h,_),Vt("invalid",h)}_t(l,_),m=null;for(var C in _)if(_.hasOwnProperty(C)){var B=_[C];C==="children"?typeof B=="string"?h.textContent!==B&&(_.suppressHydrationWarning!==!0&&sl(h.textContent,B,n),m=["children",B]):typeof B=="number"&&h.textContent!==""+B&&(_.suppressHydrationWarning!==!0&&sl(h.textContent,B,n),m=["children",""+B]):o.hasOwnProperty(C)&&B!=null&&C==="onScroll"&&Vt("scroll",h)}switch(l){case"input":gt(h),Re(h,_,!0);break;case"textarea":gt(h),ye(h);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(h.onclick=ol)}h=m,r.updateQueue=h,h!==null&&(r.flags|=4)}else{C=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=me(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof h.is=="string"?n=C.createElement(l,{is:h.is}):(n=C.createElement(l),l==="select"&&(C=n,h.multiple?C.multiple=!0:h.size&&(C.size=h.size))):n=C.createElementNS(n,l),n[bi]=r,n[qo]=h,Lm(n,r,!1,!1),r.stateNode=n;e:{switch(C=ft(l,h),l){case"dialog":Vt("cancel",n),Vt("close",n),m=h;break;case"iframe":case"object":case"embed":Vt("load",n),m=h;break;case"video":case"audio":for(m=0;m<Xo.length;m++)Vt(Xo[m],n);m=h;break;case"source":Vt("error",n),m=h;break;case"img":case"image":case"link":Vt("error",n),Vt("load",n),m=h;break;case"details":Vt("toggle",n),m=h;break;case"input":Qe(n,h),m=O(n,h),Vt("invalid",n);break;case"option":m=h;break;case"select":n._wrapperState={wasMultiple:!!h.multiple},m=oe({},h,{value:void 0}),Vt("invalid",n);break;case"textarea":ne(n,h),m=L(n,h),Vt("invalid",n);break;default:m=h}_t(l,m),B=m;for(_ in B)if(B.hasOwnProperty(_)){var W=B[_];_==="style"?lt(n,W):_==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&We(n,W)):_==="children"?typeof W=="string"?(l!=="textarea"||W!=="")&&vt(n,W):typeof W=="number"&&vt(n,""+W):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?W!=null&&_==="onScroll"&&Vt("scroll",n):W!=null&&T(n,_,W,C))}switch(l){case"input":gt(n),Re(n,h,!1);break;case"textarea":gt(n),ye(n);break;case"option":h.value!=null&&n.setAttribute("value",""+Le(h.value));break;case"select":n.multiple=!!h.multiple,_=h.value,_!=null?U(n,!!h.multiple,_,!1):h.defaultValue!=null&&U(n,!!h.multiple,h.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=ol)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return En(r),null;case 6:if(n&&r.stateNode!=null)Im(n,r,n.memoizedProps,h);else{if(typeof h!="string"&&r.stateNode===null)throw Error(t(166));if(l=Kr(ea.current),Kr(Ai.current),fl(r)){if(h=r.stateNode,l=r.memoizedProps,h[bi]=r,(_=h.nodeValue!==l)&&(n=$n,n!==null))switch(n.tag){case 3:sl(h.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&sl(h.nodeValue,l,(n.mode&1)!==0)}_&&(r.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[bi]=r,r.stateNode=h}return En(r),null;case 13:if(Gt($t),h=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&Yn!==null&&r.mode&1&&!(r.flags&128))Fp(),ks(),r.flags|=98560,_=!1;else if(_=fl(r),h!==null&&h.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[bi]=r}else ks(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;En(r),_=!1}else hi!==null&&(fh(hi),hi=null),_=!0;if(!_)return r.flags&65536?r:null}return r.flags&128?(r.lanes=l,r):(h=h!==null,h!==(n!==null&&n.memoizedState!==null)&&h&&(r.child.flags|=8192,r.mode&1&&(n===null||$t.current&1?un===0&&(un=3):gh())),r.updateQueue!==null&&(r.flags|=4),En(r),null);case 4:return Hs(),nh(n,r),n===null&&$o(r.stateNode.containerInfo),En(r),null;case 10:return Pu(r.type._context),En(r),null;case 17:return kn(r.type)&&ll(),En(r),null;case 19:if(Gt($t),_=r.memoizedState,_===null)return En(r),null;if(h=(r.flags&128)!==0,C=_.rendering,C===null)if(h)sa(_,!1);else{if(un!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(C=yl(n),C!==null){for(r.flags|=128,sa(_,!1),h=C.updateQueue,h!==null&&(r.updateQueue=h,r.flags|=4),r.subtreeFlags=0,h=l,l=r.child;l!==null;)_=l,n=h,_.flags&=14680066,C=_.alternate,C===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=C.childLanes,_.lanes=C.lanes,_.child=C.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=C.memoizedProps,_.memoizedState=C.memoizedState,_.updateQueue=C.updateQueue,_.type=C.type,n=C.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Bt($t,$t.current&1|2),r.child}n=n.sibling}_.tail!==null&&j()>js&&(r.flags|=128,h=!0,sa(_,!1),r.lanes=4194304)}else{if(!h)if(n=yl(C),n!==null){if(r.flags|=128,h=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),sa(_,!0),_.tail===null&&_.tailMode==="hidden"&&!C.alternate&&!jt)return En(r),null}else 2*j()-_.renderingStartTime>js&&l!==1073741824&&(r.flags|=128,h=!0,sa(_,!1),r.lanes=4194304);_.isBackwards?(C.sibling=r.child,r.child=C):(l=_.last,l!==null?l.sibling=C:r.child=C,_.last=C)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=j(),r.sibling=null,l=$t.current,Bt($t,h?l&1|2:l&1),r):(En(r),null);case 22:case 23:return mh(),h=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==h&&(r.flags|=8192),h&&r.mode&1?qn&1073741824&&(En(r),r.subtreeFlags&6&&(r.flags|=8192)):En(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Xx(n,r){switch(Eu(r),r.tag){case 1:return kn(r.type)&&ll(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Hs(),Gt(Fn),Gt(wn),ku(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return Uu(r),null;case 13:if(Gt($t),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ks()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Gt($t),null;case 4:return Hs(),null;case 10:return Pu(r.type._context),null;case 22:case 23:return mh(),null;case 24:return null;default:return null}}var Cl=!1,Tn=!1,$x=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Gs(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){Qt(n,r,h)}else l.current=null}function ih(n,r,l){try{l()}catch(h){Qt(n,r,h)}}var Dm=!1;function Yx(n,r){if(mu=Ya,n=dp(),au(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var m=h.anchorOffset,_=h.focusNode;h=h.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var C=0,B=-1,W=-1,ae=0,Se=0,Te=n,_e=null;t:for(;;){for(var Ge;Te!==l||m!==0&&Te.nodeType!==3||(B=C+m),Te!==_||h!==0&&Te.nodeType!==3||(W=C+h),Te.nodeType===3&&(C+=Te.nodeValue.length),(Ge=Te.firstChild)!==null;)_e=Te,Te=Ge;for(;;){if(Te===n)break t;if(_e===l&&++ae===m&&(B=C),_e===_&&++Se===h&&(W=C),(Ge=Te.nextSibling)!==null)break;Te=_e,_e=Te.parentNode}Te=Ge}l=B===-1||W===-1?null:{start:B,end:W}}else l=null}l=l||{start:0,end:0}}else l=null;for(gu={focusedElem:n,selectionRange:l},Ya=!1,qe=r;qe!==null;)if(r=qe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,qe=n;else for(;qe!==null;){r=qe;try{var Je=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var et=Je.memoizedProps,nn=Je.memoizedState,ee=r.stateNode,X=ee.getSnapshotBeforeUpdate(r.elementType===r.type?et:di(r.type,et),nn);ee.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var re=r.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){Qt(r,r.return,Pe)}if(n=r.sibling,n!==null){n.return=r.return,qe=n;break}qe=r.return}return Je=Dm,Dm=!1,Je}function oa(n,r,l){var h=r.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var m=h=h.next;do{if((m.tag&n)===n){var _=m.destroy;m.destroy=void 0,_!==void 0&&ih(r,l,_)}m=m.next}while(m!==h)}}function Rl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var h=l.create;l.destroy=h()}l=l.next}while(l!==r)}}function rh(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Um(n){var r=n.alternate;r!==null&&(n.alternate=null,Um(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[bi],delete r[qo],delete r[_u],delete r[Px],delete r[Lx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Fm(n){return n.tag===5||n.tag===3||n.tag===4}function km(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Fm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function sh(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=ol));else if(h!==4&&(n=n.child,n!==null))for(sh(n,r,l),n=n.sibling;n!==null;)sh(n,r,l),n=n.sibling}function oh(n,r,l){var h=n.tag;if(h===5||h===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(h!==4&&(n=n.child,n!==null))for(oh(n,r,l),n=n.sibling;n!==null;)oh(n,r,l),n=n.sibling}var xn=null,fi=!1;function Sr(n,r,l){for(l=l.child;l!==null;)Om(n,r,l),l=l.sibling}function Om(n,r,l){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(nt,l)}catch{}switch(l.tag){case 5:Tn||Gs(l,r);case 6:var h=xn,m=fi;xn=null,Sr(n,r,l),xn=h,fi=m,xn!==null&&(fi?(n=xn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):xn.removeChild(l.stateNode));break;case 18:xn!==null&&(fi?(n=xn,l=l.stateNode,n.nodeType===8?yu(n.parentNode,l):n.nodeType===1&&yu(n,l),Oo(n)):yu(xn,l.stateNode));break;case 4:h=xn,m=fi,xn=l.stateNode.containerInfo,fi=!0,Sr(n,r,l),xn=h,fi=m;break;case 0:case 11:case 14:case 15:if(!Tn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){m=h=h.next;do{var _=m,C=_.destroy;_=_.tag,C!==void 0&&(_&2||_&4)&&ih(l,r,C),m=m.next}while(m!==h)}Sr(n,r,l);break;case 1:if(!Tn&&(Gs(l,r),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(B){Qt(l,r,B)}Sr(n,r,l);break;case 21:Sr(n,r,l);break;case 22:l.mode&1?(Tn=(h=Tn)||l.memoizedState!==null,Sr(n,r,l),Tn=h):Sr(n,r,l);break;default:Sr(n,r,l)}}function zm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new $x),r.forEach(function(h){var m=iy.bind(null,n,h);l.has(h)||(l.add(h),h.then(m,m))})}}function pi(n,r){var l=r.deletions;if(l!==null)for(var h=0;h<l.length;h++){var m=l[h];try{var _=n,C=r,B=C;e:for(;B!==null;){switch(B.tag){case 5:xn=B.stateNode,fi=!1;break e;case 3:xn=B.stateNode.containerInfo,fi=!0;break e;case 4:xn=B.stateNode.containerInfo,fi=!0;break e}B=B.return}if(xn===null)throw Error(t(160));Om(_,C,m),xn=null,fi=!1;var W=m.alternate;W!==null&&(W.return=null),m.return=null}catch(ae){Qt(m,r,ae)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Bm(r,n),r=r.sibling}function Bm(n,r){var l=n.alternate,h=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(pi(r,n),Ri(n),h&4){try{oa(3,n,n.return),Rl(3,n)}catch(et){Qt(n,n.return,et)}try{oa(5,n,n.return)}catch(et){Qt(n,n.return,et)}}break;case 1:pi(r,n),Ri(n),h&512&&l!==null&&Gs(l,l.return);break;case 5:if(pi(r,n),Ri(n),h&512&&l!==null&&Gs(l,l.return),n.flags&32){var m=n.stateNode;try{vt(m,"")}catch(et){Qt(n,n.return,et)}}if(h&4&&(m=n.stateNode,m!=null)){var _=n.memoizedProps,C=l!==null?l.memoizedProps:_,B=n.type,W=n.updateQueue;if(n.updateQueue=null,W!==null)try{B==="input"&&_.type==="radio"&&_.name!=null&&we(m,_),ft(B,C);var ae=ft(B,_);for(C=0;C<W.length;C+=2){var Se=W[C],Te=W[C+1];Se==="style"?lt(m,Te):Se==="dangerouslySetInnerHTML"?We(m,Te):Se==="children"?vt(m,Te):T(m,Se,Te,ae)}switch(B){case"input":Ve(m,_);break;case"textarea":pe(m,_);break;case"select":var _e=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!_.multiple;var Ge=_.value;Ge!=null?U(m,!!_.multiple,Ge,!1):_e!==!!_.multiple&&(_.defaultValue!=null?U(m,!!_.multiple,_.defaultValue,!0):U(m,!!_.multiple,_.multiple?[]:"",!1))}m[qo]=_}catch(et){Qt(n,n.return,et)}}break;case 6:if(pi(r,n),Ri(n),h&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,_=n.memoizedProps;try{m.nodeValue=_}catch(et){Qt(n,n.return,et)}}break;case 3:if(pi(r,n),Ri(n),h&4&&l!==null&&l.memoizedState.isDehydrated)try{Oo(r.containerInfo)}catch(et){Qt(n,n.return,et)}break;case 4:pi(r,n),Ri(n);break;case 13:pi(r,n),Ri(n),m=n.child,m.flags&8192&&(_=m.memoizedState!==null,m.stateNode.isHidden=_,!_||m.alternate!==null&&m.alternate.memoizedState!==null||(ch=j())),h&4&&zm(n);break;case 22:if(Se=l!==null&&l.memoizedState!==null,n.mode&1?(Tn=(ae=Tn)||Se,pi(r,n),Tn=ae):pi(r,n),Ri(n),h&8192){if(ae=n.memoizedState!==null,(n.stateNode.isHidden=ae)&&!Se&&n.mode&1)for(qe=n,Se=n.child;Se!==null;){for(Te=qe=Se;qe!==null;){switch(_e=qe,Ge=_e.child,_e.tag){case 0:case 11:case 14:case 15:oa(4,_e,_e.return);break;case 1:Gs(_e,_e.return);var Je=_e.stateNode;if(typeof Je.componentWillUnmount=="function"){h=_e,l=_e.return;try{r=h,Je.props=r.memoizedProps,Je.state=r.memoizedState,Je.componentWillUnmount()}catch(et){Qt(h,l,et)}}break;case 5:Gs(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Gm(Te);continue}}Ge!==null?(Ge.return=_e,qe=Ge):Gm(Te)}Se=Se.sibling}e:for(Se=null,Te=n;;){if(Te.tag===5){if(Se===null){Se=Te;try{m=Te.stateNode,ae?(_=m.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(B=Te.stateNode,W=Te.memoizedProps.style,C=W!=null&&W.hasOwnProperty("display")?W.display:null,B.style.display=st("display",C))}catch(et){Qt(n,n.return,et)}}}else if(Te.tag===6){if(Se===null)try{Te.stateNode.nodeValue=ae?"":Te.memoizedProps}catch(et){Qt(n,n.return,et)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;Se===Te&&(Se=null),Te=Te.return}Se===Te&&(Se=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:pi(r,n),Ri(n),h&4&&zm(n);break;case 21:break;default:pi(r,n),Ri(n)}}function Ri(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Fm(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var m=h.stateNode;h.flags&32&&(vt(m,""),h.flags&=-33);var _=km(n);oh(n,_,m);break;case 3:case 4:var C=h.stateNode.containerInfo,B=km(n);sh(n,B,C);break;default:throw Error(t(161))}}catch(W){Qt(n,n.return,W)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function qx(n,r,l){qe=n,Hm(n)}function Hm(n,r,l){for(var h=(n.mode&1)!==0;qe!==null;){var m=qe,_=m.child;if(m.tag===22&&h){var C=m.memoizedState!==null||Cl;if(!C){var B=m.alternate,W=B!==null&&B.memoizedState!==null||Tn;B=Cl;var ae=Tn;if(Cl=C,(Tn=W)&&!ae)for(qe=m;qe!==null;)C=qe,W=C.child,C.tag===22&&C.memoizedState!==null?Wm(m):W!==null?(W.return=C,qe=W):Wm(m);for(;_!==null;)qe=_,Hm(_),_=_.sibling;qe=m,Cl=B,Tn=ae}Vm(n)}else m.subtreeFlags&8772&&_!==null?(_.return=m,qe=_):Vm(n)}}function Vm(n){for(;qe!==null;){var r=qe;if(r.flags&8772){var l=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Tn||Rl(5,r);break;case 1:var h=r.stateNode;if(r.flags&4&&!Tn)if(l===null)h.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:di(r.type,l.memoizedProps);h.componentDidUpdate(m,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var _=r.updateQueue;_!==null&&Gp(r,_,h);break;case 3:var C=r.updateQueue;if(C!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Gp(r,C,l)}break;case 5:var B=r.stateNode;if(l===null&&r.flags&4){l=B;var W=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&l.focus();break;case"img":W.src&&(l.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ae=r.alternate;if(ae!==null){var Se=ae.memoizedState;if(Se!==null){var Te=Se.dehydrated;Te!==null&&Oo(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Tn||r.flags&512&&rh(r)}catch(_e){Qt(r,r.return,_e)}}if(r===n){qe=null;break}if(l=r.sibling,l!==null){l.return=r.return,qe=l;break}qe=r.return}}function Gm(n){for(;qe!==null;){var r=qe;if(r===n){qe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,qe=l;break}qe=r.return}}function Wm(n){for(;qe!==null;){var r=qe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Rl(4,r)}catch(W){Qt(r,l,W)}break;case 1:var h=r.stateNode;if(typeof h.componentDidMount=="function"){var m=r.return;try{h.componentDidMount()}catch(W){Qt(r,m,W)}}var _=r.return;try{rh(r)}catch(W){Qt(r,_,W)}break;case 5:var C=r.return;try{rh(r)}catch(W){Qt(r,C,W)}}}catch(W){Qt(r,r.return,W)}if(r===n){qe=null;break}var B=r.sibling;if(B!==null){B.return=r.return,qe=B;break}qe=r.return}}var Kx=Math.ceil,Pl=E.ReactCurrentDispatcher,ah=E.ReactCurrentOwner,ri=E.ReactCurrentBatchConfig,Ct=0,pn=null,rn=null,yn=0,qn=0,Ws=gr(0),un=0,aa=null,Jr=0,Ll=0,lh=0,la=null,zn=null,ch=0,js=1/0,Xi=null,Nl=!1,uh=null,wr=null,Il=!1,Mr=null,Dl=0,ca=0,hh=null,Ul=-1,Fl=0;function Nn(){return Ct&6?j():Ul!==-1?Ul:Ul=j()}function Er(n){return n.mode&1?Ct&2&&yn!==0?yn&-yn:Ix.transition!==null?(Fl===0&&(Fl=Pn()),Fl):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:Xf(n.type)),n):1}function mi(n,r,l,h){if(50<ca)throw ca=0,hh=null,Error(t(185));tn(n,l,h),(!(Ct&2)||n!==pn)&&(n===pn&&(!(Ct&2)&&(Ll|=l),un===4&&Tr(n,yn)),Bn(n,h),l===1&&Ct===0&&!(r.mode&1)&&(js=j()+500,ul&&xr()))}function Bn(n,r){var l=n.callbackNode;Gr(n,r);var h=ci(n,n===pn?yn:0);if(h===0)l!==null&&Z(l),n.callbackNode=null,n.callbackPriority=0;else if(r=h&-h,n.callbackPriority!==r){if(l!=null&&Z(l),r===1)n.tag===0?Nx(Xm.bind(null,n)):Lp(Xm.bind(null,n)),Cx(function(){!(Ct&6)&&xr()}),l=null;else{switch(Of(h)){case 1:l=ke;break;case 4:l=je;break;case 16:l=Ye;break;case 536870912:l=ut;break;default:l=Ye}l=e0(l,jm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function jm(n,r){if(Ul=-1,Fl=0,Ct&6)throw Error(t(327));var l=n.callbackNode;if(Xs()&&n.callbackNode!==l)return null;var h=ci(n,n===pn?yn:0);if(h===0)return null;if(h&30||h&n.expiredLanes||r)r=kl(n,h);else{r=h;var m=Ct;Ct|=2;var _=Ym();(pn!==n||yn!==r)&&(Xi=null,js=j()+500,es(n,r));do try{Qx();break}catch(B){$m(n,B)}while(!0);Ru(),Pl.current=_,Ct=m,rn!==null?r=0:(pn=null,yn=0,r=un)}if(r!==0){if(r===2&&(m=Ft(n),m!==0&&(h=m,r=dh(n,m))),r===1)throw l=aa,es(n,0),Tr(n,h),Bn(n,j()),l;if(r===6)Tr(n,h);else{if(m=n.current.alternate,!(h&30)&&!Zx(m)&&(r=kl(n,h),r===2&&(_=Ft(n),_!==0&&(h=_,r=dh(n,_))),r===1))throw l=aa,es(n,0),Tr(n,h),Bn(n,j()),l;switch(n.finishedWork=m,n.finishedLanes=h,r){case 0:case 1:throw Error(t(345));case 2:ts(n,zn,Xi);break;case 3:if(Tr(n,h),(h&130023424)===h&&(r=ch+500-j(),10<r)){if(ci(n,0)!==0)break;if(m=n.suspendedLanes,(m&h)!==h){Nn(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=xu(ts.bind(null,n,zn,Xi),r);break}ts(n,zn,Xi);break;case 4:if(Tr(n,h),(h&4194240)===h)break;for(r=n.eventTimes,m=-1;0<h;){var C=31-Pt(h);_=1<<C,C=r[C],C>m&&(m=C),h&=~_}if(h=m,h=j()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*Kx(h/1960))-h,10<h){n.timeoutHandle=xu(ts.bind(null,n,zn,Xi),h);break}ts(n,zn,Xi);break;case 5:ts(n,zn,Xi);break;default:throw Error(t(329))}}}return Bn(n,j()),n.callbackNode===l?jm.bind(null,n):null}function dh(n,r){var l=la;return n.current.memoizedState.isDehydrated&&(es(n,r).flags|=256),n=kl(n,r),n!==2&&(r=zn,zn=l,r!==null&&fh(r)),n}function fh(n){zn===null?zn=n:zn.push.apply(zn,n)}function Zx(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var m=l[h],_=m.getSnapshot;m=m.value;try{if(!ui(_(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Tr(n,r){for(r&=~lh,r&=~Ll,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Pt(r),h=1<<l;n[l]=-1,r&=~h}}function Xm(n){if(Ct&6)throw Error(t(327));Xs();var r=ci(n,0);if(!(r&1))return Bn(n,j()),null;var l=kl(n,r);if(n.tag!==0&&l===2){var h=Ft(n);h!==0&&(r=h,l=dh(n,h))}if(l===1)throw l=aa,es(n,0),Tr(n,r),Bn(n,j()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,ts(n,zn,Xi),Bn(n,j()),null}function ph(n,r){var l=Ct;Ct|=1;try{return n(r)}finally{Ct=l,Ct===0&&(js=j()+500,ul&&xr())}}function Qr(n){Mr!==null&&Mr.tag===0&&!(Ct&6)&&Xs();var r=Ct;Ct|=1;var l=ri.transition,h=Mt;try{if(ri.transition=null,Mt=1,n)return n()}finally{Mt=h,ri.transition=l,Ct=r,!(Ct&6)&&xr()}}function mh(){qn=Ws.current,Gt(Ws)}function es(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Ax(l)),rn!==null)for(l=rn.return;l!==null;){var h=l;switch(Eu(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&ll();break;case 3:Hs(),Gt(Fn),Gt(wn),ku();break;case 5:Uu(h);break;case 4:Hs();break;case 13:Gt($t);break;case 19:Gt($t);break;case 10:Pu(h.type._context);break;case 22:case 23:mh()}l=l.return}if(pn=n,rn=n=br(n.current,null),yn=qn=r,un=0,aa=null,lh=Ll=Jr=0,zn=la=null,qr!==null){for(r=0;r<qr.length;r++)if(l=qr[r],h=l.interleaved,h!==null){l.interleaved=null;var m=h.next,_=l.pending;if(_!==null){var C=_.next;_.next=m,h.next=C}l.pending=h}qr=null}return n}function $m(n,r){do{var l=rn;try{if(Ru(),_l.current=El,Sl){for(var h=Yt.memoizedState;h!==null;){var m=h.queue;m!==null&&(m.pending=null),h=h.next}Sl=!1}if(Zr=0,fn=cn=Yt=null,ta=!1,na=0,ah.current=null,l===null||l.return===null){un=1,aa=r,rn=null;break}e:{var _=n,C=l.return,B=l,W=r;if(r=yn,B.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var ae=W,Se=B,Te=Se.tag;if(!(Se.mode&1)&&(Te===0||Te===11||Te===15)){var _e=Se.alternate;_e?(Se.updateQueue=_e.updateQueue,Se.memoizedState=_e.memoizedState,Se.lanes=_e.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ge=xm(C);if(Ge!==null){Ge.flags&=-257,ym(Ge,C,B,_,r),Ge.mode&1&&vm(_,ae,r),r=Ge,W=ae;var Je=r.updateQueue;if(Je===null){var et=new Set;et.add(W),r.updateQueue=et}else Je.add(W);break e}else{if(!(r&1)){vm(_,ae,r),gh();break e}W=Error(t(426))}}else if(jt&&B.mode&1){var nn=xm(C);if(nn!==null){!(nn.flags&65536)&&(nn.flags|=256),ym(nn,C,B,_,r),Au(Vs(W,B));break e}}_=W=Vs(W,B),un!==4&&(un=2),la===null?la=[_]:la.push(_),_=C;do{switch(_.tag){case 3:_.flags|=65536,r&=-r,_.lanes|=r;var ee=mm(_,W,r);Vp(_,ee);break e;case 1:B=W;var X=_.type,re=_.stateNode;if(!(_.flags&128)&&(typeof X.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(wr===null||!wr.has(re)))){_.flags|=65536,r&=-r,_.lanes|=r;var Pe=gm(_,B,r);Vp(_,Pe);break e}}_=_.return}while(_!==null)}Km(l)}catch(tt){r=tt,rn===l&&l!==null&&(rn=l=l.return);continue}break}while(!0)}function Ym(){var n=Pl.current;return Pl.current=El,n===null?El:n}function gh(){(un===0||un===3||un===2)&&(un=4),pn===null||!(Jr&268435455)&&!(Ll&268435455)||Tr(pn,yn)}function kl(n,r){var l=Ct;Ct|=2;var h=Ym();(pn!==n||yn!==r)&&(Xi=null,es(n,r));do try{Jx();break}catch(m){$m(n,m)}while(!0);if(Ru(),Ct=l,Pl.current=h,rn!==null)throw Error(t(261));return pn=null,yn=0,un}function Jx(){for(;rn!==null;)qm(rn)}function Qx(){for(;rn!==null&&!le();)qm(rn)}function qm(n){var r=Qm(n.alternate,n,qn);n.memoizedProps=n.pendingProps,r===null?Km(n):rn=r,ah.current=null}function Km(n){var r=n;do{var l=r.alternate;if(n=r.return,r.flags&32768){if(l=Xx(l,r),l!==null){l.flags&=32767,rn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{un=6,rn=null;return}}else if(l=jx(l,r,qn),l!==null){rn=l;return}if(r=r.sibling,r!==null){rn=r;return}rn=r=n}while(r!==null);un===0&&(un=5)}function ts(n,r,l){var h=Mt,m=ri.transition;try{ri.transition=null,Mt=1,ey(n,r,l,h)}finally{ri.transition=m,Mt=h}return null}function ey(n,r,l,h){do Xs();while(Mr!==null);if(Ct&6)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=l.lanes|l.childLanes;if(Sn(n,_),n===pn&&(rn=pn=null,yn=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||Il||(Il=!0,e0(Ye,function(){return Xs(),null})),_=(l.flags&15990)!==0,l.subtreeFlags&15990||_){_=ri.transition,ri.transition=null;var C=Mt;Mt=1;var B=Ct;Ct|=4,ah.current=null,Yx(n,l),Bm(l,n),_x(gu),Ya=!!mu,gu=mu=null,n.current=l,qx(l),ue(),Ct=B,Mt=C,ri.transition=_}else n.current=l;if(Il&&(Il=!1,Mr=n,Dl=m),_=n.pendingLanes,_===0&&(wr=null),Rt(l.stateNode),Bn(n,j()),r!==null)for(h=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],h(m.value,{componentStack:m.stack,digest:m.digest});if(Nl)throw Nl=!1,n=uh,uh=null,n;return Dl&1&&n.tag!==0&&Xs(),_=n.pendingLanes,_&1?n===hh?ca++:(ca=0,hh=n):ca=0,xr(),null}function Xs(){if(Mr!==null){var n=Of(Dl),r=ri.transition,l=Mt;try{if(ri.transition=null,Mt=16>n?16:n,Mr===null)var h=!1;else{if(n=Mr,Mr=null,Dl=0,Ct&6)throw Error(t(331));var m=Ct;for(Ct|=4,qe=n.current;qe!==null;){var _=qe,C=_.child;if(qe.flags&16){var B=_.deletions;if(B!==null){for(var W=0;W<B.length;W++){var ae=B[W];for(qe=ae;qe!==null;){var Se=qe;switch(Se.tag){case 0:case 11:case 15:oa(8,Se,_)}var Te=Se.child;if(Te!==null)Te.return=Se,qe=Te;else for(;qe!==null;){Se=qe;var _e=Se.sibling,Ge=Se.return;if(Um(Se),Se===ae){qe=null;break}if(_e!==null){_e.return=Ge,qe=_e;break}qe=Ge}}}var Je=_.alternate;if(Je!==null){var et=Je.child;if(et!==null){Je.child=null;do{var nn=et.sibling;et.sibling=null,et=nn}while(et!==null)}}qe=_}}if(_.subtreeFlags&2064&&C!==null)C.return=_,qe=C;else e:for(;qe!==null;){if(_=qe,_.flags&2048)switch(_.tag){case 0:case 11:case 15:oa(9,_,_.return)}var ee=_.sibling;if(ee!==null){ee.return=_.return,qe=ee;break e}qe=_.return}}var X=n.current;for(qe=X;qe!==null;){C=qe;var re=C.child;if(C.subtreeFlags&2064&&re!==null)re.return=C,qe=re;else e:for(C=X;qe!==null;){if(B=qe,B.flags&2048)try{switch(B.tag){case 0:case 11:case 15:Rl(9,B)}}catch(tt){Qt(B,B.return,tt)}if(B===C){qe=null;break e}var Pe=B.sibling;if(Pe!==null){Pe.return=B.return,qe=Pe;break e}qe=B.return}}if(Ct=m,xr(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(nt,n)}catch{}h=!0}return h}finally{Mt=l,ri.transition=r}}return!1}function Zm(n,r,l){r=Vs(l,r),r=mm(n,r,1),n=_r(n,r,1),r=Nn(),n!==null&&(tn(n,1,r),Bn(n,r))}function Qt(n,r,l){if(n.tag===3)Zm(n,n,l);else for(;r!==null;){if(r.tag===3){Zm(r,n,l);break}else if(r.tag===1){var h=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(wr===null||!wr.has(h))){n=Vs(l,n),n=gm(r,n,1),r=_r(r,n,1),n=Nn(),r!==null&&(tn(r,1,n),Bn(r,n));break}}r=r.return}}function ty(n,r,l){var h=n.pingCache;h!==null&&h.delete(r),r=Nn(),n.pingedLanes|=n.suspendedLanes&l,pn===n&&(yn&l)===l&&(un===4||un===3&&(yn&130023424)===yn&&500>j()-ch?es(n,0):lh|=l),Bn(n,r)}function Jm(n,r){r===0&&(n.mode&1?(r=Tt,Tt<<=1,!(Tt&130023424)&&(Tt=4194304)):r=1);var l=Nn();n=Gi(n,r),n!==null&&(tn(n,r,l),Bn(n,l))}function ny(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Jm(n,l)}function iy(n,r){var l=0;switch(n.tag){case 13:var h=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:h=n.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(r),Jm(n,l)}var Qm;Qm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Fn.current)On=!0;else{if(!(n.lanes&l)&&!(r.flags&128))return On=!1,Wx(n,r,l);On=!!(n.flags&131072)}else On=!1,jt&&r.flags&1048576&&Np(r,dl,r.index);switch(r.lanes=0,r.tag){case 2:var h=r.type;Al(n,r),n=r.pendingProps;var m=Ds(r,wn.current);Bs(r,l),m=Bu(null,r,h,n,m,l);var _=Hu();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,kn(h)?(_=!0,cl(r)):_=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Iu(r),m.updater=Tl,r.stateNode=m,m._reactInternals=r,$u(r,h,n,l),r=Zu(null,r,h,!0,_,l)):(r.tag=0,jt&&_&&Mu(r),Ln(null,r,m,l),r=r.child),r;case 16:h=r.elementType;e:{switch(Al(n,r),n=r.pendingProps,m=h._init,h=m(h._payload),r.type=h,m=r.tag=sy(h),n=di(h,n),m){case 0:r=Ku(null,r,h,n,l);break e;case 1:r=Tm(null,r,h,n,l);break e;case 11:r=_m(null,r,h,n,l);break e;case 14:r=Sm(null,r,h,di(h.type,n),l);break e}throw Error(t(306,h,""))}return r;case 0:return h=r.type,m=r.pendingProps,m=r.elementType===h?m:di(h,m),Ku(n,r,h,m,l);case 1:return h=r.type,m=r.pendingProps,m=r.elementType===h?m:di(h,m),Tm(n,r,h,m,l);case 3:e:{if(bm(r),n===null)throw Error(t(387));h=r.pendingProps,_=r.memoizedState,m=_.element,Hp(n,r),xl(r,h,null,l);var C=r.memoizedState;if(h=C.element,_.isDehydrated)if(_={element:h,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){m=Vs(Error(t(423)),r),r=Am(n,r,h,l,m);break e}else if(h!==m){m=Vs(Error(t(424)),r),r=Am(n,r,h,l,m);break e}else for(Yn=mr(r.stateNode.containerInfo.firstChild),$n=r,jt=!0,hi=null,l=zp(r,null,h,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ks(),h===m){r=ji(n,r,l);break e}Ln(n,r,h,l)}r=r.child}return r;case 5:return Wp(r),n===null&&bu(r),h=r.type,m=r.pendingProps,_=n!==null?n.memoizedProps:null,C=m.children,vu(h,m)?C=null:_!==null&&vu(h,_)&&(r.flags|=32),Em(n,r),Ln(n,r,C,l),r.child;case 6:return n===null&&bu(r),null;case 13:return Cm(n,r,l);case 4:return Du(r,r.stateNode.containerInfo),h=r.pendingProps,n===null?r.child=Os(r,null,h,l):Ln(n,r,h,l),r.child;case 11:return h=r.type,m=r.pendingProps,m=r.elementType===h?m:di(h,m),_m(n,r,h,m,l);case 7:return Ln(n,r,r.pendingProps,l),r.child;case 8:return Ln(n,r,r.pendingProps.children,l),r.child;case 12:return Ln(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(h=r.type._context,m=r.pendingProps,_=r.memoizedProps,C=m.value,Bt(ml,h._currentValue),h._currentValue=C,_!==null)if(ui(_.value,C)){if(_.children===m.children&&!Fn.current){r=ji(n,r,l);break e}}else for(_=r.child,_!==null&&(_.return=r);_!==null;){var B=_.dependencies;if(B!==null){C=_.child;for(var W=B.firstContext;W!==null;){if(W.context===h){if(_.tag===1){W=Wi(-1,l&-l),W.tag=2;var ae=_.updateQueue;if(ae!==null){ae=ae.shared;var Se=ae.pending;Se===null?W.next=W:(W.next=Se.next,Se.next=W),ae.pending=W}}_.lanes|=l,W=_.alternate,W!==null&&(W.lanes|=l),Lu(_.return,l,r),B.lanes|=l;break}W=W.next}}else if(_.tag===10)C=_.type===r.type?null:_.child;else if(_.tag===18){if(C=_.return,C===null)throw Error(t(341));C.lanes|=l,B=C.alternate,B!==null&&(B.lanes|=l),Lu(C,l,r),C=_.sibling}else C=_.child;if(C!==null)C.return=_;else for(C=_;C!==null;){if(C===r){C=null;break}if(_=C.sibling,_!==null){_.return=C.return,C=_;break}C=C.return}_=C}Ln(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,h=r.pendingProps.children,Bs(r,l),m=ni(m),h=h(m),r.flags|=1,Ln(n,r,h,l),r.child;case 14:return h=r.type,m=di(h,r.pendingProps),m=di(h.type,m),Sm(n,r,h,m,l);case 15:return wm(n,r,r.type,r.pendingProps,l);case 17:return h=r.type,m=r.pendingProps,m=r.elementType===h?m:di(h,m),Al(n,r),r.tag=1,kn(h)?(n=!0,cl(r)):n=!1,Bs(r,l),fm(r,h,m),$u(r,h,m,l),Zu(null,r,h,!0,n,l);case 19:return Pm(n,r,l);case 22:return Mm(n,r,l)}throw Error(t(156,r.tag))};function e0(n,r){return I(n,r)}function ry(n,r,l,h){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(n,r,l,h){return new ry(n,r,l,h)}function vh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function sy(n){if(typeof n=="function")return vh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===K)return 11;if(n===J)return 14}return 2}function br(n,r){var l=n.alternate;return l===null?(l=si(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Ol(n,r,l,h,m,_){var C=2;if(h=n,typeof n=="function")vh(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case F:return ns(l.children,m,_,r);case k:C=8,m|=8;break;case P:return n=si(12,l,r,m|2),n.elementType=P,n.lanes=_,n;case $:return n=si(13,l,r,m),n.elementType=$,n.lanes=_,n;case te:return n=si(19,l,r,m),n.elementType=te,n.lanes=_,n;case ce:return zl(l,m,_,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:C=10;break e;case N:C=9;break e;case K:C=11;break e;case J:C=14;break e;case Q:C=16,h=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=si(C,l,r,m),r.elementType=n,r.type=h,r.lanes=_,r}function ns(n,r,l,h){return n=si(7,n,h,r),n.lanes=l,n}function zl(n,r,l,h){return n=si(22,n,h,r),n.elementType=ce,n.lanes=l,n.stateNode={isHidden:!1},n}function xh(n,r,l){return n=si(6,n,null,r),n.lanes=l,n}function yh(n,r,l){return r=si(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function oy(n,r,l,h,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_n(0),this.expirationTimes=_n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.identifierPrefix=h,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function _h(n,r,l,h,m,_,C,B,W){return n=new oy(n,r,l,B,W),r===1?(r=1,_===!0&&(r|=8)):r=0,_=si(3,null,null,r),n.current=_,_.stateNode=n,_.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Iu(_),n}function ay(n,r,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:h==null?null:""+h,children:n,containerInfo:r,implementation:l}}function t0(n){if(!n)return vr;n=n._reactInternals;e:{if(Ti(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(kn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(kn(l))return Rp(n,l,r)}return r}function n0(n,r,l,h,m,_,C,B,W){return n=_h(l,h,!0,n,m,_,C,B,W),n.context=t0(null),l=n.current,h=Nn(),m=Er(l),_=Wi(h,m),_.callback=r??null,_r(l,_,m),n.current.lanes=m,tn(n,m,h),Bn(n,h),n}function Bl(n,r,l,h){var m=r.current,_=Nn(),C=Er(m);return l=t0(l),r.context===null?r.context=l:r.pendingContext=l,r=Wi(_,C),r.payload={element:n},h=h===void 0?null:h,h!==null&&(r.callback=h),n=_r(m,r,C),n!==null&&(mi(n,m,C,_),vl(n,m,C)),C}function Hl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function i0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Sh(n,r){i0(n,r),(n=n.alternate)&&i0(n,r)}function ly(){return null}var r0=typeof reportError=="function"?reportError:function(n){console.error(n)};function wh(n){this._internalRoot=n}Vl.prototype.render=wh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Bl(n,r,null,null)},Vl.prototype.unmount=wh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Qr(function(){Bl(null,n,null,null)}),r[zi]=null}};function Vl(n){this._internalRoot=n}Vl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Hf();n={blockedOn:null,target:n,priority:r};for(var l=0;l<dr.length&&r!==0&&r<dr[l].priority;l++);dr.splice(l,0,n),l===0&&Wf(n)}};function Mh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function s0(){}function cy(n,r,l,h,m){if(m){if(typeof h=="function"){var _=h;h=function(){var ae=Hl(C);_.call(ae)}}var C=n0(r,h,n,0,null,!1,!1,"",s0);return n._reactRootContainer=C,n[zi]=C.current,$o(n.nodeType===8?n.parentNode:n),Qr(),C}for(;m=n.lastChild;)n.removeChild(m);if(typeof h=="function"){var B=h;h=function(){var ae=Hl(W);B.call(ae)}}var W=_h(n,0,!1,null,null,!1,!1,"",s0);return n._reactRootContainer=W,n[zi]=W.current,$o(n.nodeType===8?n.parentNode:n),Qr(function(){Bl(r,W,l,h)}),W}function Wl(n,r,l,h,m){var _=l._reactRootContainer;if(_){var C=_;if(typeof m=="function"){var B=m;m=function(){var W=Hl(C);B.call(W)}}Bl(r,C,n,m)}else C=cy(l,r,n,m,h);return Hl(C)}zf=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=vn(r.pendingLanes);l!==0&&(Wr(r,l|1),Bn(r,j()),!(Ct&6)&&(js=j()+500,xr()))}break;case 13:Qr(function(){var h=Gi(n,1);if(h!==null){var m=Nn();mi(h,n,1,m)}}),Sh(n,1)}},Yc=function(n){if(n.tag===13){var r=Gi(n,134217728);if(r!==null){var l=Nn();mi(r,n,134217728,l)}Sh(n,134217728)}},Bf=function(n){if(n.tag===13){var r=Er(n),l=Gi(n,r);if(l!==null){var h=Nn();mi(l,n,r,h)}Sh(n,r)}},Hf=function(){return Mt},Vf=function(n,r){var l=Mt;try{return Mt=n,r()}finally{Mt=l}},Fe=function(n,r,l){switch(r){case"input":if(Ve(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var h=l[r];if(h!==n&&h.form===n.form){var m=al(h);if(!m)throw Error(t(90));xe(h),Ve(h,m)}}}break;case"textarea":pe(n,l);break;case"select":r=l.value,r!=null&&U(n,!!l.multiple,r,!1)}},Ht=ph,ln=Qr;var uy={usingClientEntryPoint:!1,Events:[Ko,Ns,al,Be,pt,ph]},ua={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hy={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Wa(n),n===null?null:n.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||ly,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{nt=jl.inject(hy),mt=jl}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uy,Hn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mh(r))throw Error(t(200));return ay(n,r,null,l)},Hn.createRoot=function(n,r){if(!Mh(n))throw Error(t(299));var l=!1,h="",m=r0;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=_h(n,1,!1,null,null,l,!1,h,m),n[zi]=r.current,$o(n.nodeType===8?n.parentNode:n),new wh(r)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Wa(r),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return Qr(n)},Hn.hydrate=function(n,r,l){if(!Gl(r))throw Error(t(200));return Wl(null,n,r,!0,l)},Hn.hydrateRoot=function(n,r,l){if(!Mh(n))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,m=!1,_="",C=r0;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(C=l.onRecoverableError)),r=n0(r,null,n,1,l??null,m,!1,_,C),n[zi]=r.current,$o(n),h)for(n=0;n<h.length;n++)l=h[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new Vl(r)},Hn.render=function(n,r,l){if(!Gl(r))throw Error(t(200));return Wl(null,n,r,!1,l)},Hn.unmountComponentAtNode=function(n){if(!Gl(n))throw Error(t(40));return n._reactRootContainer?(Qr(function(){Wl(null,null,n,!1,function(){n._reactRootContainer=null,n[zi]=null})}),!0):!1},Hn.unstable_batchedUpdates=ph,Hn.unstable_renderSubtreeIntoContainer=function(n,r,l,h){if(!Gl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Wl(n,r,l,!1,h)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var f0;function wy(){if(f0)return bh.exports;f0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),bh.exports=Sy(),bh.exports}var p0;function My(){if(p0)return Xl;p0=1;var s=wy();return Xl.createRoot=s.createRoot,Xl.hydrateRoot=s.hydrateRoot,Xl}var Ey=My(),da={},m0;function Ty(){if(m0)return da;m0=1,Object.defineProperty(da,"__esModule",{value:!0}),da.parse=c,da.serialize=f;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,a=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function c(v,y){const w=new a,M=v.length;if(M<2)return w;const S=(y==null?void 0:y.decode)||p;let x=0;do{const A=v.indexOf("=",x);if(A===-1)break;const T=v.indexOf(";",x),E=T===-1?M:T;if(A>E){x=v.lastIndexOf(";",A-1)+1;continue}const z=u(v,x,A),D=d(v,A,z),F=v.slice(z,D);if(w[F]===void 0){let k=u(v,A+1,E),P=d(v,E,k);const b=S(v.slice(k,P));w[F]=b}x=E+1}while(x<M);return w}function u(v,y,w){do{const M=v.charCodeAt(y);if(M!==32&&M!==9)return y}while(++y<w);return w}function d(v,y,w){for(;y>w;){const M=v.charCodeAt(--y);if(M!==32&&M!==9)return y+1}return w}function f(v,y,w){const M=(w==null?void 0:w.encode)||encodeURIComponent;if(!s.test(v))throw new TypeError(`argument name is invalid: ${v}`);const S=M(y);if(!e.test(S))throw new TypeError(`argument val is invalid: ${y}`);let x=v+"="+S;if(!w)return x;if(w.maxAge!==void 0){if(!Number.isInteger(w.maxAge))throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);x+="; Max-Age="+w.maxAge}if(w.domain){if(!t.test(w.domain))throw new TypeError(`option domain is invalid: ${w.domain}`);x+="; Domain="+w.domain}if(w.path){if(!i.test(w.path))throw new TypeError(`option path is invalid: ${w.path}`);x+="; Path="+w.path}if(w.expires){if(!g(w.expires)||!Number.isFinite(w.expires.valueOf()))throw new TypeError(`option expires is invalid: ${w.expires}`);x+="; Expires="+w.expires.toUTCString()}if(w.httpOnly&&(x+="; HttpOnly"),w.secure&&(x+="; Secure"),w.partitioned&&(x+="; Partitioned"),w.priority)switch(typeof w.priority=="string"?w.priority.toLowerCase():void 0){case"low":x+="; Priority=Low";break;case"medium":x+="; Priority=Medium";break;case"high":x+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${w.priority}`)}if(w.sameSite)switch(typeof w.sameSite=="string"?w.sameSite.toLowerCase():w.sameSite){case!0:case"strict":x+="; SameSite=Strict";break;case"lax":x+="; SameSite=Lax";break;case"none":x+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${w.sameSite}`)}return x}function p(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function g(v){return o.call(v)==="[object Date]"}return da}Ty();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var g0="popstate";function by(s={}){function e(o,a){let{pathname:c="/",search:u="",hash:d=""}=Ss(o.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),md("",{pathname:c,search:u,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(o,a){let c=o.document.querySelector("base"),u="";if(c&&c.getAttribute("href")){let d=o.location.href,f=d.indexOf("#");u=f===-1?d:d.slice(0,f)}return u+"#"+(typeof a=="string"?a:Ca(a))}function i(o,a){li(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(a)})`)}return Cy(e,t,i,s)}function Xt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function li(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ay(){return Math.random().toString(36).substring(2,10)}function v0(s,e){return{usr:s.state,key:s.key,idx:e}}function md(s,e,t=null,i){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Ss(e):e,state:t,key:e&&e.key||i||Ay()}}function Ca({pathname:s="/",search:e="",hash:t=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(s+=t.charAt(0)==="#"?t:"#"+t),s}function Ss(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substring(t),s=s.substring(0,t));let i=s.indexOf("?");i>=0&&(e.search=s.substring(i),s=s.substring(0,i)),s&&(e.pathname=s)}return e}function Cy(s,e,t,i={}){let{window:o=document.defaultView,v5Compat:a=!1}=i,c=o.history,u="POP",d=null,f=p();f==null&&(f=0,c.replaceState({...c.state,idx:f},""));function p(){return(c.state||{idx:null}).idx}function g(){u="POP";let S=p(),x=S==null?null:S-f;f=S,d&&d({action:u,location:M.location,delta:x})}function v(S,x){u="PUSH";let A=md(M.location,S,x);t&&t(A,S),f=p()+1;let T=v0(A,f),E=M.createHref(A);try{c.pushState(T,"",E)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;o.location.assign(E)}a&&d&&d({action:u,location:M.location,delta:1})}function y(S,x){u="REPLACE";let A=md(M.location,S,x);t&&t(A,S),f=p();let T=v0(A,f),E=M.createHref(A);c.replaceState(T,"",E),a&&d&&d({action:u,location:M.location,delta:0})}function w(S){let x=o.location.origin!=="null"?o.location.origin:o.location.href,A=typeof S=="string"?S:Ca(S);return A=A.replace(/ $/,"%20"),Xt(x,`No window.location.(origin|href) available to create URL for href: ${A}`),new URL(A,x)}let M={get action(){return u},get location(){return s(o,c)},listen(S){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(g0,g),d=S,()=>{o.removeEventListener(g0,g),d=null}},createHref(S){return e(o,S)},createURL:w,encodeLocation(S){let x=w(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:y,go(S){return c.go(S)}};return M}function zg(s,e,t="/"){return Ry(s,e,t,!1)}function Ry(s,e,t,i){let o=typeof e=="string"?Ss(e):e,a=kr(o.pathname||"/",t);if(a==null)return null;let c=Bg(s);Py(c);let u=null;for(let d=0;u==null&&d<c.length;++d){let f=Hy(a);u=zy(c[d],f,i)}return u}function Bg(s,e=[],t=[],i=""){let o=(a,c,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};d.relativePath.startsWith("/")&&(Xt(d.relativePath.startsWith(i),`Absolute route path "${d.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(i.length));let f=ir([i,d.relativePath]),p=t.concat(d);a.children&&a.children.length>0&&(Xt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),Bg(a.children,e,p,f)),!(a.path==null&&!a.index)&&e.push({path:f,score:ky(f,a.index),routesMeta:p})};return s.forEach((a,c)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))o(a,c);else for(let d of Hg(a.path))o(a,c,d)}),e}function Hg(s){let e=s.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return o?[a,""]:[a];let c=Hg(i.join("/")),u=[];return u.push(...c.map(d=>d===""?a:[a,d].join("/"))),o&&u.push(...c),u.map(d=>s.startsWith("/")&&d===""?"/":d)}function Py(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:Oy(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var Ly=/^:[\w-]+$/,Ny=3,Iy=2,Dy=1,Uy=10,Fy=-2,x0=s=>s==="*";function ky(s,e){let t=s.split("/"),i=t.length;return t.some(x0)&&(i+=Fy),e&&(i+=Iy),t.filter(o=>!x0(o)).reduce((o,a)=>o+(Ly.test(a)?Ny:a===""?Dy:Uy),i)}function Oy(s,e){return s.length===e.length&&s.slice(0,-1).every((i,o)=>i===e[o])?s[s.length-1]-e[e.length-1]:0}function zy(s,e,t=!1){let{routesMeta:i}=s,o={},a="/",c=[];for(let u=0;u<i.length;++u){let d=i[u],f=u===i.length-1,p=a==="/"?e:e.slice(a.length)||"/",g=Lc({path:d.relativePath,caseSensitive:d.caseSensitive,end:f},p),v=d.route;if(!g&&f&&t&&!i[i.length-1].route.index&&(g=Lc({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},p)),!g)return null;Object.assign(o,g.params),c.push({params:o,pathname:ir([a,g.pathname]),pathnameBase:jy(ir([a,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(a=ir([a,g.pathnameBase]))}return c}function Lc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,i]=By(s.path,s.caseSensitive,s.end),o=e.match(t);if(!o)return null;let a=o[0],c=a.replace(/(.)\/+$/,"$1"),u=o.slice(1);return{params:i.reduce((f,{paramName:p,isOptional:g},v)=>{if(p==="*"){let w=u[v]||"";c=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const y=u[v];return g&&!y?f[p]=void 0:f[p]=(y||"").replace(/%2F/g,"/"),f},{}),pathname:a,pathnameBase:c,pattern:s}}function By(s,e=!1,t=!0){li(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let i=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,u,d)=>(i.push({paramName:u,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(i.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function Hy(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return li(!1,`The URL path "${s}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function kr(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=s.charAt(t);return i&&i!=="/"?null:s.slice(t)||"/"}function Vy(s,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof s=="string"?Ss(s):s;return{pathname:t?t.startsWith("/")?t:Gy(t,e):e,search:Xy(i),hash:$y(o)}}function Gy(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Rh(s,e,t,i){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Wy(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function uf(s){let e=Wy(s);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function hf(s,e,t,i=!1){let o;typeof s=="string"?o=Ss(s):(o={...s},Xt(!o.pathname||!o.pathname.includes("?"),Rh("?","pathname","search",o)),Xt(!o.pathname||!o.pathname.includes("#"),Rh("#","pathname","hash",o)),Xt(!o.search||!o.search.includes("#"),Rh("#","search","hash",o)));let a=s===""||o.pathname==="",c=a?"/":o.pathname,u;if(c==null)u=t;else{let g=e.length-1;if(!i&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),g-=1;o.pathname=v.join("/")}u=g>=0?e[g]:"/"}let d=Vy(o,u),f=c&&c!=="/"&&c.endsWith("/"),p=(a||c===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(f||p)&&(d.pathname+="/"),d}var ir=s=>s.join("/").replace(/\/\/+/g,"/"),jy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Xy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,$y=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Yy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Vg=["POST","PUT","PATCH","DELETE"];new Set(Vg);var qy=["GET",...Vg];new Set(qy);var Ao=Y.createContext(null);Ao.displayName="DataRouter";var zc=Y.createContext(null);zc.displayName="DataRouterState";var Gg=Y.createContext({isTransitioning:!1});Gg.displayName="ViewTransition";var Ky=Y.createContext(new Map);Ky.displayName="Fetchers";var Zy=Y.createContext(null);Zy.displayName="Await";var Ei=Y.createContext(null);Ei.displayName="Navigation";var Ua=Y.createContext(null);Ua.displayName="Location";var Ui=Y.createContext({outlet:null,matches:[],isDataRoute:!1});Ui.displayName="Route";var df=Y.createContext(null);df.displayName="RouteError";function Jy(s,{relative:e}={}){Xt(Co(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=Y.useContext(Ei),{hash:o,pathname:a,search:c}=Fa(s,{relative:e}),u=a;return t!=="/"&&(u=a==="/"?t:ir([t,a])),i.createHref({pathname:u,search:c,hash:o})}function Co(){return Y.useContext(Ua)!=null}function Br(){return Xt(Co(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(Ua).location}var Wg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jg(s){Y.useContext(Ei).static||Y.useLayoutEffect(s)}function Bc(){let{isDataRoute:s}=Y.useContext(Ui);return s?h_():Qy()}function Qy(){Xt(Co(),"useNavigate() may be used only in the context of a <Router> component.");let s=Y.useContext(Ao),{basename:e,navigator:t}=Y.useContext(Ei),{matches:i}=Y.useContext(Ui),{pathname:o}=Br(),a=JSON.stringify(uf(i)),c=Y.useRef(!1);return jg(()=>{c.current=!0}),Y.useCallback((d,f={})=>{if(li(c.current,Wg),!c.current)return;if(typeof d=="number"){t.go(d);return}let p=hf(d,JSON.parse(a),o,f.relative==="path");s==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ir([e,p.pathname])),(f.replace?t.replace:t.push)(p,f.state,f)},[e,t,a,o,s])}Y.createContext(null);function Fa(s,{relative:e}={}){let{matches:t}=Y.useContext(Ui),{pathname:i}=Br(),o=JSON.stringify(uf(t));return Y.useMemo(()=>hf(s,JSON.parse(o),i,e==="path"),[s,o,i,e])}function e_(s,e){return Xg(s,e)}function Xg(s,e,t,i){var x;Xt(Co(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=Y.useContext(Ei),{matches:a}=Y.useContext(Ui),c=a[a.length-1],u=c?c.params:{},d=c?c.pathname:"/",f=c?c.pathnameBase:"/",p=c&&c.route;{let A=p&&p.path||"";$g(d,!p||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let g=Br(),v;if(e){let A=typeof e=="string"?Ss(e):e;Xt(f==="/"||((x=A.pathname)==null?void 0:x.startsWith(f)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${f}" but pathname "${A.pathname}" was given in the \`location\` prop.`),v=A}else v=g;let y=v.pathname||"/",w=y;if(f!=="/"){let A=f.replace(/^\//,"").split("/");w="/"+y.replace(/^\//,"").split("/").slice(A.length).join("/")}let M=zg(s,{pathname:w});li(p||M!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),li(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=s_(M&&M.map(A=>Object.assign({},A,{params:Object.assign({},u,A.params),pathname:ir([f,o.encodeLocation?o.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?f:ir([f,o.encodeLocation?o.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),a,t,i);return e&&S?Y.createElement(Ua.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},S):S}function t_(){let s=u_(),e=Yy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",s),c=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:a},"ErrorBoundary")," or"," ",Y.createElement("code",{style:a},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:o},t):null,c)}var n_=Y.createElement(t_,null),i_=class extends Y.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){console.error("React Router caught the following error during render",s,e)}render(){return this.state.error!==void 0?Y.createElement(Ui.Provider,{value:this.props.routeContext},Y.createElement(df.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function r_({routeContext:s,match:e,children:t}){let i=Y.useContext(Ao);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),Y.createElement(Ui.Provider,{value:s},t)}function s_(s,e=[],t=null,i=null){if(s==null){if(!t)return null;if(t.errors)s=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)s=t.matches;else return null}let o=s,a=t==null?void 0:t.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);Xt(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,u=-1;if(t)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:g}=t,v=f.route.loader&&!p.hasOwnProperty(f.route.id)&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,p)=>{let g,v=!1,y=null,w=null;t&&(g=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||n_,c&&(u<0&&p===0?($g("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,w=null):u===p&&(v=!0,w=f.route.hydrateFallbackElement||null)));let M=e.concat(o.slice(0,p+1)),S=()=>{let x;return g?x=y:v?x=w:f.route.Component?x=Y.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=d,Y.createElement(r_,{match:f,routeContext:{outlet:d,matches:M,isDataRoute:t!=null},children:x})};return t&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?Y.createElement(i_,{location:t.location,revalidation:t.revalidation,component:y,error:g,children:S(),routeContext:{outlet:null,matches:M,isDataRoute:!0}}):S()},null)}function ff(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function o_(s){let e=Y.useContext(Ao);return Xt(e,ff(s)),e}function a_(s){let e=Y.useContext(zc);return Xt(e,ff(s)),e}function l_(s){let e=Y.useContext(Ui);return Xt(e,ff(s)),e}function pf(s){let e=l_(s),t=e.matches[e.matches.length-1];return Xt(t.route.id,`${s} can only be used on routes that contain a unique "id"`),t.route.id}function c_(){return pf("useRouteId")}function u_(){var i;let s=Y.useContext(df),e=a_("useRouteError"),t=pf("useRouteError");return s!==void 0?s:(i=e.errors)==null?void 0:i[t]}function h_(){let{router:s}=o_("useNavigate"),e=pf("useNavigate"),t=Y.useRef(!1);return jg(()=>{t.current=!0}),Y.useCallback(async(o,a={})=>{li(t.current,Wg),t.current&&(typeof o=="number"?s.navigate(o):await s.navigate(o,{fromRouteId:e,...a}))},[s,e])}var y0={};function $g(s,e,t){!e&&!y0[s]&&(y0[s]=!0,li(!1,t))}Y.memo(d_);function d_({routes:s,future:e,state:t}){return Xg(s,void 0,t,e)}function f_({to:s,replace:e,state:t,relative:i}){Xt(Co(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=Y.useContext(Ei);li(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=Y.useContext(Ui),{pathname:c}=Br(),u=Bc(),d=hf(s,uf(a),c,i==="path"),f=JSON.stringify(d);return Y.useEffect(()=>{u(JSON.parse(f),{replace:e,state:t,relative:i})},[u,f,i,e,t]),null}function Sc(s){Xt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function p_({basename:s="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:a=!1}){Xt(!Co(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=s.replace(/^\/*/,"/"),u=Y.useMemo(()=>({basename:c,navigator:o,static:a,future:{}}),[c,o,a]);typeof t=="string"&&(t=Ss(t));let{pathname:d="/",search:f="",hash:p="",state:g=null,key:v="default"}=t,y=Y.useMemo(()=>{let w=kr(d,c);return w==null?null:{location:{pathname:w,search:f,hash:p,state:g,key:v},navigationType:i}},[c,d,f,p,g,v,i]);return li(y!=null,`<Router basename="${c}"> is not able to match the URL "${d}${f}${p}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:Y.createElement(Ei.Provider,{value:u},Y.createElement(Ua.Provider,{children:e,value:y}))}function m_({children:s,location:e}){return e_(gd(s),e)}function gd(s,e=[]){let t=[];return Y.Children.forEach(s,(i,o)=>{if(!Y.isValidElement(i))return;let a=[...e,o];if(i.type===Y.Fragment){t.push.apply(t,gd(i.props.children,a));return}Xt(i.type===Sc,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=gd(i.props.children,a)),t.push(c)}),t}var wc="get",Mc="application/x-www-form-urlencoded";function Hc(s){return s!=null&&typeof s.tagName=="string"}function g_(s){return Hc(s)&&s.tagName.toLowerCase()==="button"}function v_(s){return Hc(s)&&s.tagName.toLowerCase()==="form"}function x_(s){return Hc(s)&&s.tagName.toLowerCase()==="input"}function y_(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function __(s,e){return s.button===0&&(!e||e==="_self")&&!y_(s)}var $l=null;function S_(){if($l===null)try{new FormData(document.createElement("form"),0),$l=!1}catch{$l=!0}return $l}var w_=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ph(s){return s!=null&&!w_.has(s)?(li(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Mc}"`),null):s}function M_(s,e){let t,i,o,a,c;if(v_(s)){let u=s.getAttribute("action");i=u?kr(u,e):null,t=s.getAttribute("method")||wc,o=Ph(s.getAttribute("enctype"))||Mc,a=new FormData(s)}else if(g_(s)||x_(s)&&(s.type==="submit"||s.type==="image")){let u=s.form;if(u==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=s.getAttribute("formaction")||u.getAttribute("action");if(i=d?kr(d,e):null,t=s.getAttribute("formmethod")||u.getAttribute("method")||wc,o=Ph(s.getAttribute("formenctype"))||Ph(u.getAttribute("enctype"))||Mc,a=new FormData(u,s),!S_()){let{name:f,type:p,value:g}=s;if(p==="image"){let v=f?`${f}.`:"";a.append(`${v}x`,"0"),a.append(`${v}y`,"0")}else f&&a.append(f,g)}}else{if(Hc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=wc,i=null,o=Mc,c=s}return a&&o==="text/plain"&&(c=a,a=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:a,body:c}}function mf(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}async function E_(s,e){if(s.id in e)return e[s.id];try{let t=await import(s.module);return e[s.id]=t,t}catch(t){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function T_(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function b_(s,e,t){let i=await Promise.all(s.map(async o=>{let a=e.routes[o.route.id];if(a){let c=await E_(a,t);return c.links?c.links():[]}return[]}));return P_(i.flat(1).filter(T_).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function _0(s,e,t,i,o,a){let c=(d,f)=>t[f]?d.route.id!==t[f].route.id:!0,u=(d,f)=>{var p;return t[f].pathname!==d.pathname||((p=t[f].route.path)==null?void 0:p.endsWith("*"))&&t[f].params["*"]!==d.params["*"]};return a==="assets"?e.filter((d,f)=>c(d,f)||u(d,f)):a==="data"?e.filter((d,f)=>{var g;let p=i.routes[d.route.id];if(!p||!p.hasLoader)return!1;if(c(d,f)||u(d,f))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((g=t[0])==null?void 0:g.params)||{},nextUrl:new URL(s,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function A_(s,e){return C_(s.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function C_(s){return[...new Set(s)]}function R_(s){let e={},t=Object.keys(s).sort();for(let i of t)e[i]=s[i];return e}function P_(s,e){let t=new Set;return new Set(e),s.reduce((i,o)=>{let a=JSON.stringify(R_(o));return t.has(a)||(t.add(a),i.push({key:a,link:o})),i},[])}function L_(s){let e=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function N_(){let s=Y.useContext(Ao);return mf(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function I_(){let s=Y.useContext(zc);return mf(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var gf=Y.createContext(void 0);gf.displayName="FrameworkContext";function Yg(){let s=Y.useContext(gf);return mf(s,"You must render this element inside a <HydratedRouter> element"),s}function D_(s,e){let t=Y.useContext(gf),[i,o]=Y.useState(!1),[a,c]=Y.useState(!1),{onFocus:u,onBlur:d,onMouseEnter:f,onMouseLeave:p,onTouchStart:g}=e,v=Y.useRef(null);Y.useEffect(()=>{if(s==="render"&&c(!0),s==="viewport"){let M=x=>{x.forEach(A=>{c(A.isIntersecting)})},S=new IntersectionObserver(M,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[s]),Y.useEffect(()=>{if(i){let M=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(M)}}},[i]);let y=()=>{o(!0)},w=()=>{o(!1),c(!1)};return t?s!=="intent"?[a,v,{}]:[a,v,{onFocus:fa(u,y),onBlur:fa(d,w),onMouseEnter:fa(f,y),onMouseLeave:fa(p,w),onTouchStart:fa(g,y)}]:[!1,v,{}]}function fa(s,e){return t=>{s&&s(t),t.defaultPrevented||e(t)}}function U_({page:s,...e}){let{router:t}=N_(),i=Y.useMemo(()=>zg(t.routes,s,t.basename),[t.routes,s,t.basename]);return i?Y.createElement(k_,{page:s,matches:i,...e}):(console.warn(`Tried to prefetch ${s} but no routes matched.`),null)}function F_(s){let{manifest:e,routeModules:t}=Yg(),[i,o]=Y.useState([]);return Y.useEffect(()=>{let a=!1;return b_(s,e,t).then(c=>{a||o(c)}),()=>{a=!0}},[s,e,t]),i}function k_({page:s,matches:e,...t}){let i=Br(),{manifest:o,routeModules:a}=Yg(),{loaderData:c,matches:u}=I_(),d=Y.useMemo(()=>_0(s,e,u,o,i,"data"),[s,e,u,o,i]),f=Y.useMemo(()=>_0(s,e,u,o,i,"assets"),[s,e,u,o,i]),p=Y.useMemo(()=>{if(s===i.pathname+i.search+i.hash)return[];let y=new Set,w=!1;if(e.forEach(S=>{var A;let x=o.routes[S.route.id];!x||!x.hasLoader||(!d.some(T=>T.route.id===S.route.id)&&S.route.id in c&&((A=a[S.route.id])!=null&&A.shouldRevalidate)||x.hasClientLoader?w=!0:y.add(S.route.id))}),y.size===0)return[];let M=L_(s);return w&&y.size>0&&M.searchParams.set("_routes",e.filter(S=>y.has(S.route.id)).map(S=>S.route.id).join(",")),[M.pathname+M.search]},[c,i,o,d,e,s,a]),g=Y.useMemo(()=>A_(f,o),[f,o]),v=F_(f);return Y.createElement(Y.Fragment,null,p.map(y=>Y.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...t})),g.map(y=>Y.createElement("link",{key:y,rel:"modulepreload",href:y,...t})),v.map(({key:y,link:w})=>Y.createElement("link",{key:y,...w})))}function O_(...s){return e=>{s.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var qg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{qg&&(window.__reactRouterVersion="7.0.2")}catch{}function z_({basename:s,children:e,window:t}){let i=Y.useRef();i.current==null&&(i.current=by({window:t,v5Compat:!0}));let o=i.current,[a,c]=Y.useState({action:o.action,location:o.location}),u=Y.useCallback(d=>{Y.startTransition(()=>c(d))},[c]);return Y.useLayoutEffect(()=>o.listen(u),[o,u]),Y.createElement(p_,{basename:s,children:e,location:a.location,navigationType:a.action,navigator:o})}var Kg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vf=Y.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:a,replace:c,state:u,target:d,to:f,preventScrollReset:p,viewTransition:g,...v},y){let{basename:w}=Y.useContext(Ei),M=typeof f=="string"&&Kg.test(f),S,x=!1;if(typeof f=="string"&&M&&(S=f,qg))try{let P=new URL(window.location.href),b=f.startsWith("//")?new URL(P.protocol+f):new URL(f),N=kr(b.pathname,w);b.origin===P.origin&&N!=null?f=N+b.search+b.hash:x=!0}catch{li(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let A=Jy(f,{relative:o}),[T,E,z]=D_(i,v),D=G_(f,{replace:c,state:u,target:d,preventScrollReset:p,relative:o,viewTransition:g});function F(P){e&&e(P),P.defaultPrevented||D(P)}let k=Y.createElement("a",{...v,...z,href:S||A,onClick:x||a?e:F,ref:O_(y,E),target:d,"data-discover":!M&&t==="render"?"true":void 0});return T&&!M?Y.createElement(Y.Fragment,null,k,Y.createElement(U_,{page:A})):k});vf.displayName="Link";var B_=Y.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:a,to:c,viewTransition:u,children:d,...f},p){let g=Fa(c,{relative:f.relative}),v=Br(),y=Y.useContext(zc),{navigator:w,basename:M}=Y.useContext(Ei),S=y!=null&&Y_(g)&&u===!0,x=w.encodeLocation?w.encodeLocation(g).pathname:g.pathname,A=v.pathname,T=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;t||(A=A.toLowerCase(),T=T?T.toLowerCase():null,x=x.toLowerCase()),T&&M&&(T=kr(T,M)||T);const E=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let z=A===x||!o&&A.startsWith(x)&&A.charAt(E)==="/",D=T!=null&&(T===x||!o&&T.startsWith(x)&&T.charAt(x.length)==="/"),F={isActive:z,isPending:D,isTransitioning:S},k=z?e:void 0,P;typeof i=="function"?P=i(F):P=[i,z?"active":null,D?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let b=typeof a=="function"?a(F):a;return Y.createElement(vf,{...f,"aria-current":k,className:P,ref:p,style:b,to:c,viewTransition:u},typeof d=="function"?d(F):d)});B_.displayName="NavLink";var H_=Y.forwardRef(({discover:s="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:a,method:c=wc,action:u,onSubmit:d,relative:f,preventScrollReset:p,viewTransition:g,...v},y)=>{let w=X_(),M=$_(u,{relative:f}),S=c.toLowerCase()==="get"?"get":"post",x=typeof u=="string"&&Kg.test(u),A=T=>{if(d&&d(T),T.defaultPrevented)return;T.preventDefault();let E=T.nativeEvent.submitter,z=(E==null?void 0:E.getAttribute("formmethod"))||c;w(E||T.currentTarget,{fetcherKey:e,method:z,navigate:t,replace:o,state:a,relative:f,preventScrollReset:p,viewTransition:g})};return Y.createElement("form",{ref:y,method:S,action:M,onSubmit:i?d:A,...v,"data-discover":!x&&s==="render"?"true":void 0})});H_.displayName="Form";function V_(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zg(s){let e=Y.useContext(Ao);return Xt(e,V_(s)),e}function G_(s,{target:e,replace:t,state:i,preventScrollReset:o,relative:a,viewTransition:c}={}){let u=Bc(),d=Br(),f=Fa(s,{relative:a});return Y.useCallback(p=>{if(__(p,e)){p.preventDefault();let g=t!==void 0?t:Ca(d)===Ca(f);u(s,{replace:g,state:i,preventScrollReset:o,relative:a,viewTransition:c})}},[d,u,f,t,i,e,s,o,a,c])}var W_=0,j_=()=>`__${String(++W_)}__`;function X_(){let{router:s}=Zg("useSubmit"),{basename:e}=Y.useContext(Ei),t=c_();return Y.useCallback(async(i,o={})=>{let{action:a,method:c,encType:u,formData:d,body:f}=M_(i,e);if(o.navigate===!1){let p=o.fetcherKey||j_();await s.fetch(p,t,o.action||a,{preventScrollReset:o.preventScrollReset,formData:d,body:f,formMethod:o.method||c,formEncType:o.encType||u,flushSync:o.flushSync})}else await s.navigate(o.action||a,{preventScrollReset:o.preventScrollReset,formData:d,body:f,formMethod:o.method||c,formEncType:o.encType||u,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[s,e,t])}function $_(s,{relative:e}={}){let{basename:t}=Y.useContext(Ei),i=Y.useContext(Ui);Xt(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),a={...Fa(s||".",{relative:e})},c=Br();if(s==null){a.search=c.search;let u=new URLSearchParams(a.search),d=u.getAll("index");if(d.some(p=>p==="")){u.delete("index"),d.filter(g=>g).forEach(g=>u.append("index",g));let p=u.toString();a.search=p?`?${p}`:""}}return(!s||s===".")&&o.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(a.pathname=a.pathname==="/"?t:ir([t,a.pathname])),Ca(a)}function Y_(s,e={}){let t=Y.useContext(Gg);Xt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Zg("useViewTransitionState"),o=Fa(s,{relative:e.relative});if(!t.isTransitioning)return!1;let a=kr(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=kr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Lc(o.pathname,c)!=null||Lc(o.pathname,a)!=null}new TextEncoder;let q_=class{constructor(e){Ne(this,"particles");this.particles=Array.from({length:e},()=>({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,size:Math.random()*2+1,speedX:(Math.random()-.5)*.5,speedY:(Math.random()-.5)*.5}))}update(e,t){this.particles.forEach(i=>{i.x+=i.speedX,i.y+=i.speedY,i.x<0&&(i.x=window.innerWidth),i.x>window.innerWidth&&(i.x=0),i.y<0&&(i.y=window.innerHeight),i.y>window.innerHeight&&(i.y=0),e.beginPath(),e.arc(i.x,i.y,i.size,0,Math.PI*2),e.fillStyle=t,e.fill()})}};class K_{draw(e,t,i,o){e.strokeStyle=o,e.lineWidth=.5,e.globalAlpha=.2;const a=64;for(let c=0;c<t;c+=a)e.beginPath(),e.moveTo(c,0),e.lineTo(c,i),e.stroke();for(let c=0;c<i;c+=a)e.beginPath(),e.moveTo(0,c),e.lineTo(t,c),e.stroke();e.globalAlpha=1}}const ps=[{name:"cyberpunk",label:"Cyberpunk",icon:"🌟",colors:["#ff00ff","#00ffff","#fffe00","#ff007f","#00ff7f"],background:"#1a1a1a",particleColor:"#ff00ff"},{name:"midnight",label:"Midnight",icon:"🌙",colors:["#1e3a8a","#3b82f6","#9333ea","#4c51bf","#2d3748"],background:"#000814",particleColor:"#3b82f6"},{name:"neon",label:"Neon",icon:"⚡",colors:["#39ff14","#ff073a","#ff6e40","#ff9f1c","#2ec4b6"],background:"#0f0f0f",particleColor:"#ff073a"},{name:"synthwave",label:"Synthwave",icon:"🌆",colors:["#ff6ec7","#67e8f9","#d946ef","#ff8c00","#ff4500"],background:"#2e1065",particleColor:"#ff6ec7"}],Z_=({selectedTheme:s})=>{const[e,t]=Y.useState(()=>ps.find(p=>p.name===s)||ps[0]),i=Y.useRef(null),o=Y.useRef(null),a=Y.useRef(new K_),c=Y.useRef(),u=Y.useRef([]),d=()=>{const p=window.innerWidth*.02;return Math.min(Math.max(p,15),30)},f=p=>{const g=[],v=d();for(let y=0;y<p;y++){const w=[[[1,1,1,1]],[[1,1],[1,1]],[[0,1,0],[1,1,1]],[[1,1,0],[0,1,1]],[[0,1,1],[1,1,0]],[[1,1,1],[1,0,0]],[[1,1,1],[0,0,1]]][Math.floor(Math.random()*7)],M=e.colors[Math.floor(Math.random()*e.colors.length)],S=[.4,.6,1,1.5,2][Math.floor(Math.random()*5)];g.push({shape:w,color:M,x:Math.random()*window.innerWidth,y:-(w.length*v*S)-Math.random()*window.innerHeight*2,speed:2+Math.random()*.3/S,pattern:"straight",opacity:1,rotation:0,scale:S*(window.innerWidth/1920),originalScale:S*(window.innerWidth/1920),isReset:!1})}return g};return Y.useEffect(()=>{u.current.length||(u.current=f(10))},[]),Y.useEffect(()=>{const p=ps.find(g=>g.name===s)||ps[0];t(p),document.body.style.background=p.background,u.current=u.current.map(g=>({...g,color:p.colors[Math.floor(Math.random()*p.colors.length)]}))},[s]),Y.useEffect(()=>{const p=i.current,g=p==null?void 0:p.getContext("2d");if(!p||!g)return;const v=d(),y=()=>{const E=window.devicePixelRatio||1,z=window.innerWidth,D=window.innerHeight;p.width=z*E,p.height=D*E,p.style.width=`${z}px`,p.style.height=`${D}px`,g.scale(E,E),u.current=u.current.map(F=>({...F,scale:F.originalScale*(window.innerWidth/1920)}))};y(),window.addEventListener("resize",y);const w=[[[1,1,1,1]],[[1,1],[1,1]],[[0,1,0],[1,1,1]],[[1,1,0],[0,1,1]],[[0,1,1],[1,1,0]],[[1,1,1],[1,0,0]],[[1,1,1],[0,0,1]]],M=["straight"];u.current.length&&u.current;const S=M;if(!S||S.length===0){console.warn("No animations available for theme:",e.name);return}const x={leaf:(E,z)=>{E.y+=E.speed,E.y>p.height&&(E.y=-E.shape.length*v-Math.random()*200,E.x=Math.random()*p.width)}};if(!u.current.length){const E=[];for(let z=0;z<10;z++){const D=w[Math.floor(Math.random()*w.length)],F=e.colors[Math.floor(Math.random()*e.colors.length)],k=[.4,.6,1,1.5,2][Math.floor(Math.random()*5)],P=Math.floor(Math.random()*4);let b,N;switch(P){case 0:b=Math.random()*p.width,N=-(D.length*v*k);break;case 1:b=p.width+Math.random()*p.height,N=Math.random()*p.height;break;case 2:b=Math.random()*p.width,N=p.height+D.length*v*k;break;case 3:b=-Math.random()*p.height,N=Math.random()*p.height;break}E.push({shape:D,color:F,x:b,y:N,speed:.2+Math.random()*.3/k,pattern:"straight",opacity:1,isSpecial:!1,rotation:0,rotationSpeed:0,scale:k,originalScale:k})}u.current=E}const A=(E,z,D,F,k=0,P=1,b=1)=>{const N=d(),K=N*b;g.save(),g.translate(z+E[0].length*K/2,D+E.length*K/2),g.rotate(k),g.scale(b,b),g.translate(-(E[0].length*N)/2,-(E.length*N)/2),g.globalAlpha=P,g.shadowBlur=15,g.shadowColor=F;for(let $=0;$<2;$++)g.fillStyle=F,E.forEach((te,J)=>{te.forEach((Q,ce)=>{Q&&($===0?(g.shadowBlur=20,g.globalAlpha=P*.5):(g.shadowBlur=10,g.globalAlpha=P),g.fillRect(ce*N,J*N,N,N))})});g.shadowBlur=5,g.shadowColor="white",g.globalAlpha=P*.7,E.forEach(($,te)=>{$.forEach((J,Q)=>{J&&g.fillRect(Q*N+2,te*N+2,N-4,N-4)})}),g.restore()};o.current=new q_(50),document.body.style.background=e.background,g.shadowBlur=15,g.shadowColor=e.colors[0];const T=()=>{var z;const E=Date.now();g.clearRect(0,0,p.width,p.height),a.current.draw(g,p.width,p.height,e.gridColor),g.shadowBlur=10,g.shadowColor=e.particleColor,(z=o.current)==null||z.update(g,e.particleColor),g.shadowBlur=0,u.current.filter(D=>!D.shouldRemove).forEach(D=>{g.shadowBlur=6,g.shadowColor=D.color;const F=Math.sin(Date.now()/1200)*.1+.9;g.shadowBlur*=F,D.y+=D.speed,D.opacity=1,D.scale=1,x.leaf(D,E),D.y>p.height&&(D.y=-D.shape.length*v-Math.random()*200,D.x=Math.random()*p.width),A(D.shape,D.x,D.y,D.color,D.rotation,D.opacity*F,D.scale||1)}),c.current=requestAnimationFrame(T)};return T(),()=>{c.current&&cancelAnimationFrame(c.current),window.removeEventListener("resize",y)}},[e]),R.jsxs("div",{className:"fixed inset-0",children:[R.jsx("div",{className:`absolute inset-0 ${e.background}`}),R.jsx("canvas",{ref:i,className:"absolute top-0 left-0 w-full h-full",style:{mixBlendMode:"lighten",transition:"all 0.3s ease",pointerEvents:"none"}})]})};function J_({isExiting:s=!1}){const[e,t]=Y.useState(!1);return Y.useEffect(()=>{const i=()=>{t(window.innerWidth<=768)};return i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),R.jsxs("div",{className:`relative z-10 transition-all duration-1000 flex flex-col items-center justify-center w-full h-full max-w-[1920px] mx-auto
                  ${s?"animate-scale-out opacity-0":"opacity-100"}`,children:[e&&R.jsxs("div",{className:"bg-red-700 text-white font-bold text-lg mb-4 p-4 rounded shadow-lg border-4 border-red-900",children:[R.jsx("h2",{className:"text-2xl mb-2 animate-bounce",children:"⚠️ Attention"}),R.jsxs("p",{children:["It looks like you're on a ",R.jsx("span",{style:{backgroundColor:"yellow",color:"black",fontWeight:"bold",padding:"0 4px"},children:"phone"}),". For the best experience, please use a ",R.jsx("span",{style:{backgroundColor:"green",color:"black",fontWeight:"bold",padding:"0 4px"},children:"laptop"})," or ",R.jsx("span",{style:{backgroundColor:"green",color:"black",fontWeight:"bold",padding:"0 4px"},children:"PC"}),"."]})]}),R.jsx("div",{className:"text-center pointer-events-none w-full",children:R.jsxs("div",{className:`text-center transition-transform duration-1000 transform hover:scale-105 font-game 
                      flex flex-col items-center justify-center h-full gap-[2vh]`,children:[R.jsx("h1",{className:`text-[10vw] md:text-[6vw] lg:text-[8vw] min-[1920px]:text-9xl
                       ${s?"animate-slide-out-top":""}`,id:"hero-text-static",children:"NAR"}),R.jsxs("h1",{className:`text-[20vw] md:text-[18vw] lg:text-[16vw] min-[1920px]:text-[250px] 
                       font-bold tracking-tight text-shadow-glow text-white 
                       ${s?"animate-slide-out-bottom":""}`,children:[R.jsx("span",{className:"inline-block animate-float-title-0",children:"2"}),R.jsx("span",{className:"inline-block animate-float-title-1",children:"5"}),R.jsx("span",{className:"inline-block animate-float-title-2",children:"-"}),R.jsx("span",{className:"inline-block animate-float-title-0",children:"2"})]}),R.jsx("p",{className:`text-[2vw] md:text-[1.5vw] lg:text-[1.2vw] min-[1920px]:text-xl 
                      text-white/70 mt-[1vh] hover:text-white transition-colors animate-pulse 
                      ${s?"animate-fade-out-quick":""}`,children:"Click Anywhere to continue"})]})})]})}const $s=(s,e)=>{const t=Y.useRef(null),[i,o]=Y.useState(!1),[a,c]=Y.useState(!1),u=Y.useRef(!1),d=Y.useRef(null);return Y.useEffect(()=>{const f=new IntersectionObserver(([g])=>{const v=g.isIntersecting;v!==u.current&&(o(v),u.current=v,v&&!a&&(c(!0),e&&d.current!==e&&(d.current=e,console.log(`Current section: ${e}`))))},{threshold:.1,rootMargin:"0px 0px -10% 0px",...s}),p=()=>{t.current&&(f.unobserve(t.current),f.observe(t.current))};return t.current&&f.observe(t.current),window.addEventListener("resize",p),()=>{t.current&&f.unobserve(t.current),window.removeEventListener("resize",p)}},[s,e,a]),[t,i,a]},Q_=({currentTheme:s,onThemeChange:e})=>R.jsx("div",{className:"fixed top-4 left-4 z-50 animate-fadeIn",children:R.jsx("select",{value:s,onChange:t=>e(t.target.value),className:`bg-black/30 backdrop-blur-sm text-white/70 hover:text-white
                  px-4 py-2 rounded-lg border border-white/20 
                  transition-all duration-300 outline-none cursor-pointer
                  hover:border-white/40 font-game appearance-none
                  pr-8 relative`,style:{backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,backgroundRepeat:"no-repeat",backgroundPosition:"right 8px center",backgroundSize:"16px"},children:ps.map(t=>R.jsxs("option",{value:t.name,className:"bg-black text-white",children:[t.icon," ",t.label]},t.name))})}),ka=({text:s="Scroll Down",onClick:e})=>R.jsxs("div",{className:"absolute bottom-[2vh] right-[2vw] flex flex-col items-center text-white/70 animate-bounce cursor-pointer",onClick:e,children:[R.jsx("p",{className:"mb-[1vh] text-[2vw] md:text-[1.5vw] lg:text-[1vw]",children:s}),R.jsx("svg",{className:"w-[4vw] h-[4vw] md:w-[3vw] md:h-[3vw] lg:w-[2vw] lg:h-[2vw]",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:R.jsx("path",{strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})]}),S0=({text:s,baseDelay:e=0})=>{const[t,i]=Y.useState(()=>s.split("").map(a=>a===" "?" ":"ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random()*26)])),o="ABCDEFGHIJKLMNOPQRSTUVWXYZ";return Y.useEffect(()=>{const a=s.split("").map((c,u)=>{const d=Math.random()*1200,f=5+Math.floor(Math.random()*5);let p=0;return setTimeout(()=>{const g=setInterval(()=>{i(v=>{const y=[...v];return p<f?y[u]=o[Math.floor(Math.random()*o.length)]:(y[u]=c,clearInterval(g)),y}),p++},50);return g},e+d)});return()=>a.forEach(c=>clearTimeout(c))},[s,e]),R.jsx("span",{className:"inline-block text-[6vw] sm:text-[8vw] md:text-[6vw] lg:text-[4vw]",children:t.map((a,c)=>R.jsx("span",{className:`inline-block ${a===" "?"mx-2":""}`,style:{animation:`glitch-effect 3s infinite ${Math.random()*1e3}ms`},children:a||" "},c))})},eS=({sectionRef:s,isGameTransitioning:e,handleGameClick:t})=>R.jsxs("section",{ref:s,className:"w-full h-screen min-h-[600px] max-h-[1080px] snap-start relative flex items-center justify-center pointer-events-auto mb-10 sm:mb-4",children:[R.jsx("div",{className:"relative h-full flex flex-col items-center justify-center p-4 md:p-8 sm:p-2",children:R.jsxs("div",{className:"flex flex-col items-center gap-8 md:gap-12 sm:gap-4 animate-fade-scale-in",children:[R.jsxs("div",{className:"flex flex-row items-center gap-4 md:gap-8",children:[R.jsx("div",{className:`flex ${e?"transform duration-1000 translate-y-72 translate-x-64 z-10":""}`,children:R.jsx("img",{src:"./assets/images/logo.png",alt:"SLC Logo",className:`w-[15vw] h-auto animate-spin-slow opacity-80 hover:opacity-100 
            transition-all drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]
            ${e?"animate-logo-expand-smooth":""}`})}),R.jsxs("h1",{className:"text-[14vw] md:text-[8vw] lg:text-[9vw] font-bold tracking-tight text-shadow-glow text-white",children:[R.jsx("span",{className:"inline-block animate-slide-in-number-1 opacity-0",children:"2"}),R.jsx("span",{className:"inline-block animate-slide-in-number-2 opacity-0",children:"5"}),R.jsx("span",{className:"inline-block animate-slide-in-number-3 opacity-0",children:"-"}),R.jsx("span",{className:"inline-block animate-slide-in-number-4 opacity-0",children:"2"})]})]}),R.jsxs("div",{className:"relative animate-slide-in-bottom text-center",children:[R.jsx("h1",{className:"text-[12vw] md:text-[4vw] lg:text-[4vw] animate-fade-in-delay-600 text-glitch",id:"hero-text-static",children:R.jsx(S0,{text:"NEW ASSISTANT",baseDelay:0})}),R.jsx("h1",{className:"text-[16vw] md:text-[6vw] lg:text-[6vw] mt-4 animate-fade-in-delay-900 text-glitch",id:"hero-text-static",children:R.jsx(S0,{text:"RECRUITMENT",baseDelay:200})})]}),R.jsx("div",{className:"flex flex-row flex-nowrap items-center justify-center gap-2 md:gap-16 mt-8 opacity-0 animate-fade-in-delay-1200",children:[{to:"#",text:"Play Game",icon:"🎮",onClick:t,className:e?"opacity-0":""},{to:"https://bluejack.binus.ac.id/nar",text:"Register Now",icon:"📝",target:"_blank",rel:"noopener noreferrer"}].map((i,o)=>R.jsxs(vf,{to:i.to,onClick:i.onClick,target:i.target,rel:i.rel,className:`group relative overflow-hidden rounded-xl bg-black/50 
                           hover:scale-105 transition-all duration-500 border border-white/10 sm:w-auto
                           px-1 py-1 sm:px-3 sm:py-2
                           ${i.className||""}`,children:[R.jsxs("div",{className:"relative px-2 md:px-8 py-1 md:py-4 flex items-center gap-2 ",children:[R.jsx("span",{className:"text-[3vw] md:text-[3vw] lg:text-[2vw]",children:i.icon}),R.jsx("span",{className:"text-[3vw] md:text-[2.5vw] lg:text-[2vw] glitch-text",children:i.text})]}),R.jsx("div",{className:`absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-white/25 to-cyan-500/0 
                           translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`})]},o))})]})}),R.jsx(ka,{text:"Scroll To Recruitment Phase"})]}),tS=({sectionRef:s,sectionInView:e,hasTriggered:t})=>R.jsxs("section",{ref:s,className:"w-full h-screen min-h-[600px] max-h-[1080px] snap-start relative flex items-center justify-center pointer-events-auto mb-20 sm:mb-8",children:[R.jsxs("div",{className:"w-full max-w-[90vw] lg:max-w-[80vw] px-4 md:px-8 sm:px-2",children:[R.jsxs("h1",{className:`text-[6vw] md:text-[4vw] lg:text-[3vw] font-bold text-white mb-[2vh] text-center text-shadow-glow relative group transition-all duration-1000 ${t?"opacity-100 translate-y-0":"opacity-0 -translate-y-10"}`,children:[R.jsx("span",{className:"inline-block animate-float-title",children:"RECRUITMENT"}),R.jsx("span",{className:"inline-block animate-float-title-delayed mx-2",children:"PHASE"})]}),R.jsxs("div",{className:"relative h-[min(60vh,600px)] px-4",children:[R.jsxs("svg",{className:"absolute inset-0 w-full h-full rotate-90 sm:rotate-0",viewBox:"0 0 1000 600",preserveAspectRatio:"none",children:[R.jsx("path",{id:"roadPath",d:"M100,300 C250,300 350,100 500,300 C650,500 750,100 900,300",fill:"none",stroke:"url(#roadGradient)",strokeWidth:"40",className:"drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]",strokeDasharray:"2000",strokeDashoffset:"2000",style:{animation:t?"drawPath 4s linear forwards":"none"}}),R.jsx("path",{d:"M100,300 C250,300 350,100 500,300 C650,500 750,100 900,300",fill:"none",stroke:"rgba(6,182,212,0.5)",strokeWidth:"2",strokeDasharray:"10,10",className:"animate-dash opacity-50"}),R.jsx("defs",{children:R.jsxs("linearGradient",{id:"roadGradient",gradientUnits:"userSpaceOnUse",children:[R.jsx("stop",{offset:"0%",stopColor:"rgba(17,24,39,0.8)"}),R.jsx("stop",{offset:"50%",stopColor:"rgba(6,182,212,0.2)"}),R.jsx("stop",{offset:"100%",stopColor:"rgba(17,24,39,0.8)"})]})})]}),R.jsx("div",{className:"absolute inset-0 scale-[0.8] lg:scale-100",children:[{phase:"01",title:"Initial Test",isCurrent:!0,position:"left-[50%] top-[10%] sm:left-[calc(15%_+_2vw)] sm:top-[45%]",steps:["Aptitude Test","Programming Test"],pathPercent:15,color:"rgb(34, 197, 94)",glow:"shadow-[0_0_15px_rgba(34,197,94,0.5)]"},{phase:"02",title:"Pre Training",position:"left-[90%] top-[30%] sm:left-[calc(35%_+_2vw)] sm:top-[25%]",steps:["DS Using C","Python","OOP Using Java"],pathPercent:35,color:"rgb(59, 130, 246)",glow:"shadow-[0_0_15px_rgba(59,130,246,0.5)]"},{phase:"03",title:"Interview",position:"left-[25%] top-[60%] sm:left-[calc(65%_-_2vw)] sm:top-[65%]",steps:["Resume","Presentation"],pathPercent:50,color:"rgb(234, 179, 8)",glow:"shadow-[0_0_15px_rgba(234,179,8,0.5)]"},{phase:"04",title:"Core Training",position:"left-[75%] top-[70%] sm:left-[calc(85%_-_2vw)] sm:top-[45%]",steps:["Learning Session","Case Solving","Presentation","Evaluation"],pathPercent:70,color:"rgb(239, 68, 68)",glow:"shadow-[0_0_15px_rgba(239,68,68,0.5)]"}].map((i,o)=>R.jsx("div",{className:`absolute ${i.position} transform -translate-x-1/2 -translate-y-1/2 rotate-0 sm:rotate-90
                ${i.isCurrent?"z-20 scale-110":"z-10"} opacity-0
                ${t?"animate-fade-in-card":""}`,style:{animationDelay:`${i.pathPercent/100*4}s`},children:R.jsxs("div",{className:`group relative flex w-[10vw] h-[10vw] flex-col items-center animate-float phase-group-${i.phase}`,children:[R.jsxs("div",{className:`particle-container w-[8vmin] h-[8vmin] md:w-[10vmin] md:h-[10vmin] rounded-full 
                             flex items-center justify-center border-[${i.color}] ${i.glow} 
                             -translate-y-[10vw] md:-translate-y-[10vh]
                             transition-all duration-300 phase-card-${i.phase}`,style:{boxShadow:`0 0 15px ${i.color}`,"--fire-color":i.color},children:[R.jsx("span",{className:"text-[3vmin] md:text-[2.5vmin]",id:"hero-text-static",children:i.phase}),i.isCurrent&&R.jsx("div",{className:"absolute inset-0 rounded-full bg-cyan-500/20 animate-ping"})]}),R.jsxs("div",{className:`mt-4 text-center bg-black/50 border-2 rounded-lg p-2 md:p-3
                           transition-all duration-300 phase-card-${i.phase} relative overflow-visible
                           w-[30vmin] md:w-[25vmin]`,style:{borderColor:i.color,boxShadow:`0 0 15px ${i.color}`},children:[R.jsx("div",{className:"particles-wrapper",children:[...Array(8)].map((a,c)=>R.jsx("div",{className:"particle-fire",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,"--random-x":`${(Math.random()-.5)*20}px`,"--random-y":`-${Math.random()*50+20}px`,"--fire-color":i.color}},c))}),R.jsx("h3",{className:"text-[3vmin] md:text-[2.7vmin] mb-2",id:"hero-text-static",children:i.title}),R.jsx("div",{className:"space-y-1",children:i.steps.map((a,c)=>R.jsx("div",{className:"text-[2.5vmin] md:text-[2vmin] text-white",children:a},c))})]})]})},o))})]})]}),R.jsx(ka,{text:"Initial Test"})]}),nS=({sectionRef:s,scrollToTop:e,sectionInView:t,hasTriggered:i})=>R.jsxs("section",{ref:s,className:"initial-test-section w-full h-screen min-h-[60vh] max-h-[100vh] snap-start relative flex flex-col items-center justify-center px-2 mb-10 md:mb-8 sm:mb-4",children:[R.jsxs("div",{className:"content w-full max-w-[95vw] lg:max-w-[80vw] sm:px-2",children:[R.jsxs("h1",{className:`lg:text-[5vw] sm:text-[7vw] font-bold text-white mb-2 text-center text-shadow-glow transition-all duration-1000 transform
          ${i?"opacity-100 translate-y-0":"opacity-0 -translate-y-10"}`,children:[R.jsx("span",{className:"inline-block animate-float-title",children:"INITIAL"}),R.jsx("span",{className:"inline-block animate-float-title-delayed mx-1",children:"TEST"})]}),R.jsxs("div",{className:"relative flex flex-wrap items-center justify-center space-y-2 md:space-y-4",children:[R.jsx("div",{className:`absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-xl
            transition-all duration-1000 delay-300
            ${i?"opacity-100":"opacity-0"}`}),R.jsx("div",{className:"relative w-full",children:R.jsxs("div",{className:"grid grid-cols-1 gap-2 md:gap-4 lg:grid-cols-3",children:[R.jsx("div",{className:`flex-1 w-full group perspective transition-all duration-1000 transform
                ${i?"opacity-100 translate-x-0":"opacity-0 -translate-x-20"}`,children:R.jsx("div",{className:"relative transform transition-transform duration-500 group-hover:rotate-y-12",children:R.jsxs("div",{className:"p-2 md:p-3 lg:p-4 rounded-xl transition-all duration-300 bg-gradient-to-br from-cyan-500/10 to-transparent",children:[R.jsxs("div",{className:"flex items-center justify-center gap-1 md:gap-2 mb-1 md:mb-2",children:[R.jsx("div",{className:"w-5 h-5 md:w-6 md:h-6 rounded-xl bg-cyan-500/20 flex items-center justify-center",children:R.jsx("span",{className:"text-sm md:text-base",children:"🧠"})}),R.jsx("h2",{className:"text-sm md:text-base lg:text-lg",id:"hero-text-static",children:"Aptitude Test"})]}),R.jsx("div",{className:"space-y-1 md:space-y-2",children:[{name:"Mathematical Reasoning",desc:"Solve mathematical problems"},{name:"Pattern Recognition",desc:"Identify sequences and patterns"},{name:"Analytical Thinking",desc:"Analyze and solve logical problems"}].map((o,a)=>R.jsxs("div",{className:`p-1 md:p-2 bg-black rounded-lg transform hover:translate-x-2 
                        transition-all duration-300 border border-white`,children:[R.jsx("h3",{className:"text-xs md:text-sm lg:text-base text-white/90 mb-1",children:o.name}),R.jsx("p",{className:"text-[0.7rem] md:text-xs lg:text-sm text-white/60",children:o.desc})]},a))})]})})}),R.jsx("div",{className:`flex-1 w-full group perspective transition-all duration-1000 delay-300 transform
                ${i?"opacity-100 translate-x-0":"opacity-0 translate-x-20"}`,children:R.jsx("div",{className:"relative transform transition-all duration-500 group-hover:rotate-y-12",children:R.jsxs("div",{className:`bg-gradient-to-br from-purple-500/10 to-transparent p-2 md:p-3 lg:p-4 rounded-xl 
                  hover:border-purple-500/40 transition-all duration-300`,children:[R.jsxs("div",{className:"flex items-center justify-center gap-1 md:gap-2 mb-1 md:mb-2",children:[R.jsx("div",{className:"w-5 h-5 md:w-6 md:h-6 rounded-xl bg-purple-500/20 flex items-center justify-center",children:R.jsx("span",{className:"text-sm md:text-base",children:"💻"})}),R.jsx("h2",{className:"text-sm md:text-base lg:text-lg",id:"hero-text-static",children:"Programming Test"})]}),R.jsx("h3",{className:"text-xs md:text-sm lg:text-base text-white/90 mb-1 md:mb-2",children:"You can use : "}),R.jsx("div",{className:"space-y-1 md:space-y-2",children:[{lang:"C/C++"},{lang:"Java"},{lang:"Python"}].map((o,a)=>R.jsx("div",{className:"relative group/item",children:R.jsx("div",{className:`p-1 md:p-2 bg-black rounded-lg transform hover:translate-x-2
                          transition-all duration-300 border border-white`,children:R.jsxs("div",{className:"flex items-center gap-1 md:gap-2",children:[R.jsx("span",{className:"text-[0.4rem] md:text-[0.75rem]",children:o.icon}),R.jsxs("div",{children:[R.jsx("h3",{className:"text-xs md:text-sm lg:text-base text-white/90",children:o.lang}),R.jsx("p",{className:"text-[0.7rem] md:text-xs lg:text-sm text-white/60",children:o.desc})]})]})})},a))})]})})}),R.jsx("div",{className:`flex-1 w-full group perspective transition-all duration-1000 delay-500 transform
                ${i?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:R.jsx("div",{className:"relative transform transition-all duration-500 group-hover:rotate-x-12",children:R.jsxs("div",{className:"p-2 md:p-3 lg:p-4 rounded-xl transition-all duration-300 bg-gradient-to-br from-blue-500/10 to-transparent",children:[R.jsxs("div",{className:"flex items-center justify-center gap-1 md:gap-2 mb-1 md:mb-2",children:[R.jsx("div",{className:"rounded-xl bg-blue-500/20 flex items-center justify-center",children:R.jsx("span",{className:"text-sm md:text-base",children:"📅"})}),R.jsx("h2",{className:"text-sm md:text-base lg:text-lg",id:"hero-text-static",children:"Test Schedule"})]}),R.jsxs("div",{className:"gap-1 space-y-2 md:gap-2",children:[R.jsx("div",{className:"w-full space-y-1 md:space-y-2 justify-items-end align-middle",children:R.jsxs("div",{className:"w-full bg-black p-1 md:p-3 lg:p-4 rounded-lg border border-white transition-all duration-300",children:[R.jsx("h3",{className:`text-lg md:text-sm lg:text-2xl text-white/90 mb-1 md:mb-2 transform hover:translate-x-2
                            transition-all duration-300 w-full`,children:"23 February 2025"}),R.jsxs("div",{className:"space-y-1 md:space-y-2",children:[R.jsx("p",{className:`text-[0.7rem] md:text-xs lg:text-sm text-white transform hover:translate-x-2
                            transition-all duration-300`,children:"Batch 1: 08:00 - 13:05"}),R.jsx("p",{className:`text-[0.7rem] md:text-xs lg:text-sm text-white transform hover:translate-x-2
                            transition-all duration-300`,children:"Batch 2: 11:00 - 16:05"})]})]})}),R.jsx("div",{className:"space-y-1 md:space-y-2",children:[{text:"Dress Politely",icon:"👔"},{text:"Bring Binusian Card",icon:"🪪"},{text:"Arrive On Time",icon:"⏰"}].map((o,a)=>R.jsxs("div",{className:`flex items-center gap-1 md:gap-2 p-1 md:p-2 bg-black rounded-lg
                          border border-white transform hover:translate-x-2 duration-300 transition-all`,children:[R.jsx("span",{className:"text-[0.4rem] md:text-[0.75rem]",children:o.icon}),R.jsx("span",{className:"text-[0.7rem] md:text-xs lg:text-sm text-white/90",children:o.text})]},a))})]})]})})})]})})]})]}),R.jsx(ka,{text:"Registration",className:`transition-all duration-1000 delay-700 transform
        ${i?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`})]}),iS=({sectionRef:s,hasTriggered:e})=>{const[t,i]=Y.useState(null);return R.jsxs("section",{ref:s,className:"w-full h-screen min-h-[600px] max-h-[1080px] snap-start relative flex items-center justify-center pointer-events-auto mb-10 overflow-hidden sm:mb-4",children:[R.jsxs("div",{className:`w-full max-w-[90vw] lg:max-w-[80vw] px-4 md:px-6 sm:px-2 transition-opacity duration-500 ${e?"opacity-100":"opacity-0"}`,children:[R.jsx("h1",{className:`text-[4vw] md:text-[4vw] lg:text-[3.5vw] font-bold text-white mb-[1vh] text-center text-shadow-glow transition-all duration-1000 transform hover-float
            ${e?"translate-y-0 opacity-100":"translate-y-10 opacity-0"}`,style:{transitionDelay:"200ms"},children:R.jsx("span",{className:"inline-block cursor-pointer animate-float-title",children:"REGISTRATION"})}),R.jsxs("div",{className:"relative",children:[R.jsxs("div",{className:"flex justify-between mb-10 relative",children:[R.jsx("div",{className:`absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-blue-500/50
                transition-all duration-1000 transform origin-left
                ${e?"scale-x-100 opacity-100":"scale-x-0 opacity-0"}`,style:{transitionDelay:"500ms"}}),[{date:"27 January 2025",event:"Registration Opens",icon:"🚀",status:"past"},{date:"15 February 2025",event:"Registration Closes",icon:"🔒",status:"future"},{date:"23 February 2025",event:"Initial Test",icon:"✨",status:"future"}].map((o,a)=>R.jsxs("div",{className:`relative z-10 flex flex-col items-center group transition-all duration-1000 transform
                  ${e?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,style:{transitionDelay:`${700+a*200}ms`},onMouseEnter:()=>i(a),onMouseLeave:()=>i(null),children:[R.jsx("div",{className:`w-[6vmin] h-[6vmin] md:w-[7vmin] md:h-[7vmin] rounded-full flex items-center justify-center 
                  border border-white relative timeline-dot cursor-pointer hover:border-ice-200`,children:R.jsx("span",{className:"text-[3vmin] md:text-[3.5vmin] transform transition-transform duration-300\n                    ${hoveredDate === index ? 'scale-125' : ''}",children:o.icon})}),R.jsxs("div",{className:"mt-[1vh] text-center transform transition-all duration-300 text-white/90",children:[R.jsx("p",{className:"text-[2.5vmin] md:text-[3vmin] font-bold",children:o.date}),R.jsx("p",{className:"text-[2vmin] md:text-[2vmin]",children:o.event})]})]},a))]}),R.jsx("div",{className:"mt-8 relative",children:R.jsxs("div",{className:"flex flex-col items-center space-y-6",children:[R.jsx("h2",{className:"text-[3.5vw] md:text-[2.5vw] lg:text-[2vw] mb-4 hover-float cursor-pointer",id:"hero-text-static",children:"Requirements"}),R.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl",children:[{text:"Active BINUS Student",icon:"🎓",desc:"Currently enrolled in BINUS University"},{text:"2 Year Commitment",icon:"📝",desc:"Willing to sign a contract"},{text:"Minimum Grade B in Algorithm and Programming / Introduction to Programming",icon:"💯",desc:"*Except for first semester students"},{text:"SoCS/SoIS/DP/MTP",icon:"🏫",desc:"Students from eligible majors"}].map((o,a)=>R.jsxs("div",{className:`group flex items-center gap-2 p-4 rounded-lg 
                      transition-all duration-200 cursor-pointer hover:bg-cyan-500/10
                      transform 
                      ${e?"translate-y-0 opacity-100":"translate-y-20 opacity-0"}`,style:{transitionDelay:`${1600+a*200}ms`},children:[R.jsx("div",{className:`w-[5vmin] h-[5vmin] md:w-[4vmin] md:h-[4vmin] rounded-lg flex items-center justify-center flex-shrink-0
                                  transition-transform duration-200`,children:R.jsx("span",{className:"text-[2.5vmin] md:text-[2vmin] transform group-hover:scale-110 transition-transform duration-200",children:o.icon})}),R.jsxs("div",{children:[R.jsx("h3",{className:"text-[2vmin] md:text-[1.5vmin] text-white/90 mb-1",children:o.text}),R.jsx("p",{className:"text-[1.5vmin] md:text-[1.2vmin] text-white/60",children:o.desc})]})]},a))}),R.jsxs("button",{onClick:()=>{const o=window.open("https://bluejack.binus.ac.id/nar/home/registration","_blank");o?o.focus():alert("Popup blocked! Please allow popups for this site.")},className:`relative group mt-8 hover-float transition-all duration-1000 transform
    ${e?"translate-y-0 opacity-100 scale-100":"translate-y-10 opacity-0 scale-95"}`,style:{transitionDelay:"2400ms"},children:[R.jsx("div",{className:`absolute -inset-1 via-purple-500 to-cyan-500 
    rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300`}),R.jsxs("div",{className:"relative px-12 py-4 rounded-lg flex items-center divide-x divide-gray-600",children:[R.jsx("span",{className:"text-[3.5vmin] md:text-[2.5vmin] pr-6",id:"hero-text-static",children:"Register Now"}),R.jsx("span",{className:"text-[2.5vmin] md:text-[2vmin] pl-6 text-white bounce-x inline-block",children:"→"})]})]})]})}),R.jsx("div",{className:`absolute inset-0 pointer-events-none transition-all duration-1000
              ${e?"opacity-100":"opacity-0"}`,style:{transitionDelay:"500ms"},children:Array.from({length:15}).map((o,a)=>R.jsx("div",{className:`absolute w-1 h-1 rounded-full bg-cyan-500/30 transition-all duration-1000
                  ${e?"animate-pulse opacity-100":"opacity-0"}`,style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*1}s`,animationDuration:`${2+Math.random()*2}s`,transitionDelay:`${2e3+a*100}ms`}},a))})]})]}),R.jsx(ka,{text:"Assistant Benefits"})]})},rS=({sectionRef:s,sectionInView:e,hasTriggered:t})=>{const[i,o]=Y.useState(null),a=c=>{o(i===c?null:c)};return R.jsxs("section",{ref:s,className:`w-full h-screen min-h-[60vh] max-h-[100vh] snap-start relative flex items-center justify-center pointer-events-auto mb-40 md:mb-20 sm:mb-8 
        transform transition-all duration-1000 ease-out ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,children:[R.jsxs("div",{className:"w-full max-w-[95vw] lg:max-w-[80vw] px-2 md:px-6 sm:px-1",children:[R.jsxs("h1",{className:`text-[6vw] md:text-[4vw] lg:text-[3vw] font-bold text-white mb-[1vh] text-center text-shadow-glow transition-all duration-700 
          transform ${t?"opacity-100 translate-y-0":"opacity-0 -translate-y-10"}`,style:{transitionDelay:"200ms"},children:[R.jsx("span",{className:"inline-block animate-float-title",children:"ASSISTANT"}),R.jsx("span",{className:"inline-block mx-2 animate-float-title-delayed",children:"BENEFITS"})]}),R.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6",children:[{title:"SOFT SKILLS",color:"cyan",skills:[{name:"Public Speaking",icon:"🎤"},{name:"Leadership",icon:"👑"},{name:"Problem Solving",icon:"🧩"},{name:"Time Management",icon:"⏰"},{name:"Communication",icon:"💬"},{name:"And Many More"}]},{title:"HARD SKILLS",color:"purple",skills:[{name:"Programming",icon:"💻"},{name:"Web Development",icon:"🌐"},{name:"Mobile Apps",icon:"📱"},{name:"Database",icon:"🗄️"},{name:"Cloud Computing",icon:"☁️"},{name:"And Many More"}]},{title:"OTHER",color:"blue",skills:[{name:"Salary",icon:"💰"},{name:"Health Benefits",icon:"🏥"},{name:"Free Parking",icon:"🅿️"},{name:"Career Path",icon:"📈"},{name:"Second Family",icon:"❤️"},{name:"And Many More"}]}].map((c,u)=>R.jsxs("div",{className:`group bg-black/90 backdrop-blur-md rounded-xl p-2 md:p-4 lg:p-6 border border-white/10
                transition-all duration-300 ease-out transform
                ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,style:{transitionDelay:`${400+u*200}ms`},children:[R.jsxs("div",{className:"flex justify-between items-center cursor-pointer",onClick:()=>a(u),children:[R.jsx("h2",{className:"text-[5vw] md:text-[3vw] lg:text-[2.5vw] mb-[1vh]",id:"hero-text-static",children:c.title}),R.jsx("span",{className:"text-[5vw] md:hidden",children:"⬇️"})]}),R.jsx("div",{className:`space-y-[1vh] ${i===u?"block animate-slide-down":"hidden"} md:block transition-all duration-300 ease-in-out`,children:c.skills.map((d,f)=>R.jsxs("div",{className:`flex items-center gap-1 md:gap-2 p-1 md:p-2 rounded-lg
                      transform transition-all duration-500 ease-out
                      ${t?"opacity-100 translate-x-0":"opacity-0 -translate-x-10"}`,style:{transitionDelay:`${600+u*200+f*100}ms`},children:[R.jsx("span",{className:"text-[3vmin] md:text-[2.5vmin]",children:d.icon}),R.jsx("span",{className:"text-[2.5vmin] md:text-[2vmin] text-white/90",children:d.name})]},f))}),R.jsx("div",{className:"absolute inset-0 pointer-events-none",children:R.jsx("div",{className:"particle-container",children:Array.from({length:20}).map((d,f)=>R.jsx("div",{className:"particle",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`}},f))})})]},u))})]}),R.jsx(ka,{text:"Contact Us"})]})},sS=({sectionRef:s,sectionInView:e,hasTriggered:t})=>(Y.useEffect(()=>{const i=o=>{e&&o.deltaY>0&&o.preventDefault()};return window.addEventListener("wheel",i,{passive:!1}),()=>{window.removeEventListener("wheel",i)}},[e]),R.jsx("section",{ref:s,className:`w-full h-screen min-h-[600px] max-h-[1080px] snap-start relative flex items-center justify-center pointer-events-auto md:mb-20 transition-all duration-1000 transform ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,onWheel:i=>{i.deltaY>0},children:R.jsxs("div",{className:"w-full max-w-[90vw] lg:max-w-[80vw] px-4 md:px-6 sm:px-2 flex flex-col items-center justify-center",children:[R.jsxs("h1",{className:`text-[6vw] md:text-[4vw] lg:text-[3vw] font-bold text-white mb-[1vh] text-center text-shadow-glow relative group transition-all duration-1000 ${t?"opacity-100 scale-100":"opacity-0 scale-90"}`,children:[R.jsx("span",{className:"inline-block animate-float-title",children:"CONTACT"}),R.jsx("span",{className:"inline-block animate-float-title-delayed mx-2",children:"US"})]}),R.jsxs("div",{className:"flex flex-col items-center gap-1z md:gap-8 w-full",children:[R.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 md:gap-6 lg:gap-8",children:[{title:"Location",icon:"📍",content:["Room 724","BINUS Anggrek Campus","Jakarta Barat"]},{title:"Contact",icon:"📞",content:["[021] 5345830","Ext 1762"]},{title:"RECSELS",icon:"👥",content:["Darwin","Viernicia","Vito"]}].map((i,o)=>R.jsxs("div",{className:`group relative p-2 md:p-4 lg:p-6 rounded-xl bg-black/50
                            border border-white/10 hover:border-white/30 
                            transition-all duration-500 transform
                            ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:`${o*200}ms`,transitionTimingFunction:"cubic-bezier(0.34, 1.56, 0.64, 1)"},children:[R.jsxs("div",{className:"relative z-10 flex items-center gap-2",children:[R.jsx("span",{className:`text-[5vmin] md:text-[4vmin] transition-all duration-500 ${t?"opacity-100 scale-100":"opacity-0 scale-0"}`,style:{transitionDelay:`${o*200+300}ms`},children:i.icon}),R.jsx("h3",{className:`text-[4vmin] md:text-[3vmin] transition-all duration-500 ${t?"opacity-100 translate-x-0":"opacity-0 -translate-x-10"}`,style:{transitionDelay:`${o*200+400}ms`},id:"hero-text-static",children:i.title})]}),R.jsx("div",{className:"mt-2",children:i.content.map((a,c)=>R.jsx("p",{className:`text-white/70 text-[3vmin] md:text-[2vmin] leading-relaxed group-hover:text-white 
                                transition-all duration-500
                                ${t?"opacity-100 translate-x-0":"opacity-0 -translate-x-10"}`,style:{transitionDelay:`${o*200+500+c*100}ms`},children:a},c))})]},o))}),R.jsxs("div",{className:`w-full max-w-2xl transition-all duration-1000 transform ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,style:{transitionDelay:"800ms"},children:[R.jsx("h3",{className:"text-[4vmin] md:text-[3vmin] md:mb-8 text-center",id:"hero-text-static",children:"Connect With Us"}),R.jsx("div",{className:"flex justify-center gap-8 md:gap-12",children:[{name:"Instagram",icon:"./assets/images/instagram.png",url:"https://www.instagram.com/slcbinusuniv/"},{name:"Line",icon:"./assets/images/line.png",url:"https://lin.ee/T8Zr5qu"},{name:"YouTube",icon:"./assets/images/youtube.png",url:"https://www.youtube.com/@SoftwareLabCenter"}].map((i,o)=>R.jsxs("a",{href:i.url,target:"_blank",rel:"noopener noreferrer",className:`group flex flex-col items-center md:gap-3 p-4 rounded-lg
                           hover:bg-cyan-500/10 transition-all duration-500 transform
                           ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:`${1e3+o*150}ms`,transitionTimingFunction:"cubic-bezier(0.34, 1.56, 0.64, 1)"},children:[R.jsx("img",{src:i.icon,alt:i.name,className:"w-[8vmin] md:w-[6vmin] h-[8vmin] md:h-[6vmin] group-hover:scale-125 transition-transform duration-300 object-contain"}),R.jsx("span",{className:"text-white/70 text-[3vmin] md:text-[2vmin] group-hover:text-white transition-colors",children:i.name})]},o))})]}),R.jsx("div",{className:`w-full text-center md:mt-8 transition-all duration-1000 transform ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-20"}`,style:{transitionDelay:"1300ms"},children:R.jsxs("p",{className:"text-[4vmin] md:text-[3vmin] text-white font-bold md:mb-2 text-shadow-glow",children:[R.jsx("span",{className:"inline-block animate-float-title",children:'"Confront'}),R.jsx("span",{className:"inline-block animate-float-title-delayed mx-1",children:"the"}),R.jsx("span",{className:"inline-block animate-float-title",children:"challenges"}),R.jsx("span",{className:"inline-block animate-float-title-delayed mx-1",children:"of"}),R.jsx("span",{className:"inline-block animate-float-title",children:"learning"}),R.jsx("span",{className:"inline-block animate-float-title-delayed mx-1",children:"and"}),R.jsx("span",{className:"inline-block animate-float-title",children:"outgrow"}),R.jsx("span",{className:"inline-block animate-float-title-delayed mx-1",children:"the"}),R.jsx("span",{className:"inline-block animate-float-title",children:"boundaries"}),R.jsx("span",{className:"inline-block animate-float-title-delayed mx-1",children:'together."'}),R.jsxs("span",{className:"text-[3vmin] md:text-[2vmin] text-white/80",children:[R.jsx("span",{className:"inline-block animate-float-title",children:"~"}),R.jsx("span",{className:"inline-block animate-float-title-delayed mx-1",children:"24-2"})]})]})})]})]})}));function oS(){const[s,e]=Y.useState(!1),[t,i]=Y.useState(!1),[o,a]=Y.useState(()=>ps[Math.floor(Math.random()*ps.length)].name),[c,u]=Y.useState(!1),[d,f]=Y.useState(!1),[p,g]=Y.useState(""),[v,y]=Y.useState(!1),[w,M]=Y.useState(!1),[S,x]=Y.useState(!1),[A,T]=Y.useState(!1),[E,z]=Y.useState(!1),[D,F]=Y.useState(!0);Y.useState(!1),Y.useState(!0);const[k,P]=Y.useState(!1),[b,N]=Y.useState(0);Y.useRef(null),Y.useRef(0);const[K,$]=Y.useState(100),te=1e3,J=Y.useRef(),[Q,ce,G]=$s({},"Welcome Section"),[he,oe,H]=$s({},"Recruitment Phase"),[se,Ue,ie]=$s({},"Initial Test"),[fe,Me,ve]=$s({},"Registration"),[Le,ze,Xe]=$s({},"Contact Us"),[gt,xe,be]=$s({},"Assistant Benefits"),O=Bc(),Qe=()=>{z(!0),M(!0),setTimeout(()=>{z(!1),setTimeout(()=>{g("animate-zoom-in-fade"),y(!0),f(!0),e(!0),u(!0),setTimeout(()=>{g("animate-zoom-out-fade"),y(!1)},500)},500)},500)},we=()=>{const Ee=document.querySelector(".snap-y");Ee&&Ee.scrollTo({top:0,behavior:"smooth"})},Ve=Ee=>{a(Ee)},Re=Ee=>{Ee.preventDefault(),we(),setTimeout(()=>{x(!0);const U=document.querySelector(".slc-logo");U&&U.classList.add("animate-logo-expand-smooth"),setTimeout(()=>{O("/game")},1500)},1e3)};Y.useEffect(()=>{const Ee=()=>{const L=document.querySelector(".snap-y");L&&F(L.scrollTop<window.innerHeight/2)},U=document.querySelector(".snap-y");return U&&U.addEventListener("scroll",Ee),()=>{U&&U.removeEventListener("scroll",Ee)}},[s]),Y.useEffect(()=>{if(t){const Ee=document.querySelector(".snap-y");Ee&&Ee.scrollTo({top:0,behavior:"smooth"})}},[t]);const it=Ee=>{Ee.preventDefault();const U=Date.now();if(k||U-b<te)return;const L=document.querySelector(".snap-y");if(L){const ne=Ee.deltaY>0?1:-1,ye=L.scrollTop+window.innerHeight*ne;P(!0),N(U),$(0),L.scrollTo({top:ye,behavior:"smooth"}),J.current&&clearInterval(J.current),J.current=window.setInterval(()=>{$(me=>{const $e=me+100/(te/50);return $e>=100?(clearInterval(J.current),P(!1),100):$e})},50)}};return Y.useEffect(()=>{const Ee=document.querySelector(".snap-y");return Ee&&Ee.addEventListener("wheel",it,{passive:!1}),()=>{Ee&&Ee.removeEventListener("wheel",it),J.current&&clearInterval(J.current)}},[b,k]),R.jsx("div",{className:"w-full h-screen flex flex-col items-center bg-black justify-center font-game relative",children:R.jsxs("div",{className:"w-full h-screen flex flex-col items-center bg-black justify-center font-game relative",onClick:s?void 0:Qe,children:[R.jsx("div",{className:"absolute inset-0 bg-black/50 z-0"}),c&&R.jsx(Q_,{currentTheme:o,onThemeChange:Ve}),R.jsx(Z_,{selectedTheme:o,isBlurred:d,isFalling:A,isInteractive:!s,isTransitioning:v,isExploding:E}),R.jsx("div",{className:`relative z-10 w-full ${p}`,children:s?R.jsxs("div",{className:"w-full h-screen overflow-y-scroll snap-y snap-mandatory relative pointer-events-auto space-y-8 md:space-y-0",children:[R.jsx(eS,{sectionRef:Q,isGameTransitioning:S,handleGameClick:Re}),R.jsx(tS,{sectionRef:he,sectionInView:oe,hasTriggered:H}),R.jsx(nS,{sectionRef:se,sectionInView:Ue,hasTriggered:ie,scrollToTop:we}),R.jsx("div",{className:"h-40 md:hidden"}),R.jsx(iS,{sectionRef:fe,hasTriggered:ve}),R.jsx("div",{className:"h-40 md:hidden"}),R.jsx(rS,{sectionRef:gt,sectionInView:xe,hasTriggered:be}),R.jsx("div",{className:"h-40 md:hidden"}),R.jsx("div",{className:"h-40 md:hidden"}),R.jsx(sS,{sectionRef:Le,sectionInView:ze,hasTriggered:Xe})]}):R.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-auto",children:R.jsx(J_,{isExiting:w})})}),!D&&R.jsxs("button",{onClick:Re,className:"hidden sm:block border-ice-200 border-2 absolute  top-4 right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 z-50",children:[R.jsx("span",{className:"inline-block animate-float-title mr-2",children:"Play"}),R.jsx("span",{className:"inline-block animate-float-title-delayed",children:"Game"})]})]})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xf="171",aS=0,w0=1,lS=2,Jg=1,cS=2,Qi=3,Or=0,jn=1,Kt=2,Ur=0,po=1,Ut=2,M0=3,E0=4,uS=5,hs=100,hS=101,dS=102,fS=103,pS=104,mS=200,gS=201,vS=202,xS=203,vd=204,xd=205,yS=206,_S=207,SS=208,wS=209,MS=210,ES=211,TS=212,bS=213,AS=214,yd=0,_d=1,Sd=2,yo=3,wd=4,Md=5,Ed=6,Td=7,yf=0,CS=1,RS=2,Fr=0,PS=1,LS=2,NS=3,IS=4,DS=5,US=6,FS=7,Qg=300,_o=301,So=302,bd=303,Ad=304,Vc=306,Cd=1e3,ms=1001,Rd=1002,Qn=1003,kS=1004,Yl=1005,Li=1006,Lh=1007,gs=1008,sr=1009,ev=1010,tv=1011,Ra=1012,_f=1013,xs=1014,Ni=1015,Oa=1016,Sf=1017,wf=1018,wo=1020,nv=35902,iv=1021,rv=1022,_i=1023,sv=1024,ov=1025,mo=1026,Mo=1027,Mf=1028,Ef=1029,av=1030,Tf=1031,bf=1033,Ec=33776,Tc=33777,bc=33778,Ac=33779,Pd=35840,Ld=35841,Nd=35842,Id=35843,Dd=36196,Ud=37492,Fd=37496,kd=37808,Od=37809,zd=37810,Bd=37811,Hd=37812,Vd=37813,Gd=37814,Wd=37815,jd=37816,Xd=37817,$d=37818,Yd=37819,qd=37820,Kd=37821,Cc=36492,Zd=36494,Jd=36495,lv=36283,Qd=36284,ef=36285,tf=36286,OS=3200,zS=3201,cv=0,BS=1,Dr="",ai="srgb",Eo="srgb-linear",Nc="linear",kt="srgb",Ys=7680,T0=519,HS=512,VS=513,GS=514,uv=515,WS=516,jS=517,XS=518,$S=519,b0=35044,A0="300 es",er=2e3,Ic=2001;class Ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nh=Math.PI/180,Dc=180/Math.PI;function Po(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function Et(s,e,t){return Math.max(e,Math.min(t,s))}function YS(s,e){return(s%e+e)%e}function Ih(s,e,t){return(1-t)*s+t*e}function pa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*o+e.x,this.y=a*o+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(e,t,i,o,a,c,u,d,f){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,d,f)}set(e,t,i,o,a,c,u,d,f){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=d,p[6]=i,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[3],d=i[6],f=i[1],p=i[4],g=i[7],v=i[2],y=i[5],w=i[8],M=o[0],S=o[3],x=o[6],A=o[1],T=o[4],E=o[7],z=o[2],D=o[5],F=o[8];return a[0]=c*M+u*A+d*z,a[3]=c*S+u*T+d*D,a[6]=c*x+u*E+d*F,a[1]=f*M+p*A+g*z,a[4]=f*S+p*T+g*D,a[7]=f*x+p*E+g*F,a[2]=v*M+y*A+w*z,a[5]=v*S+y*T+w*D,a[8]=v*x+y*E+w*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],p=e[8];return t*c*p-t*u*f-i*a*p+i*u*d+o*a*f-o*c*d}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],p=e[8],g=p*c-u*f,v=u*d-p*a,y=f*a-c*d,w=t*g+i*v+o*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=g*M,e[1]=(o*f-p*i)*M,e[2]=(u*i-o*c)*M,e[3]=v*M,e[4]=(p*t-o*d)*M,e[5]=(o*a-u*t)*M,e[6]=y*M,e[7]=(i*d-f*t)*M,e[8]=(c*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,c,u){const d=Math.cos(a),f=Math.sin(a);return this.set(i*d,i*f,-i*(d*c+f*u)+c+e,-o*f,o*d,-o*(-f*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Dh.makeScale(e,t)),this}rotate(e){return this.premultiply(Dh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dh=new xt;function hv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Uc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qS(){const s=Uc("canvas");return s.style.display="block",s}const C0={};function co(s){s in C0||(C0[s]=!0,console.warn(s))}function KS(s,e,t){return new Promise(function(i,o){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function ZS(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function JS(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const R0=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P0=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QS(){const s={enabled:!0,workingColorSpace:Eo,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===kt&&(o.r=rr(o.r),o.g=rr(o.g),o.b=rr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===kt&&(o.r=go(o.r),o.g=go(o.g),o.b=go(o.b))),o},fromWorkingColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},toWorkingColorSpace:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Dr?Nc:this.spaces[o].transfer},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Eo]:{primaries:e,whitePoint:i,transfer:Nc,toXYZ:R0,fromXYZ:P0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:i,transfer:kt,toXYZ:R0,fromXYZ:P0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),s}const Nt=QS();function rr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function go(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let qs;class e1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qs===void 0&&(qs=Uc("canvas")),qs.width=e.width,qs.height=e.height;const i=qs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Uc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=rr(a[c]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rr(t[i]/255)*255):t[i]=rr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let t1=0;class dv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=Po(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Uh(o[c].image)):a.push(Uh(o[c]))}else a=Uh(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function Uh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?e1.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let n1=0;class Dn extends Ro{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,i=ms,o=ms,a=Li,c=gs,u=_i,d=sr,f=Dn.DEFAULT_ANISOTROPY,p=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=Po(),this.name="",this.source=new dv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cd:e.x=e.x-Math.floor(e.x);break;case ms:e.x=e.x<0?0:1;break;case Rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cd:e.y=e.y-Math.floor(e.y);break;case ms:e.y=e.y<0?0:1;break;case Rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Qg;Dn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,o=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const d=e.elements,f=d[0],p=d[4],g=d[8],v=d[1],y=d[5],w=d[9],M=d[2],S=d[6],x=d[10];if(Math.abs(p-v)<.01&&Math.abs(g-M)<.01&&Math.abs(w-S)<.01){if(Math.abs(p+v)<.1&&Math.abs(g+M)<.1&&Math.abs(w+S)<.1&&Math.abs(f+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(f+1)/2,E=(y+1)/2,z=(x+1)/2,D=(p+v)/4,F=(g+M)/4,k=(w+S)/4;return T>E&&T>z?T<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(T),o=D/i,a=F/i):E>z?E<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(E),i=D/o,a=k/o):z<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(z),i=F/a,o=k/a),this.set(i,o,a,t),this}let A=Math.sqrt((S-w)*(S-w)+(g-M)*(g-M)+(v-p)*(v-p));return Math.abs(A)<.001&&(A=1),this.x=(S-w)/A,this.y=(g-M)/A,this.z=(v-p)/A,this.w=Math.acos((f+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class i1 extends Ro{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Dn(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends i1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class fv extends Dn{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class r1 extends Dn{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class za{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,c,u){let d=i[o+0],f=i[o+1],p=i[o+2],g=i[o+3];const v=a[c+0],y=a[c+1],w=a[c+2],M=a[c+3];if(u===0){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=g;return}if(u===1){e[t+0]=v,e[t+1]=y,e[t+2]=w,e[t+3]=M;return}if(g!==M||d!==v||f!==y||p!==w){let S=1-u;const x=d*v+f*y+p*w+g*M,A=x>=0?1:-1,T=1-x*x;if(T>Number.EPSILON){const z=Math.sqrt(T),D=Math.atan2(z,x*A);S=Math.sin(S*D)/z,u=Math.sin(u*D)/z}const E=u*A;if(d=d*S+v*E,f=f*S+y*E,p=p*S+w*E,g=g*S+M*E,S===1-u){const z=1/Math.sqrt(d*d+f*f+p*p+g*g);d*=z,f*=z,p*=z,g*=z}}e[t]=d,e[t+1]=f,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,o,a,c){const u=i[o],d=i[o+1],f=i[o+2],p=i[o+3],g=a[c],v=a[c+1],y=a[c+2],w=a[c+3];return e[t]=u*w+p*g+d*y-f*v,e[t+1]=d*w+p*v+f*g-u*y,e[t+2]=f*w+p*y+u*v-d*g,e[t+3]=p*w-u*g-d*v-f*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,f=u(i/2),p=u(o/2),g=u(a/2),v=d(i/2),y=d(o/2),w=d(a/2);switch(c){case"XYZ":this._x=v*p*g+f*y*w,this._y=f*y*g-v*p*w,this._z=f*p*w+v*y*g,this._w=f*p*g-v*y*w;break;case"YXZ":this._x=v*p*g+f*y*w,this._y=f*y*g-v*p*w,this._z=f*p*w-v*y*g,this._w=f*p*g+v*y*w;break;case"ZXY":this._x=v*p*g-f*y*w,this._y=f*y*g+v*p*w,this._z=f*p*w+v*y*g,this._w=f*p*g-v*y*w;break;case"ZYX":this._x=v*p*g-f*y*w,this._y=f*y*g+v*p*w,this._z=f*p*w-v*y*g,this._w=f*p*g+v*y*w;break;case"YZX":this._x=v*p*g+f*y*w,this._y=f*y*g+v*p*w,this._z=f*p*w-v*y*g,this._w=f*p*g-v*y*w;break;case"XZY":this._x=v*p*g-f*y*w,this._y=f*y*g-v*p*w,this._z=f*p*w+v*y*g,this._w=f*p*g+v*y*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],c=t[1],u=t[5],d=t[9],f=t[2],p=t[6],g=t[10],v=i+u+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(p-d)*y,this._y=(a-f)*y,this._z=(c-o)*y}else if(i>u&&i>g){const y=2*Math.sqrt(1+i-u-g);this._w=(p-d)/y,this._x=.25*y,this._y=(o+c)/y,this._z=(a+f)/y}else if(u>g){const y=2*Math.sqrt(1+u-i-g);this._w=(a-f)/y,this._x=(o+c)/y,this._y=.25*y,this._z=(d+p)/y}else{const y=2*Math.sqrt(1+g-i-u);this._w=(c-o)/y,this._x=(a+f)/y,this._y=(d+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,c=e._w,u=t._x,d=t._y,f=t._z,p=t._w;return this._x=i*p+c*u+o*f-a*d,this._y=o*p+c*d+a*u-i*f,this._z=a*p+c*f+i*d-o*u,this._w=c*p-i*u-o*d-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+o*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=o,this._z=a,this;const d=1-u*u;if(d<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*i+t*this._x,this._y=y*o+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const f=Math.sqrt(d),p=Math.atan2(f,u),g=Math.sin((1-t)*p)/f,v=Math.sin(t*p)/f;return this._w=c*g+this._w*v,this._x=i*g+this._x*v,this._y=o*g+this._y*v,this._z=a*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(L0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(L0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,c=e.y,u=e.z,d=e.w,f=2*(c*o-u*i),p=2*(u*t-a*o),g=2*(a*i-c*t);return this.x=t+d*f+c*g-u*p,this.y=i+d*p+u*f-a*g,this.z=o+d*g+a*p-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=o*d-a*u,this.y=a*c-i*d,this.z=i*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fh.copy(this).projectOnVector(e),this.sub(Fh)}reflect(e){return this.sub(Fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fh=new V,L0=new za;class ws{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,gi):gi.fromBufferAttribute(a,c),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ql.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ql.copy(i.boundingBox)),ql.applyMatrix4(e.matrixWorld),this.union(ql)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Kl.subVectors(this.max,ma),Ks.subVectors(e.a,ma),Zs.subVectors(e.b,ma),Js.subVectors(e.c,ma),Cr.subVectors(Zs,Ks),Rr.subVectors(Js,Zs),is.subVectors(Ks,Js);let t=[0,-Cr.z,Cr.y,0,-Rr.z,Rr.y,0,-is.z,is.y,Cr.z,0,-Cr.x,Rr.z,0,-Rr.x,is.z,0,-is.x,-Cr.y,Cr.x,0,-Rr.y,Rr.x,0,-is.y,is.x,0];return!kh(t,Ks,Zs,Js,Kl)||(t=[1,0,0,0,1,0,0,0,1],!kh(t,Ks,Zs,Js,Kl))?!1:(Zl.crossVectors(Cr,Rr),t=[Zl.x,Zl.y,Zl.z],kh(t,Ks,Zs,Js,Kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new V,new V,new V,new V,new V,new V,new V,new V],gi=new V,ql=new ws,Ks=new V,Zs=new V,Js=new V,Cr=new V,Rr=new V,is=new V,ma=new V,Kl=new V,Zl=new V,rs=new V;function kh(s,e,t,i,o){for(let a=0,c=s.length-3;a<=c;a+=3){rs.fromArray(s,a);const u=o.x*Math.abs(rs.x)+o.y*Math.abs(rs.y)+o.z*Math.abs(rs.z),d=e.dot(rs),f=t.dot(rs),p=i.dot(rs);if(Math.max(-Math.max(d,f,p),Math.min(d,f,p))>u)return!1}return!0}const s1=new ws,ga=new V,Oh=new V;class Lo{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):s1.setFromPoints(e).getCenter(i);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(ga,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Oh)),this.expandByPoint(ga.copy(e.center).sub(Oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yi=new V,zh=new V,Jl=new V,Pr=new V,Bh=new V,Ql=new V,Hh=new V;class Af{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){zh.copy(e).add(t).multiplyScalar(.5),Jl.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(zh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Jl),u=Pr.dot(this.direction),d=-Pr.dot(Jl),f=Pr.lengthSq(),p=Math.abs(1-c*c);let g,v,y,w;if(p>0)if(g=c*d-u,v=c*u-d,w=a*p,g>=0)if(v>=-w)if(v<=w){const M=1/p;g*=M,v*=M,y=g*(g+c*v+2*u)+v*(c*g+v+2*d)+f}else v=a,g=Math.max(0,-(c*v+u)),y=-g*g+v*(v+2*d)+f;else v=-a,g=Math.max(0,-(c*v+u)),y=-g*g+v*(v+2*d)+f;else v<=-w?(g=Math.max(0,-(-c*a+u)),v=g>0?-a:Math.min(Math.max(-a,-d),a),y=-g*g+v*(v+2*d)+f):v<=w?(g=0,v=Math.min(Math.max(-a,-d),a),y=v*(v+2*d)+f):(g=Math.max(0,-(c*a+u)),v=g>0?a:Math.min(Math.max(-a,-d),a),y=-g*g+v*(v+2*d)+f);else v=c>0?-a:a,g=Math.max(0,-(c*v+u)),y=-g*g+v*(v+2*d)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(zh).addScaledVector(Jl,v),y}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);const i=Yi.dot(this.direction),o=Yi.dot(Yi)-i*i,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,c,u,d;const f=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,v=this.origin;return f>=0?(i=(e.min.x-v.x)*f,o=(e.max.x-v.x)*f):(i=(e.max.x-v.x)*f,o=(e.min.x-v.x)*f),p>=0?(a=(e.min.y-v.y)*p,c=(e.max.y-v.y)*p):(a=(e.max.y-v.y)*p,c=(e.min.y-v.y)*p),i>c||a>o||((a>i||isNaN(i))&&(i=a),(c<o||isNaN(o))&&(o=c),g>=0?(u=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(u=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),i>d||u>o)||((u>i||i!==i)&&(i=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,i,o,a){Bh.subVectors(t,e),Ql.subVectors(i,e),Hh.crossVectors(Bh,Ql);let c=this.direction.dot(Hh),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Pr.subVectors(this.origin,e);const d=u*this.direction.dot(Ql.crossVectors(Pr,Ql));if(d<0)return null;const f=u*this.direction.dot(Bh.cross(Pr));if(f<0||d+f>c)return null;const p=-u*Pr.dot(Hh);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,t,i,o,a,c,u,d,f,p,g,v,y,w,M,S){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,c,u,d,f,p,g,v,y,w,M,S)}set(e,t,i,o,a,c,u,d,f,p,g,v,y,w,M,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=o,x[1]=a,x[5]=c,x[9]=u,x[13]=d,x[2]=f,x[6]=p,x[10]=g,x[14]=v,x[3]=y,x[7]=w,x[11]=M,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/Qs.setFromMatrixColumn(e,0).length(),a=1/Qs.setFromMatrixColumn(e,1).length(),c=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(o),f=Math.sin(o),p=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const v=c*p,y=c*g,w=u*p,M=u*g;t[0]=d*p,t[4]=-d*g,t[8]=f,t[1]=y+w*f,t[5]=v-M*f,t[9]=-u*d,t[2]=M-v*f,t[6]=w+y*f,t[10]=c*d}else if(e.order==="YXZ"){const v=d*p,y=d*g,w=f*p,M=f*g;t[0]=v+M*u,t[4]=w*u-y,t[8]=c*f,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=y*u-w,t[6]=M+v*u,t[10]=c*d}else if(e.order==="ZXY"){const v=d*p,y=d*g,w=f*p,M=f*g;t[0]=v-M*u,t[4]=-c*g,t[8]=w+y*u,t[1]=y+w*u,t[5]=c*p,t[9]=M-v*u,t[2]=-c*f,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const v=c*p,y=c*g,w=u*p,M=u*g;t[0]=d*p,t[4]=w*f-y,t[8]=v*f+M,t[1]=d*g,t[5]=M*f+v,t[9]=y*f-w,t[2]=-f,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const v=c*d,y=c*f,w=u*d,M=u*f;t[0]=d*p,t[4]=M-v*g,t[8]=w*g+y,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-f*p,t[6]=y*g+w,t[10]=v-M*g}else if(e.order==="XZY"){const v=c*d,y=c*f,w=u*d,M=u*f;t[0]=d*p,t[4]=-g,t[8]=f*p,t[1]=v*g+M,t[5]=c*p,t[9]=y*g-w,t[2]=w*g-y,t[6]=u*p,t[10]=M*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(o1,e,a1)}lookAt(e,t,i){const o=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Lr.crossVectors(i,Kn),Lr.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Lr.crossVectors(i,Kn)),Lr.normalize(),ec.crossVectors(Kn,Lr),o[0]=Lr.x,o[4]=ec.x,o[8]=Kn.x,o[1]=Lr.y,o[5]=ec.y,o[9]=Kn.y,o[2]=Lr.z,o[6]=ec.z,o[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,c=i[0],u=i[4],d=i[8],f=i[12],p=i[1],g=i[5],v=i[9],y=i[13],w=i[2],M=i[6],S=i[10],x=i[14],A=i[3],T=i[7],E=i[11],z=i[15],D=o[0],F=o[4],k=o[8],P=o[12],b=o[1],N=o[5],K=o[9],$=o[13],te=o[2],J=o[6],Q=o[10],ce=o[14],G=o[3],he=o[7],oe=o[11],H=o[15];return a[0]=c*D+u*b+d*te+f*G,a[4]=c*F+u*N+d*J+f*he,a[8]=c*k+u*K+d*Q+f*oe,a[12]=c*P+u*$+d*ce+f*H,a[1]=p*D+g*b+v*te+y*G,a[5]=p*F+g*N+v*J+y*he,a[9]=p*k+g*K+v*Q+y*oe,a[13]=p*P+g*$+v*ce+y*H,a[2]=w*D+M*b+S*te+x*G,a[6]=w*F+M*N+S*J+x*he,a[10]=w*k+M*K+S*Q+x*oe,a[14]=w*P+M*$+S*ce+x*H,a[3]=A*D+T*b+E*te+z*G,a[7]=A*F+T*N+E*J+z*he,a[11]=A*k+T*K+E*Q+z*oe,a[15]=A*P+T*$+E*ce+z*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],c=e[1],u=e[5],d=e[9],f=e[13],p=e[2],g=e[6],v=e[10],y=e[14],w=e[3],M=e[7],S=e[11],x=e[15];return w*(+a*d*g-o*f*g-a*u*v+i*f*v+o*u*y-i*d*y)+M*(+t*d*y-t*f*v+a*c*v-o*c*y+o*f*p-a*d*p)+S*(+t*f*g-t*u*y-a*c*g+i*c*y+a*u*p-i*f*p)+x*(-o*u*p-t*d*g+t*u*v+o*c*g-i*c*v+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],f=e[7],p=e[8],g=e[9],v=e[10],y=e[11],w=e[12],M=e[13],S=e[14],x=e[15],A=g*S*f-M*v*f+M*d*y-u*S*y-g*d*x+u*v*x,T=w*v*f-p*S*f-w*d*y+c*S*y+p*d*x-c*v*x,E=p*M*f-w*g*f+w*u*y-c*M*y-p*u*x+c*g*x,z=w*g*d-p*M*d-w*u*v+c*M*v+p*u*S-c*g*S,D=t*A+i*T+o*E+a*z;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/D;return e[0]=A*F,e[1]=(M*v*a-g*S*a-M*o*y+i*S*y+g*o*x-i*v*x)*F,e[2]=(u*S*a-M*d*a+M*o*f-i*S*f-u*o*x+i*d*x)*F,e[3]=(g*d*a-u*v*a-g*o*f+i*v*f+u*o*y-i*d*y)*F,e[4]=T*F,e[5]=(p*S*a-w*v*a+w*o*y-t*S*y-p*o*x+t*v*x)*F,e[6]=(w*d*a-c*S*a-w*o*f+t*S*f+c*o*x-t*d*x)*F,e[7]=(c*v*a-p*d*a+p*o*f-t*v*f-c*o*y+t*d*y)*F,e[8]=E*F,e[9]=(w*g*a-p*M*a-w*i*y+t*M*y+p*i*x-t*g*x)*F,e[10]=(c*M*a-w*u*a+w*i*f-t*M*f-c*i*x+t*u*x)*F,e[11]=(p*u*a-c*g*a-p*i*f+t*g*f+c*i*y-t*u*y)*F,e[12]=z*F,e[13]=(p*M*o-w*g*o+w*i*v-t*M*v-p*i*S+t*g*S)*F,e[14]=(w*u*o-c*M*o-w*i*d+t*M*d+c*i*S-t*u*S)*F,e[15]=(c*g*o-p*u*o+p*i*d-t*g*d-c*i*v+t*u*v)*F,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,c=e.x,u=e.y,d=e.z,f=a*c,p=a*u;return this.set(f*c+i,f*u-o*d,f*d+o*u,0,f*u+o*d,p*u+i,p*d-o*c,0,f*d-o*u,p*d+o*c,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,c){return this.set(1,i,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,f=a+a,p=c+c,g=u+u,v=a*f,y=a*p,w=a*g,M=c*p,S=c*g,x=u*g,A=d*f,T=d*p,E=d*g,z=i.x,D=i.y,F=i.z;return o[0]=(1-(M+x))*z,o[1]=(y+E)*z,o[2]=(w-T)*z,o[3]=0,o[4]=(y-E)*D,o[5]=(1-(v+x))*D,o[6]=(S+A)*D,o[7]=0,o[8]=(w+T)*F,o[9]=(S-A)*F,o[10]=(1-(v+M))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=Qs.set(o[0],o[1],o[2]).length();const c=Qs.set(o[4],o[5],o[6]).length(),u=Qs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],vi.copy(this);const f=1/a,p=1/c,g=1/u;return vi.elements[0]*=f,vi.elements[1]*=f,vi.elements[2]*=f,vi.elements[4]*=p,vi.elements[5]*=p,vi.elements[6]*=p,vi.elements[8]*=g,vi.elements[9]*=g,vi.elements[10]*=g,t.setFromRotationMatrix(vi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,o,a,c,u=er){const d=this.elements,f=2*a/(t-e),p=2*a/(i-o),g=(t+e)/(t-e),v=(i+o)/(i-o);let y,w;if(u===er)y=-(c+a)/(c-a),w=-2*c*a/(c-a);else if(u===Ic)y=-c/(c-a),w=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=f,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=p,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,o,a,c,u=er){const d=this.elements,f=1/(t-e),p=1/(i-o),g=1/(c-a),v=(t+e)*f,y=(i+o)*p;let w,M;if(u===er)w=(c+a)*g,M=-2*g;else if(u===Ic)w=a*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*p,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=M,d[14]=-w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qs=new V,vi=new It,o1=new V(0,0,0),a1=new V(1,1,1),Lr=new V,ec=new V,Kn=new V,N0=new It,I0=new za;class Di{constructor(e=0,t=0,i=0,o=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],d=o[1],f=o[5],p=o[9],g=o[2],v=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return N0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return I0.setFromEuler(this),this.setFromQuaternion(I0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class Cf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let l1=0;const D0=new V,eo=new za,qi=new It,tc=new V,va=new V,c1=new V,u1=new za,U0=new V(1,0,0),F0=new V(0,1,0),k0=new V(0,0,1),O0={type:"added"},h1={type:"removed"},to={type:"childadded",child:null},Vh={type:"childremoved",child:null};class an extends Ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l1++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new V,t=new Di,i=new za,o=new V(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new It},normalMatrix:{value:new xt}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(U0,e)}rotateY(e){return this.rotateOnAxis(F0,e)}rotateZ(e){return this.rotateOnAxis(k0,e)}translateOnAxis(e,t){return D0.copy(e).applyQuaternion(this.quaternion),this.position.add(D0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(U0,e)}translateY(e){return this.translateOnAxis(F0,e)}translateZ(e){return this.translateOnAxis(k0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?tc.copy(e):tc.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(va,tc,this.up):qi.lookAt(tc,va,this.up),this.quaternion.setFromRotationMatrix(qi),o&&(qi.extractRotation(o.matrixWorld),eo.setFromRotationMatrix(qi),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(O0),to.child=e,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h1),Vh.child=e,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(O0),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,c1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,u1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,p=d.length;f<p;f++){const g=d[f];a(e.shapes,g)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(a(e.materials,this.material[d]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),f=c(e.textures),p=c(e.images),g=c(e.shapes),v=c(e.skeletons),y=c(e.animations),w=c(e.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),v.length>0&&(i.skeletons=v),y.length>0&&(i.animations=y),w.length>0&&(i.nodes=w)}return i.object=o,i;function c(u){const d=[];for(const f in u){const p=u[f];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}an.DEFAULT_UP=new V(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new V,Ki=new V,Gh=new V,Zi=new V,no=new V,io=new V,z0=new V,Wh=new V,jh=new V,Xh=new V,$h=new Ot,Yh=new Ot,qh=new Ot;class yi{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),xi.subVectors(e,t),o.cross(xi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){xi.subVectors(o,t),Ki.subVectors(i,t),Gh.subVectors(e,t);const c=xi.dot(xi),u=xi.dot(Ki),d=xi.dot(Gh),f=Ki.dot(Ki),p=Ki.dot(Gh),g=c*f-u*u;if(g===0)return a.set(0,0,0),null;const v=1/g,y=(f*d-u*p)*v,w=(c*p-u*d)*v;return a.set(1-y-w,w,y)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,i,o,a,c,u,d){return this.getBarycoord(e,t,i,o,Zi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Zi.x),d.addScaledVector(c,Zi.y),d.addScaledVector(u,Zi.z),d)}static getInterpolatedAttribute(e,t,i,o,a,c){return $h.setScalar(0),Yh.setScalar(0),qh.setScalar(0),$h.fromBufferAttribute(e,t),Yh.fromBufferAttribute(e,i),qh.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector($h,a.x),c.addScaledVector(Yh,a.y),c.addScaledVector(qh,a.z),c}static isFrontFacing(e,t,i,o){return xi.subVectors(i,t),Ki.subVectors(e,t),xi.cross(Ki).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),xi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return yi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let c,u;no.subVectors(o,i),io.subVectors(a,i),Wh.subVectors(e,i);const d=no.dot(Wh),f=io.dot(Wh);if(d<=0&&f<=0)return t.copy(i);jh.subVectors(e,o);const p=no.dot(jh),g=io.dot(jh);if(p>=0&&g<=p)return t.copy(o);const v=d*g-p*f;if(v<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(i).addScaledVector(no,c);Xh.subVectors(e,a);const y=no.dot(Xh),w=io.dot(Xh);if(w>=0&&y<=w)return t.copy(a);const M=y*f-d*w;if(M<=0&&f>=0&&w<=0)return u=f/(f-w),t.copy(i).addScaledVector(io,u);const S=p*w-y*g;if(S<=0&&g-p>=0&&y-w>=0)return z0.subVectors(a,o),u=(g-p)/(g-p+(y-w)),t.copy(o).addScaledVector(z0,u);const x=1/(S+M+v);return c=M*x,u=v*x,t.copy(i).addScaledVector(no,c).addScaledVector(io,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},nc={h:0,s:0,l:0};function Kh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Nt.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=Nt.workingColorSpace){if(e=YS(e,1),t=Et(t,0,1),i=Et(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Kh(c,a,e+1/3),this.g=Kh(c,a,e),this.b=Kh(c,a,e-1/3)}return Nt.toWorkingColorSpace(this,o),this}setStyle(e,t=ai){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const i=pv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Nt.fromWorkingColorSpace(An.copy(this),e),Math.round(Et(An.r*255,0,255))*65536+Math.round(Et(An.g*255,0,255))*256+Math.round(Et(An.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(An.copy(this),t);const i=An.r,o=An.g,a=An.b,c=Math.max(i,o,a),u=Math.min(i,o,a);let d,f;const p=(u+c)/2;if(u===c)d=0,f=0;else{const g=c-u;switch(f=p<=.5?g/(c+u):g/(2-c-u),c){case i:d=(o-a)/g+(o<a?6:0);break;case o:d=(a-i)/g+2;break;case a:d=(i-o)/g+4;break}d/=6}return e.h=d,e.s=f,e.l=p,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=ai){Nt.fromWorkingColorSpace(An.copy(this),e);const t=An.r,i=An.g,o=An.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+t,Nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nr),e.getHSL(nc);const i=Ih(Nr.h,nc.h,t),o=Ih(Nr.s,nc.s,t),a=Ih(Nr.l,nc.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new dt;dt.NAMES=pv;let d1=0;class No extends Ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d1++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=po,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vd,this.blendDst=xd,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==po&&(i.blending=this.blending),this.side!==Or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vd&&(i.blendSrc=this.blendSrc),this.blendDst!==xd&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class on extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new V,ic=new Ie;class Mi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=b0,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),i=Vn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),i=Vn(i,this.array),o=Vn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),i=Vn(i,this.array),o=Vn(o,this.array),a=Vn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==b0&&(e.usage=this.usage),e}}class mv extends Mi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gv extends Mi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zt extends Mi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let f1=0;const oi=new It,Zh=new an,ro=new V,Zn=new ws,xa=new ws,gn=new V;class en extends Ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hv(e)?gv:mv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new xt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,i){return oi.makeTranslation(e,t,i),this.applyMatrix4(oi),this}scale(e,t,i){return oi.makeScale(e,t,i),this.applyMatrix4(oi),this}lookAt(e){return Zh.lookAt(e),Zh.updateMatrix(),this.applyMatrix4(Zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new zt(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Zn.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];xa.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(Zn.min,xa.min),Zn.expandByPoint(gn),gn.addVectors(Zn.max,xa.max),Zn.expandByPoint(gn)):(Zn.expandByPoint(xa.min),Zn.expandByPoint(xa.max))}Zn.getCenter(i);let o=0;for(let a=0,c=e.count;a<c;a++)gn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(gn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)gn.fromBufferAttribute(u,f),d&&(ro.fromBufferAttribute(e,f),gn.add(ro)),o=Math.max(o,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let k=0;k<i.count;k++)u[k]=new V,d[k]=new V;const f=new V,p=new V,g=new V,v=new Ie,y=new Ie,w=new Ie,M=new V,S=new V;function x(k,P,b){f.fromBufferAttribute(i,k),p.fromBufferAttribute(i,P),g.fromBufferAttribute(i,b),v.fromBufferAttribute(a,k),y.fromBufferAttribute(a,P),w.fromBufferAttribute(a,b),p.sub(f),g.sub(f),y.sub(v),w.sub(v);const N=1/(y.x*w.y-w.x*y.y);isFinite(N)&&(M.copy(p).multiplyScalar(w.y).addScaledVector(g,-y.y).multiplyScalar(N),S.copy(g).multiplyScalar(y.x).addScaledVector(p,-w.x).multiplyScalar(N),u[k].add(M),u[P].add(M),u[b].add(M),d[k].add(S),d[P].add(S),d[b].add(S))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let k=0,P=A.length;k<P;++k){const b=A[k],N=b.start,K=b.count;for(let $=N,te=N+K;$<te;$+=3)x(e.getX($+0),e.getX($+1),e.getX($+2))}const T=new V,E=new V,z=new V,D=new V;function F(k){z.fromBufferAttribute(o,k),D.copy(z);const P=u[k];T.copy(P),T.sub(z.multiplyScalar(z.dot(P))).normalize(),E.crossVectors(D,P);const N=E.dot(d[k])<0?-1:1;c.setXYZW(k,T.x,T.y,T.z,N)}for(let k=0,P=A.length;k<P;++k){const b=A[k],N=b.start,K=b.count;for(let $=N,te=N+K;$<te;$+=3)F(e.getX($+0)),F(e.getX($+1)),F(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,y=i.count;v<y;v++)i.setXYZ(v,0,0,0);const o=new V,a=new V,c=new V,u=new V,d=new V,f=new V,p=new V,g=new V;if(e)for(let v=0,y=e.count;v<y;v+=3){const w=e.getX(v+0),M=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,w),a.fromBufferAttribute(t,M),c.fromBufferAttribute(t,S),p.subVectors(c,a),g.subVectors(o,a),p.cross(g),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),u.add(p),d.add(p),f.add(p),i.setXYZ(w,u.x,u.y,u.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(S,f.x,f.y,f.z)}else for(let v=0,y=t.count;v<y;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),p.subVectors(c,a),g.subVectors(o,a),p.cross(g),i.setXYZ(v+0,p.x,p.y,p.z),i.setXYZ(v+1,p.x,p.y,p.z),i.setXYZ(v+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(u,d){const f=u.array,p=u.itemSize,g=u.normalized,v=new f.constructor(d.length*p);let y=0,w=0;for(let M=0,S=d.length;M<S;M++){u.isInterleavedBufferAttribute?y=d[M]*u.data.stride+u.offset:y=d[M]*p;for(let x=0;x<p;x++)v[w++]=f[y++]}return new Mi(v,p,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,o=this.attributes;for(const u in o){const d=o[u],f=e(d,i);t.setAttribute(u,f)}const a=this.morphAttributes;for(const u in a){const d=[],f=a[u];for(let p=0,g=f.length;p<g;p++){const v=f[p],y=e(v,i);d.push(y)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const f=c[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const f=i[d];e.data.attributes[d]=f.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],p=[];for(let g=0,v=f.length;g<v;g++){const y=f[g];p.push(y.toJSON(e.data))}p.length>0&&(o[d]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const f in o){const p=o[f];this.setAttribute(f,p.clone(t))}const a=e.morphAttributes;for(const f in a){const p=[],g=a[f];for(let v=0,y=g.length;v<y;v++)p.push(g[v].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,p=c.length;f<p;f++){const g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const B0=new It,ss=new Af,rc=new Lo,H0=new V,sc=new V,oc=new V,ac=new V,Jh=new V,lc=new V,V0=new V,cc=new V;class wt extends an{constructor(e=new en,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){lc.set(0,0,0);for(let d=0,f=a.length;d<f;d++){const p=u[d],g=a[d];p!==0&&(Jh.fromBufferAttribute(g,e),c?lc.addScaledVector(Jh,p):lc.addScaledVector(Jh.sub(t),p))}t.add(lc)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(a),ss.copy(e.ray).recast(e.near),!(rc.containsPoint(ss.origin)===!1&&(ss.intersectSphere(rc,H0)===null||ss.origin.distanceToSquared(H0)>(e.far-e.near)**2))&&(B0.copy(a).invert(),ss.copy(e.ray).applyMatrix4(B0),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,i){let o;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,f=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,v=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let w=0,M=v.length;w<M;w++){const S=v[w],x=c[S.materialIndex],A=Math.max(S.start,y.start),T=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let E=A,z=T;E<z;E+=3){const D=u.getX(E),F=u.getX(E+1),k=u.getX(E+2);o=uc(this,x,e,i,f,p,g,D,F,k),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),M=Math.min(u.count,y.start+y.count);for(let S=w,x=M;S<x;S+=3){const A=u.getX(S),T=u.getX(S+1),E=u.getX(S+2);o=uc(this,c,e,i,f,p,g,A,T,E),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let w=0,M=v.length;w<M;w++){const S=v[w],x=c[S.materialIndex],A=Math.max(S.start,y.start),T=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let E=A,z=T;E<z;E+=3){const D=E,F=E+1,k=E+2;o=uc(this,x,e,i,f,p,g,D,F,k),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const w=Math.max(0,y.start),M=Math.min(d.count,y.start+y.count);for(let S=w,x=M;S<x;S+=3){const A=S,T=S+1,E=S+2;o=uc(this,c,e,i,f,p,g,A,T,E),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function p1(s,e,t,i,o,a,c,u){let d;if(e.side===jn?d=i.intersectTriangle(c,a,o,!0,u):d=i.intersectTriangle(o,a,c,e.side===Or,u),d===null)return null;cc.copy(u),cc.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(cc);return f<t.near||f>t.far?null:{distance:f,point:cc.clone(),object:s}}function uc(s,e,t,i,o,a,c,u,d,f){s.getVertexPosition(u,sc),s.getVertexPosition(d,oc),s.getVertexPosition(f,ac);const p=p1(s,e,t,i,sc,oc,ac,V0);if(p){const g=new V;yi.getBarycoord(V0,sc,oc,ac,g),o&&(p.uv=yi.getInterpolatedAttribute(o,u,d,f,g,new Ie)),a&&(p.uv1=yi.getInterpolatedAttribute(a,u,d,f,g,new Ie)),c&&(p.normal=yi.getInterpolatedAttribute(c,u,d,f,g,new V),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const v={a:u,b:d,c:f,normal:new V,materialIndex:0};yi.getNormal(sc,oc,ac,v.normal),p.face=v,p.barycoord=g}return p}class or extends en{constructor(e=1,t=1,i=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],f=[],p=[],g=[];let v=0,y=0;w("z","y","x",-1,-1,i,t,e,c,a,0),w("z","y","x",1,-1,i,t,-e,c,a,1),w("x","z","y",1,1,e,i,t,o,c,2),w("x","z","y",1,-1,e,i,-t,o,c,3),w("x","y","z",1,-1,e,t,i,o,a,4),w("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(d),this.setAttribute("position",new zt(f,3)),this.setAttribute("normal",new zt(p,3)),this.setAttribute("uv",new zt(g,2));function w(M,S,x,A,T,E,z,D,F,k,P){const b=E/F,N=z/k,K=E/2,$=z/2,te=D/2,J=F+1,Q=k+1;let ce=0,G=0;const he=new V;for(let oe=0;oe<Q;oe++){const H=oe*N-$;for(let se=0;se<J;se++){const Ue=se*b-K;he[M]=Ue*A,he[S]=H*T,he[x]=te,f.push(he.x,he.y,he.z),he[M]=0,he[S]=0,he[x]=D>0?1:-1,p.push(he.x,he.y,he.z),g.push(se/F),g.push(1-oe/k),ce+=1}}for(let oe=0;oe<k;oe++)for(let H=0;H<F;H++){const se=v+H+J*oe,Ue=v+H+J*(oe+1),ie=v+(H+1)+J*(oe+1),fe=v+(H+1)+J*oe;d.push(se,Ue,fe),d.push(Ue,ie,fe),G+=6}u.addGroup(y,G,P),y+=G,v+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const o=s[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function In(s){const e={};for(let t=0;t<s.length;t++){const i=To(s[t]);for(const o in i)e[o]=i[o]}return e}function m1(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function vv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const g1={clone:To,merge:In};var v1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v1,this.fragmentShader=x1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=m1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xv extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=er}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ir=new V,G0=new Ie,W0=new Ie;class Gn extends xv{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Dc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dc*2*Math.atan(Math.tan(Nh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,G0,W0),t.subVectors(W0,G0)}setViewOffset(e,t,i,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nh*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,f=c.fullHeight;a+=c.offsetX*o/d,t-=c.offsetY*i/f,o*=c.width/d,i*=c.height/f}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const so=-90,oo=1;class y1 extends an{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Gn(so,oo,e,t);o.layers=this.layers,this.add(o);const a=new Gn(so,oo,e,t);a.layers=this.layers,this.add(a);const c=new Gn(so,oo,e,t);c.layers=this.layers,this.add(c);const u=new Gn(so,oo,e,t);u.layers=this.layers,this.add(u);const d=new Gn(so,oo,e,t);d.layers=this.layers,this.add(d);const f=new Gn(so,oo,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,c,u,d]=t;for(const f of t)this.remove(f);if(e===er)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,f,p]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,c),e.setRenderTarget(i,2,o),e.render(t,u),e.setRenderTarget(i,3,o),e.render(t,d),e.setRenderTarget(i,4,o),e.render(t,f),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,o),e.render(t,p),e.setRenderTarget(g,v,y),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class yv extends Dn{constructor(e,t,i,o,a,c,u,d,f,p){e=e!==void 0?e:[],t=t!==void 0?t:_o,super(e,t,i,o,a,c,u,d,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _1 extends ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new yv(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Li}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new or(5,5,5),a=new zr({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jn,blending:Ur});a.uniforms.tEquirect.value=t;const c=new wt(o,a),u=t.minFilter;return t.minFilter===gs&&(t.minFilter=Li),new y1(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,o);e.setRenderTarget(a)}}class S1 extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class w1 extends Dn{constructor(e=null,t=1,i=1,o,a,c,u,d,f=Qn,p=Qn,g,v){super(null,c,u,d,f,p,o,a,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class j0 extends Mi{constructor(e,t,i,o=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ao=new It,X0=new It,hc=[],$0=new ws,M1=new It,ya=new wt,_a=new Lo;class Y0 extends wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new j0(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let o=0;o<i;o++)this.setMatrixAt(o,M1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ws),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ao),$0.copy(e.boundingBox).applyMatrix4(ao),this.boundingBox.union($0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Lo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ao),_a.copy(e.boundingSphere).applyMatrix4(ao),this.boundingSphere.union(_a)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,o=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let u=0;u<i.length;u++)i[u]=o[c+u]}raycast(e,t){const i=this.matrixWorld,o=this.count;if(ya.geometry=this.geometry,ya.material=this.material,ya.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_a.copy(this.boundingSphere),_a.applyMatrix4(i),e.ray.intersectsSphere(_a)!==!1))for(let a=0;a<o;a++){this.getMatrixAt(a,ao),X0.multiplyMatrices(i,ao),ya.matrixWorld=X0,ya.raycast(e,hc);for(let c=0,u=hc.length;c<u;c++){const d=hc[c];d.instanceId=a,d.object=this,t.push(d)}hc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new j0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,o=i.length+1;this.morphTexture===null&&(this.morphTexture=new w1(new Float32Array(o*this.count),o,this.count,Mf,Ni));const a=this.morphTexture.source.data.data;let c=0;for(let f=0;f<i.length;f++)c+=i[f];const u=this.geometry.morphTargetsRelative?1:1-c,d=o*e;a[d]=u,a.set(i,d+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Qh=new V,E1=new V,T1=new xt;class cs{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Qh.subVectors(i,t).cross(E1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Qh),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||T1.getNormalMatrix(e),o=this.coplanarPoint(Qh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new Lo,dc=new V;class Rf{constructor(e=new cs,t=new cs,i=new cs,o=new cs,a=new cs,c=new cs){this.planes=[e,t,i,o,a,c]}set(e,t,i,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=er){const i=this.planes,o=e.elements,a=o[0],c=o[1],u=o[2],d=o[3],f=o[4],p=o[5],g=o[6],v=o[7],y=o[8],w=o[9],M=o[10],S=o[11],x=o[12],A=o[13],T=o[14],E=o[15];if(i[0].setComponents(d-a,v-f,S-y,E-x).normalize(),i[1].setComponents(d+a,v+f,S+y,E+x).normalize(),i[2].setComponents(d+c,v+p,S+w,E+A).normalize(),i[3].setComponents(d-c,v-p,S-w,E-A).normalize(),i[4].setComponents(d-u,v-g,S-M,E-T).normalize(),t===er)i[5].setComponents(d+u,v+g,S+M,E+T).normalize();else if(t===Ic)i[5].setComponents(u,g,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){return os.center.set(0,0,0),os.radius=.7071067811865476,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(dc.x=o.normal.x>0?e.max.x:e.min.x,dc.y=o.normal.y>0?e.max.y:e.min.y,dc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tr extends No{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fc=new V,kc=new V,q0=new It,Sa=new Af,fc=new Lo,ed=new V,K0=new V;class nr extends an{constructor(e=new en,t=new tr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let o=1,a=t.count;o<a;o++)Fc.fromBufferAttribute(t,o-1),kc.fromBufferAttribute(t,o),i[o]=i[o-1],i[o]+=Fc.distanceTo(kc);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(o),fc.radius+=a,e.ray.intersectsSphere(fc)===!1)return;q0.copy(o).invert(),Sa.copy(e.ray).applyMatrix4(q0);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=this.isLineSegments?2:1,p=i.index,v=i.attributes.position;if(p!==null){const y=Math.max(0,c.start),w=Math.min(p.count,c.start+c.count);for(let M=y,S=w-1;M<S;M+=f){const x=p.getX(M),A=p.getX(M+1),T=pc(this,e,Sa,d,x,A);T&&t.push(T)}if(this.isLineLoop){const M=p.getX(w-1),S=p.getX(y),x=pc(this,e,Sa,d,M,S);x&&t.push(x)}}else{const y=Math.max(0,c.start),w=Math.min(v.count,c.start+c.count);for(let M=y,S=w-1;M<S;M+=f){const x=pc(this,e,Sa,d,M,M+1);x&&t.push(x)}if(this.isLineLoop){const M=pc(this,e,Sa,d,w-1,y);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function pc(s,e,t,i,o,a){const c=s.geometry.attributes.position;if(Fc.fromBufferAttribute(c,o),kc.fromBufferAttribute(c,a),t.distanceSqToSegment(Fc,kc,ed,K0)>i)return;ed.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(ed);if(!(d<e.near||d>e.far))return{distance:d,point:K0.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Z0=new V,J0=new V;class td extends nr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let o=0,a=t.count;o<a;o+=2)Z0.fromBufferAttribute(t,o),J0.fromBufferAttribute(t,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+Z0.distanceTo(J0);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ma extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}class _v extends Dn{constructor(e,t,i,o,a,c,u,d,f,p=mo){if(p!==mo&&p!==Mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===mo&&(i=xs),i===void 0&&p===Mo&&(i=wo),super(null,o,a,c,u,d,p,i,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Qn,this.minFilter=d!==void 0?d:Qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,o=this.getPoint(0),a=0;t.push(0);for(let c=1;c<=e;c++)i=this.getPoint(c/e),a+=i.distanceTo(o),t.push(a),o=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let o=0;const a=i.length;let c;t?c=t:c=e*i[a-1];let u=0,d=a-1,f;for(;u<=d;)if(o=Math.floor(u+(d-u)/2),f=i[o]-c,f<0)u=o+1;else if(f>0)d=o-1;else{d=o;break}if(o=d,i[o]===c)return o/(a-1);const p=i[o],v=i[o+1]-p,y=(c-p)/v;return(o+y)/(a-1)}getTangent(e,t){let o=e-1e-4,a=e+1e-4;o<0&&(o=0),a>1&&(a=1);const c=this.getPoint(o),u=this.getPoint(a),d=t||(c.isVector2?new Ie:new V);return d.copy(u).sub(c).normalize(),d}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new V,o=[],a=[],c=[],u=new V,d=new It;for(let y=0;y<=e;y++){const w=y/e;o[y]=this.getTangentAt(w,new V)}a[0]=new V,c[0]=new V;let f=Number.MAX_VALUE;const p=Math.abs(o[0].x),g=Math.abs(o[0].y),v=Math.abs(o[0].z);p<=f&&(f=p,i.set(1,0,0)),g<=f&&(f=g,i.set(0,1,0)),v<=f&&i.set(0,0,1),u.crossVectors(o[0],i).normalize(),a[0].crossVectors(o[0],u),c[0].crossVectors(o[0],a[0]);for(let y=1;y<=e;y++){if(a[y]=a[y-1].clone(),c[y]=c[y-1].clone(),u.crossVectors(o[y-1],o[y]),u.length()>Number.EPSILON){u.normalize();const w=Math.acos(Et(o[y-1].dot(o[y]),-1,1));a[y].applyMatrix4(d.makeRotationAxis(u,w))}c[y].crossVectors(o[y],a[y])}if(t===!0){let y=Math.acos(Et(a[0].dot(a[e]),-1,1));y/=e,o[0].dot(u.crossVectors(a[0],a[e]))>0&&(y=-y);for(let w=1;w<=e;w++)a[w].applyMatrix4(d.makeRotationAxis(o[w],y*w)),c[w].crossVectors(o[w],a[w])}return{tangents:o,normals:a,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Pf extends Fi{constructor(e=0,t=0,i=1,o=1,a=0,c=Math.PI*2,u=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=o,this.aStartAngle=a,this.aEndAngle=c,this.aClockwise=u,this.aRotation=d}getPoint(e,t=new Ie){const i=t,o=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const c=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=o;for(;a>o;)a-=o;a<Number.EPSILON&&(c?a=0:a=o),this.aClockwise===!0&&!c&&(a===o?a=-o:a=a-o);const u=this.aStartAngle+e*a;let d=this.aX+this.xRadius*Math.cos(u),f=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const p=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=d-this.aX,y=f-this.aY;d=v*p-y*g+this.aX,f=v*g+y*p+this.aY}return i.set(d,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class b1 extends Pf{constructor(e,t,i,o,a,c){super(e,t,i,i,o,a,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Lf(){let s=0,e=0,t=0,i=0;function o(a,c,u,d){s=a,e=u,t=-3*a+3*c-2*u-d,i=2*a-2*c+u+d}return{initCatmullRom:function(a,c,u,d,f){o(c,u,f*(u-a),f*(d-c))},initNonuniformCatmullRom:function(a,c,u,d,f,p,g){let v=(c-a)/f-(u-a)/(f+p)+(u-c)/p,y=(u-c)/p-(d-c)/(p+g)+(d-u)/g;v*=p,y*=p,o(c,u,v,y)},calc:function(a){const c=a*a,u=c*a;return s+e*a+t*c+i*u}}}const mc=new V,nd=new Lf,id=new Lf,rd=new Lf;class A1 extends Fi{constructor(e=[],t=!1,i="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=o}getPoint(e,t=new V){const i=t,o=this.points,a=o.length,c=(a-(this.closed?0:1))*e;let u=Math.floor(c),d=c-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/a)+1)*a:d===0&&u===a-1&&(u=a-2,d=1);let f,p;this.closed||u>0?f=o[(u-1)%a]:(mc.subVectors(o[0],o[1]).add(o[0]),f=mc);const g=o[u%a],v=o[(u+1)%a];if(this.closed||u+2<a?p=o[(u+2)%a]:(mc.subVectors(o[a-1],o[a-2]).add(o[a-1]),p=mc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let w=Math.pow(f.distanceToSquared(g),y),M=Math.pow(g.distanceToSquared(v),y),S=Math.pow(v.distanceToSquared(p),y);M<1e-4&&(M=1),w<1e-4&&(w=M),S<1e-4&&(S=M),nd.initNonuniformCatmullRom(f.x,g.x,v.x,p.x,w,M,S),id.initNonuniformCatmullRom(f.y,g.y,v.y,p.y,w,M,S),rd.initNonuniformCatmullRom(f.z,g.z,v.z,p.z,w,M,S)}else this.curveType==="catmullrom"&&(nd.initCatmullRom(f.x,g.x,v.x,p.x,this.tension),id.initCatmullRom(f.y,g.y,v.y,p.y,this.tension),rd.initCatmullRom(f.z,g.z,v.z,p.z,this.tension));return i.set(nd.calc(d),id.calc(d),rd.calc(d)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(new V().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Q0(s,e,t,i,o){const a=(i-e)*.5,c=(o-t)*.5,u=s*s,d=s*u;return(2*t-2*i+a+c)*d+(-3*t+3*i-2*a-c)*u+a*s+t}function C1(s,e){const t=1-s;return t*t*e}function R1(s,e){return 2*(1-s)*s*e}function P1(s,e){return s*s*e}function Ta(s,e,t,i){return C1(s,e)+R1(s,t)+P1(s,i)}function L1(s,e){const t=1-s;return t*t*t*e}function N1(s,e){const t=1-s;return 3*t*t*s*e}function I1(s,e){return 3*(1-s)*s*s*e}function D1(s,e){return s*s*s*e}function ba(s,e,t,i,o){return L1(s,e)+N1(s,t)+I1(s,i)+D1(s,o)}class Sv extends Fi{constructor(e=new Ie,t=new Ie,i=new Ie,o=new Ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=o}getPoint(e,t=new Ie){const i=t,o=this.v0,a=this.v1,c=this.v2,u=this.v3;return i.set(ba(e,o.x,a.x,c.x,u.x),ba(e,o.y,a.y,c.y,u.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class U1 extends Fi{constructor(e=new V,t=new V,i=new V,o=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=o}getPoint(e,t=new V){const i=t,o=this.v0,a=this.v1,c=this.v2,u=this.v3;return i.set(ba(e,o.x,a.x,c.x,u.x),ba(e,o.y,a.y,c.y,u.y),ba(e,o.z,a.z,c.z,u.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wv extends Fi{constructor(e=new Ie,t=new Ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class F1 extends Fi{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mv extends Fi{constructor(e=new Ie,t=new Ie,i=new Ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ie){const i=t,o=this.v0,a=this.v1,c=this.v2;return i.set(Ta(e,o.x,a.x,c.x),Ta(e,o.y,a.y,c.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k1 extends Fi{constructor(e=new V,t=new V,i=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new V){const i=t,o=this.v0,a=this.v1,c=this.v2;return i.set(Ta(e,o.x,a.x,c.x),Ta(e,o.y,a.y,c.y),Ta(e,o.z,a.z,c.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ev extends Fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ie){const i=t,o=this.points,a=(o.length-1)*e,c=Math.floor(a),u=a-c,d=o[c===0?c:c-1],f=o[c],p=o[c>o.length-2?o.length-1:c+1],g=o[c>o.length-3?o.length-1:c+2];return i.set(Q0(u,d.x,f.x,p.x,g.x),Q0(u,d.y,f.y,p.y,g.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const o=e.points[t];this.points.push(new Ie().fromArray(o))}return this}}var nf=Object.freeze({__proto__:null,ArcCurve:b1,CatmullRomCurve3:A1,CubicBezierCurve:Sv,CubicBezierCurve3:U1,EllipseCurve:Pf,LineCurve:wv,LineCurve3:F1,QuadraticBezierCurve:Mv,QuadraticBezierCurve3:k1,SplineCurve:Ev});class O1 extends Fi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nf[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),o=this.getCurveLengths();let a=0;for(;a<o.length;){if(o[a]>=i){const c=o[a]-i,u=this.curves[a],d=u.getLength(),f=d===0?0:1-c/d;return u.getPointAt(f,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,o=this.curves.length;i<o;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let o=0,a=this.curves;o<a.length;o++){const c=a[o],u=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,d=c.getPoints(u);for(let f=0;f<d.length;f++){const p=d[f];i&&i.equals(p)||(t.push(p),i=p)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const o=e.curves[t];this.curves.push(new nf[o.type]().fromJSON(o))}return this}}class rf extends O1{constructor(e){super(),this.type="Path",this.currentPoint=new Ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new wv(this.currentPoint.clone(),new Ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,o){const a=new Mv(this.currentPoint.clone(),new Ie(e,t),new Ie(i,o));return this.curves.push(a),this.currentPoint.set(i,o),this}bezierCurveTo(e,t,i,o,a,c){const u=new Sv(this.currentPoint.clone(),new Ie(e,t),new Ie(i,o),new Ie(a,c));return this.curves.push(u),this.currentPoint.set(a,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ev(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,o,a,c){const u=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(e+u,t+d,i,o,a,c),this}absarc(e,t,i,o,a,c){return this.absellipse(e,t,i,i,o,a,c),this}ellipse(e,t,i,o,a,c,u,d){const f=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(e+f,t+p,i,o,a,c,u,d),this}absellipse(e,t,i,o,a,c,u,d){const f=new Pf(e,t,i,o,a,c,u,d);if(this.curves.length>0){const g=f.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(f);const p=f.getPoint(1);return this.currentPoint.copy(p),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Pa extends en{constructor(e=1,t=32,i=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:o},t=Math.max(3,t);const a=[],c=[],u=[],d=[],f=new V,p=new Ie;c.push(0,0,0),u.push(0,0,1),d.push(.5,.5);for(let g=0,v=3;g<=t;g++,v+=3){const y=i+g/t*o;f.x=e*Math.cos(y),f.y=e*Math.sin(y),c.push(f.x,f.y,f.z),u.push(0,0,1),p.x=(c[v]/e+1)/2,p.y=(c[v+1]/e+1)/2,d.push(p.x,p.y)}for(let g=1;g<=t;g++)a.push(g,g+1,0);this.setIndex(a),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Aa extends en{constructor(e=1,t=1,i=1,o=32,a=1,c=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:o,heightSegments:a,openEnded:c,thetaStart:u,thetaLength:d};const f=this;o=Math.floor(o),a=Math.floor(a);const p=[],g=[],v=[],y=[];let w=0;const M=[],S=i/2;let x=0;A(),c===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(v,3)),this.setAttribute("uv",new zt(y,2));function A(){const E=new V,z=new V;let D=0;const F=(t-e)/i;for(let k=0;k<=a;k++){const P=[],b=k/a,N=b*(t-e)+e;for(let K=0;K<=o;K++){const $=K/o,te=$*d+u,J=Math.sin(te),Q=Math.cos(te);z.x=N*J,z.y=-b*i+S,z.z=N*Q,g.push(z.x,z.y,z.z),E.set(J,F,Q).normalize(),v.push(E.x,E.y,E.z),y.push($,1-b),P.push(w++)}M.push(P)}for(let k=0;k<o;k++)for(let P=0;P<a;P++){const b=M[P][k],N=M[P+1][k],K=M[P+1][k+1],$=M[P][k+1];(e>0||P!==0)&&(p.push(b,N,$),D+=3),(t>0||P!==a-1)&&(p.push(N,K,$),D+=3)}f.addGroup(x,D,0),x+=D}function T(E){const z=w,D=new Ie,F=new V;let k=0;const P=E===!0?e:t,b=E===!0?1:-1;for(let K=1;K<=o;K++)g.push(0,S*b,0),v.push(0,b,0),y.push(.5,.5),w++;const N=w;for(let K=0;K<=o;K++){const te=K/o*d+u,J=Math.cos(te),Q=Math.sin(te);F.x=P*Q,F.y=S*b,F.z=P*J,g.push(F.x,F.y,F.z),v.push(0,b,0),D.x=J*.5+.5,D.y=Q*.5*b+.5,y.push(D.x,D.y),w++}for(let K=0;K<o;K++){const $=z+K,te=N+K;E===!0?p.push(te,te+1,$):p.push(te+1,te,$),k+=3}f.addGroup(x,k,E===!0?1:2),x+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nf extends en{constructor(e=[],t=[],i=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:o};const a=[],c=[];u(o),f(i),p(),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(a.slice(),3)),this.setAttribute("uv",new zt(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function u(A){const T=new V,E=new V,z=new V;for(let D=0;D<t.length;D+=3)y(t[D+0],T),y(t[D+1],E),y(t[D+2],z),d(T,E,z,A)}function d(A,T,E,z){const D=z+1,F=[];for(let k=0;k<=D;k++){F[k]=[];const P=A.clone().lerp(E,k/D),b=T.clone().lerp(E,k/D),N=D-k;for(let K=0;K<=N;K++)K===0&&k===D?F[k][K]=P:F[k][K]=P.clone().lerp(b,K/N)}for(let k=0;k<D;k++)for(let P=0;P<2*(D-k)-1;P++){const b=Math.floor(P/2);P%2===0?(v(F[k][b+1]),v(F[k+1][b]),v(F[k][b])):(v(F[k][b+1]),v(F[k+1][b+1]),v(F[k+1][b]))}}function f(A){const T=new V;for(let E=0;E<a.length;E+=3)T.x=a[E+0],T.y=a[E+1],T.z=a[E+2],T.normalize().multiplyScalar(A),a[E+0]=T.x,a[E+1]=T.y,a[E+2]=T.z}function p(){const A=new V;for(let T=0;T<a.length;T+=3){A.x=a[T+0],A.y=a[T+1],A.z=a[T+2];const E=S(A)/2/Math.PI+.5,z=x(A)/Math.PI+.5;c.push(E,1-z)}w(),g()}function g(){for(let A=0;A<c.length;A+=6){const T=c[A+0],E=c[A+2],z=c[A+4],D=Math.max(T,E,z),F=Math.min(T,E,z);D>.9&&F<.1&&(T<.2&&(c[A+0]+=1),E<.2&&(c[A+2]+=1),z<.2&&(c[A+4]+=1))}}function v(A){a.push(A.x,A.y,A.z)}function y(A,T){const E=A*3;T.x=e[E+0],T.y=e[E+1],T.z=e[E+2]}function w(){const A=new V,T=new V,E=new V,z=new V,D=new Ie,F=new Ie,k=new Ie;for(let P=0,b=0;P<a.length;P+=9,b+=6){A.set(a[P+0],a[P+1],a[P+2]),T.set(a[P+3],a[P+4],a[P+5]),E.set(a[P+6],a[P+7],a[P+8]),D.set(c[b+0],c[b+1]),F.set(c[b+2],c[b+3]),k.set(c[b+4],c[b+5]),z.copy(A).add(T).add(E).divideScalar(3);const N=S(z);M(D,b+0,A,N),M(F,b+2,T,N),M(k,b+4,E,N)}}function M(A,T,E,z){z<0&&A.x===1&&(c[T]=A.x-1),E.x===0&&E.z===0&&(c[T]=z/2/Math.PI+.5)}function S(A){return Math.atan2(A.z,-A.x)}function x(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nf(e.vertices,e.indices,e.radius,e.details)}}class Rc extends rf{constructor(e){super(e),this.uuid=Po(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,o=this.holes.length;i<o;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const o=e.holes[t];this.holes.push(new rf().fromJSON(o))}return this}}const z1={triangulate:function(s,e,t=2){const i=e&&e.length,o=i?e[0]*t:s.length;let a=Tv(s,0,o,t,!0);const c=[];if(!a||a.next===a.prev)return c;let u,d,f,p,g,v,y;if(i&&(a=W1(s,e,a,t)),s.length>80*t){u=f=s[0],d=p=s[1];for(let w=t;w<o;w+=t)g=s[w],v=s[w+1],g<u&&(u=g),v<d&&(d=v),g>f&&(f=g),v>p&&(p=v);y=Math.max(f-u,p-d),y=y!==0?32767/y:0}return La(a,c,t,u,d,y,0),c}};function Tv(s,e,t,i,o){let a,c;if(o===tw(s,e,t,i)>0)for(a=e;a<t;a+=i)c=eg(a,s[a],s[a+1],c);else for(a=t-i;a>=e;a-=i)c=eg(a,s[a],s[a+1],c);return c&&Gc(c,c.next)&&(Ia(c),c=c.next),c}function _s(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(Gc(t,t.next)||Zt(t.prev,t,t.next)===0)){if(Ia(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function La(s,e,t,i,o,a,c){if(!s)return;!c&&a&&q1(s,i,o,a);let u=s,d,f;for(;s.prev!==s.next;){if(d=s.prev,f=s.next,a?H1(s,i,o,a):B1(s)){e.push(d.i/t|0),e.push(s.i/t|0),e.push(f.i/t|0),Ia(s),s=f.next,u=f.next;continue}if(s=f,s===u){c?c===1?(s=V1(_s(s),e,t),La(s,e,t,i,o,a,2)):c===2&&G1(s,e,t,i,o,a):La(_s(s),e,t,i,o,a,1);break}}}function B1(s){const e=s.prev,t=s,i=s.next;if(Zt(e,t,i)>=0)return!1;const o=e.x,a=t.x,c=i.x,u=e.y,d=t.y,f=i.y,p=o<a?o<c?o:c:a<c?a:c,g=u<d?u<f?u:f:d<f?d:f,v=o>a?o>c?o:c:a>c?a:c,y=u>d?u>f?u:f:d>f?d:f;let w=i.next;for(;w!==e;){if(w.x>=p&&w.x<=v&&w.y>=g&&w.y<=y&&uo(o,u,a,d,c,f,w.x,w.y)&&Zt(w.prev,w,w.next)>=0)return!1;w=w.next}return!0}function H1(s,e,t,i){const o=s.prev,a=s,c=s.next;if(Zt(o,a,c)>=0)return!1;const u=o.x,d=a.x,f=c.x,p=o.y,g=a.y,v=c.y,y=u<d?u<f?u:f:d<f?d:f,w=p<g?p<v?p:v:g<v?g:v,M=u>d?u>f?u:f:d>f?d:f,S=p>g?p>v?p:v:g>v?g:v,x=sf(y,w,e,t,i),A=sf(M,S,e,t,i);let T=s.prevZ,E=s.nextZ;for(;T&&T.z>=x&&E&&E.z<=A;){if(T.x>=y&&T.x<=M&&T.y>=w&&T.y<=S&&T!==o&&T!==c&&uo(u,p,d,g,f,v,T.x,T.y)&&Zt(T.prev,T,T.next)>=0||(T=T.prevZ,E.x>=y&&E.x<=M&&E.y>=w&&E.y<=S&&E!==o&&E!==c&&uo(u,p,d,g,f,v,E.x,E.y)&&Zt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;T&&T.z>=x;){if(T.x>=y&&T.x<=M&&T.y>=w&&T.y<=S&&T!==o&&T!==c&&uo(u,p,d,g,f,v,T.x,T.y)&&Zt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;E&&E.z<=A;){if(E.x>=y&&E.x<=M&&E.y>=w&&E.y<=S&&E!==o&&E!==c&&uo(u,p,d,g,f,v,E.x,E.y)&&Zt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function V1(s,e,t){let i=s;do{const o=i.prev,a=i.next.next;!Gc(o,a)&&bv(o,i,i.next,a)&&Na(o,a)&&Na(a,o)&&(e.push(o.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),Ia(i),Ia(i.next),i=s=a),i=i.next}while(i!==s);return _s(i)}function G1(s,e,t,i,o,a){let c=s;do{let u=c.next.next;for(;u!==c.prev;){if(c.i!==u.i&&J1(c,u)){let d=Av(c,u);c=_s(c,c.next),d=_s(d,d.next),La(c,e,t,i,o,a,0),La(d,e,t,i,o,a,0);return}u=u.next}c=c.next}while(c!==s)}function W1(s,e,t,i){const o=[];let a,c,u,d,f;for(a=0,c=e.length;a<c;a++)u=e[a]*i,d=a<c-1?e[a+1]*i:s.length,f=Tv(s,u,d,i,!1),f===f.next&&(f.steiner=!0),o.push(Z1(f));for(o.sort(j1),a=0;a<o.length;a++)t=X1(o[a],t);return t}function j1(s,e){return s.x-e.x}function X1(s,e){const t=$1(s,e);if(!t)return e;const i=Av(t,s);return _s(i,i.next),_s(t,t.next)}function $1(s,e){let t=e,i=-1/0,o;const a=s.x,c=s.y;do{if(c<=t.y&&c>=t.next.y&&t.next.y!==t.y){const v=t.x+(c-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=a&&v>i&&(i=v,o=t.x<t.next.x?t:t.next,v===a))return o}t=t.next}while(t!==e);if(!o)return null;const u=o,d=o.x,f=o.y;let p=1/0,g;t=o;do a>=t.x&&t.x>=d&&a!==t.x&&uo(c<f?a:i,c,d,f,c<f?i:a,c,t.x,t.y)&&(g=Math.abs(c-t.y)/(a-t.x),Na(t,s)&&(g<p||g===p&&(t.x>o.x||t.x===o.x&&Y1(o,t)))&&(o=t,p=g)),t=t.next;while(t!==u);return o}function Y1(s,e){return Zt(s.prev,s,e.prev)<0&&Zt(e.next,s,s.next)<0}function q1(s,e,t,i){let o=s;do o.z===0&&(o.z=sf(o.x,o.y,e,t,i)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,K1(o)}function K1(s){let e,t,i,o,a,c,u,d,f=1;do{for(t=s,s=null,a=null,c=0;t;){for(c++,i=t,u=0,e=0;e<f&&(u++,i=i.nextZ,!!i);e++);for(d=f;u>0||d>0&&i;)u!==0&&(d===0||!i||t.z<=i.z)?(o=t,t=t.nextZ,u--):(o=i,i=i.nextZ,d--),a?a.nextZ=o:s=o,o.prevZ=a,a=o;t=i}a.nextZ=null,f*=2}while(c>1);return s}function sf(s,e,t,i,o){return s=(s-t)*o|0,e=(e-i)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Z1(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function uo(s,e,t,i,o,a,c,u){return(o-c)*(e-u)>=(s-c)*(a-u)&&(s-c)*(i-u)>=(t-c)*(e-u)&&(t-c)*(a-u)>=(o-c)*(i-u)}function J1(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Q1(s,e)&&(Na(s,e)&&Na(e,s)&&ew(s,e)&&(Zt(s.prev,s,e.prev)||Zt(s,e.prev,e))||Gc(s,e)&&Zt(s.prev,s,s.next)>0&&Zt(e.prev,e,e.next)>0)}function Zt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Gc(s,e){return s.x===e.x&&s.y===e.y}function bv(s,e,t,i){const o=vc(Zt(s,e,t)),a=vc(Zt(s,e,i)),c=vc(Zt(t,i,s)),u=vc(Zt(t,i,e));return!!(o!==a&&c!==u||o===0&&gc(s,t,e)||a===0&&gc(s,i,e)||c===0&&gc(t,s,i)||u===0&&gc(t,e,i))}function gc(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function vc(s){return s>0?1:s<0?-1:0}function Q1(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&bv(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Na(s,e){return Zt(s.prev,s,s.next)<0?Zt(s,e,s.next)>=0&&Zt(s,s.prev,e)>=0:Zt(s,e,s.prev)<0||Zt(s,s.next,e)<0}function ew(s,e){let t=s,i=!1;const o=(s.x+e.x)/2,a=(s.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&o<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function Av(s,e){const t=new of(s.i,s.x,s.y),i=new of(e.i,e.x,e.y),o=s.next,a=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function eg(s,e,t,i){const o=new of(s,e,t);return i?(o.next=i.next,o.prev=i,i.next.prev=o,i.next=o):(o.prev=o,o.next=o),o}function Ia(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function of(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tw(s,e,t,i){let o=0;for(let a=e,c=t-i;a<t;a+=i)o+=(s[c]-s[a])*(s[a+1]+s[c+1]),c=a;return o}class vo{static area(e){const t=e.length;let i=0;for(let o=t-1,a=0;a<t;o=a++)i+=e[o].x*e[a].y-e[a].x*e[o].y;return i*.5}static isClockWise(e){return vo.area(e)<0}static triangulateShape(e,t){const i=[],o=[],a=[];tg(e),ng(i,e);let c=e.length;t.forEach(tg);for(let d=0;d<t.length;d++)o.push(c),c+=t[d].length,ng(i,t[d]);const u=z1.triangulate(i,o);for(let d=0;d<u.length;d+=3)a.push(u.slice(d,d+3));return a}}function tg(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ng(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class If extends en{constructor(e=new Rc([new Ie(.5,.5),new Ie(-.5,.5),new Ie(-.5,-.5),new Ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,o=[],a=[];for(let u=0,d=e.length;u<d;u++){const f=e[u];c(f)}this.setAttribute("position",new zt(o,3)),this.setAttribute("uv",new zt(a,2)),this.computeVertexNormals();function c(u){const d=[],f=t.curveSegments!==void 0?t.curveSegments:12,p=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1;let v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,y=t.bevelThickness!==void 0?t.bevelThickness:.2,w=t.bevelSize!==void 0?t.bevelSize:y-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,S=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:nw;let T,E=!1,z,D,F,k;x&&(T=x.getSpacedPoints(p),E=!0,v=!1,z=x.computeFrenetFrames(p,!1),D=new V,F=new V,k=new V),v||(S=0,y=0,w=0,M=0);const P=u.extractPoints(f);let b=P.shape;const N=P.holes;if(!vo.isClockWise(b)){b=b.reverse();for(let xe=0,be=N.length;xe<be;xe++){const O=N[xe];vo.isClockWise(O)&&(N[xe]=O.reverse())}}const $=vo.triangulateShape(b,N),te=b;for(let xe=0,be=N.length;xe<be;xe++){const O=N[xe];b=b.concat(O)}function J(xe,be,O){return be||console.error("THREE.ExtrudeGeometry: vec does not exist"),xe.clone().addScaledVector(be,O)}const Q=b.length,ce=$.length;function G(xe,be,O){let Qe,we,Ve;const Re=xe.x-be.x,it=xe.y-be.y,Ee=O.x-xe.x,U=O.y-xe.y,L=Re*Re+it*it,ne=Re*U-it*Ee;if(Math.abs(ne)>Number.EPSILON){const pe=Math.sqrt(L),ye=Math.sqrt(Ee*Ee+U*U),me=be.x-it/pe,$e=be.y+Re/pe,De=O.x-U/ye,We=O.y+Ee/ye,vt=((De-me)*U-(We-$e)*Ee)/(Re*U-it*Ee);Qe=me+Re*vt-xe.x,we=$e+it*vt-xe.y;const Ae=Qe*Qe+we*we;if(Ae<=2)return new Ie(Qe,we);Ve=Math.sqrt(Ae/2)}else{let pe=!1;Re>Number.EPSILON?Ee>Number.EPSILON&&(pe=!0):Re<-Number.EPSILON?Ee<-Number.EPSILON&&(pe=!0):Math.sign(it)===Math.sign(U)&&(pe=!0),pe?(Qe=-it,we=Re,Ve=Math.sqrt(L)):(Qe=Re,we=it,Ve=Math.sqrt(L/2))}return new Ie(Qe/Ve,we/Ve)}const he=[];for(let xe=0,be=te.length,O=be-1,Qe=xe+1;xe<be;xe++,O++,Qe++)O===be&&(O=0),Qe===be&&(Qe=0),he[xe]=G(te[xe],te[O],te[Qe]);const oe=[];let H,se=he.concat();for(let xe=0,be=N.length;xe<be;xe++){const O=N[xe];H=[];for(let Qe=0,we=O.length,Ve=we-1,Re=Qe+1;Qe<we;Qe++,Ve++,Re++)Ve===we&&(Ve=0),Re===we&&(Re=0),H[Qe]=G(O[Qe],O[Ve],O[Re]);oe.push(H),se=se.concat(H)}for(let xe=0;xe<S;xe++){const be=xe/S,O=y*Math.cos(be*Math.PI/2),Qe=w*Math.sin(be*Math.PI/2)+M;for(let we=0,Ve=te.length;we<Ve;we++){const Re=J(te[we],he[we],Qe);ve(Re.x,Re.y,-O)}for(let we=0,Ve=N.length;we<Ve;we++){const Re=N[we];H=oe[we];for(let it=0,Ee=Re.length;it<Ee;it++){const U=J(Re[it],H[it],Qe);ve(U.x,U.y,-O)}}}const Ue=w+M;for(let xe=0;xe<Q;xe++){const be=v?J(b[xe],se[xe],Ue):b[xe];E?(F.copy(z.normals[0]).multiplyScalar(be.x),D.copy(z.binormals[0]).multiplyScalar(be.y),k.copy(T[0]).add(F).add(D),ve(k.x,k.y,k.z)):ve(be.x,be.y,0)}for(let xe=1;xe<=p;xe++)for(let be=0;be<Q;be++){const O=v?J(b[be],se[be],Ue):b[be];E?(F.copy(z.normals[xe]).multiplyScalar(O.x),D.copy(z.binormals[xe]).multiplyScalar(O.y),k.copy(T[xe]).add(F).add(D),ve(k.x,k.y,k.z)):ve(O.x,O.y,g/p*xe)}for(let xe=S-1;xe>=0;xe--){const be=xe/S,O=y*Math.cos(be*Math.PI/2),Qe=w*Math.sin(be*Math.PI/2)+M;for(let we=0,Ve=te.length;we<Ve;we++){const Re=J(te[we],he[we],Qe);ve(Re.x,Re.y,g+O)}for(let we=0,Ve=N.length;we<Ve;we++){const Re=N[we];H=oe[we];for(let it=0,Ee=Re.length;it<Ee;it++){const U=J(Re[it],H[it],Qe);E?ve(U.x,U.y+T[p-1].y,T[p-1].x+O):ve(U.x,U.y,g+O)}}}ie(),fe();function ie(){const xe=o.length/3;if(v){let be=0,O=Q*be;for(let Qe=0;Qe<ce;Qe++){const we=$[Qe];Le(we[2]+O,we[1]+O,we[0]+O)}be=p+S*2,O=Q*be;for(let Qe=0;Qe<ce;Qe++){const we=$[Qe];Le(we[0]+O,we[1]+O,we[2]+O)}}else{for(let be=0;be<ce;be++){const O=$[be];Le(O[2],O[1],O[0])}for(let be=0;be<ce;be++){const O=$[be];Le(O[0]+Q*p,O[1]+Q*p,O[2]+Q*p)}}i.addGroup(xe,o.length/3-xe,0)}function fe(){const xe=o.length/3;let be=0;Me(te,be),be+=te.length;for(let O=0,Qe=N.length;O<Qe;O++){const we=N[O];Me(we,be),be+=we.length}i.addGroup(xe,o.length/3-xe,1)}function Me(xe,be){let O=xe.length;for(;--O>=0;){const Qe=O;let we=O-1;we<0&&(we=xe.length-1);for(let Ve=0,Re=p+S*2;Ve<Re;Ve++){const it=Q*Ve,Ee=Q*(Ve+1),U=be+Qe+it,L=be+we+it,ne=be+we+Ee,pe=be+Qe+Ee;ze(U,L,ne,pe)}}}function ve(xe,be,O){d.push(xe),d.push(be),d.push(O)}function Le(xe,be,O){Xe(xe),Xe(be),Xe(O);const Qe=o.length/3,we=A.generateTopUV(i,o,Qe-3,Qe-2,Qe-1);gt(we[0]),gt(we[1]),gt(we[2])}function ze(xe,be,O,Qe){Xe(xe),Xe(be),Xe(Qe),Xe(be),Xe(O),Xe(Qe);const we=o.length/3,Ve=A.generateSideWallUV(i,o,we-6,we-3,we-2,we-1);gt(Ve[0]),gt(Ve[1]),gt(Ve[3]),gt(Ve[1]),gt(Ve[2]),gt(Ve[3])}function Xe(xe){o.push(d[xe*3+0]),o.push(d[xe*3+1]),o.push(d[xe*3+2])}function gt(xe){a.push(xe.x),a.push(xe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return iw(t,i,e)}static fromJSON(e,t){const i=[];for(let a=0,c=e.shapes.length;a<c;a++){const u=t[e.shapes[a]];i.push(u)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new nf[o.type]().fromJSON(o)),new If(i,e.options)}}const nw={generateTopUV:function(s,e,t,i,o){const a=e[t*3],c=e[t*3+1],u=e[i*3],d=e[i*3+1],f=e[o*3],p=e[o*3+1];return[new Ie(a,c),new Ie(u,d),new Ie(f,p)]},generateSideWallUV:function(s,e,t,i,o,a){const c=e[t*3],u=e[t*3+1],d=e[t*3+2],f=e[i*3],p=e[i*3+1],g=e[i*3+2],v=e[o*3],y=e[o*3+1],w=e[o*3+2],M=e[a*3],S=e[a*3+1],x=e[a*3+2];return Math.abs(u-p)<Math.abs(c-f)?[new Ie(c,1-d),new Ie(f,1-g),new Ie(v,1-w),new Ie(M,1-x)]:[new Ie(u,1-d),new Ie(p,1-g),new Ie(y,1-w),new Ie(S,1-x)]}};function iw(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,o=s.length;i<o;i++){const a=s[i];t.shapes.push(a.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Df extends Nf{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Df(e.radius,e.detail)}}class Si extends en{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(i),d=Math.floor(o),f=u+1,p=d+1,g=e/u,v=t/d,y=[],w=[],M=[],S=[];for(let x=0;x<p;x++){const A=x*v-c;for(let T=0;T<f;T++){const E=T*g-a;w.push(E,-A,0),M.push(0,0,1),S.push(T/u),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let A=0;A<u;A++){const T=A+f*x,E=A+f*(x+1),z=A+1+f*(x+1),D=A+1+f*x;y.push(T,E,D),y.push(E,z,D)}this.setIndex(y),this.setAttribute("position",new zt(w,3)),this.setAttribute("normal",new zt(M,3)),this.setAttribute("uv",new zt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wc extends en{constructor(e=.5,t=1,i=32,o=1,a=0,c=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:o,thetaStart:a,thetaLength:c},i=Math.max(3,i),o=Math.max(1,o);const u=[],d=[],f=[],p=[];let g=e;const v=(t-e)/o,y=new V,w=new Ie;for(let M=0;M<=o;M++){for(let S=0;S<=i;S++){const x=a+S/i*c;y.x=g*Math.cos(x),y.y=g*Math.sin(x),d.push(y.x,y.y,y.z),f.push(0,0,1),w.x=(y.x/t+1)/2,w.y=(y.y/t+1)/2,p.push(w.x,w.y)}g+=v}for(let M=0;M<o;M++){const S=M*(i+1);for(let x=0;x<i;x++){const A=x+S,T=A,E=A+i+1,z=A+i+2,D=A+1;u.push(T,E,D),u.push(E,z,D)}}this.setIndex(u),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Da extends en{constructor(e=1,t=32,i=16,o=0,a=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:a,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(c+u,Math.PI);let f=0;const p=[],g=new V,v=new V,y=[],w=[],M=[],S=[];for(let x=0;x<=i;x++){const A=[],T=x/i;let E=0;x===0&&c===0?E=.5/t:x===i&&d===Math.PI&&(E=-.5/t);for(let z=0;z<=t;z++){const D=z/t;g.x=-e*Math.cos(o+D*a)*Math.sin(c+T*u),g.y=e*Math.cos(c+T*u),g.z=e*Math.sin(o+D*a)*Math.sin(c+T*u),w.push(g.x,g.y,g.z),v.copy(g).normalize(),M.push(v.x,v.y,v.z),S.push(D+E,1-T),A.push(f++)}p.push(A)}for(let x=0;x<i;x++)for(let A=0;A<t;A++){const T=p[x][A+1],E=p[x][A],z=p[x+1][A],D=p[x+1][A+1];(x!==0||c>0)&&y.push(T,E,D),(x!==i-1||d<Math.PI)&&y.push(E,z,D)}this.setIndex(y),this.setAttribute("position",new zt(w,3)),this.setAttribute("normal",new zt(M,3)),this.setAttribute("uv",new zt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bo extends No{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new dt(16777215),this.specular=new dt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cv,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rw extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sw extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ig={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class ow{constructor(e,t,i){const o=this;let a=!1,c=0,u=0,d;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){u++,a===!1&&o.onStart!==void 0&&o.onStart(p,c,u),a=!0},this.itemEnd=function(p){c++,o.onProgress!==void 0&&o.onProgress(p,c,u),c===u&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,g){return f.push(p,g),this},this.removeHandler=function(p){const g=f.indexOf(p);return g!==-1&&f.splice(g,2),this},this.getHandler=function(p){for(let g=0,v=f.length;g<v;g+=2){const y=f[g],w=f[g+1];if(y.global&&(y.lastIndex=0),y.test(p))return w}return null}}}const aw=new ow;class Uf{constructor(e){this.manager=e!==void 0?e:aw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(o,a){i.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Uf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ji={};class lw extends Error{constructor(e,t){super(e),this.response=t}}class cw extends Uf{constructor(e){super(e)}load(e,t,i,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=ig.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Ji[e]!==void 0){Ji[e].push({onLoad:t,onProgress:i,onError:o});return}Ji[e]=[],Ji[e].push({onLoad:t,onProgress:i,onError:o});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,d=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const p=Ji[e],g=f.body.getReader(),v=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),y=v?parseInt(v):0,w=y!==0;let M=0;const S=new ReadableStream({start(x){A();function A(){g.read().then(({done:T,value:E})=>{if(T)x.close();else{M+=E.byteLength;const z=new ProgressEvent("progress",{lengthComputable:w,loaded:M,total:y});for(let D=0,F=p.length;D<F;D++){const k=p[D];k.onProgress&&k.onProgress(z)}x.enqueue(E),A()}},T=>{x.error(T)})}}});return new Response(S)}else throw new lw(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(d){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return f.json();default:if(u===void 0)return f.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),v=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(v);return f.arrayBuffer().then(w=>y.decode(w))}}}).then(f=>{ig.add(e,f);const p=Ji[e];delete Ji[e];for(let g=0,v=p.length;g<v;g++){const y=p[g];y.onLoad&&y.onLoad(f)}}).catch(f=>{const p=Ji[e];if(p===void 0)throw this.manager.itemError(e),f;delete Ji[e];for(let g=0,v=p.length;g<v;g++){const y=p[g];y.onError&&y.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class jc extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const sd=new It,rg=new V,sg=new V;class Ff{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rf,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;rg.setFromMatrixPosition(e.matrixWorld),t.position.copy(rg),sg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sg),t.updateMatrixWorld(),sd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uw extends Ff{constructor(){super(new Gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Dc*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||o!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=o,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hw extends jc{constructor(e,t,i=0,o=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.distance=i,this.angle=o,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new uw}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const og=new It,wa=new V,od=new V;class dw extends Ff{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new Ot(2,1,1,1),new Ot(0,1,1,1),new Ot(3,1,1,1),new Ot(1,1,1,1),new Ot(3,0,1,1),new Ot(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,o=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),wa.setFromMatrixPosition(e.matrixWorld),i.position.copy(wa),od.copy(i.position),od.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(od),i.updateMatrixWorld(),o.makeTranslation(-wa.x,-wa.y,-wa.z),og.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(og)}}class ad extends jc{constructor(e,t,i=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new dw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Cv extends xv{constructor(e=-1,t=1,i=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class fw extends Ff{constructor(){super(new Cv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ag extends jc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new fw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pw extends jc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mw extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const lg=new It;class gw{constructor(e,t,i=0,o=1/0){this.ray=new Af(e,t),this.near=i,this.far=o,this.camera=null,this.layers=new Cf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lg),this}intersectObject(e,t=!0,i=[]){return af(e,this,i,t),i.sort(cg),i}intersectObjects(e,t=!0,i=[]){for(let o=0,a=e.length;o<a;o++)af(e[o],this,i,t);return i.sort(cg),i}}function cg(s,e){return s.distance-e.distance}function af(s,e,t,i){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&i===!0){const a=s.children;for(let c=0,u=a.length;c<u;c++)af(a[c],e,t,!0)}}class vw{constructor(){this.type="ShapePath",this.color=new dt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new rf,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,o){return this.currentPath.quadraticCurveTo(e,t,i,o),this}bezierCurveTo(e,t,i,o,a,c){return this.currentPath.bezierCurveTo(e,t,i,o,a,c),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(x){const A=[];for(let T=0,E=x.length;T<E;T++){const z=x[T],D=new Rc;D.curves=z.curves,A.push(D)}return A}function i(x,A){const T=A.length;let E=!1;for(let z=T-1,D=0;D<T;z=D++){let F=A[z],k=A[D],P=k.x-F.x,b=k.y-F.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(F=A[D],P=-P,k=A[z],b=-b),x.y<F.y||x.y>k.y)continue;if(x.y===F.y){if(x.x===F.x)return!0}else{const N=b*(x.x-F.x)-P*(x.y-F.y);if(N===0)return!0;if(N<0)continue;E=!E}}else{if(x.y!==F.y)continue;if(k.x<=x.x&&x.x<=F.x||F.x<=x.x&&x.x<=k.x)return!0}}return E}const o=vo.isClockWise,a=this.subPaths;if(a.length===0)return[];let c,u,d;const f=[];if(a.length===1)return u=a[0],d=new Rc,d.curves=u.curves,f.push(d),f;let p=!o(a[0].getPoints());p=e?!p:p;const g=[],v=[];let y=[],w=0,M;v[w]=void 0,y[w]=[];for(let x=0,A=a.length;x<A;x++)u=a[x],M=u.getPoints(),c=o(M),c=e?!c:c,c?(!p&&v[w]&&w++,v[w]={s:new Rc,p:M},v[w].s.curves=u.curves,p&&w++,y[w]=[]):y[w].push({h:u,p:M[0]});if(!v[0])return t(a);if(v.length>1){let x=!1,A=0;for(let T=0,E=v.length;T<E;T++)g[T]=[];for(let T=0,E=v.length;T<E;T++){const z=y[T];for(let D=0;D<z.length;D++){const F=z[D];let k=!0;for(let P=0;P<v.length;P++)i(F.p,v[P].p)&&(T!==P&&A++,k?(k=!1,g[P].push(F)):x=!0);k&&g[T].push(F)}}A>0&&x===!1&&(y=g)}let S;for(let x=0,A=v.length;x<A;x++){d=v[x].s,f.push(d),S=y[x];for(let T=0,E=S.length;T<E;T++)d.holes.push(S[T].h)}return f}}function ug(s,e,t,i){const o=xw(i);switch(t){case iv:return s*e;case sv:return s*e;case ov:return s*e*2;case Mf:return s*e/o.components*o.byteLength;case Ef:return s*e/o.components*o.byteLength;case av:return s*e*2/o.components*o.byteLength;case Tf:return s*e*2/o.components*o.byteLength;case rv:return s*e*3/o.components*o.byteLength;case _i:return s*e*4/o.components*o.byteLength;case bf:return s*e*4/o.components*o.byteLength;case Ec:case Tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bc:case Ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ld:case Id:return Math.max(s,16)*Math.max(e,8)/4;case Pd:case Nd:return Math.max(s,8)*Math.max(e,8)/2;case Dd:case Ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case jd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $d:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case qd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cc:case Zd:case Jd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case lv:case Qd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ef:case tf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xw(s){switch(s){case sr:case ev:return{byteLength:1,components:1};case Ra:case tv:case Oa:return{byteLength:2,components:1};case Sf:case wf:return{byteLength:2,components:4};case xs:case _f:case Ni:return{byteLength:4,components:1};case nv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rv(){let s=null,e=!1,t=null,i=null;function o(a,c){t(a,c),i=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function yw(s){const e=new WeakMap;function t(u,d){const f=u.array,p=u.usage,g=f.byteLength,v=s.createBuffer();s.bindBuffer(d,v),s.bufferData(d,f,p),u.onUploadCallback();let y;if(f instanceof Float32Array)y=s.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=s.SHORT;else if(f instanceof Uint32Array)y=s.UNSIGNED_INT;else if(f instanceof Int32Array)y=s.INT;else if(f instanceof Int8Array)y=s.BYTE;else if(f instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,d,f){const p=d.array,g=d.updateRanges;if(s.bindBuffer(f,u),g.length===0)s.bufferSubData(f,0,p);else{g.sort((y,w)=>y.start-w.start);let v=0;for(let y=1;y<g.length;y++){const w=g[v],M=g[y];M.start<=w.start+w.count+1?w.count=Math.max(w.count,M.start+M.count-w.start):(++v,g[v]=M)}g.length=v+1;for(let y=0,w=g.length;y<w;y++){const M=g[y];s.bufferSubData(f,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(s.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,d),f.version=u.version}}return{get:o,remove:a,update:c}}var _w=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sw=`#ifdef USE_ALPHAHASH
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
#endif`,ww=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ew=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bw=`#ifdef USE_AOMAP
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
#endif`,Aw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cw=`#ifdef USE_BATCHING
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
#endif`,Rw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Iw=`#ifdef USE_IRIDESCENCE
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
#endif`,Dw=`#ifdef USE_BUMPMAP
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
#endif`,Uw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ow=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vw=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gw=`#define PI 3.141592653589793
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
} // validated`,Ww=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jw=`vec3 transformedNormal = objectNormal;
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
#endif`,Xw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$w=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jw=`#ifdef USE_ENVMAP
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
#endif`,Qw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aM=`#ifdef USE_GRADIENTMAP
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
}`,lM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hM=`uniform bool receiveShadow;
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
#endif`,dM=`#ifdef USE_ENVMAP
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
#endif`,fM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vM=`PhysicalMaterial material;
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
#endif`,xM=`struct PhysicalMaterial {
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
}`,yM=`
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
#endif`,_M=`#if defined( RE_IndirectDiffuse )
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
#endif`,SM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RM=`#if defined( USE_POINTS_UV )
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
#endif`,PM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`#ifdef USE_MORPHTARGETS
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
#endif`,FM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VM=`#ifdef USE_NORMALMAP
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
#endif`,GM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$M=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rE=`float getShadowMask() {
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
}`,sE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oE=`#ifdef USE_SKINNING
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
#endif`,aE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lE=`#ifdef USE_SKINNING
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
#endif`,cE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fE=`#ifdef USE_TRANSMISSION
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
#endif`,pE=`#ifdef USE_TRANSMISSION
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
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_E=`uniform sampler2D t2D;
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
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`#include <common>
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
}`,bE=`#if DEPTH_PACKING == 3200
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
}`,AE=`#define DISTANCE
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
}`,CE=`#define DISTANCE
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
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`uniform float scale;
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
}`,NE=`uniform vec3 diffuse;
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
}`,IE=`#include <common>
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
}`,DE=`uniform vec3 diffuse;
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
}`,UE=`#define LAMBERT
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
}`,FE=`#define LAMBERT
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
}`,kE=`#define MATCAP
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
}`,OE=`#define MATCAP
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
}`,zE=`#define NORMAL
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
}`,BE=`#define NORMAL
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
}`,HE=`#define PHONG
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
}`,VE=`#define PHONG
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
}`,GE=`#define STANDARD
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
}`,WE=`#define STANDARD
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
}`,jE=`#define TOON
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
}`,XE=`#define TOON
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
}`,$E=`uniform float size;
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
}`,YE=`uniform vec3 diffuse;
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
}`,qE=`#include <common>
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
}`,KE=`uniform vec3 color;
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
}`,ZE=`uniform float rotation;
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
}`,JE=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:_w,alphahash_pars_fragment:Sw,alphamap_fragment:ww,alphamap_pars_fragment:Mw,alphatest_fragment:Ew,alphatest_pars_fragment:Tw,aomap_fragment:bw,aomap_pars_fragment:Aw,batching_pars_vertex:Cw,batching_vertex:Rw,begin_vertex:Pw,beginnormal_vertex:Lw,bsdfs:Nw,iridescence_fragment:Iw,bumpmap_pars_fragment:Dw,clipping_planes_fragment:Uw,clipping_planes_pars_fragment:Fw,clipping_planes_pars_vertex:kw,clipping_planes_vertex:Ow,color_fragment:zw,color_pars_fragment:Bw,color_pars_vertex:Hw,color_vertex:Vw,common:Gw,cube_uv_reflection_fragment:Ww,defaultnormal_vertex:jw,displacementmap_pars_vertex:Xw,displacementmap_vertex:$w,emissivemap_fragment:Yw,emissivemap_pars_fragment:qw,colorspace_fragment:Kw,colorspace_pars_fragment:Zw,envmap_fragment:Jw,envmap_common_pars_fragment:Qw,envmap_pars_fragment:eM,envmap_pars_vertex:tM,envmap_physical_pars_fragment:dM,envmap_vertex:nM,fog_vertex:iM,fog_pars_vertex:rM,fog_fragment:sM,fog_pars_fragment:oM,gradientmap_pars_fragment:aM,lightmap_pars_fragment:lM,lights_lambert_fragment:cM,lights_lambert_pars_fragment:uM,lights_pars_begin:hM,lights_toon_fragment:fM,lights_toon_pars_fragment:pM,lights_phong_fragment:mM,lights_phong_pars_fragment:gM,lights_physical_fragment:vM,lights_physical_pars_fragment:xM,lights_fragment_begin:yM,lights_fragment_maps:_M,lights_fragment_end:SM,logdepthbuf_fragment:wM,logdepthbuf_pars_fragment:MM,logdepthbuf_pars_vertex:EM,logdepthbuf_vertex:TM,map_fragment:bM,map_pars_fragment:AM,map_particle_fragment:CM,map_particle_pars_fragment:RM,metalnessmap_fragment:PM,metalnessmap_pars_fragment:LM,morphinstance_vertex:NM,morphcolor_vertex:IM,morphnormal_vertex:DM,morphtarget_pars_vertex:UM,morphtarget_vertex:FM,normal_fragment_begin:kM,normal_fragment_maps:OM,normal_pars_fragment:zM,normal_pars_vertex:BM,normal_vertex:HM,normalmap_pars_fragment:VM,clearcoat_normal_fragment_begin:GM,clearcoat_normal_fragment_maps:WM,clearcoat_pars_fragment:jM,iridescence_pars_fragment:XM,opaque_fragment:$M,packing:YM,premultiplied_alpha_fragment:qM,project_vertex:KM,dithering_fragment:ZM,dithering_pars_fragment:JM,roughnessmap_fragment:QM,roughnessmap_pars_fragment:eE,shadowmap_pars_fragment:tE,shadowmap_pars_vertex:nE,shadowmap_vertex:iE,shadowmask_pars_fragment:rE,skinbase_vertex:sE,skinning_pars_vertex:oE,skinning_vertex:aE,skinnormal_vertex:lE,specularmap_fragment:cE,specularmap_pars_fragment:uE,tonemapping_fragment:hE,tonemapping_pars_fragment:dE,transmission_fragment:fE,transmission_pars_fragment:pE,uv_pars_fragment:mE,uv_pars_vertex:gE,uv_vertex:vE,worldpos_vertex:xE,background_vert:yE,background_frag:_E,backgroundCube_vert:SE,backgroundCube_frag:wE,cube_vert:ME,cube_frag:EE,depth_vert:TE,depth_frag:bE,distanceRGBA_vert:AE,distanceRGBA_frag:CE,equirect_vert:RE,equirect_frag:PE,linedashed_vert:LE,linedashed_frag:NE,meshbasic_vert:IE,meshbasic_frag:DE,meshlambert_vert:UE,meshlambert_frag:FE,meshmatcap_vert:kE,meshmatcap_frag:OE,meshnormal_vert:zE,meshnormal_frag:BE,meshphong_vert:HE,meshphong_frag:VE,meshphysical_vert:GE,meshphysical_frag:WE,meshtoon_vert:jE,meshtoon_frag:XE,points_vert:$E,points_frag:YE,shadow_vert:qE,shadow_frag:KE,sprite_vert:ZE,sprite_frag:JE},Oe={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Pi={basic:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new dt(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:In([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:In([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:In([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new dt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:In([Oe.points,Oe.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:In([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:In([Oe.common,Oe.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:In([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:In([Oe.sprite,Oe.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:In([Oe.common,Oe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:In([Oe.lights,Oe.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Pi.physical={uniforms:In([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const xc={r:0,b:0,g:0},as=new Di,QE=new It;function eT(s,e,t,i,o,a,c){const u=new dt(0);let d=a===!0?0:1,f,p,g=null,v=0,y=null;function w(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function M(T){let E=!1;const z=w(T);z===null?x(u,d):z&&z.isColor&&(x(z,1),E=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,c):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(T,E){const z=w(E);z&&(z.isCubeTexture||z.mapping===Vc)?(p===void 0&&(p=new wt(new or(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:To(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,F,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(p)),as.copy(E.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),p.material.uniforms.envMap.value=z,p.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(QE.makeRotationFromEuler(as)),p.material.toneMapped=Nt.getTransfer(z.colorSpace)!==kt,(g!==z||v!==z.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,g=z,v=z.version,y=s.toneMapping),p.layers.enableAll(),T.unshift(p,p.geometry,p.material,0,0,null)):z&&z.isTexture&&(f===void 0&&(f=new wt(new Si(2,2),new zr({name:"BackgroundMaterial",uniforms:To(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=z,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.toneMapped=Nt.getTransfer(z.colorSpace)!==kt,z.matrixAutoUpdate===!0&&z.updateMatrix(),f.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||v!==z.version||y!==s.toneMapping)&&(f.material.needsUpdate=!0,g=z,v=z.version,y=s.toneMapping),f.layers.enableAll(),T.unshift(f,f.geometry,f.material,0,0,null))}function x(T,E){T.getRGB(xc,vv(s)),i.buffers.color.setClear(xc.r,xc.g,xc.b,E,c)}function A(){p!==void 0&&(p.geometry.dispose(),p.material.dispose()),f!==void 0&&(f.geometry.dispose(),f.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(T,E=1){u.set(T),d=E,x(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(T){d=T,x(u,d)},render:M,addToRenderList:S,dispose:A}}function tT(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=v(null);let a=o,c=!1;function u(b,N,K,$,te){let J=!1;const Q=g($,K,N);a!==Q&&(a=Q,f(a.object)),J=y(b,$,K,te),J&&w(b,$,K,te),te!==null&&e.update(te,s.ELEMENT_ARRAY_BUFFER),(J||c)&&(c=!1,E(b,N,K,$),te!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function d(){return s.createVertexArray()}function f(b){return s.bindVertexArray(b)}function p(b){return s.deleteVertexArray(b)}function g(b,N,K){const $=K.wireframe===!0;let te=i[b.id];te===void 0&&(te={},i[b.id]=te);let J=te[N.id];J===void 0&&(J={},te[N.id]=J);let Q=J[$];return Q===void 0&&(Q=v(d()),J[$]=Q),Q}function v(b){const N=[],K=[],$=[];for(let te=0;te<t;te++)N[te]=0,K[te]=0,$[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:K,attributeDivisors:$,object:b,attributes:{},index:null}}function y(b,N,K,$){const te=a.attributes,J=N.attributes;let Q=0;const ce=K.getAttributes();for(const G in ce)if(ce[G].location>=0){const oe=te[G];let H=J[G];if(H===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(H=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(H=b.instanceColor)),oe===void 0||oe.attribute!==H||H&&oe.data!==H.data)return!0;Q++}return a.attributesNum!==Q||a.index!==$}function w(b,N,K,$){const te={},J=N.attributes;let Q=0;const ce=K.getAttributes();for(const G in ce)if(ce[G].location>=0){let oe=J[G];oe===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor));const H={};H.attribute=oe,oe&&oe.data&&(H.data=oe.data),te[G]=H,Q++}a.attributes=te,a.attributesNum=Q,a.index=$}function M(){const b=a.newAttributes;for(let N=0,K=b.length;N<K;N++)b[N]=0}function S(b){x(b,0)}function x(b,N){const K=a.newAttributes,$=a.enabledAttributes,te=a.attributeDivisors;K[b]=1,$[b]===0&&(s.enableVertexAttribArray(b),$[b]=1),te[b]!==N&&(s.vertexAttribDivisor(b,N),te[b]=N)}function A(){const b=a.newAttributes,N=a.enabledAttributes;for(let K=0,$=N.length;K<$;K++)N[K]!==b[K]&&(s.disableVertexAttribArray(K),N[K]=0)}function T(b,N,K,$,te,J,Q){Q===!0?s.vertexAttribIPointer(b,N,K,te,J):s.vertexAttribPointer(b,N,K,$,te,J)}function E(b,N,K,$){M();const te=$.attributes,J=K.getAttributes(),Q=N.defaultAttributeValues;for(const ce in J){const G=J[ce];if(G.location>=0){let he=te[ce];if(he===void 0&&(ce==="instanceMatrix"&&b.instanceMatrix&&(he=b.instanceMatrix),ce==="instanceColor"&&b.instanceColor&&(he=b.instanceColor)),he!==void 0){const oe=he.normalized,H=he.itemSize,se=e.get(he);if(se===void 0)continue;const Ue=se.buffer,ie=se.type,fe=se.bytesPerElement,Me=ie===s.INT||ie===s.UNSIGNED_INT||he.gpuType===_f;if(he.isInterleavedBufferAttribute){const ve=he.data,Le=ve.stride,ze=he.offset;if(ve.isInstancedInterleavedBuffer){for(let Xe=0;Xe<G.locationSize;Xe++)x(G.location+Xe,ve.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Xe=0;Xe<G.locationSize;Xe++)S(G.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Xe=0;Xe<G.locationSize;Xe++)T(G.location+Xe,H/G.locationSize,ie,oe,Le*fe,(ze+H/G.locationSize*Xe)*fe,Me)}else{if(he.isInstancedBufferAttribute){for(let ve=0;ve<G.locationSize;ve++)x(G.location+ve,he.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ve=0;ve<G.locationSize;ve++)S(G.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let ve=0;ve<G.locationSize;ve++)T(G.location+ve,H/G.locationSize,ie,oe,H*fe,H/G.locationSize*ve*fe,Me)}}else if(Q!==void 0){const oe=Q[ce];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(G.location,oe);break;case 3:s.vertexAttrib3fv(G.location,oe);break;case 4:s.vertexAttrib4fv(G.location,oe);break;default:s.vertexAttrib1fv(G.location,oe)}}}}A()}function z(){k();for(const b in i){const N=i[b];for(const K in N){const $=N[K];for(const te in $)p($[te].object),delete $[te];delete N[K]}delete i[b]}}function D(b){if(i[b.id]===void 0)return;const N=i[b.id];for(const K in N){const $=N[K];for(const te in $)p($[te].object),delete $[te];delete N[K]}delete i[b.id]}function F(b){for(const N in i){const K=i[N];if(K[b.id]===void 0)continue;const $=K[b.id];for(const te in $)p($[te].object),delete $[te];delete K[b.id]}}function k(){P(),c=!0,a!==o&&(a=o,f(a.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:k,resetDefaultState:P,dispose:z,releaseStatesOfGeometry:D,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:S,disableUnusedAttributes:A}}function nT(s,e,t){let i;function o(f){i=f}function a(f,p){s.drawArrays(i,f,p),t.update(p,i,1)}function c(f,p,g){g!==0&&(s.drawArraysInstanced(i,f,p,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,p,0,g);let y=0;for(let w=0;w<g;w++)y+=p[w];t.update(y,i,1)}function d(f,p,g,v){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let w=0;w<f.length;w++)c(f[w],p[w],v[w]);else{y.multiDrawArraysInstancedWEBGL(i,f,0,p,0,v,0,g);let w=0;for(let M=0;M<g;M++)w+=p[M]*v[M];t.update(w,i,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function iT(s,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==_i&&i.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const k=F===Oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==sr&&i.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ni&&!k)}function d(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=d(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=w>0,D=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:w,maxTextureSize:M,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:z,maxSamples:D}}function rT(s){const e=this;let t=null,i=0,o=!1,a=!1;const c=new cs,u=new xt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||i!==0||o;return o=v,i=g.length,y},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,v){t=p(g,v,0)},this.setState=function(g,v,y){const w=g.clippingPlanes,M=g.clipIntersection,S=g.clipShadows,x=s.get(g);if(!o||w===null||w.length===0||a&&!S)a?p(null):f();else{const A=a?0:i,T=A*4;let E=x.clippingState||null;d.value=E,E=p(w,v,T,y);for(let z=0;z!==T;++z)E[z]=t[z];x.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,v,y,w){const M=g!==null?g.length:0;let S=null;if(M!==0){if(S=d.value,w!==!0||S===null){const x=y+M*4,A=v.matrixWorldInverse;u.getNormalMatrix(A),(S===null||S.length<x)&&(S=new Float32Array(x));for(let T=0,E=y;T!==M;++T,E+=4)c.copy(g[T]).applyMatrix4(A,u),c.normal.toArray(S,E),S[E+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,S}}function sT(s){let e=new WeakMap;function t(c,u){return u===bd?c.mapping=_o:u===Ad&&(c.mapping=So),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===bd||u===Ad)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const f=new _1(d.height);return f.fromEquirectangularTexture(s,c),e.set(c,f),c.addEventListener("dispose",o),t(f.texture,c.mapping)}else return null}}return c}function o(c){const u=c.target;u.removeEventListener("dispose",o);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const ho=4,hg=[.125,.215,.35,.446,.526,.582],ds=20,ld=new Cv,dg=new dt;let cd=null,ud=0,hd=0,dd=!1;const us=(1+Math.sqrt(5))/2,lo=1/us,fg=[new V(-us,lo,0),new V(us,lo,0),new V(-lo,0,us),new V(lo,0,us),new V(0,us,-lo),new V(0,us,lo),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class pg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cd,ud,hd),this._renderer.xr.enabled=dd,e.scissorTest=!1,yc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_o||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:Oa,format:_i,colorSpace:Eo,depthBuffer:!1},o=mg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oT(a)),this._blurMaterial=aT(a,e,t)}return o}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,ld)}_sceneToCubeUV(e,t,i,o){const u=new Gn(90,1,t,i),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,g=p.autoClear,v=p.toneMapping;p.getClearColor(dg),p.toneMapping=Fr,p.autoClear=!1;const y=new on({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),w=new wt(new or,y);let M=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,M=!0):(y.color.copy(dg),M=!0);for(let x=0;x<6;x++){const A=x%3;A===0?(u.up.set(0,d[x],0),u.lookAt(f[x],0,0)):A===1?(u.up.set(0,0,d[x]),u.lookAt(0,f[x],0)):(u.up.set(0,d[x],0),u.lookAt(0,0,f[x]));const T=this._cubeSize;yc(o,A*T,x>2?T:0,T,T),p.setRenderTarget(o),M&&p.render(w,u),p.render(e,u)}w.geometry.dispose(),w.material.dispose(),p.toneMapping=v,p.autoClear=g,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===_o||e.mapping===So;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gg());const a=o?this._cubemapMaterial:this._equirectMaterial,c=new wt(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;yc(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,ld)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=fg[(o-a-1)%fg.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,o,"latitudinal",a),this._halfBlur(c,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,c,u){const d=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,g=new wt(this._lodPlanes[o],f),v=f.uniforms,y=this._sizeLods[i]-1,w=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*ds-1),M=a/w,S=isFinite(a)?1+Math.floor(p*M):ds;S>ds&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ds}`);const x=[];let A=0;for(let F=0;F<ds;++F){const k=F/M,P=Math.exp(-k*k/2);x.push(P),F===0?A+=P:F<S&&(A+=2*P)}for(let F=0;F<x.length;F++)x[F]=x[F]/A;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=c==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:T}=this;v.dTheta.value=w,v.mipInt.value=T-i;const E=this._sizeLods[o],z=3*E*(o>T-ho?o-T+ho:0),D=4*(this._cubeSize-E);yc(t,z,D,3*E,2*E),d.setRenderTarget(t),d.render(g,ld)}}function oT(s){const e=[],t=[],i=[];let o=s;const a=s-ho+1+hg.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);t.push(u);let d=1/u;c>s-ho?d=hg[c-s+ho-1]:c===0&&(d=0),i.push(d);const f=1/(u-2),p=-f,g=1+f,v=[p,p,g,p,g,g,p,p,g,g,p,g],y=6,w=6,M=3,S=2,x=1,A=new Float32Array(M*w*y),T=new Float32Array(S*w*y),E=new Float32Array(x*w*y);for(let D=0;D<y;D++){const F=D%3*2/3-1,k=D>2?0:-1,P=[F,k,0,F+2/3,k,0,F+2/3,k+1,0,F,k,0,F+2/3,k+1,0,F,k+1,0];A.set(P,M*w*D),T.set(v,S*w*D);const b=[D,D,D,D,D,D];E.set(b,x*w*D)}const z=new en;z.setAttribute("position",new Mi(A,M)),z.setAttribute("uv",new Mi(T,S)),z.setAttribute("faceIndex",new Mi(E,x)),e.push(z),o>ho&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function mg(s,e,t){const i=new ys(s,e,t);return i.texture.mapping=Vc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yc(s,e,t,i,o){s.viewport.set(e,t,i,o),s.scissor.set(e,t,i,o)}function aT(s,e,t){const i=new Float32Array(ds),o=new V(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:kf(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function gg(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kf(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function vg(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function kf(){return`

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
	`}function lT(s){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const d=u.mapping,f=d===bd||d===Ad,p=d===_o||d===So;if(f||p){let g=e.get(u);const v=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new pg(s)),g=f?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const y=u.image;return f&&y&&y.height>0||p&&y&&o(y)?(t===null&&(t=new pg(s)),g=f?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function o(u){let d=0;const f=6;for(let p=0;p<f;p++)u[p]!==void 0&&d++;return d===f}function a(u){const d=u.target;d.removeEventListener("dispose",a);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function cT(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&co("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function uT(s,e,t,i){const o={},a=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const w in v.attributes)e.remove(v.attributes[w]);v.removeEventListener("dispose",c),delete o[v.id];const y=a.get(v);y&&(e.remove(y),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(g,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const y in v)e.update(v[y],s.ARRAY_BUFFER)}function f(g){const v=[],y=g.index,w=g.attributes.position;let M=0;if(y!==null){const A=y.array;M=y.version;for(let T=0,E=A.length;T<E;T+=3){const z=A[T+0],D=A[T+1],F=A[T+2];v.push(z,D,D,F,F,z)}}else if(w!==void 0){const A=w.array;M=w.version;for(let T=0,E=A.length/3-1;T<E;T+=3){const z=T+0,D=T+1,F=T+2;v.push(z,D,D,F,F,z)}}else return;const S=new(hv(v)?gv:mv)(v,1);S.version=M;const x=a.get(g);x&&e.remove(x),a.set(g,S)}function p(g){const v=a.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&f(g)}else f(g);return a.get(g)}return{get:u,update:d,getWireframeAttribute:p}}function hT(s,e,t){let i;function o(v){i=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function d(v,y){s.drawElements(i,y,a,v*c),t.update(y,i,1)}function f(v,y,w){w!==0&&(s.drawElementsInstanced(i,y,a,v*c,w),t.update(y,i,w))}function p(v,y,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,v,0,w);let S=0;for(let x=0;x<w;x++)S+=y[x];t.update(S,i,1)}function g(v,y,w,M){if(w===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)f(v[x]/c,y[x],M[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,a,v,0,M,0,w);let x=0;for(let A=0;A<w;A++)x+=y[A]*M[A];t.update(x,i,1)}}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function dT(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=u*(a/3);break;case s.LINES:t.lines+=u*(a/2);break;case s.LINE_STRIP:t.lines+=u*(a-1);break;case s.LINE_LOOP:t.lines+=u*a;break;case s.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function fT(s,e,t){const i=new WeakMap,o=new Ot;function a(c,u,d){const f=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let v=i.get(u);if(v===void 0||v.count!==g){let b=function(){k.dispose(),i.delete(u),u.removeEventListener("dispose",b)};var y=b;v!==void 0&&v.texture.dispose();const w=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let E=0;w===!0&&(E=1),M===!0&&(E=2),S===!0&&(E=3);let z=u.attributes.position.count*E,D=1;z>e.maxTextureSize&&(D=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const F=new Float32Array(z*D*4*g),k=new fv(F,z,D,g);k.type=Ni,k.needsUpdate=!0;const P=E*4;for(let N=0;N<g;N++){const K=x[N],$=A[N],te=T[N],J=z*D*4*N;for(let Q=0;Q<K.count;Q++){const ce=Q*P;w===!0&&(o.fromBufferAttribute(K,Q),F[J+ce+0]=o.x,F[J+ce+1]=o.y,F[J+ce+2]=o.z,F[J+ce+3]=0),M===!0&&(o.fromBufferAttribute($,Q),F[J+ce+4]=o.x,F[J+ce+5]=o.y,F[J+ce+6]=o.z,F[J+ce+7]=0),S===!0&&(o.fromBufferAttribute(te,Q),F[J+ce+8]=o.x,F[J+ce+9]=o.y,F[J+ce+10]=o.z,F[J+ce+11]=te.itemSize===4?o.w:1)}}v={count:g,texture:k,size:new Ie(z,D)},i.set(u,v),u.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let w=0;for(let S=0;S<f.length;S++)w+=f[S];const M=u.morphTargetsRelative?1:1-w;d.getUniforms().setValue(s,"morphTargetBaseInfluence",M),d.getUniforms().setValue(s,"morphTargetInfluences",f)}d.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:a}}function pT(s,e,t,i){let o=new WeakMap;function a(d){const f=i.render.frame,p=d.geometry,g=e.get(d,p);if(o.get(g)!==f&&(e.update(g),o.set(g,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),o.get(d)!==f&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),o.set(d,f))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==f&&(v.update(),o.set(v,f))}return g}function c(){o=new WeakMap}function u(d){const f=d.target;f.removeEventListener("dispose",u),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:c}}const Pv=new Dn,xg=new _v(1,1),Lv=new fv,Nv=new r1,Iv=new yv,yg=[],_g=[],Sg=new Float32Array(16),wg=new Float32Array(9),Mg=new Float32Array(4);function Io(s,e,t){const i=s[0];if(i<=0||i>0)return s;const o=e*t;let a=yg[o];if(a===void 0&&(a=new Float32Array(o),yg[o]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,s[c].toArray(a,u)}return a}function hn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function dn(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Xc(s,e){let t=_g[e];t===void 0&&(t=new Int32Array(e),_g[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function mT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function gT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2fv(this.addr,e),dn(t,e)}}function vT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;s.uniform3fv(this.addr,e),dn(t,e)}}function xT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4fv(this.addr,e),dn(t,e)}}function yT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;Mg.set(i),s.uniformMatrix2fv(this.addr,!1,Mg),dn(t,i)}}function _T(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;wg.set(i),s.uniformMatrix3fv(this.addr,!1,wg),dn(t,i)}}function ST(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(hn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(hn(t,i))return;Sg.set(i),s.uniformMatrix4fv(this.addr,!1,Sg),dn(t,i)}}function wT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function MT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2iv(this.addr,e),dn(t,e)}}function ET(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3iv(this.addr,e),dn(t,e)}}function TT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4iv(this.addr,e),dn(t,e)}}function bT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function AT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;s.uniform2uiv(this.addr,e),dn(t,e)}}function CT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;s.uniform3uiv(this.addr,e),dn(t,e)}}function RT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;s.uniform4uiv(this.addr,e),dn(t,e)}}function PT(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);let a;this.type===s.SAMPLER_2D_SHADOW?(xg.compareFunction=uv,a=xg):a=Pv,t.setTexture2D(e||a,o)}function LT(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||Nv,o)}function NT(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||Iv,o)}function IT(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||Lv,o)}function DT(s){switch(s){case 5126:return mT;case 35664:return gT;case 35665:return vT;case 35666:return xT;case 35674:return yT;case 35675:return _T;case 35676:return ST;case 5124:case 35670:return wT;case 35667:case 35671:return MT;case 35668:case 35672:return ET;case 35669:case 35673:return TT;case 5125:return bT;case 36294:return AT;case 36295:return CT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return NT;case 36289:case 36303:case 36311:case 36292:return IT}}function UT(s,e){s.uniform1fv(this.addr,e)}function FT(s,e){const t=Io(e,this.size,2);s.uniform2fv(this.addr,t)}function kT(s,e){const t=Io(e,this.size,3);s.uniform3fv(this.addr,t)}function OT(s,e){const t=Io(e,this.size,4);s.uniform4fv(this.addr,t)}function zT(s,e){const t=Io(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function BT(s,e){const t=Io(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function HT(s,e){const t=Io(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function VT(s,e){s.uniform1iv(this.addr,e)}function GT(s,e){s.uniform2iv(this.addr,e)}function WT(s,e){s.uniform3iv(this.addr,e)}function jT(s,e){s.uniform4iv(this.addr,e)}function XT(s,e){s.uniform1uiv(this.addr,e)}function $T(s,e){s.uniform2uiv(this.addr,e)}function YT(s,e){s.uniform3uiv(this.addr,e)}function qT(s,e){s.uniform4uiv(this.addr,e)}function KT(s,e,t){const i=this.cache,o=e.length,a=Xc(t,o);hn(i,a)||(s.uniform1iv(this.addr,a),dn(i,a));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||Pv,a[c])}function ZT(s,e,t){const i=this.cache,o=e.length,a=Xc(t,o);hn(i,a)||(s.uniform1iv(this.addr,a),dn(i,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Nv,a[c])}function JT(s,e,t){const i=this.cache,o=e.length,a=Xc(t,o);hn(i,a)||(s.uniform1iv(this.addr,a),dn(i,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||Iv,a[c])}function QT(s,e,t){const i=this.cache,o=e.length,a=Xc(t,o);hn(i,a)||(s.uniform1iv(this.addr,a),dn(i,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Lv,a[c])}function eb(s){switch(s){case 5126:return UT;case 35664:return FT;case 35665:return kT;case 35666:return OT;case 35674:return zT;case 35675:return BT;case 35676:return HT;case 5124:case 35670:return VT;case 35667:case 35671:return GT;case 35668:case 35672:return WT;case 35669:case 35673:return jT;case 5125:return XT;case 36294:return $T;case 36295:return YT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return QT}}class tb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=DT(t.type)}}class nb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eb(t.type)}}class ib{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],i)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function Eg(s,e){s.seq.push(e),s.map[e.id]=e}function rb(s,e,t){const i=s.name,o=i.length;for(fd.lastIndex=0;;){const a=fd.exec(i),c=fd.lastIndex;let u=a[1];const d=a[2]==="]",f=a[3];if(d&&(u=u|0),f===void 0||f==="["&&c+2===o){Eg(t,f===void 0?new tb(u,s,e):new nb(u,s,e));break}else{let g=t.map[u];g===void 0&&(g=new ib(u),Eg(t,g)),t=g}}}class Pc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);rb(a,c,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=i[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&i.push(c)}return i}}function Tg(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const sb=37297;let ob=0;function ab(s,e){const t=s.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const bg=new xt;function lb(s){Nt._getMatrix(bg,Nt.workingColorSpace,s);const e=`mat3( ${bg.elements.map(t=>t.toFixed(4))} )`;switch(Nt.getTransfer(s)){case Nc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ag(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+ab(s.getShaderSource(e),c)}else return o}function cb(s,e){const t=lb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ub(s,e){let t;switch(e){case PS:t="Linear";break;case LS:t="Reinhard";break;case NS:t="Cineon";break;case IS:t="ACESFilmic";break;case US:t="AgX";break;case FS:t="Neutral";break;case DS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _c=new V;function hb(){Nt.getLuminanceCoefficients(_c);const s=_c.x.toFixed(4),e=_c.y.toFixed(4),t=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function db(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function fb(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pb(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=s.getActiveAttrib(e,o),c=a.name;let u=1;a.type===s.FLOAT_MAT2&&(u=2),a.type===s.FLOAT_MAT3&&(u=3),a.type===s.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:s.getAttribLocation(e,c),locationSize:u}}return t}function Ea(s){return s!==""}function Cg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(s){return s.replace(mb,vb)}const gb=new Map;function vb(s,e){let t=yt[e];if(t===void 0){const i=gb.get(e);if(i!==void 0)t=yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lf(t)}const xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pg(s){return s.replace(xb,yb)}function yb(s,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Lg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _b(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===cS?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function Sb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _o:case So:e="ENVMAP_TYPE_CUBE";break;case Vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case So:e="ENVMAP_MODE_REFRACTION";break}return e}function Mb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case yf:e="ENVMAP_BLENDING_MULTIPLY";break;case CS:e="ENVMAP_BLENDING_MIX";break;case RS:e="ENVMAP_BLENDING_ADD";break}return e}function Eb(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Tb(s,e,t,i){const o=s.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=_b(t),f=Sb(t),p=wb(t),g=Mb(t),v=Eb(t),y=db(t),w=fb(a),M=o.createProgram();let S,x,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Ea).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Ea).join(`
`),x.length>0&&(x+=`
`)):(S=[Lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),x=[Lg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fr?"#define TONE_MAPPING":"",t.toneMapping!==Fr?yt.tonemapping_pars_fragment:"",t.toneMapping!==Fr?ub("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,cb("linearToOutputTexel",t.outputColorSpace),hb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),c=lf(c),c=Cg(c,t),c=Rg(c,t),u=lf(u),u=Cg(u,t),u=Rg(u,t),c=Pg(c),u=Pg(u),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===A0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===A0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const T=A+S+c,E=A+x+u,z=Tg(o,o.VERTEX_SHADER,T),D=Tg(o,o.FRAGMENT_SHADER,E);o.attachShader(M,z),o.attachShader(M,D),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function F(N){if(s.debug.checkShaderErrors){const K=o.getProgramInfoLog(M).trim(),$=o.getShaderInfoLog(z).trim(),te=o.getShaderInfoLog(D).trim();let J=!0,Q=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,M,z,D);else{const ce=Ag(o,z,"vertex"),G=Ag(o,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+K+`
`+ce+`
`+G)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):($===""||te==="")&&(Q=!1);Q&&(N.diagnostics={runnable:J,programLog:K,vertexShader:{log:$,prefix:S},fragmentShader:{log:te,prefix:x}})}o.deleteShader(z),o.deleteShader(D),k=new Pc(o,M),P=pb(o,M)}let k;this.getUniforms=function(){return k===void 0&&F(this),k};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=o.getProgramParameter(M,sb)),b},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ob++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=z,this.fragmentShader=D,this}let bb=0;class Ab{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Cb(e),t.set(e,i)),i}}class Cb{constructor(e){this.id=bb++,this.code=e,this.usedTimes=0}}function Rb(s,e,t,i,o,a,c){const u=new Cf,d=new Ab,f=new Set,p=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let y=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(P){return f.add(P),P===0?"uv":`uv${P}`}function S(P,b,N,K,$){const te=K.fog,J=$.geometry,Q=P.isMeshStandardMaterial?K.environment:null,ce=(P.isMeshStandardMaterial?t:e).get(P.envMap||Q),G=ce&&ce.mapping===Vc?ce.image.height:null,he=w[P.type];P.precision!==null&&(y=o.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const oe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,H=oe!==void 0?oe.length:0;let se=0;J.morphAttributes.position!==void 0&&(se=1),J.morphAttributes.normal!==void 0&&(se=2),J.morphAttributes.color!==void 0&&(se=3);let Ue,ie,fe,Me;if(he){const At=Pi[he];Ue=At.vertexShader,ie=At.fragmentShader}else Ue=P.vertexShader,ie=P.fragmentShader,d.update(P),fe=d.getVertexShaderID(P),Me=d.getFragmentShaderID(P);const ve=s.getRenderTarget(),Le=s.state.buffers.depth.getReversed(),ze=$.isInstancedMesh===!0,Xe=$.isBatchedMesh===!0,gt=!!P.map,xe=!!P.matcap,be=!!ce,O=!!P.aoMap,Qe=!!P.lightMap,we=!!P.bumpMap,Ve=!!P.normalMap,Re=!!P.displacementMap,it=!!P.emissiveMap,Ee=!!P.metalnessMap,U=!!P.roughnessMap,L=P.anisotropy>0,ne=P.clearcoat>0,pe=P.dispersion>0,ye=P.iridescence>0,me=P.sheen>0,$e=P.transmission>0,De=L&&!!P.anisotropyMap,We=ne&&!!P.clearcoatMap,vt=ne&&!!P.clearcoatNormalMap,Ae=ne&&!!P.clearcoatRoughnessMap,Ke=ye&&!!P.iridescenceMap,st=ye&&!!P.iridescenceThicknessMap,lt=me&&!!P.sheenColorMap,Ze=me&&!!P.sheenRoughnessMap,_t=!!P.specularMap,ft=!!P.specularColorMap,Dt=!!P.specularIntensityMap,q=$e&&!!P.transmissionMap,Fe=$e&&!!P.thicknessMap,de=!!P.gradientMap,ge=!!P.alphaMap,He=P.alphaTest>0,Be=!!P.alphaHash,pt=!!P.extensions;let Ht=Fr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ht=s.toneMapping);const ln={shaderID:he,shaderType:P.type,shaderName:P.name,vertexShader:Ue,fragmentShader:ie,defines:P.defines,customVertexShaderID:fe,customFragmentShaderID:Me,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Xe,batchingColor:Xe&&$._colorsTexture!==null,instancing:ze,instancingColor:ze&&$.instanceColor!==null,instancingMorph:ze&&$.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Eo,alphaToCoverage:!!P.alphaToCoverage,map:gt,matcap:xe,envMap:be,envMapMode:be&&ce.mapping,envMapCubeUVHeight:G,aoMap:O,lightMap:Qe,bumpMap:we,normalMap:Ve,displacementMap:v&&Re,emissiveMap:it,normalMapObjectSpace:Ve&&P.normalMapType===BS,normalMapTangentSpace:Ve&&P.normalMapType===cv,metalnessMap:Ee,roughnessMap:U,anisotropy:L,anisotropyMap:De,clearcoat:ne,clearcoatMap:We,clearcoatNormalMap:vt,clearcoatRoughnessMap:Ae,dispersion:pe,iridescence:ye,iridescenceMap:Ke,iridescenceThicknessMap:st,sheen:me,sheenColorMap:lt,sheenRoughnessMap:Ze,specularMap:_t,specularColorMap:ft,specularIntensityMap:Dt,transmission:$e,transmissionMap:q,thicknessMap:Fe,gradientMap:de,opaque:P.transparent===!1&&P.blending===po&&P.alphaToCoverage===!1,alphaMap:ge,alphaTest:He,alphaHash:Be,combine:P.combine,mapUv:gt&&M(P.map.channel),aoMapUv:O&&M(P.aoMap.channel),lightMapUv:Qe&&M(P.lightMap.channel),bumpMapUv:we&&M(P.bumpMap.channel),normalMapUv:Ve&&M(P.normalMap.channel),displacementMapUv:Re&&M(P.displacementMap.channel),emissiveMapUv:it&&M(P.emissiveMap.channel),metalnessMapUv:Ee&&M(P.metalnessMap.channel),roughnessMapUv:U&&M(P.roughnessMap.channel),anisotropyMapUv:De&&M(P.anisotropyMap.channel),clearcoatMapUv:We&&M(P.clearcoatMap.channel),clearcoatNormalMapUv:vt&&M(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&M(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&M(P.iridescenceMap.channel),iridescenceThicknessMapUv:st&&M(P.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&M(P.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&M(P.sheenRoughnessMap.channel),specularMapUv:_t&&M(P.specularMap.channel),specularColorMapUv:ft&&M(P.specularColorMap.channel),specularIntensityMapUv:Dt&&M(P.specularIntensityMap.channel),transmissionMapUv:q&&M(P.transmissionMap.channel),thicknessMapUv:Fe&&M(P.thicknessMap.channel),alphaMapUv:ge&&M(P.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ve||L),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!J.attributes.uv&&(gt||ge),fog:!!te,useFog:P.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Le,skinning:$.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ht,decodeVideoTexture:gt&&P.map.isVideoTexture===!0&&Nt.getTransfer(P.map.colorSpace)===kt,decodeVideoTextureEmissive:it&&P.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(P.emissiveMap.colorSpace)===kt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Kt,flipSided:P.side===jn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:pt&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&P.extensions.multiDraw===!0||Xe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return ln.vertexUv1s=f.has(1),ln.vertexUv2s=f.has(2),ln.vertexUv3s=f.has(3),f.clear(),ln}function x(P){const b=[];if(P.shaderID?b.push(P.shaderID):(b.push(P.customVertexShaderID),b.push(P.customFragmentShaderID)),P.defines!==void 0)for(const N in P.defines)b.push(N),b.push(P.defines[N]);return P.isRawShaderMaterial===!1&&(A(b,P),T(b,P),b.push(s.outputColorSpace)),b.push(P.customProgramCacheKey),b.join()}function A(P,b){P.push(b.precision),P.push(b.outputColorSpace),P.push(b.envMapMode),P.push(b.envMapCubeUVHeight),P.push(b.mapUv),P.push(b.alphaMapUv),P.push(b.lightMapUv),P.push(b.aoMapUv),P.push(b.bumpMapUv),P.push(b.normalMapUv),P.push(b.displacementMapUv),P.push(b.emissiveMapUv),P.push(b.metalnessMapUv),P.push(b.roughnessMapUv),P.push(b.anisotropyMapUv),P.push(b.clearcoatMapUv),P.push(b.clearcoatNormalMapUv),P.push(b.clearcoatRoughnessMapUv),P.push(b.iridescenceMapUv),P.push(b.iridescenceThicknessMapUv),P.push(b.sheenColorMapUv),P.push(b.sheenRoughnessMapUv),P.push(b.specularMapUv),P.push(b.specularColorMapUv),P.push(b.specularIntensityMapUv),P.push(b.transmissionMapUv),P.push(b.thicknessMapUv),P.push(b.combine),P.push(b.fogExp2),P.push(b.sizeAttenuation),P.push(b.morphTargetsCount),P.push(b.morphAttributeCount),P.push(b.numDirLights),P.push(b.numPointLights),P.push(b.numSpotLights),P.push(b.numSpotLightMaps),P.push(b.numHemiLights),P.push(b.numRectAreaLights),P.push(b.numDirLightShadows),P.push(b.numPointLightShadows),P.push(b.numSpotLightShadows),P.push(b.numSpotLightShadowsWithMaps),P.push(b.numLightProbes),P.push(b.shadowMapType),P.push(b.toneMapping),P.push(b.numClippingPlanes),P.push(b.numClipIntersection),P.push(b.depthPacking)}function T(P,b){u.disableAll(),b.supportsVertexTextures&&u.enable(0),b.instancing&&u.enable(1),b.instancingColor&&u.enable(2),b.instancingMorph&&u.enable(3),b.matcap&&u.enable(4),b.envMap&&u.enable(5),b.normalMapObjectSpace&&u.enable(6),b.normalMapTangentSpace&&u.enable(7),b.clearcoat&&u.enable(8),b.iridescence&&u.enable(9),b.alphaTest&&u.enable(10),b.vertexColors&&u.enable(11),b.vertexAlphas&&u.enable(12),b.vertexUv1s&&u.enable(13),b.vertexUv2s&&u.enable(14),b.vertexUv3s&&u.enable(15),b.vertexTangents&&u.enable(16),b.anisotropy&&u.enable(17),b.alphaHash&&u.enable(18),b.batching&&u.enable(19),b.dispersion&&u.enable(20),b.batchingColor&&u.enable(21),P.push(u.mask),u.disableAll(),b.fog&&u.enable(0),b.useFog&&u.enable(1),b.flatShading&&u.enable(2),b.logarithmicDepthBuffer&&u.enable(3),b.reverseDepthBuffer&&u.enable(4),b.skinning&&u.enable(5),b.morphTargets&&u.enable(6),b.morphNormals&&u.enable(7),b.morphColors&&u.enable(8),b.premultipliedAlpha&&u.enable(9),b.shadowMapEnabled&&u.enable(10),b.doubleSided&&u.enable(11),b.flipSided&&u.enable(12),b.useDepthPacking&&u.enable(13),b.dithering&&u.enable(14),b.transmission&&u.enable(15),b.sheen&&u.enable(16),b.opaque&&u.enable(17),b.pointsUvs&&u.enable(18),b.decodeVideoTexture&&u.enable(19),b.decodeVideoTextureEmissive&&u.enable(20),b.alphaToCoverage&&u.enable(21),P.push(u.mask)}function E(P){const b=w[P.type];let N;if(b){const K=Pi[b];N=g1.clone(K.uniforms)}else N=P.uniforms;return N}function z(P,b){let N;for(let K=0,$=p.length;K<$;K++){const te=p[K];if(te.cacheKey===b){N=te,++N.usedTimes;break}}return N===void 0&&(N=new Tb(s,b,P,a),p.push(N)),N}function D(P){if(--P.usedTimes===0){const b=p.indexOf(P);p[b]=p[p.length-1],p.pop(),P.destroy()}}function F(P){d.remove(P)}function k(){d.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:E,acquireProgram:z,releaseProgram:D,releaseShaderCache:F,programs:p,dispose:k}}function Pb(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let u=s.get(c);return u===void 0&&(u={},s.set(c,u)),u}function i(c){s.delete(c)}function o(c,u,d){s.get(c)[u]=d}function a(){s=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function Lb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ng(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ig(){const s=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function c(g,v,y,w,M,S){let x=s[e];return x===void 0?(x={id:g.id,object:g,geometry:v,material:y,groupOrder:w,renderOrder:g.renderOrder,z:M,group:S},s[e]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=y,x.groupOrder=w,x.renderOrder=g.renderOrder,x.z=M,x.group=S),e++,x}function u(g,v,y,w,M,S){const x=c(g,v,y,w,M,S);y.transmission>0?i.push(x):y.transparent===!0?o.push(x):t.push(x)}function d(g,v,y,w,M,S){const x=c(g,v,y,w,M,S);y.transmission>0?i.unshift(x):y.transparent===!0?o.unshift(x):t.unshift(x)}function f(g,v){t.length>1&&t.sort(g||Lb),i.length>1&&i.sort(v||Ng),o.length>1&&o.sort(v||Ng)}function p(){for(let g=e,v=s.length;g<v;g++){const y=s[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:u,unshift:d,finish:p,sort:f}}function Nb(){let s=new WeakMap;function e(i,o){const a=s.get(i);let c;return a===void 0?(c=new Ig,s.set(i,[c])):o>=a.length?(c=new Ig,a.push(c)):c=a[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ib(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new dt};break;case"SpotLight":t={position:new V,direction:new V,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function Db(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ub=0;function Fb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function kb(s){const e=new Ib,t=Db(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new V);const o=new V,a=new It,c=new It;function u(f){let p=0,g=0,v=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let y=0,w=0,M=0,S=0,x=0,A=0,T=0,E=0,z=0,D=0,F=0;f.sort(Fb);for(let P=0,b=f.length;P<b;P++){const N=f[P],K=N.color,$=N.intensity,te=N.distance,J=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)p+=K.r*$,g+=K.g*$,v+=K.b*$;else if(N.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(N.sh.coefficients[Q],$);F++}else if(N.isDirectionalLight){const Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ce=N.shadow,G=t.get(N);G.shadowIntensity=ce.intensity,G.shadowBias=ce.bias,G.shadowNormalBias=ce.normalBias,G.shadowRadius=ce.radius,G.shadowMapSize=ce.mapSize,i.directionalShadow[y]=G,i.directionalShadowMap[y]=J,i.directionalShadowMatrix[y]=N.shadow.matrix,A++}i.directional[y]=Q,y++}else if(N.isSpotLight){const Q=e.get(N);Q.position.setFromMatrixPosition(N.matrixWorld),Q.color.copy(K).multiplyScalar($),Q.distance=te,Q.coneCos=Math.cos(N.angle),Q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Q.decay=N.decay,i.spot[M]=Q;const ce=N.shadow;if(N.map&&(i.spotLightMap[z]=N.map,z++,ce.updateMatrices(N),N.castShadow&&D++),i.spotLightMatrix[M]=ce.matrix,N.castShadow){const G=t.get(N);G.shadowIntensity=ce.intensity,G.shadowBias=ce.bias,G.shadowNormalBias=ce.normalBias,G.shadowRadius=ce.radius,G.shadowMapSize=ce.mapSize,i.spotShadow[M]=G,i.spotShadowMap[M]=J,E++}M++}else if(N.isRectAreaLight){const Q=e.get(N);Q.color.copy(K).multiplyScalar($),Q.halfWidth.set(N.width*.5,0,0),Q.halfHeight.set(0,N.height*.5,0),i.rectArea[S]=Q,S++}else if(N.isPointLight){const Q=e.get(N);if(Q.color.copy(N.color).multiplyScalar(N.intensity),Q.distance=N.distance,Q.decay=N.decay,N.castShadow){const ce=N.shadow,G=t.get(N);G.shadowIntensity=ce.intensity,G.shadowBias=ce.bias,G.shadowNormalBias=ce.normalBias,G.shadowRadius=ce.radius,G.shadowMapSize=ce.mapSize,G.shadowCameraNear=ce.camera.near,G.shadowCameraFar=ce.camera.far,i.pointShadow[w]=G,i.pointShadowMap[w]=J,i.pointShadowMatrix[w]=N.shadow.matrix,T++}i.point[w]=Q,w++}else if(N.isHemisphereLight){const Q=e.get(N);Q.skyColor.copy(N.color).multiplyScalar($),Q.groundColor.copy(N.groundColor).multiplyScalar($),i.hemi[x]=Q,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=v;const k=i.hash;(k.directionalLength!==y||k.pointLength!==w||k.spotLength!==M||k.rectAreaLength!==S||k.hemiLength!==x||k.numDirectionalShadows!==A||k.numPointShadows!==T||k.numSpotShadows!==E||k.numSpotMaps!==z||k.numLightProbes!==F)&&(i.directional.length=y,i.spot.length=M,i.rectArea.length=S,i.point.length=w,i.hemi.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+z-D,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=F,k.directionalLength=y,k.pointLength=w,k.spotLength=M,k.rectAreaLength=S,k.hemiLength=x,k.numDirectionalShadows=A,k.numPointShadows=T,k.numSpotShadows=E,k.numSpotMaps=z,k.numLightProbes=F,i.version=Ub++)}function d(f,p){let g=0,v=0,y=0,w=0,M=0;const S=p.matrixWorldInverse;for(let x=0,A=f.length;x<A;x++){const T=f[x];if(T.isDirectionalLight){const E=i.directional[g];E.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(S),g++}else if(T.isSpotLight){const E=i.spot[y];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(S),E.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(S),y++}else if(T.isRectAreaLight){const E=i.rectArea[w];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(S),c.identity(),a.copy(T.matrixWorld),a.premultiply(S),c.extractRotation(a),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(c),E.halfHeight.applyMatrix4(c),w++}else if(T.isPointLight){const E=i.point[v];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(S),v++}else if(T.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(S),M++}}}return{setup:u,setupView:d,state:i}}function Dg(s){const e=new kb(s),t=[],i=[];function o(p){f.camera=p,t.length=0,i.length=0}function a(p){t.push(p)}function c(p){i.push(p)}function u(){e.setup(t)}function d(p){e.setupView(t,p)}const f={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:f,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:c}}function Ob(s){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new Dg(s),e.set(o,[u])):a>=c.length?(u=new Dg(s),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const zb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bb=`uniform sampler2D shadow_pass;
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
}`;function Hb(s,e,t){let i=new Rf;const o=new Ie,a=new Ie,c=new Ot,u=new rw({depthPacking:zS}),d=new sw,f={},p=t.maxTextureSize,g={[Or]:jn,[jn]:Or,[Kt]:Kt},v=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:zb,fragmentShader:Bb}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const w=new en;w.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new wt(w,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jg;let x=this.type;this.render=function(D,F,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||D.length===0)return;const P=s.getRenderTarget(),b=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),K=s.state;K.setBlending(Ur),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const $=x!==Qi&&this.type===Qi,te=x===Qi&&this.type!==Qi;for(let J=0,Q=D.length;J<Q;J++){const ce=D[J],G=ce.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const he=G.getFrameExtents();if(o.multiply(he),a.copy(G.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/he.x),o.x=a.x*he.x,G.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/he.y),o.y=a.y*he.y,G.mapSize.y=a.y)),G.map===null||$===!0||te===!0){const H=this.type!==Qi?{minFilter:Qn,magFilter:Qn}:{};G.map!==null&&G.map.dispose(),G.map=new ys(o.x,o.y,H),G.map.texture.name=ce.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const oe=G.getViewportCount();for(let H=0;H<oe;H++){const se=G.getViewport(H);c.set(a.x*se.x,a.y*se.y,a.x*se.z,a.y*se.w),K.viewport(c),G.updateMatrices(ce,H),i=G.getFrustum(),E(F,k,G.camera,ce,this.type)}G.isPointLightShadow!==!0&&this.type===Qi&&A(G,k),G.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(P,b,N)};function A(D,F){const k=e.update(M);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ys(o.x,o.y)),v.uniforms.shadow_pass.value=D.map.texture,v.uniforms.resolution.value=D.mapSize,v.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(F,null,k,v,M,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(F,null,k,y,M,null)}function T(D,F,k,P){let b=null;const N=k.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(N!==void 0)b=N;else if(b=k.isPointLight===!0?d:u,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const K=b.uuid,$=F.uuid;let te=f[K];te===void 0&&(te={},f[K]=te);let J=te[$];J===void 0&&(J=b.clone(),te[$]=J,F.addEventListener("dispose",z)),b=J}if(b.visible=F.visible,b.wireframe=F.wireframe,P===Qi?b.side=F.shadowSide!==null?F.shadowSide:F.side:b.side=F.shadowSide!==null?F.shadowSide:g[F.side],b.alphaMap=F.alphaMap,b.alphaTest=F.alphaTest,b.map=F.map,b.clipShadows=F.clipShadows,b.clippingPlanes=F.clippingPlanes,b.clipIntersection=F.clipIntersection,b.displacementMap=F.displacementMap,b.displacementScale=F.displacementScale,b.displacementBias=F.displacementBias,b.wireframeLinewidth=F.wireframeLinewidth,b.linewidth=F.linewidth,k.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const K=s.properties.get(b);K.light=k}return b}function E(D,F,k,P,b){if(D.visible===!1)return;if(D.layers.test(F.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&b===Qi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,D.matrixWorld);const $=e.update(D),te=D.material;if(Array.isArray(te)){const J=$.groups;for(let Q=0,ce=J.length;Q<ce;Q++){const G=J[Q],he=te[G.materialIndex];if(he&&he.visible){const oe=T(D,he,P,b);D.onBeforeShadow(s,D,F,k,$,oe,G),s.renderBufferDirect(k,null,$,oe,D,G),D.onAfterShadow(s,D,F,k,$,oe,G)}}}else if(te.visible){const J=T(D,te,P,b);D.onBeforeShadow(s,D,F,k,$,J,null),s.renderBufferDirect(k,null,$,J,D,null),D.onAfterShadow(s,D,F,k,$,J,null)}}const K=D.children;for(let $=0,te=K.length;$<te;$++)E(K[$],F,k,P,b)}function z(D){D.target.removeEventListener("dispose",z);for(const k in f){const P=f[k],b=D.target.uuid;b in P&&(P[b].dispose(),delete P[b])}}}const Vb={[yd]:_d,[Sd]:Ed,[wd]:Td,[yo]:Md,[_d]:yd,[Ed]:Sd,[Td]:wd,[Md]:yo};function Gb(s,e){function t(){let q=!1;const Fe=new Ot;let de=null;const ge=new Ot(0,0,0,0);return{setMask:function(He){de!==He&&!q&&(s.colorMask(He,He,He,He),de=He)},setLocked:function(He){q=He},setClear:function(He,Be,pt,Ht,ln){ln===!0&&(He*=Ht,Be*=Ht,pt*=Ht),Fe.set(He,Be,pt,Ht),ge.equals(Fe)===!1&&(s.clearColor(He,Be,pt,Ht),ge.copy(Fe))},reset:function(){q=!1,de=null,ge.set(-1,0,0,0)}}}function i(){let q=!1,Fe=!1,de=null,ge=null,He=null;return{setReversed:function(Be){if(Fe!==Be){const pt=e.get("EXT_clip_control");Fe?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);const Ht=He;He=null,this.setClear(Ht)}Fe=Be},getReversed:function(){return Fe},setTest:function(Be){Be?ve(s.DEPTH_TEST):Le(s.DEPTH_TEST)},setMask:function(Be){de!==Be&&!q&&(s.depthMask(Be),de=Be)},setFunc:function(Be){if(Fe&&(Be=Vb[Be]),ge!==Be){switch(Be){case yd:s.depthFunc(s.NEVER);break;case _d:s.depthFunc(s.ALWAYS);break;case Sd:s.depthFunc(s.LESS);break;case yo:s.depthFunc(s.LEQUAL);break;case wd:s.depthFunc(s.EQUAL);break;case Md:s.depthFunc(s.GEQUAL);break;case Ed:s.depthFunc(s.GREATER);break;case Td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=Be}},setLocked:function(Be){q=Be},setClear:function(Be){He!==Be&&(Fe&&(Be=1-Be),s.clearDepth(Be),He=Be)},reset:function(){q=!1,de=null,ge=null,He=null,Fe=!1}}}function o(){let q=!1,Fe=null,de=null,ge=null,He=null,Be=null,pt=null,Ht=null,ln=null;return{setTest:function(At){q||(At?ve(s.STENCIL_TEST):Le(s.STENCIL_TEST))},setMask:function(At){Fe!==At&&!q&&(s.stencilMask(At),Fe=At)},setFunc:function(At,Un,Cn){(de!==At||ge!==Un||He!==Cn)&&(s.stencilFunc(At,Un,Cn),de=At,ge=Un,He=Cn)},setOp:function(At,Un,Cn){(Be!==At||pt!==Un||Ht!==Cn)&&(s.stencilOp(At,Un,Cn),Be=At,pt=Un,Ht=Cn)},setLocked:function(At){q=At},setClear:function(At){ln!==At&&(s.clearStencil(At),ln=At)},reset:function(){q=!1,Fe=null,de=null,ge=null,He=null,Be=null,pt=null,Ht=null,ln=null}}}const a=new t,c=new i,u=new o,d=new WeakMap,f=new WeakMap;let p={},g={},v=new WeakMap,y=[],w=null,M=!1,S=null,x=null,A=null,T=null,E=null,z=null,D=null,F=new dt(0,0,0),k=0,P=!1,b=null,N=null,K=null,$=null,te=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ce=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(G)[1]),Q=ce>=1):G.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Q=ce>=2);let he=null,oe={};const H=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),Ue=new Ot().fromArray(H),ie=new Ot().fromArray(se);function fe(q,Fe,de,ge){const He=new Uint8Array(4),Be=s.createTexture();s.bindTexture(q,Be),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pt=0;pt<de;pt++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Fe,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,He):s.texImage2D(Fe+pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,He);return Be}const Me={};Me[s.TEXTURE_2D]=fe(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=fe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=fe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=fe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ve(s.DEPTH_TEST),c.setFunc(yo),we(!1),Ve(w0),ve(s.CULL_FACE),O(Ur);function ve(q){p[q]!==!0&&(s.enable(q),p[q]=!0)}function Le(q){p[q]!==!1&&(s.disable(q),p[q]=!1)}function ze(q,Fe){return g[q]!==Fe?(s.bindFramebuffer(q,Fe),g[q]=Fe,q===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Fe),q===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Fe),!0):!1}function Xe(q,Fe){let de=y,ge=!1;if(q){de=v.get(Fe),de===void 0&&(de=[],v.set(Fe,de));const He=q.textures;if(de.length!==He.length||de[0]!==s.COLOR_ATTACHMENT0){for(let Be=0,pt=He.length;Be<pt;Be++)de[Be]=s.COLOR_ATTACHMENT0+Be;de.length=He.length,ge=!0}}else de[0]!==s.BACK&&(de[0]=s.BACK,ge=!0);ge&&s.drawBuffers(de)}function gt(q){return w!==q?(s.useProgram(q),w=q,!0):!1}const xe={[hs]:s.FUNC_ADD,[hS]:s.FUNC_SUBTRACT,[dS]:s.FUNC_REVERSE_SUBTRACT};xe[fS]=s.MIN,xe[pS]=s.MAX;const be={[mS]:s.ZERO,[gS]:s.ONE,[vS]:s.SRC_COLOR,[vd]:s.SRC_ALPHA,[MS]:s.SRC_ALPHA_SATURATE,[SS]:s.DST_COLOR,[yS]:s.DST_ALPHA,[xS]:s.ONE_MINUS_SRC_COLOR,[xd]:s.ONE_MINUS_SRC_ALPHA,[wS]:s.ONE_MINUS_DST_COLOR,[_S]:s.ONE_MINUS_DST_ALPHA,[ES]:s.CONSTANT_COLOR,[TS]:s.ONE_MINUS_CONSTANT_COLOR,[bS]:s.CONSTANT_ALPHA,[AS]:s.ONE_MINUS_CONSTANT_ALPHA};function O(q,Fe,de,ge,He,Be,pt,Ht,ln,At){if(q===Ur){M===!0&&(Le(s.BLEND),M=!1);return}if(M===!1&&(ve(s.BLEND),M=!0),q!==uS){if(q!==S||At!==P){if((x!==hs||E!==hs)&&(s.blendEquation(s.FUNC_ADD),x=hs,E=hs),At)switch(q){case po:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ut:s.blendFunc(s.ONE,s.ONE);break;case M0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case E0:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case po:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ut:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case M0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case E0:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}A=null,T=null,z=null,D=null,F.set(0,0,0),k=0,S=q,P=At}return}He=He||Fe,Be=Be||de,pt=pt||ge,(Fe!==x||He!==E)&&(s.blendEquationSeparate(xe[Fe],xe[He]),x=Fe,E=He),(de!==A||ge!==T||Be!==z||pt!==D)&&(s.blendFuncSeparate(be[de],be[ge],be[Be],be[pt]),A=de,T=ge,z=Be,D=pt),(Ht.equals(F)===!1||ln!==k)&&(s.blendColor(Ht.r,Ht.g,Ht.b,ln),F.copy(Ht),k=ln),S=q,P=!1}function Qe(q,Fe){q.side===Kt?Le(s.CULL_FACE):ve(s.CULL_FACE);let de=q.side===jn;Fe&&(de=!de),we(de),q.blending===po&&q.transparent===!1?O(Ur):O(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),a.setMask(q.colorWrite);const ge=q.stencilWrite;u.setTest(ge),ge&&(u.setMask(q.stencilWriteMask),u.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),u.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),it(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Le(s.SAMPLE_ALPHA_TO_COVERAGE)}function we(q){b!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),b=q)}function Ve(q){q!==aS?(ve(s.CULL_FACE),q!==N&&(q===w0?s.cullFace(s.BACK):q===lS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Le(s.CULL_FACE),N=q}function Re(q){q!==K&&(Q&&s.lineWidth(q),K=q)}function it(q,Fe,de){q?(ve(s.POLYGON_OFFSET_FILL),($!==Fe||te!==de)&&(s.polygonOffset(Fe,de),$=Fe,te=de)):Le(s.POLYGON_OFFSET_FILL)}function Ee(q){q?ve(s.SCISSOR_TEST):Le(s.SCISSOR_TEST)}function U(q){q===void 0&&(q=s.TEXTURE0+J-1),he!==q&&(s.activeTexture(q),he=q)}function L(q,Fe,de){de===void 0&&(he===null?de=s.TEXTURE0+J-1:de=he);let ge=oe[de];ge===void 0&&(ge={type:void 0,texture:void 0},oe[de]=ge),(ge.type!==q||ge.texture!==Fe)&&(he!==de&&(s.activeTexture(de),he=de),s.bindTexture(q,Fe||Me[q]),ge.type=q,ge.texture=Fe)}function ne(){const q=oe[he];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ye(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function $e(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function De(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function We(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function vt(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ae(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ke(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function st(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function lt(q){Ue.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),Ue.copy(q))}function Ze(q){ie.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),ie.copy(q))}function _t(q,Fe){let de=f.get(Fe);de===void 0&&(de=new WeakMap,f.set(Fe,de));let ge=de.get(q);ge===void 0&&(ge=s.getUniformBlockIndex(Fe,q.name),de.set(q,ge))}function ft(q,Fe){const ge=f.get(Fe).get(q);d.get(Fe)!==ge&&(s.uniformBlockBinding(Fe,ge,q.__bindingPointIndex),d.set(Fe,ge))}function Dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},he=null,oe={},g={},v=new WeakMap,y=[],w=null,M=!1,S=null,x=null,A=null,T=null,E=null,z=null,D=null,F=new dt(0,0,0),k=0,P=!1,b=null,N=null,K=null,$=null,te=null,Ue.set(0,0,s.canvas.width,s.canvas.height),ie.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:ve,disable:Le,bindFramebuffer:ze,drawBuffers:Xe,useProgram:gt,setBlending:O,setMaterial:Qe,setFlipSided:we,setCullFace:Ve,setLineWidth:Re,setPolygonOffset:it,setScissorTest:Ee,activeTexture:U,bindTexture:L,unbindTexture:ne,compressedTexImage2D:pe,compressedTexImage3D:ye,texImage2D:Ke,texImage3D:st,updateUBOMapping:_t,uniformBlockBinding:ft,texStorage2D:vt,texStorage3D:Ae,texSubImage2D:me,texSubImage3D:$e,compressedTexSubImage2D:De,compressedTexSubImage3D:We,scissor:lt,viewport:Ze,reset:Dt}}function Wb(s,e,t,i,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ie,p=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(U,L){return y?new OffscreenCanvas(U,L):Uc("canvas")}function M(U,L,ne){let pe=1;const ye=Ee(U);if((ye.width>ne||ye.height>ne)&&(pe=ne/Math.max(ye.width,ye.height)),pe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const me=Math.floor(pe*ye.width),$e=Math.floor(pe*ye.height);g===void 0&&(g=w(me,$e));const De=L?w(me,$e):g;return De.width=me,De.height=$e,De.getContext("2d").drawImage(U,0,0,me,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+me+"x"+$e+")."),De}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),U;return U}function S(U){return U.generateMipmaps}function x(U){s.generateMipmap(U)}function A(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(U,L,ne,pe,ye=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let me=L;if(L===s.RED&&(ne===s.FLOAT&&(me=s.R32F),ne===s.HALF_FLOAT&&(me=s.R16F),ne===s.UNSIGNED_BYTE&&(me=s.R8)),L===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(me=s.R8UI),ne===s.UNSIGNED_SHORT&&(me=s.R16UI),ne===s.UNSIGNED_INT&&(me=s.R32UI),ne===s.BYTE&&(me=s.R8I),ne===s.SHORT&&(me=s.R16I),ne===s.INT&&(me=s.R32I)),L===s.RG&&(ne===s.FLOAT&&(me=s.RG32F),ne===s.HALF_FLOAT&&(me=s.RG16F),ne===s.UNSIGNED_BYTE&&(me=s.RG8)),L===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(me=s.RG8UI),ne===s.UNSIGNED_SHORT&&(me=s.RG16UI),ne===s.UNSIGNED_INT&&(me=s.RG32UI),ne===s.BYTE&&(me=s.RG8I),ne===s.SHORT&&(me=s.RG16I),ne===s.INT&&(me=s.RG32I)),L===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(me=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(me=s.RGB16UI),ne===s.UNSIGNED_INT&&(me=s.RGB32UI),ne===s.BYTE&&(me=s.RGB8I),ne===s.SHORT&&(me=s.RGB16I),ne===s.INT&&(me=s.RGB32I)),L===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),ne===s.UNSIGNED_INT&&(me=s.RGBA32UI),ne===s.BYTE&&(me=s.RGBA8I),ne===s.SHORT&&(me=s.RGBA16I),ne===s.INT&&(me=s.RGBA32I)),L===s.RGB&&ne===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),L===s.RGBA){const $e=ye?Nc:Nt.getTransfer(pe);ne===s.FLOAT&&(me=s.RGBA32F),ne===s.HALF_FLOAT&&(me=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(me=$e===kt?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function E(U,L){let ne;return U?L===null||L===xs||L===wo?ne=s.DEPTH24_STENCIL8:L===Ni?ne=s.DEPTH32F_STENCIL8:L===Ra&&(ne=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===xs||L===wo?ne=s.DEPTH_COMPONENT24:L===Ni?ne=s.DEPTH_COMPONENT32F:L===Ra&&(ne=s.DEPTH_COMPONENT16),ne}function z(U,L){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Qn&&U.minFilter!==Li?Math.log2(Math.max(L.width,L.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?L.mipmaps.length:1}function D(U){const L=U.target;L.removeEventListener("dispose",D),k(L),L.isVideoTexture&&p.delete(L)}function F(U){const L=U.target;L.removeEventListener("dispose",F),b(L)}function k(U){const L=i.get(U);if(L.__webglInit===void 0)return;const ne=U.source,pe=v.get(ne);if(pe){const ye=pe[L.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&P(U),Object.keys(pe).length===0&&v.delete(ne)}i.remove(U)}function P(U){const L=i.get(U);s.deleteTexture(L.__webglTexture);const ne=U.source,pe=v.get(ne);delete pe[L.__cacheKey],c.memory.textures--}function b(U){const L=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(L.__webglFramebuffer[pe]))for(let ye=0;ye<L.__webglFramebuffer[pe].length;ye++)s.deleteFramebuffer(L.__webglFramebuffer[pe][ye]);else s.deleteFramebuffer(L.__webglFramebuffer[pe]);L.__webglDepthbuffer&&s.deleteRenderbuffer(L.__webglDepthbuffer[pe])}else{if(Array.isArray(L.__webglFramebuffer))for(let pe=0;pe<L.__webglFramebuffer.length;pe++)s.deleteFramebuffer(L.__webglFramebuffer[pe]);else s.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&s.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&s.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let pe=0;pe<L.__webglColorRenderbuffer.length;pe++)L.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(L.__webglColorRenderbuffer[pe]);L.__webglDepthRenderbuffer&&s.deleteRenderbuffer(L.__webglDepthRenderbuffer)}const ne=U.textures;for(let pe=0,ye=ne.length;pe<ye;pe++){const me=i.get(ne[pe]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),c.memory.textures--),i.remove(ne[pe])}i.remove(U)}let N=0;function K(){N=0}function $(){const U=N;return U>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),N+=1,U}function te(U){const L=[];return L.push(U.wrapS),L.push(U.wrapT),L.push(U.wrapR||0),L.push(U.magFilter),L.push(U.minFilter),L.push(U.anisotropy),L.push(U.internalFormat),L.push(U.format),L.push(U.type),L.push(U.generateMipmaps),L.push(U.premultiplyAlpha),L.push(U.flipY),L.push(U.unpackAlignment),L.push(U.colorSpace),L.join()}function J(U,L){const ne=i.get(U);if(U.isVideoTexture&&Re(U),U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){const pe=U.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(ne,U,L);return}}t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+L)}function Q(U,L){const ne=i.get(U);if(U.version>0&&ne.__version!==U.version){ie(ne,U,L);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+L)}function ce(U,L){const ne=i.get(U);if(U.version>0&&ne.__version!==U.version){ie(ne,U,L);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+L)}function G(U,L){const ne=i.get(U);if(U.version>0&&ne.__version!==U.version){fe(ne,U,L);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+L)}const he={[Cd]:s.REPEAT,[ms]:s.CLAMP_TO_EDGE,[Rd]:s.MIRRORED_REPEAT},oe={[Qn]:s.NEAREST,[kS]:s.NEAREST_MIPMAP_NEAREST,[Yl]:s.NEAREST_MIPMAP_LINEAR,[Li]:s.LINEAR,[Lh]:s.LINEAR_MIPMAP_NEAREST,[gs]:s.LINEAR_MIPMAP_LINEAR},H={[HS]:s.NEVER,[$S]:s.ALWAYS,[VS]:s.LESS,[uv]:s.LEQUAL,[GS]:s.EQUAL,[XS]:s.GEQUAL,[WS]:s.GREATER,[jS]:s.NOTEQUAL};function se(U,L){if(L.type===Ni&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===Li||L.magFilter===Lh||L.magFilter===Yl||L.magFilter===gs||L.minFilter===Li||L.minFilter===Lh||L.minFilter===Yl||L.minFilter===gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,he[L.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,he[L.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,he[L.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,oe[L.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,oe[L.minFilter]),L.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,H[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===Qn||L.minFilter!==Yl&&L.minFilter!==gs||L.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||i.get(L).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,o.getMaxAnisotropy())),i.get(L).__currentAnisotropy=L.anisotropy}}}function Ue(U,L){let ne=!1;U.__webglInit===void 0&&(U.__webglInit=!0,L.addEventListener("dispose",D));const pe=L.source;let ye=v.get(pe);ye===void 0&&(ye={},v.set(pe,ye));const me=te(L);if(me!==U.__cacheKey){ye[me]===void 0&&(ye[me]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ne=!0),ye[me].usedTimes++;const $e=ye[U.__cacheKey];$e!==void 0&&(ye[U.__cacheKey].usedTimes--,$e.usedTimes===0&&P(L)),U.__cacheKey=me,U.__webglTexture=ye[me].texture}return ne}function ie(U,L,ne){let pe=s.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),L.isData3DTexture&&(pe=s.TEXTURE_3D);const ye=Ue(U,L),me=L.source;t.bindTexture(pe,U.__webglTexture,s.TEXTURE0+ne);const $e=i.get(me);if(me.version!==$e.__version||ye===!0){t.activeTexture(s.TEXTURE0+ne);const De=Nt.getPrimaries(Nt.workingColorSpace),We=L.colorSpace===Dr?null:Nt.getPrimaries(L.colorSpace),vt=L.colorSpace===Dr||De===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Ae=M(L.image,!1,o.maxTextureSize);Ae=it(L,Ae);const Ke=a.convert(L.format,L.colorSpace),st=a.convert(L.type);let lt=T(L.internalFormat,Ke,st,L.colorSpace,L.isVideoTexture);se(pe,L);let Ze;const _t=L.mipmaps,ft=L.isVideoTexture!==!0,Dt=$e.__version===void 0||ye===!0,q=me.dataReady,Fe=z(L,Ae);if(L.isDepthTexture)lt=E(L.format===Mo,L.type),Dt&&(ft?t.texStorage2D(s.TEXTURE_2D,1,lt,Ae.width,Ae.height):t.texImage2D(s.TEXTURE_2D,0,lt,Ae.width,Ae.height,0,Ke,st,null));else if(L.isDataTexture)if(_t.length>0){ft&&Dt&&t.texStorage2D(s.TEXTURE_2D,Fe,lt,_t[0].width,_t[0].height);for(let de=0,ge=_t.length;de<ge;de++)Ze=_t[de],ft?q&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Ze.width,Ze.height,Ke,st,Ze.data):t.texImage2D(s.TEXTURE_2D,de,lt,Ze.width,Ze.height,0,Ke,st,Ze.data);L.generateMipmaps=!1}else ft?(Dt&&t.texStorage2D(s.TEXTURE_2D,Fe,lt,Ae.width,Ae.height),q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Ke,st,Ae.data)):t.texImage2D(s.TEXTURE_2D,0,lt,Ae.width,Ae.height,0,Ke,st,Ae.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){ft&&Dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,lt,_t[0].width,_t[0].height,Ae.depth);for(let de=0,ge=_t.length;de<ge;de++)if(Ze=_t[de],L.format!==_i)if(Ke!==null)if(ft){if(q)if(L.layerUpdates.size>0){const He=ug(Ze.width,Ze.height,L.format,L.type);for(const Be of L.layerUpdates){const pt=Ze.data.subarray(Be*He/Ze.data.BYTES_PER_ELEMENT,(Be+1)*He/Ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,Be,Ze.width,Ze.height,1,Ke,pt)}L.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,Ze.width,Ze.height,Ae.depth,Ke,Ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,lt,Ze.width,Ze.height,Ae.depth,0,Ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?q&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,Ze.width,Ze.height,Ae.depth,Ke,st,Ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,lt,Ze.width,Ze.height,Ae.depth,0,Ke,st,Ze.data)}else{ft&&Dt&&t.texStorage2D(s.TEXTURE_2D,Fe,lt,_t[0].width,_t[0].height);for(let de=0,ge=_t.length;de<ge;de++)Ze=_t[de],L.format!==_i?Ke!==null?ft?q&&t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,Ze.width,Ze.height,Ke,Ze.data):t.compressedTexImage2D(s.TEXTURE_2D,de,lt,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?q&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Ze.width,Ze.height,Ke,st,Ze.data):t.texImage2D(s.TEXTURE_2D,de,lt,Ze.width,Ze.height,0,Ke,st,Ze.data)}else if(L.isDataArrayTexture)if(ft){if(Dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,lt,Ae.width,Ae.height,Ae.depth),q)if(L.layerUpdates.size>0){const de=ug(Ae.width,Ae.height,L.format,L.type);for(const ge of L.layerUpdates){const He=Ae.data.subarray(ge*de/Ae.data.BYTES_PER_ELEMENT,(ge+1)*de/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,Ae.width,Ae.height,1,Ke,st,He)}L.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ke,st,Ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,lt,Ae.width,Ae.height,Ae.depth,0,Ke,st,Ae.data);else if(L.isData3DTexture)ft?(Dt&&t.texStorage3D(s.TEXTURE_3D,Fe,lt,Ae.width,Ae.height,Ae.depth),q&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ke,st,Ae.data)):t.texImage3D(s.TEXTURE_3D,0,lt,Ae.width,Ae.height,Ae.depth,0,Ke,st,Ae.data);else if(L.isFramebufferTexture){if(Dt)if(ft)t.texStorage2D(s.TEXTURE_2D,Fe,lt,Ae.width,Ae.height);else{let de=Ae.width,ge=Ae.height;for(let He=0;He<Fe;He++)t.texImage2D(s.TEXTURE_2D,He,lt,de,ge,0,Ke,st,null),de>>=1,ge>>=1}}else if(_t.length>0){if(ft&&Dt){const de=Ee(_t[0]);t.texStorage2D(s.TEXTURE_2D,Fe,lt,de.width,de.height)}for(let de=0,ge=_t.length;de<ge;de++)Ze=_t[de],ft?q&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Ke,st,Ze):t.texImage2D(s.TEXTURE_2D,de,lt,Ke,st,Ze);L.generateMipmaps=!1}else if(ft){if(Dt){const de=Ee(Ae);t.texStorage2D(s.TEXTURE_2D,Fe,lt,de.width,de.height)}q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ke,st,Ae)}else t.texImage2D(s.TEXTURE_2D,0,lt,Ke,st,Ae);S(L)&&x(pe),$e.__version=me.version,L.onUpdate&&L.onUpdate(L)}U.__version=L.version}function fe(U,L,ne){if(L.image.length!==6)return;const pe=Ue(U,L),ye=L.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+ne);const me=i.get(ye);if(ye.version!==me.__version||pe===!0){t.activeTexture(s.TEXTURE0+ne);const $e=Nt.getPrimaries(Nt.workingColorSpace),De=L.colorSpace===Dr?null:Nt.getPrimaries(L.colorSpace),We=L.colorSpace===Dr||$e===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,L.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,L.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const vt=L.isCompressedTexture||L.image[0].isCompressedTexture,Ae=L.image[0]&&L.image[0].isDataTexture,Ke=[];for(let ge=0;ge<6;ge++)!vt&&!Ae?Ke[ge]=M(L.image[ge],!0,o.maxCubemapSize):Ke[ge]=Ae?L.image[ge].image:L.image[ge],Ke[ge]=it(L,Ke[ge]);const st=Ke[0],lt=a.convert(L.format,L.colorSpace),Ze=a.convert(L.type),_t=T(L.internalFormat,lt,Ze,L.colorSpace),ft=L.isVideoTexture!==!0,Dt=me.__version===void 0||pe===!0,q=ye.dataReady;let Fe=z(L,st);se(s.TEXTURE_CUBE_MAP,L);let de;if(vt){ft&&Dt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,_t,st.width,st.height);for(let ge=0;ge<6;ge++){de=Ke[ge].mipmaps;for(let He=0;He<de.length;He++){const Be=de[He];L.format!==_i?lt!==null?ft?q&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He,0,0,Be.width,Be.height,lt,Be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He,_t,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ft?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He,0,0,Be.width,Be.height,lt,Ze,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He,_t,Be.width,Be.height,0,lt,Ze,Be.data)}}}else{if(de=L.mipmaps,ft&&Dt){de.length>0&&Fe++;const ge=Ee(Ke[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,_t,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ae){ft?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ke[ge].width,Ke[ge].height,lt,Ze,Ke[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,_t,Ke[ge].width,Ke[ge].height,0,lt,Ze,Ke[ge].data);for(let He=0;He<de.length;He++){const pt=de[He].image[ge].image;ft?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He+1,0,0,pt.width,pt.height,lt,Ze,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He+1,_t,pt.width,pt.height,0,lt,Ze,pt.data)}}else{ft?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,lt,Ze,Ke[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,_t,lt,Ze,Ke[ge]);for(let He=0;He<de.length;He++){const Be=de[He];ft?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He+1,0,0,lt,Ze,Be.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,He+1,_t,lt,Ze,Be.image[ge])}}}S(L)&&x(s.TEXTURE_CUBE_MAP),me.__version=ye.version,L.onUpdate&&L.onUpdate(L)}U.__version=L.version}function Me(U,L,ne,pe,ye,me){const $e=a.convert(ne.format,ne.colorSpace),De=a.convert(ne.type),We=T(ne.internalFormat,$e,De,ne.colorSpace),vt=i.get(L),Ae=i.get(ne);if(Ae.__renderTarget=L,!vt.__hasExternalTextures){const Ke=Math.max(1,L.width>>me),st=Math.max(1,L.height>>me);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?t.texImage3D(ye,me,We,Ke,st,L.depth,0,$e,De,null):t.texImage2D(ye,me,We,Ke,st,0,$e,De,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),Ve(L)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ye,Ae.__webglTexture,0,we(L)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ye,Ae.__webglTexture,me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(U,L,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,U),L.depthBuffer){const pe=L.depthTexture,ye=pe&&pe.isDepthTexture?pe.type:null,me=E(L.stencilBuffer,ye),$e=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=we(L);Ve(L)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,me,L.width,L.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,De,me,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,me,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$e,s.RENDERBUFFER,U)}else{const pe=L.textures;for(let ye=0;ye<pe.length;ye++){const me=pe[ye],$e=a.convert(me.format,me.colorSpace),De=a.convert(me.type),We=T(me.internalFormat,$e,De,me.colorSpace),vt=we(L);ne&&Ve(L)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,We,L.width,L.height):Ve(L)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt,We,L.width,L.height):s.renderbufferStorage(s.RENDERBUFFER,We,L.width,L.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(U,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(L.depthTexture);pe.__renderTarget=L,(!pe.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),J(L.depthTexture,0);const ye=pe.__webglTexture,me=we(L);if(L.depthTexture.format===mo)Ve(L)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ye,0);else if(L.depthTexture.format===Mo)Ve(L)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ye,0);else throw new Error("Unknown depthTexture format")}function ze(U){const L=i.get(U),ne=U.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==U.depthTexture){const pe=U.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),pe){const ye=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,pe.removeEventListener("dispose",ye)};pe.addEventListener("dispose",ye),L.__depthDisposeCallback=ye}L.__boundDepthTexture=pe}if(U.depthTexture&&!L.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Le(L.__webglFramebuffer,U)}else if(ne){L.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer[pe]),L.__webglDepthbuffer[pe]===void 0)L.__webglDepthbuffer[pe]=s.createRenderbuffer(),ve(L.__webglDepthbuffer[pe],U,!1);else{const ye=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=L.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,ye,s.RENDERBUFFER,me)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=s.createRenderbuffer(),ve(L.__webglDepthbuffer,U,!1);else{const pe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=L.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ye)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(U,L,ne){const pe=i.get(U);L!==void 0&&Me(pe.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&ze(U)}function gt(U){const L=U.texture,ne=i.get(U),pe=i.get(L);U.addEventListener("dispose",F);const ye=U.textures,me=U.isWebGLCubeRenderTarget===!0,$e=ye.length>1;if($e||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=L.version,c.memory.textures++),me){ne.__webglFramebuffer=[];for(let De=0;De<6;De++)if(L.mipmaps&&L.mipmaps.length>0){ne.__webglFramebuffer[De]=[];for(let We=0;We<L.mipmaps.length;We++)ne.__webglFramebuffer[De][We]=s.createFramebuffer()}else ne.__webglFramebuffer[De]=s.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){ne.__webglFramebuffer=[];for(let De=0;De<L.mipmaps.length;De++)ne.__webglFramebuffer[De]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if($e)for(let De=0,We=ye.length;De<We;De++){const vt=i.get(ye[De]);vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture(),c.memory.textures++)}if(U.samples>0&&Ve(U)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let De=0;De<ye.length;De++){const We=ye[De];ne.__webglColorRenderbuffer[De]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[De]);const vt=a.convert(We.format,We.colorSpace),Ae=a.convert(We.type),Ke=T(We.internalFormat,vt,Ae,We.colorSpace,U.isXRRenderTarget===!0),st=we(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,st,Ke,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,ne.__webglColorRenderbuffer[De])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(ne.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),se(s.TEXTURE_CUBE_MAP,L);for(let De=0;De<6;De++)if(L.mipmaps&&L.mipmaps.length>0)for(let We=0;We<L.mipmaps.length;We++)Me(ne.__webglFramebuffer[De][We],U,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,We);else Me(ne.__webglFramebuffer[De],U,L,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0);S(L)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let De=0,We=ye.length;De<We;De++){const vt=ye[De],Ae=i.get(vt);t.bindTexture(s.TEXTURE_2D,Ae.__webglTexture),se(s.TEXTURE_2D,vt),Me(ne.__webglFramebuffer,U,vt,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,0),S(vt)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let De=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(De=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,pe.__webglTexture),se(De,L),L.mipmaps&&L.mipmaps.length>0)for(let We=0;We<L.mipmaps.length;We++)Me(ne.__webglFramebuffer[We],U,L,s.COLOR_ATTACHMENT0,De,We);else Me(ne.__webglFramebuffer,U,L,s.COLOR_ATTACHMENT0,De,0);S(L)&&x(De),t.unbindTexture()}U.depthBuffer&&ze(U)}function xe(U){const L=U.textures;for(let ne=0,pe=L.length;ne<pe;ne++){const ye=L[ne];if(S(ye)){const me=A(U),$e=i.get(ye).__webglTexture;t.bindTexture(me,$e),x(me),t.unbindTexture()}}}const be=[],O=[];function Qe(U){if(U.samples>0){if(Ve(U)===!1){const L=U.textures,ne=U.width,pe=U.height;let ye=s.COLOR_BUFFER_BIT;const me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$e=i.get(U),De=L.length>1;if(De)for(let We=0;We<L.length;We++)t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let We=0;We<L.length;We++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),De){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$e.__webglColorRenderbuffer[We]);const vt=i.get(L[We]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,vt,0)}s.blitFramebuffer(0,0,ne,pe,0,0,ne,pe,ye,s.NEAREST),d===!0&&(be.length=0,O.length=0,be.push(s.COLOR_ATTACHMENT0+We),U.depthBuffer&&U.resolveDepthBuffer===!1&&(be.push(me),O.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),De)for(let We=0;We<L.length;We++){t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,$e.__webglColorRenderbuffer[We]);const vt=i.get(L[We]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,vt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&d){const L=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[L])}}}function we(U){return Math.min(o.maxSamples,U.samples)}function Ve(U){const L=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Re(U){const L=c.render.frame;p.get(U)!==L&&(p.set(U,L),U.update())}function it(U,L){const ne=U.colorSpace,pe=U.format,ye=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ne!==Eo&&ne!==Dr&&(Nt.getTransfer(ne)===kt?(pe!==_i||ye!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),L}function Ee(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=$,this.resetTextureUnits=K,this.setTexture2D=J,this.setTexture2DArray=Q,this.setTexture3D=ce,this.setTextureCube=G,this.rebindTextures=Xe,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ve}function jb(s,e){function t(i,o=Dr){let a;const c=Nt.getTransfer(o);if(i===sr)return s.UNSIGNED_BYTE;if(i===Sf)return s.UNSIGNED_SHORT_4_4_4_4;if(i===wf)return s.UNSIGNED_SHORT_5_5_5_1;if(i===nv)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===ev)return s.BYTE;if(i===tv)return s.SHORT;if(i===Ra)return s.UNSIGNED_SHORT;if(i===_f)return s.INT;if(i===xs)return s.UNSIGNED_INT;if(i===Ni)return s.FLOAT;if(i===Oa)return s.HALF_FLOAT;if(i===iv)return s.ALPHA;if(i===rv)return s.RGB;if(i===_i)return s.RGBA;if(i===sv)return s.LUMINANCE;if(i===ov)return s.LUMINANCE_ALPHA;if(i===mo)return s.DEPTH_COMPONENT;if(i===Mo)return s.DEPTH_STENCIL;if(i===Mf)return s.RED;if(i===Ef)return s.RED_INTEGER;if(i===av)return s.RG;if(i===Tf)return s.RG_INTEGER;if(i===bf)return s.RGBA_INTEGER;if(i===Ec||i===Tc||i===bc||i===Ac)if(c===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ec)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ec)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ac)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pd||i===Ld||i===Nd||i===Id)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Pd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ld)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Id)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dd||i===Ud||i===Fd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Dd||i===Ud)return c===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Fd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===kd||i===Od||i===zd||i===Bd||i===Hd||i===Vd||i===Gd||i===Wd||i===jd||i===Xd||i===$d||i===Yd||i===qd||i===Kd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===kd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Od)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===zd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$d)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kd)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cc||i===Zd||i===Jd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Cc)return c===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lv||i===Qd||i===ef||i===tf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Cc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Qd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ef)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wo?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const Xb={type:"move"};class pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,c=null;const u=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const M of e.hand.values()){const S=t.getJointPose(M,i),x=this._getHandJoint(f,M);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const p=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],v=p.position.distanceTo(g.position),y=.02,w=.005;f.inputState.pinching&&v>y+w?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=y-w&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Xb)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ma;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const $b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yb=`
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

}`;class qb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new Dn,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new zr({vertexShader:$b,fragmentShader:Yb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Si(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kb extends Ro{constructor(e,t){super();const i=this;let o=null,a=1,c=null,u="local-floor",d=1,f=null,p=null,g=null,v=null,y=null,w=null;const M=new qb,S=t.getContextAttributes();let x=null,A=null;const T=[],E=[],z=new Ie;let D=null;const F=new Gn;F.viewport=new Ot;const k=new Gn;k.viewport=new Ot;const P=[F,k],b=new mw;let N=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let fe=T[ie];return fe===void 0&&(fe=new pd,T[ie]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ie){let fe=T[ie];return fe===void 0&&(fe=new pd,T[ie]=fe),fe.getGripSpace()},this.getHand=function(ie){let fe=T[ie];return fe===void 0&&(fe=new pd,T[ie]=fe),fe.getHandSpace()};function $(ie){const fe=E.indexOf(ie.inputSource);if(fe===-1)return;const Me=T[fe];Me!==void 0&&(Me.update(ie.inputSource,ie.frame,f||c),Me.dispatchEvent({type:ie.type,data:ie.inputSource}))}function te(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",J);for(let ie=0;ie<T.length;ie++){const fe=E[ie];fe!==null&&(E[ie]=null,T[ie].disconnect(fe))}N=null,K=null,M.reset(),e.setRenderTarget(x),y=null,v=null,g=null,o=null,A=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){u=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(ie){f=ie},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",te),o.addEventListener("inputsourceschange",J),S.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(z),o.renderState.layers===void 0){const fe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,t,fe),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),A=new ys(y.framebufferWidth,y.framebufferHeight,{format:_i,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let fe=null,Me=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=S.stencil?Mo:mo,Me=S.stencil?wo:xs);const Le={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:a};g=new XRWebGLBinding(o,t),v=g.createProjectionLayer(Le),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),A=new ys(v.textureWidth,v.textureHeight,{format:_i,type:sr,depthTexture:new _v(v.textureWidth,v.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(d),f=null,c=await o.requestReferenceSpace(u),Ue.setContext(o),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function J(ie){for(let fe=0;fe<ie.removed.length;fe++){const Me=ie.removed[fe],ve=E.indexOf(Me);ve>=0&&(E[ve]=null,T[ve].disconnect(Me))}for(let fe=0;fe<ie.added.length;fe++){const Me=ie.added[fe];let ve=E.indexOf(Me);if(ve===-1){for(let ze=0;ze<T.length;ze++)if(ze>=E.length){E.push(Me),ve=ze;break}else if(E[ze]===null){E[ze]=Me,ve=ze;break}if(ve===-1)break}const Le=T[ve];Le&&Le.connect(Me)}}const Q=new V,ce=new V;function G(ie,fe,Me){Q.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(Me.matrixWorld);const ve=Q.distanceTo(ce),Le=fe.projectionMatrix.elements,ze=Me.projectionMatrix.elements,Xe=Le[14]/(Le[10]-1),gt=Le[14]/(Le[10]+1),xe=(Le[9]+1)/Le[5],be=(Le[9]-1)/Le[5],O=(Le[8]-1)/Le[0],Qe=(ze[8]+1)/ze[0],we=Xe*O,Ve=Xe*Qe,Re=ve/(-O+Qe),it=Re*-O;if(fe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(it),ie.translateZ(Re),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Le[10]===-1)ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Ee=Xe+Re,U=gt+Re,L=we-it,ne=Ve+(ve-it),pe=xe*gt/U*Ee,ye=be*gt/U*Ee;ie.projectionMatrix.makePerspective(L,ne,pe,ye,Ee,U),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function he(ie,fe){fe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(fe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let fe=ie.near,Me=ie.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(Me=M.depthFar)),b.near=k.near=F.near=fe,b.far=k.far=F.far=Me,(N!==b.near||K!==b.far)&&(o.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,K=b.far),F.layers.mask=ie.layers.mask|2,k.layers.mask=ie.layers.mask|4,b.layers.mask=F.layers.mask|k.layers.mask;const ve=ie.parent,Le=b.cameras;he(b,ve);for(let ze=0;ze<Le.length;ze++)he(Le[ze],ve);Le.length===2?G(b,F,k):b.projectionMatrix.copy(F.projectionMatrix),oe(ie,b,ve)};function oe(ie,fe,Me){Me===null?ie.matrix.copy(fe.matrixWorld):(ie.matrix.copy(Me.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(fe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Dc*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(ie){d=ie,v!==null&&(v.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(b)};let H=null;function se(ie,fe){if(p=fe.getViewerPose(f||c),w=fe,p!==null){const Me=p.views;y!==null&&(e.setRenderTargetFramebuffer(A,y.framebuffer),e.setRenderTarget(A));let ve=!1;Me.length!==b.cameras.length&&(b.cameras.length=0,ve=!0);for(let ze=0;ze<Me.length;ze++){const Xe=Me[ze];let gt=null;if(y!==null)gt=y.getViewport(Xe);else{const be=g.getViewSubImage(v,Xe);gt=be.viewport,ze===0&&(e.setRenderTargetTextures(A,be.colorTexture,v.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(A))}let xe=P[ze];xe===void 0&&(xe=new Gn,xe.layers.enable(ze),xe.viewport=new Ot,P[ze]=xe),xe.matrix.fromArray(Xe.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(Xe.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(gt.x,gt.y,gt.width,gt.height),ze===0&&(b.matrix.copy(xe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ve===!0&&b.cameras.push(xe)}const Le=o.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const ze=g.getDepthInformation(Me[0]);ze&&ze.isValid&&ze.texture&&M.init(e,ze,o.renderState)}}for(let Me=0;Me<T.length;Me++){const ve=E[Me],Le=T[Me];ve!==null&&Le!==void 0&&Le.update(ve,fe,f||c)}H&&H(ie,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),w=null}const Ue=new Rv;Ue.setAnimationLoop(se),this.setAnimationLoop=function(ie){H=ie},this.dispose=function(){}}}const ls=new Di,Zb=new It;function Jb(s,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,vv(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,A,T,E){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(S,x):x.isMeshToonMaterial?(a(S,x),g(S,x)):x.isMeshPhongMaterial?(a(S,x),p(S,x)):x.isMeshStandardMaterial?(a(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,E)):x.isMeshMatcapMaterial?(a(S,x),w(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),M(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&u(S,x)):x.isPointsMaterial?d(S,x,A,T):x.isSpriteMaterial?f(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===jn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===jn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const A=e.get(x),T=A.envMap,E=A.envMapRotation;T&&(S.envMap.value=T,ls.copy(E),ls.x*=-1,ls.y*=-1,ls.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),S.envMapRotation.value.setFromMatrix4(Zb.makeRotationFromEuler(ls)),S.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function u(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,A,T){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*A,S.scale.value=T*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function f(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,A){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=A.texture,S.transmissionSamplerSize.value.set(A.width,A.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,x){x.matcap&&(S.matcap.value=x.matcap)}function M(S,x){const A=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(A.matrixWorld),S.nearDistance.value=A.shadow.camera.near,S.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function Qb(s,e,t,i){let o={},a={},c=[];const u=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(A,T){const E=T.program;i.uniformBlockBinding(A,E)}function f(A,T){let E=o[A.id];E===void 0&&(w(A),E=p(A),o[A.id]=E,A.addEventListener("dispose",S));const z=T.program;i.updateUBOMapping(A,z);const D=e.render.frame;a[A.id]!==D&&(v(A),a[A.id]=D)}function p(A){const T=g();A.__bindingPointIndex=T;const E=s.createBuffer(),z=A.__size,D=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,z,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,E),E}function g(){for(let A=0;A<u;A++)if(c.indexOf(A)===-1)return c.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const T=o[A.id],E=A.uniforms,z=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let D=0,F=E.length;D<F;D++){const k=Array.isArray(E[D])?E[D]:[E[D]];for(let P=0,b=k.length;P<b;P++){const N=k[P];if(y(N,D,P,z)===!0){const K=N.__offset,$=Array.isArray(N.value)?N.value:[N.value];let te=0;for(let J=0;J<$.length;J++){const Q=$[J],ce=M(Q);typeof Q=="number"||typeof Q=="boolean"?(N.__data[0]=Q,s.bufferSubData(s.UNIFORM_BUFFER,K+te,N.__data)):Q.isMatrix3?(N.__data[0]=Q.elements[0],N.__data[1]=Q.elements[1],N.__data[2]=Q.elements[2],N.__data[3]=0,N.__data[4]=Q.elements[3],N.__data[5]=Q.elements[4],N.__data[6]=Q.elements[5],N.__data[7]=0,N.__data[8]=Q.elements[6],N.__data[9]=Q.elements[7],N.__data[10]=Q.elements[8],N.__data[11]=0):(Q.toArray(N.__data,te),te+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,K,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(A,T,E,z){const D=A.value,F=T+"_"+E;if(z[F]===void 0)return typeof D=="number"||typeof D=="boolean"?z[F]=D:z[F]=D.clone(),!0;{const k=z[F];if(typeof D=="number"||typeof D=="boolean"){if(k!==D)return z[F]=D,!0}else if(k.equals(D)===!1)return k.copy(D),!0}return!1}function w(A){const T=A.uniforms;let E=0;const z=16;for(let F=0,k=T.length;F<k;F++){const P=Array.isArray(T[F])?T[F]:[T[F]];for(let b=0,N=P.length;b<N;b++){const K=P[b],$=Array.isArray(K.value)?K.value:[K.value];for(let te=0,J=$.length;te<J;te++){const Q=$[te],ce=M(Q),G=E%z,he=G%ce.boundary,oe=G+he;E+=he,oe!==0&&z-oe<ce.storage&&(E+=z-oe),K.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=E,E+=ce.storage}}}const D=E%z;return D>0&&(E+=z-D),A.__size=E,A.__cache={},this}function M(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function S(A){const T=A.target;T.removeEventListener("dispose",S);const E=c.indexOf(T.__bindingPointIndex);c.splice(E,1),s.deleteBuffer(o[T.id]),delete o[T.id],delete a[T.id]}function x(){for(const A in o)s.deleteBuffer(o[A]);c=[],o={},a={}}return{bind:d,update:f,dispose:x}}class eA{constructor(e={}){const{canvas:t=qS(),context:i=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const w=new Uint32Array(4),M=new Int32Array(4);let S=null,x=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ai,this.toneMapping=Fr,this.toneMappingExposure=1;const E=this;let z=!1,D=0,F=0,k=null,P=-1,b=null;const N=new Ot,K=new Ot;let $=null;const te=new dt(0);let J=0,Q=t.width,ce=t.height,G=1,he=null,oe=null;const H=new Ot(0,0,Q,ce),se=new Ot(0,0,Q,ce);let Ue=!1;const ie=new Rf;let fe=!1,Me=!1;const ve=new It,Le=new It,ze=new V,Xe=new Ot,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xe=!1;function be(){return k===null?G:1}let O=i;function Qe(I,Z){return t.getContext(I,Z)}try{const I={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xf}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",Be,!1),O===null){const Z="webgl2";if(O=Qe(Z,I),O===null)throw Qe(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let we,Ve,Re,it,Ee,U,L,ne,pe,ye,me,$e,De,We,vt,Ae,Ke,st,lt,Ze,_t,ft,Dt,q;function Fe(){we=new cT(O),we.init(),ft=new jb(O,we),Ve=new iT(O,we,e,ft),Re=new Gb(O,we),Ve.reverseDepthBuffer&&v&&Re.buffers.depth.setReversed(!0),it=new dT(O),Ee=new Pb,U=new Wb(O,we,Re,Ee,Ve,ft,it),L=new sT(E),ne=new lT(E),pe=new yw(O),Dt=new tT(O,pe),ye=new uT(O,pe,it,Dt),me=new pT(O,ye,pe,it),lt=new fT(O,Ve,U),Ae=new rT(Ee),$e=new Rb(E,L,ne,we,Ve,Dt,Ae),De=new Jb(E,Ee),We=new Nb,vt=new Ob(we),st=new eT(E,L,ne,Re,me,y,d),Ke=new Hb(E,me,Ve),q=new Qb(O,it,Ve,Re),Ze=new nT(O,we,it),_t=new hT(O,we,it),it.programs=$e.programs,E.capabilities=Ve,E.extensions=we,E.properties=Ee,E.renderLists=We,E.shadowMap=Ke,E.state=Re,E.info=it}Fe();const de=new Kb(E,O);this.xr=de,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const I=we.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=we.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(I){I!==void 0&&(G=I,this.setSize(Q,ce,!1))},this.getSize=function(I){return I.set(Q,ce)},this.setSize=function(I,Z,le=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=I,ce=Z,t.width=Math.floor(I*G),t.height=Math.floor(Z*G),le===!0&&(t.style.width=I+"px",t.style.height=Z+"px"),this.setViewport(0,0,I,Z)},this.getDrawingBufferSize=function(I){return I.set(Q*G,ce*G).floor()},this.setDrawingBufferSize=function(I,Z,le){Q=I,ce=Z,G=le,t.width=Math.floor(I*le),t.height=Math.floor(Z*le),this.setViewport(0,0,I,Z)},this.getCurrentViewport=function(I){return I.copy(N)},this.getViewport=function(I){return I.copy(H)},this.setViewport=function(I,Z,le,ue){I.isVector4?H.set(I.x,I.y,I.z,I.w):H.set(I,Z,le,ue),Re.viewport(N.copy(H).multiplyScalar(G).round())},this.getScissor=function(I){return I.copy(se)},this.setScissor=function(I,Z,le,ue){I.isVector4?se.set(I.x,I.y,I.z,I.w):se.set(I,Z,le,ue),Re.scissor(K.copy(se).multiplyScalar(G).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(I){Re.setScissorTest(Ue=I)},this.setOpaqueSort=function(I){he=I},this.setTransparentSort=function(I){oe=I},this.getClearColor=function(I){return I.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(I=!0,Z=!0,le=!0){let ue=0;if(I){let j=!1;if(k!==null){const Ce=k.texture.format;j=Ce===bf||Ce===Tf||Ce===Ef}if(j){const Ce=k.texture.type,ke=Ce===sr||Ce===xs||Ce===Ra||Ce===wo||Ce===Sf||Ce===wf,je=st.getClearColor(),Ye=st.getClearAlpha(),ct=je.r,ut=je.g,nt=je.b;ke?(w[0]=ct,w[1]=ut,w[2]=nt,w[3]=Ye,O.clearBufferuiv(O.COLOR,0,w)):(M[0]=ct,M[1]=ut,M[2]=nt,M[3]=Ye,O.clearBufferiv(O.COLOR,0,M))}else ue|=O.COLOR_BUFFER_BIT}Z&&(ue|=O.DEPTH_BUFFER_BIT),le&&(ue|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),st.dispose(),We.dispose(),vt.dispose(),Ee.dispose(),L.dispose(),ne.dispose(),me.dispose(),Dt.dispose(),q.dispose(),$e.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ms),de.removeEventListener("sessionend",ar),ki.stop()};function ge(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const I=it.autoReset,Z=Ke.enabled,le=Ke.autoUpdate,ue=Ke.needsUpdate,j=Ke.type;Fe(),it.autoReset=I,Ke.enabled=Z,Ke.autoUpdate=le,Ke.needsUpdate=ue,Ke.type=j}function Be(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function pt(I){const Z=I.target;Z.removeEventListener("dispose",pt),Ht(Z)}function Ht(I){ln(I),Ee.remove(I)}function ln(I){const Z=Ee.get(I).programs;Z!==void 0&&(Z.forEach(function(le){$e.releaseProgram(le)}),I.isShaderMaterial&&$e.releaseShaderCache(I))}this.renderBufferDirect=function(I,Z,le,ue,j,Ce){Z===null&&(Z=gt);const ke=j.isMesh&&j.matrixWorld.determinant()<0,je=Va(I,Z,le,ue,j);Re.setMaterial(ue,ke);let Ye=le.index,ct=1;if(ue.wireframe===!0){if(Ye=ye.getWireframeAttribute(le),Ye===void 0)return;ct=2}const ut=le.drawRange,nt=le.attributes.position;let mt=ut.start*ct,Rt=(ut.start+ut.count)*ct;Ce!==null&&(mt=Math.max(mt,Ce.start*ct),Rt=Math.min(Rt,(Ce.start+Ce.count)*ct)),Ye!==null?(mt=Math.max(mt,0),Rt=Math.min(Rt,Ye.count)):nt!=null&&(mt=Math.max(mt,0),Rt=Math.min(Rt,nt.count));const Pt=Rt-mt;if(Pt<0||Pt===1/0)return;Dt.setup(j,ue,je,le,Ye);let Wt,bt=Ze;if(Ye!==null&&(Wt=pe.get(Ye),bt=_t,bt.setIndex(Wt)),j.isMesh)ue.wireframe===!0?(Re.setLineWidth(ue.wireframeLinewidth*be()),bt.setMode(O.LINES)):bt.setMode(O.TRIANGLES);else if(j.isLine){let rt=ue.linewidth;rt===void 0&&(rt=1),Re.setLineWidth(rt*be()),j.isLineSegments?bt.setMode(O.LINES):j.isLineLoop?bt.setMode(O.LINE_LOOP):bt.setMode(O.LINE_STRIP)}else j.isPoints?bt.setMode(O.POINTS):j.isSprite&&bt.setMode(O.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)bt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))bt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const rt=j._multiDrawStarts,Jt=j._multiDrawCounts,Tt=j._multiDrawCount,vn=Ye?pe.get(Ye).bytesPerElement:1,ci=Ee.get(ue).currentProgram.getUniforms();for(let Rn=0;Rn<Tt;Rn++)ci.setValue(O,"_gl_DrawID",Rn),bt.render(rt[Rn]/vn,Jt[Rn])}else if(j.isInstancedMesh)bt.renderInstances(mt,Pt,j.count);else if(le.isInstancedBufferGeometry){const rt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Jt=Math.min(le.instanceCount,rt);bt.renderInstances(mt,Pt,Jt)}else bt.render(mt,Pt)};function At(I,Z,le){I.transparent===!0&&I.side===Kt&&I.forceSinglePass===!1?(I.side=jn,I.needsUpdate=!0,Es(I,Z,le),I.side=Or,I.needsUpdate=!0,Es(I,Z,le),I.side=Kt):Es(I,Z,le)}this.compile=function(I,Z,le=null){le===null&&(le=I),x=vt.get(le),x.init(Z),T.push(x),le.traverseVisible(function(j){j.isLight&&j.layers.test(Z.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),I!==le&&I.traverseVisible(function(j){j.isLight&&j.layers.test(Z.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const ue=new Set;return I.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ce=j.material;if(Ce)if(Array.isArray(Ce))for(let ke=0;ke<Ce.length;ke++){const je=Ce[ke];At(je,le,j),ue.add(je)}else At(Ce,le,j),ue.add(Ce)}),T.pop(),x=null,ue},this.compileAsync=function(I,Z,le=null){const ue=this.compile(I,Z,le);return new Promise(j=>{function Ce(){if(ue.forEach(function(ke){Ee.get(ke).currentProgram.isReady()&&ue.delete(ke)}),ue.size===0){j(I);return}setTimeout(Ce,10)}we.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Un=null;function Cn(I){Un&&Un(I)}function Ms(){ki.stop()}function ar(){ki.start()}const ki=new Rv;ki.setAnimationLoop(Cn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(I){Un=I,de.setAnimationLoop(I),I===null?ki.stop():ki.start()},de.addEventListener("sessionstart",Ms),de.addEventListener("sessionend",ar),this.render=function(I,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(Z),Z=de.getCamera()),I.isScene===!0&&I.onBeforeRender(E,I,Z,k),x=vt.get(I,T.length),x.init(Z),T.push(x),Le.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ie.setFromProjectionMatrix(Le),Me=this.localClippingEnabled,fe=Ae.init(this.clippingPlanes,Me),S=We.get(I,A.length),S.init(),A.push(S),de.enabled===!0&&de.isPresenting===!0){const Ce=E.xr.getDepthSensingMesh();Ce!==null&&Oi(Ce,Z,-1/0,E.sortObjects)}Oi(I,Z,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(he,oe),xe=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,xe&&st.addToRenderList(S,I),this.info.render.frame++,fe===!0&&Ae.beginShadows();const le=x.state.shadowsArray;Ke.render(le,I,Z),fe===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=S.opaque,j=S.transmissive;if(x.setupLights(),Z.isArrayCamera){const Ce=Z.cameras;if(j.length>0)for(let ke=0,je=Ce.length;ke<je;ke++){const Ye=Ce[ke];Vr(ue,j,I,Ye)}xe&&st.render(I);for(let ke=0,je=Ce.length;ke<je;ke++){const Ye=Ce[ke];Hr(S,I,Ye,Ye.viewport)}}else j.length>0&&Vr(ue,j,I,Z),xe&&st.render(I),Hr(S,I,Z);k!==null&&(U.updateMultisampleRenderTarget(k),U.updateRenderTargetMipmap(k)),I.isScene===!0&&I.onAfterRender(E,I,Z),Dt.resetDefaultState(),P=-1,b=null,T.pop(),T.length>0?(x=T[T.length-1],fe===!0&&Ae.setGlobalState(E.clippingPlanes,x.state.camera)):x=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function Oi(I,Z,le,ue){if(I.visible===!1)return;if(I.layers.test(Z.layers)){if(I.isGroup)le=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Z);else if(I.isLight)x.pushLight(I),I.castShadow&&x.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ie.intersectsSprite(I)){ue&&Xe.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Le);const ke=me.update(I),je=I.material;je.visible&&S.push(I,ke,je,le,Xe.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ie.intersectsObject(I))){const ke=me.update(I),je=I.material;if(ue&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Xe.copy(I.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Xe.copy(ke.boundingSphere.center)),Xe.applyMatrix4(I.matrixWorld).applyMatrix4(Le)),Array.isArray(je)){const Ye=ke.groups;for(let ct=0,ut=Ye.length;ct<ut;ct++){const nt=Ye[ct],mt=je[nt.materialIndex];mt&&mt.visible&&S.push(I,ke,mt,le,Xe.z,nt)}}else je.visible&&S.push(I,ke,je,le,Xe.z,null)}}const Ce=I.children;for(let ke=0,je=Ce.length;ke<je;ke++)Oi(Ce[ke],Z,le,ue)}function Hr(I,Z,le,ue){const j=I.opaque,Ce=I.transmissive,ke=I.transparent;x.setupLightsView(le),fe===!0&&Ae.setGlobalState(E.clippingPlanes,le),ue&&Re.viewport(N.copy(ue)),j.length>0&&lr(j,Z,le),Ce.length>0&&lr(Ce,Z,le),ke.length>0&&lr(ke,Z,le),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Vr(I,Z,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ue.id]===void 0&&(x.state.transmissionRenderTarget[ue.id]=new ys(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?Oa:sr,minFilter:gs,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace}));const Ce=x.state.transmissionRenderTarget[ue.id],ke=ue.viewport||N;Ce.setSize(ke.z,ke.w);const je=E.getRenderTarget();E.setRenderTarget(Ce),E.getClearColor(te),J=E.getClearAlpha(),J<1&&E.setClearColor(16777215,.5),E.clear(),xe&&st.render(le);const Ye=E.toneMapping;E.toneMapping=Fr;const ct=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),x.setupLightsView(ue),fe===!0&&Ae.setGlobalState(E.clippingPlanes,ue),lr(I,le,ue),U.updateMultisampleRenderTarget(Ce),U.updateRenderTargetMipmap(Ce),we.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let nt=0,mt=Z.length;nt<mt;nt++){const Rt=Z[nt],Pt=Rt.object,Wt=Rt.geometry,bt=Rt.material,rt=Rt.group;if(bt.side===Kt&&Pt.layers.test(ue.layers)){const Jt=bt.side;bt.side=jn,bt.needsUpdate=!0,Ba(Pt,le,ue,Wt,bt,rt),bt.side=Jt,bt.needsUpdate=!0,ut=!0}}ut===!0&&(U.updateMultisampleRenderTarget(Ce),U.updateRenderTargetMipmap(Ce))}E.setRenderTarget(je),E.setClearColor(te,J),ct!==void 0&&(ue.viewport=ct),E.toneMapping=Ye}function lr(I,Z,le){const ue=Z.isScene===!0?Z.overrideMaterial:null;for(let j=0,Ce=I.length;j<Ce;j++){const ke=I[j],je=ke.object,Ye=ke.geometry,ct=ue===null?ke.material:ue,ut=ke.group;je.layers.test(le.layers)&&Ba(je,Z,le,Ye,ct,ut)}}function Ba(I,Z,le,ue,j,Ce){I.onBeforeRender(E,Z,le,ue,j,Ce),I.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),j.onBeforeRender(E,Z,le,ue,I,Ce),j.transparent===!0&&j.side===Kt&&j.forceSinglePass===!1?(j.side=jn,j.needsUpdate=!0,E.renderBufferDirect(le,Z,ue,j,I,Ce),j.side=Or,j.needsUpdate=!0,E.renderBufferDirect(le,Z,ue,j,I,Ce),j.side=Kt):E.renderBufferDirect(le,Z,ue,j,I,Ce),I.onAfterRender(E,Z,le,ue,j,Ce)}function Es(I,Z,le){Z.isScene!==!0&&(Z=gt);const ue=Ee.get(I),j=x.state.lights,Ce=x.state.shadowsArray,ke=j.state.version,je=$e.getParameters(I,j.state,Ce,Z,le),Ye=$e.getProgramCacheKey(je);let ct=ue.programs;ue.environment=I.isMeshStandardMaterial?Z.environment:null,ue.fog=Z.fog,ue.envMap=(I.isMeshStandardMaterial?ne:L).get(I.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&I.envMap===null?Z.environmentRotation:I.envMapRotation,ct===void 0&&(I.addEventListener("dispose",pt),ct=new Map,ue.programs=ct);let ut=ct.get(Ye);if(ut!==void 0){if(ue.currentProgram===ut&&ue.lightsStateVersion===ke)return Ti(I,je),ut}else je.uniforms=$e.getUniforms(I),I.onBeforeCompile(je,E),ut=$e.acquireProgram(je,Ye),ct.set(Ye,ut),ue.uniforms=je.uniforms;const nt=ue.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(nt.clippingPlanes=Ae.uniform),Ti(I,je),ue.needsLights=$c(I),ue.lightsStateVersion=ke,ue.needsLights&&(nt.ambientLightColor.value=j.state.ambient,nt.lightProbe.value=j.state.probe,nt.directionalLights.value=j.state.directional,nt.directionalLightShadows.value=j.state.directionalShadow,nt.spotLights.value=j.state.spot,nt.spotLightShadows.value=j.state.spotShadow,nt.rectAreaLights.value=j.state.rectArea,nt.ltc_1.value=j.state.rectAreaLTC1,nt.ltc_2.value=j.state.rectAreaLTC2,nt.pointLights.value=j.state.point,nt.pointLightShadows.value=j.state.pointShadow,nt.hemisphereLights.value=j.state.hemi,nt.directionalShadowMap.value=j.state.directionalShadowMap,nt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,nt.spotShadowMap.value=j.state.spotShadowMap,nt.spotLightMatrix.value=j.state.spotLightMatrix,nt.spotLightMap.value=j.state.spotLightMap,nt.pointShadowMap.value=j.state.pointShadowMap,nt.pointShadowMatrix.value=j.state.pointShadowMatrix),ue.currentProgram=ut,ue.uniformsList=null,ut}function Ha(I){if(I.uniformsList===null){const Z=I.currentProgram.getUniforms();I.uniformsList=Pc.seqWithValue(Z.seq,I.uniforms)}return I.uniformsList}function Ti(I,Z){const le=Ee.get(I);le.outputColorSpace=Z.outputColorSpace,le.batching=Z.batching,le.batchingColor=Z.batchingColor,le.instancing=Z.instancing,le.instancingColor=Z.instancingColor,le.instancingMorph=Z.instancingMorph,le.skinning=Z.skinning,le.morphTargets=Z.morphTargets,le.morphNormals=Z.morphNormals,le.morphColors=Z.morphColors,le.morphTargetsCount=Z.morphTargetsCount,le.numClippingPlanes=Z.numClippingPlanes,le.numIntersection=Z.numClipIntersection,le.vertexAlphas=Z.vertexAlphas,le.vertexTangents=Z.vertexTangents,le.toneMapping=Z.toneMapping}function Va(I,Z,le,ue,j){Z.isScene!==!0&&(Z=gt),U.resetTextureUnits();const Ce=Z.fog,ke=ue.isMeshStandardMaterial?Z.environment:null,je=k===null?E.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Eo,Ye=(ue.isMeshStandardMaterial?ne:L).get(ue.envMap||ke),ct=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ut=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),nt=!!le.morphAttributes.position,mt=!!le.morphAttributes.normal,Rt=!!le.morphAttributes.color;let Pt=Fr;ue.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Pt=E.toneMapping);const Wt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,bt=Wt!==void 0?Wt.length:0,rt=Ee.get(ue),Jt=x.state.lights;if(fe===!0&&(Me===!0||I!==b)){const tn=I===b&&ue.id===P;Ae.setState(ue,I,tn)}let Tt=!1;ue.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Jt.state.version||rt.outputColorSpace!==je||j.isBatchedMesh&&rt.batching===!1||!j.isBatchedMesh&&rt.batching===!0||j.isBatchedMesh&&rt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&rt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&rt.instancing===!1||!j.isInstancedMesh&&rt.instancing===!0||j.isSkinnedMesh&&rt.skinning===!1||!j.isSkinnedMesh&&rt.skinning===!0||j.isInstancedMesh&&rt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&rt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&rt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&rt.instancingMorph===!1&&j.morphTexture!==null||rt.envMap!==Ye||ue.fog===!0&&rt.fog!==Ce||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Ae.numPlanes||rt.numIntersection!==Ae.numIntersection)||rt.vertexAlphas!==ct||rt.vertexTangents!==ut||rt.morphTargets!==nt||rt.morphNormals!==mt||rt.morphColors!==Rt||rt.toneMapping!==Pt||rt.morphTargetsCount!==bt)&&(Tt=!0):(Tt=!0,rt.__version=ue.version);let vn=rt.currentProgram;Tt===!0&&(vn=Es(ue,Z,j));let ci=!1,Rn=!1,Gr=!1;const Ft=vn.getUniforms(),Pn=rt.uniforms;if(Re.useProgram(vn.program)&&(ci=!0,Rn=!0,Gr=!0),ue.id!==P&&(P=ue.id,Rn=!0),ci||b!==I){Re.buffers.depth.getReversed()?(ve.copy(I.projectionMatrix),ZS(ve),JS(ve),Ft.setValue(O,"projectionMatrix",ve)):Ft.setValue(O,"projectionMatrix",I.projectionMatrix),Ft.setValue(O,"viewMatrix",I.matrixWorldInverse);const Sn=Ft.map.cameraPosition;Sn!==void 0&&Sn.setValue(O,ze.setFromMatrixPosition(I.matrixWorld)),Ve.logarithmicDepthBuffer&&Ft.setValue(O,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Ft.setValue(O,"isOrthographic",I.isOrthographicCamera===!0),b!==I&&(b=I,Rn=!0,Gr=!0)}if(j.isSkinnedMesh){Ft.setOptional(O,j,"bindMatrix"),Ft.setOptional(O,j,"bindMatrixInverse");const tn=j.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Ft.setValue(O,"boneTexture",tn.boneTexture,U))}j.isBatchedMesh&&(Ft.setOptional(O,j,"batchingTexture"),Ft.setValue(O,"batchingTexture",j._matricesTexture,U),Ft.setOptional(O,j,"batchingIdTexture"),Ft.setValue(O,"batchingIdTexture",j._indirectTexture,U),Ft.setOptional(O,j,"batchingColorTexture"),j._colorsTexture!==null&&Ft.setValue(O,"batchingColorTexture",j._colorsTexture,U));const _n=le.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&lt.update(j,le,vn),(Rn||rt.receiveShadow!==j.receiveShadow)&&(rt.receiveShadow=j.receiveShadow,Ft.setValue(O,"receiveShadow",j.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Pn.envMap.value=Ye,Pn.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&Z.environment!==null&&(Pn.envMapIntensity.value=Z.environmentIntensity),Rn&&(Ft.setValue(O,"toneMappingExposure",E.toneMappingExposure),rt.needsLights&&Ga(Pn,Gr),Ce&&ue.fog===!0&&De.refreshFogUniforms(Pn,Ce),De.refreshMaterialUniforms(Pn,ue,G,ce,x.state.transmissionRenderTarget[I.id]),Pc.upload(O,Ha(rt),Pn,U)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Pc.upload(O,Ha(rt),Pn,U),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Ft.setValue(O,"center",j.center),Ft.setValue(O,"modelViewMatrix",j.modelViewMatrix),Ft.setValue(O,"normalMatrix",j.normalMatrix),Ft.setValue(O,"modelMatrix",j.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const tn=ue.uniformsGroups;for(let Sn=0,Wr=tn.length;Sn<Wr;Sn++){const Mt=tn[Sn];q.update(Mt,vn),q.bind(Mt,vn)}}return vn}function Ga(I,Z){I.ambientLightColor.needsUpdate=Z,I.lightProbe.needsUpdate=Z,I.directionalLights.needsUpdate=Z,I.directionalLightShadows.needsUpdate=Z,I.pointLights.needsUpdate=Z,I.pointLightShadows.needsUpdate=Z,I.spotLights.needsUpdate=Z,I.spotLightShadows.needsUpdate=Z,I.rectAreaLights.needsUpdate=Z,I.hemisphereLights.needsUpdate=Z}function $c(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(I,Z,le){Ee.get(I.texture).__webglTexture=Z,Ee.get(I.depthTexture).__webglTexture=le;const ue=Ee.get(I);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=le===void 0,ue.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,Z){const le=Ee.get(I);le.__webglFramebuffer=Z,le.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(I,Z=0,le=0){k=I,D=Z,F=le;let ue=!0,j=null,Ce=!1,ke=!1;if(I){const Ye=Ee.get(I);if(Ye.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(O.FRAMEBUFFER,null),ue=!1;else if(Ye.__webglFramebuffer===void 0)U.setupRenderTarget(I);else if(Ye.__hasExternalTextures)U.rebindTextures(I,Ee.get(I.texture).__webglTexture,Ee.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const nt=I.depthTexture;if(Ye.__boundDepthTexture!==nt){if(nt!==null&&Ee.has(nt)&&(I.width!==nt.image.width||I.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(I)}}const ct=I.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(ke=!0);const ut=Ee.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ut[Z])?j=ut[Z][le]:j=ut[Z],Ce=!0):I.samples>0&&U.useMultisampledRTT(I)===!1?j=Ee.get(I).__webglMultisampledFramebuffer:Array.isArray(ut)?j=ut[le]:j=ut,N.copy(I.viewport),K.copy(I.scissor),$=I.scissorTest}else N.copy(H).multiplyScalar(G).floor(),K.copy(se).multiplyScalar(G).floor(),$=Ue;if(Re.bindFramebuffer(O.FRAMEBUFFER,j)&&ue&&Re.drawBuffers(I,j),Re.viewport(N),Re.scissor(K),Re.setScissorTest($),Ce){const Ye=Ee.get(I.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ye.__webglTexture,le)}else if(ke){const Ye=Ee.get(I.texture),ct=Z||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ye.__webglTexture,le||0,ct)}P=-1},this.readRenderTargetPixels=function(I,Z,le,ue,j,Ce,ke){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Ee.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ke!==void 0&&(je=je[ke]),je){Re.bindFramebuffer(O.FRAMEBUFFER,je);try{const Ye=I.texture,ct=Ye.format,ut=Ye.type;if(!Ve.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=I.width-ue&&le>=0&&le<=I.height-j&&O.readPixels(Z,le,ue,j,ft.convert(ct),ft.convert(ut),Ce)}finally{const Ye=k!==null?Ee.get(k).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(I,Z,le,ue,j,Ce,ke){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Ee.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&ke!==void 0&&(je=je[ke]),je){const Ye=I.texture,ct=Ye.format,ut=Ye.type;if(!Ve.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=I.width-ue&&le>=0&&le<=I.height-j){Re.bindFramebuffer(O.FRAMEBUFFER,je);const nt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,nt),O.bufferData(O.PIXEL_PACK_BUFFER,Ce.byteLength,O.STREAM_READ),O.readPixels(Z,le,ue,j,ft.convert(ct),ft.convert(ut),0);const mt=k!==null?Ee.get(k).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,mt);const Rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await KS(O,Rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,nt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ce),O.deleteBuffer(nt),O.deleteSync(Rt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,Z=null,le=0){I.isTexture!==!0&&(co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,I=arguments[1]);const ue=Math.pow(2,-le),j=Math.floor(I.image.width*ue),Ce=Math.floor(I.image.height*ue),ke=Z!==null?Z.x:0,je=Z!==null?Z.y:0;U.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,le,0,0,ke,je,j,Ce),Re.unbindTexture()};const Wa=O.createFramebuffer(),ja=O.createFramebuffer();this.copyTextureToTexture=function(I,Z,le=null,ue=null,j=0,Ce=null){I.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,I=arguments[1],Z=arguments[2],Ce=arguments[3]||0,le=null),Ce===null&&(j!==0?(co("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=j,j=0):Ce=0);let ke,je,Ye,ct,ut,nt,mt,Rt,Pt;const Wt=I.isCompressedTexture?I.mipmaps[Ce]:I.image;if(le!==null)ke=le.max.x-le.min.x,je=le.max.y-le.min.y,Ye=le.isBox3?le.max.z-le.min.z:1,ct=le.min.x,ut=le.min.y,nt=le.isBox3?le.min.z:0;else{const _n=Math.pow(2,-j);ke=Math.floor(Wt.width*_n),je=Math.floor(Wt.height*_n),I.isDataArrayTexture?Ye=Wt.depth:I.isData3DTexture?Ye=Math.floor(Wt.depth*_n):Ye=1,ct=0,ut=0,nt=0}ue!==null?(mt=ue.x,Rt=ue.y,Pt=ue.z):(mt=0,Rt=0,Pt=0);const bt=ft.convert(Z.format),rt=ft.convert(Z.type);let Jt;Z.isData3DTexture?(U.setTexture3D(Z,0),Jt=O.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(U.setTexture2DArray(Z,0),Jt=O.TEXTURE_2D_ARRAY):(U.setTexture2D(Z,0),Jt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Z.unpackAlignment);const Tt=O.getParameter(O.UNPACK_ROW_LENGTH),vn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ci=O.getParameter(O.UNPACK_SKIP_PIXELS),Rn=O.getParameter(O.UNPACK_SKIP_ROWS),Gr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Wt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Wt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ct),O.pixelStorei(O.UNPACK_SKIP_ROWS,ut),O.pixelStorei(O.UNPACK_SKIP_IMAGES,nt);const Ft=I.isDataArrayTexture||I.isData3DTexture,Pn=Z.isDataArrayTexture||Z.isData3DTexture;if(I.isDepthTexture){const _n=Ee.get(I),tn=Ee.get(Z),Sn=Ee.get(_n.__renderTarget),Wr=Ee.get(tn.__renderTarget);Re.bindFramebuffer(O.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,Wr.__webglFramebuffer);for(let Mt=0;Mt<Ye;Mt++)Ft&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ee.get(I).__webglTexture,j,nt+Mt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ee.get(Z).__webglTexture,Ce,Pt+Mt)),O.blitFramebuffer(ct,ut,ke,je,mt,Rt,ke,je,O.DEPTH_BUFFER_BIT,O.NEAREST);Re.bindFramebuffer(O.READ_FRAMEBUFFER,null),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(j!==0||I.isRenderTargetTexture||Ee.has(I)){const _n=Ee.get(I),tn=Ee.get(Z);Re.bindFramebuffer(O.READ_FRAMEBUFFER,Wa),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,ja);for(let Sn=0;Sn<Ye;Sn++)Ft?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,_n.__webglTexture,j,nt+Sn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_n.__webglTexture,j),Pn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,tn.__webglTexture,Ce,Pt+Sn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,tn.__webglTexture,Ce),j!==0?O.blitFramebuffer(ct,ut,ke,je,mt,Rt,ke,je,O.COLOR_BUFFER_BIT,O.NEAREST):Pn?O.copyTexSubImage3D(Jt,Ce,mt,Rt,Pt+Sn,ct,ut,ke,je):O.copyTexSubImage2D(Jt,Ce,mt,Rt,ct,ut,ke,je);Re.bindFramebuffer(O.READ_FRAMEBUFFER,null),Re.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Pn?I.isDataTexture||I.isData3DTexture?O.texSubImage3D(Jt,Ce,mt,Rt,Pt,ke,je,Ye,bt,rt,Wt.data):Z.isCompressedArrayTexture?O.compressedTexSubImage3D(Jt,Ce,mt,Rt,Pt,ke,je,Ye,bt,Wt.data):O.texSubImage3D(Jt,Ce,mt,Rt,Pt,ke,je,Ye,bt,rt,Wt):I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ce,mt,Rt,ke,je,bt,rt,Wt.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ce,mt,Rt,Wt.width,Wt.height,bt,Wt.data):O.texSubImage2D(O.TEXTURE_2D,Ce,mt,Rt,ke,je,bt,rt,Wt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Tt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ci),O.pixelStorei(O.UNPACK_SKIP_ROWS,Rn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Gr),Ce===0&&Z.generateMipmaps&&O.generateMipmap(Jt),Re.unbindTexture()},this.copyTextureToTexture3D=function(I,Z,le=null,ue=null,j=0){return I.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ue=arguments[1]||null,I=arguments[2],Z=arguments[3],j=arguments[4]||0),co('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,Z,le,ue,j)},this.initRenderTarget=function(I){Ee.get(I).__webglFramebuffer===void 0&&U.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?U.setTextureCube(I,0):I.isData3DTexture?U.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?U.setTexture2DArray(I,0):U.setTexture2D(I,0),Re.unbindTexture()},this.resetState=function(){D=0,F=0,k=null,Re.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Nt._getUnpackColorSpace()}}const Jn=[[[1,1,1,1]],[[1,1],[1,1]],[[0,1,0],[1,1,1]],[[0,1,1],[1,1,0]],[[1,1,0],[0,1,1]],[[1,0,0],[1,1,1]],[[0,0,1],[1,1,1]]],Wn={neon:{colors:[65535,16716947,8388352,16729344,4286945,16766720,9699539],background:2065,grid:35071,border:65535},retro:{colors:[16711680,65280,255,16776960,16711935,65535,16753920],background:1118481,grid:4473924,border:8947848},pastel:{colors:[16757690,12255177,12247551,16777146,16768954,14728191,16765404],background:2763306,grid:4473924,border:6710886},synthwave:{colors:[16711935,65535,16716947,4286945,16729344,8388352,16766720],background:1376293,grid:16711935,border:65535}},xo="synthwave";let Ii=(()=>{try{const s=localStorage.getItem("selectedTheme");let e=Wn[xo];return s&&Wn[s]&&(e=Wn[s]),(!e.colors||e.colors.length!==7)&&(console.warn("Invalid theme structure, falling back to default"),e=Wn[xo]),e}catch(s){return console.error("Error initializing theme:",s),Wn[xo]}})();const wi=Ii.colors,fo=new or(.92,.92,1.2),vs=wi.map(s=>new bo({color:s,opacity:.95,transparent:!0,shininess:100,specular:16777215,emissive:new dt(s).multiplyScalar(.3),flatShading:!1,metalness:.5,roughness:.2})),Oc=wi.map(s=>new bo({color:s,opacity:.2,transparent:!0,shininess:30,emissive:new dt(s).multiplyScalar(.15),side:Kt,depthWrite:!1,blending:Ut,wireframe:!0})),tA=s=>{try{(!Wn[s]||!Wn[s].colors||Wn[s].colors.length!==7)&&(console.warn(`Invalid theme ${s}, using default theme`),s=xo),Ii=Wn[s],localStorage.setItem("selectedTheme",s);const e=[...Ii.colors];wi.length=0,wi.push(...e),vs.forEach((t,i)=>{const o=e[i];t.color.setHex(o),t.emissive.copy(new dt(o).multiplyScalar(.3))}),Oc.forEach((t,i)=>{const o=e[i];t.color.setHex(o),t.emissive.copy(new dt(o).multiplyScalar(.15))})}catch(e){console.error("Error setting theme:",e),Ii=Wn[xo],wi.length=0,wi.push(...Wn[xo].colors)}};class nA{constructor(e){Ne(this,"particles",[]);Ne(this,"scene");Ne(this,"lastUpdate",0);Ne(this,"isAnimating",!1);Ne(this,"backgroundEffects",[]);Ne(this,"energyFields",[]);Ne(this,"glowRings",[]);this.scene=e,this.initializeBackgroundEffects(),this.createEnergyFields(),this.createGlowRings()}initializeBackgroundEffects(){const e=window.innerWidth,t=window.innerHeight,i=e/2,o=t/2;for(let a=0;a<40;a++){const c=new Si(.1,2+Math.random()*3),u=new on({color:new dt().setHSL(Math.random(),.5,.5),transparent:!0,opacity:.2,blending:Ut,side:Kt}),d=new wt(c,u);d.position.set(Math.random()*e-i,Math.random()*t-o,-2+Math.random()),d.rotation.z=Math.random()*Math.PI,this.scene.add(d),this.backgroundEffects.push({mesh:d,velocity:new V((Math.random()-.5)*.05,(Math.random()-.5)*.05,0),life:1})}window.addEventListener("resize",()=>{const a=window.innerWidth,c=window.innerHeight,u=a/2,d=c/2;this.backgroundEffects.forEach(f=>{f.mesh.position.set(Math.random()*a-u,Math.random()*c-d,f.mesh.position.z)})})}createEnergyFields(){const e=window.innerWidth,t=window.innerHeight;for(let i=0;i<5;i++){const o=new Si(20,20),a=new on({color:new dt().setHSL(Math.random(),.7,.5),transparent:!0,opacity:.1,blending:Ut,side:Kt}),c=new wt(o,a);c.position.set((Math.random()-.5)*e,(Math.random()-.5)*t,-6),c.rotation.z=Math.random()*Math.PI,this.scene.add(c),this.energyFields.push(c)}}createGlowRings(){const e=window.innerWidth,t=window.innerHeight;for(let i=0;i<8;i++){const o=new Wc(5,6,32),a=new on({color:new dt().setHSL(Math.random(),.8,.5),transparent:!0,opacity:.15,blending:Ut,side:Kt}),c=new wt(o,a);c.position.set((Math.random()-.5)*e,(Math.random()-.5)*t,-4),this.scene.add(c),this.glowRings.push(c)}}addParticlesForLine(e,t){const i=[],o=new Si(10,1),a=new on({color:16777215,transparent:!0,opacity:.8,side:Kt,blending:Ut}),c=new wt(o,a);c.position.set(5,-e+.5,.1),this.scene.add(c),i.push({mesh:c,velocity:new V(0,0,0),life:.5});for(let u=0;u<t[0].length;u++)if(t[e][u].filled&&t[e][u].color!==null){const d=wi.indexOf(t[e][u].color);if(d!==-1){for(let p=0;p<8;p++){const g=.2+Math.random()*.3,v=new or(g,g,g),y=vs[d].clone();y.transparent=!0,y.emissive=new dt(t[e][u].color),y.emissiveIntensity=.5;const w=new wt(v,y);w.position.set(u+.5,-e+.5,Math.random()*.5),this.scene.add(w);const M=Math.PI*2*p/8,S=.1+Math.random()*.2;i.push({mesh:w,velocity:new V(Math.cos(M)*S,Math.sin(M)*S,Math.random()*.1),life:1+Math.random()})}const f=2;for(let p=0;p<f;p++){const g=new Aa(.05,.05,.8,4),v=new on({color:t[e][u].color,transparent:!0,opacity:.6,blending:Ut}),y=new wt(g,v);y.position.set(u+.5,-e+.5,0),y.rotation.z=Math.random()*Math.PI,this.scene.add(y),i.push({mesh:y,velocity:new V((Math.random()-.5)*.2,(Math.random()-.5)*.2,0),life:.5+Math.random()*.5})}}}this.particles.push(...i),this.isAnimating||this.startAnimation()}addImpactParticles(e,t,i){const a=[];for(let c=0;c<8;c++){const u=.2+Math.random()*.3,d=new or(u,u,u),f=new bo({color:i,opacity:.8,transparent:!0,shininess:30}),p=new wt(d,f);p.position.set(e+.5+(Math.random()-.5)*.3,-t+.5,(Math.random()-.5)*.3),this.scene.add(p);const g=Math.PI*2*c/8;a.push({mesh:p,velocity:new V(Math.cos(g)*.2,Math.abs(Math.sin(g))*.3,Math.sin(g)*.2),life:1+Math.random()})}this.particles.push(...a),this.isAnimating||this.startAnimation()}addLightBeam(e,t,i){const a=new Aa(.1,.3,12,8),c=new bo({color:new dt(i),opacity:.3,transparent:!0,shininess:100,emissive:i,emissiveIntensity:1,blending:Ut}),u=new wt(a,c);u.position.set(e+.5,-t+12/2-.5,0);const d=new Aa(.2,.5,12,8),f=c.clone();f.opacity=.15;const p=new wt(d,f);u.add(p),this.scene.add(u),this.particles.push({mesh:u,velocity:new V(0,2.5,0),life:1.5});const g=8;for(let w=0;w<g;w++){const M=new Da(.1,8,8),S=new on({color:i,transparent:!0,opacity:.5,blending:Ut}),x=new wt(M,S),A=w/g*Math.PI*2;x.position.set(e+.5+Math.cos(A)*.3,-t+.5,Math.sin(A)*.3),this.scene.add(x),this.particles.push({mesh:x,velocity:new V(Math.cos(A)*.05,.2,Math.sin(A)*.05),life:1})}const v=12;for(let w=0;w<v;w++){const M=new Da(.08,8,8),S=new on({color:i,transparent:!0,opacity:.3,blending:Ut}),x=5;for(let A=0;A<x;A++){const T=new wt(M,S.clone()),E=w/v*Math.PI*2,z=.3+A*.1;T.position.set(e+.5+Math.cos(E)*z,-t+.5+A*.2,Math.sin(E)*z),T.scale.set(1-A*.15,1-A*.15,1-A*.15),this.scene.add(T),this.particles.push({mesh:T,velocity:new V(Math.cos(E)*(.05+A*.02),.2+A*.1,Math.sin(E)*(.05+A*.02)),life:1-A*.15})}}const y=6;for(let w=0;w<y;w++){const M=new en,S=[];for(let T=0;T<6;T++){const E=T/6*Math.PI*2;S.push(Math.cos(E)*.1,Math.sin(E)*.1,0,0,0,0)}M.setAttribute("position",new zt(S,3));const x=new tr({color:i,transparent:!0,opacity:.8,blending:Ut}),A=new td(M,x);A.position.set(e+.5+(Math.random()-.5)*.5,-t+.5+Math.random()*.5,(Math.random()-.5)*.5),this.scene.add(A),this.particles.push({mesh:A,velocity:new V((Math.random()-.5)*.1,.3+Math.random()*.2,(Math.random()-.5)*.1),life:.8+Math.random()*.4})}}addLineEffect(e,t,i,o,a){const c=[];c.push(new V(e+.5,-t+.5,.1)),c.push(new V(i+.5,-o+.5,.1));const u=new en().setFromPoints(c),d=new tr({color:a,transparent:!0,opacity:.8,blending:Ut}),f=new nr(u,d);this.scene.add(f);const p=new tr({color:a,transparent:!0,opacity:.4,blending:Ut,linewidth:3}),g=new nr(u,p);g.scale.multiplyScalar(1.2),this.scene.add(g),this.particles.push({mesh:f,velocity:new V(0,0,0),life:.5},{mesh:g,velocity:new V(0,0,0),life:.5});const v=Math.sqrt(Math.pow(i-e,2)+Math.pow(o-t,2)),y=Math.ceil(v*5);for(let w=0;w<y;w++){const M=w/y,S=e+(i-e)*M,x=t+(o-t)*M,A=new en,T=[];for(let D=0;D<6;D++){const F=D/6*Math.PI*2;T.push(Math.cos(F)*.05,Math.sin(F)*.05,0,0,0,0)}A.setAttribute("position",new zt(T,3));const E=new tr({color:a,transparent:!0,opacity:.6,blending:Ut}),z=new td(A,E);z.position.set(S+.5+(Math.random()-.5)*.2,-x+.5+(Math.random()-.5)*.2,.1),this.scene.add(z),this.particles.push({mesh:z,velocity:new V((Math.random()-.5)*.05,(Math.random()-.5)*.05,0),life:.3+Math.random()*.2})}this.isAnimating||this.startAnimation()}startAnimation(){this.isAnimating=!0;const e=()=>{const t=performance.now();t-this.lastUpdate>=16&&(this.lastUpdate=t,this.updateParticles()),this.particles.length>0&&this.isAnimating?requestAnimationFrame(e):this.isAnimating=!1};requestAnimationFrame(e)}updateParticles(){const e=window.innerWidth,t=window.innerHeight,i=e/2,o=t/2;this.backgroundEffects.forEach(a=>{a.mesh.position.add(a.velocity),a.mesh.rotation.z+=.001,a.mesh.position.x>i&&(a.mesh.position.x=-i),a.mesh.position.x<-i&&(a.mesh.position.x=i),a.mesh.position.y>o&&(a.mesh.position.y=-o),a.mesh.position.y<-o&&(a.mesh.position.y=o);const c=Math.sin(Date.now()*.001)*.3+.7;a.mesh.material.opacity=.2*c}),this.energyFields.forEach((a,c)=>{const u=Date.now()*5e-4;a.rotation.z+=.002,a.scale.x=1+Math.sin(u+c)*.2,a.scale.y=1+Math.cos(u+c)*.2,a.material.opacity=.1+Math.sin(u*2+c)*.05}),this.glowRings.forEach((a,c)=>{const u=Date.now()*.001;a.scale.setScalar(1+Math.sin(u+c*.5)*.2),a.rotation.z+=.01,a.material.opacity=.15+Math.sin(u*1.5+c)*.05});for(let a=this.particles.length-1;a>=0;a--){const c=this.particles[a];if(c.mesh.geometry.type==="CylinderGeometry"){c.mesh.scale.y*=.97,c.mesh.scale.x*=.99,c.mesh.scale.z*=.99,c.mesh.position.y+=.3,c.mesh.rotation.y+=.02,c.mesh.material.opacity*=.97;const u=Math.sin(Date.now()*.005)*.1+.9;c.mesh.scale.multiplyScalar(u)}else if(c.mesh.geometry.type==="SphereGeometry"){c.mesh.position.add(c.velocity),c.velocity.y*=.98,c.mesh.rotation.x+=.1,c.mesh.rotation.z+=.1;const u=Math.sin(Date.now()*.01+c.mesh.position.x)*.1+.9;c.mesh.scale.set(u,u,u),c.mesh.material.color&&c.mesh.material.color.offsetHSL(.001,0,0)}else if(c.mesh.type==="LineSegments")c.mesh.position.add(c.velocity),c.mesh.rotation.z+=.1,c.mesh.scale.multiplyScalar(.98),c.mesh.material.opacity=c.life*Math.sin(Date.now()*.01);else if(c.mesh.geometry.type==="PlaneGeometry")c.mesh.material.opacity*=.9,c.mesh.scale.x*=1.05;else if(c.mesh instanceof nr&&!(c.mesh instanceof td)){c.mesh.material.opacity*=.95;const u=Math.sin(Date.now()*.01)*.2+.8;c.mesh.scale.y=u}else c.mesh.rotation.x+=.1,c.mesh.rotation.y+=.1,c.mesh.rotation.z+=.1,c.velocity.y-=.02,c.mesh.position.add(c.velocity),c.mesh.position.x+=Math.sin(Date.now()*.01)*.01,c.mesh.material.opacity=c.life;c.life-=.03,c.life<=0&&(this.scene.remove(c.mesh),this.particles.splice(a,1))}}cleanup(){[...this.energyFields,...this.glowRings].forEach(e=>{this.scene.remove(e),e.geometry.dispose(),e.material.dispose()}),this.energyFields=[],this.glowRings=[]}}class Ug{constructor(e,t){Ne(this,"grid");Ne(this,"width");Ne(this,"height");Ne(this,"game");this.width=e,this.height=t+1,this.grid=this.createGrid()}setGame(e){this.game=e}createGrid(){const e=[];for(let t=0;t<this.height;t++){const i=Array(this.width).fill({color:null,filled:!1});e.push([...i])}return e}clearTetromino(e,t,i){Jn[e].forEach((a,c)=>{a.forEach((u,d)=>{if(u===1){const f=t+d,p=i+c;p>=0&&p<this.height&&f>=0&&f<this.width&&(this.grid[p][f]={color:null,filled:!1})}})})}placeTetromino(e,t,i){Jn[e].forEach((a,c)=>{a.forEach((u,d)=>{if(u===1){const f=t+d,p=i+c;p>=0&&p<this.height&&f>=0&&f<this.width&&(this.grid[p][f]={color:wi[e],filled:!0})}})})}checkCollision(e,t,i){const o=Jn[e];for(let a=0;a<o.length;a++)for(let c=0;c<o[a].length;c++)if(o[a][c]===1){const u=t+c,d=i+a;if(u<0||u>=this.width||d>=this.height||d<-2||d>=0&&d<this.height&&this.grid[d][u].filled)return!0}return!1}checkAndClearLines(e){let t=[];for(let o=this.height-1;o>=0;o--)this.grid[o].every(a=>a.filled)&&t.push(o);if(t.length===0||this.game.isInTargetMode)return 0;const i=t[0];return this.game.startTargetMode(i),1}clearLine(e){for(let t=e;t>0;t--)this.grid[t]=[...this.grid[t-1]].map(i=>({color:i.color,filled:i.filled}));this.grid[0]=Array(this.width).fill(null).map(()=>({color:null,filled:!1}))}}class iA{constructor(e){Ne(this,"game");this.game=e}handleKeyPress(e){if(!this.game.gameOver){switch(e.key.toLowerCase()){case"a":case"arrowleft":this.game.gridManager.clearTetromino(this.game.currentTetromino,this.game.currentX,this.game.currentY),this.game.gridManager.checkCollision(this.game.currentTetromino,this.game.currentX-1,this.game.currentY)||this.game.currentX--,this.game.gridManager.placeTetromino(this.game.currentTetromino,this.game.currentX,this.game.currentY);break;case"d":case"arrowright":this.game.gridManager.clearTetromino(this.game.currentTetromino,this.game.currentX,this.game.currentY),this.game.gridManager.checkCollision(this.game.currentTetromino,this.game.currentX+1,this.game.currentY)||this.game.currentX++,this.game.gridManager.placeTetromino(this.game.currentTetromino,this.game.currentX,this.game.currentY);break;case"s":case"arrowdown":this.game.moveDown();break;case"w":case"arrowup":this.game.rotateTetromino();break;case" ":this.game.hardDrop();break;case"r":this.game.replaceTetromino();break}this.game.renderer.renderScene()}}}class Fg extends If{constructor(e,t={}){const i=t.font;if(i===void 0)super();else{const o=i.generateShapes(e,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(o,t)}this.type="TextGeometry"}}class rA extends Uf{constructor(e){super(e)}load(e,t,i,o){const a=this,c=new cw(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){const d=a.parse(JSON.parse(u));t&&t(d)},i,o)}parse(e){return new sA(e)}}class sA{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],o=oA(e,t,this.data);for(let a=0,c=o.length;a<c;a++)i.push(...o[a].toShapes());return i}}function oA(s,e,t){const i=Array.from(s),o=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*o,c=[];let u=0,d=0;for(let f=0;f<i.length;f++){const p=i[f];if(p===`
`)u=0,d-=a;else{const g=aA(p,o,u,d,t);u+=g.offsetX,c.push(g.path)}}return c}function aA(s,e,t,i,o){const a=o.glyphs[s]||o.glyphs["?"];if(!a){console.error('THREE.Font: character "'+s+'" does not exists in font family '+o.familyName+".");return}const c=new vw;let u,d,f,p,g,v,y,w;if(a.o){const M=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let S=0,x=M.length;S<x;)switch(M[S++]){case"m":u=M[S++]*e+t,d=M[S++]*e+i,c.moveTo(u,d);break;case"l":u=M[S++]*e+t,d=M[S++]*e+i,c.lineTo(u,d);break;case"q":f=M[S++]*e+t,p=M[S++]*e+i,g=M[S++]*e+t,v=M[S++]*e+i,c.quadraticCurveTo(g,v,f,p);break;case"b":f=M[S++]*e+t,p=M[S++]*e+i,g=M[S++]*e+t,v=M[S++]*e+i,y=M[S++]*e+t,w=M[S++]*e+i,c.bezierCurveTo(g,v,y,w,f,p);break}}return{offsetX:a.ha*e,path:c}}class lA{constructor(e,t){Ne(this,"scene");Ne(this,"gridManager");Ne(this,"blocks",[]);Ne(this,"shadowBlocks",[]);Ne(this,"previewBlocks",[]);Ne(this,"directionLabels",[]);Ne(this,"scoreText",null);Ne(this,"keybindText",null);this.scene=e,this.gridManager=t}renderScene(){this.blocks.forEach(e=>this.scene.remove(e)),this.blocks=[];for(let e=0;e<this.gridManager.height;e++)for(let t=0;t<this.gridManager.width;t++){const i=this.gridManager.grid[e][t];if(i.filled&&i.color!==null){const o=vs.findIndex(a=>a.color.getHex()===i.color);if(o!==-1){const a=new wt(fo,vs[o]);a.position.set(t+.5,-e+.5,0),this.scene.add(a),this.blocks.push(a)}}}}updateShadow(e,t,i){this.shadowBlocks.forEach(c=>this.scene.remove(c)),this.shadowBlocks=[];const o=Oc[e];Jn[e].forEach((c,u)=>{c.forEach((d,f)=>{if(d===1){const p=new wt(fo,o);p.position.set(t+f+.5,-(i+u)+.5,0),this.scene.add(p),this.shadowBlocks.push(p)}})})}updateActivePiece(e,t,i){const o=Jn[e],a=vs[e];o.forEach((c,u)=>{c.forEach((d,f)=>{if(d===1){const p=new wt(fo,a);p.position.set(t+f+.5,-(i+u)+.5,0),this.scene.add(p),this.blocks.push(p)}})})}updateNextPiecePreview(e){this.previewBlocks.forEach(f=>this.scene.remove(f)),this.previewBlocks=[],this.directionLabels.forEach(f=>this.scene.remove(f)),this.directionLabels=[];const t=Jn[e],i=vs[e],o=12,a=2;new rA().load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",f=>{const p=new Fg("NEXT PIECE",{font:f,size:.3,height:.05,curveSegments:1,bevelEnabled:!1}),g=new bo({color:65535,transparent:!0,opacity:.9,emissive:65535,emissiveIntensity:.5,shininess:80}),v=new wt(p,g);v.position.set(o-.8,-a+2.5,0),this.scene.add(v),this.directionLabels.push(v);const y=new Fg("Press R to swap",{font:f,size:.25,height:.05,curveSegments:12,bevelEnabled:!1}),w=new bo({color:7829503,transparent:!0,opacity:.7,emissive:4474111,emissiveIntensity:.3,shininess:60}),M=new wt(y,w);M.position.set(o-.6,-a+2,0),this.scene.add(M),this.directionLabels.push(M)}),t.forEach((f,p)=>{f.forEach((g,v)=>{if(g===1){const y=new wt(fo,i.clone());y.material.opacity=.8,y.position.set(o+v+.5,-a-p+.5,0),this.scene.add(y),this.previewBlocks.push(y)}})});const u=new en().setFromPoints([new V(o-.5,-a+1.5,0),new V(o+t[0].length+.5,-a+1.5,0),new V(o+t[0].length+.5,-(a+t.length+.5),0),new V(o-.5,-(a+t.length+.5),0),new V(o-.5,-a+1.5,0)]),d=new nr(u,new tr({color:65535,opacity:.4,transparent:!0,blending:Ut}));this.scene.add(d),this.directionLabels.push(d)}updateScore(e){this.scoreText&&this.scene.remove(this.scoreText);const t=document.querySelector(".fixed.bottom-4.right-4");t&&t.remove();const i=document.createElement("div");i.className="fixed bottom-4 right-4 z-50",i.innerHTML=`
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
            `,document.body.appendChild(i)}}const qt=class qt{constructor(e,t,i,o){Ne(this,"outerCircle");Ne(this,"innerCircle");Ne(this,"hitbox");Ne(this,"startTime");Ne(this,"position");Ne(this,"DURATION",4);Ne(this,"originalX");Ne(this,"originalZ");Ne(this,"radius",5);Ne(this,"angle",0);Ne(this,"orbitSpeed",.002);Ne(this,"orbitRadius",1);Ne(this,"orbitCenterX");Ne(this,"orbitCenterY");Ne(this,"isRotating",!1);Ne(this,"targetZ");Ne(this,"currentZ");Ne(this,"zTransitionSpeed",.1);Ne(this,"game");Ne(this,"isInRotation");this.position=e,this.startTime=Date.now(),this.originalX=e.x,this.originalZ=e.z,this.radius=e.z,this.orbitCenterX=e.x,this.orbitCenterY=e.y,this.game=o,e.z=qt.gameRotationState.normalZ,this.position=e.clone(),this.orbitSpeed=Math.random()*.002+.001,this.orbitRadius=Math.random()*1+.5,this.angle=Math.random()*Math.PI*2,this.innerCircle=new wt(qt.geometries.inner,qt.materials.inner.clone()),this.outerCircle=new wt(qt.geometries.outer,qt.materials.outer.clone()),this.hitbox=new wt(qt.geometries.hitbox,new on({transparent:!0,opacity:0,side:Kt,depthTest:!1})),[this.innerCircle,this.outerCircle,this.hitbox].forEach(a=>{a.position.copy(e);const c=new It;c.lookAt(e,i,new V(0,1,0)),a.quaternion.setFromRotationMatrix(c),a.rotateX(Math.PI/2),t.add(a)}),this.outerCircle.scale.set(3,3,1),this.targetZ=e.z,this.currentZ=e.z,this.position.z=qt.gameRotationState.normalZ,[this.innerCircle,this.outerCircle,this.hitbox].forEach(a=>{a.position.z=qt.gameRotationState.normalZ})}static setGameRotation(e){qt.gameRotationState.isRotating=e,console.log(`Rotation state changed to: ${e}`)}static getCurrentZ(){return qt.gameRotationState.isRotating?qt.gameRotationState.rotatedZ:qt.gameRotationState.normalZ}update(){const e=(Date.now()-this.startTime)*.001,t=Math.min(e/this.DURATION,1);this.angle+=this.orbitSpeed;const i=Math.cos(this.angle)*this.orbitRadius,o=Math.sin(this.angle)*this.orbitRadius,a=this.orbitCenterX+i,c=this.orbitCenterY+o;[this.innerCircle,this.outerCircle,this.hitbox].forEach(f=>{f.position.x=a,f.position.y=c}),this.position.x=a,this.position.y=c;const u=1+Math.sin(e*8)*.2;this.innerCircle.scale.setScalar(u);const d=3*(1-t)+1;this.outerCircle.scale.setScalar(d),this.outerCircle.material.opacity=.8*(1-t),this.outerCircle.rotation.z=e*2}updatePositionWithCamera(e){const t=qt.gameRotationState.isRotating?qt.gameRotationState.rotatedZ:qt.gameRotationState.normalZ,i=this.orbitCenterX-Math.sin(e)*5,o=Math.cos(e)*t;this.position.set(i,this.orbitCenterY,o);const a=new V;this.game.camera.getWorldPosition(a),[this.innerCircle,this.outerCircle,this.hitbox].forEach(c=>{c.position.copy(this.position);const u=new It,d=new V(0,1,0);if(u.lookAt(c.position,a,d),c.quaternion.setFromRotationMatrix(u),qt.gameRotationState.isRotating){const f=e%(Math.PI*2)/(Math.PI*2);c.rotateX(Math.sin(f*Math.PI)*.2)}}),qt.gameRotationState.lastAngle=e}destroy(e){e.remove(this.innerCircle,this.outerCircle,this.hitbox);const t=new wt(qt.geometries.inner,new on({color:Ii.border,transparent:!0,opacity:1,blending:Ut,side:Kt,depthTest:!1}));t.position.copy(this.position),t.lookAt(e.position),e.add(t);let i=1;const o=()=>{t.scale.multiplyScalar(1.1),i*=.9,t.material.opacity=i,i>.01?requestAnimationFrame(o):(e.remove(t),t.material.dispose())};o()}};Ne(qt,"geometries",{inner:new Pa(.5,16),outer:new Wc(.5,.6,16),hitbox:new Pa(.8,8)}),Ne(qt,"materials",{inner:new on({color:Ii.border,transparent:!0,opacity:1,side:Kt,depthTest:!1,blending:Ut}),outer:new on({color:Ii.grid,transparent:!0,opacity:.8,side:Kt,depthTest:!1,blending:Ut})}),Ne(qt,"gameRotationState",{isRotating:!1,normalZ:1,rotatedZ:-1,lastAngle:0});let fs=qt;class cA{constructor(e,t,i){Ne(this,"gridManager");Ne(this,"inputHandler");Ne(this,"renderer");Ne(this,"particleSystem");Ne(this,"currentX");Ne(this,"currentY");Ne(this,"currentTetromino");Ne(this,"gameOver");Ne(this,"dropIntervalId");Ne(this,"scene");Ne(this,"setTetrominoState");Ne(this,"lastRenderTime");Ne(this,"blockInstances");Ne(this,"shadowBlockInstances");Ne(this,"hardDropPressed");Ne(this,"dropAnimation");Ne(this,"camera");Ne(this,"cameraShake");Ne(this,"originalCameraPosition");Ne(this,"nextTetromino");Ne(this,"score",0);Ne(this,"circleTargets",[]);Ne(this,"targetedBlocks",new Set);Ne(this,"isInTargetMode",!1);Ne(this,"requiredTargets",0);Ne(this,"hitTargets",0);Ne(this,"timeoutId",null);Ne(this,"tetrominoBag",[]);Ne(this,"isRotating",!1);Ne(this,"pivotPoint");Ne(this,"ambientParticles",[]);Ne(this,"animationFrameId",null);Ne(this,"initialDropInterval",700);Ne(this,"currentDropInterval",700);Ne(this,"minDropInterval",100);Ne(this,"difficultyIncreaseTimer",null);Ne(this,"speedIncreaseAmount",50);Ne(this,"onGameOver",null);Ne(this,"isPaused",!1);Ne(this,"handleClick",e=>{if(!this.isInTargetMode||this.isPaused)return;const i=e.target.getBoundingClientRect(),o=new Ie((e.clientX-i.left)/i.width*2-1,-((e.clientY-i.top)/i.height)*2+1),a=new gw;a.setFromCamera(o,this.camera);for(let c=this.circleTargets.length-1;c>=0;c--){const u=this.circleTargets[c];if(a.intersectObject(u.hitbox).length>0){this.hitTargets++,this.triggerCameraShake(.4);const d=new Pa(.5,32),f=new on({color:16711680,transparent:!0,opacity:1,blending:Ut,side:Kt,depthTest:!1}),p=new wt(d,f);p.position.copy(u.position),p.lookAt(this.camera.position),this.scene.add(p);const g=()=>{p.scale.multiplyScalar(1.2),p.material.opacity*=.85,p.material.opacity>.01?requestAnimationFrame(g):this.scene.remove(p)};g();for(let v=0;v<8;v++)this.particleSystem.addImpactParticles(u.position.x,u.position.y,16711680);u.destroy(this.scene),this.circleTargets.splice(c,1),this.hitTargets===this.requiredTargets&&this.completeTargetMode(!0);break}}});this.scene=e,this.camera=t,this.setTetrominoState=i,this.gameOver=!1,this.currentX=3,this.currentY=-2,this.lastRenderTime=0,this.hardDropPressed=!1,this.dropAnimation={scale:1,blocks:new Set},this.originalCameraPosition=t.position.clone(),this.cameraShake={enabled:!1,intensity:1,decay:.9},this.blockInstances=this.initializeBlockInstances(),this.shadowBlockInstances=this.initializeShadowBlockInstances(),this.gridManager=new Ug(10,20),this.gridManager.setGame(this),this.renderer=new lA(e,this.gridManager),this.particleSystem=new nA(e),this.inputHandler=new iA(this),this.tetrominoBag=this.generateNewBag(),this.nextTetromino=this.getNextTetromino(),this.score=0,this.setupLighting(),this.initializeAmbientParticles(),this.pivotPoint=new V(5,-10,0),this.startAutoDrop(),this.spawnNewTetromino(),this.renderer.updateScore(this.score),window.addEventListener("click",this.handleClick),this.setupDifficultyIncrease()}cleanup(){var t,i,o;this.dropIntervalId&&(clearInterval(this.dropIntervalId),this.dropIntervalId=null),this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=null),window.removeEventListener("click",this.handleClick),this.gameOver=!1,this.score=0,this.isInTargetMode=!1,this.currentX=3,this.currentY=-2,this.circleTargets.forEach(a=>a.destroy(this.scene)),this.circleTargets=[],(t=this.blocks)==null||t.forEach(a=>{a&&this.scene.contains(a)&&this.scene.remove(a)}),this.ambientParticles.forEach(a=>{this.scene.remove(a.mesh),a.mesh.geometry&&a.mesh.geometry.dispose(),a.mesh.material&&a.mesh.material.dispose()}),this.ambientParticles=[],(i=this.blockInstances)==null||i.forEach(a=>{a&&this.scene.contains(a)&&(this.scene.remove(a),a.geometry.dispose(),a.material.dispose())}),(o=this.shadowBlockInstances)==null||o.forEach(a=>{a&&this.scene.contains(a)&&(this.scene.remove(a),a.geometry.dispose(),a.material.dispose())}),this.blockInstances=this.initializeBlockInstances(),this.shadowBlockInstances=this.initializeShadowBlockInstances(),this.gridManager=new Ug(10,20),this.gridManager.setGame(this),this.tetrominoBag=this.generateNewBag(),this.nextTetromino=this.getNextTetromino(),this.currentTetromino=this.getNextTetromino();const e=[];this.scene.traverse(a=>{a instanceof wt&&a.geometry instanceof or&&e.push(a)}),e.forEach(a=>{this.scene.remove(a),a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose()}),this.renderer.renderScene(),this.difficultyIncreaseTimer&&(clearInterval(this.difficultyIncreaseTimer),this.difficultyIncreaseTimer=null),this.currentDropInterval=this.initialDropInterval}setupLighting(){const e=new pw(2236962,.6),t=new ag(16777215,1.2);t.position.set(5,15,10),t.castShadow=!0;const i=new ag(2245887,.8);i.position.set(-5,5,-10);const o=new ad(65535,1.2);o.position.set(5,-22,10),o.distance=35,o.decay=2;const a=new hw(7816447,.8);a.position.set(5,25,5),a.angle=Math.PI/4,a.penumbra=.5,a.decay=1.5,a.distance=40;const c=new ad(16711935,.4);c.position.set(-15,-10,15);const u=new ad(65535,.4);u.position.set(15,-10,15),this.scene.add(e,t,i,o,a,c,u)}initializeBlockInstances(){return wi.map((e,t)=>{const i=new Y0(fo,vs[t],200);return i.count=0,i})}initializeShadowBlockInstances(){return Oc.map((e,t)=>{const i=new Y0(fo,Oc[t],200);return i.count=0,i})}startAutoDrop(){this.dropIntervalId&&clearInterval(this.dropIntervalId),this.dropIntervalId=setInterval(()=>{!this.gameOver&&!this.isPaused&&this.moveDown()},this.currentDropInterval)}generateNewBag(){const e=Array.from({length:Jn.length},(t,i)=>i);for(let t=e.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}getNextTetromino(){return this.tetrominoBag.length===0&&(this.tetrominoBag=this.generateNewBag()),this.tetrominoBag.pop()}spawnNewTetromino(){if(this.currentTetromino=this.nextTetromino,this.nextTetromino=this.getNextTetromino(),this.currentX=Math.floor((this.gridManager.width-Jn[this.currentTetromino][0].length)/2),this.currentY=-2,this.gridManager.checkCollision(this.currentTetromino,this.currentX,this.currentY)){this.gameOver=!0,clearInterval(this.dropIntervalId),console.log("Game Over - ad di collision spawn"),this.onGameOver&&this.onGameOver(this.score);return}this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY),this.renderer.updateActivePiece(this.currentTetromino,this.currentX,this.currentY),this.renderer.updateNextPiecePreview(this.nextTetromino)}moveDown(){if(!(this.gameOver||this.isPaused)){if(this.gridManager.clearTetromino(this.currentTetromino,this.currentX,this.currentY),!this.gridManager.checkCollision(this.currentTetromino,this.currentX,this.currentY+1))this.currentY++,this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY),this.gridManager.checkAndClearLines(this.particleSystem);else{if(this.currentY<0){this.gameOver=!0,clearInterval(this.dropIntervalId),console.log("Game Over bang cukup bang"),this.onGameOver&&this.onGameOver(this.score);return}this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY);const e=this.gridManager.checkAndClearLines(this.particleSystem);e>0&&(this.score+=e*100,this.renderer.updateScore(this.score),this.triggerCameraShake(3)),this.spawnNewTetromino()}this.renderer.renderScene()}}hardDrop(){if(this.isPaused)return;this.hardDropPressed=!0,this.gridManager.clearTetromino(this.currentTetromino,this.currentX,this.currentY);let e=this.currentY;for(;!this.gridManager.checkCollision(this.currentTetromino,this.currentX,e+1);)e++;if(this.currentY=e,this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY),this.currentY>=0){this.triggerCameraShake(.2);const t=Jn[this.currentTetromino],i=wi[this.currentTetromino];if(t.forEach((a,c)=>{a.forEach((u,d)=>{if(u===1){const f=this.currentX+d,p=this.currentY+c;setTimeout(()=>{this.particleSystem.addLightBeam(f,p,i)},(d+c)*50)}})}),this.gridManager.checkAndClearLines(this.particleSystem)>0){this.triggerCameraShake(.4);const a=new Si(15,25),c=new on({color:16777215,transparent:!0,opacity:.3,side:Kt,blending:Ut}),u=new wt(a,c);u.position.set(5,-10,.1),this.scene.add(u);const d=()=>{u.material.opacity>0?(u.material.opacity-=.05,requestAnimationFrame(d)):this.scene.remove(u)};d()}this.spawnNewTetromino()}this.hardDropPressed=!1,this.renderer.renderScene()}rotateTetromino(){if(this.isPaused)return;this.gridManager.clearTetromino(this.currentTetromino,this.currentX,this.currentY);const e=Jn[this.currentTetromino],t=e[0].map((a,c)=>e.map(u=>u[u.length-1-c])),i=Jn[this.currentTetromino];if(Jn[this.currentTetromino]=t,!this.gridManager.checkCollision(this.currentTetromino,this.currentX,this.currentY)){this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY);return}const o=[{x:1,y:0},{x:-1,y:0},{x:2,y:0},{x:-2,y:0}];for(const a of o)if(!this.gridManager.checkCollision(this.currentTetromino,this.currentX+a.x,this.currentY)){this.currentX+=a.x,this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY);return}Jn[this.currentTetromino]=i,this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY)}replaceTetromino(){if(this.gameOver||this.isPaused)return;this.gridManager.clearTetromino(this.currentTetromino,this.currentX,this.currentY);const e=this.currentTetromino;if(this.currentTetromino=this.nextTetromino,this.nextTetromino=e,this.gridManager.checkCollision(this.currentTetromino,this.currentX,this.currentY)){const t=this.currentTetromino;this.currentTetromino=this.nextTetromino,this.nextTetromino=t,this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY)}else{this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY),this.renderer.updateNextPiecePreview(this.nextTetromino);const t=new Si(2,2),i=new on({color:wi[this.currentTetromino],transparent:!0,opacity:.3,side:Kt,blending:Ut}),o=new wt(t,i);o.position.set(this.currentX+1,-this.currentY-1,.1),this.scene.add(o);const a=()=>{o.material.opacity>0?(o.material.opacity-=.1,requestAnimationFrame(a)):this.scene.remove(o)};a()}this.renderer.renderScene()}handleKeyPress(e){this.gameOver||this.isPaused&&e.key!=="Escape"||this.inputHandler.handleKeyPress(e)}renderGridBorders(e,t){const i=new Ma,o=new tr({color:Ii.grid,opacity:.2,transparent:!0,blending:Ut});for(let g=0;g<=t;g++){const v=g%2===0?.3:.15,y=o.clone();y.opacity=v;const w=new en().setFromPoints([new V(0,-g,0),new V(e,-g,0)]),M=new nr(w,y);i.add(M)}for(let g=0;g<=e;g++){const v=g%2===0?.3:.15,y=o.clone();y.opacity=v;const w=new en().setFromPoints([new V(g,0,0),new V(g,-t,0)]),M=new nr(w,y);i.add(M)}const a=new tr({color:Ii.border,opacity:.8,transparent:!0,blending:Ut}),c=new en().setFromPoints([new V(-.1,.1,0),new V(e+.1,.1,0),new V(e+.1,-(t+.1),0),new V(-.1,-(t+.1),0),new V(-.1,.1,0)]),u=new nr(c,a),d=new tr({color:65535,opacity:.4,transparent:!0,blending:Ut}),f=new en().setFromPoints([new V(-.2,.2,0),new V(e+.2,.2,0),new V(e+.2,-(t+.2),0),new V(-.2,-(t+.2),0),new V(-.2,.2,0)]),p=new nr(f,d);return i.add(u,p),i}calculateShadowPosition(){let e=this.currentY;for(this.gridManager.clearTetromino(this.currentTetromino,this.currentX,this.currentY);!this.gridManager.checkCollision(this.currentTetromino,this.currentX,e+1);)e++;return this.gridManager.placeTetromino(this.currentTetromino,this.currentX,this.currentY),e}updateCameraShake(){this.cameraShake.enabled&&(this.camera.position.set(this.originalCameraPosition.x+(Math.random()-.5)*this.cameraShake.intensity,this.originalCameraPosition.y+(Math.random()-.5)*this.cameraShake.intensity,this.originalCameraPosition.z+(Math.random()-.5)*this.cameraShake.intensity),this.cameraShake.intensity*=this.cameraShake.decay,this.cameraShake.intensity<.01&&(this.cameraShake.enabled=!1,this.camera.position.copy(this.originalCameraPosition)))}triggerCameraShake(e=.5){this.cameraShake.enabled=!0,this.cameraShake.intensity=e}startTargetMode(e){if(this.isInTargetMode)return;this.isInTargetMode=!0,this.hitTargets=0,this.circleTargets=[],this.targetedBlocks.clear();const t=e,i=Math.floor(Math.random()*4)+2;this.requiredTargets=i,console.log(`Creating ${i} targets for line ${e}`),this.camera.position.clone();const o=[];for(let a=0;a<this.gridManager.width;a++)this.gridManager.grid[t][a].filled&&o.push(a);if(o.length<i){console.log("Not enough filled positions for targets"),this.completeTargetMode(!1);return}for(let a=0;a<i;a++){const c=Math.floor(Math.random()*o.length),u=o.splice(c,1)[0],d=new V(u+.5,-t+.5,fs.getCurrentZ()),f=new fs(d,this.scene,this.camera.position,this);this.circleTargets.push(f),this.targetedBlocks.add(`${u},${t}`)}this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout(()=>{this.isInTargetMode&&this.completeTargetMode(!1)},4e3)}completeTargetMode(e){this.isInTargetMode=!1;const t={tetromino:this.currentTetromino,x:this.currentX,y:this.currentY};if(this.gridManager.clearTetromino(this.currentTetromino,this.currentX,this.currentY),this.circleTargets.forEach(i=>i.destroy(this.scene)),this.circleTargets=[],e)for(let i=this.gridManager.height-1;i>=0;i--)this.gridManager.grid[i].every(o=>o.filled)&&(this.createLineClearEffects(i),this.gridManager.clearLine(i),this.score+=100,this.renderer.updateScore(this.score),setTimeout(()=>{this.renderer.renderScene()},100));else this.targetedBlocks.forEach(i=>{const[o,a]=i.split(",").map(Number);this.gridManager.grid[a][o]={color:null,filled:!1}});this.gridManager.placeTetromino(t.tetromino,t.x,t.y),this.renderer.renderScene()}createLineClearEffects(e){const t=new Si(12,.8),i=new on({color:16777215,transparent:!0,opacity:.6,side:Kt,blending:Ut}),o=new wt(t,i);o.position.set(-2,-e+.5,.1),this.scene.add(o);const a=Date.now(),c=()=>{const u=(Date.now()-a)/300;u<1?(o.position.x=-2+u*14,o.material.opacity=.6*(1-u),requestAnimationFrame(c)):this.scene.remove(o)};c();for(let u=0;u<this.gridManager.width;u++)this.gridManager.grid[e][u].filled&&this.gridManager.grid[e][u].color!==null&&setTimeout(()=>{this.particleSystem.addLightBeam(u,e,this.gridManager.grid[e][u].color)},u*50);this.triggerCameraShake(.2)}updateScene(){var o,a;if(this.isPaused||this.gameOver){this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null);return}const e=performance.now();if(e-this.lastRenderTime<16){this.animationFrameId=requestAnimationFrame(()=>this.updateScene());return}this.lastRenderTime=e;const t=Math.abs(this.camera.rotation.y)>.01;t!==this.isRotating&&(this.isRotating=t,fs.setGameRotation(t)),this.circleTargets.forEach(c=>{c.updatePositionWithCamera(this.camera.rotation.y)});const i=this.calculateShadowPosition();this.renderer.updateShadow(this.currentTetromino,this.currentX,i),this.renderer.updateActivePiece(this.currentTetromino,this.currentX,this.currentY),this.renderer.renderScene(),(a=(o=this.particleSystem).updateParticles)==null||a.call(o),this.hardDropPressed?this.blockInstances.forEach(c=>{c.material.opacity=1}):this.blockInstances.forEach(c=>{c.material.opacity=.8}),this.shadowBlockInstances.forEach(c=>{c.count=0,c.instanceMatrix.needsUpdate=!0}),this.updateCameraShake(),this.circleTargets.forEach(c=>c.update()),this.ambientParticles.forEach(c=>{c.mesh.position.add(c.velocity);const u=Date.now()*.001;c.mesh.position.y+=Math.sin(u+c.originalY)*.01,c.mesh.position.x+=Math.cos(u*.5+c.originalY)*.005,c.mesh.rotation.x+=.001,c.mesh.rotation.y+=.002,c.mesh.position.x>20&&(c.mesh.position.x=-20,c.mesh.material.opacity=0),c.mesh.position.x<-20&&(c.mesh.position.x=20,c.mesh.material.opacity=0),c.mesh.position.y>5&&(c.mesh.position.y=-25,c.mesh.material.opacity=0),c.mesh.position.y<-25&&(c.mesh.position.y=5,c.mesh.material.opacity=0);const d=new Ie(c.mesh.position.x-5,c.mesh.position.y+10).length();c.life=(Math.sin(u+c.originalY)+1)*.5;const p=c.life*.4*(1-d/35);if(c.mesh.material.opacity+=(p-c.mesh.material.opacity)*.1,c.mesh.geometry.type==="SphereGeometry"){const v=(u*.1+c.originalY)%1;c.mesh.material.color.setHSL(v,.8,.5)}else if(c.mesh.geometry.type==="OctahedronGeometry"){const v=(u*.05+c.originalY)%1;c.mesh.material.color.setHSL(v,.5,.6)}const g=1+Math.sin(u*2+c.originalY)*.1;c.mesh.scale.setScalar(g)}),this.animationFrameId=requestAnimationFrame(()=>this.updateScene())}async onRotationStart(){return new Promise(e=>{fs.setGameRotation(!0),this.circleTargets.forEach(t=>{t.updatePositionWithCamera(this.camera.rotation.y)}),e()})}onRotationEnd(){fs.setGameRotation(!1),this.circleTargets.forEach(e=>{e.updatePositionWithCamera(this.camera.rotation.y)})}initializeAmbientParticles(){for(let t=0;t<200;t++){const i=Math.random();let o,a;i<.4?(o=new Da(.05+Math.random()*.05,8,8),a=new on({color:new dt().setHSL(Math.random(),.8,.5),transparent:!0,opacity:Math.random()*.3+.1,blending:Ut})):i<.7?(o=new Df(.08+Math.random()*.05),a=new on({color:65535,transparent:!0,opacity:Math.random()*.4+.1,blending:Ut})):(o=new Si(.05,.3+Math.random()*.4),a=new on({color:new dt().setHSL(Math.random(),.5,.5),transparent:!0,opacity:Math.random()*.3+.1,blending:Ut,side:Kt}));const c=new wt(o,a);c.position.set(Math.random()*40-20,Math.random()*40-30,Math.random()*8-4),c.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),this.scene.add(c),this.ambientParticles.push({mesh:c,velocity:new V((Math.random()-.5)*.03,Math.random()*.02-.01,(Math.random()-.5)*.02),life:Math.random(),originalY:c.position.y})}}togglePause(){this.isPaused=!this.isPaused,this.isPaused?(this.dropIntervalId&&(clearInterval(this.dropIntervalId),this.dropIntervalId=null),this.timeoutId&&clearTimeout(this.timeoutId)):(this.startAutoDrop(),this.isInTargetMode&&(this.timeoutId=setTimeout(()=>{this.isInTargetMode&&this.completeTargetMode(!1)},4e3))),this.renderer.renderScene()}setupDifficultyIncrease(){this.difficultyIncreaseTimer=setInterval(()=>{!this.isPaused&&!this.gameOver&&this.increaseSpeed()},1e4)}increaseSpeed(){this.currentDropInterval>this.minDropInterval&&(this.currentDropInterval=Math.max(this.currentDropInterval-this.speedIncreaseAmount,this.minDropInterval),this.dropIntervalId&&clearInterval(this.dropIntervalId),this.startAutoDrop())}handleRestart(){this.currentDropInterval=this.initialDropInterval,this.difficultyIncreaseTimer&&clearInterval(this.difficultyIncreaseTimer),this.setupDifficultyIncrease(),this.startAutoDrop()}}const uA=({theme:s})=>{const e=Og.useRef(null);return Y.useEffect(()=>{const t=e.current;if(!t)return;const i=t.getContext("2d");if(!i)return;const o=Wn[s];if(!o)return;const a=20,c=8,u=8;t.width=c*a+2,t.height=u*a+2,i.fillStyle=`#${o.background.toString(16).padStart(6,"0")}`,i.fillRect(0,0,t.width,t.height),i.strokeStyle=`#${o.grid.toString(16).padStart(6,"0")}`,i.lineWidth=.5;for(let f=0;f<=c;f++)i.beginPath(),i.moveTo(f*a,0),i.lineTo(f*a,t.height),i.stroke();for(let f=0;f<=u;f++)i.beginPath(),i.moveTo(0,f*a),i.lineTo(t.width,f*a),i.stroke();i.strokeStyle=`#${o.border.toString(16).padStart(6,"0")}`,i.lineWidth=2,i.strokeRect(0,0,t.width,t.height),[[[1,1,1,1]],[[1,1],[1,1]],[[1,1,1],[0,1,0]],[[1,1,1],[1,0,0]],[[1,1,1],[0,0,1]],[[1,1,0],[0,1,1]],[[0,1,1],[1,1,0]]].forEach((f,p)=>{const g=o.colors[p],v=1+Math.floor(Math.random()*(c-f[0].length)),y=1+Math.floor(Math.random()*(u-f.length));f.forEach((w,M)=>{w.forEach((S,x)=>{if(S){i.fillStyle=`#${g.toString(16).padStart(6,"0")}`,i.fillRect((v+x)*a,(y+M)*a,a-1,a-1);const A=i.createLinearGradient((v+x)*a,(y+M)*a,(v+x+1)*a,(y+M+1)*a);A.addColorStop(0,`#${g.toString(16).padStart(6,"0")}99`),A.addColorStop(1,`#${g.toString(16).padStart(6,"0")}33`),i.fillStyle=A,i.fillRect((v+x)*a,(y+M)*a,a-1,a-1)}})})})},[s]),R.jsx("canvas",{ref:e,className:"border-2 border-gray-700 rounded-lg shadow-lg",style:{imageRendering:"pixelated"}})},hA="synthwave",kg={W:"W",A:"A",S:"S",D:"D"," ":"SPACE",R:"R",MOUSE1:"MOUSE1"},dA=({onClose:s})=>{const[e,t]=Y.useState(1),i=3,o=Og.useRef(null),[a,c]=Y.useState("right"),[u,d]=Y.useState(!1),[f,p]=Y.useState(3),[g,v]=Y.useState(new Set),[y,w]=Y.useState(""),[M,S]=Y.useState({x:0,y:0}),[x,A]=Y.useState(""),[T,E]=Y.useState(""),z=()=>{if(e<i){c("right"),d(!0),p(3);const N=setInterval(()=>{p(K=>(K===1&&(clearInterval(N),t(e+1),d(!1)),K-1))},1e3)}else s()},D=()=>{e===1?window.location.href="/":(c("left"),t(N=>N-1))},F=()=>{switch(e){case 1:return R.jsxs("div",{className:"space-y-4",children:[R.jsx("h3",{className:"text-xl text-white font-semibold mb-2 drop-shadow-glow",children:"Basic Controls"}),R.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-3",children:[{key:"W",action:"Rotate"},{key:"A",action:"Left"},{key:"S",action:"Down"},{key:"D",action:"Right"},{key:"SPACE",action:"Drop"},{key:"R",action:"Swap"},{key:"MOUSE1",action:"Click"}].map(N=>R.jsxs("div",{className:`flex items-center space-x-2 bg-gray-800/50 p-2 rounded-lg backdrop-blur-sm transition-all duration-300 ${g.has(N.key)?"bg-cyan-900/50 scale-105":""}`,children:[R.jsx("kbd",{className:`px-2 py-1 ${g.has(N.key)?"bg-cyan-500/50 border-cyan-300":"bg-cyan-500/30 border-cyan-400"} text-white text-sm border rounded-md font-mono shadow-glow transition-all duration-300`,children:N.key==="MOUSE1"?"🖱️":N.key}),R.jsx("span",{className:"text-white text-sm",children:N.action})]},N.key))})]});case 2:return R.jsxs("div",{className:"space-y-4",children:[R.jsx("h3",{className:"text-[2.5vh] text-white font-semibold mb-2 drop-shadow-glow",children:"Special Features"}),R.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:[{title:"Dynamic Camera",description:"Auto camera rotation with random interval",icon:"🎥"}].map(N=>R.jsxs("div",{className:"flex items-start space-x-4 bg-gray-800/50 p-[2vh] rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors",children:[R.jsx("span",{className:"text-[4vh]",children:N.icon}),R.jsxs("div",{children:[R.jsx("h4",{className:"text-cyan-200 text-[2.5vh] font-medium",children:N.title}),R.jsx("p",{className:"text-gray-100 text-[1.5vh]",children:N.description})]})]},N.title))}),R.jsx("div",{className:"space-y-4 mt-4",children:R.jsxs("div",{className:"flex flex-col sm:flex-row items-start space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 bg-gray-800/50 p-[2vh] rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors",children:[R.jsx("img",{src:"./assets/images/circle.png",alt:"Circle",className:"w-[12vh] h-[12vh] mx-auto sm:mx-0"}),R.jsxs("div",{children:[R.jsx("h4",{className:"text-cyan-200 text-[2.5vh] font-medium",children:"Circle Click"}),R.jsx("p",{className:"text-gray-100 text-[1.5vh]",children:"Make sure you click on the circle like this to earn score and clear the line"})]})]})})]});case 3:return R.jsxs("div",{className:"space-y-4",children:[R.jsx("h3",{className:"text-xl text-white font-semibold mb-2 drop-shadow-glow text-center",children:"Themes"}),R.jsx("div",{className:"grid grid-cols-2 gap-3",children:Object.entries(Wn).sort().map(([N])=>R.jsxs("div",{onClick:()=>{E(N),localStorage.setItem("selectedTheme",N),tA(N)},className:`relative cursor-pointer rounded-lg p-2 transition-all duration-300
                    ${T===N?"bg-cyan-500/20 ring-1 ring-cyan-400/50 scale-[1.02]":"bg-gray-900/50 hover:bg-gray-800/50"}`,children:[R.jsx("div",{className:"relative aspect-video mb-2 rounded-lg overflow-hidden",children:R.jsx(uA,{theme:N})}),R.jsx("div",{className:"text-sm text-white font-medium text-center",children:N.charAt(0).toUpperCase()+N.slice(1)})]},N))})]});default:return null}},k=Y.useMemo(()=>{const N=[];for(let K=0;K<60;K++)N.push({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,speedX:(Math.random()-.5)*.5,speedY:(Math.random()-.5)*.5,size:Math.random()*3+1,color:`hsla(${180+Math.random()*60}, 100%, 70%, ${.3+Math.random()*.2})`});return N},[]);Y.useEffect(()=>{const N=J=>{const Q=kg[J.key]||J.key.toUpperCase();v(ce=>new Set(ce).add(Q)),J.key==="Escape"&&s(),J.key==="ArrowRight"&&e<i&&t(e+1),J.key==="ArrowLeft"&&e>1&&t(e-1)},K=J=>{const Q=kg[J.key]||J.key.toUpperCase();v(ce=>{const G=new Set(ce);return G.delete(Q),G})},$=J=>{v(Q=>new Set(Q).add("MOUSE1"))},te=()=>{v(J=>{const Q=new Set(J);return Q.delete("MOUSE1"),Q})};return window.addEventListener("keydown",N),window.addEventListener("keyup",K),window.addEventListener("mousedown",$),window.addEventListener("mouseup",te),()=>{window.removeEventListener("keydown",N),window.removeEventListener("keyup",K),window.removeEventListener("mousedown",$),window.removeEventListener("mouseup",te)}},[e,s]);const P=Y.useCallback(N=>{N.clearRect(0,0,window.innerWidth,window.innerHeight);const K=window.innerWidth,$=window.innerHeight;if(!y){const J=N.createRadialGradient(K/2,$/2,0,K/2,$/2,K/2);J.addColorStop(0,"rgba(0, 40, 80, 0.8)"),J.addColorStop(.5,"rgba(0, 20, 40, 0.9)"),J.addColorStop(1,"rgba(0, 10, 20, 0.95)"),N.fillStyle=J,N.fillRect(0,0,K,$)}const te=k.map((J,Q)=>(J.x=(J.x+J.speedX+K)%K,J.y=(J.y+J.speedY+$)%$,J));if(N.save(),te.forEach((J,Q)=>{var Ue;const ce=Math.sin(Date.now()*.002+Q*.1)*.2+.8,G=N.createRadialGradient(J.x,J.y,0,J.x,J.y,J.size*2),he=((Ue=J.color.match(/hsla\(([^)]+)\)/))==null?void 0:Ue[1].split(","))||[],[oe,H,se]=he;G.addColorStop(0,`hsla(${oe}, ${H}, ${se}, ${ce})`),G.addColorStop(1,"transparent"),N.fillStyle=G,N.beginPath(),N.arc(J.x,J.y,J.size*2,0,Math.PI*2),N.fill()}),N.restore(),!y){N.save();for(let J=0;J<k.length;J+=2){const Q=k[J];for(let ce=J+1;ce<k.length;ce+=2){const G=k[ce],he=Q.x-G.x,oe=Q.y-G.y,H=Math.sqrt(he*he+oe*oe);if(H<100){const se=(1-H/100)*.15;N.strokeStyle=`rgba(0, 255, 255, ${se})`,N.lineWidth=1-H/100,N.beginPath(),N.moveTo(Q.x,Q.y),N.lineTo(G.x,G.y),N.stroke()}}}N.restore()}},[k,y]),b=N=>{if(!N)return"rgba(2, 6, 23, 0.95)";const $=Wn[N].background,te=$>>16&255,J=$>>8&255,Q=$&255;return`rgba(${te}, ${J}, ${Q}, 0.95)`};return Y.useEffect(()=>{const N=o.current;N&&(N.style.backgroundColor=b(T))},[T]),Y.useEffect(()=>{const N=o.current;if(!N)return;const K=N.getContext("2d",{alpha:!1});if(!K)return;N.width=window.innerWidth,N.height=window.innerHeight;let $,te=0;const Q=1e3/60,ce=he=>{$=requestAnimationFrame(ce);const oe=he-te;oe<Q||(te=he-oe%Q,P(K))};$=requestAnimationFrame(ce);const G=()=>{N.width=window.innerWidth,N.height=window.innerHeight};return window.addEventListener("resize",G),()=>{cancelAnimationFrame($),window.removeEventListener("resize",G)}},[P]),Y.useEffect(()=>{if(!T){const N=localStorage.getItem("selectedTheme")||hA;E(N)}},[]),R.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50 p-2 animate-fadeIn",children:[R.jsxs("div",{className:"fixed inset-0",children:[R.jsx("canvas",{ref:o,className:"absolute inset-0 w-full h-full",style:{backgroundColor:b(T),transition:"background-color 0.5s ease-in-out"}}),R.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-purple-600/30"}),R.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`
              linear-gradient(to right, rgba(99, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 255, 255, 0.15) 1px, transparent 1px)
            `,backgroundSize:"3vh 3vh",animation:"grid-move 15s linear infinite"}}),R.jsx("div",{className:"absolute inset-0 opacity-20",children:R.jsx("div",{className:"absolute inset-0 bg-repeat",style:{backgroundImage:`
                linear-gradient(45deg, transparent 48%, rgba(0, 255, 255, 0.1) 50%, transparent 52%),
                linear-gradient(-45deg, transparent 48%, rgba(0, 255, 255, 0.1) 50%, transparent 52%)
              `,backgroundSize:"6vh 6vh",animation:"pattern-move 20s linear infinite"}})}),R.jsxs("div",{className:"absolute w-full h-full overflow-hidden",children:[R.jsx("div",{className:"absolute top-1/4 left-1/4 w-[24vh] h-[24vh] bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow"}),R.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-[28vh] h-[28vh] bg-blue-400/20 rounded-full blur-3xl animate-float-slow"}),R.jsx("div",{className:"absolute top-1/2 left-1/2 w-[32vh] h-[32vh] bg-purple-400/20 rounded-full blur-3xl animate-spin-slow"})]}),y==="keypress"&&R.jsxs("div",{className:"absolute inset-0 animate-ripple-fast",children:[R.jsx("div",{className:`absolute inset-0 ${x||"from-cyan-500/10"} via-transparent to-transparent bg-gradient-radial animate-pulse-fast`}),R.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${x||"from-cyan-500/5"} via-transparent to-transparent opacity-80`})]}),y==="click"&&R.jsx("div",{className:"absolute pointer-events-none",style:{left:M.x,top:M.y,transform:"translate(-50%, -50%)"},children:R.jsxs("div",{className:"absolute w-[50vh] h-[50vh] -translate-x-1/2 -translate-y-1/2",children:[R.jsx("div",{className:"absolute inset-0 bg-blue-500/20 rounded-full animate-ripple-out"}),R.jsx("div",{className:"absolute inset-0 bg-cyan-500/10 rounded-full animate-ripple-out-delayed"})]})})]}),R.jsxs("div",{className:"relative max-w-full p-4 sm:p-8",children:[R.jsxs("div",{className:"text-[6vh] sm:text-[9vh] font-bold text-white mb-6 text-center text-shadow-glow animate-slideDown relative group",children:[R.jsx("span",{className:"inline-block animate-float-title transition-all duration-300",children:"2"}),R.jsx("span",{className:"inline-block animate-float-title-delayed mx-2",children:"5"}),R.jsx("span",{className:"inline-block animate-float-title-more-delayed",children:"-"}),R.jsx("span",{className:"inline-block animate-float-title",children:"2"}),R.jsx("div",{className:"absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 group-hover:via-cyan-500/20 transition-all duration-500"})]}),R.jsxs("div",{className:"relative bg-gray-900/80 border-2 border-cyan-400/50 rounded-xl p-4 sm:p-8 max-w-3xl w-full mx-auto backdrop-blur-md animate-slideUp",children:[R.jsx("div",{className:"absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 opacity-50 animate-pulse"}),R.jsxs("div",{className:"relative bg-gray-900/90 p-4 sm:p-8 rounded-lg overflow-hidden",children:[R.jsx("div",{className:"absolute -top-4 -right-4 animate-bounce-slow",children:R.jsx("button",{onClick:s,className:"bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none transition-all duration-300 transform hover:scale-110 hover:rotate-180 active:scale-95",children:"×"})}),R.jsxs("h2",{className:"text-[3vh] sm:text-[4vh] sm:text-[5vh] font-bold text-white mb-6 text-center text-shadow-glow animate-slideDown relative group",children:[R.jsx("span",{className:"inline-block animate-float-title transition-all duration-300",children:"HOW"}),R.jsx("span",{className:"inline-block animate-float-title-delayed mx-2",children:"TO"}),R.jsx("span",{className:"inline-block animate-float-title-more-delayed",children:"PLAY"}),R.jsx("div",{className:"absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 group-hover:via-cyan-500/20 transition-all duration-500"})]}),R.jsx("div",{className:"text-white text-shadow-sm",children:R.jsx("div",{className:`transition-all duration-500 transform ${a==="right"?"animate-slideInRight":"animate-slideInLeft"}`,children:F()},e)}),R.jsxs("div",{className:"mt-8 flex items-center justify-between animate-fadeIn",children:[R.jsxs("button",{onClick:D,className:`px-4 sm:px-6 py-2 rounded-lg text-white font-medium relative overflow-hidden group 
                  bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 
                  transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 
                  active:scale-95`,children:[R.jsx("span",{className:"relative z-10",children:e===1?"Back to Home":"Previous"}),R.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-1"}),R.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)]"})]}),R.jsx("div",{className:"flex space-x-3",children:Array.from({length:i}).map((N,K)=>R.jsxs("div",{className:`relative ${K+1===e?"scale-125":""} transition-all duration-300`,children:[R.jsx("div",{className:`w-[1vh] h-[1vh] rounded-full transition-all duration-500 ${K+1===e?"bg-cyan-400 animate-ping-slow":"bg-gray-600 hover:bg-gray-400"}`}),K+1===e&&R.jsx("div",{className:"absolute inset-0 bg-cyan-400/30 rounded-full animate-ripple"})]},K))}),R.jsxs("button",{onClick:z,disabled:u,className:`px-4 sm:px-6 py-2 text-white rounded-lg font-medium relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 active:scale-95 ${u?"opacity-50 cursor-not-allowed":""}`,children:[R.jsx("span",{className:"relative z-10 group-hover:animate-pulse-fast",children:u?`Please wait... ${f}`:e===i?"Start":"Next"}),R.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),R.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_100%)]"}),R.jsx("div",{className:"absolute -inset-px bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x"})]})]})]})]})]})]})},fA=`
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
`,Dv=document.createElement("style");Dv.innerText=fA;document.head.appendChild(Dv);const pA=({score:s,onClose:e})=>{const t=()=>{const i=window.open("https://bluejack.binus.ac.id/nar/home/registration","_blank","noopener,noreferrer");i&&i.focus()};return R.jsxs("div",{className:"fixed inset-0 flex items-center justify-center z-50 animate-fadeIn",children:[R.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm"}),R.jsxs("div",{className:`relative bg-gray-900/90 border-2 border-white rounded-xl p-8 max-w-md w-full mx-auto 
                          backdrop-blur-md animate-slideUp`,children:[R.jsx("div",{className:`absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 
                              opacity-50 animate-pulse`}),R.jsxs("div",{className:"relative space-y-6 text-center",children:[R.jsx("h2",{className:"text-4xl font-bold text-white mb-6 text-shadow-glow animate-slideDown",children:"Game Over!"}),R.jsxs("div",{className:"text-2xl text-white mb-8 animate-float",children:["Final Score: ",s]}),R.jsx("div",{className:"space-y-4",children:R.jsx("button",{onClick:t,className:`w-full px-6 py-3 text-lg font-semibold text-white rounded-lg 
                                     bg-gradient-to-r from-cyan-500 to-blue-500 
                                     hover:from-cyan-400 hover:to-blue-400 
                                     transition-all duration-300 transform hover:scale-105 
                                     hover:shadow-xl hover:shadow-cyan-500/25 
                                     active:scale-95`,children:"Continue"})})]})]})]})},mA=({onClose:s,onRestart:e})=>{const t=Bc();return Y.useEffect(()=>{const i=o=>{o.key==="Escape"&&s()};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[s]),R.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50",children:R.jsxs("div",{className:"bg-white/20 p-8 rounded-xl border-2 border-white/50 max-w-md w-full mx-4 shadow-2xl backdrop-blur-lg transform animate-slideDown",children:[R.jsx("h2",{className:"text-3xl font-bold text-white mb-8 text-center drop-shadow-glow",children:"Settings"}),R.jsxs("div",{className:"space-y-4",children:[R.jsx("button",{onClick:e,className:`w-full py-4 px-6 rounded-lg bg-gradient-to-r from-white/80 to-pink-400/80 text-gray-800 font-bold 
                     hover:from-white hover:to-pink-400 transition-all duration-300 transform hover:scale-105 
                     hover:shadow-lg active:scale-95 backdrop-blur-sm`,children:"Restart Game"}),R.jsx("button",{onClick:()=>t("/"),className:`w-full py-4 px-6 rounded-lg bg-gradient-to-r from-white/80 to-purple-400/80 text-gray-800 font-bold 
                     hover:from-white hover:to-purple-400 transition-all duration-300 transform hover:scale-105 
                     hover:shadow-lg active:scale-95 backdrop-blur-sm`,children:"Back to Home"})]})]})})},gA=()=>{const s=Y.useRef(null),[e,t]=Y.useState(!0),[i,o]=Y.useState({tetromino:0,startX:3,startY:0}),a=Y.useRef(null),c=Y.useRef(0),u=Y.useRef(!1),d=Y.useRef(null),f=Y.useRef(null),[p,g]=Y.useState(!1),[v,y]=Y.useState(0),[w,M]=Y.useState(!1),[S,x]=Y.useState(!1);Y.useEffect(()=>{const k=()=>{x(window.innerWidth<768)};return window.addEventListener("resize",k),k(),()=>window.removeEventListener("resize",k)},[]);const A=k=>{y(k),g(!0)},T=()=>{g(!1),a.current&&(a.current=null),E()},E=()=>{const k=new S1;k.background=new dt(Ii.background);const P=new Gn(75,window.innerWidth/window.innerHeight,.1,1e3);P.position.set(5,-10,16),P.lookAt(5,-10,0);const b=new an;b.position.set(5,-10,0),k.add(b),b.add(P),P.position.set(0,0,16),f.current=b;const N=new eA({antialias:!0,alpha:!0,powerPreference:"high-performance"});N.setPixelRatio(window.devicePixelRatio),N.setSize(window.innerWidth,window.innerHeight),N.setClearColor(0,0),N.gammaFactor=2.2,N.outputEncoding=void 0;const K=()=>{P.aspect=window.innerWidth/window.innerHeight,P.updateProjectionMatrix(),N.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",K),K();const $=s.current;if(!$)return;$.innerHTML="",$.appendChild(N.domElement);const te=new cA(k,P,o);a.current=te,te.onGameOver=A,te.spawnNewTetromino();const J=te.renderGridBorders(10,20);k.add(J);let Q=0;const ce=he=>{he-Q>=16&&(N.render(k,P),te&&te.updateScene(),Q=he),requestAnimationFrame(ce)};requestAnimationFrame(ce);const G=()=>{d.current&&clearInterval(d.current);const he=async()=>{if(!u.current&&f.current){let H=function(){const fe=Date.now()-Ue,Me=Math.min(fe/ie,1),ve=1-Math.pow(1-Me,3),Le=c.current+Math.PI*ve;f.current.rotation.y=Le,Me<1?requestAnimationFrame(H):(c.current=se,setTimeout(()=>{const ze=Date.now();function Xe(){const gt=Date.now()-ze,xe=Math.min(gt/ie,1),be=1-Math.pow(1-xe,3),O=se-Math.PI*be;f.current.rotation.y=O,xe<1?requestAnimationFrame(Xe):(c.current=se-Math.PI,u.current=!1,a.current&&(console.log("rotation end"),a.current.onRotationEnd()))}Xe()},5e3+Math.random()*1e4))};a.current&&a.current.onRotationStart(),u.current=!0;const se=c.current+Math.PI,Ue=Date.now(),ie=1e3;H()}},oe=()=>{const H=3e4+Math.random()*1e4;d.current=setTimeout(()=>{he(),oe()},H)};oe()};return setTimeout(()=>{G()},1e3),()=>{$&&$.contains(N.domElement)&&$.removeChild(N.domElement),window.removeEventListener("resize",K),N.dispose(),a.current=null,d.current&&(clearInterval(d.current),d.current=null),f.current=null}};Y.useEffect(()=>{localStorage.getItem("skipTutorial")==="true"&&(t(!1),localStorage.removeItem("skipTutorial"))},[]),Y.useEffect(()=>{if(!e){const k=E(),P=b=>{a.current&&a.current.handleKeyPress(b)};return window.addEventListener("keydown",P),()=>{var N;k(),window.removeEventListener("keydown",P),(N=a.current)!=null&&N.dropIntervalId&&clearInterval(a.current.dropIntervalId);const b=document.querySelector(".fixed.bottom-4.right-4");b&&b.remove()}}},[e]),Y.useEffect(()=>{const k=P=>{P.key==="Escape"&&M(b=>(a.current,!b))};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[]);const z=()=>{M(!0),a.current&&a.current.togglePause()},D=()=>{M(!1),a.current&&a.current.togglePause()},F=()=>{M(!1),g(!1),localStorage.setItem("skipTutorial","true"),window.location.reload()};return S?R.jsx("div",{className:"flex flex-col items-center justify-center min-h-screen bg-white p-8",children:R.jsxs("div",{className:"animate-float-slow text-center space-y-6 max-w-md",children:[R.jsx("h1",{className:"text-2xl font-bold animate-fade-in-up mb-4 text-shadow-neon",children:"Desktop Experience Required"}),R.jsxs("p",{className:"text-lg mb-8 ",children:["please switch to a"," ",R.jsx("span",{className:"text-sky font-bold ",children:"laptop"})," or"," ",R.jsx("span",{className:"text-sky font-bold ",children:"PC"})," to play the game."]}),R.jsxs("button",{onClick:()=>window.location.href="/",className:"group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 animate-fade-in-up-delay-2",children:[R.jsx("div",{className:"absolute inset-0 rounded-full bg-black blur-lg opacity-50 group-hover:opacity-75 transition-opacity"}),R.jsxs("div",{className:"relative flex items-center justify-center  text-black",children:[R.jsx("svg",{className:"w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:R.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})}),R.jsx("span",{className:"group-hover:translate-x-1 transition-transform",children:"Return to Home"})]})]})]})}):R.jsxs("div",{className:"relative overflow-hidden hide-scrollbar",children:[R.jsx("div",{className:"fixed inset-0 bg-black z-50 pointer-events-none transition-opacity duration-300 opacity-0"}),R.jsx("button",{onClick:z,className:"fixed top-4 left-4 z-50 p-3 rounded-full bg-white border border-cyan-500/30 hover:bg-white transition-all duration-300 group backdrop-blur-sm",children:R.jsxs("svg",{className:"w-6 h-6 text-cyan-400 group-hover:rotate-90 transition-transform duration-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[R.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),R.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})}),w&&R.jsx(mA,{onClose:D,onRestart:F}),e&&R.jsx(dA,{onClose:()=>t(!1)}),p&&R.jsx(pA,{score:v,onClose:T}),R.jsx("div",{ref:s,style:{width:"100%",height:"100vh"}})]})};function vA(){return R.jsx(z_,{children:R.jsxs(m_,{children:[R.jsx(Sc,{path:"/game",element:R.jsx(gA,{})}),R.jsx(Sc,{path:"/",element:R.jsx(oS,{})}),R.jsx(Sc,{path:"*",element:R.jsx(f_,{to:"/",replace:!0})})]})})}Ey.createRoot(document.getElementById("root")).render(R.jsx(Y.StrictMode,{children:R.jsx(vA,{})}));
