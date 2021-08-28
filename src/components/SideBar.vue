<template>
    <nav>
        <v-navigation-drawer 
            v-model="drawer" 
            app 
            stateless
            mini-variant 
            mini-variant-width="100"
            class="elevation-3"
        >
            <v-list>
                <v-list-item class="mb-16" router to="/account">
                    <v-list-item-avatar class="mb-5">
                        <v-badge
                            bordered
                            bottom
                            dot
                            color="green"
                            offset-x="10"
                            offset-y="10"
                        >
                            <v-avatar size="40">
                                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                            </v-avatar>
                        </v-badge>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list flat>
                    <v-list-item router to='/home'>
                        <v-list-item-content>
                            <v-icon class="mb-2" color="grey">fas fa-home</v-icon>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item router to='/chat'>
                        <v-badge 
                            dot 
                            color="blue" 
                            overlap
                            :value="spams"
                        >
                            <v-list-item-content>
                                <v-icon class="mb-2" color="grey">fas fa-comments</v-icon>
                            </v-list-item-content>
                        </v-badge>
                    </v-list-item>

                    <v-list-item router to='/schedule'>
                        <v-list-item-content>
                            <v-icon class="mb-2" color="grey">fas fa-calendar-day</v-icon>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item router to='/notifications'>
                        <v-badge 
                            color="red" 
                            dot 
                            overlap
                            :value="messages"
                        >
                            <v-list-item-content>
                                <v-icon class="mb-2" color="grey">fas fa-bell</v-icon>
                            </v-list-item-content>
                        </v-badge>
                    </v-list-item>

                    <v-list-item router to='/'>
                        <v-list-item-content>
                            <v-icon class="mb-2" color="grey">fas fa-sign-out-alt</v-icon>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

                <v-list style="position:absolute; bottom:0;" class="ml-5" flat>
                    <v-list-item>
                        <v-list-item-content>
                            <v-icon color="grey" @click.stop="showConfigDialog = true">fas fa-cog</v-icon>
                        </v-list-item-content>
                    </v-list-item>

                    <v-list-item router to='/about'>
                        <v-list-item-content>
                            <v-icon color="grey">fas fa-question-circle</v-icon>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-list>
        </v-navigation-drawer>  

        <v-app-bar 
            app 
            :class="{
                'pattern': !$vuetify.theme.dark,
                'dark_pattern': $vuetify.theme.dark,
            }"
            class="elevation-3"
        >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-spacer></v-spacer>
            
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>

        <CondigDialog v-model="showConfigDialog" />     
        
        <v-alert type="error" :value="drawIt" transition="scale-transition" dismissible>
            Não foi possível carregar sua foto de perfil!
        </v-alert>
    </nav>
</template>

<script>
import axios from 'axios'
import CondigDialog from './ConfigDialog.vue'

export default {
    data: () => ({
        drawer: true,
        drawIt: false,
        messages: 1,
        spams: 1,
        showConfigDialog: false,
    }),

    components: { CondigDialog },

    created () {
        this.getProfilePic()
    },

    watch: {
        pendingTests: {
            deep: true,
            handler: function() {
                this.drawIt = this.getProfilePic()   
            }
        },
    },

    methods: {
        getProfilePic()
        {   
            axios
            .get('https://api.github.com/users/luizmedeiros00')
            .then((res) => {
                this.user = res.data
                return true
            })
            .catch((error) => {
                this.drawIt = true
                console.log(error);
                return false
            })
        }
    }
}
</script>
