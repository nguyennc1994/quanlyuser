(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n(64)},38:function(e,t,n){},42:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),l=n.n(c),u=(n(38),n(4)),o=n(5),i=n(7),s=n(6),m=n(8),h=n(67),b=n(65),d=[{name:"Trang Ch\u1ee7",to:"/",exact:!0},{name:"Qu\u1ea3n L\xfd User",to:"/list-user",exact:!1}],E=function(e){var t=e.label,n=e.to,a=e.activeOnlyWhenExact;return r.a.createElement(h.a,{path:n,exact:a,children:function(e){var a=e.match?"active":"";return r.a.createElement("li",{className:a},r.a.createElement(b.a,{to:n},t))}})},v=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).showMenus=function(e){var t=null;return e.length>0&&(t=e.map(function(e,t){return r.a.createElement(E,{key:t,label:e.name,to:e.to,activeOnlyWhenExact:e.exact})})),t},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar navbar-default"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("ul",{className:"nav navbar-nav"},this.showMenus(d))))}}]),t}(a.Component),p=n(68),f=n(66),g=(n(42),function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"alert alert-Kh\xf4ng t\xecm th\u1ea5y trang",role:"alert"},r.a.createElement("strong",null,"Kh\xf4ng t\xecm th\u1ea5y trang")))}}]),t}(a.Component)),O=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"HomePage"))}}]),t}(a.Component),y=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"panel panel-primary"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("h3",{className:"panel-title"},"Danh s\xe1ch ng\u01b0\u1eddi d\xf9ng")),r.a.createElement("div",{className:"panel-body"},r.a.createElement("table",{className:"table table-bordered table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"STT"),r.a.createElement("th",null,"M\xe3"),r.a.createElement("th",null,"T\xean"),r.a.createElement("th",null,"\u1ea2nh \u0111\u1ea1i di\u1ec7n"),r.a.createElement("th",null,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"H\xe0nh \u0111\u1ed9ng"))),r.a.createElement("tbody",null,this.props.children))))}}]),t}(a.Component),j=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.index;return r.a.createElement("tr",null,r.a.createElement("td",null,n+1),r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.picture),r.a.createElement("td",null,t.phone),r.a.createElement("td",null,t.email),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"btn btn-success mr-10"},"S\u1eeda"),r.a.createElement("button",{type:"button",className:"btn btn-danger"},"X\xf3a")))}}]),t}(a.Component),N=n(14),w=n(30),_=n.n(w),k=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={users:[]},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;_()({method:"GET",url:"http://5c8238742d2ad30014be5124.mockapi.io/api/users",data:null}).then(function(t){console.log(t.data.results),e.setState({users:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.users;return r.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},r.a.createElement("button",{type:"button",className:"btn btn-info mb-10"},"Th\xeam ng\u01b0\u1eddi d\xf9ng"),r.a.createElement(y,null,this.showUsers(e)))}},{key:"showUsers",value:function(e){var t=null;return e.length>0&&(t=e.map(function(e,t){return r.a.createElement(j,{key:t,user:e,index:t})})),t}}]),t}(a.Component),x=Object(N.b)(function(e){return{users:e.users}},null)(k),C=[{path:"/",exact:!0,main:function(){return r.a.createElement(O,null)}},{path:"/list-user",exact:!1,main:function(){return r.a.createElement(x,null)}},{path:"",exact:!1,main:function(){return r.a.createElement(g,null)}}],T=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).showContentMenus=function(e){var t=null;return e.length>0&&(t=e.map(function(e,t){return r.a.createElement(h.a,{key:t,path:e.path,exact:e.exact,component:e.main})})),r.a.createElement(p.a,null,t)},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},this.showContentMenus(C)))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(11),D=n(31),P=[{id:1,name:"Nguy\u1ec5n C\xf4ng A",avatar:"https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-9/49587730_1417421465060299_7962810246559170560_n.jpg?_nc_cat=111&_nc_oc=AQliIE9pFHS4hNmNhPM5cTW6kG65wsnva3P5D8vBY0rEPNQ6eFL7qUbVPoOKLGF0Fvo&_nc_ht=scontent.fhan5-3.fna&oh=7e2f4f2e5b05e6ce49f77e64c45039cb&oe=5D17A7AB",numberPhone:"0355038248",email:"nguyencongnguyen.hatrung@gmail.com"},{id:2,name:"Nguy\u1ec5n C\xf4ng b",avatar:null,numberPhone:"0355038248",email:"nguyencongnguyen.hatrung@gmail.com"},{id:3,name:"Nguy\u1ec5n C\xf4ng c",avatar:null,numberPhone:"0355038248",email:"nguyencongnguyen.hatrung@gmail.com"}],M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;return(arguments.length>1?arguments[1]:void 0).type,Object(D.a)(e)},A=Object(S.b)({users:M}),U=Object(S.c)(A,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(N.a,{store:U},r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.6b85b514.chunk.js.map