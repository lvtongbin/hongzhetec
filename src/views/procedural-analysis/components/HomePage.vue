<template>
  <div style="display:inline-block;">
    <label class="radio-label" style="padding-left:0;">Filename: </label>
    <el-input v-model="filename" placeholder="Please enter the file name (default excel-list)" style="width:345px;" prefix-icon="el-icon-document" />
    <el-button type="primary" @click="$emit('next')">查询</el-button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
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
  }
}
</script>
