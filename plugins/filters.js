import Vue from 'vue'

function aTargetTypeFilter (value) {
    return value === 0 ? '_self' : '_blank'
}

function downTypeFilter (value) {
    return value === 1 ? '_self' : '_blank'
}

function htmlUnescape (html) {
    return html
        .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "\'")
}
  
const filters = {
    aTargetTypeFilter,
    downTypeFilter,
    htmlUnescape
}
export default filters
  
Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key])
})