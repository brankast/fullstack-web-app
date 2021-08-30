import Vue from 'vue'
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

Vue.component('validation-provider', ValidationProvider)
Vue.component('validation-observer', ValidationObserver)

// Install required rule.
extend("required", {
    ...required,
    message: field => field + ' field is required.'
});