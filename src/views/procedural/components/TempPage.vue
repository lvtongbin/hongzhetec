<template>
  <div>
    <div>[4/5]温度分析-{{ condition.train_mode }}-{{ condition.train_number }}</div>
    <el-divider />
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="温度样本分析" name="first">
        <CJSample />
      </el-tab-pane>
      <el-tab-pane label="温差分析" name="second">
        <CJTrend />
      </el-tab-pane>
      <el-tab-pane label="温度报警" name="third">
        <CJSValue />
      </el-tab-pane>
      <el-tab-pane label="最高温度/最大温升" name="fourth">
        <CJAlarm />
      </el-tab-pane>
    </el-tabs>
    <el-divider />
    <el-button type="info" round @click="onNext(-1)">上一页</el-button>
    <el-button type="info" round @click="onNext(1)">下一页</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchFailureList } from '@/api/intra-analysis'
import CJSample from './CJSample'
import CJTrend from './CJTrend'
import CJSValue from './CJSValue'
import CJAlarm from './CJAlarm'
export default {
  components: { CJSample, CJTrend, CJSValue, CJAlarm },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      filter: {
        pageNum: 1,
        pageSize: 20
      },
      total: 0,
      failureList: [],
      alarmList: [],
      activeName: 'first'
    }
  },
  computed: {
    ...mapGetters([
      'condition'
    ]),
    filename: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  beforeMount() {
    this.fetchFailureList()
  },
  methods: {
    handleSizeChange(val) {
      this.filter.pageNum = 1
      this.filter.pageSize = val
      this.updateList()
    },
    handleCurrentChange(val) {
      this.filter.pageNum = val
      this.updateList()
    },
    onSubmit() {
      this.updateList()
    },
    onNext(val) {
      console.log(val)
      if (val > 0) {
        this.$emit('next')
      } else {
        this.$emit('back')
      }
    },
    fetchFailureList() {
      const { filter } = this
      fetchFailureList(filter).then(response => {
        const { code, data } = response
        if (code !== 0) {
          // TO DO
        }
        this.total = data.total
        var failureList = data.list.map((item, index) => {
          return {
            index: 1 + index + (filter.pageNum - 1) * filter.pageSize,
            axis: item.axis,
            senor: item.senor,
            type: item.type,
            count: item.count
          }
        })
        this.failureList = failureList
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .datareport-container {
    padding: 50px;
    display:inline-block;
  }
</style>
