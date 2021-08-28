<template>
  <v-row justify="center">
    <v-dialog
      v-model="show"
      fullscreen
      hide-overlay 
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          color="blue"
        >
          <v-btn
            icon
            dark
            @click.stop="show = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>

          <v-toolbar-title>Settings</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn
              dark
              text
              @click.stop="show = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-list
          three-line
          subheader
        >
          <v-subheader>User Controls</v-subheader>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          three-line
          subheader
        >
          <v-subheader>General</v-subheader>

          <v-list-item>
            <v-list-item-action>
              <v-checkbox></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-checkbox></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-checkbox></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          three-line
          subheader
        >
          <v-subheader>Tema escuro</v-subheader>

          <v-list-item>
            <v-list-item-action>
            <v-switch
              v-model="dark"
              persistent-hint
              @click="toggleDarkMode"
            ></v-switch>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ themeText }}</v-list-item-title>
              <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>



<script>
export default {

  data: () => ({
    dark: false,
    themeText: 'Ativar modo escuro',
  }),

  props: {
    value: Boolean,
  },

  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;

      if (this.$vuetify.theme.dark == true)
      {
        this.dark = true
        this.themeText = 'Desativar modo escuro'
      }
      else 
      {
        this.dark = false
        this.themeText = 'Ativar modo escuro'
      }

      localStorage.setItem('dark_theme', this.$vuetify.theme.dark.toString());
    }
  },

  created() {
    const theme = localStorage.getItem('dark_theme');

    if (theme) 
    {
        if (theme == "true") 
        {
          this.dark = true
          this.$vuetify.theme.dark = true;
          this.themeText = 'Desativar modo escuro'
        } 
        else 
        {
          this.dark = false
          this.$vuetify.theme.dark = false;
          this.themeText = 'Ativar modo escuro'
        }
    }
  },

  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
         this.$emit('input', value)
      }
    }
  }
}
</script>