(this["webpackJsonpelfsight-tz"]=this["webpackJsonpelfsight-tz"]||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a,r=n(12),c=n.n(r),s=n(21),l=n(96),i=n(97),o=n(98),u=s.c,d=n(7);!function(e){e.SetData="SetData",e.SetError="SetError",e.SetIsLoading="SetIsLoading"}(a||(a={}));var j,p,f={processInfo:{isLoading:!1,error:null},renderData:[],meta:{}},b=n(33),O=n.n(b),h=n(52),v="".concat("https://rickandmortyapi.com/api","/character"),x=function(e,t){return e.match("page=")?e.replace(/page=\d+/,"page=".concat(t)):e.match("\\?")?"".concat(e,"&page=").concat(t):"".concat(e,"?page=").concat(t)},g=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.keys(t),a=n[0];return"".concat(v,"?").concat(a,"=").concat(null===(e=t[a])||void 0===e?void 0:e.value).concat(n.slice(1).reduce((function(e,n){var a;return e+="&".concat(n,"=").concat(null===(a=t[n])||void 0===a?void 0:a.value)}),""))},m=n(13);!function(e){e.Name="name",e.Status="status",e.Species="species",e.Gender="gender",e.Type="type"}(p||(p={}));var y,C=(j={},Object(m.a)(j,p.Name,{type:"input",placeHolderText:"\u043a\u0430\u043a \u0437\u043e\u0432\u0443\u0442?"}),Object(m.a)(j,p.Type,{type:"input",placeHolderText:"\u043a\u0430\u043a\u043e\u0439 \u0442\u0438\u043f?"}),Object(m.a)(j,p.Species,{type:"input",placeHolderText:"\u043a\u0430\u043a\u0430\u044f \u0440\u0430\u0441\u0430?"}),Object(m.a)(j,p.Status,{type:"select",options:["Alive","Dead","unknown"]}),Object(m.a)(j,p.Gender,{type:"select",options:["male","female","genderless","unknown"]}),j),I=function(e){var t=e.url,n=void 0===t?v:t,a=e.resolve,r=e.reject;return fetch(n).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(){return r("something goes wrong")}))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{resolve:k,reject:w},t=e.url,n=e.resolve,a=void 0===n?k:n,r=e.reject,c=void 0===r?w:r;return function(){var e=Object(h.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,I({url:t,resolve:a,reject:c});case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(e){return{type:a.SetData,payload:e}},w=function(e){return{type:a.SetError,payload:e}},R={setIsLoading:function(e){return{type:a.SetIsLoading,payload:e}},setData:k,getNextPage:function(e,t){var n;switch(e){case"first":return _({url:x(t.prev,1)});case"next":return _({url:t.next});case"last":return _({url:x(t.next,t.pages)});case"prev":return _({url:null!==(n=t.prev)&&void 0!==n?n:v})}},setError:w,getData:_};!function(e){e.Open="Open",e.Close="Close"}(y||(y={}));var N,S={},F={open:function(e){return{type:y.Open,data:e}},close:function(){return{type:y.Close}}};!function(e){e.SetFiltered="SetFiltered",e.SetChanges="SetChanges",e.ResetFilters="ResetFilters"}(N||(N={}));var T=function(e){var t;return Object.keys(null!==(t=e.filters)&&void 0!==t?t:[]).some((function(t){var n,a;return Boolean(null===(n=e.filters)||void 0===n||null===(a=n[t])||void 0===a?void 0:a.value)}))},M={isFiltered:!1,hasChanges:!1,filters:{}},L={setFiltered:function(e){return{type:N.SetFiltered,payload:e}},setChanges:function(e){var t=e.payload,n=e.filterType;return{type:N.SetChanges,payload:t,filterType:n}},resetFilters:function(){return{type:N.ResetFilters}}},D=(Object(d.a)(Object(d.a)(Object(d.a)({},f),S),M),{dataReducer:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.SetData:return n.payload.results?Object(d.a)(Object(d.a)({},t),{},{renderData:n.payload.results,meta:null!==(e=n.payload.info)&&void 0!==e?e:{},processInfo:{isLoading:!1,error:null}}):Object(d.a)(Object(d.a)({},t),{},{renderData:[],meta:{},processInfo:{isLoading:!1,error:"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043d\u0438\u043a\u0442\u043e \u043d\u0435 \u043d\u0430\u0448\u0451\u043b\u0441\u044f. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438."}});case a.SetError:return Object(d.a)(Object(d.a)({},t),{},{processInfo:{isLoading:!1,error:n.payload}});case a.SetIsLoading:return Object(d.a)(Object(d.a)({},t),{},{processInfo:{isLoading:n.payload,error:null}});default:return Object(d.a)({},t)}},popupReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.Close:return S;case y.Open:return{data:t.data};default:return Object(d.a)({},e)}},filterReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.ResetFilters:return Object(d.a)(Object(d.a)({},e),{},{hasChanges:!1,isFiltered:!1,filters:{}});case N.SetFiltered:return Object(d.a)(Object(d.a)({},e),{},{isFiltered:t.payload});case N.SetChanges:var n=Object(d.a)(Object(d.a)({},e),{},{filters:Object(d.a)(Object(d.a)({},e.filters),{},Object(m.a)({},t.filterType,{value:t.payload}))});return n.hasChanges=T(n),n;default:return Object(d.a)({},e)}}}),z=Object(d.a)(Object(d.a)(Object(d.a)({},R),F),L),A=n(22),E=function(){return Object(A.b)(z,Object(s.b)())},H=function(e){var t=e.dataReducer,n=t.characterData,a=t.renderData,r=t.meta;return{characterData:n,renderData:a,processInfo:t.processInfo,meta:r}},P=function(e){return e.dataReducer.processInfo.error},V=function(e){var t=e.filterReducer;return{filters:t.filters,isFiltered:t.isFiltered,hasChanges:t.hasChanges}},B=function(e){return{data:e.popupReducer.data}},G=n(1),J=n(3),W=function(){var e=u(H),t=e.processInfo,n=e.meta,a=E(),r=a.getNextPage,c=a.setIsLoading,s=Object(G.useCallback)((function(e){c(!0),r(e,n)}),[n,r,c]);if(t.isLoading||(null===n||void 0===n?void 0:n.pages)<2)return Object(J.jsx)(J.Fragment,{});var d=function(e){if(!e.prev)return 1;if(!e.next)return e.pages;var t=e.prev.split("page=");return+t[t.length-1].split("&")[0]+1}(n),j=1===d,p=d===n.pages;return Object(J.jsxs)(l.a,{className:"pt-2",children:[Object(J.jsx)(i.a,{disabled:j,children:Object(J.jsx)(o.a,{href:"#",onClick:function(){return s("first")},children:"<<"})}),Object(J.jsx)(i.a,{disabled:j,children:Object(J.jsx)(o.a,{href:"#",onClick:function(){return s("prev")},children:"<"})}),Object(J.jsx)(i.a,{active:!0,children:Object(J.jsx)(o.a,{children:d})}),Object(J.jsx)(i.a,{disabled:p,children:Object(J.jsx)(o.a,{href:"#",onClick:function(){return s("next")},children:">"})}),Object(J.jsx)(i.a,{disabled:p,children:Object(J.jsx)(o.a,{href:"#",onClick:function(){return s("last")},children:">>"})})]})},q=n(107),K=n(100),Q=n(101),U=(n(70),function(e){var t,n=e.item,a=e.enableNameClick,r=void 0===a||a,c=E(),s=c.open,l=c.getData,i=Object(G.useCallback)((function(e){l({url:"".concat(v,"/").concat(e),resolve:s})}),[l,s]);return Object(J.jsxs)("article",{className:"RIMO__smallCard d-flex rounded",children:[Object(J.jsx)("div",{className:"RIMO__smallCard-photo-wrapper w-100",children:Object(J.jsx)("img",{className:"RIMO__smallCard-photo w-100 h-100",src:null===n||void 0===n?void 0:n.image,alt:null===n||void 0===n?void 0:n.type})}),Object(J.jsxs)("div",{className:"RIMO__smallCard-info position-relative text-white d-flex flex-column",children:[Object(J.jsxs)("section",{className:"RIMO__smallCard-content-wrapper d-flex flex-column",children:[Object(J.jsx)("p",{className:"RIMO__smallCard-name",onClick:function(){return r?i(n.id):function(){}},children:null===n||void 0===n?void 0:n.name}),Object(J.jsxs)("span",{className:"RIMO__smallCard-status d-flex align-items-center text-capitalize",children:[Object(J.jsx)("span",{className:"RIMO__smallCard-status-icon RIMO__smallCard-status-icon--"+(null===n||void 0===n?void 0:n.status)}),null===n||void 0===n?void 0:n.status]})]}),Object(J.jsxs)("section",{className:"RIMO__smallCard-content-wrapper d-flex flex-column",children:[Object(J.jsx)("span",{className:"RIMO__smallCard-location-info-wrapper",children:"Last known location:"}),Object(J.jsx)("p",{className:"RIMO__smallCard-location-info",children:null===n||void 0===n?void 0:n.location.name})]}),Object(J.jsxs)("section",{className:"RIMO__smallCard-content-wrapper d-flex flex-column",children:[Object(J.jsx)("span",{className:"RIMO__smallCard-firstSeries-info",children:"First seen in:"}),Object(J.jsx)("p",{className:"RIMO__smallCard-firstSeries",children:null===n||void 0===n||null===(t=n.origin)||void 0===t?void 0:t.name})]})]})]})}),X=n(99),Y=function(){var e=u(H),t=e.renderData;return e.processInfo.isLoading?Object(J.jsx)(X.a,{color:"primary",style:{width:"5vw",height:"5vw"},children:" "}):Object(J.jsx)("main",{className:"bg-white h-100 w-100 rounded p-2 d-flex flex-wrap justify-content-between",children:t.map((function(e){return Object(J.jsx)(U,{item:e},e.id)}))})},Z=(n(71),function(){return Object(J.jsx)("header",{className:"RIMO__header bg-info justify-content-center align-items-center d-flex text-white font-monospace",children:"Rick and Morty Widget"})}),$=function(){var e=u(B).data,t=E().close;return Object(J.jsxs)(q.a,{isOpen:Boolean(e),toggle:t,size:"lg",children:[Object(J.jsx)(K.a,{toggle:t,children:"Character"}),Object(J.jsx)(Q.a,{children:e?Object(J.jsx)(U,{item:e,enableNameClick:!1}):Object(J.jsx)(J.Fragment,{})})]})},ee=function(e){var t=e.children,n=u(P);return n?Object(J.jsx)("div",{className:"text-white",children:n}):Object(J.jsx)(J.Fragment,{children:t})},te=n(24),ne=n(102),ae=n(108),re=n(109),ce=n(110),se=n(103),le=function(e){var t,n=e.selectorText,a=e.headerText,r=e.filterValues,c=e.filterType,s=e.onChange,l=Object(G.useState)(!1),i=Object(te.a)(l,2),o=i[0],d=i[1],j=u(V).filters,p=Object(G.useCallback)((function(e,t){return null===s||void 0===s?void 0:s(e,t)}),[s]),f=Object(G.useCallback)((function(){return d((function(e){return!e}))}),[d]),b=null===j||void 0===j||null===(t=j[c])||void 0===t?void 0:t.value;return Object(J.jsx)(ne.a,{className:"p-2",children:Object(J.jsxs)(ae.a,{addonType:"prepend",isOpen:o,toggle:f,children:[Object(J.jsx)(re.a,{color:b?"success":"secondary",caret:!0,children:b||n}),Object(J.jsxs)(ce.a,{children:[Object(J.jsx)(se.a,{onClick:function(){return p("",c)},children:"\u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c"}),Object(J.jsx)(se.a,{divider:!0}),a&&Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(se.a,{header:!0,children:a}),Object(J.jsx)(se.a,{divider:!0})]}),r.options.map((function(e){return Object(J.jsx)(se.a,{active:e===b,onClick:function(){return p(e,c)},children:e},e)}))]})]})})},ie=n(56),oe=n(53),ue=n(104),de=n(57),je=n(105),pe=function(e){var t,n,a=e.onChange,r=e.labelText,c=e.placeHolderText,s=e.className,l=e.filterType,i=u(V).filters,o=Object(G.useCallback)((function(e){var t=e.target.value;return null===a||void 0===a?void 0:a(t,l)}),[a,l]),d=null!==(t=null===i||void 0===i||null===(n=i[l])||void 0===n?void 0:n.value)&&void 0!==t?t:"";return Object(J.jsxs)(ne.a,{className:(s||"")+" p-2 ",children:[Object(J.jsx)(ue.a,{addonType:"prepend",children:Object(J.jsx)(de.a,{className:d?"btn-success":"",children:r})}),Object(J.jsx)(je.a,{placeholder:c,value:d,onChange:o})]})},fe=(n(92),["isIconFilled"]),be=function(){var e=E(),t=e.resetFilters,n=e.setFiltered,a=e.setChanges,r=e.getData,c=e.setIsLoading,s=u(V),l=s.filters,i=s.isFiltered,o=s.hasChanges,d=Object(G.useState)(!1),j=Object(te.a)(d,2),p=j[0],f=j[1],b=Object(G.useCallback)((function(){c(!0),t(),r()}),[c,t,r]),O=Object(G.useCallback)((function(){c(!0),n(!0),f(!1),r({url:g(l)})}),[c,n,f,r,l]),h=Object(G.useCallback)((function(){return f((function(e){return!e}))}),[f]),v=Object(G.useCallback)((function(){return Object.entries(C).map((function(e){var t=Object(te.a)(e,2),n=t[0],r=t[1];return"input"===r.type?Object(J.jsx)(pe,{labelText:n,placeHolderText:r.placeHolderText,filterType:n,onChange:function(e,t){return a({filterType:t,payload:e})}},n):Object(J.jsx)(le,{selectorText:n,filterValues:r,filterType:n,onChange:function(e,t){return a({filterType:t,payload:e})}},n)}))}),[a]);return Object(J.jsxs)("div",{className:"RIMO__filterPanel",children:[Object(J.jsx)(Oe,{isIconFilled:i,onClick:h}),Object(J.jsxs)(q.a,{isOpen:p,toggle:h,children:[Object(J.jsxs)(K.a,{toggle:h,className:"position-relative",children:["Filter Panel",o&&Object(J.jsx)(oe.a,{className:"RIMO__filterPanel-icon",color:"success",onClick:O,children:"Accept"}),i&&Object(J.jsx)(oe.a,{className:"RIMO__filterPanel-resetButton",color:"link",size:"sm",onClick:b,children:"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"})]}),Object(J.jsx)(Q.a,{children:v()})]})]})},Oe=function(e){var t=e.isIconFilled,n=Object(ie.a)(e,fe);return Object(J.jsxs)("svg",Object(d.a)(Object(d.a)({stroke:"currentColor",fill:"#fff",strokeWidth:"0",viewBox:"0 0 16 16",height:"24px",width:"24px",xmlns:"http://www.w3.org/2000/svg"},n),{},{children:[t&&Object(J.jsx)("path",{d:"M2 3.5v-2h12v2l-4.5 5v5l-3 1v-6L2 3.5z"}),Object(J.jsx)("path",{fillRule:"evenodd",d:"M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z",clipRule:"evenodd"})]}))},he=n(106),ve=(n(93),function(){var e=E(),t=e.getData,n=e.setIsLoading;return Object(G.useEffect)((function(){n(!0),t()}),[t,n]),Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(Z,{}),Object(J.jsxs)(he.a,{fluid:!0,className:"bg-dark RIMO p-5 d-flex flex-column justify-content-center align-items-center\r position-relative",children:[Object(J.jsx)(be,{}),Object(J.jsxs)(ee,{children:[Object(J.jsx)(Y,{}),Object(J.jsx)(W,{})]})]}),Object(J.jsx)($,{})]})}),xe=n(58),ge=Object(A.c)(D),me=Object(A.d)(ge,{},Object(A.a)(xe.a));n(94);c.a.render(Object(J.jsx)(s.a,{store:me,children:Object(J.jsx)(ve,{})}),document.querySelector("#root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.95e6e04e.chunk.js.map