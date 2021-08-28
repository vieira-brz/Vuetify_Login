<template>
    <v-app :style="{background: $vuetify.theme.themes.dark.background}" class="notifications">
        <SideBar />
        NOTIFICATIONS
    </v-app>
</template>

<script>
import SideBar from '../components/SideBar.vue'

export default {
    name: 'Notifications',
    
    components: {
        SideBar,
    },
}
</script>