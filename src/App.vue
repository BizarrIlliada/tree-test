<template>
  <div>
    <MyTree :data="exampleDataJSON"></MyTree>
  </div>
</template>

<script setup lang="ts">
  import MyTree from './components/MyTree.vue';
  import { useTreeExample } from './api/tree-example.api';

  const { exampleDataJSON } = useTreeExample();
</script>

<style scoped lang="scss">

</style>
