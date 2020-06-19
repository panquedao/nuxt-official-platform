export default function({ $axios, redirect }) {
  $axios.interceptors.request.use(
    config => {
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.interceptors.response.use(
    response => {
      return response.data
      // if (res.code === 20000) {
      //   return res
      // } else {
      //   redirect('/404')
      // }
      // return Promise.reject(new Error(res.msg || 'Error'))
    },
    error => {
      console.log('err' + error)
      return Promise.reject(error)
    }
  )

  $axios.onError(error => {
    // const code = parseInt(error.response && error.response.status)
    
  })
}