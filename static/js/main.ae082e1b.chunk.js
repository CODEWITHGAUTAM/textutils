(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),l=(a(9),a(2)),o=(a(10),a(0));function i(e){var t=Object(c.useState)("Enter text here"),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:e.textArea}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label"}),Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){r(e.target.value)},id:"textarea",rows:"8"})]}),Object(o.jsx)("button",{type:"button",onClick:function(){var e=n.toUpperCase();r(e)},className:"btn btn-primary mx-3",children:"ConvertToUppercase"}),Object(o.jsx)("button",{type:"button",onClick:function(){var e=n.toLowerCase();r(e)},className:"btn btn-primary mx-3",children:"ConvertToLowercase"}),Object(o.jsx)("button",{type:"button",onClick:function(){r("")},className:"btn btn-primary mx-3",children:"Clear Text"}),Object(o.jsx)("button",{type:"button",onClick:function(){var e=n.replace(/\s+/g," ").trim();r(e)},className:"btn btn-primary mx-3",children:"Remove Extra Space"})]}),Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsx)("h2",{children:"Your text Summary"}),Object(o.jsxs)("p1",{children:[n.split(" ").length," words ",n.length," characters "]})]}),Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n})]})]})}function b(e){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#",children:e.AboutText})})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})})}var j=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{title:"Textutils1",mode:a,toggleMode:function(){"light"===a?(n("grey"),document.body.style.backgroundColor="grey"):(n("light"),document.body.style.backgroundColor="white")},AboutText:"About Textutils"}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(i,{textArea:"Enter your Text here"})})]})},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),d()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.ae082e1b.chunk.js.map