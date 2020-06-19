<template>
    <div class="w-full">
        <div class="mx-auto mt-4" style="width: 1200px">
            <div class="flex flex-wrap justify-between overflow-hidden">
                <hover-mask v-for="item in 3" :key="item">
                    <img class="w-full h-full object-cover" style="height: 23rem" src="~/assets/img/game/game_1.png">
                    <template v-slot:action>
                    <div class="flex flex-col items-center text-center pt-12">
                        <figure>
                            <img src="~/assets/img/game/game_logo.png"/>
                            <figcaption class="logoTitle pt-6">xxxx</figcaption>
                        </figure>
                        <a class="mb-2 bg-transparent text-gray-400 mt-8 text-sm hover:text-blue py-1 px-2 border border-gray-400 rounded">
                            <span class="inline-block mr-1">进入官网></span>
                        </a>
                    </div>
                    </template>
                </hover-mask>
            </div>
            <div class="qka-divider qka-divider-horizontal qka-divider-with-text-center">
                <span class="qka-divider-inner-text text-xl font-medium">全部游戏</span></div>

            <div class="flex flex-col items-center mt-4">
                <div class="flex border-b border-solid border-gray-300 mb-8 w-full last:border-b-0" v-for="item in 5" :key="item">
                    <figure class="flex-shrink-0">
                        <img src="~/assets/img/game/game_logo.png">
                    </figure>
                    <div class="p-2 flex-grow">
                        <h3 class="text-xl text-gray-800">xxxx</h3>
                        <p class="text-gray-500 text-base">xxxx</p>

                        <div class="flex justify-end py-4">
                            <a target="blank" class="bg-transparent inline-block text-gray-500 text-sm hover:text-blue px-2 border border-gray-400 rounded mr-4">
                                <span>进入官网></span>
                            </a>
                            <a target="blank" class="bg-transparent inline-block text-gray-500 text-sm hover:text-blue px-2 border border-gray-400 rounded">
                                <span>下载电脑版></span>
                            </a>
                        </div>
                    </div>
                    <div class="ml-2 mb-6 flex-shrink-0">
                        <figure class="px-2 pb-2 pt-1 bg-gray-200 rounded text-center w-full mx-auto">
                            <figcaption class="text-gray-600 text-base pb-1">扫码下载</figcaption>
                            <img src="~/assets/img/game/game_qr.png" class="h-full inline-block scan-qr" />
                        </figure>
                    </div>

                </div>
            </div>

            <pagination class="mb-8" v-if="total > 1" :total="total" :pageSize="PageSize" :current-page="PageIndex" @pagechange="onChange"/>
        </div>
    </div>
</template>

<script>
import hoverMask from '@/components/HoverMask'
import pagination from '@/components/Pagination'

export default {
    components: {
        hoverMask,
        pagination
    },

    data() {
        return {
            total: 12,
            PageSize: 5,
            PageIndex: 1
        }
    },

    async asyncData({
      app,
      params,
      store
    }) {
      try {

      } catch (e) {
            console.log('interface timeout or format error => ', e)
      }
    },

    methods: {
        onChange(value) {
            this.loadData(value)
        },
        async loadData(value) {

        }
    }
}
</script>
<style lang="less" scoped>
.logoTitle::after {
    content: '';
    display: block;
    border-bottom: 2px solid #fff;
    width: 60%;
    padding-top: 8px;
    margin: auto;
}
.scan-qr {
    width: 87px;
    height: 87px;
}
</style>
