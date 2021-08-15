<template>
    <div>
        <button type="button" @click="setCount(7)">Set</button>
        <p>The count is : {{counter}}</p>
    </div>
</template>
<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    setCount (counter) {
      this.counter = counter
    }
  }
}
</script>
