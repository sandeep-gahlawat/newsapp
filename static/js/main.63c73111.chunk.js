(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(8),c=a.n(r),o=(a(14),a(2)),i=a(3),l=a(5),u=a(4),d=(a(15),a(0)),h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"/",children:"Navbar"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})}),Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})}}]),a}(n.Component),b=a(7),p=a.n(b),j=a(9),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.discription,n=e.imageurl,s=e.newsurl;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(d.jsx)("img",{src:n,className:"card-img-top",alt:"..."}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:t}),Object(d.jsx)("p",{className:"card-text",children:a}),Object(d.jsx)("a",{href:s,className:"btn btn-primary",children:"READ FULL NEWS"})]})]})})}}]),a}(n.Component),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).articles=[{source:{id:null,name:"HuffPost"},author:"Mary Papenfuss",title:"Bumble, Match, Uber, Lyft Step Up To Help Women Battle Radical Texas Anti-Abortion Law - HuffPost",description:"The CEO of Dallas-based Match said she was \u201cshocked that I now live in a state where women\u2019s reproductive laws are more regressive than most of the world.\u201d",url:"https://www.huffpost.com/entry/texas-anti-abortion-law-bumble-match-lyft-uber_n_6132baffe4b04778c0051723",urlToImage:"https://img.huffingtonpost.com/asset/6132d4da280000330271f137.jpeg?cache=rxsjpf5fb9&ops=1778_1000",publishedAt:"2021-09-04T02:56:00Z",content:"Texas-based Bumble and the CEO of the\xa0Match dating-app company, along with Uber and Lyft, have announced theyre helping women to battle the states draconian new anti-abortion law.\r\nShar Dubey, CEO of\u2026 [+3049 chars]"},{source:{id:"google-news",name:"Google News"},author:null,title:"Hazzard: 'No reason to hesitate' getting COVID-19 vaccine - Sky News Australia",description:null,url:"https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VHp5ZnFGY1JMUXfSAQA?oc=5",urlToImage:null,publishedAt:"2021-09-04T01:49:27Z",content:null},{source:{id:null,name:"Investor's Business Daily"},author:"Investor's Business Daily",title:"Dow Jones Futures: Why The Market Rally Is So Strong; Tesla Holds Buy Point Despite Bad News - Investor's Business Daily",description:"Growth stocks are having their best run in months. Tesla held a buy point despite bad news.",url:"https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-why-market-rally-is-so-strong-tesla-stock-holds-buy-point/",urlToImage:"https://www.investors.com/wp-content/uploads/2018/07/stock-bull-19-shutter.jpg",publishedAt:"2021-09-04T00:45:00Z",content:"Dow Jones futures will open Sunday evening, along with S&amp;P 500 futures and Nasdaq futures. The stock market rally had another solid week, with growth and small-cap stocks leading once again. The \u2026 [+9221 chars]"}],e.state={articles:e.articles,loading:!1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ccb1112d21c6466285c2b41b53e6fda7",e.next=3,fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ccb1112d21c6466285c2b41b53e6fda7");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),this.setState({articles:a.articles});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h1",{children:"TOP HEADLINES"}),Object(d.jsx)("div",{className:"row",children:this.state.articles.map((function(e){return Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)(m,{title:e.title,description:e.description,imageurl:e.urlToImage,newsurl:e.url})},e.url)}))})]})}}]),a}(n.Component),v=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(f,{})})]})}}]),a}(n.Component),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),g()}},[[18,1,2]]]);
//# sourceMappingURL=main.63c73111.chunk.js.map