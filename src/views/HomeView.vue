<script setup>
import {inject, onMounted, ref } from 'vue';

const tid = ref(new Date().toLocaleString())
const views = inject('HomeViews');
onMounted(() => {
    views.value++;
})

</script>

<template>
    <main>
        <p>
            När sidan laddades var klockan...<br>
            {{ tid }}
        </p>
        <p>Denna sidan har vistats: 
            <b>{{ views }}</b> gånger
        </p>
        <ul>
            Två till synes lika länkar som funkar på olika sätt:
            <li>
                <a href='/my'>My view</a>
            </li>
            <li>
                <RouterLink to='/my'>My view</RouterLink>
            </li>
        </ul>
    </main>
</template>
