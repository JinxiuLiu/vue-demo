// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';

Vue.use(VueRouter);

// let app = Vue.extend(App);

const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings }
];

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
});

const app = new Vue({
  router
}).$mount('#app');
