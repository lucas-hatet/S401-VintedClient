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
        let article = ref()
        axios.get("https://apivinted-athmexcugqgcdudf.francecentral-01.azurewebsites.net/api/Article/"+id)
        .then(response => {
            article.value= response.data.value
        })
        return article
    }
    
    return { list, GetById }
})
