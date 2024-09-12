export default [
    {
        name: 'details',
        path: '/details',
        hideMenu: true,
        children: [
            {
                name: 'businessDetail',
                path: '/businessDetail',
                component: 'business/businessDetail',
                activeMenu: 'business',
                meta: { title: '详情页', 'icon': 'icon-tongjifenxi' },
            }
        ]
    }
]
