import axios from 'axios'
import api from '@/config/api'

const instance = axios.create({
  baseURL: api.baseURL
})

// regex for replace content
// const reg = /\{(.+)\}/ig

export default {
  getNoticeList () {
    var result = instance.get(api.getNoticeList)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        14312: {上架日期: '21/02/2018', 內文: '今晚23:00播放红富士浇雨13，并于明早5:30重播。请家人们知悉，mfl', 類型: '一般'},
        14313: {上架日期: '21/02/2018', 內文: '今晚23:00播放红富士浇雨13，并于明早5:30重播。请家人们知悉，mfl', 類型: '重要'}
      }})
    })
    return result
  },
  getUrgentList () {
    var result = instance.get(api.getUrgentList)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        14314: {上架日期: '19/04/2018', 內文: '今晚23:00播放红富士浇雨13，并于明早5:30重播。请家人们知悉，mfl', 類型: '一般'},
        14315: {上架日期: '19/04/2018', 內文: '今晚23:00播放红富士浇雨13，并于明早5:30重播。请家人们知悉，mfl', 類型: '一般'}
      }})
    })
    return result
  }
}
