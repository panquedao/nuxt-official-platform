import axios from 'axios'

export const state = () => ({
    seo: {},
    iconGame: {},
    topIcon: {},
    menuOptions: [],
    gameList: [],
    isGray: false,
    footOptions: {},
    mobileDeviceType: ''
})
  
export const mutations = {
    SET_SEO ( state, data ) {
        state.seo = data
    },
    SET_NAV ( state, data ) {

        state.iconGame = data.iconGame || {}
        state.topIcon = data.topIcon || {}
        state.menuOptions = data.naviList.sort((a, b) => {
            return a.sort - b.sort
        })
    },
    SET_GRAY_STATUS ( state, data ) {
        state.isGray = data
    },
    SET_FOOTER( state, data ) {
        const contentFileter = (html) => {
            return html
                .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&quot;/g, "\"")
                .replace(/&#39;/g, "\'")
        }
        state.footOptions = { ...data, ...{ bottomContent: contentFileter(data.bottomContent)} } || {}
    },
    SET_GAME_LIST( state, data ) {
        state.gameList = data
    }
}

export const actions = {
    async GET_SEO ({ commit }) {
        const { data } = await axios.get(`${process.env.BASE_URL}/api/seo/info?api-version=v1`)
        commit('SET_SEO', data.data)
    },
    async GET_NAV ({ commit }) {
        const { data } = await axios.get(`${process.env.BASE_URL}/api/index/navigation?api-version=v1`)
        commit('SET_NAV', data.data)
    },
    async GET_GRAY_STATUS ({ commit }) {
        const { data } = await axios.get(`${process.env.BASE_URL}/api/grayedconfig/isgray?api-version=v1`)
        commit('SET_GRAY_STATUS', data.data)
    },
    async GET_FOOTER ({ commit }) {
        const { data } = await axios.get(`${process.env.BASE_URL}/api/index/bottominfo?api-version=v1`)
        commit('SET_FOOTER', data.data)
    },
    async GET_GAME_LIST ({ commit }) {
        const { data } = await axios.get(`${process.env.BASE_URL}/api/index/platformgameinfo`)
        commit('SET_GAME_LIST', data.data.gameList)
    }
}