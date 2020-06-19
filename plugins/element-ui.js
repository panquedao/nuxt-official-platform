import Vue from 'vue'
import locale from 'element-ui/lib/locale/lang/en'

import {
    Tabs,
    TabPane,
    Carousel,
    CarouselItem,
    Popover,
    Dialog,
    Link,
} from 'element-ui'

export default () => {
    Vue.use(Tabs, { locale })
    Vue.use(TabPane, { locale })
    Vue.use(Carousel, { locale })
    Vue.use(CarouselItem, { locale })
    Vue.use(Popover, { locale })
    Vue.use(Dialog, { locale })
    Vue.use(Link, { locale })
}
