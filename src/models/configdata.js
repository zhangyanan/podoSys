import axios from 'axios'
import api from '@/config/api'

const instance = axios.create({
  baseURL: api.baseURL
})

// regex for replace content
// const reg = /\{(.+)\}/ig
/*
基础信息类：定义是各个客观选项的集合
gender              20000
ggstudystatus       20010
hscontent           20050
qycontent           20150
havesttype          20250
churchs             20300
marriage            30000
education           30010
value          30020
employment          30120
debt                30130
health              30140
study schedule      30150
year of faith       30160
yesorno             30170    
reading habits      30180
prayers             30190
service             30200
vigilant            30300
value               30350
status              30400
//other parts
ggtitle             40000
getGenderList
*/
export default {
    get_l_gender_datalist () {
    var result = instance.get(api.get_l_gender_datalist)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        20000: {value: '男'},
        20001: {value: '女'}
      }})
    })
    return result
  },

  get_l_ggstudystatus_datalist () {
    var result = instance.get(api.get_l_ggstudystatus_datalist)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        20010: {value: 'SW', NO:1,},
        20011: {value: 'QJ',NO:2,},
        20012: {value: 'TK', NO:3,},
        20013: {value: 'GD', NO:4,},
        20014: {value: 'FF', NO:5,},
        20015: {value: 'CJ', NO:6,},
        20016: {value: 'ZJ', NO:7,},
        20017: {value: 'GJ', NO:8,},
        20018: {value: 'RJ', NO:9,},
        20019: {value: 'XJ', NO:10,},
        20020: {value: 'BLACK', NO:0,},
        /*20010: {value: 'SW'},
        20011: {value: 'QJ'},
        20012: {value: 'TK'},
        20013: {value: 'GD'},
        20014: {value: 'FF'},
        20015: {value: 'CJ'},
        20016: {value: 'ZJ'},
        20017: {value: 'GJ'},
        20018: {value: 'RJ'},
        20019: {value: 'XJ'},
        20020: {value: 'BLACK'},*/
      }})
    })
    return result
  },

  get_l_hscontent_datalist () {
    var result = instance.get(api.get_l_hscontent_datalist)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        20050: {value: '壮'},
        20051: {value: '妇'},
        20052: {value: '青'},
        20053: {value: '教'},
        20054: {value: '朝'}
      }})
    })
    return result
  },
  
  get_l_swtype_datalist () {
    var result = instance.get(api.get_l_swtype_datalist)
    
    result = new Promise(function (resolve, reject) {
      resolve({data: {
        20250: {value: '田地'},
        20251: {value: '知人'},
        20252: {value: '摆摊'},
        20253: {value: '网络'},
        20254: {value: '其他'}
      }})
    })
    return result
  },

  get_l_churchs_datalist () {
    var result = instance.get(api.get_l_churchs_datalist)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        20300: {value: '怀恩'},
        20301: {value: '福音'},
        20302: {value: '沐恩'},
        20303: {value: '国际'},
        20304: {value: '其他'}
      }})
    })
    return result
  },

  get_l_marriage_datalist () {
    var result = instance.get(api.get_l_marriage_datalist)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        30000: {value: '已婚'},
        30001: {value: '未婚'},
        30002: {value: '离异'},
        30003: {value: '恋爱'},
        30004: {value: '未恋爱'},
        30005: {value: '未知'}
      }})
    })
    return result
  },
  
  get_l_education_datalist () {
    var result = instance.get(api.get_l_education_datalist)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        30010: {value: '初中'},
        30011: {value: '高中'},
        30012: {value: '大专'},
        30013: {value: '本科'},
        30014: {value: '硕士'},
        30015: {value: '博士'},
        30016: {value: '未知'}
      }})
    })
    return result
  },
  
  get_l_occuption_datalist () {
    var result = instance.get(api.get_l_occuption_datalist)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        30020: {value: '机关'},
        30021: {value: '工人'},
        30022: {value: '农业'},
        30023: {value: '牧业'},
        30024: {value: '渔业'},
        30025: {value: '林业'},
        30026: {value: '矿业'},
        30027: {value: '运输'},
        30028: {value: '旅游'},
        30029: {value: '旅馆'},
        30030: {value: '餐饮'},
        30031: {value: '建筑'},
        30032: {value: '纺织'},
        30033: {value: '手工'},
        30034: {value: '新闻'},
        30035: {value: '广告'},
        30036: {value: '医护'},
        30037: {value: '演员'},
        30038: {value: '娱乐'},
        30039: {value: '服务'},
        30040: {value: '事业'},
        30041: {value: '个体'},
        30042: {value: '家政'},
        30043: {value: '体育'},
        30044: {value: '通讯'},
        30045: {value: '其他'}
      }})
    })
    return result
  },
  
  get_l_employment_datalist () {
    var result = instance.get(api.get_l_employment_datalist)
    
    result = new Promise(function (resolve, reject) {
      resolve({data: {
        30120: {value: '全职'},
        30121: {value: '兼职'},
        30122: {value: '无业'},
        30123: {value: '自由'},
        30124: {value: '其他'}
      }})
    })
    return result
  },
  
  get_l_debt_datalist () {
    var result = instance.get(api.get_l_debt_datalist)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        30130: {value: '无'},
        30131: {value: '个人'},
        30132: {value: '家庭'},
        30133: {value: '其他'},
        30134: {value: '未知'}
      }})
    })
    return result
  },
  
  get_l_health_datalist() {
    var result = instance.get(api.get_l_health_datalist)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        30140: {value: '健康'},
        30141: {value: '疾病'},
        30142: {value: '失能'},
        30143: {value: '其他'},
        30144: {value: '未知'}
      }})
    })
    return result
  },

  get_l_studyschedules_datalist() {
    var result = instance.get(api.get_l_studyschedules_datalist)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        30150: {value: '未知'},
        30151: {value: '无'},
        30152: {value: '有'}
      }})
    })
    return result
  },

  get_l_yesorno_datalist() {
    var result = instance.get(api.get_l_yesorno_datalist)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        30170: {value: '未知'},
        30171: {value: '是'},
        30172: {value: '否'}
      }})
    })
    return result
  },

  get_l_activitytype_datalist() {
    var result = instance.get(api.get_l_activitytype_datalist)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        30350: {value: '音乐'},
        30351: {value: '职场'},
        30352: {value: 'TK'},
        30353: {value: '养生'},
        30354: {value: '家庭'},
        30355: {value: '运动'},
        30356: {value: '艺术'},
        30357: {value: '阅读'}
      }})
    })
    
    return result
  },

  get_l_ggstatus_datalist() {
    var result = instance.get(api.get_l_ggstatus_datalist)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        30400: {value: '正常'},
        30401: {value: '脱落'},
        30402: {value: '宣教'},
        30403: {value: '黑名单'},
        30404: {value: '不做跟进'},
      }})
    })
    
    return result
  },
  
  get_l_showggtitle_datalist(param) {
    var result = instance.get(api.get_l_showggtitle_datalist)
    if(param < 2){
                //姓名,微信,手机,状态,引导人姓名,性别,阶段,涉外时间,
                result = new Promise(function (resolve, reject) {
                  resolve({data: {
                    40000: {value: '姓名'},
                    40001: {value: '性别'},
                    40002: {value: '涉外时间'},
                    40003: {value: '状态'},
                    40004: {value: '阶段'},
                    40005: {value: '微信'},
                    40006: {value: '手机'},
                    40007: {value: '引导人姓名'}
                  }})
                })
    }
    else{
                /*
                姓名,微信,手机,引导人,状态,引导人姓名,性别,阶段,引导人会属,引导人区域,管理者,涉外时间,涉外类型,涉外田地,生日,
                会属,婚恋,学历,职业,就业,负债,健康,学习计划,信仰年数,读经情况,祷告情况,服侍情况,戒备情况,状态变更原因"
                 */
                result = new Promise(function (resolve, reject) {
                  resolve({data: {
                    40000: {value: '姓名'},
                    40001: {value: '性别'},
                    40002: {value: '生日'},
                    40003: {value: '涉外时间'},
                    40004: {value: '状态'},
                    40005: {value: '阶段'},
                    40006: {value: '微信'},
                    40007: {value: '手机'},
                    40008: {value: '会属'},
                    40009: {value: '婚恋'},
                    40010: {value: '学历'},
                    40011: {value: '职业'},
                    40012: {value: '就业'},
                    40013: {value: '负债'},
                    40014: {value: '健康'},
                    40015: {value: '学习计划'},

                    40016: {value: '引导人姓名'},
                    40017: {value: '引导人会属'},
                    40018: {value: '引导人区域'},
                    40019: {value: '管理者'},

                    40020: {value: '涉外类型'},
                    40021: {value: '涉外田地'},
                    40022: {value: '信仰年数'},
                    40023: {value: '读经情况'},
                    40024: {value: '祷告情况'},
                    40025: {value: '服侍情况'},
                    40026: {value: '戒备情况'},
                    40027: {value: '状态变更原因'}
                  }})
                })
    }
    
    return result
  }
  
  /*getUrgentList () {
    var result = instance.get(api.getUrgentList)

    result = new Promise(function (resolve, reject) {
      resolve({data: {
        14314: {上架日期: '19/04/2018', 內文: '今晚23:00播放红富士浇雨13，并于明早5:30重播。请家人们知悉，mfl', 類型: '一般'},
        14315: {上架日期: '19/04/2018', 內文: '今晚23:00播放红富士浇雨13，并于明早5:30重播。请家人们知悉，mfl', 類型: '一般'}
      }})
    })
    return result
  }*/
}
