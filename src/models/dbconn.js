import axios from 'axios'
import api from '@/config/api'

const instance = axios.create({
  baseURL: api.baseURL
})

export default {
    //1.1登陆验证
    verifyTheAccount(urlparams)
    {
        const url = ''
        var params = new URLSearchParams();
        params.append('usercode', urlparams.usercode);
        params.append('psword', urlparams.psword);

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

    //1.2获得个人补充信息
    //传入帐号名称
    getPersonalAccount(username)
    {
        const url = 'http://207.246.110.27/lifetree-0.1/callcenter/sp_get_form_values_top'
			
        return new Promise((resolve, reject) => {
				axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8"
				axios.post(url, JSON.stringify({ 	
					"in_foldername":"UserAccount",
					"in_formname":"个人信息",
					"in_username":"",
					"in_keynames":"个人表单,",
					"in_keyvalues":username,
					"in_fieldnames":"个人表单,姓名,手机,微信,蝈蝈关联表单,会属,区域,生日,"
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

    //1.3提交个人账户信息
    //3.1获得引导人信息
    setPersonalAccount(urlparams)
    {
        const url = ''
        var params = new URLSearchParams();
        params.append('usercode', urlparams.usercode);
        //...

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

    //1.4.1获得jh通知列表
    getJHPublicBoard(urlparams)
    {
        const url = ''
        var params = new URLSearchParams();
        params.append('usercode', urlparams.usercode);
       
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
    //1.4.2获得个人通知列表
    getPersonalPublicBoard(urlparams)
    {
        const url = ''
        var params = new URLSearchParams();
        params.append('usercode', urlparams.usercode);
       
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

    //1.5确认通知反馈
    setPublicBoardByID(urlparams)
    {
        const url = ''
        var params = new URLSearchParams();
        params.append('newsid', urlparams.newsid);
       
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
    
    //得到个人藏单
    //传入帐号名称
    getPersonalFavorite(username)
    {
        const url = 'http://207.246.110.27/lifetree-0.1/callcenter/sp_get_form_values_top'
			
        return new Promise((resolve, reject) => {
				axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8"
				axios.post(url, JSON.stringify({ 	
					"in_foldername":"GGAccount",
					"in_formname":"收藏表单",
					"in_username":username,
					"in_keynames":"藏家关联表单,",
					"in_keyvalues":username,
					"in_fieldnames":"收藏总数,收藏内容,"
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

    //得到个人藏单里的蝈蝈信息
    //传入帐号名称
    getPersonalFavoriteList(username)
    {
        const url = 'http://207.246.110.27/lifetree-0.1/callcenter/sp_get_form_values_top'
			
        return new Promise((resolve, reject) => {
				axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8"
				axios.post(url, JSON.stringify({ 	
					"in_foldername":"GGAccount",
					"in_formname":"收藏表单-ShowAll",
					"in_username":username,
					"in_keynames":"藏家关联表单,",
					"in_keyvalues":username,
					"in_fieldnames":"姓名,手机,微信,状态,阶段,性别,生日,涉外时间,引导人,引导人姓名,"
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

    //2.1获得权限内的蝈蝈信息 传入此次登陆的账号名称
    getGGIMF_S(username)
    {
        const url = 'http://207.246.110.27/lifetree-0.1/callcenter/sp_get_form_values_low'
			
        return new Promise((resolve, reject) => {
				axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8"
				axios.post(url, JSON.stringify({ 	
					"in_foldername":"GGAccount",
					"in_formname":"21项表单",
					"in_username":"admin",
					"in_keynames":"引导人,",
					"in_keyvalues":username,
					"in_fieldnames":"姓名,手机,微信,状态,阶段,性别,生日,涉外时间,引导人,引导人姓名,"
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

    //2.2获得协作的蝈蝈名单
    getGGIMF_S2(username)
    {
        const url = 'http://207.246.110.27/lifetree-0.1/callcenter/sp_get_form_values_low'
			
        return new Promise((resolve, reject) => {
				axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8"
				axios.post(url, JSON.stringify({ 	
					"in_foldername":"GGAccount",
					"in_formname":"21项表单",
					"in_username":"admin",
					"in_keynames":"管理者,",
					"in_keyvalues":username,
					"in_fieldnames":"姓名,手机,微信,状态,阶段,性别,生日,涉外时间,引导人,引导人姓名,"
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

    //2.3获得查询集合   根据微信 qq 手机 或名字
    getGGIMFByAny(urlparams)
    {
        const url = ''
        var params = new URLSearchParams();
        params.append('wechat', urlparams.wechat);
        params.append('qq', urlparams.qq);
        params.append('phone', urlparams.phone);
        params.append('ggname', urlparams.ggname);

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

    //2.4提交蝈蝈信息（包括置黑）   根据code提交信息
    setGGIMFByCode(urlparams)
    {
        const url = ''
        var params = new URLSearchParams();
        params.append('ggcode', urlparams.ggcode);
        //...

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

    //2.5.1分享蝈蝈信息 传入gg编号 分享用户名和接受分享用户名
    setGGIMFToAny(urlparams)
    {
        const url = ''
        var params = new URLSearchParams();
        params.append('ggcode', urlparams.ggcode);
        params.append('srcusercode', urlparams.usercode);
        params.append('desusercode', urlparams.desusercode);
        //...

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

    //2.5.2查询蝈蝈信息 传入gg编号
    getGGIMFByCode(urlparams)
    {
        const url = ''
        var params = new URLSearchParams();
        params.append('ggcode', urlparams.ggcode);

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

    //3.2推送通知信息
    sendMSGToAny(urlparams)
    {
        const url = ''
        var params = new URLSearchParams();
        params.append('msg', urlparams.ggcode);
        params.append('srcusercode', urlparams.usercode);
        params.append('desusercode', urlparams.desusercode);

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

    //demo
    getTestConn(){
        const url = 'http://207.246.102.163/podoSys/index/getUserInfo'

        var params = '';
        //var params = new URLSearchParams();
        //params.append('fdate', this.sdate);

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
}
}