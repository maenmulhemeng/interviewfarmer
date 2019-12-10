(this.webpackJsonpreaction=this.webpackJsonpreaction||[]).push([[0],{41:function(e,t,a){e.exports=a(70)},46:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),i=a.n(r),s=(a(46),a(38)),c=a(20),o=a(30),u=a(31),m=a(40),h=a(32),d=a(11),E=a(39),f=a(73),g=a(74),p=a(75),v=a(77),b=a(72),w=a(80),k=a(79),y=a(81);var S=function(e){return l.a.createElement(b.a,{fluid:!0},l.a.createElement(f.a,null,l.a.createElement("h1",null,"Farmerathand Interview"),l.a.createElement("p",null,"The idea of the project is so simple. The server sends a list of Farmers (users) allowing you to navigate through them. Once you choose a farmer, the list of the farmer's files will be shown and an uploader component will be too. You can upload a new file and notice the change that happens to the list."),l.a.createElement("h2",null,"You can find in this project"),l.a.createElement(w.a,{defaultActiveKey:"0"},l.a.createElement(k.a,null,l.a.createElement(k.a.Header,null,l.a.createElement(w.a.Toggle,{as:y.a,variant:"link",eventKey:"0"},"Client side")),l.a.createElement(w.a.Collapse,{eventKey:"0"},l.a.createElement(k.a.Body,null,l.a.createElement("ol",null,l.a.createElement("li",null,"  Defining ReactJS Components"),l.a.createElement("li",null,"  Using ",l.a.createElement("b",null,"Bootstrap")," for React"),l.a.createElement("li",null,"  Passing parameters/handlers from parents to childrens "),l.a.createElement("li",null,"  Sending requests to the server sometimes when the component is mounted and sometimes when a button clicked using ",l.a.createElement("b",null,"Fetch")," and ",l.a.createElement("b",null,"axios")),l.a.createElement("li",null,"  A special file to show how we can solve the save problem using older libraries like JQuery"))))),l.a.createElement(k.a,null,l.a.createElement(k.a.Header,null,l.a.createElement(w.a.Toggle,{as:y.a,variant:"link",eventKey:"1"},"Server side")),l.a.createElement(w.a.Collapse,{eventKey:"1"},l.a.createElement(k.a.Body,null,l.a.createElement("ol",null,l.a.createElement("li",null,"  Defining an Express server"),l.a.createElement("li",null,"  Defining a system architecture ",l.a.createElement("b",null,"Routes, Controllers, Models")),l.a.createElement("li",null,"  Defining REST handlers for ",l.a.createElement("b",null,"GET/POST/PUT/DELETE")),l.a.createElement("li",null,"  Handling ",l.a.createElement("b",null,"MySQL")," request using two patterns. The first one is achieved using an ",l.a.createElement("i",null,"ORM")," library ",l.a.createElement("b",null,"Sequelize")," and the other is built ",l.a.createElement("b",null,"from skratch")),l.a.createElement("li",null,"  Handling uploading files using ",l.a.createElement("b",null,"Multer")," which handles ",l.a.createElement("b",null,"multipart/form-data")," "))))))))};var T=function(e){return l.a.createElement("div",{id:"farmerFilesSection"},l.a.createElement(f.a,null,l.a.createElement(g.a,null,l.a.createElement("h4",null,"The files of ",void 0!==e.user.name?e.user.name.charAt(0).toUpperCase()+e.user.name.substring(1):"")),l.a.createElement(g.a,null,l.a.createElement(p.a,null,l.a.createElement(v.a,{id:"files"},e.user.files.map((function(e,t){return l.a.createElement(v.a.Item,{action:!0,href:"images/"+e.src,key:t},e.src)})))),l.a.createElement(p.a,null,l.a.createElement("form",{onSubmit:function(t){return e.upload(t)},id:"farmer",method:"POST",encType:"multipart/form-data"},l.a.createElement("input",{type:"file",id:"attachment",name:"attachment",onChange:e.chooseFile}),l.a.createElement("button",{type:"submit"},"Upload File"))))))},F=a(78);var j=function(e){return l.a.createElement("div",null,l.a.createElement(F.a.Brand,{href:e.link},l.a.createElement("img",{src:e.src,width:e.width,height:e.height,alt:e.alt})),l.a.createElement(F.a.Brand,{href:e.link},"Farmers & Files"))};var C=function(){return l.a.createElement(F.a,{bg:"dark",variant:"dark"},l.a.createElement(j,{src:"img/logo-shrunk.png",width:30,height:30,alt:"Farmer At Hand Logo",link:""}),l.a.createElement(F.a.Toggle,null),l.a.createElement(F.a.Collapse,{className:"justify-content-end"},l.a.createElement(F.a.Text,null,"Source Code in ",l.a.createElement("a",{href:"https://github.com/maenmulhemeng/interviewfarmer.git"},"GitHub"))))},O=a(76);var U=function(){return l.a.createElement(F.a,{bg:"dark",variant:"dark"},l.a.createElement(j,{src:"img/logo-shrunk.png",width:30,height:30,alt:"Farmer At Hand Logo",link:""}),l.a.createElement(F.a.Toggle,null),l.a.createElement(F.a.Collapse,{className:"justify-content-end"},l.a.createElement(F.a.Text,null,"Developed by ",l.a.createElement("code",null,"Maen Mulhem")," @2019 - Thanks for ",l.a.createElement("a",{href:"https://globaltalentaccelerator.com/"},l.a.createElement(O.a,{src:"img/GTA.png",width:"40",alt:"Global Talent Accelerator"})))),l.a.createElement(F.a.Collapse,{className:"justify-content-end"},l.a.createElement(F.a.Text,null,"Source Code in ",l.a.createElement("a",{href:"https://github.com/maenmulhemeng/interviewfarmer.git"},"GitHub"))))},A=a(51),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={users:[],selectedUSer:{files:[]},showList:!1},a.getFiles=a.getFiles.bind(Object(d.a)(a)),a.chooseFile=a.chooseFile.bind(Object(d.a)(a)),a.submit=a.submit.bind(Object(d.a)(a)),a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/users/",{method:"GET"}).then((function(e){if(e.ok)return e.json()})).then((function(t){e.setState({users:t})}))}},{key:"getFiles",value:function(e,t){var a=this;e.preventDefault(),this.setState({showList:!0}),fetch("/users/"+t+"/files").then((function(e){if(e.ok)return e.json()})).then((function(e){var n=a.state.users.find((function(e){return e.id===t})),l=Object(c.a)({},n,{files:e});a.setState({users:a.state.users.map((function(e){return e.id===t?l:e})),selectedUSer:l}),console.log(a.state.users)}))}},{key:"chooseFile",value:function(e){this.setState({file:e.target.files[0]})}},{key:"submit",value:function(e){var t=this;e.preventDefault();var a=new FormData;a.append("attachment",this.state.file);A.post("/users/"+this.state.selectedUSer.id+"/files",a,{headers:{"content-type":"multipart/form-data"}}).then((function(e){if(e){var a=[].concat(Object(s.a)(t.state.selectedUSer.files),[e.data]),n=Object(c.a)({},t.state.selectedUSer,{files:a});console.log(n),t.setState({selectedUSer:n})}}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(C,null),l.a.createElement(S,null),l.a.createElement("section",{id:"farmersSection"},l.a.createElement(f.a,null,l.a.createElement(g.a,null,l.a.createElement("h3",null,"List of Farmers")),l.a.createElement(g.a,null,l.a.createElement(p.a,null,l.a.createElement(v.a,{id:"farmers"},this.state.users.map((function(t,a){return l.a.createElement(v.a.Item,{action:!0,href:"#link"+a,onClick:function(a){return e.getFiles(a,t.id)},key:a},void 0!==t.name?t.name.charAt(0).toUpperCase()+t.name.substring(1):"")}))))),l.a.createElement(g.a,null,this.state.showList?l.a.createElement(T,{upload:this.submit,chooseFile:this.chooseFile,user:this.state.selectedUSer}):l.a.createElement("div",null)))),l.a.createElement("br",null),l.a.createElement(U,null))}}]),t}(l.a.Component);var H=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(D,null))};a(69),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.a8fdbf0a.chunk.js.map