<template>
<div class="pt-12">
    <form class="form-horizontal mx-auto" style="width: 612px">
        <div class="bg-orange-100 border-orange-500 text-gray-700 p-2 mb-8 text-lg" role="alert">
            <p>温馨提示：请根据提示输入信息进行验证，验证通过后重置密码</p>
        </div>
        <div class="form-group flex mb-6">
            <label class="form-label w-40">绑定手机：</label>
            <input class="form-input focus:border-gray-400 focus:shadow-sm px-2" v-model="form.name" placeholder="请输入您的绑定手机" />
        </div>
        <div class="form-group flex mb-6">
            <label class="form-label w-40">验证码：</label>
            <div class="relative flex-1 shadow-inner border border-solid border-gray-300">
                <qka-slider-verification-code class="servicePassword-slider" selector="servicePassword-slider" height="42px" sliderWidth="42px" inactiveValue="未解锁" activeValue="已解锁" v-model="value"/>
            </div>
        </div>
        <div class="form-group flex mb-6">
            <label class="form-label w-40">手机验证码：</label>
            <input class="form-input focus:border-gray-400 focus:shadow-sm px-2" v-model="form.phone" placeholder="请输入您的手机验证码" />
        </div>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            form: {},
            value: false,
        }
    }
}
</script>