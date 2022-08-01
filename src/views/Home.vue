<template>
  <div>
    <button @click="pushPage">跳转</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    pushPage(){
      this.$router.push('/about')
    }
  },
  mounted(){
    console.log(this.$toast);
  }
};
</script>

<style scoped>
</style>
