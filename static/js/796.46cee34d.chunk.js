"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[796],{796:(t,e,n)=>{n.d(e,{makeFB2:()=>g});const o=t=>t?t.replace(/[\t\n\f\r ]+/g," ").replace(/^[\t\n\f\r ]+/,"").replace(/[\t\n\f\r ]+$/,""):"",r=t=>o(null===t||void 0===t?void 0:t.textContent),i={XLINK:"http://www.w3.org/1999/xlink",EPUB:"http://www.idpf.org/2007/ops"},l="application/xml",a="application/xhtml+xml",s={strong:["strong","self"],emphasis:["em","self"],style:["span","self"],a:"anchor",strikethrough:["s","self"],sub:["sub","self"],sup:["sup","self"],code:["code","self"],image:"image"},c={epigraph:["blockquote"],subtitle:["h2",s],"text-author":["p",s],date:["p",s],stanza:"stanza"},d={title:["header",{p:["h1",s],"empty-line":["br"]}],epigraph:["blockquote","self"],image:"image",annotation:["aside"],section:["section","self"],p:["p",s],poem:["blockquote",c],subtitle:["h2",s],cite:["blockquote","self"],"empty-line":["br"],table:["table",{tr:["tr",["align"]],th:["th",["colspan","rowspan","align","valign"]],td:["td",["colspan","rowspan","align","valign"]]}],"text-author":["p",s]};c.epigraph.push(d);const u={image:"image",title:["section",{p:["h1",s],"empty-line":["br"]}],epigraph:["section",d],section:["section",d]},p=t=>{const e=t.getAttributeNS(i.XLINK,"href"),[,n]=e.split("#"),o=t.getRootNode().getElementById(n);return o?"data:".concat(o.getAttribute("content-type"),";base64,").concat(o.textContent):e};class m{constructor(t){this.fb2=t,this.doc=document.implementation.createDocument(i.XHTML,"html")}image(t){const e=this.doc.createElement("img");return e.alt=t.getAttribute("alt"),e.title=t.getAttribute("title"),e.setAttribute("src",p(t)),e}anchor(t){const e=this.convert(t,{a:["a",s]});return e.setAttribute("href",t.getAttributeNS(i.XLINK,"href")),"note"===t.getAttribute("type")&&e.setAttributeNS(i.EPUB,"epub:type","noteref"),e}stanza(t){const e=this.convert(t,{stanza:["p",{title:["header",{p:["strong",s],"empty-line":["br"]}],subtitle:["p",s]}]});for(const n of t.children)"v"===n.nodeName&&(e.append(this.doc.createTextNode(n.textContent)),e.append(this.doc.createElement("br")));return e}convert(t,e){if(3===t.nodeType)return this.doc.createTextNode(t.textContent);if(4===t.nodeType)return this.doc.createCDATASection(t.textContent);if(8===t.nodeType)return this.doc.createComment(t.textContent);const n=null===e||void 0===e?void 0:e[t.nodeName];if(!n)return null;if("string"===typeof n)return this[n](t);const[o,r]=n,i=this.doc.createElement(o);if(t.id&&(i.id=t.id),i.classList.add(t.nodeName),Array.isArray(r))for(const s of r)i.setAttribute(s,t.getAttribute(s));const l="self"===r?e:Array.isArray(r)?null:r;let a=t.firstChild;for(;a;){const t=this.convert(a,l);t&&i.append(t),a=a.nextSibling}return i}}const f=URL.createObjectURL(new Blob(['\n@namespace epub "http://www.idpf.org/2007/ops";\nbody > img, section > img {\n    display: block;\n    margin: auto;\n}\n.title h1 {\n    text-align: center;\n}\nbody > section > .title, body.notesBodyType > .title {\n    margin: 3em 0;\n}\nbody.notesBodyType > section .title h1 {\n    text-align: start;\n}\nbody.notesBodyType > section .title {\n    margin: 1em 0;\n}\np {\n    text-indent: 1em;\n    margin: 0;\n}\n:not(p) + p, p:first-child {\n    text-indent: 0;\n}\n.poem p {\n    text-indent: 0;\n    margin: 1em 0;\n}\n.text-author, .date {\n    text-align: end;\n}\n.text-author:before {\n    content: "\u2014";\n}\ntable {\n    border-collapse: collapse;\n}\ntd, th {\n    padding: .25em;\n}\na[epub|type~="noteref"] {\n    font-size: .75em;\n    vertical-align: super;\n}\nbody:not(.notesBodyType) > .title, body:not(.notesBodyType) > .epigraph {\n    margin: 3em 0;\n}\n'],{type:"text/css"})),h="data-foliate-id",g=async t=>{const e={},n=await(async t=>{var e;const n=await t.arrayBuffer(),o=new TextDecoder("utf-8").decode(n),r=new DOMParser,i=r.parseFromString(o,l),a=i.xmlEncoding||(null===(e=o.match(/^<\?xml\s+version\s*=\s*["']1.\d+"\s+encoding\s*=\s*["']([A-Za-z0-9._-]*)["']/))||void 0===e?void 0:e[1]);if(a&&"utf-8"!==a.toLowerCase()){const t=new TextDecoder(a).decode(n);return r.parseFromString(t,l)}return i})(t),i=new m(n),s=t=>n.querySelector(t),c=t=>[...n.querySelectorAll(t)],g=t=>{const e=r(t.querySelector("nickname"));if(e)return e;const n=r(t.querySelector("first-name")),o=r(t.querySelector("middle-name")),i=r(t.querySelector("last-name"));return{name:[n,o,i].filter((t=>t)).join(" "),sortAs:i?[i,[n,o].filter((t=>t)).join(" ")].join(", "):null}},b=t=>{var e;return null!==(e=null===t||void 0===t?void 0:t.getAttribute("value"))&&void 0!==e?e:r(t)},y=s("title-info annotation");if(e.metadata={title:r(s("title-info book-title")),identifier:r(s("document-info id")),language:r(s("title-info lang")),author:c("title-info author").map(g),translator:c("title-info translator").map(g),producer:c("document-info author").map(g).concat(c("document-info program-used").map(r)),publisher:r(s("publish-info publisher")),published:b(s("title-info date")),modified:b(s("document-info date")),description:y?i.convert(y,{annotation:["div",d]}).innerHTML:null,subject:c("title-info genre").map(r)},s("coverpage image")){const t=p(s("coverpage image"));e.getCover=()=>fetch(t).then((t=>t.blob()))}else e.getCover=()=>null;const v=Array.from(n.querySelectorAll("body"),(t=>{const e=i.convert(t,{body:["body",u]});return[Array.from(e.children,(t=>{const e=[t,...t.querySelectorAll("[id]")].map((t=>t.id));return{el:t,ids:e}})),e]})),x=[],A=v[0][0].map((t=>{let{el:e,ids:n}=t;return{ids:n,titles:Array.from(e.querySelectorAll(":scope > section > .title"),((t,e)=>(t.setAttribute(h,e),{title:r(t),index:e}))),el:e}})).concat(v.slice(1).map((t=>{let[e,n]=t;const o=e.map((t=>t.ids)).flat();return n.classList.add("notesBodyType"),{ids:o,el:n,linear:"no"}}))).map((t=>{var e,n;let{ids:r,titles:i,el:l,linear:s}=t;const c=(d=l.outerHTML,'<?xml version="1.0" encoding="utf-8"?>\n<html xmlns="http://www.w3.org/1999/xhtml">\n    <head><link href="'.concat(f,'" rel="stylesheet" type="text/css"/></head>\n    <body>').concat(d,"</body>\n</html>"));var d;const u=new Blob([c],{type:a}),p=URL.createObjectURL(u);x.push(p);return{ids:r,title:o(null!==(e=null===(n=l.querySelector(".title, .subtitle, p"))||void 0===n?void 0:n.textContent)&&void 0!==e?e:l.classList.contains("title")?l.textContent:""),titles:i,load:()=>p,createDocument:()=>(new DOMParser).parseFromString(c,a),size:u.size-Array.from(l.querySelectorAll("[src]"),(t=>{var e,n;return null!==(e=null===(n=t.getAttribute("src"))||void 0===n?void 0:n.length)&&void 0!==e?e:0})).reduce(((t,e)=>t+e),0),linear:s}})),w=new Map;return e.sections=A.map(((t,e)=>{const{ids:n,load:o,createDocument:r,size:i,linear:l}=t;for(const a of n)a&&w.set(a,e);return{id:e,load:o,createDocument:r,size:i,linear:l}})),e.toc=A.map(((t,e)=>{let{title:n,titles:o}=t;const r=e.toString();return{label:n,href:r,subitems:null!==o&&void 0!==o&&o.length?o.map((t=>{let{title:e,index:n}=t;return{label:e,href:"".concat(r,"#").concat(n)}})):null}})).filter((t=>t)),e.resolveHref=t=>{const[e,n]=t.split("#");return e?{index:Number(e),anchor:t=>t.querySelector("[".concat(h,'="').concat(n,'"]'))}:{index:w.get(n),anchor:t=>t.getElementById(n)}},e.splitTOCHref=t=>{var e,n;return null!==(e=null===t||void 0===t||null===(n=t.split("#"))||void 0===n?void 0:n.map((t=>Number(t))))&&void 0!==e?e:[]},e.getTOCFragment=(t,e)=>t.querySelector("[".concat(h,'="').concat(e,'"]')),e.destroy=()=>{for(const t of x)URL.revokeObjectURL(t)},e}}}]);
//# sourceMappingURL=796.46cee34d.chunk.js.map