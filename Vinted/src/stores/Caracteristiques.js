import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useCaracteristiqueStore = defineStore('caracteristiques', () => {
    let list = ref([])
    let filter = ""
    let isLoading = ref(false)
    function GetAll() {
        isLoading.value = true
        axios.get("https://apivinted-athmexcugqgcdudf.francecentral-01.azurewebsites.net/api/Caracteristique")
            .then(response => {
                list.value = response.data
                isLoading.value = false
            })
            .catch(error => { console.log(error) })




    }




    function GetById(id) {
        isLoading.value = true
        let article = ref()
        axios.get("https://apivinted-athmexcugqgcdudf.francecentral-01.azurewebsites.net/api/Caracteristique/" + id)
            .then(response => {
                article.value = response.data.value
                isLoading.value = false
            })
            .catch(error => { console.log(error) })
        return article


    }

    function GetByIdCategorie(id) {
        isLoading.value = true
        axios.get("https://apivinted-athmexcugqgcdudf.francecentral-01.azurewebsites.net/api/Article/GetByIdCategorie/" + id)
            .then(response => {
                list.value = response.data
                isLoading.value = false
            })
            .catch(error => { console.log(error) })


    }

    function filteredArticles() {
        try {
            return list.value.filter(v => v.nomArticle.toLowerCase().indexOf(this.filter.toLowerCase()) != -1)

        } catch (error) { console.log(error) }

    }


    return { list, GetById, filter, filteredArticles, GetByIdCategorie, GetAll, isLoading }
})