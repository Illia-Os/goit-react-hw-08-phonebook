"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[288],{7288:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r,o,a,i,p,u,x,s,c,d=t(3413),l=t(2791),f=t(9434),h=t(168),b=t(5867),m=b.ZP.div(r||(r=(0,h.Z)(["\n  padding: 20px 0 20px 50px;\n"]))),g=b.ZP.h1(o||(o=(0,h.Z)(["\n  font-size: 40px;\n"]))),v=b.ZP.h2(a||(a=(0,h.Z)(["\n  display: inline-block;\n  margin-top: 25px;\n  padding-left: 15px;\n  font-size: 36px;\n"]))),w=b.ZP.h3(i||(i=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n"]))),y=t(3767),Z=b.ZP.label(p||(p=(0,h.Z)(["\n  display: flex;\n  max-width: 500px;\n  padding-left: 15px;\n  gap: 5px;\n  flex-direction: column;\n  margin-top: 25px;\n  font-size: 20px;\n"]))),j=b.ZP.input(u||(u=(0,h.Z)(["\n  width: 40%;\n  border: 1px solid #000;\n  padding: 7px 5px 3px 5px;\n  border-radius: 4px;\n  font-size: 16px;\n  outline: none;\n  margin-bottom: 20px;\n\n\n  transition: 0.3s;\n\n  &:focus-within {\nbox-shadow: 0px 0px 12px 5px rgba(0,0,0,0.75);\n-webkit-box-shadow: 0px 0px 12px 5px rgba(0,0,0,0.75);\n-moz-box-shadow: 0px 0px 12px 5px rgba(0,0,0,0.75);\n"]))),k=t(184),z=function(){var n=(0,f.I0)(),e=(0,f.v9)((function(n){return n.filter}));return(0,k.jsx)("div",{children:(0,k.jsxs)(Z,{children:[(0,k.jsx)("p",{children:"Find contacts by name"}),(0,k.jsx)(j,{type:"text",name:"filter",onChange:function(e){var t=e.target.value;n((0,y.T)(t))},value:e,title:"Enter name of contact"})]})})},P=b.ZP.li(x||(x=(0,h.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 7px 0;\n  font-size: 24px;\n"]))),C=b.ZP.button(s||(s=(0,h.Z)(["\n  padding: 4px 10px;\n  cursor: pointer;\n  font-size: 16px;\n  letter-spacing: 0.05em;\n  border: 1px solid #000;\n  border-radius: 8px;\n  transition: 0.3s;\n\n  &:hover {\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);\n\n    background-color: #ff7d7d;\n    color: #fff;\n\n    transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n  }\n"]))),A=function(n){var e=n.id,t=n.name,r=n.number,o=(0,f.I0)();return(0,k.jsxs)(P,{children:[(0,k.jsxs)("p",{children:[t,": ",r]}),(0,k.jsx)(C,{type:"button",onClick:function(){return o((0,d.ku)(e))},children:"Delete"})]},e)},E=b.ZP.ul(c||(c=(0,h.Z)(["\n  width: 60%;\n  max-width: 500px;\n  padding: 10px 15px 10px 15px;\n\n  border: 1px solid #000;\n  border-radius: 8px;\n\n  box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);\n"]))),F="NOT_FOUND";var S=function(n,e){return n===e};function L(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?S:r,a=t.maxSize,i=void 0===a?1:a,p=t.resultEqualityCheck,u=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),x=1===i?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:F},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(u):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return F}return{get:r,put:function(e,o){r(e)===F&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,u);function s(){var e=x.get(arguments);if(e===F){if(e=n.apply(null,arguments),p){var t=x.getEntries(),r=t.find((function(n){return p(n.value,e)}));r&&(e=r.value)}x.put(arguments,e)}return e}return s.clearCache=function(){return x.clear()},s}function N(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function q(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var a,i=0,p={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(p=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var x=p,s=x.memoizeOptions,c=void 0===s?t:s,d=Array.isArray(c)?c:[c],l=N(r),f=n.apply(void 0,[function(){return i++,u.apply(null,arguments)}].concat(d)),h=n((function(){for(var n=[],e=l.length,t=0;t<e;t++)n.push(l[t].apply(null,arguments));return a=f.apply(null,n)}));return Object.assign(h,{resultFunc:u,memoizedResultFunc:f,dependencies:l,lastResult:function(){return a},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),h};return o}var I,O,_,D,R,T=q(L),$=function(n){return n.contacts.items},B=T([$,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),G=function(){var n=(0,f.v9)(B);return(0,k.jsx)(E,{children:n.map((function(n){return(0,k.jsx)(A,{id:n.id,name:n.name,number:n.number},n.id)}))})},J=t(9439),M=b.ZP.form(I||(I=(0,h.Z)(["\n  max-width: 400px;\n  padding: 10px 15px 15px 15px;\n  border: 1px solid #000;\n  border-radius: 8px;\n\n  box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);\n\n  margin-top: 15px;\n"]))),U=b.ZP.div(O||(O=(0,h.Z)(["\n  display: flex;\n  gap: 3px;\n  flex-direction: column;\n\n  &:not(:first-child) {\n    margin-top: 20px;\n  }\n"]))),H=b.ZP.label(_||(_=(0,h.Z)(["\n  font-size: 26px;\n"]))),K=b.ZP.input(D||(D=(0,h.Z)(["\n  width: 96.7%;\n  border: 1px solid #000;\n  padding: 7px 5px 3px 5px;\n\n  border-radius: 5px;\n  font-size: 16px;\n  outline: none;\n\n  transition: 0.3s;\n\n  &:focus-within {\n    box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);\n    -webkit-box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 0px 12px 5px rgba(0, 0, 0, 0.75);\n  }\n"]))),Q=b.ZP.button(R||(R=(0,h.Z)(["\n  margin-top: 25px;\n  padding: 4px 10px;\n  cursor: pointer;\n  font-size: 16px;\n  letter-spacing: 0.05em;\n  border: 1px solid #000;\n  border-radius: 5px;\n  transition: 0.3s;\n\n  &:hover {\n    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);\n    -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.75);\n\n    background-color: #6c5b80;\n    color: #fff;\n\n    transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    -moz-transform: scale(1.1);\n  }\n"]))),V=t(5218);function W(){var n=(0,l.useState)(""),e=(0,J.Z)(n,2),t=e[0],r=e[1],o=(0,l.useState)(""),a=(0,J.Z)(o,2),i=a[0],p=a[1],u=(0,f.I0)(),x=(0,f.v9)($),s=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":p(o)}};return(0,k.jsxs)(M,{onSubmit:function(n){n.preventDefault();var e=t.toLocaleLowerCase();if(x.some((function(n){return n.name.toLowerCase()===e})))V.Am.error("".concat(e," is already in contacts"));else{var o={name:t,number:i};u((0,d.G3)(o)),r(""),p("")}},children:[(0,k.jsxs)(U,{children:[(0,k.jsx)(H,{htmlFor:"inputName",children:"Name"}),(0,k.jsx)(K,{id:"inputName",type:"text",name:"name",onChange:s,value:t,pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsxs)(U,{children:[(0,k.jsx)(H,{htmlFor:"inputPhone",children:"Phone number"}),(0,k.jsx)(K,{id:"inputPhone",type:"tel",name:"number",onChange:s,value:i,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,k.jsx)(Q,{type:"submit",children:"Add contact"})]})}var X=t(5510);function Y(){var n=(0,f.I0)(),e=(0,f.v9)((function(n){return n.contacts})),t=e.items,r=e.isLoading,o=e.error;return(0,l.useEffect)((function(){n((0,d.m$)())}),[n]),(0,k.jsxs)(m,{children:[(0,k.jsx)(g,{children:"Phonebook"}),(0,k.jsx)(W,{}),(0,k.jsx)(v,{children:"Contacts"}),(0,k.jsx)(z,{}),r&&(0,k.jsx)(X.a,{}),o&&(0,k.jsx)(w,{children:o}),t.length>0?(0,k.jsx)(G,{}):(0,k.jsx)(w,{children:"Sorry, no contacts yet..."})]})}}}]);
//# sourceMappingURL=288.dcf1c22a.chunk.js.map