<template>
<div>
    <header class="other-page-banner"></header>
    <article class="detailBox">
        <div class="qka-card">
            <div class="qka-card-head">
                <h1>{{ newDatail.title }}</h1>
            </div>
            <div class="qka-card-body">
                <div v-html="newDatail.content"></div>
            </div>
        </div>
    </article>
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
    layout: 'other',
    async fetch({
        store
    }) {
        await store.dispatch('GET_GRAY_STATUS')
        await store.dispatch('GET_FOOTER')
    },
    head() {
        return {
            title: this.newDatail.title
        }
    },
    data() {
        return {
            newDatail: {}
        }
    },
    async mounted() {
        if (process.browser) {
            const url = window.location
            const id = String(url).split('/').pop()
            const {
                data
            } = await this.$axios.get(`${process.env.BASE_URL}/api/news/${id}?api-version=v1`)

            this.newDatail = {
                ...data,
                ...{
                    content: contentFileter(data.content)
                }
            } || {}

            if (this.$store.state.isGray) {
                document.getElementsByTagName('body')[0].className = 'gray'
            }
        }
    }
}
</script>

<style>
/* html,
body {
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: auto;
    -ms-overflow-style: auto;
} */
</style>
