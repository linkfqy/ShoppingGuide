"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[345],{4345:function(t,e,i){i.r(e),i.d(e,{default:function(){return m}});var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"58%",height:"100%",margin:"20px auto"}},[t._l(t.good,(function(e,o){return[i("income-item",{key:o,staticStyle:{"margin-bottom":"2px"},attrs:{index:o+1,good:e,categories:t.categories}})]}))],2)},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"head-cart",staticStyle:{"font-size":"22px",padding:"8px","background-color":"lightgrey"}},[i("i",{staticClass:"iconfont icon-r-shield",staticStyle:{"font-size":"26px"}}),t._v(" 销量第"+t._s(t.index)+" ")]),i("div",{staticClass:"body"},[i("div",{staticStyle:{display:"inline-block","margin-left":"40px"}},[i("router-link",{attrs:{to:"/goodview/"+t.good.id}},[i("img",{staticStyle:{width:"120px",height:"120px"},attrs:{src:t.baseApi+t.good.imgs}})])],1),i("div",{staticStyle:{display:"inline-block","line-height":"40px",padding:"20px"}},[i("table",[t._m(0),i("tr",[i("td",[t._v(t._s(t.good.id))]),i("router-link",{attrs:{to:"/goodview/"+t.good.id}},[i("td",{staticStyle:{width:"300px"}},[t._v(t._s(t.good.name))])]),i("td",[i("b",[t._v("￥"+t._s(t.good.saleMoney))])])],1)])])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("th",[t._v("商品id")]),i("th",{staticStyle:{width:"300px"}},[t._v("商品名称")]),i("th",[t._v("销售额")])])}],r={name:"IncomeItem",props:{good:Object,index:Number,categories:Array},data(){return{baseApi:this.$store.state.baseApi}},mounted(){}},d=r,c=i(1001),l=(0,c.Z)(d,s,n,!1,null,"17e285fb",null),g=l.exports,u={name:"IncomeRank",data(){return{num:10,good:[],categories:[]}},components:{"income-item":g},created(){this.request.get("/api/category").then((t=>{"200"===t.code&&(this.categories=t.data),this.request.get("/api/good/rank/",{params:{num:this.num}}).then((t=>{"200"===t.code&&(this.good=t.data)}))}))}},h=u,p=(0,c.Z)(h,o,a,!1,null,"4032d634",null),m=p.exports}}]);
//# sourceMappingURL=345.26a000c8.js.map