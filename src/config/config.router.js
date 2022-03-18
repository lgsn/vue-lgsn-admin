export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login')
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/pmsPage/404')
    },
    {
        path: '/exception',
        name: 'exception',
        component: () => import('@/views/pmsPage/403')
    },
    {
        path: '/fault',
        name: 'fault',
        component: () => import('@/views/pmsPage/502')
    }
]
