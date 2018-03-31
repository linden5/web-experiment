// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import * as Com from '@gfloan/app.frontend.web.components'
import router from '@gfloan/app.frontend.web.router'
console.log(router)
Vue.config.productionTip = false
var App = Com.App
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
