<script setup>
    const props = defineProps( {
        content: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    } )
</script>

<template>
    <RouterLink to="{{ link }}">
        <button>{{ content }}</button>
    </RouterLink>
</template>

<style scoped>

    button {
        font-family: 'Inter';
        margin: 0;
        list-style: none;
        text-decoration: none;
        font-size: 0.8rem;
        margin-right: 10px;
        border: solid 1px var(--blue);
        background-color: var(--blue);
        color: white;
        padding: 0.5em;
        border-radius: 5px;
    }

    .white > button {
        background-color: white;
        color: var(--blue);
    }

</style>