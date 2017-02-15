import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/Hello';
import chart from 'components/Echarts';
import Help from 'components/Help';

// 全局注册组件
Vue.component('chart', chart);

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/home',
            name: 'Help',
            component: Help
        }
    ]
});
