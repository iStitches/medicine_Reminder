import request from '../utils/request';

//用户登录
export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

//获取心率记录
export function heartRates() {
    return request({
        url: '/health/heart_rates',
        method: 'get'
    })   
}

//获取血压记录
export function bloodPressure() {
    return request({
        url: '/health/blood_pressure',
        method: 'get'
    })
  }

//获取服药列表
export function getMedicineList(){
    return request({
        url: '/health/today_drugs',
        method: 'get'
    })
}

//服药
export function takeMedicine(params) {
    return request({
        url: '/health/set_drug_taken/'+params,
        method: 'get'
    })
}

//设置新的待服药品
export function setNewMedicine(data) {
    return request({
        url: '/health/set_new_drug',
        method: 'post',
        data
    })
}

//取消待服药品
export function deleteMedicine(params) {
    return request({
        url: '/health/remove_new_drug/'+params,
        method: 'get'
    })
  }