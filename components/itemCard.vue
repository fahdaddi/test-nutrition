<template>
<div class="d-flex flex-column card rounded-lg">
    <nuxt-link tag="div" :to="`/products/${item.id}`">
    <v-card>
        <img :src="item.image" class="img" />
        <div class="foot">
        <span class="title">{{item.name}}</span>
        <p class="price">{{item.price}}$</p>
        </div>
    </v-card>
    </nuxt-link>
</div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .card {
        width: 300px;
        display: block;
        margin: 10px 0px;
        /* border: 1px solid grey; */
        cursor: pointer;
    }
    .img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .foot{
        padding: 5px 10px;
    }
    .title{
        font-size: 20px;
    }
    .price{
        text-align: right;
        color: #2E86AB;
    }
</style>