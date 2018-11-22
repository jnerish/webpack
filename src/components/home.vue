<template>
    <div>
        I am Home
        <router-link :to="{name:'music'}">音乐</router-link>
        <router-link :to="{name:'movie'}">影视</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style>
</style>
