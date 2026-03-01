<template>
<div class="container">
    <div class="content">
        <Sidebar />
        <router-view />
    </div>
</div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
</script>

<style scoped>
.container{
    display: flex;
}
.content{
    flex: 1;
    padding: 20px;
}
</style>
