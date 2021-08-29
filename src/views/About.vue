<template>
    <v-app class="about"
        :class="{
            'background': !$vuetify.theme.dark,
            'dark_background': $vuetify.theme.dark,
        }"
    >
        <SideBar/>
        ABOUT
    </v-app>
</template>

<script>
import SideBar from '../components/SideBar.vue'

export default {
    name: 'About',

    components: {
        SideBar,
    }
}
</script>