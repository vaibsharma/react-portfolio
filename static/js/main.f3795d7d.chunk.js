(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,t,a){e.exports=a(297)},157:function(e,t,a){},297:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),i=a.n(o),c=(a(157),a(64)),l=a(27),m=a(130),s=a(131),u="INITIALIZING_APP",p={onStart:new Date,onUpdate:new Date};var h=Object(l.c)({startApp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object.assign({},p,{onUpdate:t.onUpdate});default:return e}}}),b=Object(s.createLogger)();var d=a(59),g=a(60),v=a(65),f=a(61),w=a(66),E=a(142),j=a(30),y=a(6),O=a.n(y),k=a(302),I=a(306),A=a(303),S=a(305),x=a(304),P=a(144);function U(e){return function(t){t(Object(P.a)({},e,{type:u,onUpdate:new Date}))}}var D=[{url:"https://github.com/vaibsharma",text:"Github"},{url:"https://linkedin.com/in/vaibsharma",text:"Linkedin"},{url:"https://www.spoj.com/users/techobist/",text:"SPOJ"},{url:"https://www.facebook.com/techobist/",text:"Facebook"}],T=function(e){function t(e){var a;return Object(d.a)(this,t),a=Object(v.a)(this,Object(f.a)(t).call(this,e)),console.log("start App",a.props),a}return Object(w.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){document.title="Home - Vaibhav Sharma",this.props.actions.initApp()}},{key:"render",value:function(){return console.log(this.props.startApp.onUpdate.getTime(),this.props.startApp.onStart.getTime()),r.a.createElement(k.a,{style:C.container},r.a.createElement("div",null,r.a.createElement(I.a,{textAlign:"center",columns:2,style:C.header},r.a.createElement(I.a.Row,null,r.a.createElement(I.a.Column,{mobile:16,tablet:8,computer:8,style:C.grid},r.a.createElement(A.a,{as:"h1"},"Vaibhav Sharma")),r.a.createElement(I.a.Column,{mobile:16,tablet:8,computer:8,style:C.grid},r.a.createElement(S.a,{compact:!0},D.map(function(e,t){var a=e.url,n=e.text;return r.a.createElement(S.a.Item,{key:t},r.a.createElement("a",{href:a,target:"_blank"},n))}))))),r.a.createElement("p",{style:C.p},"Hi! I am Vaibhav Sharma (vaibsharma). I am a final year Engineering Physics student from ",r.a.createElement("b",null,"Delhi Technological University")," who loves Physics as well as enjoy Programming. I work on system architecture, web and mobile applications. I've been a GSoC student at ",r.a.createElement("b",null,"AOSSIE(Australian Open Source Software Innovations and Educations)")," in 2017 and mentor in 2018. Will be joining ",r.a.createElement("b",null,"Unacademy")," as a Software Engineer from June 2019."),r.a.createElement(x.a,{info:!0},r.a.createElement(x.a.Header,null,"Am I available for Freelancing?"),r.a.createElement("p",null,"Yes, I am available. If you have a project and would like me to work on it, drop me a",r.a.createElement("a",{style:C.a,href:"mailto:vaib.sharma44@gmail.com"},r.a.createElement("b",null," mail")," .")))))}}]),t}(n.Component);T.defaultProps={startApp:O.a.object,actions:O.a.object};var C={container:{marginLeft:"2em",marginRight:"2em",marginTop:"2em"},header:{marginBottom:"1.5em"},p:{fontSize:"1.3em",lineHeight:"1.4em"},a:{textDecoration:"none",color:"inherit"},grid:{marginTop:"1em"}},H=Object(c.b)(function(e){return{startApp:e.startApp}},function(e){return{actions:Object(l.b)({initApp:U},e)}})(T),J=function(e){function t(){return Object(d.a)(this,t),Object(v.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(j.c,null,r.a.createElement(j.a,{path:"/",component:H})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L,B=document.getElementById("root"),G=Object(l.d)(h,L,Object(l.a)(m.a,b));i.a.render(r.a.createElement(c.a,{store:G},r.a.createElement(J,null)),B),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[152,1,2]]]);
//# sourceMappingURL=main.f3795d7d.chunk.js.map