<script setup>
import { useCategorieStore } from '@/stores/categories';
import { useMarquesStore } from '@/stores/marques';
const categories = useCategorieStore()
const marques = useMarquesStore()
</script>

<template>
    <h1>Ajouter un article</h1>
    <form id="articleForm">
        <div class="form-group">
            <label for="name">Nom de l'article :</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="description">Description de l'article :</label>
            <textarea id="description" name="description" rows="4" required></textarea>
        </div>
        <div class="form-group">
            <label for="category">Catégorie :</label>
            <select id="category" name="category" required>
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
            <select id="marque" name="marque" required>
                <option value="">Sélectionnez une marque</option>
                <option v-for="marque in marques.list" 
                                :value="marque.nomMarque">
                            {{ marque.nomMarque }}
                        </option>          
            </select>
        </div>

        <div class="form-group">
            <label for="marque">Marque :</label>
            <select id="marque" name="marque" required>
                <option value="">Sélectionnez une marque</option>
                <option v-for="marque in marques.list" 
                                :value="marque.nomMarque">
                            {{ marque.nomMarque }}
                        </option>          
            </select>
        </div>

        <div class="form-group">
            <label for="format">Format :</label>
            <select id="format" name="format" required>
                <option value="">Sélectionnez un format</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
            </select>
        </div>

        <div class="form-group">
            <label for="brand">Marque :</label>
            <input type="text" id="brand" name="brand" required>
        </div>

        



        <div class="form-group">
            <label for="price">Prix (€) :</label>
            <input type="number" id="price" name="price" min="0" step="0.01" required>
        </div>

        <button type="submit">Ajouter l'article</button>
    </form>

</template>