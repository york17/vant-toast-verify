<template>
  <div>
    <button @click="back">返回</button>
  </div>
</template>

<script>
import {
  Toast
} from 'vant'
export default {
  name: 'about',
  data() {
    return {
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    getData(){
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, 2000);
      })
    }
  },
  mounted(){
    // console.log(this.$toast);
    Toast.success('记载中');
    this.getData().then(() => {
      Toast.clear();
    })
  }
};
</script>

<style scoped>

</style>
