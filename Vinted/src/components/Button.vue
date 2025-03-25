<script setup>
    const props = defineProps( {
        content: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: false
        }
    } )
</script>

<template>
    <RouterLink :to="link">
        <div>{{ content }}</div>
    </RouterLink>
</template>

<style scoped>

    div {
        font-family: 'Inter';
        margin: 0;
        list-style: none;
        text-decoration: none;
        font-size: 0.8em;
        border: solid 1px var(--blue);
        background-color: var(--blue);
        color: white;
        padding: 5px 8px;
        border-radius: 5px;
        justify-content: center;
    }

    .white > div {
        background-color: white;
        color: var(--blue);
    }

    .big > div {
        border-width: 2px;
        height: 30px;
        font-size: 1em;
        text-align: center;
        align-content: center;
    }

</style>