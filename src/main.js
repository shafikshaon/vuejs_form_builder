import Vue from "vue"
import App from "./App.vue"

import store from "./store"
import VeeValidate from "vee-validate"
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)

import "./directives"

const config = {
    aria: true,
    classNames: {},
    classes: false,
    delay: 0,
    dictionary: null,
    errorBagName: 'errors', // change if property conflicts
    events: 'input|blur',
    fieldsBagName: 'fields',
    i18n: null, // the vue-i18n plugin instance
    i18nRootKey: 'validations', // the nested key under which the validation messages will be located
    inject: true,
    locale: 'en',
    validity: false,
    useConstraintAttrs: true
};

Vue.use(VeeValidate, config)

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount("#app")
