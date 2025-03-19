<script setup>
const props = defineProps(['id'])
import { useClientStore} from '../stores/clients.js'
const clients = useClientStore()

const data = clients.GetById(props.id)

</script>

<template>
    <div v-if="data">
        <p>{{ data }}</p>
        <h1>{{ data.pseudo }}</h1>
    </div>
    <div v-else>
        <p>Chargement...</p>
    </div>
</template>

<style scoped>
h1{
    height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>