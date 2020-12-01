<template>
  <div style="display:inline-block;">
    <el-form :inline="true" label-position="top" :model="filter">
      <el-form-item label="配属">
        <el-select v-model="filter.apposition" placeholder="选择配属">
          <el-option label="配属0" value="0" />
          <el-option label="配属1" value="1" />
          <el-option label="配属2" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="车间">
        <el-select v-model="filter.workshop" placeholder="车间选择">
          <el-option label="车间0" value="0" />
          <el-option label="车间1" value="1" />
          <el-option label="车间2" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="车型">
        <el-select v-model="filter.train_mode" placeholder="车型选择">
          <el-option label="车型0" value="0" />
          <el-option label="车型1" value="1" />
          <el-option label="车型2" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="车号">
        <el-select v-model="filter.train_number" placeholder="车号选择">
          <el-option label="车型0" value="HX123" />
          <el-option label="车型1" value="HDG21" />
          <el-option label="车型2" value="HD352" />
        </el-select>
      </el-form-item>
      <el-form-item label="时间范围">
        <el-select v-model="filter.time_range" placeholder="选择时间范围">
          <el-option label="近一个月" value="0" />
          <el-option label="近三个月" value="1" />
          <el-option label="近半年" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="上传时间">
        <el-col :span="11">
          <el-date-picker v-model="filter.upload_stime" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker v-model="filter.upload_etime" value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item class="select-button">
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%;"
      height="500"
    >
      <el-table-column
        prop="index"
        label="序号"
      />
      <el-table-column
        prop="number"
        label="车号"
      />
      <el-table-column
        prop="time"
        label="采样时间"
        width="180"
      />
      <el-table-column
        prop="axis"
        label="轴号"
        width="180"
      />
      <el-table-column
        prop="senor"
        label="位号"
        width="320"
      />
      <el-table-column
        prop="speed"
        label="速度(km/h)"
      />
      <el-table-column
        prop="mileage"
        label="里程"
      />
      <el-table-column
        prop="axle_temp"
        label="轴温(℃)"
      />
      <el-table-column
        prop="env_temp"
        label="环温(℃)"
      />
      <el-table-column
        prop="db"
        label="dB值"
      />
      <el-table-column
        prop="cz_diagnosis"
        label="车载诊断"
      />
      <el-table-column
        prop="dm_diagnosis"
        label="地面诊断"
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
  </div>
</template>

<script>
import { list } from '@/api/history-analysis'
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
        apposition: 0,
        workshop: 0,
        train_mode: '',
        train_number: '',
        time_range: 0,
        upload_stime: this.$moment().add(-1, 'M').format('YYYY-MM-DD HH:mm:ss'),
        upload_etime: this.$moment().format('YYYY-MM-DD HH:mm:ss'),
        analysts: 0,
        uploader: 0,
        analysis_status: 0,
        pageNum: 1,
        pageSize: 20
      },
      total: 0,
      tableData: []
    }
  },
  computed: {
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
    this.updateList()
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
      console.log(this.filter)
    },
    updateList() {
      const { filter } = this
      list(filter).then(response => {
        const { code, data } = response
        if (code !== 0) {
          // TO DO
        }
        this.total = data.total
        var tableData = data.list.map((item, index) => {
          return {
            index: 1 + index + (filter.pageNum - 1) * filter.pageSize,
            number: item.number,
            time: item.time,
            axis: item.axis,
            senor: item.senor,
            speed: item.speed,
            mileage: item.mileage,
            axle_temp: item.axle_temp,
            env_temp: item.env_temp,
            db: item.db,
            cz_diagnosis: item.cz_diagnosis,
            dm_diagnosis: item.dm_diagnosis
          }
        })
        this.tableData = tableData
      }).catch(error => {
        // reject(error)
        console.log(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .datareport-container {
    padding: 50px;
  }
  .form-inline {
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .pagination {
    padding-top: 20px;
  }
  .select-button {
    padding-top: 45px;
  }
</style>
