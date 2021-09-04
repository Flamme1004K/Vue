<template>
    <div>
        <button type="button" @click="one(), two()">Click</button>
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
    one () {
      alert('One')
    },
    two () {
      alert('Two')
    }
  }
}
</script>
