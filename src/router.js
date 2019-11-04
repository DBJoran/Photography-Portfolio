import VueRouter from 'vue-router'

import frontPage from './components/frontpage.vue'
import showcasePage from './components/showcase.vue'
import portfolio from './components/portfolio.vue'
import aboutPage from './components/aboutpage.vue'
import contactPage from './components/contactpage.vue'

const routes = [
    { path: '/', component: frontPage},
    { path: '/showcase', component: showcasePage},
    { path: '/portfolio', component: portfolio},
    { path: '/about', component: aboutPage},
    { path: '/contact', component: contactPage},
    { path: '*', component: frontPage}
];
  
const router = new VueRouter({
    mode: 'history',
    routes: routes,
});

export default router
