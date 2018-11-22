import Vue from 'vue'
import App from '../src/app.vue'
import Home from '../src/components/home.vue'
import Music from '../src/components/music.vue'
import Movie from '../src/components/movie.vue'
import Other from '../src/components/other.vue'
import Error from '../src/components/error.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);
import Axios from 'axios';
//挂载原型
Vue.prototype.$ajax = Axios;






let router = new VueRouter({
    routes: [
        { path: '/', redirect: { name: 'home' } }, {
            path: '/home',
            name: 'home',
            component: Home,
            children: [
                { name: 'music', path: 'music', component: Music },
                { name: 'movie', path: 'movie', component: Movie }
            ]
        },
        { path: '/other', name: 'other', component: Other },
        { path: '*', name: 'error', component: Error }
    ]
})

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})
