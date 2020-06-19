<template>
<div class="w-full bg-gray-200 py-12">
    <qka-article-detail routePath="news" routeTitle="新闻列表" :newDatail="newDatail"/>
</div>
</template>
<script>
const contentFileter = (html) => {
    return html
        .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "\'")
}

export default {
    name: 'newDatail',
    vaildate({
        params
    }) {
        return /^\d+$/.test(params.newId)
    },
    head() {
        return {
            title: `${this.$store.state.topIcon.pcSiteName}`
        };
    },
    async fetch({
        store
    }) {
        await store.dispatch('GET_SEO')
        await store.dispatch('GET_NAV')
        await store.dispatch('GET_GRAY_STATUS')
        await store.dispatch('GET_FOOTER')
    },
    async asyncData({
        app,
        params
    }) {
        const {
            data
        } = await app.$axios.get(`${process.env.BASE_URL}/api/news/${params.newId}?api-version=v1`)

        return {
            newDatail: {
                ...data,
                ...{
                    content: contentFileter(data.content)
                }
            } || {}
        }
    },
}
</script>