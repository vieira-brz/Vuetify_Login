<template>
    <v-app class="notifications"
        :class="{
            'background': !$vuetify.theme.dark,
            'dark_background': $vuetify.theme.dark,
        }"
    >
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