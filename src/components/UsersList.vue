<script setup>
import { watchEffect } from 'vue';
import UserCard from './UserCard.vue';
import johnDoe from '@/assets/images/johnDoe.png';

const props = defineProps(['userList'])
watchEffect(() => {
    props.userList.users.map(item => {
        item.image = new URL(`../assets/images/${item.bild}`, import.meta.url).href
        if (item.image.endsWith('undefined')) {
            item.image=johnDoe
        }
    })
})


</script>

<template>
    <UserCard v-for="item in props.userList.users" :key="item" :user="item" /> 
</template>

<style scoped>
</style>