webpackJsonp([1],{"3rdn":function(e,t){},"8KhH":function(e,t,a){"use strict";var r=a("Ien3"),n=a.n(r),i=a("BnaJ"),s=a("VU/8")(n.a,i.a,!1,null,null,null);t.default=s.exports},BnaJ:function(e,t,a){"use strict";var r={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._t("default")],2)},staticRenderFns:[]};t.a=r},Ien3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a("cvLr")),i=a("q7+u");t.default={props:{options:{type:Object,default:function(){return{}}}},data:function(){var e=this;return{events:n.EVENTS.reduce(function(t,a){return r({},t,(s=function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];e.emitEvent(a,r)},(i=a)in(n={})?Object.defineProperty(n,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[i]=s,n));var n,i,s},{})}},watch:{options:{deep:!0,handler:function(){var e=$(".fp-section.active").index(),t=$(".fp-section.active").find(".slide.active").index();this.destroy("all"),$(".section").eq(e).addClass("active"),t>-1&&$(".section.active").find(".slide").eq(t).addClass("active"),this.init()}}},mounted:function(){this.init()},methods:{init:function(){$(this.$el).fullpage(r({},this.options,this.events))},destroy:function(){$.fn.fullpage.destroy("all")},emitEvent:function(e,t){this.$emit.apply(this,[(0,i.camelToKebab)(e)].concat(function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}(t))),this.options.hasOwnProperty(e)&&this.options[e].apply(this,t)}}}},N0o0:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("7+uW"),n=a("8KhH"),i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"nav"}},[t("div",{staticClass:"nav"},[t("p",[this._v("Main")]),this._v(" "),t("p",[this._v("About")]),this._v(" "),t("p",[this._v("Work")]),this._v(" "),t("p",[this._v("Contact")])])])}]};var s=a("VU/8")({name:"NavSection",data:function(){return{msg:"Welcome to Your Vue.js App"}}},i,!1,function(e){a("3rdn")},"data-v-3270271a",null).exports,o=a("AYPi"),l=a.n(o),c=a("Ubyc"),v=a("U0v6"),d=a.n(v),p={name:"main",data:function(){return{msg:"Main Front First Business Card"}},components:{VueTyper:c.VueTyper,FontAwesomeIcon:d.a},methods:{track:function(){Object(o.page)("/")}}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"mainComponent"}},[t("div",{staticClass:"main"},[t("div",{staticClass:"scroll-down"}),this._v(" "),t("div",{staticClass:"left-col"},[t("p",{staticClass:"name"},[this._v("Andrew Inhwan Kim")]),this._v(" "),t("vue-typer",{staticClass:"jobtitle",attrs:{text:["Frontend Engineer","Web Developer","UX Designer"],repeat:1/0,"erase-delay":70,"pre-erase-delay":1e3,"erase-style":"backspace","caret-animation":"phase"}}),this._v(" "),t("div",{staticClass:"resume"},[t("a",{attrs:{id:"aikresume",href:"http://bit.ly/2YssENj",target:"_blank",rel:"noopener noreferrer"}},[this._v("View my Resume")]),this._v(" "),t("font-awesome-icon",{staticClass:"far",attrs:{icon:["far","file-pdf"],size:"2x",color:"white"}})],1)],1),this._v(" "),t("div",{directives:[{name:"tilt",rawName:"v-tilt",value:{max:50,speed:500,perspective:1e3},expression:"{max: 50, speed: 500, perspective: 1000}"}],staticClass:"right-col profile"})])])},staticRenderFns:[]};var f=a("VU/8")(p,h,!1,function(e){a("jsXF")},null,null).exports,u={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"about"}},[a("div",{staticClass:"about"},[a("h1",{staticClass:"header"},[e._v("About")]),e._v(" "),a("p",{staticClass:"col-one"},[e._v("\n        I was born in 1991, an only child in Annandale Virginia. I grew up with an obsession with LEGO and claimed I'd \n        become a concert violinist. In middle school I thought I'd end up in the NBA or the PGA. In high school I discovered \n        The Beatles and knew our band \"Kung Food\" was going to make it 😜. At New York University I began as an Economic Policy \n        major, but transferred midway to "),a("a",{attrs:{href:"http://tisch.nyu.edu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tisch School \n        of the Arts")]),e._v(" for Film and Television. I'm currently a government contractor Front End Developer at \n        "),a("a",{attrs:{href:"https://www.mscweb.com/#science-technology-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("MSC")]),e._v(" working on "),a("a",{attrs:{href:"https://www.ncbi.nlm.nih.gov/labs/pubmed/",target:"_blank",rel:"noopener noreferrer",Pub:"",Med:"",Labs:""}},[e._v("\n        Pub Med Labs")]),e._v(" connecting people to the world's leading sources of biomedical information.\n        People are often surprised to find out that I don't subscribe to Netflix 😨, but I am a huge fan of\n        "),a("a",{attrs:{href:"https://medium.com/@akinhwan/my-favorite-podcasts-4b39a3de637c",target:"_blank",rel:"noopener noreferrer"}},[e._v("Podcasts")]),e._v(".\n      ")]),e._v(" "),a("p",{staticClass:"col-two"},[e._v("\n        I'll probably enjoy golf till old age, my handicap is ~11. I love music, here is some hard hitting jazz for your soul "),a("a",{attrs:{href:"https://youtu.be/CsxtKQW9ggg",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Love Supreme Part 2, Resolution by John Coltrane ")]),e._v(", "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=pDga7tJL2UU",target:"_blank",rel:"noopener noreferrer"}},[e._v("I Love Music by Ahmad Jamal")]),e._v(", and "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=U8pZZ5D3dVc",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yusef Lateef's Love Theme from Spartacus")]),e._v(". Also... "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=WKWFr9upIuU&t=882s",target:"_blank",rel:"noopener noreferrer"}},[e._v("Brazilian Samba?")]),e._v(". Otherwise I enjoy listening to "),a("a",{attrs:{href:"https://worldwidefm.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Worldwide FM radio")]),e._v(" while I work. I grew up eating "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Gamja-tang",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gamja-tang")]),e._v(", and will drink most anything in smoothie form. \n        My favorite book is "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Meditations",target:"_blank",rel:"noopener noreferrer"}},[e._v("Meditations")]),e._v(" by "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Marcus_Aurelius",target:"_blank",rel:"noopener noreferrer"}},[e._v("Marcus Aurelius")]),e._v(". A movie I could watch over and over again is "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=BnFjSHQFVkA",target:"_blank",rel:"noopener noreferrer"}},[e._v("In the Mood for Love")]),e._v(" by "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Wong_Kar-wai_filmography",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wong Kar-wai")]),e._v(". \n        My "),a("a",{attrs:{href:"https://www.effectivealtruism.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mission")]),e._v(" in life is to make the biggest impact on the most amount of people on this planet 🌎 \n      ")])])])}]};var m=a("VU/8")({name:"AboutSection",data:function(){return{msg:"About Me"}}},u,!1,function(e){a("UVEX")},"data-v-340c528a",null).exports,_={name:"work",data:function(){return{msg:"Work Work Work",trying1:!1,trying2:!1,trying3:!1,trying4:!1,trying5:!1,trying6:!1,trying7:!1,trying8:!1}},components:{FontAwesomeIcon:d.a},methods:{validatePass:function(e,t){"akinto"==document.getElementById("workpass"+t).value?(console.log("validated!"),this.openWindow(e),this.trying1=!1,this.trying2=!1,this.trying3=!1,this.trying4=!1,this.trying5=!1,this.trying6=!1,this.trying7=!1,this.trying8=!1,document.getElementById("workpass"+t).value=""):(alert("Contact me to view this work"),console.log("unvalidated...."))},openWindow:function(e){window.open(e)}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"work"}},[a("div",{staticClass:"work"},[a("h1",{staticClass:"header"},[e._v("Work")]),e._v(" "),a("div",{directives:[{name:"tilt",rawName:"v-tilt",value:{max:50,speed:500,perspective:1e3},expression:"{max: 50, speed: 500, perspective: 1000}"}],staticClass:"pubmed card"},[a("a",{attrs:{href:"http://bit.ly/2qdmSQ9",target:"_blank",rel:"noopener noreferrer"}},[e._v("PubMed")]),e._v(" "),a("p",{staticClass:"caption"},[e._v("Search Engine for Biomedical Literature")]),e._v(" "),a("div",{staticClass:"year-made"},[e._v("'18")])]),e._v(" "),a("div",{directives:[{name:"tilt",rawName:"v-tilt",value:{max:50,speed:500,perspective:1e3},expression:"{max: 50, speed: 500, perspective: 1000}"}],staticClass:"pitchgen card"},[a("a",{attrs:{href:"http://bit.ly/2RQIJda",target:"_blank",rel:"noopener noreferrer"}},[e._v("PitchGen")]),e._v(" "),a("p",{staticClass:"caption"},[e._v("Neural Network text generation of Startup Ideas")]),e._v(" "),a("div",{staticClass:"year-made"},[e._v("'19")])]),e._v(" "),a("div",{directives:[{name:"tilt",rawName:"v-tilt",value:{max:50,speed:500,perspective:1e3},expression:"{max: 50, speed: 500, perspective: 1000}"}],staticClass:"rides card"},[a("a",{attrs:{href:"http://bit.ly/2HBd8XU",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rides")]),e._v(" "),a("div",{staticClass:"year-made"},[e._v("'17")])]),e._v(" "),a("div",{directives:[{name:"tilt",rawName:"v-tilt",value:{max:50,speed:500,perspective:1e3},expression:"{max: 50, speed: 500, perspective: 1000}"}],staticClass:"graphicdesign card"},[a("a",{attrs:{href:"http://bit.ly/2IW4Ysq",target:"_blank",rel:"noopener noreferrer"}},[e._v("Design")]),e._v(" "),a("div",{staticClass:"year-made"},[e._v("'11-'12")])]),e._v(" "),a("div",{directives:[{name:"tilt",rawName:"v-tilt",value:{max:50,speed:500,perspective:1e3},expression:"{max: 50, speed: 500, perspective: 1000}"}],staticClass:"threed card"},[a("a",{attrs:{href:"http://bit.ly/2HBdeyK",target:"_blank",rel:"noopener noreferrer"}},[e._v("3D")]),e._v(" "),a("div",{staticClass:"year-made"},[e._v("'16")])]),e._v(" "),a("div",{directives:[{name:"tilt",rawName:"v-tilt",value:{max:50,speed:500,perspective:1e3},expression:"{max: 50, speed: 500, perspective: 1000}"}],staticClass:"processing card"},[a("a",{attrs:{href:"http://bit.ly/2HrWXyu",target:"_blank",rel:"noopener noreferrer"}},[e._v("Processing")]),e._v(" "),a("div",{staticClass:"year-made"},[e._v("'14-'15")])]),e._v(" "),a("div",{directives:[{name:"tilt",rawName:"v-tilt",value:{max:50,speed:500,perspective:1e3},expression:"{max: 50, speed: 500, perspective: 1000}"}],staticClass:"loginpage card"},[a("a",{attrs:{href:"http://bit.ly/2JM0hTq",target:"_blank",rel:"noopener noreferrer"}},[e._v("Xhibit")]),e._v(" "),a("div",{staticClass:"year-made"},[e._v("'17")])]),e._v(" "),a("div",{directives:[{name:"tilt",rawName:"v-tilt",value:{max:50,speed:500,perspective:1e3},expression:"{max: 50, speed: 500, perspective: 1000}"}],staticClass:"transit card"},[a("a",{attrs:{href:"http://bit.ly/2vh6pjf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Transit")]),e._v(" "),a("div",{staticClass:"year-made"},[e._v("'18")])])])])},staticRenderFns:[]};var b=a("VU/8")(_,g,!1,function(e){a("Qlud")},"data-v-1b031a77",null).exports,w={name:"ContactSection",data:function(){return{msg:"Contact Contact Contact",email:[]}},methods:{onSubmit:function(e){this.email.push(this.$refs.emailInput.value),console.log(e),this.$refs.emailInput.value=""}},components:{FontAwesomeIcon:d.a}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"contact"}},[a("h1",{staticClass:"header"},[e._v("Contact")]),e._v(" "),a("div",{staticClass:"grid"},[a("div",{staticClass:"information"},[a("div",{staticClass:"my-email"},[a("font-awesome-icon",{staticClass:"information-fai",attrs:{icon:["far","envelope-open"],size:"1x"}}),e._v(" "),a("p",{staticClass:"dropaline"},[e._v("Drop a line")]),e._v(" "),a("a",{attrs:{href:"mailto:akinhwan@gmail.com?subject=Your #1 Fan&body=Oh my gosh I can't believe I finally got a hold of you"}},[e._v("akinhwan@gmail.com")])],1),e._v(" "),a("div",{staticClass:"my-phone"},[a("font-awesome-icon",{staticClass:"information-fai",attrs:{icon:["fas","phone"],color:"white",size:"1x"}}),e._v(" "),e._m(0)],1)]),e._v(" "),e._m(1),e._v(" "),a("div",{staticClass:"footer"},[a("a",{attrs:{href:"https://github.com/akinhwan",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["fab","github"],size:"4x"}})],1),e._v(" "),a("a",{attrs:{href:"https://stackoverflow.com/users/6286223/akin-hwan?tab=profile",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["fab","stack-overflow"],size:"4x"}})],1),e._v(" "),a("a",{attrs:{href:"https://medium.com/@akinhwan",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["fab","medium-m"],size:"4x"}})],1),e._v(" "),a("a",{attrs:{href:"https://twitter.com/akinhwan",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["fab","twitter"],size:"4x"}})],1),e._v(" "),a("a",{attrs:{href:"https://www.linkedin.com/in/akinhwan/",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["fab","linkedin-in"],size:"4x"}})],1),e._v(" "),a("a",{attrs:{href:"https://soundcloud.com/akinhwan",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["fab","soundcloud"],size:"4x"}})],1),e._v(" "),a("a",{attrs:{href:"https://www.youtube.com/channel/UCduQGCaFUTOq1LMOP9zOUNA",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["fab","youtube"],size:"4x"}})],1),e._v(" "),a("a",{attrs:{href:"https://codepen.io/akinhwan/",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["fab","codepen"],size:"4x"}})],1)]),e._v(" "),e._m(2)]),e._v(" "),a("div",{staticClass:"copyright"},[a("font-awesome-icon",{staticClass:"fai",attrs:{icon:["far","copyright"],size:"1x"}}),e._v(" "),a("p",{staticClass:"copyright-text"},[e._v("2019 Andrew Inhwan Kim. All rights reserved.")])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("span",{staticClass:"sayhello"},[this._v("Say Hello")]),this._v(" "),t("a",{staticClass:"phonenumber",attrs:{href:"tel:+1-202-507-9205"}},[this._v("+1 (202) 507-9205")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"faq"},[t("p",[this._v("Q:What's your greatest strength/weakness?")]),this._v(" "),t("p",[this._v("Q:Where do you see yourself in ten years?")]),this._v(" "),t("p",[this._v("Q:How have you overcome a challenge?")]),this._v(" "),t("p",[this._v("Q:What are your hobbies?")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"subscription"},[t("h2",[this._v("Sign up for updates. No spam included.")]),this._v(" "),t("div",{staticClass:"form-right"},[t("form",{attrs:{action:"https://getform.io/f/9d0bba9d-b70b-41e8-a83a-b2d97b8fcc63",method:"POST"}},[t("input",{attrs:{type:"email",placeholder:"heyHEYhey@gmail.com",name:"email",id:"tlemail",required:""}}),this._v(" "),t("button",{attrs:{type:"submit",id:"tlbutton",value:"Subscribe"}},[this._v("Send")])])])])}]};var k=a("VU/8")(w,y,!1,function(e){a("N0o0")},"data-v-02fac7db",null).exports,C=a("CC66"),x=a.n(C),I={name:"App",data:function(){return{options:{navigation:!0,navigationPosition:"right",navigationTooltips:["main","about","work","contact"],showActiveTooltip:!0,anchors:["1","2","3","4"]}}},mounted:function(){x()()},components:{FullPage:n.default,Nav:s,Main:f,About:m,Work:b,Contact:k}},A={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("full-page",{ref:"fullpage",attrs:{options:this.options}},[t("Main",{staticClass:"section",attrs:{"data-sal":"fade"}}),this._v(" "),t("About",{staticClass:"section",attrs:{"data-sal":"fade"}}),this._v(" "),t("Work",{staticClass:"section",attrs:{"data-sal":"fade"}}),this._v(" "),t("Contact",{staticClass:"section",attrs:{"data-sal":"fade"}})],1)],1)},staticRenderFns:[]};var E=a("VU/8")(I,A,!1,function(e){a("urvE")},null,null).exports,F=a("QxPg"),P=(a("h17U"),a("KREn"),a("1P+R"),a("w2Zs"));r.a.use(l.a,{id:"UA-74378318-3"}),r.a.use(P.a),F.default.config.familyPrefix,r.a.config.productionTip=!1,new r.a({el:"#app",render:function(e){return e(E)}})},Qlud:function(e,t){},UVEX:function(e,t){},jsXF:function(e,t){},urvE:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.d7741d67c1e315861062.js.map