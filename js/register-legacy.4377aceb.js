(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"5c9c":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"fill-height":""}},[a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"10",sm:"8",md:"6"}},[a("sign-up-form",{on:{"sign-up-success":e.signUpSuccess}})],1)],1)],1)},n=[],r=(a("2aa5"),a("32f5"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.userLoginRules,label:e.$t("user.login"),counter:e.userLoginLenMax,autocomplete:"username",clearable:""},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}}),a("v-text-field",{attrs:{rules:e.userNameRules,label:e.$t("user.name"),counter:e.userNameLenMax,autocomplete:"nickname",clearable:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{rules:e.passwordRules,label:e.$t("password"),type:"password",autocomplete:"new-password",clearable:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{attrs:{rules:e.signUpCodeRules,label:e.$t("signUpCode"),autocomplete:"one-time-code",clearable:""},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}}),a("div",{staticClass:"d-flex justify-space-around flex-wrap"},[a("div",[a("v-btn",{attrs:{loading:0===e.state,color:"success"},on:{click:e.signUp}},[e._v(" "+e._s(e.$t("register"))+" "),a("v-icon",{attrs:{right:"",small:""}},[e._v("mdi-account-plus-outline")])],1)],1),a("div",[a("v-btn",{attrs:{replace:"",to:"login",color:"info",text:""}},[e._v(" "+e._s(e.$t("goToLoginWithExistingAccount"))+" "),a("v-icon",{attrs:{right:"",small:""}},[e._v("mdi-arrow-right")])],1)],1)])],1)}),l=[],o=(a("868d"),a("df26"),a("42c2")),c=a("caa0"),i=a("0613"),u=a("85ee"),d={data:function(){return{valid:!0,login:"",name:"",password:"",code:"",userNameRules:c["e"],userNameLenMax:u["g"],userLoginLenMax:u["d"],userLoginRules:c["d"],passwordRules:c["b"],signUpCodeRules:c["c"],state:1}},methods:{signUp:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.valid){t.next=3;break}return e.$alertInfo(e.$t("pleaseInputValid")),t.abrupt("return");case 3:return e.state=0,t.prev=4,t.next=7,i["a"].dispatch.user.signUp({login:e.login,password:e.password,name:e.name,code:e.code});case 7:e.state=1,e.$emit("sign-up-success"),t.next=16;break;case 11:return t.prev=11,t.t0=t["catch"](4),e.state=-1,t.next=16,e.$alertError(t.t0);case 16:case"end":return t.stop()}}),t,null,[[4,11]])})))()}}},p=d,m=a("2be6"),g=a("16aa"),v=a.n(g),f=a("7265"),b=a("e37c"),w=a("213b"),x=a("2370"),h=Object(m["a"])(p,r,l,!1,null,null,null),$=h.exports;v()(h,{VBtn:f["a"],VForm:b["a"],VIcon:w["a"],VTextField:x["a"]});var k={components:{SignUpForm:$},methods:{signUpSuccess:function(){this.$alertSuccess(this.$t("signUpSuccess")),this.$router.replace("me")}}},R=k,U=a("8a29"),_=a("39d5"),L=a("1bc2"),V=Object(m["a"])(R,s,n,!1,null,null,null);t["default"]=V.exports;v()(V,{VCol:U["a"],VContainer:_["a"],VRow:L["a"]})}}]);