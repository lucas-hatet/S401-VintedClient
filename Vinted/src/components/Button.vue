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
        transition: ease-in-out 0.2s;
    }
    div:hover {
        transition: ease-in-out 0.2s;
        -webkit-filter: brightness(92%);
    }

    .white > div {
        background-color: white;
        color: var(--blue);
    }

    .big > div {
        height: 30px;
        font-size: 1em;
        text-align: center;
        align-content: center;
    }
    a:-webkit-any-link {
        text-decoration: none;
    }

</style>