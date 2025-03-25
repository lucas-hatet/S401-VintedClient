import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useArticleStore = defineStore('articles', () => {
    let list = ref([])
    let filter = ""
    function GetAll(){
        axios.get("https://apivinted-athmexcugqgcdudf.francecentral-01.azurewebsites.net/api/Article")
            .then(response => {
                list.value = response.data
            })

    }




    function GetById(id) {
        let article = ref()
        axios.get("https://apivinted-athmexcugqgcdudf.francecentral-01.azurewebsites.net/api/Article/" + id)
            .then(response => {
                article.value = response.data.value
            })
        return article
    }

    function GetByIdCategorie(id) {
        axios.get("https://apivinted-athmexcugqgcdudf.francecentral-01.azurewebsites.net/api/Article/GetByIdCategorie/" + id)
            .then(response => {
                list.value = response.data
            })
    }

    function filteredArticles() {
            return this.list.filter(v => v.nomArticle.toLowerCase().indexOf(this.filter.toLowerCase()) != -1)
        
    }


    return { list, GetById, filter, filteredArticles, GetByIdCategorie, GetAll }
})