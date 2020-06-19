<template>
  <div class="w-full">
    <el-carousel height="600px" class="home-carousel">
      <el-carousel-item>
          <img src="~/assets/img/home/home_bg_1.png"/>
      </el-carousel-item>
      <el-carousel-item>
          <img src="~/assets/img/home/home_bg_3.png"/>
      </el-carousel-item>
      <el-carousel-item>
          <img src="~/assets/img/home/home_bg_4.png"/>
      </el-carousel-item>
    </el-carousel>

    <div class="w-full home-bg bg-cover bg-no-repeat py-8">
      <div class="mx-auto text-center" style="width: 1264px;">
        <div class="border-l-4 border-red-500 text-gray-700 px-2 text-left" role="alert">
          <span class="font-medium text-xl">热门游戏</span>
        </div>
        <div class="flex flex-wrap justify-between overflow-hidden">
          <qka-hover-mask v-for="item in 6" :key="item">
            <img class="w-full h-56 object-cover" src="~/assets/img/home/card_bg_1.png">
            <template v-slot:action>
              <div class="flex items-center self-center">
                <div class="flex-shrink-0">
                  <img class="rounded-lg w-32" src="~/assets/img/home/icon_logo.png">
                </div>
                <div class="mt-4 md:mt-0 md:ml-6 text-left">
                  <p class="mt-2 text-gray-400 text-sm leading-normal mb-2 truncate-clamp">xxxx</p>
                  <a class="mb-2 block bg-transparent text-gray-400 text-sm hover:text-blue py-1 px-2 border border-gray-400 rounded">
                    <span class="inline-block mr-1">安卓下载</span>
                    <svg-icon icon-class="icon_arrows_bottom" className="w-4 h-4 inline-block" />
                  </a>
                  <a class="bg-transparent block text-gray-400 text-sm hover:text-blue py-1 px-2 border border-gray-400 rounded">
                    <span class="inline-block mr-1">IOS下载</span>
                    <svg-icon icon-class="icon_arrows_bottom" className="w-4 h-4 inline-block" />
                  </a>
                </div>
              </div>
            </template>
            <template v-slot:extra>
              <div class="px-6 py-4 text-left bg-white">
                <div class="text-xl mb-2">xxxx</div>
                <p class="text-gray-500 text-sm">xxxx</p>
              </div>
            </template>
          </qka-hover-mask>
        </div>
        <nuxt-link to="/news" class="bg-transparent text-gray-500 text-sm hover:border-red-500 hover:text-red-500 py-1 px-12 border border-gray-400 rounded">
          <svg-icon icon-class="icon_add" className="w-4 h-4 inline-block" />
          <span class="inline-block mr-2">更多</span>
        </nuxt-link>
      </div>
    </div>

    <div class="w-full bg-white mb-8 p-4">
      <div class="mx-auto" style="width: 1264px">
        <div class="border-l-4 border-red-500 text-gray-700 pl-2 mb-2 text-left flex justify-between items-center" role="alert">
          <span class="font-medium text-xl">最新动态</span>
          <nuxt-link to="/list" class="bg-transparent block text-gray-500 text-sm hover:text-red-500 hover:border-red-500 px-2 border border-gray-400 rounded">更多></nuxt-link>
        </div>
        <div class="flex">
          <div class="mr-12 flex-none" style="width: 675px">
            <el-carousel height="332px" class="home-carousel">
              <el-carousel-item v-for="item in 3" :key="item">
                <a class="block">
                  <img src="~/assets/img/home/card_bg_2.png"></a>
              </el-carousel-item>
            </el-carousel>
          </div>

          <div class="flex-none" style="width: 535px">
            <div class="mb-2 text-left bg-white border-b border-solid border-gray-300">
              <div class="text-xl mb-2">奔跑吧，兄弟！中顺《跑得快》即将上线</div>
              <p class="text-gray-500 text-xs pb-2">
                一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介
              </p>
            </div>
            <nuxt-link :to="{ name: 'news-newId', params: { newId: 1 } }" class="flex items-center content-between py-2 cursor-pointer news-item" v-for="item in 5" :key="item">
                <div class="flex-1 truncate text-sm text-gray-700 truncate">xxx</div>
                <div class="flex-shrink-0 text-sm text-gray-700 max-w-xs ml-2">2020-10-01</div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QkaHoverMask from '@/components/HoverMask'
export default {
    name: 'index',
    components: {
      QkaHoverMask
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

    data() {
      return {
        value: false,
        activeName: 'second'
      }
    },

    methods: {
      handleChange(value) {
        console.log(value)
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
