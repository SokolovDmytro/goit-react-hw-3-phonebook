(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports=n(22)},22:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),l=n(12),u=n(1),i=n(2),m=n(4),s=n(3),h=n(10),d=n(11),b=n(5),p=n.n(b),f=function(t){Object(m.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault(),t.props.submitContact({name:t.state.name,number:t.state.number,id:Object(d.v4)()}),t.setState({name:"",number:""})},t.handleChange=function(e){t.setState(Object(h.a)({},e.target.name,e.target.value))},t}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("h2",null,"NAME"),c.a.createElement("input",{type:"text",name:"name",placeholder:"Enter name",onChange:this.handleChange,value:this.state.name}),c.a.createElement("h2",null,"NUMBER"),c.a.createElement("input",{type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",name:"number",placeholder:"123-321-1111",onChange:this.handleChange,value:this.state.number}),c.a.createElement("button",{type:"submit"},"Add contact")))}}]),n}(a.Component);f.protoType={name:p.a.string,number:p.a.string};var E=f,g=function(t){var e=t.contact,n=e.id,a=e.name,r=e.number,o=t.deleteContact;return c.a.createElement("li",null,c.a.createElement("span",null,a," "),c.a.createElement("span",null,r," "),c.a.createElement("button",{type:"button",id:n,onClick:o},"DELETE"))},v=function(t){var e=t.contacts,n=t.deleteContact;return c.a.createElement("ul",null,e.map((function(t){return c.a.createElement(g,{contact:t,key:t.id,deleteContact:n})})))},C=function(t){var e=t.value,n=t.getName;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Find contact by name"),c.a.createElement("input",{type:"text",onChange:n,value:e}))},y=function(t){Object(m.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},t.submitContact=function(e){t.state.contacts.some((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contact")):t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[e])}}))},t.deleteContact=function(e){var n=e.target.id;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t.getName=function(e){t.setState({filter:e.target.value})},t.filterContacts=function(){return t.state.contacts.filter((function(e){return e.name.toLocaleLowerCase().includes(t.state.filter)}))},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=null!==localStorage.getItem("contacts")?JSON.parse(localStorage.getItem("contacts")):[];this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter;return c.a.createElement("div",null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(E,{submitContact:this.submitContact}),c.a.createElement("h2",null,"Contacts"),this.state.contacts.length>2&&c.a.createElement(C,{getName:this.getName,value:t}),c.a.createElement(v,{contacts:this.filterContacts(),deleteContact:this.deleteContact}))}}]),n}(a.Component);o.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.b05d47cf.chunk.js.map