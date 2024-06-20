<template>
  <ul class="my-tree">
    <MyTreeNode v-for="node in tree" :key="node.id" :node="node"></MyTreeNode>
  </ul>
</template>

<script setup lang="ts">
  import MyTreeNode from './MyTreeNode.vue';
  import { onMounted, ref } from 'vue';
  import { ITreeItem, ITreeNode } from '../types';

  interface Props {
    data: ITreeItem[],
  };

  const props = defineProps<Props>();

  const tree = ref<ITreeNode[]>([]);

  function buildTree(data: ITreeItem[]): ITreeNode[] {
    const tree: ITreeNode[] = [];
    const lookup: Record<number, ITreeNode> = {};

    data.forEach(item => {
      lookup[item.id] = { ...item, children: [] };
    });

    data.forEach(item => {
      if (item.parent_id === 0) {
        tree.push(lookup[item.id]);
      } else {
        lookup[item.parent_id].children.push(lookup[item.id]);
      }
    });

    console.log(tree);
    return tree;
  }

  onMounted(() => {
    tree.value = buildTree(props.data);
  });
</script>

<style scoped lang="scss">
  .my-tree {
    text-align: left;
    padding: 24px 48px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #efefef;
  }
</style>
