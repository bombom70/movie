<script setup lang="ts">
import AliasItem from './AliasItem.vue';

type TAliasListProps = {
  aliases: Set<string>
};

const props = defineProps<TAliasListProps>();
const emit = defineEmits(['removeAlias']);
</script>

<template>
  <div class="alias-list">
    <AliasItem
      v-for="alias of props.aliases"
      :key="alias"
      :alias="alias"
      @click="emit('removeAlias', alias)"
    />
  </div>
</template>

<style scoped lang="scss">
.alias-list {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}
</style>
