(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||o;return a?n.a.createElement(d,c(c({ref:t},l),{},{components:a})):n.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),o=(a(0),a(113)),i={sidebar_position:1},c={unversionedId:"tutorial-basics/create-a-page",id:"tutorial-basics/create-a-page",isDocsHomePage:!1,title:"Create a Page",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/wiki/tutorial-basics/create-a-page.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-page",permalink:"/fastj/wiki/tutorial-basics/create-a-page",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Creating the Gradle Project",permalink:"/fastj/wiki/fastj-basics/creating-the-gradle-project"},next:{title:"Create a Document",permalink:"/fastj/wiki/tutorial-basics/create-a-document"}},p=[{value:"Create your first React Page",id:"create-your-first-react-page",children:[]},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",children:[]}],l={toc:p};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Add ",Object(o.b)("strong",{parentName:"p"},"Markdown or React")," files to ",Object(o.b)("inlineCode",{parentName:"p"},"src/pages")," to create a ",Object(o.b)("strong",{parentName:"p"},"standalone page"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/pages/index.js")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"localhost:3000/")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/pages/foo.md")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"localhost:3000/foo")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," -> ",Object(o.b)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),Object(o.b)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),Object(o.b)("p",null,"Create a file at ",Object(o.b)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n")),Object(o.b)("p",null,"A new page is now available at ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000/my-react-page"),"."),Object(o.b)("h2",{id:"create-your-first-markdown-page"},"Create your first Markdown Page"),Object(o.b)("p",null,"Create a file at ",Object(o.b)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),Object(o.b)("p",null,"A new page is now available at ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000/my-markdown-page"),"."))}s.isMDXComponent=!0}}]);