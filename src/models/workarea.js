import axios from 'axios'
import api from '@/config/api'

const instance = axios.create({
  baseURL: api.baseURL
})

// regex for replace content
// const reg = /\{(.+)\}/ig
// 試聽/活動報名表大吉大利今晚吃鸡
// 21項 (簡版)狂野匪徒
export default {
  getAnnouncementList () {
    var result = instance.get(api.getAnnouncementList)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        26310: {发送人: 'Ivy Zhang', 接收人: 'Jacky', 通知标题: '緊急 例会', 通知内容: '请于18:00到公司开会', 通知状态: '未审核', 开始有效时间: '2018-05-18 08:00', 结束有效时间: '2018-05-19 08:00'}
      }})
    })
    return result
  },
  getWorkList () {
    var result = instance.get(api.getWorkList)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        24310: {活动时间: '20/04/2018', 活动名称: '試聽/活動報名表', 类型: '緊急', 状态: '更新', 活动备注: '查看详情'},
        24311: {活动时间: '20/04/2018', 活动名称: '21項 (簡版)', 类型: '緊急', 状态: '更新', 活动备注: '查看详情'}
      }})
    })
    return result
  },
  getWorkMenuList () {
    var result = instance.get(api.getWorkMenuList)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        25310: {工作区菜单名称: '最近', link: '/notice/'},
        25311: {工作区菜单名称: 'CD相关', link: '/error/'},
        25312: {工作区菜单名称: '个人JS', link: '/error/'},
        25313: {工作区菜单名称: '个人JS', link: '/error/'},
        25314: {工作区菜单名称: '个人JS', link: '/error/'},
        25315: {工作区菜单名称: '个人JS', link: '/error/'},
        25316: {工作区菜单名称: '个人JS', link: '/error/'},
        25317: {工作区菜单名称: '个人JS', link: '/error/'},
        25318: {工作区菜单名称: '个人JS', link: '/error/'}
      }})
    })
    return result
  },
  getTestStr () {
    var result = instance.get(api.getTestStr)
    result = new Promise(function (resolve, reject) {
      resolve({ data: 'MA2' })})
    return result
  },
  getTestConn () {
        this.retmsg = 'table searching...!'
				//const url = 'php_json_demo.php';
				const url = 'getlbreport.php';
				var params = new URLSearchParams();
				params.append('fdate', this.sdate);

				axios.post(url,params).then(function (response) {
					　//在内包里this是指向了axios,所以要用对象名
					  return response.data;
					   //goodsVue.retmsg	 = response.data[0];
				}).catch(function (error) {
					　　alert(error);
				});
  }
}
