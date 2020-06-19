<template>
    <el-dialog
        title="忘记密码"
        :visible.sync="visible"
        append-to-body
        :close-on-click-modal="false"
        custom-class="qka-dialog"
        width="500px">
        <div class="mx-auto relative text-center" style="width: 383px">
            <div class="bg-orange-100 border-orange-500 text-gray-700 p-2 mb-4 text-sm" role="alert">
                <p>绑定手机的用户，可找回此手机绑定的账号和密码!</p>
            </div>
            <form class="form-horizontal mx-auto">
                <div class="form-group flex mb-6">
                    <label class="form-label w-24">绑定手机：</label>
                    <input class="form-input focus:border-gray-400 focus:shadow-sm px-2" v-model="form.name" placeholder="请输入您的手机号码" />
                </div>
                <div class="form-group flex mb-6">
                    <label class="form-label w-24">验证码：</label>
                    <div class="relative w-full flex-1 shadow-inner border border-solid border-gray-300">
                        <qka-slider-verification-code class="forgatPassword-silder" selector="forgatPassword-silder" height="42px" sliderWidth="42px" inactiveValue="未解锁" activeValue="已解锁" v-model="forgatCodeValue"/>
                    </div>
                </div>
            </form>
        </div>
        <span slot="footer" class="dialog-footer">
            <div class="w-4/5 mx-auto pb-8 text-center">
                <button class="mb-4 py-2 px-8 hover:bg-red-500 focus:outline-none focus:border-red-700 active:bg-red-700 qka-dialog-button">
                    <span>马 上 登 录</span>
                </button>
                <a class="cursor-pointer text-base hover:border-b hover:border-solid hover:border-gray-600" @click="handleAppeal">申诉找回</a>
            </div>
        </span>
    </el-dialog>
</template>

<script>
export default {
    data() {
        return {
            forgatCodeValue: false,
            visible: false,
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
        handleAppeal() {
            this.visible = false
            this.$router.push({
                name: 'serviceCenter-issue',
                params: {
                    issue: 1
                }
            })
        }
    }
}
</script>