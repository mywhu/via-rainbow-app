(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"05d9":function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return o})),s.d(e,"d",(function(){return l}));var i=s("8467"),r=s("e479");const a=Object(r["g"])("v-card__actions"),n=Object(r["g"])("v-card__subtitle"),o=Object(r["g"])("v-card__text"),l=Object(r["g"])("v-card__title");i["a"]},"18b6":function(t,e,s){},"26d31":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",[s("v-col",[s("app-settings")],1),s("v-col",[s("version-settings")],1)],1)],1)},r=[],a=s("9869"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("settings-groups",{attrs:{groups:t.groups,title:t.$t("appSettings")}})},o=[],l=(s("9531"),s("918c"),s("0613")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",[s("v-card-title",{attrs:{"primary-title":""}},[s("v-spacer"),t._v(" "+t._s(t.title)+" ")],1),s("v-list",{attrs:{"two-line":"",subheader:""}},[s("v-slide-y-transition",{attrs:{group:"","leave-absolute":""}},[t._l(t.groups,(function(e){return[s("v-divider",{key:e.key+"--divider",attrs:{inset:""}}),e.name?s("v-subheader",{key:e.key+"--subheader"},[t._v(t._s(e.name))]):t._e(),t._l(e.items,(function(i){return[i.subitems?s("v-list-group",{key:e.key+"--subitems--"+i.key,attrs:{color:i.iconColor},scopedSlots:t._u([{key:"activator",fn:function(){return[s("item-icon",{attrs:{item:i}}),s("item-title",{attrs:{item:i}})]},proxy:!0}],null,!0)},t._l(i.subitems,(function(t){return s("setting-item",{key:i.key+"--subitem--"+t.key,attrs:{item:t}})})),1):s("setting-item",{key:e.key+"--item--"+i.key,attrs:{item:i}})]}))]}))],2)],1)],1)},d=[],u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-list-item-avatar",[t.item.loading?s("v-progress-circular",t._b({},"v-progress-circular","object"===typeof t.item.loading?t.item.loading:{},!1)):s("v-icon",{attrs:{color:t.item.iconColor}},[t._v(t._s(t.item.icon))])],1)},h=[],m={props:{item:Object}},g=m,f=s("2be6"),p=s("16aa"),b=s.n(p),v=s("213b"),y=s("e8a3"),_=s("b354"),k=Object(f["a"])(g,u,h,!1,null,null,null),S=k.exports;b()(k,{VIcon:v["a"],VListItemAvatar:y["a"],VProgressCircular:_["a"]});var C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-list-item-content",[s("v-list-item-title",[t._v(t._s(t.item.title))]),t.item.subtitle?s("v-list-item-subtitle",[t._v(t._s(t.item.subtitle))]):t._e()],1)},O=[],j={props:{item:Object}},$=j,w=s("d963"),B=Object(f["a"])($,C,O,!1,null,null,null),V=B.exports;b()(B,{VListItemContent:w["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"]});var x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-list-item",t._g({},t.item.click?{click:t.item.click}:{}),[s("item-icon",{attrs:{item:t.item}}),s("item-title",{attrs:{item:t.item}})],1)},E=[],z={components:{ItemIcon:S,ItemTitle:V},props:{item:Object}},L=z,I=s("ecef"),D=Object(f["a"])(L,x,E,!1,null,null,null),P=D.exports;b()(D,{VListItem:I["a"]});var T=a["a"].extend({components:{ItemIcon:S,ItemTitle:V,SettingItem:P},props:{groups:Array,title:String}}),M=T,N=s("8467"),R=s("05d9"),F=s("29d0"),A=s("a5fe"),q=s("5e9b"),G=s("91a2"),H=s("7b27"),W=s("0b38"),J=(s("5e8b"),s("4498")),U=s("5d20"),X=Object(U["a"])(J["a"]).extend({name:"v-subheader",props:{inset:Boolean},render(t){return t("div",{staticClass:"v-subheader",class:Object(W["a"])({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}}),Y=Object(f["a"])(M,c,d,!1,null,null,null),K=Y.exports;b()(Y,{VCard:N["a"],VCardTitle:R["d"],VDivider:F["a"],VList:A["a"],VListGroup:q["a"],VSlideYTransition:G["d"],VSpacer:H["a"],VSubheader:X});var Q={components:{SettingsGroups:K},computed:{isDark(){return l["default"].getters.theme.isDark},followSystem(){return"system"===l["default"].state.theme.mode},groups(){return[{key:"style",name:this.$t("style"),items:[{key:"info",icon:"mdi-palette-swatch",iconColor:"accent",title:this.$t("theme"),subtitle:this.$t("themeMode.currentIs",{theme:this.$t("themeMode.defaultTheme"),mode:this.$t("themeMode."+(this.isDark?"dark":"light"))})},{key:"follow-system",title:this.followSystem?this.$t("themeMode.followSystem.yes"):this.$t("themeMode.followSystem.enable"),subtitle:this.followSystem?this.$t("themeMode.followSystem.clickToDisable"):void 0,icon:"mdi-theme-light-dark",iconColor:this.isDark?"yellow":"blue-grey",click:this.switchFollowSystem},...this.followSystem?[]:[{key:"light-or-dark",title:this.$t("themeMode.switchToMode",{mode:this.$t("themeMode."+(this.isDark?"light":"dark"))}),icon:this.isDark?"mdi-brightness-4":"mdi-brightness-7",iconColor:this.isDark?"yellow":"blue-grey",click:this.switchLightDark}]]}]}},methods:{switchLightDark(){this.followSystem||l["default"].commit.theme.setMode(this.isDark?"light":"dark")},switchFollowSystem(){l["default"].commit.theme.setMode(this.followSystem?this.isDark?"dark":"light":"system")}}},Z=Q,tt=Object(f["a"])(Z,n,o,!1,null,null,null),et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("settings-groups",{attrs:{groups:t.groups,title:t.$t("versionUpdate")}})},it=[];function rt(t){return"string"===typeof t?{title:t}:{title:t.text,subtitle:t.tip}}var at={components:{SettingsGroups:K},computed:{groups(){const t=l["default"].state.view.version.status,e="offline"===t,s="downloading"===t,i="not-ready"===t,r="ready"===t,a="need-refresh"===t;return[{key:"version",name:this.$t("version"),items:[Object(W["a"])(Object(W["a"])({key:"info",loading:(s||i)&&{indeterminate:!0,color:s?"info":"grey lighten-2"}},r?{icon:"mdi-check-decagram",iconColor:"success lighten-2"}:a?{icon:"mdi-update",iconColor:"success"}:e?{icon:"mdi-signal-off",iconColor:"grey lighten-2"}:void 0),rt(this.$t("versionStatus."+t)))]},{key:"reload",items:[{key:"advance",title:this.$t("advancedSettings"),icon:"mdi-cogs",subitems:[{key:"force-reload",title:this.$t("forceReload.text"),subtitle:this.$t("forceReload.tip"),icon:"mdi-reload-alert",iconColor:"error",click:this.forceReload}]}]}]}},methods:{forceReload(){window.location.reload(!0)}}},nt=at,ot=Object(f["a"])(nt,st,it,!1,null,null,null),lt=ot.exports,ct=a["a"].extend({components:{AppSettings:et,VersionSettings:lt}}),dt=ct,ut=s("8a29"),ht=s("39d5"),mt=s("1bc2"),gt=Object(f["a"])(dt,i,r,!1,null,null,null);e["default"]=gt.exports;b()(gt,{VCol:ut["a"],VContainer:ht["a"],VRow:mt["a"]})},"39d5":function(t,e,s){"use strict";s("defa"),s("e439"),s("4a81"),s("b55a");var i=s("9869");function r(t){return i["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:i,children:r}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:a}=i;if(a){i.attrs={};const t=Object.keys(a).filter(t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(i.staticClass+=" "+t.join(" "))}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,r)}})}var a=s("0011");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:i}){let r;const{attrs:n}=s;return n&&(s.attrs={},r=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,Object(a["a"])(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),i)}})},"55e3":function(t,e,s){"use strict";var i=s("9869"),r=s("0b38"),a=(s("5d04"),s("91a2")),n=s("bb03"),o=s("407a"),l=s("0319"),c=s("4498"),d=s("e479"),u=s("5d20");const h=Object(u["a"])(n["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),l["a"],c["a"]);var m=h.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["f"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["f"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.$vuetify.rtl?"right":"left"]:Object(d["f"])(this.normalizedValue,"%"),width:Object(d["f"])(this.normalizedBuffer-this.normalizedValue,"%")}},classes(){return Object(r["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition(){return this.indeterminate?a["b"]:a["c"]},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["f"])(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=Object(d["k"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["f"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),g=m;e["a"]=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(g,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"5d04":function(t,e,s){},"5e8b":function(t,e,s){},8467:function(t,e,s){"use strict";s("ba53"),s("babc");var i=s("0b38"),r=(s("18b6"),s("07a5")),a=s("55e3"),n=s("5e7e"),o=s("5d20");e["a"]=Object(o["a"])(a["a"],n["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return Object(i["a"])(Object(i["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},r["a"].options.computed.classes.call(this))},styles(){const t=Object(i["a"])({},r["a"].options.computed.styles.call(this));return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=a["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},"8a29":function(t,e,s){"use strict";s("9531"),s("32f5"),s("defa"),s("918c");var i=s("0b38"),r=(s("4a81"),s("9869")),a=s("0011"),n=s("e479");const o=["sm","md","lg","xl"],l=(()=>o.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),c=(()=>o.reduce((t,e)=>(t["offset"+Object(n["t"])(e)]={type:[String,Number],default:null},t),{}))(),d=(()=>o.reduce((t,e)=>(t["order"+Object(n["t"])(e)]={type:[String,Number],default:null},t),{}))(),u={col:Object.keys(l),offset:Object.keys(c),order:Object.keys(d)};function h(t,e,s){let i=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");i+="-"+s}return"col"!==t||""!==s&&!0!==s?(i+="-"+s,i.toLowerCase()):i.toLowerCase()}}const m=new Map;e["a"]=r["a"].extend({name:"v-col",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},c),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}}),render(t,{props:e,data:s,children:i,parent:r}){let n="";for(const a in e)n+=String(e[a]);let o=m.get(n);if(!o){let t;for(t in o=[],u)u[t].forEach(s=>{const i=e[s],r=h(t,s,i);r&&o.push(r)});const s=o.some(t=>t.startsWith("col-"));o.push({col:!s||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),m.set(n,o)}return t(e.tag,Object(a["a"])(s,{class:o}),i)}})}}]);