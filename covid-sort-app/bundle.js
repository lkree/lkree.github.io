!function(e){var t={};function a(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=6)}([function(e,t,a){var n=a(1),i=a(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={insert:"head",singleton:!1},r=(n(i,s),i.locals?i.locals:{});e.exports=r},function(e,t,a){"use strict";var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},s=function(){var e={};return function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[t]=a}return e[t]}}(),r=[];function d(e){for(var t=-1,a=0;a<r.length;a++)if(r[a].identifier===e){t=a;break}return t}function c(e,t){for(var a={},n=[],i=0;i<e.length;i++){var s=e[i],c=t.base?s[0]+t.base:s[0],o=a[c]||0,l="".concat(c," ").concat(o);a[c]=o+1;var f=d(l),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(r[f].references++,r[f].updater(u)):r.push({identifier:l,updater:b(u,t),references:1}),n.push(l)}return n}function o(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=a.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var r=s(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,a,n){var i=a?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=f(t,i);else{var s=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function _(e,t,a){var n=a.css,i=a.media,s=a.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),s&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var h=null,p=0;function b(e,t){var a,n,i;if(t.singleton){var s=p++;a=h||(h=o(t)),n=u.bind(null,a,s,!1),i=u.bind(null,a,s,!0)}else a=o(t),n=_.bind(null,a,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var a=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<a.length;n++){var i=d(a[n]);r[i].references--}for(var s=c(e,t),o=0;o<a.length;o++){var l=d(a[o]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=s}}}},function(e,t,a){var n=a(3),i=a(4),s=a(5);t=n(!1);var r=i(s);t.push([e.i,'*{box-sizing:border-box;margin:0;padding:0}body{overflow-x:hidden}ul{list-style:none}.lds-dual-ring{display:flex;height:100vh;justify-content:center;align-items:center}.lds-dual-ring::after{content:"";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid #000;border-color:#000 transparent #000 transparent;animation:lds-dual-ring 1.2s linear infinite}@keyframes lds-dual-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.infected__header{margin-top:10px}.infected-header{display:flex;justify-content:space-between;flex-wrap:wrap}.infected-header__search{margin:0 15px 15px}.infected-header__header{color:#00008b;font-size:20px;text-align:center}.infected-header__toggle{margin:0 15px 15px}.infected-header__russia-info{margin:0 15px 15px}@media(max-width: 1160px){.infected-header__header{width:100%;order:-2;margin:0 15px 15px}}@media(max-width: 900px){.infected-header{flex-direction:column;justify-content:center;align-items:center}.infected-header__toggle{order:-1}}@media(max-width: 650px){.infected-header{flex-direction:row}}.infected-search{display:flex;justify-content:center;align-items:center;padding:15px;border:2px solid #9acd32;border-radius:10px}.infected-table__table,.infected-table__header,.infected-table__header-item,.infected-table__body-item{display:flex}.infected-table__aside{flex-basis:25%}.infected-table__body{flex-basis:75%}.infected-table__header-item,.infected-table__body{flex-basis:52%}.infected-table__header-item--name,.infected-table__aside{flex-basis:48%}.infected-table__item-cases,.infected-table__item-cured,.infected-table__item-deaths,.infected-table__item-name{font-weight:700;flex-basis:25%;text-align:center}.infected-table__item-cases:hover,.infected-table__item-cured:hover,.infected-table__item-deaths:hover,.infected-table__item-name:hover{cursor:pointer}.infected-table__item-cases,.infected-table__item-cured,.infected-table__item-deaths,.infected-table__body-sub-item{flex-basis:calc(100% / 3)}.infected-table__item-name{flex-basis:100%}.infected-table__body-sub-item{text-align:center}.infected-table__aside-item,.infected-table__item-cases,.infected-table__item-cured,.infected-table__item-deaths,.infected-table__item-name,.infected-table__body-sub-item{border-right:1px solid #000;padding:5px 10px;border-bottom:1px solid #000;background:#fff}.infected-table__aside-sub-item{white-space:nowrap}.infected-table__inner-cases_delta .infected-table__inner-text{background:#6495ed}.infected-table__inner-cured_delta .infected-table__inner-text{background:#90ee90}.infected-table__inner-deaths_delta .infected-table__inner-text{background:#cd5c5c}.infected-table__inner-text{padding:0 10px;border-radius:5px;white-space:nowrap}.infected-table__body-sub-item span{margin-left:5px}@media(max-width: 900px){.infected-table__header-item--name,.infected-table__aside{flex-basis:25%;z-index:1}.infected-table__header-item--else,.infected-table__body{flex-basis:75%;transition:all .5s ease}.infected-table__sub-item--name,.infected-table__item--name{border-left:1px solid #000}.infected-table__header,.infected-table__table{width:200vw;position:relative}.infected-table__item-cases,.infected-table__item-cured,.infected-table__item-deaths{flex-basis:100%}}@media(max-width: 750px){.infected-table__aside-item,.infected-table__body-sub-item{height:60px;display:flex;justify-content:center;align-items:center}.infected-table__aside-sub-item{white-space:normal}.infected-table__aside-item{justify-content:flex-start;font-size:14px}}.infected-toggle{display:inline-flex;flex-direction:column;padding:15px;font-size:18px;color:#6495ed;border:2px solid #9acd32;border-radius:10px}.infected-toggle__wrapper{display:flex;margin-top:10px}.infected-toggle__advantages-wrapper{display:flex;margin-left:10px}.infected-toggle__advantage-item{color:#000;padding:0 10px;border-radius:5px}.infected-toggle__advantage-item:not(:last-of-type){margin-right:10px}.infected-toggle__advantage-item--cases_delta{background:#6495ed}.infected-toggle__advantage-item--cured_delta{background:#90ee90}.infected-toggle__advantage-item--deaths_delta{background:#cd5c5c}@media(max-width: 550px){.infected-toggle__wrapper{flex-direction:column}.infected-toggle__advantages-wrapper{margin:10px 0 0;justify-content:center}}.infected-nav__button{position:absolute;display:none}@media(max-width: 900px){.infected-nav__button{display:block;border:none;background:url('+r+") no-repeat;background-size:contain;font-size:0;width:25px;height:25px}.infected-nav__button--right{left:46%}.infected-nav__button--left{left:25.5%;transform:rotate(180deg)}}.russia-info{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;border:2px solid #9acd32;border-radius:5px;padding:15px;font-weight:700}.russia-info__header{font-size:25px;margin-bottom:10px}.russia-info__sub-header{margin-bottom:20px;color:#999}.russia-info__date{color:#000}.russia-info__main{width:100%;display:flex;justify-content:space-around}.russia-info__item{padding:5px 15px}.russia-info__border{border-right:1px solid #cecece}.russia-info__item-header{color:#999}.russia-info__cured-delta{color:#219653}.russia-info__cases-delta{color:#4f4f4f}.russia-info__deaths-delta{color:#eb5757}.russia-info__item-count{font-size:30px;margin:8px 0}.russia-info__item-info{font-size:18px}@media(max-width: 900px){.russia-info{width:auto}}@media(max-width: 750px){.russia-info__item{width:49%}.russia-info__item--cured{border-right:solid 1px #ddd}.russia-info__item--cases{text-align:right}.russia-info__item--deaths{width:100%;text-align:center;border-top:solid 1px #ddd;padding:15px}.russia-info{margin-bottom:30px}.russia-info__border{display:none}.russia-info__main{flex-wrap:wrap;justify-content:space-between}}@media(max-width: 500px){.russia-info{width:auto}.russia-info__item-header{display:flex;flex-direction:column}}",""]),e.exports=t},function(e,t,a){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=function(e,t){var a=e[1]||"",n=e[3];if(!n)return a;if(t&&"function"==typeof btoa){var i=(r=n,d=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(c," */")),s=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[a].concat(s).concat([i]).join("\n")}var r,d,c;return[a].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(i[r]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);n&&i[c[0]]||(a&&(c[2]?c[2]="".concat(a," and ").concat(c[2]):c[2]=a),t.push(c))}},t}},function(e,t,a){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,a){"use strict";a.r(t),t.default=a.p+"db011c6c6d777e1672226e50a2fc8f08.svg"},function(e,t,a){"use strict";a.r(t);var n=(e="https://yastat.net/s3/milab/2020/covid19-stat/data/data_struct_1.json?ts=1587573816")=>fetch(e).then(e=>e.json());var i={class:"lds-dual-ring",_getHtml(){return`<div class="${this.class}"></div>`},_setHTML(e){e?document.body.insertAdjacentHTML("beforeend",e):document.body.removeChild(document.body.querySelector("."+this.class))},hideLoader(){this._setHTML("")},showLoader(){this._setHTML(this._getHtml())}};const s=(e,t,a)=>e=e.sort((e,n)=>{const{[t]:i}=e,{[t]:s}=n;return i>s?"asc"===a?1:-1:i<s?"asc"===a?-1:1:0}),r=e=>Math.round(e/1e3);class d{constructor(e,t){this.headerWrapper=document.createElement("div"),this.regionToggle="",this.header="",this.search="",this.tableHeader="",this.russiaInfo="",this.data=e,this.options=t}customizeHeaderWrapper(){return this.headerWrapper.classList.add("infected__header","infected-header"),this}createRegionToggle(){var e;return this.regionToggle=(e=s(this.data,"name","asc"),new c(e,this).createWrapper().getFavouriteCity().createSelect().createOptions().fillSelect().createAdvantage().fillWrapper()),this}createHeader(){return this.header='<header class="infected-header__header">Распостронение COVID-19 в России</header>',this}createSearch(){return this.search='<div class="infected-search infected-header__search">\n                        <label class="infected-search__label">\n                          Поиск <input type="text" class="infected-search__input">\n                        </label>\n                      </div>',this}createTableHeader(){return this.tableHeader='<ul class="infected-table__header">\n              <li class="infected-table__header-item infected-table__header-item--name">\n                <div class="infected-table__item-name">Область</div>\n              </li>\n              <li class="infected-table__header-item infected-table__header-item--else">\n                <div class="infected-table__item-cases">Больные</div>\n                <div class="infected-table__item-cured">Выздоровевшие</div>\n                <div class="infected-table__item-deaths">Умершие</div>\n              </li>\n              <li class="infected-table__header-nav">\n                <button class="infected-nav__button infected-nav__button--right">-></button>\n                <button class="infected-nav__button infected-nav__button--left"><-</button>\n              </li>\n            </ul>',this}createRussiaInfo(){var e;return this.russiaInfo=(e=this.options.russiaInfo,`\n  <section class="russia-info infected-header__russia-info">\n    <header class="russia-info__header">Статистика по России</header>\n    <p class="russia-info__sub-header">Данные актуальны на <span class="russia-info__date">${this.options.currentDate}</span></p>\n    <main class="russia-info__main">\n      <div class="russia-info__item russia-info__item--cured">\n        <header class="russia-info__item-header russia-info__item-header--cured"><span class="russia-info__cured-delta">+ ${e.cured_delta}</span> (за сутки)</header>\n        <main class="russia-info__item-main">\n          <p class="russia-info__item-count">${r(e.cured)} тыс.</p>\n          <p class="russia-info__item-info">Выздоровели</p>\n        </main>\n      </div>\n      <div class="russia-info__border"></div>\n      <div class="russia-info__item russia-info__item--cases">\n        <header class="russia-info__item-header russia-info__item-header--cases"><span class="russia-info__cases-delta">+ ${e.cases_delta}</span> (за сутки)</header>\n        <main class="russia-info__item-main">\n          <p class="russia-info__item-count">${r(e.cases)} тыс.</p>\n          <p class="russia-info__item-info">Заразились</p>\n        </main>\n      </div>\n      <div class="russia-info__border"></div>\n      <div class="russia-info__item russia-info__item--deaths">\n        <header class="russia-info__item-header russia-info__item-header--deaths"><span class="russia-info__deaths-delta">+ ${e.deaths_delta}</span> (за сутки)</header>\n        <main class="russia-info__item-main">\n          <p class="russia-info__item-count">${r(e.deaths)} тыс.</p>\n          <p class="russia-info__item-info">Умерли</p>\n        </main>\n      </div>\n    </main>\n  </section>\n`),this}fillContent(){return this.headerWrapper.insertAdjacentHTML("afterbegin",this.russiaInfo),this.headerWrapper.insertAdjacentHTML("afterbegin",this.regionToggle),this.headerWrapper.insertAdjacentHTML("afterbegin",this.header),this.headerWrapper.insertAdjacentHTML("afterbegin",this.search),document.body.insertAdjacentHTML("afterbegin",this.tableHeader),document.body.insertAdjacentHTML("afterbegin",this.headerWrapper.outerHTML),this}renderAndInsertTable(){return l(this.data),this}}class c{constructor(e,t){this.wrapper=document.createElement("div"),this.items="",this.select=document.createElement("select"),this.advantages="",this.data=e,this.self=t}createWrapper(){return this.wrapper=document.createElement("div"),this.wrapper.classList.add("infected-header__toggle","infected-toggle"),this.wrapper.textContent="Мой регион: ",this}getFavouriteCity(){var e;return this.favouriteCity=(null===(e=this.self.options)||void 0===e?void 0:e.favourite)?this.data.find(e=>{var t;return e.name===(null===(t=this.self.options)||void 0===t?void 0:t.favourite)}):{cases_delta:0,deaths_delta:0,cured_delta:0,name:"",deaths:0,cured:0,cases:0},this}createSelect(){return this.select=document.createElement("select"),this.select.classList.add("infected-toggle__select"),this}createOptions(){return this.data.forEach(e=>{var t;this.items+=`<option value="${e.name}" ${e.name===(null===(t=this.self.options)||void 0===t?void 0:t.favourite)&&"selected"}>${e.name}</option>`}),this}fillSelect(){return this.select.insertAdjacentHTML("afterbegin",this.items),this}createAdvantage(){return this.advantages=`\n            <div class='infected-toggle__advantages-wrapper'>\n              <div class="infected-toggle__advantage-item infected-toggle__advantage-item--cases_delta">+&nbsp;${this.favouriteCity.cases_delta}</div>\n              <div class="infected-toggle__advantage-item infected-toggle__advantage-item--cured_delta">+&nbsp;${this.favouriteCity.cured_delta}</div>\n              <div class="infected-toggle__advantage-item infected-toggle__advantage-item--deaths_delta">+&nbsp;${this.favouriteCity.deaths_delta}</div>\n            </div>`,this}fillWrapper(){const e=document.createElement("div");return e.classList.add("infected-toggle__wrapper"),e.append(this.select),e.insertAdjacentHTML("beforeend",this.advantages),this.wrapper.append(e),this.wrapper.outerHTML}}class o{constructor(e,t){this.wrapper=document.createElement("ul"),this.aside=document.createElement("li"),this.body=document.createElement("li"),this.withDeletion=!1,this.data=e,this.withDeletion=t}deleteTable(){return this.withDeletion&&document.body.removeChild(document.querySelector(".infected-table__table")),this}createWrapper(){return this.wrapper.classList.add("infected-table__table"),this}createPart(e,t,a){this[t].classList.add(e);let n="";return this.data.forEach(e=>n+=this[a](e)),this[t].insertAdjacentHTML("afterbegin",n),this}fillWrapper(){return this.wrapper.append(this.aside),this.wrapper.append(this.body),this}uploadWrapper(){return document.body.append(this.wrapper),this}getAsideElement(e){return`<div class="infected-table__aside-item">\n          <div class="infected-table__aside-sub-item infected-table__aside-sub-item--name">${e.name}</div>\n        </div>`}getBodyElement(e){return`<div class="infected-table__body-item">\n          <div class="infected-table__body-sub-item infected-table__body-sub-item--cases">\n            <span class="infected-table__inner-cases">${e.cases}</span>\n            <span class="infected-table__inner-cases_delta"><span class="infected-table__inner-text">+ ${e.cases_delta}</span></span>\n          </div>\n          <div class="infected-table__body-sub-item infected-table__body-sub-item--cured">\n            <span class="infected-table__inner-cured">${e.cured}</span>\n            <span class="infected-table__inner-cured_delta"><span class="infected-table__inner-text">+ ${e.cured_delta}</span></span>\n          </div>\n          <div class="infected-table__body-sub-item infected-table__body-sub-item--deaths">\n            <span class="infected-table__inner-deaths">${e.deaths}</span>\n            <span class="infected-table__inner-deaths_delta"><span class="infected-table__inner-text">+ ${e.deaths_delta}</span></span>\n          </div>\n        </div>`}}const l=(e,t=!1)=>{new o(e,t).deleteTable().createWrapper().createPart("infected-table__body","body","getBodyElement").createPart("infected-table__aside","aside","getAsideElement").fillWrapper().uploadWrapper()},f=e=>{let t={};return e.forEach(e=>{t[e]=localStorage.getItem(e)}),t};a(0);const u=()=>{const e={async init(){const e={renderError:()=>{document.body.insertAdjacentHTML("afterbegin",'\n  <main style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh">\n    К сожалению, данные не загрузились :(\n    <button onclick="( () => location.reload() )();">Попробовать ещё раз</button>\n  </main>\n')},showLoader:()=>(i.showLoader(),e),getUserDevice:()=>(this.userData.device=window.innerWidth>1024?"desktop":window.innerWidth>900?"tablet":"mobile",e),fetchData:async()=>(this.data=await n().catch(t=>{this.cancel=!0,console.log(t),e.renderError()}),e),handleData:()=>{if(this.cancel)return e;const{data:t,dates:a}=this.data.russia_stat_struct;return this.data=Object.keys(t).map(e=>t[e].info).filter(e=>("Россия"===e.name&&(this.russiaInfo=e),"Россия"!==e.name)),this.currentDate=a[a.length-1],e},getUserData:()=>(this.cancel||(this.userData={currentDate:this.currentDate,russiaInfo:this.russiaInfo,...this.userData,...f(["favourite"])}),e),renderData:()=>{return this.cancel||(t=this.data,a=this.userData,new d(t,a).customizeHeaderWrapper().createRegionToggle().createHeader().createSearch().createTableHeader().createRussiaInfo().fillContent().renderAndInsertTable()),e;var t,a},hideLoader:()=>(i.hideLoader(),e)};return(await e.showLoader().getUserDevice().fetchData()).handleData().getUserData().renderData().hideLoader(),this},createListeners(){return this.cancel||(this.l.onHeaderTableClick=e=>{const t=this.sortedData[0]?this.sortedData:this.data,a=s(t,e.target.classList[0].split("-")[2],this.sortType);this.sortType="asc"===this.sortType?"desc":"asc",(e=>{const t=document.querySelectorAll(".infected-table__aside-item"),a=document.querySelectorAll(".infected-table__body-item");[...t].forEach((t,a)=>{t.querySelector(".infected-table__aside-sub-item--name").textContent=e[a].name}),[...a].forEach((t,a)=>{t.querySelector(".infected-table__inner-cases").textContent=String(e[a].cases),t.querySelector(".infected-table__inner-cases_delta .infected-table__inner-text").textContent="+ "+e[a].cases_delta,t.querySelector(".infected-table__inner-cured").textContent=String(e[a].cured),t.querySelector(".infected-table__inner-cured_delta .infected-table__inner-text").textContent="+ "+e[a].cured_delta,t.querySelector(".infected-table__inner-deaths").textContent=String(e[a].deaths),t.querySelector(".infected-table__inner-deaths_delta .infected-table__inner-text").textContent="+ "+e[a].deaths_delta})})(a)},this.l.onInputChange=e=>{const{value:t}=e.target;t.length>2?(this.sortedData=((e,t)=>(t=t.toLowerCase(),e.filter(e=>~e.name.toLowerCase().indexOf(t))||[]))(this.data,t),l(this.sortedData,!0)):(this.sortedData=this.data,l(this.data,!0))},this.l.onSelectChange=e=>{const{target:t}=e;var a;a={favourite:t.value},Object.keys(a).some(e=>{localStorage.setItem(e,JSON.stringify(a[e]))}),((e,t)=>{const a=e.find(e=>e.name===t);[...document.querySelectorAll(".infected-toggle__advantage-item")].forEach(e=>{const t=e.classList[1].split("--")[1];e.textContent="+ "+a[t]})})(this.data,t.value)},this.l.onSlideChange=((e=0,t=-100,a=0,n=50)=>(i,s)=>{var r;"right"===(s||i.target.classList[1].split("--")[1])?e!==t?e-=n:e=a:e!==a?e+=n:e=t,r=e,[...document.querySelectorAll(".infected-table__header-item--else, .infected-table__body")].forEach(e=>e.style.transform=`translateX(${r}vw)`)})(),this.l.onSlideTouch=(e=>t=>{const a=t=>{t.currentTarget.removeEventListener("touchend",a),e>t.changedTouches[0].clientX&&this.l.onSlideChange({target:null},"right"),e<t.changedTouches[0].clientX&&this.l.onSlideChange({target:null},"left")};e=t.changedTouches[0].clientX,t.currentTarget.addEventListener("touchend",a)})(0)),this},addListeners(){return this.cancel||([...document.querySelectorAll(".infected-table__header-item")].forEach(e=>{e.addEventListener("click",this.l.onHeaderTableClick)}),document.querySelector(".infected-search__input").addEventListener("input",this.l.onInputChange),document.querySelector(".infected-toggle__select").addEventListener("input",this.l.onSelectChange),[...document.querySelectorAll(".infected-nav__button")].forEach(e=>{e.addEventListener("click",this.l.onSlideChange)}),document.querySelectorAll(".infected-table__header-item--else, .infected-table__body").forEach(e=>{e.addEventListener("touchstart",this.l.onSlideTouch)})),this}};return Object.assign(e,{data:[],l:{onHeaderTableClick:()=>{},onInputChange:()=>{},onSelectChange:()=>{},onSlideChange:()=>()=>{},onSlideTouch:()=>()=>{}},sortType:"asc",sortItem:"",sortedData:[],userData:{},currentDate:"",cancel:!1,russiaInfo:{}})};(async()=>{(await u().init()).createListeners().addListeners()})()}]);