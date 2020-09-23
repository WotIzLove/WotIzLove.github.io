<template>
    <div class="images">
            <GalleryItem
                v-for="image in imageList"
                :key="image.id"
                :image="image"
            />
    </div>
</template>

<script>
import GalleryItem from '@/components/GalleryItem'
export default {
    props: ['imageList'],
    components: {
        GalleryItem
    }
}
</script>

<style scoped>
    .images {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        max-width: 1200px;
        margin: 0 auto;
    }
</style>