<template>
<v-content>
  <div class="start">
    {{ msg }}
  </div>
</v-content>
</template>

<script>

export default {
  name: 'start',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
