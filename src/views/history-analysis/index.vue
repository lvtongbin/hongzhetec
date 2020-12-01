<template>
  <div class="datareport-container">
    <HomePage v-if="step===0" @next="step=1" />
  </div>
</template>
<script>
import HomePage from './components/HomePage'
export default {
  name: 'Datareport',
  components: { HomePage },
  data() {
    return {
      step: 0
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
</style>
