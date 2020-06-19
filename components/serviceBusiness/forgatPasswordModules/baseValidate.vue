<template>
<div class="pt-12">
    <form class="form-horizontal w-3/4 mx-auto">
        <div class="form-group flex mb-6">
            <label class="form-label w-40">新密码：</label>
            <input class="form-input focus:border-gray-400 focus:shadow-sm px-2" v-model="form.account" />
        </div>
        <div class="form-group flex mb-6">
            <label class="form-label w-40">确认登录密码：</label>
            <input class="form-input focus:border-gray-400 focus:shadow-sm px-2" v-model="form.confirmPwd" />
        </div>
        <div class="form-group flex mb-6">
            <label class="form-label w-40">新二级密码：</label>
            <input class="form-input focus:border-gray-400 focus:shadow-sm px-2" v-model="form.twoPwd"/>
        </div>
        <div class="form-group flex mb-6">
            <label class="form-label w-40">问题描述：</label>
            <textarea class="form-input focus:border-gray-400 focus:shadow-sm px-2" v-model="form.des"/>
        </div>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            form: {}
        }
    }
}
</script>