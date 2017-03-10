//引入组件
import Vue from 'vue'
// import test from './test.vue';

import App from './app.tpl'

//引入CSS
// import "./css.css"
import "./test.less"

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    // components:{
    //     'test': test
    // }
});