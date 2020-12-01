


module.exports = [
  {
    url: '/v1/history-analysis/list\.*',
    type: 'get',
    response: config => {
      const { pageSize } = config.query
      var list = []
      for (var i = 0; i < pageSize; i++) {
        var item = {
          id: i+100,
          number: 'G1312',
          time: '@datetime',
          axis: 101,
          senor: 606,
          speed: 120,
          mileage: 18000,
          axle_temp: 35,
          env_temp: 20,
          db: 0,
          cz_diagnosis: '正常',
          dm_diagnosis: '正常',
        }
        list.push(item)
      }
      return {
        code: 0,
        errmsg: 'OK',
        data: {
            total: 100,
            list: list
        }
      }
    }
  },

]
  