<template>
    <div class="p-2">
        <div class="border-l-4 border-red-500 text-gray-700 px-2 text-left" role="alert">
          <span class="font-medium text-xl">账号安全</span>
        </div>

        <div class="flex flex-col">
            <div class="relative flex items-center py-4 border-b border-solid border-gray-300">
                <div class="flex-shrink-0 self-start relative">
                    <svg-icon icon-class="icon_safety_phone" className="w-8 h-8" />
                </div>
                <div class="flex-1 ml-1">
                    <h4>
                        <span class="inline-block text-lg">绑定手机</span>
                        <span class="text-red-600 text-xs">已设置</span>
                    </h4>
                    <p class="mt-2 text-gray-500 text-sm leading-normal mb-2">用于手机登录或是修改账号密码的重要依据</p>
                </div>
                <!-- <a class="flex-shrink-0 border border-solid border-gray-300 py-1 px-3 text-red-600 rounded cursor-pointer">更换手机</a> -->
                <div class="flex-shrink-0 text-lg text-gray-500">134***0202</div>
            </div>

            <div class="relative flex items-center py-4">
                <div class="flex-shrink-0 self-start relative">
                    <svg-icon icon-class="icon_safety_wechat" className="w-8 h-8" />
                </div>
                <div class="flex-1 ml-1">
                    <h4 class="text-lg">
                        <span class="inline-block">绑定微信</span>
                    </h4>
                    <p class="mt-2 text-gray-600 text-sm leading-normal mb-2">用于微信登录或找回账号的重要依据</p>
                </div>
                <a class="flex-shrink-0 border border-solid border-gray-300 py-1 px-3 text-red-600 rounded cursor-pointer">更换手机</a>
            </div>
        </div>
    </div>
</template>