(this["webpackJsonpfuture-group-tz"]=this["webpackJsonpfuture-group-tz"]||[]).push([[4],{110:function(e,t,a){"use strict";a.r(t);var n=a(58),r=a(59),c=a(73),l=a(24),u=a(1),s=a.n(u),o=a(109),i=a(112),m=a(111),d=a(108),f=a(55),p=a(75),E=a.n(p),b=function(e){var t=Object(u.useState)(!1),a=Object(l.a)(t,2),n=a[0],c=a[1],s=Object(u.useState)(null),o=Object(l.a)(s,2),i=o[0],m=o[1],d=Object(u.useState)(null),f=Object(l.a)(d,2),p=f[0],b=f[1],O=Object(u.useState)({}),j=Object(l.a)(O,2),v=j[0],y=j[1],h=Object(u.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};y(e),c(!0)}),[]);return Object(u.useEffect)((function(){if(n){var t=Object(r.a)({},v);E()("/"+e,t).then((function(e){var t=e.data;c(!1),m(t)})).catch((function(e){var t=e.response.data;c(!1),b(t)}))}}),[n,v,e]),[{isLoading:n,response:i,error:p},h]},O={id:"desc",firstName:"desc",lastName:"desc",email:"desc",phone:"desc"},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=function(e,t){var a=e.commonData,n=Object(r.a)({},t,{id:a.map((function(e){return e.id})).reduce((function(e,t){return e>t?e:t}))+1,address:{streetAddress:"",city:"",state:"",zip:""},description:""});return a.unshift(n),{commonData:a,type:e.page?"full":"partial",data:a.slice(0,50),page:1,sorted:{id:"desc",firstName:"desc",lastName:"desc",email:"desc",phone:"desc"}}},n=function(e,t){var a=50*t,n=a-50;return Object(r.a)({},e,{page:t,sorted:O,data:e.commonData.slice(n,a)})},c=Object(u.useCallback)((function(e){var t=e.data,a=e.type;if(!a||!t||!t[0])return t||{data:[]};var n="full"===a,c={page:n?1:0,sorted:{id:"desc",firstName:"desc",lastName:"desc",email:"desc",phone:"desc"},data:n?t.slice(0,50):t};return Object(r.a)({},c,{commonData:t})}),[]),s=Object(u.useCallback)((function(e,t){var a=n(e,e.page);if(!t)return a;var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{lowercase:!0,trim:!0},t=e.lowercase,a=e.trim;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!e||!n)return null;var r=function(e){var n=t?e.toLowerCase():e;return n=n.split("").sort(),a?n.filter((function(e){return e.trim()})):n};e=r(e),n=r(n);var c=[];return n.forEach((function(t){var a=e.find((function(e){return e===t}));a&&e.splice(e.indexOf(a),1)&&c.push(a)})),c.sort().join("")===n.join("")}}({lowercase:!0,trim:!0}),l=Object.keys(O),u=a.data.filter((function(e){return Object.keys(e).some((function(a){return l.includes(a)&&c(String(e[a]),t)}))}));return Object(r.a)({},e,{data:u})}),[]),o=Object(u.useCallback)((function(e,t){var l=t.type,u=t.payload;switch(l){case"UPDATE":return c({data:u.response,type:u.tableType});case"SORT":return Object(r.a)({},e,{data:u.newData,sorted:u.sorted});case"NEW_PAGE":return n(e,u.page);case"SEARCH":return s(e,u.query);case"ADD":return a(e,u.userInfo);default:return e}}),[c,s]),i=Object(u.useReducer)(o,{initialState:e,type:t},c),m=Object(l.a)(i,2),d=m[0],f=m[1];return[d,f]},v=a(99),y=a(100),h=a(101),g=function(e){var t,a,n=e.length,r=e.dispatch,l=e.setSortStatus,u=e.currentPage,o=e.setSelectedRow,i=e.setSearchQuery;return s.a.createElement(v.a,{size:"xs"},(t=1,a=Math.floor(n/50),Object(c.a)(Array(a).keys()).map((function(e){return e+t}))).map((function(e){var t={onClick:function(){r({type:"NEW_PAGE",payload:{page:e}}),l(O),o(""),i("")}};return s.a.createElement(y.a,{active:u===e,key:e},s.a.createElement(h.a,t,e))})))},S=a(102),N=a(103),k=a(104),C=a(53),D=function(e){var t=e.dispatch,a=e.setSelectedRow,n=e.value,r=e.setValue;return s.a.createElement(S.a,{onSubmit:function(e){e.preventDefault(),a(""),t({type:"SEARCH",payload:{query:n}})}},s.a.createElement(N.a,{className:"d-flex"},s.a.createElement(k.a,{type:"text",onChange:function(e){return r(e.target.value)},value:n,placeholder:"\u0427\u0442\u043e \u0438\u0449\u0435\u043c?"}),s.a.createElement(C.a,null,"\u041f\u043e\u0438\u0441\u043a!")))},w=a(105),A=function(e){var t=e.firstName,a=e.lastName,n=e.description,r=e.address,c=r.streetAddress,l=r.city,u=r.state,o=r.zip;return s.a.createElement(S.a,{className:"border p-3"},s.a.createElement(N.a,null,s.a.createElement(w.a,null,"\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ",t," ",a)),s.a.createElement(N.a,null,s.a.createElement(w.a,null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),s.a.createElement(k.a,{type:"textarea",value:n,readOnly:!0,style:{resize:"none"}})),s.a.createElement(N.a,null,s.a.createElement(w.a,null,"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f: ",c)),s.a.createElement(N.a,null,s.a.createElement(w.a,null,"\u0413\u043e\u0440\u043e\u0434: ",l)),s.a.createElement(N.a,null,s.a.createElement(w.a,null,"\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f/\u0448\u0442\u0430\u0442\u0430: ",u)),s.a.createElement(N.a,null,s.a.createElement(w.a,null,"\u0418\u043d\u0434\u0435\u043a\u0441: ",o)))},T=a(106),R=a(107),z=a(93),x=function(e){var t=e.dispatch,a=e.setVisible,n=Object(u.useState)(""),r=Object(l.a)(n,2),c=r[0],o=r[1],i=Object(u.useState)(""),m=Object(l.a)(i,2),d=m[0],f=m[1],p=Object(u.useState)(""),E=Object(l.a)(p,2),b=E[0],O=E[1],j=Object(u.useState)(""),v=Object(l.a)(j,2),y=v[0],h=v[1],g=Object(u.useState)(!0),D=Object(l.a)(g,2),w=D[0],A=D[1],x=Object(u.useState)({firstName:c,lastName:d,phone:b,email:y}),P=Object(l.a)(x,2),V=P[0],F=P[1];Object(u.useEffect)((function(){F((function(){return{firstName:c,lastName:d,phone:b,email:y}}))}),[c,d,b,y]),Object(u.useEffect)((function(){A(Object.keys(V).some((function(e){return!Boolean(V[e])})))}),[V]);return s.a.createElement(S.a,{onSubmit:function(e){e.preventDefault(),o(""),f(""),O(""),h(""),A(!0),t({type:"ADD",payload:{userInfo:V}}),a(!1)}},s.a.createElement(T.a,null,s.a.createElement(R.a,{addonType:"prepend"},s.a.createElement(z.a,null,"firstName")),s.a.createElement(k.a,{value:c,onChange:function(e){return o(e.target.value)}})),s.a.createElement("br",null),s.a.createElement(T.a,null,s.a.createElement(R.a,{addonType:"prepend"},s.a.createElement(z.a,null,"lastName")),s.a.createElement(k.a,{value:d,onChange:function(e){return f(e.target.value)}})),s.a.createElement("br",null),s.a.createElement(T.a,null,s.a.createElement(R.a,{addonType:"prepend"},s.a.createElement(z.a,null,"email")),s.a.createElement(k.a,{value:y,onChange:function(e){return h(e.target.value)}})),s.a.createElement("br",null),s.a.createElement(T.a,null,s.a.createElement(R.a,{addonType:"prepend"},s.a.createElement(z.a,null,"phone")),s.a.createElement(k.a,{value:b,onChange:function(e){return O(e.target.value)}})),s.a.createElement("br",null),s.a.createElement(N.a,null,s.a.createElement(C.a,{color:"success",disabled:w},"add")))},P=function(e){var t=e.dispatch,a=Object(u.useState)(!1),n=Object(l.a)(a,2),r=n[0],c=n[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.a,{className:"mb-4"},s.a.createElement(C.a,{color:"primary",onClick:function(){return c((function(e){return!e}))}},"Add Member")),r&&s.a.createElement(d.a,null,s.a.createElement(x,{dispatch:t,setVisible:c})))};t.default=function(e){var t=e.tableType,a=b({full:"full",partial:"partial"}[t]),p=Object(l.a)(a,2),E=p[0],v=E.response,y=E.isLoading,h=E.error,S=p[1],N=j(null),k=Object(l.a)(N,2),C=k[0],w=k[1],T=Object(c.a)(Object.keys(O)),R=Object(u.useState)(O),z=Object(l.a)(R,2),x=z[0],V=z[1],F=Object(u.useState)(null),L=Object(l.a)(F,2),q=L[0],G=L[1],H=Object(u.useState)(""),I=Object(l.a)(H,2),J=I[0],M=I[1],Q=function(e){var t=function(e,t,a){var r="asc"===a[e]?"desc":"asc",c={asc:{">":1,"<":-1},desc:{">":-1,"<":1}};return[t.sort((function(t,a){var n=t[e],l=a[e];return n>l?c[r][">"]:n<l?c[r]["<"]:0})),a=Object(n.a)({sortedFields:O},e,r)]}(e,C.data,C.sorted),a=Object(l.a)(t,2),r=a[0],c=a[1];w({type:"SORT",payload:{newData:r,sorted:c}})};Object(u.useEffect)((function(){return S()}),[S]),Object(u.useEffect)((function(){w({type:"UPDATE",payload:{response:v,tableType:t}})}),[v,t,w]);if(y||!C||!C.commonData)return s.a.createElement(d.a,{className:"d-flex justify-content-center"},s.a.createElement(f.a,{color:"primary"}));if(h)return s.a.createElement("div",null,"Something goes wrong");var U={dispatch:w,setSortStatus:V,setSearchQuery:M,setSelectedRow:G,length:C.commonData.length,currentPage:C.page},W={dispatch:w,setSelectedRow:G,value:J,setValue:M};return s.a.createElement(s.a.Fragment,null,s.a.createElement(P,{dispatch:w}),s.a.createElement(d.a,{className:"mb-4"},s.a.createElement(D,W)),s.a.createElement(d.a,null,function(e){var t=e.data;return s.a.createElement(o.a,{dark:!0,size:"sm",hover:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,T.map((function(e){return s.a.createElement("th",{onClick:function(){return Q(e)},key:e},s.a.createElement(i.a,{toggle:function(){V((function(t){return Object(r.a)({},O,Object(n.a)({},e,"desc"===t[e]?"asc":"desc"))}))},direction:"desc"===x[e]?"down":"up"},s.a.createElement(m.a,{caret:!0},e)))})))),s.a.createElement("tbody",null,t.map((function(e,t){var a=e.id,n=e.firstName,r=e.lastName,c=e.email,l=e.phone;return s.a.createElement("tr",{key:t,onClick:function(){return function(e){G(e===q?"":e)}(a)},style:{backgroundColor:q===a&&"rgba(255, 255, 255, 0.075)"}},s.a.createElement("td",null,a),s.a.createElement("td",null,n),s.a.createElement("td",null,r),s.a.createElement("td",null,c),s.a.createElement("td",null,l))}))))}(C)),s.a.createElement(d.a,null,"full"===t&&s.a.createElement(g,U)),q&&s.a.createElement(A,Object(r.a)({},C.data.find((function(e){return e.id===q})))))}}}]);
//# sourceMappingURL=4.b4c3bce1.chunk.js.map