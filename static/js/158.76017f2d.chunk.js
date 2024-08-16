"use strict";(self.webpackChunkreact_app_education=self.webpackChunkreact_app_education||[]).push([[158],{158:(e,s,n)=>{n.r(s),n.d(s,{default:()=>R});var t=n(43),a=n(337),i=n(3),r=n(184);const l="TutorsList_list__Xozn0",o="TutorsList_form__CO-nU",c={field:"Input_field__nN0SU",input:"Input_input__wmxoC",requiredIcon:"Input_requiredIcon__VgxxF"};var d=n(579);function h(e){let{label:s,name:n,type:t,value:a,handleChange:i,required:r=!1}=e,l={label:s,name:n,type:t,value:a};return r&&(l.required=!0),"tel"===t&&(l.pattern="+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}",l.title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"),(0,d.jsxs)("div",{className:c.field,children:[(0,d.jsx)("input",{className:c.input,...l,onChange:i}),(0,d.jsxs)("label",{htmlFor:n,children:[s," ",r&&(0,d.jsx)("span",{className:c.requiredIcon,children:"*"})]})]})}const u="Tutor_item__++0J3",m="Tutor_address__BPuki",x="Button_button__wiIYs",j="Button_primary__XYgy-",A="Button_secondary__QwN49",v="Button_icon__KeIH3";const p=function(e){let{variant:s="",customStyles:n,handleClick:t,children:a}=e;return(0,d.jsx)("button",{className:""+("secondary"===s?`${x} ${A}`:"icon"===s?`${x} ${v}`:`${x} ${j}`),onClick:t,children:a})};const f=function(e){let{item:s,handleDelete:n}=e;const t=`${s.firstName} ${s.lastName}`;return(0,d.jsxs)("div",{className:u,children:[(0,d.jsx)("div",{children:t}),(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)("span",{children:s.email}),(0,d.jsx)("span",{children:s.phone}),(0,d.jsx)("span",{children:s.city})]}),(0,d.jsx)("div",{children:null===s||void 0===s?void 0:s.options}),(0,d.jsx)("span",{children:(0,d.jsx)(p,{variant:"icon",handleClick:n,children:(0,d.jsx)(r.qbC,{})})})]},s.id)};function g(){return(0,d.jsx)("div",{children:"Loading..."})}const w={card:"Alert_card__s7g-y"};function N(e){let{message:s}=e;return(0,d.jsx)("div",{className:w.card,children:s})}var y=n(340);const k=e=>e.tutorsSlice.items,b=e=>e.tutorsSlice.error,C=e=>e.tutorsSlice.isLoading;var E=n(786);const B={lastName:"",firstName:"",email:"",phone:"",city:""};const I=function(e){const[s,n]=(0,t.useState)(""),c=(0,a.d7)(s,1e3),[u,m]=(0,y.A)(!1),[x,j]=(0,t.useState)({...B}),A=(0,i.d4)(k),v=(0,i.d4)(C),w=(0,i.d4)(b),I=(0,i.wA)();function Q(e){const{name:s,value:n}=e.target;j({...x,[s]:n})}function U(e){return e.length}(0,t.useEffect)((()=>{I((0,E.Ug)())}),[I]);const S=A.filter((e=>e.firstName.toLowerCase().includes(c.toLowerCase())||e.lastName.toLowerCase().includes(c.toLowerCase())));return(0,d.jsxs)("section",{className:"section",children:[(0,d.jsx)("h2",{className:"h2",children:"Tutors"}),(0,d.jsx)("input",{type:"text",name:"searchTerm",value:s,onChange:e=>n(e.target.value)}),(0,d.jsxs)("div",{className:l,children:[v&&(0,d.jsx)(g,{}),w&&(0,d.jsx)(N,{message:w}),(T=S,T.map((e=>(0,d.jsx)(f,{item:e,handleDelete:()=>I((0,E.MK)(e.id))},e.phone)))),(0,d.jsxs)("p",{children:["Number of tutors found ",U(S)]}),(0,d.jsxs)("p",{children:["Number of tutors ",U(A)," "]})]}),u&&(0,d.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault();const s=x;I((0,E.m6)(s)),j({...B}),m()},children:[(0,d.jsx)("h3",{children:"Adding a tutor"}),(0,d.jsx)(h,{label:"Surname",name:"firstName",type:"text",value:x.firstName,handleChange:Q,required:!0}),(0,d.jsx)(h,{label:"Name",name:"lastName",type:"text",value:x.lastName,handleChange:Q,required:!0}),(0,d.jsx)(h,{label:"Phone",name:"phone",type:"tel",value:x.phone,handleChange:Q,required:!0}),(0,d.jsx)(h,{label:"Email",name:"email",type:"email",value:x.email,handleChange:Q,required:!0}),(0,d.jsx)(h,{label:"City",name:"city",type:"text",value:x.city,handleChange:Q,required:!0}),(0,d.jsx)(p,{type:"submit",handleClick:()=>{},children:"Invite"})]}),(0,d.jsxs)(p,{handleClick:m,children:[(0,d.jsx)(r.E5P,{}),"Add Tutor"]})]});var T};var Q=n(538);const U={university:"University_university__Uy3T7",info:"University_info__kXy87",title:"University_title__9tkcj",controls:"University_controls__Fvv7q",description:"University_description__wkL+u",universityIcon:"University_universityIcon__lHbDX"};var S=n(797);const T="Modal_overlay__r63M6",Y="Modal_modal__DJDMv",q="Modal_header__fOQI0",M="Modal_closeBtn__mlOa4",L="Modal_content__gGb69",D="Modal_title__3HkNf";const J=function(e){let{isOpen:s,handleClose:n,header:a,children:i}=e;if((0,t.useEffect)((()=>{function e(e){"Escape"===e.key&&(console.log("Escape a fost apasat"),n())}return document.addEventListener("keydown",e,!1),()=>{document.removeEventListener("keydown",e,!1)}}),[n]),s)return(0,d.jsx)("div",{className:T,children:(0,d.jsxs)("dialog",{className:Y,children:[(0,d.jsx)("header",{className:`${q} relative`,children:(0,d.jsx)("button",{className:M,onClick:()=>{n()},children:(0,d.jsx)(Q.U_s,{})})}),(0,d.jsxs)("main",{className:L,children:[(0,d.jsxs)("h1",{className:D,children:[a.icon,a.label]}),i]})]})})},K="data:image/png;base64,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";function H(){const[e,s]=(0,t.useState)(!1);function n(){s(!e)}return(0,d.jsxs)("section",{className:"section",children:[(0,d.jsx)(J,{isOpen:e,handleClose:()=>{n()},header:"University",children:"Add edit form"}),(0,d.jsxs)("div",{className:U.university,children:[(0,d.jsx)("div",{className:U.info,children:(0,d.jsxs)(S.A,{children:[(0,d.jsx)("img",{className:U.universityIcon,src:K,alt:"School"}),(0,d.jsx)("p",{children:"university"}),(0,d.jsx)("h3",{className:U.title,children:"MIT"}),(0,d.jsxs)("div",{className:U.controls,children:[(0,d.jsx)("button",{className:"button-icon",onClick:n,children:(0,d.jsx)(Q.Ygt,{})}),(0,d.jsx)("button",{className:"button-icon",children:(0,d.jsx)(Q.WWR,{})})]})]})}),(0,d.jsx)("div",{className:U.description,children:"Experience, a concentration of knowledge and the ability to avoid most recruiting mistakes. We know what most local and foreign companies want and we can give it to you. And we are constantly improving our programming courses, adding something new there. You can see the success stories of our alumni for yourself to see the effectiveness of our teaching methodology. Yes, we will start with the basics and the most basic information. We know that most people come to us with zero knowledge."})]})]})}function R(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{className:"page-title",children:"University Information"}),(0,d.jsx)(H,{}),(0,d.jsx)(I,{})]})}}}]);
//# sourceMappingURL=158.76017f2d.chunk.js.map