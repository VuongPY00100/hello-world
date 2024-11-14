import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import HomePage from '../components/Home.vue';
import BlogPage from '../components/Blog.vue';
import LoginPage from '../components/Login.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/blog', component: BlogPage },
    { path: '/about', component: About },
    { path: '/login', component: LoginPage}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;