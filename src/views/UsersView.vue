<script setup>
import { ref } from "vue";
import userData from "@/assets/data/users.json";
import UserCard from "@/components/UserCard.vue";
import UsersList from "@/components/UsersList.vue";
import jimmy from "@/assets/images/jimmy.jfif";
document.title = 'Users';
const users = ref(userData);
</script>

<template>
    <div class="users">
        <h1>
            Användarsida
        </h1>
        <UserCard :user="{id: 1, name: 'jimmy', image: jimmy }"/>
        <UsersList :user-list="users" />
    </div>
</template>

<style scoped>
</style>