<script setup>

const props = defineProps(['user']);


</script>

<template>
    <div class="card">
        <img :src="props.user.image">
    
    <div>
    <p>
        id: {{ props.user.id }}
    </p>
    <p>
        Name: {{ props.user.namn }}
    </p>
</div>
</div>

</template>

<style scoped>
.card {
    display: flex;
    flex-direction: row;
    background-color: rgb(69, 193, 104);
    max-width: 250px;
    border: 1px solid rgb(255, 255, 255);
    box-shadow: 5px 5px 5px #45454b;
}

p {
    margin-left: 1em;
    color : rgb(30, 29, 29);
}

img {
    height: 75px;
    padding: 3px;
}
</style>