"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[796],{5796:function(e,t,s){s.r(t),s.d(t,{default:function(){return S}});var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{height:"100%"}},[s("el-container",{staticStyle:{height:"100%"}},[s("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)",height:"100%"},attrs:{width:e.sideWidth+"px"}},[s("Aside",{attrs:{"is-collapse":e.isCollapse}})],1),s("el-container",[s("el-header",{staticStyle:{"border-bottom":"1px solid #ccc","background-color":"aliceblue",height:"80px"}},[s("Header",{attrs:{"collapse-icon":e.collapseIcon,"collapse-title":e.collapseTitle,user:e.user},on:{collapse:e.handleCollapse}})],1),s("el-main",{class:{bk:"/manage/home"==e.$route.path}},[s("router-view",{on:{refresh:e.getUser}})],1)],1)],1)],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticStyle:{height:"100%"},attrs:{"default-openeds":["2","good"],"background-color":"rgb(48,65,86)","text-color":"#fff","collapse-transition":!1,collapse:e.isCollapse,router:""}},[n("div",{staticStyle:{height:"60px","margin-left":"30px","line-height":"60px"}},[n("router-link",{attrs:{to:"/manage/home"}},[n("img",{staticStyle:{width:"32px",position:"relative",top:"7px",right:"6px"},attrs:{src:s(6314)}})]),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.isCollapse,expression:"!isCollapse"}],staticStyle:{color:"aliceblue","font-size":"20px"},attrs:{slot:"title"},slot:"title"},[e._v("在线商城后台管理")])],1),n("el-menu-item",{staticClass:"el-item-menu",staticStyle:{"font-size":"16px"},attrs:{index:"/manage/home"}},[n("i",{staticClass:"iconfont icon-r-home",staticStyle:{"font-size":"24px",color:"white"}}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(" 主页")])]),n("el-menu-item",{staticClass:"el-item-menu",staticStyle:{"font-size":"16px"},attrs:{index:"/"}},[n("i",{staticClass:"iconfont icon-r-mark1",staticStyle:{"font-size":"24px",color:"white"}}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(" 前台")])]),n("el-submenu",{staticStyle:{"font-size":"16px"},attrs:{index:"2"}},[n("template",{slot:"title"},[n("i",{staticClass:"iconfont icon-r-setting",staticStyle:{"font-size":"24px",color:"white"}}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(" 系统管理")])]),n("el-submenu",{directives:[{name:"show",rawName:"v-show",value:e.userGroup,expression:"userGroup"}],staticClass:"el-item-menu",attrs:{index:"user"}},[n("template",{slot:"title"},[n("i",{staticClass:"iconfont icon-r-user2",staticStyle:{"font-size":"24px",color:"white"}}),e._v(" 用户管理")]),e.menuFlags.userMenu?n("el-menu-item",{attrs:{index:"/manage/user"}},[e._v(" 用户管理")]):e._e()],2),e.fileGroup?n("el-submenu",{staticClass:"el-item-menu",staticStyle:{"font-size":"18px"},attrs:{index:"file"}},[n("template",{slot:"title"},[n("i",{staticClass:"iconfont icon-r-paper",staticStyle:{"font-size":"24px",color:"white"}}),e._v(" 文件管理")]),e.menuFlags.fileMenu?n("el-menu-item",{attrs:{index:"/manage/file"}},[e._v("文件管理")]):e._e(),e.menuFlags.avatarMenu?n("el-menu-item",{attrs:{index:"/manage/avatar"}},[e._v("头像管理")]):e._e()],2):e._e(),e.GoodGroup?n("el-submenu",{staticClass:"el-item-menu",staticStyle:{"font-size":"18px"},attrs:{index:"good"}},[n("template",{slot:"title"},[n("i",{staticClass:"iconfont icon-r-find",staticStyle:{"font-size":"24px",color:"white"}}),e._v(" 商品管理")]),e.menuFlags.categoryMenu?n("el-menu-item",{attrs:{index:"/manage/category"}},[e._v("商品分类管理")]):e._e(),e.menuFlags.carouselMenu?n("el-menu-item",{attrs:{index:"/manage/carousel"}},[e._v("轮播图管理")]):e._e(),e.menuFlags.goodMenu?n("el-menu-item",{attrs:{index:"/manage/good"}},[e._v("商品管理")]):e._e(),e.menuFlags.orderMenu?n("el-menu-item",{attrs:{index:"/manage/order"}},[e._v("订单管理")]):e._e()],2):e._e(),e.incomeGroup?n("el-submenu",{staticClass:"el-item-menu",staticStyle:{"font-size":"18px"},attrs:{index:"income"}},[n("template",{slot:"title"},[n("i",{staticClass:"iconfont icon-r-shield",staticStyle:{"font-size":"24px",color:"white"}}),e._v(" 营收管理")]),e.menuFlags.incomeChartMenu?n("el-menu-item",{attrs:{index:"/manage/incomeChart"}},[e._v("图表分析")]):e._e(),e.menuFlags.incomeRankMenu?n("el-menu-item",{attrs:{index:"/manage/incomeRank"}},[e._v("收入排行榜")]):e._e()],2):e._e()],2)],1)},o=[],l=s(5972),r={name:"Aside",props:{isCollapse:Boolean},data:function(){return{role:"user",menuFlags:{userMenu:!1,fileMenu:!1,avatarMenu:!1,goodMenu:!1,carouselMenu:!1,orderMenu:!1,categoryMenu:!1,incomeChartMenu:!1,incomeRankMenu:!1}}},computed:{userGroup:function(){return this.menuFlags.userMenu},fileGroup:function(){return this.menuFlags.fileMenu||this.menuFlags.avatarMenu},GoodGroup:function(){return this.menuFlags.goodMenu||this.menuFlags.orderMenu||this.menuFlags.categoryMenu||this.menuFlags.carouselMenu},incomeGroup:function(){return this.menuFlags.incomeChartMenu||this.menuFlags.incomeRankMenu}},mounted:function(){},created:function(){var e=this;l.Z.post("http://localhost:9191/role").then((function(t){"200"===t.code&&(e.role=t.data,console.log("asider，role："+e.role),"admin"===e.role?(e.menuFlags.userMenu=!0,e.menuFlags.fileMenu=!0,e.menuFlags.avatarMenu=!0,e.menuFlags.categoryMenu=!0,e.menuFlags.goodMenu=!0,e.menuFlags.carouselMenu=!0,e.menuFlags.orderMenu=!0,e.menuFlags.incomeChartMenu=!0,e.menuFlags.incomeRankMenu=!0):e.role,console.log(e.menuFlags))}))}},u=r,c=s(1001),m=(0,c.Z)(u,a,o,!1,null,"78065c5b",null),p=m.exports,d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticStyle:{display:"flex"}},[s("div",{staticStyle:{flex:"1"}},[s("span",{class:e.collapseIcon,staticStyle:{"font-size":"25px",cursor:"pointer"},attrs:{title:e.collapseTitle},on:{click:function(t){return e.$emit("collapse")}}}),s("span",{staticClass:"iconfont icon-r-left",staticStyle:{"font-size":"25px",cursor:"pointer","margin-left":"10px"},attrs:{title:"返回"},on:{click:e.back}}),s("el-breadcrumb",{staticStyle:{display:"inline-block","margin-left":"30px","font-size":"22px"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/manage/home"}}},[e._v("首页")]),s("el-breadcrumb-item",[e._v(e._s(e.routePath))])],1)],1),s("el-dropdown",{staticStyle:{"margin-right":"40px",cursor:"pointer"}},[s("span",{staticClass:"el-dropdown-link"},[s("div",{staticStyle:{display:"inline-block","font-size":"22px","font-weight":"600"}},[s("img",{staticClass:"avatar",attrs:{src:e.baseApi+e.user.avatarUrl}}),e._v(" "+e._s(e.user.nickname)+" "),s("i",{staticClass:"el-icon-arrow-down el-icon--right",staticStyle:{"margin-right":"15px"}})])]),s("el-dropdown-menu",{staticStyle:{"text-align":"center"},attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",[s("div",{on:{click:function(t){return e.$router.push("/manage/person")}}},[e._v("个人信息")])]),s("el-dropdown-item",[s("div",{on:{click:e.logout}},[e._v("退出")])])],1)],1)],1)},h=[],g={name:"Header",props:{collapseIcon:String,collapseTitle:String,user:Object},methods:{logout:function(){localStorage.removeItem("user"),this.$router.push("/login"),this.$message.success("退出成功")},back:function(){this.$router.go(-1)}},data:function(){return{routePath:"",baseApi:this.$store.state.baseApi}},watch:{$route:function(){this.routePath=this.$route.meta.path}},created:function(){this.routePath=this.$route.meta.path}},f=g,x=(0,c.Z)(f,d,h,!1,null,"52f19060",null),v=x.exports,_={data:function(){return{user:{},isCollapse:!1,sideWidth:250,collapseIcon:"el-icon-s-fold",collapseTitle:"收缩"}},components:{Aside:p,Header:v},methods:{handleCollapse:function(){this.isCollapse=!this.isCollapse,this.isCollapse?(this.sideWidth=64,this.collapseIcon="el-icon-s-unfold",this.collapseTitle="展开"):(this.sideWidth=250,this.collapseIcon="el-icon-s-fold",this.collapseTitle="收缩")},getUser:function(){var e=this,t=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).username:"";t&&this.request.get("/userinfo/"+t).then((function(t){e.user=t.data,console.log(e.user.role)}))}},mounted:function(){},created:function(){this.getUser()}},y=_,M=(0,c.Z)(y,n,i,!1,null,null,null),S=M.exports},6314:function(e,t,s){e.exports=s.p+"img/logo.48bea8d2.png"}}]);
//# sourceMappingURL=796-legacy.0bdfd958.js.map