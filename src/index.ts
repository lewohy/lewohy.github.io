import Vue from 'vue';
import App from './pages/App.vue';

(() => {
    let app = new Vue({
        render: h => h(App)
    }).$mount('#app');
})();