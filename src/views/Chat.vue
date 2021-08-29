<template>
  <v-app class="chat"
        :class="{
      'background': !$vuetify.theme.dark,
      'dark_background': $vuetify.theme.dark,
    }"
  >
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
