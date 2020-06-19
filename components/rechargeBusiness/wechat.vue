<template>
<div class="p-8">
    <form class="form-horizontal w-3/4 mx-auto">
        <div class="flex mb-6">
            <label class="form-label w-40">充值账号：</label>
            <input class="form-input focus:border-gray-400 focus:shadow-sm px-2" v-model="form.name" placeholder="账号" />
        </div>
        <div class="flex mb-6">
            <label class="form-label w-40">充值到：</label>
            <div class="flex items-center">
                <svg-icon icon-class="icon_recharge" className="w-6 h-6 inline-block mr-1" />
                <span>游戏</span>
            </div>
            
        </div>
        <div class="flex mb-6">
            <label class="form-label w-40">选择游戏：</label>
            <select class="form-select w-1/2 focus:border-gray-400 focus:shadow-sm mr-3 px-2" v-model="form.game">
                <option value="1">王者荣耀</option>
                <option value="2">捕鱼大决战</option>
                <option value="3">四川棋牌</option>
            </select>
        </div>
        <div class="flex mb-6">
            <label class="form-label w-40">选择金额：</label>
            <div class="w-full flex flex-wrap justify-start relative">
                <label class="label-radio border border-solid border-yellow-300 p-2 block bg-yellow-200 w-24 mr-4 mb-4 rounded relative cursor-pointer" v-for="item in 6" :key="item">
                    <input type="radio" name="money" class="opacity-0" :value="10 + '' + item" checked v-model="moneyCheck" />10元
                    <div class="triangle"></div>
                </label>
            </div>
        </div>
        <div class="flex">
            <button style="width: 40%" class="mb-4 ml-40 py-1 px-8 hover:bg-red-500 focus:outline-none focus:border-red-700 active:bg-red-700 qka-dialog-button">
                <span>立即充值</span>
            </button>
        </div>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            moneyCheck: false,
            form: {}
        }
    }
}
</script>