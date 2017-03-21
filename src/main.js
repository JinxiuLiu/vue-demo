// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/less/index.less';

Vue.use(VueRouter);
Vue.use(VueResource);

 // 定义路由
const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];

// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

// 创建和挂载根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

router.push('/goods');
