export default [
    {
        name: 'details',
        path: '/details',
        hideMenu: true,
        children: [
            {
                name: 'menuDetail',
                path: '/menuDetail',
                component: 'business/menuDetail',
                activeMenu: 'menu',
                meta: { title: '详情页', 'icon': 'icon-tongjifenxi' },
            }
        ]
    }
]
