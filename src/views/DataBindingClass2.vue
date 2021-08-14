<template>
    <div class="container" v-bind:class="[ativeClass, errorClass]">Class Binding</div>
</template>
<script>
export default {
  data () {
    return {
      ativeClass: 'active',
      errorClass: 'text-red'
    }
  }
}
</script>
<style scoped>
  container {
    width : 100%;
    height: 200px;
  }
  .active {
    background-color: yellow;
    font-weight: bold;
  }
  .text-red {
    color: red;
  }
</style>
