(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(156),l=n(154);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(l.a,{title:"404: Not found"}),i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},152:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),i=n.n(a),r=n(4),l=n.n(r),s=n(33),c=n.n(s);n.d(t,"a",function(){return c.a});n(160);var o=i.a.createContext({}),u=function(e){return i.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},154:function(e,t,n){"use strict";var a=n(155),i=n(0),r=n.n(i),l=n(4),s=n.n(l),c=n(164),o=n.n(c);function u(e){var t=e.description,n=e.lang,i=e.meta,l=e.title,s=a.data.site,c=t||s.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:c}].concat(i)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=u},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},156:function(e,t,n){"use strict";var a=n(166),i=n(0),r=n.n(i),l=n(4),s=n.n(l),c=n(152),o=(n(158),n(74),n(7)),u=n.n(o),m=n(167),d=n.n(m),h=n(161),p=n.n(h),f=n(34),E=n.n(f),v=n(168),k=n.n(v),g=[{title:"りあん",link:"/"},{title:"未来の保育士さんへ",link:"/message"},{title:"スタッフインタビュー",link:"/interview"},{title:"教室紹介",link:"/classrooms"},{title:"見学",link:"/visit"},{title:"制度",link:"/welfare"},{title:"募集要項",link:"/recruit"}],y=function(e){function t(t){var n;return(n=e.call(this,t)||this).contents=g,n.isAppeared=t.isAppeared,n.state={isOpen:!1},n.hundleClick=n.hundleClick.bind(E()(n)),n}u()(t,e);var n=t.prototype;return n.headerMenu=function(){var e=this.contents.map(function(e){return r.a.createElement("div",{key:e.link,className:k.a.listItem},r.a.createElement(c.a,{to:e.link,className:k.a.link},e.title))});return this.state.isOpen?r.a.createElement("div",{className:k.a.openMenu},e):r.a.createElement("div",{className:k.a.closeMenu},e)},n.hundleClick=function(e){this.setState({isOpen:!this.state.isOpen})},n.render=function(){return r.a.createElement("div",null,r.a.createElement("button",{className:k.a.slideButton,onClick:this.hundleClick},this.state.isOpen?"Close":"Menu"),this.headerMenu())},t}(r.a.Component),w=(n(163),[{title:"りあん",link:""},{title:"未来の保育士さんへ",link:"message"},{title:"スタッフインタビュー",link:"interview"},{title:"教室紹介",link:"classrooms"},{title:"見学",link:"visit"},{title:"制度",link:"welfare"},{title:"募集要項",link:"recruit"}]),N=function(e){function t(t){var n;return(n=e.call(this,t)||this).splitedUrl="undefined"!=typeof window&&window.location.href.split("/"),n.contents=w,n}u()(t,e);var n=t.prototype;return n.tailOf=function(e){return this.splitedUrl[this.splitedUrl.length-e]},n.fixedStaffUrl=function(){var e=this.tailOf(2);return"interview"===e?e:" "},n.componentWillMount=function(){var e=this.tailOf(1),t=this.fixedStaffUrl();this.contents.map(function(n){e===n.link||t===n.link?n.classes=p()(d.a.listItem,d.a.current):n.classes=p()(d.a.listItem)})},n.hero=function(){return r.a.createElement("div",{className:d.a.hero},r.a.createElement(c.a,{to:"/",className:d.a.hero__title},"りあん RECRUIT"))},n.headerImage=function(){var e=this.tailOf(1),t=r.a.createElement("div",{className:d.a.firstImage});return e===this.contents[0].link?t=r.a.createElement("div",{className:d.a.homeImage},r.a.createElement("div",{className:d.a.homeImage__message},r.a.createElement("strong",null,"夢と誇りを持てる",r.a.createElement("br",null),"社会のために"))):e!==this.contents[3].link&&e!==this.contents[4].link||(t=r.a.createElement("div",{className:d.a.secondImage})),t},n.headerMenu=function(){var e=this.contents.map(function(e){return r.a.createElement("div",{key:e.link,className:e.classes},r.a.createElement(c.a,{to:e.link,className:d.a.link},e.title))});return r.a.createElement("div",{className:d.a.headerMenu},e)},n.render=function(){return r.a.createElement("header",null,r.a.createElement(y,null),this.hero(),this.headerImage(),this.headerMenu())},t}(r.a.Component),b=n(169),M=n.n(b),O=function(){return r.a.createElement("footer",{className:M.a.footer},r.a.createElement("div",{className:M.a.top},r.a.createElement("p",null,"まずはお気軽にお問い合わせ下さい！"),r.a.createElement("div",{className:M.a.top__link},r.a.createElement("a",{className:M.a.tel,href:"tel:0948-26-8700"},"Tel: 0948-26-8700"),r.a.createElement("a",{className:M.a.mail,href:"https://ws.formzu.net/dist/S57550451/",target:"_blank"},"フォーム"))),r.a.createElement("div",{className:M.a.under},r.a.createElement("h2",null,"株式会社 Lien"),r.a.createElement("a",{href:"http://www.lien-inc.net/",target:"_blank"},"オフィシャルサイトはこちらから")))},C=n(170),q=n.n(C),x=function(e){function t(t){var n;return(n=e.call(this,t)||this).url="undefined"!=typeof window&&window.location.href,n.homeLink="/",console.log(n.url),n}return u()(t,e),t.prototype.render=function(){return this.url!=="http://localhost:8000"+this.homeLink?r.a.createElement(c.a,{to:this.homeLink,className:q.a.homeButton},"Home"):r.a.createElement("div",null)},t}(r.a.Component),I=(n(171),function(e){var t=e.children;return r.a.createElement(c.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:1200,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement(x,null),r.a.createElement("main",null,t)),r.a.createElement(O,null))},data:a})});I.propTypes={children:s.a.node.isRequired};t.a=I},160:function(e,t,n){var a;e.exports=(a=n(165))&&a.default||a},165:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),i=n.n(a),r=n(4),l=n.n(r),s=n(55),c=n(2),o=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?i.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-f82178be5e1f5591fdb6.js.map