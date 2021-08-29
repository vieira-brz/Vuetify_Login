<template>
  <v-app class="home" 
    :class="{
      'background': !$vuetify.theme.dark,
      'dark_background': $vuetify.theme.dark,
    }"
  >
    <SideBar/>
    HOME
  </v-app>
</template>

<script>
  import SideBar from '../components/SideBar.vue'

  export default {
    name: 'Home',

    components: {
      SideBar,
    }
  }
</script>
