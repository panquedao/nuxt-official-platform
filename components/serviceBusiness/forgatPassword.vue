<template>
<div class="p-2">
    <qka-steps :active="active">
        <qka-step title="填写基本信息"></qka-step>
        <qka-step title="输入校验信息"></qka-step>
        <qka-step title="提交成功"></qka-step>
    </qka-steps>

    <base-form v-show="active === 1"/>
    <base-validate-form v-show="active === 2"/>
    <p class="p-6 text-center text-lg" v-show="active === 3">您的问题已提交成功，我们将会在1-3个工作日内回复您，请留意通知！</p>

    <button @click="next" style="width: 40%; margin-left: 15rem" class="mb-4 py-1 px-8 hover:bg-red-500 focus:outline-none focus:border-red-700 active:bg-red-700 qka-dialog-button">
        <span>下一步</span>
    </button>
</div>
</template>

<script>
import baseForm from './forgatPasswordModules/base'
import baseValidateForm from './forgatPasswordModules/baseValidate'

export default {
    components: {
        baseForm,
        baseValidateForm
    },
    data() {
        return {
            form: {},
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