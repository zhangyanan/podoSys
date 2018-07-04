import axios from 'axios'
import api from '@/config/api'

const instance = axios.create({
  baseURL: api.baseURL
})

export default {
  getListStr(){
    var result = instance.get(api.getListStr)
    result = new Promise(function (resolve, reject) {
      resolve({data:"list"})})
    return result
  },
  getTestConn(){
				const url = 'http://207.246.102.163/podoSys/index/getUserInfo'
				//var params = ''
				var params = JSON.stringify({
				});
				return new Promise((resolve, reject) => {
					axios.post(url, params)
						.then(response => {
							//alert(response.data.userId);
							resolve(response.data);
						})
						.catch((error) => {
						 console.log(error)
							reject(error)
						})
				})
	},
	
		getformvalues(){
			
	
			const url = 'http://207.246.110.27/lifetree-0.1/callcenter/sp_get_form_values_low'
			
			return new Promise((resolve, reject) => {
				axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8"
				axios.post(url, JSON.stringify({ 	
					"in_foldername":"GGAccount",
					"in_formname":"21项表单",
					"in_username":"admin",
					"in_keynames":"姓名,",
					"in_keyvalues":"王大,",
					"in_fieldnames":"姓名,微信,手机,"
				 }))
					.then(response => {
						//alert(response.data.userId);, 'application/json;charset=UTF-8;Access-Control-Allow-Origin:*'
						resolve(response.data);
					})
					.catch((error) => {
					 console.log(error)
						reject(error)
					})
			})
		}
}
