<template>
  <div>
    <ChromeTabs/>
  </div>
</template>

<script>
import ChromeTabs from '@/components/tabs/ChromeTabs.vue';

export default {
  components: {
    ChromeTabs
  },
  data() {
    return {
    };
  },
  methods: {
    getGraphInfo(info){
      console.log('graph info:',info);
    },
    getMouseEvent(info){
      console.log('mouse info:',info);
    },
  }
}
</script>

<style lang="less" scoped>

</style>
