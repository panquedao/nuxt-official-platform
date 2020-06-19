<template>
    <div class="w-full">
        <div class="w-8/12 mx-auto p-4 bg-gray-200 mt-16">
            <div class="flex items-start">
                <div class="flex-1">
                    <div style="height: 328px" class="object-cover bg-cover rounded-t text-center overflow-hidden list-card-bg bg-cover bg-no-repeat"></div>
                </div>
                <div class="flex-1 leading-normal ml-4">
                    <div class="mb-8">
                        <div class="text-gray-900 font-bold text-xl mb-2">奔跑吧，兄弟！中顺《跑得快》即将上线</div>
                        <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, 
                            exercitationem praesentium nihil.</p>
                    </div>
                    <div class="flex items-center justify-end">
                        <button class="bg-transparent text-gray-500 text-sm hover:text-blue py-1 px-4 border border-gray-400 rounded">
                            <span class="inline-block mr-2">查看详情</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-8/12 mx-auto p-4 mt-8">
            <ul class="tab flex justify-center border-b border-solid border-gray-500">
                <li class="flex-shrink-0 w-32" v-for="item in articleTypeList" @click="tabChanged(item.code)" :key="item.id">
                    <a class="text-center block text-gray-700 p-3 relative text-lg cursor-pointer" 
                        :class="{ 'active': item.code === activeTabIndex }">
                        {{ item.name }}
                    </a>
                </li>
            </ul>
            <article-panel :data="newsData" :total="total" :currentPage="PageIndex" :pageSize="PageSize" @change="onPageChange" />
        </div>
    </div>
</template>

<script>
import ArticlePanel from '@/components/Article'
export default {
    components: {
        ArticlePanel
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
      // await store.dispatch('GET_GRAY_STATUS')
      await store.dispatch('GET_FOOTER')
    },
    data() {
        return {
            total: 0,
            PageSize: 10,
            PageIndex: 1,
            activeTabIndex: null,
            articleTypeList: [],
            newsData: []
        }
    },
    async asyncData({
        app,
        params
    }) {
        const {
            data
        } = await app.$axios.get(`${process.env.BASE_URL}/api/articletypes/information?includeAllArticles=true&api-version=v1`)

        const menu = data.filter(item => {
            switch (item.code) {
                case 'competition_news':
                    break;
                case 'outsidepage':
                    break
                default:
                    return item
                    break;
            }
        })

        const newsData = await app.$axios.get(`${process.env.BASE_URL}/api/news?PageIndex=1&PageSize=10&api-version=v1`)

        return {
            articleTypeList: menu,
            newsData: newsData.data.data,
            activeTabIndex: data[0].code,
            total: newsData.data.recordsTotal
        }
    },
    methods: {
        async getNews() {
            const {
                data
            } = await this.$axios.get(`${process.env.BASE_URL}/api/news?PageIndex=${this.PageIndex}&PageSize=${this.PageSize}&api-version=v1`)
            this.newsData = data.data
            this.total = data.recordsTotal
        },
        tabChanged(code) {
            this.activeTabIndex = code
            this.newsData = []
            this.PageIndex = 1
            if (code === 'default') {
                this.getNews()
            } else {
                this.getOtherNews()
            }
        },
        async getOtherNews() {
            const {
                data
            } = await this.$axios.get(`${process.env.BASE_URL}/api/news/name/${this.activeTabIndex}?PageIndex=${this.PageIndex}&PageSize=10&api-version=v1`)
            this.newsData = data.data
            this.total = data.recordsTotal
        },
        onPageChange(pageNumber) {
            this.PageIndex = pageNumber
            if (this.activeTabIndex === 'default') {
                this.getNews()
            } else {
                this.getOtherNews()
            }
        },
        handlerNewDetail(id) {
            this.$router.push({
                name: 'news-newId',
                params: {
                    newId: id
                }
            })
        },
    }
}
</script>
<style lang="less" scoped>
.tab a.active,
.tab a.hover {
    background-color: #c42e2e;
    color: #fff;
}
</style>