(this.webpackJsonpmessenger_task_for_reenbit=this.webpackJsonpmessenger_task_for_reenbit||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),c=s.n(a),i=s(9),o=s.n(i),r=(s(15),s(8)),h=s(2),d=s(3),u=s(6),m=s(5),j=s(4),l=s(19),b=(s(16),s.p+"static/media/avatar.23bed195.png");var g=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:b}),Object(n.jsx)("h2",{children:"Anonymous"})]})},p=function(e){Object(m.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(h.a)(this,s),(n=t.call(this,e)).onChange=n.onChange.bind(Object(u.a)(n)),n}return Object(d.a)(s,[{key:"onChange",value:function(e){this.props.searchContact(e.target.value)}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"text",title:"searchedContact",placeholder:"Search or start new chat",onChange:this.onChange})})}}]),s}(a.Component),O=function(e){Object(m.a)(s,e);var t=Object(j.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return this.props.contacts.sort((function(e,t){var s=e.chatHistory[e.chatHistory.length-1].messageDate,n=t.chatHistory[t.chatHistory.length-1].messageDate;return new Date(n.yy,n.mm,n.dd,n.hh,n.min,n.sec)-new Date(s.yy,s.mm,s.dd,s.hh,s.min,s.sec)})).filter((function(t){return e.props.searchedContact?t.contactName.toLocaleLowerCase().includes(e.props.searchedContact.toLowerCase()):t})).map((function(t){var s=t.chatHistory[t.chatHistory.length-1].messageDate;return Object(n.jsxs)("div",{className:"ContactList",onClick:e.props.selectContact.bind(e,t.id),children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("img",{src:b}),Object(n.jsx)("h4",{children:t.contactName})]}),Object(n.jsxs)("p",{children:[s.min<10?Object(n.jsxs)("span",{children:[s.hh,":0",s.min," "]}):Object(n.jsxs)("span",{children:[s.hh,":",s.min," "]}),Object(n.jsxs)("span",{children:[s.dd,"/",s.mm,"/",s.yy]})]})]}),Object(n.jsx)("p",{className:"lastMassage",children:t.chatHistory[t.chatHistory.length-1].messageText})]},t.id)}))}}]),s}(a.Component),y=function(e){Object(m.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(h.a)(this,s),(n=t.call(this,e)).state={searchedContact:""},n.searchContact=n.searchContact.bind(Object(u.a)(n)),n}return Object(d.a)(s,[{key:"searchContact",value:function(e){this.setState({searchedContact:e})}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"ContactsWrap",children:[Object(n.jsxs)("div",{className:"UserInfo",children:[Object(n.jsx)(g,{}),Object(n.jsx)(p,{searchContact:this.searchContact})]}),Object(n.jsxs)("div",{className:"chats",children:[Object(n.jsx)("h2",{children:Object(n.jsx)("span",{children:"Chats"})}),Object(n.jsx)(O,{contacts:this.props.contacts,searchedContact:this.state.searchedContact,selectContact:this.props.selectContact})]})]})}}]),s}(a.Component),f=function(e){Object(m.a)(s,e);var t=Object(j.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"ContactInfo",children:[Object(n.jsx)("img",{src:b}),Object(n.jsx)("h2",{children:this.props.selectedContact.contactName})]})}}]),s}(a.Component),v=function(e){Object(m.a)(s,e);var t=Object(j.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return this.props.selectedContact.chatHistory.map((function(e){var t=e.messageDate;return Object(n.jsxs)("p",{className:e.messageType,children:[e.messageText,Object(n.jsx)("br",{}),Object(n.jsxs)("span",{children:[t.min<10?Object(n.jsxs)("span",{children:[t.hh,":0",t.min," "]}):Object(n.jsxs)("span",{children:[t.hh,":",t.min," "]}),Object(n.jsxs)("span",{children:[t.dd,"/",t.mm,"/",t.yy]})]})]},new Date(t.yy,t.mm,t.dd,t.hh,t.min,t.sec))}))}}]),s}(a.Component),x=function(e){Object(m.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(h.a)(this,s),(n=t.call(this,e)).state={outMessage:""},n.onSubmit=n.onSubmit.bind(Object(u.a)(n)),n.onChange=n.onChange.bind(Object(u.a)(n)),n}return Object(d.a)(s,[{key:"onSubmit",value:function(e){e.preventDefault(),this.props.sendMessage(this.state.outMessage),this.setState({outMessage:""})}},{key:"onChange",value:function(e){this.setState({outMessage:e.target.value})}},{key:"render",value:function(){return Object(n.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(n.jsx)("input",{type:"text",placeholder:"Type some message",value:this.state.outMessage,onChange:this.onChange}),Object(n.jsx)("input",{type:"submit",value:"Send"})]})}}]),s}(a.Component),C=function(e){Object(m.a)(s,e);var t=Object(j.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){if(Boolean(this.props.contacts.find((function(e){return!0===e.selected})))){var e=this.props.contacts.find((function(e){return!0===e.selected}));return Object(n.jsxs)("div",{className:"ChatWrap",children:[Object(n.jsx)(f,{selectedContact:e}),Object(n.jsx)("div",{className:"conversation",children:Object(n.jsx)(v,{selectedContact:e})}),Object(n.jsx)(x,{sendMessage:this.props.sendMessage})]})}return Object(n.jsx)("p",{className:"placeholder",children:"Select someone to chat with"})}}]),s}(a.Component),M=function(e){Object(m.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(h.a)(this,s),(n=t.call(this,e)).state={contacts:[]},n.selectContact=n.selectContact.bind(Object(u.a)(n)),n.sendMessage=n.sendMessage.bind(Object(u.a)(n)),n.receiveMessage=n.receiveMessage.bind(Object(u.a)(n)),n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("contacts"))||[{id:Object(l.a)(),contactName:"John",contactPhoto:"",selected:!1,chatHistory:[{messageType:"inMessage",messageText:"Hello",messageDate:{yy:2020,mm:11,dd:8,hh:12,min:56,sec:0}},{messageType:"outMessage",messageText:"Hi",messageDate:{yy:2020,mm:11,dd:8,hh:13,min:0,sec:0}},{messageType:"inMessage",messageText:"How are you?",messageDate:{yy:2020,mm:11,dd:8,hh:13,min:1,sec:0}}]},{id:Object(l.a)(),contactName:"Bob",contactPhoto:"",selected:!1,chatHistory:[{messageType:"inMessage",messageText:"We need to meet",messageDate:{yy:2020,mm:11,dd:7,hh:14,min:30,sec:0}},{messageType:"outMessage",messageText:"Sorry, Im busy",messageDate:{yy:2020,mm:11,dd:7,hh:14,min:35,sec:0}}]},{id:Object(l.a)(),contactName:"Den",contactPhoto:"",selected:!1,chatHistory:[{messageType:"inMessage",messageText:"I will find you and I will kill you",messageDate:{yy:2020,mm:11,dd:6,hh:15,min:56,sec:0}},{messageType:"outMessage",messageText:"Very funny!",messageDate:{yy:2020,mm:11,dd:6,hh:17,min:0,sec:0}},{messageType:"inMessage",messageText:"I know",messageDate:{yy:2020,mm:11,dd:6,hh:17,min:20,sec:0}}]}];this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"selectContact",value:function(e){this.setState({contacts:this.state.contacts.map((function(t){return t.selected=!1,t.id===e&&(t.selected=!t.selected),t}))})}},{key:"sendMessage",value:function(e){if(e){var t,s,n,a=new Date;t={messageType:"outMessage",messageText:e,messageDate:{yy:a.getFullYear(),mm:a.getMonth()+1,dd:a.getDate(),hh:a.getHours(),min:a.getMinutes(),sec:a.getSeconds()}},n=this.state.contacts.find((function(e){return!0===e.selected})).id,s=this.state.contacts.map((function(e){return!0===e.selected?Object.assign(e,{chatHistory:[].concat(Object(r.a)(e.chatHistory),[t])}):e})),this.setState({contacts:s}),this.receiveMessage(n)}}},{key:"receiveMessage",value:function(e){var t=this;fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(e){t.setState({inMessage:e.value})})),setTimeout((function(){var s,n,a=new Date;s={messageType:"inMessage",messageText:t.state.inMessage,messageDate:{yy:a.getFullYear(),mm:a.getMonth()+1,dd:a.getDate(),hh:a.getHours(),min:a.getMinutes(),sec:a.getSeconds()}},n=t.state.contacts.map((function(t){return t.id===e?Object.assign(t,{chatHistory:[].concat(Object(r.a)(t.chatHistory),[s])}):t})),t.setState({contacts:n})}),1e4)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"Wrap",children:[Object(n.jsx)(y,{contacts:this.state.contacts,selectContact:this.selectContact}),Object(n.jsx)(C,{contacts:this.state.contacts,sendMessage:this.sendMessage})]})})}}]),s}(a.Component),T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),c(e),i(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root")),T()}},[[17,1,2]]]);
//# sourceMappingURL=main.c6d6e0b1.chunk.js.map