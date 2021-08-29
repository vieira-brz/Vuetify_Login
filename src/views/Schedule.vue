<template>
  <v-app class="schedule"     
    :class="{
      'background': !$vuetify.theme.dark,
      'dark_background': $vuetify.theme.dark,
    }"
  >
    <SideBar/>
    SCHEDULE
  </v-app>
</template>

<script>
  import SideBar from '../components/SideBar.vue'

  export default {
    name: 'Schedule',

    components: {
      SideBar,
    },
  }
</script>
