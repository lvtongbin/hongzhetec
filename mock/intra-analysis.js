


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
  {
    url: '/v1/intra-analysis/equipment/condition\.*',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        errmsg: 'OK',
        data: {
          train_mode: 'HXD1',
          train_number: '7203A',
          has_temp_data: true,
          has_vibration_data: true,
          spech_state: 1,
          over_temp_alarm_cnt: 1,
          temp_rise_alarm_cnt: 5,
          max_axle_temp: 94,
          max_temp_rise: 72,
          pre_processor_failure_cnt: 0,
          composite_sensor_failure_cnt: 0,
          switch_cnt: 7,
          vibration_alarm_info: {
            gear:{
              temp_rise_cnt: 0, // 温升次数
              over_temp_cnt: 0, // 超温次数
              early_warn_cnt: 0,// 预警次数
              class_a_cnt: 0,   // I级次数
              class_b_cnt: 0    // II级次数
            },
            bearing: {
              temp_rise_cnt: 0,
              over_temp_cnt: 0,
              early_warn_cnt: 0,
              class_a_cnt: 0,
              class_b_cnt: 0
            },
            tread: {
              temp_rise_cnt: 0,
              over_temp_cnt: 0,
              early_warn_cnt: 0,
              class_a_cnt: 0,
              class_b_cnt: 0
            }
          },
          conclusion: '无',
          analysts: '张三',
          analysts: '2019-11-28 10:58:22'
        }
      }
    }
  },
  {
    url: '/v1/intra-analysis/equipment/alarm/list\.*',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        errmsg: 'OK',
        data: {
          total: 100, // 总的告警数
          list: [
            {
              id: 12345,
              axis: 2,
              order: 6,
              type: "温升告警",
              stime: "2019-11-23 15:36:45",
              etime: "2019-11-24 16:25:12",
              duration: 0,
              max_temp_rise: 77,
              max_axle_temp: 94
            }
          ]
        }
      }
    }
  },
  {
    url: '/v1/intra-analysis/equipment/failure/list',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        errmsg: 'OK',
        data: {
          total: 4, // 总的告警数
          list: [
            {
              id: 12345,
              type: "前置处理器故障",
              axis: 2,
              senor: 6,
              count: 4
            },
            {
              id: 12345,
              type: "后置处理器故障",
              axis: 1,
              senor: 2,
              count: 3
            },
            {
              id: 12345,
              type: "前置处理器故障",
              axis: 2,
              senor: 1,
              count: 1
            },{
              id: 12345,
              type: "前置处理器故障",
              axis: 3,
              senor: 2,
              count: 1
            }
          ]
        }
      }
    }
  }
]
  