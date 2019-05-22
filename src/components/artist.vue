<template>
    <div class="artist-item">
        <div class="artist-item__name">{{ artist.name }}</div>
        <img :src="artist.image[2]['#text']" alt="Image">
    </div>
</template>

<script>
export default {
    name: 'artist',
    props: ['artist']
}
</script>

<style scoped>
    .artist-item:hover {
        box-shadow: 0 0 2px 4px black;
        cursor: pointer;
    }

    .artist-item__name {
        font-weight: bold;
        margin: 10px auto;
    }
</style>


