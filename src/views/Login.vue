<template>
    <v-app name="login">
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="9">
                        <v-card class="elevation-12">
                            <v-window v-model="step">
                                <v-window-item :value="1">
                                    <v-row>
                                        <v-col cols="12" md="8">
                                            <v-card-text class="mt-12 text-center">
                                                <h1 class="text-center display-2 blue--text text--lighten-1">WEBDEV</h1>
                                                <h4 class="text-center mt-4 mb-3">Insira seu e-mail e senha para entrar!</h4>
                                                <v-form>
                                                <v-text-field
                                                    label="Email"
                                                    name="Email"
                                                    prepend-icon="email"
                                                    type="text"
                                                    clearable
                                                    :rules="emailRule"
                                                    hide-details="auto"
                                                    class="mb-5"
                                                    color="blue lighten-2"
                                                />

                                                <v-text-field
                                                    id="senha"
                                                    label="Senha"
                                                    name="Senha"
                                                    prepend-icon="lock"
                                                    counter
                                                    clearable
                                                    :type="logarPasswordType"
                                                    class="inputPass"
                                                    color="blue lighten-2"
                                                />
                                                </v-form>
                                                <div class="d-flex justify-space-between align-center">
                                                    <v-checkbox
                                                        class="type-box"
                                                        label="Mostrar senha"
                                                        @change="changeTypePassLogin"
                                                    ></v-checkbox>
                                                    <a class="text-center">Esqueceu sua senha?</a>
                                                </div>
                                            </v-card-text>
                                            <v-row class="text-center mb-6 pl-7 pr-7">
                                                <v-btn block color="blue lighten-2" dark router to="/home">ENTRAR</v-btn>
                                            </v-row>
                                        </v-col>

                                        <v-col cols="12" md="4" class="blue lighten-2">
                                            <v-card-text class="white--text mt-12">
                                                <h1 class="text-center display-1">Olá!</h1>
                                                <h3 class="text-center mt-3 mb-3">Cadastre e desfrute de todas as funcionalidades do WebDev</h3>
                                            </v-card-text>
                                            <div class="text-center mb-4">
                                                <v-btn rounded outlined dark @click="step++">CADASTRAR-SE</v-btn>
                                            </div>
                                            <v-img class="mt-10 mb-5 ml-5 mr-5" src="../assets/login.svg"></v-img>
                                        </v-col>
                                    </v-row>
                                </v-window-item>

                                <v-window-item :value="2">
                                    <v-row>
                                        <v-col cols="12" md="4" class="blue lighten-2">
                                            <v-card-text class="white--text mt-12">
                                                <h1 class="text-center display-1">Bem-vindo!</h1>
                                                <h3 class="text-center mt-3 mb-3">Possua diversos recursos como: agenda, controle financeiro, backup de arquivos e mais!</h3>
                                            </v-card-text>
                                            <div class="text-center mb-4">
                                                <v-btn rounded outlined dark @click="step--">ENTRAR</v-btn>
                                            </div>
                                            <v-img class="mt-10 mb-5 ml-5 mr-5" src="../assets/cadastro.svg"></v-img>
                                        </v-col>

                                        <v-col cols="12" md="8">
                                            <v-card-text class="mt-12 text-center">
                                                <h1 class="text-center display-2 blue--text text--lighten-1">Inicie seu Cadastro</h1>
                                                <h4 class="text-center mt-4 mb-3">Após se cadastrar, você sempre ficará por dentro de todas as novidades!</h4>
                                                <v-form>
                                                <v-text-field
                                                    label="Email"
                                                    name="Email"
                                                    prepend-icon="email"
                                                    :rules="emailRule"
                                                    hide-details="auto"
                                                    type="text"
                                                    clearable
                                                    class="mb-5"
                                                    color="blue lighten-2"
                                                />

                                                <v-text-field
                                                    id="senha"
                                                    label="Senha"
                                                    name="Senha"
                                                    prepend-icon="lock"
                                                    :rules="passwordRule"
                                                    hide-details="auto"
                                                    counter
                                                    clearable
                                                    :type="cadastroPasswordType"
                                                    class="inputPass"
                                                    color="blue lighten-2"
                                                />
                                                </v-form>
                                                <div class="d-flex justify-space-between align-center">
                                                    <v-checkbox
                                                        class="type-box"
                                                        label="Mostrar senha"
                                                        @change="changeTypePassCadastro"
                                                    ></v-checkbox>
                                                </div>
                                            </v-card-text>
                                            <v-row class="text-center mb-6 pl-7 pr-7">
                                                <v-btn block color="blue lighten-2" dark router to="/home">CADASTRAR</v-btn>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
// import axios from 'axios'

export default {

    name: 'Login',

    data: () => ({
        step: 1,
        user: {},
        logarPasswordType: 'password',
        cadastroPasswordType: 'password',
        emailRule: [
            value => !!value || 'Preencha este campo!',
            value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Formato de e-mail inválido.'
            },
        ],
        passwordRule: [
            value => !!value || 'Preencha este campo!',
            value => (value && value.length >= 8) || 'Sua senha deve conter no mínimo 8 caracteres!',
            value => (value && value.length < 40) || 'Sua senha deve conter no máximo 40 caracteres!',
        ],
    }),

    methods: {
        changeTypePassLogin() { this.logarPasswordType = this.logarPasswordType === 'password' ? 'text' : 'password' },
        changeTypePassCadastro() { this.cadastroPasswordType = this.cadastroPasswordType === 'password' ? 'text' : 'password' },
    },

    props: {
        source: String
    },
}
</script>
