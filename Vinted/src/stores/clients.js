import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useClientStore = defineStore('clients', () => {
    

    function GetById(id){
        let client = ref()
        axios.get("https://apivinted-athmexcugqgcdudf.francecentral-01.azurewebsites.net/api/client/"+id)
        .then(response => {
            client.value= response.data.value
        })
        return client
    }

    function Post(client){
        axios.post("https://apivinted-athmexcugqgcdudf.francecentral-01.azurewebsites.net/api/client")
        .then(response => {
        })
        return client
    }
    
    return { GetById, newClients, Post }
})
