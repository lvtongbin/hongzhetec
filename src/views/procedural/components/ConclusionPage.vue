<template>
  <div class="condition-container">
    <div>[5/5]分析结论-{{ condition.train_mode }}-{{ condition.train_number }}</div>
    <el-divider />
    <table border="1" cellspacing="0">
      <tr>
        <td colspan="8" class="title">走行部子系统转储数据分析报告</td>
      </tr>
      <tr>
        <td>车型</td>
        <td>HXD1</td>
        <td rowspan="2">数据时间</td>
        <td>起始时间</td>
        <td colspan="4">2019-11-26 07:46:41</td>
      </tr>
      <tr>
        <td>车号</td>
        <td>7080B</td>
        <td>结束时间</td>
        <td colspan="4">2019-11-27 20:25:13</td>
      </tr>
      <tr>
        <td>振动数据</td>
        <td colspan="3">有</td>
        <td>温度数据</td>
        <td>有</td>
        <td>转速信息</td>
        <td>正确</td>
      </tr>
      <tr>
        <td>振动报警</td>
        <td>齿轮</td>
        <td>轴承</td>
        <td>踏面</td>
        <td>最高温度</td>
        <td>43℃</td>
        <td>主机开关机</td>
        <td>4次</td>
      </tr>
      <tr>
        <td>预警</td>
        <td>3次</td>
        <td>0次</td>
        <td>0次</td>
        <td>最大温升</td>
        <td>37K</td>
        <td>前置处理器故障</td>
        <td>0次</td>
      </tr>
      <tr>
        <td>I级</td>
        <td>3次</td>
        <td>0次</td>
        <td>0次</td>
        <td>温升报警</td>
        <td>0次</td>
        <td>复合传感器故障</td>
        <td>0次</td>
      </tr>
      <tr>
        <td>II级</td>
        <td>3次</td>
        <td>0次</td>
        <td>0次</td>
        <td>超温报警</td>
        <td>0次</td>
        <td colspan="2" />
      </tr>
      <tr>
        <td>分析结论</td>
        <td colspan="7" style="padding:0px">
          <el-input
            v-model="textarea"
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
          />
        </td>
      </tr>
      <tr>
        <td>分析人</td>
        <td colspan="3">张三</td>
        <td>分析时间</td>
        <td colspan="3">2019-11-28 10:50:22</td>
      </tr>
    </table>
    <el-divider />
    <div class="bottom">
      <el-button type="info" round>打印</el-button>
      <el-button type="info" round @click="onBack">上一页</el-button>
      <el-button type="info" round>完成</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      textarea: ''
    }
  },
  computed: {
    ...mapGetters([
      'condition'
    ])
  },
  methods: {
    onBack(val) {
      this.$emit('back')
    }
  }
}
</script>

<style lang="scss" scoped>
  .condition-container{
    padding-top: 20px;
  }
  .title {
    text-align: center;
    line-height: 50px;
    font-weight: bold;
  }
  table {
    margin: 0 auto;
  }
  td {
    padding: 10px;
    text-align: center;
  }
  .bottom {
    position: absolute;
    right: 0;
    padding-right: 80px;
  }
</style>
