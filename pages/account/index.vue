<template>
<div class="w-full bg-gray-200 py-12">
    <div style="width: 1064px" class="mx-auto">
        <div class="flex items-center bg-white border border-solid border-gray-300 px-8 py-3">
            <div class="flex-shrink-0">
                <img class="rounded-full w-20" src="~/assets/img/home/icon_logo.png">
            </div>
            <div class="flex-1 ml-2">
                <h4 class="text-lg">这是名字七个字</h4>
                <p class="mt-2 text-gray-400 text-sm leading-normal mb-2">账号：12345678</p>
            </div>
            <div class="flex-shrink-0">
                <button @click="$refs.createUpdatePasswordFormModal.edit()" class="py-1 px-8 hover:bg-red-500 focus:outline-none focus:border-red-700 active:bg-red-700 qka-dialog-button">
                    <span>修改密码</span>
                </button>
                <update-password-form ref="createUpdatePasswordFormModal"/>
            </div>
        </div>

        <el-tabs tab-position="left" class="qka-account-tab" v-model="activeName" style="height: 600px;" type="border-card">
            <el-tab-pane name="account">
                <span slot="label">账号安全</span>
                <safety-form/>
            </el-tab-pane>
        </el-tabs>
    </div>
</div>
</template>
<script>
import safetyForm from '@/components/accountBusiness/safety'
import updatePasswordForm from '@/components/accountBusiness/updatePassword'
export default {
    components: {
        safetyForm,
        updatePasswordForm
    },
    data() {
        return {
            form: {},
            activeName: 'account',
            active: 1
        }
    },
    methods: {
        onSubmit() {

        },
        next() {
            if (this.active++ > 2) this.active = 1;
        }
    }
}
</script>
