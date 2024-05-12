"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[704],{704:(n,t,e)=>{e.d(t,{makePDF:()=>i});const o=async(n,t)=>{const e=n.getViewport({scale:1}),o=e.width/e.height,a=innerWidth/innerHeight,i=devicePixelRatio*(a/o),r=n.getViewport({scale:i}),s=document.createElement("canvas");s.height=r.height,s.width=r.width;const c=s.getContext("2d");await n.render({canvasContext:c,viewport:r}).promise;const d=await new Promise((n=>s.toBlob(n)));if(t)return d;const l=document.createElement("div");l.classList.add("textLayer"),await pdfjsLib.renderTextLayer({textContentSource:await n.getTextContent(),container:l,viewport:r}).promise;const p=document.createElement("div");p.classList.add("annotationLayer"),await new pdfjsLib.AnnotationLayer({page:n,viewport:r,div:p}).render({annotations:await n.getAnnotations(),linkService:{getDestinationHash:n=>JSON.stringify(n),addLinkAttributes:(n,t)=>n.href=t}});const u=URL.createObjectURL(d);return URL.createObjectURL(new Blob(['\n        <!DOCTYPE html>\n        <meta charset="utf-8">\n        <style>\n        :root {\n            --scale-factor: '.concat(i,";\n        }\n        html, body {\n            margin: 0;\n            padding: 0;\n        }\n        ").concat('\n/* Copyright 2014 Mozilla Foundation\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n:root {\n  --highlight-bg-color: rgb(180 0 170);\n  --highlight-selected-bg-color: rgb(0 100 0);\n}\n\n@media screen and (forced-colors: active) {\n  :root {\n    --highlight-bg-color: Highlight;\n    --highlight-selected-bg-color: ButtonText;\n  }\n}\n\n.textLayer {\n  position: absolute;\n  text-align: initial;\n  inset: 0;\n  overflow: hidden;\n  opacity: 0.25;\n  line-height: 1;\n  text-size-adjust: none;\n  forced-color-adjust: none;\n  transform-origin: 0 0;\n  z-index: 2;\n}\n\n.textLayer :is(span, br) {\n  color: transparent;\n  position: absolute;\n  white-space: pre;\n  cursor: text;\n  transform-origin: 0% 0%;\n}\n\n/* Only necessary in Google Chrome, see issue 14205, and most unfortunately\n * the problem doesn\'t show up in "text" reference tests. */\n/*#if !MOZCENTRAL*/\n.textLayer span.markedContent {\n  top: 0;\n  height: 0;\n}\n/*#endif*/\n\n.textLayer .highlight {\n  margin: -1px;\n  padding: 1px;\n  background-color: var(--highlight-bg-color);\n  border-radius: 4px;\n}\n\n.textLayer .highlight.appended {\n  position: initial;\n}\n\n.textLayer .highlight.begin {\n  border-radius: 4px 0 0 4px;\n}\n\n.textLayer .highlight.end {\n  border-radius: 0 4px 4px 0;\n}\n\n.textLayer .highlight.middle {\n  border-radius: 0;\n}\n\n.textLayer .highlight.selected {\n  background-color: var(--highlight-selected-bg-color);\n}\n\n.textLayer ::selection {\n  /*#if !MOZCENTRAL*/\n  background: blue;\n  /*#endif*/\n  background: AccentColor; /* stylelint-disable-line declaration-block-no-duplicate-properties */\n}\n\n/* Avoids https://github.com/mozilla/pdf.js/issues/13840 in Chrome */\n/*#if !MOZCENTRAL*/\n.textLayer br::selection {\n  background: transparent;\n}\n/*#endif*/\n\n.textLayer .endOfContent {\n  display: block;\n  position: absolute;\n  inset: 100% 0 0;\n  z-index: -1;\n  cursor: default;\n  user-select: none;\n}\n\n.textLayer .endOfContent.active {\n  top: 0;\n}\n',"\n        ").concat('\n/* Copyright 2014 Mozilla Foundation\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n:root {\n  --annotation-unfocused-field-background: url("data:image/svg+xml;charset=UTF-8,<svg width=\'1px\' height=\'1px\' xmlns=\'http://www.w3.org/2000/svg\'><rect width=\'100%\' height=\'100%\' style=\'fill:rgba(0, 54, 255, 0.13);\'/></svg>");\n  --input-focus-border-color: Highlight;\n  --input-focus-outline: 1px solid Canvas;\n  --input-unfocused-border-color: transparent;\n  --input-disabled-border-color: transparent;\n  --input-hover-border-color: black;\n  --link-outline: none;\n}\n\n@media screen and (forced-colors: active) {\n  :root {\n    --input-focus-border-color: CanvasText;\n    --input-unfocused-border-color: ActiveText;\n    --input-disabled-border-color: GrayText;\n    --input-hover-border-color: Highlight;\n    --link-outline: 1.5px solid LinkText;\n    --hcm-highligh-filter: invert(100%);\n  }\n  .annotationLayer .textWidgetAnnotation :is(input, textarea):required,\n  .annotationLayer .choiceWidgetAnnotation select:required,\n  .annotationLayer\n    .buttonWidgetAnnotation:is(.checkBox, .radioButton)\n    input:required {\n    outline: 1.5px solid selectedItem;\n  }\n\n  .annotationLayer .linkAnnotation:hover {\n    backdrop-filter: var(--hcm-highligh-filter);\n  }\n\n  .annotationLayer .linkAnnotation > a:hover {\n    opacity: 0 !important;\n    background: none !important;\n    box-shadow: none;\n  }\n\n  .annotationLayer .popupAnnotation .popup {\n    outline: calc(1.5px * var(--scale-factor)) solid CanvasText !important;\n    background-color: ButtonFace !important;\n    color: ButtonText !important;\n  }\n\n  .annotationLayer .highlightArea:hover::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    backdrop-filter: var(--hcm-highligh-filter);\n    content: "";\n    pointer-events: none;\n  }\n\n  .annotationLayer .popupAnnotation.focused .popup {\n    outline: calc(3px * var(--scale-factor)) solid Highlight !important;\n  }\n}\n\n.annotationLayer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  transform-origin: 0 0;\n  z-index: 3;\n}\n\n.annotationLayer[data-main-rotation="90"] .norotate {\n  transform: rotate(270deg) translateX(-100%);\n}\n.annotationLayer[data-main-rotation="180"] .norotate {\n  transform: rotate(180deg) translate(-100%, -100%);\n}\n.annotationLayer[data-main-rotation="270"] .norotate {\n  transform: rotate(90deg) translateY(-100%);\n}\n\n.annotationLayer canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.annotationLayer section {\n  position: absolute;\n  text-align: initial;\n  pointer-events: auto;\n  box-sizing: border-box;\n  transform-origin: 0 0;\n}\n\n.annotationLayer .linkAnnotation {\n  outline: var(--link-outline);\n}\n\n.annotationLayer :is(.linkAnnotation, .buttonWidgetAnnotation.pushButton) > a {\n  position: absolute;\n  font-size: 1em;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.annotationLayer\n  :is(.linkAnnotation, .buttonWidgetAnnotation.pushButton):not(.hasBorder)\n  > a:hover {\n  opacity: 0.2;\n  background-color: rgb(255 255 0);\n  box-shadow: 0 2px 10px rgb(255 255 0);\n}\n\n.annotationLayer .linkAnnotation.hasBorder:hover {\n  background-color: rgb(255 255 0 / 0.2);\n}\n\n.annotationLayer .hasBorder {\n  background-size: 100% 100%;\n}\n\n.annotationLayer .textAnnotation img {\n  position: absolute;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.annotationLayer .textWidgetAnnotation :is(input, textarea),\n.annotationLayer .choiceWidgetAnnotation select,\n.annotationLayer .buttonWidgetAnnotation:is(.checkBox, .radioButton) input {\n  background-image: var(--annotation-unfocused-field-background);\n  border: 2px solid var(--input-unfocused-border-color);\n  box-sizing: border-box;\n  font: calc(9px * var(--scale-factor)) sans-serif;\n  height: 100%;\n  margin: 0;\n  vertical-align: top;\n  width: 100%;\n}\n\n.annotationLayer .textWidgetAnnotation :is(input, textarea):required,\n.annotationLayer .choiceWidgetAnnotation select:required,\n.annotationLayer\n  .buttonWidgetAnnotation:is(.checkBox, .radioButton)\n  input:required {\n  outline: 1.5px solid red;\n}\n\n.annotationLayer .choiceWidgetAnnotation select option {\n  padding: 0;\n}\n\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\n  border-radius: 50%;\n}\n\n.annotationLayer .textWidgetAnnotation textarea {\n  resize: none;\n}\n\n.annotationLayer .textWidgetAnnotation :is(input, textarea)[disabled],\n.annotationLayer .choiceWidgetAnnotation select[disabled],\n.annotationLayer\n  .buttonWidgetAnnotation:is(.checkBox, .radioButton)\n  input[disabled] {\n  background: none;\n  border: 2px solid var(--input-disabled-border-color);\n  cursor: not-allowed;\n}\n\n.annotationLayer .textWidgetAnnotation :is(input, textarea):hover,\n.annotationLayer .choiceWidgetAnnotation select:hover,\n.annotationLayer\n  .buttonWidgetAnnotation:is(.checkBox, .radioButton)\n  input:hover {\n  border: 2px solid var(--input-hover-border-color);\n}\n.annotationLayer .textWidgetAnnotation :is(input, textarea):hover,\n.annotationLayer .choiceWidgetAnnotation select:hover,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:hover {\n  border-radius: 2px;\n}\n\n.annotationLayer .textWidgetAnnotation :is(input, textarea):focus,\n.annotationLayer .choiceWidgetAnnotation select:focus {\n  background: none;\n  border: 2px solid var(--input-focus-border-color);\n  border-radius: 2px;\n  outline: var(--input-focus-outline);\n}\n\n.annotationLayer .buttonWidgetAnnotation:is(.checkBox, .radioButton) :focus {\n  background-image: none;\n  background-color: transparent;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox :focus {\n  border: 2px solid var(--input-focus-border-color);\n  border-radius: 2px;\n  outline: var(--input-focus-outline);\n}\n\n.annotationLayer .buttonWidgetAnnotation.radioButton :focus {\n  border: 2px solid var(--input-focus-border-color);\n  outline: var(--input-focus-outline);\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::before,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::after,\n.annotationLayer .buttonWidgetAnnotation.radioButton input:checked::before {\n  background-color: CanvasText;\n  content: "";\n  display: block;\n  position: absolute;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::before,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::after {\n  height: 80%;\n  left: 45%;\n  width: 1px;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::before {\n  transform: rotate(45deg);\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::after {\n  transform: rotate(-45deg);\n}\n\n.annotationLayer .buttonWidgetAnnotation.radioButton input:checked::before {\n  border-radius: 50%;\n  height: 50%;\n  left: 30%;\n  top: 20%;\n  width: 50%;\n}\n\n.annotationLayer .textWidgetAnnotation input.comb {\n  font-family: monospace;\n  padding-left: 2px;\n  padding-right: 0;\n}\n\n.annotationLayer .textWidgetAnnotation input.comb:focus {\n  /*\n   * Letter spacing is placed on the right side of each character. Hence, the\n   * letter spacing of the last character may be placed outside the visible\n   * area, causing horizontal scrolling. We avoid this by extending the width\n   * when the element has focus and revert this when it loses focus.\n   */\n  width: 103%;\n}\n\n.annotationLayer .buttonWidgetAnnotation:is(.checkBox, .radioButton) input {\n  appearance: none;\n}\n\n.annotationLayer .fileAttachmentAnnotation .popupTriggerArea {\n  height: 100%;\n  width: 100%;\n}\n\n.annotationLayer .popupAnnotation {\n  position: absolute;\n  font-size: calc(9px * var(--scale-factor));\n  pointer-events: none;\n  width: max-content;\n  max-width: 45%;\n  height: auto;\n}\n\n.annotationLayer .popup {\n  background-color: rgb(255 255 153);\n  box-shadow: 0 calc(2px * var(--scale-factor)) calc(5px * var(--scale-factor))\n    rgb(136 136 136);\n  border-radius: calc(2px * var(--scale-factor));\n  outline: 1.5px solid rgb(255 255 74);\n  padding: calc(6px * var(--scale-factor));\n  cursor: pointer;\n  font: message-box;\n  white-space: normal;\n  word-wrap: break-word;\n  pointer-events: auto;\n}\n\n.annotationLayer .popupAnnotation.focused .popup {\n  outline-width: 3px;\n}\n\n.annotationLayer .popup * {\n  font-size: calc(9px * var(--scale-factor));\n}\n\n.annotationLayer .popup > .header {\n  display: inline-block;\n}\n\n.annotationLayer .popup > .header h1 {\n  display: inline;\n}\n\n.annotationLayer .popup > .header .popupDate {\n  display: inline-block;\n  margin-left: calc(5px * var(--scale-factor));\n  width: fit-content;\n}\n\n.annotationLayer .popupContent {\n  border-top: 1px solid rgb(51 51 51);\n  margin-top: calc(2px * var(--scale-factor));\n  padding-top: calc(2px * var(--scale-factor));\n}\n\n.annotationLayer .richText > * {\n  white-space: pre-wrap;\n  font-size: calc(9px * var(--scale-factor));\n}\n\n.annotationLayer .popupTriggerArea {\n  cursor: pointer;\n}\n\n.annotationLayer section svg {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.annotationLayer .annotationTextContent {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  color: transparent;\n  user-select: none;\n  pointer-events: none;\n}\n\n.annotationLayer .annotationTextContent span {\n  width: 100%;\n  display: inline-block;\n}\n\n.annotationLayer svg.quadrilateralsContainer {\n  contain: strict;\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n','\n        </style>\n        <img src="').concat(u,'">\n        ').concat(l.outerHTML,"\n        ").concat(p.outerHTML,"\n    ")],{type:"text/html"}))},a=n=>({label:n.title,href:JSON.stringify(n.dest),subitems:n.items.length?n.items.map(a):null}),i=async n=>{var t;const e=new Uint8Array(await n.arrayBuffer()),i=await pdfjsLib.getDocument({data:e}).promise,r={rendition:{layout:"pre-paginated"}},s=null===(t=await i.getMetadata())||void 0===t?void 0:t.info;r.metadata={title:null===s||void 0===s?void 0:s.Title,author:null===s||void 0===s?void 0:s.Author};const c=await i.getOutline();r.toc=null===c||void 0===c?void 0:c.map(a);const d=new Map;return r.sections=Array.from({length:i.numPages}).map(((n,t)=>({id:t,load:async()=>{const n=d.get(t);if(n)return n;const e=await o(await i.getPage(t+1));return d.set(t,e),e},size:1e3}))),r.isExternal=n=>/^\w+:/i.test(n),r.resolveHref=async n=>{const t=JSON.parse(n),e="string"===typeof t?await i.getDestination(t):t;return{index:await i.getPageIndex(e[0])}},r.splitTOCHref=async n=>{const t=JSON.parse(n),e="string"===typeof t?await i.getDestination(t):t;return[await i.getPageIndex(e[0]),null]},r.getTOCFragment=n=>n.documentElement,r.getCover=async()=>o(await i.getPage(1),!0),r}}}]);
//# sourceMappingURL=704.964bf7d4.chunk.js.map