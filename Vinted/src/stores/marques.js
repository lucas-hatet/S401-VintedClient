import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMarquesStore = defineStore('marques', () => {
    var list = ref([])
    axios.get("https://apivinted-athmexcugqgcdudf.francecentral-01.azurewebsites.net/api/Marque")
        .then(response => {
            list.value = response.data
        })
    
    function GetById(id){
        let marque = ref()
        axios.get("https://apivinted-athmexcugqgcdudf.francecentral-01.azurewebsites.net/api/Marque/"+id)
        .then(response => {
            marque.value= response.data.value
        })
        return marque
    }
    
    return { list, GetById }
})
