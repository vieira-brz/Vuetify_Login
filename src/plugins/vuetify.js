import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa'
    },
    theme: {
        dark: false,
        themes: {
            dark: {
                dark_pattern: '#363636',
                dark_background: '#272727',
            },
            light: {
                pattern: '#ffffff',
                background: '#f1f1f1',
            }
        }
    }
});
