import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import 'api/resource';
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
    render: a => a(App)
});
