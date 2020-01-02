import axios from 'axios'
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://127.0.0.1:8000'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/json;charset=UTF-8'// Request Method: OPTIONS
      // 'Content-Type': 'application/x-www-form-urlencoded'//Request Method: POST
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器即异常处理
axios.interceptors.response.use(response => {
  // console.log(response)
  return response
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log('错误请求')
        break
      case 401:
        console.log('未授权，请重新登录')
        break
      case 403:
        console.log('拒绝访问')
        break
      case 404:
        console.log('请求错误,未找到该资源')
        break
      case 405:
        console.log('请求方法未允许')
        break
      case 408:
        console.log('请求超时')
        break
      case 500:
        console.log('服务器端出错')
        break
      case 501:
        console.log('网络未实现')
        break
      case 502:
        console.log('网络错误')
        break
      case 503:
        console.log('服务不可用')
        break
      case 504:
        console.log('网络超时')
        break
      case 505:
        console.log('http版本不支持该请求')
        break
      default:
        console.log(`连接错误${err.response.status}`)
    }
  } else {
    console.log('连接到服务器失败')
  }
  return Promise.resolve(err.response)
})

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export const server = {
  /** homepage**/
  // 地图
  showMap: function (paramObj) {
    return post('/show_map', paramObj)
  },
  // 职业排名
  jobRank: function (paramObj) {
    return post('/job_rank', paramObj)
  },
  // 薪资排名
  salaryRank: function (paramObj) {
    return post('/salary_rank', paramObj)
  },
  // 用户信息
  showUser: function (paramObj) {
    return post('/show_user', paramObj)
  },
  // 热门话题
  hotTopic: function (paramObj) {
    return post('/hot_topic', paramObj)
  },
  // 推荐职业
  bestJob: function (paramObj) {
    return post('/best——job', paramObj)
  },
  /** 职业详情页 */
  // 相似度
  simrankJob: function (paramObj) {
    return post('/simrank_job', paramObj)
  },
  // 职业信息
  jobInfo: function (paramObj) {
    return post('/job_info', paramObj)
  },
  // 职业薪资城市排名
  jobSalaryCityRank: function (paramObj) {
    return post('/job_salary_city_rank', paramObj)
  },
  /** 城市详情页 */
  // 城市热门职业排名
  cityHotJobRank: function (paramObj) {
    return post('/city_hot_job_rank', paramObj)
  },
  // 城市职业薪资排名
  cityJobSalaryRank: function (paramObj) {
    return post('/city_job_salary_rank', paramObj)
  }
}
