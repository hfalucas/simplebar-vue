import Vue from 'vue'
import VueSimplebar from '../src/VueSimplebar'
const app = new Vue({
    el: '#app',

    components: { VueSimplebar },

    data: {
        YStart: 0,
        YEnd: 0
    }
})