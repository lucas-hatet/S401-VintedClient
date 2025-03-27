<script setup>
    const props = defineProps( {
        content: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: false
        }
    } )
</script>

<template>
    <div v-if="type != null"><button>{{ content }}</button></div>
    <div v-else>
        <RouterLink :to="link">
            <button>{{ content }}</button>
        </RouterLink>
    </div>
        
</template>

<style scoped>

    button {
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
    button:hover {
        transition: ease-in-out 0.2s;
        -webkit-filter: brightness(92%);
        cursor: pointer;
    }

    .white button {
        background-color: white;
        color: var(--blue);
    }

    .big button {
        height: 45px;
        width: 100%;
        font-size: 1em;
        text-align: center;
        align-content: center;
    }
    a:-webkit-any-link {
        text-decoration: none;
    }

</style>