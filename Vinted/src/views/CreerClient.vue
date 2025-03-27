<script setup>
import { useClientStore } from '@/stores/clients.js';

const clients = useClientStore()

const newClients = ref({
    idville: null,
    idlangue: null,
    idadresselivraison: null,
    idadressefacturation: null,
    idsexe: null,
    idphoto: null,
    pseudo: null,
    mail: null,
    motdepasse: null,
    telephone: null,
    description: null,
    nomcompteclient: null,
    datenaissance: null,
    valeurportemonnaie: null,
    datederniereconnexion: null,
    numsiret: null,
    raisonsocial: null
})
console.log(newClients)
</script>

<template>
    <input v-model="newClients.idville"></input>
    <input v-model="newClients.idlangue"></input>
    <input v-model="newClients.idadresselivraison"></input>
    <input v-model="newClients.idadressefacturation"></input>
    <input v-model="newClients.idsexe"></input>
    <input v-model="newClients.idphoto"></input>
    <input v-model="newClients.pseudo"></input>
    <input v-model="newClients.mail"></input>
    <input v-model="newClients.motdepasse"></input>
    <input v-model="newClients.telephone"></input>
    <input v-model="newClients.description"></input>
    <input v-model="newClients.nomcompteclient"></input>
    <input v-model="newClients.datenaissance"></input>
    <input v-model="newClients.valeurportemonnaie"></input>
    <input v-model="newClients.datederniereconnexion"></input>
    <input v-model="newClients.numsiret"></input>
    <input v-model="newClients.raisonsocial"></input>


</template>