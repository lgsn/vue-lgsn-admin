export default [
  {
    'name': 'setting',
    'path': '/setting',
    'component': '/menu/index',
    meta: { title: '系统设置', 'icon': 'icon-shezhi' },
    children: [
      {
        'name': 'menu',
        'path': '/menu',
        'component': '/menu/index',
        meta: { title: '菜单管理', 'icon': 'icon-kuaijiecaidan' }
      },
    ]
  },
  {
    'name': 'business',
    'path': '/business',
    'component': '/menu/index',
    meta: { title: '业务模版', 'icon': 'icon-tongjifenxi' },
  },
  {
    'name': 'link',
    'path': '/link',
    'component': '/menu/index',
    meta: { title: '外链菜单', 'icon': 'icon-tongjifenxi' },
  },
  {
    'name': 'details',
    'path': '/details',
    'component': '/menu/index',
    meta: { title: '详情页', 'icon': 'icon-tongjifenxi' },
  },
  {
    'name': 'components',
    'path': '/components',
    'component': '/menu/index',
    meta: {
      title: '组件', 'icon': 'icon-tongjifenxi',
    },
    children: [
      {
        'name': 'avatar', 'path': '/avatar', 'component': '/menu/index', meta: { title: '头像', 'icon': '' }
      },
      {
        'name': 'Icon', 'path': '/icon', 'component': '/menu/index', meta: { title: '图标', 'icon': '' }
      },
      {
        'name': 'editButton', 'path': '/editButton', 'component': '/menu/index', meta: { title: '操作按钮', 'icon': '' }
      },
      {
        'name': 'pagination', 'path': '/pagination', 'component': '/menu/index', meta: { title: '分页', 'icon': '' }
      },
      {
        'name': 'upload', 'path': '/upload', 'component': '/menu/index', meta: { title: '上传', 'icon': '' }
      },
    ]
  },
  {
    'name': 'copy',
    'path': '/copy',
    'component': '/menu/index',
    meta: { title: '复制', 'icon': 'icon-tongjifenxi' },
  },
  {
    'name': 'permission',
    'path': '/permission',
    'component': '/menu/index',
    meta: { title: '指令权限', 'icon': 'icon-tongjifenxi' },
  },
]
