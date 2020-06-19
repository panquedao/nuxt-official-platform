<template>
<div class="pt-12">
    <form class="form-horizontal w-3/4 mx-auto">
        <div class="form-group flex mb-6">
            <label class="form-label w-40">账号：</label>
            <input class="form-input focus:border-gray-400 focus:shadow-sm px-2" v-model="form.name" placeholder="账号" />
        </div>
        <div class="form-group flex mb-6">
            <label class="form-label w-40">选择游戏：</label>
            <select class="form-select focus:border-gray-400 focus:shadow-sm w-full px-2"  placeholder="请选择所在游戏" v-model="form.game">
                <option value="1">王者荣耀</option>
                <option value="2">捕鱼大决战</option>
                <option value="3">四川棋牌</option>
            </select>
        </div>
        <div class="form-group flex mb-6">
            <label class="form-label w-40">角色名称：</label>
            <input class="form-input focus:border-gray-400 focus:shadow-sm px-2" v-model="form.name" placeholder="请提供准确的角色名" />
        </div>
        <div class="form-group flex mb-6">
            <label class="form-label w-40">账号注册地点：</label>
            <div class="flex w-full justify-between">
                <select class="form-select w-1/2 focus:border-gray-400 focus:shadow-sm mr-3 px-2" v-model="form.regAddress">
                    <option value="1">王者荣耀</option>
                    <option value="2">捕鱼大决战</option>
                    <option value="3">四川棋牌</option>
                </select>
                <select class="form-select w-1/2 focus:border-gray-400 focus:shadow-sm px-2" v-model="form.regAddress2">
                    <option value="1">王者荣耀</option>
                    <option value="2">捕鱼大决战</option>
                    <option value="3">四川棋牌</option>
                </select>
            </div>
        </div>
        <div class="form-group flex mb-6">
            <label class="form-label w-40">账号常登录城市：</label>
            <div class="flex w-full justify-between">
                <select class="form-select w-1/2 focus:border-gray-400 focus:shadow-sm mr-3 px-2" v-model="form.loginAddress">
                    <option value="1">王者荣耀</option>
                    <option value="2">捕鱼大决战</option>
                    <option value="3">四川棋牌</option>
                </select>
                <select class="form-select w-1/2 focus:border-gray-400 focus:shadow-sm px-2" v-model="form.loginAddress2">
                    <option value="1">王者荣耀</option>
                    <option value="2">捕鱼大决战</option>
                    <option value="3">四川棋牌</option>
                </select>
            </div>
        </div>
        <div class="form-group flex mb-6">
            <label class="form-label w-40">联系手机：</label>
            <input class="form-input focus:border-gray-400 focus:shadow-sm px-2" v-model="form.phone" placeholder="请输入手机号码" />
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