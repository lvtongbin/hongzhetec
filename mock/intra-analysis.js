


module.exports = [
    {
      url: '/v1/intra-analysis/list\.*',
      type: 'get',
      response: config => {
        const { pageSize } = config.query
        var list = []
        for (var i = 0; i < pageSize; i++) {
          var item = {
            id: 12345,
            train_mode: 'HXD1',
            train_number: '1625B',
            data_stime: '@datetime',
            data_etime: '@datetime',
            upload_time: '@datetime',
            host_version: '2.0.46',
            param_version: '3.2',
            uploader: '超级管理员',
            analysts: '超级管理员',
            analysis_status: false,
          }
          list.push(item)
        }
        console.log(list)
        return {
          code: 0,
          errmsg: 'OK',
          req: pageSize,
          data: {
              total: 100,
              list: list
          }
        }
      }
    }
]
  