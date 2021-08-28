<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}" class="chat">
    <SideBar/>
    CHAT
  </v-app>
</template>

<script>
  import SideBar from '../components/SideBar.vue'

  export default {
    name: 'Chat',

    components: {
      SideBar,
    }
  }
</script>
