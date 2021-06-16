import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test/test.vue'),
    meta: {
      title: 'test'
    }
  }
];

const router = new VueRouter({
  routes,
});

export default router;
