import Vue from 'vue'   
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const axiosHttp = axios.create({
    baseURL: 'http://localhost:8080/', 
    timeout: 5000 
});
    
export default axiosHttp