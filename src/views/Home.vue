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
    <el-row>
        <el-button
          @click.native.prevent="changeDate()"
          type="text"
          size="small">
          修改数据
        </el-button>
      </el-row>
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
          <NavBar :data='routerPathState.router'/>
        </el-menu>
      </el-aside>
      <el-main class="app-main">
        <CommonTable
          :tHeadList='tHeadList'
          :dataList='mockState.mockData'
        >
            <template slot="self_section">
              <el-table-column
                label="操作"
                width="150">
                  <template slot-scope="scope">
                    <el-button
                      @click.native.prevent="editRow(scope.row,scope.$index)"
                      type="text"
                      size="small">
                      编辑
                    </el-button>
                  </template>
              </el-table-column>
            </template>
        </CommonTable>
        <Pagination
          :page='page'
          :size='size'
          :total='total'
          :paginationSizeChange='paginationSizeChange'
          :paginationPageChange='paginationPageChange'/>

        <!-- 右侧主题内容 -->
        <!-- <router-view/> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { GET_MOCK, SET_MOCK } from '@/store/type';
import NavBar from '@/components/NavBar.vue';
import Pagination from '@/components/Pagination.vue';
import CommonTable from '@/components/CommonTable.vue';
import { mapState } from 'vuex';
import { Message } from 'element-ui';

const session = window.sessionStorage;
// 仅有home和prop属性课写在@component里其余写在extend里
@Component({
  components:{
    NavBar,
    Pagination,
    CommonTable
  },
  computed:{
    ...mapState(['mock']),
  }
})

export default class Home extends Vue {

  // 获取store值
  @State('routerPath') public routerPathState: any;
  @State('mock') public mockState: any;

  @Action(GET_MOCK) public getMock: any;
  @Action(SET_MOCK) public setMock: any;



  // ==============================================
  // 声明变量
  public currentUser = {
    username: 'God'
  };

  public menuItems = [];

  public total = 0;
  public page = 0;
  public size = 10;

  public tHeadList = [{
    prop: 'number',
    label: '序号',
  }, {
    prop: 'createdAt',
    label: '创建时间',
  }, {
    prop: 'updatedAt',
    label: '更新时间',
  }];

  public fileList3 = [];

  public value1 = '';

  public loading = false;

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

  public paginationSizeChange = (size: Number) => {
    console.log(size);
  }

  public paginationPageChange = (page: Number) => {
    console.log(page);
  }

  public editRow = (data:any, index: Number) => {
    console.log(data);
  }

  public handleChange(file: String, fileList: any[]) {
    console.log(file);
    console.log(fileList);
  }

  public changeDate () {
    this.setMock().then(() => {
      // this.dataList = this.mockState.mockData;
    })
  }

  // ==============================================
  // 声明周期
  public mounted () {
    console.log(this.mockState);
    // this.menuItems = this.routerPathState.router;
    // this.loading = true;
    this.getMock({size: 10, page: 1}).then((data: any)=> {
      setTimeout(() => {
        this.loading = false;
      }, 3000)
    }, (error:any) => {
      this.loading = false;
      Message({
        type: 'error',
        message: error,
        duration: 5000
      })
    })

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

