(this["webpackJsonpreactnd-game-would-you-rather"]=this["webpackJsonpreactnd-game-would-you-rather"]||[]).push([[0],{35:function(e,t,n){},39:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(18),c=n.n(a),i=(n(35),n(4)),r=n(5),o=n(8),l=n(7),j=n(6),u=n(29),d=n(10),b=n(2),h={sarahedo:{id:"sarahedo",name:"Sarah Edo",job:"Web Designer",avatarURL:n.p+"static/media/Avatar1.f243453f.png",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",job:"Electrical Engineer",avatarURL:n.p+"static/media/Avatar2.cc0e1c8f.png",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",job:"Fashion Designer",avatarURL:n.p+"static/media/Avatar3.33c98990.png",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},O={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function p(e){return new Promise((function(t,n){var s=e.author,a=function(e){var t=e.optionOneText,n=e.optionTwoText,s=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:s,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){O=Object(b.a)(Object(b.a)({},O),{},Object(d.a)({},a.id,a)),h=Object(b.a)(Object(b.a)({},h),{},Object(d.a)({},s,Object(b.a)(Object(b.a)({},h[s]),{},{questions:h[s].questions.concat([a.id])}))),t(a)}),1e3)}))}function m(e){return function(e){var t=e.authedUser,n=e.qid,s=e.answer;return new Promise((function(e,a){setTimeout((function(){h=Object(b.a)(Object(b.a)({},h),{},Object(d.a)({},t,Object(b.a)(Object(b.a)({},h[t]),{},{answers:Object(b.a)(Object(b.a)({},h[t].answers),{},Object(d.a)({},n,s))}))),O=Object(b.a)(Object(b.a)({},O),{},Object(d.a)({},n,Object(b.a)(Object(b.a)({},O[n]),{},Object(d.a)({},s,Object(b.a)(Object(b.a)({},O[n][s]),{},{votes:O[n][s].votes.concat([t])}))))),e()}),500)}))}(e)}var v="RECEIVE_QUESTIONS",x="SAVE_QUESTION_ANSWER ",f="SAVE_QUESTION";function g(e){return function(t,n){var s,a=n().authedUser;return(s=Object(b.a)(Object(b.a)({},e),{},{author:a}),p(s)).then((function(e){return t(function(e){return{type:f,question:e}}(e))}))}}function N(e){return function(t){return m(e).then((function(){return t(function(e){var t=e.authedUser,n=e.qid,s=e.answer;return{type:x,authedUser:t,qid:n,answer:s}}(e))}))}}var w="RECEIVE_USERS";var y="SET_AUTHED_USER";function q(e){return{type:y,id:e}}var T=n(11),U=n(9),k=(n(39),n(0)),S=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={selectedUser:""},e.handleChange=function(t){e.setState({selectedUser:t.target.value})},e.handleSubmit=function(t){var n=e.props.location.state.path;t.preventDefault(),e.props.history.push(n),e.props.dispatch(q(e.state.selectedUser))},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(k.jsx)("div",{className:"signin",children:Object(k.jsxs)("div",{className:"signin-box",children:[Object(k.jsx)("div",{className:"site-logo",children:Object(k.jsx)("i",{className:"bx bx-equalizer icon"})}),Object(k.jsx)("div",{className:"site-title",children:Object(k.jsx)("h1",{children:"Would You Rather"})}),Object(k.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(k.jsx)("div",{className:"select",children:Object(k.jsxs)("select",{id:"standard-select",value:this.state.selectedUser,onChange:this.handleChange,children:[Object(k.jsx)("option",{hidden:!0,defaultValue:!0,children:"Select user..."}),this.props.users.map((function(e){return Object(k.jsxs)("option",{value:e.id,children:[" ",e.name]},e.id)}))]})}),Object(k.jsx)("button",{disabled:""===this.state.selectedUser,id:"signin-btn",className:"btn",children:" Sign in "})]})]})})}}]),n}(s.Component);var C=Object(U.g)(Object(j.b)((function(e){var t=e.users,n=e.authedUser;return{users:t?Object.values(t):[],authedUser:n}}))(S));n(43);function A(){return Object(k.jsxs)("div",{className:"not-found-page",children:[Object(k.jsx)("div",{className:"number",children:"404"}),Object(k.jsxs)("div",{className:"text",children:[Object(k.jsx)("span",{children:"Ooops..."}),Object(k.jsx)("br",{}),"page not found"]})]})}var E=n(30);var R=Object(j.b)((function(e){return{signin:null===e.authedUser}}))((function(e){var t=e.children,n=e.singin,s=Object(E.a)(e,["children","singin"]),a=s.path;return Object(k.jsx)(U.b,Object(b.a)(Object(b.a)({},s),{},{render:function(){return n?Object(k.jsx)(U.a,{to:{pathname:"/signin",state:{path:a}}}):t}}))})),z=(n(44),n(45),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleLogOut=function(){e.props.dispatch(q(null))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.user?this.props.user:"",t=e.name,n=e.avatarURL,s=e.job;return Object(k.jsx)("div",{className:"NavBar",children:Object(k.jsxs)("div",{className:"sidebar open",children:[Object(k.jsxs)("div",{className:"logo-details",children:[Object(k.jsx)("i",{className:"bx bx-equalizer icon"}),Object(k.jsx)("div",{className:"logo_name",children:"WYR"}),Object(k.jsx)("i",{className:"bx bx-menu-alt-right logo"})]}),Object(k.jsxs)("ul",{className:"nav-list",children:[Object(k.jsxs)("li",{children:[Object(k.jsxs)(T.b,{to:"/",exact:!0,children:[Object(k.jsx)("i",{className:"bx bx-grid-alt"}),Object(k.jsx)("span",{className:"links_name",children:"Home"})]}),Object(k.jsx)("span",{className:"tooltip",children:"Home"})]}),Object(k.jsxs)("li",{children:[Object(k.jsxs)(T.b,{to:"/add",exact:!0,activeClassName:"active",children:[Object(k.jsx)("i",{className:"bx bx-message-add"}),Object(k.jsx)("span",{className:"links_name",children:"New Question"})]}),Object(k.jsx)("span",{className:"tooltip",children:"New"})]}),Object(k.jsxs)("li",{children:[Object(k.jsxs)(T.b,{to:"/leaderboard",exact:!0,activeClassName:"active",children:[Object(k.jsx)("i",{className:"bx bx-group"}),Object(k.jsx)("span",{className:"links_name",children:"Leader Boards"})]}),Object(k.jsx)("span",{className:"tooltip",children:"Boards"})]}),Object(k.jsxs)("li",{className:"small-screen-profile",children:[Object(k.jsx)("div",{className:"authedUser_name",children:t}),Object(k.jsx)("img",{src:n,alt:"profileImg"})]}),Object(k.jsxs)("li",{className:"profile",children:[Object(k.jsxs)("div",{className:"profile-details",children:[Object(k.jsx)("img",{src:n,alt:"profileImg"}),Object(k.jsxs)("div",{className:"name_job",children:[Object(k.jsx)("div",{className:"authedUser_name",children:t}),Object(k.jsx)("div",{className:"job",children:s})]})]}),Object(k.jsx)("div",{onClick:this.handleLogOut,children:Object(k.jsx)("i",{className:"bx bx-log-out",id:"log_out"})})]})]})]})})}}]),n}(s.Component));var L=Object(j.b)((function(e){var t=e.authedUser,n=e.users;return{user:n?n[t]:{}}}))(z),_=n(27);n(46);function I(e,t){return{id:e.id,optionOne:e.optionOne,optionTwo:e.optionTwo,name:t.name,avatarURL:t.avatarURL}}var Q=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleSubmit=function(){var t=e.props.id;e.props.history.push("/questions/".concat(t))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.question,t=e.avatarURL,n=e.name;return Object(k.jsxs)("div",{className:"box poll-review",children:[Object(k.jsx)("div",{className:"profile-img",children:Object(k.jsx)("img",{src:t,alt:"profileImg"})}),Object(k.jsxs)("div",{className:"content",children:[Object(k.jsxs)("div",{className:"title",children:[n," Asks:"]}),Object(k.jsx)("div",{className:"question",children:"Would You Rather?"}),Object(k.jsx)("h2",{children:"...."})]}),Object(k.jsx)("button",{onClick:this.handleSubmit,id:"vote-button",className:"btn",children:"See The Question"})]})}}]),n}(s.Component);var D=Object(U.g)(Object(j.b)((function(e,t){var n=e.questions,s=e.users,a=n[t.id];return{question:I(a,s[a.author])}}))(Q)),H=(n(47),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.question,t=e.avatarURL,n=e.name,s=e.optionOne,a=e.optionTwo,c=e.id,i=this.props,r=i.answer,o=i.op1,l=i.op2,j=i.votesNumber,u=Math.round(o/(o+l)*100),d=Math.round(l/(o+l)*100);return Object(k.jsx)(T.b,{to:"/questions/".concat(c),exact:!0,className:"poll-result-links",children:Object(k.jsxs)("div",{className:"box",children:[Object(k.jsx)("div",{className:"profile-img",children:Object(k.jsx)("img",{src:t,alt:"profileImg"})}),Object(k.jsxs)("div",{className:"content",children:[Object(k.jsxs)("div",{className:"title",children:["Asked by ",n,":"]}),Object(k.jsxs)("div",{className:"choices-container",children:[Object(k.jsxs)("div",{className:"choice ".concat(u>d?"winner":""),children:[Object(k.jsxs)("h3",{children:[" Would you rather be ",s.text," "]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"progress",children:Object(k.jsx)("span",{className:"progress-bar",style:{width:"".concat(u,"%")}})}),Object(k.jsxs)("div",{className:"percentage",children:[" ",u,"% "]})]}),"optionOne"===r?Object(k.jsx)("div",{className:"user-vote",children:Object(k.jsx)("span",{children:"Your Vote"})}):"",Object(k.jsxs)("span",{children:[o," out of ",j," votes"]})]}),Object(k.jsxs)("div",{className:"choice ".concat(u<d?"winner":""),children:[Object(k.jsxs)("h3",{children:[" Would you rather be ",a.text," "]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"progress",children:Object(k.jsx)("span",{className:"progress-bar",style:{width:"".concat(d,"%")}})}),Object(k.jsxs)("div",{className:"percentage",children:[" ",d,"% "]})]}),"optionTwo"===r?Object(k.jsx)("div",{className:"user-vote",children:Object(k.jsx)("span",{children:"Your Vote"})}):"",Object(k.jsxs)("span",{children:[l," out of ",j," votes"]})]}),Object(k.jsxs)("span",{className:"votes",children:[" Votes Number: ",j," "]})]})]})]})})}}]),n}(s.Component));var W=Object(j.b)((function(e,t){var n,s=e.questions,a=e.authedUser,c=e.users,i=s[t.id],r=c[i.author];i.optionOne.votes.includes(a)?n="optionOne":i.optionTwo.votes.includes(a)&&(n="optionTwo");var o=i.optionOne.votes.length,l=i.optionTwo.votes.length,j=o+l;return{question:I(i,r),authedUser:a,answer:n,op1:o,op2:l,votesNumber:j}}))(H),V=(n(48),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={selected:"Unanswered"},e.handleToggle=function(t){e.setState({selected:t})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selected;return Object(k.jsxs)("section",{className:"section",children:[Object(k.jsx)("div",{className:"text",children:"Home"}),Object(k.jsxs)("div",{className:"home-pool-cards",children:[Object(k.jsxs)("ul",{className:"cards-titles",children:[Object(k.jsx)("li",{className:"title",onClick:function(){return e.handleToggle("Unanswered")},children:Object(k.jsx)("span",{className:"Unanswered"===t?"selected":"",children:" Unanswered Questions "})}),Object(k.jsx)("li",{className:"title",onClick:function(){return e.handleToggle("Answered")},children:Object(k.jsx)("span",{className:"Answered"===t?"selected":"",children:" Answered Questions "})})]}),Object(k.jsx)("div",{className:"poll-dashboard",children:"Unanswered"===t?this.props.unansweredQuestions.map((function(e){return Object(k.jsx)(D,{id:e},e)})):this.props.answeredQuestions.map((function(e){return Object(k.jsx)(W,{id:e},e)}))})]}),Object(k.jsx)("div",{})]})}}]),n}(s.Component));var P=Object(j.b)((function(e){var t=e.questions,n=e.authedUser,s=[],a=[],c=[],i=[];for(var r in t){[].concat(Object(_.a)(t[r].optionOne.votes),Object(_.a)(t[r].optionTwo.votes)).includes(n)?(s.push(t[r]),c.push(t[r])):(a.push(t[r]),i.push(t[r]))}return s=s.sort((function(e,t){return t.timestamp-e.timestamp})),a=a.sort((function(e,t){return t.timestamp-e.timestamp})),{answeredQuestions:s.map((function(e){return e.id})),unansweredQuestions:a.map((function(e){return e.id}))}}))(V),M=(n(49),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={optionOne:"",optionTwo:"",toHome:!1},e.handleChange=function(t,n){e.setState((function(e){return Object(d.a)({},t,n.target.value)}))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,s=n.optionOne,a=n.optionTwo;e.props.dispatch(g({optionOneText:s,optionTwoText:a})),e.setState((function(){return{optionOne:"",optionTwo:""}})),e.setState((function(){return{toHome:!0}}))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this;return this.state.toHome?Object(k.jsx)(U.a,{to:"/"}):Object(k.jsxs)("section",{className:"section",children:[Object(k.jsx)("div",{className:"text",children:"Create New Question"}),Object(k.jsxs)("div",{className:"create-question-countener",children:[Object(k.jsx)("h2",{children:" Would you rather ..."}),Object(k.jsx)("div",{className:"create-question-form",children:Object(k.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(k.jsx)("input",{type:"text",name:"OptionOne",value:this.state.optionOne,onChange:function(t){return e.handleChange("optionOne",t)},placeholder:"Enter Option Two Text Here"}),Object(k.jsx)("h3",{children:"OR"}),Object(k.jsx)("input",{type:"text",name:"Option2",value:this.state.optionTwo,onChange:function(t){return e.handleChange("optionTwo",t)},placeholder:"Enter Option Two Text Here"}),Object(k.jsx)("button",{id:"create-question-form-btn",className:"btn",children:" Submit "})]})})]})]})}}]),n}(s.Component)),Y=Object(j.b)()(M),B=(n(50),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.info,t=e.name,n=e.answersNumber,s=e.questionNumber,a=e.score,c=e.avatarURL;return Object(k.jsxs)("div",{className:"box",id:"score-box",children:[Object(k.jsx)("div",{className:"profile-img",children:Object(k.jsx)("img",{src:c,alt:"profileImg"})}),Object(k.jsx)("h1",{className:"name",children:t}),Object(k.jsxs)("div",{className:"score-details-container",children:[Object(k.jsxs)("div",{className:"score-details",children:["Answered Questions: ",Object(k.jsxs)("span",{children:[" ",n," "]})]}),Object(k.jsxs)("div",{className:"score-details",children:["Created Questions: ",Object(k.jsxs)("span",{children:[" ",s," "]})]})]}),Object(k.jsx)("div",{className:"score",children:Object(k.jsxs)("span",{children:[" ",a," "]})})]})}}]),n}(s.Component)),J=(n(51),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.usersArray;return Object(k.jsxs)("section",{className:"section",children:[Object(k.jsx)("div",{className:"text",children:"Leader Board"}),Object(k.jsx)("div",{className:"leader-board",children:e.map((function(e){return Object(k.jsx)(B,{info:e},e.id)}))})]})}}]),n}(s.Component));var $=Object(j.b)((function(e){var t=e.users,n=[];for(var s in t){var a=t[s].name,c=t[s].avatarURL,i=Object.keys(t[s].answers).length,r=t[s].questions.length;n.push({id:s,name:a,avatarURL:c,answersNumber:i,questionNumber:r,score:i+r})}return n.sort((function(e,t){return e.score>t.score?-1:e.score<t.score?1:0})),{usersArray:n}}))(J),F=(n(52),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={chosenOption:""},e.handleClick=function(t){e.setState((function(){return{chosenOption:t}}))},e.handleSubmit=function(){var t=e.props,n=t.dispatch,s=t.id;n(N({authedUser:t.authedUser,qid:s,answer:e.state.chosenOption}))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state.chosenOption,n=this.props.question,s=n.avatarURL,a=n.name,c=n.optionOne,i=n.optionTwo;return Object(k.jsxs)("div",{id:"poll-review",className:"box poll-review",children:[Object(k.jsx)("div",{className:"profile-img",children:Object(k.jsx)("img",{src:s,alt:"profileImg"})}),Object(k.jsxs)("div",{className:"content",children:[Object(k.jsxs)("div",{className:"title",children:[a," Asks:"]}),Object(k.jsx)("div",{className:"question",children:"Would You Rather?"}),Object(k.jsxs)("ul",{className:"Options",children:[Object(k.jsx)("li",{className:"optionOne"===t?"selected":"",onClick:function(){return e.handleClick("optionOne")},children:c.text}),Object(k.jsx)("li",{className:"optionTwo"===t?"selected":"",onClick:function(){return e.handleClick("optionTwo")},children:Object(k.jsx)("span",{children:i.text})})]})]}),Object(k.jsx)("button",{disabled:""===t,onClick:this.handleSubmit,id:"vote-button",className:"btn",children:"Submit"})]})}}]),n}(s.Component));var G=Object(j.b)((function(e,t){var n=e.questions,s=e.authedUser,a=e.users,c=n[t.id];return{question:I(c,a[c.author]),authedUser:s}}))(F),K=(n(53),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return":id"===this.props.id?Object(k.jsx)(U.a,{to:"/*"}):Object(k.jsx)("section",{className:"section",children:Object(k.jsx)("div",{className:"Poll-Page",children:this.props.answered?Object(k.jsx)(W,{id:this.props.id}):Object(k.jsx)(G,{id:this.props.id})})})}}]),n}(s.Component));var X=Object(j.b)((function(e,t){var n=e.authedUser,s=e.users,a=Object.assign({},t).match.params.id;return{answered:!!s[n].answers[a],id:a}}))(K),Z=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(L,{}),Object(k.jsx)(U.b,{path:"/",exact:!0,singin:this.props.signin,component:P}),Object(k.jsx)(U.b,{path:"/add",singin:this.props.signin,component:Y}),Object(k.jsx)(U.b,{path:"/leaderboard",singin:this.props.signin,component:$}),Object(k.jsx)(U.b,{path:"/questions/:id",singin:this.props.signin,component:X})]})}}]),n}(s.Component),ee=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.handleInitialData()}},{key:"render",value:function(){return Object(k.jsx)(T.a,{children:Object(k.jsx)("div",{className:"App",children:Object(k.jsxs)(U.d,{children:[Object(k.jsx)(U.b,{path:"/signin",component:C}),Object(k.jsxs)(R,{path:"/",exact:!0,singin:this.props.signin,children:[" ",Object(k.jsx)(Z,{})," "]}),Object(k.jsxs)(R,{path:"/add",exact:!0,singin:this.props.signin,children:[" ",Object(k.jsx)(Z,{})," "]}),Object(k.jsxs)(R,{path:"/leaderboard",exact:!0,singin:this.props.signin,children:[" ",Object(k.jsx)(Z,{})," "]}),Object(k.jsxs)(R,{path:"/questions/:id",exact:!0,singin:this.props.signin,children:[" ",Object(k.jsx)(Z,{})," "]}),Object(k.jsx)(R,{path:"*",exact:!0,singin:this.props.signin,children:Object(k.jsx)(A,{})})]})})})}}]),n}(s.Component);var te=Object(j.b)((function(e){return{signin:null===e.authedUser}}),{handleInitialData:function(){return function(e){return Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(b.a)({},h))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(b.a)({},O))}),1e3)}))]).then((function(e){var t=Object(u.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var n=t.users,s=t.questions;e(function(e){return{type:w,users:e}}(n)),e(function(e){return{type:v,questions:e}}(s)),e(q(null))}))}}})(ee),ne=n(17);var se=Object(ne.b)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return t.id;default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(b.a)(Object(b.a)({},e),t.questions);case x:var n=t.authedUser,s=t.qid,a=t.answer;return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},s,Object(b.a)(Object(b.a)({},e[s]),{},Object(d.a)({},a,Object(b.a)(Object(b.a)({},e[s][a]),{},{votes:e[s][a].votes.concat([n])})))));case f:return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},t.question.id,t.question));default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(b.a)(Object(b.a)({},e),t.users);case x:var n=t.answer,s=t.authedUser,a=t.qid;return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},s,Object(b.a)(Object(b.a)({},e[s]),{},{answers:Object(b.a)(Object(b.a)({},e[s].answers),{},Object(d.a)({},a,n))})));case f:var c=t.question,i=c.author,r=c.id;return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},i,Object(b.a)(Object(b.a)({},e[i]),{},{questions:e[i].questions.concat([r])})));default:return e}}}),ae=n(28),ce=function(e){return function(t){return function(n){console.group(n.type),console.log("The action: ",n);var s=t(n);return console.log("The new State is ",e.getState()),console.groupEnd(),s}}},ie=Object(ne.a)(ae.a,ce),re=Object(ne.c)(se,ie);c.a.render(Object(k.jsx)(j.a,{store:re,children:Object(k.jsx)(te,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.3d962d38.chunk.js.map