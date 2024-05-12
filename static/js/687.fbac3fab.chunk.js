"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[687],{687:(t,e,n)=>{n.d(e,{TTS:()=>N});var i=n(473),r=n(341);const s="http://www.w3.org/XML/1998/namespace",o="http://www.w3.org/2001/10/synthesis",l=new Set(["article","aside","audio","blockquote","caption","details","dialog","div","dl","dt","dd","figure","footer","form","figcaption","h1","h2","h3","h4","h5","h6","header","hgroup","hr","li","main","math","nav","ol","p","pre","section","tr"]),a=t=>{var e;const n=t.lang||(null===t||void 0===t||null===(e=t.getAttributeNS)||void 0===e?void 0:e.call(t,s,"lang"));return n||(t.parentElement?a(t.parentElement):null)},h=t=>{var e;const n=null===t||void 0===t||null===(e=t.getAttributeNS)||void 0===e?void 0:e.call(t,s,"lang");return n||(t.parentElement?h(t.parentElement):null)},c=(t,e,n)=>{const i=a(t.commonAncestorContainer),r=h(t.commonAncestorContainer),l=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"word";const n=new Intl.Segmenter(t,{granularity:e}),i="word"===e;return function*(t,e){const r=t.join("");let s=0,o=-1,l=0;for(const{index:a,segment:h,isWordLike:c}of n.segment(r)){if(i&&!c)continue;for(;l<=a;)l+=t[++o].length;const n=o,u=a-(l-t[o].length),d=a+h.length;if(d<r.length)for(;l<=d;)l+=t[++o].length;const A=o,f=d-(l-t[o].length);yield[(s++).toString(),e(n,u,A,f)]}}}(i,n),c=t.cloneContents(),u=[...e(t,l)],d=[...e(c,l)];for(const[s,o]of d){const t=document.createElement("foliate-mark");t.dataset.name=s,o.insertNode(t)}const A=((t,e)=>{const n=document.implementation.createDocument(o,"speak"),{lang:i}=e;i&&n.documentElement.setAttributeNS(s,"lang",i);const r=(t,e,i)=>{if(!t)return;if(3===t.nodeType)return n.createTextNode(t.textContent);if(4===t.nodeType)return n.createCDATASection(t.textContent);if(1!==t.nodeType)return;let l;const a=t.nodeName.toLowerCase();"foliate-mark"===a?(l=n.createElementNS(o,"mark"),l.setAttribute("name",t.dataset.name)):"br"===a?l=n.createElementNS(o,"break"):"em"!==a&&"strong"!==a||(l=n.createElementNS(o,"emphasis"));const h=t.lang||t.getAttributeNS(s,"lang");h&&(l||(l=n.createElementNS(o,"lang")),l.setAttributeNS(s,"lang",h));const c=t.getAttributeNS(o,"alphabet")||i;if(!l){const e=t.getAttributeNS(o,"ph");e&&(l=n.createElementNS(o,"phoneme"),c&&l.setAttribute("alphabet",c),l.setAttribute("ph",e))}l||(l=e);let u=t.firstChild;for(;u;){const t=r(u,l,c);t&&l!==t&&l.append(t),u=u.nextSibling}return l};return r(t.firstChild,n.documentElement,e.alphabet),n})(c,{lang:i,alphabet:r});return{entries:u,ssml:A}},u=t=>!t.toString().trim();var d=(0,r.A)("arr"),A=(0,r.A)("iter"),f=(0,r.A)("index"),g=(0,r.A)("f");class m{constructor(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t=>t;Object.defineProperty(this,d,{writable:!0,value:[]}),Object.defineProperty(this,A,{writable:!0,value:void 0}),Object.defineProperty(this,f,{writable:!0,value:-1}),Object.defineProperty(this,g,{writable:!0,value:void 0}),(0,i.A)(this,A)[A]=t,(0,i.A)(this,g)[g]=e}current(){if((0,i.A)(this,d)[d][(0,i.A)(this,f)[f]])return(0,i.A)(this,g)[g]((0,i.A)(this,d)[d][(0,i.A)(this,f)[f]])}first(){if((0,i.A)(this,d)[d][0])return(0,i.A)(this,f)[f]=0,(0,i.A)(this,g)[g]((0,i.A)(this,d)[d][0])}prev(){const t=(0,i.A)(this,f)[f]-1;if((0,i.A)(this,d)[d][t])return(0,i.A)(this,f)[f]=t,(0,i.A)(this,g)[g]((0,i.A)(this,d)[d][t])}next(){const t=(0,i.A)(this,f)[f]+1;if((0,i.A)(this,d)[d][t])return(0,i.A)(this,f)[f]=t,(0,i.A)(this,g)[g]((0,i.A)(this,d)[d][t]);for(;;){const{done:e,value:n}=(0,i.A)(this,A)[A].next();if(e)break;if((0,i.A)(this,d)[d].push(n),(0,i.A)(this,d)[d][t])return(0,i.A)(this,f)[f]=t,(0,i.A)(this,g)[g]((0,i.A)(this,d)[d][t])}}find(t){const e=(0,i.A)(this,d)[d].findIndex((e=>t(e)));if(e>-1)return(0,i.A)(this,f)[f]=e,(0,i.A)(this,g)[g]((0,i.A)(this,d)[d][e]);for(;;){const{done:e,value:n}=(0,i.A)(this,A)[A].next();if(e)break;if((0,i.A)(this,d)[d].push(n),t(n))return(0,i.A)(this,f)[f]=(0,i.A)(this,d)[d].length-1,(0,i.A)(this,g)[g](n)}}}var p=(0,r.A)("list"),v=(0,r.A)("ranges"),b=(0,r.A)("lastMark"),S=(0,r.A)("serializer"),w=(0,r.A)("getMarkElement"),y=(0,r.A)("speak");class N{constructor(t,e,n){Object.defineProperty(this,y,{value:E}),Object.defineProperty(this,w,{value:k}),Object.defineProperty(this,p,{writable:!0,value:void 0}),Object.defineProperty(this,v,{writable:!0,value:void 0}),Object.defineProperty(this,b,{writable:!0,value:void 0}),Object.defineProperty(this,S,{writable:!0,value:new XMLSerializer}),this.doc=t,this.highlight=n,(0,i.A)(this,p)[p]=new m(function*(t){var e;let n;const i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT);for(let s=i.nextNode();s;s=i.nextNode()){const e=s.tagName.toLowerCase();l.has(e)&&(n&&(n.setEndBefore(s),u(n)||(yield n)),n=t.createRange(),n.setStart(s,0))}var r;n||(n=t.createRange(),n.setStart(null!==(r=t.body.firstChild)&&void 0!==r?r:t.body,0)),n.setEndAfter(null!==(e=t.body.lastChild)&&void 0!==e?e:t.body),u(n)||(yield n)}(t),(t=>{const{entries:n,ssml:r}=c(t,e);return(0,i.A)(this,v)[v]=new Map(n),[r,t]}))}start(){var t;(0,i.A)(this,b)[b]=null;const[e]=null!==(t=(0,i.A)(this,p)[p].first())&&void 0!==t?t:[];return e?(0,i.A)(this,y)[y](e,(t=>(0,i.A)(this,w)[w](t,(0,i.A)(this,b)[b]))):this.next()}resume(){var t;const[e]=null!==(t=(0,i.A)(this,p)[p].current())&&void 0!==t?t:[];return e?(0,i.A)(this,y)[y](e,(t=>(0,i.A)(this,w)[w](t,(0,i.A)(this,b)[b]))):this.next()}prev(t){var e;(0,i.A)(this,b)[b]=null;const[n,r]=null!==(e=(0,i.A)(this,p)[p].prev())&&void 0!==e?e:[];return t&&r&&this.highlight(r.cloneRange()),(0,i.A)(this,y)[y](n)}next(t){var e;(0,i.A)(this,b)[b]=null;const[n,r]=null!==(e=(0,i.A)(this,p)[p].next())&&void 0!==e?e:[];return t&&r&&this.highlight(r.cloneRange()),(0,i.A)(this,y)[y](n)}from(t){(0,i.A)(this,b)[b]=null;const[e]=(0,i.A)(this,p)[p].find((e=>t.compareBoundaryPoints(Range.END_TO_START,e)<=0));let n;for(const[r,s]of(0,i.A)(this,v)[v].entries())if(t.compareBoundaryPoints(Range.START_TO_START,s)<=0){n=r;break}return(0,i.A)(this,y)[y](e,(t=>(0,i.A)(this,w)[w](t,n)))}setMark(t){const e=(0,i.A)(this,v)[v].get(t);e&&((0,i.A)(this,b)[b]=t,this.highlight(e.cloneRange()))}}function k(t,e){return e?t.querySelector('mark[name="'.concat(CSS.escape(e),'"')):null}function E(t,e){var n;if(!t)return;if(!e)return(0,i.A)(this,S)[S].serializeToString(t);const r=document.implementation.createDocument(o,"speak");r.documentElement.replaceWith(r.importNode(t.documentElement,!0));let s=null===(n=e(r))||void 0===n?void 0:n.previousSibling;for(;s;){var l,a;const t=null!==(l=s.previousSibling)&&void 0!==l?l:null===(a=s.parentNode)||void 0===a?void 0:a.previousSibling;s.parentNode.removeChild(s),s=t}return(0,i.A)(this,S)[S].serializeToString(r)}}}]);
//# sourceMappingURL=687.fbac3fab.chunk.js.map