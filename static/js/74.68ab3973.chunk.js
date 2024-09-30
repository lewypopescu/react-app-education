"use strict";(self.webpackChunkreact_app_education=self.webpackChunkreact_app_education||[]).push([[74],{74:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var a=s(43),l=s(3),i=s(184);const n={header:"TutorsList_header__Vv6lU",section:"TutorsList_section__nRXpu",subtitle:"TutorsList_subtitle__YVZBe",title:"TutorsList_title__46r43",list:"TutorsList_list__Xozn0",tutorCard:"TutorsList_tutorCard__E6Pwd",tutorDetail:"TutorsList_tutorDetail__m907y",addButton:"TutorsList_addButton__ICsSa",form:"TutorsList_form__CO-nU",button:"TutorsList_button__I4+7x",modal:"TutorsList_modal__aQleN",modalContent:"TutorsList_modalContent__jE5DQ",modalButton:"TutorsList_modalButton__k7h36",cancelButton:"TutorsList_cancelButton__EG7Ae"};var r=s(775),o=s(590),u=s(579);const c={lastName:"",firstName:"",email:"",phone:"",city:"",faculty:""};function d(){const[e,t]=(0,a.useState)(!1),[s,d]=(0,a.useState)({...c}),[m,h]=(0,a.useState)(!1),[p,x]=(0,a.useState)(null),_=(0,l.d4)(r.Su),j=(0,l.d4)(r.S6),N=(0,l.d4)(r.K$),b=(0,l.wA)();function y(e){const{name:t,value:a}=e.target;d({...s,[t]:a})}return(0,u.jsxs)("section",{className:n.section,children:[(0,u.jsxs)("div",{className:n.header,children:[(0,u.jsx)("h1",{children:"Welcome to the Page of Tutors!"}),(0,u.jsx)("p",{className:n.subtitle,children:"Feel free to explore and contribute to the Tutors community by sharing your insights and helping grow this space."})]}),(0,u.jsxs)("div",{className:n.list,children:[j&&(0,u.jsx)("p",{children:"Loading..."}),N&&(0,u.jsxs)("p",{children:["Error: ",N]}),(f=_,f.map(((e,t)=>(0,u.jsxs)("div",{className:n.tutorCard,children:[(0,u.jsxs)("div",{className:n.tutorDetail,children:[(0,u.jsx)("p",{className:n.subtitle,children:"Tutor Name:"}),(0,u.jsxs)("h2",{children:[e.firstName," ",e.lastName]})]}),(0,u.jsxs)("div",{className:n.tutorDetail,children:[(0,u.jsx)("p",{className:n.subtitle,children:"Email Adress:"}),(0,u.jsx)("p",{children:e.email})]}),(0,u.jsxs)("div",{className:n.tutorDetail,children:[(0,u.jsx)("p",{className:n.subtitle,children:"Phone Number:"}),(0,u.jsx)("p",{children:e.phone})]}),(0,u.jsxs)("div",{className:n.tutorDetail,children:[(0,u.jsx)("p",{className:n.subtitle,children:"City:"}),(0,u.jsx)("p",{children:e.city})]}),(0,u.jsxs)("div",{className:n.tutorDetail,children:[(0,u.jsx)("p",{className:n.subtitle,children:"Faculty:"}),(0,u.jsx)("p",{children:e.faculty})]}),(0,u.jsx)("button",{onClick:()=>(x(e),void h(!0)),className:n.button,children:"Delete"})]},t))))]}),e&&(0,u.jsxs)("form",{className:n.form,onSubmit:function(e){e.preventDefault();const a=s;b((0,o.m6)(a)),d({...c}),t(!1)},children:[(0,u.jsx)("h3",{className:n.subtitle,children:"Adding a tutor"}),(0,u.jsx)("input",{label:"First Name",name:"firstName",type:"text",value:s.firstName,onChange:y,placeholder:"Name",required:!0}),(0,u.jsx)("input",{label:"Last Name",name:"lastName",type:"text",value:s.lastName,onChange:y,placeholder:"Last Name",required:!0}),(0,u.jsx)("input",{label:"Phone",name:"phone",type:"tel",value:s.phone,onChange:y,placeholder:"Phone Number",required:!0}),(0,u.jsx)("input",{label:"Email",name:"email",type:"email",value:s.email,onChange:y,placeholder:"Email Address",required:!0}),(0,u.jsx)("input",{label:"City",name:"city",type:"text",value:s.city,onChange:y,placeholder:"City",required:!0}),(0,u.jsx)("input",{label:"Faculty",name:"faculty",type:"text",value:s.faculty,onChange:y,placeholder:"Faculty",required:!0}),(0,u.jsx)("button",{type:"submit",className:n.addButton,children:"Invite"})]}),(0,u.jsxs)("button",{onClick:()=>t(!e),className:n.addButton,children:[(0,u.jsx)(i.E5P,{})," Add Tutor"]}),m&&(0,u.jsx)("div",{className:n.modal,children:(0,u.jsxs)("div",{className:n.modalContent,children:[(0,u.jsx)("p",{children:"Are you sure you want to delete this tutor?"}),(0,u.jsx)("button",{onClick:()=>{b((0,o.MK)(p.id)),h(!1),x(null)},className:n.modalButton,children:"Yes, Delete"}),(0,u.jsx)("button",{onClick:()=>{h(!1),x(null)},className:n.cancelButton,children:"Cancel"})]})})]});var f}function m(){return(0,u.jsx)("div",{children:(0,u.jsx)(d,{})})}},775:(e,t,s)=>{s.d(t,{JV:()=>n,K$:()=>l,S6:()=>i,Su:()=>a,lm:()=>o,pf:()=>r});const a=e=>e.tutorsSlice.items,l=e=>e.tutorsSlice.error,i=e=>e.tutorsSlice.isLoading,n=e=>e.facultiesSlice.items,r=e=>e.facultiesSlice.error,o=e=>e.facultiesSlice.isLoading}}]);
//# sourceMappingURL=74.68ab3973.chunk.js.map