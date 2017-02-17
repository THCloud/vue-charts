import Vue from 'vue';
import Router from 'vue-router';
import ChartMake from 'views/ChartMake';
import Help from 'views/Help';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'ChartMake',
            component: ChartMake
        },
        {
            path: '/help',
            name: 'Help',
            component: Help
        }
    ]
});
