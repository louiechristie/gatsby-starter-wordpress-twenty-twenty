(self.webpackChunkcreative_tech_blog=self.webpackChunkcreative_tech_blog||[]).push([[171],{8591:function(e,t,a){"use strict";var n=a(7294),r=a(5444);t.Z=function(e){var t=e.categories;return null!=t&&t.nodes&&0!==t.nodes?n.createElement("div",{className:"entry-categories"},n.createElement("span",{className:"screen-reader-text"},"Categories"),n.createElement("div",{className:"entry-categories-inner"},t.nodes.map((function(e,t){return n.createElement(r.Link,{to:e.uri,key:t,rel:"category tag"},e.name)})))):null}},3314:function(e,t,a){"use strict";var n,r=a(7294),s=a(3761),l=a.n(s),i=a(5444),c=a(8707),o=a.n(c),m=(a(5871),a(306)),u=null==m||null===(n=m.author)||void 0===n?void 0:n.url;t.Z=function(e){var t,a=e.author,n=(e.title,e.date);return a=null===(t=a)||void 0===t?void 0:t.node,r.createElement("div",{className:"post-meta-wrapper post-meta-single post-meta-single-top"},r.createElement("ul",{className:"post-meta"},r.createElement("li",{className:"post-author meta-wrapper"},r.createElement("span",{className:"meta-icon"},r.createElement("span",{className:"screen-reader-text"},"Post author"),r.createElement(i.Link,{to:u},r.createElement(l(),null))),r.createElement("span",{className:"meta-text"},"By"," ",r.createElement(i.Link,{to:u},a.firstName?a.lastName?a.firstName+" "+a.lastName:a.firstName:a.name))),r.createElement("li",{className:"post-date meta-wrapper"},r.createElement("span",{className:"meta-icon"},r.createElement("span",{className:"screen-reader-text"},"Post date"),r.createElement(o(),null)),r.createElement("span",{className:"meta-text"},n))))}},6688:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return L}});var n,r=a(7294),s=a(492),l=a(7969),i=a(6814),c=function(e){return(0,i.Z)(e),r.createElement("div",{className:"comments-wrapper section-inner"})},o=a(5444),m=function(e){var t=e.previousPage,a=e.nextPage,n=e.contentType;return r.createElement("nav",{className:"pagination-single section-inner","aria-label":n,role:"navigation"},r.createElement("hr",{className:"styled-separator is-style-wide","aria-hidden":"true"}),r.createElement("div",{className:"pagination-single-inner"},t&&r.createElement(o.Link,{className:"previous-post",to:t.uri},r.createElement("span",{className:"arrow","aria-hidden":"true"},"←"),r.createElement("span",{className:"title"},r.createElement("span",{className:"title-inner",dangerouslySetInnerHTML:{__html:t.title}}))),a&&r.createElement(o.Link,{className:"next-post",to:a.uri},r.createElement("span",{className:"arrow","aria-hidden":"true"},"→"),r.createElement("span",{className:"title"},r.createElement("span",{className:"title-inner",dangerouslySetInnerHTML:{__html:a.title}})))),r.createElement("hr",{className:"styled-separator is-style-wide","aria-hidden":"true"}))},u=a(9285),d=a(306),p=null==d||null===(n=d.author)||void 0===n?void 0:n.url,g=function(e){var t,a,n,s=e.author;if(!(s=null===(t=s)||void 0===t?void 0:t.node).description)return null;var l=(0,u.d)(null===(a=s)||void 0===a?void 0:a.avatar.imageFile),i=s.description.replace(/(\r\n|\n|\r)/gm,"<br/>");return r.createElement("div",{className:"author-bio"},r.createElement("div",{className:"author-title-wrapper"},r.createElement("div",{className:"author-avatar vcard"},r.createElement("div",{className:"avatar avatar-160 wp-user-avatar wp-user-avatar-160 alignnone photo"},r.createElement(u.G,{image:l,className:"avatar",alt:s.name}))),r.createElement(o.Link,{className:"author-link",to:p},r.createElement("h2",{className:"author-title heading-size-4"},"By ",s.name))),r.createElement("div",{className:"author-description"},r.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),r.createElement(o.Link,{className:"author-link",to:null==d||null===(n=d.author)||void 0===n?void 0:n.url},"View Homepage ",r.createElement("span",{"aria-hidden":"true"},"→")," ")))},v=a(3314),h=a(8591),E=a(7109),L=function(e){var t=e.data,a=t.nextPage,n=t.previousPage,i=t.page,o=i.title,u=i.uri,d=i.content,p=i.featuredImage,L=i.categories,y=i.excerpt,N=i.databaseId,C=i.author,f=i.date;return r.createElement(s.Z,{bodyClass:"post-template-default single single-post postid-"+N+" single-format-standard wp-embed-responsive singular has-post-thumbnail has-single-pagination showing-comments footer-top-visible customize-support"},r.createElement(l.Z,{title:o,description:y,socialImage:null==p?void 0:p.node,uri:u}),r.createElement("article",{className:"post-"+N+" post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized",id:"post-"+N},r.createElement("header",{className:"entry-header has-text-align-center header-footer-group"},r.createElement("div",{className:"entry-header-inner section-inner medium"},r.createElement(h.Z,{categories:L}),r.createElement("h1",{className:"entry-title",dangerouslySetInnerHTML:{__html:o}}),r.createElement(v.Z,{title:o,author:C,date:f}))),r.createElement(E.Z,{image:p}),r.createElement("div",{className:"post-inner thin"},r.createElement("div",{className:"entry-content",dangerouslySetInnerHTML:{__html:d}})),r.createElement("div",{className:"section-inner"},r.createElement(g,{author:C}),r.createElement(m,{previousPage:n,nextPage:a,contentType:"Post"}),r.createElement(c,null))))}},3761:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,n.createElement("path",{fill:"",d:"M18,19 C18,19.5522847 17.5522847,20 17,20 C16.4477153,20 16,19.5522847 16,19 L16,17 C16,15.3431458 14.6568542,14 13,14 L5,14 C3.34314575,14 2,15.3431458 2,17 L2,19 C2,19.5522847 1.55228475,20 1,20 C0.44771525,20 0,19.5522847 0,19 L0,17 C0,14.2385763 2.23857625,12 5,12 L13,12 C15.7614237,12 18,14.2385763 18,17 L18,19 Z M9,10 C6.23857625,10 4,7.76142375 4,5 C4,2.23857625 6.23857625,0 9,0 C11.7614237,0 14,2.23857625 14,5 C14,7.76142375 11.7614237,10 9,10 Z M9,8 C10.6568542,8 12,6.65685425 12,5 C12,3.34314575 10.6568542,2 9,2 C7.34314575,2 6,3.34314575 6,5 C6,6.65685425 7.34314575,8 9,8 Z"}))}r.defaultProps={className:"svg-icon","aria-hidden":"true",role:"img",focusable:"false",width:"18",height:"20",viewBox:"0 0 18 20"},e.exports=r,r.default=r},5871:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,n.createElement("path",{d:"M9.43016863,13.2235931 C9.58624731,13.094699 9.7823475,13.0241935 9.98476849,13.0241935 L15.0564516,13.0241935 C15.8581553,13.0241935 16.5080645,12.3742843 16.5080645,11.5725806 L16.5080645,3.44354839 C16.5080645,2.64184472 15.8581553,1.99193548 15.0564516,1.99193548 L3.44354839,1.99193548 C2.64184472,1.99193548 1.99193548,2.64184472 1.99193548,3.44354839 L1.99193548,11.5725806 C1.99193548,12.3742843 2.64184472,13.0241935 3.44354839,13.0241935 L5.76612903,13.0241935 C6.24715123,13.0241935 6.63709677,13.4141391 6.63709677,13.8951613 L6.63709677,15.5301903 L9.43016863,13.2235931 Z M3.44354839,14.766129 C1.67980032,14.766129 0.25,13.3363287 0.25,11.5725806 L0.25,3.44354839 C0.25,1.67980032 1.67980032,0.25 3.44354839,0.25 L15.0564516,0.25 C16.8201997,0.25 18.25,1.67980032 18.25,3.44354839 L18.25,11.5725806 C18.25,13.3363287 16.8201997,14.766129 15.0564516,14.766129 L10.2979143,14.766129 L6.32072889,18.0506004 C5.75274472,18.5196577 4.89516129,18.1156602 4.89516129,17.3790323 L4.89516129,14.766129 L3.44354839,14.766129 Z"}))}r.defaultProps={className:"svg-icon","aria-hidden":"true",role:"img",focusable:"false",width:"19",height:"19",viewBox:"0 0 19 19"},e.exports=r,r.default=r},8707:function(e,t,a){var n=a(7294);function r(e){return n.createElement("svg",e,n.createElement("path",{fill:"",d:"M4.60069444,4.09375 L3.25,4.09375 C2.47334957,4.09375 1.84375,4.72334957 1.84375,5.5 L1.84375,7.26736111 L16.15625,7.26736111 L16.15625,5.5 C16.15625,4.72334957 15.5266504,4.09375 14.75,4.09375 L13.3993056,4.09375 L13.3993056,4.55555556 C13.3993056,5.02154581 13.0215458,5.39930556 12.5555556,5.39930556 C12.0895653,5.39930556 11.7118056,5.02154581 11.7118056,4.55555556 L11.7118056,4.09375 L6.28819444,4.09375 L6.28819444,4.55555556 C6.28819444,5.02154581 5.9104347,5.39930556 5.44444444,5.39930556 C4.97845419,5.39930556 4.60069444,5.02154581 4.60069444,4.55555556 L4.60069444,4.09375 Z M6.28819444,2.40625 L11.7118056,2.40625 L11.7118056,1 C11.7118056,0.534009742 12.0895653,0.15625 12.5555556,0.15625 C13.0215458,0.15625 13.3993056,0.534009742 13.3993056,1 L13.3993056,2.40625 L14.75,2.40625 C16.4586309,2.40625 17.84375,3.79136906 17.84375,5.5 L17.84375,15.875 C17.84375,17.5836309 16.4586309,18.96875 14.75,18.96875 L3.25,18.96875 C1.54136906,18.96875 0.15625,17.5836309 0.15625,15.875 L0.15625,5.5 C0.15625,3.79136906 1.54136906,2.40625 3.25,2.40625 L4.60069444,2.40625 L4.60069444,1 C4.60069444,0.534009742 4.97845419,0.15625 5.44444444,0.15625 C5.9104347,0.15625 6.28819444,0.534009742 6.28819444,1 L6.28819444,2.40625 Z M1.84375,8.95486111 L1.84375,15.875 C1.84375,16.6516504 2.47334957,17.28125 3.25,17.28125 L14.75,17.28125 C15.5266504,17.28125 16.15625,16.6516504 16.15625,15.875 L16.15625,8.95486111 L1.84375,8.95486111 Z"}))}r.defaultProps={className:"svg-icon","aria-hidden":"true",role:"img",focusable:"false",width:"18",height:"19",viewBox:"0 0 18 19"},e.exports=r,r.default=r},306:function(e){"use strict";e.exports=JSON.parse('{"name":"creative-tech-blog","description":"Creative Tech Blog","license":"SEE LICENSE IN <LICENSE>","private":true,"version":"0.1.0","author":{"name":"Louie Christie","url":"https://www.louiechristie.com"},"scripts":{"develop":"yarn gatsby develop","clean":"yarn gatsby clean","build":"yarn gatsby build","cdev":"yarn gatsby clean && yarn gatsby develop","cbuild":"yarn gatsby clean && yarn gatsby build","start":"yarn develop","serve":"yarn gatsby serve","deploy":"yarn gatsby build --prefix-paths && yarn gh-pages -d public"},"dependencies":{"dotenv":"^9.0.2","gatsby":"^3.5.0","gatsby-plugin-image":"^1.5.0","gatsby-plugin-mailgo":"^0.12.2","gatsby-plugin-manifest":"^3.8.0","gatsby-plugin-notifications":"^0.0.2","gatsby-plugin-react-svg":"^3.0.1","gatsby-plugin-sharp":"^3.5.0","gatsby-source-filesystem":"^3.5.0","gatsby-source-wordpress":"^5.5.0","gatsby-transformer-sharp":"^3.5.0","prop-types":"^15.7.2","react":"^17.0.2","react-dom":"^17.0.2","react-helmet":"^6.1.0"},"devDependencies":{"gh-pages":"^3.2.3","prettier":"^2.3.0"}}')}}]);
//# sourceMappingURL=component---src-templates-types-post-js-adfb711b43a04aa178d0.js.map