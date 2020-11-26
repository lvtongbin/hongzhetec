<template>
  <div class="datareport-container">
    <HomePage v-if="step===0" @next="step=1" />
    <FailurePage v-if="step===1" @next="step=2" @back="step=0" />
    <WarnPage v-if="step===2" @next="step=3" @back="step=1" />
    <ChongJiPage v-if="step===3" @next="step=4" @back="step=2" />
    <TempPage v-if="step===4" @next="step=5" @back="step=3" />
    <ConclusionPage v-if="step===5" @next="step=6" @back="step=4" />
  </div>
</template>
<script>
import HomePage from './components/HomePage'
import FailurePage from './components/FailurePage'
import WarnPage from './components/WarnPage'
import ChongJiPage from './components/ChongJiPage'
import TempPage from './components/TempPage'
import ConclusionPage from './components/ConclusionPage'
export default {
  name: 'Datareport',
  components: { HomePage, FailurePage, WarnPage, ChongJiPage, TempPage, ConclusionPage },
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
