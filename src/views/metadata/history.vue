<template>
  <div class="datareport-container">
    <el-form :inline="true" label-position="top" :model="form">
      <el-form-item label="配属">
        <el-select v-model="form.region" placeholder="选择配属">
          <el-option label="配属0" value="0" />
          <el-option label="配属1" value="1" />
          <el-option label="配属2" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="车间">
        <el-select v-model="form.region" placeholder="车间选择">
          <el-option label="车间0" value="0" />
          <el-option label="车间1" value="1" />
          <el-option label="车间2" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="车型">
        <el-select v-model="form.region" placeholder="车型选择">
          <el-option label="车型0" value="0" />
          <el-option label="车型1" value="1" />
          <el-option label="车型2" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="时间范围">
        <el-select v-model="form.region" placeholder="选择时间范围">
          <el-option label="近一个月" value="0" />
          <el-option label="近三个月" value="1" />
          <el-option label="近半年" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="上传时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="datetime" placeholder="选择日期" style="width: 100%;" />
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-date-picker v-model="form.date2" type="datetime" placeholder="选择日期" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="分析状态">
        <el-select v-model="form.region" placeholder="选择分析状态">
          <el-option label="未分析" value="0" />
          <el-option label="已分析" value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="上传状态">
        <el-select v-model="form.region" placeholder="选择上传状态">
          <el-option label="成功" value="0" />
          <el-option label="失败" value="1" />
        </el-select>
      </el-form-item>
      <el-form-item class="select-button">
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        prop="index"
        label="序号"
      />
      <el-table-column
        prop="type"
        label="车型"
      />
      <el-table-column
        prop="carcode"
        label="车号"
      />
      <el-table-column
        prop="starttime"
        label="数据开始时间"
        width="180"
      />
      <el-table-column
        prop="endtime"
        label="数据结束时间"
        width="180"
      />
      <el-table-column
        prop="reporttime"
        label="数据上传时间"
        width="180"
      />
      <el-table-column
        prop="file"
        label="文件名"
        width="320"
      />
      <el-table-column
        prop="temp"
        label="温度"
      />
      <el-table-column
        prop="shake"
        label="振动"
      />
      <el-table-column
        prop="sensor"
        label="复合传感器"
      />
      <el-table-column
        prop="processor"
        label="前置传感器"
      />
      <el-table-column
        prop="stats"
        label="上传状态"
      />
      <el-table-column
        prop="stats"
        label="分析状态"
      />
      <el-table-column
        prop="owner"
        label="分析人"
      />
    </el-table>
    <el-pagination
      class="pagination"
      :current-page.sync="currentPage2"
      :page-sizes="[20, 50, 100]"
      :page-size="50"
      layout="sizes, prev, pager, next"
      :total="1000"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
export default {
  name: 'Datareport',
  data() {
    return {
      form: {
        user: '',
        region: '',
        date1: '',
        date2: ''
      },
      tableData: [{
        index: 1,
        type: 'HXD2',
        carcode: '6507A',
        starttime: '2018-03-03 20:46:45',
        endtime: '2019-03-03 20:46:45',
        reporttime: '2019-12-02 12:23:12',
        file: 'YZD-HXD2-6507A-20180309-20190302.6A',
        stats: 1,
        temp: 1,
        shake: 1,
        sensor: 1,
        processor: 1,
        workshop: '',
        owner: '张三'
      }, {
        index: 2,
        type: 'HXD2',
        carcode: '6507A',
        starttime: '2018-03-03 20:46:45',
        endtime: '2019-03-03 20:46:45',
        reporttime: '2019-12-02 12:23:12',
        file: 'YZD-HXD2-6507A-20180309-20190302.6A',
        stats: 1,
        temp: 0,
        shake: 1,
        sensor: 1,
        processor: 1,
        workshop: '',
        owner: '张三'
      }, {
        index: 3,
        type: 'HXD2',
        carcode: '6507A',
        starttime: '2018-03-03 20:46:45',
        endtime: '2019-03-03 20:46:45',
        reporttime: '2019-12-02 12:23:12',
        file: 'YZD-HXD2-6507A-20180309-20190302.6A',
        stats: 0,
        temp: 1,
        shake: 1,
        sensor: 1,
        processor: 1,
        workshop: '',
        owner: '张三'
      }, {
        index: 4,
        type: 'HXD2',
        carcode: '6507A',
        starttime: '2018-03-03 20:46:45',
        endtime: '2019-03-03 20:46:45',
        reporttime: '2019-12-02 12:23:12',
        file: 'YZD-HXD2-6507A-20180309-20190302.6A',
        stats: 1,
        temp: 1,
        shake: 1,
        sensor: 1,
        processor: 1,
        workshop: '',
        owner: '张三'
      }]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
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
