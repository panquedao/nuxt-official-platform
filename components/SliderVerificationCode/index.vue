<template>
    <div class="qka-drag relative shadow-inner rounded-sm" :style="style">
        <div class="background w-8 h-full absolute" />
        <div class="text absolute w-full h-full text-left pl-12" onselectstart="return false" :style="{ color: textColor }">
            <slot name="content">
                {{ content }}
            </slot>
        </div>
        <div class="slider rounded-sm absolute cursor-pointer text-center bg-white " :style="{ height, width:sliderWidth }">
            <slot v-if="icon" name="icon">
                {{ icon }}
            </slot>
            <slot v-else name="icon">
               <span class="slider_icon"></span>
            </slot>
        </div>
    </div>
</template>
<script>
const debounce = (function () {
  let timer = 0
  return function (callback, ms) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})();
export default {
    name: 'SliderVerificationCode',
    model: {
        event: 'change',
        prop: 'isLock'
    },
    props: {
        selector: {
            type: [String],
            required: true
        },
        isLock: { //解锁状态
            type: [String,Boolean,Number,Object],
            required: true,
            default: false
        },
        icon: { //滑块图标
            type: [String],
            default: null
        },
        activeValue: { //滑块解锁后的值
            type: [String,Boolean,Number,Object],
            default: true
        },
        inactiveValue: { //滑块解锁前的值
            type: [String,Boolean,Number,Object],
            default: false
        },
        content: { //滑块的文字
            type: [String],
            default: `拖动最右边`
        },
        height: { //高度
            type: [String],
            default: `40px`
        },
        sliderWidth: { //滑块宽度
            type: [String],
            default: `40px`
        },
        background: { //高度
            type: [String],
            default: `#f7f9fa`
        },
        textColor: { //滑块的文字颜色
            type: [String],
            default: `#dle9fe`
        }
    },
    watch:{
        isLock(v){  //重置样式
            !v && this.init();
        }
    },
    computed: {
        style() {
            const { height, background } = this;
            return { height, 'line-height': height, background };
        },
        resize (){
            return document.body.clientWidth;
        }
    },
    mounted() {
        this.init();
        window.onresize = ()=>{
            debounce(()=>{
                this.init();
            },120);
        };
    },
    data() {
        return {
            successImg: require('~/assets/img/home/icon_success_2.png')
        }
    },
    methods: {
        /**
         * 定义一个获取DOM元素的方法-选择器
         */
        getSelector(selector) {
            return document.querySelector(selector);
        },
        /**
         * 初始化
         */
        init() {
            console.log(this.selector)
            const box = this.getSelector(`.${this.selector}`); //容器
            const background = this.getSelector(`.${this.selector} .background`); //背景
            const text = this.getSelector(`.${this.selector} .text`); //文字
            const slider = this.getSelector(`.${this.selector} .slider`);//滑块
            const distance = box.offsetWidth - slider.offsetWidth;//滑动成功的宽度（距离）
            let success =  this.inactiveValue;//是否通过验证的标志
            // 初始化的时候 清除所有属性
            slider.style.transition = null;
            background.style.transition = null;
            slider.style.left = 0 + 'px';
            background.style.width = 0 + 'px';
            text.innerHTML = this.content;
            //二、给滑块注册鼠标按下事件
            slider.onmousedown = (event) => {
                //1.鼠标按下之前必须清除掉后面设置的过渡属性
                slider.style.transition = null;
                background.style.transition = null;
                //说明：clientX 事件属性会返回当事件被触发时，鼠标指针向对于浏览器页面(或客户区)的水平坐标。
                //2.当滑块位于初始位置时，得到鼠标按下时的水平位置
                const ev = event || window.event;
                const downX = ev.clientX;
                //三、给文档注册鼠标移动事件
                document.onmousemove = (e) => {
                    const evt = e || window.event;//是为了更好的兼容IE浏览器和非ie浏览器。在ie浏览器中,window.event是全局变量,在非ie中，就需要自己传入一个参数来获取event啦，所以就有了var e = e||window.event
                    //1.获取鼠标移动后的水平位置
                    const moveX = evt.clientX;
                    //2.得到鼠标水平位置的偏移量（鼠标移动时的位置 - 鼠标按下时的位置）
                    let offsetX = moveX - downX;
                    //3.在这里判断一下：鼠标水平移动的距离 与 滑动成功的距离 之间的关系
                    if (offsetX > distance) {
                        offsetX = distance;//如果滑过了终点，就将它停留在终点位置
                    } else if (offsetX < 0) {
                        offsetX = 0;//如果滑到了起点的左侧，就将它重置为起点位置
                    }
                    //4.根据鼠标移动的距离来动态设置滑块的偏移量和背景颜色的宽度
                    slider.style.left = offsetX + 'px';
                    background.style.width = offsetX + 'px';
                    //如果鼠标的水平移动距离 = 滑动成功的宽度
                    if (offsetX == distance) {
                        //1.设置滑动成功后的样式
                        text.innerHTML = '验证通过';
                        text.style.color = '#fff';
                        slider.innerHTML = `<img src="${this.successImg}"/>`;
                        slider.style.color = '#67C23A';
                        background.style.backgroundColor = '#67C23A';
                        //2.设置滑动成功后的状态
                        success = this.activeValue;
                        //成功后，清除掉鼠标按下事件和移动事件（因为移动时并不会涉及到鼠标松开事件）
                        slider.onmousedown = null;
                        document.onmousemove = null;
                        //3.成功解锁后的回调函数
                        setTimeout(() => {
                            this.$emit('change', this.activeValue);
                            // console.log('解锁成功');
                        }, 100);
                    }
                };
                //四、给文档注册鼠标松开事件
                document.onmouseup = () => {
                    //如果鼠标松开时，滑到了终点，则验证通过
                    if (success == this.activeValue) return true;
                    //反之，则将滑块复位（设置了1s的属性过渡效果）
                    slider.style.left = 0;
                    background.style.width = 0;
                    slider.style.transition = 'left 1s ease';
                    background.style.transition = 'width 1s ease';
                    //只要鼠标松开了，说明此时不需要拖动滑块了，那么就清除鼠标移动和松开事件。
                    document.onmousemove = null;
                    document.onmouseup = null;
                };
            };
        }
    }
};
</script>
<style scoped>

.qka-drag {
    height: 2.5rem;
    line-height: 2.5rem;
}
.background {
    background-color: #409eff;
}

.slider {
    width: 2.5rem;
    height: 2.375rem;
    box-shadow: 0 0 3px rgba(0,0,0,.3);
    transition: background .2s linear;
}

.slider:hover {
    background-color: #1991fa;
    color: #fff;
}

.slider_icon {
    position: absolute;
    top: 50%;
    margin-top: -6px;
    left: 50%;
    margin-left: -6px;
    width: 14px;
    height: 10px;
    background-image: url(https://cstaticdun.126.net//2.13.5/images/icon_light.4353d81.png);
    background-position: 0 -13px;
    background-size: 32px 544px;
}
</style>