
interface RouterAttribute {
  title: string,
  index: string,
  icon: string,
  children?: RouterAttribute[],
}

export interface State {
  router: RouterAttribute[];
}

const roleState: State = {
  router: [
    {
      title: '一级路由',
      index: '/overview1',
      icon: 'el-icon-menu',
      children: [
        {
          title: '二级路由',
          index: '/overview2',
          icon: 'el-icon-menu',
          children: [
            {
              title: '三级路由',
              index: '/eoverview3',
              icon: 'el-icon-menu',
            }, {
              title: '三级路由',
              index: '/overview3',
              icon: 'el-icon-menu',
            }, {
              title: '三级路由',
              index: '/overview3',
              icon: 'el-icon-menu',
            }, {
              title: '三级路由',
              index: '/overview3',
              icon: 'el-icon-menu',
            }
          ]
        }, {
          title: '二级路由',
          index: '/overview2',
          icon: 'el-icon-menu',
        }, {
          title: '二级路由',
          index: '/overview2',
          icon: 'el-icon-menu',
        }
      ]
    }, {
      title: '用户管理',
      index: '/user',
      icon: 'el-icon-tickets',
    }, {
      title: '角色管理',
      index: '/role',
      icon: 'el-icon-star-on',
    }, {
      title: '权限管理',
      index: '/permission',
      icon: 'el-icon-view',
    }, {
      title: '个人中心',
      index: '/profile',
      icon: 'el-icon-info',
    }
  ],
};



export default {
  state: roleState,
};
