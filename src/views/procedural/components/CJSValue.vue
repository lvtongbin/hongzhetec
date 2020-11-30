<template>
  <div class="alarm-list-container">
    <el-table
      :data="alarmList"
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      style="width: 100%;"
      height="500"
    >
      <el-table-column
        prop="index"
        label="序号"
      />
      <el-table-column
        prop="axis"
        label="轴号"
      />
      <el-table-column
        prop="type"
        label="报警内容"
      />
      <el-table-column
        prop="stime"
        label="报警开始时间"
      />
      <el-table-column
        prop="etime"
        label="报警结束时间"
        width="180"
      />
      <el-table-column
        prop="etime"
        label="数据结束时间"
        width="180"
      />
      <el-table-column
        prop="duration"
        label="持续时长"
        width="180"
      />
      <el-table-column
        prop="max_axle_temp"
        label="最高轴温"
        width="320"
      />
      <el-table-column
        prop="max_temp_rise"
        label="最大温升"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    alarmList: {
      type: Array,
      default: function() { return [] }
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
  .alarm-list-container{
    padding-top: 20px;
  }
</style>
