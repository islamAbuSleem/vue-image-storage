<template>
    <div class="ui container header`">
        <div id="nav">
            <div class="ui pointing menu">
                <router-link :to="{name:'Home'}" class="item">Image Storage</router-link> 
                <div class="right menu">
                    <a class="ui item" @click="login">
                    login
                    </a>
                </div>
             </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name:"header",
    methods: {
        ...mapActions(['login']),
    },
}
</script>

<style lang="scss" scoped>
    
</style>