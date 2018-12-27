
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
            }
          ]
        }
      ]
    }
  ],
};



export default {
  state: roleState,
};
