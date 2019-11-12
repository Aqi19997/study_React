export default [

  {
    icon: 'home',
    title: '首页',
    key: '1'
  },

  {
    icon: 'appstore',
    title: '商品',
    key: '2',
    children: [
      {
        icon: 'home',
        title: '分类管理',
        key: '3'
      },
      {
        icon: 'home',
        title: '商品管理',
        key: '4'
      }
    ]
  },

  {
    icon: 'home',
    title: '用户管理',
    key: '5'
  },

  {
    icon: 'home',
    title: '权限管理',
    key: '6'
  },

  {
    icon: 'home',
    title: '图形图表',
    key: '7',
    children: [
      {
        icon: 'home',
        title: '柱状图',
        key: '8'
      },
      {
        icon: 'home',
        title: '折线图',
        key: '9'
      },
      {
        icon: 'home',
        title: '饼状图',
        key: '10'
      }
    ]
  }


]