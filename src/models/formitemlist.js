import axios from 'axios'
import api from '@/config/api'

const instance = axios.create({
  baseURL: api.baseURL
})

export default {
	getfolderlist(){
		var qs = require('qs');

		const url = 'http://207.246.110.27/lifetree-0.1/callcenter/sp_get_folder_list'
								//http://207.246.110.27/lifetree-0.1/callcenter/sp_get_form_values_low
		
		return new Promise((resolve, reject) => {
			axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8"
			axios.post(url, qs.stringify({ 	
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
					"in_fieldnames":"姓名,引导人,微信,手机,状态,生日,涉外时间,"
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
		},
		
		getformvalues_low(data){
			const url = 'http://207.246.110.27/lifetree-0.1/callcenter/sp_get_form_values_low'
			
			return new Promise((resolve, reject) => {
				axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8"
				axios.post(url, data)
					.then(response => {
						//alert(response.data.userId);, 'application/json;charset=UTF-8;Access-Control-Allow-Origin:*'
						console.log(JSON.stringify(response.data))
						resolve(response.data);
					})
					.catch((error) => {
					 console.log(error)
						reject(error)
					})
			})
		},

		//根据蝈蝈姓名得到21项的关键数据
		get21FormValuesByName(in_userName){
			const url = 'http://207.246.110.27/lifetree-0.1/callcenter/sp_get_form_values_low'
			in_userName = in_userName +','

			return new Promise((resolve, reject) => {
				axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8"
				axios.post(url, JSON.stringify({ 	
					"in_foldername":"GGAccount",
					"in_formname":"21项表单",
					"in_username":"admin",
					"in_keynames":"姓名,",
					"in_keyvalues":in_userName,
					"in_fieldnames":"姓名,引导人,微信,手机,状态,生日,涉外时间,性别,阶段,"
				 }))
					.then(response => {
						//alert(response.data.userId);, 'application/json;charset=UTF-8;Access-Control-Allow-Origin:*'
						console.log(JSON.stringify(response.data))
						resolve(response.data);
					})
					.catch((error) => {
					 console.log(error)
						reject(error)
					})
			})
		},

		//根据蝈蝈微信得到21项的关键数据
		get21FormValuesByWechat(in_weChat){
			const url = 'http://207.246.110.27/lifetree-0.1/callcenter/sp_get_form_values_low'
			in_weChat = in_weChat +','

			return new Promise((resolve, reject) => {
				axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8"
				axios.post(url, JSON.stringify({ 	
					"in_foldername":"GGAccount",
					"in_formname":"21项表单",
					"in_username":"admin",
					"in_keynames":"微信,",
					"in_keyvalues":in_weChat,
					"in_fieldnames":"姓名,引导人,微信,手机,状态,生日,涉外时间,性别,阶段,"
				 }))
					.then(response => {
						//alert(response.data.userId);, 'application/json;charset=UTF-8;Access-Control-Allow-Origin:*'
						console.log(JSON.stringify(response.data))
						resolve(response.data);
					})
					.catch((error) => {
					 console.log(error)
						reject(error)
					})
			})
		},
		//根据蝈蝈手机得到21项的关键数据
		get21FormValuesByPhone(in_phone){
			const url = 'http://207.246.110.27/lifetree-0.1/callcenter/sp_get_form_values_low'
			in_phone = in_phone +','

			return new Promise((resolve, reject) => {
				axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8"
				axios.post(url, JSON.stringify({ 	
					"in_foldername":"GGAccount",
					"in_formname":"21项表单",
					"in_username":"admin",
					"in_keynames":"手机,",
					"in_keyvalues":in_phone,
					"in_fieldnames":"姓名,引导人,微信,手机,状态,生日,涉外时间,性别,阶段,"
				 }))
					.then(response => {
						//alert(response.data.userId);, 'application/json;charset=UTF-8;Access-Control-Allow-Origin:*'
						console.log(JSON.stringify(response.data))
						resolve(response.data);
					})
					.catch((error) => {
					 console.log(error)
						reject(error)
					})
			})
		},

		getformvaluesaccurate(data){
			const url = 'http://207.246.110.27/lifetree-0.1/callcenter/sp_get_form_values_top'
			console.log(data)
			return new Promise((resolve, reject) => {
				axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8"
				axios.post(url, data)
					.then(response => {
						//alert(response.data.userId);, 'application/json;charset=UTF-8;Access-Control-Allow-Origin:*'
						console.log(JSON.stringify(response.data))
						console.log('in form.getformvaluesaccurate')
						resolve(response.data);
					})
					.catch((error) => {
					 console.log(error)
						reject(error)
					})
			})
		},

		insertformvalues(data){
			const url = 'http://207.246.110.27/lifetree-0.1/callcenter/sp_insert_form_data'
			console.log(data)
			return new Promise((resolve, reject) => {
				axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8"
				axios.post(url, data)
					.then(response => {
						//alert(response.data.userId);, 'application/json;charset=UTF-8;Access-Control-Allow-Origin:*'
						console.log(JSON.stringify(response.data))
						resolve(response.data);
					})
					.catch((error) => {
					 console.log(error)
						reject(error)
					})
			})
		},

		updateformvalues(data){
			const url = 'http://207.246.110.27/lifetree-0.1/callcenter/sp_update_form_data'
			console.log(data)
			return new Promise((resolve, reject) => {
				axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8"
				axios.post(url, data)
					.then(response => {
						//alert(response.data.userId);, 'application/json;charset=UTF-8;Access-Control-Allow-Origin:*'
						console.log(JSON.stringify(response.data))
						resolve(response.data);
					})
					.catch((error) => {
					 console.log(error)
						reject(error)
					})
			})
		},

		//访问用户登陆帐户信息表
		getuserpswbyname(data){
			const url = 'http://207.246.110.27/lifetree-0.1/callcenter/checkLoginInfo'
			console.log(data)
			return new Promise((resolve, reject) => {
				axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8"
				axios.post(url, data)
					.then(response => {
						//alert(response.data.userId);, 'application/json;charset=UTF-8;Access-Control-Allow-Origin:*'
						console.log(JSON.stringify(response.data))
						resolve(response.data);
					})
					.catch((error) => {
					 console.log(error)
						reject(error)
					})
			})
		},

}
