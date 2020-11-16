<template>
  <div class="homepage-container">
    <div>当日上传机车</div>
    <div>
      <el-form :inline="true" :model="formInline" class="form-inline">
        <div>
          <el-form-item label="配属">
            <el-input v-model="formInline.user" placeholder="审批人" />
          </el-form-item>
          <el-form-item label="车间">
            <el-select v-model="formInline.region" placeholder="车间选择">
              <el-option label="车间0" value="0" />
              <el-option label="车间1" value="1" />
              <el-option label="车间2" value="2" />
            </el-select>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="自动刷新间隔">
            <el-select v-model="formInline.region" placeholder="选择时间">
              <el-option label="5分钟" value="0" />
              <el-option label="10分钟" value="1" />
              <el-option label="30分钟" value="2" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">刷新</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Homepage',
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      }
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
  .homepage-container {
    padding: 50px;
  }
  .form-inline {
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
