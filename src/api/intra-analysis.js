import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/v1/intra-analysis/list',
    method: 'get',
    params: query
  })
}

export function fetchCondition(query) {
  return request({
    url: '/v1/intra-analysis/equipment/condition',
    method: 'get',
    params: query
  })
}

export function fetchAlarmList(query) {
  return request({
    url: '/v1/intra-analysis/equipment/alarm/list',
    method: 'get',
    params: query
  })
}

export function fetchFailureList(query) {
  return request({
    url: '/v1/intra-analysis/equipment/failure/list',
    method: 'get',
    params: query
  })
}
