(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(6),a=c.n(i),r=c(3),l=(c(16),c(42)),j=c(43),o=c(0);function d(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(o.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsxs)("div",{className:"left",children:[Object(o.jsx)("a",{href:"#intro",className:"logo"}),Object(o.jsx)("a",{href:"https://github.com/remasbashanfar",children:Object(o.jsxs)("div",{className:"itemContainer",children:[Object(o.jsx)(l.a,{className:"icon"}),Object(o.jsx)("span",{children:"remasbashanfar"})]})}),Object(o.jsxs)("div",{className:"itemContainer",children:[Object(o.jsx)(j.a,{className:"icon"}),Object(o.jsx)("span",{children:"remasbashanfar@ucla.edu"})]})]}),Object(o.jsx)("div",{className:"right",children:Object(o.jsxs)("div",{className:"hamburger",onClick:function(){return c(!t)},children:[Object(o.jsx)("span",{className:"line1"}),Object(o.jsx)("span",{className:"line2"}),Object(o.jsx)("span",{className:"line3"})]})})]})})}c(22);var b=c(8);function h(){var e=Object(s.useRef)();return Object(s.useEffect)((function(){Object(b.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["UCLA Student","Developer","Photographer"]})}),[]),Object(o.jsxs)("div",{className:"intro",id:"intro",children:[Object(o.jsx)("div",{className:"left"}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("h2",{children:"Hello! I'm"}),Object(o.jsx)("h1",{children:"Remas Salah"}),Object(o.jsx)("h3",{children:Object(o.jsx)("span",{ref:e})}),Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:"https://drive.google.com/file/d/1XwE_XKyMycRgk5rAIxCbE_5QHiNic2tW/view?usp=sharing",className:"button",children:Object(o.jsx)("button",{class:"button",children:"View Resume"})})]}),Object(o.jsx)("a",{className:"aa",href:"#portfolio",children:Object(o.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}c(23);function u(e){var t=e.id,c=e.title,s=e.active,n=e.setSelected;return Object(o.jsx)("li",{className:s?"portfolioList active":"portfolioList",onClick:function(){return n(t)},children:c})}c(24);var m=[{id:1,title:"Moving On Narrative Game",img:"assets/movingon.png"},{id:2,title:"TunnelMan Game",img:"assets/tm2.png"},{id:3,title:"Movie Trope Analysis",img:"assets/research.png"},{id:4,title:"Spread Your Wings Mental Health Tracker",img:"assets/spreadwings.png"}];function O(){var e=Object(s.useState)("featured"),t=Object(r.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([]),a=Object(r.a)(i,2),l=a[0],j=a[1];return Object(s.useEffect)((function(){switch(c){case"featured":j(m);break;default:j(m)}}),[c]),Object(o.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(o.jsx)("h1",{children:"Projects"}),Object(o.jsx)("ul",{children:[{id:"featured",title:"Find the code & details on my Github!"}].map((function(e){return Object(o.jsx)(u,{title:e.title,active:c===e.id,setSelected:n,id:e.id})}))}),Object(o.jsx)("div",{className:"container",children:l.map((function(e){return Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)("img",{src:e.img,alt:""}),Object(o.jsx)("h3",{children:e.title})]})}))})]})}var x=c.p+"static/media/aboutfff.1190b714.png";function f(){return Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:x,style:{position:"absolute",backgroundColor:"white",alignItems:"center"}})})}c(25);function p(){return Object(o.jsxs)("div",{className:"testimonials",id:"testimonials",children:[Object(o.jsx)("h1",{children:"Work Experience"}),Object(o.jsx)("div",{className:"container",children:[{id:1,name:"Python Tutor & Curriculum Planner",title:"ACM Teach LA @UCLA",img:"assets/acm.jpeg",icon:"",desc:"Taught Python, prepared lectures, and created curriculum for Emerson Middle School students every week"},{id:2,name:"AI/ML Research Intern",title:"NC State",img:"assets/ncstate2.png",icon:"",desc:"Used Neural Network Methods & NLP to train a model of over 5,900 movies, creating an algorithm that clusters similar movies (creating movie recommendations) by Cosine Similarity",featured:!0},{id:3,name:"Product Manager Intern",title:"20Formation Event Planning",img:"assets/20formation2.png",icon:"",desc:"Trained for 4 weeks with Procter & Gamble Specialists then Managed, Planned, and Organized three events, attracting 255 attendees and profiting over $10,000"}].map((function(e){return Object(o.jsxs)("div",{className:e.featured?"card featured":"card",children:[Object(o.jsxs)("div",{className:"bottom",children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("h4",{children:e.title})]}),Object(o.jsxs)("div",{className:"top",children:[Object(o.jsx)("img",{className:"user",src:e.img,alt:""}),Object(o.jsx)("img",{className:"right",src:e.icon,alt:""})]}),Object(o.jsx)("div",{className:"center",children:e.desc})]})}))})]})}c(26);function v(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(o.jsxs)("div",{className:"contact",id:"contact",children:[Object(o.jsx)("div",{className:"left",children:Object(o.jsx)("img",{src:"assets/hijabiWorking.jpeg",alt:""})}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsx)("h2",{children:"Contact Me!"}),Object(o.jsxs)("form",{action:"https://formsubmit.co/remasbashanfar1@gmail.com",method:"POST",onSubmit:function(e){e.preventDefault(),n(!0)},children:[Object(o.jsx)("input",{type:"text",placeholder:"Email",required:!0}),Object(o.jsx)("textarea",{placeholder:"Message"}),Object(o.jsx)("button",{type:"submit",children:"Send"}),c&&Object(o.jsx)("span",{children:"Thank you :)"})]})]})]})}c(27),c(28);function g(e){var t=e.menuOpen,c=e.setMenuOpen;return Object(o.jsx)("div",{className:"menu "+(t&&"active"),children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{onClick:function(){return c(!1)},children:Object(o.jsx)("a",{href:"#intro",children:"Home"})}),Object(o.jsx)("li",{onClick:function(){return c(!1)},children:Object(o.jsx)("a",{href:"#works",children:"Technologies"})}),Object(o.jsx)("li",{onClick:function(){return c(!1)},children:Object(o.jsx)("a",{href:"#portfolio",children:"Projects"})}),Object(o.jsx)("li",{onClick:function(){return c(!1)},children:Object(o.jsx)("a",{href:"#testimonials",children:"Work Experience"})}),Object(o.jsx)("li",{onClick:function(){return c(!1)},children:Object(o.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var N=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(d,{menuOpen:c,setMenuOpen:n}),Object(o.jsx)(g,{menuOpen:c,setMenuOpen:n}),Object(o.jsxs)("div",{className:"sections",children:[Object(o.jsx)(h,{}),Object(o.jsx)(f,{}),Object(o.jsx)(O,{}),Object(o.jsx)(p,{}),Object(o.jsx)(v,{})]})]})};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.010d6497.chunk.js.map