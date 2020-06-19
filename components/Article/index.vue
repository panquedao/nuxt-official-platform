<template>
<article class="flex flex-col mt-2 justify-between bg-white">
    <div class="article-item w-full py-3 text-base text-gray-600" v-for="item in data" :key="item.id" @click="handlerNewDetail(item.id)">
        <div class="flex items-center cursor-pointer">
            <div class="flex-1">
                <p class="truncate">{{ item.title }}</p>
            </div>
            <div class="flex-shrink-0">{{ item.createdTime }}</div>
        </div>
    </div>
    <div v-if="data.length <= 0" class="p-24 bg-gray-100 rounded text-center text-gray-600">暂无数据</div>
    <pagination class="w-full my-6" v-if="total > 0" :total="total" :pageSize="PageSize" :current-page="PageIndex" @pagechange="pageChange"></pagination>
</article>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
    components: {
        Pagination
    },
    props: {
        data: {
            type: Array,
            default: []
        },
        jumpLink: {
            type: String,
            default: 'news-newId'
        },
        total: Number,
        currentPage: Number,
        pageSize: Number
    },
    methods: {
        handlerNewDetail(id) {
            this.$router.push({
                name: this.jumpLink,
                params: {
                    newId: id
                }
            })
        },
        onChange(currentPage) {
            this.$emit('change', currentPage)
        }
    }
}
</script>
