<template>
  <li class="my-tree-node">
    {{ node.name }}
    <ul v-if="node.children.length">
      <MyTreeNode v-for="child in node.children" :key="child.id" :node="child"></MyTreeNode>
    </ul>
  </li>
</template>

<script setup lang="ts">
  import { ITreeNode } from '../types';

  defineProps<{ node: ITreeNode }>();
</script>
