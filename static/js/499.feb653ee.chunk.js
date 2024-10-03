"use strict";(self.webpackChunkreact_app_education=self.webpackChunkreact_app_education||[]).push([[499],{499:(e,i,s)=>{s.r(i),s.d(i,{default:()=>E});var t=s(43),n=s(3),a=s(184);const r="Universities_header__eWrBQ",l="Universities_section__rVIrr",c="Universities_subtitle__aT+pt",d="Universities_error__Lue5q",o="Universities_list__aS+C+",u="Universities_universityCard__ly79i",_="Universities_universityInfo__Jl0va",h="Universities_tagsSection__mHpKf",m="Universities_tagsContainer__Wf-C2",v="Universities_tag__tGcuf",x="Universities_removeTag__P3o30",p="Universities_addTagButton__dGEXx",j="Universities_button__J4diM",g="Universities_buttonDelete__q+pEc",N="Universities_form__6KGg-",U="Universities_submitButton__v3bkz",y="Universities_addButton__Qfkma",b="Universities_modal__HmiJu",C="Universities_modalContent__6wo6a",f="Universities_modalButton__191wh",S="Universities_cancelButton__7gPFh";var k=s(775),w=s(590),B=s(283),F=s(978),T=s(579);const q={name:"",description:"",history:""};const D=function(){const[e,i]=(0,t.useState)(!1),[s,D]=(0,t.useState)({...q}),[E,L]=(0,t.useState)(null),[A,I]=(0,t.useState)(!1),[J,P]=(0,t.useState)(null),G=(0,n.wA)(),K=(0,n.d4)(k.pu),W=(0,n.d4)(k.lZ),z=(0,n.d4)(k.Tn),H=(0,n.d4)(F.mB),Q=e=>{const{name:i,value:t}=e.target;D({...s,[i]:t})};return(0,T.jsxs)("section",{className:l,children:[(0,T.jsxs)("div",{className:r,children:[(0,T.jsx)("h1",{children:"Welcome to the Page of Universities!"}),(0,T.jsx)("p",{className:c,children:"Feel free to explore and contribute to the Universities community by sharing your insights and helping grow this space."})]}),z&&(0,T.jsxs)("p",{className:d,children:["Error: ",z]}),(0,T.jsx)("div",{className:o,children:W?(0,T.jsx)("p",{children:"Loading..."}):K.map((e=>(0,T.jsxs)("div",{className:u,children:[(0,T.jsxs)("div",{className:_,children:[(0,T.jsx)("h3",{className:c,children:"University Name:"}),(0,T.jsx)("h2",{children:e.name}),e.location&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("h3",{className:c,children:"Location:"}),(0,T.jsx)("p",{children:e.location})]}),(0,T.jsx)("h3",{className:c,children:"Description:"}),(0,T.jsx)("p",{children:e.description}),(0,T.jsxs)("div",{className:h,children:[(0,T.jsx)("p",{className:c,children:"Tags:"}),(0,T.jsx)("div",{className:m,children:e.tags&&e.tags.length>0?e.tags.map(((i,s)=>(0,T.jsxs)("span",{className:v,children:[i.tag,(0,T.jsxs)("small",{children:["- added by ",i.addedBy]}),(0,T.jsx)("span",{className:x,onClick:()=>{return i=e.id,t=s,void G((0,B.lz)({universityId:i,tagIndex:t}));var i,t},children:"\u2736"})]},s))):(0,T.jsx)("span",{children:"No tags"})}),(0,T.jsx)("button",{onClick:()=>(e=>{const i=prompt("Enter a tag for this University:");if(i){const s={tag:i,addedBy:H.name};G((0,B.JC)({universityId:e,tag:s}))}})(e.id),className:p,children:"Add Tag"})]})]}),(0,T.jsx)("button",{onClick:()=>{return L(s=e),D({...s}),void i(!0);var s},className:j,children:"Edit"}),(0,T.jsx)("button",{onClick:()=>(P(e),void I(!0)),className:g,children:"Delete"})]},e.id)))}),e&&(0,T.jsxs)("form",{className:N,onSubmit:e=>{e.preventDefault(),G(E?(0,w.qw)(s):(0,w.kp)(s)),D({...q}),i(!1),L(null)},children:[(0,T.jsx)("label",{htmlFor:"name",children:"Name"}),(0,T.jsx)("input",{id:"name",type:"text",name:"name",value:s.name,onChange:Q,required:!0}),(0,T.jsx)("label",{htmlFor:"description",children:"Description"}),(0,T.jsx)("input",{id:"description",type:"text",name:"description",value:s.description,onChange:Q,required:!0}),(0,T.jsx)("label",{htmlFor:"location",children:"Location"}),(0,T.jsx)("input",{id:"location",type:"text",name:"location",value:s.location,onChange:Q,required:!0}),(0,T.jsx)("button",{type:"submit",className:U,children:E?"Update Faculty":"Add Faculty"})]}),(0,T.jsxs)("button",{onClick:()=>{D({...q}),L(null),i(!0)},className:y,children:[(0,T.jsx)(a.E5P,{})," Add University"]}),e&&(0,T.jsx)("button",{type:"button",onClick:()=>{D({...q}),i(!1)},className:S,children:"Cancel"}),A&&(0,T.jsx)("div",{className:b,children:(0,T.jsxs)("div",{className:C,children:[(0,T.jsx)("p",{children:"Are you sure you want to delete this University?"}),(0,T.jsx)("button",{onClick:()=>{G((0,w.wy)(J.id)),I(!1),P(null)},className:f,children:"Yes, Delete"}),(0,T.jsx)("button",{onClick:()=>{I(!1),P(null)},className:S,children:"Cancel"})]})})]})};function E(){return(0,T.jsx)(D,{})}},775:(e,i,s)=>{s.d(i,{K$:()=>n,S6:()=>a,Su:()=>t,Tn:()=>l,lZ:()=>c,pu:()=>r});const t=e=>e.tutorsSlice.items,n=e=>e.tutorsSlice.error,a=e=>e.tutorsSlice.isLoading,r=e=>e.universitiesSlice.items,l=e=>e.universitiesSlice.error,c=e=>e.universitiesSlice.isLoading}}]);
//# sourceMappingURL=499.feb653ee.chunk.js.map