<template>
<div class="relative z-10" style="box-shadow: 0 4px 3px rgba(0, 0, 0, 0.2);">
    <div class="w-full bg-gray-200">
        <div class="w-8/12 my-0 mx-auto flex justify-between py-1 text-gray-600">
            <el-popover
                placement="bottom-start"
                :visible-arrow="true"
                width="280"
                popper-class="qka-popover-phone"
                trigger="hover">
                <p class="text-center text-lg text-gray-900">手机访问官网，更快更方便</p>
                <div class="flex items-center p-4">
                    <div class="flex-shrink-0">
                        <img class="rounded-lg w-20" src="~/assets/img/home/icon_logo.png">
                    </div>
                    <div class="flex-1 ml-2">
                        <h4 class="text-lg">
                            <span class="inline-block text-gray-600">Qka游戏</span>
                        </h4>
                        <p class="mt-2 text-gray-400 text-sm leading-normal mb-2">扫一扫，立即访问</p>
                    </div>
                </div>
                <div slot="reference">
                    <a href="#" class="flex items-center px-2 -mx-2 hover:text-gray-700 font-medium">
                        <span class="mr-1 text-xs">手机版</span>
                        <svg-icon icon-class="icon_qr" className="w-4 h-4" />
                    </a>
                </div>
            </el-popover>


            <a href="#" class="flex items-center px-2 -mx-2 hover:text-gray-700 font-medium"
                @click="$refs.createLoginModal.add()">
                <span class="mr-1 text-xs">登录</span>
                <svg-icon icon-class="icon_email" className="w-4 h-4" />
            </a>
            <qka-forgat-password ref="createForgatPasswordModal"/>
            <qka-login ref="createLoginModal" @ok="handleOk"/>
        </div>
    </div>

    <header class="w-full bg-white">
        <div class="w-8/12 py-5 my-0 mx-auto box-border flex items-center justify-between content-center relative">
            <div class="relative flex-shrink-0">
                <nuxt-link to="/">
                    <img class="w-40 h-full" src="~/assets/img/home/icon_logo.png" />
                </nuxt-link>
            </div>

            <div class="flex-shrink-0 text-lg leading-5 qka-menu-horizontal flex-grow text-right pr-32">
                    <nuxt-link class="text-gray-500 mr-10 py-2 font-mudium qka-menu-item inline-block"
                      to="/" :class="{ 'isHome': $route.name !== 'index' }">首页</nuxt-link>
                    <nuxt-link to="/news" class="text-gray-500 mr-10 py-2 font-mudium qka-menu-item">游戏</nuxt-link>
                    <nuxt-link to="/recharge" class="text-gray-500 mr-10 py-2 font-mudium qka-menu-item">充值</nuxt-link>
                    <nuxt-link to="/account" class="text-gray-500 mr-10 py-2 font-mudium qka-menu-item">用户中心</nuxt-link>
                    <nuxt-link to="/serviceCenter" class="text-gray-500 mr-10 py-2 font-mudium qka-menu-item">客服中心</nuxt-link>
            </div>

            <div class="flex-none">
                <el-popover
                    v-model="isGameList"
                    placement="bottom-end"
                    :visible-arrow="false"
                    width="850"
                    popper-class="qka-popover-more"
                    trigger="click">
                    <div class="flex items-center p-4">
                        <div class="flex-shrink-0">
                            <img class="rounded-lg w-20" src="~/assets/img/home/icon_logo.png">
                        </div>
                        <div class="flex-1 ml-2">
                            <h4 class="text-lg">
                                <span class="inline-block">xxxx</span>
                                <button class="bg-red-800 text-sm text-white py-1 px-2 rounded-lg">
                                    <span class="inline-block mr-1">下载电脑版</span>
                                </button>
                            </h4>
                            <p class="mt-2 text-gray-400 text-sm leading-normal mb-2">xxxx</p>
                        </div>
                    </div>
                    <div class="border-l-4 border-red-500 text-gray-700 p-2 text-left" role="alert">
                        <p class="font-bold">游戏列表</p>
                    </div>
                    <div class="flex flex-wrap items-center">
                        <el-link type="info" v-for="item in 24" :href="item.pcUrl" :key="item" class="m-4">xxxx</el-link>
                    </div>
                    <div slot="reference">
                        <div v-if="isGameList" class="w-24 h-24 py-3 absolute text-center right-0 top-0 cursor-pointer z-50 bg-black">
                            <svg-icon icon-class="icon_delete" className="w-12 h-12 mt-2 inline-block" />
                        </div>
                        <div v-else class="w-24 py-3 text-center absolute right-0 top-0 cursor-pointer z-50 bg-red-700">
                            <svg-icon icon-class="icon_bread" className="w-12 h-12 inline-block" />
                            <span class="text-white block">游戏列表</span>
                        </div>
                    </div>
                </el-popover>
            </div>
        </div>

    </header>
</div>
</template>

<script>
import qkaLogin from '@/components/accountBusiness/login'
import qkaForgatPassword from '@/components/accountBusiness/forgatPassword'

export default {
    components: {
        qkaLogin,
        qkaForgatPassword
    },
    name: 'qka-header',
    data() {
        return {
            checked: true,
            isGameList: false
        }
    },
    methods: {
        jumpLinkTypeFilter(value) {
            const url = /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?$/;
            return url.test(value)
        },
        handleOk(value) {
            if (value === 'forgat') {
                this.$refs.createForgatPasswordModal.add()
            }
        }
    }
}
</script>
<style lang="less" scoped>
.qka-menu-horizontal > .nuxt-link-active  {
    color: #e53e3e;
    border-bottom: 2px solid #e53e3e
}

.qka-menu-horizontal > .nuxt-link-exact-active {
    color: #e53e3e;
    border-bottom: 2px solid #e53e3e
}

.isHome {
    color: #a0aec0  !important;
    border-bottom: none !important;
}
</style>
