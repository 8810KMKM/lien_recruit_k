(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(156),l=n(154);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},152:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),l=n.n(i),s=n(33),c=n.n(s);n.d(t,"a",function(){return c.a});n(161);var o=r.a.createContext({}),u=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},154:function(e,t,n){"use strict";var a=n(155),r=n(0),i=n.n(r),l=n(4),s=n.n(l),c=n(164),o=n.n(c);function u(e){var t=e.description,n=e.lang,r=e.meta,l=e.title,s=a.data.site,c=t||s.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:c}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),title:s.a.string.isRequired},t.a=u},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},156:function(e,t,n){"use strict";var a=n(166),r=n(0),i=n.n(r),l=n(4),s=n.n(l),c=n(152),o=(n(158),n(159),n(74),n(7)),u=n.n(o),m=n(167),d=n.n(m),p=n(162),h=n.n(p),f=n(35),E=n.n(f),v=n(168),g=n.n(v),k=[{title:"りあん",link:"/"},{title:"未来の保育士さんへ",link:"/message"},{title:"スタッフインタビュー",link:"/interview"},{title:"教室紹介",link:"/classrooms"},{title:"見学",link:"/visit"},{title:"制度",link:"/welfare"},{title:"募集要項",link:"/recruit"}],w=function(e){function t(t){var n;return(n=e.call(this,t)||this).contents=k,n.isAppeared=t.isAppeared,n.state={isOpen:!1},n.hundleClick=n.hundleClick.bind(E()(n)),n}u()(t,e);var n=t.prototype;return n.headerMenu=function(){var e=this.contents.map(function(e){return i.a.createElement("div",{key:e.link,className:g.a.listItem},i.a.createElement(c.a,{to:e.link,className:g.a.link},e.title))});return this.state.isOpen?i.a.createElement("div",{className:g.a.openMenu},e):i.a.createElement("div",{className:g.a.closeMenu},e)},n.hundleClick=function(e){this.setState({isOpen:!this.state.isOpen})},n.render=function(){return i.a.createElement("div",null,i.a.createElement("button",{className:g.a.slideButton,onClick:this.hundleClick},this.state.isOpen?"Close":"Menu"),this.headerMenu())},t}(i.a.Component),y=[{title:"りあん",link:""},{title:"未来の保育士さんへ",link:"message"},{title:"スタッフインタビュー",link:"interview"},{title:"教室紹介",link:"classrooms"},{title:"見学",link:"visit"},{title:"制度",link:"welfare"},{title:"募集要項",link:"recruit"}],N=function(e){function t(t){var n;return(n=e.call(this,t)||this).splitedUrl="undefined"!=typeof window&&window.location.href.split("/"),n.contents=y,n.setMenuClass(),n}u()(t,e);var n=t.prototype;return n.setMenuClass=function(){var e=this.contents.slice(1),t=!1,n=this.splitedUrl;console.log(this.contents),e.map(function(e){-1!==n.findIndex(function(t){return t===e.link})?(e.classes=h()(d.a.listItem,d.a.current),t=!0):e.classes=h()(d.a.listItem)}),this.contents[0].classes=t?h()(d.a.listItem):h()(d.a.listItem,d.a.current),console.log(this.contents)},n.hero=function(){return i.a.createElement("div",{className:d.a.hero},i.a.createElement(c.a,{to:"/",className:d.a.hero__title},"りあん RECRUIT"))},n.headerImage=function(){var e=i.a.createElement("div",{className:d.a.homeImage},i.a.createElement("div",{className:d.a.homeImage__message},i.a.createElement("strong",null,"夢と誇りを持てる",i.a.createElement("br",null),"社会のために"))),t=this.splitedUrl,n=t.findIndex(function(e){return"message"===e||"interview"===e||"classrooms"===e}),a=t.findIndex(function(e){return"visit"===e||"welfare"===e||"recruit"===e});return-1!==n?e=i.a.createElement("div",{className:d.a.firstImage}):-1!==a&&(e=i.a.createElement("div",{className:d.a.secondImage})),e},n.headerMenu=function(){var e=this.contents.map(function(e){return i.a.createElement("div",{key:e.link,className:e.classes},i.a.createElement(c.a,{to:e.link,className:d.a.link},e.title))});return i.a.createElement("div",{className:d.a.headerMenu},e)},n.render=function(){return i.a.createElement("header",null,i.a.createElement(w,null),this.hero(),this.headerImage(),this.headerMenu())},t}(i.a.Component),b=n(169),I=n.n(b),M=function(){return i.a.createElement("footer",{className:I.a.footer},i.a.createElement("div",{className:I.a.top},i.a.createElement("p",null,"まずはお気軽にお問い合わせ下さい！"),i.a.createElement("div",{className:I.a.top__link},i.a.createElement("a",{className:I.a.tel,href:"tel:0948-26-8700"},"Tel: 0948-26-8700"),i.a.createElement("a",{className:I.a.mail,href:"https://ws.formzu.net/dist/S57550451/",target:"_blank"},"フォーム"))),i.a.createElement("div",{className:I.a.under},i.a.createElement("h2",null,"株式会社 Lien"),i.a.createElement("a",{href:"http://www.lien-inc.net/",target:"_blank"},"オフィシャルサイトはこちらから")))},C=n(170),x=n.n(C),q=function(e){function t(t){var n;return(n=e.call(this,t)||this).splitedUrl="undefined"!=typeof window&&window.location.href.split("/"),n}u()(t,e);var n=t.prototype;return n.tailOf=function(e){return this.splitedUrl[this.splitedUrl.length-e]},n.render=function(){return-1!==this.splitedUrl.findIndex(function(e){return"message"===e||"interview"===e||"classrooms"===e||"visit"===e||"welfare"===e||"recruit"===e})?i.a.createElement(c.a,{to:this.homeLink,className:x.a.homeButton},"Home"):i.a.createElement("div",null)},t}(i.a.Component),O=(n(171),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(N,null),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1200,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement(q,null),i.a.createElement("main",null,t)),i.a.createElement(M,null))},data:a})});O.propTypes={children:s.a.node.isRequired};t.a=O},161:function(e,t,n){var a;e.exports=(a=n(165))&&a.default||a},165:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),r=n.n(a),i=n(4),l=n.n(i),s=n(55),c=n(2),o=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-6d8968e68a466f068194.js.map