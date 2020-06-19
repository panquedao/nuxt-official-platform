<template>
    <el-dialog
        title="修改密码"
        :visible.sync="visible"
        append-to-body
        :close-on-click-modal="false"
        custom-class="qka-dialog"
        width="500px">
        <div class="mx-auto relative text-center" style="width: 400px">
            <form class="form-horizontal">
                <div class="form-group flex mb-6">
                    <label class="form-label w-28">旧密码：</label>
                    <input class="form-input focus:border-gray-400 focus:shadow-sm px-2" v-model="form.name" placeholder="请输入您的手机号码" />
                </div>
                <div class="form-group flex mb-6">
                    <label class="form-label w-28">新密码：</label>
                    <input class="form-input focus:border-gray-400 focus:shadow-sm px-2" v-model="form.name" placeholder="请输入您的手机号码" />
                </div>
                <div class="form-group flex mb-6">
                    <label class="form-label w-28">确认新密码：</label>
                    <input class="form-input focus:border-gray-400 focus:shadow-sm px-2" v-model="form.name" placeholder="请输入您的手机号码" />
                </div>
                <div class="form-group flex mb-6">
                    <label class="form-label w-28">验证码：</label>
                    <div class="relative w-full flex-1 shadow-inner border border-solid border-gray-300">
                        <qka-slider-verification-code class="updatePassword-slider" selector="updatePassword-slider" height="42px" sliderWidth="42px" inactiveValue="未解锁" activeValue="已解锁" v-model="updatePwdValue"/>
                    </div>
                </div>
            </form>
        </div>
        <span slot="footer" class="dialog-footer">
            <div class="w-4/5 mx-auto pb-8 text-center">
                <button class="mb-4 py-2 px-8 hover:bg-red-500 focus:outline-none focus:border-red-700 active:bg-red-700 qka-dialog-button">
                    <span>确定</span>
                </button>
            </div>
        </span>
    </el-dialog>
</template>

<script>
export default {
    data() {
        return {
            updatePwdValue: false,
            visible: false,
            form: {}
        }
    },
    methods: {
        edit() {
            this.visible = true
        },
        handleSubmit() {
            this.$emit('ok')
        }
    }
}
</script>
<style lang="less" scoped>
.w-28 {
    width: 7rem;
}
</style>