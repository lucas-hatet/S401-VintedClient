<script setup>
import { useCategorieStore } from '@/stores/categories';
import { useMarquesStore } from '@/stores/marques';
import { useCaracteristiqueStore } from '@/stores/caracteristiques';
import { useCouleurStore } from '@/stores/couleurs';
import { useformatcolisStore } from '@/stores/formatcolis';
import { useArticleStore } from '@/stores/articles';
import { ref } from 'vue';

const categories = useCategorieStore()
const marques = useMarquesStore()
const caracteristiques = useCaracteristiqueStore()
const couleurs = useCouleurStore()
const formats = useformatcolisStore();
const articles = useArticleStore();

const name = ref('')
const description = ref('')
const category = ref('')
const marque = ref('')
const taille = ref('')
const matiere = ref('')
const etat = ref('')
const largeur = ref('')
const longueur = ref('')
const couleur = ref('')
const formatColis = ref('')
const price = ref('')



function AjouterArticle(){

    const newArticle = {
        nomArticle: name.value,
        description: description.value,
        categorieId: category.value,
        marque: marque.value,
        taille: taille.value,
        matiere: matiere.value,
        etat: etat.value,
        largeur: largeur.value,
        longueur: longueur.value,
        couleur: couleur.value,
        formatColis: formatColis.value,
        prix: parseFloat(price.value)
    }
    event.preventDefault()
    console.log(newArticle)
    articles.add(newArticle)
}

console.log(formats)
</script>

<template>
    <h1>Ajouter un article</h1>
    <form id="articleForm">
        <div class="form-group">
            <label for="name">Nom de l'article :</label>
            <input type="text" v-model="name" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="description">Description de l'article :</label>
            <textarea id="description" v-model="description" name="description" rows="4" required></textarea>
        </div>
        <div class="form-group">
            <label for="category">Catégorie :</label>
            <select id="category" v-model="category" name="category" required>
                <option value="">Sélectionnez une catégorie</option>
                <optgroup v-for="categorie in categories.list" :label="categorie.libelleCategorie">
                        <option v-for="sousCategorie in categorie.categoriesEnfants" 
                                :value="sousCategorie.idCategorie">
                            {{ sousCategorie.libelleCategorie }}
                        </option>
                    </optgroup>                
            </select>
        </div>

        <div class="form-group">
            <label for="marque">Marque :</label>
            <select id="marque" v-model="marque" name="marque" required>
                <option value="">Sélectionnez une marque</option>
                <option v-for="marque in marques.list" 
                                :value="marque.nomMarque">
                            {{ marque.nomMarque }}
                        </option>          
            </select>
        </div>

        <div v-if="caracteristiques.list.length > 0">
            <div class="form-group">
            <label for="Taille">Taille :</label>
            <select id="Taille" v-model="taille" name="Taille" required>
                <option value="">Sélectionnez une Taille</option>
                <option v-for="taille in caracteristiques.list[0].valeurs" 
                                :value="taille.libValeur">
                            {{ taille.libValeur }}
                        </option>          
            </select>
        </div>

        <div class="form-group">
            <label for="matiere">Matière :</label>
            <select id="matiere" v-model="matiere" name="Matière" required>
                <option value="">Sélectionnez une Matière</option>
                <option v-for="matiere in caracteristiques.list[1].valeurs" 
                                :value="matiere.libValeur">
                            {{ matiere.libValeur }}
                        </option>          
            </select>
        </div>

        <div class="form-group">
            <label for="etat">état :</label>
            <select id="etat" v-model="etat" name="etat" required>
                <option value="">Sélectionnez un état</option>
                <option v-for="etat in caracteristiques.list[2].valeurs" 
                                :value="etat.libValeur">
                            {{ etat.libValeur }}
                        </option>          
            </select>
        </div>

        <div class="form-group">
            <label for="largeur">Largeur :</label>
            <select id="largeur" v-model="largeur" name="largeur" required>
                <option value="">Sélectionnez une Largeur</option>
                <option v-for="largeur in caracteristiques.list[3].valeurs" 
                                :value="largeur.libValeur">
                            {{ largeur.libValeur }}
                        </option>          
            </select>
        </div>

        <div class="form-group">
            <label for="longueur">Longueur :</label>
            <select id="longueur" v-model="longueur" name="longueur" required>
                <option value="">Sélectionnez une Longueur</option>
                <option v-for="longueur in caracteristiques.list[4].valeurs" 
                                :value="longueur.libValeur">
                            {{ longueur.libValeur }}
                        </option>          
            </select>
        </div>

        <div class="form-group">
            <label for="couleur">Couleur :</label>
            <select id="couleur" v-model="couleur" name="couleur" required>
                <option value="">Sélectionnez une Couleur</option>
                <option v-for="couleur in couleurs.list" 
                                :value="couleur.nomCouleur">
                            {{ couleur.nomCouleur }}
                        </option>          
            </select>
        </div>

        <div class="form-group">
            <label for="formatColis">Format Colis :</label>
            <select id="formatColis" v-model="formatColis" name="formatColis" required>
                <option value="">Sélectionnez un Format</option>
                <option v-for="format in formats.list" 
                                :value="format.libelleFormat">
                            {{ format.libelleFormat }}
                        </option>          
            </select>
        </div>

        </div>
       





        



        <div class="form-group">
            <label for="price">Prix (€) :</label>
            <input type="number" v-model="prix" id="price" name="price" min="0" step="0.01" required>
        </div>

        <button type="submit" @click="AjouterArticle()">Ajouter l'article</button>
    </form>

</template>