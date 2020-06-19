<template>
<div class="w-full bg-gray-200 py-12">
    <div style="width: 1064px" class="mx-auto">
        <div class="flex items-center p-12 bg-white border border-solid border-gray-300 shadow mb-8">
            <div class="flex-shrink-0">
                <div class="flex flex-col">
                    <div class="bg-gray-300 bg-no-repeat bg-1 m-1 p-6 service-left">
                        <h2 class="text-lg text-blue-400 mb-4">在线客服</h2>
                        <button class="bg-blue-200 text-base text-white px-2 rounded-full">
                            <span class="inline-block mr-1">点击进入</span>
                        </button>
                    </div>
                    <div class="bg-gray-300 bg-no-repeat bg-2 m-1 p-6 service-left">
                        <h2 class="text-lg text-blue-400 mb-2">客服电话</h2>
                        <p class="text-gray-600 text-base">400-900-7991</p>
                    </div>
                    <div class="bg-gray-300 bg-no-repeat bg-3 m-1 p-6 service-left">
                        <h2 class="text-lg text-blue-400 mb-4">提交问题</h2>
                        <button class="bg-blue-200 text-base text-white px-2 rounded-full">
                            <span class="inline-block mr-1">点击进入</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <div class="bg-gray-300 bg-no-repeat bg-4 m-1 p-8 service-right">
                    <h2 class="text-lg text-blue-400">手机找回密码或账号</h2>
                    <p class="text-gray-600 text-base mb-8">适用于有绑定手机的用户，可找回此手机绑定的账号和密码！</p>
                    <button class="bg-blue-200 text-base text-white px-2 rounded-full">
                        <span class="inline-block mr-1">点击进入</span>
                    </button>
                </div>
                <div class="bg-gray-300 bg-no-repeat bg-5 m-1 p-8 service-right">
                    <h2 class="text-lg text-blue-400">申诉找回密码</h2>
                    <p class="text-gray-600 text-base mb-8">适用于没有绑定手机的用户，</p>
                    <nuxt-link :to="{ name: 'serviceCenter-issue', params: { issue: 1} }" class="bg-blue-200 text-base text-white px-2 rounded-full">
                        <span class="inline-block mr-1">点击进入</span>
                    </nuxt-link>
                </div>

            </div>
        </div>

        <div class="qka-divider qka-divider-horizontal qka-divider-with-text-center">
            <span class="qka-divider-inner-text">常见问题</span></div>

        <div class="flex items-center justify-center mb-8">
            <a class="inline-block mr-8 border boder-solid border-gray-600 text-gray-600 px-2 py-1 bg-white hover:border-red-700 hover:text-red-800" href="javascript:;">账号问题</a>
            <a class="inline-block mr-8 border boder-solid border-gray-600 text-gray-600 px-2 py-1 bg-white hover:border-red-700 hover:text-red-800" href="javascript:;">推广商城</a>
            <a class="inline-block mr-9 border boder-solid border-gray-600 text-gray-600 px-2 py-1 bg-white hover:border-red-700 hover:text-red-800" href="javascript:;">外挂举报</a>
        </div>
        <div class="flex flex-wrap items-center justify-start my-8">
            <a v-for="item in 20" :key="item" class="m-4 text-gray-600 text-sm cursor-pointer hover:text-red-700">如何注册账号</a>
        </div>
    </div>

</div>
</template>

<style lang="less" scoped>
.bg-1 {
    background-image: url(~assets/img/service/service_bg_1.png);
}
.bg-2 {
    background-image: url(~assets/img/service/service_bg_2.png);
}
.bg-3 {
    background-image: url(~assets/img/service/service_bg_3.png);
}
.bg-4 {
    background-image: url(~assets/img/service/service_bg_4.png);
}
.bg-5 {
    background-image: url(~assets/img/service/service_bg_5.png);
}

.service-left {
    width: 17rem;
    height: 7rem;
    background-size: 100% 100%;
}

.service-right {
    width: 42rem;
    height: 10.75rem;
    background-size: 100% 100%;
}
</style>
