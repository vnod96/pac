(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/HotSugar.0b6321d4.mp3"},,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){e.exports=a.p+"static/media/BACKTO1982.55b74fea.TTF"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),i=a(4),u=a(8),l=a.n(u),s=(a(15),a(16),a(1)),m=a(5),p=a(9),f=(a(17),{red:"0deg",green:"150deg",blue:"240deg",purple:"300deg"}),d=function(e){var t=e.scale,a=void 0===t?1:t,n=e.color,r=void 0===n?"blue":n,o=e.padding,i=void 0===o?5:o,u=e.position,l=Object(p.a)(e,["scale","color","padding","position"]);return c.a.createElement("div",Object.assign({style:Object(s.a)({padding:i,height:45,width:47},u)},l),c.a.createElement("div",{className:"pac",style:{transform:"scale(".concat(a,")"),filter:"hue-rotate(".concat(f[r],")")}}))},b=function(e){var t=e.className,a=Object(n.useRef)(null),r=Object(n.useState)({xCount:0,yCount:0}),o=Object(i.a)(r,2),u=o[0],l=o[1];return Object(n.useEffect)((function(){if(a.current){var e=a.current,t=e.offsetWidth,n=e.offsetHeight;a.current.style.width=a.current.scrollWidth-t%47+"px";var c=Math.floor(t/47),r=Math.floor(n/45);l({xCount:c,yCount:r})}}),[]),c.a.createElement("div",{ref:a,className:t},u.xCount&&Object(m.a)(Array(u.xCount).keys()).map((function(e){var t={position:"absolute",left:47*e};return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{position:Object(s.a)(Object(s.a)({},t),{},{top:0})}),c.a.createElement(d,{position:Object(s.a)(Object(s.a)({},t),{},{bottom:0})}))})),u.yCount&&Object(m.a)(Array(u.yCount).keys()).map((function(e){if(0!==e&&e!==u.yCount){var t={position:"absolute",top:45*e};return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{position:Object(s.a)({},t)}),c.a.createElement(d,{position:Object(s.a)(Object(s.a)({},t),{},{right:0})}))}})))},g=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useRef)(new Audio);Object(n.useEffect)((function(){o.current.src=l.a}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"music-app"},c.a.createElement("div",{className:"music-bg"},c.a.createElement("div",{className:"music-title",onClick:function(){a?o.current.pause():o.current.play(),r(!a)}},"Hot Sugar"),c.a.createElement(b,{className:"grid"}))))},E=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,null))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.2a70a6d5.chunk.js.map