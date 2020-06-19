<template>
<div class="w-full bg-gray-200 py-12">
    <div style="width: 1064px" class="mx-auto">

        <el-tabs tab-position="left" class="qka-account-tab" v-model="activeName" style="height: 600px;" type="border-card">
            <el-tab-pane disabled>
                <span slot="label">充值方式</span>
                充值方式
            </el-tab-pane>
            <el-tab-pane name="wechat">
                <span class="px-8 py-4" slot="label">
                    <svg-icon icon-class="icon_recharge_weChat" className="w-6 h-6 inline-block mr-1" />微信扫码</span>
                <wechat-form/>
            </el-tab-pane>
            <el-tab-pane name="zhifu">
                <span slot="label"><svg-icon icon-class="icon_rechage_alipay" className="w-6 h-6 inline-block mr-1" />支付宝扫码</span>
                支付宝扫码
            </el-tab-pane>
        </el-tabs>
    </div>
</div>
</template>
<script>
import wechatForm from '@/components/rechargeBusiness/wechat.vue'
export default {
    components: {
        wechatForm
    },

    data() {
        return {
            form: {},
            activeName: 'wechat'
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
