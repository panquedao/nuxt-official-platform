<template>
    <ul class="qka-pagination flex list-none items-center justify-center">
        <li :title="homePage" class="qka-pagination-item" :class="{'qka-pagination-disabled': current == 1}">
            <a @click="setCurrent(1)" class="hover:border-red-500 hover:text-red-500"> {{homePage}} </a></li>
        <li :title="prePage" class="qka-pagination-item mr-2" :class="{'qka-pagination-disabled': current == 1}">
            <a @click="setCurrent(current - 1)" class="hover:border-red-500 hover:text-red-500">
                {{prePage}}
            </a>
        </li>
        <li :title="`向前${p.val}页`" v-for="(p,index) in grouplist" class="qka-pagination-item" :class="{'qka-pagination-item-active': current == p.val}" :key="index">
            <a @click="setCurrent(p.val)" class="hover:border-red-500 hover:text-red-500"> {{ p.text }} </a>
        </li>
        <li :title="nextPage" class="qka-pagination-item" :class="{'qka-pagination-disabled': current == page}">
            <a @click="setCurrent(current + 1)" class="hover:border-red-500 hover:text-red-500">
                {{nextPage}}
            </a>
        </li>
        <li :title="lastPage" class="qka-pagination-item" :class="{'qka-pagination-disabled': current == page}">
            <a @click="setCurrent(page)" class="hover:border-red-500 hover:text-red-500"> {{lastPage}} </a></li>
    </ul>
</template>

<script>
export default {
    name: 'pagination',
    data() {
        return {
            prePage: '上一页',
            nextPage: '下一页',
            homePage: '首页',
            lastPage: '末页',
            current: this.currentPage
        }
    },
    props: {
        total: {
            type: Number,
            default: 0
        },
        pageSize: {
            type: Number,
            default: 10
        },
        currentPage: {
            type: Number,
            default: 1
        },
        pagegroup: {
            type: Number,
            default: 5,
            coerce: function (v) {
                v = v > 0 ? v : 5;
                return v % 2 === 1 ? v : v + 1;
            }
        }
    },
    computed: {
        page() {
            return Math.ceil(this.total / this.pageSize);
        },
        grouplist: function () {
            let len = this.page,
                temp = [],
                list = [],
                count = Math.floor(this.pagegroup / 2),
                center = this.current;
            if (len <= this.pagegroup) {
                while (len--) {
                    temp.push({
                        text: this.page - len,
                        val: this.page - len
                    });
                };
                return temp;
            }
            while (len--) {
                temp.push(this.page - len);
            };
            let idx = temp.indexOf(center);
            (idx < count) && (center = center + count - idx);
            (this.current > this.page - count) && (center = this.page - count);
            temp = temp.splice(center - count - 1, this.pagegroup);
            do {
                var t = temp.shift();
                list.push({
                    text: t,
                    val: t
                });
            } while (temp.length);
            if (this.page > this.pagegroup) {
                (this.current > count + 1) && list.unshift({
                    text: '•••',
                    val: list[0].val - 1
                });
                (this.current < this.page - count) && list.push({
                    text: '•••',
                    val: list[list.length - 1].val + 1
                });
            }
            return list;
        }
    },
    methods: {
        setCurrent(idx) {
            if (this.current != idx && idx > 0 && idx < this.page + 1) {
                this.current = idx;
                this.$emit('pagechange', this.current);
            }
        }
    }
}
</script>

<style lang="less" scoped>

.qka-pagination-item-active > a {
    font-weight: 500;
    background-color: #e62618;
    border: none;
    color: #fff;
}

.qka-pagination-disabled a,
.qka-pagination-disabled a:focus,
.qka-pagination-disabled a:hover {
    cursor: not-allowed;
    border-color: #ccc;
    color: #ccc;
}

</style>
