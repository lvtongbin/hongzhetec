import request from '@/utils/request'

export function list(query) {
  return request({
    url: '/v1/history-analysis/list',
    method: 'get',
    params: query
  })
}
