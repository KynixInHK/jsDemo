<template>
    <div>
        {{value}}
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';
    const routes = useRoute()

    const value = ref('')

    onMounted(() => {
        switch(routes.query.id) {
            case '1': value.value = 'This is the first article'; break
            case '2': value.value = 'This is the second article'; break
            case '3': value.value = 'This is the third article'; break
            case '4': value.value = 'This is the fourth article';break
        }
    })
</script>

<style scoped>

</style>