<template>
    <div class="ui container header`">
        <div id="nav">
            <div class="ui pointing menu">
                <router-link :to="{name:'imageList'}" class="item">Image Storage</router-link> 
                <div class="right menu">
                    <template v-if="isLoggedIn">
                        <router-link :to="{name:'imageList'}" class="item">Gallery</router-link> 
                        <router-link :to="{name:'uploadForm'}" class="item">Upload</router-link> 
                        <a class="item" @click="logout">Logout</a> 
                    </template>
                    <a  class="ui item" @click="login" v-else>
                    login
                    </a>
                </div>
             </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name:"appHeader",
    computed: {
        ...mapGetters(['isLoggedIn'])
    },
    methods: {
        ...mapActions(['login', 'logout']),
    },
}
</script>

<style lang="scss" scoped>
    
</style>