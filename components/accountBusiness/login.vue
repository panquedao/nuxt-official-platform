<template>
    <el-dialog
        title="用户登录"
        :visible.sync="visible"
        :destroy-on-close="true"
        append-to-body
        :close-on-click-modal="false"
        custom-class="qka-dialog"
        width="500px">
        <div class="mx-auto relative text-center" style="width: 383px">
            <img src="~/assets/img/home/icon_descript.png" class="inline-block mb-4" />
            <form class="form-horizontal mx-auto">
                <div class="mb-6 relative">
                    <span class="qka-input-prefix">
                        <svg-icon icon-class="icon_user" className="w-5 h-5 font-base" />
                    </span>
                    <input class="form-input focus:border-gray-400 focus:shadow-sm pl-8" type="text" v-model="form.name" placeholder="手机/用户名" />
                </div>
                <div class="mb-4 relative">
                    <span class="qka-input-prefix">
                        <svg-icon icon-class="icon_lock" className="w-5 h-5 font-base" />
                    </span>
                    <input class="form-input focus:border-gray-400 focus:shadow-sm pl-8" type="password" v-model="form.password" placeholder="密码" />
                </div>
                <div class="mb-4 flex justify-between">
                    <label class="form-checkbox block m-2 pl-4 relative"><input type="checkbox" v-model="checked" />
                        <i class="form-icon"/><span class="ml-1">下次自动登录</span></label>
                    <a @click="openForgatPassword" class="text-sm text-red-600 cursor-pointer appearance-none outline-none">忘记密码？</a>
                </div>
            </form>
        </div>
        <span slot="footer" class="dialog-footer">
            <div class="w-4/5 mx-auto pb-8">
                <button class="mb-4 py-2 px-8 hover:bg-red-500 focus:outline-none focus:border-red-700 active:bg-red-700 qka-dialog-button">
                    <span>马 上 登 录</span>
                </button>
                <div class="flex items-center text-center justify-center">
                    <span class="mr-2 text-gray-700 text-base">其他登录方式:</span>
                    <svg-icon icon-class="icon_weChat" className="w-6 h-6" />
                </div>
            </div>
        </span>
    </el-dialog>
</template>
<script>
import qkaForgatPassword from '@/components/accountBusiness/forgatPassword'

export default {
    components: {
        qkaForgatPassword
    },
    data() {
        return {
            visible: false,
            checked: true,
            form: {}
        }
    },
    methods: {
        add() {
            this.visible = true
        },
        handleSubmit() {
            this.$emit('ok')
        },
        handleOk() {

        },
        openForgatPassword() {
            this.visible = false
            this.$emit('ok', 'forgat')
        }
    }
}
</script>

<style lang="less" scoped>
.v-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: .5;
    background: #000;
}
</style>