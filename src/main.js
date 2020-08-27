import Vue from 'vue';
import App from './App.vue';

import { messageSuccess, messageNotice } from './variables/DefaultVariables';
import alertVariables from './functions/AlertVariables';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alertVariables(messageSuccess);
alertVariables(messageNotice);