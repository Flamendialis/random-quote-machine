(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(14),o=n(15),r=n(6),c=n(19),i=n(18),u=n(0),l=n.n(u),s=n(5),h=n.n(s),m=(n(25),n(3)),d=n(16),p=n(12);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=n(7),E=n(2),b=Object(m.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REFRESH":return t.quotesArr[Math.floor(Math.random()*t.quotesArr.length)];default:return e}}),Object(m.a)(d.a)),v=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={},o.refresh=o.refresh.bind(Object(r.a)(o)),o}return Object(o.a)(n,[{key:"refresh",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(t){e.props.getNewQuote(t)}))}},{key:"componentDidMount",value:function(){this.refresh()}},{key:"render",value:function(){return l.a.createElement("div",{id:"main-container"},l.a.createElement("div",{id:"bg-text"},l.a.createElement("p",null,this.props.actualQuote.text)),l.a.createElement("div",{id:"quote-container"},l.a.createElement("div",{id:"quote-box"},l.a.createElement(f.a,{id:"quote-mark",icon:E.b}),l.a.createElement("div",{id:"quote"},l.a.createElement("p",{id:"text"},this.props.actualQuote.text)),l.a.createElement("p",{id:"author"},"- ",null==this.props.actualQuote.author?"Unknown":this.props.actualQuote.author),l.a.createElement("div",{id:"btn-container"},l.a.createElement("a",{className:"button",id:"tweet-quote",href:"https://twitter.com/intent/tweet?hashtags=ReactQuoteMachine&text="+this.props.actualQuote.text+"%0D-"+this.props.actualQuote.author+"%0D%0DGet your own quote at https://flamendialis.github.io/random-quote-machine/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(f.a,{icon:E.a}),"   Tweet Quote"),l.a.createElement("button",{className:"button",id:"new-quote",onClick:this.refresh},l.a.createElement(f.a,{icon:E.c})," New Quote")))),l.a.createElement("div",{id:"footer"},l.a.createElement("p",null,"React Quote Machine"),l.a.createElement("p",null,"Created by F\xe9lix Men\xe9ndez using React-Redux")))}}]),n}(l.a.Component),w=Object(p.b)((function(e){return{actualQuote:e}}),(function(e){return{getNewQuote:function(t){e(function(e){return{type:"REFRESH",quotesArr:e}}(t))}}}))(v);h.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p.a,{store:b},l.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.5c8e5dd9.chunk.js.map