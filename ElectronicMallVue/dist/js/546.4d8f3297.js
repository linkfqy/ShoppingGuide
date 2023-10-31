"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[546],{9546:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"demo-input-size"},[a("el-input",{staticStyle:{width:"250px","padding-right":"5px"},attrs:{placeholder:"请输入文件名","prefix-icon":"iconfont icon-r-find"},model:{value:e.fileName,callback:function(t){e.fileName=t},expression:"fileName"}}),a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[a("i",{staticClass:"iconfont icon-r-find",staticStyle:{"padding-right":"6px"}}),e._v(" 搜索 ")]),a("el-button",{attrs:{type:"warning"},on:{click:e.reload}},[a("i",{staticClass:"iconfont icon-r-refresh",staticStyle:{"padding-right":"6px"}}),e._v(" 重置 ")])],1),a("div",{staticStyle:{"padding-top":"10px"}},[a("el-upload",{staticStyle:{display:"inline-block"},attrs:{action:"http://localhost:9191/file/upload","show-file-list":!1,"on-success":e.handleFileUploadSuccess}},[a("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"primary"}},[a("i",{staticClass:"el-icon-a-032",staticStyle:{"padding-right":"6px；font-size: 22px"}}),e._v("上传")])],1),a("el-button",{staticStyle:{"margin-left":"10px","font-size":"18px"},attrs:{type:"danger"},on:{click:e.delBatch}},[a("i",{staticClass:"iconfont icon-r-delete",staticStyle:{"padding-right":"6px","font-size":"22px"}}),e._v("批量删除")])],1),a("el-table",{attrs:{data:e.tableData,"background-color":"black"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection"}}),a("el-table-column",{attrs:{prop:"name",label:"文件名",width:"350"}}),a("el-table-column",{attrs:{prop:"type",label:"文件类型",width:"180"}}),a("el-table-column",{attrs:{prop:"size",label:"文件大小",width:"180"}}),a("el-table-column",{attrs:{label:"操作",width:"240",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{attrs:{href:e.baseApi+t.row.url}},[a("el-button",{staticStyle:{"font-size":"18px"},attrs:{type:"success"}},[a("i",{staticClass:"iconfont icon-r-bottom",attrs:{stye:"font-size: 26px;"}}),e._v(" 下载 ")])],1),a("el-button",{staticStyle:{"margin-left":"10px","font-size":"18px"},attrs:{type:"danger"},on:{click:function(a){return e.handleDelete(t.row.id)}}},[a("i",{staticClass:"iconfont icon-r-delete",staticStyle:{"font-size":"22px"}}),e._v(" 删除 ")])]}}])})],1),a("div",{staticClass:"block",staticStyle:{flex:"0 0 auto"}},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[3,5,8,10],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentPage}})],1)],1)},s=[],l={name:"File",created(){this.load()},data(){return{baseApi:this.$store.state.baseApi,tableData:[],total:0,pageSize:5,currentPage:1,fileName:"",multipleSelection:[]}},methods:{handleSizeChange(e){this.pageSize=e,this.load()},handleCurrentPage(e){this.currentPage=e,this.load()},handleSelectionChange(e){this.multipleSelection=e},handleFileUploadSuccess(){this.$message.success("上传成功"),this.load()},handleEnable(e){this.request.get("/file/enable",{params:{id:e.id,enable:e.enable}}).then((e=>{"200"===e.code?(this.$message({type:"success",message:"修改成功",duration:3e3}),this.load()):this.$message.error(e.msg)}))},load(){this.request.get("/file/page",{params:{pageNum:this.currentPage,pageSize:this.pageSize,fileName:this.fileName}}).then((e=>{if("200"===e.code){this.tableData=e.data.records;for(let e of this.tableData){let t=e.size;e.size=t<1024?t+" Kb":t>1024&&t<1048576?(t/1024).toFixed(2)+" Mb":t/1024/1024..toFixed(2)+" Gb"}this.total=e.data.total}}))},search(){this.currentPage=1,this.load()},reload(){this.fileName="",this.load()},handleDelete(e){this.$confirm("确认删除该文件吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.request.delete("/file/"+e).then((e=>{"200"===e.code?(this.$message({type:"success",message:"删除成功",duration:3e3}),this.load()):this.$message.error(e.msg)}))}))},delBatch(){let e=this.multipleSelection.map((e=>e.id));this.$confirm("确认删除这些用户吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.request.post("/file/del/batch",e).then((e=>{"200"===e.code?(this.$message({type:"success",message:"删除成功",duration:3e3}),this.load()):this.$message.error(e.msg)}))}))}}},n=l,o=a(1001),c=(0,o.Z)(n,i,s,!1,null,"90b9b166",null),r=c.exports}}]);
//# sourceMappingURL=546.4d8f3297.js.map