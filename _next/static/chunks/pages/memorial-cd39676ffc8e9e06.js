(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[224],{8974:function(e,t,n){"use strict";var l,r,a,i,s,o=n(959);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var u=(0,o.memo)(function(e){return o.createElement("svg",c({viewBox:"0 0 97 40",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),l||(l=o.createElement("path",{d:"M3.4 0H0v40h10.4V10.4H43V0z",fill:"#DEDFDF"})),r||(r=o.createElement("path",{d:"M96.6 0H50.2v10.4h46.4z",fill:"#DEDFDF"})),a||(a=o.createElement("path",{d:"M96.6 14.8H50.2v10.4h46.4z",fill:"#DEDFDF"})),i||(i=o.createElement("path",{d:"M96.6 29.6H50.2V40h46.4z",fill:"#DEDFDF"})),s||(s=o.createElement("path",{d:"M15.2 29.5V40h10.3V25.2h17.6V14.8h-28z",fill:"#DEDFDF"})))});t.Z=u},228:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/memorial",function(){return n(7938)}])},3939:function(e,t,n){"use strict";n.d(t,{a:function(){return m}});var l=n(1527),r=n(1690),a=n(6259),i=n(3039),s=n.n(i),o=n(959),c=n(4678),u=n.n(c);let d=s()(()=>n.e(383).then(n.bind(n,1383)),{loadableGenerated:{webpack:()=>[1383]},ssr:!1}),m=(0,o.forwardRef)((e,t)=>{let{children:n,enabled:i=!0,className:s,customProps:o={navigation:!1,buttons:!0,loop:!0}}=e;return(0,l.jsx)(r.iR,{emblaApi:{slidesToScroll:1,loop:!0,align:"center"},enabled:i,customProps:o,children:(0,l.jsxs)("div",{className:(0,a.Z)(u().wrapper,s),ref:t,children:[(0,l.jsx)(r.iR.Slides,{className:u().slider,children:n}),(0,l.jsx)(p,{})]})})});m.displayName="QuotesSlider";let p=e=>{let{className:t}=e,{customProps:n={}}=(0,r.oN)(),{navigation:i}=n;return(0,l.jsx)("div",{className:(0,a.Z)(t,u().navigation,!i&&u().hide),children:(0,l.jsx)(h,{})})},h=()=>{let{scrollPrev:e,scrollNext:t,currentIndex:n,scrollProgress:i,customProps:s={length:1,buttons:!0}}=(0,r.oN)(),{length:o,buttons:c}=s;return(0,l.jsx)("div",{className:(0,a.Z)(c&&u().show),children:(0,l.jsxs)("div",{className:u()["arrow-buttons"],children:[(0,l.jsx)("button",{"aria-label":"previous slider button",className:(0,a.Z)(u().buttons,(0===n||1===i)&&u().disabled),onClick:e,children:(0,l.jsx)(d,{className:"icon"})}),(0,l.jsx)("button",{"aria-label":"next slider button",className:(0,a.Z)(u().buttons,n===o-1&&u().disabled),onClick:t,children:(0,l.jsx)(d,{className:"icon"})})]})})}},9640:function(e,t,n){"use strict";n.d(t,{F:function(){return a}});var l=n(5776),r=n(3262);let a=(e,t)=>{var n,a;let i={layout:{}},s={},o={focuses:[],teamMembers:[]},{data:c}=(0,r.UL)({...e});if(!c)return{global:i,sections:s,data:c,references:o};c[t].global&&(i=(0,l.Xy)(c[t].global),i=(0,l.$G)(i,"Global")),c[t].sections&&(s=(0,l.Xy)(c[t].sections),s=(0,l.$G)(s,"Sections"));let u=(null===(n=c.focusSlugConnection)||void 0===n?void 0:n.edges)||[];(0,l.yD)(u)||(o.focuses=u.map(e=>{let{node:t}=e;return{href:t.href,...t.sections[0]}}));let d=(null===(a=c.teamSlugConnection)||void 0===a?void 0:a.edges)||[];return(0,l.yD)(d)||(o.teamMembers=d.map(e=>{let{node:t}=e;return{href:t.href,...t.sections[0]}})),{global:i,sections:s,data:c,references:o}}},6561:function(e,t,n){"use strict";n.d(t,{H:function(){return p}});var l=n(1527),r=n(7636),a=n.n(r),i=n(959);let s=({content:e,components:t={}})=>{if(!e)return null;let n=Array.isArray(e)?e:e.children;return n?i.createElement(i.Fragment,null,n.map((e,n)=>i.createElement(c,{components:t,key:n,child:e}))):null},o=e=>{if(e.bold){let{bold:t,...n}=e;if(e.components.bold){let t=e.components.bold;return i.createElement(t,null,i.createElement(o,{...n}))}return i.createElement("strong",null,i.createElement(o,{...n}))}if(e.italic){let{italic:t,...n}=e;if(e.components.italic){let t=e.components.italic;return i.createElement(t,null,i.createElement(o,{...n}))}return i.createElement("em",null,i.createElement(o,{...n}))}if(e.underline){let{underline:t,...n}=e;if(e.components.underline){let t=e.components.underline;return i.createElement(t,null,i.createElement(o,{...n}))}return i.createElement("u",null,i.createElement(o,{...n}))}if(e.strikethrough){let{strikethrough:t,...n}=e;if(e.components.strikethrough){let t=e.components.strikethrough;return i.createElement(t,null,i.createElement(o,{...n}))}return i.createElement("s",null,i.createElement(o,{...n}))}if(e.code){let{code:t,...n}=e;if(e.components.code){let t=e.components.code;return i.createElement(t,null,i.createElement(o,{...n}))}return i.createElement("code",null,i.createElement(o,{...n}))}if(e.components.text){let t=e.components.text;return i.createElement(t,null,e.text)}return i.createElement(i.Fragment,null,e.text)},c=e=>i.useMemo(()=>i.createElement(u,{...e}),[JSON.stringify(e)]),u=({components:e,child:t})=>{var n,l,r,a,c,u;let{children:d,...m}=t;switch(t.type){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"p":case"blockquote":case"ol":case"ul":case"li":if(e[t.type]){let n=e[t.type];return i.createElement(n,{...m},i.createElement(s,{components:e,content:d}))}return i.createElement(t.type,{children:i.createElement(s,{components:e,content:d})});case"lic":if(e.lic){let t=e.lic;return i.createElement(t,{...m},i.createElement(s,{components:e,content:d}))}return i.createElement("div",null,i.createElement(s,{components:e,content:t.children}));case"img":if(e[t.type]){let n=e[t.type];return i.createElement(n,{...m})}return i.createElement("img",{src:t.url,alt:t.caption});case"a":if(e[t.type]){let n=e[t.type];return i.createElement(n,{...m},i.createElement(s,{components:e,content:d}))}return i.createElement("a",{href:t.url},i.createElement(s,{components:e,content:d}));case"code_block":let p=t.value;if(e[t.type]){let n=e[t.type];return i.createElement(n,{...m})}return i.createElement("pre",null,i.createElement("code",null,p));case"hr":if(e[t.type]){let n=e[t.type];return i.createElement(n,{...m})}return i.createElement("hr",null);case"break":if(e[t.type]){let n=e[t.type];return i.createElement(n,{...m})}return i.createElement("br",null);case"text":return i.createElement(o,{components:e,...t});case"mdxJsxTextElement":case"mdxJsxFlowElement":let h=e[t.name];if(h){let e=t.props?t.props:{};return i.createElement(h,{...e})}{if("table"===t.name){let o=null==(n=t.props)?void 0:n.firstRowHeader,d=(o?null==(l=t.props)?void 0:l.tableRows.filter((e,t)=>0!==t):null==(r=t.props)?void 0:r.tableRows)||[],m=null==(c=null==(a=t.props)?void 0:a.tableRows)?void 0:c.at(0),p=e.table||(e=>i.createElement("table",{...e})),h=e.tr||(e=>i.createElement("tr",{...e})),f=e.th||(e=>i.createElement("th",{style:{textAlign:(null==e?void 0:e.align)||"auto"},...e})),g=e.td||(e=>i.createElement("td",{style:{textAlign:(null==e?void 0:e.align)||"auto"},...e})),v=(null==(u=t.props)?void 0:u.align)||[];return i.createElement(p,null,o&&i.createElement("thead",null,i.createElement(h,null,m.tableCells.map((e,t)=>i.createElement(s,{key:t,components:{p:e=>i.createElement(f,{align:v[t],...e})},content:e.value})))),i.createElement("tbody",null,d.map((e,t)=>{var n;return i.createElement(h,{key:t},null==(n=null==e?void 0:e.tableCells)?void 0:n.map((e,t)=>i.createElement(s,{key:t,components:{p:e=>i.createElement(g,{align:v[t],...e})},content:e.value})))})))}let o=e.component_missing;if(o)return i.createElement(o,{name:t.name});return i.createElement("span",null,`No component provided for ${t.name}`)}case"maybe_mdx":return null;case"html":case"html_inline":if(e[t.type]){let n=e[t.type];return i.createElement(n,{...m})}return t.value;case"invalid_markdown":return i.createElement("pre",null,t.value);default:if("string"==typeof t.text)return i.createElement(o,{components:e,...t})}};var d=n(7444),m=n.n(d);let p=e=>{let{content:t,components:n={}}=e;return(0,l.jsx)(s,{content:t,components:{h1:h,h2:f,h3:g,h4:v,h5:x,h6:_,p:E,img:y,...n}})},h=e=>{let{children:t}=e;return(0,l.jsx)("h1",{className:"h1",children:t})},f=e=>{let{children:t}=e;return(0,l.jsx)("h2",{className:"h2",children:t})},g=e=>{let{children:t}=e;return(0,l.jsx)("h3",{className:"h3",children:t})},v=e=>{let{children:t}=e;return(0,l.jsx)("h4",{className:"h4",children:t})},x=e=>{let{children:t}=e;return(0,l.jsx)("h5",{className:"h5",children:t})},_=e=>{let{children:t}=e;return(0,l.jsx)("h6",{className:"h6",children:t})},E=e=>{let{children:t}=e;return"img"===t.props.content[0].type?(0,l.jsx)("div",{className:m().image,children:t}):(0,l.jsx)("p",{className:"p",children:t})},y=e=>{let{url:t,caption:n=""}=e;return(0,l.jsx)(a(),{src:t,alt:n,fill:!0})}},5776:function(e,t,n){"use strict";function l(e){return Array.isArray(e)&&0===e.length}n.d(t,{$G:function(){return s},D$:function(){return c},Sy:function(){return d},T4:function(){return r},Xy:function(){return a},le:function(){return o},yD:function(){return l},yN:function(){return u}});let r=(e,t)=>e&&e[t],a=e=>e.reduce((e,t,n)=>{let{__typename:l,...r}=t,a=l;return e[a]&&(a="".concat(a,"-").concat(n)),e[a]=r,e},{}),i=e=>e.charAt(0).toLowerCase()+e.slice(1),s=(e,t)=>{let n=new RegExp("[^]+".concat(t,"(.*)"));for(let t in e){let l=t.match(n);l&&(e[i(l[1])]=e[t],delete e[t])}return e},o=e=>JSON.parse(localStorage.getItem(e)),c=(e,t)=>(localStorage.setItem(e,JSON.stringify(t)),window.dispatchEvent(new Event("storage"))),u=(e,t)=>{let n=[],l=[];return e.forEach(e=>{t.find(t=>{let{member:n}=t;return(null==n?void 0:n.title)===e.href})?n.push(e):l.push(e)}),[...n=n.sort((e,n)=>t.findIndex(t=>{let{member:n}=t;return(null==n?void 0:n.title)===e.href})-t.findIndex(e=>{let{member:t}=e;return(null==t?void 0:t.title)===n.href})),...l]};function d(e){let t=e.length,n;for(;0!==t;)n=Math.floor(Math.random()*t),t--,[e[t],e[n]]=[e[n],e[t]];return e}},7938:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g}});var l=n(1527),r=n(1690),a=n(8974),i=n(6259),s=n(3939),o=n(5199),c=n(9640),u=n(6561),d=n(959),m=n(3262),p=n(7372),h=n.n(p);function f(e,t){var n,p,f,g,v;let{memorial:x}=e,{sections:_}=(0,c.F)(x,"memorial"),{hero:E,content:y,testimonials:b}=_;return(0,d.useImperativeHandle)(t,()=>({preAnimateIn:e=>{let{from:t,to:n}=e,l=o.p8.timeline({paused:!0});return l.to({},{}),l.restart()},animateIn:e=>{let{from:t,to:n}=e,l=o.p8.timeline({paused:!0});return l.to({},{}),l.restart()},animateOut:e=>{let{from:t,to:n}=e;return new Promise(e=>{e()})}}),[]),(0,l.jsxs)("section",{className:(0,i.Z)("layout-grid-inner theme-dark",h().page),children:[(0,l.jsx)("header",{className:h().header,children:(0,l.jsx)(r.rU,{href:"/",children:(0,l.jsx)(a.Z,{className:(0,i.Z)(h().logo)})})}),(0,l.jsxs)("div",{className:(0,i.Z)(h().hero),children:[(0,l.jsxs)("div",{className:h().title,children:[(0,l.jsx)("div",{className:(0,i.Z)(h().date,"p-s mobile-only"),children:(0,l.jsx)(u.H,{content:null!==(p=E.leftDate)&&void 0!==p?p:null,components:{p:e=>{let{children:t}=e;return(0,l.jsx)("p",{className:"p-s",children:t})}}})}),(0,l.jsx)("h1",{"data-tina-field":(0,m.Ry)(E,"title"),className:"h1",children:E.title}),(0,l.jsx)("div",{className:(0,i.Z)(h().date,"p-s mobile-only"),children:(0,l.jsx)(u.H,{content:null!==(f=E.rightDate)&&void 0!==f?f:null,components:{p:e=>{let{children:t}=e;return(0,l.jsx)("p",{className:"p-s",children:t})}}})})]}),(0,l.jsxs)("div",{className:h().media,children:[(0,l.jsx)("div",{"data-tina-field":(0,m.Ry)(E,"leftDate"),className:(0,i.Z)(h().date,"p-s desktop-only"),children:(0,l.jsx)(u.H,{content:null!==(g=E.leftDate)&&void 0!==g?g:null,components:{p:e=>{let{children:t}=e;return(0,l.jsx)("p",{className:"p-s",children:t})}}})}),(0,l.jsx)("div",{"data-tina-field":(0,m.Ry)(E,"heroImage"),className:h().image,children:(0,l.jsx)(r.Ee,{priority:!0,src:E.heroImage.source,alt:E.heroImage.caption||"",fill:!0,sizes:"28vw"})}),(0,l.jsx)("div",{"data-tina-field":(0,m.Ry)(E,"rightDate"),className:(0,i.Z)(h().date,"p-s desktop-only"),children:(0,l.jsx)(u.H,{content:null!==(v=E.rightDate)&&void 0!==v?v:null,components:{p:e=>{let{children:t}=e;return(0,l.jsx)("p",{className:"p-s",children:t})}}})})]})]}),(0,l.jsx)("p",{"data-tina-field":(0,m.Ry)(y,"longtext"),className:(0,i.Z)(h()["long-text"],"p-l"),children:y.longtextOne}),(0,l.jsx)("p",{"data-tina-field":(0,m.Ry)(y,"longtext"),className:(0,i.Z)(h()["long-text"],"p-l"),children:y.longtextTwo}),(0,l.jsx)("p",{"data-tina-field":(0,m.Ry)(y,"longtext"),className:(0,i.Z)(h()["long-text"],"p-l"),children:y.longtextThree}),(0,l.jsxs)("div",{className:h().thanks,children:[(0,l.jsx)("p",{"data-tina-field":(0,m.Ry)(y,"shortTextOne"),className:"p-l",children:y.shortTextOne}),y.shortTextTwo&&(0,l.jsx)("p",{"data-tina-field":(0,m.Ry)(y,"shortTextTwo"),className:"h3",children:y.shortTextTwo})]}),(null==b?void 0:null===(n=b.quotes)||void 0===n?void 0:n.length)>0&&(0,l.jsxs)("div",{"data-tina-field":(0,m.Ry)(b),className:h().testimonials,children:[(0,l.jsx)("h3",{"data-tina-field":(0,m.Ry)(b,"title"),className:(0,i.Z)(h().title,"p-s"),children:b.title}),(0,l.jsx)(s.a,{customProps:{buttons:!0,navigation:!0,id:"testimonial-slider-memorial"},className:h().slider,children:b.quotes.map((e,t)=>{let{text:n,author:r,position:a}=e;return(0,l.jsxs)("div",{className:h().slide,children:[(0,l.jsx)("div",{className:h().quote,children:(0,l.jsx)("p",{className:"p-l italic",children:n})}),(0,l.jsx)("div",{className:h().bottom,children:(0,l.jsxs)("div",{className:h().author,children:[(0,l.jsx)("p",{className:"small-title",children:r}),(0,l.jsx)("p",{className:"p-s",children:a})]})})]},"testimonials-memorial-".concat(t))})})]})]})}f.displayName="Memorial";var g=!0;t.default=(0,d.forwardRef)(f)},4678:function(e){e.exports={navigation:"slider_navigation__xvO2g",hide:"slider_hide___5Xsr",show:"slider_show__TV794",wrapper:"slider_wrapper__ibei4",slider:"slider_slider__uOIBl","arrow-buttons":"slider_arrow-buttons__icCYt",buttons:"slider_buttons__3uuUN"}},7444:function(e){e.exports={image:"richtext_image__RBR7X"}},7372:function(e){e.exports={page:"memorial_page__9ps71",header:"memorial_header__VErOA",logo:"memorial_logo__e6bfQ",hero:"memorial_hero__C4ZMF",title:"memorial_title__hJjm4",date:"memorial_date__ufgjE",media:"memorial_media__MZJ4U",image:"memorial_image__vUeMC","long-text":"memorial_long-text__1ZnxJ",thanks:"memorial_thanks__g4TGc",testimonials:"memorial_testimonials__iSmRN",slide:"memorial_slide__QMNs8",quote:"memorial_quote__0lmmz",bottom:"memorial_bottom__7CXI_",author:"memorial_author__7mhAh"}},3262:function(e,t,n){"use strict";n.d(t,{Ry:function(){return i},UL:function(){return r},i:function(){return a}});var l=n(959);function r(e){let t=JSON.stringify({query:e.query,variables:e.variables}),n=l.useMemo(()=>s(t),[t]),[r,a]=l.useState(e.data),[i,o]=l.useState(!1),[c,u]=l.useState(!1),[d,m]=l.useState(!1);return l.useEffect(()=>{o(!0),a(e.data)},[n]),l.useEffect(()=>{if(c){let e=function(e){let t;let n=e.target.getAttributeNames().find(e=>e.startsWith("data-tina-field"));if(n)e.preventDefault(),e.stopPropagation(),t=e.target.getAttribute(n);else{let n=e.target.closest("[data-tina-field], [data-tina-field-overlay]");if(n){let l=n.getAttributeNames().find(e=>e.startsWith("data-tina-field"));l&&(e.preventDefault(),e.stopPropagation(),t=n.getAttribute(l))}}t&&d&&parent.postMessage({type:"field:selected",fieldName:t},window.location.origin)},t=document.createElement("style");return t.type="text/css",t.textContent=`
        [data-tina-field] {
          outline: 2px dashed rgba(34,150,254,0.5);
          transition: box-shadow ease-out 150ms;
        }
        [data-tina-field]:hover {
          box-shadow: inset 100vi 100vh rgba(34,150,254,0.3);
          outline: 2px solid rgba(34,150,254,1);
          cursor: pointer;
        }
        [data-tina-field-overlay] {
          outline: 2px dashed rgba(34,150,254,0.5);
          position: relative;
        }
        [data-tina-field-overlay]:hover {
          cursor: pointer;
          outline: 2px solid rgba(34,150,254,1);
        }
        [data-tina-field-overlay]::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 20;
          transition: opacity ease-out 150ms;
          background-color: rgba(34,150,254,0.3);
          opacity: 0;
        }
        [data-tina-field-overlay]:hover::after {
          opacity: 1;
        }
      `,document.head.appendChild(t),document.body.classList.add("__tina-quick-editing-enabled"),document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0),document.body.classList.remove("__tina-quick-editing-enabled"),t.remove()}}},[c,d]),l.useEffect(()=>(parent.postMessage({type:"open",...e,id:n},window.location.origin),window.addEventListener("message",e=>{"quickEditEnabled"===e.data.type&&u(e.data.value),e.data.id===n&&"updateData"===e.data.type&&(a(e.data.data),m(!0),document.querySelector("[data-tina-field]")?parent.postMessage({type:"quick-edit",value:!0},window.location.origin):parent.postMessage({type:"quick-edit",value:!1},window.location.origin))}),()=>{parent.postMessage({type:"close",id:n},window.location.origin)}),[n,u]),{data:r,isClient:i}}function a(){let[e,t]=l.useState(!1);return l.useEffect(()=>{"undefined"!=typeof window&&(parent.postMessage({type:"isEditMode"},window.location.origin),window.addEventListener("message",e=>{var n;(null==(n=e.data)?void 0:n.type)==="tina:editMode"&&t(!0)}))},[]),{edit:e}}let i=(e,t,n)=>{var l,r,a;return e&&e._content_source?t?"number"==typeof n?[null==(r=e._content_source)?void 0:r.queryId,[...e._content_source.path,t,n].join(".")].join("---"):[null==(a=e._content_source)?void 0:a.queryId,[...e._content_source.path,t].join(".")].join("---"):[null==(l=e._content_source)?void 0:l.queryId,e._content_source.path.join(".")].join("---"):""},s=e=>{let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n)&4294967295;return Math.abs(t).toString(36)}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=228)}),_N_E=e.O()}]);