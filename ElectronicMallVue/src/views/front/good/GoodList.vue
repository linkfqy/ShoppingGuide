<template>
  <div>
    <search @search="handleSearch"></search>
    <div class="main-box">
      <div style="margin: 20px auto">
        <div class="header">
          <h2 class="cate" style="font-size: 24px;">
            <i class="iconfont icon-r-list" style="font-size: 30px;"></i>
            选择商品分类
          </h2>
          <div>
            <toggle-button button-class="custom-button" @open-new-dialog="openNewDialog">虚拟导购</toggle-button>
          </div>
        </div>
        
        <!--      类别菜单-->
        <el-row :gutter="20" style="font-size: 18px;">
          <el-col v-for="(item, index) in icons" :key="index" :span="6">
            <i class="iconfont" v-html="item.value" 
            @click.prevent="load('icon', item.id),selectIcon(item.id)"
            :class="{'selected-icon': isSelectedIcon(item.id), 'unselected-icon': !isSelectedIcon(item.id)  }"
            @mouseover="setHandCursor"
            @mouseout="setDefaultCursor"></i> 
            <span v-for="(category, index2) in item.categories" :key="index2">
              <b>
                <a
                  href="#"
                  @click.prevent="load('category', category.id)"
                  :class="{
                    black: categoryId == category.id,
                    grey: categoryId != category.id,
                  }"
                >
                  <span> {{ category.name }}</span>
                </a>
              </b>
              <span v-if="index2 != item.categories.length - 1"> / </span>
            </span>
          </el-col>
        </el-row>
        <hr />
        <el-row :gutter="20">
          <el-col
            :span="6"
            v-for="good in good"
            :key="good.id"
            style="margin-bottom: 20px"
          >
            <!--            商品格子-->
            <router-link :to="'goodview/' + good.id">
              <el-card :body-style="{ padding: '0px', background: '#e3f5f4' }">
                <img
                  :src="baseApi + good.imgs"
                  style="width: 100%; height: 300px"
                />
                <div style="padding: 5px 10px">
                  <span style="font-size: 18px">{{ good.name }}</span
                  ><br />
                  <span style="color: red; font-size: 15px"
                    >￥{{ good.price }}</span
                  >
                </div>
              </el-card>
            </router-link>
          </el-col>
        </el-row>
      </div>
      <!--      分页-->
      <div class="block" style="text-align: center">
        <el-pagination
          background
          :hide-on-single-page="false"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="total"
          @current-change="handleCurrentPage"
        >
        </el-pagination>
      </div>
    </div>

    


  </div>
</template>

<script>
import axios from "axios";
import search from "../../../components/Search";
import ToggleButton from '../../Chat.vue';
import { eventBus } from "@/views/EventBus";
export default {
  name: "GoodList",
  data() {
    return {
      //分类icon，每个icon包含id、value、categories对象数组.category：id，name
      icons: [],
      total: 0,
      pageSize: 9,
      currentPage: 1,
      //选择的分类
      categoryId: Number,
      //搜索的内容
      searchText: "",
      good: [],
      categoryIds:[],
      selectedIconId: null,
      isHandCursor: false,

      username: '', 
      cartItems: [],
      orderItems: [],
      currentFirstCategory: '',
      currentSecondCategory: '',
      currentFirstCategoryList: [],
      currentSecondCategoryList: [],
      allItems: [],

      baseApi: this.$store.state.baseApi,
    };
  },
  components: {
    search,
    ToggleButton
  },
  created() {
    //二者一般不同时存在
    this.searchText = this.$route.query.searchText;
    this.categoryId = this.$route.query.categoryId;

    this.loadCategories();
    this.load('category',);
  },
  methods: {
    loadCategories() {
      this.request.get("/api/icon").then((res) => {
        if (res.code === "200") {
          this.icons = res.data;
        }
      });
    },
    handleCurrentPage(currentPage) {
      this.currentPage = currentPage;
      this.load('category',);
    },
    handleSearch(text) {
      this.searchText = text;
      this.load('category',);
    },
    load(type, id) {
      if (type === 'icon') {
        this.categoryIds = null;
        this.selectedIconId = id;
      this.request.get(`/api/icon/${id}/categoryIds`)
        .then((response) => {
          if (response.code === '200') {
            const categoryIds = response.data;
            this.categoryIds = categoryIds;

            this.request.get("/api/good/pages", {
              params: {
                pageNum: this.currentPage,
                pageSize: this.pageSize,
                searchText: this.searchText,
                categoryIds: categoryIds.join(','),
              },
            })
            .then((res) => {
              if (res.code === "200") {
                this.total = res.data.total;
                this.good = res.data.records;
              }
            });
          }
        });
    } else if (type === 'category') {
      this.selectedIconId = null;
      if (id != undefined) {
        this.searchText = "";
        this.categoryId = id;

        this.$router.push({
          path: "/goodlist",
          query: { categoryId: this.categoryId },
        });
      }

      this.request.get("/api/good/page", {
        params: {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          searchText: this.searchText,
          categoryId: this.categoryId,
        },
      })
      .then((res) => {
        if (res.code === "200") {
          this.total = res.data.total;
          this.good = res.data.records;
        }
      });
    }
    this.returnCurrentCategory();
    },
    selectIcon(iconId) {
      this.selectedIconId = iconId;
      this.categoryId = null;
      this.$router.push({
        path: "/goodlist",
        query: { iconId: iconId }
      });
    },
    setHandCursor() {
      this.isHandCursor = true;
    },
    setDefaultCursor() {
      this.isHandCursor = false;
    },
    returnCurrentCategory(){
      const requestData = {
        iconId: this.selectedIconId,
        categoryId: this.categoryId
      };
      this.request
      .post("/api/userinfo/post_iconId_or_categoryId", requestData)
      .then((res) => {
        if (res.code === "200") {
          const userinfoData = res.data;

          this.username = userinfoData.username;
          this.cartItems = userinfoData.cartItems;
          this.orderItems = userinfoData.orderItems;
          this.currentFirstCategory = userinfoData.currentFirstCategory;
          this.currentSecondCategory = userinfoData.currentSecondCategory;
          this.currentFirstCategoryList = userinfoData.currentFirstCategoryList;
          this.currentSecondCategoryList = userinfoData.currentSecondCategoryList;
          this.allItems = userinfoData.allItems; 
      }});
    },
    openNewDialog(){
      const payload = {
        username: this.username,
        cartItems: this.cartItems,
        orderItems: this.orderItems,
        currentFirstCategory: this.currentFirstCategory,
        currentSecondCategory: this.currentSecondCategory,
        currentFirstCategoryList: this.currentFirstCategoryList,
        currentSecondCategoryList: this.currentSecondCategoryList,
        allItems: this.allItems 
      };

      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`
      };

      this.request.post("http://localhost:9193/newchat", payload, {headers: headers})
      .then((res) => {
        eventBus.$emit('sendMessageToChat', res.aiMsg);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    },
  },
  computed: {
  isSelectedIcon() {
    return (iconId) => this.selectedIconId === iconId;
  },
},
};
</script>

<style scoped>
.main-box {
  background-color: white;
  border: white 2px solid;
  border-radius: 40px;
  padding: 20px 40px;
  margin: 5px auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cate {
  font-size: 24px;
  display: flex;
  align-items: center;
}

.black {
  color: black;
}

.grey {
  color: grey;
}
.selected-icon {
  color: black; /* 修改颜色为选中时的颜色 */
  cursor: pointer; /* 鼠标悬停时显示手型 */
}
.unselected-icon {
    color: grey; /* 未选中状态下的颜色为灰色 */
    cursor: pointer;
  }

.dialog-container {
  display: flex;
  align-items: center;
  z-index: 9999;
}

.toggle-button {
  width: 100px;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
</style>