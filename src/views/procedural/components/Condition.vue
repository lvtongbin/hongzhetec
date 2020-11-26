<template>
  <div class="condition-container">
    <div>{{ title }}</div>
    <div v-if="condition != null">
      <table>
        <tr>
          <td>温度数据</td>
          <td>{{ condition.has_temp_data?'有':'无' }}</td>
          <td>振动数据</td>
          <td>{{ condition.has_vibration_data?'有':'无' }}</td>
          <td>转速</td>
          <td>{{ condition.spech_state===1?'正常':'异常' }}</td>
        </tr>
        <tr>
          <td>超温报警</td>
          <td>{{ condition.over_temp_alarm_cnt }}次</td>
          <td>振动报警</td>
          <td>齿轮</td>
          <td>轴承</td>
          <td>踏面</td>
        </tr>
        <tr>
          <td>温升报警</td>
          <td>{{ condition.temp_rise_alarm_cnt }}次</td>
          <td>预警</td>
          <td>{{ condition.vibration_alarm_info.gear.early_warn_cnt }}次</td>
          <td>{{ condition.vibration_alarm_info.bearing.early_warn_cnt }}次</td>
          <td>{{ condition.vibration_alarm_info.tread.early_warn_cnt }}次</td>
        </tr>
        <tr>
          <td>最高轴温</td>
          <td>{{ condition.max_axle_temp }}℃</td>
          <td>I级</td>
          <td>{{ condition.vibration_alarm_info.gear.class_a_cnt }}次</td>
          <td>{{ condition.vibration_alarm_info.bearing.class_a_cnt }}次</td>
          <td>{{ condition.vibration_alarm_info.tread.class_a_cnt }}次</td>
        </tr>
        <tr>
          <td>最大温升</td>
          <td>{{ condition.max_temp_rise }}K</td>
          <td>II级</td>
          <td>{{ condition.vibration_alarm_info.gear.class_b_cnt }}次</td>
          <td>{{ condition.vibration_alarm_info.bearing.class_b_cnt }}次</td>
          <td>{{ condition.vibration_alarm_info.tread.class_b_cnt }}次</td>
        </tr>
        <tr>
          <td>前置处理器故障</td>
          <td>{{ condition.pre_processor_failure_cnt }}次</td>
          <td>复合处理器故障</td>
          <td>{{ condition.composite_sensor_failure_cnt }}次</td>
          <td>开关机</td>
          <td>{{ condition.switch_cnt }}次</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    condition: {
      type: Object,
      default: function() {
        return {
          train_mode: '',
          train_number: '',
          has_temp_data: false,
          has_vibration_data: false,
          spech_state: 1,
          over_temp_alarm_cnt: 0,
          temp_rise_alarm_cnt: 0,
          max_axle_temp: 0,
          max_temp_rise: 0,
          pre_processor_failure_cnt: 0,
          composite_sensor_failure_cnt: 0,
          switch_cnt: 0,
          vibration_alarm_info: 0
        }
      }
    }
  },
  computed: {
    title: function() {
      if (this.condition != null) {
        return `设备工况--${this.condition.train_mode}--${this.condition.train_number}`
      } else {
        return '设备工况'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .condition-container{
    padding-top: 20px;
  }
</style>
