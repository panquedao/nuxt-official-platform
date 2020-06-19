<template>
<div>
    <qka-backtop :bottom="100">
        <div class="w-16 h-16 bg-cover rounded-md bg-no-repeat qka-backtop" />
    </qka-backtop>
    <footer style="background-color: #2e2e2e" class="w-full h-full">
        <div style="color: #999" class="container-xl text-base p-5 my-0 mx-auto text-center" v-html="$store.state.footOptions.bottomContent">
        </div>
    </footer>
</div>
</template>

<script>
import QkaBacktop from '@/components/Backtop'
export default {
    name: 'global-footer',
    components: {
        QkaBacktop
    },
    created() {
        if (process.browser) {
            console.log(window.location)
            const id = String(window.location).split('/').pop()
            if (id == '') {
                document.getElementsByTagName('body')[0].className = 'scrollNone'
            } else {
                document.getElementsByTagName('body')[0].className = ''
            }

            if (this.$store.state.isGray) {
                document.getElementsByTagName('body')[0].className = 'gray'
            }
        }
    }
}
</script>

<style lang="less" scoped>

// .qka-backtop {
//     background-image: url(~assets/img/top.png);
//     transition: all .3s;
// }

// .qka-backtop:hover {
//     background-image: url(~assets/img/topHover.png);
// }

.contentWrapper {
    width: 100%;
    height: 100%;
    background-color: rgba(46, 46, 46, 1);
    .container {
        text-align: center;
        padding: 12px;
        color: #999;
        width: 1260px;
        margin: 0 auto;
        font-size: 15px;
        line-height: 1.5;
    }
}
</style>
