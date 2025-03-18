import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticleStore = defineStore('articles', () => {
    var list = ref([])
    axios.get("https://apivinted-athmexcugqgcdudf.francecentral-01.azurewebsites.net/api/Article")
        .then(response => {
            list.value = response.data
        })
    
    function GetById(id){
        axios.get("https://apivinted-athmexcugqgcdudf.francecentral-01.azurewebsites.net/api/Article/"+id)
        .then(response => {
            return response.data
        })
    }
    
    return { list, GetById }
})
