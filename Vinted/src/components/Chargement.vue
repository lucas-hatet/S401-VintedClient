
<template>
    <div id="loader_overlay">
        <span class="loader"></span>
    </div>
</template>

<style scoped>
#loader_overlay{
    height: 100vh;
    width: 100%;
    position:fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 1000000;
    background-color: rgba(128, 128, 128, 0.493);
}

.loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: var(--blue);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
</style>

