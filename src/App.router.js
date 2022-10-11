import { createRouter, createWebHistory } from 'vue-router'
import Library from './components/Library.vue'

/*const userAge = 18*/

const routes = [
    {
        path: '/',
        name: 'library',
        component: Library
    },
    {
        path: '/:isin',
        name: 'book',
        component: () => import('./components/Book.vue'),
        props: true,
        children: [
            {
                path: 'history',
                name: 'history',
                component: () => import('./components/History.vue'),
                props: true
            },
            {
                path: 'comments',
                name: 'comments',
                component: () => import('./components/Comments.vue'),
                props: true
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory('/library/'),
    routes
})

/* router.beforeEach((to, from, next) => {
    next()
}) */

export default router