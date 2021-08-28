<template>
    <v-app :style="{background: $vuetify.theme.themes.dark.background}" class="config">
        <SideBar/>
        CONFIG
    </v-app>
</template>

<script>
import SideBar from '../components/SideBar.vue'

export default {
    name: 'Config',

    components: {
        SideBar,
    }
}
</script>