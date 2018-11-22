<template>
    <div>
        <div class="main">{{name}}</div>
        <router-view style='color:red'></router-view>
        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger">danger</mt-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: "vue+webpack+555"
        }
    }, created() {
        this.$ajax.get('http://104.129.21.88:8002/get')
            .then(res => {
                console.log(res);
            })


    }
}
</script>
<style>
.main {
    color: #ff6600;
}
</style>
