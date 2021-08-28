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

          <v-toolbar-title>Configurações</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>

        <v-list
          three-line
          subheader
        >
          <v-subheader>Definições do sistema</v-subheader>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Senha</v-list-item-title>
              <v-list-item-subtitle>Exige a senha para que qualquer alteração passe por uma confirmação</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Filtragem de conteúdo</v-list-item-title>
              <v-list-item-subtitle>Por padrão será exibido com mais frequência aquilo com o que você mais interage</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          three-line
          subheader
        >
          <v-subheader>Configurações gerais</v-subheader>

          <v-list-item>
            <v-list-item-action>
              <v-checkbox></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Notificações</v-list-item-title>
              <v-list-item-subtitle>Notifique-me sobre atualizações, eventos, promoções e mensagens</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-checkbox></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Som</v-list-item-title>
              <v-list-item-subtitle>Toque um som ao receber uma notificação</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-checkbox></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Edição de informações</v-list-item-title>
              <v-list-item-subtitle>Restringe um limite de 3 tentativas para alterar os dados da sua conta</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action>
              <v-checkbox></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Permitir download de arquivos</v-list-item-title>
              <v-list-item-subtitle>Permite com que você baixe os arquivos compartilhados como fotos, videos, pdf, zip entre outros</v-list-item-subtitle>
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