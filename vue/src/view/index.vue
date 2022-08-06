<template>
    <div>
        This is index page.
        <button id="1" @click="turnToContent">第一章</button>
        <button id="2" @click="turnToContent">第二章</button>
        <button id="3" @click="turnToContent">第三章</button>
        <button id="4" @click="turnToContent">第四章</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

    const router = useRouter()
    const turnToContent = (e) => {
        router.push({name: 'content', query: {id: e.target.id}})
    }
</script>

<style scoped>

</style>