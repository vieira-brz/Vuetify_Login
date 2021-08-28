<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}" class="schedule">
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
