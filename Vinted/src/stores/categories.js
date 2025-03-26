import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCategorieStore = defineStore('categories', () => {
    let list = ref([])
    axios.get("https://apivinted-athmexcugqgcdudf.francecentral-01.azurewebsites.net/api/Categorie")
        .then(response => {
            list.value = response.data
        }).catch(error => {console.log(error)})
    return { list }
})
