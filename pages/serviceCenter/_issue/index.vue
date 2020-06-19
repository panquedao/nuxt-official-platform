<template>
<div class="w-full bg-gray-200 py-8">
    <div style="width: 1064px" class="mx-auto">
        <div class="qka-breadcrumb">
            <span class="qka-breadcrumb-link">
                <nuxt-link to="/">客服中心</nuxt-link>
            </span>
            <span class="qka-breadcrumb-separator">></span>
            <span class="qka-breadcrumb-separator">如何避免被盗</span>
        </div>

        <el-tabs tab-position="left" class="qka-account-tab" v-model="activeName" style="height: 600px; margin-top: 8px" type="border-card">
            <el-tab-pane name="forgatpassword">
                <span slot="label">找回账号密码</span>
                <forgat-password-form />
            </el-tab-pane>
            <el-tab-pane name="account">
                <span slot="label">账号申诉</span>
                <appeal-form />
            </el-tab-pane>
        </el-tabs>
    </div>
</div>
</template>
<script>
import forgatPasswordForm from '@/components/serviceBusiness/forgatPassword'
import appealForm from '@/components/serviceBusiness/appeal'
export default {
    components: {
        forgatPasswordForm,
        appealForm
    },
    vaildate({
        params
    }) {
        return /^\d+$/.test(params.issue)
    },
    data() {
        return {
            form: {},
            activeName: 'forgatpassword',
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
