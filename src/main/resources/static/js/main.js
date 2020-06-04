import Vue from 'vue';
import Vuetify from 'vuetify';
import '@babel/polyfill';
import 'vuetify/dist/vuetify.min.css';

import 'api/resource';
import router from 'router/router';
import store from 'store/store';


import App from 'pages/App.vue';
import { connect } from './util/ws';

if (frontendData.profile) {
    connect();
}

Vue.use(Vuetify)

new Vue({
    vuetify : new Vuetify({
        icons: {
            iconfont: 'mdiSvg'
        }
    }),
    el: '#app',
    store,
    router,
    render: a => a(App)
});
