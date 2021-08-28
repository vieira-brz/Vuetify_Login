<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'WEBDEV';
      }
    },
  },

  mounted() {
    const theme = localStorage.getItem('dark_theme');

    if (theme) 
    {
        if (theme == "true") 
        {
          this.$vuetify.theme.dark = true;
        } 
        else 
        {
          this.$vuetify.theme.dark = false;
        }
    }
  }
};
</script>
