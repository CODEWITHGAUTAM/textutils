(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(15),o=a.n(n),l=(a(22),a(7)),i=(a(23),a(0));function r(e){var t=Object(c.useState)("Enter text here"),a=Object(l.a)(t,2),s=a[0],n=a[1];return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:e.textArea}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label"}),Object(i.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){n(e.target.value)},id:"textarea",rows:"8"})]}),Object(i.jsx)("button",{type:"button",onClick:function(){var e=s.toUpperCase();n(e)},className:"btn btn-primary mx-3",children:"ConvertToUppercase"}),Object(i.jsx)("button",{type:"button",onClick:function(){var e=s.toLowerCase();n(e)},className:"btn btn-primary mx-3",children:"ConvertToLowercase"}),Object(i.jsx)("button",{type:"button",onClick:function(){n("")},className:"btn btn-primary mx-3",children:"Clear Text"}),Object(i.jsx)("button",{type:"button",onClick:function(){var e=s.replace(/\s+/g," ").trim();n(e)},className:"btn btn-primary mx-3",children:"Remove Extra Space"})]}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h2",{children:"Your text Summary"}),Object(i.jsxs)("p1",{children:[s.split(" ").length," words ",s.length," characters"]})]}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsx)("p",{children:s})]})]})}function d(e){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"#",children:e.AboutText})})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})})}function b(){var e=Object(c.useState)({color:"white",backgroundColor:"black"}),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)("Enable White Mode"),o=Object(l.a)(n,2),r=o[0],d=o[1];return Object(i.jsxs)("div",{className:"container",style:a,children:[Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("h1",{children:"About Us"})}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("button",{type:"button",onClick:function(){"white"===a.color?(s({color:"black",backgroundColor:"white"}),d("Enable Dark Mode")):(s({color:"white",backgroundColor:"black"}),d("Enable white Mode"))},className:"btn btn-primary mx-3 my-3",children:[" ",r," "]})})]})}var h=a(12),j=a(2);var m=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(h.a,{children:[Object(i.jsx)(d,{title:"Textutils1",mode:a,toggleMode:function(){"light"===a?(s("grey"),document.body.style.backgroundColor="grey"):(s("light"),document.body.style.backgroundColor="white")},AboutText:"About Textutils"}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/about",children:Object(i.jsx)(b,{})}),Object(i.jsx)(j.a,{exact:!0,path:"/",children:Object(i.jsx)(r,{textArea:"Enter your Text here"})})]})})]})})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),c(e),s(e),n(e),o(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),u()}},[[30,1,2]]]);
//# sourceMappingURL=main.743f94e8.chunk.js.map