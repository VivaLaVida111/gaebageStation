import request from '@/utils/request'
export { get } from '@/api/common.js'

function sanitizePathParam(param) {
    if (param == null) return ''
    const str = String(param)
    return str.replace(/\.\.[\/\\]/g, '').replace(/[\/\\]/g, '')
}
export function getPage(pageNum, pageSize) {
    return request({
        url: '/dump-record/page',
        method: 'get',
        data: {
            pageNum: pageNum,
            pageSize: pageSize		//user_id为接口请求关键字,7为参数值
        }
    })
}
export function getJinNniuToday(start,end,pageNum,pageSize) {
    return request({
        url: '/dump-record/period/' + sanitizePathParam(start) + '/'+ sanitizePathParam(end),
        method: 'get',
        // data: {
        //     pageNum: pageNum,
        //     pageSize: pageSize		//user_id为接口请求关键字,7为参数值
        // }
    })
}
export function getQuery(site_name, transporter, start, end, pageNum, pageSize) {
    return request({
        url: '/dump-record/page/' + sanitizePathParam(site_name) + '/' + sanitizePathParam(transporter) + '/' + sanitizePathParam(start) + '/' + sanitizePathParam(end) + '/' + sanitizePathParam(pageNum) + '/' + sanitizePathParam(pageSize),
        method: 'get',
        // params: {
        //     pageNum: pageNum,
        //     pageSize: pageSize		//user_id为接口请求关键字,7为参数值
        // }
    })
}
export function getCarGps(car_number,start,end){
    return request({
        url: '/gps-record/track/'+sanitizePathParam(car_number)+'/'+sanitizePathParam(start)+'/'+sanitizePathParam(end),
        method: 'get'
    })
}
export function getCars(){
    return request({
        url: '/car',
        method: 'get'
    })
}

export function getAllGps(){
    return request({
        url: '/gps-record/latest_location/all'+'/',
        method: 'get'
    })
}


// 车辆倾倒数据查询;若需全部站点数据,则site_name填all
export function getTransportCars(start, end,site_name, pageNum, pageSize) {
    return request({
        url: '/dump-record/dump_car/' + sanitizePathParam(start) + '/' + sanitizePathParam(end) + '/' + sanitizePathParam(site_name) + '/' + sanitizePathParam(pageNum) + '/' + sanitizePathParam(pageSize),
        method: 'get',
        // params: {
        //     pageNum: pageNum,
        //     pageSize: pageSize		//user_id为接口请求关键字,7为参数值
        // }
    })
}

export function getAllGp(){
    return request({
        url: '/gps-record/latest_location/all'+'/',
        method: 'get'
    })
}

// export function getFlows() {
//         return request({
//           url: "/OsmoticFluid/shenlvye/getRecord",
//           method: "get",
//         });
// }

// export function getFlows_xihua() {
//         return request({
//           url: "/OsmoticFluid/shenlvye/getRecordByStation?station=xihua",
//           method: "get",
//         });
// }