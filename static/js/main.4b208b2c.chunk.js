(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(4),s=a.n(r),l=(a(9),a(2)),i=(a(10),a(0));function o(e){var t=Object(n.useState)("Enter text here"),a=Object(l.a)(t,2),c=a[0],r=a[1];return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:e.textArea}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label"}),Object(i.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){r(e.target.value)},id:"textarea",rows:"8"})]}),Object(i.jsx)("button",{type:"button",onClick:function(){var e=c.toUpperCase();r(e)},className:"btn btn-primary mx-3",children:"ConvertToUppercase"}),Object(i.jsx)("button",{type:"button",onClick:function(){var e=c.toLowerCase();r(e)},className:"btn btn-primary mx-3",children:"ConvertToLowercase"}),Object(i.jsx)("button",{type:"button",onClick:function(){r("")},className:"btn btn-primary mx-3",children:"Clear Text"}),Object(i.jsx)("button",{type:"button",onClick:function(){var e=c.replace(/\s+/g," ").trim();r(e)},className:"btn btn-primary mx-3",children:"Remove Extra Space"})]}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h2",{children:"Your text Summary"}),Object(i.jsxs)("p1",{children:[c.split(/\s+/).filter((function(e){return 0!=e.length})).length," words ",c.length," characters "]})]}),Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsx)("p",{children:c.length>0?c:"Nothing to Preview!"})]})]})}function b(e){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"#",children:e.AboutText})})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})})}var j=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b,{title:"Textutils1",mode:a,toggleMode:function(){"light"===a?(c("grey"),document.body.style.backgroundColor="grey"):(c("light"),document.body.style.backgroundColor="white")},AboutText:"About Textutils"}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsx)(o,{textArea:"Enter your Text here"})})]})},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),d()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.4b208b2c.chunk.js.map