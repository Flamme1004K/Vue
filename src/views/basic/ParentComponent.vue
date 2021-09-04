<template>
    <child-component @send-meesage='sendMessage' ref="child-component">
</template>
<script>
import ChildComponent from './ChildComponent.vue'
export default {

  components: {
    ChildComponent
  },
  mounted () {
    this.$refs.$refs.child_component.$refs.btn.click()
  }
}
</script>
