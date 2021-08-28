<template>
    <child-component @send-mssage="sendMessage" />
</template>
<script>
import ChildComponent from './ChildComponent4.vue'

export default {
  components: { ChildComponent },
  methods: {
    sendMessage (data) {
      console.log(data)
    }
  }
}
</script>
