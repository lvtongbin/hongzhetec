<template>
  <div>
    <div>[2/5]报警分析-{{ condition.train_mode }}-{{ condition.train_number }}</div>
    <el-divider />
    <el-table
      :data="failureList"
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      style="width: 100%;"
      height="500"
    >
      <el-table-column
        prop="index"
        label="序号"
      />
      <el-table-column
        prop="type"
        label="故障内容"
      />
      <el-table-column
        prop="axis"
        label="故障轴号"
      />
      <el-table-column
        prop="senor"
        label="故障位号"
      />
      <el-table-column
        prop="count"
        label="故障次数"
        width="180"
      />
    </el-table>
    <el-pagination
      class="pagination"
      :current-page.sync="filter.pageNum"
      :page-sizes="[10, 20, 50]"
      :page-size="filter.pageSize"
      layout="sizes, prev, pager, next"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <el-table
      :data="failureList"
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
        prop="senor"
        label="位号"
      />
      <el-table-column
        prop="type"
        label="报警内容"
      />
      <el-table-column
        prop="count"
        label="报警时间"
        width="180"
      />
      <el-table-column
        prop="count"
        label="最高轴温"
        width="180"
      />
      <el-table-column
        prop="count"
        label="最大温升"
        width="180"
      />
    </el-table>
    <el-pagination
      class="pagination"
      :current-page.sync="filter.pageNum"
      :page-sizes="[10, 20, 50]"
      :page-size="filter.pageSize"
      layout="sizes, prev, pager, next"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <el-divider />
    <el-button type="info" round @click="onNext(-1)">上一页</el-button>
    <el-button type="info" round @click="onNext(1)">下一页</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchFailureList } from '@/api/intra-analysis'
export default {
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
      alarmList: []
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
