<template>
<div style="width: 1200px" class="mx-auto">
    <div class="qka-breadcrumb">
        <span class="qka-breadcrumb-link">
            <nuxt-link to="/">首页</nuxt-link>
        </span>
        <span class="qka-breadcrumb-separator">></span>
        <span class="qka-breadcrumb-link">
            <nuxt-link :to="{ name: `${routePath}`}">{{ routeTitle }}</nuxt-link>
        </span>
        <span class="qka-breadcrumb-separator">></span>
        <span class="qka-breadcrumb-link">详情</span>
    </div>

    <div class="w-full flex mt-4" style="min-height: 553px">
        <article class="w-full p-4 rounded-sm relative text-base leading-normal bg-white break-all">
            <h1 class="text-xl pb-4 text-center text-black border-b border-solid border-gray-300">{{ newDatail.title }}</h1>
            <p class="text-gray-500 text-center py-4">日期: {{ newDatail.createdTime }}</p>
            <div v-html="newDatail.content"></div>
        </article>
        <!-- <div class="w-1/5">
            <div class="flex flex-col items-center p-12 bg-gray-300 text-center">
                <figure class="border-b border-solid border-gray-500 pb-8">
                    <img src="~/assets/img/detail/logo.png"/>
                    <figcaption class="logoTitle">跑得快</figcaption>
                </figure>
                <figure class="mt-8 bg-gray-500 pb-3 pl-3 pr-3 pt-1">
                    <figcaption>扫码下载</figcaption>
                    <img src="~/assets/img/detail/qr.png"/>
                </figure>
            </div>
        </div> -->
    </div>
    
</div>
</template>

<script>
export default {
    name: 'article-detail',
    props: {
        routePath: String,
        routeTitle: String,
        newDatail: {
            type: Object,
            default: {}
        }
    }
}
</script>
<style lang="less" scoped>
.logoTitle::after {
    content: '';
    display: block;
    border-bottom: 2px solid #999;
    width: 35px;
    padding-top: 5px;
    margin: auto;
}
</style>