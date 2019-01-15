webpackJsonp([1],{NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[t("div",{staticClass:"nav-wrapper navtop"},[t("div",{staticClass:"container"},[t("img",{staticClass:"icon-top",attrs:{src:"https://pngimage.net/wp-content/uploads/2018/06/gudetama-png-5.png"}}),this._v(" "),t("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("Gudetama Paper Company")]),this._v(" "),t("router-link",{staticClass:"login-link",attrs:{to:"/login"}},[this._v("Login")]),this._v(" "),t("router-link",{staticClass:"about-link",attrs:{to:"/about"}},[this._v("About Us")])],1)])])},staticRenderFns:[]},n={name:"App",components:{Navbar:i("VU/8")(null,s,!1,null,null,null).exports}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]},l=i("VU/8")(n,o,!1,null,null,null).exports,r=i("/ocq"),u=i("kxiW"),p=i.n(u),c=(i("881v"),p.a.initializeApp({apiKey:"AIzaSyBLBxDRY1UVyY8TjPgGkPfuK_1pbXZtnhM",authDomain:"fir-vue-f6836.firebaseapp.com",databaseURL:"https://fir-vue-f6836.firebaseio.com",projectId:"fir-vue-f6836",storageBucket:"fir-vue-f6836.appspot.com",messagingSenderId:"322748166422"}).firestore()),d={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;c.collection("employees").orderBy("dept").get().then(function(t){t.forEach(function(t){var i={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(i)})})},methods:{logout:function(){var e=this;p.a.auth().signOut().then(function(){e.$router.replace("login")})}}},m={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"dashboard"}},[i("div",{staticClass:"chip site-desc"},[e._v('\n        Site Description: This site is built on VueJS 2 and Firestore for the database management. This sample application allows for\n        CRUD Functionalities of "employees".\n    ')]),e._v(" "),i("ul",{staticClass:"collection with-header emp-top"},[e._m(0),e._v(" "),e._l(e.employees,function(t){return i("li",{key:t.id,staticClass:"collection-item opaque-bg"},[i("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v("\n            "+e._s(t.employee_id)+":"+e._s(t.name)+"\n            \n            "),i("router-link",{staticClass:"secondary-content view-icon",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[i("i",{staticClass:"fa fa-eye"}),e._v(" View\n            ")])],1)})],2),e._v(" "),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large bg-icon",attrs:{to:"/new"}},[i("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header opaque-bg"},[t("h4",{staticStyle:{margin:"5px"}},[this._v("Employee List")])])}]},v=i("VU/8")(d,m,!1,null,null,null).exports,_={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmployee:function(){var e=this;c.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(t){e.$router.push("/")}).catch(error=console.log(err))}}},f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"new-employee"}},[i("h3",[e._v("Add New Employee")]),e._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),i("label",[e._v("Employee ID Number")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),i("label",[e._v("Employee Name")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),i("label",[e._v("Employee Department")])])]),e._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),i("label",[e._v("Employee Position")])])]),e._v(" "),i("div",{staticClass:"view-options"},[i("button",{staticClass:"btn btn-large bg-icon",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),i("router-link",{staticClass:"btn btn-large grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])])},staticRenderFns:[]},g=i("VU/8")(_,f,!1,null,null,null).exports,h={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,i){c.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){i(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},deleteEmployee:function(){var e=this;confirm("Are you sure you want to delete this employee?")&&c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},y={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"view-employee"}},[i("ul",{staticClass:"collection with-header"},[i("li",{staticClass:"collection-header opaque-bg"},[i("h4",[e._v("\n                "+e._s(e.name)+"\n            ")])]),e._v(" "),i("li",{staticClass:"collection-item opaque-bg"},[e._v("\n            Employee ID#: "+e._s(e.employee_id)+"\n        ")]),e._v(" "),i("li",{staticClass:"collection-item opaque-bg"},[e._v("\n            Employee Department: "+e._s(e.dept)+"\n        ")]),e._v(" "),i("li",{staticClass:"collection-item opaque-bg"},[e._v("\n            Employee Position: "+e._s(e.position)+"\n        ")])]),e._v(" "),i("div",{staticClass:"view-options"},[i("button",{staticClass:"btn btn-large red",on:{click:e.deleteEmployee}},[e._v("Delete")]),e._v(" "),i("router-link",{staticClass:"btn btn-large grey",attrs:{to:"/"}},[e._v("Back")])],1),e._v(" "),i("div",{staticClass:"fixed-action-btn"},[i("router-link",{staticClass:"btn-floating btn-large bg-icon",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[i("i",{staticClass:"fa fa-pencil"})])],1)])},staticRenderFns:[]},b=i("VU/8")(h,y,!1,null,null,null).exports,w={name:"edit-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,i){c.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){i(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t.data().dept,e.position=t.data().position})})},updateEmployee:function(){var e=this;c.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept,position:e.position}).then(function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})})})})}}},C={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"edit-employee"}},[i("h3",[e._v("Edit Employee")]),e._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[i("div",{staticClass:"row"},[i("p",{staticClass:"col s12",staticStyle:{margin:"0px"}},[e._v("Employee ID")]),e._v(" "),i("div",{staticClass:"input-field col s12",staticStyle:{margin:"0px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("p",{staticClass:"col s12 edit-field",staticStyle:{margin:"0px"}},[e._v("Employee Name")]),e._v(" "),i("div",{staticClass:"input-field col s12",staticStyle:{margin:"0px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("p",{staticClass:"col s12 edit-field",staticStyle:{margin:"0px"}},[e._v("Employee Department")]),e._v(" "),i("div",{staticClass:"input-field col s12",staticStyle:{margin:"0px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"row"},[i("p",{staticClass:"col s12 edit-field",staticStyle:{margin:"0px"}},[e._v("Employee Position")]),e._v(" "),i("div",{staticClass:"input-field col s12",staticStyle:{margin:"0px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),e._v(" "),i("div",{staticClass:"view-options"},[i("button",{staticClass:"btn btn-large bg-icon",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),i("router-link",{staticClass:"btn btn-large grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])])},staticRenderFns:[]},x=i("VU/8")(w,C,!1,null,null,null).exports,q={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"about"}},[t("div",{staticClass:"row opaque-bg y-padding"},[t("h1",[this._v("Welcome to this page!")]),this._v(" "),t("p",{staticClass:"y-padding justify-text"},[this._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")]),this._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:"https://3.bp.blogspot.com/-6Y1Z0zcEg4I/WDZHfw5pcUI/AAAAAAALaPI/QXlGiC14ZV4vIV4stP_cZQ-WrFm3LUwFgCLcB/s1600/AS002060_00.gif"}})]),this._v(" "),t("p",{staticClass:"y-padding justify-text"},[this._v("This is a demo website showcasing basic CRUD functionalities for VueJS with Firebase and materialized UI. The project is deployed\n        using Github Pages. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, \n        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. \n        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. \n        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore \n        magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? \n        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n        ")])])])}]},E=i("VU/8")({name:"about",data:function(){return{}}},q,!1,null,null,null).exports,P={name:"register-user",data:function(){return{user_name:null,email:null,password:null}},methods:{registerUser:function(){var e=this;p.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(t){e.$router.replace("/login")}).catch(function(e){alert(e.message)})}}},N={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"small-dialog",attrs:{id:"register-user"}},[i("ul",{staticClass:"collection with-header dialog-contents"},[i("li",{staticClass:"collection-header opaque-bg"},[i("h4",[e._v("Register User")]),e._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.registerUser(t)}}},[i("div",{staticClass:"row no-margin"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.user_name,expression:"user_name"}],attrs:{type:"text",required:""},domProps:{value:e.user_name},on:{input:function(t){t.target.composing||(e.user_name=t.target.value)}}}),e._v(" "),i("label",[e._v("Full Name")])])]),e._v(" "),i("div",{staticClass:"row no-margin"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),i("label",[e._v("E-mail Address")])])]),e._v(" "),i("div",{staticClass:"row no-margin"},[i("div",{staticClass:"input-field col s12"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),i("label",[e._v("Password")])])]),e._v(" "),i("button",{staticClass:"btn btn-large bg-icon",attrs:{type:"submit"}},[e._v("Register")]),e._v(" "),i("br"),i("small",[i("router-link",{staticClass:"view-icon",attrs:{to:"/login"}},[e._v("\n                        Already have an account? Login\n                    ")])],1)])])])])])},staticRenderFns:[]},U=i("VU/8")(P,N,!1,null,null,null).exports,$={name:"login",data:function(){return{email:null,password:null}},methods:{login:function(){var e=this;p.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){alert("Login Successful"),e.$router.replace("/")}).catch(function(e){alert("Invalid Username/Password")})}}},D={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"small-dialog",attrs:{id:"login"}},[i("ul",{staticClass:"collection with-header dialog-contents"},[i("li",{staticClass:"collection-header opaque-bg"},[i("h4",[e._v("Login")]),e._v(" "),i("div",{staticClass:"row"},[i("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"input",attrs:{type:"text",placeholder:"Email address",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),i("br"),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),i("br"),i("br"),e._v(" "),i("button",{staticClass:"btn btn-large bg-icon",on:{click:e.login}},[e._v("Login")]),e._v(" "),i("br"),i("small",[i("router-link",{staticClass:"view-icon",attrs:{to:"/register"}},[e._v("\n                        New Here? Create an account\n                    ")])],1)])])])])])},staticRenderFns:[]},k=i("VU/8")($,D,!1,null,null,null).exports;a.a.use(r.a);var A=new r.a({routes:[{path:"/",name:"dashboard",component:v},{path:"/register",name:"register-user",component:U},{path:"/login",name:"login",component:k},{path:"/about",name:"about",component:E},{path:"/new",name:"new-employee",component:g},{path:"/:employee_id",name:"view-employee",component:b},{path:"/edit/:employee_id",name:"edit-employee",component:x}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:A,components:{App:l},template:"<App/>"}),i("x9ll")},x9ll:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.843200c4f65c6e77996b.js.map