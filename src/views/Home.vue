<template>
  <el-container class="app-wraper">
    <!-- 头部 -->
    <el-header class="app-header">
      <span style="font-weight: bold; font-size: 20px; margin-left: 70px; color: #fff">
        权限中心
      </span>
      <el-dropdown style="line-height: 60px;float: right;margin: 0px 30px;">
        <span class="theme-text" style="color:#fff">
          {{ currentUser.username }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span @click="routeTo({ path:'profile' })" >个人中心</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span @click="logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside width="210px" class="app-aside">
        <!-- 左侧导航 -->
        <el-menu
          style="height: 100%;"
          text-color="#fff"
          background-color="#545c64"
          active-text-color="#ffd04b"
          :router=true
          :unique-opened=true>
          <li class="welcome">
            <i class="el-icon-people"></i>
            <span slot="title" style='color:#ffd04b'>Welcome {{ currentUser.username }}</span>
          </li>
          <NavBar :data='menuItems'/>

        </el-menu>
      </el-aside>
      <el-main class="app-main">
        <!-- 右侧主题内容 -->
        <!-- <router-view/> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import NavBar from '@/components/NavBar.vue';

const session = window.sessionStorage;
@Component({
  components:{
    NavBar,
  }
})

export default class Home extends Vue {

  // ==============================================
  // 获取store值
  @State('routerPath') public routerPathState: any;

  // 声明变量
  public currentUser = {
    username: 'God'
  }

  public menuItems = [];


  // ==============================================
  // 封装函数

  // 切换路由
  public routerTo = (path: object) => {
    this.$router.push(path);
  }

  // 退出登录
  public logout = () => {
    session.clear();
    this.$router.push('/login');
  }

  // ==============================================
  // 声明周期
  public mounted () {
    this.menuItems = this.routerPathState.router;
  }
}
</script>

<style lang="scss" scoped>
	.app-wraper {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  background-color: #f7f7f7;
  height: 100%;
  width: 100%;
  position: relative;
  .app-header {
    background: #545c64;
    box-shadow: 0 2px 3px 0 rgba(100,100,100,0.15);
    text-align: left;
    line-height: 60px;
    border-bottom: 1px solid #fff;
  }
  .app-aside {
    width: 210px;
    box-shadow: 0 2px 3px 0 rgba(100,100,100,0.15);
    .welcome {
      height: 60px;
      line-height: 60px;
      font-size: 14px;
    }
    .el-menu-item {
      height: 46px;
      padding: 0 80px 0 20px;
      line-height: 46px;
      span {
        margin-left: 10px;
      }
    }
    .el-menu-item.is-active {
        border-left: 2px solid #409EFF;
    }
  }
  .app-main {
    overflow-y: scroll;
  }
}
</style>

