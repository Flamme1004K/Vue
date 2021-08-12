<template>
    <div>
        <label><input type="checkbox" v-model="checked">{{ checked }}</label>
        <label><input type="checkbox" v-model="checked1" true-value="yes" false-value="no">{{ checked1 }}</label>
    </div>
</template>
<script>
export default {
  data () {
    return {
      checked: true,
      checked1: true
    }
  }
}
</script>
