<script setup>
const props = defineProps( {
    price: {
        type: Number,
        required: true
    }
} )

    function calculBP(p) {
        if (p < 500) return p * 1.05 + 0.7;
        else return p * 1.02;
    }
</script>

<template>
    <p>{{ price.toFixed(2) }} €</p>
    <div>
        <h3>{{ calculBP(price).toFixed(2) }} €</h3>
        <h4>Protec. incluse</h4>
    </div>
</template>

<style scoped>

    div {
        display: flex;
        align-items: baseline;
        gap: 5px;
    }
</style>